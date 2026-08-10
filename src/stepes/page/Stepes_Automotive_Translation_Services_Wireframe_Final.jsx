import React from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  appLocalization: "https://www.stepes.com/app-localization-services/",
  aiTranslation: "https://www.stepes.com/ai-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  portal: "https://www.stepes.com/translation-management-portal/",
  analytics: "https://www.stepes.com/translation-reporting-analytics/",
  languages: "https://www.stepes.com/translation-languages/",
  hmiGuide:
    "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/",
  manualsGuide:
    "https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/",
  otaGuide:
    "https://www.stepes.com/resources/localization-guides/automotive-ota-software-localization/",
  evGuide:
    "https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization/",
  j2450Guide:
    "https://www.stepes.com/resources/translation-guides/sae-j2450-automotive-translation-quality/",
  terminologyGuide:
    "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/",
  adasGuide:
    "https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing/",
};

const lifecycle = [
  {
    title: "Engineering and Product Development",
    text: "Specifications, product requirements, design documentation, component descriptions, validation procedures, safety concepts, test reports, and supplier communications.",
  },
  {
    title: "Manufacturing and Supply Chain",
    text: "Work instructions, quality procedures, factory training, supplier manuals, inspection criteria, equipment documentation, and production software interfaces.",
  },
  {
    title: "Vehicle Software and Digital Experience",
    text: "Digital clusters, infotainment, navigation, voice interfaces, companion apps, connected services, and over-the-air update content.",
  },
  {
    title: "Regulatory Approval and Market Entry",
    text: "Homologation, type approval, safety, cybersecurity, environmental, warranty, legal, and country-specific market documentation.",
  },
  {
    title: "Sales, Ownership, and Aftersales",
    text: "Owner manuals, dealer training, service procedures, technical bulletins, recalls, websites, mobile apps, videos, and customer support.",
  },
];

const audiences = [
  ["vehicle", "Vehicle Manufacturers and Global OEMs", "Vehicle platforms, regional variants, model-year updates, software releases, regulatory content, dealer networks, and customer communications."],
  ["layers", "Tier 1 and Tier 2 Suppliers", "Components, subsystems, engineering data, production documentation, quality materials, software, proposals, and OEM-facing communications."],
  ["chip", "Automotive Software and Electronics", "Embedded software, electronic control systems, infotainment, diagnostics, telematics, digital cockpit applications, and connected services."],
  ["battery", "EV, Battery, and Charging Companies", "Electric powertrains, battery systems, charging hardware and networks, energy platforms, companion apps, safety content, and customer support."],
  ["radar", "ADAS and Mobility Technology Providers", "Driver-assistance systems, sensors, vehicle AI, calibration, mapping, fleet platforms, shared mobility, and connected transportation services."],
  ["wrench", "Dealership and Service Networks", "Dealer training, sales enablement, workshop procedures, parts information, diagnostic content, warranty materials, and customer communications."],
  ["box", "Automotive Aftermarket Companies", "Product catalogs, fitment information, installation instructions, packaging, e-commerce content, diagnostic tools, and distributor communications."],
  ["truck", "Commercial and Specialty Vehicles", "Trucks, buses, construction equipment, agricultural machinery, off-highway vehicles, specialty vehicles, fleets, and service ecosystems."],
];

const serviceGroups = [
  {
    label: "Technical Documentation",
    title: "Automotive Technical Translation",
    text: "Precise terminology and clear procedural language for the documentation used by engineers, technicians, suppliers, dealers, and vehicle owners.",
    items: [
      "Owner and operator manuals",
      "Service and workshop manuals",
      "Repair and maintenance procedures",
      "Parts catalogs and diagnostic content",
      "Engineering specifications and reports",
      "Technical service bulletins",
      "Supplier and quality documentation",
      "DITA, XML, and structured content",
    ],
    linkLabel: "Manufacturing Translation Services",
    link: LINKS.manufacturing,
  },
  {
    label: "Digital Vehicle Experience",
    title: "Vehicle Software and Connected Experiences",
    text: "Automotive software localization that combines linguistic expertise with context, character-length management, localization engineering, and in-product validation.",
    items: [
      "Automotive HMI strings",
      "Infotainment and digital clusters",
      "Navigation and voice interfaces",
      "Companion mobile applications",
      "Connected vehicle portals",
      "Dealer and diagnostic software",
      "OTA notifications and release notes",
      "Online help and support content",
    ],
    linkLabel: "Software Localization Services",
    link: LINKS.software,
  },
  {
    label: "Market Access",
    title: "Regulatory, Safety, and Legal Translation",
    text: "Controlled multilingual content for automotive regulatory, compliance, safety, cybersecurity, warranty, and legal programs across global markets.",
    items: [
      "Homologation and type-approval documents",
      "Safety reports and driver warnings",
      "Recall and corrective-action communications",
      "Warranty documents and policies",
      "Cybersecurity documentation",
      "Connected-service privacy and consent",
      "Environmental and emissions materials",
      "Contracts and supplier compliance content",
    ],
  },
  {
    label: "Customer Experience",
    title: "Training, Marketing, and Customer Content",
    text: "Content-specific workflows that preserve technical accuracy for training and service while adapting tone, persuasion, and brand voice for customer-facing communications.",
    items: [
      "Dealer and technician training",
      "eLearning courses",
      "Sales enablement content",
      "Product launches and websites",
      "Digital campaigns and social content",
      "Videos, subtitles, and voiceover",
      "Customer support knowledge bases",
      "Marketing translation and transcreation",
    ],
    linkLabel: "eLearning Translation Services",
    link: LINKS.elearning,
  },
];

const hmiCapabilities = [
  {
    title: "Context-Rich Localization",
    text: "Work with resource files, string IDs, screenshots, wireframes, character limits, developer notes, product terminology, and reference builds so translators understand how each string functions.",
  },
  {
    title: "Global Interface Readiness",
    text: "Manage text expansion, truncation, line wrapping, font compatibility, right-to-left languages, double-byte scripts, units, dates, regional formats, symbols, and abbreviations.",
  },
  {
    title: "In-Context Testing",
    text: "Review localized interfaces through screenshots, prototypes, test environments, simulators, mobile devices, or available vehicle environments, with tracked defects and corrections.",
  },
  {
    title: "Voice and Speech Localization",
    text: "Support voice commands, navigation instructions, virtual assistants, text-to-speech output, speech-recognition prompts, pronunciation lexicons, and multilingual language data.",
  },
];

const riskRows = [
  {
    content: "Safety-Critical HMI and Driver Warnings",
    workflow: "Automotive linguist, independent review, approved terminology, character-limit validation, and in-context testing.",
  },
  {
    content: "Regulatory and Homologation Content",
    workflow: "Subject-matter translation, second review, traceable revisions, controlled approvals, and market review where required.",
  },
  {
    content: "Owner and Service Documentation",
    workflow: "Translation memory, automotive linguists, automated QA, human review, structured publishing, and model-specific version control.",
  },
  {
    content: "OTA, Support, and High-Volume Updates",
    workflow: "AI-assisted translation, approved terminology, change detection, translation-memory reuse, targeted validation, and rapid release workflows.",
  },
  {
    content: "Automotive Marketing and Launch Content",
    workflow: "Human translation or transcreation, regional adaptation, brand review, and multimedia localization where needed.",
  },
];

const qualitySteps = [
  ["Specialist Assignment", "Select native-language professionals according to the automotive discipline, content type, target audience, and market."],
  ["Language Asset Setup", "Apply approved termbases, translation memories, style guides, product references, market instructions, and reviewer preferences."],
  ["Translation and Review", "Evaluate accuracy, completeness, terminology, readability, consistency, audience suitability, tone, and intended meaning."],
  ["Automated and In-Context QA", "Check numbers, units, tags, placeholders, character limits, untranslated text, interface behavior, and final-format presentation."],
  ["Feedback and Continuous Improvement", "Centralize reviewer comments, resolve terminology questions, record approvals, and update shared language assets for future releases."],
];

const resources = [
  {
    title: "Automotive HMI and Infotainment Localization Guide",
    text: "How context, character limits, scripts, interface design, voice, and in-context testing affect multilingual vehicle software.",
    link: LINKS.hmiGuide,
    linkLabel: "HMI Localization Guide",
  },
  {
    title: "Automotive Technical Manual Translation and DITA/XML Workflows",
    text: "Structured content, translation reuse, model-year updates, terminology control, and multilingual publishing for automotive documentation.",
    link: LINKS.manualsGuide,
    linkLabel: "Automotive Manual Translation Guide",
  },
  {
    title: "Localization for Automotive OTA Software Updates",
    text: "Continuous localization, change detection, version control, and rapid validation for recurring multilingual vehicle software releases.",
    link: LINKS.otaGuide,
    linkLabel: "Automotive OTA Localization Guide",
  },
  {
    title: "EV Battery and Charging Content Localization",
    text: "Terminology, safety, software, customer experience, and lifecycle considerations for multilingual EV and charging content.",
    link: LINKS.evGuide,
    linkLabel: "EV and Charging Localization Guide",
  },
  {
    title: "SAE J2450 for Automotive Translation Quality",
    text: "What the metric evaluates, where it adds value, and why automotive quality programs require additional content-specific review methods.",
    link: LINKS.j2450Guide,
    linkLabel: "SAE J2450 Quality Guide",
  },
  {
    title: "Automotive Terminology Management Across Models and Markets",
    text: "How centralized terminology improves consistency across platforms, suppliers, departments, regions, and customer touchpoints.",
    link: LINKS.terminologyGuide,
    linkLabel: "Automotive Terminology Guide",
  },
  {
    title: "ADAS, Voice, and In-Vehicle Linguistic Testing",
    text: "Practical guidance for validating driver warnings, voice commands, interface messages, and multilingual speech experiences in context.",
    link: LINKS.adasGuide,
    linkLabel: "In-Vehicle Linguistic Testing Guide",
  },
];

const faqs = [
  {
    q: "What types of automotive content does Stepes translate?",
    a: "Stepes translates automotive technical documentation, owner manuals, service and repair procedures, parts catalogs, engineering specifications, HMI strings, infotainment systems, mobile apps, regulatory documents, safety content, cybersecurity materials, dealer training, eLearning, websites, videos, marketing, and customer support content. We support content across product development, manufacturing, software, regulatory approval, market launch, vehicle ownership, service, and aftersales operations.",
  },
  {
    q: "How does Stepes localize automotive HMI and infotainment systems?",
    a: "Stepes combines professional automotive translation with software localization engineering and in-context QA. Our teams can work with string files, metadata, screenshots, character limits, prototypes, and terminology references. We review translations for meaning, length, consistency, script compatibility, regional formats, and interface usability, with pseudolocalization, screenshot review, simulator testing, and functional localization QA available as needed.",
  },
  {
    q: "Can Stepes manage model-year and regional vehicle updates?",
    a: "Yes. We use translation memory, source-file comparison, terminology management, and version control to identify and translate relevant changes while preserving approved content. Language assets can be organized by vehicle platform, model, product family, region, or content type so updates remain efficient without overlooking differences in specifications, features, software, terminology, or market requirements.",
  },
  {
    q: "Can AI be used for automotive translation?",
    a: "Yes, but the workflow should reflect the content’s intended use and risk. AI-assisted translation can be highly effective for repeated manuals, support content, parts information, release notes, and large-volume updates when combined with approved terminology and translation memory. Safety-critical HMI, regulatory content, recalls, warranties, complex procedures, and high-visibility communications generally require stronger professional review and validation.",
  },
  {
    q: "How does Stepes translate safety-critical driver warnings?",
    a: "We assign automotive linguists, apply approved terminology, observe character and display constraints, and use independent review where required. The translation can then be validated within screenshots, prototypes, simulators, or another available interface environment. The final workflow is configured according to the warning’s function, market, audience, and customer approval requirements.",
  },
  {
    q: "Does Stepes support DITA, XML, and automotive software files?",
    a: "Yes. Stepes supports structured technical content and a wide range of software and document formats, including DITA, XML, HTML, JSON, XLIFF, software resource files, Microsoft Office, InDesign, FrameMaker, PDF, multimedia, and learning content. Supported formats and engineering requirements are confirmed during source-file review.",
  },
  {
    q: "What is SAE J2450, and does Stepes use it?",
    a: "SAE J2450 is a translation quality metric developed for automotive technical and service information. It classifies translation errors and their severity to provide a structured evaluation method. Stepes can apply SAE J2450 where appropriate. Because it does not evaluate style, it should be supplemented with other methods for HMI, voice, marketing, and other content where usability, tone, or customer experience matters.",
  },
  {
    q: "Can Stepes support OTA and continuous software releases?",
    a: "Yes. Stepes supports incremental translation, source-change detection, translation-memory reuse, terminology management, rapid linguistic validation, versioned language assets, and integration with recurring product workflows. This enables automotive software teams to process multilingual updates throughout the vehicle lifecycle rather than treating localization as a one-time launch activity.",
  },
  {
    q: "Does Stepes provide automotive terminology management?",
    a: "Yes. We can create and maintain multilingual terminology databases containing approved terms, definitions, context, regional variants, preferred translations, prohibited alternatives, screenshots, and reviewer comments. Terminology can be shared across engineering, software, documentation, training, service, marketing, and customer support workflows.",
  },
  {
    q: "Can Stepes coordinate dealer or in-country review?",
    a: "Yes. Stepes can centralize review comments, terminology questions, revisions, and approvals from dealers, subsidiaries, distributors, subject-matter experts, and in-country stakeholders. Approved changes can be recorded in translation memories and terminology databases so they are applied consistently to future content.",
  },
  {
    q: "Which languages does Stepes support for automotive translation?",
    a: "Stepes supports 100+ languages across Europe, Asia, the Americas, the Middle East, and Africa. We work with professional native linguists who understand the target market’s automotive terminology, language conventions, and user expectations.",
    linkLabel: "View All Translation Languages",
    link: LINKS.languages,
  },
  {
    q: "How do I request an automotive translation quote?",
    a: "Upload your files through the Stepes online quote portal for a fast project assessment, or contact our automotive translation team to discuss a larger program involving multiple content types, languages, systems, or release schedules.",
    linkLabel: "Request a Translation Quote",
    link: LINKS.quote,
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ name }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };

  const paths = {
    vehicle: (
      <>
        <path {...common} d="M4 14.5 6.8 9h10.4l2.8 5.5M3 14.5h18v3H3z" />
        <circle {...common} cx="7" cy="18" r="1.6" />
        <circle {...common} cx="17" cy="18" r="1.6" />
      </>
    ),
    layers: (
      <>
        <path {...common} d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path {...common} d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    chip: (
      <>
        <rect {...common} x="6" y="6" width="12" height="12" rx="2" />
        <path {...common} d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
        <path {...common} d="M9.5 9.5h5v5h-5z" />
      </>
    ),
    code: (
      <>
        <path {...common} d="m9 7-5 5 5 5" />
        <path {...common} d="m15 7 5 5-5 5" />
        <path {...common} d="m13 5-2 14" />
      </>
    ),
    battery: (
      <>
        <rect {...common} x="3" y="7" width="17" height="10" rx="2" />
        <path {...common} d="M20 10h2v4h-2M8 10v4M6 12h4M15 10v4" />
      </>
    ),
    radar: (
      <>
        <circle {...common} cx="12" cy="12" r="2" />
        <path {...common} d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.5 4.5a10.6 10.6 0 0 0 0 15M19.5 4.5a10.6 10.6 0 0 1 0 15" />
      </>
    ),
    wrench: (
      <path {...common} d="M14.5 6.5a4 4 0 0 0-5-5L12 4 9 7 6.5 4.5a4 4 0 0 0 5 5L20 18l-2 2-8.5-8.5a4 4 0 0 0 5-5Z" />
    ),
    box: (
      <>
        <path {...common} d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path {...common} d="M4 7v10l8 4 8-4V7M12 11v10" />
      </>
    ),
    truck: (
      <>
        <path {...common} d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" />
        <circle {...common} cx="7" cy="18" r="2" />
        <circle {...common} cx="18" cy="18" r="2" />
      </>
    ),
    globe: (
      <>
        <circle {...common} cx="12" cy="12" r="9" />
        <path {...common} d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" />
      </>
    ),
    shield: (
      <>
        <path {...common} d="M12 3 20 6v6c0 4.8-3.2 7.7-8 9-4.8-1.3-8-4.2-8-9V6l8-3Z" />
        <path {...common} d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    flow: (
      <>
        <rect {...common} x="3" y="4" width="6" height="5" rx="1" />
        <rect {...common} x="15" y="15" width="6" height="5" rx="1" />
        <path {...common} d="M9 6.5h4a4 4 0 0 1 4 4v1.5M15 17.5h-4a4 4 0 0 1-4-4V12" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
      {paths[name] || paths.globe}
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Connected vehicle, digital cockpit, and multilingual documentation illustration" role="img">
      <svg viewBox="0 0 660 480" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="softBlush" x1="0" x2="1">
            <stop offset="0" stopColor="#FDF2F7" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="628" height="448" rx="34" fill="url(#softBlush)" />
        <path d="M84 363h474" stroke="#D8DEE8" strokeWidth="2" />
        <path d="M145 300c24-60 64-91 126-105 72-16 162-12 211 34 18 17 32 40 41 70" fill="none" stroke="#4D5563" strokeWidth="4" strokeLinecap="round" />
        <path d="M125 300h419c22 0 40 18 40 40v18H84v-18c0-22 18-40 41-40Z" fill="#FFFFFF" stroke="#4D5563" strokeWidth="4" />
        <path d="m209 300 36-70h159l55 70" fill="#FFFFFF" stroke="#4D5563" strokeWidth="4" strokeLinejoin="round" />
        <path d="M251 230h74v70h-109l35-70ZM325 230h73l54 70H325v-70Z" fill="#F6F8FB" stroke="#7E8796" strokeWidth="3" />
        <circle cx="180" cy="357" r="31" fill="#FFFFFF" stroke="#4D5563" strokeWidth="4" />
        <circle cx="180" cy="357" r="11" fill="#FDF2F7" stroke="#C11D63" strokeWidth="3" />
        <circle cx="490" cy="357" r="31" fill="#FFFFFF" stroke="#4D5563" strokeWidth="4" />
        <circle cx="490" cy="357" r="11" fill="#FDF2F7" stroke="#C11D63" strokeWidth="3" />
        <path d="M108 326h49M505 326h51" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" />
        <rect x="273" y="112" width="164" height="91" rx="18" fill="#FFFFFF" stroke="#4D5563" strokeWidth="3" />
        <path d="M303 139h104M303 158h62M303 177h82" stroke="#8B94A3" strokeWidth="3" strokeLinecap="round" />
        <rect x="97" y="92" width="134" height="104" rx="18" fill="#FFFFFF" stroke="#4D5563" strokeWidth="3" />
        <path d="M121 121h84M121 144h50M121 167h70" stroke="#8B94A3" strokeWidth="3" strokeLinecap="round" />
        <path d="m197 111 17 17-17 17" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="476" y="92" width="94" height="104" rx="18" fill="#FFFFFF" stroke="#4D5563" strokeWidth="3" />
        <path d="M502 122h42M497 146h52M505 170h36" stroke="#8B94A3" strokeWidth="3" strokeLinecap="round" />
        <circle cx="523" cy="73" r="13" fill="#C11D63" />
        <circle cx="253" cy="90" r="9" fill="#F2A7C6" />
        <path d="M231 142h42M437 157h39M523 196v34M164 196v28" stroke="#C11D63" strokeWidth="2.5" strokeDasharray="6 7" />
        <circle cx="164" cy="227" r="5" fill="#C11D63" />
        <circle cx="523" cy="233" r="5" fill="#C11D63" />
        <circle cx="254" cy="142" r="5" fill="#C11D63" />
        <circle cx="458" cy="157" r="5" fill="#C11D63" />
      </svg>
    </div>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

function AutomotiveTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="automotive-page">
      <style>{`
        .automotive-page,
        .automotive-page * {
          box-sizing: border-box;
        }

        .automotive-page {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #101522;
          --body: #495368;
          --muted: #6C768A;
          --line: #E2E7EF;
          --soft: #F6F8FB;
          --dark: #171924;
          --dark-soft: #232532;
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          background: #FFFFFF;
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .automotive-page a {
          color: inherit;
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .section-soft {
          background: var(--soft);
        }

        .section-blush {
          background: var(--blush);
        }

        .section-dark {
          background: var(--dark);
          color: #FFFFFF;
        }

        .eyebrow {
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px !important;
          line-height: 1.35 !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .section-dark .eyebrow {
          color: var(--pink-light) !important;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          color: var(--ink);
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .section-dark h2,
        .section-dark h3 {
          color: #FFFFFF;
        }

        h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
          max-width: 720px;
        }

        h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.16;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.25;
        }

        p,
        li,
        summary {
          font-size: 16px;
        }

        p {
          color: var(--body);
        }

        .automotive-page h1,
        .automotive-page h2,
        .automotive-page h3,
        .automotive-page p,
        .automotive-page li,
        .automotive-page a,
        .automotive-page button {
          overflow-wrap: break-word;
        }

        .hero-copy,
        .hero-grid > *,
        .service-row > *,
        .hmi-grid > *,
        .dual-column,
        .standards-layout > *,
        .risk-row > *,
        .asset-panel,
        .quality-row > *,
        .why-item > *,
        .resource-item > * {
          min-width: 0;
        }

        .section-dark p {
          color: #CED4E0;
        }

        .body-large {
          font-size: 18px !important;
          line-height: 1.7;
        }

        .section-heading {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .section-heading.centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .section-heading.centered p {
          margin-left: auto;
          margin-right: auto;
        }

        .section-heading p {
          max-width: 800px;
          margin-bottom: 0;
        }

        .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .btn {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible,
        .btn-primary *,
        .btn-primary svg,
        .btn-primary path {
          color: #FFFFFF !important;
          stroke: currentColor;
        }

        .btn-primary {
          background: var(--magenta);
          border-color: var(--magenta);
          box-shadow: 0 12px 30px rgba(193, 29, 99, 0.2);
        }

        .btn-primary:hover {
          background: var(--magenta-dark);
          border-color: var(--magenta-dark);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: #FFFFFF;
          color: var(--ink);
          border-color: #D9DFE8;
        }

        .btn-secondary:hover {
          border-color: #BFC7D3;
          transform: translateY(-1px);
        }

        .btn:focus-visible,
        .editorial-link:focus-visible,
        .faq-question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.3);
          outline-offset: 4px;
        }

        .editorial-link {
          min-height: 44px;
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .editorial-link svg {
          flex: 0 0 auto;
          margin-top: 0.25em;
          transition: transform 180ms ease;
        }

        .editorial-link:hover svg {
          transform: translateX(3px);
        }

        .hero {
          padding-top: 104px;
          padding-bottom: 88px;
          background:
            radial-gradient(circle at 88% 16%, rgba(193, 29, 99, 0.075), transparent 29%),
            #FFFFFF;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
          align-items: center;
          gap: 56px;
        }

        .hero-copy p {
          max-width: 690px;
          margin-bottom: 0;
        }

        .hero-art {
          width: 100%;
          max-width: 590px;
          justify-self: end;
        }

        .hero-art svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .trust-strip {
          background: #FFFFFF;
        }

        .trust-strip-inner {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .trust-item {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          text-align: center;
        }


        .lifecycle-track {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          position: relative;
        }

        .lifecycle-track::before {
          content: "";
          position: absolute;
          left: 8%;
          right: 8%;
          top: 29px;
          height: 2px;
          background: #DCE2EA;
        }

        .lifecycle-item {
          position: relative;
          padding: 0 18px;
          text-align: center;
        }

        .lifecycle-number {
          position: relative;
          z-index: 1;
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          margin: 0 auto 22px;
          border: 1px solid #E7C4D4;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 8px 22px rgba(17, 22, 34, 0.06);
        }

        .lifecycle-item h3 {
          min-height: 60px;
          font-size: 20px;
        }

        .lifecycle-item p {
          margin-bottom: 0;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,0.13);
          border-left: 1px solid rgba(255,255,255,0.13);
        }

        .audience-item {
          min-width: 0;
          padding: 30px;
          border-right: 1px solid rgba(255,255,255,0.13);
          border-bottom: 1px solid rgba(255,255,255,0.13);
        }

        .icon-wrap {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          border-radius: 14px;
          background: rgba(242, 167, 198, 0.1);
          color: var(--pink-light);
        }

        .audience-item h3 {
          font-size: 20px;
        }

        .audience-item p {
          margin-bottom: 0;
        }

        .service-list {
          border-top: 1px solid var(--line);
        }

        .service-row {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          padding: 48px 0;
          border-bottom: 1px solid var(--line);
        }

        .service-label {
          display: inline-block;
          margin-bottom: 14px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .service-row h3 {
          margin-bottom: 16px;
          font-size: 26px;
        }

        .service-row p {
          margin-bottom: 22px;
        }

        .service-bullets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 28px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .service-bullets li,
        .check-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--body);
        }

        .service-bullets li::before,
        .check-list li::before {
          content: "";
          flex: 0 0 6px;
          width: 6px;
          height: 6px;
          margin-top: 0.66em;
          border-radius: 50%;
          background: var(--magenta);
        }

        .hmi-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(470px, 1.05fr);
          gap: 64px;
          align-items: center;
        }

        .hmi-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 36px;
          border-top: 1px solid rgba(255,255,255,0.14);
          border-left: 1px solid rgba(255,255,255,0.14);
        }

        .hmi-feature {
          padding: 24px;
          border-right: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }

        .hmi-feature h3 {
          font-size: 20px;
        }

        .hmi-feature p {
          margin-bottom: 0;
        }

        .interface-mockup {
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 28px;
          background: var(--dark-soft);
          box-shadow: 0 28px 80px rgba(0,0,0,0.24);
        }

        .mockup-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 58px;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.13);
        }

        .mockup-title {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .mockup-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #E5E9F1;
          font-size: 14px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--pink-light);
        }

        .mockup-body {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          min-height: 430px;
        }

        .string-panel {
          padding: 22px;
          border-right: 1px solid rgba(255,255,255,0.13);
        }

        .string-label,
        .preview-label {
          margin-bottom: 14px;
          color: var(--pink-light);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .string-card {
          margin-bottom: 12px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
        }

        .string-card.selected {
          border-color: rgba(242,167,198,0.72);
          background: rgba(193,29,99,0.13);
        }

        .string-source {
          margin-bottom: 5px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .string-target {
          margin-bottom: 0;
          color: #CDD3DF;
          font-size: 16px;
        }

        .preview-panel {
          padding: 22px;
          background: rgba(255,255,255,0.02);
        }

        .dashboard-preview {
          min-height: 322px;
          padding: 28px;
          border-radius: 22px;
          background: #0F1119;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .dashboard-title {
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 600;
        }

        .dashboard-subtitle {
          margin-top: 6px;
          color: #ADB5C4;
          font-size: 16px;
        }

        .range-display {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin: 30px 0;
        }

        .range-number {
          color: #FFFFFF;
          font-size: 52px;
          line-height: 1;
          font-weight: 600;
        }

        .range-unit {
          color: #C7CDDA;
          font-size: 18px;
        }

        .charge-track {
          height: 8px;
          overflow: hidden;
          border-radius: 999px;
          background: #303443;
        }

        .charge-fill {
          width: 72%;
          height: 100%;
          border-radius: inherit;
          background: var(--magenta);
        }

        .dashboard-action {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: var(--pink-light);
          font-size: 16px;
          font-weight: 600;
        }

        .dual-editorial {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid #EECFDC;
          border-radius: 30px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .dual-column {
          padding: 48px;
        }

        .dual-column + .dual-column {
          border-left: 1px solid #EECFDC;
        }

        .check-list {
          display: grid;
          gap: 11px;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
        }

        .standards-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .standards-copy {
          position: sticky;
          top: 32px;
        }

        .standards-rows {
          border-top: 1px solid var(--line);
        }

        .standards-row {
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .standards-row h3 {
          font-size: 22px;
        }

        .standards-row p {
          margin-bottom: 0;
        }

        .risk-table {
          margin-top: 44px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .risk-row {
          display: grid;
          grid-template-columns: minmax(260px, 0.7fr) minmax(0, 1.3fr);
          gap: 48px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .risk-row h3 {
          margin-bottom: 0;
          font-size: 20px;
        }

        .risk-row p {
          margin-bottom: 0;
        }

        .ai-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 24px;
          margin-top: 34px;
        }

        .section-dark .editorial-link {
          color: var(--pink-light) !important;
        }

        .asset-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .asset-panel {
          padding: 40px;
          border: 1px solid var(--line);
          border-radius: 26px;
          background: #FFFFFF;
        }

        .asset-panel h3 {
          font-size: 26px;
        }

        .asset-panel p:last-of-type {
          margin-bottom: 0;
        }

        .link-cluster {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 24px;
          margin-top: 22px;
        }

        .quality-track {
          border-top: 1px solid var(--line);
        }

        .quality-row {
          display: grid;
          grid-template-columns: 72px minmax(250px, 0.55fr) minmax(0, 1.45fr);
          gap: 28px;
          align-items: center;
          min-height: 126px;
          padding: 26px 0;
          border-bottom: 1px solid var(--line);
        }

        .quality-number {
          color: var(--magenta);
          font-size: 22px;
          font-weight: 600;
        }

        .quality-row h3 {
          margin-bottom: 0;
          font-size: 22px;
        }

        .quality-row p {
          margin-bottom: 0;
        }

        .j2450-note {
          display: grid;
          grid-template-columns: minmax(260px, 0.65fr) minmax(0, 1.35fr);
          gap: 44px;
          margin-top: 48px;
          padding: 34px 38px;
          border-radius: 24px;
          background: var(--blush);
        }

        .j2450-note h3,
        .j2450-note p {
          margin-bottom: 0;
        }

        .enterprise-band {
          padding: 56px;
          border-radius: 30px;
          background: var(--dark);
          color: #FFFFFF;
        }

        .enterprise-band h2,
        .enterprise-band h3 {
          color: #FFFFFF;
        }

        .enterprise-band .eyebrow {
          color: var(--pink-light) !important;
        }

        .enterprise-band p {
          color: #CED4E0;
        }

        .enterprise-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          margin-top: 38px;
          border-top: 1px solid rgba(255,255,255,0.14);
          border-left: 1px solid rgba(255,255,255,0.14);
        }

        .enterprise-item {
          padding: 30px;
          border-right: 1px solid rgba(255,255,255,0.14);
          border-bottom: 1px solid rgba(255,255,255,0.14);
        }

        .enterprise-item h3 {
          font-size: 20px;
        }

        .enterprise-item p {
          margin-bottom: 0;
        }

        .program-summary {
          margin-top: 72px;
        }

        .program-summary .section-heading {
          margin-bottom: 36px;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
          background: #FFFFFF;
        }

        .program-item {
          padding: 32px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .program-item h3 {
          font-size: 21px;
        }

        .program-item p {
          margin-bottom: 0;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px 44px;
        }

        .why-item {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-top: 1px solid var(--line);
        }

        .why-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--blush);
          color: var(--magenta);
        }

        .why-item h3 {
          font-size: 20px;
        }

        .why-item p {
          margin-bottom: 0;
        }

        .resource-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          border-top: 1px solid var(--line);
        }

        .resource-item {
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .resource-item h3 {
          font-size: 21px;
        }

        .resource-item p {
          margin-bottom: 14px;
        }

        .resource-item.featured {
          grid-column: span 2;
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 64px;
          padding: 42px 0;
        }

        .resource-item.featured h3 {
          font-size: 26px;
        }

        .faq-panel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .faq-item + .faq-item {
          border-top: 1px solid var(--line);
        }

        .faq-question {
          width: 100%;
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 23px 28px;
          border: 0;
          background: transparent;
          color: var(--ink);
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          text-align: left;
          cursor: pointer;
        }

        .faq-question:hover {
          background: #FCF8FA;
        }

        .faq-toggle {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid #E1B7CA;
          border-radius: 50%;
          color: var(--magenta);
          font-size: 22px;
          font-weight: 400;
          line-height: 1;
        }

        .faq-answer {
          max-width: 880px;
          padding: 0 76px 28px 28px;
        }

        .faq-answer[hidden] {
          display: none;
        }

        .faq-answer p {
          margin-bottom: 12px;
        }

        .final-cta {
          padding-top: 80px;
          padding-bottom: 96px;
          background: #FFFFFF;
        }

        .cta-panel {
          position: relative;
          overflow: hidden;
          padding: 64px;
          border: 1px solid #EECFDC;
          border-radius: 30px;
          background: var(--blush);
        }

        .cta-panel::after {
          content: "";
          position: absolute;
          width: 310px;
          height: 310px;
          right: -110px;
          top: -120px;
          border: 1px solid rgba(193,29,99,0.16);
          border-radius: 50%;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
        }

        .cta-content p {
          max-width: 760px;
          margin-bottom: 0;
        }

        @media (max-width: 1180px) {
          .shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.88fr);
            gap: 36px;
          }

          .audience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 920px) {
          .shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .section {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 32px;
          }

          h3 {
            font-size: 22px;
          }

          .hero {
            padding-top: 88px;
            padding-bottom: 76px;
          }

          .hero-grid,
          .hmi-grid,
          .standards-layout {
            grid-template-columns: 1fr;
          }

          .hero-art {
            max-width: 620px;
            justify-self: center;
          }

          .trust-strip-inner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lifecycle-track {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .lifecycle-track::before {
            left: 28px;
            right: auto;
            top: 28px;
            bottom: 28px;
            width: 2px;
            height: auto;
          }

          .lifecycle-item {
            display: grid;
            grid-template-columns: 58px minmax(0, 1fr);
            gap: 22px;
            padding: 0 0 34px;
            text-align: left;
          }

          .lifecycle-item:last-child {
            padding-bottom: 0;
          }

          .lifecycle-number {
            margin: 0;
          }

          .lifecycle-item h3 {
            min-height: 0;
          }

          .lifecycle-item p {
            grid-column: 2;
          }

          .service-row,
          .risk-row,
          .j2450-note,
          .resource-item.featured {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .standards-copy {
            position: static;
          }

          .asset-grid,
          .dual-editorial {
            grid-template-columns: 1fr;
          }

          .dual-column + .dual-column {
            border-left: none;
            border-top: 1px solid #EECFDC;
          }

          .enterprise-grid {
            grid-template-columns: 1fr;
          }

          .resource-list {
            grid-template-columns: 1fr;
            column-gap: 0;
          }

          .resource-item.featured {
            grid-column: span 1;
          }
        }

        @media (max-width: 700px) {
          .shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .section {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .hero {
            padding-top: 72px;
            padding-bottom: 64px;
          }

          h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          .body-large {
            font-size: 18px !important;
          }

          .section-heading {
            margin-bottom: 36px;
          }

          .btn-row {
            display: grid;
            grid-template-columns: 1fr;
          }

          .btn {
            width: 100%;
            min-height: 54px;
          }

          .hero-grid {
            gap: 38px;
          }

          .hero-art {
            width: calc(100% + 8px);
            margin-left: -4px;
          }

          .trust-item {
            min-height: 82px;
            padding: 16px;
          }

          .audience-grid,
          .service-bullets,
          .hmi-features,
          .resource-list,
          .why-grid,
          .program-grid {
            grid-template-columns: 1fr;
          }

          .audience-item,
          .program-item {
            padding: 26px 22px;
          }

          .service-row {
            padding: 38px 0;
          }

          .hmi-grid {
            gap: 40px;
          }

          .mockup-body {
            grid-template-columns: 1fr;
          }

          .string-panel {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.13);
          }

          .dashboard-preview {
            min-height: auto;
          }

          .dual-column,
          .asset-panel {
            padding: 30px 24px;
          }

          .quality-row {
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 16px;
            align-items: start;
            min-height: 0;
            padding: 28px 0;
          }

          .quality-row p {
            grid-column: 2;
          }

          .enterprise-band,
          .cta-panel {
            padding: 38px 24px;
          }

          .program-summary {
            margin-top: 52px;
          }

          .enterprise-item {
            padding: 26px 22px;
          }

          .resource-item.featured {
            padding: 32px 0;
          }

          .faq-question {
            min-height: 76px;
            gap: 16px;
            padding: 21px 22px;
            font-size: 17px;
          }

          .faq-toggle {
            flex-basis: 32px;
            width: 32px;
            height: 32px;
          }

          .faq-answer {
            padding: 0 22px 24px;
          }

          .cta-panel::after {
            width: 230px;
            height: 230px;
            right: -105px;
            top: -95px;
          }

          .final-cta {
            padding-top: 64px;
            padding-bottom: 72px;
          }
        }

        @media (max-width: 390px) {
          .mockup-topbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .lifecycle-item {
            grid-template-columns: 50px minmax(0, 1fr);
            gap: 16px;
          }

          .lifecycle-number {
            width: 50px;
            height: 50px;
          }

          .lifecycle-track::before {
            left: 24px;
            top: 24px;
          }

          .string-panel,
          .preview-panel {
            padding: 18px;
          }

          .dashboard-preview {
            padding: 24px 18px;
          }

          .range-number {
            font-size: 46px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Automotive &amp; Mobility</p>
            <h1>Automotive Translation Services for Global Vehicle Programs</h1>
            <p className="body-large">
              Translate technical documentation, in-vehicle software, EV and ADAS content, regulatory materials, training, and aftersales communications with automotive linguists, AI-enabled workflows, and in-context quality assurance.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={LINKS.quote}>
                <span>Get an Instant Quote</span>
                <ArrowIcon />
              </a>
              <a className="btn btn-secondary" href={LINKS.contact}>
                <span>Talk to an Automotive Expert</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="trust-strip" aria-label="Automotive translation trust indicators">
        <div className="shell trust-strip-inner">
          <div className="trust-item">ISO 17100</div>
          <div className="trust-item">ISO 9001</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Expertise</div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading centered">
            <h2>Multilingual Content Across the Automotive Lifecycle</h2>
            <p className="body-large">
              A modern vehicle program generates multilingual content long before a vehicle reaches the road—and continues to create it through manufacturing, software releases, market approval, service, and ownership. Stepes connects terminology, product context, version history, and quality across every stage.
            </p>
          </div>
          <div className="lifecycle-track">
            {lifecycle.map((item, index) => (
              <article className="lifecycle-item" key={item.title}>
                <div className="lifecycle-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading">
            <h2>Automotive Translation Expertise Across the Mobility Ecosystem</h2>
            <p className="body-large">
              Automotive content varies by organization, vehicle system, market, and audience. Stepes builds the right multilingual workflow around your products, technologies, content formats, review requirements, and release cadence.
            </p>
          </div>
          <div className="audience-grid">
            {audiences.map(([icon, title, text]) => (
              <article className="audience-item" key={title}>
                <div className="icon-wrap"><LineIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <h2>Automotive Translation Services for Technical, Digital, and Customer Content</h2>
            <p className="body-large">
              Stepes translates the full range of automotive content using workflows designed for each deliverable’s purpose, risk, file format, audience, and review needs.
            </p>
          </div>
          <div className="service-list">
            {serviceGroups.map((group) => (
              <article className="service-row" key={group.title}>
                <div>
                  <span className="service-label">{group.label}</span>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                  {group.link && (
                    <EditorialLink href={group.link}>{group.linkLabel}</EditorialLink>
                  )}
                </div>
                <ul className="service-bullets">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell hmi-grid">
          <div>
            <p className="eyebrow">Vehicle Software</p>
            <h2>Automotive HMI and Software Localization for Connected Vehicles</h2>
            <p className="body-large">
              Automotive interfaces must communicate quickly and clearly within strict design, software, and display constraints. Stepes localizes digital cockpit systems, infotainment, navigation, driver-assistance interfaces, connected applications, charging platforms, and recurring software releases.
            </p>
            <div className="hmi-features">
              {hmiCapabilities.map((item) => (
                <article className="hmi-feature" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="ai-links">
              <EditorialLink href={LINKS.software}>Software Localization Services</EditorialLink>
              <EditorialLink href={LINKS.appLocalization}>App Localization Services</EditorialLink>
            </div>
          </div>

          <div className="interface-mockup" aria-label="Automotive software localization workflow mockup">
            <div className="mockup-topbar">
              <div className="mockup-title">Vehicle Interface Localization</div>
              <div className="mockup-status"><span className="status-dot" /> In-context review</div>
            </div>
            <div className="mockup-body">
              <div className="string-panel">
                <div className="string-label">Localized strings</div>
                <div className="string-card selected">
                  <div className="string-source">Estimated range</div>
                  <p className="string-target">Autonomie estimée</p>
                </div>
                <div className="string-card">
                  <div className="string-source">Charging scheduled</div>
                  <p className="string-target">Recharge programmée</p>
                </div>
                <div className="string-card">
                  <div className="string-source">Find a charging station</div>
                  <p className="string-target">Trouver une borne de recharge</p>
                </div>
              </div>
              <div className="preview-panel">
                <div className="preview-label">Vehicle preview</div>
                <div className="dashboard-preview">
                  <div className="dashboard-title">Autonomie estimée</div>
                  <div className="dashboard-subtitle">Batterie à 72 %</div>
                  <div className="range-display">
                    <span className="range-number">318</span>
                    <span className="range-unit">km</span>
                  </div>
                  <div className="charge-track"><div className="charge-fill" /></div>
                  <div className="dashboard-action">Trouver une borne de recharge <ArrowIcon size={17} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <div className="section-heading centered">
            <h2>Translation for EV, Charging, ADAS, and Automotive AI</h2>
            <p className="body-large">
              New mobility platforms connect vehicle engineering with batteries, energy systems, software, charging infrastructure, sensors, voice, and customer applications. Stepes keeps multilingual terminology and user guidance consistent across these connected experiences.
            </p>
          </div>
          <div className="dual-editorial">
            <article className="dual-column">
              <h3>Electric Vehicles, Batteries, and Charging Networks</h3>
              <p>
                Translate technical and customer-facing content for electric powertrains, battery-management and thermal systems, high-voltage safety, power electronics, charging hardware, charging networks, mobile apps, payment interfaces, fleet platforms, and battery lifecycle programs.
              </p>
              <ul className="check-list">
                <li>EV engineering, diagnostics, maintenance, and repair</li>
                <li>Battery specifications, manufacturing, safety, transport, service, and battery passport content</li>
                <li>Charging-station interfaces, installation, troubleshooting, and support</li>
                <li>Fleet, telematics, energy management, and mobility platforms</li>
              </ul>
            </article>
            <article className="dual-column">
              <h3>ADAS, Autonomous Systems, and Automotive AI</h3>
              <p>
                Support multilingual driver messages and technical documentation for sensors, cameras, radar, LiDAR, calibration, diagnostics, safety concepts, validation, vehicle AI, AI safety documentation, and speech-enabled systems—including content associated with ISO/PAS 8800—without treating translation as product safety certification.
              </p>
              <ul className="check-list">
                <li>Driver warnings, alerts, and intervention messages</li>
                <li>Sensor, camera, radar, and LiDAR documentation</li>
                <li>Calibration, test, validation, and technician procedures</li>
                <li>Voice prompts, speech data, intent labels, AI safety documentation, and language validation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell standards-layout">
          <div className="standards-copy">
            <p className="eyebrow">Global Market Readiness</p>
            <h2>Automotive Regulatory, Safety, and Cybersecurity Translation</h2>
            <p className="body-large">
              Stepes helps global teams translate regulatory and safety content accurately while maintaining terminology, formatting, version control, and reviewer feedback across markets and vehicle programs.
            </p>
          </div>
          <div className="standards-rows">
            <article className="standards-row">
              <h3>Regulatory and Market-Entry Content</h3>
              <p>Homologation, type approval, technical files, test reports, emissions and environmental documentation, market-specific vehicle information, warranties, recalls, safety labels, and supplier compliance records for UNECE, EU, U.S., and other market requirements.</p>
            </article>
            <article className="standards-row">
              <h3>Functional Safety Documentation</h3>
              <p>Technical content associated with ISO 26262 programs, including hazards, safety goals, requirements, mechanisms, system states, validation activities, and lifecycle documentation.</p>
            </article>
            <article className="standards-row">
              <h3>Automotive Cybersecurity Content</h3>
              <p>Cybersecurity management, threat analysis and risk assessment, supplier requirements, vulnerability communications, incident response, privacy content, driver notifications, and materials associated with ISO/SAE 21434 and UN Regulation No. 155.</p>
            </article>
            <article className="standards-row">
              <h3>Software-Update Documentation</h3>
              <p>Engineering requirements, configuration records, release notes, driver notifications, service information, regulatory documentation, and post-release support associated with controlled software updates and frameworks such as ISO 24089 and UN Regulation No. 156.</p>
            </article>
            <article className="standards-row">
              <h3>Scope of Translation Support</h3>
              <p>Stepes accurately translates and manages the multilingual content used within your regulatory, cybersecurity, safety, and quality programs. Product approval, legal certification, and system-safety validation remain with the responsible automotive organizations and authorities.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-heading">
            <h2>AI Translation Built Around Automotive Content Risk</h2>
            <p className="body-large">
              Automotive organizations manage both high-volume recurring content and highly sensitive technical or driver-facing material. Stepes combines DomainAI, translation memory, terminology controls, workflow automation, and professional linguists according to the content’s purpose, audience, complexity, and risk.
            </p>
          </div>
          <div className="risk-table">
            {riskRows.map((row) => (
              <article className="risk-row" key={row.content}>
                <h3>{row.content}</h3>
                <p>{row.workflow}</p>
              </article>
            ))}
          </div>
          <div className="ai-links">
            <EditorialLink href={LINKS.aiTranslation}>AI Translation Services</EditorialLink>
            <EditorialLink href={LINKS.translationMemory}>Translation Memory</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading centered">
            <h2>Consistent Terminology and Controlled Automotive Content</h2>
            <p className="body-large">
              The same vehicle system may appear in engineering specifications, HMI strings, owner manuals, service procedures, parts databases, training, dealer content, and customer support. Stepes helps keep that language aligned across teams, products, markets, and releases.
            </p>
          </div>
          <div className="asset-grid">
            <article className="asset-panel">
              <h3>Automotive Terminology and Translation Memory</h3>
              <p>
                Build client-approved termbases with definitions, product context, regional variants, preferred translations, prohibited alternatives, screenshots, and reviewer comments. Translation memory securely stores approved segments for potential reuse across model years, shared platforms, service procedures, software releases, and regional variants.
              </p>
              <ul className="check-list">
                <li>Vehicle, platform, component, and subsystem terminology</li>
                <li>UI, service, diagnostic, and customer-facing terms</li>
                <li>Source definitions, acronyms, approved and prohibited usage</li>
                <li>Context-aware reuse for recurring automotive updates</li>
              </ul>
              <div className="link-cluster">
                <EditorialLink href={LINKS.translationMemory}>Translation Memory</EditorialLink>
              </div>
            </article>
            <article className="asset-panel">
              <h3>Localization Engineering and Version Control</h3>
              <p>
                Manage DITA, XML, HTML, JSON, XLIFF, software resources, Microsoft Office, InDesign, FrameMaker, PDF, learning content, subtitles, and technical-system text exports. Source comparison and delta translation help preserve approved content while isolating meaningful model, market, configuration, and software changes.
              </p>
              <ul className="check-list">
                <li>Model-year, platform, region, and configuration control</li>
                <li>Source comparison, delta translation, and superseded-content tracking</li>
                <li>API, repository, content-management, and reviewer workflows</li>
                <li>Multilingual publishing, layout adaptation, and final visual QA</li>
              </ul>
              <div className="link-cluster">
                <EditorialLink href={LINKS.portal}>Translation Management Portal</EditorialLink>
                <EditorialLink href={LINKS.analytics}>Translation Reporting and Analytics</EditorialLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <h2>Automotive Translation Quality Built Into Every Workflow</h2>
            <p className="body-large">
              Quality is established during project setup, translation, review, testing, publishing, and feedback management—not added through one final proofreading step.
            </p>
          </div>
          <div className="quality-track">
            {qualitySteps.map(([title, text], index) => (
              <article className="quality-row" key={title}>
                <div className="quality-number">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="j2450-note">
            <h3>SAE J2450 Where Appropriate</h3>
            <p>
              SAE J2450 can provide a structured error metric for automotive technical and service information. Because it does not evaluate style, Stepes supplements it with in-context usability review for HMI, pronunciation and speech testing for voice, brand and cultural review for marketing, and specialist approval for regulatory content.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="enterprise-band">
            <p className="eyebrow">Enterprise Delivery</p>
            <h2>Secure, Scalable Localization for Automotive Programs</h2>
            <p className="body-large">
              Automotive translation often involves confidential product information, unreleased software, technical designs, supplier data, and launch plans. Stepes provides controlled workflows for individual projects and ongoing multilingual programs.
            </p>
            <div className="enterprise-grid">
              <article className="enterprise-item">
                <h3>Controlled Project Operations</h3>
                <p>Secure file exchange, role-based access, confidentiality controls, reviewer permissions, centralized project records, and managed language assets configured around customer requirements.</p>
              </article>
              <article className="enterprise-item">
                <h3>Parallel Multilingual Delivery</h3>
                <p>Coordinate linguists, reviewers, localization engineers, desktop-publishing specialists, and project managers across languages, time zones, and release priorities.</p>
              </article>
              <article className="enterprise-item">
                <h3>Program Visibility</h3>
                <p>Centralize project intake, reviewer feedback, approvals, issue tracking, delivery notifications, dashboards, and reporting for complex recurring programs.</p>
              </article>
            </div>
          </div>

          <div className="program-summary">
            <div className="section-heading centered">
              <h2>One Connected Automotive Localization Program</h2>
              <p className="body-large">
                Connect people, systems, approved language assets, and release controls so technical documentation, software, regulatory content, training, and customer communications move forward together.
              </p>
            </div>
            <div className="program-grid">
              <article className="program-item">
                <h3>Centralize Multilingual Content</h3>
                <p>Bring technical documentation, software, training, regulatory materials, and customer content into a coordinated translation environment.</p>
              </article>
              <article className="program-item">
                <h3>Reuse Approved Language</h3>
                <p>Apply translation memories and terminology across model updates, shared platforms, regions, and recurring software and documentation releases.</p>
              </article>
              <article className="program-item">
                <h3>Match Quality to Risk</h3>
                <p>Use the appropriate combination of AI, automotive linguists, independent review, in-context testing, and customer approval.</p>
              </article>
              <article className="program-item">
                <h3>Manage Continuous Change</h3>
                <p>Identify source updates, translate relevant changes, maintain version history, and synchronize multilingual content with product releases.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <div className="section-heading">
            <h2>Why Choose Stepes for Automotive Translation?</h2>
            <p className="body-large">
              Combine automotive subject expertise, connected localization technology, and content-specific quality controls in a program designed around your products and global release requirements.
            </p>
          </div>
          <div className="why-grid">
            {[
              ["vehicle", "Automotive-Specialized Linguists", "Professional translators selected for the relevant vehicle system, engineering discipline, document type, target market, and audience."],
              ["flow", "AI + Human Workflows", "DomainAI, translation memory, automation, and expert human review aligned with your quality, volume, cost, and turnaround requirements."],
              ["code", "HMI and Software Localization", "String context, localization engineering, linguistic QA, voice support, and in-context testing for digital vehicle experiences."],
              ["layers", "Terminology and Version Control", "Consistent language across engineering, software, manuals, service content, model years, regions, and suppliers."],
              ["globe", "Scalable Global Delivery", "Coordinated multilingual launches and continuous updates across 100+ languages through one managed automotive translation program."],
              ["shield", "ISO-Certified Processes", "Structured translation and quality-management processes aligned with ISO 17100 and ISO 9001."],
            ].map(([icon, title, text]) => (
              <article className="why-item" key={title}>
                <div className="why-icon"><LineIcon name={icon} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Automotive Knowledge Center</p>
            <h2>Automotive Localization Guides and Insights</h2>
            <p className="body-large">
              Explore practical guidance for managing technical documentation, vehicle software, regulatory content, EV systems, quality, terminology, and in-vehicle language testing.
            </p>
          </div>
          <div className="resource-list">
            {resources.map((resource, index) => (
              <article className={`resource-item ${index === 0 ? "featured" : ""}`.trim()} key={resource.title}>
                <h3>{resource.title}</h3>
                <div>
                  <p>{resource.text}</p>
                  <EditorialLink href={resource.link}>{resource.linkLabel}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading centered">
            <h2>Automotive Translation Services FAQs</h2>
            <p className="body-large">
              Answers to common questions about automotive technical translation, software localization, AI workflows, terminology, quality, and multilingual release management.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `automotive-faq-answer-${index}`;

              return (
                <div className={`faq-item ${isOpen ? "is-open" : ""}`.trim()} key={faq.q}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer" id={answerId} hidden={!isOpen}>
                    <p>{faq.a}</p>
                    {faq.link && <EditorialLink href={faq.link}>{faq.linkLabel}</EditorialLink>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div className="cta-content">
              <h2>Launch Your Automotive Content in Every Market</h2>
              <p className="body-large">
                From technical manuals and regulatory documents to connected vehicle software, EV platforms, ADAS, training, and customer experiences, Stepes helps automotive companies communicate accurately across the complete vehicle lifecycle.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href={LINKS.quote}>
                  <span>Request a Translation Quote</span>
                  <ArrowIcon />
                </a>
                <a className="btn btn-secondary" href={LINKS.contact}>
                  <span>Talk to Our Automotive Team</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AutomotiveTranslationServicesWireframe;
