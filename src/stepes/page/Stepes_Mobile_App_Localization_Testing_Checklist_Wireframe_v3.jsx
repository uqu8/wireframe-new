import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const colors = {
  magenta: "#C11D63",
  magentaDark: "#A81754",
  blush: "#FDF3F7",
  blushStrong: "#FBE8F0",
  navy: "#151A2D",
  ink: "#17182B",
  body: "#4C5068",
  muted: "#70758A",
  line: "#E2E4EB",
  soft: "#F7F7F9",
  white: "#FFFFFF",
};

const Icon = ({ name, size = 20, strokeWidth = 1.8, className = "" }) => {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    down: <path d="m6 9 6 6 6-6"/>,
    check: <path d="m5 12 4 4L19 6"/>,
    print: <><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></>,
    accessibility: <><circle cx="12" cy="4" r="2"/><path d="M5 8h14"/><path d="M12 6v7"/><path d="m8 21 4-8 4 8"/></>,
    bug: <><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7h6"/><rect x="7" y="7" width="10" height="13" rx="5"/><path d="M3 13h4"/><path d="M17 13h4"/><path d="M3 18h4"/><path d="M17 18h4"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    external: <><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></>,
  };
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || paths.arrow}
    </svg>
  );
};

const tocItems = [
  ["what-is-localization-testing", "What Mobile App Localization Testing Covers"],
  ["five-gate-framework", "Five-Gate Mobile Localization Framework"],
  ["how-to-use", "How to Use This Checklist"],
  ["plan-scope", "1. Plan the Test Scope"],
  ["build-readiness", "2. Confirm Build and Resource Readiness"],
  ["pseudolocalization", "3. Use Pseudolocalization Early"],
  ["linguistic-testing", "4. Validate Linguistic Quality"],
  ["visual-testing", "5. Check Layout and Visual Quality"],
  ["locale-testing", "6. Validate Locale Behavior"],
  ["functional-testing", "7. Test Localized User Journeys"],
  ["rtl-testing", "8. Test RTL and Bidirectional Experiences"],
  ["accessibility-testing", "9. Validate Multilingual Accessibility"],
  ["device-matrix", "10. Build the Device and OS Matrix"],
  ["storefront-testing", "11. Validate Storefront Content"],
  ["automation-human", "12. Combine Automation and Human Review"],
  ["defect-reporting", "13. Report Localization Defects"],
  ["regression-testing", "14. Retest and Prevent Regression"],
  ["release-gate", "15. Complete the Release Gate"],
  ["high-risk-apps", "High-Risk and Regulated Apps"],
  ["stepes-support", "Testing With Stepes"],
  ["faq", "Frequently Asked Questions"],
  ["sources", "Sources and References"],
];

const takeaways = [
  "Test translated content inside the app—not only in spreadsheets, string catalogs, or resource files.",
  "Define languages, devices, journeys, responsibilities, and release criteria before testing begins.",
  "Treat language and locale as separate dimensions; accurate translation can still produce incorrect dates, currency, forms, sorting, or fallback behavior.",
  "Use pseudolocalization and automated checks early, then apply qualified human review wherever meaning, context, culture, usability, or risk requires judgment.",
  "Give right-to-left behavior and multilingual accessibility dedicated testing scopes rather than treating them as minor visual checks.",
  "Base release approval on documented evidence and agreed severity thresholds—not on whether every screen was opened once.",
];

const gates = [
  { number: "01", title: "Define", text: "Set scope, ownership, priority journeys, device coverage, and release criteria." },
  { number: "02", title: "Prepare", text: "Confirm the correct build, resources, fonts, accounts, test data, and environments." },
  { number: "03", title: "Validate", text: "Review language, layout, locale behavior, user journeys, RTL, and accessibility." },
  { number: "04", title: "Cover", text: "Apply the device matrix, storefront checks, and repeatable automated coverage." },
  { number: "05", title: "Release", text: "Report defects, retest corrections, complete regression, and approve the release." },
];

const statusRows = [
  ["Pass", "The requirement was tested and met."],
  ["Fail", "A reproducible issue was found."],
  ["Blocked", "Testing could not be completed because a dependency was unavailable."],
  ["Needs Review", "A qualified stakeholder must make or confirm a decision."],
  ["Not Applicable", "The requirement does not apply to the feature, locale, platform, or release."],
];

const roles = [
  ["Product or Release Owner", "Defines critical journeys, acceptance criteria, business priorities, and final release decisions."],
  ["Localization Manager", "Coordinates languages, context, reviewers, assets, schedules, issues, and approvals."],
  ["Native-Language Reviewer", "Evaluates accuracy, fluency, terminology, tone, cultural fit, and contextual meaning."],
  ["Localization Engineer", "Reviews resources, variables, file structures, build integration, fonts, and locale logic."],
  ["Mobile QA Engineer", "Executes functional, device, OS, reproducibility, and regression testing."],
  ["Developer", "Corrects application, resource, layout, logic, accessibility, and integration defects."],
  ["Accessibility Specialist", "Evaluates assistive behavior and applicable technical conformance requirements."],
  ["Regional or Subject-Matter Reviewer", "Reviews market-specific, regulated, legal, medical, financial, or specialist content."],
];

const checklistSections = [
  {
    id: "plan-scope",
    number: "01",
    title: "Plan the Localization Testing Scope",
    owners: "Product owner · Localization manager · QA lead · Release manager",
    intro: "Testing becomes inefficient when teams begin without agreeing on the build, languages, platforms, user journeys, devices, responsibilities, and approval rules.",
    groups: [
      {
        title: "Product and Release Information",
        items: [
          "Record the app name, product version, and build number.",
          "Identify whether the release is a new product, language launch, major update, feature release, hotfix, or routine maintenance release.",
          "Confirm the planned submission and production-release dates.",
          "Identify the platforms in scope: iOS, Android, or both.",
          "Record whether the app is native or built with a shared-code framework such as Flutter, React Native, .NET MAUI, Ionic, or Capacitor.",
          "Confirm whether phones, tablets, foldables, or other device categories are supported.",
          "Identify the test environment: prototype, development build, staging, beta, sandbox, release candidate, or production.",
          "Record any features intentionally disabled or incomplete in the test environment.",
        ],
      },
      {
        title: "Language and Market Scope",
        items: [
          "List every language and regional locale included in the release.",
          "Distinguish language from locale—for example, French for France, Canada, and Belgium.",
          "Identify the source language and default locale.",
          "Record the expected fallback path for unsupported or incomplete regional locales.",
          "Identify right-to-left languages and bidirectional-content requirements.",
          "Confirm whether one translation is shared across markets or adapted separately.",
          "Identify locales requiring legal, regulatory, medical, financial, or subject-matter review.",
          "Confirm whether storefront content, notifications, email, SMS, help content, and embedded webviews are included.",
        ],
      },
      {
        title: "Critical User Journeys",
        items: [
          "First launch and onboarding",
          "Registration, authentication, and account recovery",
          "Permissions, privacy, and consent",
          "Profile and account management",
          "Search and discovery",
          "The app’s primary product function",
          "Checkout, payment, subscription, or in-app purchase",
          "Notifications and transactional communication",
          "Settings and language selection",
          "Help, contact, logout, and account deletion",
        ],
      },
      {
        title: "Release Criteria",
        items: [
          "Define which locales require complete testing and which may use representative coverage.",
          "Identify required devices and operating-system versions.",
          "Establish which severity levels block release.",
          "Define who can approve linguistic, technical, accessibility, and market-specific corrections.",
          "Identify who can accept an unresolved issue and what evidence is required.",
          "Confirm how blocked tests affect release approval.",
          "Record whether final approval is required separately for iOS and Android.",
        ],
      },
    ],
  },
  {
    id: "build-readiness",
    number: "02",
    title: "Confirm the Localized Build Is Ready for Testing",
    owners: "Localization engineer · Developer · QA lead",
    intro: "A tester should not spend hours documenting defects caused by an incomplete build, incorrect resource package, expired account, or unavailable environment.",
    groups: [
      {
        title: "Build Verification",
        items: [
          "Confirm that the build number matches the assigned test cycle.",
          "Install or update the build using the intended distribution method.",
          "Confirm that the app installs, launches, and reaches each required feature.",
          "Verify that test accounts have the correct roles and permissions.",
          "Confirm access to staging services, APIs, content systems, and third-party integrations.",
          "Load representative data for empty, standard, long, unusual, and error states.",
          "Verify that each target language can be selected or activated.",
          "Confirm that language and region settings can be changed without corrupting the test state.",
          "Record known build limitations before testing begins.",
        ],
      },
      {
        title: "Localization Resource Verification",
        items: [
          "Confirm that the intended localized resource files are present.",
          "Verify that no target language was omitted during packaging.",
          "Confirm that resource keys, identifiers, file names, variables, tags, and formatting codes remain intact.",
          "Compare source and target resources for missing entries.",
          "Confirm that plural, gender, select, or grammatical variants are complete where required.",
          "Verify that intentionally nontranslatable content is documented.",
          "Confirm that obsolete translations are not loading from an earlier build.",
          "Verify that server-delivered and locally packaged content use compatible locale identifiers.",
          "Confirm that the tested package is the same package intended for release.",
        ],
      },
      {
        title: "Fonts, Scripts, and Encoding",
        items: [
          "Confirm that selected fonts support every required script and weight.",
          "Look for missing-glyph boxes, substituted characters, clipped diacritics, or separated combining marks.",
          "Validate Arabic joining and script shaping.",
          "Review Indic, Southeast Asian, and other complex scripts for correct rendering.",
          "Check Chinese, Japanese, and Korean line breaking and punctuation.",
          "Validate emoji, symbols, and special characters where they carry product meaning.",
          "Confirm that imported, exported, copied, pasted, downloaded, and shared text preserves encoding.",
        ],
      },
      {
        title: "Dynamic and External Content",
        items: [
          "Identify which strings are delivered by the app and which come from a server.",
          "Verify localized content from content-management and remote-configuration services.",
          "Test user-generated content beside translated interface content.",
          "Review third-party authentication, payment, map, chat, analytics, and support interfaces.",
          "Include push notifications, email, SMS, and other external communications in the localized journey.",
          "Verify embedded webviews, localized links, offline content, and cached translations.",
        ],
      },
    ],
  },
  {
    id: "pseudolocalization",
    number: "03",
    title: "Use Pseudolocalization to Find Problems Earlier",
    owners: "Developer · Localization engineer · QA engineer",
    intro: "Pseudolocalization simulates text expansion, accented characters, and right-to-left direction so teams can expose structural problems before complete translations are available.",
    groups: [
      {
        title: "What Pseudolocalization Can Reveal",
        items: [
          "Hard-coded strings that were never externalized",
          "Fixed-width layouts that fail under text expansion",
          "Truncation, overlap, and missing resources",
          "Unsupported characters, fonts, or encoding",
          "Unsafe string concatenation and variable placement",
          "Components that do not mirror in RTL mode",
          "Images or graphics containing untracked source-language text",
          "Screens that cannot be reached in another locale",
        ],
      },
      {
        title: "Android Pseudolocales",
        items: [
          "Run the expanded-text pseudolocale through priority screens.",
          "Run the simulated RTL pseudolocale through priority user journeys.",
          "Confirm that pseudolocale resources are included only in appropriate development or test builds.",
          "Check that build configuration has not removed the resources needed for testing.",
          "Capture and route structural defects before human translations enter the build.",
        ],
      },
      {
        title: "Apple Localization Testing",
        items: [
          "Configure language- and region-specific test schemes.",
          "Preview important SwiftUI interfaces in representative locales.",
          "Use expanded or bidirectional test configurations where appropriate.",
          "Generate screenshots for review across priority languages.",
          "Include key language and region combinations in repeatable test execution.",
        ],
      },
    ],
    note: "Pseudolocalization can expose technical readiness problems, but it cannot validate translation accuracy, cultural appropriateness, terminology, tone, or natural user experience.",
  },
  {
    id: "linguistic-testing",
    number: "04",
    title: "Validate Linguistic Accuracy and User Understanding",
    owners: "Native-language reviewer · Localization manager · Subject-matter reviewer",
    intro: "A translation can be grammatically correct and still be wrong for the screen, action, user role, or product state. Review language in the complete product context.",
    groups: [
      {
        title: "Accuracy and Completeness",
        items: [
          "Confirm that translated meaning matches the source.",
          "Check that no information is omitted and no unsupported meaning is introduced.",
          "Verify instructions, conditions, limits, warnings, negative statements, numbers, and referenced values.",
          "Look for untranslated content while distinguishing protected terms from missed translations.",
          "Confirm that each translation appears on the correct screen.",
          "Review translation-memory reuse for current contextual suitability.",
        ],
      },
      {
        title: "Grammar, Fluency, and Readability",
        items: [
          "Review grammar, sentence structure, spelling, punctuation, and capitalization.",
          "Confirm that wording sounds natural rather than mechanically translated.",
          "Keep mobile labels concise without making them unclear.",
          "Ensure instructions are easy to follow.",
          "Review tone, formality, politeness, pronouns, and directness for the intended audience.",
        ],
      },
      {
        title: "Terminology and Product Consistency",
        items: [
          "Use approved product names, feature names, and glossary terminology.",
          "Apply the same term to the same action across screens.",
          "Align app terminology with relevant web, documentation, support, and marketing content.",
          "Check navigation labels against screen headings and help content.",
          "Review abbreviations for local understanding.",
          "Identify source-language inconsistencies that caused divergent translations.",
          "Confirm that legacy translations remain appropriate after product changes.",
        ],
      },
      {
        title: "Context and User Intent",
        items: [
          "Confirm that labels describe the actions their controls perform.",
          "Check ambiguous words such as Apply, Order, Record, Home, Close, and Save in their actual context.",
          "Verify that success and error messages describe what happened.",
          "Confirm that recovery guidance tells the user what to do next.",
          "Review content across the complete user journey, including empty states and first-use experiences.",
          "Confirm that translations match the user’s role, status, and permissions.",
        ],
      },
      {
        title: "Variables and Dynamic Language",
        items: [
          "Confirm that variables appear in the correct grammatical position with correct spacing and punctuation.",
          "Test short, long, empty, and unusual values.",
          "Validate singular, plural, zero, fractional, gender, formality, select, and grammatical variants where supported.",
          "Check that number substitutions do not break agreement.",
          "Replace concatenated fragments with complete localizable messages where needed.",
          "Verify user names, product names, dates, values, escaped characters, and line breaks.",
        ],
      },
      {
        title: "High-Risk Language",
        items: [
          "Medical instructions and patient-facing information",
          "Safety messages and warnings",
          "Financial transactions, fees, and disclosures",
          "Privacy, consent, and data-use language",
          "Legal terms and contractual actions",
          "Authentication and security warnings",
          "Regulated product claims",
          "Age-sensitive content and irreversible decisions",
        ],
      },
    ],
  },
  {
    id: "visual-testing",
    number: "05",
    title: "Check Layout, Text Expansion, and Visual Quality",
    owners: "Native-language reviewer · QA engineer · Designer · Developer",
    intro: "Languages differ in word length, sentence structure, line breaking, character density, and writing direction. Visual testing confirms that the interface remains readable, balanced, and usable after translation.",
    groups: [
      {
        title: "Text Fit and Layout",
        items: [
          "No text is truncated, overlapped, or wrapped at inappropriate boundaries.",
          "Buttons and controls adapt without hiding the action or becoming unusable.",
          "Text does not cover icons, badges, counters, or status indicators.",
          "Tabs and navigation titles remain distinguishable.",
          "Dialogs, sheets, popovers, alerts, and validation messages display complete content.",
          "Long lists, settings, empty states, onboarding, loading, success, and error states remain usable.",
        ],
      },
      {
        title: "Typography and Script Rendering",
        items: [
          "The intended font, weight, and line height load correctly.",
          "Baselines, vertical alignment, diacritics, accents, combining marks, and punctuation render correctly.",
          "Bold, italic, and other emphasis remain meaningful.",
          "Links remain recognizable and contrast remains sufficient.",
          "Mixed scripts do not create unexpected changes in size or spacing.",
        ],
      },
      {
        title: "Screens and Display Settings",
        items: [
          "Small, standard, and large phones",
          "Tablets and adaptive layouts",
          "Portrait and landscape orientation",
          "Split-screen and foldable states where supported",
          "Safe areas, notches, cutouts, system bars, and screen density",
          "Larger text, Dynamic Type, Android font scaling, display zoom, bold text, increased contrast, dark mode, and reduced motion",
        ],
      },
      {
        title: "Localized Visual Assets",
        items: [
          "Images containing text are localized or intentionally language-neutral.",
          "Screenshots, charts, legends, maps, captions, tutorials, walkthroughs, and promotional banners match the current UI.",
          "Animation text remains readable for sufficient time.",
          "Icons, symbols, people, places, and examples remain appropriate for the target audience.",
          "Decorative assets do not interfere with text expansion or RTL mirroring.",
        ],
      },
    ],
  },
  {
    id: "locale-testing",
    number: "06",
    title: "Validate Locale-Specific Formats and Behavior",
    owners: "Localization engineer · QA engineer · Regional reviewer",
    intro: "Language determines how the app communicates. Locale also influences dates, times, currencies, numbers, units, names, addresses, sorting, and other regional conventions.",
    groups: [
      {
        title: "Dates, Times, and Calendars",
        items: [
          "Date components, month names, weekday names, and short and long formats are correct.",
          "The app uses the intended 12-hour or 24-hour format and handles AM/PM markers correctly.",
          "Time zones, daylight-saving transitions, and server timestamps are correct.",
          "Relative dates are natural and the first day of the week is appropriate.",
          "Calendar assumptions, date pickers, scheduling controls, and notifications follow the selected locale.",
        ],
      },
      {
        title: "Numbers, Currency, and Percentages",
        items: [
          "Decimal and grouping separators are correct.",
          "Currency symbols or codes, placement, spacing, negative values, and market selection are correct.",
          "Percentages, rounding, compact numbers, price ranges, and discounts are understandable.",
          "Stored values and formatted display values are not confused.",
        ],
      },
      {
        title: "Measurements and Units",
        items: [
          "Distance, weight, volume, height, dimensions, temperature, and file sizes use an intentional convention.",
          "Unit labels agree with values and conversions preserve appropriate precision.",
          "Technical, scientific, or regulated values are not converted without authorization.",
          "Source and converted values are not mixed unintentionally.",
        ],
      },
      {
        title: "Names, Addresses, and Contact Information",
        items: [
          "Forms support expected name order, multiple family names, local titles, and diverse structures.",
          "Address order, regions, postal codes, phone numbers, and country codes support the target market.",
          "Local scripts are accepted and autocomplete places values in the correct fields.",
          "Labels and examples do not force a source-market format.",
        ],
      },
      {
        title: "Sorting, Search, and Data Handling",
        items: [
          "Alphabetical sorting and accented-character handling follow target-language expectations.",
          "Search supports local spelling, scripts, case, width, diacritic, segmentation, and transliteration needs.",
          "Filters, imported data, exported data, copied text, and shared text preserve localized content.",
        ],
      },
      {
        title: "Language and Locale Fallback",
        items: [
          "The app tries the intended regional locale, language fallback, and final default locale in the correct order.",
          "Unsupported locales do not create blank, unstable, or unexplained mixed-language screens.",
          "Server and client fallback rules agree.",
          "Language choices persist after restart and update where intended.",
          "Cached content refreshes when locale changes.",
          "Fallback never silently applies the wrong currency, regulation, or market-specific content.",
        ],
      },
    ],
  },
  {
    id: "functional-testing",
    number: "07",
    title: "Test Localized User Journeys and Product Behavior",
    owners: "QA engineer · Native-language reviewer · Product owner",
    intro: "Functional localization testing evaluates whether language or locale changes interfere with a user’s ability to complete tasks.",
    groups: [
      {
        title: "Language Selection",
        items: [
          "Every supported language appears with an accurate, understandable name.",
          "Regional variants are clearly distinguishable.",
          "Selecting a language activates the correct resources and any required restart behaves intentionally.",
          "The user’s choice persists and system and in-app language behavior remain consistent.",
          "Changing region without changing language produces the expected result.",
          "Unsupported languages fall back intentionally.",
          "Android per-app language settings and any in-app selector stay synchronized where supported.",
        ],
      },
      {
        title: "Navigation and Core Flows",
        items: [
          "Navigation labels open the correct destinations.",
          "Back, close, cancel, and dismiss actions behave correctly.",
          "Onboarding, registration, authentication, recovery, permissions, and consent can be completed.",
          "The app’s primary tasks and settings work.",
          "Logout and account deletion behave as intended.",
          "Localized content never covers or disables required controls.",
          "Changing language does not reset the user unexpectedly.",
        ],
      },
      {
        title: "Input and Validation",
        items: [
          "The appropriate keyboard appears and target-language characters are accepted.",
          "RTL input, local dates, numbers, addresses, and phone formats are supported.",
          "Required-field and validation messages match the actual problem.",
          "Character limits, copy and paste, autofill, password rules, and security guidance remain usable.",
          "Form submission preserves characters and server-side validation returns localized feedback.",
        ],
      },
      {
        title: "Search, Transactions, and Communication",
        items: [
          "Localized queries, suggestions, filters, sorting, and no-results messages work.",
          "Deep links, shared links, help links, and support links open the correct localized destination.",
          "Prices, currency, taxes, fees, trials, renewals, cancellations, checkout, purchases, and subscriptions are accurate.",
          "Confirmation screens, receipts, notifications, email, SMS, consent, errors, refunds, and recovery states are localized consistently.",
        ],
      },
      {
        title: "Connectivity and External Components",
        items: [
          "Offline, slow-network, and network-error states are localized.",
          "Server-delivered strings and embedded web content use the correct locale.",
          "Authentication, payments, maps, sharing, support, chat, and other third-party integrations preserve language context.",
        ],
      },
    ],
  },
  {
    id: "rtl-testing",
    number: "08",
    title: "Test Right-to-Left and Bidirectional Experiences",
    owners: "Native RTL reviewer · Localization engineer · QA engineer · Developer",
    intro: "Right-to-left testing requires more than right-aligning text. It should be a dedicated workstream for languages such as Arabic and Hebrew.",
    groups: [
      {
        title: "Screen Direction and Mirroring",
        items: [
          "Overall flow, navigation placement, back and forward controls, drawers, side panels, tabs, and carousels mirror where appropriate.",
          "Directional progress indicators, icons, gestures, transitions, and custom-positioned components behave correctly.",
          "Universal symbols, logos, media controls, and other non-directional elements remain unchanged where appropriate.",
        ],
      },
      {
        title: "Mixed-Direction Content",
        items: [
          "RTL text remains correct beside English product names, numbers, currency, phone numbers, email addresses, URLs, dates, and times.",
          "Parentheses, punctuation, cursor, selection, highlighting, and user-generated mixed-language content behave correctly.",
          "Truncation does not separate meaningful content or bidirectional control behavior.",
        ],
      },
      {
        title: "Forms, Data, and Visual Components",
        items: [
          "Inputs, placeholders, labels, validation, passwords, numeric fields, search, autocomplete, copy and paste, and keyboards use the intended direction.",
          "Tables, charts, axes, timelines, sliders, ratings, progress bars, calendars, maps, and image-text relationships remain understandable.",
          "Third-party and custom components mirror correctly.",
        ],
      },
      {
        title: "RTL Accessibility",
        items: [
          "Screen-reader reading and focus order match the RTL flow.",
          "Controls are announced in the correct sequence.",
          "Mixed-direction pronunciation remains understandable.",
          "Navigation instructions, keyboard order, switch navigation, and gestures match the actual experience.",
        ],
      },
    ],
  },
  {
    id: "accessibility-testing",
    number: "09",
    title: "Validate Accessibility Across Languages",
    owners: "Accessibility specialist · Developer · Native-language reviewer · QA engineer",
    intro: "Visible interface text may be translated correctly while labels, hints, image descriptions, spoken feedback, captions, or focus behavior remain incomplete or incorrect.",
    groups: [
      {
        title: "Accessibility Content",
        items: [
          "Accessibility labels, hints, values, roles, states, form instructions, and error guidance are localized.",
          "Image descriptions are meaningful and control names match visible labels where appropriate.",
          "Captions and transcripts are complete.",
          "Language changes within mixed-language content are identified where supported.",
          "Hidden accessibility text contains no obsolete source-language content.",
          "Decorative elements are not announced unnecessarily.",
        ],
      },
      {
        title: "VoiceOver",
        items: [
          "Important visible and interactive elements have meaningful labels, descriptions, roles, and states.",
          "Reading order and focus are logical and common tasks can be completed.",
          "Localized pronunciation is understandable.",
          "Temporary messages, errors, dynamic changes, and meaningful image text are communicated.",
          "Localized gestures and instructions match the actual interaction.",
        ],
      },
      {
        title: "TalkBack and Android Accessibility",
        items: [
          "TalkBack describes each required control clearly and every control is reachable.",
          "Focus order follows the intended task and main workflows can be completed.",
          "Alerts, status changes, errors, and custom-component semantics are announced correctly.",
          "Localized descriptions remain concise and touch targets remain usable.",
          "Font scaling does not hide essential functionality.",
          "Automated findings are reviewed in context rather than accepted without verification.",
        ],
      },
      {
        title: "Responsive and Inclusive Presentation",
        items: [
          "Larger text and layout reflow do not hide required actions.",
          "Contrast remains sufficient and meaning is not communicated by color alone.",
          "Reduced motion and dark interface settings are supported where required.",
          "Captions, audio descriptions, voice control, and voice access are tested within the agreed scope.",
        ],
      },
      {
        title: "Apple Accessibility Nutrition Labels",
        items: [
          "Identify the common tasks used for evaluation.",
          "Test each claimed accessibility feature against those tasks.",
          "Test every applicable Apple device category.",
          "Confirm that claims match the current release and re-evaluate after material changes.",
          "Keep localized App Store information aligned with the evaluated experience.",
        ],
      },
    ],
    note: "This checklist supports accessibility evaluation, but completing it does not by itself establish WCAG, legal, platform, or regulatory conformance.",
  },
  {
    id: "device-matrix",
    number: "10",
    title: "Build a Risk-Based Device and Operating-System Matrix",
    owners: "QA lead · Product owner · Localization manager",
    intro: "There is no universal device matrix. Coverage should reflect user analytics, supported configurations, target markets, feature risk, device capabilities, previous defects, and release changes.",
    groups: [
      {
        title: "Device Categories",
        items: [
          "Small, standard, and large phones",
          "Tablets and foldable or adaptive devices where supported",
          "Current flagship and older supported devices",
          "Representative Android manufacturers and screen densities",
          "Hardware and software keyboards for priority scripts",
        ],
      },
      {
        title: "Operating Systems and Configurations",
        items: [
          "Current, previous, and minimum supported OS versions",
          "Recently released OS versions where required",
          "Platform-specific localization and accessibility features",
          "Device-manufacturer variations on Android",
          "Portrait, landscape, split-screen, text scaling, display zoom, light and dark interface, reduced motion, and high contrast",
          "System language matching and differing from the app language",
          "Region differing from the selected language",
        ],
      },
      {
        title: "Real Devices, Simulators, and Emulators",
        items: [
          "Use simulators and emulators for efficient, repeatable layout and configuration coverage.",
          "Use real devices for physical keyboards, manufacturer behavior, notifications, biometrics, cameras, location, performance-sensitive flows, and final release validation.",
          "Choose each environment according to the question being tested.",
        ],
      },
    ],
  },
  {
    id: "storefront-testing",
    number: "11",
    title: "Validate App Store and Google Play Content",
    owners: "Product marketing · Localization manager · Regional reviewer · Release manager",
    intro: "The localized experience begins before installation. Product-page content should accurately represent the current build and use the same terminology users encounter inside the app.",
    groups: [
      {
        title: "Product-Page Content",
        items: [
          "App name, subtitle or short description, full description, keywords, and promotional text",
          "Screenshots, preview videos, feature graphics, and release notes",
          "Support, marketing, privacy-policy, and market-specific landing-page links",
        ],
      },
      {
        title: "Commercial and Compliance Content",
        items: [
          "In-app purchase and subscription names and descriptions",
          "Trial, renewal, cancellation, pricing, privacy, permission-purpose, legal, accessibility, age, and market-specific information",
          "Required disclosures and localized compliance content",
        ],
      },
      {
        title: "Store-to-App Consistency",
        items: [
          "Store claims match the functionality available in the release.",
          "Screenshots show the current localized interface.",
          "Feature, subscription, and product terminology matches the app.",
          "Supported languages and localized links are represented accurately.",
          "Release notes and accessibility claims match the evaluated build.",
          "Search-focused language remains natural and makes no unsupported claims.",
        ],
      },
    ],
  },
  {
    id: "automation-human",
    number: "12",
    title: "Combine Automated Checks With Human Validation",
    owners: "Localization engineer · QA automation engineer · Localization manager · Native-language reviewer",
    intro: "Automation increases repeatability and coverage. Human reviewers interpret meaning, context, culture, usability, and risk. A mature program uses each for the work it performs well.",
    groups: [
      {
        title: "Automated Checks",
        items: [
          "Missing translations and untranslated source strings",
          "Placeholder, tag, number, and resource-syntax mismatches",
          "Duplicate or inconsistent translations and character-limit warnings",
          "Unsupported locale identifiers and missing default resources",
          "Locale-aware UI tests, broken links, screenshot differences, and accessibility scanner findings",
          "Regression execution and build-resource validation",
        ],
      },
      {
        title: "AI-Assisted Review",
        items: [
          "Potential omission and terminology inconsistency detection",
          "Outlier identification and similar-defect clustering",
          "Change summaries between releases",
          "Draft defect categorization and high-risk screen prioritization",
          "Comparison of repeated content and preliminary screenshot triage",
        ],
      },
      {
        title: "Human Expertise",
        items: [
          "Accuracy, meaning, fluency, tone, brand voice, and cultural appropriateness",
          "Ambiguous source strings, contextual button intent, and complex grammar",
          "Spoken pronunciation, RTL usability, and emotional or persuasive language",
          "Legal, medical, financial, safety, and regulated content",
          "Whether the complete user journey feels clear and trustworthy",
        ],
      },
    ],
    note: "Current Xcode and Android Studio agent workflows can assist with language addition, String Catalog updates, deployment, interaction, and screenshot capture. Treat their output as acceleration—not approval. Automation should focus specialist attention, while qualified verification remains essential.",
  },
  {
    id: "defect-reporting",
    number: "13",
    title: "Report Localization Issues So Teams Can Act on Them",
    owners: "All testers · Localization manager · QA lead",
    intro: "A useful defect report allows another person to reproduce the issue, understand its impact, identify the responsible team, and confirm the correction.",
    groups: [
      {
        title: "Required Defect Information",
        items: [
          "Issue ID, build number, platform, device, and operating-system version",
          "Language and locale, screen or feature, test account, role, and relevant state",
          "Preconditions, reproduction steps, actual result, and expected result",
          "Screenshot or recording, source and translated string, and suggested correction where appropriate",
          "Severity, business priority, assigned owner, current status, retest result, and evidence",
        ],
      },
    ],
  },
  {
    id: "regression-testing",
    number: "14",
    title: "Retest Corrections and Protect Future Releases",
    owners: "Original tester · QA engineer · Localization manager",
    intro: "Closing a ticket does not prove that the user experience is corrected. The change must be included in the intended build, retested under the relevant conditions, and checked for side effects.",
    groups: [
      {
        title: "Correction Retesting",
        items: [
          "Confirm that the assigned build contains the correction.",
          "Reproduce the original steps and verify that the issue no longer occurs.",
          "Confirm that the approved translation was implemented accurately.",
          "Test the affected locale, device, OS, screen, component, and all relevant states.",
          "Attach evidence, update the final result, and reopen incomplete or regressive fixes.",
        ],
      },
      {
        title: "Localization Regression",
        items: [
          "Previously approved translations remain intact and existing features still work.",
          "New and modified strings are translated and removed strings no longer appear.",
          "Translation-memory reuse remains contextually correct.",
          "Locale formatting, language selection, fallback, RTL, accessibility labels, and storefront content remain correct.",
          "No new mixed-language states appear and shared components are checked across affected screens.",
          "Server and app resources remain aligned and resolved high-severity defects stay in regression coverage.",
        ],
      },
      {
        title: "Continuous Localization Integration",
        items: [
          "Connect repository changes with new and modified string detection.",
          "Reuse translation memory, terminology, prior decisions, and issue history.",
          "Automate resource checks, screenshot generation, localized builds, and stable regression suites.",
          "Route targeted linguistic validation and release approvals through the delivery workflow.",
        ],
      },
    ],
  },
  {
    id: "release-gate",
    number: "15",
    title: "Complete the Multilingual Release Gate",
    owners: "Product owner · QA lead · Localization manager · Release manager",
    intro: "Use this final gate after testing, correction, and retesting are complete. A release decision should be explicit and supported by evidence.",
    groups: [
      {
        title: "Build and Scope",
        items: [
          "The tested build is the intended release candidate.",
          "All required platforms, languages, locales, resources, critical journeys, devices, and OS versions are included.",
          "Blocked tests have been resolved or formally assessed.",
        ],
      },
      {
        title: "Language and Experience",
        items: [
          "Linguistic approval is complete and terminology is consistent.",
          "No unintended source-language content remains.",
          "Critical UI, text-expansion, locale, language-selection, fallback, RTL, accessibility, and storefront checks are complete.",
        ],
      },
      {
        title: "Defects and Risk",
        items: [
          "Blocker and critical defects are closed.",
          "Major open issues have documented acceptance, ownership, and correction plans.",
          "Corrections and required regression checks passed.",
          "Known limitations are documented and responsible owners have approved release.",
        ],
      },
    ],
  },
];

const severityRows = [
  ["Blocker", "Prevents installation, testing, release, or completion of a critical localized workflow."],
  ["Critical", "Creates serious safety, legal, financial, privacy, security, regulatory, or user-impact risk."],
  ["Major", "Significantly damages comprehension, usability, trust, or a core workflow."],
  ["Minor", "Creates a noticeable issue with limited effect on task completion."],
  ["Cosmetic", "A visual or stylistic issue that does not materially affect comprehension or functionality."],
];

const deviceMatrix = [
  ["Critical", "iOS", "Standard phone", "Current", "German — Germany", "Large Text", "Full critical journeys"],
  ["Critical", "Android", "Standard phone", "Current", "Arabic — Saudi Arabia", "RTL, TalkBack", "Full critical journeys"],
  ["Core", "iOS", "Tablet", "Previous supported", "French — Canada", "Landscape", "Core journeys and UI"],
  ["Core", "Android", "Small phone", "Minimum supported", "Spanish — Mexico", "Standard", "Core journeys and UI"],
  ["Extended", "Android", "Large phone", "Current", "Japanese — Japan", "Dark interface", "Smoke and high-risk screens"],
];

const releaseDecisions = [
  ["Ready for Release", "All required testing is complete, release-blocking issues are closed, and documented residual risk is acceptable."],
  ["Ready With Accepted Limitations", "Authorized owners have accepted specific unresolved issues below the release threshold, with impact, mitigation, ownership, and correction plans documented."],
  ["Not Ready for Release", "A release criterion remains unmet, a required test is incomplete, or an unresolved defect exceeds the accepted risk threshold."],
];

const faqItems = [
  ["What is mobile app localization testing?", "Mobile app localization testing evaluates whether translated content, interface behavior, locale-dependent functionality, accessibility content, and localized user journeys work correctly in the intended languages and markets. A complete scope may include linguistic, visual, functional, locale, RTL, accessibility, device, storefront, and regression testing."],
  ["What is the difference between linguistic review and localization testing?", "Linguistic review evaluates accuracy, fluency, grammar, terminology, tone, and completeness. Localization testing evaluates the translated content inside the product and checks layout, user journeys, variables, locale formats, writing direction, accessibility, device behavior, and runtime conditions. A robust program commonly uses both."],
  ["When should localization testing begin?", "Testing should begin before translation is complete through internationalization review, resource validation, and pseudolocalization. Linguistic and in-context testing can begin when representative translations enter a stable build. Release-candidate testing, correction retesting, and targeted regression should occur before launch."],
  ["What is pseudolocalization?", "Pseudolocalization transforms source text into simulated localized content. It may expand text, introduce accented characters, or apply right-to-left direction. This helps identify hard-coded strings, limited interface space, encoding problems, missing resources, concatenation, and directionality issues before complete translations are available."],
  ["How many languages need to be fully tested?", "Coverage depends on product risk, market importance, user volume, regulatory requirements, writing system, release changes, and available evidence. Priority or high-risk locales may require complete coverage, while established lower-risk locales may use targeted journeys and representative devices. Document the model before testing begins."],
  ["Do localization testers need to be native speakers?", "Native or near-native professional reviewers are generally needed to evaluate accuracy, fluency, tone, terminology, cultural fit, and natural user experience. Technical QA engineers can test build behavior and reproducibility, but they should not approve language they are not qualified to evaluate."],
  ["Can app localization testing be automated?", "Many structural and repeatable checks can be automated, including missing translations, placeholder validation, resource comparison, locale-aware UI tests, screenshot capture, accessibility checks, and regression execution. Human validation remains necessary for meaning, context, usability, culture, pronunciation, RTL experience, and high-risk content."],
  ["How should teams choose devices and operating systems?", "Use product analytics, supported configurations, priority markets, release changes, previous defects, device capabilities, and business risk. Include representative screen sizes, current and older supported OS versions, priority Android manufacturers, accessibility settings, and device-specific features used by critical journeys."],
  ["How do you test an app for RTL languages?", "Test screen mirroring, navigation, directional icons, gestures, mixed-direction text, numbers, currency, URLs, email, inputs, charts, custom components, third-party interfaces, reading order, and accessibility focus. Review the experience with a qualified RTL-language tester rather than relying only on simulated direction."],
  ["Does localization testing replace functional software QA?", "No. Localization testing focuses on problems caused or exposed by language, locale, writing direction, localized resources, and translated content. Broader functional, security, performance, privacy, compatibility, and regulatory testing remains necessary."],
  ["Should App Store and Google Play content be included?", "Yes, when storefront localization is part of the release. Product-page text, screenshots, previews, subscriptions, in-app products, release notes, links, privacy information, and accessibility claims should match the localized build and use consistent product terminology."],
  ["What access does a localization testing team need?", "The team may need localized builds, test accounts, devices or emulators, screenshots, source and target resources, product terminology, test data, staging access, critical user journeys, known limitations, release criteria, and an issue-management workflow. The exact access depends on the agreed scope."],
  ["What should a localization defect report include?", "Include the build, platform, device, OS, language and locale, screen, user state, reproduction steps, actual and expected results, visual evidence, severity, priority, suggested correction where appropriate, assigned owner, status, and retest result."],
  ["What is localization regression testing?", "Localization regression testing confirms that previously approved translations and localized functionality still work after product updates or corrections. It checks resolved defects, shared components, language selection, locale formats, RTL behavior, accessibility content, storefront updates, and affected critical journeys."],
  ["How does Stepes scope mobile app localization testing?", "Stepes reviews the app platforms, target locales, resources, product risk, user journeys, available builds, devices, accessibility requirements, release schedule, existing language assets, and customer responsibilities. The resulting scope may range from targeted linguistic review to broader multilingual build validation."],
];

const relatedResources = [
  {
    eyebrow: "PREPARATION GUIDE",
    title: "How to Prepare a Mobile App for Localization",
    text: "Plan internationalization readiness, resource preparation, terminology, context, testing access, and release requirements before translation begins.",
    href: "https://www.stepes.com/resources/localization-guides/how-to-prepare-an-app-for-localization/",
  },
  {
    eyebrow: "PLATFORM GUIDE",
    title: "iOS App Localization Guide",
    text: "Review String Catalogs, plurals, language and region testing, accessibility content, and App Store localization.",
    href: "https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/",
  },
  {
    eyebrow: "PLATFORM GUIDE",
    title: "Android App Localization Guide",
    text: "Understand Android resources, locale directories, Jetpack Compose, per-app languages, pseudolocalization, and Google Play content.",
    href: "https://www.stepes.com/resources/localization-guides/android-app-localization-guide/",
  },
  {
    eyebrow: "WORKFLOW GUIDE",
    title: "Continuous Localization for Mobile Apps",
    text: "Connect translation, review, technical QA, localized build validation, and delivery with agile development and recurring releases.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/",
  },
  {
    eyebrow: "PLANNING GUIDE",
    title: "App Localization Cost Guide",
    text: "Understand how languages, volume, repetition, engineering, review, testing, device coverage, and turnaround affect localization cost.",
    href: "https://www.stepes.com/resources/localization-guides/app-localization-cost-guide/",
  },
];

const sources = [
  ["Apple Developer — Localizing and Varying Text With a String Catalog", "https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog"],
  ["Apple Developer — Testing Localizations When Running Your App", "https://developer.apple.com/documentation/xcode/testing-localizations-when-running-your-app"],
  ["Apple Developer — Accessibility Nutrition Labels", "https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels/"],
  ["Apple Developer — VoiceOver Evaluation Criteria", "https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria/"],
  ["Apple Developer — Localizing Your App Using Agents", "https://developer.apple.com/documentation/xcode/localizing-your-app-using-agents"],
  ["Android Developers — Localize Your App", "https://developer.android.com/guide/topics/resources/localization"],
  ["Android Developers — Test Your App With Pseudolocales", "https://developer.android.com/guide/topics/resources/pseudolocales"],
  ["Android Developers — Per-App Language Preferences", "https://developer.android.com/guide/topics/resources/app-languages"],
  ["Android Developers — Test Your App’s Accessibility", "https://developer.android.com/guide/topics/ui/accessibility/testing"],
  ["Android Developers — Agent Mode", "https://developer.android.com/studio/gemini/agent-mode"],
  ["Unicode Consortium — Common Locale Data Repository", "https://cldr.unicode.org/"],
  ["W3C — Guidance on Applying WCAG 2.2 to Mobile Applications", "https://www.w3.org/TR/wcag2mobile-22/"],
];

function ButtonLink({ href, children, secondary = false, icon = "arrow", onClick, className = "" }) {
  return (
    <a
      className={`button-link ${secondary ? "secondary" : "primary"} ${className}`}
      href={href}
      onClick={onClick}
    >
      <span>{children}</span>
      <Icon name={icon} size={18} />
    </a>
  );
}

function Checklist({ items }) {
  return (
    <ul className="checklist-list">
      {items.map((item) => (
        <li key={item}>
          <span className="check-marker" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ headers, rows, caption, className = "" }) {
  return (
    <div className={`table-scroll ${className}`} role="region" aria-label={caption || "Data table"} tabIndex={0}>
      <table>
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionHeader({ section }) {
  return (
    <header className="chapter-header">
      <div className="chapter-number" aria-hidden="true">{section.number}</div>
      <div>
        <h2 id={section.id}>{section.title}</h2>
        <p className="chapter-intro">{section.intro}</p>
        <p className="owner-line"><strong>Typical owners:</strong> {section.owners}</p>
      </div>
    </header>
  );
}

function GuideSection({ section }) {
  return (
    <section className="guide-chapter" aria-labelledby={section.id}>
      <SectionHeader section={section} />
      <div className="checklist-groups">
        {section.groups.map((group) => (
          <div className="checklist-group" key={group.title}>
            <h3>{group.title}</h3>
            <Checklist items={group.items} />
          </div>
        ))}
      </div>
      {section.note ? (
        <aside className="quality-note">
          <span className="note-label">Quality Note</span>
          <p>{section.note}</p>
        </aside>
      ) : null}
    </section>
  );
}

function AppLocalizationTestingGuideWireframe() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(tocItems[0][0]);
  const [openFaq, setOpenFaq] = useState(0);

  const observedIds = useMemo(() => tocItems.map(([id]) => id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;
    const elements = observedIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.05, 0.2] }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [observedIds]);

  const handlePrint = (event) => {
    event.preventDefault();
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="stepes-guide-wireframe">
      <style>{`
        :root {
          --magenta: ${colors.magenta};
          --magenta-dark: ${colors.magentaDark};
          --blush: ${colors.blush};
          --blush-strong: ${colors.blushStrong};
          --navy: ${colors.navy};
          --ink: ${colors.ink};
          --body: ${colors.body};
          --muted: ${colors.muted};
          --line: ${colors.line};
          --soft: ${colors.soft};
          --white: ${colors.white};
          --shell: 1280px;
          --reading: 748px;
          --toc: 252px;
          --toc-gap: 58px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-guide-wireframe {
          width: 100%;
          max-width: 100%;
          overflow-x: clip;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          font-size: 18px;
          line-height: 1.68;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-guide-wireframe a { color: inherit; }
        .stepes-guide-wireframe :focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.28);
          outline-offset: 3px;
        }
        .shell { width: min(var(--shell), calc(100% - 64px)); margin-inline: auto; }
        .reading-width { width: min(var(--reading), 100%); }
        .eyebrow {
          display: inline-block;
          margin: 0;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .09em;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .breadcrumb-wrap { padding-top: 28px; }
        .breadcrumb { font-size: 14px; color: #74788A; }
        .breadcrumb ol { display: flex; align-items: center; flex-wrap: wrap; gap: 7px; margin: 0; padding: 0; list-style: none; }
        .breadcrumb li { min-width: 0; }
        .breadcrumb a { color: #74788A; text-decoration: none; border-bottom: 1px solid transparent; }
        .breadcrumb a:hover { color: var(--magenta); border-color: currentColor; }
        .breadcrumb [aria-current="page"] { color: #3D4157; font-weight: 500; overflow-wrap: anywhere; }
        .breadcrumb-separator { display: inline-flex; color: #ADB0BC; }

        .hero { padding: 22px 0 86px; overflow: hidden; }
        .hero-grid { display: block; }
        .hero h1 {
          max-width: 860px;
          margin: 14px 0 20px;
          font-size: clamp(42px, 4.4vw, 64px);
          line-height: 1.04;
          letter-spacing: -.035em;
          font-weight: 650;
        }
        .hero-deck { max-width: 860px; margin: 0; color: var(--body); font-size: 20px; line-height: 1.65; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .button-link {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 13px 20px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease, color .2s ease, transform .2s ease;
        }
        .button-link.primary { background: var(--magenta); color: var(--white); }
        .button-link.primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .button-link.secondary { background: var(--white); color: var(--ink); border-color: #CDD0DA; }
        .button-link.secondary:hover { border-color: var(--magenta); color: var(--magenta); }
        .button-link span { min-width: 0; overflow-wrap: anywhere; }
        .button-link svg { flex: 0 0 auto; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 26px; color: var(--muted); font-size: 14px; }
        .hero-meta span { min-width: 0; display: inline-flex; align-items: center; gap: 8px; }
        .hero-meta svg { flex: 0 0 auto; }
        .takeaways { padding: 72px 0; background: var(--blush); border-block: 1px solid #F2DDE6; }
        .takeaway-grid { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 74px; align-items: start; }
        .takeaways h2 { margin: 0 0 14px; font-size: 34px; line-height: 1.16; letter-spacing: -.02em; }
        .takeaways .lead { margin: 0; color: var(--body); font-size: 17px; }
        .takeaway-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid #E6CAD6; }
        .takeaway-item { display: grid; grid-template-columns: 34px 1fr; gap: 13px; padding: 20px 18px 20px 0; border-bottom: 1px solid #E6CAD6; font-size: 16px; line-height: 1.55; }
        .takeaway-item:nth-child(odd) { padding-right: 28px; }
        .takeaway-item:nth-child(even) { padding-left: 28px; border-left: 1px solid #E6CAD6; }
        .takeaway-index { color: var(--magenta); font-weight: 650; }

        .article-region { padding: 96px 0 110px; }
        .article-preface { width: min(1040px, 100%); margin-inline: auto; }
        .preface-reading { width: min(var(--reading), 100%); margin-inline: auto; }
        .article-grid { display: grid; grid-template-columns: var(--toc) minmax(0, var(--reading)); gap: var(--toc-gap); justify-content: center; align-items: start; margin-top: 96px; }
        .toc-desktop { position: sticky; top: 100px; align-self: start; max-height: calc(100vh - 132px); overflow: auto; padding-right: 14px; scrollbar-gutter: stable; }
        .toc-title { margin: 0 0 14px; font-size: 16px; font-weight: 650; color: var(--ink); }
        .toc-list { margin: 0; padding: 0; list-style: none; border-left: 1px solid var(--line); }
        .toc-list a {
          display: block;
          margin-left: -1px;
          padding: 6px 0 6px 16px;
          border-left: 2px solid transparent;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.42;
          text-decoration: none;
        }
        .toc-list a:hover { color: var(--magenta); }
        .toc-list a.active { color: var(--magenta); border-left-color: var(--magenta); font-weight: 600; }
        .toc-mobile { display: none; margin-bottom: 36px; }
        .toc-mobile button {
          width: 100%; min-height: 50px; display: flex; align-items: center; justify-content: space-between;
          padding: 13px 16px; border: 1px solid var(--line); border-radius: 8px; background: var(--white);
          color: var(--ink); font: inherit; font-size: 16px; font-weight: 600; text-align: left;
        }
        .toc-mobile-panel { max-height: min(70vh, 620px); overflow-y: auto; overscroll-behavior: contain; margin-top: 8px; padding: 10px 14px; border: 1px solid var(--line); border-radius: 8px; background: var(--soft); }
        .toc-mobile-panel a { display: block; padding: 10px 4px; color: var(--body); font-size: 16px; line-height: 1.4; text-decoration: none; border-bottom: 1px solid var(--line); }
        .toc-mobile-panel a:last-child { border-bottom: 0; }

        .article-content, .article-preface, .preface-reading, .guide-chapter { min-width: 0; max-width: 100%; }
        .editorial-section { scroll-margin-top: 110px; padding: 0 0 82px; }
        .editorial-section + .editorial-section { padding-top: 4px; }
        .editorial-section h2, .guide-chapter h2 {
          margin: 0 0 18px;
          font-size: clamp(30px, 3vw, 40px);
          line-height: 1.15;
          letter-spacing: -.025em;
          font-weight: 650;
          scroll-margin-top: 110px;
        }
        .editorial-section h3, .checklist-group h3 {
          margin: 34px 0 12px;
          font-size: 23px;
          line-height: 1.28;
          letter-spacing: -.01em;
          font-weight: 650;
        }
        .editorial-section p, .guide-chapter p { margin: 0 0 20px; color: var(--body); }
        .section-lead { font-size: 20px; line-height: 1.65; }
        .definition-list { display: grid; gap: 0; margin: 28px 0; border-top: 1px solid var(--line); }
        .definition-list div { display: grid; grid-template-columns: 175px 1fr; gap: 28px; padding: 20px 0; border-bottom: 1px solid var(--line); }
        .definition-list dt { color: var(--ink); font-size: 16px; font-weight: 650; }
        .definition-list dd { margin: 0; color: var(--body); font-size: 16px; line-height: 1.6; }
        .inline-link { color: var(--magenta) !important; font-weight: 600; text-decoration-thickness: 1px; text-underline-offset: 3px; }
        .inline-link:hover { color: var(--magenta-dark) !important; }

        .framework-band {
          width: 100%;
          margin: 0;
          padding: 56px;
          border-radius: 18px;
          background: var(--navy);
          color: var(--white);
          scroll-margin-top: 110px;
        }
        .framework-band .eyebrow { color: #F2A7C6; }
        .framework-band h2 { margin: 12px 0 16px; color: var(--white); }
        .framework-band > p { max-width: 760px; color: #CACDDA; }
        .gate-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0; margin-top: 36px; border-top: 1px solid #3B4057; border-bottom: 1px solid #3B4057; }
        .gate { padding: 26px 20px; border-right: 1px solid #3B4057; }
        .gate:last-child { border-right: 0; }
        .gate-number { display: block; margin-bottom: 24px; color: #F2A7C6; font-size: 13px; font-weight: 650; letter-spacing: .08em; }
        .gate h3 { margin: 0 0 10px; color: var(--white); font-size: 21px; }
        .gate p { margin: 0; color: #BEC1CF; font-size: 16px; line-height: 1.55; }

        .how-to-use { scroll-margin-top: 110px; }
        .how-to-use h2 { margin-bottom: 16px; }
        .how-to-use > p { font-size: 19px; }
        .wide-module { width: 100%; max-width: 100%; }
        .wide-module table { min-width: 980px; }
        .table-scroll { max-width: 100%; overflow-x: auto; overscroll-behavior-inline: contain; -webkit-overflow-scrolling: touch; margin: 26px 0 38px; border: 1px solid var(--line); border-radius: 10px; background: var(--white); }
        .table-scroll:focus { outline-offset: 3px; }
        table { width: 100%; border-collapse: collapse; font-size: 16px; line-height: 1.55; }
        caption { padding: 16px 18px; text-align: left; color: var(--muted); font-size: 14px; }
        th { padding: 15px 18px; background: var(--soft); color: var(--ink); font-weight: 650; text-align: left; border-bottom: 1px solid var(--line); }
        td { padding: 15px 18px; color: var(--body); vertical-align: top; border-bottom: 1px solid var(--line); }
        tbody tr:last-child td { border-bottom: 0; }
        tbody tr:hover td { background: #FCFAFB; }
        td:first-child { color: var(--ink); font-weight: 600; }

        .risk-levels { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 30px 0 12px; border-block: 1px solid var(--line); }
        .risk-level { padding: 24px 22px; border-right: 1px solid var(--line); }
        .risk-level:last-child { border-right: 0; }
        .risk-level h3 { margin: 0 0 10px; font-size: 20px; }
        .risk-level p { margin: 0; font-size: 16px; line-height: 1.58; }

        .guide-chapter { scroll-margin-top: 110px; padding: 86px 0; border-top: 1px solid var(--line); }
        .chapter-header { display: grid; grid-template-columns: 54px 1fr; gap: 20px; align-items: start; margin-bottom: 42px; }
        .chapter-number { padding-top: 8px; color: var(--magenta); font-size: 14px; font-weight: 650; letter-spacing: .08em; }
        .chapter-header h2 { margin-bottom: 14px; }
        .chapter-intro { max-width: 720px; font-size: 19px; line-height: 1.65; }
        .owner-line { margin-top: 16px !important; color: var(--muted) !important; font-size: 14px; line-height: 1.45; }
        .owner-line strong { color: var(--ink); }
        .checklist-groups { display: grid; gap: 48px; }
        .checklist-group h3 { margin-top: 0; }
        .checklist-list { display: grid; gap: 0; margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
        .checklist-list li { min-width: 0; display: grid; grid-template-columns: 26px minmax(0, 1fr); gap: 12px; padding: 13px 0; border-bottom: 1px solid var(--line); color: var(--body); font-size: 16px; line-height: 1.58; }
        .checklist-list li > span:last-child { min-width: 0; overflow-wrap: anywhere; }
        .check-marker { width: 18px; height: 18px; margin-top: 4px; display: block; border: 1.5px solid #C9A5B5; border-radius: 3px; background: var(--white); }
        .quality-note { margin-top: 34px; padding: 22px 24px; border-left: 3px solid var(--magenta); background: var(--blush); }
        .quality-note .note-label { display: block; margin-bottom: 6px; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .09em; line-height: 1.3; text-transform: uppercase; }
        .quality-note p { margin: 0; color: #5A3B4A; font-size: 16px; }

        .scope-template { margin-top: 40px; padding: 28px; border: 1px solid var(--line); border-radius: 12px; background: var(--soft); }
        .scope-template h3 { margin-top: 0; }
        .template-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 22px; }
        .template-field { min-height: 62px; padding: 12px 0; border-bottom: 1px solid #DADCE4; }
        .template-field span { display: block; color: var(--muted); font-size: 15px; font-weight: 600; overflow-wrap: anywhere; }
        .template-line { height: 22px; border-bottom: 1px dashed #AEB2C0; }

        .comparison-split { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin-top: 34px; background: var(--line); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
        .comparison-panel { padding: 28px; background: var(--white); }
        .comparison-panel h3 { margin-top: 0; }
        .comparison-panel .checklist-list { border-top: 0; }

        .example-panel { margin-top: 36px; padding: 30px; border: 1px solid var(--line); border-radius: 12px; background: #FAFAFB; }
        .example-panel .eyebrow { margin-bottom: 10px; }
        .example-panel h3 { margin-top: 0; }
        .example-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 36px; margin-top: 24px; }
        .example-field { padding-bottom: 12px; border-bottom: 1px solid var(--line); }
        .example-field strong { display: block; margin-bottom: 4px; color: var(--ink); font-size: 14px; }
        .example-field span { color: var(--body); font-size: 16px; overflow-wrap: anywhere; }
        .example-full { grid-column: 1 / -1; }

        .decision-grid { display: grid; gap: 12px; margin-top: 28px; }
        .decision-row { display: grid; grid-template-columns: 220px 1fr; gap: 24px; padding: 22px 0; border-top: 1px solid var(--line); }
        .decision-row:last-child { border-bottom: 1px solid var(--line); }
        .decision-row h3 { margin: 0; font-size: 19px; }
        .decision-row p { margin: 0; font-size: 16px; }

        .mid-cta {
          width: 100%;
          margin: 12px 0 86px;
          padding: 38px 42px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 36px;
          align-items: center;
          border: 1px solid #E9CDD9;
          border-radius: 14px;
          background: var(--blush);
        }
        .mid-cta h2 { margin: 8px 0 10px; font-size: 30px; line-height: 1.2; }
        .mid-cta p { margin: 0; color: var(--body); font-size: 16px; }

        .high-risk { scroll-margin-top: 110px; padding: 86px 0; border-top: 1px solid var(--line); }
        .high-risk h2 { margin: 0 0 18px; font-size: 38px; line-height: 1.15; }
        .high-risk > p { font-size: 19px; }
        .high-risk-types { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 34px; }
        .high-risk-types span { padding: 7px 11px; border: 1px solid #E4CBD6; border-radius: 999px; background: var(--blush); color: #6B4355; font-size: 16px; font-weight: 600; }

        .stepes-support { scroll-margin-top: 110px; width: 100%; padding: 52px; border: 1px solid #E7D5DD; border-radius: 16px; background: var(--blush); color: var(--ink); }
        .stepes-support h2 { margin: 0 0 16px; color: var(--ink); font-size: 38px; }
        .stepes-support > p { max-width: 760px; color: var(--body); }
        .stepes-support .support-links { margin-top: 28px; font-size: 16px; }
        .support-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin: 34px 0; border-top: 1px solid #E4CBD6; }
        .support-item { padding: 22px 24px 22px 0; border-bottom: 1px solid #E4CBD6; }
        .support-item:nth-child(even) { padding-left: 24px; border-left: 1px solid #E4CBD6; }
        .support-item h3 { margin: 0 0 8px; color: var(--ink); font-size: 20px; }
        .support-item p { margin: 0; color: var(--body); font-size: 16px; }
        .stepes-support .button-link.secondary { background: var(--white); color: var(--ink); border-color: #D8BAC7; }
        .stepes-support .button-link.secondary:hover { border-color: var(--magenta); color: var(--magenta); }

        .faq-section { scroll-margin-top: 110px; padding: 96px 0 84px; }
        .faq-section h2 { margin: 0 0 16px; font-size: 40px; }
        .faq-section > p { max-width: 720px; color: var(--body); }
        .faq-list { margin-top: 34px; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question {
          width: 100%; min-height: 66px; display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center;
          padding: 18px 0; border: 0; background: transparent; color: var(--ink); font: inherit; font-size: 17px; font-weight: 650; text-align: left; cursor: pointer;
        }
        .faq-question svg { transition: transform .2s ease; }
        .faq-question[aria-expanded="true"] svg { transform: rotate(180deg); }
        .faq-answer { padding: 0 46px 22px 0; }
        .faq-answer p { margin: 0; color: var(--body); font-size: 16px; line-height: 1.65; }

        .sources-section { scroll-margin-top: 110px; padding: 82px 0; border-top: 1px solid var(--line); }
        .sources-section h2 { margin: 0 0 14px; font-size: 34px; }
        .sources-section > p { color: var(--body); font-size: 16px; }
        .source-list { margin: 28px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
        .source-list li { border-bottom: 1px solid var(--line); }
        .source-list a { min-width: 0; display: flex; justify-content: space-between; gap: 20px; padding: 14px 0; color: var(--ink); font-size: 16px; font-weight: 550; text-decoration: none; }
        .source-list a span { min-width: 0; overflow-wrap: anywhere; }
        .source-list a svg { flex: 0 0 auto; }
        .source-list a:hover { color: var(--magenta); }

        .conclusion { padding: 86px 0; border-top: 1px solid var(--line); }
        .conclusion h2 { margin: 0 0 18px; font-size: 38px; }
        .conclusion p { color: var(--body); }

        .related-section { padding: 84px 0; background: var(--soft); border-block: 1px solid var(--line); }
        .related-heading { max-width: 760px; }
        .related-heading h2 { margin: 10px 0 14px; font-size: 38px; line-height: 1.18; }
        .related-heading p { margin: 0; color: var(--body); }
        .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 38px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .resource-link { min-width: 0; min-height: 226px; display: flex; flex-direction: column; padding: 25px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: var(--white); text-decoration: none; overflow-wrap: anywhere; }
        .resource-link .eyebrow { margin-bottom: 16px; }
        .resource-link h3 { margin: 0 0 10px; font-size: 21px; line-height: 1.28; }
        .resource-link p { margin: 0 0 20px; color: var(--body); font-size: 16px; line-height: 1.55; }
        .resource-link .resource-arrow { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; color: var(--magenta); font-size: 16px; font-weight: 650; }
        .resource-link:hover h3, .resource-link:hover .resource-arrow { color: var(--magenta); }

        .final-cta { padding: 92px 0 104px; background: var(--blush); }
        .final-cta-inner { display: grid; grid-template-columns: minmax(0, 760px) auto; gap: 70px; align-items: center; }
        .final-cta h2 { margin: 0 0 16px; font-size: clamp(36px, 4vw, 48px); line-height: 1.12; letter-spacing: -.025em; }
        .final-cta p { margin: 0; color: var(--body); font-size: 18px; }
        .final-actions { display: flex; flex-direction: column; align-items: stretch; gap: 10px; min-width: 188px; }

        @media (max-width: 1120px) {
          .article-grid { grid-template-columns: 224px minmax(0, 1fr); gap: 42px; }
          .gate-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .gate:nth-child(3) { border-right: 0; }
          .gate:nth-child(n+4) { border-top: 1px solid #3B4057; }
        }

        @media (max-width: 900px) {
          .shell { width: min(var(--shell), calc(100% - 44px)); }
          .hero { padding-bottom: 68px; }
          .hero h1 { font-size: 46px; }
          .takeaway-grid { grid-template-columns: 1fr; gap: 34px; }
          .article-region { padding-top: 70px; }
          .article-grid { display: block; margin-top: 58px; }
          .toc-desktop { display: none; }
          .toc-mobile { display: block; }
          .wide-module, .mid-cta, .stepes-support { width: 100%; }
          .framework-band { width: 100%; padding: 42px 34px; }
          .risk-levels { grid-template-columns: 1fr; }
          .risk-level { border-right: 0; border-bottom: 1px solid var(--line); }
          .risk-level:last-child { border-bottom: 0; }
          .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .final-cta-inner { grid-template-columns: 1fr; gap: 32px; }
          .final-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 768px) {
          .stepes-guide-wireframe { font-size: 17px; line-height: 1.68; }
          .breadcrumb-wrap { padding-top: 20px; }
          .breadcrumb { font-size: 14px; }
          .hero { padding-top: 20px; }
          .hero h1 { font-size: clamp(38px, 10vw, 48px); }
          .hero-deck { font-size: 18px; }
          .takeaways { padding: 58px 0; }
          .takeaway-list { grid-template-columns: 1fr; }
          .takeaway-item, .takeaway-item:nth-child(odd), .takeaway-item:nth-child(even) { padding: 17px 0; border-left: 0; }
          .framework-band { width: 100%; }
          .gate-grid { grid-template-columns: 1fr; }
          .gate, .gate:nth-child(3) { border-right: 0; border-top: 1px solid #3B4057; }
          .gate:first-child { border-top: 0; }
          .definition-list div { grid-template-columns: 1fr; gap: 6px; }
          .chapter-header { grid-template-columns: 1fr; gap: 8px; }
          .chapter-number { padding-top: 0; }
          .chapter-intro { font-size: 18px; }
          .template-grid, .comparison-split, .example-grid, .support-grid { grid-template-columns: 1fr; }
          .comparison-panel { border-bottom: 1px solid var(--line); }
          .comparison-panel:last-child { border-bottom: 0; }
          .example-full { grid-column: auto; }
          .support-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .mid-cta { grid-template-columns: 1fr; padding: 30px; }
          .decision-row { grid-template-columns: 1fr; gap: 8px; }
          .related-grid { grid-template-columns: 1fr; }
          .final-actions { flex-direction: column; }
        }

        @media (max-width: 520px) {
          .shell { width: calc(100% - 32px); }
          .hero { padding-bottom: 54px; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .button-link { width: 100%; }
          .hero-meta { display: grid; gap: 8px; }
          .hero-meta span { align-items: flex-start; }
          .takeaways h2, .related-heading h2, .conclusion h2, .high-risk h2, .stepes-support h2, .faq-section h2 { font-size: 31px; }
          .article-region { padding: 56px 0 86px; }
          .editorial-section { padding-bottom: 66px; }
          .editorial-section h2, .guide-chapter h2 { font-size: 30px; }
          .framework-band { width: 100%; padding: 32px 22px; border-radius: 12px; }
          .guide-chapter { padding: 68px 0; }
          .checklist-list li { grid-template-columns: 24px 1fr; padding: 12px 0; }
          .scope-template, .example-panel { padding: 22px; }
          .stepes-support { padding: 34px 24px; }
          .mid-cta { padding: 26px 22px; }
          .final-cta { padding: 72px 0 82px; }
          .final-cta p { font-size: 17px; }
          .table-scroll { border-radius: 8px; }
          .wide-module table { min-width: 0; }
          caption { display: block; }
          table, thead, tbody, th, td, tr { display: block; }
          thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
          tbody tr { padding: 10px 16px; border-bottom: 1px solid var(--line); }
          tbody tr:last-child { border-bottom: 0; }
          td { display: grid; grid-template-columns: minmax(112px, 38%) 1fr; gap: 14px; padding: 9px 0; border: 0; }
          td::before { content: attr(data-label); color: var(--ink); font-size: 14px; font-weight: 650; }
          td:first-child { font-weight: 500; }
        }

        @media (max-width: 390px) {
          .shell { width: calc(100% - 28px); }
          .breadcrumb ol { align-items: flex-start; gap: 5px 6px; }
          .breadcrumb-current-separator { display: none; }
          .breadcrumb-current { flex-basis: 100%; padding-top: 2px; }
          .hero h1 { font-size: 38px; line-height: 1.08; }
          .framework-band { padding: 28px 18px; }
          .gate { padding: 24px 0; }
          .scope-template, .example-panel, .mid-cta, .stepes-support { padding-left: 18px; padding-right: 18px; }
          .source-list a { gap: 12px; }
          .button-link { padding-left: 16px; padding-right: 16px; }
        }


        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .button-link, .faq-question svg { transition: none; }
        }

        @media print {
          .breadcrumb-wrap, .hero-actions, .toc-desktop, .toc-mobile, .mid-cta, .stepes-support, .related-section, .final-cta { display: none !important; }
          .hero { padding-bottom: 34px; }
          .takeaways { padding: 32px 0; background: #fff; }
          .article-region { padding: 30px 0; }
          .article-grid { display: block; }
          .framework-band { width: 100%; margin: 0; background: #fff; color: #000; border: 1px solid #aaa; }
          .framework-band h2, .gate h3 { color: #000; }
          .framework-band p, .gate p { color: #333; }
          .gate-grid, .gate { border-color: #aaa; }
          .guide-chapter { break-inside: avoid-page; }
          .check-marker { color: #000; border-color: #777; }
          a { text-decoration: none !important; }
        }
      `}</style>

      <div className="breadcrumb-wrap">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="https://www.stepes.com/">Home</a></li>
              <li className="breadcrumb-separator" aria-hidden="true"><Icon name="chevron" size={13} /></li>
              <li><a href="https://www.stepes.com/resources/">Resources</a></li>
              <li className="breadcrumb-separator" aria-hidden="true"><Icon name="chevron" size={13} /></li>
              <li><a href="https://www.stepes.com/resources/localization-guides/">Localization Guides</a></li>
              <li className="breadcrumb-separator breadcrumb-current-separator" aria-hidden="true"><Icon name="chevron" size={13} /></li>
              <li className="breadcrumb-current" aria-current="page">Mobile App Localization Testing Checklist</li>
            </ol>
          </nav>
        </div>
      </div>

      <header className="hero">
        <div className="shell hero-grid">
          <div>
            <div className="eyebrow">App Localization Guide</div>
            <h1>Mobile App Localization Testing Checklist</h1>
            <p className="hero-deck">
              Validate the complete multilingual app experience—from resource integrity and linguistic accuracy to locale behavior, right-to-left layouts, accessibility, device coverage, defect resolution, and final release approval.
            </p>
            <div className="hero-actions">
              <ButtonLink href={sectionUrl("plan-scope")}>Start the Checklist</ButtonLink>
              <ButtonLink href={sectionUrl("plan-scope")} secondary icon="print" onClick={handlePrint}>Print Checklist</ButtonLink>
            </div>
            <div className="hero-meta" aria-label="Guide information">
              <span><Icon name="mobile" size={16} /> iOS, Android, and cross-platform</span>
              <span><Icon name="people" size={16} /> Product, localization, engineering, and QA teams</span>
              <span><Icon name="shield" size={16} /> Reviewed by the Stepes App Localization Team</span>
              <span><Icon name="clock" size={16} /> Published August 2026</span>
            </div>
          </div>
        </div>
      </header>

      <section className="takeaways" aria-labelledby="key-takeaways">
        <div className="shell takeaway-grid">
          <div>
            <h2 id="key-takeaways">Key Takeaways</h2>
            <p className="lead">Use these principles to build a testing program that is practical, evidence-based, and proportionate to product risk.</p>
          </div>
          <div className="takeaway-list">
            {takeaways.map((item, index) => (
              <div className="takeaway-item" key={item}>
                <span className="takeaway-index">0{index + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="article-region">
        <div className="shell">
          <div className="article-preface">
            <div className="toc-mobile">
              <button type="button" aria-expanded={mobileTocOpen} aria-controls="mobile-guide-toc" onClick={() => setMobileTocOpen((open) => !open)}>
                <span>In This Guide</span>
                <Icon name="down" size={18} />
              </button>
              {mobileTocOpen ? (
                <nav id="mobile-guide-toc" className="toc-mobile-panel" aria-label="In this guide">
                  {tocItems.map(([id, label]) => (
                    <a key={id} href={sectionUrl(id)} onClick={() => setMobileTocOpen(false)}>{label}</a>
                  ))}
                </nav>
              ) : null}
            </div>

            <div className="preface-reading">
              <section className="editorial-section" aria-labelledby="what-is-localization-testing">
                <h2 id="what-is-localization-testing">What Is Mobile App Localization Testing?</h2>
                <p className="section-lead">
                  Mobile app localization testing evaluates whether an application works correctly and communicates naturally when used in different languages, locales, writing systems, devices, and operating environments.
                </p>
                <p>
                  It examines more than translated words. A complete scope may evaluate language accuracy, text expansion, interface behavior, dates and currency, local input, language fallback, right-to-left layouts, assistive content, device differences, storefront listings, corrections, and regression.
                </p>
                <dl className="definition-list">
                  <div>
                    <dt>Translation Review</dt>
                    <dd>Evaluates language in a bilingual file, resource package, string catalog, or translation platform before or after integration.</dd>
                  </div>
                  <div>
                    <dt>Localization Testing</dt>
                    <dd>Evaluates translated language, locale behavior, layout, accessibility, and user journeys inside the product experience.</dd>
                  </div>
                  <div>
                    <dt>General Software QA</dt>
                    <dd>Evaluates the broader product, including functional, performance, security, privacy, compatibility, and regulatory requirements.</dd>
                  </div>
                </dl>
                <p>
                  Localization testing complements the product team’s complete QA program. A localization test may confirm that a translated payment flow is understandable and uses the correct currency format, but it does not replace transaction-security or payment-processing validation.
                </p>
                <p>
                  When the underlying application architecture needs additional preparation, review Stepes’ <a className="inline-link" href="https://www.stepes.com/software-internationalization-services/">Software Internationalization Services</a> for resource externalization, locale support, fallback behavior, and RTL readiness.
                </p>
              </section>
            </div>

            <section id="five-gate-framework" className="editorial-section framework-band" aria-labelledby="five-gate-title">
              <div className="eyebrow">Stepes Framework</div>
              <h2 id="five-gate-title">The Five-Gate Mobile Localization Release Framework</h2>
              <p>A practical testing program moves through five connected gates. The sequence is deliberate, but evidence discovered in later stages may require teams to return to an earlier gate.</p>
              <div className="gate-grid">
                {gates.map((gate) => (
                  <div className="gate" key={gate.number}>
                    <span className="gate-number">{gate.number}</span>
                    <h3>{gate.title}</h3>
                    <p>{gate.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="article-grid">
            <aside className="toc-desktop" aria-label="In this guide">
              <p className="toc-title">In This Guide</p>
              <nav>
                <ul className="toc-list">
                  {tocItems.map(([id, label]) => (
                    <li key={id}>
                      <a className={activeSection === id ? "active" : ""} href={sectionUrl(id)} aria-current={activeSection === id ? "location" : undefined}>{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="article-content">
            <section id="how-to-use" className="editorial-section how-to-use" aria-labelledby="how-to-use-title">
              <h2 id="how-to-use-title">How to Use This Checklist</h2>
              <p>Use one status model across languages, platforms, testers, and release cycles. “Not tested” should never be recorded as “Pass.”</p>
              <DataTable headers={["Status", "Meaning"]} rows={statusRows} caption="Recommended localization testing status definitions" />

              <h3>Assign Responsibilities</h3>
              <p>Localization quality is a shared product responsibility. One person may cover several roles on a smaller program, but every responsibility should still be explicit.</p>
              <DataTable headers={["Role", "Primary Responsibilities"]} rows={roles} caption="Typical mobile app localization testing responsibilities" />

              <h3>Prioritize Coverage by Product Risk</h3>
              <div className="risk-levels">
                <div className="risk-level"><h3>Critical</h3><p>Full validation for priority markets, high-risk flows, new RTL launches, regulated content, major redesigns, and features with serious prior defects.</p></div>
                <div className="risk-level"><h3>Core</h3><p>Complete critical-journey testing plus representative feature and device coverage for established markets and standard releases.</p></div>
                <div className="risk-level"><h3>Extended</h3><p>Targeted linguistic review, smoke testing, high-risk screen validation, and representative device coverage for lower-risk locales or limited updates.</p></div>
              </div>
            </section>

            {checklistSections.map((section, index) => (
              <React.Fragment key={section.id}>
                <GuideSection section={section} />

                {section.id === "plan-scope" ? (
                  <section className="scope-template" aria-labelledby="scope-template-title">
                    <div className="eyebrow">Planning Tool</div>
                    <h3 id="scope-template-title">Localization Test Scope Template</h3>
                    <div className="template-grid">
                      {["App and version", "Build number", "Platforms", "Framework", "Source locale", "Target locales", "RTL locales", "Critical journeys", "Required devices", "Required OS versions", "Test environment", "Accessibility scope", "Storefront scope", "Release blockers", "Linguistic approver", "Technical approver", "Final release owner"].map((label) => (
                        <div className="template-field" key={label}><span>{label}</span><div className="template-line" aria-hidden="true" /></div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {section.id === "device-matrix" ? (
                  <DataTable
                    headers={["Priority", "Platform", "Device", "OS", "Language and Locale", "Configuration", "Scope"]}
                    rows={deviceMatrix}
                    caption="Illustrative device and locale test matrix"
                    className="wide-module"
                  />
                ) : null}

                {section.id === "automation-human" ? (
                  <section className="comparison-split" aria-label="Automation and human review comparison">
                    <div className="comparison-panel">
                      <h3>Automation Is Effective For</h3>
                      <Checklist items={["Missing entries and resource comparison", "Placeholder, tag, and syntax validation", "Repeatable UI execution", "Screenshot capture and comparison", "Initial accessibility findings", "Regression execution and defect grouping"]} />
                    </div>
                    <div className="comparison-panel">
                      <h3>Human Review Is Essential For</h3>
                      <Checklist items={["Meaning and contextual accuracy", "Fluency, naturalness, tone, and brand voice", "Cultural and regional appropriateness", "Ambiguity, user intent, and spoken pronunciation", "Complex RTL and assistive usability", "High-risk language and final linguistic approval"]} />
                    </div>
                  </section>
                ) : null}

                {section.id === "defect-reporting" ? (
                  <>
                    <DataTable headers={["Severity", "Definition"]} rows={severityRows} caption="Recommended localization defect severity framework" />
                    <section className="example-panel" aria-labelledby="defect-example-title">
                      <div className="eyebrow">Illustrative Example</div>
                      <h3 id="defect-example-title">A Reproducible Localization Defect</h3>
                      <div className="example-grid">
                        <div className="example-field"><strong>Issue ID</strong><span>L10N-142</span></div>
                        <div className="example-field"><strong>Build</strong><span>6.4.0 (1042)</span></div>
                        <div className="example-field"><strong>Platform</strong><span>iOS</span></div>
                        <div className="example-field"><strong>Locale</strong><span>German — Germany</span></div>
                        <div className="example-field"><strong>Device and OS</strong><span>Standard iPhone, current supported iOS</span></div>
                        <div className="example-field"><strong>Screen</strong><span>Checkout confirmation</span></div>
                        <div className="example-field example-full"><strong>Steps to Reproduce</strong><span>Set the app language to German, add a product to the cart, continue to checkout, choose a saved payment method, and review the confirmation screen.</span></div>
                        <div className="example-field example-full"><strong>Actual Result</strong><span>The purchase button wraps onto three lines. Its loading indicator overlaps the third line when selected.</span></div>
                        <div className="example-field example-full"><strong>Expected Result</strong><span>The primary action remains fully readable and usable in normal, loading, and disabled states.</span></div>
                        <div className="example-field"><strong>Severity</strong><span>Major</span></div>
                        <div className="example-field"><strong>Owner</strong><span>Design and development, with linguistic approval</span></div>
                        <div className="example-field example-full"><strong>Retest Scope</strong><span>German checkout on small and standard iPhone widths; verify normal, loading, and disabled states.</span></div>
                      </div>
                    </section>
                  </>
                ) : null}

                {section.id === "release-gate" ? (
                  <section className="decision-grid" aria-label="Release decision outcomes">
                    {releaseDecisions.map(([title, text]) => (
                      <div className="decision-row" key={title}><h3>{title}</h3><p>{text}</p></div>
                    ))}
                  </section>
                ) : null}

                {section.id === "storefront-testing" ? (
                  <aside className="quality-note">
                    <span className="note-label">Platform Detail</span>
                    <p>For platform-specific resource, testing, and store workflows, continue with the <a className="inline-link" href="https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/">iOS App Localization Guide</a> and <a className="inline-link" href="https://www.stepes.com/resources/localization-guides/android-app-localization-guide/">Android App Localization Guide</a>.</p>
                  </aside>
                ) : null}

              </React.Fragment>
            ))}

            <section id="high-risk-apps" className="high-risk" aria-labelledby="high-risk-title">
              <h2 id="high-risk-title">Testing High-Risk and Regulated Mobile Content</h2>
              <p>Some applications require stronger traceability, specialist expertise, evidence, and release controls.</p>
              <div className="high-risk-types" aria-label="High-risk app categories">
                {[
                  "Healthcare", "Medical Devices", "Banking and Payments", "Identity and Security", "Legal Workflows", "Privacy and Consent", "Safety-Critical Instructions", "Child-Directed Products"
                ].map((item) => <span key={item}>{item}</span>)}
              </div>
              <Checklist items={[
                "Identify content requiring qualified subject-matter review.",
                "Use approved terminology and controlled reference materials.",
                "Verify warnings, contraindications, required disclosures, numerical values, and irreversible actions.",
                "Preserve traceability between source, translation, approval, build, issue, correction, and retest evidence.",
                "Define stricter release-blocking thresholds and retain issue history where required.",
                "Coordinate localization testing with quality, regulatory, legal, security, privacy, accessibility, and product teams.",
                "Review how locale behavior affects calculations, records, dates, units, and transactions.",
              ]} />
              <aside className="quality-note"><span className="note-label">Important Consideration</span><p>Localization testing supports the product-quality process. It does not independently establish regulatory, legal, security, accessibility, or medical compliance.</p></aside>
            </section>

            <section id="stepes-support" className="stepes-support" aria-labelledby="stepes-support-title">
              <h2 id="stepes-support-title">Mobile App Localization Testing With Stepes</h2>
              <p>Every mobile product has a different architecture, audience, market profile, release model, and consequence of error. Stepes configures testing around the app rather than applying one undifferentiated scope to every project.</p>
              <div className="support-grid">
                {[
                  ["Scope Matched to Product Risk", "From focused linguistic validation to broader multilingual UI, locale, functional, RTL, accessibility, device, and regression testing."],
                  ["Professional Native-Language Review", "Language professionals are selected according to locale, subject matter, product context, audience, and quality requirements."],
                  ["Localization Engineering", "Resource analysis, protected technical content, variables, plurals, locale identifiers, build coordination, and technical issue investigation."],
                  ["In-Context Validation", "Review through screenshots, designs, prototypes, test environments, beta builds, or localized applications."],
                  ["Actionable Issue Reporting", "Screenshots, locale, device and OS, reproduction steps, severity, recommendations, ownership, status, and retest evidence."],
                  ["Continuous Release Support", "Reuse approved terminology, translation memory, review decisions, test history, and regression priorities across recurring releases."],
                ].map(([title, text]) => <div className="support-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
              </div>
              <p className="support-links">Explore related capabilities for <a className="inline-link" href="https://www.stepes.com/software-localization-services/">software localization</a>, <a className="inline-link" href="https://www.stepes.com/software-ui-localization-in-context-translation/">in-context UI localization</a>, and <a className="inline-link" href="https://www.stepes.com/developers/software-localization-api/">continuous localization API workflows</a>.</p>
              <div className="hero-actions">
                <ButtonLink href="https://www.stepes.com/contact-us/">Discuss Your App</ButtonLink>
                <ButtonLink href="https://www.stepes.com/app-localization-services/" secondary>Explore App Localization Services</ButtonLink>
              </div>
            </section>

            <section id="faq" className="faq-section" aria-labelledby="faq-title">
              <h2 id="faq-title">Mobile App Localization Testing FAQ</h2>
              <p>Use these answers to clarify scope, responsibilities, coverage, and the role of automation within a multilingual mobile release.</p>
              <div className="faq-list">
                {faqItems.map(([question, answer], index) => {
                  const isOpen = openFaq === index;
                  const panelId = `faq-answer-${index}`;
                  return (
                    <div className="faq-item" key={question}>
                      <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                        <span>{question}</span><Icon name="down" size={19} />
                      </button>
                      <div id={panelId} className="faq-answer" hidden={!isOpen}><p>{answer}</p></div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="sources" className="sources-section" aria-labelledby="sources-title">
              <h2 id="sources-title">Sources and References</h2>
              <p>This guide draws on official platform, accessibility, and internationalization guidance. Platform features and requirements should be reviewed again before implementation because mobile ecosystems continue to evolve.</p>
              <ul className="source-list">
                {sources.map(([label, href]) => (
                  <li key={href}><a href={href} target="_blank" rel="noreferrer"><span>{label}</span><Icon name="external" size={17} /></a></li>
                ))}
              </ul>
            </section>

            <section className="conclusion" aria-labelledby="conclusion-title">
              <h2 id="conclusion-title">Make the Release Decision From Evidence</h2>
              <p>A release-ready multilingual app is not simply one in which translations are present. The build must communicate clearly, behave correctly for the selected locale, support the agreed user journeys and devices, and close or formally accept material defects.</p>
              <p>Start with a defined scope, test the complete experience, document findings in a form teams can act on, and preserve the evidence needed to protect the next release.</p>
            </section>
            </article>
          </div>
        </div>
      </main>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-heading">
            <div className="eyebrow">Related App Localization Resources</div>
            <h2 id="related-title">Continue Planning Your Global App Release</h2>
            <p>Move from readiness and platform architecture to testing, continuous delivery, and cost planning.</p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="resource-link" href={resource.href} key={resource.title}>
                <span className="eyebrow">{resource.eyebrow}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <span className="resource-arrow">View the Guide <Icon name="arrow" size={17} /></span>
              </a>
            ))}
            <a className="resource-link" href="https://www.stepes.com/app-localization-services/">
              <span className="eyebrow">SERVICE OVERVIEW</span>
              <h3>App Localization Services</h3>
              <p>Explore Stepes’ end-to-end app translation, internationalization, engineering, testing, and continuous localization support.</p>
              <span className="resource-arrow">Explore App Localization <Icon name="arrow" size={17} /></span>
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell final-cta-inner">
          <div>
            <h2 id="final-cta-title">Prepare Your App for a Confident Global Release</h2>
            <p>Share your platforms, target languages, localized resources, build access, device requirements, testing priorities, and release timeline. Stepes will help define a practical workflow aligned with your product, markets, and quality requirements.</p>
          </div>
          <div className="final-actions">
            <ButtonLink href="https://www.stepes.com/contact-us/">Talk to an Expert</ButtonLink>
            <ButtonLink href="https://app.stepes.com/quote/" secondary>Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AppLocalizationTestingGuideWireframe;
