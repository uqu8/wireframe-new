import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  darkEyebrow: "#F2A7C6",
  text: "#191919",
  body: "#4A4A4A",
  muted: "#6A6A6A",
  line: "#E5E5E5",
  soft: "#F7F7F8",
  dark: "#17171A",
  white: "#FFFFFF",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contactSales: "https://www.stepes.com/contact-sales/",
  handbook: "https://www.stepes.com/employee-handbook-translation-services/",
  training: "https://www.stepes.com/training-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  continuous: "https://www.stepes.com/continuous-translation/",
  document: "https://www.stepes.com/document-translation-services/",
  pdf: "https://www.stepes.com/pdf-translation-services/",
  multimedia: "https://www.stepes.com/multimedia-translation-services/",
  security: "https://www.stepes.com/security/",
};

const lifecycle = [
  {
    n: "01",
    title: "Recruit & Hire",
    body: "Job descriptions, careers content, recruiting communications, candidate information, interview materials, and offer-related communications.",
  },
  {
    n: "02",
    title: "Onboard",
    body: "Orientation materials, employee handbooks, workplace policies, onboarding training, employee portals, and acknowledgment content.",
  },
  {
    n: "03",
    title: "Inform & Engage",
    body: "Leadership messages, company announcements, employee newsletters, intranet content, surveys, and engagement campaigns.",
  },
  {
    n: "04",
    title: "Benefits & Total Rewards",
    body: "Benefits guides, enrollment communications, health and wellness information, compensation content, retirement, and total rewards.",
  },
  {
    n: "05",
    title: "Learn & Develop",
    body: "Onboarding, compliance, workplace safety, leadership development, professional development, eLearning, and instructor-led training.",
  },
  {
    n: "06",
    title: "Manage Talent",
    body: "Performance materials, competency frameworks, career development, employee feedback, talent communications, and succession content.",
  },
  {
    n: "07",
    title: "Change & Transition",
    body: "Organizational change, restructuring, policy updates, mobility, transfer documentation, exit communications, and offboarding information.",
  },
];

const contentGroups = [
  {
    title: "Policies & Governance",
    items: ["HR policies", "Codes of conduct", "Ethics policies", "Workplace procedures", "Employee privacy communications", "Internal governance materials"],
  },
  {
    title: "Employee Documents",
    items: ["Employee handbooks", "HR forms and notices", "Letters and templates", "Orientation materials", "Employee guides", "HR reference documents"],
  },
  {
    title: "Benefits & Compensation",
    items: ["Benefits summaries", "Open enrollment", "Health plan information", "Retirement communications", "Compensation materials", "Total rewards guides"],
  },
  {
    title: "Talent & Development",
    items: ["Recruiting content", "Candidate materials", "New-hire onboarding", "Training programs", "Performance management", "Leadership development"],
  },
  {
    title: "Digital HR Content",
    items: ["HRIS and HCM interfaces", "Employee self-service", "Recruiting systems", "Benefits portals", "Learning platforms", "HR mobile applications"],
  },
  {
    title: "Multimedia HR Content",
    items: ["Training videos", "Executive messages", "Employee presentations", "Webinars", "Subtitles and captions", "Voice-over and on-screen graphics"],
  },
];

const audiences = [
  ["Human Resources", "Policies, workforce programs, employee documentation, and everyday HR communications."],
  ["People Operations", "Multilingual employee experiences across onboarding, systems, processes, and ongoing workforce operations."],
  ["Talent Acquisition", "Job content, recruiting communications, careers experiences, and candidate information."],
  ["Learning & Development", "Onboarding, compliance, professional development, and workforce training across languages."],
  ["Total Rewards & Benefits", "Benefits, compensation, enrollment, wellness, and employee rewards communications."],
  ["Employee Communications", "Announcements, leadership messages, intranet content, and employee campaigns."],
  ["Compliance & Corporate Legal", "Approved policies, codes of conduct, workplace notices, ethics materials, and careful terminology."],
  ["Localization Teams", "Centralized multilingual HR content within broader terminology, quality, and localization operations."],
];

const workflow = [
  ["01", "Define Content and Requirements", "Align languages, employee audiences, markets, formats, deadlines, sensitivity, existing translations, and review requirements."],
  ["02", "Prepare Terminology and Language Assets", "Apply translation memories, approved terminology, glossaries, style guidance, previous translations, and reference materials."],
  ["03", "Translate and Review", "Use the right combination of AI, translation memory, terminology management, professional translation, and human validation."],
  ["04", "Localize and Format", "Adapt documents, training content, applications, multimedia, and other assets for their target languages and delivery formats."],
  ["05", "Perform Quality Assurance", "Check language, terminology, completeness, formatting, technical integrity, and defined project-specific quality criteria."],
  ["06", "Deliver and Reuse", "Capture approved translations, terminology, and feedback as reusable language assets for future HR projects and updates."],
];

const related = [
  ["Employee Handbook Translation Services", "Translate employee handbooks, workplace policies, codes of conduct, and related documentation while maintaining terminology and document structure.", links.handbook],
  ["Training Translation Services", "Translate onboarding, compliance, safety, assessments, presentations, and corporate learning resources.", links.training],
  ["eLearning Translation Services", "Localize interactive courses, LMS content, SCORM packages, assessments, voice-over, subtitles, and digital learning experiences.", links.elearning],
  ["Software Localization Services", "Localize HR applications, employee portals, digital interfaces, notifications, help content, and other software experiences.", links.software],
  ["Document Translation Services", "Translate professional HR documents across common business, publishing, and structured content formats.", links.document],
  ["Multimedia Translation Services", "Localize employee videos, presentations, executive communications, training media, subtitles, captions, and voice-over.", links.multimedia],
];

const insights = [
  {
    type: "HR Translation Guide",
    title: "How to Translate an Employee Handbook",
    body: "Plan terminology, policy review, formatting, stakeholder approvals, and ongoing updates for multilingual handbooks.",
    href: "https://www.stepes.com/resources/translation-guides/employee-handbook-translation-guide/",
    linkLabel: "Employee Handbook Translation Guide",
  },
  {
    type: "HR Translation Guide",
    title: "Best Practices for Multilingual Employee Communications",
    body: "Build communications that remain clear, timely, and consistent across languages and channels.",
    href: "https://www.stepes.com/resources/translation-guides/multilingual-employee-communications-guide/",
    linkLabel: "Multilingual Employee Communications Guide",
  },
  {
    type: "HR Translation Guide",
    title: "Translating Benefits and Open Enrollment Content",
    body: "Improve terminology consistency and employee comprehension across guides, portals, and recurring updates.",
    href: "https://www.stepes.com/resources/translation-guides/employee-benefits-open-enrollment-translation-guide/",
    linkLabel: "Benefits and Open Enrollment Translation Guide",
  },
  {
    type: "HR Translation Guide",
    title: "Building a Global HR Terminology Glossary",
    body: "Create an approved multilingual vocabulary for job titles, benefits, policies, programs, and HR systems.",
    href: "https://www.stepes.com/resources/translation-guides/hr-terminology-glossary-guide/",
    linkLabel: "HR Terminology Glossary Guide",
  },
  {
    type: "AI Translation Guide",
    title: "AI Translation for HR Content",
    body: "Understand where AI creates efficiency, when professional review adds value, and how content sensitivity should guide workflow design.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-hr-content/",
    linkLabel: "AI Translation for HR Content",
  },
  {
    type: "Localization Guide",
    title: "Localizing Employee Training",
    body: "Coordinate translation, multimedia production, learning technology, terminology, and quality assurance for multilingual workforce training.",
    href: "https://www.stepes.com/resources/localization-guides/employee-training-localization-guide/",
    linkLabel: "Employee Training Localization Guide",
  },
];

const faqs = [
  ["What are HR translation services?", "HR translation services translate and localize the content organizations use to communicate with employees, candidates, and other workforce audiences. This can include employee handbooks, policies, benefits information, recruiting content, onboarding, training, employee communications, forms, HR software, employee portals, and talent-management materials."],
  ["What HR documents can Stepes translate?", "Stepes translates employee handbooks, workplace policies, codes of conduct, benefits guides, open enrollment materials, onboarding content, recruiting materials, employee forms, training programs, internal communications, performance-management content, HR presentations, HRIS/HCM interfaces, and employee portal content, along with multimedia, eLearning, PDF, Microsoft Office, Adobe InDesign, software resource files, and web content."],
  ["Can Stepes translate employee handbooks?", "Yes. Stepes translates employee handbooks and related workplace policies into multiple languages while helping organizations maintain approved HR terminology, document structure, formatting, and consistency across updates."],
  ["Do you translate employee benefits and open enrollment materials?", "Yes. Stepes translates benefits guides, enrollment communications, health and insurance information, retirement content, wellness programs, compensation communications, total rewards materials, and related employee-facing information. Existing translations and approved terminology can be reused where appropriate for recurring cycles."],
  ["Can Stepes localize HR software, HRIS, HCM, and employee portals?", "Yes. Stepes localizes HRIS and HCM systems, employee self-service portals, recruiting platforms, benefits portals, learning systems, performance-management applications, HR mobile apps, and related help or knowledge content. Localization can include interface translation, resource-file processing, terminology management, locale adaptation, linguistic quality assurance, and multilingual application testing."],
  ["How does Stepes keep HR terminology consistent?", "Stepes can use multilingual glossaries, terminology databases, translation memory, existing translations, corporate style guidance, and approved reviewer feedback. This is especially useful for job titles, departments, employment classifications, benefit names, policy names, competency frameworks, internal programs, company values, and HR systems."],
  ["Does Stepes use AI for HR translation?", "Stepes supports AI-enabled translation workflows combined with translation memory, terminology management, professional linguists, and human validation. High-volume or frequently updated HR communications may benefit substantially from automation, while policies, benefits information, sensitive workforce communications, and other business-critical materials can receive stronger professional review."],
  ["How does Stepes handle confidential HR content?", "HR content can include sensitive information related to employees, compensation, benefits, performance, organizational changes, recruiting, investigations, and workforce planning. Stepes supports translation workflows designed around controlled handling, appropriate access, confidentiality, and project-specific requirements."],
  ["Can Stepes ensure HR translations comply with local employment laws?", "Stepes provides language translation and localization rather than independent employment-law advice. We accurately translate the source content approved by your organization and can incorporate market-specific requirements, terminology, or revisions supplied by your HR, legal, compliance, local counsel, or in-country teams."],
  ["How many languages does Stepes support for HR translation?", "Stepes provides HR translation services in more than 100 languages, including Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, Vietnamese, Polish, Dutch, Turkish, Thai, Indonesian, Hindi, and many others. We support both major global languages and regional workforce requirements."],
  ["Can Stepes support ongoing global HR translation programs?", "Yes. Stepes supports individual HR projects as well as ongoing multilingual programs involving recurring employee communications, policy updates, benefits cycles, onboarding, learning content, HR systems, and other workforce materials. Translation memories, approved terminology, style guidance, previous translations, and reviewer feedback can be reused across future content."],
];

function ArrowIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5 9.3 17 19 7.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 23 }) {
  let iconPaths;

  switch (name) {
    case "policy":
      iconPaths = (
        <g>
          <path d="M7 3h8l4 4v14H7z" />
          <path d="M15 3v5h5M10 12h6M10 16h6" />
        </g>
      );
      break;
    case "people":
      iconPaths = (
        <g>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.3" />
          <path d="M3.5 20c.6-4 2.6-6 5.5-6s5 2 5.5 6M14 15c3-.5 5.4 1.2 6 4.5" />
        </g>
      );
      break;
    case "benefits":
      iconPaths = (
        <g>
          <path d="M12 21s-7-4.4-7-10.4A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 7 4.6C19 16.6 12 21 12 21z" />
          <path d="M9.5 11.8h5M12 9.3v5" />
        </g>
      );
      break;
    case "learn":
      iconPaths = (
        <g>
          <path d="M4 5.5h6.5c1.2 0 1.5.6 1.5 1.7V20c0-1.3-.8-2-2-2H4z" />
          <path d="M20 5.5h-6.5c-1.2 0-1.5.6-1.5 1.7V20c0-1.3.8-2 2-2h6z" />
        </g>
      );
      break;
    case "screen":
      iconPaths = (
        <g>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </g>
      );
      break;
    case "globe":
      iconPaths = (
        <g>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.2 2.5 3.2 5.5 3.2 9S14.2 18.5 12 21M12 3c-2.2 2.5-3.2 5.5-3.2 9S9.8 18.5 12 21" />
        </g>
      );
      break;
    case "lock":
      iconPaths = (
        <g>
          <rect x="5" y="10" width="14" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
        </g>
      );
      break;
    case "message":
      iconPaths = (
        <g>
          <path d="M4 4h16v12H9l-5 4z" />
          <path d="M8 9h8M8 12h5" />
        </g>
      );
      break;
    case "cycle":
      iconPaths = (
        <g>
          <path d="M20 7v5h-5" />
          <path d="M4 17v-5h5" />
          <path d="M18.7 12a7 7 0 0 0-12-4.9L4 10M5.3 12a7 7 0 0 0 12 4.9L20 14" />
        </g>
      );
      break;
    default:
      iconPaths = (
        <g>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.3" />
          <path d="M3.5 20c.6-4 2.6-6 5.5-6s5 2 5.5 6M14 15c3-.5 5.4 1.2 6 4.5" />
        </g>
      );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths}
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function EditorialLink({ href, children, inverted = false }) {
  return (
    <a className={`editorial-link${inverted ? " inverted" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="img">
        <defs>
          <linearGradient id="heroSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDF2F7" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="66" y="38" width="488" height="430" rx="36" fill="url(#heroSoft)" stroke="#E6D7DE" strokeWidth="1.5"/>
        <circle cx="310" cy="222" r="70" fill="#FFFFFF" stroke="#2E2E33" strokeWidth="2"/>
        <circle cx="310" cy="190" r="22" fill="#FDF2F7" stroke="#2E2E33" strokeWidth="2"/>
        <path d="M267 260c7-32 23-46 43-46s36 14 43 46" fill="#FDF2F7" stroke="#2E2E33" strokeWidth="2" strokeLinecap="round"/>
        <path d="M240 222H178M380 222h63M310 150V99M310 292v71" stroke="#7C7C84" strokeWidth="1.8" strokeDasharray="5 7"/>

        <g transform="translate(95 174)">
          <rect width="105" height="90" rx="16" fill="#FFFFFF" stroke="#D6D6DA"/>
          <path d="M32 22h31l13 13v35H32z" fill="#FFFFFF" stroke="#3D3D42" strokeWidth="1.8"/>
          <path d="M63 22v14h14M43 48h23M43 58h19" stroke="#3D3D42" strokeWidth="1.7" strokeLinecap="round"/>
          <circle cx="79" cy="67" r="8" fill="#C11D63"/>
        </g>

        <g transform="translate(421 170)">
          <rect width="105" height="96" rx="16" fill="#FFFFFF" stroke="#D6D6DA"/>
          <path d="M24 35h58v39H24z" fill="#FFFFFF" stroke="#3D3D42" strokeWidth="1.8"/>
          <path d="M32 44h17M32 53h30M32 62h24" stroke="#7A7A80" strokeWidth="1.6" strokeLinecap="round"/>
          <rect x="62" y="22" width="20" height="17" rx="5" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.6"/>
        </g>

        <g transform="translate(254 59)">
          <rect width="112" height="72" rx="16" fill="#FFFFFF" stroke="#D6D6DA"/>
          <path d="M24 25h64M24 36h40M24 47h51" stroke="#3D3D42" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="86" cy="49" r="7" fill="#C11D63"/>
        </g>

        <g transform="translate(251 356)">
          <rect width="118" height="82" rx="16" fill="#FFFFFF" stroke="#D6D6DA"/>
          <path d="M25 58V39M44 58V26M63 58V34M82 58V19" stroke="#3D3D42" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 60h68" stroke="#7A7A80" strokeWidth="1.5"/>
          <circle cx="93" cy="27" r="7" fill="#C11D63"/>
        </g>

        <path d="M116 108c32-31 73-54 118-65M504 111c-33-32-75-56-120-68M102 328c21 37 53 68 91 90M517 326c-21 38-52 68-92 92" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" opacity=".56"/>
      </svg>
    </div>
  );
}

function TerminologyDiagram() {
  const rows = ["Policy", "Benefits", "Training", "HRIS / HCM", "Employee Communications"];
  return (
    <div className="terminology-diagram" aria-hidden="true">
      <div className="term-core">
        <span className="term-dot" />
        <strong>Approved HR Terminology</strong>
        <small>Glossaries · Translation memory · Style guidance · Reviewer feedback</small>
      </div>
      <div className="term-lines">
        {rows.map((r) => (
          <div className="term-row" key={r}>
            <span className="term-connector" />
            <span>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HRPlatformMockup() {
  return (
    <div className="platform-mockup" aria-label="Illustrative multilingual HR platform interface">
      <div className="platform-topbar">
        <div className="platform-brand"><span /> Employee Hub</div>
        <div className="platform-locale">ES · Español</div>
      </div>
      <div className="platform-body">
        <aside>
          <div className="nav-on">Inicio</div>
          <div>Beneficios</div>
          <div>Aprendizaje</div>
          <div>Políticas</div>
          <div>Mi perfil</div>
        </aside>
        <div className="platform-main">
          <div className="platform-kicker">Bienvenido</div>
          <div className="platform-title">Tu experiencia de empleado, en tu idioma</div>
          <div className="platform-cards">
            <div><Icon name="benefits"/><strong>Beneficios</strong><span>Revisa tus opciones</span></div>
            <div><Icon name="learn"/><strong>Aprendizaje</strong><span>Continúa tu formación</span></div>
            <div><Icon name="policy"/><strong>Políticas</strong><span>Consulta las políticas</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false, center = false, id, className = "" }) {
  return (
    <div className={`section-heading${center ? " center" : ""}${dark ? " dark" : ""}${className ? ` ${className}` : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        className="faq-question"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span>{item[0]}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={`faq-panel-${index}`} className="faq-answer" hidden={!open}>
        <p>{item[1]}</p>
      </div>
    </div>
  );
}

export default function HRTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --dark-eyebrow: ${COLORS.darkEyebrow};
          --text: ${COLORS.text};
          --body: ${COLORS.body};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --soft: ${COLORS.soft};
          --dark: ${COLORS.dark};
          --white: ${COLORS.white};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          overflow-x: clip;
          color: var(--text);
          background: var(--white);
          font-family: "Inter Tight", "Inter", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.62;
          font-weight: 400;
        }
        .stepes-page a { color: inherit; }
        .stepes-page h1, .stepes-page h2, .stepes-page h3, .stepes-page p { margin-top: 0; }
        .shell { width: min(100% - 112px, 1280px); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section-soft { background: var(--soft); }
        .section-blush { background: var(--blush); }
        .section-dark { background: var(--dark); color: var(--white); }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
          font-weight: 600 !important;
          letter-spacing: .11em !important;
          text-transform: uppercase;
          margin: 0 0 18px !important;
        }
        .eyebrow-dark { color: var(--dark-eyebrow) !important; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -.025em; color: var(--text); }
        h1 { font-size: 48px; line-height: 1.04; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.2; margin-bottom: 12px; }
        .section-dark h2, .section-dark h3 { color: var(--white); }
        .lead { font-size: 18px; line-height: 1.68; color: #3F3F43; }
        .section-heading { max-width: 820px; margin-bottom: 52px; }
        .section-heading.center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading p { max-width: 780px; margin: 0; font-size: 18px; line-height: 1.68; color: var(--body); }
        .section-heading.center p { margin-left: auto; margin-right: auto; }
        .section-heading.dark h2 { color: var(--white); }
        .section-heading.dark p { color: #CACACE; }
        .btn-row { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
        .btn {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
          border: 1px solid var(--magenta);
        }
        .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
        .btn-primary svg, .btn-primary svg * { color: #FFFFFF !important; stroke: #FFFFFF !important; fill: none; }
        .btn-secondary {
          background: var(--white);
          border: 1px solid #CFCFD2;
          color: #242428 !important;
        }
        .btn-secondary:hover { border-color: #98989E; transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
          text-decoration: none;
          margin-top: 18px;
        }
        .editorial-link.inverted { color: #FFFFFF !important; }
        .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .editorial-link:hover svg { transform: translateX(2px); }
        .editorial-link svg { transition: transform .18s ease; }

        /* Hero */
        .hero { padding: 104px 0 92px; background: linear-gradient(180deg, #FFFFFF 0%, #FCFAFB 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(420px, .96fr); gap: 72px; align-items: center; }
        .hero-copy { max-width: 700px; }
        .hero-copy .lead { max-width: 690px; margin-bottom: 0; }
        .hero-art { width: 100%; max-width: 600px; justify-self: end; }
        .hero-art svg { display: block; width: 100%; height: auto; }
        .hero-audiences { display: flex; gap: 0; margin-top: 28px; flex-wrap: wrap; color: #59595E; font-size: 16px; }
        .hero-audiences span { display: inline-flex; align-items: center; }
        .hero-audiences span:not(:last-child)::after { content: "•"; margin: 0 10px; color: #A4A4A9; }

        /* Intro */
        .intro-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 80px; align-items: start; }
        .intro-grid .section-heading { margin-bottom: 0; }
        .intro-copy { max-width: 760px; }
        .intro-copy p { font-size: 18px; color: var(--body); margin-bottom: 18px; }
        .value-strip { margin-top: 34px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .value-strip > div { padding: 24px 22px 24px 0; }
        .value-strip > div + div { border-left: 1px solid var(--line); padding-left: 24px; }
        .value-strip strong { display: block; font-size: 18px; font-weight: 600; margin-bottom: 6px; }
        .value-strip span { display: block; font-size: 16px; color: var(--body); }

        /* Lifecycle */
        .lifecycle-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #DCDCE0; border-left: 1px solid #DCDCE0; border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .lifecycle-item { position: relative; min-height: 240px; padding: 30px 28px 34px; border-right: 1px solid #DCDCE0; border-bottom: 1px solid #DCDCE0; }
        .lifecycle-item:nth-child(5) { grid-column: 1 / 2; }
        .lifecycle-item:last-child { grid-column: 3 / 5; }
        .lifecycle-num { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 50%; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; margin-bottom: 28px; }
        .lifecycle-item h3 { font-size: 22px; }
        .lifecycle-item p { margin: 0; font-size: 16px; line-height: 1.6; color: var(--body); }

        /* Coverage */
        .coverage-panel { border: 1px solid var(--line); border-radius: 30px; overflow: hidden; display: grid; grid-template-columns: repeat(2, 1fr); background: #FFFFFF; }
        .coverage-group { padding: 34px 36px; min-height: 260px; }
        .coverage-group:nth-child(odd) { border-right: 1px solid var(--line); }
        .coverage-group:nth-child(n+3) { border-top: 1px solid var(--line); }
        .coverage-top { display: flex; align-items: center; gap: 13px; margin-bottom: 18px; }
        .coverage-icon { width: 44px; height: 44px; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; color: var(--magenta); background: var(--blush); }
        .coverage-top h3 { margin: 0; font-size: 22px; }
        .coverage-list { display: grid; grid-template-columns: 1fr 1fr; gap: 9px 22px; padding: 0; margin: 0; list-style: none; }
        .coverage-list li { position: relative; padding-left: 15px; font-size: 16px; color: var(--body); }
        .coverage-list li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: #A3A3A7; position: absolute; left: 0; top: .72em; }

        /* Split editorial */
        .split { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 76px; align-items: center; }
        .split.reverse { grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr); }
        .split-copy { max-width: 650px; }
        .split-copy p { font-size: 17px; line-height: 1.68; color: var(--body); }
        .split-copy ul { margin: 24px 0 0; padding: 0; list-style: none; display: grid; gap: 12px; }
        .split-copy li { display: flex; align-items: flex-start; gap: 10px; color: var(--body); font-size: 16px; }
        .split-copy li svg { flex: 0 0 auto; margin-top: 3px; color: var(--magenta); }
        .document-visual { position: relative; min-height: 470px; display: grid; place-items: center; }
        .doc-sheet { width: min(100%, 420px); background: #FFFFFF; border: 1px solid #DDD4D8; border-radius: 24px; padding: 34px; box-shadow: 0 18px 48px rgba(36,24,30,.07); transform: rotate(-1deg); }
        .doc-tag { color: var(--magenta); font-size: 11px; letter-spacing: .1em; font-weight: 600; text-transform: uppercase; margin-bottom: 22px; }
        .doc-title { height: 16px; width: 72%; border-radius: 8px; background: #2D2D31; margin-bottom: 15px; }
        .doc-line { height: 8px; border-radius: 5px; background: #CFCFD2; margin-bottom: 9px; }
        .doc-line.w90 { width: 90%; } .doc-line.w80 { width: 80%; } .doc-line.w65 { width: 65%; }
        .doc-callout { margin-top: 26px; border-left: 3px solid var(--magenta); padding: 14px 16px; background: var(--blush); font-size: 16px; color: #49494D; }
        .doc-float { position: absolute; right: 3%; bottom: 5%; width: 155px; padding: 18px; background: #FFFFFF; border: 1px solid #DDD4D8; border-radius: 18px; box-shadow: 0 14px 34px rgba(36,24,30,.09); }
        .doc-float strong { display: block; font-size: 16px; margin-bottom: 5px; }
        .doc-float span { font-size: 16px; color: var(--body); }

        /* Benefits */
        .benefits-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 70px; }
        .benefit-list { border-top: 1px solid var(--line); }
        .benefit-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; border-bottom: 1px solid var(--line); padding: 19px 0; font-size: 16px; color: var(--body); }
        .benefit-row strong { color: var(--text); font-weight: 600; }
        .benefit-note { margin-top: 28px; padding: 24px 26px; border-radius: 20px; background: var(--blush); font-size: 16px; color: #4A4045; }

        /* Learning */
        .learning-layout { display: grid; grid-template-columns: 1.05fr .95fr; gap: 70px; align-items: start; }
        .learning-formats { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: #FFFFFF; }
        .learning-formats > div { padding: 26px; min-height: 156px; }
        .learning-formats > div:nth-child(odd) { border-right: 1px solid var(--line); }
        .learning-formats > div:nth-child(n+3) { border-top: 1px solid var(--line); }
        .learning-formats strong { display: block; font-size: 18px; margin-bottom: 8px; }
        .learning-formats span { display: block; font-size: 16px; color: var(--body); }

        /* Communications dark */
        .communications-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 80px; align-items: start; }
        .communications-copy p { font-size: 18px; color: #CACACE; max-width: 640px; }
        .comm-rows { border-top: 1px solid #3A3A3F; }
        .comm-row { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #3A3A3F; }
        .comm-row .comm-icon { color: var(--dark-eyebrow); padding-top: 2px; }
        .comm-row strong { color: #FFFFFF; display: block; font-size: 18px; margin-bottom: 5px; }
        .comm-row span { color: #BEBEC4; font-size: 16px; }

        /* Platform */
        .platform-mockup { border-radius: 28px; background: #FFFFFF; border: 1px solid #DADADD; overflow: hidden; box-shadow: 0 22px 60px rgba(20,20,25,.08); }
        .platform-topbar { height: 62px; display: flex; align-items: center; justify-content: space-between; padding: 0 22px; border-bottom: 1px solid #E6E6E8; font-size: 15px; color: #45454A; }
        .platform-brand { display: flex; align-items: center; gap: 9px; font-weight: 600; }
        .platform-brand span { width: 10px; height: 10px; border-radius: 50%; background: var(--magenta); }
        .platform-locale { padding: 7px 10px; border: 1px solid #DFDFE2; border-radius: 9px; }
        .platform-body { min-height: 380px; display: grid; grid-template-columns: 145px 1fr; }
        .platform-body aside { border-right: 1px solid #E6E6E8; padding: 24px 14px; display: grid; align-content: start; gap: 8px; }
        .platform-body aside div { font-size: 14px; padding: 8px 10px; border-radius: 8px; color: #6C6C71; }
        .platform-body aside .nav-on { background: var(--blush); color: var(--magenta); font-weight: 600; }
        .platform-main { padding: 34px; }
        .platform-kicker { color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 8px; }
        .platform-title { max-width: 390px; font-size: 27px; line-height: 1.18; font-weight: 600; letter-spacing: -.02em; margin-bottom: 30px; }
        .platform-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .platform-cards > div { min-width: 0; border: 1px solid #E2E2E4; border-radius: 16px; padding: 18px 14px; color: #3D3D42; }
        .platform-cards svg { color: var(--magenta); margin-bottom: 18px; }
        .platform-cards strong { display: block; font-size: 16px; margin-bottom: 4px; }
        .platform-cards span { display: block; font-size: 14px; line-height: 1.4; color: #77777C; }

        /* Terminology */
        .terminology-wrap { display: grid; grid-template-columns: .86fr 1.14fr; gap: 76px; align-items: center; }
        .terminology-diagram { display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; min-height: 410px; border: 1px solid #E2D7DC; background: #FFFFFF; border-radius: 28px; overflow: hidden; }
        .term-core { padding: 40px 34px; background: #2A282B; color: #FFFFFF; display: flex; flex-direction: column; justify-content: center; }
        .term-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--dark-eyebrow); margin-bottom: 28px; }
        .term-core strong { font-size: 24px; line-height: 1.2; margin-bottom: 12px; }
        .term-core small { font-size: 16px; line-height: 1.55; color: #C7C4C8; }
        .term-lines { display: flex; flex-direction: column; justify-content: center; padding: 24px 30px; }
        .term-row { display: grid; grid-template-columns: 28px 1fr; gap: 13px; align-items: center; min-height: 57px; border-bottom: 1px solid var(--line); font-size: 16px; color: #3C3C40; }
        .term-row:last-child { border-bottom: 0; }
        .term-connector { display: inline-block; height: 2px; width: 28px; background: var(--magenta); }

        /* AI */
        .ai-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #3A3A40; border-bottom: 1px solid #3A3A40; }
        .ai-item { padding: 32px 28px; }
        .ai-item + .ai-item { border-left: 1px solid #3A3A40; }
        .ai-item .ai-mark { width: 36px; height: 4px; background: var(--dark-eyebrow); margin-bottom: 26px; }
        .ai-item h3 { font-size: 20px; color: #FFFFFF; }
        .ai-item p { font-size: 16px; color: #BEBEC4; margin: 0; }
        .ai-note { margin-top: 36px; font-size: 18px; line-height: 1.65; color: #E1E1E4; max-width: 860px; }

        /* Security */
        .security-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 72px; align-items: start; }
        .security-matrix { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 26px; overflow: hidden; background: #FFFFFF; }
        .security-cell { padding: 26px; min-height: 180px; }
        .security-cell:nth-child(odd) { border-right: 1px solid var(--line); }
        .security-cell:nth-child(n+3) { border-top: 1px solid var(--line); }
        .security-cell .coverage-icon { margin-bottom: 18px; }
        .security-cell strong { display: block; font-size: 18px; margin-bottom: 8px; }
        .security-cell p { margin: 0; font-size: 16px; color: var(--body); }

        /* Localization & file production */
        .localization-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
        .editorial-panel { border-top: 2px solid #2F2F34; padding-top: 28px; }
        .editorial-panel h3 { font-size: 26px; }
        .editorial-panel p { font-size: 17px; color: var(--body); }
        .editorial-panel ul { margin: 22px 0 0; padding: 0; list-style: none; columns: 2; column-gap: 28px; }
        .editorial-panel li { break-inside: avoid; position: relative; padding: 0 0 10px 16px; font-size: 16px; color: var(--body); }
        .editorial-panel li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); position: absolute; top: .72em; left: 0; }
        .quiet-links { display: flex; gap: 22px; flex-wrap: wrap; margin-top: 18px; }
        .quiet-links .editorial-link { margin-top: 0; }

        /* Program scale */
        .program-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 76px; align-items: start; }
        .program-rows { border-top: 1px solid var(--line); }
        .program-row { display: grid; grid-template-columns: 210px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .program-row strong { font-size: 18px; font-weight: 600; }
        .program-row p { margin: 0; font-size: 16px; color: var(--body); }

        /* Quality */
        .quality-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid #3B3B40; border-bottom: 1px solid #3B3B40; }
        .quality-item { padding: 28px 26px; min-height: 205px; }
        .quality-item + .quality-item { border-left: 1px solid #3B3B40; }
        .quality-item strong { display: block; color: #FFFFFF; font-size: 19px; margin-bottom: 10px; }
        .quality-item p { color: #C4C4C9; font-size: 16px; margin: 0; }
        .quality-note { margin-top: 32px; max-width: 820px; font-size: 17px; color: #D4D4D8; }

        /* Languages + teams */
        .scale-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 76px; align-items: start; }
        .language-cloud { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .language-cloud span { padding: 14px 16px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); font-size: 16px; color: #3F3F44; background: #FFFFFF; }
        .team-rows { border-top: 1px solid var(--line); }
        .team-row { display: grid; grid-template-columns: 220px 1fr; gap: 26px; padding: 19px 0; border-bottom: 1px solid var(--line); }
        .team-row strong { font-size: 17px; }
        .team-row span { font-size: 16px; color: var(--body); }

        /* Workflow */
        .workflow-track { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
        .workflow-step { min-height: 258px; padding: 30px 30px 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .workflow-number { color: var(--magenta); font-size: 13px; font-weight: 600; margin-bottom: 28px; }
        .workflow-step h3 { font-size: 21px; }
        .workflow-step p { margin: 0; font-size: 16px; color: var(--body); }

        /* Why */
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 58px; border-top: 1px solid var(--line); }
        .why-row { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .why-row .coverage-icon { width: 40px; height: 40px; border-radius: 12px; }
        .why-row strong { display: block; font-size: 18px; margin-bottom: 6px; }
        .why-row p { margin: 0; font-size: 16px; color: var(--body); }

        /* Related */
        .related-list { border-top: 1px solid var(--line); }
        .related-row { display: grid; grid-template-columns: 300px 1fr auto; gap: 30px; align-items: center; min-height: 118px; border-bottom: 1px solid var(--line); }
        .related-row strong { font-size: 18px; }
        .related-row p { margin: 0; font-size: 16px; color: var(--body); }
        .related-row .editorial-link { margin: 0; white-space: nowrap; }

        /* Insights */
        .insights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .insight-card { min-height: 235px; background: #FFFFFF; border: 1px solid var(--line); border-radius: 22px; padding: 28px; display: flex; flex-direction: column; }
        .insight-card .insight-type { color: var(--magenta); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; font-weight: 600; margin-bottom: 22px; }
        .insight-card h3 { font-size: 21px; }
        .insight-card p { margin: 0 0 16px; font-size: 16px; color: var(--body); }
        .insight-card .editorial-link { margin-top: auto; }

        /* FAQ */
        .faq-wrap { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; border: 0; background: transparent; padding: 24px 0; display: grid; grid-template-columns: 1fr 42px; gap: 20px; align-items: center; text-align: left; color: var(--text); font: inherit; font-size: 18px; font-weight: 600; cursor: pointer; }
        .faq-plus { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #D2D2D5; display: inline-flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 23px; line-height: 1; }
        .faq-answer { max-width: 840px; padding: 0 0 26px; }
        .faq-answer p { font-size: 16px; line-height: 1.7; color: var(--body); margin: 0; }

        /* CTA */
        .final-cta { padding: 88px 0; background: var(--blush); }
        .cta-box { max-width: 1100px; margin: 0 auto; text-align: center; padding: 12px 40px; }
        .cta-box h2 { max-width: 820px; margin: 0 auto 20px; }
        .cta-box p { max-width: 760px; margin: 0 auto; font-size: 18px; color: #4E4449; }
        .cta-box .btn-row { justify-content: center; }

        @media (max-width: 1180px) {
          .shell { width: calc(100% - 80px); }
          .hero-grid { grid-template-columns: 1fr 430px; gap: 48px; }
          .lifecycle-grid { grid-template-columns: repeat(3, 1fr); }
          .lifecycle-item:nth-child(5), .lifecycle-item:last-child { grid-column: auto; }
          .quality-grid, .ai-grid { grid-template-columns: repeat(2, 1fr); }
          .quality-item:nth-child(3), .quality-item:nth-child(4), .ai-item:nth-child(3), .ai-item:nth-child(4) { border-top: 1px solid #3B3B40; }
          .quality-item:nth-child(3), .ai-item:nth-child(3) { border-left: 0; }
        }

        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .section { padding: 80px 0; }
          .hero { padding: 88px 0 78px; }
          .hero-grid, .intro-grid, .split, .split.reverse, .benefits-grid, .learning-layout, .communications-grid, .terminology-wrap, .security-grid, .localization-grid, .program-grid, .scale-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-copy { max-width: 760px; margin: 0 auto; text-align: center; }
          .hero-copy .eyebrow { text-align: center; }
          .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-copy .btn-row, .hero-audiences { justify-content: center; }
          .hero-art { max-width: 560px; justify-self: center; }
          .intro-grid .section-heading, .benefits-grid > .section-heading, .learning-layout > div > .section-heading, .program-grid > .section-heading, .scale-grid > div > .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .intro-grid .section-heading p, .benefits-grid > .section-heading p, .learning-layout > div > .section-heading p, .program-grid > .section-heading p, .scale-grid > div > .section-heading p { margin-left: auto; margin-right: auto; }
          .section-heading.left-mobile { text-align: left !important; margin-left: 0 !important; margin-right: 0 !important; }
          .section-heading.left-mobile p { margin-left: 0 !important; margin-right: 0 !important; }
          .lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
          .coverage-panel { grid-template-columns: 1fr; }
          .coverage-group:nth-child(odd) { border-right: 0; }
          .coverage-group:nth-child(n+2) { border-top: 1px solid var(--line); }
          .document-visual { order: 2; }
          .platform-mockup { max-width: 720px; }
          .terminology-diagram { max-width: 720px; }
          .related-row { grid-template-columns: 240px 1fr; padding: 20px 0; }
          .related-row .editorial-link { grid-column: 2; justify-self: start; }
          .insights-grid { grid-template-columns: repeat(2, 1fr); }
          .workflow-track { grid-template-columns: repeat(2, 1fr); }
          .language-cloud { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .hero { padding: 72px 0 64px; }
          h1 { font-size: 38px; line-height: 1.06; }
          h2 { font-size: 30px; line-height: 1.14; }
          h3 { font-size: 20px; }
          .lead, .section-heading p { font-size: 18px; }
          .section-heading { margin-bottom: 38px; }
          .section-heading:not(.left-mobile), .section-heading.center { text-align: center; margin-left: auto; margin-right: auto; }
          .section-heading:not(.left-mobile) p { margin-left: auto; margin-right: auto; }
          .section-heading.left-mobile { text-align: left; }
          .hero-copy { text-align: center; }
          .hero-copy .btn-row { display: grid; grid-template-columns: 1fr; width: 100%; }
          .btn { width: 100%; min-height: 50px; }
          .hero-audiences { justify-content: center; font-size: 16px; line-height: 1.8; }
          .hero-audiences span:not(:last-child)::after { margin: 0 7px; }
          .hero-art { margin-top: 8px; }
          .value-strip { grid-template-columns: 1fr; }
          .value-strip > div { padding: 20px 0; }
          .value-strip > div + div { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
          .lifecycle-grid { grid-template-columns: 1fr; border-radius: 24px; }
          .lifecycle-item { min-height: 0; padding: 26px 24px; }
          .lifecycle-num { margin-bottom: 18px; }
          .coverage-group { padding: 28px 24px; min-height: 0; }
          .coverage-list { grid-template-columns: 1fr; }
          .split, .split.reverse, .benefits-grid, .learning-layout, .communications-grid, .terminology-wrap, .security-grid, .localization-grid, .program-grid, .scale-grid { gap: 38px; }
          .split-copy, .intro-copy, .communications-copy { max-width: none; }
          .document-visual { min-height: 390px; }
          .doc-sheet { padding: 26px; }
          .doc-float { right: 1%; bottom: 0; width: 140px; }
          .benefit-row { grid-template-columns: 1fr; gap: 5px; }
          .learning-formats { grid-template-columns: 1fr; }
          .learning-formats > div:nth-child(odd) { border-right: 0; }
          .learning-formats > div:nth-child(n+2) { border-top: 1px solid var(--line); }
          .comm-row { grid-template-columns: 36px 1fr; }
          .platform-body { grid-template-columns: 1fr; }
          .platform-body aside { display: none; }
          .platform-main { padding: 25px 20px; }
          .platform-title { font-size: 23px; }
          .platform-cards { grid-template-columns: 1fr; }
          .platform-cards > div { display: grid; grid-template-columns: 30px 1fr; column-gap: 10px; align-items: center; }
          .platform-cards svg { margin: 0; grid-row: span 2; }
          .platform-cards strong, .platform-cards span { min-width: 0; }
          .terminology-diagram { grid-template-columns: 1fr; min-height: 0; }
          .term-core { padding: 30px 24px; }
          .term-lines { padding: 18px 22px; }
          .ai-grid, .quality-grid { grid-template-columns: 1fr; }
          .ai-item + .ai-item, .quality-item + .quality-item { border-left: 0; border-top: 1px solid #3B3B40; }
          .ai-item, .quality-item { min-height: 0; padding: 26px 0; }
          .security-matrix { grid-template-columns: 1fr; }
          .security-cell:nth-child(odd) { border-right: 0; }
          .security-cell:nth-child(n+2) { border-top: 1px solid var(--line); }
          .editorial-panel ul { columns: 1; }
          .program-row, .team-row { grid-template-columns: 1fr; gap: 7px; padding: 20px 0; }
          .language-cloud { grid-template-columns: repeat(2, 1fr); }
          .workflow-track { grid-template-columns: 1fr; border-radius: 24px; }
          .workflow-step { min-height: 0; padding: 26px 24px; }
          .why-grid { grid-template-columns: 1fr; }
          .why-row { grid-template-columns: 40px 1fr; }
          .related-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .related-row .editorial-link { grid-column: 1; }
          .editorial-link, .related-row strong, .related-row p, .insight-card h3, .faq-question span:first-child { min-width: 0; overflow-wrap: anywhere; }
          .platform-topbar { gap: 12px; }
          .platform-locale { white-space: nowrap; }
          .insights-grid { grid-template-columns: 1fr; }
          .insight-card { min-height: 0; }
          .faq-question { grid-template-columns: 1fr 38px; font-size: 17px; padding: 21px 0; }
          .final-cta { padding: 72px 0; }
          .cta-box { padding: 0; }
          .cta-box .btn-row { display: grid; grid-template-columns: 1fr; }
        }

        @media (max-width: 360px) {
          .shell { width: calc(100% - 40px); }
          .hero-audiences { display: block; text-align: center; }
          .hero-audiences span { display: inline; }
          .doc-float { position: static; width: 100%; margin-top: 18px; }
          .document-visual { display: block; min-height: 0; }
          .language-cloud { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1 id="page-title">HR Translation Services for Global Workforces</h1>
              <p className="lead">Communicate clearly with employees across languages, regions, and every stage of the employee lifecycle. Stepes provides professional human resources translation services for employee communications, policies, handbooks, benefits, onboarding, training, HR technology, and global workforce programs in 100+ languages.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={links.quote}>Get a Quote <ArrowIcon /></a>
                <a className="btn btn-secondary" href="https://www.stepes.com/human-resource-translation-services/#employee-lifecycle">Explore HR Translation Solutions <ArrowIcon /></a>
              </div>
              <div className="hero-audiences" aria-label="Teams supported">
                <span>HR</span><span>People Operations</span><span>Talent Acquisition</span><span>Learning & Development</span><span>Benefits</span><span>Employee Communications</span>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="section" aria-labelledby="clear-workforce">
          <div className="shell intro-grid">
            <SectionHeading eyebrow="Global HR Communication" title="Communicate Clearly Across Your Global Workforce" id="clear-workforce" className="left-mobile" />
            <div className="intro-copy">
              <p>Global HR teams manage some of the most important communications employees receive, from recruiting and onboarding to workplace policies, benefits, learning, organizational changes, and everyday employee updates. When your workforce spans multiple languages, every message needs to remain clear, consistent, and appropriate for the people who rely on it.</p>
              <p>Stepes provides scalable HR translation services for organizations managing employees across countries, languages, and communication channels. We translate and localize HR documents, digital experiences, training programs, multimedia, and recurring workforce communications while helping you maintain approved terminology and language consistency across the entire employee experience.</p>
              <div className="value-strip">
                <div><strong>One-Time Projects</strong><span>Handbooks, policies, benefits, forms, presentations, and urgent employee communications.</span></div>
                <div><strong>Recurring Programs</strong><span>Ongoing HR updates with reusable terminology, translation memory, and reviewer feedback.</span></div>
                <div><strong>Enterprise Scale</strong><span>Coordinated multilingual support across teams, regions, formats, and 100+ languages.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="employee-lifecycle" className="section section-soft" aria-labelledby="lifecycle-title">
          <div className="shell">
            <SectionHeading title="HR Translation Across the Employee Lifecycle" intro="HR communication begins before a candidate applies and continues through onboarding, development, benefits, performance, organizational change, and offboarding. Stepes helps global HR and People teams communicate consistently throughout that journey." id="lifecycle-title" center className="left-mobile" />
            <div className="lifecycle-grid">
              {lifecycle.map((item) => (
                <article className="lifecycle-item" key={item.n}>
                  <div className="lifecycle-num">{item.n}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="content-title">
          <div className="shell">
            <SectionHeading title="HR Documents and Content We Translate" intro="HR content reaches employees through more formats and channels than ever before. Stepes supports both traditional HR documentation and the digital experiences that increasingly define how employees interact with their organizations." id="content-title" center />
            <div className="coverage-panel">
              {contentGroups.map((group, i) => (
                <article className="coverage-group" key={group.title}>
                  <div className="coverage-top">
                    <span className="coverage-icon"><Icon name={["policy","people","benefits","learn","screen","message"][i]} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="coverage-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blush" aria-labelledby="handbook-title">
          <div className="shell split">
            <div className="split-copy">
              <h2 id="handbook-title">Employee Handbook and HR Policy Translation</h2>
              <p>Employee handbooks and workplace policies contain information employees may refer to throughout their employment. Their translations need to preserve approved terminology, policy meaning, structure, and tone while remaining clear to the employees reading them.</p>
              <p>Stepes translates employee handbooks, workplace policies, codes of conduct, ethics materials, leave policies, workplace procedures, employee acknowledgments, and related HR documentation into 100+ languages.</p>
              <ul>
                <li><CheckIcon /> Existing translations, HR glossaries, terminology, style guidance, and reviewer feedback can be incorporated into the workflow.</li>
                <li><CheckIcon /> HR, corporate legal, compliance, and in-country teams can provide approved local terminology and market-specific content.</li>
                <li><CheckIcon /> Stepes focuses on accurate multilingual communication while policy and employment-law decisions remain with the appropriate subject-matter experts.</li>
              </ul>
              <EditorialLink href={links.handbook}>Employee Handbook Translation Services</EditorialLink>
            </div>
            <div className="document-visual" aria-hidden="true">
              <div className="doc-sheet">
                <div className="doc-tag">Employee Handbook · ES</div>
                <div className="doc-title" />
                <div className="doc-line w90"/><div className="doc-line w80"/><div className="doc-line w90"/><div className="doc-line w65"/>
                <div className="doc-callout">Approved HR terminology is reused across policies, systems, and employee communications.</div>
                <div style={{height:18}} />
                <div className="doc-line w90"/><div className="doc-line w90"/><div className="doc-line w80"/>
              </div>
              <div className="doc-float"><strong>Terminology aligned</strong><span>Benefits · Job titles · Policies · Programs</span></div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="benefits-title">
          <div className="shell benefits-grid">
            <SectionHeading eyebrow="Benefits & Total Rewards" title="Make Benefits Information Clear in Every Language" intro="Benefits can be complex even when employees receive the information in their first language. Clear translation matters when employees need to compare options, understand deadlines, review coverage, or make enrollment decisions." id="benefits-title" />
            <div>
              <div className="benefit-list">
                {[
                  ["Health & Insurance", "Benefits guides, plan information, enrollment communications, and employee-facing explanations."],
                  ["Open Enrollment", "Annual enrollment campaigns, deadlines, reminders, support content, and recurring updates."],
                  ["Retirement & Savings", "Retirement program materials, savings information, and long-term benefit communications."],
                  ["Compensation", "Compensation communications, total rewards information, and approved program terminology."],
                  ["Wellness & Support", "Wellness programs, leave information, employee assistance programs, and related resources."],
                ].map((row) => <div className="benefit-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span></div>)}
              </div>
              <div className="benefit-note">For recurring benefits programs, previously approved translations and terminology can be reused as content changes, reducing unnecessary retranslation while helping new versions remain aligned with earlier communications.</div>
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="learning-title">
          <div className="shell learning-layout">
            <div>
              <SectionHeading eyebrow="Learning & Development" title="Multilingual Learning for a Global Workforce" intro="Stepes helps HR and L&D teams make onboarding, compliance, workplace safety, leadership development, professional development, and other learning experiences available across languages and formats." id="learning-title" />
              <p className="lead">We support PowerPoint presentations, workbooks, facilitator guides, videos, voice-over, subtitles, eLearning authoring environments, LMS-ready packages, assessments, job aids, and other training formats.</p>
              <div className="quiet-links">
                <EditorialLink href={links.training}>Training Translation Services</EditorialLink>
                <EditorialLink href={links.elearning}>eLearning Translation Services</EditorialLink>
              </div>
            </div>
            <div className="learning-formats">
              <div><strong>Onboarding & Orientation</strong><span>New-hire training, policy introductions, culture, workplace expectations, and early employee learning.</span></div>
              <div><strong>Compliance & Safety</strong><span>Ethics, code of conduct, workplace safety, policy training, and required employee learning.</span></div>
              <div><strong>Leadership & Skills</strong><span>Leadership development, professional skills, competencies, and employee development programs.</span></div>
              <div><strong>Digital Learning</strong><span>Interactive courses, LMS content, SCORM packages, multimedia, assessments, subtitles, and voice-over.</span></div>
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="communications-title">
          <div className="shell communications-grid">
            <div className="communications-copy">
              <Eyebrow dark>Employee Communications</Eyebrow>
              <h2 id="communications-title">Keep Every Employee Informed in Every Language</h2>
              <p>Global workforce communication is continuous. HR teams regularly announce organizational changes, introduce programs, explain policies, share leadership messages, collect employee feedback, and communicate information that may be relevant for only a few days or even a few hours.</p>
              <p>For recurring content, Stepes can retain approved terminology, translation memory, style guidance, and previous translations so new communications do not start from zero each time.</p>
              <EditorialLink href={links.continuous} inverted>Continuous Translation</EditorialLink>
            </div>
            <div className="comm-rows">
              {[
                ["Leadership & Company Updates", "Executive messages, company announcements, organizational changes, and time-sensitive workforce updates."],
                ["Employee Engagement", "Newsletters, engagement campaigns, surveys, internal events, and employee initiatives."],
                ["Policy & Workplace Communications", "Policy changes, workplace guidance, return-to-work information, and operational messages."],
                ["Ongoing Multilingual Programs", "Repeatable translation workflows for recurring employee communications across languages and regions."],
              ].map((row, i) => <div className="comm-row" key={row[0]}><div className="comm-icon"><Icon name={i === 0 ? "message" : i === 1 ? "people" : i === 2 ? "policy" : "cycle"}/></div><div><strong>{row[0]}</strong><span>{row[1]}</span></div></div>)}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="digital-title">
          <div className="shell split reverse">
            <HRPlatformMockup />
            <div className="split-copy">
              <Eyebrow>HR Technology</Eyebrow>
              <h2 id="digital-title">Localize the Digital Employee Experience</h2>
              <p>Employees increasingly interact with HR through software rather than documents alone. They apply for jobs online, enroll in benefits through employee portals, complete learning in digital platforms, update information in self-service systems, and manage performance through HR applications.</p>
              <p>Stepes helps organizations localize HRIS and HCM interfaces, employee self-service portals, applicant tracking systems, benefits portals, learning platforms, performance-management tools, HR mobile applications, employee knowledge bases, automated notifications, and related help content.</p>
              <p>The goal is consistency across the complete employee experience. An approved term used in an employee handbook should not suddenly appear under a different translation in a benefits portal, training course, or HR application.</p>
              <EditorialLink href={links.software}>Software Localization Services</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section section-blush" aria-labelledby="term-title">
          <div className="shell terminology-wrap">
            <div className="split-copy">
              <Eyebrow>Terminology Governance</Eyebrow>
              <h2 id="term-title">One HR Vocabulary Across Every Employee Touchpoint</h2>
              <p>Every organization develops its own HR vocabulary. Job families, organizational units, benefit programs, competency models, policy names, employment classifications, learning programs, corporate values, and internal systems all contain terminology employees need to recognize consistently.</p>
              <p>Stepes can incorporate approved multilingual glossaries, terminology databases, translation memories, existing HR translations, corporate style guidance, preferred job and department names, program and benefit terminology, and reviewer feedback.</p>
              <p>As approved translations accumulate, these language assets can be reused across future projects to improve consistency and reduce repetitive work.</p>
            </div>
            <TerminologyDiagram />
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="ai-title">
          <div className="shell">
            <SectionHeading eyebrow="AI + Human Workflow" title="AI-Accelerated HR Translation With Human Oversight" intro="Modern HR teams manage more content, more channels, and more frequent updates than traditional translation workflows were designed to handle. Stepes uses flexible AI + human translation workflows aligned with content, audience, sensitivity, scale, and quality requirements." id="ai-title" dark className="left-mobile" />
            <div className="ai-grid">
              <div className="ai-item"><div className="ai-mark"/><h3>AI for Scale and Speed</h3><p>AI-assisted translation can efficiently process high-volume or frequently updated HR content and accelerate multilingual production.</p></div>
              <div className="ai-item"><div className="ai-mark"/><h3>Approved Language Reuse</h3><p>Translation memory and terminology can reuse prior approved HR language instead of repeatedly translating the same or similar content.</p></div>
              <div className="ai-item"><div className="ai-mark"/><h3>Professional Human Validation</h3><p>Experienced linguists can review accuracy, fluency, tone, terminology, cultural appropriateness, and intended meaning.</p></div>
              <div className="ai-item"><div className="ai-mark"/><h3>Higher-Control Workflows</h3><p>Policies, benefits, sensitive workforce communications, compliance materials, and other critical content can receive stronger review and quality assurance.</p></div>
            </div>
            <p className="ai-note">Use automation where it creates meaningful efficiency and expert human judgment where it creates meaningful value.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="security-title">
          <div className="shell security-grid">
            <div>
              <SectionHeading eyebrow="Confidentiality & Control" title="Secure Translation for Sensitive Workforce Content" intro="HR organizations routinely manage information that is confidential, time-sensitive, or accessible only to specific employees and teams. Translation workflows should reflect that sensitivity from the start." id="security-title" className="left-mobile" />
              <p className="lead">Stepes supports enterprise translation workflows designed around controlled content handling, appropriate access, confidentiality, and project-specific governance requirements.</p>
              <EditorialLink href={links.security}>Translation Security & Confidentiality</EditorialLink>
            </div>
            <div className="security-matrix">
              <div className="security-cell"><span className="coverage-icon"><Icon name="lock"/></span><strong>Controlled Handling</strong><p>Define project workflows around content sensitivity, review requirements, and delivery processes.</p></div>
              <div className="security-cell"><span className="coverage-icon"><Icon name="people"/></span><strong>Appropriate Access</strong><p>Limit unnecessary handling and align access to the people and review steps required for the project.</p></div>
              <div className="security-cell"><span className="coverage-icon"><Icon name="policy"/></span><strong>Sensitive HR Content</strong><p>Support compensation, benefits, performance, recruiting, investigations, organizational changes, and workforce planning materials.</p></div>
              <div className="security-cell"><span className="coverage-icon"><Icon name="cycle"/></span><strong>Defined Review Paths</strong><p>Establish workflow and review requirements before production begins for especially sensitive projects.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="localize-title">
          <div className="shell">
            <SectionHeading eyebrow="Localization & Production" title="HR Content That Works Across Markets and Formats" intro="Effective HR localization considers how employees encounter and use content in each market, while multilingual production keeps the translated materials readable, functional, and professionally presented." id="localize-title" center />
            <div className="localization-grid">
              <article className="editorial-panel">
                <h3>Adapt HR Content for Employees Across Markets</h3>
                <p>Depending on the project, localization may include regional terminology, dates and number formats, units, screenshots, digital interfaces, multimedia, local language conventions, page layout, and approved market-specific content.</p>
                <p>When country-specific employment, policy, or regulatory requirements apply, Stepes can collaborate with your HR, legal, compliance, or in-country teams to incorporate approved local content and terminology.</p>
                <ul><li>Dates and times</li><li>Number formats</li><li>Regional terminology</li><li>Images and screenshots</li><li>Writing direction</li><li>Approved local content</li></ul>
              </article>
              <article className="editorial-panel">
                <h3>Preserve Layout, Files, and Employee Usability</h3>
                <p>Translation often changes text length and layout. Stepes combines translation with multilingual document production and localization engineering to help HR content remain usable after translation.</p>
                <ul><li>Microsoft Word</li><li>PowerPoint</li><li>Excel</li><li>PDF</li><li>Adobe InDesign</li><li>Web and HTML</li><li>eLearning formats</li><li>Software resource files</li><li>Audio and video</li><li>Images and graphics</li></ul>
                <div className="quiet-links"><EditorialLink href={links.document}>Document Translation</EditorialLink><EditorialLink href={links.pdf}>PDF Translation</EditorialLink><EditorialLink href={links.multimedia}>Multimedia Translation</EditorialLink></div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="program-title">
          <div className="shell program-grid">
            <SectionHeading eyebrow="Enterprise Scale" title="From One HR Document to an Ongoing Global Program" intro="HR translation requirements can begin small and expand quickly. Stepes supports organizations from individual projects through ongoing multilingual workforce programs." id="program-title" className="left-mobile" />
            <div className="program-rows">
              {[
                ["Individual HR Projects", "Translate a specific handbook, policy, benefits document, employee communication, presentation, or training program."],
                ["Multi-Content Programs", "Coordinate documents, learning content, employee communications, multimedia, and digital HR experiences across multiple languages."],
                ["Recurring Updates", "Reuse approved terminology and previous translations as policies, benefits, systems, and programs evolve."],
                ["Enterprise HR Translation", "Create repeatable multilingual workflows for multiple HR teams, business units, regions, content types, and employee populations."],
              ].map((row) => <div className="program-row" key={row[0]}><strong>{row[0]}</strong><p>{row[1]}</p></div>)}
              <EditorialLink href={links.continuous}>Continuous Translation for Ongoing Content</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="quality-title">
          <div className="shell">
            <SectionHeading title="Quality Built Around the Content Employees Rely On" intro="For HR teams, quality means more than correct grammar. It means consistent terminology, preserved policy meaning, understandable training, accurate details, usable formatting, and translations reviewed in the context employees will actually encounter." id="quality-title" dark className="left-mobile" />
            <div className="quality-grid">
              {[
                ["Meaning", "Preserve the intent and information contained in the approved source content."],
                ["Terminology", "Use approved HR, corporate, benefits, and organizational language consistently."],
                ["Language Quality", "Review grammar, fluency, readability, tone, and natural target-language expression."],
                ["Completeness & Format", "Check required content, layout, interfaces, tables, graphics, and technical integrity."],
              ].map((row) => <div className="quality-item" key={row[0]}><strong>{row[0]}</strong><p>{row[1]}</p></div>)}
            </div>
            <p className="quality-note">Different HR materials may justify different levels of review. Stepes can configure translation and quality workflows according to content importance, audience, sensitivity, and business requirements rather than applying one identical process to every file.</p>
          </div>
        </section>

        <section className="section" aria-labelledby="languages-title">
          <div className="shell scale-grid">
            <div>
              <SectionHeading title="HR Translation Services in 100+ Languages" intro="Support both widely used global languages and regional workforce requirements, from one-market projects to large multilingual rollouts." id="languages-title" />
              <div className="language-cloud">
                {["Spanish","French","German","Italian","Portuguese","Dutch","Polish","Czech","Romanian","Turkish","Chinese","Japanese","Korean","Vietnamese","Thai","Indonesian","Malay","Hindi","Arabic","Swedish","Danish"].map((lang) => <span key={lang}>{lang}</span>)}
              </div>
            </div>
            <div>
              <SectionHeading title="Built for Global HR and People Teams" intro="HR translation often involves multiple teams with different responsibilities. Stepes supports the people who create, approve, manage, and distribute workforce content across an organization." className="left-mobile" />
              <div className="team-rows">
                {audiences.map((row) => <div className="team-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="workflow-title">
          <div className="shell">
            <SectionHeading title="A Translation Workflow Built Around Your HR Program" intro="Every HR translation project has different audiences, content types, languages, sensitivities, and timelines. Stepes configures the workflow around those requirements rather than forcing every project through the same production path." id="workflow-title" center className="left-mobile" />
            <div className="workflow-track">
              {workflow.map((row) => <article className="workflow-step" key={row[0]}><div className="workflow-number">{row[0]}</div><h3>{row[1]}</h3><p>{row[2]}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="why-title">
          <div className="shell">
            <SectionHeading title="Why Global HR Teams Choose Stepes" intro="One partner can support the documents, systems, learning, multimedia, terminology, quality, and ongoing communications that make up a modern multilingual employee experience." id="why-title" className="left-mobile" />
            <div className="why-grid">
              {[
                ["people", "Support Across the Employee Lifecycle", "Translate recruiting, onboarding, policies, benefits, training, employee communications, HR technology, talent programs, and workforce transitions."],
                ["screen", "One Partner Across Content Types", "Support documents, digital learning, software, multimedia, recurring communications, and other HR formats within coordinated workflows."],
                ["cycle", "AI + Human Translation", "Combine automation, language reuse, terminology management, and professional human validation according to the requirements of each project."],
                ["policy", "Consistent HR Terminology", "Maintain approved job titles, program names, benefit terms, policies, organizational language, and other HR terminology across employee touchpoints."],
                ["globe", "Enterprise Scalability", "Support one urgent project, a multi-language rollout, or an ongoing multinational HR translation program."],
                ["lock", "Secure Workflows", "Handle sensitive workforce content using translation workflows aligned with confidentiality, access, and project governance requirements."],
              ].map((row) => <div className="why-row" key={row[1]}><span className="coverage-icon"><Icon name={row[0]}/></span><div><strong>{row[1]}</strong><p>{row[2]}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="related-title">
          <div className="shell">
            <SectionHeading title="Explore Related HR Translation Services" intro="Continue into specialist services for employee handbooks, training, eLearning, HR technology, documents, and multimedia when your program requires deeper support for a specific content type or workflow." id="related-title" center />
            <div className="related-list">
              {related.map((row) => <div className="related-row" key={row[0]}><strong>{row[0]}</strong><p>{row[1]}</p><EditorialLink href={row[2]}>{row[0]}</EditorialLink></div>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" aria-labelledby="insights-title">
          <div className="shell">
            <SectionHeading eyebrow="HR Translation Insights" title="Guidance for Global HR Teams" intro="Build more consistent multilingual employee experiences by planning terminology, review, workflow, localization, and recurring content before translation starts." id="insights-title" center />
            <div className="insights-grid">
              {insights.map((guide) => <article className="insight-card" key={guide.title}><div className="insight-type">{guide.type}</div><h3>{guide.title}</h3><p>{guide.body}</p><EditorialLink href={guide.href}>{guide.linkLabel}</EditorialLink></article>)}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="faq-title">
          <div className="shell">
            <SectionHeading title="HR Translation Services FAQs" intro="Answers to common questions about human resources translation, employee content, HR technology, AI + human workflows, terminology, security, language coverage, and ongoing programs." id="faq-title" className="left-mobile" />
            <div className="faq-wrap">
              {faqs.map((item, index) => <FAQItem key={item[0]} item={item} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />)}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="cta-title">
          <div className="shell">
            <div className="cta-box">
              <h2 id="cta-title">Make Every Employee Communication Clear in Every Language</h2>
              <p>Stepes combines professional HR translation, AI-enabled workflows, terminology management, multilingual production, and human quality assurance to support global workforces in 100+ languages. From one important HR document to an ongoing multilingual program, we can build the right workflow around your content, languages, and requirements.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={links.quote}>Get a Quote <ArrowIcon /></a>
                <a className="btn btn-secondary" href={links.contactSales}>Talk to an HR Translation Expert <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
