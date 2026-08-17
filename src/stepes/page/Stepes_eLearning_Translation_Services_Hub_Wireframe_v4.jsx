import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="icon icon-check" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const LineIcon = ({ name }) => {
  const paths = {
    course: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h7M7 12h10M7 16h6"/><path d="m16 7 3 2-3 2Z"/></>,
    quiz: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h5M8 16h8"/><path d="m15 12 1 1 2-2"/></>,
    audio: <><path d="M4 13h3l5 4V7l-5 4H4Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/></>,
    video: <><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-3v10l-4-3Z"/><path d="m8 9 4 3-4 3Z"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m5 17 5-5 3 3 2-2 4 4"/></>,
    code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/></>,
    device: <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 18h6M8 6h8"/></>,
    package: <><path d="m4 7 8-4 8 4-8 4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10"/></>,
    lms: <><path d="M3 7h18M5 7v12h14V7"/><path d="M8 11h8M8 15h5M7 3h10v4H7Z"/></>,
    review: <><path d="m12 3 8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    ai: <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="5"/><path d="M10 13.5c.8.7 3.2.7 4 0M10 10h.01M14 10h.01"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M19 12a7 7 0 1 1-2-5"/></>,
    people: <><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2 21a7 7 0 0 1 14 0"/><path d="M16 7a3 3 0 1 1 0 6M17 15a6 6 0 0 1 5 6"/></>,
    briefcase: <><path d="M4 8h16v12H4Z"/><path d="M8 8V5h8v3M4 12h16M10 12v2h4v-2"/></>,
    medical: <><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/></>,
    factory: <><path d="M3 21V9l6 3V9l6 3V5h6v16Z"/><path d="M7 17h2M12 17h2M17 17h2"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01M8 13l2 2 5-5"/></>,
    bank: <><path d="m3 9 9-6 9 6M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 19h16M3 22h18"/></>,
    retail: <><path d="M4 8h16l-1 13H5Z"/><path d="M8 8V6a4 4 0 0 1 8 0v2M8 12h.01M16 12h.01"/></>,
    education: <><path d="m3 10 9-5 9 5-9 5Z"/><path d="M7 13v4c3 2 7 2 10 0v-4M21 10v6"/></>,
    linguist: <><path d="M4 5h9v7H8l-4 4Z"/><path d="M14 10h6v7h-3l-3 3Z"/><path d="M7 8h3M16 13h2"/></>,
    memory: <><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
    terminology: <><path d="M4 4h7a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3Z"/><path d="M20 4h-3a3 3 0 0 0-3 3v13h3a3 3 0 0 0 3-3ZM7 9h4M7 13h4M17 9h.01M17 13h.01"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    file: <><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
  };
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] || paths.course}
    </svg>
  );
};

const ELearningHeroArt = () => (
  <svg className="hero-art-svg" viewBox="0 0 660 540" aria-hidden="true">
    <defs>
      <linearGradient id="learningBlush" x1="0" x2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#FFF9FC" />
      </linearGradient>
      <filter id="learningShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#172033" floodOpacity="0.09" />
      </filter>
    </defs>

    <path d="M91 91c58-62 157-83 238-52 64 25 102 83 150 127 49 45 112 78 113 151 1 72-60 132-129 151-71 19-135-12-202-25-67-13-146-7-181-65-41-67-20-157 11-213Z" fill="url(#learningBlush)" />

    <g filter="url(#learningShadow)">
      <rect x="84" y="93" width="438" height="326" rx="30" fill="#fff" stroke="#C8CDD7" strokeWidth="2.2" />
      <rect x="106" y="116" width="394" height="280" rx="22" fill="#FBFCFE" stroke="#D8DCE4" strokeWidth="1.6" />
      <path d="M106 158h394" stroke="#D5D9E1" strokeWidth="1.6" />
      <circle cx="130" cy="137" r="4.5" fill="#C11D63" />
      <circle cx="146" cy="137" r="4.5" fill="#B9C0CB" />
      <circle cx="162" cy="137" r="4.5" fill="#B9C0CB" />
      <path d="M391 137h80" stroke="#697385" strokeWidth="2.4" strokeLinecap="round" />

      <rect x="128" y="181" width="112" height="188" rx="17" fill="#fff" stroke="#CFD4DD" strokeWidth="1.6" />
      <circle cx="153" cy="208" r="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.4" />
      <path d="M173 204h46M173 215h34" stroke="#697385" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M146 244h74M146 267h60M146 290h69M146 313h51M146 336h64" stroke="#858E9D" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="220" cy="244" r="3.5" fill="#C11D63" />
      <circle cx="220" cy="290" r="3.5" fill="#C11D63" />

      <rect x="259" y="181" width="218" height="126" rx="18" fill="#151C2C" stroke="#151C2C" />
      <path d="M285 207h92M285 224h132M285 241h105" stroke="#C7CED9" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="369" cy="272" r="22" fill="#C11D63" />
      <path d="m363 261 17 11-17 11Z" fill="#fff" />

      <rect x="259" y="324" width="218" height="45" rx="13" fill="#fff" stroke="#CFD4DD" strokeWidth="1.6" />
      <circle cx="281" cy="346" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M299 341h119M299 352h84" stroke="#697385" strokeWidth="2.3" strokeLinecap="round" />
      <path d="m447 340 10 7-10 7" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(472 277)" filter="url(#learningShadow)">
      <rect width="132" height="112" rx="20" fill="#fff" stroke="#C8CDD7" strokeWidth="2" />
      <path d="M25 28h80M25 43h57" stroke="#697385" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="30" cy="73" r="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.3" />
      <path d="m25 73 4 4 7-8" fill="none" stroke="#C11D63" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M50 68h55M50 79h42" stroke="#697385" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M21 96h84" stroke="#D1D6DF" strokeWidth="2" strokeLinecap="round" />
    </g>

    <g transform="translate(46 261)" filter="url(#learningShadow)">
      <rect width="92" height="76" rx="17" fill="#fff" stroke="#C8CDD7" strokeWidth="2" />
      <path d="M20 25h3l11 8V17l-11 8h-3Z" fill="none" stroke="#222B3B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M44 24a14 14 0 0 1 0 18M54 18a23 23 0 0 1 0 30" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 58h54" stroke="#7B8594" strokeWidth="2.4" strokeLinecap="round" />
    </g>

    <g transform="translate(495 91)">
      <circle cx="47" cy="47" r="45" fill="#fff" stroke="#C8CDD7" strokeWidth="2" />
      <circle cx="47" cy="47" r="23" fill="none" stroke="#C11D63" strokeWidth="2.8" />
      <path d="M24 47h46M47 24c7 7 10 15 10 23s-3 16-10 23c-7-7-10-15-10-23s3-16 10-23Z" fill="none" stroke="#C11D63" strokeWidth="2.3" />
    </g>

    <path d="M79 239c23 0 23-27 46-27" fill="none" stroke="#737D8C" strokeWidth="2.3" strokeLinecap="round" strokeDasharray="5 8" />
    <circle cx="79" cy="239" r="5" fill="#C11D63" />
    <path d="M527 246c34 0 34-27 59-27" fill="none" stroke="#737D8C" strokeWidth="2.3" strokeLinecap="round" strokeDasharray="5 8" />
    <circle cx="586" cy="219" r="5" fill="#C11D63" />
    <path d="M174 444c44 26 99 38 148 30 51-8 91-34 139-48" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 9" opacity=".8" />
    <circle cx="174" cy="444" r="5" fill="#C11D63" />
    <circle cx="461" cy="426" r="5" fill="#C11D63" />
  </svg>
);

const TeamPhotoPlaceholder = () => (
  <div className="team-photo-placeholder" role="img" aria-label="Stepes eLearning localization team photo area">
    <svg className="team-photo-art" viewBox="0 0 720 500" aria-hidden="true">
      <defs>
        <linearGradient id="teamBackdrop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FDF2F7" />
          <stop offset="1" stopColor="#F8E8EF" />
        </linearGradient>
      </defs>
      <rect width="720" height="500" fill="url(#teamBackdrop)" />
      <circle cx="556" cy="92" r="144" fill="#FFFFFF" opacity=".54" />
      <circle cx="112" cy="440" r="174" fill="#C11D63" opacity=".055" />
      <path d="M0 370c118-66 250-86 381-55 124 29 214 87 339 56v129H0Z" fill="#FFFFFF" opacity=".62" />
      <g fill="#FFFFFF" stroke="#BFC6D2" strokeWidth="4">
        <circle cx="183" cy="204" r="53" />
        <circle cx="314" cy="163" r="65" />
        <circle cx="449" cy="201" r="56" />
        <circle cx="571" cy="182" r="52" />
        <path d="M92 438c10-105 45-166 91-166s81 61 91 166Z" />
        <path d="M196 438c13-129 59-199 118-199s105 70 118 199Z" />
        <path d="M352 438c10-109 48-169 97-169s87 60 97 169Z" />
        <path d="M487 438c9-103 42-160 84-160s75 57 84 160Z" />
      </g>
      <g fill="none" stroke="#596476" strokeWidth="4" strokeLinecap="round">
        <path d="M163 204h40M291 163h46M428 201h42M553 182h36" />
        <path d="M166 224c11 9 23 9 34 0M292 189c14 12 29 12 43 0M431 221c12 10 25 10 37 0M556 201c10 9 21 9 31 0" />
      </g>
      <g fill="#C11D63">
        <circle cx="166" cy="194" r="5" /><circle cx="200" cy="194" r="5" />
        <circle cx="294" cy="151" r="5" /><circle cx="334" cy="151" r="5" />
        <circle cx="432" cy="191" r="5" /><circle cx="468" cy="191" r="5" />
        <circle cx="555" cy="172" r="5" /><circle cx="587" cy="172" r="5" />
      </g>
      <g transform="translate(374 316)">
        <rect width="118" height="78" rx="8" fill="#E8ECF2" stroke="#BFC6D2" strokeWidth="3" />
        <path d="M20 67h78M29 16h60M29 29h45M29 42h52" stroke="#7A8494" strokeWidth="3" strokeLinecap="round" />
        <circle cx="96" cy="18" r="7" fill="#C11D63" />
      </g>
    </svg>
  </div>
);

const courseComponents = [
  {
    icon: "course",
    title: "Course Text and Interface",
    text: "Translate lesson content, slide text, navigation, menus, tooltips, prompts, feedback, completion messages, certificates, and downloadable learner resources.",
    items: ["Lessons and modules", "Buttons and navigation", "Prompts and feedback", "Certificates and resources"],
  },
  {
    icon: "quiz",
    title: "Assessments and Interactions",
    text: "Localize questions, answer choices, knowledge checks, simulations, branching scenarios, drag-and-drop activities, scoring feedback, and gamified learning elements.",
    items: ["Quizzes and knowledge checks", "Branching scenarios", "Simulations", "Scoring and feedback"],
  },
  {
    icon: "audio",
    title: "Audio and Narration",
    text: "Produce multilingual narration, character dialogue, instructor audio, pronunciation guidance, human voiceover, AI voiceover, and synchronized replacement audio.",
    items: ["Human voice talent", "AI voice with expert review", "Pronunciation control", "Audio editing and mastering"],
  },
  {
    icon: "video",
    title: "Video and Animation",
    text: "Translate speech, subtitles, captions, on-screen graphics, lower thirds, software demonstrations, product walkthroughs, webinars, and animated training content.",
    items: ["Subtitles and captions", "Dubbing and narration", "On-screen text", "Timing and rendering"],
  },
  {
    icon: "image",
    title: "Graphics and Visual Assets",
    text: "Update screenshots, diagrams, charts, infographics, interface captures, image-based labels, callouts, embedded PDFs, job aids, and supporting documents.",
    items: ["Screenshots and diagrams", "Charts and infographics", "Localized graphics", "Supporting documents"],
  },
  {
    icon: "code",
    title: "Technical Course Components",
    text: "Handle SCORM manifests, HTML5, XML, JSON, JavaScript-driven text, XLIFF, variables, layers, triggers, states, branching logic, metadata, and package naming.",
    items: ["Structured resources", "Variables and triggers", "SCORM metadata", "Language-specific packages"],
  },
];

const authoringTools = [
  {
    icon: "layers",
    title: "Articulate Storyline 360",
    text: "Localize project files, slides, layers, object states, triggers, variables, assessments, embedded media, voiceover timing, and published SCORM output.",
    href: "https://www.stepes.com/articulate-storyline-translations/",
    link: "Articulate Storyline Translation",
  },
  {
    icon: "device",
    title: "Articulate Rise 360",
    text: "Support structured XLIFF workflows, responsive text expansion, interactive blocks, knowledge checks, embedded media, mobile display, and language-version QA.",
    href: "https://www.stepes.com/rise-360-translation-services/",
    link: "Rise 360 Translation Services",
  },
  {
    icon: "course",
    title: "Adobe Captivate and Additional Platforms",
    text: "Translate Captivate, Lectora, iSpring, Elucidat, Adapt, Camtasia, PowerPoint-based courseware, custom HTML5 courses, and proprietary authoring environments.",
    href: "https://www.stepes.com/contact-us/",
    link: "Discuss Your Course Environment",
  },
];

const standards = ["SCORM 1.2", "SCORM 2004", "AICC", "xAPI / Tin Can", "cmi5", "HTML5", "IMS Common Cartridge", "Packaged ZIP courses"];
const lmsPlatforms = ["Cornerstone", "Moodle", "Canvas", "Docebo", "SAP SuccessFactors", "Litmos", "TalentLMS", "Blackboard", "LearnUpon", "Enterprise and custom LMS environments"];

const workflowSteps = [
  ["Source Review and Technical Discovery", "Review source files, authoring technology, multimedia, interactions, target languages, LMS environment, deliverables, and schedule before production begins."],
  ["Content Inventory and Scope Confirmation", "Identify translatable course text, audio, video, graphics, assessments, reference files, published packages, and non-translatable technical content."],
  ["Localization Preparation", "Prepare translation memory, terminology, style guidance, pronunciation lists, file-handling rules, references, and reviewer instructions."],
  ["Translation and Linguistic Review", "Native linguists preserve instructional clarity, learning objectives, subject terminology, brand voice, regulatory meaning, and local language conventions."],
  ["Voiceover and Multimedia Production", "Create the required narration, subtitles, localized video, graphics, screenshots, audio edits, timing adjustments, and other multilingual media."],
  ["Course Engineering and Reintegration", "Rebuild localized content in Storyline, Rise, Captivate, SCORM, HTML5, or the source environment while preserving variables, triggers, logic, and learner flow."],
  ["Linguistic and Functional QA", "Review the course in context for language, layout, navigation, assessments, audio, video, fonts, browsers, responsive behavior, and interactive functionality."],
  ["LMS Validation and Final Delivery", "Validate launch, bookmarking, resume behavior, completion, scoring, reporting, package integrity, and the agreed final source and delivery files."],
];

const qaRows = [
  ["Slide and Interface Text", "Accuracy, fluency, terminology, context, line breaks, truncation, overlap, buttons, navigation, and language display."],
  ["Assessments", "Question clarity, answer accuracy, feedback, attempts, scoring, branching, completion logic, and pass-or-fail behavior."],
  ["Audio", "Script accuracy, pronunciation, tone, volume, file mapping, playback, clipping, timing, and synchronization."],
  ["Video", "Subtitle accuracy, caption timing, on-screen text, audio alignment, playback, rendering, and visual quality."],
  ["Interactive Content", "Hotspots, triggers, variables, layers, states, drag-and-drop activities, simulations, and learner navigation."],
  ["SCORM and LMS", "Course launch, bookmarking, resume behavior, completion, scores, reporting, package loading, and browser compatibility."],
  ["Mobile and Responsive Courses", "Readability, touch targets, media scaling, responsive layouts, orientation changes, and small-screen navigation."],
  ["RTL and Complex Scripts", "Text direction, interface mirroring, fonts, encoding, punctuation, line wrapping, mixed-language content, and visual alignment."],
];

const aiPaths = [
  {
    label: "High-Risk Content",
    title: "Expert Human Translation",
    text: "Use professional human translation for regulated, safety-critical, customer-facing, brand-sensitive, or highly interactive learning where nuance and accountability are essential.",
    items: ["Qualified subject linguists", "Full contextual review", "Risk-appropriate approvals"],
  },
  {
    label: "Scalable Programs",
    title: "AI Translation With Expert Post-Editing",
    text: "Combine AI speed with professional linguistic review for large employee-training libraries, product education, repetitive content, and multilingual rollouts with controlled quality.",
    items: ["Translation memory reuse", "Approved terminology", "Professional post-editing"],
  },
  {
    label: "Frequent Updates",
    title: "AI-First Translation With Targeted Review",
    text: "Apply focused review to high-visibility sections, terminology, assessments, learner interactions, and critical content when lower-risk internal courses change frequently.",
    items: ["Content-aware routing", "Targeted quality checks", "Human release control"],
  },
];

const updateRows = [
  ["Annual Compliance Course", "14 language versions", "Linguistic QA", 88],
  ["Product Training Update", "Voice + screen capture", "Multimedia production", 64],
  ["New Employee Module", "8 languages", "Course engineering", 77],
  ["Regional Adaptation", "Arabic and Hebrew", "Final responsive QA", 94],
];

const useCases = [
  ["people", "Employee Onboarding", "Company orientation, HR policies, workplace expectations, systems training, benefits, codes of conduct, and role-specific learning paths."],
  ["review", "Compliance and Safety", "Workplace safety, data privacy, cybersecurity, anti-bribery, ethics, quality systems, environmental requirements, and regulated training."],
  ["software", "Product and Technical Training", "Software onboarding, equipment operation, installation, maintenance, troubleshooting, feature education, and technical certification."],
  ["education", "Customer Education", "Customer academies, self-service learning, product walkthroughs, feature training, best-practice courses, and certification programs."],
  ["briefcase", "Partner and Channel Enablement", "Product knowledge, sales certification, reseller onboarding, technical support training, brand standards, and partner communications."],
  ["globe", "Professional Education", "Continuing education, academic courseware, credentialing programs, student assessments, faculty training, and industry certification."],
];

const industries = [
  ["medical", "Life Sciences and Healthcare", "Clinical training, medical devices, pharmaceutical operations, quality systems, patient safety, pharmacovigilance, and healthcare compliance.", "https://www.stepes.com/healthcare-translation-services/", "Healthcare Translation Services"],
  ["factory", "Manufacturing and Industrial", "Equipment operation, field service, workplace safety, assembly, maintenance, quality control, production processes, and supply chain training.", "https://www.stepes.com/manufacturing-translation-services/", "Manufacturing Translation Services"],
  ["software", "Software and SaaS", "Product onboarding, feature training, customer education, technical certification, software demonstrations, cybersecurity, and customer success programs.", "https://www.stepes.com/software-translation-services/", "Software & SaaS Translation Services"],
  ["bank", "Financial Services and Insurance", "AML, KYC, data privacy, risk management, internal controls, product education, agent training, and compliance learning.", "https://www.stepes.com/insurance-translation-services/", "Insurance Translation Services"],
  ["retail", "Retail and Customer Experience", "Product knowledge, sales training, store operations, customer service, employee onboarding, brand standards, and seasonal programs.", "https://www.stepes.com/retail-ecommerce-translation-services/", "Retail & E-commerce Translation Services"],
  ["education", "Education and EdTech", "Digital curricula, online courses, assessments, student resources, faculty training, professional education, and learning applications.", "https://www.stepes.com/education-translation-services/", "Education Translation Services"],
];

const benefits = [
  ["linguist", "One Coordinated Production Team", "Bring native linguists, multimedia specialists, course engineers, and QA reviewers into one connected workflow from source review through release."],
  ["ai", "A Workflow Matched to the Content", "Apply expert human translation, AI-assisted production, targeted review, human or AI voiceover, and additional controls according to audience, risk, and update frequency."],
  ["memory", "Reusable Language Assets", "Maintain approved terminology, translation memory, pronunciation guidance, and style decisions so new modules and course updates remain consistent."],
  ["review", "Release-Ready Course Validation", "Review language, layouts, media, interactions, assessments, package behavior, and LMS functionality before each localized course is delivered."],
];

const relatedServices = [
  ["SCORM Translation and Engineering", "Localize packaged courses while preserving learner tracking, completion, bookmarking, assessments, reporting, and package integrity.", "https://www.stepes.com/scorm-translation-services/"],
  ["Articulate Storyline Translation", "Translate Storyline projects with layers, triggers, variables, multimedia, voiceover, interactions, and publish-ready course output.", "https://www.stepes.com/articulate-storyline-translations/"],
  ["Rise 360 Translation", "Localize responsive Rise courses through structured workflows for text, media, knowledge checks, and mobile learning.", "https://www.stepes.com/rise-360-translation-services/"],
  ["Canvas Translation Services", "Translate Canvas course content, assessments, multimedia, and related learning resources for multilingual delivery.", "https://www.stepes.com/canvas-translation-services/"],
  ["Training Translation Services", "Translate instructor-led training, manuals, workbooks, PowerPoint presentations, HR materials, and non-courseware learning assets.", "https://www.stepes.com/training-translation-services/"],
  ["Video Translation Services", "Translate training videos through transcription, subtitles, voiceover, dubbing, on-screen text, and platform-ready production.", "https://www.stepes.com/video-translation-services/"],
  ["Enterprise Voiceover Services", "Produce multilingual narration for digital courses, product training, video, simulations, and corporate learning.", "https://www.stepes.com/voice-over-services/"],
  ["Multilingual Desktop Publishing", "Localize workbooks, reference guides, job aids, certificates, graphics, and supporting training documents.", "https://www.stepes.com/multilingual-desktop-publishing/"],
];

const languages = ["Spanish for the United States, Latin America, and Spain", "Canadian and European French", "Brazilian and European Portuguese", "Simplified and Traditional Chinese", "Japanese and Korean", "Arabic and Hebrew", "German, Italian, Dutch, and Nordic languages", "Vietnamese, Thai, Indonesian, and Malay", "Hindi and other South Asian languages", "Central and Eastern European languages"];

const quoteInputs = ["Native authoring files", "Published SCORM packages", "XLIFF or structured text exports", "Audio and video source files", "Scripts and transcripts", "Editable graphics and fonts", "Target languages and locales", "Human or AI voiceover requirements", "LMS and testing requirements", "Expected launch date", "Existing translation memory and terminology", "Reviewer and approval requirements"];

const faqs = [
  ["What is the difference between eLearning translation and eLearning localization?", "eLearning translation converts written or spoken course content into another language. eLearning localization adapts the complete learning experience, which can include text, narration, subtitles, graphics, screenshots, assessments, layouts, timing, interactions, SCORM packaging, and LMS testing."],
  ["What eLearning authoring tools does Stepes support?", "Stepes supports Articulate Storyline, Rise 360, Adobe Captivate, Lectora, iSpring, Elucidat, Adapt, Camtasia, PowerPoint-based courseware, custom HTML5 environments, and other proprietary authoring systems. We review each course to confirm the most effective workflow."],
  ["Can Stepes work directly from Articulate Storyline or Captivate files?", "Yes. Native project files usually provide the best foundation for complete localization because they give direct access to text, layers, triggers, variables, media, assessments, and publishing settings. We can also provide translation-only deliverables when your team manages reintegration."],
  ["Can you translate a published SCORM package without the original authoring files?", "Sometimes. Feasibility depends on the package structure, course technology, available scripts and media, and expected final deliverables. Native authoring files are preferred, but Stepes can review a published package and explain what level of localization is practical."],
  ["Do you translate quizzes, variables, and branching logic?", "Yes. Stepes translates learner-facing questions, answer choices, prompts, feedback, and variables. Functional QA can verify scoring, attempts, branching, triggers, completion behavior, and learner flow after the translated content is reintegrated."],
  ["Can Stepes localize embedded video and animation?", "Yes. Our services can include transcription, translation, voiceover, subtitles, closed captions, on-screen text, graphics replacement, timing adjustments, audio mixing, rendering, and reintegration into the course."],
  ["Does Stepes provide both human and AI voiceover?", "Yes. We support professional human voice talent, AI voiceover with expert linguistic and pronunciation review, and blended production models. The best approach depends on the audience, content risk, update frequency, budget, and desired learner experience."],
  ["How do you synchronize translated narration with animation?", "Translated narration may be longer or shorter than the source. Our multimedia engineers adjust slide timing, animations, visual cues, pauses, and media placement so that the translated narration remains coordinated with the course."],
  ["How does Stepes test translated SCORM courses?", "Testing can include course launch, navigation, assessments, scoring, completion status, bookmarking, resume behavior, audio and video playback, language display, package loading, browser behavior, and reporting. The exact testing scope is agreed before production begins."],
  ["Can Stepes test courses in our LMS?", "Yes, when LMS access and testing are included in the project scope. We can validate a localized course in the client environment or a compatible testing environment, depending on access, security, and technical requirements."],
  ["How do you manage text expansion and right-to-left languages?", "Stepes adjusts layouts, text boxes, fonts, alignment, spacing, interface direction, and visual elements for each language. For right-to-left languages, we also review mirroring, punctuation, mixed-language content, navigation, and media placement."],
  ["Can our in-country reviewers participate?", "Yes. Stepes can include client reviewers for terminology approval, linguistic feedback, subject-matter validation, and final signoff. A defined review process and consolidated feedback help avoid conflicting changes and unnecessary rework."],
  ["How is eLearning translation priced?", "Pricing depends on the production scope, including translation volume, languages, voiceover minutes, video duration, subtitles, graphics, course engineering, source-file condition, functional testing, and LMS validation. Stepes reviews the materials and provides a quotation based on the required deliverables."],
  ["How long does an eLearning localization project take?", "Timelines depend on course length, language count, multimedia, authoring platform, engineering complexity, voiceover model, reviewer participation, and testing. Large programs can be delivered in language waves or course batches to support earlier launches."],
  ["Can translation memory reduce the cost of future course updates?", "Yes. Translation memory identifies approved content that can be reused in later versions. This can improve consistency, reduce repeated translation effort, and shorten turnaround for annual updates, new releases, and regional adaptations."],
  ["What files should we provide for a quotation?", "Provide native authoring files when possible, along with published packages, XLIFF or text exports, scripts, transcripts, audio, video, editable graphics, target languages, LMS information, voiceover preferences, timeline, and expected deliverables."],
  ["What final files will we receive?", "Deliverables may include published SCORM or HTML5 packages, localized source files, translated scripts, voiceover audio, subtitles, localized videos, updated graphics, translation memory, terminology resources, and QA records. The final package is confirmed at kickoff."],
  ["Can Stepes support continuously updated course libraries?", "Yes. Stepes supports ongoing eLearning localization using translation memory, terminology management, changed-content workflows, multimedia updates, rolling delivery, version control, and language-specific course maintenance."],
];

const faqGroups = [
  { title: "Files, Formats, and Authoring Tools", items: faqs.slice(0, 5) },
  { title: "Multimedia, Testing, and Review", items: faqs.slice(5, 12) },
  { title: "Pricing, Delivery, and Ongoing Programs", items: faqs.slice(12) },
];

export default function StepesELearningTranslationHub() {
  return (
    <main className="elearning-page">
      <style>{`
        :root {
          --e-ink: #111522;
          --e-ink-soft: #3c4659;
          --e-muted: #667184;
          --e-line: #e1e5ec;
          --e-line-dark: rgba(255,255,255,.16);
          --e-bg: #ffffff;
          --e-bg-soft: #f7f8fb;
          --e-blush: #fdf2f7;
          --e-magenta: #c11d63;
          --e-magenta-dark: #9f1d55;
          --e-magenta-deep: #7a1542;
          --e-magenta-light: #f2a7c6;
          --e-dark: #121826;
          --e-radius-lg: 30px;
          --e-radius-md: 22px;
          --e-shadow: 0 24px 70px rgba(20,27,42,.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .elearning-page {
          overflow: hidden;
          background: var(--e-bg);
          color: var(--e-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
        }
        .elearning-page a { color: inherit; }
        .elearning-page h1,
        .elearning-page h2,
        .elearning-page h3,
        .elearning-page p { margin-top: 0; }
        .elearning-page h1,
        .elearning-page h2,
        .elearning-page h3 { font-weight: 600; letter-spacing: -.025em; line-height: 1.12; }
        .elearning-page h1 { font-size: 48px; margin-bottom: 24px; }
        .elearning-page h2 { font-size: 36px; margin-bottom: 22px; }
        .elearning-page h3 { font-size: 24px; margin-bottom: 14px; }
        .elearning-page p { color: var(--e-ink-soft); font-size: 16px; margin-bottom: 20px; }
        .elearning-page ul { margin: 0; padding: 0; list-style: none; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section-soft { background: var(--e-bg-soft); }
        .section-blush { background: var(--e-blush); }
        .section-dark { background: var(--e-dark); color: #fff; }
        .section-dark p { color: #c9cfda; }
        .eyebrow {
          color: var(--e-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .18em !important;
          text-transform: uppercase;
          margin-bottom: 18px !important;
        }
        .section-dark .eyebrow,
        .dark-panel .eyebrow { color: var(--e-magenta-light) !important; }
        .section-intro { max-width: 810px; font-size: 18px !important; line-height: 1.68; margin-bottom: 0 !important; }
        .section-head { max-width: 920px; margin-bottom: 52px; }
        .section-head.wide { max-width: 1080px; }
        .section-head.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-head.centered .section-intro { margin-left: auto; margin-right: auto; }
        .split-head { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; margin-bottom: 54px; }
        .split-head .section-intro { max-width: 720px; }
        .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .media-layout { grid-template-columns: .86fr 1.14fr; gap: 88px; }
        .split-2.top { align-items: start; }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn {
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
        .btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible,
        .btn-primary * { color: #fff !important; stroke: #fff !important; }
        .btn-primary { background: var(--e-magenta); box-shadow: 0 14px 32px rgba(193,29,99,.20); }
        .btn-primary:hover { background: var(--e-magenta-dark); transform: translateY(-2px); }
        .btn-secondary { background: #fff; border: 1px solid #d8dde5; color: var(--e-ink); }
        .btn-secondary:hover { border-color: #bfc5cf; transform: translateY(-2px); }
        .btn:focus-visible,
        .editorial-link:focus-visible,
        details summary:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }
        .editorial-link {
          color: var(--e-magenta) !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .editorial-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(4px); }
        .section-dark .editorial-link { color: var(--e-magenta-light) !important; }
        .icon { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .icon-check { width: 20px; height: 20px; color: var(--e-magenta); margin-top: 3px; flex: 0 0 auto; }
        .icon-box { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; background: var(--e-blush); color: var(--e-magenta); flex: 0 0 auto; }

        .hero { padding: 100px 0 92px; position: relative; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, .96fr) minmax(480px, 1.04fr); gap: 48px; align-items: center; }
        .hero-copy { max-width: 650px; }
        .hero-copy .hero-lead { font-size: 18px; line-height: 1.72; max-width: 640px; margin-bottom: 30px; color: #465064; }
        .hero-art { min-height: 480px; display: flex; align-items: center; justify-content: center; }
        .hero-art-svg { width: 100%; height: auto; max-height: 530px; }

        .trust-strip { border-top: 1px solid var(--e-line); border-bottom: 1px solid var(--e-line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .trust-item { padding: 25px 12px; text-align: center; color: var(--e-ink); font-weight: 600; font-size: 16px; }

        .overview-panel { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; box-shadow: var(--e-shadow); }
        .overview-grid { display: grid; grid-template-columns: repeat(2, 1fr); }
        .overview-column { padding: 38px; }
        .overview-column + .overview-column { border-left: 1px solid var(--e-line); }
        .overview-column h3 { font-size: 22px; }
        .overview-column ul { display: grid; gap: 11px; margin-top: 24px; }
        .overview-column li { display: flex; align-items: flex-start; gap: 10px; color: var(--e-ink-soft); font-size: 16px; }

        .component-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--e-line); border-left: 1px solid var(--e-line); }
        .component-item { padding: 34px; border-right: 1px solid var(--e-line); border-bottom: 1px solid var(--e-line); min-height: 100%; background: #fff; }
        .component-item .icon-box { margin-bottom: 24px; }
        .component-item p { min-height: 135px; }
        .mini-list { display: grid; gap: 10px; margin-top: 22px !important; }
        .mini-list li { display: flex; align-items: flex-start; gap: 11px; color: var(--e-ink-soft); font-size: 16px; }
        .mini-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--e-magenta); margin-top: 10px; flex: 0 0 auto; }

        .tools-layout { display: grid; grid-template-columns: 1.12fr .88fr; gap: 32px; align-items: start; }
        .tool-stack { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; }
        .tool-row { display: grid; grid-template-columns: 54px 1fr; gap: 20px; padding: 30px; border-bottom: 1px solid var(--e-line); align-items: start; }
        .tool-row:last-child { border-bottom: 0; }
        .tool-row h3 { font-size: 22px; }
        .tool-row p { margin-bottom: 10px; }
        .tech-panel { border-radius: var(--e-radius-lg); background: var(--e-dark); color: #fff; padding: 38px; }
        .tech-panel h3 { color: #fff; }
        .tech-panel p { color: #c9cfda; }
        .tech-group + .tech-group { border-top: 1px solid var(--e-line-dark); margin-top: 30px; padding-top: 28px; }
        .tag-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .tag { border: 1px solid rgba(255,255,255,.18); border-radius: 999px; padding: 8px 12px; color: #e5e9ef; font-size: 16px; line-height: 1.25; }
        .platform-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px 22px; margin-top: 18px !important; }
        .platform-list li { color: #d7dce5; font-size: 16px; padding-left: 16px; position: relative; }
        .platform-list li::before { content: ""; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: var(--e-magenta-light); }

        .media-visual { background: var(--e-dark); border-radius: var(--e-radius-lg); padding: 36px; color: #fff; min-height: 450px; display: flex; flex-direction: column; justify-content: space-between; }
        .media-visual h3 { color: #fff; }
        .audio-wave { height: 170px; display: flex; align-items: center; justify-content: center; gap: 7px; }
        .audio-wave span { width: 5px; border-radius: 999px; background: var(--e-magenta-light); opacity: .86; }
        .audio-wave span:nth-child(1) { height: 32px; } .audio-wave span:nth-child(2) { height: 48px; } .audio-wave span:nth-child(3) { height: 76px; } .audio-wave span:nth-child(4) { height: 108px; } .audio-wave span:nth-child(5) { height: 82px; } .audio-wave span:nth-child(6) { height: 132px; } .audio-wave span:nth-child(7) { height: 94px; } .audio-wave span:nth-child(8) { height: 58px; } .audio-wave span:nth-child(9) { height: 116px; } .audio-wave span:nth-child(10) { height: 78px; } .audio-wave span:nth-child(11) { height: 52px; } .audio-wave span:nth-child(12) { height: 36px; }
        .media-meta { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--e-line-dark); }
        .media-meta div { padding: 20px 18px 0 0; }
        .media-meta div + div { border-left: 1px solid var(--e-line-dark); padding-left: 18px; }
        .media-meta strong { display: block; color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 4px; }
        .media-meta span { color: #abb4c3; font-size: 14px; }
        .media-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 30px; border-top: 1px solid var(--e-line); margin-top: 28px !important; }
        .media-list li { position: relative; padding: 17px 0 17px 24px; border-bottom: 1px solid var(--e-line); color: var(--e-ink-soft); font-size: 16px; }
        .media-list li::before { content: ""; position: absolute; left: 0; top: 27px; width: 9px; height: 2px; border-radius: 2px; background: var(--e-magenta); }
        .choice-table { margin-top: 34px; border: 1px solid var(--e-line); border-radius: var(--e-radius-md); overflow: hidden; }
        .choice-row { display: grid; grid-template-columns: .8fr 1.3fr .6fr; }
        .choice-row + .choice-row { border-top: 1px solid var(--e-line); }
        .choice-row > div { padding: 16px 18px; font-size: 16px; color: var(--e-ink-soft); }
        .choice-row > div + div { border-left: 1px solid var(--e-line); }
        .choice-row strong { color: var(--e-ink); font-weight: 600; }

        .workflow-wrap { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; }
        .workflow-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .workflow-item { padding: 30px; min-height: 272px; }
        .workflow-item:not(:nth-child(4n)) { border-right: 1px solid var(--e-line); }
        .workflow-item:nth-child(-n+4) { border-bottom: 1px solid var(--e-line); }
        .step-label { color: var(--e-magenta); font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; }
        .workflow-item h3 { font-size: 21px; }

        .qa-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 74px; align-items: start; }
        .qa-list { border-top: 1px solid var(--e-line-dark); }
        .qa-row { display: grid; grid-template-columns: 48px 1fr; gap: 20px; padding: 27px 0; border-bottom: 1px solid var(--e-line-dark); }
        .qa-row .icon-box { width: 44px; height: 44px; background: rgba(242,167,198,.09); color: var(--e-magenta-light); }
        .qa-row h3 { color: #fff; font-size: 21px; }
        .qa-row p { margin-bottom: 0; }
        .qa-highlights { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px 24px; margin: 28px 0 0 !important; }
        .qa-highlights li { color: #d8dde6; font-size: 16px; display: flex; align-items: flex-start; gap: 10px; }
        .qa-highlights li::before { content: ""; width: 7px; height: 7px; background: var(--e-magenta-light); border-radius: 50%; margin-top: 10px; flex: 0 0 auto; }

        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .ai-card { border: 1px solid var(--e-line); background: #fff; border-radius: var(--e-radius-md); padding: 30px; display: flex; flex-direction: column; }
        .ai-card .card-label { color: var(--e-magenta); font-size: 11px; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
        .ai-card h3 { font-size: 22px; }
        .ai-card p { margin-bottom: 24px; }
        .ai-card ul { display: grid; gap: 11px; border-top: 1px solid var(--e-line); padding-top: 20px; margin-top: auto; }
        .ai-card li { color: var(--e-ink-soft); font-size: 16px; display: flex; align-items: flex-start; gap: 9px; }
        .ai-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--e-magenta); margin-top: 10px; flex: 0 0 auto; }

        .update-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 74px; align-items: center; }
        .update-board { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); padding: 28px; background: #fff; box-shadow: var(--e-shadow); }
        .board-head { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding-bottom: 22px; border-bottom: 1px solid var(--e-line); }
        .board-title { color: var(--e-ink); font-weight: 600; font-size: 18px; }
        .status-pill { border: 1px solid #e7c4d3; color: var(--e-magenta); border-radius: 999px; padding: 6px 11px; font-size: 14px; line-height: 1; }
        .update-list { display: grid; }
        .update-row { display: grid; grid-template-columns: 1.05fr .8fr .72fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--e-line); align-items: center; }
        .update-row:last-child { border-bottom: 0; padding-bottom: 6px; }
        .update-name { color: var(--e-ink); font-weight: 600; font-size: 16px; }
        .update-meta { color: var(--e-muted); font-size: 14px; }
        .progress { height: 7px; border-radius: 999px; background: #eceff3; overflow: hidden; }
        .progress span { display: block; height: 100%; border-radius: inherit; background: var(--e-magenta); }
        .update-state { color: var(--e-ink-soft); text-align: right; font-size: 14px; }
        .asset-links { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 28px; }

        .usecase-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; }
        .usecase-item { padding: 34px; }
        .usecase-item:not(:nth-child(3n)) { border-right: 1px solid var(--e-line); }
        .usecase-item:nth-child(-n+3) { border-bottom: 1px solid var(--e-line); }
        .usecase-item .icon-box { margin-bottom: 22px; }
        .usecase-item h3 { font-size: 21px; }
        .usecase-item p { margin-bottom: 0; }

        .industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--e-line); border-left: 1px solid var(--e-line); }
        .industry-item { padding: 34px; border-right: 1px solid var(--e-line); border-bottom: 1px solid var(--e-line); }
        .industry-top { display: flex; align-items: center; gap: 15px; margin-bottom: 16px; }
        .industry-top .icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .industry-top h3 { margin-bottom: 0; font-size: 21px; }
        .industry-item p { margin-bottom: 10px; }

        .benefit-layout { display: grid; grid-template-columns: .68fr 1.32fr; gap: 72px; align-items: start; }
        .benefit-layout .section-head { margin-bottom: 0; }
        .benefit-grid { display: grid; grid-template-columns: repeat(2, 1fr); border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; }
        .benefit-item { padding: 34px; }
        .benefit-item:nth-child(odd) { border-right: 1px solid var(--e-line); }
        .benefit-item:nth-child(-n+2) { border-bottom: 1px solid var(--e-line); }
        .benefit-top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .benefit-top .icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .benefit-top h3 { margin-bottom: 0; font-size: 21px; }
        .benefit-item p { margin-bottom: 0; }

        .related-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--e-line); border-left: 1px solid var(--e-line); }
        .related-item { padding: 28px; border-right: 1px solid var(--e-line); border-bottom: 1px solid var(--e-line); background: #fff; display: flex; flex-direction: column; }
        .related-item h3 { font-size: 20px; }
        .related-item p { margin-bottom: 22px; }
        .related-item .editorial-link { margin-top: auto; }

        .language-layout { display: grid; grid-template-columns: .88fr 1.12fr; gap: 82px; align-items: start; }
        .language-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 28px; border-top: 1px solid var(--e-line); }
        .language-list li { position: relative; padding: 17px 0 17px 24px; border-bottom: 1px solid var(--e-line); color: var(--e-ink-soft); font-size: 16px; }
        .language-list li::before { content: ""; position: absolute; left: 0; top: 27px; width: 9px; height: 2px; border-radius: 2px; background: var(--e-magenta); }
        .language-notes { margin-top: 30px; padding: 28px; border: 1px solid #efd8e2; background: var(--e-blush); border-radius: var(--e-radius-md); }
        .language-notes h3 { font-size: 21px; }
        .language-notes p { margin-bottom: 0; }

        .quote-panel { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); padding: 56px; background: #fff; box-shadow: var(--e-shadow); }
        .quote-panel .split-2 { gap: 60px; }
        .quote-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 24px; }
        .quote-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--e-ink-soft); font-size: 16px; }

        .faq-panel { border: 1px solid var(--e-line); border-radius: var(--e-radius-lg); overflow: hidden; background: #fff; }
        .faq-group + .faq-group { border-top: 1px solid #cfd5df; }
        .faq-group-label { margin: 0 !important; padding: 17px 30px; background: #f5f6f9; color: var(--e-magenta) !important; font-size: 11px !important; font-weight: 600 !important; line-height: 1.3 !important; letter-spacing: .16em !important; text-transform: uppercase; }
        details { border-top: 1px solid var(--e-line); }
        .faq-group details:first-of-type { border-top: 0; }
        details summary { list-style: none; cursor: pointer; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--e-ink); font-size: 18px; font-weight: 600; }
        details summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #d8dde5; position: relative; flex: 0 0 auto; }
        .faq-plus::before,
        .faq-plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 1.5px; background: var(--e-magenta); transform: translate(-50%, -50%); transition: transform .2s ease; }
        .faq-plus::after { transform: translate(-50%, -50%) rotate(90deg); }
        details[open] .faq-plus::after { transform: translate(-50%, -50%) rotate(0); }
        .faq-answer { padding: 0 72px 26px 30px; max-width: 900px; }
        .faq-answer p { margin-bottom: 0; }

        .final-cta { background: var(--e-blush); border-top: 1px solid #efd8e2; overflow: hidden; }
        .cta-panel { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(460px, .97fr); align-items: stretch; min-height: 500px; }
        .cta-content { padding: 82px 72px 82px 0; display: flex; flex-direction: column; justify-content: center; }
        .cta-panel h2 { max-width: 650px; }
        .cta-panel p { max-width: 680px; margin-bottom: 0; font-size: 18px; }
        .cta-panel .btn-row { justify-content: flex-start; margin-top: 32px; }
        .team-photo-placeholder { position: relative; min-height: 500px; align-self: stretch; overflow: hidden; background: transparent; }
        .team-photo-art { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center bottom; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(430px, .95fr); gap: 32px; }
          .hero-art { min-height: 440px; }
          .component-grid { grid-template-columns: repeat(2, 1fr); }
          .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .workflow-item:not(:nth-child(4n)) { border-right: 0; }
          .workflow-item:not(:nth-child(2n)) { border-right: 1px solid var(--e-line); }
          .workflow-item:nth-child(-n+6) { border-bottom: 1px solid var(--e-line); }
          .industry-grid { grid-template-columns: repeat(2, 1fr); }
          .benefit-layout { grid-template-columns: .76fr 1.24fr; gap: 48px; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          .elearning-page h1 { font-size: 42px; }
          .elearning-page h2 { font-size: 32px; }
          .elearning-page h3 { font-size: 22px; }
          .hero { padding: 84px 0 74px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 780px; }
          .hero-art { min-height: 0; max-width: 660px; margin: 8px auto 0; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 0 24px; }
          .trust-item:nth-child(n+3) { border-top: 1px solid var(--e-line); }
          .split-head,
          .split-2,
          .tools-layout,
          .qa-layout,
          .update-grid,
          .language-layout,
          .benefit-layout { grid-template-columns: 1fr; gap: 42px; }
          .cta-panel { grid-template-columns: 1fr; min-height: 0; }
          .split-head { margin-bottom: 42px; }
          .component-grid { grid-template-columns: repeat(2, 1fr); }
          .component-item p { min-height: 0; }
          .tech-panel { padding: 34px; }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-card h3,
          .ai-card p { min-height: 0; }
          .usecase-grid { grid-template-columns: repeat(2, 1fr); }
          .usecase-item:not(:nth-child(3n)) { border-right: 0; }
          .usecase-item:not(:nth-child(2n)) { border-right: 1px solid var(--e-line); }
          .usecase-item:nth-child(-n+4) { border-bottom: 1px solid var(--e-line); }
          .benefit-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-content { padding: 72px 0 52px; }
          .team-photo-placeholder { min-height: 390px; margin-left: -24px; margin-right: -24px; }
        }

        @media (max-width: 620px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          .elearning-page h1 { font-size: 38px; }
          .elearning-page h2 { font-size: 30px; }
          .elearning-page h3 { font-size: 20px; }
          .hero { padding: 68px 0 62px; }
          .hero-copy .hero-lead { font-size: 18px; }
          .btn-row { width: 100%; }
          .btn { width: 100%; }
          .hero-art { margin-left: -12px; margin-right: -12px; }
          .trust-grid { grid-template-columns: 1fr; gap: 0; }
          .trust-item + .trust-item { border-top: 1px solid var(--e-line); }
          .overview-grid { grid-template-columns: 1fr; }
          .overview-column { padding: 28px 24px; }
          .overview-column + .overview-column { border-left: 0; border-top: 1px solid var(--e-line); }
          .component-grid { grid-template-columns: 1fr; }
          .component-item { padding: 28px 24px; }
          .tool-row { grid-template-columns: 44px 1fr; gap: 16px; padding: 26px 22px; }
          .tool-row .icon-box { width: 44px; height: 44px; }
          .tech-panel { padding: 30px 24px; }
          .platform-list { grid-template-columns: 1fr; }
          .media-visual { padding: 28px 22px; min-height: 380px; }
          .media-meta { grid-template-columns: 1fr; }
          .media-meta div + div { border-left: 0; border-top: 1px solid var(--e-line-dark); padding-left: 0; padding-top: 15px; margin-top: 15px; }
          .media-list { grid-template-columns: 1fr; }
          .choice-row { grid-template-columns: 1fr; gap: 4px; padding: 18px; }
          .choice-row > div { padding: 0; }
          .choice-row > div + div { border-left: 0; }
          .choice-row div:nth-child(2) { color: var(--e-ink-soft); }
          .choice-row div:nth-child(3) { color: var(--e-magenta); font-weight: 600; }
          .workflow-grid { grid-template-columns: 1fr; }
          .workflow-item,
          .workflow-item:not(:nth-child(4n)),
          .workflow-item:not(:nth-child(2n)),
          .workflow-item:nth-child(-n+6) { border-right: 0; border-bottom: 1px solid var(--e-line); min-height: 0; }
          .workflow-item:last-child { border-bottom: 0; }
          .qa-highlights { grid-template-columns: 1fr; }
          .qa-row { grid-template-columns: 44px 1fr; gap: 16px; }
          .update-board { padding: 22px 20px; }
          .update-row { grid-template-columns: 1fr; gap: 9px; }
          .update-state { text-align: left; }
          .usecase-grid { grid-template-columns: 1fr; }
          .usecase-item,
          .usecase-item:not(:nth-child(3n)),
          .usecase-item:not(:nth-child(2n)),
          .usecase-item:nth-child(-n+4) { border-right: 0; border-bottom: 1px solid var(--e-line); }
          .usecase-item:last-child { border-bottom: 0; }
          .industry-grid { grid-template-columns: 1fr; }
          .benefit-grid { grid-template-columns: 1fr; }
          .benefit-item:nth-child(odd) { border-right: 0; }
          .benefit-item:nth-child(-n+3) { border-bottom: 1px solid var(--e-line); }
          .related-grid { grid-template-columns: 1fr; }
          .related-item { padding: 26px 24px; }
          .language-list { grid-template-columns: 1fr; }
          .quote-panel { padding: 32px 24px; }
          .cta-content { padding: 64px 0 42px; }
          .team-photo-placeholder { min-height: 300px; margin-left: -20px; margin-right: -20px; }
          .quote-list { grid-template-columns: 1fr; }
          .faq-group-label { padding: 16px 20px; }
          details summary { padding: 22px 20px; font-size: 17px; align-items: flex-start; }
          .faq-answer { padding: 0 20px 24px; }
        }

        @media (max-width: 350px) {
          .hero-art { margin-left: -18px; margin-right: -18px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Global Digital Learning</p>
            <h1>eLearning Translation &amp; Localization Services</h1>
            <p className="hero-lead">
              Translate complete digital learning experiences for employees, customers, partners, and learners worldwide. Stepes brings native linguists, multimedia specialists, course engineers, and functional QA together to deliver accurate, engaging, deployment-ready eLearning in 100+ languages.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/elearning-training-translation-services/#elearning-workflow">See How It Works <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-art">
            <ELearningHeroArt />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="eLearning localization trust indicators">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 17100 · ISO 9001 · ISO 13485</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Expertise</div>
          <div className="trust-item">Linguistic + Functional QA</div>
        </div>
      </section>

      <section className="section" id="complete-elearning-localization">
        <div className="shell split-head">
          <div>
            <p className="eyebrow">Complete Course Localization</p>
            <h2>From Source Files to LMS Deployment</h2>
          </div>
          <div>
            <p className="section-intro">
              An eLearning course is a connected learning system made up of instructional text, narration, video, animation, assessments, interactive logic, visual assets, technical packaging, and learner tracking. Successful localization must preserve the complete experience across languages.
            </p>
            <p>
              Stepes supports organizations that need translated language assets as well as teams seeking complete multilingual course production. Our workflow can extend from source review and translation through multimedia production, course engineering, testing, and publish-ready delivery.
            </p>
          </div>
        </div>
        <div className="shell">
          <div className="overview-panel">
            <div className="overview-grid">
              <article className="overview-column">
                <h3>Translation-Only Delivery</h3>
                <p>For organizations with internal eLearning developers, Stepes can deliver professionally translated assets ready for your production team.</p>
                <ul>
                  {["Translated scripts and spreadsheets", "XLIFF and structured resource files", "Subtitle and caption files", "Voiceover and multimedia assets", "Terminology and translation memory"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
                </ul>
              </article>
              <article className="overview-column">
                <h3>Complete Course Localization</h3>
                <p>For end-to-end delivery, Stepes manages language production, multimedia, course rebuilding, technical QA, and final package preparation.</p>
                <ul>
                  {["Source-file review and content inventory", "Translation and linguistic review", "Voiceover, subtitles, video, and graphics", "Course reintegration and engineering", "SCORM and LMS-ready testing"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="course-components">
        <div className="shell">
          <div className="section-head centered">
            <h2>Every Component of Your eLearning Course</h2>
            <p className="section-intro">
              Stepes localizes the visible content learners experience together with the embedded media, interactions, and technical resources required to make each course function correctly.
            </p>
          </div>
          <div className="component-grid">
            {courseComponents.map((item) => (
              <article className="component-item" key={item.title}>
                <div className="icon-box"><LineIcon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="mini-list">
                  {item.items.map((entry) => <li key={entry}>{entry}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="authoring-tools-and-lms">
        <div className="shell">
          <div className="section-head wide">
            <h2>Built for the Tools Your Learning Teams Already Use</h2>
            <p className="section-intro">
              Stepes adapts the localization workflow to your authoring environment, course standards, package structure, and LMS requirements. Native project files usually provide the most reliable path to complete course localization.
            </p>
          </div>
          <div className="tools-layout">
            <div className="tool-stack">
              {authoringTools.map((tool) => (
                <article className="tool-row" key={tool.title}>
                  <div className="icon-box"><LineIcon name={tool.icon} /></div>
                  <div>
                    <h3>{tool.title}</h3>
                    <p>{tool.text}</p>
                    <a className="editorial-link" href={tool.href}>{tool.link} <ArrowIcon /></a>
                  </div>
                </article>
              ))}
            </div>
            <aside className="tech-panel dark-panel">
              <div className="tech-group">
                <p className="eyebrow">Course Standards</p>
                <h3>Structured and Packaged Learning Content</h3>
                <p>We support common course standards and delivery formats, from native authoring projects to published packages and structured exports.</p>
                <div className="tag-list">
                  {standards.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
                <a className="editorial-link" href="https://www.stepes.com/scorm-translation-services/">SCORM Translation and Engineering <ArrowIcon /></a>
              </div>
              <div className="tech-group">
                <p className="eyebrow">LMS Environments</p>
                <h3>Deployment and Testing Support</h3>
                <p>Where LMS access is included, Stepes can validate localized courses for launch, navigation, completion, scoring, reporting, and language display.</p>
                <ul className="platform-list">
                  {lmsPlatforms.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="editorial-link" href="https://www.stepes.com/canvas-translation-services/">Canvas Translation Services <ArrowIcon /></a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="multimedia-localization">
        <div className="shell split-2 media-layout">
          <div className="media-visual dark-panel" aria-label="eLearning voiceover and multimedia localization">
            <div>
              <p className="eyebrow">Multilingual Course Audio</p>
              <h3>Narration Production and Synchronization</h3>
            </div>
            <div className="audio-wave">{Array.from({ length: 12 }).map((_, index) => <span key={index} />)}</div>
            <div className="media-meta">
              <div><strong>Script</strong><span>Adapted for speech</span></div>
              <div><strong>Voice</strong><span>Human or AI</span></div>
              <div><strong>Timing</strong><span>Course synchronized</span></div>
            </div>
          </div>
          <div>
            <h2>Localize the Complete Multimedia Learning Experience</h2>
            <p className="section-intro">
              Stepes integrates language services with audio, video, subtitle, graphics, and course-production expertise so learners receive a coordinated experience across every media layer.
            </p>
            <ul className="media-list">
              {["Native human voice talent", "AI voiceover with expert review", "Voice casting and pronunciation control", "Subtitles and closed captions", "Video dubbing and narration", "On-screen text and graphics", "Software demonstration updates", "Animation and slide timing", "Audio editing and mastering", "Final rendering and reintegration"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="choice-table" aria-label="Multimedia localization model comparison">
              <div className="choice-row"><div><strong>Subtitles</strong></div><div>Large libraries and frequently updated content</div><div>Fastest</div></div>
              <div className="choice-row"><div><strong>AI Voiceover</strong></div><div>High-volume programs requiring scalable narration</div><div>Faster</div></div>
              <div className="choice-row"><div><strong>Human Voiceover</strong></div><div>Regulated, customer-facing, and brand-sensitive learning</div><div>Most natural</div></div>
            </div>
            <a className="editorial-link" href="https://www.stepes.com/voice-over-services/">Enterprise Voiceover Services <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section" id="elearning-workflow">
        <div className="shell">
          <div className="section-head centered wide">
            <h2>A Proven Process for Translation, Engineering, and Testing</h2>
            <p className="section-intro">
              Our workflow connects linguistic preparation, multimedia production, course engineering, and quality assurance from the beginning so every language version moves through a controlled production path.
            </p>
          </div>
          <div className="workflow-wrap">
            <div className="workflow-grid">
              {workflowSteps.map(([title, text], index) => (
                <article className="workflow-item" key={title}>
                  <div className="step-label">Step {index + 1}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="elearning-quality-assurance">
        <div className="shell qa-layout">
          <div>
            <p className="eyebrow">Complete Course QA</p>
            <h2>Test the Learning Experience, Not Just the Translation</h2>
            <p className="section-intro">
              A course can be linguistically correct and still fail when text is truncated, an answer is scored incorrectly, narration does not play, or the LMS cannot record completion. Stepes combines linguistic, visual, functional, and technical QA.
            </p>
            <ul className="qa-highlights">
              {["Text expansion and contraction", "Right-to-left course behavior", "CJK and complex-script rendering", "Broken variables or missing strings", "Audio clipping and subtitle errors", "Completion and scoring failures"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <ArrowIcon /></a>
          </div>
          <div className="qa-list">
            {qaRows.map(([title, text], index) => (
              <article className="qa-row" key={title}>
                <div className="icon-box"><LineIcon name={index === 0 ? "course" : index === 1 ? "quiz" : index === 2 ? "audio" : index === 3 ? "video" : index === 4 ? "layers" : index === 5 ? "lms" : index === 6 ? "device" : "globe"} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="ai-elearning-translation">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">AI + Human Expertise</p>
            <h2>AI Efficiency Without Losing Instructional Quality</h2>
            <p className="section-intro">
              AI can accelerate translation, transcription, terminology extraction, voice generation, subtitle production, change detection, and automated QA. Expert linguists and engineers remain responsible for context, terminology, instructional clarity, pronunciation, course functionality, and final release quality.
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
        </div>
      </section>

      <section className="section" id="continuous-elearning-localization">
        <div className="shell update-grid">
          <div>
            <p className="eyebrow">Continuous Localization</p>
            <h2>Keep Every Language Current as Courses Evolve</h2>
            <p className="section-intro">
              Organizations often localize an initial course successfully but struggle to maintain many language versions when the source changes. Stepes supports recurring releases, annual compliance updates, product revisions, policy changes, new modules, and regional adaptations.
            </p>
            <p>
              We identify changed content, reuse approved translations, update affected media, rebuild impacted language courses, test the relevant components, and maintain clear version histories. This reduces duplicated work while helping every language remain aligned with the current source.
            </p>
            <div className="asset-links">
              <a className="editorial-link" href="https://www.stepes.com/translation-memory/">Translation Memory <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/translation-management-portal/">Translation Management Portal <ArrowIcon /></a>
            </div>
          </div>
          <div className="update-board" aria-label="Multilingual course update workflow">
            <div className="board-head">
              <div className="board-title">Continuous Course Localization</div>
              <div className="status-pill">Changes Tracked</div>
            </div>
            <div className="update-list">
              {updateRows.map(([name, meta, state, progress]) => (
                <div className="update-row" key={name}>
                  <div><div className="update-name">{name}</div><div className="update-meta">{meta}</div></div>
                  <div className="progress"><span style={{ width: `${progress}%` }} /></div>
                  <div className="update-state">{state}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush" id="global-training-programs">
        <div className="shell">
          <div className="section-head centered">
            <h2>eLearning Translation for Every Stage of the Learner Journey</h2>
            <p className="section-intro">
              Support employees, customers, partners, technicians, and professional learners with multilingual content designed for their role, context, and learning objective.
            </p>
          </div>
          <div className="usecase-grid">
            {useCases.map(([icon, title, text]) => (
              <article className="usecase-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="industry-expertise">
        <div className="shell split-head">
          <div>
            <p className="eyebrow">Subject-Matter Expertise</p>
            <h2>Specialized Training for Global Industries</h2>
          </div>
          <div>
            <p className="section-intro">
              Effective training translation requires linguists who understand the subject, audience, terminology, and operational context. Stepes builds language teams around each course’s industry and learning requirements.
            </p>
          </div>
        </div>
        <div className="shell">
          <div className="industry-grid">
            {industries.map(([icon, title, text, href, link]) => (
              <article className="industry-item" key={title}>
                <div className="industry-top"><div className="icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{link} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="shell benefit-layout">
          <div className="section-head">
            <h2>One Team From Translation Through Release</h2>
            <p className="section-intro">
              Bring the language, multimedia, course engineering, quality, and ongoing maintenance behind global digital learning into one coordinated production program.
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
        </div>
      </section>

      <section className="section" id="specialized-elearning-services">
        <div className="shell">
          <div className="split-head services-head">
            <div>
              <h2>Explore Our eLearning Translation Expertise</h2>
            </div>
            <div>
              <p className="section-intro">
                Explore focused services for the authoring platforms, course formats, multimedia requirements, and supporting training materials within your global learning program.
              </p>
            </div>
          </div>
          <div className="related-grid">
            {relatedServices.map(([title, text, href]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{title} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="elearning-languages">
        <div className="shell language-layout">
          <div>
            <h2>Consistent Learning Experiences in 100+ Languages</h2>
            <p className="section-intro">
              Stepes supports major global languages, regional variants, right-to-left languages, CJK languages, complex scripts, and coordinated multilingual course launches.
            </p>
            <div className="language-notes">
              <h3>Language-Specific Engineering</h3>
              <p>Our teams account for text expansion, font support, character encoding, date and number formats, voice accent, pronunciation, language codes, course-package naming, and responsive layout requirements.</p>
            </div>
            <a className="editorial-link" href="https://www.stepes.com/translation-languages/">View Translation Languages <ArrowIcon /></a>
          </div>
          <ul className="language-list">
            {languages.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section dense" id="project-planning">
        <div className="shell">
          <div className="quote-panel">
            <div className="split-2 top">
              <div>
                <h2>What to Send Us for an Accurate Quote</h2>
                <p>
                  The right source materials help Stepes evaluate the translatable content, multimedia scope, engineering requirements, LMS testing, timeline, and final deliverables. Native authoring files usually provide the most efficient and reliable workflow.
                </p>
                <p>
                  When native files are unavailable, we can review published packages, exported text, scripts, media, and other available resources to determine what can be translated and rebuilt.
                </p>
              </div>
              <ul className="quote-list">
                {quoteInputs.map((item) => <li key={item}><CheckIcon />{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="elearning-faqs">
        <div className="shell">
          <div className="section-head">
            <h2>eLearning Translation Services FAQs</h2>
            <p className="section-intro">
              Explore common questions about authoring files, SCORM, multimedia, voiceover, course engineering, quality assurance, timelines, pricing, and ongoing multilingual course maintenance.
            </p>
          </div>
          <div className="faq-panel">
            {faqGroups.map((group, groupIndex) => (
              <div className="faq-group" key={group.title}>
                <p className="faq-group-label">{group.title}</p>
                {group.items.map(([question, answer], itemIndex) => (
                  <details key={question} open={groupIndex === 0 && itemIndex === 0}>
                    <summary>{question}<span className="faq-plus" aria-hidden="true" /></summary>
                    <div className="faq-answer"><p>{answer}</p></div>
                  </details>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell cta-panel">
          <div className="cta-content">
            <h2>Take Your eLearning Programs Global</h2>
            <p>
              Share your source files, target languages, multimedia requirements, LMS environment, and launch schedule. Our eLearning localization team will review the course structure, recommend the right workflow, and provide a clear quotation and delivery plan.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
            </div>
          </div>
          <TeamPhotoPlaceholder />
        </div>
      </section>
    </main>
  );
}
