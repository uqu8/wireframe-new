import React, { useState } from "react";

const PAGE = "sesen-elearning-page";

const Icon = ({ name, size = 24 }) => {
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

  const icons = {
    course: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M7 8h10M7 12h6M7 16h4" />
        <path d="m16 14 3 2-3 2v-4Z" />
      </svg>
    ),
    visual: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <circle cx="9" cy="10" r="2" />
        <path d="m5.5 17 4.5-4 3 2 2.5-2 3 4" />
      </svg>
    ),
    audio: (
      <svg {...common}>
        <path d="M4 10v4h4l5 4V6L8 10H4Z" />
        <path d="M16 9.5a4 4 0 0 1 0 5M18 7a7 7 0 0 1 0 10" />
      </svg>
    ),
    interaction: (
      <svg {...common}>
        <path d="m8 3 9 9-4 1.2 2.5 5-2.6 1.3-2.4-5-3.5 3V3Z" />
      </svg>
    ),
    assessment: (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2.5" />
        <path d="m8 9 1.5 1.5L12 8M8 15h8M14 10h2" />
      </svg>
    ),
    support: (
      <svg {...common}>
        <path d="M5 3h10l4 4v14H5V3Z" />
        <path d="M15 3v5h5M8 12h8M8 16h6" />
      </svg>
    ),
    clinical: (
      <svg {...common}>
        <path d="M8 3h8v4H8z" />
        <path d="M6 5H5a2 2 0 0 0-2 2v12h18V7a2 2 0 0 0-2-2h-1" />
        <path d="M12 10v6M9 13h6" />
      </svg>
    ),
    pharma: (
      <svg {...common}>
        <path d="M9 3h6v4l3 4.5A6 6 0 1 1 6 11.5L9 7V3Z" />
        <path d="M8 13h8" />
      </svg>
    ),
    device: (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="3" />
        <rect x="8" y="6" width="8" height="7" rx="1.5" />
        <path d="M8 17h3M14 17h2" />
      </svg>
    ),
    healthcare: (
      <svg {...common}>
        <path d="M12 21s7-4.5 7-11a4 4 0 0 0-7-2.8A4 4 0 0 0 5 10c0 6.5 7 11 7 11Z" />
        <path d="M12 9v6M9 12h6" />
      </svg>
    ),
    quality: (
      <svg {...common}>
        <path d="M12 3 20 7v5c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V7l8-4Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9Z" />
      </svg>
    ),
    terminology: (
      <svg {...common}>
        <path d="M5 5h8M9 5v2c0 4-2 7-5 9M6 12c2 0 5 2 7 5" />
        <path d="m15 9 4 10M17 14h4" />
      </svg>
    ),
    platform: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M8 21h8M12 18v3M7 9h4M7 13h7M16 9h1" />
      </svg>
    ),
    qa: (
      <svg {...common}>
        <circle cx="10" cy="10" r="6" />
        <path d="m14.5 14.5 5 5M7.5 10l1.7 1.7L12.5 8" />
      </svg>
    ),
    version: (
      <svg {...common}>
        <path d="M4 7h11a5 5 0 0 1 0 10H9" />
        <path d="m7 4-3 3 3 3M9 14l-3 3 3 3" />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h13M13 7l5 5-5 5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    plus: (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    minus: (
      <svg {...common}>
        <path d="M5 12h14" />
      </svg>
    ),
  };

  return icons[name] || icons.course;
};

const SectionHeading = ({ eyebrow, title, intro, align = "left", className = "" }) => (
  <div className={`${PAGE}__heading ${PAGE}__heading--${align} ${className}`}>
    {eyebrow ? <div className={`${PAGE}__eyebrow`}>{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const EditorialLink = ({ href, children }) => (
  <a className={`${PAGE}__editorial-link`} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

const HeroArtwork = () => (
  <div className={`${PAGE}__hero-art`} aria-label="Illustration of one source learning course becoming coordinated multilingual course versions">
    <div className={`${PAGE}__hero-orbit ${PAGE}__hero-orbit--one`} />
    <div className={`${PAGE}__hero-orbit ${PAGE}__hero-orbit--two`} />

    <div className={`${PAGE}__course-window`}>
      <div className={`${PAGE}__window-bar`}>
        <span />
        <span />
        <span />
        <div>Source course</div>
      </div>
      <div className={`${PAGE}__course-screen`}>
        <div className={`${PAGE}__course-sidebar`}>
          <span className="active" />
          <span />
          <span />
          <span />
        </div>
        <div className={`${PAGE}__course-main`}>
          <div className={`${PAGE}__course-kicker`}>DEVICE TRAINING</div>
          <div className={`${PAGE}__course-title-line`} />
          <div className={`${PAGE}__course-copy-line short`} />
          <div className={`${PAGE}__course-media`}>
            <div className={`${PAGE}__course-device`}>
              <span />
              <span />
            </div>
            <div className={`${PAGE}__course-wave`}>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className={`${PAGE}__course-quiz`}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>

    <div className={`${PAGE}__hero-flow`}>
      <div className={`${PAGE}__hero-node`}><Icon name="terminology" size={20} /><span>Terminology</span></div>
      <div className={`${PAGE}__hero-node`}><Icon name="audio" size={20} /><span>Voice + subtitles</span></div>
      <div className={`${PAGE}__hero-node`}><Icon name="qa" size={20} /><span>Course QA</span></div>
    </div>

    <div className={`${PAGE}__language-stack`}>
      <div className={`${PAGE}__language-card ${PAGE}__language-card--front`}>
        <div className={`${PAGE}__language-label`}>DE</div>
        <div><strong>Deutsch</strong><span>LMS-ready</span></div>
        <Icon name="check" size={18} />
      </div>
      <div className={`${PAGE}__language-card ${PAGE}__language-card--middle`}>
        <div className={`${PAGE}__language-label`}>JA</div>
        <div><strong>日本語</strong><span>Localized course</span></div>
      </div>
      <div className={`${PAGE}__language-card ${PAGE}__language-card--back`}>
        <div className={`${PAGE}__language-label`}>FR</div>
        <div><strong>Français</strong><span>Localized course</span></div>
      </div>
    </div>
  </div>
);

const CourseAnatomyVisual = () => {
  const nodes = [
    ["course", "Course content"],
    ["visual", "Visual content"],
    ["audio", "Voice + media"],
    ["interaction", "Interactions"],
    ["assessment", "Assessments"],
    ["support", "Supporting materials"],
  ];

  return (
    <div className={`${PAGE}__anatomy-visual`} aria-label="Course localization layers">
      <div className={`${PAGE}__anatomy-center`}>
        <div className={`${PAGE}__mini-window`}>
          <div className={`${PAGE}__mini-window-top`} />
          <div className={`${PAGE}__mini-window-body`}>
            <span className="wide" />
            <span />
            <div className={`${PAGE}__mini-video`}><Icon name="course" size={26} /></div>
            <div className={`${PAGE}__mini-options`}><i /><i /><i /></div>
          </div>
        </div>
        <strong>One learning experience</strong>
        <span>All layers stay aligned</span>
      </div>
      {nodes.map(([icon, label], index) => (
        <div key={label} className={`${PAGE}__anatomy-node ${PAGE}__anatomy-node--${index + 1}`}>
          <div><Icon name={icon} size={21} /></div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

const Workflow = () => {
  const steps = [
    {
      title: "Source Course Review",
      copy: "Review course structure, authoring environment, media, interactions, assessments, source files, publishing requirements, and target languages.",
    },
    {
      title: "Terminology & Content Preparation",
      copy: "Prepare specialized terminology, translation memory, previously approved language, repeated content, and voice or subtitle requirements before production begins.",
    },
    {
      title: "On-Screen Content Localization",
      copy: "Localize lessons, UI text, graphics, labels, prompts, feedback, assessments, and supporting content for the intended learner and context.",
    },
    {
      title: "Narration, Subtitles & Timed Media",
      copy: "Coordinate narration, subtitles, closed captions, timing, synchronization, and video localization so spoken and on-screen content remain aligned.",
    },
    {
      title: "Interactions & Assessments",
      copy: "Adapt navigation, branching, hotspots, simulations, quizzes, feedback, and other interactive elements without losing instructional intent.",
    },
    {
      title: "Localization Engineering",
      copy: "Rebuild localized content, manage text expansion, graphics, fonts, right-to-left layouts, multimedia synchronization, and multilingual course packaging.",
    },
    {
      title: "Linguistic, Visual & Functional QA",
      copy: "Review the course in context for language, terminology, layout, timing, navigation, interactions, media playback, assessments, and completion behavior.",
    },
    {
      title: "LMS-Ready Multilingual Delivery",
      copy: "Prepare multilingual course packages for customer validation and LMS deployment, including common SCORM, xAPI, cmi5, AICC, and HTML5 workflows as appropriate.",
    },
  ];

  return (
    <div className={`${PAGE}__workflow-wrap`}>
      <div className={`${PAGE}__workflow`}>
        {steps.map((step, index) => (
          <article className={`${PAGE}__workflow-step`} key={step.title}>
            <div className={`${PAGE}__step-number`}>{String(index + 1).padStart(2, "0")}</div>
            <div className={`${PAGE}__step-line`} aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
      <div className={`${PAGE}__governance-rail`}>
        <div><Icon name="terminology" size={20} /></div>
        <strong>Terminology</strong>
        <span />
        <strong>Translation Memory</strong>
        <span />
        <strong>Approved Language</strong>
        <span />
        <strong>Version Control</strong>
      </div>
    </div>
  );
};

const PlatformMockup = () => (
  <div className={`${PAGE}__platform-mockup`} aria-label="Simplified learning authoring and multilingual course workflow">
    <div className={`${PAGE}__platform-top`}>
      <div className={`${PAGE}__platform-name`}><Icon name="platform" size={18} /><strong>Course workspace</strong></div>
      <div className={`${PAGE}__platform-languages`}>
        <span className="active">EN</span><span>DE</span><span>JA</span><span>FR</span>
      </div>
    </div>
    <div className={`${PAGE}__platform-body`}>
      <aside>
        <div className="active"><span>01</span> Introduction</div>
        <div><span>02</span> Procedure</div>
        <div><span>03</span> Simulation</div>
        <div><span>04</span> Assessment</div>
      </aside>
      <main>
        <div className={`${PAGE}__mock-label`}>LOCALIZED MODULE</div>
        <div className={`${PAGE}__mock-title`} />
        <div className={`${PAGE}__mock-copy`} />
        <div className={`${PAGE}__mock-media`}>
          <div className={`${PAGE}__mock-device`}><Icon name="device" size={48} /></div>
          <div className={`${PAGE}__mock-caption`}>
            <span />
            <span className="short" />
          </div>
        </div>
        <div className={`${PAGE}__mock-status`}>
          <div><Icon name="check" size={17} /> Terminology reviewed</div>
          <div><Icon name="check" size={17} /> Functional QA complete</div>
        </div>
      </main>
    </div>
  </div>
);

const VersionVisual = () => (
  <div className={`${PAGE}__version-visual`} aria-label="Approved multilingual language reused across a source course update">
    <div className={`${PAGE}__version-column`}>
      <div className={`${PAGE}__version-label`}>SOURCE v1</div>
      <div className={`${PAGE}__version-sheet`}>
        <span /><span /><span className="approved" /><span /><span />
      </div>
      <div className={`${PAGE}__version-chip`}><Icon name="check" size={15} /> Approved language</div>
    </div>
    <div className={`${PAGE}__version-arrow`}><Icon name="version" size={28} /></div>
    <div className={`${PAGE}__version-column`}>
      <div className={`${PAGE}__version-label`}>SOURCE v2</div>
      <div className={`${PAGE}__version-sheet`}>
        <span /><span className="changed" /><span className="approved" /><span className="changed" /><span />
      </div>
      <div className={`${PAGE}__version-chip ${PAGE}__version-chip--blue`}>Only changed content requires attention</div>
    </div>
    <div className={`${PAGE}__version-output`}>
      <div className={`${PAGE}__version-label`}>UPDATED LANGUAGES</div>
      <div className={`${PAGE}__version-langs`}><span>DE</span><span>JA</span><span>FR</span><span>ES</span></div>
    </div>
  </div>
);

const FAQ = ({ question, children, open, onToggle }) => (
  <div className={`${PAGE}__faq-item ${open ? "is-open" : ""}`}>
    <button type="button" aria-expanded={open} onClick={onToggle}>
      <span>{question}</span>
      <span className={`${PAGE}__faq-icon`}><Icon name={open ? "minus" : "plus"} size={19} /></span>
    </button>
    <div className={`${PAGE}__faq-answer`} hidden={!open}>
      <div>{children}</div>
    </div>
  </div>
);

export default function SesenElearningTrainingTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  const layers = [
    ["course", "Course Content", "Lessons, instructions, menus, prompts, feedback, knowledge summaries, and learner-facing UI text."],
    ["visual", "Visual & On-Screen Content", "Diagrams, screenshots, labels, callouts, animated text, process flows, and embedded graphics."],
    ["audio", "Narration, Audio & Timed Media", "Narration scripts, multilingual voiceover, subtitles, closed captions, and synchronized audio/video."],
    ["interaction", "Interactions & Simulations", "Buttons, hotspots, branching scenarios, drag-and-drop activities, simulations, and interactive walkthroughs."],
    ["assessment", "Assessments", "Questions, answer choices, feedback, scoring text, pass/fail messaging, and completion content."],
    ["support", "Supporting Training Materials", "SOPs, job aids, quick-reference guides, instructor materials, learner handouts, PDFs, and reference documentation."],
  ];

  const trainingAreas = [
    {
      icon: "clinical",
      title: "Clinical Research & GCP Training",
      copy: "Multilingual learning for investigators, sites, study teams, and vendors, including protocol training, site procedures, GCP programs used in ICH E6(R3) environments, safety reporting, clinical systems, and study-specific education.",
      link: ["Clinical Trial Training Translation", "https://www.sesen.com/clinical-trial-training-translation/"],
      secondaryLink: ["Clinical Trial Translation Services", "https://www.sesen.com/clinical-trial-translation-services/"],
    },
    {
      icon: "pharma",
      title: "Pharmaceutical & Biotechnology Training",
      copy: "GMP, GLP, SOPs, manufacturing, laboratory procedures, quality systems, safety programs, product education, scientific learning, medical affairs, and workforce training.",
      link: ["Pharmaceutical Translation Services", "https://www.sesen.com/pharmaceutical-translation-services/"],
    },
    {
      icon: "device",
      title: "Medical Device Training",
      copy: "Device operation, product-use education, manufacturing, ISO 13485 and FDA QMSR-related quality-system training, field service, installation, maintenance, troubleshooting, HCP education, and software or connected-device training.",
      link: ["Medical Device Translation Services", "https://www.sesen.com/medical-device-translation-services/"],
    },
    {
      icon: "healthcare",
      title: "Healthcare & Clinical Workforce Training",
      copy: "Clinical education, patient safety, HIPAA and privacy training, infection prevention, staff orientation, procedure training, digital health, healthcare compliance, and workforce development.",
      link: ["Healthcare Compliance & Training Translation", "https://www.sesen.com/compliance-training-translation/"],
    },
    {
      icon: "quality",
      title: "SOP, Quality & Safety Training",
      copy: "Keep approved terminology aligned across SOPs, work instructions, training modules, process diagrams, knowledge checks, job aids, and safety materials.",
    },
    {
      icon: "interaction",
      title: "Interactive & Simulation-Based Learning",
      copy: "Branching scenarios, software simulations, device simulations, interactive demonstrations, gamified learning, virtual environments, VR/AR content, and scenario-based assessments.",
    },
  ];

  const audiences = [
    ["clinical", "Clinical Sites & Investigators", "Protocol training, site procedures, GCP learning, safety reporting, clinical systems, and study-specific education."],
    ["healthcare", "Healthcare Professionals", "Product education, device-use instruction, clinical learning, scientific content, medical affairs training, and procedure-based education."],
    ["course", "Patients & Caregivers", "Treatment education, device-use content, procedure preparation, patient-support learning, and accessible digital training."],
    ["quality", "Manufacturing & Quality Teams", "GMP, GLP, SOP, equipment, process, quality-system, safety, and production training for consistent execution."],
    ["device", "Field, Service & Commercial Teams", "Product launch education, field-service instruction, installation and maintenance, sales enablement, and distributor learning."],
    ["globe", "Global Employees", "Onboarding, ethics, privacy, security, code of conduct, corporate compliance, and professional development programs."],
  ];

  const qaAreas = [
    ["Linguistic QA", "Accuracy, completeness, terminology, grammar, style, meaning, consistency, and audience appropriateness."],
    ["Visual QA", "Text expansion, truncation, line breaks, layout, font rendering, graphics, labels, and subtitle presentation."],
    ["Audio & Media QA", "Pronunciation, audio quality, timing, synchronization, subtitle alignment, and media playback."],
    ["Functional QA", "Navigation, buttons, hotspots, branching, interactions, assessments, feedback, simulations, and completion behavior."],
  ];

  const related = [
    ["Multimedia Localization", "Video, voiceover, subtitles, animation, webinars, audio, and broader multimedia production.", "https://www.sesen.com/multimedia-translation-services/"],
    ["Clinical Trial Training Translation", "Investigator, site, protocol, GCP, safety, and study-specific learning for global clinical research.", "https://www.sesen.com/clinical-trial-training-translation/"],
    ["Healthcare Compliance & Training Translation", "Healthcare workforce learning for privacy, patient safety, infection prevention, policy, and compliance programs.", "https://www.sesen.com/compliance-training-translation/"],
    ["Medical Device Translation Services", "Device documentation, labeling, software, technical content, training, and post-market communications.", "https://www.sesen.com/medical-device-translation-services/"],
    ["Pharmaceutical Translation Services", "Clinical, regulatory, labeling, safety, medical, manufacturing, and commercial pharmaceutical content.", "https://www.sesen.com/pharmaceutical-translation-services/"],
    ["Life Sciences Translation Services", "Sesen's broader specialized translation and localization support for regulated global content.", "https://www.sesen.com/life-sciences-translation-services/"],
  ];

  const faqs = [
    ["What are eLearning translation and localization services?", "eLearning translation converts course language from one language into another. eLearning localization goes further by adapting the complete learning experience for the target audience, including on-screen text, narration, subtitles, graphics, interactions, assessments, formatting, technical course elements, and supporting materials. For life sciences training, localization may also require specialized terminology, professional review, multimedia synchronization, and functional course QA."],
    ["What types of eLearning and training content can Sesen localize?", "Sesen supports multilingual localization for life sciences training including GCP, GMP, GLP, SOP and quality training; clinical trial training; medical device training; manufacturing and laboratory programs; HCP education; patient and caregiver learning; safety programs; product training; workforce onboarding; corporate compliance; interactive modules; simulations; training videos; instructor materials; and supporting documentation."],
    ["Can Sesen localize Articulate Storyline, Rise, and Adobe Captivate courses?", "Sesen supports localization workflows for commonly used eLearning authoring environments, including Articulate Storyline, Articulate Rise, and Adobe Captivate, based on the available source assets, authoring environment, and publishing requirements. Our team can help localize course text, graphics, assessments, narration, subtitles, multimedia, and interactive content and provide in-context linguistic and functional QA."],
    ["Can Sesen provide multilingual SCORM or xAPI courses?", "Yes. Sesen supports localization and LMS-ready production workflows involving formats and standards such as SCORM, xAPI, cmi5, AICC, and HTML5, depending on the customer's source course, authoring environment, LMS requirements, and publishing specifications."],
    ["Can you translate quizzes, simulations, and interactive course elements?", "Yes. Sesen localizes assessments, quizzes, feedback, branching scenarios, hotspots, simulations, gamified elements, buttons, navigation, and other interactive content. These elements can also be reviewed after localization to verify that language changes have not disrupted usability, layout, or course behavior."],
    ["Do you provide voiceover and subtitles for eLearning courses?", "Yes. Sesen provides multilingual narration, professional voiceover, subtitle translation, closed captions, timing, synchronization, and related audio/video localization. For appropriate programs, AI-enabled voice production can also be considered as part of a professionally reviewed workflow."],
    ["How does Sesen maintain terminology across course text, narration, subtitles, and assessments?", "Sesen can establish and maintain controlled terminology resources and translation memories for the learning program. Approved terms can then be applied across course screens, scripts, voiceover, subtitles, diagrams, assessments, job aids, SOPs, and related materials to improve consistency throughout the learner experience."],
    ["How do you handle course updates after the original translation is complete?", "When the source course changes, Sesen can use translation memory, terminology resources, previously approved language, and structured update workflows to identify and localize revised content. This helps reduce unnecessary retranslation and maintain consistency across subsequent releases."],
    ["How does Sesen test a localized eLearning course?", "Depending on project scope, localized course QA can include linguistic, visual, audio, and functional review. Checks may cover terminology, completeness, layout, text expansion, graphics, subtitles, synchronization, navigation, interactions, branching, quiz behavior, media playback, and completion messaging."],
    ["Can Sesen support regulated pharmaceutical, clinical, and medical device training?", "Yes. Sesen specializes in life sciences translation and supports multilingual training for pharmaceutical, biotechnology, clinical research, medical device, and healthcare organizations. Programs can include GCP, GMP, GLP, SOP, quality-system, device, clinical, scientific, manufacturing, safety, healthcare, and organization-specific training. Sesen supports accurate and controlled multilingual communication within these environments; customers remain responsible for determining the regulatory, legal, and quality requirements applicable to their programs."],
    ["Can Sesen add new languages after a course has already launched?", "Yes. Sesen supports ongoing language expansion for existing learning programs. Where prior linguistic assets are available, approved terminology, translation memory, style decisions, and course-production knowledge can be reused to help maintain consistency as new languages or markets are added."],
    ["How many languages does Sesen support?", "Sesen provides translation and localization support across 150+ languages, enabling organizations to manage regional and global learning programs through a centralized multilingual workflow."],
    ["How much does eLearning translation cost?", "The cost of eLearning localization depends on factors such as source word count, number of target languages, course format, interactive complexity, graphics, narration, subtitles, multimedia requirements, localization engineering, QA scope, and final publishing requirements. Sesen can review the source course and provide a project estimate based on the actual production workflow rather than treating every course as text translation alone."],
  ];

  return (
    <div className={PAGE}>
      <style>{styles}</style>

      <main>
        <section className={`${PAGE}__hero`}>
          <div className={`${PAGE}__shell ${PAGE}__hero-grid`}>
            <div className={`${PAGE}__hero-copy`}>
              <div className={`${PAGE}__eyebrow`}>LIFE SCIENCES LEARNING LOCALIZATION</div>
              <h1>eLearning &amp; Training Translation Services</h1>
              <p className={`${PAGE}__hero-lead`}>Turn complex life sciences training into multilingual learning experiences that work across languages, markets, and learning environments.</p>
              <p className={`${PAGE}__hero-support`}>Sesen localizes the complete learning experience—from course content and terminology to narration, subtitles, interactions, assessments, course engineering, quality assurance, and LMS-ready multilingual delivery.</p>
              <div className={`${PAGE}__hero-actions`}>
                <a className={`${PAGE}__button ${PAGE}__button--primary`} href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Icon name="arrow" size={18} /></a>
                <a className={`${PAGE}__button ${PAGE}__button--secondary`} href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className={`${PAGE}__trust-band`} aria-label="eLearning localization capabilities">
          <div className={`${PAGE}__shell ${PAGE}__trust-grid`}>
            <div><strong>150+ Languages</strong><span>Global multilingual learning support</span></div>
            <div><strong>Life Sciences Specialists</strong><span>Clinical, pharma, biotech, device, and healthcare</span></div>
            <div><strong>End-to-End Course Localization</strong><span>Text, voice, media, interactions, engineering, and QA</span></div>
            <div><strong>ISO-Certified Quality</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span></div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--anatomy`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              title="One Course. Many Localization Layers."
              intro="A modern learning module can combine linguistic, audiovisual, interactive, and technical content. Sesen brings those elements into one coordinated multilingual workflow so they remain consistent and usable together."
              align="center"
              className={`${PAGE}__mobile-center`}
            />
            <div className={`${PAGE}__anatomy-grid`}>
              <CourseAnatomyVisual />
              <div className={`${PAGE}__layer-list`}>
                {layers.map(([icon, title, copy]) => (
                  <article key={title}>
                    <div className={`${PAGE}__icon-soft`}><Icon name={icon} size={22} /></div>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <p className={`${PAGE}__section-close`}>A multilingual course succeeds when these layers work as <strong>one learning experience</strong>, not as a collection of separately translated assets.</p>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--soft`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              title="Multilingual Training Across the Life Sciences"
              intro="Organizations train people to conduct studies correctly, manufacture consistently, operate technologies safely, understand scientific concepts, follow procedures, and perform their work with confidence. Sesen localizes training across the environments where specialized language and learner understanding matter."
              align="center"
              className={`${PAGE}__mobile-center`}
            />
            <div className={`${PAGE}__training-list`}>
              {trainingAreas.map((area) => (
                <article key={area.title}>
                  <div className={`${PAGE}__training-icon`}><Icon name={area.icon} size={25} /></div>
                  <div className={`${PAGE}__training-copy`}>
                    <h3>{area.title}</h3>
                    <p>{area.copy}</p>
                    {area.link ? (
                      <div className={`${PAGE}__training-links`}>
                        <EditorialLink href={area.link[1]}>{area.link[0]}</EditorialLink>
                        {area.secondaryLink ? <EditorialLink href={area.secondaryLink[1]}>{area.secondaryLink[0]}</EditorialLink> : null}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--workflow`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              eyebrow="END-TO-END PRODUCTION"
              title="From Source Course to LMS-Ready Multilingual Delivery"
              intro="Effective eLearning localization begins with the course itself—not a spreadsheet of exported strings. Sesen coordinates the linguistic, multimedia, interactive, and technical components through a structured production workflow."
              align="left"
            />
            <Workflow />
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--terminology`}>
          <div className={`${PAGE}__shell ${PAGE}__terminology-grid`}>
            <div>
              <div className={`${PAGE}__eyebrow`}>TERMINOLOGY GOVERNANCE</div>
              <h2>Consistent Terminology Across Every Learning Layer</h2>
              <p className={`${PAGE}__lead-copy`}>A specialized term may appear in an SOP, on a course screen, inside an animation, in narration, beneath a video as a subtitle, and finally in an assessment. Those occurrences should not drift apart.</p>
              <p>Sesen uses controlled terminology and translation memory as a governance layer across the learning program—connecting course components, reviewer decisions, and future releases.</p>
              <EditorialLink href="https://www.sesen.com/life-sciences-translation-services/">Life Sciences Translation Services</EditorialLink>
            </div>
            <div className={`${PAGE}__consistency-panel`}>
              <div className={`${PAGE}__consistency-head`}>
                <div><Icon name="terminology" size={23} /></div>
                <div><strong>Approved Language Foundation</strong><span>Terminology + translation memory</span></div>
              </div>
              <div className={`${PAGE}__consistency-list`}>
                {["Course text", "Narration", "Subtitles", "Graphics", "Assessments", "SOPs + job aids"].map((label) => (
                  <div key={label}><span>{label}</span><strong>Consistent across the program</strong></div>
                ))}
              </div>
              <p className={`${PAGE}__consistency-note`}>Approved reviewer decisions can be carried into subsequent modules, revisions, and new language launches instead of being rediscovered course by course.</p>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--audiences`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              title="Learning Designed for the People Who Need to Use It"
              intro="The same scientific content may need to be communicated very differently to an investigator, manufacturing operator, HCP, patient, or field-service engineer. Sesen aligns localization with the learner and the purpose of the training."
              align="center"
              className={`${PAGE}__mobile-center`}
            />
            <div className={`${PAGE}__audience-grid`}>
              {audiences.map(([icon, title, copy]) => (
                <article key={title}>
                  <div className={`${PAGE}__audience-mark`}><Icon name={icon} size={22} /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className={`${PAGE}__outcome-line`}>
              <span>Understanding</span><i />
              <span>Competence</span><i />
              <span>Consistency</span><i />
              <span>Safety</span><i />
              <span>Adoption</span><i />
              <span>Compliance Support</span>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--platforms`}>
          <div className={`${PAGE}__shell ${PAGE}__split`}>
            <div className={`${PAGE}__split-copy`}>
              <h2>Built for Modern Learning Platforms</h2>
              <p className={`${PAGE}__lead-copy`}>Course localization needs to fit the way learning teams actually create, publish, update, and distribute training.</p>
              <p>Sesen supports localization workflows for commonly used authoring environments such as Articulate Storyline, Articulate Rise, and Adobe Captivate, based on the available source assets, authoring environment, and publishing requirements.</p>
              <p>As authoring platforms increasingly support multilingual course management, Sesen adds the specialized life sciences layer: controlled terminology, professional linguistic review, multimedia localization, in-context QA, and version-aware production.</p>
              <div className={`${PAGE}__standard-list`}>
                <div><strong>Authoring environments</strong><span>Storyline · Rise · Captivate</span></div>
                <div><strong>Learning outputs</strong><span>SCORM · xAPI · cmi5 · AICC · HTML5</span></div>
                <div><strong>Localization engineering</strong><span>Text expansion · RTL · fonts · graphics · media · course logic</span></div>
              </div>
              <p>Sesen focuses on <strong>LMS-ready multilingual delivery</strong>, so your learning, IT, or LMS team can complete final validation and deployment within your approved environment.</p>
            </div>
            <PlatformMockup />
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--media ${PAGE}__section--soft`}>
          <div className={`${PAGE}__shell ${PAGE}__media-layout`}>
            <div className={`${PAGE}__media-visual`}>
              <div className={`${PAGE}__media-screen`}>
                <div className={`${PAGE}__media-play`}><Icon name="audio" size={38} /></div>
                <div className={`${PAGE}__subtitle-lines`}><span /><span /></div>
              </div>
              <div className={`${PAGE}__audio-track`}>
                {[2,5,4,8,6,10,5,9,4,7,3,6,2,5].map((v, i) => <i key={i} style={{ height: `${v * 4}px` }} />)}
              </div>
              <div className={`${PAGE}__media-badges`}><span>Narration</span><span>Subtitles</span><span>Video</span><span>Animation</span></div>
            </div>
            <div className={`${PAGE}__split-copy`}>
              <div className={`${PAGE}__eyebrow`}>VOICE & MULTIMEDIA</div>
              <h2>Localize the Learning Experience Beyond the Screen</h2>
              <p className={`${PAGE}__lead-copy`}>Training increasingly combines text with video, narration, demonstrations, animation, and timed media. Sesen coordinates these elements so multimedia reinforces the course instead of becoming a disconnected localization stream.</p>
              <div className={`${PAGE}__media-points`}>
                <div><h3>Multilingual Narration</h3><p>Script localization, native-language voice talent, voice direction, pronunciation management, synchronization, and audio QA.</p></div>
                <div><h3>AI-Enabled Voice Where Appropriate</h3><p>An additional option for suitable training portfolios with substantial content volume or frequent updates, combined with professional review and QA.</p></div>
                <div><h3>Subtitles & Closed Captions</h3><p>Translation, timing, synchronization, line-length management, on-screen readability, and in-context review.</p></div>
              </div>
              <EditorialLink href="https://www.sesen.com/multimedia-translation-services/">Multimedia Localization Services</EditorialLink>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--qa`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              eyebrow="COURSE-LEVEL QA"
              title="Quality Assurance for the Complete Learning Experience"
              intro="A translation can be linguistically correct and still fail inside a course. Sesen reviews multilingual learning beyond translated strings so language, layout, media, interactions, and course behavior can be evaluated together."
              align="left"
            />
            <div className={`${PAGE}__qa-grid`}>
              {qaAreas.map(([title, copy]) => (
                <article key={title}>
                  <div className={`${PAGE}__qa-top`}><Icon name="qa" size={22} /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className={`${PAGE}__qa-statement`}>
              <Icon name="check" size={22} />
              <p>The multilingual course is evaluated as a <strong>learning experience</strong>, not simply as a set of translated files.</p>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--quality`}>
          <div className={`${PAGE}__shell ${PAGE}__quality-grid`}>
            <div>
              <h2>Translation Workflows Designed for Regulated Content</h2>
              <p>Life sciences training may communicate clinical procedures, quality requirements, product instructions, safety information, manufacturing processes, scientific concepts, or organization-specific policies. That can include content used in GCP, GMP, GLP, ISO 13485 and FDA QMSR, HIPAA/privacy, and organization-specific quality environments.</p>
              <p className={`${PAGE}__quality-note`}>Sesen supports multilingual communication within regulated environments; customers remain responsible for determining the regulatory, legal, and quality requirements applicable to their programs.</p>
            </div>
            <div className={`${PAGE}__quality-list`}>
              <div><Icon name="clinical" size={21} /><span><strong>Life Sciences Linguistic Expertise</strong>Qualified professional linguists selected for relevant language and subject-matter experience.</span></div>
              <div><Icon name="quality" size={21} /><span><strong>ISO 17100 · ISO 9001 · ISO 13485</strong>Certified quality frameworks supporting controlled translation and specialized life sciences content.</span></div>
              <div><Icon name="terminology" size={21} /><span><strong>Terminology & Quality Controls</strong>Structured terminology, translation memory, automated checks, professional review, and documented QA.</span></div>
              <div><Icon name="check" size={21} /><span><strong>Human Review Where It Matters</strong>Professional judgment remains central for terminology, scientific meaning, instructional clarity, and regulated content.</span></div>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--versions`}>
          <div className={`${PAGE}__shell ${PAGE}__versions-grid`}>
            <div className={`${PAGE}__split-copy`}>
              <div className={`${PAGE}__eyebrow`}>ONGOING LEARNING PROGRAMS</div>
              <h2>Your Training Changes. Your Approved Language Shouldn't Start Over.</h2>
              <p className={`${PAGE}__lead-copy`}>Protocols are amended. SOPs change. Products evolve. New device features launch. Markets and languages are added. Rebuilding every multilingual version from the beginning creates unnecessary effort and more opportunities for language to drift.</p>
              <div className={`${PAGE}__version-points`}>
                <div><Icon name="check" size={18} /><span><strong>Reuse approved translations</strong> with translation memory.</span></div>
                <div><Icon name="check" size={18} /><span><strong>Protect terminology</strong> across revisions and markets.</span></div>
                <div><Icon name="check" size={18} /><span><strong>Focus review on what changed</strong> when source content is updated.</span></div>
                <div><Icon name="check" size={18} /><span><strong>Expand to new languages</strong> from an established linguistic foundation.</span></div>
              </div>
            </div>
            <VersionVisual />
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--global ${PAGE}__section--soft`}>
          <div className={`${PAGE}__shell ${PAGE}__global-grid`}>
            <div className={`${PAGE}__global-number`}><strong>150+</strong><span>languages</span></div>
            <div>
              <h2>One Learning Program. Global Reach.</h2>
              <p>A global training initiative can involve dozens of courses, multiple audiences, recurring releases, several source formats, and simultaneous language requirements. Sesen provides centralized multilingual support that helps organizations scale while maintaining terminology, translation memory, quality processes, and production consistency across markets.</p>
            </div>
            <div className={`${PAGE}__global-points`}>
              <span><Icon name="globe" size={18} /> Multi-language launches</span>
              <span><Icon name="terminology" size={18} /> Shared terminology</span>
              <span><Icon name="version" size={18} /> Recurring updates</span>
              <span><Icon name="check" size={18} /> Consistent QA</span>
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--ai`}>
          <div className={`${PAGE}__shell ${PAGE}__ai-panel`}>
            <div className={`${PAGE}__ai-icon`}><Icon name="ai" size={31} /></div>
            <div>
              <h2>AI-Enabled Where Appropriate. Expert-Reviewed Where It Matters.</h2>
              <p>AI can support translation assistance, terminology extraction, content reuse, automated quality checks, version comparison, subtitle workflows, and AI-enabled narration. Sesen applies these capabilities within a broader professional localization workflow—not as a replacement for life sciences expertise or human review.</p>
            </div>
            <div className={`${PAGE}__ai-tags`}><span>Terminology extraction</span><span>QA support</span><span>Version comparison</span><span>Content reuse</span><span>Subtitle workflows</span><span>AI-enabled narration</span></div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--related`}>
          <div className={`${PAGE}__shell`}>
            <SectionHeading
              title="Connected Services for Global Life Sciences Learning"
              intro="Training content rarely exists on its own. Connect multilingual learning with the clinical, pharmaceutical, device, scientific, and multimedia content surrounding it."
              align="center"
              className={`${PAGE}__mobile-center`}
            />
            <div className={`${PAGE}__related-list`}>
              {related.map(([title, copy, href]) => (
                <article key={title}>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <EditorialLink href={href}>Explore {title}</EditorialLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--faq ${PAGE}__section--soft`}>
          <div className={`${PAGE}__shell ${PAGE}__faq-layout`}>
            <div className={`${PAGE}__faq-intro`}>
              <h2>eLearning &amp; Training Translation FAQs</h2>
              <p>Practical answers about course formats, multimedia, terminology, QA, updates, and global learning programs.</p>
              <a className={`${PAGE}__button ${PAGE}__button--secondary`} href="https://www.sesen.com/contact-sales/">ASK TEAM SESEN</a>
            </div>
            <div className={`${PAGE}__faq-list`}>
              {faqs.map(([question, answer], index) => (
                <FAQ key={question} question={question} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <p>{answer}</p>
                  {question === "How much does eLearning translation cost?" ? <EditorialLink href="https://www.sesen.com/get-a-quote/">Request an eLearning translation quote</EditorialLink> : null}
                </FAQ>
              ))}
            </div>
          </div>
        </section>

        <section className={`${PAGE}__section ${PAGE}__section--cta`}>
          <div className={`${PAGE}__shell`}>
            <div className={`${PAGE}__cta-panel`}>
              <div>
                <h2>Build Multilingual Training That Works for Every Learner</h2>
                <p>From source-course review and specialized terminology to narration, interactions, engineering, QA, and LMS-ready delivery, Sesen helps life sciences organizations create training that remains clear, consistent, and usable across languages.</p>
              </div>
              <div className={`${PAGE}__cta-actions`}>
                <a className={`${PAGE}__button ${PAGE}__button--white`} href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Icon name="arrow" size={18} /></a>
                <a className={`${PAGE}__cta-text-link`} href="https://www.sesen.com/contact-sales/">Talk with Team Sesen <Icon name="arrow" size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
.${PAGE} {
  --sesen-elearning-blue: #4B6FD8;
  --sesen-elearning-blue-dark: #3659BB;
  --sesen-elearning-blue-deep: #253F8F;
  --sesen-elearning-blue-mid: #6F8BE1;
  --sesen-elearning-blue-soft: #EAF0FF;
  --sesen-elearning-blue-pale: #F5F7FF;
  --sesen-elearning-navy: #17264D;
  --sesen-elearning-ink: #111827;
  --sesen-elearning-body: #46546D;
  --sesen-elearning-muted: #68758B;
  --sesen-elearning-border: #DDE4F2;
  --sesen-elearning-divider: #E9EEF8;
  --sesen-elearning-soft: #F7F9FD;
  --sesen-elearning-white: #FFFFFF;
  --sesen-elearning-light-blue: #C8D6FF;
  width: 100%;
  overflow: hidden;
  background: var(--sesen-elearning-white);
  color: var(--sesen-elearning-body);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
}

.${PAGE} main,
.${PAGE} section,
.${PAGE} div,
.${PAGE} article,
.${PAGE} a,
.${PAGE} button,
.${PAGE} p,
.${PAGE} span,
.${PAGE} h1,
.${PAGE} h2,
.${PAGE} h3 {
  box-sizing: border-box;
}

.${PAGE} h1,
.${PAGE} h2,
.${PAGE} h3 {
  margin: 0;
  color: var(--sesen-elearning-navy);
  font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 500;
}

.${PAGE} h1 {
  max-width: 690px;
  font-size: 48px;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.${PAGE} h2 {
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: normal;
}

.${PAGE} h3 {
  font-size: 22px;
  line-height: 1.3;
}

.${PAGE} p {
  margin: 0;
  color: var(--sesen-elearning-body);
  font-size: 16px;
  line-height: 1.68;
}

.${PAGE} a {
  color: inherit;
  text-decoration: none;
}

.${PAGE} a:focus-visible,
.${PAGE} button:focus-visible {
  outline: 3px solid rgba(75,111,216,.35);
  outline-offset: 4px;
}

.${PAGE} button {
  font: inherit;
}

.${PAGE}__shell {
  width: min(1280px, calc(100% - 112px));
  margin: 0 auto;
}

.${PAGE}__section {
  padding: 96px 0;
}

.${PAGE}__section--soft {
  background: var(--sesen-elearning-soft);
}

.${PAGE}__eyebrow {
  margin-bottom: 14px;
  color: var(--sesen-elearning-blue-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .15em;
  line-height: 1.35;
  text-transform: uppercase;
}


.${PAGE}__heading {
  max-width: 820px;
  margin-bottom: 52px;
}

.${PAGE}__heading--center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.${PAGE}__heading p {
  margin-top: 18px;
  font-size: 18px;
  line-height: 1.65;
}

.${PAGE}__lead-copy {
  font-size: 18px !important;
  line-height: 1.65 !important;
  color: #293954 !important;
}

.${PAGE}__button {
  min-height: 50px;
  padding: 0 26px;
  border: 1px solid transparent;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .035em;
  line-height: 1;
  text-transform: uppercase;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;
}

.${PAGE}__button:hover {
  transform: translateY(-1px);
}

.${PAGE}__button--primary {
  background: var(--sesen-elearning-blue);
  color: var(--sesen-elearning-white) !important;
}

.${PAGE}__button--primary:hover {
  background: var(--sesen-elearning-blue-dark);
}

.${PAGE}__button--secondary {
  background: var(--sesen-elearning-white);
  border-color: var(--sesen-elearning-border);
  color: var(--sesen-elearning-ink) !important;
}

.${PAGE}__button--secondary:hover {
  background: var(--sesen-elearning-blue-pale);
  border-color: #BFCBE5;
}

.${PAGE}__button--white {
  background: var(--sesen-elearning-white);
  color: var(--sesen-elearning-ink) !important;
}

.${PAGE}__button--white:hover {
  background: var(--sesen-elearning-blue-pale);
}

.${PAGE}__editorial-link {
  margin-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--sesen-elearning-blue-dark) !important;
  font-size: 16px;
  font-weight: 700;
}

.${PAGE}__editorial-link svg {
  transition: transform .2s ease;
}

.${PAGE}__editorial-link:hover span {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.${PAGE}__editorial-link:hover svg {
  transform: translateX(3px);
}

/* Hero */
.${PAGE}__hero {
  padding: 96px 0 92px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
}

.${PAGE}__hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(470px, .95fr);
  gap: 64px;
  align-items: center;
}

.${PAGE}__hero-lead {
  max-width: 700px;
  margin-top: 24px;
  color: #293954 !important;
  font-size: 20px !important;
  line-height: 1.62 !important;
}

.${PAGE}__hero-support {
  max-width: 690px;
  margin-top: 18px !important;
  font-size: 17px !important;
}

.${PAGE}__hero-actions {
  margin-top: 32px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.${PAGE}__hero-art {
  position: relative;
  min-height: 500px;
}

.${PAGE}__hero-orbit {
  position: absolute;
  border: 1px solid #E3E9F7;
  border-radius: 50%;
}

.${PAGE}__hero-orbit--one {
  width: 390px;
  height: 390px;
  right: 8px;
  top: 22px;
}

.${PAGE}__hero-orbit--two {
  width: 290px;
  height: 290px;
  right: 58px;
  top: 72px;
  border-style: dashed;
}

.${PAGE}__course-window {
  position: absolute;
  width: 390px;
  left: 8px;
  top: 58px;
  z-index: 2;
  background: #FFFFFF;
  border: 1px solid #D8E1F3;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(37,63,143,.10);
  overflow: hidden;
}

.${PAGE}__window-bar {
  height: 42px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #E8EDF7;
  background: #F9FBFF;
}

.${PAGE}__window-bar > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #C7D1E4;
}

.${PAGE}__window-bar > div {
  margin-left: 8px;
  color: var(--sesen-elearning-muted);
  font-size: 12px;
  font-weight: 600;
}

.${PAGE}__course-screen {
  min-height: 300px;
  display: grid;
  grid-template-columns: 52px 1fr;
}

.${PAGE}__course-sidebar {
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #F6F8FC;
  border-right: 1px solid #E9EEF8;
}

.${PAGE}__course-sidebar span {
  width: 24px;
  height: 8px;
  border-radius: 999px;
  background: #D5DDEC;
}

.${PAGE}__course-sidebar span.active {
  background: var(--sesen-elearning-blue);
}

.${PAGE}__course-main {
  padding: 26px 26px 24px;
}

.${PAGE}__course-kicker {
  color: var(--sesen-elearning-blue-dark);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .12em;
}

.${PAGE}__course-title-line,
.${PAGE}__course-copy-line {
  height: 9px;
  margin-top: 12px;
  border-radius: 999px;
  background: #2D3F62;
}

.${PAGE}__course-title-line { width: 72%; }
.${PAGE}__course-copy-line { width: 90%; height: 6px; background: #BBC7DC; }
.${PAGE}__course-copy-line.short { width: 58%; }

.${PAGE}__course-media {
  height: 118px;
  margin-top: 22px;
  padding: 18px;
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 22px;
  align-items: center;
  background: var(--sesen-elearning-blue-pale);
  border-radius: 15px;
}

.${PAGE}__course-device {
  width: 76px;
  height: 80px;
  padding: 10px;
  border: 1.5px solid var(--sesen-elearning-blue-dark);
  border-radius: 12px;
  background: #FFFFFF;
}

.${PAGE}__course-device span {
  display: block;
  height: 22px;
  border: 1px solid #AFC0E8;
  border-radius: 6px;
}

.${PAGE}__course-device span + span {
  width: 32px;
  height: 6px;
  margin: 12px auto 0;
  border: 0;
  background: var(--sesen-elearning-blue);
}

.${PAGE}__course-wave {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.${PAGE}__course-wave i {
  width: 4px;
  border-radius: 4px;
  background: var(--sesen-elearning-blue);
}

.${PAGE}__course-wave i:nth-child(1) { height: 14px; }
.${PAGE}__course-wave i:nth-child(2) { height: 30px; }
.${PAGE}__course-wave i:nth-child(3) { height: 20px; }
.${PAGE}__course-wave i:nth-child(4) { height: 44px; }
.${PAGE}__course-wave i:nth-child(5) { height: 26px; }
.${PAGE}__course-wave i:nth-child(6) { height: 36px; }
.${PAGE}__course-wave i:nth-child(7) { height: 16px; }

.${PAGE}__course-quiz {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.${PAGE}__course-quiz span {
  height: 27px;
  border: 1px solid #D7E0F1;
  border-radius: 7px;
}

.${PAGE}__hero-flow {
  position: absolute;
  left: 42px;
  bottom: 4px;
  z-index: 3;
  display: flex;
  gap: 8px;
}

.${PAGE}__hero-node {
  min-height: 46px;
  padding: 0 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #DCE4F3;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(37,63,143,.06);
  font-size: 11px;
  font-weight: 700;
}

.${PAGE}__language-stack {
  position: absolute;
  right: 0;
  top: 172px;
  width: 220px;
  height: 205px;
  z-index: 4;
}

.${PAGE}__language-card {
  position: absolute;
  width: 205px;
  min-height: 72px;
  padding: 13px 14px;
  display: grid;
  grid-template-columns: 38px 1fr auto;
  gap: 10px;
  align-items: center;
  border: 1px solid #D8E1F3;
  border-radius: 15px;
  background: #FFFFFF;
  box-shadow: 0 12px 34px rgba(37,63,143,.08);
}

.${PAGE}__language-card--front { top: 0; right: 0; z-index: 3; }
.${PAGE}__language-card--middle { top: 64px; right: 14px; z-index: 2; opacity: .94; }
.${PAGE}__language-card--back { top: 128px; right: 28px; z-index: 1; opacity: .84; }

.${PAGE}__language-label {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-soft);
  border-radius: 10px;
  font-size: 11px;
  font-weight: 800;
}

.${PAGE}__language-card strong,
.${PAGE}__language-card span {
  display: block;
}

.${PAGE}__language-card strong {
  color: var(--sesen-elearning-navy);
  font-size: 13px;
}

.${PAGE}__language-card span {
  margin-top: 2px;
  color: var(--sesen-elearning-muted);
  font-size: 10px;
}

.${PAGE}__language-card > svg {
  color: var(--sesen-elearning-blue-dark);
}

/* Trust */
.${PAGE}__trust-band {
  background: #FFFFFF;
  border-top: 1px solid var(--sesen-elearning-divider);
  border-bottom: 1px solid var(--sesen-elearning-divider);
}

.${PAGE}__trust-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.${PAGE}__trust-grid > div {
  min-height: 112px;
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.${PAGE}__trust-grid > div + div {
  border-left: 1px solid var(--sesen-elearning-divider);
}

.${PAGE}__trust-grid strong {
  color: var(--sesen-elearning-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.${PAGE}__trust-grid span {
  margin-top: 5px;
  color: var(--sesen-elearning-muted);
  font-size: 14px;
  line-height: 1.45;
}

/* Anatomy */
.${PAGE}__section--anatomy {
  background: #FFFFFF;
}

.${PAGE}__anatomy-grid {
  display: grid;
  grid-template-columns: minmax(470px, .95fr) 1.05fr;
  gap: 72px;
  align-items: center;
}

.${PAGE}__anatomy-visual {
  position: relative;
  min-height: 530px;
  background: linear-gradient(180deg, #F9FBFF 0%, #F4F7FE 100%);
  border: 1px solid #E2E9F6;
  border-radius: 30px;
  overflow: hidden;
}

.${PAGE}__anatomy-visual:before,
.${PAGE}__anatomy-visual:after {
  content: "";
  position: absolute;
  width: 310px;
  height: 310px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed #D5DFF1;
  border-radius: 50%;
}

.${PAGE}__anatomy-visual:after {
  width: 430px;
  height: 430px;
  border-style: solid;
  border-color: #E5EAF5;
}

.${PAGE}__anatomy-center {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 210px;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

.${PAGE}__anatomy-center strong,
.${PAGE}__anatomy-center > span {
  display: block;
}

.${PAGE}__anatomy-center strong {
  margin-top: 15px;
  color: var(--sesen-elearning-navy);
  font-size: 15px;
}

.${PAGE}__anatomy-center > span {
  margin-top: 2px;
  color: var(--sesen-elearning-muted);
  font-size: 12px;
}

.${PAGE}__mini-window {
  width: 175px;
  margin: 0 auto;
  border: 1px solid #CCD8EE;
  border-radius: 15px;
  background: #FFFFFF;
  box-shadow: 0 14px 34px rgba(37,63,143,.08);
  overflow: hidden;
}

.${PAGE}__mini-window-top {
  height: 23px;
  background: #F1F5FC;
  border-bottom: 1px solid #E1E7F2;
}

.${PAGE}__mini-window-body {
  padding: 14px;
}

.${PAGE}__mini-window-body > span {
  display: block;
  width: 52%;
  height: 5px;
  margin-bottom: 7px;
  border-radius: 10px;
  background: #C3CEE1;
}

.${PAGE}__mini-window-body > span.wide {
  width: 76%;
  height: 7px;
  background: #344866;
}

.${PAGE}__mini-video {
  height: 65px;
  margin-top: 12px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 8px;
}

.${PAGE}__mini-options {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

.${PAGE}__mini-options i {
  height: 13px;
  border: 1px solid #D5DFF0;
  border-radius: 4px;
}

.${PAGE}__anatomy-node {
  position: absolute;
  z-index: 3;
  width: 145px;
  min-height: 56px;
  padding: 9px 11px;
  display: flex;
  align-items: center;
  gap: 9px;
  background: #FFFFFF;
  border: 1px solid #DDE5F3;
  border-radius: 14px;
  box-shadow: 0 10px 30px rgba(37,63,143,.05);
}

.${PAGE}__anatomy-node > div {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-soft);
  border-radius: 10px;
}

.${PAGE}__anatomy-node > span {
  color: var(--sesen-elearning-navy);
  font-size: 11px;
  font-weight: 700;
  line-height: 1.25;
}

.${PAGE}__anatomy-node--1 { left: 30px; top: 64px; }
.${PAGE}__anatomy-node--2 { right: 26px; top: 65px; }
.${PAGE}__anatomy-node--3 { left: 17px; top: 235px; }
.${PAGE}__anatomy-node--4 { right: 13px; top: 235px; }
.${PAGE}__anatomy-node--5 { left: 66px; bottom: 47px; }
.${PAGE}__anatomy-node--6 { right: 54px; bottom: 47px; }

.${PAGE}__layer-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 34px;
}

.${PAGE}__layer-list article {
  padding: 25px 0;
  display: grid;
  grid-template-columns: 46px 1fr;
  gap: 15px;
  border-bottom: 1px solid var(--sesen-elearning-divider);
}

.${PAGE}__icon-soft {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 12px;
}

.${PAGE}__layer-list h3 {
  font-size: 18px;
}

.${PAGE}__layer-list p {
  margin-top: 7px;
}

.${PAGE}__section-close {
  max-width: 850px;
  margin: 52px auto 0 !important;
  padding-top: 28px;
  border-top: 1px solid var(--sesen-elearning-divider);
  text-align: center;
  font-size: 18px !important;
  color: #293954 !important;
}

/* Training */
.${PAGE}__training-list {
  border-top: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__training-list article {
  min-height: 164px;
  padding: 32px 8px;
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 28px;
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__training-icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #DCE4F3;
  border-radius: 15px;
}

.${PAGE}__training-copy {
  max-width: 900px;
}

.${PAGE}__training-copy p {
  margin-top: 9px;
}

.${PAGE}__training-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0 24px;
}

/* Workflow */
.${PAGE}__section--workflow .${PAGE}__heading {
  margin-bottom: 60px;
}

.${PAGE}__workflow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--sesen-elearning-border);
  border-left: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__workflow-step {
  position: relative;
  min-height: 310px;
  padding: 28px 25px 30px;
  border-right: 1px solid var(--sesen-elearning-border);
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__step-number {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 12px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .04em;
}

.${PAGE}__step-line {
  width: 38px;
  height: 2px;
  margin: 23px 0 22px;
  background: var(--sesen-elearning-blue);
}

.${PAGE}__workflow-step h3 {
  font-size: 20px;
}

.${PAGE}__workflow-step p {
  margin-top: 11px;
}

.${PAGE}__governance-rail {
  min-height: 74px;
  margin-top: 22px;
  padding: 14px 22px;
  display: grid;
  grid-template-columns: 40px auto 1fr auto 1fr auto 1fr auto;
  align-items: center;
  gap: 14px;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border: 1px solid #D6E0F4;
  border-radius: 18px;
}

.${PAGE}__governance-rail > div {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: #FFFFFF;
  border-radius: 11px;
}

.${PAGE}__governance-rail strong {
  color: var(--sesen-elearning-navy);
  font-size: 13px;
}

.${PAGE}__governance-rail > span {
  height: 1px;
  background: #BFCDE9;
}

/* Terminology */
.${PAGE}__section--terminology {
  background: #FFFFFF;
}

.${PAGE}__terminology-grid {
  display: grid;
  grid-template-columns: .88fr 1.12fr;
  gap: 76px;
  align-items: center;
}

.${PAGE}__terminology-grid h2 {
  max-width: 520px;
}

.${PAGE}__terminology-grid p {
  max-width: 590px;
  margin-top: 18px;
}

.${PAGE}__consistency-panel {
  padding: 30px 32px;
  background: var(--sesen-elearning-soft);
  border: 1px solid #E2E8F4;
  border-radius: 28px;
}

.${PAGE}__consistency-head {
  padding-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid #DCE4F1;
}

.${PAGE}__consistency-head > div:first-child {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #D6E0F2;
  border-radius: 13px;
}

.${PAGE}__consistency-head strong,
.${PAGE}__consistency-head span {
  display: block;
}

.${PAGE}__consistency-head strong {
  color: var(--sesen-elearning-navy);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 20px;
  font-weight: 500;
}

.${PAGE}__consistency-head span {
  margin-top: 3px;
  color: var(--sesen-elearning-muted);
  font-size: 14px;
}

.${PAGE}__consistency-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.${PAGE}__consistency-list > div {
  min-height: 88px;
  padding: 18px 18px 18px 0;
  border-bottom: 1px solid #DCE4F1;
}

.${PAGE}__consistency-list > div:nth-child(odd) {
  padding-right: 28px;
  border-right: 1px solid #DCE4F1;
}

.${PAGE}__consistency-list > div:nth-child(even) {
  padding-left: 28px;
}

.${PAGE}__consistency-list span,
.${PAGE}__consistency-list strong {
  display: block;
}

.${PAGE}__consistency-list span {
  color: var(--sesen-elearning-navy);
  font-size: 16px;
  font-weight: 700;
}

.${PAGE}__consistency-list strong {
  margin-top: 4px;
  color: var(--sesen-elearning-muted);
  font-size: 14px;
  font-weight: 400;
}

.${PAGE}__consistency-note {
  max-width: none !important;
  margin-top: 22px !important;
  color: #293954 !important;
  font-size: 16px !important;
}

/* Audiences */
.${PAGE}__section--audiences {
  background: #FFFFFF;
}

.${PAGE}__audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--sesen-elearning-border);
  border-left: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__audience-grid article {
  min-height: 245px;
  padding: 28px 30px 30px;
  border-right: 1px solid var(--sesen-elearning-border);
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__audience-mark {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 12px;
}

.${PAGE}__audience-grid h3 {
  margin-top: 24px;
}

.${PAGE}__audience-grid p {
  margin-top: 11px;
}

.${PAGE}__outcome-line {
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 11px;
  color: var(--sesen-elearning-navy);
  font-size: 13px;
  font-weight: 700;
}

.${PAGE}__outcome-line i {
  width: 24px;
  height: 1px;
  background: var(--sesen-elearning-blue-mid);
}

/* Platforms */
.${PAGE}__section--platforms {
  background: var(--sesen-elearning-blue-pale);
}

.${PAGE}__split,
.${PAGE}__media-layout,
.${PAGE}__versions-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 72px;
  align-items: center;
}

.${PAGE}__split-copy h2 {
  max-width: 560px;
}

.${PAGE}__split-copy > p {
  max-width: 590px;
  margin-top: 18px;
}

.${PAGE}__standard-list {
  margin-top: 28px;
  border-top: 1px solid #D5DEEF;
}

.${PAGE}__standard-list > div {
  padding: 15px 0;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 18px;
  border-bottom: 1px solid #D5DEEF;
}

.${PAGE}__standard-list strong {
  color: var(--sesen-elearning-navy);
  font-size: 13px;
}

.${PAGE}__standard-list span {
  color: var(--sesen-elearning-body);
  font-size: 16px;
}

.${PAGE}__platform-mockup {
  background: #FFFFFF;
  border: 1px solid #D2DCF0;
  border-radius: 26px;
  box-shadow: 0 22px 50px rgba(37,63,143,.08);
  overflow: hidden;
}

.${PAGE}__platform-top {
  min-height: 58px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E6EBF5;
}

.${PAGE}__platform-name {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--sesen-elearning-navy);
  font-size: 13px;
}

.${PAGE}__platform-languages {
  display: flex;
  gap: 5px;
}

.${PAGE}__platform-languages span {
  width: 30px;
  height: 28px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-muted);
  border: 1px solid #DCE3F0;
  border-radius: 8px;
  font-size: 9px;
  font-weight: 800;
}

.${PAGE}__platform-languages span.active {
  color: #FFFFFF;
  background: var(--sesen-elearning-blue);
  border-color: var(--sesen-elearning-blue);
}

.${PAGE}__platform-body {
  min-height: 410px;
  display: grid;
  grid-template-columns: 170px 1fr;
}

.${PAGE}__platform-body aside {
  padding: 18px 13px;
  background: #F7F9FD;
  border-right: 1px solid #E6EBF5;
}

.${PAGE}__platform-body aside div {
  min-height: 44px;
  padding: 10px 9px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--sesen-elearning-muted);
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
}

.${PAGE}__platform-body aside div.active {
  color: var(--sesen-elearning-navy);
  background: var(--sesen-elearning-blue-soft);
}

.${PAGE}__platform-body aside span {
  color: var(--sesen-elearning-blue-dark);
  font-size: 9px;
  font-weight: 800;
}

.${PAGE}__platform-body main {
  padding: 28px;
}

.${PAGE}__mock-label {
  color: var(--sesen-elearning-blue-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .13em;
}

.${PAGE}__mock-title,
.${PAGE}__mock-copy {
  margin-top: 12px;
  height: 8px;
  border-radius: 10px;
  background: #31435F;
}

.${PAGE}__mock-title { width: 64%; }
.${PAGE}__mock-copy { width: 82%; height: 5px; background: #B9C5D9; }

.${PAGE}__mock-media {
  height: 190px;
  margin-top: 23px;
  padding: 24px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 25px;
  align-items: center;
  background: #F5F7FF;
  border-radius: 16px;
}

.${PAGE}__mock-device {
  height: 124px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #D2DDF1;
  border-radius: 15px;
}

.${PAGE}__mock-caption span {
  display: block;
  width: 90%;
  height: 7px;
  margin: 9px 0;
  border-radius: 10px;
  background: #B9C5D9;
}

.${PAGE}__mock-caption span.short { width: 62%; }

.${PAGE}__mock-status {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.${PAGE}__mock-status > div {
  padding: 7px 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}

/* Media */
.${PAGE}__media-layout {
  grid-template-columns: 1.05fr .95fr;
}

.${PAGE}__media-visual {
  min-height: 470px;
  padding: 34px;
  background: #FFFFFF;
  border: 1px solid #DFE6F3;
  border-radius: 28px;
}

.${PAGE}__media-screen {
  position: relative;
  height: 290px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #EDF2FF, #F7F9FD);
  border-radius: 20px;
  overflow: hidden;
}

.${PAGE}__media-screen:before {
  content: "";
  position: absolute;
  width: 190px;
  height: 190px;
  border: 1px solid #CFDAF0;
  border-radius: 50%;
}

.${PAGE}__media-play {
  position: relative;
  width: 82px;
  height: 82px;
  z-index: 2;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #CCD7EC;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(37,63,143,.08);
}

.${PAGE}__subtitle-lines {
  position: absolute;
  left: 50%;
  bottom: 29px;
  width: 60%;
  transform: translateX(-50%);
}

.${PAGE}__subtitle-lines span {
  display: block;
  height: 7px;
  margin: 6px auto;
  border-radius: 10px;
  background: #586A86;
}

.${PAGE}__subtitle-lines span:last-child { width: 72%; }

.${PAGE}__audio-track {
  height: 62px;
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.${PAGE}__audio-track i {
  width: 5px;
  max-height: 50px;
  border-radius: 5px;
  background: var(--sesen-elearning-blue);
}

.${PAGE}__media-badges {
  margin-top: 9px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.${PAGE}__media-badges span {
  padding: 6px 10px;
  color: var(--sesen-elearning-navy);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}

.${PAGE}__media-points {
  margin-top: 30px;
  border-top: 1px solid #DCE4F1;
}

.${PAGE}__media-points > div {
  padding: 18px 0;
  border-bottom: 1px solid #DCE4F1;
}

.${PAGE}__media-points h3 { font-size: 20px; }
.${PAGE}__media-points p { margin-top: 6px; }

/* QA */
.${PAGE}__qa-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--sesen-elearning-border);
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__qa-grid article {
  min-height: 270px;
  padding: 30px 28px;
}

.${PAGE}__qa-grid article + article {
  border-left: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__qa-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--sesen-elearning-blue-dark);
}

.${PAGE}__qa-top span {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .06em;
}

.${PAGE}__qa-grid h3 {
  margin-top: 28px;
}

.${PAGE}__qa-grid p {
  margin-top: 10px;
}

.${PAGE}__qa-statement {
  max-width: 860px;
  margin: 36px auto 0;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 16px;
  text-align: center;
}

.${PAGE}__qa-statement p {
  color: #293954;
  font-size: 17px;
}

/* Quality */
.${PAGE}__section--quality {
  background: var(--sesen-elearning-navy);
}

.${PAGE}__quality-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 80px;
  align-items: start;
}

.${PAGE}__quality-grid h2,
.${PAGE}__quality-grid p,
.${PAGE}__quality-list strong {
  color: #FFFFFF;
}

.${PAGE}__quality-grid h2 {
  max-width: 550px;
}

.${PAGE}__quality-grid p {
  margin-top: 18px;
  color: #D9E2F6;
}

.${PAGE}__quality-note {
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,.15);
  color: #BFCBE2 !important;
  font-size: 16px !important;
}

.${PAGE}__quality-list {
  border-top: 1px solid rgba(255,255,255,.16);
}

.${PAGE}__quality-list > div {
  padding: 22px 0;
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 16px;
  color: var(--sesen-elearning-light-blue);
  border-bottom: 1px solid rgba(255,255,255,.16);
}

.${PAGE}__quality-list span {
  color: #D9E2F6;
  font-size: 16px;
  line-height: 1.55;
}

.${PAGE}__quality-list strong {
  display: block;
  margin-bottom: 3px;
  font-size: 16px;
}

/* Versions */
.${PAGE}__versions-grid {
  grid-template-columns: .9fr 1.1fr;
}

.${PAGE}__version-points {
  margin-top: 28px;
  display: grid;
  gap: 12px;
}

.${PAGE}__version-points > div {
  display: flex;
  gap: 9px;
  align-items: flex-start;
  color: var(--sesen-elearning-blue-dark);
}

.${PAGE}__version-points span {
  color: var(--sesen-elearning-body);
  font-size: 16px;
}

.${PAGE}__version-visual {
  min-height: 440px;
  padding: 38px 30px 30px;
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  grid-template-rows: auto auto;
  column-gap: 8px;
  row-gap: 22px;
  align-items: center;
  position: relative;
  background: var(--sesen-elearning-soft);
  border: 1px solid #E1E7F2;
  border-radius: 28px;
}

.${PAGE}__version-label {
  margin-bottom: 10px;
  color: var(--sesen-elearning-blue-dark);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
}

.${PAGE}__version-sheet {
  min-height: 210px;
  padding: 30px 24px;
  background: #FFFFFF;
  border: 1px solid #D6DFEF;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(37,63,143,.05);
}

.${PAGE}__version-sheet span {
  display: block;
  width: 100%;
  height: 8px;
  margin: 14px 0;
  border-radius: 10px;
  background: #CDD6E6;
}

.${PAGE}__version-sheet span:nth-child(2) { width: 78%; }
.${PAGE}__version-sheet span:nth-child(3) { width: 90%; }
.${PAGE}__version-sheet span:nth-child(4) { width: 67%; }
.${PAGE}__version-sheet span:nth-child(5) { width: 82%; }
.${PAGE}__version-sheet span.approved { background: #9CB0E5; }
.${PAGE}__version-sheet span.changed { background: var(--sesen-elearning-blue); }

.${PAGE}__version-chip {
  min-height: 42px;
  margin-top: 11px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-soft);
  border-radius: 10px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1.35;
}

.${PAGE}__version-chip--blue {
  color: #FFFFFF;
  background: var(--sesen-elearning-blue);
}

.${PAGE}__version-arrow {
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
}

.${PAGE}__version-output {
  position: static;
  grid-column: 1 / -1;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  transform: none;
  text-align: center;
}

.${PAGE}__version-langs {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.${PAGE}__version-langs span {
  width: 36px;
  height: 32px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #D4DDEF;
  border-radius: 9px;
  font-size: 9px;
  font-weight: 800;
}

/* Global */
.${PAGE}__global-grid {
  display: grid;
  grid-template-columns: 180px 1fr 280px;
  gap: 44px;
  align-items: center;
}

.${PAGE}__global-number {
  width: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #DDE5F2;
  border-radius: 50%;
}

.${PAGE}__global-number strong {
  color: var(--sesen-elearning-blue-dark);
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 42px;
  font-weight: 500;
  line-height: 1;
}

.${PAGE}__global-number span {
  margin-top: 7px;
  color: var(--sesen-elearning-muted);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
}

.${PAGE}__global-grid p {
  max-width: 690px;
  margin-top: 14px;
  font-size: 17px;
}

.${PAGE}__global-points {
  display: grid;
  gap: 10px;
}

.${PAGE}__global-points span {
  min-height: 42px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--sesen-elearning-navy);
  background: #FFFFFF;
  border: 1px solid #DDE5F2;
  border-radius: 11px;
  font-size: 16px;
  font-weight: 700;
}

.${PAGE}__global-points svg { color: var(--sesen-elearning-blue-dark); }

/* AI */
.${PAGE}__section--ai {
  padding-top: 76px;
  padding-bottom: 76px;
}

.${PAGE}__ai-panel {
  min-height: 210px;
  padding: 38px 42px;
  display: grid;
  grid-template-columns: 74px 1fr 270px;
  gap: 28px;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid var(--sesen-elearning-border);
  border-radius: 28px;
}

.${PAGE}__ai-icon {
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  color: var(--sesen-elearning-blue-dark);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 18px;
}

.${PAGE}__ai-panel h2 { font-size: 36px; }
.${PAGE}__ai-panel p { max-width: 780px; margin-top: 10px; }

.${PAGE}__ai-tags {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
}

.${PAGE}__ai-tags span {
  min-width: 0;
  padding: 8px 10px;
  color: var(--sesen-elearning-navy);
  background: var(--sesen-elearning-blue-pale);
  border-radius: 9px;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
}

/* Related */
.${PAGE}__related-list {
  border-top: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__related-list article {
  min-height: 120px;
  padding: 24px 4px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 250px;
  gap: 40px;
  align-items: center;
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__related-list p {
  max-width: 760px;
  margin-top: 5px;
}

.${PAGE}__related-list .${PAGE}__editorial-link {
  margin-top: 0;
  justify-self: end;
}

/* FAQ */
.${PAGE}__faq-layout {
  display: grid;
  grid-template-columns: 330px 1fr;
  gap: 80px;
  align-items: start;
}

.${PAGE}__faq-intro {
  position: sticky;
  top: 32px;
}

.${PAGE}__faq-intro h2 {
  font-size: 36px;
}

.${PAGE}__faq-intro p {
  margin-top: 15px;
}

.${PAGE}__faq-intro .${PAGE}__button {
  margin-top: 24px;
}

.${PAGE}__faq-list {
  border-top: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__faq-item {
  border-bottom: 1px solid var(--sesen-elearning-border);
}

.${PAGE}__faq-item > button {
  width: 100%;
  min-height: 78px;
  padding: 20px 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  color: var(--sesen-elearning-navy);
  background: transparent;
  cursor: pointer;
  text-align: left;
  font-family: "Inter Tight", Inter, sans-serif;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.4;
}

.${PAGE}__faq-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: var(--sesen-elearning-blue-dark);
  background: #FFFFFF;
  border: 1px solid #D7E0F0;
  border-radius: 50%;
}

.${PAGE}__faq-answer > div {
  max-width: 820px;
  padding: 0 54px 26px 0;
}

.${PAGE}__faq-answer p {
  font-size: 16px;
}

/* CTA */
.${PAGE}__section--cta {
  padding-top: 84px;
  padding-bottom: 96px;
}

.${PAGE}__cta-panel {
  min-height: 300px;
  padding: 58px 64px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 58px;
  align-items: center;
  background: linear-gradient(135deg, #253F8F 0%, #4B6FD8 100%);
  border-radius: 30px;
}

.${PAGE}__cta-panel h2,
.${PAGE}__cta-panel p {
  color: #FFFFFF;
}

.${PAGE}__cta-panel h2 {
  max-width: 740px;
}

.${PAGE}__cta-panel p {
  max-width: 760px;
  margin-top: 16px;
  color: #E6ECFF;
  font-size: 17px;
}

.${PAGE}__cta-actions {
  min-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
}

.${PAGE}__cta-actions .${PAGE}__button {
  width: 100%;
  justify-content: center;
}

.${PAGE}__cta-text-link {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: #FFFFFF !important;
  font-size: 14px;
  font-weight: 700;
}

.${PAGE}__cta-text-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px;
}

@media (max-width: 1180px) {
  .${PAGE}__shell { width: min(1280px, calc(100% - 80px)); }
  .${PAGE}__hero-grid { grid-template-columns: minmax(0, 1fr) 470px; gap: 36px; }
  .${PAGE}__course-window { width: 350px; }
  .${PAGE}__hero-node span { display: none; }
  .${PAGE}__hero-node { width: 44px; padding: 0; justify-content: center; }
  .${PAGE}__anatomy-grid { gap: 44px; }
  .${PAGE}__workflow-step { min-height: 330px; }
  .${PAGE}__quality-grid { gap: 52px; }
  .${PAGE}__faq-layout { gap: 54px; }
}

@media (max-width: 980px) {
  .${PAGE}__shell { width: calc(100% - 58px); }
  .${PAGE}__section { padding: 84px 0; }
  .${PAGE}__hero { padding: 84px 0; }
  .${PAGE}__hero-grid,
  .${PAGE}__anatomy-grid,
  .${PAGE}__terminology-grid,
  .${PAGE}__split,
  .${PAGE}__media-layout,
  .${PAGE}__quality-grid,
  .${PAGE}__versions-grid,
  .${PAGE}__faq-layout {
    grid-template-columns: 1fr;
  }
  .${PAGE}__hero-grid { gap: 50px; }
  .${PAGE}__hero-art { width: min(600px, 100%); margin: 0 auto; }
  .${PAGE}__trust-grid { grid-template-columns: 1fr 1fr; }
  .${PAGE}__trust-grid > div:nth-child(3) { border-left: 0; border-top: 1px solid var(--sesen-elearning-divider); }
  .${PAGE}__trust-grid > div:nth-child(4) { border-top: 1px solid var(--sesen-elearning-divider); }
  .${PAGE}__layer-list { grid-template-columns: 1fr 1fr; }
  .${PAGE}__workflow { grid-template-columns: 1fr 1fr; }
  .${PAGE}__workflow-step { min-height: 300px; }
  .${PAGE}__audience-grid { grid-template-columns: 1fr 1fr; }
  .${PAGE}__qa-grid { grid-template-columns: 1fr 1fr; }
  .${PAGE}__qa-grid article:nth-child(3) { border-left: 0; border-top: 1px solid var(--sesen-elearning-border); }
  .${PAGE}__qa-grid article:nth-child(4) { border-top: 1px solid var(--sesen-elearning-border); }
  .${PAGE}__platform-mockup,
  .${PAGE}__media-visual,
  .${PAGE}__version-visual { max-width: 720px; width: 100%; margin: 0 auto; }
  .${PAGE}__quality-grid { gap: 44px; }
  .${PAGE}__global-grid { grid-template-columns: 150px 1fr; }
  .${PAGE}__global-points { grid-column: 1 / -1; grid-template-columns: 1fr 1fr; }
  .${PAGE}__global-number { width: 140px; height: 140px; }
  .${PAGE}__global-number strong { font-size: 36px; }
  .${PAGE}__ai-panel { grid-template-columns: 74px 1fr; }
  .${PAGE}__ai-tags { grid-column: 2; grid-template-columns: repeat(3, minmax(0, 1fr)); justify-content: stretch; }
  .${PAGE}__faq-intro { position: static; }
  .${PAGE}__faq-intro { max-width: 700px; }
  .${PAGE}__cta-panel { grid-template-columns: 1fr; gap: 32px; }
  .${PAGE}__cta-actions { min-width: 0; width: auto; flex-direction: row; align-items: center; }
  .${PAGE}__cta-actions .${PAGE}__button,
  .${PAGE}__cta-text-link { width: auto; }
}

@media (max-width: 768px) {
  .${PAGE}__shell { width: calc(100% - 56px); }
  .${PAGE}__section { padding: 72px 0; }
  .${PAGE}__hero { padding: 72px 0; }
  .${PAGE} h1 { font-size: 42px; }
  .${PAGE} h2 { font-size: 32px; }
  .${PAGE}__hero-lead { font-size: 18px !important; }
  .${PAGE}__heading { margin-bottom: 42px; }
  .${PAGE}__heading p { font-size: 17px; }
  .${PAGE}__anatomy-visual { min-height: 500px; }
  .${PAGE}__anatomy-node--1 { left: 20px; }
  .${PAGE}__anatomy-node--2 { right: 20px; }
  .${PAGE}__anatomy-node--3 { left: 12px; }
  .${PAGE}__anatomy-node--4 { right: 12px; }
  .${PAGE}__layer-list { grid-template-columns: 1fr; }
  .${PAGE}__layer-list article { padding: 21px 0; }
  .${PAGE}__training-list article { padding: 28px 0; }
  .${PAGE}__workflow { grid-template-columns: 1fr; border-left: 0; border-top: 0; }
  .${PAGE}__workflow-step {
    min-height: 0;
    padding: 25px 0 28px 68px;
    border-right: 0;
    border-bottom: 1px solid var(--sesen-elearning-border);
  }
  .${PAGE}__workflow-step:first-child { border-top: 1px solid var(--sesen-elearning-border); }
  .${PAGE}__step-number { position: absolute; left: 0; top: 24px; }
  .${PAGE}__step-line { display: none; }
  .${PAGE}__governance-rail {
    grid-template-columns: 40px 1fr;
    gap: 9px 13px;
  }
  .${PAGE}__governance-rail > span { display: none; }
  .${PAGE}__governance-rail > div { grid-row: span 4; align-self: start; }
  .${PAGE}__governance-rail strong { min-height: 30px; display: flex; align-items: center; }
  .${PAGE}__audience-grid { grid-template-columns: 1fr; border-left: 0; border-top: 0; }
  .${PAGE}__audience-grid article { min-height: 0; padding: 26px 0; border-right: 0; }
  .${PAGE}__audience-grid article:first-child { border-top: 1px solid var(--sesen-elearning-border); }
  .${PAGE}__outcome-line { justify-content: flex-start; }
  .${PAGE}__platform-body { grid-template-columns: 125px 1fr; }
  .${PAGE}__mock-media { grid-template-columns: 90px 1fr; }
  .${PAGE}__qa-grid { grid-template-columns: 1fr; }
  .${PAGE}__qa-grid article { min-height: 0; padding: 26px 0; border-left: 0 !important; border-top: 0 !important; border-bottom: 1px solid var(--sesen-elearning-border); }
  .${PAGE}__qa-grid article:last-child { border-bottom: 0; }
  .${PAGE}__qa-grid { border-left: 0; border-right: 0; }
  .${PAGE}__version-visual { grid-template-columns: 1fr 50px 1fr; grid-template-rows: auto auto; padding: 30px 22px 26px; row-gap: 20px; }
  .${PAGE}__version-sheet { padding: 25px 18px; }
  .${PAGE}__global-grid { grid-template-columns: 1fr; }
  .${PAGE}__global-number { margin: 0 auto; }
  .${PAGE}__global-grid > div:nth-child(2) { text-align: center; }
  .${PAGE}__global-grid p { text-align: left; }
  .${PAGE}__global-points { grid-column: auto; }
  .${PAGE}__ai-panel { padding: 30px; grid-template-columns: 64px 1fr; }
  .${PAGE}__ai-icon { width: 60px; height: 60px; }
  .${PAGE}__ai-panel h2 { font-size: 32px; }
  .${PAGE}__related-list article { grid-template-columns: 1fr; gap: 4px; }
  .${PAGE}__related-list .${PAGE}__editorial-link { justify-self: start; }
  .${PAGE}__cta-panel { padding: 44px 38px; }
}

@media (max-width: 768px) {
  /* Keep visual-first desktop compositions in a clearer reading order on smaller screens. */
  .${PAGE}__media-layout .${PAGE}__split-copy { order: -1; }
}

@media (max-width: 620px) {
  .${PAGE}__shell { width: calc(100% - 40px); }
  .${PAGE}__section { padding: 68px 0; }
  .${PAGE}__hero { padding: 68px 0; }
  .${PAGE} h1 { font-size: 42px; }
  .${PAGE} h2 { font-size: 32px; }
  .${PAGE}__hero-actions { flex-direction: column; }
  .${PAGE}__hero-actions .${PAGE}__button { width: 100%; }
  .${PAGE}__hero-art { min-height: 460px; }
  .${PAGE}__course-window { width: calc(100% - 58px); left: 0; }
  .${PAGE}__hero-orbit--one { width: 330px; height: 330px; right: -90px; }
  .${PAGE}__hero-orbit--two { width: 230px; height: 230px; right: -40px; }
  .${PAGE}__language-stack { right: 0; top: 220px; width: 180px; }
  .${PAGE}__language-card { width: 175px; grid-template-columns: 34px 1fr auto; padding: 10px; }
  .${PAGE}__language-label { width: 34px; height: 34px; }
  .${PAGE}__hero-flow { left: 10px; bottom: 0; }
  .${PAGE}__trust-grid { grid-template-columns: 1fr; }
  .${PAGE}__trust-grid > div { min-height: 94px; padding: 20px 0; }
  .${PAGE}__trust-grid > div + div { border-left: 0; border-top: 1px solid var(--sesen-elearning-divider); }
  .${PAGE}__heading--center.${PAGE}__mobile-center { text-align: center; }
  .${PAGE}__heading--center.${PAGE}__mobile-center p { text-align: left; }
  .${PAGE}__anatomy-visual { min-height: 545px; }
  .${PAGE}__anatomy-visual:before { width: 220px; height: 220px; }
  .${PAGE}__anatomy-visual:after { width: 300px; height: 300px; }
  .${PAGE}__anatomy-center { width: 160px; }
  .${PAGE}__mini-window { width: 145px; }
  .${PAGE}__anatomy-node { width: 125px; min-height: 50px; padding: 7px 9px; }
  .${PAGE}__anatomy-node > div { width: 30px; height: 30px; }
  .${PAGE}__anatomy-node--1 { left: 10px; top: 34px; }
  .${PAGE}__anatomy-node--2 { right: 10px; top: 34px; }
  .${PAGE}__anatomy-node--3 { left: 4px; top: 240px; }
  .${PAGE}__anatomy-node--4 { right: 4px; top: 240px; }
  .${PAGE}__anatomy-node--5 { left: 22px; bottom: 28px; }
  .${PAGE}__anatomy-node--6 { right: 20px; bottom: 28px; }
  .${PAGE}__training-list article { grid-template-columns: 48px 1fr; gap: 16px; }
  .${PAGE}__training-icon { width: 44px; height: 44px; border-radius: 12px; }
  .${PAGE}__consistency-panel { padding: 24px 20px; border-radius: 22px; }
  .${PAGE}__consistency-list { grid-template-columns: 1fr; }
  .${PAGE}__consistency-list > div,
  .${PAGE}__consistency-list > div:nth-child(odd),
  .${PAGE}__consistency-list > div:nth-child(even) { padding: 15px 0; border-right: 0; }
  .${PAGE}__consistency-head strong { font-size: 19px; }
  .${PAGE}__platform-top { align-items: flex-start; flex-direction: column; gap: 10px; padding: 14px; }
  .${PAGE}__platform-body { grid-template-columns: 1fr; }
  .${PAGE}__platform-body aside { display: grid; grid-template-columns: 1fr 1fr; border-right: 0; border-bottom: 1px solid #E6EBF5; }
  .${PAGE}__platform-body main { padding: 20px; }
  .${PAGE}__mock-media { grid-template-columns: 80px 1fr; padding: 16px; }
  .${PAGE}__media-visual { min-height: 0; padding: 22px; }
  .${PAGE}__section--media .${PAGE}__split-copy > .${PAGE}__eyebrow,
  .${PAGE}__section--media .${PAGE}__split-copy > h2 { text-align: center; }
  .${PAGE}__media-screen { height: 250px; }
  .${PAGE}__qa-statement { text-align: left; align-items: flex-start; }
  .${PAGE}__version-visual { min-height: 0; grid-template-columns: 1fr; grid-template-rows: auto; gap: 18px; }
  .${PAGE}__version-arrow { transform: rotate(90deg); }
  .${PAGE}__version-output { grid-column: auto; width: 100%; max-width: none; }
  .${PAGE}__version-sheet { min-height: 150px; }
  .${PAGE}__global-points { grid-template-columns: 1fr; }
  .${PAGE}__ai-panel { grid-template-columns: 1fr; text-align: left; }
  .${PAGE}__ai-icon { margin: 0 auto; }
  .${PAGE}__ai-panel h2 { text-align: center; }
  .${PAGE}__ai-tags { grid-column: auto; grid-template-columns: 1fr 1fr; }
  .${PAGE}__faq-intro .${PAGE}__button { width: 100%; }
  .${PAGE}__faq-item > button { font-size: 18px; }
  .${PAGE}__faq-answer > div { padding-right: 0; }
  .${PAGE}__cta-panel { padding: 38px 26px; border-radius: 24px; }
  .${PAGE}__cta-panel h2 { text-align: center; }
  .${PAGE}__cta-actions { width: 100%; flex-direction: column; align-items: stretch; }
  .${PAGE}__cta-actions .${PAGE}__button { width: 100%; }
  .${PAGE}__cta-text-link { width: 100%; justify-content: center; }
}

@media (max-width: 360px) {
  .${PAGE} h1 { font-size: 38px; }
  .${PAGE} h2 { font-size: 30px; }
  .${PAGE}__hero-art { min-height: 435px; }
  .${PAGE}__course-window { width: calc(100% - 38px); }
  .${PAGE}__course-main { padding: 20px 16px; }
  .${PAGE}__course-media { grid-template-columns: 70px 1fr; gap: 13px; padding: 13px; }
  .${PAGE}__course-device { width: 62px; }
  .${PAGE}__language-stack { right: 0; width: 155px; }
  .${PAGE}__language-card { width: 155px; grid-template-columns: 30px 1fr; }
  .${PAGE}__language-card > svg { display: none; }
  .${PAGE}__language-label { width: 30px; height: 30px; }
  .${PAGE}__anatomy-node { width: 112px; }
  .${PAGE}__anatomy-node > span { font-size: 10px; }
  .${PAGE}__anatomy-center { width: 140px; }
  .${PAGE}__standard-list > div { grid-template-columns: 1fr; gap: 4px; }
  .${PAGE}__platform-body aside { grid-template-columns: 1fr; }
  .${PAGE}__mock-media { grid-template-columns: 1fr; height: auto; }
  .${PAGE}__mock-device { height: 90px; }
  .${PAGE}__ai-tags { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .${PAGE}__button,
  .${PAGE}__editorial-link svg {
    transition: none;
  }
}
`;
