import React from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  { label: "Automotive HMI and Infotainment Localization Guide", current: true },
];

const tocItems = [
  { id: "what-hmi-localization-includes", label: "What Automotive HMI Localization Includes" },
  { id: "hmi-content-ecosystem", label: "The Automotive HMI Content Ecosystem" },
  { id: "why-hmi-is-different", label: "Why Automotive HMI Localization Is Different" },
  { id: "context-first", label: "Context: The First Localization Requirement" },
  { id: "text-expansion", label: "Text Expansion, Legibility, and Display Constraints" },
  { id: "writing-systems", label: "Writing Systems and Locale-Specific Behavior" },
  { id: "clear-language", label: "Clear Language, Glanceability, and Driver Attention" },
  { id: "voice-localization", label: "Voice and Conversational Interface Localization" },
  { id: "localization-engineering", label: "Localization Engineering for Vehicle Software" },
  { id: "terminology", label: "Terminology Across the Vehicle Experience" },
  { id: "workflow", label: "An End-to-End Automotive HMI Localization Workflow" },
  { id: "testing", label: "In-Context and In-Vehicle Testing" },
  { id: "risk-based-quality", label: "Risk-Based Quality and the Appropriate Use of AI" },
  { id: "continuous-localization", label: "Continuous Localization and OTA Updates" },
  { id: "emerging-priorities", label: "Emerging Automotive HMI Priorities" },
  { id: "release-checklist", label: "Automotive HMI Release-Readiness Checklist" },
  { id: "partner-questions", label: "Questions to Ask a Localization Partner" },
  { id: "stepes-support", label: "How Stepes Supports Automotive HMI Localization" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const takeaways = [
  {
    title: "HMI extends beyond infotainment.",
    text: "The localization scope can include clusters, head-up displays, vehicle controls, charging interfaces, voice systems, companion apps, and connected services.",
  },
  {
    title: "Context determines meaning.",
    text: "Screen names, vehicle states, user actions, severity classifications, variables, and references help linguists translate short interface strings correctly.",
  },
  {
    title: "Text fit is a rendering problem.",
    text: "Character counts alone cannot predict pixel width, line wrapping, font behavior, dynamic values, or writing-system requirements.",
  },
  {
    title: "Writing systems can change the interface.",
    text: "Direction, alignment, punctuation, line breaking, input behavior, glyph coverage, and regional formats require engineering and in-context review.",
  },
  {
    title: "Release readiness requires integrated testing.",
    text: "File QA should be supplemented by screenshots, prototypes, simulators, hardware, bench systems, or in-vehicle review according to content risk.",
  },
];

const ecosystemRows = [
  {
    surface: "Instrument cluster",
    content: "Status, warnings, range, ADAS states",
    risk: "Clarity, severity, and text fit",
    validation: "Integrated build, bench system, or vehicle",
  },
  {
    surface: "Center display",
    content: "Navigation, media, settings, climate",
    risk: "Context, layout, and navigation",
    validation: "Prototype, simulator, or bench system",
  },
  {
    surface: "Head-up display",
    content: "Speed, guidance, warnings",
    risk: "Legibility and severe space limits",
    validation: "Intended display environment",
  },
  {
    surface: "Voice interface",
    content: "Commands, prompts, confirmations",
    risk: "Recognition, intent, and pronunciation",
    validation: "Speech and scenario testing",
  },
  {
    surface: "Charging interface",
    content: "Status, schedules, energy information",
    risk: "Terminology, units, and dynamic values",
    validation: "Functional journey review",
  },
  {
    surface: "Companion app",
    content: "Remote controls, accounts, support",
    risk: "Cross-platform consistency",
    validation: "Device and workflow testing",
  },
];

const contextFramework = [
  {
    letter: "C",
    title: "Component and Screen",
    text: "Identify the display, application, menu, control, or feature where the string appears.",
  },
  {
    letter: "O",
    title: "Operational State",
    text: "Document whether the vehicle is parked, moving, charging, unavailable, or requiring driver intervention.",
  },
  {
    letter: "N",
    title: "Navigation and User Action",
    text: "Explain how the user reaches the screen and whether the text is a label, confirmation, warning, or recovery message.",
  },
  {
    letter: "T",
    title: "Text Constraints",
    text: "Provide pixel width, line limits, component behavior, truncation rules, and dynamic-value allowances.",
  },
  {
    letter: "E",
    title: "Embedded Elements",
    text: "Identify placeholders, numbers, units, model names, markup, control codes, and protected software elements.",
  },
  {
    letter: "X",
    title: "Cross-Channel Terminology",
    text: "Connect the interface string to owner manuals, voice prompts, physical controls, apps, and service terminology.",
  },
  {
    letter: "T",
    title: "Test Environment",
    text: "Define whether validation will use screenshots, prototypes, emulators, simulators, bench systems, or vehicles.",
  },
];

const stringRecordRows = [
  ["String key", "charging_schedule_status"],
  ["Source", "Charging scheduled"],
  ["Screen", "EV charging overview"],
  ["Function", "Confirms that a future charging session has been saved"],
  ["Vehicle state", "Parked or charging"],
  ["Constraint", "Two lines; fixed card width"],
  ["Variable", "Scheduled start time"],
  ["Approved term", "Charging schedule"],
  ["Related voice prompt", "Your charging schedule is set"],
  ["Validation", "Screenshot review and functional test"],
];

const writingSystemRows = [
  ["RTL layout", "Incorrect mirroring or alignment", "Screenshot and functional review"],
  ["Mixed RTL/LTR text", "Reordered punctuation, numbers, or names", "Bidirectional review in the build"],
  ["CJK font support", "Missing, substituted, or market-inappropriate glyphs", "Native-language visual review"],
  ["Combining marks", "Clipping above or below the line", "Device or display testing"],
  ["Locale units", "Incorrect value or format", "Functional locale testing"],
  ["Input behavior", "Search or keyboard failure", "End-to-end user-journey testing"],
];

const workflowSteps = [
  {
    number: "01",
    title: "Define Scope and Risk",
    text: "Confirm systems, screens, vehicle models, configurations, languages, content categories, release dates, test access, and approval requirements.",
  },
  {
    number: "02",
    title: "Review Internationalization Readiness",
    text: "Identify hard-coded text, fixed layouts, concatenation, unsupported fonts, missing plural logic, incomplete RTL support, and locale-formatting issues.",
  },
  {
    number: "03",
    title: "Prepare Context and Language Assets",
    text: "Assemble resource files, screenshots, prototypes, builds, termbases, translation memories, style guidance, and message classifications.",
  },
  {
    number: "04",
    title: "Assign the Appropriate Linguists",
    text: "Select specialists according to target market, automotive system, technical domain, interface type, voice requirements, and content risk.",
  },
  {
    number: "05",
    title: "Translate in Context",
    text: "Consider meaning, user action, vehicle state, screen position, approved terminology, display limits, tone, severity, and related strings.",
  },
  {
    number: "06",
    title: "Conduct Linguistic Review",
    text: "Validate accuracy, completeness, grammar, naturalness, terminology, clarity, market suitability, severity, and text constraints.",
  },
  {
    number: "07",
    title: "Run Automated Quality Assurance",
    text: "Check missing text, numbers, units, variables, tags, length exceptions, terminology, duplicates, and untranslated source content.",
  },
  {
    number: "08",
    title: "Reintegrate Localized Resources",
    text: "Confirm encoding, file structure, locale resources, build compatibility, placeholders, fallbacks, and correct locale identification.",
  },
  {
    number: "09",
    title: "Review in Context",
    text: "Use the most representative environment available, from screenshots and prototypes to emulators, bench systems, hardware, or vehicles.",
  },
  {
    number: "10",
    title: "Resolve, Retest, and Maintain",
    text: "Record defects, corrections, approvals, and regression results, then update terminology, translation memory, and future release guidance.",
  },
];

const testingLevels = [
  {
    label: "File-Level QA",
    text: "Checks tags, variables, numbers, missing strings, untranslated content, and terminology consistency.",
  },
  {
    label: "Screenshot Review",
    text: "Validates meaning, text fit, line breaks, fonts, alignment, visual hierarchy, and RTL presentation.",
  },
  {
    label: "Prototype Review",
    text: "Evaluates screen flow, content sequence, interaction context, and intended user journeys.",
  },
  {
    label: "Emulator or Simulator",
    text: "Tests locale behavior, navigation, dynamic content, state changes, search, and input behavior.",
  },
  {
    label: "Bench or Hardware",
    text: "Reviews display rendering, physical controls, audio behavior, and integrated system performance.",
  },
  {
    label: "In-Vehicle Review",
    text: "Validates real user journeys, voice, cross-display consistency, physical context, and vehicle-state behavior.",
  },
  {
    label: "Regression Testing",
    text: "Confirms that approved corrections remain resolved in later builds, branches, and vehicle configurations.",
  },
];

const riskLevels = [
  {
    level: "Level 1",
    title: "Safety-Sensitive or Operational Messages",
    examples: "Driver warnings, intervention requests, critical vehicle states, emergency instructions",
    controls: "Automotive specialist, approved terminology, independent review, text-fit validation, in-context testing, and customer approval where required",
  },
  {
    level: "Level 2",
    title: "Vehicle Controls and Settings",
    examples: "Drive modes, climate, charging, ADAS settings, vehicle configuration",
    controls: "Automotive linguist, linguistic review, terminology QA, integrated interface review, and functional journey testing",
  },
  {
    level: "Level 3",
    title: "Navigation, Media, and Connected Services",
    examples: "Media controls, search, navigation menus, connected applications, personalization",
    controls: "Professional translation, contextual review, automated QA, and representative screenshot or functional testing",
  },
  {
    level: "Level 4",
    title: "High-Volume Supporting Content",
    examples: "Help content, release notes, recurring service messages, lower-risk informational content",
    controls: "AI-assisted translation or translation-memory reuse where appropriate, approved terminology, human review by risk, automated QA, and targeted sampling",
  },
];

const checklistGroups = [
  {
    title: "Before Localization",
    items: [
      "Target languages and locales are defined.",
      "Vehicle models, markets, and hardware configurations are identified.",
      "Driver and passenger experiences are separated where their content or restrictions differ.",
      "Resource files have been assessed and translatable elements are distinguished from protected software elements.",
      "String IDs are meaningful and sufficient context is available.",
      "Screenshots, prototypes, or representative reference builds are available.",
      "Vehicle-state context, user actions, and message severity are documented.",
      "Pixel, line, character, and dynamic-content constraints are defined.",
      "Hard-coded text and text embedded in essential graphics are identified.",
      "Concatenated messages have been reviewed for multilingual grammar and word order.",
      "Fonts support every required writing system and character set.",
      "Right-to-left and bidirectional requirements are documented.",
      "Locale-aware units, dates, times, numbers, and regional formats are supported.",
      "Approved terminology and style guidance are available.",
      "Testing environments, access, and approval responsibilities are confirmed.",
    ],
  },
  {
    title: "During Translation and Review",
    items: [
      "The interface function, screen, user action, and vehicle state are understood.",
      "Ambiguous strings are queried rather than guessed.",
      "Variables, placeholders, tags, markup, and control codes remain protected.",
      "Message meaning, tone, and severity are preserved.",
      "Approved automotive terminology is applied consistently.",
      "Pixel, line, and character constraints are considered together.",
      "Units, dates, times, numbers, and regional formats are localized correctly.",
      "Abbreviations are used only when they are approved and understandable in the target market.",
      "Spoken and displayed language remain aligned where the experience uses both.",
      "Related screens and channels use consistent terminology.",
      "High-risk content receives the required independent review or customer approval.",
    ],
  },
  {
    title: "Before Build Validation",
    items: [
      "Automated linguistic and structural QA is complete.",
      "Missing and untranslated strings have been checked.",
      "Numbers, units, placeholders, tags, and protected elements are validated.",
      "Terminology exceptions and unresolved queries are closed.",
      "Pseudolocalization findings are addressed.",
      "Localized resources compile and load successfully.",
      "Locale fallback behavior is confirmed.",
      "The correct language, build, model, market, and configuration are installed.",
    ],
  },
  {
    title: "During In-Context Testing",
    items: [
      "The translation communicates the correct meaning on screen.",
      "Text fits without harmful truncation or hidden meaning.",
      "Line breaks preserve readability and visual hierarchy.",
      "Fonts and glyphs render consistently.",
      "Diacritics and combining marks are not clipped.",
      "Right-to-left layout and bidirectional strings display correctly.",
      "Dynamic values fit and follow locale conventions.",
      "Navigation, controls, search, input, and language switching function as intended.",
      "State-dependent messages appear in the correct conditions.",
      "Warnings remain clear and appropriately prioritized.",
      "Voice commands, prompts, confirmations, and pronunciation align with the visible interface.",
      "Terminology is consistent across displays, applications, manuals, and voice channels.",
      "Driver and passenger experiences follow the intended restrictions.",
      "Every defect includes reproducible build, screen, language, severity, owner, and resolution details.",
    ],
  },
  {
    title: "Before Release Approval",
    items: [
      "High-risk defects are closed.",
      "Corrections have been retested in the intended environment.",
      "Regression testing is complete across affected builds and configurations.",
      "Required customer, market, or responsible-stakeholder approvals are recorded.",
      "Translation memory reflects the final approved strings.",
      "Terminology and permitted abbreviations are updated.",
      "Style guidance captures approved language decisions.",
      "Final files, issue history, approvals, and release records are archived.",
      "Language assets remain separated where legitimate model, market, or version differences exist.",
      "The next multilingual update and maintenance process is defined.",
    ],
  },
];

const partnerQuestions = [
  "Can the provider work with our automotive resource files and protect software elements?",
  "How will screen, vehicle-state, and user-action context be supplied to translators?",
  "Are linguists assigned according to automotive system, market, and content risk?",
  "How are pixel, line, and character constraints managed?",
  "Can the team validate right-to-left, bidirectional, CJK, and complex writing systems?",
  "How are fonts, glyphs, locale formats, search, and input methods tested?",
  "Can the provider support voice commands, utterance sets, pronunciation, and text-to-speech output?",
  "How are HMI terms aligned with manuals, service content, applications, and voice systems?",
  "Does the workflow include screenshot, emulator, simulator, bench, hardware, or vehicle review?",
  "How are defects documented, routed, corrected, and regression-tested?",
  "Can language assets be separated by model, market, configuration, software branch, and release?",
  "How is translation memory reused without applying an incorrect contextual match?",
  "How does the provider determine where AI-assisted translation is appropriate?",
  "Can OEM, supplier, engineering, localization, and in-country reviewers work in a coordinated approval process?",
  "How will approved corrections improve later releases?",
];

const faqs = [
  {
    question: "What Is Automotive HMI Localization?",
    answer:
      "Automotive HMI localization adapts vehicle-interface content and behavior for a target language, locale, market, and vehicle configuration. It can include translation, terminology, text-fit management, writing-system support, voice localization, software resource engineering, locale formatting, and integrated interface testing.",
  },
  {
    question: "What Is the Difference Between HMI and Infotainment Localization?",
    answer:
      "Infotainment localization generally covers navigation, media, communications, entertainment, and connected applications. HMI localization is broader and may also include instrument clusters, head-up displays, vehicle controls, charging interfaces, driver messages, driver-assistance information, voice interaction, and companion applications.",
  },
  {
    question: "Why Do Automotive HMI Strings Need Context?",
    answer:
      "Short interface strings often have several possible meanings. The correct translation may depend on the screen, icon, vehicle state, user action, grammatical function, severity, and available space. Screenshots, string metadata, feature descriptions, and reference builds help linguists select the intended meaning.",
  },
  {
    question: "Are Character Limits Sufficient for Controlling Translated Text?",
    answer:
      "No. Character count does not fully reflect pixel width, font metrics, line wrapping, dynamic values, glyph height, or component dimensions. Teams should combine length guidance with pseudolocalization and visual review in the intended interface.",
  },
  {
    question: "How Are Arabic and Hebrew Vehicle Interfaces Localized?",
    answer:
      "Arabic and Hebrew localization may require right-to-left text, interface mirroring, bidirectional text handling, appropriate fonts, input support, alignment changes, and review of icons and navigation. Not every element should be reversed, so the integrated interface should be tested by native-language specialists.",
  },
  {
    question: "How Are Voice Commands Localized for Vehicles?",
    answer:
      "Voice localization may include intent translation, natural utterance variants, synonyms, regional expressions, pronunciation dictionaries, automatic speech recognition testing, text-to-speech review, confirmations, and recovery language. Spoken content should be tested as speech rather than reviewed only as written text.",
  },
  {
    question: "Does Every HMI Translation Require In-Vehicle Testing?",
    answer:
      "Not necessarily. The appropriate environment depends on content risk, project stage, platform, and available access. File QA, screenshots, prototypes, emulators, simulators, hardware, bench systems, and vehicles provide different levels of validation. Safety-sensitive or highly contextual content generally requires stronger integrated testing.",
  },
  {
    question: "Can AI Be Used to Translate Automotive HMI Content?",
    answer:
      "Yes, when the workflow is matched to the content’s purpose and risk. AI-assisted translation may be suitable for recurring or lower-risk content when supported by context, terminology, translation memory, professional review, and automated QA. Safety-sensitive, voice-dependent, highly visible, or operational content normally requires stronger human validation.",
  },
  {
    question: "How Is HMI Terminology Kept Consistent With Manuals and Service Content?",
    answer:
      "A shared termbase can define approved concepts, translations, abbreviations, market variants, and prohibited alternatives. Translation memory can preserve approved complete strings. Reviewer feedback should update these assets so future HMI, manual, service, application, and support content remains aligned.",
  },
  {
    question: "Can Stepes Support Android Automotive OS and Proprietary OEM Platforms?",
    answer:
      "Stepes can assess standard and proprietary resource formats, translatable content, protected elements, context requirements, output specifications, and available testing access during project scoping. The final workflow is configured for the customer’s platform, vehicle program, languages, and release requirements.",
  },
  {
    question: "Does HMI Localization Certify Compliance With Automotive Standards?",
    answer:
      "No. Localization can support customer-defined usability, quality, market, and documentation requirements, but it does not replace product certification, regulatory approval, functional-safety evaluation, human-factors validation, or the final approval responsibilities of the OEM and other accountable organizations.",
  },
];

const relatedResources = [
  {
    title: "Automotive Technical Manual Translation and DITA/XML Workflows",
    text: "Structured content, translation reuse, model-year updates, terminology, and multilingual publishing for automotive documentation.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-technical-manual-dita-xml-translation-guide/",
  },
  {
    title: "Localization for Automotive OTA Software Updates",
    text: "Change detection, version control, continuous localization, and rapid validation for recurring multilingual vehicle-software releases.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-ota-software-update-localization-guide/",
  },
  {
    title: "EV Battery and Charging Content Localization",
    text: "Terminology, software, safety information, customer journeys, and lifecycle considerations for multilingual EV content.",
    href: "https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization-guide/",
  },
  {
    title: "SAE J2450 for Automotive Translation Quality",
    text: "What the metric evaluates, where it adds value, and why HMI quality also requires contextual review and validation.",
    href: "https://www.stepes.com/resources/localization-guides/sae-j2450-automotive-translation-quality-guide/",
  },
  {
    title: "Automotive Terminology Management Across Models and Markets",
    text: "How centralized terminology supports consistency across platforms, suppliers, departments, regions, and customer touchpoints.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-terminology-management-guide/",
  },
  {
    title: "ADAS, Voice, and In-Vehicle Linguistic Testing",
    text: "Validation guidance for driver warnings, voice commands, interface messages, pronunciation, and multilingual speech experiences.",
    href: "https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing-guide/",
  },
];

const sourceLinks = [
  {
    title: "Android Automotive OS Platform Overview",
    organization: "Android Developers",
    href: "https://developer.android.com/training/cars/platforms/automotive-os",
  },
  {
    title: "Writing Guidelines for Cars",
    organization: "Android Developers",
    href: "https://developer.android.com/design/ui/cars/guides/foundations/writing-guidelines",
  },
  {
    title: "Car UI Library and OEM Customization",
    organization: "Android Open Source Project",
    href: "https://source.android.com/docs/automotive/hmi/car_ui",
  },
  {
    title: "Test Android Apps for Cars",
    organization: "Android Developers",
    href: "https://developer.android.com/training/cars/testing",
  },
  {
    title: "ISO 15005:2017 — Dialogue Management Principles and Compliance Procedures",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/69238.html",
  },
  {
    title: "ISO 15008:2017 — Specifications and Test Procedures for In-Vehicle Visual Presentation",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/62784.html",
  },
  {
    title: "Strings and Bidirectional Text",
    organization: "W3C Internationalization",
    href: "https://www.w3.org/International/articles/strings-and-bidi/",
  },
  {
    title: "Guidance Documents",
    organization: "National Highway Traffic Safety Administration",
    href: "https://www.nhtsa.gov/laws-regulations/guidance-documents",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m4.5 10.5 3.2 3.2 7.8-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="m6 8 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={item.label}>
            {index > 0 && <span className="crumb-separator" aria-hidden="true">›</span>}
            {item.current ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function TableOfContents({ mobile = false }) {
  const list = (
    <nav className={mobile ? "toc-links toc-links-mobile" : "toc-links"} aria-label="In this guide">
      <a className="toc-top-link" href={sectionUrl("guide-start")}>Introduction</a>
      {tocItems.map((item) => (
        <a key={item.id} href={sectionUrl(item.id)}>{item.label}</a>
      ))}
    </nav>
  );

  if (mobile) {
    return (
      <details className="toc-mobile">
        <summary>
          <span>In This Guide</span>
          <ChevronIcon />
        </summary>
        {list}
      </details>
    );
  }

  return (
    <aside className="toc-desktop" aria-label="Guide navigation">
      <p className="toc-heading">In This Guide</p>
      {list}
    </aside>
  );
}

function SectionIntro({ children }) {
  return <p className="section-intro">{children}</p>;
}

function EditorialLink({ href, children }) {
  return (
    <a className="editorial-link" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function ChecklistGroup({ group }) {
  return (
    <section className="checklist-group">
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>
            <span className="check-marker" aria-hidden="true"><CheckIcon /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function AutomotiveHmiInfotainmentLocalizationGuideWireframe() {
  return (
    <main className="resource-guide" id="guide-start">
      <style>{styles}</style>

      <header className="hero-shell">
        <div className="shell">
          <Breadcrumbs />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AUTOMOTIVE LOCALIZATION GUIDE</p>
              <h1>Automotive HMI and Infotainment Localization Guide</h1>
              <p className="hero-deck">
                Learn how context, text constraints, writing systems, interface design, voice, and in-vehicle testing shape the clarity, usability, and release readiness of multilingual HMI and infotainment software.
              </p>
              <div className="hero-actions" aria-label="Guide actions">
                <a className="button button-primary" href={sectionUrl("what-hmi-localization-includes")}>
                  Explore the Guide <ArrowIcon />
                </a>
                <a className="button button-secondary" href={sectionUrl("release-checklist")}>
                  Jump to the Checklist
                </a>
              </div>
              <p className="hero-audience">
                For automotive OEMs, suppliers, software teams, localization leaders, product owners, and quality organizations.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="takeaways-section" aria-labelledby="takeaways-title">
        <div className="shell takeaways-grid">
          <div className="takeaways-lead">
            <p className="eyebrow">KEY TAKEAWAYS</p>
            <h2 id="takeaways-title">What a Release-Ready HMI Program Must Address</h2>
          </div>
          <ul className="takeaways-list">
            {takeaways.map((item) => (
              <li key={item.title}>
                <span className="takeaway-marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="shell article-shell">
        <TableOfContents mobile />
        <div className="article-grid">
          <TableOfContents />
          <article className="article-body">
            <section className="article-opening" aria-labelledby="introduction-title">
              <h2 id="introduction-title">Localization Must Work Inside the Vehicle Experience</h2>
              <p className="lead-paragraph">
                Automotive human-machine interfaces bring together vehicle controls, driver information, navigation, entertainment, connectivity, voice interaction, and increasingly personalized digital services. Localizing these experiences requires more than replacing one language with another. Every translated message must work within a specific screen, vehicle state, display geometry, interaction method, market, and user journey.
              </p>
              <p>
                A label that appears clear in a spreadsheet may become ambiguous when shown beside an icon. A correct translation may no longer fit inside a cluster display. A right-to-left language may require changes to alignment and navigation behavior. A voice command may need regional utterance variants, pronunciation rules, and testing under realistic cabin conditions.
              </p>
              <p>
                Automotive HMI localization therefore combines professional translation, automotive terminology, content design, software internationalization, localization engineering, voice adaptation, and integrated testing. This guide explains how automotive organizations can prepare, translate, validate, and maintain multilingual vehicle interfaces throughout the software lifecycle.
              </p>
            </section>

            <section id="what-hmi-localization-includes" className="article-section anchor-section">
              <h2>1. What Automotive HMI Localization Includes</h2>
              <SectionIntro>
                Automotive HMI localization adapts the complete driver and passenger interface for a specific language, locale, market, vehicle configuration, and operating environment.
              </SectionIntro>
              <p>
                An automotive human-machine interface is any visual, auditory, tactile, or interactive channel through which a driver or passenger communicates with the vehicle. Infotainment is an important part of that environment, but the terms are not interchangeable. Infotainment generally covers navigation, media, communications, connected applications, and entertainment. The broader HMI ecosystem also includes vehicle status, operational controls, instrument clusters, driver warnings, charging functions, head-up displays, voice interactions, and driver-assistance information.
              </p>
              <p>A complete localization workflow may address:</p>
              <ul className="editorial-list two-column-list">
                <li>Text length and display fit</li>
                <li>Fonts and glyph coverage</li>
                <li>Left-to-right and right-to-left behavior</li>
                <li>Numbers, units, dates, and time formats</li>
                <li>Voice commands and spoken output</li>
                <li>Variables, placeholders, and dynamic content</li>
                <li>Screen layout and visual hierarchy</li>
                <li>Software resource integration</li>
                <li>Terminology consistency</li>
                <li>Functional locale behavior and testing</li>
              </ul>

              <h3>Embedded, Projected, and Connected Experiences</h3>
              <p>
                OEM-native systems are designed for a vehicle platform or product family and may use proprietary software, resource formats, design systems, and hardware. Android Automotive OS runs directly in the vehicle as an embedded operating system, while projected experiences extend applications from a connected mobile device. Companion applications support remote controls, charging schedules, route planning, account management, subscriptions, and service communication.
              </p>
              <p>
                These environments may share terminology and user journeys, but they do not necessarily share screen geometry, interaction restrictions, resource architecture, or release cycles. The localization scope should identify the precise platform, display, hardware configuration, and operating context for each string.
              </p>
              <EditorialLink href="https://developer.android.com/training/cars/platforms/automotive-os">
                Review the Android Automotive OS platform overview
              </EditorialLink>
            </section>

            <section id="hmi-content-ecosystem" className="article-section anchor-section">
              <h2>2. The Automotive HMI Content Ecosystem</h2>
              <SectionIntro>
                Automotive software content appears across a connected network of displays, controls, applications, and spoken experiences. The same concept may require different wording according to space, interaction method, user role, and operational importance.
              </SectionIntro>

              <div className="surface-grid" aria-label="Automotive HMI surfaces">
                <section>
                  <h3>Instrument Clusters</h3>
                  <p>Speed, range, energy use, trip data, alerts, warnings, navigation guidance, and driver-assistance states.</p>
                </section>
                <section>
                  <h3>Center Displays</h3>
                  <p>Navigation, media, communications, settings, climate, personalization, applications, and vehicle controls.</p>
                </section>
                <section>
                  <h3>Head-Up Displays</h3>
                  <p>Highly constrained navigation guidance, speed information, warnings, and driver-assistance content.</p>
                </section>
                <section>
                  <h3>Voice Systems</h3>
                  <p>Commands, intents, utterance variants, spoken prompts, confirmations, pronunciation, and recovery language.</p>
                </section>
                <section>
                  <h3>EV and Charging</h3>
                  <p>State of charge, range, schedules, battery conditioning, energy use, route planning, and charging networks.</p>
                </section>
                <section>
                  <h3>Companion Experiences</h3>
                  <p>Remote controls, vehicle status, subscriptions, accounts, service booking, support, and connected services.</p>
                </section>
              </div>

              <div className="table-wrap" role="region" aria-label="HMI surface and localization risk matrix" tabIndex="0">
                <table>
                  <caption>HMI Surface and Localization Risk Matrix</caption>
                  <thead>
                    <tr>
                      <th scope="col">HMI Surface</th>
                      <th scope="col">Typical Content</th>
                      <th scope="col">Primary Localization Risk</th>
                      <th scope="col">Recommended Validation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ecosystemRows.map((row) => (
                      <tr key={row.surface}>
                        <th scope="row" data-label="HMI Surface">{row.surface}</th>
                        <td data-label="Typical Content">{row.content}</td>
                        <td data-label="Primary Risk">{row.risk}</td>
                        <td data-label="Recommended Validation">{row.validation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="why-hmi-is-different" className="article-section anchor-section">
              <h2>3. Why Automotive HMI Localization Is Different</h2>
              <SectionIntro>
                The vehicle environment adds constraints that ordinary desktop and mobile localization programs do not always face: limited driver attention, changing vehicle states, specialized hardware, long product lifecycles, and highly variable consequences of ambiguity.
              </SectionIntro>

              <h3>Information May Need to Be Understood at a Glance</h3>
              <p>
                Users of a conventional application can often stop, reread, scroll, or explore. A driver may have limited time to interpret a message while maintaining attention on the road. Automotive interface language should be clear on first reading, concise without becoming ambiguous, consistent with surrounding controls, appropriate to the message’s importance, and actionable when intervention is required.
              </p>

              <h3>Vehicle State Can Change Meaning and Availability</h3>
              <p>
                An interface may behave differently when the vehicle is parked, moving, charging, in an alert condition, operating an assisted-driving feature, or being used by a passenger. A message that is acceptable when parked may be too long or interactive while driving. Translators and reviewers need to know when and why the content appears.
              </p>

              <h3>Hardware and Model Configurations Vary</h3>
              <p>
                One software platform may support different screen sizes, aspect ratios, touch and non-touch displays, rotary controllers, steering-wheel controls, physical buttons, drive-side layouts, model lines, and market-specific features. Localized content should be tested in representative configurations rather than evaluated only on a generic reference screen.
              </p>

              <h3>Vehicle Programs Have Long Lifecycles</h3>
              <p>
                Language assets may need to remain usable across product families, model years, regional variants, hardware configurations, software branches, technical documentation, aftersales support, and recurring software updates. Terminology decisions made for one release can influence many later systems and touchpoints.
              </p>

              <div className="recommendation-callout">
                <p className="eyebrow">QUALITY PRINCIPLE</p>
                <h3>Apply Controls According to Consequence, Not Volume Alone</h3>
                <p>
                  A media label, charging instruction, climate setting, account message, and driver warning should not automatically receive the same workflow. Evaluate operational function, visibility, severity, context, display constraints, and the consequence of misunderstanding.
                </p>
              </div>
            </section>

            <section id="context-first" className="article-section anchor-section">
              <h2>4. Context: The First Localization Requirement</h2>
              <SectionIntro>
                A short string can have several valid translations. The correct choice depends on where the content appears, what the user is doing, and what the vehicle is doing at that moment.
              </SectionIntro>
              <p>
                Consider the English word <strong>Park</strong>. It can refer to a transmission position, a parking location, the action of parking, a destination category, a vehicle state, or an instruction. The words <strong>Range</strong>, <strong>Charge</strong>, <strong>Apply</strong>, <strong>Resume</strong>, <strong>Home</strong>, <strong>Drive</strong>, and <strong>Start</strong> create similar ambiguity.
              </p>
              <p>
                The solution is not to ask linguists to make better guesses. It is to provide structured context before translation begins.
              </p>

              <div className="framework-panel" aria-labelledby="context-framework-title">
                <div className="framework-heading">
                  <p className="eyebrow">PRACTICAL FRAMEWORK</p>
                  <h3 id="context-framework-title">The Stepes HMI CONTEXT Framework</h3>
                  <p>Use these seven fields to turn an isolated string list into a localization-ready content asset.</p>
                </div>
                <ol className="context-framework-list">
                  {contextFramework.map((item) => (
                    <li key={`${item.letter}-${item.title}`}>
                      <div className="context-letter" aria-hidden="true">{item.letter}</div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <h3>Recommended HMI String Record</h3>
              <p>
                A context-rich record helps translators, reviewers, engineers, and testers work from the same intent.
              </p>
              <div className="definition-table">
                {stringRecordRows.map(([label, value]) => (
                  <div className="definition-row" key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <h3>Resolve Source Problems Before Translation</h3>
              <ul className="editorial-list">
                <li>Hard-coded interface text and text embedded in essential graphics</li>
                <li>Sentences assembled from fragments that assume English word order</li>
                <li>Unclear abbreviations, missing plural logic, and unprotected variables</li>
                <li>Strings reused where separate translations are required</li>
                <li>Fixed components with no expansion or writing-system strategy</li>
              </ul>
            </section>

            <section id="text-expansion" className="article-section anchor-section">
              <h2>5. Text Expansion, Legibility, and Display Constraints</h2>
              <SectionIntro>
                Character limits are useful, but they cannot predict whether a translation will fit, remain readable, or preserve the intended hierarchy in a real vehicle interface.
              </SectionIntro>

              <h3>Measure the Actual Interface Constraint</h3>
              <p>Localization teams should understand:</p>
              <ul className="editorial-list two-column-list">
                <li>Available pixel width and component height</li>
                <li>Maximum lines and wrapping rules</li>
                <li>Font family, size, weight, and line height</li>
                <li>Ellipsis and truncation behavior</li>
                <li>Icon, padding, and alignment requirements</li>
                <li>Dynamic values and variable-length content</li>
                <li>Display resolution and scaling behavior</li>
                <li>Whether the component can expand</li>
              </ul>

              <h3>Common Text-Fit Defects</h3>
              <p>
                Typical defects include truncated labels, hidden words, overlapping buttons, text colliding with icons, unintended line breaks, important meaning hidden behind an ellipsis, clipped diacritics, dynamic values exceeding the available width, and fallback fonts changing the visual hierarchy.
              </p>

              <h3>Language Expansion and Compression</h3>
              <p>
                German may require long compounds. French and Spanish frequently use more words than equivalent English interface text. Chinese and Japanese can express some concepts compactly but require appropriate fonts, line breaking, punctuation, and market terminology. Arabic letter shaping and mixed-direction content affect width and alignment. Fixed expansion percentages should therefore be treated as planning indicators, not universal design rules.
              </p>

              <h3>Abbreviation Requires Governance</h3>
              <p>
                Abbreviations can solve a real display problem, but uncontrolled shortening can reduce comprehension and create inconsistency. An approved short form should identify where it may be used, the minimum available width, whether it is familiar in the target market, and whether it also appears in manuals, voice prompts, or physical controls.
              </p>

              <div className="process-strip" aria-label="Text-fit validation sequence">
                {[
                  "Source String",
                  "Pseudolocalization",
                  "Target Translation",
                  "Integrated Screen",
                  "Visual Correction",
                  "Regression Check",
                ].map((item, index) => (
                  <div className="process-strip-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>

              <h3>Font and Glyph Readiness</h3>
              <p>
                Font validation should include diacritics, accented capitals, combining marks, Arabic shaping, Hebrew, Simplified and Traditional Chinese, Japanese kana and kanji, Korean Hangul, Thai, Indic writing systems, symbols, numerals, units, and punctuation. Font fallback should also be tested because a technically valid fallback can still create visible differences in weight, height, alignment, or style.
              </p>

              <h3>Pseudolocalization</h3>
              <p>
                Pseudolocalization can expose hard-coded strings, insufficient space, missing glyph support, encoding problems, fragmented sentence construction, variable-handling errors, untranslated components, and incomplete RTL support before every target language is introduced.
              </p>

              <p className="source-note">
                <a href="https://www.iso.org/standard/62784.html">ISO 15008:2017</a> is a relevant reference for image quality and the legibility of dynamic visual information presented to drivers. Localization can support applicable display and usability requirements, but it does not certify product compliance.
              </p>
            </section>

            <section id="writing-systems" className="article-section anchor-section">
              <h2>6. Writing Systems and Locale-Specific Behavior</h2>
              <SectionIntro>
                A writing system can change direction, alignment, punctuation, line breaking, component order, input behavior, font selection, and the relationship between interface text and visual controls.
              </SectionIntro>

              <h3>Right-to-Left Interfaces</h3>
              <p>
                Arabic and Hebrew interfaces may require changes to text alignment, menu order, lists, tabs, sliders, progress indicators, input fields, navigation controls, and dialog layouts. An RTL interface should not be created by reversing every visual element. Maps, vehicle diagrams, physical-orientation symbols, media controls, gear indicators, and other functionally directional elements require case-by-case review.
              </p>

              <h3>Bidirectional Text</h3>
              <p>
                RTL interfaces frequently contain left-to-right elements such as model names, road names, Latin brands, part numbers, URLs, temperatures, charging values, units, and software versions. These strings can display punctuation, numbers, or embedded phrases in the wrong order when base direction and text isolation are not handled correctly. Validation should occur in the actual rendering environment.
              </p>

              <h3>Chinese, Japanese, and Korean</h3>
              <p>
                CJK localization requires decisions about Simplified and Traditional Chinese, market-specific terminology, Japanese register and politeness, Korean spacing, font variants, glyph style, punctuation, line breaking, full-width and half-width characters, Latin acronyms, search behavior, and keyboard input.
              </p>

              <h3>Combining and Complex Writing Systems</h3>
              <p>
                Thai, Vietnamese, Hindi, Bengali, Tamil, and other writing systems may require support for combining marks, complex shaping, word segmentation, language-specific line breaking, increased vertical space, and different input methods. A container that fits Latin text can still clip a valid character above or below the baseline.
              </p>

              <h3>Regional Formats</h3>
              <p>
                Locale-aware software should manage distance and speed units, temperature, energy consumption, decimal and thousands separators, date order, 12-hour or 24-hour time, time zones, addresses, navigation conventions, currency, calendars, and phone-number formats wherever possible.
              </p>

              <div className="table-wrap" role="region" aria-label="Writing-system risk matrix" tabIndex="0">
                <table>
                  <caption>Writing-System Risk Matrix</caption>
                  <thead>
                    <tr>
                      <th scope="col">Requirement</th>
                      <th scope="col">Possible Defect</th>
                      <th scope="col">Recommended Validation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {writingSystemRows.map(([requirement, defect, validation]) => (
                      <tr key={requirement}>
                        <th scope="row" data-label="Requirement">{requirement}</th>
                        <td data-label="Possible Defect">{defect}</td>
                        <td data-label="Recommended Validation">{validation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="clear-language" className="article-section anchor-section">
              <h2>7. Clear Language, Glanceability, and Driver Attention</h2>
              <SectionIntro>
                Automotive interface language should communicate the intended meaning with the least unnecessary cognitive effort. Brevity is valuable only when it preserves clarity.
              </SectionIntro>

              <h3>Clarity Before Literalness</h3>
              <p>
                A strong HMI translation preserves the intended action, uses familiar market terminology, matches the function of the control, maintains message severity, fits the component, and remains consistent with related screens. The most literal translation is not always the clearest interface translation.
              </p>

              <h3>Use Action-Oriented Language</h3>
              <p>
                Buttons and instructions should use clear verbs, identify the affected feature, confirm what the system completed, and explain how to recover from an error when the interface can provide that guidance. Unnecessary technical detail should be avoided during driving interactions.
              </p>

              <h3>Preserve Message Hierarchy</h3>
              <p>
                Localization programs should distinguish informational messages, status updates, confirmations, recoverable errors, warnings, intervention requests, and critical system states. Severity should not be weakened or exaggerated through translation.
              </p>

              <h3>Align Text With Icons and Controls</h3>
              <p>
                Interface wording should agree with adjacent icons, physical buttons, rotary-controller actions, steering-wheel controls, owner manuals, spoken prompts, and service terminology. When the icon and text suggest different actions, the defect is an interface-level inconsistency rather than a purely linguistic issue.
              </p>

              <div className="important-note">
                <strong>Important distinction:</strong>
                <p>
                  Localization can support a customer’s HMI, usability, market, quality, and documentation requirements. Product design, compliance determination, functional-safety evaluation, human-factors validation, and final vehicle approval remain with the responsible automotive organizations and authorities.
                </p>
              </div>
            </section>

            <section id="voice-localization" className="article-section anchor-section">
              <h2>8. Voice and Conversational Interface Localization</h2>
              <SectionIntro>
                Voice localization is not simply the process of reading translated screen text aloud. It requires separate treatment of user utterances, intents, recognition, pronunciation, spoken output, confirmations, and recovery behavior.
              </SectionIntro>

              <h3>Command and Intent Localization</h3>
              <p>
                Users rarely express the same request in one fixed way. A command such as “Find a charging station” may need regional vocabulary, natural synonyms, different word order, formal and informal forms, location entities, charging-network names, and requests containing route or charging preferences. The target-language command set should represent how users naturally speak rather than mechanically translating an English utterance list.
              </p>

              <h3>Automatic Speech Recognition</h3>
              <p>
                ASR should be evaluated for accent and dialect coverage, speech rate, cabin and road noise, passenger speech, similar-sounding commands, regional place names, contact names, product names, feature names, code-switching, false recognition, and rejection of unsupported requests. Recognition accuracy alone is not sufficient; the recognized language must also route to the correct intent.
              </p>

              <h3>Text-to-Speech Output</h3>
              <p>
                TTS review should address pronunciation, acronyms, abbreviations, model names, brand names, road names, numbers, units, pauses, phrasing, naturalness, and voice selection. A string that reads naturally on screen may sound awkward when spoken, so written and spoken variants should be permitted when the experience requires them.
              </p>

              <h3>Confirmation and Error Recovery</h3>
              <p>
                Voice systems should make clear what the system understood, what action it completed, whether confirmation is required, how the user can correct a misunderstanding, why a request is unavailable, and what the user can say next. Recovery language should be concise and should not trap users in repeated failed interactions.
              </p>

              <h3>Conversational and Generative Interfaces</h3>
              <p>
                Automotive platforms are moving beyond fixed command grammars toward more natural, multi-turn interactions. This increases the importance of multilingual intent design, generated-response controls, entity handling, terminology, response length, safety boundaries, and interoperability across navigation, search, vehicle controls, and connected services.
              </p>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing-guide/">
                Continue to ADAS, Voice, and In-Vehicle Linguistic Testing
              </EditorialLink>
            </section>

            <section id="localization-engineering" className="article-section anchor-section">
              <h2>9. Localization Engineering for Vehicle Software</h2>
              <SectionIntro>
                Automotive HMI translation must preserve the software structure that allows localized resources to compile, load, render, and function correctly.
              </SectionIntro>

              <h3>Common Resource Formats</h3>
              <p>
                Depending on the platform, vehicle software may use XML, Android XML resources, JSON, XLIFF, Java properties, PO files, YAML, CSV, XLSX exports, Qt resources, HTML, and proprietary OEM or supplier formats. Custom formats should be reviewed before production so translatable content, protected code, encoding, structure, and output requirements can be confirmed.
              </p>

              <h3>Protect Software Elements</h3>
              <ul className="editorial-list two-column-list">
                <li>String keys and nontranslatable identifiers</li>
                <li>Variables and placeholders</li>
                <li>Tags, markup, and escape sequences</li>
                <li>Control characters and file paths</li>
                <li>Product names and model designations</li>
                <li>Conditional content and locale logic</li>
              </ul>

              <h3>Build for Internationalization</h3>
              <p>
                Internationalization requirements include Unicode support, externalized strings, complete default resources, plural handling, grammatical variation, flexible layouts, locale-aware number and date formatting, RTL support, font coverage, input-method support, locale-aware search and sorting, and separation of content from code.
              </p>

              <h3>Avoid Sentence Concatenation</h3>
              <p>
                Developers should avoid constructing messages from fragments that assume English word order. Languages may require different grammar, gender, cases, plural forms, variable positions, or bidirectional behavior. Complete translatable messages with well-defined variables are generally safer.
              </p>

              <h3>Account for OEM Customization</h3>
              <p>
                OEMs may customize dimensions, fonts, text appearance, component layouts, navigation placement, themes, system bars, rotary behavior, display configurations, resource overlays, and system services. The final localized product should be validated in a configuration that represents the intended vehicle program.
              </p>

              <EditorialLink href="https://www.stepes.com/software-localization-services/">
                Explore Stepes Software Localization Services
              </EditorialLink>
            </section>

            <section id="terminology" className="article-section anchor-section">
              <h2>10. Terminology Across the Vehicle Experience</h2>
              <SectionIntro>
                HMI terminology should be governed across the complete customer and service ecosystem rather than managed as an isolated interface glossary.
              </SectionIntro>
              <p>
                The same concept may appear in instrument clusters, center displays, voice prompts, owner manuals, service manuals, diagnostic tools, mobile applications, websites, dealer training, technical support, and release notes. Inconsistent terminology makes features harder to understand and increases review cycles and corrective work.
              </p>

              <h3>What an Automotive HMI Termbase Should Contain</h3>
              <div className="definition-table compact-definition-table">
                {[
                  ["Source term and definition", "Clarify the canonical concept and intended meaning."],
                  ["Vehicle system and content type", "Identify the domain and where the term appears."],
                  ["Approved translation", "Control the preferred target-language term."],
                  ["Permitted abbreviation", "Support constrained interfaces without uncontrolled shortening."],
                  ["Prohibited alternatives", "Prevent known inconsistencies and legacy wording."],
                  ["Market, locale, and model applicability", "Record legitimate regional and product differences."],
                  ["Screenshot and usage example", "Show how the concept appears in a real interface."],
                  ["Approval status and owner", "Document governance and accountability."],
                ].map(([label, value]) => (
                  <div className="definition-row" key={label}>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <h3>Translation Memory and Terminology Serve Different Purposes</h3>
              <p>
                <a href="https://www.stepes.com/terminology-management/">Terminology Management</a> governs concepts, definitions, approved terms, abbreviations, and prohibited alternatives. <a href="https://www.stepes.com/translation-memory/">Translation Memory</a> stores previously translated strings or segments so approved language can be reused efficiently. A translation-memory match is not automatically correct for a new screen and should still be checked against the current context, vehicle state, product configuration, and display constraint.
              </p>
            </section>

            <section id="workflow" className="article-section anchor-section">
              <h2>11. An End-to-End Automotive HMI Localization Workflow</h2>
              <SectionIntro>
                A reliable workflow begins before translation and continues through integrated validation, defect resolution, regression testing, and language-asset maintenance.
              </SectionIntro>
              <ol className="workflow-list">
                {workflowSteps.map((step) => (
                  <li key={step.number}>
                    <span className="workflow-number">{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="testing" className="article-section anchor-section">
              <h2>12. In-Context and In-Vehicle Testing</h2>
              <SectionIntro>
                File-level QA can confirm that a string exists and is structurally valid, but only integrated review can show how the translation appears, behaves, and interacts with the complete vehicle experience.
              </SectionIntro>
              <p>
                Integrated testing may reveal incorrect meaning in context, truncation, poor line breaks, fallback fonts, missing glyphs, misaligned RTL content, incorrect dynamic values, broken navigation, untranslated components, inconsistent terminology, voice behavior problems, or state-dependent defects.
              </p>

              <div className="testing-ladder" aria-label="Automotive HMI testing hierarchy">
                {testingLevels.map((level, index) => (
                  <section key={level.label}>
                    <span className="testing-index">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{level.label}</h3>
                    <p>{level.text}</p>
                  </section>
                ))}
              </div>

              <div className="three-column-notes">
                <section>
                  <h3>Linguistic Testing</h3>
                  <p>Meaning, grammar, naturalness, terminology, tone, severity, completeness, and cross-screen consistency.</p>
                </section>
                <section>
                  <h3>Cosmetic Testing</h3>
                  <p>Truncation, overlap, fonts, spacing, alignment, line breaks, RTL presentation, icon relationships, and hierarchy.</p>
                </section>
                <section>
                  <h3>Functional Testing</h3>
                  <p>Navigation, controls, search, input, locale formats, dynamic variables, sorting, voice activation, and state behavior.</p>
                </section>
              </div>

              <h3>Defect Reporting</h3>
              <p>
                Each issue should include the language and locale, vehicle or platform, build, screen, source and target string, screenshot or recording, reproduction steps, issue category, severity, proposed correction, assigned owner, resolution status, and regression result. A screenshot without a build and locale may not be sufficient when several configurations share similar screens.
              </p>
            </section>

            <section id="risk-based-quality" className="article-section anchor-section">
              <h2>13. Risk-Based Quality and the Appropriate Use of AI</h2>
              <SectionIntro>
                Not every interface string requires the same production model. Quality controls should be matched to function, visibility, context, reversibility, and the consequence of misunderstanding.
              </SectionIntro>

              <div className="risk-routing" aria-label="HMI quality-routing model">
                {riskLevels.map((item) => (
                  <section key={item.level}>
                    <div className="risk-level">{item.level}</div>
                    <h3>{item.title}</h3>
                    <p><strong>Examples:</strong> {item.examples}</p>
                    <p><strong>Recommended controls:</strong> {item.controls}</p>
                  </section>
                ))}
              </div>

              <h3>Where AI Adds Value</h3>
              <p>
                AI can improve speed and scalability when it is supported by clear source content, sufficient context, approved terminology, translation memory, defined review criteria, risk-based routing, human validation, and correction feedback. It may be particularly useful for recurring updates, repeated content, lower-risk support information, and draft acceleration.
              </p>

              <h3>Where Stronger Human Control Is Needed</h3>
              <p>
                Stronger professional review is generally appropriate for safety-sensitive, context-poor, highly visible, voice-dependent, terminology-critical, legally significant, operational, or difficult-to-reverse content. The practical decision is not AI versus humans; it is which combination of automation, professional expertise, review, and testing is appropriate for each content class.
              </p>

              <EditorialLink href="https://www.stepes.com/ai-translation-services/">
                Explore Stepes AI Translation Services
              </EditorialLink>
            </section>

            <section id="continuous-localization" className="article-section anchor-section">
              <h2>14. Continuous Localization and OTA Updates</h2>
              <SectionIntro>
                Multilingual HMI content should be managed as a versioned software asset throughout the vehicle lifecycle rather than as a one-time launch deliverable.
              </SectionIntro>
              <p>A continuous localization model may include:</p>
              <ul className="editorial-list two-column-list">
                <li>Source-change detection</li>
                <li>Incremental translation</li>
                <li>Translation-memory reuse</li>
                <li>Terminology updates</li>
                <li>Branch and version control</li>
                <li>Model and market filtering</li>
                <li>Automated routing and review</li>
                <li>Localization freezes</li>
                <li>Multilingual build generation</li>
                <li>Regression testing and release synchronization</li>
              </ul>

              <h3>Translate the Change, Preserve the Context</h3>
              <p>
                Incremental translation can reduce repeated work, but individual updates should not be reviewed in isolation. A small source change may affect related labels, voice prompts, owner documentation, error messages, terminology, screen layout, dynamic variables, and previously approved translations.
              </p>

              <h3>Control Versions and Variants</h3>
              <p>
                Language assets may need to be organized by platform, model, model year, market, hardware configuration, feature package, software branch, and release version. An approved translation for one variant should not automatically overwrite a legitimate difference in another.
              </p>

              <h3>Build Regression Into Every Release</h3>
              <p>
                A corrected defect can reappear when source files are merged, an older translation memory is applied, branches are synchronized, a component is redesigned, a fallback resource loads, a term changes globally, or a new screen size is introduced. Regression testing should be part of recurring multilingual releases.
              </p>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-ota-software-update-localization-guide/">
                Continue to Localization for Automotive OTA Software Updates
              </EditorialLink>
            </section>

            <section id="emerging-priorities" className="article-section anchor-section">
              <h2>15. Emerging Automotive HMI Priorities</h2>
              <SectionIntro>
                Automotive interfaces are becoming more software-defined, connected, personalized, conversational, and multimodal. Localization programs must evolve with the user experience rather than treating these changes as isolated feature additions.
              </SectionIntro>

              <h3>Conversational and AI-Enabled Experiences</h3>
              <p>
                Multi-turn dialogue and generated responses introduce new requirements for context retention, intent and entity localization, regional vocabulary, terminology control, response-length management, error recovery, safety boundaries, and quality evaluation. Generated content should not be assumed appropriate simply because the underlying model supports the language.
              </p>

              <h3>Multimodal Interaction</h3>
              <p>
                A single journey may combine screen text, voice, touch, rotary input, steering-wheel controls, sound, visual alerts, and haptic feedback. The spoken instruction, visible label, and physical control should reinforce one another.
              </p>

              <h3>Multiple Displays and Passenger Experiences</h3>
              <p>
                Modern vehicles may include clusters, center displays, passenger displays, rear-seat entertainment, distant displays, head-up displays, and connected mobile devices. Content restrictions, interaction patterns, and translation constraints can differ according to who can see and control each display.
              </p>

              <h3>Driving and Parked Applications</h3>
              <p>
                Automotive platforms may offer different functionality while moving and while parked. Content that is acceptable in a parked experience may need to be simplified, restricted, or unavailable during driving. Localization planning should identify and test each state.
              </p>

              <h3>OEM-Customized Digital Cockpits</h3>
              <p>
                Shared platforms accelerate development, but manufacturers continue to differentiate information architecture, visual design, controls, display configurations, voice experiences, feature terminology, and brand tone. Localization must support this differentiation rather than treating every implementation as a generic platform interface.
              </p>

              <h3>EV and Energy-Management Experiences</h3>
              <p>
                Electric vehicles continue to expand the vocabulary around charging, range, battery condition, energy use, route optimization, regenerative braking, home energy, and public charging networks. These concepts frequently cross the vehicle, mobile application, charging station, website, support center, and technical documentation.
              </p>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization-guide/">
                Continue to EV Battery and Charging Content Localization
              </EditorialLink>
            </section>

            <section id="release-checklist" className="article-section anchor-section checklist-section">
              <p className="eyebrow">PRACTICAL TOOL</p>
              <h2>16. Automotive HMI Release-Readiness Checklist</h2>
              <SectionIntro>
                Use this checklist to confirm that multilingual vehicle content is prepared, translated, integrated, tested, approved, and maintainable before release.
              </SectionIntro>
              <div className="checklist-grid">
                {checklistGroups.map((group) => (
                  <ChecklistGroup key={group.title} group={group} />
                ))}
              </div>
            </section>

            <section id="partner-questions" className="article-section anchor-section">
              <h2>17. Questions to Ask an Automotive HMI Localization Partner</h2>
              <SectionIntro>
                A capable provider should be able to explain how translation, context, engineering, terminology, review, defect resolution, and testing work together.
              </SectionIntro>
              <ul className="question-list">
                {partnerQuestions.map((question) => (
                  <li key={question}>
                    <span className="question-marker" aria-hidden="true" />
                    <p>{question}</p>
                  </li>
                ))}
              </ul>
              <p>
                Strong answers should describe a practical workflow rather than relying on general claims about quality. They should also explain limitations, test access, approval responsibilities, and how decisions will be recorded for future releases.
              </p>
            </section>

            <section id="stepes-support" className="article-section anchor-section stepes-section">
              <h2>18. How Stepes Supports Automotive HMI Localization</h2>
              <SectionIntro>
                Stepes helps automotive organizations localize vehicle interfaces, infotainment systems, voice experiences, companion applications, and connected content through workflows aligned with the intended system, market, format, risk, and release schedule.
              </SectionIntro>

              <div className="support-list">
                <section>
                  <h3>Automotive and Native-Language Expertise</h3>
                  <p>Professional linguists are selected according to the vehicle system, technical domain, interface type, target market, voice requirements, and intended audience.</p>
                </section>
                <section>
                  <h3>Context-Rich HMI Translation</h3>
                  <p>Resource files, string IDs, developer comments, screenshots, prototypes, reference builds, text constraints, vehicle states, and approved terminology help teams translate the intended meaning.</p>
                </section>
                <section>
                  <h3>Localization Engineering</h3>
                  <p>Stepes supports file preparation, protected software elements, multilingual output, automated QA, reintegration requirements, and coordination with customer development environments.</p>
                </section>
                <section>
                  <h3>Terminology and Language-Asset Management</h3>
                  <p>Termbases, translation memories, style guides, market instructions, and reviewer feedback support consistency across HMI, voice, manuals, service content, applications, models, and releases.</p>
                </section>
                <section>
                  <h3>In-Context Quality Assurance</h3>
                  <p>Depending on project requirements and access, validation may include screenshots, prototypes, pseudolocalization, emulators, simulators, functional QA, bench systems, in-vehicle review, and regression testing.</p>
                </section>
                <section>
                  <h3>AI + Human Workflows Matched to Risk</h3>
                  <p>Translation technology, language assets, automation, and professional expertise are combined according to content purpose, volume, context, visibility, risk, and required validation.</p>
                </section>
              </div>

              <EditorialLink href="https://www.stepes.com/automotive-translation-services/">
                Explore Automotive Translation Services
              </EditorialLink>
            </section>

            <section id="faq" className="article-section anchor-section faq-section">
              <h2>19. Automotive HMI Localization FAQ</h2>
              <div className="faq-panel">
                {faqs.map((item) => (
                  <details key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">+</span>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-section sources-section" aria-labelledby="sources-title">
              <h2 id="sources-title">Authoritative References Used in This Guide</h2>
              <p>
                Automotive platforms, testing tools, standards, and guidance evolve. The following primary sources provide additional technical context and should be reviewed whenever program requirements or published guidance change.
              </p>
              <ul className="sources-list">
                {sourceLinks.map((source) => (
                  <li key={source.href}>
                    <a href={source.href}>{source.title}</a>
                    <span>{source.organization}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="article-section conclusion-section" aria-labelledby="conclusion-title">
              <h2 id="conclusion-title">Treat HMI Language as a Vehicle Software Asset</h2>
              <p className="lead-paragraph">
                Effective automotive HMI localization begins with context, internationalization readiness, approved terminology, realistic constraints, risk-based quality routing, and a test strategy that reflects the intended vehicle environment.
              </p>
              <p>
                The strongest programs do not wait until final multilingual builds to discover ambiguity, layout limitations, missing glyphs, incorrect locale behavior, or inconsistent voice interactions. They prepare language and software together, validate progressively, record decisions, and reuse approved assets across models, markets, and updates.
              </p>
              <p>
                This approach improves clarity for drivers and passengers while giving product, engineering, localization, and quality teams a more controlled path to multilingual release readiness.
              </p>
            </section>
          </article>
        </div>
      </div>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-heading">
            <p className="eyebrow">CONTINUE EXPLORING</p>
            <h2 id="related-title">Related Automotive Localization Guides</h2>
            <p>Continue to the next specialized decision within the automotive localization program.</p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="related-item" href={resource.href} key={resource.title}>
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell final-cta-inner">
          <div>
            <p className="eyebrow">PLAN YOUR AUTOMOTIVE LOCALIZATION PROGRAM</p>
            <h2 id="final-cta-title">Build a Multilingual HMI Workflow Around the Real Vehicle Experience</h2>
            <p>
              Stepes can help assess your resource files, target languages, interface constraints, automotive terminology, voice requirements, release schedule, and available testing environments.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="button button-primary" href="https://www.stepes.com/contact-us/">
              Talk to an Automotive Localization Expert <ArrowIcon />
            </a>
            <a className="button button-secondary" href="https://app.stepes.com/quote/">
              Request a Translation Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #9D174F;
    --stepes-blush: #FCF3F7;
    --stepes-blush-strong: #F9E5EE;
    --ink: #0D1728;
    --body: #42516A;
    --muted: #667085;
    --line: #E2E7EE;
    --soft-line: #EEF1F5;
    --soft: #F7F8FA;
    --white: #FFFFFF;
    --radius-primary: 30px;
    --radius-secondary: 22px;
    --shell: 1280px;
    --reading: 750px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .resource-guide {
    color: var(--ink);
    background: var(--white);
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  .resource-guide a { color: inherit; }
  .resource-guide p,
  .resource-guide li,
  .resource-guide td,
  .resource-guide th {
    font-size: 18px;
    line-height: 1.68;
  }
  .resource-guide p { margin: 0 0 22px; color: var(--body); }
  .resource-guide h1,
  .resource-guide h2,
  .resource-guide h3,
  .resource-guide h4 {
    color: var(--ink);
    margin: 0;
    letter-spacing: -0.025em;
  }
  .resource-guide h1 { font-size: 48px; line-height: 1.1; font-weight: 600; }
  .resource-guide h2 { font-size: 36px; line-height: 1.22; font-weight: 600; }
  .resource-guide h3 { font-size: 24px; line-height: 1.32; font-weight: 600; }
  .resource-guide h4 { font-size: 19px; line-height: 1.4; font-weight: 600; }
  .resource-guide h1,
  .resource-guide h2,
  .resource-guide h3,
  .resource-guide h4,
  .resource-guide a,
  .resource-guide summary,
  .resource-guide strong { overflow-wrap: break-word; }
  .shell { width: min(var(--shell), calc(100% - 80px)); margin: 0 auto; min-width: 0; }
  .eyebrow {
    margin: 0 0 14px !important;
    color: var(--stepes-magenta) !important;
    font-size: 11px !important;
    line-height: 1.3 !important;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .anchor-section { scroll-margin-top: 112px; }

  .hero-shell {
    padding: 32px 0 96px;
    background:
      radial-gradient(circle at 88% 14%, rgba(193,29,99,0.07), transparent 34%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
    border-bottom: 1px solid var(--soft-line);
  }
  .breadcrumbs { margin-bottom: 28px; }
  .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 5px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .breadcrumbs li { display: inline-flex; align-items: baseline; gap: 5px; min-width: 0; max-width: 100%; font-size: 14px; line-height: 1.5; color: var(--muted); }
  .breadcrumbs li > span:not(.crumb-separator),
  .breadcrumbs a { min-width: 0; overflow-wrap: anywhere; }
  .breadcrumbs a { color: var(--muted); text-decoration: none; }
  .breadcrumbs a:hover,
  .breadcrumbs a:focus-visible { color: var(--stepes-magenta); }
  .breadcrumbs [aria-current="page"] { color: #3E4A5F; font-weight: 500; }
  .crumb-separator { color: #AAB2BF; }
  .hero-grid { display: block; }
  .hero-copy { min-width: 0; max-width: 920px; }
  .hero-deck { font-size: 21px !important; line-height: 1.58 !important; max-width: 840px; margin: 26px 0 30px !important; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
  .button {
    min-height: 50px;
    padding: 13px 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid transparent;
    text-align: center;
    line-height: 1.35;
    transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
  }
  .button svg,
  .editorial-link svg,
  .related-item svg { width: 19px; height: 19px; flex: 0 0 auto; }
  .button-primary,
  .button-primary:visited { background: var(--stepes-magenta); color: #FFFFFF !important; }
  .button-primary *,
  .button-primary:visited * { color: #FFFFFF !important; }
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible { background: var(--stepes-magenta-dark); color: #FFFFFF !important; transform: translateY(-1px); }
  .button-primary:hover *,
  .button-primary:active *,
  .button-primary:focus *,
  .button-primary:focus-visible * { color: #FFFFFF !important; }
  .button-secondary { border-color: #C9D0DA; background: #FFFFFF; color: var(--ink) !important; }
  .button-secondary:hover,
  .button-secondary:focus-visible { border-color: var(--stepes-magenta); color: var(--stepes-magenta) !important; }
  .hero-audience { margin: 22px 0 0 !important; font-size: 16px !important; line-height: 1.55 !important; color: var(--muted) !important; max-width: 760px; }

  .takeaways-section { padding: 78px 0; background: var(--stepes-blush); border-bottom: 1px solid #F0DCE5; }
  .takeaways-grid { display: grid; grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr); gap: 76px; align-items: start; }
  .takeaways-list { list-style: none; padding: 0; margin: 0; }
  .takeaways-list li { display: grid; grid-template-columns: 30px minmax(0, 1fr); gap: 18px; padding: 0 0 24px; margin-bottom: 24px; border-bottom: 1px solid rgba(193,29,99,0.17); }
  .takeaways-list li:last-child { margin: 0; padding-bottom: 0; border-bottom: 0; }
  .takeaway-marker { width: 22px; height: 2px; margin-top: 12px; background: var(--stepes-magenta); }
  .takeaways-list h3 { font-size: 20px; margin-bottom: 7px; }
  .takeaways-list p { margin: 0; font-size: 16px; line-height: 1.6; }

  .article-shell { padding-top: 72px; padding-bottom: 112px; }
  .article-grid { display: grid; grid-template-columns: 250px minmax(0, var(--reading)); gap: 60px; justify-content: center; align-items: start; }
  .toc-desktop { position: sticky; top: 104px; max-height: calc(100vh - 128px); overflow-y: auto; padding-right: 18px; }
  .toc-heading { color: var(--ink) !important; font-size: 15px !important; font-weight: 600; margin: 0 0 16px !important; }
  .toc-links { display: flex; flex-direction: column; border-left: 1px solid var(--line); }
  .toc-links a { display: block; min-width: 0; padding: 8px 0 8px 17px; color: #667085; font-size: 15px; line-height: 1.42; text-decoration: none; border-left: 2px solid transparent; margin-left: -1px; overflow-wrap: anywhere; }
  .toc-links a:hover,
  .toc-links a:focus-visible { color: var(--stepes-magenta); border-left-color: var(--stepes-magenta); }
  .toc-top-link { color: var(--ink) !important; font-weight: 600; }
  .toc-mobile { display: none; }
  .article-body { min-width: 0; }
  .article-opening,
  .article-section { padding-bottom: 72px; margin-bottom: 72px; border-bottom: 1px solid var(--line); }
  .article-section:last-child { margin-bottom: 0; }
  .article-opening h2,
  .article-section h2 { margin-bottom: 24px; }
  .article-section h3 { margin-top: 38px; margin-bottom: 14px; }
  .lead-paragraph,
  .section-intro { font-size: 20px !important; line-height: 1.62 !important; color: #34445C !important; }
  .section-intro { margin-bottom: 28px !important; }
  .editorial-list { padding-left: 24px; margin: 8px 0 28px; color: var(--body); }
  .editorial-list li { padding-left: 5px; margin-bottom: 10px; }
  .editorial-list li::marker { color: var(--stepes-magenta); }
  .two-column-list { columns: 2; column-gap: 48px; }
  .two-column-list li { break-inside: avoid; }
  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
  }
  .editorial-link:hover,
  .editorial-link:focus-visible { color: var(--stepes-magenta-dark) !important; }

  .surface-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 44px; margin: 36px 0 42px; border-top: 1px solid var(--line); }
  .surface-grid section { padding: 26px 0 24px; border-bottom: 1px solid var(--line); }
  .surface-grid h3 { font-size: 20px; margin: 0 0 9px; }
  .surface-grid p { font-size: 16px; line-height: 1.6; margin: 0; }

  .table-wrap { width: 100%; max-width: 100%; overflow-x: auto; margin: 38px 0 12px; border-top: 2px solid var(--ink); border-bottom: 1px solid var(--line); -webkit-overflow-scrolling: touch; }
  .resource-guide table { width: 100%; border-collapse: collapse; min-width: 700px; }
  .resource-guide caption { text-align: left; padding: 0 0 16px; color: var(--ink); font-size: 17px; font-weight: 600; }
  .resource-guide th,
  .resource-guide td { text-align: left; vertical-align: top; padding: 18px 16px; border-bottom: 1px solid var(--line); color: var(--body); font-size: 16px !important; line-height: 1.52 !important; }
  .resource-guide thead th { color: var(--ink); font-weight: 600; background: var(--soft); }
  .resource-guide tbody th { color: var(--ink); font-weight: 600; }
  .resource-guide tbody tr:last-child th,
  .resource-guide tbody tr:last-child td { border-bottom: 0; }

  .recommendation-callout,
  .important-note {
    margin: 40px 0 6px;
    padding: 30px 32px;
    background: var(--stepes-blush);
    border: 1px solid #F0DCE5;
  }
  .recommendation-callout h3 { margin: 0 0 12px; }
  .recommendation-callout p:last-child,
  .important-note p:last-child { margin-bottom: 0; }
  .important-note { background: #F7F8FA; border: 1px solid var(--line); }
  .important-note strong { display: block; font-size: 17px; margin-bottom: 7px; }

  .framework-panel { margin: 42px 0; padding: 44px; background: #111827; border-radius: var(--radius-primary); }
  .framework-panel .eyebrow { color: #F2A7C6 !important; }
  .framework-heading h3,
  .framework-heading p { color: #FFFFFF; }
  .framework-heading h3 { margin: 0 0 12px; font-size: 30px; }
  .framework-heading p { max-width: 620px; margin-bottom: 30px; color: #D7DCE5; font-size: 17px; }
  .context-framework-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0; }
  .context-framework-list li { display: grid; grid-template-columns: 58px minmax(0,1fr); gap: 20px; padding: 22px 0; border-top: 1px solid rgba(255,255,255,0.14); }
  .context-letter { width: 48px; height: 48px; border-radius: 50%; background: var(--stepes-magenta); color: #FFFFFF; display: grid; place-items: center; font-size: 22px; font-weight: 600; }
  .context-framework-list h4 { color: #FFFFFF; margin: 3px 0 6px; }
  .context-framework-list p { color: #D7DCE5; font-size: 16px; line-height: 1.58; margin: 0; }

  .definition-table { margin: 28px 0 12px; border-top: 2px solid var(--ink); }
  .definition-row { display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 24px; padding: 16px 0; border-bottom: 1px solid var(--line); }
  .definition-row strong { font-size: 16px; line-height: 1.55; }
  .definition-row span { color: var(--body); font-size: 16px; line-height: 1.55; }
  .compact-definition-table .definition-row { grid-template-columns: 250px minmax(0,1fr); }

  .process-strip { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); margin: 38px 0; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .process-strip-item { min-height: 112px; padding: 20px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
  .process-strip-item span { display: block; margin-bottom: 10px; color: var(--stepes-magenta); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; }
  .process-strip-item strong { font-size: 16px; line-height: 1.45; }
  .source-note { padding: 22px 24px; background: var(--soft); font-size: 16px !important; line-height: 1.6 !important; border-left: 3px solid #98A2B3; }
  .source-note a { color: var(--stepes-magenta); font-weight: 600; text-decoration: none; }
  .source-note a:hover,
  .source-note a:focus-visible { color: var(--stepes-magenta-dark); }

  .workflow-list { list-style: none; padding: 0; margin: 38px 0 0; }
  .workflow-list li { display: grid; grid-template-columns: 62px minmax(0, 1fr); gap: 20px; padding: 27px 0; border-top: 1px solid var(--line); }
  .workflow-list li:last-child { border-bottom: 1px solid var(--line); }
  .workflow-number { color: var(--stepes-magenta); font-size: 13px; font-weight: 600; letter-spacing: 0.08em; padding-top: 5px; }
  .workflow-list h3 { margin: 0 0 8px; font-size: 21px; }
  .workflow-list p { margin: 0; font-size: 16px; line-height: 1.62; }

  .testing-ladder { margin: 38px 0 42px; border-top: 2px solid var(--ink); }
  .testing-ladder section { display: grid; grid-template-columns: 58px 230px minmax(0,1fr); gap: 22px; padding: 22px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .testing-index { color: var(--stepes-magenta); font-size: 13px; font-weight: 600; letter-spacing: 0.08em; padding-top: 4px; }
  .testing-ladder h3 { margin: 0; font-size: 19px; }
  .testing-ladder p { margin: 0; font-size: 16px; line-height: 1.58; }
  .three-column-notes { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 26px; margin: 38px 0; }
  .three-column-notes section { padding-top: 18px; border-top: 2px solid var(--stepes-magenta); }
  .three-column-notes h3 { margin: 0 0 9px; font-size: 19px; }
  .three-column-notes p { margin: 0; font-size: 16px; line-height: 1.58; }

  .risk-routing { margin: 38px 0 42px; border-top: 2px solid var(--ink); }
  .risk-routing section { padding: 28px 0; border-bottom: 1px solid var(--line); }
  .risk-level { display: inline-block; margin-bottom: 10px; color: var(--stepes-magenta); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; }
  .risk-routing h3 { margin: 0 0 12px; }
  .risk-routing p { font-size: 16px; line-height: 1.6; margin-bottom: 8px; }
  .risk-routing p:last-child { margin-bottom: 0; }

  .checklist-section { padding: 52px 44px 58px; background: var(--soft); border: 1px solid var(--line); border-radius: var(--radius-primary); }
  .checklist-grid { display: grid; gap: 0; margin-top: 34px; }
  .checklist-group { padding: 30px 0; border-top: 1px solid #D8DEE7; }
  .checklist-group h3 { margin: 0 0 18px; }
  .checklist-group ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 28px; }
  .checklist-group li { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 10px; font-size: 16px; line-height: 1.55; color: var(--body); }
  .check-marker { width: 20px; height: 20px; border: 1px solid #C8D0DB; background: #FFFFFF; color: var(--stepes-magenta); display: grid; place-items: center; margin-top: 2px; }
  .check-marker svg { width: 14px; height: 14px; }

  .question-list { list-style: none; padding: 0; margin: 34px 0; border-top: 1px solid var(--line); }
  .question-list li { display: grid; grid-template-columns: 26px minmax(0,1fr); gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .question-marker { width: 20px; height: 2px; margin-top: 13px; background: var(--stepes-magenta); }
  .question-list p { margin: 0; color: var(--ink); font-size: 17px; line-height: 1.55; font-weight: 500; }

  .stepes-section { padding: 50px 44px 56px; background: var(--stepes-blush); border: 1px solid #F0DCE5; border-radius: var(--radius-primary); }
  .support-list { margin: 34px 0; border-top: 1px solid rgba(193,29,99,0.18); }
  .support-list section { display: grid; grid-template-columns: 250px minmax(0,1fr); gap: 30px; padding: 24px 0; border-bottom: 1px solid rgba(193,29,99,0.18); }
  .support-list h3 { margin: 0; font-size: 19px; }
  .support-list p { margin: 0; font-size: 16px; line-height: 1.6; }

  .faq-panel { margin-top: 32px; border-top: 2px solid var(--ink); }
  .faq-panel details { border-bottom: 1px solid var(--line); }
  .faq-panel summary { list-style: none; cursor: pointer; min-height: 66px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 18px 0; color: var(--ink); font-size: 18px; line-height: 1.45; font-weight: 600; }
  .faq-panel summary > span:first-child { min-width: 0; overflow-wrap: anywhere; }
  .faq-panel summary::-webkit-details-marker { display: none; }
  .faq-panel summary:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 4px; }
  .faq-icon { width: 28px; height: 28px; display: grid; place-items: center; border: 1px solid #C8D0DB; border-radius: 50%; font-size: 19px; font-weight: 400; transition: transform 160ms ease; }
  .faq-panel details[open] .faq-icon { transform: rotate(45deg); }
  .faq-answer { padding: 0 48px 22px 0; }
  .faq-answer p { font-size: 16px; line-height: 1.65; margin: 0; }

  .sources-list { list-style: none; padding: 0; margin: 30px 0 0; border-top: 1px solid var(--line); }
  .sources-list li { display: grid; grid-template-columns: minmax(0,1fr) 260px; gap: 24px; padding: 17px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
  .sources-list a { min-width: 0; color: var(--ink); font-size: 16px; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .sources-list a:hover,
  .sources-list a:focus-visible { color: var(--stepes-magenta); }
  .sources-list span { color: var(--muted); font-size: 15px; line-height: 1.45; }
  .conclusion-section { border-bottom: 0; padding-bottom: 0; }

  .related-section { padding: 92px 0 98px; background: var(--soft); border-top: 1px solid var(--line); }
  .related-heading { max-width: 760px; margin-bottom: 38px; }
  .related-heading p:last-child { margin: 16px 0 0; }
  .related-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 54px; border-top: 1px solid #D8DEE7; }
  .related-item { min-width: 0; min-height: 176px; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding: 30px 0; border-bottom: 1px solid #D8DEE7; text-decoration: none; }
  .related-item > div { min-width: 0; }
  .related-item h3 { font-size: 21px; margin-bottom: 10px; }
  .related-item p { margin: 0; font-size: 16px; line-height: 1.58; }
  .related-item svg { color: var(--stepes-magenta); margin-top: 4px; }
  .related-item:hover h3,
  .related-item:focus-visible h3 { color: var(--stepes-magenta); }

  .final-cta { padding: 88px 0 96px; background: #FFFFFF; border-top: 1px solid var(--line); }
  .final-cta-inner { padding: 54px 58px; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 58px; align-items: center; background: var(--stepes-blush); border: 1px solid #F0DCE5; border-radius: var(--radius-primary); }
  .final-cta h2 { max-width: 760px; }
  .final-cta p:not(.eyebrow) { max-width: 760px; margin: 18px 0 0; }
  .final-cta-actions { display: flex; flex-direction: column; gap: 12px; min-width: 330px; }

  a:focus-visible,
  summary:focus-visible,
  [tabindex="0"]:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 3px; }

  @media (max-width: 1100px) {
    .article-grid { grid-template-columns: 230px minmax(0, 720px); gap: 42px; }
    .toc-links a { font-size: 14px; }
    .final-cta-inner { grid-template-columns: 1fr; }
    .final-cta-actions { flex-direction: row; min-width: 0; flex-wrap: wrap; }
  }

  @media (max-width: 1080px) {
    .toc-desktop { display: none; }
    .toc-mobile { display: block; margin-bottom: 54px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .toc-mobile summary { min-height: 56px; display: flex; align-items: center; justify-content: space-between; gap: 16px; cursor: pointer; list-style: none; color: var(--ink); font-size: 17px; font-weight: 600; }
    .toc-mobile summary::-webkit-details-marker { display: none; }
    .toc-mobile summary svg { width: 20px; height: 20px; transition: transform 160ms ease; }
    .toc-mobile[open] summary svg { transform: rotate(180deg); }
    .toc-links-mobile { padding: 8px 0 18px; border-left: 0; }
    .toc-links-mobile a { min-height: 44px; display: flex; align-items: center; padding: 9px 0; margin: 0; border-left: 0; border-top: 1px solid var(--soft-line); font-size: 16px; line-height: 1.4; }
    .article-grid { display: block; }
    .article-body { width: 100%; max-width: 780px; margin: 0 auto; }
    .article-shell { padding-top: 48px; }
  }

  @media (max-width: 900px) {
    .shell { width: min(var(--shell), calc(100% - 48px)); }
    .resource-guide h1 { font-size: 42px; }
    .resource-guide h2 { font-size: 32px; }
    .resource-guide h3 { font-size: 22px; }
    .hero-shell { padding-bottom: 70px; }
    .hero-copy { max-width: 880px; }
    .takeaways-grid { grid-template-columns: 1fr; gap: 38px; }
    .takeaways-lead { max-width: 700px; }
    .two-column-list { columns: 1; }
    .three-column-notes { grid-template-columns: 1fr; }
    .checklist-group ul { grid-template-columns: 1fr; }
    .final-cta-actions { flex-direction: column; align-items: stretch; }
    .final-cta-actions .button { width: 100%; white-space: normal; }
  }

  @media (max-width: 820px) {
    .table-wrap { overflow: visible; border-top: 0; border-bottom: 0; }
    .resource-guide table,
    .resource-guide thead,
    .resource-guide tbody,
    .resource-guide th,
    .resource-guide td,
    .resource-guide tr { display: block; min-width: 0; width: 100%; }
    .resource-guide table caption { display: block; width: 100%; padding-bottom: 12px; border-bottom: 2px solid var(--ink); }
    .resource-guide thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; }
    .resource-guide tbody tr { margin: 0 0 20px; padding: 16px 18px; border: 1px solid var(--line); background: #FFFFFF; }
    .resource-guide tbody th,
    .resource-guide tbody td { display: grid; grid-template-columns: minmax(128px, 0.42fr) minmax(0, 1fr); gap: 14px; padding: 9px 0; border: 0; }
    .resource-guide tbody th::before,
    .resource-guide tbody td::before { content: attr(data-label); color: var(--muted); font-size: 14px; font-weight: 600; line-height: 1.4; text-transform: uppercase; letter-spacing: 0.04em; }
  }

  @media (max-width: 720px) {
    .shell { width: min(var(--shell), calc(100% - 40px)); }
    .resource-guide p,
    .resource-guide li,
    .resource-guide td,
    .resource-guide th { font-size: 17px; }
    .resource-guide h1 { font-size: 38px; }
    .resource-guide h2 { font-size: 30px; }
    .resource-guide h3 { font-size: 20px; }
    .hero-shell { padding: 20px 0 58px; }
    .breadcrumbs { margin-bottom: 22px; }
    .breadcrumbs li { font-size: 14px; }
    .hero-deck { font-size: 19px !important; }
    .hero-actions { align-items: stretch; }
    .hero-actions .button { width: 100%; }
    .takeaways-section { padding: 58px 0; }
    .takeaways-list li { grid-template-columns: 26px minmax(0,1fr); gap: 12px; }
    .article-opening,
    .article-section { padding-bottom: 58px; margin-bottom: 58px; }
    .lead-paragraph,
    .section-intro { font-size: 18px !important; }
    .surface-grid { grid-template-columns: 1fr; }
    .framework-panel { margin-left: -20px; margin-right: -20px; padding: 36px 20px; border-radius: 0; }
    .framework-heading h3 { font-size: 26px; }
    .context-framework-list li { grid-template-columns: 48px minmax(0,1fr); gap: 14px; }
    .context-letter { width: 42px; height: 42px; font-size: 19px; }
    .definition-row,
    .compact-definition-table .definition-row { grid-template-columns: 1fr; gap: 5px; }
    .process-strip { grid-template-columns: 1fr; border-right: 1px solid var(--line); }
    .process-strip-item { min-height: 0; border-right: 0; }
    .testing-ladder section { grid-template-columns: 42px minmax(0,1fr); gap: 14px; }
    .testing-ladder section p { grid-column: 2; }
    .checklist-section,
    .stepes-section { margin-left: -20px; margin-right: -20px; padding: 40px 20px 46px; border-radius: 0; }
    .checklist-group ul { grid-template-columns: 1fr; }
    .support-list section { grid-template-columns: 1fr; gap: 10px; }
    .sources-list li { grid-template-columns: 1fr; gap: 5px; }
    .related-section { padding: 70px 0; }
    .related-grid { grid-template-columns: 1fr; }
    .related-item { min-height: 0; }
    .final-cta { padding: 70px 0; }
    .final-cta-inner { padding: 38px 24px; gap: 34px; }

  }

  @media (max-width: 390px) {
    .resource-guide h1 { font-size: 38px; }
    .resource-guide h2 { font-size: 30px; }
    .hero-actions .button,
    .final-cta-actions .button { padding-left: 14px; padding-right: 14px; }
    .breadcrumbs ol { gap: 3px; }
    .breadcrumbs li { gap: 3px; width: auto; }
    .breadcrumbs [aria-current="page"] { max-width: 100%; }
    .takeaways-list h3 { font-size: 20px; }
    .resource-guide tbody th,
    .resource-guide tbody td { grid-template-columns: 1fr; gap: 3px; }
    .faq-answer { padding-right: 0; }
    .final-cta-inner { padding-left: 20px; padding-right: 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  }
`;
