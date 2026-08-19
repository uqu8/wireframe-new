import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 9h9.5M10 5.5 13.5 9 10 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceIcon = ({ type }) => {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  if (type === "clinical") {
    return (
      <svg {...common}>
        <path d="M9 4h6M10 2h4a1 1 0 0 1 1 1v2H9V3a1 1 0 0 1 1-1Z" />
        <rect x="5" y="5" width="14" height="16" rx="2" />
        <path d="M8 10h8M8 14h5M8 18h7" />
      </svg>
    );
  }
  if (type === "regulatory") {
    return (
      <svg {...common}>
        <path d="M12 3 19 6v5c0 4.7-2.8 8.2-7 10-4.2-1.8-7-5.3-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }
  if (type === "labeling") {
    return (
      <svg {...common}>
        <path d="M4 7.5V5a2 2 0 0 1 2-2h6.2a2 2 0 0 1 1.4.6l6.8 6.8a2 2 0 0 1 0 2.8l-6.2 6.2a2 2 0 0 1-2.8 0L4.6 12.6A2 2 0 0 1 4 11.2V7.5Z" />
        <circle cx="8" cy="7" r="1.2" />
      </svg>
    );
  }
  if (type === "device") {
    return (
      <svg {...common}>
        <rect x="6" y="3" width="12" height="18" rx="3" />
        <path d="M9 7h6M9 11h6M10 17h4" />
      </svg>
    );
  }
  if (type === "digital") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 10h2l1.4-2.6 2.2 5 1.4-2.4h3" />
      </svg>
    );
  }
  if (type === "ai") {
    return (
      <svg {...common}>
        <path d="M8 4a4 4 0 0 0-4 4v1a3 3 0 0 0 1 5.2V16a4 4 0 0 0 4 4" />
        <path d="M16 4a4 4 0 0 1 4 4v1a3 3 0 0 1-1 5.2V16a4 4 0 0 1-4 4" />
        <path d="M9 7.5h6M8 12h8M9 16.5h6" />
      </svg>
    );
  }
  if (type === "expertise") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3" />
        <path d="M6 21c.5-4 2.5-6 6-6s5.5 2 6 6" />
        <path d="m16.5 4.5 1 1 2-2" />
      </svg>
    );
  }
  if (type === "terminology") {
    return (
      <svg {...common}>
        <path d="M4 5h11a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="M7 10h7M7 14h5" />
      </svg>
    );
  }
  if (type === "review") {
    return (
      <svg {...common}>
        <path d="M4 4h16v16H4z" />
        <path d="m8 12 2.2 2.2L16 8.5" />
      </svg>
    );
  }
  if (type === "security") {
    return (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 12h4l2-4 4 8 2-4h4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
};

const servicePathways = [
  {
    title: "Clinical & Research",
    description: "Multilingual support for the documents, patient materials, and digital content used throughout global clinical studies.",
    examples: ["Clinical trials", "ICFs & CRFs", "COA / eCOA", "Patient materials"],
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    type: "clinical",
  },
  {
    title: "Regulatory & Safety",
    description: "Translation for submissions, compliance documentation, pharmacovigilance, and health authority communication.",
    examples: ["Submissions", "Compliance", "Pharmacovigilance", "Safety content"],
    href: "https://www.sesen.com/regulatory-translation-services/",
    type: "regulatory",
  },
  {
    title: "Labeling & Product Information",
    description: "Controlled multilingual support for drug labeling, packaging, IFUs, patient information, and lifecycle updates.",
    examples: ["Drug labeling", "Packaging", "IFUs", "In-context review"],
    href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
    type: "labeling",
  },
  {
    title: "Medical Devices",
    description: "Specialized translation for device labeling, IFUs, software, technical documentation, training, and post-market content.",
    examples: ["IFUs", "Device labels", "Technical files", "Software & training"],
    href: "https://www.sesen.com/medical-device-translation-services/",
    type: "device",
  },
  {
    title: "Digital Health & Multimedia",
    description: "Localization for medical software, digital health platforms, patient experiences, training, video, and interactive content.",
    examples: ["Medical software", "eHealth & mHealth", "eLearning", "Video & voiceover"],
    href: "https://www.sesen.com/clinical-medical-software-localization-services/",
    type: "digital",
  },
  {
    title: "AI, Quality & Terminology",
    description: "Human-led workflows supported by AI-assisted validation, terminology intelligence, translation memory, MTPE, and structured linguistic review.",
    examples: ["Hybrid translation", "AI validation", "Terminology", "MTPE & review"],
    href: "https://www.sesen.com/hybrid-translation-life-sciences/",
    type: "ai",
  },
];

const serviceDirectory = [
  {
    category: "Clinical & Research",
    title: "Clinical Trial Translation Services",
    description: "Translation support for sponsors, CROs, study teams, sites, ethics committees, and patient-facing clinical research content.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    links: [
      ["Clinical Trial Translation", "https://www.sesen.com/clinical-trial-translation-services/"],
      ["Informed Consent Form Translation", "https://www.sesen.com/informed-consent-form-translation-services/"],
      ["Case Report Form Translation", "https://www.sesen.com/clinical-trial-translation-services/crf-translations/"],
      ["Investigator Brochure Translation", "https://www.sesen.com/clinical-trial-translation-services/investigators-brochure-translations/"],
      ["Clinical Study Documentation", "https://www.sesen.com/clinical-study-translation-services/"],
      ["Clinical Outcome Assessment Translation", "https://www.sesen.com/linguistic-validation-services/"],
      ["Patient Recruitment & Retention", "https://www.sesen.com/patient-recruitment-services/"],
      ["Clinical Trial Multimedia Localization", "https://www.sesen.com/multimedia-translation-services/"],
      ["Clinical Trial Software Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
    ],
  },
  {
    category: "Regulatory & Safety",
    title: "Regulatory Translation Services",
    description: "Multilingual support for regulated submissions, compliance documentation, safety content, and health authority communication.",
    href: "https://www.sesen.com/regulatory-translation-services/",
    links: [
      ["Regulatory Translation", "https://www.sesen.com/regulatory-translation-services/"],
      ["Regulatory Compliance Translation", "https://www.sesen.com/regulatory-compliance-translation-services/"],
      ["GCP Compliance Translation", "https://www.sesen.com/gcp-compliance-translation/"],
      ["Public Health & Policy Document Translation", "https://www.sesen.com/public-health-policy-document-translations/"],
      ["Pharmacovigilance Translation", "https://www.sesen.com/pharmacovigilance-translation-services/"],
      ["Modular Submission & Content Reuse", "https://www.sesen.com/modular-submission-translation-content-reuse/"],
      ["AI for Regulatory & Compliance", "https://www.sesen.com/ai-for-regulatory-compliance/"],
      ["Regulatory Labeling Translation", "https://www.sesen.com/labeling-translation-services/"],
    ],
  },
  {
    category: "Labeling & Product Information",
    title: "Drug Labeling & Packaging Translation",
    description: "Translation, review, and controlled multilingual support for labeling, packaging, product information, and recurring lifecycle updates.",
    href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
    links: [
      ["Drug Labeling & Packaging", "https://www.sesen.com/drug-labeling-packaging-translation-services/"],
      ["Labeling Translation Services", "https://www.sesen.com/labeling-translation-services/"],
      ["Label Review & In-Context QA", "https://www.sesen.com/label-review-in-context-qa/"],
      ["Life Sciences Labeling Workspace", "https://www.sesen.com/life-sciences-labeling-workspace/"],
      ["IVD Labeling Translation", "https://www.sesen.com/ivd-translation-services/"],
      ["Medication Guide Translation", "https://www.sesen.com/drug-labeling-packaging-translation-services/"],
      ["Package Insert Translation", "https://www.sesen.com/drug-labeling-packaging-translation-services/"],
      ["Patient Information Leaflet Translation", "https://www.sesen.com/drug-labeling-packaging-translation-services/"],
    ],
  },
  {
    category: "Medical Devices",
    title: "Medical Device Translation Services",
    description: "Specialized multilingual support for IFUs, labels, software, technical documentation, training, and post-market communication.",
    href: "https://www.sesen.com/medical-device-translation-services/",
    links: [
      ["Medical Device Translation", "https://www.sesen.com/medical-device-translation-services/"],
      ["IFU Translation Services", "https://www.sesen.com/ifu-translation-services/"],
      ["Medical Device Labeling Translation", "https://www.sesen.com/medical-device-labeling-translation-services/"],
      ["Clinical & Medical Software Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["Medical Device Software Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["eLearning Translation for Medical Devices", "https://www.sesen.com/elearning-training-translation-services/"],
      ["Technical Documentation Translation", "https://www.sesen.com/medical-device-technical-documentation-translation/"],
      ["In-Context Review for Device Content", "https://www.sesen.com/label-review-in-context-qa/"],
    ],
  },
  {
    category: "Clinical Outcomes",
    title: "Linguistic Validation & COA Services",
    description: "Structured translation and linguistic validation workflows for COAs, patient-reported instruments, electronic assessments, and related clinical measures.",
    href: "https://www.sesen.com/linguistic-validation-services/",
    links: [
      ["Linguistic Validation Services", "https://www.sesen.com/linguistic-validation-services/"],
      ["COA Translation Services", "https://www.sesen.com/linguistic-validation-services/"],
      ["PRO Translation", "https://www.sesen.com/linguistic-validation-services/"],
      ["eCOA Localization", "https://www.sesen.com/linguistic-validation-services/"],
      ["Cognitive Debriefing Support", "https://www.sesen.com/linguistic-validation-services/"],
      ["Back Translation", "https://www.sesen.com/linguistic-validation-services/"],
      ["Reconciliation & Harmonization", "https://www.sesen.com/linguistic-validation-services/"],
      ["LV / CD Protocol Support", "https://www.sesen.com/linguistic-validation-services/"],
    ],
  },
  {
    category: "Medical & Scientific",
    title: "Medical, Scientific & Technical Translation",
    description: "Subject-matter translation for specialized medical, scientific, biotechnology, technical, research, and manufacturing content.",
    href: "https://www.sesen.com/medical-scientific-translation-services/",
    links: [
      ["Medical Translation Services", "https://www.sesen.com/medical-scientific-translation-services/"],
      ["Scientific Translation Services", "https://www.sesen.com/medical-scientific-translation-services/"],
      ["Biotechnology Translation", "https://www.sesen.com/biotechnology-translation-services/"],
      ["Genomics & Gene Therapy Translation", "https://www.sesen.com/genomics-gene-therapy-translation-services/"],
      ["Biopharmaceuticals & Biosimilars Translation", "https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/"],
      ["Manufacturing Translation Services", "https://www.sesen.com/pharmaceutical-manufacturing-translation/"],
      ["Medical Patent Translation", "https://www.sesen.com/medical-patent-translation-services/"],
      ["Technical Translation for Life Sciences", "https://www.sesen.com/medical-scientific-translation-services/"],
    ],
  },
  {
    category: "Digital Health",
    title: "Digital Health & Medical Software Localization",
    description: "Localization for regulated healthcare software, clinical systems, digital health applications, patient portals, and connected experiences.",
    href: "https://www.sesen.com/clinical-medical-software-localization-services/",
    links: [
      ["Clinical & Medical Software Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["Medical Software Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["eHealth & mHealth Localization", "https://www.sesen.com/ehealth-mhealth-localization-services/"],
      ["Telemedicine & Digital Health Translation", "https://www.sesen.com/telemedicine-digital-health-translation/"],
      ["Electronic Health Records Translation", "https://www.sesen.com/electronic-health-records-ehr-translation-services/"],
      ["UI / UX Localization", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["Software String Translation", "https://www.sesen.com/clinical-medical-software-localization-services/"],
      ["In-Context Software Review", "https://www.sesen.com/clinical-medical-software-localization-services/"],
    ],
  },
  {
    category: "Training & Multimedia",
    title: "Multimedia, Training & eLearning Localization",
    description: "Multilingual learning, video, audio, training, and interactive content for patients, sites, healthcare professionals, and global teams.",
    href: "https://www.sesen.com/multimedia-translation-services/",
    links: [
      ["Multimedia Localization", "https://www.sesen.com/multimedia-translation-services/"],
      ["Video Translation Services", "https://www.sesen.com/video-translation-services/"],
      ["Voiceovers & Subtitling", "https://www.sesen.com/voiceover-services/"],
      ["eLearning Translation Services", "https://www.sesen.com/elearning-training-translation-services/"],
      ["Medical Training Localization", "https://www.sesen.com/elearning-training-translation-services/"],
      ["Patient Education Localization", "https://www.sesen.com/patient-engagement-translation-services/"],
      ["AI-Generated Voiceover Review", "https://www.sesen.com/voiceover-services/"],
      ["Subtitling for Life Sciences Content", "https://www.sesen.com/video-translation-services/"],
    ],
  },
  {
    category: "Commercial & Market Access",
    title: "Commercial & Market Access Translation",
    description: "Translation and localization for global launch, market access, patient engagement, medical-commercial communication, and digital content.",
    href: "https://www.sesen.com/life-sciences-marketing/",
    links: [
      ["Life Sciences Marketing Translation", "https://www.sesen.com/life-sciences-marketing/"],
      ["Marketing & Commercial Translation", "https://www.sesen.com/life-sciences-marketing/"],
      ["Market Entry Translation Services", "https://www.sesen.com/market-entry-translation-services/"],
      ["Patient Engagement Translation", "https://www.sesen.com/patient-engagement-translation-services/"],
      ["Sales Training Localization", "https://www.sesen.com/elearning-training-translation-services/"],
      ["Website Localization for Life Sciences", "https://www.sesen.com/website-localization-services/"],
      ["Commercial Content Review", "https://www.sesen.com/linguistic-review-services/"],
      ["Global Launch Translation Support", "https://www.sesen.com/market-entry-translation-services/"],
    ],
  },
  {
    category: "AI & Quality",
    title: "AI-Assisted Translation & Quality Services",
    description: "Controlled technology-enabled workflows that support translation, terminology consistency, validation, and review while keeping expert human oversight central.",
    href: "https://www.sesen.com/hybrid-translation-life-sciences/",
    links: [
      ["Hybrid Translation for Life Sciences", "https://www.sesen.com/hybrid-translation-life-sciences/"],
      ["AI Validation & QA", "https://www.sesen.com/ai-validation-qa-life-sciences/"],
      ["AI Terminology Intelligence", "https://www.sesen.com/ai-terminology-intelligence/"],
      ["SesenGPT Hybrid Translation", "https://www.sesen.com/sesengpt/"],
      ["Global Linguistic Review Services", "https://www.sesen.com/linguistic-review-services/"],
      ["MTPE Services", "https://www.sesen.com/machine-translation-post-editing/"],
      ["AI-Assisted Quality Review", "https://www.sesen.com/ai-validation-qa-life-sciences/"],
      ["Terminology Management Services", "https://www.sesen.com/terminology-management-harmonization/"],
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Review the content type, languages, intended use, regulatory context, source files, timing, and delivery requirements before work begins.",
  },
  {
    number: "02",
    title: "Align",
    text: "Establish approved terminology, translation memory, reference content, style guidance, and market-specific instructions for the engagement.",
  },
  {
    number: "03",
    title: "Translate & Review",
    text: "Professional native life sciences linguists translate the content using approved terminology and references, with independent review aligned to its risk and intended use.",
  },
  {
    number: "04",
    title: "Validate & Produce",
    text: "Apply terminology and numeric QA, formatting or in-context checks, and specialized DTP, software, multimedia, or AI-assisted validation as the deliverable requires.",
  },
  {
    number: "05",
    title: "Deliver & Reuse",
    text: "Complete final human QA, prepare controlled delivery, and update approved terminology and translation memory for future versions and recurring content.",
  },
];

const qualityItems = [
  {
    type: "expertise",
    title: "Professional Expertise",
    text: "Qualified native-language life sciences linguists are selected for the subject matter, content type, audience, and intended use of each project.",
  },
  {
    type: "terminology",
    title: "Terminology & Consistency",
    text: "Approved glossaries, style guidance, translation memory, and reference content help maintain consistent language across documents, markets, and updates.",
  },
  {
    type: "review",
    title: "Structured Human Review",
    text: "Independent review and final human QA are aligned to project risk, customer requirements, and the needs of regulated or patient-facing content.",
  },
  {
    type: "security",
    title: "Quality, Security & Delivery Control",
    text: "ISO-certified processes, secure AWS infrastructure, documented workflows, and controlled delivery support enterprise life sciences programs.",
  },
  {
    type: "ai",
    title: "Smarter Workflow Support",
    text: "SesenGPT and AI-assisted checks can support terminology, numbers, consistency, completeness, and review efficiency while final quality decisions remain with expert human reviewers.",
  },
];

const contentGroups = [
  {
    title: "Clinical & Patient Content",
    examples: "ICFs, protocols, CRFs, investigator brochures, eCOA / COA, patient diaries, recruitment materials, and study manuals.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    link: "Explore Clinical Translation",
  },
  {
    title: "Regulatory & Safety Content",
    examples: "Submissions, health authority correspondence, compliance documentation, pharmacovigilance content, safety updates, and policy materials.",
    href: "https://www.sesen.com/regulatory-translation-services/",
    link: "Explore Regulatory Translation",
  },
  {
    title: "Labeling & Product Information",
    examples: "Drug labels, device labels, IFUs, package inserts, medication guides, patient information leaflets, cartons, packaging, and IVD labeling.",
    href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
    link: "Explore Labeling Services",
  },
  {
    title: "Medical, Scientific & Technical Content",
    examples: "Scientific manuscripts, medical communications, research content, technical documentation, manufacturing materials, patents, and biotechnology content.",
    href: "https://www.sesen.com/medical-scientific-translation-services/",
    link: "Explore Medical & Scientific Translation",
  },
  {
    title: "Digital Health, Software & Training",
    examples: "Clinical platforms, patient portals, medical software, apps, EHR content, eLearning, video, subtitles, and global training materials.",
    href: "https://www.sesen.com/clinical-medical-software-localization-services/",
    link: "Explore Digital Health Localization",
  },
  {
    title: "Commercial & Market Access Content",
    examples: "Websites, launch materials, market access content, patient engagement, medical-commercial communication, sales training, and global campaigns.",
    href: "https://www.sesen.com/life-sciences-marketing/",
    link: "Explore Commercial Translation",
  },
];

const teams = [
  "Clinical Operations",
  "Regulatory Affairs",
  "Medical Writing",
  "Labeling & Packaging",
  "Medical Affairs",
  "Pharmacovigilance",
  "Quality & Compliance",
  "Medical Device Teams",
  "Digital Health & Software",
  "Commercial & Market Access",
  "CROs & Research Partners",
];

const resources = [
  {
    label: "Clinical & Regulatory Knowledge",
    text: "Practical guidance for teams planning clinical, regulatory, labeling, medical device, terminology, and regulated multilingual workflows.",
    href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/",
    cta: "Explore Clinical & Regulatory Knowledge",
  },
  {
    label: "Case Studies & Success Stories",
    text: "See how Sesen supports real-world multilingual programs across clinical trials, regulatory content, labeling, devices, digital health, and patient communication.",
    href: "https://www.sesen.com/resources/case-studies/",
    cta: "View Case Studies",
  },
  {
    label: "AI & Regulatory Insights",
    text: "Explore responsible AI-assisted translation, terminology, validation, human review, and quality workflows for regulated life sciences content.",
    href: "https://www.sesen.com/resources/ai-regulatory-insights/",
    cta: "Explore AI & Regulatory Insights",
  },
];

const styles = `
.sesen-services-page {
  --ssp-blue: #4B6FD8;
  --ssp-blue-dark: #3659BB;
  --ssp-blue-deep: #253F8F;
  --ssp-blue-mid: #6F8BE1;
  --ssp-blue-soft: #EAF0FF;
  --ssp-blue-pale: #F5F7FF;
  --ssp-navy: #17264D;
  --ssp-ink: #111827;
  --ssp-body: #46546D;
  --ssp-muted: #68758B;
  --ssp-border: #DDE4F2;
  --ssp-divider: #E9EEF8;
  --ssp-surface: #F7F9FD;
  --ssp-white: #FFFFFF;
  --ssp-light-on-dark: #C8D6FF;
  width: 100%;
  overflow-x: clip;
  overflow-y: visible;
  background: var(--ssp-white);
  color: var(--ssp-body);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
}

.sesen-services-page,
.sesen-services-page * {
  box-sizing: border-box;
}

.sesen-services-page a {
  color: inherit;
}

.sesen-services-page .ssp-shell {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 56px;
  padding-right: 56px;
}

.sesen-services-page .ssp-section {
  padding-top: 96px;
  padding-bottom: 96px;
}

.sesen-services-page .ssp-section--dense {
  padding-top: 80px;
  padding-bottom: 80px;
}

.sesen-services-page .ssp-section--pale {
  background: var(--ssp-blue-pale);
}

.sesen-services-page .ssp-section--soft {
  background: var(--ssp-surface);
}

.sesen-services-page .ssp-eyebrow {
  margin: 0 0 16px;
  color: var(--ssp-blue-dark);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.sesen-services-page .ssp-eyebrow--light {
  color: var(--ssp-light-on-dark);
}

.sesen-services-page .ssp-h1,
.sesen-services-page .ssp-h2,
.sesen-services-page .ssp-h3 {
  margin: 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  font-weight: 500;
}

.sesen-services-page .ssp-h1 {
  max-width: 690px;
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.sesen-services-page .ssp-h2 {
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: normal;
}

.sesen-services-page .ssp-h3 {
  font-size: 23px;
  line-height: 1.3;
}

.sesen-services-page .ssp-lead {
  margin: 24px 0 0;
  max-width: 720px;
  color: #293954;
  font-size: 19px;
  line-height: 1.7;
}

.sesen-services-page .ssp-body-large {
  margin: 22px 0 0;
  max-width: 800px;
  color: var(--ssp-body);
  font-size: 18px;
  line-height: 1.72;
}

.sesen-services-page .ssp-body {
  margin: 0;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.7;
}

.sesen-services-page .ssp-muted {
  color: var(--ssp-muted);
}

.sesen-services-page .ssp-section-head {
  max-width: 820px;
  margin-bottom: 52px;
}

.sesen-services-page .ssp-section-head .ssp-body-large {
  max-width: 790px;
}

.sesen-services-page .ssp-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.sesen-services-page .ssp-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 26px;
  border: 1px solid transparent;
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}

.sesen-services-page .ssp-button--primary {
  background: var(--ssp-blue);
  color: var(--ssp-white);
}

.sesen-services-page .ssp-button--primary:hover {
  background: var(--ssp-blue-dark);
}

.sesen-services-page .ssp-button--secondary {
  border-color: var(--ssp-border);
  background: var(--ssp-white);
  color: var(--ssp-ink);
}

.sesen-services-page .ssp-button--secondary:hover {
  border-color: #C7D3EC;
  background: var(--ssp-blue-pale);
}

.sesen-services-page .ssp-button:hover {
  transform: translateY(-1px);
}

.sesen-services-page .ssp-button:focus-visible,
.sesen-services-page .ssp-link:focus-visible,
.sesen-services-page .ssp-directory-link:focus-visible,
.sesen-services-page .ssp-pathway:focus-visible,
.sesen-services-page .ssp-resource-card:focus-visible {
  outline: 3px solid rgba(75, 111, 216, 0.28);
  outline-offset: 3px;
}

.sesen-services-page .ssp-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--ssp-blue-dark);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
}

.sesen-services-page .ssp-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.sesen-services-page .ssp-link svg {
  flex: 0 0 auto;
  transition: transform 160ms ease;
}

.sesen-services-page .ssp-link:hover svg {
  transform: translateX(3px);
}

.sesen-services-page .ssp-hero {
  padding-top: 96px;
  padding-bottom: 96px;
  background:
    radial-gradient(circle at 82% 28%, rgba(234, 240, 255, 0.92), rgba(234, 240, 255, 0) 31%),
    linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
}

.sesen-services-page .ssp-hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
  align-items: center;
  gap: 58px;
}

.sesen-services-page .ssp-hero-copy {
  min-width: 0;
}

.sesen-services-page .ssp-hero-note {
  margin: 18px 0 0;
  max-width: 700px;
  color: var(--ssp-muted);
  font-size: 16px;
  line-height: 1.7;
}

.sesen-services-page .ssp-service-map {
  position: relative;
  min-height: 430px;
  border: 1px solid var(--ssp-border);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 18px 55px rgba(37, 63, 143, 0.08);
  overflow: hidden;
}

.sesen-services-page .ssp-service-map::before,
.sesen-services-page .ssp-service-map::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.sesen-services-page .ssp-service-map::before {
  width: 350px;
  height: 350px;
  left: 50%;
  top: 50%;
  border: 1px solid #E7ECF7;
  transform: translate(-50%, -50%);
}

.sesen-services-page .ssp-service-map::after {
  width: 235px;
  height: 235px;
  left: 50%;
  top: 50%;
  border: 1px dashed #D7E0F2;
  transform: translate(-50%, -50%);
}

.sesen-services-page .ssp-map-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  color: #C9D5EE;
}

.sesen-services-page .ssp-map-center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  display: flex;
  width: 118px;
  height: 118px;
  align-items: center;
  justify-content: center;
  border: 1px solid #C9D5EE;
  border-radius: 50%;
  background: var(--ssp-blue-deep);
  color: var(--ssp-white);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.01em;
  transform: translate(-50%, -50%);
  box-shadow: 0 14px 32px rgba(37, 63, 143, 0.18);
}

.sesen-services-page .ssp-map-node {
  position: absolute;
  z-index: 3;
  display: flex;
  min-width: 126px;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border: 1px solid var(--ssp-border);
  border-radius: 18px;
  background: var(--ssp-white);
  color: var(--ssp-navy);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.32;
  box-shadow: 0 9px 28px rgba(37, 63, 143, 0.06);
}

.sesen-services-page .ssp-map-node--1 { left: 50%; top: 28px; transform: translateX(-50%); }
.sesen-services-page .ssp-map-node--2 { right: 26px; top: 96px; }
.sesen-services-page .ssp-map-node--3 { right: 32px; bottom: 70px; }
.sesen-services-page .ssp-map-node--4 { left: 50%; bottom: 24px; transform: translateX(-50%); }
.sesen-services-page .ssp-map-node--5 { left: 26px; bottom: 70px; }
.sesen-services-page .ssp-map-node--6 { left: 26px; top: 96px; }

.sesen-services-page .ssp-map-caption {
  position: absolute;
  left: 50%;
  bottom: 114px;
  z-index: 2;
  color: var(--ssp-muted);
  font-size: 13px;
  line-height: 1.35;
  transform: translateX(-50%);
  white-space: nowrap;
}

.sesen-services-page .ssp-pathways-panel {
  overflow: hidden;
  border: 1px solid var(--ssp-border);
  border-radius: 28px;
  background: var(--ssp-divider);
  box-shadow: 0 14px 46px rgba(37, 63, 143, 0.05);
}

.sesen-services-page .ssp-pathways-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
}

.sesen-services-page .ssp-pathway {
  position: relative;
  display: block;
  min-height: 286px;
  padding: 34px 32px 30px;
  background: var(--ssp-white);
  text-decoration: none;
  transition: background-color 180ms ease;
}

.sesen-services-page .ssp-pathway:hover {
  background: #FBFCFF;
}

.sesen-services-page .ssp-pathway-icon {
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  border-radius: 13px;
  background: var(--ssp-blue-soft);
  color: var(--ssp-blue-dark);
}

.sesen-services-page .ssp-pathway-title {
  margin: 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
}

.sesen-services-page .ssp-pathway-text {
  margin: 13px 0 0;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-pathway-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 12px;
  margin-top: 18px;
  color: var(--ssp-muted);
  font-size: 14px;
  line-height: 1.4;
}

.sesen-services-page .ssp-pathway-examples span:not(:last-child)::after {
  content: "·";
  margin-left: 12px;
  color: #AAB6CC;
}

.sesen-services-page .ssp-pathway-arrow {
  position: absolute;
  right: 28px;
  bottom: 28px;
  color: var(--ssp-blue-dark);
}

.sesen-services-page .ssp-browse-link {
  margin-top: 28px;
}

.sesen-services-page .ssp-trust-band {
  border-top: 1px solid var(--ssp-border);
  border-bottom: 1px solid var(--ssp-border);
  background: var(--ssp-white);
}

.sesen-services-page .ssp-trust-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 26px;
  padding-top: 26px;
  padding-bottom: 26px;
}

.sesen-services-page .ssp-trust-item {
  min-width: 0;
}

.sesen-services-page .ssp-trust-title {
  display: block;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.35;
}

.sesen-services-page .ssp-trust-copy {
  display: block;
  margin-top: 4px;
  color: var(--ssp-muted);
  font-size: 14px;
  line-height: 1.45;
}

.sesen-services-page #all-services {
  scroll-margin-top: 36px;
}

.sesen-services-page .ssp-directory {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 54px;
  border-bottom: 1px solid var(--ssp-border);
}

.sesen-services-page .ssp-directory-item {
  padding: 34px 0 36px;
  border-top: 1px solid var(--ssp-border);
}

.sesen-services-page .ssp-directory-category {
  margin: 0 0 10px;
  color: var(--ssp-blue-dark);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.sesen-services-page .ssp-directory-title {
  margin: 0;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.32;
}

.sesen-services-page .ssp-directory-title a {
  color: var(--ssp-navy);
  text-decoration: none;
}

.sesen-services-page .ssp-directory-title a:hover {
  color: var(--ssp-blue-dark);
}

.sesen-services-page .ssp-directory-description {
  margin: 13px 0 0;
  max-width: 570px;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-directory-links {
  display: flex;
  flex-wrap: wrap;
  gap: 9px 14px;
  margin-top: 20px;
}

.sesen-services-page .ssp-directory-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--ssp-blue-dark);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.42;
}

.sesen-services-page .ssp-directory-link::after {
  content: "›";
  color: #8298D6;
  font-size: 16px;
  line-height: 1;
}

.sesen-services-page .ssp-directory-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.sesen-services-page .ssp-workflow-wrap {
  position: relative;
}

.sesen-services-page .ssp-workflow {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 26px;
}

.sesen-services-page .ssp-workflow::before {
  content: "";
  position: absolute;
  left: 16px;
  right: 16px;
  top: 23px;
  height: 1px;
  background: #CBD6EB;
}

.sesen-services-page .ssp-workflow-step {
  position: relative;
  z-index: 1;
  min-width: 0;
}

.sesen-services-page .ssp-step-number {
  display: flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border: 1px solid #C9D6EF;
  border-radius: 50%;
  background: var(--ssp-white);
  color: var(--ssp-blue-dark);
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
}

.sesen-services-page .ssp-step-title {
  margin: 21px 0 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.32;
}

.sesen-services-page .ssp-step-text {
  margin: 12px 0 0;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-quality-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  align-items: start;
  gap: 78px;
}

.sesen-services-page .ssp-quality-intro {
  position: static;
}

.sesen-services-page .ssp-quality-list {
  border-top: 1px solid #D7E1F4;
}

.sesen-services-page .ssp-quality-item {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  padding: 25px 0;
  border-bottom: 1px solid #D7E1F4;
}

.sesen-services-page .ssp-quality-icon {
  display: flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--ssp-white);
  color: var(--ssp-blue-dark);
  box-shadow: inset 0 0 0 1px #DCE5F6;
}

.sesen-services-page .ssp-quality-title {
  margin: 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.34;
}

.sesen-services-page .ssp-quality-text {
  margin: 7px 0 0;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-credential-line {
  display: flex;
  flex-wrap: wrap;
  gap: 9px 14px;
  margin-top: 30px;
  color: var(--ssp-navy);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
}

.sesen-services-page .ssp-credential-line span:not(:last-child)::after {
  content: "·";
  margin-left: 14px;
  color: #9DABC2;
}

.sesen-services-page .ssp-content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 64px;
  border-bottom: 1px solid var(--ssp-border);
}

.sesen-services-page .ssp-content-item {
  padding: 30px 0 32px;
  border-top: 1px solid var(--ssp-border);
}

.sesen-services-page .ssp-content-title {
  margin: 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.34;
}

.sesen-services-page .ssp-content-text {
  margin: 12px 0 17px;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-teams-panel {
  padding: 42px 46px;
  border: 1px solid var(--ssp-border);
  border-radius: 28px;
  background: var(--ssp-white);
}

.sesen-services-page .ssp-teams-copy {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 56px;
  align-items: end;
}

.sesen-services-page .ssp-team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 11px 0;
  margin-top: 28px;
  color: var(--ssp-navy);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.sesen-services-page .ssp-team-list span {
  display: inline-flex;
  align-items: center;
}

.sesen-services-page .ssp-team-list span:not(:last-child)::after {
  content: "•";
  margin: 0 13px;
  color: #A6B2C7;
  font-size: 10px;
}

.sesen-services-page .ssp-resources-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.sesen-services-page .ssp-resource-card {
  display: flex;
  min-height: 300px;
  flex-direction: column;
  padding: 32px 30px 30px;
  border: 1px solid var(--ssp-border);
  border-radius: 24px;
  background: var(--ssp-white);
  text-decoration: none;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.sesen-services-page .ssp-resource-card:hover {
  border-color: #C9D5EE;
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(37, 63, 143, 0.06);
}


.sesen-services-page .ssp-resource-title {
  margin: 0;
  color: var(--ssp-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.32;
}

.sesen-services-page .ssp-resource-text {
  margin: 15px 0 26px;
  color: var(--ssp-body);
  font-size: 16px;
  line-height: 1.68;
}

.sesen-services-page .ssp-resource-action {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: auto;
  color: var(--ssp-blue-dark);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.45;
}

.sesen-services-page .ssp-resources-footer {
  margin-top: 28px;
}

.sesen-services-page .ssp-final-cta {
  padding-top: 82px;
  padding-bottom: 82px;
  background:
    radial-gradient(circle at 83% 18%, rgba(111, 139, 225, 0.33), rgba(111, 139, 225, 0) 28%),
    linear-gradient(135deg, #17264D 0%, #253F8F 100%);
}

.sesen-services-page .ssp-final-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
  gap: 72px;
  align-items: center;
}

.sesen-services-page .ssp-final-title {
  margin: 0;
  max-width: 760px;
  color: var(--ssp-white);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
}

.sesen-services-page .ssp-final-text {
  margin: 18px 0 0;
  max-width: 790px;
  color: #E5EBFA;
  font-size: 18px;
  line-height: 1.72;
}

.sesen-services-page .ssp-final-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 12px;
}

.sesen-services-page .ssp-final-cta .ssp-button--secondary {
  border-color: rgba(255,255,255,0.78);
  background: var(--ssp-white);
  color: var(--ssp-ink);
}

.sesen-services-page .ssp-final-cta .ssp-button--secondary:hover {
  border-color: var(--ssp-white);
  background: #F2F5FB;
}

@media (max-width: 1280px) {
  .sesen-services-page .ssp-shell {
    padding-left: 40px;
    padding-right: 40px;
  }

  .sesen-services-page .ssp-hero-grid {
    grid-template-columns: minmax(0, 1.06fr) minmax(390px, 0.94fr);
    gap: 42px;
  }
}

@media (max-width: 1040px) {
  .sesen-services-page .ssp-hero-grid {
    grid-template-columns: 1fr;
  }

  .sesen-services-page .ssp-hero-copy {
    max-width: 820px;
  }

  .sesen-services-page .ssp-service-map {
    width: 100%;
    max-width: 720px;
    min-height: 420px;
  }

  .sesen-services-page .ssp-pathways-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sesen-services-page .ssp-directory {
    column-gap: 38px;
  }

  .sesen-services-page .ssp-workflow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 42px;
  }

  .sesen-services-page .ssp-workflow::before {
    display: none;
  }

  .sesen-services-page .ssp-workflow-step {
    padding-top: 0;
  }

  .sesen-services-page .ssp-quality-grid {
    grid-template-columns: 1fr;
    gap: 46px;
  }

  .sesen-services-page .ssp-quality-intro {
    position: static;
    max-width: 820px;
  }

  .sesen-services-page .ssp-final-grid {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .sesen-services-page .ssp-final-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 900px) {
  .sesen-services-page .ssp-shell {
    padding-left: 30px;
    padding-right: 30px;
  }

  .sesen-services-page .ssp-section {
    padding-top: 82px;
    padding-bottom: 82px;
  }

  .sesen-services-page .ssp-section--dense {
    padding-top: 72px;
    padding-bottom: 72px;
  }

  .sesen-services-page .ssp-hero {
    padding-top: 82px;
    padding-bottom: 82px;
  }

  .sesen-services-page .ssp-h1 {
    font-size: 44px;
  }

  .sesen-services-page .ssp-h2,
  .sesen-services-page .ssp-final-title {
    font-size: 34px;
  }

  .sesen-services-page .ssp-trust-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sesen-services-page .ssp-directory {
    grid-template-columns: 1fr;
  }

  .sesen-services-page .ssp-content-grid {
    grid-template-columns: 1fr;
  }

  .sesen-services-page .ssp-teams-copy {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .sesen-services-page .ssp-resources-grid {
    grid-template-columns: 1fr;
  }

  .sesen-services-page .ssp-resource-card {
    min-height: 0;
  }
}

@media (max-width: 768px) {
  .sesen-services-page .ssp-shell {
    padding-left: 28px;
    padding-right: 28px;
  }

  .sesen-services-page .ssp-pathway {
    min-height: 0;
    padding: 30px 28px 66px;
  }

  .sesen-services-page .ssp-workflow {
    display: block;
  }

  .sesen-services-page .ssp-workflow-step {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    padding: 0 0 34px;
  }

  .sesen-services-page .ssp-workflow-step:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 23px;
    top: 46px;
    bottom: 0;
    width: 1px;
    background: #CBD6EB;
  }

  .sesen-services-page .ssp-step-title {
    margin-top: 0;
  }

  .sesen-services-page .ssp-step-text {
    grid-column: 2;
    margin-top: 8px;
  }

  .sesen-services-page .ssp-teams-panel {
    padding: 36px 32px;
  }
}

@media (max-width: 640px) {
  .sesen-services-page .ssp-shell {
    padding-left: 20px;
    padding-right: 20px;
  }

  .sesen-services-page .ssp-section-head--mobile-center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .sesen-services-page .ssp-section-head--mobile-center .ssp-body-large {
    margin-left: auto;
    margin-right: auto;
  }

  .sesen-services-page .ssp-pathways-grid {
    grid-template-columns: 1fr;
  }

  .sesen-services-page .ssp-section {
    padding-top: 68px;
    padding-bottom: 68px;
  }

  .sesen-services-page .ssp-section--dense {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .sesen-services-page .ssp-hero {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .sesen-services-page .ssp-h1 {
    font-size: 42px;
    line-height: 1.24;
  }

  .sesen-services-page .ssp-h2,
  .sesen-services-page .ssp-final-title {
    font-size: 32px;
  }

  .sesen-services-page .ssp-h3 {
    font-size: 22px;
  }

  .sesen-services-page .ssp-lead {
    font-size: 18px;
  }

  .sesen-services-page .ssp-body-large,
  .sesen-services-page .ssp-final-text {
    font-size: 17px;
  }

  .sesen-services-page .ssp-section-head {
    margin-bottom: 38px;
  }

  .sesen-services-page .ssp-button-row,
  .sesen-services-page .ssp-final-actions {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }

  .sesen-services-page .ssp-final-grid {
    text-align: center;
  }

  .sesen-services-page .ssp-final-text {
    margin-left: auto;
    margin-right: auto;
  }

  .sesen-services-page .ssp-button {
    width: 100%;
    min-height: 50px;
  }

  .sesen-services-page .ssp-service-map {
    display: none;
  }

  .sesen-services-page .ssp-trust-grid {
    grid-template-columns: 1fr 1fr;
    gap: 22px 18px;
  }

  .sesen-services-page .ssp-pathway {
    padding-left: 24px;
    padding-right: 24px;
  }

  .sesen-services-page .ssp-directory-item {
    padding-top: 30px;
    padding-bottom: 32px;
  }

  .sesen-services-page .ssp-directory-title {
    font-size: 23px;
  }

  .sesen-services-page .ssp-directory-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 9px;
  }

  .sesen-services-page .ssp-directory-link {
    width: fit-content;
    max-width: 100%;
    font-size: 16px;
    overflow-wrap: anywhere;
  }

  .sesen-services-page .ssp-quality-item {
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 15px;
  }

  .sesen-services-page .ssp-credential-line {
    display: grid;
    gap: 8px;
  }

  .sesen-services-page .ssp-credential-line span:not(:last-child)::after {
    display: none;
  }

  .sesen-services-page .ssp-teams-panel {
    padding: 30px 24px;
    border-radius: 24px;
  }

  .sesen-services-page .ssp-team-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .sesen-services-page .ssp-team-list span:not(:last-child)::after {
    display: none;
  }

  .sesen-services-page .ssp-resource-card {
    padding: 28px 24px;
  }

  .sesen-services-page .ssp-link,
  .sesen-services-page .ssp-resource-action {
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .sesen-services-page .ssp-final-cta {
    padding-top: 68px;
    padding-bottom: 68px;
  }
}

@media (max-width: 360px) {
  .sesen-services-page .ssp-h1 {
    font-size: 38px;
  }

  .sesen-services-page .ssp-h2,
  .sesen-services-page .ssp-final-title {
    font-size: 30px;
  }

  .sesen-services-page .ssp-trust-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-services-page .ssp-button,
  .sesen-services-page .ssp-link svg,
  .sesen-services-page .ssp-resource-card {
    transition: none;
  }
}
`;

export default function SesenServicesHub56V3() {
  return (
    <main className="sesen-services-page">
      <style>{styles}</style>

      <section className="ssp-hero" aria-labelledby="services-hero-title">
        <div className="ssp-shell">
          <div className="ssp-hero-grid">
            <div className="ssp-hero-copy">
              <h1 id="services-hero-title" className="ssp-h1">Life Sciences Translation and Localization Services</h1>
              <p className="ssp-lead">
                Sesen provides specialized multilingual services for clinical research, regulatory submissions, labeling, medical devices, medical and scientific content, digital health, training, and global life sciences communication.
              </p>
              <p className="ssp-hero-note">
                Professional native life sciences linguists are supported by terminology governance, translation memory, structured human review, and technology-enabled QA for consistent global delivery across 150+ languages.
              </p>
              <div className="ssp-button-row" aria-label="Services page actions">
                <a className="ssp-button ssp-button--primary" href="https://www.sesen.com/contact-sales/">
                  CONTACT SALES <ArrowIcon />
                </a>
                <a className="ssp-button ssp-button--secondary" href="https://www.sesen.com/get-a-quote/">
                  REQUEST A QUOTE <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="ssp-service-map" role="img" aria-label="Sesen service areas connected through one coordinated life sciences translation model">
              <svg className="ssp-map-lines" viewBox="0 0 520 430" preserveAspectRatio="none" aria-hidden="true">
                <path d="M260 215 260 68" stroke="currentColor" strokeWidth="1.2" />
                <path d="M260 215 420 126" stroke="currentColor" strokeWidth="1.2" />
                <path d="M260 215 420 320" stroke="currentColor" strokeWidth="1.2" />
                <path d="M260 215 260 376" stroke="currentColor" strokeWidth="1.2" />
                <path d="M260 215 100 320" stroke="currentColor" strokeWidth="1.2" />
                <path d="M260 215 100 126" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <div className="ssp-map-center">Sesen</div>
              <div className="ssp-map-node ssp-map-node--1">Clinical & Research</div>
              <div className="ssp-map-node ssp-map-node--2">Regulatory & Safety</div>
              <div className="ssp-map-node ssp-map-node--3">Labeling & Product</div>
              <div className="ssp-map-node ssp-map-node--4">Medical Devices</div>
              <div className="ssp-map-node ssp-map-node--5">Digital & Multimedia</div>
              <div className="ssp-map-node ssp-map-node--6">AI, Quality & Terminology</div>
              <div className="ssp-map-caption">One coordinated service model</div>
            </div>
          </div>
        </div>
      </section>

      <section className="ssp-section" aria-labelledby="service-finder-title">
        <div className="ssp-shell">
          <div className="ssp-section-head ssp-section-head--mobile-center">
            <h2 id="service-finder-title" className="ssp-h2">Find the Right Sesen Service</h2>
            <p className="ssp-body-large">
              Choose the service area that best matches your content, workflow, or multilingual program. Each pathway connects to specialized services built for regulated and global life sciences communication.
            </p>
          </div>

          <div className="ssp-pathways-panel">
            <div className="ssp-pathways-grid">
              {servicePathways.map((item) => (
                <a key={item.title} className="ssp-pathway" href={item.href}>
                  <div className="ssp-pathway-icon"><ServiceIcon type={item.type} /></div>
                  <h3 className="ssp-pathway-title">{item.title}</h3>
                  <p className="ssp-pathway-text">{item.description}</p>
                  <div className="ssp-pathway-examples" aria-label={`${item.title} examples`}>
                    {item.examples.map((example) => <span key={example}>{example}</span>)}
                  </div>
                  <ArrowIcon className="ssp-pathway-arrow" />
                </a>
              ))}
            </div>
          </div>

          <div className="ssp-browse-link">
            <a className="ssp-link" href="https://www.sesen.com/services/#all-services">Browse All Services <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <div className="ssp-trust-band" aria-label="Sesen service trust signals">
        <div className="ssp-shell">
          <div className="ssp-trust-grid">
            <div className="ssp-trust-item">
              <span className="ssp-trust-title">150+ Languages</span>
              <span className="ssp-trust-copy">Global multilingual coverage</span>
            </div>
            <div className="ssp-trust-item">
              <span className="ssp-trust-title">Life Sciences Only</span>
              <span className="ssp-trust-copy">Specialized sector focus</span>
            </div>
            <div className="ssp-trust-item">
              <span className="ssp-trust-title">ISO-Certified Processes</span>
              <span className="ssp-trust-copy">ISO 17100 · ISO 9001 · ISO 13485</span>
            </div>
            <div className="ssp-trust-item">
              <span className="ssp-trust-title">Professional Life Sciences Linguists</span>
              <span className="ssp-trust-copy">Expert human translation and review</span>
            </div>
          </div>
        </div>
      </div>

      <section id="all-services" className="ssp-section" aria-labelledby="all-services-title">
        <div className="ssp-shell">
          <div className="ssp-section-head ssp-section-head--mobile-center">
            <h2 id="all-services-title" className="ssp-h2">Explore Sesen Life Sciences Services</h2>
            <p className="ssp-body-large">
              Sesen supports multilingual content across the life sciences lifecycle—from clinical development and regulatory submission through labeling, medical devices, digital health, training, commercialization, and post-market updates.
            </p>
          </div>

          <div className="ssp-directory">
            {serviceDirectory.map((service) => (
              <article className="ssp-directory-item" key={service.title}>
                <p className="ssp-directory-category">{service.category}</p>
                <h3 className="ssp-directory-title"><a href={service.href}>{service.title}</a></h3>
                <p className="ssp-directory-description">{service.description}</p>
                <div className="ssp-directory-links" aria-label={`${service.title} related services`}>
                  {service.links.map(([label, href]) => (
                    <a className="ssp-directory-link" href={href} key={`${service.title}-${label}`}>{label}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ssp-section ssp-section--soft" aria-labelledby="delivery-title">
        <div className="ssp-shell">
          <div className="ssp-section-head ssp-section-head--mobile-center">
            <p className="ssp-eyebrow">How Sesen Works</p>
            <h2 id="delivery-title" className="ssp-h2">One Controlled Delivery Model Across Sesen Services</h2>
            <p className="ssp-body-large">
              The exact workflow adapts to the content, risk, format, and intended use. Across service areas, Sesen applies disciplined scoping, terminology governance, professional linguistic expertise, structured review, appropriate validation, and final delivery control.
            </p>
          </div>

          <div className="ssp-workflow-wrap">
            <div className="ssp-workflow">
              {workflowSteps.map((step) => (
                <div className="ssp-workflow-step" key={step.number}>
                  <div className="ssp-step-number">{step.number}</div>
                  <div>
                    <h3 className="ssp-step-title">{step.title}</h3>
                    <p className="ssp-step-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ssp-section ssp-section--pale" aria-labelledby="quality-title">
        <div className="ssp-shell">
          <div className="ssp-quality-grid">
            <div className="ssp-quality-intro">
              <h2 id="quality-title" className="ssp-h2">Quality Built Into Every Sesen Service</h2>
              <p className="ssp-body-large">
                Quality is built throughout the engagement rather than added only at the end. Sesen aligns professional expertise, terminology, review, security, and technology support to the content risk, intended use, and customer requirements of each project.
              </p>
              <div className="ssp-credential-line" aria-label="Sesen quality credentials">
                <span>ISO 17100</span>
                <span>ISO 9001</span>
                <span>ISO 13485</span>
                <span>Secure AWS Infrastructure</span>
                <span>Expert Human Review</span>
              </div>
            </div>

            <div className="ssp-quality-list">
              {qualityItems.map((item) => (
                <div className="ssp-quality-item" key={item.title}>
                  <div className="ssp-quality-icon"><ServiceIcon type={item.type} /></div>
                  <div>
                    <h3 className="ssp-quality-title">{item.title}</h3>
                    <p className="ssp-quality-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ssp-section" aria-labelledby="content-finder-title">
        <div className="ssp-shell">
          <div className="ssp-section-head ssp-section-head--mobile-center">
            <h2 id="content-finder-title" className="ssp-h2">Find Sesen by Content Type</h2>
            <p className="ssp-body-large">
              Know what you need translated but not which service it belongs to? Start with the content itself and follow the closest service pathway.
            </p>
          </div>

          <div className="ssp-content-grid">
            {contentGroups.map((item) => (
              <article className="ssp-content-item" key={item.title}>
                <h3 className="ssp-content-title">{item.title}</h3>
                <p className="ssp-content-text">{item.examples}</p>
                <a className="ssp-link" href={item.href}>{item.link} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ssp-section ssp-section--dense ssp-section--soft" aria-labelledby="teams-title">
        <div className="ssp-shell">
          <div className="ssp-teams-panel">
            <div className="ssp-teams-copy">
              <div>
                <h2 id="teams-title" className="ssp-h2">Built for the Teams Behind Global Life Sciences Content</h2>
              </div>
              <p className="ssp-body">
                Whether a request begins with clinical operations, regulatory affairs, labeling, a medical device team, digital health, or a global content function, Sesen connects the work with the right linguistic expertise, terminology controls, workflow structure, and quality review.
              </p>
            </div>
            <div className="ssp-team-list" aria-label="Teams Sesen supports">
              {teams.map((team) => <span key={team}>{team}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="ssp-section" aria-labelledby="resources-title">
        <div className="ssp-shell">
          <div className="ssp-section-head ssp-section-head--mobile-center">
            <h2 id="resources-title" className="ssp-h2">Resources for Planning Multilingual Life Sciences Programs</h2>
            <p className="ssp-body-large">
              Explore deeper guidance on regulated content, translation workflows, terminology, AI-assisted quality, and practical multilingual program planning.
            </p>
          </div>

          <div className="ssp-resources-grid">
            {resources.map((resource) => (
              <a className="ssp-resource-card" href={resource.href} key={resource.label}>
                <h3 className="ssp-resource-title">{resource.label}</h3>
                <p className="ssp-resource-text">{resource.text}</p>
                <span className="ssp-resource-action">{resource.cta} <ArrowIcon /></span>
              </a>
            ))}
          </div>

          <div className="ssp-resources-footer">
            <a className="ssp-link" href="https://www.sesen.com/resources/">Explore All Resources <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="ssp-final-cta" aria-labelledby="final-cta-title">
        <div className="ssp-shell">
          <div className="ssp-final-grid">
            <div>
              <h2 id="final-cta-title" className="ssp-final-title">Need Help Choosing the Right Sesen Service?</h2>
              <p className="ssp-final-text">
                Tell us about your content, target languages, markets, regulatory context, timeline, or ongoing multilingual program. Team Sesen can help identify the right service, professional linguistic resources, terminology approach, quality controls, and delivery model.
              </p>
            </div>
            <div className="ssp-final-actions" aria-label="Final service actions">
              <a className="ssp-button ssp-button--primary" href="https://www.sesen.com/contact-sales/">
                CONTACT SALES <ArrowIcon />
              </a>
              <a className="ssp-button ssp-button--secondary" href="https://www.sesen.com/get-a-quote/">
                REQUEST A QUOTE <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
