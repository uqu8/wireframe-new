import React, { useState } from "react";


const contractGroups = [
  {
    title: "Commercial & Sales Agreements",
    icon: "briefcase",
    text: "Translate the agreements that govern customer relationships, routes to market, and ongoing commercial engagements.",
    items: [
      "Master service agreements (MSAs)",
      "Sales and customer agreements",
      "Distribution and reseller agreements",
      "Agency and franchise agreements",
      "Commercial terms and conditions",
    ],
  },
  {
    title: "Procurement & Supply Chain",
    icon: "network",
    text: "Support global sourcing, manufacturing, vendor management, and supplier relationships with consistent multilingual contract documentation.",
    items: [
      "Supplier and vendor contracts",
      "Procurement and purchase agreements",
      "Manufacturing and supply agreements",
      "Logistics and transportation agreements",
    ],
  },
  {
    title: "Technology & Intellectual Property",
    icon: "code",
    text: "Maintain specialized legal and technical terminology across agreements governing software, data, technology, and intellectual property.",
    items: [
      "SaaS and software licensing agreements",
      "Technology and IP licensing agreements",
      "Technology transfer agreements",
      "IP assignment agreements",
      "Development and collaboration agreements",
    ],
  },
  {
    title: "Corporate & Transactional",
    icon: "building",
    text: "Translate corporate and transaction-related documents where entity names, financial language, and document relationships require close control.",
    items: [
      "Shareholder and partnership agreements",
      "Joint venture agreements",
      "Investment agreements",
      "M&A-related agreements",
      "Letters of intent and transaction documents",
    ],
  },
  {
    title: "Employment & Professional Services",
    icon: "people",
    text: "Support multilingual employment and professional relationships across countries and business units.",
    items: [
      "Employment and executive agreements",
      "Consulting agreements",
      "Independent contractor agreements",
      "Separation agreements",
      "Confidentiality and restrictive covenant documents",
    ],
  },
  {
    title: "Confidentiality & Data",
    icon: "lock",
    text: "Protect consistency across agreements involving sensitive commercial information, personal data, technology, and intellectual property.",
    items: [
      "NDAs and confidentiality agreements",
      "Data processing agreements",
      "Data sharing agreements",
      "Information security agreements",
    ],
  },
  {
    title: "Financial Agreements",
    icon: "finance",
    wide: true,
    text: "Translate contractual documentation involving financing, payment obligations, guarantees, and other financial arrangements.",
    items: [
      "Loan agreements",
      "Credit agreements",
      "Financing agreements",
      "Guarantees",
      "Letters of credit and related financial documents",
    ],
  },
];

const workflowUseCases = [
  {
    title: "Internal Review & Understanding",
    text: "For preliminary assessment, due diligence, procurement screening, and internal reference where speed and general understanding are the priority.",
    note: "AI-assisted translation, translation memory reuse, and targeted professional validation may be suitable depending on the content and risk.",
  },
  {
    title: "Negotiation & Business Review",
    text: "For agreements actively reviewed by legal, procurement, sales, HR, finance, or external counterparties.",
    note: "Professional legal translation, terminology control, translation memory, and structured QA provide stronger control over recurring contractual language.",
  },
  {
    title: "Execution & High-Consequence Agreements",
    text: "For material agreements, complex cross-border contracts, signature-ready documents, and other content where errors could have significant consequences.",
    note: "Expert human translation, independent revision, subject-matter review, and additional document QA can be applied according to project requirements.",
  },
  {
    title: "Certified or Official Use",
    text: "For contracts or related documents submitted to courts, government bodies, registries, immigration authorities, financial institutions, or other receiving organizations.",
    note: "Certification, sworn translation, notarization, or other formalities should be confirmed with the receiving authority before translation begins.",
  },
];

const qualitySteps = [
  ["Contract Analysis", "Review files, languages, complexity, intended use, formatting, references, confidentiality, timeline, and quality expectations."],
  ["Terminology & Reference Preparation", "Prepare defined terms, client glossaries, prior translations, translation memories, precedent agreements, and preferred language."],
  ["Translation", "Assign the appropriate professional, AI-assisted, or hybrid workflow based on project requirements and risk."],
  ["Linguistic Review & QA", "Check meaning, terminology, omissions, names, numbers, dates, consistency, and other contract-sensitive content."],
  ["Document QA", "Verify relevant clause numbering, tables, references, schedules, exhibits, formatting, and overall document usability."],
  ["Final Delivery", "Prepare approved files in the required format with project-specific quality and delivery requirements addressed."],
];

const faqs = [
  {
    q: "What is contract translation?",
    a: "Contract translation is the professional translation of contracts, agreements, and related documents from one language into another. Unlike general business translation, it requires close attention to defined terms, obligations, rights, exceptions, recurring clauses, party names, numbers, dates, cross-references, schedules, exhibits, and other elements that can affect how the document is understood.",
  },
  {
    q: "What types of contracts does Stepes translate?",
    a: "Stepes translates master service agreements, NDAs, sales contracts, supplier agreements, vendor contracts, distribution agreements, licensing agreements, SaaS agreements, employment contracts, consulting agreements, joint venture agreements, shareholder agreements, investment agreements, procurement contracts, SOWs, SLAs, amendments, schedules, exhibits, and many other business and legal agreements.",
  },
  {
    q: "How does Stepes keep defined terms consistent throughout a contract?",
    a: "Stepes can use legal glossaries, terminology management, translation memory, prior approved translations, precedent agreements, and client reference materials to establish preferred translations for defined terms and recurring language. Automated QA and professional human review provide additional checks for consistency across clauses and related documents.",
  },
  {
    q: "Can Stepes keep amendments and SOWs consistent with an agreement translated previously?",
    a: "Yes. When previous translations and reference materials are available, Stepes can use translation memory, approved terminology, precedent language, and client feedback to help keep new SOWs, schedules, exhibits, amendments, renewals, and related agreements aligned with earlier translations.",
  },
  {
    q: "Can Stepes translate redlined or revised contracts?",
    a: "Stepes can support revised and versioned contract files, including documents containing tracked changes or other revision information, depending on the source format and required deliverable. Clients should provide the source files, prior translations where available, and instructions about how revisions should appear in the translated version.",
  },
  {
    q: "Do contract translations need to be certified?",
    a: "Not necessarily. Many contracts translated for negotiation, internal review, commercial use, procurement, or corporate reference require professional legal translation but not formal certification. Certification, notarization, sworn translation, or another formality may be required when a receiving organization specifies it. The receiving authority ultimately determines what it will accept.",
  },
  {
    q: "Can AI be used to translate contracts?",
    a: "Yes, when applied appropriately. Repeated clauses, standard templates, previously approved language, and controlled terminology can benefit from AI-assisted translation and translation memory reuse. Important legal content should not rely on uncontrolled raw machine translation alone. Stepes uses AI within governed workflows that can include terminology management, translation memory, professional legal-linguist review, automated QA, and final human validation.",
  },
  {
    q: "Does Stepes preserve contract formatting?",
    a: "Yes. Depending on the source file and project scope, Stepes can preserve or reproduce important contract structure including headings, clause numbering, tables, defined-term capitalization, footnotes, schedules, exhibits, signature blocks, and other formatting elements. Complex PDF reconstruction or specialized desktop publishing may require additional document production work.",
  },
  {
    q: "How does Stepes protect confidential contracts?",
    a: "Stepes uses secure enterprise translation workflows designed to protect sensitive multilingual content throughout intake, translation, review, QA, and delivery. Controls include managed file handling, authorized project access, confidentiality obligations for linguistic resources, protected language assets, and secure cloud-based workflow management.",
  },
  {
    q: "How long does it take to translate a contract?",
    a: "Turnaround depends on the agreement's length and complexity, language pair, file format, number of target languages, required review level, formatting needs, and whether certification or other formalities are required. Translation memory and AI-assisted workflows can accelerate suitable projects, particularly when contracts contain repeated or previously translated content.",
  },
  {
    q: "What languages does Stepes support for contract translation?",
    a: "Stepes provides professional contract translation services in more than 100 languages, covering major commercial languages across Europe, Asia, the Americas, the Middle East, and other global markets. Organizations can manage individual language pairs or larger multilingual contract programs through one translation partner.",
  },
];

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"/><path d="M3 11h18"/><path d="M10 11v2h4v-2"/></>,
    network: <><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="15" width="6" height="5" rx="1"/><rect x="3" y="15" width="6" height="5" rx="1"/><path d="M9 6.5h4a3 3 0 0 1 3 3V15"/><path d="M12 17.5H9"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 6-4 12"/></>,
    building: <><path d="M4 21V6l8-3 8 3v15"/><path d="M8 9h1"/><path d="M12 9h1"/><path d="M16 9h1"/><path d="M8 13h1"/><path d="M12 13h1"/><path d="M16 13h1"/><path d="M10 21v-4h4v4"/></>,
    finance: <><path d="M3 9h18"/><path d="m5 9 7-5 7 5"/><path d="M6 9v8M10 9v8M14 9v8M18 9v8"/><path d="M4 17h16M3 21h18"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.7A5 5 0 0 1 21 19.5"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m15 8 4 4-4 4"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5"/><path d="M9 12h6"/><path d="M9 16h6"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    shield: <><path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></>,
    ai: <><path d="M8 8a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0z"/><path d="M5 10h3M16 10h3M5 15h3M16 15h3"/><path d="M10.5 12h3"/></>,
  };
  return <svg {...common}>{paths[name] || paths.file}</svg>;
}

function ArrowLink({ href, children, dark = false }) {
  return (
    <a className={`editorial-link ${dark ? "editorial-link--dark" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={18} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${dark ? "section-heading--dark" : ""}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function ContractHeroArt() {
  return (
    <div className="hero-art" aria-label="Illustration of a multilingual contract with connected clauses, defined terms, and supporting documents">
      <svg viewBox="0 0 620 500" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff"/>
            <stop offset="1" stopColor="#f7f7f9"/>
          </linearGradient>
        </defs>
        <path d="M112 85c-28 10-50 29-65 55" className="art-faint"/>
        <path d="M484 70c38 16 65 44 79 80" className="art-faint"/>
        <path d="M75 357c19 35 49 60 87 72" className="art-faint"/>
        <path d="M487 411c34-10 61-30 82-58" className="art-faint"/>

        <g transform="translate(142 38) rotate(-4 165 200)">
          <rect x="0" y="0" width="330" height="410" rx="20" fill="url(#paper)" className="art-stroke"/>
          <path d="M34 50h145" className="art-heavy"/>
          <path d="M34 75h237" className="art-line"/>
          <path d="M34 91h216" className="art-line"/>
          <rect x="34" y="117" width="132" height="30" rx="8" className="term-fill"/>
          <path d="M48 132h102" className="term-line"/>
          <path d="M34 169h245" className="art-line"/>
          <path d="M34 186h228" className="art-line"/>
          <path d="M34 203h194" className="art-line"/>
          <path d="M34 236h244" className="art-line"/>
          <path d="M34 253h219" className="art-line"/>
          <rect x="34" y="279" width="262" height="63" rx="10" className="table-box"/>
          <path d="M34 300h262M126 279v63" className="art-thin"/>
          <path d="M54 317h48M147 317h120" className="art-line"/>
          <path d="M36 372c30-16 58-14 88 5" className="signature"/>
          <path d="M204 372h74" className="art-line"/>
          <path d="M207 389h61" className="art-thin"/>
        </g>

        <g transform="translate(60 255) rotate(5)">
          <rect x="0" y="0" width="132" height="166" rx="14" className="mini-paper"/>
          <path d="M22 34h78" className="art-heavy"/>
          <path d="M22 58h88M22 76h72M22 94h84" className="art-line"/>
          <rect x="22" y="116" width="66" height="21" rx="6" className="term-fill"/>
        </g>

        <g transform="translate(429 216) rotate(-6)">
          <rect x="0" y="0" width="128" height="160" rx="14" className="mini-paper"/>
          <path d="M20 32h69" className="art-heavy"/>
          <path d="M20 56h84M20 74h72M20 92h80" className="art-line"/>
          <circle cx="82" cy="126" r="17" className="seal"/>
          <path d="m75 126 5 5 9-11" className="seal-check"/>
        </g>

        <path d="M186 324C235 339 274 327 305 289" className="connector"/>
        <path d="M442 300C405 280 388 250 383 218" className="connector"/>
        <circle cx="306" cy="288" r="5" className="connector-dot"/>
        <circle cx="384" cy="218" r="5" className="connector-dot"/>

        <g transform="translate(475 84)">
          <circle cx="44" cy="44" r="42" className="globe-ring"/>
          <path d="M2 44h84M44 2c18 17 18 67 0 84M44 2c-18 17-18 67 0 84" className="globe-line"/>
        </g>
      </svg>
    </div>
  );
}

function DefinedTermsVisual() {
  const terms = ["Services", "Confidential Information", "Effective Date", "Territory"];
  return (
    <div className="terms-visual" aria-label="Defined terms carried consistently across an agreement, schedule, statement of work, and amendment">
      <div className="terms-doc">
        <div className="terms-doc__top"><span>AGREEMENT</span><span>EN → DE</span></div>
        <div className="terms-doc__title">Defined Terms</div>
        {terms.map((term, i) => (
          <div className="term-row" key={term}>
            <span className="term-dot" />
            <span>{term}</span>
            <span className="term-approved">Approved</span>
          </div>
        ))}
      </div>
      <div className="terms-flow" aria-hidden="true">
        <span /> <span /> <span /> <span />
      </div>
      <div className="terms-targets">
        {["Agreement", "Schedule", "SOW", "Amendment"].map((item) => (
          <div className="terms-target" key={item}>
            <Icon name="file" size={20}/><span>{item}</span><Icon name="check" size={17}/>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentFamilyVisual() {
  const docs = [
    ["SOW", "Scope"],
    ["Schedule", "Requirements"],
    ["Exhibit", "Specifications"],
    ["Amendment", "Change"],
    ["Renewal", "Continuation"],
  ];
  return (
    <div className="family-visual" aria-label="A master agreement connected to statements of work, schedules, exhibits, amendments, and renewals">
      <div className="family-core">
        <Icon name="file" size={28}/>
        <div><strong>Master Agreement</strong><span>Approved language foundation</span></div>
      </div>
      <div className="family-line" aria-hidden="true" />
      <div className="family-grid">
        {docs.map(([title, meta]) => (
          <div className="family-node" key={title}>
            <Icon name="file" size={20}/>
            <strong>{title}</strong>
            <span>{meta}</span>
          </div>
        ))}
      </div>
      <div className="family-asset">
        <Icon name="memory" size={21}/>
        <span>Shared terminology + approved precedent language</span>
      </div>
    </div>
  );
}

function DocumentIntegrityVisual() {
  return (
    <div className="integrity-visual" aria-label="Contract document structure showing preserved clause numbering, cross references, tables, schedules, and signatures">
      <div className="integrity-paper">
        <div className="integrity-paper__header"><span>MASTER SERVICE AGREEMENT</span><span>DE</span></div>
        <div className="integrity-section"><b>1.</b><span><strong>Definitions</strong><i /></span></div>
        <div className="integrity-section"><b>2.</b><span><strong>Services</strong><i/><i/></span></div>
        <div className="integrity-ref">See Schedule A →</div>
        <div className="integrity-table"><span/><span/><span/><span/></div>
        <div className="integrity-section"><b>8.</b><span><strong>Confidentiality</strong><i/><i/></span></div>
        <div className="integrity-sign"><span>Authorized Signature</span><span /></div>
      </div>
      <div className="integrity-tags">
        {[
          "Clause numbering",
          "Cross-references",
          "Defined terms",
          "Tables",
          "Schedules & exhibits",
          "Signature blocks",
        ].map((label) => <div key={label}><Icon name="check" size={17}/>{label}</div>)}
      </div>
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{`
        :root{
          --magenta:#C11D63;
          --magenta-dark:#A71954;
          --burgundy:#7A1542;
          --blush:#FDF2F7;
          --pink-light:#F2A7C6;
          --ink:#171820;
          --ink-2:#292B33;
          --muted:#5F626B;
          --line:#E5E6EA;
          --line-2:#D8DAE0;
          --surface:#F7F8FA;
          --surface-2:#F2F3F6;
          --dark:#18191E;
          --dark-2:#24262D;
          --white:#FFFFFF;
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        .stepes-page{
          width:100%; overflow:hidden; color:var(--ink); background:#fff;
          font-family:"Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size:16px; line-height:1.65; font-weight:400;
        }
        .stepes-page a{color:inherit}
        .shell{max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section--dense{padding:80px 0}
        .section--soft{background:var(--surface)}
        .section--blush{background:var(--blush)}
        .section--dark{background:var(--dark);color:#fff}
        .eyebrow{font-size:11px!important;line-height:1.3!important;font-weight:600!important;letter-spacing:.15em;text-transform:uppercase;color:var(--magenta)!important;margin:0 0 16px!important;opacity:1!important}
        .eyebrow--dark{color:var(--pink-light)!important}
        h1,h2,h3{font-weight:600;margin:0;color:inherit;letter-spacing:-.025em}
        h1{font-size:48px;line-height:1.04;max-width:700px}
        h2{font-size:36px;line-height:1.12}
        h3{font-size:24px;line-height:1.22}
        p{margin:0;color:var(--muted);font-size:16px;line-height:1.7}
        .lead{font-size:18px;line-height:1.62;max-width:700px;color:#444750}
        .section-heading{margin-bottom:48px}
        .section-heading--center{text-align:center;margin-left:auto;margin-right:auto}
        .section-heading--center h2{max-width:850px;margin:0 auto}
        .section-heading--center .section-intro{max-width:800px;margin:18px auto 0}
        .section-heading--left{max-width:780px}
        .section-heading--left .section-intro{margin-top:18px}
        .section-heading--dark p{color:#C9CBD1}
        .section-intro{font-size:18px;line-height:1.62}
        .cta-row{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:30px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:12px 22px;border-radius:999px;text-decoration:none;font-size:16px;font-weight:600;line-height:1.1;transition:.18s ease;border:1px solid transparent}
        .btn-primary,.btn-primary:link,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:var(--magenta);color:#fff!important}
        .btn-primary *{color:#fff!important;stroke:#fff!important}
        .btn-primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
        .btn-secondary{background:#fff;border-color:#D7D9DF;color:var(--ink)!important}
        .btn-secondary:hover{border-color:#B7BAC3;transform:translateY(-1px)}
        .btn:focus-visible,.editorial-link:focus-visible,.faq-question:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:3px}
        .editorial-link{display:inline-flex;align-items:center;gap:7px;margin-top:20px;color:var(--magenta)!important;text-decoration:none;font-size:16px;font-weight:600;min-height:44px}
        .editorial-link svg{transition:transform .18s ease}
        .editorial-link:hover svg{transform:translateX(3px)}
        .editorial-link--dark{color:#F5BCD3!important}
        .link-row{display:flex;gap:0 22px;flex-wrap:wrap}
        .link-row .editorial-link{margin-top:20px}

        /* Hero */
        .hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#FCFCFD 100%)}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(440px,.98fr);gap:62px;align-items:center}
        .hero-copy .lead{margin-top:24px}
        .hero-proof{display:flex;flex-wrap:wrap;gap:10px 22px;margin-top:30px;padding-top:24px;border-top:1px solid var(--line)}
        .hero-proof span{font-size:16px;color:#555862;position:relative;padding-left:13px}
        .hero-proof span:before{content:"";position:absolute;width:4px;height:4px;border-radius:50%;background:var(--magenta);left:0;top:.72em}
        .hero-art{width:100%;max-width:560px;justify-self:end}
        .hero-art svg{display:block;width:100%;height:auto}
        .art-stroke,.mini-paper{stroke:#AEB2BA;stroke-width:1.5}
        .art-heavy{stroke:#565B65;stroke-width:4;stroke-linecap:round}
        .art-line{stroke:#8B9099;stroke-width:2;stroke-linecap:round}
        .art-thin{stroke:#B4B8C0;stroke-width:1.4;stroke-linecap:round}
        .art-faint{fill:none;stroke:#D6D9DF;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:4 7}
        .term-fill{fill:#F9E4ED;stroke:#C11D63;stroke-width:1}
        .term-line{stroke:#A71954;stroke-width:2;stroke-linecap:round}
        .table-box{fill:#FAFAFB;stroke:#B9BDC5;stroke-width:1.2}
        .signature{fill:none;stroke:#555A63;stroke-width:2.1;stroke-linecap:round}
        .seal{fill:#fff;stroke:#A71954;stroke-width:1.4}
        .seal-check{fill:none;stroke:#A71954;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
        .connector{fill:none;stroke:#C11D63;stroke-width:1.6;stroke-linecap:round;stroke-dasharray:4 6}
        .connector-dot{fill:#C11D63}
        .globe-ring,.globe-line{fill:none;stroke:#8B9099;stroke-width:1.4}

        /* Meaning */
        .meaning-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:84px;align-items:start}
        .meaning-copy{padding-top:6px}
        .meaning-copy p+p{margin-top:18px}
        .precision-list{border-top:1px solid var(--line)}
        .precision-row{display:grid;grid-template-columns:175px 1fr;gap:26px;padding:22px 0;border-bottom:1px solid var(--line);align-items:start}
        .precision-row strong{font-size:18px;font-weight:600;line-height:1.35}
        .precision-row p{max-width:650px}
        .precision-terms{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px}
        .precision-terms span{font-size:16px;border:1px solid var(--line-2);border-radius:999px;padding:6px 10px;background:#fff;color:#4E515A}

        /* Contract scope */
        .contract-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .contract-group{padding:30px 28px 32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff;min-height:420px}
        .icon-box{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:#F7F3F5;color:#7E3556;margin-bottom:20px}
        .contract-group h3{font-size:21px;margin-bottom:12px}
        .contract-group>p{font-size:16px;min-height:82px}
        .contract-group--wide{grid-column:1/-1;min-height:0;display:grid;grid-template-columns:42px minmax(230px,.8fr) minmax(0,1.45fr);gap:0 22px;align-items:start}
        .contract-group--wide .icon-box{grid-row:1 / span 2;margin-bottom:0}
        .contract-group--wide h3{grid-column:2;margin-top:6px}
        .contract-group--wide>p{grid-column:2;min-height:0}
        .contract-group--wide .check-list{grid-column:3;grid-row:1 / span 2;margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:24px;align-content:start}
        .check-list{list-style:none;padding:0;margin:18px 0 0}
        .check-list li{display:flex;gap:10px;align-items:flex-start;color:#42454D;font-size:16px;line-height:1.55;margin:10px 0}
        .check-list li:before{content:"";width:5px;height:5px;border-radius:50%;background:#A8ABB3;margin-top:.63em;flex:0 0 auto}
        .scope-support{display:grid;grid-template-columns:.9fr 1.1fr;gap:50px;margin-top:42px;align-items:center;padding:30px 34px;border-radius:24px;background:#F7F8FA;border:1px solid var(--line)}
        .scope-support h3{font-size:20px;margin-bottom:6px}
        .scope-tags{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .scope-tags span{font-size:16px;padding:8px 12px;border-radius:999px;background:#fff;border:1px solid var(--line);color:#4E515A}

        /* Defined terms */
        .split-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
        .split-copy p+p{margin-top:16px}
        .split-points{margin-top:28px;border-top:1px solid var(--line)}
        .split-point{padding:19px 0;border-bottom:1px solid var(--line)}
        .split-point strong{display:block;font-size:17px;margin-bottom:4px;font-weight:600}
        .terms-visual{background:#F7F8FA;border:1px solid var(--line);border-radius:28px;padding:32px;display:grid;grid-template-columns:1.08fr 44px .92fr;align-items:center;box-shadow:0 18px 40px rgba(27,29,34,.05)}
        .terms-doc{background:#fff;border:1px solid #D9DBE1;border-radius:18px;padding:20px}
        .terms-doc__top{display:flex;justify-content:space-between;color:#8A8D96;font-size:14px;font-weight:600;letter-spacing:.06em}
        .terms-doc__title{font-size:19px;font-weight:600;margin:15px 0 12px}
        .term-row{display:grid;grid-template-columns:7px 1fr auto;gap:9px;align-items:center;padding:10px 0;border-top:1px solid #ECEEF1;font-size:16px;color:#3F424A}
        .term-dot{width:6px;height:6px;border-radius:50%;background:var(--magenta)}
        .term-approved{font-size:14px;color:#6C7078;background:#F2F3F5;border-radius:999px;padding:3px 7px}
        .terms-flow{display:flex;flex-direction:column;align-items:center;gap:22px}
        .terms-flow span{width:24px;height:1px;background:#C11D63;position:relative}
        .terms-flow span:after{content:"";position:absolute;right:-1px;top:-3px;border-left:5px solid #C11D63;border-top:3px solid transparent;border-bottom:3px solid transparent}
        .terms-targets{display:flex;flex-direction:column;gap:10px}
        .terms-target{display:grid;grid-template-columns:24px 1fr 19px;align-items:center;gap:7px;border:1px solid #DDDDE3;background:#fff;border-radius:12px;padding:11px 12px;font-size:16px;color:#454851}
        .terms-target svg:last-child{color:#75806F}

        /* Family dark */
        .family-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:80px;align-items:center}
        .family-layout p{color:#C8CAD0}
        .family-benefits{margin-top:28px;border-top:1px solid #343640}
        .family-benefit{padding:17px 0;border-bottom:1px solid #343640;display:grid;grid-template-columns:20px 1fr;gap:12px;align-items:start}
        .family-benefit svg{color:#F2A7C6;margin-top:3px}
        .family-benefit strong{display:block;font-size:16px;color:#fff;margin-bottom:2px}
        .family-benefit span{font-size:16px;color:#BFC2C9}
        .family-visual{border:1px solid #3D4049;border-radius:28px;padding:32px;background:#202229}
        .family-core{max-width:360px;margin:0 auto;border:1px solid #535660;border-radius:16px;padding:18px;display:flex;gap:13px;align-items:center;background:#292B33}
        .family-core svg{color:#F2A7C6}
        .family-core strong{display:block;font-size:17px}
        .family-core span{display:block;color:#AEB1B8;font-size:16px;margin-top:2px}
        .family-line{width:1px;height:32px;background:#5B5E67;margin:0 auto;position:relative}
        .family-line:after{content:"";position:absolute;left:-200px;right:-200px;bottom:0;height:1px;background:#5B5E67}
        .family-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;padding-top:18px}
        .family-node{min-height:108px;border:1px solid #444751;border-radius:13px;padding:13px 10px;background:#262830;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center}
        .family-node svg{color:#C4C7CD;margin-bottom:7px}
        .family-node strong{font-size:16px;line-height:1.25}
        .family-node span{font-size:16px;color:#AEB1B8;margin-top:4px}
        .family-asset{margin:18px auto 0;max-width:430px;border:1px solid rgba(242,167,198,.3);background:rgba(193,29,99,.1);border-radius:999px;padding:10px 15px;display:flex;align-items:center;justify-content:center;gap:9px;color:#F0D7E1;font-size:16px;text-align:center}
        .family-asset svg{color:#F2A7C6;flex:0 0 auto}

        /* Document integrity */
        .integrity-visual{display:grid;grid-template-columns:1.25fr .75fr;gap:20px;background:#F7F8FA;border-radius:28px;border:1px solid var(--line);padding:28px}
        .integrity-paper{background:#fff;border:1px solid #D7D9DF;border-radius:17px;padding:22px;box-shadow:0 10px 24px rgba(27,29,34,.04)}
        .integrity-paper__header{display:flex;justify-content:space-between;font-size:14px;color:#7C7F88;font-weight:600;border-bottom:1px solid #E7E8EC;padding-bottom:13px;margin-bottom:12px}
        .integrity-section{display:grid;grid-template-columns:20px 1fr;gap:8px;padding:9px 0}
        .integrity-section b{font-size:16px;color:#6E717A}
        .integrity-section strong{font-size:16px;display:block;margin-bottom:7px}
        .integrity-section i{display:block;width:93%;height:4px;background:#E5E7EB;border-radius:4px;margin:5px 0}
        .integrity-section i:last-child{width:72%}
        .integrity-ref{font-size:16px;color:#A71954;background:#FDF2F7;border-left:2px solid #C11D63;padding:7px 9px;margin:2px 0 8px 28px}
        .integrity-table{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#D9DBE0;border:1px solid #D9DBE0;margin:6px 0 8px 28px}
        .integrity-table span{height:25px;background:#FAFAFB}
        .integrity-sign{display:flex;justify-content:space-between;align-items:end;margin:14px 0 0 28px;padding-top:14px;border-top:1px solid #E6E7EA;font-size:16px;color:#858891}
        .integrity-sign span:last-child{display:block;width:80px;border-bottom:1px solid #7F838C;height:12px}
        .integrity-tags{display:flex;flex-direction:column;justify-content:center;gap:9px}
        .integrity-tags div{display:flex;gap:8px;align-items:center;font-size:16px;color:#52555E;background:#fff;border:1px solid #E0E1E5;border-radius:10px;padding:9px 10px}
        .integrity-tags svg{color:#667163;flex:0 0 auto}

        /* Use-case workflow */
        .use-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .use-col{padding:28px 24px 30px;border-right:1px solid var(--line)}
        .use-col:first-child{padding-left:0}
        .use-col:last-child{border-right:0;padding-right:0}
        .use-col__marker{width:34px;height:4px;border-radius:4px;background:#D8DAE0;margin-bottom:22px}
        .use-col:nth-child(3) .use-col__marker{background:#A71954}
        .use-col h3{font-size:20px;margin-bottom:12px}
        .use-col p{font-size:16px}
        .use-col .use-note{margin-top:16px;color:#373A42}
        .legal-note{margin-top:28px;padding:18px 20px;border-left:3px solid #B7BAC1;background:#F7F8FA;font-size:16px;color:#555862;max-width:1040px}

        /* AI */
        .ai-layout{display:grid;grid-template-columns:.95fr 1.05fr;gap:72px;align-items:center}
        .ai-layout p{color:#C6C8CE}
        .ai-principle{margin-top:26px;padding:20px 22px;border-left:3px solid #F2A7C6;background:#22242B;font-size:18px;line-height:1.55;color:#fff}
        .ai-stack{border:1px solid #3A3D46;border-radius:28px;overflow:hidden;background:#202229}
        .ai-row{display:grid;grid-template-columns:54px 1fr;gap:15px;padding:22px 24px;border-bottom:1px solid #383B44;align-items:start}
        .ai-row:last-child{border-bottom:0}
        .ai-row__icon{width:42px;height:42px;border-radius:12px;background:#2D3038;color:#E1E3E7;display:flex;align-items:center;justify-content:center}
        .ai-row strong{display:block;font-size:17px;margin-bottom:4px}
        .ai-row span{font-size:16px;color:#BFC2C9;line-height:1.55}

        /* Security */
        .security-layout{display:grid;grid-template-columns:.75fr 1.25fr;gap:84px;align-items:start}
        .security-list{border-top:1px solid var(--line)}
        .security-row{display:grid;grid-template-columns:42px 1fr;gap:18px;padding:23px 0;border-bottom:1px solid var(--line);align-items:start}
        .security-row .icon-box{width:40px;height:40px;margin:0}
        .security-row h3{font-size:18px;margin-bottom:5px}

        /* Languages */
        .language-panel{border-radius:28px;background:#F7F8FA;border:1px solid var(--line);padding:34px}
        .language-row{display:flex;gap:9px;flex-wrap:wrap;justify-content:center}
        .language-row span{background:#fff;border:1px solid var(--line);border-radius:999px;padding:8px 12px;font-size:16px;color:#4D5058}
        .global-use-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:34px;border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .global-use{padding:24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .global-use h3{font-size:18px;margin-bottom:7px}
        .global-use p{font-size:16px}

        /* Programs */
        .program-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:start}
        .program-list{border-top:1px solid var(--line)}
        .program-item{display:grid;grid-template-columns:34px 1fr;gap:14px;padding:19px 0;border-bottom:1px solid var(--line);align-items:start}
        .program-item svg{color:#696D75;margin-top:2px}
        .program-item strong{display:block;font-size:17px;margin-bottom:4px}
        .program-summary{background:var(--blush);border-radius:28px;padding:34px;border:1px solid #F1DAE5}
        .program-summary h3{font-size:22px;margin-bottom:14px}
        .program-metrics{margin-top:23px;border-top:1px solid #E9CCD9}
        .program-metric{padding:15px 0;border-bottom:1px solid #E9CCD9;display:flex;justify-content:space-between;gap:16px;align-items:center}
        .program-metric span:first-child{font-size:16px;color:#44474F}
        .program-metric span:last-child{font-size:16px;color:#8D4164;font-weight:600}

        /* Quality */
        .quality-track{display:grid;grid-template-columns:repeat(6,1fr);position:relative;margin-top:10px}
        .quality-track:before{content:"";position:absolute;top:18px;left:6%;right:6%;height:1px;background:#D6D8DE}
        .quality-step{position:relative;padding-right:22px}
        .quality-step:last-child{padding-right:0}
        .quality-num{width:36px;height:36px;border-radius:50%;background:#fff;border:1px solid #C9CCD3;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;position:relative;z-index:1;margin-bottom:20px}
        .quality-step h3{font-size:16px;line-height:1.3;margin-bottom:8px}
        .quality-step p{font-size:16px;line-height:1.55;color:#5D6068}
        .quality-note{max-width:930px;margin:34px auto 0;padding:18px 20px;border-left:3px solid var(--magenta);background:#fff;font-size:16px;line-height:1.65;color:#555862}

        /* Online workflow */
        .online-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:center}
        .online-flow{border-radius:28px;border:1px solid var(--line);background:#fff;padding:30px}
        .online-flow__head{display:flex;justify-content:space-between;align-items:center;padding-bottom:17px;border-bottom:1px solid var(--line)}
        .online-flow__head strong{font-size:17px}
        .online-status{font-size:14px;padding:5px 9px;border-radius:999px;background:#EEF2EE;color:#596856}
        .online-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:24px}
        .online-step{position:relative;text-align:center;padding:0 8px}
        .online-step:not(:last-child):after{content:"";position:absolute;top:18px;right:-13px;width:26px;height:1px;background:#D9DBE0}
        .online-step__icon{width:38px;height:38px;border:1px solid #ECD2DE;background:#FFF9FB;border-radius:11px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;color:var(--magenta)}
        .online-step strong{font-size:16px;display:block;line-height:1.3}
        .online-step span{font-size:16px;color:#7D8088;display:block;margin-top:4px}
        .online-assets{margin-top:24px;padding-top:20px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .online-asset{border:1px solid #E3E4E8;border-radius:11px;padding:10px 11px;font-size:16px;color:#6A6D75;display:flex;gap:8px;align-items:center}

        /* Legal lifecycle */
        .lifecycle-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:74px;align-items:center}
        .lifecycle-layout>div>p{color:#C6C8CE}
        .lifecycle-links{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #3A3D45;border-left:1px solid #3A3D45}
        .lifecycle-link{min-height:74px;padding:18px;border-right:1px solid #3A3D45;border-bottom:1px solid #3A3D45;display:flex;align-items:center;gap:11px;color:#E4E5E8;font-size:16px}
        .lifecycle-link svg{color:#B9BDC4;flex:0 0 auto}

        /* FAQ */
        .faq-wrap{max-width:980px;margin:0 auto;border-top:1px solid var(--line)}
        .faq-item{border-bottom:1px solid var(--line)}
        .faq-question{width:100%;border:0;background:transparent;padding:22px 0;display:grid;grid-template-columns:1fr 34px;gap:20px;align-items:center;text-align:left;font:inherit;color:var(--ink);cursor:pointer}
        .faq-question span:first-child{font-size:18px;font-weight:600;line-height:1.4}
        .faq-plus{width:32px;height:32px;border-radius:50%;border:1px solid #D7D9DE;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:400;color:#666A73;transition:.18s ease}
        .faq-item.open .faq-plus{transform:rotate(45deg);border-color:#C11D63;color:#A71954}
        .faq-answer{max-width:840px;padding:0 64px 24px 0}
        .faq-answer p{font-size:16px;line-height:1.7}
        .faq-answer a{color:var(--magenta);font-weight:600;text-decoration:none}

        /* Final CTA */
        .final-wrap{padding:80px 0 88px;background:#fff}
        .final-cta{border-radius:30px;background:var(--burgundy);color:#fff;padding:60px 64px;display:grid;grid-template-columns:1fr auto;gap:50px;align-items:center}
        .final-cta h2{max-width:700px}
        .final-cta p{color:#F2D8E3;max-width:720px;margin-top:16px;font-size:18px}
        .final-cta .btn-primary,.final-cta .btn-primary:link,.final-cta .btn-primary:visited,.final-cta .btn-primary:hover,.final-cta .btn-primary:focus{background:#fff;color:#681038!important;border-color:#fff}
        .final-cta .btn-primary *{color:#681038!important;stroke:#681038!important}
        .final-cta .btn-primary:hover{background:#FDF2F7}
        .final-cta .btn-secondary{background:transparent;border-color:rgba(255,255,255,.45);color:#fff!important}
        .final-cta .btn-secondary:hover{border-color:#fff}
        .final-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}

        @media(max-width:1100px){
          .shell{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:1fr .9fr;gap:38px}
          .contract-grid{grid-template-columns:repeat(2,1fr)}
          .family-grid{grid-template-columns:repeat(3,1fr)}
          .family-line:after{left:-130px;right:-130px}
          .use-grid{grid-template-columns:1fr 1fr}
          .use-col{border-bottom:1px solid var(--line)}
          .use-col:nth-child(2){border-right:0;padding-right:0}
          .use-col:nth-child(3){padding-left:0;border-bottom:0}
          .use-col:nth-child(4){border-bottom:0}
          .quality-track{grid-template-columns:repeat(3,1fr);gap:30px 0}
          .quality-track:before{display:none}
          .global-use-grid{grid-template-columns:repeat(2,1fr)}
        }

        @media(max-width:820px){
          .shell{padding-left:24px;padding-right:24px}
          .section{padding:80px 0}
          .section--dense{padding:72px 0}
          h1{font-size:42px}
          h2{font-size:32px}
          h3{font-size:22px}
          .hero{padding:88px 0 82px}
          .hero-grid,.meaning-grid,.split-grid,.family-layout,.security-layout,.program-grid,.online-layout,.lifecycle-layout,.ai-layout{grid-template-columns:1fr;gap:46px}
          .hero-copy{text-align:center}
          .hero-copy h1,.hero-copy .lead{margin-left:auto;margin-right:auto}
          .hero-copy .eyebrow{text-align:center}
          .cta-row{justify-content:center}
          .hero-proof{justify-content:center}
          .hero-art{justify-self:center;max-width:520px}
          .meaning-grid .section-heading,.security-layout .section-heading,.online-layout .section-heading,.lifecycle-layout .section-heading{max-width:760px;text-align:center;margin-left:auto;margin-right:auto}
          .meaning-grid .section-heading .section-intro,.security-layout .section-heading .section-intro,.online-layout .section-heading .section-intro,.lifecycle-layout .section-heading .section-intro{margin-left:auto;margin-right:auto}
          .precision-row{grid-template-columns:150px 1fr}
          .contract-grid{grid-template-columns:1fr 1fr}
          .contract-group--wide{grid-template-columns:42px 1fr;gap:0 18px}
          .contract-group--wide .icon-box{grid-row:1 / span 2}
          .contract-group--wide h3,.contract-group--wide>p,.contract-group--wide .check-list{grid-column:2}
          .contract-group--wide .check-list{grid-row:auto;grid-template-columns:1fr 1fr;margin-top:14px}
          .scope-support{grid-template-columns:1fr;gap:20px}
          .scope-tags{justify-content:flex-start}
          .terms-visual{max-width:670px;margin:0 auto}
          .family-layout .section-heading{text-align:center;margin-left:auto;margin-right:auto}
          .family-layout .section-heading .section-intro{margin-left:auto;margin-right:auto}
          .family-visual{max-width:720px;margin:0 auto;width:100%}
          .integrity-visual{max-width:680px;margin:0 auto}
          .program-summary{max-width:720px}
          .quality-track{grid-template-columns:1fr 1fr}
          .online-flow{max-width:720px;margin:0 auto;width:100%}
          .lifecycle-links{max-width:720px;margin:0 auto;width:100%}
          .final-cta{grid-template-columns:1fr;padding:50px;text-align:center}
          .final-cta h2,.final-cta p{margin-left:auto;margin-right:auto}
          .final-actions{justify-content:center}
        }

        @media(max-width:600px){
          .shell{padding-left:20px;padding-right:20px}
          .section{padding:68px 0}
          .section--dense{padding:64px 0}
          h1{font-size:38px;line-height:1.08}
          h2{font-size:30px;line-height:1.16}
          h3{font-size:20px}
          .lead,.section-intro{font-size:18px}
          .hero{padding:72px 0 68px}
          .hero-grid{gap:38px}
          .cta-row{display:grid;grid-template-columns:1fr;width:100%;max-width:460px;margin:28px auto 0}
          .btn{width:100%;min-height:50px}
          .hero-proof{display:grid;grid-template-columns:1fr 1fr;text-align:left;gap:10px 14px;max-width:440px;margin:28px auto 0}
          .hero-art{width:100%;margin-left:0}
          .section-heading{margin-bottom:38px}
          .section-heading--center,.meaning-grid .section-heading,.security-layout .section-heading,.online-layout .section-heading,.lifecycle-layout .section-heading,.family-layout .section-heading{text-align:center}
          .section-heading--center .section-intro,.meaning-grid .section-heading .section-intro,.security-layout .section-heading .section-intro,.online-layout .section-heading .section-intro,.lifecycle-layout .section-heading .section-intro,.family-layout .section-heading .section-intro{margin-top:16px}
          .meaning-grid{gap:32px}
          .meaning-copy{text-align:left}
          .precision-row{grid-template-columns:1fr;gap:7px;padding:19px 0}
          .precision-terms span{font-size:16px}
          .contract-grid{grid-template-columns:1fr;border-left:0}
          .contract-group{border-left:1px solid var(--line);min-height:0;padding:26px 24px}
          .contract-group>p{min-height:0}
          .contract-group--wide{display:block}
          .contract-group--wide .icon-box{margin-bottom:20px}
          .contract-group--wide .check-list{display:block;margin-top:18px}
          .scope-support{padding:26px 24px}
          .scope-tags{gap:7px}
          .split-grid{gap:36px}
          .split-copy .section-heading{text-align:center}
          .split-copy .section-heading .section-intro{margin-left:auto;margin-right:auto}
          .split-copy>p,.split-points{text-align:left}
          .link-row .editorial-link{margin-top:14px}
          .terms-visual{padding:20px;grid-template-columns:1fr;gap:14px}
          .terms-flow{display:none}
          .terms-targets{display:grid;grid-template-columns:1fr 1fr}
          .family-visual{padding:22px}
          .family-line{display:none}
          .family-grid{grid-template-columns:1fr 1fr;padding-top:14px}
          .family-node{min-height:96px}
          .family-node:last-child{grid-column:1/-1;max-width:160px;width:100%;justify-self:center}
          .family-asset{border-radius:18px}
          .integrity-visual{grid-template-columns:1fr;padding:20px}
          .integrity-tags{display:grid;grid-template-columns:1fr 1fr}
          .use-grid{grid-template-columns:1fr;border-bottom:0}
          .use-col,.use-col:first-child,.use-col:nth-child(2),.use-col:nth-child(3),.use-col:nth-child(4){padding:24px 0;border-right:0;border-bottom:1px solid var(--line)}
          .use-col:last-child{border-bottom:0}
          .ai-stack{border-radius:22px}
          .ai-row{padding:20px;grid-template-columns:46px 1fr}
          .security-row{grid-template-columns:40px 1fr;gap:14px}
          .language-panel{padding:26px 20px}
          .language-row{justify-content:flex-start}
          .global-use-grid{grid-template-columns:1fr;border-left:0}
          .global-use{border-left:1px solid var(--line)}
          .program-summary{padding:26px 22px}
          .program-metric{display:block}
          .program-metric span{display:block}
          .program-metric span:last-child{margin-top:3px}
          .quality-track{grid-template-columns:1fr;gap:0}
          .quality-step{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:0 0 24px}
          .quality-step:not(:last-child):before{content:"";position:absolute;left:17px;top:36px;bottom:0;width:1px;background:#D8DAE0}
          .quality-num{grid-row:1 / span 2;margin:0}
          .quality-step h3{padding-top:6px;font-size:17px}
          .quality-step p{grid-column:2}
          .online-flow{padding:22px 18px}
          .online-steps{grid-template-columns:1fr 1fr;gap:22px 0}
          .online-step:nth-child(2):after{display:none}
          .online-step:not(:last-child):after{right:-13px}
          .online-assets{grid-template-columns:1fr}
          .lifecycle-links{grid-template-columns:1fr;border-left:0}
          .lifecycle-link{border-left:1px solid #3A3D45}
          .faq-question{grid-template-columns:1fr 32px;padding:20px 0}
          .faq-question span:first-child{font-size:17px}
          .faq-answer{padding:0 0 22px}
          .final-wrap{padding:64px 0 72px}
          .final-cta{padding:42px 24px;border-radius:28px}
          .final-actions{display:grid;grid-template-columns:1fr;width:100%}
        }

        @media(max-width:480px){
          .terms-targets{grid-template-columns:1fr}
        }

        @media(max-width:360px){
          .hero-proof{grid-template-columns:1fr}
          .integrity-tags,.family-grid{grid-template-columns:1fr}
          .family-node:last-child{max-width:none}
          .online-steps{grid-template-columns:1fr}
          .online-step:after{display:none!important}
        }
      `}</style>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Contract Translation Services</h1>
            <p className="lead">Translate contracts and commercial agreements with the linguistic precision, terminology control, and document integrity global business requires. Stepes provides professional contract translation services in 100+ languages, combining experienced legal linguists with translation memory, terminology management, AI-enabled workflows, and rigorous quality assurance.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Get a Quote</span><Icon name="arrow" size={18}/></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to a Legal Translation Expert</a>
            </div>
            <div className="hero-proof" aria-label="Contract translation service highlights">
              <span>100+ Languages</span>
              <span>Professional Legal Linguists</span>
              <span>AI + Human Workflows</span>
              <span>Secure Enterprise Translation</span>
            </div>
          </div>
          <ContractHeroArt />
        </div>
      </section>

      <section className="section" id="contract-meaning">
        <div className="shell meaning-grid">
          <div>
            <SectionHeading eyebrow="CONTRACTUAL PRECISION" title="When Every Clause Carries Meaning" intro="Contracts do more than communicate information. They define rights, obligations, responsibilities, limitations, exceptions, timelines, and commercial relationships." align="left" />
            <ArrowLink href="https://www.stepes.com/legal-translation-services/">Explore Legal Translation Services</ArrowLink>
          </div>
          <div className="meaning-copy">
            <p>In this context, a small change in wording can create a significant change in meaning. Contract translation therefore requires more than fluency in two languages. Translators must understand how contractual language works, how defined terms relate across clauses, how qualifications and exceptions modify obligations, and how the agreement will ultimately be reviewed or used.</p>
            <div className="precision-terms" aria-label="Examples of contract-sensitive language">
              {['shall','may','must','unless','except','subject to','provided that','notwithstanding','reasonable efforts','material'].map(t=><span key={t}>{t}</span>)}
            </div>
            <div className="precision-list">
              <div className="precision-row">
                <strong>Legal-linguistic context</strong>
                <p>Preserve the source meaning without adding interpretations that are not present in the original.</p>
              </div>
              <div className="precision-row">
                <strong>Clause relationships</strong>
                <p>Keep definitions, qualifications, cross-references, schedules, and related provisions connected across the document.</p>
              </div>
              <div className="precision-row">
                <strong>Controlled language</strong>
                <p>Combine professional legal expertise with terminology resources, translation memory, structured review, and document-level QA.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="agreement-types">
        <div className="shell">
          <SectionHeading title="Contracts and Agreements We Translate" intro="Stepes translates contracts, commercial agreements, and supporting documents for corporate legal, procurement, finance, HR, commercial, and global operations teams." />
          <div className="contract-grid">
            {contractGroups.map(group => (
              <article className={`contract-group ${group.wide ? "contract-group--wide" : ""}`} key={group.title}>
                <div className="icon-box"><Icon name={group.icon}/></div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="check-list">{group.items.map(item=><li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="scope-support">
            <div>
              <h3>Schedules, Exhibits & Contract Updates</h3>
              <p>A contract rarely ends with the signature page. Stepes translates the documents that extend, modify, and support the underlying agreement.</p>
            </div>
            <div className="scope-tags">
              {['SOWs','SLAs','Schedules','Exhibits','Annexes','Appendices','Addenda','Amendments','Side Letters','Renewals'].map(item=><span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="defined-terms">
        <div className="shell split-grid">
          <div className="split-copy">
            <SectionHeading eyebrow="TERMINOLOGY GOVERNANCE" title="Defined Terms Must Stay Defined" intro="Contracts create their own vocabulary. Once an agreement defines a term, that meaning may govern dozens of clauses throughout the document." align="left" />
            <p>Translating the same defined term differently from one section to another can introduce uncertainty even when each individual translation sounds linguistically natural. Stepes helps control defined terms and recurring contractual language across the entire agreement.</p>
            <div className="split-points">
              <div className="split-point"><strong>Legal terminology control</strong><p>Establish approved translations for defined terms, party names, legal concepts, product names, departments, and recurring language.</p></div>
              <div className="split-point"><strong>Translation memory</strong><p>Reuse previously reviewed contractual language when identical or similar content appears again, preserving continuity while reducing unnecessary retranslation.</p></div>
              <div className="split-point"><strong>Approved precedent language</strong><p>Use existing bilingual agreements, templates, prior contract translations, and counsel-approved wording as controlled reference material.</p></div>
              <div className="split-point"><strong>Consistency checks and reviewer feedback</strong><p>Combine automated and human QA with approved reviewer changes so future translations better reflect established preferences.</p></div>
            </div>
            <div className="link-row">
              <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
              <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
            </div>
          </div>
          <DefinedTermsVisual />
        </div>
      </section>

      <section className="section section--dark" id="document-family">
        <div className="shell family-layout">
          <div>
            <SectionHeading eyebrow="DOCUMENT CONTINUITY" title="One Agreement Often Becomes a Document Family" intro="A master service agreement may establish the relationship. SOWs define services. Schedules add requirements. Exhibits provide specifications. Amendments change provisions. Renewals extend the relationship." align="left" dark />
            <p>These documents need to work together across languages just as they do in the source language. Stepes helps preserve multilingual continuity by applying existing terminology, approved translations, precedent clauses, translation memory, project instructions, and reviewer feedback to subsequent work.</p>
            <div className="family-benefits">
              <div className="family-benefit"><Icon name="check"/><div><strong>Keep amendments aligned</strong><span>Carry terminology from the original translation into revised provisions.</span></div></div>
              <div className="family-benefit"><Icon name="check"/><div><strong>Reuse approved contract language</strong><span>Reference previously translated and reviewed clauses instead of recreating them from scratch.</span></div></div>
              <div className="family-benefit"><Icon name="check"/><div><strong>Maintain consistency across versions</strong><span>Keep products, services, responsibilities, and defined terms aligned over time.</span></div></div>
            </div>
          </div>
          <DocumentFamilyVisual />
        </div>
      </section>

      <section className="section" id="document-integrity">
        <div className="shell split-grid">
          <DocumentIntegrityVisual />
          <div className="split-copy">
            <SectionHeading eyebrow="DOCUMENT INTEGRITY" title="Preserve the Contract, Not Just the Translation" intro="A legally accurate sentence is not enough if the final document is difficult to review or its structure no longer matches the source." align="left" />
            <p>Contracts depend on relationships between clauses, definitions, schedules, tables, references, and supporting documents. Stepes combines linguistic translation with document-level quality control to help preserve those relationships in the translated file.</p>
            <div className="split-points">
              <div className="split-point"><strong>Review-ready structure</strong><p>Maintain clause and section numbering, cross-references, headings, defined-term capitalization, footnotes, schedules, exhibits, and signature blocks where applicable.</p></div>
              <div className="split-point"><strong>Structured content</strong><p>Translate pricing schedules, responsibility matrices, service levels, financial information, specifications, and other tabular contract content.</p></div>
              <div className="split-point"><strong>Practical final files</strong><p>Support common contract formats including Microsoft Word, PDF, Excel schedules, and other business document formats, with document production incorporated where required.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="workflow-selection">
        <div className="shell">
          <SectionHeading eyebrow="RISK-BASED WORKFLOWS" title="Match the Translation Workflow to How the Contract Will Be Used" intro="An agreement being reviewed internally has a different risk profile from a final agreement being negotiated across jurisdictions or submitted to an authority. Stepes helps clients select the appropriate combination of technology, professional translation, human review, and quality controls." />
          <div className="use-grid">
            {workflowUseCases.map((item, i)=>(
              <article className="use-col" key={item.title}>
                <div className="use-col__marker" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <p className="use-note">{item.note}</p>
                {i===3 ? <ArrowLink href="https://www.stepes.com/certified-translation-services/">Certified Translation Services</ArrowLink> : null}
              </article>
            ))}
          </div>
          <div className="legal-note"><strong>Important:</strong> Stepes provides professional language services. Translation does not constitute legal advice, and questions regarding interpretation, enforceability, governing law, or legal effect should be determined by qualified legal counsel.</div>
        </div>
      </section>

      <section className="section section--dark" id="ai-human">
        <div className="shell ai-layout">
          <div>
            <SectionHeading eyebrow="CONTROLLED AI WORKFLOWS" title="AI + Human Expertise for Contract Translation" intro="Contracts often contain recurring clauses, established templates, defined terminology, and language that has already been reviewed and approved—creating strong opportunities for intelligent language reuse." align="left" dark />
            <p>The opportunity is not to replace professional judgment with AI. It is to use technology intelligently around the work that requires judgment. Stepes combines AI, translation memory, terminology resources, professional legal linguists, and quality assurance within controlled contract translation workflows.</p>
            <div className="ai-principle">AI can accelerate suitable content. Human legal review remains central when contractual meaning, sensitivity, complexity, or consequence requires it.</div>
            <ArrowLink href="https://www.stepes.com/ai-enabled-legal-translation-services/" dark>AI-Enabled Legal Translation Services</ArrowLink>
          </div>
          <div className="ai-stack">
            <div className="ai-row"><div className="ai-row__icon"><Icon name="memory"/></div><div><strong>Reuse What Has Already Been Approved</strong><span>Translation memory identifies identical or similar contractual language from previous projects so validated translations can be reused or reviewed in context.</span></div></div>
            <div className="ai-row"><div className="ai-row__icon"><Icon name="file"/></div><div><strong>Apply Controlled Terminology</strong><span>Approved terms help guide translators and AI systems toward client-preferred contractual language rather than uncontrolled alternatives.</span></div></div>
            <div className="ai-row"><div className="ai-row__icon"><Icon name="ai"/></div><div><strong>Accelerate Suitable Content With AI</strong><span>For appropriate contract content, DomainAI and other translation technology can produce draft translations efficiently within a managed workflow.</span></div></div>
            <div className="ai-row"><div className="ai-row__icon"><Icon name="people"/></div><div><strong>Keep Human Legal Review in the Process</strong><span>Professional legal linguists review meaning, terminology, context, and contractual language where human judgment is required.</span></div></div>
            <div className="ai-row"><div className="ai-row__icon"><Icon name="check"/></div><div><strong>Validate Before Delivery</strong><span>Automated and human QA help identify omissions, inconsistencies, changed numbers, untranslated content, formatting issues, and other potential problems.</span></div></div>
          </div>
        </div>
      </section>

      <section className="section" id="security">
        <div className="shell security-layout">
          <div>
            <SectionHeading title="Secure Translation for Confidential Agreements" intro="Contracts frequently contain commercial pricing, acquisition plans, supplier terms, employee information, product roadmaps, licensing arrangements, financial data, intellectual property, trade secrets, and personal information." align="left" />
            <p>Translation security therefore involves more than protecting a file during upload. It requires appropriate controls throughout the multilingual workflow.</p>
            <ArrowLink href="https://www.stepes.com/security/">Translation Security and Confidentiality</ArrowLink>
          </div>
          <div className="security-list">
            <div className="security-row"><div className="icon-box"><Icon name="people"/></div><div><h3>Controlled Project Access</h3><p>Files, instructions, comments, and translations can be restricted to authorized project participants based on workflow requirements.</p></div></div>
            <div className="security-row"><div className="icon-box"><Icon name="shield"/></div><div><h3>NDA-Covered Language Professionals</h3><p>Professional translators and reviewers work under confidentiality obligations and project-specific access controls.</p></div></div>
            <div className="security-row"><div className="icon-box"><Icon name="network"/></div><div><h3>Secure Workflow Management</h3><p>Translation, review, QA, and delivery are managed through controlled cloud-based workflows rather than unmanaged exchanges between disconnected participants.</p></div></div>
            <div className="security-row"><div className="icon-box"><Icon name="memory"/></div><div><h3>Protected Language Assets</h3><p>Contract glossaries, translation memories, reviewer comments, and approved multilingual language are treated as enterprise language assets requiring appropriate controls.</p></div></div>
            <div className="security-row"><div className="icon-box"><Icon name="lock"/></div><div><h3>Secure File Handling</h3><p>Source contracts, translated files, versions, reference documents, and deliverables are handled within managed project processes from intake through delivery.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="languages">
        <div className="shell">
          <SectionHeading title="Contract Translation Across 100+ Languages" intro="Business agreements connect companies across countries, legal systems, supply chains, workforces, and markets. Stepes supports multilingual contract translation across major commercial languages and global regions." />
          <div className="language-panel">
            <div className="language-row">
              {['Arabic','Chinese','Dutch','French','German','Italian','Japanese','Korean','Polish','Portuguese','Spanish','Swedish','Turkish','Vietnamese'].map(lang=><span key={lang}>{lang}</span>)}
            </div>
            <div className="global-use-grid">
              <div className="global-use"><h3>Cross-Border Sales</h3><p>Customer agreements, distribution contracts, terms and conditions, and related commercial documents.</p></div>
              <div className="global-use"><h3>Global Procurement</h3><p>Supplier agreements, vendor contracts, procurement documents, and manufacturing relationships.</p></div>
              <div className="global-use"><h3>International Employment</h3><p>Employment and consulting agreements for multinational teams and workforce programs.</p></div>
              <div className="global-use"><h3>Technology & Licensing</h3><p>SaaS contracts, software licenses, IP agreements, and international technology partnerships.</p></div>
              <div className="global-use"><h3>Corporate Transactions</h3><p>Joint ventures, investments, partnerships, acquisitions, and related transaction documentation.</p></div>
              <div className="global-use"><h3>Global Legal Operations</h3><p>Recurring contract translation across business units, regions, language pairs, and outside stakeholders.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contract-programs">
        <div className="shell program-grid">
          <div>
            <SectionHeading eyebrow="ENTERPRISE CONTRACT OPERATIONS" title="Built for Recurring Global Contract Programs" intro="For enterprise organizations, contract translation is rarely a one-time requirement. Legal teams may manage agreements across customers, suppliers, employees, partners, subsidiaries, product lines, and markets." align="left" />
            <div className="program-list">
              <div className="program-item"><Icon name="memory"/><div><strong>Preserve Approved Legal Language</strong><p>Store validated translations so negotiated and reviewed language can be referenced on future projects.</p></div></div>
              <div className="program-item"><Icon name="file"/><div><strong>Centralize Contract Terminology</strong><p>Maintain approved defined terms, party names, product terminology, legal expressions, and other recurring language.</p></div></div>
              <div className="program-item"><Icon name="people"/><div><strong>Capture Reviewer Decisions</strong><p>Incorporate approved feedback from internal counsel, outside counsel, procurement teams, and other stakeholders.</p></div></div>
              <div className="program-item"><Icon name="check"/><div><strong>Reduce Repetitive Review</strong><p>Apply established language to recurring contracts and focus professional review on material changes, new clauses, and higher-risk content.</p></div></div>
              <div className="program-item"><Icon name="globe"/><div><strong>Scale Across Markets</strong><p>Organize language assets and workflows by languages, regions, departments, contract types, or enterprise programs.</p></div></div>
            </div>
          </div>
          <aside className="program-summary">
            <div className="eyebrow">CONNECTED LEGAL OPERATIONS</div>
            <h3>Turn individual translations into reusable multilingual contract knowledge.</h3>
            <p>When every project is treated independently, approved language fragments, terminology drifts, and reviewers repeatedly resolve the same questions. Connected language assets help legal teams scale without losing continuity.</p>
            <div className="program-metrics">
              <div className="program-metric"><span>Approved language</span><span>REUSABLE</span></div>
              <div className="program-metric"><span>Defined terminology</span><span>CONTROLLED</span></div>
              <div className="program-metric"><span>Reviewer feedback</span><span>CAPTURED</span></div>
              <div className="program-metric"><span>Recurring content</span><span>LEVERAGED</span></div>
            </div>
            <ArrowLink href="https://www.stepes.com/solutions/legal-teams/">Translation Solutions for Legal Teams</ArrowLink>
          </aside>
        </div>
      </section>

      <section className="section section--soft" id="quality-control">
        <div className="shell">
          <SectionHeading eyebrow="QUALITY BY DESIGN" title="Quality Control for Professional Contract Translation" intro="Contract translation quality should be built into the workflow rather than left to a final proofreading step. Stepes combines preparation, linguistic expertise, terminology management, automated quality checks, professional review, and document validation." />
          <div className="quality-track">
            {qualitySteps.map(([title,text],i)=>(
              <article className="quality-step" key={title}>
                <div className="quality-num">{String(i+1).padStart(2,'0')}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="quality-note">For higher-impact or critical contractual content, additional quality gates such as independent revision and subject-matter review can be incorporated according to project requirements.</div>
          <div style={{textAlign:'center',marginTop:'24px'}}><ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</ArrowLink></div>
        </div>
      </section>

      <section className="section" id="online-workflow">
        <div className="shell online-layout">
          <div>
            <SectionHeading title="Secure Online Contract Translation Workflows" intro="Digital translation should make contract translation easier to manage—not reduce control over the process." align="left" />
            <p>Stepes provides secure online translation workflows that help organizations submit contract files, manage multilingual projects, track progress, centralize language assets, review translations, and receive completed documents through one connected environment.</p>
            <p style={{marginTop:'16px'}}>For recurring enterprise programs, Stepes can support more structured workflows with centralized terminology, translation memory, project management, workflow automation, user roles, quality controls, and reporting.</p>
            <ArrowLink href="https://app.stepes.com/quote/">Get an Online Translation Quote</ArrowLink>
          </div>
          <div className="online-flow" aria-label="Online contract translation workflow">
            <div className="online-flow__head"><strong>Contract Translation Workflow</strong><span className="online-status">Managed</span></div>
            <div className="online-steps">
              {[
                ['file','Upload','Source files'],
                ['memory','Prepare','TM + terminology'],
                ['people','Translate & Review','Legal linguists'],
                ['check','QA & Deliver','Final files'],
              ].map(([icon,title,meta])=><div className="online-step" key={title}><div className="online-step__icon"><Icon name={icon} size={20}/></div><strong>{title}</strong><span>{meta}</span></div>)}
            </div>
            <div className="online-assets">
              <div className="online-asset"><Icon name="memory" size={18}/>Translation memory</div>
              <div className="online-asset"><Icon name="file" size={18}/>Approved terminology</div>
              <div className="online-asset"><Icon name="shield" size={18}/>Controlled access</div>
              <div className="online-asset"><Icon name="check" size={18}/>Structured QA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="legal-lifecycle">
        <div className="shell lifecycle-layout">
          <div>
            <SectionHeading title="Contract Translation Is Part of the Larger Legal Lifecycle" intro="Contracts rarely exist in isolation. They connect with corporate governance, compliance, intellectual property, due diligence, employment, regulatory matters, disputes, and other legal content." align="left" dark />
            <p>Stepes supports multilingual legal content across the broader legal lifecycle with professional legal linguists, AI-enabled workflows, terminology governance, translation memory, quality assurance, and secure enterprise translation.</p>
            <ArrowLink href="https://www.stepes.com/legal-translation-services/" dark>Explore Legal Translation Services</ArrowLink>
          </div>
          <div className="lifecycle-links">
            {[
              ['building','Corporate & Governance Documents'],
              ['shield','Compliance & Regulatory Content'],
              ['file','Litigation & Discovery Materials'],
              ['code','Intellectual Property Documentation'],
              ['people','Employment & HR Legal Documents'],
              ['briefcase','Due Diligence & Transaction Records'],
              ['file','Policies & Codes of Conduct'],
              ['check','Certified Legal Documents'],
            ].map(([icon,label])=><div className="lifecycle-link" key={label}><Icon name={icon}/><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="shell">
          <SectionHeading title="Contract Translation Services FAQs" intro="Answers to common questions about professional contract translation, terminology consistency, AI-assisted workflows, confidentiality, certification, document formatting, and turnaround." />
          <div className="faq-wrap">
            {faqs.map((item,i)=>{
              const open = openFaq===i;
              return <div className={`faq-item ${open?'open':''}`} key={item.q}>
                <button className="faq-question" type="button" onClick={()=>setOpenFaq(open ? -1 : i)} aria-expanded={open} aria-controls={`faq-answer-${i}`}>
                  <span>{item.q}</span><span className="faq-plus" aria-hidden="true">+</span>
                </button>
                {open ? <div className="faq-answer" id={`faq-answer-${i}`}><p>{item.a}</p>{i===5?<ArrowLink href="https://www.stepes.com/certified-translation-services/">Certified Translation Services</ArrowLink>:null}{i===8?<ArrowLink href="https://www.stepes.com/security/">Stepes Security</ArrowLink>:null}</div> : null}
              </div>
            })}
          </div>
        </div>
      </section>

      <section className="final-wrap" id="contact">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2>Translate Your Contracts With Confidence</h2>
              <p>Whether you need one agreement translated for an international transaction or ongoing multilingual support for a global contract portfolio, Stepes combines professional legal-linguistic expertise with terminology control, quality assurance, and secure enterprise workflows.</p>
            </div>
            <div className="final-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Get a Quote</span><Icon name="arrow" size={18}/></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
