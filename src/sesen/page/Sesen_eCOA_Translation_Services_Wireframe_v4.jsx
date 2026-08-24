import React, { useState } from "react";

const COLORS = {
  blue: "#4B6FD8",
  blueDark: "#3659BB",
  deepBlue: "#253F8F",
  midBlue: "#6F8BE1",
  softBlue: "#EAF0FF",
  paleBlue: "#F5F7FF",
  navy: "#17264D",
  ink: "#111827",
  body: "#46546D",
  muted: "#68758B",
  border: "#DDE4F2",
  divider: "#E9EEF8",
  softBg: "#F7F9FD",
  white: "#FFFFFF",
  lightBlue: "#C8D6FF",
};

const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeviceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect x="10" y="5" width="28" height="38" rx="7" stroke="currentColor" strokeWidth="2" />
    <path d="M17 12h14M17 18h10M17 25h14M17 31h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="37" r="1.5" fill="currentColor" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="15" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M10 39c1.4-8.2 6.8-12 14-12s12.6 3.8 14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ClinicianIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
    <path d="M13 39c1.1-8 5.5-12 11-12s9.9 4 11 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 29v10M19 34h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ObserverIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="18" cy="16" r="5.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="31" cy="18" r="4.5" stroke="currentColor" strokeWidth="2" />
    <path d="M8 38c1-7 4.6-11 10-11 5.2 0 8.8 3.7 10 10M27 27c5.8.3 9.4 3.7 10.5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const PerformanceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M8 36h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 31l7-11 6 5 7-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="14" cy="31" r="2" fill="currentColor" />
    <circle cx="21" cy="20" r="2" fill="currentColor" />
    <circle cx="27" cy="25" r="2" fill="currentColor" />
    <circle cx="34" cy="12" r="2" fill="currentColor" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="2" />
    <path d="M7 24h34M24 7c5 5 7.5 10.7 7.5 17S29 36 24 41M24 7c-5 5-7.5 10.7-7.5 17S19 36 24 41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="m24 7 16 8-16 8L8 15l16-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="m10 23 14 7 14-7M10 31l14 7 14-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M24 6 39 12v10c0 9.4-5.8 16.3-15 20-9.2-3.7-15-10.6-15-20V12L24 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="m17 24 5 5 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CompareIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M12 14h22M28 8l6 6-6 6M36 34H14M20 28l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle cx="21" cy="21" r="11" stroke="currentColor" strokeWidth="2" />
    <path d="m29 29 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LinkText = ({ href, children }) => (
  <a className="sesen-ecoa__editorial-link" href={href}>
    <span>{children}</span><Arrow />
  </a>
);

const SectionHeader = ({ eyebrow, title, intro, align = "center", mobileLeft = false }) => (
  <div className={`sesen-ecoa__section-header sesen-ecoa__section-header--${align}${mobileLeft ? " sesen-ecoa__section-header--mobile-left" : ""}`}>
    {eyebrow ? <div className="sesen-ecoa__eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const HeroVisual = () => (
  <div className="sesen-ecoa__hero-visual" role="img" aria-label="Illustration showing a clinical outcome assessment moving from validated instrument content into a multilingual digital experience and in-context quality review">
    <svg viewBox="0 0 580 500" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="ecoaSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F7FF" />
          <stop offset="1" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="247" r="196" fill="url(#ecoaSoft)" />
      <circle cx="300" cy="247" r="158" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />

      <g transform="translate(54 122)">
        <rect width="156" height="208" rx="22" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <rect x="18" y="18" width="55" height="8" rx="4" fill="#C8D6FF" />
        <rect x="18" y="43" width="118" height="8" rx="4" fill="#17264D" opacity=".92" />
        <rect x="18" y="59" width="102" height="6" rx="3" fill="#68758B" opacity=".54" />
        <rect x="18" y="91" width="120" height="34" rx="10" fill="#F5F7FF" stroke="#DDE4F2" />
        <circle cx="34" cy="108" r="7" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2" />
        <rect x="52" y="104" width="64" height="7" rx="3.5" fill="#46546D" opacity=".64" />
        <rect x="18" y="136" width="120" height="34" rx="10" fill="#F5F7FF" stroke="#DDE4F2" />
        <circle cx="34" cy="153" r="7" fill="#4B6FD8" />
        <path d="m31 153 2 2 4-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="52" y="149" width="70" height="7" rx="3.5" fill="#46546D" opacity=".64" />
        <rect x="18" y="184" width="82" height="7" rx="3.5" fill="#3659BB" opacity=".75" />
      </g>

      <g transform="translate(218 88)">
        <rect width="154" height="276" rx="27" fill="#17264D" />
        <rect x="9" y="9" width="136" height="258" rx="21" fill="#FFFFFF" />
        <rect x="52" y="19" width="50" height="6" rx="3" fill="#DDE4F2" />
        <rect x="24" y="54" width="69" height="8" rx="4" fill="#4B6FD8" opacity=".76" />
        <rect x="24" y="77" width="105" height="8" rx="4" fill="#17264D" />
        <rect x="24" y="94" width="87" height="6" rx="3" fill="#68758B" opacity=".58" />
        <rect x="24" y="124" width="105" height="40" rx="12" fill="#F5F7FF" stroke="#DDE4F2" />
        <rect x="38" y="141" width="64" height="7" rx="3.5" fill="#46546D" opacity=".62" />
        <rect x="24" y="174" width="105" height="40" rx="12" fill="#EAF0FF" stroke="#6F8BE1" />
        <circle cx="40" cy="194" r="7" fill="#4B6FD8" />
        <path d="m37 194 2 2 4-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="55" y="190" width="54" height="7" rx="3.5" fill="#3659BB" opacity=".74" />
        <rect x="24" y="230" width="105" height="18" rx="9" fill="#4B6FD8" />
      </g>

      <g transform="translate(390 132)">
        <rect width="142" height="192" rx="22" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="112" cy="30" r="15" fill="#EAF0FF" />
        <path d="m105 30 5 5 9-11" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="22" width="65" height="7" rx="3.5" fill="#17264D" />
        <rect x="18" y="52" width="102" height="28" rx="9" fill="#F7F9FD" stroke="#E9EEF8" />
        <rect x="30" y="63" width="63" height="6" rx="3" fill="#46546D" opacity=".63" />
        <rect x="18" y="90" width="102" height="28" rx="9" fill="#F7F9FD" stroke="#E9EEF8" />
        <rect x="30" y="101" width="74" height="6" rx="3" fill="#46546D" opacity=".63" />
        <rect x="18" y="128" width="102" height="28" rx="9" fill="#EAF0FF" stroke="#C8D6FF" />
        <rect x="30" y="139" width="52" height="6" rx="3" fill="#3659BB" opacity=".7" />
        <rect x="18" y="169" width="67" height="7" rx="3.5" fill="#6F8BE1" />
      </g>

      <path d="M194 226h30" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
      <path d="M366 226h28" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />
      <circle cx="208" cy="226" r="4" fill="#4B6FD8" />
      <circle cx="380" cy="226" r="4" fill="#4B6FD8" />

      <g transform="translate(106 362)">
        <rect width="358" height="69" rx="20" fill="#FFFFFF" stroke="#DDE4F2" />
        <circle cx="34" cy="34" r="13" fill="#EAF0FF" />
        <path d="m28 34 4 4 8-10" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="60" y="22" width="102" height="8" rx="4" fill="#17264D" opacity=".9" />
        <rect x="60" y="39" width="149" height="6" rx="3" fill="#68758B" opacity=".55" />
        <rect x="241" y="22" width="90" height="25" rx="12.5" fill="#F5F7FF" stroke="#C8D6FF" />
        <rect x="258" y="31" width="56" height="6" rx="3" fill="#3659BB" opacity=".7" />
      </g>
    </svg>
  </div>
);

const ecosystem = [
  {
    icon: <PersonIcon />,
    short: "ePRO",
    title: "Electronic Patient-Reported Outcomes",
    text: "Patient-reported symptoms, functioning, quality of life, treatment experience, and other outcomes entered directly by participants.",
    link: "https://www.sesen.com/epro-translation-services/",
  },
  {
    icon: <ClinicianIcon />,
    short: "ClinRO",
    title: "Clinician-Reported Outcomes",
    text: "Assessments completed by trained clinicians based on clinical observation, examination, or professional judgment.",
  },
  {
    icon: <ObserverIcon />,
    short: "ObsRO",
    title: "Observer-Reported Outcomes",
    text: "Assessments completed by caregivers, parents, or other observers when direct patient reporting is impractical or impossible.",
  },
  {
    icon: <PerformanceIcon />,
    short: "PerfO",
    title: "Performance Outcomes",
    text: "Structured tasks measuring how a participant performs a defined activity or function under standardized conditions.",
  },
];

const lifecycle = [
  {
    n: "01",
    title: "Instrument & Study Review",
    text: "Review source instruments, approved translations, target countries and languages, usage requirements, study context, and eCOA implementation specifications.",
    detail: ["Source and approved language assets", "Mode of administration", "Platform and implementation requirements"],
  },
  {
    n: "02",
    title: "Translation & Linguistic Validation",
    text: "Apply the appropriate translation and validation pathway for the instrument, target population, existing language assets, and intended use.",
    detail: ["Translation and reconciliation", "Back translation where appropriate", "Cognitive debriefing and harmonization"],
  },
  {
    n: "03",
    title: "Localization Preparation",
    text: "Prepare validated content for electronic implementation with structured handling of strings, response scales, variables, terminology, and formatting constraints.",
    detail: ["String segmentation", "Content mapping", "Variables and language-specific behavior"],
  },
  {
    n: "04",
    title: "eCOA Migration & Integration",
    text: "Support movement of approved multilingual instrument content into the eCOA environment, including paper-to-electronic and platform migration workflows.",
    detail: ["Previously validated translations", "Platform-ready content", "Sponsor / CRO / vendor coordination"],
  },
  {
    n: "05",
    title: "Interface Localization",
    text: "Localize the surrounding digital experience, including navigation, prompts, reminders, alerts, help content, onboarding, and device guidance.",
    detail: ["Participant-facing UI", "System messages", "Study-specific interface content"],
  },
  {
    n: "06",
    title: "Screenshot & In-Context QA",
    text: "Review implemented content for linguistic accuracy, context, screen fit, response-scale presentation, rendering, terminology, and completeness.",
    detail: ["Truncation and line wrapping", "Untranslated or misplaced strings", "RTL and character rendering"],
  },
  {
    n: "07",
    title: "Issue Resolution & Release Readiness",
    text: "Document findings, coordinate corrections with relevant stakeholders, and verify updated builds through a traceable review process.",
    detail: ["Linguistic queries", "Screenshot annotations", "Corrected-build verification"],
  },
  {
    n: "08",
    title: "Version & Change Management",
    text: "Maintain multilingual consistency as instruments, countries, languages, source content, and software builds change over the life of the study.",
    detail: ["Delta translation", "Approved-language reuse", "Version-aware QA and release tracking"],
  },
];

const contentTypes = [
  {
    title: "Assessment Content",
    items: ["Questionnaire items", "Rating scales", "Patient diaries", "Recall periods", "Response options", "Assessment instructions"],
  },
  {
    title: "Participant Experience",
    items: ["Onboarding", "Prompts and reminders", "Alerts", "Help content", "Completion messages", "Participant guidance"],
  },
  {
    title: "Clinician & Site Content",
    items: ["ClinRO instructions", "Site-facing prompts", "Assessment guidance", "Training materials", "User guidance", "Quick-reference content"],
  },
  {
    title: "Device & Interface Content",
    items: ["Navigation", "Buttons and menus", "Error messages", "Validation messages", "System notices", "Device instructions"],
  },
  {
    title: "Supporting Study Content",
    items: ["eCOA training", "User guides", "FAQs", "Study-specific instructions", "Participant support", "Implementation references"],
  },
];

const qaGroups = [
  {
    title: "Linguistic",
    text: "Accuracy, clinical meaning, terminology, consistency, context, completeness, and natural target-language usage.",
  },
  {
    title: "Functional Presentation",
    text: "Truncation, line wrapping, response options, variables, navigation context, repeated strings, and character limits.",
  },
  {
    title: "Visual Presentation",
    text: "Spacing, alignment, screen fit, font and character rendering, non-Latin scripts, and right-to-left presentation.",
  },
  {
    title: "Instrument Integrity",
    text: "Question wording, item order, instructions, recall periods, response scales, approved translations, and required terminology.",
  },
];

const qualityItems = [
  { icon: <ShieldIcon />, title: "Professional Life Sciences Linguists", text: "Qualified native-language professionals selected for the clinical, medical, linguistic, and patient-facing requirements of the content." },
  { icon: <SearchIcon />, title: "Independent Review", text: "Appropriate review stages for accuracy, completeness, terminology, readability, and consistency across high-value clinical content." },
  { icon: <LayersIcon />, title: "Terminology Governance", text: "Study-specific terminology, translation memory, approved wording, and reference assets help maintain consistency across screens and updates." },
  { icon: <CompareIcon />, title: "Traceable, Version-Aware Workflows", text: "Structured review, query tracking, content comparison, and version control help keep multilingual study content aligned." },
];

const whySesen = [
  ["Life Sciences Specialization", "Clinical trials, COAs, regulatory content, patient communication, medical software, and digital health localization."],
  ["Clinical Outcome Assessment Expertise", "Support for COAs, eCOAs, PROs, ePROs, questionnaires, patient diaries, symptom scales, and other clinical measures."],
  ["Linguistic Validation Capabilities", "Structured workflows for conceptual equivalence, cultural adaptation, respondent testing, and documented linguistic evidence."],
  ["Digital Localization Experience", "Expertise across software interfaces, structured localization files, clinical platforms, and multilingual user experiences."],
  ["In-Context Quality Review", "Screenshot and implemented-build review helps identify issues that bilingual files alone cannot reliably reveal."],
  ["Global Program Control", "Centralized terminology, translation memory, project governance, and version management for multi-country studies and recurring updates."],
];

const related = [
  ["Clinical Trial Translation Services", "Global multilingual support for patient-facing, site-facing, regulatory, operational, and clinical documentation.", "https://www.sesen.com/clinical-trial-translation-services/", "Explore Clinical Trial Translation"],
  ["Linguistic Validation Services", "Conceptual equivalence and validated clinical outcome measures for multilingual research.", "https://www.sesen.com/linguistic-validation-services/", "Explore Linguistic Validation"],
  ["ePRO Translation Services", "Specialized translation and localization for electronic patient-reported outcomes.", "https://www.sesen.com/epro-translation-services/", "Explore ePRO Translation"],
  ["eHealth & mHealth Localization", "Digital health apps, patient tools, interfaces, portals, and connected healthcare experiences.", "https://www.sesen.com/ehealth-mhealth-localization-services/", "Explore eHealth & mHealth Localization"],
  ["CRO Translation Services", "Scalable multilingual support for CRO-managed study operations, eCOA workflows, and global trial programs.", "https://www.sesen.com/cro-translation-services/", "Explore CRO Translation"],
];

const faqs = [
  ["What is eCOA translation?", "eCOA translation is the translation and localization of electronic Clinical Outcome Assessments used in clinical research. It can include the assessment instrument itself as well as supporting digital content such as instructions, navigation, reminders, alerts, error messages, and other interface text. For global studies, the workflow may also include linguistic validation, electronic migration, screenshot review, in-context QA, and multilingual version management."],
  ["What is the difference between eCOA and ePRO?", "eCOA is the broader category of electronically administered Clinical Outcome Assessments. ePRO refers specifically to an electronic patient-reported outcome, while the broader COA ecosystem also includes clinician-reported, observer-reported, and performance outcomes."],
  ["Does eCOA translation require linguistic validation?", "Not every piece of eCOA content requires the same validation methodology. The appropriate approach depends on the instrument, context of use, target population, existing validated translations, instrument-owner requirements, study design, and intended use. Clinical outcome instruments may require formal linguistic-validation activities, while general interface content can follow a different translation and review workflow."],
  ["Can Sesen support paper-to-eCOA migration?", "Yes. Sesen can support the multilingual aspects of moving paper-based or previously validated clinical outcome instruments into electronic environments, including approved-language review, content mapping, translation updates, interface localization, screenshot review, and comparison of implemented content against the approved instrument."],
  ["What is eCOA screenshot review?", "Screenshot review evaluates translated eCOA content as it appears in the electronic interface. Reviewers can assess linguistic accuracy and context while also identifying implementation issues such as truncation, poor line breaks, missing translations, incorrect response options, inconsistent terminology, layout problems, and character-rendering issues."],
  ["Can Sesen work with our existing eCOA technology provider?", "Yes. Sesen can work within sponsor, CRO, and technology-provider workflows to support multilingual content preparation, translation, validation, implementation review, screenshot QA, issue resolution, and study updates without requiring a specific platform."],
  ["Can Sesen use existing validated translations?", "Yes. When the appropriate rights and reference materials are available, Sesen can work with existing approved or validated translations rather than retranslating content unnecessarily. These assets can be incorporated into terminology resources, implementation files, and QA workflows to help maintain continuity with previous instrument versions."],
  ["How does Sesen manage eCOA updates during an ongoing study?", "Sesen uses translation memory, terminology governance, source comparison, version tracking, delta translation, review records, and multilingual QA to manage instrument updates, platform revisions, new countries, new languages, and other study changes while helping preserve previously approved content."],
  ["Does Sesen support ePRO, ClinRO, ObsRO, and PerfO translation?", "Yes. Sesen supports multilingual content for electronic patient-reported, clinician-reported, observer-reported, and performance outcome assessments, with workflows aligned to the requirements of the content, target audience, and study."],
  ["How many languages does Sesen support for eCOA programs?", "Sesen supports translation and localization across 150+ languages, depending on the assessment, language pair, target population, and project requirements. Centralized workflows support both individual-language projects and large multi-country clinical programs."],
];

export default function SesenECOATranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="sesen-ecoa-page">
      <style>{`
        .sesen-ecoa-page {
          --ecoa-blue: ${COLORS.blue};
          --ecoa-blue-dark: ${COLORS.blueDark};
          --ecoa-deep-blue: ${COLORS.deepBlue};
          --ecoa-mid-blue: ${COLORS.midBlue};
          --ecoa-soft-blue: ${COLORS.softBlue};
          --ecoa-pale-blue: ${COLORS.paleBlue};
          --ecoa-navy: ${COLORS.navy};
          --ecoa-ink: ${COLORS.ink};
          --ecoa-body: ${COLORS.body};
          --ecoa-muted: ${COLORS.muted};
          --ecoa-border: ${COLORS.border};
          --ecoa-divider: ${COLORS.divider};
          --ecoa-soft-bg: ${COLORS.softBg};
          --ecoa-white: ${COLORS.white};
          --ecoa-light-blue: ${COLORS.lightBlue};
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--ecoa-body);
          background: var(--ecoa-white);
          font-size: 16px;
          line-height: 1.68;
          overflow-x: hidden;
        }
        .sesen-ecoa-page *,
        .sesen-ecoa-page *::before,
        .sesen-ecoa-page *::after { box-sizing: border-box; }
        .sesen-ecoa-page a { color: inherit; }
        .sesen-ecoa-page button,
        .sesen-ecoa-page a { -webkit-tap-highlight-color: transparent; }
        .sesen-ecoa-page :focus-visible { outline: 3px solid rgba(75,111,216,.35); outline-offset: 3px; }
        .sesen-ecoa-page h1,
        .sesen-ecoa-page h2,
        .sesen-ecoa-page h3,
        .sesen-ecoa-page p { margin-top: 0; }
        .sesen-ecoa-page h1,
        .sesen-ecoa-page h2,
        .sesen-ecoa-page h3 {
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--ecoa-navy);
          font-weight: 500;
        }
        .sesen-ecoa-page h1 { font-size: 48px; line-height: 1.3; letter-spacing: -.5px; margin-bottom: 22px; }
        .sesen-ecoa-page h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; margin-bottom: 20px; }
        .sesen-ecoa-page h3 { font-size: 23px; line-height: 1.3; margin-bottom: 12px; }
        .sesen-ecoa__container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .sesen-ecoa__section { padding: 96px 0; position: relative; }
        .sesen-ecoa__section--dense { padding: 80px 0; }
        .sesen-ecoa__section--soft { background: var(--ecoa-soft-bg); }
        .sesen-ecoa__section--pale { background: var(--ecoa-pale-blue); }
        .sesen-ecoa__section--navy { background: var(--ecoa-navy); color: #fff; }
        .sesen-ecoa__eyebrow { color: var(--ecoa-blue-dark); font-size: 11px; font-weight: 700; line-height: 1.35; letter-spacing: .15em; text-transform: uppercase; margin-bottom: 14px; }
        .sesen-ecoa__section--navy .sesen-ecoa__eyebrow { color: var(--ecoa-light-blue); }
        .sesen-ecoa__section-header { max-width: 820px; margin-bottom: 52px; }
        .sesen-ecoa__section-header--center { text-align: center; margin-left: auto; margin-right: auto; }
        .sesen-ecoa__section-header--left { text-align: left; }
        .sesen-ecoa__section-header p { color: var(--ecoa-body); font-size: 18px; line-height: 1.72; margin: 0; }
        .sesen-ecoa__section--navy .sesen-ecoa__section-header h2 { color: #fff; }
        .sesen-ecoa__section--navy .sesen-ecoa__section-header p { color: #dce5ff; }

        .sesen-ecoa__hero { padding: 96px 0 88px; background: linear-gradient(180deg, #fff 0%, #fbfcff 100%); position: relative; }
        .sesen-ecoa__hero::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--ecoa-divider); }
        .sesen-ecoa__hero-grid { display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(430px, .94fr); align-items: center; gap: 66px; }
        .sesen-ecoa__hero-copy { max-width: 700px; }
        .sesen-ecoa__hero-copy > p { font-size: 19px; line-height: 1.72; color: #293954; max-width: 690px; margin-bottom: 28px; }
        .sesen-ecoa__hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin: 0 0 34px; }
        .sesen-ecoa__button { min-height: 50px; padding: 0 26px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: .035em; text-transform: uppercase; transition: background .2s ease, border-color .2s ease, transform .2s ease; }
        .sesen-ecoa__button:hover { transform: translateY(-1px); }
        .sesen-ecoa__button--primary { background: var(--ecoa-blue); color: #fff !important; border: 1px solid var(--ecoa-blue); }
        .sesen-ecoa__button--primary:hover { background: var(--ecoa-blue-dark); border-color: var(--ecoa-blue-dark); }
        .sesen-ecoa__button--secondary { background: #fff; color: var(--ecoa-ink) !important; border: 1px solid var(--ecoa-border); }
        .sesen-ecoa__button--secondary:hover { background: var(--ecoa-pale-blue); border-color: #b8c7eb; }
        .sesen-ecoa__trust-line { display: flex; flex-wrap: wrap; gap: 10px 22px; padding-top: 22px; border-top: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__trust-line span { color: var(--ecoa-muted); font-size: 14px; display: inline-flex; align-items: center; gap: 7px; }
        .sesen-ecoa__trust-line i { width: 5px; height: 5px; border-radius: 50%; background: var(--ecoa-mid-blue); display: inline-block; }
        .sesen-ecoa__hero-visual { width: 100%; max-width: 575px; justify-self: end; }
        .sesen-ecoa__hero-visual svg { width: 100%; height: auto; display: block; }

        .sesen-ecoa__dual-language { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--ecoa-border); border-radius: 30px; overflow: hidden; background: #fff; }
        .sesen-ecoa__language-panel { padding: 42px; min-height: 100%; }
        .sesen-ecoa__language-panel + .sesen-ecoa__language-panel { border-left: 1px solid var(--ecoa-border); background: var(--ecoa-pale-blue); }
        .sesen-ecoa__language-panel-top { display: flex; align-items: center; gap: 14px; margin-bottom: 19px; }
        .sesen-ecoa__language-panel-icon { width: 48px; height: 48px; border-radius: 14px; background: var(--ecoa-soft-blue); color: var(--ecoa-blue-dark); display: grid; place-items: center; flex: 0 0 auto; }
        .sesen-ecoa__language-panel-icon svg { width: 25px; height: 25px; }
        .sesen-ecoa__language-panel h3 { margin: 0; }
        .sesen-ecoa__language-panel > p { font-size: 16px; margin-bottom: 22px; }
        .sesen-ecoa__language-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .sesen-ecoa__language-tags span { background: #fff; border: 1px solid var(--ecoa-border); color: var(--ecoa-body); font-size: 14px; border-radius: 999px; padding: 7px 11px; line-height: 1.2; }
        .sesen-ecoa__language-panel:first-child .sesen-ecoa__language-tags span { background: var(--ecoa-soft-bg); }
        .sesen-ecoa__dual-callout { margin-top: 26px; padding: 24px 30px; border-left: 2px solid var(--ecoa-blue); background: #fff; color: var(--ecoa-navy); font-size: 19px; line-height: 1.55; }
        .sesen-ecoa__context-link-row { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px 28px; align-items: center; }

        .sesen-ecoa__ecosystem-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--ecoa-border); border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__ecosystem-item { padding: 34px 28px 32px; position: relative; }
        .sesen-ecoa__ecosystem-item + .sesen-ecoa__ecosystem-item { border-left: 1px solid var(--ecoa-border); }
        .sesen-ecoa__ecosystem-icon { width: 44px; height: 44px; color: var(--ecoa-blue-dark); margin-bottom: 20px; }
        .sesen-ecoa__ecosystem-icon svg { width: 100%; height: 100%; }
        .sesen-ecoa__ecosystem-short { color: var(--ecoa-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 8px; }
        .sesen-ecoa__ecosystem-item h3 { font-size: 20px; margin-bottom: 12px; }
        .sesen-ecoa__ecosystem-item p { font-size: 16px; margin-bottom: 18px; }
        .sesen-ecoa__ecosystem-footer { margin-top: 32px; text-align: center; color: var(--ecoa-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 22px; font-weight: 500; }

        .sesen-ecoa__editorial-link { display: inline-flex; align-items: center; gap: 7px; color: var(--ecoa-blue-dark) !important; text-decoration: none; font-weight: 700; font-size: 16px; line-height: 1.4; }
        .sesen-ecoa__editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .sesen-ecoa__editorial-link svg { transition: transform .2s ease; }
        .sesen-ecoa__editorial-link:hover svg { transform: translateX(3px); }

        .sesen-ecoa__lifecycle { display: grid; gap: 34px; }
        .sesen-ecoa__life-band-group { min-width: 0; }
        .sesen-ecoa__life-band-label { color: var(--ecoa-blue-dark); font-size: 12px; font-weight: 700; line-height: 1.35; letter-spacing: .1em; text-transform: uppercase; margin: 0 0 16px 4px; }
        .sesen-ecoa__life-band { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .sesen-ecoa__life-band::before { content: ""; position: absolute; left: 8%; right: 8%; top: 32px; height: 1px; background: #b8c7eb; z-index: 0; }
        .sesen-ecoa__life-step { background: #fff; border: 1px solid var(--ecoa-border); border-radius: 22px; padding: 27px 24px 25px; position: relative; z-index: 1; min-height: 310px; }
        .sesen-ecoa__life-num { width: 46px; height: 46px; border-radius: 50%; background: var(--ecoa-blue); color: #fff; display: grid; place-items: center; font-size: 13px; font-weight: 700; letter-spacing: .04em; margin-bottom: 19px; box-shadow: 0 0 0 7px var(--ecoa-pale-blue); }
        .sesen-ecoa__life-step h3 { font-size: 21px; }
        .sesen-ecoa__life-step > p { font-size: 16px; line-height: 1.62; margin-bottom: 18px; }
        .sesen-ecoa__mini-list { margin: 0; padding: 16px 0 0; border-top: 1px solid var(--ecoa-divider); list-style: none; }
        .sesen-ecoa__mini-list li { font-size: 16px; color: var(--ecoa-muted); padding: 4px 0; line-height: 1.5; }
        .sesen-ecoa__life-link { margin-top: 30px; display: flex; justify-content: center; }

        .sesen-ecoa__split { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 76px; align-items: start; }
        .sesen-ecoa__sticky-copy { position: sticky; top: 28px; }
        .sesen-ecoa__lead { font-size: 18px; color: #293954; line-height: 1.72; }
        .sesen-ecoa__lead strong { color: var(--ecoa-navy); font-weight: 600; }
        .sesen-ecoa__principles { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--ecoa-border); }
        .sesen-ecoa__principle { padding: 23px 20px 23px 0; border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__principle:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--ecoa-border); }
        .sesen-ecoa__principle h3 { font-size: 18px; margin-bottom: 6px; }
        .sesen-ecoa__principle p { font-size: 16px; color: var(--ecoa-muted); margin: 0; line-height: 1.6; }
        .sesen-ecoa__validation-quote { margin-top: 30px; padding: 24px 26px; background: var(--ecoa-pale-blue); border-radius: 18px; color: var(--ecoa-navy); font-size: 18px; font-weight: 600; line-height: 1.5; }

        .sesen-ecoa__migration-visual { border: 1px solid var(--ecoa-border); background: #fff; border-radius: 28px; padding: 32px; }
        .sesen-ecoa__migration-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; align-items: center; gap: 14px; }
        .sesen-ecoa__flow-node { min-height: 146px; border-radius: 18px; background: var(--ecoa-soft-bg); border: 1px solid var(--ecoa-divider); padding: 21px 18px; display: flex; flex-direction: column; justify-content: space-between; }
        .sesen-ecoa__flow-node:nth-of-type(5) { background: var(--ecoa-pale-blue); border-color: #c6d3f4; }
        .sesen-ecoa__flow-node span { color: var(--ecoa-blue-dark); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .12em; }
        .sesen-ecoa__flow-node strong { color: var(--ecoa-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; line-height: 1.25; font-weight: 500; }
        .sesen-ecoa__flow-arrow { color: var(--ecoa-mid-blue); display: grid; place-items: center; }
        .sesen-ecoa__migration-list { display: grid; grid-template-columns: 1fr 1fr; margin-top: 28px; border-top: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__migration-item { padding: 23px 24px 8px 0; }
        .sesen-ecoa__migration-item:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__migration-item h3 { font-size: 18px; }
        .sesen-ecoa__migration-item p { font-size: 16px; color: var(--ecoa-muted); }

        .sesen-ecoa__qa-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--ecoa-border); border-radius: 28px; overflow: hidden; background: #fff; }
        .sesen-ecoa__qa-item { padding: 31px 26px; }
        .sesen-ecoa__qa-item + .sesen-ecoa__qa-item { border-left: 1px solid var(--ecoa-border); }
        .sesen-ecoa__qa-item h3 { font-size: 19px; }
        .sesen-ecoa__qa-item p { margin: 0; font-size: 16px; color: var(--ecoa-muted); }
        .sesen-ecoa__qa-target { margin-top: 34px; display: grid; grid-template-columns: auto 1fr; gap: 20px; align-items: center; padding: 28px 32px; background: var(--ecoa-navy); border-radius: 22px; color: #dce5ff; }
        .sesen-ecoa__qa-target-icon { width: 54px; height: 54px; border-radius: 16px; background: rgba(255,255,255,.1); color: var(--ecoa-light-blue); display: grid; place-items: center; }
        .sesen-ecoa__qa-target-icon svg { width: 28px; height: 28px; }
        .sesen-ecoa__qa-target h3 { color: #fff; margin: 0 0 4px; font-size: 22px; }
        .sesen-ecoa__qa-target p { margin: 0; color: #dce5ff; }

        .sesen-ecoa__version-shell { border: 1px solid var(--ecoa-border); border-radius: 30px; padding: 38px; background: #fff; }
        .sesen-ecoa__version-flow { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; position: relative; }
        .sesen-ecoa__version-flow::before { content: ""; position: absolute; top: 37px; left: 9%; right: 9%; height: 2px; background: #d4def5; }
        .sesen-ecoa__version-node { position: relative; z-index: 1; text-align: center; }
        .sesen-ecoa__version-dot { width: 74px; height: 74px; border-radius: 50%; display: grid; place-items: center; margin: 0 auto 17px; background: var(--ecoa-pale-blue); border: 1px solid #c6d3f4; color: var(--ecoa-blue-dark); }
        .sesen-ecoa__version-dot svg { width: 30px; height: 30px; }
        .sesen-ecoa__version-node:nth-child(5) .sesen-ecoa__version-dot { background: var(--ecoa-blue); color: #fff; border-color: var(--ecoa-blue); }
        .sesen-ecoa__version-node strong { display: block; color: var(--ecoa-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 17px; line-height: 1.3; font-weight: 500; }
        .sesen-ecoa__version-node small { display: block; color: var(--ecoa-muted); font-size: 16px; line-height: 1.5; margin-top: 7px; }
        .sesen-ecoa__version-bottom { margin-top: 38px; display: grid; grid-template-columns: 1fr 1fr; gap: 34px; padding-top: 30px; border-top: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__version-bottom h3 { font-size: 19px; margin-bottom: 11px; }
        .sesen-ecoa__version-bottom p { font-size: 16px; margin: 0; }
        .sesen-ecoa__risk-list { margin: 0; padding: 0; list-style: none; }
        .sesen-ecoa__risk-list li { padding: 7px 0 7px 25px; position: relative; font-size: 16px; color: var(--ecoa-body); }
        .sesen-ecoa__risk-list li::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--ecoa-mid-blue); position: absolute; left: 0; top: 16px; }

        .sesen-ecoa__content-grid { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--ecoa-border); border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__content-col { padding: 30px 24px 28px; }
        .sesen-ecoa__content-col + .sesen-ecoa__content-col { border-left: 1px solid var(--ecoa-border); }
        .sesen-ecoa__content-col h3 { font-size: 18px; }
        .sesen-ecoa__content-col ul { margin: 0; padding: 0; list-style: none; }
        .sesen-ecoa__content-col li { color: var(--ecoa-muted); font-size: 16px; padding: 5px 0; line-height: 1.5; }

        .sesen-ecoa__platform-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 62px; align-items: center; }
        .sesen-ecoa__stakeholders { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .sesen-ecoa__stakeholders span { font-size: 14px; padding: 8px 12px; border-radius: 999px; background: #fff; border: 1px solid var(--ecoa-border); color: var(--ecoa-body); }
        .sesen-ecoa__platform-panel { border-radius: 28px; background: #fff; border: 1px solid var(--ecoa-border); padding: 34px; }
        .sesen-ecoa__platform-panel-top { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 24px; }
        .sesen-ecoa__platform-panel-top h3 { margin: 0; }
        .sesen-ecoa__platform-badge { color: var(--ecoa-blue-dark); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .11em; padding: 7px 10px; border: 1px solid #c6d3f4; background: var(--ecoa-pale-blue); border-radius: 999px; }
        .sesen-ecoa__workflow-rows { border-top: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__workflow-row { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--ecoa-divider); }
        .sesen-ecoa__workflow-row span:first-child { color: var(--ecoa-navy); font-weight: 600; }
        .sesen-ecoa__workflow-row span:last-child { color: var(--ecoa-muted); font-size: 13px; }
        .sesen-ecoa__platform-note { margin-top: 22px; padding-top: 20px; border-top: 1px solid var(--ecoa-divider); font-size: 16px; color: var(--ecoa-muted); }

        .sesen-ecoa__global { display: grid; grid-template-columns: .86fr 1.14fr; gap: 76px; align-items: center; }
        .sesen-ecoa__global-stat { display: flex; align-items: flex-end; gap: 12px; margin: 8px 0 24px; }
        .sesen-ecoa__global-stat strong { color: var(--ecoa-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 74px; line-height: .95; font-weight: 500; letter-spacing: -2px; }
        .sesen-ecoa__global-stat span { color: var(--ecoa-blue-dark); font-weight: 700; padding-bottom: 8px; }
        .sesen-ecoa__global-map { position: relative; min-height: 360px; border: 1px solid var(--ecoa-border); border-radius: 30px; overflow: hidden; background: #fff; display: grid; place-items: center; }
        .sesen-ecoa__global-map svg { width: 90%; max-height: 310px; }
        .sesen-ecoa__global-map-label { position: absolute; right: 24px; bottom: 22px; padding: 9px 12px; border-radius: 999px; background: #fff; border: 1px solid var(--ecoa-border); color: var(--ecoa-blue-dark); font-size: 12px; font-weight: 700; }

        .sesen-ecoa__quality-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .sesen-ecoa__quality-item { padding: 28px 24px; border-top: 2px solid #d5e0fa; }
        .sesen-ecoa__quality-icon { width: 40px; height: 40px; color: var(--ecoa-blue-dark); margin-bottom: 18px; }
        .sesen-ecoa__quality-icon svg { width: 100%; height: 100%; }
        .sesen-ecoa__quality-item h3 { font-size: 19px; }
        .sesen-ecoa__quality-item p { margin: 0; color: var(--ecoa-muted); font-size: 16px; }
        .sesen-ecoa__iso-band { margin-top: 42px; padding: 28px 30px; border-top: 1px solid var(--ecoa-border); border-bottom: 1px solid var(--ecoa-border); display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 30px; }
        .sesen-ecoa__iso-band h3 { margin: 0 0 7px; font-size: 21px; }
        .sesen-ecoa__iso-band p { margin: 0; font-size: 16px; color: var(--ecoa-muted); }
        .sesen-ecoa__iso-tags { display: flex; gap: 9px; flex-wrap: wrap; justify-content: flex-end; }
        .sesen-ecoa__iso-tags span { padding: 8px 11px; background: var(--ecoa-pale-blue); color: var(--ecoa-blue-dark); border-radius: 999px; border: 1px solid #c6d3f4; font-size: 12px; font-weight: 700; }

        .sesen-ecoa__tech-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid rgba(255,255,255,.18); border-radius: 26px; overflow: hidden; }
        .sesen-ecoa__tech-item { padding: 29px 27px; }
        .sesen-ecoa__tech-item + .sesen-ecoa__tech-item { border-left: 1px solid rgba(255,255,255,.16); }
        .sesen-ecoa__tech-item h3 { color: #fff; font-size: 19px; }
        .sesen-ecoa__tech-item p { color: #dce5ff; font-size: 16px; margin: 0; }
        .sesen-ecoa__tech-note { margin-top: 30px; color: var(--ecoa-light-blue); font-size: 18px; font-weight: 600; text-align: center; }

        .sesen-ecoa__why-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; border-top: 1px solid var(--ecoa-border); }
        .sesen-ecoa__why-item { padding: 31px 30px 31px 0; border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__why-item:nth-child(3n+2), .sesen-ecoa__why-item:nth-child(3n+3) { padding-left: 30px; border-left: 1px solid var(--ecoa-border); }
        .sesen-ecoa__why-item h3 { font-size: 19px; }
        .sesen-ecoa__why-item p { margin: 0; font-size: 16px; color: var(--ecoa-muted); }

        .sesen-ecoa__related-list { border-top: 1px solid var(--ecoa-border); }
        .sesen-ecoa__related-row { display: grid; grid-template-columns: minmax(220px,.72fr) minmax(0,1.5fr) auto; gap: 34px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__related-row h3 { margin: 0; font-size: 20px; }
        .sesen-ecoa__related-row p { margin: 0; font-size: 16px; color: var(--ecoa-muted); }

        .sesen-ecoa__faq { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--ecoa-border); }
        .sesen-ecoa__faq-item { border-bottom: 1px solid var(--ecoa-border); }
        .sesen-ecoa__faq-button { width: 100%; appearance: none; border: 0; background: transparent; padding: 23px 0; display: grid; grid-template-columns: 1fr 38px; gap: 22px; align-items: center; text-align: left; cursor: pointer; color: var(--ecoa-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; font-weight: 500; line-height: 1.4; }
        .sesen-ecoa__faq-control { width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--ecoa-border); display: grid; place-items: center; color: var(--ecoa-blue-dark); position: relative; }
        .sesen-ecoa__faq-control::before, .sesen-ecoa__faq-control::after { content: ""; position: absolute; width: 12px; height: 1.5px; background: currentColor; }
        .sesen-ecoa__faq-control::after { transform: rotate(90deg); transition: transform .2s ease; }
        .sesen-ecoa__faq-item[data-open="true"] .sesen-ecoa__faq-control::after { transform: rotate(0deg); }
        .sesen-ecoa__faq-answer { padding: 0 70px 24px 0; color: var(--ecoa-body); font-size: 16px; }
        .sesen-ecoa__faq-answer p { margin: 0; }

        .sesen-ecoa__final { padding: 88px 0; background: linear-gradient(135deg, var(--ecoa-navy), #253f8f); color: #fff; }
        .sesen-ecoa__final-inner { display: grid; grid-template-columns: minmax(0,1fr) auto; align-items: center; gap: 56px; }
        .sesen-ecoa__final h2 { color: #fff; margin-bottom: 16px; }
        .sesen-ecoa__final p { color: #dce5ff; font-size: 18px; max-width: 760px; margin: 0; }
        .sesen-ecoa__final-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; }
        .sesen-ecoa__final .sesen-ecoa__button--secondary { background: #fff; border-color: #fff; color: #111827 !important; }
        .sesen-ecoa__final .sesen-ecoa__button--secondary:hover { background: #f2f5fb; }

        @media (max-width: 1392px) and (min-width: 1101px) {
          .sesen-ecoa__container { width: min(1280px, calc(100% - 80px)); }
        }

        @media (max-width: 1100px) {
          .sesen-ecoa__container { width: min(1280px, calc(100% - 80px)); }
          .sesen-ecoa__hero-grid { grid-template-columns: 1fr 430px; gap: 34px; }
          .sesen-ecoa__life-band { grid-template-columns: repeat(2, 1fr); }
          .sesen-ecoa__life-band::before { display: none; }
          .sesen-ecoa__content-grid { grid-template-columns: repeat(3,1fr); }
          .sesen-ecoa__content-col:nth-child(4) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__content-col:nth-child(5) { border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__quality-grid, .sesen-ecoa__tech-row { grid-template-columns: repeat(2,1fr); }
          .sesen-ecoa__tech-item:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.16); }
          .sesen-ecoa__tech-item:nth-child(4) { border-top: 1px solid rgba(255,255,255,.16); }
        }

        @media (max-width: 1020px) {
          .sesen-ecoa__hero-grid { grid-template-columns: 1fr; gap: 42px; }
          .sesen-ecoa__hero-copy { max-width: 760px; }
          .sesen-ecoa__hero-visual { max-width: 560px; justify-self: center; }
          .sesen-ecoa__version-flow { grid-template-columns: 1fr; gap: 0; }
          .sesen-ecoa__version-flow::before { top: 0; bottom: 0; left: 36px; right: auto; width: 2px; height: auto; }
          .sesen-ecoa__version-node { display: grid; grid-template-columns: 74px 1fr; gap: 18px; align-items: center; text-align: left; padding: 10px 0; }
          .sesen-ecoa__version-dot { margin: 0; }
          .sesen-ecoa__version-node small { max-width: 430px; }
        }

        @media (max-width: 900px) {
          .sesen-ecoa__container { width: calc(100% - 58px); }
          .sesen-ecoa__section { padding: 80px 0; }
          .sesen-ecoa__hero { padding: 82px 0 76px; }
          .sesen-ecoa__dual-language, .sesen-ecoa__split, .sesen-ecoa__platform-grid, .sesen-ecoa__global { grid-template-columns: 1fr; gap: 44px; }
          .sesen-ecoa__language-panel + .sesen-ecoa__language-panel { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__ecosystem-grid { grid-template-columns: repeat(2,1fr); }
          .sesen-ecoa__ecosystem-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__ecosystem-item:nth-child(4) { border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__sticky-copy { position: static; }
          .sesen-ecoa__qa-grid { grid-template-columns: repeat(2,1fr); }
          .sesen-ecoa__qa-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__qa-item:nth-child(4) { border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__content-grid { grid-template-columns: 1fr 1fr; }
          .sesen-ecoa__content-col:nth-child(3) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__content-col:nth-child(4) { border-left: 1px solid var(--ecoa-border); }
          .sesen-ecoa__content-col:nth-child(5) { border-left: 0; }
          .sesen-ecoa__why-grid { grid-template-columns: 1fr 1fr; }
          .sesen-ecoa__why-item:nth-child(3n+2), .sesen-ecoa__why-item:nth-child(3n+3) { padding-left: 0; border-left: 0; }
          .sesen-ecoa__why-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--ecoa-border); }
          .sesen-ecoa__related-row { grid-template-columns: 1fr auto; gap: 8px 24px; }
          .sesen-ecoa__related-row p { grid-column: 1 / -1; }
          .sesen-ecoa__final-inner { grid-template-columns: 1fr; }
          .sesen-ecoa__final-actions { justify-content: flex-start; }
        }

        @media (max-width: 640px) {
          .sesen-ecoa__container { width: calc(100% - 40px); }
          .sesen-ecoa__section, .sesen-ecoa__section--dense { padding: 68px 0; }
          .sesen-ecoa__hero { padding: 70px 0 64px; }
          .sesen-ecoa-page h1 { font-size: 42px; }
          .sesen-ecoa-page h2 { font-size: 32px; }
          .sesen-ecoa-page h3 { font-size: 21px; }
          .sesen-ecoa__hero-copy > p, .sesen-ecoa__section-header p, .sesen-ecoa__lead, .sesen-ecoa__final p { font-size: 17px; }
          .sesen-ecoa__hero-actions { display: grid; grid-template-columns: 1fr; }
          .sesen-ecoa__button { width: 100%; min-height: 50px; }
          .sesen-ecoa__hero-visual { max-width: 500px; }
          .sesen-ecoa__section-header { margin-bottom: 38px; }
          .sesen-ecoa__section-header--center:not(.sesen-ecoa__section-header--mobile-left) { text-align: center; }
          .sesen-ecoa__section-header--left { text-align: left; }
          .sesen-ecoa__section-header--mobile-left { text-align: left !important; }
          .sesen-ecoa__section-header p { text-align: left; }
          .sesen-ecoa__language-panel { padding: 30px 24px; }
          .sesen-ecoa__dual-callout { padding: 21px 22px; font-size: 17px; }
          .sesen-ecoa__ecosystem-grid, .sesen-ecoa__life-band, .sesen-ecoa__principles, .sesen-ecoa__migration-list, .sesen-ecoa__qa-grid, .sesen-ecoa__version-bottom, .sesen-ecoa__content-grid, .sesen-ecoa__quality-grid, .sesen-ecoa__tech-row, .sesen-ecoa__why-grid { grid-template-columns: 1fr; }
          .sesen-ecoa__ecosystem-item + .sesen-ecoa__ecosystem-item { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__life-step { min-height: auto; }
          .sesen-ecoa__lifecycle { gap: 30px; }
          .sesen-ecoa__life-band-label { margin-left: 0; }
          .sesen-ecoa__principle, .sesen-ecoa__principle:nth-child(even) { padding: 20px 0; border-left: 0; }
          .sesen-ecoa__migration-visual { padding: 24px 20px; }
          .sesen-ecoa__migration-flow { grid-template-columns: 1fr; gap: 9px; }
          .sesen-ecoa__flow-node { min-height: 112px; }
          .sesen-ecoa__flow-arrow { transform: rotate(90deg); }
          .sesen-ecoa__migration-item, .sesen-ecoa__migration-item:nth-child(even) { padding: 20px 0 8px; border-left: 0; }
          .sesen-ecoa__migration-item:nth-child(n+2) { border-top: 1px solid var(--ecoa-divider); }
          .sesen-ecoa__qa-item + .sesen-ecoa__qa-item, .sesen-ecoa__qa-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__qa-target { grid-template-columns: 1fr; padding: 25px 24px; }
          .sesen-ecoa__version-shell { padding: 28px 22px; }
          .sesen-ecoa__version-bottom { gap: 24px; }
          .sesen-ecoa__content-col, .sesen-ecoa__content-col:nth-child(3), .sesen-ecoa__content-col:nth-child(4), .sesen-ecoa__content-col:nth-child(5) { border-left: 0; border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__content-col:first-child { border-top: 0; }
          .sesen-ecoa__platform-panel { padding: 28px 22px; }
          .sesen-ecoa__platform-panel-top { align-items: flex-start; flex-direction: column; }
          .sesen-ecoa__workflow-row { grid-template-columns: 1fr; gap: 2px; align-items: start; }
          .sesen-ecoa__workflow-row span:last-child { font-size: 14px; }
          .sesen-ecoa__global-copy > h2 { text-align: center; }
          .sesen-ecoa__global-stat { justify-content: center; }
          .sesen-ecoa__final-copy > h2 { text-align: center; }
          .sesen-ecoa__global-stat strong { font-size: 62px; }
          .sesen-ecoa__global-map { min-height: 290px; }
          .sesen-ecoa__quality-item, .sesen-ecoa__why-item, .sesen-ecoa__why-item:nth-child(even) { padding: 24px 0; border-left: 0; }
          .sesen-ecoa__quality-item + .sesen-ecoa__quality-item { border-top: 1px solid var(--ecoa-border); }
          .sesen-ecoa__iso-band { grid-template-columns: 1fr; padding: 25px 0; }
          .sesen-ecoa__iso-tags { justify-content: flex-start; }
          .sesen-ecoa__tech-item + .sesen-ecoa__tech-item, .sesen-ecoa__tech-item:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.16); }
          .sesen-ecoa__why-item { border-bottom: 1px solid var(--ecoa-border); }
          .sesen-ecoa__related-row { grid-template-columns: 1fr; gap: 8px; }
          .sesen-ecoa__related-row p { grid-column: auto; }
          .sesen-ecoa__related-row .sesen-ecoa__editorial-link { margin-top: 6px; }
          .sesen-ecoa__faq-button { grid-template-columns: 1fr 36px; gap: 16px; font-size: 18px; }
          .sesen-ecoa__faq-answer { padding-right: 0; }
          .sesen-ecoa__final { padding: 70px 0; }
          .sesen-ecoa__final-actions { display: grid; grid-template-columns: 1fr; }
        }

        @media (max-width: 360px) {
          .sesen-ecoa-page h1 { font-size: 38px; }
          .sesen-ecoa-page h2 { font-size: 30px; }
          .sesen-ecoa__hero-copy > p { font-size: 17px; }
          .sesen-ecoa__language-panel { padding: 27px 20px; }
          .sesen-ecoa__hero-visual { margin-left: -10px; margin-right: -10px; width: calc(100% + 20px); }
          .sesen-ecoa__global-map { min-height: 250px; }
          .sesen-ecoa__global-map-label { right: 14px; bottom: 14px; max-width: calc(100% - 28px); text-align: center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-ecoa-page *, .sesen-ecoa-page *::before, .sesen-ecoa-page *::after { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <main>
        <section className="sesen-ecoa__hero">
          <div className="sesen-ecoa__container sesen-ecoa__hero-grid">
            <div className="sesen-ecoa__hero-copy">
              <h1>eCOA Translation Services for Global Clinical Trials</h1>
              <p>Sesen helps sponsors, CROs, clinical outcomes teams, and eCOA technology providers translate, validate, implement, review, and maintain multilingual electronic Clinical Outcome Assessments across global digital trial environments.</p>
              <div className="sesen-ecoa__hero-actions">
                <a className="sesen-ecoa__button sesen-ecoa__button--primary" href="https://www.sesen.com/get-a-quote/">GET A QUOTE <Arrow /></a>
                <a className="sesen-ecoa__button sesen-ecoa__button--secondary" href="https://www.sesen.com/contact-sales/">TALK TO AN ECOA SPECIALIST <Arrow /></a>
              </div>
              <div className="sesen-ecoa__trust-line" aria-label="Sesen eCOA service highlights">
                <span><i />Life Sciences Specialized</span>
                <span><i />ISO-Certified Quality</span>
                <span><i />150+ Languages</span>
                <span><i />Global Clinical Trial Support</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container">
            <SectionHeader
              title="eCOA Localization Goes Beyond Translating the Instrument"
              intro="Electronic Clinical Outcome Assessments bring together two language environments that must work as one: the clinical instrument itself and the digital experience through which the assessment is delivered."
            />
            <div className="sesen-ecoa__dual-language">
              <article className="sesen-ecoa__language-panel">
                <div className="sesen-ecoa__language-panel-top">
                  <div className="sesen-ecoa__language-panel-icon"><LayersIcon /></div>
                  <h3>Instrument Language</h3>
                </div>
                <p>Content that carries the meaning and measurement intent of the assessment and may require strict linguistic control.</p>
                <div className="sesen-ecoa__language-tags">
                  {['Questions & items','Instructions','Recall periods','Response choices','Rating scales','Clinical concepts','Validated terminology'].map((x) => <span key={x}>{x}</span>)}
                </div>
              </article>
              <article className="sesen-ecoa__language-panel">
                <div className="sesen-ecoa__language-panel-top">
                  <div className="sesen-ecoa__language-panel-icon"><DeviceIcon /></div>
                  <h3>Digital Experience Language</h3>
                </div>
                <p>Content that helps participants, clinicians, and observers navigate and complete the assessment correctly in each language.</p>
                <div className="sesen-ecoa__language-tags">
                  {['Navigation & buttons','Prompts & reminders','Alerts','Error messages','Help content','Onboarding','Device guidance'].map((x) => <span key={x}>{x}</span>)}
                </div>
              </article>
            </div>
            <div className="sesen-ecoa__dual-callout">A translation can be linguistically accurate yet still fail in the electronic environment. Successful multilingual eCOA programs protect both <strong>linguistic integrity</strong> and <strong>digital implementation accuracy</strong>.</div>
            <div className="sesen-ecoa__context-link-row">
              <LinkText href="https://www.sesen.com/linguistic-validation-services/">Explore Linguistic Validation Services</LinkText>
              <LinkText href="https://www.sesen.com/clinical-trial-translation-services/">Explore Clinical Trial Translation Services</LinkText>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--soft">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="Clinical Outcome Assessments"
              title="Supporting the Full eCOA Ecosystem"
              intro="Different assessment modalities serve different clinical measurement needs. Sesen supports consistent multilingual implementation across ePRO, ClinRO, ObsRO, and PerfO while protecting approved instrument wording, study terminology, and digital context."
            />
            <div className="sesen-ecoa__ecosystem-grid">
              {ecosystem.map((item) => (
                <article className="sesen-ecoa__ecosystem-item" key={item.short}>
                  <div className="sesen-ecoa__ecosystem-icon">{item.icon}</div>
                  <div className="sesen-ecoa__ecosystem-short">{item.short}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.link ? <LinkText href={item.link}>Explore ePRO Translation Services</LinkText> : null}
                </article>
              ))}
            </div>
            <div className="sesen-ecoa__ecosystem-footer">Different assessment modalities. One controlled multilingual implementation framework.</div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--pale">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="Multilingual eCOA Lifecycle"
              title="From Validated Instrument to Deployment-Ready eCOA"
              intro="Multilingual eCOA requires coordinated control across instrument content, technology environments, language versions, and study updates. Sesen supports the localization lifecycle from initial assessment review through electronic implementation, in-context QA, and ongoing version management."
              align="left"
              mobileLeft
            />
            <div className="sesen-ecoa__lifecycle">
              {[
                ["Prepare & Implement", lifecycle.slice(0, 4)],
                ["Review, Release & Maintain", lifecycle.slice(4, 8)],
              ].map(([label, steps]) => (
                <div className="sesen-ecoa__life-band-group" key={label}>
                  <div className="sesen-ecoa__life-band-label">{label}</div>
                  <div className="sesen-ecoa__life-band">
                    {steps.map((step) => (
                      <article className="sesen-ecoa__life-step" key={step.n}>
                        <div className="sesen-ecoa__life-num">{step.n}</div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                        <ul className="sesen-ecoa__mini-list">
                          {step.detail.map((d) => <li key={d}>{d}</li>)}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="sesen-ecoa__life-link"><LinkText href="https://www.sesen.com/linguistic-validation-services/">Explore the Linguistic Validation Process</LinkText></div>
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container sesen-ecoa__split">
            <div className="sesen-ecoa__sticky-copy">
              <h2>Preserve Measurement Integrity Across Languages and Screens</h2>
              <p className="sesen-ecoa__lead">For eCOA, conceptual equivalence has to survive both translation and electronic implementation. Clinical Outcome Assessments are designed to measure defined concepts in particular populations and contexts, so multilingual adaptation requires more than literal wording.</p>
              <p>A translated instrument may need to preserve conceptual meaning, cultural relevance, respondent comprehension, scale interpretation, terminology, and the intended electronic mode of administration. The appropriate linguistic validation pathway depends on the instrument and study requirements.</p>
              <div className="sesen-ecoa__validation-quote">A translation can be validated and still be implemented incorrectly. Sesen connects instrument-level linguistic expertise with screen-level implementation review.</div>
              <div className="sesen-ecoa__context-link-row"><LinkText href="https://www.sesen.com/linguistic-validation-services/">Explore Linguistic Validation Services</LinkText></div>
            </div>
            <div className="sesen-ecoa__principles">
              {[
                ["Conceptual Equivalence", "Does the translated item communicate the same underlying concept as the source?"],
                ["Cultural Relevance", "Is the language meaningful for the intended population without changing what the assessment measures?"],
                ["Participant Comprehension", "Can respondents understand the instructions, questions, recall periods, and response options as intended?"],
                ["Response-Scale Interpretation", "Do translated labels and anchors preserve the distinctions the scale is designed to capture?"],
                ["Terminology Consistency", "Are key clinical concepts rendered consistently throughout the instrument and related study content?"],
                ["Mode & Context of Use", "Does the translated assessment remain appropriate for the population, purpose, and intended electronic mode of administration?"],
              ].map(([t,d]) => <article className="sesen-ecoa__principle" key={t}><h3>{t}</h3><p>{d}</p></article>)}
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--soft">
          <div className="sesen-ecoa__container">
            <SectionHeader
              title="From Source Instrument to Electronic Implementation"
              intro="Clinical outcome measures may begin as paper questionnaires, previously validated translations, existing electronic instruments, or structured content supplied by an instrument developer. Moving that content into an electronic environment requires careful multilingual control."
            />
            <div className="sesen-ecoa__migration-visual">
              <div className="sesen-ecoa__migration-flow" aria-label="Source instrument to multilingual electronic deployment workflow">
                <div className="sesen-ecoa__flow-node"><span>Source</span><strong>Instrument</strong></div><div className="sesen-ecoa__flow-arrow"><Arrow size={22} /></div>
                <div className="sesen-ecoa__flow-node"><span>Prepare</span><strong>Content Mapping</strong></div><div className="sesen-ecoa__flow-arrow"><Arrow size={22} /></div>
                <div className="sesen-ecoa__flow-node"><span>Implement</span><strong>Electronic Build</strong></div><div className="sesen-ecoa__flow-arrow"><Arrow size={22} /></div>
                <div className="sesen-ecoa__flow-node"><span>Verify</span><strong>Multilingual QA & Release</strong></div>
              </div>
              <div className="sesen-ecoa__migration-list">
                {[
                  ["Paper-to-eCOA Migration", "Preserve item wording, sequence, instructions, response options, and measurement intent while adapting content to the electronic mode."],
                  ["Existing Translation Migration", "Reuse approved or validated language where appropriate instead of introducing unnecessary linguistic change."],
                  ["Platform or Build Migration", "Compare language assets, identify source changes, review implemented content, and resolve discrepancies during system transitions."],
                  ["New Country & Language Expansion", "Extend existing terminology, approved translations, and implementation workflows to additional markets as the study grows."],
                ].map(([t,d]) => <article className="sesen-ecoa__migration-item" key={t}><h3>{t}</h3><p>{d}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="In-Context Review"
              title="Review the Experience Patients and Clinicians Actually See"
              intro="Out-of-context text review cannot identify every implementation problem. Sesen provides screenshot review and in-context eCOA QA to evaluate multilingual content in the environment where it will be used."
              align="left"
              mobileLeft
            />
            <div className="sesen-ecoa__qa-grid">
              {qaGroups.map((q) => <article className="sesen-ecoa__qa-item" key={q.title}><h3>{q.title}</h3><p>{q.text}</p></article>)}
            </div>
            <div className="sesen-ecoa__qa-target">
              <div className="sesen-ecoa__qa-target-icon"><DeviceIcon /></div>
              <div><h3>The Final QA Target Is the User Experience</h3><p>For eCOA localization, quality cannot stop at the bilingual translation file. The final multilingual experience is what the participant, clinician, or observer sees and interacts with during the study.</p></div>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--pale">
          <div className="sesen-ecoa__container">
            <SectionHeader
              title="Control Every Language Across Every Study Update"
              intro="Global clinical trials rarely remain static. Sesen helps clinical teams keep instrument versions, language versions, software builds, and country releases connected as the study evolves."
              align="left"
              mobileLeft
            />
            <div className="sesen-ecoa__version-shell">
              <div className="sesen-ecoa__version-flow" aria-label="Version control from source content through country release">
                {[
                  [<CompareIcon />, "Source Version", "What changed in the source?"],
                  [<LayersIcon />, "Instrument Version", "Which approved wording applies?"],
                  [<GlobeIcon />, "Language Version", "Which translation matches the source?"],
                  [<DeviceIcon />, "Platform / Build", "Where is the content implemented?"],
                  [<Check />, "Country Release", "Which language and build are current?"],
                ].map(([icon,title,small]) => <div className="sesen-ecoa__version-node" key={title}><div className="sesen-ecoa__version-dot">{icon}</div><div><strong>{title}</strong><small>{small}</small></div></div>)}
              </div>
              <div className="sesen-ecoa__version-bottom">
                <div>
                  <h3>Multilingual Change Management</h3>
                  <p>Source comparison, translation-memory reuse, delta translation, terminology governance, new-country deployment, linguistic query tracking, updated screenshot review, and final language verification help keep multilingual content synchronized.</p>
                </div>
                <div>
                  <h3>Reduce Common Version Risks</h3>
                  <ul className="sesen-ecoa__risk-list">
                    <li>Unnecessary retranslation of already approved content</li>
                    <li>Outdated language appearing in a new build</li>
                    <li>Inconsistent wording introduced during updates</li>
                    <li>Language and build versions becoming disconnected</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--dense">
          <div className="sesen-ecoa__container">
            <SectionHeader
              title="Multilingual Content Across the eCOA Experience"
              intro="Sesen supports more than questionnaire items. Our eCOA localization services can cover the language participants, clinicians, observers, and study teams encounter throughout the digital assessment experience."
            />
            <div className="sesen-ecoa__content-grid">
              {contentTypes.map((col) => <article className="sesen-ecoa__content-col" key={col.title}><h3>{col.title}</h3><ul>{col.items.map((i) => <li key={i}>{i}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--soft">
          <div className="sesen-ecoa__container sesen-ecoa__platform-grid">
            <div>
              <div className="sesen-ecoa__eyebrow">Collaborative Delivery</div>
              <h2>Built to Work Across eCOA Technology Environments</h2>
              <p className="sesen-ecoa__lead">Every clinical program has its own combination of sponsors, CROs, outcomes specialists, instrument owners, platform providers, and study operations teams. Sesen is structured to work within that ecosystem.</p>
              <p>Our role is to help validated and localized content move through the customer's technology environment with the linguistic control required for global use—without requiring a specific eCOA platform or changing the study team's operating model.</p>
              <div className="sesen-ecoa__stakeholders">
                {['Sponsors','CROs','Clinical outcomes teams','Instrument developers','eCOA technology providers','Study operations'].map((x) => <span key={x}>{x}</span>)}
              </div>
            </div>
            <div className="sesen-ecoa__platform-panel">
              <div className="sesen-ecoa__platform-panel-top"><h3>Flexible Localization Workflows</h3><span className="sesen-ecoa__platform-badge">Platform-Flexible</span></div>
              <div className="sesen-ecoa__workflow-rows">
                {[
                  ["Structured localization files", "Prepare / translate"],
                  ["Spreadsheet-based content", "Map / control"],
                  ["Translation-management workflows", "Translate / review"],
                  ["Screenshot packages", "In-context QA"],
                  ["Build review", "Verify implementation"],
                  ["Content comparison", "Track updates"],
                  ["Query management", "Resolve issues"],
                  ["Multilingual release support", "Confirm readiness"],
                ].map(([a,b]) => <div className="sesen-ecoa__workflow-row" key={a}><span>{a}</span><span>{b}</span></div>)}
              </div>
              <div className="sesen-ecoa__platform-note">Sesen can coordinate with the sponsor, CRO, outcomes team, instrument owner, and technology provider to keep multilingual content aligned across implementation and review.</div>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container sesen-ecoa__global">
            <div className="sesen-ecoa__global-copy">
              <h2>Scale Multilingual eCOA Across Global Trials</h2>
              <div className="sesen-ecoa__global-stat"><strong>150+</strong><span>Languages</span></div>
              <p className="sesen-ecoa__lead">A multilingual eCOA program should remain connected across languages, revisions, digital builds, and study milestones.</p>
              <p>Sesen supports simultaneous multilingual launches, phased country activation, regional language variants, new-country additions, shared study terminology, validated-language reuse, recurring instrument updates, and ongoing platform changes.</p>
              <div className="sesen-ecoa__validation-quote">A 20-language eCOA program is not 20 unrelated translation projects. It is one clinical measurement environment that must remain synchronized across languages.</div>
            </div>
            <div className="sesen-ecoa__global-map" role="img" aria-label="Global multilingual eCOA support illustration">
              <svg viewBox="0 0 620 330" fill="none" aria-hidden="true">
                <path d="M92 96c29-36 77-54 118-51 24 2 49 14 61 31 10 15 8 31-6 41-10 8-27 12-36 23-12 15-11 37-28 46-17 8-42-4-60 7-15 9-18 31-31 39-18 12-39-7-44-25-4-15 5-31 1-46-4-18-22-31-18-49 3-12 19-8 43-16Z" fill="#EAF0FF" stroke="#B8C7EB" strokeWidth="2" />
                <path d="M260 68c30-18 68-26 102-16 25 7 44 29 66 40 22 11 49 11 65 30 12 14 9 34-5 46-18 15-44 15-61 31-13 12-16 31-30 42-23 18-58 11-84 24-20 10-35 31-58 28-21-3-31-24-27-43 4-21 22-36 26-57 5-24-11-46-7-70 3-17 0-39 13-55Z" fill="#F5F7FF" stroke="#B8C7EB" strokeWidth="2" />
                <path d="M468 235c20-17 53-16 73 0 16 13 16 35 2 49-18 18-48 23-70 12-20-10-24-35-5-61Z" fill="#EAF0FF" stroke="#B8C7EB" strokeWidth="2" />
                {[[132,118],[180,184],[312,98],[365,154],[430,131],[501,256],[260,222]].map(([cx,cy],idx) => <g key={idx}><circle cx={cx} cy={cy} r="8" fill="#4B6FD8" /><circle cx={cx} cy={cy} r="15" stroke="#4B6FD8" opacity=".18" /></g>)}
                <path d="M132 118C220 42 280 53 312 98M312 98c47 0 79 21 118 33M180 184c38 23 52 30 80 38M260 222c65-12 92-34 105-68M430 131c32 23 50 62 71 125" stroke="#6F8BE1" strokeWidth="2" strokeDasharray="5 8" strokeLinecap="round" />
              </svg>
              <span className="sesen-ecoa__global-map-label">Centralized multilingual coordination</span>
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--soft">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="Quality & Governance"
              title="Quality Controls Designed for Regulated Clinical Research"
              intro="eCOA content can influence participant understanding, study execution, clinical measurement, and the quality of data generated during a trial. Sesen applies structured quality controls designed for regulated life sciences content."
            />
            <div className="sesen-ecoa__quality-grid">
              {qualityItems.map((q) => <article className="sesen-ecoa__quality-item" key={q.title}><div className="sesen-ecoa__quality-icon">{q.icon}</div><h3>{q.title}</h3><p>{q.text}</p></article>)}
            </div>
            <div className="sesen-ecoa__iso-band">
              <div><h3>ISO-Certified Quality Foundation</h3><p>Translation, quality management, and medical-device quality processes support disciplined multilingual delivery for regulated life sciences content.</p></div>
              <div className="sesen-ecoa__iso-tags"><span>ISO 17100</span><span>ISO 9001:2015</span><span>ISO 13485:2016</span></div>
            </div>
            <div className="sesen-ecoa__context-link-row"><LinkText href="https://www.sesen.com/quality-compliance-security/">View Quality, Compliance & Security</LinkText></div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--navy">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="Technology-Enabled Quality"
              title="Technology That Strengthens Multilingual Control"
              intro="Technology can make complex global localization programs more efficient. Sesen combines translation technology and, where appropriate, AI-assisted comparison and QA with expert human review—while keeping clinical context, validated wording, and final linguistic decisions under professional control."
            />
            <div className="sesen-ecoa__tech-row">
              {[
                ["Translation Memory", "Preserve approved language for consistent reuse across instruments, interfaces, revisions, and study updates."],
                ["Terminology Intelligence", "Maintain clinical, assessment, sponsor, and study-specific terminology consistently across languages."],
                ["Automated Quality Checks", "Support review of completeness, numbers, terminology, formatting, repeated strings, tags, and placeholders."],
                ["AI-Assisted Change Detection", "Where appropriate, support identification of source changes so multilingual review can focus on content that actually requires attention."],
              ].map(([t,d]) => <article className="sesen-ecoa__tech-item" key={t}><h3>{t}</h3><p>{d}</p></article>)}
            </div>
            <div className="sesen-ecoa__tech-note">Human linguistic expertise remains central for clinical concepts, validated instrument wording, cultural interpretation, contextual decisions, and final review.</div>
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container">
            <SectionHeader
              title="Why Global Clinical Teams Choose Sesen"
              intro="eCOA localization sits at the intersection of clinical measurement, linguistic validation, patient communication, digital technology, and global study operations. Sesen brings these disciplines together."
            />
            <div className="sesen-ecoa__why-grid">
              {whySesen.map(([t,d]) => <article className="sesen-ecoa__why-item" key={t}><h3>{t}</h3><p>{d}</p></article>)}
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section sesen-ecoa__section--soft">
          <div className="sesen-ecoa__container">
            <SectionHeader
              eyebrow="Connected Clinical Trial Services"
              title="One Multilingual Partner Across the Clinical Trial Lifecycle"
              intro="eCOA is part of a larger clinical research ecosystem. Sesen connects electronic assessment localization with related language services so sponsors and CROs can maintain terminology, quality, and version consistency across the study."
              align="left"
              mobileLeft
            />
            <div className="sesen-ecoa__related-list">
              {related.map(([t,d,href,label]) => <article className="sesen-ecoa__related-row" key={t}><h3>{t}</h3><p>{d}</p><LinkText href={href}>{label}</LinkText></article>)}
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__section">
          <div className="sesen-ecoa__container">
            <SectionHeader title="eCOA Translation Services FAQs" intro="Answers to common questions about multilingual electronic Clinical Outcome Assessments, linguistic validation, migration, screenshot review, and global study updates." align="left" mobileLeft />
            <div className="sesen-ecoa__faq">
              {faqs.map(([q,a], idx) => {
                const isOpen = openFaq === idx;
                const panelId = `sesen-ecoa-faq-panel-${idx}`;
                const buttonId = `sesen-ecoa-faq-button-${idx}`;
                return (
                  <div className="sesen-ecoa__faq-item" data-open={isOpen ? "true" : "false"} key={q}>
                    <button id={buttonId} className="sesen-ecoa__faq-button" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                      <span>{q}</span><span className="sesen-ecoa__faq-control" aria-hidden="true" />
                    </button>
                    {isOpen ? <div id={panelId} className="sesen-ecoa__faq-answer" role="region" aria-labelledby={buttonId}><p>{a}</p></div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sesen-ecoa__final">
          <div className="sesen-ecoa__container sesen-ecoa__final-inner">
            <div className="sesen-ecoa__final-copy">
              <h2>Build Multilingual eCOA for Global Study Deployment</h2>
              <p>Whether you are validating a new clinical outcome assessment, migrating approved translations into an electronic platform, adding new study languages, localizing the participant experience, reviewing eCOA screenshots, or managing multilingual updates throughout a global trial, Sesen can support the program from source content through deployment.</p>
            </div>
            <div className="sesen-ecoa__final-actions">
              <a className="sesen-ecoa__button sesen-ecoa__button--primary" href="https://www.sesen.com/get-a-quote/">GET A QUOTE <Arrow /></a>
              <a className="sesen-ecoa__button sesen-ecoa__button--secondary" href="https://www.sesen.com/contact-sales/">TALK TO AN ECOA SPECIALIST <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
