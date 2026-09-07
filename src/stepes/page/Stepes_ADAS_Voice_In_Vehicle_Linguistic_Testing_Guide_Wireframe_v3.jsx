import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  eyebrowDark: "#F2A7C6",
  ink: "#111827",
  body: "#344054",
  muted: "#667085",
  border: "#E4E7EC",
  soft: "#F8FAFC",
  dark: "#17111A",
};

const tocItems = [
  ["what-is-testing", "What Is In-Vehicle Linguistic Testing?"],
  ["testing-ecosystem", "Where Linguistic Validation Fits"],
  ["why-context", "Why Translation Review Is Not Enough"],
  ["what-to-test", "What Content Should Be Tested?"],
  ["clear-framework", "The CLEAR Validation Framework"],
  ["risk-based-testing", "Prioritizing Tests by Risk"],
  ["adas-warnings", "Testing Localized ADAS Warnings"],
  ["vehicle-displays", "Testing Text Across Vehicle Displays"],
  ["voice-command-testing", "Multilingual Voice Command Testing"],
  ["tts-validation", "Text-to-Speech Validation"],
  ["cabin-conditions", "Realistic In-Cabin Conditions"],
  ["locale-testing", "Locale and Market-Specific Testing"],
  ["test-environments", "Selecting the Right Test Environment"],
  ["testing-workflow", "A Practical Multilingual Workflow"],
  ["defect-reporting", "Defect Classification and Reporting"],
  ["ota-regression", "Linguistic Regression for OTA Releases"],
  ["automotive-ai", "Testing Conversational Automotive AI"],
  ["testing-checklist", "Automotive Linguistic Testing Checklist"],
  ["preparing-program", "Preparing a Testing Program"],
  ["selecting-partner", "Selecting a Testing Partner"],
  ["stepes-support", "How Stepes Supports Testing"],
  ["faqs", "Frequently Asked Questions"],
  ["sources", "Sources and References"],
];

const takeaways = [
  "A linguistically accurate translation can still fail because of display constraints, timing, vehicle-state logic, speech recognition, pronunciation, or inconsistent visual and spoken messages.",
  "In-vehicle linguistic testing evaluates the complete localized interaction—not only the translated string.",
  "ADAS and driver-facing content should be prioritized according to urgency, required driver action, and the potential impact of misunderstanding.",
  "Automotive voice testing should cover recognition, intent, entities, conversational flow, spoken output, accents, and realistic cabin noise.",
  "Screenshots, prototypes, emulators, bench systems, and real vehicles each support different levels of validation.",
  "Linguistic regression should be integrated into recurring software and over-the-air release workflows.",
  "Linguistic validation complements functional, human-factors, safety, and regulatory testing; it does not replace engineering validation or certification.",
];

const clearFramework = [
  {
    letter: "C",
    title: "Context",
    text: "Vehicle state, feature state, screen, user goal, triggering condition, target market, and required driver action.",
  },
  {
    letter: "L",
    title: "Language",
    text: "Meaning, terminology, brevity, grammar, tone, regional suitability, clarity, and actionability.",
  },
  {
    letter: "E",
    title: "Experience",
    text: "Display fit, rendering, interaction flow, cross-screen consistency, dynamic values, and multimodal alignment.",
  },
  {
    letter: "A",
    title: "Audio and Voice",
    text: "ASR, intent recognition, entities, accents, TTS, pronunciation, turn-taking, and cabin conditions.",
  },
  {
    letter: "R",
    title: "Release Readiness",
    text: "Defect severity, evidence, ownership, retesting, regression, approval, and updates to reusable language assets.",
  },
];

const riskRows = [
  {
    tier: "Tier 1",
    name: "Potentially Safety-Relevant Driver Communication",
    examples:
      "Collision alerts, takeover requests, intervention messages, urgent system limitations",
    validation:
      "Specialist translation, independent review, approved terminology, in-context validation, cross-channel comparison, scenario testing, and documented retest",
  },
  {
    tier: "Tier 2",
    name: "Operational and Feature-Control Content",
    examples:
      "ADAS settings, parking instructions, charging status, feature activation, and system availability",
    validation:
      "In-context linguistic review, terminology validation, state coverage, display checks, and functional coordination",
  },
  {
    tier: "Tier 3",
    name: "Convenience and Informational Content",
    examples:
      "Media, personalization, and nonurgent connected-service content",
    validation:
      "Linguistic QA, representative interface testing, terminology review, and layout validation",
  },
];

const voiceFlow = [
  ["Invocation", "The user activates the assistant by wake phrase, button, or on-screen control."],
  ["Recognition", "Automatic speech recognition converts the utterance into text or tokens."],
  ["Interpretation", "The system identifies the intended action and extracts names, values, or other entities."],
  ["Action", "The vehicle or application performs, rejects, or requests clarification for the action."],
  ["Response", "The system confirms, explains, or recovers through visual and spoken output."],
];

const environments = [
  {
    level: "Level 1",
    title: "Annotated Screenshots and Design Files",
    best: "Early context, terminology, layout risks, and visual consistency",
    limits: "No live behavior, timing, voice interaction, or vehicle-state logic",
  },
  {
    level: "Level 2",
    title: "Prototypes and Recorded Flows",
    best: "Interaction sequence, navigation, message hierarchy, and preliminary timing",
    limits: "Coverage depends on prototype fidelity and available scenarios",
  },
  {
    level: "Level 3",
    title: "Emulators and Simulators",
    best: "Locale switching, repeatable scenarios, interface behavior, display configurations, and early regression",
    limits: "May not reproduce production hardware, acoustics, or every integrated system",
  },
  {
    level: "Level 4",
    title: "Bench and Hardware-Integrated Environments",
    best: "Integrated displays, audio paths, microphones, vehicle-state simulation, and connected components",
    limits: "May not reproduce the complete cabin and road environment",
  },
  {
    level: "Level 5",
    title: "Vehicle Testing",
    best: "Actual displays, cabin acoustics, microphone placement, road noise, occupant behavior, and final high-priority scenarios",
    limits: "Higher access, scheduling, safety, and coordination requirements",
  },
];

const workflow = [
  ["Define the Scope", "Document features, languages, markets, vehicle variants, builds, display surfaces, voice capabilities, vehicle states, risk priorities, evidence, and acceptance criteria."],
  ["Prepare Language Assets", "Assemble translations, translation memory, terminology, style guidance, string IDs, character limits, screenshots, command inventories, intent definitions, entities, and pronunciation resources."],
  ["Build the Risk Model", "Identify potentially safety-relevant communication, operational interactions, high-frequency commands, market-sensitive terminology, previous defects, and changed functions."],
  ["Design the Test Matrix", "Map each feature and scenario to its trigger, vehicle state, screen or channel, locale, speaker profile, environmental condition, and expected result."],
  ["Prepare the Environment", "Confirm the correct build, language pack, vehicle configuration, accounts, connectivity, audio settings, test data, logging, and evidence permissions."],
  ["Execute Scripted and Exploratory Tests", "Use scripted scenarios for repeatable coverage and controlled exploratory testing for natural phrasing, dynamic content, and recovery behavior."],
  ["Record Complete Defects", "Capture enough context, evidence, and reproduction detail for another team member to understand and repeat the issue."],
  ["Triage and Resolve", "Coordinate among linguists, localization engineers, HMI teams, voice engineers, developers, functional QA, product owners, and other responsible specialists."],
  ["Retest the Updated Build", "Verify the correction in the environment where the issue occurred rather than approving a text-only change."],
  ["Update Reusable Assets", "Return approved decisions to translation memory, termbases, style guides, source guidance, command inventories, pronunciation lexicons, and regression suites."],
];

const defectRows = [
  ["Translation Accuracy", "Incorrect meaning, addition, omission, or mistranslation"],
  ["Terminology", "Wrong feature name, inconsistent state term, or unapproved abbreviation"],
  ["Clarity and Actionability", "Ambiguous warning, unclear instruction, or missing required action"],
  ["Context", "Correct translation used in the wrong state, screen, or scenario"],
  ["Consistency", "Different terms across screens, speech, applications, or documentation"],
  ["Rendering", "Truncation, clipping, overlap, broken line break, or missing glyph"],
  ["Locale Behavior", "Wrong unit, date, number, plural form, script direction, or fallback"],
  ["ASR", "Utterance transcribed incorrectly or not recognized"],
  ["Intent", "Recognized words mapped to the wrong action"],
  ["Entity", "Name, number, destination, or parameter extracted incorrectly"],
  ["TTS Pronunciation", "Incorrect pronunciation of a term, name, acronym, or value"],
  ["TTS Intelligibility", "Pace, stress, pause, segmentation, or acoustic clarity problem"],
  ["Multimodal Alignment", "Spoken and displayed information disagree"],
  ["Interaction Flow", "Incorrect question, confirmation, cancellation, or recovery behavior"],
  ["Functional", "Software behavior differs from the expected result"],
  ["Source Content", "Ambiguous, inconsistent, or unsuitable source language"],
];

const aiDimensions = [
  ["Linguistic Quality", "Is the response accurate, fluent, natural, and market-appropriate?"],
  ["Intent Fulfillment", "Did the system understand and complete the request?"],
  ["Grounding", "Does the response match available vehicle and application information?"],
  ["Action Confirmation", "Does the response accurately describe what occurred?"],
  ["Concision", "Is the response appropriately brief for the driving context?"],
  ["Context Retention", "Does the assistant preserve relevant information across turns?"],
  ["Recovery", "Does it clarify, decline, or recover appropriately when uncertain?"],
  ["Cross-Language Consistency", "Does the experience provide comparable meaning across supported locales?"],
  ["Tone", "Is the language helpful and suitable for the brand and situation?"],
  ["Fallback", "Does the interaction remain understandable when data, connectivity, or support is limited?"],
];

const checklistGroups = [
  {
    title: "Before Testing",
    items: [
      "Confirm the software build, vehicle configuration, languages, and locales.",
      "Identify relevant features, screens, voice capabilities, and vehicle states.",
      "Load approved terminology, translation memory, and style guidance.",
      "Prepare command, intent, entity, and pronunciation inventories.",
      "Define defect categories, severity, evidence, security, and recording requirements.",
    ],
  },
  {
    title: "ADAS and Driver Messages",
    items: [
      "Verify meaning in the triggered scenario and confirm the required driver action.",
      "Preserve distinctions among feature states and levels of urgency.",
      "Validate character limits, display duration, and layered message behavior.",
      "Compare cluster, HUD, center-display, and spoken messages.",
      "Escalate potentially misleading or responsibility-shifting language.",
    ],
  },
  {
    title: "Vehicle Interface",
    items: [
      "Check truncation, clipping, overlap, line wrapping, fonts, glyphs, and text direction.",
      "Test buttons, menus, dialogs, notifications, variables, units, numbers, dates, and plurals.",
      "Compare terminology across screens, applications, speech, and documentation.",
      "Verify parked, idling, moving, driver, and passenger behavior.",
      "Test representative long and short dynamic values.",
    ],
  },
  {
    title: "Voice Input",
    items: [
      "Test supported invocation methods, expected commands, paraphrases, and regional synonyms.",
      "Test representative accents, speaking speeds, and second-language speech where relevant.",
      "Validate intent recognition, names, destinations, numbers, and other entities.",
      "Test follow-up questions, context retention, confirmation, correction, cancellation, and recovery.",
      "Repeat representative scenarios under controlled cabin-noise conditions.",
    ],
  },
  {
    title: "TTS and Spoken Output",
    items: [
      "Review names, roads, brands, acronyms, numbers, units, dynamic values, and generated sentences.",
      "Evaluate rate, pauses, stress, segmentation, emphasis, and intelligibility.",
      "Compare spoken and displayed information and confirm the selected language and voice.",
      "Test cloud, local, mixed-language, and fallback behavior.",
      "Confirm that the response matches the action actually performed.",
    ],
  },
  {
    title: "Defects, Release, and Regression",
    items: [
      "Record exact reproduction conditions and appropriate visual or audio evidence.",
      "Separate linguistic, recognition, intent, TTS, locale, and functional issues.",
      "Assign severity and ownership consistently, then retest the corrected build.",
      "Prioritize changed interactions, higher-risk scenarios, shared terminology, and previous defects.",
      "Update reusable language and regression assets after approval.",
    ],
  },
];

const relatedResources = [
  {
    title: "Automotive HMI and Infotainment Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/",
    description:
      "Learn how interface context, character limits, scripts, display design, voice, and software architecture affect multilingual cockpit experiences.",
  },
  {
    title: "Localization for Automotive OTA Software Updates",
    href: "https://www.stepes.com/resources/localization-guides/automotive-ota-software-localization/",
    description:
      "Build continuous localization, version control, change detection, and validation into recurring multilingual vehicle software releases.",
  },
  {
    title: "Automotive Terminology Management Across Models and Markets",
    href: "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/",
    description:
      "Create governed terminology spanning vehicle platforms, software, documentation, departments, suppliers, and markets.",
  },
  {
    title: "SAE J2450 for Automotive Translation Quality",
    href: "https://www.stepes.com/resources/translation-guides/sae-j2450-automotive-translation-quality/",
    description:
      "Understand what the metric evaluates and why HMI, voice, regulatory, and in-context content require additional review methods.",
  },
  {
    title: "EV Battery and Charging Content Localization",
    href: "https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization/",
    description:
      "Manage EV terminology, technical content, software interfaces, customer communication, and lifecycle updates across languages.",
  },
  {
    title: "Automotive Technical Manual Translation Guide",
    href: "https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/",
    description:
      "Plan structured-content, DITA/XML, translation reuse, terminology, model-year updates, and multilingual publishing workflows.",
  },
];

const sourceLinks = [
  ["ISO 15005 — Dialogue management principles and compliance procedures", "https://www.iso.org/standard/69238.html", "International Organization for Standardization"],
  ["ISO 15006 — Specifications for in-vehicle auditory presentation", "https://www.iso.org/standard/55322.html", "International Organization for Standardization"],
  ["ISO 15008 — Specifications and test procedures for in-vehicle visual presentation", "https://www.iso.org/standard/62784.html", "International Organization for Standardization"],
  ["ISO 17287 — Procedure for assessing suitability for use while driving", "https://www.iso.org/standard/30597.html", "International Organization for Standardization"],
  ["ISO/TR 16352 — In-vehicle warning systems", "https://www.iso.org/standard/37859.html", "International Organization for Standardization"],
  ["ISO 26262 — Road vehicles — Functional safety", "https://www.iso.org/standard/68383.html", "International Organization for Standardization"],
  ["ISO 21448 — Road vehicles — Safety of the intended functionality", "https://www.iso.org/standard/77490.html", "International Organization for Standardization"],
  ["ISO/TS 16951 — Procedures for determining priority of on-board messages", "https://www.iso.org/standard/81103.html", "International Organization for Standardization"],
  ["Android Automotive driver-distraction guidelines", "https://source.android.com/docs/automotive/driver_distraction/guidelines", "Android Open Source Project"],
  ["Test Android apps for cars", "https://developer.android.com/training/cars/testing", "Android Developers"],
  ["Test using the Android Automotive OS emulator", "https://developer.android.com/training/cars/testing/emulator", "Android Developers"],
  ["Android multi-display support", "https://source.android.com/docs/core/display/multi_display/displays", "Android Open Source Project"],
  ["Voice actions for media apps", "https://developer.android.com/training/cars/media/voice-actions", "Android Developers"],
  ["Speech Synthesis Markup Language (SSML)", "https://www.w3.org/TR/speech-synthesis/", "World Wide Web Consortium"],
  ["Pronunciation Lexicon Specification", "https://www.w3.org/TR/pronunciation-lexicon/", "World Wide Web Consortium"],
  ["Unicode Locale Data Markup Language", "https://www.unicode.org/reports/tr35/", "Unicode Consortium"],
  ["UN Regulation No. 156 — Software update and software update management system", "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update", "United Nations Economic Commission for Europe"],
];

const faqs = [
  {
    q: "What Is Automotive Linguistic Testing?",
    a: "Automotive linguistic testing validates translated driver warnings, interface text, voice commands, and spoken output in the vehicle software, display, speech system, and operating context where users experience them. It evaluates language, presentation, interaction, speech behavior, locale handling, and cross-channel consistency.",
  },
  {
    q: "How Is Linguistic Testing Different From Translation Review?",
    a: "Translation review evaluates the language itself. Linguistic testing evaluates the language inside the product. It can identify truncation, incorrect context, mismatched screen and speech content, recognition problems, TTS pronunciation issues, incorrect dynamic values, and vehicle-state behavior that may not be visible in a translation file.",
  },
  {
    q: "What ADAS Content Should Be Linguistically Tested?",
    a: "Testing may cover warnings, alerts, intervention messages, system states, feature limitations, driver instructions, sensor-obstruction messages, availability notices, settings, and related spoken output. Test depth should reflect the urgency, required driver action, and potential impact of misunderstanding.",
  },
  {
    q: "Does Linguistic Testing Validate ADAS Performance?",
    a: "No. Linguistic testing evaluates how the system communicates with users. It does not validate cameras, radar, sensors, perception algorithms, braking behavior, steering behavior, or other vehicle functions. Those areas require the appropriate engineering, functional, safety, and regulatory validation.",
  },
  {
    q: "Can Voice Commands Be Tested Without a Production Vehicle?",
    a: "Yes. Early testing can use command inventories, recorded interactions, prototypes, emulators, simulators, development builds, and bench environments. Real-vehicle testing remains valuable for cabin acoustics, microphone behavior, integrated displays, vehicle states, and final high-priority scenarios.",
  },
  {
    q: "How Are Accents and Regional Language Variants Tested?",
    a: "Teams select representative speakers according to the target population, market, language variation, and interaction risk. Coverage may include regional accents, speaking speeds, age groups, and second-language users. The objective is representative performance data, not an unrealistic claim of testing every possible speaker.",
  },
  {
    q: "What Should Be Reviewed in Automotive TTS Output?",
    a: "Review pronunciation, intelligibility, pace, stress, pauses, abbreviations, names, road names, numbers, units, dynamic values, language fallback, and consistency with the displayed text and performed action.",
  },
  {
    q: "Does Linguistic Testing Replace Functional-Safety or SOTIF Validation?",
    a: "No. Linguistic testing may identify unclear or potentially misleading driver communication, but it does not replace ISO 26262 functional-safety activities, ISO 21448 SOTIF activities, human-factors evaluation, system validation, or regulatory approval.",
  },
  {
    q: "When Is Linguistic Regression Testing Needed?",
    a: "Regression should be considered when updates affect strings, warning logic, feature states, interface layouts, speech models, command grammars, intents, TTS voices, pronunciation resources, supported locales, navigation data, or fallback behavior. Testing should prioritize affected and higher-risk scenarios.",
  },
  {
    q: "How Many Languages Can Be Tested in Parallel?",
    a: "Parallel testing depends on build availability, test-environment access, vehicle configurations, speaker requirements, and the number of reviewers who can be coordinated consistently. Shared instructions, terminology, severity rules, and reporting standards are essential when multiple languages are tested at the same time.",
  },
  {
    q: "What Information Is Needed to Scope a Project?",
    a: "Useful information includes the languages, target markets, vehicle systems, content types, available builds, display surfaces, voice capabilities, vehicle states, command inventories, terminology, test environments, release schedule, acceptance criteria, and required evidence.",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={open ? "chevron open" : "chevron"}>
      <path d="M5 7.5 10 12.5 15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m4 10.5 3.4 3.4L16 5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a className="editorial-link" href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SourceNote({ children }) {
  return <div className="source-note">{children}</div>;
}

function Section({ id, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`article-section ${className}`.trim()}>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;
  return (
    <div className="faq-item">
      <h3>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{item.q}</span>
          <ChevronIcon open={open} />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="faq-answer">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

function MobileToc() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-toc">
      <button className="mobile-toc-trigger" aria-expanded={open} aria-controls="mobile-toc-list" onClick={() => setOpen((v) => !v)}>
        <span>In This Guide</span>
        <ChevronIcon open={open} />
      </button>
      <div id="mobile-toc-list" hidden={!open} className="mobile-toc-list">
        {tocItems.map(([id, label]) => (
          <a key={id} href={sectionUrl(id)} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function StepesADASVoiceInVehicleLinguisticTestingGuide() {
  const [activeId, setActiveId] = useState(tocItems[0][0]);
  const sectionIds = useMemo(() => tocItems.map(([id]) => id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;
    const nodes = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -68% 0px", threshold: [0, 0.05, 0.2] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <style>{styles}</style>
      <main className="guide-page">
        <nav className="breadcrumb shell" aria-label="Breadcrumb">
          <ol>
            <li><a href="https://www.stepes.com/resources/">Resources</a></li>
            <li><a href="https://www.stepes.com/resources/localization-guides/">Localization Guides</a></li>
            <li aria-current="page">ADAS, Voice, and In-Vehicle Linguistic Testing Guide</li>
          </ol>
        </nav>

        <header className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">AUTOMOTIVE LOCALIZATION GUIDE</p>
            <h1>ADAS, Voice, and In-Vehicle Linguistic Testing Guide</h1>
            <p className="hero-deck">
              Learn how to validate localized advanced driver assistance system (ADAS) warnings, vehicle interfaces,
              voice commands, speech recognition, and text-to-speech output across languages, accents, vehicle states,
              display environments, and realistic in-cabin conditions.
            </p>
            <div className="hero-meta" aria-label="Guide audience">
              <span>Specialist Guide</span>
              <span aria-hidden="true">•</span>
              <span>For OEM, Tier 1, HMI, ADAS, voice, QA, and localization teams</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href={sectionUrl("what-is-testing")}>
                <span>Explore the Guide</span><ArrowIcon />
              </a>
              <a className="button secondary" href={sectionUrl("testing-checklist")}>
                <span>Jump to the Checklist</span><ArrowIcon />
              </a>
            </div>
          </div>
        </header>

        <section className="takeaways-section">
          <div className="shell takeaways-layout">
            <div>
              <p className="eyebrow">KEY TAKEAWAYS</p>
              <h2>Validate the Driver Experience, Not Just the Translation</h2>
              <p className="takeaway-lead">
                Automotive language must remain accurate when translated, clear when displayed, understandable when
                spoken, and reliable when used under real vehicle conditions.
              </p>
            </div>
            <div className="takeaways-list">
              {takeaways.map((item) => (
                <div className="takeaway-item" key={item}>
                  <span className="check-mark"><CheckIcon /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MobileToc />

        <div className="article-shell shell">
          <aside className="desktop-toc" aria-label="In this guide">
            <p className="toc-title">In This Guide</p>
            <nav>
              {tocItems.map(([id, label]) => (
                <a key={id} className={activeId === id ? "active" : ""} href={sectionUrl(id)} aria-current={activeId === id ? "location" : undefined}>
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="article-flow">
            <article className="article-content">
            <Section
              id="what-is-testing"
              title="What Is In-Vehicle Linguistic Testing?"
              intro="In-vehicle linguistic testing validates translated interface text, driver warnings, voice commands, and spoken system output within the software, speech system, display, vehicle configuration, and operating context for which the content was localized."
            >
              <p>
                Traditional translation review asks whether a target-language string accurately expresses the source
                meaning. In-vehicle testing asks whether the complete localized interaction communicates correctly when
                it is seen, heard, spoken, and acted upon.
              </p>
              <ul className="editorial-list">
                <li>Does the message fit the instrument cluster, head-up display, or center screen?</li>
                <li>Is its meaning clear in the current vehicle and feature state?</li>
                <li>Can a driver understand it within the available display or response time?</li>
                <li>Does the spoken warning agree with the displayed warning?</li>
                <li>Can target-market users successfully speak the command?</li>
                <li>Does the speech recognizer identify the correct intent and dynamic values?</li>
                <li>Is text-to-speech output intelligible and naturally pronounced?</li>
                <li>Does the experience remain consistent after a software update?</li>
              </ul>

              <div className="comparison-block" role="region" aria-label="Comparison of automotive validation disciplines">
                <h3>Linguistic Testing Compared With Related Disciplines</h3>
                <div className="comparison-rows">
                  {[
                    ["Translation Review", "Is the target language accurate, complete, fluent, and appropriate?"],
                    ["Linguistic Testing", "Does the localized interaction communicate and function correctly in context?"],
                    ["Functional Testing", "Does the software or vehicle feature behave according to its specification?"],
                    ["Usability Testing", "Can intended users understand and complete the interaction effectively?"],
                    ["Human-Factors Evaluation", "Is the interaction suitable for human use under the defined conditions?"],
                    ["Safety Validation", "Does the system satisfy applicable engineering and safety requirements?"],
                    ["Regulatory Testing", "Does the product meet applicable market and approval requirements?"],
                  ].map(([name, question]) => (
                    <div className="comparison-row" key={name}>
                      <h4>{name}</h4>
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                These disciplines overlap, but they are not interchangeable. Linguistic testers should identify and
                escalate functional, usability, or potentially safety-relevant issues when discovered. Formal
                classification and approval remain with the responsible engineering, product, human-factors, safety,
                and compliance teams.
              </p>
              <p>
                This guide focuses on verification and validation after localized language appears in the interface or
                speech system. For localization design, interface preparation, and implementation guidance, see the
                <a className="inline-link" href="https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/">Automotive HMI and Infotainment Localization Guide</a>.
              </p>
            </Section>

            <Section
              id="testing-ecosystem"
              title="Where Linguistic Validation Fits in Automotive Testing"
              intro="Automotive linguistic validation connects localization with human-machine interface (HMI) development, voice engineering, software quality assurance, human factors, ADAS validation, product management, and release governance."
            >
              <p>
                Relevant standards provide useful context for the environment in which localized language must perform.
                ISO 15005 addresses ergonomic principles for dialogues between drivers and in-vehicle systems. ISO 15006
                addresses auditory presentation through speech and sounds, while ISO 15008 addresses visual presentation
                and legibility. ISO/TS 16951 provides procedures for prioritizing onboard messages, ISO/TR 16352 reviews
                warning-system presentation, and ISO 17287 offers a procedure for assessing suitability for use while driving.
              </p>
              <p>
                These standards do not create a linguistic certification framework. They help teams understand the
                dialogue, presentation, priority, and usage conditions surrounding localized driver communication.
              </p>
              <div className="callout">
                <p className="callout-label">IMPORTANT SCOPE DISTINCTION</p>
                <p>
                  Linguistic validation complements automotive functional, usability, human-factors, safety, and
                  regulatory testing. It does not certify vehicle behavior, sensor performance, ADAS functionality, or
                  regulatory compliance.
                </p>
              </div>
              <p>
                ISO 26262 addresses hazards caused by malfunctioning behavior in safety-related electrical and electronic
                systems. ISO 21448 addresses unreasonable risk arising from functional insufficiencies or performance
                limitations of intended functionality. Linguistic validation may support the clarity and consistency of
                content associated with these programs, but it does not replace functional-safety or Safety of the
                Intended Functionality (SOTIF) activities.
              </p>
              <SourceNote>
                Standards context: <a href="https://www.iso.org/standard/69238.html" target="_blank" rel="noreferrer">ISO 15005</a>,{" "}
                <a href="https://www.iso.org/standard/55322.html" target="_blank" rel="noreferrer">ISO 15006</a>,{" "}
                <a href="https://www.iso.org/standard/62784.html" target="_blank" rel="noreferrer">ISO 15008</a>,{" "}
                <a href="https://www.iso.org/standard/81103.html" target="_blank" rel="noreferrer">ISO/TS 16951</a>,{" "}
                <a href="https://www.iso.org/standard/37859.html" target="_blank" rel="noreferrer">ISO/TR 16352</a>,{" "}
                <a href="https://www.iso.org/standard/30597.html" target="_blank" rel="noreferrer">ISO 17287</a>,{" "}
                <a href="https://www.iso.org/standard/68383.html" target="_blank" rel="noreferrer">ISO 26262</a>, and{" "}
                <a href="https://www.iso.org/standard/77490.html" target="_blank" rel="noreferrer">ISO 21448</a>.
              </SourceNote>
            </Section>

            <Section
              id="why-context"
              title="Why Translation Review Alone Is Not Enough"
              intro="Automotive strings are often translated outside the environment where they will appear. A spreadsheet can support linguistic review, but it rarely captures the complete driver interaction."
            >
              <h3>Strings Can Be Ambiguous Without Context</h3>
              <p>
                A label such as “Resume,” “Ready,” “Limited,” or “Unavailable” can have several meanings depending on the
                system, feature state, and user action. Without screenshots, state descriptions, product definitions, or
                developer notes, a translator may not know whether “Resume” continues media playback or reactivates
                cruise control, or whether “Limited” describes sensor visibility, connectivity, power, or feature
                performance.
              </p>

              <h3>Correct Text May Not Fit</h3>
              <p>
                An instrument cluster may permit only a short warning, while a center display can provide a title and
                supporting explanation. A head-up display may show very few words. A translated button label may not wrap,
                and a dynamic value may expand unpredictably. The right solution is not always to shorten the target text.
                The team may need to revise the source, change the interface, use separate display strings, or approve a
                controlled abbreviation.
              </p>

              <h3>Vehicle State Changes the Interaction</h3>
              <p>
                The same feature can behave differently while the vehicle is parked, idling, or moving. Some controls may
                become restricted, a full explanation may become a shorter message, or a passenger interaction may remain
                available while a driver interaction changes. Localized content should be tested in the states in which it
                is actually presented.
              </p>

              <h3>Visual and Spoken Messages May Diverge</h3>
              <p>
                A driver may see one term on the cluster, hear another from the voice system, and encounter a third in the
                owner manual. Even when each translation is understandable on its own, inconsistency can make the feature
                harder to learn and use.
              </p>

              <h3>A Valid Command May Still Fail</h3>
              <p>
                A natural target-language command may not be recognized because the speech system expects another phrase,
                word order, synonym, pronunciation, or entity format. Voice interactions should therefore be tested across
                the complete processing path rather than evaluated from the prompt text alone.
              </p>
              <SourceNote>
                Platform context: <a href="https://source.android.com/docs/automotive/driver_distraction/guidelines" target="_blank" rel="noreferrer">Android Automotive driver-distraction guidelines</a> describe how behavior can vary by driving state.
              </SourceNote>
            </Section>

            <Section
              id="what-to-test"
              title="What Automotive Content and Interactions Should Be Tested?"
              intro="A comprehensive program should cover the driver-facing language relevant to the vehicle, feature set, target markets, and release scope."
            >
              <div className="content-scope-list">
                {[
                  {
                    title: "ADAS and Driver-Assistance Content",
                    text: "Collision and lane warnings, blind-spot alerts, adaptive cruise status, driver-monitoring prompts, parking instructions, sensor-obstruction notices, temporary limitations, takeover requests, cancellation messages, and service instructions.",
                  },
                  {
                    title: "Instrument Cluster and Head-Up Display",
                    text: "Warnings, alerts, system states, driver instructions, range and charging information, maintenance notices, navigation guidance, dynamic values, and temporary notifications.",
                  },
                  {
                    title: "Infotainment and Center Display",
                    text: "Vehicle settings, navigation, media, communications, climate, charging, user profiles, privacy and consent, connected services, errors, and software updates.",
                  },
                  {
                    title: "Voice Input",
                    text: "Wake phrases, navigation requests, media commands, calling and messaging, climate and vehicle controls, searches, follow-up answers, confirmations, corrections, cancellations, help, and recovery language.",
                  },
                  {
                    title: "Spoken Output",
                    text: "Navigation directions, driver warnings, confirmations, clarifying questions, error messages, assistant responses, connected-service information, and generated names, addresses, distances, dates, and units.",
                  },
                  {
                    title: "Connected Experiences",
                    text: "Mobile companion applications, remote controls, charging applications, driver profiles, cloud-based assistants, customer portals, and cross-device journeys.",
                  },
                ].map((item) => (
                  <div className="content-scope-row" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <p>
                The objective is to keep language coherent across the complete driver experience. The linguistic scope
                focuses on how the vehicle communicates; it does not include validating whether cameras, radar, sensors,
                controllers, or automated functions detect and respond to underlying conditions correctly.
              </p>
            </Section>
            </article>

            <section id="clear-framework" className="framework-section">
              <div className="framework-inner">
            <p className="eyebrow eyebrow-dark">PRACTICAL FRAMEWORK</p>
            <div className="framework-heading">
              <h2>The Stepes CLEAR In-Vehicle Validation Framework</h2>
              <p>
                CLEAR organizes automotive linguistic testing around five connected dimensions so teams validate the
                complete experience rather than treating testing as an isolated proofreading step.
              </p>
            </div>
            <div className="clear-grid">
              {clearFramework.map((item) => (
                <div className="clear-item" key={item.letter}>
                  <div className="clear-letter" aria-hidden="true">{item.letter}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
            </section>

            <article className="article-content">
            <Section
              id="risk-based-testing"
              title="Prioritizing Tests by Driver and Communication Risk"
              intro="Not every string requires the same test depth. A risk-based model directs specialist review, environmental coverage, and approval effort toward interactions where misunderstanding could have the greatest impact."
            >
              <p>Consider the following factors when setting test priority:</p>
              <div className="two-column-list">
                {[
                  "Message urgency",
                  "Required driver action",
                  "Potential consequence of misunderstanding",
                  "Safety relevance",
                  "Display duration",
                  "Available driver attention",
                  "Frequency of occurrence",
                  "Linguistic complexity",
                  "Dependence on voice or audio",
                  "Cross-channel consistency",
                  "Market or regulatory sensitivity",
                  "Number of platforms or vehicle variants affected",
                  "History of previous defects",
                ].map((item) => (
                  <div key={item}><span aria-hidden="true" />{item}</div>
                ))}
              </div>

              <div className="table-wrap" role="region" aria-label="Example linguistic testing tiers">
                <table>
                  <caption>Example Linguistic Test Tiers</caption>
                  <thead>
                    <tr>
                      <th scope="col">Tier</th>
                      <th scope="col">Typical Content</th>
                      <th scope="col">Recommended Validation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {riskRows.map((row) => (
                      <tr key={row.tier}>
                        <th scope="row"><strong>{row.tier}</strong><span>{row.name}</span></th>
                        <td data-label="Typical Content">{row.examples}</td>
                        <td data-label="Recommended Validation">{row.validation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fine-note">
                These are project-planning categories, not Automotive Safety Integrity Level classifications. Formal
                safety analysis remains with the organization’s authorized engineering and safety teams.
              </p>
              <SourceNote>
                Message-priority context: <a href="https://www.iso.org/standard/81103.html" target="_blank" rel="noreferrer">ISO/TS 16951</a>.
              </SourceNote>
            </Section>

            <Section
              id="adas-warnings"
              title="How to Validate Multilingual ADAS Warnings"
              intro="Localized ADAS language must communicate the condition, system state, urgency, and expected driver response without introducing avoidable ambiguity."
            >
              <h3>Validate Meaning and Actionability</h3>
              <p>A warning should help the driver determine:</p>
              <ol className="numbered-list">
                <li>What condition has occurred</li>
                <li>Which system or feature is involved</li>
                <li>Whether the condition is temporary, limited, disabled, or faulty</li>
                <li>Whether driver action is required</li>
                <li>What action should be taken</li>
                <li>How urgent that action is</li>
              </ol>

              <h3>Protect State Distinctions</h3>
              <p>
                Automotive systems often distinguish among off, available, standby, active, intervening, temporarily
                limited, temporarily unavailable, overridden, faulted, and service-required states. Localized terminology
                should preserve these distinctions while remaining understandable to the intended driver.
              </p>

              <h3>Use Brevity Carefully</h3>
              <p>
                Short messages are essential on constrained displays, but shortening should not remove the responsible
                system, required action, direction of movement, temporary or permanent nature of the state, a critical
                negative, or the distinction between driver action and system action.
              </p>
              <div className="layered-message">
                <div><strong>Immediate layer</strong><span>Short cluster or HUD warning</span></div>
                <div><strong>Explanatory layer</strong><span>More detailed center-display message</span></div>
                <div><strong>Reference layer</strong><span>Supporting help or owner-documentation content</span></div>
              </div>

              <h3>Compare Every Presentation Channel</h3>
              <p>
                For important conditions, compare cluster text, HUD text, spoken warnings, alert context, center-display
                explanations, feature settings, and owner documentation. Language should not imply different urgency or a
                different required action across channels.
              </p>

              <h3>Coordinate Visual, Auditory, and Tactile Cues</h3>
              <p>
                Confirm that localized text and spoken output communicate the same condition and level of urgency as the
                accompanying chime or tactile cue. Linguistic testing evaluates this communication alignment; engineering
                teams remain responsible for validating the technical performance of the warning modalities themselves.
              </p>

              <h3>Escalate Potentially Misleading Content</h3>
              <p>
                Escalate wording that reverses an instruction, misidentifies the affected feature, understates urgency,
                suggests automation is active when it is not, implies the driver has been relieved of responsibility, or
                confuses temporary unavailability with a system fault.
              </p>
            </Section>

            <Section
              id="vehicle-displays"
              title="Testing Localized Text Across Vehicle Displays"
              intro="Vehicle interfaces can span instrument clusters, head-up displays, center stacks, passenger displays, rear-seat systems, mobile applications, and connected surfaces."
            >
              <h3>Review Display Fit and Rendering</h3>
              <div className="token-grid">
                {[
                  "Truncation",
                  "Clipping",
                  "Overlap",
                  "Line wrapping",
                  "Button expansion",
                  "Text alignment",
                  "Dynamic resizing",
                  "Font fallback",
                  "Missing glyphs",
                  "Variable insertion",
                  "Placeholder order",
                  "Bidirectional rendering",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>

              <h3>Test Dynamic Content</h3>
              <p>
                Static screenshots may not expose problems involving long contact names, road names, destinations, large
                numbers, negative temperatures, units, plural forms, dates, times, or software-generated status details.
                Use representative boundary values rather than testing only the shortest examples.
              </p>

              <h3>Verify Driving-State and Occupant Behavior</h3>
              <p>
                Check parked, idling, moving, driver, and passenger interactions. Confirm that restricted or shortened
                versions still communicate the intended meaning and that the correct language appears for the correct
                display, occupant zone, and user profile.
              </p>

              <h3>Check Cross-Screen Consistency</h3>
              <p>
                A centralized automotive termbase should define the preferred term, approved abbreviation, prohibited
                alternatives, applicable feature, display-specific variants, market-specific variants, and a clear usage
                note.
              </p>
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-terminology-management/">
                Explore Automotive Terminology Management
              </EditorialLink>
              <SourceNote>
                Platform context: <a href="https://source.android.com/docs/core/display/multi_display/displays" target="_blank" rel="noreferrer">Android multi-display support</a> illustrates why language, user, and display context must be validated together.
              </SourceNote>
            </Section>

            <Section
              id="voice-command-testing"
              title="Testing Voice Recognition and Conversational Flows"
              intro="Voice testing examines the complete interaction from user invocation and automatic speech recognition (ASR) through intent interpretation, dynamic values, vehicle action, confirmation, and recovery."
            >
              <div className="voice-flow" aria-label="Voice interaction validation flow">
                {voiceFlow.map(([title, text], index) => (
                  <div className="voice-step" key={title}>
                    <span className="voice-step-number">{index + 1}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>

              <h3>Test Invocation</h3>
              <p>
                Cover wake phrases, steering-wheel controls, push-to-talk buttons, on-screen controls, and follow-up
                listening modes. Validate successful and accidental activation, delayed response, language selection,
                feedback, and timeout behavior.
              </p>

              <h3>Test Expected and Natural Commands</h3>
              <p>
                A command inventory should include approved phrases and realistic variants: direct commands, polite
                requests, destination-first or action-first phrasing, shortened conversational forms, regional synonyms,
                and corrections of prior requests. Representative coverage should be based on language structure, market
                usage, feature risk, and likely behavior—not every theoretically possible sentence.
              </p>

              <h3>Validate Intents, Entities, and Dynamic Values</h3>
              <p>
                Test whether the system selects the correct action and extracts contact names, addresses, destinations,
                media titles, artists, vehicle features, temperatures, dates, times, numbers, units, directions, and user
                profiles. Include mixed-language names, foreign brands, abbreviations, and homophones that are difficult in
                the target language.
              </p>

              <h3>Test Multi-Turn Interaction</h3>
              <p>
                Evaluate follow-up questions, context retention, ambiguity resolution, confirmation, correction,
                cancellation, interruption, and recovery. Each turn should be checked for language, relevance, and
                consistency with the action actually performed.
              </p>

              <h3>Design Representative Speaker Coverage</h3>
              <p>
                Depending on the market, coverage may include regional accents, dialects, age groups, voice
                characteristics, speaking speeds, formality, second-language speech, and foreign-name pronunciation. No
                finite test can represent every speaker, so the design should reflect the target population and risk.
              </p>
              <h3>Capture More Than Pass or Fail</h3>
              <p>
                Record the utterance, speaker profile, cabin condition, recognition result, selected intent, extracted
                entities, performed action, system response, number of attempts, and whether recovery was required. This
                evidence helps distinguish linguistic, acoustic, recognition, intent, data, and functional issues.
              </p>
              <SourceNote>
                Voice-action context: <a href="https://developer.android.com/training/cars/media/voice-actions" target="_blank" rel="noreferrer">Android Developers — Voice actions for media apps</a>.
              </SourceNote>
            </Section>

            <Section
              id="tts-validation"
              title="Validating Automotive Text-to-Speech Output"
              intro="Text-to-speech validation determines whether generated speech is understandable, correctly pronounced, appropriately paced, and consistent with the visual interface and vehicle state."
            >
              <h3>Pronunciation</h3>
              <p>
                Review road and place names, personal names, brands, models, acronyms, abbreviations, technical terms,
                numbers, units, addresses, foreign-language words, and alphanumeric identifiers. Pronunciation lexicons or
                application-specific rules may be required when the engine’s default lexicon is insufficient.
              </p>

              <h3>Intelligibility and Prosody</h3>
              <p>
                Evaluate speech rate, pauses, stress, rhythm, sentence segmentation, emphasis, volume relationship,
                warning urgency, naturalness, and repetition behavior. Speech Synthesis Markup Language (SSML) can
                control some of these properties, but rendered output can differ by engine and voice.
              </p>

              <h3>Dynamic Spoken Content</h3>
              <p>
                Test distances, speed, temperature, time, battery level, charging duration, names, destinations, street
                names, calendar information, and sentences with multiple variables. Dynamic synthesis can expose
                grammatical agreement, number-formatting, word-order, and pronunciation problems that are not visible in
                a static script.
              </p>

              <h3>Language and Voice Fallback</h3>
              <p>
                Confirm behavior when the preferred voice is unavailable, connectivity is interrupted, a name belongs to
                another language, the system switches locale, only part of the interaction is localized, or a default
                voice replaces the intended regional voice.
              </p>

              <h3>Compare Speech With the Interface</h3>
              <p>
                Spoken output should match the displayed text, selected language, vehicle state, action performed,
                approved terminology, units, and dynamic values. A polished voice is not sufficient when it confirms the
                wrong action or contradicts the screen.
              </p>
              <SourceNote>
                Speech standards: <a href="https://www.w3.org/TR/speech-synthesis/" target="_blank" rel="noreferrer">W3C Speech Synthesis Markup Language</a> and{" "}
                <a href="https://www.w3.org/TR/pronunciation-lexicon/" target="_blank" rel="noreferrer">Pronunciation Lexicon Specification</a>.
              </SourceNote>
            </Section>

            <Section
              id="cabin-conditions"
              title="Why Cabin Conditions Matter for Multilingual Speech Testing"
              intro="Automotive speech systems operate amid road noise, airflow, music, passengers, changing microphone distance, and intermittent connectivity—not only in quiet test rooms."
            >
              <div className="condition-grid">
                {[
                  "Parked vehicle",
                  "Low-speed city driving",
                  "Highway driving",
                  "Rough road surfaces",
                  "HVAC at several fan levels",
                  "Open windows",
                  "Rain",
                  "Music or radio",
                  "Passenger conversation",
                  "Driver and passenger positions",
                  "Microphone distance and angle",
                  "Bluetooth or projection mode",
                  "Weak or offline connectivity",
                ].map((item) => (
                  <div key={item}><CheckIcon /><span>{item}</span></div>
                ))}
              </div>
              <h3>Use a Controlled Test Matrix</h3>
              <p>
                Combine locale, speaker profile, cabin condition, vehicle state, interaction type, and expected result.
                The matrix should be representative rather than exhaustively combinatorial. Risk, market importance,
                frequency, technical changes, and previous failures should determine where deeper coverage is needed.
              </p>
              <h3>Separate Linguistic and Acoustic Findings</h3>
              <p>
                An interaction may fail because a command is unnatural, vocabulary is incomplete, recognition degrades
                under noise, an entity is missing, the intent model maps the phrase incorrectly, the application does not
                support the action, the response is mistranslated, or TTS pronunciation is unclear. Accurate classification
                routes the issue to the correct owner.
              </p>
            </Section>

            <Section
              id="locale-testing"
              title="Language, Script, and Market Scenarios That Require In-Vehicle Review"
              intro="Locale data can support internationalization, but final behavior still depends on the implementation, runtime, fonts, interface, speech engine, and product configuration."
            >
              <h3>Visual-Language Scenarios</h3>
              <div className="token-grid">
                {[
                  "Right-to-left layout",
                  "Bidirectional text",
                  "CJK line breaking",
                  "Complex-script shaping",
                  "Diacritics",
                  "Font and glyph support",
                  "Mixed-language strings",
                  "Capitalization behavior",
                  "Abbreviations",
                  "Text expansion",
                  "Locale fallback",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>

              <h3>Dynamic Formatting</h3>
              <p>
                Test numbers, decimal separators, dates, times, distances, speed, temperatures, energy units, charging
                values, singular and plural forms, grammatical gender, and agreement with inserted variables. A template
                that works for one value may require a different structure for another quantity or language.
              </p>

              <h3>Market Terminology</h3>
              <p>
                Review regional automotive vocabulary, feature names, road conventions, units, legal phrasing, driver
                expectations, brand policies, and market-specific abbreviations. A translation approved for one country
                should not automatically be reused for every market sharing the same language.
              </p>

              <h3>Mixed-Language Voice Scenarios</h3>
              <p>
                Voice systems frequently encounter foreign road names, imported brands, contacts from another language,
                music titles, mixed-script destinations, loanwords, and code-switching. Test both recognition and spoken
                output for combinations most likely in the target market.
              </p>
              <SourceNote>
                Locale context: <a href="https://www.unicode.org/reports/tr35/" target="_blank" rel="noreferrer">Unicode Locale Data Markup Language</a>.
              </SourceNote>
            </Section>

            <Section
              id="test-environments"
              title="Choosing the Right In-Context Test Environment"
              intro="A layered strategy identifies issues early and reserves more complex environments for scenarios that genuinely require them."
            >
              <div className="environment-ladder">
                {environments.map((env) => (
                  <div className="environment-step" key={env.level}>
                    <div className="environment-level">{env.level}</div>
                    <div className="environment-copy">
                      <h3>{env.title}</h3>
                      <p><strong>Best for:</strong> {env.best}</p>
                      <p><strong>Limitations:</strong> {env.limits}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="callout compact">
                <p className="callout-label">PRACTICAL RECOMMENDATION</p>
                <p>
                  Use the least complex environment that can answer the test question reliably. A screenshot may reveal a
                  terminology problem; a live build may be needed for truncation; a bench may be needed for vehicle-state
                  logic; and a vehicle may be required for speech under road noise.
                </p>
              </div>
              <SourceNote>
                Tooling context: <a href="https://developer.android.com/training/cars/testing" target="_blank" rel="noreferrer">Android Developers — Test Android apps for cars</a> and the <a href="https://developer.android.com/training/cars/testing/emulator" target="_blank" rel="noreferrer">Android Automotive OS emulator</a>.
              </SourceNote>
            </Section>

            <Section
              id="testing-workflow"
              title="A Practical Multilingual Testing Workflow"
              intro="A controlled workflow connects language preparation, risk routing, test execution, defect management, and reusable assets across markets and releases."
            >
              <div className="workflow-list">
                {workflow.map(([title, text], index) => (
                  <div className="workflow-row" key={title}>
                    <div className="workflow-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="defect-reporting"
              title="Classifying and Reporting In-Vehicle Linguistic Defects"
              intro="A shared taxonomy helps localization, software, voice, and product teams route issues efficiently and reproduce them consistently."
            >
              <div className="table-wrap compact-table" role="region" aria-label="Recommended linguistic defect categories">
                <table>
                  <caption>Recommended Defect Categories</caption>
                  <thead><tr><th scope="col">Category</th><th scope="col">Examples</th></tr></thead>
                  <tbody>
                    {defectRows.map(([category, examples]) => (
                      <tr key={category}><th scope="row">{category}</th><td data-label="Examples">{examples}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3>Practical Severity Model</h3>
              <div className="severity-list">
                {[
                  ["Critical", "A localized interaction may seriously mislead the user, reverse an urgent instruction, obscure required driver action, or prevent correct understanding of an important warning."],
                  ["Major", "The issue materially affects comprehension, feature operation, task completion, or an important interaction."],
                  ["Moderate", "The issue reduces linguistic quality, clarity, consistency, layout quality, recognition, or pronunciation but does not prevent basic use."],
                  ["Minor", "A cosmetic or stylistic issue has limited user impact."],
                ].map(([name, text]) => (
                  <div key={name}><h4>{name}</h4><p>{text}</p></div>
                ))}
              </div>
              <p className="fine-note">Formal safety classification should remain with authorized safety and engineering teams.</p>

              <h3>Required Defect Evidence</h3>
              <div className="two-column-list">
                {[
                  "Defect ID, build, and version",
                  "Vehicle or test environment",
                  "Language, locale, and configuration",
                  "Feature, screen, and vehicle state",
                  "Triggering condition or spoken utterance",
                  "Expected and actual result",
                  "Screenshot, video, audio, or log",
                  "Severity and reproducibility",
                  "Assigned owner and resolution",
                  "Retest result",
                ].map((item) => <div key={item}><span aria-hidden="true" />{item}</div>)}
              </div>
              <p className="fine-note">
                Screenshots, recordings, logs, and test credentials should be handled according to the project’s
                confidentiality, privacy, security, and evidence-retention requirements.
              </p>
            </Section>

            <Section
              id="ota-regression"
              title="Linguistic Regression After Automotive Software Updates"
              intro="Automotive language can continue changing after launch as interface text, connected services, speech behavior, navigation content, and feature logic evolve through recurring software releases."
            >
              <h3>Changes That Can Affect Language</h3>
              <div className="token-grid">
                {[
                  "HMI strings",
                  "Warning logic",
                  "Feature states",
                  "Message timing",
                  "Display layouts",
                  "Terminology",
                  "Speech models",
                  "Command grammars",
                  "Intent mappings",
                  "TTS voices",
                  "Pronunciation resources",
                  "Navigation providers",
                  "Supported locales",
                  "Fallback behavior",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>

              <h3>Use Risk-Based Regression</h3>
              <ol className="numbered-list">
                <li>Changed interactions</li>
                <li>High-risk driver communication</li>
                <li>Shared terminology affected by the change</li>
                <li>Common voice intents</li>
                <li>Locale-specific code paths and dynamic content</li>
                <li>Previously defective scenarios</li>
                <li>New models, displays, or vehicle configurations</li>
              </ol>
              <p>
                Approved terminology, translations, pronunciation decisions, and test cases should be retained so future
                releases benefit from earlier validation.
              </p>
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-ota-software-localization/">
                Explore Automotive OTA Software Localization
              </EditorialLink>
              <SourceNote>
                Regulatory context: <a href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update" target="_blank" rel="noreferrer">UN Regulation No. 156</a> addresses vehicle software updates and software-update management systems.
              </SourceNote>
            </Section>

            <Section
              id="automotive-ai"
              title="Testing Conversational and AI-Powered Automotive Assistants"
              intro="In-car voice experiences are moving from rigid command lists toward more natural, contextual, and multi-turn interaction. This increases both linguistic opportunity and test complexity."
            >
              <h3>New Linguistic Testing Challenges</h3>
              <div className="two-column-list">
                {[
                  "Multiple valid ways to request the same action",
                  "Responses generated at runtime",
                  "Multi-turn context and personalization",
                  "Language switching",
                  "Variable response length and tone",
                  "Unsupported requests and safe refusal",
                  "Connectivity-dependent behavior and fallback",
                  "Nondeterministic answers across repeated prompts",
                ].map((item) => <div key={item}><span aria-hidden="true" />{item}</div>)}
              </div>

              <h3>Evaluate More Than Fluency</h3>
              <p>
                A fluent answer can still be unsuitable when it describes a feature the vehicle does not have, confirms an
                action that was not performed, misstates the vehicle state, gives an unnecessarily long response, uses the
                wrong market terminology, fails to communicate uncertainty, or switches languages unexpectedly.
              </p>

              <div className="table-wrap compact-table" role="region" aria-label="Automotive AI evaluation dimensions">
                <table>
                  <caption>Recommended Automotive AI Evaluation Dimensions</caption>
                  <thead><tr><th scope="col">Dimension</th><th scope="col">Evaluation Question</th></tr></thead>
                  <tbody>
                    {aiDimensions.map(([dimension, question]) => (
                      <tr key={dimension}><th scope="row">{dimension}</th><td data-label="Evaluation Question">{question}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Because generated responses may vary, testing should combine repeatable benchmark prompts, exploratory
                evaluation, and production monitoring. Linguistic review is one input into the broader product, safety,
                privacy, security, and engineering evaluation required for automotive AI.
              </p>
            </Section>
            </article>

            <section id="testing-checklist" className="checklist-section">
              <div className="checklist-inner">
            <div className="section-heading-wide">
              <p className="eyebrow">PRACTICAL CHECKLIST</p>
              <h2>Automotive Linguistic Testing Checklist</h2>
              <p>
                Use this checklist to plan coverage, prepare test environments, evaluate multilingual interactions, and
                control issue resolution across releases.
              </p>
            </div>
            <div className="checklist-grid">
              {checklistGroups.map((group) => (
                <section className="checklist-group" key={group.title} aria-labelledby={`check-${group.title.replaceAll(" ", "-").toLowerCase()}`}>
                  <h3 id={`check-${group.title.replaceAll(" ", "-").toLowerCase()}`}>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}><span className="check-mark"><CheckIcon /></span><span>{item}</span></li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
            </section>

            <article className="article-content">
            <Section
              id="preparing-program"
              title="Preparing an Automotive Linguistic Testing Program"
              intro="A testing partner can scope and execute more accurately when the customer provides a clear, controlled information package."
            >
              <div className="two-column-list">
                {[
                  "Testable localized builds",
                  "Supported languages and locales",
                  "Vehicle and feature configurations",
                  "String files and IDs",
                  "Source and translated content",
                  "Screenshots and design references",
                  "Character limits",
                  "Approved terminology and style guidance",
                  "Voice-command inventories",
                  "Intent and entity definitions",
                  "Pronunciation resources",
                  "Message priorities and vehicle-state definitions",
                  "Test accounts and release notes",
                  "Known limitations",
                  "Issue-tracking access",
                  "Acceptance criteria and escalation contacts",
                ].map((item) => <div key={item}><span aria-hidden="true" />{item}</div>)}
              </div>
              <p>
                Not every project will have every asset. Missing context should be identified before testing so the team
                can distinguish an unresolved product question from a translation defect.
              </p>
            </Section>

            <Section
              id="selecting-partner"
              title="Selecting an In-Vehicle Language Testing Partner"
              intro="Evaluate potential partners according to the actual requirements of the vehicle program rather than translation capacity alone."
            >
              <div className="partner-criteria">
                {[
                  ["Automotive Language Expertise", "Reviewers should understand the relevant vehicle system, feature terminology, target market, and driver audience—not only the target language."],
                  ["HMI and Software Experience", "The team should be able to work with resource files, string IDs, screenshots, constraints, prototypes, environments, versioned builds, and defect systems."],
                  ["Voice and Speech Capabilities", "Confirm experience with ASR, natural-language commands, intent and entity testing, TTS, pronunciation, speaker coverage, and multilingual conversational flows."],
                  ["Test-Case Design", "A strong partner should translate product requirements into linguistic scenarios rather than merely clicking through available screens."],
                  ["Structured Defect Reporting", "Reports should be reproducible, evidence-based, consistently classified, and easy for engineering and product teams to act upon."],
                  ["Terminology Governance", "Approved decisions should be managed across models, platforms, languages, suppliers, software, documentation, and future releases."],
                  ["Security and Access Control", "Workflows should reflect the customer’s requirements for confidential software, unreleased features, credentials, evidence, and data retention."],
                  ["Multilingual Scale", "The partner should coordinate languages without losing consistency in instructions, severity, terminology, evidence, or reporting."],
                ].map(([title, text]) => (
                  <div className="partner-row" key={title}><h3>{title}</h3><p>{text}</p></div>
                ))}
              </div>
            </Section>

            <Section
              id="stepes-support"
              title="How Stepes Supports Automotive Linguistic Testing"
              intro="Stepes combines automotive translation, software localization, professional linguistic review, terminology management, voice support, and in-context quality assurance to help global teams validate multilingual vehicle experiences."
            >
              <div className="stepes-capabilities">
                {[
                  ["Automotive-Specialized Linguists", "Native-language professionals can be selected according to the relevant vehicle system, engineering discipline, interaction type, market, and audience."],
                  ["ADAS and Driver-Message Validation", "Review can address warning meaning, state terminology, actionability, character constraints, cross-channel consistency, and presentation in context."],
                  ["HMI and Software Localization", "Stepes supports multilingual strings, metadata, screenshots, layout constraints, scripts, regional formatting, interface QA, and defect management."],
                  ["Voice and TTS Testing", "Programs can be structured around commands, natural utterance variants, intents, entities, target-market speakers, pronunciation, generated speech, and documented scenarios."],
                  ["Terminology and Language Assets", "Translation memory, terminology management, style guidance, reviewer decisions, and pronunciation resources support consistency across models, releases, documentation, and markets."],
                  ["Continuous Testing and Regression", "Source comparison, version control, translation reuse, targeted retesting, and tracked defect resolution help validation keep pace with recurring releases."],
                  ["Enterprise Program Coordination", "Centralized records, reviewer feedback, permissions, issue tracking, language assets, and reporting help coordinate complex multilingual programs across global teams."],
                ].map(([title, text]) => (
                  <div className="stepes-capability" key={title}><h3>{title}</h3><p>{text}</p></div>
                ))}
              </div>
              <EditorialLink href="https://www.stepes.com/automotive-translation-services/">
                Explore Stepes Automotive Translation Services
              </EditorialLink>
            </Section>

            <Section id="faqs" title="In-Vehicle Linguistic Testing FAQs">
              <div className="faq-panel">
                {faqs.map((item, index) => <FAQItem item={item} index={index} key={item.q} />)}
              </div>
            </Section>

            <Section
              id="sources"
              title="Sources and References"
              intro="The standards and official technical resources below provide context for automotive dialogue, presentation, software updates, speech systems, locale behavior, and in-vehicle testing."
            >
              <div className="sources-list">
                {sourceLinks.map(([title, href, org]) => (
                  <a key={title} href={href} target="_blank" rel="noreferrer">
                    <span><strong>{title}</strong><small>{org}</small></span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </Section>
            </article>

            <section className="conclusion-section">
          <div className="conclusion-copy">
            <h2>Validate Multilingual Driver Communication as an Integrated Experience</h2>
            <p>
              Automotive language must remain accurate when translated, clear when displayed, understandable when spoken,
              recognizable when voiced by target-market users, and consistent across connected surfaces and releases.
              Bringing language, interface behavior, speech technology, environmental context, risk prioritization, and
              release governance together moves multilingual content from translation to a validated in-vehicle experience.
            </p>
              </div>
            </section>
          </div>
        </div>

        <section className="related-section">
          <div className="shell">
            <div className="section-heading-wide">
              <h2>Continue Exploring Automotive Localization</h2>
            </div>
            <div className="related-grid">
              {relatedResources.map((resource) => (
                <a className="related-item" href={resource.href} key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span className="related-action">Explore the Guide <ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta shell">
          <div>
            <h2>Validate Every Driver Interaction Across Languages</h2>
            <p>
              Plan multilingual ADAS, HMI, voice, and TTS testing around your vehicle platforms, target markets, test
              environments, release schedule, and communication risk.
            </p>
          </div>
          <div className="final-actions">
            <a className="button primary" href="https://www.stepes.com/contact-us/">
              <span>Talk to an Automotive Localization Expert</span><ArrowIcon />
            </a>
            <a className="button secondary" href="https://www.stepes.com/automotive-translation-services/">
              <span>Explore Automotive Translation Services</span><ArrowIcon />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = `
  .guide-page {
    --stepes-magenta: ${COLORS.magenta};
    --stepes-magenta-dark: ${COLORS.magentaDark};
    --stepes-magenta-deep: ${COLORS.magentaDeep};
    --stepes-blush: ${COLORS.blush};
    --stepes-eyebrow-dark: ${COLORS.eyebrowDark};
    --ink: ${COLORS.ink};
    --body: ${COLORS.body};
    --muted: ${COLORS.muted};
    --border: ${COLORS.border};
    --soft: ${COLORS.soft};
    --dark: ${COLORS.dark};
  }

  .guide-page, .guide-page * { box-sizing: border-box; }
  .guide-page {
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    overflow-x: clip;
  }

  .guide-page a { color: inherit; }
  .guide-page button, .guide-page a { font: inherit; }
  .guide-page svg { display: block; }
  .guide-page h1, .guide-page h2, .guide-page h3, .guide-page h4, .guide-page p, .guide-page li, .guide-page a, .guide-page td, .guide-page th { overflow-wrap: break-word; }
  .guide-page .shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }

  .guide-page .breadcrumb { padding-top: 30px; }
  .guide-page .breadcrumb ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px 10px;
    margin: 0;
    padding: 0;
    color: #667085;
    font-size: 14px;
    line-height: 1.5;
  }
  .guide-page .breadcrumb li { display: inline-flex; align-items: center; min-width: 0; }
  .guide-page .breadcrumb li:not(:last-child)::after { content: "›"; margin-left: 10px; color: #98A2B3; }
  .guide-page .breadcrumb a { text-decoration: none; border-radius: 4px; }
  .guide-page .breadcrumb a:hover { color: var(--stepes-magenta); }
  .guide-page .breadcrumb a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 3px; }
  .guide-page .breadcrumb [aria-current="page"] { color: #344054; font-weight: 500; }

  .guide-page .hero { padding-top: 38px; padding-bottom: 92px; }
  .guide-page .hero-copy { max-width: 980px; }
  .guide-page .eyebrow {
    margin: 0 0 16px;
    color: var(--stepes-magenta);
    font-size: 11px !important;
    line-height: 1.35 !important;
    font-weight: 600 !important;
    letter-spacing: .11em !important;
    text-transform: uppercase;
  }
  .guide-page .eyebrow-dark { color: var(--stepes-eyebrow-dark) !important; }
  .guide-page .hero h1 {
    max-width: 1040px;
    margin: 0;
    font-size: 48px;
    line-height: 1.08;
    letter-spacing: -.035em;
    font-weight: 600;
  }
  .guide-page .hero-deck {
    max-width: 880px;
    margin: 28px 0 0;
    color: var(--body);
    font-size: 20px;
    line-height: 1.62;
  }
  .guide-page .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 24px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .guide-page .hero-actions, .guide-page .final-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
  .guide-page .button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border-radius: 999px;
    border: 1px solid transparent;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .guide-page .button svg { width: 18px; height: 18px; flex: 0 0 auto; }
  .guide-page .button.primary, .guide-page .button.primary:visited, .guide-page .button.primary:hover, .guide-page .button.primary:active, .guide-page .button.primary:focus, .guide-page .button.primary:focus-visible {
    color: #fff !important;
  }
  .guide-page .button.primary, .guide-page .button.primary * { color: #fff !important; stroke: #fff !important; }
  .guide-page .button.primary { background: var(--stepes-magenta); box-shadow: 0 8px 22px rgba(193, 29, 99, .16); }
  .guide-page .button.primary:hover { background: var(--stepes-magenta-dark); transform: translateY(-1px); }
  .guide-page .button.secondary { border-color: #D0D5DD; background: #fff; color: #1D2939; }
  .guide-page .button.secondary:hover { border-color: #98A2B3; transform: translateY(-1px); }
  .guide-page .button:focus-visible { outline: 3px solid rgba(193, 29, 99, .28); outline-offset: 3px; }

  .guide-page .takeaways-section { background: var(--stepes-blush); border-top: 1px solid #F5DDE8; border-bottom: 1px solid #F5DDE8; }
  .guide-page .takeaways-layout { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); gap: 76px; padding-top: 76px; padding-bottom: 76px; align-items: start; }
  .guide-page .takeaways-layout h2, .guide-page .section-heading-wide h2, .guide-page .conclusion-copy h2, .guide-page .final-cta h2 {
    margin: 0;
    font-size: 36px;
    line-height: 1.18;
    letter-spacing: -.025em;
    font-weight: 600;
  }
  .guide-page .takeaway-lead, .guide-page .section-heading-wide > p:last-child, .guide-page .conclusion-copy p, .guide-page .final-cta p {
    margin: 20px 0 0;
    color: var(--body);
    font-size: 18px;
    line-height: 1.68;
  }
  .guide-page .takeaways-list { border-top: 1px solid rgba(122, 21, 66, .18); }
  .guide-page .takeaway-item { display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 14px; padding: 20px 0; border-bottom: 1px solid rgba(122, 21, 66, .18); }
  .guide-page .takeaway-item p { margin: 0; color: #344054; font-size: 16px; line-height: 1.62; }
  .guide-page .check-mark { width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: #fff; color: var(--stepes-magenta); border: 1px solid #EAB6CD; }
  .guide-page .check-mark svg { width: 15px; height: 15px; }

  .guide-page .mobile-toc { display: none; }
  .guide-page .article-shell {
    max-width: 1160px;
    display: grid;
    grid-template-columns: 250px minmax(0, 780px);
    gap: 64px;
    align-items: start;
    padding-top: 96px;
    padding-bottom: 24px;
  }
  .guide-page .article-flow { min-width: 0; }
  .guide-page .desktop-toc {
    position: sticky;
    top: 96px;
    max-height: calc(100vh - 128px);
    overflow-y: auto;
    padding-right: 14px;
    scrollbar-width: thin;
  }
  .guide-page .toc-title { margin: 0 0 18px; color: var(--ink); font-size: 16px; font-weight: 600; }
  .guide-page .desktop-toc nav { display: flex; flex-direction: column; border-left: 1px solid var(--border); }
  .guide-page .desktop-toc a {
    position: relative;
    display: block;
    padding: 6px 0 6px 18px;
    color: #667085;
    font-size: 15px;
    line-height: 1.38;
    text-decoration: none;
  }
  .guide-page .desktop-toc a::before { content: ""; position: absolute; left: -1px; top: 6px; bottom: 6px; width: 2px; background: transparent; }
  .guide-page .desktop-toc a:hover { color: var(--stepes-magenta); }
  .guide-page .desktop-toc a.active { color: var(--stepes-magenta); font-weight: 600; }
  .guide-page .desktop-toc a.active::before { background: var(--stepes-magenta); }
  .guide-page .desktop-toc a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 2px; }

  .guide-page .article-content { min-width: 0; }
  .guide-page .article-section { scroll-margin-top: 120px; padding: 0 0 90px; }
  .guide-page .article-section + .article-section { padding-top: 4px; }
  .guide-page .article-section h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    line-height: 1.2;
    letter-spacing: -.026em;
    font-weight: 600;
  }
  .guide-page .article-section h3 {
    margin: 40px 0 12px;
    color: var(--ink);
    font-size: 24px;
    line-height: 1.3;
    letter-spacing: -.012em;
    font-weight: 600;
  }
  .guide-page .article-section h4 { margin: 0; color: var(--ink); font-size: 17px; line-height: 1.45; font-weight: 600; }
  .guide-page .article-section p, .guide-page .article-section li {
    color: var(--body);
    font-size: 18px;
    line-height: 1.72;
  }
  .guide-page .article-section p { margin: 18px 0 0; }
  .guide-page .article-section .section-intro { margin: 22px 0 0; color: #1D2939; font-size: 20px; line-height: 1.65; }
  .guide-page .editorial-list, .guide-page .numbered-list { margin: 24px 0 0; padding-left: 24px; }
  .guide-page .editorial-list li, .guide-page .numbered-list li { padding-left: 6px; margin: 10px 0; }
  .guide-page .editorial-list li::marker, .guide-page .numbered-list li::marker { color: var(--stepes-magenta); font-weight: 600; }

  .guide-page .comparison-block { margin-top: 40px; padding: 34px; border: 1px solid var(--border); border-radius: 26px; background: #fff; }
  .guide-page .comparison-block h3 { margin-top: 0; }
  .guide-page .comparison-rows { margin-top: 20px; border-top: 1px solid var(--border); }
  .guide-page .comparison-row { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 28px; padding: 18px 0; border-bottom: 1px solid var(--border); }
  .guide-page .comparison-row p { margin: 0; font-size: 16px; line-height: 1.58; }

  .guide-page .callout { margin-top: 34px; padding: 28px 30px; background: var(--stepes-blush); border-radius: 22px; border-left: 3px solid var(--stepes-magenta); }
  .guide-page .callout.compact { margin-top: 34px; }
  .guide-page .callout-label { margin: 0 0 8px !important; color: var(--stepes-magenta) !important; font-size: 11px !important; line-height: 1.35 !important; font-weight: 600 !important; letter-spacing: .1em; }
  .guide-page .callout p:last-child { margin: 0; color: #344054; font-size: 17px; line-height: 1.62; }

  .guide-page .source-note { margin-top: 26px; padding-top: 18px; border-top: 1px solid var(--border); color: #667085; font-size: 16px; line-height: 1.6; }
  .guide-page .source-note a { color: var(--stepes-magenta); text-decoration: none; font-weight: 600; }
  .guide-page .source-note a:hover { text-decoration: underline; text-underline-offset: 3px; }
  .guide-page .source-note a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 2px; }

  .guide-page .content-scope-list, .guide-page .partner-criteria { margin-top: 30px; border-top: 1px solid var(--border); }
  .guide-page .content-scope-row, .guide-page .partner-row { display: grid; grid-template-columns: 245px minmax(0, 1fr); gap: 34px; padding: 26px 0; border-bottom: 1px solid var(--border); }
  .guide-page .content-scope-row h3, .guide-page .partner-row h3 { margin: 0; font-size: 20px; }
  .guide-page .content-scope-row p, .guide-page .partner-row p { margin: 0; font-size: 16px; line-height: 1.65; }

  .guide-page .framework-section { scroll-margin-top: 120px; margin: 4px 0 96px; border-radius: 30px; background: var(--dark); color: #fff; overflow: hidden; }
  .guide-page .framework-inner { padding: 54px 44px 58px; }
  .guide-page .framework-heading { max-width: 690px; }
  .guide-page .framework-heading h2 { margin: 0; font-size: 36px; line-height: 1.18; letter-spacing: -.026em; font-weight: 600; }
  .guide-page .framework-heading p { margin: 20px 0 0; color: #D7CFDA; font-size: 18px; line-height: 1.68; }
  .guide-page .clear-grid { display: grid; grid-template-columns: 1fr 1fr; margin-top: 42px; border-top: 1px solid rgba(255,255,255,.16); }
  .guide-page .clear-item { padding: 26px 26px 28px 0; border-bottom: 1px solid rgba(255,255,255,.16); }
  .guide-page .clear-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.16); }
  .guide-page .clear-item:nth-child(even) { padding-left: 26px; padding-right: 0; }
  .guide-page .clear-item:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; padding-right: 0; }
  .guide-page .clear-letter { color: var(--stepes-eyebrow-dark); font-size: 26px; line-height: 1; font-weight: 600; }
  .guide-page .clear-item h3 { margin: 16px 0 0; color: #fff; font-size: 21px; line-height: 1.3; font-weight: 600; }
  .guide-page .clear-item p { margin: 10px 0 0; color: #D7CFDA; font-size: 16px; line-height: 1.65; }

  .guide-page .two-column-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; margin-top: 26px; border-top: 1px solid var(--border); }
  .guide-page .two-column-list > div { position: relative; padding: 16px 0 16px 20px; border-bottom: 1px solid var(--border); color: var(--body); font-size: 16px; line-height: 1.55; }
  .guide-page .two-column-list > div > span { position: absolute; top: 25px; left: 0; width: 8px; height: 2px; background: var(--stepes-magenta); }

  .guide-page .table-wrap { margin-top: 36px; overflow-x: auto; border: 1px solid var(--border); border-radius: 22px; background: #fff; }
  .guide-page table { width: 100%; border-collapse: collapse; min-width: 720px; }
  .guide-page caption { padding: 24px 26px 18px; color: var(--ink); font-size: 20px; line-height: 1.4; font-weight: 600; text-align: left; }
  .guide-page th, .guide-page td { padding: 20px 22px; border-top: 1px solid var(--border); text-align: left; vertical-align: top; font-size: 16px; line-height: 1.58; }
  .guide-page thead th { color: #344054; background: #F8FAFC; font-weight: 600; }
  .guide-page tbody th { width: 210px; color: var(--ink); font-weight: 600; }
  .guide-page tbody th strong { display: block; color: var(--stepes-magenta); font-size: 14px; text-transform: uppercase; letter-spacing: .06em; }
  .guide-page tbody th span { display: block; margin-top: 6px; font-size: 16px; line-height: 1.45; }
  .guide-page .compact-table table { min-width: 620px; }
  .guide-page .compact-table tbody th { width: 220px; }
  .guide-page .fine-note { color: #667085 !important; font-size: 16px !important; line-height: 1.58 !important; }

  .guide-page .layered-message { margin-top: 26px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .guide-page .layered-message > div { display: grid; grid-template-columns: 180px 1fr; gap: 24px; padding: 16px 0; border-bottom: 1px solid var(--border); }
  .guide-page .layered-message > div:last-child { border-bottom: 0; }
  .guide-page .layered-message strong, .guide-page .layered-message span { font-size: 16px; line-height: 1.5; }
  .guide-page .layered-message span { color: var(--body); }

  .guide-page .token-grid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
  .guide-page .token-grid span { padding: 10px 14px; border: 1px solid var(--border); border-radius: 999px; color: #344054; background: #fff; font-size: 16px; line-height: 1.35; }

  .guide-page .inline-link { color: var(--stepes-magenta) !important; font-weight: 600; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
  .guide-page .inline-link:hover { color: var(--stepes-magenta-dark) !important; }
  .guide-page .inline-link:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 3px; border-radius: 2px; }

  .guide-page .editorial-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; color: var(--stepes-magenta) !important; text-decoration: none; font-size: 16px; font-weight: 600; }
  .guide-page .editorial-link svg { width: 18px; height: 18px; transition: transform .18s ease; }
  .guide-page .editorial-link:hover svg { transform: translateX(3px); }
  .guide-page .editorial-link:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 4px; }

  .guide-page .voice-flow { margin-top: 34px; border-top: 1px solid var(--border); }
  .guide-page .voice-step { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--border); }
  .guide-page .voice-step-number { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--stepes-blush); color: var(--stepes-magenta); font-size: 16px; font-weight: 600; }
  .guide-page .voice-step h3 { margin: 2px 0 0; font-size: 20px; }
  .guide-page .voice-step p { margin: 8px 0 0; font-size: 16px; line-height: 1.62; }

  .guide-page .condition-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 28px; margin-top: 30px; }
  .guide-page .condition-grid > div { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 10px; align-items: start; padding: 12px 0; border-bottom: 1px solid var(--border); color: var(--body); font-size: 16px; line-height: 1.5; }
  .guide-page .condition-grid svg { width: 20px; height: 20px; color: var(--stepes-magenta); margin-top: 2px; }

  .guide-page .environment-ladder { margin-top: 34px; border-top: 1px solid var(--border); }
  .guide-page .environment-step { display: grid; grid-template-columns: 90px minmax(0, 1fr); gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--border); }
  .guide-page .environment-level { color: var(--stepes-magenta); font-size: 14px; line-height: 1.4; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; }
  .guide-page .environment-copy h3 { margin: 0; font-size: 22px; }
  .guide-page .environment-copy p { margin: 10px 0 0; font-size: 16px; line-height: 1.6; }
  .guide-page .environment-copy strong { color: var(--ink); font-weight: 600; }

  .guide-page .workflow-list { margin-top: 34px; border-top: 1px solid var(--border); }
  .guide-page .workflow-row { display: grid; grid-template-columns: 64px minmax(0, 1fr); gap: 28px; padding: 28px 0; border-bottom: 1px solid var(--border); }
  .guide-page .workflow-number { color: var(--stepes-magenta); font-size: 18px; line-height: 1.45; font-weight: 600; }
  .guide-page .workflow-row h3 { margin: 0; font-size: 22px; }
  .guide-page .workflow-row p { margin: 9px 0 0; font-size: 16px; line-height: 1.65; }

  .guide-page .severity-list { margin-top: 26px; border-top: 1px solid var(--border); }
  .guide-page .severity-list > div { display: grid; grid-template-columns: 120px minmax(0, 1fr); gap: 28px; padding: 18px 0; border-bottom: 1px solid var(--border); }
  .guide-page .severity-list p { margin: 0; font-size: 16px; line-height: 1.6; }

  .guide-page .checklist-section { scroll-margin-top: 120px; margin: 4px 0 96px; border: 1px solid var(--border); border-radius: 30px; background: #F8FAFC; overflow: hidden; }
  .guide-page .checklist-inner { padding: 54px 44px 58px; }
  .guide-page .section-heading-wide { max-width: 800px; }
  .guide-page .checklist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 38px; margin-top: 44px; border-top: 1px solid var(--border); }
  .guide-page .checklist-group { padding: 30px 0 34px; border-bottom: 1px solid var(--border); }
  .guide-page .checklist-group h3 { margin: 0; font-size: 22px; line-height: 1.35; font-weight: 600; }
  .guide-page .checklist-group ul { list-style: none; margin: 20px 0 0; padding: 0; }
  .guide-page .checklist-group li { display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 12px; margin: 14px 0; color: var(--body); font-size: 16px; line-height: 1.58; }
  .guide-page .checklist-group .check-mark { margin-top: 1px; background: #fff; }

  .guide-page .stepes-capabilities { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; gap: 0 36px; border-top: 1px solid var(--border); }
  .guide-page .stepes-capability { padding: 24px 0; border-bottom: 1px solid var(--border); }
  .guide-page .stepes-capability h3 { margin: 0; font-size: 20px; }
  .guide-page .stepes-capability p { margin: 10px 0 0; font-size: 16px; line-height: 1.62; }

  .guide-page .faq-panel { margin-top: 34px; border: 1px solid var(--border); border-radius: 26px; overflow: hidden; }
  .guide-page .faq-item + .faq-item { border-top: 1px solid var(--border); }
  .guide-page .faq-item h3 { margin: 0; }
  .guide-page .faq-item button { width: 100%; min-height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 24px; border: 0; background: #fff; color: var(--ink); text-align: left; font-size: 18px; font-weight: 600; cursor: pointer; }
  .guide-page .faq-item button:hover { background: #FCFCFD; }
  .guide-page .faq-item button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: -3px; }
  .guide-page .chevron { width: 20px; height: 20px; flex: 0 0 auto; transition: transform .2s ease; }
  .guide-page .chevron.open { transform: rotate(180deg); }
  .guide-page .faq-answer { padding: 0 24px 22px; }
  .guide-page .faq-answer p { margin: 0; font-size: 16px; line-height: 1.65; }

  .guide-page .sources-list { margin-top: 32px; border-top: 1px solid var(--border); }
  .guide-page .sources-list a { display: flex; align-items: center; justify-content: space-between; gap: 22px; min-width: 0; padding: 20px 0; border-bottom: 1px solid var(--border); text-decoration: none; }
  .guide-page .sources-list a > span { min-width: 0; }
  .guide-page .sources-list strong { display: block; color: var(--ink); font-size: 16px; line-height: 1.45; font-weight: 600; }
  .guide-page .sources-list small { display: block; margin-top: 5px; color: var(--muted); font-size: 14px; line-height: 1.45; }
  .guide-page .sources-list svg { width: 18px; height: 18px; flex: 0 0 auto; color: var(--stepes-magenta); }
  .guide-page .sources-list a:hover strong { color: var(--stepes-magenta); }
  .guide-page .sources-list a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 3px; }

  .guide-page .conclusion-section { padding: 8px 0 96px; }
  .guide-page .conclusion-copy { max-width: 760px; margin: 0; }

  .guide-page .related-section { padding: 92px 0 96px; background: #fff; border-top: 1px solid var(--border); }
  .guide-page .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 34px; margin-top: 44px; border-top: 1px solid var(--border); }
  .guide-page .related-item { display: flex; min-height: 270px; flex-direction: column; padding: 28px 0; border-bottom: 1px solid var(--border); text-decoration: none; }
  .guide-page .related-item h3 { margin: 0; color: var(--ink); font-size: 20px; line-height: 1.42; font-weight: 600; }
  .guide-page .related-item p { margin: 14px 0 0; color: var(--body); font-size: 16px; line-height: 1.62; }
  .guide-page .related-action { display: inline-flex; align-items: center; gap: 7px; margin-top: auto; padding-top: 22px; color: var(--stepes-magenta); font-size: 16px; line-height: 1.4; font-weight: 600; }
  .guide-page .related-action svg { width: 18px; height: 18px; transition: transform .18s ease; }
  .guide-page .related-item:hover h3 { color: var(--stepes-magenta); }
  .guide-page .related-item:hover .related-action svg { transform: translateX(3px); }
  .guide-page .related-item:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 5px; }

  .guide-page .final-cta { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 70px; align-items: center; margin-top: 0; margin-bottom: 96px; padding-top: 58px; padding-bottom: 58px; border-radius: 30px; background: var(--stepes-blush); border: 1px solid #F0D4E1; }
  .guide-page .final-cta > div:first-child { max-width: 730px; }
  .guide-page .final-cta .final-actions { max-width: 430px; margin-top: 0; flex-direction: column; }
  .guide-page .final-cta .button { width: 100%; }

  @media (max-width: 1199px) {
    .guide-page .shell { padding-left: 40px; padding-right: 40px; }
    .guide-page .article-shell { grid-template-columns: 230px minmax(0, 760px); gap: 46px; }
  }

  @media (max-width: 980px) {
    .guide-page .shell { padding-left: 24px; padding-right: 24px; }
    .guide-page .hero h1 { font-size: 42px; }
    .guide-page .takeaways-layout { grid-template-columns: 1fr; gap: 42px; }
    .guide-page .desktop-toc { display: none; }
    .guide-page .mobile-toc { display: block; width: calc(100% - 48px); max-width: 780px; margin: 56px auto 0; }
    .guide-page .mobile-toc-trigger { width: 100%; min-height: 54px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 14px 18px; border: 1px solid var(--border); border-radius: 16px; background: #fff; color: var(--ink); font-size: 16px; font-weight: 600; cursor: pointer; }
    .guide-page .mobile-toc-trigger:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
    .guide-page .mobile-toc-list { margin-top: 10px; padding: 12px 16px; border: 1px solid var(--border); border-radius: 16px; background: #fff; box-shadow: 0 12px 30px rgba(16,24,40,.08); }
    .guide-page .mobile-toc-list a { display: block; min-height: 44px; padding: 11px 2px; border-bottom: 1px solid var(--border); color: #475467; text-decoration: none; font-size: 16px; line-height: 1.45; }
    .guide-page .mobile-toc-list a:last-child { border-bottom: 0; }
    .guide-page .mobile-toc-list a:hover { color: var(--stepes-magenta); }
    .guide-page .article-shell { display: block; max-width: 828px; padding-top: 72px; }
    .guide-page table { min-width: 0; }
    .guide-page .related-grid { grid-template-columns: 1fr 1fr; }
    .guide-page .final-cta { grid-template-columns: 1fr; gap: 34px; }
    .guide-page .final-cta .final-actions { max-width: 520px; flex-direction: column; }
  }

  @media (max-width: 767px) {
    .guide-page .shell { padding-left: 20px; padding-right: 20px; }
    .guide-page .breadcrumb { padding-top: 22px; }
    .guide-page .breadcrumb ol { font-size: 14px; }
    .guide-page .breadcrumb li:last-child { flex: 1 1 100%; display: grid; grid-template-columns: auto minmax(0, 1fr); column-gap: 9px; align-items: start; }
    .guide-page .breadcrumb li:nth-last-child(2)::after { display: none; }
    .guide-page .breadcrumb li:last-child::before { content: "›"; color: #98A2B3; }
    .guide-page .hero { padding-top: 28px; padding-bottom: 68px; }
    .guide-page .hero h1 { font-size: 38px; line-height: 1.1; overflow-wrap: anywhere; }
    .guide-page .hero-deck { margin-top: 22px; font-size: 18px; line-height: 1.62; }
    .guide-page .hero-actions { flex-direction: column; margin-top: 28px; }
    .guide-page .button { width: 100%; min-height: 52px; text-align: center; white-space: normal; }
    .guide-page .takeaways-layout { padding-top: 64px; padding-bottom: 64px; }
    .guide-page .takeaways-layout h2, .guide-page .section-heading-wide h2, .guide-page .conclusion-copy h2, .guide-page .final-cta h2 { font-size: 30px; }
    .guide-page .takeaway-lead, .guide-page .section-heading-wide > p:last-child, .guide-page .conclusion-copy p, .guide-page .final-cta p { font-size: 17px; }
    .guide-page .mobile-toc { width: calc(100% - 40px); margin-top: 44px; }
    .guide-page .article-shell { padding-top: 64px; padding-bottom: 0; }
    .guide-page .article-section { padding-bottom: 72px; }
    .guide-page .article-section h2 { font-size: 30px; line-height: 1.2; overflow-wrap: anywhere; }
    .guide-page .article-section h3 { margin-top: 34px; font-size: 20px; }
    .guide-page .article-section p, .guide-page .article-section li { font-size: 17px; line-height: 1.68; }
    .guide-page .article-section .section-intro { font-size: 18px; line-height: 1.62; }
    .guide-page .comparison-block { padding: 26px 20px; border-radius: 22px; }
    .guide-page .comparison-row, .guide-page .content-scope-row, .guide-page .partner-row { grid-template-columns: 1fr; gap: 8px; }
    .guide-page .comparison-row p, .guide-page .content-scope-row p, .guide-page .partner-row p { font-size: 16px; }
    .guide-page .callout { padding: 24px 20px; }
    .guide-page .framework-section { margin-bottom: 72px; border-radius: 24px; }
    .guide-page .framework-inner { padding: 42px 24px 44px; }
    .guide-page .framework-heading h2 { font-size: 30px; }
    .guide-page .framework-heading p { font-size: 17px; }
    .guide-page .clear-grid { grid-template-columns: 1fr; margin-top: 34px; }
    .guide-page .clear-item, .guide-page .clear-item:nth-child(n) { padding: 24px 0 !important; border-right: 0 !important; border-bottom: 1px solid rgba(255,255,255,.16); grid-column: auto; }
    .guide-page .clear-item:last-child { border-bottom: 0; }
    .guide-page .two-column-list, .guide-page .condition-grid, .guide-page .checklist-grid, .guide-page .stepes-capabilities { grid-template-columns: 1fr; }
    .guide-page .table-wrap { overflow: visible; border: 0; border-radius: 0; background: transparent; }
      .guide-page table, .guide-page table caption, .guide-page table thead, .guide-page table tbody, .guide-page table tr, .guide-page table th, .guide-page table td { display: block; width: 100%; min-width: 0; }
    .guide-page table { border-collapse: separate; }
    .guide-page table caption { padding: 0 0 16px; font-size: 20px; }
    .guide-page table thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0; }
    .guide-page table tbody { display: grid; gap: 14px; }
    .guide-page table tbody tr { overflow: hidden; border: 1px solid var(--border); border-radius: 18px; background: #fff; }
    .guide-page table tbody th, .guide-page table tbody td { width: 100%; padding: 16px 18px; border-top: 0; }
    .guide-page table tbody th { background: #F8FAFC; }
    .guide-page table tbody td + td { border-top: 1px solid var(--border); }
    .guide-page table tbody td::before { content: attr(data-label); display: block; margin-bottom: 6px; color: var(--ink); font-size: 14px; line-height: 1.4; font-weight: 600; }
    .guide-page .layered-message > div { grid-template-columns: 1fr; gap: 4px; }
    .guide-page .token-grid { gap: 8px; }
    .guide-page .token-grid span { font-size: 16px; }
    .guide-page .voice-step { grid-template-columns: 42px 1fr; gap: 14px; }
    .guide-page .environment-step, .guide-page .workflow-row { grid-template-columns: 1fr; gap: 10px; }
    .guide-page .environment-level, .guide-page .workflow-number { margin-bottom: 0; }
    .guide-page .severity-list > div { grid-template-columns: 1fr; gap: 6px; }
    .guide-page .checklist-section { margin-bottom: 72px; border-radius: 24px; }
    .guide-page .checklist-inner { padding: 42px 24px 44px; }
    .guide-page .checklist-grid { margin-top: 38px; }
    .guide-page .faq-item button { padding: 18px 18px; font-size: 17px; }
    .guide-page .faq-answer { padding: 0 18px 20px; }
    .guide-page .conclusion-section { padding-top: 0; padding-bottom: 72px; }
    .guide-page .related-section { padding: 72px 0; }
    .guide-page .related-grid { grid-template-columns: 1fr; gap: 0; }
    .guide-page .related-item { min-height: 0; }
    .guide-page .related-item h3, .guide-page .sources-list strong, .guide-page .mobile-toc-list a { overflow-wrap: anywhere; }
    .guide-page .final-cta { width: calc(100% - 40px); margin-left: auto; margin-right: auto; margin-bottom: 72px; padding: 42px 24px; border-radius: 24px; }
    .guide-page .final-cta .final-actions { flex-direction: column; }
  }

  @media (max-width: 360px) {
    .guide-page .hero h1 { font-size: 36px; }
    .guide-page .breadcrumb li:last-child { overflow-wrap: anywhere; }
    .guide-page .button { padding-left: 18px; padding-right: 18px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .guide-page *, .guide-page *::before, .guide-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
  }
`;
