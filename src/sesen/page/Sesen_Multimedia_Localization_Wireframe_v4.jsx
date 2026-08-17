import React, { useState } from "react";

const SERVICE_LINKS = {
  video: "https://www.sesen.com/video-translation-services/",
  voiceover: "https://www.sesen.com/voiceover-services/",
  subtitling: "https://www.sesen.com/subtitling-services/",
  elearning: "https://www.sesen.com/elearning-training-translation-services/",
  clinical: "https://www.sesen.com/clinical-trial-translation-services/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  healthcare: "https://www.sesen.com/healthcare-hospital-translation-services/",
  marketing: "https://www.sesen.com/life-sciences-marketing/",
  softwareApp: "https://www.sesen.com/software-app-localization-services/",
  software: "https://www.sesen.com/clinical-medical-software-localization-services/",
  ehealth: "https://www.sesen.com/ehealth-mhealth-localization-services/",
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
};

const mediaLayers = [
  {
    icon: "voice",
    title: "Spoken Content",
    text: "Narration, dialogue, interviews, demonstrations, presentations, and instructional audio.",
  },
  {
    icon: "subtitles",
    title: "Subtitles & Captions",
    text: "Timed text localized for readability, comprehension, synchronization, and delivery requirements.",
  },
  {
    icon: "graphics",
    title: "On-Screen Text & Graphics",
    text: "Titles, callouts, labels, diagrams, animations, and embedded text adapted for each language.",
  },
  {
    icon: "wave",
    title: "Voice & Audio",
    text: "Human, AI-enabled, or hybrid multilingual voice production matched to the purpose of the content.",
  },
  {
    icon: "learning",
    title: "eLearning & Interactive Content",
    text: "Navigation, course text, narration, quizzes, assessments, interactions, and supporting assets.",
  },
  {
    icon: "engineering",
    title: "Multimedia Engineering",
    text: "Reintegration, timing, layout adjustment, audio sync, media rebuilding, and deployment-ready delivery.",
  },
];

const serviceGroups = [
  {
    icon: "video",
    title: "Video Localization",
    lead: "Localize medical, scientific, clinical, training, product, and patient-facing video for global audiences.",
    bullets: [
      "Source transcription and script preparation",
      "Medical and scientific translation",
      "Subtitle, caption, and on-screen text localization",
      "Multilingual voiceover, dubbing, and synchronization",
      "Video editing, production, and audiovisual QA",
    ],
    link: SERVICE_LINKS.video,
    label: "Explore Video Translation Services",
  },
  {
    icon: "voice",
    title: "Voiceover & Audio Localization",
    lead: "Produce multilingual narration with the right balance of human performance, scalable technology, and professional review.",
    bullets: [
      "Professional multilingual voiceover",
      "Human, AI-enabled, and hybrid voice options",
      "Voice casting and pronunciation guidance",
      "Recording, post-production, and timing",
      "Audio synchronization and quality review",
    ],
    link: SERVICE_LINKS.voiceover,
    label: "Explore Voiceover Services",
  },
  {
    icon: "subtitles",
    title: "Subtitling & Caption Localization",
    lead: "Create multilingual timed text that protects technical meaning while remaining readable and synchronized on screen.",
    bullets: [
      "Subtitle translation and caption localization for multilingual and accessibility-oriented delivery",
      "Transcription, timecoding, and spotting",
      "Reading-speed and line-break optimization",
      "Speaker identification and in-context review",
      "SRT, VTT, STL, XML, and other timed-text formats",
    ],
    link: SERVICE_LINKS.subtitling,
    label: "Explore Subtitling Services",
  },
  {
    icon: "learning",
    title: "eLearning & Training Localization",
    lead: "Localize the complete learning experience for clinical, quality, device, workforce, and professional education programs.",
    bullets: [
      "Course text, narration, subtitles, and graphics",
      "Navigation, quizzes, assessments, and interactions",
      "Articulate Storyline and Adobe Captivate workflows",
      "SCORM, xAPI, AICC, and HTML5-based delivery",
      "Course rebuilding, functional QA, and LMS-ready files",
    ],
    link: SERVICE_LINKS.elearning,
    label: "Explore eLearning Translation Services",
  },
];

const useCases = [
  {
    icon: "clinical",
    title: "Clinical Trials & Patient Engagement",
    text: "Investigator and site training, study procedure videos, patient education, recruitment and retention content, site onboarding, and digital trial communications.",
    link: SERVICE_LINKS.clinical,
    label: "Clinical Trial Translation Services",
  },
  {
    icon: "device",
    title: "Medical Device Training & Education",
    text: "Product demonstrations, operation and setup instruction, HCP training, service and maintenance media, distributor education, and multimedia supporting IFUs.",
    link: SERVICE_LINKS.medicalDevice,
    label: "Medical Device Translation Services",
  },
  {
    icon: "science",
    title: "Medical Affairs & Scientific Communication",
    text: "Scientific presentations, HCP education, disease-state content, product science, animations, recorded presentations, congress video, and medical affairs training.",
    link: SERVICE_LINKS.medicalScientific,
    label: "Medical & Scientific Translation Services",
  },
  {
    icon: "shield",
    title: "Quality, Compliance & Workforce Training",
    text: "SOP and GxP training, quality-system programs, safety instruction, employee onboarding, information security, ethics, conduct, and global workforce education.",
  },
  {
    icon: "patient",
    title: "Patient & Healthcare Communication",
    text: "Patient education videos, care instructions, procedure explanations, health literacy content, hospital training, public-health communication, and healthcare workforce media.",
    link: SERVICE_LINKS.healthcare,
    label: "Healthcare & Hospital Translation Services",
  },
  {
    icon: "launch",
    title: "Commercial & Product Education",
    text: "Product education, launch content, sales training, demonstrations, customer education, commercial training, and market-facing audiovisual communication.",
    link: SERVICE_LINKS.marketing,
    label: "Life Sciences Marketing Translation",
  },
];

const workflow = [
  {
    title: "Media Analysis & Localization Planning",
    text: "Review source content, target languages, platforms, production files, terminology resources, intended audiences, and final deliverables before multilingual production begins.",
    bullets: ["Map every translatable media layer", "Confirm voice, subtitle, and technical requirements", "Establish references and terminology resources"],
  },
  {
    title: "Transcription, Extraction & Timecoding",
    text: "Prepare localization-ready source content when scripts or structured text are not available.",
    bullets: ["Transcribe audio and extract scripts", "Capture subtitle timing and on-screen text", "Inventory graphics and interactive elements"],
  },
  {
    title: "Translation & Terminology Control",
    text: "Professional linguists translate with the final media context in mind, using approved terminology, translation memory, client references, and style guidance.",
    bullets: ["Apply client-approved glossaries and references", "Maintain consistency across related assets", "Review language in audiovisual context"],
  },
  {
    title: "Voice, Subtitle & Media Production",
    text: "Create the required multilingual media assets and adapt production to the realities of each target language.",
    bullets: ["Record human or approved AI-enabled voice", "Build subtitles and captions", "Localize graphics, animation, and on-screen text"],
  },
  {
    title: "Multimedia Engineering & Integration",
    text: "Turn translated components into usable localized media by rebuilding, reintegrating, and synchronizing content within the source environment.",
    bullets: ["Adjust layouts and timing", "Integrate audio and localized graphics", "Reassemble courses and multilingual media packages"],
  },
  {
    title: "Linguistic, Audiovisual & Functional QA",
    text: "Review both language and the finished user experience before release.",
    bullets: ["Check terminology, timing, and pronunciation", "Review text expansion, layout, and readability", "Test playback, interactions, and final file integrity"],
  },
  {
    title: "Final Delivery & Ongoing Version Support",
    text: "Deliver production-ready multilingual assets and preserve approved language resources for subsequent updates, new versions, and additional markets.",
    bullets: ["Organize language deliverables", "Support revisions and new releases", "Reuse approved terminology and translation memory"],
  },
];

const aiCapabilities = [
  ["transcription", "AI-Assisted Transcription", "Speech technologies can accelerate source preparation, with professional review applied according to content complexity and requirements."],
  ["translate", "Translation Acceleration", "Translation memory, terminology resources, AI-enabled translation, and professional editing can support high-volume or frequently updated content."],
  ["terms", "Terminology Intelligence", "AI-assisted extraction and comparison can surface recurring medical, scientific, product, and clinical terms across media assets."],
  ["check", "Automated QA Support", "Technology can identify potential issues involving terminology, numbers, omissions, formatting, consistency, and other repeatable checks."],
  ["voice", "AI-Enabled Voice Production", "For appropriate content, AI voice technology can support faster multilingual narration and make recurring updates more practical."],
];

const voiceModes = [
  {
    title: "Human Voice",
    text: "For content where natural performance, nuance, authenticity, audience sensitivity, or highly visible communication is especially important.",
  },
  {
    title: "AI Voice",
    text: "A scalable option for suitable content where speed, volume, repeatability, or frequent revision is a priority.",
  },
  {
    title: "Hybrid Workflows",
    text: "Technology-enabled voice production combined with professional linguistic and audiovisual review for programs that need both scale and quality control.",
  },
];

const formats = [
  {
    icon: "video",
    title: "Video",
    items: ["MP4", "MOV", "Training video assets", "Product demonstrations", "Recorded presentations", "Embedded video content"],
  },
  {
    icon: "wave",
    title: "Audio",
    items: ["WAV", "MP3", "Voice tracks", "Narration files", "Synchronized audio", "Standalone audio content"],
  },
  {
    icon: "subtitles",
    title: "Subtitles & Timed Text",
    items: ["SRT", "VTT", "STL", "XML-based formats", "Platform-specific timed text", "Custom delivery specifications"],
  },
  {
    icon: "learning",
    title: "eLearning",
    items: ["Articulate Storyline", "Adobe Captivate", "SCORM", "xAPI", "AICC", "HTML5-based learning content"],
  },
];

const qaAreas = [
  ["language", "Linguistic Accuracy", "Meaning, grammar, style, medical and scientific accuracy, audience appropriateness, and completeness."],
  ["terms", "Terminology Consistency", "Approved medical, scientific, product, clinical, and organizational terminology across interconnected assets."],
  ["subtitles", "Subtitle Quality", "Timing, synchronization, readability, line length, segmentation, and presentation in context."],
  ["voice", "Voice & Audio Quality", "Pronunciation, pacing, clarity, tone, timing, synchronization, and overall audio quality."],
  ["graphics", "Visual Quality", "Text expansion, truncation, line breaks, overlap, graphics, and on-screen readability."],
  ["check", "Functional Quality", "Navigation, playback, interactions, assessments, course progression, and package integrity where applicable."],
];

const scaleItems = [
  ["global", "150+ Languages", "Support regional and global multimedia programs through one coordinated operating model."],
  ["layers", "Centralized Production", "Coordinate translation, voice, subtitles, engineering, and QA through one managed workflow."],
  ["memory", "Translation Memory Reuse", "Leverage previously approved language where appropriate to improve consistency and reduce unnecessary retranslation."],
  ["terms", "Terminology Governance", "Maintain approved language across media, documentation, products, languages, and future revisions."],
  ["versions", "Version Management", "Support changing scripts, graphics, narration, training modules, and additional language releases."],
  ["check", "Repeatable QA", "Apply consistent linguistic and multimedia quality criteria across languages and production cycles."],
];

const differentiators = [
  ["science", "Life Sciences Specialization", "Professional linguists and reviewers with experience across medical, scientific, clinical, device, regulatory, and healthcare communication."],
  ["engineering", "End-to-End Multimedia Production", "Translation plus subtitles, voice, engineering, synchronization, reintegration, and QA through one coordinated partner."],
  ["terms", "Terminology Governance", "Consistent language across scripts, subtitles, narration, graphics, training materials, languages, and future revisions."],
  ["spark", "Flexible Human + AI Workflows", "Production models matched to content type, audience, risk, scale, timing, and quality requirements."],
  ["global", "Enterprise Program Support", "Centralized project management, standardized quality, language scaling, version support, and ongoing multimedia updates."],
];

const faqs = [
  {
    q: "What is multimedia localization?",
    a: "Multimedia localization adapts video, audio, eLearning, animations, subtitles, on-screen graphics, and interactive media for audiences in different languages and markets. Unlike text translation alone, it can include transcription, translation, voiceover, subtitling, timing, graphic adaptation, multimedia engineering, reintegration, and functional QA so the finished media communicates correctly and works naturally in the target language.",
  },
  {
    q: "What types of life sciences multimedia does Sesen localize?",
    a: "Sesen supports clinical, medical, scientific, device, healthcare, training, and commercial multimedia including clinical trial training, investigator and site education, patient education videos, medical device demonstrations, HCP training, scientific presentations, SOP and compliance training, pharmaceutical training, product education, eLearning courses, voiceover content, subtitled video, interactive modules, and on-screen graphics.",
  },
  {
    q: "Can Sesen manage translation, voiceover, subtitles, and video production within the same project?",
    a: "Yes. Sesen can coordinate transcription, translation, subtitle production, multilingual voiceover, on-screen text, graphics, multimedia engineering, synchronization, and QA within one localization workflow. This helps keep the script, audio, subtitles, graphics, and other media layers aligned.",
  },
  {
    q: "Does Sesen provide both human and AI voiceover?",
    a: "Yes. Sesen supports human voiceover, AI-enabled voice production, and hybrid workflows. Professional human narration is often appropriate for highly visible, nuanced, patient-facing, clinical, or brand-sensitive communication, while AI voice can be effective for suitable training and informational content where scalability, speed, or frequent updates are important. Hybrid models combine technology-enabled production with professional linguistic and audiovisual review.",
  },
  {
    q: "Can Sesen localize Articulate Storyline, Adobe Captivate, SCORM, and other eLearning content?",
    a: "Yes. Sesen supports multilingual eLearning workflows involving Articulate Storyline, Adobe Captivate, SCORM, xAPI, AICC, HTML5, and related digital learning environments. Localization can include course text, narration, subtitles, graphics, navigation, quizzes, assessments, interactions, reintegration, and functional QA.",
  },
  {
    q: "How does Sesen maintain terminology consistency across multimedia content?",
    a: "Sesen can use client-approved glossaries, translation memories, style guides, previously approved translations, project terminology, and other reference materials to maintain consistency across scripts, subtitles, voiceover, on-screen graphics, eLearning modules, assessments, and supporting documents. AI-assisted terminology extraction and QA can provide additional checks, with professional linguists responsible for contextual decisions and final review.",
  },
  {
    q: "How is localized multimedia quality checked?",
    a: "Multimedia QA can include linguistic, visual, audiovisual, and functional review. Depending on project scope, checks may cover translation accuracy, terminology, completeness, subtitle timing, readability, voice pronunciation, audio synchronization, on-screen text, layout, text expansion, navigation, interactive elements, playback, and final file integrity.",
  },
  {
    q: "Can Sesen help with recurring updates to multilingual video and training content?",
    a: "Yes. Sesen supports recurring multimedia programs as well as one-time projects. Translation memories, terminology resources, existing scripts, approved voice assets, and prior localized content can be reused where appropriate to support future revisions, new releases, and additional languages.",
  },
  {
    q: "How many languages does Sesen support?",
    a: "Sesen provides multilingual translation and localization support across 150+ languages, enabling life sciences organizations to manage regional and global multimedia programs through a centralized workflow.",
  },
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
    "aria-hidden": "true",
  };

  const icons = {
    video: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M9 9.5 15 12l-6 2.5z" /></>,
    voice: <><path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" /><path d="M5.5 11.5v.5a6.5 6.5 0 0 0 13 0v-.5" /><path d="M12 18.5V22" /><path d="M9 22h6" /></>,
    subtitles: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M6.5 13.5h4" /><path d="M13.5 13.5h4" /><path d="M6.5 16.5h7" /><path d="M15.5 16.5h2" /></>,
    wave: <><path d="M3 12h2l1.4-4 2.2 8 2-12 2.8 16 2.2-10 1.4 2H21" /></>,
    graphics: <><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="9" cy="9" r="1.5" /><path d="m6 17 4-4 2.5 2.5 2-2L18 17" /></>,
    learning: <><path d="M4 5h11a3 3 0 0 1 3 3v11H7a3 3 0 0 1-3-3Z" /><path d="M7 8h7" /><path d="M7 11h6" /><path d="M18 9h2v10h-2" /></>,
    engineering: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.55V21h-4v-.09A1.7 1.7 0 0 0 8.96 19.36a1.7 1.7 0 0 0-1.87.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1.04H3v-4h.05A1.7 1.7 0 0 0 4.6 8.92a1.7 1.7 0 0 0-.34-1.87L4.2 7l2.83-2.83.06.06a1.7 1.7 0 0 0 1.87.34A1.7 1.7 0 0 0 10 3.02V3h4v.02a1.7 1.7 0 0 0 1.04 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06L19.8 7l-.06.05a1.7 1.7 0 0 0-.34 1.87A1.7 1.7 0 0 0 20.95 10H21v4h-.05A1.7 1.7 0 0 0 19.4 15Z" /></>,
    clinical: <><path d="M9 4h6" /><path d="M10 2h4v4h-4z" /><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 12h6" /><path d="M12 9v6" /></>,
    device: <><rect x="5" y="3" width="14" height="18" rx="2" /><rect x="8" y="6" width="8" height="6" rx="1" /><path d="M9 16h6" /><path d="M12 14v4" /></>,
    science: <><path d="M9 3h6" /><path d="M10 3v5l-4.8 8.2A3 3 0 0 0 7.8 21h8.4a3 3 0 0 0 2.6-4.8L14 8V3" /><path d="M8 15h8" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    patient: <><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /><path d="M18 4v4" /><path d="M16 6h4" /></>,
    launch: <><path d="M14 4c3 1 5 3 6 6l-5 5-6-6Z" /><path d="m9 9-4 2-2 4 6-1" /><path d="m15 15-1 6 4-2 2-4" /><circle cx="15" cy="9" r="1" /></>,
    transcription: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8" /><path d="M8 12h5" /><path d="M8 16h7" /></>,
    translate: <><path d="M4 5h8" /><path d="M8 3v2" /><path d="M6 9c1.5-1 3-2.7 4-4" /><path d="M5 6c.5 2 2 4 4 5" /><path d="m14 19 3-8 3 8" /><path d="M15 16h4" /></>,
    terms: <><path d="M4 6h10" /><path d="M4 10h8" /><path d="M4 14h6" /><circle cx="17" cy="15" r="3" /><path d="m19.2 17.2 2 2" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
    language: <><path d="M4 5h8" /><path d="M8 3v2" /><path d="M6 9c1.5-1 3-2.7 4-4" /><path d="M5 6c.5 2 2 4 4 5" /><path d="M14 19h6" /></>,
    global: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9Z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    memory: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
    versions: <><path d="M8 7h10a3 3 0 0 1 3 3v8" /><path d="m18 15 3 3 3-3" /><path d="M16 17H6a3 3 0 0 1-3-3V6" /><path d="M6 9 3 6 0 9" /></>,
    spark: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2Z" /><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7Z" /><path d="m5 14 .6 1.9 1.9.6-1.9.6L5 19l-.6-1.9-1.9-.6 1.9-.6Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
  };

  return <svg {...common}>{icons[name] || icons.spark}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`smm-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, align = "center", mobileAlign = "center", id }) {
  return (
    <div className={`smm-section-head smm-${align} smm-mobile-${mobileAlign}`}>
      {eyebrow ? <div className="smm-eyebrow">{eyebrow}</div> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="smm-hero-art" aria-label="Multimedia localization workflow illustration">
      <div className="smm-art-orbit smm-art-orbit-one" />
      <div className="smm-art-orbit smm-art-orbit-two" />
      <div className="smm-art-video">
        <div className="smm-art-video-top">
          <span>MEDICAL TRAINING</span>
          <span className="smm-art-live-dot" />
        </div>
        <div className="smm-art-stage">
          <div className="smm-art-device">
            <div className="smm-art-device-screen">
              <span className="smm-art-cross" />
              <span className="smm-art-pulse" />
            </div>
          </div>
          <div className="smm-art-copylines">
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="smm-art-subtitle">Localized subtitle synchronized with narration</div>
        <div className="smm-art-timeline">
          <span className="smm-art-play">▶</span>
          <div className="smm-art-track"><i /></div>
          <span>02:18</span>
        </div>
      </div>

      <div className="smm-art-chip smm-art-chip-voice">
        <span className="smm-art-icon-circle"><Icon name="voice" size={18} /></span>
        <div><b>VOICE</b><small>Multilingual narration</small></div>
      </div>
      <div className="smm-art-chip smm-art-chip-subtitles">
        <span className="smm-art-icon-circle"><Icon name="subtitles" size={18} /></span>
        <div><b>SUBTITLES</b><small>Timed text</small></div>
      </div>
      <div className="smm-art-course">
        <div className="smm-art-course-head"><Icon name="learning" size={18} /><b>TRAINING MODULE</b></div>
        <div className="smm-art-course-body">
          <span className="smm-art-course-step active" />
          <span className="smm-art-course-step" />
          <span className="smm-art-course-step" />
        </div>
      </div>
      <div className="smm-art-wave">
        {[14, 25, 11, 31, 20, 36, 16, 28, 12, 24, 18, 32, 14, 22, 10, 26].map((height, index) => (
          <i key={index} style={{ height }} />
        ))}
      </div>
      <div className="smm-art-language"><b>EN</b><span>→</span><b>DE</b><span>→</span><b>JA</b></div>
    </div>
  );
}

function TerminologyWorkspace() {
  const tracks = [
    {
      icon: "transcription",
      label: "SCRIPT",
      sample: "Continuous glucose monitoring can help patients understand glucose trends over time.",
      meta: "Narration copy",
    },
    {
      icon: "subtitles",
      label: "SUBTITLE",
      sample: "Continuous glucose monitoring can help patients understand glucose trends over time.",
      meta: "00:18–00:23",
    },
    {
      icon: "voice",
      label: "VOICE",
      sample: "Continuous glucose monitoring",
      meta: "Pronunciation reviewed",
    },
    {
      icon: "graphics",
      label: "ON-SCREEN GRAPHIC",
      sample: "Continuous Glucose Monitoring",
      meta: "Title treatment",
    },
    {
      icon: "learning",
      label: "TRAINING QUIZ",
      sample: "Which statement best describes continuous glucose monitoring?",
      meta: "Assessment item",
    },
  ];

  return (
    <div className="smm-term-workspace" aria-label="Multimedia production workspace showing approved terminology used consistently across scripts, subtitles, voice, graphics, and training content">
      <div className="smm-term-workspace-top">
        <div>
          <span className="smm-term-kicker">MULTIMEDIA PROJECT</span>
          <strong>Terminology in Context</strong>
        </div>
        <span className="smm-term-project-status"><Icon name="check" size={14} /> Approved source</span>
      </div>

      <div className="smm-term-source-card">
        <div className="smm-term-source-icon"><Icon name="terms" size={20} /></div>
        <div className="smm-term-source-copy">
          <span>APPROVED CONCEPT</span>
          <strong>Continuous glucose monitoring</strong>
          <small>Controlled terminology applied throughout the production package</small>
        </div>
      </div>

      <div className="smm-term-tracks" aria-label="Media layers using the approved concept">
        {tracks.map((track) => (
          <div className="smm-term-track" key={track.label}>
            <div className="smm-term-track-label">
              <span><Icon name={track.icon} size={17} /></span>
              <b>{track.label}</b>
            </div>
            <div className="smm-term-track-copy">
              <p>{track.sample}</p>
              <small>{track.meta}</small>
            </div>
            <div className="smm-term-track-state"><Icon name="check" size={14} /><span>Matched</span></div>
          </div>
        ))}
      </div>

      <div className="smm-term-workspace-foot">
        <span><Icon name="memory" size={16} /> Glossary + translation memory</span>
        <span><Icon name="check" size={16} /> Automated checks + expert review</span>
      </div>
    </div>
  );
}

function ScaleArtwork() {
  return (
    <div className="smm-scale-art" aria-label="Master content localized into global releases and future updates">
      <div className="smm-scale-source">
        <span className="smm-scale-source-icon"><Icon name="video" size={22} /></span>
        <div><small>MASTER CONTENT</small><strong>Global Training Program</strong></div>
      </div>
      <div className="smm-scale-line smm-scale-line-a" />
      <div className="smm-scale-line smm-scale-line-b" />
      <div className="smm-scale-line smm-scale-line-c" />
      <div className="smm-scale-market market-a"><b>FR</b><span>Release 01</span></div>
      <div className="smm-scale-market market-b"><b>DE</b><span>Release 01</span></div>
      <div className="smm-scale-market market-c"><b>JA</b><span>Release 01</span></div>
      <div className="smm-scale-update">
        <Icon name="versions" size={20} />
        <div><small>FUTURE UPDATE</small><strong>Reuse approved language assets</strong></div>
      </div>
    </div>
  );
}

export default function SesenMultimediaLocalizationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-multimedia-page">
      <style>{`
        .sesen-multimedia-page {
          --smm-blue: #4B6FD8;
          --smm-blue-dark: #3659BB;
          --smm-deep-blue: #253F8F;
          --smm-mid-blue: #6F8BE1;
          --smm-soft-blue: #EAF0FF;
          --smm-pale-blue: #F5F7FF;
          --smm-navy: #17264D;
          --smm-ink: #111827;
          --smm-body: #46546D;
          --smm-muted: #68758B;
          --smm-border: #DDE4F2;
          --smm-divider: #E9EEF8;
          --smm-surface: #F7F9FD;
          --smm-white: #FFFFFF;
          --smm-light-blue: #C8D6FF;
          --smm-shadow: 0 18px 46px rgba(23, 38, 77, 0.08);
          color: var(--smm-body);
          background: var(--smm-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }
        .sesen-multimedia-page,
        .sesen-multimedia-page * { box-sizing: border-box; }
        .sesen-multimedia-page a { color: inherit; }
        .sesen-multimedia-page .smm-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .sesen-multimedia-page .smm-section { padding: 96px 0; position: relative; }
        .sesen-multimedia-page .smm-section.smm-compact { padding: 82px 0; }
        .sesen-multimedia-page .smm-surface { background: var(--smm-surface); }
        .sesen-multimedia-page .smm-workflow-section { background: var(--smm-white); border-top: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-pale { background: var(--smm-pale-blue); }
        .sesen-multimedia-page .smm-eyebrow {
          color: var(--smm-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .15em;
          line-height: 1.35;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .sesen-multimedia-page h1,
        .sesen-multimedia-page h2,
        .sesen-multimedia-page h3,
        .sesen-multimedia-page h4 {
          color: var(--smm-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-style: normal;
          font-stretch: normal;
          font-weight: 500;
          margin: 0;
        }
        .sesen-multimedia-page h1 {
          font-size: 48px;
          letter-spacing: -0.5px;
          line-height: 1.3;
        }
        .sesen-multimedia-page h2 {
          font-size: 36px;
          letter-spacing: normal;
          line-height: 1.3;
        }
        .sesen-multimedia-page h3 { font-size: 24px; line-height: 1.3; }
        .sesen-multimedia-page h4 { font-size: 20px; line-height: 1.3; }
        .sesen-multimedia-page p { margin: 0; }
        .sesen-multimedia-page .smm-section-head {
          margin-bottom: 50px;
          max-width: 820px;
        }
        .sesen-multimedia-page .smm-section-head.smm-center { margin-left: auto; margin-right: auto; text-align: center; }
        .sesen-multimedia-page .smm-section-head.smm-left { text-align: left; }
        .sesen-multimedia-page .smm-section-head p {
          color: var(--smm-body);
          font-size: 18px;
          line-height: 1.7;
          margin-top: 18px;
        }
        .sesen-multimedia-page .smm-btn {
          align-items: center;
          border: 1px solid transparent;
          border-radius: 999px;
          cursor: pointer;
          display: inline-flex;
          font-family: Inter, Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          gap: 9px;
          justify-content: center;
          letter-spacing: .045em;
          line-height: 1;
          min-height: 50px;
          padding: 0 25px;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .sesen-multimedia-page .smm-btn-primary { background: var(--smm-blue); color: white; }
        .sesen-multimedia-page .smm-btn-primary:hover { background: var(--smm-blue-dark); transform: translateY(-1px); }
        .sesen-multimedia-page .smm-btn-secondary { background: white; border-color: #C8D4ED; color: var(--smm-ink); }
        .sesen-multimedia-page .smm-btn-secondary:hover { background: var(--smm-pale-blue); border-color: #AEBFE7; transform: translateY(-1px); }
        .sesen-multimedia-page .smm-btn:focus-visible,
        .sesen-multimedia-page .smm-link:focus-visible,
        .sesen-multimedia-page .smm-faq-button:focus-visible {
          outline: 3px solid rgba(75, 111, 216, .34);
          outline-offset: 3px;
        }
        .sesen-multimedia-page .smm-link {
          align-items: center;
          color: var(--smm-blue-dark);
          display: inline-flex;
          font-size: 15px;
          font-weight: 700;
          gap: 8px;
          line-height: 1.4;
          margin-top: 22px;
          text-decoration: none;
        }
        .sesen-multimedia-page .smm-link svg { transition: transform .2s ease; }
        .sesen-multimedia-page .smm-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .sesen-multimedia-page .smm-link:hover svg { transform: translateX(3px); }
        .sesen-multimedia-page .smm-icon-box {
          align-items: center;
          background: var(--smm-soft-blue);
          border-radius: 12px;
          color: var(--smm-blue-dark);
          display: inline-flex;
          flex: 0 0 auto;
          height: 44px;
          justify-content: center;
          width: 44px;
        }

        /* HERO */
        .sesen-multimedia-page .smm-hero {
          background:
            radial-gradient(circle at 85% 20%, rgba(75, 111, 216, .11), transparent 31%),
            linear-gradient(180deg, #FBFCFF 0%, #FFFFFF 100%);
          border-bottom: 1px solid var(--smm-divider);
          padding: 92px 0 86px;
        }
        .sesen-multimedia-page .smm-hero-grid {
          align-items: center;
          display: grid;
          gap: 66px;
          grid-template-columns: minmax(0, 1.06fr) minmax(470px, .94fr);
        }
        .sesen-multimedia-page .smm-hero-copy { max-width: 700px; }
        .sesen-multimedia-page .smm-hero-lead {
          color: #293954;
          font-size: 20px;
          line-height: 1.65;
          margin-top: 24px;
          max-width: 680px;
        }
        .sesen-multimedia-page .smm-hero-support {
          color: var(--smm-body);
          font-size: 17px;
          line-height: 1.72;
          margin-top: 17px;
          max-width: 670px;
        }
        .sesen-multimedia-page .smm-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .sesen-multimedia-page .smm-hero-proof {
          border-top: 1px solid var(--smm-divider);
          display: grid;
          gap: 0;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 42px;
          padding-top: 24px;
        }
        .sesen-multimedia-page .smm-hero-proof-item { padding-right: 18px; }
        .sesen-multimedia-page .smm-hero-proof-item + .smm-hero-proof-item { border-left: 1px solid var(--smm-divider); padding-left: 18px; }
        .sesen-multimedia-page .smm-hero-proof-item strong { color: var(--smm-navy); display: block; font-size: 14px; line-height: 1.35; }
        .sesen-multimedia-page .smm-hero-proof-item span { color: var(--smm-muted); display: block; font-size: 13px; line-height: 1.45; margin-top: 5px; }

        .sesen-multimedia-page .smm-hero-art {
          height: 510px;
          margin-left: auto;
          max-width: 560px;
          position: relative;
          width: 100%;
        }
        .sesen-multimedia-page .smm-art-orbit {
          border: 1px solid rgba(75, 111, 216, .16);
          border-radius: 50%;
          position: absolute;
        }
        .sesen-multimedia-page .smm-art-orbit-one { height: 420px; left: 74px; top: 32px; width: 420px; }
        .sesen-multimedia-page .smm-art-orbit-two { height: 314px; left: 128px; top: 86px; width: 314px; }
        .sesen-multimedia-page .smm-art-video {
          background: white;
          border: 1px solid #CFDAF2;
          border-radius: 22px;
          box-shadow: var(--smm-shadow);
          left: 70px;
          overflow: hidden;
          position: absolute;
          top: 98px;
          width: 386px;
          z-index: 2;
        }
        .sesen-multimedia-page .smm-art-video-top {
          align-items: center;
          border-bottom: 1px solid var(--smm-divider);
          color: var(--smm-muted);
          display: flex;
          font-size: 10px;
          font-weight: 700;
          justify-content: space-between;
          letter-spacing: .12em;
          padding: 12px 15px;
        }
        .sesen-multimedia-page .smm-art-live-dot { background: var(--smm-blue); border-radius: 50%; height: 7px; width: 7px; }
        .sesen-multimedia-page .smm-art-stage {
          align-items: center;
          background: linear-gradient(135deg, #EEF3FF 0%, #F9FBFF 100%);
          display: grid;
          gap: 22px;
          grid-template-columns: 128px 1fr;
          min-height: 170px;
          padding: 24px;
        }
        .sesen-multimedia-page .smm-art-device {
          background: #FFFFFF;
          border: 1px solid #C8D6F1;
          border-radius: 14px;
          box-shadow: 0 8px 22px rgba(23, 38, 77, .08);
          padding: 10px;
        }
        .sesen-multimedia-page .smm-art-device-screen {
          background: #F7F9FD;
          border: 1px solid #DDE4F2;
          border-radius: 9px;
          height: 94px;
          position: relative;
        }
        .sesen-multimedia-page .smm-art-cross::before,
        .sesen-multimedia-page .smm-art-cross::after {
          background: var(--smm-blue);
          border-radius: 2px;
          content: "";
          left: 17px;
          position: absolute;
          top: 17px;
        }
        .sesen-multimedia-page .smm-art-cross::before { height: 22px; width: 6px; margin-left: 8px; }
        .sesen-multimedia-page .smm-art-cross::after { height: 6px; margin-top: 8px; width: 22px; }
        .sesen-multimedia-page .smm-art-pulse {
          border-bottom: 2px solid var(--smm-blue-dark);
          bottom: 18px;
          left: 18px;
          position: absolute;
          right: 18px;
        }
        .sesen-multimedia-page .smm-art-pulse::before {
          border-color: var(--smm-blue-dark);
          border-style: solid;
          border-width: 0 2px 2px 0;
          content: "";
          height: 16px;
          left: 28px;
          position: absolute;
          top: -8px;
          transform: rotate(45deg) skew(-9deg, -9deg);
          width: 16px;
        }
        .sesen-multimedia-page .smm-art-copylines i { background: #C9D6EE; border-radius: 999px; display: block; height: 7px; margin: 12px 0; }
        .sesen-multimedia-page .smm-art-copylines i:nth-child(1) { background: #8EA5DF; width: 78%; }
        .sesen-multimedia-page .smm-art-copylines i:nth-child(2) { width: 92%; }
        .sesen-multimedia-page .smm-art-copylines i:nth-child(3) { width: 63%; }
        .sesen-multimedia-page .smm-art-subtitle {
          background: #17264D;
          color: white;
          font-size: 12px;
          line-height: 1.45;
          padding: 11px 16px;
          text-align: center;
        }
        .sesen-multimedia-page .smm-art-timeline { align-items: center; display: flex; gap: 10px; padding: 11px 14px; }
        .sesen-multimedia-page .smm-art-play { color: var(--smm-blue); font-size: 10px; }
        .sesen-multimedia-page .smm-art-timeline > span:last-child { color: var(--smm-muted); font-size: 9px; }
        .sesen-multimedia-page .smm-art-track { background: #E5EBF7; border-radius: 999px; flex: 1; height: 5px; overflow: hidden; }
        .sesen-multimedia-page .smm-art-track i { background: var(--smm-blue); display: block; height: 100%; width: 54%; }
        .sesen-multimedia-page .smm-art-chip {
          align-items: center;
          background: white;
          border: 1px solid #D5DFF2;
          border-radius: 15px;
          box-shadow: 0 10px 26px rgba(23, 38, 77, .08);
          display: flex;
          gap: 10px;
          padding: 11px 13px;
          position: absolute;
          z-index: 4;
        }
        .sesen-multimedia-page .smm-art-chip-voice { left: 0; top: 46px; }
        .sesen-multimedia-page .smm-art-chip-subtitles { right: 4px; top: 188px; }
        .sesen-multimedia-page .smm-art-icon-circle { align-items: center; background: var(--smm-soft-blue); border-radius: 50%; color: var(--smm-blue-dark); display: flex; height: 34px; justify-content: center; width: 34px; }
        .sesen-multimedia-page .smm-art-chip b { color: var(--smm-navy); display: block; font-size: 10px; letter-spacing: .08em; line-height: 1.2; }
        .sesen-multimedia-page .smm-art-chip small { color: var(--smm-muted); display: block; font-size: 9px; line-height: 1.3; margin-top: 3px; }
        .sesen-multimedia-page .smm-art-course {
          background: white;
          border: 1px solid #D5DFF2;
          border-radius: 15px;
          bottom: 20px;
          box-shadow: 0 12px 26px rgba(23, 38, 77, .08);
          padding: 13px;
          position: absolute;
          right: 38px;
          width: 190px;
          z-index: 4;
        }
        .sesen-multimedia-page .smm-art-course-head { align-items: center; color: var(--smm-blue-dark); display: flex; gap: 7px; }
        .sesen-multimedia-page .smm-art-course-head b { color: var(--smm-navy); font-size: 9px; letter-spacing: .08em; }
        .sesen-multimedia-page .smm-art-course-body { display: flex; gap: 6px; margin-top: 11px; }
        .sesen-multimedia-page .smm-art-course-step { background: #E6ECF7; border-radius: 999px; display: block; height: 6px; flex: 1; }
        .sesen-multimedia-page .smm-art-course-step.active { background: var(--smm-blue); }
        .sesen-multimedia-page .smm-art-wave {
          align-items: center;
          background: white;
          border: 1px solid #D5DFF2;
          border-radius: 14px;
          bottom: 50px;
          display: flex;
          gap: 4px;
          height: 58px;
          left: 10px;
          padding: 0 13px;
          position: absolute;
          z-index: 3;
        }
        .sesen-multimedia-page .smm-art-wave i { background: #7893DD; border-radius: 999px; display: block; width: 3px; }
        .sesen-multimedia-page .smm-art-language {
          align-items: center;
          background: var(--smm-blue);
          border-radius: 999px;
          color: white;
          display: flex;
          font-size: 10px;
          gap: 7px;
          left: 184px;
          letter-spacing: .04em;
          padding: 8px 13px;
          position: absolute;
          top: 19px;
          z-index: 4;
        }
        .sesen-multimedia-page .smm-art-language span { opacity: .65; }

        /* MEDIA LAYERS */
        .sesen-multimedia-page .smm-layers-wrap {
          background: white;
          border: 1px solid var(--smm-border);
          border-radius: 28px;
          box-shadow: 0 18px 44px rgba(23, 38, 77, .05);
          overflow: hidden;
        }
        .sesen-multimedia-page .smm-layers-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .sesen-multimedia-page .smm-layer-item { min-height: 192px; padding: 32px; position: relative; }
        .sesen-multimedia-page .smm-layer-item:not(:nth-child(3n)) { border-right: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-layer-item:nth-child(-n+3) { border-bottom: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-layer-top { align-items: center; display: flex; gap: 14px; }
        .sesen-multimedia-page .smm-layer-item h3 { font-size: 21px; }
        .sesen-multimedia-page .smm-layer-item p { font-size: 16px; line-height: 1.65; margin-top: 15px; }
        .sesen-multimedia-page .smm-layer-result {
          align-items: center;
          background: var(--smm-navy);
          color: white;
          display: flex;
          gap: 18px;
          justify-content: center;
          padding: 21px 30px;
          text-align: center;
        }
        .sesen-multimedia-page .smm-layer-result strong { font-size: 17px; }
        .sesen-multimedia-page .smm-layer-result span { color: #DCE5FF; font-size: 16px; }
        .sesen-multimedia-page .smm-layer-result svg { color: var(--smm-light-blue); }

        /* SERVICES */
        .sesen-multimedia-page .smm-services-panel {
          border: 1px solid var(--smm-border);
          border-radius: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }
        .sesen-multimedia-page .smm-service-item { background: white; padding: 38px 40px 36px; }
        .sesen-multimedia-page .smm-service-item:nth-child(odd) { border-right: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-service-item:nth-child(-n+2) { border-bottom: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-service-title { align-items: center; display: flex; gap: 15px; }
        .sesen-multimedia-page .smm-service-item > p { font-size: 17px; line-height: 1.68; margin-top: 18px; }
        .sesen-multimedia-page .smm-service-list { display: grid; gap: 10px; list-style: none; margin: 22px 0 0; padding: 0; }
        .sesen-multimedia-page .smm-service-list li { color: var(--smm-body); font-size: 16px; line-height: 1.5; padding-left: 18px; position: relative; }
        .sesen-multimedia-page .smm-service-list li::before { background: var(--smm-blue); border-radius: 50%; content: ""; height: 5px; left: 0; position: absolute; top: 9px; width: 5px; }
        .sesen-multimedia-page .smm-boundary-note {
          align-items: flex-start;
          background: var(--smm-pale-blue);
          border-left: 2px solid var(--smm-blue);
          display: grid;
          gap: 14px;
          grid-template-columns: auto 1fr;
          margin-top: 30px;
          padding: 20px 22px;
        }
        .sesen-multimedia-page .smm-boundary-note svg { color: var(--smm-blue-dark); margin-top: 2px; }
        .sesen-multimedia-page .smm-boundary-note p { font-size: 16px; line-height: 1.65; }
        .sesen-multimedia-page .smm-boundary-note a { color: var(--smm-blue-dark); font-weight: 700; text-decoration: none; }
        .sesen-multimedia-page .smm-boundary-note a:hover { text-decoration: underline; text-underline-offset: 3px; }

        /* USE CASES */
        .sesen-multimedia-page .smm-usecases { display: grid; grid-template-columns: repeat(3, 1fr); }
        .sesen-multimedia-page .smm-usecase { border-top: 1px solid var(--smm-border); min-height: 260px; padding: 30px 32px 24px 0; }
        .sesen-multimedia-page .smm-usecase:not(:nth-child(3n+1)) { border-left: 1px solid var(--smm-divider); padding-left: 32px; }
        .sesen-multimedia-page .smm-usecase .smm-icon-box { margin-bottom: 18px; }
        .sesen-multimedia-page .smm-usecase h3 { font-size: 21px; }
        .sesen-multimedia-page .smm-usecase p { font-size: 16px; line-height: 1.66; margin-top: 13px; }
        .sesen-multimedia-page .smm-usecase .smm-link { font-size: 15px; margin-top: 17px; }

        /* WORKFLOW */
        .sesen-multimedia-page .smm-workflow { margin-top: 14px; }
        .sesen-multimedia-page .smm-workflow-item {
          display: grid;
          gap: 36px;
          grid-template-columns: 220px 1fr;
          min-height: 190px;
          position: relative;
        }
        .sesen-multimedia-page .smm-workflow-item:not(:last-child)::after {
          background: var(--smm-border);
          bottom: 0;
          content: "";
          left: 28px;
          position: absolute;
          top: 58px;
          width: 1px;
        }
        .sesen-multimedia-page .smm-workflow-index { align-items: flex-start; display: flex; gap: 18px; position: relative; z-index: 1; }
        .sesen-multimedia-page .smm-workflow-number {
          align-items: center;
          background: var(--smm-blue);
          border: 6px solid var(--smm-white);
          border-radius: 50%;
          color: white;
          display: flex;
          flex: 0 0 auto;
          font-size: 13px;
          font-weight: 700;
          height: 56px;
          justify-content: center;
          width: 56px;
        }
        .sesen-multimedia-page .smm-workflow-index span:last-child { color: var(--smm-muted); font-size: 12px; font-weight: 700; letter-spacing: .12em; margin-top: 15px; text-transform: uppercase; }
        .sesen-multimedia-page .smm-workflow-content { border-top: 1px solid var(--smm-border); padding: 24px 0 34px; }
        .sesen-multimedia-page .smm-workflow-content h3 { font-size: 23px; }
        .sesen-multimedia-page .smm-workflow-content > p { font-size: 16px; line-height: 1.7; margin-top: 12px; max-width: 780px; }
        .sesen-multimedia-page .smm-workflow-bullets { display: flex; flex-wrap: wrap; gap: 8px 22px; list-style: none; margin: 18px 0 0; padding: 0; }
        .sesen-multimedia-page .smm-workflow-bullets li { color: var(--smm-muted); font-size: 16px; line-height: 1.5; padding-left: 16px; position: relative; }
        .sesen-multimedia-page .smm-workflow-bullets li::before { color: var(--smm-blue-dark); content: "✓"; font-weight: 700; left: 0; position: absolute; }

        /* TERMINOLOGY — MULTIMEDIA PRODUCTION WORKSPACE */
        .sesen-multimedia-page .smm-term-grid { align-items: center; display: grid; gap: 64px; grid-template-columns: .82fr 1.18fr; }
        .sesen-multimedia-page .smm-term-copy { max-width: 590px; }
        .sesen-multimedia-page .smm-term-copy > p { font-size: 18px; line-height: 1.72; margin-top: 20px; }
        .sesen-multimedia-page .smm-term-principles { border-top: 1px solid var(--smm-border); display: grid; gap: 0; margin-top: 28px; }
        .sesen-multimedia-page .smm-term-principle { align-items: flex-start; border-bottom: 1px solid var(--smm-divider); display: grid; gap: 12px; grid-template-columns: 34px 1fr; padding: 13px 0; }
        .sesen-multimedia-page .smm-term-principle > span { align-items: center; background: var(--smm-soft-blue); border-radius: 9px; color: var(--smm-blue-dark); display: flex; height: 32px; justify-content: center; margin-top: 1px; width: 32px; }
        .sesen-multimedia-page .smm-term-principle b { color: var(--smm-navy); display: block; font-size: 16px; font-weight: 600; line-height: 1.45; }
        .sesen-multimedia-page .smm-term-principle p { font-size: 16px; line-height: 1.58; margin-top: 3px; }
        .sesen-multimedia-page .smm-term-callout { color: var(--smm-blue-dark); font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 21px; font-weight: 500; line-height: 1.45; margin-top: 26px; }

        .sesen-multimedia-page .smm-term-workspace {
          background: white;
          border: 1px solid #D4DFF2;
          border-radius: 28px;
          box-shadow: 0 24px 56px rgba(23, 38, 77, .10);
          overflow: hidden;
        }
        .sesen-multimedia-page .smm-term-workspace-top {
          align-items: center;
          border-bottom: 1px solid var(--smm-divider);
          display: flex;
          justify-content: space-between;
          padding: 22px 24px;
        }
        .sesen-multimedia-page .smm-term-workspace-top > div { display: flex; flex-direction: column; gap: 4px; }
        .sesen-multimedia-page .smm-term-kicker { color: var(--smm-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .14em; line-height: 1.35; }
        .sesen-multimedia-page .smm-term-workspace-top strong { color: var(--smm-navy); font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 22px; font-weight: 500; line-height: 1.3; }
        .sesen-multimedia-page .smm-term-project-status {
          align-items: center;
          background: var(--smm-soft-blue);
          border-radius: 999px;
          color: var(--smm-blue-dark);
          display: inline-flex;
          flex: 0 0 auto;
          font-size: 12px;
          font-weight: 700;
          gap: 6px;
          padding: 8px 11px;
        }
        .sesen-multimedia-page .smm-term-source-card {
          align-items: center;
          background: var(--smm-pale-blue);
          border-bottom: 1px solid var(--smm-divider);
          display: grid;
          gap: 14px;
          grid-template-columns: 46px 1fr;
          padding: 20px 24px;
        }
        .sesen-multimedia-page .smm-term-source-icon { align-items: center; background: white; border: 1px solid #CFDCF3; border-radius: 13px; color: var(--smm-blue-dark); display: flex; height: 44px; justify-content: center; width: 44px; }
        .sesen-multimedia-page .smm-term-source-copy { min-width: 0; }
        .sesen-multimedia-page .smm-term-source-copy > span { color: var(--smm-blue-dark); display: block; font-size: 10px; font-weight: 700; letter-spacing: .12em; }
        .sesen-multimedia-page .smm-term-source-copy strong { color: var(--smm-navy); display: block; font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 23px; font-weight: 500; line-height: 1.35; margin-top: 4px; }
        .sesen-multimedia-page .smm-term-source-copy small { color: var(--smm-muted); display: block; font-size: 13px; line-height: 1.45; margin-top: 3px; }
        .sesen-multimedia-page .smm-term-track {
          align-items: center;
          border-bottom: 1px solid var(--smm-divider);
          display: grid;
          gap: 16px;
          grid-template-columns: 154px minmax(0, 1fr) auto;
          min-height: 86px;
          padding: 14px 24px;
        }
        .sesen-multimedia-page .smm-term-track:last-child { border-bottom: 0; }
        .sesen-multimedia-page .smm-term-track-label { align-items: center; display: flex; gap: 10px; min-width: 0; }
        .sesen-multimedia-page .smm-term-track-label > span { align-items: center; background: var(--smm-soft-blue); border-radius: 9px; color: var(--smm-blue-dark); display: flex; flex: 0 0 auto; height: 34px; justify-content: center; width: 34px; }
        .sesen-multimedia-page .smm-term-track-label b { color: var(--smm-navy); font-size: 11px; font-weight: 700; letter-spacing: .08em; line-height: 1.35; }
        .sesen-multimedia-page .smm-term-track-copy { min-width: 0; }
        .sesen-multimedia-page .smm-term-track-copy p { color: var(--smm-body); font-size: 16px; line-height: 1.48; margin: 0; }
        .sesen-multimedia-page .smm-term-track-copy small { color: var(--smm-muted); display: block; font-size: 12px; line-height: 1.4; margin-top: 3px; }
        .sesen-multimedia-page .smm-term-track-state { align-items: center; color: var(--smm-blue-dark); display: flex; font-size: 11px; font-weight: 700; gap: 5px; white-space: nowrap; }
        .sesen-multimedia-page .smm-term-workspace-foot {
          align-items: center;
          background: #FBFCFF;
          border-top: 1px solid var(--smm-divider);
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          padding: 16px 24px;
        }
        .sesen-multimedia-page .smm-term-workspace-foot span { align-items: center; color: var(--smm-muted); display: inline-flex; font-size: 12px; font-weight: 600; gap: 7px; line-height: 1.45; }
        .sesen-multimedia-page .smm-term-workspace-foot svg { color: var(--smm-blue-dark); }

        /* AI */
        .sesen-multimedia-page .smm-ai-grid { align-items: start; display: grid; gap: 70px; grid-template-columns: 1.1fr .9fr; }
        .sesen-multimedia-page .smm-ai-copy > p { font-size: 18px; line-height: 1.72; margin-top: 20px; max-width: 690px; }
        .sesen-multimedia-page .smm-ai-capabilities { border-top: 1px solid var(--smm-border); margin-top: 28px; }
        .sesen-multimedia-page .smm-ai-capability { align-items: flex-start; border-bottom: 1px solid var(--smm-divider); display: grid; gap: 14px; grid-template-columns: 42px 1fr; padding: 18px 0; }
        .sesen-multimedia-page .smm-ai-capability .smm-icon-box { height: 38px; width: 38px; }
        .sesen-multimedia-page .smm-ai-capability h3 { font-size: 18px; }
        .sesen-multimedia-page .smm-ai-capability p { font-size: 16px; line-height: 1.6; margin-top: 5px; }
        .sesen-multimedia-page .smm-voice-panel {
          background: var(--smm-navy);
          border-radius: 28px;
          color: white;
          overflow: hidden;
          padding: 34px;
          position: sticky;
          top: 24px;
        }
        .sesen-multimedia-page .smm-voice-panel .smm-eyebrow { color: var(--smm-light-blue); }
        .sesen-multimedia-page .smm-voice-panel h3 { color: white; font-size: 28px; }
        .sesen-multimedia-page .smm-voice-panel > p { color: #DCE5FF; font-size: 16px; line-height: 1.65; margin-top: 13px; }
        .sesen-multimedia-page .smm-voice-mode { border-top: 1px solid rgba(255,255,255,.14); margin-top: 22px; padding-top: 20px; }
        .sesen-multimedia-page .smm-voice-mode h4 { color: white; font-size: 18px; }
        .sesen-multimedia-page .smm-voice-mode p { color: #C9D6F5; font-size: 16px; line-height: 1.6; margin-top: 7px; }
        .sesen-multimedia-page .smm-voice-panel .smm-link { color: var(--smm-light-blue); margin-top: 25px; }

        /* FORMATS */
        .sesen-multimedia-page .smm-formats-panel { border: 1px solid var(--smm-border); border-radius: 28px; display: grid; grid-template-columns: repeat(4, 1fr); overflow: hidden; }
        .sesen-multimedia-page .smm-format-col { background: white; padding: 31px 28px 29px; }
        .sesen-multimedia-page .smm-format-col + .smm-format-col { border-left: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-format-col h3 { font-size: 20px; margin-top: 16px; }
        .sesen-multimedia-page .smm-format-list { display: grid; gap: 9px; list-style: none; margin: 19px 0 0; padding: 0; }
        .sesen-multimedia-page .smm-format-list li { border-top: 1px solid #EEF2F8; color: var(--smm-body); font-size: 16px; line-height: 1.45; padding-top: 9px; }
        .sesen-multimedia-page .smm-graphics-note {
          align-items: center;
          border-bottom: 1px solid var(--smm-border);
          border-left: 1px solid var(--smm-border);
          border-right: 1px solid var(--smm-border);
          display: grid;
          gap: 20px;
          grid-template-columns: auto 1fr;
          padding: 24px 29px;
        }
        .sesen-multimedia-page .smm-graphics-note h3 { font-size: 19px; }
        .sesen-multimedia-page .smm-graphics-note p { font-size: 16px; line-height: 1.62; margin-top: 4px; }
        .sesen-multimedia-page .smm-format-footnote { color: var(--smm-muted); font-size: 16px; line-height: 1.6; margin: 20px auto 0; max-width: 850px; text-align: center; }

        /* QUALITY */
        .sesen-multimedia-page .smm-quality {
          background: var(--smm-navy);
          color: white;
          overflow: hidden;
        }
        .sesen-multimedia-page .smm-quality::before {
          border: 1px solid rgba(200, 214, 255, .08);
          border-radius: 50%;
          content: "";
          height: 520px;
          position: absolute;
          right: -180px;
          top: -150px;
          width: 520px;
        }
        .sesen-multimedia-page .smm-quality .smm-eyebrow { color: var(--smm-light-blue); }
        .sesen-multimedia-page .smm-quality h2,
        .sesen-multimedia-page .smm-quality h3 { color: white; }
        .sesen-multimedia-page .smm-quality .smm-section-head p { color: #D7E1FA; }
        .sesen-multimedia-page .smm-quality-grid { border-top: 1px solid rgba(255,255,255,.14); display: grid; grid-template-columns: repeat(3, 1fr); }
        .sesen-multimedia-page .smm-quality-item { min-height: 190px; padding: 28px 30px 28px 0; }
        .sesen-multimedia-page .smm-quality-item:not(:nth-child(3n+1)) { border-left: 1px solid rgba(255,255,255,.12); padding-left: 30px; }
        .sesen-multimedia-page .smm-quality-item:nth-child(n+4) { border-top: 1px solid rgba(255,255,255,.12); }
        .sesen-multimedia-page .smm-quality-item .smm-icon-box { background: rgba(200,214,255,.1); color: var(--smm-light-blue); }
        .sesen-multimedia-page .smm-quality-item h3 { font-size: 19px; margin-top: 15px; }
        .sesen-multimedia-page .smm-quality-item p { color: #CBD7F2; font-size: 16px; line-height: 1.6; margin-top: 9px; }
        .sesen-multimedia-page .smm-quality-trust {
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,.14);
          border-top: 1px solid rgba(255,255,255,.14);
          display: grid;
          gap: 0;
          grid-template-columns: 1.25fr repeat(3, .75fr);
          margin-top: 34px;
        }
        .sesen-multimedia-page .smm-quality-trust > div { padding: 22px 24px; }
        .sesen-multimedia-page .smm-quality-trust > div + div { border-left: 1px solid rgba(255,255,255,.12); }
        .sesen-multimedia-page .smm-quality-trust strong { color: white; display: block; font-size: 16px; line-height: 1.45; }
        .sesen-multimedia-page .smm-quality-trust span { color: #BECCEB; display: block; font-size: 13px; line-height: 1.45; margin-top: 4px; }

        /* SCALE */
        .sesen-multimedia-page .smm-scale-grid { align-items: center; display: grid; gap: 68px; grid-template-columns: 1fr 1fr; }
        .sesen-multimedia-page .smm-scale-art {
          background: white;
          border: 1px solid #D5DFF2;
          border-radius: 28px;
          height: 448px;
          position: relative;
        }
        .sesen-multimedia-page .smm-scale-source {
          align-items: center;
          background: white;
          border: 1px solid #CAD7F0;
          border-radius: 17px;
          box-shadow: 0 12px 30px rgba(23,38,77,.08);
          display: flex;
          gap: 12px;
          left: 50%;
          padding: 14px 17px;
          position: absolute;
          top: 42px;
          transform: translateX(-50%);
          width: 250px;
          z-index: 3;
        }
        .sesen-multimedia-page .smm-scale-source-icon { align-items: center; background: var(--smm-soft-blue); border-radius: 11px; color: var(--smm-blue-dark); display: flex; height: 42px; justify-content: center; width: 42px; }
        .sesen-multimedia-page .smm-scale-source small,
        .sesen-multimedia-page .smm-scale-update small { color: var(--smm-blue-dark); display: block; font-size: 9px; font-weight: 700; letter-spacing: .11em; }
        .sesen-multimedia-page .smm-scale-source strong,
        .sesen-multimedia-page .smm-scale-update strong { color: var(--smm-navy); display: block; font-size: 13px; line-height: 1.35; margin-top: 3px; }
        .sesen-multimedia-page .smm-scale-line { background: #CCD8EF; height: 1px; position: absolute; top: 169px; transform-origin: left center; width: 122px; }
        .sesen-multimedia-page .smm-scale-line-a { left: 49%; transform: rotate(148deg); }
        .sesen-multimedia-page .smm-scale-line-b { left: 50%; transform: rotate(90deg); width: 96px; }
        .sesen-multimedia-page .smm-scale-line-c { left: 51%; transform: rotate(32deg); }
        .sesen-multimedia-page .smm-scale-market {
          align-items: center;
          background: var(--smm-pale-blue);
          border: 1px solid #D6E0F3;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          height: 82px;
          justify-content: center;
          position: absolute;
          top: 222px;
          width: 112px;
        }
        .sesen-multimedia-page .smm-scale-market b { color: var(--smm-blue-dark); font-size: 17px; }
        .sesen-multimedia-page .smm-scale-market span { color: var(--smm-muted); font-size: 10px; margin-top: 3px; }
        .sesen-multimedia-page .smm-scale-market.market-a { left: 40px; }
        .sesen-multimedia-page .smm-scale-market.market-b { left: calc(50% - 56px); }
        .sesen-multimedia-page .smm-scale-market.market-c { right: 40px; }
        .sesen-multimedia-page .smm-scale-update {
          align-items: center;
          background: var(--smm-navy);
          border-radius: 16px;
          bottom: 38px;
          color: white;
          display: flex;
          gap: 12px;
          left: 50%;
          padding: 14px 17px;
          position: absolute;
          transform: translateX(-50%);
          width: 270px;
        }
        .sesen-multimedia-page .smm-scale-update svg { color: var(--smm-light-blue); }
        .sesen-multimedia-page .smm-scale-update small { color: var(--smm-light-blue); }
        .sesen-multimedia-page .smm-scale-update strong { color: white; }
        .sesen-multimedia-page .smm-scale-copy > p { font-size: 17px; line-height: 1.7; margin-top: 24px; }
        .sesen-multimedia-page .smm-scale-list { border-top: 1px solid var(--smm-border); display: grid; grid-template-columns: 1fr 1fr; margin-top: 28px; }
        .sesen-multimedia-page .smm-scale-list-item { border-bottom: 1px solid var(--smm-divider); padding: 18px 16px 18px 0; }
        .sesen-multimedia-page .smm-scale-list-item:nth-child(even) { border-left: 1px solid var(--smm-divider); padding-left: 18px; }
        .sesen-multimedia-page .smm-scale-list-top { align-items: center; display: flex; gap: 10px; }
        .sesen-multimedia-page .smm-scale-list-top svg { color: var(--smm-blue-dark); }
        .sesen-multimedia-page .smm-scale-list-top h3 { font-size: 17px; }
        .sesen-multimedia-page .smm-scale-list-item p { color: var(--smm-muted); font-size: 16px; line-height: 1.55; margin-top: 7px; }

        /* WHY */
        .sesen-multimedia-page .smm-why-band { border-bottom: 1px solid var(--smm-border); border-top: 1px solid var(--smm-border); display: grid; grid-template-columns: repeat(5, 1fr); }
        .sesen-multimedia-page .smm-why-item { min-height: 285px; padding: 30px 25px; }
        .sesen-multimedia-page .smm-why-item + .smm-why-item { border-left: 1px solid var(--smm-divider); }
        .sesen-multimedia-page .smm-why-item .smm-icon-box { margin-bottom: 18px; }
        .sesen-multimedia-page .smm-why-item h3 { font-size: 18px; }
        .sesen-multimedia-page .smm-why-item p { font-size: 16px; line-height: 1.6; margin-top: 10px; }

        /* FAQ */
        .sesen-multimedia-page .smm-faq-wrap { display: grid; gap: 70px; grid-template-columns: 320px 1fr; }
        .sesen-multimedia-page .smm-faq-intro { position: sticky; top: 28px; align-self: start; }
        .sesen-multimedia-page .smm-faq-intro p { font-size: 16px; line-height: 1.68; margin-top: 16px; }
        .sesen-multimedia-page .smm-faq-list { border-top: 1px solid var(--smm-border); }
        .sesen-multimedia-page .smm-faq-item { border-bottom: 1px solid var(--smm-border); }
        .sesen-multimedia-page .smm-faq-button {
          align-items: center;
          background: transparent;
          border: 0;
          color: var(--smm-navy);
          cursor: pointer;
          display: flex;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          font-weight: 500;
          gap: 20px;
          justify-content: space-between;
          line-height: 1.42;
          padding: 23px 0;
          text-align: left;
          width: 100%;
        }
        .sesen-multimedia-page .smm-faq-toggle {
          align-items: center;
          border: 1px solid #C9D6EF;
          border-radius: 50%;
          color: var(--smm-blue-dark);
          display: flex;
          flex: 0 0 auto;
          font-family: Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 400;
          height: 36px;
          justify-content: center;
          width: 36px;
        }
        .sesen-multimedia-page .smm-faq-answer { color: var(--smm-body); font-size: 16px; line-height: 1.75; max-width: 820px; padding: 0 54px 23px 0; }

        /* CTA */
        .sesen-multimedia-page .smm-final { padding: 92px 0; }
        .sesen-multimedia-page .smm-final-card {
          background: linear-gradient(135deg, #253F8F 0%, #3659BB 100%);
          border-radius: 30px;
          color: white;
          overflow: hidden;
          padding: 66px 60px;
          position: relative;
          text-align: center;
        }
        .sesen-multimedia-page .smm-final-card::before,
        .sesen-multimedia-page .smm-final-card::after {
          border: 1px solid rgba(255,255,255,.11);
          border-radius: 50%;
          content: "";
          position: absolute;
        }
        .sesen-multimedia-page .smm-final-card::before { height: 330px; left: -120px; top: -170px; width: 330px; }
        .sesen-multimedia-page .smm-final-card::after { bottom: -210px; height: 390px; right: -140px; width: 390px; }
        .sesen-multimedia-page .smm-final-card h2 { color: white; position: relative; z-index: 1; }
        .sesen-multimedia-page .smm-final-card p { color: #E1E8FB; font-size: 18px; line-height: 1.7; margin: 19px auto 0; max-width: 780px; position: relative; z-index: 1; }
        .sesen-multimedia-page .smm-final-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 30px; position: relative; z-index: 1; }
        .sesen-multimedia-page .smm-final-card .smm-btn-primary { background: var(--smm-blue); border-color: rgba(255,255,255,.22); }
        .sesen-multimedia-page .smm-final-card .smm-btn-primary:hover { background: #6A86DF; }
        .sesen-multimedia-page .smm-final-card .smm-btn-secondary { background: white; color: var(--smm-ink); }

        @media (max-width: 1180px) {
          .sesen-multimedia-page .smm-shell { padding-left: 40px; padding-right: 40px; }
          .sesen-multimedia-page .smm-hero-grid { gap: 38px; grid-template-columns: minmax(0, 1fr) minmax(420px, .86fr); }
          .sesen-multimedia-page .smm-hero-art { transform: scale(.92); transform-origin: center right; }
          .sesen-multimedia-page .smm-term-grid,
          .sesen-multimedia-page .smm-scale-grid { gap: 48px; }
          .sesen-multimedia-page .smm-why-band { grid-template-columns: repeat(3, 1fr); }
          .sesen-multimedia-page .smm-why-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--smm-divider); }
          .sesen-multimedia-page .smm-why-item:nth-child(5) { border-top: 1px solid var(--smm-divider); }
        }

        @media (max-width: 940px) {
          .sesen-multimedia-page .smm-shell { padding-left: 30px; padding-right: 30px; }
          .sesen-multimedia-page .smm-section { padding: 82px 0; }
          .sesen-multimedia-page .smm-hero { padding: 78px 0 72px; }
          .sesen-multimedia-page .smm-hero-grid { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-hero-copy { max-width: 790px; }
          .sesen-multimedia-page .smm-hero-art { margin: 0 auto; transform: none; }
          .sesen-multimedia-page .smm-hero-proof { grid-template-columns: 1fr 1fr; row-gap: 18px; }
          .sesen-multimedia-page .smm-hero-proof-item:nth-child(3) { border-left: 0; padding-left: 0; }
          .sesen-multimedia-page .smm-hero-proof-item:nth-child(n+3) { border-top: 1px solid var(--smm-divider); padding-top: 17px; }
          .sesen-multimedia-page .smm-layers-grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-multimedia-page .smm-layer-item { border-bottom: 1px solid var(--smm-divider) !important; border-right: 0 !important; }
          .sesen-multimedia-page .smm-layer-item:nth-child(odd) { border-right: 1px solid var(--smm-divider) !important; }
          .sesen-multimedia-page .smm-layer-item:nth-last-child(-n+2) { border-bottom: 0 !important; }
          .sesen-multimedia-page .smm-services-panel { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-service-item { border-bottom: 1px solid var(--smm-divider) !important; border-right: 0 !important; }
          .sesen-multimedia-page .smm-service-item:last-child { border-bottom: 0 !important; }
          .sesen-multimedia-page .smm-usecases { grid-template-columns: repeat(2, 1fr); }
          .sesen-multimedia-page .smm-usecase { border-left: 0 !important; padding-left: 0 !important; padding-right: 28px; }
          .sesen-multimedia-page .smm-usecase:nth-child(even) { border-left: 1px solid var(--smm-divider) !important; padding-left: 28px !important; }
          .sesen-multimedia-page .smm-term-grid,
          .sesen-multimedia-page .smm-ai-grid,
          .sesen-multimedia-page .smm-scale-grid { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-term-copy,
          .sesen-multimedia-page .smm-scale-copy { max-width: 800px; }
          .sesen-multimedia-page .smm-term-workspace { margin: 0 auto; max-width: 760px; width: 100%; }
          .sesen-multimedia-page .smm-voice-panel,
          .sesen-multimedia-page .smm-faq-intro { position: static; }
          .sesen-multimedia-page .smm-formats-panel { grid-template-columns: repeat(2, 1fr); }
          .sesen-multimedia-page .smm-format-col:nth-child(3) { border-left: 0; border-top: 1px solid var(--smm-divider); }
          .sesen-multimedia-page .smm-format-col:nth-child(4) { border-top: 1px solid var(--smm-divider); }
          .sesen-multimedia-page .smm-quality-grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-multimedia-page .smm-quality-item { border-left: 0 !important; border-top: 1px solid rgba(255,255,255,.12); padding-left: 0 !important; padding-right: 26px; }
          .sesen-multimedia-page .smm-quality-item:nth-child(-n+2) { border-top: 0; }
          .sesen-multimedia-page .smm-quality-item:nth-child(even) { border-left: 1px solid rgba(255,255,255,.12) !important; padding-left: 26px !important; }
          .sesen-multimedia-page .smm-quality-trust { grid-template-columns: 1fr 1fr; }
          .sesen-multimedia-page .smm-quality-trust > div:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
          .sesen-multimedia-page .smm-quality-trust > div:nth-child(4) { border-top: 1px solid rgba(255,255,255,.12); }
          .sesen-multimedia-page .smm-scale-art { margin: 0 auto; max-width: 610px; width: 100%; }
          .sesen-multimedia-page .smm-why-band { grid-template-columns: repeat(2, 1fr); }
          .sesen-multimedia-page .smm-why-band .smm-why-item,
          .sesen-multimedia-page .smm-why-item:nth-child(4),
          .sesen-multimedia-page .smm-why-item:nth-child(5) { border-left: 0; border-top: 1px solid var(--smm-divider); }
          .sesen-multimedia-page .smm-why-item:nth-child(-n+2) { border-top: 0; }
          .sesen-multimedia-page .smm-why-item:nth-child(even) { border-left: 1px solid var(--smm-divider); }
          .sesen-multimedia-page .smm-faq-wrap { gap: 38px; grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-faq-intro { max-width: 700px; }
        }

        @media (max-width: 700px) {
          .sesen-multimedia-page .smm-shell { padding-left: 20px; padding-right: 20px; }
          .sesen-multimedia-page .smm-section,
          .sesen-multimedia-page .smm-section.smm-compact { padding: 68px 0; }
          .sesen-multimedia-page .smm-hero { padding: 66px 0 60px; }
          .sesen-multimedia-page h1 { font-size: 42px; }
          .sesen-multimedia-page h2 { font-size: 32px; }
          .sesen-multimedia-page h3 { font-size: 22px; }
          .sesen-multimedia-page .smm-section-head { margin-bottom: 36px; }
          .sesen-multimedia-page .smm-section-head p { font-size: 17px; }
          .sesen-multimedia-page .smm-mobile-center { text-align: center !important; }
          .sesen-multimedia-page .smm-mobile-center > p { text-align: left; }
          .sesen-multimedia-page .smm-mobile-left { text-align: left !important; }
          .sesen-multimedia-page .smm-mobile-title-center > .smm-eyebrow,
          .sesen-multimedia-page .smm-mobile-title-center > h2 { text-align: center; }
          .sesen-multimedia-page .smm-hero-lead { font-size: 18px; }
          .sesen-multimedia-page .smm-hero-support { font-size: 16px; }
          .sesen-multimedia-page .smm-hero-actions { display: grid; grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-btn { width: 100%; }
          .sesen-multimedia-page .smm-hero-art { height: 440px; max-width: 500px; }
          .sesen-multimedia-page .smm-art-video { left: 13%; top: 96px; width: 74%; }
          .sesen-multimedia-page .smm-art-stage { gap: 16px; grid-template-columns: 108px 1fr; min-height: 150px; padding: 18px; }
          .sesen-multimedia-page .smm-art-chip-voice { left: 2px; }
          .sesen-multimedia-page .smm-art-chip-subtitles { right: 2px; top: 175px; }
          .sesen-multimedia-page .smm-art-course { bottom: 9px; right: 4%; }
          .sesen-multimedia-page .smm-art-wave { bottom: 37px; left: 2%; }
          .sesen-multimedia-page .smm-art-orbit-one { height: 360px; left: calc(50% - 180px); top: 50px; width: 360px; }
          .sesen-multimedia-page .smm-art-orbit-two { height: 260px; left: calc(50% - 130px); top: 100px; width: 260px; }
          .sesen-multimedia-page .smm-art-language { left: 50%; transform: translateX(-50%); }
          .sesen-multimedia-page .smm-layers-grid,
          .sesen-multimedia-page .smm-usecases,
          .sesen-multimedia-page .smm-formats-panel,
          .sesen-multimedia-page .smm-quality-grid,
          .sesen-multimedia-page .smm-why-band { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-layer-item,
          .sesen-multimedia-page .smm-layer-item:nth-child(odd) { border-bottom: 1px solid var(--smm-divider) !important; border-right: 0 !important; min-height: 0; padding: 28px 24px; }
          .sesen-multimedia-page .smm-layer-item:last-child { border-bottom: 0 !important; }
          .sesen-multimedia-page .smm-layer-result { align-items: flex-start; flex-direction: column; gap: 8px; text-align: left; }
          .sesen-multimedia-page .smm-service-item { padding: 31px 24px; }
          .sesen-multimedia-page .smm-boundary-note { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-usecase,
          .sesen-multimedia-page .smm-usecase:nth-child(even) { border-left: 0 !important; min-height: 0; padding: 27px 0 !important; }
          .sesen-multimedia-page .smm-workflow-item { gap: 0; grid-template-columns: 1fr; min-height: 0; padding-left: 0; }
          .sesen-multimedia-page .smm-workflow-item:not(:last-child)::after { left: 27px; top: 52px; }
          .sesen-multimedia-page .smm-workflow-index { gap: 14px; }
          .sesen-multimedia-page .smm-workflow-number { border-width: 5px; height: 54px; width: 54px; }
          .sesen-multimedia-page .smm-workflow-content { margin-left: 72px; padding: 14px 0 34px; }
          .sesen-multimedia-page .smm-workflow-bullets { display: grid; gap: 7px; }
          .sesen-multimedia-page .smm-scale-list { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-scale-list-item:nth-child(even) { border-left: 0; padding-left: 0; }
          .sesen-multimedia-page .smm-term-workspace-top { align-items: flex-start; gap: 12px; }
          .sesen-multimedia-page .smm-term-track { align-items: flex-start; grid-template-columns: 132px minmax(0, 1fr); }
          .sesen-multimedia-page .smm-term-track-state { grid-column: 2; }
          .sesen-multimedia-page .smm-ai-grid { gap: 42px; }
          .sesen-multimedia-page .smm-voice-panel { padding: 29px 24px; }
          .sesen-multimedia-page .smm-formats-panel .smm-format-col,
          .sesen-multimedia-page .smm-format-col:nth-child(3),
          .sesen-multimedia-page .smm-format-col:nth-child(4) { border-left: 0; border-top: 1px solid var(--smm-divider); padding: 27px 24px; }
          .sesen-multimedia-page .smm-format-col:first-child { border-top: 0; }
          .sesen-multimedia-page .smm-graphics-note { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-quality-item,
          .sesen-multimedia-page .smm-quality-item:nth-child(even),
          .sesen-multimedia-page .smm-quality-item:nth-child(-n+2) { border-left: 0 !important; border-top: 1px solid rgba(255,255,255,.12); min-height: 0; padding: 26px 0 !important; }
          .sesen-multimedia-page .smm-quality-item:first-child { border-top: 0 !important; }
          .sesen-multimedia-page .smm-quality-trust { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-quality-trust > div,
          .sesen-multimedia-page .smm-quality-trust > div:nth-child(3),
          .sesen-multimedia-page .smm-quality-trust > div:nth-child(4) { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
          .sesen-multimedia-page .smm-quality-trust > div:first-child { border-top: 0; }
          .sesen-multimedia-page .smm-scale-art { height: 430px; }
          .sesen-multimedia-page .smm-scale-market.market-a { left: 18px; }
          .sesen-multimedia-page .smm-scale-market.market-c { right: 18px; }
          .sesen-multimedia-page .smm-why-band .smm-why-item,
          .sesen-multimedia-page .smm-why-item:nth-child(4),
          .sesen-multimedia-page .smm-why-item:nth-child(5) { border-left: 0; border-top: 1px solid var(--smm-divider); min-height: 0; padding: 26px 0; }
          .sesen-multimedia-page .smm-why-item:first-child { border-top: 0; }
          .sesen-multimedia-page .smm-faq-button { font-size: 18px; }
          .sesen-multimedia-page .smm-faq-answer { padding-right: 0; }
          .sesen-multimedia-page .smm-final { padding: 68px 0; }
          .sesen-multimedia-page .smm-final-card { padding: 48px 24px; }
          .sesen-multimedia-page .smm-final-card p { font-size: 17px; }
          .sesen-multimedia-page .smm-final-actions { display: grid; grid-template-columns: 1fr; }
        }

        @media (max-width: 430px) {
          .sesen-multimedia-page h1 { font-size: 38px; }
          .sesen-multimedia-page h2 { font-size: 30px; }
          .sesen-multimedia-page .smm-hero-proof { grid-template-columns: 1fr; }
          .sesen-multimedia-page .smm-hero-proof-item,
          .sesen-multimedia-page .smm-hero-proof-item + .smm-hero-proof-item,
          .sesen-multimedia-page .smm-hero-proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--smm-divider); padding: 14px 0 0; }
          .sesen-multimedia-page .smm-hero-proof-item:first-child { border-top: 0; padding-top: 0; }
          .sesen-multimedia-page .smm-hero-proof-item:nth-child(2) { border-top: 1px solid var(--smm-divider); padding-top: 14px; }
          .sesen-multimedia-page .smm-hero-art { height: 380px; margin-top: 8px; }
          .sesen-multimedia-page .smm-art-video { left: 8%; top: 87px; width: 84%; }
          .sesen-multimedia-page .smm-art-stage { grid-template-columns: 88px 1fr; min-height: 130px; padding: 14px; }
          .sesen-multimedia-page .smm-art-device-screen { height: 77px; }
          .sesen-multimedia-page .smm-art-chip { padding: 8px 9px; }
          .sesen-multimedia-page .smm-art-chip small { display: none; }
          .sesen-multimedia-page .smm-art-icon-circle { height: 29px; width: 29px; }
          .sesen-multimedia-page .smm-art-chip-voice { top: 42px; }
          .sesen-multimedia-page .smm-art-chip-subtitles { top: 165px; }
          .sesen-multimedia-page .smm-art-course { bottom: 2px; right: 1%; width: 165px; }
          .sesen-multimedia-page .smm-art-wave { display: none; }
          .sesen-multimedia-page .smm-btn { font-size: 12px; min-height: 52px; padding-left: 18px; padding-right: 18px; }
          .sesen-multimedia-page .smm-art-orbit-one { height: 320px; left: calc(50% - 160px); width: 320px; }
          .sesen-multimedia-page .smm-art-orbit-two { height: 230px; left: calc(50% - 115px); width: 230px; }
          .sesen-multimedia-page .smm-term-workspace { border-radius: 22px; }
          .sesen-multimedia-page .smm-term-workspace-top { align-items: flex-start; flex-direction: column; padding: 18px; }
          .sesen-multimedia-page .smm-term-project-status { align-self: flex-start; }
          .sesen-multimedia-page .smm-term-source-card { grid-template-columns: 40px 1fr; padding: 18px; }
          .sesen-multimedia-page .smm-term-source-icon { height: 40px; width: 40px; }
          .sesen-multimedia-page .smm-term-source-copy strong { font-size: 21px; }
          .sesen-multimedia-page .smm-term-track { gap: 10px; grid-template-columns: 1fr; padding: 15px 18px; }
          .sesen-multimedia-page .smm-term-track-label { gap: 9px; }
          .sesen-multimedia-page .smm-term-track-copy,
          .sesen-multimedia-page .smm-term-track-state { grid-column: 1; }
          .sesen-multimedia-page .smm-term-track-state { margin-left: 44px; }
          .sesen-multimedia-page .smm-term-workspace-foot { align-items: flex-start; flex-direction: column; padding: 15px 18px; }
          .sesen-multimedia-page .smm-scale-art { height: 402px; }
          .sesen-multimedia-page .smm-scale-source { width: 230px; }
          .sesen-multimedia-page .smm-scale-market { width: 88px; }
          .sesen-multimedia-page .smm-scale-market.market-a { left: 10px; }
          .sesen-multimedia-page .smm-scale-market.market-b { left: calc(50% - 44px); }
          .sesen-multimedia-page .smm-scale-market.market-c { right: 10px; }
          .sesen-multimedia-page .smm-scale-update { width: 244px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-multimedia-page .smm-btn,
          .sesen-multimedia-page .smm-link svg { transition: none; }
        }
      `}</style>

      <section className="smm-hero" aria-labelledby="multimedia-hero-title">
        <div className="smm-shell smm-hero-grid">
          <div className="smm-hero-copy">
            <h1 id="multimedia-hero-title">Multimedia Localization Services for Life Sciences</h1>
            <p className="smm-hero-lead">
              Transform video, audio, training, and interactive content into accurate, engaging multilingual experiences for global life sciences audiences.
            </p>
            <p className="smm-hero-support">
              Sesen combines specialized life sciences translation with multilingual voiceover, subtitling, eLearning localization, multimedia engineering, terminology governance, and quality assurance to deliver production-ready content across languages and markets.
            </p>
            <div className="smm-hero-actions">
              <a className="smm-btn smm-btn-primary" href={SERVICE_LINKS.quote}>REQUEST A QUOTE <Icon name="arrow" size={16} /></a>
              <a className="smm-btn smm-btn-secondary" href={SERVICE_LINKS.sales}>TALK TO A LIFE SCIENCES SPECIALIST <Icon name="arrow" size={16} /></a>
            </div>
            <div className="smm-hero-proof" aria-label="Key service capabilities">
              <div className="smm-hero-proof-item"><strong>150+ Languages</strong><span>Global multilingual support</span></div>
              <div className="smm-hero-proof-item"><strong>Life Sciences Expertise</strong><span>Clinical, medical, scientific, device, and healthcare content</span></div>
              <div className="smm-hero-proof-item"><strong>End-to-End Production</strong><span>Translation, voice, subtitles, engineering, and QA</span></div>
              <div className="smm-hero-proof-item"><strong>AI-Enabled + Human-Reviewed</strong><span>Flexible workflows matched to content and quality requirements</span></div>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="smm-section smm-pale" aria-labelledby="media-layers-title">
        <div className="smm-shell">
          <SectionHeader
            eyebrow="THE COMPLETE MEDIA EXPERIENCE"
            title="One Source. Every Language. Every Media Layer."
            id="media-layers-title"
            intro="Multimedia localization involves much more than translating a script. Sesen coordinates spoken language, timed text, graphics, audio, interactive content, and technical production so every localized layer communicates the same meaning and works naturally in context."
            mobileAlign="center"
          />
          <div className="smm-layers-wrap">
            <div className="smm-layers-grid">
              {mediaLayers.map((item) => (
                <article className="smm-layer-item" key={item.title}>
                  <div className="smm-layer-top">
                    <span className="smm-icon-box"><Icon name={item.icon} /></span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="smm-layer-result">
              <Icon name="layers" size={22} />
              <strong>One coordinated multilingual production workflow</strong>
              <span>Complete media, not disconnected translated components.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-section" aria-labelledby="services-title">
        <div className="smm-shell">
          <SectionHeader
            title="Multimedia Localization Services"
            id="services-title"
            intro="Sesen supports individual multimedia services and complete end-to-end programs, coordinating linguistic, technical, and production requirements through one localization partner."
            align="left"
            mobileAlign="left"
          />
          <div className="smm-services-panel">
            {serviceGroups.map((service) => (
              <article className="smm-service-item" key={service.title}>
                <div className="smm-service-title">
                  <span className="smm-icon-box"><Icon name={service.icon} /></span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.lead}</p>
                <ul className="smm-service-list">
                  {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <ArrowLink href={service.link}>{service.label}</ArrowLink>
              </article>
            ))}
          </div>
          <div className="smm-boundary-note">
            <Icon name="spark" size={21} />
            <p>
              Localizing the application itself? Sesen also supports <a href={SERVICE_LINKS.softwareApp}>Software &amp; App Localization</a>, <a href={SERVICE_LINKS.software}>Clinical &amp; Medical Software Localization</a>, and <a href={SERVICE_LINKS.ehealth}>eHealth &amp; mHealth Localization</a> for multilingual interfaces, software workflows, and digital health experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="smm-section smm-surface" aria-labelledby="use-cases-title">
        <div className="smm-shell">
          <SectionHeader
            eyebrow="LIFE SCIENCES APPLICATIONS"
            title="Built for Life Sciences Communication"
            id="use-cases-title"
            intro="Multimedia supports communication throughout the life sciences lifecycle—from clinical development and product training to patient education, medical affairs, workforce learning, and commercialization."
            mobileAlign="center"
          />
          <div className="smm-usecases">
            {useCases.map((item) => (
              <article className="smm-usecase" key={item.title}>
                <span className="smm-icon-box"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link ? <ArrowLink href={item.link}>{item.label}</ArrowLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-workflow-section" aria-labelledby="workflow-title">
        <div className="smm-shell">
          <SectionHeader
            title="From Source Media to Deployment-Ready Localization"
            id="workflow-title"
            intro="Complex multimedia projects become easier to manage when linguistic and production requirements are coordinated from the beginning. Sesen uses structured workflows that take content from source analysis through multilingual production, QA, and final delivery."
            align="left"
            mobileAlign="left"
          />
          <div className="smm-workflow">
            {workflow.map((step, index) => (
              <article className="smm-workflow-item" key={step.title}>
                <div className="smm-workflow-index">
                  <span className="smm-workflow-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>Step</span>
                </div>
                <div className="smm-workflow-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <ul className="smm-workflow-bullets">
                    {step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-pale" aria-labelledby="terminology-title">
        <div className="smm-shell smm-term-grid">
          <div className="smm-term-copy smm-mobile-title-center">
            <div className="smm-eyebrow">TERMINOLOGY GOVERNANCE</div>
            <h2 id="terminology-title">Keep Terminology Consistent Across Every Media Layer</h2>
            <p>
              A single multimedia program can express the same medical or scientific concept in narration, subtitles, graphics, animations, quizzes, course interfaces, downloadable materials, and supporting documentation. If those elements are localized independently, terminology can drift.
            </p>
            <p>
              Sesen can work with client-approved terminology, translation memories, glossaries, style guides, previously approved content, and project-specific language resources. AI-assisted terminology analysis and automated checks can further support consistency while professional linguists remain responsible for contextual decisions and final linguistic quality.
            </p>
            <div className="smm-term-principles" aria-label="Terminology governance controls">
              <div className="smm-term-principle">
                <span><Icon name="terms" size={17} /></span>
                <div><b>One controlled terminology source</b><p>Client glossaries, approved translations, translation memory, style guidance, and project-specific references stay connected to the same program.</p></div>
              </div>
              <div className="smm-term-principle">
                <span><Icon name="voice" size={17} /></span>
                <div><b>Context extends beyond written text</b><p>Terminology decisions can also guide pronunciation, subtitle constraints, on-screen graphics, and interactive training content.</p></div>
              </div>
              <div className="smm-term-principle">
                <span><Icon name="check" size={17} /></span>
                <div><b>Technology supports expert review</b><p>AI-assisted checks can flag inconsistencies across assets while professional linguists make the final contextual decisions.</p></div>
              </div>
            </div>
            <div className="smm-term-callout">One approved concept. Consistent across every language and every media layer.</div>
          </div>
          <TerminologyWorkspace />
        </div>
      </section>

      <section className="smm-section" aria-labelledby="ai-title">
        <div className="smm-shell smm-ai-grid">
          <div className="smm-ai-copy">
            <h2 id="ai-title">Human Expertise + AI-Enabled Multimedia Workflows</h2>
            <p>
              AI is changing how multimedia can be transcribed, translated, voiced, checked, and updated. For life sciences organizations, the opportunity is to apply technology where it improves efficiency while maintaining the subject-matter judgment and quality controls required by the content.
            </p>
            <div className="smm-ai-capabilities">
              {aiCapabilities.map(([icon, title, text]) => (
                <div className="smm-ai-capability" key={title}>
                  <span className="smm-icon-box"><Icon name={icon} size={20} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
              <div className="smm-ai-capability">
                <span className="smm-icon-box"><Icon name="science" size={20} /></span>
                <div><h3>Expert Human Review</h3><p>Professional linguists and multimedia specialists provide contextual judgment for medical meaning, terminology, tone, pronunciation, audience appropriateness, audiovisual quality, and final delivery.</p></div>
              </div>
            </div>
          </div>
          <aside className="smm-voice-panel" aria-label="Voice production options">
            <div className="smm-eyebrow">VOICE PRODUCTION OPTIONS</div>
            <h3>Choose the Right Voice Model for the Content</h3>
            <p>The appropriate workflow depends on audience, visibility, content sensitivity, update frequency, scale, and quality requirements.</p>
            {voiceModes.map((mode) => (
              <div className="smm-voice-mode" key={mode.title}>
                <h4>{mode.title}</h4>
                <p>{mode.text}</p>
              </div>
            ))}
            <ArrowLink href={SERVICE_LINKS.voiceover}>Explore Voiceover Services</ArrowLink>
          </aside>
        </div>
      </section>

      <section className="smm-section smm-surface" aria-labelledby="formats-title">
        <div className="smm-shell">
          <SectionHeader
            eyebrow="MULTIMEDIA ENGINEERING"
            title="Technical Production Across Formats and Platforms"
            id="formats-title"
            intro="Multimedia localization often requires working directly with production assets and delivery environments. Sesen supports common media formats and authoring workflows so customers can move from source content to usable multilingual deliverables without managing separate linguistic and engineering vendors."
            align="left"
            mobileAlign="left"
          />
          <div className="smm-formats-panel">
            {formats.map((format) => (
              <article className="smm-format-col" key={format.title}>
                <span className="smm-icon-box"><Icon name={format.icon} /></span>
                <h3>{format.title}</h3>
                <ul className="smm-format-list">
                  {format.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="smm-graphics-note">
            <span className="smm-icon-box"><Icon name="graphics" /></span>
            <div>
              <h3>Graphics &amp; On-Screen Content</h3>
              <p>Localization can also extend to titles, callouts, diagrams, screen labels, animated text, embedded graphics, presentation assets, and course visuals.</p>
            </div>
          </div>
          <p className="smm-format-footnote">Project requirements vary by authoring environment and source-file availability. Sesen reviews technical requirements during project planning to establish the appropriate production workflow and deliverable specifications.</p>
        </div>
      </section>

      <section className="smm-section smm-quality" aria-labelledby="quality-title">
        <div className="smm-shell">
          <SectionHeader
            eyebrow="LINGUISTIC + AUDIOVISUAL + FUNCTIONAL QA"
            title="Quality That Covers Language and Playback"
            id="quality-title"
            intro="A translation can be linguistically correct and still fail as multimedia. Sesen reviews both the language and the finished experience so localized content sounds right, reads correctly, displays properly, stays synchronized, and functions as intended."
            align="left"
            mobileAlign="left"
          />
          <div className="smm-quality-grid">
            {qaAreas.map(([icon, title, text]) => (
              <article className="smm-quality-item" key={title}>
                <span className="smm-icon-box"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="smm-quality-trust" aria-label="Sesen quality certifications">
            <div><strong>ISO-Certified Quality Framework</strong><span>Structured processes supporting life sciences localization and controlled review.</span></div>
            <div><strong>ISO 17100</strong><span>Translation services</span></div>
            <div><strong>ISO 9001</strong><span>Quality management</span></div>
            <div><strong>ISO 13485</strong><span>Quality management for medical device-related workflows</span></div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-pale" aria-labelledby="scale-title">
        <div className="smm-shell">
          <SectionHeader
            eyebrow="GLOBAL PROGRAM DELIVERY"
            title="Scale Multilingual Media Without Rebuilding the Process"
            id="scale-title"
            intro="Producing one localized video is different from managing hundreds of assets across languages, regions, product versions, training cycles, and recurring releases. Sesen helps organizations build repeatable multimedia localization programs that can scale over time."
            mobileAlign="center"
          />
          <div className="smm-scale-grid">
            <ScaleArtwork />
            <div className="smm-scale-copy">
              <div className="smm-scale-list">
                {scaleItems.map(([icon, title, text]) => (
                  <div className="smm-scale-list-item" key={title}>
                    <div className="smm-scale-list-top"><Icon name={icon} size={19} /><h3>{title}</h3></div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <p>Whether you need one medical training video in several languages or a recurring multimedia localization program across global markets, Sesen can adapt the production model to the scale and complexity of your content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="smm-section smm-compact" aria-labelledby="why-title">
        <div className="smm-shell">
          <SectionHeader
            title="Why Life Sciences Teams Choose Sesen"
            id="why-title"
            intro="Specialized language expertise, multimedia production, terminology control, flexible technology, and scalable program management come together in one operating model."
            mobileAlign="center"
          />
          <div className="smm-why-band">
            {differentiators.map(([icon, title, text]) => (
              <article className="smm-why-item" key={title}>
                <span className="smm-icon-box"><Icon name={icon} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smm-section smm-surface" aria-labelledby="faq-title">
        <div className="smm-shell smm-faq-wrap">
          <div className="smm-faq-intro">
            <h2 id="faq-title">Multimedia Localization FAQs</h2>
            <p>Answers to common questions about multilingual video, voiceover, subtitles, eLearning, terminology, QA, and recurring global multimedia programs.</p>
          </div>
          <div className="smm-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const buttonId = `smm-faq-button-${index}`;
              const panelId = `smm-faq-panel-${index}`;
              return (
                <div className="smm-faq-item" key={faq.q}>
                  <button
                    className="smm-faq-button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{faq.q}</span>
                    <span className="smm-faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <div className="smm-faq-answer" id={panelId} role="region" aria-labelledby={buttonId}>{faq.a}</div> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="smm-final" aria-labelledby="final-cta-title">
        <div className="smm-shell">
          <div className="smm-final-card">
            <h2 id="final-cta-title">Localize Every Layer of Your Multimedia Content</h2>
            <p>
              Sesen combines life sciences translation, multilingual voiceover, subtitling, eLearning localization, terminology governance, multimedia engineering, and quality assurance to help organizations deliver accurate, engaging, deployment-ready content around the world.
            </p>
            <div className="smm-final-actions">
              <a className="smm-btn smm-btn-primary" href={SERVICE_LINKS.quote}>REQUEST A QUOTE <Icon name="arrow" size={16} /></a>
              <a className="smm-btn smm-btn-secondary" href={SERVICE_LINKS.sales}>TALK TO A LIFE SCIENCES SPECIALIST <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
