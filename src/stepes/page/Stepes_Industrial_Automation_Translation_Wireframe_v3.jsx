import React, { useState } from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  darkEyebrow: "#F2A7C6",
  ink: "#171717",
  body: "#3F3F46",
  muted: "#6B7280",
  border: "#E6E6EA",
  soft: "#F7F7F8",
  dark: "#17171B",
  dark2: "#24242A",
  white: "#FFFFFF",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  software: "https://www.stepes.com/software-localization-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  robotics: "https://www.stepes.com/robotics-translation-services/",
  physicalAI: "https://www.stepes.com/physical-ai-translation-services/",
  aiML: "https://www.stepes.com/ai-machine-learning-translation-services/",
  industry40: "https://www.stepes.com/manufacturing-translation-services/industry-4-0-translation/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  continuous: "https://www.stepes.com/continuous-translation/",
  api: "https://www.stepes.com/developers/translation-api/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  iso: "https://www.stepes.com/iso-certified-translation-services/",
  security: "https://www.stepes.com/security/",
  languages: "https://www.stepes.com/translation-languages/",
};

const techStack = [
  ["PLC, Motion & Machine Control", "Programmable logic controllers (PLCs), motion controllers, drives, servo systems, machine controllers, configuration environments, diagnostics, parameters, error states, and industrial control system documentation."],
  ["HMI & Operator Interfaces", "Touchscreens, operator panels, commands, machine status, alarms, warnings, diagnostic messages, maintenance prompts, and setup screens."],
  ["SCADA & DCS Systems", "Supervisory control, distributed control, process visualization, control-room dashboards, alarm environments, monitoring screens, reports, and supporting documentation."],
  ["IIoT, Edge & Industrial Connectivity", "Industrial gateways, connected sensors, edge devices, industrial networks, device connectivity, remote monitoring, device management, and cloud-connected industrial applications."],
  ["Machine Vision & Industrial Sensing", "Inspection systems, vision platforms, sensing technologies, measurement equipment, configuration tools, diagnostics, and related technical content."],
  ["Automation Software & Engineering Tools", "Programming, configuration, commissioning, monitoring, simulation, diagnostics, engineering, maintenance, and production applications."],
];

const hmiItems = [
  ["Operator Commands", "Machine commands, operating modes, controls, settings, navigation, and action labels."],
  ["Alarms & Fault Messages", "Warnings, errors, fault states, severity levels, diagnostics, troubleshooting, and service terminology."],
  ["Machine Status & Process Feedback", "Equipment states, production status, values, system feedback, and monitoring content."],
  ["Maintenance & Diagnostics", "Service prompts, diagnostic messages, reminders, troubleshooting, and machine-health information."],
  ["Configuration & Setup", "Parameter settings, calibration, commissioning tools, machine setup, and configuration interfaces."],
  ["In-Context Validation", "Screenshots, string metadata, engineering comments, product references, prototypes, and test environments."],
];

const softwareGroups = [
  ["Control & Machine Software", "Translate control applications and machine software in their technical and operating context, not as isolated interface strings."],
  ["Engineering & Programming Tools", "Use engineering references and approved product terminology to resolve specialized commands, functions, parameters, and ambiguous UI language."],
  ["Configuration & Commissioning", "Localize setup, parameter, calibration, testing, and commissioning environments used during equipment deployment."],
  ["Embedded & Firmware Interfaces", "Protect keys, variables, tags, placeholders, values, and formatting while localizing embedded and firmware-facing content."],
  ["Monitoring & Diagnostics", "Keep status, alarm, diagnostic, condition-monitoring, and troubleshooting terminology aligned with supporting documentation."],
  ["Industrial Web & Cloud Platforms", "Localize dashboards, remote-management environments, device portals, and connected industrial applications."],
  ["Remote & Mobile Service Apps", "Extend approved terminology to technicians and service teams working with equipment in the field."],
  ["Release, Help & Support Content", "Carry translation memory and terminology into release notes, software help, support content, and recurring product updates."],
];

const lifecycle = [
  ["Design & Engineering", "Specifications, system requirements, technical datasheets, engineering reports, component information, and automation architecture documentation."],
  ["Integration & Installation", "Installation guides, integration instructions, equipment requirements, configuration documentation, and technical procedures."],
  ["Commissioning", "Setup procedures, testing materials, calibration information, verification steps, checklists, and commissioning documentation."],
  ["Operation", "Operator manuals, machine instructions, SOPs, production procedures, control-system guidance, and reference content."],
  ["Maintenance & Service", "Service manuals, preventive maintenance, troubleshooting, diagnostics, repair instructions, parts information, and service bulletins."],
  ["Updates & Modernization", "Firmware releases, software updates, retrofits, control-system modifications, interface revisions, and new configurations."],
];

const aiItems = [
  ["Predictive Maintenance", "Equipment-health dashboards, maintenance recommendations, anomaly alerts, diagnostic information, and service workflows."],
  ["Machine Vision AI", "Inspection results, vision-system interfaces, configuration tools, documentation, and training."],
  ["Intelligent Diagnostics", "Sensor-driven diagnostics, equipment-history analysis, AI-assisted recommendations, and technician-facing information."],
  ["Industrial Copilots", "Conversational interfaces, AI-assisted engineering applications, knowledge systems, and natural-language support experiences."],
  ["Generative & Agentic AI", "Emerging automation applications that generate or interpret information and coordinate increasingly complex tasks or workflows."],
  ["Autonomous Industrial Systems", "Software, interfaces, documentation, and operating content for systems with increasingly autonomous sensing, decision support, and action."],
];

const connectedSystems = [
  ["Industrial IoT Platforms", "User interfaces, dashboards, device-management content, configuration environments, documentation, help, and technical support."],
  ["Sensors & Connected Devices", "Installation, configuration, calibration, diagnostics, operating information, and service content."],
  ["Industrial Gateways & Edge Computing", "Setup, integration, security, troubleshooting, and management content for industrial edge systems."],
  ["Remote Monitoring", "Alerts, asset-health information, diagnostics, machine status, service workflows, and remote-management interfaces."],
  ["Industrial Analytics", "Performance dashboards, condition monitoring, production analytics, reports, and AI-assisted operational insights."],
  ["Connected Service", "Machine interfaces, technician applications, support platforms, knowledge content, and field-service documentation."],
];

const industries = [
  ["Automotive & EV Manufacturing", "Robotic cells, assembly automation, welding, painting, battery manufacturing, inspection, material handling, machine controls, and operator interfaces."],
  ["Electronics & Semiconductor", "Precision equipment, automated inspection, process control, test equipment, sensing technologies, and complex equipment interfaces."],
  ["Industrial Machinery", "Machine tools, production equipment, packaging machines, processing systems, control platforms, engineering software, and field-service documentation."],
  ["Food & Beverage", "Processing, filling, packaging, inspection, conveying, monitoring, production controls, and automated line operations."],
  ["Pharmaceutical & Life Sciences", "Production equipment, process automation, machine interfaces, monitoring systems, equipment documentation, and controlled manufacturing environments."],
  ["Energy & Utilities", "Process control, distributed automation, monitoring, industrial instrumentation, field systems, diagnostics, and operational technology."],
  ["Warehousing & Logistics", "Conveyors, sortation, warehouse controls, automated storage, autonomous material movement, fleet management, and logistics automation."],
  ["Packaging", "Filling, labeling, wrapping, inspection, coding, palletizing, line controls, and integrated packaging systems."],
];

const audiences = [
  ["Automation Equipment Manufacturers", "Take controllers, sensors, industrial electronics, operator devices, and automation products into international markets."],
  ["Machine Builders", "Localize HMI, manuals, installation information, service content, and operator training as one connected machine experience."],
  ["Control-System & Software Vendors", "Translate engineering environments, industrial applications, dashboards, monitoring systems, documentation, and support content."],
  ["System Integrators", "Support international deployments with multilingual engineering, installation, configuration, commissioning, and customer documentation."],
  ["Robotics & Autonomous-System Companies", "Coordinate factory automation content with the control systems and interfaces surrounding robotic and autonomous equipment."],
  ["Global Manufacturers", "Standardize multilingual machine documentation, production interfaces, maintenance information, and training across international facilities."],
  ["Engineering & Field-Service Organizations", "Support technicians and engineers with installation, troubleshooting, maintenance, upgrade, and customer-support content."],
];

const qaSteps = [
  ["Assess", "Review content type, audience, languages, technical subject matter, file format, available context, safety significance, and review requirements."],
  ["Prepare", "Import translation memories, identify recurring terminology, establish glossaries, protect nontranslatable elements, and organize references."],
  ["Translate", "Apply professional technical translation, AI-assisted workflows, or another agreed model based on content and quality requirements."],
  ["Review", "Check linguistic accuracy, terminology, clarity, consistency, numbers, units, variables, warnings, and contextual information."],
  ["Validate", "Perform appropriate automated QA, formatting checks, interface review, in-context validation, or customer review according to scope."],
  ["Deliver & Reuse", "Finalize multilingual content and retain approved terminology and translation memory for future updates, languages, and releases."],
];

const related = [
  ["Robotics Translation Services", "Robotic systems, cobots, AMRs, humanoids, autonomous systems, robot software, controllers, training, documentation, deployment, and service.", links.robotics],
  ["Physical AI Translation Services", "Embodied AI, perception-driven machines, autonomous physical systems, multimodal interaction, and intelligent hardware.", links.physicalAI],
  ["Manufacturing Translation Services", "The broader manufacturing lifecycle, including engineering, suppliers, production, quality, workforce, launch, and service.", links.manufacturing],
  ["Industry 4.0 Translation Services", "Smart manufacturing, digital twins, connected production, industrial data, predictive operations, and IT/OT convergence.", links.industry40],
  ["Technical Translation Services", "Engineering documentation, manuals, specifications, operating procedures, safety information, and complex technical content.", links.technical],
  ["Software Localization Services", "Applications, user interfaces, resource files, product releases, and multilingual digital experiences.", links.software],
  ["AI & Machine Learning Translation Services", "Multilingual data, AI product localization, model evaluation, language QA, and related global AI content.", links.aiML],
];

const faqs = [
  ["What is industrial automation translation?", "Industrial automation translation is the specialized translation and localization of software, interfaces, documentation, training, and other multilingual content associated with technologies that control, monitor, connect, and automate industrial equipment and processes. It can include HMI localization, PLC-related content, SCADA and DCS interfaces, automation software, IIoT platforms, control-system documentation, installation materials, operating manuals, maintenance content, engineering information, and safety-related communications."],
  ["What types of industrial automation content can Stepes translate?", "Stepes supports HMI and operator interfaces, automation software, PLC and controller content, SCADA and DCS systems, IIoT applications, engineering documentation, technical manuals, installation instructions, commissioning procedures, service documentation, troubleshooting guides, training materials, warnings, alarms, product websites, marketing content, and recurring software and firmware updates."],
  ["Can Stepes localize HMI and operator interfaces?", "Yes. Stepes localizes touchscreen interfaces, operator panels, dashboards, menus, commands, machine states, alarms, fault messages, maintenance prompts, setup screens, configuration content, diagnostic interfaces, and other HMI strings. When available, screenshots, prototypes, string metadata, engineering comments, test environments, and product references can provide context for short or ambiguous strings."],
  ["Do you translate PLC, SCADA, and DCS content?", "Yes. Stepes supports multilingual content associated with programmable logic controllers, machine controllers, SCADA platforms, distributed control systems, configuration environments, monitoring interfaces, engineering tools, alarms, technical documentation, and related automation systems."],
  ["Can Stepes translate industrial automation software and embedded interfaces?", "Yes. Stepes provides localization for industrial applications, embedded interfaces, machine software, engineering and configuration tools, web dashboards, monitoring systems, diagnostic utilities, firmware interfaces, and service applications. We can also protect keys, variables, tags, placeholders, markup, and other technical elements during localization."],
  ["How does Stepes maintain terminology across HMI, manuals, and training?", "Stepes can establish customer-specific terminology resources and translation memories shared across related assets. Approved terms for equipment, components, machine states, functions, warnings, alarms, and engineering concepts can then be reused across interfaces, manuals, training, service documentation, websites, and subsequent product releases."],
  ["Can Stepes support recurring software and firmware updates?", "Yes. Stepes supports ongoing localization programs for industrial products with recurring software, firmware, interface, and documentation changes. New and modified content can move through translation, professional review, QA, and delivery while approved terminology and translation memory are reused from earlier releases."],
  ["Does Stepes translate industrial safety and maintenance documentation?", "Yes. Stepes translates warnings, cautions, operating instructions, installation information, maintenance procedures, troubleshooting guides, emergency procedures, hazard information, service instructions, lockout/tagout-related content, and other technical material. The quality and review model can be configured according to technical complexity, intended audience, content risk, and customer requirements."],
  ["What is the difference between industrial automation translation and robotics translation?", "Industrial automation translation focuses on the systems that control, monitor, connect, and coordinate industrial processes and equipment, including PLCs, HMI, SCADA, DCS, automation software, IIoT, control systems, and related documentation. Robotics translation focuses on the robotic product or platform itself, including robot controllers, embedded software, autonomous behavior, interfaces, perception systems, installation, training, service, and ongoing product development."],
  ["How does Stepes use AI for industrial automation translation?", "Stepes uses AI as part of a broader translation workflow that can include translation memory, terminology management, automated quality checks, professional technical translation, linguistic review, and customer approval. The mix depends on content type, technical complexity, intended use, quality requirements, volume, and release schedule."],
  ["Can Stepes support IIoT and smart manufacturing localization?", "Yes. Stepes supports IIoT platforms, industrial gateways, smart sensors, edge systems, remote monitoring, industrial analytics, predictive-maintenance applications, connected-production interfaces, and related technical documentation. Broader smart-factory, digital-twin, industrial-data, and Industry 4.0 programs can be supported through our dedicated Industry 4.0 Translation Services."],
  ["What languages does Stepes support for industrial automation translation?", "Stepes supports more than 100 languages and regional variants across Europe, Asia-Pacific, the Americas, the Middle East, and Africa. Common industrial automation languages include German, French, Spanish, Italian, Polish, Czech, Chinese, Japanese, Korean, Vietnamese, Portuguese, Dutch, Turkish, and many others."],
];

function Icon({ type = "gear", size = 22 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const shapes = {
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h4M7 12h7"/></>,
    network: <><rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="3" width="7" height="6" rx="1"/><rect x="8.5" y="15" width="7" height="6" rx="1"/><path d="M5.5 9v3h13V9M12 12v3"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    chip: <><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    robot: <><rect x="6" y="7" width="12" height="10" rx="2"/><path d="M9 12h.01M15 12h.01M9 15h6M12 7V4M10 4h4M4 10H2v4h2M20 10h2v4h-2M8 20h2M14 20h2"/></>,
    spark: <><path d="m12 2 1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2Z"/><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"/></>,
    book: <><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"/><path d="M7 4v16M7 8h7M7 12h7"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  };
  return <svg {...p}>{shapes[type] || shapes.gear}</svg>;
}

function ArrowLink({ href, children, dark = false }) {
  return <a className={`textLink ${dark ? "textLinkDark" : ""}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrowDark" : ""}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, centered = false, responsiveCenter = false, dark = false }) {
  return <div className={`headingGroup ${centered ? "headingCentered" : ""} ${responsiveCenter ? "headingResponsiveCenter" : ""}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p className="sectionIntro">{intro}</p> : null}
  </div>;
}

function AutomationIllustration() {
  return <div className="heroArt" aria-hidden="true">
    <svg viewBox="0 0 620 470" role="img">
      <rect x="38" y="66" width="180" height="300" rx="24" fill="#F4F4F5" stroke="#B7B7BE" strokeWidth="2"/>
      <rect x="66" y="98" width="124" height="74" rx="10" fill="#FFFFFF" stroke="#9B9BA3" strokeWidth="2"/>
      <circle cx="89" cy="135" r="7" fill="#C11D63"/>
      <rect x="107" y="118" width="58" height="8" rx="4" fill="#777781"/>
      <rect x="107" y="136" width="42" height="7" rx="3.5" fill="#B2B2B8"/>
      <rect x="66" y="198" width="124" height="128" rx="10" fill="#FFFFFF" stroke="#9B9BA3" strokeWidth="2"/>
      {[0,1,2,3].map((r)=><g key={r}>{[0,1,2].map((c)=><rect key={c} x={82+c*33} y={217+r*24} width="21" height="12" rx="3" fill={c===0 && r===1 ? "#C11D63" : "#8D8D95"}/>)}</g>)}
      <rect x="270" y="66" width="248" height="178" rx="24" fill="#FFFFFF" stroke="#9B9BA3" strokeWidth="2"/>
      <rect x="294" y="90" width="200" height="22" rx="6" fill="#F2F2F3"/>
      <rect x="294" y="129" width="76" height="76" rx="12" fill="#FDF2F7" stroke="#D7A4BA"/>
      <circle cx="332" cy="167" r="18" fill="none" stroke="#C11D63" strokeWidth="4"/>
      <path d="M332 149v36M314 167h36" stroke="#C11D63" strokeWidth="3"/>
      <rect x="389" y="132" width="81" height="9" rx="4" fill="#6C6C74"/>
      <rect x="389" y="153" width="54" height="7" rx="3.5" fill="#A8A8AF"/>
      <rect x="389" y="174" width="66" height="7" rx="3.5" fill="#A8A8AF"/>
      <rect x="389" y="195" width="42" height="7" rx="3.5" fill="#A8A8AF"/>
      <path d="M219 146H270M218 284h80v80h72" fill="none" stroke="#8D8D95" strokeWidth="2.5" strokeDasharray="6 7"/>
      <circle cx="244" cy="146" r="5" fill="#C11D63"/>
      <circle cx="296" cy="284" r="5" fill="#C11D63"/>
      <rect x="345" y="294" width="178" height="85" rx="18" fill="#F4F4F5" stroke="#B7B7BE" strokeWidth="2"/>
      <path d="M379 338h42l21-25 23 43 22-31" fill="none" stroke="#7F7F88" strokeWidth="3"/>
      <circle cx="379" cy="338" r="5" fill="#C11D63"/>
      <circle cx="442" cy="313" r="5" fill="#C11D63"/>
      <circle cx="465" cy="356" r="5" fill="#C11D63"/>
      <circle cx="487" cy="325" r="5" fill="#C11D63"/>
      <path d="M510 80c34 11 58 39 65 75M574 155l-8-13M574 155l-16 1" fill="none" stroke="#8F8F98" strokeWidth="2"/>
      <path d="M537 249c28 16 44 38 45 66M582 315l-11-11M582 315l-12 6" fill="none" stroke="#8F8F98" strokeWidth="2"/>
    </svg>
  </div>;
}

function HMIMockup() {
  return <div className="hmiMockup">
    <div className="mockTop"><span>Packaging Line 04</span><span className="liveDot">RUNNING</span></div>
    <div className="mockBody">
      <div className="mockPanel sourcePanel">
        <div className="mockLabel">SOURCE · ENGLISH</div>
        <div className="statusLine"><span>Machine Status</span><b>Running</b></div>
        <div className="statusLine"><span>Speed</span><b>128 units/min</b></div>
        <div className="alarmBox"><span>Warning</span><strong>Guard door open</strong></div>
        <div className="statusLine"><span>Maintenance</span><b>Due in 48 h</b></div>
        <button type="button" tabIndex={-1}>Reset Alarm</button>
      </div>
      <div className="mockArrow"><Icon type="arrow" size={28}/></div>
      <div className="mockPanel targetPanel">
        <div className="mockLabel">TARGET · GERMAN</div>
        <div className="statusLine"><span>Maschinenstatus</span><b>In Betrieb</b></div>
        <div className="statusLine"><span>Geschwindigkeit</span><b>128 Einh./Min.</b></div>
        <div className="alarmBox"><span>Warnung</span><strong>Schutztür geöffnet</strong></div>
        <div className="statusLine"><span>Wartung</span><b>Fällig in 48 Std.</b></div>
        <button type="button" tabIndex={-1}>Alarm zurücksetzen</button>
      </div>
    </div>
    <div className="mockFooter">
      <span>Terminology preserved</span><span>Variables protected</span><span>Warning reviewed</span><span>UI fit checked</span>
    </div>
  </div>;
}

function FAQItem({ q, a, open, onClick }) {
  return <div className="faqItem">
    <button className="faqQ" onClick={onClick} aria-expanded={open}>
      <span>{q}</span><span className="faqPlus" aria-hidden="true">{open ? "−" : "+"}</span>
    </button>
    {open ? <div className="faqA"><p>{a}</p></div> : null}
  </div>;
}

export default function StepesIndustrialAutomationTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);
  return <div className="page">
    <style>{`
      *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}.page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:${C.ink};background:#fff;overflow:hidden}.shell{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.sectionDense{padding:80px 0}.soft{background:${C.soft}}.blush{background:${C.blush}}.dark{background:${C.dark};color:${C.white}}.dark2{background:${C.dark2};color:${C.white}}h1,h2,h3,p{margin-top:0}h1{font-size:48px;line-height:1.04;letter-spacing:-1.7px;font-weight:600;margin-bottom:24px}h2{font-size:36px;line-height:1.08;letter-spacing:-1.05px;font-weight:600;margin-bottom:20px}h3{font-size:24px;line-height:1.16;letter-spacing:-.35px;font-weight:600;margin-bottom:12px}.eyebrow{font-size:11px;line-height:1.3;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:${C.magenta};margin-bottom:16px}.eyebrowDark{color:${C.darkEyebrow}}p{font-size:16px;line-height:1.68;color:${C.body};font-weight:400}.dark p,.dark2 p{color:#D7D7DC}.hero{padding:100px 0 92px;background:linear-gradient(180deg,#fff 0%,#fff 66%,#FAFAFB 100%)}.heroGrid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(390px,.92fr);gap:62px;align-items:center}.heroCopy{max-width:700px}.heroCopy .lead{font-size:18px;line-height:1.65;max-width:690px;color:#414149;margin-bottom:30px}.buttonRow{display:flex;gap:14px;flex-wrap:wrap}.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.2s ease;border:1px solid transparent}.btnPrimary,.btnPrimary:visited,.btnPrimary:hover,.btnPrimary:active,.btnPrimary:focus{background:${C.magenta};color:#fff!important}.btnPrimary:hover{background:${C.magentaDark};transform:translateY(-1px)}.btnSecondary{background:#fff;color:${C.ink};border-color:#CFCFD5}.btnSecondary:hover{border-color:#A9A9B0;background:#FAFAFB}.heroTrust{display:flex;flex-wrap:wrap;gap:8px 24px;margin-top:30px;font-size:14px;color:#666670}.heroTrust span{position:relative}.heroTrust span:not(:last-child):after{content:"";position:absolute;right:-13px;top:4px;width:1px;height:14px;background:#D6D6DB}.heroArt{min-height:420px;display:flex;align-items:center;justify-content:center}.heroArt svg{width:100%;max-width:600px;height:auto}.proofBand{border-top:1px solid ${C.border};border-bottom:1px solid ${C.border};background:#fff}.proofGrid{display:grid;grid-template-columns:repeat(4,1fr)}.proofItem{padding:28px 22px}.proofItem:not(:last-child){border-right:1px solid ${C.border}}.proofItem strong{font-size:18px;font-weight:600;display:block;margin-bottom:4px}.proofItem span{font-size:16px;line-height:1.45;color:${C.muted}}.headingGroup{max-width:800px;margin-bottom:46px}.headingCentered{margin-left:auto;margin-right:auto;text-align:center}.sectionIntro{font-size:18px;line-height:1.65;max-width:800px;color:${C.body};margin-bottom:0}.headingCentered .sectionIntro{margin-left:auto;margin-right:auto}.techLayout{display:grid;grid-template-columns:350px 1fr;gap:64px;align-items:start}.stickyIntro{position:sticky;top:24px}.editorialRows{border-top:1px solid ${C.border}}.editorialRow{display:grid;grid-template-columns:52px 1fr;gap:18px;padding:26px 0;border-bottom:1px solid ${C.border}}.iconWrap{width:44px;height:44px;border-radius:14px;background:#F8EDF2;color:${C.magenta};display:flex;align-items:center;justify-content:center}.editorialRow p{margin-bottom:0}.hmiGrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:54px;align-items:center}.miniRows{border-top:1px solid ${C.border};margin-top:26px}.miniRow{padding:18px 0;border-bottom:1px solid ${C.border}}.miniRow strong{font-size:16px;display:block;margin-bottom:4px}.miniRow p{margin-bottom:0}.hmiMockup{border:1px solid #D8D8DE;border-radius:28px;background:#fff;box-shadow:0 18px 50px rgba(20,20,24,.08);overflow:hidden}.mockTop{height:54px;padding:0 22px;background:#202126;color:#fff;display:flex;align-items:center;justify-content:space-between;font-size:14px;font-weight:600}.liveDot{font-size:11px;letter-spacing:.11em;color:#E5E5E8}.mockBody{display:grid;grid-template-columns:1fr 44px 1fr;align-items:center;padding:24px}.mockPanel{border:1px solid #E1E1E5;border-radius:18px;padding:18px;background:#FAFAFB}.targetPanel{background:#FFF9FB}.mockLabel{font-size:11px;letter-spacing:.1em;font-weight:600;color:${C.magenta};margin-bottom:14px}.statusLine{display:flex;justify-content:space-between;gap:14px;padding:10px 0;border-bottom:1px solid #E8E8EC;font-size:16px}.statusLine b{font-weight:600;text-align:right}.alarmBox{margin:14px 0;padding:12px 14px;background:#FFF0F5;border-radius:12px}.alarmBox span{font-size:11px;color:${C.magenta};font-weight:600;display:block;margin-bottom:4px}.alarmBox strong{font-size:16px}.mockPanel button{margin-top:14px;width:100%;min-height:40px;border:0;border-radius:10px;background:#2E2E34;color:#fff;font-size:16px;font-weight:600}.mockArrow{display:flex;justify-content:center;color:${C.magenta}}.mockFooter{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #E0E0E4;background:#F7F7F8}.mockFooter span{font-size:12px;text-align:center;padding:14px 8px;color:#595963}.mockFooter span:not(:last-child){border-right:1px solid #E0E0E4}.darkSplit{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:start}.darkList{border-top:1px solid #3A3A42}.darkRow{display:grid;grid-template-columns:220px 1fr;gap:26px;padding:22px 0;border-bottom:1px solid #3A3A42}.darkRow strong{font-size:16px}.darkRow p{margin-bottom:0}.textLink{display:inline-flex;align-items:center;gap:8px;color:${C.magenta};font-weight:600;text-decoration:none;font-size:16px;margin-top:10px}.textLink span{transition:.2s}.textLink:hover span{transform:translateX(4px)}.textLinkDark{color:${C.darkEyebrow}}.timeline{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid ${C.border};border-bottom:1px solid ${C.border}}.timelineItem{padding:26px 20px;min-height:230px}.timelineItem:not(:last-child){border-right:1px solid ${C.border}}.timelineItem .stepNum{font-size:11px;color:${C.magenta};font-weight:600;letter-spacing:.12em;margin-bottom:18px}.timelineItem h3{font-size:18px}.timelineItem p{font-size:16px;margin-bottom:0}.safetyGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:start}.safetyList{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid ${C.border};border-left:1px solid ${C.border}}.safetyList div{padding:18px 20px;border-right:1px solid ${C.border};border-bottom:1px solid ${C.border};font-size:16px}.callout{margin-top:28px;padding:22px 24px;border:1px solid #E8D2DC;border-radius:20px;background:#fff;font-size:16px;line-height:1.6;color:#3E2832}.aiGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#3B3B42;border:1px solid #3B3B42;border-radius:28px;overflow:hidden}.aiItem{padding:30px;background:${C.dark2};min-height:230px}.aiItem .iconWrap{background:#34242D;color:${C.darkEyebrow};margin-bottom:24px}.aiItem h3{color:#fff}.aiItem p{margin-bottom:0}.dualLinks{display:flex;gap:28px;flex-wrap:wrap;margin-top:30px}.roboticsSplit{display:grid;grid-template-columns:1.1fr .9fr;gap:64px;align-items:center}.robotVisual{border-radius:28px;background:#F5F5F6;padding:32px;min-height:390px;display:flex;align-items:center;justify-content:center}.robotVisual svg{width:100%;max-width:450px}.checkList{display:grid;gap:13px;margin:26px 0}.checkLine{display:flex;gap:12px;align-items:flex-start;font-size:16px;color:${C.body}}.checkLine:before{content:"";width:7px;height:7px;border-radius:50%;background:${C.magenta};margin-top:9px;flex:0 0 auto}.connectedGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:0 46px}.connectedRow{padding:24px 0;border-top:1px solid ${C.border}}.connectedRow:nth-last-child(-n+2){border-bottom:1px solid ${C.border}}.connectedRow h3{font-size:20px}.connectedRow p{margin-bottom:0}.factoryCompare{display:grid;grid-template-columns:1fr 74px 1fr;gap:0;align-items:stretch}.comparePanel{border:1px solid ${C.border};border-radius:28px;padding:30px}.comparePanel h3{font-size:24px}.termCloud{display:flex;flex-wrap:wrap;gap:9px;margin-top:22px}.termCloud span{padding:8px 11px;border-radius:999px;background:#F4F4F6;font-size:14px;color:#52525A}.compareBridge{display:flex;align-items:center;justify-content:center;color:${C.magenta}}.terminologyGrid{display:grid;grid-template-columns:.86fr 1.14fr;gap:62px;align-items:center}.termHub{position:relative;min-height:420px;border:1px solid ${C.border};border-radius:30px;background:#fff;display:flex;align-items:center;justify-content:center}.termCenter{width:150px;height:150px;border-radius:50%;background:${C.blush};border:1px solid #E6C3D2;display:flex;align-items:center;justify-content:center;text-align:center;padding:16px;font-weight:600;color:#412A35}.termNode{position:absolute;min-width:120px;padding:13px 15px;border:1px solid ${C.border};border-radius:14px;background:#fff;text-align:center;font-size:15px;font-weight:600;box-shadow:0 8px 25px rgba(20,20,24,.05)}.n1{top:28px;left:50%;transform:translateX(-50%)}.n2{top:112px;right:28px}.n3{bottom:54px;right:38px}.n4{bottom:38px;left:50%;transform:translateX(-50%)}.n5{bottom:54px;left:38px}.n6{top:112px;left:28px}.releaseFlow{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}.releaseItem{padding:24px 18px;border:1px solid ${C.border};border-radius:20px;background:#fff}.releaseItem strong{font-size:16px;display:block;margin-bottom:8px}.releaseItem p{margin-bottom:0}.workflowGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.workflowPanel{border:1px solid ${C.border};border-radius:26px;padding:28px;background:#fff}.workflowPanel h3{font-size:22px}.workflowPanel p{margin-bottom:0}.workflowFooter{margin-top:26px;padding:22px 24px;border-top:1px solid ${C.border};font-size:18px;line-height:1.5;text-align:center;font-weight:600}.industryGrid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid ${C.border};border-left:1px solid ${C.border}}.industryItem{padding:25px 22px;border-right:1px solid ${C.border};border-bottom:1px solid ${C.border};min-height:220px}.industryItem h3{font-size:20px}.industryItem p{margin-bottom:0}.audienceRows{border-top:1px solid ${C.border}}.audienceRow{display:grid;grid-template-columns:300px 1fr;gap:40px;padding:25px 0;border-bottom:1px solid ${C.border}}.audienceRow h3{font-size:20px;margin-bottom:0}.audienceRow p{margin-bottom:0}.qaFlow{display:grid;grid-template-columns:repeat(6,1fr);border:1px solid #3A3A42;border-radius:28px;overflow:hidden}.qaStep{padding:27px 20px;min-height:265px}.qaStep:not(:last-child){border-right:1px solid #3A3A42}.qaNum{font-size:12px;color:${C.darkEyebrow};font-weight:600;letter-spacing:.12em;margin-bottom:20px}.qaStep h3{font-size:20px;color:#fff}.securityGrid{display:grid;grid-template-columns:1fr 1fr;border:1px solid ${C.border};border-radius:28px;overflow:hidden}.securityItem{padding:28px;display:grid;grid-template-columns:44px 1fr;gap:18px;background:#fff}.securityItem:nth-child(odd){border-right:1px solid ${C.border}}.securityItem:nth-child(-n+2){border-bottom:1px solid ${C.border}}.securityItem h3{font-size:20px}.securityItem p{margin-bottom:0}.languageGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.languageCol{padding:24px 22px;border:1px solid ${C.border};border-radius:22px;background:#fff}.languageCol h3{font-size:18px}.languageCol p{margin-bottom:0}.whyGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.whyItem{padding:26px 24px;border-top:2px solid ${C.magenta};background:#fff}.whyItem h3{font-size:20px}.whyItem p{margin-bottom:0}.relatedList{border-top:1px solid #3B3B42}.relatedRow{display:grid;grid-template-columns:300px 1fr 230px;gap:28px;padding:24px 0;border-bottom:1px solid #3B3B42;align-items:center}.relatedRow h3{font-size:19px;color:#fff;margin-bottom:0}.relatedRow p{margin-bottom:0}.relatedRow .textLink{margin-top:0;justify-self:end}.practiceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}.practice{border:1px solid ${C.border};border-radius:26px;padding:28px;background:#fff}.practice h3{font-size:21px}.practiceLabel{font-size:11px;color:${C.magenta};font-weight:600;letter-spacing:.12em;margin:22px 0 8px}.practice p{margin-bottom:0}.faqPanel{border-top:1px solid ${C.border}}.faqItem{border-bottom:1px solid ${C.border}}.faqQ{width:100%;padding:24px 0;background:none;border:0;display:flex;justify-content:space-between;gap:28px;text-align:left;font-family:inherit;font-size:18px;font-weight:600;color:${C.ink};cursor:pointer}.faqPlus{font-size:25px;line-height:1;color:${C.magenta};font-weight:400}.faqA{padding:0 56px 24px 0;max-width:880px}.faqA p{margin-bottom:0}.finalCTA{padding:88px 0;background:${C.blush}}.ctaBox{display:grid;grid-template-columns:1fr auto;gap:50px;align-items:end}.ctaBox .sectionIntro{max-width:760px}.ctaActions{display:flex;gap:14px;flex-wrap:wrap;justify-content:flex-end}
      @media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.heroGrid{grid-template-columns:1fr .88fr;gap:38px}.techLayout{grid-template-columns:300px 1fr;gap:42px}.timeline{grid-template-columns:repeat(3,1fr)}.timelineItem:nth-child(3){border-right:0}.timelineItem:nth-child(-n+3){border-bottom:1px solid ${C.border}}.aiGrid{grid-template-columns:repeat(2,1fr)}.releaseFlow{grid-template-columns:repeat(3,1fr)}.qaFlow{grid-template-columns:repeat(3,1fr)}.qaStep:nth-child(3){border-right:0}.qaStep:nth-child(-n+3){border-bottom:1px solid #3A3A42}.industryGrid{grid-template-columns:repeat(2,1fr)}.whyGrid{grid-template-columns:repeat(2,1fr)}.relatedRow{grid-template-columns:240px 1fr 210px}}
      @media(max-width:820px){.shell{padding-left:24px;padding-right:24px}.section{padding:76px 0}.sectionDense{padding:68px 0}.hero{padding:80px 0 72px}h1{font-size:42px;line-height:1.05;letter-spacing:-1.4px}h2{font-size:32px;line-height:1.09;letter-spacing:-.85px}h3{font-size:22px}.headingResponsiveCenter,.responsiveHeading{text-align:center;max-width:800px;margin-left:auto;margin-right:auto}.headingResponsiveCenter .sectionIntro,.responsiveHeading .sectionIntro{margin-left:auto;margin-right:auto}.heroGrid,.hmiGrid,.darkSplit,.safetyGrid,.roboticsSplit,.terminologyGrid{grid-template-columns:1fr}.heroCopy{text-align:center;margin:auto}.heroCopy .lead{margin-left:auto;margin-right:auto}.buttonRow{justify-content:center}.heroTrust{justify-content:center}.heroTrust span:after{display:none}.heroArt{min-height:auto;max-width:560px;margin:24px auto 0}.proofGrid{grid-template-columns:repeat(2,1fr)}.proofItem:nth-child(2){border-right:0}.proofItem:nth-child(-n+2){border-bottom:1px solid ${C.border}}.techLayout{grid-template-columns:1fr}.stickyIntro{position:static}.techLayout>.stickyIntro{text-align:center;max-width:760px;margin:0 auto}.techLayout>.stickyIntro .sectionIntro{margin-left:auto;margin-right:auto}.mockFooter{grid-template-columns:repeat(2,1fr)}.mockFooter span:nth-child(2){border-right:0}.mockFooter span:nth-child(-n+2){border-bottom:1px solid #E0E0E4}.darkSplit>.headingGroup{text-align:left;margin-left:0;margin-right:0}.darkSplit>.headingGroup .sectionIntro{margin-left:0;margin-right:0}.timeline{grid-template-columns:repeat(2,1fr)}.timelineItem:nth-child(3){border-right:1px solid ${C.border}}.timelineItem:nth-child(even){border-right:0}.timelineItem:nth-child(-n+4){border-bottom:1px solid ${C.border}}.aiGrid{grid-template-columns:1fr 1fr}.connectedGrid{grid-template-columns:1fr}.connectedRow:nth-last-child(-n+2){border-bottom:0}.connectedRow:last-child{border-bottom:1px solid ${C.border}}.factoryCompare{grid-template-columns:1fr}.compareBridge{height:64px;transform:rotate(90deg)}.releaseFlow{grid-template-columns:repeat(2,1fr)}.workflowGrid{grid-template-columns:1fr}.industryGrid{grid-template-columns:repeat(2,1fr)}.audienceRow{grid-template-columns:240px 1fr}.qaFlow{grid-template-columns:repeat(2,1fr)}.qaStep:nth-child(3){border-right:1px solid #3A3A42}.qaStep:nth-child(even){border-right:0}.qaStep:nth-child(-n+4){border-bottom:1px solid #3A3A42}.languageGrid{grid-template-columns:repeat(2,1fr)}.relatedRow{grid-template-columns:220px 1fr;gap:18px}.relatedRow .textLink{grid-column:2;justify-self:start;margin-top:-8px}.practiceGrid{grid-template-columns:1fr}.ctaBox{grid-template-columns:1fr;text-align:center}.ctaBox .sectionIntro{margin-left:auto;margin-right:auto}.ctaActions{justify-content:center}.headingGroup.headingCentered{margin-bottom:40px}}
      @media(max-width:560px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.sectionDense{padding:64px 0}.hero{padding:70px 0 64px}h1{font-size:38px;line-height:1.06;letter-spacing:-1.2px}h2{font-size:30px;line-height:1.1;letter-spacing:-.7px}h3{font-size:20px}.sectionIntro,.heroCopy .lead{font-size:17px}.buttonRow{display:grid;grid-template-columns:1fr}.btn{width:100%}.heroTrust{font-size:14px;gap:8px 14px}.proofGrid{grid-template-columns:1fr}.proofItem{border-right:0!important;border-bottom:1px solid ${C.border}!important;padding:20px 0}.proofItem:last-child{border-bottom:0!important}.headingGroup{text-align:center;margin-left:auto;margin-right:auto;margin-bottom:36px}.faqSection .headingGroup{text-align:left;margin-left:0;margin-right:0}.faqSection .headingGroup h2{max-width:100%}.headingGroup .sectionIntro{margin-left:auto;margin-right:auto}.editorialRow{grid-template-columns:44px 1fr;gap:14px}.mockBody{grid-template-columns:1fr;padding:16px}.mockArrow{padding:10px 0;transform:rotate(90deg)}.mockFooter{grid-template-columns:1fr}.mockFooter span{border-right:0!important;border-bottom:1px solid #E0E0E4!important}.mockFooter span:last-child{border-bottom:0!important}.mockTop{padding:0 16px}.darkList{margin-top:4px}.darkRow{grid-template-columns:1fr;gap:8px}.timeline{grid-template-columns:1fr}.timelineItem{border-right:0!important;border-bottom:1px solid ${C.border}!important;min-height:auto;padding:24px 0}.timelineItem:last-child{border-bottom:0!important}.safetyList{grid-template-columns:1fr}.safetyList div{border-right:1px solid ${C.border}}.aiGrid{grid-template-columns:1fr}.aiItem{min-height:auto}.dualLinks{display:grid;gap:12px}.connectedRow h3{font-size:19px}.factoryCompare{gap:0}.releaseFlow{grid-template-columns:1fr}.workflowGrid{grid-template-columns:1fr}.industryGrid{grid-template-columns:1fr}.industryItem{min-height:auto}.audienceRow{grid-template-columns:1fr;gap:7px}.qaFlow{grid-template-columns:1fr}.qaStep{border-right:0!important;border-bottom:1px solid #3A3A42!important;min-height:auto}.qaStep:last-child{border-bottom:0!important}.securityGrid{grid-template-columns:1fr}.securityItem{border-right:0!important;border-bottom:1px solid ${C.border}!important}.securityItem:last-child{border-bottom:0!important}.languageGrid{grid-template-columns:1fr}.whyGrid{grid-template-columns:1fr}.relatedRow{grid-template-columns:1fr;gap:8px}.relatedRow .textLink{grid-column:1;justify-self:start;margin-top:4px}.statusLine{align-items:flex-start;flex-wrap:wrap}.statusLine span,.statusLine b{min-width:0}.textLink{min-height:44px;align-items:center}.faqQ{font-size:17px;padding:22px 0}.faqA{padding-right:0}.ctaActions{display:grid;grid-template-columns:1fr;width:100%}.finalCTA{padding:70px 0}.heroArt svg{min-width:0}.robotVisual{min-height:300px;padding:20px}.termHub{position:static;min-height:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding:18px;align-items:stretch}.termCenter{position:static;width:auto;height:auto;min-height:84px;border-radius:18px;grid-column:1/-1}.termNode,.n1,.n2,.n3,.n4,.n5,.n6{position:static;transform:none;min-width:0;width:100%;font-size:14px;padding:12px 8px;display:flex;align-items:center;justify-content:center}}
      @media(max-width:360px){.heroTrust{display:grid;grid-template-columns:1fr;text-align:center}.termHub{grid-template-columns:1fr}.termCenter{grid-column:1}}
    `}</style>

    <section className="hero">
      <div className="shell heroGrid">
        <div className="heroCopy">
          <h1>Industrial Automation Translation Services for Global Deployment</h1>
          <p className="lead">Take industrial automation technologies global with specialized translation and localization for industrial control systems (ICS), HMI and operator interfaces, automation software, IIoT platforms, technical documentation, training, and safety content. Stepes combines technical linguists, terminology control, AI-powered workflows, and professional review to help automation companies deliver clear and consistent multilingual experiences across machines, software, documentation, and global operations.</p>
          <div className="buttonRow">
            <a className="btn btnPrimary" href={links.quote}>Get a Quote</a>
            <a className="btn btnSecondary" href={links.contact}>Talk to an Automation Translation Expert</a>
          </div>
          <div className="heroTrust"><span>100+ Languages</span><span>Technical Linguists</span><span>ISO-Certified Quality</span><span>AI + Human Workflows</span></div>
        </div>
        <AutomationIllustration />
      </div>
    </section>

    <div className="proofBand">
      <div className="shell proofGrid">
        <div className="proofItem"><strong>Controls & HMI</strong><span>Operator-facing automation content</span></div>
        <div className="proofItem"><strong>Software & IIoT</strong><span>Connected industrial applications</span></div>
        <div className="proofItem"><strong>Technical Documentation</strong><span>Engineering through field service</span></div>
        <div className="proofItem"><strong>Continuous Localization</strong><span>Recurring releases and updates</span></div>
      </div>
    </div>

    <section className="section">
      <div className="shell techLayout">
        <div className="stickyIntro">
          <Eyebrow>Automation Technologies</Eyebrow>
          <h2>Translation for the Industrial Automation Stack</h2>
          <p className="sectionIntro">Industrial automation brings together control hardware, software, connected equipment, sensing, operator interfaces, and engineering systems. Stepes helps keep terminology and operating concepts consistent across the systems people use to configure, monitor, operate, and maintain automated equipment.</p>
        </div>
        <div className="editorialRows">
          {techStack.map(([t,d],i)=><div className="editorialRow" key={t}><div className="iconWrap"><Icon type={["chip","screen","network","network","eye","gear"][i]}/></div><div><h3>{t}</h3><p>{d}</p>{i===5?<ArrowLink href={links.software}>Software Localization Services</ArrowLink>:null}</div></div>)}
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="shell hmiGrid">
        <div>
          <SectionHeading responsiveCenter title="Localize HMI and Operator Interfaces Without Losing Operational Clarity" intro="An industrial HMI may communicate important operating information through only a few words. Commands, states, warnings, alarms, variables, values, units, and abbreviations all depend on equipment context, which makes HMI localization fundamentally different from ordinary text translation." />
          <div className="miniRows">
            {hmiItems.map(([t,d])=><div className="miniRow" key={t}><strong>{t}</strong><p>{d}</p></div>)}
          </div>
        </div>
        <HMIMockup />
      </div>
    </section>

    <section className="section dark">
      <div className="shell darkSplit">
        <div className="headingGroup">
          <h2>Industrial Software Localization Built for Complex Control Environments</h2>
          <p className="sectionIntro">Modern automation products increasingly depend on software. Stepes localizes applications used to configure, operate, monitor, diagnose, and maintain automated systems while protecting variables, tags, keys, placeholders, values, and formatting codes.</p>
          <ArrowLink href={links.software} dark>Software Localization Services</ArrowLink>
        </div>
        <div className="darkList">
          {softwareGroups.map(([t,d])=><div className="darkRow" key={t}><strong>{t}</strong><p>{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered eyebrow="Automation Lifecycle" title="Translate Automation Documentation From Engineering Through Operation" intro="Industrial automation content evolves throughout the equipment lifecycle. Stepes helps keep multilingual engineering, installation, operating, service, and modernization content connected from the first release through years of global operation." />
        <div className="timeline">
          {lifecycle.map(([t,d],i)=><div className="timelineItem" key={t}><div className="stepNum">{String(i+1).padStart(2,"0")}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="dualLinks"><ArrowLink href={links.technical}>Technical Translation Services</ArrowLink><ArrowLink href={links.engineering}>Engineering Translation Services</ArrowLink></div>
      </div>
    </section>

    <section className="section blush">
      <div className="shell safetyGrid">
        <div>
          <Eyebrow>Operational Clarity</Eyebrow>
          <h2>Protect Meaning Where Industrial Communication Matters Most</h2>
          <p className="sectionIntro">Industrial equipment communicates information that can affect machine operation, maintenance decisions, troubleshooting, and workplace procedures. Stepes applies structured terminology management, technical linguists, and quality controls to help preserve technical intent and procedural clarity across languages.</p>
          <div className="callout">Translation requirements can be configured according to audience, technical complexity, intended use, and level of risk, with additional professional review and customer approval where appropriate.</div>
        </div>
        <div className="safetyList">
          {["Safety warnings and cautions","Hazard information","Machine operating limits","Emergency procedures","Alarm and fault messages","Lockout/tagout-related instructions","Installation requirements","Maintenance precautions","Protective-equipment instructions","Service procedures","Equipment labels","Operator instructions"].map(x=><div key={x}>{x}</div>)}
        </div>
      </div>
    </section>

    <section className="section dark2">
      <div className="shell">
        <SectionHeading centered dark eyebrow="Industrial AI" title="Translate the Next Generation of AI-Powered Automation" intro="Industrial automation is becoming more intelligent as AI and machine learning connect sensing, analytics, software, control environments, and automated equipment. Stepes supports multilingual content across emerging industrial AI applications while keeping terminology grounded in real automation technologies." />
        <div className="aiGrid">
          {aiItems.map(([t,d],i)=><div className="aiItem" key={t}><div className="iconWrap"><Icon type={i===1?"eye":i===3||i===4?"spark":"chip"}/></div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="dualLinks"><ArrowLink href={links.physicalAI} dark>Physical AI Translation Services</ArrowLink><ArrowLink href={links.aiML} dark>AI & Machine Learning Translation Services</ArrowLink></div>
      </div>
    </section>

    <section className="section">
      <div className="shell roboticsSplit">
        <div>
          <div className="responsiveHeading">
            <h2>Industrial Automation Meets Robotics</h2>
            <p className="sectionIntro">Robotics and industrial automation are increasingly interconnected, but they are not the same localization discipline. Industrial automation focuses on the systems used to control, monitor, coordinate, and connect industrial processes and equipment. Robotics focuses on the robotic platforms and intelligent machines performing physical tasks within those environments.</p>
          </div>
          <div className="checkList">
            {["Industrial robotic cells","Robot-to-machine interfaces","Collaborative robot integration","Automated material handling","Autonomous mobile robot integration","Production-line robotics","Safety and control interfaces","Factory communication systems","Equipment integration documentation"].map(x=><div className="checkLine" key={x}>{x}</div>)}
          </div>
          <p>For the complete robot product lifecycle, including robot software, controllers, perception systems, training, service, deployment, and next-generation robotic platforms, explore our dedicated robotics practice.</p>
          <ArrowLink href={links.robotics}>Robotics Translation Services</ArrowLink>
        </div>
        <div className="robotVisual" aria-hidden="true">
          <svg viewBox="0 0 480 360" fill="none">
            <rect x="44" y="259" width="392" height="18" rx="9" fill="#D8D8DD"/>
            <rect x="76" y="199" width="62" height="60" rx="8" fill="#B4B4BC"/>
            <circle cx="107" cy="186" r="28" fill="#F6EDF1" stroke="#C11D63" strokeWidth="3"/>
            <path d="M107 158v-39l67-28" stroke="#76767F" strokeWidth="18" strokeLinecap="round"/>
            <circle cx="177" cy="90" r="22" fill="#F6EDF1" stroke="#C11D63" strokeWidth="3"/>
            <path d="M196 82l63-29" stroke="#76767F" strokeWidth="16" strokeLinecap="round"/>
            <circle cx="266" cy="49" r="16" fill="#F6EDF1" stroke="#C11D63" strokeWidth="3"/>
            <path d="M277 60l35 44" stroke="#76767F" strokeWidth="13" strokeLinecap="round"/>
            <path d="M311 103l13 30M311 103l28 17" stroke="#76767F" strokeWidth="8" strokeLinecap="round"/>
            <rect x="274" y="171" width="125" height="84" rx="16" fill="#FFFFFF" stroke="#A8A8AF" strokeWidth="2"/>
            <rect x="292" y="190" width="89" height="24" rx="6" fill="#FDF2F7"/>
            <rect x="292" y="226" width="54" height="7" rx="3.5" fill="#92929A"/>
            <path d="M144 188h112" stroke="#9F9FA7" strokeWidth="2" strokeDasharray="5 6"/>
            <circle cx="193" cy="188" r="5" fill="#C11D63"/>
            <circle cx="237" cy="188" r="5" fill="#C11D63"/>
          </svg>
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="shell">
        <SectionHeading centered title="Localization for Connected Industrial Systems" intro="Industrial automation increasingly extends beyond the individual machine. Sensors, controllers, gateways, edge systems, cloud platforms, analytics tools, and remote applications connect equipment across production facilities and enterprise networks." />
        <div className="connectedGrid">
          {connectedSystems.map(([t,d])=><div className="connectedRow" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered title="From Industrial Automation to the Smart Factory" intro="Industrial automation controls and coordinates machines, processes, and production systems. Industry 4.0 connects those plant-floor systems into broader digital manufacturing environments where equipment, software, data, people, and enterprise systems increasingly work together." />
        <div className="factoryCompare">
          <div className="comparePanel"><h3>Industrial Automation</h3><p>Controls, monitors, coordinates, and connects industrial equipment and processes.</p><div className="termCloud"><span>PLC</span><span>HMI</span><span>SCADA</span><span>DCS</span><span>Controls</span><span>Machine Software</span><span>Sensors</span><span>IIoT</span></div></div>
          <div className="compareBridge"><Icon type="arrow" size={34}/></div>
          <div className="comparePanel"><h3>Industry 4.0</h3><p>Connects automation into data-driven, factory-wide digital manufacturing environments.</p><div className="termCloud"><span>Smart Factories</span><span>IT/OT Convergence</span><span>Digital Twins</span><span>Industrial Data</span><span>Connected Production</span><span>Predictive Operations</span></div></div>
        </div>
        <div className="dualLinks"><ArrowLink href={links.industry40}>Industry 4.0 Translation Services</ArrowLink><ArrowLink href={links.manufacturing}>Manufacturing Translation Services</ArrowLink></div>
      </div>
    </section>

    <section className="section blush">
      <div className="shell terminologyGrid">
        <div>
          <div className="responsiveHeading">
            <Eyebrow>Terminology Control</Eyebrow>
            <h2>Keep Automation Terminology Consistent Across Every Touchpoint</h2>
            <p className="sectionIntro">The same technical concept can appear in an operator interface, alarm message, service manual, engineering specification, training course, product website, and field-support system. Stepes builds reusable language assets so approved terms stay aligned throughout the product ecosystem.</p>
          </div>
          <div className="miniRows">
            {["Terminology Management","Translation Memory","Product & Engineering References","Customer Review","Cross-Content Consistency"].map((x,i)=><div className="miniRow" key={x}><strong>{x}</strong><p>{["Build and maintain approved multilingual terminology for equipment, components, functions, controls, operating states, warnings, and alarms.","Reuse previously approved translations across recurring content, documentation updates, product versions, and related assets.","Give linguists screenshots, diagrams, product documentation, engineering comments, existing terminology, and other contextual references.","Capture terminology decisions from engineering, product, regional, distributor, or customer reviewers and carry them into future work.","Align language across HMI, manuals, alarms, training, service, and support rather than translating each asset in isolation."][i]}</p></div>)}
          </div>
          <ArrowLink href={links.terminology}>Terminology Management</ArrowLink>
        </div>
        <div className="termHub" aria-hidden="true"><div className="termCenter">Approved Automation Terminology</div><div className="termNode n1">HMI</div><div className="termNode n2">Manuals</div><div className="termNode n3">Alarms</div><div className="termNode n4">Training</div><div className="termNode n5">Service</div><div className="termNode n6">Support</div></div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered title="Keep Global Automation Content Current With Every Release" intro="Automation products continue to change after launch. Software and firmware evolve, interfaces change, features are added, documentation is revised, and new markets require additional languages. Stepes supports ongoing localization programs that evolve with the product." />
        <div className="releaseFlow">
          {[["New & Modified Content","Translate only what changed while preserving approved content."],["Translation Memory Reuse","Carry validated translations into new product generations and releases."],["Terminology Synchronization","Keep approved product language aligned as features and components evolve."],["Release-Based Workflows","Coordinate UI strings, manuals, release information, service content, and other assets."],["Workflow Automation","Reduce manual handoffs through structured translation and review processes."],["API-Enabled Localization","Connect recurring content to applications, repositories, content platforms, and enterprise systems."]].map(([t,d])=><div className="releaseItem" key={t}><strong>{t}</strong><p>{d}</p></div>)}
        </div>
        <div className="dualLinks"><ArrowLink href={links.continuous}>Continuous Translation</ArrowLink><ArrowLink href={links.api}>Translation API</ArrowLink></div>
      </div>
    </section>

    <section className="section soft">
      <div className="shell">
        <SectionHeading centered title="Match the Translation Workflow to the Content and Risk" intro="A high-visibility HMI warning, an engineering specification, a marketing datasheet, an internal knowledge article, and a recurring software update can require different levels of expertise, review, and automation." />
        <div className="workflowGrid">
          <div className="workflowPanel"><h3>Professional Human Translation</h3><p>Use professional technical linguists for specialized, high-impact, customer-facing, operational, or technically demanding content where human understanding and judgment are central.</p></div>
          <div className="workflowPanel"><h3>AI Translation + Expert Review</h3><p>Accelerate suitable high-volume content with AI-generated translation followed by professional linguistic review, terminology application, and quality assurance.</p></div>
          <div className="workflowPanel"><h3>Continuous AI-Powered Workflows</h3><p>Support rapidly changing software, documentation, support content, and recurring releases with translation memory, terminology, automation, QA, and human review where appropriate.</p></div>
        </div>
        <div className="workflowFooter">The best workflow applies AI, automation, and professional human expertise where each provides the most value.</div>
        <div style={{textAlign:"center"}}><ArrowLink href={links.aiHuman}>AI Translation + Human Review</ArrowLink></div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered title="Industrial Automation Across Global Industries" intro="Automation technology supports production and operations across major industrial sectors. Stepes supports automation vendors as well as the global companies deploying their technologies." />
        <div className="industryGrid">
          {industries.map(([t,d])=><div className="industryItem" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div style={{textAlign:"center",marginTop:26}}><ArrowLink href={links.manufacturing}>Manufacturing Translation Services</ArrowLink></div>
      </div>
    </section>

    <section className="section blush">
      <div className="shell">
        <SectionHeading centered title="Translation Support for the Industrial Automation Ecosystem" intro="Automation technologies move through interconnected networks of equipment vendors, software companies, engineering organizations, system integrators, distributors, manufacturing sites, maintenance teams, and regional operations." />
        <div className="audienceRows">
          {audiences.map(([t,d])=><div className="audienceRow" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section dark">
      <div className="shell">
        <SectionHeading centered dark title="Structured Quality for Complex Industrial Content" intro="Industrial automation translation combines language, engineering terminology, software constraints, operating context, and highly structured technical files. Stepes uses a defined quality process to bring those requirements together." />
        <div className="qaFlow">
          {qaSteps.map(([t,d],i)=><div className="qaStep" key={t}><div className="qaNum">{String(i+1).padStart(2,"0")}</div><h3>{t}</h3><p>{d}</p></div>)}
        </div>
        <div className="dualLinks"><ArrowLink href={links.qa} dark>Translation Quality Assurance</ArrowLink><ArrowLink href={links.iso} dark>ISO-Certified Translation Services</ArrowLink></div>
      </div>
    </section>

    <section className="section soft">
      <div className="shell">
        <SectionHeading centered title="Secure Translation for Industrial Technology" intro="Automation localization may involve proprietary software, engineering specifications, unreleased equipment, machine designs, technical intellectual property, manufacturing processes, customer information, or internal operating procedures." />
        <div className="securityGrid">
          {[["Controlled Access","Limit access to files, projects, reviews, and multilingual content according to approved responsibilities.","lock"],["Confidential Project Handling","Support confidentiality requirements and nondisclosure agreements for sensitive engineering and product information.","shield"],["Secure Workflows","Use structured enterprise processes for file handling, translation, review, approval, and delivery.","network"],["Defined Roles & Approval","Coordinate translators, reviewers, project teams, and customer stakeholders through controlled responsibilities and approval stages.","book"]].map(([t,d,icon])=><div className="securityItem" key={t}><div className="iconWrap"><Icon type={icon}/></div><div><h3>{t}</h3><p>{d}</p></div></div>)}
        </div>
        <div style={{textAlign:"center",marginTop:26}}><ArrowLink href={links.security}>Enterprise Security</ArrowLink></div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered title="Industrial Automation Translation in 100+ Languages" intro="Stepes supports translation and localization across Europe, Asia-Pacific, the Americas, the Middle East, and Africa so global automation products can reach the markets where they are sold, installed, operated, and maintained." />
        <div className="languageGrid">
          <div className="languageCol"><h3>Europe</h3><p>German · French · Italian · Spanish · Dutch · Portuguese · Polish · Czech · Hungarian · Romanian · Swedish · Danish · Finnish · Norwegian · Slovak · Slovenian · Ukrainian</p></div>
          <div className="languageCol"><h3>Asia-Pacific</h3><p>Simplified Chinese · Traditional Chinese · Japanese · Korean · Vietnamese · Thai · Indonesian · Malay · Hindi and additional regional languages</p></div>
          <div className="languageCol"><h3>Americas</h3><p>U.S. English · Latin American Spanish · Brazilian Portuguese · Canadian French and additional regional variants</p></div>
          <div className="languageCol"><h3>Middle East & Africa</h3><p>Arabic · Hebrew · Turkish · Persian and additional regional languages</p></div>
        </div>
        <div style={{textAlign:"center",marginTop:26}}><ArrowLink href={links.languages}>Translation Languages</ArrowLink></div>
      </div>
    </section>

    <section className="section blush">
      <div className="shell">
        <SectionHeading centered title="Why Global Automation Teams Choose Stepes" intro="Industrial automation companies need multilingual content that works across equipment, interfaces, technical teams, software releases, documentation, and international markets." />
        <div className="whyGrid">
          {[["Technical Language Expertise","Professional linguists selected according to engineering, automation, software, manufacturing, and technical subject requirements."],["HMI + Software + Documentation","Coordinate operator interfaces, automation software, manuals, engineering content, training, and service documentation through one multilingual program."],["One Terminology System","Maintain approved product and engineering terminology across software, alarms, technical documentation, training, service information, and support."],["AI + Human Workflows","Use AI and automation where they improve speed and scale while applying professional human expertise where technical understanding and judgment matter."],["Continuous Localization","Support software, firmware, documentation, product variants, and recurring releases without rebuilding the language workflow for every update."],["Enterprise Quality & Security","Configure technical review, quality assurance, access, security, and approval according to project requirements."]].map(([t,d])=><div className="whyItem" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="shell">
        <SectionHeading centered title="Industrial Automation Translation in Practice" intro="Industrial automation translation works best when related content is treated as one connected multilingual system rather than a collection of unrelated files." />
        <div className="practiceGrid">
          {[{
            t:"Global HMI & Machine Launch",
            c:"A machine builder is preparing an equipment platform for multiple international markets. The HMI, operator manual, installation instructions, maintenance documentation, and terminology must remain aligned.",
            a:"Establish shared terminology and translation memory, localize the operator interface with visual context, translate supporting documentation, and reuse approved language across related assets.",
            r:"A more consistent multilingual product experience from the machine screen through operation and maintenance documentation."
          },{
            t:"Continuous Automation Software Localization",
            c:"An industrial software company releases recurring updates to dashboards, configuration tools, diagnostic features, and help content across multiple languages.",
            a:"Separate new and modified content, apply existing translation memory and terminology, route updates through the appropriate AI and human workflow, and carry approved translations into future releases.",
            r:"A repeatable localization process that grows with the product rather than requiring a new workflow for every software release."
          },{
            t:"Multilingual Connected Factory",
            c:"A global manufacturer operates automation systems across several facilities and needs terminology consistency between operator interfaces, SCADA content, maintenance procedures, training, and technical documentation.",
            a:"Create centralized language assets and apply them across multiple automation content types while coordinating review and updates between global and regional teams.",
            r:"A more consistent multilingual operating environment across machines, documentation, and workforce content."
          }].map(x=><div className="practice" key={x.t}><h3>{x.t}</h3><div className="practiceLabel">CHALLENGE</div><p>{x.c}</p><div className="practiceLabel">STEPES APPROACH</div><p>{x.a}</p><div className="practiceLabel">WHAT THIS ENABLES</div><p>{x.r}</p></div>)}
        </div>
      </div>
    </section>


    <section className="section dark2">
      <div className="shell">
        <SectionHeading dark title="Connected Translation Expertise for Intelligent Industry" intro="Industrial automation increasingly connects with robotics, AI, software, digital manufacturing, and intelligent machines. Stepes brings these related language capabilities together while maintaining specialized expertise for each technology domain." />
        <div className="relatedList">
          {related.map(([t,d,u])=><div className="relatedRow" key={t}><h3>{t}</h3><p>{d}</p><ArrowLink href={u} dark>{t.replace(" Services", "")}</ArrowLink></div>)}
        </div>
      </div>
    </section>

    <section className="section soft faqSection">
      <div className="shell">
        <SectionHeading title="Frequently Asked Questions About Industrial Automation Translation" />
        <div className="faqPanel">
          {faqs.map(([q,a],i)=><FAQItem key={q} q={q} a={a} open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?-1:i)}/>)}
        </div>
      </div>
    </section>

    <section className="finalCTA">
      <div className="shell ctaBox">
        <div>
          <h2>Take Your Industrial Automation Technology Global</h2>
          <p className="sectionIntro">From PLC and HMI interfaces to automation software, IIoT platforms, technical manuals, training, service documentation, and evolving product releases, Stepes helps industrial automation companies build one consistent multilingual experience across technologies, users, and global markets.</p>
        </div>
        <div className="ctaActions">
          <a className="btn btnPrimary" href={links.quote}>Get a Quote</a>
          <a className="btn btnSecondary" href={links.contact}>Talk to an Automation Translation Expert</a>
        </div>
      </div>
    </section>
  </div>;
}
