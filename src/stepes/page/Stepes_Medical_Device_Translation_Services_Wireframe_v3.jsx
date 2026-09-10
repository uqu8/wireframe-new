import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const LineIcon = ({ name }) => {
  const paths = {
    document: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
    label: <><path d="m4 12 8-8h6l2 2v6l-8 8Z"/><circle cx="16" cy="8" r="1"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M7 14h4M7 17h7"/></>,
    training: <><path d="m3 10 9-5 9 5-9 5Z"/><path d="M7 12.5V17c2.6 2 7.4 2 10 0v-4.5M21 10v6"/></>,
    regulatory: <><path d="M6 3h9l4 4v14H6Z"/><path d="M15 3v5h5M9 12h7M9 16h5"/><path d="m8 8 1.5 1.5L12 7"/></>,
    lifecycle: <><path d="M20 7v5h-5"/><path d="M19 12a7 7 0 1 1-2-5"/><path d="M12 8v4l3 2"/></>,
    imaging: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v8M8 12h8"/></>,
    surgical: <><path d="m5 19 5-5M14 10l5-5M8 16l-2-2 8-8 2 2Z"/><path d="m14 6 4 4"/></>,
    implant: <><path d="M8 4v5c0 2 1.8 3 4 3s4-1 4-3V4"/><path d="M8 20v-5c0-2 1.8-3 4-3s4 1 4 3v5"/><path d="M6 4h4M14 4h4M6 20h4M14 20h4"/></>,
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M6 11h3l2-4 3 8 2-4h2"/></>,
    lab: <><path d="M9 3v6l-4 8a2.5 2.5 0 0 0 2.2 4h9.6A2.5 2.5 0 0 0 19 17l-4-8V3"/><path d="M8 13h8M8 3h8"/></>,
    ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="5"/><path d="M10 13.5c.8.7 3.2.7 4 0M10 10h.01M14 10h.01"/></>,
    terminology: <><path d="M4 5h8v6H7l-3 3Z"/><path d="M12 10h8v6h-3l-3 3v-3h-2Z"/><path d="M7 8h2M15 13h2"/></>,
    memory: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9ZM9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>,
    review: <><path d="m12 3 8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    team: <><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a7 7 0 0 1 14 0"/><path d="M16 7a3 3 0 1 1 0 6M17 15a6 6 0 0 1 5 6"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    integration: <><path d="M8 12h8M5 9l-3 3 3 3M19 9l3 3-3 3"/><rect x="8" y="5" width="8" height="14" rx="2"/></>,
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] || paths.document}
    </svg>
  );
};

const MedicalDeviceHeroArt = () => (
  <svg className="hero-art-svg" viewBox="0 0 650 540" aria-hidden="true">
    <defs>
      <linearGradient id="medicalBlush" x1="0" x2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#FFF9FC" />
      </linearGradient>
      <filter id="medicalShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#1B2431" floodOpacity="0.09" />
      </filter>
    </defs>

    <path d="M93 80c72-61 180-67 257-17 48 31 77 79 118 119 50 49 111 88 100 164-10 69-66 128-137 142-66 13-127-17-192-28-68-11-144 2-180-55-42-66-17-149 20-219 5-10 10-21 14-31Z" fill="url(#medicalBlush)" />

    <g filter="url(#medicalShadow)">
      <rect x="114" y="90" width="418" height="318" rx="32" fill="#FFFFFF" stroke="#D9DEE6" strokeWidth="2" />
      <rect x="138" y="115" width="370" height="266" rx="22" fill="#FAFBFD" stroke="#E5E8EE" />
      <path d="M138 158h370" stroke="#E2E6EC" />
      <circle cx="160" cy="137" r="4" fill="#C11D63" />
      <circle cx="176" cy="137" r="4" fill="#C7CDD6" />
      <circle cx="192" cy="137" r="4" fill="#C7CDD6" />
      <path d="M375 137h95" stroke="#A8B0BC" strokeWidth="2.5" strokeLinecap="round" />

      <rect x="158" y="180" width="142" height="176" rx="20" fill="#FFFFFF" stroke="#DCE1E8" />
      <path d="M184 205h88M184 222h64" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="229" cy="270" r="33" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.5" />
      <path d="M229 247v46M206 270h46" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <path d="M184 325h91" stroke="#8D96A3" strokeWidth="2.5" strokeLinecap="round" />

      <rect x="321" y="180" width="164" height="82" rx="18" fill="#121826" />
      <path d="M345 204h58M345 221h112M345 238h76" stroke="#CDD3DD" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m449 202 16 9-16 9Z" fill="#C11D63" />

      <rect x="321" y="280" width="164" height="76" rx="18" fill="#FFFFFF" stroke="#DCE1E8" />
      <path d="M344 306h52M344 324h102" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M421 300v30M406 315h30" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    <g filter="url(#medicalShadow)">
      <rect x="48" y="211" width="118" height="88" rx="18" fill="#FFFFFF" stroke="#D9DEE6" strokeWidth="2" />
      <path d="M69 236h66M69 252h45M69 271h76" stroke="#6D7786" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M142 268v18h-18" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g filter="url(#medicalShadow)">
      <rect x="487" y="244" width="118" height="96" rx="18" fill="#FFFFFF" stroke="#D9DEE6" strokeWidth="2" />
      <circle cx="521" cy="277" r="15" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M551 270h31M551 284h22M507 313h75" stroke="#6D7786" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    <g filter="url(#medicalShadow)">
      <rect x="238" y="393" width="190" height="92" rx="20" fill="#FFFFFF" stroke="#D9DEE6" strokeWidth="2" />
      <path d="M267 420h71M267 438h117M267 456h84" stroke="#6D7786" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="388" cy="421" r="11" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="m383 421 4 4 7-9" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <path d="M165 254h-16M488 290h-16M333 408v-24" stroke="#7E8896" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 8" />
    <circle cx="166" cy="254" r="5" fill="#C11D63" />
    <circle cx="487" cy="290" r="5" fill="#C11D63" />
    <circle cx="333" cy="407" r="5" fill="#C11D63" />

    <circle cx="549" cy="112" r="42" fill="#FFFFFF" stroke="#E4DCE1" strokeWidth="2" />
    <path d="M549 89v46M526 112h46" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
    <circle cx="92" cy="394" r="32" fill="#FFFFFF" stroke="#E4DCE1" strokeWidth="2" />
    <path d="M78 394h28M92 380v28" stroke="#1E2735" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CollaborationArt = () => (
  <svg className="collaboration-art" viewBox="0 0 430 300" aria-hidden="true">
    <defs>
      <filter id="collabShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#2A1B24" floodOpacity="0.08" />
      </filter>
    </defs>
    <circle cx="332" cy="82" r="70" fill="#FFFFFF" opacity="0.55" />
    <circle cx="91" cy="242" r="55" fill="#FFFFFF" opacity="0.42" />
    <g filter="url(#collabShadow)">
      <rect x="72" y="46" width="286" height="190" rx="28" fill="#FFFFFF" stroke="#ECD8E1" strokeWidth="2" />
      <rect x="94" y="68" width="242" height="146" rx="18" fill="#FAFBFD" stroke="#E4E7ED" />
      <path d="M94 105h242" stroke="#E3E6EC" />
      <circle cx="116" cy="87" r="4" fill="#C11D63" />
      <circle cx="132" cy="87" r="4" fill="#C8CED7" />
      <path d="M245 87h66" stroke="#9BA4B2" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="143" cy="152" r="27" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M143 134v36M125 152h36" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M194 132h97M194 151h77M194 170h104" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M194 190h58" stroke="#9BA4B2" strokeWidth="2.5" strokeLinecap="round" />
    </g>
    <g>
      <circle cx="84" cy="86" r="27" fill="#FFFFFF" stroke="#ECD8E1" strokeWidth="2" />
      <circle cx="84" cy="80" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M68 102c4-10 28-10 32 0" fill="none" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="362" cy="186" r="30" fill="#FFFFFF" stroke="#ECD8E1" strokeWidth="2" />
      <circle cx="362" cy="179" r="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M344 205c5-12 31-12 36 0" fill="none" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="289" cy="250" r="26" fill="#FFFFFF" stroke="#ECD8E1" strokeWidth="2" />
      <circle cx="289" cy="244" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M274 266c4-10 26-10 30 0" fill="none" stroke="#697485" strokeWidth="2.5" strokeLinecap="round" />
    </g>
    <path d="M106 98l31 28M339 175l-35-24M299 228l-28-28" stroke="#A7AFBB" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 7" />
  </svg>
);

const contentGroups = [
  {
    icon: "label",
    title: "IFUs, Labels, and Packaging",
    text: "Translate the content users rely on to identify, understand, and operate a device, including professional-use and patient-use instructions.",
    items: ["IFUs and electronic IFUs", "Device labels and packaging", "Quick-start guides", "Warnings and precautions", "Symbol explanations", "Patient information"],
  },
  {
    icon: "document",
    title: "Technical and Product Documentation",
    text: "Support engineering, installation, operation, maintenance, and field service with precise multilingual technical content.",
    items: ["User and operator manuals", "Product specifications", "Installation instructions", "Service and maintenance manuals", "Calibration procedures", "Technical drawings"],
  },
  {
    icon: "regulatory",
    title: "Regulatory and Quality Documentation",
    text: "Translate documentation used by regulatory, quality, clinical, and product teams throughout the device lifecycle.",
    items: ["Technical documentation", "Risk-management materials", "Clinical evaluation content", "Verification and validation records", "Quality procedures", "Audit documentation"],
  },
  {
    icon: "software",
    title: "Software and Digital Content",
    text: "Localize the digital experiences through which healthcare professionals, technicians, and patients interact with connected devices.",
    items: ["Embedded user interfaces", "Mobile applications", "Clinician dashboards", "Patient portals", "Online help", "Release notes"],
  },
  {
    icon: "training",
    title: "Training and Support Content",
    text: "Prepare multilingual materials for product adoption, professional education, technical support, and field operations.",
    items: ["Product training", "Clinical education", "eLearning courses", "Field-support documentation", "Knowledge bases", "Video and multimedia"],
  },
  {
    icon: "lifecycle",
    title: "Post-Market and Lifecycle Content",
    text: "Keep global stakeholders informed as safety information, software, instructions, and product communications evolve after launch.",
    items: ["Revised IFUs and labels", "Field safety communications", "Product update notices", "Complaint-related narratives", "Software update content", "Customer communications"],
  },
];

const deviceCategories = [
  ["imaging", "Diagnostic and Imaging Systems", "MRI, CT, ultrasound, X-ray, digital pathology, imaging workstations, and diagnostic software."],
  ["surgical", "Surgical and Interventional Devices", "Surgical instruments, robotic systems, catheters, endoscopy equipment, and navigation technologies."],
  ["implant", "Implantable and Therapeutic Devices", "Orthopedic, cardiovascular, neuromodulation, infusion, respiratory, and rehabilitation devices."],
  ["monitor", "Monitoring and Connected Devices", "Patient monitoring, remote platforms, wearables, sensor-based devices, and home-use technologies."],
  ["lab", "Laboratory and IVD Systems", "Laboratory analyzers, point-of-care systems, test kits, sample-processing equipment, and diagnostic software."],
  ["ai", "SaMD and AI-Enabled Devices", "Clinical decision support, digital therapeutics, connected applications, cloud platforms, and AI-enabled software functions."],
];

const lifecycleStages = [
  ["Research and Development", "Design inputs, specifications, usability research, prototype documentation, and technical collaboration."],
  ["Clinical and Regulatory Preparation", "Clinical evaluation content, risk-management materials, technical files, and validation documentation."],
  ["Product Launch and Market Entry", "IFUs, labeling, software, training, websites, distributor materials, and launch communications."],
  ["Commercialization and Adoption", "Clinical education, product support, service documentation, patient information, and sales-enablement content."],
  ["Post-Market Operations", "Product updates, revised safety information, field communications, complaint content, and recurring software releases."],
];

const marketItems = [
  {
    title: "European Union",
    text: "Support MDR- and IVDR-regulated content across Member States, including IFUs, eIFUs, labels, software, technical documentation, and safety communications. Language requirements can vary by market, device, intended user, and content type.",
  },
  {
    title: "United States",
    text: "Translate medical device content used for professional education, patient support, clinical and research activities, commercial programs, and multilingual user communication within FDA-regulated environments.",
  },
  {
    title: "Canada",
    text: "Prepare English and French Canadian device content for labels, instructions, software, training, and market support with terminology adapted for Canadian users and requirements.",
  },
  {
    title: "Asia-Pacific, Latin America, and the Middle East",
    text: "Coordinate language programs for Japan, China, South Korea, Australia, Southeast Asia, Latin America, the Middle East, and other markets with locale-specific terminology and review workflows.",
  },
];

const workflowSteps = [
  ["Requirements Review", "Confirm files, languages, markets, intended users, device category, content type, schedule, and review expectations."],
  ["File Preparation", "Analyze source files, extract translatable content, protect variables and tags, and prepare documents or software resources."],
  ["Resource Assignment", "Select linguists and reviewers by language, medical-device experience, specialty, audience, and target market."],
  ["Translation", "Apply approved terminology, translation memory, style guidance, product references, screenshots, and client instructions."],
  ["Review and QA", "Perform the agreed linguistic review, terminology validation, completeness checks, number and unit checks, and technical QA."],
  ["Client Review", "Coordinate regulatory, product, clinical, or in-country feedback and preserve approved decisions for future releases."],
  ["Production and Delivery", "Complete multilingual DTP, software-file generation, final-format QA, versioned delivery, and language-asset updates."],
];

const aiPaths = [
  {
    label: "Higher-Risk Content",
    title: "Professional Human Translation",
    text: "Qualified linguists translate specialized, novel, patient-facing, safety-related, or high-impact content with direct human control over meaning and terminology.",
    items: ["Safety-critical instructions", "Patient-facing content", "Specialized technical material"],
  },
  {
    label: "Managed Efficiency",
    title: "AI-Assisted Human Translation",
    text: "AI, translation memory, approved terminology, and automated QA help professional linguists work more efficiently while retaining human responsibility for final quality.",
    items: ["Approved language assets", "Professional validation", "Documented quality checks"],
  },
  {
    label: "Suitable Content",
    title: "Machine Translation Post-Editing",
    text: "Selected lower-risk or highly repetitive content can use machine translation with professional post-editing when the language pair, content, and client requirements support it.",
    items: ["Content-specific suitability", "Terminology application", "Professional editing"],
  },
  {
    label: "Client-Provided Output",
    title: "Expert AI Translation Review",
    text: "Stepes can review translations generated by a client’s AI or machine translation system for accuracy, completeness, terminology, locale fit, and context.",
    items: ["Source and target review", "Multilingual file support", "Severity-based findings"],
  },
];

const qualityItems = [
  ["review", "ISO 13485 Quality Management", "A medical-device quality framework supporting defined processes, qualified resources, documentation, issue handling, and continual improvement."],
  ["document", "ISO 17100 Translation Workflows", "Professional translation and review practices supported by defined resource competencies and process requirements."],
  ["chart", "ISO 9001 Process Discipline", "Broader quality-management controls for process consistency, customer focus, performance monitoring, and improvement."],
  ["team", "Qualified Linguists and Reviewers", "Resources matched by language, medical-device experience, technical specialty, content type, target market, and review role."],
  ["lock", "Secure Content Handling", "Controlled access, secure file exchange, project permissions, confidentiality procedures, and enterprise onboarding support."],
  ["integration", "Documented and Connected Workflows", "Defined instructions, approved language assets, review records, issue resolution, controlled delivery, and recurring program visibility."],
];

const benefits = [
  ["globe", "Faster Multilingual Launch Preparation", "Coordinate documents, software, languages, reviewers, and delivery requirements through one managed program."],
  ["terminology", "Greater Terminology Consistency", "Use approved device language across IFUs, labels, interfaces, training, technical documentation, and support."],
  ["memory", "Less Rework Across Updates", "Reuse validated content and focus translation and review effort on new or changed material."],
  ["team", "Clearer Reviewer Coordination", "Give regulatory, product, clinical, and regional stakeholders a structured process for feedback and approvals."],
  ["lifecycle", "More Scalable Global Operations", "Retain language assets and workflows across products, business units, markets, and recurring release cycles."],
  ["review", "Clearer User Experiences", "Help healthcare professionals, technicians, caregivers, and patients understand how to operate and interact with the device."],
];

const languages = [
  "Arabic", "Brazilian Portuguese", "Chinese, Simplified", "Chinese, Traditional", "Czech", "Dutch", "French", "French Canadian", "German", "Italian", "Japanese", "Korean", "Polish", "Portuguese", "Spanish", "Swedish",
];

const faqs = [
  ["What are medical device translation services?", "Medical device translation services adapt the documents, software, labeling, training, and communications associated with a device for users in other languages and markets. Content may include IFUs, labels, packaging, technical manuals, software interfaces, mobile applications, regulatory documentation, training, service materials, and post-market communications."],
  ["Why do medical device translations require specialized linguists?", "Medical device content can combine clinical concepts, engineering, software, manufacturing, usability, and safety-related instructions. Specialized linguists are better equipped to understand device context, preserve technical meaning, apply approved terminology, and adapt content for healthcare professionals, technicians, patients, or other intended users."],
  ["Does Stepes translate medical device IFUs and eIFUs?", "Yes. Stepes translates professional-use and patient-use IFUs, electronic IFUs, quick-start guides, operator manuals, and supporting instructions. Services can include translation, linguistic review, terminology management, multilingual formatting, structured-content support, and final-format QA."],
  ["Can Stepes translate medical device labels and packaging?", "Yes. Stepes translates device labels, packaging, inserts, warnings, precautions, storage information, symbol explanations, product identifiers, and related content. Workflows can address text expansion, space constraints, right-to-left languages, multilingual artwork, numbers, units, and print-layout requirements."],
  ["Does Stepes localize medical device software and SaMD?", "Yes. Stepes localizes embedded device interfaces, desktop software, mobile applications, web portals, clinician dashboards, patient interfaces, resource files, online help, notifications, release notes, and software documentation. In-context linguistic testing can identify truncation, display, context, terminology, and character-rendering issues."],
  ["Can Stepes support EU MDR- and IVDR-related content?", "Stepes translates documentation and user-facing content used in MDR- and IVDR-regulated environments, including IFUs, eIFUs, labels, software, technical documentation, safety communications, and training. Clients remain responsible for confirming the legal and regulatory requirements applicable to their products and markets."],
  ["How does Stepes maintain medical device terminology consistency?", "Stepes uses approved termbases, translation memory, style guides, previous translations, product references, screenshots, and client-review feedback. Approved terminology can be applied across IFUs, software, labels, technical documentation, training, and future product updates."],
  ["Does Stepes use AI for medical device translation?", "Stepes can use AI and machine translation as part of an appropriately configured workflow. The method depends on the content, intended audience, language pair, risk, available terminology, and client requirements. Higher-risk or highly specialized content receives greater professional human involvement and review."],
  ["Can Stepes review medical device translations produced by our own AI system?", "Yes. Clients can provide source content together with AI- or machine-generated translations for expert review. Stepes can evaluate accuracy, completeness, terminology, context, consistency, readability, locale suitability, and formatting or software constraints."],
  ["What file formats can Stepes process?", "Stepes supports common document, design, structured-content, software, web, eLearning, audio, and video formats. Examples include Microsoft Office, Adobe InDesign, XML, HTML, JSON, software resource files, PDFs, subtitle files, and structured documentation formats."],
  ["Can Stepes support recurring medical device updates?", "Yes. Stepes supports ongoing translation for revised IFUs, labeling changes, software releases, product updates, training revisions, and post-market communications. Translation memory, terminology management, delta translation, and version-aware workflows help preserve continuity from one release to the next."],
  ["How do I request a medical device translation quote?", "Submit your source files, target languages, required services, and preferred deadline through the Stepes online quote platform. Our team will review the materials and provide pricing and turnaround information."],
];

const relatedServices = [
  ["Life Sciences Translation Services", "Broader translation support for clinical, medical, pharmaceutical, biotechnology, and regulated life sciences content.", "https://www.stepes.com/life-sciences-translation-services/", "Explore Life Sciences Translation"],
  ["Medical Translation Services", "Professional translation for medical, healthcare, patient, clinical, and scientific communication.", "https://www.stepes.com/medical-translation-services/", "Explore Medical Translation"],
  ["IFU Translation Services", "Specialized translation, review, and multilingual production for instructions for use.", "https://www.stepes.com/ifu-translation-services/", "Explore IFU Translation"],
  ["Medical Device Labeling Translation", "Translate labels, packaging, e-labeling, UDI-related content, warnings, and accompanying information.", "https://www.stepes.com/medical-device-labeling-translation-services/", "Explore Device Labeling Translation"],
  ["In Vitro Diagnostic Translation", "Translation for IVD instruments, diagnostic software, test documentation, labels, and package inserts.", "https://www.stepes.com/in-vitro-diagnostics-translation/", "Explore IVD Translation"],
  ["Software Localization Services", "Localization engineering, user-interface translation, linguistic testing, and recurring release support.", "https://www.stepes.com/software-localization-services/", "Explore Software Localization"],
  ["Multilingual Desktop Publishing", "Multilingual formatting and production for IFUs, manuals, labels, packaging, and technical documentation.", "https://www.stepes.com/multilingual-desktop-publishing/", "Explore Multilingual DTP"],
  ["Terminology Management", "Create and govern approved medical device terminology across products, languages, and content types.", "https://www.stepes.com/terminology-management/", "Explore Terminology Management"],
];

const resources = [
  ["Medical Device IFU Translation Guide", "Plan professional and patient-use IFU translation, review, terminology, layout, version control, and final-format quality assurance.", "https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation-guide/", "Read the IFU Translation Guide"],
  ["Electronic IFUs and Multilingual Version Control", "Explore how to coordinate multilingual eIFU content across digital delivery, downloadable files, revisions, and paper versions.", "https://www.stepes.com/resources/localization-guides/electronic-ifu-translation-version-control/", "Explore eIFU Version Control"],
  ["Medical Device Software Localization Checklist", "Review interface context, terminology, variables, text expansion, character rendering, right-to-left behavior, and linguistic testing.", "https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/", "Use the Software Localization Checklist"],
  ["AI Translation for Medical Devices", "Understand where AI can improve translation efficiency and where professional human validation remains essential.", "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-medical-devices/", "Explore AI Translation Guidance"],
];

export default function StepesMedicalDeviceIndustryPage() {
  return (
    <main className="medical-page">
      <style>{`
        .medical-page {
          --m-ink: #111522;
          --m-ink-soft: #3c4658;
          --m-muted: #687386;
          --m-line: #e2e6ed;
          --m-line-dark: rgba(255,255,255,.16);
          --m-bg: #ffffff;
          --m-bg-soft: #f7f8fb;
          --m-blush: #fdf2f7;
          --m-magenta: #c11d63;
          --m-magenta-dark: #9f1d55;
          --m-magenta-deep: #7a1542;
          --m-magenta-light: #f2a7c6;
          --m-dark: #121826;
          --m-radius-lg: 30px;
          --m-radius-md: 22px;
          --m-shadow: 0 24px 70px rgba(20, 27, 42, .08);
        }

        .medical-page,
        .medical-page * { box-sizing: border-box; }
        .medical-page {
          overflow-x: clip;
          background: var(--m-bg);
          color: var(--m-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
        }
        .medical-page a { color: inherit; }
        .medical-page h1,
        .medical-page h2,
        .medical-page h3,
        .medical-page p { margin-top: 0; }
        .medical-page h1,
        .medical-page h2,
        .medical-page h3 { font-weight: 600; letter-spacing: -.025em; line-height: 1.12; }
        .medical-page h1 { font-size: 48px; margin-bottom: 24px; }
        .medical-page h2 { font-size: 36px; margin-bottom: 22px; }
        .medical-page h3 { font-size: 24px; margin-bottom: 14px; }
        .medical-page p { color: var(--m-ink-soft); font-size: 16px; margin-bottom: 20px; }
        .medical-page h1,
        .medical-page h2,
        .medical-page h3,
        .medical-page p,
        .medical-page li,
        .medical-page a { overflow-wrap: break-word; }
        .medical-page ul { margin: 0; padding: 0; list-style: none; }
        .medical-page .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .medical-page .section { padding: 96px 0; }
        .medical-page .section.dense { padding: 80px 0; }
        .medical-page .section-soft { background: var(--m-bg-soft); }
        .medical-page .section-blush { background: var(--m-blush); }
        .medical-page .section-dark { background: var(--m-dark); color: #fff; }
        .medical-page .section-dark p { color: #cbd2dc; }
        .medical-page .eyebrow {
          color: var(--m-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .18em !important;
          text-transform: uppercase;
          margin-bottom: 18px !important;
          opacity: 1 !important;
        }
        .medical-page .section-dark .eyebrow { color: var(--m-magenta-light) !important; }
        .medical-page .section-intro { max-width: 810px; font-size: 18px !important; line-height: 1.68; margin-bottom: 0 !important; }
        .medical-page .section-head { max-width: 830px; margin-bottom: 52px; }
        .medical-page .section-head.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .medical-page .section-head.centered .section-intro { margin-left: auto; margin-right: auto; }
        .medical-page .split-head { display: grid; grid-template-columns: .78fr 1.22fr; gap: 92px; align-items: start; margin-bottom: 52px; }
        .medical-page .split-head .section-intro { max-width: 720px; }
        .medical-page .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .medical-page .split-2.top { align-items: start; }
        .medical-page .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .medical-page .btn {
          min-height: 50px;
          padding: 13px 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .medical-page .btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .medical-page .btn-primary,
        .medical-page .btn-primary:link,
        .medical-page .btn-primary:visited,
        .medical-page .btn-primary:hover,
        .medical-page .btn-primary:active,
        .medical-page .btn-primary:focus,
        .medical-page .btn-primary:focus-visible,
        .medical-page .btn-primary * { color: #fff !important; }
        .medical-page .btn-primary svg,
        .medical-page .btn-primary svg * { stroke: #fff !important; }
        .medical-page .btn-primary { background: var(--m-magenta); box-shadow: 0 14px 32px rgba(193,29,99,.20); }
        .medical-page .btn-primary:hover { background: var(--m-magenta-dark); transform: translateY(-2px); }
        .medical-page .btn-secondary { background: #fff; border: 1px solid #d8dde5; color: var(--m-ink); }
        .medical-page .btn-secondary:hover { border-color: #bfc5cf; transform: translateY(-2px); }
        .medical-page .btn:focus-visible,
        .medical-page .editorial-link:focus-visible,
        .medical-page details summary:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }
        .medical-page .editorial-link {
          color: var(--m-magenta) !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .medical-page .editorial-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform .2s ease; }
        .medical-page .editorial-link:hover svg { transform: translateX(4px); }
        .medical-page .section-dark .editorial-link { color: var(--m-magenta-light) !important; }
        .medical-page .icon { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .medical-page .icon-box { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; background: var(--m-blush); color: var(--m-magenta); flex: 0 0 auto; }

        .medical-page .hero { padding: 96px 0 88px; position: relative; }
        .medical-page .hero-grid { display: grid; grid-template-columns: minmax(0, .97fr) minmax(470px, 1.03fr); gap: 52px; align-items: center; }
        .medical-page .hero-copy { max-width: 650px; }
        .medical-page .hero-copy .hero-lead { font-size: 18px; line-height: 1.7; max-width: 640px; margin-bottom: 30px; color: #465064; }
        .medical-page .hero-proof { margin-top: 24px; color: #5f6878; font-size: 14px; line-height: 1.5; }
        .medical-page .hero-art { min-height: 480px; display: flex; align-items: center; justify-content: center; }
        .medical-page .hero-art-svg { width: 100%; height: auto; max-height: 540px; }

        .medical-page .trust-strip { border-top: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); background: #fff; }
        .medical-page .trust-grid { display: flex; align-items: center; justify-content: space-between; gap: 24px 36px; flex-wrap: wrap; padding-top: 26px; padding-bottom: 26px; }
        .medical-page .trust-item { color: var(--m-ink); font-weight: 600; font-size: 16px; text-align: center; flex: 1 1 175px; }

        .medical-page .value-rows { border-top: 1px solid var(--m-line); }
        .medical-page .value-row { display: grid; grid-template-columns: 54px 210px 1fr; gap: 24px; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--m-line); }
        .medical-page .value-row h3 { font-size: 21px; margin-bottom: 0; }
        .medical-page .value-row p { margin-bottom: 0; }

        .medical-page .expertise-layout { display: grid; grid-template-columns: .86fr 1.14fr; gap: 78px; align-items: start; }
        .medical-page .expertise-panel { border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); background: #fff; overflow: hidden; }
        .medical-page .expertise-row { display: grid; grid-template-columns: 48px 1fr; gap: 20px; padding: 28px 30px; border-bottom: 1px solid var(--m-line); }
        .medical-page .expertise-row:last-child { border-bottom: 0; }
        .medical-page .expertise-row h3 { font-size: 21px; }
        .medical-page .expertise-row p { margin-bottom: 0; }
        .medical-page .audience-wrap { margin-top: 32px; }
        .medical-page .audience-title { color: var(--m-ink); font-size: 16px; font-weight: 600; margin-bottom: 14px; }
        .medical-page .audience-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 28px; border-top: 1px solid var(--m-line); }
        .medical-page .audience-list li { position: relative; padding: 15px 0 15px 24px; border-bottom: 1px solid var(--m-line); font-size: 16px; color: var(--m-ink-soft); }
        .medical-page .audience-list li::before { content: ""; position: absolute; left: 0; top: 25px; width: 9px; height: 2px; border-radius: 2px; background: var(--m-magenta); }

        .medical-page .content-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--m-line); border-left: 1px solid var(--m-line); }
        .medical-page .content-item { padding: 34px; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); background: #fff; }
        .medical-page .content-item .icon-box { margin-bottom: 24px; }
        .medical-page .content-item h3 { min-height: 54px; }
        .medical-page .content-item p { min-height: 108px; }
        .medical-page .mini-list { display: grid; gap: 10px; margin-top: 22px !important; }
        .medical-page .mini-list li { display: flex; align-items: flex-start; gap: 11px; color: var(--m-ink-soft); font-size: 16px; }
        .medical-page .mini-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--m-magenta); margin-top: 10px; flex: 0 0 auto; }

        .medical-page .category-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--m-line-dark); border-left: 1px solid var(--m-line-dark); }
        .medical-page .category-item { padding: 32px; border-right: 1px solid var(--m-line-dark); border-bottom: 1px solid var(--m-line-dark); display: grid; grid-template-columns: 48px 1fr; gap: 20px; }
        .medical-page .category-item .icon-box { background: rgba(255,255,255,.07); color: var(--m-magenta-light); }
        .medical-page .category-item h3 { color: #fff; font-size: 21px; }
        .medical-page .category-item p { margin-bottom: 0; }

        .medical-page .lifecycle-wrap { border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); overflow: hidden; background: #fff; }
        .medical-page .lifecycle-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .medical-page .lifecycle-item { padding: 30px 26px; min-height: 278px; position: relative; }
        .medical-page .lifecycle-item + .lifecycle-item { border-left: 1px solid var(--m-line); }
        .medical-page .step-label { color: var(--m-magenta); font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
        .medical-page .lifecycle-item h3 { font-size: 20px; min-height: 68px; }
        .medical-page .lifecycle-item p { margin-bottom: 0; }

        .medical-page .ifu-panel { border: 1px solid #efd8e2; border-radius: var(--m-radius-lg); background: var(--m-blush); padding: 58px; display: grid; grid-template-columns: .93fr 1.07fr; gap: 70px; align-items: center; }
        .medical-page .ifu-capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 13px 24px; margin: 28px 0 24px !important; }
        .medical-page .ifu-capabilities li { display: flex; align-items: flex-start; gap: 10px; font-size: 16px; color: var(--m-ink-soft); }
        .medical-page .ifu-capabilities .icon { width: 20px; height: 20px; color: var(--m-magenta); margin-top: 3px; flex: 0 0 auto; }
        .medical-page .eifu-board { background: #fff; border: 1px solid #ead9e1; border-radius: 26px; padding: 28px; box-shadow: var(--m-shadow); }
        .medical-page .board-head { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--m-line); }
        .medical-page .board-title { color: var(--m-ink); font-size: 18px; font-weight: 600; }
        .medical-page .board-status { border: 1px solid #e6bdcf; color: var(--m-magenta); border-radius: 999px; padding: 6px 11px; font-size: 14px; line-height: 1; }
        .medical-page .eifu-list { display: grid; }
        .medical-page .eifu-row { display: grid; grid-template-columns: 1.05fr .8fr .58fr; gap: 14px; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--m-line); }
        .medical-page .eifu-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .medical-page .eifu-name { font-size: 16px; font-weight: 600; color: var(--m-ink); }
        .medical-page .eifu-meta { font-size: 14px; color: var(--m-muted); }
        .medical-page .eifu-state { text-align: right; font-size: 14px; color: var(--m-ink-soft); }
        .medical-page .progress { height: 7px; border-radius: 999px; overflow: hidden; background: #eceff3; }
        .medical-page .progress span { display: block; height: 100%; border-radius: inherit; background: var(--m-magenta); }

        .medical-page .software-layout { display: grid; grid-template-columns: .88fr 1.12fr; gap: 72px; align-items: center; }
        .medical-page .dark-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 28px; margin: 30px 0 26px !important; }
        .medical-page .dark-list li { color: #d7dde6; display: flex; align-items: flex-start; gap: 10px; font-size: 16px; }
        .medical-page .dark-list li::before { content: ""; width: 7px; height: 7px; background: var(--m-magenta-light); border-radius: 50%; margin-top: 10px; flex: 0 0 auto; }
        .medical-page .software-board { border: 1px solid var(--m-line-dark); border-radius: var(--m-radius-lg); background: rgba(255,255,255,.045); padding: 28px; box-shadow: 0 28px 70px rgba(0,0,0,.22); }
        .medical-page .software-board .board-title { color: #fff; }
        .medical-page .software-board .board-head { border-bottom-color: var(--m-line-dark); }
        .medical-page .software-board .board-status { color: var(--m-magenta-light); border-color: rgba(242,167,198,.4); }
        .medical-page .software-row { display: grid; grid-template-columns: 1.05fr .76fr .7fr; gap: 16px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--m-line-dark); }
        .medical-page .software-row:last-child { border-bottom: 0; padding-bottom: 4px; }
        .medical-page .software-name { color: #fff; font-size: 16px; font-weight: 600; }
        .medical-page .software-meta { color: #aeb7c5; font-size: 14px; }
        .medical-page .software-board .progress { background: rgba(255,255,255,.09); }
        .medical-page .software-board .progress span { background: var(--m-magenta-light); }
        .medical-page .software-state { color: #d6dbe4; text-align: right; font-size: 14px; }

        .medical-page .market-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--m-line); border-left: 1px solid var(--m-line); }
        .medical-page .market-item { padding: 31px; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); }
        .medical-page .market-item h3 { font-size: 21px; }
        .medical-page .market-item p { margin-bottom: 0; }
        .medical-page .regulatory-note { margin-top: 32px; border-left: 3px solid var(--m-magenta); padding: 20px 0 20px 25px; }
        .medical-page .regulatory-note p { margin-bottom: 0; max-width: 920px; }
        .medical-page .trend-panel { border-radius: var(--m-radius-lg); border: 1px solid var(--m-line); background: #fff; padding: 36px; }
        .medical-page .trend-list { display: grid; margin-top: 28px; }
        .medical-page .trend-row { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 21px 0; border-top: 1px solid var(--m-line); }
        .medical-page .trend-icon { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; background: var(--m-blush); color: var(--m-magenta); }
        .medical-page .trend-icon .icon { width: 20px; height: 20px; }
        .medical-page .trend-row strong { display: block; color: var(--m-ink); font-size: 16px; font-weight: 600; margin-bottom: 5px; }
        .medical-page .trend-row span { color: var(--m-ink-soft); font-size: 16px; }

        .medical-page .terminology-board { border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); background: #fff; padding: 32px; box-shadow: var(--m-shadow); }
        .medical-page .term-head { display: grid; grid-template-columns: 1.1fr .9fr .7fr; gap: 16px; padding: 0 0 15px; color: var(--m-muted); font-size: 14px; border-bottom: 1px solid var(--m-line); }
        .medical-page .term-row { display: grid; grid-template-columns: 1.1fr .9fr .7fr; gap: 16px; align-items: center; padding: 19px 0; border-bottom: 1px solid var(--m-line); }
        .medical-page .term-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .medical-page .term-source { color: var(--m-ink); font-size: 16px; font-weight: 600; }
        .medical-page .term-target { color: var(--m-ink-soft); font-size: 16px; }
        .medical-page .term-source::before,
        .medical-page .term-target::before { display: none; }
        .medical-page .term-state { justify-self: start; border: 1px solid #e9c7d5; border-radius: 999px; color: var(--m-magenta); padding: 5px 10px; font-size: 14px; }
        .medical-page .term-links { display: flex; gap: 28px; flex-wrap: wrap; margin-top: 30px; }

        .medical-page .workflow-wrap { border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); overflow: hidden; background: #fff; }
        .medical-page .workflow-grid { display: grid; grid-template-columns: repeat(12, 1fr); }
        .medical-page .workflow-item { grid-column: span 3; padding: 29px; min-height: 248px; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); }
        .medical-page .workflow-item:nth-child(4) { border-right: 0; }
        .medical-page .workflow-item:nth-child(n+5) { grid-column: span 4; border-bottom: 0; }
        .medical-page .workflow-item:nth-child(7) { border-right: 0; }
        .medical-page .workflow-number { color: var(--m-magenta); font-size: 14px; font-weight: 600; margin-bottom: 18px; }
        .medical-page .workflow-item h3 { font-size: 20px; }
        .medical-page .workflow-item p { margin-bottom: 0; }

        .medical-page .ai-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .medical-page .ai-card { border: 1px solid var(--m-line-dark); background: rgba(255,255,255,.04); border-radius: var(--m-radius-md); padding: 31px; }
        .medical-page .ai-card .card-label { color: var(--m-magenta-light); font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
        .medical-page .ai-card h3 { color: #fff; font-size: 22px; }
        .medical-page .ai-card p { min-height: 110px; }
        .medical-page .ai-card ul { display: grid; gap: 11px; border-top: 1px solid var(--m-line-dark); padding-top: 20px; }
        .medical-page .ai-card li { color: #d8dde6; font-size: 16px; display: flex; align-items: flex-start; gap: 9px; }
        .medical-page .ai-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--m-magenta-light); margin-top: 10px; flex: 0 0 auto; }

        .medical-page .quality-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--m-line); border-left: 1px solid var(--m-line); }
        .medical-page .quality-item { padding: 30px; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); display: grid; grid-template-columns: 48px 1fr; gap: 20px; }
        .medical-page .quality-item h3 { font-size: 21px; }
        .medical-page .quality-item p { margin-bottom: 0; }
        .medical-page .quality-links { display: flex; gap: 28px; flex-wrap: wrap; margin-top: 30px; }

        .medical-page .language-panel { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
        .medical-page .language-cloud { display: flex; flex-wrap: wrap; gap: 11px; }
        .medical-page .language-chip { border: 1px solid var(--m-line); background: #fff; border-radius: 999px; padding: 10px 15px; color: var(--m-ink-soft); font-size: 16px; }

        .medical-page .benefit-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px 36px; }
        .medical-page .benefit-item { border-top: 2px solid var(--m-magenta); padding-top: 24px; }
        .medical-page .benefit-top { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
        .medical-page .benefit-top .icon-box { width: 42px; height: 42px; border-radius: 13px; }
        .medical-page .benefit-top h3 { margin-bottom: 0; font-size: 21px; }
        .medical-page .benefit-item p { margin-bottom: 0; }
        .medical-page .enterprise-panel { margin-top: 58px; border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); background: #fff; padding: 52px; box-shadow: var(--m-shadow); display: grid; grid-template-columns: .82fr 1.18fr; gap: 64px; align-items: center; }
        .medical-page .program-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 24px; }
        .medical-page .program-list li { display: flex; gap: 10px; align-items: flex-start; color: var(--m-ink-soft); font-size: 16px; }
        .medical-page .program-list .icon { width: 20px; height: 20px; color: var(--m-magenta); margin-top: 3px; flex: 0 0 auto; }
        .medical-page .platform-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 28px; }

        .medical-page .faq-panel { border: 1px solid var(--m-line); border-radius: var(--m-radius-lg); overflow: hidden; background: #fff; }
        .medical-page details { border-bottom: 1px solid var(--m-line); }
        .medical-page details:last-child { border-bottom: 0; }
        .medical-page details summary { list-style: none; cursor: pointer; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--m-ink); font-size: 18px; font-weight: 600; }
        .medical-page details summary::-webkit-details-marker { display: none; }
        .medical-page .faq-plus { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #d8dde5; position: relative; flex: 0 0 auto; }
        .medical-page .faq-plus::before,
        .medical-page .faq-plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 1.5px; background: var(--m-magenta); transform: translate(-50%, -50%); transition: transform .2s ease; }
        .medical-page .faq-plus::after { transform: translate(-50%, -50%) rotate(90deg); }
        .medical-page details[open] .faq-plus::after { transform: translate(-50%, -50%) rotate(0); }
        .medical-page .faq-answer { padding: 0 72px 26px 30px; max-width: 920px; }
        .medical-page .faq-answer p { margin-bottom: 0; }

        .medical-page .related-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--m-line); border-left: 1px solid var(--m-line); }
        .medical-page .related-item { padding: 29px; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); background: #fff; display: flex; flex-direction: column; }
        .medical-page .related-item h3 { font-size: 20px; min-height: 48px; }
        .medical-page .related-item p { min-height: 108px; }
        .medical-page .resource-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .medical-page .resource-card { border: 1px solid var(--m-line); border-radius: var(--m-radius-md); padding: 28px; background: #fff; display: flex; flex-direction: column; }
        .medical-page .resource-card h3 { font-size: 20px; min-height: 68px; }
        .medical-page .resource-card p { min-height: 136px; }
        .medical-page .related-item .editorial-link,
        .medical-page .resource-card .editorial-link { margin-top: auto; align-self: flex-start; }

        .medical-page .final-cta { background: var(--m-blush); border-top: 1px solid #efd8e2; }
        .medical-page .cta-shell { width: min(1440px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(410px, .9fr); align-items: stretch; }
        .medical-page .cta-copy { padding: 88px 56px; display: flex; flex-direction: column; justify-content: center; }
        .medical-page .cta-copy h2 { max-width: 720px; }
        .medical-page .cta-copy p { max-width: 730px; margin-bottom: 30px; font-size: 18px; }
        .medical-page .cta-art-wrap { min-height: 410px; display: flex; align-items: center; justify-content: center; padding: 42px 48px 32px; background: rgba(255,255,255,.34); border-left: 1px solid #efd8e2; }
        .medical-page .collaboration-art { width: 100%; max-width: 500px; height: auto; }

        @media (max-width: 1180px) {
          .medical-page .shell { padding-left: 40px; padding-right: 40px; }
          .medical-page .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(420px, .96fr); gap: 32px; }
          .medical-page .content-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .content-item h3,
          .medical-page .content-item p { min-height: 0; }
          .medical-page .lifecycle-grid { grid-template-columns: repeat(3, 1fr); }
          .medical-page .lifecycle-item { min-height: 240px; border-bottom: 1px solid var(--m-line); }
          .medical-page .lifecycle-item:nth-child(4) { border-left: 0; }
          .medical-page .lifecycle-item:nth-child(4), .medical-page .lifecycle-item:nth-child(5) { border-bottom: 0; }
          .medical-page .related-grid,
          .medical-page .resource-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .related-item h3,
          .medical-page .related-item p,
          .medical-page .resource-card h3,
          .medical-page .resource-card p { min-height: 0; }
          .medical-page .cta-copy { padding-left: 40px; }
        }

        @media (max-width: 900px) {
          .medical-page .shell { padding-left: 24px; padding-right: 24px; }
          .medical-page .section { padding: 80px 0; }
          .medical-page .section.dense { padding: 72px 0; }
          .medical-page h1 { font-size: 42px; }
          .medical-page h2 { font-size: 32px; }
          .medical-page h3 { font-size: 22px; }
          .medical-page .hero { padding: 82px 0 72px; }
          .medical-page .hero-grid { grid-template-columns: 1fr; }
          .medical-page .hero-copy { max-width: 760px; }
          .medical-page .hero-art { min-height: 0; max-width: 650px; margin: 10px auto 0; }
          .medical-page .split-head,
          .medical-page .split-2,
          .medical-page .expertise-layout,
          .medical-page .software-layout,
          .medical-page .ifu-panel,
          .medical-page .language-panel,
          .medical-page .enterprise-panel { grid-template-columns: 1fr; gap: 42px; }
          .medical-page .split-head { margin-bottom: 42px; }
          .medical-page .value-row { grid-template-columns: 48px 190px 1fr; }
          .medical-page .content-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .lifecycle-item { min-height: 0; border-bottom: 1px solid var(--m-line) !important; }
          .medical-page .lifecycle-item:nth-child(odd) { border-left: 0; }
          .medical-page .lifecycle-item:nth-child(5) { grid-column: 1 / -1; border-bottom: 0 !important; }
          .medical-page .ifu-panel { padding: 44px; }
          .medical-page .market-grid { grid-template-columns: 1fr; }
          .medical-page .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .workflow-item,
          .medical-page .workflow-item:nth-child(n+5) { grid-column: auto; border-right: 1px solid var(--m-line); border-bottom: 1px solid var(--m-line); }
          .medical-page .workflow-item:nth-child(2n) { border-right: 0; }
          .medical-page .workflow-item:nth-child(7) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .medical-page .benefit-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .enterprise-panel { padding: 44px; }
          .medical-page .related-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .resource-grid { grid-template-columns: repeat(2, 1fr); }
          .medical-page .resource-card h3,
          .medical-page .resource-card p { min-height: 0; }
          .medical-page .cta-shell { grid-template-columns: 1fr; }
          .medical-page .cta-copy { padding: 80px 24px 54px; }
          .medical-page .cta-art-wrap { min-height: 330px; border-left: 0; border-top: 1px solid #efd8e2; }
        }

        @media (max-width: 620px) {
          .medical-page .shell { padding-left: 20px; padding-right: 20px; }
          .medical-page .section { padding: 68px 0; }
          .medical-page .section.dense { padding: 64px 0; }
          .medical-page h1 { font-size: 38px; }
          .medical-page h2 { font-size: 30px; }
          .medical-page h3 { font-size: 20px; }
          .medical-page .hero { padding: 68px 0 62px; }
          .medical-page .hero-copy .hero-lead { font-size: 18px; }
          .medical-page .btn-row { width: 100%; }
          .medical-page .btn { width: 100%; }
          .medical-page .hero-art { margin-left: -12px; margin-right: -12px; }
          .medical-page .trust-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 22px; padding-top: 24px; padding-bottom: 24px; }
          .medical-page .trust-item { padding: 0; border: 0; text-align: left; }
          .medical-page .value-row { grid-template-columns: 46px 1fr; gap: 16px; }
          .medical-page .value-row p { grid-column: 2; }
          .medical-page .audience-list { grid-template-columns: 1fr; }
          .medical-page .expertise-row { padding: 26px 22px; }
          .medical-page .content-grid,
          .medical-page .category-grid,
          .medical-page .lifecycle-grid,
          .medical-page .ai-grid,
          .medical-page .quality-grid,
          .medical-page .benefit-grid,
          .medical-page .related-grid,
          .medical-page .resource-grid { grid-template-columns: 1fr; }
          .medical-page .content-item { padding: 28px 24px; }
          .medical-page .category-item { padding: 27px 22px; }
          .medical-page .lifecycle-item,
          .medical-page .lifecycle-item:nth-child(5) { grid-column: auto; border-left: 0 !important; border-bottom: 1px solid var(--m-line) !important; }
          .medical-page .lifecycle-item:last-child { border-bottom: 0 !important; }
          .medical-page .ifu-panel,
          .medical-page .enterprise-panel { padding: 32px 24px; }
          .medical-page .ifu-capabilities,
          .medical-page .dark-list,
          .medical-page .program-list { grid-template-columns: 1fr; }
          .medical-page .eifu-board,
          .medical-page .software-board,
          .medical-page .terminology-board { padding: 22px 20px; }
          .medical-page .eifu-row,
          .medical-page .software-row { grid-template-columns: 1fr; gap: 9px; }
          .medical-page .eifu-state,
          .medical-page .software-state { text-align: left; }
          .medical-page .market-item { padding: 27px 22px; }
          .medical-page .trend-panel { padding: 28px 22px; }
          .medical-page .term-head { display: none; }
          .medical-page .term-row { grid-template-columns: 1fr; gap: 8px; padding: 20px 0; }
          .medical-page .term-source::before,
          .medical-page .term-target::before {
            content: attr(data-label);
            display: block;
            color: var(--m-magenta);
            font-size: 11px;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: .13em;
            text-transform: uppercase;
            margin-bottom: 4px;
          }
          .medical-page .term-target { margin-top: 4px; }
          .medical-page .term-state { margin-top: 4px; }
          .medical-page .workflow-grid { grid-template-columns: 1fr; }
          .medical-page .workflow-item,
          .medical-page .workflow-item:nth-child(2n),
          .medical-page .workflow-item:nth-child(n+5),
          .medical-page .workflow-item:nth-child(7) { grid-column: auto; border-right: 0; border-bottom: 1px solid var(--m-line); min-height: 0; }
          .medical-page .workflow-item:last-child { border-bottom: 0; }
          .medical-page .ai-card p { min-height: 0; }
          .medical-page .quality-item { padding: 27px 22px; grid-template-columns: 44px minmax(0, 1fr); gap: 16px; }
          .medical-page .term-links,
          .medical-page .quality-links,
          .medical-page .platform-links { display: grid; gap: 4px; margin-top: 22px; }
          .medical-page .language-cloud { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .medical-page .language-chip { width: auto; min-height: 48px; padding: 9px 10px; display: grid; place-items: center; text-align: center; line-height: 1.35; }
          .medical-page details summary { padding: 22px 20px; font-size: 17px; align-items: flex-start; }
          .medical-page .faq-answer { padding: 0 20px 24px; }
          .medical-page .related-item,
          .medical-page .resource-card { padding: 26px 24px; }
          .medical-page .cta-copy { padding: 68px 20px 48px; }
          .medical-page .cta-art-wrap { min-height: 280px; padding: 28px 20px 18px; }
        }

        @media (max-width: 350px) {
          .medical-page .shell { padding-left: 20px; padding-right: 20px; }
          .medical-page .hero-art { margin-left: -18px; margin-right: -18px; }
          .medical-page .trust-grid { grid-template-columns: 1fr; gap: 12px; }
          .medical-page .trust-item { text-align: center; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Medical Devices</p>
            <h1>Medical Device Translation Services for Global Market Access</h1>
            <p className="hero-lead">
              Translate and localize medical device content for healthcare professionals, patients, technicians, regulatory teams, and global product teams. Stepes supports IFUs, labeling, technical documentation, software, training, and lifecycle updates in more than 100 languages through medical-device expertise, ISO-certified quality processes, and secure enterprise translation technology.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to a Medical Device Expert <ArrowIcon /></a>
            </div>
            <div className="hero-proof">IFUs · Labeling · Software · Technical Documentation</div>
          </div>
          <div className="hero-art">
            <MedicalDeviceHeroArt />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Medical device translation trust indicators">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 13485 Quality Management</div>
          <div className="trust-item">ISO 17100 Translation Workflows</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Expertise</div>
        </div>
      </section>

      <section className="section" id="medical-device-translation-overview">
        <div className="shell split-head">
          <div>
            <p className="eyebrow">Connected Device Content</p>
            <h2>Specialized Translation for Every Part of the Medical Device Experience</h2>
          </div>
          <div>
            <p className="section-intro">
              A medical device reaches its users through much more than the physical product. Instructions for use, labels, software screens, technical documentation, training, service content, and safety communications work together to explain how the device should be installed, operated, maintained, and updated.
            </p>
            <p>
              Those materials must remain clear and consistent across languages. A component name used in the software should match the term in the IFU. A warning on the packaging should retain the same meaning in training and support materials. When a device or software function changes, the affected multilingual content must be identified, updated, reviewed, and released in alignment.
            </p>
          </div>
        </div>
        <div className="shell value-rows">
          {[
            ["review", "Protect Technical Meaning", "Preserve the intended meaning of operating instructions, warnings, precautions, contraindications, specifications, and device functions."],
            ["terminology", "Maintain Content Consistency", "Coordinate terminology across IFUs, labels, embedded software, mobile applications, portals, technical manuals, and training."],
            ["globe", "Support Global Scale", "Manage multiple languages, regional reviewers, file formats, product versions, and delivery requirements through one centralized process."],
          ].map(([icon, title, text]) => (
            <article className="value-row" key={title}>
              <div className="icon-box"><LineIcon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft" id="specialized-medical-device-expertise">
        <div className="shell expertise-layout">
          <div>
            <h2>Medical Device Translation Requires More Than Language Fluency</h2>
            <p className="section-intro">
              Medical device content sits at the intersection of healthcare, engineering, software, usability, quality management, and technical communication.
            </p>
            <p>
              Translators must understand not only the source language but also the device, its intended use, the people who operate it, and the practical context in which the content appears. Stepes assigns linguists and reviewers according to the language pair, subject matter, content type, intended audience, and target market.
            </p>
            <div className="audience-wrap">
              <div className="audience-title">Content for every intended user</div>
              <ul className="audience-list">
                <li>Surgeons and physicians</li>
                <li>Nurses and healthcare professionals</li>
                <li>Laboratory personnel</li>
                <li>Biomedical engineers</li>
                <li>Service and installation technicians</li>
                <li>Distributors and field teams</li>
                <li>Caregivers</li>
                <li>Patients and home users</li>
              </ul>
            </div>
          </div>
          <div className="expertise-panel">
            {[
              ["lab", "Technical and Clinical Understanding", "Device content can involve anatomy, diagnostics, materials science, electronics, software, mechanical engineering, sterilization, maintenance, and clinical procedures."],
              ["review", "Safety-Critical Language", "Warnings, precautions, contraindications, operating sequences, measurement instructions, error messages, and troubleshooting procedures require careful linguistic treatment."],
              ["terminology", "Cross-Asset Consistency", "A device component or software function should not receive one translation in the interface and another in the IFU, label, or training material."],
              ["globe", "Market-Specific Requirements", "Language requirements differ by jurisdiction, device, intended user, and content type. Stepes helps clients implement the multilingual requirements defined by their regulatory strategy."],
            ].map(([icon, title, text]) => (
              <article className="expertise-row" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="medical-device-content">
        <div className="shell">
          <div className="section-head centered">
            <h2>Medical Device Content Translation Across Documents, Software, and Media</h2>
            <p className="section-intro">
              Stepes supports individual projects and continuing multilingual programs spanning product families, business units, and global markets.
            </p>
          </div>
          <div className="content-grid">
            {contentGroups.map((item) => (
              <article className="content-item" key={item.title}>
                <div className="icon-box"><LineIcon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="mini-list">
                  {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="term-links">
            <a className="editorial-link" href="https://www.stepes.com/medical-device-labeling-translation-services/">Medical Device Labeling Translation <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="medical-device-categories">
        <div className="shell">
          <div className="section-head centered">
            <h2>Translation Expertise Across Medical Device Technologies</h2>
            <p className="section-intro">
              Medical devices range from relatively simple products to integrated systems combining hardware, software, sensors, cloud infrastructure, and clinical workflows.
            </p>
          </div>
          <div className="category-grid">
            {deviceCategories.map(([icon, title, text]) => (
              <article className="category-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="term-links">
            <a className="editorial-link" href="https://www.stepes.com/in-vitro-diagnostics-translation/">Explore In Vitro Diagnostic Translation <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">Explore Software Localization <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section" id="medical-device-lifecycle">
        <div className="shell">
          <div className="section-head">
            <h2>Multilingual Support Across the Medical Device Lifecycle</h2>
            <p className="section-intro">
              Medical device translation should not begin and end with a finished manual. Content is created, revised, reviewed, and reused from early product development through market launch and post-market operations.
            </p>
          </div>
          <div className="lifecycle-wrap">
            <div className="lifecycle-grid">
              {lifecycleStages.map(([title, text], index) => (
                <article className="lifecycle-item" key={title}>
                  <div className="step-label">Stage {index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <p style={{ marginTop: 26, marginBottom: 0, maxWidth: 860 }}>
            By retaining approved terminology, translation memory, product references, and reviewer decisions, Stepes helps clients avoid restarting the translation process with every update while preserving continuity across versions.
          </p>
        </div>
      </section>

      <section className="section dense" id="ifu-labeling-translation">
        <div className="shell">
          <div className="ifu-panel">
            <div>
              <h2>IFU, eIFU, Labeling, and Packaging Translation</h2>
              <p>
                Instructions for use and device labeling connect the manufacturer’s technical knowledge with the people who install, operate, maintain, prescribe, or receive the device. Stepes supports professional-use, patient-use, and home-use products across digital and print formats.
              </p>
              <ul className="ifu-capabilities">
                {[
                  "Professional and patient IFUs",
                  "Electronic IFUs and structured content",
                  "Quick-reference and setup guides",
                  "Device labels and packaging",
                  "Warnings, identifiers, numbers, and units",
                  "Multilingual layout and final-format QA",
                ].map((item) => <li key={item}><CheckIcon />{item}</li>)}
              </ul>
              <p>
                Multilingual eIFU programs can coordinate responsive presentation, downloadable files, paper versions, product revisions, and approved terminology across languages. Labeling workflows can also address space constraints, text expansion, right-to-left layouts, multilingual artwork, and print-ready review.
              </p>
              <div className="term-links">
                <a className="editorial-link" href="https://www.stepes.com/ifu-translation-services/">Explore IFU Translation Services <ArrowIcon /></a>
                <a className="editorial-link" href="https://www.stepes.com/medical-device-labeling-translation-services/">Explore Medical Device Labeling <ArrowIcon /></a>
              </div>
            </div>
            <div className="eifu-board" aria-label="Illustrative multilingual eIFU publication workflow">
              <div className="board-head">
                <div className="board-title">Multilingual eIFU Release</div>
                <div className="board-status">Version 4.2</div>
              </div>
              <div className="eifu-list">
                <div className="eifu-row">
                  <div><div className="eifu-name">French</div><div className="eifu-meta">Professional-use IFU</div></div>
                  <div className="progress"><span style={{ width: "100%" }} /></div>
                  <div className="eifu-state">Release ready</div>
                </div>
                <div className="eifu-row">
                  <div><div className="eifu-name">German</div><div className="eifu-meta">IFU + label updates</div></div>
                  <div className="progress"><span style={{ width: "86%" }} /></div>
                  <div className="eifu-state">Final QA</div>
                </div>
                <div className="eifu-row">
                  <div><div className="eifu-name">Japanese</div><div className="eifu-meta">Digital and print output</div></div>
                  <div className="progress"><span style={{ width: "72%" }} /></div>
                  <div className="eifu-state">Client review</div>
                </div>
                <div className="eifu-row">
                  <div><div className="eifu-name">Arabic</div><div className="eifu-meta">RTL layout validation</div></div>
                  <div className="progress"><span style={{ width: "58%" }} /></div>
                  <div className="eifu-state">In production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="medical-device-software-localization">
        <div className="shell software-layout">
          <div>
            <p className="eyebrow">Software, SaMD, and Connected Devices</p>
            <h2>Medical Device Software Localization for Evolving Digital Products</h2>
            <p className="section-intro">
              Modern medical devices increasingly combine physical hardware with embedded software, mobile applications, cloud platforms, web portals, and connected services.
            </p>
            <p>
              Medical device software localization requires technical file handling, context management, terminology alignment, layout validation, and coordinated release support. Stepes localizes menus, controls, setup screens, status messages, warnings, measurement displays, dashboards, online help, notifications, documentation, and release notes.
            </p>
            <ul className="dark-list">
              {[
                "Embedded interfaces and controls",
                "Clinician dashboards and reports",
                "Patient applications and portals",
                "Software resource files",
                "Online help and onboarding",
                "Release notes and update communications",
                "In-context linguistic testing",
                "Recurring delta localization",
              ].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              In-context review helps identify truncation, text expansion, ambiguous strings, incorrect line breaks, character-rendering problems, untranslated content, and right-to-left display issues. For AI-enabled devices, controlled release workflows can keep software, IFUs, labels, help content, and training aligned as functionality changes.
            </p>
            <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">Explore Software Localization Services <ArrowIcon /></a>
          </div>
          <div className="software-board" aria-label="Illustrative medical device software localization release board">
            <div className="board-head">
              <div className="board-title">Connected Device Release</div>
              <div className="board-status">8 Locales Active</div>
            </div>
            <div>
              <div className="software-row">
                <div><div className="software-name">Embedded UI</div><div className="software-meta">1,420 changed strings</div></div>
                <div className="progress"><span style={{ width: "92%" }} /></div>
                <div className="software-state">Linguistic QA</div>
              </div>
              <div className="software-row">
                <div><div className="software-name">Clinician Portal</div><div className="software-meta">Dashboard + help</div></div>
                <div className="progress"><span style={{ width: "78%" }} /></div>
                <div className="software-state">In review</div>
              </div>
              <div className="software-row">
                <div><div className="software-name">Patient App</div><div className="software-meta">Onboarding update</div></div>
                <div className="progress"><span style={{ width: "64%" }} /></div>
                <div className="software-state">In translation</div>
              </div>
              <div className="software-row">
                <div><div className="software-name">IFU Alignment</div><div className="software-meta">Terminology sync</div></div>
                <div className="progress"><span style={{ width: "100%" }} /></div>
                <div className="software-state">Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="global-medical-device-markets">
        <div className="shell split-head">
          <div>
            <h2>Medical Device Translation for Market-Specific Requirements</h2>
          </div>
          <div>
            <p className="section-intro">
              Global medical device translation is not a one-size-fits-all process. Language and documentation requirements can depend on the market, device classification, intended user, distribution model, and type of information provided.
            </p>
            <p>
              Stepes supports manufacturers with the multilingual execution needed to implement their regulatory and market-entry strategies while maintaining consistent terminology across documents, software, labels, training, and supporting systems.
            </p>
          </div>
        </div>
        <div className="shell split-2 top">
          <div>
            <div className="market-grid">
              {marketItems.map((item) => (
                <article className="market-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="regulatory-note">
              <p>
                Language and documentation requirements vary by market, device, intended user, and content type. Manufacturers should confirm applicable requirements with their regulatory and legal teams. Stepes provides translation and localization services and does not replace regulatory, legal, clinical, or quality advisers.
              </p>
            </div>
          </div>
          <aside className="trend-panel">
            <p className="eyebrow">Evolving Device Content Priorities</p>
            <h3>Multilingual Programs Must Stay Connected</h3>
            <p>
              Regulatory modernization, digital delivery, and software-driven products increase the need for controlled, reusable, and continuously updated multilingual content.
            </p>
            <div className="trend-list">
              {[
                ["review", "ISO 13485 Alignment", "FDA QMSR alignment reinforces the value of documented supplier processes and quality-controlled language workflows."],
                ["document", "Electronic IFUs", "Expanded professional-use eIFU availability increases the need to synchronize digital, downloadable, and paper content."],
                ["integration", "Structured Device Information", "EUDAMED and UDI-related programs increase the importance of consistent product terminology across systems and documents."],
                ["ai", "AI-Enabled Device Updates", "Evolving software functions require coordinated multilingual updates across interfaces, instructions, warnings, and training."],
              ].map(([icon, title, text]) => (
                <div className="trend-row" key={title}>
                  <div className="trend-icon"><LineIcon name={icon} /></div>
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-soft" id="medical-device-terminology">
        <div className="shell split-2">
          <div>
            <p className="eyebrow">Terminology and Change Management</p>
            <h2>Keep Medical Device Language Consistent Across Every Release</h2>
            <p className="section-intro">
              Terminology consistency is essential when the same device concepts appear across product models, documents, software interfaces, training, and support materials.
            </p>
            <p>
              Stepes combines terminology management, translation memory, client references, screenshots, and reviewer feedback to create a governed multilingual language foundation. Termbases can record approved translations, definitions, context, usage guidance, prohibited variants, and locale-specific preferences.
            </p>
            <p>
              When source content changes, version-aware workflows can identify affected segments, apply approved terminology, prevent obsolete translations from resurfacing, and coordinate review across languages. Regulatory, product, clinical, and regional reviewers can contribute decisions that remain available for future projects.
            </p>
            <div className="term-links">
              <a className="editorial-link" href="https://www.stepes.com/terminology-management/">Explore Terminology Management <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/translation-memory/">Explore Translation Memory <ArrowIcon /></a>
            </div>
          </div>
          <div className="terminology-board" aria-label="Illustrative medical device terminology management panel">
            <div className="term-head"><span>Source Term</span><span>Approved Translation</span><span>Status</span></div>
            <div className="term-row"><div className="term-source" data-label="Source term">Occlusion alarm</div><div className="term-target" data-label="Approved translation">Alarme d’occlusion</div><div className="term-state">Approved</div></div>
            <div className="term-row"><div className="term-source" data-label="Source term">Priming sequence</div><div className="term-target" data-label="Approved translation">Séquence d’amorçage</div><div className="term-state">Approved</div></div>
            <div className="term-row"><div className="term-source" data-label="Source term">Single-use accessory</div><div className="term-target" data-label="Approved translation">Accessoire à usage unique</div><div className="term-state">Approved</div></div>
            <div className="term-row"><div className="term-source" data-label="Source term">Flow-rate limit</div><div className="term-target" data-label="Approved translation">Limite de débit</div><div className="term-state">In review</div></div>
            <div className="term-row"><div className="term-source" data-label="Source term">Device status indicator</div><div className="term-target" data-label="Approved translation">Indicateur d’état de l’appareil</div><div className="term-state">Approved</div></div>
          </div>
        </div>
      </section>

      <section className="section" id="medical-device-translation-workflow">
        <div className="shell">
          <div className="section-head centered">
            <h2>From Content Intake to Final Multilingual Delivery</h2>
            <p className="section-intro">
              Stepes configures each medical device translation workflow according to the content, languages, intended users, markets, risk profile, file requirements, and client review process.
            </p>
          </div>
          <div className="workflow-wrap">
            <div className="workflow-grid">
              {workflowSteps.map(([title, text], index) => (
                <article className="workflow-item" key={title}>
                  <div className="workflow-number">0{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai-human-medical-translation">
        <div className="shell">
          <div className="section-head centered">
            <h2>Apply AI Where It Helps—and Human Expertise Where It Matters Most</h2>
            <p className="section-intro">
              Medical device content does not have a single risk level or one appropriate translation method. Stepes configures workflows around content type, intended audience, linguistic assets, quality requirements, and client-approved use of AI.
            </p>
          </div>
          <div className="ai-grid">
            {aiPaths.map((path) => (
              <article className="ai-card" key={path.title}>
                <div className="card-label">{path.label}</div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <p style={{ margin: "30px auto 0", maxWidth: 880, textAlign: "center" }}>
            A patient-facing warning, an internal knowledge article, an embedded software string, and an engineering reference document should not automatically receive the same workflow. Risk-sensitive program design directs professional review toward the content where linguistic judgment, technical knowledge, and user impact matter most.
          </p>
        </div>
      </section>

      <section className="section" id="medical-device-quality-security">
        <div className="shell split-head">
          <div>
            <h2>Quality-Controlled Medical Device Translation</h2>
          </div>
          <div>
            <p className="section-intro">
              Stepes supports medical device translation with ISO-certified quality frameworks, qualified resources, controlled workflows, terminology management, review steps, secure content handling, and documented delivery processes.
            </p>
          </div>
        </div>
        <div className="shell">
          <div className="quality-grid">
            {qualityItems.map(([icon, title, text]) => (
              <article className="quality-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="quality-links">
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-system/">Explore the Translation Quality System <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">Review Stepes ISO Certifications <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/security/">Explore Stepes Security <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="medical-device-languages">
        <div className="shell language-panel">
          <div>
            <h2>Medical Device Translation in 100+ Languages</h2>
            <p className="section-intro">
              Coordinate multilingual launches across European, Asian, Latin American, Middle Eastern, and African markets while accommodating regional terminology, complex scripts, right-to-left presentation, and local review requirements.
            </p>
            <p>
              Stepes supports regional language variants, multilingual European programs, coordinated Asia-Pacific releases, Latin American Spanish, Canadian French, Brazilian Portuguese, and market-specific terminology.
            </p>
            <a className="editorial-link" href="https://www.stepes.com/translation-languages/">Explore All Translation Languages <ArrowIcon /></a>
          </div>
          <div className="language-cloud">
            {languages.map((language) => <div className="language-chip" key={language}>{language}</div>)}
          </div>
        </div>
      </section>

      <section className="section" id="medical-device-enterprise-programs">
        <div className="shell">
          <div className="section-head centered">
            <h2>Build a More Consistent Global Medical Device Experience</h2>
            <p className="section-intro">
              A connected medical device translation program helps teams improve how multilingual content is created, reviewed, updated, and delivered.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([icon, title, text]) => (
              <article className="benefit-item" key={title}>
                <div className="benefit-top"><div className="icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="enterprise-panel">
            <div>
              <p className="eyebrow">Why Stepes</p>
              <h2>One Multilingual Partner Across the Device Lifecycle</h2>
              <p>
                Stepes combines ISO 13485-certified quality management, medical-device linguists, localization engineering, terminology governance, AI-assisted workflows, multilingual production, and enterprise technology. We support a single urgent document and structured programs spanning multiple device families, business units, regional reviewers, documentation systems, and software release schedules.
              </p>
              <div className="platform-links">
                <a className="editorial-link" href="https://www.stepes.com/translation-management-portal/">Translation Management Portal <ArrowIcon /></a>
                <a className="editorial-link" href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics <ArrowIcon /></a>
                <a className="editorial-link" href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation <ArrowIcon /></a>
                <a className="editorial-link" href="https://www.stepes.com/translation-api/">Translation API <ArrowIcon /></a>
              </div>
            </div>
            <ul className="program-list">
              {[
                "Coordinated global product launches",
                "Multiple related device models",
                "Recurring IFU and labeling revisions",
                "Agile software localization",
                "Centralized terminology governance",
                "Regional reviewer coordination",
                "Program reporting and visibility",
                "System-connected translation workflows",
                "Consolidated multilingual operations",
                "Reusable translation memory",
              ].map((item) => <li key={item}><CheckIcon />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="medical-device-faq">
        <div className="shell">
          <div className="section-head">
            <h2>Medical Device Translation Services FAQ</h2>
            <p className="section-intro">
              Explore common questions about IFUs, labeling, software localization, regulatory content, terminology, AI, file formats, and continuing product updates.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span className="faq-plus" aria-hidden="true" /></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="related-medical-device-services">
        <div className="shell">
          <div className="section-head">
            <h2>Explore Medical Device and Life Sciences Translation Services</h2>
            <p className="section-intro">
              Connect the specialized services needed across regulated documentation, product labeling, software, production, and global language operations.
            </p>
          </div>
          <div className="related-grid">
            {relatedServices.map(([title, text, href, linkLabel]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{linkLabel} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="medical-device-resources">
        <div className="shell">
          <div className="section-head centered">
            <h2>Plan More Controlled Multilingual Device Programs</h2>
            <p className="section-intro">
              Use practical guidance to plan IFU translation, electronic publishing, software localization, quality review, terminology, and responsible AI workflows.
            </p>
          </div>
          <div className="resource-grid">
            {resources.map(([title, text, href, linkLabel]) => (
              <article className="resource-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{linkLabel} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-shell">
          <div className="cta-copy">
            <h2>Bring Your Medical Device Content to Global Markets With Confidence</h2>
            <p>
              Translate your IFUs, labeling, technical documentation, software, training, and lifecycle updates through one quality-controlled multilingual workflow. Tell us about your device, content, target languages, markets, and delivery requirements.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Translation Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to Our Medical Device Team <ArrowIcon /></a>
            </div>
          </div>
          <div className="cta-art-wrap">
            <CollaborationArt />
          </div>
        </div>
      </section>
    </main>
  );
}
