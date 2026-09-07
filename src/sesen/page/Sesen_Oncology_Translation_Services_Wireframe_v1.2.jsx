import React from "react";

const internalLinks = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  clinicalTrials: "https://www.sesen.com/clinical-trial-translation-services/",
  clinicalStudyDocs: "https://www.sesen.com/clinical-study-document-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  ib: "https://www.sesen.com/investigators-brochure-translation-services/",
  icf: "https://www.sesen.com/informed-consent-form-translation-services/",
  linguisticValidation: "https://www.sesen.com/linguistic-validation-services/",
  ecoa: "https://www.sesen.com/ecoa-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  ectd: "https://www.sesen.com/ectd-ctd-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  csr: "https://www.sesen.com/clinical-study-report-translation-services/",
  caseStudy: "https://www.sesen.com/resources/case-studies/linguistic-validation-cancer-clinical-trial/",
  biotechnology: "https://www.sesen.com/biotechnology-translation-services/",
  medicalAffairs: "https://www.sesen.com/medical-affairs-translation-services/",
};

const lifecycle = [
  {
    title: "Research & Translational Science",
    items: ["Biomarkers", "Genomics", "Preclinical documentation", "Scientific reports"],
  },
  {
    title: "Clinical Development",
    items: ["Protocols", "IBs", "ICFs", "CRFs/eCRFs", "COA/eCOA", "CSRs"],
  },
  {
    title: "Global Trial Operations",
    items: ["IRB/EC materials", "Site content", "Training", "Recruitment", "Safety updates"],
  },
  {
    title: "Regulatory Submission",
    items: ["IND/CTA content", "CTD/eCTD", "Clinical summaries", "Authority responses"],
  },
  {
    title: "Approval & Launch",
    items: ["Labeling", "Product information", "Patient education", "Medical information"],
  },
  {
    title: "Post-Approval",
    items: ["Pharmacovigilance", "Medical Affairs", "RWE/HEOR", "Publications", "Label updates"],
  },
];

const contentGroups = [
  {
    icon: "clinical",
    title: "Clinical & Scientific Documentation",
    text: "Translate the scientific and clinical foundation of oncology development with terminology appropriate to the indication, study phase, intended audience, and regulatory use.",
    items: [
      "Clinical trial protocols and amendments",
      "Protocol synopses",
      "Investigator's brochures",
      "Clinical study reports",
      "Clinical narratives",
      "Tables, listings, and figures",
      "Statistical and scientific content",
      "Research reports, abstracts, posters, and publications",
    ],
  },
  {
    icon: "patient",
    title: "Patient-Facing & Clinical Outcome Content",
    text: "Preserve clinical meaning while helping patients understand study participation, treatment requirements, symptoms, assessments, and other important information.",
    items: [
      "Informed consent and assent",
      "Re-consent materials",
      "Patient information sheets",
      "COA, PRO, ePRO, and eCOA content",
      "Symptom questionnaires",
      "Quality-of-life instruments",
      "Patient diaries",
      "Treatment instructions",
    ],
  },
  {
    icon: "site",
    title: "Site & Clinical Operations Content",
    text: "Give investigators and trial sites consistent multilingual information for study setup, execution, and ongoing management.",
    items: [
      "CRFs and eCRFs",
      "Investigator and site manuals",
      "Pharmacy and laboratory manuals",
      "Study startup documentation",
      "Site initiation materials",
      "Investigator training",
      "Clinical operations communications",
      "Recruitment and retention materials",
    ],
  },
  {
    icon: "regulatory",
    title: "Regulatory & Safety Documentation",
    text: "Support controlled oncology communication for health authorities, safety teams, regulatory professionals, and other stakeholders.",
    items: [
      "Regulatory submissions",
      "CTD and eCTD modules",
      "Health authority responses",
      "Safety narratives",
      "Adverse-event documentation",
      "SAE and SUSAR-related content",
      "DSUR-related and risk-management content",
      "Product labeling and safety communications",
    ],
  },
  {
    icon: "medical",
    title: "Medical Affairs & Scientific Communication",
    text: "Extend consistent oncology terminology into post-development and professional communication.",
    items: [
      "Medical Affairs materials",
      "Medical information",
      "Scientific presentations",
      "Congress materials",
      "KOL communications",
      "Publications",
      "Training materials",
      "Patient education and digital medical content",
    ],
  },
];

const precisionItems = [
  {
    title: "Biomarker Terminology",
    text: "Maintain consistent terminology for molecular markers, diagnostic concepts, expression levels, genomic alterations, assay-related language, and biomarker-defined patient populations.",
  },
  {
    title: "Disease & Molecular Classification",
    text: "Support terminology involving tumor types, histologies, stages, molecular subtypes, disease states, treatment lines, resistance mechanisms, and related clinical characteristics.",
  },
  {
    title: "Treatment & Target Terminology",
    text: "Control names and descriptions associated with molecular targets, mechanisms of action, investigational therapies, combination regimens, dosing, and treatment strategies.",
  },
  {
    title: "Endpoint & Response Terminology",
    text: "Maintain consistent language for oncology endpoints, response criteria, progression, survival, disease status, symptoms, functioning, and treatment experience.",
  },
  {
    title: "Patient-Appropriate Language",
    text: "Preserve the underlying medical concept while using language appropriate for informed consent, questionnaires, treatment instructions, recruitment, and other patient communications.",
  },
];

const terminologyNodes = [
  "Protocol",
  "Investigator's Brochure",
  "Informed Consent",
  "CRF / eCRF",
  "COA / eCOA",
  "Safety Documentation",
  "Clinical Study Report",
  "CTD / eCTD",
  "Labeling",
  "Medical Affairs",
];

const modalities = [
  {
    icon: "target",
    title: "Targeted Therapies",
    text: "Molecular targets, driver alterations, signaling pathways, biomarker selection, resistance mechanisms, treatment combinations, and target-defined patient populations.",
  },
  {
    icon: "immune",
    title: "Immuno-Oncology",
    text: "Immune checkpoints, tumor immune response, immunotherapy combinations, response assessment, immune-mediated adverse events, and related clinical concepts.",
  },
  {
    icon: "antibody",
    title: "ADCs & Bispecifics",
    text: "Specialized terminology connecting target selection, antibodies, payloads, linkers, binding mechanisms, dosing, efficacy, safety, and treatment strategy.",
  },
  {
    icon: "cell",
    title: "Cell & Gene Therapies",
    text: "Complex therapeutic concepts involving engineered cells, genetic modification, individualized workflows, manufacturing, administration, monitoring, and long-term follow-up.",
  },
  {
    icon: "radio",
    title: "Therapeutic Radiopharmaceuticals",
    text: "Radionuclides, targeting mechanisms, dosimetry, administration, radiation safety, dose optimization, imaging, and treatment response.",
  },
  {
    icon: "rna",
    title: "Personalized mRNA & Neoantigen Therapies",
    text: "Tumor sequencing, neoantigen identification, computational selection, individualized therapeutic design, manufacturing, immune response, and the clinical evidence surrounding personalized mRNA oncology programs.",
  },
];

const mrnaProgramFlow = [
  ["01", "Tumor Sequencing & Biomarker Data", "Patient-specific genomic information, tumor mutations, biomarker results, assays, and source scientific terminology establish the individualized treatment context."],
  ["02", "Neoantigen Selection & Therapeutic Design", "Computationally selected neoantigens, sequence-driven design decisions, product terminology, and mechanism-of-action language require precise cross-functional alignment."],
  ["03", "Individualized Manufacturing & Clinical Delivery", "Manufacturing, chain-of-custody, dosing, administration, laboratory, site, and operational content must stay connected to the correct patient and treatment pathway."],
  ["04", "Clinical, Patient & Regulatory Evidence", "Protocols, informed consent, safety content, outcomes, clinical reports, submissions, and medical communication need consistent terminology as evidence moves across markets."],
];

const trialComplexities = [
  {
    title: "Biomarker-Defined Patient Populations",
    text: "Eligibility may depend on tumor characteristics, biomarker expression, genomic alterations, previous treatments, disease progression, laboratory findings, or other study-specific criteria.",
  },
  {
    title: "Basket, Umbrella & Platform Studies",
    text: "Complex master-protocol structures may evaluate multiple therapies, molecular targets, tumor types, or patient populations within connected study frameworks.",
  },
  {
    title: "Combination Therapies",
    text: "Maintain consistent terminology for treatment sequences, dosing, schedules, comparators, combination regimens, safety information, and study procedures.",
  },
  {
    title: "Complex Oncology Endpoints",
    text: "Support language for survival, response, progression, recurrence, symptoms, tolerability, functioning, quality of life, biomarkers, and other endpoints.",
  },
  {
    title: "Multicountry Execution",
    text: "Centralize multilingual support across sponsors, CROs, affiliates, ethics committees, investigators, laboratories, study sites, vendors, patients, and caregivers.",
  },
];

const patientItems = [
  {
    title: "Informed Consent & Re-Consent",
    text: "Translate study purpose, treatment, procedures, risks, potential benefits, alternatives, privacy, sample use, genetic testing, optional research, withdrawal, and other participation considerations.",
  },
  {
    title: "Patient Information & Education",
    text: "Support multilingual information that helps patients and caregivers understand study participation, treatment requirements, visits, procedures, safety considerations, and related care.",
  },
  {
    title: "Recruitment & Retention",
    text: "Localize outreach materials, recruitment communications, pre-screening content, study information, participant reminders, and retention materials.",
  },
  {
    title: "PRO, ePRO & eCOA",
    text: "Translate symptom scales, quality-of-life measures, patient diaries, digital assessments, instructions, reminders, interfaces, and other outcome-related content.",
  },
];

const outcomeTypes = [
  ["PRO", "Patient-Reported Outcomes"],
  ["ePRO", "Electronic Patient-Reported Outcomes"],
  ["ClinRO", "Clinician-Reported Outcomes"],
  ["ObsRO", "Observer-Reported Outcomes"],
  ["PerfO", "Performance Outcomes"],
];

const versionImpacts = [
  "Informed Consent & Re-Consent",
  "CRFs & eCRFs",
  "Site Manuals",
  "Investigator Training",
  "Laboratory & Pharmacy Content",
  "COA & eCOA",
  "Safety Communications",
  "IRB / Ethics Committee Materials",
  "Patient Communications",
];

const evidenceColumns = [
  {
    title: "Regulatory Submission",
    items: [
      "CTD and eCTD content",
      "Clinical summaries",
      "Regulatory submission documents",
      "Health authority questions and responses",
      "Regional submission materials",
      "Supporting scientific documentation",
    ],
  },
  {
    title: "Safety & Pharmacovigilance",
    items: [
      "Adverse-event documentation",
      "SAE and SUSAR-related content",
      "Safety narratives",
      "DSUR-related content",
      "Risk-management materials",
      "Post-market safety information",
    ],
  },
  {
    title: "Clinical Evidence & Reporting",
    items: [
      "Clinical study reports",
      "Clinical narratives",
      "Tables, listings, and figures",
      "Trial results",
      "Plain-language summaries",
      "Manuscripts and scientific publications",
    ],
  },
];

const workflowSteps = [
  ["01", "Content & Risk Assessment", "Review content type, audience, therapeutic context, intended use, languages, reference materials, formatting requirements, and project risk."],
  ["02", "Oncology Terminology Preparation", "Prepare sponsor terminology, study glossaries, previous approved translations, translation memory, product references, and other language assets."],
  ["03", "Specialized Human Translation", "Assign professional native-language life sciences linguists with relevant oncology, clinical, scientific, regulatory, or patient-facing expertise."],
  ["04", "Independent Review", "Evaluate accuracy, completeness, terminology, consistency, readability, and appropriate language use according to the required workflow."],
  ["05", "AI-Assisted Quality Assurance", "Use technology to surface potential omissions, terminology inconsistencies, numerical discrepancies, formatting issues, and other items for human attention."],
  ["06", "Final Human Quality Control", "Qualified professionals remain responsible for the final linguistic and contextual assessment before delivery."],
];

const cancers = [
  "Breast cancer",
  "Lung cancer",
  "Melanoma",
  "Colorectal cancer",
  "Prostate cancer",
  "Ovarian cancer",
  "Pancreatic cancer",
  "Renal cell carcinoma",
  "Bladder cancer",
  "Liver cancer",
  "Gastric and gastroesophageal cancers",
  "Head and neck cancers",
  "Brain and central nervous system tumors",
  "Leukemias",
  "Lymphomas",
  "Multiple myeloma",
  "Other solid and hematologic malignancies",
];

const regions = [
  ["North America", "English, Canadian French, U.S. Spanish, and other languages required by diverse patient populations and study sites."],
  ["Europe", "Multilingual support across major EU and EEA markets, the United Kingdom, Switzerland, and other European study locations."],
  ["Asia-Pacific", "Translation for major clinical research and commercial markets across East Asia, Southeast Asia, South Asia, Australia, and New Zealand."],
  ["Latin America", "Spanish and Portuguese localization adapted for relevant countries, clinical environments, regulatory uses, and patient populations."],
  ["Middle East & Africa", "Language support for expanding clinical research networks and diverse patient populations across regional markets."],
];

const whySesen = [
  ["Life Sciences Specialization", "Dedicated support for pharmaceutical, biotechnology, CRO, healthcare, medical device, and digital health organizations."],
  ["Oncology & Clinical Expertise", "Professional linguists selected according to language, subject matter, document type, target audience, and intended use."],
  ["Study-Level Terminology Control", "Glossaries, translation memories, approved terminology, style guidance, product references, and study-specific language assets."],
  ["Human-Led Quality", "Qualified professionals remain central to scientific interpretation, clinical context, patient readability, and final quality decisions."],
  ["Global Program Scalability", "Support for individual documents, recurring studies, and multilingual programs spanning countries, languages, content types, and development stages."],
  ["ISO-Certified Workflows", "Quality processes supported by ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications."],
];

const relatedServices = [
  ["Clinical Trial Translation Services", "Global multilingual support across study startup, execution, patient materials, safety, amendments, and reporting.", internalLinks.clinicalTrials],
  ["Clinical Study Document Translation", "Translation for interconnected study documents supporting planning, execution, evidence generation, and reporting.", internalLinks.clinicalStudyDocs],
  ["Protocol Translation Services", "Specialized translation for protocols, synopses, schedules, amendments, and protocol-related study documentation.", internalLinks.protocol],
  ["Investigator's Brochure Translation", "Translate nonclinical, clinical, pharmacological, safety, dosing, and product information for investigators and study teams.", internalLinks.ib],
  ["Informed Consent Form Translation", "Patient-focused consent and re-consent translation designed to preserve clinical meaning and support clear communication.", internalLinks.icf],
  ["eCOA Translation & Linguistic Validation", "Translate and validate PRO, ePRO, ClinRO, ObsRO, PerfO, and other clinical outcome assessments for multilingual study deployment.", internalLinks.ecoa],
  ["Regulatory Translation Services", "Support health authority submissions, regulatory correspondence, clinical evidence, product information, and lifecycle documentation.", internalLinks.regulatory],
  ["CTD & eCTD Translation", "Coordinate multilingual content across CTD and eCTD modules while maintaining terminology and document-level consistency.", internalLinks.ectd],
  ["Pharmacovigilance Translation", "Multilingual support for safety narratives, adverse-event documentation, aggregate reports, and ongoing drug-safety workflows.", internalLinks.pharmacovigilance],
  ["Clinical Study Report Translation", "Translate study methodology, efficacy, safety, statistical information, narratives, tables, and appendices.", internalLinks.csr],
  ["Biotechnology Translation Services", "Support research-driven and clinical-stage biotechnology programs across scientific, clinical, regulatory, manufacturing, and commercialization content.", internalLinks.biotechnology],
  ["Medical Affairs Translation Services", "Extend oncology evidence into publications, congress content, field medical communication, KOL engagement, medical information, HEOR, and RWE.", internalLinks.medicalAffairs],
];

const faqs = [
  [
    "What is oncology translation?",
    "Oncology translation is the specialized translation and localization of scientific, clinical, regulatory, safety, medical, and patient-facing content associated with cancer research, clinical development, treatment, and post-approval communication. It often requires detailed knowledge of cancer biology, biomarkers, genomic terminology, treatment modalities, clinical endpoints, patient-reported outcomes, study design, regulatory documentation, and rapidly evolving therapeutic approaches.",
  ],
  [
    "What oncology documents does Sesen translate?",
    "Sesen translates oncology clinical trial protocols, amendments, investigator's brochures, informed consent forms, CRFs and eCRFs, COAs and eCOAs, PROs and ePROs, patient materials, site manuals, training content, safety documentation, clinical study reports, CTD and eCTD content, regulatory submissions, labeling, Medical Affairs materials, publications, and other scientific and clinical content.",
  ],
  [
    "How does Sesen maintain oncology terminology across a clinical program?",
    "Sesen can establish and maintain study-specific language assets including approved glossaries, biomarker terminology, product terminology, disease terminology, translation memory, previous approved translations, reference content, and style guidance. These resources help keep key concepts consistent as they move between interconnected study and regulatory documents.",
  ],
  [
    "Can Sesen support global oncology clinical trials across multiple countries and languages?",
    "Yes. Sesen provides multilingual clinical trial translation across 150+ languages and can support studies involving multiple countries, content types, vendors, sites, and study stages. Centralized project management, terminology governance, translation memory, version control, native-language specialists, and structured review help maintain consistency across global programs.",
  ],
  [
    "How does Sesen translate oncology informed consent and patient materials?",
    "Sesen translates informed consent forms, re-consent materials, patient information, recruitment content, treatment instructions, questionnaires, diaries, and digital content using language appropriate for the intended patient population while preserving the underlying scientific and clinical meaning. Terminology can also be aligned with protocols, investigator's brochures, safety information, and other study documentation.",
  ],
  [
    "Does Sesen support oncology COA, PRO, and eCOA linguistic validation?",
    "Yes. Sesen supports translation and linguistic validation for PRO, ePRO, eCOA, ClinRO, ObsRO, PerfO, patient diaries, symptom scales, quality-of-life instruments, and other outcome assessments. Depending on study requirements, workflows can include source review, concept clarification, forward translation, reconciliation, back translation, review, cognitive debriefing, proofreading, documentation, and finalization.",
  ],
  [
    "Can Sesen manage oncology protocol amendments and multilingual version updates?",
    "Yes. Sesen supports protocol amendments and related multilingual updates across consent forms, CRFs, investigator and site materials, laboratory and pharmacy content, eCOA, safety communications, ethics committee documentation, patient communication, and other affected content. Translation memory, terminology resources, version comparison, and structured project management help control changed content while reusing approved language appropriately.",
  ],
  [
    "What types of oncology therapies can Sesen support?",
    "Sesen supports language requirements associated with established and emerging oncology approaches, including chemotherapy, targeted therapy, immuno-oncology, monoclonal antibodies, antibody-drug conjugates, bispecific antibodies, cell and gene therapies, therapeutic radiopharmaceuticals, cancer vaccines, and other precision-medicine approaches. Personalized mRNA and neoantigen therapies can introduce an especially connected terminology chain spanning tumor sequencing, patient-specific mutations, neoantigen selection, computational design, individualized manufacturing, dosing and administration, clinical evidence, informed consent, safety communication, and regulatory documentation.",
  ],
  [
    "How does Sesen use AI in oncology translation?",
    "Sesen uses language technology and AI-assisted tools to strengthen professional human workflows. Technology can support terminology checks, translation memory, reference retrieval, consistency analysis, numerical checks, potential omission detection, repetitive-content reuse, and version comparison. Professional life sciences linguists and reviewers remain responsible for scientific meaning, clinical context, patient readability, regulatory nuance, and final quality decisions.",
  ],
];

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    clinical: <><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5"/><path d="M10 13h5M10 17h5"/></>,
    patient: <><circle cx="12" cy="8" r="3"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/><path d="M19 5v4M17 7h4"/></>,
    site: <><path d="M4 21V6l8-3 8 3v15"/><path d="M9 21v-5h6v5M8 9h1M12 9h1M16 9h1M8 13h1M16 13h1"/></>,
    regulatory: <><path d="M7 3h10v18H7z"/><path d="M9.5 8h5M9.5 12h5M9.5 16h3"/><path d="m14 16 1.3 1.3L18 14.5"/></>,
    medical: <><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"/><path d="M9 12h6M12 9v6"/></>,
    target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 4v3M20 12h-3"/></>,
    immune: <><path d="M12 3 5 6v5c0 4.7 2.8 8.1 7 10 4.2-1.9 7-5.3 7-10V6z"/><path d="m9.5 12 1.7 1.7 3.6-4"/></>,
    antibody: <><path d="M12 21v-7M12 14 6 7M12 14l6-7M6 7V3M18 7V3"/><circle cx="6" cy="3" r="1.5"/><circle cx="18" cy="3" r="1.5"/></>,
    cell: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M4.8 8.5 7 10M17 14l2.2 1.5M8 18l1-2.4"/></>,
    radio: <><circle cx="12" cy="12" r="3"/><path d="M12 3a9 9 0 0 1 7.8 4.5L15 10M4.2 7.5A9 9 0 0 0 4.2 16.5L9 14M12 21a9 9 0 0 0 7.8-4.5L15 14"/></>,
    rna: <><path d="M7 3c8 4 2 14 10 18M17 3C9 7 15 17 7 21"/><path d="m9 7 6 2M9 15l6 2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`sesen-oncology-page__arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function SectionHeading({ id, eyebrow, title, intro, align = "center", className = "" }) {
  return (
    <div className={`sesen-oncology-page__section-heading sesen-oncology-page__section-heading--${align} ${className}`}>
      {eyebrow ? <div className="sesen-oncology-page__eyebrow">{eyebrow}</div> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function OncologyTranslationServicesWireframe() {
  return (
    <main className="sesen-oncology-page">
      <style>{`
        .sesen-oncology-page {
          --so-blue: #4B6FD8;
          --so-blue-dark: #3659BB;
          --so-blue-deep: #253F8F;
          --so-blue-mid: #6F8BE1;
          --so-blue-soft: #EAF0FF;
          --so-blue-pale: #F5F7FF;
          --so-navy: #17264D;
          --so-ink: #111827;
          --so-body: #46546D;
          --so-muted: #68758B;
          --so-border: #DDE4F2;
          --so-divider: #E9EEF8;
          --so-section: #F7F9FD;
          --so-white: #FFFFFF;
          --so-light-on-dark: #C8D6FF;
          width: 100%;
          overflow-x: clip;
          background: var(--so-white);
          color: var(--so-body);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
          -webkit-font-smoothing: antialiased;
        }

        .sesen-oncology-page *,
        .sesen-oncology-page *::before,
        .sesen-oncology-page *::after {
          box-sizing: border-box;
        }

        .sesen-oncology-page :where(a) {
          color: inherit;
        }

        .sesen-oncology-page img,
        .sesen-oncology-page svg {
          max-width: 100%;
        }

        .sesen-oncology-page__shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
          min-width: 0;
        }

        .sesen-oncology-page__section {
          padding-block: 96px;
          min-width: 0;
        }

        .sesen-oncology-page__section--dense {
          padding-block: 80px;
        }

        .sesen-oncology-page__section--soft {
          background: var(--so-section);
        }

        .sesen-oncology-page__section--blue-soft {
          background: var(--so-blue-pale);
        }

        .sesen-oncology-page__section--dark {
          background: var(--so-navy);
          color: #fff;
        }

        .sesen-oncology-page__eyebrow {
          margin: 0 0 14px;
          color: var(--so-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .sesen-oncology-page__section--dark .sesen-oncology-page__eyebrow,
        .sesen-oncology-page__closing-cta .sesen-oncology-page__eyebrow {
          color: var(--so-light-on-dark);
        }

        .sesen-oncology-page h1,
        .sesen-oncology-page h2,
        .sesen-oncology-page h3 {
          margin: 0;
          color: var(--so-navy);
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
        }

        .sesen-oncology-page h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-oncology-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .sesen-oncology-page h3 {
          font-size: 23px;
          line-height: 1.32;
        }

        .sesen-oncology-page p {
          margin: 0;
          color: var(--so-body);
          font-size: 16px;
        }

        .sesen-oncology-page__section-heading {
          max-width: 820px;
          margin-bottom: 52px;
          min-width: 0;
        }

        .sesen-oncology-page__section-heading--center {
          margin-inline: auto;
          text-align: center;
        }

        .sesen-oncology-page__section-heading--left {
          text-align: left;
        }

        .sesen-oncology-page__section-heading p {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.7;
        }

        .sesen-oncology-page__btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .04em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
        }

        .sesen-oncology-page__btn:focus-visible,
        .sesen-oncology-page__arrow-link:focus-visible,
        .sesen-oncology-page details summary:focus-visible {
          outline: 3px solid rgba(75,111,216,.35);
          outline-offset: 3px;
        }

        .sesen-oncology-page__btn:hover {
          transform: translateY(-1px);
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--primary,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary:visited {
          background: var(--so-blue);
          color: #fff;
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--primary:hover,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary:focus-visible {
          background: var(--so-blue-dark);
          color: #fff;
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--primary,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary:visited,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary:hover,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary:focus-visible,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary span,
        .sesen-oncology-page a.sesen-oncology-page__btn--primary svg {
          color: #fff !important;
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--primary svg {
          stroke: currentColor;
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--secondary,
        .sesen-oncology-page a.sesen-oncology-page__btn--secondary:visited {
          background: #fff;
          border-color: var(--so-border);
          color: var(--so-ink);
        }

        .sesen-oncology-page a.sesen-oncology-page__btn--secondary:hover,
        .sesen-oncology-page a.sesen-oncology-page__btn--secondary:focus-visible {
          background: var(--so-blue-soft);
          border-color: #C9D5F3;
          color: var(--so-ink);
        }

        .sesen-oncology-page a.sesen-oncology-page__arrow-link,
        .sesen-oncology-page a.sesen-oncology-page__arrow-link:visited {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          color: var(--so-blue-dark);
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .sesen-oncology-page__arrow-link svg {
          flex: 0 0 auto;
          transition: transform .18s ease;
        }

        .sesen-oncology-page__arrow-link:hover span {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .sesen-oncology-page__arrow-link:hover svg {
          transform: translateX(2px);
        }

        /* Hero */
        .sesen-oncology-page__hero {
          position: relative;
          padding-block: 94px 88px;
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 48%, rgba(75,111,216,.11) 0, rgba(75,111,216,.055) 19%, rgba(255,255,255,0) 46%),
            #fff;
        }

        .sesen-oncology-page__hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr);
          gap: 60px;
          align-items: center;
        }

        .sesen-oncology-page__hero-copy,
        .sesen-oncology-page__hero-art {
          min-width: 0;
        }

        .sesen-oncology-page__hero h1 {
          max-width: 690px;
        }

        .sesen-oncology-page__hero-lead {
          max-width: 700px;
          margin-top: 24px !important;
          color: #293954 !important;
          font-size: 19px !important;
          line-height: 1.72 !important;
        }

        .sesen-oncology-page__hero-support {
          max-width: 680px;
          margin-top: 16px !important;
        }

        .sesen-oncology-page__hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .sesen-oncology-page__hero-art {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sesen-oncology-page__hero-art svg {
          width: min(100%, 500px);
          height: auto;
          overflow: visible;
        }

        .sesen-oncology-page__trust-band {
          border-top: 1px solid var(--so-divider);
          border-bottom: 1px solid var(--so-divider);
          background: #fff;
        }

        .sesen-oncology-page__trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          min-width: 0;
        }

        .sesen-oncology-page__trust-item {
          min-width: 0;
          padding: 24px 26px;
        }

        .sesen-oncology-page__trust-item + .sesen-oncology-page__trust-item {
          border-left: 1px solid var(--so-divider);
        }

        .sesen-oncology-page__trust-value {
          color: var(--so-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.35;
        }

        .sesen-oncology-page__trust-label {
          margin-top: 4px;
          color: var(--so-muted);
          font-size: 14px;
          line-height: 1.5;
        }

        /* Complexity */
        .sesen-oncology-page__complexity-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          border-top: 1px solid var(--so-border);
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__complexity-item {
          min-width: 0;
          padding: 32px 28px 34px;
        }

        .sesen-oncology-page__complexity-item + .sesen-oncology-page__complexity-item {
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__complexity-kicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          margin-bottom: 20px;
          border-radius: 12px;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__complexity-item p {
          margin-top: 12px;
        }

        .sesen-oncology-page__biomarker-cloud {
          margin-top: 24px;
          color: var(--so-blue-dark);
          font-size: 14px;
          font-weight: 700;
          line-height: 1.7;
          letter-spacing: .015em;
        }

        /* Lifecycle */
        .sesen-oncology-page__lifecycle {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, minmax(0,1fr));
          gap: 0;
          margin-top: 12px;
        }

        .sesen-oncology-page__lifecycle::before {
          content: "";
          position: absolute;
          top: 22px;
          left: 7.5%;
          right: 7.5%;
          height: 2px;
          background: #CFD9F5;
        }

        .sesen-oncology-page__life-step {
          position: relative;
          min-width: 0;
          padding: 0 14px;
        }

        .sesen-oncology-page__life-dot {
          position: relative;
          z-index: 1;
          display: flex;
          width: 44px;
          height: 44px;
          margin: 0 auto 22px;
          align-items: center;
          justify-content: center;
          border: 7px solid var(--so-blue-pale);
          border-radius: 999px;
          background: var(--so-blue);
          color: white;
          font-size: 13px;
          font-weight: 700;
        }

        .sesen-oncology-page__life-step h3 {
          min-height: 62px;
          text-align: center;
          font-size: 18px;
        }

        .sesen-oncology-page__life-step ul {
          margin: 14px 0 0;
          padding: 0;
          list-style: none;
          text-align: center;
        }

        .sesen-oncology-page__life-step li {
          color: var(--so-muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .sesen-oncology-page__life-step li + li {
          margin-top: 4px;
        }

        /* Content directory */
        .sesen-oncology-page__content-directory {
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__content-row {
          display: grid;
          grid-template-columns: 64px minmax(220px,.7fr) minmax(0,1.3fr);
          gap: 28px;
          align-items: start;
          padding: 36px 0;
          border-bottom: 1px solid var(--so-border);
          min-width: 0;
        }

        .sesen-oncology-page__content-icon {
          display: inline-flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__content-intro {
          min-width: 0;
        }

        .sesen-oncology-page__content-intro p {
          margin-top: 10px;
        }

        .sesen-oncology-page__content-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 10px 22px;
          margin: 0;
          padding: 0;
          list-style: none;
          min-width: 0;
        }

        .sesen-oncology-page__content-list li,
        .sesen-oncology-page__check-list li {
          position: relative;
          min-width: 0;
          padding-left: 20px;
          color: var(--so-body);
          font-size: 16px;
          line-height: 1.55;
          overflow-wrap: anywhere;
        }

        .sesen-oncology-page__content-list li::before,
        .sesen-oncology-page__check-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .68em;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--so-blue);
        }

        /* Precision */
        .sesen-oncology-page__precision-grid {
          display: grid;
          grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr);
          gap: 68px;
          align-items: center;
        }

        .sesen-oncology-page__precision-copy,
        .sesen-oncology-page__precision-visual {
          min-width: 0;
        }

        .sesen-oncology-page__precision-copy > p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__precision-stack {
          margin-top: 34px;
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__precision-item {
          padding: 20px 0;
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__precision-item h3 {
          font-size: 19px;
        }

        .sesen-oncology-page__precision-item p {
          margin-top: 7px;
        }

        .sesen-oncology-page__precision-flow {
          padding: 30px;
          border: 1px solid #D6E0F7;
          border-radius: 28px;
          background: rgba(255,255,255,.74);
        }

        .sesen-oncology-page__precision-flow-header {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--so-divider);
        }

        .sesen-oncology-page__precision-flow-header span {
          color: var(--so-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 22px;
          font-weight: 500;
        }

        .sesen-oncology-page__precision-chain {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 12px;
          margin-top: 24px;
        }

        .sesen-oncology-page__precision-node {
          position: relative;
          min-width: 0;
          min-height: 94px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
          border: 1px solid var(--so-border);
          border-radius: 16px;
          background: #fff;
          color: var(--so-navy);
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .sesen-oncology-page__precision-node--focus {
          border-color: #B9C9F1;
          background: var(--so-blue-soft);
          color: var(--so-blue-deep);
        }

        /* Terminology */
        .sesen-oncology-page__term-grid {
          display: grid;
          grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr);
          gap: 64px;
          align-items: center;
        }

        .sesen-oncology-page__term-copy p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__term-assets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 10px 22px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .sesen-oncology-page__term-assets li {
          position: relative;
          padding-left: 19px;
          font-size: 16px;
        }

        .sesen-oncology-page__term-assets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .68em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--so-blue);
        }

        .sesen-oncology-page__term-map {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0,1fr) 184px minmax(0,1fr);
          gap: 18px;
          align-items: stretch;
          padding: 30px;
          border: 1px solid var(--so-border);
          border-radius: 30px;
          background:
            linear-gradient(90deg, transparent calc(50% - .5px), #E6ECF8 50%, transparent calc(50% + .5px)),
            #fff;
          overflow: hidden;
        }

        .sesen-oncology-page__term-column {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 10px;
          min-width: 0;
        }

        .sesen-oncology-page__term-center-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .sesen-oncology-page__term-center-wrap::before,
        .sesen-oncology-page__term-center-wrap::after {
          content: "";
          position: absolute;
          left: -18px;
          right: -18px;
          height: 1px;
          background: #E6ECF8;
        }

        .sesen-oncology-page__term-center-wrap::before { top: 31%; }
        .sesen-oncology-page__term-center-wrap::after { bottom: 31%; }

        .sesen-oncology-page__term-center {
          position: relative;
          z-index: 3;
          width: 164px;
          min-height: 164px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          border-radius: 50%;
          background: var(--so-navy);
          color: #fff;
          text-align: center;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.35;
          box-shadow: 0 20px 50px rgba(23,38,77,.16);
        }

        .sesen-oncology-page__term-node {
          position: relative;
          z-index: 3;
          min-width: 0;
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border: 1px solid #D9E2F5;
          border-radius: 14px;
          background: #fff;
          color: var(--so-navy);
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.35;
        }

        /* modalities */
        .sesen-oncology-page__modality-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 18px;
        }

        .sesen-oncology-page__modality {
          min-width: 0;
          padding: 28px;
          border: 1px solid var(--so-border);
          border-radius: 22px;
          background: #fff;
        }

        .sesen-oncology-page__modality-icon {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 13px;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__modality p {
          margin-top: 10px;
        }

        .sesen-oncology-page__mrna-feature {
          margin-top: 28px;
          padding: 34px;
          border: 1px solid #CCD8F4;
          border-radius: 26px;
          background: linear-gradient(135deg, #FFFFFF 0%, #F5F7FF 100%);
          min-width: 0;
        }

        .sesen-oncology-page__mrna-feature-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-width: 0;
        }

        .sesen-oncology-page__mrna-feature-head h3 {
          max-width: 780px;
          font-size: 25px;
        }

        .sesen-oncology-page__mrna-icon {
          display: flex;
          width: 58px;
          height: 58px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__mrna-lead {
          max-width: 960px;
          margin-top: 16px !important;
          color: #293954 !important;
          font-size: 18px !important;
        }

        .sesen-oncology-page__mrna-flow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 0;
          margin-top: 28px;
          border-top: 1px solid var(--so-border);
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__mrna-step {
          min-width: 0;
          padding: 24px 22px;
        }

        .sesen-oncology-page__mrna-step + .sesen-oncology-page__mrna-step {
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__mrna-step-num {
          margin-bottom: 8px;
          color: var(--so-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 15px;
          font-weight: 500;
        }

        .sesen-oncology-page__mrna-step strong {
          display: block;
          color: var(--so-navy);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .sesen-oncology-page__mrna-step span {
          display: block;
          margin-top: 7px;
          color: var(--so-body);
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-oncology-page__mrna-bottom {
          max-width: 1040px;
          margin-top: 22px !important;
        }

        .sesen-oncology-page__mrna-bottom strong {
          color: var(--so-navy);
          font-weight: 600;
        }

        /* Trial complexity */
        .sesen-oncology-page__trial-layout {
          display: grid;
          grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr);
          gap: 70px;
          align-items: start;
        }

        .sesen-oncology-page__trial-sticky {
          position: sticky;
          top: 32px;
          min-width: 0;
        }

        .sesen-oncology-page__trial-sticky p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__trial-list {
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__trial-row {
          display: grid;
          grid-template-columns: 42px minmax(0,1fr);
          gap: 22px;
          padding: 26px 0;
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__trial-mark {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__trial-row h3 {
          font-size: 20px;
        }

        .sesen-oncology-page__trial-row p {
          margin-top: 8px;
        }

        /* Patient */
        .sesen-oncology-page__patient-grid {
          display: grid;
          grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr);
          gap: 64px;
          align-items: start;
        }

        .sesen-oncology-page__patient-lead p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__patient-points {
          margin-top: 28px;
          padding: 24px 0 0;
          border-top: 1px solid #D9E2F5;
        }

        .sesen-oncology-page__patient-points strong {
          display: block;
          margin-bottom: 11px;
          color: var(--so-navy);
          font-size: 16px;
        }

        .sesen-oncology-page__patient-keywords {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .sesen-oncology-page__patient-keywords span {
          padding: 6px 10px;
          border: 1px solid #CFD9F5;
          border-radius: 999px;
          background: rgba(255,255,255,.72);
          color: var(--so-body);
          font-size: 13px;
          font-weight: 600;
        }

        .sesen-oncology-page__patient-list {
          border-top: 1px solid #D9E2F5;
        }

        .sesen-oncology-page__patient-item {
          padding: 24px 0;
          border-bottom: 1px solid #D9E2F5;
        }

        .sesen-oncology-page__patient-item h3 {
          font-size: 20px;
        }

        .sesen-oncology-page__patient-item p {
          margin-top: 8px;
        }

        .sesen-oncology-page__outcome-band {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          margin-top: 54px;
          border-top: 1px solid #D9E2F5;
          border-bottom: 1px solid #D9E2F5;
        }

        .sesen-oncology-page__outcome {
          min-width: 0;
          padding: 24px 18px;
          text-align: center;
        }

        .sesen-oncology-page__outcome + .sesen-oncology-page__outcome {
          border-left: 1px solid #D9E2F5;
        }

        .sesen-oncology-page__outcome-code {
          color: var(--so-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 22px;
          font-weight: 500;
        }

        .sesen-oncology-page__outcome-label {
          margin-top: 6px;
          color: var(--so-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        /* COA / eCOA linguistic validation */
        .sesen-oncology-page__coa-grid {
          display: grid;
          grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr);
          gap: 64px;
          align-items: start;
        }

        .sesen-oncology-page__coa-copy p {
          margin-top: 18px;
          font-size: 18px;
        }

        .sesen-oncology-page__coa-process {
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__coa-step {
          display: grid;
          grid-template-columns: 34px minmax(0,1fr);
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid var(--so-border);
          min-width: 0;
        }

        .sesen-oncology-page__coa-step-num {
          color: var(--so-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 15px;
          font-weight: 500;
        }

        .sesen-oncology-page__coa-step strong {
          display: block;
          color: var(--so-navy);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .sesen-oncology-page__coa-step span {
          display: block;
          margin-top: 4px;
          color: var(--so-muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-oncology-page__coa-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 28px;
        }

        .sesen-oncology-page__coa-types {
          margin-top: 48px;
        }

        /* Case study */
        .sesen-oncology-page__case-study {
          display: grid;
          grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr);
          gap: 0;
          overflow: hidden;
          border: 1px solid var(--so-border);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 22px 60px rgba(23,38,77,.08);
        }

        .sesen-oncology-page__case-stat {
          display: flex;
          min-height: 370px;
          flex-direction: column;
          justify-content: space-between;
          padding: 42px;
          background: var(--so-navy);
          color: #fff;
        }

        .sesen-oncology-page__case-stat .sesen-oncology-page__eyebrow {
          color: var(--so-light-on-dark);
        }

        .sesen-oncology-page__case-number {
          color: #fff;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 74px;
          font-weight: 500;
          line-height: 1;
        }

        .sesen-oncology-page__case-stat p {
          max-width: 300px;
          color: #D8E1F7;
          font-size: 17px;
        }

        .sesen-oncology-page__case-copy {
          padding: 42px 48px;
          min-width: 0;
        }

        .sesen-oncology-page__case-copy p {
          margin-top: 15px;
        }

        .sesen-oncology-page__case-process {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 12px;
          margin-top: 26px;
        }

        .sesen-oncology-page__case-process span {
          min-width: 0;
          padding: 12px 13px;
          border-radius: 12px;
          background: var(--so-blue-pale);
          color: var(--so-navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          text-align: center;
        }

        .sesen-oncology-page__case-copy .sesen-oncology-page__arrow-link {
          margin-top: 26px;
        }

        /* Version control */
        .sesen-oncology-page__version-grid {
          display: grid;
          grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr);
          gap: 72px;
          align-items: center;
        }

        .sesen-oncology-page__version-copy p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__version-benefits {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .sesen-oncology-page__version-benefits li {
          display: grid;
          grid-template-columns: 22px minmax(0,1fr);
          gap: 12px;
          padding: 12px 0;
          color: var(--so-body);
          font-size: 16px;
        }

        .sesen-oncology-page__version-benefits svg {
          margin-top: 2px;
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__version-visual {
          position: relative;
          padding: 32px;
          border: 1px solid var(--so-border);
          border-radius: 28px;
          background: #fff;
        }

        .sesen-oncology-page__protocol-card {
          max-width: 330px;
          margin: 0 auto 30px;
          padding: 18px 20px;
          border-radius: 16px;
          background: var(--so-navy);
          color: #fff;
          text-align: center;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 19px;
          font-weight: 500;
        }

        .sesen-oncology-page__version-branches {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
        }

        .sesen-oncology-page__version-branch {
          min-width: 0;
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border: 1px solid #D9E2F5;
          border-radius: 14px;
          background: var(--so-blue-pale);
          color: var(--so-navy);
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
        }

        /* Evidence */
        .sesen-oncology-page__evidence-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          border-top: 1px solid var(--so-border);
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__evidence-col {
          min-width: 0;
          padding: 34px 32px 38px;
        }

        .sesen-oncology-page__evidence-col + .sesen-oncology-page__evidence-col {
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__evidence-col ul,
        .sesen-oncology-page__check-list {
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .sesen-oncology-page__evidence-col li + li,
        .sesen-oncology-page__check-list li + li {
          margin-top: 10px;
        }

        /* Workflow */
        .sesen-oncology-page__section--dark h2,
        .sesen-oncology-page__section--dark h3 {
          color: #fff;
        }

        .sesen-oncology-page__section--dark p {
          color: #D8E1F7;
        }

        .sesen-oncology-page__workflow-intro {
          display: grid;
          grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr);
          gap: 60px;
          align-items: end;
          margin-bottom: 54px;
        }

        .sesen-oncology-page__workflow-intro p {
          font-size: 18px;
        }

        .sesen-oncology-page__workflow {
          border-top: 1px solid rgba(255,255,255,.16);
        }

        .sesen-oncology-page__workflow-row {
          display: grid;
          grid-template-columns: 72px minmax(230px,.62fr) minmax(0,1.38fr);
          gap: 30px;
          padding: 27px 0;
          border-bottom: 1px solid rgba(255,255,255,.16);
          min-width: 0;
        }

        .sesen-oncology-page__workflow-num {
          color: var(--so-light-on-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 24px;
          font-weight: 500;
        }

        .sesen-oncology-page__workflow-row h3 {
          font-size: 20px;
        }

        .sesen-oncology-page__workflow-row p {
          font-size: 16px;
        }

        .sesen-oncology-page__tech-human {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
          margin-top: 44px;
        }

        .sesen-oncology-page__tech-human-panel {
          min-width: 0;
          padding: 28px;
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 22px;
          background: rgba(255,255,255,.045);
        }

        .sesen-oncology-page__tech-human-panel ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 9px 22px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .sesen-oncology-page__tech-human-panel li {
          position: relative;
          padding-left: 17px;
          color: #D8E1F7;
          font-size: 16px;
          line-height: 1.5;
        }

        .sesen-oncology-page__tech-human-panel li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .67em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--so-light-on-dark);
        }

        /* Expertise + global */
        .sesen-oncology-page__cancer-layout {
          display: grid;
          grid-template-columns: minmax(0,.75fr) minmax(0,1.25fr);
          gap: 64px;
          align-items: start;
        }

        .sesen-oncology-page__cancer-copy p {
          margin-top: 20px;
          font-size: 18px;
        }

        .sesen-oncology-page__cancer-list {
          columns: 2;
          column-gap: 32px;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__cancer-list li {
          break-inside: avoid;
          padding: 13px 0 13px 20px;
          border-bottom: 1px solid var(--so-border);
          position: relative;
          color: var(--so-body);
          font-size: 16px;
        }

        .sesen-oncology-page__cancer-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 1.08em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--so-blue);
        }

        .sesen-oncology-page__region-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0,1fr));
          border-top: 1px solid var(--so-border);
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__region {
          min-width: 0;
          padding: 28px 24px;
        }

        .sesen-oncology-page__region + .sesen-oncology-page__region {
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__region h3 {
          font-size: 18px;
        }

        .sesen-oncology-page__region p {
          margin-top: 9px;
          color: var(--so-muted);
          font-size: 16px;
        }

        .sesen-oncology-page__why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          border-top: 1px solid var(--so-border);
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__why-item {
          min-width: 0;
          padding: 28px;
          border-right: 1px solid var(--so-border);
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__why-item h3 {
          font-size: 20px;
        }

        .sesen-oncology-page__why-item p {
          margin-top: 9px;
        }

        /* Related */
        .sesen-oncology-page__related {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page__related-item {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: 20px;
          align-items: center;
          min-width: 0;
          padding: 25px 20px 25px 0;
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page__related-item:nth-child(odd) {
          padding-right: 34px;
        }

        .sesen-oncology-page__related-item:nth-child(even) {
          padding-left: 34px;
          border-left: 1px solid var(--so-border);
        }

        .sesen-oncology-page__related-item h3 {
          font-size: 19px;
        }

        .sesen-oncology-page__related-item p {
          margin-top: 6px;
          color: var(--so-muted);
          font-size: 16px;
        }

        .sesen-oncology-page__related-go {
          display: flex;
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--so-blue-soft);
          color: var(--so-blue-dark);
        }

        .sesen-oncology-page__related-item:hover h3 {
          color: var(--so-blue-dark);
        }

        /* FAQ */
        .sesen-oncology-page__faq {
          max-width: 900px;
          margin: 0 auto;
          border-top: 1px solid var(--so-border);
        }

        .sesen-oncology-page details {
          border-bottom: 1px solid var(--so-border);
        }

        .sesen-oncology-page details summary {
          position: relative;
          display: flex;
          min-height: 74px;
          align-items: center;
          padding: 22px 52px 22px 0;
          color: var(--so-navy);
          cursor: pointer;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.4;
          list-style: none;
        }

        .sesen-oncology-page details summary::-webkit-details-marker {
          display: none;
        }

        .sesen-oncology-page details summary::before,
        .sesen-oncology-page details summary::after {
          content: "";
          position: absolute;
          right: 6px;
          top: 50%;
          width: 18px;
          height: 1.5px;
          background: var(--so-blue-dark);
          transform: translateY(-50%);
        }

        .sesen-oncology-page details summary::after {
          transform: translateY(-50%) rotate(90deg);
          transition: transform .15s ease;
        }

        .sesen-oncology-page details[open] summary::after {
          transform: translateY(-50%) rotate(0deg);
        }

        .sesen-oncology-page__faq-answer {
          max-width: 820px;
          padding: 0 52px 26px 0;
        }

        .sesen-oncology-page__faq-answer p {
          font-size: 16px;
        }

        /* Closing CTA */
        .sesen-oncology-page__closing-cta-wrap {
          padding: 0 0 96px;
          background: #fff;
        }

        .sesen-oncology-page__closing-cta {
          display: grid;
          grid-template-columns: minmax(0,1.3fr) auto;
          gap: 44px;
          align-items: center;
          padding: 54px 58px;
          border-radius: 30px;
          background: linear-gradient(120deg, var(--so-navy), var(--so-blue-deep));
          overflow: hidden;
        }

        .sesen-oncology-page__closing-cta h2 {
          color: #fff;
          max-width: 760px;
        }

        .sesen-oncology-page__closing-cta p {
          max-width: 780px;
          margin-top: 16px;
          color: #D8E1F7;
          font-size: 17px;
        }

        .sesen-oncology-page__closing-actions {
          display: flex;
          flex-direction: column;
          gap: 11px;
          min-width: 215px;
        }

        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--primary,
        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--primary:visited,
        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--primary:hover,
        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--primary:focus-visible {
          color: #fff;
        }

        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--secondary,
        .sesen-oncology-page__closing-actions a.sesen-oncology-page__btn--secondary:visited {
          background: #fff;
          color: var(--so-ink);
          border-color: #fff;
        }

        @media (max-width: 1140px) {
          .sesen-oncology-page__shell { padding-inline: 40px; }
          .sesen-oncology-page__hero-grid { grid-template-columns: minmax(0,1.05fr) minmax(340px,.95fr); gap: 42px; }
          .sesen-oncology-page__complexity-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__complexity-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--so-border); }
          .sesen-oncology-page__complexity-item:nth-child(4) { border-top: 1px solid var(--so-border); }
          .sesen-oncology-page__lifecycle { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 32px 0; }
          .sesen-oncology-page__lifecycle::before { display:none; }
          .sesen-oncology-page__life-step h3 { min-height: auto; }
          .sesen-oncology-page__modality-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__mrna-flow { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__mrna-step:nth-child(3) { border-left:0; border-top:1px solid var(--so-border); }
          .sesen-oncology-page__mrna-step:nth-child(4) { border-top:1px solid var(--so-border); }
          .sesen-oncology-page__region-grid {
            grid-template-columns: repeat(3,minmax(0,1fr));
            border: 0;
            border-top: 1px solid var(--so-border);
            border-left: 1px solid var(--so-border);
          }
          .sesen-oncology-page__region,
          .sesen-oncology-page__region + .sesen-oncology-page__region,
          .sesen-oncology-page__region:nth-child(4),
          .sesen-oncology-page__region:nth-child(5) {
            border-left: 0;
            border-top: 0;
            border-right: 1px solid var(--so-border);
            border-bottom: 1px solid var(--so-border);
          }
          .sesen-oncology-page__trust-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
          .sesen-oncology-page__trust-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--so-divider); }
          .sesen-oncology-page__trust-item:nth-child(5) { border-top: 1px solid var(--so-divider); }
        }

        @media (max-width: 900px) {
          .sesen-oncology-page__shell { padding-inline: 30px; }
          .sesen-oncology-page__section { padding-block: 82px; }
          .sesen-oncology-page__section--dense { padding-block: 72px; }
          .sesen-oncology-page__hero { padding-block: 76px 74px; }
          .sesen-oncology-page__hero-grid,
          .sesen-oncology-page__precision-grid,
          .sesen-oncology-page__term-grid,
          .sesen-oncology-page__trial-layout,
          .sesen-oncology-page__patient-grid,
          .sesen-oncology-page__coa-grid,
          .sesen-oncology-page__version-grid,
          .sesen-oncology-page__cancer-layout,
          .sesen-oncology-page__workflow-intro {
            grid-template-columns: minmax(0,1fr);
          }
          .sesen-oncology-page__hero-copy .sesen-oncology-page__eyebrow,
          .sesen-oncology-page__hero-copy h1 { text-align: center; }
          .sesen-oncology-page__hero-actions { justify-content: center; }
          .sesen-oncology-page__hero-art { margin-top: 14px; justify-content:center; }
          .sesen-oncology-page__hero-art svg { width: min(100%, 540px); }
          .sesen-oncology-page__content-row { grid-template-columns: 54px minmax(0,1fr); }
          .sesen-oncology-page__content-list { grid-column: 2; }
          .sesen-oncology-page__trial-sticky { position: static; }
          .sesen-oncology-page__outcome-band { grid-template-columns: repeat(3,minmax(0,1fr)); }
          .sesen-oncology-page__outcome:nth-child(4) { border-left: 0; border-top: 1px solid #D9E2F5; }
          .sesen-oncology-page__outcome:nth-child(5) { border-top: 1px solid #D9E2F5; }
          .sesen-oncology-page__case-study { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__case-stat { min-height: 280px; }
          .sesen-oncology-page__evidence-grid { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__evidence-col + .sesen-oncology-page__evidence-col { border-left:0; border-top:1px solid var(--so-border); }
          .sesen-oncology-page__why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__related { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__related-item:nth-child(odd),
          .sesen-oncology-page__related-item:nth-child(even) { padding-inline: 0; border-left: 0; }
          .sesen-oncology-page__closing-cta { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__closing-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 768px) {
          .sesen-oncology-page__shell { padding-inline: 28px; }
          .sesen-oncology-page h1 { font-size: 42px; }
          .sesen-oncology-page h2 { font-size: 32px; }
          .sesen-oncology-page__section-heading--center { text-align:center; }
          .sesen-oncology-page__section-heading--mobile-left { text-align:left; margin-left:0; margin-right:0; }
          .sesen-oncology-page__mobile-center-heading > .sesen-oncology-page__eyebrow,
          .sesen-oncology-page__mobile-center-heading > h2 { text-align:center; }
          .sesen-oncology-page__closing-cta h2 { text-align:center; }
          .sesen-oncology-page__lifecycle { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__precision-chain { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__term-map { grid-template-columns: minmax(0,1fr) 160px minmax(0,1fr); padding:24px; gap:14px; }
          .sesen-oncology-page__term-center { width:150px; min-height:150px; font-size:18px; }
          .sesen-oncology-page__modality-grid { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__mrna-feature-head { align-items:flex-start; }
          .sesen-oncology-page__mrna-feature-head > div:first-child { flex:1; min-width:0; }
          .sesen-oncology-page__mrna-feature-head .sesen-oncology-page__eyebrow,
          .sesen-oncology-page__mrna-feature-head h3 { text-align:center; }
          .sesen-oncology-page__mrna-flow { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__mrna-step + .sesen-oncology-page__mrna-step,
          .sesen-oncology-page__mrna-step:nth-child(3),
          .sesen-oncology-page__mrna-step:nth-child(4) { border-left:0; border-top:1px solid var(--so-border); }
          .sesen-oncology-page__case-process { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__region-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-oncology-page__why-grid { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__workflow-row { grid-template-columns: 54px minmax(0,1fr); gap: 18px; }
          .sesen-oncology-page__workflow-row p { grid-column: 2; }
          .sesen-oncology-page__tech-human { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__closing-cta { padding: 46px 38px; }
        }

        @media (max-width: 560px) {
          .sesen-oncology-page__shell { padding-inline: 20px; }
          .sesen-oncology-page__section { padding-block: 68px; }
          .sesen-oncology-page__section--dense { padding-block: 64px; }
          .sesen-oncology-page__hero { padding-block: 68px 62px; }
          .sesen-oncology-page h1 { font-size: 42px; }
          .sesen-oncology-page h2 { font-size: 32px; }
          .sesen-oncology-page h3 { font-size: 21px; }
          .sesen-oncology-page__hero-lead { font-size: 18px !important; text-align: left; }
          .sesen-oncology-page__hero-support { text-align: left; }
          .sesen-oncology-page__hero-actions { flex-direction: column; }
          .sesen-oncology-page__hero-actions .sesen-oncology-page__btn { width: 100%; }
          .sesen-oncology-page__trust-grid { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__trust-item + .sesen-oncology-page__trust-item,
          .sesen-oncology-page__trust-item:nth-child(4),
          .sesen-oncology-page__trust-item:nth-child(5) { border-left:0; border-top:1px solid var(--so-divider); }
          .sesen-oncology-page__trust-item { padding: 20px 0; }
          .sesen-oncology-page__complexity-grid { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__complexity-item + .sesen-oncology-page__complexity-item,
          .sesen-oncology-page__complexity-item:nth-child(3),
          .sesen-oncology-page__complexity-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--so-border); }
          .sesen-oncology-page__complexity-item { padding-inline: 0; }
          .sesen-oncology-page__lifecycle { grid-template-columns: minmax(0,1fr); gap: 0; border-left:2px solid #CFD9F5; margin-left: 20px; }
          .sesen-oncology-page__life-step { display:grid; grid-template-columns: 52px minmax(0,1fr); padding: 0 0 28px; margin-left:-23px; }
          .sesen-oncology-page__life-dot { margin:0; }
          .sesen-oncology-page__life-step h3 { text-align:left; padding:7px 0 0 14px; }
          .sesen-oncology-page__life-step ul { grid-column:2; text-align:left; padding-left:14px; }
          .sesen-oncology-page__content-row { grid-template-columns: 44px minmax(0,1fr); gap: 18px; }
          .sesen-oncology-page__content-icon { width:42px; height:42px; }
          .sesen-oncology-page__content-list { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__precision-flow { padding: 22px 18px; }
          .sesen-oncology-page__mrna-feature { padding:26px 20px; border-radius:22px; }
          .sesen-oncology-page__mrna-feature-head { flex-direction:column; align-items:center; gap:16px; }
          .sesen-oncology-page__mrna-feature-head h3 { font-size:22px; }
          .sesen-oncology-page__mrna-icon { width:52px; height:52px; }
          .sesen-oncology-page__mrna-step { padding:20px 4px; }
          .sesen-oncology-page__precision-chain { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__term-assets { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__term-map { grid-template-columns:minmax(0,1fr); gap:10px; padding:20px; background:#fff; }
          .sesen-oncology-page__term-center-wrap { grid-row:1; }
          .sesen-oncology-page__term-center-wrap::before,
          .sesen-oncology-page__term-center-wrap::after { display:none; }
          .sesen-oncology-page__term-center { width:100%; min-height:0; border-radius:18px; padding:18px 22px; }
          .sesen-oncology-page__term-column { gap:8px; }
          .sesen-oncology-page__term-node { min-height:0; }
          .sesen-oncology-page__trial-row { grid-template-columns: 38px minmax(0,1fr); gap:16px; }
          .sesen-oncology-page__outcome-band { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__outcome + .sesen-oncology-page__outcome,
          .sesen-oncology-page__outcome:nth-child(4),
          .sesen-oncology-page__outcome:nth-child(5) { border-left:0; border-top:1px solid #D9E2F5; }
          .sesen-oncology-page__case-stat,
          .sesen-oncology-page__case-copy { padding: 32px 26px; }
          .sesen-oncology-page__case-number { font-size: 60px; }
          .sesen-oncology-page__case-process { grid-template-columns: minmax(0,1fr); }
          .sesen-oncology-page__version-visual { padding:22px 18px; }
          .sesen-oncology-page__version-branches { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__workflow-row { grid-template-columns: 42px minmax(0,1fr); }
          .sesen-oncology-page__tech-human-panel ul { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__cancer-list { columns:1; }
          .sesen-oncology-page__region-grid { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__region { padding-inline:18px; }
          .sesen-oncology-page__related-item { grid-template-columns:minmax(0,1fr) 38px; gap:12px; }
          .sesen-oncology-page details summary { padding-right:40px; }
          .sesen-oncology-page__faq-answer { padding-right:0; }
          .sesen-oncology-page__closing-cta-wrap { padding-bottom:68px; }
          .sesen-oncology-page__closing-cta { padding:38px 24px; border-radius:24px; }
          .sesen-oncology-page__closing-actions { flex-direction:column; }
          .sesen-oncology-page__closing-actions .sesen-oncology-page__btn { width:100%; }
        }

        @media (max-width: 360px) {
          .sesen-oncology-page h1 { font-size: 38px; }
          .sesen-oncology-page h2 { font-size: 30px; }
          .sesen-oncology-page__hero-actions .sesen-oncology-page__btn { padding-inline: 18px; }
          .sesen-oncology-page__content-row { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__content-list { grid-column:1; }
          .sesen-oncology-page__content-icon { margin-bottom:-4px; }
          .sesen-oncology-page__workflow-row { grid-template-columns:minmax(0,1fr); }
          .sesen-oncology-page__workflow-row p { grid-column:1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-oncology-page__btn,
          .sesen-oncology-page__arrow-link svg,
          .sesen-oncology-page details summary::after { transition: none; }
          .sesen-oncology-page__btn:hover { transform:none; }
        }
      `}</style>

      <section className="sesen-oncology-page__hero" aria-labelledby="oncology-hero-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__hero-grid">
          <div className="sesen-oncology-page__hero-copy">
            <div className="sesen-oncology-page__eyebrow">Oncology Language Solutions</div>
            <h1 id="oncology-hero-title">Oncology Translation Services for Global Drug Development</h1>
            <p className="sesen-oncology-page__hero-lead">
              Advance global oncology programs—from biomarker-driven clinical trials and precision therapeutics to increasingly individualized treatment approaches—with specialized translation and localization for clinical research, regulatory submissions, patient-facing content, safety communication, medical affairs, and the evolving science of cancer care.
            </p>
            <p className="sesen-oncology-page__hero-support">
              Sesen combines professional life sciences linguists, oncology terminology management, structured human review, secure workflows, and advanced language technology to help pharmaceutical companies, biotechnology organizations, CROs, and clinical teams communicate complex oncology information accurately across languages and markets.
            </p>
            <div className="sesen-oncology-page__hero-actions">
              <a className="sesen-oncology-page__btn sesen-oncology-page__btn--primary" href={internalLinks.quote}>REQUEST A QUOTE <Icon name="arrow" size={17} /></a>
              <a className="sesen-oncology-page__btn sesen-oncology-page__btn--secondary" href={internalLinks.sales}>TALK WITH TEAM SESEN</a>
            </div>
          </div>

          <div className="sesen-oncology-page__hero-art" aria-hidden="true">
            <svg viewBox="0 0 520 430" role="img">
              <defs>
                <linearGradient id="oncologySoft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#F5F7FF" />
                  <stop offset="1" stopColor="#EAF0FF" />
                </linearGradient>
              </defs>
              <circle cx="282" cy="210" r="174" fill="url(#oncologySoft)" />
              <circle cx="282" cy="210" r="130" fill="#fff" stroke="#DDE4F2" strokeWidth="1.5" />
              <path d="M282 82v256M154 210h256" stroke="#E3E9F6" strokeWidth="1.2" strokeDasharray="5 8" />
              <path d="M200 165c27-47 99-55 137-13 34 37 28 103-13 132-35 25-87 20-117-10-28-29-31-76-7-109Z" fill="#F7F9FD" stroke="#253F8F" strokeWidth="2.1" />
              <circle cx="250" cy="195" r="15" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
              <circle cx="312" cy="185" r="11" fill="#F5F7FF" stroke="#3659BB" strokeWidth="1.8" />
              <circle cx="295" cy="245" r="18" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
              <circle cx="233" cy="250" r="9" fill="#fff" stroke="#6F8BE1" strokeWidth="1.8" />
              <path d="M250 195c17 12 32 19 45 50M312 185c-7 19-11 34-17 60M250 195c-6 23-11 37-17 55" stroke="#6F8BE1" strokeWidth="1.7" />
              <path d="M116 128c45 2 69 21 92 55M408 118c-42 3-68 20-90 54M109 292c45-5 72-21 101-55M410 300c-46-7-70-25-94-56" stroke="#B8C7EC" strokeWidth="1.6" />
              <circle cx="100" cy="126" r="34" fill="#fff" stroke="#D4DEF3" />
              <path d="M85 126h30M100 111v30" stroke="#3659BB" strokeWidth="2" />
              <circle cx="422" cy="113" r="34" fill="#fff" stroke="#D4DEF3" />
              <path d="M408 120c10-19 24-19 28 0M409 107h26" stroke="#3659BB" strokeWidth="2" fill="none" />
              <circle cx="95" cy="303" r="34" fill="#fff" stroke="#D4DEF3" />
              <path d="M82 304h26M87 296h16M87 312h16" stroke="#3659BB" strokeWidth="2" />
              <circle cx="422" cy="307" r="34" fill="#fff" stroke="#D4DEF3" />
              <path d="M412 319V294l9-6 10 6v25M417 302h9M421 298v9" stroke="#3659BB" strokeWidth="2" fill="none" />
              <rect x="227" y="57" width="110" height="38" rx="19" fill="#17264D" />
              <text x="282" y="81" textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700">PRECISION ONCOLOGY</text>
              <rect x="212" y="338" width="140" height="38" rx="19" fill="#4B6FD8" />
              <text x="282" y="362" textAnchor="middle" fill="#fff" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700">GLOBAL PROGRAM</text>
            </svg>
          </div>
        </div>
      </section>

      <div className="sesen-oncology-page__trust-band" aria-label="Oncology translation capabilities">
        <div className="sesen-oncology-page__shell sesen-oncology-page__trust-grid">
          {[
            ["150+ Languages", "Global multilingual support"],
            ["ISO-Certified Quality", "ISO 17100 · ISO 9001 · ISO 13485"],
            ["Life Sciences Expertise", "Professional medical and scientific linguists"],
            ["Terminology Control", "Across studies, documents, and versions"],
            ["Secure Workflows", "For sensitive clinical and regulatory content"],
          ].map(([value, label]) => (
            <div className="sesen-oncology-page__trust-item" key={value}>
              <div className="sesen-oncology-page__trust-value">{value}</div>
              <div className="sesen-oncology-page__trust-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="sesen-oncology-page__section" aria-labelledby="oncology-complexity-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="oncology-complexity-title"
            title="Oncology Language Is as Complex as Oncology Science"
            intro="Cancer research and treatment are becoming increasingly precise. The language surrounding that science must remain equally precise across scientific, clinical, regulatory, and patient-facing content."
          />
          <div className="sesen-oncology-page__complexity-grid">
            <article className="sesen-oncology-page__complexity-item">
              <div className="sesen-oncology-page__complexity-kicker"><Icon name="target" /></div>
              <h3>Precision & Biomarker Complexity</h3>
              <p>Cancer populations may be defined by molecular characteristics rather than only tumor location. Terminology can influence patient selection, study design, treatment strategy, clinical interpretation, and regulatory evidence.</p>
              <div className="sesen-oncology-page__biomarker-cloud">EGFR · HER2 · KRAS · BRAF · ALK · BRCA · PD-L1 · ctDNA · neoantigens</div>
            </article>
            <article className="sesen-oncology-page__complexity-item">
              <div className="sesen-oncology-page__complexity-kicker"><Icon name="rna" /></div>
              <h3>Rapidly Evolving Therapies</h3>
              <p>Oncology now includes targeted therapies, immuno-oncology, ADCs, bispecific antibodies, cellular therapies, gene-based approaches, radiopharmaceuticals, and personalized mRNA and neoantigen therapies alongside other emerging modalities.</p>
            </article>
            <article className="sesen-oncology-page__complexity-item">
              <div className="sesen-oncology-page__complexity-kicker"><Icon name="clinical" /></div>
              <h3>Complex Clinical Trial Designs</h3>
              <p>Basket, umbrella, platform, multi-cohort, biomarker-defined, and adaptive study structures create interconnected content, endpoints, versions, and country-specific requirements.</p>
            </article>
            <article className="sesen-oncology-page__complexity-item">
              <div className="sesen-oncology-page__complexity-kicker"><Icon name="patient" /></div>
              <h3>Multiple Critical Audiences</h3>
              <p>Scientists, regulators, investigators, ethics committees, study sites, patients, caregivers, and medical professionals need the same science communicated appropriately for very different purposes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--blue-soft" aria-labelledby="oncology-lifecycle-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="oncology-lifecycle-title"
            title="Multilingual Support Across the Oncology Development Lifecycle"
            intro="Scientific concepts and approved language move through an interconnected lifecycle—from research and clinical study design to regulatory submission, patient communication, launch, and post-approval activities."
            className="sesen-oncology-page__section-heading--mobile-left"
          />
          <div className="sesen-oncology-page__lifecycle">
            {lifecycle.map((stage, index) => (
              <div className="sesen-oncology-page__life-step" key={stage.title}>
                <div className="sesen-oncology-page__life-dot">{String(index + 1).padStart(2, "0")}</div>
                <h3>{stage.title}</h3>
                <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="oncology-content-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="oncology-content-title"
            title="One Oncology Program. An Interconnected Multilingual Content Ecosystem."
            intro="A biomarker, endpoint, dose description, or safety concept may recur across many documents and audiences. Sesen helps oncology teams manage these relationships with specialized translation, terminology governance, translation memory, reference management, and structured review."
            align="left"
          />
          <div className="sesen-oncology-page__content-directory">
            {contentGroups.map((group) => (
              <article className="sesen-oncology-page__content-row" key={group.title}>
                <div className="sesen-oncology-page__content-icon"><Icon name={group.icon} /></div>
                <div className="sesen-oncology-page__content-intro">
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
                <ul className="sesen-oncology-page__content-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--blue-soft" aria-labelledby="precision-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__precision-grid">
          <div className="sesen-oncology-page__precision-copy sesen-oncology-page__mobile-center-heading">
            <h2 id="precision-title">Precision Oncology Requires Precision Language</h2>
            <p>Modern oncology increasingly connects molecular information with clinical decisions. A genomic alteration may help define a study population, a biomarker may determine eligibility, and a molecular target may shape an investigational treatment strategy. Those concepts can then recur across study documentation, patient communication, data collection, regulatory evidence, and approved product information.</p>
            <div className="sesen-oncology-page__precision-stack">
              {precisionItems.map((item) => (
                <div className="sesen-oncology-page__precision-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="sesen-oncology-page__precision-visual">
            <div className="sesen-oncology-page__precision-flow">
              <div className="sesen-oncology-page__precision-flow-header">
                <Icon name="target" size={28} />
                <span>From Tumor Biology to Product Information</span>
              </div>
              <div className="sesen-oncology-page__precision-chain">
                {[
                  "Tumor Biology",
                  "Biomarker & Genomic Profile",
                  "Patient Population",
                  "Investigational Therapy",
                  "Protocol & Clinical Endpoints",
                  "Patient-Facing Content",
                  "Clinical Evidence",
                  "Regulatory Submission",
                  "Product Information",
                ].map((item, i) => (
                  <div className={`sesen-oncology-page__precision-node ${[1,4,7].includes(i) ? "sesen-oncology-page__precision-node--focus" : ""}`} key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="terminology-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__term-grid">
          <div className="sesen-oncology-page__term-copy sesen-oncology-page__mobile-center-heading">
            <div className="sesen-oncology-page__eyebrow">Terminology Governance</div>
            <h2 id="terminology-title">One Source of Oncology Terminology Across the Program</h2>
            <p>In oncology development, terminology is infrastructure. A key term introduced during protocol development can reappear across dozens of documents, systems, languages, and study stages. When terminology changes—or when a preferred translation is approved—that decision may affect multiple downstream assets.</p>
            <ul className="sesen-oncology-page__term-assets">
              {[
                "Sponsor-approved terminology",
                "Study-specific glossaries",
                "Product and compound naming",
                "Biomarker terminology",
                "Disease and indication terminology",
                "Clinical endpoint terminology",
                "Translation memories",
                "Previous approved translations",
                "Style guidance",
                "Reference content",
                "Language-specific decisions",
                "Terminology QA checks",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="sesen-oncology-page__term-map" aria-label="Controlled oncology terminology connects the program">
            <div className="sesen-oncology-page__term-column">
              {terminologyNodes.slice(0, 5).map((item) => <div className="sesen-oncology-page__term-node" key={item}>{item}</div>)}
            </div>
            <div className="sesen-oncology-page__term-center-wrap">
              <div className="sesen-oncology-page__term-center">Controlled Oncology Terminology</div>
            </div>
            <div className="sesen-oncology-page__term-column">
              {terminologyNodes.slice(5).map((item) => <div className="sesen-oncology-page__term-node" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--soft" aria-labelledby="modalities-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="modalities-title"
            title="Language Expertise for a Rapidly Evolving Oncology Landscape"
            intro="From established systemic treatments to highly targeted and individualized approaches, cancer therapeutics continue to diversify—bringing new scientific concepts, mechanisms, diagnostics, manufacturing models, patient pathways, and development strategies into oncology communication."
          />
          <div className="sesen-oncology-page__modality-grid">
            {modalities.map((item) => (
              <article className="sesen-oncology-page__modality" key={item.title}>
                <div className="sesen-oncology-page__modality-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-oncology-page__mrna-feature">
            <div className="sesen-oncology-page__mrna-feature-head">
              <div>
                <div className="sesen-oncology-page__eyebrow">Personalized mRNA Oncology</div>
                <h3>Sequence-Driven Cancer Therapies Create a New Multilingual Content Chain</h3>
              </div>
              <div className="sesen-oncology-page__mrna-icon"><Icon name="rna" size={34} /></div>
            </div>
            <p className="sesen-oncology-page__mrna-lead">Personalized mRNA cancer vaccines have reached Phase 3 oncology development, increasing the need for language workflows that can connect patient-specific genomic information with individualized therapeutic design, manufacturing, clinical operations, patient communication, and regulatory evidence. The field also illustrates a broader shift toward programmable, information-driven therapeutics, where biological sequence data increasingly becomes part of treatment design itself.</p>
            <div className="sesen-oncology-page__mrna-flow">
              {mrnaProgramFlow.map(([num,title,text]) => (
                <div className="sesen-oncology-page__mrna-step" key={num}>
                  <div className="sesen-oncology-page__mrna-step-num">{num}</div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <p className="sesen-oncology-page__mrna-bottom"><strong>For multilingual teams, the challenge is not simply translating “mRNA.”</strong> It is maintaining controlled terminology across tumor-specific mutations, neoantigens, assays, manufacturing, dosing, informed consent, safety, outcomes, and regulatory documentation as one individualized oncology program moves across languages and markets.</p>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="trials-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__trial-layout">
          <div className="sesen-oncology-page__trial-sticky">
            <h2 id="trials-title">Built for the Complexity of Global Oncology Clinical Trials</h2>
            <p>Cancer clinical trials can be among the most operationally and linguistically demanding studies to manage globally. Sesen's oncology clinical trial translation services are designed around the realities of modern study execution.</p>
            <div style={{ marginTop: 28 }}><ArrowLink href={internalLinks.clinicalTrials}>Explore Clinical Trial Translation Services</ArrowLink></div>
          </div>
          <div className="sesen-oncology-page__trial-list">
            {trialComplexities.map((item) => (
              <article className="sesen-oncology-page__trial-row" key={item.title}>
                <div className="sesen-oncology-page__trial-mark"><Icon name="check" size={20} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--blue-soft" aria-labelledby="patient-title">
        <div className="sesen-oncology-page__shell">
          <div className="sesen-oncology-page__patient-grid">
            <div className="sesen-oncology-page__patient-lead sesen-oncology-page__mobile-center-heading">
              <div className="sesen-oncology-page__eyebrow">Patient Experience</div>
              <h2 id="patient-title">Preserving Scientific Accuracy While Communicating Clearly with Patients</h2>
              <p>For patients considering or participating in oncology clinical trials, language is part of the study experience. They may need to understand an unfamiliar diagnosis, investigational treatment, biomarker test, randomization, biopsy, treatment schedule, possible adverse effects, symptom assessment, and the implications of participation.</p>
              <p>Scientific accuracy remains essential—but accuracy alone is not enough. Sesen helps oncology teams communicate complex medical information in language appropriate for patients and participants while preserving the meaning of the source.</p>
              <div className="sesen-oncology-page__patient-points">
                <strong>Common patient communication concepts</strong>
                <div className="sesen-oncology-page__patient-keywords">
                  {["Treatment options", "Biomarker testing", "Biopsies", "Dose schedules", "Adverse events", "Quality of life", "Genetic information", "Participation choices"].map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
            <div className="sesen-oncology-page__patient-list">
              {patientItems.map((item) => (
                <article className="sesen-oncology-page__patient-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--dense" aria-labelledby="coa-title">
        <div className="sesen-oncology-page__shell">
          <div className="sesen-oncology-page__coa-grid">
            <div className="sesen-oncology-page__coa-copy">
              <div className="sesen-oncology-page__eyebrow">Clinical Outcomes</div>
              <h2 id="coa-title">Oncology COA &amp; eCOA Linguistic Validation</h2>
              <p>Patient-facing outcome measures require more than word-for-word translation. Multilingual COA and eCOA content must preserve the intended clinical concept while remaining understandable, culturally appropriate, and consistent for the target respondent population.</p>
              <p>Sesen supports structured linguistic validation for oncology outcome assessments, patient questionnaires, symptom scales, quality-of-life measures, diaries, and digital instruments used in global clinical trials.</p>
              <div className="sesen-oncology-page__coa-actions">
                <ArrowLink href={internalLinks.linguisticValidation}>Explore Linguistic Validation Services</ArrowLink>
                <ArrowLink href={internalLinks.ecoa}>Explore eCOA Translation Services</ArrowLink>
              </div>
            </div>
            <div className="sesen-oncology-page__coa-process" aria-label="Representative oncology linguistic validation workflow">
              {[
                ["01", "Source & Concept Review", "Clarify instrument concepts, response scales, instructions, study context, and terminology before multilingual adaptation."],
                ["02", "Forward Translation & Reconciliation", "Develop and reconcile target-language wording around conceptual meaning, patient comprehension, and cultural appropriateness."],
                ["03", "Back Translation & Review", "Compare the reconciled meaning with the source and resolve potential concept shifts or ambiguity."],
                ["04", "Cognitive Debriefing Support", "Evaluate patient understanding when respondent testing is required for the instrument and study."],
                ["05", "Harmonization & Final Documentation", "Align multilingual decisions, proofread final content, and prepare documented deliverables for study use."],
              ].map(([num,title,text]) => (
                <div className="sesen-oncology-page__coa-step" key={num}>
                  <div className="sesen-oncology-page__coa-step-num">{num}</div>
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="sesen-oncology-page__outcome-band sesen-oncology-page__coa-types" aria-label="Clinical outcome assessment types">
            {outcomeTypes.map(([code,label]) => (
              <div className="sesen-oncology-page__outcome" key={code}>
                <div className="sesen-oncology-page__outcome-code">{code}</div>
                <div className="sesen-oncology-page__outcome-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="case-title">
        <div className="sesen-oncology-page__shell">
          <div className="sesen-oncology-page__case-study">
            <div className="sesen-oncology-page__case-stat">
              <div>
                <div className="sesen-oncology-page__eyebrow">Clinical Program Experience</div>
                <div className="sesen-oncology-page__case-number">25</div>
                <p>target languages supported for a global oncology Clinical Outcome Assessment linguistic validation program.</p>
              </div>
              <div style={{ color: "#C8D6FF", fontSize: 14, fontWeight: 700 }}>GLOBAL CRO · ONCOLOGY CLINICAL TRIAL</div>
            </div>
            <div className="sesen-oncology-page__case-copy">
              <h2 id="case-title">Global Oncology Linguistic Validation in 25 Languages</h2>
              <p>A global CRO engaged Sesen to support linguistic validation of a Clinical Outcome Assessment for an oncology clinical trial across 25 target languages.</p>
              <p>Because the instrument collected patient-facing outcome data, standard translation alone was not sufficient. Each language version needed to preserve the intended clinical concepts, remain understandable to patients, support cultural appropriateness, and maintain cross-language consistency.</p>
              <p>Sesen applied a structured linguistic validation workflow incorporating source review, professional life sciences translation, reconciliation, back translation, documented review, and terminology control.</p>
              <div className="sesen-oncology-page__case-process">
                {["Source review", "Forward translation", "Reconciliation", "Back translation", "Documented review", "Terminology control"].map((item) => <span key={item}>{item}</span>)}
              </div>
              <ArrowLink href={internalLinks.caseStudy}>Explore the Oncology COA Case Study</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--soft" aria-labelledby="version-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__version-grid">
          <div className="sesen-oncology-page__version-copy">
            <div className="sesen-oncology-page__eyebrow">Version Continuity</div>
            <h2 id="version-title">When the Protocol Changes, the Language Ecosystem Changes with It</h2>
            <p>A new cohort may open. Eligibility criteria may change. Dosing may be revised. New safety information may emerge. A biomarker strategy may be refined. When the protocol changes, the impact can extend far beyond the protocol itself.</p>
            <ul className="sesen-oncology-page__version-benefits">
              {[
                "Reuse approved language where appropriate while isolating changed content for focused review.",
                "Maintain shared study terminology across documents, countries, and languages.",
                "Distinguish current versions from superseded content through structured project workflows.",
                "Support recurring amendments, safety updates, re-consent, and site communications throughout the study.",
              ].map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="sesen-oncology-page__version-visual" aria-label="Protocol amendment impacts related multilingual content">
            <div className="sesen-oncology-page__protocol-card">Protocol Amendment</div>
            <div className="sesen-oncology-page__version-branches">
              {versionImpacts.map((item) => <div className="sesen-oncology-page__version-branch" key={item}>{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="evidence-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="evidence-title"
            title="From Clinical Evidence to Regulatory Decision-Making"
            intro="Oncology development produces large volumes of scientific evidence that must remain clear and consistent as information moves from clinical research into regulatory evaluation, safety management, and post-approval communication."
          />
          <div className="sesen-oncology-page__evidence-grid">
            {evidenceColumns.map((column) => (
              <article className="sesen-oncology-page__evidence-col" key={column.title}>
                <h3>{column.title}</h3>
                <ul className="sesen-oncology-page__check-list">
                  {column.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--dark" aria-labelledby="workflow-title">
        <div className="sesen-oncology-page__shell">
          <div className="sesen-oncology-page__workflow-intro">
            <div>
              <div className="sesen-oncology-page__eyebrow">Human Expertise First</div>
              <h2 id="workflow-title">Expert Oncology Translation, Strengthened by Language Technology</h2>
            </div>
            <p>Oncology content is too consequential for quality to depend on technology alone. Sesen combines professional human expertise with language technology designed to improve consistency, efficiency, and quality control throughout multilingual workflows.</p>
          </div>
          <div className="sesen-oncology-page__workflow">
            {workflowSteps.map(([num,title,text]) => (
              <div className="sesen-oncology-page__workflow-row" key={num}>
                <div className="sesen-oncology-page__workflow-num">{num}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="sesen-oncology-page__tech-human">
            <div className="sesen-oncology-page__tech-human-panel">
              <h3>Technology Supports the Workflow</h3>
              <ul>
                {["Terminology matching", "Translation memory", "Reference retrieval", "Repetitive-content reuse", "Numerical checks", "Consistency checks", "Potential omission detection", "Cross-document comparison", "Version comparison", "Automated QA"].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="sesen-oncology-page__tech-human-panel">
              <h3>Humans Remain Responsible for Meaning</h3>
              <ul>
                {["Scientific interpretation", "Oncology terminology", "Clinical context", "Patient readability", "Regulatory nuance", "Ambiguity resolution", "Reviewer judgment", "Final quality decisions"].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="cancer-title">
        <div className="sesen-oncology-page__shell sesen-oncology-page__cancer-layout">
          <div className="sesen-oncology-page__cancer-copy sesen-oncology-page__mobile-center-heading">
            <div className="sesen-oncology-page__eyebrow">Therapeutic Breadth</div>
            <h2 id="cancer-title">Oncology Translation Across Solid Tumors and Hematologic Malignancies</h2>
            <p>Sesen supports multilingual oncology content across a broad range of cancer research and treatment programs, including solid tumors, hematologic malignancies, biomarker-defined indications, tumor-agnostic approaches, combination therapies, and emerging treatment modalities.</p>
            <p>The appropriate linguistic team and workflow are selected according to the specific indication, document type, study requirements, target audience, and language.</p>
          </div>
          <ul className="sesen-oncology-page__cancer-list">
            {cancers.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--soft" aria-labelledby="global-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="global-title"
            title="Oncology Translation in 150+ Languages"
            intro="Global cancer research depends on participation from diverse patient populations and clinical sites. Sesen helps sponsors, biotechnology companies, CROs, and research organizations manage multilingual oncology content through a centralized workflow supported by professional native-language expertise."
          />
          <div className="sesen-oncology-page__region-grid">
            {regions.map(([region,text]) => (
              <article className="sesen-oncology-page__region" key={region}>
                <h3>{region}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="why-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="why-title"
            title="Why Oncology Teams Choose Sesen"
            intro="A specialized oncology language program should combine subject-matter expertise, controlled terminology, human-led quality, global scale, and disciplined life sciences workflows."
          />
          <div className="sesen-oncology-page__why-grid">
            {whySesen.map(([title,text]) => (
              <article className="sesen-oncology-page__why-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section sesen-oncology-page__section--soft" aria-labelledby="related-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="related-title"
            title="Explore Related Oncology Translation Services"
            intro="Build a multilingual oncology workflow around the documents, patient-facing instruments, regulatory content, safety materials, and clinical activities your program requires."
            align="left"
          />
          <div className="sesen-oncology-page__related">
            {relatedServices.map(([title,text,href]) => (
              <a className="sesen-oncology-page__related-item" href={href} key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="sesen-oncology-page__related-go"><Icon name="arrow" size={18} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__section" aria-labelledby="faq-title">
        <div className="sesen-oncology-page__shell">
          <SectionHeading
            id="faq-title"
            title="Oncology Translation Services — Frequently Asked Questions"
            intro="Common questions about oncology translation, global clinical trial support, patient-facing content, linguistic validation, terminology governance, protocol amendments, emerging therapies, and AI-assisted quality workflows."
            align="left"
          />
          <div className="sesen-oncology-page__faq">
            {faqs.map(([question,answer],index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <div className="sesen-oncology-page__faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-oncology-page__closing-cta-wrap" aria-labelledby="closing-title">
        <div className="sesen-oncology-page__shell">
          <div className="sesen-oncology-page__closing-cta">
            <div>
              <h2 id="closing-title">Advance Your Global Oncology Program with Greater Language Control</h2>
              <p>Whether you are preparing a first-in-human oncology study, expanding a global clinical trial, translating patient outcome measures, managing protocol amendments, preparing regulatory submissions, or supporting an approved therapy across markets, Sesen can help connect the multilingual content behind your program.</p>
            </div>
            <div className="sesen-oncology-page__closing-actions">
              <a className="sesen-oncology-page__btn sesen-oncology-page__btn--primary" href={internalLinks.quote}>REQUEST A QUOTE</a>
              <a className="sesen-oncology-page__btn sesen-oncology-page__btn--secondary" href={internalLinks.sales}>TALK WITH TEAM SESEN</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
