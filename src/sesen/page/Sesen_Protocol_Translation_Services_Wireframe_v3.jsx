import React, { useState } from "react";

const pageClass = "sesen-protocol-page";

const ICONS = {
  document: (
    <>
      <path d="M7 3.75h7.2L18.25 7.8V20.25H7z" />
      <path d="M14 3.75V8h4.25" />
      <path d="M9.5 11h6M9.5 14h6M9.5 17h4.5" />
    </>
  ),
  terminology: (
    <>
      <path d="M5 6.25h14M8 6.25c.4 5.4 2.6 9.5 6.6 12" />
      <path d="M15.5 9.25c-1.1 4-3.7 7-7.5 9" />
      <path d="M12 3.75v2.5" />
    </>
  ),
  review: (
    <>
      <circle cx="10" cy="10" r="5.5" />
      <path d="m14.1 14.1 4.4 4.4M7.8 10.1l1.45 1.45L12.6 8.2" />
    </>
  ),
  qa: (
    <>
      <path d="M12 3.5 19 6v5.35c0 4.15-2.9 7.45-7 9.15-4.1-1.7-7-5-7-9.15V6z" />
      <path d="m8.5 12 2.1 2.1 4.8-5" />
    </>
  ),
  amendment: (
    <>
      <path d="M6.5 4.25h9L18 6.75v13H6.5z" />
      <path d="M15.3 4.25V7H18M9 11h6M9 14h3" />
      <path d="M14 17h5M16.5 14.5V19.5" />
    </>
  ),
  connected: (
    <>
      <circle cx="6" cy="7" r="2.25" />
      <circle cx="18" cy="7" r="2.25" />
      <circle cx="12" cy="18" r="2.25" />
      <path d="m8.1 8.05 2.8 7.75M15.9 8.05l-2.8 7.75M8.25 7h7.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M3.9 12h16.2M12 3.75c2.2 2.25 3.3 5 3.3 8.25S14.2 18 12 20.25M12 3.75C9.8 6 8.7 8.75 8.7 12S9.8 18 12 20.25" />
    </>
  ),
  people: (
    <>
      <circle cx="8" cy="8.25" r="2.75" />
      <circle cx="16" cy="8.25" r="2.75" />
      <path d="M3.75 19c.4-3.5 2-5.2 4.25-5.2S11.85 15.5 12.25 19M11.75 19c.4-3.5 2-5.2 4.25-5.2S19.85 15.5 20.25 19" />
    </>
  ),
  technology: (
    <>
      <rect x="4.5" y="5" width="15" height="12" rx="2" />
      <path d="M8 20h8M12 17v3M8 9h8M8 12h5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8 12.3 2.5 2.5L16.4 9" />
    </>
  ),
  arrow: <path d="M5 12h13M14 8l4 4-4 4" />,
};

function Icon({ name, size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[name] || ICONS.check}
    </svg>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SectionHeading({ eyebrow = null, title, intro = null, align = "center", mobileLeft = false }) {
  return (
    <div className={`section-heading ${align === "left" ? "is-left" : ""} ${mobileLeft ? "mobile-left" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function ProtocolHeroArt() {
  return (
    <div className="hero-art" role="img" aria-label="Clinical protocol connected to terminology, translated versions, amendments, study content, and global rollout">
      <svg viewBox="0 0 610 470" aria-hidden="true" focusable="false">
        <defs>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#17264D" floodOpacity="0.08" />
          </filter>
        </defs>
        <circle cx="307" cy="238" r="204" fill="#F5F7FF" />
        <path d="M139 135c60-78 169-111 264-67 54 25 94 70 114 122" stroke="#DDE4F2" strokeWidth="2" fill="none" />
        <path d="M94 287c23 72 81 129 154 151" stroke="#DDE4F2" strokeWidth="2" fill="none" />
        <path d="M422 405c51-29 91-79 104-139" stroke="#DDE4F2" strokeWidth="2" fill="none" />

        <g filter="url(#softShadow)">
          <rect x="218" y="112" width="176" height="235" rx="22" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <rect x="238" y="136" width="88" height="10" rx="5" fill="#4B6FD8" />
          <rect x="238" y="160" width="116" height="7" rx="3.5" fill="#AEBBD4" />
          <rect x="238" y="178" width="128" height="7" rx="3.5" fill="#D2D9E7" />
          <rect x="238" y="196" width="108" height="7" rx="3.5" fill="#D2D9E7" />
          <rect x="238" y="224" width="136" height="64" rx="10" fill="#F7F9FD" stroke="#DDE4F2" />
          <path d="M252 242h104M252 258h104M252 274h76" stroke="#9EADC7" strokeWidth="5" strokeLinecap="round" />
          <rect x="238" y="308" width="82" height="8" rx="4" fill="#C7D1E4" />
          <text x="238" y="103" fill="#17264D" fontSize="17" fontFamily="Inter, Arial, sans-serif" fontWeight="700">CLINICAL PROTOCOL</text>
        </g>

        <g>
          <path d="M218 177 160 145" stroke="#6F8BE1" strokeWidth="2.5" />
          <circle cx="126" cy="127" r="40" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <path d="M106 119h40M114 119c1 16 7 28 19 35M139 127c-3 10-10 19-21 25M126 102v17" stroke="#3659BB" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="77" y="181" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Terminology</text>
        </g>

        <g>
          <path d="m394 176 61-36" stroke="#6F8BE1" strokeWidth="2.5" />
          <circle cx="487" cy="121" r="40" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <path d="M472 110h26M472 121h19M472 132h24" stroke="#3659BB" strokeWidth="2.4" strokeLinecap="round" />
          <text x="448" y="177" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Translation</text>
        </g>

        <g>
          <path d="M394 254 461 278" stroke="#6F8BE1" strokeWidth="2.5" />
          <circle cx="500" cy="291" r="40" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <path d="M483 282h34M483 293h25M483 304h31" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="511" cy="279" r="10" fill="#EAF0FF" stroke="#4B6FD8" />
          <path d="m506.5 279 3 3 6-6" stroke="#3659BB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="465" y="349" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Review &amp; QA</text>
        </g>

        <g>
          <path d="m309 347 1 57" stroke="#6F8BE1" strokeWidth="2.5" />
          <circle cx="310" cy="428" r="34" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <path d="M297 421h26M297 432h18" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M320 410v11h11" stroke="#4B6FD8" strokeWidth="2" fill="none" />
          <text x="274" y="469" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Amendments</text>
        </g>

        <g>
          <path d="M218 257 150 290" stroke="#6F8BE1" strokeWidth="2.5" />
          <circle cx="112" cy="308" r="40" fill="#FFFFFF" stroke="#C9D4EC" strokeWidth="2" />
          <circle cx="100" cy="299" r="7" fill="#EAF0FF" stroke="#4B6FD8" />
          <circle cx="126" cy="299" r="7" fill="#EAF0FF" stroke="#4B6FD8" />
          <circle cx="113" cy="320" r="7" fill="#EAF0FF" stroke="#4B6FD8" />
          <path d="m105 302 5 12m11-12-5 12m-9-15h12" stroke="#3659BB" strokeWidth="1.8" />
          <text x="52" y="367" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Connected content</text>
        </g>

        <g>
          <path d="M189 207 90 218" stroke="#D1DAEC" strokeWidth="2" strokeDasharray="5 7" />
          <path d="M414 220 522 220" stroke="#D1DAEC" strokeWidth="2" strokeDasharray="5 7" />
          <circle cx="61" cy="221" r="23" fill="#EAF0FF" />
          <path d="M43 221h36M61 203c6 6 9 12 9 18s-3 12-9 18M61 203c-6 6-9 12-9 18s3 12 9 18" stroke="#3659BB" strokeWidth="1.8" fill="none" />
          <circle cx="549" cy="220" r="23" fill="#EAF0FF" />
          <path d="M531 220h36M549 202c6 6 9 12 9 18s-3 12-9 18M549 202c-6 6-9 12-9 18s3 12 9 18" stroke="#3659BB" strokeWidth="1.8" fill="none" />
          <text x="496" y="260" fill="#46546D" fontSize="13" fontFamily="Inter, Arial, sans-serif">Country rollout</text>
        </g>
      </svg>
    </div>
  );
}

function LifecycleDiagram() {
  const steps = [
    ["Clinical Protocol", "Source study design, objectives, procedures, safety, and operational content."],
    ["Study Terminology", "Endpoints, eligibility criteria, procedures, products, abbreviations, and approved language."],
    ["Specialized Translation", "Qualified life sciences linguists work with study context and controlled references."],
    ["Clinical & Linguistic Review", "Independent review addresses meaning, terminology, consistency, and completeness."],
    ["QA & Controlled Baseline", "Structured checks help establish a reviewed multilingual reference for future updates."],
    ["Amendments & Version Control", "Changed content is identified, updated, reviewed, and aligned with the controlled baseline."],
    ["Connected Study Content", "Protocol language informs ICFs, CRFs, site materials, training, and other related content."],
    ["Country & Language Rollout", "Languages, regional variants, review cycles, and recurring updates are coordinated globally."],
  ];

  return (
    <div className="lifecycle-grid" role="group" aria-label="Protocol translation lifecycle from source protocol through country and language rollout">
      {steps.map(([title, copy], index) => (
        <article className="lifecycle-step" key={title}>
          <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const serviceScope = [
  ["Full Clinical Study Protocols", "Complete protocols covering study design, objectives, methodology, procedures, safety requirements, assessments, statistical sections, appendices, and operational instructions."],
  ["Protocol Synopses & Summaries", "Concise study overviews used by investigators, sites, reviewers, study teams, and other stakeholders."],
  ["Protocol Amendments", "Substantial and non-substantial amendments, revised protocol versions, amendment summaries, tracked changes, and supporting updates."],
  ["Eligibility Criteria", "Inclusion and exclusion criteria, screening requirements, participant characteristics, and clinical thresholds."],
  ["Study Objectives & Endpoints", "Primary, secondary, exploratory, safety, efficacy, pharmacokinetic, pharmacodynamic, and other endpoint descriptions."],
  ["Schedules, Procedures & Assessments", "Visits, time points, assessments, treatment cycles, diagnostic procedures, laboratory activities, imaging, dosing instructions, and study-specific workflows."],
  ["Safety & Operational Instructions", "Safety monitoring, reporting instructions, treatment modifications, discontinuation criteria, responsibilities, and other protocol-defined requirements."],
  ["Country-Specific Protocol Content", "Protocol updates, summaries, and supporting content that require controlled language handling for specific country, ethics, or institutional contexts."],
];

const terminologyItems = [
  ["Study-Specific Terminology", "Identify terms carrying particular clinical, scientific, or operational meaning within the protocol."],
  ["Approved Reference Language", "Incorporate sponsor glossaries, previous translations, product terminology, reference studies, and established language where available."],
  ["Terminology Reuse", "Apply approved language consistently when the same concepts appear in protocol amendments and related documentation."],
  ["Linguistic QA", "Check inconsistent terminology, unexplained variation, abbreviations, numbers, and other high-risk content before delivery."],
  ["Reviewer Feedback", "Capture approved reviewer changes so future protocol versions and related content can reflect agreed study language."],
];

const amendmentSteps = [
  ["Protocol v1.0", "Establish the reviewed multilingual protocol and agreed study terminology."],
  ["Protocol Amendment", "Receive the revised source and identify additions, deletions, and modified content."],
  ["Change Identification", "Determine which translated sections are affected and which approved content can remain unchanged."],
  ["Controlled Translation & Review", "Translate revised material in context and apply established terminology, review, and QA."],
  ["Related Content Review", "Identify where changed concepts may also appear in consent, CRF, site, training, manual, or safety content."],
  ["Updated Country Versions", "Deliver updated language versions with clear protocol and amendment version identification."],
];

const connectedServices = [
  {
    title: "Informed Consent Forms",
    copy: "Protocol procedures, visits, risks, treatment, and participant responsibilities often need to be expressed clearly in consent documentation.",
    link: "https://www.sesen.com/informed-consent-form-translation-services/",
    label: "Explore ICF Translation",
  },
  {
    title: "Case Report Forms",
    copy: "Field labels, instructions, assessments, visit terminology, and data-collection content may depend directly on concepts defined in the protocol.",
    link: "https://www.sesen.com/crf-translation-services/",
    label: "Explore CRF Translation",
  },
  {
    title: "IRB & Ethics Materials",
    copy: "Protocols and amendments may be accompanied by multilingual consent materials, summaries, responses, and supporting documentation for ethics review.",
    link: "https://www.sesen.com/irb-translation-services/",
    label: "Explore IRB Translation",
  },
  {
    title: "Investigator Brochures",
    copy: "Where protocol and investigator brochure content overlap, terminology for the investigational product, safety, administration, and clinical context should remain aligned.",
    link: "https://www.sesen.com/investigators-brochure-translation-services/",
    label: "Explore Investigator Brochure Translation",
  },
  {
    title: "Study Training",
    copy: "Investigator meetings, site initiation, protocol training, SOPs, and eLearning may need to communicate study requirements across languages.",
    link: "https://www.sesen.com/elearning-training-translation-services/",
    label: "Explore Training Translation",
  },
];

const qualityItems = [
  ["Clinical Meaning", "Review objectives, endpoints, eligibility criteria, procedures, interventions, safety information, and operational instructions in context."],
  ["Terminology", "Apply controlled study, therapeutic-area, product, procedure, and sponsor terminology consistently throughout the protocol."],
  ["Numbers, Units & Time Points", "Check doses, units, laboratory values, percentages, ranges, dates, visit windows, treatment cycles, and numerical criteria."],
  ["Tables & Schedules", "Review schedules of activities, tables, footnotes, legends, headings, and repeated structured content for completeness and alignment."],
  ["Abbreviations & Cross-References", "Check defined terms, acronyms, section references, tables, figures, appendices, and other internal relationships where applicable."],
  ["Completeness & Document Integrity", "Account for headings, paragraphs, tables, notes, tracked changes, headers, footers, appendices, and complex multilingual formatting."],
];

const technologyItems = [
  ["Translation Memory", "Reuse previously translated and approved protocol language when the same or similar content appears in later versions."],
  ["Terminology Management", "Make established study terminology available across linguists, reviewers, amendments, and related documents."],
  ["Version Comparison", "Help identify what changed between protocol versions so amendment workflows can focus on the right content."],
  ["Consistency Analysis", "Identify potentially inconsistent translations of repeated terms, phrases, abbreviations, or study concepts."],
  ["Automated Quality Checks", "Screen multilingual content for potential terminology, number, punctuation, omission, formatting, and consistency issues."],
  ["AI-Assisted Analysis & QA", "Use AI selectively for terminology application, change analysis, consistency review, quality support, and—when appropriate to the agreed workflow—translation assistance."],
];

const audiences = [
  ["Pharmaceutical Companies", "Support protocol translation from study startup through amendments, country expansion, and ongoing clinical development."],
  ["Biotechnology Companies", "Scale multilingual clinical operations as programs move into new sites, markets, indications, and trial phases."],
  ["Contract Research Organizations", "Coordinate protocol translation across sponsors, countries, sites, languages, timelines, and recurring study updates."],
  ["Medical Device & Diagnostic Companies", "Translate clinical investigation protocols and related documentation for global device and diagnostic studies."],
  ["Academic & Research Organizations", "Support multicenter and international research requiring accurate multilingual protocols and related study materials."],
  ["Emerging Clinical Development Teams", "Access specialist linguistic and multilingual infrastructure without building a large internal localization operation."],
];

const therapeuticAreas = [
  "Oncology",
  "Rare Diseases",
  "Neurology & CNS",
  "Cardiovascular",
  "Immunology",
  "Infectious Diseases & Vaccines",
  "Endocrinology & Metabolic Disorders",
  "Ophthalmology",
  "Medical Devices & Diagnostics",
];

const faqItems = [
  {
    q: "What is clinical trial protocol translation?",
    a: "Clinical trial protocol translation is the translation of a clinical study protocol into one or more target languages for multinational research. It can include the full protocol, protocol synopsis, amendments, eligibility criteria, objectives and endpoints, schedules of activities, procedures, safety information, tables, appendices, and other protocol content. Because the protocol defines core aspects of study design and conduct, the work requires specialized clinical terminology, careful review, structured quality controls, and consistency with related study documentation.",
  },
  {
    q: "When does a clinical trial protocol need to be translated?",
    a: "A protocol may need translation for country submissions, ethics committee or institutional review, investigator and site use, multinational study operations, sponsor processes, or other local requirements. There is no universal rule requiring every protocol to be translated into every local language; requirements depend on the trial, jurisdiction, intended use, authority or institution, and sponsor strategy.",
  },
  {
    q: "How does Sesen maintain terminology consistency?",
    a: "Sesen can use sponsor glossaries, previous translations, product terminology, reference documentation, translation memories, terminology databases, style guidance, and approved reviewer feedback to establish study-specific language. Approved terms can then be reused across amendments and related study documentation where appropriate.",
  },
  {
    q: "How are protocol amendments translated?",
    a: "When a revised protocol is received, Sesen can compare versions to identify changed content, preserve approved translations for unchanged material, translate revised sections, apply established terminology, and perform focused review and quality assurance. This helps maintain continuity between protocol versions while supporting faster amendment cycles.",
  },
  {
    q: "Can Sesen support urgent protocol amendments?",
    a: "Yes. Where an existing multilingual baseline is available, translation memory, terminology resources, version comparison, established linguistic teams, and focused QA can help accelerate updates. Actual turnaround depends on language count, document length, complexity, extent of change, review requirements, formatting, and delivery scope.",
  },
  {
    q: "Can protocol terminology be reused in ICFs, CRFs, and other study documents?",
    a: "Yes, where appropriate. Protocol terminology can provide an important reference for informed consent forms, case report forms, site documentation, training, investigator materials, safety content, and other study documentation. Consistent concepts do not always require identical wording, however, because patient-facing, data-collection, investigator, and regulatory content serve different audiences.",
  },
  {
    q: "How does Sesen handle numbers, tables, and schedules of activities?",
    a: "Protocol quality assurance can include checks for doses, units, ranges, percentages, dates, time points, visit windows, treatment cycles, table content, footnotes, headings, repeated text, abbreviations, and internal references. Multilingual formatting can also be provided when translated protocols require preservation or recreation of complex layouts.",
  },
  {
    q: "Can Sesen translate protocols into multiple languages at the same time?",
    a: "Yes. Sesen supports multilingual clinical translation programs across 150+ languages. Multiple target languages can be managed in parallel using shared terminology, translation memories, project instructions, source references, quality requirements, and centralized project management.",
  },
  {
    q: "Does Sesen use AI for protocol translation?",
    a: "Sesen can use AI-enabled technology within controlled clinical translation workflows when appropriate to the content, risk, and customer requirements. AI and automation may assist with translation, terminology application, consistency analysis, version comparison, repetitive content reuse, and quality checks. Qualified life sciences professionals remain responsible for contextual judgment and final linguistic quality.",
  },
  {
    q: "Does protocol translation require back translation or linguistic validation?",
    a: "Not automatically. The appropriate methodology depends on the intended use of the translated content, applicable requirements, sponsor procedures, and project specifications. Standard protocol translation typically uses professional translation, independent review, terminology control, and quality assurance rather than automatically requiring the full linguistic-validation methodology used for certain clinical outcome assessments. Additional verification steps can be incorporated when required.",
  },
  {
    q: "Who translates Sesen clinical trial protocols?",
    a: "Sesen assigns linguists according to the required language pair, clinical subject matter, therapeutic area, content type, and project requirements. Protocol workflows can include specialized translation, independent linguistic review, subject-matter review where required, terminology management, automated QA, and final quality control.",
  },
  {
    q: "What should we provide when requesting protocol translation?",
    a: "Where available, provide the current source protocol and version, target languages and countries, delivery dates, previous protocol translations, earlier versions, sponsor terminology or glossaries, relevant product or study references, reviewer instructions, formatting requirements, and any certification requirements. Sesen can also help determine the appropriate multilingual workflow when not all reference materials are available at project startup.",
  },
  {
    q: "Can Sesen provide certified protocol translations?",
    a: "Yes. Where required, Sesen can provide translation certification or a certificate of accuracy according to the agreed project requirements. Certification requirements can vary by recipient, institution, jurisdiction, and submission context, so the required format should be confirmed during project setup.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const open = index === openIndex;
        return (
          <div className={`faq-item ${open ? "is-open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenIndex(open ? -1 : index)}
              aria-expanded={open}
              aria-controls={`protocol-faq-${index}`}
            >
              <span>{item.q}</span>
              <span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            <div id={`protocol-faq-${index}`} className="faq-answer" hidden={!open}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ProtocolTranslationServicesPage() {
  return (
    <main className={pageClass}>
      <style>{`
        .${pageClass} {
          --sp-blue: #4B6FD8;
          --sp-blue-dark: #3659BB;
          --sp-deep-blue: #253F8F;
          --sp-mid-blue: #6F8BE1;
          --sp-soft-blue: #EAF0FF;
          --sp-pale-blue: #F5F7FF;
          --sp-navy: #17264D;
          --sp-ink: #111827;
          --sp-body: #46546D;
          --sp-muted: #68758B;
          --sp-border: #DDE4F2;
          --sp-divider: #E9EEF8;
          --sp-soft-bg: #F7F9FD;
          --sp-white: #FFFFFF;
          --sp-light-blue: #C8D6FF;
          color: var(--sp-body);
          background: var(--sp-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .${pageClass}, .${pageClass} * { box-sizing: border-box; }
        .${pageClass} a { color: inherit; }
        .${pageClass} img, .${pageClass} svg { max-width: 100%; }
        .${pageClass} button, .${pageClass} a { -webkit-tap-highlight-color: transparent; }
        .${pageClass} button:focus-visible, .${pageClass} a:focus-visible {
          outline: 3px solid rgba(75,111,216,.34);
          outline-offset: 4px;
        }

        .${pageClass} .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .${pageClass} section { padding: 96px 0; }
        .${pageClass} section.dense { padding: 80px 0; }
        .${pageClass} .soft { background: var(--sp-soft-bg); }
        .${pageClass} .pale-blue { background: var(--sp-pale-blue); }
        .${pageClass} .navy-section { background: var(--sp-navy); color: #fff; }
        .${pageClass} .navy-section p { color: #D7E0F4; }
        .${pageClass} .navy-section h2, .${pageClass} .navy-section h3 { color: #fff; }

        .${pageClass} h1,
        .${pageClass} h2,
        .${pageClass} h3 {
          margin: 0;
          color: var(--sp-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-weight: 500;
        }

        .${pageClass} h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .${pageClass} h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .${pageClass} h3 {
          font-size: 22px;
          line-height: 1.3;
        }
        .${pageClass} h1, .${pageClass} h2, .${pageClass} h3 {
          overflow-wrap: break-word;
        }

        .${pageClass} p { margin: 0; color: var(--sp-body); }
        .${pageClass} strong { color: var(--sp-navy); }

        .${pageClass} .eyebrow {
          color: var(--sp-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .${pageClass} .section-heading {
          max-width: 820px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .${pageClass} .section-heading.is-left {
          margin-left: 0;
          text-align: left;
        }
        .${pageClass} .section-heading p {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.65;
        }

        .${pageClass} .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }
        .${pageClass} .btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .035em;
          text-transform: uppercase;
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }
        .${pageClass} .btn:hover { transform: translateY(-1px); }
        .${pageClass} .btn-primary { background: var(--sp-blue); color: #fff; border: 1px solid var(--sp-blue); }
        .${pageClass} .btn-primary:hover { background: var(--sp-blue-dark); border-color: var(--sp-blue-dark); }
        .${pageClass} .btn-secondary { background: #fff; color: var(--sp-ink); border: 1px solid #C9D4EC; }
        .${pageClass} .btn-secondary:hover { background: var(--sp-pale-blue); border-color: #AEBDE0; }

        .${pageClass} .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sp-blue-dark);
          font-size: 16px;
          line-height: 1.3;
          font-weight: 700;
          text-decoration: none;
        }
        .${pageClass} .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .${pageClass} .editorial-link svg { transition: transform .2s ease; }
        .${pageClass} .editorial-link:hover svg { transform: translateX(3px); }

        /* Hero */
        .${pageClass} .hero {
          padding: 96px 0 88px;
          background:
            radial-gradient(circle at 82% 16%, rgba(75,111,216,.08), transparent 28%),
            linear-gradient(180deg, #fff 0%, #fff 74%, #F9FBFF 100%);
        }
        .${pageClass} .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(430px, .95fr);
          gap: 64px;
          align-items: center;
        }
        .${pageClass} .hero-copy { max-width: 690px; min-width: 0; }
        .${pageClass} .hero-copy .lead {
          margin-top: 22px;
          color: #293954;
          font-size: 20px;
          line-height: 1.62;
          max-width: 680px;
        }
        .${pageClass} .hero-copy .support {
          margin-top: 18px;
          font-size: 17px;
          line-height: 1.72;
          max-width: 690px;
        }
        .${pageClass} .hero-art {
          min-height: 470px;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .${pageClass} .hero-art svg { width: 100%; height: auto; }

        /* Trust */
        .${pageClass} .trust-band {
          padding: 24px 0;
          border-top: 1px solid var(--sp-divider);
          border-bottom: 1px solid var(--sp-divider);
          background: #fff;
        }
        .${pageClass} .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 28px;
        }
        .${pageClass} .trust-item {
          display: flex;
          align-items: center;
          gap: 13px;
          min-height: 40px;
          color: var(--sp-navy);
          font-size: 15px;
          font-weight: 700;
        }
        .${pageClass} .trust-item + .trust-item { border-left: 1px solid var(--sp-divider); padding-left: 28px; }
        .${pageClass} .trust-icon {
          width: 34px; height: 34px; border-radius: 12px;
          background: var(--sp-soft-blue);
          color: var(--sp-blue-dark);
          display: grid; place-items: center;
          flex: 0 0 auto;
        }

        /* Foundation */
        .${pageClass} .foundation-grid {
          display: grid;
          grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
          gap: 76px;
          align-items: start;
        }
        .${pageClass} .foundation-copy p {
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.72;
        }
        .${pageClass} .foundation-list {
          border-top: 1px solid var(--sp-border);
        }
        .${pageClass} .foundation-row {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 18px;
          padding: 25px 0;
          border-bottom: 1px solid var(--sp-border);
        }
        .${pageClass} .foundation-row .mini-icon {
          width: 40px; height: 40px; border-radius: 12px;
          display: grid; place-items: center;
          color: var(--sp-blue-dark);
          background: var(--sp-soft-blue);
        }
        .${pageClass} .foundation-row h3 { font-size: 20px; }
        .${pageClass} .foundation-row p { margin-top: 8px; font-size: 16px; line-height: 1.62; }

        /* Service scope */
        .${pageClass} .scope-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--sp-border);
          border-bottom: 1px solid var(--sp-border);
        }
        .${pageClass} .scope-item {
          padding: 28px 30px 28px 0;
          border-bottom: 1px solid var(--sp-divider);
          display: grid;
          grid-template-columns: 34px minmax(0,1fr);
          gap: 16px;
        }
        .${pageClass} .scope-item:nth-child(odd) { border-right: 1px solid var(--sp-divider); padding-right: 42px; }
        .${pageClass} .scope-item:nth-child(even) { padding-left: 42px; }
        .${pageClass} .scope-item:nth-last-child(-n+2) { border-bottom: 0; }
        .${pageClass} .scope-item svg { color: var(--sp-blue-dark); margin-top: 2px; }
        .${pageClass} .scope-item h3 { font-size: 20px; }
        .${pageClass} .scope-item p { margin-top: 8px; font-size: 16px; }

        /* Lifecycle */
        .${pageClass} .lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          border: 1px solid var(--sp-border);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .${pageClass} .lifecycle-step {
          min-height: 238px;
          padding: 28px;
          border-right: 1px solid var(--sp-divider);
          border-bottom: 1px solid var(--sp-divider);
          position: relative;
        }
        .${pageClass} .lifecycle-step::after {
          content: "→";
          position: absolute;
          top: 28px;
          right: -11px;
          z-index: 2;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #fff;
          color: var(--sp-blue-dark);
          font: 700 14px/1 Inter, Arial, sans-serif;
        }
        .${pageClass} .lifecycle-step:nth-child(4n)::after,
        .${pageClass} .lifecycle-step:last-child::after { display: none; }
        .${pageClass} .lifecycle-step:nth-child(4n) { border-right: 0; }
        .${pageClass} .lifecycle-step:nth-last-child(-n+4) { border-bottom: 0; }
        .${pageClass} .step-number {
          width: 42px; height: 42px;
          display: grid; place-items: center;
          border-radius: 50%;
          background: var(--sp-soft-blue);
          color: var(--sp-blue-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .05em;
          margin-bottom: 25px;
        }
        .${pageClass} .lifecycle-step h3 { font-size: 20px; }
        .${pageClass} .lifecycle-step p { margin-top: 10px; font-size: 16px; line-height: 1.58; }

        /* Terminology */
        .${pageClass} .terminology-layout {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 70px;
          align-items: center;
        }
        .${pageClass} .terminology-copy .lead-copy {
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.72;
        }
        .${pageClass} .term-chip-wrap {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .${pageClass} .term-chip {
          border: 1px solid #CAD5EB;
          background: #fff;
          border-radius: 999px;
          padding: 8px 13px;
          font-size: 14px;
          color: var(--sp-navy);
          font-weight: 600;
        }
        .${pageClass} .term-list {
          background: #fff;
          border: 1px solid var(--sp-border);
          border-radius: 28px;
          padding: 8px 30px;
        }
        .${pageClass} .term-row {
          padding: 22px 0;
          border-bottom: 1px solid var(--sp-divider);
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 15px;
        }
        .${pageClass} .term-row:last-child { border-bottom: 0; }
        .${pageClass} .term-row svg { color: var(--sp-blue-dark); }
        .${pageClass} .term-row h3 { font-size: 19px; }
        .${pageClass} .term-row p { margin-top: 7px; font-size: 16px; }
        .${pageClass} .term-callout {
          margin-top: 28px;
          padding-left: 20px;
          border-left: 2px solid var(--sp-blue);
          color: var(--sp-navy);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.62;
        }

        /* Amendments */
        .${pageClass} .amendment-timeline {
          display: grid;
          grid-template-columns: repeat(6, minmax(0,1fr));
          gap: 0;
          margin-top: 52px;
          position: relative;
        }
        .${pageClass} .amendment-timeline:before {
          content: "";
          position: absolute;
          left: 7%; right: 7%; top: 24px;
          height: 2px;
          background: #CAD5EB;
        }
        .${pageClass} .amendment-node {
          position: relative;
          z-index: 1;
          padding-right: 18px;
        }
        .${pageClass} .amendment-dot {
          width: 50px; height: 50px;
          border-radius: 50%;
          display: grid; place-items: center;
          background: #fff;
          border: 2px solid var(--sp-mid-blue);
          color: var(--sp-blue-dark);
          margin-bottom: 22px;
        }
        .${pageClass} .amendment-node h3 { font-size: 18px; }
        .${pageClass} .amendment-node p { margin-top: 8px; font-size: 16px; line-height: 1.58; }
        .${pageClass} .amendment-benefits {
          margin-top: 54px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 28px;
        }
        .${pageClass} .benefit {
          padding-top: 20px;
          border-top: 2px solid var(--sp-blue);
        }
        .${pageClass} .benefit h3 { font-size: 20px; }
        .${pageClass} .benefit p { margin-top: 10px; font-size: 16px; }

        /* Connected content */
        .${pageClass} .connected-layout {
          display: grid;
          grid-template-columns: minmax(0, .76fr) minmax(0, 1.24fr);
          gap: 72px;
          align-items: start;
        }
        .${pageClass} .connected-intro p { margin-top: 20px; font-size: 18px; }
        .${pageClass} .connected-intro .note {
          margin-top: 26px;
          padding: 20px 22px;
          border-radius: 18px;
          background: var(--sp-pale-blue);
          color: var(--sp-navy);
          font-size: 16px;
          line-height: 1.62;
        }
        .${pageClass} .connected-list { border-top: 1px solid var(--sp-border); }
        .${pageClass} .connected-row {
          padding: 24px 0;
          border-bottom: 1px solid var(--sp-border);
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: 28px;
          align-items: center;
        }
        .${pageClass} .connected-row h3 { font-size: 20px; }
        .${pageClass} .connected-row p { margin-top: 8px; font-size: 16px; }

        /* Rollout */
        .${pageClass} .rollout-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          border-top: 1px solid rgba(255,255,255,.22);
          border-left: 1px solid rgba(255,255,255,.22);
          margin-top: 46px;
        }
        .${pageClass} .rollout-item {
          padding: 26px;
          border-right: 1px solid rgba(255,255,255,.22);
          border-bottom: 1px solid rgba(255,255,255,.22);
        }
        .${pageClass} .rollout-item svg { color: var(--sp-light-blue); }
        .${pageClass} .rollout-item h3 { margin-top: 18px; font-size: 20px; }
        .${pageClass} .rollout-item p { margin-top: 10px; font-size: 16px; }
        .${pageClass} .rollout-foot {
          max-width: 850px;
          margin-top: 34px;
          color: #E1E8F7;
          font-size: 16px;
        }

        /* Quality */
        .${pageClass} .quality-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 0;
          border: 1px solid var(--sp-border);
          border-radius: 28px;
          overflow: hidden;
        }
        .${pageClass} .quality-item {
          padding: 30px;
          min-height: 225px;
          border-right: 1px solid var(--sp-divider);
          border-bottom: 1px solid var(--sp-divider);
        }
        .${pageClass} .quality-item:nth-child(3n) { border-right: 0; }
        .${pageClass} .quality-item:nth-last-child(-n+3) { border-bottom: 0; }
        .${pageClass} .quality-icon {
          width: 42px; height: 42px; border-radius: 12px;
          display: grid; place-items: center;
          background: var(--sp-soft-blue);
          color: var(--sp-blue-dark);
          margin-bottom: 22px;
        }
        .${pageClass} .quality-item h3 { font-size: 20px; }
        .${pageClass} .quality-item p { margin-top: 10px; font-size: 16px; }
        .${pageClass} .human-note {
          margin-top: 32px;
          padding: 24px 28px;
          border-radius: 20px;
          background: var(--sp-pale-blue);
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .${pageClass} .human-note svg { color: var(--sp-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .${pageClass} .human-note p { font-size: 17px; }

        /* Tech */
        .${pageClass} .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 24px 38px;
        }
        .${pageClass} .tech-item { padding: 16px 0 24px; border-bottom: 1px solid var(--sp-border); }
        .${pageClass} .tech-item .tech-head { display: flex; align-items: center; gap: 12px; }
        .${pageClass} .tech-item svg { color: var(--sp-blue-dark); }
        .${pageClass} .tech-item h3 { font-size: 19px; }
        .${pageClass} .tech-item p { margin-top: 10px; font-size: 16px; }
        .${pageClass} .tech-principle {
          margin-top: 40px;
          padding: 28px 30px;
          border: 1px solid #C9D4EC;
          border-radius: 22px;
          background: #fff;
          display: grid;
          grid-template-columns: auto minmax(0,1fr);
          gap: 18px;
          align-items: start;
        }
        .${pageClass} .tech-principle svg { color: var(--sp-blue-dark); }
        .${pageClass} .tech-principle p { font-size: 17px; }

        /* Regulatory */
        .${pageClass} .regulatory-layout {
          display: grid;
          grid-template-columns: minmax(0, .86fr) minmax(0, 1.14fr);
          gap: 72px;
          align-items: start;
        }
        .${pageClass} .regulatory-copy p { margin-top: 20px; font-size: 18px; }
        .${pageClass} .regulatory-copy .reg-note {
          margin-top: 26px;
          padding: 20px 22px;
          background: #fff;
          border: 1px solid var(--sp-border);
          border-radius: 18px;
          color: var(--sp-navy);
          font-size: 16px;
        }
        .${pageClass} .regulatory-link { margin-top: 22px; }
        .${pageClass} .regulatory-list { border-top: 1px solid var(--sp-border); }
        .${pageClass} .regulatory-row { padding: 23px 0; border-bottom: 1px solid var(--sp-border); }
        .${pageClass} .regulatory-row h3 { font-size: 20px; }
        .${pageClass} .regulatory-row p { margin-top: 8px; font-size: 16px; }

        /* M11 */
        .${pageClass} .structured-panel {
          display: grid;
          grid-template-columns: minmax(0,1.05fr) minmax(360px,.95fr);
          gap: 62px;
          padding: 48px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid var(--sp-border);
          box-shadow: 0 16px 50px rgba(23,38,77,.06);
        }
        .${pageClass} .structured-panel p { margin-top: 20px; font-size: 18px; }
        .${pageClass} .structured-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .${pageClass} .structured-item {
          padding: 19px;
          border-radius: 16px;
          background: var(--sp-pale-blue);
        }
        .${pageClass} .structured-item h3 { font-size: 17px; }
        .${pageClass} .structured-item p { margin-top: 6px; font-size: 16px; color: var(--sp-body); }

        /* Audiences */
        .${pageClass} .audience-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 0 36px;
          border-top: 1px solid var(--sp-border);
        }
        .${pageClass} .audience-item {
          padding: 26px 0;
          border-bottom: 1px solid var(--sp-border);
        }
        .${pageClass} .audience-item h3 { font-size: 20px; }
        .${pageClass} .audience-item p { margin-top: 9px; font-size: 16px; }

        /* Therapy & Languages */
        .${pageClass} .expertise-split {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 72px;
        }
        .${pageClass} .expertise-panel { min-width: 0; }
        .${pageClass} .expertise-panel p { margin-top: 18px; font-size: 17px; }
        .${pageClass} .therapy-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .${pageClass} .therapy-tag {
          padding: 10px 14px;
          border-radius: 999px;
          background: #fff;
          border: 1px solid var(--sp-border);
          color: var(--sp-navy);
          font-size: 14px;
          font-weight: 600;
        }
        .${pageClass} .language-number {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 58px;
          line-height: 1;
          font-weight: 500;
          letter-spacing: -1.2px;
          color: var(--sp-blue-dark);
          margin-top: 26px;
        }
        .${pageClass} .language-list { margin-top: 25px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 20px; }
        .${pageClass} .language-point { display: flex; gap: 10px; align-items: flex-start; font-size: 16px; color: var(--sp-body); }
        .${pageClass} .language-point svg { color: var(--sp-blue-dark); flex: 0 0 auto; margin-top: 2px; }

        /* FAQs */
        .${pageClass} .faq-wrap { max-width: 920px; margin: 0 auto; }
        .${pageClass} .faq-list { border-top: 1px solid var(--sp-border); }
        .${pageClass} .faq-item { border-bottom: 1px solid var(--sp-border); }
        .${pageClass} .faq-question {
          width: 100%;
          min-height: 76px;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--sp-navy);
          font: 500 20px/1.35 "Inter Tight", Inter, Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          text-align: left;
          cursor: pointer;
        }
        .${pageClass} .faq-toggle {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: var(--sp-soft-blue);
          color: var(--sp-blue-dark);
          display: grid; place-items: center;
          font: 500 24px/1 Inter, Arial, sans-serif;
          flex: 0 0 auto;
        }
        .${pageClass} .faq-answer { padding: 0 56px 24px 0; }
        .${pageClass} .faq-answer p { font-size: 16px; line-height: 1.7; }

        /* Related */
        .${pageClass} .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 24px;
        }
        .${pageClass} .related-card {
          display: flex;
          flex-direction: column;
          min-height: 242px;
          padding: 28px;
          border: 1px solid var(--sp-border);
          border-radius: 22px;
          background: #fff;
        }
        .${pageClass} .related-card h3 { font-size: 20px; }
        .${pageClass} .related-card p { margin: 10px 0 20px; font-size: 16px; }
        .${pageClass} .related-card .editorial-link { margin-top: auto; }

        /* Final CTA */
        .${pageClass} .closing {
          padding: 90px 0;
          background: linear-gradient(125deg, #253F8F 0%, #3659BB 55%, #4B6FD8 100%);
        }
        .${pageClass} .closing-inner {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }
        .${pageClass} .closing h2 { color: #fff; }
        .${pageClass} .closing p { color: #E8EEFF; margin: 20px auto 0; max-width: 760px; font-size: 18px; }
        .${pageClass} .closing .btn-row { justify-content: center; }
        .${pageClass} .closing .btn-primary { background: #fff; color: var(--sp-ink); border-color: #fff; }
        .${pageClass} .closing .btn-primary:hover { background: #F2F5FC; border-color: #F2F5FC; }
        .${pageClass} .closing .btn-secondary { background: var(--sp-soft-blue); color: var(--sp-ink); border-color: var(--sp-soft-blue); }
        .${pageClass} .closing .btn-secondary:hover { background: #fff; color: var(--sp-ink); border-color: #fff; }

        @media (max-width: 1100px) {
          .${pageClass} .shell { padding-left: 40px; padding-right: 40px; }
          .${pageClass} .hero-grid { grid-template-columns: minmax(0,1fr) minmax(380px,.88fr); gap: 42px; }
          .${pageClass} .hero-art { min-height: 420px; }
          .${pageClass} .lifecycle-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .${pageClass} .lifecycle-step:nth-child(4n) { border-right: 1px solid var(--sp-divider); }
          .${pageClass} .lifecycle-step::after { display: none; }
          .${pageClass} .lifecycle-step:nth-child(2n) { border-right: 0; }
          .${pageClass} .lifecycle-step:nth-last-child(-n+4) { border-bottom: 1px solid var(--sp-divider); }
          .${pageClass} .lifecycle-step:nth-last-child(-n+2) { border-bottom: 0; }
          .${pageClass} .amendment-timeline { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 30px 16px; }
          .${pageClass} .amendment-timeline:before { display: none; }
          .${pageClass} .quality-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .${pageClass} .quality-item:nth-child(3n) { border-right: 1px solid var(--sp-divider); }
          .${pageClass} .quality-item:nth-child(2n) { border-right: 0; }
          .${pageClass} .quality-item:nth-last-child(-n+3) { border-bottom: 1px solid var(--sp-divider); }
          .${pageClass} .quality-item:nth-last-child(-n+2) { border-bottom: 0; }
          .${pageClass} .tech-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .${pageClass} .audience-list { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .${pageClass} .related-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
        }

        @media (max-width: 820px) {
          .${pageClass} .shell { padding-left: 30px; padding-right: 30px; }
          .${pageClass} section { padding: 76px 0; }
          .${pageClass} section.dense { padding: 68px 0; }
          .${pageClass} h1 { font-size: 42px; }
          .${pageClass} h2 { font-size: 32px; }
          .${pageClass} .hero { padding: 78px 0 72px; }
          .${pageClass} .hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .${pageClass} .hero-copy { max-width: 760px; }
          .${pageClass} .hero-art { min-height: 0; max-width: 620px; margin: 0 auto; }
          .${pageClass} .trust-grid { grid-template-columns: 1fr 1fr; }
          .${pageClass} .trust-item + .trust-item { border-left: 0; padding-left: 0; }
          .${pageClass} .trust-item:nth-child(even) { border-left: 1px solid var(--sp-divider); padding-left: 24px; }
          .${pageClass} .foundation-grid,
          .${pageClass} .terminology-layout,
          .${pageClass} .connected-layout,
          .${pageClass} .regulatory-layout,
          .${pageClass} .expertise-split { grid-template-columns: 1fr; gap: 46px; }
          .${pageClass} .scope-list { grid-template-columns: 1fr; }
          .${pageClass} .scope-item:nth-child(odd), .${pageClass} .scope-item:nth-child(even) { border-right: 0; padding: 24px 0; }
          .${pageClass} .scope-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--sp-divider); }
          .${pageClass} .scope-item:last-child { border-bottom: 0; }
          .${pageClass} .amendment-timeline { grid-template-columns: 1fr 1fr; }
          .${pageClass} .amendment-benefits { grid-template-columns: 1fr; }
          .${pageClass} .rollout-grid { grid-template-columns: 1fr 1fr; }
          .${pageClass} .structured-panel { grid-template-columns: 1fr; padding: 38px; }
          .${pageClass} .structured-stack { grid-template-columns: repeat(2,minmax(0,1fr)); }
        }

        @media (max-width: 600px) {
          .${pageClass} .shell { padding-left: 20px; padding-right: 20px; }
          .${pageClass} section { padding: 68px 0; }
          .${pageClass} section.dense { padding: 64px 0; }
          .${pageClass} h1 { font-size: 42px; line-height: 1.22; }
          .${pageClass} h2 { font-size: 32px; line-height: 1.28; }
          .${pageClass} h3 { font-size: 20px; }
          .${pageClass} .hero { padding: 70px 0 58px; }
          .${pageClass} .hero-copy .lead { font-size: 18px; }
          .${pageClass} .hero-copy .support { font-size: 16px; }
          .${pageClass} .hero-art { margin-top: 6px; }
          .${pageClass} .btn-row { flex-direction: column; }
          .${pageClass} .btn { width: 100%; min-height: 50px; }
          .${pageClass} .section-heading { margin-bottom: 38px; }
          .${pageClass} .section-heading:not(.mobile-left) { text-align: center; }
          .${pageClass} .section-heading.mobile-left,
          .${pageClass} .section-heading.is-left.mobile-left { text-align: left; }
          .${pageClass} .section-heading p { text-align: left; font-size: 17px; }
          .${pageClass} .section-heading:not(.mobile-left) .eyebrow { text-align: center; }
          .${pageClass} .trust-grid { grid-template-columns: 1fr; gap: 0; }
          .${pageClass} .trust-item { padding: 15px 0; border-bottom: 1px solid var(--sp-divider); }
          .${pageClass} .trust-item:nth-child(even) { border-left: 0; padding-left: 0; }
          .${pageClass} .trust-item:last-child { border-bottom: 0; }
          .${pageClass} .foundation-copy h2,
          .${pageClass} .terminology-copy h2,
          .${pageClass} .connected-intro h2 { text-align: center; }
          .${pageClass} .connected-intro .eyebrow { text-align: center; }
          .${pageClass} .foundation-copy p { font-size: 17px; }
          .${pageClass} .foundation-row { grid-template-columns: 38px minmax(0,1fr); gap: 14px; }
          .${pageClass} .scope-item { grid-template-columns: 30px minmax(0,1fr); }
          .${pageClass} .lifecycle-grid { grid-template-columns: 1fr; border-radius: 22px; }
          .${pageClass} .lifecycle-step,
          .${pageClass} .lifecycle-step:nth-child(2n),
          .${pageClass} .lifecycle-step:nth-child(4n) { border-right: 0; border-bottom: 1px solid var(--sp-divider); min-height: 0; padding: 24px; display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 18px; }
          .${pageClass} .lifecycle-step:last-child { border-bottom: 0; }
          .${pageClass} .step-number { margin-bottom: 0; }
          .${pageClass} .term-list { padding: 6px 20px; border-radius: 22px; }
          .${pageClass} .amendment-timeline { grid-template-columns: 1fr; gap: 0; padding-left: 0; }
          .${pageClass} .amendment-node { display: grid; grid-template-columns: 50px minmax(0,1fr); gap: 16px; padding: 0 0 28px; }
          .${pageClass} .amendment-dot { margin-bottom: 0; }
          .${pageClass} .connected-row { grid-template-columns: 1fr; gap: 14px; }
          .${pageClass} .terminology-copy .lead-copy,
          .${pageClass} .connected-intro > p { text-align: left; }
          .${pageClass} .editorial-link span { min-width: 0; overflow-wrap: anywhere; }
          .${pageClass} .rollout-grid { grid-template-columns: 1fr; }
          .${pageClass} .quality-grid { grid-template-columns: 1fr; border-radius: 22px; }
          .${pageClass} .quality-item,
          .${pageClass} .quality-item:nth-child(2n),
          .${pageClass} .quality-item:nth-child(3n) { border-right: 0; border-bottom: 1px solid var(--sp-divider); min-height: 0; padding: 25px; }
          .${pageClass} .quality-item:last-child { border-bottom: 0; }
          .${pageClass} .human-note { padding: 22px; }
          .${pageClass} .tech-grid { grid-template-columns: 1fr; gap: 0; }
          .${pageClass} .tech-principle { grid-template-columns: 1fr; }
          .${pageClass} .structured-panel { padding: 28px 22px; border-radius: 22px; }
          .${pageClass} .structured-panel p { font-size: 17px; }
          .${pageClass} .structured-stack { grid-template-columns: 1fr; }
          .${pageClass} .audience-list { grid-template-columns: 1fr; gap: 0; }
          .${pageClass} .language-number { font-size: 52px; }
          .${pageClass} .language-list { grid-template-columns: 1fr; }
          .${pageClass} .expertise-panel h2 { text-align: center; }
          .${pageClass} .editorial-link { align-items: flex-start; }
          .${pageClass} .faq-question { min-height: 72px; font-size: 19px; }
          .${pageClass} .faq-answer { padding-right: 0; }
          .${pageClass} .related-grid { grid-template-columns: 1fr; }
          .${pageClass} .related-card { min-height: 0; }
          .${pageClass} .closing { padding: 72px 0; }
          .${pageClass} .closing-inner { text-align: center; }
        }

        @media (max-width: 420px) {
          .${pageClass} .hero-art svg text { display: none; }
        }

        @media (max-width: 350px) {
          .${pageClass} h1 { font-size: 38px; }
          .${pageClass} h2 { font-size: 30px; }
          .${pageClass} .hero-copy .lead { font-size: 17px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .${pageClass} .btn,
          .${pageClass} .editorial-link svg { transition: none; }
          .${pageClass} .btn:hover { transform: none; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Protocol Translation Services for Global Clinical Trials</h1>
            <p className="lead">
              Translate clinical trial protocols with the terminology control, expert review, and version consistency required for global research.
            </p>
            <p className="support">
              Sesen helps pharmaceutical, biotechnology, medical device, and CRO teams translate clinical study protocols across 150+ languages—from the initial protocol and study-specific terminology through amendments, related clinical content, and multi-country rollout.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <a className="btn btn-secondary" href="https://www.sesen.com/clinical-trial-translation-services/">EXPLORE CLINICAL TRIAL TRANSLATION</a>
            </div>
          </div>
          <ProtocolHeroArt />
        </div>
      </section>

      <div className="trust-band" role="group" aria-label="Protocol translation trust indicators">
        <div className="shell trust-grid">
          <div className="trust-item"><span className="trust-icon"><Icon name="globe" size={20} /></span><span>150+ Languages</span></div>
          <div className="trust-item"><span className="trust-icon"><Icon name="qa" size={20} /></span><span>ISO 17100 · ISO 9001 · ISO 13485</span></div>
          <div className="trust-item"><span className="trust-icon"><Icon name="people" size={20} /></span><span>Life Sciences Linguists</span></div>
          <div className="trust-item"><span className="trust-icon"><Icon name="connected" size={20} /></span><span>Terminology &amp; Version Control</span></div>
        </div>
      </div>

      <section>
        <div className="shell foundation-grid">
          <div className="foundation-copy">
            <h2>The Protocol Sets the Foundation for Multilingual Study Content</h2>
            <p>
              A clinical trial protocol defines how a study is designed and conducted. It brings together objectives and endpoints, eligibility criteria, study procedures, visit schedules, investigational product information, safety requirements, assessments, reporting expectations, and operational instructions.
            </p>
            <p>
              When a study expands across languages and countries, those concepts need to remain clear and consistent wherever they appear. Sesen treats the protocol as foundational multilingual clinical content—not an isolated translation event.
            </p>
          </div>
          <div className="foundation-list">
            {[
              ["review", "Preserve Clinical Meaning", "Maintain the intended meaning of objectives, endpoints, eligibility criteria, procedures, safety language, and operational instructions."],
              ["people", "Support Consistent Study Execution", "Help investigators, coordinators, pharmacists, laboratory teams, monitors, and other site personnel work from clear protocol information."],
              ["qa", "Prepare Content for Its Intended Review", "Support country submissions, ethics or institutional review, investigator/site use, sponsor requirements, and multilingual study operations where applicable."],
              ["connected", "Build Downstream Consistency", "Use approved protocol terminology as an important reference for ICFs, CRFs, site content, training, and other related documentation."],
            ].map(([icon, title, copy]) => (
              <article className="foundation-row" key={title}>
                <span className="mini-icon"><Icon name={icon} size={22} /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="shell">
          <SectionHeading
            title="Clinical Protocol Content Across the Study Lifecycle"
            intro="Sesen supports the core protocol content required for multinational clinical research, from initial study startup through amendments and ongoing updates."
          />
          <div className="scope-list">
            {serviceScope.map(([title, copy]) => (
              <article className="scope-item" key={title}>
                <Icon name="document" size={23} />
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="From Source Protocol to Controlled Multilingual Study Content"
            intro="A strong protocol workflow does more than move text from one language to another. It creates a reliable multilingual baseline that can continue to support the study when content changes."
            mobileLeft
          />
          <LifecycleDiagram />
        </div>
      </section>

      <section className="pale-blue">
        <div className="shell terminology-layout">
          <div className="terminology-copy">
            <h2>Protocol Terminology Should Stay Consistent Across the Study</h2>
            <p className="lead-copy">
              Every clinical protocol develops its own language. Endpoints, eligibility criteria, investigational products, procedures, dosing, safety terminology, visits, assessments, and study-specific expressions may reappear across many downstream documents.
            </p>
            <div className="term-chip-wrap" aria-label="Examples of protocol terminology">
              {["Endpoints", "Eligibility Criteria", "Investigational Product", "Procedures", "Dosing", "Visits", "Safety Language", "Abbreviations"].map((term) => <span className="term-chip" key={term}>{term}</span>)}
            </div>
            <div className="term-callout">The goal is not simply to build a glossary. It is to create a reusable linguistic foundation that helps the multilingual study stay aligned over time.</div>
          </div>
          <div className="term-list">
            {terminologyItems.map(([title, copy]) => (
              <article className="term-row" key={title}>
                <Icon name="terminology" size={22} />
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            eyebrow="Amendment Management"
            title="Protocol Translation Has to Stay Controlled as the Study Changes"
            intro="The first approved protocol is rarely the end of the story. Eligibility criteria, visit schedules, procedures, safety information, endpoints, dosing, assessments, and operational requirements can change as the study progresses."
            mobileLeft
          />
          <div className="amendment-timeline" role="group" aria-label="Protocol amendment workflow from reviewed baseline through updated country versions">
            {amendmentSteps.map(([title, copy], index) => (
              <article className="amendment-node" key={title}>
                <div className="amendment-dot"><span>{String(index + 1).padStart(2,"0")}</span></div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <div className="amendment-benefits">
            <article className="benefit"><h3>Preserve Approved Language Where Appropriate</h3><p>Translation memory and version comparison can help avoid unnecessary retranslation of unchanged content.</p></article>
            <article className="benefit"><h3>Focus Review on What Changed</h3><p>Reviewers can concentrate attention on revised material while retaining the context of the approved protocol.</p></article>
            <article className="benefit"><h3>Maintain Terminology Across Versions</h3><p>Established terminology, abbreviations, endpoint language, and study-specific expressions remain available for future amendments.</p></article>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="shell connected-layout">
          <div className="connected-intro">
            <div className="eyebrow">Connected Clinical Content</div>
            <h2>Keep Protocol Language Connected Across the Study</h2>
            <p>
              A protocol sits within a larger clinical content ecosystem. Changes made at the protocol level may need to be reflected in participant-facing, site-facing, operational, safety, and data-collection materials.
            </p>
            <div className="note">
              Sesen helps maintain <strong>controlled linguistic consistency</strong>, not forced identical wording. Patient communication, data collection, regulatory content, and investigator instructions serve different audiences and may require different language choices even when they originate from the same study concept.
            </div>
          </div>
          <div className="connected-list">
            {connectedServices.map((item) => (
              <article className="connected-row" key={item.title}>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
                <ArrowLink href={item.link}>{item.label}</ArrowLink>
              </article>
            ))}
            <article className="connected-row">
              <div><h3>Clinical Site Documentation</h3><p>Study manuals, pharmacy and laboratory materials, worksheets, site communications, and operational guidance frequently rely on terminology and procedures established in the protocol.</p></div>
              <ArrowLink href="https://www.sesen.com/clinical-trial-translation-services/">Explore Clinical Trial Translation</ArrowLink>
            </article>
          </div>
        </div>
      </section>

      <section className="navy-section">
        <div className="shell">
          <SectionHeading
            title="One Protocol. Multiple Languages. Multiple Country Requirements."
            intro="Multinational clinical trials create a coordination challenge as much as a translation challenge. Sesen helps sponsors and CROs manage languages, regional variants, local review cycles, staggered launches, and amendments within a controlled multilingual workflow."
            mobileLeft
          />
          <div className="rollout-grid">
            {[
              ["globe", "Parallel Multilingual Translation", "Translate multiple target languages concurrently using shared terminology, reference materials, and project instructions."],
              ["terminology", "Country & Regional Variants", "Manage appropriate language variants and market-specific requirements without losing alignment with the global study."],
              ["document", "Staggered Study Launches", "Support language delivery according to country startup plans rather than forcing every target into a single release schedule."],
              ["people", "Local Reviewer Feedback", "Capture, evaluate, and implement approved sponsor or in-country reviewer changes within a controlled workflow."],
              ["amendment", "Amendment Propagation", "Use established terminology and translated assets when revised protocols move across an existing set of countries and languages."],
              ["qa", "Version Alignment", "Maintain clear source and target version identification so teams can distinguish current protocol content from superseded versions."],
            ].map(([icon,title,copy]) => (
              <article className="rollout-item" key={title}>
                <Icon name={icon} size={24} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="rollout-foot">
            Because language requirements vary across countries and review contexts, Sesen plans each rollout around the study, jurisdiction, document use, and sponsor requirements.
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Quality Controls Built for Complex Clinical Content"
            intro="Clinical protocols combine narrative medical content with tables, numbers, units, schedules, cross-references, abbreviations, statistical language, and tightly defined study terminology. Quality assurance has to account for all of them."
          />
          <div className="quality-grid">
            {qualityItems.map(([title, copy], index) => (
              <article className="quality-item" key={title}>
                <div className="quality-icon"><Icon name={index % 2 === 0 ? "qa" : "review"} size={22} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="human-note">
            <Icon name="people" size={25} />
            <p><strong>Human review remains central.</strong> Technology can identify potential issues, but clinical meaning, terminology choices, readability, and contextual judgment require qualified life sciences professionals.</p>
          </div>
        </div>
      </section>

      <section className="pale-blue">
        <div className="shell">
          <SectionHeading
            title="Smarter Protocol Workflows Without Removing Human Control"
            intro="Technology is most valuable when it helps teams improve consistency, identify change, reuse approved content, and focus expert attention where it matters."
          />
          <div className="tech-grid">
            {technologyItems.map(([title, copy], index) => (
              <article className="tech-item" key={title}>
                <div className="tech-head"><Icon name={index < 2 ? "terminology" : index < 4 ? "amendment" : "technology"} size={22} /><h3>{title}</h3></div>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="tech-principle">
            <Icon name="qa" size={27} />
            <p><strong>Qualified life sciences professionals remain responsible for contextual judgment and final linguistic quality.</strong> AI and automation are applied as workflow advantages—not as a substitute for expert review.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="shell regulatory-layout">
          <div className="regulatory-copy">
            <div className="eyebrow">Clinical &amp; Regulatory Context</div>
            <h2>Protocol Translation in a Global Clinical Environment</h2>
            <p>
              Protocol translation operates within a broader framework of Good Clinical Practice, regulatory review, ethics oversight, study operations, and country-specific requirements.
            </p>
            <div className="reg-note">
              Protocol language requirements vary by study and market. Sesen plans each workflow around the jurisdiction, recipient, intended use, and sponsor requirements so translated content is prepared for the context in which it will be reviewed or used.
            </div>
            <ArrowLink href="https://www.sesen.com/regulatory-translation-services/" className="regulatory-link">Explore Regulatory Translation Services</ArrowLink>
          </div>
          <div className="regulatory-list">
            <article className="regulatory-row"><h3>ICH E6(R3) Good Clinical Practice</h3><p>Current ICH GCP provides an international ethical, scientific, and quality framework for clinical trials involving human participants. Multilingual protocol content should remain fit for its intended clinical use within that quality-controlled environment.</p></article>
            <article className="regulatory-row"><h3>Regulatory &amp; Ethics Review</h3><p>Translated protocol content may support health authority submissions, ethics committee or institutional review, investigator/site use, sponsor processes, and country-specific clinical operations.</p></article>
            <article className="regulatory-row"><h3>Country-Specific Language Requirements</h3><p>Language expectations can vary by country, authority, ethics committee, document type, and intended use. Multilingual planning should reflect the requirements that actually apply to each study and market.</p></article>
            <article className="regulatory-row"><h3>Fit-for-Purpose Quality</h3><p>Protocol language intended for investigators, regulators, operational teams, and ethics reviewers serves different purposes from participant-facing materials derived from the same study.</p></article>
          </div>
        </div>
      </section>

      <section className="soft dense">
        <div className="shell">
          <div className="structured-panel">
            <div>
              <h2>Clinical Protocol Content Is Becoming More Structured</h2>
              <p>
                ICH M11, the Clinical electronic Structured Harmonised Protocol (CeSHarP) framework, provides a harmonized protocol template and technical specification designed to support more consistent protocol structure and interoperable electronic exchange. As protocol information becomes more reusable, multilingual workflows increasingly need to preserve more than document-level prose.
              </p>
              <p>
                Sesen can adapt multilingual workflows to traditional protocol documents and increasingly structured content models, with terminology, review, QA, and version control designed around the format and operational requirements of each program.
              </p>
            </div>
            <div className="structured-stack">
              {[
                ["Terminology", "Consistent representation of controlled clinical concepts across languages."],
                ["Content Relationships", "Awareness of how protocol elements connect to one another and downstream study content."],
                ["Structured Components", "Accurate handling of fields, tables, defined sections, and reusable elements."],
                ["Version History", "Clear management of what changed and which language versions reflect the current protocol."],
                ["Reusable Approved Language", "Carry validated terminology and translated content forward as study information is reused."],
              ].map(([title,copy]) => <article className="structured-item" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <SectionHeading
            title="Protocol Translation for Global Clinical Research Teams"
            intro="Sesen supports organizations managing clinical research across individual countries, regional programs, and complex multinational studies."
          />
          <div className="audience-list">
            {audiences.map(([title,copy]) => <article className="audience-item" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="pale-blue dense">
        <div className="shell expertise-split">
          <div className="expertise-panel">
            <h2>Clinical Expertise Across Therapeutic Areas</h2>
            <p>Protocol linguists need to understand how terminology functions within the study design, therapeutic area, patient population, procedures, endpoints, and clinical context.</p>
            <div className="therapy-tags">
              {therapeuticAreas.map((area) => <span className="therapy-tag" key={area}>{area}</span>)}
            </div>
          </div>
          <div className="expertise-panel">
            <h2>Protocol Translation in 150+ Languages</h2>
            <p>Whether a study requires one additional language or coordinated delivery across dozens of markets, Sesen can centralize terminology, project instructions, linguistic resources, reviewer feedback, translation memory, and recurring protocol updates.</p>
            <div className="language-number">150+</div>
            <div className="language-list">
              {["Native-language expertise", "Regional language variants", "Shared terminology framework", "Coordinated global delivery"].map((item) => <div className="language-point" key={item}><Icon name="check" size={18} /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell faq-wrap">
          <SectionHeading
            title="Protocol Translation FAQs"
            intro="Answers to common questions about multilingual protocol workflows, amendments, terminology, quality, and global delivery."
            mobileLeft
          />
          <FAQ />
        </div>
      </section>

      <section className="soft">
        <div className="shell">
          <SectionHeading
            title="Connected Clinical Trial Translation Services"
            intro="Protocol translation is one part of a broader multilingual clinical study. Sesen supports connected content across study startup, ethics review, participant communication, data collection, safety, digital trial experiences, and training."
            mobileLeft
          />
          <div className="related-grid">
            {[
              ["Clinical Trial Translation Services", "Support multilingual content across the clinical trial lifecycle, from study startup and informed consent through amendments, safety, digital trial content, and reporting.", "https://www.sesen.com/clinical-trial-translation-services/", "Explore Clinical Trial Translation"],
              ["Informed Consent Form Translation", "Translate ICFs, assent forms, re-consent materials, privacy documentation, and participant-facing content with attention to clinical meaning and readability.", "https://www.sesen.com/informed-consent-form-translation-services/", "Explore ICF Translation"],
              ["CRF Translation Services", "Maintain consistent clinical terminology across case report forms, field labels, instructions, assessments, visits, and multilingual data-collection workflows.", "https://www.sesen.com/crf-translation-services/", "Explore CRF Translation"],
              ["IRB Translation Services", "Prepare protocols, consent materials, supporting documentation, amendments, responses, and related multilingual content for institutional and ethics review workflows.", "https://www.sesen.com/irb-translation-services/", "Explore IRB Translation"],
              ["eCOA Translation Services", "Support multilingual clinical outcome assessments and digital data-collection experiences across ePRO, ClinRO, ObsRO, PerfO, questionnaire, device, and interface content.", "https://www.sesen.com/ecoa-translation-services/", "Explore eCOA Translation"],
              ["Pharmacovigilance Translation Services", "Support multilingual safety reporting and communication across adverse-event content, investigator updates, safety documentation, and ongoing pharmacovigilance workflows.", "https://www.sesen.com/pharmacovigilance-translation-services/", "Explore Pharmacovigilance Translation"],
            ].map(([title,copy,href,label]) => (
              <article className="related-card" key={title}>
                <h3>{title}</h3><p>{copy}</p><ArrowLink href={href}>{label}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <h2>Build a More Consistent Multilingual Study From the Protocol Forward</h2>
          <p>
            Sesen helps sponsors, CROs, and research teams carry the protocol's scientific, operational, and terminological foundation across languages—from initial translation and terminology control through expert review, amendments, related study documentation, and global rollout.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            <a className="btn btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
          </div>
        </div>
      </section>
    </main>
  );
}
