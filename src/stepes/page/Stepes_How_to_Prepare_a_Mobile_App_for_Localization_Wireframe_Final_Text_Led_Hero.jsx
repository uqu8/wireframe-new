import React, { useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/how-to-prepare-an-app-for-localization/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const internalLinks = {
  resources: "https://www.stepes.com/resources/",
  localizationGuides: "https://www.stepes.com/resources/localization-guides/",
  appLocalization: "https://www.stepes.com/app-localization-services/",
  softwareInternationalization:
    "https://www.stepes.com/software-internationalization-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  softwareLocalizationApi:
    "https://www.stepes.com/developers/software-localization-api/",
  aiTranslation: "https://www.stepes.com/ai-translation-services/",
  contact: "https://www.stepes.com/contact-us/",
  quote: "https://app.stepes.com/quote/",
  iosGuide:
    "https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/",
  androidGuide:
    "https://www.stepes.com/resources/localization-guides/android-app-localization-guide/",
  testingChecklist:
    "https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/",
  continuousLocalization:
    "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/",
  costGuide:
    "https://www.stepes.com/resources/localization-guides/app-localization-cost-guide/",
};

const externalLinks = {
  appleLocalization:
    "https://developer.apple.com/documentation/xcode/localization",
  appleStringCatalogs:
    "https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog",
  appleAgents:
    "https://developer.apple.com/documentation/xcode/localizing-your-app-using-agents",
  appleStoreLocalization:
    "https://developer.apple.com/help/app-store-connect/manage-app-information/localize-app-information/",
  appleScreenshots:
    "https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/",
  androidLocalization:
    "https://developer.android.com/guide/topics/resources/localization",
  androidResources:
    "https://developer.android.com/guide/topics/resources/providing-resources",
  androidLanguages:
    "https://developer.android.com/guide/topics/resources/app-languages",
  androidPseudo:
    "https://developer.android.com/guide/topics/resources/pseudolocales",
  androidAccessibility:
    "https://developer.android.com/guide/topics/ui/accessibility/apps",
  unicodePluralRules: "https://cldr.unicode.org/index/cldr-spec/plural-rules",
  w3cInternationalization:
    "https://www.w3.org/International/i18n-drafts/techniques/authoring-html.en",
  googlePlayLocalization:
    "https://support.google.com/googleplay/android-developer/answer/9844778",
};

const tocItems = [
  ["readiness", "What Localization Readiness Means"],
  ["markets-locales", "Define Markets, Languages, and Locales"],
  ["internationalization", "Assess Internationalization Readiness"],
  ["content-inventory", "Inventory Localizable Content"],
  ["source-resources", "Prepare Source Resource Files"],
  ["technical-syntax", "Protect Variables and Technical Syntax"],
  ["context", "Provide Visual and Functional Context"],
  ["terminology", "Establish Terminology and Product Voice"],
  ["design-media-accessibility", "Prepare Design, Media, and Accessibility"],
  ["pretranslation-testing", "Run Pre-Translation Readiness Tests"],
  ["workflow", "Define Workflow and Responsibilities"],
  ["release-plan", "Coordinate the Release Plan"],
  ["handoff", "Build the Localization Handoff Package"],
  ["mistakes", "Avoid Common Preparation Mistakes"],
  ["readiness-checklist", "Localization Readiness Checklist"],
  ["stepes-support", "How Stepes Helps"],
  ["faq", "Frequently Asked Questions"],
  ["sources", "Sources and References"],
  ["conclusion", "Prepare the Product for Localization"],
];

const readinessStages = [
  {
    number: "01",
    title: "Market Readiness",
    text: "Define countries, languages, locales, priorities, and rollout phases.",
  },
  {
    number: "02",
    title: "Technical Readiness",
    text: "Confirm the app can support multilingual resources and locale behavior.",
  },
  {
    number: "03",
    title: "Content Readiness",
    text: "Identify strings, media, notifications, store content, and external sources.",
  },
  {
    number: "04",
    title: "Linguistic Readiness",
    text: "Prepare terminology, product voice, context, and reviewer expectations.",
  },
  {
    number: "05",
    title: "Testing Readiness",
    text: "Make builds, devices, test access, ownership, and criteria available.",
  },
  {
    number: "06",
    title: "Release Readiness",
    text: "Coordinate translation, integration, testing, submission, and launch.",
  },
];

const keyTakeaways = [
  "Define exact locales and rollout priorities before requesting translation.",
  "Separate customer-facing content from executable code and preserve stable resource keys.",
  "Give linguists screenshots, designs, comments, builds, and user-flow context.",
  "Approve high-impact terminology and product voice before broad multilingual production.",
  "Run pseudolocalization, expansion, fallback, formatting, and RTL checks early.",
  "Assign ownership for translation, review, testing, corrections, and release.",
];

const relatedResources = [
  {
    eyebrow: "PLATFORM GUIDE",
    title: "iOS App Localization Guide",
    description:
      "Prepare Apple String Catalogs, variations, assets, testing, accessibility content, and App Store localization.",
    href: internalLinks.iosGuide,
    action: "Read the iOS Guide",
  },
  {
    eyebrow: "PLATFORM GUIDE",
    title: "Android App Localization Guide",
    description:
      "Plan Android resources, locale configuration, plurals, per-app languages, pseudolocales, and Google Play content.",
    href: internalLinks.androidGuide,
    action: "Read the Android Guide",
  },
  {
    eyebrow: "CHECKLIST",
    title: "Mobile App Localization Testing Checklist",
    description:
      "Validate linguistic, visual, functional, locale, RTL, accessibility, device, and regression quality.",
    href: internalLinks.testingChecklist,
    action: "View the Testing Checklist",
  },
  {
    eyebrow: "WORKFLOW GUIDE",
    title: "Continuous Localization for Mobile Apps",
    description:
      "Connect repositories, translation, review, QA, and release delivery for recurring mobile updates.",
    href: internalLinks.continuousLocalization,
    action: "Read the Workflow Guide",
  },
  {
    eyebrow: "PLANNING GUIDE",
    title: "App Localization Cost Guide",
    description:
      "Understand how language count, volume, repetition, engineering, review, testing, and timing affect cost.",
    href: internalLinks.costGuide,
    action: "Review App Localization Costs",
  },
  {
    eyebrow: "SERVICES",
    title: "App Localization Services",
    description:
      "Explore Stepes support for iOS, Android, and cross-platform translation, engineering, testing, and release workflows.",
    href: internalLinks.appLocalization,
    action: "Explore App Localization Services",
  },
];

const faqItems = [
  {
    question: "Does an app need to be internationalized before translation?",
    answer:
      "The app should be able to separate localizable content from executable code and support the languages, scripts, formats, and interface behaviors required by the target markets. That does not mean every possible improvement must be completed before any translation can begin. A focused readiness review can identify which issues must be corrected first, which can be managed during localization, and which can be scheduled for a later release.",
  },
  {
    question: "What files should I provide for mobile app localization?",
    answer:
      "Provide native or structured resources whenever practical. These may include Apple String Catalogs, Apple Strings files, Android XML, XLIFF, Flutter ARB, JSON, YAML, RESX, PO, Java properties, CSV, or another structured format. Preserve keys, comments, placeholders, plural structures, file relationships, and character limits. Also include app-store content, screenshots, designs, terminology, existing translations, test access, target locales, reviewers, and the planned release date.",
  },
  {
    question: "How should app strings be prepared for translation?",
    answer:
      "Each string should have a stable key, complete source text, meaningful context, and clearly protected technical elements. Avoid sentence fragments and concatenated messages. Provide plural or select structures where required, explain placeholders, identify relevant character limits, remove obsolete content, and distinguish customer-facing text from code or nontranslatable values.",
  },
  {
    question: "What is the difference between a language and a locale?",
    answer:
      "A language identifies the language itself, while a locale provides more specific information about the regional or script context in which it is used. For example, es identifies Spanish, while es-MX identifies Spanish for Mexico and es-ES identifies Spanish for Spain. Locale-specific versions may differ in terminology, spelling, tone, currency, formats, legal language, store positioning, and product expectations.",
  },
  {
    question: "What context do app translators need?",
    answer:
      "Useful context includes screenshots, designs, prototypes, developer comments, string descriptions, screen identifiers, character limits, user-flow diagrams, test builds, test credentials, and explanations of what the user is trying to accomplish. Translators should know where a string appears, what triggers it, whether it is a label or action, what happens next, and whether it is promotional, transactional, legal, medical, instructional, or safety-related.",
  },
  {
    question: "What is pseudolocalization?",
    answer:
      "Pseudolocalization replaces source-language text with simulated content designed to reveal localization problems before real translations are available. It can expose hard-coded strings, missing resources, text expansion, truncation, unsupported characters, sentence concatenation, and right-to-left layout issues. It is an internationalization-readiness test rather than a review of linguistic quality.",
  },
  {
    question: "How should variables and placeholders be handled?",
    answer:
      "Variables and placeholders should remain structurally intact and be accompanied by an explanation of what each value represents. A value may affect word order, agreement, plural choice, punctuation, or grammatical case. Automated quality checks should compare source and target placeholders and identify missing, added, renamed, or invalid elements before delivery.",
  },
  {
    question: "How do you prepare an app for right-to-left languages?",
    answer:
      "Support direction changes at the layout and component level. Review screen mirroring, navigation, directional icons, progress indicators, mixed-direction text, numbers, forms, charts, gestures, and third-party components. Use direction-aware start and end behavior rather than hard-coded left and right positioning where possible, then test first with an RTL pseudolocale and later with real localized content.",
  },
  {
    question: "How much extra space should an interface allow for translation?",
    answer:
      "There is no reliable universal percentage for every string and language. Short labels can expand substantially, while longer content may behave differently. Fonts, screen size, text scaling, line breaks, component behavior, and the target language all affect fit. Use flexible layouts, allow wrapping where appropriate, avoid unnecessary fixed widths, and test expanded pseudo-text and real translations on representative devices.",
  },
  {
    question: "Can an app be localized while development continues?",
    answer:
      "Yes, provided the project has reliable versioning and change control. Teams should identify new, modified, and deleted strings, preserve stable keys, track source changes, and align localization with product branches or releases. Frequent development programs often benefit from repository integration, APIs, automated quality checks, and incremental delivery rather than repeated full-file handoffs.",
  },
  {
    question: "When should localization testing begin?",
    answer:
      "Internationalization and pseudolocalization testing should begin before professional translation. This stage examines source architecture, resource behavior, text expansion, fallbacks, right-to-left support, and locale formatting. Linguistic, visual, functional, accessibility, device, and regression testing should continue after translated resources have been integrated into representative builds.",
  },
  {
    question: "How early should app localization begin before release?",
    answer:
      "Timing depends on string volume, language count, resource readiness, subject matter, review stages, engineering, context, build availability, testing scope, store assets, and correction cycles. Begin planning while product and release requirements are still being defined. Translation can start once suitable resources are stable, but terminology, reviewers, test access, and build dates should be arranged earlier.",
  },
  {
    question: "Should app-store content be translated with the interface?",
    answer:
      "Yes, when the app and store listing are part of the same market launch. Coordinating them helps maintain consistent product names, terminology, feature descriptions, offers, screenshots, and user expectations. Store localization may also require market-specific copy adaptation, creative assets, release notes, and app-store optimization research beyond direct interface translation.",
  },
  {
    question: "Can AI be used to translate a mobile app?",
    answer:
      "AI-assisted translation can be suitable for selected app content when it is supported by secure data handling, approved terminology, translation memory, meaningful context, technical quality checks, and appropriate professional review. Highly visible, brand-sensitive, regulated, transactional, safety-related, legal, medical, or context-dependent strings generally require stronger human validation.",
  },
  {
    question: "What should be included in an app localization handoff package?",
    answer:
      "Include the platforms and frameworks, source locale, exact target locales, resource files, approximate volume, existing translations, terminology, screenshots, designs, builds, test credentials, character limits, app-store content, reviewers, security requirements, testing scope, release date, and expected update frequency. A representative source package is often sufficient for an initial readiness review when final resources are not yet available.",
  },
];

const checklistGroups = [
  {
    title: "Product and Market Planning",
    items: [
      "Target countries and markets are defined.",
      "Exact language and locale codes are confirmed.",
      "Launch priorities and phases are documented.",
      "Shared and market-specific variants have been evaluated.",
      "Market-specific functionality is understood.",
      "Regional reviewers are assigned.",
      "Locale fallback behavior is approved.",
      "The rollout model is documented.",
    ],
  },
  {
    title: "Internationalization and Engineering",
    items: [
      "Customer-facing text is separated from executable code.",
      "Resource identifiers are stable and meaningful.",
      "Different meanings use appropriate separate keys.",
      "Sentence concatenation has been removed.",
      "Plural and select structures are supported.",
      "Locale-aware formats are implemented.",
      "Unicode is supported throughout the stack.",
      "Fonts support every required script.",
      "Layouts allow expansion, wrapping, and text resizing.",
      "RTL behavior is supported where required.",
      "Default and fallback resources are complete.",
      "App-level language-selection behavior is defined.",
      "Server-delivered and third-party content is inventoried.",
    ],
  },
  {
    title: "Source Content",
    items: [
      "Obsolete and unused strings are removed.",
      "Duplicate or ambiguous strings are reviewed.",
      "Nontranslatable content is marked.",
      "Placeholders, variables, and markup are documented.",
      "Character limits are provided where useful.",
      "App-store content and notifications are included.",
      "Images, audio, video, and accessibility text are inventoried.",
      "Source change control is defined.",
    ],
  },
  {
    title: "Context and Language Guidance",
    items: [
      "Screenshots are mapped to strings or screens.",
      "Designs or prototypes are available.",
      "Representative user journeys are documented.",
      "Test builds and credentials are prepared.",
      "Product terminology is approved.",
      "Product voice and style are documented.",
      "Existing translations and language assets are supplied.",
      "Linguist questions have an assigned owner.",
      "Regional reviewers understand the review process.",
    ],
  },
  {
    title: "Pre-Translation Testing",
    items: [
      "Pseudolocalization has been run.",
      "Text expansion has been tested.",
      "RTL simulation has been tested where applicable.",
      "Missing and hard-coded strings have been checked.",
      "Placeholder validation passes.",
      "Resource syntax and builds validate.",
      "Default and fallback resources have been tested.",
      "Locale formatting has been reviewed.",
      "Remaining risks have owners and correction dates.",
    ],
  },
  {
    title: "Workflow and Release",
    items: [
      "Roles and responsibilities are assigned.",
      "The content-exchange method is established.",
      "Security and AI-use requirements are documented.",
      "Review stages and approval authority are defined.",
      "Source cutoff and build dates are scheduled.",
      "Testing and correction windows are reserved.",
      "Store listings and localized assets are scheduled.",
      "Post-launch issue ownership is established.",
      "Future update frequency is understood.",
      "Translation memories and terminology will be maintained.",
    ],
  },
];

function ArrowIcon({ direction = "right" }) {
  const rotation = direction === "down" ? "rotate(90 12 12)" : undefined;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12h13" />
      <path d="m14 7 5 5-5 5" transform={rotation} />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 13v6H5V5h6" />
    </svg>
  );
}

function AnchorLink({ id, className = "", children }) {
  const handleClick = (event) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <a href={sectionUrl(id)} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a className="inline-link external-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalIcon />
    </a>
  );
}

function Section({ id, eyebrow, title, intro, children, className = "" }) {
  return (
    <section id={id} className={`article-section ${className}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      {children}
    </section>
  );
}

function Subsection({ title, children }) {
  return (
    <div className="subsection">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ items, compact = false }) {
  return (
    <ul className={compact ? "bullet-list compact" : "bullet-list"}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ResponsiveTable({ caption, columns, rows }) {
  const captionId = caption
    ? `table-${caption.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`
    : undefined;

  return (
    <div className="table-wrap">
      {caption ? <div id={captionId} className="table-caption">{caption}</div> : null}
      <table aria-labelledby={captionId}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${caption || "table"}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} data-label={columns[cellIndex]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ label, title, children, action }) {
  return (
    <aside className="callout">
      <div className="callout-copy">
        <div className="eyebrow">{label}</div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
      {action ? <div className="callout-action">{action}</div> : null}
    </aside>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-panel">
      {faqItems.map((item, index) => {
        const open = index === openIndex;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div className="faq-item" key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              className="faq-question"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
              hidden={!open}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AppLocalizationPreparationGuide() {
  const breadcrumbItems = useMemo(
    () => [
      { label: "Resources", href: internalLinks.resources },
      { label: "Localization Guides", href: internalLinks.localizationGuides },
      { label: "How to Prepare a Mobile App for Localization", current: true },
    ],
    []
  );

  return (
    <main className="stepes-guide">
      <style>{`
        :root {
          --ink: #111322;
          --body: #3f4352;
          --muted: #6f7380;
          --line: #dfe1e7;
          --line-strong: #cfd2da;
          --soft: #f6f6f8;
          --blush: #fff4f8;
          --blush-strong: #fce8f1;
          --magenta: #c11d63;
          --magenta-dark: #9f164f;
          --white: #ffffff;
          --radius-sm: 10px;
          --radius-md: 16px;
          --radius-lg: 24px;
          --shadow-soft: 0 18px 48px rgba(17, 19, 34, 0.08);
          --shell: 1280px;
          --reading: 760px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-guide {
          color: var(--ink);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: clip;
        }
        .stepes-guide a { color: inherit; }
        .stepes-guide img,
        .stepes-guide svg { max-width: 100%; }
        .hero-grid > *,
        .summary-grid > *,
        .framework-head > *,
        .related-head > *,
        .final-cta-panel > * { min-width: 0; }
        .shell {
          width: min(var(--shell), calc(100% - 64px));
          margin: 0 auto;
        }
        .reading-shell {
          width: min(1120px, calc(100% - 64px));
          margin: 0 auto;
        }
        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.075em;
          line-height: 1.25;
          text-transform: uppercase;
        }
        p, li { color: var(--body); }
        p {
          margin: 0 0 22px;
          font-size: 18px;
          line-height: 1.68;
        }
        h1, h2, h3 { margin: 0; color: var(--ink); }
        h1 {
          max-width: 820px;
          margin-top: 14px;
          font-size: clamp(38px, 4.7vw, 56px);
          font-weight: 600;
          letter-spacing: -0.042em;
          line-height: 1.05;
        }
        h2 {
          font-size: clamp(30px, 3.4vw, 40px);
          font-weight: 600;
          letter-spacing: -0.034em;
          line-height: 1.13;
        }
        h3 {
          margin-bottom: 14px;
          font-size: clamp(21px, 2.1vw, 25px);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.24;
        }
        a:focus-visible, button:focus-visible, summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.32);
          outline-offset: 4px;
        }
        .inline-link {
          color: var(--magenta);
          font-weight: 600;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
        }
        .inline-link:hover { color: var(--magenta-dark); }
        .external-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .external-link svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.8;
        }

        .breadcrumb-wrap { padding-top: 24px; }
        .breadcrumb {
          font-size: 14px;
          line-height: 1.5;
        }
        .breadcrumb ol {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .breadcrumb li {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
          color: var(--muted);
        }
        .breadcrumb a {
          color: var(--muted);
          text-decoration: none;
        }
        .breadcrumb a:hover { color: var(--magenta); }
        .breadcrumb .separator { color: #a8abb4; }
        .breadcrumb [aria-current="page"] {
          color: #444754;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .hero {
          padding: 24px 0 84px;
          background:
            radial-gradient(circle at 92% 6%, rgba(193, 29, 99, 0.055), transparent 24%),
            linear-gradient(180deg, #fff 0%, #fff 72%, #fcfbfc 100%);
        }
        .hero-grid { display: block; }
        .hero-content { max-width: 980px; }
        .hero-grid::after {
          display: block;
          width: 72px;
          height: 3px;
          margin-top: 38px;
          border-radius: 999px;
          background: var(--magenta);
          content: "";
        }
        .hero h1 { max-width: 900px; }
        .hero-deck {
          max-width: 840px;
          margin-top: 26px;
          font-size: 20px;
          line-height: 1.62;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }
        .button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 20px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          max-width: 100%;
          text-align: center;
          text-decoration: none;
          white-space: normal;
          transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, color 160ms ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button svg {
          width: 18px;
          height: 18px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.8;
        }
        .stepes-guide .button-primary,
        .stepes-guide .button-primary:link,
        .stepes-guide .button-primary:visited {
          color: #fff !important;
          background: var(--magenta);
        }
        .stepes-guide .button-primary:hover,
        .stepes-guide .button-primary:focus-visible,
        .stepes-guide .button-primary:active {
          color: #fff !important;
          background: var(--magenta-dark);
        }
        .stepes-guide .button-primary svg,
        .stepes-guide .button-primary:hover svg,
        .stepes-guide .button-primary:focus-visible svg,
        .stepes-guide .button-primary:active svg,
        .stepes-guide .button-primary:visited svg { stroke: #fff !important; }
        .button-secondary {
          color: var(--ink);
          background: #fff;
          border-color: var(--line-strong);
        }
        .button-secondary:hover { border-color: var(--magenta); color: var(--magenta); }
        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 28px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
        }
        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hero-meta span::before {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
        }

        .summary-section {
          padding: 72px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--blush);
        }
        .summary-grid {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: 72px;
          align-items: start;
        }
        .summary-title h2 { margin-top: 12px; font-size: clamp(30px, 3vw, 38px); }
        .summary-title p { margin-top: 18px; font-size: 17px; }
        .takeaways {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(193, 29, 99, 0.18);
        }
        .takeaways li {
          position: relative;
          min-height: 116px;
          padding: 24px 22px 24px 42px;
          border-bottom: 1px solid rgba(193, 29, 99, 0.18);
          font-size: 16px;
          line-height: 1.55;
        }
        .takeaways li:nth-child(odd) { border-right: 1px solid rgba(193, 29, 99, 0.18); }
        .takeaways li::before {
          position: absolute;
          top: 29px;
          left: 14px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
        }

        .framework-band { padding: 88px 0 94px; }
        .framework-head {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 64px;
          align-items: end;
          margin-bottom: 42px;
        }
        .framework-head p { margin: 0; }
        .framework-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .framework-stage {
          min-height: 212px;
          padding: 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: #fff;
        }
        .framework-stage:nth-child(3n) { border-right: 0; }
        .framework-stage:nth-last-child(-n + 3) { border-bottom: 0; }
        .framework-number {
          margin-bottom: 34px;
          color: var(--magenta);
          font-size: 14px;
          font-weight: 600;
        }
        .framework-stage h3 { margin-bottom: 12px; font-size: 21px; }
        .framework-stage p { margin: 0; font-size: 16px; line-height: 1.55; }

        .article-region { padding: 96px 0 34px; }
        .article-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, var(--reading));
          gap: 64px;
          justify-content: center;
          align-items: start;
        }
        .toc-desktop {
          position: sticky;
          top: 104px;
          max-height: calc(100vh - 128px);
          overflow: auto;
          padding-right: 18px;
        }
        .toc-heading {
          margin-bottom: 16px;
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
        }
        .toc-list {
          margin: 0;
          padding: 0;
          border-left: 1px solid var(--line);
          list-style: none;
        }
        .toc-list li { margin: 0; }
        .toc-list a {
          display: block;
          padding: 8px 12px 8px 17px;
          border-left: 2px solid transparent;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.35;
          text-decoration: none;
        }
        .toc-list a:hover,
        .toc-list a:focus-visible {
          color: var(--magenta);
          border-left-color: var(--magenta);
        }
        .toc-mobile { display: none; }
        .toc-mobile details {
          border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          background: #fff;
        }
        .toc-mobile summary {
          display: flex;
          min-height: 48px;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          color: var(--ink);
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          list-style: none;
        }
        .toc-mobile summary::-webkit-details-marker { display: none; }
        .toc-mobile summary > span { transition: transform 160ms ease; }
        .toc-mobile details[open] summary { border-bottom: 1px solid var(--line); }
        .toc-mobile details[open] summary > span { transform: rotate(45deg); }
        .toc-mobile .toc-list {
          padding: 10px 0;
          border-left: 0;
        }
        .toc-mobile .toc-list a { padding: 10px 16px; font-size: 16px; }

        .article-body { min-width: 0; }
        .article-section {
          margin-bottom: 92px;
          scroll-margin-top: 116px;
        }
        .article-section > h2 { margin-top: 10px; }
        .section-intro {
          margin-top: 22px;
          margin-bottom: 32px;
          font-size: 20px;
          line-height: 1.62;
        }
        .subsection { margin-top: 42px; }
        .subsection p:last-child { margin-bottom: 0; }
        .bullet-list {
          display: grid;
          gap: 11px;
          margin: 22px 0 28px;
          padding-left: 24px;
        }
        .bullet-list li { padding-left: 4px; font-size: 17px; line-height: 1.58; }
        .bullet-list.compact { gap: 7px; }
        .bullet-list.compact li { font-size: 16px; }
        .definition-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 30px;
        }
        .definition-card {
          padding: 24px;
          border-top: 2px solid var(--magenta);
          background: var(--soft);
        }
        .definition-card h3 { font-size: 20px; }
        .definition-card p { margin: 0; font-size: 16px; line-height: 1.55; }

        .table-wrap {
          max-width: 100%;
          margin: 32px 0;
          border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .table-caption {
          padding: 16px 20px;
          border-bottom: 1px solid var(--line);
          color: var(--ink);
          background: var(--soft);
          font-size: 16px;
          font-weight: 600;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        th, td {
          padding: 17px 18px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
          overflow-wrap: anywhere;
        }
        th:last-child, td:last-child { border-right: 0; }
        tbody tr:last-child td { border-bottom: 0; }
        th {
          color: var(--ink);
          background: #fafafc;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }
        td { color: var(--body); font-size: 16px; line-height: 1.55; }

        .code-example {
          max-width: 100%;
          margin: 28px 0;
          border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: #171925;
        }
        .code-label {
          padding: 11px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          color: #f2a7c6;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.075em;
          text-transform: uppercase;
        }
        .code-example pre {
          margin: 0;
          padding: 20px;
          color: #f5f5f7;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 16px;
          line-height: 1.6;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }
        .anatomy-panel {
          margin: 32px 0;
          padding: 26px;
          border: 1px solid var(--line-strong);
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #fff 0%, #fff7fa 100%);
        }
        .anatomy-panel h3 { margin-bottom: 20px; }
        .anatomy-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .anatomy-field {
          padding: 16px;
          border: 1px solid var(--line);
          border-radius: 10px;
          background: #fff;
        }
        .anatomy-field strong {
          display: block;
          margin-bottom: 7px;
          color: var(--magenta);
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.045em;
        }
        .anatomy-field span { color: var(--body); font-size: 16px; line-height: 1.5; }
        .anatomy-field.wide { grid-column: 1 / -1; }

        .callout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          margin: 34px 0;
          padding: 28px;
          border-left: 3px solid var(--magenta);
          background: var(--blush);
        }
        .callout h3 { margin: 8px 0 12px; font-size: 23px; }
        .callout p { margin-bottom: 0; font-size: 16px; }
        .callout-action { min-width: max-content; }

        .process-list {
          display: grid;
          gap: 0;
          margin: 30px 0;
          border-top: 1px solid var(--line);
        }
        .process-step {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }
        .process-step-number {
          display: flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(193, 29, 99, 0.32);
          border-radius: 50%;
          color: var(--magenta);
          font-size: 14px;
          font-weight: 600;
        }
        .process-step h3 { margin-bottom: 7px; font-size: 20px; }
        .process-step p { margin: 0; font-size: 16px; }

        .mistakes-list {
          margin-top: 28px;
          border-top: 1px solid var(--line);
        }
        .mistake {
          display: grid;
          grid-template-columns: minmax(210px, 0.75fr) minmax(0, 1.25fr);
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }
        .mistake h3 { margin: 0; font-size: 19px; }
        .mistake p { margin: 0; font-size: 16px; }
        .mistake strong { color: var(--ink); }

        .checklist-panel {
          margin-top: 30px;
          padding: 30px;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          background: #fff;
          box-shadow: 0 12px 34px rgba(17, 19, 34, 0.05);
        }
        .checklist-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--line);
        }
        .checklist-header p { max-width: 480px; margin: 0; font-size: 16px; }
        .checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px 34px;
        }
        .checklist-group h3 { font-size: 20px; }
        .checklist-items {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .checklist-items li {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 10px;
          align-items: start;
          font-size: 16px;
          line-height: 1.5;
        }
        .checklist-marker {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          border: 1px solid rgba(193, 29, 99, 0.4);
          border-radius: 5px;
        }
        .checklist-marker {
          background: #fff;
        }

        .stepes-panel {
          padding: 34px;
          border-radius: var(--radius-md);
          background: #181a27;
          color: #fff;
        }
        .stepes-panel .eyebrow { color: #f2a7c6; }
        .stepes-panel h2, .stepes-panel h3 { color: #fff; }
        .stepes-panel p, .stepes-panel li { color: #d8dae2; }
        .stepes-panel .section-intro { margin-bottom: 30px; }
        .stepes-capabilities {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .stepes-capability {
          padding: 24px 20px 24px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .stepes-capability:nth-child(odd) { padding-right: 28px; border-right: 1px solid rgba(255, 255, 255, 0.15); }
        .stepes-capability:nth-child(even) { padding-left: 28px; }
        .stepes-capability h3 { font-size: 19px; }
        .stepes-capability p { margin: 0; font-size: 16px; }
        .stepes-panel .inline-link { color: #f2a7c6; }

        .faq-panel {
          margin-top: 30px;
          border-top: 1px solid var(--line);
        }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 32px;
          gap: 20px;
          align-items: center;
          min-height: 72px;
          padding: 20px 0;
          border: 0;
          color: var(--ink);
          background: transparent;
          cursor: pointer;
          font: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
          text-align: left;
        }
        .faq-question > span:first-child {
          min-width: 0;
          overflow-wrap: anywhere;
        }
        .faq-icon {
          display: inline-flex;
          width: 30px;
          height: 30px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line-strong);
          border-radius: 50%;
          color: var(--magenta);
          font-size: 21px;
          font-weight: 400;
        }
        .faq-answer { padding: 0 58px 24px 0; }
        .faq-answer p { margin: 0; font-size: 16px; }

        .source-list {
          margin-top: 28px;
          border-top: 1px solid var(--line);
        }
        .source-item {
          display: grid;
          grid-template-columns: minmax(140px, 0.42fr) minmax(0, 1.58fr);
          gap: 24px;
          padding: 21px 0;
          border-bottom: 1px solid var(--line);
        }
        .source-publisher {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.5;
        }
        .source-item a {
          display: inline-flex;
          min-width: 0;
          overflow-wrap: anywhere;
          align-items: center;
          gap: 7px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
          text-decoration: none;
        }
        .source-item a:hover { color: var(--magenta); }
        .source-item svg {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.8;
        }

        .conclusion-section {
          padding: 34px;
          border-top: 2px solid var(--magenta);
          background: var(--soft);
        }
        .conclusion-section > h2 {
          margin-top: 0;
          font-size: clamp(28px, 3vw, 36px);
        }
        .conclusion-section p:first-of-type { margin-top: 22px; }
        .conclusion-section p:last-child { margin-bottom: 0; }

        .related-section {
          padding: 88px 0 94px;
          border-top: 1px solid var(--line);
          background: #fbfbfc;
        }
        .related-head {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 56px;
          align-items: end;
          margin-bottom: 36px;
        }
        .related-head p { margin: 0; }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #fff;
        }
        .related-card {
          min-width: 0;
          min-height: 228px;
          padding: 26px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          text-decoration: none;
        }
        .related-card:nth-child(3n) { border-right: 0; }
        .related-card:nth-last-child(-n + 3) { border-bottom: 0; }
        .related-card:hover { background: var(--blush); }
        .related-card h3 { margin: 18px 0 10px; font-size: 21px; }
        .related-card p { margin: 0 0 24px; font-size: 16px; }
        .related-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
        }
        .related-link svg {
          width: 17px;
          height: 17px;
          fill: none;
          stroke: currentColor;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 1.8;
        }

        .final-cta { padding: 76px 0 96px; background: #fff; }
        .final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
          gap: 56px;
          align-items: center;
          padding: 54px;
          border: 1px solid rgba(193, 29, 99, 0.24);
          border-radius: var(--radius-lg);
          background: linear-gradient(135deg, #fff3f8 0%, #fff 72%);
        }
        .final-cta h2 { margin: 12px 0 18px; max-width: 760px; }
        .final-cta p { margin: 0; max-width: 760px; font-size: 18px; }
        .final-cta-actions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
        }

        @media (max-width: 1080px) {
          .article-layout { grid-template-columns: 230px minmax(0, 720px); gap: 44px; }
          .related-card { min-height: 250px; }
        }

        @media (max-width: 860px) {
          .shell, .reading-shell { width: min(calc(100% - 48px), var(--shell)); }
          .hero { padding-bottom: 60px; }
          .hero-content { max-width: 880px; }
          .summary-grid, .framework-head, .related-head, .final-cta-panel { grid-template-columns: 1fr; gap: 30px; }
          .framework-grid { grid-template-columns: repeat(2, 1fr); }
          .framework-stage:nth-child(3n) { border-right: 1px solid var(--line); }
          .framework-stage:nth-child(2n) { border-right: 0; }
          .framework-stage:nth-last-child(-n + 3) { border-bottom: 1px solid var(--line); }
          .framework-stage:nth-last-child(-n + 2) { border-bottom: 0; }
          .article-region { padding-top: 64px; }
          .article-layout { display: block; }
          .toc-desktop { display: none; }
          .toc-mobile { display: block; margin-bottom: 46px; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .related-card:nth-child(3n) { border-right: 1px solid var(--line); }
          .related-card:nth-child(2n) { border-right: 0; }
          .related-card:nth-last-child(-n + 3) { border-bottom: 1px solid var(--line); }
          .related-card:nth-last-child(-n + 2) { border-bottom: 0; }
          .final-cta-actions { flex-direction: row; flex-wrap: wrap; }
        }

        @media (max-width: 680px) {
          .shell, .reading-shell { width: min(calc(100% - 36px), var(--shell)); }
          p { font-size: 17px; line-height: 1.66; }
          h1 { font-size: 38px; line-height: 1.07; }
          .hero { padding-top: 18px; }
          .hero-deck { font-size: 18px; }
          .hero-actions { align-items: stretch; }
          .hero-actions .button { flex: 1 1 100%; }
          .hero-grid::after { margin-top: 32px; }
          .summary-section, .framework-band, .related-section { padding: 58px 0; }
          .takeaways { grid-template-columns: 1fr; }
          .takeaways li:nth-child(odd) { border-right: 0; }
          .framework-grid { grid-template-columns: 1fr; }
          .framework-stage, .framework-stage:nth-child(2n), .framework-stage:nth-child(3n) {
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }
          .framework-stage:last-child { border-bottom: 0; }
          .article-section { margin-bottom: 68px; }
          .section-intro { font-size: 18px; }
          .definition-grid, .anatomy-grid, .checklist-grid, .stepes-capabilities { grid-template-columns: 1fr; }
          .anatomy-field.wide { grid-column: auto; }
          .callout { grid-template-columns: 1fr; }
          .callout-action { min-width: 0; }
          .callout-action .button { width: 100%; }
          .mistake { grid-template-columns: 1fr; gap: 10px; }
          .checklist-panel { padding: 22px; }
          .checklist-header { display: block; }
          .checklist-header .button { width: 100%; margin-top: 18px; }
          .stepes-capability,
          .stepes-capability:nth-child(odd),
          .stepes-capability:nth-child(even) {
            padding: 22px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          }
          .stepes-capability:last-child { border-bottom: 0; }
          .source-item { grid-template-columns: 1fr; gap: 6px; }
          .related-grid { grid-template-columns: 1fr; }
          .related-card,
          .related-card:nth-child(2n),
          .related-card:nth-child(3n) {
            min-height: 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }
          .related-card:last-child { border-bottom: 0; }
          .conclusion-section { padding: 26px 22px; }
          .final-cta-panel { padding: 34px 24px; }
          .final-cta-actions { flex-direction: column; }
          .final-cta-actions .button { width: 100%; }

          table, thead, tbody, th, td, tr { display: block; }
          thead {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          tbody tr {
            padding: 8px 0;
            border-bottom: 1px solid var(--line);
          }
          tbody tr:last-child { border-bottom: 0; }
          td {
            display: grid;
            grid-template-columns: minmax(118px, 0.45fr) minmax(0, 1fr);
            gap: 16px;
            padding: 12px 16px;
            border-right: 0;
            border-bottom: 0;
          }
          td::before {
            color: var(--ink);
            content: attr(data-label);
            font-weight: 600;
          }
        }

        @media (max-width: 390px) {
          .shell, .reading-shell { width: min(calc(100% - 32px), var(--shell)); }
          .breadcrumb-wrap { padding-top: 18px; }
          .breadcrumb { font-size: 14px; }
          .breadcrumb ol { gap: 5px; }
          .breadcrumb li { gap: 5px; }
          h1 { font-size: 35px; }
          h2 { font-size: 29px; }
          .hero { padding-bottom: 50px; }
          .hero-meta { display: grid; gap: 8px; }
          .process-step { grid-template-columns: 42px 1fr; gap: 14px; }
          td { grid-template-columns: 1fr; gap: 5px; }
          .faq-question { grid-template-columns: 1fr 30px; font-size: 17px; }
          .faq-answer { padding-right: 0; }
        }

        @media print {
          .toc-desktop, .toc-mobile, .hero-actions, .callout-action, .related-section, .final-cta { display: none !important; }
          .shell, .reading-shell { width: 100%; }
          .hero { padding-bottom: 36px; }
          .hero-grid, .summary-grid, .framework-head, .article-layout { display: block; }
          .article-section { break-inside: avoid-page; }
          .checklist-panel { box-shadow: none; }
        }
      `}</style>

      <div className="breadcrumb-wrap">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              {breadcrumbItems.map((item, index) => (
                <li key={item.label}>
                  {item.current ? (
                    <span aria-current="page">{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                  {index < breadcrumbItems.length - 1 ? (
                    <span className="separator" aria-hidden="true">›</span>
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <header className="hero">
        <div className="shell hero-grid">
          <div className="hero-content">
            <div className="eyebrow">Mobile App Localization Guide</div>
            <h1>How to Prepare a Mobile App for Localization</h1>
            <p className="hero-deck">
              Prepare your app’s architecture, resource files, visual context,
              terminology, testing plan, and release workflow before translation
              begins. This practical guide helps product, engineering, design,
              localization, QA, and release teams plan a scalable multilingual launch.
            </p>
            <div className="hero-actions">
              <AnchorLink id="readiness" className="button button-primary">
                Explore the Guide <ArrowIcon />
              </AnchorLink>
              <AnchorLink id="readiness-checklist" className="button button-secondary">
                Jump to the Checklist <ArrowIcon />
              </AnchorLink>
            </div>
            <div className="hero-meta" aria-label="Article information">
              <span>Stepes Localization Team</span>
              <span>Approximately 28-minute read</span>
              <span>Last reviewed August 2026</span>
            </div>
          </div>

        </div>
      </header>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell summary-grid">
          <div className="summary-title">
            <div className="eyebrow">Key Takeaways</div>
            <h2 id="key-takeaways-title">Start Before the First String Is Translated</h2>
            <p>
              Strong localization programs connect product decisions, engineering,
              language, context, testing, and release planning from the beginning.
            </p>
          </div>
          <ul className="takeaways">
            {keyTakeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
          </ul>
        </div>
      </section>

      <section className="framework-band" aria-labelledby="framework-title">
        <div className="shell">
          <div className="framework-head">
            <div>
              <div className="eyebrow">Stepes Readiness Framework</div>
              <h2 id="framework-title">Six Workstreams for a Localization-Ready App</h2>
            </div>
            <p>
              An app is ready when it can support the required locales without
              unstable code changes, its content and context are organized for
              translation, and the responsible teams know how localized builds will
              be reviewed, tested, approved, and released.
            </p>
          </div>
          <div className="framework-grid">
            {readinessStages.map((stage) => (
              <article className="framework-stage" key={stage.number}>
                <div className="framework-number">{stage.number}</div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="article-region">
        <div className="reading-shell article-layout">
          <aside className="toc-desktop" aria-label="In this guide">
            <div className="toc-heading">In This Guide</div>
            <ol className="toc-list">
              {tocItems.map(([id, label]) => (
                <li key={id}><AnchorLink id={id}>{label}</AnchorLink></li>
              ))}
            </ol>
          </aside>

          <article className="article-body">
            <div className="toc-mobile">
              <details>
                <summary>In This Guide <span aria-hidden="true">+</span></summary>
                <ol className="toc-list">
                  {tocItems.map(([id, label]) => (
                    <li key={id}><AnchorLink id={id}>{label}</AnchorLink></li>
                  ))}
                </ol>
              </details>
            </div>

            <Section
              id="readiness"
              title="What Mobile App Localization Readiness Means"
              intro="Localization readiness is broader than exporting text. It connects technical architecture, market planning, source content, language guidance, testing access, and release ownership."
            >
              <p>
                Mobile app localization succeeds when language preparation, product
                engineering, interface design, testing, and release management work
                together. Translation is essential, but translation alone cannot
                correct hard-coded content, missing plural logic, ambiguous strings,
                inflexible layouts, incomplete locale formatting, or an undefined
                approval process.
              </p>
              <div className="definition-grid">
                <div className="definition-card">
                  <h3>Internationalization</h3>
                  <p>
                    Prepares the application architecture for multiple languages,
                    scripts, regional formats, and interface behaviors.
                  </p>
                </div>
                <div className="definition-card">
                  <h3>Localization Preparation</h3>
                  <p>
                    Organizes markets, resources, context, terminology, reviewers,
                    testing access, and release requirements.
                  </p>
                </div>
                <div className="definition-card">
                  <h3>Translation</h3>
                  <p>
                    Produces target-language content that accounts for meaning, tone,
                    intent, terminology, and space constraints.
                  </p>
                </div>
                <div className="definition-card">
                  <h3>Localization</h3>
                  <p>
                    Adapts the complete product experience for the language, locale,
                    platform, and market.
                  </p>
                </div>
              </div>
              <ResponsiveTable
                caption="How the disciplines work together"
                columns={["Discipline", "Primary Question", "Typical Owners"]}
                rows={[
                  ["Internationalization", "Can the product technically support the locale?", "Engineering and product architecture"],
                  ["Localization preparation", "Are the content, context, workflow, and teams ready?", "Product, localization, engineering, design, and QA"],
                  ["Translation", "How should the content read in the target language?", "Professional linguists and reviewers"],
                  ["Localization", "Does the complete experience work naturally in the market?", "The full cross-functional team"],
                ]}
              />
              <p>
                Apple’s localization workflow similarly distinguishes between
                internationalizing app resources, adding languages, translating
                content, and testing the localized application. Android recommends
                complete default resources together with locale-specific alternatives.
                See the official <ExternalLink href={externalLinks.appleLocalization}>Apple localization documentation</ExternalLink> and <ExternalLink href={externalLinks.androidLocalization}>Android localization guidance</ExternalLink>.
              </p>
              <p>
                For the broader service model, explore Stepes’ <a className="inline-link" href={internalLinks.appLocalization}>App Localization Services</a>.
              </p>
            </Section>

            <Section
              id="markets-locales"
              title="Define Your Markets, Languages, and Locales"
              intro="Do not begin with a list of language names alone. Begin with the markets, users, products, and release goals the app must support."
            >
              <Subsection title="Choose Markets Before Choosing Languages">
                <p>For each proposed market, confirm:</p>
                <BulletList items={[
                  "The intended audience and business objective.",
                  "The app features, payments, subscriptions, and support that will be available.",
                  "Regulatory, privacy, contractual, or market-specific requirements.",
                  "Product terminology already used in that market.",
                  "Whether the release will be complete, limited, phased, or a pilot.",
                  "Who will review and approve local language.",
                ]} />
                <p>
                  A language may be spoken across many countries, but one translation
                  is not automatically suitable for every market.
                </p>
              </Subsection>

              <Subsection title="Specify Locales, Not Only Languages">
                <p>
                  A locale combines a language with a region and, when needed, a
                  script or other configuration. Examples include <strong>es-MX</strong>,
                  <strong> fr-CA</strong>, <strong>pt-BR</strong>, and
                  <strong> zh-Hant-TW</strong>. Locale decisions can affect terminology,
                  tone, currencies, measurements, legal language, date formats,
                  app-store assets, and user expectations.
                </p>
              </Subsection>

              <Subsection title="Decide Where Translations Can Be Shared">
                <p>A shared version may be appropriate when:</p>
                <BulletList compact items={[
                  "Product terminology is understood consistently.",
                  "Functionality is the same across markets.",
                  "No market-specific legal or regulatory language is required.",
                  "Tone and formality align.",
                  "Regional stakeholders agree on the shared version.",
                ]} />
                <p>
                  A market-specific version may be preferable when terminology,
                  regulation, product positioning, formality, store optimization, or
                  customer expectations differ materially.
                </p>
              </Subsection>

              <Subsection title="Define Locale Fallbacks">
                <p>
                  Fallback behavior determines what users see when an exact locale
                  match is unavailable. A product might use Spanish for Mexico first,
                  a broader Latin American Spanish resource second, and the source
                  language as the ultimate default. The hierarchy should be intentional
                  and tested rather than left to chance.
                </p>
              </Subsection>

              <Subsection title="Choose a Rollout Model">
                <ResponsiveTable
                  caption="Common multilingual rollout models"
                  columns={["Model", "When It Fits", "Planning Implication"]}
                  rows={[
                    ["Simultaneous global launch", "Markets and announcements must go live together", "Requires early scope control and synchronized testing"],
                    ["Priority-market launch", "The highest-value locales should launch first", "Supports controlled waves and focused QA"],
                    ["Pilot locale", "The organization wants to validate workflow before scaling", "Tests resources, terminology, integration, and review"],
                    ["Continuous language expansion", "New markets will be added over time", "Requires durable language assets and repeatable release operations"],
                  ]}
                />
              </Subsection>

              <ResponsiveTable
                caption="Target locale planning worksheet"
                columns={["Market", "Locale", "Launch Phase", "Shared or Market-Specific", "Reviewer", "Store Listing"]}
                rows={[
                  ["Mexico", "es-MX", "Phase 1", "Market-specific", "Assigned", "Required"],
                  ["Canada", "fr-CA", "Phase 1", "Market-specific", "Assigned", "Required"],
                  ["Germany", "de-DE", "Phase 2", "Market-specific", "Assigned", "Required"],
                ]}
              />
            </Section>

            <Section
              id="internationalization"
              title="Assess Internationalization Readiness"
              intro="Evaluate the architecture before large-scale translation begins. The goal is to identify structural risks early enough to fix them deliberately rather than across dozens of localized builds."
            >
              <Subsection title="Externalize All User-Facing Content">
                <p>
                  Store customer-facing text in localizable resources rather than
                  embedding it directly in source code. Review navigation, buttons,
                  forms, validation, errors, onboarding, empty states, search,
                  permissions, purchases, notifications, widgets, shortcuts,
                  accessibility labels, server messages, and embedded web content.
                </p>
                <p>
                  For technical support beyond this readiness guide, explore
                  Stepes’ <a className="inline-link" href={internalLinks.softwareInternationalization}>Software Internationalization Services</a>.
                </p>
              </Subsection>

              <Subsection title="Use Stable, Meaningful Resource Identifiers">
                <p>
                  Stable keys connect source text to translations, context, review
                  history, screenshots, and future updates. Prefer identifiers such as
                  <strong> checkout.payment.confirm_button</strong> over temporary labels
                  such as <strong>button_07</strong>. Do not reuse one key for unrelated
                  meanings merely because the current English text is identical.
                </p>
              </Subsection>

              <Subsection title="Avoid Sentence Concatenation">
                <p>
                  Building sentences from separate fragments often fails in languages
                  with different word order, agreement, gender, case, or plural behavior.
                </p>
                <div className="code-example">
                  <div className="code-label">Fragile Structure</div>
                  <pre>{`"You have " + count + " new messages"`}</pre>
                </div>
                <div className="code-example">
                  <div className="code-label">Localization-Ready Structure</div>
                  <pre>{`messages.new_count = "You have {count} new messages"`}</pre>
                </div>
              </Subsection>

              <Subsection title="Support Plurals and Grammatical Variations">
                <p>
                  English commonly distinguishes singular and plural, while other
                  languages may require additional forms. Support cardinal and ordinal
                  plurals, gender or grammatical agreement, select statements, formal
                  and informal variants, and feature-specific variations where the
                  product requires them. Unicode CLDR documents plural categories such
                  as zero, one, two, few, many, and other. See the <ExternalLink href={externalLinks.unicodePluralRules}>Unicode plural-rules reference</ExternalLink>.
                </p>
                <p>
                  Apple String Catalogs support plurals and variations, and Android
                  provides dedicated plural resources. Platform-specific implementation
                  details belong in the dedicated <a className="inline-link" href={internalLinks.iosGuide}>iOS App Localization Guide</a> and <a className="inline-link" href={internalLinks.androidGuide}>Android App Localization Guide</a>.
                </p>
              </Subsection>

              <Subsection title="Use Locale-Aware Formatting">
                <p>
                  Use platform formatters and reliable locale data for dates, times,
                  time zones, numbers, percentages, currencies, measurements, addresses,
                  phone numbers, names, lists, sorting, and collation. A translated label
                  does not correct an incorrectly formatted amount or date.
                </p>
              </Subsection>

              <Subsection title="Support Unicode Across the Full Product Stack">
                <p>
                  Check databases, APIs, search, input validation, authentication, user
                  profiles, notifications, analytics, exports, reporting, support tools,
                  and third-party integrations. A mobile interface may display a script
                  correctly while a backend system rejects the same characters.
                </p>
              </Subsection>

              <Subsection title="Review Fonts and Glyph Coverage">
                <p>
                  Confirm character coverage, script legibility, fallback behavior,
                  weights, styles, diacritics, combining characters, line-height needs,
                  and accessibility scaling with representative content rather than the
                  source language alone.
                </p>
              </Subsection>

              <Subsection title="Design for Text Expansion and Contraction">
                <p>
                  Review fixed-width buttons, navigation tabs, dialogs, forms, cards,
                  tables, charts, compact headers, landscape layouts, tablets, and
                  accessibility text sizes. There is no universal expansion percentage
                  that guarantees a safe interface. Flexible components and realistic
                  testing are more reliable than one fixed allowance.
                </p>
              </Subsection>

              <Subsection title="Prepare for Right-to-Left Interfaces">
                <p>
                  Right-to-left support affects layout direction, navigation, icons,
                  progress indicators, carousels, tables, forms, mixed-direction content,
                  numbers, product names, punctuation, gestures, animations, and
                  third-party components. Use direction-aware start and end concepts
                  rather than hard-coded left and right assumptions where the technology
                  permits. See the <ExternalLink href={externalLinks.w3cInternationalization}>W3C internationalization techniques</ExternalLink>.
                </p>
              </Subsection>

              <Subsection title="Define App-Level Language Behavior">
                <p>
                  Decide whether the app follows the device language, a system-level
                  app-specific setting, an in-app language selector, an account-level
                  preference, or a combination. Define first-launch behavior, persistence,
                  synchronization, restart requirements, active-transaction behavior,
                  and how server-delivered content follows the same choice. Android 13
                  and later support centralized per-app language preferences. See the
                  <ExternalLink href={externalLinks.androidLanguages}>Android app-language guidance</ExternalLink>.
                </p>
              </Subsection>

              <Subsection title="Include External and Third-Party Content">
                <p>
                  Inventory content from content management systems, remote configuration,
                  APIs, notifications, email, SMS, chatbots, downloadable documents,
                  embedded sites, authentication providers, payments, maps, analytics,
                  consent tools, and support platforms. Assign ownership for every source.
                </p>
              </Subsection>

              <ResponsiveTable
                caption="Internationalization readiness matrix"
                columns={["Area", "What to Verify", "Risk If Missed"]}
                rows={[
                  ["String externalization", "Visible text is held in localizable resources", "Mixed-language or untranslatable screens"],
                  ["Stable keys", "Each string has a durable, meaningful identifier", "Lost history and incorrect reuse"],
                  ["Sentence structure", "Complete messages are translated together", "Broken grammar and word order"],
                  ["Plurals and variants", "Required language forms are supported", "Incorrect quantity and agreement"],
                  ["Locale formatting", "Values use locale-aware formatters", "Misleading dates, numbers, or currencies"],
                  ["Unicode", "The full technology stack supports required scripts", "Rejected input or corrupted data"],
                  ["Layout flexibility", "Controls support wrapping and resizing", "Truncation and overlap"],
                  ["RTL support", "Direction, mirroring, icons, and mixed text are supported", "Broken navigation and reading order"],
                  ["Fallbacks", "Default resources are complete and tested", "Missing or unstable content"],
                  ["External systems", "Server, CMS, notification, and third-party content is included", "Incomplete multilingual experience"],
                ]}
              />
            </Section>

            <Section
              id="content-inventory"
              title="Inventory All Localizable Content"
              intro="Visible interface strings are only one part of a mobile localization program. Build a complete inventory before estimating volume, timing, cost, or testing effort."
            >
              <Subsection title="In-App Interface Content">
                <BulletList compact items={[
                  "Menus, navigation, buttons, forms, instructions, validation, and errors.",
                  "Search, filters, tooltips, empty states, onboarding, account settings, and security messages.",
                  "Subscription, cancellation, payment, confirmation, help, and support flows.",
                ]} />
              </Subsection>
              <Subsection title="Device and Operating-System Content">
                <BulletList compact items={[
                  "Permission descriptions, app name, home-screen labels, notifications, widgets, and shortcuts.",
                  "Voice-assistant content, accessibility labels, deep-link destinations, and platform prompts.",
                ]} />
              </Subsection>
              <Subsection title="Commercial and Transactional Content">
                <BulletList compact items={[
                  "Subscription tiers, pricing descriptions, in-app purchases, promotions, trials, and referrals.",
                  "Payment confirmations, cancellation guidance, refunds, loyalty, and reward content.",
                ]} />
              </Subsection>
              <Subsection title="App-Store Content">
                <p>
                  Prepare the app name, subtitle or short description, full description,
                  keywords where applicable, promotional text, release notes, screenshots,
                  preview videos, in-app product names, and market-specific creative assets.
                  Apple and Google Play both support localized store content and visual
                  assets. Review the <ExternalLink href={externalLinks.appleStoreLocalization}>App Store Connect localization guidance</ExternalLink> and <ExternalLink href={externalLinks.googlePlayLocalization}>Google Play localization guidance</ExternalLink>.
                </p>
              </Subsection>
              <Subsection title="Media and Supporting Content">
                <BulletList compact items={[
                  "Images containing text, illustrations, video, voiceover, subtitles, captions, and animation.",
                  "Help centers, FAQs, legal notices, privacy policies, marketing pages, email, and SMS.",
                ]} />
              </Subsection>
              <ResponsiveTable
                caption="Mobile app content inventory"
                columns={["Content Type", "Source System", "Format", "Owner", "Release Scope", "Context"]}
                rows={[
                  ["Interface strings", "Mobile repository", "Native resources", "Product", "Included", "Screenshots and comments"],
                  ["Push notifications", "Messaging platform", "JSON or CSV", "Product marketing", "Included", "Trigger definitions"],
                  ["App-store listing", "Store consoles", "Platform metadata", "Marketing", "Included", "Market brief"],
                  ["Help content", "Knowledge base", "HTML or export", "Support", "Included", "Published source"],
                  ["Video onboarding", "Media repository", "Video and captions", "Product education", "Phase 2", "Storyboard"],
                ]}
              />
            </Section>

            <Section
              id="source-resources"
              title="Prepare Your Source Resource Files"
              intro="Use native or structured files whenever practical. Their keys, relationships, metadata, and syntax are more useful than a plain list of sentences."
            >
              <Subsection title="Preserve Native Resource Structures">
                <p><strong>iOS resources</strong> may include String Catalogs and .xcstrings, .strings, .stringsdict, XLIFF packages, interface content, localized assets, and App Store Connect exports.</p>
                <p><strong>Android resources</strong> may include XML strings, arrays, plurals, locale-specific values directories, Jetpack Compose resources, app labels, and Google Play exports.</p>
                <p><strong>Cross-platform resources</strong> may include Flutter ARB, JSON, YAML, JavaScript or TypeScript resources, RESX, PO, Java properties, XLIFF, CSV, or another assessed structured format.</p>
                <p>
                  Apple recommends String Catalogs for modern Xcode localization, with
                  support for translations, comments, plurals, and variations. See the
                  <ExternalLink href={externalLinks.appleStringCatalogs}>Apple String Catalog documentation</ExternalLink>.
                </p>
              </Subsection>
              <Subsection title="Preserve Contextual Metadata">
                <ResponsiveTable
                  caption="Recommended string metadata"
                  columns={["Field", "Purpose"]}
                  rows={[
                    ["Key", "Stable technical identity"],
                    ["Source text", "Content to be translated"],
                    ["Developer comment", "Meaning, behavior, or implementation guidance"],
                    ["Screen or feature", "Where the string appears"],
                    ["Character limit", "Available interface constraint"],
                    ["Placeholder definition", "Meaning and required syntax"],
                    ["Plural or select structure", "Required grammatical variants"],
                    ["Screenshot reference", "Visual context"],
                    ["Translatable status", "Whether the content should change"],
                    ["Version or build", "Release relationship"],
                    ["Previous translation", "Approved or historical language reference"],
                  ]}
                />
              </Subsection>
              <Subsection title="Mark Nontranslatable Content">
                <p>
                  Identify brand and product names, file paths, URLs, API values,
                  analytics identifiers, code, markup, keyboard shortcuts, model
                  numbers, legal names, and protected trademarks. “Do not translate”
                  is most useful when accompanied by the reason and usage rule.
                </p>
              </Subsection>
              <Subsection title="Use Spreadsheets Carefully">
                <p>
                  A spreadsheet can work for a small or manually managed project, but
                  it should preserve keys, file mapping, placeholders, comments,
                  character limits, plural relationships, version history, approval
                  status, and import requirements. Copying interface text into one
                  unstructured column removes the relationships needed for safe
                  reintegration and future updates.
                </p>
              </Subsection>
              <Subsection title="Remove Obsolete Content and Control Source Changes">
                <p>
                  Remove deprecated features, test strings, development notes, hidden
                  experiments, abandoned keys, internal-only labels, and content no
                  longer included in the release. Then define how new, deleted, changed,
                  and emergency strings will be tracked during localization.
                </p>
              </Subsection>
            </Section>

            <Section
              id="technical-syntax"
              title="Protect Variables, Placeholders, and Technical Syntax"
              intro="Mobile resources contain technical elements that must remain functional after translation. Protecting them is a localization-engineering requirement, not only a linguistic preference."
            >
              <Subsection title="Identify Protected Elements">
                <BulletList compact items={[
                  "Variables, placeholders, format specifiers, and ICU MessageFormat syntax.",
                  "HTML, XML, Markdown, escape sequences, resource references, and newlines.",
                  "URLs, product codes, commands, analytics events, and nontranslatable tokens.",
                ]} />
              </Subsection>

              <div className="anatomy-panel">
                <div className="eyebrow">Annotated Example</div>
                <h3>Anatomy of a Localization-Ready String</h3>
                <div className="anatomy-grid">
                  <div className="anatomy-field"><strong>Key</strong><span>checkout.receipt_ready</span></div>
                  <div className="anatomy-field"><strong>Screen</strong><span>Checkout confirmation</span></div>
                  <div className="anatomy-field wide"><strong>Source</strong><span>Your receipt for {'{amount}'} is ready.</span></div>
                  <div className="anatomy-field wide"><strong>Developer Comment</strong><span>Confirmation shown after a successful payment.</span></div>
                  <div className="anatomy-field"><strong>Placeholder</strong><span>{'{amount}'} = localized currency value</span></div>
                  <div className="anatomy-field"><strong>Character Limit</strong><span>80 characters; may wrap to two lines</span></div>
                  <div className="anatomy-field"><strong>Screenshot</strong><span>checkout-confirmation-01.png</span></div>
                  <div className="anatomy-field"><strong>Do Not Translate</strong><span>Placeholder name and braces</span></div>
                </div>
              </div>

              <Subsection title="Explain Variables, Not Just Their Syntax">
                <p>
                  In <strong>Welcome, {'{name}'}</strong>, the translator should know
                  whether the value is a given name, full name, company, display name,
                  or system-generated label. The inserted value may affect punctuation,
                  formality, gender, word order, or grammatical case.
                </p>
                <p>
                  More complex messages such as <strong>{'{user_name}'} added {'{count}'} items to {'{list_name}'}</strong> may require plural logic, changed sentence order, or additional grammatical handling.
                </p>
              </Subsection>

              <Subsection title="Validate Technical Elements Automatically">
                <p>
                  Where the format permits, compare source and target content for missing
                  or added variables, changed names, invalid types, unbalanced tags,
                  altered markup, incorrect escaping, missing plural branches, changed
                  numbers, and character-limit violations. Automated checks protect
                  technical integrity, but they do not confirm linguistic quality or
                  in-context suitability.
                </p>
              </Subsection>
            </Section>

            <Section
              id="context"
              title="Give Translators Visual and Functional Context"
              intro="Short interface strings are often highly ambiguous. Context is part of the information required to translate the product correctly."
            >
              <Subsection title="Explain Why the String Exists">
                <p>
                  Terms such as <strong>Order</strong>, <strong>Apply</strong>,
                  <strong> Home</strong>, <strong>Charge</strong>, <strong>Book</strong>,
                  <strong> Current</strong>, and <strong>Save</strong> can carry different
                  meanings depending on the screen, user action, and product domain.
                  The translator needs the function, not only the source word.
                </p>
              </Subsection>
              <Subsection title="Supply Screenshots and Screen References">
                <p>
                  Show the complete relevant screen, identify the translatable element,
                  include useful surrounding content, represent different states, and
                  map the screenshot reliably to resource keys. A screenshot without
                  key mapping may still leave the linguist guessing.
                </p>
              </Subsection>
              <Subsection title="Share Designs, Prototypes, and User Flows">
                <p>
                  Figma files, clickable prototypes, design-system components, user-flow
                  diagrams, storyboards, redlines, screen inventories, and responsive
                  behavior help linguists understand meaning and help engineers identify
                  layout risk.
                </p>
              </Subsection>
              <Subsection title="Provide Representative Builds">
                <p>
                  Depending on security and product maturity, provide TestFlight access,
                  Android test builds, staging environments, test accounts, sample
                  transactions, feature flags, representative user roles, and regional
                  configurations. Build access reveals navigation, timing, and interaction
                  that a file export cannot show.
                </p>
              </Subsection>
              <Subsection title="Document User Intent and Establish a Query Process">
                <p>
                  Explain what the user is trying to accomplish, what happened before
                  the message, what happens after it, whether the action can be reversed,
                  and whether the content is instructional, promotional, transactional,
                  legal, medical, or safety-related. Manage questions in one shared log
                  with clear owners, response expectations, and reusable decisions.
                </p>
              </Subsection>
              <Callout label="Context Principle" title="Translate the intended experience, not only the visible source words.">
                <p>
                  Stepes can combine resource metadata, screenshots, designs, prototypes,
                  developer comments, user flows, test environments, and localized builds
                  so linguists and reviewers can evaluate language within the complete
                  product experience.
                </p>
              </Callout>
            </Section>

            <Section
              id="terminology"
              title="Establish Terminology and Product Voice"
              intro="A focused list of high-impact product language can prevent extensive rework, even when a complete enterprise glossary does not yet exist."
            >
              <Subsection title="Build a Product Terminology List">
                <p>
                  Prioritize product and feature names, navigation, subscriptions,
                  industry terms, regulated language, privacy and security terms, words
                  that remain in English, prohibited wording, abbreviations, and the
                  distinction between customer-facing and internal terminology.
                </p>
                <ResponsiveTable
                  caption="Starter app terminology table"
                  columns={["Source Term", "Definition", "Target Guidance", "Usage Note", "Owner"]}
                  rows={[
                    ["Workspace", "Shared area containing projects and users", "Approve per locale", "Do not translate as a physical office", "Product"],
                    ["Pro Plan", "Commercial subscription tier", "Retain or localize by market", "Match billing and store listing", "Marketing"],
                    ["Submit", "Send information for formal processing", "Locale-specific action term", "Distinguish from Save", "UX writing"],
                  ]}
                />
              </Subsection>
              <Subsection title="Define Product Voice">
                <p>
                  Document formality, tone, concision, technical depth, contractions,
                  sentence fragments, capitalization, punctuation, user address,
                  inclusive-language expectations, error-message style, button-label
                  conventions, and use of humor. A marketing banner, payment error,
                  privacy notice, and medical warning may require different guidance.
                </p>
              </Subsection>
              <Subsection title="Coordinate Language Across Channels">
                <p>
                  Align the app, website, SaaS platform, documentation, help center,
                  support, app-store listing, email, notifications, marketing, and legal
                  content. Users should not see one term in the store, another during
                  onboarding, and a third in customer support.
                </p>
              </Subsection>
              <Subsection title="Reuse Approved Language Assets">
                <p>
                  Review translation memories, glossaries, previous releases, website
                  translations, software content, documentation, support content, and
                  regional marketing. A <a className="inline-link" href={internalLinks.translationMemory}>Translation Memory</a> can store approved source and target segments for suitable reuse, but context and validation still determine whether a historical translation fits a new use.
                </p>
              </Subsection>
              <Subsection title="Involve Regional Reviewers Early">
                <p>
                  Define reviewer responsibilities, deadlines, approval authority, and
                  the difference between an error and a stylistic preference. Record
                  approved decisions in the glossary and translation memory so the same
                  question does not return in every release.
                </p>
              </Subsection>
            </Section>

            <Section
              id="design-media-accessibility"
              title="Prepare Design, Media, and Accessibility Content"
              intro="Localization affects the complete mobile experience, including visuals, media, assistive text, flexible layouts, and store assets."
            >
              <Subsection title="Separate Text From Images">
                <p>
                  Keep text editable, use layered source files, preserve fonts and source
                  assets, place language in overlays rather than flattened graphics, and
                  maintain templates for localized screenshots. This reduces manual
                  recreation and makes future updates easier.
                </p>
              </Subsection>
              <Subsection title="Review Visual Content for Market Suitability">
                <p>
                  Evaluate icons, gestures, maps, flags, people, clothing, food, currencies,
                  addresses, documents, cultural references, medical or legal imagery,
                  and directional symbols. Base adaptations on real market requirements
                  rather than assumptions or stereotypes.
                </p>
              </Subsection>
              <Subsection title="Prepare Localized Screenshots and App Previews">
                <p>
                  Store screenshots should reflect the localized product users will
                  install. Avoid pairing translated descriptions with source-language
                  screens unless the product intentionally operates that way. See
                  Apple’s <ExternalLink href={externalLinks.appleScreenshots}>localized screenshot and app-preview guidance</ExternalLink>.
                </p>
              </Subsection>
              <Subsection title="Inventory Audio and Video">
                <p>
                  Identify voiceover, spoken prompts, tutorial narration, subtitles,
                  captions, on-screen text, animation timing, audio descriptions,
                  accessibility transcripts, and preview videos. The appropriate method
                  may involve subtitling, dubbing, re-recording, text replacement, or a
                  combination.
                </p>
              </Subsection>
              <Subsection title="Include Accessibility Content">
                <p>
                  Prepare screen-reader labels, hints, alternative text, voice-control
                  names, form instructions, error descriptions, captions, transcripts,
                  and accessible names for icons and controls. Keep accessibility text
                  connected to the related interface element and user action. See the
                  <ExternalLink href={externalLinks.androidAccessibility}>Android accessibility guidance</ExternalLink>.
                </p>
              </Subsection>
              <Subsection title="Test Enlarged and Flexible Text">
                <p>
                  Review dynamic text settings, font scaling, screen-reader focus,
                  multiline labels, small screens, tablets, landscape orientation,
                  split-screen layouts, and adaptive or foldable interfaces where
                  supported. A translation that fits at the default size may fail when
                  users enlarge text.
                </p>
              </Subsection>
            </Section>

            <Section
              id="pretranslation-testing"
              title="Run Pre-Translation Readiness Tests"
              intro="Pre-translation testing confirms that the app can enter localization. It does not replace linguistic and functional testing after translated content is integrated."
            >
              <Subsection title="Run Pseudolocalization">
                <p>
                  Pseudolocalization replaces source strings with simulated content that
                  can expose hard-coded text, missing resources, expansion, truncation,
                  unsupported characters, encoding problems, fragile sentence structure,
                  and right-to-left issues before real translations are available. See
                  the <ExternalLink href={externalLinks.androidPseudo}>Android pseudolocale documentation</ExternalLink>.
                </p>
              </Subsection>
              <Subsection title="Test Expansion and Right-to-Left Behavior">
                <p>
                  Use expanded pseudo-text for buttons, navigation, dialogs, forms,
                  notifications, tables, cards, charts, compact screens, orientation
                  changes, and accessibility sizes. Use an RTL pseudolocale to review
                  screen direction, icons, carousels, progress indicators, forms,
                  mixed-direction text, product names, charts, and third-party components.
                </p>
              </Subsection>
              <Subsection title="Detect Missing and Hard-Coded Text">
                <p>
                  Combine static analysis, build-time checks, runtime inspection,
                  resource comparison, screenshots, automated UI tests, and manual flow
                  review. Include states triggered by errors, permission denial, account
                  changes, and unusual transactions—not only the primary happy path.
                </p>
              </Subsection>
              <Subsection title="Validate Placeholders, Resources, and Locale Formatting">
                <p>
                  Confirm that placeholders are valid, plural branches compile, files
                  pass syntax checks, markup is balanced, escaping is correct, defaults
                  are complete, locale identifiers are valid, and builds load the
                  expected resources. Then change the locale and review dates, times,
                  currencies, numbers, measurements, addresses, names, sorting, search,
                  and input validation.
                </p>
              </Subsection>
              <ResponsiveTable
                caption="Recommended localization readiness gate"
                columns={["Criterion", "Status"]}
                rows={[
                  ["No known hard-coded customer-facing strings remain in scope", "Pass / Action Needed"],
                  ["Source resources are stable and exportable", "Pass / Action Needed"],
                  ["Keys and contextual metadata are preserved", "Pass / Action Needed"],
                  ["Placeholders and plural structures validate", "Pass / Action Needed"],
                  ["Pseudolocalization and text expansion have been reviewed", "Pass / Action Needed"],
                  ["RTL architecture is supported where required", "Pass / Action Needed"],
                  ["Default and fallback resources are complete", "Pass / Action Needed"],
                  ["Representative builds and test access are available", "Pass / Action Needed"],
                  ["Remaining risks have owners and correction dates", "Pass / Action Needed"],
                ]}
              />
              <p>
                Continue with the full <a className="inline-link" href={internalLinks.testingChecklist}>Mobile App Localization Testing Checklist</a> after translated resources are integrated.
              </p>
            </Section>

            <Section
              id="workflow"
              title="Define the Localization Workflow and Responsibilities"
              intro="A successful workflow makes ownership visible and prevents the program from depending on informal decisions or individual memory."
            >
              <ResponsiveTable
                caption="Core roles and responsibilities"
                columns={["Role", "Primary Responsibility"]}
                rows={[
                  ["Product Owner", "Scope, priorities, features, markets, and final product decisions"],
                  ["Engineering Owner", "Internationalization, resources, builds, integration, and technical corrections"],
                  ["Localization Manager", "Languages, schedules, assets, vendor coordination, and governance"],
                  ["Content or UX Owner", "Source clarity, product voice, terminology, and context"],
                  ["Localization Partner", "Translation, localization engineering, linguistic QA, and agreed testing"],
                  ["Regional Reviewer", "Market terminology, product suitability, and defined approvals"],
                  ["QA Lead", "Test planning, defect routing, severity, retesting, and regression"],
                  ["Release Manager", "Build milestones, store submission, launch, and post-release action"],
                ]}
              />

              <Subsection title="Select the Content Exchange Model">
                <p>
                  Options include secure manual exchange, a customer portal, translation
                  management system, repository integration, localization API, automated
                  build pipeline, or a hybrid workflow. The right model depends on
                  release frequency, resource architecture, security, language count,
                  review requirements, and engineering capacity.
                </p>
              </Subsection>

              <Subsection title="Define Approval Stages">
                <div className="process-list">
                  {[
                    ["01", "Source Preparation", "Finalize suitable resources, scope, context, and change controls."],
                    ["02", "Translation and Linguistic Review", "Apply approved terminology, style, context, and quality requirements."],
                    ["03", "Customer or Regional Review", "Resolve defined market and product decisions through an accountable process."],
                    ["04", "Engineering Integration", "Return validated resources to the product and produce representative builds."],
                    ["05", "In-Context and Functional Testing", "Review language, layout, locale behavior, devices, accessibility, and user flows."],
                    ["06", "Correction, Approval, and Release", "Resolve defects, retest, record decisions, and prepare final release assets."],
                  ].map(([number, title, text]) => (
                    <div className="process-step" key={number}>
                      <div className="process-step-number">{number}</div>
                      <div><h3>{title}</h3><p>{text}</p></div>
                    </div>
                  ))}
                </div>
              </Subsection>

              <Subsection title="Define Review Authority and Security Requirements">
                <p>
                  Clarify who may request changes, approve terminology, resolve
                  disagreements, accept known limitations, and provide final approval.
                  Document access to unreleased content, repositories, test credentials,
                  personal or regulated data, production environments, file retention,
                  confidentiality, regional restrictions, and approved AI use. Use test
                  or synthetic data when real customer data is not necessary.
                </p>
              </Subsection>

              <Subsection title="Plan AI-Assisted Translation Responsibly">
                <p>
                  Define eligible content, approved models and environments, data rules,
                  terminology and translation-memory controls, context, automated checks,
                  professional review, specialist validation, and final approval. High-
                  visibility, brand-sensitive, transactional, legal, medical, privacy,
                  safety, and context-dependent strings generally need stronger human
                  oversight than repetitive low-risk content. Stepes’
                  <a className="inline-link" href={internalLinks.aiTranslation}> AI Translation Services</a>
                  provide additional guidance on governed AI + Human Translation Workflows.
                </p>
                <p>
                  Platform toolchains are also adding AI-assisted capabilities. Apple
                  now documents agent-based workflows that can add languages, update
                  String Catalogs, translate strings, and add plural variants. Treat
                  these tools as accelerators rather than substitutes for readiness,
                  security, terminology, context, technical QA, and accountable approval.
                  See Apple’s <ExternalLink href={externalLinks.appleAgents}>agent-assisted localization documentation</ExternalLink>.
                </p>
              </Subsection>

              <Subsection title="Prepare for Continuous Localization">
                <p>
                  Frequent releases need a defined method for new and modified strings,
                  branches, translation-memory reuse, terminology updates, job creation,
                  review routing, build readiness, quality gates, pull requests, hotfixes,
                  and deprecated content. Explore Stepes’ <a className="inline-link" href={internalLinks.softwareLocalizationApi}>Software Localization API</a> and the dedicated <a className="inline-link" href={internalLinks.continuousLocalization}>Continuous Localization for Mobile Apps</a> guide.
                </p>
              </Subsection>
            </Section>

            <Section
              id="release-plan"
              title="Coordinate the Multilingual Release Plan"
              intro="Work backward from the target launch date and include every dependency required to translate, integrate, test, correct, approve, and publish the localized product."
            >
              <Subsection title="Include Every Required Stage">
                <BulletList compact items={[
                  "Locale confirmation, source cutoff, resource export, translation, and linguistic review.",
                  "Regional review, engineering integration, localized build creation, and in-context validation.",
                  "Functional and locale testing, correction, retesting, regression, and final approval.",
                  "Store metadata, screenshots, previews, submission, launch monitoring, and post-release support.",
                ]} />
                <p>
                  Do not schedule the first localized build immediately before store
                  submission. Testing needs enough time to identify, resolve, integrate,
                  and retest defects.
                </p>
              </Subsection>
              <Subsection title="Coordinate Connected Release Assets">
                <p>
                  Treat in-app strings, store listings, screenshots, release notes,
                  purchase descriptions, support content, documentation, marketing,
                  launch email, legal notices, and customer-service readiness as one
                  connected market experience.
                </p>
              </Subsection>
              <Subsection title="Choose Simultaneous or Phased Release">
                <p>
                  A simultaneous launch may be appropriate when markets and announcements
                  are tightly linked and sufficient testing capacity is available. A
                  phased release may be safer when product readiness, regional review,
                  legal requirements, store timing, or QA capacity differ by market.
                </p>
              </Subsection>
              <Subsection title="Reserve Time for Corrections and Post-Launch Ownership">
                <p>
                  A localized defect may require changes to language, source text,
                  interface design, resource structure, formatting, third-party content,
                  screenshots, or support material. Assign owners for user-reported
                  issues, store feedback, emergency corrections, new features,
                  terminology, translation memory, and future release synchronization.
                </p>
              </Subsection>
            </Section>

            <Section
              id="handoff"
              title="Build the App Localization Handoff Package"
              intro="A complete handoff gives the localization team enough technical, linguistic, visual, operational, and scheduling information to scope and execute the work accurately."
            >
              <div className="process-list">
                {[
                  ["01", "Product and Platform Information", "App purpose, users, platforms, frameworks, version, source locale, devices, owners, and release model."],
                  ["02", "Market and Language Information", "Target markets, exact locales, priorities, variants, fallback rules, reviewers, and market requirements."],
                  ["03", "Source Content", "Structured resources, volume, store metadata, media, notifications, server content, prior translations, and change controls."],
                  ["04", "Language Assets", "Terminology, style, translation memory, naming rules, approved previous content, and do-not-translate guidance."],
                  ["05", "Context", "Screenshots, designs, prototypes, flows, developer comments, screen IDs, limits, builds, credentials, and representative data."],
                  ["06", "Workflow and Security", "Delivery method, integrations, review stages, contacts, file naming, versioning, issue tracking, reporting, and access controls."],
                  ["07", "Testing and Release", "Devices, operating systems, build dates, scope, acceptance criteria, severity rules, launch dates, and retesting windows."],
                ].map(([number, title, text]) => (
                  <div className="process-step" key={number}>
                    <div className="process-step-number">{number}</div>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </div>
                ))}
              </div>
              <ResponsiveTable
                caption="App localization handoff summary"
                columns={["Category", "Minimum Recommended Input"]}
                rows={[
                  ["Product", "Platforms, framework, users, features, and version"],
                  ["Markets", "Exact locales, launch phases, variants, and reviewers"],
                  ["Resources", "Native files, volume, store content, notifications, and media"],
                  ["Language Assets", "Glossary, style, translation memory, and prior translations"],
                  ["Context", "Screenshots, designs, comments, flows, and builds"],
                  ["Workflow", "Delivery, review, security, change control, and reporting"],
                  ["Testing", "Devices, access, scope, acceptance criteria, and retesting"],
                  ["Release", "Build dates, store requirements, launch, and update frequency"],
                ]}
              />
              <Callout
                label="Readiness Review"
                title="Not Sure Whether Your App Is Ready?"
                action={<a className="button button-primary" href={internalLinks.contact}>Request a Readiness Review <ArrowIcon /></a>}
              >
                <p>
                  Stepes can review representative resource files, target locales,
                  contextual assets, testing needs, and release requirements before
                  translation begins.
                </p>
              </Callout>
            </Section>

            <Section
              id="mistakes"
              title="Avoid Common App Localization Preparation Mistakes"
              intro="The most expensive localization problems are often preventable. Address them before they multiply across languages and releases."
            >
              <div className="mistakes-list">
                {[
                  ["Starting Translation Before Internationalization Is Reviewed", "Hard-coded content, missing variants, unstable layouts, and incomplete locale behavior may surface only after many translations exist.", "Run a focused readiness assessment and pseudolocalization pass first."],
                  ["Choosing Languages Without Defining Locales", "Terminology, formats, legal content, reviewers, and store assets may not match the intended market.", "Define language-region combinations and where shared versions are acceptable."],
                  ["Sending Strings Without Keys or Context", "Linguists must guess meaning, and approved translations are difficult to integrate or reuse.", "Preserve keys, comments, screen references, variables, limits, and screenshots."],
                  ["Reusing One String for Multiple Meanings", "A translation may be correct on one screen and wrong on another.", "Use separate keys when function or meaning differs."],
                  ["Building Sentences From Fragments", "Target-language word order and agreement may break.", "Localize complete messages and expose proper plural or select structures."],
                  ["Embedding Text in Flattened Graphics", "Every language requires manual design recreation and future changes become expensive.", "Separate editable text from images and retain source files."],
                  ["Changing the Source Without Version Control", "Translations, screenshots, builds, and reviews refer to different source versions.", "Use a cutoff, change log, branches, or continuous synchronization."],
                  ["Waiting for the Final Build to Test", "Structural problems are discovered too late for efficient correction.", "Use pseudolocalization and representative builds earlier."],
                  ["Assigning Regional Reviewers After Translation", "Feedback arrives late, terminology conflicts, and releases are delayed.", "Assign reviewers and approve high-impact terminology in advance."],
                  ["Treating App-Store Content as a Last-Minute Task", "The listing may not match the product or may miss the release schedule.", "Include metadata, screenshots, product descriptions, and release notes in the main plan."],
                  ["Assuming AI Eliminates Preparation", "Automated output still lacks context, terminology, protected syntax, governance, and accountable review.", "Use AI within a structured workflow with technical QA and professional validation."],
                ].map(([title, impact, recommendation]) => (
                  <div className="mistake" key={title}>
                    <h3>{title}</h3>
                    <p><strong>Impact:</strong> {impact}<br /><strong>Better approach:</strong> {recommendation}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="readiness-checklist"
              title="Mobile App Localization Readiness Checklist"
              intro="Use this checklist before submitting the app for translation. Product, engineering, localization, QA, and release teams can review it together to confirm readiness, assign owners, and resolve remaining risks."
            >
              <div className="checklist-panel">
                <div className="checklist-header">
                  <p>
                    Review each item as complete, action needed, or not applicable. Add
                    owners and correction dates for any unresolved risk. Save or print
                    this page when a shared review copy is useful.
                  </p>
                </div>
                <div className="checklist-grid">
                  {checklistGroups.map((group) => (
                    <div className="checklist-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul className="checklist-items">
                        {group.items.map((item) => (
                          <li key={item}>
                            <span className="checklist-marker" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <Section
              id="stepes-support"
              className="stepes-panel"
              title="How Stepes Helps Prepare Apps for Localization"
              intro="Preparing an app for localization often requires coordination among teams that own code, content, design, language, testing, security, and release operations."
            >
              <div className="stepes-capabilities">
                <div className="stepes-capability">
                  <h3>Internationalization and Resource Review</h3>
                  <p>Identify hard-coded content, format requirements, locale risks, plural structures, variables, context gaps, and build dependencies.</p>
                </div>
                <div className="stepes-capability">
                  <h3>Context and Language Preparation</h3>
                  <p>Connect screenshots, Figma designs, prototypes, comments, limits, terminology, translation memory, style, and representative builds.</p>
                </div>
                <div className="stepes-capability">
                  <h3>Localization Engineering</h3>
                  <p>Process native and cross-platform resources while protecting keys, placeholders, markup, plurals, locale mappings, and delivery structures.</p>
                </div>
                <div className="stepes-capability">
                  <h3>AI + Human Translation Workflows</h3>
                  <p>Route content through appropriate translation memory, terminology, AI, professional linguists, human review, and quality controls.</p>
                </div>
                <div className="stepes-capability">
                  <h3>In-Context Review and Testing</h3>
                  <p>Configure linguistic, visual, locale, functional, RTL, accessibility, device, regression, defect, and retesting workflows.</p>
                </div>
                <div className="stepes-capability">
                  <h3>Continuous Release Support</h3>
                  <p>Support changed-string synchronization, language-asset reuse, review routing, automated QA, and release-ready resource delivery.</p>
                </div>
              </div>
              <p style={{ marginTop: 28, marginBottom: 0 }}>
                Explore Stepes’ complete <a className="inline-link" href={internalLinks.appLocalization}>App Localization Services</a> for iOS, Android, and cross-platform mobile products.
              </p>
            </Section>

            <Section
              id="faq"
              title="Frequently Asked Questions"
              intro="Practical answers to the questions product and engineering teams most often ask before mobile app translation begins."
            >
              <FaqAccordion />
            </Section>

            <Section
              id="sources"
              title="Sources and References"
              intro="Platform and internationalization guidance changes over time. These primary sources provide the technical foundation for the recommendations in this guide."
            >
              <div className="source-list">
                {[
                  ["Apple Developer", "Localization in Xcode", externalLinks.appleLocalization],
                  ["Apple Developer", "Localizing and Varying Text With a String Catalog", externalLinks.appleStringCatalogs],
                  ["Apple Developer", "Localizing Your App Using Agents", externalLinks.appleAgents],
                  ["Android Developers", "Localize Your App", externalLinks.androidLocalization],
                  ["Android Developers", "Per-App Language Preferences", externalLinks.androidLanguages],
                  ["Android Developers", "Pseudolocales", externalLinks.androidPseudo],
                  ["Android Developers", "Build More Accessible Apps", externalLinks.androidAccessibility],
                  ["Unicode Consortium", "CLDR Plural Rules", externalLinks.unicodePluralRules],
                  ["W3C Internationalization", "Authoring Techniques for Internationalized Content", externalLinks.w3cInternationalization],
                  ["App Store Connect", "Localize App Information", externalLinks.appleStoreLocalization],
                  ["App Store Connect", "Upload App Previews and Screenshots", externalLinks.appleScreenshots],
                  ["Google Play Console Help", "Translate and Localize Your App", externalLinks.googlePlayLocalization],
                ].map(([publisher, title, href]) => (
                  <div className="source-item" key={title}>
                    <div className="source-publisher">{publisher}</div>
                    <a href={href} target="_blank" rel="noreferrer">{title}<ExternalIcon /></a>
                  </div>
                ))}
              </div>

            </Section>

            <Section
              id="conclusion"
              className="conclusion-section"
              title="Prepare the Product, Not Only the Translation Files"
            >
              <p>
                A localization-ready app has clear market decisions, internationalized
                architecture, structured resources, meaningful context, approved
                language guidance, defined test access, accountable ownership, and a
                release plan that includes time for correction and retesting.
              </p>
              <p>
                When these elements are prepared together, localization becomes easier
                to scope, safer to automate, more consistent to review, and more
                reliable to release across languages and future product updates.
              </p>
            </Section>
          </article>
        </div>
      </div>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-head">
            <div>
              <div className="eyebrow">Continue Planning</div>
              <h2 id="related-title">Related App Localization Resources</h2>
            </div>
            <p>
              Continue from preparation into platform implementation, multilingual
              testing, continuous delivery, cost planning, or complete app localization
              support.
            </p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="related-card" href={resource.href} key={resource.title}>
                <div className="eyebrow">{resource.eyebrow}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="related-link">{resource.action} <ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell final-cta-panel">
          <div>
            <div className="eyebrow">Global Mobile Experiences</div>
            <h2 id="final-cta-title">Prepare Your App for a Successful Multilingual Launch</h2>
            <p>
              Share representative resource files, target markets, product context, and
              release goals. Stepes will help identify localization requirements and
              build a practical workflow for translation, engineering, professional
              review, testing, and release-ready delivery.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="button button-primary" href={internalLinks.contact}>Talk to an App Localization Expert <ArrowIcon /></a>
            <a className="button button-secondary" href={internalLinks.quote}>Request a Quote <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
