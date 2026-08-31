import React from "react";

const LINKS = {
  quote: "https://www.stepes.com/document-translation-quote/",
  contact: "https://www.stepes.com/contact-sales/",
  k12: "https://www.stepes.com/k12-translation-services/",
  higherEd: "https://www.stepes.com/higher-education-translation-services/",
  software: "https://www.stepes.com/software-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  lifeSciences: "https://www.stepes.com/life-sciences-translation-services/",
  engineering: "https://www.stepes.com/engineering-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  interpreting: "https://www.stepes.com/interpretation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  website: "https://www.stepes.com/website-translation-services/",
  multimedia: "https://www.stepes.com/multimedia-translation-services/",
  security: "https://www.stepes.com/resources/security-and-compliance/",
  iso: "https://www.stepes.com/iso-certified-translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
};

const Arrow = ({ size = 18 }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 18 }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none">
    <path d="M5 12.5l4.1 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, size = 22 }) => {
  const common = { stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    school: <><path d="M3 10l9-5 9 5-9 5-9-5Z" {...common}/><path d="M6 13v4.5M18 13v4.5M8 19h8M21 10v5" {...common}/></>,
    university: <><path d="M3 9h18L12 4 3 9Z" {...common}/><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 19h18" {...common}/></>,
    laptop: <><rect x="4" y="5" width="16" height="11" rx="2" {...common}/><path d="M2.5 19h19M9 9h6M8 12h8" {...common}/></>,
    book: <><path d="M4 5.5c2.6-.7 5.3-.2 8 1.5v12c-2.7-1.7-5.4-2.2-8-1.5v-12Z" {...common}/><path d="M20 5.5c-2.6-.7-5.3-.2-8 1.5v12c2.7-1.7 5.4-2.2 8-1.5v-12Z" {...common}/></>,
    users: <><path d="M8.4 12a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM15.8 11a2.6 2.6 0 1 0 0-5.2" {...common}/><path d="M3.5 19c.5-3 2.2-4.5 4.9-4.5s4.5 1.5 5 4.5M14 14.5c3.5-.4 5.6 1.1 6.2 4.5" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="8.5" {...common}/><path d="M3.5 12h17M12 3.5c2.6 2.3 3.8 5.1 3.8 8.5s-1.2 6.2-3.8 8.5M12 3.5C9.4 5.8 8.2 8.6 8.2 12s1.2 6.2 3.8 8.5" {...common}/></>,
    shield: <><path d="M12 3.5 19 6v5.6c0 4.2-2.3 7-7 8.9-4.7-1.9-7-4.7-7-8.9V6l7-2.5Z" {...common}/><path d="m8.8 12 2.1 2.1 4.5-4.7" {...common}/></>,
    speech: <><path d="M4 5.5h16v10H9l-4.5 3v-3H4v-10Z" {...common}/><path d="M8 9h8M8 12h5" {...common}/></>,
    accessibility: <><circle cx="12" cy="4.8" r="1.7" {...common}/><path d="M5.5 8.2h13M12 8.2v5.2M8.5 20l3.5-6.6 3.5 6.6M8.7 9.5l-2.4 4.2M15.3 9.5l2.4 4.2" {...common}/></>,
    layers: <><path d="m12 4 8 4-8 4-8-4 8-4Z" {...common}/><path d="m4 12 8 4 8-4M4 16l8 4 8-4" {...common}/></>,
    workflow: <><circle cx="5" cy="12" r="2" {...common}/><circle cx="19" cy="6" r="2" {...common}/><circle cx="19" cy="18" r="2" {...common}/><path d="M7 12h4c3 0 3-6 6-6M11 12c3 0 3 6 6 6" {...common}/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...common}/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" {...common}/></>,
    translate: <><rect x="3" y="4" width="9" height="9" rx="2" {...common}/><rect x="12" y="11" width="9" height="9" rx="2" {...common}/><path d="M6 8h4M8 6v4M14.5 17l2-4 2 4M15.3 15.5h2.4" {...common}/></>,
    media: <><rect x="3" y="5" width="18" height="14" rx="2" {...common}/><path d="m10 9 5 3-5 3V9ZM7 18h10" {...common}/></>,
    brain: <><path d="M9.3 5.2A3.2 3.2 0 0 1 15 7a3.2 3.2 0 0 1 2.8 4.8 3.2 3.2 0 0 1-2.3 5.1A3.2 3.2 0 0 1 9.8 19a3.2 3.2 0 0 1-3.4-4.8A3.2 3.2 0 0 1 7.2 8a3.2 3.2 0 0 1 2.1-2.8Z" {...common}/><path d="M12 6.4v11.2M8.5 9.2c1 .2 1.8.7 2.3 1.6M15.5 9.2c-1 .2-1.8.7-2.3 1.6M8.2 14.5c1.2-.1 2.1.3 2.8 1.2M15.8 14.5c-1.2-.1-2.1.3-2.8 1.2" {...common}/></>,
    pencil: <><path d="m5 16 10-10 3 3-10 10-4 1 1-4Z" {...common}/><path d="m13.5 7.5 3 3M5 16l3 3" {...common}/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill="none">{icons[name] || icons.book}</svg>;
};

const SectionHeading = ({ eyebrow, title, intro, centered = true, dark = false, id }) => (
  <div className={`section-heading ${centered ? "section-heading--center" : ""}`}>
    {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
    <h2 id={id}>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const TextLink = ({ href, children, light = false }) => (
  <a className={`text-link ${light ? "text-link--light" : ""}`} href={href}>
    <span>{children}</span><Arrow size={17} />
  </a>
);

const Pill = ({ href, children, secondary = false, darkSecondary = false }) => (
  <a className={`pill ${secondary ? "pill--secondary" : ""} ${darkSecondary ? "pill--dark-secondary" : ""}`} href={href}>
    <span>{children}</span><Arrow size={18} />
  </a>
);

const MarkerItem = ({ children, light = false }) => (
  <li className={`marker-item ${light ? "marker-item--light" : ""}`}><span className="marker-line" aria-hidden="true"/><span>{children}</span></li>
);

const ServiceIcon = ({ name }) => <div className="icon-box"><Icon name={name}/></div>;

const LogoCloud = () => {
  const logos = [
    "Columbia University",
    "University of Pennsylvania",
    "UC Berkeley",
    "Johns Hopkins University",
    "University of Michigan",
    "Penn State",
    "Boston University",
    "UC Davis",
    "Virginia Tech",
    "London Business School",
  ];
  return (
    <div className="logo-grid" aria-label="Selected education organizations">
      {logos.map((logo) => <div className="logo-wordmark" key={logo}>{logo}</div>)}
    </div>
  );
};

const HeroVisual = () => (
  <div className="hero-visual" aria-label="Multilingual education experience illustration">
    <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
    <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
    <div className="learning-panel">
      <div className="learning-panel__top">
        <div>
          <span className="mock-kicker">GLOBAL LEARNING</span>
          <strong>Course experience</strong>
        </div>
        <span className="status-dot"><i />Localized</span>
      </div>
      <div className="lesson-card">
        <div className="lesson-thumb"><Icon name="book" size={31}/></div>
        <div className="lesson-copy">
          <span>Module 04</span>
          <strong>Systems &amp; Society</strong>
          <div className="progress"><i /></div>
        </div>
      </div>
      <div className="language-row">
        <span className="language-chip language-chip--active">EN</span>
        <span className="language-chip">ES</span>
        <span className="language-chip">ZH</span>
        <span className="language-chip">AR</span>
      </div>
    </div>
    <div className="translation-tile translation-tile--left" aria-hidden="true">
      <span>A</span><small>EN</small>
    </div>
    <div className="translation-symbol" aria-hidden="true"><Icon name="translate" size={27}/></div>
    <div className="translation-tile translation-tile--right" aria-hidden="true">
      <span>文</span><small>ZH</small>
    </div>
    <div className="student-card student-card--one" aria-hidden="true"><span className="avatar">M</span><div><strong>Student</strong><small>Learning portal</small></div></div>
    <div className="student-card student-card--two" aria-hidden="true"><span className="avatar">F</span><div><strong>Family</strong><small>School updates</small></div></div>
  </div>
);

const ExperienceMap = () => {
  const items = ["Enrollment", "Instruction", "Assessment", "Student Services", "Digital Platforms", "Academic Records"];
  return (
    <div className="experience-map">
      <div className="experience-map__line" aria-hidden="true" />
      {items.map((item, index) => (
        <div className="experience-node" key={item}>
          <span className={index === 2 ? "experience-dot experience-dot--active" : "experience-dot"} />
          <span>{item}</span>
        </div>
      ))}
      <div className="experience-message"><Icon name="translate" size={20}/><span>One consistent multilingual experience</span></div>
    </div>
  );
};

const AudienceRow = ({ icon, title, text, link, label }) => (
  <div className="audience-row">
    <ServiceIcon name={icon}/>
    <div className="audience-row__body">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    {link ? <TextLink href={link}>{label}</TextLink> : <span />}
  </div>
);

const DetailCluster = ({ title, items }) => (
  <div className="detail-cluster">
    <h3>{title}</h3>
    <ul className="clean-list">
      {items.map((item) => <li key={item}><Check/><span>{item}</span></li>)}
    </ul>
  </div>
);

const UniversityJourney = () => {
  const stages = [
    { title: "Recruitment & Admissions", text: "Programs, campaigns, applications, requirements, acceptance and orientation." },
    { title: "Student Services", text: "Housing, health, financial aid, campus safety and international student resources." },
    { title: "Academics", text: "Course information, syllabi, learning materials, assessments and departmental content." },
    { title: "Research", text: "Research reports, abstracts, study materials, presentations and scholarly communication." },
    { title: "Global Programs", text: "Study abroad, student exchange, partnerships, mobility and institutional agreements." },
    { title: "Institutional Communication", text: "Administration, policies, HR, alumni, advancement and global marketing." },
  ];
  return (
    <div className="journey-grid">
      {stages.map((stage, index) => (
        <div className="journey-item" key={stage.title}>
          <div className="journey-step">{String(index + 1).padStart(2, "0")}</div>
          <div><h3>{stage.title}</h3><p>{stage.text}</p></div>
        </div>
      ))}
    </div>
  );
};

const EdTechVisual = () => (
  <div className="product-ui" aria-label="Localized education software interface example">
    <div className="product-ui__bar">
      <span className="ui-brand"><i />Learning Platform</span>
      <span className="ui-locale">Español <span>⌄</span></span>
    </div>
    <div className="product-ui__body">
      <aside className="ui-sidebar">
        <span className="ui-side-active">Inicio</span>
        <span>Cursos</span>
        <span>Evaluaciones</span>
        <span>Progreso</span>
      </aside>
      <div className="ui-content">
        <span className="mock-kicker">CURSO ACTIVO</span>
        <h3>Aprendizaje global</h3>
        <p>Contenido, interfaz y evaluación alineados en el mismo idioma.</p>
        <div className="ui-course-row">
          <div><strong>Unidad 03</strong><span>Colaboración digital</span></div>
          <span className="ui-status">En curso</span>
        </div>
        <div className="ui-qa-row"><Check/><span>Terminología validada</span></div>
      </div>
    </div>
    <div className="product-ui__footer"><span>UI</span><span>Curriculum</span><span>Assessment</span><span>Support</span></div>
  </div>
);

const ContentBand = ({ title, items }) => (
  <div className="content-band">
    <h3>{title}</h3>
    <p>{items.join(" · ")}</p>
  </div>
);

const DisciplineRow = ({ title, text, link, label }) => (
  <div className="discipline-row">
    <h3>{title}</h3>
    <p>{text}</p>
    {link ? <TextLink href={link}>{label}</TextLink> : <span />}
  </div>
);

const ELearningVisual = () => (
  <div className="course-stage" aria-label="Digital learning localization illustration">
    <div className="course-stage__screen">
      <div className="course-stage__nav"><span>MODULE 03</span><span>2 / 6</span></div>
      <div className="course-stage__art"><Icon name="media" size={43}/></div>
      <h3>Build skills in every language</h3>
      <p>Localized narration, captions, interactions and assessments.</p>
      <div className="course-stage__controls"><span>◀</span><span className="play">▶</span><span>▶</span></div>
    </div>
    <div className="course-format-stack" aria-hidden="true">
      <span>SCORM</span><span>STORYLINE</span><span>LMS</span><span>CAPTIONS</span>
    </div>
  </div>
);

const WorkflowSpectrum = () => {
  const items = [
    { tag: "HIGHER CONTROL", title: "Professional Translation", text: "For sensitive, complex, highly visible, or subject-intensive educational content where human linguistic judgment is central." },
    { tag: "BALANCED SCALE", title: "AI + Professional Review", text: "For scalable programs that benefit from AI-assisted production with professional linguistic validation and controlled terminology." },
    { tag: "SELECTED USE CASES", title: "AI Translation", text: "For appropriate lower-risk or high-volume content where audience, quality expectations, and intended use support greater automation." },
  ];
  return (
    <div className="spectrum">
      {items.map((item) => <div className="spectrum-item" key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}
    </div>
  );
};

const TerminologyVisual = () => (
  <div className="term-visual" aria-label="Education terminology consistency diagram">
    <div className="term-core"><span>APPROVED</span><strong>Multilingual<br/>Terminology</strong></div>
    <div className="term-source term-source--one"><Icon name="globe"/><span>Website</span></div>
    <div className="term-source term-source--two"><Icon name="school"/><span>Admissions</span></div>
    <div className="term-source term-source--three"><Icon name="laptop"/><span>Portal</span></div>
    <div className="term-source term-source--four"><Icon name="book"/><span>Curriculum</span></div>
    <svg className="term-lines" aria-hidden="true" viewBox="0 0 500 390" preserveAspectRatio="none">
      <path d="M250 195 C170 120 125 95 82 72"/><path d="M250 195 C335 118 385 93 430 73"/>
      <path d="M250 195 C165 278 120 300 78 324"/><path d="M250 195 C335 276 385 300 430 324"/>
    </svg>
  </div>
);

const SecurityGrid = () => {
  const items = [
    { icon: "lock", title: "Controlled Project Access", text: "Limit participation, file access, review responsibilities, and project permissions according to project requirements." },
    { icon: "shield", title: "Confidential Content Handling", text: "Support confidentiality requirements and NDAs for sensitive, student-related, research, and unreleased content." },
    { icon: "users", title: "Defined Review & Approval", text: "Establish clear roles for linguists, reviewers, project stakeholders, subject-matter experts, and customer approvers." },
    { icon: "workflow", title: "Documented Quality Processes", text: "Use structured translation, review, issue management, and quality workflows when additional control and traceability are required." },
  ];
  return <div className="security-grid">{items.map((item) => <div className="security-item" key={item.title}><ServiceIcon name={item.icon}/><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div>;
};

const AccessibilityVisual = () => (
  <div className="access-visual" aria-label="Multilingual accessibility content illustration">
    <div className="access-screen">
      <div className="access-screen__header"><span>LEARNING VIDEO</span><span>CC</span></div>
      <div className="access-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
      <div className="caption-box">Aprender juntos, en todos los idiomas.</div>
      <div className="transcript-row"><span>00:18</span><div><i/><i/><i/></div></div>
    </div>
    <div className="access-badge"><Icon name="accessibility" size={26}/><span>Language + Accessibility</span></div>
  </div>
);

const Workflow = () => {
  const steps = [
    ["Understand", "Audience, languages, subject matter, use, technology, quality, and delivery requirements."],
    ["Prepare", "Source files, terminology, references, translation memory, style guidance, and technical requirements."],
    ["Translate", "Professional linguists and the appropriate translation workflow for content and risk."],
    ["Review", "Linguistic, subject-matter, customer, or additional validation according to scope."],
    ["Localize", "Formatting, software, multimedia, courseware, and digital implementation when required."],
    ["Validate", "Linguistic QA, formatting checks, in-context review, and functional testing as appropriate."],
    ["Maintain", "Approved terminology, translation memory, style decisions, and reviewer feedback for future updates."],
  ];
  return (
    <div className="workflow">
      {steps.map(([title, text], index) => (
        <div className="workflow-step" key={title}>
          <div className="workflow-step__number">{String(index + 1).padStart(2, "0")}</div>
          <div><h3>{title}</h3><p>{text}</p></div>
        </div>
      ))}
    </div>
  );
};

const LanguagePanel = () => {
  const languages = ["Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Portuguese", "Arabic", "Vietnamese", "Hindi", "Dutch", "Swedish"];
  return <div className="language-cloud">{languages.map((language) => <span key={language}>{language}</span>)}</div>;
};

const WhyGrid = () => {
  const items = [
    ["school", "Education Domain Expertise", "Multilingual communication across K–12, higher education, EdTech, academic content, and digital learning."],
    ["brain", "Subject-Matter Linguists", "Professional translators matched to academic disciplines and educational content types—not language fluency alone."],
    ["translate", "AI + Professional Expertise", "Workflow choices matched to audience, content, risk, scale, and required quality level."],
    ["laptop", "Digital Localization Expertise", "Software, eLearning, multimedia, websites, structured content, and multilingual QA."],
    ["layers", "Enterprise Terminology", "Approved terminology, translation memory, style guidance, and reviewer decisions across recurring content."],
    ["workflow", "Quality From Words to Experience", "Review language in the context in which students, families, educators, and learners will actually encounter it."],
  ];
  return <div className="why-grid">{items.map(([icon,title,text]) => <div className="why-item" key={title}><ServiceIcon name={icon}/><h3>{title}</h3><p>{text}</p></div>)}</div>;
};

const RelatedRow = ({ title, text, href }) => (
  <a className="related-row" href={href}>
    <div><h3>{title}</h3><p>{text}</p></div><span className="related-arrow"><Arrow/></span>
  </a>
);

const FAQS = [
  ["What types of educational content can Stepes translate?", "Stepes translates educational content across K–12, higher education, EdTech, academic publishing, and digital learning. Projects can include curriculum, course materials, student and family communications, admissions content, academic records, assessments, special education materials, research content, websites, educational software, eLearning courses, multimedia, and institutional communications. Stepes supports both individual projects and ongoing multilingual education programs."],
  ["Does Stepes provide translation services for K–12 schools and school districts?", "Yes. Stepes supports schools, districts, education agencies, and organizations serving students and families with translation for enrollment materials, parent communications, handbooks, school policies, report-card communications, special education materials, curriculum, assessments, digital resources, websites, and student-services information. Professional interpreting can also support real-time educational communication."],
  ["Can Stepes translate IEP and special education materials?", "Yes. Stepes supports translation of IEP-related materials, evaluations, notices, meeting documentation, consent materials, and other special education communications. Projects can be assigned to professional linguists familiar with education terminology, with additional review and terminology controls configured according to project requirements."],
  ["Does Stepes provide higher education and university translation services?", "Yes. Stepes supports colleges and universities across international recruitment, admissions, student services, academic departments, research, international programs, institutional communications, campus content, websites, and global marketing. Academic and instructional content can be matched with linguists who understand the relevant subject area."],
  ["Can Stepes localize EdTech software and learning platforms?", "Yes. Stepes combines education translation with software localization for EdTech applications, learning platforms, assessment systems, student portals, classroom software, digital curriculum, teacher dashboards, and other educational products. Localization can include UI translation, structured resource files, terminology management, linguistic QA, in-context review, and multilingual product testing."],
  ["What is the difference between education translation and eLearning localization?", "Education translation covers the broader multilingual education ecosystem, including K–12 communication, university content, academic materials, student records, EdTech, research, curriculum, and institutional communication. eLearning localization focuses specifically on digital learning experiences such as course text, narration, video, subtitles, assessments, interactions, Storyline or Captivate engineering, SCORM packages, LMS delivery, and functional testing."],
  ["How does Stepes maintain consistent terminology across educational content?", "Stepes uses multilingual terminology databases, translation memory, style guidance, reference materials, and customer reviewer feedback to maintain approved language across recurring content. This is especially valuable when the same program names, academic concepts, interface terms, or institutional terminology appear across multiple channels."],
  ["Does Stepes provide education interpreting services?", "Yes. Professional interpreting can support parent-teacher conferences, student and family meetings, enrollment discussions, orientations, special education meetings, student services, campus events, and other educational communication. Delivery can be configured around customer requirements using available remote, telephone, or on-site options."],
  ["How does Stepes use AI for education translation?", "Stepes uses AI within a broader translation technology and professional expertise model. The appropriate workflow depends on content, audience, risk, complexity, volume, turnaround requirements, and desired quality. Some content requires professional human translation and detailed review, while other content can benefit from AI-assisted production with professional linguistic validation or greater automation for suitable lower-risk use cases."],
  ["How does Stepes handle sensitive student and institutional content?", "Educational projects can include academic records, student information, evaluations, admissions materials, research, confidential institutional content, and unreleased digital products. Stepes can configure access, confidentiality, review responsibilities, file handling, quality controls, and delivery requirements around the customer's specific security and privacy requirements."],
  ["Can Stepes localize accessible education and multimedia content?", "Yes. Stepes supports multilingual captions, subtitles, transcripts, multimedia, documents, websites, learning-platform content, alternative text, and other content used within accessible digital experiences. Localization teams can account for issues such as text expansion, writing direction, font support, layouts, captions, and multimedia synchronization."],
];

export default function EducationTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --ink:#101624; --text:#4F5F76; --muted:#718096; --line:#E2E8F0; --soft:#F7F9FC;
          --magenta:#C11D63; --magenta-dark:#A71954; --burgundy:#7A1542; --blush:#FDF2F7; --pink-light:#F2A7C6;
          --navy:#101A31; --navy-2:#18233D; --white:#FFFFFF; --radius-lg:30px; --radius-md:22px;
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; }
        .stepes-page { background:#fff; color:var(--ink); overflow:hidden; }
        .container { width:min(1280px, calc(100% - 112px)); margin:0 auto; }
        .section { padding:96px 0; }
        .section--dense { padding:80px 0; }
        .section--soft { background:var(--soft); }
        .section--blush { background:linear-gradient(180deg,#fff 0%,#FEF7FA 100%); }
        .section--dark { background:var(--navy); color:#fff; }
        .section-heading { max-width:820px; margin:0 0 48px; }
        .section-heading--center { text-align:center; margin-left:auto; margin-right:auto; }
        .section-heading h2 { font-size:36px; line-height:1.12; letter-spacing:-.025em; font-weight:600; margin:0; }
        .section-intro { font-size:18px; line-height:1.68; color:var(--text); margin:18px auto 0; max-width:800px; font-weight:400; }
        .section--dark .section-intro { color:#CAD3E2; }
        .eyebrow { font-size:11px; line-height:1.2; font-weight:600; letter-spacing:.18em; text-transform:uppercase; color:var(--magenta); margin-bottom:15px; }
        .eyebrow--dark { color:var(--pink-light); }
        h1,h2,h3,p { text-wrap:pretty; }
        p { font-size:16px; line-height:1.7; color:var(--text); font-weight:400; }
        h3 { font-size:24px; line-height:1.22; font-weight:600; letter-spacing:-.015em; margin:0; }
        .editorial-h2 { font-size:36px; line-height:1.12; letter-spacing:-.025em; font-weight:600; margin:0; }
        .pill { min-height:52px; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:0 24px; border-radius:999px; background:var(--magenta); color:#fff !important; text-decoration:none; font-size:16px; font-weight:600; white-space:nowrap; box-shadow:0 10px 24px rgba(193,29,99,.16); transition:.2s ease; }
        .pill *, .pill:visited, .pill:hover, .pill:focus, .pill:active { color:#fff !important; }
        .pill svg * { stroke:#fff !important; }
        .pill:hover { background:var(--magenta-dark); transform:translateY(-1px); }
        .pill:focus-visible { outline:3px solid rgba(193,29,99,.26); outline-offset:3px; }
        .pill--secondary { background:#fff; border:1px solid #D9E0EA; color:var(--ink) !important; box-shadow:none; }
        .pill--secondary *, .pill--secondary:visited, .pill--secondary:hover, .pill--secondary:focus, .pill--secondary:active { color:var(--ink) !important; }
        .pill--secondary svg * { stroke:currentColor !important; }
        .pill--secondary:hover { background:#F8FAFC; border-color:#C9D1DE; }
        .pill--dark-secondary { background:transparent; border:1px solid rgba(255,255,255,.33); box-shadow:none; }
        .pill--dark-secondary:hover { background:rgba(255,255,255,.08); }
        .text-link { display:inline-flex; align-items:center; gap:7px; color:var(--magenta); font-size:16px; font-weight:600; text-decoration:none; min-height:44px; transition:.2s ease; }
        .text-link:hover { color:var(--magenta-dark); gap:10px; }
        .text-link:focus-visible { outline:2px solid rgba(193,29,99,.35); outline-offset:3px; border-radius:4px; }
        .text-link--light { color:var(--pink-light); }
        .text-link--light:hover { color:#fff; }

        /* Hero */
        .hero { padding:104px 0 88px; background:radial-gradient(circle at 83% 40%,rgba(193,29,99,.08),transparent 34%), linear-gradient(180deg,#fff 0%,#FCFDFE 100%); }
        .hero-grid { display:grid; grid-template-columns:minmax(0,1.03fr) minmax(440px,.97fr); gap:72px; align-items:center; }
        .hero-copy { max-width:700px; }
        .hero h1 { font-size:48px; line-height:1.06; letter-spacing:-.035em; font-weight:600; margin:0; max-width:720px; }
        .hero-lede { font-size:19px; line-height:1.65; color:var(--text); margin:24px 0 30px; max-width:700px; }
        .hero-actions { display:flex; gap:12px; flex-wrap:wrap; }
        .hero-note { display:flex; align-items:center; gap:8px; margin-top:25px; color:#617086; font-size:16px; }
        .hero-note svg { color:var(--magenta); }
        .hero-visual { position:relative; min-height:500px; }
        .hero-orbit { position:absolute; border:1px solid #E6DBE1; border-radius:50%; }
        .hero-orbit--one { width:410px;height:410px;right:26px;top:48px; }
        .hero-orbit--two { width:310px;height:310px;right:77px;top:98px;border-style:dashed;opacity:.75; }
        .learning-panel { position:absolute; z-index:2; width:350px; right:54px; top:88px; background:#fff; border:1px solid #DDE4EE; border-radius:26px; box-shadow:0 28px 70px rgba(28,39,61,.12); padding:24px; }
        .learning-panel__top { display:flex; justify-content:space-between; gap:20px; align-items:flex-start; padding-bottom:20px; border-bottom:1px solid #E8EDF3; }
        .learning-panel__top strong { display:block; font-size:17px; margin-top:5px; }
        .mock-kicker { font-size:10px; letter-spacing:.15em; font-weight:600; color:#718096; }
        .status-dot { display:inline-flex; align-items:center; gap:7px; font-size:12px; color:#516078; white-space:nowrap; }
        .status-dot i { width:7px;height:7px;border-radius:50%;background:var(--magenta); }
        .lesson-card { display:flex; gap:14px; align-items:center; margin:22px 0; padding:15px; background:#F8FAFC; border-radius:18px; }
        .lesson-thumb { width:56px;height:56px;border-radius:16px;background:var(--blush);display:grid;place-items:center;color:var(--magenta);flex:0 0 auto; }
        .lesson-copy { min-width:0; flex:1; }
        .lesson-copy span { font-size:11px;color:#7A879A; }
        .lesson-copy strong { display:block;font-size:15px;margin-top:3px; }
        .progress { height:5px;background:#E6EAF0;border-radius:10px;margin-top:10px;overflow:hidden; }
        .progress i { display:block;width:68%;height:100%;background:var(--magenta); }
        .language-row { display:flex; gap:8px; }
        .language-chip { width:42px;height:34px;border-radius:10px;border:1px solid #DDE4EC;display:grid;place-items:center;font-size:12px;font-weight:600;color:#6A778B;background:#fff; }
        .language-chip--active { border-color:#E8B4C9;background:var(--blush);color:var(--magenta); }
        .translation-tile { position:absolute;z-index:4;width:92px;height:104px;border:1px solid #E0E6EE;background:#fff;border-radius:20px;box-shadow:0 16px 38px rgba(33,47,70,.10);display:flex;flex-direction:column;align-items:center;justify-content:center; }
        .translation-tile span { font-size:31px;font-weight:600; }
        .translation-tile small { font-size:10px;letter-spacing:.12em;color:#8590A1;margin-top:8px; }
        .translation-tile--left { left:22px;top:92px;transform:rotate(-4deg); }
        .translation-tile--right { right:0;bottom:52px;transform:rotate(4deg); }
        .translation-symbol { position:absolute;z-index:5;left:117px;top:179px;width:48px;height:48px;border-radius:50%;background:var(--magenta);color:#fff;display:grid;place-items:center;box-shadow:0 10px 24px rgba(193,29,99,.2); }
        .student-card { position:absolute;z-index:5;display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #E1E6EE;border-radius:16px;padding:11px 13px;box-shadow:0 12px 28px rgba(33,47,70,.09); }
        .student-card--one { left:1px;bottom:91px; }
        .student-card--two { left:131px;bottom:14px; }
        .avatar { width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#F2F5F9;color:#4E5E75;font-size:12px;font-weight:600; }
        .student-card strong,.student-card small { display:block; }
        .student-card strong { font-size:12px; }
        .student-card small { font-size:10px;color:#8290A3;margin-top:2px; }

        /* Proof */
        .proof-bar { border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff; }
        .proof-grid { display:grid;grid-template-columns:repeat(4,1fr); }
        .proof-item { padding:25px 28px;min-height:112px;display:flex;flex-direction:column;justify-content:center; }
        .proof-item + .proof-item { border-left:1px solid var(--line); }
        .proof-item strong { font-size:18px;font-weight:600; }
        .proof-item span { font-size:16px;color:var(--text);margin-top:6px;line-height:1.5; }

        /* Connected experience */
        .overview-grid { display:grid;grid-template-columns:minmax(300px,.82fr) minmax(0,1.18fr);gap:74px;align-items:start; }
        .overview-copy p { font-size:18px;line-height:1.7;margin:0 0 18px; }
        .experience-map { position:relative;border:1px solid var(--line);border-radius:var(--radius-lg);padding:34px;background:#fff;box-shadow:0 18px 50px rgba(31,44,66,.06);min-height:410px;display:grid;grid-template-columns:repeat(3,1fr);gap:34px 20px;align-content:center;margin-top:38px; }
        .experience-map__line { position:absolute;left:17%;right:17%;top:50%;height:1px;background:#DDE4ED; }
        .experience-node { position:relative;z-index:2;text-align:center;display:flex;flex-direction:column;align-items:center;gap:11px;font-size:16px;font-weight:600;color:#3E4C60; }
        .experience-dot { width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid #C9D3E1;box-shadow:0 0 0 7px #fff; }
        .experience-dot--active { border-color:var(--magenta);background:var(--magenta); }
        .experience-message { grid-column:1/-1;justify-self:center;display:inline-flex;align-items:center;gap:9px;background:var(--blush);color:var(--magenta);border-radius:999px;padding:11px 16px;font-size:16px;font-weight:600;position:relative;z-index:3; }

        /* Audience */
        .audience-list { border-top:1px solid var(--line); }
        .audience-row { display:grid;grid-template-columns:58px minmax(0,1fr) 230px;gap:22px;align-items:center;padding:28px 0;border-bottom:1px solid var(--line); }
        .icon-box { width:48px;height:48px;border-radius:14px;background:#F5F7FA;border:1px solid #E4E9F0;color:#5B6880;display:grid;place-items:center;flex:0 0 auto; }
        .audience-row h3 { font-size:22px; }
        .audience-row p { margin:8px 0 0;max-width:760px; }
        .audience-row .text-link { justify-self:end; }

        /* Logos */
        .logo-grid { display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff; }
        .logo-wordmark { min-height:112px;padding:22px;display:flex;align-items:center;justify-content:center;text-align:center;font-size:16px;font-weight:600;color:#46546A;border-right:1px solid var(--line);border-bottom:1px solid var(--line); }

        /* K12 */
        .split-intro { display:grid;grid-template-columns:minmax(0,.76fr) minmax(0,1.24fr);gap:80px;align-items:start;margin-bottom:54px; }
        .split-intro h2 { font-size:36px;line-height:1.12;letter-spacing:-.025em;margin:0; }
        .split-intro p { font-size:18px;margin:0; }
        .k12-grid { display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line); }
        .detail-cluster { padding:32px 34px;border-right:1px solid var(--line);border-bottom:1px solid var(--line); }
        .detail-cluster h3 { font-size:22px;margin-bottom:18px; }
        .clean-list { list-style:none;padding:0;margin:0;display:grid;gap:11px; }
        .clean-list li { display:flex;align-items:flex-start;gap:10px;font-size:16px;color:var(--text);line-height:1.55; }
        .clean-list svg { color:var(--magenta);flex:0 0 auto;margin-top:2px; }
        .callout-note { margin-top:34px;border-left:3px solid var(--magenta);padding:4px 0 4px 24px;max-width:970px; }
        .callout-note strong { display:block;font-size:18px;margin-bottom:7px; }
        .callout-note p { margin:0; }

        /* University dark */
        .journey-grid { display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.16);border-left:1px solid rgba(255,255,255,.16); }
        .journey-item { min-height:210px;padding:28px;border-right:1px solid rgba(255,255,255,.16);border-bottom:1px solid rgba(255,255,255,.16);display:grid;grid-template-columns:42px 1fr;gap:14px;align-items:start; }
        .journey-step { color:var(--pink-light);font-size:12px;letter-spacing:.12em;font-weight:600;margin-top:4px; }
        .journey-item h3 { font-size:21px;color:#fff; }
        .journey-item p { color:#C9D3E2;margin:10px 0 0; }
        .dark-link-row { display:flex;justify-content:center;margin-top:32px; }

        /* EdTech */
        .edtech-grid { display:grid;grid-template-columns:minmax(0,.9fr) minmax(500px,1.1fr);gap:72px;align-items:center; }
        .editorial-stack { display:grid;gap:0;border-top:1px solid var(--line);margin-top:30px; }
        .editorial-line { padding:20px 0;border-bottom:1px solid var(--line); }
        .editorial-line strong { font-size:17px;display:block; }
        .editorial-line p { margin:5px 0 0; }
        .product-ui { border:1px solid #DDE4EE;border-radius:28px;background:#fff;overflow:hidden;box-shadow:0 24px 65px rgba(32,46,69,.10); }
        .product-ui__bar { height:64px;border-bottom:1px solid #E4E9F0;display:flex;align-items:center;justify-content:space-between;padding:0 22px; }
        .ui-brand { font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px; }
        .ui-brand i { width:22px;height:22px;border-radius:7px;background:var(--magenta); }
        .ui-locale { font-size:12px;color:#5B6880;border:1px solid #DDE4ED;border-radius:10px;padding:8px 10px; }
        .product-ui__body { display:grid;grid-template-columns:150px 1fr;min-height:340px; }
        .ui-sidebar { background:#F8FAFC;border-right:1px solid #E4E9F0;padding:22px 14px;display:flex;flex-direction:column;gap:8px; }
        .ui-sidebar span { padding:10px 12px;border-radius:9px;font-size:12px;color:#65748A; }
        .ui-sidebar .ui-side-active { background:#fff;color:var(--magenta);font-weight:600;box-shadow:0 2px 8px rgba(31,44,66,.05); }
        .ui-content { padding:34px; }
        .ui-content h3 { font-size:27px;margin:10px 0 8px; }
        .ui-content p { max-width:420px;margin:0 0 28px; }
        .ui-course-row { border:1px solid #E4E9F0;border-radius:16px;padding:16px;display:flex;align-items:center;justify-content:space-between;gap:16px; }
        .ui-course-row strong,.ui-course-row span { display:block; }
        .ui-course-row strong { font-size:14px; }
        .ui-course-row div span { font-size:12px;color:#7A879A;margin-top:4px; }
        .ui-status { font-size:11px !important;color:var(--magenta) !important;background:var(--blush);padding:7px 9px;border-radius:999px; }
        .ui-qa-row { display:flex;align-items:center;gap:8px;margin-top:16px;font-size:13px;color:#5C6B80; }
        .ui-qa-row svg { color:var(--magenta); }
        .product-ui__footer { padding:14px 18px;border-top:1px solid #E4E9F0;display:flex;gap:7px;flex-wrap:wrap;background:#FCFDFE; }
        .product-ui__footer span { font-size:10px;font-weight:600;letter-spacing:.08em;color:#67768C;border:1px solid #E0E6EE;border-radius:999px;padding:7px 9px;background:#fff; }

        /* Content bands */
        .content-bands { display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line); }
        .content-band { padding:30px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line); }
        .content-band h3 { font-size:21px; }
        .content-band p { margin:10px 0 0; }
        .content-cta { display:flex;justify-content:center;gap:26px;flex-wrap:wrap;margin-top:34px; }

        /* Disciplines */
        .discipline-list { border-top:1px solid rgba(255,255,255,.17); }
        .discipline-row { display:grid;grid-template-columns:250px minmax(0,1fr) 210px;gap:26px;align-items:center;border-bottom:1px solid rgba(255,255,255,.17);padding:24px 0; }
        .discipline-row h3 { font-size:20px;color:#fff; }
        .discipline-row p { color:#C8D1DF;margin:0; }
        .discipline-row .text-link { justify-self:end; }

        /* eLearning */
        .elearning-grid { display:grid;grid-template-columns:minmax(0,1fr) minmax(450px,.9fr);gap:76px;align-items:center; }
        .feature-bullets { display:grid;grid-template-columns:repeat(2,1fr);gap:10px 24px;margin:26px 0; }
        .feature-bullets span { display:flex;align-items:center;gap:8px;font-size:16px;color:var(--text); }
        .feature-bullets svg { color:var(--magenta); }
        .course-stage { position:relative;min-height:410px; }
        .course-stage__screen { width:380px;border:1px solid #DDE4EE;border-radius:24px;background:#fff;box-shadow:0 22px 55px rgba(31,44,66,.10);padding:22px;position:absolute;left:20px;top:14px; }
        .course-stage__nav { display:flex;justify-content:space-between;font-size:10px;letter-spacing:.12em;color:#748297;font-weight:600; }
        .course-stage__art { height:150px;border-radius:18px;background:linear-gradient(135deg,#F7EEF2,#F3F6FA);display:grid;place-items:center;color:var(--magenta);margin:18px 0; }
        .course-stage__screen h3 { font-size:23px; }
        .course-stage__screen p { margin:8px 0 16px; }
        .course-stage__controls { display:flex;justify-content:center;gap:12px;align-items:center;color:#768399;font-size:12px; }
        .course-stage__controls span { width:34px;height:34px;border:1px solid #E1E6EE;border-radius:50%;display:grid;place-items:center; }
        .course-stage__controls .play { width:44px;height:44px;background:var(--magenta);color:#fff;border-color:var(--magenta); }
        .course-format-stack { position:absolute;right:6px;bottom:16px;display:grid;gap:8px; }
        .course-format-stack span { font-size:10px;font-weight:600;letter-spacing:.1em;background:#fff;border:1px solid #E0E6EE;border-radius:10px;padding:10px 12px;box-shadow:0 8px 20px rgba(31,44,66,.07); }

        /* Translation + interpreting */
        .language-access-grid { display:grid;grid-template-columns:repeat(2,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff; }
        .language-access-panel { padding:38px; }
        .language-access-panel + .language-access-panel { border-left:1px solid var(--line); }
        .language-access-panel .icon-box { margin-bottom:20px; }
        .language-access-panel h3 { font-size:25px; }
        .language-access-panel p { margin:10px 0 20px; }

        /* AI spectrum */
        .spectrum { display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff; }
        .spectrum-item { padding:36px 32px;min-height:300px; }
        .spectrum-item + .spectrum-item { border-left:1px solid var(--line); }
        .spectrum-item > span { font-size:10px;letter-spacing:.15em;font-weight:600;color:var(--magenta); }
        .spectrum-item h3 { margin-top:18px;font-size:23px; }
        .spectrum-item p { margin:12px 0 0; }
        .risk-note { margin:28px auto 0;max-width:980px;text-align:center;font-size:16px;color:var(--text); }

        /* Terminology */
        .term-grid { display:grid;grid-template-columns:minmax(0,.9fr) minmax(450px,1.1fr);gap:76px;align-items:center; }
        .term-assets { display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line);margin-top:26px; }
        .term-asset { padding:22px;border-right:1px solid var(--line);border-bottom:1px solid var(--line); }
        .term-asset strong { font-size:16px; }
        .term-asset p { margin:6px 0 0;font-size:16px; }
        .term-visual { position:relative;height:390px;border:1px solid var(--line);border-radius:30px;background:linear-gradient(180deg,#fff,#FAFBFD);overflow:hidden; }
        .term-core { position:absolute;z-index:3;left:50%;top:50%;transform:translate(-50%,-50%);width:180px;height:180px;border-radius:50%;background:var(--blush);border:1px solid #EDCADA;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center; }
        .term-core span { font-size:10px;letter-spacing:.14em;color:var(--magenta);font-weight:600; }
        .term-core strong { font-size:20px;line-height:1.25;margin-top:8px; }
        .term-source { position:absolute;z-index:3;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #E0E6EE;border-radius:13px;padding:10px 12px;color:#58677D;font-size:12px;font-weight:600;box-shadow:0 8px 20px rgba(31,44,66,.05); }
        .term-source svg { color:var(--magenta); }
        .term-source--one { left:26px;top:40px; }.term-source--two { right:24px;top:40px; }.term-source--three { left:26px;bottom:39px; }.term-source--four { right:24px;bottom:39px; }
        .term-lines { position:absolute;inset:0;width:100%;height:100%; }
        .term-lines path { fill:none;stroke:#DDE4EC;stroke-width:1.3;stroke-dasharray:5 6; }

        /* Security */
        .security-grid { display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line); }
        .security-item { padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;gap:18px;align-items:flex-start; }
        .security-item h3 { font-size:20px; }
        .security-item p { margin:8px 0 0; }
        .security-links { display:flex;justify-content:center;gap:28px;margin-top:30px;flex-wrap:wrap; }

        /* Accessibility */
        .access-grid { display:grid;grid-template-columns:minmax(0,.95fr) minmax(460px,1.05fr);gap:78px;align-items:center; }
        .access-list { margin:22px 0 0;columns:2;column-gap:28px;padding:0;list-style:none; }
        .access-list li { break-inside:avoid;display:flex;align-items:flex-start;gap:9px;margin-bottom:11px;font-size:16px;color:var(--text);line-height:1.5; }
        .access-list svg { color:var(--magenta);margin-top:2px;flex:0 0 auto; }
        .access-visual { position:relative;min-height:410px; }
        .access-screen { position:absolute;left:24px;top:18px;width:420px;border:1px solid #DDE4EE;border-radius:26px;background:#fff;box-shadow:0 23px 60px rgba(31,44,66,.10);padding:22px; }
        .access-screen__header { display:flex;justify-content:space-between;font-size:10px;font-weight:600;letter-spacing:.12em;color:#748297; }
        .access-screen__header span:last-child { background:var(--blush);color:var(--magenta);border-radius:7px;padding:4px 6px; }
        .access-wave { height:150px;border-radius:18px;background:linear-gradient(135deg,#F2F5F9,#FAF1F5);display:flex;align-items:center;justify-content:center;gap:7px;margin:18px 0; }
        .access-wave i { width:6px;border-radius:5px;background:#C8D1DD; }
        .access-wave i:nth-child(1){height:34px}.access-wave i:nth-child(2){height:62px}.access-wave i:nth-child(3){height:82px}.access-wave i:nth-child(4){height:48px}.access-wave i:nth-child(5){height:96px;background:var(--magenta)}.access-wave i:nth-child(6){height:68px}.access-wave i:nth-child(7){height:45px}.access-wave i:nth-child(8){height:73px}.access-wave i:nth-child(9){height:35px}
        .caption-box { border-left:3px solid var(--magenta);padding:13px 15px;background:#FBFCFE;font-size:16px;font-weight:600;color:#405066; }
        .transcript-row { display:flex;gap:12px;align-items:center;margin-top:16px;font-size:11px;color:#7D899B; }
        .transcript-row div { flex:1;display:grid;gap:5px; }
        .transcript-row i { display:block;height:5px;background:#E5EAF0;border-radius:5px; }
        .transcript-row i:nth-child(2){width:82%}.transcript-row i:nth-child(3){width:66%}
        .access-badge { position:absolute;right:6px;bottom:17px;background:#fff;border:1px solid #E1E6EE;border-radius:16px;box-shadow:0 12px 30px rgba(31,44,66,.08);padding:14px 16px;display:flex;align-items:center;gap:10px;color:var(--magenta);font-size:16px;font-weight:600; }

        .accessibility-note { margin-top:16px;padding-top:16px;border-top:1px solid var(--line); }

        /* Workflow */
        .workflow { display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid rgba(255,255,255,.17);border-left:1px solid rgba(255,255,255,.17); }
        .workflow-step { min-height:280px;padding:26px 20px;border-right:1px solid rgba(255,255,255,.17);border-bottom:1px solid rgba(255,255,255,.17); }
        .workflow-step__number { color:var(--pink-light);font-size:11px;font-weight:600;letter-spacing:.14em;margin-bottom:22px; }
        .workflow-step h3 { font-size:18px;color:#fff; }
        .workflow-step p { color:#C9D3E2;margin:9px 0 0;font-size:16px;line-height:1.6; }

        /* Continuous */
        .continuous-grid { display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:78px;align-items:center; }
        .continuous-rail { border:1px solid var(--line);border-radius:28px;background:#fff;overflow:hidden; }
        .continuous-row { display:grid;grid-template-columns:54px 1fr;gap:16px;padding:23px 26px;align-items:start; }
        .continuous-row + .continuous-row { border-top:1px solid var(--line); }
        .continuous-row .icon-box { width:44px;height:44px; }
        .continuous-row h3 { font-size:18px; }
        .continuous-row p { margin:6px 0 0; }

        /* Languages */
        .language-shell { background:linear-gradient(135deg,#FDF4F8,#F7F9FC);border:1px solid #EADCE3;border-radius:30px;padding:52px;display:grid;grid-template-columns:.78fr 1.22fr;gap:60px;align-items:center; }
        .language-shell h2 { font-size:36px;line-height:1.12;margin:0; }
        .language-shell p { margin:16px 0 22px;font-size:17px; }
        .language-cloud { display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end; }
        .language-cloud span { padding:11px 14px;border:1px solid #E3DCE1;background:#fff;border-radius:999px;font-size:16px;font-weight:600;color:#46556A; }

        /* Why */
        .why-grid { display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line); }
        .why-item { padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line); }
        .why-item .icon-box { margin-bottom:18px; }
        .why-item h3 { font-size:20px; }
        .why-item p { margin:8px 0 0; }

        /* Related */
        .related-list { border-top:1px solid var(--line); }
        .related-row { display:flex;align-items:center;justify-content:space-between;gap:28px;padding:24px 4px;border-bottom:1px solid var(--line);text-decoration:none;color:var(--ink);transition:.2s ease; }
        .related-row h3 { font-size:19px; }
        .related-row p { margin:6px 0 0;max-width:870px; }
        .related-arrow { width:44px;height:44px;border:1px solid #DDE4EC;border-radius:50%;display:grid;place-items:center;color:var(--magenta);flex:0 0 auto;transition:.2s ease; }
        .related-row:hover { padding-left:10px; }
        .related-row:hover .related-arrow { background:var(--blush);border-color:#EAC7D6; }
        .related-row:focus-visible { outline:2px solid rgba(193,29,99,.35);outline-offset:3px;border-radius:5px; }

        /* FAQ */
        .faq-shell { max-width:980px;margin:0 auto;border-top:1px solid var(--line); }
        .faq-item { border-bottom:1px solid var(--line); }
        .faq-item summary { list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:24px;min-height:76px;padding:20px 0;font-size:18px;font-weight:600;color:var(--ink); }
        .faq-item summary::-webkit-details-marker { display:none; }
        .faq-plus { width:34px;height:34px;border:1px solid #DDE4EC;border-radius:50%;display:grid;place-items:center;color:var(--magenta);font-size:20px;line-height:1;flex:0 0 auto;transition:.2s ease; }
        .faq-item[open] .faq-plus { transform:rotate(45deg);background:var(--blush);border-color:#EAC7D6; }
        .faq-answer { max-width:840px;padding:0 56px 22px 0; }
        .faq-answer p { margin:0;font-size:16px; }

        /* Final CTA */
        .final-wrap { padding:80px 0 0; }
        .final-cta { background:var(--burgundy);border-radius:30px;padding:68px 66px;color:#fff;display:grid;grid-template-columns:minmax(0,1fr) 286px;align-items:center;gap:56px;position:relative;overflow:hidden; }
        .final-cta:after { content:"";position:absolute;width:340px;height:340px;border-radius:50%;border:1px solid rgba(255,255,255,.12);right:-80px;top:-135px; }
        .final-copy { position:relative;z-index:2;max-width:770px; }
        .final-copy h2 { font-size:36px;line-height:1.12;margin:0;color:#fff;letter-spacing:-.025em; }
        .final-copy p { color:#F4DDE7;font-size:18px;margin:17px 0 0; }
        .final-actions { position:relative;z-index:2;display:grid;gap:12px;width:100%; }
        .final-actions .pill { width:100%;min-width:0;justify-content:space-between;padding-left:22px;padding-right:20px; }
        .final-cta .pill { background:#fff;color:var(--burgundy) !important;box-shadow:none; }
        .final-cta .pill *, .final-cta .pill:visited, .final-cta .pill:hover, .final-cta .pill:focus, .final-cta .pill:active { color:var(--burgundy) !important; }
        .final-cta .pill svg * { stroke:var(--burgundy) !important; }
        .final-cta .pill:hover { background:#FFF7FA; }
        .final-cta .pill--dark-secondary { background:transparent;color:#fff !important;border-color:rgba(255,255,255,.45); }
        .final-cta .pill--dark-secondary *, .final-cta .pill--dark-secondary:visited, .final-cta .pill--dark-secondary:hover, .final-cta .pill--dark-secondary:focus, .final-cta .pill--dark-secondary:active { color:#fff !important; }
        .final-cta .pill--dark-secondary svg * { stroke:#fff !important; }
        .final-cta .pill--dark-secondary:hover { background:rgba(255,255,255,.09); }
        .page-bottom-spacer { height:80px;background:#fff; }

        @media (max-width:1100px) {
          .container { width:min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns:1fr 470px;gap:42px; }
          .hero h1 { font-size:46px; }
          .proof-item { padding:22px 20px; }
          .workflow { grid-template-columns:repeat(4,1fr); }
          .journey-grid { grid-template-columns:repeat(2,1fr); }
          .logo-grid { grid-template-columns:repeat(4,1fr); }
        }

        @media (max-width:900px) {
          .container { width:calc(100% - 48px); }
          .section { padding:82px 0; }
          .section--dense { padding:72px 0; }
          .hero { padding:88px 0 76px; }
          .hero-grid,.overview-grid,.edtech-grid,.elearning-grid,.term-grid,.access-grid,.continuous-grid,.language-shell { grid-template-columns:1fr; }
          .overview-copy h2,
          .split-intro > div:first-child,
          .edtech-grid > div:first-child > .eyebrow,
          .edtech-grid > div:first-child > .editorial-h2,
          .elearning-grid > div:first-child > .eyebrow,
          .elearning-grid > div:first-child > .editorial-h2,
          .term-grid > div:first-child > .eyebrow,
          .term-grid > div:first-child > .editorial-h2,
          .access-grid > div:first-child > .eyebrow,
          .access-grid > div:first-child > .editorial-h2,
          .continuous-grid > div:first-child > .eyebrow,
          .continuous-grid > div:first-child > .editorial-h2,
          .language-shell > div:first-child > .eyebrow,
          .language-shell > div:first-child > h2 { text-align:center; }
          .hero-grid { gap:44px; }
          .hero-copy { max-width:760px; }
          .hero h1 { font-size:42px; }
          .hero-visual { min-height:470px;max-width:600px;width:100%;margin:0 auto; }
          .proof-grid { grid-template-columns:repeat(2,1fr); }
          .proof-item:nth-child(3) { border-left:0;border-top:1px solid var(--line); }
          .proof-item:nth-child(4) { border-top:1px solid var(--line); }
          .section-heading h2,.split-intro h2,.language-shell h2,.final-copy h2,.editorial-h2 { font-size:32px; }
          .overview-grid,.edtech-grid,.elearning-grid,.term-grid,.access-grid,.continuous-grid { gap:46px; }
          .split-intro { grid-template-columns:1fr;gap:20px; }
          .audience-row { grid-template-columns:58px minmax(0,1fr); }
          .audience-row .text-link { grid-column:2;justify-self:start; }
          .logo-grid { grid-template-columns:repeat(3,1fr); }
          .journey-grid { grid-template-columns:repeat(2,1fr); }
          .discipline-row { grid-template-columns:210px minmax(0,1fr); }
          .discipline-row .text-link { grid-column:2;justify-self:start; }
          .product-ui { max-width:690px;margin:0 auto;width:100%; }
          .course-stage { max-width:560px;margin:0 auto;width:100%; }
          .language-access-grid,.spectrum,.why-grid { grid-template-columns:1fr; }
          .language-access-panel + .language-access-panel,.spectrum-item + .spectrum-item { border-left:0;border-top:1px solid var(--line); }
          .spectrum-item { min-height:0; }
          .workflow { grid-template-columns:repeat(2,1fr); }
          .workflow-step { min-height:230px; }
          .language-cloud { justify-content:flex-start; }
          .final-cta { grid-template-columns:1fr;align-items:start;gap:30px; }
          .final-actions { max-width:340px; }
          .final-wrap { padding-top:72px; }
          .section-heading--center { text-align:center; }
        }

        @media (max-width:640px) {
          .container { width:calc(100% - 40px); }
          .section { padding:68px 0; }
          .section--dense { padding:64px 0; }
          .hero { padding:72px 0 64px; }
          .hero-grid { gap:34px; }
          .hero-copy { text-align:center; }
          .hero-copy .eyebrow { text-align:center; }
          .hero h1 { font-size:38px;max-width:none; }
          .hero-lede { font-size:18px; }
          .hero-actions { flex-direction:column; }
          .hero-actions .pill { width:100%; }
          .hero-note { justify-content:center;font-size:16px; }
          .hero-visual { min-height:410px;transform:scale(.92);transform-origin:top center;margin-bottom:-30px; }
          .learning-panel { width:310px;right:50%;transform:translateX(50%);top:80px; }
          .translation-tile--left { left:0;top:52px; }.translation-symbol { left:74px;top:139px; }.translation-tile--right { right:4px;bottom:14px; }
          .student-card--one { left:0;bottom:70px; }.student-card--two { left:98px;bottom:3px; }
          .hero-orbit--one { right:50%;transform:translateX(50%);width:355px;height:355px;top:40px; }.hero-orbit--two { right:50%;transform:translateX(50%);width:270px;height:270px;top:82px; }
          .proof-grid { grid-template-columns:1fr; }
          .proof-item + .proof-item { border-left:0;border-top:1px solid var(--line); }
          .proof-item { text-align:center;min-height:94px; }
          .section-heading { margin-bottom:36px; }
          .section-heading,.section-heading--center { text-align:center; }
          .section-heading h2,.split-intro h2,.language-shell h2,.final-copy h2,.editorial-h2 { font-size:30px; }
          .section-intro { font-size:17px; }
          .overview-copy { text-align:left; }
          .overview-copy .eyebrow,.overview-copy h2 { text-align:center; }
          .overview-copy p { font-size:17px; }
          .experience-map { grid-template-columns:repeat(2,1fr);padding:28px 18px;min-height:430px;margin-top:32px; }
          .experience-map__line { display:none; }
          .experience-message { grid-column:1/-1;text-align:center; }
          .audience-row { grid-template-columns:48px 1fr;gap:15px;padding:24px 0;align-items:start; }
          .audience-row h3 { font-size:20px; }
          .audience-row p { font-size:16px; }
          .audience-row .text-link { grid-column:1/-1;margin-left:63px; }
          .logo-grid { grid-template-columns:repeat(2,1fr); }
          .logo-wordmark { min-height:92px;padding:16px;font-size:16px; }
          .split-intro { text-align:left; }
          .split-intro h2,.split-intro .eyebrow { text-align:center; }
          .split-intro p { font-size:17px; }
          .k12-grid,.content-bands,.security-grid,.term-assets { grid-template-columns:1fr; }
          .detail-cluster,.content-band,.security-item,.term-asset { border-left:0; }
          .detail-cluster { padding:28px 22px; }
          .callout-note { padding-left:18px; }
          .journey-grid { grid-template-columns:1fr; }
          .journey-item { min-height:0;padding:25px 20px; }
          .discipline-row { grid-template-columns:1fr;gap:8px;padding:23px 0; }
          .discipline-row .text-link { grid-column:1;justify-self:start; }
          .product-ui__body { grid-template-columns:1fr; }
          .ui-sidebar { display:none; }
          .ui-content { padding:26px 22px; }
          .ui-content h3 { font-size:24px; }
          .ui-course-row { align-items:flex-start;flex-wrap:wrap; }
          .content-band { padding:26px 22px; }
          .content-cta { justify-content:flex-start; }
          .feature-bullets { grid-template-columns:1fr; }
          .course-stage { min-height:385px; }
          .course-stage__screen { width:min(315px, calc(100% - 18px));left:0; }
          .course-format-stack { right:0;bottom:0; }
          .language-access-panel { padding:30px 24px; }
          .spectrum-item { padding:30px 24px; }
          .risk-note { text-align:left; }
          .term-visual { height:390px; }
          .term-source { font-size:12px;padding:9px; }
          .term-source--one,.term-source--three { left:12px; }.term-source--two,.term-source--four { right:12px; }
          .security-item { padding:26px 20px; }
          .access-list { columns:1; }
          .access-visual { min-height:385px; }
          .access-screen { left:0;width:min(320px, calc(100% - 18px));padding:18px; }
          .access-badge { right:0;bottom:3px; }
          .workflow { grid-template-columns:1fr; }
          .workflow-step { min-height:0;display:grid;grid-template-columns:42px 1fr;gap:14px;padding:24px 20px; }
          .workflow-step__number { margin:4px 0 0; }
          .continuous-grid { gap:36px; }
          .continuous-row { padding:21px 18px; }
          .language-shell { padding:34px 24px;gap:30px; }
          .why-grid { grid-template-columns:1fr; }
          .why-item { padding:28px 22px; }
          .related-row { align-items:flex-start;padding:23px 0; }
          .related-row p { font-size:16px; }
          .faq-item summary { font-size:17px;min-height:70px;align-items:flex-start; }
          .faq-answer { padding-right:0; }
          .final-wrap { padding-top:64px; }
          .final-cta { padding:46px 24px;border-radius:24px; }
          .final-actions { width:100%;max-width:none; }
          .final-actions .pill { width:100%; }
          .page-bottom-spacer { height:64px; }
        }

        @media (max-width:360px) {
          .final-actions .pill { font-size:15px;padding-left:17px;padding-right:15px;gap:8px; }
          .hero-visual { transform:scale(.82);margin-left:-12px;margin-right:-12px;margin-bottom:-64px; }
          .ui-course-row { flex-direction:column;align-items:flex-start; }
          .experience-message { width:100%;justify-content:center;border-radius:18px; }
          .logo-grid { grid-template-columns:1fr; }
          .course-stage__screen { width:100%;max-width:280px; }
          .course-format-stack { right:0; }
          .access-screen { width:100%;max-width:280px; }
          .access-badge { max-width:220px; }
          .term-core { width:150px;height:150px; }
          .term-core strong { font-size:18px; }
          .term-source { font-size:10px;padding:8px 9px;gap:6px; }
          .term-source svg { width:18px;height:18px; }
        }
      `}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 id="page-title">Education Translation &amp; Localization Services</h1>
            <p className="hero-lede">Translate learning, communication, and digital education experiences for students, families, educators, and institutions worldwide. Stepes combines education-focused linguists, modern localization technology, AI-powered workflows, and professional human expertise to deliver accurate, consistent multilingual content in 100+ languages.</p>
            <div className="hero-actions">
              <Pill href={LINKS.quote}>Get a Translation Quote</Pill>
              <Pill href={LINKS.contact} secondary>Talk to an Education Expert</Pill>
            </div>
            <div className="hero-note"><Check/><span>K–12 · Higher Education · EdTech · Digital Learning</span></div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="proof-bar" aria-label="Education translation capabilities">
        <div className="container proof-grid">
          <div className="proof-item"><strong>100+ Languages</strong><span>Global and regional language coverage</span></div>
          <div className="proof-item"><strong>Professional Linguists</strong><span>Education and subject-matter expertise</span></div>
          <div className="proof-item"><strong>AI + Human Expertise</strong><span>Workflows matched to content and risk</span></div>
          <div className="proof-item"><strong>Secure Workflows</strong><span>Controlled handling for sensitive content</span></div>
        </div>
      </section>

      <section className="section" aria-labelledby="connected-experience">
        <div className="container overview-grid">
          <div className="overview-copy">
            <h2 id="connected-experience" className="editorial-h2">Multilingual Education Is a Connected Experience</h2>
          </div>
          <div>
            <p className="section-intro" style={{marginTop:0}}>Education translation goes far beyond converting a document from one language into another. Students, families, educators, and administrators interact across websites, applications, classrooms, learning platforms, assessments, academic records, student services, and real-time conversations.</p>
            <p>Stepes helps education organizations connect these experiences across languages while preserving terminology, instructional meaning, accessibility considerations, and the needs of each audience. The goal is not simply translated content—it is an education experience that works across languages.</p>
            <ExperienceMap />
          </div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="education-ecosystem">
        <div className="container">
          <SectionHeading eyebrow="Who We Serve" title="Translation Expertise Across the Education Ecosystem" intro="Different education organizations communicate with different audiences, use different technologies, and manage different types of multilingual content. Stepes brings the right linguistic, subject-matter, technical, and production expertise to each environment." id="education-ecosystem" />
          <div className="audience-list">
            <AudienceRow icon="school" title="K–12 Schools & Districts" text="Support multilingual students and families across enrollment, student services, curriculum, special education, family communications, school policies, digital content, and community engagement." link={LINKS.k12} label="K–12 Translation Services" />
            <AudienceRow icon="university" title="Colleges & Universities" text="Translate the student journey from international recruitment and admissions to academics, research, campus services, institutional communications, global programs, and alumni engagement." link={LINKS.higherEd} label="Higher Education Translation" />
            <AudienceRow icon="laptop" title="EdTech Companies" text="Localize educational software, learning applications, student portals, classroom technology, assessment systems, digital curricula, and connected learning products for global users." link={LINKS.software} label="Software Localization" />
            <AudienceRow icon="book" title="Education Publishers & Learning Organizations" text="Translate textbooks, curriculum, assessments, digital courseware, educational multimedia, professional education, instructional resources, and other learning content for multilingual audiences." />
          </div>
        </div>
      </section>

      <section className="section--dense" aria-labelledby="trusted-education">
        <div className="container">
          <SectionHeading title="Trusted by Leading Education Organizations" intro="Stepes has supported universities and education organizations with multilingual content for global students, educators, researchers, and learning communities." id="trusted-education" />
          <LogoCloud />
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="k12-language-access">
        <div className="container">
          <div className="split-intro">
            <div><div className="eyebrow">K–12 Education</div><h2 id="k12-language-access">Language Access for Students, Families, and Schools</h2></div>
            <p>K–12 communication often involves much more than the student in the classroom. Schools also need to communicate accurately with parents and guardians about enrollment, academic progress, student services, policies, special education, safety, and everyday school life. Stepes supports these multilingual touchpoints with professional translation and interpreting.</p>
          </div>
          <div className="k12-grid">
            <DetailCluster title="Enrollment & Registration" items={["Enrollment and registration forms", "School and program information", "Registration instructions", "Eligibility and transportation information", "Orientation content and student portals"]}/>
            <DetailCluster title="Parent & Family Communications" items={["Parent notices and letters", "Newsletters and announcements", "Report-card communications", "Parent portal content", "Consent forms, surveys, and event information"]}/>
            <DetailCluster title="Policies & Student Services" items={["Student handbooks", "Attendance and conduct policies", "Counseling and student-support resources", "Health and wellness information", "Emergency and district communications"]}/>
            <DetailCluster title="Special Education Translation" items={["IEP-related materials", "Evaluations and assessment documentation", "Meeting notices and summaries", "Consent materials", "Special education and family communications"]}/>
            <DetailCluster title="Curriculum & Classroom Content" items={["Curricula and lesson materials", "Worksheets and presentations", "Assessments and study guides", "Digital resources", "Classroom communications"]}/>
            <DetailCluster title="Language Access Beyond Documents" items={["Parent-teacher conferences", "Enrollment conversations", "Special education meetings", "Orientations", "Student-services and community meetings"]}/>
          </div>
          <div className="callout-note"><strong>Effective education language access requires more than accuracy.</strong><p>Readability, consistent terminology, audience-appropriate language, timely delivery, and access to professional interpreting all contribute to clear communication with multilingual school communities.</p></div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="university-experience">
        <div className="container">
          <SectionHeading eyebrow="Higher Education" title="Multilingual Communication Across the University Experience" intro="Universities communicate with prospective students, enrolled students, families, faculty, researchers, international partners, alumni, and communities across an expanding number of languages and digital channels." dark id="university-experience" />
          <UniversityJourney />
          <div className="dark-link-row"><TextLink href={LINKS.higherEd} light>Higher Education Translation Services</TextLink></div>
        </div>
      </section>

      <section className="section" aria-labelledby="edtech-localization">
        <div className="container edtech-grid">
          <div>
            <div className="eyebrow">EdTech Localization</div>
            <h2 id="edtech-localization" className="editorial-h2">Localize Digital Learning for Global Users</h2>
            <p className="section-intro" style={{marginLeft:0}}>EdTech localization requires more than translating educational text. Learners and educators experience language throughout software interfaces, lessons, assessments, instructions, notifications, multimedia, support content, and recurring product updates.</p>
            <div className="editorial-stack">
              <div className="editorial-line"><strong>Learning Platforms & Educational Software</strong><p>Learning management platforms, student portals, classroom software, teacher dashboards, apps, digital courseware, assessment platforms, and virtual learning environments.</p></div>
              <div className="editorial-line"><strong>Learner & Educator Interfaces</strong><p>Navigation, buttons, labels, forms, fields, instructions, tooltips, system messages, notifications, dashboards, and account content.</p></div>
              <div className="editorial-line"><strong>Digital Curriculum & Assessments</strong><p>Digital lessons, curriculum content, questions and answers, interactive exercises, learner feedback, teacher resources, and certification content.</p></div>
              <div className="editorial-line"><strong>Built for Product Releases</strong><p>Terminology management, translation memory, structured files, contextual review, linguistic QA, multilingual build testing, and recurring releases.</p></div>
            </div>
            <TextLink href={LINKS.software}>Explore Software Localization Services</TextLink>
          </div>
          <EdTechVisual />
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="education-content">
        <div className="container">
          <SectionHeading eyebrow="Education Content" title="Translate Every Type of Educational Content" intro="Education organizations create an unusually broad mix of content. Stepes combines professional translation, localization technology, multilingual production, and subject expertise to support both individual projects and large multilingual programs." id="education-content" />
          <div className="content-bands">
            <ContentBand title="Student & Family Communications" items={["School notices", "Parent communications", "Consent forms", "Student handbooks", "Newsletters", "Policies", "Student-services content"]}/>
            <ContentBand title="Academic & Instructional Materials" items={["Curricula", "Course materials", "Syllabi", "Lessons", "Presentations", "Textbooks", "Workbooks", "Assessments"]}/>
            <ContentBand title="Admissions & Academic Records" items={["Applications", "Transcripts", "Diplomas", "Certificates", "Academic records", "Credential materials", "Admissions documentation"]}/>
            <ContentBand title="Digital Learning" items={["Online courses", "Courseware", "Learner interfaces", "LMS content", "Assessments", "Training modules", "Interactive learning content"]}/>
            <ContentBand title="Research & Institutional Content" items={["Research materials", "Academic communications", "Institutional reports", "Policies", "Presentations", "Administrative documentation"]}/>
            <ContentBand title="Marketing & Recruitment" items={["Education websites", "International campaigns", "Program brochures", "Recruitment materials", "Digital marketing", "Student communications"]}/>
          </div>
          <div className="content-cta"><TextLink href={LINKS.certified}>Certified Translation Services</TextLink><TextLink href={LINKS.website}>Website Translation Services</TextLink></div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="subject-expertise">
        <div className="container">
          <SectionHeading eyebrow="Academic Disciplines" title="Subject Expertise Matters as Much as Language Expertise" intro="Educational translation has to preserve what is being taught—not simply the words used to teach it. Stepes matches professional linguists to both the language pair and the subject matter of the content." dark id="subject-expertise" />
          <div className="discipline-list">
            <DisciplineRow title="Medicine & Life Sciences" text="Medical education, healthcare curricula, life sciences, pharmaceutical sciences, public health, clinical disciplines, and scientific learning content." link={LINKS.lifeSciences} label="Life Sciences Translation" />
            <DisciplineRow title="Engineering & Technology" text="Mechanical, electrical, civil, industrial, chemical, software, and other engineering and technology disciplines." link={LINKS.engineering} label="Engineering Translation" />
            <DisciplineRow title="Law & Public Policy" text="Legal education, public policy, government, regulatory studies, international affairs, and related academic content." link={LINKS.legal} label="Legal Translation" />
            <DisciplineRow title="Business & Economics" text="Finance, accounting, economics, management, marketing, entrepreneurship, and business administration." />
            <DisciplineRow title="Science & Research" text="Biology, chemistry, physics, environmental science, mathematics, and multidisciplinary research content." />
            <DisciplineRow title="Computer Science & AI" text="Computer science, software engineering, data science, artificial intelligence, machine learning, and emerging technologies." />
            <DisciplineRow title="Humanities & Social Sciences" text="History, literature, languages, psychology, sociology, education, communications, and related disciplines." />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="digital-learning">
        <div className="container elearning-grid">
          <div>
            <div className="eyebrow">eLearning Localization</div>
            <h2 id="digital-learning" className="editorial-h2">Make Digital Learning Work in Every Language</h2>
            <p className="section-intro" style={{marginLeft:0}}>Digital education brings together text, narration, video, graphics, assessments, interactions, learning-platform technology, and learner tracking. Localizing the words without localizing the complete experience can leave multilingual courses incomplete or difficult to use.</p>
            <div className="feature-bullets">
              {["Articulate Storyline", "Articulate Rise", "Adobe Captivate", "SCORM Packages", "LMS Content", "Multimedia Translation", "Human & AI Voiceover", "Subtitles & Captions", "Course Reintegration", "Linguistic & Functional QA"].map((item)=><span key={item}><Check/>{item}</span>)}
            </div>
            <TextLink href={LINKS.elearning}>Explore eLearning Translation Services</TextLink>
          </div>
          <ELearningVisual />
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="written-spoken-access">
        <div className="container">
          <SectionHeading eyebrow="Translation + Interpreting" title="Written and Spoken Language Access" intro="Some education communication happens in documents and digital platforms. Other communication happens in real time. Stepes brings translation and interpreting together to support multilingual education communities." id="written-spoken-access" />
          <div className="language-access-grid">
            <div className="language-access-panel"><ServiceIcon name="translate"/><h3>Education Translation</h3><p>Professional translation supports student and family communications, academic content, policies and forms, learning resources, websites and applications, academic records, digital courseware, and institutional communications.</p><TextLink href="https://www.stepes.com/translation-services/">Professional Translation Services</TextLink></div>
            <div className="language-access-panel"><ServiceIcon name="speech"/><h3>Education Interpreting</h3><p>Professional interpreters can support parent-teacher conferences, enrollment discussions, special education meetings, student-services conversations, orientations, campus programs, education events, and administrative communication.</p><p>Remote, telephone, and on-site interpreting options can be configured according to program requirements and availability.</p><TextLink href={LINKS.interpreting}>Explore Interpretation Services</TextLink></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="right-workflow">
        <div className="container">
          <SectionHeading eyebrow="AI + Professional Expertise" title="The Right Translation Workflow for Every Education Use Case" intro="A school policy, university campaign, digital curriculum, student record, learning-platform update, and internal communication do not carry the same audience, complexity, risk, or quality requirements. They should not automatically receive the same translation workflow." id="right-workflow" />
          <WorkflowSpectrum />
          <p className="risk-note">Projects involving special education, academic records, public-facing policies, assessments, complex academic subjects, or other consequential content may require additional professional review, terminology controls, or validation. The goal is to apply the right level of professional expertise and automation to the content being translated.</p>
        </div>
      </section>

      <section className="section section--blush" aria-labelledby="one-vocabulary">
        <div className="container term-grid">
          <div>
            <div className="eyebrow">Terminology Governance</div>
            <h2 id="one-vocabulary" className="editorial-h2">One Education Vocabulary Across Every Touchpoint</h2>
            <p className="section-intro" style={{marginLeft:0}}>Program names, degree terminology, curriculum concepts, institutional language, and learning terminology often appear across websites, applications, policies, course materials, assessments, and student communications. Centralized language assets help every channel stay aligned.</p>
            <div className="term-assets">
              <div className="term-asset"><strong>Multilingual Terminology</strong><p>Maintain approved translations for programs, departments, credentials, curriculum concepts, product terms, and branded language.</p></div>
              <div className="term-asset"><strong>Translation Memory</strong><p>Reuse previously translated and approved content to improve consistency across recurring and updated materials.</p></div>
              <div className="term-asset"><strong>Style Guidance</strong><p>Define tone, formality, capitalization, formatting conventions, audience requirements, and language preferences.</p></div>
              <div className="term-asset"><strong>Reviewer Feedback</strong><p>Capture approved customer changes so established language decisions can inform future work.</p></div>
            </div>
            <TextLink href={LINKS.terminology}>Explore Terminology Management</TextLink>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className="section" aria-labelledby="secure-education">
        <div className="container">
          <SectionHeading eyebrow="Security & Control" title="Secure Translation for Sensitive Education Content" intro="Educational translation can involve student records, academic documentation, evaluations, admissions materials, research content, employee information, confidential institutional documents, and unreleased digital products. Stepes can configure workflows around customer-specific security, confidentiality, access, review, and delivery requirements." id="secure-education" />
          <SecurityGrid />
          <div className="security-links"><TextLink href={LINKS.security}>Security & Compliance Resources</TextLink><TextLink href={LINKS.iso}>ISO-Certified Translation Services</TextLink></div>
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="accessible-learning">
        <div className="container access-grid">
          <div>
            <div className="eyebrow">Multilingual Accessibility</div>
            <h2 id="accessible-learning" className="editorial-h2">Accessible Learning Across Languages</h2>
            <p className="section-intro" style={{marginLeft:0}}>Language accessibility and digital accessibility increasingly intersect. A course may be translated accurately but still become difficult to use if captions are missing, layouts break after text expansion, a document loses structure, or multilingual content is not properly integrated into the digital experience.</p>
            <ul className="access-list">
              {["Closed captions", "Subtitles", "Transcripts", "Multimedia content", "Accessible documents", "Multilingual web content", "Alternative text translation", "Digital course materials", "Learning-platform content", "User-interface text"].map((item)=><li key={item}><Check/><span>{item}</span></li>)}
            </ul>
            <p>Localization teams can account for language-specific issues such as text expansion, reading direction, font support, document structure, captions and transcripts, visual layouts, language attributes, interface behavior, and multimedia synchronization.</p>
            <p className="accessibility-note">Accessibility requirements vary by content, technology, jurisdiction, and implementation environment. Stepes works with education teams to support multilingual content within their defined accessibility requirements while keeping linguistic quality and usability connected.</p>
            <TextLink href={LINKS.multimedia}>Explore Multimedia Localization</TextLink>
          </div>
          <AccessibilityVisual />
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="controlled-workflow">
        <div className="container">
          <SectionHeading title="A Controlled Workflow From Source Content to Global Learners" intro="Every education localization program is different. Stepes configures the workflow around the content, audience, languages, technology, quality requirements, customer review process, and delivery schedule." dark id="controlled-workflow" />
          <Workflow />
        </div>
      </section>

      <section className="section" aria-labelledby="continuous-education">
        <div className="container continuous-grid">
          <div>
            <div className="eyebrow">Continuous Localization</div>
            <h2 id="continuous-education" className="editorial-h2">Built for Education Content That Never Stops Changing</h2>
            <p className="section-intro" style={{marginLeft:0}}>New semesters begin. Curriculum changes. Admissions cycles restart. Policies are revised. Courses are updated. Software releases introduce new features. Assessment content evolves. Websites change daily. Stepes helps organizations turn individual translations into reusable multilingual programs.</p>
          </div>
          <div className="continuous-rail">
            <div className="continuous-row"><ServiceIcon name="pencil"/><div><h3>Translate New and Changed Content</h3><p>Focus localization resources on content that has actually changed instead of repeatedly translating material that is already approved.</p></div></div>
            <div className="continuous-row"><ServiceIcon name="layers"/><div><h3>Reuse Approved Language Assets</h3><p>Translation memory, terminology, style guidance, and review decisions provide a stronger starting point for every update.</p></div></div>
            <div className="continuous-row"><ServiceIcon name="workflow"/><div><h3>Maintain Cross-Channel Consistency</h3><p>Keep language aligned as concepts move between websites, documents, applications, courses, assessments, and communications.</p></div></div>
            <div className="continuous-row"><ServiceIcon name="globe"/><div><h3>Support Continuous Releases</h3><p>Configure localization around publication cycles, software releases, curriculum updates, or ongoing multilingual content operations.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section--dense" aria-labelledby="global-languages">
        <div className="container language-shell">
          <div>
            <h2 id="global-languages">Global Education in 100+ Languages</h2>
            <p>Support major global markets, regional language variants, right-to-left languages, CJK languages, and complex writing systems—while accounting for text expansion, fonts, character encoding, writing direction, dates, numbers, terminology, pronunciation, and interface layouts.</p>
            <TextLink href={LINKS.languages}>View Translation Languages</TextLink>
          </div>
          <LanguagePanel />
        </div>
      </section>

      <section className="section" aria-labelledby="why-stepes">
        <div className="container">
          <SectionHeading title="Why Education Organizations Choose Stepes" intro="Education translation requires language expertise, subject knowledge, technology, and a clear understanding of how translated content will actually be used." id="why-stepes" />
          <WhyGrid />
        </div>
      </section>

      <section className="section section--soft" aria-labelledby="related-solutions">
        <div className="container">
          <SectionHeading title="Explore Our Education Translation Expertise" intro="Education programs increasingly span documents, software, multimedia, learning platforms, websites, and real-time communication. Explore the Stepes services that support each part of the multilingual education experience." id="related-solutions" />
          <div className="related-list">
            <RelatedRow title="eLearning Translation & Localization" text="Translate and engineer digital courses, LMS content, SCORM packages, multimedia, assessments, voiceover, and interactive learning experiences." href={LINKS.elearning}/>
            <RelatedRow title="Software Localization" text="Localize EdTech applications, learning platforms, student portals, teacher tools, assessment products, and other education software." href={LINKS.software}/>
            <RelatedRow title="Certified Translation" text="Professional certified translation for academic records, diplomas, certificates, transcripts, and other documents requiring formal translation." href={LINKS.certified}/>
            <RelatedRow title="Interpretation Services" text="Support multilingual parent, student, educator, and institutional conversations through professional interpreting." href={LINKS.interpreting}/>
            <RelatedRow title="Website Translation" text="Localize school, university, program, recruitment, and education websites for multilingual audiences." href={LINKS.website}/>
            <RelatedRow title="Multimedia Localization" text="Translate subtitles, captions, narration, graphics, video, and other media used throughout modern learning experiences." href={LINKS.multimedia}/>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="education-faq">
        <div className="container">
          <SectionHeading title="Questions About Multilingual Education" intro="Practical answers for schools, universities, EdTech companies, and learning organizations planning multilingual content and localization programs." id="education-faq" />
          <div className="faq-shell">
            {FAQS.map(([question,answer]) => (
              <details className="faq-item" key={question}>
                <summary><span>{question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-wrap" aria-labelledby="final-cta-title">
        <div className="container">
          <div className="final-cta">
            <div className="final-copy"><div className="eyebrow eyebrow--dark">Global Education</div><h2 id="final-cta-title">Make Education Accessible in Every Language</h2><p>Whether you are communicating with families across a school district, recruiting students around the world, translating academic programs, launching a multilingual learning platform, or scaling digital education into new markets, Stepes brings language expertise, technology, and production together in one coordinated localization program.</p></div>
            <div className="final-actions"><Pill href={LINKS.quote}>Get a Translation Quote</Pill><Pill href={LINKS.contact} darkSecondary>Talk to an Education Expert</Pill></div>
          </div>
        </div>
      </section>
      <div className="page-bottom-spacer" aria-hidden="true" />
    </main>
  );
}
