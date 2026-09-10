// Sesen IRB & Ethics Committee Translation Services wireframe v3
import React from "react";

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
  };

  const paths = {
    file: <><path d="M7 3.5h7l3 3V20H7z"/><path d="M14 3.5V7h3"/><path d="M9.5 11h5"/><path d="M9.5 14h5"/><path d="M9.5 17h3.5"/></>,
    people: <><circle cx="9" cy="8" r="2.5"/><path d="M4.5 18c.6-3.1 2.2-4.8 4.5-4.8s3.9 1.7 4.5 4.8"/><circle cx="17" cy="9" r="2"/><path d="M15.4 13.6c2.4.1 3.8 1.5 4.1 4.4"/></>,
    message: <><path d="M4 5.5h16v10H9l-4 3v-3H4z"/><path d="M8 9h8"/><path d="M8 12h5"/></>,
    refresh: <><path d="M19 7.5V4l-2.2 2.2A7 7 0 1 0 19 12"/><path d="M16.8 6.2A6.7 6.7 0 0 0 12 4.5"/></>,
    check: <><circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.3 2.3 4.8-5"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4z"/><path d="m4 11 8 4 8-4"/><path d="m4 15 8 4 8-4"/></>,
    globe: <><circle cx="12" cy="12" r="8.5"/><path d="M3.8 12h16.4"/><path d="M12 3.5c2.1 2.4 3.2 5.2 3.2 8.5s-1.1 6.1-3.2 8.5"/><path d="M12 3.5C9.9 5.9 8.8 8.7 8.8 12s1.1 6.1 3.2 8.5"/></>,
    shield: <><path d="M12 3.2 19 6v5.2c0 4.2-2.6 7.4-7 9.6-4.4-2.2-7-5.4-7-9.6V6z"/><path d="m8.7 12 2.2 2.2 4.4-4.5"/></>,
    compare: <><path d="M7 4v16"/><path d="m4.5 7 2.5-3 2.5 3"/><path d="M17 20V4"/><path d="m14.5 17 2.5 3 2.5-3"/></>,
    book: <><path d="M4.5 5.5c2.7-.8 5-.4 7.5 1.4v12c-2.5-1.8-4.8-2.2-7.5-1.4z"/><path d="M19.5 5.5c-2.7-.8-5-.4-7.5 1.4v12c2.5-1.8 4.8-2.2 7.5-1.4z"/></>,
    branch: <><path d="M7 5v14"/><circle cx="7" cy="5" r="2"/><circle cx="7" cy="19" r="2"/><path d="M9 8h4a4 4 0 0 1 4 4v1"/><circle cx="17" cy="16" r="2"/></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></>,
    arrow: <><path d="M5 12h13"/><path d="m14 8 4 4-4 4"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const ArrowLink = ({ href, children = null, className = "" }) => (
  <a className={`sesen-irb-page__arrow-link ${className}`.trim()} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={18} />
  </a>
);

const SectionHeading = ({ eyebrow = null, title, intro = null, align = "center", id }) => (
  <div className={`sesen-irb-page__section-heading sesen-irb-page__section-heading--${align}`}>
    {eyebrow ? <div className="sesen-irb-page__eyebrow">{eyebrow}</div> : null}
    <h2 id={id}>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const WorkflowArt = () => (
  <svg className="sesen-irb-page__hero-art-svg" viewBox="0 0 640 520" role="img" aria-label="Controlled multilingual ethics review cycle">
    <defs>
      <linearGradient id="irbSoft" x1="0" x2="1">
        <stop offset="0" stopColor="#F5F7FF" />
        <stop offset="1" stopColor="#EAF0FF" />
      </linearGradient>
      <filter id="irbShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#17264D" floodOpacity="0.08" />
      </filter>
    </defs>

    <rect x="70" y="46" width="500" height="410" rx="42" fill="url(#irbSoft)" />
    <circle cx="319" cy="248" r="93" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" filter="url(#irbShadow)" />
    <rect x="275" y="188" width="88" height="118" rx="12" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
    <path d="M341 188v22h22" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M293 232h52M293 250h52M293 268h36" stroke="#68758B" strokeWidth="4" strokeLinecap="round" />
    <circle cx="350" cy="290" r="18" fill="#4B6FD8" />
    <path d="m341 290 6 6 12-13" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />

    <g fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" filter="url(#irbShadow)">
      <rect x="86" y="86" width="154" height="88" rx="18" />
      <rect x="401" y="86" width="154" height="88" rx="18" />
      <rect x="401" y="332" width="154" height="88" rx="18" />
      <rect x="86" y="332" width="154" height="88" rx="18" />
    </g>

    <g fontFamily="Inter, Arial, sans-serif" fontWeight="700" fontSize="16" fill="#17264D">
      <text x="116" y="118">INITIAL SUBMISSION</text>
      <text x="431" y="118">LOCAL REVIEW</text>
      <text x="432" y="364">CONTROLLED REVISION</text>
      <text x="116" y="364">RESUBMISSION</text>
    </g>
    <g fontFamily="Inter, Arial, sans-serif" fontWeight="400" fontSize="14" fill="#68758B">
      <text x="116" y="145">Study + participant materials</text>
      <text x="431" y="145">Questions + requested changes</text>
      <text x="432" y="391">Version-aligned updates</text>
      <text x="116" y="391">Reviewed multilingual files</text>
    </g>

    <g fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M240 129c66-33 118-34 161 0" />
      <path d="m391 119 10 10-14 3" />
      <path d="M478 174c34 52 35 105 0 158" />
      <path d="m468 324 10 8 2-14" />
      <path d="M401 377c-68 32-120 32-161 0" />
      <path d="m250 387-10-10 14-3" />
      <path d="M163 332c-34-53-35-106 0-158" />
      <path d="m173 182-10-8-2 14" />
    </g>

    <g fill="#3659BB">
      <circle cx="320" cy="96" r="5" />
      <circle cx="520" cy="250" r="5" />
      <circle cx="320" cy="406" r="5" />
      <circle cx="120" cy="250" r="5" />
    </g>
  </svg>
);

const VersionArt = () => (
  <svg className="sesen-irb-page__version-art" viewBox="0 0 620 470" role="img" aria-label="Source revision to multilingual resubmission workflow">
    <rect x="34" y="30" width="552" height="404" rx="32" fill="#F7F9FD" stroke="#E9EEF8" />
    <g fontFamily="Inter, Arial, sans-serif">
      <rect x="72" y="66" width="170" height="70" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <text x="96" y="95" fontSize="13" fontWeight="700" fill="#3659BB">SOURCE VERSION</text>
      <text x="96" y="117" fontSize="16" fontWeight="600" fill="#17264D">Updated ICF</text>

      <path d="M242 101h56" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="m288 94 10 7-10 7" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="298" y="66" width="250" height="70" rx="16" fill="#EAF0FF" stroke="#C8D6FF" strokeWidth="2" />
      <text x="322" y="95" fontSize="13" fontWeight="700" fill="#3659BB">CHANGE IMPACT</text>
      <text x="322" y="117" fontSize="16" fontWeight="600" fill="#17264D">Affected files + languages</text>

      <path d="M423 136v46" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="m416 172 7 10 7-10" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="92" y="185" width="136" height="74" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <text x="113" y="214" fontSize="12" fontWeight="700" fill="#68758B">PROTOCOL</text>
      <text x="113" y="238" fontSize="15" fontWeight="600" fill="#17264D">Reference</text>

      <rect x="242" y="185" width="136" height="74" rx="16" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="2" />
      <text x="263" y="214" fontSize="13" fontWeight="700" fill="#3659BB">ICF</text>
      <text x="263" y="238" fontSize="15" fontWeight="600" fill="#17264D">Update</text>

      <rect x="392" y="185" width="136" height="74" rx="16" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="2" />
      <text x="413" y="214" fontSize="13" fontWeight="700" fill="#3659BB">PARTICIPANT INFO</text>
      <text x="413" y="238" fontSize="15" fontWeight="600" fill="#17264D">Update</text>

      <path d="M310 259v43" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="m303 292 7 10 7-10" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="92" y="306" width="436" height="80" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <text x="116" y="336" fontSize="13" fontWeight="700" fill="#3659BB">MULTILINGUAL UPDATE + QA</text>
      <text x="116" y="362" fontSize="16" fontWeight="600" fill="#17264D">Terminology · version check · linguistic review · final files</text>

      <rect x="203" y="402" width="214" height="38" rx="19" fill="#4B6FD8" />
      <text x="242" y="426" fontSize="12" fontWeight="700" fill="#FFFFFF">CONTROLLED RESUBMISSION</text>
    </g>
  </svg>
);

const MobileWorkflowArt = () => (
  <div className="sesen-irb-page__hero-art-mobile" role="img" aria-label="Controlled multilingual ethics review cycle">
    {[
      ["01", "Initial Submission", "Study and participant materials"],
      ["02", "Local Review", "Questions and requested changes"],
      ["03", "Controlled Revision", "Version-aligned multilingual updates"],
      ["04", "Resubmission", "Reviewed multilingual files"],
    ].map(([number, title, detail]) => (
      <div className="sesen-irb-page__hero-art-mobile-step" key={title}>
        <span>{number}</span>
        <div><strong>{title}</strong><small>{detail}</small></div>
      </div>
    ))}
  </div>
);

const MobileVersionArt = () => (
  <div className="sesen-irb-page__version-mobile" role="img" aria-label="Source revision to multilingual resubmission workflow">
    <div className="sesen-irb-page__version-mobile-card">
      <span>Source Version</span>
      <strong>Updated ICF</strong>
    </div>
    <div className="sesen-irb-page__version-mobile-arrow" aria-hidden="true">↓</div>
    <div className="sesen-irb-page__version-mobile-card sesen-irb-page__version-mobile-card--soft">
      <span>Change Impact</span>
      <strong>Affected files + languages</strong>
    </div>
    <div className="sesen-irb-page__version-mobile-arrow" aria-hidden="true">↓</div>
    <div className="sesen-irb-page__version-mobile-chips">
      <span>Protocol reference</span>
      <span>ICF update</span>
      <span>Participant information update</span>
    </div>
    <div className="sesen-irb-page__version-mobile-arrow" aria-hidden="true">↓</div>
    <div className="sesen-irb-page__version-mobile-card">
      <span>Multilingual Update + QA</span>
      <strong>Terminology · version check · linguistic review</strong>
    </div>
    <div className="sesen-irb-page__version-mobile-result">Controlled Resubmission</div>
  </div>
);

const trustItems = [
  { label: "150+ Languages", detail: "Global study support" },
  { label: "ISO 17100", detail: "Translation quality processes" },
  { label: "ISO 9001", detail: "Quality management" },
  { label: "ISO 13485", detail: "Medical device quality systems" },
  { label: "Human Review", detail: "Life sciences linguistic expertise" },
];

const materialGroups = [
  {
    icon: "file",
    title: "Initial Submission Packages",
    intro: "Prepare multilingual materials for the initial ethics-review process.",
    items: [
      "IRB, IEC, and ethics committee submission materials",
      "Cover letters, protocol summaries, and study synopses",
      "Submission forms when translation is required",
      "Investigator, site, and study supporting documentation",
      "Country- and committee-specific ethics documentation",
    ],
  },
  {
    icon: "people",
    title: "Informed Consent & Participant Materials",
    intro: "Keep participant-facing language accurate, clear, and aligned with the approved study content.",
    items: [
      "Informed consent forms and re-consent materials",
      "Assent forms and participant information sheets",
      "Privacy and authorization materials",
      "Recruitment and screening communications",
      "Study instructions, caregiver materials, and other participant content",
    ],
    link: {
      href: "https://www.sesen.com/informed-consent-form-translation-services/",
      label: "Informed Consent Form Translation Services",
    },
  },
  {
    icon: "message",
    title: "Committee Questions, Responses & Correspondence",
    intro: "Maintain terminology and context as reviewers request clarification or changes.",
    items: [
      "IRB and ethics committee questions",
      "Clarification requests and requested modifications",
      "Sponsor, CRO, and investigator responses",
      "Response letters and revision explanations",
      "Approval-related and follow-up correspondence",
    ],
  },
  {
    icon: "refresh",
    title: "Amendments & Continuing Review",
    intro: "Update affected multilingual materials as clinical studies evolve.",
    items: [
      "Protocol amendments",
      "Revised ICFs, assent forms, and re-consent content",
      "Updated participant and recruitment materials",
      "Safety-related participant communications where applicable",
      "Continuing-review and country- or site-specific updates",
    ],
  },
  {
    icon: "check",
    title: "Approval & Post-Review Documentation",
    intro: "Support the multilingual documentation generated as ethics review progresses.",
    items: [
      "Approval or favorable-opinion correspondence",
      "Conditional approval and required-modification communications",
      "Revision records and final multilingual document sets",
      "Translation documentation and supporting review records",
    ],
  },
];

const workflowSteps = [
  ["Review the Source & Study Context", "Confirm source versions, target languages, locales, study references, formatting requirements, and requested translation documentation."],
  ["Align Study Terminology", "Establish consistent protocol, product, procedure, visit, risk, and participant terminology across the materials."],
  ["Translate & Review", "Life sciences linguists translate participant- and committee-facing materials with the right balance of clarity, clinical precision, and completeness."],
  ["Prepare Multilingual Deliverables", "Check formatting, identifiers, version information, tables, signature areas, and supporting translation documentation as appropriate."],
  ["Support the Local Review Cycle", "Translated materials move through the applicable IRB, IEC, ethics committee, institution, site, or in-country review pathway."],
  ["Process Feedback & Source Changes", "When reviewers request changes, work from the updated source and identify the multilingual documents affected by the revision."],
  ["Propagate Changes Across Languages", "Update affected translations while preserving approved terminology, prior language decisions, and country-specific distinctions."],
  ["Complete QA & Prepare for Resubmission", "Review revised files for linguistic accuracy, completeness, formatting, identifiers, and source-version alignment."],
  ["Maintain Future Amendments", "Continue the same controlled workflow as protocols, consent materials, participant communications, and ethics documentation evolve."],
];

const controlItems = [
  ["compare", "Source & Target Version Control", "Tie each translation to the intended source version, document date, study identifier, amendment, locale, and delivery status."],
  ["branch", "Change Tracking", "Identify changed source content and reviewer comments so the affected translations can be updated without losing surrounding context."],
  ["layers", "Translation Memory", "Reuse previously reviewed language appropriately to improve consistency and reduce unnecessary retranslation."],
  ["book", "Terminology Management", "Maintain study-specific terminology across protocols, ICFs, participant materials, responses, amendments, and correspondence."],
  ["refresh", "Amendment Propagation", "Identify and update the multilingual materials affected by protocol, consent, or participant-content changes."],
  ["message", "Reviewer Comment Management", "Incorporate requested changes while preserving a clear record of language decisions and avoiding unintended inconsistency."],
  ["globe", "Language & Locale Control", "Keep country- and locale-specific versions distinct when approved wording or local conventions differ."],
  ["shield", "Final QA", "Check completeness, terminology, formatting, numbers, dates, tables, identifiers, and version alignment before delivery."],
];

const qualityItems = [
  ["people", "Specialized Life Sciences Linguists", "Professional linguists are selected for relevant language and subject-matter expertise in clinical research and regulated medical content."],
  ["check", "Independent Linguistic Review", "Appropriate bilingual review helps verify accuracy, completeness, clarity, terminology, and consistency before final delivery."],
  ["book", "Study-Specific Terminology", "Sponsor glossaries, protocols, previous approved translations, translation memory, style guidance, and study references can be incorporated into the workflow."],
  ["people", "Participant-Facing Readability", "Consent and participant materials are reviewed for medical accuracy, natural language, clarity, and preservation of the intended meaning."],
  ["file", "In-Context & Document-Level QA", "Review can cover layout, identifiers, protocol numbers, version dates, numbers, units, headings, tables, signature areas, and cross-references."],
  ["layers", "Version & File Control", "Final deliverables are organized to distinguish current files from drafts, reviewer markups, back translations, and superseded versions."],
];

const docsItems = [
  ["check", "Translation Certificates & Attestations", "Certificates of translation or accuracy and related attestations can be provided when requested."],
  ["compare", "Back Translation", "When required by the study workflow, completed target-language content can be translated back into the source language for additional meaning verification."],
  ["refresh", "Reconciliation", "Forward translation and back translation can be compared and reconciled when a documented review of differences is required."],
  ["file", "Formatting & Document Preparation", "Preserve document structure, tables, checkboxes, signature fields, version information, and other submission-sensitive elements."],
  ["layers", "Traceable Project Records", "Manage reference materials, language decisions, reviews, and final deliverables within a controlled workflow that supports future revisions."],
];

const audiences = [
  ["Pharmaceutical & Biotechnology Sponsors", "Centralize multilingual ethics-review support across global and regional clinical development programs."],
  ["Contract Research Organizations", "Coordinate language workflows across study startup, country activation, local ethics review, amendments, and reviewer communication."],
  ["Clinical Operations Teams", "Keep evolving study documentation and participant-facing materials aligned as trials move from startup into active conduct."],
  ["Study Startup Teams", "Prepare multilingual materials for country and site ethics-review workflows while maintaining terminology and source control."],
  ["Regulatory & Ethics Teams", "Manage translated submission materials, correspondence, responses, and supporting documentation across review cycles."],
  ["Medical Writing & Document Teams", "Preserve relationships between protocols, summaries, consent materials, amendments, and multilingual derivative documents."],
];

const services = [
  ["Clinical Trial Translation Services", "Support multilingual content across study startup, participant communication, clinical operations, amendments, and global trial execution.", "https://www.sesen.com/clinical-trial-translation-services/", "Explore Clinical Trial Translation"],
  ["Informed Consent Form Translation Services", "Specialized translation for master, country, and site-specific informed consent forms and related participant materials.", "https://www.sesen.com/informed-consent-form-translation-services/", "Explore ICF Translation"],
  ["Protocol Translation Services", "Translate clinical protocols, synopses, supporting content, and amendments with consistent scientific and study terminology.", "https://www.sesen.com/protocol-translation-services/", "Explore Protocol Translation"],
  ["GCP Compliance Translation Services", "Support multilingual GCP-related clinical documentation, ethics submissions, site materials, training content, and regulated communications.", "https://www.sesen.com/gcp-compliance-translation/", "Explore GCP Compliance Translation"],
  ["Clinical Development Translation Services", "Connect study startup and ethics review with broader multilingual support across clinical development programs.", "https://www.sesen.com/clinical-development-translation-services/", "Explore Clinical Development"],
  ["Regulatory Submission Translation Services", "Support multilingual health-authority submissions, dossier content, agency correspondence, and controlled regulatory review workflows.", "https://www.sesen.com/regulatory-submission-translation-services/", "Explore Regulatory Submission Translation"],
];

const faqs = [
  ["What documents can Sesen translate for IRB and ethics committee submissions?", "Sesen supports informed consent forms, assent forms, participant information sheets, recruitment materials, privacy documentation, protocol summaries, cover letters, supporting study documents, committee questions, response letters, amendments, revised participant materials, approval-related correspondence, and other multilingual submission documentation. Scope can be configured around the study, countries, sites, languages, and review requirements."],
  ["What is the difference between an IRB, IEC, EC, and REC?", "Different institutions and regions use different names for bodies that independently review research involving human participants. Common terminology includes Institutional Review Board (IRB), Independent Ethics Committee (IEC), Ethics Committee (EC), and Research Ethics Committee (REC). For translation purposes, Sesen works with the terminology, documents, and review pathway applicable to your study and markets."],
  ["Can Sesen translate informed consent forms for IRB or ethics committee review?", "Yes. Sesen translates master, country-specific, and site-specific informed consent forms along with assent forms, re-consent materials, patient information sheets, privacy materials, caregiver content, and related participant-facing documentation."],
  ["Can Sesen support translations after an ethics committee requests changes?", "Yes. When the study team provides revised source content or approved changes, Sesen can identify affected multilingual documents, update relevant translations, preserve approved terminology, complete the required review and QA, and prepare revised files for resubmission."],
  ["How does Sesen manage protocol and consent amendments across multiple languages?", "The workflow can use source-version tracking, file comparison, translation memory, study-specific terminology, reviewer history, and structured QA to identify what changed and which language versions are affected. This helps avoid unnecessary retranslation while reducing the risk that outdated language remains in circulation."],
  ["Do IRB translations require certification?", "Translation documentation requirements can vary by institution, committee, sponsor, study, country, and intended use. When requested, Sesen can provide translation certificates or attestations and configure the workflow around the documentation requirements supplied for the submission."],
  ["Is back translation required for ethics committee submissions?", "Not universally. Some sponsors, committees, institutions, study procedures, or local requirements may request back translation or reconciliation for particular materials. Sesen can provide these services when required or when the study team determines that additional meaning verification is appropriate."],
  ["Can Sesen support several countries and ethics committees within the same clinical trial?", "Yes. Sesen supports multilingual programs across 150+ languages and can manage different country, locale, site, document-version, and review requirements within a centralized project workflow."],
  ["Can Sesen translate ethics committee questions and sponsor or CRO responses?", "Yes. Sesen translates questions, clarification requests, response letters, requested modifications, supporting explanations, and related committee correspondence. Where appropriate, the workflow can reference the protocol, ICF, previous correspondence, approved terminology, and other study documents so the translated response remains consistent with the underlying clinical context."],
  ["How does Sesen keep revised translations aligned with the source?", "The workflow can combine source-version control, change tracking, translation memory, terminology management, bilingual review, document-level QA, and clear file identification. When a source changes, the goal is to understand which related documents and languages may also be affected."],
  ["Can Sesen support urgent committee responses or amendment timelines?", "Yes. Sesen can plan accelerated translation and review workflows when timelines are compressed, depending on language coverage, document volume, complexity, required review steps, and delivery format. Early involvement makes it easier to prepare terminology, resources, reviewer availability, and version-control processes before urgent revisions occur."],
  ["Does Sesen guarantee IRB or ethics committee approval?", "No. IRBs, IECs, ethics committees, institutions, and other applicable review bodies make their own review and approval decisions. Sesen provides specialized translation, multilingual document control, linguistic review, formatting, and supporting translation documentation to help clinical teams prepare and maintain materials throughout the ethics-review process."],
];

const styles = `
.sesen-irb-page {
  --sesen-irb-blue: #4B6FD8;
  --sesen-irb-blue-dark: #3659BB;
  --sesen-irb-blue-deep: #253F8F;
  --sesen-irb-blue-mid: #6F8BE1;
  --sesen-irb-blue-soft: #EAF0FF;
  --sesen-irb-blue-pale: #F5F7FF;
  --sesen-irb-navy: #17264D;
  --sesen-irb-ink: #111827;
  --sesen-irb-body: #46546D;
  --sesen-irb-muted: #68758B;
  --sesen-irb-border: #DDE4F2;
  --sesen-irb-divider: #E9EEF8;
  --sesen-irb-section: #F7F9FD;
  --sesen-irb-white: #FFFFFF;
  --sesen-irb-light-accent: #C8D6FF;
  color: var(--sesen-irb-body);
  background: var(--sesen-irb-white);
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow-x: clip;
}

.sesen-irb-page * { box-sizing: border-box; }
.sesen-irb-page img,
.sesen-irb-page svg { max-width: 100%; }
.sesen-irb-page button,
.sesen-irb-page a { -webkit-tap-highlight-color: transparent; }

.sesen-irb-page__shell {
  width: min(1280px, calc(100% - 112px));
  margin: 0 auto;
}

.sesen-irb-page__hero {
  position: relative;
  padding: 96px 0 92px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
  border-bottom: 1px solid var(--sesen-irb-divider);
}

.sesen-irb-page__hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr);
  gap: 64px;
  align-items: center;
}

.sesen-irb-page__eyebrow {
  color: var(--sesen-irb-blue-dark);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.sesen-irb-page__eyebrow--compact { margin-bottom: 10px; }

.sesen-irb-page__hero h1,
.sesen-irb-page h2,
.sesen-irb-page h3 {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-weight: 500;
  color: var(--sesen-irb-navy);
  margin: 0;
}

.sesen-irb-page__hero h1 {
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: -0.5px;
  max-width: 700px;
}

.sesen-irb-page__hero-lead {
  max-width: 690px;
  margin: 24px 0 0;
  color: #293954;
  font-size: 19px;
  line-height: 1.65;
}

.sesen-irb-page__hero-support {
  max-width: 690px;
  margin: 16px 0 0;
  color: var(--sesen-irb-body);
  font-size: 16px;
}

.sesen-irb-page__hero-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 30px;
}

.sesen-irb-page__button {
  min-height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 27px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  border: 1px solid transparent;
  transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
}

.sesen-irb-page a.sesen-irb-page__button--primary,
.sesen-irb-page a.sesen-irb-page__button--primary:visited {
  background: var(--sesen-irb-blue);
  color: #FFFFFF;
}

.sesen-irb-page a.sesen-irb-page__button--primary:hover,
.sesen-irb-page a.sesen-irb-page__button--primary:focus-visible {
  background: var(--sesen-irb-blue-dark);
  color: #FFFFFF;
}
.sesen-irb-page a.sesen-irb-page__button--primary:active {
  color: #FFFFFF;
  transform: translateY(1px);
}

.sesen-irb-page a.sesen-irb-page__button--light,
.sesen-irb-page a.sesen-irb-page__button--light:visited {
  background: #FFFFFF;
  color: var(--sesen-irb-ink);
  border-color: var(--sesen-irb-border);
}

.sesen-irb-page a.sesen-irb-page__button--light:hover,
.sesen-irb-page a.sesen-irb-page__button--light:focus-visible {
  background: var(--sesen-irb-blue-soft);
  color: var(--sesen-irb-ink);
  border-color: var(--sesen-irb-light-accent);
}

.sesen-irb-page__button:focus-visible,
.sesen-irb-page__arrow-link:focus-visible,
.sesen-irb-page summary:focus-visible {
  outline: 3px solid rgba(75,111,216,.32);
  outline-offset: 4px;
}

.sesen-irb-page__arrow-link,
.sesen-irb-page__arrow-link:visited {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--sesen-irb-blue-dark);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
}

.sesen-irb-page__arrow-link svg { transition: transform .18s ease; }
.sesen-irb-page__arrow-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
.sesen-irb-page__arrow-link:hover svg { transform: translateX(3px); }

.sesen-irb-page__hero-art {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sesen-irb-page__hero-art::before,
.sesen-irb-page__hero-art::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: var(--sesen-irb-blue-soft);
  opacity: .5;
  z-index: 0;
}

.sesen-irb-page__hero-art::before { width: 86px; height: 86px; top: 26px; right: 20px; }
.sesen-irb-page__hero-art::after { width: 42px; height: 42px; bottom: 30px; left: 34px; }
.sesen-irb-page__hero-art-svg { position: relative; z-index: 1; width: 100%; }

.sesen-irb-page__hero-art-mobile,
.sesen-irb-page__version-mobile { display: none; }

.sesen-irb-page__hero-art-mobile {
  width: 100%;
  border: 1px solid var(--sesen-irb-border);
  border-radius: 24px;
  padding: 18px;
  background: var(--sesen-irb-blue-pale);
}
.sesen-irb-page__hero-art-mobile-step {
  position: relative;
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 14px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__hero-art-mobile-step:last-child { border-bottom: 0; }
.sesen-irb-page__hero-art-mobile-step > span {
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--sesen-irb-blue);
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 700;
}
.sesen-irb-page__hero-art-mobile-step strong {
  display: block;
  color: var(--sesen-irb-navy);
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
}
.sesen-irb-page__hero-art-mobile-step small {
  display: block;
  margin-top: 3px;
  color: var(--sesen-irb-muted);
  font-size: 14px;
  line-height: 1.45;
}

.sesen-irb-page__version-mobile { padding: 10px 4px 4px; }
.sesen-irb-page__version-mobile-card {
  padding: 16px 18px;
  border: 1px solid var(--sesen-irb-border);
  border-radius: 16px;
  background: #FFFFFF;
}
.sesen-irb-page__version-mobile-card--soft {
  background: var(--sesen-irb-blue-soft);
  border-color: var(--sesen-irb-light-accent);
}
.sesen-irb-page__version-mobile-card span {
  display: block;
  color: var(--sesen-irb-blue-dark);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.sesen-irb-page__version-mobile-card strong {
  display: block;
  margin-top: 5px;
  color: var(--sesen-irb-navy);
  font-size: 16px;
  line-height: 1.45;
}
.sesen-irb-page__version-mobile-arrow {
  padding: 5px 0;
  text-align: center;
  color: var(--sesen-irb-blue-dark);
  font-size: 22px;
  line-height: 1;
}
.sesen-irb-page__version-mobile-chips {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}
.sesen-irb-page__version-mobile-chips span {
  padding: 10px 12px;
  border: 1px solid var(--sesen-irb-border);
  border-radius: 12px;
  background: #FFFFFF;
  color: var(--sesen-irb-body);
  font-size: 14px;
  line-height: 1.4;
}
.sesen-irb-page__version-mobile-result {
  margin-top: 12px;
  min-height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--sesen-irb-blue);
  color: #FFFFFF;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .05em;
  text-align: center;
  text-transform: uppercase;
}

.sesen-irb-page__trust {
  background: #FFFFFF;
  border-bottom: 1px solid var(--sesen-irb-divider);
}

.sesen-irb-page__trust-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0,1fr));
  gap: 0;
  padding: 22px 0;
}

.sesen-irb-page__trust-item {
  padding: 6px 20px;
  border-right: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__trust-item:first-child { padding-left: 0; }
.sesen-irb-page__trust-item:last-child { border-right: 0; padding-right: 0; }
.sesen-irb-page__trust-item strong { display: block; color: var(--sesen-irb-navy); font-size: 15px; line-height: 1.35; }
.sesen-irb-page__trust-item span { display: block; margin-top: 4px; color: var(--sesen-irb-muted); font-size: 13px; line-height: 1.4; }

.sesen-irb-page__section { padding: 96px 0; }
.sesen-irb-page__section--dense { padding: 82px 0; }
.sesen-irb-page__section--soft { background: var(--sesen-irb-section); }
.sesen-irb-page__section--blue-soft { background: var(--sesen-irb-blue-pale); }
.sesen-irb-page__section--dark { background: var(--sesen-irb-navy); color: #E8EEFF; }

.sesen-irb-page__section-heading { max-width: 820px; margin-bottom: 48px; }
.sesen-irb-page__section-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
.sesen-irb-page__section-heading--left { text-align: left; }
.sesen-irb-page__section-heading h2 { font-size: 36px; line-height: 1.3; }
.sesen-irb-page__section-heading p { margin: 18px 0 0; font-size: 18px; line-height: 1.7; color: var(--sesen-irb-body); }
.sesen-irb-page__section--dark .sesen-irb-page__section-heading h2 { color: #FFFFFF; }
.sesen-irb-page__section--dark .sesen-irb-page__section-heading p { color: #C8D6E8; }
.sesen-irb-page__section--dark .sesen-irb-page__eyebrow { color: var(--sesen-irb-light-accent); }

.sesen-irb-page__overview-title { font-size: 36px; line-height: 1.3; }

.sesen-irb-page__overview-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 72px;
  align-items: start;
}

.sesen-irb-page__overview-callout {
  padding: 30px 32px;
  background: var(--sesen-irb-blue-pale);
  border-left: 2px solid var(--sesen-irb-blue);
  border-radius: 0 22px 22px 0;
}
.sesen-irb-page__overview-callout p { margin: 0; font-size: 20px; line-height: 1.6; color: var(--sesen-irb-navy); }
.sesen-irb-page__overview-callout--spaced { margin-top: 28px; }
.sesen-irb-page__overview-copy p { margin: 0 0 18px; font-size: 17px; }
.sesen-irb-page__overview-copy p:last-child { margin-bottom: 0; }
.sesen-irb-page__cycle-line {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;
  color: var(--sesen-irb-blue-dark);
  font-size: 14px;
  font-weight: 700;
}
.sesen-irb-page__cycle-line span { white-space: nowrap; }
.sesen-irb-page__cycle-arrow { color: #9AA8C1; }

.sesen-irb-page__materials {
  border-top: 1px solid var(--sesen-irb-divider);
}

.sesen-irb-page__material-row {
  display: grid;
  grid-template-columns: 56px minmax(220px,.78fr) minmax(0,1.65fr);
  gap: 28px;
  padding: 30px 0;
  border-bottom: 1px solid var(--sesen-irb-divider);
  align-items: start;
}

.sesen-irb-page__icon-box {
  width: 48px;
  height: 48px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--sesen-irb-blue-soft);
  color: var(--sesen-irb-blue-dark);
}

.sesen-irb-page__material-title h3 { font-size: 23px; line-height: 1.3; }
.sesen-irb-page__material-title p { margin: 10px 0 0; color: var(--sesen-irb-muted); font-size: 16px; }
.sesen-irb-page__material-content ul,
.sesen-irb-page__bullet-list { list-style: none; margin: 0; padding: 0; }
.sesen-irb-page__material-content li,
.sesen-irb-page__bullet-list li { position: relative; padding-left: 24px; margin: 0 0 10px; font-size: 16px; }
.sesen-irb-page__material-content li:last-child,
.sesen-irb-page__bullet-list li:last-child { margin-bottom: 0; }
.sesen-irb-page__material-content li::before,
.sesen-irb-page__bullet-list li::before {
  content: "";
  position: absolute;
  left: 2px;
  top: .72em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--sesen-irb-blue);
}
.sesen-irb-page__material-content .sesen-irb-page__arrow-link { margin-top: 18px; }
.sesen-irb-page__material-note { margin-top: 30px; max-width: 930px; font-size: 16px; color: var(--sesen-irb-muted); }

.sesen-irb-page__workflow-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--sesen-irb-border);
  border-left: 1px solid var(--sesen-irb-border);
  background: #FFFFFF;
}
.sesen-irb-page__workflow-step {
  position: relative;
  min-height: 245px;
  padding: 30px;
  border-right: 1px solid var(--sesen-irb-border);
  border-bottom: 1px solid var(--sesen-irb-border);
}
.sesen-irb-page__workflow-number {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  background: var(--sesen-irb-blue);
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 22px;
}
.sesen-irb-page__workflow-step h3 { font-size: 21px; line-height: 1.35; }
.sesen-irb-page__workflow-step p { margin: 12px 0 0; font-size: 16px; color: var(--sesen-irb-body); }
.sesen-irb-page__workflow-summary {
  margin: 32px auto 0;
  max-width: 980px;
  padding: 18px 24px;
  border-radius: 999px;
  text-align: center;
  color: var(--sesen-irb-blue-deep);
  background: var(--sesen-irb-blue-soft);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .01em;
}

.sesen-irb-page__audience-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  border: 1px solid var(--sesen-irb-border);
  border-radius: 28px;
  overflow: hidden;
  background: #FFFFFF;
}
.sesen-irb-page__audience-panel { padding: 42px 44px; }
.sesen-irb-page__audience-panel + .sesen-irb-page__audience-panel { border-left: 1px solid var(--sesen-irb-border); background: var(--sesen-irb-blue-pale); }
.sesen-irb-page__audience-kicker { display: flex; align-items: center; gap: 11px; color: var(--sesen-irb-blue-dark); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
.sesen-irb-page__audience-panel h3 { margin-top: 16px; font-size: 28px; }
.sesen-irb-page__audience-panel > p { margin: 14px 0 24px; font-size: 16px; }
.sesen-irb-page__audience-foot { margin: 24px auto 0; max-width: 760px; text-align: center; font-size: 17px; color: var(--sesen-irb-navy); }

.sesen-irb-page__control-grid {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(420px,.9fr);
  gap: 64px;
  align-items: center;
}
.sesen-irb-page__control-list { border-top: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__control-item {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__control-item-icon { width: 38px; height: 38px; border-radius: 11px; display: flex; align-items: center; justify-content: center; background: var(--sesen-irb-blue-soft); color: var(--sesen-irb-blue-dark); }
.sesen-irb-page__control-item h3 { font-size: 20px; }
.sesen-irb-page__control-item p { margin: 7px 0 0; font-size: 16px; color: var(--sesen-irb-body); }
.sesen-irb-page__version-art-wrap { padding: 20px; border-radius: 28px; background: #FFFFFF; border: 1px solid var(--sesen-irb-border); }
.sesen-irb-page__version-caption { margin: 18px 8px 0; font-size: 16px; line-height: 1.65; color: var(--sesen-irb-muted); }

.sesen-irb-page__global-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 72px;
  align-items: start;
}
.sesen-irb-page__global-intro h2 { font-size: 36px; line-height: 1.3; color: #FFFFFF; }
.sesen-irb-page__global-intro p { margin: 20px 0 0; font-size: 18px; color: #C8D6E8; }
.sesen-irb-page__terms { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.sesen-irb-page__term { padding: 8px 13px; border: 1px solid rgba(200,214,255,.32); border-radius: 999px; color: #FFFFFF; font-size: 13px; font-weight: 700; }
.sesen-irb-page__global-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 1px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.12); }
.sesen-irb-page__global-item { padding: 26px; background: rgba(255,255,255,.045); color: #DDE6F7; font-size: 16px; }
.sesen-irb-page__global-item strong { display: block; margin-bottom: 7px; color: #FFFFFF; font-size: 17px; }
.sesen-irb-page__global-note { margin-top: 24px; color: #C8D6E8; font-size: 16px; }

.sesen-irb-page__quality-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  border-top: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__quality-item {
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 18px;
  padding: 30px 34px 30px 0;
  border-bottom: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__quality-item:nth-child(odd) { border-right: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__quality-item:nth-child(even) { padding-left: 34px; }
.sesen-irb-page__quality-item .sesen-irb-page__icon-box { width: 44px; height: 44px; }
.sesen-irb-page__quality-item h3 { font-size: 21px; }
.sesen-irb-page__quality-item p { margin: 9px 0 0; font-size: 16px; }

.sesen-irb-page__docs-layout {
  display: grid;
  grid-template-columns: .72fr 1.28fr;
  gap: 68px;
  align-items: start;
}
.sesen-irb-page__docs-intro h2 { font-size: 36px; line-height: 1.3; }
.sesen-irb-page__docs-intro p { margin: 18px 0 0; font-size: 17px; }
.sesen-irb-page__docs-list { border-top: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__docs-row { display: grid; grid-template-columns: 44px minmax(180px,.55fr) 1fr; gap: 18px; padding: 23px 0; border-bottom: 1px solid var(--sesen-irb-divider); align-items: start; }
.sesen-irb-page__docs-row h3 { font-size: 20px; }
.sesen-irb-page__docs-row p { margin: 0; font-size: 16px; }
.sesen-irb-page__docs-note { margin-top: 20px; padding: 18px 20px; border-radius: 18px; background: var(--sesen-irb-blue-pale); color: var(--sesen-irb-body); font-size: 16px; }

.sesen-irb-page__buyer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 0;
  border-top: 1px solid var(--sesen-irb-divider);
  border-left: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__buyer-item { padding: 30px; border-right: 1px solid var(--sesen-irb-divider); border-bottom: 1px solid var(--sesen-irb-divider); background: #FFFFFF; }
.sesen-irb-page__buyer-item h3 { font-size: 21px; }
.sesen-irb-page__buyer-item p { margin: 10px 0 0; font-size: 16px; }

.sesen-irb-page__scale-panel {
  margin-top: 56px;
  display: grid;
  grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr);
  gap: 50px;
  padding: 46px 48px;
  border-radius: 28px;
  background: var(--sesen-irb-blue-pale);
  border: 1px solid #DCE5FF;
}
.sesen-irb-page__scale-panel h3 { font-size: 28px; }
.sesen-irb-page__scale-panel p { margin: 14px 0 0; font-size: 17px; }
.sesen-irb-page__scale-tags { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 12px; align-content: center; }
.sesen-irb-page__scale-tag { padding: 18px 16px; border-radius: 16px; background: #FFFFFF; border: 1px solid var(--sesen-irb-border); }
.sesen-irb-page__scale-tag strong { display: block; color: var(--sesen-irb-navy); font-size: 16px; }
.sesen-irb-page__scale-tag span { display: block; margin-top: 5px; color: var(--sesen-irb-muted); font-size: 16px; line-height: 1.5; }

.sesen-irb-page__tech-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
.sesen-irb-page__tech-copy h2 { font-size: 36px; line-height: 1.3; }
.sesen-irb-page__tech-copy p { margin: 18px 0 0; font-size: 17px; }
.sesen-irb-page__tech-copy strong { color: var(--sesen-irb-navy); }
.sesen-irb-page__tech-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px 28px; padding: 28px; border-radius: 24px; background: #FFFFFF; border: 1px solid var(--sesen-irb-border); }
.sesen-irb-page__tech-item { display: flex; align-items: flex-start; gap: 11px; padding: 10px 0; color: var(--sesen-irb-body); font-size: 16px; }
.sesen-irb-page__tech-item svg { flex: 0 0 auto; margin-top: 2px; color: var(--sesen-irb-blue-dark); }

.sesen-irb-page__services { border-top: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__service-row {
  display: grid;
  grid-template-columns: minmax(240px,.7fr) minmax(0,1.25fr) auto;
  gap: 26px;
  align-items: center;
  padding: 26px 0;
  border-bottom: 1px solid var(--sesen-irb-divider);
}
.sesen-irb-page__service-row h3 { font-size: 21px; }
.sesen-irb-page__service-row p { margin: 0; font-size: 16px; }
.sesen-irb-page__service-row .sesen-irb-page__arrow-link { white-space: nowrap; }

.sesen-irb-page__resource {
  display: grid;
  grid-template-columns: 72px 1fr auto;
  gap: 28px;
  align-items: center;
  padding: 34px 36px;
  border-radius: 26px;
  border: 1px solid var(--sesen-irb-border);
  background: #FFFFFF;
}
.sesen-irb-page__resource-icon { width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; border-radius: 18px; background: var(--sesen-irb-blue-soft); color: var(--sesen-irb-blue-dark); }
.sesen-irb-page__resource h3 { font-size: 25px; }
.sesen-irb-page__resource p { margin: 9px 0 0; max-width: 760px; font-size: 16px; }

.sesen-irb-page__faq-list { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__faq-list details { border-bottom: 1px solid var(--sesen-irb-divider); }
.sesen-irb-page__faq-list summary {
  list-style: none;
  cursor: pointer;
  min-height: 76px;
  display: grid;
  grid-template-columns: 1fr 34px;
  gap: 22px;
  align-items: center;
  color: var(--sesen-irb-navy);
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 500;
}
.sesen-irb-page__faq-list summary::-webkit-details-marker { display: none; }
.sesen-irb-page__faq-plus { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--sesen-irb-border); position: relative; }
.sesen-irb-page__faq-plus::before,
.sesen-irb-page__faq-plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 12px; height: 2px; background: var(--sesen-irb-blue-dark); transform: translate(-50%,-50%); }
.sesen-irb-page__faq-plus::after { transform: translate(-50%,-50%) rotate(90deg); transition: transform .18s ease; }
.sesen-irb-page__faq-list details[open] .sesen-irb-page__faq-plus::after { transform: translate(-50%,-50%) rotate(0deg); }
.sesen-irb-page__faq-answer { max-width: 840px; padding: 0 60px 26px 0; font-size: 16px; color: var(--sesen-irb-body); }
.sesen-irb-page__faq-answer p { margin: 0; }

.sesen-irb-page__final-cta { padding: 88px 0; background: linear-gradient(115deg, #17264D 0%, #253F8F 100%); }
.sesen-irb-page__final-cta-grid { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center; }
.sesen-irb-page__final-cta h2 { color: #FFFFFF; font-size: 36px; line-height: 1.3; }
.sesen-irb-page__final-cta p { max-width: 760px; margin: 16px 0 0; color: #D9E2F2; font-size: 18px; }
.sesen-irb-page__final-actions { display: flex; align-items: center; justify-content: flex-end; gap: 22px; }
.sesen-irb-page__final-actions .sesen-irb-page__arrow-link,
.sesen-irb-page__final-actions .sesen-irb-page__arrow-link:visited { color: var(--sesen-irb-light-accent); }

@media (max-width: 1100px) {
  .sesen-irb-page__shell { width: min(1280px, calc(100% - 80px)); }
  .sesen-irb-page__hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.82fr); gap: 40px; }
  .sesen-irb-page__hero-art { min-height: 460px; }
  .sesen-irb-page__control-grid,
  .sesen-irb-page__tech-grid { gap: 46px; }
  .sesen-irb-page__control-grid { grid-template-columns: minmax(0,1.05fr) minmax(360px,.95fr); }
}

@media (max-width: 900px) {
  .sesen-irb-page__shell { width: calc(100% - 58px); }
  .sesen-irb-page__hero { padding: 82px 0 78px; }
  .sesen-irb-page__hero-grid { grid-template-columns: 1fr; }
  .sesen-irb-page__hero-copy { max-width: 760px; }
  .sesen-irb-page__hero-art { min-height: 420px; max-width: 680px; margin: 0 auto; }
  .sesen-irb-page__trust-grid { grid-template-columns: repeat(3,1fr); row-gap: 18px; }
  .sesen-irb-page__trust-item { border-right: 0; padding: 4px 20px 4px 0; }
  .sesen-irb-page__section { padding: 82px 0; }
  .sesen-irb-page__section--dense { padding: 74px 0; }
  .sesen-irb-page__overview-grid,
  .sesen-irb-page__global-grid,
  .sesen-irb-page__docs-layout,
  .sesen-irb-page__tech-grid { grid-template-columns: 1fr; gap: 42px; }
  .sesen-irb-page__material-row { grid-template-columns: 52px minmax(0,1fr); }
  .sesen-irb-page__material-content { grid-column: 2; }
  .sesen-irb-page__workflow-list { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-irb-page__control-grid { grid-template-columns: 1fr; }
  .sesen-irb-page__version-art-wrap { max-width: 680px; }
  .sesen-irb-page__buyer-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .sesen-irb-page__scale-panel { grid-template-columns: 1fr; }
  .sesen-irb-page__service-row { grid-template-columns: minmax(220px,.7fr) minmax(0,1fr); }
  .sesen-irb-page__service-row .sesen-irb-page__arrow-link { grid-column: 2; justify-self: start; }
  .sesen-irb-page__resource { grid-template-columns: 64px 1fr; }
  .sesen-irb-page__resource .sesen-irb-page__arrow-link { grid-column: 2; justify-self: start; }
  .sesen-irb-page__final-cta-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .sesen-irb-page__shell { width: calc(100% - 56px); }
  .sesen-irb-page__hero h1 { font-size: 42px; }
  .sesen-irb-page__section-heading h2,
  .sesen-irb-page__overview-title,
  .sesen-irb-page__global-intro h2,
  .sesen-irb-page__docs-intro h2,
  .sesen-irb-page__tech-copy h2,
  .sesen-irb-page__final-cta h2 { font-size: 32px; }
  .sesen-irb-page__section-heading p { font-size: 17px; }
  .sesen-irb-page__audience-grid { grid-template-columns: 1fr; }
  .sesen-irb-page__audience-panel + .sesen-irb-page__audience-panel { border-left: 0; border-top: 1px solid var(--sesen-irb-border); }
  .sesen-irb-page__quality-grid { grid-template-columns: 1fr; }
  .sesen-irb-page__quality-item,
  .sesen-irb-page__quality-item:nth-child(even) { padding: 26px 0; border-right: 0; }
  .sesen-irb-page__global-list { grid-template-columns: 1fr; }
  .sesen-irb-page__docs-row { grid-template-columns: 42px 1fr; }
  .sesen-irb-page__docs-row p { grid-column: 2; }
  .sesen-irb-page__scale-tags { grid-template-columns: repeat(2,minmax(0,1fr)); }
}

@media (max-width: 620px) {
  .sesen-irb-page__shell { width: calc(100% - 40px); }
  .sesen-irb-page__hero { padding: 68px 0 64px; }
  .sesen-irb-page__hero h1 { font-size: 42px; }
  .sesen-irb-page__hero-lead { font-size: 18px; }
  .sesen-irb-page__hero-actions { flex-direction: column; align-items: stretch; gap: 16px; }
  .sesen-irb-page__hero-actions .sesen-irb-page__button { width: 100%; }
  .sesen-irb-page__hero-actions .sesen-irb-page__arrow-link { min-height: 44px; justify-content: center; }
  .sesen-irb-page__hero-art { min-height: auto; margin-top: 18px; }
  .sesen-irb-page__hero-art-svg { display: none; }
  .sesen-irb-page__hero-art-mobile { display: block; }
  .sesen-irb-page__version-art { display: none; }
  .sesen-irb-page__version-mobile { display: block; }
  .sesen-irb-page__trust-grid { grid-template-columns: repeat(2,1fr); gap: 0 18px; }
  .sesen-irb-page__trust-item { padding: 12px 0; border-bottom: 1px solid var(--sesen-irb-divider); }
  .sesen-irb-page__trust-item:last-child { border-bottom: 0; }
  .sesen-irb-page__cycle-line { row-gap: 6px; }
  .sesen-irb-page__workflow-summary { font-size: 16px; line-height: 1.5; }
  .sesen-irb-page__section,
  .sesen-irb-page__section--dense { padding: 68px 0; }

  .sesen-irb-page__section-heading--center { text-align: center; }
  .sesen-irb-page__section-heading--left { text-align: left; }
  .sesen-irb-page__section-heading h2,
  .sesen-irb-page__overview-title,
  .sesen-irb-page__global-intro h2,
  .sesen-irb-page__docs-intro h2,
  .sesen-irb-page__tech-copy h2,
  .sesen-irb-page__final-cta h2 { font-size: 32px; }
  .sesen-irb-page__section-heading p,
  .sesen-irb-page__global-intro p,
  .sesen-irb-page__docs-intro p,
  .sesen-irb-page__tech-copy p { text-align: left; }

  .sesen-irb-page__overview-title,
  .sesen-irb-page__tech-copy > .sesen-irb-page__eyebrow,
  .sesen-irb-page__tech-copy > h2,
  .sesen-irb-page__final-cta h2 { text-align: center; }

  .sesen-irb-page__overview-grid { gap: 28px; }
  .sesen-irb-page__overview-callout { padding: 24px 24px; }
  .sesen-irb-page__overview-callout p { font-size: 18px; }

  .sesen-irb-page__material-row { grid-template-columns: 44px 1fr; gap: 16px; padding: 26px 0; }
  .sesen-irb-page__icon-box { width: 42px; height: 42px; }
  .sesen-irb-page__material-content { grid-column: 1 / -1; padding-left: 0; }
  .sesen-irb-page__material-title h3 { font-size: 21px; }

  .sesen-irb-page__workflow-list { grid-template-columns: 1fr; border-left: 0; border-top: 0; background: transparent; }
  .sesen-irb-page__workflow-step { min-height: 0; padding: 26px 0 26px 58px; border-right: 0; border-bottom: 1px solid var(--sesen-irb-divider); }
  .sesen-irb-page__workflow-number { position: absolute; left: 0; top: 26px; }
  .sesen-irb-page__workflow-summary { border-radius: 20px; text-align: left; }

  .sesen-irb-page__audience-panel { padding: 30px 24px; }
  .sesen-irb-page__audience-panel h3 { font-size: 25px; }
  .sesen-irb-page__audience-foot { text-align: left; }

  .sesen-irb-page__control-grid { gap: 36px; }
  .sesen-irb-page__control-item { grid-template-columns: 38px 1fr; }
  .sesen-irb-page__version-art-wrap { padding: 8px; }

  .sesen-irb-page__global-grid { gap: 34px; }
  .sesen-irb-page__terms { gap: 8px; }
  .sesen-irb-page__global-list { border-left: 0; border-right: 0; }

  .sesen-irb-page__quality-item { grid-template-columns: 44px 1fr; gap: 14px; }
  .sesen-irb-page__docs-row { grid-template-columns: 40px 1fr; }

  .sesen-irb-page__buyer-grid { grid-template-columns: 1fr; border-left: 0; }
  .sesen-irb-page__buyer-item { padding: 26px 0; border-right: 0; }
  .sesen-irb-page__scale-panel { padding: 30px 24px; gap: 30px; }
  .sesen-irb-page__scale-tags { grid-template-columns: 1fr; }
  .sesen-irb-page__tech-list { grid-template-columns: 1fr; padding: 22px; }

  .sesen-irb-page__service-row { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
  .sesen-irb-page__service-row .sesen-irb-page__arrow-link { grid-column: 1; margin-top: 5px; }
  .sesen-irb-page__resource { grid-template-columns: 1fr; padding: 28px 24px; }
  .sesen-irb-page__resource .sesen-irb-page__arrow-link { grid-column: 1; }

  .sesen-irb-page__faq-list summary { min-height: 72px; font-size: 19px; grid-template-columns: 1fr 32px; gap: 14px; }
  .sesen-irb-page__faq-answer { padding-right: 0; }
  .sesen-irb-page__final-cta { padding: 68px 0; }
  .sesen-irb-page__final-actions { flex-direction: column; align-items: stretch; justify-content: flex-start; }
  .sesen-irb-page__final-actions .sesen-irb-page__button { width: 100%; }
  .sesen-irb-page__final-actions .sesen-irb-page__arrow-link { justify-content: center; min-height: 44px; }
}

@media (max-width: 360px) {
  .sesen-irb-page__hero h1 { font-size: 38px; }
  .sesen-irb-page__section-heading h2,
  .sesen-irb-page__overview-title,
  .sesen-irb-page__global-intro h2,
  .sesen-irb-page__docs-intro h2,
  .sesen-irb-page__tech-copy h2,
  .sesen-irb-page__final-cta h2 { font-size: 30px; }
  .sesen-irb-page__trust-grid { grid-template-columns: 1fr; }
  .sesen-irb-page__trust-item,
  .sesen-irb-page__trust-item:last-child { border-bottom: 0; }
  .sesen-irb-page__material-content { padding-left: 0; }
  .sesen-irb-page__cycle-line { display: block; }
  .sesen-irb-page__cycle-line span { display: inline; white-space: normal; }
  .sesen-irb-page__cycle-arrow { padding: 0 4px; }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-irb-page__button,
  .sesen-irb-page__arrow-link svg,
  .sesen-irb-page__faq-plus::after { transition: none; }
}
`;

export default function IRBEthicsCommitteeTranslationServicesWireframe() {
  return (
    <main className="sesen-irb-page">
      <style>{styles}</style>

      <section className="sesen-irb-page__hero" aria-labelledby="irb-hero-title">
        <div className="sesen-irb-page__shell sesen-irb-page__hero-grid">
          <div className="sesen-irb-page__hero-copy">
            <div className="sesen-irb-page__eyebrow">CLINICAL TRIAL ETHICS REVIEW</div>
            <h1 id="irb-hero-title">IRB &amp; Ethics Committee Translation Services</h1>
            <p className="sesen-irb-page__hero-lead">
              Keep multilingual clinical trial materials aligned from initial ethics submission through local review, committee feedback, amendments, and controlled resubmission.
            </p>
            <p className="sesen-irb-page__hero-support">
              Sesen provides specialized translation support for sponsors, CROs, biotechnology companies, pharmaceutical organizations, medical device companies, and clinical research teams—with careful attention to clinical meaning, participant readability, study terminology, version control, and evolving document relationships.
            </p>
            <div className="sesen-irb-page__hero-actions">
              <a className="sesen-irb-page__button sesen-irb-page__button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <ArrowLink href="https://www.sesen.com/contact-sales/">Talk to a Life Sciences Specialist</ArrowLink>
            </div>
          </div>
          <div className="sesen-irb-page__hero-art">
            <WorkflowArt />
            <MobileWorkflowArt />
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__trust" aria-label="Sesen trust and capability highlights">
        <div className="sesen-irb-page__shell sesen-irb-page__trust-grid">
          {trustItems.map((item) => (
            <div className="sesen-irb-page__trust-item" key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="workflow-context-title">
        <div className="sesen-irb-page__shell sesen-irb-page__overview-grid">
          <div>
            <h2 id="workflow-context-title" className="sesen-irb-page__overview-title">Ethics Review Is a Multilingual Workflow, Not a Single Submission</h2>
            <div className="sesen-irb-page__overview-callout sesen-irb-page__overview-callout--spaced">
              <p>Translation has to stay synchronized as reviewers ask questions, source documents change, and affected language versions move through the next review cycle.</p>
            </div>
          </div>
          <div className="sesen-irb-page__overview-copy">
            <p>
              IRB and ethics committee translation rarely ends with the first submission. Clinical trial materials may move through sponsors, CROs, investigators, sites, Institutional Review Boards (IRBs), Independent Ethics Committees (IECs), Ethics Committees (ECs), Research Ethics Committees (RECs), and local review teams before they reach a final study-ready state.
            </p>
            <p>
              Along the way, questions may be raised, participant language may be revised, protocol amendments may affect previously translated content, and local committees may request changes that apply only to specific countries or sites.
            </p>
            <p>
              Sesen approaches the work as a controlled multilingual review cycle—maintaining the relationship between the evolving source documents and every affected translation.
            </p>
            <div className="sesen-irb-page__cycle-line" aria-label="Ethics review translation cycle">
              <span>PREPARE</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>TRANSLATE</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>SUBMIT</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>REVIEW</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>RESPOND</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>REVISE</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>RESUBMIT</span><span className="sesen-irb-page__cycle-arrow">→</span>
              <span>MAINTAIN</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--soft" aria-labelledby="materials-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="Materials We Support for IRB, IEC & Ethics Committee Review"
            intro="Ethics-review packages can combine participant-facing content, clinical study documentation, correspondence, and supporting submission files. Sesen supports multilingual materials throughout the review process while keeping participant, study, correspondence, and revision content connected to the correct source context."
            id="materials-title"
            align="center"
          />
          <div className="sesen-irb-page__materials">
            {materialGroups.map((group) => (
              <article className="sesen-irb-page__material-row" key={group.title}>
                <div className="sesen-irb-page__icon-box"><Icon name={group.icon} /></div>
                <div className="sesen-irb-page__material-title">
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                </div>
                <div className="sesen-irb-page__material-content">
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {group.link ? <ArrowLink href={group.link.href}>{group.link.label}</ArrowLink> : null}
                </div>
              </article>
            ))}
          </div>
          <p className="sesen-irb-page__material-note">
            Sesen supports the multilingual documentation and review workflow. Ethics-review requirements and approval decisions remain with the applicable study teams, institutions, committees, and authorities.
          </p>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="controlled-workflow-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            eyebrow="CONTROLLED REVIEW CYCLE"
            title="From Initial Submission to Controlled Multilingual Resubmission"
            intro="Effective ethics committee translation workflows are designed for change from the beginning. Each step preserves the connection between study context, source versions, language decisions, and final deliverables."
            id="controlled-workflow-title"
            align="left"
          />
          <div className="sesen-irb-page__workflow-list">
            {workflowSteps.map(([title, text], index) => (
              <article className="sesen-irb-page__workflow-step" key={title}>
                <div className="sesen-irb-page__workflow-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-irb-page__workflow-summary">SUBMISSION → LOCAL REVIEW → FEEDBACK → REVISION → CONTROLLED MULTILINGUAL RESUBMISSION</div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--blue-soft" aria-labelledby="two-audiences-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="One Review Workflow. Two Critical Audiences."
            intro="Multilingual ethics-review packages often serve people making decisions about participation and committees evaluating the study. Each audience needs language appropriate to how the content will be read and used."
            id="two-audiences-title"
            align="center"
          />
          <div className="sesen-irb-page__audience-grid">
            <article className="sesen-irb-page__audience-panel">
              <div className="sesen-irb-page__audience-kicker"><Icon name="people" /> Participant-Facing Content</div>
              <h3>For Study Participants</h3>
              <p>Participant-facing translation must preserve the approved clinical meaning while keeping information understandable and natural in the target language.</p>
              <ul className="sesen-irb-page__bullet-list">
                <li>Clear communication of study purpose and procedures</li>
                <li>Accurate presentation of risks and potential benefits</li>
                <li>Understandable participant rights and responsibilities</li>
                <li>Appropriate local-language terminology</li>
                <li>Consistency across related participant materials</li>
                <li>Natural, readable phrasing aligned with the source meaning</li>
              </ul>
            </article>
            <article className="sesen-irb-page__audience-panel">
              <div className="sesen-irb-page__audience-kicker"><Icon name="shield" /> Committee-Facing Content</div>
              <h3>For IRBs &amp; Ethics Committees</h3>
              <p>Committee-facing materials require clinical precision, completeness, traceability, and continuity between questions, responses, revisions, and supporting study documents.</p>
              <ul className="sesen-irb-page__bullet-list">
                <li>Clinical and scientific accuracy</li>
                <li>Complete translation of relevant content</li>
                <li>Consistent study terminology</li>
                <li>Precise responses to reviewer questions</li>
                <li>Clear document and version identification</li>
                <li>Alignment between revisions and supporting documentation</li>
              </ul>
            </article>
          </div>
          <p className="sesen-irb-page__audience-foot">The audiences are different, but their documents belong to the same controlled clinical content ecosystem.</p>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="alignment-title">
        <div className="sesen-irb-page__shell sesen-irb-page__control-grid">
          <div>
            <SectionHeading
              eyebrow="VERSION CONTROL"
              title="Keep Every Language Aligned as the Study Changes"
              intro="A protocol amendment can affect an ICF. New safety information can trigger participant-facing updates. A committee comment may change wording in one country while other language versions remain unchanged. Sesen helps clinical teams manage those relationships without losing control of multilingual document history."
              id="alignment-title"
              align="left"
            />
            <div className="sesen-irb-page__control-list">
              {controlItems.map(([icon, title, text]) => (
                <article className="sesen-irb-page__control-item" key={title}>
                  <div className="sesen-irb-page__control-item-icon"><Icon name={icon} size={20} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <div className="sesen-irb-page__version-art-wrap">
              <VersionArt />
              <MobileVersionArt />
            </div>
            <p className="sesen-irb-page__version-caption">A single approved source change can affect several documents and languages. The goal is to update only what changed while preserving the approved language around it.</p>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--dark" aria-labelledby="country-title">
        <div className="sesen-irb-page__shell sesen-irb-page__global-grid">
          <div className="sesen-irb-page__global-intro">
            <div className="sesen-irb-page__eyebrow">GLOBAL ETHICS REVIEW</div>
            <h2 id="country-title">Support for Country- and Committee-Specific Ethics Documentation</h2>
            <p>Global research does not move through one universal ethics-review pathway. Sesen builds the multilingual workflow around the study and submission requirements provided for each market, institution, site, and review process.</p>
            <div className="sesen-irb-page__terms" aria-label="Common ethics committee terminology">
              <span className="sesen-irb-page__term">IRB</span>
              <span className="sesen-irb-page__term">IEC</span>
              <span className="sesen-irb-page__term">EC</span>
              <span className="sesen-irb-page__term">REC</span>
            </div>
          </div>
          <div>
            <div className="sesen-irb-page__global-list">
              <div className="sesen-irb-page__global-item"><strong>Country-Specific Language Variants</strong>Maintain the appropriate language and locale for each study market.</div>
              <div className="sesen-irb-page__global-item"><strong>Site-Specific Versions</strong>Keep local document variants connected to the correct master and study version.</div>
              <div className="sesen-irb-page__global-item"><strong>Local Terminology Preferences</strong>Preserve approved institutional or country-specific language where provided.</div>
              <div className="sesen-irb-page__global-item"><strong>Committee-Requested Revisions</strong>Apply local feedback to the affected multilingual content without disturbing unrelated versions.</div>
              <div className="sesen-irb-page__global-item"><strong>Institution-Specific Participant Materials</strong>Support locally adapted participant communications and supporting documentation.</div>
              <div className="sesen-irb-page__global-item"><strong>Different Review Stages</strong>Manage countries that are simultaneously at submission, response, amendment, or continuing-review stages.</div>
            </div>
            <p className="sesen-irb-page__global-note">Sesen supports the country- and committee-specific requirements defined for your study; ethics-review decisions and regulatory determinations remain with the applicable organizations and authorities.</p>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="quality-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="Quality Controls for Multilingual Ethics-Review Materials"
            intro="Ethics-review translation sits at the intersection of clinical accuracy, participant communication, document control, and operational readiness. Sesen applies quality controls appropriate to the content type, intended use, and agreed workflow."
            id="quality-title"
            align="center"
          />
          <div className="sesen-irb-page__quality-grid">
            {qualityItems.map(([icon, title, text]) => (
              <article className="sesen-irb-page__quality-item" key={title}>
                <div className="sesen-irb-page__icon-box"><Icon name={icon} size={21} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--soft" aria-labelledby="documentation-title">
        <div className="sesen-irb-page__shell sesen-irb-page__docs-layout">
          <div className="sesen-irb-page__docs-intro">
            <h2 id="documentation-title">Translation Documentation for Ethics Submission Workflows</h2>
            <p>Different studies and review bodies may request different forms of translation documentation. Sesen can configure the workflow around the requirements provided for the project.</p>
          </div>
          <div>
            <div className="sesen-irb-page__docs-list">
              {docsItems.map(([icon, title, text]) => (
                <article className="sesen-irb-page__docs-row" key={title}>
                  <div className="sesen-irb-page__control-item-icon"><Icon name={icon} size={20} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="sesen-irb-page__docs-note">Not every ethics submission requires the same combination of certification, back translation, or reconciliation. Sesen works from the requirements defined for the study rather than applying unnecessary steps to every document.</div>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="teams-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="Built for Sponsors, CROs & Clinical Study Teams"
            intro="Sesen supports teams responsible for preparing, coordinating, revising, and maintaining multilingual ethics-review materials across global clinical studies."
            id="teams-title"
            align="center"
          />
          <div className="sesen-irb-page__buyer-grid">
            {audiences.map(([title, text]) => (
              <article className="sesen-irb-page__buyer-item" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>

          <div className="sesen-irb-page__scale-panel">
            <div>
              <h3>One Controlled Workflow Across Languages, Countries &amp; Review Cycles</h3>
              <p>One country may be preparing its initial ethics submission while another is responding to committee questions and a third is implementing an amendment. A centralized multilingual workflow helps maintain continuity as those paths diverge and reconnect.</p>
            </div>
            <div className="sesen-irb-page__scale-tags">
              <div className="sesen-irb-page__scale-tag"><strong>Languages</strong><span>150+ language coverage</span></div>
              <div className="sesen-irb-page__scale-tag"><strong>Versions</strong><span>Master, country, and site control</span></div>
              <div className="sesen-irb-page__scale-tag"><strong>Terminology</strong><span>Approved study language</span></div>
              <div className="sesen-irb-page__scale-tag"><strong>Comments</strong><span>Review feedback in context</span></div>
              <div className="sesen-irb-page__scale-tag"><strong>Amendments</strong><span>Controlled change propagation</span></div>
              <div className="sesen-irb-page__scale-tag"><strong>Deliverables</strong><span>Clear current-file identification</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--blue-soft" aria-labelledby="technology-title">
        <div className="sesen-irb-page__shell sesen-irb-page__tech-grid">
          <div className="sesen-irb-page__tech-copy">
            <div className="sesen-irb-page__eyebrow">TECHNOLOGY + EXPERTISE</div>
            <h2 id="technology-title">Smarter Workflows for Evolving Clinical Content</h2>
            <p>Technology can improve speed and control in complex multilingual programs, but regulated clinical content still requires appropriate human judgment.</p>
            <p>Sesen combines professional life sciences linguists with technology-enabled workflows for terminology, change management, structured QA, multilingual file handling, and AI-assisted workflow or quality support where appropriate.</p>
            <p><strong>For participant-facing, clinically sensitive, or high-impact materials, specialized human review remains central to the quality process.</strong></p>
          </div>
          <div className="sesen-irb-page__tech-list">
            {[
              "Expert human linguistic review",
              "Translation memory and approved-language reuse",
              "Terminology management",
              "File comparison and change detection",
              "Automated consistency checks",
              "Structured linguistic QA",
              "Workflow automation",
              "Multilingual file management",
              "AI-assisted workflow support where appropriate",
              "AI-assisted quality support",
            ].map((item) => (
              <div className="sesen-irb-page__tech-item" key={item}><Icon name="check" size={19} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="services-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="Connected Services Across the Clinical Trial Lifecycle"
            intro="Ethics-review content connects to study startup, informed consent, protocols, GCP activities, broader clinical development, and health-authority submissions. Explore the specialized Sesen services that support those adjacent workflows."
            id="services-title"
            align="center"
          />
          <div className="sesen-irb-page__services">
            {services.map(([title, text, href, linkLabel]) => (
              <article className="sesen-irb-page__service-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowLink href={href}>{linkLabel}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section sesen-irb-page__section--soft" aria-labelledby="resource-title">
        <div className="sesen-irb-page__shell">
          <div className="sesen-irb-page__resource">
            <div className="sesen-irb-page__resource-icon"><Icon name="book" size={28} /></div>
            <div>
              <div className="sesen-irb-page__eyebrow sesen-irb-page__eyebrow--compact">CLINICAL REGULATORY KNOWLEDGE</div>
              <h3 id="resource-title">Preparing Multilingual Materials for IRB &amp; Ethics Committee Review</h3>
              <p>Explore practical guidance on source preparation, participant-facing materials, translation documentation, back translation, version control, formatting, and multilingual submission readiness.</p>
            </div>
            <ArrowLink href="https://www.sesen.com/resources/clinical-regulatory-knowledge/preparing-irb-and-ethics-committee-materials-for-translation/">View IRB &amp; Ethics Submission Guide</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__section" aria-labelledby="faq-title">
        <div className="sesen-irb-page__shell">
          <SectionHeading
            title="IRB & Ethics Committee Translation FAQs"
            intro="Answers to common questions about multilingual ethics submissions, revisions, certifications, back translation, amendments, and multicountry review workflows."
            id="faq-title"
            align="left"
          />
          <div className="sesen-irb-page__faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>
                  <span>{question}</span>
                  <span className="sesen-irb-page__faq-plus" aria-hidden="true" />
                </summary>
                <div className="sesen-irb-page__faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-irb-page__final-cta" aria-labelledby="final-cta-title">
        <div className="sesen-irb-page__shell sesen-irb-page__final-cta-grid">
          <div>
            <h2 id="final-cta-title">Keep Multilingual Ethics Review Moving</h2>
            <p>When committees request changes, multilingual study materials need to move with the source—accurately, consistently, and without losing control of versions. Sesen helps clinical teams translate, revise, review, and maintain ethics-review documentation across languages and submission cycles.</p>
          </div>
          <div className="sesen-irb-page__final-actions">
            <a className="sesen-irb-page__button sesen-irb-page__button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            <ArrowLink href="https://www.sesen.com/contact-sales/">Talk to a Life Sciences Specialist</ArrowLink>
          </div>
        </div>
      </section>
    </main>
  );
}
