import React, { useState } from "react";

const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const SALES_URL = "https://www.sesen.com/contact-sales/";
const CLINICAL_TRIAL_URL = "https://www.sesen.com/clinical-trial-translation-services/";
const DIGITAL_HEALTH_URL = "https://www.sesen.com/ehealth-mhealth-localization-services/";
const ECOA_URL = "https://www.sesen.com/ecoa-translation-services/";
const MEDICAL_DEVICE_URL = "https://www.sesen.com/medical-device-translation-services/";
const PHARMACOVIGILANCE_URL = "https://www.sesen.com/pharmacovigilance-translation-services/";
const HEALTHCARE_URL = "https://www.sesen.com/healthcare-hospital-translation-services/";

const platformGroups = [
  {
    icon: "trial",
    title: "Clinical Trial Management Systems",
    body:
      "Localize CTMS interfaces, investigator and site portals, dashboards, notifications, study-management functions, reporting workflows, and other multilingual content used by sponsors, CROs, investigators, and clinical operations teams.",
    link: "Clinical Trial Translation Services",
    href: CLINICAL_TRIAL_URL,
  },
  {
    icon: "database",
    title: "Electronic Data Capture & Clinical Applications",
    body:
      "Support EDC systems and other clinical applications used to collect, manage, review, and interact with study data, including interface strings, forms, messages, user guidance, and workflow terminology.",
  },
  {
    icon: "ehr",
    title: "EHR, EMR & Clinical Workflow Software",
    body:
      "Localize clinician-facing screens, patient-related information, workflow labels, alerts, navigation, and related healthcare content across electronic health record and clinical workflow environments.",
    link: "Healthcare & Hospital Translation Services",
    href: HEALTHCARE_URL,
  },
  {
    icon: "portal",
    title: "Patient & Clinician Portals",
    body:
      "Create multilingual portal experiences for patients, caregivers, clinicians, investigators, and healthcare teams across onboarding, navigation, forms, notifications, dashboards, and help content.",
    link: "Digital Health Localization Services",
    href: DIGITAL_HEALTH_URL,
  },
  {
    icon: "imaging",
    title: "Medical Imaging & Diagnostic Platforms",
    body:
      "Localize visualization interfaces, diagnostic applications, reporting modules, controls, system messages, and supporting content used across imaging and diagnostic workflows.",
  },
  {
    icon: "lab",
    title: "Laboratory Information Management Systems",
    body:
      "Support LIMS and related laboratory software with multilingual sample-management workflows, laboratory terminology, status messages, reporting functions, alerts, and instructions.",
  },
  {
    icon: "safety",
    title: "Pharmacovigilance & Safety Platforms",
    body:
      "Localize interfaces supporting adverse-event workflows, case processing, safety reporting, data review, notifications, dashboards, and other pharmacovigilance operations.",
    link: "Pharmacovigilance Translation Services",
    href: PHARMACOVIGILANCE_URL,
  },
  {
    icon: "decision",
    title: "Clinical Decision Support Systems",
    body:
      "Translate alerts, recommendations, user prompts, workflow content, clinical information, and other language presented through clinical decision-support environments.",
  },
  {
    icon: "device",
    title: "Medical Device & SaMD Interfaces",
    body:
      "Localize embedded interfaces, Software as a Medical Device, connected-device software, clinician dashboards, companion applications, prompts, controls, and other user-facing software content.",
    link: "Medical Device Translation Services",
    href: MEDICAL_DEVICE_URL,
  },
];

const lifecycleSteps = [
  {
    number: "01",
    title: "Internationalization Readiness",
    body:
      "Review localization-related considerations before translation begins, including translatable resources, hard-coded language, character constraints, text expansion, RTL requirements, writing-system support, and locale-dependent content.",
    tags: ["Resource readiness", "UI constraints", "Locale planning"],
  },
  {
    number: "02",
    title: "String Extraction & Localization Engineering",
    body:
      "Prepare structured software resources for translation while protecting variables, placeholders, tags, markup, IDs, metadata, and non-translatable technical elements.",
    tags: ["XML / JSON", "RESX / XLIFF", "PO / resource bundles"],
  },
  {
    number: "03",
    title: "Terminology & Language Assets",
    body:
      "Establish product-specific glossaries, termbases, translation memories, style guidance, approved translations, and other reusable language assets for the localization program.",
    tags: ["Termbases", "Translation memory", "Approved language"],
  },
  {
    number: "04",
    title: "Context-Aware Translation",
    body:
      "Translate with the product context in view: screen location, user role, workflow state, surrounding UI, character limits, variables, clinical meaning, and previously approved language.",
    tags: ["Screen context", "User role", "Clinical meaning"],
  },
  {
    number: "05",
    title: "UI & Locale Adaptation",
    body:
      "Account for text expansion, RTL languages, global writing systems, dates, numbers, units, and other language- or locale-dependent interface requirements.",
    tags: ["Text expansion", "RTL", "Locale formats"],
  },
  {
    number: "06",
    title: "Build Integration",
    body:
      "Return localized resources in the required structures and support workflows around development environments, translation platforms, APIs, connectors, and versioned releases where appropriate.",
    tags: ["Structured delivery", "Version alignment", "Workflow integration"],
  },
  {
    number: "07",
    title: "Linguistic & In-Context QA",
    body:
      "Review localized screenshots, interfaces, staging environments, or builds for context errors, terminology issues, missing strings, truncation, wrapping, display problems, placeholders, RTL presentation, and localization-related functional issues.",
    tags: ["Linguistic QA", "UI review", "Localization QA"],
  },
  {
    number: "08",
    title: "Multilingual Release",
    body:
      "Centralize multilingual project management, language assets, terminology, review, QA, and delivery for simultaneous or phased international product releases.",
    tags: ["Release coordination", "Language tracking", "Global delivery"],
  },
  {
    number: "09",
    title: "Continuous Localization",
    body:
      "Support new and changed strings, hotfixes, new modules, deprecated content, terminology updates, and additional languages without rebuilding the localization program for every release.",
    tags: ["Delta localization", "Reuse", "Ongoing releases"],
  },
];

const uiAdaptationItems = [
  {
    icon: "expand",
    title: "Text Expansion",
    body:
      "Review buttons, menus, tabs, fields, alerts, dialogs, table headers, tooltips, and mobile screens where translated text must work inside constrained UI components.",
  },
  {
    icon: "rtl",
    title: "Right-to-Left Languages",
    body:
      "Support RTL localization requirements and review language-direction, mixed-direction strings, alignment, navigation, and other localization-related interface behavior.",
  },
  {
    icon: "globe",
    title: "Unicode & Global Writing Systems",
    body:
      "Support Unicode and multi-byte content across Latin, Cyrillic, Asian, Middle Eastern, and other writing systems throughout extraction, translation, integration, and review.",
  },
  {
    icon: "calendar",
    title: "Locale-Specific Content",
    body:
      "Review dates, numbers, separators, measurements, and related conventions where these elements fall within the localization scope and intended locale.",
  },
];

const qaLayers = [
  {
    title: "Linguistic QA",
    body:
      "Review meaning, accuracy, medical and clinical terminology, grammar, consistency, style, user-facing clarity, and adherence to approved language.",
    checks: ["Accuracy & meaning", "Terminology", "Consistency & style"],
  },
  {
    title: "Technical Localization QA",
    body:
      "Review localization resources for issues involving variables, placeholders, tags, untranslated content, protected elements, file handling, and character integrity.",
    checks: ["Variables & placeholders", "Tags & protected content", "Resource integrity"],
  },
  {
    title: "In-Context & Functional Localization QA",
    body:
      "Review the localized product environment for truncation, wrapping, overlap, missing strings, incorrect context, inconsistent UI terminology, language-dependent interactions, RTL presentation, and locale-related issues.",
    checks: ["Display & layout", "Context & interaction", "Localized build review"],
  },
];

const aiCapabilities = [
  ["AI-Assisted Terminology", "Identify recurring terminology and support harmonization across large software and product content sets."],
  ["Intelligent Reuse", "Leverage approved translation memory and previous releases where appropriate."],
  ["Automated QA", "Check selected terminology, numbers, placeholders, variables, formatting, and structured quality elements."],
  ["Change Detection", "Identify new and modified content so localization effort can focus on what has changed."],
  ["AI-Assisted Translation", "Use SesenGPT and controlled AI-enabled workflows for appropriate content, with professional review based on project requirements."],
];

const qualityItems = [
  ["Specialized Professional Linguists", "Language teams are selected according to subject matter, content, target language, and project requirements."],
  ["ISO-Certified Quality Infrastructure", "Sesen maintains ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications as part of its quality infrastructure for multilingual life sciences services."],
  ["Terminology Governance", "Approved terminology, translation memories, reference materials, and reviewer feedback can be maintained as reusable program assets."],
  ["Controlled Review Workflows", "Programs can incorporate independent professional review, linguistic QA, automated QA, customer review, and in-context evaluation based on the agreed workflow."],
  ["Version & Change Management", "Recurring content can preserve approved language while focusing review on new or changed material."],
  ["Secure Multilingual Workflows", "Sesen supports enterprise life sciences organizations through controlled project workflows and secure technology infrastructure."],
];

const relatedServices = [
  {
    icon: "digital",
    title: "Digital Health Localization",
    body:
      "For patient apps, clinician experiences, digital therapeutics, telehealth, remote monitoring, connected care, portals, and broader digital-health ecosystems.",
    link: "Explore Digital Health Localization",
    href: DIGITAL_HEALTH_URL,
  },
  {
    icon: "assessment",
    title: "eCOA Translation & Linguistic Validation",
    body:
      "For ePRO, ClinRO, ObsRO, PerfO, questionnaires, diaries, and clinical outcome assessments requiring instrument-specific translation or formal linguistic validation.",
    link: "Explore eCOA Translation Services",
    href: ECOA_URL,
  },
  {
    icon: "device",
    title: "Medical Device & SaMD Translation",
    body:
      "For software that is part of a medical device or SaMD product ecosystem and must remain aligned with IFUs, labeling, safety content, training, and product terminology.",
    link: "Explore Medical Device Translation",
    href: MEDICAL_DEVICE_URL,
  },
  {
    icon: "trial",
    title: "Clinical Trial Translation",
    body:
      "For software localization that forms part of a larger global study program involving protocols, ICFs, sites, patient communication, clinical documentation, and trial operations.",
    link: "Explore Clinical Trial Translation",
    href: CLINICAL_TRIAL_URL,
  },
];

const differentiators = [
  ["Life Sciences Specialization", "Clinical and medical software requires more than general UI translation. Sesen brings specialized expertise across clinical development, healthcare, medical devices, pharmaceuticals, safety, regulatory content, and digital health."],
  ["Localization Engineering", "Support structured software resources and the technical requirements involved in preparing, protecting, processing, and returning multilingual content."],
  ["Context-Aware Translation", "Use screenshots, string metadata, user roles, workflow information, character limits, and other available context to improve product-level language decisions."],
  ["Terminology Governance", "Maintain approved terminology across software modules, releases, documentation, training, labeling, and related product content."],
  ["In-Context QA", "Evaluate language where patients, clinicians, researchers, and other users actually encounter it."],
  ["Continuous Localization", "Build localization around recurring updates, product versions, new features, additional languages, and ongoing global releases."],
];

const engagementSteps = [
  ["01", "Discovery", "Review the product, users, markets, languages, resource formats, existing terminology, release process, technical constraints, and quality requirements."],
  ["02", "Localization Setup", "Prepare software resources, translation memories, terminology, style guidance, contextual references, technical rules, and review requirements."],
  ["03", "Translation & Engineering", "Process structured resources and translate content with appropriate medical expertise, terminology control, context, and technical protections."],
  ["04", "Product Review", "Perform linguistic and localization QA using translated resources, screenshots, test environments, or builds according to the agreed workflow."],
  ["05", "Release & Update", "Deliver final language resources, capture approved terminology and reviewer feedback, and maintain language assets for future releases."],
];

const faqItems = [
  {
    q: "What are clinical and medical software localization services?",
    a:
      "Clinical and medical software localization adapts software language and related user-facing content for different languages and markets while accounting for medical terminology, product context, technical resource structures, interface constraints, locale conventions, and the user experience. Unlike document translation, software localization often involves structured resources, short contextual strings, placeholders and variables, iterative releases, UI review, and coordination with development workflows.",
  },
  {
    q: "What types of clinical and medical software does Sesen localize?",
    a:
      "Sesen supports CTMS, EDC platforms, EHR and EMR systems, clinical workflow applications, patient and clinician portals, medical imaging and diagnostic software, LIMS, pharmacovigilance and safety platforms, clinical decision-support systems, medical device interfaces, embedded software, SaMD, connected health platforms, and related web, mobile, desktop, and device interfaces.",
  },
  {
    q: "What software resource formats can Sesen support?",
    a:
      "Sesen can work with common structured localization resources such as XML, JSON, RESX, XLIFF, PO files, resource bundles, and other software localization formats. Localization engineers can help prepare translatable content, protect variables and placeholders, maintain required structure, and return localized resources for product reintegration.",
  },
  {
    q: "Can Sesen translate software when screenshots or contextual information are not available?",
    a:
      "Yes, depending on the content and resource structure. However, context can significantly improve translation decisions for short or ambiguous software strings. Where possible, Sesen recommends screenshots, string IDs, developer comments, user roles, character limits, screen references, surrounding content, or access to a representative build. In-context review can also identify issues after strings are integrated.",
  },
  {
    q: "Does Sesen support right-to-left and global writing systems?",
    a:
      "Yes. Sesen supports localization into RTL languages and languages using a wide range of writing systems. The workflow can account for text direction, character handling, text expansion, interface constraints, language display, line wrapping, and other localization-related considerations while coordinating software-level issues with the appropriate development teams.",
  },
  {
    q: "Can Sesen test localized clinical or medical software?",
    a:
      "Sesen provides linguistic QA, technical localization QA, and in-context UI review based on project scope. These services can identify mistranslations, inconsistent terminology, missing strings, truncation, text overlap, wrapping issues, incorrect display, context errors, RTL presentation issues, and other localization-related problems. They complement rather than replace the software verification, product validation, cybersecurity, performance, usability, and other technical testing performed by the appropriate development and quality teams unless broader testing support is specifically included in the engagement.",
  },
  {
    q: "Can Sesen support continuous localization and frequent software releases?",
    a:
      "Yes. Sesen supports ongoing localization programs involving incremental updates, new and modified strings, new features, hotfixes, product versions, additional modules, and new languages. Translation memory, terminology resources, automated QA, change-focused workflows, and centralized multilingual project management help preserve approved language while reducing unnecessary retranslation.",
  },
  {
    q: "How does Sesen keep software terminology consistent with documentation?",
    a:
      "Sesen can create and maintain centralized terminology resources covering approved product names, UI terms, features, medical terminology, device components, procedures, and other recurring language. These assets can be shared across software, help content, IFUs, labeling, training, clinical documentation, and related multilingual materials where appropriate.",
  },
  {
    q: "Does Sesen provide linguistic validation for eCOA and PRO instruments?",
    a:
      "Yes. When software contains clinical outcome assessments such as ePRO, ClinRO, ObsRO, or PerfO instruments, the required language workflow may extend beyond conventional software UI localization. Sesen provides specialized eCOA translation and linguistic-validation services that can include instrument-specific methodologies, reconciliation, back translation, cognitive debriefing support, harmonization, documentation, and electronic-screen review as appropriate.",
    link: "Explore eCOA Translation Services",
    href: ECOA_URL,
  },
  {
    q: "Does Sesen use AI for medical software localization?",
    a:
      "Sesen applies AI and automation selectively according to the content, language pair, existing language assets, project requirements, and intended use. SesenGPT and AI-assisted workflows can support terminology analysis, translation suggestions, repetitive-content processing, consistency checks, change detection, and automated QA, with professional linguistic review applied at the level required by the project.",
  },
];

function Icon({ name, size = 22, strokeWidth = 1.8 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "trial":
      return <svg {...common}><rect x="5" y="4" width="14" height="16" rx="2"/><path d="M9 4.5V3h6v1.5M8 9h8M8 13h5M8 17h7"/></svg>;
    case "database":
      return <svg {...common}><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>;
    case "ehr":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h3M7 13h3M14 9h3M14 13h3M10 17h4"/></svg>;
    case "portal":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5.5 16c.8-2 4.2-2 5 0M14 9h4M14 13h4M14 17h3"/></svg>;
    case "imaging":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="10" cy="12" r="4"/><path d="m13 9 4-2M13.5 15l3.5 2M10 8V5"/></svg>;
    case "lab":
      return <svg {...common}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M8 15h8"/></svg>;
    case "safety":
      return <svg {...common}><path d="M12 3 4.5 6v5.5c0 4.2 3 7.7 7.5 9.5 4.5-1.8 7.5-5.3 7.5-9.5V6L12 3Z"/><path d="M9 12h6M12 9v6"/></svg>;
    case "decision":
      return <svg {...common}><path d="M4 5h10a3 3 0 0 1 3 3v1M4 12h6a3 3 0 0 1 3 3v4M17 9l3-3M17 9l3 3M13 19l-3-3M13 19l3-3"/></svg>;
    case "device":
      return <svg {...common}><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M9 6h6M9 10h2M13 10h2M9 14h6M10 18h4"/></svg>;
    case "digital":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M7 12h3l1.5-3 2.3 6 1.5-3H18"/></svg>;
    case "assessment":
      return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="m8 8 1.5 1.5L12 7M13.5 9H16m-8 5 1.5 1.5L12 13m1.5 2H16"/></svg>;
    case "expand":
      return <svg {...common}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5M3 8l6 6M21 8l-6 6M3 16l6-6M21 16l-6-6"/></svg>;
    case "rtl":
      return <svg {...common}><path d="M20 6H8a4 4 0 0 0 0 8h9M7 18h13M4 18l-2-2 2-2M13 6v8"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12S9.7 18.5 12 21"/></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h3M14 14h3M7 18h3"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
    case "plus":
      return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":
      return <svg {...common}><path d="M5 12h14"/></svg>;
    case "code":
      return <svg {...common}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></svg>;
    case "context":
      return <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h4"/><circle cx="17" cy="16" r="2"/></svg>;
    case "term":
      return <svg {...common}><path d="M4 5h16M7 9h10M5 13h14M8 17h8M10 21h4"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`scms-button${secondary ? " scms-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={2} />
    </a>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="scms-editorial-link" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={16} strokeWidth={2} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="scms-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="presentation">
        <defs>
          <linearGradient id="scmsHeroSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5F7FF" />
            <stop offset="100%" stopColor="#EAF0FF" />
          </linearGradient>
          <filter id="scmsShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#17264D" floodOpacity="0.10" />
          </filter>
        </defs>
        <rect x="42" y="48" width="536" height="408" rx="34" fill="url(#scmsHeroSoft)" />
        <circle cx="514" cy="108" r="50" fill="#FFFFFF" opacity="0.72" />
        <circle cx="90" cy="390" r="32" fill="#DCE6FF" />

        <g filter="url(#scmsShadow)">
          <rect x="108" y="104" width="350" height="262" rx="22" fill="#FFFFFF" stroke="#DDE4F2" />
          <rect x="108" y="104" width="350" height="42" rx="22" fill="#F7F9FD" />
          <circle cx="136" cy="125" r="5" fill="#4B6FD8" />
          <circle cx="153" cy="125" r="5" fill="#A9B7D4" />
          <circle cx="170" cy="125" r="5" fill="#CDD6E7" />
          <rect x="134" y="169" width="88" height="150" rx="13" fill="#F7F9FD" />
          <rect x="154" y="188" width="48" height="8" rx="4" fill="#C9D5EF" />
          <rect x="154" y="212" width="37" height="8" rx="4" fill="#D8E1F1" />
          <rect x="154" y="236" width="43" height="8" rx="4" fill="#D8E1F1" />
          <rect x="154" y="260" width="33" height="8" rx="4" fill="#D8E1F1" />
          <rect x="247" y="169" width="178" height="62" rx="12" fill="#EDF2FF" />
          <rect x="265" y="185" width="86" height="9" rx="4.5" fill="#3659BB" opacity="0.82" />
          <rect x="265" y="204" width="132" height="8" rx="4" fill="#9EAFD1" />
          <rect x="247" y="248" width="82" height="70" rx="12" fill="#F7F9FD" stroke="#E1E7F3" />
          <rect x="343" y="248" width="82" height="70" rx="12" fill="#F7F9FD" stroke="#E1E7F3" />
          <circle cx="276" cy="275" r="10" fill="#4B6FD8" opacity="0.15" />
          <path d="M271 275h10M276 270v10" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
          <path d="M365 275h12M365 282h22" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g filter="url(#scmsShadow)">
          <rect x="390" y="178" width="146" height="150" rx="20" fill="#17264D" />
          <rect x="409" y="198" width="78" height="8" rx="4" fill="#C8D6FF" />
          <rect x="409" y="220" width="103" height="8" rx="4" fill="#7589BB" />
          <rect x="409" y="253" width="108" height="38" rx="12" fill="#253F8F" />
          <circle cx="425" cy="272" r="6" fill="#FFFFFF" />
          <rect x="438" y="267" width="61" height="9" rx="4.5" fill="#FFFFFF" opacity="0.86" />
        </g>

        <g>
          <circle cx="92" cy="166" r="28" fill="#FFFFFF" stroke="#DDE4F2" />
          <path d="M82 167h20M86 160l-6 7 6 7M98 160l6 7-6 7" stroke="#4B6FD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M119 166h38" stroke="#91A5D3" strokeWidth="2" strokeDasharray="5 7" />
        </g>

        <g>
          <circle cx="506" cy="372" r="34" fill="#FFFFFF" stroke="#DDE4F2" />
          <path d="M493 372h26M506 359v26" stroke="#4B6FD8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M458 342c24 6 36 14 47 30" stroke="#91A5D3" strokeWidth="2" strokeDasharray="6 8" fill="none" />
        </g>

        <g>
          <rect x="166" y="390" width="205" height="42" rx="21" fill="#FFFFFF" stroke="#DDE4F2" />
          <circle cx="188" cy="411" r="9" fill="#EAF0FF" />
          <path d="m184 411 3 3 5-6" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="205" y="405" width="118" height="8" rx="4" fill="#8799BE" />
        </g>
      </svg>
    </div>
  );
}

function ContextVisual() {
  return (
    <div className="scms-context-visual" aria-hidden="true">
      <div className="scms-context-toolbar">
        <span className="scms-context-dot" />
        <span className="scms-context-dot" />
        <span className="scms-context-dot" />
        <span className="scms-context-toolbar-title">Patient Workflow</span>
      </div>
      <div className="scms-context-screen">
        <div className="scms-context-sidebar">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="scms-context-main">
          <div className="scms-context-chip">Patient status</div>
          <div className="scms-context-title">Discharge Patient</div>
          <div className="scms-context-line" />
          <div className="scms-context-line short" />
          <div className="scms-context-action">DISCHARGE</div>
        </div>
        <div className="scms-context-callout">
          <span>Context</span>
          <strong>Action</strong>
        </div>
      </div>
      <div className="scms-context-alt-row">
        <div><span>Clinical Summary</span><strong>Discharge Instructions</strong></div>
        <div><span>Workflow Menu</span><strong>Discharge</strong></div>
      </div>
    </div>
  );
}

function PipelineDiagram() {
  const columns = [
    { label: "SOURCE RESOURCES", items: ["XML", "JSON", "RESX", "XLIFF", "PO"] },
    { label: "LOCALIZATION", items: ["Parsing", "Terminology", "Translation", "Automated QA", "Review"] },
    { label: "PRODUCT BUILD", items: ["Web", "Mobile", "Desktop", "Embedded"] },
    { label: "IN-CONTEXT QA", items: ["Screens", "Display", "Language"] },
    { label: "GLOBAL RELEASE", items: ["Languages", "Versions", "Delivery"] },
  ];

  return (
    <div className="scms-pipeline" role="img" aria-label="Software localization engineering workflow">
      {columns.map((column, index) => (
        <React.Fragment key={column.label}>
          <div className="scms-pipeline-stage">
            <div className="scms-pipeline-label">{column.label}</div>
            <div className="scms-pipeline-items">
              {column.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          {index < columns.length - 1 && <div className="scms-pipeline-arrow" aria-hidden="true"><Icon name="arrow" size={22} /></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function ReleaseRail() {
  const releases = [
    ["Current Release", "New strings", "Changed strings", "Removed strings"],
    ["Next Release", "Feature updates", "UI revisions", "Terminology changes"],
    ["Hotfix", "Priority strings", "Focused review", "Rapid delivery"],
    ["New Module", "New workflows", "New content", "Language reuse"],
    ["Major Release", "Expanded scope", "Additional language", "Global rollout"],
  ];

  return (
    <div className="scms-release-rail" role="img" aria-label="Example continuous software localization release cycle">
      {releases.map((release, index) => (
        <div className="scms-release-node" key={release[0]}>
          <div className="scms-release-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
          <div className="scms-release-copy">
            <h3>{release[0]}</h3>
            <div className="scms-release-tags">
              {release.slice(1).map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="scms-faq-list">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        const answerId = `scms-faq-answer-${index}`;
        const buttonId = `scms-faq-button-${index}`;
        return (
          <div className={`scms-faq-item${open ? " is-open" : ""}`} key={item.q}>
            <button
              id={buttonId}
              className="scms-faq-button"
              type="button"
              aria-expanded={open}
              aria-controls={answerId}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.q}</span>
              <span className="scms-faq-icon" aria-hidden="true"><Icon name={open ? "minus" : "plus"} size={19} strokeWidth={2} /></span>
            </button>
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className="scms-faq-answer"
              hidden={!open}
            >
              <p>{item.a}</p>
              {item.link && item.href && <EditorialLink href={item.href}>{item.link}</EditorialLink>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = `
.scms-page {
  --scms-blue: #4B6FD8;
  --scms-blue-dark: #3659BB;
  --scms-deep-blue: #253F8F;
  --scms-mid-blue: #6F8BE1;
  --scms-soft-blue: #EAF0FF;
  --scms-pale-blue: #F5F7FF;
  --scms-navy: #17264D;
  --scms-ink: #111827;
  --scms-body: #46546D;
  --scms-muted: #68758B;
  --scms-border: #DDE4F2;
  --scms-divider: #E9EEF8;
  --scms-surface: #F7F9FD;
  --scms-white: #FFFFFF;
  --scms-light-blue: #C8D6FF;
  color: var(--scms-body);
  background: var(--scms-white);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow-x: clip;
}

.scms-page,
.scms-page * {
  box-sizing: border-box;
}

.scms-page .scms-shell {
  width: min(1280px, 100%);
  margin: 0 auto;
  padding-left: 56px;
  padding-right: 56px;
}

.scms-page .scms-section {
  padding: 96px 0;
}

.scms-page .scms-section-soft {
  background: var(--scms-surface);
}

.scms-page .scms-section-blue-soft {
  background: var(--scms-pale-blue);
}

.scms-page .scms-section-head {
  max-width: 800px;
  margin-bottom: 48px;
}

.scms-page .scms-section-head-centered {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.scms-page .scms-eyebrow {
  margin: 0 0 13px;
  color: var(--scms-blue-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.35;
  text-transform: uppercase;
}

.scms-page h1,
.scms-page h2,
.scms-page h3 {
  margin-top: 0;
  color: var(--scms-navy);
  font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 500;
}

.scms-page h1 {
  max-width: 680px;
  margin-bottom: 22px;
  font-size: 48px;
  letter-spacing: -0.5px;
  line-height: 1.3;
}

.scms-page h2 {
  margin-bottom: 18px;
  font-size: 36px;
  letter-spacing: 0;
  line-height: 1.3;
}

.scms-page h3 {
  margin-bottom: 11px;
  font-size: 22px;
  line-height: 1.3;
}

.scms-page p {
  margin-top: 0;
}

.scms-page a {
  color: inherit;
}

.scms-page a:focus-visible,
.scms-page button:focus-visible {
  outline: 3px solid rgba(75, 111, 216, 0.33);
  outline-offset: 4px;
}

.scms-page .scms-lead {
  max-width: 780px;
  color: #293954;
  font-size: 19px;
  line-height: 1.7;
}

.scms-page .scms-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.scms-page .scms-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 26px;
  border: 1px solid var(--scms-blue);
  border-radius: 999px;
  background: var(--scms-blue);
  color: var(--scms-white) !important;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.035em;
  line-height: 1;
  text-decoration: none;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}

.scms-page .scms-button:visited,
.scms-page .scms-button:hover,
.scms-page .scms-button:active,
.scms-page .scms-button:focus-visible {
  color: var(--scms-white) !important;
}

.scms-page .scms-button:hover {
  border-color: var(--scms-blue-dark);
  background: var(--scms-blue-dark);
  transform: translateY(-1px);
}

.scms-page .scms-button-secondary {
  border-color: #C9D3E7;
  background: var(--scms-white);
  color: var(--scms-ink) !important;
}

.scms-page .scms-button-secondary:visited,
.scms-page .scms-button-secondary:hover,
.scms-page .scms-button-secondary:active,
.scms-page .scms-button-secondary:focus-visible {
  color: var(--scms-ink) !important;
}

.scms-page .scms-button-secondary:hover {
  border-color: #ABBCE0;
  background: var(--scms-soft-blue);
}

.scms-page .scms-editorial-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--scms-blue-dark);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
  text-decoration: none;
}

.scms-page .scms-editorial-link:hover span:first-child {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.scms-page .scms-hero {
  position: relative;
  padding: 92px 0 94px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
  overflow: hidden;
}

.scms-page .scms-hero::after {
  position: absolute;
  right: -140px;
  bottom: -220px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: rgba(234, 240, 255, 0.72);
  content: "";
  pointer-events: none;
}

.scms-page .scms-hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
  align-items: center;
  gap: 54px;
}

.scms-page .scms-hero-copy {
  max-width: 690px;
}

.scms-page .scms-hero-value {
  max-width: 680px;
  margin: -2px 0 16px;
  color: var(--scms-blue-dark);
  font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 23px;
  font-weight: 500;
  line-height: 1.4;
}

.scms-page .scms-hero-lead {
  max-width: 680px;
  margin-bottom: 18px;
  color: #293954;
  font-size: 19px;
  line-height: 1.68;
}

.scms-page .scms-hero-body {
  max-width: 680px;
  margin-bottom: 0;
  color: var(--scms-body);
  font-size: 16px;
  line-height: 1.72;
}

.scms-page .scms-hero-art {
  width: 100%;
  max-width: 590px;
  justify-self: end;
}

.scms-page .scms-hero-art svg {
  display: block;
  width: 100%;
  height: auto;
}

.scms-page .scms-trust-band {
  border-top: 1px solid var(--scms-border);
  border-bottom: 1px solid var(--scms-border);
  background: var(--scms-white);
}

.scms-page .scms-trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.scms-page .scms-trust-item {
  display: flex;
  min-height: 90px;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  border-right: 1px solid var(--scms-divider);
  color: var(--scms-navy);
  font-size: 15px;
  font-weight: 700;
}

.scms-page .scms-trust-item:last-child {
  border-right: 0;
}

.scms-page .scms-trust-icon {
  display: inline-flex;
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-beyond-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
  gap: 72px;
  align-items: start;
}

.scms-page .scms-beyond-copy {
  max-width: 620px;
}

.scms-page .scms-beyond-copy p:last-child {
  margin-bottom: 0;
}

.scms-page .scms-four-principles {
  border-top: 1px solid var(--scms-border);
}

.scms-page .scms-principle-row {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-principle-icon {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-principle-row h3 {
  margin-bottom: 5px;
  font-size: 19px;
}

.scms-page .scms-principle-row p {
  margin-bottom: 0;
  color: var(--scms-body);
  font-size: 16px;
}

.scms-page .scms-platform-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--scms-border);
  border-left: 1px solid var(--scms-border);
}

.scms-page .scms-platform-item {
  min-height: 300px;
  padding: 30px 28px 28px;
  border-right: 1px solid var(--scms-border);
  border-bottom: 1px solid var(--scms-border);
  background: rgba(255, 255, 255, 0.72);
}

.scms-page .scms-platform-icon {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  border-radius: 13px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-platform-item h3 {
  font-size: 21px;
}

.scms-page .scms-platform-item p {
  min-height: 132px;
  margin-bottom: 18px;
  font-size: 16px;
}

.scms-page .scms-lifecycle-wrap {
  border: 1px solid #D5DFF2;
  border-radius: 28px;
  background: var(--scms-white);
  overflow: hidden;
}

.scms-page .scms-lifecycle-step {
  display: grid;
  grid-template-columns: 84px minmax(220px, 0.66fr) minmax(0, 1.34fr);
  gap: 28px;
  align-items: start;
  padding: 28px 32px;
  border-bottom: 1px solid var(--scms-divider);
}

.scms-page .scms-lifecycle-step:last-child {
  border-bottom: 0;
}

.scms-page .scms-lifecycle-step:hover {
  background: #FBFCFF;
}

.scms-page .scms-step-number {
  color: var(--scms-blue-dark);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.scms-page .scms-lifecycle-step h3 {
  margin-bottom: 0;
  font-size: 21px;
}

.scms-page .scms-step-detail p {
  margin-bottom: 14px;
  font-size: 16px;
}

.scms-page .scms-tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.scms-page .scms-tag-row span {
  padding: 6px 10px;
  border: 1px solid #D6E0F2;
  border-radius: 999px;
  background: #FBFCFF;
  color: #52627D;
  font-size: 13px;
  line-height: 1.2;
}

.scms-page .scms-context-section {
  background: var(--scms-navy);
  color: #E7ECF7;
}

.scms-page .scms-context-section h2,
.scms-page .scms-context-section h3 {
  color: var(--scms-white);
}

.scms-page .scms-context-section .scms-eyebrow {
  color: var(--scms-light-blue);
}

.scms-page .scms-context-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(480px, 1.1fr);
  gap: 70px;
  align-items: center;
}

.scms-page .scms-context-copy {
  max-width: 600px;
}

.scms-page .scms-context-copy > p {
  color: #D5DDF0;
  font-size: 17px;
}

.scms-page .scms-context-axes {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin-top: 28px;
  border-top: 1px solid rgba(200, 214, 255, 0.22);
  border-left: 1px solid rgba(200, 214, 255, 0.22);
}

.scms-page .scms-context-axis {
  padding: 18px;
  border-right: 1px solid rgba(200, 214, 255, 0.22);
  border-bottom: 1px solid rgba(200, 214, 255, 0.22);
}

.scms-page .scms-context-axis:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.scms-page .scms-context-axis strong {
  display: block;
  margin-bottom: 4px;
  color: var(--scms-white);
  font-size: 14px;
}

.scms-page .scms-context-axis span {
  color: #BDC8E2;
  font-size: 14px;
}

.scms-page .scms-context-visual {
  position: relative;
  border: 1px solid rgba(200, 214, 255, 0.22);
  border-radius: 26px;
  background: #FFFFFF;
  box-shadow: 0 28px 60px rgba(7, 16, 41, 0.26);
  overflow: hidden;
}

.scms-page .scms-context-toolbar {
  display: flex;
  height: 46px;
  align-items: center;
  gap: 7px;
  padding: 0 18px;
  border-bottom: 1px solid var(--scms-divider);
  background: #F7F9FD;
}

.scms-page .scms-context-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #C6D1E5;
}

.scms-page .scms-context-dot:first-child {
  background: var(--scms-blue);
}

.scms-page .scms-context-toolbar-title {
  margin-left: 8px;
  color: #53617A;
  font-size: 12px;
  font-weight: 600;
}

.scms-page .scms-context-screen {
  position: relative;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  min-height: 250px;
}

.scms-page .scms-context-sidebar {
  padding: 28px 20px;
  background: #F7F9FD;
}

.scms-page .scms-context-sidebar span {
  display: block;
  width: 30px;
  height: 7px;
  margin-bottom: 17px;
  border-radius: 4px;
  background: #D7E0F0;
}

.scms-page .scms-context-main {
  padding: 38px 34px;
}

.scms-page .scms-context-chip {
  display: inline-block;
  margin-bottom: 13px;
  padding: 5px 9px;
  border-radius: 999px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.scms-page .scms-context-title {
  margin-bottom: 20px;
  color: var(--scms-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 24px;
  font-weight: 500;
}

.scms-page .scms-context-main .scms-context-line {
  width: 88%;
  height: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #DDE4F2;
}

.scms-page .scms-context-main .scms-context-line.short {
  width: 62%;
}

.scms-page .scms-context-action {
  display: inline-flex;
  height: 38px;
  align-items: center;
  margin-top: 20px;
  padding: 0 19px;
  border-radius: 999px;
  background: var(--scms-blue);
  color: var(--scms-white);
  font-size: 11px;
  font-weight: 700;
}

.scms-page .scms-context-callout {
  position: absolute;
  top: 126px;
  right: 16px;
  width: 94px;
  padding: 10px 12px;
  border: 1px solid #BCD0FF;
  border-radius: 12px;
  background: #F4F7FF;
  box-shadow: 0 10px 24px rgba(37, 63, 143, 0.12);
}

.scms-page .scms-context-callout span,
.scms-page .scms-context-callout strong {
  display: block;
}

.scms-page .scms-context-callout span {
  color: var(--scms-muted);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.scms-page .scms-context-callout strong {
  color: var(--scms-blue-dark);
  font-size: 13px;
}

.scms-page .scms-context-alt-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--scms-divider);
}

.scms-page .scms-context-alt-row > div {
  padding: 16px 20px;
}

.scms-page .scms-context-alt-row > div:first-child {
  border-right: 1px solid var(--scms-divider);
}

.scms-page .scms-context-alt-row span,
.scms-page .scms-context-alt-row strong {
  display: block;
}

.scms-page .scms-context-alt-row span {
  margin-bottom: 3px;
  color: var(--scms-muted);
  font-size: 11px;
}

.scms-page .scms-context-alt-row strong {
  color: var(--scms-navy);
  font-size: 13px;
}

.scms-page .scms-terminology-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  gap: 76px;
  align-items: center;
}

.scms-page .scms-terminology-copy {
  max-width: 620px;
}

.scms-page .scms-terminology-copy p {
  font-size: 17px;
}

.scms-page .scms-term-benefits {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;
  margin-top: 28px;
}

.scms-page .scms-term-benefit {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 10px;
  align-items: start;
  font-size: 16px;
}

.scms-page .scms-term-benefit svg {
  margin-top: 4px;
  color: var(--scms-blue-dark);
}

.scms-page .scms-ecosystem-diagram {
  position: relative;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scms-page .scms-ecosystem-center {
  position: relative;
  z-index: 2;
  display: flex;
  width: 170px;
  height: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #C9D6EF;
  border-radius: 50%;
  background: var(--scms-white);
  box-shadow: 0 20px 46px rgba(23, 38, 77, 0.10);
  color: var(--scms-navy);
  text-align: center;
}

.scms-page .scms-ecosystem-center .scms-term-center-icon {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 13px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-ecosystem-center strong {
  max-width: 120px;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
}

.scms-page .scms-ecosystem-node {
  position: absolute;
  z-index: 2;
  display: flex;
  width: 170px;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: 1px solid var(--scms-border);
  border-radius: 16px;
  background: var(--scms-white);
  color: var(--scms-navy);
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.scms-page .scms-ecosystem-node.n1 { top: 16px; left: calc(50% - 85px); }
.scms-page .scms-ecosystem-node.n2 { top: 96px; right: 12px; }
.scms-page .scms-ecosystem-node.n3 { top: 218px; right: -8px; }
.scms-page .scms-ecosystem-node.n4 { bottom: 74px; right: 54px; }
.scms-page .scms-ecosystem-node.n5 { bottom: 16px; left: calc(50% - 85px); }
.scms-page .scms-ecosystem-node.n6 { bottom: 74px; left: 54px; }
.scms-page .scms-ecosystem-node.n7 { top: 218px; left: -8px; }

.scms-page .scms-ecosystem-ring {
  position: absolute;
  z-index: 1;
  width: 360px;
  height: 360px;
  border: 1px dashed #AABCE0;
  border-radius: 50%;
}

.scms-page .scms-engineering-panel {
  padding: 42px;
  border: 1px solid #D5DFF2;
  border-radius: 28px;
  background: var(--scms-white);
}

.scms-page .scms-pipeline {
  display: grid;
  grid-template-columns: 1fr 42px 1fr 42px 1fr 42px 1fr 42px 1fr;
  align-items: stretch;
}

.scms-page .scms-pipeline-stage {
  min-width: 0;
  padding: 22px 18px;
  border: 1px solid var(--scms-border);
  border-radius: 18px;
  background: #FBFCFF;
}

.scms-page .scms-pipeline-label {
  min-height: 42px;
  margin-bottom: 16px;
  color: var(--scms-navy);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.35;
}

.scms-page .scms-pipeline-items {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.scms-page .scms-pipeline-items span {
  padding: 7px 9px;
  border-radius: 9px;
  background: var(--scms-soft-blue);
  color: #3E5072;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
}

.scms-page .scms-pipeline-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--scms-blue);
}

.scms-page .scms-engineering-benefits {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 34px;
  border-top: 1px solid var(--scms-border);
}

.scms-page .scms-engineering-benefit {
  padding: 24px 22px 0 0;
}

.scms-page .scms-engineering-benefit + .scms-engineering-benefit {
  padding-left: 22px;
  border-left: 1px solid var(--scms-border);
}

.scms-page .scms-engineering-benefit h3 {
  margin-bottom: 8px;
  font-size: 18px;
}

.scms-page .scms-engineering-benefit p {
  margin-bottom: 0;
  font-size: 16px;
}

.scms-page .scms-ui-list {
  border-top: 1px solid var(--scms-border);
}

.scms-page .scms-ui-row {
  display: grid;
  grid-template-columns: 58px minmax(230px, 0.48fr) minmax(0, 1.52fr);
  gap: 22px;
  align-items: start;
  padding: 27px 0;
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-ui-icon {
  display: inline-flex;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-ui-row h3 {
  margin: 7px 0 0;
  font-size: 21px;
}

.scms-page .scms-ui-row p {
  margin-bottom: 0;
  font-size: 16px;
}

.scms-page .scms-qa-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid #D5DFF2;
  border-radius: 28px;
  background: var(--scms-white);
  overflow: hidden;
}

.scms-page .scms-qa-column {
  padding: 32px 28px;
}

.scms-page .scms-qa-column + .scms-qa-column {
  border-left: 1px solid var(--scms-border);
}

.scms-page .scms-qa-column h3 {
  margin-bottom: 12px;
  font-size: 22px;
}

.scms-page .scms-qa-column p {
  min-height: 136px;
  font-size: 16px;
}

.scms-page .scms-check-list {
  display: grid;
  gap: 10px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;
}

.scms-page .scms-check-list li {
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 9px;
  color: #53617A;
  font-size: 14px;
}

.scms-page .scms-check-list svg {
  margin-top: 3px;
  color: var(--scms-blue-dark);
}

.scms-page .scms-scope-note {
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 16px;
  max-width: 1020px;
  margin: 34px auto 0;
  padding: 22px 24px;
  border: 1px solid #CFDBF2;
  border-radius: 18px;
  background: var(--scms-pale-blue);
}

.scms-page .scms-scope-note-icon {
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--scms-white);
  color: var(--scms-blue-dark);
}

.scms-page .scms-scope-note p {
  margin-bottom: 0;
  color: #40506C;
  font-size: 16px;
}

.scms-page .scms-continuous-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(520px, 1.18fr);
  gap: 72px;
  align-items: start;
}

.scms-page .scms-continuous-copy {
  position: sticky;
  top: 32px;
}

.scms-page .scms-continuous-copy p {
  font-size: 17px;
}

.scms-page .scms-continuous-points {
  display: grid;
  gap: 12px;
  margin-top: 26px;
}

.scms-page .scms-continuous-point {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 10px;
  align-items: start;
  font-size: 16px;
}

.scms-page .scms-continuous-point svg {
  margin-top: 3px;
  color: var(--scms-blue-dark);
}

.scms-page .scms-release-rail {
  position: relative;
  padding-left: 24px;
}

.scms-page .scms-release-rail::before {
  position: absolute;
  top: 22px;
  bottom: 22px;
  left: 43px;
  width: 2px;
  background: #CBD7EE;
  content: "";
}

.scms-page .scms-release-node {
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 22px;
  padding-bottom: 24px;
}

.scms-page .scms-release-node:last-child {
  padding-bottom: 0;
}

.scms-page .scms-release-marker {
  position: relative;
  z-index: 1;
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--scms-pale-blue);
  border-radius: 50%;
  background: var(--scms-blue);
  color: var(--scms-white);
}

.scms-page .scms-release-marker span {
  font-size: 10px;
  font-weight: 700;
}

.scms-page .scms-release-copy {
  padding: 19px 22px 20px;
  border: 1px solid var(--scms-border);
  border-radius: 18px;
  background: var(--scms-white);
}

.scms-page .scms-release-copy h3 {
  margin-bottom: 12px;
  font-size: 20px;
}

.scms-page .scms-release-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.scms-page .scms-release-tags span {
  padding: 6px 9px;
  border-radius: 999px;
  background: var(--scms-soft-blue);
  color: #546582;
  font-size: 12px;
  line-height: 1.2;
}

.scms-page .scms-ai-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
  gap: 72px;
  align-items: start;
}

.scms-page .scms-ai-copy {
  max-width: 600px;
}

.scms-page .scms-ai-copy p {
  font-size: 17px;
}

.scms-page .scms-ai-list {
  border-top: 1px solid var(--scms-border);
}

.scms-page .scms-ai-row {
  display: grid;
  grid-template-columns: 44px minmax(210px, 0.54fr) minmax(0, 1.46fr);
  gap: 18px;
  padding: 20px 0;
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-ai-icon {
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-ai-row strong {
  color: var(--scms-navy);
  font-size: 16px;
}

.scms-page .scms-ai-row span:last-child {
  color: var(--scms-body);
  font-size: 16px;
}

.scms-page .scms-ai-note {
  margin-top: 26px;
  padding: 18px 20px;
  border-left: 2px solid var(--scms-blue);
  background: #FBFCFF;
  color: #40506C;
  font-size: 16px;
}

.scms-page .scms-quality-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--scms-border);
  border-left: 1px solid var(--scms-border);
}

.scms-page .scms-quality-item {
  padding: 28px 30px;
  border-right: 1px solid var(--scms-border);
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-quality-item h3 {
  margin-bottom: 8px;
  font-size: 20px;
}

.scms-page .scms-quality-item p {
  margin-bottom: 0;
  font-size: 16px;
}

.scms-page .scms-related-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.scms-page .scms-related-card {
  padding: 30px;
  border: 1px solid var(--scms-border);
  border-radius: 22px;
  background: var(--scms-white);
}

.scms-page .scms-related-icon {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  border-radius: 13px;
  background: var(--scms-soft-blue);
  color: var(--scms-blue-dark);
}

.scms-page .scms-related-card h3 {
  font-size: 21px;
}

.scms-page .scms-related-card p {
  margin-bottom: 18px;
  font-size: 16px;
}

.scms-page .scms-diff-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-top: 1px solid var(--scms-border);
  border-left: 1px solid var(--scms-border);
}

.scms-page .scms-diff-item {
  min-height: 228px;
  padding: 28px 28px 26px;
  border-right: 1px solid var(--scms-border);
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-diff-mark {
  display: block;
  width: 34px;
  height: 2px;
  margin-bottom: 30px;
  background: var(--scms-blue);
}

.scms-page .scms-diff-item h3 {
  font-size: 20px;
}

.scms-page .scms-diff-item p {
  margin-bottom: 0;
  font-size: 16px;
}

.scms-page .scms-engagement {
  background: var(--scms-navy);
  color: #DCE4F4;
}

.scms-page .scms-engagement h2,
.scms-page .scms-engagement h3 {
  color: var(--scms-white);
}

.scms-page .scms-engagement .scms-eyebrow {
  color: var(--scms-light-blue);
}

.scms-page .scms-engagement-intro {
  max-width: 760px;
  color: #D4DDEF;
  font-size: 17px;
}

.scms-page .scms-engagement-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 46px;
  border-top: 1px solid rgba(200, 214, 255, 0.24);
  border-left: 1px solid rgba(200, 214, 255, 0.24);
}

.scms-page .scms-engagement-step {
  min-height: 268px;
  padding: 28px 22px;
  border-right: 1px solid rgba(200, 214, 255, 0.24);
  border-bottom: 1px solid rgba(200, 214, 255, 0.24);
}

.scms-page .scms-engagement-number {
  display: block;
  margin-bottom: 36px;
  color: var(--scms-light-blue);
  font-size: 13px;
  font-weight: 700;
}

.scms-page .scms-engagement-step h3 {
  font-size: 20px;
}

.scms-page .scms-engagement-step p {
  margin-bottom: 0;
  color: #C8D2E7;
  font-size: 16px;
}

.scms-page .scms-faq-list {
  max-width: 1040px;
  margin: 0 auto;
  border-top: 1px solid var(--scms-border);
}

.scms-page .scms-faq-item {
  border-bottom: 1px solid var(--scms-border);
}

.scms-page .scms-faq-button {
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr) 38px;
  gap: 20px;
  align-items: center;
  padding: 23px 0;
  border: 0;
  background: transparent;
  color: var(--scms-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
}

.scms-page .scms-faq-icon {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  justify-self: end;
  border: 1px solid #CBD6EB;
  border-radius: 50%;
  color: var(--scms-blue-dark);
}

.scms-page .scms-faq-answer {
  max-width: 840px;
  padding: 0 58px 24px 0;
}

.scms-page .scms-faq-answer p {
  margin-bottom: 12px;
  font-size: 16px;
}

.scms-page .scms-final-cta {
  padding: 86px 0;
  background: linear-gradient(135deg, #253F8F 0%, #4B6FD8 100%);
  color: var(--scms-white);
}

.scms-page .scms-final-inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 50px;
  align-items: center;
}

.scms-page .scms-final-copy {
  max-width: 800px;
}

.scms-page .scms-final-cta h2 {
  margin-bottom: 16px;
  color: var(--scms-white);
}

.scms-page .scms-final-cta p {
  margin-bottom: 0;
  color: #EDF2FF;
  font-size: 18px;
}

.scms-page .scms-final-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}

.scms-page .scms-final-actions .scms-button {
  border-color: var(--scms-white);
  background: var(--scms-white);
  color: var(--scms-ink) !important;
}

.scms-page .scms-final-actions .scms-button:visited,
.scms-page .scms-final-actions .scms-button:hover,
.scms-page .scms-final-actions .scms-button:active,
.scms-page .scms-final-actions .scms-button:focus-visible {
  color: var(--scms-ink) !important;
}

.scms-page .scms-final-actions .scms-button:hover {
  border-color: var(--scms-white);
  background: var(--scms-soft-blue);
}

.scms-page .scms-final-actions .scms-button-secondary {
  border-color: #C8D6FF;
  background: var(--scms-soft-blue);
  color: var(--scms-ink) !important;
}

.scms-page .scms-final-actions .scms-button-secondary:visited,
.scms-page .scms-final-actions .scms-button-secondary:hover,
.scms-page .scms-final-actions .scms-button-secondary:active,
.scms-page .scms-final-actions .scms-button-secondary:focus-visible {
  color: var(--scms-ink) !important;
}

.scms-page .scms-final-actions .scms-button-secondary:hover {
  border-color: #FFFFFF;
  background: #FFFFFF;
}

@media (max-width: 1120px) {
  .scms-page .scms-shell {
    padding-left: 40px;
    padding-right: 40px;
  }

  .scms-page .scms-hero-grid {
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
    gap: 40px;
  }

  .scms-page .scms-platform-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scms-page .scms-platform-item p {
    min-height: 0;
  }

  .scms-page .scms-context-grid,
  .scms-page .scms-terminology-grid,
  .scms-page .scms-continuous-grid,
  .scms-page .scms-ai-grid {
    gap: 50px;
  }

  .scms-page .scms-pipeline {
    grid-template-columns: 1fr 34px 1fr 34px 1fr;
    gap: 0;
  }

  .scms-page .scms-pipeline-stage:nth-of-type(n+6),
  .scms-page .scms-pipeline-arrow:nth-of-type(n+6) {
    margin-top: 16px;
  }

  .scms-page .scms-pipeline {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .scms-page .scms-pipeline-stage {
    flex: 1 1 170px;
  }

  .scms-page .scms-pipeline-arrow {
    flex: 0 0 24px;
  }

  .scms-page .scms-engagement-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .scms-page .scms-shell {
    padding-left: 30px;
    padding-right: 30px;
  }

  .scms-page .scms-section {
    padding: 82px 0;
  }

  .scms-page .scms-hero {
    padding: 76px 0 80px;
  }

  .scms-page .scms-hero-grid,
  .scms-page .scms-beyond-grid,
  .scms-page .scms-context-grid,
  .scms-page .scms-terminology-grid,
  .scms-page .scms-continuous-grid,
  .scms-page .scms-ai-grid,
  .scms-page .scms-final-inner {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-hero-art {
    max-width: 620px;
    justify-self: center;
  }

  .scms-page .scms-trust-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .scms-page .scms-trust-item:nth-child(2) {
    border-right: 0;
  }

  .scms-page .scms-trust-item:nth-child(-n+2) {
    border-bottom: 1px solid var(--scms-divider);
  }

  .scms-page .scms-lifecycle-step {
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 10px 18px;
    padding: 26px 24px;
  }

  .scms-page .scms-step-detail {
    grid-column: 2;
  }

  .scms-page .scms-context-visual {
    max-width: 680px;
  }

  .scms-page .scms-ecosystem-diagram {
    max-width: 620px;
    margin: 0 auto;
  }

  .scms-page .scms-pipeline {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .scms-page .scms-pipeline-stage {
    width: 100%;
  }

  .scms-page .scms-pipeline-arrow {
    min-height: 30px;
    transform: rotate(90deg);
  }

  .scms-page .scms-engagement-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scms-page .scms-engineering-benefits {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scms-page .scms-engineering-benefit:nth-child(3) {
    padding-left: 0;
    border-left: 0;
  }

  .scms-page .scms-engineering-benefit:nth-child(n+3) {
    margin-top: 22px;
    padding-top: 22px;
    border-top: 1px solid var(--scms-border);
  }

  .scms-page .scms-qa-grid {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-qa-column + .scms-qa-column {
    border-top: 1px solid var(--scms-border);
    border-left: 0;
  }

  .scms-page .scms-qa-column p {
    min-height: 0;
  }

  .scms-page .scms-diff-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .scms-page .scms-continuous-copy {
    position: static;
  }

  .scms-page .scms-final-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 700px) {
  .scms-page .scms-shell {
    padding-left: 20px;
    padding-right: 20px;
  }

  .scms-page .scms-section {
    padding: 68px 0;
  }

  .scms-page .scms-section-head {
    margin-bottom: 36px;
  }

  .scms-page h1 {
    font-size: 42px;
    line-height: 1.22;
  }

  .scms-page h2 {
    font-size: 32px;
    line-height: 1.28;
  }

  .scms-page h3 {
    line-height: 1.32;
  }

  .scms-page .scms-hero {
    padding: 64px 0 70px;
  }

  .scms-page .scms-hero-grid {
    gap: 40px;
  }

  .scms-page .scms-hero-value {
    font-size: 21px;
  }

  .scms-page .scms-hero-lead {
    font-size: 18px;
  }

  .scms-page .scms-button-row,
  .scms-page .scms-final-actions {
    flex-direction: column;
  }

  .scms-page .scms-button {
    width: 100%;
  }

  .scms-page .scms-trust-grid {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-trust-item,
  .scms-page .scms-trust-item:nth-child(2) {
    border-right: 0;
    border-bottom: 1px solid var(--scms-divider);
  }

  .scms-page .scms-trust-item:last-child {
    border-bottom: 0;
  }

  .scms-page .scms-standalone-mobile-center {
    text-align: center;
  }

  .scms-page .scms-standalone-mobile-center .scms-lead,
  .scms-page .scms-standalone-mobile-center p:not(.scms-eyebrow) {
    text-align: left;
  }

  .scms-page .scms-mobile-center-heading > .scms-eyebrow,
  .scms-page .scms-mobile-center-heading > h2 {
    text-align: center;
  }

  .scms-page .scms-mobile-center-heading > p,
  .scms-page .scms-mobile-center-heading .scms-term-benefits,
  .scms-page .scms-mobile-center-heading .scms-ai-note {
    text-align: left;
  }

  .scms-page .scms-platform-grid {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-platform-item {
    min-height: 0;
    padding: 26px 24px;
  }

  .scms-page .scms-lifecycle-wrap {
    border-radius: 22px;
  }

  .scms-page .scms-lifecycle-step {
    grid-template-columns: 52px minmax(0, 1fr);
    gap: 10px 16px;
    padding: 24px 20px;
  }

  .scms-page .scms-step-detail {
    grid-column: 2;
  }

  .scms-page .scms-context-grid {
    gap: 40px;
  }

  .scms-page .scms-context-axes {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-context-axis {
    border-right: 1px solid rgba(200, 214, 255, 0.22);
  }

  .scms-page .scms-context-screen {
    grid-template-columns: 54px minmax(0, 1fr);
  }

  .scms-page .scms-context-sidebar {
    padding: 26px 13px;
  }

  .scms-page .scms-context-sidebar span {
    width: 26px;
  }

  .scms-page .scms-context-main {
    padding: 30px 22px;
  }

  .scms-page .scms-context-callout {
    display: none;
  }

  .scms-page .scms-context-alt-row {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-context-alt-row > div:first-child {
    border-right: 0;
    border-bottom: 1px solid var(--scms-divider);
  }

  .scms-page .scms-term-benefits {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-ecosystem-diagram {
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .scms-page .scms-ecosystem-center,
  .scms-page .scms-ecosystem-node {
    position: static;
    width: 100%;
    min-height: 58px;
    border-radius: 16px;
  }

  .scms-page .scms-ecosystem-center {
    height: auto;
    padding: 22px;
  }

  .scms-page .scms-ecosystem-ring {
    display: none;
  }

  .scms-page .scms-engineering-panel {
    padding: 26px 20px;
    border-radius: 22px;
  }


  .scms-page .scms-engineering-benefits {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-engineering-benefit,
  .scms-page .scms-engineering-benefit + .scms-engineering-benefit,
  .scms-page .scms-engineering-benefit:nth-child(3) {
    margin-top: 0;
    padding: 20px 0;
    border-top: 1px solid var(--scms-border);
    border-left: 0;
  }

  .scms-page .scms-ui-row {
    grid-template-columns: 50px minmax(0, 1fr);
    gap: 8px 14px;
    padding: 24px 0;
  }

  .scms-page .scms-ui-row p {
    grid-column: 2;
  }

  .scms-page .scms-ui-row h3 {
    margin-top: 5px;
  }

  .scms-page .scms-scope-note {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-release-rail {
    padding-left: 0;
  }

  .scms-page .scms-release-rail::before {
    left: 20px;
  }

  .scms-page .scms-release-node {
    gap: 14px;
  }

  .scms-page .scms-ai-row {
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 7px 14px;
  }

  .scms-page .scms-ai-row span:last-child {
    grid-column: 2;
  }

  .scms-page .scms-quality-grid,
  .scms-page .scms-related-grid,
  .scms-page .scms-diff-grid,
  .scms-page .scms-engagement-grid {
    grid-template-columns: 1fr;
  }

  .scms-page .scms-diff-item,
  .scms-page .scms-engagement-step {
    min-height: 0;
  }

  .scms-page .scms-diff-mark {
    margin-bottom: 20px;
  }

  .scms-page .scms-engagement-number {
    margin-bottom: 20px;
  }

  .scms-page .scms-related-card {
    padding: 26px 24px;
  }

  .scms-page .scms-faq-button {
    grid-template-columns: minmax(0, 1fr) 36px;
    padding: 20px 0;
    font-size: 18px;
  }

  .scms-page .scms-faq-answer {
    padding-right: 0;
  }

  .scms-page .scms-final-cta {
    padding: 68px 0;
  }

  .scms-page .scms-final-inner {
    text-align: center;
  }

  .scms-page .scms-final-cta p {
    text-align: left;
    font-size: 17px;
  }
}

@media (max-width: 380px) {
  .scms-page h1 {
    font-size: 38px;
  }

  .scms-page h2 {
    font-size: 30px;
  }

  .scms-page .scms-hero {
    padding-top: 58px;
  }

  .scms-page .scms-lifecycle-step {
    grid-template-columns: 44px minmax(0, 1fr);
    padding: 22px 16px;
  }

  .scms-page .scms-platform-item,
  .scms-page .scms-related-card,
  .scms-page .scms-quality-item,
  .scms-page .scms-qa-column {
    padding-left: 20px;
    padding-right: 20px;
  }

  .scms-page .scms-context-main {
    padding-left: 18px;
    padding-right: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scms-page .scms-button {
    transition: none;
  }
}
`;

export default function SesenClinicalMedicalSoftwareLocalizationWireframeV3() {
  return (
    <main className="scms-page">
      <style>{styles}</style>

      <section className="scms-hero" aria-labelledby="scms-page-title">
        <div className="scms-shell scms-hero-grid">
          <div className="scms-hero-copy">
            <p className="scms-eyebrow">Software Localization for Life Sciences</p>
            <h1 id="scms-page-title">Clinical &amp; Medical Software Localization Services</h1>
            <p className="scms-hero-value">Build clinical and medical software for every language and market.</p>
            <p className="scms-hero-lead">
              Sesen combines specialized medical linguists, localization engineering, terminology governance,
              in-context QA, and scalable multilingual workflows for life sciences, healthcare, clinical research,
              medical device, and digital health organizations.
            </p>
            <p className="scms-hero-body">
              From internationalization readiness and structured resource preparation to contextual translation,
              UI adaptation, localized-build review, and continuous release support, Sesen helps manage the language
              layer throughout the multilingual software lifecycle.
            </p>
            <div className="scms-button-row">
              <Button href={QUOTE_URL}>REQUEST A QUOTE</Button>
              <Button href={SALES_URL} secondary>TALK TO A SOFTWARE LOCALIZATION EXPERT</Button>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="scms-trust-band" aria-label="Sesen software localization capabilities">
        <div className="scms-shell scms-trust-grid">
          {["ISO-Certified Quality", "150+ Languages", "Life Sciences Expertise", "Localization Engineering"].map((item) => (
            <div className="scms-trust-item" key={item}>
              <span className="scms-trust-icon"><Icon name="check" size={18} strokeWidth={2} /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="scms-section">
        <div className="scms-shell scms-beyond-grid">
          <div className="scms-beyond-copy scms-mobile-center-heading">
            <p className="scms-eyebrow">Product-Aware Localization</p>
            <h2>Software Localization Is More Than Translating Strings</h2>
            <p className="scms-lead">
              A translation can be linguistically correct in isolation and still be wrong inside the finished product.
            </p>
            <p>
              Short software strings can change meaning depending on the screen, user role, workflow, product state,
              surrounding controls, character limits, or clinical context. Clinical and medical software adds specialized
              terminology, patient communication, diagnostic information, safety content, measurements, alerts, and
              product-specific language to those technical constraints.
            </p>
            <p>
              Sesen brings these requirements together through a localization process built around language, context,
              technology, and the product experience.
            </p>
          </div>

          <div className="scms-four-principles">
            {[
              ["term", "Clinical & Medical Expertise", "Translate terminology and user-facing content with subject-matter knowledge appropriate to clinical and healthcare environments."],
              ["context", "Product Context", "Give linguists the information needed to understand where language appears, who uses it, and what it means in the workflow."],
              ["code", "Localization Engineering", "Protect code, variables, placeholders, metadata, and file structures while preparing multilingual resources for translation and reintegration."],
              ["check", "In-Context Quality", "Review localized language in screenshots, interfaces, test environments, or builds to identify issues isolated strings may not reveal."],
            ].map(([icon, title, body]) => (
              <div className="scms-principle-row" key={title}>
                <span className="scms-principle-icon"><Icon name={icon} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-section-soft" aria-labelledby="scms-platforms-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <h2 id="scms-platforms-title">Localization for Clinical and Medical Software Platforms</h2>
            <p className="scms-lead">
              Sesen supports patient-facing, clinician-facing, researcher-facing, and operational software across the
              life sciences ecosystem, with workflows adapted to users, content, technical environments, and product context.
            </p>
          </div>

          <div className="scms-platform-grid">
            {platformGroups.map((item) => (
              <article className="scms-platform-item" key={item.title}>
                <span className="scms-platform-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.link && item.href && <EditorialLink href={item.href}>{item.link}</EditorialLink>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-section-blue-soft" aria-labelledby="scms-lifecycle-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <p className="scms-eyebrow">Multilingual Product Lifecycle</p>
            <h2 id="scms-lifecycle-title">From Source Strings to Multilingual Software Release</h2>
            <p className="scms-lead">
              Successful clinical and medical software localization connects language work with the way software is designed, built,
              tested, released, and updated. Sesen can support the complete lifecycle or integrate into the stages your product team requires.
            </p>
          </div>

          <div className="scms-lifecycle-wrap">
            {lifecycleSteps.map((step) => (
              <div className="scms-lifecycle-step" key={step.number}>
                <div className="scms-step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <div className="scms-step-detail">
                  <p>{step.body}</p>
                  <div className="scms-tag-row">
                    {step.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-context-section" aria-labelledby="scms-context-title">
        <div className="scms-shell scms-context-grid">
          <div className="scms-context-copy">
            <h2 id="scms-context-title">When Context Changes, Meaning Changes</h2>
            <p>
              Software interfaces are filled with short words and phrases that appear simple until they are removed from the screen.
              A string such as <strong>Record</strong> can describe a patient record, an instruction to record an observation,
              or an action that begins recording. The source word is identical. The correct translation may not be.
            </p>
            <p>
              Sesen helps reduce ambiguity by connecting linguists with contextual information wherever available, turning
              software translation from isolated string conversion into product-aware localization.
            </p>
            <div className="scms-context-axes">
              {[
                ["Screen Context", "Where does the string appear?"],
                ["User Context", "Who is using the interface?"],
                ["Workflow Context", "What happens before and after?"],
                ["Technical Context", "Is it a button, label, status, field, tooltip, or dynamic message?"],
                ["Clinical Context", "Does the term carry specialized meaning?"],
              ].map(([title, body]) => (
                <div className="scms-context-axis" key={title}>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </div>
              ))}
            </div>
          </div>
          <ContextVisual />
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-terminology-title">
        <div className="scms-shell scms-terminology-grid">
          <div className="scms-terminology-copy scms-mobile-center-heading">
            <p className="scms-eyebrow">Terminology Governance</p>
            <h2 id="scms-terminology-title">One Terminology System Across the Product Experience</h2>
            <p>
              Software is rarely the only place customers encounter product language. The same feature, procedure, warning,
              medical term, device component, study concept, or user action may also appear in help content, training, IFUs,
              labeling, clinical documentation, or regulatory content.
            </p>
            <p>
              Sesen can maintain centralized language assets so approved terminology remains aligned across interfaces,
              related documentation, and recurring software releases.
            </p>
            <div className="scms-term-benefits">
              {["Product terminology", "Translation memory", "Terminology review", "Cross-content QA", "Release continuity", "Approved multilingual language"].map((item) => (
                <div className="scms-term-benefit" key={item}><Icon name="check" size={17} strokeWidth={2} /><span>{item}</span></div>
              ))}
            </div>
          </div>

          <div className="scms-ecosystem-diagram" role="img" aria-label="Terminology governance across software and related product content">
            <div className="scms-ecosystem-ring" aria-hidden="true" />
            <div className="scms-ecosystem-center">
              <span className="scms-term-center-icon"><Icon name="term" /></span>
              <strong>Controlled Terminology</strong>
            </div>
            <div className="scms-ecosystem-node n1">Software UI</div>
            <div className="scms-ecosystem-node n2">Help Content</div>
            <div className="scms-ecosystem-node n3">Training</div>
            <div className="scms-ecosystem-node n4">IFUs</div>
            <div className="scms-ecosystem-node n5">Labeling</div>
            <div className="scms-ecosystem-node n6">Clinical Documentation</div>
            <div className="scms-ecosystem-node n7">Regulatory Content</div>
          </div>
        </div>
      </section>

      <section className="scms-section scms-section-soft" aria-labelledby="scms-engineering-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <h2 id="scms-engineering-title">Localization Engineering Built Around Your Software</h2>
            <p className="scms-lead">
              Clinical software teams should not have to convert structured product resources into conventional documents just to get them translated.
              Sesen helps connect multilingual language production with the technical structures used to build software.
            </p>
          </div>

          <div className="scms-engineering-panel">
            <PipelineDiagram />
            <div className="scms-engineering-benefits">
              {[
                ["Protect Technical Elements", "Variables, placeholders, markup, codes, IDs, and non-translatable content can be protected during translation."],
                ["Preserve Structure", "Localized resources are returned in formats designed to support reintegration into the product workflow."],
                ["Manage Change", "Translation memories and change-focused workflows help identify new or modified content for subsequent releases."],
                ["Scale Efficiently", "Centralized engineering and project management support multilingual programs without duplicating the complete workflow for each market."],
              ].map(([title, body]) => (
                <div className="scms-engineering-benefit" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-ui-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <h2 id="scms-ui-title">Adapt Interfaces for Global Languages and Locales</h2>
            <p className="scms-lead">
              A user interface designed for one language does not automatically work in every other language. Sesen helps teams account for localization-related interface behavior so translated language can function effectively within the user experience.
            </p>
          </div>
          <div className="scms-ui-list">
            {uiAdaptationItems.map((item) => (
              <div className="scms-ui-row" key={item.title}>
                <span className="scms-ui-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-section-blue-soft" aria-labelledby="scms-qa-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <h2 id="scms-qa-title">Test the Language Where Users Actually See It</h2>
            <p className="scms-lead">
              A spreadsheet of translated strings cannot show whether a label is clipped, a button is too narrow, a term has the wrong meaning on a particular screen, or a language-dependent interaction fails in the localized interface. Sesen combines linguistic, technical, and in-context localization QA to surface those issues.
            </p>
          </div>
          <div className="scms-qa-grid">
            {qaLayers.map((item) => (
              <article className="scms-qa-column" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="scms-check-list">
                  {item.checks.map((check) => <li key={check}><Icon name="check" size={16} strokeWidth={2} /><span>{check}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="scms-scope-note">
            <span className="scms-scope-note-icon"><Icon name="check" size={20} strokeWidth={2} /></span>
            <p>
              Sesen's linguistic and localization QA complements the software verification, validation, usability, security, and other product testing performed by the appropriate development and quality teams. When broader validation or testing support is needed, responsibilities and deliverables can be defined as part of the engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-continuous-title">
        <div className="scms-shell scms-continuous-grid">
          <div className="scms-continuous-copy">
            <h2 id="scms-continuous-title">Keep Every Software Release Multilingual</h2>
            <p>
              Software changes continuously. Treating every update as a completely new translation project creates unnecessary work and makes language harder to control.
            </p>
            <p>
              Sesen builds reusable multilingual programs around recurring releases so approved language, terminology, and quality processes carry forward as products evolve.
            </p>
            <div className="scms-continuous-points">
              {["Delta-based localization focuses effort on new and changed content", "Translation memory carries approved language forward where appropriate", "Terminology continuity protects product and clinical language", "Automated quality checks support repeatable release QA", "New languages can extend established workflows rather than restart them"].map((item) => (
                <div className="scms-continuous-point" key={item}><Icon name="check" size={17} strokeWidth={2} /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <ReleaseRail />
        </div>
      </section>

      <section className="scms-section scms-section-soft" aria-labelledby="scms-ai-title">
        <div className="scms-shell scms-ai-grid">
          <div className="scms-ai-copy scms-mobile-center-heading">
            <p className="scms-eyebrow">AI-Enabled Workflow</p>
            <h2 id="scms-ai-title">Smarter Localization Without Losing Control</h2>
            <p>
              Modern localization technology can automate repetitive tasks, identify inconsistencies, reuse approved language,
              and help teams process frequent software changes more efficiently.
            </p>
            <p>
              Sesen combines these capabilities with professional linguistic expertise appropriate to the content and product context.
            </p>
            <div className="scms-ai-note">
              AI is a workflow capability — not a substitute for clinical context, medical judgment, terminology governance, or professional linguistic review where those are required.
            </div>
          </div>
          <div className="scms-ai-list">
            {aiCapabilities.map(([title, body], index) => (
              <div className="scms-ai-row" key={title}>
                <span className="scms-ai-icon"><Icon name={index % 2 === 0 ? "term" : "code"} size={19} /></span>
                <strong>{title}</strong>
                <span>{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-quality-title">
        <div className="scms-shell">
          <div className="scms-section-head scms-mobile-center-heading">
            <h2 id="scms-quality-title">Built for Life Sciences Quality Requirements</h2>
            <p className="scms-lead">
              Clinical and medical software sits within an ecosystem where terminology, traceability, quality, and controlled change matter. Sesen supports software localization through quality processes designed for multilingual life sciences content.
            </p>
          </div>
          <div className="scms-quality-grid">
            {qualityItems.map(([title, body]) => (
              <article className="scms-quality-item" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-section-blue-soft" aria-labelledby="scms-related-title">
        <div className="scms-shell">
          <div className="scms-section-head scms-section-head-centered scms-standalone-mobile-center">
            <h2 id="scms-related-title">Connect Software Localization Across the Life Sciences Product Lifecycle</h2>
            <p className="scms-lead">
              Different digital products require different kinds of language expertise. Sesen connects software localization with specialized workflows across the broader life sciences ecosystem.
            </p>
          </div>
          <div className="scms-related-grid">
            {relatedServices.map((item) => (
              <article className="scms-related-card" key={item.title}>
                <span className="scms-related-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <EditorialLink href={item.href}>{item.link}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-why-title">
        <div className="scms-shell">
          <div className="scms-section-head scms-section-head-centered scms-standalone-mobile-center">
            <h2 id="scms-why-title">Why Life Sciences Software Teams Choose Sesen</h2>
          </div>
          <div className="scms-diff-grid">
            {differentiators.map(([title, body]) => (
              <article className="scms-diff-item" key={title}>
                <span className="scms-diff-mark" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section scms-engagement" aria-labelledby="scms-engagement-title">
        <div className="scms-shell">
          <p className="scms-eyebrow">Program Delivery</p>
          <h2 id="scms-engagement-title">A Software Localization Workflow That Fits Your Release Process</h2>
          <p className="scms-engagement-intro">
            No two software products have the same architecture, review structure, users, languages, or release cadence. Sesen adapts the operating model to your product team — from program setup and language assets through production, product review, release, and ongoing updates.
          </p>
          <div className="scms-engagement-grid">
            {engagementSteps.map(([number, title, body]) => (
              <article className="scms-engagement-step" key={number}>
                <span className="scms-engagement-number">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scms-section" aria-labelledby="scms-faq-title">
        <div className="scms-shell">
          <div className="scms-section-head">
            <h2 id="scms-faq-title">Clinical &amp; Medical Software Localization FAQ</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="scms-final-cta" aria-labelledby="scms-final-title">
        <div className="scms-shell scms-final-inner">
          <div className="scms-final-copy">
            <h2 id="scms-final-title">Ready to Localize Your Clinical or Medical Software?</h2>
            <p>
              Whether you are preparing a new product for international launch, expanding an established platform into additional languages,
              or building continuous localization into an ongoing release cycle, Sesen can help create a multilingual workflow around the way your software is actually developed and maintained.
            </p>
          </div>
          <div className="scms-final-actions">
            <Button href={QUOTE_URL}>REQUEST A QUOTE</Button>
            <Button href={SALES_URL} secondary>CONTACT SALES</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
