import React, { useEffect, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const links = {
  localizationGuides: "https://www.stepes.com/resources/localization-guides/",
  softwareGuide:
    "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/",
  continuousLocalization:
    "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  internationalization:
    "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/",
  softwareLocalization: "https://www.stepes.com/software-localization-services/",
  softwareTranslation: "https://www.stepes.com/software-translation-services/",
  translationQa: "https://www.stepes.com/translation-quality-assurance/",
  softwareApi: "https://www.stepes.com/developers/software-localization-api/",
  contact: "https://www.stepes.com/contact-us/",
  pdfDownload:
    "https://www.stepes.com/resources/downloads/software-localization-testing-checklist.pdf",
  worksheetDownload:
    "https://www.stepes.com/resources/downloads/software-localization-testing-worksheet.xlsx",
  cldr: "https://cldr.unicode.org/",
  unicodeBidi: "https://unicode.org/reports/tr9/",
  wcag: "https://www.w3.org/TR/WCAG22/",
};

const tocItems = [
  { id: "what-is-software-localization-testing", label: "What Software Localization Testing Covers" },
  { id: "define-the-localized-release-scope", label: "Define the Localized Release Scope" },
  { id: "build-the-localization-testing-team", label: "Build the Localization Testing Team" },
  { id: "follow-the-localization-testing-lifecycle", label: "Follow the Testing Lifecycle" },
  { id: "software-localization-testing-checklist", label: "Software Localization Testing Checklist" },
  { id: "prioritize-localization-defects", label: "Prioritize and Document Defects" },
  { id: "complete-regression-testing", label: "Complete Regression Testing" },
  { id: "approve-the-localized-release", label: "Approve the Localized Release" },
  { id: "run-a-post-release-smoke-test", label: "Run a Post-Release Smoke Test" },
  { id: "avoid-common-localization-testing-failures", label: "Avoid Common Testing Failures" },
  { id: "download-the-testing-toolkit", label: "Download the Testing Toolkit" },
  { id: "how-stepes-supports-software-localization-testing", label: "How Stepes Supports Testing" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
];

const takeaways = [
  {
    title: "Test the integrated product, not only the translation files.",
    text: "Resource-file QA cannot reveal every contextual, visual, functional, or locale-specific issue in the finished software experience.",
  },
  {
    title: "Define the test matrix before testing begins.",
    text: "Record the locales, builds, platforms, devices, user roles, features, and workflows that must be covered.",
  },
  {
    title: "Combine automated checks with human evaluation.",
    text: "Automation catches predictable file defects, while people assess meaning, context, readability, and real-world usability.",
  },
  {
    title: "Test complete user journeys.",
    text: "Individual screens may appear correct while authentication, forms, transactions, reports, or error recovery still fail.",
  },
  {
    title: "Prioritize defects according to user and business risk.",
    text: "Severity should reflect meaning, usability, safety, compliance, data integrity, recoverability, and workflow importance.",
  },
  {
    title: "Retest corrections in the intended build.",
    text: "Verify the fix in context and check reused strings, shared components, affected workflows, and related locales.",
  },
  {
    title: "Verify the production deployment.",
    text: "Complete a focused smoke test after release to confirm the approved assets, settings, integrations, and critical journeys reached production.",
  },
];

const definitionAreas = [
  "Linguistic accuracy and terminology",
  "String and build completeness",
  "Interface layout and visual presentation",
  "Functional user journeys",
  "Locale-sensitive formatting",
  "Input, search, sorting, and data handling",
  "Unicode, fonts, encoding, and script rendering",
  "Right-to-left and bidirectional behavior",
  "Localized accessibility",
  "Platform compatibility, regression, and release approval",
];

const scopeGroups = [
  {
    title: "Product Scope",
    items: [
      "Product name, version, build number, and release branch",
      "Modules, features, integrations, and feature flags included",
      "New or substantially modified functionality",
      "Installation or deployment method",
      "Supported user roles and market-specific features",
      "Content or functionality excluded from the release",
    ],
  },
  {
    title: "Language and Locale Scope",
    items: [
      "Language, country or market, locale code, and regional variant",
      "Writing direction and required scripts",
      "Date, time, number, currency, and measurement conventions",
      "Market-specific legal, transactional, or consent requirements",
      "Expected fallback behavior and locale-switching rules",
    ],
  },
  {
    title: "Platform and Environment Scope",
    items: [
      "Web, desktop, mobile, embedded, or connected interfaces",
      "Supported operating systems and browsers",
      "Devices, display sizes, resolutions, and orientations",
      "Keyboard, mouse, touch, stylus, and local input methods",
      "Online, offline, and low-bandwidth behavior where relevant",
    ],
  },
  {
    title: "Content Scope",
    items: [
      "Navigation, menus, buttons, forms, dialogs, and errors",
      "Onboarding, account settings, help, and support content",
      "Dashboards, reports, exports, notifications, and emails",
      "Installation screens, app-store content, and release notes",
      "User-generated content and content returned by connected systems",
    ],
  },
];

const coverageRows = [
  ["fr-FR", "5.2.1 RC3", "Web", "Chrome / Windows", "Administrator", "Login, reporting, export", "In Progress"],
  ["ja-JP", "5.2.1 RC3", "iOS", "Supported iPhone models", "End User", "Onboarding, search, purchase", "Not Started"],
  ["ar-SA", "5.2.1 RC3", "Android", "Supported Android devices", "End User", "Registration, profile, payment", "Not Started"],
];

const riskCoverageItems = [
  "Full testing for major releases, redesigned interfaces, new platforms, or new markets",
  "Expanded testing for right-to-left languages and newly supported scripts",
  "Complete validation of high-risk, regulated, or irreversible workflows",
  "Targeted regression for smaller updates",
  "Representative sampling for repeated, low-risk components",
  "Automated checks for predictable file and formatting defects",
  "Broader testing whenever locale-sensitive code changes",
];

const roles = [
  ["Localization Program Owner", "Defines language scope, coordinates reviewers, manages schedules, consolidates findings, and tracks locale approval."],
  ["Linguist or In-Market Reviewer", "Reviews meaning, terminology, fluency, tone, cultural appropriateness, and interface conventions."],
  ["Software QA", "Develops test cases, validates workflows, reproduces defects, documents evidence, and confirms corrections."],
  ["Engineering", "Resolves resource, encoding, implementation, layout, input, locale, and platform problems."],
  ["Product Management", "Confirms intended behavior, defines critical journeys, prioritizes impact, and approves scope decisions."],
  ["UX or Design", "Reviews layout, visual hierarchy, responsive behavior, readability, and interface consistency."],
  ["Accessibility Reviewer", "Evaluates localized labels, reading order, keyboard use, assistive technologies, text resizing, and alternatives."],
  ["Subject-Matter Reviewer", "Confirms specialized terminology, regulated language, market requirements, and domain accuracy."],
  ["Release Owner", "Reviews open defects, accepts documented risks, and authorizes release."],
];

const ownershipQuestions = [
  "Who may edit or approve translations?",
  "Who decides whether an issue is linguistic, functional, source-related, or expected behavior?",
  "Who assigns severity and accepts unresolved risk?",
  "Who confirms the release-candidate build and approves each locale?",
  "Who performs production verification?",
];

const lifecycleStages = [
  {
    title: "Resource-File QA",
    text: "Check missing translations, tags, placeholders, terminology, characters, and file structure before integration.",
  },
  {
    title: "Localized Build",
    text: "Confirm the intended resources, branch, build, locale configuration, accounts, roles, data, and feature flags.",
  },
  {
    title: "In-Context Review",
    text: "Review language inside the product with full screen, workflow, variable, role, and interaction context.",
  },
  {
    title: "Visual and Functional Testing",
    text: "Validate presentation, input, locale behavior, workflows, accessibility, scripts, and platforms.",
  },
  {
    title: "Defect Resolution",
    text: "Route complete, reproducible issues to the correct linguistic, product, design, engineering, or QA owner.",
  },
  {
    title: "Regression Testing",
    text: "Retest the issue, reused components, affected workflows, and relevant locales or platforms.",
  },
  {
    title: "Release Approval",
    text: "Review coverage, open defects, accepted risks, locale approvals, and the final release candidate.",
  },
  {
    title: "Production Smoke Test",
    text: "Verify language assets, locale settings, critical journeys, and integrations after deployment.",
  },
];

const workstreams = [
  {
    number: "01",
    title: "Build and String Completeness",
    validates: "The intended localized resources are present in the correct build and appear wherever users expect them.",
    why: "A translation can be accurate but unavailable because the wrong resource file, language package, build, feature flag, or fallback rule is being used.",
    items: [
      "Confirm the product version, build number, and release branch.",
      "Verify that every required locale is available and loads correctly.",
      "Check that all required resource files and language bundles are present.",
      "Search for untranslated source-language strings.",
      "Review newly added and recently modified strings.",
      "Check dynamically loaded and remotely managed content.",
      "Review role-based, permission-based, and feature-flagged screens.",
      "Confirm that deprecated strings do not reappear.",
      "Test fallback-language behavior.",
      "Verify manual language switching where supported.",
      "Confirm language persistence after sign-in, sign-out, restart, or update.",
      "Review localized product names, version labels, copyright, licensing, and attribution text.",
      "Check translated notifications, emails, reports, and exports generated outside the primary interface.",
    ],
    defects: [
      "Source-language strings in a localized build",
      "Incorrect regional language variant",
      "Outdated translation package",
      "Missing language on one platform or for one user role",
      "New feature excluded from localization",
      "Unintended fallback to English",
    ],
    owners: "Localization program owner, engineering, and software QA",
  },
  {
    number: "02",
    title: "Linguistic Quality and Terminology",
    validates: "The localized language communicates the intended meaning accurately and follows approved product terminology, tone, and interface conventions.",
    why: "Software strings are often short, fragmented, reused, or presented without context. A translation that appears correct in isolation may be wrong as a command, status, menu item, or workflow instruction.",
    items: [
      "Confirm accuracy, completeness, grammar, spelling, and punctuation.",
      "Apply approved product terminology consistently.",
      "Confirm feature names, command names, and navigation labels.",
      "Review tone and level of formality.",
      "Check consistency across related screens and workflows.",
      "Review short or ambiguous strings in context.",
      "Check buttons, labels, tabs, menus, and tooltips.",
      "Review onboarding and instructional content.",
      "Check warnings, alerts, confirmations, empty states, and status messages.",
      "Confirm that error messages explain the problem and next action.",
      "Check variables and dynamically inserted values.",
      "Review singular, plural, gender, grammatical agreement, and sentences assembled from multiple strings.",
      "Confirm abbreviations and acronyms.",
      "Review text returned by connected systems.",
      "Compare terminology across the application, help center, documentation, and customer communications.",
    ],
    noteTitle: "Give Reviewers the Context Behind Short Strings",
    noteText: "Words such as “Save,” “Open,” “Close,” “Order,” “Apply,” and “Account” may function as nouns, verbs, statuses, or commands. Provide screenshots, character limits, component names, user roles, variables, reuse locations, and the steps before and after each string.",
    defects: [
      "Correct dictionary meaning but incorrect interface meaning",
      "Different translations for the same feature",
      "Grammar broken by a dynamic value",
      "Inconsistent formality",
      "Ambiguous error message",
      "Translation that describes the wrong action",
    ],
    owners: "Linguist or in-market reviewer, localization owner, and product management",
  },
  {
    number: "03",
    title: "Interface Layout and Visual Presentation",
    validates: "Localized text fits the interface, remains readable, and preserves the intended visual hierarchy across supported screens.",
    why: "Languages expand and contract at different rates. Fonts, line-breaking rules, writing direction, and word length can expose layout problems that do not appear in the source language.",
    items: [
      "Check text expansion, contraction, truncation, clipping, and overlap.",
      "Review line wrapping and manual line breaks.",
      "Check buttons, selectable controls, tabs, menus, navigation, and breadcrumbs.",
      "Review dialogs, pop-ups, tooltips, banners, forms, helper text, and validation messages.",
      "Check tables, dashboards, data grids, charts, legends, axes, and data labels.",
      "Test responsive layouts and resizable windows.",
      "Test the smallest supported mobile screen in portrait and landscape.",
      "Review font selection, fallback, size, weight, and readability.",
      "Check alignment, spacing, visual hierarchy, and icon placement.",
      "Test supported accessibility zoom and text-size settings.",
      "Review images and screenshots containing text.",
      "Check localized emails, reports, PDFs, and printed output.",
      "Confirm translated content does not cover interactive elements.",
      "Review loading states, skeleton screens, temporary messages, long values, and user-generated content.",
    ],
    defects: [
      "Button label cut off",
      "Dialog extending beyond the viewport",
      "Text overlapping an icon or field",
      "Broken table header or chart label",
      "Unreadable font fallback",
      "Important action pushed below the visible area",
    ],
    owners: "UX or design, software QA, and linguist or in-market reviewer",
  },
  {
    number: "04",
    title: "Functional User Journeys",
    validates: "Language, input, locale settings, and localized content do not prevent users from completing important tasks.",
    why: "A screen-by-screen review may miss problems that appear only as the user moves through authentication, forms, transactions, notifications, connected services, and error recovery.",
    journeyLabel: "Prioritize journeys such as:",
    journeyItems: [
      "Account creation and authentication",
      "Multifactor authentication and password recovery",
      "Onboarding, navigation, search, filtering, and sorting",
      "Data entry, form submission, uploads, and downloads",
      "Account, permission, and settings management",
      "Subscription, billing, checkout, and payment",
      "Notifications, reports, imports, and exports",
      "Help, support, error recovery, cancellation, and deletion",
    ],
    items: [
      "Confirm users understand the purpose of every step.",
      "Verify localized controls trigger the expected action.",
      "Check that instructions match the visible interface.",
      "Confirm input accepts required local characters and formats.",
      "Ensure validation messages explain what must be corrected.",
      "Check required fields, confirmations, cancellation, and destructive actions.",
      "Confirm transactional emails and notifications are localized.",
      "Test redirects, return paths, roles, and permissions.",
      "Verify information is preserved when language or locale changes.",
      "Check connected services return understandable messages.",
      "Confirm users can recover from errors.",
      "Check localized links, help destinations, reports, exports, and realistic local data.",
    ],
    defects: [
      "Local address rejected by validation",
      "Translated control suggests the wrong action",
      "Search fails for accented characters",
      "Confirmation contradicts the completed transaction",
      "Export removes non-Latin characters",
      "Language resets during authentication",
    ],
    owners: "Software QA, product management, engineering, and linguistic reviewers",
  },
  {
    number: "05",
    title: "Locale Formats and Market Behavior",
    validates: "The software presents, accepts, stores, and processes locale-sensitive information correctly.",
    why: "A correct display does not prove that user input and underlying business logic are also correct. Date, number, currency, address, tax, and market rules need end-to-end validation.",
    items: [
      "Check date formats, time formats, time zones, and daylight-saving behavior.",
      "Review the first day of the week and calendar conventions.",
      "Check numbers, decimal separators, grouping separators, percentages, and negative values.",
      "Confirm currency codes, symbols, placement, and local pricing.",
      "Review measurement and temperature units.",
      "Test personal names, addresses, postal codes, telephone numbers, and identifiers.",
      "Review plural, gender, and grammatical rules.",
      "Check local holidays where relevant.",
      "Validate market-specific tax, transaction, consent, privacy, or legal behavior.",
      "Confirm how locale settings are selected, changed, and stored.",
    ],
    noteTitle: "Test Three Different Layers",
    noteBlocks: [
      ["Display Formatting", "How dates, numbers, currencies, units, and other information appear to the user."],
      ["Input Handling", "Which local formats users may enter and how the software interprets them."],
      ["Business Logic", "Which currency, tax, billing, shipping, payment, or market rule the application applies."],
    ],
    defects: [
      "Month and day reversed",
      "Decimal value interpreted incorrectly",
      "Incorrect currency applied",
      "Local postal code rejected",
      "Time shown in the wrong zone",
      "Language change unintentionally changes market or currency",
    ],
    owners: "Engineering, software QA, product management, and localization program owner",
  },
  {
    number: "06",
    title: "Input Methods, Search, Sorting, and Data Handling",
    validates: "Users can enter, edit, find, store, transfer, and retrieve multilingual data correctly.",
    why: "An interface may display translated text correctly while failing to support the characters, input behaviors, search expectations, or stored data users need.",
    items: [
      "Test local keyboard layouts and input method editors for Chinese, Japanese, and Korean.",
      "Enter accented characters, non-Latin scripts, and combining characters.",
      "Copy, paste, edit, delete, select, and move the cursor through multilingual content.",
      "Test character limits and length validation for supported scripts.",
      "Check mandatory-field and format validation.",
      "Search with and without diacritics where expected.",
      "Test exact search, partial search, autocomplete, and suggestions.",
      "Test alphabetical sorting and locale-specific collation.",
      "Check uppercase and lowercase transformations.",
      "Test multilingual file names and paths where supported.",
      "Import, export, store, and retrieve multilingual data.",
      "Test data passed between connected systems and across platforms.",
      "Review CSV, spreadsheet, audit-log, and copy-and-paste behavior.",
    ],
    defects: [
      "Search ignores valid local characters",
      "Sorting follows source-language order",
      "Text becomes corrupted after saving",
      "Character limits reject valid input",
      "Export displays replacement symbols",
      "Capitalization damages language-specific characters",
    ],
    owners: "Engineering and software QA",
  },
  {
    number: "07",
    title: "Unicode, Fonts, Encoding, and Script Rendering",
    validates: "Supported writing systems display and move through the product without character loss, corruption, or rendering failure.",
    why: "Multilingual text often passes through interfaces, databases, APIs, reports, emails, exports, and connected systems. Every stage must preserve the intended characters and rendering behavior.",
    items: [
      "Confirm Unicode support across the application.",
      "Check for empty boxes, question marks, or replacement characters.",
      "Test data transfer between the interface, database, APIs, and integrations.",
      "Check font availability, font fallback, and script-specific glyphs.",
      "Review combining marks and diacritics.",
      "Test line-breaking behavior, CJK wrapping, and scripts without spaces between words.",
      "Review mixed-script content.",
      "Check superscripts, subscripts, symbols, and mathematical characters where relevant.",
      "Test localized PDFs, printed output, reports, exports, emails, and generated file names.",
      "Verify imported data retains its original characters.",
      "Review user-facing diagnostics or logs.",
      "Test text through every connected system in a critical workflow.",
    ],
    defects: [
      "Corrupted characters or mojibake",
      "Unsupported glyphs",
      "Incorrect line breaking",
      "Different fonts within one word",
      "Detached combining marks",
      "Text correct in the interface but corrupted in a PDF or API response",
    ],
    owners: "Engineering, software QA, and UX or design",
  },
  {
    number: "08",
    title: "Right-to-Left and Bidirectional Interfaces",
    validates: "Right-to-left experiences display and behave correctly, including content that combines Arabic or Hebrew with Latin characters, numbers, codes, and other left-to-right text.",
    why: "Mirroring alone is not enough. Mixed-direction text, cursor behavior, punctuation, forms, tables, icons, technical identifiers, and dynamic content all require in-context validation.",
    items: [
      "Confirm appropriate interface mirroring, navigation direction, alignment, and reading order.",
      "Review labels, form fields, cursor movement, selection, and editing.",
      "Test mixed right-to-left and left-to-right content.",
      "Check email addresses, URLs, phone numbers, product codes, dates, numbers, and punctuation.",
      "Review tables, data grids, charts, legends, breadcrumbs, and progress indicators.",
      "Confirm directional icon behavior and identify icons that should not be mirrored.",
      "Test carousels, directional controls, menus, and nested navigation.",
      "Review notifications, dialogs, reports, and generated documents.",
      "Test mobile gestures and content entered in one direction but displayed in another.",
      "Review strings constructed from dynamic values.",
    ],
    noteTitle: "Do Not Mirror Every Component Automatically",
    noteText: "Product and company logos, media controls, numerical sequences, technical identifiers, code, email addresses, URLs, fixed-convention charts, and certain universal symbols may need to retain their original orientation.",
    defects: [
      "Back and forward controls reversed incorrectly",
      "Punctuation displayed on the wrong side",
      "Arabic and Latin text reordered",
      "Form labels detached from fields",
      "Cursor behavior prevents editing",
      "Dynamic variables appear in the wrong position",
    ],
    owners: "UX or design, engineering, software QA, and an experienced right-to-left language reviewer",
  },
  {
    number: "09",
    title: "Accessibility and Assistive Technology",
    validates: "The localized product remains usable with supported accessibility features and assistive technologies.",
    why: "Source-language accessibility approval does not automatically apply to every locale. Translation length, labels, reading order, pronunciation, shortcuts, language metadata, and alternative content can change the experience.",
    items: [
      "Review localized accessible names, form labels, instructions, and error descriptions.",
      "Test screen-reader reading order and pronunciation where practical.",
      "Test keyboard navigation, focus order, and visible focus indicators.",
      "Review status, error, and dynamic-content announcements.",
      "Test text resizing and reflow.",
      "Confirm meaning does not depend on color alone.",
      "Review localized alternative text, captions, and transcripts.",
      "Confirm document and interface language attributes.",
      "Check language changes within mixed-language content.",
      "Review shortcut keys for conflicts with localized characters.",
      "Test accessible authentication workflows.",
      "Review generated reports, PDFs, documents, help, and support information.",
      "Confirm translated control names match visible labels.",
    ],
    defects: [
      "Screen reader uses the wrong language",
      "Accessible label does not match the visible control",
      "Focus order becomes confusing in RTL",
      "Enlarged text covers a control",
      "Shortcut conflicts with a local character",
      "Visible error is not announced",
    ],
    owners: "Accessibility reviewer, software QA, UX or design, engineering, and linguistic reviewer",
  },
  {
    number: "10",
    title: "Platform and Environment Compatibility",
    validates: "Localized behavior remains consistent across the platforms, devices, and environments the product officially supports.",
    why: "Locale detection, fonts, native dialogs, permissions, input, notifications, updates, and system settings may behave differently across web, desktop, mobile, and embedded environments.",
    items: [
      "Confirm locale detection from the browser or operating system.",
      "Test manual language selection and first-launch language behavior.",
      "Check installation and update workflows.",
      "Review layout across supported screens, orientations, and display densities.",
      "Test platform-specific fonts, native dialogs, notifications, and permissions.",
      "Test sharing, exporting, and file-system interactions.",
      "Test low-bandwidth and offline behavior where relevant.",
      "Check locale persistence after an update.",
      "Review deep links and external links.",
      "Confirm consistency across web, desktop, mobile, and embedded products.",
      "Check local keyboard and input behavior on each supported platform.",
      "Review system date, number, language, and market settings.",
      "Test when device language and market settings differ.",
      "Confirm platform-specific store or installation content is localized.",
    ],
    noteTitle: "Keep the Scope Localization-Specific",
    noteText: "Localization compatibility testing does not replace the complete cross-platform QA program. It focuses on defects related to language, script, locale, translated content, input, and market-specific behavior.",
    defects: [
      "Locale detected differently across platforms",
      "Platform-specific font lacks required glyphs",
      "Language resets after an update",
      "Localized notification omitted on one operating system",
      "Layout fails at a supported screen size",
      "Device language and market settings trigger the wrong behavior",
    ],
    owners: "Software QA and engineering",
  },
  {
    number: "11",
    title: "Regression and Final Release Validation",
    validates: "Reported defects have been corrected in the intended build, and the release candidate preserves the approved localized experience.",
    why: "A translation may be fixed in a file but fail to load. A layout correction may solve one screen and break another. Shared code changes may affect several locales or platforms.",
    items: [
      "Retest every resolved defect in the intended build.",
      "Confirm the approved translation was implemented.",
      "Review every screen that reuses the corrected string.",
      "Check shared interface components.",
      "Retest the affected user journey.",
      "Check other languages when code changes are shared.",
      "Confirm source-language text has not returned.",
      "Recheck critical locale formats and high-risk platforms.",
      "Update Translation Memory and approved terminology where appropriate.",
      "Confirm obsolete translations are removed.",
      "Verify no critical defects remain open.",
      "Document accepted major defects and owners.",
      "Confirm approval for every required locale.",
      "Archive final test reports and supporting evidence.",
      "Record the exact approved release-candidate build and production verification owner.",
    ],
    defects: [
      "Correction does not appear in the release candidate",
      "Reused string remains wrong elsewhere",
      "Shared component breaks another locale",
      "Source language returns after reintegration",
      "Closed defect cannot be reproduced in the tested build",
      "Release proceeds without locale-level approval",
    ],
    owners: "Software QA, localization program owner, product owner, and release owner",
  },
];

const severityRows = [
  ["Critical", "Prevents product use or creates severe misunderstanding, safety, compliance, security, or data-integrity risk.", "Core journey cannot be completed; dangerous mistranslation; irreversible data loss; incorrect legal consent.", "Release blocked"],
  ["Major", "Materially affects meaning, usability, functionality, or customer trust.", "Incorrect action label; broken locale input; severe truncation; incorrect currency behavior.", "Fix before release unless formally accepted"],
  ["Minor", "Creates a limited language, layout, or consistency issue with low user impact.", "Awkward wording; minor alignment issue; inconsistent capitalization.", "Fix when practical or enter a controlled backlog"],
  ["Suggestion", "Represents an improvement or preference without a clear defect.", "Alternative stylistic wording or optional terminology preference.", "Does not block release"],
];

const severityFactors = [
  "Number of affected users and frequency of occurrence",
  "Importance of the workflow and ability to recover",
  "Availability of a workaround",
  "Effect on meaning, data integrity, safety, or compliance",
  "Financial, brand, and customer-trust impact",
  "Likelihood that the issue affects other screens, locales, or platforms",
];

const defectFields = [
  "Defect ID and date reported",
  "Locale and language",
  "Build number and release branch",
  "Platform, operating system, browser, or device",
  "User role, feature, and screen",
  "Test steps, expected result, and actual result",
  "Source text, current translation, and recommended correction",
  "Screenshot or recording",
  "Severity and defect category",
  "Assigned owner, status, resolution, and retest result",
  "Final approval",
];

const defectCategories = [
  "Linguistic",
  "Terminology",
  "Truncation or layout",
  "Functional",
  "Locale format",
  "Input or data handling",
  "Encoding or font",
  "Right-to-left",
  "Accessibility",
  "Platform-specific",
  "Source-content issue",
  "Internationalization issue",
];

const rootCauseTypes = [
  "Translation error",
  "Ambiguous or fragmented source content",
  "Missing translator context",
  "String reuse problem",
  "Internationalization defect",
  "Layout or product-design limitation",
  "General functional defect",
  "Expected market difference",
  "Outdated requirement",
];

const regressionLevels = [
  ["Direct Retest", "Verify the original issue with the same locale, build, platform, role, and test steps."],
  ["Component Regression", "Review other screens using the same string, translation key, component, template, format function, font, or validation rule."],
  ["Workflow Regression", "Repeat the affected user journey and confirm the correction works in context."],
  ["Cross-Locale Regression", "Test additional languages when shared code, resource loading, layout, locale logic, validation, or rendering changed."],
  ["Platform Regression", "Retest other supported environments when responsive behavior, native components, fonts, or platform-specific functionality changed."],
];

const regressionRows = [
  ["Translation-only correction", "Direct retest and reused-string check"],
  ["Shared UI component change", "Component and cross-locale regression"],
  ["Locale-formatting code change", "Relevant locales and all affected workflows"],
  ["Font or rendering change", "Supported scripts and priority platforms"],
  ["RTL layout change", "RTL locales and shared components"],
  ["Validation-rule change", "Input, submission, error, storage, search, and export"],
  ["Resource-loading change", "Affected locales, roles, platforms, and fallback states"],
];

const releaseGateFields = [
  "Product, version, release-candidate build, and planned release date",
  "Languages, locales, environments, and critical workflows tested",
  "Completed test coverage",
  "Open critical, major, and minor defects",
  "Accepted risks, deferred items, and available workarounds",
  "Locale, QA, product, and release approvers",
  "Release decision and production verification owner",
];

const releaseCriteria = [
  "Every required locale received the planned coverage.",
  "Critical user journeys pass.",
  "No critical defects remain.",
  "Major defects are resolved or formally accepted.",
  "Required market, regulatory, and subject-matter reviews are complete.",
  "Regression testing is complete.",
  "The approved release-candidate build is documented.",
  "Locale-level approvals are recorded.",
  "Production smoke testing has an owner.",
];

const postReleaseChecks = [
  "Confirm the production version and build.",
  "Open every required locale.",
  "Verify language selection, locale routing, and persistence.",
  "Review the starting screen and complete at least one critical journey.",
  "Check authentication and account access.",
  "Review representative locale-sensitive formats.",
  "Submit one localized form.",
  "Check one notification or transactional message.",
  "Review one generated report or export where applicable.",
  "Check critical links, connected services, and integrations.",
  "Review production-only configuration.",
  "Record production defects and assign immediate ownership for launch-blocking issues.",
];

const commonFailures = [
  {
    title: "Testing Only Translation Files",
    problem: "File QA cannot reveal every contextual, layout, functional, input, or locale-specific problem.",
    response: "Combine automated resource checks with in-context testing of the integrated product.",
  },
  {
    title: "Testing Only the Default User Role",
    problem: "Administrators, customers, reviewers, managers, and other roles may see different interfaces and strings.",
    response: "Include every role involved in a critical or market-specific workflow.",
  },
  {
    title: "Testing an Outdated Build",
    problem: "The tested translation package may not match the release candidate, and reported issues may already be corrected elsewhere.",
    response: "Record the build number in every test cycle and defect report.",
  },
  {
    title: "Relying Only on Screenshots",
    problem: "Screenshots cannot validate interaction, input, responsive behavior, dynamic content, or error recovery.",
    response: "Use product access or an interactive review environment for critical workflows.",
  },
  {
    title: "Treating Every Locale the Same",
    problem: "Languages differ in script, direction, input, expansion, grammar, and market conventions.",
    response: "Add locale-specific test cases rather than applying only the source-language plan.",
  },
  {
    title: "Fixing Strings Without Retesting",
    problem: "A correction may fail to load, appear in multiple contexts, or create a new layout problem.",
    response: "Retest the defect, reused components, and affected workflow in the intended build.",
  },
  {
    title: "Ignoring Source-Content Problems",
    problem: "Ambiguous, inconsistent, or fragmented source strings create recurring translation and testing defects.",
    response: "Correct the source, add context, and update terminology or authoring guidance.",
  },
  {
    title: "Confusing Internationalization Defects With Translation Errors",
    problem: "A linguist cannot correct hard-coded text, unsupported plural rules, broken locale parsing, or fixed interface widths.",
    response: "Categorize the root cause and route internationalization issues to engineering.",
  },
  {
    title: "Launching Without Locale-Level Approval",
    problem: "A single global approval can conceal unresolved issues in individual markets.",
    response: "Record testing status, open risks, and approval separately for every required locale.",
  },
  {
    title: "Skipping Production Verification",
    problem: "Configuration, packaging, caching, integration, or deployment changes may alter the approved experience.",
    response: "Assign and complete a focused post-release smoke test.",
  },
];

const toolkitItems = [
  {
    title: "PDF Checklist",
    description: "A print-ready checklist for preparation, all 11 workstreams, defect severity, regression, release approval, and production smoke testing.",
    details: [
      "Testing preparation and release-scope questions",
      "Eleven localization testing workstreams",
      "Defect-severity definitions",
      "Regression checklist and release gate",
      "Production smoke test",
    ],
    label: "Download the PDF Checklist",
    href: links.pdfDownload,
    type: "PDF",
  },
  {
    title: "Editable Testing Worksheet",
    description: "A working template for locale coverage, environments, roles, test cases, defect tracking, regression status, approvals, and production verification.",
    details: [
      "Release and locale overview",
      "Environment and ownership matrices",
      "Test-case and defect registers",
      "Regression and locale approval status",
      "Production smoke-test record",
    ],
    label: "Download the Editable Worksheet",
    href: links.worksheetDownload,
    type: "XLSX",
  },
];

const supportCapabilities = [
  ["Automated Resource-File QA", "Identify missing translations, broken placeholders, malformed tags, terminology inconsistencies, number mismatches, character corruption, and file-structure problems before integration."],
  ["In-Context Linguistic Review", "Professional linguists evaluate meaning, terminology, tone, usability, and consistency inside the live or test interface and across complete user journeys."],
  ["Visual Localization Testing", "Review text expansion, wrapping, truncation, fonts, spacing, responsive behavior, and localized reports or generated documents."],
  ["Functional and Locale Validation", "Test dates, times, currencies, numbers, units, names, addresses, calendars, input methods, encoding, right-to-left behavior, and other multilingual product interactions."],
  ["Regression and Release Support", "Retest corrections, validate shared components, maintain terminology and Translation Memory, document remaining risks, and support locale-level approval."],
];

const engagementModels = [
  "A defined multilingual software release",
  "Independent review of an existing localized build",
  "Linguistic testing only",
  "Targeted visual or functional validation",
  "High-risk locale testing",
  "Collaboration with an internal software QA team",
  "Recurring testing for continuous releases",
];

const faqs = [
  {
    question: "What Is Software Localization Testing?",
    answer: "Software localization testing evaluates whether a translated and adapted product works correctly for users in a particular language and locale. It includes linguistic review as well as visual presentation, functionality, input handling, locale formats, scripts, accessibility, platforms, regression testing, and release validation.",
  },
  {
    question: "How Is Localization Testing Different From Linguistic Review?",
    answer: "Linguistic review evaluates meaning, terminology, grammar, tone, and completeness. Localization testing includes linguistic quality but also examines the integrated software experience, including layout, controls, workflows, data, local formats, input methods, right-to-left behavior, accessibility, and technical performance.",
  },
  {
    question: "Should Every Feature Be Tested in Every Language?",
    answer: "Not necessarily. Coverage should be based on release risk. Critical workflows, new features, shared components, new locales, regulated content, locale-sensitive functions, and newly supported scripts may require broad testing. Smaller updates may use targeted regression and representative sampling. Document the planned coverage and exclusions before testing begins.",
  },
  {
    question: "Who Should Test Localized Software?",
    answer: "The team commonly includes localization managers, professional linguists or in-market reviewers, software QA, engineering, product management, UX or design, accessibility specialists, subject-matter reviewers, and release owners. Both language expertise and software-testing expertise are usually required.",
  },
  {
    question: "Can Software Localization Testing Be Automated?",
    answer: "Parts of the process can be automated. Automated checks can identify missing translations, malformed tags, inconsistent terminology, broken placeholders, character corruption, and predictable workflow or locale failures. Human evaluation is still needed for meaning, context, readability, cultural appropriateness, visual quality, unexpected behavior, and overall user experience.",
  },
  {
    question: "When Should Localization Testing Begin?",
    answer: "Planning should begin before translation is complete. Teams can define coverage, prepare accounts and data, establish severity rules, and run resource-file QA early. In-context testing should begin as soon as a stable localized build is available rather than waiting for the final release date.",
  },
  {
    question: "What Is Cosmetic Localization Testing?",
    answer: "Cosmetic localization testing evaluates the visual presentation of translated software, including text fit, wrapping, truncation, spacing, alignment, fonts, dialogs, controls, responsive layouts, tables, charts, and other interface elements. Visual localization testing is often a clearer customer-facing name for the same discipline.",
  },
  {
    question: "What Is Functional Localization Testing?",
    answer: "Functional localization testing evaluates whether language, locale settings, input, scripts, formatting, or translated content interferes with software behavior. Examples include local keyboards, address validation, search with accented characters, date entry, currency handling, multilingual exports, right-to-left navigation, and complete localized journeys.",
  },
  {
    question: "What Is an Internationalization Defect?",
    answer: "An internationalization defect is a design or engineering problem that prevents the software from supporting one or more languages or locales efficiently. Examples include hard-coded text, fixed-width controls, unsupported plural forms, inadequate Unicode support, source-language assumptions in validation, incorrect bidirectional behavior, and locale-insensitive date or number handling.",
  },
  {
    question: "How Should Localization Defects Be Prioritized?",
    answer: "Classify defects according to user and business impact. Critical defects block release because they prevent product use or create severe safety, compliance, security, financial, or data-integrity risk. Major defects materially affect meaning, usability, functionality, or customer trust. Minor defects have limited impact, while suggestions are improvements without a clear product defect.",
  },
  {
    question: "Does Every Locale Need Separate Approval?",
    answer: "Separate locale approval is strongly recommended. One market may be ready while another still has unresolved linguistic, functional, script, or market-specific issues. Locale-level sign-off makes these differences visible and supports controlled release decisions.",
  },
  {
    question: "Should Localized Software Be Tested Again After Release?",
    answer: "Yes. A targeted production smoke test should confirm that the correct resources, locale settings, critical workflows, notifications, reports, links, and integrations reached production. Future releases should include localization regression testing based on the extent and risk of each change.",
  },
  {
    question: "What Information Is Needed to Plan Software Localization Testing?",
    answer: "Useful inputs include source and target languages, locale variants, product type and platforms, release version and schedule, resource files, screenshots or product access, supported roles, critical journeys, browser and device requirements, terminology and Translation Memory, planned linguistic, visual, functional, and accessibility scope, and any security or regulatory requirements.",
  },
];

const relatedResources = [
  {
    eyebrow: "FOUNDATIONAL GUIDE",
    title: "Software and SaaS Localization Guide",
    text: "Plan a complete multilingual product program across interfaces, websites, onboarding, documentation, support, and recurring releases.",
    href: links.softwareGuide,
  },
  {
    eyebrow: "GLOBAL PRODUCT READINESS",
    title: "Internationalization vs. Localization",
    text: "Understand how internationalization prepares software for global use and how localization adapts the experience for each market.",
    href: links.internationalization,
  },
  {
    eyebrow: "CONTINUOUS LOCALIZATION",
    title: "Continuous Software Localization",
    text: "Connect translation, review, QA, and release coordination with agile development and frequent software updates.",
    href: links.continuousLocalization,
  },
  {
    eyebrow: "QUALITY GOVERNANCE",
    title: "Translation Quality Assurance",
    text: "Explore structured linguistic, technical, and in-context quality controls for accurate, consistent, and usable multilingual content.",
    href: links.translationQa,
  },
];

const sources = [
  {
    title: "Unicode Common Locale Data Repository",
    organization: "Unicode Consortium",
    text: "Locale data for dates, times, numbers, currencies, units, plural rules, and other internationalization conventions.",
    href: links.cldr,
    label: "Review the CLDR Reference",
  },
  {
    title: "Unicode Bidirectional Algorithm",
    organization: "Unicode Consortium",
    text: "The standard algorithm governing the display order of mixed right-to-left and left-to-right text.",
    href: links.unicodeBidi,
    label: "Review the Bidirectional Algorithm",
  },
  {
    title: "Web Content Accessibility Guidelines 2.2",
    organization: "World Wide Web Consortium",
    text: "Accessibility guidance relevant to web and SaaS applications, including requirements evaluated through automated and human review.",
    href: links.wcag,
    label: "Review WCAG 2.2",
  },
];

function ArrowRight({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ChevronDown({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 5 52 13v15c0 14-8.3 24.7-20 31-11.7-6.3-20-17-20-31V13L32 5Z" />
      <path d="m22 31 7 7 14-16" />
    </svg>
  );
}

function Checklist({ items, columns = true }) {
  return (
    <ul className={columns ? "check-list check-list--columns" : "check-list"}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-list__marker">
            <CheckIcon size={17} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowRight size={17} />
    </a>
  );
}

function HeroVisual() {
  const rows = [
    ["Language", "Reviewed"],
    ["Interface", "Verified"],
    ["Locale Behavior", "Passed"],
  ];

  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Illustration of a localized software release passing language, interface, and locale checks"
    >
      <div className="hero-visual__topline">
        <span className="hero-visual__label">Localized Release</span>
        <span className="hero-visual__build">Build 5.2.1</span>
      </div>
      <div className="hero-visual__body">
        <div className="hero-visual__icon">
          <ShieldCheckIcon />
        </div>
        <div>
          <p className="hero-visual__title">Release Readiness</p>
          <p className="hero-visual__summary">Validate the product experience before every multilingual launch.</p>
        </div>
      </div>
      <div className="hero-visual__rows">
        {rows.map(([label, status]) => (
          <div className="hero-visual__row" key={label}>
            <span>{label}</span>
            <span className="hero-visual__status">
              <CheckIcon size={15} /> {status}
            </span>
          </div>
        ))}
      </div>
      <div className="hero-visual__gate">
        <div>
          <span className="hero-visual__gate-label">Release Gate</span>
          <strong>11 workstreams complete</strong>
        </div>
        <span className="hero-visual__approved">Approved</span>
      </div>
    </div>
  );
}

function ResponsiveTable({ headers, rows, className = "" }) {
  return (
    <div className={`table-shell ${className}`.trim()}>
      <table className="responsive-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, index) => (
                <td key={`${rowIndex}-${index}`} data-label={headers[index]}>
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

function Workstream({ workstream }) {
  return (
    <article className="workstream" id={`workstream-${workstream.number}`}>
      <div className="workstream__heading">
        <span className="workstream__number" aria-hidden="true">
          {workstream.number}
        </span>
        <div>
          <h3>{workstream.title}</h3>
          <p className="workstream__validates">{workstream.validates}</p>
        </div>
      </div>

      <div className="workstream__why">
        <strong>Why It Matters</strong>
        <p>{workstream.why}</p>
      </div>

      {workstream.journeyItems && (
        <div className="journey-strip">
          <strong>{workstream.journeyLabel}</strong>
          <div className="journey-strip__grid">
            {workstream.journeyItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      )}

      <div className="workstream__checklist">
        <h4>Checklist</h4>
        <Checklist items={workstream.items} />
      </div>

      {(workstream.noteText || workstream.noteBlocks) && (
        <aside className="quality-note">
          <p className="quality-note__label">Quality Note</p>
          <h4>{workstream.noteTitle}</h4>
          {workstream.noteText && <p>{workstream.noteText}</p>}
          {workstream.noteBlocks && (
            <div className="quality-note__blocks">
              {workstream.noteBlocks.map(([title, text]) => (
                <div key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          )}
        </aside>
      )}

      <div className="workstream__footer">
        <div>
          <h4>Typical Defects</h4>
          <ul className="compact-list">
            {workstream.defects.map((defect) => (
              <li key={defect}>{defect}</li>
            ))}
          </ul>
        </div>
        <div className="owner-block">
          <span>Primary Owners</span>
          <strong>{workstream.owners}</strong>
        </div>
      </div>
    </article>
  );
}

export default function StepesSoftwareLocalizationTestingChecklistWireframe() {
  const [activeId, setActiveId] = useState(tocItems[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (event, id) => {
    const target = typeof document !== "undefined" ? document.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="stepes-guide">
      <style>{`
        .stepes-guide {
          --ink: #151924;
          --ink-soft: #40495d;
          --muted: #697386;
          --line: #dfe3ea;
          --line-strong: #cfd5df;
          --surface: #f7f8fa;
          --surface-warm: #fdf2f7;
          --magenta: #c11d63;
          --magenta-dark: #9f1d55;
          --magenta-deep: #7a1542;
          --magenta-light: #f2a7c6;
          --dark: #171724;
          --radius-lg: 30px;
          --radius-md: 22px;
          --shadow: 0 22px 60px rgba(25, 29, 43, 0.09);
          color: var(--ink);
          background: #ffffff;
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          font-size: 18px;
          line-height: 1.68;
          overflow-x: clip;
        }

        .stepes-guide *,
        .stepes-guide *::before,
        .stepes-guide *::after {
          box-sizing: border-box;
        }

        .stepes-guide a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-guide a:focus-visible,
        .stepes-guide button:focus-visible,
        .stepes-guide summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.28);
          outline-offset: 4px;
        }

        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .reading {
          max-width: 760px;
        }

        .reading-wide {
          max-width: 820px;
        }

        .eyebrow {
          margin: 0 0 17px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase;
        }

        .eyebrow--dark {
          color: var(--magenta-light) !important;
        }

        h1,
        h2,
        h3,
        h4,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          color: var(--ink);
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        h1 {
          max-width: 720px;
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
        }

        h2 {
          margin-bottom: 24px;
          font-size: 36px;
          line-height: 1.16;
        }

        h3 {
          margin-bottom: 16px;
          font-size: 24px;
          line-height: 1.24;
        }

        h4 {
          margin-bottom: 12px;
          color: var(--ink);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.35;
        }

        p {
          margin-bottom: 22px;
          color: var(--ink-soft);
        }

        .section-intro {
          max-width: 810px;
          margin-bottom: 36px;
          font-size: 19px;
          line-height: 1.64;
        }

        .hero {
          position: relative;
          padding: 104px 0 96px;
          background:
            radial-gradient(circle at 88% 5%, rgba(193, 29, 99, 0.08), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #fbfbfc 100%);
          border-bottom: 1px solid var(--line);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
          gap: 76px;
          align-items: center;
        }

        .hero-copy {
          max-width: 740px;
        }

        .hero-deck {
          max-width: 720px;
          margin-bottom: 32px;
          font-size: 20px;
          line-height: 1.6;
        }

        .hero-actions,
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .button {
          display: inline-flex;
          min-height: 50px;
          padding: 13px 23px;
          border: 1px solid transparent;
          border-radius: 999px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.25;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .button--primary,
        .button--primary:link,
        .button--primary:visited,
        .button--primary:hover,
        .button--primary:active,
        .button--primary:focus,
        .button--primary:focus-visible,
        .button--primary * {
          color: #ffffff !important;
          fill: none;
          stroke: currentColor;
        }

        .button--primary {
          background: var(--magenta);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.2);
        }

        .button--primary:hover,
        .button--primary:focus-visible {
          background: var(--magenta-dark);
          box-shadow: 0 12px 28px rgba(159, 29, 85, 0.25);
        }

        .button--secondary {
          color: var(--ink);
          background: #ffffff;
          border-color: var(--line-strong);
        }

        .button--secondary:hover,
        .button--secondary:focus-visible {
          border-color: var(--magenta);
          color: var(--magenta);
        }

        .hero-utility {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          margin-top: 30px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
        }

        .hero-utility span {
          display: inline-flex;
          align-items: center;
        }

        .hero-utility span:not(:last-child)::after {
          width: 4px;
          height: 4px;
          margin: 0 12px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
        }

        .hero-visual {
          position: relative;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: #ffffff;
          box-shadow: var(--shadow);
        }

        .hero-visual::before {
          position: absolute;
          inset: -10px 30px auto auto;
          width: 110px;
          height: 110px;
          border: 1px solid rgba(193, 29, 99, 0.15);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .hero-visual__topline,
        .hero-visual__row,
        .hero-visual__gate {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .hero-visual__topline {
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
        }

        .hero-visual__label,
        .hero-visual__build,
        .hero-visual__gate-label {
          color: var(--muted);
          font-size: 14px;
        }

        .hero-visual__body {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr);
          gap: 20px;
          align-items: center;
          padding: 26px 0;
        }

        .hero-visual__icon {
          width: 64px;
          height: 64px;
          padding: 13px;
          border-radius: 19px;
          color: var(--magenta);
          background: var(--surface-warm);
        }

        .hero-visual__icon svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .hero-visual__title {
          margin-bottom: 4px;
          color: var(--ink);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.25;
        }

        .hero-visual__summary {
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
        }

        .hero-visual__rows {
          border-top: 1px solid var(--line);
        }

        .hero-visual__row {
          min-height: 55px;
          border-bottom: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 16px;
        }

        .hero-visual__status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta-dark);
          font-weight: 600;
        }

        .hero-visual__gate {
          margin-top: 24px;
          padding: 20px;
          border-radius: 18px;
          background: var(--surface);
        }

        .hero-visual__gate div {
          display: grid;
          gap: 2px;
        }

        .hero-visual__gate strong {
          font-size: 16px;
        }

        .hero-visual__approved {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          color: var(--magenta-dark);
          background: #ffffff;
          border: 1px solid rgba(193, 29, 99, 0.2);
          font-size: 14px;
          font-weight: 600;
        }

        .summary-section {
          padding: 88px 0;
          background: var(--surface-warm);
        }

        .summary-layout {
          display: grid;
          grid-template-columns: minmax(240px, 0.75fr) minmax(0, 1.6fr);
          gap: 70px;
          align-items: start;
        }

        .summary-layout h2 {
          max-width: 380px;
          margin-bottom: 18px;
        }

        .summary-layout__lead {
          max-width: 390px;
          margin-bottom: 0;
          font-size: 18px;
        }

        .takeaway-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 42px;
        }

        .takeaway {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          gap: 14px;
          padding: 22px 0;
          border-top: 1px solid rgba(193, 29, 99, 0.18);
        }

        .takeaway__marker {
          display: inline-flex;
          width: 24px;
          height: 24px;
          margin-top: 2px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: var(--magenta);
          background: #ffffff;
        }

        .takeaway strong {
          display: block;
          margin-bottom: 7px;
          color: var(--ink);
          font-size: 17px;
          line-height: 1.4;
        }

        .takeaway p {
          margin: 0;
          font-size: 16px;
          line-height: 1.58;
        }

        .article-region {
          padding: 96px 0 0;
        }

        .article-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 840px);
          gap: 64px;
          max-width: 1164px;
          margin: 0 auto;
          align-items: start;
        }

        .desktop-toc {
          position: sticky;
          top: 104px;
          align-self: start;
          padding-right: 18px;
        }

        .toc-title {
          margin-bottom: 18px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
        }

        .toc-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .toc-list li {
          border-left: 2px solid var(--line);
        }

        .toc-list li.is-active {
          border-left-color: var(--magenta);
        }

        .toc-list a {
          display: block;
          padding: 7px 0 7px 17px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.42;
          transition: color 140ms ease;
        }

        .toc-list a:hover,
        .toc-list li.is-active a {
          color: var(--magenta);
        }

        .toc-list li.is-active a {
          font-weight: 600;
        }

        .mobile-toc {
          display: none;
          margin: 0 0 54px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: #ffffff;
        }

        .mobile-toc summary {
          display: flex;
          min-height: 54px;
          padding: 14px 18px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: var(--ink);
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          list-style: none;
        }

        .mobile-toc summary::-webkit-details-marker {
          display: none;
        }

        .mobile-toc[open] summary svg {
          transform: rotate(180deg);
        }

        .mobile-toc__list {
          margin: 0;
          padding: 6px 18px 18px;
          list-style: none;
          border-top: 1px solid var(--line);
        }

        .mobile-toc__list a {
          display: block;
          min-height: 44px;
          padding: 11px 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.4;
        }

        .article-main {
          min-width: 0;
        }

        .article-section {
          padding: 0 0 88px;
          scroll-margin-top: 110px;
        }

        .article-section + .article-section {
          padding-top: 88px;
          border-top: 1px solid var(--line);
        }

        .article-section--no-divider {
          border-top: 0 !important;
        }

        .definition-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 32px;
          margin: 32px 0 42px;
          padding: 4px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .definition-grid span {
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 16px;
        }

        .definition-grid span:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .comparison-rows {
          margin: 34px 0;
          border-top: 1px solid var(--line);
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 34px;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }

        .comparison-row h3 {
          margin: 0;
          font-size: 20px;
          letter-spacing: -0.02em;
        }

        .comparison-row p {
          margin: 0;
          font-size: 16px;
        }

        .recommendation-callout,
        .quality-note {
          padding: 26px 28px;
          border-left: 3px solid var(--magenta);
          border-radius: 0 18px 18px 0;
          background: var(--surface-warm);
        }

        .recommendation-callout strong {
          display: block;
          margin-bottom: 8px;
          color: var(--ink);
        }

        .recommendation-callout p,
        .quality-note p {
          margin-bottom: 0;
          font-size: 16px;
        }

        .scope-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 38px 0 48px;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .scope-group {
          padding: 28px;
          background: #ffffff;
        }

        .scope-group:nth-child(odd) {
          border-right: 1px solid var(--line);
        }

        .scope-group:nth-child(-n + 2) {
          border-bottom: 1px solid var(--line);
        }

        .scope-group h3 {
          font-size: 21px;
        }

        .plain-list,
        .compact-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .plain-list li,
        .compact-list li {
          position: relative;
          padding-left: 18px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.58;
        }

        .plain-list li + li,
        .compact-list li + li {
          margin-top: 9px;
        }

        .plain-list li::before,
        .compact-list li::before {
          position: absolute;
          top: 0.73em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
          transform: translateY(-50%);
        }

        .module-title {
          margin-top: 42px;
          margin-bottom: 16px;
          font-size: 25px;
        }

        .table-shell {
          width: 100%;
          margin: 28px 0 36px;
          border: 1px solid var(--line);
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;
        }

        .responsive-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: auto;
        }

        .responsive-table th,
        .responsive-table td {
          padding: 16px 17px;
          border-bottom: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
          font-size: 16px;
          line-height: 1.5;
        }

        .responsive-table th {
          color: var(--ink);
          background: var(--surface);
          font-weight: 600;
        }

        .responsive-table td {
          color: var(--ink-soft);
        }

        .responsive-table tr:last-child td {
          border-bottom: 0;
        }

        .risk-panel {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: 38px;
          margin-top: 40px;
          padding: 30px;
          border-radius: var(--radius-md);
          background: var(--surface);
        }

        .risk-panel h3 {
          margin: 0;
        }

        .team-note {
          display: grid;
          grid-template-columns: minmax(200px, 0.6fr) minmax(0, 1.4fr);
          gap: 34px;
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }

        .team-note h3 {
          margin: 0;
          font-size: 21px;
        }

        .lifecycle-panel {
          position: relative;
          margin-top: 36px;
          padding: 42px;
          border-radius: var(--radius-lg);
          color: #ffffff;
          background: var(--dark);
          overflow: hidden;
        }

        .lifecycle-panel::after {
          position: absolute;
          right: -90px;
          bottom: -100px;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(242, 167, 198, 0.2);
          border-radius: 50%;
          content: "";
        }

        .lifecycle-panel h2,
        .lifecycle-panel h3,
        .lifecycle-panel p {
          color: #ffffff;
        }

        .lifecycle-panel__title {
          margin-bottom: 14px;
          color: #ffffff;
          font-size: 32px;
          line-height: 1.18;
        }

        .lifecycle-panel__intro {
          max-width: 720px;
          margin-bottom: 34px;
          color: rgba(255, 255, 255, 0.75) !important;
          font-size: 17px;
        }

        .lifecycle-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-left: 1px solid rgba(255, 255, 255, 0.16);
        }

        .lifecycle-stage {
          min-height: 220px;
          padding: 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .lifecycle-stage__number {
          display: block;
          margin-bottom: 26px;
          color: var(--magenta-light);
          font-size: 15px;
          font-weight: 600;
        }

        .lifecycle-stage h3 {
          margin-bottom: 10px;
          font-size: 19px;
          letter-spacing: -0.015em;
        }

        .lifecycle-stage p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68) !important;
          font-size: 16px;
          line-height: 1.55;
        }

        .checklist-intro-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 240px;
          gap: 42px;
          align-items: end;
          margin: 34px 0 18px;
          padding: 28px 30px;
          border-radius: var(--radius-md);
          background: var(--surface);
        }

        .checklist-intro-panel p {
          margin: 0;
          font-size: 16px;
        }

        .checklist-intro-panel__count {
          text-align: right;
        }

        .checklist-intro-panel__count strong {
          display: block;
          color: var(--magenta);
          font-size: 38px;
          font-weight: 600;
          line-height: 1;
        }

        .checklist-intro-panel__count span {
          color: var(--muted);
          font-size: 14px;
        }

        .workstreams {
          margin-top: 34px;
          border-top: 1px solid var(--line);
        }

        .workstream {
          padding: 68px 0;
          border-bottom: 1px solid var(--line);
          scroll-margin-top: 110px;
        }

        .workstream__heading {
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr);
          gap: 24px;
          align-items: start;
        }

        .workstream__number {
          display: block;
          padding-top: 4px;
          color: var(--magenta);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.25;
        }

        .workstream__heading h3 {
          margin-bottom: 12px;
          font-size: 28px;
        }

        .workstream__validates {
          max-width: 720px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.58;
        }

        .workstream__why {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          gap: 28px;
          margin: 32px 0 38px 82px;
          padding-top: 26px;
          border-top: 1px solid var(--line);
        }

        .workstream__why strong {
          color: var(--ink);
          font-size: 16px;
        }

        .workstream__why p {
          margin: 0;
          font-size: 16px;
        }

        .workstream__checklist {
          margin-left: 82px;
        }

        .check-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .check-list--columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px 34px;
        }

        .check-list li {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .check-list__marker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.22em;
          color: var(--magenta);
        }

        .journey-strip {
          margin: 0 0 38px 82px;
          padding: 24px 26px;
          border-radius: 18px;
          background: var(--surface);
        }

        .journey-strip > strong {
          display: block;
          margin-bottom: 14px;
          color: var(--ink);
          font-size: 16px;
        }

        .journey-strip__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 24px;
        }

        .journey-strip__grid span {
          color: var(--ink-soft);
          font-size: 16px;
        }

        .quality-note {
          margin: 36px 0 0 82px;
        }

        .quality-note__label {
          margin-bottom: 8px !important;
          color: var(--magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .quality-note h4 {
          font-size: 20px;
        }

        .quality-note__blocks {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 22px;
        }

        .quality-note__blocks > div {
          padding-top: 18px;
          border-top: 1px solid rgba(193, 29, 99, 0.2);
        }

        .quality-note__blocks strong {
          display: block;
          margin-bottom: 8px;
          color: var(--ink);
          font-size: 16px;
        }

        .workstream__footer {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(220px, 0.75fr);
          gap: 50px;
          margin: 40px 0 0 82px;
          padding-top: 30px;
          border-top: 1px solid var(--line);
        }

        .owner-block {
          padding-left: 26px;
          border-left: 1px solid var(--line);
        }

        .owner-block span {
          display: block;
          margin-bottom: 8px;
          color: var(--muted);
          font-size: 14px;
        }

        .owner-block strong {
          display: block;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.55;
        }

        .severity-note {
          display: grid;
          grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);
          gap: 36px;
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }

        .severity-note h3 {
          margin: 0;
          font-size: 22px;
        }

        .two-column-module {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 40px;
          margin-top: 38px;
        }

        .field-panel {
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
        }

        .field-panel--tinted {
          border-color: transparent;
          background: var(--surface);
        }

        .category-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 18px;
        }

        .category-cloud span {
          display: inline-flex;
          padding: 7px 11px;
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          color: var(--ink-soft);
          background: #ffffff;
          font-size: 14px;
        }

        .regression-levels {
          margin: 34px 0;
          border-top: 1px solid var(--line);
        }

        .regression-level {
          display: grid;
          grid-template-columns: 210px minmax(0, 1fr);
          gap: 34px;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }

        .regression-level strong {
          color: var(--ink);
          font-size: 17px;
        }

        .regression-level p {
          margin: 0;
          font-size: 16px;
        }

        .release-gate {
          margin: 36px 0;
          padding: 34px;
          border-radius: var(--radius-lg);
          background: var(--surface-warm);
        }

        .release-gate__grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.8fr);
          gap: 44px;
          align-items: start;
        }

        .release-gate__decision {
          padding: 26px;
          border: 1px solid rgba(193, 29, 99, 0.18);
          border-radius: 20px;
          background: #ffffff;
        }

        .release-gate__decision span {
          display: block;
          margin-bottom: 8px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .release-gate__decision strong {
          display: block;
          margin-bottom: 10px;
          color: var(--ink);
          font-size: 25px;
          line-height: 1.25;
        }

        .release-gate__decision p {
          margin: 0;
          font-size: 16px;
        }

        .failure-list {
          margin-top: 34px;
          border-top: 1px solid var(--line);
        }

        .failure-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.65fr) minmax(0, 1fr) minmax(0, 1fr);
          gap: 30px;
          padding: 26px 0;
          border-bottom: 1px solid var(--line);
        }

        .failure-row h3 {
          margin: 0;
          font-size: 20px;
        }

        .failure-row p {
          margin: 0;
          font-size: 16px;
        }

        .failure-row__response {
          padding-left: 20px;
          border-left: 2px solid var(--magenta);
        }

        .failure-row__response strong {
          display: block;
          margin-bottom: 6px;
          color: var(--ink);
          font-size: 15px;
        }

        .toolkit-panel {
          padding: 38px;
          border-radius: var(--radius-lg);
          background: var(--surface-warm);
        }

        .toolkit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          margin-top: 34px;
          border-top: 1px solid rgba(193, 29, 99, 0.18);
          border-bottom: 1px solid rgba(193, 29, 99, 0.18);
        }

        .toolkit-item {
          padding: 30px 30px 30px 0;
        }

        .toolkit-item + .toolkit-item {
          padding-left: 30px;
          border-left: 1px solid rgba(193, 29, 99, 0.18);
        }

        .toolkit-item__type {
          display: inline-flex;
          margin-bottom: 18px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .toolkit-item h3 {
          font-size: 25px;
        }

        .toolkit-item p {
          font-size: 16px;
        }

        .download-link {
          display: inline-flex;
          min-height: 46px;
          margin-top: 24px;
          padding: 11px 18px;
          border: 1px solid rgba(193, 29, 99, 0.28);
          border-radius: 999px;
          align-items: center;
          gap: 9px;
          color: var(--magenta);
          background: #ffffff;
          font-size: 16px;
          font-weight: 600;
        }

        .download-link:hover,
        .download-link:focus-visible {
          border-color: var(--magenta);
          color: var(--magenta-dark);
        }

        .toolkit-footnote {
          margin: 24px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
        }

        .support-list {
          margin-top: 34px;
          border-top: 1px solid var(--line);
        }

        .support-row {
          display: grid;
          grid-template-columns: 235px minmax(0, 1fr);
          gap: 36px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .support-row h3 {
          margin: 0;
          font-size: 20px;
        }

        .support-row p {
          margin: 0;
          font-size: 16px;
        }

        .engagement-panel {
          display: grid;
          grid-template-columns: minmax(220px, 0.75fr) minmax(0, 1.25fr);
          gap: 38px;
          margin-top: 40px;
          padding: 32px;
          border-radius: var(--radius-md);
          background: var(--surface);
        }

        .engagement-panel h3 {
          margin: 0;
        }

        .support-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 34px;
        }

        .editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
        }

        .editorial-link svg {
          transition: transform 140ms ease;
        }

        .editorial-link:hover svg,
        .editorial-link:focus-visible svg {
          transform: translateX(3px);
        }

        .faq-panel {
          margin-top: 32px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .faq-item + .faq-item {
          border-top: 1px solid var(--line);
        }

        .faq-question {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          gap: 24px;
          width: 100%;
          min-height: 68px;
          padding: 22px 0;
          border: 0;
          align-items: center;
          color: var(--ink);
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .faq-question svg {
          transition: transform 160ms ease;
        }

        .faq-question[aria-expanded="true"] svg {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-width: 800px;
          padding: 0 48px 24px 0;
        }

        .faq-answer p {
          margin: 0;
          font-size: 16px;
          line-height: 1.68;
        }

        .sources-section {
          padding: 84px 0;
          background: var(--surface);
        }

        .sources-shell {
          max-width: 1040px;
        }

        .source-list {
          margin-top: 32px;
          border-top: 1px solid var(--line-strong);
        }

        .source-row {
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr) 150px;
          gap: 34px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line-strong);
          align-items: center;
        }

        .source-row strong {
          display: block;
          color: var(--ink);
          font-size: 16px;
        }

        .source-row span {
          color: var(--muted);
          font-size: 14px;
        }

        .source-row p {
          margin: 0;
          font-size: 16px;
        }

        .conclusion-section {
          padding: 96px 0 82px;
        }

        .conclusion-copy {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .conclusion-copy p {
          font-size: 19px;
        }

        .related-section {
          padding: 80px 0;
          border-top: 1px solid var(--line);
        }

        .related-header {
          display: flex;
          margin-bottom: 34px;
          align-items: end;
          justify-content: space-between;
          gap: 30px;
        }

        .related-header h2 {
          margin: 0;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .related-item {
          display: flex;
          min-height: 310px;
          padding: 28px 24px;
          flex-direction: column;
          border-right: 1px solid var(--line);
        }

        .related-item:last-child {
          border-right: 0;
        }

        .related-item .eyebrow {
          margin-bottom: 16px;
        }

        .related-item h3 {
          font-size: 21px;
        }

        .related-item p {
          margin-bottom: 26px;
          font-size: 16px;
        }

        .related-item .editorial-link {
          margin-top: auto;
        }

        .final-cta-section {
          padding: 0 0 96px;
        }

        .final-cta {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.75fr);
          gap: 54px;
          padding: 54px 58px;
          border: 1px solid rgba(193, 29, 99, 0.17);
          border-radius: var(--radius-lg);
          align-items: center;
          background: linear-gradient(135deg, #fff 0%, var(--surface-warm) 100%);
        }

        .final-cta h2 {
          max-width: 650px;
          margin-bottom: 16px;
        }

        .final-cta p {
          max-width: 700px;
          margin: 0;
          font-size: 18px;
        }

        .final-cta .cta-actions {
          justify-content: flex-end;
        }

        @media (max-width: 1180px) {
          .shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .hero-grid {
            gap: 54px;
          }

          .article-layout {
            grid-template-columns: 240px minmax(0, 1fr);
            gap: 48px;
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .related-item:nth-child(2) {
            border-right: 0;
          }

          .related-item:nth-child(-n + 2) {
            border-bottom: 1px solid var(--line);
          }
        }

        @media (max-width: 1024px) {
          .shell {
            padding-left: 24px;
            padding-right: 24px;
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
            padding: 88px 0;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.85fr);
            gap: 42px;
          }

          .hero-deck {
            font-size: 18px;
          }

          .summary-layout {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .summary-layout h2,
          .summary-layout__lead {
            max-width: 760px;
          }

          .article-layout {
            display: block;
            max-width: 900px;
          }

          .desktop-toc {
            display: none;
          }

          .mobile-toc {
            display: block;
          }

          .lifecycle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .final-cta {
            grid-template-columns: 1fr;
          }

          .final-cta .cta-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 820px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy,
          .hero-copy h1,
          .hero-deck {
            max-width: 790px;
          }

          .hero-visual {
            max-width: 680px;
          }

          .takeaway-list,
          .definition-grid,
          .scope-panel,
          .check-list--columns,
          .quality-note__blocks,
          .two-column-module,
          .toolkit-grid,
          .release-gate__grid,
          .engagement-panel {
            grid-template-columns: 1fr;
          }

          .takeaway:nth-child(2) {
            border-top: 1px solid rgba(193, 29, 99, 0.18);
          }

          .definition-grid span:nth-last-child(-n + 2) {
            border-bottom: 1px solid var(--line);
          }

          .definition-grid span:last-child {
            border-bottom: 0;
          }

          .scope-group:nth-child(odd) {
            border-right: 0;
          }

          .scope-group:nth-child(-n + 3) {
            border-bottom: 1px solid var(--line);
          }

          .risk-panel,
          .team-note,
          .severity-note {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .toolkit-item,
          .toolkit-item + .toolkit-item {
            padding: 28px 0;
            border-left: 0;
          }

          .toolkit-item + .toolkit-item {
            border-top: 1px solid rgba(193, 29, 99, 0.18);
          }

          .failure-row {
            grid-template-columns: minmax(180px, 0.7fr) minmax(0, 1.3fr);
          }

          .failure-row__response {
            grid-column: 1 / -1;
            padding: 16px 0 0;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .source-row {
            grid-template-columns: 220px minmax(0, 1fr);
          }

          .source-row .editorial-link {
            grid-column: 2;
          }
        }

        @media (max-width: 680px) {
          .stepes-guide {
            font-size: 17px;
          }

          .shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          h1 {
            font-size: 38px;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          .hero {
            padding: 68px 0 64px;
          }

          .hero-deck,
          .section-intro,
          .workstream__validates,
          .conclusion-copy p,
          .final-cta p {
            font-size: 17px;
          }

          .hero-actions,
          .cta-actions {
            width: 100%;
          }

          .hero-actions .button,
          .final-cta .button {
            width: 100%;
          }

          .hero-utility {
            display: grid;
            gap: 6px;
            font-size: 14px;
          }

          .hero-utility span:not(:last-child)::after {
            display: none;
          }

          .hero-visual {
            padding: 22px;
            border-radius: 24px;
          }

          .hero-visual__body {
            grid-template-columns: 54px minmax(0, 1fr);
            gap: 16px;
          }

          .hero-visual__icon {
            width: 54px;
            height: 54px;
          }

          .hero-visual__gate {
            align-items: flex-start;
            flex-direction: column;
          }

          .summary-section,
          .sources-section,
          .related-section {
            padding: 64px 0;
          }

          .takeaway-list {
            grid-template-columns: 1fr;
          }

          .article-region {
            padding-top: 64px;
          }

          .article-section {
            padding-bottom: 64px;
          }

          .article-section + .article-section {
            padding-top: 64px;
          }

          .comparison-row,
          .support-row,
          .regression-level {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .recommendation-callout,
          .quality-note {
            padding: 22px;
          }

          .scope-group {
            padding: 24px;
          }

          .responsive-table,
          .responsive-table tbody,
          .responsive-table tr,
          .responsive-table td {
            display: block;
            width: 100%;
          }

          .responsive-table thead {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }

          .responsive-table tr {
            padding: 16px 18px;
            border-bottom: 1px solid var(--line);
          }

          .responsive-table tr:last-child {
            border-bottom: 0;
          }

          .responsive-table td {
            display: grid;
            grid-template-columns: minmax(110px, 39%) minmax(0, 1fr);
            gap: 14px;
            padding: 8px 0;
            border: 0;
            font-size: 16px;
          }

          .responsive-table td::before {
            color: var(--ink);
            content: attr(data-label);
            font-weight: 600;
          }

          .lifecycle-panel {
            padding: 30px 24px;
            border-radius: 24px;
          }

          .lifecycle-grid {
            grid-template-columns: 1fr;
          }

          .lifecycle-stage {
            min-height: auto;
          }

          .lifecycle-stage__number {
            margin-bottom: 16px;
          }

          .checklist-intro-panel {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .checklist-intro-panel__count {
            text-align: left;
          }

          .workstream {
            padding: 54px 0;
          }

          .workstream__heading {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 14px;
          }

          .workstream__heading h3 {
            font-size: 24px;
          }

          .workstream__why,
          .workstream__checklist,
          .journey-strip,
          .quality-note,
          .workstream__footer {
            margin-left: 0;
          }

          .workstream__why {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .journey-strip__grid {
            grid-template-columns: 1fr;
          }

          .workstream__footer {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .owner-block {
            padding: 24px 0 0;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .failure-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .failure-row__response {
            grid-column: auto;
          }

          .toolkit-panel,
          .release-gate {
            padding: 26px 22px;
            border-radius: 24px;
          }

          .support-actions {
            display: grid;
            gap: 4px;
          }

          .faq-question {
            font-size: 17px;
          }

          .faq-answer {
            padding-right: 0;
          }

          .source-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .source-row .editorial-link {
            grid-column: auto;
          }

          .conclusion-section {
            padding: 72px 0 64px;
          }

          .related-header {
            display: block;
          }

          .related-header .editorial-link {
            margin-top: 16px;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .related-item,
          .related-item:nth-child(2),
          .related-item:nth-child(-n + 2) {
            min-height: auto;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .related-item:last-child {
            border-bottom: 0;
          }

          .final-cta-section {
            padding-bottom: 72px;
          }

          .final-cta {
            padding: 38px 24px;
            border-radius: 24px;
          }
        }

        @media (max-width: 390px) {
          h1 {
            font-size: 36px;
          }

          .hero-visual__topline,
          .hero-visual__row {
            align-items: flex-start;
          }

          .hero-visual__row {
            flex-direction: column;
            gap: 3px;
            padding: 13px 0;
          }

          .responsive-table td {
            grid-template-columns: 1fr;
            gap: 3px;
          }

          .workstream__heading {
            grid-template-columns: 1fr;
          }

          .workstream__number {
            padding-top: 0;
          }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software Quality Assurance</p>
            <h1>Software Localization Testing Checklist</h1>
            <p className="hero-deck">
              A translated resource file is not a release-ready product. Use this checklist to validate language, interface presentation, functionality, locale behavior, accessibility, and technical performance within the actual application.
            </p>
            <div className="hero-actions">
              <a
                className="button button--primary"
                href={sectionUrl("software-localization-testing-checklist")}
                onClick={(event) => jumpTo(event, "software-localization-testing-checklist")}
              >
                Start the Checklist <ArrowRight />
              </a>
              <a
                className="button button--secondary"
                href={sectionUrl("download-the-testing-toolkit")}
                onClick={(event) => jumpTo(event, "download-the-testing-toolkit")}
              >
                Download the Checklist <DownloadIcon />
              </a>
            </div>
            <div className="hero-utility" aria-label="Guide features">
              <span>11 Testing Workstreams</span>
              <span>Risk-Based Defect Prioritization</span>
              <span>Release Approval Framework</span>
              <span>PDF + Editable Worksheet</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-heading">
        <div className="shell summary-layout">
          <div>
            <h2 id="key-takeaways-heading">Key Takeaways</h2>
            <p className="summary-layout__lead">
              Release-ready localization combines controlled scope, in-context review, technical validation, risk-based decisions, and documented approval.
            </p>
          </div>
          <div className="takeaway-list">
            {takeaways.map((item) => (
              <div className="takeaway" key={item.title}>
                <span className="takeaway__marker">
                  <CheckIcon size={16} />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="article-region">
        <div className="shell">
          <div className="article-layout">
            <aside className="desktop-toc" aria-label="In this guide">
              <p className="toc-title">In This Guide</p>
              <nav>
                <ul className="toc-list">
                  {tocItems.map((item) => (
                    <li className={activeId === item.id ? "is-active" : ""} key={item.id}>
                      <a href={sectionUrl(item.id)} onClick={(event) => jumpTo(event, item.id)}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="article-main">
              <details className="mobile-toc">
                <summary>
                  <span>In This Guide</span>
                  <ChevronDown />
                </summary>
                <nav aria-label="In this guide">
                  <ul className="mobile-toc__list">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a href={sectionUrl(item.id)} onClick={(event) => jumpTo(event, item.id)}>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </details>

              <section className="article-section" id="what-is-software-localization-testing">
                <div className="reading-wide">
                  <h2>What Is Software Localization Testing?</h2>
                  <p className="section-intro">
                    Software localization testing evaluates whether a translated and adapted product works correctly for users in a specific language, country, or locale.
                  </p>
                  <p>
                    It goes beyond reviewing translations in a spreadsheet or resource file. Testers examine language inside the actual application, where meaning is influenced by screen context, user role, surrounding controls, dynamic values, visual hierarchy, and the sequence of actions a user must complete.
                  </p>
                </div>

                <div className="definition-grid" aria-label="Software localization testing coverage">
                  {definitionAreas.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="comparison-rows" aria-label="Related software quality activities">
                  <div className="comparison-row">
                    <h3>Translation Review</h3>
                    <p>Evaluates accuracy, fluency, terminology, tone, and completeness, often before the translation is integrated into the product.</p>
                  </div>
                  <div className="comparison-row">
                    <h3>In-Context Linguistic Testing</h3>
                    <p>Evaluates language inside the application and reveals problems that are difficult to identify from isolated strings.</p>
                  </div>
                  <div className="comparison-row">
                    <h3>Visual Localization Testing</h3>
                    <p>Evaluates text fit, layout, spacing, fonts, line wrapping, interface hierarchy, and presentation across supported screens.</p>
                  </div>
                  <div className="comparison-row">
                    <h3>Functional Localization Testing</h3>
                    <p>Evaluates whether language, script, input, locale settings, or market-specific behavior interferes with software functionality.</p>
                  </div>
                  <div className="comparison-row">
                    <h3>General Software QA</h3>
                    <p>Validates the overall product. Localization testing concentrates on issues introduced or exposed by multilingual and locale-specific behavior.</p>
                  </div>
                </div>

                <aside className="recommendation-callout">
                  <strong>Focus on the highest-value localization risks.</strong>
                  <p>The objective is not to repeat every general software test for every language. Identify the test cases most likely to reveal language-, locale-, script-, and market-specific failures.</p>
                </aside>
                <div className="support-actions">
                  <EditorialLink href={links.internationalization}>Understand Internationalization vs. Localization</EditorialLink>
                </div>
              </section>

              <section className="article-section" id="define-the-localized-release-scope">
                <div className="reading-wide">
                  <h2>Define the Localized Release Scope</h2>
                  <p className="section-intro">
                    A reliable test plan begins with a clearly defined release scope. A list of target languages is not enough.
                  </p>
                  <p>For each localized release, document the product version, build, features, environments, locale requirements, user roles, critical workflows, and expected review coverage.</p>
                </div>

                <div className="scope-panel">
                  {scopeGroups.map((group) => (
                    <div className="scope-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul className="plain-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="module-title">Build a Localized Test Coverage Matrix</h3>
                <p className="reading">Use a matrix to make planned coverage visible, assign ownership, and prevent gaps across locale, build, platform, user role, and critical journey combinations.</p>
                <ResponsiveTable
                  headers={["Locale", "Build", "Platform", "Environment", "User Role", "Critical Journeys", "Status"]}
                  rows={coverageRows}
                />

                <div className="risk-panel">
                  <h3>Use Risk-Based Coverage</h3>
                  <ul className="plain-list">
                    {riskCoverageItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="support-actions">
                  <EditorialLink href={links.softwareGuide}>Plan the Broader Software and SaaS Localization Program</EditorialLink>
                </div>
              </section>

              <section className="article-section" id="build-the-localization-testing-team">
                <div className="reading-wide">
                  <h2>Build the Localization Testing Team</h2>
                  <p className="section-intro">
                    Software localization testing crosses several disciplines. Clear ownership helps teams resolve issues faster and prevents defects from moving repeatedly among localization, engineering, QA, and product stakeholders.
                  </p>
                  <p>A small organization may assign several responsibilities to one person. The responsibilities themselves should still be explicit.</p>
                </div>

                <ResponsiveTable headers={["Role", "Primary Responsibilities"]} rows={roles} />

                <div className="team-note">
                  <h3>Confirm Ownership Before Testing</h3>
                  <ul className="plain-list">
                    {ownershipQuestions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="article-section" id="follow-the-localization-testing-lifecycle">
                <div className="reading-wide">
                  <h2>Follow the Localization Testing Lifecycle</h2>
                  <p className="section-intro">
                    Localization testing is most effective when it begins before the final release candidate and continues through production verification.
                  </p>
                </div>

                <div className="lifecycle-panel">
                  <p className="eyebrow eyebrow--dark">From File QA to Production</p>
                  <h3 className="lifecycle-panel__title">Localization Testing Lifecycle</h3>
                  <p className="lifecycle-panel__intro">Move from predictable file checks to real product validation, disciplined defect resolution, formal approval, and post-deployment confirmation.</p>
                  <div className="lifecycle-grid">
                    {lifecycleStages.map((stage, index) => (
                      <div className="lifecycle-stage" key={stage.title}>
                        <span className="lifecycle-stage__number">{String(index + 1).padStart(2, "0")}</span>
                        <h3>{stage.title}</h3>
                        <p>{stage.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="support-actions">
                  <EditorialLink href={links.continuousLocalization}>Integrate Testing With Continuous Software Localization</EditorialLink>
                </div>
              </section>

              <section className="article-section" id="software-localization-testing-checklist">
                <div className="reading-wide">
                  <h2>Software Localization Testing Checklist</h2>
                  <p className="section-intro">
                    Use these 11 workstreams as a practical framework, then adapt the depth and coverage to your product architecture, supported environments, target markets, and release risks.
                  </p>
                </div>

                <div className="checklist-intro-panel">
                  <p>The essential checklist stays visible on the page so product, localization, engineering, and QA teams can use the guidance without relying on a separate download.</p>
                  <div className="checklist-intro-panel__count">
                    <strong>11</strong>
                    <span>testing workstreams</span>
                  </div>
                </div>

                <div className="workstreams">
                  {workstreams.map((workstream) => (
                    <Workstream workstream={workstream} key={workstream.number} />
                  ))}
                </div>
              </section>

              <section className="article-section" id="prioritize-localization-defects">
                <div className="reading-wide">
                  <h2>Prioritize and Document Localization Defects</h2>
                  <p className="section-intro">
                    A clear severity model helps teams focus on the issues that create the greatest user and business risk. Severity should be based on impact, not on whether an issue appears linguistic, visual, or technical.
                  </p>
                </div>

                <ResponsiveTable
                  headers={["Severity", "Definition", "Examples", "Typical Release Decision"]}
                  rows={severityRows}
                />

                <div className="severity-note">
                  <h3>Factors to Consider</h3>
                  <ul className="plain-list">
                    {severityFactors.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <aside className="recommendation-callout" style={{ marginTop: "34px" }}>
                  <strong>A one-word defect can still be critical.</strong>
                  <p>A mistranslated warning, permission, dosage, payment instruction, irreversible action, or legal agreement may create far more risk than a highly visible layout problem.</p>
                </aside>

                <h3 className="module-title">Document Enough Information to Resolve the Issue</h3>
                <p className="reading">A useful defect report gives the responsible team enough information to reproduce, understand, correct, and retest the issue.</p>

                <div className="two-column-module">
                  <div className="field-panel">
                    <h3>Localization Defect Record</h3>
                    <Checklist items={defectFields} columns={false} />
                  </div>
                  <div className="field-panel field-panel--tinted">
                    <h3>Recommended Defect Categories</h3>
                    <div className="category-cloud">
                      {defectCategories.map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                    <h4 style={{ marginTop: "28px" }}>Identify the Root Cause</h4>
                    <ul className="plain-list">
                      {rootCauseTypes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="article-section" id="complete-regression-testing">
                <div className="reading-wide">
                  <h2>Complete Regression Testing</h2>
                  <p className="section-intro">
                    Regression testing confirms that the correction works and has not introduced new problems in shared strings, components, workflows, locales, or platforms.
                  </p>
                </div>

                <div className="regression-levels">
                  {regressionLevels.map(([title, text]) => (
                    <div className="regression-level" key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>

                <h3 className="module-title">Match Regression Scope to the Change</h3>
                <ResponsiveTable headers={["Change Type", "Recommended Regression Scope"]} rows={regressionRows} />
                <p className="reading">Regression depth should reflect the breadth and risk of the correction. A localized wording change and a shared rendering-code change should not receive the same level of retesting.</p>
              </section>

              <section className="article-section" id="approve-the-localized-release">
                <div className="reading-wide">
                  <h2>Approve the Localized Release</h2>
                  <p className="section-intro">
                    Testing should end with a documented release decision, not an informal assumption that the product is ready.
                  </p>
                </div>

                <div className="release-gate">
                  <div className="release-gate__grid">
                    <div>
                      <h3>Localization Release Gate</h3>
                      <Checklist items={releaseGateFields} columns={false} />
                    </div>
                    <div className="release-gate__decision">
                      <span>Release Decision</span>
                      <strong>Approve Each Locale With Clear Evidence</strong>
                      <p>A product may be ready in one language and blocked in another. Record who approved each localized experience and which risks were accepted.</p>
                    </div>
                  </div>
                </div>

                <h3 className="module-title">Recommended Release Criteria</h3>
                <Checklist items={releaseCriteria} />
              </section>

              <section className="article-section" id="run-a-post-release-smoke-test">
                <div className="reading-wide">
                  <h2>Run a Post-Release Smoke Test</h2>
                  <p className="section-intro">
                    A targeted production smoke test confirms that the approved localized build, assets, settings, and integrations were deployed correctly.
                  </p>
                </div>

                <div className="field-panel field-panel--tinted">
                  <Checklist items={postReleaseChecks} />
                </div>

                <p className="reading" style={{ marginTop: "28px" }}>The production smoke test does not need to repeat the entire pre-release plan unless deployment changed the application substantially. Concentrate on the areas most likely to fail during packaging, configuration, integration, caching, or deployment.</p>
              </section>

              <section className="article-section" id="avoid-common-localization-testing-failures">
                <div className="reading-wide">
                  <h2>Avoid Common Localization Testing Failures</h2>
                  <p className="section-intro">
                    Strong localization testing programs control the build, test the real product, assign the right owners, and preserve locale-level visibility through release.
                  </p>
                </div>

                <div className="failure-list">
                  {commonFailures.map((item) => (
                    <div className="failure-row" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.problem}</p>
                      <div className="failure-row__response">
                        <strong>Better Approach</strong>
                        <p>{item.response}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="article-section" id="download-the-testing-toolkit">
                <div className="toolkit-panel">
                  <p className="eyebrow">Practical Tools</p>
                  <h2>Download the Software Localization Testing Toolkit</h2>
                  <p className="section-intro">Use the downloadable toolkit to plan coverage, assign ownership, record defects, and document localized release approval.</p>

                  <div className="toolkit-grid">
                    {toolkitItems.map((item) => (
                      <div className="toolkit-item" key={item.title}>
                        <span className="toolkit-item__type">{item.type}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <ul className="plain-list">
                          {item.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                        <a className="download-link" href={item.href}>
                          <DownloadIcon /> {item.label}
                        </a>
                      </div>
                    ))}
                  </div>

                  <p className="toolkit-footnote">The complete checklist remains available on this page. The downloadable formats provide convenient working tools for real projects.</p>
                </div>
              </section>

              <section className="article-section" id="how-stepes-supports-software-localization-testing">
                <div className="reading-wide">
                  <h2>How Stepes Supports Software Localization Testing</h2>
                  <p className="section-intro">
                    Stepes helps product, engineering, and localization teams validate multilingual software through structured quality assurance and in-context testing workflows.
                  </p>
                  <p>Support can be configured for a defined software release or integrated into an ongoing localization program.</p>
                </div>

                <div className="support-list">
                  {supportCapabilities.map(([title, text]) => (
                    <div className="support-row" key={title}>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>

                <div className="engagement-panel">
                  <h3>Project-Based or Continuous Engagement</h3>
                  <ul className="plain-list">
                    {engagementModels.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="support-actions">
                  <EditorialLink href={links.softwareLocalization}>Explore Software Localization Services</EditorialLink>
                  <EditorialLink href={links.softwareTranslation}>Explore Software &amp; SaaS Translation Services</EditorialLink>
                  <EditorialLink href={links.softwareApi}>Review the Software Localization API</EditorialLink>
                </div>
              </section>

              <section className="article-section" id="frequently-asked-questions">
                <div className="reading-wide">
                  <h2>Frequently Asked Questions</h2>
                  <p className="section-intro">Use these answers to plan the scope, ownership, automation, timing, and approval model for your next multilingual software release.</p>
                </div>

                <div className="faq-panel">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    const answerId = `faq-answer-${index}`;
                    return (
                      <div className="faq-item" key={faq.question}>
                        <button
                          className="faq-question"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={answerId}
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown />
                        </button>
                        <div className="faq-answer" id={answerId} hidden={!isOpen}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="sources-section" aria-labelledby="sources-heading">
        <div className="shell sources-shell">
          <h2 id="sources-heading">Sources and References</h2>
          <p className="section-intro">These authoritative standards and technical resources support the guide's locale, bidirectional-text, and accessibility guidance.</p>
          <div className="source-list">
            {sources.map((source) => (
              <div className="source-row" key={source.title}>
                <div>
                  <strong>{source.title}</strong>
                  <span>{source.organization}</span>
                </div>
                <p>{source.text}</p>
                <EditorialLink href={source.href} external>
                  {source.label}
                </EditorialLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="conclusion-section">
        <div className="shell conclusion-copy">
          <h2>Prepare Every Localized Release for Real Users</h2>
          <p>Software localization quality cannot be confirmed from translated strings alone. Define the test matrix, assign ownership, validate the integrated product, document defects consistently, retest corrections, record locale-level approval, and verify the production deployment.</p>
          <p>Use this checklist as a starting point, then adapt the coverage to your product architecture, users, markets, and release risks.</p>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-resources-heading">
        <div className="shell">
          <div className="related-header">
            <h2 id="related-resources-heading">Related Software Localization Resources</h2>
            <EditorialLink href={links.localizationGuides}>Explore All Localization Guides</EditorialLink>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <p className="eyebrow">{resource.eyebrow}</p>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <EditorialLink href={resource.href}>{resource.title}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div>
              <p className="eyebrow">Plan Your Next Release</p>
              <h2>Build a Confident Multilingual Testing and Release Process</h2>
              <p>Talk with Stepes about in-context linguistic review, visual and functional validation, locale testing, regression support, and recurring software localization workflows.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={links.contact}>
                Talk to a Software Localization Expert <ArrowRight />
              </a>
              <a className="button button--secondary" href={links.softwareLocalization}>
                Explore Software Localization Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
