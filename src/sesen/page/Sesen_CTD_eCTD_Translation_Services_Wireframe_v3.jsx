import React, { useState } from "react";

const PAGE_ROOT = "sesen-page-ctd-ectd";

const URLS = {
  quote: "https://www.sesen.com/get-a-quote/",
  sendFiles: "https://www.sesen.com/send-file/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  submission: "https://www.sesen.com/regulatory-submission-translation-services/",
  formatting: "https://www.sesen.com/regulatory-submission-formatting/",
  cmc: "https://www.sesen.com/cmc-document-translation-services/",
  clinical: "https://www.sesen.com/clinical-trial-translation-services/",
  csr: "https://www.sesen.com/clinical-trial-translation-services/clinical-study-report-translation/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  quality: "https://www.sesen.com/quality-compliance-security/",
  resource:
    "https://www.sesen.com/resources/clinical-regulatory-knowledge/ctd-ectd-translation-considerations/",
};

const moduleData = [
  {
    number: "01",
    label: "MODULE 1",
    title: "Regional & Administrative",
    description:
      "Market- and authority-specific forms, product information, labeling-related content, correspondence, and administrative documentation.",
    tone: "regional",
  },
  {
    number: "02",
    label: "MODULE 2",
    title: "Summaries & Overviews",
    description:
      "High-level Quality, nonclinical, and clinical summaries that synthesize information presented in greater detail elsewhere in the dossier.",
    tone: "summary",
  },
  {
    number: "03",
    label: "MODULE 3",
    title: "Quality / CMC",
    description:
      "Drug substance and drug product information, manufacturing, controls, specifications, analytical procedures, validation, stability, and related quality content.",
    tone: "evidence",
  },
  {
    number: "04",
    label: "MODULE 4",
    title: "Nonclinical",
    description:
      "Pharmacology, pharmacokinetics, toxicology, nonclinical study reports, and supporting scientific evidence.",
    tone: "evidence",
  },
  {
    number: "05",
    label: "MODULE 5",
    title: "Clinical",
    description:
      "Clinical study reports and related clinical evidence supporting the safety, efficacy, and development history of the product.",
    tone: "evidence",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Initial Submission",
    copy:
      "Establish controlled terminology, translation memory, reference materials, module relationships, and review processes at the beginning of the multilingual program.",
  },
  {
    number: "02",
    title: "Authority Review",
    copy:
      "Keep translated dossier content, prior decisions, references, and source history available as regulatory review progresses.",
  },
  {
    number: "03",
    title: "Questions & Requests for Information",
    copy:
      "Support multilingual health authority correspondence, clarification requests, deficiency questions, and related regulatory communications.",
  },
  {
    number: "04",
    title: "Response & Updated Content",
    copy:
      "Apply approved terminology and prior translation decisions to revised dossier content while maintaining alignment with earlier submissions.",
  },
  {
    number: "05",
    title: "Variations, Supplements & Amendments",
    copy:
      "Manage changes to manufacturing, clinical, labeling, safety, administrative, and other regulatory content without unnecessarily retranslating unchanged material.",
  },
  {
    number: "06",
    title: "Renewals & Lifecycle Maintenance",
    copy:
      "Carry terminology, translation memory, version history, and reviewer decisions forward into ongoing regulatory activity.",
  },
];

const consistencyItems = [
  {
    title: "Product & Substance Terminology",
    copy:
      "Maintain approved names, compounds, dosage forms, routes of administration, formulations, and recurring product language across modules and versions.",
  },
  {
    title: "Manufacturing & Quality Terminology",
    copy:
      "Keep process descriptions, specifications, analytical terminology, materials, methods, and Quality concepts aligned between Module 3 and Module 2.",
  },
  {
    title: "Clinical & Nonclinical Terminology",
    copy:
      "Maintain study terminology, endpoints, safety language, findings, and conclusions between supporting reports and corresponding summaries.",
  },
  {
    title: "Numbers & Units",
    copy:
      "Check dosages, concentrations, specifications, measurements, statistical values, dates, and other quantitative content where translation errors can be especially consequential.",
  },
  {
    title: "Study & Document Identifiers",
    copy:
      "Preserve protocol numbers, study numbers, document identifiers, product codes, and other controlled references.",
  },
  {
    title: "Cross-References",
    copy:
      "Review references to dossier sections, tables, figures, appendices, and supporting documents so multilingual content remains navigable and internally consistent.",
  },
  {
    title: "Approved Language",
    copy:
      "Reuse previously approved or client-authorized terminology where appropriate instead of introducing unnecessary variation.",
  },
  {
    title: "Reviewer Decisions",
    copy:
      "Capture accepted regulatory, medical, scientific, CMC, clinical, or affiliate feedback so approved language can inform related documents and future updates.",
  },
  {
    title: "Version Relationships",
    copy:
      "Keep new translations connected to previous content so updated submissions do not lose the regulatory language history already established.",
  },
];

const versionItems = [
  {
    title: "Translation Memory",
    copy:
      "Reuse previously translated and reviewed content where source text has not materially changed.",
  },
  {
    title: "Approved Terminology",
    copy:
      "Maintain product, clinical, CMC, nonclinical, safety, and regulatory terminology across documents and versions.",
  },
  {
    title: "Reference Materials",
    copy:
      "Apply previous filings, approved labels, glossaries, style guides, regulatory references, and client instructions to future work.",
  },
  {
    title: "Reviewer Decisions",
    copy:
      "Preserve accepted reviewer feedback so resolved terminology and language choices are not repeatedly reopened.",
  },
  {
    title: "Change Analysis",
    copy:
      "Differentiate new or revised content from unchanged text to focus translation and review effort where it is needed.",
  },
  {
    title: "Version Control",
    copy:
      "Maintain visibility into source and target versions so teams can identify which multilingual files correspond to the current regulatory content.",
  },
  {
    title: "Controlled Reuse",
    copy:
      "Carry forward approved language while ensuring changes are reviewed in their new regulatory context rather than reused blindly.",
  },
];

const technologyItems = [
  {
    title: "Terminology Intelligence",
    copy:
      "Identify recurring product, scientific, CMC, clinical, and regulatory terminology and help harmonize it before inconsistencies spread through the dossier.",
  },
  {
    title: "Translation Memory",
    copy:
      "Leverage previously approved content to improve consistency and efficiency across related documents and later versions.",
  },
  {
    title: "AI-Assisted Quality Checks",
    copy:
      "Support detection of terminology deviations, number mismatches, unit inconsistencies, omissions, repeated-content differences, and other potential issues for human review.",
  },
  {
    title: "Version & Change Analysis",
    copy:
      "Help identify what changed between source versions so review effort can focus on meaningful revisions.",
  },
  {
    title: "Cross-Document Consistency",
    copy:
      "Compare recurring language and references across related submission content rather than reviewing every document only as a standalone file.",
  },
  {
    title: "Expert Human Review",
    copy:
      "Qualified linguists and reviewers remain responsible for evaluating meaning, terminology, scientific context, regulatory language, and final translation quality.",
  },
];

const qaSteps = [
  {
    n: "01",
    title: "Project Intake & Scope Review",
    copy:
      "Review source files, languages, regulatory context, module relationships, references, formatting needs, timelines, and intended use.",
  },
  {
    n: "02",
    title: "Subject-Matter Linguist Assignment",
    copy:
      "Match professional native linguists and reviewers to the pharmaceutical, clinical, Quality/CMC, nonclinical, or regulatory subject matter involved.",
  },
  {
    n: "03",
    title: "Terminology & Reference Alignment",
    copy:
      "Prepare glossaries, translation memory, previous submissions, approved language, product terminology, style guidance, and reviewer instructions.",
  },
  {
    n: "04",
    title: "Translation & Independent Review",
    copy:
      "Translate for accuracy and regulatory context, followed by qualified bilingual review where required by the agreed workflow.",
  },
  {
    n: "05",
    title: "Automated & AI-Assisted QA",
    copy:
      "Check terminology, numbers, units, completeness, formatting, repeated content, and other high-risk elements.",
  },
  {
    n: "06",
    title: "Formatting & File Verification",
    copy:
      "Confirm that multilingual content remains usable in its intended document environment and that text, tables, references, and structure have been preserved.",
  },
  {
    n: "07",
    title: "Final Quality Assurance",
    copy:
      "Reconcile deliverables against source files, project requirements, approved terminology, and the agreed language scope before delivery.",
  },
  {
    n: "08",
    title: "Review & Lifecycle Continuity",
    copy:
      "Capture approved client feedback and maintain relevant translation assets for future regulatory updates.",
  },
];

const useCases = [
  {
    title: "New Market Submission",
    copy:
      "Reuse an existing scientific dossier while translating the content required for an additional country, region, or regulatory pathway.",
  },
  {
    title: "Module 2 Translation",
    copy:
      "Translate Quality, nonclinical, or clinical summaries while maintaining terminology alignment with the supporting Modules 3–5 content.",
  },
  {
    title: "Module 3 / CMC Program",
    copy:
      "Manage high-volume Quality and manufacturing content using controlled terminology, translation memory, and specialized CMC linguists.",
  },
  {
    title: "Health Authority Response",
    copy:
      "Translate questions, responses, clarification packages, and revised content while carrying forward terminology from the original submission.",
  },
  {
    title: "Manufacturing Change or Variation",
    copy:
      "Update affected multilingual Quality content and maintain consistency with related summaries, regional documentation, and previous versions.",
  },
  {
    title: "Clinical Update",
    copy:
      "Incorporate new or revised clinical evidence while maintaining alignment between Module 5 documentation and Module 2 clinical summaries.",
  },
  {
    title: "Multi-Market Dossier",
    copy:
      "Coordinate shared source content across multiple languages while accommodating market-specific Module 1 and regional requirements.",
  },
  {
    title: "Long-Term Lifecycle Maintenance",
    copy:
      "Maintain translation assets, terminology, reviewer decisions, and version history across recurring regulatory updates.",
  },
];

const relatedServices = [
  {
    title: "Regulatory Translation Services",
    copy:
      "Multilingual support across regulatory submissions, health authority communications, labeling, compliance documentation, and product lifecycle content.",
    href: URLS.regulatory,
    linkLabel: "Explore Regulatory Translation",
  },
  {
    title: "Regulatory Submission Translation Services",
    copy:
      "Coordinate terminology, translation, review, formatting, and delivery across complex multilingual submission programs.",
    href: URLS.submission,
    linkLabel: "Explore Submission Translation",
  },
  {
    title: "CMC Translation Services",
    copy:
      "Specialized translation for manufacturing, analytical, formulation, validation, specifications, stability, and other Quality/CMC content.",
    href: URLS.cmc,
    linkLabel: "Explore CMC Translation",
  },
  {
    title: "Clinical Trial Translation Services",
    copy:
      "Multilingual support for protocols, informed consent, investigator materials, clinical documentation, site content, and patient-facing trial materials.",
    href: URLS.clinical,
    linkLabel: "Explore Clinical Trial Translation",
  },
  {
    title: "Medical & Scientific Translation Services",
    copy:
      "Specialized translation for scientific reports, research content, medical communications, publications, and technical life sciences materials.",
    href: URLS.medicalScientific,
    linkLabel: "Explore Medical & Scientific Translation",
  },
  {
    title: "Regulatory Submission Formatting",
    copy:
      "Multilingual document formatting, structure, bookmarking, hyperlinking, PDF preparation, and downstream submission-workflow support.",
    href: URLS.formatting,
    linkLabel: "Explore Submission Formatting",
  },
];

const faqData = [
  {
    q: "What is the difference between CTD and eCTD?",
    a:
      "The Common Technical Document, or CTD, defines the standardized organization of regulatory information used in pharmaceutical submissions. The electronic Common Technical Document, or eCTD, provides the structured electronic submission environment used to transmit and maintain that regulatory content. In practical terms, CTD defines the content architecture, while eCTD adds the electronic structure and lifecycle used for submission and subsequent regulatory activity.",
  },
  {
    q: "What are the five CTD modules?",
    a:
      "Module 1 contains regional administrative and product information and is specific to the applicable regulatory region. Modules 2–5 follow the harmonized CTD structure: Module 2 contains summaries and overviews, Module 3 covers Quality/CMC, Module 4 contains nonclinical study information, and Module 5 contains clinical study reports and supporting clinical evidence.",
  },
  {
    q: "Can Sesen translate all five CTD modules?",
    a:
      "Yes. Sesen supports multilingual content across Modules 1–5. The actual translation scope depends on the target market, authority, submission pathway, source documentation, regulatory stage, language requirements, and client needs.",
  },
  {
    q: "Is Module 1 the same in every market?",
    a:
      "No. Module 1 is region-specific. Administrative forms, product information, labeling-related documents, correspondence, and other Module 1 content vary according to the applicable health authority and regional requirements.",
  },
  {
    q: "Why is Module 2 especially important in multilingual CTD translation?",
    a:
      "Module 2 contains high-level Quality, nonclinical, and clinical summaries and overviews that draw from the more detailed evidence in Modules 3, 4, and 5. Terminology, values, findings, and conclusions therefore need to remain consistent between the summary layer and the underlying supporting documentation.",
  },
  {
    q: "How does Sesen maintain consistency across CTD modules?",
    a:
      "Sesen can use client-approved glossaries, terminology databases, translation memory, previous submissions, product information, regulatory references, reviewer decisions, style guides, and automated quality checks to help maintain consistency across connected dossier content. Qualified human linguists and reviewers validate the final language in context.",
  },
  {
    q: "Can Sesen translate Module 3 CMC content?",
    a:
      "Yes. Sesen provides specialized translation for Quality and CMC documentation, including drug substance and drug product information, manufacturing processes, specifications, analytical methods, validation, stability content, and related regulatory documentation.",
  },
  {
    q: "Does Sesen translate clinical content for Module 5?",
    a:
      "Yes. Sesen supports clinical study reports and related clinical evidence used within Module 5, as well as broader clinical trial documentation through its dedicated Clinical Trial Translation Services.",
  },
  {
    q: "Can Sesen support authority questions and response packages?",
    a:
      "Yes. Sesen can support multilingual health authority correspondence, requests for information, clarification packages, deficiency responses, revised submission content, and related regulatory communications. When prior translations are available, terminology, translation memory, reference materials, and approved reviewer decisions can help maintain continuity with the original filing.",
  },
  {
    q: "Can Sesen support variations, supplements, amendments, and lifecycle updates?",
    a:
      "Yes. Sesen supports recurring regulatory changes after the initial submission. Depending on the program, this can include updated Quality content, clinical evidence, labeling-related material, safety information, regional documentation, responses, variations, supplements, amendments, and other lifecycle content.",
  },
  {
    q: "Can previous CTD translations be reused?",
    a:
      "Yes, where appropriate. Translation memory and previous approved translations can help identify unchanged or recurring content and improve consistency. Reuse should still be evaluated against the current source, context, terminology, and regulatory requirements rather than applied automatically.",
  },
  {
    q: "How does Sesen handle terminology across Module 2 and Modules 3–5?",
    a:
      "Sesen can establish controlled terminology before or during the translation program using source documentation, glossaries, existing translations, product terminology, reviewer input, and translation memory. Cross-document QA can then help identify deviations between Module 2 summaries and the corresponding detailed Quality, nonclinical, or clinical content.",
  },
  {
    q: "Does Sesen support eCTD v4.0?",
    a:
      "Sesen supports translation and multilingual document preparation for regulatory programs operating in today’s evolving eCTD environment, including programs moving toward eCTD v4.0. The exact technical scope depends on the client’s regulatory publishing environment, target authority, regional requirements, and required deliverables.",
  },
  {
    q: "Does Sesen publish complete eCTD sequences?",
    a:
      "Sesen’s core role on this page is multilingual regulatory translation and document preparation. Technical formatting and publishing-related support can be incorporated according to the agreed project scope and client workflow. Clients requiring specialized eCTD formatting or publishing support should discuss their technical requirements with the Sesen team during project planning.",
  },
  {
    q: "Can Sesen support multiple regulatory markets at the same time?",
    a:
      "Yes. Sesen supports multilingual regulatory programs across major global markets in more than 150 languages. Programs can be organized around shared source content while accounting for target-market language requirements, regional Module 1 content, local reviewer involvement, and differing regulatory timelines.",
  },
  {
    q: "What quality controls does Sesen use for CTD and eCTD translation?",
    a:
      "Depending on scope, quality controls can include specialist linguist selection, independent bilingual review, terminology management, translation memory, reference alignment, numerical and unit checks, completeness checks, cross-document consistency review, formatting verification, AI-assisted QA, final human quality assurance, and controlled client review.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 9h10M9.8 5.3 13.5 9l-3.7 3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 22 22"
      width="22"
      height="22"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m7.2 11.2 2.5 2.5 5.4-5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function HeroDossierGraphic() {
  return (
    <svg
      className="hero-dossier-graphic"
      viewBox="0 0 570 505"
      role="img"
      aria-label="CTD dossier diagram showing Module 2 connected to Modules 3, 4, and 5 with a regulatory lifecycle beneath"
    >
      <defs>
        <linearGradient id="heroPanelFade" x1="0" x2="1">
          <stop offset="0%" stopColor="#F7F9FD" />
          <stop offset="100%" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>

      <rect x="22" y="18" width="526" height="468" rx="34" fill="url(#heroPanelFade)" />
      <circle cx="467" cy="84" r="46" fill="#FFFFFF" opacity=".85" />
      <circle cx="77" cy="405" r="31" fill="#FFFFFF" opacity=".72" />

      <g stroke="#AFC0EA" strokeWidth="2" fill="none">
        <path d="M285 114v44" strokeDasharray="5 5" />
        <path d="M285 231v24" />
        <path d="M285 255H146v35" />
        <path d="M285 255v35" />
        <path d="M285 255h139v35" />
      </g>

      <g>
        <rect x="187" y="55" width="196" height="61" rx="18" fill="#FFFFFF" stroke="#DDE4F2" />
        <text x="285" y="78" textAnchor="middle" fill="#3659BB" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" letterSpacing="1.4">
          MODULE 1
        </text>
        <text x="285" y="99" textAnchor="middle" fill="#17264D" fontFamily="Inter Tight, Arial" fontSize="16" fontWeight="500">
          Regional & Administrative
        </text>
      </g>

      <g>
        <rect x="157" y="158" width="256" height="75" rx="20" fill="#4B6FD8" />
        <text x="285" y="184" textAnchor="middle" fill="#EAF0FF" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" letterSpacing="1.4">
          MODULE 2
        </text>
        <text x="285" y="209" textAnchor="middle" fill="#FFFFFF" fontFamily="Inter Tight, Arial" fontSize="18" fontWeight="500">
          Summaries & Overviews
        </text>
      </g>

      {[
        { x: 65, label: "MODULE 3", title: "Quality / CMC" },
        { x: 203, label: "MODULE 4", title: "Nonclinical" },
        { x: 341, label: "MODULE 5", title: "Clinical" },
      ].map((item) => (
        <g key={item.label}>
          <rect x={item.x} y="290" width="128" height="77" rx="18" fill="#FFFFFF" stroke="#DDE4F2" />
          <text x={item.x + 64} y="317" textAnchor="middle" fill="#3659BB" fontFamily="Inter, Arial" fontSize="10" fontWeight="700" letterSpacing="1.15">
            {item.label}
          </text>
          <text x={item.x + 64} y="342" textAnchor="middle" fill="#17264D" fontFamily="Inter Tight, Arial" fontSize="15" fontWeight="500">
            {item.title}
          </text>
        </g>
      ))}

      <g transform="translate(62 404)">
        <text x="0" y="0" fill="#68758B" fontFamily="Inter, Arial" fontSize="10" fontWeight="700" letterSpacing="1.3">
          REGULATORY LIFECYCLE
        </text>
        <line x1="0" y1="31" x2="430" y2="31" stroke="#B8C7E8" strokeWidth="2" />
        {[0, 107, 215, 323, 430].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy="31" r={index === 0 ? 7 : 5.5} fill={index === 0 ? "#4B6FD8" : "#FFFFFF"} stroke="#4B6FD8" strokeWidth="2" />
          </g>
        ))}
        <g fill="#46546D" fontFamily="Inter, Arial" fontSize="9.5">
          <text x="0" y="56" textAnchor="start">Initial</text>
          <text x="107" y="56" textAnchor="middle">Review</text>
          <text x="215" y="56" textAnchor="middle">Response</text>
          <text x="323" y="56" textAnchor="middle">Changes</text>
          <text x="430" y="56" textAnchor="end">Maintain</text>
        </g>
      </g>
    </svg>
  );
}

function ModuleArchitectureGraphic() {
  return (
    <div
      className="module-architecture-graphic"
      role="img"
      aria-label="Connected CTD architecture showing region-specific Module 1 and harmonized Modules 2 through 5, with Module 2 connected to Quality, nonclinical, and clinical evidence"
    >
      <div className="architecture-row architecture-top">
        <div className="architecture-node node-module-1">
          <span>MODULE 1</span>
          <strong>Regional & Administrative</strong>
          <small>Region-specific layer</small>
        </div>
      </div>

      <div className="architecture-vertical" aria-hidden="true" />

      <div className="architecture-row">
        <div className="architecture-node node-module-2">
          <span>MODULE 2</span>
          <strong>Summaries & Overviews</strong>
          <small>Summary layer across the harmonized CTD core</small>
        </div>
      </div>

      <div className="architecture-branch" aria-hidden="true">
        <div />
        <div />
        <div />
      </div>
      <div className="architecture-mobile-branch-label" aria-hidden="true">
        SUMMARIZES EVIDENCE FROM
      </div>

      <div className="architecture-row architecture-evidence">
        {moduleData.slice(2).map((module) => (
          <div className="architecture-node node-evidence" key={module.label}>
            <span>{module.label}</span>
            <strong>{module.title}</strong>
          </div>
        ))}
      </div>

      <div className="language-control-band">
        <span className="control-label">SHARED MULTILINGUAL CONTROLS</span>
        <div className="control-items">
          <span>Terminology</span>
          <span>References</span>
          <span>Numbers & Units</span>
          <span>Versions</span>
          <span>Approved Language</span>
          <span>Reviewer Decisions</span>
        </div>
      </div>
    </div>
  );
}

function DossierLifecycleMatrix() {
  const columns = [
    "Initial Submission",
    "Authority Review",
    "Authority Questions",
    "Response / Updates",
    "Variations / Amendments",
    "Lifecycle Maintenance",
  ];
  return (
    <div className="matrix-wrap">
      <div className="matrix-desktop">
        <div className="matrix-caption-row">
          <span>DOSSIER ARCHITECTURE</span>
          <span>REGULATORY LIFECYCLE →</span>
        </div>
        <div className="matrix-grid">
          <div className="matrix-corner" />
          {columns.map((item) => (
            <div className="matrix-column-head" key={item}>
              {item}
            </div>
          ))}
          {moduleData.map((module, rowIndex) => (
            <React.Fragment key={module.label}>
              <div className="matrix-row-head">
                <span>{module.label}</span>
                <strong>{module.title}</strong>
              </div>
              {columns.map((col, colIndex) => (
                <div
                  className={`matrix-cell ${
                    rowIndex === 1 ? "matrix-summary-row" : ""
                  } ${colIndex === 0 ? "matrix-first-col" : ""}`}
                  key={`${module.label}-${col}`}
                  aria-hidden="true"
                >
                  <span />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="matrix-mobile">
        <div className="matrix-mobile-axis">
          <div className="matrix-mobile-label">DOSSIER ARCHITECTURE</div>
          <div className="matrix-mobile-modules">
            {moduleData.map((module, rowIndex) => (
              <div
                className={`matrix-mobile-module ${rowIndex === 1 ? "is-summary" : ""}`}
                key={`mobile-${module.label}`}
              >
                <span>{module.label}</span>
                <strong>{module.title}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="matrix-mobile-cross" aria-hidden="true">×</div>

        <div className="matrix-mobile-axis">
          <div className="matrix-mobile-label">REGULATORY LIFECYCLE</div>
          <div className="matrix-mobile-life">
            {columns.map((col, colIndex) => (
              <div className="matrix-mobile-stage" key={`mobile-life-${col}`}>
                <span
                  className={`matrix-mobile-dot ${colIndex === 0 ? "is-first" : ""}`}
                  aria-hidden="true"
                />
                <span>{col}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="matrix-control">
        <strong>ONE CONTROLLED MULTILINGUAL HISTORY</strong>
        <span>
          Terminology · references · versions · reviewer decisions · approved language
        </span>
      </div>
    </div>
  );
}

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const panelId = `ctd-faq-panel-${index}`;
  const buttonId = `ctd-faq-button-${index}`;

  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          className="faq-question"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setOpenIndex(isOpen ? -1 : index)}
        >
          <span>{item.q}</span>
          <span className="faq-icon" aria-hidden="true">
            <span className="faq-icon-h" />
            <span className="faq-icon-v" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function CtdEctdTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={PAGE_ROOT}>
      <style>{`
        .${PAGE_ROOT} {
          --sesen-blue: #4B6FD8;
          --sesen-blue-dark: #3659BB;
          --sesen-deep-blue: #253F8F;
          --sesen-mid-blue: #6F8BE1;
          --sesen-soft-blue: #EAF0FF;
          --sesen-pale-blue: #F5F7FF;
          --sesen-navy: #17264D;
          --sesen-ink: #111827;
          --sesen-body: #46546D;
          --sesen-muted: #68758B;
          --sesen-border: #DDE4F2;
          --sesen-divider: #E9EEF8;
          --sesen-soft: #F7F9FD;
          --sesen-white: #FFFFFF;
          --sesen-light-eyebrow: #C8D6FF;
          color: var(--sesen-body);
          background: var(--sesen-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .${PAGE_ROOT} *,
        .${PAGE_ROOT} *::before,
        .${PAGE_ROOT} *::after {
          box-sizing: border-box;
        }

        .${PAGE_ROOT} a,
        .${PAGE_ROOT} button {
          font: inherit;
        }

        .${PAGE_ROOT} a {
          color: inherit;
          text-decoration: none;
        }

        .${PAGE_ROOT} img,
        .${PAGE_ROOT} svg {
          max-width: 100%;
        }

        .${PAGE_ROOT} .container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .${PAGE_ROOT} .section {
          padding-block: 96px;
          position: relative;
        }

        .${PAGE_ROOT} .section-dense {
          padding-block: 80px;
        }

        .${PAGE_ROOT} .section-soft {
          background: var(--sesen-soft);
        }

        .${PAGE_ROOT} .section-blue-soft {
          background: var(--sesen-pale-blue);
        }

        .${PAGE_ROOT} .section-dark {
          background: var(--sesen-navy);
          color: #FFFFFF;
        }

        .${PAGE_ROOT} h1,
        .${PAGE_ROOT} h2,
        .${PAGE_ROOT} h3 {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-weight: 500;
          color: var(--sesen-navy);
          margin: 0;
        }

        .${PAGE_ROOT} h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .${PAGE_ROOT} h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .${PAGE_ROOT} h3 {
          font-size: 22px;
          line-height: 1.3;
        }

        .${PAGE_ROOT} p {
          margin: 0;
          color: var(--sesen-body);
          font-size: 16px;
        }

        .${PAGE_ROOT} h1,
        .${PAGE_ROOT} h2,
        .${PAGE_ROOT} h3,
        .${PAGE_ROOT} p,
        .${PAGE_ROOT} li,
        .${PAGE_ROOT} .editorial-link span,
        .${PAGE_ROOT} .global-scope div,
        .${PAGE_ROOT} .ectd-check span,
        .${PAGE_ROOT} .related-row > *,
        .${PAGE_ROOT} .faq-question > span:first-child {
          overflow-wrap: break-word;
          word-break: normal;
        }

        .${PAGE_ROOT} .lead {
          font-size: 19px;
          line-height: 1.7;
          color: #293954;
        }

        .${PAGE_ROOT} .eyebrow {
          display: block;
          margin-bottom: 16px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .section-heading {
          max-width: 820px;
          margin-bottom: 42px;
        }

        .${PAGE_ROOT} .section-heading.centered {
          margin-inline: auto;
          text-align: center;
        }

        .${PAGE_ROOT} .section-heading p {
          max-width: 780px;
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.72;
        }

        .${PAGE_ROOT} .section-heading.centered p {
          margin-inline: auto;
        }

        .${PAGE_ROOT} .btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 25px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .035em;
          line-height: 1.2;
          text-transform: uppercase;
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }

        .${PAGE_ROOT} .btn:hover {
          transform: translateY(-1px);
        }

        .${PAGE_ROOT} .btn:focus-visible,
        .${PAGE_ROOT} .editorial-link:focus-visible,
        .${PAGE_ROOT} .faq-question:focus-visible {
          outline: 3px solid rgba(75, 111, 216, .35);
          outline-offset: 4px;
        }

        .${PAGE_ROOT} .btn-primary {
          color: #FFFFFF;
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .btn-primary:hover {
          color: #FFFFFF;
          background: var(--sesen-blue-dark);
        }

        .${PAGE_ROOT} .btn-secondary {
          color: var(--sesen-ink);
          background: #FFFFFF;
          border-color: #C8D4EC;
        }

        .${PAGE_ROOT} .btn-secondary:hover {
          color: var(--sesen-ink);
          background: var(--sesen-soft-blue);
          border-color: #A9BCE7;
        }

        .${PAGE_ROOT} .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sesen-blue-dark);
          font-weight: 700;
          line-height: 1.4;
        }

        .${PAGE_ROOT} .editorial-link span {
          border-bottom: 1px solid transparent;
          transition: border-color .2s ease;
        }

        .${PAGE_ROOT} .editorial-link:hover span {
          border-bottom-color: currentColor;
        }

        .${PAGE_ROOT} .hero {
          padding-block: 96px 90px;
          background:
            radial-gradient(circle at 87% 18%, rgba(75,111,216,.08), transparent 30%),
            linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
        }

        .${PAGE_ROOT} .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr);
          gap: 68px;
          align-items: center;
        }

        .${PAGE_ROOT} .hero-copy,
        .${PAGE_ROOT} .hero-art {
          min-width: 0;
        }

        .${PAGE_ROOT} .hero-copy {
          max-width: 690px;
        }

        .${PAGE_ROOT} .hero-copy .lead {
          margin-top: 24px;
        }

        .${PAGE_ROOT} .hero-copy .hero-support {
          margin-top: 17px;
          max-width: 665px;
          font-size: 17px;
          line-height: 1.7;
        }

        .${PAGE_ROOT} .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .${PAGE_ROOT} .hero-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin-top: 28px;
          color: var(--sesen-muted);
          font-size: 13px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .hero-proof span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .${PAGE_ROOT} .hero-proof span::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--sesen-blue);
          flex: 0 0 auto;
        }

        .${PAGE_ROOT} .hero-art {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .${PAGE_ROOT} .hero-dossier-graphic {
          width: min(100%, 570px);
          height: auto;
          display: block;
        }

        .${PAGE_ROOT} .trust-band {
          border-top: 1px solid var(--sesen-divider);
          border-bottom: 1px solid var(--sesen-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .${PAGE_ROOT} .trust-item {
          min-width: 0;
          padding: 26px 22px;
          text-align: center;
        }

        .${PAGE_ROOT} .trust-item strong {
          display: block;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .trust-item span {
          display: block;
          margin-top: 5px;
          color: var(--sesen-muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .${PAGE_ROOT} .trust-item + .trust-item {
          border-left: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .problem-grid {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .problem-copy {
          min-width: 0;
        }

        .${PAGE_ROOT} .problem-copy p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .problem-callout {
          margin-top: 30px;
          padding: 24px 26px;
          border-left: 3px solid var(--sesen-blue);
          background: var(--sesen-pale-blue);
          border-radius: 0 18px 18px 0;
        }

        .${PAGE_ROOT} .problem-callout strong {
          display: block;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.42;
        }

        .${PAGE_ROOT} .connection-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 34px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .connection-list div {
          min-width: 0;
          padding: 18px 0;
          border-bottom: 1px solid var(--sesen-divider);
          color: var(--sesen-body);
          font-size: 16px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .architecture-wrap {
          margin-top: 44px;
        }

        .${PAGE_ROOT} .module-architecture-graphic {
          padding: 48px;
          border: 1px solid var(--sesen-border);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 55px rgba(23,38,77,.055);
          overflow: hidden;
        }

        .${PAGE_ROOT} .architecture-row {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .${PAGE_ROOT} .architecture-node {
          width: 300px;
          max-width: 100%;
          min-width: 0;
          padding: 19px 22px;
          border: 1px solid var(--sesen-border);
          border-radius: 20px;
          background: #FFFFFF;
          text-align: center;
        }

        .${PAGE_ROOT} .architecture-node span {
          display: block;
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: .14em;
        }

        .${PAGE_ROOT} .architecture-node strong {
          display: block;
          margin-top: 5px;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .architecture-node small {
          display: block;
          margin-top: 5px;
          color: var(--sesen-muted);
          font-size: 13px;
          line-height: 1.4;
        }

        .${PAGE_ROOT} .node-module-2 {
          width: 360px;
          border-color: var(--sesen-blue);
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .node-module-2 span {
          color: #E7EDFF;
        }

        .${PAGE_ROOT} .node-module-2 strong,
        .${PAGE_ROOT} .node-module-2 small {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .architecture-vertical {
          width: 2px;
          height: 38px;
          margin: 0 auto;
          background: repeating-linear-gradient(
            to bottom,
            #AFC0EA 0,
            #AFC0EA 5px,
            transparent 5px,
            transparent 10px
          );
        }

        .${PAGE_ROOT} .architecture-mobile-branch-label {
          display: none;
        }

        .${PAGE_ROOT} .architecture-branch {
          width: min(72%, 760px);
          height: 56px;
          margin: 0 auto;
          position: relative;
        }

        .${PAGE_ROOT} .architecture-branch::before {
          content: "";
          position: absolute;
          left: 12%;
          right: 12%;
          top: 27px;
          height: 2px;
          background: #B7C6E7;
        }

        .${PAGE_ROOT} .architecture-branch::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 28px;
          background: #B7C6E7;
          transform: translateX(-1px);
        }

        .${PAGE_ROOT} .architecture-branch div {
          position: absolute;
          top: 27px;
          width: 2px;
          height: 29px;
          background: #B7C6E7;
        }

        .${PAGE_ROOT} .architecture-branch div:nth-child(1) { left: 12%; }
        .${PAGE_ROOT} .architecture-branch div:nth-child(2) { left: 50%; }
        .${PAGE_ROOT} .architecture-branch div:nth-child(3) { right: 12%; }

        .${PAGE_ROOT} .architecture-evidence {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .${PAGE_ROOT} .node-evidence {
          width: auto;
        }

        .${PAGE_ROOT} .language-control-band {
          margin-top: 34px;
          padding: 22px 26px;
          border-radius: 18px;
          background: var(--sesen-pale-blue);
          text-align: center;
        }

        .${PAGE_ROOT} .control-label {
          display: block;
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
        }

        .${PAGE_ROOT} .control-items {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px 24px;
          margin-top: 10px;
          color: var(--sesen-navy);
          font-size: 14px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .module-note {
          max-width: 880px;
          margin: 28px auto 0;
          text-align: center;
          color: var(--sesen-body);
          font-size: 17px;
          line-height: 1.7;
        }

        .${PAGE_ROOT} .module-section {
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .module-editorial {
          display: grid;
          grid-template-columns: minmax(0, .7fr) minmax(0, 1.3fr);
          gap: 74px;
          align-items: start;
        }

        .${PAGE_ROOT} .module-intro {
          position: sticky;
          top: 24px;
          min-width: 0;
        }

        .${PAGE_ROOT} .module-number {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
        }

        .${PAGE_ROOT} .module-number::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .module-body {
          min-width: 0;
        }

        .${PAGE_ROOT} .module-body > p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .scope-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 26px;
          margin: 28px 0;
          padding: 0;
          list-style: none;
        }

        .${PAGE_ROOT} .scope-list li {
          display: flex;
          gap: 10px;
          min-width: 0;
          color: var(--sesen-body);
          font-size: 16px;
          line-height: 1.55;
        }

        .${PAGE_ROOT} .scope-list li::before {
          content: "";
          width: 7px;
          height: 7px;
          margin-top: .55em;
          flex: 0 0 auto;
          border-radius: 999px;
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .module-subgrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 28px;
        }

        .${PAGE_ROOT} .module-subitem {
          min-width: 0;
          padding-top: 18px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .module-subitem h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .module-subitem p {
          margin-top: 9px;
        }

        .${PAGE_ROOT} .module-body .editorial-link {
          margin-top: 24px;
        }

        .${PAGE_ROOT} .module-related-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
          margin-top: 24px;
        }

        .${PAGE_ROOT} .module-related-links .editorial-link {
          margin-top: 0;
        }

        .${PAGE_ROOT} .consistency-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 32px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .consistency-item {
          min-width: 0;
          padding: 26px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .consistency-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .consistency-item p {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .lifecycle-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 22px;
          margin-top: 48px;
        }

        .${PAGE_ROOT} .lifecycle-rail::before {
          content: "";
          position: absolute;
          top: 23px;
          left: 2%;
          right: 2%;
          height: 2px;
          background: #B8C7E8;
        }

        .${PAGE_ROOT} .lifecycle-step {
          position: relative;
          min-width: 0;
          padding-top: 54px;
        }

        .${PAGE_ROOT} .lifecycle-dot {
          position: absolute;
          z-index: 1;
          top: 14px;
          left: 0;
          display: flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border: 2px solid var(--sesen-blue);
          border-radius: 50%;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .lifecycle-step:first-child .lifecycle-dot {
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .lifecycle-step h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .lifecycle-step p {
          margin-top: 9px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .lifecycle-step .step-label {
          display: block;
          margin-bottom: 7px;
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
        }

        .${PAGE_ROOT} .matrix-wrap {
          margin-top: 44px;
          padding: 34px;
          border: 1px solid var(--sesen-border);
          border-radius: 28px;
          background: #FFFFFF;
          overflow: hidden;
        }

        .${PAGE_ROOT} .matrix-caption-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 15px;
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
        }

        .${PAGE_ROOT} .matrix-grid {
          display: grid;
          grid-template-columns: 178px repeat(6, minmax(92px, 1fr));
          border-top: 1px solid var(--sesen-border);
          border-left: 1px solid var(--sesen-border);
        }

        .${PAGE_ROOT} .matrix-grid > div {
          min-width: 0;
          min-height: 66px;
          border-right: 1px solid var(--sesen-border);
          border-bottom: 1px solid var(--sesen-border);
        }

        .${PAGE_ROOT} .matrix-column-head {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          color: var(--sesen-navy);
          background: var(--sesen-soft);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.35;
          text-align: center;
        }

        .${PAGE_ROOT} .matrix-row-head {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 12px 15px;
          background: var(--sesen-soft);
        }

        .${PAGE_ROOT} .matrix-row-head span {
          color: var(--sesen-blue-dark);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .${PAGE_ROOT} .matrix-row-head strong {
          margin-top: 4px;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .matrix-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .matrix-cell span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #C4D0EB;
        }

        .${PAGE_ROOT} .matrix-summary-row {
          background: #F0F4FF;
        }

        .${PAGE_ROOT} .matrix-summary-row span {
          width: 10px;
          height: 10px;
          background: var(--sesen-blue);
          box-shadow: 0 0 0 4px rgba(75,111,216,.12);
        }

        .${PAGE_ROOT} .matrix-first-col span {
          background: var(--sesen-blue-dark);
        }

        .${PAGE_ROOT} .matrix-control {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 22px;
          margin-top: 18px;
          padding: 18px 20px;
          border-radius: 16px;
          background: var(--sesen-pale-blue);
        }

        .${PAGE_ROOT} .matrix-control strong {
          color: var(--sesen-navy);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .04em;
        }

        .${PAGE_ROOT} .matrix-control span {
          color: var(--sesen-body);
          font-size: 14px;
          text-align: right;
        }

        .${PAGE_ROOT} .matrix-mobile {
          display: none;
        }

        .${PAGE_ROOT} .matrix-mobile-axis {
          min-width: 0;
        }

        .${PAGE_ROOT} .matrix-mobile-label {
          margin-bottom: 12px;
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
        }

        .${PAGE_ROOT} .matrix-mobile-modules {
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .matrix-mobile-module {
          display: grid;
          grid-template-columns: 82px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          min-width: 0;
          padding: 15px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .matrix-mobile-module.is-summary {
          margin-inline: -10px;
          padding-inline: 10px;
          border-radius: 12px;
          background: #F0F4FF;
        }

        .${PAGE_ROOT} .matrix-mobile-module span {
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .${PAGE_ROOT} .matrix-mobile-module strong {
          min-width: 0;
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .matrix-mobile-cross {
          margin: 22px 0;
          color: var(--sesen-blue);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 30px;
          font-weight: 500;
          line-height: 1;
          text-align: center;
        }

        .${PAGE_ROOT} .matrix-mobile-life {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          padding-left: 12px;
        }

        .${PAGE_ROOT} .matrix-mobile-stage {
          position: relative;
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 9px;
          align-items: center;
          min-width: 0;
          min-height: 42px;
          color: var(--sesen-body);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
          text-align: left;
        }

        .${PAGE_ROOT} .matrix-mobile-stage::before {
          content: "";
          position: absolute;
          left: 4px;
          top: -3px;
          bottom: -3px;
          width: 1px;
          background: #C3CEE7;
        }

        .${PAGE_ROOT} .matrix-mobile-stage:first-child::before {
          top: 50%;
        }

        .${PAGE_ROOT} .matrix-mobile-stage:last-child::before {
          bottom: 50%;
        }

        .${PAGE_ROOT} .matrix-mobile-dot {
          position: relative;
          z-index: 1;
          grid-column: 1;
          grid-row: 1;
          width: 9px;
          height: 9px;
          border: 2px solid var(--sesen-blue);
          border-radius: 50%;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .matrix-mobile-dot.is-first {
          background: var(--sesen-blue);
        }

        .${PAGE_ROOT} .matrix-mobile-stage > span:last-child {
          grid-column: 2;
          grid-row: 1;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .${PAGE_ROOT} .scenario-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 30px;
        }

        .${PAGE_ROOT} .scenario {
          min-width: 0;
          padding: 26px;
          border-radius: 20px;
          background: var(--sesen-pale-blue);
        }

        .${PAGE_ROOT} .scenario > span {
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
        }

        .${PAGE_ROOT} .scenario h3 {
          margin-top: 7px;
        }

        .${PAGE_ROOT} .scenario p {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .matrix-callout {
          max-width: 880px;
          margin: 30px auto 0;
        }

        .${PAGE_ROOT} .ectd-grid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .ectd-copy p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .ectd-checks {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px 24px;
          margin-top: 29px;
        }

        .${PAGE_ROOT} .ectd-check {
          display: flex;
          gap: 10px;
          min-width: 0;
          color: var(--sesen-body);
          font-size: 16px;
        }

        .${PAGE_ROOT} .ectd-check svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--sesen-blue-dark);
        }

        .${PAGE_ROOT} .ectd-panel {
          min-width: 0;
          padding: 30px;
          border: 1px solid #D7E0F3;
          border-radius: 26px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .ectd-panel-label {
          color: var(--sesen-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
        }

        .${PAGE_ROOT} .ectd-panel h3 {
          margin-top: 10px;
          font-size: 24px;
        }

        .${PAGE_ROOT} .ectd-panel p {
          margin-top: 13px;
        }

        .${PAGE_ROOT} .ectd-boundary {
          margin-top: 18px;
          padding: 15px 17px;
          border-left: 3px solid var(--sesen-blue);
          border-radius: 0 12px 12px 0;
          background: var(--sesen-pale-blue);
          color: var(--sesen-navy);
          font-size: 15px;
          font-weight: 700;
          line-height: 1.5;
        }

        .${PAGE_ROOT} .ectd-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 10px;
          align-items: center;
          margin-top: 24px;
        }

        .${PAGE_ROOT} .ectd-flow-block {
          min-width: 0;
          padding: 15px 12px;
          border-radius: 13px;
          background: var(--sesen-soft);
          color: var(--sesen-navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.35;
          text-align: center;
        }

        .${PAGE_ROOT} .ectd-flow-arrow {
          color: var(--sesen-blue);
          font-size: 18px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .ectd-panel .editorial-link {
          margin-top: 24px;
        }

        .${PAGE_ROOT} .version-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0 30px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .version-item {
          min-width: 0;
          padding: 25px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .version-item h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .version-item p {
          margin-top: 9px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .global-grid {
          display: grid;
          grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .global-copy p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .global-scope {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 28px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .global-scope div {
          min-width: 0;
          padding: 16px 0;
          border-bottom: 1px solid var(--sesen-divider);
          color: var(--sesen-navy);
          font-size: 16px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .global-language {
          margin-top: 25px;
          padding: 22px 24px;
          border-radius: 18px;
          background: var(--sesen-pale-blue);
        }

        .${PAGE_ROOT} .global-language strong {
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 24px;
          font-weight: 500;
        }

        .${PAGE_ROOT} .global-language span {
          display: block;
          margin-top: 4px;
          color: var(--sesen-body);
          font-size: 16px;
        }

        .${PAGE_ROOT} .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .${PAGE_ROOT} .tech-item {
          min-width: 0;
          padding: 25px 0 0;
          border-top: 2px solid #CBD6EE;
        }

        .${PAGE_ROOT} .tech-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .tech-item p {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .human-callout {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 34px;
          padding: 24px 26px;
          border-radius: 18px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-border);
        }

        .${PAGE_ROOT} .human-callout svg {
          flex: 0 0 auto;
          color: var(--sesen-blue-dark);
        }

        .${PAGE_ROOT} .human-callout strong {
          color: var(--sesen-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.45;
        }

        .${PAGE_ROOT} .qa-layout {
          display: grid;
          grid-template-columns: minmax(260px, .58fr) minmax(0, 1.42fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .qa-sticky {
          position: sticky;
          top: 24px;
        }

        .${PAGE_ROOT} .qa-sticky p {
          margin-top: 19px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .qa-list {
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .qa-row {
          display: grid;
          grid-template-columns: 56px minmax(0, .75fr) minmax(0, 1.25fr);
          gap: 18px;
          align-items: start;
          padding: 22px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .qa-row > * {
          min-width: 0;
        }

        .${PAGE_ROOT} .qa-index {
          color: var(--sesen-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .${PAGE_ROOT} .qa-row h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .qa-row p {
          font-size: 16px;
        }

        .${PAGE_ROOT} .quality-band {
          border-top: 1px solid rgba(255,255,255,.16);
          border-bottom: 1px solid rgba(255,255,255,.16);
        }

        .${PAGE_ROOT} .quality-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .${PAGE_ROOT} .quality-item {
          min-width: 0;
          padding: 34px 26px;
        }

        .${PAGE_ROOT} .quality-item + .quality-item {
          border-left: 1px solid rgba(255,255,255,.14);
        }

        .${PAGE_ROOT} .quality-item strong {
          display: block;
          color: #FFFFFF;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
        }

        .${PAGE_ROOT} .quality-item span {
          display: block;
          margin-top: 8px;
          color: #D8E1FA;
          font-size: 15px;
          line-height: 1.55;
        }

        .${PAGE_ROOT} .section-dark h2 {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .section-dark .section-heading p {
          color: #D8E1FA;
        }

        .${PAGE_ROOT} .section-dark .eyebrow {
          color: var(--sesen-light-eyebrow);
        }

        .${PAGE_ROOT} .dark-link {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .use-case-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0 28px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .use-case {
          min-width: 0;
          padding: 25px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .use-case h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .use-case p {
          margin-top: 9px;
        }

        .${PAGE_ROOT} .why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 34px;
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .why-item {
          min-width: 0;
          padding: 27px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .why-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .why-item p {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .resource-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
          gap: 50px;
          align-items: center;
          padding: 46px 50px;
          border: 1px solid var(--sesen-border);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .resource-panel h2 {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .resource-panel p {
          margin-top: 18px;
          max-width: 750px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .resource-panel .editorial-link {
          margin-top: 24px;
        }

        .${PAGE_ROOT} .resource-visual {
          position: relative;
          min-height: 230px;
          border-radius: 22px;
          background: var(--sesen-pale-blue);
          overflow: hidden;
        }

        .${PAGE_ROOT} .resource-sheet {
          position: absolute;
          width: 190px;
          height: 150px;
          border: 1px solid #CBD7EF;
          border-radius: 14px;
          background: #FFFFFF;
          box-shadow: 0 16px 36px rgba(23,38,77,.08);
        }

        .${PAGE_ROOT} .resource-sheet.sheet-a {
          left: 34px;
          top: 44px;
          transform: rotate(-5deg);
        }

        .${PAGE_ROOT} .resource-sheet.sheet-b {
          right: 34px;
          top: 38px;
          transform: rotate(6deg);
        }

        .${PAGE_ROOT} .resource-sheet::before,
        .${PAGE_ROOT} .resource-sheet::after {
          content: "";
          position: absolute;
          left: 22px;
          right: 22px;
          height: 8px;
          border-radius: 999px;
          background: #DCE4F5;
        }

        .${PAGE_ROOT} .resource-sheet::before { top: 42px; }
        .${PAGE_ROOT} .resource-sheet::after { top: 66px; }

        .${PAGE_ROOT} .resource-chip {
          position: absolute;
          left: 50%;
          bottom: 24px;
          transform: translateX(-50%);
          padding: 10px 15px;
          border-radius: 999px;
          background: var(--sesen-blue);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .08em;
          white-space: nowrap;
        }

        .${PAGE_ROOT} .related-list {
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .related-row {
          display: grid;
          grid-template-columns: minmax(220px, .65fr) minmax(0, 1fr) auto;
          gap: 32px;
          align-items: center;
          padding: 24px 0;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .related-row > * {
          min-width: 0;
        }

        .${PAGE_ROOT} .related-row h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .related-row p {
          max-width: 700px;
        }

        .${PAGE_ROOT} .faq-list {
          border-top: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .faq-item {
          border-bottom: 1px solid var(--sesen-divider);
        }

        .${PAGE_ROOT} .faq-item h3 {
          margin: 0;
        }

        .${PAGE_ROOT} .faq-question {
          width: 100%;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 19px 0;
          border: 0;
          background: transparent;
          color: var(--sesen-navy);
          cursor: pointer;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.4;
          text-align: left;
        }

        .${PAGE_ROOT} .faq-question > span:first-child {
          min-width: 0;
        }

        .${PAGE_ROOT} .faq-icon {
          position: relative;
          width: 32px;
          height: 32px;
          flex: 0 0 32px;
          border: 1px solid #CBD6EB;
          border-radius: 50%;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .faq-icon-h,
        .${PAGE_ROOT} .faq-icon-v {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 12px;
          height: 1.5px;
          background: var(--sesen-blue-dark);
          transform: translate(-50%, -50%);
          transition: transform .2s ease;
        }

        .${PAGE_ROOT} .faq-icon-v {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .${PAGE_ROOT} .faq-item.is-open .faq-icon-v {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .${PAGE_ROOT} .faq-answer {
          max-width: 840px;
          padding: 0 60px 24px 0;
        }

        .${PAGE_ROOT} .faq-answer p {
          font-size: 16px;
          line-height: 1.7;
        }

        .${PAGE_ROOT} .final-cta {
          padding-block: 90px;
          background:
            radial-gradient(circle at 80% 18%, rgba(200,214,255,.18), transparent 28%),
            linear-gradient(120deg, #17264D 0%, #253F8F 100%);
        }

        .${PAGE_ROOT} .final-cta-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 58px;
          align-items: center;
        }

        .${PAGE_ROOT} .final-cta h2 {
          color: #FFFFFF;
          max-width: 780px;
        }

        .${PAGE_ROOT} .final-cta p {
          max-width: 800px;
          margin-top: 19px;
          color: #D8E1FA;
          font-size: 18px;
        }

        .${PAGE_ROOT} .final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 12px;
        }

        .${PAGE_ROOT} .final-proof {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 26px;
          color: #C8D6FF;
          font-size: 13px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .final-proof span + span::before {
          content: "•";
          margin-right: 18px;
          color: #7894E5;
        }

        @media (max-width: 1180px) {
          .${PAGE_ROOT} .container {
            padding-inline: 40px;
          }

          .${PAGE_ROOT} .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(360px, .82fr);
            gap: 44px;
          }

          .${PAGE_ROOT} .lifecycle-rail {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 26px 30px;
          }

          .${PAGE_ROOT} .lifecycle-rail::before {
            display: none;
          }

          .${PAGE_ROOT} .lifecycle-step {
            padding-top: 36px;
            border-top: 1px solid var(--sesen-divider);
          }

          .${PAGE_ROOT} .lifecycle-dot {
            top: -11px;
          }

          .${PAGE_ROOT} .use-case-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .matrix-grid {
            grid-template-columns: 150px repeat(6, minmax(76px, 1fr));
          }
        }

        @media (max-width: 980px) {
          .${PAGE_ROOT} .hero {
            padding-block: 84px 76px;
          }

          .${PAGE_ROOT} .hero-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .${PAGE_ROOT} .hero-copy {
            max-width: 760px;
            margin-inline: auto;
          }

          .${PAGE_ROOT} .hero-copy .eyebrow,
          .${PAGE_ROOT} .hero-copy h1 {
            text-align: center;
          }

          .${PAGE_ROOT} .hero-copy h1 {
            margin-inline: auto;
          }

          .${PAGE_ROOT} .hero-actions,
          .${PAGE_ROOT} .hero-proof {
            justify-content: center;
          }

          .${PAGE_ROOT} .hero-art {
            max-width: 640px;
            margin-inline: auto;
          }

          .${PAGE_ROOT} .trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .trust-item:nth-child(3) {
            border-left: 0;
            border-top: 1px solid var(--sesen-divider);
          }

          .${PAGE_ROOT} .trust-item:nth-child(4) {
            border-top: 1px solid var(--sesen-divider);
          }

          .${PAGE_ROOT} .problem-grid,
          .${PAGE_ROOT} .module-editorial,
          .${PAGE_ROOT} .ectd-grid,
          .${PAGE_ROOT} .global-grid,
          .${PAGE_ROOT} .qa-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .${PAGE_ROOT} .module-intro,
          .${PAGE_ROOT} .qa-sticky {
            position: static;
          }

          .${PAGE_ROOT} .consistency-grid,
          .${PAGE_ROOT} .tech-grid,
          .${PAGE_ROOT} .why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .quality-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .version-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .quality-item:nth-child(3) {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,.14);
          }

          .${PAGE_ROOT} .quality-item:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,.14);
          }

          .${PAGE_ROOT} .resource-panel {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .resource-visual {
            max-width: 560px;
            width: 100%;
          }

          .${PAGE_ROOT} .final-cta-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .final-cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .${PAGE_ROOT} .container {
            padding-inline: 28px;
          }

          .${PAGE_ROOT} .section {
            padding-block: 72px;
          }

          .${PAGE_ROOT} .section-dense {
            padding-block: 68px;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} .hero-copy .eyebrow,
          .${PAGE_ROOT} .hero-copy h1 {
            text-align: center;
          }

          .${PAGE_ROOT} .hero-copy h1 {
            margin-inline: auto;
          }

          .${PAGE_ROOT} .hero-actions {
            justify-content: center;
          }

          .${PAGE_ROOT} .hero-proof {
            justify-content: center;
          }

          .${PAGE_ROOT} .hero-art {
            justify-content: center;
          }

          .${PAGE_ROOT} .standalone-mobile-center .section-heading,
          .${PAGE_ROOT} .standalone-mobile-center.section-heading {
            text-align: center;
            margin-inline: auto;
          }

          .${PAGE_ROOT} .standalone-mobile-center .section-heading p,
          .${PAGE_ROOT} .standalone-mobile-center.section-heading p {
            text-align: left;
          }

          .${PAGE_ROOT} .mobile-center-heading .eyebrow,
          .${PAGE_ROOT} .mobile-center-heading h2 {
            text-align: center;
          }

          .${PAGE_ROOT} .section-heading.mobile-center-heading {
            margin-inline: auto;
          }

          .${PAGE_ROOT} .mobile-center-heading > p,
          .${PAGE_ROOT} .section-heading.mobile-center-heading p {
            text-align: left;
          }

          .${PAGE_ROOT} .global-copy.mobile-center-heading h2,
          .${PAGE_ROOT} .resource-copy.mobile-center-heading h2,
          .${PAGE_ROOT} .final-cta-copy.mobile-center-heading h2 {
            margin-inline: auto;
          }

          .${PAGE_ROOT} .final-cta-actions {
            justify-content: center;
          }

          .${PAGE_ROOT} .architecture-evidence {
            gap: 14px;
          }

          .${PAGE_ROOT} .module-architecture-graphic {
            padding: 34px 24px;
          }

          .${PAGE_ROOT} .architecture-branch {
            width: 88%;
          }

          .${PAGE_ROOT} .scope-list,
          .${PAGE_ROOT} .module-subgrid,
          .${PAGE_ROOT} .ectd-checks,
          .${PAGE_ROOT} .global-scope,
          .${PAGE_ROOT} .scenario-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .consistency-grid,
          .${PAGE_ROOT} .tech-grid,
          .${PAGE_ROOT} .why-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .lifecycle-rail {
            grid-template-columns: 1fr;
            gap: 0;
            margin-left: 12px;
          }

          .${PAGE_ROOT} .lifecycle-step {
            min-height: 0;
            padding: 0 0 30px 38px;
            border-top: 0;
            border-left: 2px solid #B8C7E8;
          }

          .${PAGE_ROOT} .lifecycle-step:last-child {
            border-left-color: transparent;
            padding-bottom: 0;
          }

          .${PAGE_ROOT} .lifecycle-dot {
            top: 0;
            left: -11px;
          }

          .${PAGE_ROOT} .matrix-desktop {
            display: none;
          }

          .${PAGE_ROOT} .matrix-mobile {
            display: block;
          }

          .${PAGE_ROOT} .matrix-control {
            align-items: flex-start;
            flex-direction: column;
          }

          .${PAGE_ROOT} .matrix-control span {
            text-align: left;
          }

          .${PAGE_ROOT} .use-case-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .qa-row {
            grid-template-columns: 46px minmax(0, 1fr);
          }

          .${PAGE_ROOT} .qa-row p {
            grid-column: 2;
          }

          .${PAGE_ROOT} .related-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .${PAGE_ROOT} .related-row .editorial-link {
            margin-top: 4px;
          }

          .${PAGE_ROOT} .final-cta {
            padding-block: 72px;
          }
        }

        @media (max-width: 680px) {
          .${PAGE_ROOT} .architecture-evidence {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 18px;
          }

          .${PAGE_ROOT} .architecture-branch {
            display: none;
          }

          .${PAGE_ROOT} .architecture-mobile-branch-label {
            display: block;
            margin: 18px 0 12px;
            color: var(--sesen-blue-dark);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: .12em;
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .${PAGE_ROOT} .container {
            padding-inline: 20px;
          }

          .${PAGE_ROOT} .hero {
            padding-block: 72px 66px;
          }

          .${PAGE_ROOT} .hero-grid {
            gap: 34px;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
            line-height: 1.25;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} h3 {
            font-size: 21px;
          }

          .${PAGE_ROOT} .lead {
            font-size: 18px;
          }

          .${PAGE_ROOT} .section-heading {
            margin-bottom: 34px;
          }

          .${PAGE_ROOT} .section-heading.centered {
            text-align: center;
          }

          .${PAGE_ROOT} .section-heading.centered p {
            text-align: left;
          }

          .${PAGE_ROOT} .hero-copy .lead,
          .${PAGE_ROOT} .hero-copy .hero-support {
            text-align: left;
          }

          .${PAGE_ROOT} .hero-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .hero-actions .btn {
            width: 100%;
          }

          .${PAGE_ROOT} .hero-proof {
            justify-content: center;
            text-align: center;
          }

          .${PAGE_ROOT} .trust-grid,
          .${PAGE_ROOT} .quality-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .trust-item + .trust-item,
          .${PAGE_ROOT} .trust-item:nth-child(3),
          .${PAGE_ROOT} .trust-item:nth-child(4) {
            border-left: 0;
            border-top: 1px solid var(--sesen-divider);
          }

          .${PAGE_ROOT} .quality-item + .quality-item,
          .${PAGE_ROOT} .quality-item:nth-child(3),
          .${PAGE_ROOT} .quality-item:nth-child(4) {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,.14);
          }

          .${PAGE_ROOT} .connection-list {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .module-architecture-graphic {
            padding: 30px 18px;
          }


          .${PAGE_ROOT} .language-control-band {
            margin-top: 26px;
          }

          .${PAGE_ROOT} .control-items {
            flex-direction: column;
            gap: 6px;
          }

          .${PAGE_ROOT} .module-note {
            text-align: left;
          }

          .${PAGE_ROOT} .scope-list {
            gap: 10px;
          }

          .${PAGE_ROOT} .module-related-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .${PAGE_ROOT} .matrix-wrap {
            margin-inline: -2px;
            padding: 22px 18px 18px;
          }

          .${PAGE_ROOT} .ectd-flow {
            grid-template-columns: 1fr;
            justify-items: stretch;
          }

          .${PAGE_ROOT} .ectd-flow-arrow {
            transform: rotate(90deg);
            justify-self: center;
          }

          .${PAGE_ROOT} .version-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .human-callout {
            align-items: flex-start;
          }

          .${PAGE_ROOT} .qa-row {
            grid-template-columns: 38px minmax(0, 1fr);
          }

          .${PAGE_ROOT} .resource-panel {
            padding: 34px 24px;
          }

          .${PAGE_ROOT} .resource-visual {
            width: 100%;
            min-width: 0;
            min-height: 210px;
          }

          .${PAGE_ROOT} .resource-chip {
            max-width: calc(100% - 24px);
            white-space: normal;
            text-align: center;
          }

          .${PAGE_ROOT} .resource-sheet {
            width: 150px;
            height: 128px;
          }

          .${PAGE_ROOT} .resource-sheet.sheet-a {
            left: 18px;
          }

          .${PAGE_ROOT} .resource-sheet.sheet-b {
            right: 18px;
          }

          .${PAGE_ROOT} .faq-question {
            gap: 18px;
            font-size: 19px;
          }

          .${PAGE_ROOT} .faq-answer {
            padding-right: 0;
          }

          .${PAGE_ROOT} .final-cta-actions {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .${PAGE_ROOT} .final-cta-actions .btn {
            width: 100%;
          }

          .${PAGE_ROOT} .final-proof {
            gap: 8px;
          }

          .${PAGE_ROOT} .final-proof span + span::before {
            content: none;
          }
        }

        @media (max-width: 360px) {
          .${PAGE_ROOT} h1 {
            font-size: 38px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 30px;
          }

          .${PAGE_ROOT} .hero-proof {
            display: grid;
            justify-items: center;
          }

          .${PAGE_ROOT} .resource-sheet {
            width: 136px;
          }

          .${PAGE_ROOT} .resource-sheet.sheet-a {
            left: 10px;
          }

          .${PAGE_ROOT} .resource-sheet.sheet-b {
            right: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE_ROOT} .btn,
          .${PAGE_ROOT} .editorial-link span,
          .${PAGE_ROOT} .faq-icon-h,
          .${PAGE_ROOT} .faq-icon-v {
            transition: none;
          }
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">MULTILINGUAL REGULATORY DOSSIERS</span>
            <h1>CTD & eCTD Translation Services</h1>
            <p className="lead">
              Keep multilingual regulatory content aligned across the complete
              Common Technical Document—from regional Module 1 content and
              Module 2 summaries through Quality/CMC, nonclinical, and clinical
              evidence.
            </p>
            <p className="hero-support">
              Sesen provides specialized CTD and eCTD translation services for
              pharmaceutical, biotechnology, and other life sciences
              organizations preparing global regulatory submissions. Our
              workflows connect terminology, references, study information,
              quality data, clinical evidence, reviewer decisions, and previous
              translations across the dossier so individual documents continue
              to support one coherent regulatory story.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href={URLS.quote}>
                REQUEST A QUOTE <ArrowIcon />
              </a>
              <a className="btn btn-secondary" href={URLS.sendFiles}>
                SEND FILES <ArrowIcon />
              </a>
            </div>

            <div className="hero-proof" aria-label="Sesen service highlights">
              <span>Modules 1–5</span>
              <span>150+ Languages</span>
              <span>Expert Human Review</span>
            </div>
          </div>

          <div className="hero-art">
            <HeroDossierGraphic />
          </div>
        </div>
      </section>

      <div className="trust-band">
        <div className="container trust-grid">
          <div className="trust-item">
            <strong>Cross-Module Consistency</strong>
            <span>Module 2 aligned with the underlying evidence</span>
          </div>
          <div className="trust-item">
            <strong>Lifecycle Continuity</strong>
            <span>Authority questions, updates, and later sequences</span>
          </div>
          <div className="trust-item">
            <strong>eCTD Workflow Alignment</strong>
            <span>Multilingual files prepared for structured workflows</span>
          </div>
          <div className="trust-item">
            <strong>ISO-Certified Processes</strong>
            <span>Structured translation, review, and QA controls</span>
          </div>
        </div>
      </div>

      <section className="section standalone-mobile-center">
        <div className="container problem-grid">
          <div className="section-heading">
            <span className="eyebrow">CONNECTED DOSSIER</span>
            <h2>One Dossier. Thousands of Connected Language Decisions.</h2>
          </div>

          <div className="problem-copy">
            <p>
              A CTD or eCTD is not simply a collection of regulatory documents.
              It is an interconnected body of scientific, quality, clinical,
              administrative, and product information that has to remain
              consistent as reviewers move between summaries and the underlying
              evidence.
            </p>
            <p>
              Product names appear in multiple modules. Manufacturing
              terminology flows from detailed Quality/CMC sections into
              higher-level summaries. Study identifiers, endpoints, adverse
              event terminology, specifications, units, tables, and conclusions
              may recur throughout the dossier. Approved regulatory language may
              also need to carry forward into authority responses, updated
              sections, variations, and future submissions.
            </p>
            <p>
              When connected materials are translated independently, terminology
              and meaning can drift between files that are supposed to describe
              the same product, study, process, or conclusion.
            </p>

            <div className="connection-list" aria-label="Connected language elements">
              {[
                "Product & substance terminology",
                "Study identifiers & endpoints",
                "Manufacturing terminology",
                "Numbers, units & specifications",
                "Cross-references & section links",
                "Approved regulatory language",
                "Reviewer decisions",
                "Submission versions",
              ].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <div className="problem-callout">
              <strong>
                The goal is not just accurate translation document by document.
                It is a multilingual dossier that reads as one coordinated body
                of regulatory evidence.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">CTD ARCHITECTURE</span>
            <h2>Five Modules. One Connected Regulatory Dossier.</h2>
            <p>
              Module 1 contains region-specific administrative and product
              information, while Modules 2 through 5 form the harmonized CTD
              structure for summaries, quality, nonclinical, and clinical
              content.
            </p>
          </div>

          <div className="architecture-wrap">
            <ModuleArchitectureGraphic />
            <p className="module-note">
              Module 2 has a particularly important relationship with Modules
              3, 4, and 5. Its summaries and overviews condense the underlying
              Quality, nonclinical, and clinical evidence. Sesen helps keep
              terminology, values, findings, and conclusions aligned between
              the summary layer and the supporting dossier content.
            </p>
          </div>
        </div>
      </section>

      <section className="section module-section">
        <div className="container module-editorial">
          <div className="module-intro">
            <div className="module-number">MODULE 1</div>
            <h2>Regional and Administrative Content</h2>
          </div>
          <div className="module-body">
            <p>
              Module 1 is different from the rest of the CTD because its content
              and structure are determined by regional requirements rather than
              the harmonized Modules 2–5 framework.
            </p>
            <p>
              Depending on the market, submission pathway, and stage of review,
              multilingual Module 1 work may involve content such as:
            </p>

            <ul className="scope-list">
              {[
                "Application and administrative forms",
                "Cover letters and regulatory correspondence",
                "Product and prescribing information",
                "Labeling-related documentation",
                "Regional declarations and certificates",
                "Risk-management or supporting administrative content",
                "Market-specific supporting documents",
                "Responses and other authority-facing communications",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Translation requirements can vary significantly between
              jurisdictions. Rather than applying a single approach to every
              market, Sesen works from the agreed regulatory scope, target
              authority, submission pathway, document type, and intended use.
            </p>
            <p>
              At the same time, Module 1 cannot be treated in isolation.
              Product names, indications, dosage information, terminology, and
              approved regulatory language may need to remain consistent with
              corresponding content elsewhere in the dossier.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft module-section">
        <div className="container module-editorial">
          <div className="module-intro">
            <div className="module-number">MODULE 2</div>
            <h2>Summaries That Must Reflect the Underlying Evidence</h2>
          </div>
          <div className="module-body">
            <p>
              Module 2 sits at the center of the CTD’s scientific narrative.
              Its Quality, nonclinical, and clinical summaries and overviews
              distill information that is developed in much greater detail in
              Modules 3, 4, and 5. As a result, Module 2 translation requires
              more than polished language. It requires disciplined alignment
              with the underlying evidence.
            </p>

            <div className="module-subgrid">
              <div className="module-subitem">
                <h3>Quality Overall Summary</h3>
                <p>
                  Maintain terminology and technical meaning between the
                  Quality Overall Summary and the detailed Quality/CMC
                  information presented in Module 3.
                </p>
              </div>
              <div className="module-subitem">
                <h3>Nonclinical Overview & Summaries</h3>
                <p>
                  Keep pharmacology, pharmacokinetic, toxicology, study
                  terminology, and conclusions aligned with supporting Module 4
                  documentation.
                </p>
              </div>
              <div className="module-subitem">
                <h3>Clinical Overview & Summaries</h3>
                <p>
                  Maintain consistency with clinical study reports, endpoints,
                  safety terminology, efficacy findings, statistical language,
                  and other evidence presented in Module 5.
                </p>
              </div>
              <div className="module-subitem">
                <h3>Cross-Module Terminology Control</h3>
                <p>
                  Identify recurring product, study, manufacturing, clinical,
                  and regulatory terminology before inconsistent language
                  spreads through high-level summaries.
                </p>
              </div>
              <div className="module-subitem">
                <h3>Numerical & Reference Verification</h3>
                <p>
                  Support consistency in values, units, study identifiers,
                  section references, tables, and other information that
                  connects summaries to supporting documents.
                </p>
              </div>
              <div className="module-subitem">
                <h3>One Summary Layer, Three Evidence Sources</h3>
                <p>
                  When Module 2 condenses evidence from Modules 3–5, the
                  terminology cannot be managed independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section module-section">
        <div className="container module-editorial">
          <div className="module-intro">
            <div className="module-number">MODULE 3</div>
            <h2>Quality and CMC Translation</h2>
          </div>
          <div className="module-body">
            <p>
              Module 3 contains technically dense Quality and Chemistry,
              Manufacturing, and Controls information where precise terminology
              and disciplined reuse are especially important.
            </p>

            <ul className="scope-list">
              {[
                "Drug substance information",
                "Drug product information",
                "Composition and formulation",
                "Manufacturing processes",
                "Process controls",
                "Specifications",
                "Analytical procedures",
                "Analytical method validation",
                "Batch-related information",
                "Stability studies and data",
                "Container closure information",
                "Supporting Quality documentation",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              A single manufacturing term, material designation, analytical
              method, specification, or process description may recur
              throughout Module 3 and appear again in the Module 2 Quality
              Overall Summary. For recurring submissions and lifecycle changes,
              terminology may also need to remain consistent with previous
              regulatory versions.
            </p>
            <p>
              Sesen combines specialized pharmaceutical and scientific
              linguists with terminology management, translation memory,
              reference alignment, numerical checks, and structured review to
              help protect technical consistency across Quality content.
            </p>

            <EditorialLink href={URLS.cmc}>
              Explore CMC Translation Services
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-soft module-section">
        <div className="container module-editorial">
          <div className="module-intro">
            <div className="module-number">MODULE 4</div>
            <h2>Nonclinical Translation</h2>
          </div>
          <div className="module-body">
            <p>
              Module 4 brings together the nonclinical evidence supporting the
              product’s development and regulatory assessment.
            </p>

            <ul className="scope-list">
              {[
                "Pharmacology",
                "Pharmacokinetics",
                "Toxicology",
                "Nonclinical study reports",
                "Study findings and conclusions",
                "Tables, figures, and supporting scientific content",
                "Nonclinical literature references",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Scientific terminology, study identifiers, test articles, doses,
              units, findings, and conclusions must remain accurate within the
              individual documents while also aligning with the corresponding
              nonclinical summaries and overview in Module 2.
            </p>
            <p>
              Our workflow helps preserve these connections through
              subject-matter linguist assignment, terminology preparation,
              reference materials, translation memory, bilingual review, and
              targeted quality checks.
            </p>
          </div>
        </div>
      </section>

      <section className="section module-section">
        <div className="container module-editorial">
          <div className="module-intro">
            <div className="module-number">MODULE 5</div>
            <h2>Clinical Study Reports and Clinical Evidence</h2>
          </div>
          <div className="module-body">
            <p>
              Module 5 contains the clinical evidence supporting regulatory
              evaluation of a product’s safety and efficacy.
            </p>

            <ul className="scope-list">
              {[
                "Clinical study reports",
                "Tabular listings of clinical studies",
                "Study results and supporting evidence",
                "Statistical analyses and clinical data",
                "Tables and figures",
                "Endpoint terminology",
                "Safety and adverse event language",
                "Literature references and supporting clinical evidence",
                "Related clinical documentation used within the submission program",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p>
              Clinical content is rarely confined to a single document. Study
              titles, protocol identifiers, endpoints, treatment terminology,
              safety language, numerical data, and conclusions may recur
              throughout the dossier.
            </p>
            <p>
              Sesen helps maintain alignment between detailed clinical evidence
              in Module 5 and the Clinical Summary and Clinical Overview in
              Module 2 while also connecting approved terminology to the broader
              clinical documentation program.
            </p>

            <div className="module-related-links">
              <EditorialLink href={URLS.clinical}>
                Explore Clinical Trial Translation Services
              </EditorialLink>
              <EditorialLink href={URLS.csr}>
                Explore Clinical Study Report Translation
              </EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container">
          <div className="section-heading mobile-center-heading">
            <span className="eyebrow">CROSS-MODULE CONSISTENCY</span>
            <h2>Regulatory Consistency Has to Extend Across the Entire Dossier</h2>
            <p>
              The five modules serve different purposes, but regulatory
              reviewers evaluate the relationships between them. Sesen helps
              control the elements most likely to create multilingual
              inconsistencies across connected CTD and eCTD content.
            </p>
          </div>

          <div className="consistency-grid">
            {consistencyItems.map((item) => (
              <div className="consistency-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">REGULATORY LIFECYCLE</span>
            <h2>The Dossier Keeps Changing After the Initial Submission</h2>
            <p>
              The first submission is only one point in the regulatory
              lifecycle. Health authority review, revised evidence, product
              changes, and post-approval activity can continue to affect dossier
              content long after the initial filing.
            </p>
          </div>

          <div className="lifecycle-rail">
            {lifecycle.map((step) => (
              <div className="lifecycle-step" key={step.number}>
                <span className="lifecycle-dot" aria-hidden="true" />
                <span className="step-label">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">DOSSIER × LIFECYCLE</span>
            <h2>Every Regulatory Change Can Affect More Than One Module</h2>
            <p>
              Sesen helps manage language continuity across two dimensions at
              once: across the structure of the dossier and across the life of
              the regulatory submission.
            </p>
          </div>

          <div className="scenario-grid">
            <div className="scenario">
              <span>EXAMPLE 01</span>
              <h3>A Manufacturing Change Begins in Module 3</h3>
              <p>
                The same change may also require updates to the Module 2 Quality
                Overall Summary, regional Module 1 documentation, product
                information, cross-references, or future authority responses.
              </p>
            </div>
            <div className="scenario">
              <span>EXAMPLE 02</span>
              <h3>New Clinical Evidence Enters Through Module 5</h3>
              <p>
                It may affect the Clinical Summary, Clinical Overview,
                labeling-related conclusions, market-specific documentation,
                or later regulatory communications.
              </p>
            </div>
          </div>

          <DossierLifecycleMatrix />

          <div className="problem-callout matrix-callout">
            <strong>
              One product. Five modules. Multiple languages. Multiple markets.
              Multiple regulatory sequences. One controlled multilingual history.
            </strong>
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container ectd-grid">
          <div className="ectd-copy">
            <h2>Translation Built for Structured eCTD Workflows</h2>
            <p>
              The CTD defines the organization of regulatory content. The
              electronic Common Technical Document, or eCTD, provides the
              structured electronic environment through which that content can
              be submitted and maintained over time.
            </p>
            <p>
              That distinction matters for translation. Multilingual documents
              have to preserve more than their sentences. Depending on the
              project and publishing workflow, they may also contain structured
              headings, tables, figures, bookmarks, hyperlinks, internal
              references, file relationships, and version dependencies that
              need to remain usable after translation.
            </p>

            <div className="ectd-checks">
              {[
                "Structured regulatory documents",
                "CTD Modules 1–5",
                "Consistent headings and numbering",
                "Tables and figures",
                "Internal and external references",
                "Bookmark and hyperlink preservation where in scope",
                "File and version organization",
                "Multilingual formatting",
                "Updated and replacement documents",
                "Preparation for downstream regulatory publishing workflows",
              ].map((item) => (
                <div className="ectd-check" key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ectd-panel">
            <span className="ectd-panel-label">CONTENT → STRUCTURE → PUBLISHING</span>
            <h3>Supporting an Evolving eCTD Environment</h3>
            <p>
              The global eCTD environment continues to evolve as health
              authorities transition from established eCTD v3.2.2 workflows
              toward eCTD v4.0 on different regional timelines.
            </p>
            <p>
              Sesen’s role is to help keep multilingual regulatory content
              accurate, structured, traceable, and ready for the client’s
              applicable document and publishing workflow as submission
              standards evolve.
            </p>
            <div className="ectd-boundary">
              Translation and multilingual file preparation aligned with eCTD
              publishing workflows.
            </div>

            <div className="ectd-flow" aria-label="Regulatory content workflow">
              <div className="ectd-flow-block">Translated Content</div>
              <div className="ectd-flow-arrow" aria-hidden="true">→</div>
              <div className="ectd-flow-block">Structured Files</div>
              <div className="ectd-flow-arrow" aria-hidden="true">→</div>
              <div className="ectd-flow-block">Publishing Workflow</div>
            </div>

            <EditorialLink href={URLS.formatting}>
              Explore Regulatory Submission Formatting
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading mobile-center-heading">
            <span className="eyebrow">VERSION CONTINUITY</span>
            <h2>Maintain Regulatory Language Across Every New Sequence</h2>
            <p>
              A new submission sequence should not require teams to reconstruct
              years of multilingual decisions. Controlled language assets help
              carry established regulatory history forward.
            </p>
          </div>

          <div className="version-grid">
            {versionItems.map((item) => (
              <div className="version-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container global-grid">
          <div className="global-copy mobile-center-heading">
            <span className="eyebrow">GLOBAL REGULATORY PROGRAMS</span>
            <h2>Support Multilingual Submissions Across Global Regulatory Markets</h2>
            <p>
              Global regulatory programs frequently reuse a common scientific
              foundation while applying different regional requirements,
              submission pathways, languages, product information, and
              timelines.
            </p>
            <p>
              Sesen supports multilingual regulatory programs across major and
              emerging life sciences markets, including North America, Europe,
              Asia-Pacific, Latin America, the Middle East, and other
              international regions.
            </p>
            <div className="global-language">
              <strong>150+ Languages</strong>
              <span>
                Single-market submissions, coordinated regional filings, and
                ongoing multinational regulatory programs.
              </span>
            </div>
          </div>

          <div className="global-scope" aria-label="Regulatory scope factors">
            {[
              "Target country or region",
              "Health authority",
              "Submission pathway",
              "Application type",
              "Module and document type",
              "Required target language",
              "Existing approved translations",
              "Regulatory stage",
              "Client publishing process",
              "Local affiliate or in-country review requirements",
            ].map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container">
          <div className="section-heading mobile-center-heading">
            <span className="eyebrow">HUMAN EXPERTISE + TECHNOLOGY</span>
            <h2>Expert Regulatory Translation Supported by Smarter Quality Controls</h2>
            <p>
              CTD and eCTD content combines highly specialized regulatory,
              pharmaceutical, scientific, clinical, and manufacturing language.
              Sesen matches projects with professional native linguists and
              reviewers based on language pair, content type, subject matter,
              therapeutic area, and project requirements.
            </p>
          </div>

          <div className="tech-grid">
            {technologyItems.map((item) => (
              <div className="tech-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>

          <div className="human-callout">
            <CheckIcon />
            <strong>
              AI supports the workflow. Expert human judgment remains central to
              regulated life sciences translation.
            </strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container qa-layout">
          <div className="qa-sticky">
            <span className="eyebrow">QUALITY WORKFLOW</span>
            <h2>Quality Controls Designed for High-Stakes Regulatory Content</h2>
            <p>
              Regulatory translation quality depends on applying the right
              controls before, during, and after translation.
            </p>
          </div>

          <div className="qa-list">
            {qaSteps.map((step) => (
              <div className="qa-row" key={step.n}>
                <span className="qa-index">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading mobile-center-heading">
            <span className="eyebrow">QUALITY · COMPLIANCE · SECURITY</span>
            <h2>Built for Regulated Life Sciences Content</h2>
            <p>
              Sesen combines specialized life sciences translation with
              controlled quality and secure multilingual workflows.
            </p>
          </div>

          <div className="quality-band">
            <div className="quality-grid">
              <div className="quality-item">
                <strong>ISO 17100</strong>
                <span>
                  Translation service processes supporting qualified linguist
                  selection, translation, revision, project management, and
                  quality control.
                </span>
              </div>
              <div className="quality-item">
                <strong>ISO 9001:2015</strong>
                <span>
                  Quality management principles supporting controlled
                  operations, issue management, and continuous improvement.
                </span>
              </div>
              <div className="quality-item">
                <strong>ISO 13485:2016</strong>
                <span>
                  Quality practices supporting regulated medical device and
                  related life sciences documentation where applicable.
                </span>
              </div>
              <div className="quality-item">
                <strong>Secure Workflows</strong>
                <span>
                  Controlled file handling and secure processes for confidential
                  regulatory and business-critical content.
                </span>
              </div>
            </div>
          </div>

          <EditorialLink href={URLS.quality} className="dark-link">
            Explore Quality, Compliance & Security
          </EditorialLink>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <h2>CTD & eCTD Translation Support for the Way Regulatory Teams Actually Work</h2>
            <p>
              Sesen can support individual documents, specific modules, or
              broader multilingual submission programs.
            </p>
          </div>

          <div className="use-case-grid">
            {useCases.map((item) => (
              <div className="use-case" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading mobile-center-heading">
            <span className="eyebrow">WHY SESEN</span>
            <h2>A Specialized Translation Partner for Connected Regulatory Dossiers</h2>
            <p>
              CTD and eCTD translation requires both document-level accuracy and
              program-level continuity. Sesen brings those two requirements
              together.
            </p>
          </div>

          <div className="why-grid">
            {[
              {
                title: "Life Sciences Specialization",
                copy:
                  "Translation workflows built specifically around regulated pharmaceutical, biotechnology, clinical, medical, scientific, and related life sciences content.",
              },
              {
                title: "CTD & eCTD Understanding",
                copy:
                  "Support across Modules 1–5 with particular attention to the relationships between summaries and underlying Quality, nonclinical, and clinical evidence.",
              },
              {
                title: "Specialized Regulatory Linguists",
                copy:
                  "Professional native translators and reviewers matched to the subject matter, therapeutic context, and target language.",
              },
              {
                title: "Cross-Module Terminology Control",
                copy:
                  "Glossaries, translation memory, reference materials, and consistency checks help maintain regulatory language across interconnected documents.",
              },
              {
                title: "Lifecycle Continuity",
                copy:
                  "Carry approved terminology, prior translations, references, and reviewer decisions into responses, updates, variations, and future submission activity.",
              },
              {
                title: "Scalable Multilingual Delivery",
                copy:
                  "Support anything from a single translated dossier section to coordinated multi-language regulatory programs.",
              },
            ].map((item) => (
              <div className="why-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blue-soft">
        <div className="container">
          <div className="resource-panel">
            <div className="resource-copy mobile-center-heading">
              <span className="eyebrow">CTD & eCTD TRANSLATION RESOURCES</span>
              <h2>Plan Multilingual Dossier Content With the Relationships in Mind</h2>
              <p>
                Strong multilingual regulatory programs begin with a clear
                understanding of dossier structure, terminology dependencies,
                version history, reviewer workflows, and target-market
                requirements.
              </p>
              <p>
                Explore Sesen’s clinical and regulatory knowledge resource for
                practical guidance on CTD/eCTD document planning, terminology
                management, module consistency, reviewer alignment, version
                control, and multilingual submission readiness.
              </p>
              <EditorialLink href={URLS.resource}>
                Read CTD & eCTD Translation Considerations
              </EditorialLink>
            </div>

            <div className="resource-visual" aria-hidden="true">
              <div className="resource-sheet sheet-a" />
              <div className="resource-sheet sheet-b" />
              <div className="resource-chip">CTD / eCTD KNOWLEDGE</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Related Regulatory Translation Services</h2>
            <p>
              CTD and eCTD work often connects with other specialized
              regulatory, clinical, scientific, and technical translation
              requirements.
            </p>
          </div>

          <div className="related-list">
            {relatedServices.map((item) => (
              <div className="related-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <EditorialLink href={item.href}>{item.linkLabel}</EditorialLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>CTD & eCTD Translation FAQ</h2>
            <p>
              Answers to common questions about CTD modules, multilingual
              dossier consistency, eCTD workflows, lifecycle updates, and
              Sesen’s regulatory translation support.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-grid">
          <div className="final-cta-copy mobile-center-heading">
            <h2>Keep Your Multilingual Dossier Connected From Submission Through Lifecycle</h2>
            <p>
              Whether you are translating one CTD module or coordinating a
              multilingual regulatory program across markets, Sesen helps
              maintain the terminology, scientific meaning, references,
              versions, and regulatory decisions that connect the dossier over
              time.
            </p>
            <div className="final-proof">
              <span>CTD & eCTD Translation</span>
              <span>Regulatory Submission Translation</span>
              <span>CMC Translation</span>
              <span>Clinical Translation</span>
              <span>Submission Formatting</span>
              <span>150+ Languages</span>
            </div>
          </div>

          <div className="final-cta-actions">
            <a className="btn btn-primary" href={URLS.quote}>
              REQUEST A QUOTE <ArrowIcon />
            </a>
            <a className="btn btn-secondary" href={URLS.sendFiles}>
              SEND FILES <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
