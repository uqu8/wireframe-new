import React from "react";

const URLS = {
  quote: "https://www.stepes.com/instant-translation-quote/",
  contact: "https://www.stepes.com/contact-us/",
  technical: "https://www.stepes.com/technical-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  automotive: "https://www.stepes.com/automotive-translation-services/",
  aviation: "https://www.stepes.com/aviation-translation-services/",
  robotics: "https://www.stepes.com/robotics-translation-services/",
  electronics: "https://www.stepes.com/electronics-translation-services/",
  energy: "https://www.stepes.com/energy-translation-services/",
  construction: "https://www.stepes.com/construction-infrastructure-translation-services/",
  rail: "https://www.stepes.com/railroad-translation-services/",
  medicalDevice: "https://www.stepes.com/medical-device-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  productEngineering: "https://www.stepes.com/solutions/product-engineering-localization/",
  terminology: "https://www.stepes.com/terminology-management/",
  memory: "https://www.stepes.com/translation-memory/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  ai: "https://www.stepes.com/ai-translation-services/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  security: "https://www.stepes.com/security/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  languages: "https://www.stepes.com/translation-languages/",
};

const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Button = ({ href, children, secondary = false }) => (
  <a className={secondary ? "btn btnSecondary" : "btn btnPrimary"} href={href}>
    <span>{children}</span><Arrow size={17} />
  </a>
);

const TextLink = ({ href, children }) => (
  <a className="textLink" href={href}>
    <span>{children}</span><Arrow size={15} />
  </a>
);

const Eyebrow = ({ children, dark = false }) => (
  <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>
);

const SectionHead = ({ eyebrow, title, intro, dark = false, align = "center" }) => (
  <div className={`sectionHead ${align === "left" ? "sectionHeadLeft" : "sectionHeadCenter"}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p className="sectionIntro">{intro}</p> : null}
  </div>
);

const HeroArt = () => (
  <div className="heroArt" role="img" aria-label="Engineering information connected from requirements through operation across languages">
    <svg viewBox="0 0 700 560" aria-hidden="true">
      <defs>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FDF2F7" />
          <stop offset="100%" stopColor="#F6F8FC" />
        </linearGradient>
      </defs>
      <rect x="36" y="30" width="628" height="500" rx="34" fill="url(#heroWash)" />
      <circle cx="538" cy="150" r="88" fill="#F5E9EF" />
      <rect x="82" y="86" width="220" height="126" rx="20" fill="#FFFFFF" stroke="#CBD2DD" strokeWidth="2" />
      <text x="108" y="119" fontSize="15" fontWeight="600" fill="#17202C">SYSTEM REQUIREMENT</text>
      <line x1="108" y1="145" x2="265" y2="145" stroke="#AAB3C0" strokeWidth="2" />
      <line x1="108" y1="165" x2="237" y2="165" stroke="#D1D6DE" strokeWidth="2" />
      <line x1="108" y1="185" x2="252" y2="185" stroke="#D1D6DE" strokeWidth="2" />
      <circle cx="274" cy="118" r="8" fill="#C11D63" />

      <g transform="translate(344 82)">
        <rect width="248" height="168" rx="22" fill="#FFFFFF" stroke="#CBD2DD" strokeWidth="2" />
        <path d="M54 117h39l18-33 28 50 22-78 23 61h24" fill="none" stroke="#4B5565" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="60" cy="54" r="18" fill="none" stroke="#667282" strokeWidth="3" />
        <path d="M60 28v9M60 71v9M34 54h9M77 54h9M42 36l7 7M71 65l7 7M42 72l7-7M71 43l7-7" stroke="#667282" strokeWidth="2.5" strokeLinecap="round" />
        <text x="24" y="146" fontSize="14" fontWeight="600" fill="#17202C">DESIGN + VALIDATION</text>
      </g>

      <g transform="translate(120 285)">
        <rect width="214" height="162" rx="24" fill="#FFFFFF" stroke="#CBD2DD" strokeWidth="2" />
        <path d="M42 116V78l34-18 29 17 31-18 35 19v38H42Z" fill="none" stroke="#526071" strokeWidth="3" strokeLinejoin="round" />
        <path d="M75 116V94h26v22M137 116V91h22v25" fill="none" stroke="#526071" strokeWidth="3" />
        <text x="28" y="143" fontSize="14" fontWeight="600" fill="#17202C">BUILD + DEPLOY</text>
      </g>

      <g transform="translate(385 300)">
        <rect width="196" height="150" rx="24" fill="#FFFFFF" stroke="#CBD2DD" strokeWidth="2" />
        <circle cx="72" cy="70" r="28" fill="none" stroke="#526071" strokeWidth="3" />
        <circle cx="72" cy="70" r="8" fill="#C11D63" />
        <path d="M72 34v8M72 98v8M36 70h8M100 70h8M46 44l6 6M92 90l6 6M46 96l6-6M92 50l6-6" stroke="#526071" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M121 49h43M121 69h43M121 89h30" stroke="#AAB3C0" strokeWidth="2.4" strokeLinecap="round" />
        <text x="28" y="127" fontSize="14" fontWeight="600" fill="#17202C">OPERATE + CHANGE</text>
      </g>

      <path d="M300 154C330 154 335 154 344 154M221 213c0 38 0 48 0 72M334 366h51M468 250v50" stroke="#C11D63" strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round" />

      <g transform="translate(258 244)">
        <rect width="190" height="54" rx="27" fill="#17202C" />
        <text x="27" y="34" fontSize="15" fontWeight="600" fill="#FFFFFF">ENGINEERING INTENT</text>
      </g>
      <g transform="translate(487 457)">
        <rect width="126" height="38" rx="19" fill="#FFFFFF" stroke="#C11D63" strokeWidth="1.5" />
        <text x="23" y="25" fontSize="13" fontWeight="600" fill="#C11D63">100+ LANGUAGES</text>
      </g>
    </svg>
  </div>
);

const proofItems = [
  ["100+ Languages", "Global and regional engineering content coverage."],
  ["Engineering Subject Expertise", "Professional linguists matched to technical domain and content."],
  ["ISO-Certified Processes", "ISO 17100 and ISO 9001 quality processes."],
  ["AI + Human Expertise", "Technology and professional review matched to complexity and risk."],
];

const lifecycle = [
  {
    title: "Requirements & Systems Definition",
    text: "Establish consistent multilingual technical meaning from the beginning of the engineering process.",
    items: ["Product and system requirements", "Functional requirements", "Performance requirements and criteria", "Interface specifications", "System descriptions", "Technical proposals", "Engineering standards and guidelines", "Architecture and systems documentation"],
  },
  {
    title: "Design & Development",
    text: "Translate the information engineers use to define how products, components, systems, and projects should be built and perform.",
    items: ["Engineering specifications", "Design specifications", "Technical calculations and reports", "Engineering drawings and annotations", "Schematics and diagrams", "Component descriptions", "Materials specifications", "Bills of materials", "Software and embedded-system requirements"],
  },
  {
    title: "Simulation, Testing & Verification",
    text: "Maintain clarity and technical precision throughout analysis, testing, validation, and engineering decision-making.",
    items: ["Test plans and procedures", "Verification protocols", "Validation documentation", "Simulation documentation", "Test reports and findings", "Inspection criteria", "Failure analyses", "Performance evaluations", "Engineering investigation reports"],
  },
  {
    title: "Industrialization & Manufacturing",
    text: "Carry design intent into production through consistent multilingual engineering, supplier, quality, and manufacturing information.",
    items: ["Production specifications", "Manufacturing requirements", "Supplier specifications", "Engineering change notices", "Process documentation", "Quality requirements", "Production drawings and annotations", "Work instructions", "Equipment documentation"],
    link: ["Explore Manufacturing Translation Services", URLS.manufacturing],
  },
  {
    title: "Installation, Commissioning & Deployment",
    text: "Support the teams responsible for bringing equipment, systems, and engineered projects into operation around the world.",
    items: ["Installation instructions", "Configuration procedures", "Site documentation", "Commissioning procedures", "Site acceptance testing", "Field engineering instructions", "Startup procedures", "Technical handover documentation"],
  },
  {
    title: "Operations, Service & Engineering Change",
    text: "Keep multilingual information current as products and systems operate, evolve, and move through successive revisions.",
    items: ["Operating documentation", "Maintenance procedures", "Troubleshooting guides", "Field modifications", "Service bulletins", "Upgrade instructions", "Engineering change documentation", "Product and system updates", "Revision-controlled technical content"],
  },
];

const disciplines = [
  ["Mechanical Engineering Translation", "Machinery, mechanical components, assemblies, thermodynamics, hydraulics, pneumatics, materials, tooling, mechanical systems, testing, operation, and maintenance."],
  ["Electrical & Electronic Engineering Translation", "Electrical systems, circuitry, electronics, power systems, sensors, instrumentation, control hardware, electronic components, testing, and technical documentation."],
  ["Systems Engineering Translation", "System requirements, architecture descriptions, interfaces, functional definitions, traceability information, verification content, and multidisciplinary system documentation."],
  ["Software & Embedded Engineering Translation", "Software requirements, embedded-system content, firmware-related documentation, developer information, diagnostic content, interfaces, configuration information, and technical software resources."],
  ["Industrial & Manufacturing Engineering Translation", "Production systems, process engineering, factory automation, manufacturing equipment, quality processes, industrialization, maintenance, and continuous improvement."],
  ["Chemical & Process Engineering Translation", "Process specifications, equipment information, technical procedures, process descriptions, production chemistry, materials information, testing, and engineering safety content."],
  ["Civil & Structural Engineering Translation", "Buildings, transportation networks, utilities, infrastructure, structures, calculations, technical specifications, construction documentation, inspection, and project engineering."],
  ["Materials & Advanced Engineering Translation", "Metals, polymers, ceramics, composites, coatings, advanced materials, materials characterization, testing, specifications, and performance requirements."],
];

const connectedSystems = [
  ["Hardware", "Mechanical systems, electrical systems, electronic components, materials, assemblies, sensors, instrumentation, and physical interfaces."],
  ["Software", "Embedded interfaces, diagnostic systems, configuration resources, developer content, software documentation, HMI, and connected-product content."],
  ["Controls & Automation", "PLC-related content, HMI and SCADA language, alarms, process states, control descriptions, operator interfaces, and industrial automation documentation."],
  ["Connected Systems", "IoT and IIoT interfaces, remote monitoring, field applications, cloud-connected equipment, digital service content, and associated technical documentation."],
];

const digitalThreads = [
  ["Requirements & Model-Based Engineering Content", "Requirements, model descriptions, architectural information, system definitions, interface descriptions, engineering rationale, and related documentation generated through systems-engineering workflows."],
  ["CAD, CAE & Drawing-Related Content", "Language-bearing engineering information such as drawing notes, annotations, callouts, legends, title blocks, figure labels, and text exported from CAD or related engineering workflows."],
  ["PLM & Product Information", "Multilingual product descriptions, specifications, parts information, structured technical content, change information, and other language-bearing content exchanged through product lifecycle processes."],
  ["Simulation, Testing & Engineering Analysis", "Test scenarios, procedures, analysis documentation, simulation-related descriptions, findings, reports, and technical conclusions."],
  ["Digital Twins & Connected Operations", "Interface language, operating content, diagnostic information, technical documentation, training, and other multilingual content associated with digitally connected products, production systems, and assets."],
  ["Structured Engineering Content", "XML, DITA, HTML, Markdown, software resources, technical databases, structured exports, and other formats while protecting tags, identifiers, variables, links, reusable content, and publishing relationships."],
];

const contentFamilies = [
  {
    title: "Requirements & Design",
    items: ["Product requirements", "System requirements", "Functional specifications", "Technical specifications", "Design specifications", "Engineering reports", "Engineering drawings", "CAD-related annotations", "Schematics and diagrams", "Bills of materials", "Datasheets", "Component descriptions"],
  },
  {
    title: "Testing & Verification",
    items: ["Test plans", "Test procedures", "Verification protocols", "Validation protocols", "Simulation documentation", "Inspection criteria", "Test reports", "Failure analyses", "Engineering assessments", "Acceptance criteria"],
  },
  {
    title: "Manufacturing & Supplier Engineering",
    items: ["Manufacturing specifications", "Process documentation", "Supplier specifications", "RFQs and technical proposals", "Engineering change orders", "Quality requirements", "Production instructions", "Inspection documentation", "Supplier technical communications", "Equipment documentation"],
  },
  {
    title: "Software, Controls & Interfaces",
    items: ["Embedded-system content", "Software requirements", "HMI interfaces", "SCADA interfaces", "Diagnostic messages", "Alarm and status messages", "Configuration content", "Developer documentation", "Release documentation", "Structured software resources"],
  },
  {
    title: "Installation & Field Engineering",
    items: ["Installation manuals", "Commissioning procedures", "Setup and configuration guides", "Field instructions", "Site acceptance documentation", "Operating manuals", "Maintenance manuals", "Troubleshooting procedures", "Repair instructions", "Service bulletins"],
  },
  {
    title: "Engineering Training & Knowledge",
    items: ["Engineering training", "Technician training", "Operator training", "Technical eLearning", "Technical presentations", "Knowledge bases", "Job aids", "Technical videos", "Support documentation", "Engineering reference materials"],
  },
];

const industries = [
  ["Manufacturing & Industrial Equipment", "Engineering specifications, machinery documentation, automation content, production systems, equipment manuals, supplier information, quality documentation, and global service content.", "Explore Manufacturing Translation Services", URLS.manufacturing],
  ["Automotive & Mobility", "Vehicle engineering, EV and battery technologies, automotive electronics, ADAS, embedded software, testing, manufacturing, diagnostics, technical documentation, and aftersales.", "Explore Automotive Translation Services", URLS.automotive],
  ["Aerospace & Aviation", "Aircraft systems, avionics, components, engineering development, testing, certification support, manufacturing, operation, maintenance, and MRO.", "Explore Aerospace & Aviation Translation Services", URLS.aviation],
  ["Robotics & Automation", "Robotics hardware, controls, sensors, autonomy, software interfaces, integration, operation, training, maintenance, and service.", "Explore Robotics Translation Services", URLS.robotics],
  ["Electronics & Semiconductors", "Semiconductor, electronics, hardware, component, embedded-system, testing, manufacturing, and product documentation.", "Explore Electronics Translation Services", URLS.electronics],
  ["Energy & Power", "Power generation, transmission, utilities, renewable energy, energy storage, grids, industrial energy technologies, EPC projects, field engineering, and digital energy systems.", "Explore Energy Translation Services", URLS.energy],
  ["Construction & Infrastructure", "Civil, structural, transportation, utilities, construction, building systems, infrastructure, project engineering, and technical documentation.", "Explore Construction & Infrastructure Translation Services", URLS.construction],
  ["Rail & Transportation", "Rolling stock, signaling, electrification, track systems, rail infrastructure, controls, maintenance equipment, technical documentation, and lifecycle engineering.", "Explore Railroad Translation Services", URLS.rail],
  ["Medical Devices & Engineered Healthcare Technologies", "Technical and engineering content for medical devices, diagnostics, connected devices, electromechanical systems, software-enabled technologies, testing, manufacturing, and product documentation.", "Explore Medical Device Translation Services", URLS.medicalDevice],
];

const qualityGroups = [
  ["Meaning & Terminology", ["Technical meaning", "Engineering terminology", "Component and system names", "Acronyms and abbreviations", "Procedures and sequence", "Warnings and cautions", "Contextual consistency", "Approved customer terminology"]],
  ["Numbers & Engineering Data", ["Numerical values", "Measurements", "Units", "Tolerances", "Ranges", "Percentages", "Decimal and locale conventions", "Dates and technical references"]],
  ["Protected Technical Content", ["Part numbers", "Model numbers", "Product codes", "Variables", "Placeholders", "Tags", "Identifiers", "Formulas", "Software keys"]],
  ["Documentation Integrity", ["Completeness", "Tables", "Figures", "Callouts", "Cross-references", "Warnings", "Links", "Structured elements", "Formatting", "Final visual presentation where required"]],
  ["Version & Consistency", ["Product revisions", "Engineering changes", "Document families", "Shared platforms", "Model variants", "Markets", "Recurring releases"]],
];

const aiModels = [
  ["Complex, Novel & High-Consequence Engineering", "Expert-Led Engineering Translation", "Use specialized professional translation and structured review where technical novelty, safety, complexity, customer impact, or business consequences require stronger human judgment.", ["New engineering concepts", "Critical specifications", "Safety-sensitive instructions", "Verification and validation content", "Complex system documentation", "High-value customer-facing technical information"]],
  ["Large Technical Documentation Programs", "AI-Assisted Translation With Professional Review", "Combine AI translation with translation memory, controlled terminology, automated QA, and professional review to improve speed and scalability while maintaining expert oversight.", ["Large documentation sets", "Product manuals", "Recurring technical content", "Knowledge bases", "Equipment documentation", "Extensive product information"]],
  ["Repeated Engineering Updates", "Change-Based Localization", "Reuse approved translations and focus new translation and review effort on meaningful source updates.", ["Engineering revisions", "Product updates", "Model changes", "Manual revisions", "Software releases", "Service-document updates", "Configuration changes"]],
  ["Approved Lower-Risk Content", "AI Translation With Appropriate Validation", "For suitable internal, informational, or lower-risk engineering content, organizations may choose a more automated workflow when customer policy, confidentiality requirements, intended use, and quality objectives allow.", []],
];

const workflow = [
  ["Understand the Engineering Content", "Review subject matter, content type, audience, purpose, source format, engineering context, technical risk, target markets, revision status, and delivery requirements."],
  ["Establish Language Assets", "Import existing terminology and translation memory or develop project-specific resources from specifications, previous translations, reference documentation, customer instructions, and approved technical language."],
  ["Match Engineering Expertise", "Assign professional translators and reviewers with experience appropriate to the engineering discipline, content type, and complexity of the project."],
  ["Translate With Context", "Apply the appropriate expert-led, AI-assisted, change-based, or other agreed workflow while protecting technical terminology, numbers, units, codes, variables, tags, and engineering relationships."],
  ["Validate Engineering Language", "Review meaning, terminology, procedures, numbers, units, completeness, protected technical content, file integrity, and final presentation according to project requirements."],
  ["Approve, Deliver & Reuse", "Support customer engineers, subject-matter experts, in-country reviewers, or other stakeholders where required. Carry final approved language into terminology and translation memory for future projects and revisions."],
];

const fileGroups = [
  ["Documents & Publishing", ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "PDF", "Adobe InDesign", "Adobe FrameMaker"]],
  ["Structured Technical Content", ["DITA", "XML", "SGML", "HTML", "XHTML", "Markdown", "Structured technical exports"]],
  ["Software & Data Resources", ["JSON", "YAML", "XML resources", "XLIFF", "Resource files", "Tabular exports", "Custom structured content"]],
  ["Engineering Drawings & Related Content", ["Notes", "Annotations", "Callouts", "Legends", "Title blocks", "Figure labels", "Drawing text", "Agreed text exports"]],
];

const changeItems = [
  ["Source Comparison", "Identify meaningful additions, deletions, and changes between source versions."],
  ["Approved Translation Reuse", "Apply validated translation memory where the source and engineering context continue to match."],
  ["Delta Translation", "Focus translation and review effort on new or changed content rather than repeatedly processing everything."],
  ["Terminology Continuity", "Keep approved component names, functions, processes, warnings, and engineering concepts consistent through successive releases."],
  ["Reviewer Feedback", "Capture approved corrections and engineering decisions so they can improve future projects."],
  ["Revision Continuity", "Maintain language assets that support recurring product, platform, model, document, and software updates."],
];

const securityItems = [
  ["Controlled File Handling", "Manage source and translated engineering files through defined project workflows rather than uncontrolled exchanges."],
  ["Confidentiality", "Support confidentiality requirements and project-specific agreements for proprietary technical information."],
  ["Controlled Access", "Limit project participation and review to the teams and stakeholders required for the engagement."],
  ["Managed Review", "Coordinate linguists, technical reviewers, customer SMEs, and other approved stakeholders through structured review and approval processes."],
  ["Enterprise Governance", "Apply agreed project instructions, language assets, workflow controls, quality requirements, and delivery procedures consistently across recurring engineering programs."],
];

const enterpriseItems = [
  ["Centralized Engineering Translation", "Coordinate translation requests, files, languages, schedules, reviewers, approvals, and deliveries through one consistent program."],
  ["Shared Language Assets", "Apply approved terminology and translation memory across products, business units, documents, engineering disciplines, and recurring programs."],
  ["Engineering & SME Review", "Bring internal engineers, technical experts, regional stakeholders, and other designated reviewers into structured approval workflows."],
  ["Workflow Automation", "Reduce repetitive coordination for recurring engineering content through automated intake, routing, language-asset application, notifications, APIs, and other workflow integrations where appropriate."],
  ["Program Visibility", "Gain clearer visibility into active projects, language coverage, review status, translation volumes, reuse, quality, delivery, and other program information."],
];

const whyItems = [
  ["Engineering Subject Expertise", "Match translators and reviewers to the relevant engineering discipline, technical subject, content type, and project requirements."],
  ["Engineering Lifecycle Understanding", "Support multilingual information from requirements and design through testing, manufacturing, installation, operation, service, and engineering change."],
  ["Terminology Governance", "Keep product, component, subsystem, interface, process, and technical terminology aligned across documents, systems, teams, markets, and revisions."],
  ["Engineering-Focused Quality Assurance", "Validate meaning, terminology, numbers, units, protected technical content, completeness, structure, and final deliverable quality according to content risk."],
  ["AI + Professional Expertise", "Use AI, translation memory, automated QA, and workflow technology where they improve efficiency while retaining professional human judgment where technical context and consequences matter."],
  ["Enterprise Scalability", "Support a single engineering document or a global multilingual program spanning product families, facilities, suppliers, engineering teams, content formats, markets, and recurring releases."],
];

const faqs = [
  ["What are engineering translation services?", "Engineering translation services specialize in translating technical information created and used throughout engineering activities. This can include product and system requirements, specifications, engineering reports, drawings-related text, test documentation, bills of materials, manufacturing information, software-related technical content, installation procedures, manuals, maintenance information, training, and engineering change documentation. Professional engineering translation requires both linguistic expertise and the ability to understand technical context, terminology, numerical information, document relationships, and the intended use of the translated content."],
  ["How is engineering translation different from technical translation?", "Technical translation is the broader discipline of translating specialized technical content across many industries and applications. Engineering translation focuses specifically on information created, exchanged, validated, and maintained through engineering activities, including requirements, systems documentation, design specifications, drawings, testing, manufacturing support, commissioning, operations, service, and engineering change. Stepes provides both technical translation services and specialized engineering translation services, allowing workflows to be matched to the subject matter and intended use of the content."],
  ["What types of engineering documents can Stepes translate?", "Stepes translates product and system requirements, technical specifications, design documentation, engineering reports, bills of materials, datasheets, drawings-related text, schematics, test plans, validation and verification documentation, simulation reports, supplier specifications, manufacturing information, installation instructions, operating manuals, maintenance procedures, service bulletins, training materials, software-related engineering content, and many other technical document types. We also support structured technical content and recurring multilingual engineering programs involving multiple file types and revisions."],
  ["Which engineering disciplines does Stepes support?", "Stepes supports mechanical, electrical, electronic, systems, software, embedded, industrial, manufacturing, chemical, process, civil, structural, materials, environmental, geotechnical, marine, energy, petroleum, nuclear, biomedical, and other specialized engineering fields. Translator and reviewer selection is based on the actual project subject matter rather than simply categorizing all engineering content under one technical discipline."],
  ["Can Stepes translate engineering drawings and CAD-related content?", "Yes. Stepes can translate language-bearing information associated with engineering drawings and CAD workflows, including notes, annotations, callouts, legends, labels, title blocks, and agreed text exports. The exact workflow depends on the source format and required final deliverable. Whenever possible, customers should provide native or editable source files together with a reference output so Stepes can determine the best extraction, translation, reintegration, and quality process. Stepes provides language translation and localization services; we do not modify engineering geometry or perform engineering design work."],
  ["How does Stepes manage engineering terminology?", "Stepes can import existing customer terminology or develop project-specific terminology resources from source content, specifications, reference materials, previous translations, and customer feedback. Approved terminology can include component names, subsystem terminology, materials, processes, engineering concepts, abbreviations, warnings, preferred translations, prohibited alternatives, definitions, and contextual guidance. These language assets help AI systems, professional linguists, reviewers, and customer SMEs maintain greater consistency across documents, systems, product versions, and languages."],
  ["How does Stepes verify numbers, units, and other technical information?", "Engineering translation workflows can include automated and human quality controls for numerical values, units, measurements, tolerances, ranges, percentages, locale formats, part numbers, identifiers, variables, tags, and other protected technical elements. The exact validation process is matched to the file type, technical content, intended use, and risk of the project."],
  ["Does Stepes use AI for engineering translation?", "Yes. Stepes combines AI translation with translation memory, approved terminology, professional engineering-focused linguists, automated QA, and human review according to the needs of each project. AI-assisted translation can improve speed and scalability for suitable high-volume and repetitive engineering content. Complex, novel, safety-sensitive, high-consequence, or otherwise critical engineering information can receive stronger expert-led translation and review. Stepes does not assume one translation workflow is appropriate for every engineering document. Human oversight is matched to technical risk, purpose, customer policy, and quality requirements."],
  ["Can Stepes support ongoing engineering revisions and product updates?", "Yes. Translation memory, terminology management, source comparison, and change-based localization can help preserve previously approved content while focusing translation and review on new or meaningfully changed material. This approach is especially useful for product revisions, model changes, engineering change notices, manual updates, software releases, service documentation, and long-term multilingual engineering programs."],
  ["Can our engineers and subject-matter experts review translations?", "Yes. Customer engineering teams, subject-matter experts, technical writers, product teams, quality teams, in-country reviewers, and other designated stakeholders can participate in review and approval workflows when required. Approved terminology decisions and corrections can also be incorporated into terminology resources and translation memory to improve consistency across future projects."],
  ["How does Stepes protect confidential engineering information?", "Stepes supports controlled enterprise workflows for proprietary engineering content, including managed file handling, confidentiality requirements, controlled project access, structured review, and agreed delivery processes. Organizations with specific information-security, access, retention, or confidentiality requirements can define those requirements as part of project setup."],
  ["What engineering file formats does Stepes support?", "Stepes supports common business documents, PDFs, publishing files, structured technical content, software resources, localization exchange files, and engineering-related content. Examples include Word, Excel, PowerPoint, InDesign, FrameMaker, XML, DITA, HTML, Markdown, JSON, XLIFF, and drawing-related text or structured exports. Because engineering files with the same extension can differ substantially in structure and complexity, Stepes reviews representative files and required outputs before confirming the final processing workflow."],
  ["What languages does Stepes support for engineering translation?", "Stepes provides engineering translation services in more than 100 languages, including major European, Asian, Middle Eastern, and Latin American languages as well as many regional markets. For large programs, Stepes can coordinate multiple target languages through shared engineering terminology, translation memory, quality requirements, and centralized project workflows."],
  ["How do I get a quote for engineering translation services?", "Send Stepes your source files together with the required target languages, intended use, desired delivery schedule, and any available reference materials or terminology. For complex engineering programs, it is also helpful to provide information about document revisions, required output formats, customer review requirements, recurring content, existing translations, and any specific technical or security considerations. Stepes can then recommend the appropriate translation, review, file-engineering, and quality workflow for your project."],
];

function BulletColumns({ items }) {
  return (
    <ul className="miniList">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function EngineeringTranslationServicesWireframe() {
  return (
    <main className="page">
      <style>{styles}</style>

      <section className="hero section">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <h1>Engineering Translation Services for Complex Products, Systems, and Projects</h1>
            <p className="heroLead">Engineering information has to remain technically accurate as it moves across languages, disciplines, teams, systems, and product versions. Stepes provides professional engineering translation services for requirements, specifications, drawings, testing and validation content, software-related engineering information, manufacturing documentation, installation materials, service content, and other technical deliverables in 100+ languages.</p>
            <p className="heroSupport">We combine engineering-specialized linguists, approved terminology, translation memory, AI-powered workflows, technical file engineering, and systematic quality assurance to preserve engineering intent from early requirements and design through manufacturing, deployment, service, and continuous change.</p>
            <div className="heroActions">
              <Button href={URLS.quote}>Get a Translation Quote</Button>
              <Button href={URLS.contact} secondary>Talk to an Engineering Translation Expert</Button>
            </div>
            <div className="heroFlow" aria-label="Engineering lifecycle">
              <span>Requirements</span><i>→</i><span>Design</span><i>→</i><span>Testing</span><i>→</i><span>Manufacturing</span><i>→</i><span>Deployment</span><i>→</i><span>Service</span>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="proofBand" aria-label="Engineering translation proof points">
        <div className="shell proofGrid">
          {proofItems.map(([title, text]) => (
            <div className="proofItem" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell splitEditorial">
          <div className="stickyHead">
            <Eyebrow>TECHNICAL INTENT</Eyebrow>
            <h2>Preserve Engineering Intent Across Languages</h2>
            <p className="bodyLarge">Engineering translation is about more than translating technical words correctly. Engineering meaning can be carried by a requirement, a dimension, a tolerance, a component name, a procedure sequence, a warning, a test criterion, a software message, or the relationship between several pieces of information.</p>
            <p className="calloutSentence">A translation can read fluently and still be technically wrong.</p>
            <p>Stepes approaches engineering translation around the intended function of the content. Our workflows help protect the technical meaning that engineers, manufacturers, installers, operators, technicians, regulators, and customers rely on.</p>
            <TextLink href={URLS.technical}>Explore Technical Translation Services</TextLink>
          </div>
          <div className="intentRows">
            {[
              ["Technical Meaning", "Preserve requirements, functional relationships, procedures, specifications, operating conditions, and engineering concepts rather than translating sentences in isolation."],
              ["Numbers, Units & Technical Data", "Maintain numerical values, measurements, units, ranges, tolerances, percentages, model numbers, and other technical information through translation and quality assurance."],
              ["Engineering Terminology", "Keep component names, subsystem terminology, abbreviations, warnings, interfaces, and specialized concepts consistent across documents and languages."],
              ["Content Relationships", "Protect cross-references, tables, figures, callouts, identifiers, variables, structured content, and other relationships that give engineering information its context."],
            ].map(([title, text]) => (
              <div className="intentRow" key={title}>
                <div className="intentMarker" aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <SectionHead
            title="Engineering Translation Across the Complete Lifecycle"
            intro="Engineering information begins long before a product, system, facility, or infrastructure project reaches production—and continues long after deployment. Stepes helps keep multilingual engineering content aligned throughout this lifecycle instead of treating every document or revision as a disconnected translation project."
          />
          <div className="lifecycle">
            {lifecycle.map((step, index) => (
              <article className="lifeRow" key={step.title}>
                <div className="stepNum">{String(index + 1).padStart(2, "0")}</div>
                <div className="lifeMain">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {step.link ? <TextLink href={step.link[1]}>{step.link[0]}</TextLink> : null}
                </div>
                <BulletColumns items={step.items} />
              </article>
            ))}
          </div>
          <p className="closingLine">From the first requirement to the latest field revision, Stepes helps engineering organizations maintain continuity in the language that describes what a product or system is, how it works, and how it should be used.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="One Multilingual Engineering System Across Every Discipline"
            intro="Modern engineering rarely stays inside a single discipline. Stepes supports engineering translation across technical boundaries so terminology and meaning remain aligned wherever disciplines meet."
          />
          <div className="disciplineGrid">
            {disciplines.map(([title, text]) => (
              <article className="disciplineItem" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="centerNote">Stepes also supports specialized engineering content involving environmental, geotechnical, marine, petroleum, nuclear, biomedical, energy, and other engineering disciplines according to project requirements.</p>
        </div>
      </section>

      <section className="section darkSection">
        <div className="shell">
          <SectionHead
            eyebrow="CONNECTED ENGINEERING"
            dark
            title="Engineering Language Now Spans Hardware, Software, and Connected Systems"
            intro="Machines, vehicles, instruments, infrastructure, medical technologies, industrial equipment, and consumer products increasingly combine physical components with electronics, embedded software, sensors, connectivity, control systems, diagnostics, data, and AI-enabled functionality."
          />
          <div className="connectedFlow" aria-label="Multidisciplinary engineering convergence across mechanical, electronic, software, control, and connected systems">
            {['Mechanical','Electronics','Embedded Software','Controls','Connectivity'].map((item, index, arr) => (
              <React.Fragment key={item}>
                <span>{item}</span>{index < arr.length - 1 ? <i>↔</i> : null}
              </React.Fragment>
            ))}
          </div>
          <p className="darkIntro">A component name established during design may later appear in a control interface. A system state defined in engineering specifications may appear in diagnostic software and troubleshooting documentation. A safety concept may need to remain aligned across hardware documentation, software messages, training, and service procedures.</p>
          <div className="connectedGrid">
            {connectedSystems.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="darkLinks">
            <TextLink href={URLS.software}>Explore Software Localization Services</TextLink>
            <TextLink href={URLS.productEngineering}>Explore Product & Engineering Localization</TextLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell digitalGrid">
          <div className="digitalIntro">
            <h2>Translation for Digital Engineering and the Multilingual Digital Thread</h2>
            <p className="bodyLarge">Engineering information is increasingly created, connected, revised, and reused through digital environments rather than isolated documents.</p>
            <p>Requirements management, product lifecycle management, application lifecycle management, model-based systems engineering, CAD/CAE, simulation, structured authoring, digital twins, software repositories, and technical content systems can all contribute language-bearing information to the engineering lifecycle.</p>
            <p>Stepes helps translate the multilingual content that moves through and around these environments while preserving the structure, terminology, and technical context needed for continued use.</p>
            <div className="truthPanel">Stepes does not replace your engineering systems. We help the multilingual information flowing through those systems remain usable, consistent, and connected.</div>
          </div>
          <div className="threadPanel">
            <div className="threadRail" aria-hidden="true" />
            {digitalThreads.map(([title, text]) => (
              <article className="threadItem" key={title}>
                <div className="threadDot" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <SectionHead
            title="Translate the Complete Engineering Content Ecosystem"
            intro="Engineering organizations produce far more than manuals. Stepes translates the documents, data-bearing content, software-related resources, technical publications, and training materials used to define, validate, manufacture, deploy, operate, and improve engineered products and systems."
          />
          <div className="contentMatrix">
            {contentFamilies.map((group) => (
              <article className="contentFamily" key={group.title}>
                <h3>{group.title}</h3>
                <BulletColumns items={group.items} />
              </article>
            ))}
          </div>
          <p className="centerNote">Whether your project contains one technical specification or a connected portfolio of engineering documents, software resources, drawings-related text, training, and recurring product updates, Stepes can build the translation workflow around how the content will actually be used.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="Engineering Translation Expertise Across Global Industries"
            intro="Engineering principles travel across industries, but terminology, technologies, standards, documentation, and risk do not. Stepes combines core engineering translation expertise with specialized industry knowledge to support technically complex global programs."
          />
          <div className="industryRows">
            {industries.map(([title, text, label, href]) => (
              <article className="industryRow" key={title}>
                <div><h3>{title}</h3><p>{text}</p></div>
                <TextLink href={href}>{label}</TextLink>
              </article>
            ))}
          </div>
          <p className="centerNote">One engineering translation partner can connect shared terminology and multilingual knowledge across disciplines while specialist workflows address the requirements of each industry.</p>
        </div>
      </section>

      <section className="section sectionBlush">
        <div className="shell terminologyGrid">
          <div>
            <Eyebrow>LANGUAGE GOVERNANCE</Eyebrow>
            <h2>One Engineering Vocabulary Across Every Document and System</h2>
            <p className="bodyLarge">Engineering terminology is an operational asset. A product name, component, function, material, warning, operating state, interface, or technical concept may first be defined in a requirement and later appear in specifications, drawings, software, manuals, training, service procedures, and customer support.</p>
            <p>If terminology changes unnecessarily between those environments, technical clarity starts to break down.</p>
            <div className="termFlow" aria-label="Terminology continuity from engineering requirements to service">
              {['Requirement','Specification','Drawing','Software / HMI','Manual','Training','Service'].map((item, index, arr) => (
                <React.Fragment key={item}><span>{item}</span>{index < arr.length - 1 ? <i>→</i> : null}</React.Fragment>
              ))}
            </div>
          </div>
          <div className="governancePanels">
            <article>
              <h3>Engineering Terminology Management</h3>
              <p>Build and maintain approved terminology for products, product families, components, assemblies, subsystems, materials, processes, engineering concepts, software interfaces, abbreviations, warnings, preferred translations, and prohibited or obsolete alternatives.</p>
              <p>Definitions, context, reviewer guidance, and customer-approved terminology can be incorporated where needed so linguists and reviewers understand not only which term to use, but how it should be used.</p>
              <TextLink href={URLS.terminology}>Explore Terminology Management</TextLink>
            </article>
            <article>
              <h3>Translation Memory</h3>
              <p>Translation memory captures previously translated and approved bilingual content so it can be identified when the same or similar engineering content appears again across product families, repeated specifications, manual updates, model changes, shared platforms, engineering revisions, service documentation, software releases, and long-term technical programs.</p>
              <TextLink href={URLS.memory}>Explore Translation Memory</TextLink>
            </article>
            <article>
              <h3>Engineering and SME Feedback</h3>
              <p>Internal engineers and subject-matter experts often make important terminology or technical decisions during review. Stepes can incorporate approved feedback into language assets so those decisions improve future translations instead of being rediscovered on every project.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="Engineering Translation Quality Built Around Technical Risk"
            intro="Engineering translation quality cannot be measured by fluency alone. A sentence may sound perfect while containing the wrong unit, changing a procedural relationship, mistranslating a component, omitting a condition, altering a warning, or introducing an inconsistent technical term."
          />
          <div className="qualityLayout">
            <div className="qualityStatement">
              <h3>Validate What Engineering Content Actually Depends On</h3>
              <p>Stepes combines professional linguistic review with terminology controls, automated QA, technical validation, and final file checks appropriate to the content and its intended use.</p>
              <TextLink href={URLS.quality}>Explore Translation Quality Assurance</TextLink>
            </div>
            <div className="qualityMatrix">
              {qualityGroups.map(([title, items]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <BulletColumns items={items} />
                </article>
              ))}
            </div>
          </div>
          <p className="centerNote">Quality requirements can be adjusted according to content purpose and risk so the strongest review resources are applied where technical consequences are highest.</p>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <SectionHead
            title="Use AI Where It Creates Value. Keep Engineering Judgment Where It Matters."
            intro="AI is changing both engineering and translation. The right response is not to apply one workflow to every piece of content. A high-volume technical knowledge base, a safety-sensitive installation procedure, a new engineering specification, and a minor revision to an established manual do not carry the same complexity or consequence of error."
          />
          <div className="riskRows">
            {aiModels.map(([kicker, title, text, items]) => (
              <article className="riskRow" key={title}>
                <div className="riskKicker">{kicker}</div>
                <div className="riskMain"><h3>{title}</h3><p>{text}</p></div>
                {items.length ? <BulletColumns items={items} /> : <div className="riskBlank" />}
              </article>
            ))}
          </div>
          <div className="riskPrinciple">
            <strong>The key is not whether a workflow uses AI.</strong>
            <span>The key is whether the translation method, validation, and human oversight match the engineering risk.</span>
          </div>
          <div className="centerLink"><TextLink href={URLS.ai}>Explore AI Translation Services</TextLink></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead
            title="A Translation Workflow Built Around Engineering Context"
            intro="Every engineering project begins with the content itself—not a predetermined translation process. Stepes evaluates the engineering discipline, intended use, audience, technical complexity, file structure, available language assets, revision history, quality expectations, and customer review requirements before defining the workflow."
            align="left"
          />
          <div className="workflowTimeline">
            {workflow.map(([title, text], index) => (
              <article className="workflowStep" key={title}>
                <div className="workflowNum">{String(index + 1).padStart(2, "0")}</div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="workflowSummary">Engineering Context <span>→</span> Language Assets <span>→</span> Specialized Translation <span>→</span> Technical Review <span>→</span> QA <span>→</span> Approval <span>→</span> Reuse</div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <SectionHead
            eyebrow="FILE ENGINEERING"
            title="Keep Engineering Content Intact Across File Formats"
            intro="Engineering translation often involves more than extracting words and returning translated text. Technical information may depend on tables, styles, structured elements, callouts, variables, tags, diagrams, software keys, links, reusable topics, or publishing rules."
          />
          <div className="fileGrid">
            {fileGroups.map(([title, items]) => (
              <article className="filePanel" key={title}>
                <h3>{title}</h3>
                <BulletColumns items={items} />
              </article>
            ))}
          </div>
          <div className="cadNotice">
            <div>
              <h3>Engineering Drawings and CAD Workflows</h3>
              <p>Stepes can process language-bearing content associated with engineering drawings and CAD workflows, including notes, annotations, callouts, legends, title blocks, figure labels, drawing text, and agreed text exports.</p>
            </div>
            <p className="cadBoundary">Our role is translation and localization of the language-bearing engineering content—not modification of engineering geometry or engineering design.</p>
          </div>
          <p className="centerNote">For specialized, proprietary, legacy, or mixed-content formats, Stepes can review representative source files and determine the appropriate extraction, translation, reintegration, formatting, or alternative delivery workflow.</p>
          <div className="centerLink"><TextLink href={URLS.fileFormats}>Explore File Format Support</TextLink></div>
        </div>
      </section>

      <section className="section">
        <div className="shell changeGrid">
          <div className="changeIntro">
            <Eyebrow>ENGINEERING CHANGE</Eyebrow>
            <h2>Keep Multilingual Engineering Content Aligned Through Every Revision</h2>
            <p className="bodyLarge">Engineering never really stops changing. Requirements evolve. Components change. Designs are revised. Tests generate findings. Suppliers change. Software is released. Product configurations multiply. Field experience leads to modifications.</p>
            <p>Re-translating every document from the beginning wastes approved knowledge and creates unnecessary opportunities for inconsistency.</p>
            <div className="revisionTrack" aria-label="Engineering revision progression">
              <span>Rev A</span><i>→</i><span>Rev B</span><i>→</i><span>Rev C</span><i>→</i><span>Next Release</span>
            </div>
            <p className="calloutSentence compact">Preserve what has already been validated. Focus expertise on what has actually changed.</p>
          </div>
          <div className="changeRows">
            {changeItems.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section darkSection securitySection">
        <div className="shell securityGrid">
          <div>
            <h2>Protect Confidential Engineering Information</h2>
            <p className="bodyLarge">Engineering content can contain some of an organization's most valuable intellectual property.</p>
            <p>Unreleased products, prototypes, technical requirements, engineering designs, proprietary processes, supplier information, testing data, software-related information, product plans, and invention details require translation workflows built around confidentiality and controlled access.</p>
            <p>Stepes supports secure enterprise translation workflows appropriate to the sensitivity and requirements of each engagement.</p>
            <TextLink href={URLS.security}>Explore Stepes Security</TextLink>
          </div>
          <div className="securityMatrix">
            {securityItems.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell enterpriseGrid">
          <div>
            <h2>One Translation Program Across Global Engineering Operations</h2>
            <p className="bodyLarge">Engineering content is often distributed across product teams, technical publications, manufacturing sites, suppliers, contractors, software teams, service organizations, regional offices, and customers.</p>
            <p>When every team manages translation separately, terminology fragments, approved language gets lost, reviews are repeated, and project visibility becomes difficult.</p>
            <p>Stepes helps global organizations bring these multilingual activities into a more connected operating model.</p>
            <TextLink href={URLS.enterprise}>Explore Enterprise Translation Management</TextLink>
          </div>
          <div className="enterpriseList">
            {enterpriseItems.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="shell">
          <SectionHead
            eyebrow="WHY STEPES"
            title="Engineering Translation Built for Technical Complexity and Global Scale"
            intro="Engineering organizations choose Stepes when translation must combine technical understanding, modern technology, professional linguistic expertise, and enterprise operational control."
          />
          <div className="whyGrid">
            {whyItems.map(([title, text]) => (
              <article key={title}>
                <div className="whyCheck"><Check /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section languageSection">
        <div className="shell languageGrid">
          <div>
            <h2>Engineering Translation in 100+ Languages</h2>
            <p className="bodyLarge">Engineering organizations operate across global design centers, manufacturing locations, suppliers, EPC partners, research teams, service networks, project sites, distributors, and customer markets.</p>
            <p>Stepes provides professional engineering translation services in more than 100 languages, supporting major business and technical markets across Europe, Asia-Pacific, the Americas, the Middle East, and other regions worldwide.</p>
            <p>Our centralized approach helps organizations apply shared terminology, translation memory, technical instructions, review requirements, and quality processes consistently while adapting multilingual content to the needs of each target market.</p>
            <TextLink href={URLS.languages}>Explore All Translation Languages</TextLink>
          </div>
          <div className="regionPanel">
            <div><span>Europe</span><p>German, French, Italian, Spanish, Portuguese, Dutch, Polish, Czech, Nordic languages, and additional European markets.</p></div>
            <div><span>Asia-Pacific</span><p>Simplified and Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and additional regional languages.</p></div>
            <div><span>Americas</span><p>Spanish variants, Brazilian Portuguese, Canadian French, English-market adaptation, and multilingual programs across the region.</p></div>
            <div><span>Middle East & Global Markets</span><p>Arabic, Hebrew, Turkish, Persian, and language coverage for regional and worldwide engineering operations.</p></div>
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="shell faqShell">
          <div className="faqHeading">
            <h2>Engineering Translation Services FAQs</h2>
            <p>Practical answers about engineering documents, technical accuracy, terminology, AI-assisted workflows, file formats, revisions, confidentiality, and global language coverage.</p>
          </div>
          <div className="faqList">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary><span>{q}</span><span className="plus" aria-hidden="true">+</span></summary>
                <div className="faqAnswer">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta section">
        <div className="shell finalCtaInner">
          <div>
            <h2>Keep Your Engineering Intent Intact in Every Language</h2>
            <p>From a single technical specification to a global engineering program spanning requirements, product documentation, software-related content, manufacturing, training, service, and recurring revisions, Stepes helps engineering organizations communicate complex technical information accurately across languages.</p>
            <p>Bring together engineering-specialized professionals, AI-powered translation, terminology governance, translation memory, technical quality assurance, file engineering, and enterprise workflow technology in one multilingual solution built for how modern engineering actually works.</p>
          </div>
          <div className="finalActions">
            <Button href={URLS.quote}>Get a Translation Quote</Button>
            <Button href={URLS.contact} secondary>Talk to an Engineering Translation Expert</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --ink: #17202C;
    --body: #3B4655;
    --muted: #667282;
    --line: #E3E7ED;
    --soft: #F6F8FB;
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --dark: #111821;
    --dark-2: #17212D;
    --eyebrow-dark: #F2A7C6;
    --white: #FFFFFF;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .page {
    color: var(--ink);
    background: var(--white);
    font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    overflow-x: hidden;
  }
  .page a { color: inherit; }
  .page p, .page li { font-size: 16px; line-height: 1.7; font-weight: 400; color: var(--body); overflow-wrap: anywhere; }
  .page h1, .page h2, .page h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: var(--ink); overflow-wrap: anywhere; }
  .page h1 { font-size: 48px; line-height: 1.06; max-width: 720px; }
  .page h2 { font-size: 36px; line-height: 1.12; }
  .page h3 { font-size: 24px; line-height: 1.25; }
  .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding: 96px 0; }
  .sectionSoft { background: var(--soft); }
  .sectionBlush { background: var(--blush); }
  .eyebrow { color: var(--magenta) !important; font-size: 11px !important; line-height: 1.2 !important; font-weight: 600 !important; letter-spacing: .14em !important; text-transform: uppercase; margin: 0 0 14px !important; opacity: 1 !important; }
  .eyebrowDark { color: var(--eyebrow-dark) !important; }
  .sectionHead { max-width: 820px; margin-bottom: 54px; }
  .sectionHeadCenter { text-align: center; margin-left: auto; margin-right: auto; }
  .sectionHeadLeft { text-align: left; margin-right: auto; }
  .sectionIntro { font-size: 18px !important; line-height: 1.62 !important; max-width: 820px; margin: 20px auto 0; color: var(--body) !important; }
  .sectionHeadLeft .sectionIntro { margin-left: 0; }
  .bodyLarge { font-size: 18px !important; line-height: 1.65 !important; }

  .btn { min-height: 50px; padding: 13px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; font-size: 16px; font-weight: 600; line-height: 1.2; text-decoration: none; transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease; }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible, .textLink:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
  .btnPrimary, .btnPrimary:link, .btnPrimary:visited, .btnPrimary:hover, .btnPrimary:active, .btnPrimary:focus, .btnPrimary:focus-visible { background: var(--magenta); border: 1px solid var(--magenta); color: #FFFFFF !important; }
  .btnPrimary *, .btnPrimary:visited *, .btnPrimary:hover *, .btnPrimary:active *, .btnPrimary:focus * { color: #FFFFFF !important; stroke: currentColor !important; }
  .btnPrimary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); box-shadow: 0 10px 25px rgba(193,29,99,.18); }
  .btnSecondary { background: #FFFFFF; border: 1px solid #CAD1DB; color: var(--ink) !important; }
  .btnSecondary:hover { border-color: #9CA7B5; background: #FBFCFD; }
  .textLink { display: inline-flex; align-items: center; gap: 7px; color: var(--magenta) !important; font-size: 16px; font-weight: 600; text-decoration: none; line-height: 1.4; padding: 8px 0; overflow-wrap: anywhere; }
  .textLink svg { flex: 0 0 auto; transition: transform .18s ease; }
  .textLink:hover svg { transform: translateX(3px); }
  .centerLink { text-align: center; margin-top: 24px; }

  .hero { padding: 104px 0 92px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFE 100%); }
  .heroGrid { display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(460px, .94fr); gap: 54px; align-items: center; }
  .heroLead { font-size: 18px !important; line-height: 1.65 !important; max-width: 730px; margin: 28px 0 0; }
  .heroSupport { max-width: 720px; margin: 16px 0 0; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .heroFlow { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; margin-top: 26px; color: #5A6573; font-size: 16px; line-height: 1.4; font-weight: 600; }
  .heroFlow i { color: var(--magenta); font-style: normal; }
  .heroArt { min-width: 0; }
  .heroGrid > *, .splitEditorial > *, .digitalGrid > *, .terminologyGrid > *, .changeGrid > *, .securityGrid > *, .enterpriseGrid > *, .languageGrid > *, .faqShell > *, .qualityLayout > *, .cadNotice > * { min-width: 0; }
  .heroArt svg { width: 100%; height: auto; display: block; }

  .proofBand { background: #FFFFFF; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .proofGrid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .proofItem { padding: 28px 28px 30px; border-right: 1px solid var(--line); }
  .proofItem:first-child { padding-left: 0; }
  .proofItem:last-child { border-right: 0; padding-right: 0; }
  .proofItem h3 { font-size: 18px; letter-spacing: -.01em; }
  .proofItem p { margin: 8px 0 0; line-height: 1.55; }

  .splitEditorial { display: grid; grid-template-columns: minmax(0, .86fr) minmax(0, 1.14fr); gap: 78px; align-items: start; }
  .stickyHead h2, .digitalIntro h2, .terminologyGrid h2, .changeIntro h2, .securityGrid h2, .enterpriseGrid h2, .languageGrid h2, .faqHeading h2 { max-width: 650px; }
  .stickyHead p { max-width: 700px; }
  .calloutSentence { margin: 24px 0; padding: 18px 0 18px 20px; border-left: 3px solid var(--magenta); font-size: 19px !important; font-weight: 600 !important; line-height: 1.5 !important; color: var(--ink) !important; }
  .calloutSentence.compact { font-size: 17px !important; }
  .intentRows { border-top: 1px solid var(--line); }
  .intentRow { display: grid; grid-template-columns: 16px 1fr; gap: 16px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .intentMarker { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); margin-top: 10px; }
  .intentRow p { margin: 10px 0 0; }

  .lifecycle { border-top: 1px solid #D9DEE6; }
  .lifeRow { display: grid; grid-template-columns: 70px minmax(0, .82fr) minmax(0, 1.18fr); gap: 32px; padding: 34px 0; border-bottom: 1px solid #D9DEE6; align-items: start; }
  .stepNum, .workflowNum { color: var(--magenta); font-size: 16px; line-height: 1.2; font-weight: 600; }
  .lifeMain p { margin: 10px 0 0; }
  .miniList { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 24px; row-gap: 8px; }
  .miniList li { position: relative; padding-left: 15px; line-height: 1.48; }
  .miniList li::before { content: ""; width: 5px; height: 5px; background: #9CA6B3; border-radius: 50%; position: absolute; left: 0; top: .63em; }
  .closingLine, .centerNote { max-width: 820px; margin: 34px auto 0; text-align: center; font-size: 17px !important; line-height: 1.65 !important; color: var(--body) !important; }

  .disciplineGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .disciplineItem { padding: 30px 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .disciplineItem p { margin: 12px 0 0; }

  .darkSection { background: var(--dark); color: #FFFFFF; }
  .darkSection h2, .darkSection h3 { color: #FFFFFF; }
  .darkSection p, .darkSection li { color: #CED5DE; }
  .darkSection .sectionIntro { color: #CED5DE !important; }
  .connectedFlow { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 9px; margin: -4px auto 32px; max-width: 1060px; }
  .connectedFlow span { padding: 11px 15px; border: 1px solid #394452; border-radius: 999px; color: #FFFFFF; font-size: 16px; font-weight: 600; }
  .connectedFlow i { color: var(--eyebrow-dark); font-style: normal; }
  .darkIntro { max-width: 850px; margin: 0 auto 38px; text-align: center; font-size: 17px !important; }
  .connectedGrid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #34404D; border-left: 1px solid #34404D; }
  .connectedGrid article { padding: 30px; border-right: 1px solid #34404D; border-bottom: 1px solid #34404D; }
  .connectedGrid h3 { font-size: 21px; }
  .connectedGrid p { margin: 12px 0 0; }
  .darkLinks { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 26px; }
  .darkSection .textLink { color: var(--eyebrow-dark) !important; }

  .digitalGrid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 80px; align-items: start; }
  .digitalIntro p { max-width: 620px; }
  .truthPanel { margin-top: 28px; padding: 22px 24px; border-radius: 22px; background: var(--blush); font-size: 16px; line-height: 1.6; font-weight: 600; color: var(--ink); }
  .threadPanel { position: relative; padding-left: 34px; }
  .threadRail { position: absolute; left: 8px; top: 14px; bottom: 18px; width: 1px; background: #CFD5DE; }
  .threadItem { position: relative; padding: 0 0 28px; }
  .threadItem:last-child { padding-bottom: 0; }
  .threadDot { position: absolute; left: -34px; top: 9px; width: 17px; height: 17px; border-radius: 50%; background: #FFFFFF; border: 4px solid var(--magenta); }
  .threadItem h3 { font-size: 21px; }
  .threadItem p { margin: 9px 0 0; }

  .contentMatrix { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #D9DEE6; border-left: 1px solid #D9DEE6; }
  .contentFamily { padding: 30px; border-right: 1px solid #D9DEE6; border-bottom: 1px solid #D9DEE6; }
  .contentFamily h3 { font-size: 22px; margin-bottom: 18px; }
  .contentFamily .miniList { grid-template-columns: 1fr; }

  .industryRows { border-top: 1px solid var(--line); }
  .industryRow { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 40px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .industryRow h3 { font-size: 22px; }
  .industryRow p { max-width: 850px; margin: 9px 0 0; }
  .industryRow .textLink { max-width: 280px; justify-content: flex-end; text-align: right; }

  .terminologyGrid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 72px; align-items: start; }
  .terminologyGrid p { max-width: 640px; }
  .termFlow { display: flex; flex-wrap: wrap; gap: 7px; align-items: center; margin-top: 28px; }
  .termFlow span { background: #FFFFFF; border: 1px solid #E3CFD8; border-radius: 999px; padding: 9px 12px; font-size: 16px; font-weight: 600; }
  .termFlow i { color: var(--magenta); font-style: normal; }
  .governancePanels { border-top: 1px solid #E3CFD8; }
  .governancePanels article { padding: 27px 0; border-bottom: 1px solid #E3CFD8; }
  .governancePanels h3 { font-size: 22px; }
  .governancePanels p { margin: 10px 0 0; }

  .qualityLayout { display: grid; grid-template-columns: minmax(270px, .72fr) minmax(0, 1.28fr); gap: 50px; align-items: start; }
  .qualityStatement { padding: 30px; border-radius: 28px; background: var(--dark); }
  .qualityStatement h3 { color: #FFFFFF; }
  .qualityStatement p { color: #CED5DE; }
  .qualityStatement .textLink { color: var(--eyebrow-dark) !important; }
  .qualityMatrix { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .qualityMatrix article { padding: 27px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .qualityMatrix article:last-child { grid-column: 1 / -1; }
  .qualityMatrix h3 { font-size: 20px; margin-bottom: 15px; }
  .qualityMatrix .miniList { grid-template-columns: 1fr; }

  .riskRows { border-top: 1px solid #D9DEE6; }
  .riskRow { display: grid; grid-template-columns: 220px minmax(0, 1fr) minmax(280px, .8fr); gap: 34px; padding: 32px 0; border-bottom: 1px solid #D9DEE6; }
  .riskKicker { color: var(--magenta); font-size: 16px; line-height: 1.5; font-weight: 600; }
  .riskMain h3 { font-size: 22px; }
  .riskMain p { margin: 10px 0 0; }
  .riskPrinciple { margin: 34px auto 0; max-width: 900px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; text-align: center; font-size: 17px; line-height: 1.5; }
  .riskPrinciple strong { font-weight: 600; }
  .riskPrinciple span { color: var(--body); }

  .workflowTimeline { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .workflowStep { min-height: 250px; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .workflowStep h3 { font-size: 21px; margin-top: 24px; }
  .workflowStep p { margin: 10px 0 0; }
  .workflowSummary { margin-top: 28px; padding: 18px 22px; border-radius: 22px; background: var(--blush); display: flex; flex-wrap: wrap; justify-content: center; gap: 9px; font-size: 16px; line-height: 1.4; font-weight: 600; color: var(--ink); }
  .workflowSummary span { color: var(--magenta); }

  .fileGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .filePanel { background: #FFFFFF; border: 1px solid #D9DEE6; border-radius: 22px; padding: 26px; }
  .filePanel h3 { font-size: 20px; margin-bottom: 16px; }
  .filePanel .miniList { grid-template-columns: 1fr; }
  .cadNotice { margin-top: 28px; display: grid; grid-template-columns: 1.15fr .85fr; gap: 24px; padding: 28px; background: #FFFFFF; border: 1px solid #D9DEE6; border-radius: 28px; }
  .cadNotice h3 { font-size: 22px; }
  .cadNotice p { margin: 10px 0 0; }
  .cadBoundary { margin: 0 !important; padding: 20px; border-radius: 20px; background: var(--blush); color: var(--ink) !important; font-weight: 600 !important; }

  .changeGrid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 72px; align-items: start; }
  .changeIntro p { max-width: 630px; }
  .revisionTrack { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 28px 0 12px; }
  .revisionTrack span { padding: 10px 14px; border-radius: 999px; border: 1px solid #D7DCE4; background: #FFFFFF; font-weight: 600; font-size: 16px; }
  .revisionTrack i { color: var(--magenta); font-style: normal; }
  .changeRows { border-top: 1px solid var(--line); }
  .changeRows article { padding: 24px 0; border-bottom: 1px solid var(--line); }
  .changeRows h3 { font-size: 21px; }
  .changeRows p { margin: 8px 0 0; }

  .securitySection { background: #141B24; }
  .securityGrid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 72px; align-items: start; }
  .securityGrid p { max-width: 620px; }
  .securityMatrix { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #34404D; border-left: 1px solid #34404D; }
  .securityMatrix article { padding: 26px; border-right: 1px solid #34404D; border-bottom: 1px solid #34404D; }
  .securityMatrix article:last-child { grid-column: 1 / -1; }
  .securityMatrix h3 { font-size: 20px; }
  .securityMatrix p { margin: 9px 0 0; }

  .enterpriseGrid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 72px; align-items: start; }
  .enterpriseGrid p { max-width: 620px; }
  .enterpriseList { border-top: 1px solid var(--line); }
  .enterpriseList article { padding: 25px 0; border-bottom: 1px solid var(--line); }
  .enterpriseList h3 { font-size: 21px; }
  .enterpriseList p { margin: 8px 0 0; }

  .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px 28px; }
  .whyGrid article { display: grid; grid-template-columns: 34px 1fr; gap: 14px; padding: 24px 0; border-bottom: 1px solid #D9DEE6; }
  .whyCheck { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--blush); color: var(--magenta); }
  .whyGrid h3 { font-size: 20px; }
  .whyGrid p { margin: 8px 0 0; }

  .languageSection { background: #FFFFFF; }
  .languageGrid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 70px; align-items: center; }
  .languageGrid p { max-width: 650px; }
  .regionPanel { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
  .regionPanel div { display: grid; grid-template-columns: 150px 1fr; gap: 24px; padding: 24px 26px; border-bottom: 1px solid var(--line); }
  .regionPanel div:last-child { border-bottom: 0; }
  .regionPanel span { font-size: 16px; font-weight: 600; color: var(--ink); }
  .regionPanel p { margin: 0; }

  .faqSection { background: var(--soft); }
  .faqShell { display: grid; grid-template-columns: 330px minmax(0, 1fr); gap: 70px; align-items: start; }
  .faqHeading { position: sticky; top: 24px; }
  .faqHeading p { margin: 18px 0 0; }
  .faqList { border-top: 1px solid #D9DEE6; }
  .faqList details { border-bottom: 1px solid #D9DEE6; }
  .faqList summary { min-height: 68px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 28px; cursor: pointer; list-style: none; color: var(--ink); font-size: 18px; font-weight: 600; line-height: 1.4; }
  .faqList summary::-webkit-details-marker { display: none; }
  .plus { color: var(--magenta); font-size: 26px; font-weight: 400; transition: transform .2s ease; }
  .faqList details[open] .plus { transform: rotate(45deg); }
  .faqAnswer { padding: 0 44px 24px 0; max-width: 840px; font-size: 16px; line-height: 1.7; color: var(--body); }

  .finalCta { background: var(--burgundy); color: #FFFFFF; padding: 88px 0; }
  .finalCta h2 { color: #FFFFFF; max-width: 700px; }
  .finalCta p { color: #F4DCE6; max-width: 820px; }
  .finalCtaInner { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 52px; align-items: center; }
  .finalActions { display: flex; flex-direction: column; gap: 12px; min-width: 315px; }
  .finalCta .btnPrimary, .finalCta .btnPrimary:link, .finalCta .btnPrimary:visited, .finalCta .btnPrimary:hover, .finalCta .btnPrimary:active, .finalCta .btnPrimary:focus { background: var(--magenta); border-color: var(--magenta); color: #FFFFFF !important; }
  .finalCta .btnSecondary { color: #FFFFFF !important; background: transparent; border-color: rgba(255,255,255,.5); }
  .finalCta .btnSecondary:hover { background: rgba(255,255,255,.08); border-color: #FFFFFF; }

  @media (max-width: 1340px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .heroGrid { grid-template-columns: minmax(0, 1fr) minmax(420px, .9fr); gap: 38px; }
  }

  @media (max-width: 1020px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .page h1 { font-size: 42px; }
    .page h2 { font-size: 32px; }
    .page h3 { font-size: 22px; }
    .section { padding: 84px 0; }
    .hero { padding: 88px 0 80px; }
    .heroGrid, .splitEditorial, .digitalGrid, .terminologyGrid, .changeGrid, .securityGrid, .enterpriseGrid, .languageGrid, .faqShell { grid-template-columns: 1fr; }
    .heroGrid { gap: 34px; }
    .heroCopy { text-align: center; }
    .heroCopy h1, .heroLead, .heroSupport { margin-left: auto; margin-right: auto; }
    .heroLead, .heroSupport { text-align: left; }
    .heroActions, .heroFlow { justify-content: center; }
    .heroArt { max-width: 660px; margin: 0 auto; }
    .proofGrid { grid-template-columns: repeat(2, 1fr); }
    .proofItem { border-bottom: 1px solid var(--line); }
    .proofItem:nth-child(2) { border-right: 0; }
    .proofItem:nth-child(3), .proofItem:nth-child(4) { border-bottom: 0; }
    .proofItem:first-child, .proofItem:nth-child(3) { padding-left: 0; }
    .proofItem:nth-child(2), .proofItem:nth-child(4) { padding-right: 0; }
    .sectionHeadCenter { text-align: center; }
    .sectionHeadLeft { text-align: left; }
    .splitEditorial, .digitalGrid, .terminologyGrid, .changeGrid, .securityGrid, .enterpriseGrid, .languageGrid { gap: 48px; }
    .lifeRow { grid-template-columns: 60px minmax(0, .9fr) minmax(0, 1.1fr); gap: 22px; }
    .connectedGrid { grid-template-columns: repeat(2, 1fr); }
    .contentMatrix { grid-template-columns: repeat(2, 1fr); }
    .qualityLayout { grid-template-columns: 1fr; }
    .riskRow { grid-template-columns: 170px 1fr; }
    .riskRow .miniList { grid-column: 2; }
    .riskBlank { display: none; }
    .workflowTimeline { grid-template-columns: repeat(2, 1fr); }
    .fileGrid { grid-template-columns: repeat(2, 1fr); }
    .whyGrid { grid-template-columns: repeat(2, 1fr); }
    .faqHeading { position: static; max-width: 760px; }
  }

  @media (max-width: 768px) {
    .page h1 { font-size: 42px; }
    .page h2 { font-size: 32px; }
    .page h3 { font-size: 22px; }
    .section { padding: 72px 0; }
    .hero { padding: 76px 0 70px; }
    .sectionHeadCenter { text-align: center; }
    .sectionHeadCenter .sectionIntro { margin-left: auto; margin-right: auto; }
    .sectionHeadLeft { text-align: left; }
    .stickyHead, .digitalIntro, .terminologyGrid > div:first-child, .changeIntro, .enterpriseGrid > div:first-child, .languageGrid > div:first-child { text-align: left; }
    .stickyHead > .eyebrow, .stickyHead > h2,
    .digitalIntro > h2,
    .terminologyGrid > div:first-child > .eyebrow, .terminologyGrid > div:first-child > h2,
    .changeIntro > .eyebrow, .changeIntro > h2,
    .enterpriseGrid > div:first-child > .eyebrow, .enterpriseGrid > div:first-child > h2,
    .languageGrid > div:first-child > .eyebrow, .languageGrid > div:first-child > h2 { text-align: center; margin-left: auto; margin-right: auto; }
    .stickyHead .calloutSentence, .changeIntro .calloutSentence { text-align: left; }
    .intentRows, .threadPanel, .governancePanels, .changeRows, .enterpriseList { text-align: left; }
    .lifeRow { grid-template-columns: 52px 1fr; }
    .lifeRow .miniList { grid-column: 2; margin-top: 6px; }
    .disciplineGrid { grid-template-columns: 1fr; }
    .connectedGrid { grid-template-columns: 1fr; }
    .darkIntro { text-align: left; margin-left: 0; margin-right: 0; }
    .contentMatrix { grid-template-columns: 1fr; }
    .industryRow { grid-template-columns: 1fr; gap: 10px; align-items: start; }
    .industryRow .textLink { justify-content: flex-start; text-align: left; max-width: none; }
    .qualityMatrix { grid-template-columns: 1fr; }
    .qualityMatrix article:last-child { grid-column: auto; }
    .riskRow { grid-template-columns: 1fr; gap: 12px; }
    .riskRow .miniList { grid-column: auto; }
    .workflowTimeline { grid-template-columns: 1fr; }
    .workflowStep { min-height: 0; display: grid; grid-template-columns: 46px 1fr; gap: 12px; }
    .workflowStep h3 { margin-top: 0; }
    .fileGrid { grid-template-columns: 1fr; }
    .cadNotice { grid-template-columns: 1fr; }
    .securityGrid > div:first-child { text-align: left; }
    .securityGrid > div:first-child > h2 { text-align: center; margin-left: auto; margin-right: auto; }
    .securityMatrix { grid-template-columns: 1fr; text-align: left; }
    .securityMatrix article:last-child { grid-column: auto; }
    .whyGrid { grid-template-columns: 1fr; }
    .regionPanel div { grid-template-columns: 1fr; gap: 8px; }
    .faqHeading { text-align: center; margin: 0 auto; }
    .faqHeading h2, .faqHeading p { margin-left: auto; margin-right: auto; }
    .faqList { text-align: left; }
    .finalCtaInner { grid-template-columns: 1fr; text-align: center; }
    .finalCta h2, .finalCta p { margin-left: auto; margin-right: auto; }
    .finalActions { max-width: 420px; width: 100%; margin: 0 auto; }
  }

  @media (max-width: 600px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .page h1 { font-size: 38px; line-height: 1.08; }
    .page h2 { font-size: 30px; line-height: 1.14; }
    .page h3 { font-size: 20px; }
    .page p, .page li { font-size: 16px; }
    .heroLead, .bodyLarge, .sectionIntro { font-size: 18px !important; }
    .section { padding: 66px 0; }
    .hero { padding: 68px 0 64px; }
    .heroActions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .heroActions .btn { width: 100%; }
    .textLink { padding-top: 11px; padding-bottom: 11px; }
    .heroFlow { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 16px; max-width: 420px; width: 100%; margin-left: auto; margin-right: auto; }
    .heroFlow i { display: none; }
    .heroFlow span { display: flex; align-items: center; justify-content: center; min-height: 42px; padding: 8px 10px; border: 1px solid #D9DEE6; border-radius: 999px; background: #FFFFFF; text-align: center; }
    .heroArt { margin-top: 4px; }
    .proofGrid { grid-template-columns: 1fr; }
    .proofItem, .proofItem:first-child, .proofItem:nth-child(2), .proofItem:nth-child(3), .proofItem:nth-child(4) { padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .proofItem:last-child { border-bottom: 0; }
    .miniList { grid-template-columns: 1fr; }
    .lifeRow { grid-template-columns: 42px 1fr; gap: 14px; padding: 28px 0; }
    .lifeRow .miniList { grid-column: 1 / -1; margin-left: 0; margin-top: 10px; }
    .connectedFlow { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; width: 100%; max-width: 520px; }
    .connectedFlow i { display: none; }
    .connectedFlow span { display: flex; align-items: center; justify-content: center; min-height: 44px; font-size: 16px; padding: 9px 11px; text-align: center; }
    .connectedFlow span:last-of-type { grid-column: 1 / -1; width: min(100%, 250px); justify-self: center; }
    .threadPanel { padding-left: 28px; }
    .threadItem .threadDot { left: -28px; }
    .contentFamily, .disciplineItem { padding: 26px 22px; }
    .termFlow, .revisionTrack { flex-direction: column; align-items: stretch; justify-content: flex-start; width: 100%; max-width: 420px; }
    .termFlow span, .revisionTrack span { width: 100%; text-align: center; }
    .termFlow i, .revisionTrack i { align-self: center; transform: rotate(90deg); line-height: 1; }
    .qualityStatement { padding: 26px 22px; }
    .qualityMatrix article, .securityMatrix article { padding: 24px 22px; }
    .workflowSummary { display: none; }
    .cadNotice { padding: 22px; }
    .whyGrid article { padding: 22px 0; }
    .closingLine, .centerNote { text-align: left; margin-left: 0; margin-right: 0; }
    .faqList summary { font-size: 17px; min-height: 64px; padding: 18px 0; }
    .faqAnswer { padding-right: 0; }
    .finalCta { padding: 72px 0; }
    .finalActions { min-width: 0; }
    .finalActions .btn { width: 100%; }
  }

  @media (max-width: 340px) {
    .heroFlow { gap: 5px; }
    .termFlow span, .revisionTrack span { font-size: 16px; }
  }
`;
