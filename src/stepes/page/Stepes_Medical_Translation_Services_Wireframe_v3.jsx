import React, { useState } from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-us/";

const ArrowIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="m14 7 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = ({ open }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    {!open && <path d="M12 5v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LineIcon = ({ name }) => {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    research: (
      <>
        <path d="M9 3h6" {...common} />
        <path d="M10 3v5l-5 9a2.7 2.7 0 0 0 2.4 4h9.2a2.7 2.7 0 0 0 2.4-4l-5-9V3" {...common} />
        <path d="M7.5 15h9" {...common} />
      </>
    ),
    regulatory: (
      <>
        <path d="M7 3.5h8l3 3V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" {...common} />
        <path d="M15 3.5V7h3" {...common} />
        <path d="M9 11h6M9 15h6M9 19h4" {...common} />
      </>
    ),
    product: (
      <>
        <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" {...common} />
        <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21" {...common} />
      </>
    ),
    patient: (
      <>
        <circle cx="12" cy="7.2" r="3.2" {...common} />
        <path d="M5.5 21v-2.5a6.5 6.5 0 0 1 13 0V21" {...common} />
        <path d="M18.5 5.5h3M20 4v3" {...common} />
      </>
    ),
    digital: (
      <>
        <rect x="3.5" y="4" width="17" height="13" rx="2" {...common} />
        <path d="M8 21h8M12 17v4" {...common} />
        <path d="M8 10h2l1-2 2 5 1.5-3H17" {...common} />
      </>
    ),
    people: (
      <>
        <circle cx="8" cy="8" r="3" {...common} />
        <circle cx="17" cy="9" r="2.5" {...common} />
        <path d="M2.8 20a5.2 5.2 0 0 1 10.4 0M13 20a4.2 4.2 0 0 1 8.2-1.2" {...common} />
      </>
    ),
    terminology: (
      <>
        <path d="M4 5.5h9M4 10h6M4 14.5h8M4 19h5" {...common} />
        <circle cx="17" cy="14" r="4" {...common} />
        <path d="m20 17 2 2" {...common} />
      </>
    ),
    memory: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" {...common} />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" {...common} />
        <path d="M9 10h6v4H9z" {...common} />
      </>
    ),
    versions: (
      <>
        <path d="M7 6h10M7 11h10M7 16h6" {...common} />
        <path d="M18 15v6M15 18h6" {...common} />
        <rect x="3" y="3" width="18" height="18" rx="2" {...common} />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" {...common} />
        <path d="M14 3v5h4M9 12h6M9 16h6" {...common} />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" {...common} />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" {...common} />
        <path d="M8 21h8M12 17v4" {...common} />
      </>
    ),
    media: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" {...common} />
        <path d="m10 9 5 3-5 3V9Z" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.5-8 10-4.7-1.5-8-5-8-10V6l8-3Z" {...common} />
        <path d="m8.5 12 2.2 2.2 4.8-5" {...common} />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M3 12h18M12 3c2.3 2.5 3.4 5.5 3.4 9S14.3 18.5 12 21M12 3C9.7 5.5 8.6 8.5 8.6 12S9.7 18.5 12 21" {...common} />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V5M4 20h17" {...common} />
        <path d="m7 16 4-5 3 2 5-7" {...common} />
      </>
    ),
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name] || paths.document}
    </svg>
  );
};

const lifecycleGroups = [
  {
    icon: "research",
    title: "Research and Clinical Development",
    description:
      "Translate scientific concepts, study procedures, endpoints, participant requirements, and safety information across changing protocols, country adaptations, and ongoing study updates.",
    items: [
      "Clinical trial protocols, synopses, and Trial Master File content",
      "Investigator brochures and clinical study reports",
      "Informed consent forms and participant information",
      "Recruitment materials, case report forms, and site communications",
      "Clinical outcome assessments, electronic COAs (eCOA), patient diaries, and questionnaires",
      "Safety reports, adverse-event documentation, and decentralized or virtual trial content",
    ],
  },
  {
    icon: "regulatory",
    title: "Regulatory and Quality Documentation",
    description:
      "Preserve technical meaning, approved terminology, and version alignment across controlled content used in submissions, quality systems, manufacturing, and post-market operations.",
    items: [
      "Common Technical Document (CTD), eCTD submission content, and health-authority correspondence",
      "Technical documentation, quality manuals, and controlled templates",
      "SOPs, validation, manufacturing, and laboratory records",
      "Audit, inspection, corrective and preventive action (CAPA), and risk-management content",
      "Clinical evaluation, post-market surveillance, and periodic safety documentation",
      "Vigilance, certificates, declarations, and authority responses",
    ],
  },
  {
    icon: "product",
    title: "Product Information, Labeling, and Market Access",
    description:
      "Communicate correct instructions, indications, limitations, warnings, and safety information while supporting the language and formatting expectations of each target market.",
    items: [
      "Instructions for Use and electronic Instructions for Use",
      "Product labels, packaging, and artwork",
      "Patient information leaflets, prescribing information, and summaries of product characteristics (SmPCs)",
      "Product monographs, medication guides, and safety information",
      "User manuals and quick-reference guides",
      "Reimbursement, health-economic, market-access, and launch content",
    ],
  },
  {
    icon: "patient",
    title: "Patient and Healthcare Communication",
    description:
      "Make medically accurate information clear and usable for patients, caregivers, providers, administrators, and communities across the care journey.",
    items: [
      "Plain-language patient education and medication instructions",
      "Care plans, discharge information, and appointment instructions",
      "Intake, consent, medical history, and clinic forms",
      "Diagnostic and laboratory reports",
      "Health-plan, care-management, and provider communications",
      "Public health information and staff training",
    ],
  },
  {
    icon: "digital",
    title: "Digital, Training, and Scientific Content",
    description:
      "Localize continuously updated digital experiences, structured content, software, multimedia, and learning assets—not only static medical documents.",
    items: [
      "Medical and scientific websites",
      "Patient portals and digital health applications",
      "Medical software, software as a medical device (SaMD), digital therapeutics, and connected-device interfaces",
      "Medical eLearning, investigator training, and product education",
      "Scientific presentations, posters, and publications",
      "Videos, webinars, subtitles, captions, and voice-over",
    ],
  },
];

const specialistServices = [
  {
    title: "Life Sciences Translation Services",
    description: "Multilingual support across research, development, regulatory review, manufacturing, commercialization, and post-market operations.",
    url: "https://www.stepes.com/life-sciences-translation-services/",
  },
  {
    title: "Healthcare Translation Services",
    description: "Patient, provider, administrative, educational, operational, and digital communication used throughout the care journey.",
    url: "https://www.stepes.com/healthcare-translation-services/",
  },
  {
    title: "Medical Device Translation Services",
    description: "Device labeling, technical documentation, software, packaging, training, and post-market content.",
    url: "https://www.stepes.com/medical-device-translation-services/",
  },
  {
    title: "IFU Translation Services",
    description: "Instructions for Use and eIFUs with terminology control, revision management, multilingual publishing, and final-format QA.",
    url: "https://www.stepes.com/ifu-translation-services/",
  },
  {
    title: "Pharmaceutical Translation Services",
    description: "Clinical, regulatory, safety, manufacturing, labeling, medical affairs, market-access, and commercial content.",
    url: "https://www.stepes.com/pharmaceutical-translation-services/",
  },
  {
    title: "Clinical Trial Translation Services",
    description: "Study protocols, informed consent, participant materials, site documentation, clinical instruments, and safety communications.",
    url: "https://www.stepes.com/clinical-trial-translations/",
  },
  {
    title: "Biotechnology Translation Services",
    description: "Research, laboratory, scientific, technical, regulatory, corporate, and product communication for global biotech teams.",
    url: "https://www.stepes.com/biotechnology-translation-services/",
  },
  {
    title: "CRO Translation Services",
    description: "Coordinated multilingual workflows for sponsors, CROs, investigators, sites, ethics committees, and participants.",
    url: "https://www.stepes.com/cro-translation-services/",
  },
  {
    title: "Regulatory Translation Services",
    description: "Submissions, authority correspondence, product information, controlled documentation, and supporting evidence.",
    url: "https://www.stepes.com/regulatory-translation-services/",
  },
  {
    title: "Linguistic Validation Services",
    description: "Clinical outcome assessments, patient-reported outcome measures, questionnaires, diaries, and related instruments.",
    url: "https://www.stepes.com/linguistic-validation/",
  },
  {
    title: "Technical Translation for Life Sciences",
    description: "Laboratory procedures, specifications, validation records, manufacturing content, scientific reports, and technical training.",
    url: "https://www.stepes.com/technical-translation-services/life-sciences-biotechnology/",
  },
];

const methods = [
  {
    title: "Professional Human Translation and Revision",
    description:
      "Qualified medical translators complete the translation, followed by independent review by a second linguist. This workflow is suited to high-risk, externally published, patient-facing, regulated, and safety-related content.",
  },
  {
    title: "Human Translation with Subject-Matter Review",
    description:
      "A clinical, scientific, technical, or regulatory specialist adds focused review when the content requires deeper domain knowledge, organization-specific decisions, or designated expert approval.",
  },
  {
    title: "AI-Assisted Translation with Full Human Post-Editing",
    description:
      "Approved AI or machine translation creates a first-pass translation that a qualified professional fully reviews and corrects. Suitability depends on the content, language, intended use, data requirements, and risk.",
  },
  {
    title: "Translation, Back Translation, and Reconciliation",
    description:
      "An independent back translation is compared with the source and forward translation so meaningful differences can be evaluated and reconciled for selected study materials, instruments, or client-defined quality procedures.",
  },
  {
    title: "Linguistic Validation",
    description:
      "A documented methodology supports conceptual equivalence and participant understanding for clinical outcome assessments and other instruments, potentially including cognitive debriefing and harmonization.",
  },
  {
    title: "Certified Medical Translation",
    description:
      "A signed certificate of translation accuracy can be provided for submissions, legal or institutional procedures, research records, medical documentation, and other official uses when required.",
  },
  {
    title: "Client and In-Country Review",
    description:
      "Medical, regulatory, legal, marketing, affiliate, or regional reviewers can participate in defined approval stages, with feedback resolved and approved decisions retained for future content.",
  },
];

const workflowSteps = [
  {
    title: "Content and Requirement Review",
    description:
      "Confirm languages, markets, audience, intended use, formats, deadlines, reference materials, confidentiality needs, and required review or approval stages.",
  },
  {
    title: "Linguist and Workflow Assignment",
    description:
      "Select translators, reviewers, and specialists according to the language pair, medical field, content type, target market, business risk, and project specifications.",
  },
  {
    title: "Terminology and Language-Asset Preparation",
    description:
      "Prepare translation memories, glossaries, style guidance, product information, reference translations, protected terms, and client instructions before production begins.",
  },
  {
    title: "Translation or Approved AI-Assisted Production",
    description:
      "Translate through the agreed workflow while applying approved terminology, prior translations, target-market conventions, and structural or formatting requirements.",
  },
  {
    title: "Linguistic and Subject-Matter Review",
    description:
      "Verify meaning, completeness, medical terminology, consistency, readability, audience suitability, locale conventions, and adherence to the project specification.",
  },
  {
    title: "Automated QA and Final-Format Validation",
    description:
      "Check numbers, units, omissions, terminology, tags, variables, formatting, links, interface constraints, untranslated text, and the finished user experience.",
  },
  {
    title: "Delivery, Approval, and Reuse",
    description:
      "Deliver final files, manage agreed client feedback, update approved terminology and translation memory, and retain validated language for future revisions and related content.",
  },
];

const qualityControls = [
  "Defined project specifications",
  "Qualified resource assignment",
  "Independent linguistic revision",
  "Terminology verification",
  "Completeness, numeric, and unit checks",
  "Consistency and automated QA",
  "Subject-matter and client review workflows",
  "Formatting and final-delivery validation",
  "Feedback tracking and approved-language retention",
];

const formatGroups = [
  {
    icon: "document",
    title: "Documents and Regulatory Files",
    description: "Word, Excel, PowerPoint, PDF, Adobe InDesign, scanned content, forms, templates, labeling, packaging, and technical artwork.",
  },
  {
    icon: "code",
    title: "Structured and Technical Content",
    description: "XML, HTML, JSON, software resources, CMS exports, localization packages, data-driven templates, and multilingual databases.",
  },
  {
    icon: "monitor",
    title: "Websites, Software, and Digital Health",
    description: "Patient portals, medical applications, device interfaces, clinical platforms, telehealth content, notifications, and knowledge bases.",
  },
  {
    icon: "media",
    title: "Multimedia and Learning",
    description: "Videos, animation scripts, subtitles, captions, voice-over, audio, eLearning, product demonstrations, and investigator training.",
  },
];

const enterpriseFeatures = [
  "Centralized project intake and secure file submission",
  "Dedicated teams and preferred medical linguists",
  "Translation memory and terminology ownership",
  "Workflow templates and multistage approvals",
  "Client, affiliate, and in-country review",
  "Version tracking and multilingual status visibility",
  "Reporting, analytics, API, and system integration",
  "Multi-country releases and urgent, high-volume delivery",
  "Ongoing quality monitoring and continuous improvement",
];

const benefits = [
  {
    title: "Specialized Medical Expertise",
    description: "Translators and reviewers are selected according to the medical field, content type, language, audience, market, and required workflow.",
  },
  {
    title: "Quality-Controlled Delivery",
    description: "Specifications, revision, terminology controls, automated QA, final-format checks, and documented approvals support dependable delivery.",
  },
  {
    title: "AI with Human Accountability",
    description: "AI and automation improve suitable workflows while qualified professionals remain responsible for sensitive and high-risk medical content.",
  },
  {
    title: "Consistent Multilingual Language",
    description: "Translation memory and terminology management preserve approved wording across products, documents, departments, markets, and revisions.",
  },
  {
    title: "Documents, Software, and Multimedia",
    description: "One multilingual program can support controlled documents, patient content, digital products, training, audiovisual media, and publishing.",
  },
  {
    title: "Flexible Project Models",
    description: "Translate an individual document or establish an enterprise program with dedicated resources, integrations, reporting, and recurring workflows.",
  },
];

const faqs = [
  {
    q: "What is medical translation?",
    a: "Medical translation is the professional translation and localization of specialized content related to medicine, healthcare, pharmaceuticals, medical devices, biotechnology, clinical research, diagnostics, and life sciences. It covers written, digital, recorded, and structured content, including clinical documents, patient information, product labeling, Instructions for Use, regulatory materials, medical software, research content, training, and healthcare communications. Medical translation requires advanced language expertise together with sufficient subject-matter knowledge to understand the terminology, audience, purpose, and potential consequences of the content.",
  },
  {
    q: "What is the difference between medical translation and healthcare translation?",
    a: "Medical translation is the broader discipline and can include scientific, pharmaceutical, clinical, regulatory, medical-device, laboratory, patient, and healthcare content. Healthcare translation focuses more specifically on communication used in care delivery and healthcare operations, including patient education, hospital forms, discharge instructions, health-plan communications, portals, applications, telehealth content, and provider training. The services overlap, but their primary audiences and purposes differ. Stepes maintains specialized capabilities for both.",
  },
  {
    q: "What is the difference between medical translation and medical interpreting?",
    a: "Medical translation supports written, recorded, structured, and digital content. Medical interpreting supports live spoken or signed communication between people who do not share the same language. Translation may cover a consent form, medical record, patient application, research protocol, or product manual. Interpreting may support an appointment, consultation, procedure, admission, discharge discussion, or telehealth visit. Because the required skills, delivery methods, and quality processes differ, Stepes treats translation and interpreting as distinct professional services.",
  },
  {
    q: "What medical documents can Stepes translate?",
    a: "Stepes translates clinical, pharmaceutical, medical device, regulatory, scientific, patient, healthcare, quality, manufacturing, digital, and training content. Examples include clinical protocols, informed consent forms, study reports, patient information, regulatory submissions, Instructions for Use, product labels, packaging, software interfaces, medical records, diagnostic reports, standard operating procedures, safety documentation, eLearning, websites, applications, videos, and scientific presentations. Our teams can also work with structured content, multilingual artwork, scanned files, and recurring revisions.",
  },
  {
    q: "How does Stepes select medical translators and reviewers?",
    a: "Stepes evaluates the language pair, medical field, document type, audience, intended use, target market, business risk, and review requirements before assigning resources. The selected team may include experienced medical translators, independent revisers, physicians, pharmacists, nurses, scientists, engineers, regulatory specialists, software linguists, or other relevant professionals. Recurring programs can use preferred or dedicated language teams so the same specialists build familiarity with the client’s terminology, products, content, style, and quality expectations.",
  },
  {
    q: "Does Stepes use AI or machine translation for medical content?",
    a: "Stepes can use AI or machine translation within an approved, risk-based workflow when it is suitable for the content, language, confidentiality requirements, quality expectations, and intended use. AI may help analyze content, identify translation memory matches, apply terminology, generate a first-pass translation, detect inconsistencies, and automate workflow tasks. Raw AI output is not treated as an appropriate final deliverable for sensitive medical content. When machine translation is used, qualified professionals can fully post-edit and review the output according to the agreed quality process.",
  },
  {
    q: "How does Stepes ensure medical translation quality?",
    a: "Quality begins with clear project specifications and appropriate resource selection. Depending on the project, the workflow may include professional translation, independent revision, subject-matter review, terminology verification, translation memory, automated QA, numeric and unit checks, completeness checks, final-format validation, back translation, linguistic validation, or client approval. Stepes also retains approved terminology and translations for future reuse, helping improve consistency across documents, versions, products, and markets.",
  },
  {
    q: "Can Stepes provide certified medical translations?",
    a: "Yes. Stepes can provide a signed certificate of translation accuracy when required. Certified medical translations may be needed for official submissions, institutional procedures, legal matters, immigration cases, research documentation, medical records, or other formal purposes. The meaning of certified translation varies by jurisdiction and receiving organization. Clients should provide the recipient’s requirements whenever possible so the appropriate translation, certification, notarization, or supporting documentation can be confirmed before work begins.",
  },
  {
    q: "Does Stepes offer back translation and reconciliation?",
    a: "Yes. Stepes can provide back translation and reconciliation when required by the client, instrument developer, study methodology, receiving institution, or quality procedure. In a typical process, one linguist translates the content into the target language. A separate linguist then translates it back into the source language without relying on the original source. The versions are compared and meaningful differences are reconciled. Back translation can be valuable for selected clinical and research content, but it is not automatically necessary for every medical translation.",
  },
  {
    q: "What is linguistic validation?",
    a: "Linguistic validation is a documented methodology used to adapt clinical outcome assessments and related instruments for another language and culture while preserving the concepts being measured. A workflow may include dual forward translation, reconciliation, back translation, developer review, clinician review, cognitive debriefing with representatives of the target population, proofreading, harmonization, and final reporting. It differs from standard document translation because it evaluates conceptual equivalence and participant understanding in addition to linguistic accuracy.",
  },
  {
    q: "Can Stepes translate medical device software and digital health applications?",
    a: "Yes. Stepes translates medical device interfaces, software resource files, digital health applications, patient portals, clinical platforms, websites, notifications, help content, and related documentation. Software localization workflows can preserve variables, tags, placeholders, character restrictions, and nontranslatable content. In-context review can identify truncation, layout, navigation, terminology, and usability problems that may not be visible in an extracted file. Stepes can also align software terminology with IFUs, labeling, training, support content, and other product materials.",
  },
  {
    q: "How does Stepes maintain medical terminology across projects?",
    a: "Stepes uses terminology databases, translation memory, style guidance, reference materials, and documented reviewer decisions to maintain consistent medical language. A terminology database can contain approved translations, definitions, usage notes, prohibited terms, abbreviations, product names, regional variants, and approval status. Translation memory stores previously translated content for reuse in new or revised documents. When clients approve terminology or make corrections, those decisions can be incorporated into the language assets and applied to future projects.",
  },
  {
    q: "How does Stepes handle revisions and updated medical documents?",
    a: "Stepes can compare the new source file with the previous version, identify changed and unchanged content, reuse approved translations, and route only the required additions or modifications for translation and review. This supports study amendments, labeling changes, software releases, product updates, safety revisions, new indications, and recurring regulatory content. After approval, updated translations are stored in the translation memory so future versions continue from the latest validated language.",
  },
  {
    q: "How are confidential medical documents handled?",
    a: "Stepes supports controlled project access, secure online file exchange, confidentiality requirements, defined user roles, and client-specific workflow procedures. Access can be limited to authorized project participants, and linguists can be assigned according to the project’s confidentiality and qualification requirements. Organizations with specific privacy, data-handling, hosting, retention, access, or contractual requirements should provide those requirements during project setup so the appropriate workflow can be confirmed.",
  },
  {
    q: "Which languages does Stepes support?",
    a: "Stepes provides medical translation services in more than 100 languages. Coverage includes major European, Asian, Middle Eastern, African, and Latin American languages, together with regional variants, right-to-left languages, and complex writing systems. Frequently requested languages include Spanish, French, French Canadian, German, Italian, Portuguese, Brazilian Portuguese, Arabic, Simplified Chinese, Traditional Chinese, Japanese, Korean, Russian, Vietnamese, Hindi, Urdu, Polish, Dutch, and many others.",
  },
  {
    q: "How long does medical translation take?",
    a: "Turnaround depends on the word count, languages, medical specialization, file format, review method, number of translators, reference materials, formatting requirements, and required approval stages. A short medical document may be completed quickly, while a large submission, multilingual IFU program, software release, clinical instrument, or heavily formatted publication may require additional time. Stepes evaluates the files and requirements before confirming a realistic schedule. Large or urgent programs may use multiple qualified linguists working in parallel under centralized terminology and review controls.",
  },
  {
    q: "How is medical translation priced?",
    a: "Medical translation pricing depends on the source and target languages, volume, content complexity, workflow, translation memory matches, repetitions, file format, turnaround, subject-matter review, certification, formatting, and any additional validation requirements. Professional human translation, AI-assisted post-editing, linguistic validation, back translation, software localization, and multilingual publishing have different production requirements. Upload the source files and project information for a detailed quote based on the actual scope.",
  },
  {
    q: "How should I choose a medical translation company?",
    a: "Evaluate whether the provider can match linguists to the medical field and content type, define the appropriate human or AI-assisted workflow, maintain terminology and translation memory, document quality controls, validate final formats, protect confidential content, and support recurring revisions. Also confirm relevant certifications, language coverage, reviewer participation, project visibility, and experience with the required document, software, or multimedia formats. The strongest partner should explain how the process changes according to intended use and risk rather than applying one workflow to every project.",
  },
  {
    q: "What should I provide for a medical translation quote?",
    a: "Provide the source files, source and target languages, target countries, required delivery date, intended audience, intended use, and any certification or review requirements. Helpful materials include existing translations, approved glossaries, translation memories, style guides, product information, reference documents, previous file versions, regulatory templates, character or layout restrictions, and reviewer instructions. Complete information allows Stepes to recommend the appropriate workflow, resources, schedule, and price.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const panelId = `medical-faq-panel-${index}`;
  const buttonId = `medical-faq-button-${index}`;

  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <span>{item.q}</span>
        <span className="faq-toggle"><PlusIcon open={isOpen} /></span>
      </button>
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

export default function StepesMedicalTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="medical-page">
      <style>{styles}</style>

      <section className="hero-section" aria-labelledby="medical-page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Healthcare &amp; Life Sciences</p>
            <h1 id="medical-page-title">Medical Translation Services for Accurate Global Communication</h1>
            <p className="hero-lead">
              Translate clinical, pharmaceutical, medical device, patient-facing, scientific, and healthcare content with qualified medical linguists, controlled terminology, and quality-focused workflows.
            </p>
            <p className="hero-support">
              Stepes provides professional medical translation services in more than 100 languages, combining specialized human expertise with AI-assisted technology, translation memory, terminology management, and rigorous linguistic review.
            </p>
            <div className="hero-actions">
              <a className="cta-primary" href={QUOTE_URL}>
                <span>Request a Quote</span><ArrowIcon />
              </a>
              <a className="cta-secondary" href={CONTACT_URL}>
                <span>Talk to a Medical Translation Expert</span><ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Medical translation workflow illustration">
            <svg className="hero-art" viewBox="0 0 620 500" role="img" aria-labelledby="hero-art-title hero-art-desc">
              <title id="hero-art-title">Connected medical content translation workflow</title>
              <desc id="hero-art-desc">Medical documents move through terminology control, professional review, quality assurance, and multilingual delivery.</desc>
              <defs>
                <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#fbf3f7" />
                </linearGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#2d2030" floodOpacity="0.08" />
                </filter>
              </defs>
              <rect x="26" y="25" width="568" height="450" rx="34" fill="url(#heroPanel)" stroke="#e9dfe5" />
              <path d="M102 252c42-70 92-104 151-104 82 0 112 82 190 82 39 0 70-19 93-54" fill="none" stroke="#d8cbd2" strokeWidth="2" strokeDasharray="7 10" />

              <g filter="url(#softShadow)">
                <rect x="75" y="96" width="184" height="224" rx="24" fill="#fff" stroke="#d8d0d5" />
                <rect x="98" y="120" width="67" height="12" rx="6" fill="#f1d5e2" />
                <path d="M99 160h133M99 187h112M99 214h128M99 241h93M99 268h119" stroke="#60606b" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
                <rect x="99" y="290" width="80" height="10" rx="5" fill="#c11d63" opacity="0.75" />
              </g>

              <g filter="url(#softShadow)">
                <rect x="327" y="91" width="214" height="124" rx="24" fill="#fff" stroke="#d8d0d5" />
                <circle cx="367" cy="133" r="20" fill="#fdf2f7" stroke="#d8a9bd" />
                <path d="M367 121v24M355 133h24" stroke="#7a1542" strokeWidth="3.2" strokeLinecap="round" />
                <text x="399" y="127" fill="#24242f" fontSize="15" fontWeight="600">Approved terminology</text>
                <text x="399" y="151" fill="#6a6873" fontSize="13">Product and medical terms</text>
                <path d="M350 184h165" stroke="#e5dde2" />
                <circle cx="368" cy="184" r="5" fill="#c11d63" />
                <circle cx="430" cy="184" r="5" fill="#c11d63" opacity="0.55" />
                <circle cx="493" cy="184" r="5" fill="#c11d63" opacity="0.24" />
              </g>

              <g filter="url(#softShadow)">
                <rect x="288" y="259" width="253" height="150" rx="24" fill="#25232b" />
                <text x="316" y="295" fill="#f2a7c6" fontSize="12" fontWeight="600" letterSpacing="1.5">HUMAN REVIEW</text>
                <text x="316" y="326" fill="#ffffff" fontSize="18" fontWeight="600">Medical linguist + QA</text>
                <path d="M316 350h145" stroke="#615b67" strokeWidth="5" strokeLinecap="round" />
                <path d="M316 374h108" stroke="#615b67" strokeWidth="5" strokeLinecap="round" />
                <circle cx="497" cy="354" r="22" fill="#c11d63" />
                <path d="m486 354 7 7 14-16" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <circle cx="282" cy="198" r="9" fill="#fff" stroke="#c11d63" strokeWidth="2" />
              <circle cx="282" cy="338" r="9" fill="#fff" stroke="#c11d63" strokeWidth="2" />
              <path d="M259 198h14M291 198h36M259 338h14M291 338h-3" stroke="#c11d63" strokeWidth="2" />

              <g>
                <rect x="94" y="354" width="142" height="64" rx="18" fill="#fff" stroke="#d8d0d5" />
                <path d="M118 386h18M127 377v18" stroke="#c11d63" strokeWidth="2.4" strokeLinecap="round" />
                <text x="149" y="383" fill="#24242f" fontSize="14" fontWeight="600">100+ languages</text>
                <text x="149" y="402" fill="#6a6873" fontSize="12.5">Global delivery</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className="trust-section" aria-label="Medical translation trust signals">
        <div className="shell">
          <div className="trust-strip">
            {["ISO 17100", "ISO 9001:2015", "ISO 13485:2016", "100+ Languages", "AI + Human Review"].map((item) => (
              <div className="trust-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section overview-section" id="overview">
        <div className="shell split-intro">
          <div>
            <h2>Medical Translation Where Accuracy, Clarity, and Control Matter</h2>
          </div>
          <div className="overview-copy">
            <p className="section-lead">
              Medical translation communicates specialized health, scientific, clinical, and product information across languages. It can influence how researchers interpret data, how healthcare professionals use a product, how patients understand instructions, and how global teams maintain consistent information across markets.
            </p>
            <p>
              That makes medical translation fundamentally different from general business translation. The translator must understand not only the words, but also the medical subject, intended audience, content purpose, approved terminology, regional conventions, and consequences of ambiguity or error.
            </p>
            <p>
              Stepes supports medical content throughout research, development, regulatory review, commercialization, care delivery, and post-market operations. Each workflow is configured around the content’s intended use, risk, languages, formats, and approval requirements.
            </p>
            <div className="audience-list" aria-label="Organizations supported">
              {[
                "Pharmaceutical companies",
                "Medical device manufacturers",
                "Biotechnology organizations",
                "CROs and clinical research teams",
                "Healthcare organizations",
                "Diagnostics and laboratory companies",
                "Digital health developers",
                "Research and public health institutions",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="medical-content">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2>Medical Content Across the Product and Care Lifecycle</h2>
            <p className="section-lead">
              A clinical protocol, patient leaflet, device interface, laboratory procedure, and healthcare application cannot all be translated using the same assumptions. Stepes aligns the linguistic team, workflow, review level, and technology with the purpose of the content.
            </p>
          </div>

          <div className="lifecycle-list">
            {lifecycleGroups.map((group) => (
              <article className="lifecycle-row" key={group.title}>
                <div className="lifecycle-title">
                  <span className="icon-box"><LineIcon name={group.icon} /></span>
                  <h3>{group.title}</h3>
                </div>
                <div className="lifecycle-content">
                  <p>{group.description}</p>
                  <ul className="clean-list two-column-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="specialized-services">
        <div className="shell">
          <div className="dark-heading-grid">
            <div>
              <p className="eyebrow eyebrow-dark">Connected Expertise</p>
              <h2>Specialized Translation Services for Healthcare and Life Sciences</h2>
            </div>
            <p className="dark-lead">
              Medical translation is a broad discipline. Stepes connects specialist teams and workflows for the distinct content, audiences, quality controls, and lifecycle stages found across healthcare and life sciences.
            </p>
          </div>

          <div className="service-link-grid">
            {specialistServices.map((service) => (
              <a className="service-link-row" href={service.url} key={service.title}>
                <span className="service-link-copy">
                  <strong>{service.title}</strong>
                  <span>{service.description}</span>
                </span>
                <ArrowIcon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="medical-linguists">
        <div className="shell linguist-grid">
          <div className="linguist-copy">
            <h2>Medical Linguists Matched to Your Content</h2>
            <p className="section-lead">
              Medical translation quality begins with the right people. Stepes assigns translators and reviewers according to the language pair, medical discipline, content type, intended audience, target market, risk level, and required review process.
            </p>
            <p>
              A translator experienced in patient education may not be the best choice for a clinical study report. Medical device documentation, pharmaceutical labeling, digital health software, and patient questionnaires can each require different professional backgrounds and review methods.
            </p>
            <p>
              For ongoing programs, Stepes can maintain dedicated language teams so approved translators and reviewers build familiarity with your products, terminology, style, and quality expectations. Feedback is incorporated into project instructions, glossaries, translation memories, and future assignments.
            </p>
          </div>

          <div className="expertise-panel">
            <p className="panel-kicker">Team Composition</p>
            <h3>Expertise selected for the project—not assumed from the industry alone.</h3>
            <div className="role-grid">
              {[
                "Professional medical translators",
                "Independent linguistic revisers",
                "Physicians and other healthcare professionals, when required",
                "Pharmacists, scientists, and researchers, when relevant",
                "Medical device and engineering specialists",
                "Regulatory-language specialists",
                "Software and digital health linguists",
                "Desktop-publishing and multimedia experts",
              ].map((role) => (
                <div className="role-item" key={role}><CheckIcon /><span>{role}</span></div>
              ))}
            </div>
            <p className="panel-note">
              The selected team may combine translation expertise with clinical, scientific, technical, or regulatory review according to the intended use of the content.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="translation-methods">
        <div className="shell">
          <div className="section-heading">
            <h2>The Right Translation Method for Every Medical Content Type</h2>
            <p className="section-lead">
              The most effective workflow balances content risk, audience, quality expectations, volume, turnaround, and intended use. Stepes helps clients select an appropriate translation and review method for each content category.
            </p>
          </div>
          <div className="method-grid">
            {methods.map((method) => (
              <article className="method-item" key={method.title}>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
          <p className="methods-note">
            ISO 18587 specifically addresses full human post-editing of machine-translation output, while ISO 17100 addresses professional translation services more broadly. Stepes defines the workflow and review responsibilities before production begins.
          </p>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="shell">
          <div className="workflow-heading-grid">
            <div>
              <h2>A Quality-Controlled Process from Intake to Reuse</h2>
            </div>
            <p className="section-lead">
              A reliable medical translation process begins before translation and continues through review, final-format validation, delivery, approval, and the reuse of validated language.
            </p>
          </div>

          <div className="workflow-list">
            {workflowSteps.map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <div className="step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section ai-section" id="ai-medical-translation">
        <div className="shell ai-grid">
          <div className="ai-copy">
            <h2>AI-Assisted Medical Translation with Expert Human Oversight</h2>
            <p className="section-lead">
              AI is changing how organizations analyze, translate, review, and manage multilingual medical content. Its value is greatest within a governed workflow—not as an uncontrolled replacement for professional medical judgment.
            </p>
            <p>
              Technology can help identify repeated text, extract terminology, apply approved glossaries, generate suitable first-pass translations, review AI- or large language model (LLM)-generated translation output, compare versions, detect inconsistencies, and route content through review and approval. The level of human involvement is determined by the content’s intended use and risk.
            </p>
            <p>
              Patient safety documents, product labels, clinical assessments, internal research summaries, training courses, and high-volume knowledge bases may each justify different production and validation methods. Qualified people remain accountable for the finished translation.
            </p>
            <div className="inline-links">
              <a href="https://www.stepes.com/ai-machine-learning-translation-services/">AI Translation Services <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/machine-translation-post-editing/">Machine Translation Post-Editing <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/ai-translation-review/">AI Translation Review <ArrowIcon size={16} /></a>
            </div>
          </div>

          <div className="platform-panel" aria-label="Risk-based medical translation workflow">
            <div className="platform-topbar">
              <span>Medical Content Workflow</span>
              <span className="status-dot"><i />Quality controls active</span>
            </div>
            <div className="platform-body">
              <div className="platform-track">
                {[
                  ["Content assessment", "Audience, risk, format"],
                  ["Language assets", "TM + approved terms"],
                  ["Production route", "Human or AI-assisted"],
                  ["Expert review", "Medical + linguistic QA"],
                  ["Final validation", "Format + release checks"],
                ].map(([title, sub], index) => (
                  <div className="platform-node" key={title}>
                    <span className={`node-marker ${index < 4 ? "complete" : "active"}`}>{index < 4 ? "✓" : "5"}</span>
                    <div><strong>{title}</strong><span>{sub}</span></div>
                  </div>
                ))}
              </div>
              <div className="risk-panel">
                <span className="risk-label">Review intensity</span>
                <strong>Aligned to intended use</strong>
                <div className="risk-scale"><span /><span /><span /><span className="selected" /></div>
                <p>Higher-risk, patient-facing, regulated, and safety-related content receives stronger professional review and validation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="terminology-version-control">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2>Consistent Medical Language Across Every Version</h2>
            <p className="section-lead">
              Medical organizations reuse the same concepts across clinical documents, labeling, training, software, patient communication, and market-specific materials. Centralized language assets reduce variation and make future updates easier to control.
            </p>
          </div>

          <div className="language-assets-panel">
            <article>
              <span className="asset-icon"><LineIcon name="terminology" /></span>
              <h3>Medical Terminology Management</h3>
              <p>Maintain approved terms, product names, abbreviations, definitions, usage notes, prohibited translations, regional variants, reviewer comments, and approval status.</p>
              <a href="https://www.stepes.com/terminology-management/">Terminology Management <ArrowIcon size={16} /></a>
            </article>
            <article>
              <span className="asset-icon"><LineIcon name="memory" /></span>
              <h3>Translation Memory</h3>
              <p>Reuse approved language, identify repeated and similar content, improve consistency, accelerate recurring updates, and reduce unnecessary retranslation.</p>
              <a href="https://www.stepes.com/translation-memory/">Translation Memory <ArrowIcon size={16} /></a>
            </article>
            <article>
              <span className="asset-icon"><LineIcon name="versions" /></span>
              <h3>Version and Change Management</h3>
              <p>Compare revisions, isolate changed content, align market variants, retain reviewer decisions, and keep study amendments, labeling updates, and product releases synchronized.</p>
              <a href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation <ArrowIcon size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section quality-section" id="quality-systems">
        <div className="shell">
          <div className="quality-intro-grid">
            <div>
              <h2>Quality Systems for Regulated Medical Content</h2>
            </div>
            <div>
              <p className="section-lead">
                Stepes supports organizations operating within demanding quality and regulatory environments through defined professional translation, quality-management, and medical-device quality processes.
              </p>
              <p>
                Translation is one part of a larger regulatory and quality process. Stepes supports applicable submission, labeling, quality-system, and market-language requirements; final compliance and approval decisions remain with the responsible organization and regulatory authority.
              </p>
            </div>
          </div>

          <div className="standards-row">
            <article>
              <span>ISO 17100</span>
              <h3>Translation Services</h3>
              <p>Requirements for the resources, core processes, and other aspects used to deliver professional translation services to an agreed specification.</p>
            </article>
            <article>
              <span>ISO 9001:2015</span>
              <h3>Quality Management</h3>
              <p>A framework for process consistency, customer focus, performance monitoring, corrective action, and continuous improvement.</p>
            </article>
            <article>
              <span>ISO 13485:2016</span>
              <h3>Medical Device Quality</h3>
              <p>Quality-management controls relevant to organizations supporting content and processes within the medical-device lifecycle.</p>
            </article>
          </div>

          <div className="quality-controls-grid">
            <div>
              <h3>Project-Level Quality Controls</h3>
              <div className="check-grid">
                {qualityControls.map((item) => (
                  <div className="check-item" key={item}><CheckIcon /><span>{item}</span></div>
                ))}
              </div>
            </div>
            <aside className="regulatory-note">
              <span className="note-icon"><LineIcon name="shield" /></span>
              <h3>Current Regulatory Context</h3>
              <p>
                Stepes supports multilingual content associated with frameworks and authorities such as the FDA, EMA, EU MDR and IVDR, Health Canada, MHRA, PMDA, TGA, and other national or regional requirements.
              </p>
              <p>
                For U.S. medical devices, the FDA Quality Management System Regulation became effective on February 2, 2026 and incorporates ISO 13485:2016 by reference into 21 CFR Part 820.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-soft patient-section" id="patient-facing-translation">
        <div className="shell patient-grid">
          <div className="patient-copy">
            <h2>Medical Translation Patients Can Understand and Use</h2>
            <p className="section-lead">
              Patient-facing information must preserve clinical meaning while remaining understandable to people who may not have medical training.
            </p>
            <p>
              A translation can be technically correct yet still fail the patient if it uses unfamiliar terminology, obscures an important instruction, introduces ambiguity, or does not work within the final document or digital experience.
            </p>
            <p>
              Stepes considers health literacy, plain-language requirements, reading level, regional language, cultural context, dosages, dates, measurements, warnings, precautions, form structure, interface constraints, accessibility, and caregiver involvement. When needed, workflows can include back translation, reconciliation, clinician review, cognitive debriefing, or formal linguistic validation.
            </p>
            <div className="inline-links">
              <a href="https://www.stepes.com/healthcare-translation-services/">Healthcare Translation Services <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/linguistic-validation/">Linguistic Validation Services <ArrowIcon size={16} /></a>
            </div>
          </div>

          <div className="patient-visual" aria-label="Patient information clarity example">
            <div className="patient-document">
              <div className="patient-doc-head">
                <span className="medical-cross">+</span>
                <div><strong>Patient Instructions</strong><span>Clear language • Reviewed format</span></div>
              </div>
              <div className="instruction-block">
                <span className="instruction-icon">1</span>
                <div><strong>Take the prescribed dose</strong><span>Follow the schedule provided by your healthcare professional.</span></div>
              </div>
              <div className="instruction-block">
                <span className="instruction-icon">2</span>
                <div><strong>Review warnings and precautions</strong><span>Contact your care team when the listed conditions apply.</span></div>
              </div>
              <div className="instruction-block">
                <span className="instruction-icon">3</span>
                <div><strong>Keep instructions available</strong><span>Store this information with the product for future reference.</span></div>
              </div>
              <div className="patient-doc-footer"><CheckIcon /><span>Medical meaning, usability, and layout checked together</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="formats">
        <div className="shell">
          <div className="section-heading">
            <h2>Medical Translation Across Documents, Digital Products, and Multimedia</h2>
            <p className="section-lead">
              Medical translation must work where the content will ultimately be read, viewed, entered, heard, or used. Stepes supports multilingual production across documents, software, structured content, digital experiences, and media.
            </p>
          </div>
          <div className="format-grid">
            {formatGroups.map((group) => (
              <article className="format-item" key={group.title}>
                <span className="icon-box"><LineIcon name={group.icon} /></span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </article>
            ))}
          </div>
          <p className="format-note">
            Final-format review can identify text expansion, line breaks, table issues, misplaced labels, incorrect variables, truncated software strings, subtitle timing, and other problems that are difficult to detect in extracted text alone.
          </p>
        </div>
      </section>

      <section className="section enterprise-section" id="enterprise-programs">
        <div className="shell enterprise-grid">
          <div className="enterprise-copy">
            <p className="eyebrow eyebrow-dark">Enterprise Programs</p>
            <h2>Built for Recurring, Multilingual Medical Content</h2>
            <p className="dark-lead">
              Some organizations need one document translated into one language. Others manage thousands of files, multiple markets, ongoing revisions, many stakeholders, and distinct approval requirements. Stepes supports both.
            </p>
            <p>
              Role-based workflows can control who requests, translates, reviews, approves, and releases multilingual content. Different content types can follow different paths, allowing a high-risk patient document to receive additional oversight while lower-risk operational content moves through a streamlined process. Controlled access, secure file exchange, and client-defined data-handling requirements can be incorporated during program setup.
            </p>
            <div className="enterprise-links">
              <a href="https://www.stepes.com/translation-management-portal/">Translation Management Portal <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/translation-approval-workflows/">Approval Workflows <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics <ArrowIcon size={16} /></a>
              <a href="https://www.stepes.com/security/">Security and Compliance <ArrowIcon size={16} /></a>
            </div>
          </div>
          <div className="enterprise-features">
            {enterpriseFeatures.map((item) => (
              <div className="enterprise-feature" key={item}><CheckIcon /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section languages-section" id="languages">
        <div className="shell">
          <div className="languages-heading-grid">
            <div>
              <h2>Medical Translation in 100+ Languages</h2>
            </div>
            <div>
              <p className="section-lead">
                Stepes supports multilingual research, clinical studies, global product launches, healthcare communication, digital health products, and ongoing medical-content programs across major global languages, regional variants, right-to-left languages, and complex writing systems.
              </p>
            </div>
          </div>
          <div className="language-columns">
            <article>
              <h3>European Languages</h3>
              <p>Spanish, French, French Canadian, German, Italian, Portuguese, Brazilian Portuguese, Dutch, Polish, Czech, Slovak, Hungarian, Romanian, Bulgarian, Greek, Nordic languages, Ukrainian, and Russian.</p>
            </article>
            <article>
              <h3>Asian Languages</h3>
              <p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Tagalog, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, and Urdu.</p>
            </article>
            <article>
              <h3>Middle Eastern, African, and Additional Languages</h3>
              <p>Arabic, Hebrew, Persian, Turkish, Swahili, Amharic, Somali, Afrikaans, Hausa, Haitian Creole, country-specific Spanish variants, indigenous languages, and other market requirements.</p>
            </article>
          </div>
          <div className="language-footer">
            <p>
              Language planning goes beyond choosing a language name. Stepes can distinguish European and Brazilian Portuguese, European and Canadian French, Simplified and Traditional Chinese, Latin American and European Spanish, regional Arabic requirements, and market-specific terminology.
            </p>
            <a className="editorial-link" href="https://www.stepes.com/translation-languages/">Explore All Translation Languages <ArrowIcon size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Partner Evaluation</p>
            <h2>What Global Medical Teams Need from a Translation Partner</h2>
            <p className="section-lead">
              Choosing a medical translation company requires more than checking language coverage. Teams should evaluate subject-matter matching, quality governance, technology controls, final-format capabilities, security, and the ability to preserve approved language over time. Stepes brings these requirements together in one coordinated multilingual program.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-item" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
          <div className="measurement-band">
            <span className="measurement-icon"><LineIcon name="chart" /></span>
            <p>
              Ongoing programs can be evaluated through agreed indicators such as quality findings, reviewer feedback, terminology adherence, on-time delivery, translation-memory leverage, revision frequency, turnaround, and approval-cycle duration.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <h2>Medical Translation Services FAQ</h2>
            <p className="section-lead">
              Practical answers about medical translation workflows, quality, AI, terminology, languages, timing, and project requirements.
            </p>
            <a className="editorial-link" href={CONTACT_URL}>Ask Our Medical Translation Team <ArrowIcon size={18} /></a>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                item={item}
                index={index}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
                key={item.q}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section" aria-labelledby="final-cta-title">
        <div className="shell">
          <div className="final-cta">
            <div className="final-cta-copy">
              <h2 id="final-cta-title">Translate Medical Content with Accuracy, Control, and Confidence</h2>
              <p>
                Whether you need one medical document or a complete multilingual content program, Stepes brings together specialized medical linguists, quality-controlled workflows, terminology management, translation technology, and expert human review in more than 100 languages.
              </p>
              <div className="final-actions">
                <a className="cta-primary" href={QUOTE_URL}><span>Request a Medical Translation Quote</span><ArrowIcon /></a>
                <a className="cta-secondary light-secondary" href={CONTACT_URL}><span>Talk to Our Medical Translation Team</span><ArrowIcon /></a>
              </div>
            </div>
            <div className="final-cta-visual" aria-hidden="true">
              <svg viewBox="0 0 360 250" fill="none">
                <rect x="38" y="25" width="284" height="200" rx="28" fill="#fff" fillOpacity="0.08" stroke="#fff" strokeOpacity="0.18" />
                <rect x="72" y="61" width="106" height="128" rx="18" fill="#fff" fillOpacity="0.95" />
                <path d="M94 92h62M94 116h48M94 140h59M94 164h38" stroke="#6e6872" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
                <circle cx="239" cy="101" r="42" fill="#c11d63" />
                <path d="M239 79v44M217 101h44" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
                <path d="M208 169h62" stroke="#f2a7c6" strokeWidth="6" strokeLinecap="round" />
                <path d="M222 190h34" stroke="#fff" strokeOpacity="0.52" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .medical-page {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #9F1D55;
    --stepes-deep: #7A1542;
    --stepes-blush: #FDF2F7;
    --stepes-pink-light: #F2A7C6;
    --text: #181822;
    --text-soft: #5F5E69;
    --border: #E7E1E5;
    --surface: #F7F7F8;
    --dark: #24222B;
    --dark-soft: #302D37;
  }

  .medical-page,
  .medical-page *,
  .medical-page *::before,
  .medical-page *::after { box-sizing: border-box; }

  .medical-page {
    overflow-x: clip;
    overflow-y: visible;
    background: #fff;
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .medical-page a { color: inherit; }
  .medical-page p { margin: 0 0 20px; font-size: 16px; line-height: 1.72; color: var(--text-soft); }
  .medical-page h1,
  .medical-page h2,
  .medical-page h3 { margin: 0; color: var(--text); font-weight: 600; letter-spacing: -0.025em; }
  .medical-page h1 { font-size: 48px; line-height: 1.07; max-width: 760px; }
  .medical-page h2 { font-size: 36px; line-height: 1.16; }
  .medical-page h3 { font-size: 24px; line-height: 1.3; }

  .shell {
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding-top: 96px; padding-bottom: 96px; }
  .section-soft { background: var(--surface); }

  .eyebrow,
  .medical-page p.eyebrow {
    margin: 0 0 18px;
    color: var(--stepes-magenta);
    font-size: 11px;
    line-height: 1.35;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  .eyebrow-dark,
  .medical-page p.eyebrow-dark { color: var(--stepes-pink-light); }

  .section-lead {
    font-size: 18px !important;
    line-height: 1.66 !important;
    color: #45444f !important;
  }

  .section-heading { max-width: 820px; margin-bottom: 54px; }
  .section-heading h2 { margin-bottom: 20px; }
  .centered-heading { margin-left: auto; margin-right: auto; text-align: center; }
  .centered-heading .section-lead { margin-left: auto; margin-right: auto; }

  .hero-section {
    position: relative;
    background:
      radial-gradient(circle at 91% 18%, rgba(193,29,99,0.06), transparent 32%),
      linear-gradient(180deg, #fff 0%, #fff 76%, #fcf9fb 100%);
    padding-top: 104px;
    padding-bottom: 104px;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
    gap: 66px;
    align-items: center;
  }
  .hero-lead {
    max-width: 720px;
    margin-top: 28px !important;
    margin-bottom: 16px !important;
    font-size: 20px !important;
    line-height: 1.58 !important;
    color: #34333d !important;
  }
  .hero-support { max-width: 690px; font-size: 17px !important; }
  .hero-actions, .final-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 34px;
  }
  .cta-primary,
  .cta-secondary {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 23px;
    border-radius: 999px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .medical-page a.cta-primary,
  .medical-page a.cta-primary:link,
  .medical-page a.cta-primary:visited,
  .medical-page a.cta-primary:hover,
  .medical-page a.cta-primary:active,
  .medical-page a.cta-primary:focus,
  .medical-page a.cta-primary:focus-visible {
    background: var(--stepes-magenta);
    color: #fff !important;
    border: 1px solid var(--stepes-magenta);
  }
  .medical-page a.cta-primary *,
  .medical-page a.cta-primary:visited *,
  .medical-page a.cta-primary:hover *,
  .medical-page a.cta-primary:active *,
  .medical-page a.cta-primary:focus * {
    color: #fff !important;
    stroke: currentColor !important;
  }
  .medical-page a.cta-primary:hover { background: var(--stepes-magenta-dark); border-color: var(--stepes-magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(159,29,85,.2); }
  .cta-secondary {
    color: #4f3040 !important;
    background: #fff;
    border: 1px solid #ddd4da;
  }
  .cta-secondary:hover { border-color: #cba7b9; transform: translateY(-1px); }
  .cta-primary:focus-visible,
  .cta-secondary:focus-visible,
  .faq-question:focus-visible,
  .service-link-row:focus-visible,
  .editorial-link:focus-visible,
  .inline-links a:focus-visible,
  .enterprise-links a:focus-visible {
    outline: 3px solid rgba(193,29,99,.28);
    outline-offset: 3px;
  }
  .hero-visual { min-width: 0; width: 100%; }
  .hero-art { display: block; width: 100%; height: auto; }

  .trust-section { background: #fff; }
  .trust-strip {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .trust-item {
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 18px;
    text-align: center;
    color: #494852;
    font-size: 15px;
    line-height: 1.35;
    font-weight: 600;
  }
  .trust-item + .trust-item { border-left: 1px solid var(--border); }

  .split-intro {
    display: grid;
    grid-template-columns: minmax(320px, .84fr) minmax(0, 1.16fr);
    gap: 92px;
    align-items: start;
  }
  .split-intro h2 { max-width: 520px; }
  .overview-copy { max-width: 770px; }
  .audience-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 34px;
    border-top: 1px solid var(--border);
  }
  .audience-list span {
    position: relative;
    padding: 18px 24px 18px 22px;
    border-bottom: 1px solid var(--border);
    color: #3f3e49;
    font-size: 16px;
    line-height: 1.45;
  }
  .audience-list span::before {
    content: "";
    position: absolute;
    top: 27px;
    left: 0;
    width: 8px;
    height: 2px;
    background: var(--stepes-magenta);
  }
  .audience-list span:nth-child(odd) { padding-right: 34px; }

  .lifecycle-list { border-top: 1px solid #ddd8dc; }
  .lifecycle-row {
    display: grid;
    grid-template-columns: minmax(260px, .72fr) minmax(0, 1.28fr);
    gap: 68px;
    padding: 48px 0;
    border-bottom: 1px solid #ddd8dc;
  }
  .lifecycle-title { display: flex; align-items: flex-start; gap: 18px; }
  .icon-box, .asset-icon, .note-icon, .measurement-icon {
    width: 48px;
    height: 48px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--stepes-magenta);
    background: var(--stepes-blush);
    border: 1px solid #efdce5;
  }
  .lifecycle-title h3 { padding-top: 7px; }
  .lifecycle-content > p { max-width: 760px; }
  .clean-list { list-style: none; margin: 25px 0 0; padding: 0; }
  .two-column-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 28px; }
  .clean-list li {
    position: relative;
    padding-left: 18px;
    color: #41404a;
    font-size: 16px;
    line-height: 1.55;
  }
  .clean-list li::before {
    content: "";
    position: absolute;
    top: .78em;
    left: 0;
    width: 7px;
    height: 2px;
    background: var(--stepes-magenta);
  }

  .dark-section { background: var(--dark); }
  .dark-section h2, .dark-section h3, .enterprise-section h2 { color: #fff; }
  .dark-heading-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(380px, .78fr);
    gap: 80px;
    align-items: end;
    margin-bottom: 60px;
  }
  .dark-heading-grid h2 { max-width: 700px; }
  .dark-lead,
  .medical-page p.dark-lead { color: #d9d6dc !important; font-size: 18px !important; line-height: 1.68 !important; }
  .service-link-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #494650; }
  .service-link-row {
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 22px;
    padding: 28px 30px 28px 0;
    border-bottom: 1px solid #494650;
    color: #fff !important;
    text-decoration: none;
  }
  .service-link-row:nth-child(odd) { padding-right: 44px; border-right: 1px solid #494650; }
  .service-link-row:nth-child(even) { padding-left: 44px; }
  .service-link-row:last-child:nth-child(odd) { grid-column: 1 / -1; min-height: 126px; padding-left: 0; padding-right: 0; border-right: 0; }
  .service-link-row > svg { flex: 0 0 auto; color: var(--stepes-pink-light); transition: transform .2s ease; }
  .service-link-row:hover > svg { transform: translateX(4px); }
  .service-link-copy { display: grid; gap: 9px; min-width: 0; }
  .service-link-copy strong { color: #fff; font-size: 18px; line-height: 1.35; font-weight: 600; }
  .service-link-copy > span { color: #bbb8c0; font-size: 16px; line-height: 1.55; }

  .linguist-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(430px, .88fr); gap: 86px; align-items: center; }
  .linguist-copy { max-width: 700px; }
  .linguist-copy h2 { margin-bottom: 24px; }
  .expertise-panel { padding: 42px; border-radius: 30px; background: var(--stepes-blush); border: 1px solid #eedce5; }
  .panel-kicker { color: var(--stepes-magenta) !important; font-size: 11px !important; line-height: 1.35 !important; font-weight: 600; text-transform: uppercase; letter-spacing: .18em; margin-bottom: 15px !important; }
  .expertise-panel h3 { margin-bottom: 28px; }
  .role-grid { display: grid; gap: 0; border-top: 1px solid #e5cfd9; }
  .role-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid #e5cfd9; color: #38363f; font-size: 16px; line-height: 1.45; }
  .role-item svg { color: var(--stepes-magenta); flex: 0 0 auto; margin-top: 2px; }
  .panel-note { margin: 24px 0 0 !important; color: #60525a !important; }

  .method-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #ded9dd; }
  .method-item { padding: 34px 42px 34px 0; border-bottom: 1px solid #ded9dd; }
  .method-item:nth-child(odd) { border-right: 1px solid #ded9dd; padding-right: 48px; }
  .method-item:nth-child(even) { padding-left: 48px; }
  .method-item:last-child:nth-child(odd) { grid-column: 1 / -1; max-width: 820px; padding-left: 0; padding-right: 0; border-right: 0; }
  .method-item h3 { font-size: 24px; margin-bottom: 13px; }
  .method-item p { margin: 0; }
  .methods-note {
    max-width: 920px;
    margin: 36px 0 0 !important;
    padding-left: 18px;
    border-left: 3px solid var(--stepes-magenta);
    color: #4d4b55 !important;
  }

  .workflow-section { background: #fff; }
  .workflow-heading-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(400px, .9fr); gap: 80px; align-items: end; margin-bottom: 60px; }
  .workflow-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--border); }
  .workflow-step {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 20px;
    padding: 34px 42px 36px 0;
    border-bottom: 1px solid var(--border);
  }
  .workflow-step:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 48px; }
  .workflow-step:nth-child(even) { padding-left: 48px; }
  .workflow-step:last-child { grid-column: 1 / -1; border-right: 0; padding-left: 0; max-width: 720px; }
  .step-number { color: var(--stepes-magenta); font-size: 16px; font-weight: 600; line-height: 1.45; padding-top: 5px; }
  .workflow-step h3 { font-size: 24px; margin-bottom: 10px; }
  .workflow-step p { margin: 0; }

  .ai-section { background: #faf7f9; }
  .ai-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(490px, 1.08fr); gap: 78px; align-items: center; }
  .ai-copy h2 { margin-bottom: 22px; }
  .inline-links { display: flex; flex-wrap: wrap; gap: 18px 28px; margin-top: 28px; }
  .inline-links a,
  .language-assets-panel a,
  .enterprise-links a,
  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    line-height: 1.35;
    font-weight: 600;
    text-decoration: none;
  }
  .inline-links a,
  .language-assets-panel a,
  .enterprise-links a,
  .editorial-link,
  .service-link-copy strong,
  .service-link-copy > span,
  .faq-question > span:first-child,
  .cta-primary > span,
  .cta-secondary > span {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .inline-links a svg,
  .language-assets-panel a svg,
  .enterprise-links a svg,
  .editorial-link svg { transition: transform .2s ease; }
  .inline-links a:hover svg,
  .language-assets-panel a:hover svg,
  .enterprise-links a:hover svg,
  .editorial-link:hover svg { transform: translateX(3px); }
  .platform-panel { border-radius: 30px; background: #fff; border: 1px solid #e4dce1; box-shadow: 0 24px 50px rgba(40,27,36,.08); overflow: hidden; }
  .platform-topbar { min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 18px 24px; border-bottom: 1px solid var(--border); color: #2c2b34; font-size: 15px; font-weight: 600; }
  .status-dot { display: flex; align-items: center; gap: 8px; color: #686671; font-size: 14px; font-weight: 400; }
  .status-dot i { width: 8px; height: 8px; border-radius: 50%; background: #3a9a67; }
  .platform-body { display: grid; grid-template-columns: minmax(0, 1fr) 190px; }
  .platform-track { padding: 24px 28px; }
  .platform-node { position: relative; display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 14px; padding: 13px 0 21px; }
  .platform-node:not(:last-child)::after { content: ""; position: absolute; top: 45px; bottom: -3px; left: 17px; width: 1px; background: #e0d9de; }
  .node-marker { width: 36px; height: 36px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #d8cfd5; background: #fff; color: #6c6870; font-size: 13px; font-weight: 600; z-index: 1; }
  .node-marker.complete { background: #f4e7ed; border-color: #e3bfd0; color: var(--stepes-deep); }
  .node-marker.active { background: var(--stepes-magenta); border-color: var(--stepes-magenta); color: #fff; }
  .platform-node div { display: grid; gap: 2px; }
  .platform-node strong { color: #292832; font-size: 16px; line-height: 1.35; font-weight: 600; }
  .platform-node span:not(.node-marker) { color: #77747d; font-size: 14px; line-height: 1.4; }
  .risk-panel { padding: 28px 24px; background: #29262f; color: #fff; }
  .risk-label { display: block; color: var(--stepes-pink-light); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 11px; }
  .risk-panel strong { display: block; color: #fff; font-size: 18px; line-height: 1.35; font-weight: 600; }
  .risk-scale { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin: 24px 0; }
  .risk-scale span { height: 6px; border-radius: 999px; background: #56515d; }
  .risk-scale .selected { background: var(--stepes-pink-light); }
  .risk-panel p { color: #c8c4cc !important; font-size: 16px !important; line-height: 1.58 !important; margin: 0 !important; }

  .language-assets-panel { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); background: #fff; border: 1px solid #e1dce0; border-radius: 30px; overflow: hidden; }
  .language-assets-panel article { padding: 40px; }
  .language-assets-panel article + article { border-left: 1px solid #e1dce0; }
  .language-assets-panel h3 { margin: 24px 0 14px; }
  .language-assets-panel p { margin-bottom: 24px; }

  .quality-intro-grid { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 90px; margin-bottom: 58px; }
  .standards-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .standards-row article { padding: 34px 40px 34px 0; }
  .standards-row article + article { border-left: 1px solid var(--border); padding-left: 40px; }
  .standards-row span { color: var(--stepes-magenta); font-size: 15px; font-weight: 600; }
  .standards-row h3 { margin: 8px 0 12px; font-size: 24px; }
  .standards-row p { margin: 0; }
  .quality-controls-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(380px, .9fr); gap: 70px; margin-top: 56px; align-items: start; }
  .quality-controls-grid h3 { margin-bottom: 26px; }
  .check-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 28px; border-top: 1px solid var(--border); }
  .check-item { display: flex; align-items: flex-start; gap: 11px; min-height: 62px; padding: 16px 0; border-bottom: 1px solid var(--border); color: #41404a; font-size: 16px; line-height: 1.45; }
  .check-item svg { color: var(--stepes-magenta); flex: 0 0 auto; margin-top: 2px; }
  .regulatory-note { padding: 36px; border-radius: 26px; background: #f8f5f7; border: 1px solid #e8e0e5; }
  .regulatory-note h3 { margin: 20px 0 14px; }
  .regulatory-note p:last-child { margin-bottom: 0; }

  .patient-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(430px, .9fr); gap: 82px; align-items: center; }
  .patient-copy h2 { margin-bottom: 22px; }
  .patient-visual { padding: 30px; border-radius: 30px; background: #efe6eb; }
  .patient-document { background: #fff; border-radius: 24px; border: 1px solid #ded5db; box-shadow: 0 18px 40px rgba(45,34,41,.08); overflow: hidden; }
  .patient-doc-head { display: flex; align-items: center; gap: 16px; padding: 24px; border-bottom: 1px solid var(--border); }
  .medical-cross { width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; background: var(--stepes-blush); color: var(--stepes-magenta); font-size: 24px; line-height: 1; font-weight: 400; }
  .patient-doc-head div { display: grid; gap: 2px; }
  .patient-doc-head strong { font-size: 16px; font-weight: 600; }
  .patient-doc-head span:not(.medical-cross) { color: #77747d; font-size: 14px; }
  .instruction-block { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 14px; padding: 20px 24px; border-bottom: 1px solid var(--border); }
  .instruction-icon { width: 34px; height: 34px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: #f5edf1; color: var(--stepes-deep); font-size: 14px; font-weight: 600; }
  .instruction-block div { display: grid; gap: 4px; }
  .instruction-block strong { color: #2c2b34; font-size: 16px; line-height: 1.4; font-weight: 600; }
  .instruction-block div span { color: #6e6b75; font-size: 16px; line-height: 1.5; }
  .patient-doc-footer { display: flex; align-items: center; gap: 10px; padding: 18px 24px; color: #5d4b55; font-size: 16px; line-height: 1.5; }
  .patient-doc-footer svg { color: var(--stepes-magenta); flex: 0 0 auto; }

  .format-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--border); }
  .format-item { padding: 34px 34px 30px 0; }
  .format-item + .format-item { border-left: 1px solid var(--border); padding-left: 34px; }
  .format-item h3 { margin: 22px 0 12px; font-size: 24px; }
  .format-note { max-width: 900px; margin: 44px 0 0 !important; padding-left: 18px; border-left: 3px solid var(--stepes-magenta); color: #4d4b55 !important; }

  .enterprise-section { background: var(--dark); }
  .enterprise-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(440px, .86fr); gap: 90px; align-items: center; }
  .enterprise-copy > p:not(.eyebrow) { color: #c8c5cc; }
  .enterprise-copy h2 { margin-bottom: 22px; }
  .enterprise-links { display: flex; flex-wrap: wrap; gap: 16px 26px; margin-top: 28px; }
  .enterprise-links a { color: var(--stepes-pink-light) !important; }
  .enterprise-features { border-top: 1px solid #4a4650; }
  .enterprise-feature { display: flex; align-items: flex-start; gap: 13px; padding: 18px 0; border-bottom: 1px solid #4a4650; color: #f2f0f3; font-size: 16px; line-height: 1.48; }
  .enterprise-feature svg { color: var(--stepes-pink-light); flex: 0 0 auto; margin-top: 2px; }

  .languages-heading-grid { display: grid; grid-template-columns: minmax(0, .76fr) minmax(0, 1.24fr); gap: 92px; align-items: start; margin-bottom: 52px; }
  .language-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .language-columns article { padding: 34px 38px 34px 0; }
  .language-columns article + article { border-left: 1px solid var(--border); padding-left: 38px; }
  .language-columns h3 { font-size: 24px; margin-bottom: 13px; }
  .language-columns p { margin: 0; }
  .language-footer { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 60px; align-items: center; margin-top: 38px; }
  .language-footer p { max-width: 890px; margin: 0; }

  .benefit-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #ddd8dc; }
  .benefit-item { padding: 34px 38px 34px 0; border-bottom: 1px solid #ddd8dc; }
  .benefit-item:not(:nth-child(3n + 1)) { border-left: 1px solid #ddd8dc; padding-left: 38px; }
  .benefit-item h3 { font-size: 24px; margin-bottom: 12px; }
  .benefit-item p { margin: 0; }
  .measurement-band { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 20px; align-items: center; margin-top: 44px; padding: 28px 32px; background: #fff; border: 1px solid #e2dce0; border-radius: 22px; }
  .measurement-band p { margin: 0; color: #4b4953; }

  .faq-grid { display: grid; grid-template-columns: minmax(300px, .68fr) minmax(0, 1.32fr); gap: 80px; align-items: start; }
  .faq-intro { position: sticky; top: 28px; }
  .faq-intro h2 { margin-bottom: 20px; }
  .faq-intro .editorial-link { margin-top: 10px; }
  .faq-panel { border-top: 1px solid var(--border); }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-question {
    width: 100%;
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 22px 0;
    border: 0;
    background: transparent;
    color: #272630;
    text-align: left;
    font: inherit;
    font-size: 18px;
    line-height: 1.42;
    font-weight: 600;
    cursor: pointer;
  }
  .faq-toggle { width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; background: #f8f2f5; color: var(--stepes-magenta); transition: transform .2s ease, background .2s ease; }
  .faq-question:hover .faq-toggle { background: #f2e4ea; }
  .faq-item.is-open .faq-toggle { transform: rotate(180deg); }
  .faq-answer { padding: 0 60px 24px 0; }
  .faq-answer p { max-width: 820px; margin: 0; font-size: 16px; line-height: 1.72; }

  .final-cta-section { padding: 0 0 96px; background: #fff; }
  .final-cta { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr) 360px; gap: 54px; align-items: center; padding: 62px 66px; border-radius: 30px; background: linear-gradient(135deg, #2a252d 0%, #3a2732 100%); }
  .final-cta::after { content: ""; position: absolute; width: 330px; height: 330px; border-radius: 50%; right: -120px; bottom: -210px; border: 1px solid rgba(242,167,198,.22); }
  .final-cta-copy { position: relative; z-index: 1; }
  .final-cta h2 { color: #fff; max-width: 800px; }
  .final-cta p { max-width: 790px; margin: 20px 0 0; color: #d7d2d8; font-size: 17px; }
  .light-secondary { background: transparent; border-color: #726873; color: #fff !important; }
  .light-secondary:hover { border-color: #b990a2; }
  .final-cta-visual { position: relative; z-index: 1; }
  .final-cta-visual svg { display: block; width: 100%; height: auto; }

  @media (max-width: 1391px) {
    .shell { max-width: 1360px; padding-left: 40px; padding-right: 40px; }
    .hero-grid { gap: 46px; grid-template-columns: minmax(0, 1.05fr) minmax(390px, .95fr); }
    .service-link-row:nth-child(odd) { padding-right: 34px; }
    .service-link-row:nth-child(even) { padding-left: 34px; }
  }

  @media (max-width: 1120px) {
    .hero-grid { grid-template-columns: 1fr 430px; }
    .hero-support { font-size: 16px !important; }
    .split-intro, .linguist-grid, .ai-grid, .patient-grid, .enterprise-grid { gap: 56px; }
    .dark-heading-grid, .workflow-heading-grid, .quality-intro-grid, .languages-heading-grid { gap: 56px; }
    .lifecycle-row { gap: 42px; }
    .format-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .format-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--border); padding-left: 0; }
    .format-item:nth-child(4) { border-top: 1px solid var(--border); }
    .benefit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .benefit-item:not(:nth-child(3n + 1)) { border-left: 0; padding-left: 0; }
    .benefit-item:nth-child(even) { border-left: 1px solid #ddd8dc; padding-left: 38px; }
    .final-cta { grid-template-columns: minmax(0, 1fr) 290px; }
  }

  @media (max-width: 1023px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding-top: 80px; padding-bottom: 80px; }
    .medical-page h1 { font-size: 42px; }
    .medical-page h2 { font-size: 32px; }
    .medical-page h3 { font-size: 22px; }
    .hero-section { padding-top: 88px; padding-bottom: 88px; }
    .hero-grid { grid-template-columns: 1fr; gap: 48px; }
    .hero-copy { max-width: 820px; }
    .hero-visual { max-width: 650px; margin: 0 auto; }
    .trust-strip { grid-template-columns: repeat(3, 1fr); }
    .trust-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--border); }
    .trust-item:nth-child(5) { border-top: 1px solid var(--border); }
    .split-intro, .quality-intro-grid, .languages-heading-grid { grid-template-columns: 1fr; gap: 28px; }
    .split-intro h2 { max-width: 760px; }
    .lifecycle-row { grid-template-columns: 1fr; gap: 22px; }
    .dark-heading-grid, .workflow-heading-grid { grid-template-columns: 1fr; gap: 24px; align-items: start; }
    .service-link-grid { grid-template-columns: 1fr; }
    .service-link-row, .service-link-row:nth-child(odd), .service-link-row:nth-child(even), .service-link-row:last-child:nth-child(odd) { grid-column: auto; min-height: 0; padding: 26px 0; border-right: 0; }
    .linguist-grid, .ai-grid, .patient-grid, .enterprise-grid { grid-template-columns: 1fr; }
    .expertise-panel { max-width: 760px; }
    .platform-panel { max-width: 720px; }
    .language-assets-panel { grid-template-columns: 1fr; }
    .language-assets-panel article + article { border-left: 0; border-top: 1px solid #e1dce0; }
    .standards-row { grid-template-columns: 1fr; }
    .standards-row article, .standards-row article + article { padding: 30px 0; border-left: 0; }
    .standards-row article + article { border-top: 1px solid var(--border); }
    .quality-controls-grid { grid-template-columns: 1fr; gap: 44px; }
    .patient-visual { max-width: 650px; }
    .language-columns { grid-template-columns: 1fr; }
    .language-columns article, .language-columns article + article { padding: 30px 0; border-left: 0; }
    .language-columns article + article { border-top: 1px solid var(--border); }
    .language-footer { grid-template-columns: 1fr; gap: 24px; }
    .faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .faq-intro { position: static; max-width: 760px; }
    .final-cta { grid-template-columns: 1fr; padding: 54px; }
    .final-cta-visual { max-width: 380px; }
  }

  @media (max-width: 820px) {
    .workflow-list { grid-template-columns: 1fr; }
    .workflow-step,
    .workflow-step:nth-child(odd),
    .workflow-step:nth-child(even),
    .workflow-step:last-child {
      grid-column: auto;
      max-width: none;
      padding: 30px 0;
      border-right: 0;
    }
  }

  @media (max-width: 767px) {
    .section { padding-top: 68px; padding-bottom: 68px; }
    .section-heading { margin-bottom: 42px; }
    .hero-section { padding-top: 72px; padding-bottom: 72px; }
    .hero-lead { font-size: 18px !important; }
    .trust-strip { grid-template-columns: 1fr 1fr; }
    .trust-item { min-height: 68px; font-size: 14px; }
    .trust-item:nth-child(3), .trust-item:nth-child(5) { border-left: 0; }
    .trust-item:nth-child(3) { border-top: 1px solid var(--border); }
    .trust-item:nth-child(4) { border-left: 1px solid var(--border); }
    .trust-item:nth-child(5) { grid-column: 1 / -1; }
    .audience-list { grid-template-columns: 1fr; }
    .audience-list span:nth-child(odd) { padding-right: 20px; }
    .two-column-list { grid-template-columns: 1fr; }
    .method-grid, .workflow-list { grid-template-columns: 1fr; }
    .method-item, .method-item:nth-child(odd), .method-item:nth-child(even), .method-item:last-child:nth-child(odd) { grid-column: auto; max-width: none; padding: 28px 0; border-right: 0; }
    .workflow-step, .workflow-step:nth-child(odd), .workflow-step:nth-child(even), .workflow-step:last-child { grid-column: auto; padding: 28px 0; border-right: 0; max-width: none; }
    .platform-body { grid-template-columns: 1fr; }
    .risk-panel { padding: 26px 28px; }
    .check-grid { grid-template-columns: 1fr; }
    .format-grid { grid-template-columns: 1fr; }
    .format-item, .format-item + .format-item, .format-item:nth-child(3), .format-item:nth-child(4) { padding: 28px 0; border-left: 0; border-top: 1px solid var(--border); }
    .format-item:first-child { border-top: 0; }
    .benefit-grid { grid-template-columns: 1fr; }
    .benefit-item, .benefit-item:nth-child(even), .benefit-item:not(:nth-child(3n + 1)) { padding: 28px 0; border-left: 0; }
    .final-cta-section { padding-bottom: 68px; }
    .final-cta { padding: 44px 34px; }
    .final-cta-visual { display: none; }
  }

  @media (max-width: 639px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .medical-page h1 { font-size: 38px; line-height: 1.08; }
    .medical-page h2 { font-size: 30px; line-height: 1.18; }
    .medical-page h3 { font-size: 20px; }
    .hero-actions, .final-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .cta-primary, .cta-secondary { width: 100%; min-height: 54px; padding-left: 18px; padding-right: 18px; text-align: center; }
    .hero-visual { width: calc(100% + 12px); margin-left: -6px; margin-right: -6px; }
    .lifecycle-row { padding: 36px 0; }
    .lifecycle-title { gap: 14px; }
    .icon-box, .asset-icon, .note-icon, .measurement-icon { width: 44px; height: 44px; border-radius: 13px; }
    .dark-section .section-heading, .dark-heading-grid { margin-bottom: 42px; }
    .service-link-row { align-items: flex-start; }
    .expertise-panel, .regulatory-note { padding: 28px 24px; border-radius: 24px; }
    .workflow-step { grid-template-columns: 44px minmax(0, 1fr); gap: 12px; }
    .platform-topbar { align-items: flex-start; flex-direction: column; }
    .platform-track { padding: 20px; }
    .language-assets-panel { border-radius: 24px; }
    .language-assets-panel article { padding: 30px 24px; }
    .patient-visual { padding: 16px; border-radius: 24px; }
    .patient-doc-head, .instruction-block, .patient-doc-footer { padding-left: 18px; padding-right: 18px; }
    .enterprise-links, .inline-links { display: grid; grid-template-columns: 1fr; gap: 8px; }
    .enterprise-links a, .inline-links a, .language-assets-panel a, .editorial-link { min-height: 44px; align-items: center; }
    .service-link-row > svg { margin-top: 3px; }
    .measurement-band { grid-template-columns: 1fr; padding: 24px; }
    .faq-question { min-height: 72px; font-size: 17px; gap: 16px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 38px 24px; border-radius: 24px; }
  }

  @media (max-width: 360px) {
    .medical-page h1 { font-size: 38px; }
    .trust-item { padding-left: 10px; padding-right: 10px; }
    .workflow-step { grid-template-columns: 38px minmax(0, 1fr); }
    .step-number { font-size: 16px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .medical-page, .medical-page *, .medical-page *::before, .medical-page *::after { transition-duration: 0.001ms !important; animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; }
  }
`;

