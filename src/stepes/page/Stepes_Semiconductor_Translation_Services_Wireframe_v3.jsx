import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#17171A",
  body: "#3A3A40",
  muted: "#6D6D75",
  line: "#E5E5E9",
  soft: "#F7F7F8",
  dark: "#17171A",
  white: "#FFFFFF",
};

const linkMap = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  technical: "https://www.stepes.com/technical-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  electronics: "https://www.stepes.com/electronics-translation-services/",
  software: "https://www.stepes.com/software-translation-services/",
  patent: "https://www.stepes.com/patent-translation-services/",
  continuous: "https://www.stepes.com/continuous-translation/",
  languages: "https://www.stepes.com/translation-languages/",
};

function Icon({ name, size = 23 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    chip: <><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></>,
    fab: <><path d="M3 20h18M5 20V8l5 3V7l5 3V4h4v16"/><path d="M8 14h2M8 17h2M13 14h2M13 17h2"/></>,
    equipment: <><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="11" r="4"/><path d="M7 18h10M8 7h2"/></>,
    materials: <><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"/><path d="M5 7l7 4 7-4M12 11v10"/></>,
    memory: <><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M7 10h10M7 14h6M5 5v2M9 5v2M13 5v2M17 5v2M5 17v2M9 17v2M13 17v2M17 17v2"/></>,
    package: <><rect x="4" y="6" width="16" height="12" rx="2"/><rect x="8" y="9" width="8" height="6" rx="1"/><path d="M7 3v3M11 3v3M15 3v3M7 18v3M11 18v3M15 18v3"/></>,
    test: <><path d="M4 19h16M6 16V6h12v10"/><path d="M9 11l2 2 4-5"/></>,
    edge: <><path d="M4 7h16v10H4z"/><path d="M8 3v4M16 3v4M8 17v4M16 17v4"/><circle cx="12" cy="12" r="2.5"/></>,
    ai: <><path d="M8 4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4z"/><path d="M9 9h.01M15 9h.01M8.5 14c2.2 1.7 4.8 1.7 7 0"/></>,
    document: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01M8 13l2-2M8 13l2 2M16 11l-2 4"/></>,
    training: <><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M7 10v5c2 2 8 2 10 0v-5M21 8v6"/></>,
    legal: <><path d="M12 3v18M5 6h14M7 6l-3 6h6L7 6zM17 6l-3 6h6l-3-6zM8 21h8"/></>,
    secure: <><path d="M12 3l7 3v5c0 4.7-2.9 8.1-7 10-4.1-1.9-7-5.3-7-10V6l7-3z"/><path d="M9.5 12l1.7 1.7 3.6-4"/></>,
    quality: <><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></>,
    global: <><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3c2.5 2.4 3.7 5.4 3.7 9S14.5 18.6 12 21M12 3C9.5 5.4 8.3 8.4 8.3 12S9.5 18.6 12 21"/></>,
    glossary: <><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h5M8 16h7"/></>,
    refresh: <><path d="M20 7v5h-5M4 17v-5h5"/><path d="M18.2 10A7 7 0 006.6 6.6L4 9M5.8 14A7 7 0 0017.4 17.4L20 15"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
  };
  return <svg {...common}>{paths[name] || paths.chip}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow--dark" : ""}`}>{children}</div>;
}

function ArrowLink({ href, children, light = false }) {
  return (
    <a className={`editorialLink${light ? " editorialLink--light" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={17} />
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual" role="img" aria-label="Semiconductor manufacturing ecosystem illustration">
      <svg viewBox="0 0 620 520" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="chipFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FDF2F7"/>
            <stop offset="1" stopColor="#F5E8EE"/>
          </linearGradient>
        </defs>
        <rect x="62" y="86" width="382" height="298" rx="38" fill="#F8F8F9" stroke="#CFCFD4" strokeWidth="2"/>
        <path d="M78 116h130M78 352h94M410 112v98M410 284v68" stroke="#AFAFB7" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="200" cy="236" r="110" fill="#FFFFFF" stroke="#B8B8C0" strokeWidth="2"/>
        <circle cx="200" cy="236" r="88" fill="none" stroke="#D0D0D6" strokeWidth="1.5"/>
        <path d="M112 236h176M200 126v220M132 166l136 140M132 306l136-140" stroke="#D5D5DA" strokeWidth="1.2"/>
        <g fill="url(#chipFill)" stroke="#A71954" strokeWidth="2">
          <rect x="244" y="204" width="116" height="92" rx="12"/>
          <rect x="263" y="223" width="78" height="54" rx="7"/>
        </g>
        <g stroke="#7B7B84" strokeWidth="2" strokeLinecap="round">
          <path d="M258 197v-17M280 197v-17M302 197v-17M324 197v-17M346 197v-17"/>
          <path d="M258 303v17M280 303v17M302 303v17M324 303v17M346 303v17"/>
          <path d="M237 218h-17M237 240h-17M237 262h-17M237 284h-17"/>
          <path d="M367 218h17M367 240h17M367 262h17M367 284h17"/>
        </g>
        <g transform="translate(420 218)">
          <rect width="138" height="134" rx="20" fill="#FFFFFF" stroke="#B9B9C1" strokeWidth="2"/>
          <rect x="25" y="27" width="88" height="18" rx="4" fill="#FDF2F7" stroke="#A71954" strokeWidth="1.8"/>
          <rect x="25" y="53" width="88" height="18" rx="4" fill="#FFFFFF" stroke="#96969F" strokeWidth="1.8"/>
          <rect x="25" y="79" width="88" height="18" rx="4" fill="#FFFFFF" stroke="#96969F" strokeWidth="1.8"/>
          <path d="M43 107h52" stroke="#96969F" strokeWidth="2" strokeLinecap="round"/>
        </g>
        <g transform="translate(396 74)">
          <rect width="164" height="114" rx="18" fill="#FFFFFF" stroke="#B9B9C1" strokeWidth="2"/>
          <rect x="22" y="22" width="120" height="49" rx="9" fill="#F8F8F9" stroke="#96969F" strokeWidth="1.8"/>
          <circle cx="82" cy="46" r="17" fill="none" stroke="#A71954" strokeWidth="2"/>
          <path d="M22 84h120" stroke="#96969F" strokeWidth="2"/>
          <path d="M49 92h66" stroke="#C6C6CD" strokeWidth="2" strokeLinecap="round"/>
        </g>
        <path d="M360 248h54M474 188v24M444 384v-27" stroke="#A71954" strokeWidth="2" strokeDasharray="5 7" strokeLinecap="round"/>
        <circle cx="414" cy="248" r="4" fill="#A71954"/>
        <circle cx="474" cy="212" r="4" fill="#A71954"/>
        <circle cx="444" cy="357" r="4" fill="#A71954"/>
      </svg>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="aiVisual" aria-hidden="true">
      <svg viewBox="0 0 520 360">
        <rect x="36" y="46" width="448" height="268" rx="30" fill="#202024" stroke="#55555D" strokeWidth="2"/>
        <rect x="106" y="94" width="208" height="172" rx="22" fill="#29292F" stroke="#777781" strokeWidth="2"/>
        <rect x="139" y="124" width="142" height="112" rx="14" fill="#351924" stroke="#F2A7C6" strokeWidth="2"/>
        <path d="M162 181h96M210 145v72" stroke="#F2A7C6" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
        <g>
          {[0,1,2,3].map((i) => <rect key={i} x="338" y={98+i*39} width="76" height="25" rx="6" fill="#29292F" stroke="#AFAFB8" strokeWidth="1.5"/>)}
        </g>
        <path d="M315 155h22M315 180h22M315 205h22" stroke="#F2A7C6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M86 287h344" stroke="#55555D" strokeWidth="2"/>
        <path d="M109 75h105M347 75h62" stroke="#777781" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function EquipmentVisual() {
  return (
    <div className="equipmentVisual" aria-hidden="true">
      <svg viewBox="0 0 380 520">
        <rect x="54" y="36" width="272" height="446" rx="24" fill="#FAFAFB" stroke="#B9B9C1" strokeWidth="2"/>
        <rect x="88" y="72" width="204" height="112" rx="14" fill="#FFFFFF" stroke="#A0A0A8" strokeWidth="2"/>
        <circle cx="190" cy="128" r="42" fill="none" stroke="#A71954" strokeWidth="2"/>
        <circle cx="190" cy="128" r="25" fill="none" stroke="#C7C7CE" strokeWidth="1.6"/>
        <rect x="88" y="210" width="204" height="116" rx="14" fill="#FFFFFF" stroke="#A0A0A8" strokeWidth="2"/>
        <path d="M116 241h150M116 266h106M116 292h132" stroke="#B2B2BA" strokeWidth="2" strokeLinecap="round"/>
        <rect x="88" y="351" width="204" height="83" rx="14" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2"/>
        <path d="M116 380h70M116 405h126" stroke="#A71954" strokeWidth="2" strokeLinecap="round"/>
        <path d="M70 458h240" stroke="#B9B9C1" strokeWidth="2"/>
        <path d="M118 482v-24M262 482v-24" stroke="#8D8D96" strokeWidth="3"/>
      </svg>
    </div>
  );
}

const valueChain = [
  { icon: "chip", title: "Semiconductor Design", text: "Fabless semiconductor companies, design organizations, and EDA providers working across ASICs, SoCs, CPUs, GPUs, NPUs, microcontrollers, analog and mixed-signal devices, power semiconductors, connectivity products, sensors, and custom silicon." },
  { icon: "fab", title: "Foundries & Wafer Fabrication", text: "Fab operations, process technologies, manufacturing procedures, equipment content, production engineering, quality materials, and workforce training." },
  { icon: "equipment", title: "Semiconductor Equipment", text: "Lithography, deposition, etch, cleaning, inspection, metrology, process control, wafer handling, automation, assembly, packaging, and test systems." },
  { icon: "materials", title: "Semiconductor Materials", text: "Silicon wafers, substrates, process gases, specialty chemicals, photoresists, electronic materials, packaging materials, and other critical manufacturing inputs." },
  { icon: "memory", title: "Memory & Storage", text: "DRAM, NAND flash, high-bandwidth memory, memory controllers, storage technologies, and related semiconductor architectures." },
  { icon: "package", title: "Advanced Packaging", text: "Chiplets, heterogeneous integration, interposers, advanced substrates, 2.5D and 3D packaging, thermal technologies, assembly, and package testing." },
  { icon: "test", title: "Assembly & Test", text: "OSAT operations, packaging lines, production inspection, reliability testing, automated test equipment, quality systems, and manufacturing training." },
  { icon: "edge", title: "Embedded & Edge Semiconductor", text: "Automotive electronics, robotics, industrial automation, medical technology, IoT, smart devices, communications, and edge AI applications." },
];

const aiBlocks = [
  { title: "AI Accelerators & High-Performance Compute", text: "Translate engineering, product, developer, manufacturing, and customer content for GPUs, AI accelerators, NPUs, custom ASICs, high-performance computing processors, and specialized silicon architectures." },
  { title: "High-Bandwidth Memory & Advanced Memory", text: "Support HBM, DRAM, NAND, memory interfaces, advanced memory architectures, manufacturing technologies, equipment documentation, specifications, and related technical content." },
  { title: "Advanced Packaging & Chiplets", text: "Localize content for chiplets, heterogeneous integration, advanced substrates, interposers, multi-die architectures, 2.5D and 3D integration, thermal management, assembly, inspection, reliability, and package testing." },
  { title: "AI Infrastructure & Edge Computing", text: "Support semiconductor content for data-center compute, high-speed networking, interconnect technologies, storage, communications, robotics, automotive AI, industrial systems, and intelligent edge devices." },
];

const equipmentGroups = [
  { title: "Installation & Commissioning", items: ["Installation manuals", "Site and facility requirements", "Setup and commissioning procedures", "Calibration and qualification materials"] },
  { title: "Equipment Operation", items: ["Operator manuals and procedures", "HMI content and equipment software", "System messages, alarms, and notifications", "Production workflows"] },
  { title: "Maintenance & Field Service", items: ["Preventive maintenance procedures", "Service and troubleshooting manuals", "Parts and repair documentation", "Technical bulletins and field-service content"] },
  { title: "Safety & Compliance Content", items: ["Equipment warnings and safety instructions", "Lockout and service procedures", "Hazard information and safety labels", "Operational and compliance-related documentation"] },
  { title: "Technical Training", items: ["Operator and technician training", "Service courses and eLearning", "Standard operating procedures", "Technical videos and knowledge assessments"] },
];

const contentGroups = [
  { icon: "document", title: "Engineering & Product Documentation", text: "Technical specifications, datasheets, application notes, design guides, reference documentation, engineering reports, white papers, product documentation, presentations, and test content." },
  { icon: "fab", title: "Manufacturing & Quality Content", text: "SOPs, work instructions, process documentation, production procedures, quality manuals, inspection procedures, test methods, audit materials, supplier requirements, and manufacturing training." },
  { icon: "equipment", title: "Equipment & Service Documentation", text: "Installation, operator, maintenance, and service manuals, troubleshooting guides, parts catalogs, technical bulletins, calibration procedures, and field-service materials." },
  { icon: "software", title: "Software & Digital Content", text: "Equipment software, HMIs, embedded interfaces, engineering applications, customer portals, developer documentation, help content, error messages, knowledge bases, and release documentation." },
  { icon: "training", title: "Training, Sales & Customer Content", text: "Product training, technical eLearning, sales enablement, product websites, technical marketing, presentations, demonstrations, customer education, video, and support materials." },
  { icon: "legal", title: "Legal & Intellectual Property Content", text: "Patents, licensing agreements, technology-transfer agreements, supplier and R&D agreements, confidentiality agreements, IP documentation, and compliance-related materials." },
];

const continuousItems = [
  { title: "Reuse Approved Translations", text: "Leverage validated content from previous document and product versions instead of retranslating unchanged information." },
  { title: "Maintain Terminology Across Releases", text: "Apply approved semiconductor, product, process, and equipment terminology consistently as new content enters the workflow." },
  { title: "Translate Only What Changes", text: "Translation memory and content comparison help identify new and modified material so review can focus on content that actually changed." },
  { title: "Carry Feedback Forward", text: "Customer corrections and terminology decisions can feed translation memory and glossaries, improving future releases instead of remaining isolated in individual projects." },
  { title: "Connect Recurring Content Workflows", text: "For organizations publishing content frequently, Stepes can support automated and continuous translation processes that connect multilingual production more closely to existing content operations." },
];

const globalOps = [
  ["Engineering Collaboration", "Maintain clear technical communication across international R&D, process engineering, manufacturing, product, and support teams."],
  ["Fab Operations", "Translate production procedures, equipment documentation, quality content, training, and operational information for multilingual manufacturing environments."],
  ["Equipment Deployment", "Support installation, commissioning, operation, maintenance, software, and field service across customer facilities worldwide."],
  ["Supplier & Partner Networks", "Translate supplier requirements, quality documentation, technical specifications, procurement materials, and operational communications."],
  ["Workforce Training", "Give operators, engineers, technicians, and service professionals access to clear multilingual procedures and training."],
  ["Customer Support", "Keep technical documentation, troubleshooting information, knowledge bases, training, and support materials aligned across languages."],
];

const qualitySteps = [
  ["Content & Technical Assessment", "Evaluate subject matter, audience, intended use, complexity, file format, terminology, available language assets, and required review level."],
  ["Terminology & Language Preparation", "Import approved glossaries and translation memories, identify recurring terms, resolve abbreviations, and prepare product-specific linguistic guidance."],
  ["Specialized Translation", "Assign qualified language professionals and apply the appropriate combination of human translation, translation memory, AI assistance, and file engineering."],
  ["Professional Review & QA", "Review linguistic accuracy, technical terminology, completeness, numbers, units, software variables, tags, formatting, consistency, and content-specific requirements."],
  ["Customer Feedback & Finalization", "Support engineering, product, quality, or in-country review when needed and carry approved decisions into terminology and translation memory."],
];

const applications = [
  ["AI & Data Centers", "AI processors, accelerators, advanced memory, high-performance computing, networking, storage, and data-center semiconductor technologies."],
  ["Automotive & Mobility", "ADAS, electric vehicles, infotainment, connectivity, power management, sensors, vehicle computing, and automotive electronic systems."],
  ["Robotics & Automation", "Processors, sensors, controllers, machine vision, embedded computing, motion systems, industrial AI, and intelligent machines."],
  ["Industrial Electronics", "Control systems, power electronics, automation, instrumentation, sensors, embedded platforms, and connected industrial equipment."],
  ["Medical Technology", "Semiconductor technologies used in diagnostics, imaging, monitoring equipment, connected devices, laboratory systems, and advanced medical technologies."],
  ["Consumer & Smart Devices", "Mobile devices, wearables, connected products, smart-home systems, personal electronics, and other digital experiences."],
];

const whyStepes = [
  ["Semiconductor Subject-Matter Expertise", "Professional linguists selected for relevant technical experience in semiconductors, electronics, engineering, manufacturing, equipment, software, and related disciplines."],
  ["AI + Human Scalability", "Modern AI translation technology combined with professional human expertise for demanding technical content and large multilingual programs."],
  ["Controlled Terminology", "Semiconductor, product, process, equipment, and customer terminology maintained across documents, languages, product families, and revisions."],
  ["Complete Technical Content Coverage", "Engineering documentation, manufacturing procedures, equipment manuals, software, training, patents, marketing content, and customer support materials."],
  ["100+ Languages", "Support for engineering organizations, fabs, suppliers, equipment installations, service networks, business teams, and customers across global markets."],
  ["Enterprise Quality Processes", "Structured QA, professional review, reusable language assets, and secure workflows for consistent multilingual content at scale."],
];

const relatedServices = [
  ["Technical Translation Services", "Complex engineering specifications, manuals, technical documentation, and product information with specialized linguists and terminology controls.", linkMap.technical],
  ["Manufacturing Translation Services", "Multilingual engineering, production, safety, quality, training, software, and operational content across global manufacturing environments.", linkMap.manufacturing],
  ["Electronics Translation Services", "Product, technical, software, training, and customer content for the broader electronics industry.", linkMap.electronics],
  ["Software Translation Services", "Equipment software, embedded interfaces, engineering applications, help content, software strings, and digital product experiences.", linkMap.software],
  ["Patent Translation Services", "Semiconductor patents and related intellectual property content with workflows built around technical and legal precision.", linkMap.patent],
  ["Continuous Translation Services", "Scalable workflows for frequently updated technical, product, software, support, and enterprise content.", linkMap.continuous],
];

const faqs = [
  ["What are semiconductor translation services?", "Semiconductor translation services cover multilingual content used throughout semiconductor design, manufacturing, equipment, packaging, testing, software, sales, and customer support. This may include datasheets, specifications, application notes, manufacturing procedures, semiconductor equipment manuals, software interfaces, training, technical marketing, patents, and other specialized documentation. Effective semiconductor translation requires professional language expertise and familiarity with the terminology used across chip design, wafer fabrication, equipment, memory, packaging, test, and semiconductor applications."],
  ["What types of semiconductor documents can Stepes translate?", "Stepes translates engineering specifications, datasheets, application notes, technical manuals, SOPs, work instructions, manufacturing procedures, quality documentation, equipment manuals, maintenance procedures, software interfaces, training materials, websites, product marketing, patents, and other semiconductor content. We can also support structured files, recurring documentation programs, multilingual software, and content that requires terminology management or translation-memory reuse."],
  ["Does Stepes provide translators with semiconductor expertise?", "Yes. Stepes matches projects with professional linguists based on language, content type, technical field, and quality requirements. Depending on the project, relevant expertise may include semiconductor engineering, electronics, electrical engineering, manufacturing equipment, materials, software, automation, technical documentation, patents, or related disciplines. Terminology resources, translation memory, customer references, and technical instructions can also be incorporated into the workflow."],
  ["Can Stepes translate semiconductor manufacturing equipment manuals and software?", "Yes. Stepes translates installation manuals, operator guides, maintenance procedures, service documentation, troubleshooting guides, HMIs, equipment software, error messages, training, and other content used throughout the semiconductor equipment lifecycle. These services can be coordinated across documents, software, terminology, and recurring equipment updates to improve multilingual consistency."],
  ["How does Stepes maintain consistent semiconductor terminology?", "Stepes uses terminology databases, customer glossaries, translation memory, approved previous translations, reviewer feedback, and project-specific language instructions. These resources can capture device names, process terminology, equipment terms, abbreviations, product names, preferred translations, and other customer-specific requirements, then carry approved terminology forward across related documents, languages, and future updates."],
  ["Does Stepes use AI for semiconductor translation?", "Yes. Stepes combines AI with translation memory, terminology, professional linguists, and automated quality controls according to the content's technical complexity, intended use, and quality requirements. AI-assisted translation can improve speed and scalability for large or frequently updated content streams, while professional human review remains especially important for complex engineering information, safety-sensitive documentation, patents, intellectual property, and other decision-critical content."],
  ["Can Stepes support ongoing semiconductor documentation updates?", "Yes. Translation memory, terminology management, continuous localization, and reusable language assets allow Stepes to support frequently changing semiconductor documentation efficiently. When a specification, equipment manual, software release, manufacturing procedure, or training program is updated, previously approved content can be evaluated for reuse while new and modified content receives appropriate translation and review."],
  ["What languages does Stepes support for semiconductor translation?", "Stepes provides semiconductor translation services in more than 100 languages and regional variants, including major semiconductor markets across Asia-Pacific, Europe, the Americas, the Middle East, and other global regions. Common languages include Simplified and Traditional Chinese, Japanese, Korean, German, French, Spanish, Italian, Portuguese, Vietnamese, Thai, Malay, Dutch, Polish, Czech, and many others."],
  ["Does Stepes provide semiconductor patent translation?", "Yes. Stepes translates semiconductor patent applications, claims, specifications, prior art, prosecution materials, licensing documents, and related intellectual property content. Patent translation workflows can be matched to the technical subject and intended use, with specialist translation, terminology control, professional review, and quality assurance applied as appropriate."],
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page">
      <style>{styles}</style>

      <section className="hero section">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1>Semiconductor Translation Services for Global Chip Manufacturing</h1>
            <p className="heroLead">Translate technical, manufacturing, software, training, and commercial content across the global semiconductor ecosystem. Stepes combines semiconductor subject-matter expertise, controlled terminology, and secure AI + human translation workflows to help fabless chip companies, integrated device manufacturers (IDMs), foundries, equipment manufacturers, and suppliers communicate accurately across languages.</p>
            <div className="heroActions">
              <a className="btn btnPrimary" href={linkMap.quote}>Get a Quote</a>
              <a className="btn btnSecondary" href={linkMap.contact}>Talk to a Semiconductor Translation Expert</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="proofBand" aria-label="Semiconductor translation capabilities">
        <div className="shell proofGrid">
          <div><strong>Semiconductor Expertise</strong><span>Technical linguists matched to specialized content</span></div>
          <div><strong>100+ Languages</strong><span>Support across global engineering and manufacturing markets</span></div>
          <div><strong>AI + Human Workflows</strong><span>Scalable translation with professional oversight</span></div>
          <div><strong>ISO-Certified Quality Processes</strong><span>Structured QA, terminology control, and accountable delivery</span></div>
        </div>
      </section>

      <section className="section overviewSection">
        <div className="shell editorialSplit">
          <div className="sectionHeading stickyHeading">
            <h2>Semiconductor Translation Built for a Global Industry</h2>
          </div>
          <div className="editorialBody">
            <p className="bodyLarge">Modern semiconductor products are developed and manufactured across highly interconnected global ecosystems. Chip architecture and design, wafer fabrication, manufacturing equipment, materials, advanced packaging, assembly, testing, software, and customer support may involve teams and suppliers across multiple countries and languages.</p>
            <p>Stepes provides specialized semiconductor translation services that connect these operations with accurate, consistent multilingual content. We help semiconductor companies translate engineering documentation, manufacturing procedures, equipment manuals, software interfaces, training programs, intellectual property, and customer-facing materials throughout the product lifecycle.</p>
            <p>Whether you are developing a new AI accelerator, installing wafer-processing equipment at an overseas fab, introducing a new memory product, expanding an OSAT program, or maintaining technical documentation across multiple product generations, Stepes provides the language expertise and translation technology needed to scale globally.</p>
            <div className="inlineNote"><Icon name="global"/><span>Professional technical linguists, terminology management, translation memory, AI-assisted workflows, structured quality assurance, and multilingual file engineering can be coordinated in one process.</span></div>
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="centerHeading">
            <h2>Translation Across the Semiconductor Value Chain</h2>
            <p>Semiconductor translation requires more than familiarity with electronics. Stepes aligns linguistic expertise, terminology, and quality workflows with each client’s technologies and operations.</p>
          </div>
          <div className="valueChainGrid">
            {valueChain.map((item) => (
              <article className="valueItem" key={item.title}>
                <div className="iconBox"><Icon name={item.icon}/></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section aiSection">
        <div className="shell aiGrid">
          <div>
            <Eyebrow dark>AI HARDWARE & ADVANCED COMPUTE</Eyebrow>
            <h2>Translation for the AI Semiconductor Era</h2>
            <p className="darkLead">Artificial intelligence is transforming the semiconductor industry from chip architecture and advanced memory to packaging, networking, data-center infrastructure, and manufacturing technology.</p>
            <p>As semiconductor companies develop increasingly powerful and complex hardware, their multilingual content must keep pace with shorter innovation cycles, distributed engineering teams, expanding manufacturing capacity, and global customers.</p>
            <AIVisual />
          </div>
          <div className="aiList">
            {aiBlocks.map((item) => (
              <article className="aiRow" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section equipmentSection">
        <div className="shell equipmentGrid">
          <div className="equipmentVisualWrap">
            <EquipmentVisual />
          </div>
          <div>
            <Eyebrow>SEMICONDUCTOR EQUIPMENT LIFECYCLE</Eyebrow>
            <h2>Translation for Semiconductor Manufacturing Equipment</h2>
            <p className="bodyLarge">Semiconductor equipment combines advanced mechanical, electrical, optical, chemical, vacuum, automation, software, and process-control technologies. Accurate multilingual documentation is essential when these systems are installed, operated, maintained, and serviced across global fabrication facilities.</p>
            <div className="equipmentRows">
              {equipmentGroups.map((group) => (
                <article className="equipmentRow" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <div className="centerHeading">
            <h2>Semiconductor Content, From Engineering to Customer Delivery</h2>
            <p>Stepes provides one translation solution for specialized content across R&D, production, equipment, quality, software, training, sales, customer support, and intellectual property.</p>
          </div>
          <div className="contentGrid">
            {contentGroups.map((item) => (
              <article className="contentItem" key={item.title}>
                <div className="contentIcon"><Icon name={item.icon}/></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <div className="contextLinks">
            <ArrowLink href={linkMap.technical}>Technical Translation Services</ArrowLink>
            <ArrowLink href={linkMap.manufacturing}>Manufacturing Translation Services</ArrowLink>
            <ArrowLink href={linkMap.software}>Software Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section terminologySection">
        <div className="shell terminologyGrid">
          <div className="sectionHeading">
            <Eyebrow>TERMINOLOGY & LANGUAGE ASSETS</Eyebrow>
            <h2>Precision Terminology for Semiconductor Technologies</h2>
            <p className="bodyLarge">Semiconductor content spans device physics, electrical engineering, chemistry, materials science, manufacturing processes, software, packaging, equipment, and quality systems. Translation quality depends on disciplined terminology control as much as linguistic fluency.</p>
          </div>
          <div className="terminologyPanel">
            <div className="termTop">
              <div className="iconBox iconBoxStrong"><Icon name="glossary"/></div>
              <div><h3>Semiconductor Terminology Management</h3><p>Customer glossaries can capture device and component terminology, process and fabrication terms, equipment vocabulary, packaging and test terms, memory and compute terminology, product names, abbreviations, approved translations, preferred wording, and prohibited variants.</p></div>
            </div>
            <div className="termColumns">
              <div><h3>Translation Memory Across Product Families</h3><p>Previously translated material can be leveraged across related products, equipment generations, document revisions, software releases, and technical updates while new or changed content receives the review appropriate to its purpose.</p></div>
              <div><h3>Reusable Multilingual Knowledge</h3><p>Terminology decisions, approved translations, reviewer feedback, and recurring technical content become language assets that can carry forward across teams, technologies, languages, and product generations.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section aiHumanSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>AI + Human Translation for Semiconductor Content</h2>
            <p>Semiconductor content varies in technical complexity, business impact, audience, and risk. Stepes applies the right combination of AI, translation memory, terminology, professional linguists, technical review, and automated quality controls according to the content.</p>
          </div>
          <div className="workflowModes">
            <article>
              <span className="modeLabel">Higher-Complexity Content</span>
              <h3>Expert-Led Technical Translation</h3>
              <p>Professional translators and reviewers with relevant technical expertise for novel, sensitive, customer-facing, technically complex, or higher-risk content.</p>
              <ul><li>Engineering documentation</li><li>Product specifications</li><li>Safety-sensitive instructions</li><li>Equipment manuals</li><li>Patents and IP materials</li></ul>
            </article>
            <article>
              <span className="modeLabel">High-Volume Content</span>
              <h3>AI-Assisted Translation With Professional Review</h3>
              <p>AI can accelerate large translation volumes while linguists verify terminology, meaning, context, clarity, and technical intent.</p>
              <ul><li>Large documentation programs</li><li>Recurring technical content</li><li>Training materials</li><li>Support content</li><li>Frequently updated documentation</li></ul>
            </article>
            <article>
              <span className="modeLabel">Reusable Language Assets</span>
              <h3>Translation Memory, Terminology & Automated QA</h3>
              <p>Approved translations and governed terminology can improve consistency while automated checks help identify potential issues.</p>
              <ul><li>Numbers and units</li><li>Tags and variables</li><li>Missing content</li><li>Terminology consistency</li><li>Formatting and repeated content</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section continuousSection">
        <div className="shell editorialSplit">
          <div className="sectionHeading">
            <h2>Built for Continuous Semiconductor Content</h2>
            <p className="bodyLarge">Semiconductor documentation rarely remains static. Specifications, firmware, manufacturing processes, equipment functionality, device families, service procedures, and training materials evolve throughout the product lifecycle.</p>
            <ArrowLink href={linkMap.continuous}>Continuous Translation Services</ArrowLink>
          </div>
          <div className="continuousGrid">
            {continuousItems.map((item) => (
              <article key={item.title}><Icon name="refresh"/><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft globalSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Supporting Global Semiconductor Manufacturing</h2>
            <p>Semiconductor production depends on tightly coordinated networks of engineering organizations, fabs, equipment manufacturers, materials suppliers, assembly and packaging partners, test operations, service organizations, and customers.</p>
          </div>
          <div className="globalRows">
            {globalOps.map(([title, text]) => (
              <article key={title}><div className="iconBox"><Icon name="global"/></div><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section securitySection">
        <div className="shell securityGrid">
          <div className="securityIntro">
            <Eyebrow dark>SECURE ENTERPRISE WORKFLOWS</Eyebrow>
            <h2>Secure Translation for Sensitive Semiconductor Content</h2>
            <p>Semiconductor organizations routinely work with confidential engineering information, unreleased products, proprietary manufacturing processes, supplier data, intellectual property, and commercially sensitive documentation.</p>
            <p>Stepes provides structured enterprise translation workflows designed to support both technical accuracy and responsible information handling.</p>
          </div>
          <div className="securityMatrix">
            <div><Icon name="secure"/><h3>Sensitive Content</h3><p>Unreleased product documentation, engineering specifications, manufacturing procedures, process information, equipment configurations, R&D materials, supplier documentation, patents, and proprietary terminology.</p></div>
            <div><Icon name="quality"/><h3>Controlled Translation Workflows</h3><p>Project access, linguistic resources, customer instructions, terminology, and review processes can be managed within structured workflows to support consistent handling of multilingual information.</p></div>
          </div>
        </div>
      </section>

      <section className="section qualitySection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Quality Built for Technical Accuracy</h2>
            <p>Technical accuracy is not created by a final proofreading step. It depends on selecting the right expertise, establishing terminology, preserving technical structure, applying appropriate review, and carrying approved decisions into future work.</p>
          </div>
          <div className="qualityFlow">
            {qualitySteps.map(([title, text], index) => (
              <article key={title}>
                <div className="stepNo">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="qualityNote">Stepes' ISO-certified quality processes provide a consistent framework while allowing each semiconductor program to apply the level of review appropriate to its content.</p>
        </div>
      </section>

      <section className="section sectionSoft applicationsSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Semiconductor Translation Across Advanced Applications</h2>
            <p>Semiconductor innovation powers products and infrastructure across nearly every advanced technology sector. Stepes supports semiconductor companies and their customers with specialized multilingual content across diverse applications.</p>
          </div>
          <div className="applicationsGrid">
            {applications.map(([title, text], i) => (
              <article key={title}><div className="applicationMarker"><Icon name={i === 0 ? "ai" : i === 1 ? "chip" : i === 2 ? "edge" : i === 3 ? "equipment" : i === 4 ? "quality" : "software"}/></div><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section patentSection">
        <div className="shell">
          <div className="patentBand">
            <div className="patentCopy">
              <h2>Semiconductor Patent Translation</h2>
              <p>Semiconductor innovation frequently combines complex engineering with valuable intellectual property. Stepes provides specialized patent translation for integrated circuits, processor architectures, memory technologies, wafer fabrication, semiconductor equipment, advanced packaging, power semiconductors, materials, assembly, and test technologies.</p>
              <p>We support patent applications, claims, specifications, prior art, prosecution materials, licensing documentation, and related IP content with workflows matched to the intended use of the document.</p>
            </div>
            <div className="patentAction"><Icon name="legal" size={32}/><ArrowLink href={linkMap.patent}>Explore Patent Translation Services</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section languagesSection">
        <div className="shell">
          <div className="centerHeading">
            <h2>Semiconductor Translation in 100+ Languages</h2>
            <p>Support engineering centers, manufacturing regions, supplier networks, equipment installations, service organizations, and customer markets with professional semiconductor translation across major global languages and regional variants.</p>
          </div>
          <div className="languageColumns">
            <article><h3>Asia-Pacific</h3><p>Simplified Chinese · Traditional Chinese · Japanese · Korean · Vietnamese · Thai · Malay · Indonesian · and more</p></article>
            <article><h3>Europe</h3><p>German · French · Italian · Spanish · Dutch · Polish · Czech · Portuguese · Swedish · and more</p></article>
            <article><h3>Americas</h3><p>U.S. English · Latin American Spanish · Brazilian Portuguese · Canadian French · and additional regional requirements</p></article>
          </div>
          <div className="centerLink"><ArrowLink href={linkMap.languages}>Explore All Translation Languages</ArrowLink></div>
        </div>
      </section>

      <section className="section whySection">
        <div className="shell">
          <div className="centerHeading"><h2>Why Semiconductor Companies Choose Stepes</h2></div>
          <div className="whyGrid">
            {whyStepes.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section relatedSection sectionSoft">
        <div className="shell relatedGrid">
          <div className="sectionHeading"><Eyebrow>RELATED SERVICES</Eyebrow><h2>Build a Connected Semiconductor Localization Program</h2><p className="bodyLarge">Semiconductor localization often spans multiple content types and business functions. Explore related Stepes services for broader technical and multilingual requirements.</p></div>
          <div className="relatedRows">
            {relatedServices.map(([title, text, href]) => (
              <article key={title}><div><h3>{title}</h3><p>{text}</p></div><ArrowLink href={href}>{title}</ArrowLink></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="shell faqLayout">
          <div className="sectionHeading faqHeading">
            <h2>Semiconductor Translation Services FAQs</h2>
            <p className="bodyLarge">Answers to common questions about semiconductor expertise, technical content, AI workflows, terminology, equipment documentation, ongoing updates, languages, and patents.</p>
          </div>
          <div className="faqPanel">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <div className="faqItem" key={question}>
                  <button className="faqQuestion" onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open} aria-controls={`faq-panel-${index}`}>
                    <span>{question}</span><span className="faqPlus" aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open && <div className="faqAnswer" id={`faq-panel-${index}`}><p>{answer}</p></div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section finalSection">
        <div className="shell">
          <div className="finalCta">
            <div>
              <h2>Take Your Semiconductor Content Global</h2>
              <p>From a single technical document to a continuous multilingual semiconductor program, Stepes helps chip companies, foundries, equipment manufacturers, suppliers, and technology organizations communicate accurately across global engineering, manufacturing, service, and customer operations.</p>
            </div>
            <div className="finalActions">
              <a className="btn btnPrimary" href={linkMap.quote}>Get a Quote</a>
              <a className="btn btnSecondary" href={linkMap.contact}>Talk to a Semiconductor Translation Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #fff; color: ${COLORS.ink}; }
  .page { font-family: "Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: ${COLORS.ink}; overflow-x: hidden; }
  .page h1, .page h2, .page h3, .page p, .page li, .page a, .page span { overflow-wrap: break-word; }
  .page svg { max-width: 100%; }
  .shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding: 96px 0; }
  .sectionSoft { background: ${COLORS.soft}; }
  h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: ${COLORS.ink}; }
  h1 { font-size: 48px; line-height: 1.06; max-width: 720px; }
  h2 { font-size: 36px; line-height: 1.12; }
  h3 { font-size: 24px; line-height: 1.2; }
  p, li { font-size: 16px; line-height: 1.72; color: ${COLORS.body}; font-weight: 400; }
  p { margin: 0 0 18px; }
  ul { margin: 14px 0 0; padding-left: 20px; }
  li { margin: 7px 0; }
  .bodyLarge, .heroLead, .darkLead { font-size: 18px; line-height: 1.66; }
  .eyebrow { font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .15em; color: ${COLORS.magenta}; margin-bottom: 18px; }
  .eyebrow--dark { color: ${COLORS.blushText}; }
  .btn { min-height: 52px; display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; padding: 14px 24px; font-size: 16px; font-weight: 600; text-decoration: none; transition: .2s ease; border: 1px solid transparent; line-height: 1.2; }
  .btnPrimary, .btnPrimary:visited, .btnPrimary:hover, .btnPrimary:active, .btnPrimary:focus { background: ${COLORS.magenta}; color: #fff !important; }
  .btnPrimary:hover { background: ${COLORS.magentaDark}; transform: translateY(-1px); }
  .btnSecondary, .btnSecondary:visited, .btnSecondary:active, .btnSecondary:focus { background: #fff; border-color: #CDCDD3; color: ${COLORS.ink}; }
  .btnSecondary:hover { border-color: #9C9CA5; color: ${COLORS.ink}; transform: translateY(-1px); }
  .btn:focus-visible, .editorialLink:focus-visible, .faqQuestion:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }
  .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #fff 68%, #FCFAFB 100%); }
  .heroGrid { display: grid; grid-template-columns: minmax(0, 1.07fr) minmax(420px, .93fr); gap: 56px; align-items: center; }
  .heroLead { max-width: 720px; margin-top: 26px; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .heroVisual { min-width: 0; }
  .heroVisual svg { width: 100%; height: auto; display: block; }
  .proofBand { border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; background: #fff; }
  .proofGrid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .proofGrid > div { padding: 26px 24px; min-height: 116px; display: flex; flex-direction: column; justify-content: center; }
  .proofGrid > div + div { border-left: 1px solid ${COLORS.line}; }
  .proofGrid strong { font-size: 17px; font-weight: 600; margin-bottom: 7px; }
  .proofGrid span { font-size: 16px; color: ${COLORS.muted}; line-height: 1.45; }
  .editorialSplit { display: grid; grid-template-columns: minmax(280px, .75fr) minmax(0, 1.25fr); gap: 82px; align-items: start; }
  .stickyHeading { position: sticky; top: 32px; }
  .editorialBody { max-width: 760px; }
  .inlineNote { display: flex; gap: 14px; padding-top: 24px; margin-top: 24px; border-top: 1px solid ${COLORS.line}; align-items: flex-start; color: ${COLORS.magenta}; }
  .inlineNote span { font-size: 16px; line-height: 1.6; color: ${COLORS.body}; }
  .centerHeading { text-align: center; max-width: 820px; margin: 0 auto 52px; }
  .centerHeading p { max-width: 790px; margin: 20px auto 0; font-size: 18px; }
  .valueChainGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid ${COLORS.line}; border-left: 1px solid ${COLORS.line}; background: #fff; border-radius: 28px; overflow: hidden; }
  .valueItem { padding: 30px 26px 32px; border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; min-height: 270px; }
  .valueItem h3 { margin: 20px 0 12px; }
  .valueItem p { margin: 0; }
  .iconBox, .contentIcon, .applicationMarker { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: ${COLORS.blush}; color: ${COLORS.magenta}; flex: 0 0 auto; }
  .iconBoxStrong { background: ${COLORS.magenta}; color: #fff; }
  .aiSection { background: ${COLORS.dark}; color: #fff; }
  .aiSection h2, .aiSection h3 { color: #fff; }
  .aiSection p { color: #D5D5DA; }
  .aiGrid { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 86px; align-items: start; }
  .aiGrid h2 { max-width: 560px; }
  .darkLead { margin-top: 22px; max-width: 620px; }
  .aiVisual { margin-top: 38px; max-width: 520px; }
  .aiVisual svg { display: block; width: 100%; height: auto; }
  .aiList { border-top: 1px solid #44444C; }
  .aiRow { padding: 30px 0 32px; border-bottom: 1px solid #44444C; }
  .aiRow h3 { margin-bottom: 12px; }
  .aiRow p { margin: 0; }
  .equipmentGrid { display: grid; grid-template-columns: minmax(330px, .75fr) minmax(0, 1.25fr); gap: 84px; align-items: center; }
  .equipmentVisualWrap { background: ${COLORS.soft}; border-radius: 30px; padding: 34px; min-height: 640px; display: flex; align-items: center; justify-content: center; }
  .equipmentVisual { width: min(100%, 380px); }
  .equipmentVisual svg { width: 100%; height: auto; display: block; }
  .equipmentSection h2 { margin-bottom: 22px; }
  .equipmentRows { margin-top: 34px; border-top: 1px solid ${COLORS.line}; }
  .equipmentRow { display: grid; grid-template-columns: 220px 1fr; gap: 34px; padding: 24px 0; border-bottom: 1px solid ${COLORS.line}; align-items: start; }
  .equipmentRow h3 { padding-top: 3px; }
  .equipmentRow ul { columns: 2; column-gap: 34px; margin: 0; }
  .equipmentRow li { break-inside: avoid; }
  .contentGrid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid ${COLORS.line}; }
  .contentItem { display: flex; gap: 20px; padding: 30px 24px 30px 0; border-bottom: 1px solid ${COLORS.line}; }
  .contentItem:nth-child(odd) { padding-right: 34px; border-right: 1px solid ${COLORS.line}; }
  .contentItem:nth-child(even) { padding-left: 34px; }
  .contentItem h3 { margin-bottom: 10px; }
  .contentItem p { margin: 0; }
  .contextLinks { display: flex; flex-wrap: wrap; gap: 28px; margin-top: 32px; justify-content: center; }
  .editorialLink, .editorialLink:visited, .editorialLink:active, .editorialLink:focus { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; color: ${COLORS.magenta}; text-decoration: none; font-size: 16px; font-weight: 600; }
  .editorialLink svg { transition: transform .2s ease; }
  .editorialLink:hover svg { transform: translateX(3px); }
  .editorialLink--light, .editorialLink--light:visited, .editorialLink--light:active, .editorialLink--light:focus { color: ${COLORS.blushText}; }
  .terminologyGrid { display: grid; grid-template-columns: minmax(280px, .8fr) minmax(0, 1.2fr); gap: 76px; align-items: start; }
  .terminologyPanel { background: ${COLORS.soft}; border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; }
  .termTop { display: flex; gap: 22px; padding: 32px; border-bottom: 1px solid ${COLORS.line}; }
  .termTop h3, .termColumns h3 { margin-bottom: 10px; }
  .termTop p, .termColumns p { margin: 0; }
  .termColumns { display: grid; grid-template-columns: 1fr 1fr; }
  .termColumns > div { padding: 30px 32px; }
  .termColumns > div + div { border-left: 1px solid ${COLORS.line}; }
  .aiHumanSection { background: #fff; }
  .workflowModes { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; }
  .workflowModes article { padding: 32px; }
  .workflowModes article + article { border-left: 1px solid ${COLORS.line}; }
  .modeLabel { font-size: 16px; line-height: 1.45; color: ${COLORS.magenta}; font-weight: 600; display: block; margin-bottom: 14px; }
  .workflowModes h3 { margin-bottom: 13px; }
  .workflowModes ul { margin-bottom: 0; }
  .continuousSection { background: ${COLORS.blush}; }
  .continuousGrid { display: grid; grid-template-columns: 1fr 1fr; background: #fff; border: 1px solid #ECD9E1; border-radius: 28px; overflow: hidden; }
  .continuousGrid article { padding: 30px; min-height: 225px; }
  .continuousGrid article:nth-child(1), .continuousGrid article:nth-child(2) { border-bottom: 1px solid ${COLORS.line}; }
  .continuousGrid article:nth-child(odd) { border-right: 1px solid ${COLORS.line}; }
  .continuousGrid article:last-child { grid-column: 1 / -1; border-right: 0; border-top: 1px solid ${COLORS.line}; border-bottom: 0; min-height: 0; }
  .continuousGrid svg { color: ${COLORS.magenta}; margin-bottom: 20px; }
  .continuousGrid h3 { margin-bottom: 10px; }
  .continuousGrid p { margin: 0; }
  .globalRows { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid ${COLORS.line}; }
  .globalRows article { display: flex; gap: 18px; padding: 28px 30px 28px 0; border-bottom: 1px solid ${COLORS.line}; }
  .globalRows article:nth-child(odd) { border-right: 1px solid ${COLORS.line}; }
  .globalRows article:nth-child(even) { padding-left: 30px; }
  .globalRows h3 { margin: 2px 0 8px; }
  .globalRows p { margin: 0; }
  .securitySection { background: ${COLORS.dark}; }
  .securitySection h2, .securitySection h3 { color: #fff; }
  .securitySection p { color: #D4D4D9; }
  .securityGrid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 80px; align-items: center; }
  .securityIntro h2 { margin-bottom: 22px; }
  .securityMatrix { border: 1px solid #44444B; border-radius: 28px; overflow: hidden; }
  .securityMatrix > div { padding: 34px; }
  .securityMatrix > div + div { border-top: 1px solid #44444B; }
  .securityMatrix svg { color: ${COLORS.blushText}; margin-bottom: 20px; }
  .securityMatrix h3 { margin-bottom: 10px; }
  .securityMatrix p { margin: 0; }
  .qualityFlow { max-width: 1120px; margin: 0 auto; border-top: 1px solid ${COLORS.line}; }
  .qualityFlow article { display: grid; grid-template-columns: 64px minmax(230px, .72fr) minmax(0, 1.28fr); gap: 28px; padding: 28px 0; border-bottom: 1px solid ${COLORS.line}; align-items: start; }
  .qualityFlow .stepNo { color: ${COLORS.magenta}; font-weight: 600; font-size: 17px; line-height: 1.35; padding-top: 4px; }
  .qualityFlow h3 { margin: 0; }
  .qualityFlow p { margin: 0; max-width: 690px; }
  .qualityNote { max-width: 820px; margin: 34px auto 0; text-align: center; }
  .applicationsGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid ${COLORS.line}; border-left: 1px solid ${COLORS.line}; background: #fff; border-radius: 28px; overflow: hidden; }
  .applicationsGrid article { padding: 30px; min-height: 250px; border-right: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
  .applicationsGrid h3 { margin: 18px 0 10px; }
  .applicationsGrid p { margin: 0; }
  .patentSection { padding-top: 80px; padding-bottom: 80px; }
  .patentBand { background: ${COLORS.blush}; border: 1px solid #F0D9E3; border-radius: 30px; padding: 44px 48px; display: grid; grid-template-columns: minmax(0, 1fr) 280px; gap: 70px; align-items: center; }
  .patentBand h2 { margin-bottom: 18px; }
  .patentBand p { max-width: 780px; }
  .patentAction { min-height: 170px; border-left: 1px solid #E6C9D6; padding-left: 42px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 20px; color: ${COLORS.magenta}; }
  .languageColumns { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid ${COLORS.line}; border-radius: 28px; overflow: hidden; }
  .languageColumns article { padding: 32px; }
  .languageColumns article + article { border-left: 1px solid ${COLORS.line}; }
  .languageColumns h3 { margin-bottom: 12px; }
  .languageColumns p { margin: 0; }
  .centerLink { text-align: center; margin-top: 24px; }
  .whySection { padding-top: 80px; }
  .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid ${COLORS.line}; }
  .whyGrid article { padding: 28px 28px 30px 0; border-bottom: 1px solid ${COLORS.line}; }
  .whyGrid article:not(:nth-child(3n)) { border-right: 1px solid ${COLORS.line}; }
  .whyGrid article:nth-child(3n+2), .whyGrid article:nth-child(3n) { padding-left: 28px; }
  .whyGrid h3 { margin-bottom: 9px; }
  .whyGrid p { margin: 0; }
  .relatedGrid { display: grid; grid-template-columns: minmax(280px, .76fr) minmax(0, 1.24fr); gap: 76px; align-items: start; }
  .relatedRows { border-top: 1px solid ${COLORS.line}; }
  .relatedRows article { display: grid; grid-template-columns: 1fr 150px; gap: 28px; padding: 26px 0; border-bottom: 1px solid ${COLORS.line}; align-items: center; }
  .relatedRows h3 { margin-bottom: 7px; }
  .relatedRows p { margin: 0; }
  .faqLayout { display: grid; grid-template-columns: minmax(280px, .68fr) minmax(0, 1.32fr); gap: 72px; align-items: start; }
  .faqHeading { position: sticky; top: 32px; }
  .faqPanel { border-top: 1px solid ${COLORS.line}; }
  .faqItem { border-bottom: 1px solid ${COLORS.line}; }
  .faqQuestion { width: 100%; min-height: 76px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 0; background: transparent; color: ${COLORS.ink}; text-align: left; font-family: inherit; font-size: 19px; font-weight: 600; cursor: pointer; }
  .faqPlus { width: 30px; height: 30px; flex: 0 0 30px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #D2D2D8; border-radius: 50%; color: ${COLORS.magenta}; font-size: 20px; font-weight: 400; }
  .faqAnswer { padding: 0 54px 22px 0; max-width: 840px; }
  .faqAnswer p { margin: 0; }
  .finalSection { padding-top: 64px; padding-bottom: 80px; }
  .finalCta { background: ${COLORS.blush}; border: 1px solid #EFD5E0; border-radius: 30px; padding: 54px 56px; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 58px; align-items: center; }
  .finalCta h2 { margin-bottom: 16px; }
  .finalCta p { max-width: 760px; margin: 0; font-size: 18px; }
  .finalActions { display: flex; flex-direction: column; gap: 12px; min-width: 310px; }

  @media (max-width: 1100px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .heroGrid { grid-template-columns: 1.03fr .97fr; gap: 36px; }
    .valueChainGrid { grid-template-columns: repeat(2, 1fr); }
    .aiGrid, .equipmentGrid, .securityGrid { gap: 52px; }
    .equipmentRow { grid-template-columns: 190px 1fr; }
    .qualityFlow article { grid-template-columns: 58px minmax(210px, .72fr) minmax(0, 1.28fr); gap: 24px; }
  }

  @media (max-width: 860px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero { padding: 88px 0 80px; }
    .heroGrid { grid-template-columns: 1fr; gap: 40px; }
    .heroCopy { text-align: center; }
    .heroCopy h1, .heroLead { margin-left: auto; margin-right: auto; }
    .heroActions { justify-content: center; }
    .heroVisual { max-width: 620px; margin: 0 auto; }
    .proofGrid { grid-template-columns: 1fr 1fr; }
    .proofGrid > div:nth-child(3) { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .proofGrid > div:nth-child(4) { border-top: 1px solid ${COLORS.line}; }
    .editorialSplit, .terminologyGrid, .aiGrid, .equipmentGrid, .securityGrid, .relatedGrid, .faqLayout { grid-template-columns: 1fr; gap: 42px; }
    .stickyHeading, .faqHeading { position: static; }
    .overviewSection .sectionHeading, .terminologySection .sectionHeading, .continuousSection .sectionHeading, .relatedSection .sectionHeading { text-align: center; max-width: 760px; margin: 0 auto; }
    .overviewSection .editorialBody { max-width: none; }
    .valueChainGrid { grid-template-columns: 1fr 1fr; }
    .aiGrid > div:first-child { text-align: left; }
    .aiGrid > div:first-child > .eyebrow, .aiGrid > div:first-child > h2 { text-align: center; margin-left: auto; margin-right: auto; }
    .aiGrid > div:first-child > .darkLead { text-align: center; margin-left: auto; margin-right: auto; }
    .aiVisual { margin-left: auto; margin-right: auto; }
    .equipmentVisualWrap { min-height: 0; max-width: 620px; margin: 0 auto; width: 100%; }
    .equipmentSection > .shell > div:last-child > .eyebrow, .equipmentSection > .shell > div:last-child > h2, .equipmentSection > .shell > div:last-child > .bodyLarge { text-align: center; }
    .equipmentSection > .shell > div:last-child > .bodyLarge { max-width: 760px; margin-left: auto; margin-right: auto; }
    .contentGrid { grid-template-columns: 1fr; }
    .contentItem:nth-child(odd), .contentItem:nth-child(even) { padding-left: 0; padding-right: 0; border-right: 0; }
    .workflowModes { grid-template-columns: 1fr; }
    .workflowModes article + article { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .globalRows { grid-template-columns: 1fr; }
    .globalRows article:nth-child(odd), .globalRows article:nth-child(even) { border-right: 0; padding-left: 0; padding-right: 0; }
    .securityIntro { text-align: left; max-width: 760px; margin: 0 auto; }
    .securityIntro > .eyebrow, .securityIntro > h2 { text-align: center; }
    .securityMatrix { max-width: 760px; margin: 0 auto; }
    .qualityFlow article { grid-template-columns: 54px 1fr; gap: 8px 22px; padding: 26px 0; }
    .qualityFlow h3, .qualityFlow p { grid-column: 2; }
    .qualityFlow p { max-width: none; }
    .applicationsGrid, .whyGrid { grid-template-columns: 1fr 1fr; }
    .applicationsGrid article { min-height: 0; }
    .whyGrid article, .whyGrid article:nth-child(3n+2), .whyGrid article:nth-child(3n) { padding: 26px 26px 28px 0; border-right: 0; }
    .whyGrid article:nth-child(odd) { border-right: 1px solid ${COLORS.line}; }
    .whyGrid article:nth-child(even) { padding-left: 26px; }
    .patentBand { grid-template-columns: 1fr; gap: 28px; padding: 40px; }
    .patentCopy h2 { text-align: center; }
    .patentAction { min-height: 0; border-left: 0; border-top: 1px solid #E6C9D6; padding: 28px 0 0; align-items: center; text-align: center; }
    .languageColumns { grid-template-columns: 1fr; }
    .languageColumns article + article { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .relatedRows article { grid-template-columns: 1fr auto; }
    .finalCta { grid-template-columns: 1fr; text-align: center; padding: 46px 42px; }
    .finalCta p { margin-left: auto; margin-right: auto; }
    .finalActions { min-width: 0; width: min(100%, 420px); margin: 0 auto; }
  }

  @media (max-width: 640px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .hero { padding: 72px 0 64px; }
    h1 { font-size: 38px; }
    h2 { font-size: 30px; }
    h3 { font-size: 20px; }
    .heroLead, .bodyLarge, .darkLead, .centerHeading p, .finalCta p { font-size: 17px; }
    .heroActions { flex-direction: column; }
    .heroActions .btn, .finalActions .btn { width: 100%; white-space: normal; text-align: center; }
    .proofGrid { grid-template-columns: 1fr; }
    .proofGrid > div { padding: 22px 0; min-height: 0; text-align: center; align-items: center; }
    .proofGrid > div + div, .proofGrid > div:nth-child(3), .proofGrid > div:nth-child(4) { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .centerHeading { margin-bottom: 38px; }
    .valueChainGrid { grid-template-columns: 1fr; }
    .valueItem { min-height: 0; padding: 26px 24px; }
    .aiGrid > div:first-child, .securityIntro { text-align: left; }
    .aiGrid > div:first-child > .eyebrow, .aiGrid > div:first-child > h2, .securityIntro > .eyebrow, .securityIntro > h2 { text-align: center; }
    .aiGrid > div:first-child > .darkLead { text-align: center; }
    .aiRow { padding: 26px 0; }
    .equipmentVisualWrap { padding: 24px; }
    .equipmentRow { grid-template-columns: 1fr; gap: 10px; }
    .equipmentRow ul { columns: 1; }
    .equipmentSection > .shell > div:last-child > .eyebrow, .equipmentSection > .shell > div:last-child > h2, .equipmentSection > .shell > div:last-child > .bodyLarge { text-align: center; }
    .contentItem { align-items: flex-start; }
    .contextLinks { justify-content: center; gap: 12px 22px; }
    .termTop { flex-direction: column; padding: 26px; }
    .termColumns { grid-template-columns: 1fr; }
    .termColumns > div { padding: 26px; }
    .termColumns > div + div { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .continuousGrid { grid-template-columns: 1fr; }
    .continuousGrid article { min-height: 0; }
    .continuousGrid article:nth-child(1), .continuousGrid article:nth-child(2), .continuousGrid article:nth-child(odd) { border-right: 0; border-bottom: 1px solid ${COLORS.line}; }
    .continuousGrid article:last-child { grid-column: auto; border-top: 0; border-bottom: 0; }
    .globalRows article { padding: 24px 0; }
    .qualityFlow article { grid-template-columns: 42px 1fr; gap: 8px 16px; }
    .qualityNote { text-align: left; }
    .applicationsGrid, .whyGrid { grid-template-columns: 1fr; }
    .applicationsGrid { border-radius: 24px; }
    .applicationsGrid article { padding: 26px; }
    .whyGrid article, .whyGrid article:nth-child(3n+2), .whyGrid article:nth-child(3n), .whyGrid article:nth-child(odd), .whyGrid article:nth-child(even) { padding: 24px 0; border-right: 0; }
    .patentBand { padding: 34px 24px; border-radius: 26px; }
    .patentCopy p { text-align: left; }
    .languageColumns article { padding: 26px; }
    .relatedRows article { grid-template-columns: 1fr; gap: 8px; padding: 24px 0; }
    .relatedRows .editorialLink { margin-top: 2px; }
    .faqQuestion { font-size: 18px; min-height: 72px; }
    .faqAnswer { padding-right: 0; }
    .finalSection { padding-top: 48px; padding-bottom: 64px; }
    .finalCta { padding: 40px 24px; border-radius: 26px; }
    .editorialSplit .sectionHeading, .terminologyGrid .sectionHeading, .relatedGrid .sectionHeading { text-align: center; }
    .editorialSplit .sectionHeading .editorialLink { justify-content: center; }
  }

  @media (max-width: 360px) {
    h1 { font-size: 38px; }
    .qualityFlow article { grid-template-columns: 36px minmax(0, 1fr); gap: 8px 12px; }
    .heroActions .btn, .finalActions .btn { padding-left: 18px; padding-right: 18px; }
    .heroVisual { margin-left: -6px; margin-right: -6px; }
    .contentItem { gap: 14px; }
    .iconBox, .contentIcon, .applicationMarker { width: 42px; height: 42px; border-radius: 12px; }
  }
`;

export default App;
