import React from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#0F172A",
  slate: "#475569",
  muted: "#64748B",
  line: "#E5E7EB",
  soft: "#F7F8FA",
  dark: "#161A22",
};

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  railroad: "https://www.stepes.com/railroad-translation-services/",
  aviation: "https://www.stepes.com/aviation-translation-services/",
  maritime: "https://www.stepes.com/maritime-translation-services/",
  renewable: "https://www.stepes.com/renewable-energy-translation-services/",
  environmental: "https://www.stepes.com/environmental-translation-services/",
  telecommunications: "https://www.stepes.com/telecommunications-translation-services/",
  heavyEquipment: "https://www.stepes.com/heavy-equipment-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  technicalManual: "https://www.stepes.com/technical-manual-translation/",
  sop: "https://www.stepes.com/sop-translation-services/",
  workInstruction: "https://www.stepes.com/work-instruction-translation-services/",
  userManual: "https://www.stepes.com/user-manual-translation-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  safetyDocument: "https://www.stepes.com/safety-document-translation-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  workflow: "https://www.stepes.com/translation-workflow-automation/",
  analytics: "https://www.stepes.com/translation-reporting-analytics/",
  integrations: "https://www.stepes.com/integrations/",
  api: "https://www.stepes.com/translation-api/",
  languages: "https://www.stepes.com/translation-languages/",
};

const sectors = [
  {
    title: "Buildings & Commercial Construction",
    body: "Architectural, structural, MEP, building-controls, HVAC, fire-protection, elevator, smart-building, and facility content for commercial, residential, institutional, and industrial projects.",
  },
  {
    title: "Civil Engineering & Public Works",
    body: "Roads, bridges, tunnels, dams, drainage, earthworks, municipal infrastructure, and other public works requiring precise engineering, project, and operational documentation.",
    link: { label: "Engineering Translation Services", href: URLS.engineering },
  },
  {
    title: "Rail & Transit Infrastructure",
    body: "Railways, metros, stations, signaling, track systems, transit facilities, procurement, maintenance, and operations content for infrastructure projects.",
    link: { label: "Railroad Translation Services", href: URLS.railroad },
  },
  {
    title: "Airports, Ports & Transportation Infrastructure",
    body: "Airport terminals, aviation facilities, ports, marine infrastructure, logistics facilities, and intermodal projects spanning engineering, procurement, safety, equipment, and operations.",
    links: [
      { label: "Aviation Translation Services", href: URLS.aviation },
      { label: "Maritime Translation Services", href: URLS.maritime },
    ],
  },
  {
    title: "Energy & Utility Infrastructure",
    body: "Power generation, transmission and distribution, substations, grid modernization, renewable-energy infrastructure, EV charging networks, utility construction, equipment, and digital operating systems.",
    link: { label: "Renewable Energy Translation Services", href: URLS.renewable },
  },
  {
    title: "Water & Environmental Infrastructure",
    body: "Water and wastewater treatment, distribution, drainage, pipelines, environmental engineering, resource-management projects, and the technical documentation behind them.",
    link: { label: "Environmental Translation Services", href: URLS.environmental },
  },
  {
    title: "Digital & Communications Infrastructure",
    body: "Data centers, fiber networks, telecom facilities, connected buildings, network infrastructure, and software-driven systems requiring coordinated engineering and technical translation.",
    link: { label: "Telecommunications Translation Services", href: URLS.telecommunications },
  },
];

const lifecycle = [
  ["Planning & Design", "Feasibility studies, planning documents, architectural content, engineering studies, environmental reports, design specifications, and supporting documentation."],
  ["Bidding & Procurement", "RFPs, RFQs, tender packages, bills of quantities, bid submissions, technical proposals, supplier documentation, contracts, and procurement requirements."],
  ["Engineering", "Technical specifications, design documentation, method statements, material requirements, drawings and associated text, installation requirements, and equipment information."],
  ["Construction", "Construction procedures, work instructions, inspection documentation, quality information, safety content, equipment instructions, training, and site communications."],
  ["Commissioning & Handover", "Testing and commissioning procedures, inspection and acceptance documentation, system records, training materials, handover packages, and equipment information."],
  ["Operations & Maintenance", "O&M manuals, maintenance procedures, SOPs, user manuals, service information, troubleshooting content, safety documentation, and recurring workforce training."],
];

const projectDocs = [
  {
    label: "ENGINEERING",
    title: "Engineering & Technical Documentation",
    body: "Specifications, technical reports, design documentation, material requirements, method statements, installation requirements, inspection procedures, technical datasheets, and drawings with translatable text.",
  },
  {
    label: "BIDDING",
    title: "Tenders, Bids & Procurement",
    body: "RFPs, RFQs, invitation-to-tender documents, bid packages, bills of quantities, proposals, procurement specifications, supplier submissions, commercial schedules, and supporting project content.",
  },
  {
    label: "CONTRACTS",
    title: "Commercial & Project Documentation",
    body: "Construction contracts, amendments, scopes of work, project requirements, change orders, compliance materials, commercial records, and stakeholder communications.",
  },
];

const safetyItems = [
  ["Site Safety & EHS/HSE", "Site rules, hazard communication, emergency procedures, safe-work practices, toolbox talks, incident-prevention content, and project-specific safety communications."],
  ["SOPs & Work Instructions", "Clear multilingual procedures for recurring operations, installation tasks, equipment use, inspections, maintenance, and other step-by-step work activities."],
  ["Onboarding & Workforce Training", "Orientation, compliance training, eLearning, equipment training, supervisor materials, and multilingual learning content for contractors and employees."],
  ["Equipment Safety Content", "Warnings, operating instructions, lockout and maintenance information, labels, user documentation, and safety guidance for construction machinery and building systems."],
];

const equipmentRows = [
  {
    title: "Construction Equipment & Heavy Machinery",
    body: "Translate operator manuals, installation content, service procedures, parts information, safety documentation, training, software interfaces, and product specifications for excavators, loaders, cranes, graders, road-building equipment, lifting systems, concrete equipment, and other specialized machines.",
    link: { label: "Heavy Equipment Translation Services", href: URLS.heavyEquipment },
  },
  {
    title: "HVAC, Controls & Building Automation",
    body: "Support global building-system manufacturers and project teams with multilingual content for HVAC, automation, controls, sensors, commissioning, energy management, and connected building technologies.",
  },
  {
    title: "Electrical, Mechanical & Life-Safety Systems",
    body: "Translate documentation for electrical distribution, mechanical systems, fire protection, elevators and vertical transportation, pumps, controls, and other technical building infrastructure.",
  },
  {
    title: "Manuals, Software & Training",
    body: "Keep operator manuals, installation guides, maintenance procedures, troubleshooting content, HMI or software text, training materials, and product documentation aligned across languages and releases.",
    links: [
      { label: "Technical Manual Translation", href: URLS.technicalManual },
      { label: "User Manual Translation Services", href: URLS.userManual },
    ],
  },
];

const digitalNodes = ["BIM", "CDE", "CAD", "Project Apps", "Field Systems", "Equipment UI", "Training", "O&M Data", "Digital Twin Content"];

const aiWorkflow = [
  ["Prepare Language Assets", "Apply approved terminology, translation memory, project glossaries, reference files, product names, and content-specific instructions before translation begins."],
  ["AI-Assisted Translation", "Accelerate suitable high-volume or recurring content with AI-enabled translation configured for the project, content type, languages, and quality requirements."],
  ["Professional Technical Review", "Use experienced linguists and subject-matter reviewers to validate meaning, terminology, usability, audience fit, and high-impact technical or safety information."],
  ["QA, Approval & Reuse", "Check terminology, numbers, completeness, formatting, and consistency, then capture approved language and reviewer feedback for future project phases and revisions."],
];

const enterpriseCapabilities = [
  {
    title: "Terminology Management",
    body: "Maintain approved multilingual terminology for engineering components, materials, equipment, safety language, abbreviations, project names, company terminology, and supplier content.",
    link: { label: "Terminology Management", href: URLS.terminology },
  },
  {
    title: "Translation Memory",
    body: "Reuse approved translations across specifications, manuals, training, recurring procedures, revised tenders, and operations content to improve consistency and reduce repetitive work.",
    link: { label: "Translation Memory", href: URLS.translationMemory },
  },
  {
    title: "Workflow Automation",
    body: "Route content through the right AI, translation, review, QA, customer-approval, and delivery stages based on content type, project phase, business risk, and turnaround needs.",
    link: { label: "Workflow Automation", href: URLS.workflow },
  },
  {
    title: "Connected Content Operations",
    body: "Connect recurring project content, structured data, engineering systems, content platforms, and custom applications to scalable translation workflows through integrations and APIs.",
    links: [
      { label: "Enterprise Integrations", href: URLS.integrations },
      { label: "Translation API", href: URLS.api },
    ],
  },
];

const related = [
  ["Railroad Translation Services", "Dedicated multilingual support for rail equipment, railway construction, signaling, rolling stock, technical documentation, training, and transit operations.", URLS.railroad],
  ["Engineering Translation Services", "Specialized translation for civil, mechanical, electrical, and multidisciplinary engineering documentation used across complex technical projects.", URLS.engineering],
  ["Heavy Equipment Translation Services", "Technical translation for construction machinery, operator documentation, service content, safety instructions, parts information, and training.", URLS.heavyEquipment],
  ["Aviation Translation Services", "Focused language support for aviation engineering, airport operations, safety documentation, technical manuals, training, and related aerospace content.", URLS.aviation],
  ["Renewable Energy Translation Services", "Translation for solar, wind, hydro, storage, clean-energy infrastructure, technical documentation, training, and international market requirements.", URLS.renewable],
  ["Technical Translation Services", "Professional translation for engineering specifications, manuals, SOPs, safety documentation, software documentation, and complex technical files.", URLS.technical],
];

const whyStepes = [
  ["Technical Subject-Matter Expertise", "Professional linguists are matched to the language pair, construction or engineering domain, content type, and intended use of the material."],
  ["Project Terminology Control", "Approved terminology and translation memory help maintain consistent language across engineering documents, contractors, suppliers, project phases, and updates."],
  ["AI + Human Quality", "Use AI-enabled efficiency where it adds value and professional human review where technical complexity, safety, contracts, or business impact require stronger control."],
  ["Scalable Multilingual Delivery", "Coordinate large file volumes, multiple languages, recurring revisions, distributed stakeholders, review cycles, and project-specific requirements through connected workflows."],
  ["Structured Technical QA", "Quality controls help check completeness, terminology, numbers, units, formatting, consistency, and final usability while preserving approved language across revisions."],
  ["One Partner Across the Lifecycle", "Support design, procurement, construction, commissioning, operations, equipment, training, and digital content through one multilingual operating model."],
];

const faqs = [
  {
    q: "What are construction translation services?",
    a: "Construction translation services provide specialized multilingual support for the technical, commercial, safety, training, legal, software, and operational content used by construction companies, engineering firms, contractors, equipment manufacturers, infrastructure developers, utilities, and public works organizations. Common content includes specifications, tenders, contracts, manuals, work instructions, safety procedures, training, and project documentation.",
  },
  {
    q: "What types of construction and infrastructure documents can Stepes translate?",
    a: "Stepes translates engineering specifications, feasibility studies, technical reports, tenders, RFPs and RFQs, procurement packages, proposals, contracts, method statements, safety documents, SOPs, work instructions, user manuals, installation guides, O&M manuals, training materials, inspection documentation, software content, and other project information.",
    link: { label: "Technical Translation Services", href: URLS.technical },
  },
  {
    q: "Can Stepes translate construction tenders and bid documents?",
    a: "Yes. Stepes supports multilingual tender and procurement programs involving RFPs, RFQs, tender specifications, bid packages, bills of quantities, technical proposals, supplier documentation, contracts, and supporting project information. Translation memory and project terminology can help maintain consistency across related documents and revisions.",
  },
  {
    q: "How does Stepes handle construction safety translation?",
    a: "Stepes can translate site safety procedures, EHS and HSE content, toolbox talks, hazard communications, emergency procedures, equipment warnings, workforce onboarding, SOPs, work instructions, and training materials. Quality workflows can be matched to the importance, audience, and risk of the content, including specialist translation, professional review, terminology validation, and QA.",
    links: [
      { label: "SOP Translation Services", href: URLS.sop },
      { label: "Work Instruction Translation Services", href: URLS.workInstruction },
    ],
  },
  {
    q: "Can Stepes translate BIM, drawings, and digital construction content?",
    a: "Yes. Stepes can translate translatable text and supporting documentation associated with BIM workflows, engineering drawings, project platforms, software, graphics, structured files, and other digital construction content. The exact workflow depends on the source format, editable content, and required final deliverable.",
  },
  {
    q: "Is AI translation appropriate for engineering and construction content?",
    a: "It depends on the content. AI can improve speed and scalability for suitable high-volume or repetitive material, especially when combined with approved terminology and translation memory. Higher-impact content such as safety procedures, engineering specifications, contracts, operating instructions, or externally published information may require stronger professional human review and quality controls.",
    link: { label: "AI + Human Translation Workflow", href: URLS.aiHuman },
  },
  {
    q: "How does Stepes keep engineering terminology consistent across a long project?",
    a: "Stepes can combine project glossaries, terminology management, translation memory, customer reference materials, automated quality checks, and professional review. Approved language can then be reused across specifications, manuals, tenders, procedures, training, and later project phases so recurring terminology remains more consistent over time.",
    links: [
      { label: "Terminology Management", href: URLS.terminology },
      { label: "Translation Memory", href: URLS.translationMemory },
    ],
  },
  {
    q: "Can Stepes support large multilingual infrastructure programs?",
    a: "Yes. Stepes supports enterprise programs involving multiple languages, large file volumes, recurring revisions, distributed reviewers, project-specific terminology, and ongoing translation requirements. Enterprise translation management, workflow automation, reporting, integrations, and reusable language assets help connect these requirements across the project lifecycle.",
    link: { label: "Enterprise Translation Management", href: URLS.enterprise },
  },
];

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={light ? "editorial-link editorial-link-light" : "editorial-link"} href={href}>
      <span>{children}</span>
      <Arrow size={15} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="btn btn-primary" href={href}>
      <span>{children}</span>
      <Arrow size={17} />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a className="btn btn-secondary" href={href}>
      <span>{children}</span>
      <Arrow size={17} />
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function HeadingGroup({ eyebrow, title, intro, dark = false, align = "center", mobileCenter = true }) {
  const classes = ["heading-group", `heading-${align}`, mobileCenter ? "mobile-center" : "mobile-left"].join(" ");
  return (
    <div className={classes}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className={dark ? "section-intro intro-dark" : "section-intro"}>{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg className="hero-svg" viewBox="0 0 590 500" fill="none">
        <defs>
          <linearGradient id="constructionWire" x1="50" y1="50" x2="510" y2="440" gradientUnits="userSpaceOnUse">
            <stop stopColor="#798493" />
            <stop offset="1" stopColor="#394454" />
          </linearGradient>
          <linearGradient id="constructionSoftMagenta" x1="80" y1="90" x2="500" y2="430" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C11D63" stopOpacity="0.22" />
            <stop offset="1" stopColor="#C11D63" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect x="28" y="28" width="534" height="444" rx="28" fill="#FAFAFB" stroke="#DEE3E9" />
        <path d="M72 388H520" stroke="#DCE2E8" strokeWidth="1.4" />

        <g stroke="url(#constructionWire)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M89 355h97V220h68v135h59V170h90v185h92" />
          <path d="M105 355v-76h49v76M205 220v-54h38v54M338 170v-52h40v52" />
          <path d="M337 204h42M337 238h42M337 272h42M337 306h42" />
          <path d="M116 279h28M213 247h33M213 280h33M213 313h33" />
          <path d="M416 355c15-45 38-68 70-68 22 0 40 12 54 36" />
          <path d="M424 355h107" />
          <path d="M58 355h34" />
        </g>

        <g stroke="url(#constructionWire)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M123 149h172M190 149V81M190 81h112M299 81v14" />
          <path d="M118 149 78 185" />
          <path d="M213 149 293 193" />
          <path d="M299 95v71" />
          <path d="M285 167h28l-14 23-14-23Z" />
        </g>

        <g stroke="#C11D63" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M83 114h72" />
          <circle cx="163" cy="114" r="4" fill="#C11D63" />
          <path d="M429 127h71" />
          <circle cx="421" cy="127" r="4" fill="#C11D63" />
        </g>

        <g className="hero-project-label">
          <rect x="352" y="62" width="152" height="68" rx="16" fill="#fff" stroke="#DDE2E8" />
          <text x="371" y="88" fontFamily="Arial, sans-serif" fontSize="14" fill="#202938">PROJECT CONTENT</text>
          <text x="371" y="109" fontFamily="Arial, sans-serif" fontSize="12" fill="#667085">DESIGN · TENDER · O&amp;M</text>
        </g>

        <g className="hero-keywords">
          <rect x="77" y="396" width="430" height="38" rx="19" fill="url(#constructionSoftMagenta)" />
          <text x="112" y="420" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">ENGINEERING</text>
          <circle cx="214" cy="415" r="2.5" fill="#C11D63" />
          <text x="229" y="420" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">SAFETY</text>
          <circle cx="293" cy="415" r="2.5" fill="#C11D63" />
          <text x="308" y="420" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">TERMINOLOGY</text>
          <circle cx="414" cy="415" r="2.5" fill="#C11D63" />
          <text x="429" y="420" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">QA</text>
        </g>
      </svg>
    </div>
  );
}

function SafetyIcon({ type }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const p = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  if (type === "shield") return <svg {...common}><path {...p} d="M12 3 5.5 5.5v5.4c0 4.2 2.6 7.7 6.5 10.1 3.9-2.4 6.5-5.9 6.5-10.1V5.5L12 3Z"/><path {...p} d="m9 12 2 2 4-4"/></svg>;
  if (type === "list") return <svg {...common}><path {...p} d="M9 6h11M9 12h11M9 18h11"/><path {...p} d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2"/></svg>;
  if (type === "training") return <svg {...common}><rect {...p} x="3" y="4" width="18" height="13" rx="2"/><path {...p} d="M8 21h8M12 17v4M8 9h8M8 13h5"/></svg>;
  return <svg {...common}><path {...p} d="M5 20h14M8 20V9l4-5 4 5v11M8 12h8M10 15h4"/></svg>;
}

function App() {
  return (
    <div className="page-shell">
      <style>{styles}</style>
      <main>
        <section className="hero section-white">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Construction &amp; Infrastructure Translation Services</h1>
              <p className="hero-lead">
                Translate engineering documents, project specifications, tenders, safety content, technical manuals, training, and digital project information with specialized language expertise and scalable enterprise workflows.
              </p>
              <div className="hero-actions">
                <PrimaryButton href={URLS.quote}>Get a Translation Quote</PrimaryButton>
                <SecondaryButton href={URLS.contact}>Talk to an Expert</SecondaryButton>
              </div>
              <div className="hero-note">
                Stepes helps engineering firms, contractors, infrastructure developers, equipment manufacturers, utilities, and public-sector organizations keep multilingual project information clear and consistent from planning and design through construction, commissioning, operations, and maintenance.
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className="proof-strip" aria-label="Construction translation service highlights">
          <div className="container proof-grid">
            {[
              ["100+ Languages", "Global project and workforce coverage"],
              ["Technical Subject Expertise", "Construction, engineering, and infrastructure"],
              ["ISO-Certified Quality", "ISO 17100 and ISO 9001 quality processes"],
              ["AI + Human Workflows", "Match review to content risk"],
            ].map(([title, body]) => (
              <div className="proof-item" key={title}>
                <div className="proof-title">{title}</div>
                <div className="proof-body">{body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-white">
          <div className="container overview-grid">
            <div className="overview-heading heading-group mobile-center">
              <h2>Translation Expertise for Construction and Infrastructure</h2>
              <p className="section-intro">
                Major projects bring together architects, engineers, contractors, suppliers, regulators, operators, investors, and workforces across locations and languages. Stepes supports the technical and business content that keeps those stakeholders aligned.
              </p>
              <div className="overview-link">
                <EditorialLink href={URLS.engineering}>Engineering Translation Services</EditorialLink>
              </div>
            </div>
            <div className="overview-rows">
              {[
                ["Technical Depth", "Translate engineering, architectural, equipment, building-system, civil works, and infrastructure content with terminology controls designed for complex technical information."],
                ["Project Lifecycle Coverage", "Support multilingual requirements from early planning, bids, and procurement through construction, commissioning, handover, operations, and maintenance."],
                ["Global Stakeholder Communication", "Keep project owners, designers, contractors, subcontractors, suppliers, authorities, operators, and multilingual workforces working from clear, consistent information."],
              ].map(([title, body]) => (
                <div className="overview-row" key={title}>
                  <div className="overview-marker" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
              <p className="overview-closing">
                Whether you are preparing an international tender, coordinating overseas engineering teams, training a multilingual workforce, launching construction equipment, or managing a long-running infrastructure program, Stepes provides one connected translation partner across content types and project phases.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <HeadingGroup
              title="Construction and Infrastructure Sectors We Support"
              intro="Explore broad construction and infrastructure expertise, with dedicated Stepes services for rail, aviation, maritime, renewable energy, environmental, telecommunications, engineering, and heavy equipment requirements."
            />
            <div className="sector-grid">
              {sectors.map((item) => (
                <article className="sector-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                  {item.links ? (
                    <div className="stack-links">
                      {item.links.map((link) => <EditorialLink href={link.href} key={link.href}>{link.label}</EditorialLink>)}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white lifecycle-section">
          <div className="container">
            <HeadingGroup
              title="Translate Content Across the Entire Project Lifecycle"
              intro="Construction and infrastructure programs generate multilingual content long before work begins on site and continue producing it after the asset enters service. Stepes helps maintain continuity as information moves from designers and procurement teams to contractors, operators, and maintenance teams."
              align="left"
              mobileCenter={false}
            />
            <div className="lifecycle-track">
              {lifecycle.map(([title, body], index) => (
                <article className="lifecycle-step" key={title}>
                  <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="step-line" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="lifecycle-summary">
              One connected multilingual workflow helps preserve approved terminology, project context, and reusable language assets as documents evolve from design and tendering to construction and long-term operations.
            </div>
          </div>
        </section>

        <section className="section section-dark project-docs-section">
          <div className="container project-docs-grid">
            <div className="project-docs-copy heading-group heading-left mobile-center">
              <h2>Engineering Documents, Specifications, Tenders &amp; Procurement</h2>
              <p className="section-intro intro-dark">
                Engineering projects depend on details. Stepes helps teams translate the technical, commercial, and contractual content that defines project requirements, supports international bidding, and coordinates execution across languages.
              </p>
              <p className="dark-body">
                Terminology, measurements, abbreviations, equipment names, material references, repeated clauses, and project-specific language can be managed consistently across related files and revisions.
              </p>
              <div className="project-doc-links">
                <EditorialLink href={URLS.technical} light>Technical Translation Services</EditorialLink>
                <EditorialLink href={URLS.engineering} light>Engineering Translation Services</EditorialLink>
              </div>
            </div>
            <div className="project-docs-panel">
              {projectDocs.map((item) => (
                <article className="project-doc-row" key={item.title}>
                  <div className="project-doc-label">{item.label}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blush safety-section">
          <div className="container safety-grid">
            <div className="safety-copy heading-group heading-left mobile-center">
              <h2>Safety Translation for Multilingual Construction Workforces</h2>
              <p className="section-intro">
                Construction safety depends on people understanding hazards, instructions, procedures, equipment requirements, and emergency information. Stepes helps contractors, supervisors, equipment teams, and workers access clear multilingual safety and training content.
              </p>
              <p className="body-copy">
                Safety-critical materials can use stronger professional review, terminology validation, and quality controls based on the purpose, audience, and risk of the content.
              </p>
              <div className="inline-links">
                <EditorialLink href={URLS.safetyDocument}>Safety Document Translation Services</EditorialLink>
                <EditorialLink href={URLS.sop}>SOP Translation Services</EditorialLink>
                <EditorialLink href={URLS.workInstruction}>Work Instruction Translation Services</EditorialLink>
              </div>
            </div>
            <div className="safety-list">
              {safetyItems.map(([title, body], index) => (
                <article className="safety-row" key={title}>
                  <div className="safety-icon">
                    <SafetyIcon type={["shield", "list", "training", "equipment"][index]} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white equipment-section">
          <div className="container">
            <HeadingGroup
              title="Technical Translation for Construction Equipment and Building Systems"
              intro="Construction equipment and modern building technologies combine mechanical, electrical, hydraulic, electronic, controls, and software-driven systems. Their multilingual documentation must remain clear and technically useful in real-world operation."
            />
            <div className="equipment-rows">
              {equipmentRows.map((item) => (
                <article className="equipment-row" key={item.title}>
                  <div className="equipment-rule" aria-hidden="true" />
                  <div className="equipment-content">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                    {item.links ? (
                      <div className="stack-links horizontal-links">
                        {item.links.map((link) => <EditorialLink href={link.href} key={link.href}>{link.label}</EditorialLink>)}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft digital-section">
          <div className="container digital-grid">
            <div className="digital-copy heading-group heading-left mobile-center">
              <h2>Translate BIM, Software, and Connected Project Content</h2>
              <p className="section-intro">
                Construction information increasingly lives across BIM workflows, common data environments, engineering software, mobile applications, equipment interfaces, digital training, structured records, and connected asset systems—not only in static documents.
              </p>
              <p className="body-copy">
                Stepes supports documents, software strings, structured files, graphics, training content, and recurring digital updates through scalable multilingual workflows that can connect with content platforms and enterprise systems.
              </p>
              <div className="inline-links">
                <EditorialLink href={URLS.integrations}>Enterprise Integrations</EditorialLink>
                <EditorialLink href={URLS.api}>Translation API</EditorialLink>
              </div>
            </div>
            <div className="digital-visual" aria-label="Connected construction content workflow">
              <div className="digital-core">
                <span>STEPES</span>
                <strong>Connected Translation Workflow</strong>
                <small>AI · terminology · review · QA · reuse</small>
              </div>
              <div className="digital-node-grid">
                {digitalNodes.map((item) => <div className="digital-node" key={item}>{item}</div>)}
              </div>
              <div className="digital-output">Multilingual project content from design through operations</div>
            </div>
          </div>
        </section>

        <section className="section section-white ai-section">
          <div className="container ai-grid">
            <div className="ai-copy heading-group heading-left mobile-center">
              <Eyebrow>AI + HUMAN</Eyebrow>
              <h2>AI Translation Built for Technical Construction Content</h2>
              <p className="section-intro">
                Large construction and infrastructure programs can generate substantial volumes of repetitive and continuously changing content. The most effective translation workflow depends on what the information is used for and what happens if it is wrong.
              </p>
              <p className="body-copy">
                Stepes combines AI-enabled translation, translation memory, terminology management, automated QA, professional linguists, and configurable human review so project teams can balance speed, consistency, quality, and business risk.
              </p>
              <div className="inline-links">
                <EditorialLink href={URLS.aiHuman}>AI + Human Translation Workflow</EditorialLink>
                <EditorialLink href={URLS.quality}>Translation Quality Assurance</EditorialLink>
              </div>
            </div>
            <div className="ai-workflow">
              {aiWorkflow.map(([title, body], index) => (
                <article className="ai-row" key={title}>
                  <div className="ai-index">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="container risk-band">
            <div className="risk-col">
              <div className="risk-label">Higher-impact content</div>
              <h3>Increase professional review where consequences are greater.</h3>
              <p>Safety procedures, contracts, engineering specifications, operating instructions, and other critical material can receive stronger specialist review and approval controls.</p>
            </div>
            <div className="risk-col">
              <div className="risk-label">High-volume recurring content</div>
              <h3>Use automation where it creates controlled efficiency.</h3>
              <p>Recurring technical documentation, project updates, knowledge content, training, and appropriate operational materials can benefit more extensively from AI, terminology, and translation memory.</p>
            </div>
          </div>
        </section>

        <section className="section section-dark enterprise-section">
          <div className="container">
            <HeadingGroup
              eyebrow="ENTERPRISE TRANSLATION OPERATIONS"
              title="Keep Terminology, Workflows, and Project Content Connected"
              intro="Large infrastructure programs can involve thousands of files, numerous disciplines, many languages, frequent revisions, distributed reviewers, and years of recurring documentation. Stepes helps manage those requirements as one multilingual program rather than a collection of disconnected projects."
              dark
            />
            <div className="enterprise-grid">
              {enterpriseCapabilities.map((item) => (
                <article className="enterprise-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.link ? <EditorialLink href={item.link.href} light>{item.link.label}</EditorialLink> : null}
                  {item.links ? (
                    <div className="stack-links">
                      {item.links.map((link) => <EditorialLink href={link.href} light key={link.href}>{link.label}</EditorialLink>)}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="enterprise-band">
              <div>
                <h3>Centralize multilingual project delivery.</h3>
                <p>Bring requests, language assets, workflow routing, professional review, project visibility, approvals, recurring revisions, and reporting into a more controlled enterprise operating model.</p>
              </div>
              <div className="enterprise-band-links">
                <EditorialLink href={URLS.enterprise} light>Enterprise Translation Management</EditorialLink>
                <EditorialLink href={URLS.analytics} light>Translation Reporting &amp; Analytics</EditorialLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white global-section">
          <div className="container global-grid">
            <div className="global-copy">
              <HeadingGroup
                title="Scale Construction Translation Across Global Markets"
                intro="Construction and infrastructure projects connect international engineering expertise, equipment supply chains, regional contractors, local authorities, and multilingual workforces. Stepes supports professional translation across more than 100 languages and regional variants."
                align="left"
              />
              <p className="body-copy global-body">
                Whether you need one technical package translated for a local project or coordinated multilingual delivery across countries and project phases, Stepes provides scalable language resources and workflows designed for recurring technical content.
              </p>
              <EditorialLink href={URLS.languages}>Explore Translation Languages</EditorialLink>
            </div>
            <div className="region-panel" aria-label="Global construction translation coverage">
              {[
                "North America",
                "Latin America",
                "Europe",
                "Asia-Pacific",
                "Middle East",
                "Africa",
              ].map((region) => (
                <div className="region-row" key={region}>
                  <span>{region}</span>
                  <span aria-hidden="true">↗</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft related-section">
          <div className="container">
            <HeadingGroup
              title="Explore Related Construction & Infrastructure Translation Expertise"
              intro="Explore dedicated Stepes expertise for rail, engineering, heavy equipment, aviation, renewable energy, and complex technical documentation."
            />
            <div className="related-grid">
              {related.map(([title, body, href]) => (
                <a className="related-item" href={href} key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <div className="related-arrow" aria-hidden="true"><Arrow size={19} /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark why-section">
          <div className="container">
            <HeadingGroup
              title="Why Construction and Infrastructure Companies Choose Stepes"
              intro="Combine specialized language expertise with project terminology control, ISO-aligned quality processes, risk-based review, AI-enabled efficiency, and enterprise translation technology for complex multilingual programs."
              dark
            />
            <div className="why-grid">
              {whyStepes.map(([title, body]) => (
                <article className="why-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white faq-section">
          <div className="container faq-grid">
            <div className="faq-heading heading-group heading-left mobile-left">
              <h2>Construction &amp; Infrastructure Translation FAQs</h2>
              <p className="section-intro">
                Answers to common questions about construction documents, tenders, safety content, digital construction, AI workflows, terminology, and enterprise-scale infrastructure programs.
              </p>
            </div>
            <div className="faq-panel">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.q}>
                  <summary className="faq-question">
                    <span>{faq.q}</span>
                    <span className="faq-plus" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                    {faq.link ? <EditorialLink href={faq.link.href}>{faq.link.label}</EditorialLink> : null}
                    {faq.links ? (
                      <div className="stack-links horizontal-links faq-links">
                        {faq.links.map((link) => <EditorialLink href={link.href} key={link.href}>{link.label}</EditorialLink>)}
                      </div>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-wrap">
          <div className="container">
            <div className="final-cta">
              <div className="final-cta-copy">
                <h2>Translate Your Next Construction or Infrastructure Project With Stepes</h2>
                <p>
                  From engineering and international tenders to workforce safety, equipment documentation, commissioning, and long-term operations, Stepes helps global teams keep project information accurate, consistent, and ready to use across languages.
                </p>
              </div>
              <div className="final-cta-actions">
                <PrimaryButton href={URLS.quote}>Get a Translation Quote</PrimaryButton>
                <SecondaryButton href={URLS.contact}>Talk to an Expert</SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    --magenta: ${COLORS.magenta};
    --magenta-dark: ${COLORS.magentaDark};
    --burgundy: ${COLORS.burgundy};
    --blush: ${COLORS.blush};
    --blush-text: ${COLORS.blushText};
    --ink: ${COLORS.ink};
    --slate: ${COLORS.slate};
    --muted: ${COLORS.muted};
    --line: ${COLORS.line};
    --soft: ${COLORS.soft};
    --dark: ${COLORS.dark};
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  a { color: inherit; }
  button, summary { font: inherit; }

  .page-shell {
    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding: 96px 0; }
  .section-white { background: #fff; }
  .section-soft { background: var(--soft); }
  .section-blush { background: var(--blush); }
  .section-dark { background: var(--dark); color: #fff; }

  h1, h2, h3, p { margin: 0; overflow-wrap: break-word; }
  h1, h2, h3 { font-weight: 600; letter-spacing: -0.03em; }
  h1 { font-size: 48px; line-height: 1.04; }
  h2 { font-size: 36px; line-height: 1.08; }
  h3 { font-size: 24px; line-height: 1.18; }
  p { font-size: 16px; line-height: 1.78; color: var(--slate); }

  .eyebrow {
    margin-bottom: 18px;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--blush-text); }

  .heading-group { max-width: 820px; }
  .heading-center { margin-left: auto; margin-right: auto; text-align: center; }
  .heading-left { text-align: left; }
  .section-intro {
    margin-top: 22px;
    max-width: 820px;
    font-size: 18px;
    line-height: 1.72;
    color: var(--slate);
  }
  .heading-center .section-intro { margin-left: auto; margin-right: auto; }
  .intro-dark { color: #C8CFD9; }
  .body-copy { margin-top: 22px; max-width: 760px; }
  .dark-body { margin-top: 22px; max-width: 760px; color: #AEB7C5; }

  .btn {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 999px;
    padding: 13px 22px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
    max-width: 100%;
    white-space: normal;
    text-align: center;
  }
  .btn:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; }
  .btn-primary,
  .btn-primary:link,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible,
  .btn-primary *,
  .btn-primary:link *,
  .btn-primary:visited *,
  .btn-primary:hover *,
  .btn-primary:active *,
  .btn-primary:focus *,
  .btn-primary:focus-visible * {
    color: #fff !important;
  }
  .btn-primary svg,
  .btn-primary svg * { stroke: #fff !important; }
  .btn-primary {
    background: var(--magenta);
    border: 1px solid var(--magenta);
    box-shadow: 0 8px 24px rgba(193,29,99,.16);
  }
  .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
  .btn-secondary {
    background: #fff;
    border: 1px solid #D9DEE5;
    color: #1F2937;
  }
  .btn-secondary:hover { border-color: #B6BEC9; transform: translateY(-1px); }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--magenta);
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
    max-width: 100%;
    white-space: normal;
  }
  .editorial-link span { overflow-wrap: anywhere; }
  .editorial-link:hover { color: var(--magenta-dark); }
  .editorial-link svg { flex: 0 0 auto; transition: transform .16s ease; }
  .editorial-link:hover svg { transform: translateX(2px); }
  .editorial-link:focus-visible { outline: 2px solid rgba(193,29,99,.3); outline-offset: 4px; border-radius: 4px; }
  .editorial-link-light { color: var(--blush-text); }
  .editorial-link-light:hover { color: #FFD5E7; }

  .stack-links { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; margin-top: 18px; }
  .horizontal-links { flex-direction: row; flex-wrap: wrap; gap: 12px 22px; }
  .inline-links { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 26px; }

  .hero { padding: 104px 0 96px; }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.06fr) minmax(420px, .82fr);
    align-items: center;
    gap: 70px;
  }
  .hero-copy { max-width: 705px; }
  .hero-copy h1 { max-width: 700px; }
  .hero-lead {
    margin-top: 28px;
    max-width: 700px;
    font-size: 18px;
    line-height: 1.76;
    color: var(--slate);
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
  .hero-note {
    margin-top: 34px;
    padding-top: 26px;
    max-width: 680px;
    border-top: 1px solid var(--line);
    font-size: 16px;
    line-height: 1.75;
    color: var(--muted);
  }
  .hero-art {
    width: 100%;
    max-width: 560px;
    justify-self: end;
    border-radius: 30px;
    box-shadow: 0 24px 70px rgba(15,23,42,.08);
  }
  .hero-svg { display: block; width: 100%; height: auto; }

  .proof-strip { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .proof-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); padding-top: 0; padding-bottom: 0; }
  .proof-item { min-height: 112px; padding: 28px; }
  .proof-item + .proof-item { border-left: 1px solid var(--line); }
  .proof-title { font-size: 17px; font-weight: 600; line-height: 1.35; color: var(--ink); }
  .proof-body { margin-top: 8px; font-size: 16px; line-height: 1.55; color: var(--muted); }

  .overview-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 72px; align-items: start; }
  .overview-heading { max-width: 455px; }
  .overview-link { margin-top: 26px; }
  .overview-rows { border-top: 1px solid var(--line); }
  .overview-row { display: grid; grid-template-columns: 20px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .overview-marker { width: 14px; height: 2px; margin-top: 15px; background: var(--magenta); }
  .overview-row p { margin-top: 10px; max-width: 680px; }
  .overview-closing { margin-top: 28px; max-width: 720px; }

  .sector-grid {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    margin-top: 52px;
    border-top: 1px solid #DCE1E7;
    border-left: 1px solid #DCE1E7;
  }
  .sector-item {
    min-height: 285px;
    padding: 30px 30px 28px;
    border-right: 1px solid #DCE1E7;
    border-bottom: 1px solid #DCE1E7;
    background: rgba(255,255,255,.7);
  }
  .sector-item p { margin-top: 14px; }
  .sector-item > .editorial-link { margin-top: 20px; }
  .sector-item:last-child {
    grid-column: 1 / -1;
    min-height: auto;
    display: grid;
    grid-template-columns: minmax(260px,.72fr) minmax(0,1.28fr) auto;
    gap: 28px;
    align-items: start;
  }
  .sector-item:last-child p { margin-top: 0; }
  .sector-item:last-child > .editorial-link { margin-top: 2px; white-space: nowrap; }

  .lifecycle-section .heading-group { max-width: 920px; }
  .lifecycle-track {
    display: grid;
    grid-template-columns: repeat(6,minmax(0,1fr));
    margin-top: 52px;
    border-top: 1px solid #D7DDE4;
  }
  .lifecycle-step { padding: 28px 22px 0 0; }
  .lifecycle-step + .lifecycle-step { padding-left: 22px; border-left: 1px solid #D7DDE4; }
  .step-number { color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .08em; }
  .step-line { width: 34px; height: 2px; margin-top: 14px; background: #AAB2BE; }
  .lifecycle-step h3 { margin-top: 20px; font-size: 20px; }
  .lifecycle-step p { margin-top: 11px; font-size: 16px; line-height: 1.66; }
  .lifecycle-summary {
    margin-top: 42px;
    padding: 22px 26px;
    border-left: 3px solid var(--magenta);
    background: var(--soft);
    font-size: 17px;
    line-height: 1.65;
    color: #334155;
  }

  .project-docs-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 68px; align-items: start; }
  .project-docs-copy h2 { color: #fff; max-width: 570px; }
  .project-doc-links { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 28px; }
  .project-docs-panel { border: 1px solid rgba(255,255,255,.12); border-radius: 28px; overflow: hidden; background: rgba(255,255,255,.035); }
  .project-doc-row { display: grid; grid-template-columns: 112px 1fr; gap: 24px; padding: 30px; border-bottom: 1px solid rgba(255,255,255,.10); }
  .project-doc-row:last-child { border-bottom: 0; }
  .project-doc-label { padding-top: 5px; color: var(--blush-text); font-size: 11px; font-weight: 600; line-height: 1.4; letter-spacing: .13em; }
  .project-doc-row h3 { color: #fff; }
  .project-doc-row p { margin-top: 10px; color: #AEB7C5; }

  .safety-grid { display: grid; grid-template-columns: .84fr 1.16fr; gap: 70px; align-items: start; }
  .safety-copy h2 { max-width: 560px; }
  .safety-list { border-top: 1px solid #E5CBD6; }
  .safety-row { display: grid; grid-template-columns: 58px 1fr; gap: 20px; padding: 27px 0; border-bottom: 1px solid #E5CBD6; }
  .safety-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 16px; background: #fff; border: 1px solid #E9CFDA; color: #7B5366; }
  .safety-row p { margin-top: 9px; }

  .equipment-rows { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 54px; border-top: 1px solid var(--line); }
  .equipment-row { display: grid; grid-template-columns: 22px 1fr; gap: 18px; padding: 32px 32px 32px 0; border-bottom: 1px solid var(--line); }
  .equipment-row:nth-child(even) { padding-left: 32px; padding-right: 0; border-left: 1px solid var(--line); }
  .equipment-rule { width: 14px; height: 2px; margin-top: 15px; background: var(--magenta); }
  .equipment-content p { margin-top: 12px; }
  .equipment-content > .editorial-link { margin-top: 20px; }

  .digital-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 70px; align-items: center; }
  .digital-copy h2 { max-width: 570px; }
  .digital-visual { border: 1px solid #DDE2E8; border-radius: 28px; padding: 28px; background: #fff; box-shadow: 0 18px 55px rgba(15,23,42,.055); }
  .digital-core { padding: 22px 24px; border-radius: 20px; background: var(--dark); color: #fff; }
  .digital-core span { display: block; color: var(--blush-text); font-size: 11px; font-weight: 600; line-height: 1.4; letter-spacing: .13em; }
  .digital-core strong { display: block; margin-top: 7px; font-size: 22px; font-weight: 600; }
  .digital-core small { display: block; margin-top: 8px; color: #BBC4D0; font-size: 14px; line-height: 1.5; }
  .digital-node-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 10px; margin-top: 16px; }
  .digital-node { min-height: 58px; display: flex; align-items: center; padding: 11px 14px; border: 1px solid #E3E7EC; border-radius: 14px; color: #3F4A59; font-size: 16px; line-height: 1.35; background: #FAFBFC; }
  .digital-output { margin-top: 16px; padding: 16px 18px; border-top: 1px solid var(--line); color: var(--muted); font-size: 16px; line-height: 1.6; }

  .ai-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: start; }
  .ai-copy h2 { max-width: 570px; }
  .ai-workflow { border-top: 1px solid var(--line); }
  .ai-row { display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .ai-index { padding-top: 4px; color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .08em; }
  .ai-row p { margin-top: 8px; }
  .risk-band { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 58px; border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
  .risk-col { padding: 32px; }
  .risk-col + .risk-col { border-left: 1px solid var(--line); }
  .risk-label { color: var(--magenta); font-size: 11px; font-weight: 600; line-height: 1.4; letter-spacing: .13em; text-transform: uppercase; }
  .risk-col h3 { margin-top: 12px; }
  .risk-col p { margin-top: 12px; }

  .enterprise-section .heading-group h2 { color: #fff; }
  .enterprise-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 52px; border-top: 1px solid rgba(255,255,255,.12); border-left: 1px solid rgba(255,255,255,.12); }
  .enterprise-item { min-height: 260px; padding: 30px; border-right: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); }
  .enterprise-item h3 { color: #fff; }
  .enterprise-item p { margin-top: 12px; color: #AEB7C5; }
  .enterprise-item > .editorial-link { margin-top: 20px; }
  .enterprise-band { margin-top: 38px; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 36px; align-items: center; padding: 28px 0; border-top: 1px solid rgba(255,255,255,.13); border-bottom: 1px solid rgba(255,255,255,.13); }
  .enterprise-band h3 { color: #fff; }
  .enterprise-band p { margin-top: 9px; max-width: 780px; color: #AEB7C5; }
  .enterprise-band-links { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }

  .global-grid { display: grid; grid-template-columns: 1.08fr .72fr; gap: 70px; align-items: start; }
  .global-copy .heading-group { max-width: 760px; }
  .global-body { max-width: 760px; }
  .global-copy > .editorial-link { margin-top: 24px; }
  .region-panel { border-top: 1px solid var(--line); }
  .region-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 66px; border-bottom: 1px solid var(--line); color: #1F2937; font-size: 17px; font-weight: 600; }
  .region-row span:last-child { color: #98A2B3; }

  .related-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin-top: 50px; }
  .related-item { display: grid; grid-template-columns: 1fr 28px; gap: 24px; min-height: 200px; align-items: start; padding: 28px 30px; border: 1px solid var(--line); border-radius: 22px; text-decoration: none; background: #fff; transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease; }
  .related-item:hover { border-color: #D2BBC5; transform: translateY(-1px); box-shadow: 0 12px 32px rgba(15,23,42,.055); }
  .related-item:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 3px; }
  .related-item h3 { color: var(--ink); }
  .related-item p { margin-top: 10px; }
  .related-arrow { color: var(--magenta); padding-top: 3px; }

  .why-section .heading-group h2 { color: #fff; }
  .why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 52px; border-top: 1px solid rgba(255,255,255,.12); border-left: 1px solid rgba(255,255,255,.12); }
  .why-item { min-height: 230px; padding: 28px; border-right: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); }
  .why-item h3 { color: #fff; }
  .why-item p { margin-top: 12px; color: #AEB7C5; }

  .faq-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
  .faq-heading { max-width: 450px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-question { list-style: none; cursor: pointer; min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 22px 0; color: var(--ink); font-size: 18px; font-weight: 600; line-height: 1.4; }
  .faq-question::-webkit-details-marker { display: none; }
  .faq-question:focus-visible { outline: 2px solid rgba(193,29,99,.3); outline-offset: 4px; }
  .faq-plus { flex: 0 0 auto; color: #7B8796; font-size: 24px; font-weight: 400; line-height: 1; transition: transform .18s ease; }
  .faq-item[open] .faq-plus { transform: rotate(45deg); }
  .faq-answer { padding: 0 48px 26px 0; }
  .faq-answer p { max-width: 840px; }
  .faq-answer > .editorial-link { margin-top: 16px; }
  .faq-links { margin-top: 16px; }

  .final-cta-wrap { padding: 82px 0 96px; background: #fff; }
  .final-cta { display: grid; grid-template-columns: 1.2fr auto; gap: 48px; align-items: center; padding: 54px 58px; border: 1px solid #F0CFDC; border-radius: 30px; background: var(--blush); }
  .final-cta-copy { max-width: 780px; }
  .final-cta-copy h2 { max-width: 760px; }
  .final-cta-copy p { margin-top: 18px; max-width: 760px; font-size: 17px; }
  .final-cta-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: 1fr .8fr; gap: 48px; }
    .sector-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sector-item:last-child { grid-column: 1 / -1; grid-template-columns: minmax(220px,.8fr) minmax(0,1.2fr); }
    .sector-item:last-child > .editorial-link { grid-column: 2; }
    .lifecycle-track { grid-template-columns: repeat(3,minmax(0,1fr)); border-left: 1px solid #D7DDE4; }
    .lifecycle-step, .lifecycle-step + .lifecycle-step { padding: 26px 24px 28px; border-left: 0; border-right: 1px solid #D7DDE4; border-bottom: 1px solid #D7DDE4; }
  }

  @media (max-width: 900px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }

    .hero { padding: 88px 0; }
    .hero-grid { grid-template-columns: 1fr; gap: 48px; }
    .hero-copy { max-width: 780px; margin: 0 auto; text-align: center; }
    .hero-copy h1, .hero-lead { margin-left: auto; margin-right: auto; }
    .hero-actions { justify-content: center; }
    .hero-note { margin-left: auto; margin-right: auto; text-align: left; }
    .hero-art { max-width: 640px; margin: 0 auto; justify-self: center; }

    .proof-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .proof-item:nth-child(4) { border-top: 1px solid var(--line); }

    .overview-grid,
    .project-docs-grid,
    .safety-grid,
    .digital-grid,
    .ai-grid,
    .global-grid,
    .faq-grid {
      grid-template-columns: 1fr;
      gap: 46px;
    }

    .overview-heading,
    .project-docs-copy,
    .safety-copy,
    .digital-copy,
    .ai-copy,
    .global-copy .heading-group {
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .overview-heading .section-intro,
    .project-docs-copy .section-intro,
    .safety-copy .section-intro,
    .digital-copy .section-intro,
    .ai-copy .section-intro,
    .global-copy .heading-group .section-intro {
      margin-left: auto;
      margin-right: auto;
    }
    .project-docs-copy .dark-body,
    .safety-copy .body-copy,
    .digital-copy .body-copy,
    .ai-copy .body-copy {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }
    .overview-link,
    .project-doc-links,
    .inline-links { justify-content: center; }
    .overview-link { display: flex; }

    .equipment-rows { grid-template-columns: 1fr; }
    .equipment-row, .equipment-row:nth-child(even) { padding: 28px 0; border-left: 0; }
    .enterprise-grid { grid-template-columns: 1fr; }
    .enterprise-band { grid-template-columns: 1fr; gap: 20px; }
    .enterprise-band-links { flex-direction: row; flex-wrap: wrap; gap: 12px 22px; }
    .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .global-copy > .editorial-link { display: flex; width: max-content; margin-left: auto; margin-right: auto; }
    .final-cta { grid-template-columns: 1fr; text-align: center; }
    .final-cta-copy { margin-left: auto; margin-right: auto; }
    .final-cta-copy p { margin-left: auto; margin-right: auto; }
    .final-cta-actions { justify-content: center; }
  }

  @media (max-width: 640px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    h1 { font-size: 38px; line-height: 1.06; }
    h2 { font-size: 30px; line-height: 1.12; }
    h3 { font-size: 20px; }
    p { font-size: 16px; line-height: 1.72; }
    .section-intro { font-size: 17px; line-height: 1.7; }

    .heading-group.mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
    .heading-group.mobile-center .section-intro { margin-left: auto; margin-right: auto; }
    .heading-group.mobile-left { text-align: left; margin-left: 0; margin-right: 0; }
    .heading-group.mobile-left .section-intro { margin-left: 0; margin-right: 0; }

    .hero { padding: 72px 0 68px; }
    .hero-copy { text-align: center; }
    .hero-lead { margin-top: 24px; font-size: 18px; }
    .hero-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .hero-actions .btn { width: 100%; }
    .hero-note { margin-top: 28px; padding-top: 22px; text-align: left; }
    .hero-art { border-radius: 24px; box-shadow: 0 16px 42px rgba(15,23,42,.07); }
    .hero-project-label, .hero-keywords { display: none; }

    .proof-grid { grid-template-columns: 1fr; }
    .proof-item { min-height: auto; padding: 22px 0; }
    .proof-item + .proof-item { border-left: 0; border-top: 1px solid var(--line); }

    .overview-grid { gap: 36px; }
    .overview-row { grid-template-columns: 18px 1fr; gap: 14px; padding: 24px 0; }
    .overview-marker { margin-top: 13px; }

    .sector-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .sector-item { min-height: auto; padding: 25px 22px; }
    .sector-item:last-child { grid-column: auto; display: block; }
    .sector-item:last-child p { margin-top: 14px; }
    .sector-item:last-child > .editorial-link { margin-top: 20px; white-space: normal; }

    .lifecycle-section .heading-group { text-align: left; }
    .lifecycle-track { grid-template-columns: 1fr; margin-top: 40px; border: 0; }
    .lifecycle-step, .lifecycle-step + .lifecycle-step {
      display: grid;
      grid-template-columns: 46px 1fr;
      column-gap: 16px;
      padding: 24px 0;
      border-left: 0;
      border-right: 0;
      border-top: 1px solid #D7DDE4;
      border-bottom: 0;
    }
    .lifecycle-step:last-child { border-bottom: 1px solid #D7DDE4; }
    .step-number { grid-column: 1; grid-row: 1; padding-top: 5px; }
    .step-line { display: none; }
    .lifecycle-step h3 { grid-column: 2; grid-row: 1; margin-top: 0; }
    .lifecycle-step p { grid-column: 2; grid-row: 2; }
    .lifecycle-summary { margin-top: 30px; padding: 18px 20px; }

    .project-docs-grid,
    .safety-grid,
    .digital-grid,
    .ai-grid,
    .global-grid,
    .faq-grid { gap: 36px; }
    .project-doc-row { grid-template-columns: 1fr; gap: 8px; padding: 25px 22px; }
    .project-doc-label { padding-top: 0; }
    .project-doc-links { justify-content: center; }

    .safety-row { grid-template-columns: 52px 1fr; gap: 16px; padding: 24px 0; }
    .safety-icon { width: 44px; height: 44px; }

    .equipment-rows { margin-top: 40px; }
    .equipment-row, .equipment-row:nth-child(even) { grid-template-columns: 18px 1fr; gap: 14px; padding: 25px 0; }
    .equipment-rule { margin-top: 12px; }
    .horizontal-links { flex-direction: column; gap: 10px; }

    .digital-visual { padding: 20px; }
    .digital-node-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }

    .ai-row { grid-template-columns: 42px 1fr; gap: 14px; padding: 24px 0; }
    .risk-band { grid-template-columns: 1fr; margin-top: 42px; }
    .risk-col { padding: 25px 22px; }
    .risk-col + .risk-col { border-left: 0; border-top: 1px solid var(--line); }

    .enterprise-grid { margin-top: 40px; }
    .enterprise-item { min-height: auto; padding: 25px 22px; }
    .enterprise-band { grid-template-columns: 1fr; gap: 20px; }
    .enterprise-band-links { gap: 12px; }

    .global-copy .heading-group { text-align: center; margin-left: auto; margin-right: auto; }
    .global-copy .heading-group .section-intro { margin-left: auto; margin-right: auto; }
    .global-body { text-align: left; }
    .global-copy > .editorial-link { margin-top: 22px; }

    .related-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .related-item { min-height: auto; padding: 24px 22px; }

    .why-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .why-item { min-height: auto; padding: 24px 22px; }

    .faq-heading { text-align: left !important; }
    .faq-question { min-height: 72px; padding: 20px 0; font-size: 17px; }
    .faq-answer { padding: 0 0 24px; }
    .faq-links { align-items: flex-start; }

    .final-cta-wrap { padding: 68px 0 76px; }
    .final-cta { gap: 30px; padding: 36px 24px; border-radius: 24px; }
    .final-cta-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .final-cta-actions .btn { width: 100%; }
    .final-cta-copy { text-align: center; }
  }

  @media (max-width: 360px) {
    .digital-node-grid { grid-template-columns: 1fr; }
    .sector-item, .project-doc-row, .risk-col, .enterprise-item, .related-item, .why-item { padding-left: 18px; padding-right: 18px; }
  }
`;

export default App;
