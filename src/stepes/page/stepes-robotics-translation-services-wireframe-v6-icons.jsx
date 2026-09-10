import React from "react";

const links = {
  quote: "https://www.stepes.com/online-translation-services/",
  contact: "https://www.stepes.com/contact-sales/",
  physicalAi: "https://www.stepes.com/physical-ai-translation-services/",
  industrialAutomation: "https://www.stepes.com/industrial-automation-translation/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  aiMl: "https://www.stepes.com/ai-machine-learning-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  medicalDevice: "https://www.stepes.com/medical-device-translation-services/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  railroad: "https://www.stepes.com/railroad-translation-services/",
  transportation: "https://www.stepes.com/transportation-translation-services/",
  aviation: "https://www.stepes.com/aviation-translation-services/",
  constructionInfrastructure: "https://www.stepes.com/construction-infrastructure-translation-services/",
  api: "https://www.stepes.com/developers/software-localization-api/",
};

const systems = [
  {
    title: "Industrial Robots & Robotic Cells",
    text: "Translation for articulated robots, welding, assembly, machine tending, palletizing, inspection, and integrated robotic cells across installation, operation, safety, maintenance, and service content.",
  },
  {
    title: "Collaborative Robots",
    text: "Localization for cobot interfaces, setup instructions, operator guidance, safety-related information, and training where people and robots share connected work environments.",
  },
  {
    title: "AMRs & Logistics Robotics",
    text: "Multilingual support for autonomous mobile robots, AGVs, warehouse robots, fulfillment systems, fleet software, diagnostics, and field-service documentation.",
  },
  {
    title: "Humanoid & General-Purpose Robots",
    text: "Forward-looking localization for humanoid platforms, multimodal interaction, natural-language commands, training, support, software, safety information, and product documentation.",
  },
  {
    title: "Service & Field Robotics",
    text: "Translation for robots used in inspection, facilities, infrastructure, agriculture, construction, cleaning, hospitality, and other professional service environments.",
  },
  {
    title: "Medical & Healthcare Robotics",
    text: "Specialized language support for surgical robotics, rehabilitation systems, assistive robots, hospital automation, IFUs, interfaces, labeling, training, and service materials.",
    link: { label: "Medical Device Translation Services", href: links.medicalDevice },
  },
];

const contentTypes = [
  {
    title: "Engineering & Technical Documentation",
    items: ["Specifications", "Integration guides", "Installation instructions", "Commissioning docs", "Programming guides", "Calibration procedures", "Maintenance manuals", "Troubleshooting"],
  },
  {
    title: "User, Operator & Safety Content",
    items: ["Operating manuals", "Quick-start guides", "Setup instructions", "Safety instructions", "Warnings and cautions", "Teach-pendant instructions", "Emergency procedures", "Field instructions"],
  },
  {
    title: "Robotics Software & Digital Experiences",
    items: ["HMI strings", "Controller interfaces", "Configuration menus", "Commands and modes", "Alerts and alarms", "Diagnostics", "Fleet dashboards", "Release notes"],
  },
  {
    title: "Training, Support & Commercial Content",
    items: ["Operator training", "Technician training", "eLearning", "Training videos", "Knowledge bases", "Product websites", "Sales enablement", "Distributor materials"],
  },
];

const lifecycle = [
  ["Design & Development", "Engineering terminology, specifications, source strings, early manuals, and multilingual readiness."],
  ["Integration & Validation", "System documentation, installation instructions, localized interfaces, and validation materials."],
  ["Market Launch", "User manuals, product software, safety information, training, websites, and launch content."],
  ["Deployment", "Commissioning, operator guidance, distributor materials, integrator instructions, and field documentation."],
  ["Service & Support", "Maintenance procedures, diagnostics, service bulletins, technician training, and support knowledge."],
  ["Product & Software Updates", "Firmware, controller updates, new UI strings, document revisions, safety changes, and new variants."],
];

const workflowTiers = [
  {
    title: "Expert-Led Translation",
    eyebrow: "HIGH-RISK CONTENT",
    text: "For safety-sensitive, regulated, novel, or highly visible robotics content requiring specialized linguistic control and independent review.",
    flow: "Specialized Translator → Independent Review → QA → Customer Approval",
  },
  {
    title: "AI + Expert Review",
    eyebrow: "TECHNICAL SCALE",
    text: "For recurring product content where translation memory, approved AI technology, and professional post-editing can improve speed while preserving control.",
    flow: "Translation Memory + Approved AI → Technical Post-Editing → QA",
  },
  {
    title: "High-Volume Operational Translation",
    eyebrow: "LOWER-RISK CONTENT",
    text: "For internal, support, or rapidly changing content where multilingual access matters and human validation can be matched to business requirements.",
    flow: "Controlled AI Workflow → Automated Checks → Targeted Human Review",
  },
];

const related = [
  ["Physical AI Translation Services", "Embodied intelligence, multimodal interaction, autonomous behavior, AI data, and evaluation for intelligent machines.", links.physicalAi],
  ["Industrial Automation Translation Services", "PLC, HMI, SCADA, industrial controls, IIoT, and connected factory automation language support.", links.industrialAutomation],
  ["Manufacturing Translation Services", "Broader production, supplier, quality, training, safety, engineering, and service content across global factories.", links.manufacturing],
  ["AI & Machine Learning Translation Services", "Language support for AI products, multilingual data, model evaluation, AI output review, and ML content.", links.aiMl],
  ["Software Localization Services", "Software resources, embedded interfaces, dashboards, applications, help systems, and continuous release localization.", links.software],
  ["Technical Translation Services", "Manuals, specifications, SOPs, safety documentation, software documentation, and engineering content.", links.technical],
];

const adjacent = [
  ["Rail Translation Services", "Language support for signaling, rolling stock, track systems, rail operations, maintenance, safety, and technical documentation.", links.railroad],
  ["Transportation Translation Services", "Translation for mobility, logistics, fleet, transportation technology, operations, and related technical content.", links.transportation],
  ["Aerospace & Aviation Translation Services", "Specialized translation for aerospace systems, aircraft documentation, airports, aviation operations, and safety content.", links.aviation],
  ["Construction & Infrastructure Translation Services", "Technical translation for construction systems, infrastructure programs, field operations, safety, and engineering documentation.", links.constructionInfrastructure],
];

const faqs = [
  ["What are robotics translation services?", "Robotics translation services cover the translation and localization of software, technical documentation, safety content, training, service information, and product communications used to develop, deploy, operate, and support robotic systems internationally."],
  ["What types of robots can Stepes support?", "Stepes supports industrial robots, robotic cells, collaborative robots, autonomous mobile robots, AGVs, warehouse robots, humanoid robots, service and field robots, healthcare robotics, and AI-enabled autonomous systems."],
  ["Can Stepes localize robotics software and HMIs?", "Yes. Stepes localizes robotics HMIs, teach pendants, controller interfaces, configuration screens, dashboards, fleet-management platforms, embedded interfaces, mobile applications, alerts, alarms, diagnostics, help content, and release notes."],
  ["Can Stepes localize ROS and ROS 2 content?", "Stepes can translate language-bearing resources used in ROS or ROS 2 applications, including user-facing strings, software messages, documentation, help content, interfaces, and related technical materials. Stepes provides translation and localization services, not robotics software development or system integration."],
  ["How does Stepes maintain terminology consistency between software and documentation?", "Stepes uses multilingual terminology, translation memory, customer-approved language assets, and defined review processes to keep product terms consistent across interfaces, manuals, warning messages, training, service content, and future releases."],
  ["How does Stepes handle safety-sensitive robotics translation?", "Stepes can configure expert-led workflows for safety-sensitive robotics content using specialized translators, independent review, terminology control, automated QA, and customer approval. Stepes translates content used to support customer safety and market-access activities but does not determine or guarantee product compliance."],
  ["Does Stepes use AI for robotics translation?", "Stepes supports professional human translation and secure AI-enabled workflows. The method is matched to content risk, audience, confidentiality requirements, customer policy, quality expectations, schedule, and intended use."],
  ["Can Stepes support continuous robotics software and documentation releases?", "Yes. Stepes can establish repeatable localization workflows for firmware updates, controller changes, new UI strings, manual revisions, service bulletins, training updates, knowledge bases, and new product variants."],
  ["Can Stepes translate robotics training videos and eLearning?", "Yes. Stepes supports training courses, eLearning, on-screen text, subtitles, captions, scripts, voiceover, technician materials, operator training, assessments, and related job aids."],
];

function Arrow() {
  return <span aria-hidden="true" className="rf-arrow">→</span>;
}

function Icon({ type = "industrial", className = "" }) {
  const icons = {
    industrial: (
      <>
        <path d="M4.5 19.5h15M7.5 19.5v-2.8h3.2M10.7 16.7l1.8-5.1 3.8 1.5 1.8-4.4" />
        <circle cx="12.5" cy="11.6" r="1.15" />
        <circle cx="18.4" cy="7.8" r="1.15" />
        <path d="M19.2 6.9l1.7-1.7M6.3 16.7h4.4" />
      </>
    ),
    cobot: (
      <>
        <path d="M4.5 19.5h15M7.2 19.5v-2.7h3M10.2 16.8l2-4.8 3.4 1.4 1.4-3.2" />
        <circle cx="12.2" cy="12" r="1.05" />
        <circle cx="17.2" cy="9.7" r="1.05" />
        <path d="M18.3 8.8c1.7-1 2.6-2.2 2.7-3.7M4.8 8.3c1.1-1.4 2.6-2.3 4.2-2.8M5.8 5.4 4.6 8.3l3 .2" />
      </>
    ),
    mobile: (
      <>
        <rect x="4.5" y="8.2" width="15" height="8.2" rx="2.1" />
        <path d="M7.4 8.2V6.4h9.2v1.8M8 16.4v1.7M16 16.4v1.7M8.3 11.3h2.2M13.5 11.3h2.2" />
        <circle cx="8" cy="19" r="1.2" />
        <circle cx="16" cy="19" r="1.2" />
      </>
    ),
    humanoid: (
      <>
        <circle cx="12" cy="5.8" r="2.1" />
        <path d="M8.2 10.1c1-1 2.3-1.5 3.8-1.5s2.8.5 3.8 1.5M9 10.7v4.2l-2.3 4M15 10.7v4.2l2.3 4M9 13.2H6.7M15 13.2h2.3M10 14.9v4.3M14 14.9v4.3" />
      </>
    ),
    field: (
      <>
        <path d="M5 17.5h14M6.3 17.5l1.1-5.2h9.2l1.1 5.2M9.2 12.3V9.4h5.6v2.9M10.2 9.4V7.1h3.6v2.3" />
        <circle cx="9" cy="19.2" r="1.1" />
        <circle cx="15" cy="19.2" r="1.1" />
        <path d="M17 7.2l1.6-1.5M18.8 8.8l2-.3" />
      </>
    ),
    medical: (
      <>
        <path d="M12 4.2 18 6.8v4.6c0 4-2.5 6.8-6 8-3.5-1.2-6-4-6-8V6.8z" />
        <path d="M12 8v6M9 11h6" />
      </>
    ),
    interface: (
      <>
        <rect x="4" y="5.3" width="16" height="12.4" rx="2" />
        <path d="M7 9h5.5M7 12.2h3.7M14.8 9.1h2.2M14.8 12.2h2.2M9.2 20h5.6" />
      </>
    ),
    safety: (
      <>
        <path d="M12 4 19 7v5c0 4.4-2.9 7.3-7 8-4.1-.7-7-3.6-7-8V7z" />
        <path d="m8.8 12.1 2.1 2.1 4.4-4.5" />
      </>
    ),
    language: (
      <>
        <path d="M4.2 6h9.7v6.8H8.2l-4 3.5zM14.2 9.4h5.6v7.2h-2.7l-3.1 2.3v-4" />
        <path d="M7.2 9.4h3.6M16.2 12.4h1.7" />
      </>
    ),
    release: <path d="M5.1 11.3A7.1 7.1 0 0 1 17 6.5l2 2M19 5v3.6h-3.6M18.9 12.7A7.1 7.1 0 0 1 7 17.5l-2-2M5 19v-3.6h3.6" />,
    file: (
      <>
        <path d="M6.5 3.8h7.2l3.8 3.9v12.5h-11zM13.7 3.8v4h3.8" />
        <path d="M9 12h6M9 15.2h6M9 18.4h4.2" />
      </>
    ),
    structured: (
      <>
        <path d="M6.5 3.8h7.2l3.8 3.9v12.5h-11zM13.7 3.8v4h3.8" />
        <path d="M9 11.2h1.4M12.4 11.2H15M9 14.7h1.4M12.4 14.7H15M9 18.2h6" />
      </>
    ),
    software: (
      <>
        <path d="M6.5 3.8h7.2l3.8 3.9v12.5h-11zM13.7 3.8v4h3.8" />
        <path d="m10.2 11.5-2 2 2 2M13.8 11.5l2 2-2 2M12.8 10.3l-1.6 6.4" />
      </>
    ),
    drawing: (
      <>
        <rect x="4.3" y="4.5" width="15.4" height="15" rx="1.8" />
        <path d="M7.2 15.8 10.6 12l2.4 2.4 2.2-2.2 1.6 1.6M7.5 8.2h4.8M7.5 10.4h2.8" />
      </>
    ),
    media: (
      <>
        <rect x="4.2" y="5" width="15.6" height="14" rx="2.2" />
        <path d="m10 9 5 3-5 3zM7.3 17h9.4" />
      </>
    ),
    technical: (
      <>
        <path d="M5 18.8h14M7.2 18.8v-9h9.6v9M9.3 9.8V6.2h5.4v3.6" />
        <path d="M10.1 13h3.8M10.1 15.5h3.8" />
      </>
    ),
    humanAi: (
      <>
        <circle cx="8.4" cy="8.2" r="2.4" />
        <path d="M4.9 17.8c.5-3 1.8-4.6 3.5-4.6s3 1.6 3.5 4.6" />
        <path d="M16.8 5.1v2M16.8 10.9v2M13.2 9h2M18.6 9h2M14.3 6.5l1.4 1.4M17.9 10.1l1.4 1.4M19.3 6.5l-1.4 1.4M15.7 10.1l-1.4 1.4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.2 2.2 3.2 4.8 3.2 8s-1 5.8-3.2 8M12 4C9.8 6.2 8.8 8.8 8.8 12s1 5.8 3.2 8" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" className={`rf-icon ${className}`.trim()} aria-hidden="true" focusable="false">
      {icons[type] || icons.industrial}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`rf-heading rf-heading-${align}`}> 
      {eyebrow && <p className={`rf-eyebrow ${dark ? "rf-eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="rf-section-intro">{intro}</p>}
    </div>
  );
}

function TextLink({ href, children }) {
  return (
    <a className="rf-text-link" href={href}>
      {children} <Arrow />
    </a>
  );
}

export default function RoboticsTranslationServicesWireframe() {
  return (
    <main className="robotics-wireframe">
      <style>{styles}</style>

      <section className="rf-section rf-hero">
        <div className="rf-container rf-hero-grid">
          <div className="rf-hero-copy">
            <p className="rf-eyebrow">ROBOTICS & AUTONOMOUS SYSTEMS</p>
            <h1>Robotics Translation Services for Global Deployment</h1>
            <p className="rf-hero-lede">
              Bring robotic products, software, documentation, and user experiences to global markets with specialized robotics translation and localization services.
            </p>
            <p className="rf-hero-support">
              Stepes helps manufacturers and technology companies translate technical documentation, software interfaces, safety content, training, service information, and product communications for industrial robots, cobots, AMRs, humanoids, medical robots, and intelligent autonomous systems.
            </p>
            <div className="rf-actions">
              <a className="rf-btn rf-btn-primary" href={links.quote}>Get a Translation Quote</a>
              <a className="rf-btn rf-btn-secondary" href={links.contact}>Discuss Your Robotics Project</a>
            </div>
          </div>

          <div className="rf-hero-art" aria-label="Robotics localization system illustration">
            <div className="rf-art-panel rf-art-panel-main">
              <div className="rf-robot-card">
                <div className="rf-robot-arm">
                  <span className="rf-joint rf-j1" />
                  <span className="rf-arm rf-arm1" />
                  <span className="rf-joint rf-j2" />
                  <span className="rf-arm rf-arm2" />
                  <span className="rf-joint rf-j3" />
                  <span className="rf-gripper" />
                </div>
                <div className="rf-base" />
              </div>
              <div className="rf-hmi-card">
                <div className="rf-hmi-top"><span /> <span /> <span /></div>
                <p>HMI / Controller</p>
                <div className="rf-hmi-row"><strong>Mode</strong><span>Auto</span></div>
                <div className="rf-hmi-row"><strong>Alert</strong><span>Clear zone</span></div>
                <div className="rf-hmi-row"><strong>Status</strong><span>Ready</span></div>
              </div>
              <div className="rf-doc-card">
                <span>Safety Manual</span>
                <i /> <i /> <i className="short" />
              </div>
              <div className="rf-lang-strip">
                <span>EN</span><span>DE</span><span>JA</span><span>ES</span><span>FR</span>
              </div>
            </div>
            <div className="rf-art-caption">Machine + software + documentation, localized together</div>
          </div>
        </div>
      </section>

      <section className="rf-trust">
        <div className="rf-container rf-trust-grid">
          <div><strong>100+ Languages</strong><span>Global robotics launch support</span></div>
          <div><strong>Technical Translation Expertise</strong><span>Engineering, software, safety, and training</span></div>
          <div><strong>ISO-Certified Quality Processes</strong><span>Structured review and QA workflows</span></div>
          <div><strong>Secure AI + Human Workflows</strong><span>Technology matched to content risk</span></div>
        </div>
      </section>

      <section className="rf-section rf-system" id="system">
        <div className="rf-container rf-two-col">
          <div className="rf-sticky-copy">
            <p className="rf-eyebrow">CONNECTED ROBOTICS CONTENT</p>
            <h2>Language Is Part of the Robotics System</h2>
            <p>
              A modern robot communicates through teach pendants, controller screens, fleet dashboards, mobile applications, warning labels, manuals, training, service bulletins, and diagnostic interfaces.
            </p>
            <p>
              Stepes connects these language touchpoints so the terminology users see in the interface matches the language in the safety instructions, manuals, training, and support content.
            </p>
          </div>
          <div className="rf-system-map">
            <div className="rf-map-center">
              <Icon type="industrial" />
              <strong>Robotic System</strong>
              <span>Hardware, control, software, and documentation</span>
            </div>
            <div className="rf-map-node node-a"><Icon type="interface" /><strong>Software & HMI</strong><span>Commands, modes, alerts, diagnostics</span></div>
            <div className="rf-map-node node-b"><Icon type="safety" /><strong>Manuals & Safety</strong><span>Operation, warnings, maintenance</span></div>
            <div className="rf-map-node node-c"><Icon type="language" /><strong>Training & Service</strong><span>Operator, technician, support content</span></div>
            <div className="rf-map-base">Controlled Terminology + Translation Memory</div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-light" id="lifecycle">
        <div className="rf-container">
          <SectionHeading
            title="Localization Across the Robotics Lifecycle"
            intro="Robotics localization begins before market launch and continues through deployment, support, software updates, and new product generations."
          />
          <div className="rf-lifecycle">
            {lifecycle.map(([title, text], index) => (
              <div className="rf-life-row" key={title}>
                <span className="rf-step">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section" id="systems">
        <div className="rf-container">
          <SectionHeading
            eyebrow="ROBOTICS COVERAGE"
            title="Translation Expertise Across Modern Robotics"
            intro="Stepes supports the specialized language requirements of robotic systems across factories, warehouses, healthcare settings, field environments, and emerging intelligent-machine platforms."
          />
          <div className="rf-system-grid">
            {systems.map((item) => (
              <article className="rf-calm-card" key={item.title}>
                <Icon type={
                  item.title.startsWith("Industrial") ? "industrial" :
                  item.title.startsWith("Collaborative") ? "cobot" :
                  item.title.startsWith("AMRs") ? "mobile" :
                  item.title.startsWith("Humanoid") ? "humanoid" :
                  item.title.startsWith("Service") ? "field" :
                  "medical"
                } />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link && <TextLink href={item.link.href}>{item.link.label}</TextLink>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section rf-content-types" id="content-types">
        <div className="rf-container">
          <SectionHeading
            eyebrow="CONTENT SCOPE"
            title="Translate Every Content Type Behind a Global Robotics Product"
            intro="A robotic product may create thousands of language assets across engineering, software, technical publications, training, support, and commercial teams."
          />
          <div className="rf-content-grid">
            {contentTypes.map((group) => (
              <article className="rf-list-panel" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section rf-hmi" id="hmi">
        <div className="rf-container rf-split-panel">
          <div className="rf-panel-copy">
            <p className="rf-eyebrow">SOFTWARE & HMI LOCALIZATION</p>
            <h2>Localize the Human-Machine Interface</h2>
            <p>
              Robotics software localization requires more than translating strings outside the product. Interface language has to communicate clearly within the technical and visual constraints of the system.
            </p>
            <p>
              Stepes localizes robotics HMIs, teach pendants, controller environments, embedded software, dashboards, applications, and connected product experiences with the context needed to make multilingual interfaces work.
            </p>
            <div className="rf-link-stack">
              <TextLink href={links.software}>Software Localization Services</TextLink>
              <TextLink href={links.api}>Software Localization API</TextLink>
            </div>
          </div>
          <div className="rf-interface-mockup" aria-label="Robotics HMI localization mockup">
            <div className="rf-mock-top"><span /> <span /> <span /><strong>Controller Review</strong></div>
            <div className="rf-mock-body">
              <div className="rf-string-list">
                <div className="selected"><b>Alert message</b><span>Clear robot work zone before auto mode.</span></div>
                <div><b>Command</b><span>Return to home position</span></div>
                <div><b>Status</b><span>Calibration required</span></div>
              </div>
              <div className="rf-preview">
                <span className="rf-preview-label">DE-DE preview</span>
                <h4>Arbeitsbereich freigeben</h4>
                <p>Vor dem Automatikbetrieb den Arbeitsbereich des Roboters freigeben.</p>
                <div className="rf-preview-actions"><span>Bestätigen</span><span>Abbrechen</span></div>
              </div>
            </div>
            <div className="rf-qa-line"><span>Variables protected</span><span>Terminology matched</span><span>Text fits</span></div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-terminology" id="terminology">
        <div className="rf-container rf-two-col reverse-mobile">
          <div className="rf-term-diagram">
            <div className="rf-term-core">One Robotics Vocabulary</div>
            {[
              "HMI",
              "Manuals",
              "Safety",
              "Training",
              "Support",
              "Release Notes",
            ].map((label) => <span key={label}>{label}</span>)}
          </div>
          <div className="rf-sticky-copy">
            <p className="rf-eyebrow">TERMINOLOGY CONTROL</p>
            <h2>One Robotics Vocabulary Across Every Interface</h2>
            <p>
              Robotic systems contain specialized concepts for motion, control, positioning, payloads, end effectors, operating modes, calibration, safety states, diagnostics, maintenance, components, and application-specific functions.
            </p>
            <p>
              Stepes builds reusable multilingual language assets that keep product terms consistent across software, documentation, warning messages, training, knowledge bases, and future releases.
            </p>
            <div className="rf-check-grid">
              <span>Terminology databases</span>
              <span>Translation memory</span>
              <span>Style guidance</span>
              <span>Customer review feedback</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-dark" id="command-to-motion">
        <div className="rf-container">
          <SectionHeading
            eyebrow="HUMAN-MACHINE CLARITY"
            title="From Command to Motion, Language Has to Be Right"
            intro="Robotics creates an unusually direct relationship between language and physical action. An operator reads an instruction, selects a command, responds to an alert, and the robot performs an action."
            dark
          />
          <div className="rf-command-flow">
            {[
              ["Operator or User", "Intent, instruction, decision"],
              ["Command · Instruction · Warning", "Interface, manual, training, alert"],
              ["Robot or Autonomous System", "Controller, sensors, software"],
              ["Physical Action", "Motion, task, process, response"],
              ["Status · Alert · Diagnostic", "Feedback, service, support"],
            ].map(([title, text], index) => (
              <div className="rf-command-step" key={title}>
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section rf-light" id="safety">
        <div className="rf-container rf-safety-grid">
          <div className="rf-safety-copy">
            <p className="rf-eyebrow">SAFETY-SENSITIVE CONTENT</p>
            <h2>Translate Robotics Safety Content With the Precision It Requires</h2>
            <p>
              Robotics safety information may guide people working around fast-moving machinery, collaborative applications, automated cells, mobile robots, or increasingly autonomous systems.
            </p>
            <p>
              Stepes translates multilingual information used to support robot installation, operation, maintenance, safety and cybersecurity communication, risk documentation, conformity activities, and market deployment. Manufacturers remain responsible for determining product compliance and final approval requirements.
            </p>
          </div>
          <div className="rf-standards-panel">
            <h3>Common Content Areas</h3>
            <div className="rf-tag-cloud">
              {['Warnings', 'Cautions', 'Emergency procedures', 'Safeguarding', 'Operating modes', 'Human-robot interaction', 'Maintenance safety', 'Risk-related documentation', 'Conformity materials', 'Cybersecurity documentation'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="rf-standard-note">
              <strong>Relevant frameworks may include</strong>
              <p>ISO 10218-1:2025, ISO 10218-2:2025, ISO/TS 15066, ANSI/A3 R15.06, and applicable machinery and market-access requirements such as Regulation (EU) 2023/1230.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rf-section" id="intelligent-robots">
        <div className="rf-container rf-intel-grid">
          <div>
            <h2>Localization for the New Generation of Intelligent Robots</h2>
            <p>
              Robotics and artificial intelligence are increasingly converging. AI-enabled robots can use sensor data, computer vision, language, analytics, and other inputs to support more adaptive behavior and new forms of human-machine interaction.
            </p>
            <p>
              Stepes supports multilingual content for humanoid robots, autonomous systems, multimodal interfaces, voice-enabled robotics, natural-language interactions, AI-assisted industrial robotics, and connected robotic applications.
            </p>
            <TextLink href={links.physicalAi}>Physical AI Translation Services</TextLink>
          </div>
          <div className="rf-intel-panel">
            <div><strong>Perceive</strong><span>Vision, sensors, context</span></div>
            <div><strong>Understand</strong><span>Commands, language, intent</span></div>
            <div><strong>Act</strong><span>Motion, response, feedback</span></div>
            <div><strong>Explain</strong><span>Alerts, instructions, support</span></div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-light" id="workflow">
        <div className="rf-container">
          <SectionHeading
            eyebrow="AI + HUMAN WORKFLOWS"
            title="Match the Translation Workflow to the Content Risk"
            intro="A safety instruction, software update, marketing page, and internal engineering note do not have identical translation requirements. Stepes configures workflows around content risk, audience, confidentiality, quality expectations, and intended use."
          />
          <div className="rf-tier-grid">
            {workflowTiers.map((tier) => (
              <article className="rf-tier" key={tier.title}>
                <p className="rf-mini-eyebrow">{tier.eyebrow}</p>
                <h3>{tier.title}</h3>
                <p>{tier.text}</p>
                <div className="rf-tier-flow">{tier.flow}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section" id="continuous-localization">
        <div className="rf-container">
          <SectionHeading
            eyebrow="CONTINUOUS LOCALIZATION"
            title="Keep Every Language Synchronized With Every Robot Release"
            intro="Modern robotic products continue to change after launch. Stepes helps teams identify what changed, reuse what is approved, translate new content efficiently, and maintain consistent language across releases."
          />
          <div className="rf-release-flow">
            {['Engineering Change', 'Changed Content Detection', 'Terminology & TM', 'Translation & Localization', 'Technical Review', 'In-Context QA', 'Multilingual Release'].map((step, index) => (
              <div key={step} className="rf-release-step">
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="rf-benefit-row">
            <div><strong>Reuse Approved Content</strong><p>Carry forward approved translations and avoid unnecessary retranslation across product revisions.</p></div>
            <div><strong>Focus Review Where It Matters</strong><p>Prioritize new and modified content so engineers and reviewers spend time efficiently.</p></div>
            <div><strong>Support Faster Releases</strong><p>Create repeatable localization processes for software updates, manuals, service content, and new languages.</p></div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-file-section rf-dark" id="file-formats">
        <div className="rf-container rf-file-grid">
          <div>
            <p className="rf-eyebrow rf-eyebrow-dark">LOCALIZATION ENGINEERING</p>
            <h2>Technical Translation Without Breaking the Source Content</h2>
            <p>
              Robotics content often arrives in complex technical formats where language is only one part of the file. Stepes combines translation with localization engineering and multilingual DTP so both language and structure are preserved.
            </p>
            <TextLink href={links.fileFormats}>Translation File Format Support</TextLink>
          </div>
          <div className="rf-file-cards">
            {[
              ['structured', 'Structured documentation', 'DITA, XML, HTML, Markdown, and technical publishing exports'],
              ['software', 'Software resources', 'JSON, RESX, strings, CSV, Excel, placeholders, variables, and markup'],
              ['drawing', 'Graphics & drawings', 'Callouts, diagrams, CAD-exported text, schematics, and visuals'],
              ['media', 'Multimedia & training', 'Subtitles, captions, scripts, voiceover, eLearning, and on-screen text'],
            ].map(([icon, title, text]) => (
              <div key={title}><Icon type={icon} className="rf-file-icon" /><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section" id="scale">
        <div className="rf-container rf-scale-grid">
          <div className="rf-sticky-copy">
            <p className="rf-eyebrow">ENTERPRISE SCALE</p>
            <h2>Scale Robotics Localization Across Products, Teams, and Markets</h2>
            <p>
              A robotics localization program may begin with one product and a few languages, then expand across product families, software versions, regional configurations, distributors, factories, service organizations, and global markets.
            </p>
            <p>
              Stepes provides the language operations needed to scale without rebuilding the translation process for every project.
            </p>
          </div>
          <div className="rf-scale-list">
            {[
              ['100+ Languages', 'Support launches, operations, service networks, partners, and workforces across global markets.'],
              ['Centralized Terminology', 'Create one shared multilingual vocabulary across engineering, software, publications, training, and support.'],
              ['Reusable Translation Assets', 'Use translation memory and approved language resources to improve consistency and reduce repeated work.'],
              ['Coordinated Review', 'Bring product owners, engineers, regional teams, and customer reviewers into defined approval workflows.'],
              ['Version-Aware Delivery', 'Support updates across software, documentation, training, and related assets while maintaining continuity.'],
              ['Secure Content Handling', 'Configure access, confidentiality, technology use, review responsibilities, and delivery controls around customer requirements.'],
            ].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="rf-section rf-light" id="program-example">
        <div className="rf-container">
          <SectionHeading
            eyebrow="PROGRAM MODEL"
            title="What a Global Robotics Localization Program Can Look Like"
            intro="Rather than translating each asset independently, Stepes establishes shared terminology and translation memory across the product ecosystem and carries approved language forward as the robot evolves."
          />
          <div className="rf-program-panel">
            <div className="rf-program-stack">
              {['Robotic Platform', 'Controller & HMI', 'User & Safety Manuals', 'Installation & Service Docs', 'Operator & Technician Training', 'Product Website & Support'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="rf-program-core">
              <strong>Central Terminology & Translation Memory</strong>
              <p>Operating modes, warnings, interface labels, component terms, training language, and service terminology remain synchronized.</p>
            </div>
            <div className="rf-program-release">
              <span>Initial Release</span><Arrow /><span>Software Update</span><Arrow /><span>New Variant</span><Arrow /><span>Additional Markets</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rf-section" id="related-expertise">
        <div className="rf-container">
          <SectionHeading
            title="Connected Expertise for Complex Robotics Programs"
            intro="Extend robotics localization into the software, AI, manufacturing, automation, engineering, and regulated-product content surrounding the robotic system."
          />
          <div className="rf-related-grid">
            {related.map(([title, text, href]) => (
              <a className="rf-related-card" href={href} key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
                <em>Explore <Arrow /></em>
              </a>
            ))}
          </div>
          <div className="rf-adjacent-band">
            <div>
              <h3>Industry-Specific Translation Beyond the Robotics System</h3>
              <p>
                When robotics is deployed within rail, transportation, aviation, construction, or infrastructure programs, Stepes can support the surrounding industry-specific technical, operational, safety, and customer content through dedicated translation services.
              </p>
            </div>
            <div className="rf-adjacent-links">
              {adjacent.map(([title, text, href]) => (
                <a href={href} key={title}><strong>{title}</strong><span>{text}</span></a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rf-section rf-light" id="why-stepes">
        <div className="rf-container">
          <SectionHeading
            eyebrow="WHY STEPES"
            title="Built for Complex, Fast-Moving Robotics Programs"
            intro="Robotics companies need more than accurate sentences. They need multilingual content that works across technical systems, users, releases, and markets."
          />
          <div className="rf-why-grid">
            {[
              ['Technical Language Expertise', 'Professional linguists selected for robotics, engineering, software, automation, safety, training, and technical content.'],
              ['One Terminology System', 'Approved language across software, manuals, warning messages, training, service information, and support content.'],
              ['Human + AI Flexibility', 'Professional translation, translation memory, secure AI-enabled workflows, review, and QA matched to content risk.'],
              ['Continuous Localization', 'Recurring release support for software updates, documentation revisions, service bulletins, and product variants.'],
              ['Localization Engineering', 'Protection for resource keys, variables, tags, layouts, graphics, file structures, and technical publishing formats.'],
              ['Enterprise Scale', 'Coordination across product families, departments, international markets, stakeholders, and more than 100 languages.'],
            ].map(([title, text]) => (
              <div className="rf-why-item" key={title}>
                <Icon type={
                  title.startsWith('Technical') ? 'technical' :
                  title.startsWith('One Terminology') ? 'language' :
                  title.startsWith('Human + AI') ? 'humanAi' :
                  title.startsWith('Continuous') ? 'release' :
                  title.startsWith('Localization') ? 'file' :
                  'globe'
                } />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section" id="faqs">
        <div className="rf-container rf-faq-grid">
          <div className="rf-faq-heading">
            <h2>Robotics Translation Services FAQs</h2>
            <p>Find answers about robotics documentation, software localization, terminology, safety-sensitive content, AI workflows, and continuous releases.</p>
          </div>
          <div className="rf-faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section rf-final-cta" id="contact">
        <div className="rf-container">
          <div className="rf-final-box">
            <p className="rf-eyebrow">GLOBAL ROBOTICS LOCALIZATION</p>
            <h2>Ready to Launch Your Robotics Platform Globally?</h2>
            <p>
              From robot interfaces and technical documentation to safety content, training, service information, and continuous product updates, Stepes helps robotics companies create one consistent multilingual experience across products, users, and global markets.
            </p>
            <div className="rf-actions rf-actions-center">
              <a className="rf-btn rf-btn-primary" href={links.quote}>Get a Translation Quote</a>
              <a className="rf-btn rf-btn-secondary" href={links.contact}>Discuss Your Robotics Project</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.robotics-wireframe {
  --rf-magenta: #C11D63;
  --rf-magenta-dark: #9F1D55;
  --rf-burgundy: #7A1542;
  --rf-blush: #FDF2F7;
  --rf-pink-light: #F2A7C6;
  --rf-ink: #211C22;
  --rf-charcoal: #242326;
  --rf-dark: #171719;
  --rf-dark-panel: #222225;
  --rf-dark-raised: #2A292D;
  --rf-body: #514A50;
  --rf-muted: #756D74;
  --rf-line: #E7E1E4;
  --rf-soft: #FAF8F9;
  --rf-white: #FFFFFF;
  color: var(--rf-body);
  background: #ffffff;
  font-family: Inter, "Inter Tight", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
.robotics-wireframe * { box-sizing: border-box; }
.rf-container { max-width: 1280px; margin: 0 auto; padding: 0 56px; }
.rf-section { padding: 96px 0; position: relative; }
.rf-light { background: var(--rf-soft); }
.rf-dark { background: var(--rf-dark); color: #ffffff; }
.rf-dark p:not(.rf-eyebrow):not(.rf-mini-eyebrow) { color: rgba(255,255,255,.78); }
.rf-dark .rf-eyebrow, .rf-dark .rf-mini-eyebrow { color: var(--rf-pink-light); }
h1, h2, h3, h4, p { margin-top: 0; }
h1, h2, h3, h4 { color: var(--rf-ink); font-weight: 600; letter-spacing: -0.02em; }
.rf-dark h2, .rf-dark h3, .rf-dark h4 { color: #ffffff; }
h1 { font-size: 48px; line-height: 1.08; margin-bottom: 22px; max-width: 720px; }
h2 { font-size: 36px; line-height: 1.16; margin-bottom: 20px; }
h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
p { font-size: 17px; line-height: 1.68; color: var(--rf-body); margin-bottom: 18px; }
a { color: inherit; }
.rf-eyebrow, .rf-mini-eyebrow {
  font-size: 11px;
  line-height: 1.25;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;
  color: var(--rf-magenta);
  margin-bottom: 14px;
}
.rf-eyebrow-dark { color: var(--rf-pink-light); }
.rf-heading { max-width: 820px; margin-bottom: 48px; }
.rf-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
.rf-heading-left { text-align: left; }
.rf-section-intro { font-size: 18px; line-height: 1.62; max-width: 800px; margin-left: auto; margin-right: auto; }
.rf-heading-left .rf-section-intro { margin-left: 0; }
.rf-hero { padding: 104px 0 88px; background: radial-gradient(circle at 82% 18%, #FDF2F7 0, #FDF2F7 22%, rgba(253,242,247,0) 42%), linear-gradient(180deg, #ffffff 0%, #FCFAFB 100%); }
.rf-hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, .78fr); gap: 64px; align-items: center; }
.rf-hero-lede { font-size: 21px; line-height: 1.5; color: #342E33; max-width: 680px; margin-bottom: 18px; }
.rf-hero-support { font-size: 17px; line-height: 1.65; max-width: 700px; }
.rf-actions { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin-top: 32px; }
.rf-actions-center { justify-content: center; }
.rf-btn {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
}
.rf-btn-primary,
.rf-btn-primary:link,
.rf-btn-primary:visited,
.rf-btn-primary:hover,
.rf-btn-primary:active,
.rf-btn-primary:focus,
.rf-btn-primary:focus-visible { background: var(--rf-magenta); color: #fff; border: 1px solid var(--rf-magenta); }
.rf-btn-primary:hover { background: var(--rf-magenta-dark); border-color: var(--rf-magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 24px rgba(193,29,99,.18); }
.rf-btn-secondary { color: var(--rf-ink); background: #fff; border: 1px solid #DDD4D9; }
.rf-btn-secondary:hover { border-color: #CBBFC5; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(33,28,34,.08); }
.rf-hero-art { min-width: 0; }
.rf-art-panel { position: relative; min-height: 480px; border-radius: 30px; background: #fff; border: 1px solid rgba(193,29,99,.14); box-shadow: 0 30px 70px rgba(33,28,34,.12); overflow: hidden; }
.rf-art-panel:before { content: ""; position: absolute; inset: -80px -60px auto auto; width: 260px; height: 260px; background: rgba(253,242,247,.9); border-radius: 50%; }
.rf-robot-card { position: absolute; left: 42px; bottom: 58px; width: 230px; height: 260px; border-radius: 28px; background: linear-gradient(180deg, #FCFAFB 0%, #F6F1F4 100%); border: 1px solid #E5DCE1; }
.rf-robot-arm { position: absolute; left: 48px; top: 40px; width: 145px; height: 150px; }
.rf-joint { position: absolute; width: 34px; height: 34px; border-radius: 50%; border: 7px solid var(--rf-magenta); background: #fff; z-index: 3; }
.rf-j1 { left: 0; bottom: 14px; }
.rf-j2 { left: 56px; top: 52px; }
.rf-j3 { right: 5px; top: 13px; width: 26px; height: 26px; border-width: 6px; }
.rf-arm { position: absolute; height: 16px; background: var(--rf-magenta-dark); border-radius: 16px; transform-origin: left center; }
.rf-arm1 { left: 22px; bottom: 31px; width: 72px; transform: rotate(-48deg); }
.rf-arm2 { left: 80px; top: 58px; width: 70px; transform: rotate(-38deg); }
.rf-gripper { position: absolute; right: -6px; top: 0; width: 34px; height: 40px; border-top: 6px solid var(--rf-charcoal); border-left: 6px solid var(--rf-charcoal); border-right: 6px solid var(--rf-charcoal); border-radius: 10px 10px 0 0; transform: rotate(20deg); }
.rf-base { position: absolute; left: 64px; bottom: 38px; width: 100px; height: 28px; border-radius: 20px; background: var(--rf-charcoal); }
.rf-hmi-card { position: absolute; right: 38px; top: 46px; width: 230px; border-radius: 24px; background: var(--rf-dark); color: #fff; padding: 20px; border-top: 4px solid var(--rf-magenta); box-shadow: 0 18px 44px rgba(33,28,34,.20); }
.rf-hmi-top { display: flex; gap: 6px; margin-bottom: 18px; }
.rf-hmi-top span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.6); }
.rf-hmi-card p { color: #fff; font-size: 16px; line-height: 1.4; margin-bottom: 14px; font-weight: 600; }
.rf-hmi-row { display: flex; justify-content: space-between; padding: 10px 0; border-top: 1px solid rgba(255,255,255,.14); font-size: 14px; }
.rf-hmi-row strong { color: rgba(255,255,255,.65); font-weight: 600; }
.rf-doc-card { position: absolute; right: 74px; bottom: 78px; width: 190px; padding: 18px; border-radius: 22px; background: #fff; border: 1px solid var(--rf-line); box-shadow: 0 16px 40px rgba(33,28,34,.10); }
.rf-doc-card span { display: block; color: var(--rf-ink); font-size: 16px; font-weight: 600; margin-bottom: 12px; }
.rf-doc-card i { display: block; height: 8px; background: #DDD5DA; border-radius: 8px; margin-bottom: 9px; }
.rf-doc-card i.short { width: 62%; }
.rf-lang-strip { position: absolute; left: 46px; top: 46px; display: flex; gap: 8px; }
.rf-lang-strip span { min-width: 38px; height: 32px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; background: var(--rf-blush); color: var(--rf-magenta); font-size: 13px; font-weight: 600; }
.rf-art-caption { margin-top: 16px; text-align: center; color: var(--rf-muted); font-size: 16px; }
.rf-trust { background: #fff; border-top: 1px solid var(--rf-line); border-bottom: 1px solid var(--rf-line); }
.rf-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.rf-trust-grid div { padding: 24px; border-left: 1px solid var(--rf-line); }
.rf-trust-grid div:first-child { border-left: 0; }
.rf-trust-grid strong { display: block; color: var(--rf-ink); font-size: 17px; font-weight: 600; margin-bottom: 6px; }
.rf-trust-grid span { display: block; color: var(--rf-muted); font-size: 16px; line-height: 1.45; }
.rf-two-col, .rf-split-panel, .rf-intel-grid, .rf-file-grid, .rf-scale-grid, .rf-faq-grid, .rf-safety-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 64px; align-items: center; }
.rf-sticky-copy h2, .rf-panel-copy h2, .rf-safety-copy h2 { max-width: 620px; }
.rf-sticky-copy p, .rf-panel-copy p, .rf-safety-copy p, .rf-intel-grid p, .rf-file-grid p { max-width: 680px; }
.rf-system-map { position: relative; min-height: 560px; border-radius: 30px; background: linear-gradient(180deg, #FCFAFB, #fff); border: 1px solid var(--rf-line); box-shadow: 0 18px 46px rgba(33,28,34,.06); padding: 34px; }
.rf-map-center { position: absolute; top: 190px; left: 50%; transform: translateX(-50%); width: 220px; min-height: 150px; border-radius: 28px; background: var(--rf-dark); color: #fff; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 22px; }
.rf-map-center .rf-icon { width: 34px; height: 34px; stroke: #fff; margin-bottom: 14px; }
.rf-map-center strong { font-size: 19px; color: #fff; }
.rf-map-center span { font-size: 16px; line-height: 1.45; color: rgba(255,255,255,.72); margin-top: 8px; }
.rf-map-node { position: absolute; width: 230px; border-radius: 24px; border: 1px solid var(--rf-line); background: #fff; padding: 22px; box-shadow: 0 14px 34px rgba(33,28,34,.07); }
.rf-map-node strong { display: block; color: var(--rf-ink); font-size: 18px; font-weight: 600; margin: 10px 0 6px; }
.rf-map-node span { font-size: 16px; line-height: 1.5; color: var(--rf-muted); }
.node-a { top: 50px; left: 42px; }
.node-b { top: 50px; right: 42px; }
.node-c { bottom: 64px; left: 50%; transform: translateX(-50%); }
.rf-map-base { position: absolute; left: 34px; right: 34px; bottom: 28px; height: 44px; border-radius: 999px; background: var(--rf-blush); color: var(--rf-magenta); display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 600; }
.rf-icon { width: 32px; height: 32px; stroke: var(--rf-magenta-dark); stroke-width: 1.6; fill: none; stroke-linecap: round; stroke-linejoin: round; flex: 0 0 auto; shape-rendering: geometricPrecision; }
.rf-icon path, .rf-icon circle, .rf-icon rect, .rf-icon line, .rf-icon polyline { vector-effect: non-scaling-stroke; }
.rf-map-node .rf-icon { width: 30px; height: 30px; }
.rf-lifecycle { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 44px; border-top: 1px solid var(--rf-line); border-bottom: 1px solid var(--rf-line); }
.rf-life-row { display: grid; grid-template-columns: 68px 1fr; gap: 18px; padding: 28px 0; border-top: 1px solid var(--rf-line); }
.rf-life-row:nth-child(-n+2) { border-top: 0; }
.rf-step { color: var(--rf-magenta); font-size: 18px; font-weight: 600; line-height: 1.25; }
.rf-life-row h3 { font-size: 21px; margin-bottom: 8px; }
.rf-life-row p { font-size: 16px; line-height: 1.58; margin-bottom: 0; }
.rf-system-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 52px; border-top: 1px solid var(--rf-line); }
.rf-calm-card { border: 0; border-bottom: 1px solid var(--rf-line); border-radius: 0; background: transparent; padding: 30px 0; box-shadow: none; }
.rf-calm-card .rf-icon { margin-bottom: 18px; }
.rf-calm-card h3 { font-size: 21px; }
.rf-calm-card p { font-size: 16px; line-height: 1.62; margin-bottom: 16px; }
.rf-text-link, .rf-text-link:link, .rf-text-link:visited, .rf-text-link:active, .rf-text-link:focus { color: var(--rf-magenta); font-size: 16px; line-height: 1.5; font-weight: 600; text-decoration: none; display: inline-flex; gap: 7px; align-items: center; min-height: 44px; }
.rf-text-link:hover .rf-arrow { transform: translateX(3px); }
.rf-arrow { display: inline-block; transition: transform .2s ease; }
.rf-content-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.rf-list-panel { border-radius: 28px; border: 1px solid var(--rf-line); background: #fff; padding: 28px; }
.rf-list-panel h3 { font-size: 20px; margin-bottom: 18px; }
.rf-list-panel ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 11px; }
.rf-list-panel li { position: relative; padding-left: 18px; color: var(--rf-body); font-size: 16px; line-height: 1.45; }
.rf-list-panel li:before { content: ""; position: absolute; left: 0; top: .62em; width: 6px; height: 6px; border-radius: 50%; background: var(--rf-magenta); }
.rf-hmi { background: #fff; }
.rf-split-panel { align-items: stretch; }
.rf-panel-copy { align-self: center; }
.rf-link-stack { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 24px; }
.rf-interface-mockup { border-radius: 30px; background: var(--rf-dark); color: #fff; box-shadow: 0 24px 60px rgba(33,28,34,.18); overflow: hidden; min-height: 460px; }
.rf-mock-top { height: 58px; display: flex; align-items: center; gap: 8px; padding: 0 22px; border-bottom: 1px solid rgba(255,255,255,.12); }
.rf-mock-top span { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.45); }
.rf-mock-top strong { margin-left: auto; font-size: 14px; font-weight: 600; color: rgba(255,255,255,.85); }
.rf-mock-body { display: grid; grid-template-columns: .9fr 1.1fr; gap: 20px; padding: 24px; }
.rf-string-list { display: grid; gap: 14px; }
.rf-string-list div { border-radius: 18px; padding: 16px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.10); }
.rf-string-list div.selected { background: rgba(242,167,198,.16); border-color: rgba(242,167,198,.42); }
.rf-string-list b { display: block; color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.rf-string-list span { display: block; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.45; }
.rf-preview { background: #fff; border-radius: 22px; padding: 24px; color: var(--rf-ink); min-height: 260px; }
.rf-preview-label { display: inline-flex; padding: 7px 12px; border-radius: 999px; background: var(--rf-blush); color: var(--rf-magenta); font-size: 13px; font-weight: 600; margin-bottom: 20px; }
.rf-preview h4 { font-size: 24px; margin-bottom: 12px; }
.rf-preview p { font-size: 16px; line-height: 1.6; color: var(--rf-body); }
.rf-preview-actions { display: flex; gap: 10px; margin-top: 24px; }
.rf-preview-actions span { flex: 1; min-height: 44px; border-radius: 999px; display: flex; align-items: center; justify-content: center; background: #F6F1F4; color: var(--rf-ink); font-size: 16px; font-weight: 600; }
.rf-qa-line { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,.12); }
.rf-qa-line span { padding: 18px 12px; text-align: center; font-size: 14px; color: rgba(255,255,255,.76); border-left: 1px solid rgba(255,255,255,.12); }
.rf-qa-line span:first-child { border-left: 0; }
.rf-command-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
.rf-command-step { position: relative; padding: 26px 20px; border-radius: 24px; background: var(--rf-dark-panel); border: 1px solid rgba(255,255,255,.12); min-height: 190px; }
.rf-command-step:not(:last-child):after { content: ""; position: absolute; top: 50%; right: -13px; width: 12px; height: 2px; background: var(--rf-pink-light); }
.rf-command-step span { width: 34px; height: 34px; border-radius: 50%; background: rgba(242,167,198,.16); color: var(--rf-pink-light); display: inline-flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; margin-bottom: 18px; }
.rf-command-step h3 { font-size: 20px; }
.rf-command-step p { font-size: 16px; line-height: 1.5; margin-bottom: 0; }
.rf-term-diagram { min-height: 460px; border-radius: 30px; border: 1px solid var(--rf-line); background: linear-gradient(180deg, #ffffff, #FCFAFB); position: relative; box-shadow: 0 18px 46px rgba(33,28,34,.06); }
.rf-term-core { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 240px; height: 140px; border-radius: 30px; background: var(--rf-burgundy); color: #fff; display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; font-size: 20px; font-weight: 600; }
.rf-term-diagram span { position: absolute; width: 132px; min-height: 56px; border-radius: 999px; background: var(--rf-blush); color: var(--rf-magenta); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px; font-size: 15px; font-weight: 600; }
.rf-term-diagram span:nth-child(2) { left: 8%; top: 16%; }
.rf-term-diagram span:nth-child(3) { right: 8%; top: 16%; }
.rf-term-diagram span:nth-child(4) { left: 8%; bottom: 16%; }
.rf-term-diagram span:nth-child(5) { right: 8%; bottom: 16%; }
.rf-term-diagram span:nth-child(6) { left: 50%; top: 8%; transform: translateX(-50%); }
.rf-term-diagram span:nth-child(7) { left: 50%; bottom: 8%; transform: translateX(-50%); }
.rf-check-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 26px; }
.rf-check-grid span { border-radius: 16px; border: 1px solid var(--rf-line); padding: 14px 16px; color: var(--rf-ink); font-size: 16px; font-weight: 600; background: #fff; }
.rf-safety-grid { align-items: start; }
.rf-standards-panel { border-radius: 30px; background: #fff; border: 1px solid var(--rf-line); padding: 34px; box-shadow: 0 14px 34px rgba(33,28,34,.05); }
.rf-tag-cloud { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0 26px; }
.rf-tag-cloud span { display: inline-flex; min-height: 36px; align-items: center; padding: 8px 13px; border-radius: 999px; background: #F7F3F5; color: var(--rf-ink); font-size: 15px; font-weight: 600; }
.rf-standard-note { border-top: 1px solid var(--rf-line); padding-top: 24px; }
.rf-standard-note strong { display: block; color: var(--rf-ink); font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.rf-standard-note p { font-size: 16px; margin-bottom: 0; }
.rf-intel-grid { grid-template-columns: minmax(0, .9fr) minmax(400px, .75fr); }
.rf-intel-panel { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-radius: 30px; background: var(--rf-dark); padding: 18px; border: 1px solid rgba(255,255,255,.12); box-shadow: 0 22px 52px rgba(23,23,25,.18); overflow: hidden; }
.rf-intel-panel div { min-height: 160px; padding: 30px 28px; display: flex; flex-direction: column; justify-content: center; }
.rf-intel-panel div:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.13); }
.rf-intel-panel div:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.13); }
.rf-intel-panel strong { display: block; color: #fff; font-size: 22px; font-weight: 600; margin-bottom: 8px; }
.rf-intel-panel span { color: rgba(255,255,255,.76); font-size: 16px; line-height: 1.5; }
.rf-tier-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.rf-tier { border-radius: 28px; background: #fff; border: 1px solid var(--rf-line); padding: 30px; display: flex; flex-direction: column; min-height: 360px; }
.rf-mini-eyebrow { margin-bottom: 14px; }
.rf-tier h3 { font-size: 22px; }
.rf-tier p:not(.rf-mini-eyebrow) { font-size: 16px; line-height: 1.62; }
.rf-tier-flow { margin-top: auto; padding-top: 18px; border-top: 1px solid var(--rf-line); color: var(--rf-ink); font-size: 16px; line-height: 1.5; font-weight: 600; }
.rf-release-flow { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin-bottom: 34px; }
.rf-release-step { border-radius: 22px; border: 1px solid var(--rf-line); background: #fff; padding: 20px 14px; text-align: center; min-height: 126px; }
.rf-release-step span { display: inline-flex; width: 34px; height: 34px; border-radius: 50%; align-items: center; justify-content: center; background: var(--rf-blush); color: var(--rf-magenta); font-size: 14px; font-weight: 600; margin-bottom: 16px; }
.rf-release-step strong { color: var(--rf-ink); font-size: 16px; line-height: 1.35; font-weight: 600; display: block; }
.rf-benefit-row { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--rf-line); border-bottom: 1px solid var(--rf-line); }
.rf-benefit-row div { padding: 26px 26px; border-left: 1px solid var(--rf-line); }
.rf-benefit-row div:first-child { border-left: 0; }
.rf-benefit-row strong { color: var(--rf-ink); font-size: 18px; font-weight: 600; }
.rf-benefit-row p { font-size: 16px; line-height: 1.58; margin: 10px 0 0; }
.rf-file-grid { grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); }
.rf-file-grid .rf-text-link, .rf-file-grid .rf-text-link:link, .rf-file-grid .rf-text-link:visited, .rf-file-grid .rf-text-link:active, .rf-file-grid .rf-text-link:focus { color: var(--rf-pink-light); }
.rf-file-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.rf-file-cards div { border-radius: 24px; background: var(--rf-dark-panel); border: 1px solid rgba(255,255,255,.12); padding: 24px; min-height: 164px; }
.rf-file-cards .rf-icon { stroke: var(--rf-pink-light); margin-bottom: 16px; }
.rf-file-icon { width: 40px; height: 40px; stroke-width: 1.6; }
.rf-file-cards strong { color: #fff; display: block; font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.rf-file-cards span { display: block; color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.5; }
.rf-scale-grid { align-items: start; }
.rf-scale-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 28px; border-top: 1px solid var(--rf-line); }
.rf-scale-list div { padding: 24px 0; border-bottom: 1px solid var(--rf-line); }
.rf-scale-list strong { color: var(--rf-ink); font-size: 18px; font-weight: 600; }
.rf-scale-list p { font-size: 16px; line-height: 1.58; margin: 8px 0 0; }
.rf-program-panel { border-radius: 30px; background: #fff; border: 1px solid var(--rf-line); padding: 34px; box-shadow: 0 14px 34px rgba(33,28,34,.05); }
.rf-program-stack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.rf-program-stack span { min-height: 64px; border-radius: 18px; background: #F7F3F5; display: flex; align-items: center; justify-content: center; text-align: center; padding: 12px; color: var(--rf-ink); font-size: 16px; font-weight: 600; }
.rf-program-core { margin: 26px auto; max-width: 660px; text-align: center; border-radius: 26px; background: var(--rf-burgundy); color: #fff; padding: 28px; }
.rf-program-core strong { color: #fff; font-size: 22px; font-weight: 600; }
.rf-program-core p { color: rgba(255,255,255,.82); font-size: 16px; line-height: 1.6; margin: 10px 0 0; }
.rf-program-release { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 12px; }
.rf-program-release span:not(.rf-arrow) { display: inline-flex; align-items: center; justify-content: center; min-height: 40px; padding: 9px 14px; border-radius: 999px; background: #fff; border: 1px solid var(--rf-line); color: var(--rf-ink); font-size: 16px; font-weight: 600; }
.rf-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.rf-related-card { min-height: 230px; border-radius: 26px; border: 1px solid var(--rf-line); background: #fff; padding: 26px; text-decoration: none; display: flex; flex-direction: column; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
.rf-related-card:hover { transform: translateY(-2px); box-shadow: 0 18px 38px rgba(33,28,34,.08); border-color: #D5CBD0; }
.rf-related-card strong { color: var(--rf-ink); font-size: 19px; font-weight: 600; margin-bottom: 12px; }
.rf-related-card span { color: var(--rf-body); font-size: 16px; line-height: 1.55; }
.rf-related-card em { margin-top: auto; color: var(--rf-magenta); font-size: 16px; font-style: normal; font-weight: 600; display: inline-flex; align-items: center; gap: 7px; }
.rf-adjacent-band { margin-top: 28px; border-radius: 30px; background: var(--rf-soft); border: 1px solid var(--rf-line); padding: 32px; display: grid; grid-template-columns: minmax(0,.86fr) minmax(0,1.14fr); gap: 32px; }
.rf-adjacent-band h3 { font-size: 22px; }
.rf-adjacent-band p { font-size: 16px; line-height: 1.6; margin-bottom: 0; }
.rf-adjacent-links { display: grid; gap: 12px; }
.rf-adjacent-links a { display: block; border-radius: 0; background: transparent; border: 0; border-top: 1px solid var(--rf-line); padding: 15px 0; text-decoration: none; }
.rf-adjacent-links a:first-child { border-top: 0; padding-top: 0; }
.rf-adjacent-links strong { display: block; color: var(--rf-ink); font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.rf-adjacent-links span { color: var(--rf-body); font-size: 16px; line-height: 1.5; }
.rf-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 34px; border-top: 1px solid var(--rf-line); }
.rf-why-item { padding: 30px 0; border-bottom: 1px solid var(--rf-line); }
.rf-why-item h3 { font-size: 21px; margin-top: 16px; }
.rf-why-item p { font-size: 16px; line-height: 1.62; margin-bottom: 0; }
.rf-faq-grid { grid-template-columns: minmax(300px, .52fr) minmax(0, 1fr); align-items: start; }
.rf-faq-heading { position: sticky; top: 32px; }
.rf-faq-heading p { font-size: 17px; max-width: 440px; }
.rf-faq-panel { border-radius: 30px; border: 1px solid var(--rf-line); background: #fff; overflow: hidden; }
details { border-top: 1px solid var(--rf-line); }
details:first-child { border-top: 0; }
summary { cursor: pointer; list-style: none; color: var(--rf-ink); font-size: 18px; line-height: 1.4; font-weight: 600; padding: 24px 28px; position: relative; }
summary::-webkit-details-marker { display: none; }
summary:after { content: "+"; position: absolute; right: 28px; top: 24px; color: var(--rf-magenta); font-size: 24px; line-height: 1; }
details[open] summary:after { content: "–"; }
details p { padding: 0 28px 26px; font-size: 16px; line-height: 1.65; max-width: 820px; margin-bottom: 0; }
.rf-final-cta { padding: 96px 0 112px; background: #fff; }
.rf-final-box { border-radius: 34px; background: linear-gradient(135deg, var(--rf-blush) 0%, #ffffff 60%); border: 1px solid #F2D9E5; padding: 64px 56px; text-align: center; box-shadow: 0 22px 54px rgba(193,29,99,.08); }
.rf-final-box h2 { max-width: 760px; margin-left: auto; margin-right: auto; }
.rf-final-box p:not(.rf-eyebrow) { max-width: 820px; margin-left: auto; margin-right: auto; font-size: 18px; line-height: 1.62; }
@media (max-width: 1100px) {
  .rf-container { padding-left: 40px; padding-right: 40px; }
  .rf-hero-grid, .rf-two-col, .rf-split-panel, .rf-intel-grid, .rf-file-grid, .rf-scale-grid, .rf-faq-grid, .rf-safety-grid { grid-template-columns: 1fr; gap: 44px; }
  .rf-hero-copy { text-align: center; }
  .rf-hero-copy h1, .rf-hero-copy p { margin-left: auto; margin-right: auto; }
  .rf-actions { justify-content: center; }
  .rf-system .rf-sticky-copy > .rf-eyebrow,
  .rf-system .rf-sticky-copy > h2,
  .rf-terminology .rf-sticky-copy > .rf-eyebrow,
  .rf-terminology .rf-sticky-copy > h2,
  .rf-intel-grid > div:first-child > h2,
  .rf-scale-grid .rf-sticky-copy > .rf-eyebrow,
  .rf-scale-grid .rf-sticky-copy > h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .rf-hero-grid { max-width: 860px; }
  .rf-system-grid, .rf-related-grid, .rf-why-grid { grid-template-columns: repeat(2, 1fr); }
  .rf-content-grid, .rf-tier-grid { grid-template-columns: repeat(2, 1fr); }
  .rf-release-flow { grid-template-columns: repeat(4, 1fr); }
  .rf-trust-grid { grid-template-columns: repeat(2, 1fr); }
  .rf-trust-grid div:nth-child(odd) { border-left: 0; }
  .rf-trust-grid div:nth-child(n+3) { border-top: 1px solid var(--rf-line); }
  .rf-command-flow { grid-template-columns: 1fr; }
  .rf-command-step { min-height: auto; }
  .rf-command-step:not(:last-child):after { top: auto; bottom: -10px; left: 32px; right: auto; width: 2px; height: 10px; }
  .rf-faq-heading { position: static; text-align: center; }
  .rf-faq-heading p { margin-left: auto; margin-right: auto; }
  .rf-adjacent-band { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .rf-container { padding-left: 24px; padding-right: 24px; }
  .rf-section { padding: 72px 0; }
  .rf-hero { padding: 84px 0 72px; }
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
  h3 { font-size: 22px; }
  .rf-heading { margin-bottom: 36px; }
  .rf-section-intro, .rf-hero-lede, .rf-final-box p:not(.rf-eyebrow) { font-size: 18px; }
  .rf-hero-support { font-size: 16px; }
  .rf-art-panel { min-height: 420px; }
  .rf-robot-card { left: 28px; bottom: 44px; width: 200px; height: 230px; }
  .rf-hmi-card { right: 24px; top: 38px; width: 210px; }
  .rf-doc-card { right: 40px; bottom: 52px; }
  .rf-lifecycle, .rf-system-grid, .rf-content-grid, .rf-tier-grid, .rf-related-grid, .rf-why-grid, .rf-benefit-row, .rf-scale-list, .rf-file-cards, .rf-program-stack { grid-template-columns: 1fr; }
  .rf-life-row:nth-child(2) { border-top: 1px solid var(--rf-line); }
  .rf-benefit-row div { border-left: 0; border-top: 1px solid var(--rf-line); }
  .rf-benefit-row div:first-child { border-top: 0; }
  .rf-release-flow { grid-template-columns: repeat(2, 1fr); }
  .rf-related-card { min-height: 210px; }
  .rf-adjacent-links a { min-height: 56px; }
  .rf-system-map { min-height: auto; padding: 24px; display: grid; gap: 16px; }
  .rf-map-center, .rf-map-node, .rf-map-base { position: static; transform: none; width: auto; }
  .rf-map-center { min-height: 140px; }
  .rf-map-base { height: auto; min-height: 48px; }
  .rf-mock-body { grid-template-columns: 1fr; }
  .rf-term-diagram { min-height: auto; padding: 24px; display: grid; gap: 12px; }
  .rf-term-core, .rf-term-diagram span { position: static; transform: none; width: auto; }
  .rf-term-core { height: auto; min-height: 96px; }
  .rf-check-grid, .rf-intel-panel { grid-template-columns: 1fr; }
  .rf-intel-panel div, .rf-intel-panel div:nth-child(odd) { border-right: 0; }
  .rf-intel-panel div, .rf-intel-panel div:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.13); }
  .rf-intel-panel div:last-child { border-bottom: 0; }
  .rf-program-release { align-items: stretch; }
  .rf-program-release .rf-arrow { display: none; }
  .rf-program-release span:not(.rf-arrow) { width: 100%; }
  .rf-final-box { padding: 48px 30px; }
}
@media (max-width: 480px) {
  .rf-container { padding-left: 20px; padding-right: 20px; }
  .rf-section { padding: 64px 0; }
  .rf-hero { padding: 72px 0 64px; }
  h1 { font-size: 38px; }
  h2 { font-size: 30px; }
  h3 { font-size: 20px; }
  p, .rf-hero-support, .rf-calm-card p, .rf-list-panel li, .rf-tier p:not(.rf-mini-eyebrow), .rf-why-item p, details p, .rf-benefit-row p, .rf-scale-list p, .rf-standard-note p { font-size: 16px; }
  .rf-actions, .rf-actions-center { align-items: stretch; flex-direction: column; width: 100%; }
  .rf-btn { width: 100%; }
  .rf-hero-grid { gap: 36px; }
  .rf-art-panel { min-height: auto; padding: 24px; display: flex; flex-direction: column; gap: 14px; }
  .rf-art-panel:before { display: none; }
  .rf-lang-strip, .rf-robot-card, .rf-hmi-card, .rf-doc-card { position: relative; left: auto; right: auto; top: auto; bottom: auto; width: 100%; }
  .rf-lang-strip { order: 0; flex-wrap: wrap; max-width: none; }
  .rf-robot-card { order: 1; height: 230px; }
  .rf-hmi-card { order: 2; }
  .rf-doc-card { order: 3; }
  .rf-art-caption { font-size: 16px; }
  .rf-trust-grid { grid-template-columns: 1fr; }
  .rf-trust-grid div { border-left: 0; border-top: 1px solid var(--rf-line); padding: 22px 0; }
  .rf-trust-grid div:first-child { border-top: 0; }
  .rf-life-row { grid-template-columns: 1fr; gap: 10px; }
  .rf-content-grid, .rf-system-grid, .rf-related-grid { gap: 16px; }
  .rf-list-panel, .rf-tier, .rf-standards-panel, .rf-program-panel, .rf-adjacent-band, .rf-final-box { border-radius: 24px; padding: 24px; }
  .rf-calm-card { padding: 26px 0; }
  .rf-interface-mockup { border-radius: 24px; }
  .rf-qa-line { grid-template-columns: 1fr; }
  .rf-qa-line span { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
  .rf-qa-line span:first-child { border-top: 0; }
  .rf-release-flow { grid-template-columns: 1fr; }
  .rf-file-cards div, .rf-intel-panel div, .rf-related-card { min-height: auto; }
  .rf-intel-panel { padding: 12px; }
  .rf-intel-panel div { padding: 24px 20px; }
  .rf-program-core { padding: 24px 20px; }
  summary { font-size: 17px; padding: 22px 54px 22px 22px; }
  summary:after { right: 22px; top: 22px; }
  details p { padding-left: 22px; padding-right: 22px; }
}
`;
