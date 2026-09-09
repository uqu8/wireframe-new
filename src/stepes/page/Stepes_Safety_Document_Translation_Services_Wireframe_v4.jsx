import React, { useState } from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushLine: "#F2A7C6",
  ink: "#17171A",
  body: "#3F4147",
  muted: "#6B6E76",
  line: "#E5E3E6",
  soft: "#F7F7F8",
  dark: "#19191D",
  dark2: "#222228",
  white: "#FFFFFF",
};

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  safetyManual: "https://www.stepes.com/safety-manual-translation-services/",
  sds: "https://www.stepes.com/sds-translation-services/",
  sop: "https://www.stepes.com/sop-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  construction: "https://www.stepes.com/construction-translation-services/",
  oilGas: "https://www.stepes.com/oil-gas-translation-services/",
  transportation: "https://www.stepes.com/transportation-translation-services/",
  automation: "https://www.stepes.com/industrial-automation-translation/",
  languages: "https://www.stepes.com/translation-languages/",
};

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m11 6 4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check({ dark = false }) {
  return (
    <span className={`check ${dark ? "check-dark" : ""}`} aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="m5 10.5 3 3 7-7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Icon({ name }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      {name === "policy" && <><path {...common} d="M7 3.5h8l3 3V20H7z"/><path {...common} d="M15 3.5V7h3M10 11h5M10 15h5"/></>}
      {name === "procedure" && <><path {...common} d="M5 5h14M5 12h14M5 19h14"/><circle cx="8" cy="5" r="1.8" {...common}/><circle cx="12" cy="12" r="1.8" {...common}/><circle cx="16" cy="19" r="1.8" {...common}/></>}
      {name === "risk" && <><path {...common} d="M12 3 3.8 19h16.4z"/><path {...common} d="M12 9v4M12 16h.01"/></>}
      {name === "emergency" && <><path {...common} d="M12 3v3M4.2 6.2l2.1 2.1M19.8 6.2l-2.1 2.1M5 18h14M7 18v-5a5 5 0 0 1 10 0v5"/><path {...common} d="M9 13h6"/></>}
      {name === "training" && <><path {...common} d="m3 6 9-3 9 3-9 3zM7 8v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V8M19 8v6"/></>}
      {name === "audit" && <><rect x="5" y="3.5" width="14" height="17" rx="2" {...common}/><path {...common} d="M9 8h6M9 12h4M9 16h6"/></>}
      {name === "incident" && <><path {...common} d="M4 18h16M7 18v-4l2-3 3 2 2-5 3 3v7"/><path {...common} d="M8 5h3M9.5 3.5v3"/></>}
      {name === "sign" && <><path {...common} d="M6 4h12l2 5-2 5H6L4 9z"/><path {...common} d="M12 14v6"/></>}
      {name === "term" && <><circle cx="12" cy="12" r="8" {...common}/><path {...common} d="M7.5 12h9M12 7.5v9"/></>}
      {name === "facility" && <><path {...common} d="M3.5 20h17M5 20V9l5 3V8l5 3V5l4 2v13"/><path {...common} d="M8 16h2M13 16h2M17 12h1"/></>}
      {name === "ai" && <><rect x="5" y="5" width="14" height="14" rx="3" {...common}/><path {...common} d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3"/></>}
      {name === "human" && <><circle cx="12" cy="8" r="3" {...common}/><path {...common} d="M6 20c.6-4 2.5-6 6-6s5.4 2 6 6"/></>}
      {name === "quality" && <><path {...common} d="m12 3 7 3v5c0 4.7-3 7.8-7 10-4-2.2-7-5.3-7-10V6z"/><path {...common} d="m9 12 2 2 4-4"/></>}
      {name === "globe" && <><circle cx="12" cy="12" r="9" {...common}/><path {...common} d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21M12 3C9.5 5.6 8.2 8.6 8.2 12S9.5 18.4 12 21"/></>}
      {name === "secure" && <><rect x="5" y="10" width="14" height="10" rx="2" {...common}/><path {...common} d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></>}
      {name === "factory" && <><path {...common} d="M3 20h18V10l-5 3V8l-5 3V6L3 10z"/><path {...common} d="M7 16h2M12 16h2M17 16h1"/></>}
      {name === "build" && <><path {...common} d="M5 20V7h9v13M14 11h5v9M8 10h3M8 14h3M8 18h3M16 14h1M16 17h1"/></>}
      {name === "energy" && <><path {...common} d="m13 2-7 11h6l-1 9 7-12h-6z"/></>}
      {name === "truck" && <><path {...common} d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2" {...common}/><circle cx="18" cy="18" r="2" {...common}/></>}
      {name === "robot" && <><rect x="6" y="7" width="12" height="10" rx="2" {...common}/><path {...common} d="M12 3v4M9 12h.01M15 12h.01M9 16h6M3 10v5M21 10v5"/></>}
      {name === "lab" && <><path {...common} d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M8 15h8"/></>}
      {name === "health" && <><path {...common} d="M12 21s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.2-8 11-8 11z"/><path {...common} d="M8.5 12h2l1-2.5 1.5 5 1-2.5h2"/></>}
      {name === "mine" && <><path {...common} d="M4 20h16M7 20l2-10h6l2 10M9 10 7 7M15 10l2-3M12 4v6M9 4h6"/></>}
    </svg>
  );
}

function Eyebrow({ children, dark = false, className = "" }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""} ${className}`}>{children}</div>;
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`text-link ${dark ? "text-link-dark" : ""}`} href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function Button({ href, children, variant = "primary" }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-label="Illustration of multilingual workplace safety communication">
      <svg viewBox="0 0 620 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDF2F7" />
            <stop offset="1" stopColor="#F7F7F8" />
          </linearGradient>
        </defs>
        <path d="M78 405c-24-88-15-197 45-274 56-73 147-105 245-80 97 25 172 103 183 206 11 99-46 186-129 224-93 42-285 33-344-76Z" fill="url(#wash)" />
        <path d="M84 408c29-25 60-36 98-31 42 6 60 38 102 41 45 4 76-27 118-25 42 2 73 24 118 13" fill="none" stroke="#D5D2D6" strokeWidth="2" strokeLinecap="round" />
        <g stroke="#4D4E54" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M210 357v-74c0-24 15-42 39-42h52" />
          <path d="M245 241v-42h112v122H245" />
          <path d="M270 223h62M270 248h48M270 273h70" />
          <path d="M270 296h35" />
          <path d="M422 359v-62l-30-20-31 20v62" />
          <path d="M383 321h18M383 342h18" />
          <path d="M154 365v-72l-29 16v56M154 317l34-18v66" />
          <path d="M153 294v-30h22v18" />
          <path d="M146 365h52M357 359h78" />
          <circle cx="454" cy="195" r="35" />
          <path d="M454 178v18l12 8" />
          <path d="M440 159 454 143l14 16" />
          <path d="M499 276h54l17 33-17 33h-54l-17-33z" />
          <path d="M526 288v24M526 325h.01" />
          <circle cx="181" cy="189" r="23" />
          <path d="M164 190c8-5 25-5 34 0M173 183l6-8h6l6 8" />
          <path d="M174 214v39M188 214v39" />
          <path d="M181 253v42M164 276h34" />
          <path d="M166 232h30" />
          <path d="M191 232l20 12" />
          <path d="M164 232l-20 12" />
          <path d="M300 113h118v68H300z" />
          <path d="M318 135h47M318 154h72" />
        </g>
        <g stroke="#C11D63" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M448 374h65" />
          <path d="m502 366 11 8-11 8" />
          <path d="M250 164h26" />
          <path d="m266 156 10 8-10 8" />
          <path d="M442 246h42" />
          <circle cx="286" cy="391" r="7" />
          <circle cx="453" cy="392" r="7" />
        </g>
        <g fill="#C11D63">
          <circle cx="277" cy="164" r="3.5" />
          <circle cx="484" cy="246" r="3.5" />
        </g>
        <g fill="#4D4E54" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600">
          <text x="318" y="132">SAFETY PROCEDURE</text>
          <text x="500" y="367">CLEAR ACTION</text>
        </g>
      </svg>
    </div>
  );
}

function TerminologyVisual() {
  const nodes = [
    ["PROCEDURE", 96, 67], ["TRAINING", 346, 54], ["SIGNAGE", 482, 167],
    ["AUDIT", 445, 328], ["INCIDENT", 210, 356], ["EMERGENCY", 70, 248]
  ];
  return (
    <div className="term-visual" aria-hidden="true">
      <svg viewBox="0 0 560 430">
        <g stroke="#53535C" strokeWidth="1.5" fill="none">
          {nodes.map(([_, x, y], i) => <path key={i} d={`M280 215 L${x} ${y}`} />)}
        </g>
        <circle cx="280" cy="215" r="76" fill="#28282F" stroke="#F2A7C6" strokeWidth="2" />
        <text x="280" y="205" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, Arial, sans-serif" fontSize="19" fontWeight="600">CONTROLLED</text>
        <text x="280" y="230" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter, Arial, sans-serif" fontSize="19" fontWeight="600">TERMINOLOGY</text>
        {nodes.map(([label, x, y], i) => (
          <g key={label}>
            <rect x={x-61} y={y-23} width="122" height="46" rx="23" fill="#202027" stroke="#4A4A53" />
            <text x={x} y={y+5} textAnchor="middle" fill="#D9D8DC" fontFamily="Inter, Arial, sans-serif" fontSize="16" fontWeight="600" letterSpacing=".35">{label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const documentTypes = [
  { icon: "policy", title: "Safety Policies & Programs", body: "Translate corporate health and safety policies, EHS and HSE programs, safety compliance documentation, site safety requirements, employee guidance, contractor policies, and other organization-wide safety content." },
  { icon: "procedure", title: "Safety Procedures & Work Instructions", body: "Translate safe operating procedures, job-specific instructions, permit-to-work documentation, lockout/tagout instructions, confined-space procedures, PPE requirements, and task-level safety content.", link: [LINKS.sop, "SOP Translation Services"] },
  { icon: "risk", title: "Risk & Hazard Assessments", body: "Translate workplace risk assessments, job hazard analyses, job safety analyses, machinery risk evaluations, facility assessments, hazard registers, and mitigation plans." },
  { icon: "emergency", title: "Emergency Preparedness", body: "Translate emergency response plans, evacuation procedures, fire safety instructions, spill-response procedures, severe-weather plans, crisis communications, and site-specific response materials." },
  { icon: "training", title: "Safety Training Materials", body: "Translate employee onboarding, toolbox talks, refresher training, presentations, assessments, instructional videos, and digital learning content.", link: [LINKS.elearning, "eLearning Translation Services"] },
  { icon: "audit", title: "Safety Audits & Inspections", body: "Translate audit reports, inspection records, checklists, workplace observations, machinery inspection reports, corrective-action documentation, and follow-up findings." },
  { icon: "incident", title: "Incident & Investigation Documentation", body: "Translate incident reports, accident reports, near-miss reports, investigation findings, root-cause analyses, witness information, and corrective actions." },
  { icon: "sign", title: "Workplace Warnings, Signs & Notices", body: "Translate machine warnings, PPE notices, restricted-area signage, emergency signs, hazard notices, facility instructions, and other concise safety communication." },
];

const industries = [
  { icon: "factory", title: "Manufacturing & Industrial Equipment", body: "Plant procedures, operator instructions, machine warnings, inspections, risk assessments, emergency procedures, and workforce training.", link: [LINKS.manufacturing, "Manufacturing Translation Services"] },
  { icon: "build", title: "Construction & Infrastructure", body: "Site safety plans, contractor requirements, equipment procedures, work permits, hazard assessments, training, and inspection reports.", link: [LINKS.construction, "Construction Translation Services"] },
  { icon: "energy", title: "Energy & Oil and Gas", body: "Field safety procedures, operational controls, emergency response, maintenance instructions, contractor documentation, and incident materials.", link: [LINKS.oilGas, "Oil & Gas Translation Services"] },
  { icon: "truck", title: "Transportation & Logistics", body: "Warehouse, fleet, terminal, material-handling, equipment safety, workforce training, and emergency communication content.", link: [LINKS.transportation, "Transportation Translation Services"] },
  { icon: "robot", title: "Industrial Automation & Robotics", body: "Safety information for automated equipment, robot cells, control systems, maintenance teams, machine operators, and safeguarding procedures.", link: [LINKS.automation, "Industrial Automation Translation"] },
  { icon: "lab", title: "Chemical & Process Industries", body: "Operational procedures, training, maintenance, emergency response, inspections, and workplace communication. SDS content is handled through our specialist service.", link: [LINKS.sds, "SDS Translation Services"] },
  { icon: "health", title: "Healthcare & Life Sciences", body: "Facility safety procedures, laboratory safety information, workplace policies, equipment instructions, emergency plans, and training." },
  { icon: "mine", title: "Mining & Heavy Industry", body: "Site risk assessments, equipment procedures, contractor requirements, emergency response, inspections, incident reporting, and safety training." },
];

const qaItems = [
  ["Terminology", "Approved safety, technical, equipment, and organization-specific language."],
  ["Numbers & Units", "Measurements, temperatures, dimensions, limits, dates, times, percentages, and codes."],
  ["Warnings & Instructions", "Imperatives, prohibitions, conditions, cautions, procedural relationships, and required actions."],
  ["Completeness", "Checks for omissions, duplicated content, missing translations, and untranslated source text."],
  ["Formatting & Layout", "Tables, numbered procedures, callouts, symbols, diagrams, and warning hierarchy."],
  ["In-Context Quality", "Review for truncation, text expansion, misplaced warnings, broken layouts, and presentation issues."],
];

const workflow = [
  ["Source Assessment", "Review files, languages, audiences, content type, references, formatting needs, existing translations, and project requirements."],
  ["Terminology Preparation", "Identify recurring safety, technical, equipment, process, and organization-specific terminology."],
  ["Translation", "Assign professional linguists according to language pair, subject matter, content type, and workflow."],
  ["Professional Review", "Review linguistic accuracy, terminology, procedural meaning, clarity, warnings, consistency, and intended audience."],
  ["Automated QA", "Check terminology, numbers, units, omissions, repeated content, punctuation, formatting patterns, and untranslated text."],
  ["Layout & In-Context QA", "Confirm text expansion, tables, callouts, warnings, diagrams, page flow, symbols, and readability."],
  ["Delivery & Language Assets", "Deliver final files and retain approved translation memory and terminology for future updates."],
];

const faqs = [
  ["What are safety document translation services?", "Safety document translation services convert workplace, occupational, EHS, HSE, operational, and safety-critical documentation into other languages while preserving technical meaning, terminology, instructions, warnings, and document structure. Typical content includes safety policies, procedures, emergency plans, risk assessments, training materials, inspections, incident reports, work instructions, workplace warnings, and related documentation."],
  ["What types of safety documents can Stepes translate?", "Stepes translates occupational health and safety policies, EHS/HSE documentation, safety procedures, work instructions, emergency response plans, risk assessments, job hazard analyses, inspection reports, audit materials, incident and near-miss reports, corrective actions, safety training, workplace signs, warnings, and related documentation. Dedicated services are also available for safety manuals, Safety Data Sheets, SOPs, technical documents, and complete eLearning localization."],
  ["What is the difference between safety document translation and SDS translation?", "Safety document translation covers the broader range of workplace, occupational, EHS/HSE, and operational safety communication used by organizations and their workforces. Safety Data Sheet translation is a specialized discipline focused on structured chemical hazard communication and the terminology, data, and regulatory context associated with SDS content."],
  ["Can Stepes translate occupational health and safety documents?", "Yes. Stepes translates occupational health and safety documentation for multilingual workplaces, including policies, site safety plans, employee guidance, contractor requirements, PPE procedures, risk assessments, hazard reporting, emergency information, inspections, incident documentation, training, and other OHS content in 100+ languages."],
  ["Does Stepes provide EHS and HSE translation services?", "Yes. Stepes supports EHS and HSE teams with multilingual policies, procedures, operational documentation, training, audits, inspections, incident materials, emergency plans, and related content. Shared terminology and translation memory can help maintain consistency across recurring documentation."],
  ["Can you translate safety training materials and videos?", "Yes. Stepes translates classroom materials, presentations, toolbox talks, job aids, assessments, instructional videos, subtitles, narration, and digital safety training. Complete course localization, interactive learning, voiceover, multimedia production, and LMS-ready content are available through our eLearning Translation Services."],
  ["How does Stepes maintain consistent safety terminology?", "Stepes uses terminology management, translation memory, customer glossaries, reference materials, professional review, and automated terminology checks to help maintain approved language across policies, procedures, work instructions, training, signage, emergency plans, inspections, and related content."],
  ["Does Stepes use AI for safety document translation?", "Stepes can use AI-enabled translation technology, translation memory, terminology management, workflow automation, and automated QA to improve efficiency and consistency. Safety-critical content can also be assigned to professional linguists and reviewers who evaluate technical meaning, procedural context, warnings, terminology, and audience comprehension."],
  ["Can Stepes support safety translation across multiple facilities?", "Yes. Stepes supports multilingual safety programs spanning multiple facilities, countries, business units, and language requirements. Centralized translation memory, terminology, review workflows, and reusable language assets help organizations maintain greater consistency as documentation is updated and deployed across locations."],
  ["Can translated safety documents support regulatory compliance?", "Accurate multilingual documentation can support an organization's regulatory and workplace safety communication requirements by helping intended audiences understand approved source information in their language. Translation does not replace legal, regulatory, occupational safety, engineering, or compliance decisions. Stepes can coordinate with your designated safety, legal, regulatory, or compliance professionals when required."],
  ["What file formats can Stepes handle?", "Stepes supports common business, technical, publishing, and multimedia formats, including Word, PDF, PowerPoint, Excel, structured files, design files, and other professional content formats. Multilingual desktop publishing and final-layout review can also be supported where required."],
  ["Can Stepes translate recurring updates to safety documents?", "Yes. Translation memory and terminology management allow approved language from earlier versions to be reused when safety documentation changes, so translation and review can focus on new or modified content while preserving consistency with previously approved versions."],
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-panel">
      {faqs.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={q}>
            <button className="faq-question" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{q}</span>
              <span className={`faq-plus ${isOpen ? "faq-plus-open" : ""}`} aria-hidden="true">+</span>
            </button>
            {isOpen && <div className="faq-answer"><p>{a}</p>{i === 2 && <TextLink href={LINKS.sds}>SDS Translation Services</TextLink>}{i === 5 && <TextLink href={LINKS.elearning}>eLearning Translation Services</TextLink>}</div>}
          </div>
        );
      })}
    </div>
  );
}

export default function SafetyDocumentTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-light">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>WORKPLACE &amp; OPERATIONAL SAFETY</Eyebrow>
            <h1>Safety Document Translation Services for Global Workplaces</h1>
            <p className="hero-lead">Keep critical safety information clear, consistent, and actionable across languages. Stepes translates occupational health and safety documents, procedures, emergency plans, risk assessments, training materials, incident reports, inspections, and other safety-critical content into 100+ languages with specialized linguists, AI-powered workflows, and controlled terminology.</p>
            <p>Whether you are supporting one multilingual facility or coordinating safety communication across global operations, Stepes helps your teams deliver the right information to the people who need it, in the language they understand.</p>
            <div className="hero-actions">
              <Button href={LINKS.quote}>Get a Quote</Button>
              <Button href={LINKS.contact} variant="secondary">Talk to an Expert</Button>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="proof-wrap">
        <div className="shell proof-bar">
          {[
            ["100+ Languages", "Global safety communication"],
            ["Specialized Linguists", "Technical and industry expertise"],
            ["ISO-Certified Quality Processes", "Structured translation and review"],
            ["AI + Human Expertise", "Technology-enabled professional workflows"],
          ].map(([title, body]) => <div className="proof-item" key={title}><div className="proof-title">{title}</div><div className="proof-body">{body}</div></div>)}
        </div>
      </section>

      <section className="section section-white overview-section">
        <div className="shell overview-grid">
          <div className="overview-heading mobile-center-heading">
            <h2>Make Critical Safety Information Clear Across Languages</h2>
          </div>
          <div className="overview-copy">
            <p className="intro">Safety information only works when people can understand it and act on it.</p>
            <p>Global organizations often rely on multilingual employees, contractors, technicians, operators, supervisors, suppliers, and field teams working across different facilities and regulatory environments. A procedure written for one location may become training for another. A risk identified during an inspection may lead to a revised work instruction, a new warning, and an updated toolbox talk.</p>
            <p>Stepes helps connect these materials through accurate translation, consistent terminology, and reusable language assets so safety communication remains aligned across the workplace.</p>
            <div className="lifecycle" aria-label="Safety content lifecycle">
              {["Policy", "Procedure", "Work Instruction", "Training", "Warning", "Inspection", "Incident", "Corrective Action"].map((x, i, arr) => <React.Fragment key={x}><span>{x}</span>{i < arr.length-1 && <Arrow size={14}/>}</React.Fragment>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="heading-group centered">
            <h2>Translate Safety Content Across Your Operations</h2>
            <p>Safety documentation takes many forms. Stepes supports multilingual safety communication across the documents, systems, and operational materials global teams use every day.</p>
          </div>
          <div className="document-grid">
            {documentTypes.map((item) => (
              <article className="document-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.link && <TextLink href={item.link[0]}>{item.link[1]}</TextLink>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell dark-split">
          <div className="dark-copy">
            <Eyebrow dark>TERMINOLOGY CONTROL</Eyebrow>
            <h2>One Safety Vocabulary Across Every Workplace</h2>
            <p className="dark-intro">A hazard should not have one name in a procedure, another in training, and a third on a workplace sign.</p>
            <p>Global safety programs often reuse the same technical concepts across hundreds or thousands of documents. Without terminology control, translations can gradually diverge as different teams, translators, facilities, and vendors make independent wording choices.</p>
            <p>Stepes creates reusable multilingual language assets that help keep safety terminology aligned across your content ecosystem.</p>
            <div className="dark-feature-list">
              {[
                ["Hazards & Risk Terminology", "Approved language for hazards, controls, severity, likelihood, mitigation, and corrective action."],
                ["Equipment & Process Terminology", "Consistent names for components, tools, materials, operating states, and technical actions."],
                ["PPE & Workplace Language", "Standardized protective equipment, locations, roles, responsibilities, and safety controls."],
                ["Emergency Terminology", "Aligned evacuation language, response roles, assembly locations, warnings, and emergency communications."],
              ].map(([title, body]) => <div className="dark-feature" key={title}><span className="dark-rule"/><div><h3>{title}</h3><p>{body}</p></div></div>)}
            </div>
            <p className="dark-note"><strong>Approved language gets more valuable over time.</strong> Translation memories and terminology resources can be reused as procedures change, facilities expand, and new languages are added.</p>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split-editorial">
          <div className="editorial-sticky mobile-center-heading">
            <h2>Occupational Health &amp; Safety Translation for Global Teams</h2>
            <p className="intro">Effective occupational health and safety programs depend on consistent communication from corporate policy to the individual workplace.</p>
            <TextLink href={LINKS.safetyManual}>Safety Manual Translation Services</TextLink>
          </div>
          <div className="editorial-content">
            <p>Stepes translates occupational health and safety documentation for manufacturers, construction companies, energy organizations, logistics providers, healthcare operations, technology companies, and other employers with multilingual workforces.</p>
            <div className="two-list">
              {[
                "occupational health and safety policies", "corporate EHS and HSE documentation", "site safety plans", "workplace rules and guidelines", "employee safety handbooks", "contractor safety requirements", "PPE policies", "ergonomic guidance", "workplace health programs", "hazard reporting procedures", "safety committee materials", "corrective and preventive action materials"
              ].map(x => <div className="check-row" key={x}><Check/><span>{x}</span></div>)}
            </div>
            <div className="iso-callout">
              <div className="iso-mark"><Icon name="quality" /></div>
              <div><h3>Support for Occupational Safety Management Systems</h3><p>For organizations using occupational health and safety management frameworks such as ISO 45001, Stepes helps translate the policies, procedures, operational documentation, training, audits, incident information, and other multilingual content needed to support consistent safety communication.</p><p className="fine-emphasis">Translation supports multilingual safety and compliance programs. Regulatory, legal, and safety determinations remain with your organization&apos;s designated professionals.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section emergency-section">
        <div className="shell emergency-grid">
          <div className="emergency-art" aria-hidden="true">
            <div className="emergency-signal"><Icon name="emergency" /></div>
            <div className="emergency-doc"><div className="doc-top">EMERGENCY RESPONSE</div><div className="doc-line w85"/><div className="doc-line w70"/><div className="doc-line w92"/><div className="doc-step"><span>STEP</span><i/></div><div className="doc-step"><span>STEP</span><i/></div><div className="doc-step"><span>STEP</span><i/></div></div>
            <div className="sign-chip">EVACUATION</div>
          </div>
          <div className="emergency-copy">
            <Eyebrow>EMERGENCY COMMUNICATION</Eyebrow>
            <h2>Translate Emergency Plans Before They&apos;re Needed</h2>
            <p className="intro">An emergency is not the time to discover that an instruction is difficult to understand.</p>
            <p>Emergency plans frequently combine procedural language, facility-specific information, responsibilities, warnings, technical terminology, and time-sensitive actions. Multilingual versions need to preserve that information in a form people can quickly understand and use.</p>
            <div className="compact-list">
              {["emergency response plans", "evacuation procedures", "fire and medical response", "spill-response procedures", "severe-weather plans", "emergency shutdown instructions", "incident escalation procedures", "muster and assembly instructions", "roles and responsibility matrices", "facility-specific emergency guidance"].map(x => <div key={x}><Check/><span>{x}</span></div>)}
            </div>
            <h3>Keep the Entire Response System Aligned</h3>
            <p>Emergency plans rarely stand alone. The same terminology may appear in safety training, floor plans, warning signs, equipment instructions, PPE requirements, employee communications, and emergency alerts. Shared terminology and translation memory help keep those materials aligned.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell training-grid">
          <div className="training-copy">
            <h2>Turn Safety Procedures Into Training People Can Understand</h2>
            <p className="intro">Written procedures establish what people should do. Training helps make those procedures part of everyday behavior.</p>
            <p>Stepes translates safety training for multilingual employees, contractors, operators, technicians, supervisors, and field personnel across industries.</p>
            <div className="training-topics">
              {["New-hire orientation","Toolbox talks","Instructor-led training","Job aids","Refresher courses","PPE instruction","Emergency preparedness","Maintenance safety","Assessments","Instructional video","Narration & subtitles","Digital learning"].map(x => <div className="training-topic" key={x}><span className="mini-rule"/><span>{x}</span></div>)}
            </div>
            <h3>Keep Training Consistent With the Source Procedure</h3>
            <p>Using common translation memories and approved terminology helps ensure training does not introduce unnecessary language variations or conflicting instructions.</p>
            <TextLink href={LINKS.elearning}>eLearning Translation Services</TextLink>
          </div>
          <div className="training-flow" aria-hidden="true">
            <div className="flow-node main"><span>APPROVED<br/>SAFETY PROCEDURE</span></div>
            <div className="flow-stem"/>
            <div className="flow-row"><div className="flow-node">COURSE</div><div className="flow-node">VIDEO</div><div className="flow-node">TOOLBOX TALK</div></div>
            <div className="flow-caption">Shared terminology across training formats</div>
          </div>
        </div>
      </section>

      <section className="section section-white procedure-section">
        <div className="shell">
          <div className="heading-group centered">
            <h2>Keep Safety Instructions Precise From Policy to Task</h2>
            <p>Operational safety becomes most concrete at the task level. Procedural translation requires close control of language that can change what a worker is expected to do.</p>
          </div>
          <div className="procedure-grid">
            <div className="procedure-types">
              <h3>Safety-Critical Procedures We Translate</h3>
              <div className="procedure-list">
                {["safe operating procedures","equipment startup and shutdown","maintenance safety instructions","lockout/tagout procedures","confined-space entry procedures","permit-to-work documentation","machine guarding procedures","electrical safety instructions","material handling procedures","inspection instructions","laboratory safety procedures","contractor work instructions"].map(x => <div key={x}><span className="mini-rule"/><span>{x}</span></div>)}
              </div>
              <TextLink href={LINKS.sop}>SOP Translation Services</TextLink>
            </div>
            <div className="instruction-panel">
              <h3>Translation That Preserves the Instruction</h3>
              {[
                ["Sequence", "Keep steps, prerequisites, and dependencies in the correct order."],
                ["Commands", "Preserve mandatory, conditional, and prohibited actions."],
                ["Warnings", "Maintain distinctions between cautions, warnings, notes, and procedural instructions."],
                ["Terminology", "Use consistent names for equipment, controls, tools, materials, and tasks."],
                ["Numbers & Units", "Check measurements, limits, tolerances, times, temperatures, and other numerical information."],
                ["Roles & Responsibilities", "Preserve who may, must, or must not perform each action."],
              ].map(([t,b]) => <div className="instruction-row" key={t}><div className="instruction-dot"/><div><h4>{t}</h4><p>{b}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush lifecycle-section">
        <div className="shell">
          <div className="heading-group centered">
            <h2>From Hazard Identification to Corrective Action</h2>
            <p>Safety management generates information throughout an ongoing cycle of observation, assessment, action, and improvement. Stepes helps preserve continuity as information moves through that cycle.</p>
          </div>
          <div className="hazard-cycle">
            {[
              ["Risk Assessments", "Hazards, risk evaluations, controls, responsibilities, and mitigation plans."],
              ["Safety Inspections", "Checklists, equipment findings, site observations, deficiencies, and actions."],
              ["Audit Documentation", "Evidence, reports, findings, and follow-up materials."],
              ["Incidents & Near Misses", "Factual details, technical descriptions, timelines, and immediate actions."],
              ["Root-Cause Analysis", "Causal factors, contributing conditions, analyses, and recommendations."],
              ["Corrective Actions", "Remediation steps, owners, deadlines, verification, and follow-up."],
            ].map(([t,b],i) => <div className="cycle-item" key={t}><div className="cycle-marker">{String(i+1).padStart(2,"0")}</div><h3>{t}</h3><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell ai-section">
          <div className="heading-group centered">
            <Eyebrow>AI + HUMAN EXPERTISE</Eyebrow>
            <h2>Use AI Where It Helps. Keep Expertise Where It Matters.</h2>
            <p>Modern safety translation does not require choosing between technology and professional expertise. Stepes combines AI-enabled language technology, translation memory, terminology management, workflow automation, professional linguists, and quality review according to content purpose, complexity, audience, and risk.</p>
          </div>
          <div className="ai-columns">
            <div className="ai-panel">
              <div className="big-icon"><Icon name="ai" /></div>
              <h3>AI-Powered Language Operations</h3>
              <p>Technology can improve efficiency across large and repetitive safety-document portfolios.</p>
              {["identify recurring content","reuse approved translations","match approved terminology","recognize content changes","flag inconsistencies","check numbers and units","identify potential omissions","accelerate recurring updates"].map(x => <div className="check-row" key={x}><Check/><span>{x}</span></div>)}
            </div>
            <div className="ai-panel human-panel">
              <div className="big-icon"><Icon name="human" /></div>
              <h3>Human Review for Safety-Critical Meaning</h3>
              <p>Experienced linguists and reviewers evaluate context that automated systems can misunderstand.</p>
              {["procedural meaning","technical terminology","warning language","ambiguous source text","equipment context","job-specific instructions","audience comprehension","market and organization usage"].map(x => <div className="check-row" key={x}><Check/><span>{x}</span></div>)}
            </div>
          </div>
          <div className="workflow-fit"><strong>The right workflow for the content.</strong><span>A routine safety checklist, a corporate safety policy, an emergency response plan, and a safety-critical maintenance procedure do not necessarily require identical workflows.</span></div>
        </div>
      </section>

      <section className="section section-soft qa-section">
        <div className="shell qa-grid">
          <div className="qa-heading mobile-center-heading">
            <h2>Quality Assurance Built for Safety-Critical Information</h2>
            <p className="intro">Safety-document quality is more than grammatical correctness.</p>
            <p>The translation must preserve the operational meaning of instructions, warnings, data, responsibilities, and technical terminology while remaining clear to the intended audience.</p>
          </div>
          <div className="qa-matrix">
            {qaItems.map(([t,b]) => <div className="qa-row" key={t}><div className="qa-icon"><Icon name="quality" /></div><div><h3>{t}</h3><p>{b}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section section-white workflow-section">
        <div className="shell">
          <div className="heading-group centered workflow-heading">
            <h2>A Structured Process From Source Content to Multilingual Delivery</h2>
            <p>Safety-critical content benefits from a repeatable workflow that protects terminology, meaning, structure, and usability from beginning to end.</p>
          </div>
          <div className="workflow-steps">
            {workflow.map(([t,b],i) => <div className="workflow-step" key={t}><div className="step-number">{String(i+1).padStart(2,"0")}</div><div className="step-content"><h3>{t}</h3><p>{b}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark enterprise-section">
        <div className="shell">
          <div className="heading-group centered dark-heading">
            <Eyebrow dark>ENTERPRISE SAFETY PROGRAMS</Eyebrow>
            <h2>Scale Safety Translation Across Sites, Languages, and Updates</h2>
            <p>For a multinational organization, safety translation is rarely a one-time document project. A global program may involve hundreds of procedures, multiple facilities, dozens of languages, recurring audits, training updates, local adaptations, and ongoing revisions.</p>
          </div>
          <div className="enterprise-layout">
            <div className="enterprise-core">
              <div className="enterprise-center"><Icon name="globe"/><span>GLOBAL SAFETY<br/>CONTENT PROGRAM</span></div>
              {[
                ["Centralized Language Assets", "Translation memory, terminology, style guidance, and reviewer decisions."],
                ["Efficient Updates", "Reuse approved language while focusing effort on changed content."],
                ["Cross-Content Consistency", "Align terminology across procedures, training, signage, audits, and incidents."],
                ["Multi-Site Coordination", "Support central teams, regional operations, facilities, and local reviewers."],
              ].map(([t,b],i) => <div className={`enterprise-node node-${i+1}`} key={t}><h3>{t}</h3><p>{b}</p></div>)}
            </div>
            <div className="enterprise-side">
              <h3>One Partner Across Languages</h3>
              <p>Manage multilingual safety content across 100+ languages without building a separate translation process for every country or site.</p>
              <div className="enterprise-divider"/>
              <h3>Built for Recurring Content</h3>
              <p>Reusable language assets become increasingly valuable as safety documentation changes over time. Each approved translation can contribute to a more consistent and efficient foundation for future updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white industries-section">
        <div className="shell">
          <div className="heading-group centered">
            <h2>Safety Translation Across High-Risk and Global Industries</h2>
            <p>Safety communication is especially important where people interact with machinery, hazardous processes, complex systems, field operations, or rapidly changing workplace conditions.</p>
          </div>
          <div className="industry-grid">
            {industries.map(item => <article className="industry-item" key={item.title}><div className="industry-icon"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.body}</p>{item.link && <TextLink href={item.link[0]}>{item.link[1]}</TextLink>}</article>)}
          </div>
        </div>
      </section>

      <section className="section languages-section">
        <div className="shell languages-grid">
          <div className="languages-heading mobile-center-heading">
            <h2>Safety Document Translation in 100+ Languages</h2>
            <p className="intro">Global safety programs need more than broad language coverage. They need consistent terminology and quality processes across the entire language set.</p>
            <TextLink href={LINKS.languages}>Explore All Translation Languages</TextLink>
          </div>
          <div className="language-regions">
            {[
              ["Europe", "Spanish, French, German, Italian, Portuguese, Dutch, Polish, Czech, Romanian, Hungarian, Nordic languages, and more."],
              ["Asia-Pacific", "Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and more."],
              ["Americas", "Latin American Spanish, U.S. Spanish, Brazilian Portuguese, Canadian French, and regional requirements."],
              ["Middle East & Global Markets", "Arabic, Hebrew, Turkish, and additional languages supporting international workplaces and operations."],
            ].map(([t,b]) => <div className="region-row" key={t}><h3>{t}</h3><p>{b}</p></div>)}
          </div>
        </div>
      </section>



      <section className="section section-soft why-section">
        <div className="shell why-grid">
          <div className="why-heading mobile-center-heading">
            <h2>Built for Safety-Critical Multilingual Content</h2>
            <p>Safety documentation requires a translation partner that can combine linguistic expertise with technical understanding, controlled workflows, and enterprise-scale delivery.</p>
          </div>
          <div className="why-list">
            {[
              ["human", "Specialized Linguists", "Professional linguists selected for relevant technical, industrial, occupational safety, manufacturing, engineering, healthcare, energy, construction, and related subject-matter expertise."],
              ["term", "Controlled Terminology", "Approved multilingual terminology helps keep hazards, equipment, processes, PPE, job roles, procedures, and safety concepts consistent across content."],
              ["ai", "AI + Human Workflows", "Use AI, translation memory, workflow automation, and automated QA where they improve efficiency, with professional expertise where contextual judgment matters."],
              ["quality", "Structured Quality Assurance", "Combine professional review, terminology checks, automated QA, and in-context verification according to project needs."],
              ["globe", "Enterprise Scale", "Coordinate individual safety documents, recurring updates, multiple facilities, and multilingual programs through one connected translation partner."],
              ["secure", "Secure Workflows", "Support business-critical content that may contain operational information, employee information, incident details, investigation findings, or proprietary processes."],
            ].map(([icon,t,b]) => <div className="why-row" key={t}><div className="why-icon"><Icon name={icon}/></div><div><h3>{t}</h3><p>{b}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section related-section">
        <div className="shell">
          <div className="heading-group centered">
            <h2>Connect Your Safety Content Across the Enterprise</h2>
            <p>Safety documents are part of a larger multilingual content ecosystem. Stepes provides dedicated services for specialized content types that require deeper workflows and expertise.</p>
          </div>
          <div className="related-list">
            {[
              ["Safety Manual Translation Services", "Comprehensive workplace safety manuals, employee safety handbooks, equipment safety manuals, and other manual-based safety content.", LINKS.safetyManual],
              ["SDS Translation Services", "Safety Data Sheets and structured chemical hazard communication with specialized chemical terminology, data-focused QA, and controlled multilingual workflows.", LINKS.sds],
              ["SOP Translation Services", "Standard operating procedures, work instructions, process documentation, and controlled operational content across languages.", LINKS.sop],
              ["eLearning Translation Services", "Digital safety training, instructional video, narration, subtitles, interactive learning, and multilingual courseware.", LINKS.elearning],
              ["Technical Translation Services", "Technical manuals, engineering documentation, product information, equipment instructions, specifications, and related technical content.", LINKS.technical],
            ].map(([t,b,href]) => <div className="related-row" key={t}><div><h3>{t}</h3><p>{b}</p></div><TextLink href={href}>{t}</TextLink></div>)}
          </div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about workplace safety, EHS/HSE, occupational health and safety, safety-critical workflows, and multilingual program support.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Make Safety Clear in Every Language</h2>
            <p>From a single emergency plan to an enterprise safety program spanning facilities, teams, documents, and languages, Stepes helps organizations communicate safety information clearly and consistently around the world.</p>
          </div>
          <div className="final-actions">
            <Button href={LINKS.quote}>Get a Quote</Button>
            <Button href={LINKS.contact} variant="secondary">Talk to an Expert</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .stepes-page{--magenta:${C.magenta};--burgundy:${C.burgundy};--blush:${C.blush};--ink:${C.ink};--body:${C.body};--muted:${C.muted};--line:${C.line};--soft:${C.soft};--dark:${C.dark};font-family:'Inter Tight',Inter,Arial,sans-serif;color:var(--ink);background:#fff;overflow:hidden}.stepes-page *{box-sizing:border-box}.stepes-page a{text-decoration:none}.stepes-page button{font:inherit}.shell{width:100%;max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section-white{background:#fff}.section-soft{background:#F7F7F8}.section-blush{background:#FDF2F7}.section-dark{background:#19191D;color:#fff}.section h2,.hero h1{margin:0;font-weight:600;letter-spacing:-.025em;line-height:1.08}.section h2{font-size:36px}.section h3{font-size:24px;line-height:1.2;letter-spacing:-.015em;margin:0;font-weight:600}.section h4{font-size:17px;line-height:1.35;margin:0;font-weight:600}.stepes-page p{font-size:16px;line-height:1.68;color:var(--body);margin:0}.section-dark p{color:#C9C8CD}.intro{font-size:18px!important;line-height:1.6!important;color:#25262B!important}.eyebrow{font-size:11px;line-height:1.25;font-weight:600;letter-spacing:.12em;color:#C11D63;margin-bottom:16px}.eyebrow-dark{color:#F2A7C6}.heading-group{max-width:820px;margin-bottom:52px}.heading-group.centered{text-align:center;margin-left:auto;margin-right:auto}.heading-group h2{margin-bottom:18px}.heading-group>p{font-size:18px;line-height:1.6;max-width:780px;margin:0 auto}.text-link,.text-link:visited{display:inline-flex;align-items:center;gap:7px;color:#C11D63;font-weight:600;font-size:16px;line-height:1.4;margin-top:14px;transition:.2s}.text-link:hover{color:#9F1D55}.text-link:hover svg{transform:translateX(3px)}.text-link svg{transition:.2s;flex:0 0 auto}.text-link-dark,.text-link-dark:visited{color:#F2A7C6}.btn{min-height:50px;padding:0 23px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:9px;font-size:16px;font-weight:600;transition:.2s;border:1px solid transparent}.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:#C11D63;color:#fff}.btn-primary:hover{background:#A71954;transform:translateY(-1px)}.btn-secondary{background:#fff;color:#202126;border-color:#D9D7DB}.btn-secondary:visited{color:#202126}.btn-secondary:hover{border-color:#BAB8BE;background:#FAFAFB}.btn:focus-visible,.text-link:focus-visible,.faq-question:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:3px}

  .hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#FCFBFC 100%)}.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(390px,.95fr);align-items:center;gap:72px}.hero-copy{max-width:720px}.hero h1{font-size:48px;max-width:700px}.hero-lead{font-size:18px!important;line-height:1.62!important;color:#2F3035!important;margin-top:26px!important;max-width:680px}.hero-copy>p:not(.hero-lead){margin-top:18px;max-width:660px}.hero-actions{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap}.hero-art{width:100%;max-width:540px;margin-left:auto}.hero-art svg{display:block;width:100%;height:auto}

  .proof-wrap{background:#fff;border-top:1px solid #ECEAEC;border-bottom:1px solid #ECEAEC}.proof-bar{display:grid;grid-template-columns:repeat(4,1fr);padding-top:24px;padding-bottom:24px}.proof-item{padding:3px 28px;border-left:1px solid #E4E2E5}.proof-item:first-child{border-left:0;padding-left:0}.proof-title{font-size:16px;font-weight:600;line-height:1.3}.proof-body{font-size:16px;line-height:1.45;color:#74767C;margin-top:5px}

  .overview-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:88px;align-items:start}.overview-heading h2{max-width:500px}.overview-copy{max-width:760px}.overview-copy>p+p{margin-top:16px}.lifecycle{margin-top:34px;padding:18px 20px;border:1px solid #E2E0E4;border-radius:22px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:#fff}.lifecycle span{font-size:16px;font-weight:600;color:#303136}.lifecycle svg{color:#C11D63}

  .document-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #DEDCDF}.document-item{display:grid;grid-template-columns:52px 1fr;gap:18px;padding:30px 30px 32px 0;border-bottom:1px solid #DEDCDF}.document-item:nth-child(odd){border-right:1px solid #DEDCDF;padding-right:42px}.document-item:nth-child(even){padding-left:42px}.icon-box{width:46px;height:46px;border-radius:14px;background:#fff;border:1px solid #E4E2E5;display:flex;align-items:center;justify-content:center;color:#A71954}.document-item h3{font-size:21px;margin-bottom:9px}.document-item p{max-width:500px}

  .dark-split{display:grid;grid-template-columns:1.03fr .97fr;gap:70px;align-items:center}.dark-copy h2{max-width:600px;margin-bottom:22px}.dark-intro{font-size:18px!important;color:#F2F1F3!important;max-width:650px}.dark-copy>p+p{margin-top:16px}.dark-feature-list{margin-top:32px;border-top:1px solid #38383F}.dark-feature{display:grid;grid-template-columns:3px 1fr;gap:18px;padding:20px 0;border-bottom:1px solid #38383F}.dark-rule{width:3px;height:23px;background:#F2A7C6;margin-top:3px;border-radius:2px}.dark-feature h3{font-size:18px;margin-bottom:6px;color:#fff}.dark-feature p{font-size:16px}.dark-note{padding:20px 22px;background:#222228;border-radius:20px;margin-top:28px!important}.dark-note strong{color:#fff}.term-visual{min-height:430px}.term-visual svg{width:100%;height:auto;display:block}

  .split-editorial{display:grid;grid-template-columns:.8fr 1.2fr;gap:90px;align-items:start}.editorial-sticky{position:sticky;top:40px}.editorial-sticky h2{margin-bottom:20px}.editorial-sticky .intro{margin-bottom:12px}.editorial-content>p{font-size:18px;line-height:1.6}.two-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 22px;margin-top:30px}.check-row{display:flex;align-items:flex-start;gap:10px;font-size:16px;line-height:1.48;color:#3F4147}.check{width:22px;height:22px;flex:0 0 22px;border-radius:50%;background:#FDF2F7;color:#A71954;display:flex;align-items:center;justify-content:center;margin-top:1px}.iso-callout{display:grid;grid-template-columns:54px 1fr;gap:20px;border-top:1px solid #E2E0E4;border-bottom:1px solid #E2E0E4;padding:28px 0;margin-top:36px}.iso-mark{width:50px;height:50px;border-radius:16px;background:#FDF2F7;color:#A71954;display:flex;align-items:center;justify-content:center}.iso-callout h3{font-size:20px;margin-bottom:9px}.iso-callout p+p{margin-top:12px}.fine-emphasis{font-size:16px!important;color:#5B5D64!important}

  .emergency-section{background:#fff}.emergency-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:88px;align-items:center}.emergency-art{height:520px;border-radius:30px;background:#F7F7F8;border:1px solid #E5E3E6;position:relative;overflow:hidden}.emergency-art:before{content:"";position:absolute;width:300px;height:300px;border-radius:50%;background:#FDF2F7;left:-80px;bottom:-70px}.emergency-doc{position:absolute;width:280px;height:340px;left:50%;top:50%;transform:translate(-45%,-48%) rotate(-2deg);background:#fff;border:1px solid #DAD8DC;border-radius:18px;padding:28px;box-shadow:0 18px 50px rgba(30,30,35,.06)}.doc-top{font-size:16px;font-weight:600;letter-spacing:.08em;color:#38393F;margin-bottom:25px}.doc-line{height:5px;background:#D3D1D5;border-radius:3px;margin:11px 0}.w85{width:85%}.w70{width:70%}.w92{width:92%}.doc-step{display:flex;align-items:center;gap:12px;margin-top:22px}.doc-step span{font-size:16px;font-weight:600;color:#C11D63}.doc-step i{height:5px;background:#BFC0C4;border-radius:3px;width:74%;display:block}.emergency-signal{position:absolute;z-index:2;right:58px;top:60px;width:76px;height:76px;border-radius:24px;background:#7A1542;color:#fff;display:flex;align-items:center;justify-content:center}.sign-chip{position:absolute;left:45px;top:82px;border-radius:999px;background:#fff;border:1px solid #DCDADF;padding:10px 16px;font-size:16px;font-weight:600;letter-spacing:.08em;color:#C11D63}.emergency-copy h2{margin-bottom:20px}.emergency-copy>p{margin-top:14px}.compact-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 20px;margin:28px 0 32px}.compact-list>div{display:flex;align-items:flex-start;gap:9px;font-size:16px;line-height:1.45;color:#3F4147}.emergency-copy h3{font-size:20px;margin-bottom:10px}

  .training-grid{display:grid;grid-template-columns:1.07fr .93fr;gap:86px;align-items:center}.training-copy h2{margin-bottom:20px}.training-copy>p{margin-top:14px}.training-copy h3{font-size:20px;margin-top:30px;margin-bottom:10px}.training-topics{display:grid;grid-template-columns:1fr 1fr;gap:0 24px;margin:26px 0;border-top:1px solid #DEDCDF}.training-topic{display:flex;align-items:flex-start;gap:10px;padding:11px 0;border-bottom:1px solid #DEDCDF;font-size:16px;line-height:1.45;color:#404146}.training-flow{padding:48px 34px;background:#fff;border:1px solid #E3E1E4;border-radius:30px;min-height:430px;display:flex;flex-direction:column;align-items:center;justify-content:center}.flow-node{min-width:120px;min-height:56px;border-radius:18px;border:1px solid #DAD8DC;background:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-size:16px;font-weight:600;letter-spacing:.02em;color:#4B4C52;padding:10px 15px}.flow-node.main{min-width:180px;min-height:86px;background:#FDF2F7;border-color:#E8C2D3;color:#8A164A;font-size:16px}.flow-stem{height:54px;width:1px;background:#B9B7BC}.flow-row{width:100%;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;position:relative}.flow-row:before{content:"";position:absolute;left:16%;right:16%;top:-16px;height:1px;background:#B9B7BC}.flow-row .flow-node{position:relative}.flow-row .flow-node:before{content:"";position:absolute;width:1px;height:16px;background:#B9B7BC;left:50%;top:-17px}.flow-caption{margin-top:28px;font-size:16px;color:#72747B}

  .procedure-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:80px}.procedure-types h3,.instruction-panel>h3{font-size:22px;margin-bottom:22px}.procedure-list{border-top:1px solid #E2E0E4;margin-bottom:8px}.procedure-list>div{display:flex;align-items:flex-start;gap:12px;padding:12px 0;border-bottom:1px solid #E2E0E4;font-size:16px;color:#404146;line-height:1.45}.mini-rule{width:18px;height:2px;background:#C11D63;margin-top:10px;flex:0 0 18px}.instruction-panel{border:1px solid #E1DFE3;border-radius:28px;padding:30px 32px;background:#FBFBFC}.instruction-row{display:grid;grid-template-columns:12px 1fr;gap:14px;padding:17px 0;border-top:1px solid #E3E1E4}.instruction-row:nth-child(2){border-top:0;padding-top:0}.instruction-dot{width:8px;height:8px;border-radius:50%;background:#C11D63;margin-top:8px}.instruction-row h4{margin-bottom:4px}.instruction-row p{font-size:16px}

  .hazard-cycle{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid #E0CDD5;border-bottom:1px solid #E0CDD5}.cycle-item{padding:28px 18px 30px;border-left:1px solid #E0CDD5;min-height:230px}.cycle-item:first-child{border-left:0}.cycle-marker{font-size:11px;font-weight:600;letter-spacing:.1em;color:#C11D63;margin-bottom:40px}.cycle-item h3{font-size:18px;margin-bottom:9px}.cycle-item p{font-size:16px;line-height:1.55}

  .ai-columns{display:grid;grid-template-columns:1fr 1fr;gap:22px}.ai-panel{border:1px solid #E0DEE2;border-radius:30px;padding:34px;background:#fff}.human-panel{background:#FCFBFC}.big-icon{width:58px;height:58px;border-radius:18px;background:#FDF2F7;color:#A71954;display:flex;align-items:center;justify-content:center;margin-bottom:22px}.ai-panel h3{margin-bottom:10px}.ai-panel>p{margin-bottom:22px}.ai-panel .check-row{padding:8px 0;border-top:1px solid #EEECEF}.workflow-fit{display:grid;grid-template-columns:230px 1fr;gap:30px;margin-top:24px;padding:24px 28px;border-radius:22px;background:#19191D;color:#fff}.workflow-fit strong{font-size:18px}.workflow-fit span{font-size:16px;line-height:1.55;color:#CECDD1}

  .qa-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:84px;align-items:start}.qa-heading h2{margin-bottom:20px}.qa-heading>p+p{margin-top:12px}.qa-matrix{border-top:1px solid #DBD9DD}.qa-row{display:grid;grid-template-columns:48px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid #DBD9DD}.qa-icon{width:44px;height:44px;border-radius:14px;background:#fff;border:1px solid #E4E2E5;display:flex;align-items:center;justify-content:center;color:#A71954}.qa-row h3{font-size:19px;margin-bottom:5px}

  .dark-heading h2{color:#fff}.dark-heading>p{color:#C9C8CD}.enterprise-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:50px;align-items:center}.enterprise-core{height:500px;position:relative;border:1px solid #38383F;border-radius:30px;background:#1E1E24}.enterprise-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:174px;height:174px;border-radius:50%;background:#28282F;border:1px solid #5A5A63;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;color:#F2A7C6;text-align:center;font-size:16px;font-weight:600;letter-spacing:.02em}.enterprise-node{position:absolute;width:230px;padding:18px 20px;border-radius:18px;background:#24242B;border:1px solid #3E3E46}.enterprise-node h3{font-size:16px;color:#fff;margin-bottom:7px}.enterprise-node p{font-size:16px;line-height:1.5;color:#BDBCC2}.enterprise-node.node-1{left:28px;top:34px}.enterprise-node.node-2{right:28px;top:34px}.enterprise-node.node-3{left:28px;bottom:34px}.enterprise-node.node-4{right:28px;bottom:34px}.enterprise-side{padding:4px 8px}.enterprise-side h3{font-size:22px;margin-bottom:10px;color:#fff}.enterprise-side p{color:#C9C8CD}.enterprise-divider{height:1px;background:#3A3A42;margin:30px 0}

  .industry-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #E1DFE3}.industry-item{padding:28px 24px 30px 0;border-bottom:1px solid #E1DFE3}.industry-item:not(:nth-child(4n+1)){border-left:1px solid #E1DFE3;padding-left:24px}.industry-icon{width:46px;height:46px;border-radius:14px;background:#F7F7F8;display:flex;align-items:center;justify-content:center;color:#A71954;margin-bottom:20px}.industry-item h3{font-size:19px;margin-bottom:8px}.industry-item p{font-size:16px}

  .languages-section{background:#FDF2F7}.languages-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:84px;align-items:start}.languages-heading h2{margin-bottom:20px}.languages-heading>p{margin-bottom:4px}.language-regions{border-top:1px solid #E2C9D3}.region-row{display:grid;grid-template-columns:190px 1fr;gap:24px;padding:22px 0;border-bottom:1px solid #E2C9D3}.region-row h3{font-size:18px}.region-row p{font-size:16px}

  .workflow-steps{display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid #DFDDE0;border-bottom:1px solid #DFDDE0}.workflow-step{padding:24px 16px 28px;border-left:1px solid #DFDDE0;min-height:310px}.workflow-step:first-child{border-left:0}.step-number{font-size:11px;font-weight:600;letter-spacing:.1em;color:#C11D63;margin-bottom:44px}.step-content h3{font-size:18px;margin-bottom:9px}.step-content p{font-size:16px;line-height:1.55}

  .why-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:86px;align-items:start}.why-heading h2{margin-bottom:18px}.why-list{border-top:1px solid #DBD9DD}.why-row{display:grid;grid-template-columns:48px 1fr;gap:18px;padding:22px 0;border-bottom:1px solid #DBD9DD}.why-icon{width:44px;height:44px;border-radius:14px;background:#fff;color:#A71954;display:flex;align-items:center;justify-content:center}.why-row h3{font-size:19px;margin-bottom:5px}

  .related-section{background:#fff}.related-list{border-top:1px solid #E1DFE3}.related-row{display:grid;grid-template-columns:1fr 280px;gap:40px;align-items:center;padding:24px 0;border-bottom:1px solid #E1DFE3}.related-row h3{font-size:20px;margin-bottom:7px}.related-row .text-link{margin-top:0;justify-self:end;text-align:right}

  .faq-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:86px;align-items:start}.faq-heading h2{margin-bottom:18px}.faq-panel{border-top:1px solid #DCDADF}.faq-item{border-bottom:1px solid #DCDADF}.faq-question{width:100%;border:0;background:transparent;padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;cursor:pointer;font-size:18px;font-weight:600;color:#202126;min-height:64px}.faq-plus{font-size:28px;font-weight:400;color:#C11D63;transition:.2s;line-height:1}.faq-plus-open{transform:rotate(45deg)}.faq-answer{padding:0 42px 24px 0;max-width:840px}.faq-answer p{font-size:16px;line-height:1.68}

  .final-cta{padding:78px 0;background:#FDF2F7;border-top:1px solid #E9D6DE}.final-cta-inner{display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center}.final-cta h2{font-size:36px;line-height:1.1;margin:0 0 15px;font-weight:600;letter-spacing:-.025em}.final-cta p{font-size:18px;line-height:1.6;max-width:760px}.final-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}

  @media (max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid{gap:42px;grid-template-columns:1.08fr .92fr}.hero-art{max-width:470px}.industry-grid{grid-template-columns:repeat(2,1fr)}.industry-item:not(:nth-child(4n+1)){border-left:0;padding-left:0}.industry-item:nth-child(even){border-left:1px solid #E1DFE3;padding-left:24px}.workflow-steps{grid-template-columns:repeat(4,1fr)}.workflow-step:nth-child(5){border-left:0;border-top:1px solid #DFDDE0}.workflow-step:nth-child(n+5){border-top:1px solid #DFDDE0}.hazard-cycle{grid-template-columns:repeat(3,1fr)}.cycle-item:nth-child(4){border-left:0;border-top:1px solid #E0CDD5}.cycle-item:nth-child(n+4){border-top:1px solid #E0CDD5}.enterprise-node{width:200px}.enterprise-layout{grid-template-columns:1fr}.enterprise-side{display:grid;grid-template-columns:1fr 1px 1fr;gap:28px;align-items:start}.enterprise-divider{height:100%;width:1px;margin:0}}

  @media (max-width:800px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}.section h2{font-size:32px}.section h3{font-size:22px}.hero{padding:88px 0 80px}.hero-grid{grid-template-columns:1fr;gap:42px}.hero-copy{text-align:center;margin:0 auto}.hero h1{font-size:42px;margin:0 auto;max-width:760px}.hero-copy p{margin-left:auto!important;margin-right:auto!important}.hero-actions{justify-content:center}.hero-art{margin:0 auto;max-width:520px}.proof-bar{grid-template-columns:1fr 1fr}.proof-item{padding:12px 20px;border-left:1px solid #E4E2E5}.proof-item:nth-child(3){border-left:0;border-top:1px solid #E4E2E5;padding-top:20px}.proof-item:nth-child(4){border-top:1px solid #E4E2E5;padding-top:20px}.overview-grid,.split-editorial,.emergency-grid,.training-grid,.procedure-grid,.qa-grid,.languages-grid,.why-grid,.faq-grid{grid-template-columns:1fr;gap:46px}.overview-heading,.editorial-sticky,.languages-heading,.why-heading{text-align:center}.emergency-copy .eyebrow,.emergency-copy h2,.emergency-copy>.intro,.training-copy h2,.training-copy>.intro{text-align:center}.emergency-copy h2,.training-copy h2{margin-left:auto;margin-right:auto}.emergency-copy>.intro,.training-copy>.intro{max-width:620px;margin-left:auto!important;margin-right:auto!important}.qa-heading{text-align:left}.overview-heading h2,.editorial-sticky h2{margin-left:auto;margin-right:auto}.overview-copy{text-align:left}.editorial-sticky{position:static}.editorial-sticky .text-link{justify-content:center}.dark-split{grid-template-columns:1fr;gap:30px}.dark-copy{text-align:left}.term-visual{max-width:580px;margin:0 auto}.document-grid{grid-template-columns:1fr}.document-item:nth-child(odd),.document-item:nth-child(even){border-right:0;padding-left:0;padding-right:0}.compact-list{grid-template-columns:1fr 1fr}.training-topics{grid-template-columns:1fr 1fr}.emergency-art{max-width:580px;width:100%;margin:0 auto}.training-flow{max-width:580px;width:100%;margin:0 auto}.two-list{grid-template-columns:1fr 1fr}.ai-columns{grid-template-columns:1fr}.workflow-fit{grid-template-columns:1fr;gap:10px}.industry-grid{grid-template-columns:1fr 1fr}.language-regions{text-align:left}.workflow-heading{text-align:left;margin-left:0;margin-right:0}.workflow-steps{grid-template-columns:1fr}.workflow-step,.workflow-step:nth-child(5),.workflow-step:nth-child(n+5){border-left:0;border-top:1px solid #DFDDE0;display:grid;grid-template-columns:56px 1fr;gap:16px;min-height:auto;padding:22px 0}.workflow-step:first-child{border-top:0}.step-number{margin-bottom:0;padding-top:3px}.related-row{grid-template-columns:1fr;gap:8px}.related-row .text-link{justify-self:start;text-align:left}.final-cta-inner{grid-template-columns:1fr;text-align:center}.final-cta p{margin:0 auto}.final-actions{justify-content:center}.heading-group.centered{max-width:760px}.enterprise-side{grid-template-columns:1fr}.enterprise-divider{width:100%;height:1px}.faq-heading{text-align:left}.faq-answer{padding-right:0}}

  @media (max-width:600px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.hero{padding:72px 0 64px}.hero h1{font-size:38px}.section h2,.final-cta h2{font-size:30px}.section h3{font-size:20px}.hero-actions{flex-direction:column}.hero-actions .btn,.final-actions .btn{width:100%}.hero-art{margin-top:6px}.proof-bar{grid-template-columns:1fr}.proof-item,.proof-item:nth-child(3),.proof-item:nth-child(4){border-left:0;border-top:1px solid #E4E2E5;padding:16px 0}.proof-item:first-child{border-top:0}.heading-group{margin-bottom:38px}.mobile-center-heading{text-align:center}.mobile-center-heading .intro{max-width:540px;margin-left:auto;margin-right:auto}.lifecycle{display:block;position:relative;padding:12px 16px}.lifecycle:before{content:"";position:absolute;left:23px;top:29px;bottom:29px;width:1px;background:#E8B4C9}.lifecycle span{display:block;position:relative;padding:7px 8px 7px 28px;font-size:16px;line-height:1.35}.lifecycle span:before{content:"";position:absolute;left:3px;top:50%;transform:translateY(-50%);width:9px;height:9px;border-radius:50%;background:#C11D63;box-shadow:0 0 0 4px #fff}.lifecycle svg{display:none}.document-item{grid-template-columns:44px 1fr;gap:14px;padding:24px 0}.icon-box{width:42px;height:42px}.dark-copy .eyebrow,.dark-copy h2,.dark-copy>.dark-intro{text-align:center}.dark-copy h2{margin-left:auto;margin-right:auto}.term-visual{min-height:0}.two-list{grid-template-columns:1fr}.iso-callout{grid-template-columns:1fr}.iso-mark{margin:0 auto}.iso-callout h3{text-align:center}.emergency-art{height:410px}.emergency-doc{width:235px;height:300px;padding:24px}.emergency-signal{right:28px;top:38px}.sign-chip{left:20px;top:58px}.emergency-copy .eyebrow,.emergency-copy h2,.emergency-copy>.intro{text-align:center}.compact-list{grid-template-columns:1fr}.training-topics{grid-template-columns:1fr}.training-copy h2,.training-copy>.intro{text-align:center}.flow-row{grid-template-columns:1fr;gap:12px}.flow-row:before,.flow-row .flow-node:before{display:none}.training-flow{min-height:0;padding:34px 22px}.flow-stem{height:28px}.procedure-types>h3,.instruction-panel>h3{text-align:center}.instruction-panel{padding:24px 20px}.hazard-cycle{grid-template-columns:1fr}.cycle-item,.cycle-item:nth-child(4),.cycle-item:nth-child(n+4){border-left:0;border-top:1px solid #E0CDD5;min-height:auto;padding:22px 0}.cycle-item:first-child{border-top:0}.cycle-marker{margin-bottom:16px}.ai-panel{padding:26px 20px}.workflow-fit{padding:22px}.qa-row{grid-template-columns:44px 1fr}.enterprise-core{height:auto;min-height:0;padding:22px}.enterprise-center{position:relative;left:auto;top:auto;transform:none;margin:0 auto 18px;width:154px;height:154px}.enterprise-node{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;width:100%;margin-top:12px}.industry-grid{grid-template-columns:1fr}.industry-item,.industry-item:nth-child(even){border-left:0;padding-left:0;padding-right:0}.region-row{grid-template-columns:1fr;gap:7px}.workflow-heading{text-align:left;margin-left:0;margin-right:0}.lifecycle-section .heading-group.centered{text-align:left;margin-left:0;margin-right:0}.qa-heading{text-align:left}.why-row{grid-template-columns:44px 1fr}.faq-question{font-size:17px;padding:20px 0}.final-cta{padding:64px 0}.final-actions{flex-direction:column}.text-link{min-height:44px;align-items:center}.dark-feature{grid-template-columns:3px 1fr}.term-visual svg{min-width:0}}

  @media (max-width:340px){.shell{padding-left:20px;padding-right:20px}.hero-art{width:100%}.document-item{grid-template-columns:1fr}.icon-box{margin-bottom:2px}.why-row,.qa-row{grid-template-columns:1fr}.why-icon,.qa-icon{margin-bottom:2px}}
`;
