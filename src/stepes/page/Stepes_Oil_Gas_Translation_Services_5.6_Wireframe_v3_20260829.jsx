import React, { useState } from "react";

const LINKS = {
  contactSales: "https://www.stepes.com/contact-sales/",
  contact: "https://www.stepes.com/contact-us/",
  energy: "https://www.stepes.com/energy-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  document: "https://www.stepes.com/document-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  video: "https://www.stepes.com/video-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  api: "https://www.stepes.com/developers/translation-api/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  integrations: "https://www.stepes.com/integrations/",
  languages: "https://www.stepes.com/translation-languages/",
  desktopPublishing: "https://www.stepes.com/multilingual-desktop-publishing/",
};

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    drill: <><path d="M4 20h16"/><path d="M7 20 10 4h4l3 16"/><path d="M8.5 12h7"/><path d="M6.5 16h11"/><path d="m10 4 2-2 2 2"/></>,
    pipeline: <><path d="M3 9h6v6H3z"/><path d="M15 9h6v6h-6z"/><path d="M9 12h6"/><path d="M6 9V6h12v3"/><path d="M6 15v3h12v-3"/></>,
    refinery: <><path d="M3 20h18"/><path d="M5 20V9h5v11"/><path d="M14 20V5h4v15"/><path d="M6 9V5h3v4"/><path d="M14 9h4"/><path d="M10 13h4"/></>,
    document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 11h6"/><path d="M9 15h6"/><path d="M9 19h4"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6z"/><path d="m9 12 2 2 4-5"/></>,
    scale: <><path d="M12 3v18"/><path d="M5 6h14"/><path d="m7 6-3 6h6z"/><path d="m17 6-3 6h6z"/><path d="M8 21h8"/></>,
    training: <><path d="M3 5h18v12H3z"/><path d="m7 21 5-4 5 4"/><path d="m9 9 6 3-6 3z"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><path d="M7 6h.01"/><path d="M10 6h.01"/><path d="m8 13 2 2 4-4"/></>,
    media: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/><path d="M7 22h10"/></>,
    flask: <><path d="M9 3h6"/><path d="M10 3v5l-5 9a2.6 2.6 0 0 0 2.3 4h9.4A2.6 2.6 0 0 0 19 17l-5-9V3"/><path d="M7 16h10"/></>,
    check: <><path d="m5 12 4 4 10-10"/></>,
    alert: <><path d="M12 3 2.7 20h18.6z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
    glossary: <><path d="M4 4h7v16H4z"/><path d="M13 4h7v16h-7z"/><path d="M7 8h2"/><path d="M7 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></>,
    ai: <><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 11h4"/><path d="M10 14h4"/></>,
    human: <><circle cx="12" cy="8" r="3"/><path d="M5 21c.7-4.2 3.1-6 7-6s6.3 1.8 7 6"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M18.5 9A7 7 0 0 0 6 6.5L4 9"/><path d="M5.5 15A7 7 0 0 0 18 17.5L20 15"/></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M6 12h3l2-4 2 7 2-3h3"/></>,
    wrench: <><path d="M14.5 6.5a4 4 0 0 0-5 5L3 18l3 3 6.5-6.5a4 4 0 0 0 5-5l-2.5 2.5-3-3z"/></>,
    building: <><path d="M4 21V6h10v15"/><path d="M14 10h6v11"/><path d="M7 9h2"/><path d="M7 13h2"/><path d="M7 17h2"/><path d="M16 13h2"/><path d="M16 17h2"/></>,
    format: <><path d="M5 4h14"/><path d="M9 4v16"/><path d="M5 20h8"/><path d="M15 10h4v10h-4z"/></>,
    enterprise: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 7.5 11 16"/><path d="M16 7.5 13 16"/><path d="M8 6h8"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9z"/></>,
    network: <><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 11 17 7"/><path d="M7 13 17 17"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    chevron: <><path d="m7 10 5 5 5-5"/></>,
    quote: <><path d="M6 17h4v-5H6V8h5v4c0 3.5-1.7 5-5 5z"/><path d="M14 17h4v-5h-4V8h5v4c0 3.5-1.7 5-5 5z"/></>,
  };
  return <svg {...common}>{icons[name] || icons.check}</svg>;
};

const EditorialLink = ({ href, children }) => (
  <a className="og-editorial-link" href={href}>
    <span>{children}</span><Icon name="arrow" size={17} />
  </a>
);

const SectionHead = ({ eyebrow, title, intro, centered = true, dark = false, className = "" }) => (
  <div className={`og-section-head ${centered ? "og-section-head--centered" : ""} ${dark ? "og-section-head--dark" : ""} ${className}`}>
    {eyebrow && <div className="og-eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>
);

const BulletList = ({ items }) => (
  <ul className="og-bullets">
    {items.map((item) => <li key={item}><span className="og-bullet-check"><Icon name="check" size={15} /></span><span>{item}</span></li>)}
  </ul>
);

const OilGasHeroArt = () => (
  <div className="og-hero-art" aria-label="Oil and gas operations illustration">
    <svg viewBox="0 0 680 500" role="img" aria-label="Line illustration of upstream, midstream, downstream, and digital oil and gas operations">
      <defs>
        <linearGradient id="heroSoft" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
          <stop offset="48%" stopColor="#f7f8fa" stopOpacity="1"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect x="22" y="26" width="636" height="440" rx="32" fill="url(#heroSoft)"/>
      <g fill="none" stroke="#747D8C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M37 394h607" opacity=".55"/>
        <path d="M95 394 152 130h54l56 264"/>
        <path d="M119 278h117M132 218h91M145 158h64"/>
        <path d="M174 130v-38M159 92h30M166 76h16"/>
        <path d="M177 92 145 52M177 92l33-40" opacity=".7"/>
        <path d="M270 334h126v60H270z"/>
        <path d="M289 334v-38h24v38M352 334v-61h22v61"/>
        <path d="M291 296v-45h20v45M354 273v-66h18v66"/>
        <path d="M301 251v-31M363 207v-35"/>
        <path d="M279 355h105M299 372h65" opacity=".65"/>
        <path d="M396 364h95c27 0 45-17 45-43v-34"/>
        <path d="M491 364v30M518 364v30"/>
        <path d="M536 287h49v-49"/>
        <path d="M565 238v-42"/>
        <circle cx="565" cy="184" r="12"/>
        <path d="M577 184h42"/>
        <path d="M619 184v210" opacity=".55"/>
        <rect x="436" y="74" width="164" height="105" rx="13"/>
        <path d="M436 104h164"/>
        <path d="M456 141h25l14-28 17 45 17-29 12 12h38"/>
        <path d="M456 90h6M470 90h6"/>
        <path d="M420 94 380 115 339 95" opacity=".45"/>
        <path d="M339 95v57" opacity=".45"/>
        <path d="M339 152 307 170" opacity=".45"/>
        <path d="M420 94v45" opacity=".45"/>
      </g>
      <g fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M565 172v24"/>
        <path d="M553 184h24"/>
        <circle cx="420" cy="94" r="6"/>
        <circle cx="339" cy="95" r="6"/>
        <circle cx="307" cy="170" r="6"/>
      </g>
      <g fill="#C11D63">
        <circle cx="152" cy="130" r="4"/>
        <circle cx="333" cy="334" r="4"/>
        <circle cx="536" cy="287" r="4"/>
      </g>
    </svg>
  </div>
);

const DigitalMockup = () => (
  <div className="og-digital-mockup" aria-label="Oil and gas operations localization interface example">
    <div className="og-mock-topbar">
      <div>
        <div className="og-mock-kicker">Pipeline Operations Localization</div>
        <strong>Remote Monitoring Console</strong>
      </div>
      <span className="og-status">Review Ready</span>
    </div>
    <div className="og-mock-tabs" aria-hidden="true">
      <span className="active">Dashboard</span><span>Assets</span><span>Alerts</span><span>Maintenance</span>
    </div>
    <div className="og-mock-grid">
      <div className="og-mock-panel">
        <div className="og-mock-label">Source · English</div>
        <div className="og-string-block">
          <span>ALARM MESSAGE</span>
          <strong>Pipeline pressure exceeds operating limit.</strong>
        </div>
        <div className="og-string-block">
          <span>FIELD ACTION</span>
          <strong>Inspect compressor station before restart.</strong>
        </div>
      </div>
      <div className="og-mock-panel og-mock-panel--target">
        <div className="og-mock-label">Target · Spanish</div>
        <div className="og-string-block">
          <span>MENSAJE DE ALARMA</span>
          <strong>La presión de la tubería supera el límite operativo.</strong>
        </div>
        <div className="og-string-block">
          <span>ACCIÓN DE CAMPO</span>
          <strong>Inspeccione la estación de compresión antes de reiniciar.</strong>
        </div>
      </div>
    </div>
    <div className="og-mock-footer">
      <span><Icon name="check" size={14}/> Terminology applied</span>
      <span><Icon name="check" size={14}/> Variables protected</span>
      <span><Icon name="check" size={14}/> 12 / 12 QA checks</span>
    </div>
  </div>
);

const TerminologyVisual = () => (
  <div className="og-term-visual" aria-label="Connected oil and gas terminology illustration">
    <div className="og-term-center">
      <Icon name="refinery" size={42}/>
      <strong>Approved Oil & Gas Terminology</strong>
      <span>One governed language asset</span>
    </div>
    {[
      ["Manuals", "top left"], ["HSE", "top right"], ["Training", "middle left"],
      ["HMI / SCADA", "middle right"], ["Field Content", "bottom left"], ["Software", "bottom right"]
    ].map(([label, pos]) => <div key={label} className={`og-term-node ${pos.replace(" ", "-")}`}>{label}</div>)}
    <svg viewBox="0 0 600 420" aria-hidden="true">
      <g stroke="#C8CDD5" strokeWidth="2" strokeDasharray="5 7" fill="none">
        <path d="M300 205 145 90"/><path d="M300 205 455 90"/><path d="M300 205 95 210"/>
        <path d="M300 205 505 210"/><path d="M300 205 145 330"/><path d="M300 205 455 330"/>
      </g>
    </svg>
  </div>
);

const QAVisual = () => (
  <div className="og-qa-panel">
    <div className="og-qa-title-row">
      <div><div className="og-mock-kicker">Safety-Critical Translation QA</div><strong>HSE Procedure Review</strong></div>
      <span className="og-status og-status--dark">Controlled</span>
    </div>
    {[
      ["Terminology", "Approved equipment and HSE terms verified"],
      ["Numbers & units", "Pressure, temperature, limits, and measurements checked"],
      ["Warnings", "Hazards, cautions, and procedural sequencing validated"],
      ["In context", "Final document and interface review supported"],
    ].map(([title, desc]) => (
      <div className="og-qa-row" key={title}>
        <span className="og-qa-icon"><Icon name="check" size={15}/></span>
        <div><strong>{title}</strong><p>{desc}</p></div>
      </div>
    ))}
  </div>
);

const workflowItems = [
  {
    icon: "human",
    kicker: "HIGH-CONTROL CONTENT",
    title: "Expert Human Translation and Review",
    text: "A human-led workflow for safety-critical instructions, regulatory or compliance content, engineering specifications, legal agreements, and other material requiring close linguistic control.",
  },
  {
    icon: "ai",
    kicker: "SCALABLE PROFESSIONAL QUALITY",
    title: "AI Translation With Professional Human Review",
    text: "AI-assisted translation combined with qualified post-editing and quality assurance for suitable high-volume operational, technical, knowledge, and recurring product content.",
  },
  {
    icon: "refresh",
    kicker: "FREQUENT DIGITAL UPDATES",
    title: "Continuous Localization",
    text: "Ongoing translation workflows for software, field applications, digital products, equipment documentation, and content that changes across release cycles.",
  },
];

const contentTypes = [
  {
    icon: "document",
    title: "Engineering and Technical Documentation",
    desc: "Translate highly specialized engineering information while preserving technical meaning, measurements, equipment identifiers, diagrams, and approved terminology.",
    items: ["Engineering specifications and technical reports", "Equipment, installation, service, and maintenance manuals", "Product datasheets and material specifications", "P&IDs, technical drawings, commissioning and inspection documentation"],
    link: [LINKS.technical, "Technical Translation Services"],
  },
  {
    icon: "wrench",
    title: "Operations and Maintenance",
    desc: "Keep procedures clear and consistent for the people responsible for operating, inspecting, maintaining, and repairing critical assets.",
    items: ["Standard operating procedures and work instructions", "Drilling, completion, and production procedures", "Preventive and corrective maintenance", "Turnaround, shutdown, startup, and field instructions"],
    link: [LINKS.document, "Document Translation Services"],
  },
  {
    icon: "shield",
    title: "HSE and Environmental Content",
    desc: "Help multinational workforces understand the safety, health, environmental, and operational requirements that apply to their work.",
    items: ["HSE manuals, site safety procedures, and job safety analyses", "Emergency response, permit-to-work, and lockout/tagout content", "Hazard communication, PPE, signage, and warnings", "Methane monitoring, emissions, spill response, and environmental reporting"],
  },
  {
    icon: "scale",
    title: "Commercial, Legal, and Supply-Chain Content",
    desc: "Support global procurement, contracting, project delivery, partnerships, and customer communication.",
    items: ["EPC contracts, tenders, RFPs, and RFQs", "Procurement, supplier, and compliance documentation", "Statements of work and commercial agreements", "Product catalogs, technical marketing, and corporate communications"],
    link: [LINKS.legal, "Legal Translation Services"],
  },
  {
    icon: "training",
    title: "Training and Workforce Content",
    desc: "Deliver technical knowledge and safety information to multilingual teams across locations, roles, and learning formats.",
    items: ["Operator, technician, equipment, and maintenance training", "HSE courses, onboarding, and eLearning", "Assessments and quick-reference materials", "Training videos, subtitles, and voiceover"],
    link: [LINKS.elearning, "eLearning Translation Services"],
  },
  {
    icon: "software",
    title: "Software and Digital Operations",
    desc: "Localize the interfaces that operators, engineers, technicians, and field teams use to manage modern oil & gas assets.",
    items: ["HMI interfaces and SCADA systems", "Drilling applications and production dashboards", "Asset-performance, remote-monitoring, and maintenance platforms", "Field-service apps, mobile workforce tools, and equipment interfaces"],
    link: [LINKS.software, "Software Localization Services"],
  },
];

const faqItems = [
  ["What types of oil and gas documents does Stepes translate?", "Stepes translates engineering specifications, equipment manuals, operating procedures, drilling and completion documentation, HSE materials, maintenance instructions, inspection reports, P&IDs and technical drawings, training, contracts, tenders, regulatory and environmental content, software interfaces, websites, marketing materials, and other oil & gas content. We also support complex documents containing tables, diagrams, annotations, graphics, and structured data."],
  ["Do you provide upstream, midstream, and downstream translation services?", "Yes. Stepes supports the full oil & gas value chain. Upstream services include exploration, drilling, well construction, completion, production, reservoir operations, and oilfield services. Midstream services cover gathering, gas processing, pipelines, compression, terminals, storage, transportation, and LNG infrastructure. Downstream services include refining, petrochemicals, process operations, plant maintenance, product documentation, and distribution."],
  ["Can Stepes translate HSE and safety-critical oil and gas content?", "Yes. Stepes translates HSE manuals, safe-work procedures, job safety analyses, emergency-response materials, permit-to-work documentation, hazard communication, environmental procedures, safety training, warnings, signage, and other safety-related content. Workflows can include specialized linguist selection, bilingual review, terminology verification, numerical checks, automated QA, formatting review, and client validation according to project requirements."],
  ["How does Stepes maintain accurate oil and gas terminology?", "We combine oil & gas subject-matter linguists with client reference materials, multilingual glossaries, centralized termbases, translation memory, project instructions, linguistic review, and automated terminology QA. Approved equipment names, process terminology, safety language, acronyms, product names, and company-specific terms can then be reused consistently across documents, software, training, and future projects."],
  ["Can Stepes use our existing translation memories and glossaries?", "Yes. Existing translation memories, termbases, glossaries, style guides, approved translations, previous bilingual files, and client reference materials can be evaluated and incorporated into the localization workflow. Reusing validated language assets can improve consistency and reduce unnecessary retranslation across recurring content."],
  ["Does Stepes localize SCADA, HMI, and other oil and gas software?", "Yes. Stepes localizes SCADA and HMI interfaces, drilling applications, production dashboards, asset-performance platforms, maintenance systems, field-service applications, remote-monitoring tools, equipment software, mobile applications, and other digital oil & gas systems. Services can include string translation, terminology management, in-context review, screenshot testing, locale validation, linguistic QA, and continuous release support."],
  ["Does Stepes work with oilfield service companies, EPCs, and equipment manufacturers?", "Yes. In addition to producers and operators, Stepes supports oilfield service companies, EPC contractors, engineering firms, equipment manufacturers, automation providers, petrochemical companies, technology developers, and other organizations throughout the oil & gas supply chain."],
  ["How does Stepes use AI for oil and gas translation?", "Stepes uses AI within controlled translation workflows rather than applying the same method to every document. The appropriate workflow depends on technical complexity, safety implications, legal or regulatory exposure, audience, volume, update frequency, and quality requirements. Suitable high-volume content can use AI translation with professional human review, while safety-critical, contractual, regulatory, or highly specialized technical materials may require a more human-led translation and validation process."],
  ["Can Stepes translate oil and gas training and multimedia?", "Yes. We localize operator and technician training, HSE courses, eLearning, instructor-led materials, assessments, training videos, subtitles, voiceover, graphics, and supporting documentation. Shared terminology can help ensure that the language used in training matches terminology in manuals, procedures, equipment interfaces, and field operations."],
  ["Can Stepes handle multilingual desktop publishing and complex technical files?", "Yes. Stepes supports multilingual desktop publishing and localization engineering for Word, Excel, PowerPoint, InDesign, PDFs, XML, structured content, software resource files, technical graphics, diagrams, tables, and other formats. Services can include text extraction, layout adjustment, graphic localization, right-to-left formatting, and final production QA."],
  ["What languages does Stepes support for oil and gas translation?", "Stepes supports more than 100 languages, including Arabic, Chinese, Spanish, Portuguese, French, German, Japanese, Korean, Vietnamese, Indonesian, Turkish, Polish, Romanian, Dutch, Norwegian, Kazakh, Azerbaijani, and many others. Projects are matched with linguists according to the language pair, target market, technical subject matter, and content type."],
  ["Can Stepes support a global oil and gas translation program across multiple facilities?", "Yes. Stepes supports enterprise programs involving multiple facilities, departments, contractors, languages, and content formats. Capabilities include centralized translation management, shared translation memories and terminology, workflow automation, regional review, APIs, reporting, quality management, and recurring localization support."],
  ["How much do oil and gas translation services cost?", "Pricing depends on the language pairs, source volume, technical complexity, file format, workflow, required review level, turnaround, and additional services such as desktop publishing, software testing, transcription, voiceover, or multimedia production. Stepes can review your source files and requirements and provide a detailed quotation and delivery schedule."],
  ["How do I start an oil and gas translation project with Stepes?", "Send us your source content along with the required target languages, preferred delivery date, and any available terminology, previous translations, or project instructions. Our team will review the materials, recommend an appropriate workflow, and provide pricing and a delivery plan."],
];

export default function StepesOilGasTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="og-page">
      <style>{`
        :root{--og-magenta:#C11D63;--og-magenta-dark:#A71954;--og-burgundy:#7A1542;--og-blush:#FDF2F7;--og-pink-light:#F2A7C6;--og-ink:#12151B;--og-text:#333943;--og-muted:#66707F;--og-line:#E2E5E9;--og-soft:#F6F7F9;--og-dark:#171A20;--og-dark-2:#20242C;--og-white:#fff;--og-shadow:0 22px 60px rgba(28,35,45,.09)}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        .og-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--og-text);background:#fff;line-height:1.58;overflow-x:hidden}
        .og-page a{color:inherit}
        .og-shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px;min-width:0}
        .og-section{padding:96px 0}
        .og-section--dense{padding:80px 0}
        .og-section--soft{background:var(--og-soft)}
        .og-section--blush{background:var(--og-blush)}
        .og-section--dark{background:var(--og-dark);color:#fff}
        .og-eyebrow{font-size:11px!important;line-height:1.3!important;letter-spacing:.15em!important;text-transform:uppercase!important;font-weight:600!important;color:var(--og-magenta)!important;margin:0 0 16px!important;opacity:1!important}
        .og-section--dark .og-eyebrow,.og-section-head--dark .og-eyebrow{color:var(--og-pink-light)!important}
        h1,h2,h3,p{margin-top:0;overflow-wrap:break-word}
        h1,h2,h3{color:var(--og-ink);font-weight:600;letter-spacing:-.025em;line-height:1.08}
        h1{font-size:48px;margin-bottom:24px;max-width:680px}
        h2{font-size:36px;margin-bottom:22px}
        h3{font-size:24px;margin-bottom:13px}
        p,li{font-size:16px}
        .og-body-lg{font-size:18px;line-height:1.65;color:#444B57}
        .og-section--dark h2,.og-section--dark h3,.og-section--dark p,.og-section--dark li{color:#fff}
        .og-section--dark p,.og-section--dark li{color:#CFD4DC}
        .og-section-head{max-width:820px;margin-bottom:52px}
        .og-section-head--centered{margin-left:auto;margin-right:auto;text-align:center}
        .og-section-head p{font-size:18px;line-height:1.65;color:#5A6370;margin:0}
        .og-section-head--dark p{color:#CBD1D9}
        .og-btn-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
        .og-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:13px 22px;border-radius:999px;text-decoration:none;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent}
        .og-btn--primary,.og-btn--primary:link,.og-btn--primary:visited,.og-btn--primary:hover,.og-btn--primary:active,.og-btn--primary:focus,.og-btn--primary:focus-visible{background:var(--og-magenta);color:#fff!important}
        .og-btn--primary svg,.og-btn--primary span{color:#fff!important;stroke:#fff!important}
        .og-btn--primary:hover{background:var(--og-magenta-dark);transform:translateY(-1px)}
        .og-btn--secondary{background:#fff;border-color:#CDD2D9;color:#171A20!important}
        .og-btn--secondary:hover{border-color:#AEB5BF;transform:translateY(-1px)}
        .og-btn:focus-visible,.og-editorial-link:focus-visible,.og-faq-button:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
        .og-editorial-link{display:inline-flex;max-width:100%;overflow-wrap:anywhere;align-items:center;gap:7px;color:var(--og-magenta)!important;font-size:16px;font-weight:600;text-decoration:none;margin-top:18px;min-height:44px}
        .og-editorial-link svg{transition:transform .18s ease}
        .og-editorial-link:hover svg{transform:translateX(3px)}
        .og-inline-links{display:flex;gap:20px;flex-wrap:wrap;align-items:center}
        .og-inline-links--enterprise{gap:22px;margin-top:22px}
        .og-hero-support{margin-top:14px!important}

        /* Hero */
        .og-hero{padding:104px 0 88px;background:linear-gradient(180deg,#fff 0%,#FAFAFB 100%)}
        .og-hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(430px,.98fr);gap:62px;align-items:center}
        .og-hero-copy{max-width:670px}
        .og-hero-copy .og-body-lg{max-width:650px;margin-bottom:0}
        .og-hero-art{width:100%}
        .og-hero-art svg{display:block;width:100%;height:auto}
        .og-proof{border-top:1px solid var(--og-line);border-bottom:1px solid var(--og-line);background:#fff}
        .og-proof-grid{display:grid;grid-template-columns:repeat(4,1fr)}
        .og-proof-item{padding:25px 24px;min-height:94px;display:flex;align-items:center;justify-content:center;text-align:center;border-right:1px solid var(--og-line)}
        .og-proof-item:last-child{border-right:0}
        .og-proof-item strong{font-size:16px;color:#252A33;font-weight:600;line-height:1.35}

        /* Value chain */
        .og-value-chain{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--og-line);border-radius:30px;overflow:hidden;background:#fff}
        .og-chain-col{padding:36px 34px 34px;border-right:1px solid var(--og-line);position:relative}
        .og-chain-col:last-child{border-right:0}
        .og-icon-box{width:46px;height:46px;border-radius:14px;background:var(--og-blush);color:var(--og-magenta);display:flex;align-items:center;justify-content:center;margin-bottom:22px;border:1px solid #F3D7E4}
        .og-chain-col:nth-child(2) .og-icon-box{color:var(--og-magenta-dark);background:#FAEDF3}
        .og-chain-col:nth-child(3) .og-icon-box{color:var(--og-burgundy);background:#F8EEF2}
        .og-chain-col h3{margin-bottom:12px}
        .og-chain-col p{color:#5D6571;margin-bottom:20px}
        .og-mini-list{list-style:none;padding:0;margin:0;display:grid;gap:9px}
        .og-mini-list li{color:#3F4650;display:flex;gap:10px;align-items:flex-start}
        .og-mini-list li::before{content:"";width:5px;height:5px;border-radius:50%;background:#AAB1BA;flex:0 0 auto;margin-top:.67em}
        .og-chain-link{margin-top:28px;text-align:center}

        /* content ecosystem */
        .og-content-list{border-top:1px solid var(--og-line)}
        .og-content-row{display:grid;grid-template-columns:54px minmax(240px,.75fr) minmax(0,1.25fr);gap:28px;padding:34px 0;border-bottom:1px solid var(--og-line);align-items:start}
        .og-content-row .og-icon-box{margin:0;width:48px;height:48px}
        .og-content-row:nth-child(3n+2) .og-icon-box{color:var(--og-magenta-dark);background:#FAEDF3}
        .og-content-row:nth-child(3n) .og-icon-box{color:var(--og-burgundy);background:#F8EEF2}
        .og-content-row h3{margin-top:4px}
        .og-content-row .og-row-intro{color:#5C6571;margin:0}
        .og-content-detail{display:grid;grid-template-columns:1fr 1fr;gap:8px 26px}
        .og-content-detail span{font-size:16px;color:#353C46;display:flex;gap:10px;align-items:flex-start}
        .og-content-detail span::before{content:"";width:4px;height:4px;background:#AAB1BA;border-radius:50%;margin-top:.72em;flex:0 0 auto}

        /* Safety */
        .og-safety-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(430px,1.1fr);gap:72px;align-items:center}
        .og-safety-copy h2{max-width:590px}
        .og-safety-copy .og-body-lg{color:#D7DBE1;max-width:610px}
        .og-bullets{list-style:none;padding:0;margin:28px 0 0;display:grid;gap:14px}
        .og-bullets li{display:flex;gap:12px;align-items:flex-start;color:inherit}
        .og-bullet-check{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(193,29,99,.12);color:var(--og-magenta);flex:0 0 auto;margin-top:1px}
        .og-section--dark .og-bullet-check{background:rgba(242,167,198,.12);color:var(--og-pink-light)}
        .og-qa-panel{background:#22262E;border:1px solid #343A45;border-radius:28px;padding:30px;box-shadow:0 30px 70px rgba(0,0,0,.18)}
        .og-qa-title-row{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;padding-bottom:23px;border-bottom:1px solid #363C46}
        .og-qa-title-row strong{font-size:20px;color:#fff}
        .og-mock-kicker{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#8A93A1;font-weight:600;margin-bottom:5px}
        .og-status{display:inline-flex;align-items:center;min-height:30px;padding:5px 10px;border-radius:999px;background:#F4F6F8;color:#45505C;font-size:14px;font-weight:600;white-space:nowrap}
        .og-status--dark{background:rgba(242,167,198,.12);color:#F2A7C6}
        .og-qa-row{display:grid;grid-template-columns:30px 1fr;gap:13px;padding:20px 0;border-bottom:1px solid #343A45}
        .og-qa-row:last-child{border-bottom:0;padding-bottom:0}
        .og-qa-icon{width:27px;height:27px;border-radius:9px;background:rgba(242,167,198,.12);color:#F2A7C6;display:flex;align-items:center;justify-content:center}
        .og-qa-row strong{font-size:16px;color:#fff}
        .og-qa-row p{font-size:16px!important;color:#BBC1CA!important;margin:3px 0 0!important}

        /* Terminology */
        .og-term-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(440px,.95fr);gap:70px;align-items:center}
        .og-term-copy{max-width:640px}
        .og-term-copy .og-body-lg{margin-bottom:22px}
        .og-term-pills{display:flex;flex-wrap:wrap;gap:9px;margin-top:26px}
        .og-term-pills span{font-size:16px;border:1px solid #D9DDE2;background:#fff;border-radius:999px;padding:8px 12px;color:#404852}
        .og-term-visual{position:relative;min-height:420px;border:1px solid var(--og-line);border-radius:30px;background:#fff;overflow:hidden}
        .og-term-visual svg{position:absolute;inset:0;width:100%;height:100%}
        .og-term-center{position:absolute;z-index:2;left:50%;top:50%;transform:translate(-50%,-50%);width:218px;min-height:142px;padding:25px;border-radius:25px;background:#fff;box-shadow:var(--og-shadow);text-align:center;border:1px solid #E4E7EB;color:#4D5662;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px}
        .og-term-center strong{font-size:17px;line-height:1.3;color:#242A32}
        .og-term-center span{font-size:16px;color:#77818E}
        .og-term-node{position:absolute;z-index:2;background:#F5F6F8;border:1px solid #E0E4E8;border-radius:14px;padding:10px 13px;font-size:16px;font-weight:600;color:#414A55}
        .og-term-node.top-left{left:9%;top:14%}.og-term-node.top-right{right:9%;top:14%}
        .og-term-node.middle-left{left:5%;top:48%}.og-term-node.middle-right{right:5%;top:48%}
        .og-term-node.bottom-left{left:10%;bottom:14%}.og-term-node.bottom-right{right:10%;bottom:14%}

        /* Workflow */
        .og-workflow{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #343942;border-bottom:1px solid #343942}
        .og-workflow-item{padding:34px 32px;border-right:1px solid #343942}
        .og-workflow-item:last-child{border-right:0}
        .og-workflow-item .og-icon-box{background:#272B33;color:#F2A7C6;margin-bottom:24px;border-color:#3A404A}
        .og-workflow-item .og-work-kicker{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#F2A7C6;font-weight:600;margin-bottom:10px}
        .og-workflow-item h3{font-size:22px;color:#fff}
        .og-workflow-item p{font-size:16px;color:#C7CDD5;margin-bottom:0}
        .og-workflow-links{display:flex;justify-content:center;gap:26px;flex-wrap:wrap;margin-top:34px}
        .og-section--dark .og-workflow-links .og-editorial-link{color:#F2A7C6!important}
        .og-workflow-principle{max-width:840px;margin:26px auto 0!important;text-align:center;color:#D7DBE1!important;font-size:16px!important}
        .og-workflow-principle strong{color:#fff;font-weight:600}

        /* Digital */
        .og-digital-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(520px,1.2fr);gap:62px;align-items:center}
        .og-digital-copy .og-body-lg{margin-bottom:23px}
        .og-digital-list{display:grid;gap:14px;margin-top:22px}
        .og-digital-list div{display:grid;grid-template-columns:34px 1fr;gap:12px;align-items:flex-start}
        .og-digital-list .og-icon-box{width:34px;height:34px;border-radius:10px;margin:0;background:#F0F2F5}
        .og-digital-list strong{font-size:16px;color:#252B33}
        .og-digital-list p{font-size:16px;color:#5F6875;margin:2px 0 0}
        .og-digital-mockup{border:1px solid #DCE0E5;border-radius:28px;background:#fff;overflow:hidden;box-shadow:var(--og-shadow)}
        .og-mock-topbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;padding:24px 26px;border-bottom:1px solid #E5E8EC}
        .og-mock-topbar strong{font-size:19px;color:#222831}
        .og-mock-tabs{padding:0 26px;border-bottom:1px solid #E5E8EC;display:flex;gap:24px;overflow:hidden}
        .og-mock-tabs span{font-size:14px;color:#78818E;padding:13px 0 11px;white-space:nowrap;border-bottom:2px solid transparent}
        .og-mock-tabs .active{color:#2F3742;border-bottom-color:var(--og-magenta);font-weight:600}
        .og-mock-grid{display:grid;grid-template-columns:1fr 1fr}
        .og-mock-panel{padding:24px 26px;border-right:1px solid #E5E8EC;background:#FBFBFC}
        .og-mock-panel:last-child{border-right:0;background:#fff}
        .og-mock-label{font-size:14px;color:#7B8592;font-weight:600;margin-bottom:16px}
        .og-string-block{padding:16px 0;border-bottom:1px solid #E7E9EC}
        .og-string-block:last-child{border-bottom:0}
        .og-string-block span{display:block;font-size:11px;letter-spacing:.11em;color:#8C95A1;font-weight:600;margin-bottom:6px}
        .og-string-block strong{display:block;font-size:16px;line-height:1.5;color:#2E3640;font-weight:600}
        .og-mock-footer{display:flex;gap:18px;flex-wrap:wrap;padding:16px 26px;border-top:1px solid #E5E8EC;background:#F8F9FA}
        .og-mock-footer span{font-size:14px;color:#626C79;display:flex;gap:5px;align-items:center}
        .og-mock-footer svg{color:var(--og-magenta)}

        /* Ecosystem companies */
        .og-audience-grid{display:grid;grid-template-columns:repeat(2,1fr);border:1px solid var(--og-line);border-radius:28px;overflow:hidden;background:#fff}
        .og-audience-col{padding:32px 34px;border-right:1px solid var(--og-line);border-bottom:1px solid var(--og-line)}
        .og-audience-col:nth-child(2n){border-right:0}
        .og-audience-col:nth-last-child(-n+2){border-bottom:0}
        .og-audience-col h3{font-size:22px}
        .og-audience-col p{color:#5C6571}
        .og-audience-col .og-mini-list{margin-top:18px}

        /* Training */
        .og-training-grid{display:grid;grid-template-columns:minmax(0,.88fr) minmax(420px,1.12fr);gap:72px;align-items:start}
        .og-training-panel{border:1px solid var(--og-line);border-radius:28px;overflow:hidden;background:#fff}
        .og-training-row{display:grid;grid-template-columns:46px 1fr;padding:24px 28px;gap:16px;border-bottom:1px solid var(--og-line)}
        .og-training-row:last-child{border-bottom:0}
        .og-training-row .og-icon-box{width:42px;height:42px;border-radius:12px;margin:0}
        .og-training-row:nth-child(even) .og-icon-box{color:var(--og-magenta-dark);background:#FAEDF3}
        .og-training-row h3{font-size:19px;margin-bottom:5px}
        .og-training-row p{margin:0;color:#626B77}

        /* Deliverable */
        .og-deliver-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(420px,1.1fr);gap:70px;align-items:center}
        .og-file-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--og-line);border-radius:28px;overflow:hidden;background:#fff}
        .og-file-col{padding:30px;border-right:1px solid var(--og-line)}
        .og-file-col:last-child{border-right:0}
        .og-file-col h3{font-size:20px}
        .og-file-tags{display:flex;flex-wrap:wrap;gap:9px;margin-top:20px}
        .og-file-tags span{font-size:16px;padding:8px 10px;border:1px solid #DDE1E5;border-radius:10px;background:#F8F9FA;color:#48515C}

        /* enterprise */
        .og-enterprise-wrap{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:70px;align-items:start}
        .og-enterprise-list{border-top:1px solid #363C46}
        .og-enterprise-row{display:grid;grid-template-columns:46px 1fr;gap:15px;padding:23px 0;border-bottom:1px solid #363C46}
        .og-enterprise-row .og-icon-box{width:42px;height:42px;border-radius:12px;background:#262B33;color:#F2A7C6;margin:0;border-color:#3A404A}
        .og-enterprise-row h3{font-size:19px;color:#fff;margin-bottom:5px}
        .og-enterprise-row p{font-size:16px;color:#BFC6CF;margin:0}

        /* languages */
        .og-language-band{display:grid;grid-template-columns:minmax(0,.74fr) minmax(0,1.26fr);gap:70px;align-items:start}
        .og-region-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:25px}
        .og-region-list span{font-size:16px;border:1px solid #D9DEE3;border-radius:999px;padding:8px 12px;background:#fff}
        .og-language-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
        .og-language-grid span{padding:12px 13px;border-bottom:1px solid var(--og-line);font-size:16px;color:#3C444F}

        /* Why */
        .og-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--og-line);border-radius:28px;overflow:hidden}
        .og-why-item{padding:31px 28px;min-height:220px;border-right:1px solid var(--og-line);border-bottom:1px solid var(--og-line)}
        .og-why-item:nth-child(3n){border-right:0}.og-why-item:nth-last-child(-n+3){border-bottom:0}
        .og-why-item .og-icon-box{margin-bottom:20px}
        .og-why-item:nth-child(3n+2) .og-icon-box{color:var(--og-magenta-dark);background:#FAEDF3}
        .og-why-item:nth-child(3n) .og-icon-box{color:var(--og-burgundy);background:#F8EEF2}
        .og-why-item h3{font-size:20px}
        .og-why-item p{color:#5E6773;margin:0}

        /* Connected */
        .og-connected{border-radius:30px;background:#F6F7F9;border:1px solid #E2E5E9;padding:48px;display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;align-items:center}
        .og-connected h2{margin-bottom:18px}
        .og-connected-flow{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:9px}
        .og-flow-chip{padding:10px 12px;border-radius:12px;background:#fff;border:1px solid #DBDFE4;font-size:16px;font-weight:600;color:#404954}
        .og-flow-arrow{color:#A2A9B2;display:flex}

        /* Related */
        .og-related-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--og-line)}
        .og-related-item{padding:27px 28px;border-right:1px solid var(--og-line);border-bottom:1px solid var(--og-line)}
        .og-related-item:nth-child(3n){border-right:0}
        .og-related-item h3{font-size:20px;margin-bottom:9px}
        .og-related-item p{color:#606A76;margin-bottom:0}

        /* FAQ */
        .og-faq-layout{display:grid;grid-template-columns:minmax(260px,.38fr) minmax(0,.62fr);gap:70px;align-items:start}
        .og-faq-intro{position:sticky;top:24px}
        .og-faq-intro p{font-size:17px;color:#616B77}
        .og-faq-panel{border-top:1px solid var(--og-line)}
        .og-faq-item{border-bottom:1px solid var(--og-line)}
        .og-faq-button{width:100%;border:0;background:transparent;display:grid;grid-template-columns:1fr 34px;gap:18px;text-align:left;padding:22px 0;cursor:pointer;color:#232933;align-items:center}
        .og-faq-button span{font-size:18px;font-weight:600;line-height:1.4}
        .og-faq-toggle{width:32px;height:32px;border-radius:50%;border:1px solid #D7DBE0;display:flex;align-items:center;justify-content:center;transition:.2s ease;color:#636D79}
        .og-faq-item.is-open .og-faq-toggle{transform:rotate(180deg);background:#F7F8F9}
        .og-faq-answer{padding:0 56px 22px 0;max-width:840px}
        .og-faq-answer p{font-size:16px;line-height:1.68;color:#5C6672;margin:0}

        /* Final CTA */
        .og-final{padding:88px 0;background:var(--og-burgundy);color:#fff}
        .og-final-inner{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:50px;align-items:center}
        .og-final h2{color:#fff;max-width:760px;margin-bottom:15px}
        .og-final p{font-size:18px;color:#F6DDE8;max-width:760px;margin:0}
        .og-final .og-btn--primary,.og-final .og-btn--primary:link,.og-final .og-btn--primary:visited{background:#fff;color:#5D1233!important}
        .og-final .og-btn--primary span,.og-final .og-btn--primary svg{color:#5D1233!important;stroke:#5D1233!important}
        .og-final .og-btn--primary:hover{background:#FFF6FA}
        .og-final .og-btn--secondary{background:transparent;border-color:rgba(255,255,255,.45);color:#fff!important}

        @media (max-width:1100px){
          .og-shell{padding-left:40px;padding-right:40px}
          .og-hero-grid{grid-template-columns:1fr 440px;gap:34px}
          .og-safety-grid,.og-term-grid,.og-digital-grid,.og-training-grid,.og-deliver-grid{gap:46px}
          .og-digital-grid{grid-template-columns:.85fr 1.15fr}
          .og-content-row{grid-template-columns:48px minmax(210px,.7fr) 1.3fr}
          .og-language-grid{grid-template-columns:repeat(3,1fr)}
        }

        @media (max-width:820px){
          .og-shell{padding-left:24px;padding-right:24px}

          .og-hero-grid>*,.og-safety-grid>*,.og-term-grid>*,.og-digital-grid>*,.og-training-grid>*,.og-deliver-grid>*,.og-enterprise-wrap>*,.og-language-band>*,.og-final-inner>*{min-width:0}
          .og-section{padding:80px 0}.og-section--dense{padding:72px 0}.og-hero{padding:88px 0 72px}
          h1{font-size:42px}.og-section h2{font-size:32px}.og-section h3{font-size:22px}
          .og-hero-grid,.og-safety-grid,.og-term-grid,.og-digital-grid,.og-training-grid,.og-deliver-grid,.og-enterprise-wrap,.og-language-band,.og-final-inner{grid-template-columns:1fr}
          .og-hero-copy{max-width:760px;text-align:center;margin:0 auto}.og-hero-copy h1,.og-hero-copy .og-body-lg{margin-left:auto;margin-right:auto}.og-hero-copy .og-btn-row{justify-content:center}.og-hero-art{max-width:620px;margin:0 auto}
          .og-proof-grid{grid-template-columns:repeat(2,1fr)}
          .og-proof-item:nth-child(2){border-right:0}.og-proof-item:nth-child(-n+2){border-bottom:1px solid var(--og-line)}
          .og-value-chain{grid-template-columns:1fr}.og-chain-col{border-right:0;border-bottom:1px solid var(--og-line)}.og-chain-col:last-child{border-bottom:0}
          .og-content-row{grid-template-columns:48px 1fr}.og-content-detail{grid-column:2;grid-template-columns:1fr 1fr}
          .og-workflow{grid-template-columns:1fr}.og-workflow-item{border-right:0;border-bottom:1px solid #343942}.og-workflow-item:last-child{border-bottom:0}
          .og-digital-mockup{max-width:700px}
          .og-audience-grid{grid-template-columns:1fr}.og-audience-col,.og-audience-col:nth-child(2n),.og-audience-col:nth-last-child(-n+2){border-right:0;border-bottom:1px solid var(--og-line)}.og-audience-col:last-child{border-bottom:0}
          .og-file-panel{max-width:680px}
          .og-language-grid{grid-template-columns:repeat(4,1fr)}
          .og-why-grid{grid-template-columns:repeat(2,1fr)}.og-why-item:nth-child(3n){border-right:1px solid var(--og-line)}.og-why-item:nth-child(2n){border-right:0}.og-why-item:nth-last-child(-n+3){border-bottom:1px solid var(--og-line)}.og-why-item:nth-last-child(-n+2){border-bottom:0}
          .og-connected{grid-template-columns:1fr;padding:40px}
          .og-related-grid{grid-template-columns:repeat(2,1fr)}.og-related-item:nth-child(3n){border-right:1px solid var(--og-line)}.og-related-item:nth-child(2n){border-right:0}
          .og-faq-layout{grid-template-columns:1fr;gap:32px}.og-faq-intro{position:static;max-width:760px}
          .og-final-inner{gap:26px}.og-final .og-btn-row{margin-top:0;justify-content:flex-start}
        }

        @media (max-width:600px){
          .og-shell{padding-left:20px;padding-right:20px}
          .og-section{padding:68px 0}.og-section--dense{padding:64px 0}.og-hero{padding:72px 0 64px}
          h1{font-size:38px;line-height:1.07;margin-bottom:20px}.og-section h2{font-size:30px}.og-section h3{font-size:20px}
          .og-body-lg,.og-section-head p,.og-final p{font-size:18px}
          .og-hero-copy{text-align:center;margin:0 auto}.og-hero-copy h1{margin-left:auto;margin-right:auto}.og-hero-copy .og-body-lg{margin-left:auto;margin-right:auto}
          .og-hero-copy .og-btn-row{justify-content:center}.og-hero-copy .og-btn{width:100%}
          .og-hero-art{margin-top:6px}
          .og-section-head--centered{margin-left:auto;margin-right:auto;text-align:center}
          .og-faq-intro,.og-safety-copy,.og-term-copy,.og-digital-copy,.og-deliver-copy,.og-enterprise-copy,.og-training-copy{text-align:left}
          .og-proof-grid{grid-template-columns:1fr 1fr}.og-proof-item{padding:20px 12px;min-height:86px}
          .og-chain-col{padding:28px 24px}
          .og-content-row{grid-template-columns:42px 1fr;gap:17px;padding:28px 0}.og-content-row .og-icon-box{width:42px;height:42px}.og-content-detail{grid-column:1/-1;grid-template-columns:1fr;padding-left:59px}
          .og-qa-panel{padding:24px}.og-qa-title-row{flex-direction:column}.og-status{align-self:flex-start}
          .og-term-visual{min-height:0;padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-items:stretch}.og-term-visual svg{display:none}.og-term-center{position:relative;left:auto;top:auto;transform:none;width:100%;min-height:128px;padding:20px;grid-column:1/-1}.og-term-node,.og-term-node.top-left,.og-term-node.top-right,.og-term-node.middle-left,.og-term-node.middle-right,.og-term-node.bottom-left,.og-term-node.bottom-right{position:static;inset:auto;display:flex;align-items:center;justify-content:center;min-height:50px;text-align:center;padding:10px;font-size:16px}
          .og-workflow-item{padding:29px 22px}.og-workflow-links{justify-content:flex-start;gap:8px;flex-direction:column}.og-section--dark .og-workflow-links .og-editorial-link{margin-top:0}.og-workflow-principle{text-align:left}
          .og-mock-topbar{padding:20px;flex-direction:column}.og-mock-tabs{padding:0 20px 12px;flex-wrap:wrap;gap:8px 18px;overflow:visible}.og-mock-tabs span{padding:10px 0 5px}.og-mock-grid{grid-template-columns:1fr}.og-mock-panel{padding:20px;border-right:0;border-bottom:1px solid #E5E8EC}.og-mock-panel:last-child{border-bottom:0}.og-mock-footer{padding:14px 20px;gap:9px;flex-direction:column}
          .og-audience-col{padding:28px 22px}
          .og-training-row{padding:22px 20px}
          .og-file-panel{grid-template-columns:1fr}.og-file-col{border-right:0;border-bottom:1px solid var(--og-line)}.og-file-col:last-child{border-bottom:0}
          .og-language-grid{grid-template-columns:repeat(2,1fr)}
          .og-why-grid{grid-template-columns:1fr}.og-why-item,.og-why-item:nth-child(2n),.og-why-item:nth-child(3n){border-right:0;border-bottom:1px solid var(--og-line);min-height:auto}.og-why-item:last-child{border-bottom:0}
          .og-connected{padding:28px 22px}.og-connected-flow{display:grid;grid-template-columns:1fr;justify-items:start;gap:8px}.og-flow-arrow{transform:rotate(90deg);justify-self:center}.og-flow-chip{width:100%}
          .og-related-grid{grid-template-columns:1fr}.og-related-item,.og-related-item:nth-child(2n),.og-related-item:nth-child(3n){border-right:0}
          .og-faq-button{grid-template-columns:1fr 32px;padding:20px 0}.og-faq-button span{font-size:17px}.og-faq-answer{padding-right:0}
          .og-inline-links{gap:8px;flex-direction:column;align-items:flex-start}.og-inline-links .og-editorial-link{margin-top:0}
          .og-final{padding:72px 0}.og-final .og-btn-row{width:100%}.og-final .og-btn{width:100%}
        }

        @media (max-width:350px){
          .og-proof-grid{grid-template-columns:1fr}.og-proof-item{border-right:0!important;border-bottom:1px solid var(--og-line)!important}.og-proof-item:last-child{border-bottom:0!important}
          .og-content-detail{padding-left:0;grid-column:1/-1}
          .og-content-row{grid-template-columns:1fr}.og-content-row .og-icon-box{margin-bottom:2px}.og-content-row>div:nth-child(2),.og-content-detail{grid-column:1}
          .og-language-grid{grid-template-columns:1fr}
          .og-term-visual{grid-template-columns:1fr;padding:18px}.og-term-center{grid-column:1}.og-term-node{max-width:none;width:100%}
        }
      `}</style>

      <main>
        <section className="og-hero">
          <div className="og-shell og-hero-grid">
            <div className="og-hero-copy">
              <h1>Oil &amp; Gas Translation Services for Global Operations</h1>
              <p className="og-body-lg">Translate technical documents, HSE content, software, training, engineering materials, and business communications with specialized language solutions built for upstream, midstream, and downstream oil &amp; gas operations.</p>
              <p className="og-body-lg og-hero-support">Stepes combines oil &amp; gas subject-matter expertise with professional linguists, terminology management, translation memory, AI-powered workflows, and rigorous quality assurance to help operators, oilfield service companies, EPCs, equipment manufacturers, and technology providers communicate accurately across global markets.</p>
              <div className="og-btn-row">
                <a className="og-btn og-btn--primary" href={LINKS.contactSales}><span>Request a Quote</span><Icon name="arrow" size={17}/></a>
                <a className="og-btn og-btn--secondary" href={LINKS.contact}>Talk to an Expert</a>
              </div>
            </div>
            <OilGasHeroArt />
          </div>
        </section>

        <section className="og-proof" aria-label="Oil and gas translation capabilities">
          <div className="og-shell og-proof-grid">
            {["100+ Languages","Oil & Gas Subject-Matter Expertise","ISO 9001 + ISO 17100","AI + Human Workflows"].map((item)=><div className="og-proof-item" key={item}><strong>{item}</strong></div>)}
          </div>
        </section>

        <section className="og-section" id="value-chain">
          <div className="og-shell">
            <SectionHead
              title="Translation Across the Oil & Gas Value Chain"
              intro="Oil & gas content moves through a highly connected global ecosystem. Stepes provides specialized translation and localization from exploration and production through transportation, processing, refining, and distribution."
            />
            <div className="og-value-chain">
              {[
                {icon:"drill",title:"Upstream",desc:"Support exploration, drilling, completion, production, and field operations with accurate multilingual technical communication.",items:["Geological, geophysical, and seismic content","Drilling, well construction, and completion documentation","Reservoir, production, and offshore/onshore operations","Oilfield equipment, inspection, maintenance, and HSE content"]},
                {icon:"pipeline",title:"Midstream",desc:"Localize the documentation and digital systems used to gather, process, transport, store, and manage oil and natural gas.",items:["Gathering systems and gas processing","Oil and gas pipelines and compressor stations","Storage facilities, tank farms, and terminals","LNG infrastructure, pipeline integrity, logistics, and emergency response"]},
                {icon:"refinery",title:"Downstream",desc:"Translate complex content for refining, petrochemical processing, plant operations, maintenance, distribution, and supporting technologies.",items:["Refineries and petrochemical facilities","Process engineering and plant operations","Turnarounds, shutdowns, maintenance, and process safety","Product specifications, quality, terminal, and distribution content"]},
              ].map(col=><div className="og-chain-col" key={col.title}><div className="og-icon-box"><Icon name={col.icon}/></div><h3>{col.title}</h3><p>{col.desc}</p><ul className="og-mini-list">{col.items.map(i=><li key={i}>{i}</li>)}</ul></div>)}
            </div>
            <div className="og-chain-link"><EditorialLink href={LINKS.energy}>Explore Energy Translation Services</EditorialLink></div>
          </div>
        </section>

        <section className="og-section og-section--soft" id="content-ecosystem">
          <div className="og-shell">
            <SectionHead
              title="Translate Every Part of Your Oil & Gas Content Ecosystem"
              intro="Modern oil & gas operations depend on engineering documentation, procedures, software interfaces, training, safety information, commercial agreements, environmental reporting, and constantly changing digital content. Stepes brings these content types together within a coordinated multilingual workflow."
            />
            <div className="og-content-list">
              {contentTypes.map((c)=><div className="og-content-row" key={c.title}>
                <div className="og-icon-box"><Icon name={c.icon}/></div>
                <div><h3>{c.title}</h3><p className="og-row-intro">{c.desc}</p>{c.link && <EditorialLink href={c.link[0]}>{c.link[1]}</EditorialLink>}</div>
                <div className="og-content-detail">{c.items.map(i=><span key={i}>{i}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="og-section og-section--dark" id="safety-quality">
          <div className="og-shell og-safety-grid">
            <div className="og-safety-copy">
              <div className="og-eyebrow">TECHNICAL ACCURACY &amp; SAFETY</div>
              <h2>Safety-Critical Content Cannot Drift Across Languages</h2>
              <p className="og-body-lg">In oil &amp; gas operations, language often carries operational consequences. A warning must preserve the same hazard, a maintenance procedure the same sequence, and an operating limit the same value and unit wherever workers encounter it.</p>
              <BulletList items={[
                "Specialized linguist selection based on language pair, market, petroleum discipline, content type, and intended use",
                "Controlled terminology for equipment names, process terms, chemicals, warnings, acronyms, and company-specific language",
                "Checks for units, equipment tags, part numbers, symbols, numerical values, cross-references, and locale conventions",
                "Professional review, automated QA, formatting review, client validation, and in-context checks where appropriate",
              ]}/>
              <EditorialLink href={LINKS.quality}>Explore Translation Quality Assurance</EditorialLink>
            </div>
            <QAVisual />
          </div>
        </section>

        <section className="og-section" id="terminology">
          <div className="og-shell og-term-grid">
            <div className="og-term-copy">
              <div className="og-eyebrow">TERMINOLOGY MANAGEMENT</div>
              <h2>One Oil &amp; Gas Vocabulary Across Every Asset and Operation</h2>
              <p className="og-body-lg">Equipment families acquire established names. Engineering teams use approved abbreviations. Operators rely on familiar process terminology. Safety departments standardize warnings. Without centralized control, that language can gradually diverge across documents, facilities, vendors, translators, and software.</p>
              <p>Stepes helps organizations create and manage multilingual terminology so approved language can follow the content wherever it goes—from operating manuals and HSE documentation to training, HMI interfaces, field applications, and procurement content.</p>
              <div className="og-term-pills">
                {["Drilling & completion","Reservoir & production","Pipeline & terminal","Refining & petrochemical","Equipment & components","HSE & warnings","Software labels","Acronyms & units"].map(t=><span key={t}>{t}</span>)}
              </div>
              <EditorialLink href={LINKS.terminology}>Explore Terminology Management</EditorialLink>
            </div>
            <TerminologyVisual />
          </div>
        </section>

        <section className="og-section og-section--dark" id="ai-human-workflows">
          <div className="og-shell">
            <SectionHead dark title="AI + Human Translation Workflows Designed Around Content Risk" intro="Not every oil & gas translation should follow the same workflow. Stepes combines professional expertise, AI translation, translation memory, terminology, automated QA, and workflow technology according to content purpose, complexity, risk, volume, and update frequency." />
            <div className="og-workflow">
              {workflowItems.map(item=><div className="og-workflow-item" key={item.title}><div className="og-icon-box"><Icon name={item.icon}/></div><div className="og-work-kicker">{item.kicker}</div><h3>{item.title}</h3><p>{item.text}</p></div>)}
            </div>
            <div className="og-workflow-links">
              <EditorialLink href={LINKS.aiHuman}>AI + Human Translation Workflows</EditorialLink>
              <EditorialLink href={LINKS.mtpe}>Machine Translation Post-Editing</EditorialLink>
            </div>
            <p className="og-workflow-principle"><strong>Use automation where it improves scale and efficiency.</strong> Keep qualified human expertise where technical judgment, safety implications, and operational context demand it.</p>
          </div>
        </section>

        <section className="og-section" id="digital-operations">
          <div className="og-shell og-digital-grid">
            <div className="og-digital-copy">
              <div className="og-eyebrow">DIGITAL OIL &amp; GAS OPERATIONS</div>
              <h2>Localize the Digital Systems Behind Modern Oil &amp; Gas Operations</h2>
              <p className="og-body-lg">The modern oilfield, pipeline network, LNG facility, and refinery are increasingly connected. Operators and technicians work with real-time monitoring, remote operations, predictive maintenance, field applications, automation, analytics, and digitally connected equipment alongside traditional engineering documentation.</p>
              <div className="og-digital-list">
                {[
                  ["monitor","SCADA and HMI localization","Translate operator interfaces, alarms, status messages, controls, warnings, equipment labels, and supporting documentation."],
                  ["network","Remote operations and monitoring","Support asset-monitoring platforms, connected sensors, production dashboards, and distributed operational systems."],
                  ["wrench","Field service and maintenance applications","Localize work orders, inspections, preventive maintenance, troubleshooting, parts identification, and field reporting."],
                  ["enterprise","Digital twins and asset-performance systems","Translate dashboards, instructions, terminology, and knowledge content used in data-driven asset management and simulation environments."],
                  ["shield","Inspection and environmental monitoring","Support multilingual content for inspection technologies, leak detection, emissions monitoring, environmental data collection, and reporting platforms."],
                  ["refresh","Continuous product releases","Connect software localization with terminology, translation memory, APIs, QA, screenshot review, and recurring release workflows."],
                ].map(([icon,title,text])=><div key={title}><div className="og-icon-box"><Icon name={icon} size={18}/></div><div><strong>{title}</strong><p>{text}</p></div></div>)}
              </div>
              <div className="og-inline-links"><EditorialLink href={LINKS.software}>Software Localization Services</EditorialLink><EditorialLink href={LINKS.api}>Translation API</EditorialLink></div>
            </div>
            <DigitalMockup />
          </div>
        </section>

        <section className="og-section og-section--soft" id="oilfield-epc-equipment">
          <div className="og-shell">
            <SectionHead title="Localization Across the Oil & Gas Supplier Ecosystem" intro="Global oil & gas operations depend on specialized service companies, EPC contractors, engineering consultancies, equipment manufacturers, automation providers, petrochemical suppliers, and technology companies. Stepes supports multilingual content across the complete customer and product lifecycle." />
            <div className="og-audience-grid">
              <div className="og-audience-col"><div className="og-icon-box"><Icon name="drill"/></div><h3>Oilfield Service Companies</h3><p>Support multilingual drilling, completion, stimulation, well intervention, production, testing, inspection, and field-service operations.</p><ul className="og-mini-list">{["Service and field procedures","Equipment manuals and specifications","Safety materials and training","Software and customer documentation"].map(i=><li key={i}>{i}</li>)}</ul></div>
              <div className="og-audience-col"><div className="og-icon-box"><Icon name="building"/></div><h3>EPC and Engineering Companies</h3><p>Keep project documentation aligned across international engineering teams, contractors, suppliers, construction sites, and asset owners.</p><ul className="og-mini-list">{["Engineering specifications and drawings","Method statements and construction documentation","Procurement packages, tenders, and contracts","Commissioning, inspection, HSE, and handover content"].map(i=><li key={i}>{i}</li>)}</ul><EditorialLink href={LINKS.engineering}>Engineering Translation Services</EditorialLink></div>
              <div className="og-audience-col"><div className="og-icon-box"><Icon name="wrench"/></div><h3>Equipment and Technology Manufacturers</h3><p>Take pumps, valves, compressors, drilling equipment, instrumentation, subsea systems, automation products, and inspection technologies into global markets.</p><ul className="og-mini-list">{["Product, installation, and service manuals","Datasheets and catalogs","Product software and training","Safety documentation and technical marketing"].map(i=><li key={i}>{i}</li>)}</ul></div>
              <div className="og-audience-col"><div className="og-icon-box"><Icon name="flask"/></div><h3>Petrochemical and Specialty Suppliers</h3><p>Support customers with accurate multilingual product, process, safety, regulatory, and technical information across oil &amp; gas and petrochemical markets.</p><ul className="og-mini-list">{["Product and process documentation","SDS, HSE, and technical safety content","Regulatory and compliance materials","Customer support and technical marketing"].map(i=><li key={i}>{i}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section className="og-section" id="training">
          <div className="og-shell og-training-grid">
            <div className="og-training-copy">
              <h2>Train Global Oil &amp; Gas Workforces in the Languages They Use</h2>
              <p className="og-body-lg">Training needs to communicate complex technical and safety information clearly without losing precision between the source material and the localized learning experience.</p>
              <p>Stepes localizes learning for operators, technicians, engineers, contractors, maintenance teams, field-service personnel, and other oil &amp; gas professionals. Shared terminology helps ensure the language employees learn is the same language they encounter in manuals, procedures, HMI screens, and field instructions.</p>
              <div className="og-inline-links"><EditorialLink href={LINKS.elearning}>eLearning Translation Services</EditorialLink><EditorialLink href={LINKS.video}>Video Translation Services</EditorialLink></div>
            </div>
            <div className="og-training-panel">
              {[
                ["wrench","Technical Training","Equipment operation, maintenance, process, inspection, troubleshooting, and engineering training."],
                ["shield","HSE Training","Safety courses, hazard awareness, emergency procedures, PPE requirements, permit-to-work content, and environmental training."],
                ["training","eLearning Localization","On-screen text, interactions, assessments, narration, subtitles, graphics, and reference materials."],
                ["media","Video, Voiceover, and Subtitling","Equipment demonstrations, safety videos, operational training, executive communication, and instructional content."],
              ].map(([icon,title,text])=><div className="og-training-row" key={title}><div className="og-icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="og-section og-section--blush" id="technical-deliverables">
          <div className="og-shell og-deliver-grid">
            <div className="og-deliver-copy">
              <h2>Preserve the Technical Deliverable, Not Just the Translation</h2>
              <p className="og-body-lg">Oil &amp; gas documentation often combines text with complex layouts, engineering tables, diagrams, callouts, technical symbols, illustrations, and embedded graphics. Translating the words is only part of the job.</p>
              <p>Stepes provides multilingual file engineering and desktop publishing to help preserve the usability and professional presentation of the final deliverable, including layout adjustment, graphic localization, right-to-left formatting, PDF production, and final production QA.</p>
              <div className="og-inline-links"><EditorialLink href={LINKS.document}>Document Translation Services</EditorialLink><EditorialLink href={LINKS.desktopPublishing}>Multilingual Desktop Publishing</EditorialLink></div>
            </div>
            <div className="og-file-panel">
              <div className="og-file-col"><div className="og-icon-box"><Icon name="document"/></div><h3>Complex Technical Files</h3><p>Support for documents, structured files, diagrams, graphics, tables, and software resource content.</p><div className="og-file-tags">{["DOCX","XLSX","PPTX","INDD","PDF","XML","Graphics","Structured Content"].map(t=><span key={t}>{t}</span>)}</div></div>
              <div className="og-file-col"><div className="og-icon-box"><Icon name="format"/></div><h3>Multilingual Production QA</h3><p>Review the localized deliverable for language, layout, overflow, missing content, numerical consistency, visual alignment, and final usability.</p><BulletList items={["Layout and text expansion","Tables and callouts","Graphics and diagram text","RTL formatting where required","Final multilingual QA"]}/></div>
            </div>
          </div>
        </section>

        <section className="og-section og-section--dark" id="enterprise-scale">
          <div className="og-shell og-enterprise-wrap">
            <div className="og-enterprise-copy">
              <div className="og-eyebrow">ENTERPRISE OPERATIONS</div>
              <h2>Scale Localization Across Assets, Facilities, and Markets</h2>
              <p className="og-body-lg">A global organization may receive translation requests from engineering, HSE, operations, legal, procurement, training, IT, regional offices, field locations, contractors, and equipment teams. Stepes helps consolidate these activities into a scalable multilingual operating model.</p>
              <EditorialLink href={LINKS.enterprise}>Enterprise Translation Management</EditorialLink>
            </div>
            <div className="og-enterprise-list">
              {[
                ["enterprise","Centralized Translation Management","Coordinate projects, files, languages, schedules, review, delivery, and translation assets through one enterprise workflow."],
                ["glossary","Shared Translation Memory and Terminology","Reuse validated translations and approved terminology across manuals, related equipment, recurring procedures, software releases, and training."],
                ["human","Regional and Subject-Matter Review","Route localized content to engineers, HSE specialists, legal teams, regional offices, or market experts while capturing feedback in a controlled process."],
                ["refresh","Workflow Automation and Integration","Automate recurring intake, routing, terminology application, reviewer assignment, notifications, approvals, API submissions, and delivery."],
                ["network","Reporting and Governance","Gain visibility into multilingual activity across projects, languages, volumes, status, reuse, quality, review, and spend."],
              ].map(([icon,title,text])=><div className="og-enterprise-row" key={title}><div className="og-icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
              <div className="og-inline-links og-inline-links--enterprise"><EditorialLink href={LINKS.workflowAutomation}>Workflow Automation</EditorialLink><EditorialLink href={LINKS.api}>Translation API</EditorialLink><EditorialLink href={LINKS.integrations}>Integrations</EditorialLink></div>
            </div>
          </div>
        </section>

        <section className="og-section og-section--dense" id="global-markets">
          <div className="og-shell og-language-band">
            <div>
              <div className="og-eyebrow">GLOBAL LANGUAGE COVERAGE</div>
              <h2>Support Oil &amp; Gas Operations Across Global Markets</h2>
              <p className="og-body-lg">Exploration, engineering, equipment manufacturing, construction, production, LNG transportation, refining, technology development, and investment routinely cross national and linguistic boundaries.</p>
              <p>Stepes provides professional translation and localization in more than 100 languages, with assignments matched according to language pair, target market, subject matter, content type, and technical requirements.</p>
              <div className="og-region-list">{["Middle East","Europe","Latin America","North America","Africa","Asia-Pacific","Central Asia"].map(r=><span key={r}>{r}</span>)}</div>
              <EditorialLink href={LINKS.languages}>Explore All Languages</EditorialLink>
            </div>
            <div className="og-language-grid" aria-label="Representative oil and gas translation languages">
              {["Arabic","Chinese","Spanish","Portuguese","French","German","Italian","Japanese","Korean","Vietnamese","Indonesian","Thai","Malay","Turkish","Polish","Romanian","Dutch","Norwegian","Danish","Swedish","Kazakh","Azerbaijani","Ukrainian","100+ Languages"].map(l=><span key={l}>{l}</span>)}
            </div>
          </div>
        </section>

        <section className="og-section og-section--soft" id="why-stepes">
          <div className="og-shell">
            <SectionHead title="Why Global Oil & Gas Teams Choose Stepes" intro="Oil & gas localization requires more than access to translators. It requires technical expertise, quality controls, multilingual technology, and the ability to work across many connected content types." />
            <div className="og-why-grid">
              {[
                ["drill","Specialized Oil & Gas Expertise","Professional linguists and reviewers are matched according to petroleum discipline, technical subject matter, content type, target market, and project requirements."],
                ["shield","Safety-Conscious Quality Workflows","Apply appropriate translation, review, terminology, numerical verification, automated QA, and in-context validation according to how translated content will be used."],
                ["glossary","Terminology at Enterprise Scale","Keep equipment, process, drilling, HSE, software, product, and company terminology aligned across documents and teams."],
                ["ai","AI + Human Quality","Combine professional expertise with AI translation, translation memory, terminology, automated QA, workflow technology, and professional review."],
                ["network","Connected Content Localization","Translate technical documents, software, HMI and SCADA interfaces, websites, eLearning, video, graphics, contracts, and enterprise content through one partner."],
                ["enterprise","Enterprise Scalability","Support an individual project or an ongoing multilingual program spanning business units, facilities, contractors, products, languages, and release schedules."],
              ].map(([icon,title,text])=><div className="og-why-item" key={title}><div className="og-icon-box"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="og-section og-section--dense" id="connected-content">
          <div className="og-shell">
            <div className="og-connected">
              <div><h2>One Language Partner for Connected Oil &amp; Gas Content</h2><p>A drilling procedure may reference the same equipment described in a service manual. The equipment name may appear again in operator training, an HMI, a maintenance application, a spare-parts catalog, and a safety procedure. These should not become separate language problems.</p><p>Stepes connects translation memories, terminology, subject-matter resources, workflows, and quality processes so approved language can move across the content lifecycle instead of being recreated project by project.</p></div>
              <div className="og-connected-flow" aria-label="Connected oil and gas multilingual content flow">
                {["Engineering","Manuals","HSE","Training","HMI / SCADA","Field Apps","Support"].map((chip,idx,arr)=><React.Fragment key={chip}><span className="og-flow-chip">{chip}</span>{idx<arr.length-1&&<span className="og-flow-arrow"><Icon name="arrow" size={18}/></span>}</React.Fragment>)}
              </div>
            </div>
          </div>
        </section>

        <section className="og-section" id="related-expertise">
          <div className="og-shell">
            <SectionHead title="Explore Related Translation Expertise" intro="Connect specialized oil & gas localization with the broader technical, engineering, software, training, legal, and energy services that support global operations." />
            <div className="og-related-grid">
              {[
                ["Energy Translation Services","Broader expertise across energy technologies, infrastructure, engineering, power, renewables, and global energy operations.",LINKS.energy],
                ["Technical Translation Services","Specialized translation for manuals, specifications, procedures, product documentation, and other engineering-intensive content.",LINKS.technical],
                ["Engineering Translation Services","Multilingual support for engineering, EPC, construction, commissioning, equipment, and infrastructure projects.",LINKS.engineering],
                ["Document Translation Services","Translate complex business and technical documents while preserving structure, terminology, and usability.",LINKS.document],
                ["Software Localization Services","Localize HMI, SCADA, field applications, maintenance systems, digital products, and other software.",LINKS.software],
                ["eLearning Translation Services","Deliver multilingual technical, safety, operator, and workforce training across global teams.",LINKS.elearning],
                ["Legal Translation Services","Support contracts, procurement, compliance, and other business-critical legal content across markets.",LINKS.legal],
                ["Video Translation Services","Localize technical demonstrations, safety training, instructional media, subtitles, and multilingual video content.",LINKS.video],
                ["Multilingual Desktop Publishing","Preserve complex layouts, diagrams, graphics, typography, and final production quality across languages.",LINKS.desktopPublishing],
              ].map(([title,text,href])=><div className="og-related-item" key={title}><h3>{title}</h3><p>{text}</p><EditorialLink href={href}>{title}</EditorialLink></div>)}
            </div>
          </div>
        </section>

        <section className="og-section og-section--soft" id="faq">
          <div className="og-shell og-faq-layout">
            <div className="og-faq-intro">
              <h2>Questions About Oil &amp; Gas Translation Services</h2>
              <p>Learn how Stepes supports technical content, HSE documentation, digital systems, terminology, AI + human workflows, complex file formats, and global oil &amp; gas translation programs.</p>
              <EditorialLink href={LINKS.contact}>Talk to an Oil &amp; Gas Translation Expert</EditorialLink>
            </div>
            <div className="og-faq-panel">
              {faqItems.map(([q,a],i)=>{
                const open=openFaq===i;
                return <div className={`og-faq-item ${open?"is-open":""}`} key={q}>
                  <button className="og-faq-button" type="button" onClick={()=>setOpenFaq(open?-1:i)} aria-expanded={open} aria-controls={`og-faq-${i}`}>
                    <span>{q}</span><span className="og-faq-toggle"><Icon name="chevron" size={18}/></span>
                  </button>
                  {open && <div className="og-faq-answer" id={`og-faq-${i}`}><p>{a}</p></div>}
                </div>
              })}
            </div>
          </div>
        </section>

        <section className="og-final" id="contact">
          <div className="og-shell og-final-inner">
            <div>
              <h2>Make Your Global Oil &amp; Gas Content Work Everywhere</h2>
              <p>Bring engineering documentation, HSE content, software, training, operating procedures, and business communications into one connected multilingual workflow. From a single field project to a global localization program, Stepes helps your content perform wherever your operations take you.</p>
            </div>
            <div className="og-btn-row">
              <a className="og-btn og-btn--primary" href={LINKS.contactSales}><span>Request a Quote</span><Icon name="arrow" size={17}/></a>
              <a className="og-btn og-btn--secondary" href={LINKS.contact}>Talk to an Expert</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
