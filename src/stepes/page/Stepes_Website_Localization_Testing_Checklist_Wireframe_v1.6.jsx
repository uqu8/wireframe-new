import React, { useEffect, useRef, useState } from "react";

const CANONICAL =
  "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/";

const tocGroups = [
  {
    label: "Plan and Prioritize",
    items: [
      ["Why Localization Testing Matters", "why-localization-testing-matters"],
      ["How to Use the Checklist", "how-to-use-the-checklist"],
      ["Define the Testing Scope", "testing-scope"],
      ["Assign Testing Ownership", "testing-ownership"],
      ["Localization Launch Gate", "localization-launch-gate"],
    ],
  },
  {
    label: "Test the Experience",
    items: [
      ["Linguistic Quality", "linguistic-testing"],
      ["Visual Layout", "visual-layout-testing"],
      ["Responsive Behavior", "responsive-testing"],
      ["Functional Journeys", "functional-testing"],
      ["Locale Conventions", "locale-testing"],
      ["RTL Experiences", "rtl-testing"],
      ["Multilingual SEO", "multilingual-seo-testing"],
      ["Accessibility", "accessibility-testing"],
      ["Media and Downloads", "media-testing"],
      ["Performance and Integrations", "performance-and-integrations"],
    ],
  },
  {
    label: "Approve and Maintain",
    items: [
      ["Defect Management", "defect-management"],
      ["Final Launch Approval", "launch-approval"],
      ["Post-Launch Validation", "post-launch-validation"],
      ["Common Testing Mistakes", "localization-testing-mistakes"],
      ["Frequently Asked Questions", "localization-testing-faq"],
      ["Download the Checklist", "download-checklist"],
      ["Standards and References", "standards-and-references"],
      ["Related Website Guides", "related-resources"],
    ],
  },
];

const takeaways = [
  {
    title: "Test the complete experience, not only translated strings.",
    text: "Review language inside the website together with layout, routing, forms, search, accessibility, media, and third-party components.",
  },
  {
    title: "Prioritize by user and business risk.",
    text: "Critical journeys, regulated content, transactions, account access, privacy, and high-visibility pages deserve deeper coverage than low-risk informational content.",
  },
  {
    title: "Combine linguistic and technical expertise.",
    text: "In-market reviewers, QA engineers, developers, designers, SEO specialists, accessibility experts, and regional stakeholders evaluate different types of risk.",
  },
  {
    title: "Define severity before testing begins.",
    text: "A shared launch gate helps teams distinguish blockers from high-priority corrections, standard fixes, and controlled post-launch improvements.",
  },
  {
    title: "Correct root causes and retest shared components.",
    text: "A glossary, template, extraction rule, locale configuration, or routing defect can affect many pages and languages—not only the screen where it was found.",
  },
  {
    title: "Validate production immediately after release.",
    text: "Caching, redirects, consent systems, analytics, integrations, and deployment settings can behave differently from the approved staging environment.",
  },
];

const qualityDimensions = [
  ["Linguistic", "Content is accurate, complete, natural, and consistent."],
  ["Visual", "Translated content fits and remains easy to read."],
  ["Responsive", "The experience works across supported screen sizes."],
  ["Functional", "Visitors can complete important tasks successfully."],
  ["Locale", "Formats and conventions match the intended market."],
  ["Directional", "RTL and mixed-direction content displays correctly."],
  ["Search", "Localized pages can be discovered and understood."],
  ["Accessibility", "Localization preserves inclusive access."],
  ["Operational", "Analytics, consent, routing, and integrations work."],
  ["Market", "Products, claims, imagery, and requirements are appropriate."],
];

const useSteps = [
  {
    title: "Define the Release Scope",
    text: "Identify languages, locales, templates, user journeys, devices, browsers, integrations, and market requirements.",
  },
  {
    title: "Prioritize by Risk",
    text: "Give the greatest attention to content and functionality that affect comprehension, safety, privacy, conversion, or trust.",
  },
  {
    title: "Prepare the Environment",
    text: "Provide representative content, realistic test data, required application states, and stable access for every reviewer.",
  },
  {
    title: "Assign Testing Owners",
    text: "Make responsibility explicit across language, functionality, design, SEO, accessibility, market review, and final approval.",
  },
  {
    title: "Record and Classify Defects",
    text: "Use one issue format and a shared severity model so findings can be compared, routed, and resolved consistently.",
  },
  {
    title: "Correct and Retest",
    text: "Verify the correction in context and test other pages or locales that use the same component, rule, or integration.",
  },
  {
    title: "Approve the Release",
    text: "Complete a documented go, conditional-go, or no-go decision with clear owners for every accepted risk.",
  },
  {
    title: "Validate Production",
    text: "Run a focused smoke test after deployment to confirm critical journeys, routing, analytics, SEO, consent, and assets.",
  },
];

const scopeGroups = [
  {
    title: "Languages and Locales",
    items: [
      "List every target language and regional locale in the release.",
      "Distinguish regional variants such as French for France and French for Canada.",
      "Identify currencies, measurements, address conventions, and regulatory differences.",
      "Identify right-to-left and mixed-direction requirements.",
      "Document source-language fallback behavior.",
      "Confirm which pages intentionally remain in another language.",
      "Identify locale-specific content without a direct source-page equivalent.",
    ],
  },
  {
    title: "Pages, Templates, and Components",
    items: [
      "Inventory reusable page templates rather than selecting random URLs.",
      "Include the homepage, primary landing pages, and high-traffic content.",
      "Include product, service, category, article, and resource templates.",
      "Include navigation, footer, breadcrumbs, search, account controls, and selectors.",
      "Include forms, modals, alerts, tooltips, consent banners, and error states.",
      "Include market-specific pages that differ from the source website.",
      "Include downloadable documents and embedded applications.",
    ],
  },
  {
    title: "Critical User Journeys",
    items: [
      "Find a product, service, or support resource.",
      "Submit a lead-generation or support form.",
      "Register, log in, and recover an account.",
      "Search, filter, sort, and navigate results.",
      "Purchase, book, schedule, or register.",
      "Download an important document.",
      "Change a language, locale, or market.",
      "Manage privacy and consent preferences.",
    ],
  },
  {
    title: "Device, Browser, and Test Depth",
    items: [
      "Confirm supported desktop and mobile browsers.",
      "Include representative tablet and mobile widths.",
      "Include portrait and landscape orientation where relevant.",
      "Test supported operating systems and input methods.",
      "Choose full-page, template-based, or risk-based coverage deliberately.",
      "Plan regression testing after shared component changes.",
      "Reserve a focused production smoke test after release.",
    ],
  },
];

const coverageRows = [
  {
    locale: "fr-CA",
    target: "Checkout template",
    journey: "Complete purchase",
    environment: "Mobile Safari",
    risk: "Critical",
    owner: "Web QA",
    status: "Not Started",
  },
  {
    locale: "ar-SA",
    target: "Account registration",
    journey: "Create account",
    environment: "Chrome desktop",
    risk: "High",
    owner: "QA + RTL Reviewer",
    status: "In Progress",
  },
  {
    locale: "de-DE",
    target: "Product template",
    journey: "Request information",
    environment: "Responsive set",
    risk: "Medium",
    owner: "Linguistic QA",
    status: "Passed",
  },
];

const ownershipRows = [
  {
    area: "Language and Terminology",
    primary: "In-market linguist or professional reviewer",
    support: "Localization owner and subject-matter expert",
  },
  {
    area: "Visual Layout",
    primary: "Web QA or design",
    support: "In-language reviewer and front-end developer",
  },
  {
    area: "Responsive Behavior",
    primary: "Web QA",
    support: "Design and accessibility reviewer",
  },
  {
    area: "Functional Journeys",
    primary: "QA or engineering",
    support: "Linguist and product owner",
  },
  {
    area: "Locale Conventions",
    primary: "Regional stakeholder",
    support: "Linguist and business owner",
  },
  {
    area: "RTL Behavior",
    primary: "Native RTL reviewer",
    support: "QA and front-end developer",
  },
  {
    area: "Multilingual SEO",
    primary: "SEO specialist",
    support: "Developer and localization owner",
  },
  {
    area: "Accessibility",
    primary: "Accessibility specialist",
    support: "QA, linguist, and design",
  },
  {
    area: "Market and Regulatory Content",
    primary: "Regional or subject-matter owner",
    support: "Legal, compliance, and localization",
  },
  {
    area: "Analytics and Consent",
    primary: "Web operations or analytics",
    support: "Privacy and engineering",
  },
  {
    area: "Final Release Approval",
    primary: "Localization or release owner",
    support: "Designated workstream approvers",
  },
];

const launchLevels = [
  {
    level: "Launch Blocker",
    impact:
      "Prevents a critical task or creates unacceptable legal, safety, privacy, financial, accessibility, or reputational risk.",
    examples:
      "Broken checkout, materially incorrect safety information, unusable registration, or wrong-market routing.",
    decision: "Do not launch.",
  },
  {
    level: "High Priority",
    impact:
      "Significantly affects comprehension, usability, conversion, brand credibility, or customer trust.",
    examples:
      "Broken localized navigation, severe text clipping, or important untranslated content.",
    decision: "Correct before launch unless formally mitigated.",
  },
  {
    level: "Standard Correction",
    impact: "Creates a visible but limited quality problem without blocking an important task.",
    examples: "Noncritical terminology inconsistency or a minor layout defect.",
    decision: "Correct before launch when practical or schedule promptly.",
  },
  {
    level: "Post-Launch Improvement",
    impact: "Affects polish or optimization without compromising core use.",
    examples: "Minor spacing refinement or an optional copy improvement.",
    decision: "Track through an approved follow-up plan.",
  },
];

const exitCriteria = [
  "No unresolved launch blockers remain.",
  "High-priority issues are corrected or formally accepted with documented mitigation.",
  "Critical user journeys have passed.",
  "Required linguistic review is complete.",
  "Representative device and browser coverage is complete.",
  "Applicable RTL, SEO, accessibility, analytics, consent, and integration checks are complete.",
  "Corrections have been retested.",
  "Designated owners have approved the release.",
  "Accepted risks have owners and resolution dates.",
  "Production validation and rollback responsibilities are assigned.",
];

const checklistSections = [
  {
    id: "linguistic-testing",
    title: "Linguistic Quality and Content Completeness",
    intro:
      "Confirm that the complete visible and interactive experience is accurate, natural, consistent, and appropriate for the intended audience.",
    owner: "In-market linguist or professional reviewer",
    items: [
      "Confirm that all intended content is translated.",
      "Identify source-language text in navigation, buttons, footers, forms, banners, tabs, filters, modals, and tooltips.",
      "Review headings, body copy, calls to action, labels, and supporting text for accuracy and clarity.",
      "Confirm that terminology follows the approved glossary.",
      "Check product names, feature names, branded terms, and trademarks.",
      "Review grammar, spelling, punctuation, capitalization, and style.",
      "Confirm that tone and formality suit the audience and market.",
      "Review ambiguous strings in their actual interface context.",
      "Confirm that short labels remain clear after translation.",
      "Verify variables, tokens, placeholders, and dynamic values.",
      "Confirm plural, gender, case, and grammatical variants where relevant.",
      "Review dates, prices, quantities, names, and other values inserted into translated sentences.",
      "Test error messages, alerts, empty states, confirmations, and system notifications.",
      "Review content generated by plugins, ecommerce tools, search systems, and third-party components.",
      "Check localized emails, text messages, and confirmation communications triggered by website actions.",
      "Verify legal, safety, medical, financial, privacy, or regulated content with an appropriately qualified reviewer.",
      "Confirm that market-specific content is complete and accurate.",
      "Remove offers, products, services, claims, or contact details that do not apply to the market.",
      "Check that linked documents match the language and locale indicated by the link.",
      "Confirm that recently revised source content has not been omitted from the localized version.",
    ],
    blockers: [
      "Materially incorrect safety, legal, financial, or regulated information",
      "Untranslated content inside a critical user journey",
      "Language that changes the meaning of an important instruction",
      "Incorrect product, service, eligibility, or market information",
    ],
  },
  {
    id: "visual-layout-testing",
    title: "Visual Layout and Interface Integrity",
    intro:
      "Confirm that translated content fits, remains readable, and preserves the intended visual hierarchy across every reusable component.",
    owner: "Web QA and design, supported by an in-language reviewer",
    items: [
      "Check headings, paragraphs, buttons, tabs, menus, and labels for clipping.",
      "Confirm that expanded text does not overlap nearby content.",
      "Review line breaks, word wrapping, and hyphenation.",
      "Check cards, tables, breadcrumbs, accordions, tooltips, banners, and modals.",
      "Confirm that buttons remain readable and fully interactive.",
      "Check whether navigation items wrap or disappear.",
      "Review labels beside icons, fields, switches, and other controls.",
      "Confirm that long translated text does not push important content outside the visible component.",
      "Test realistic long names, addresses, prices, and validation messages.",
      "Verify that translated content preserves a clear visual hierarchy.",
      "Check font support for accented characters, non-Latin scripts, combining marks, and symbols.",
      "Confirm that font weight, line height, and spacing remain readable.",
      "Check for corrupted characters, missing glyphs, or replacement boxes.",
      "Review capitalization treatments that may not work in the target language.",
      "Check images, diagrams, charts, screenshots, and interface examples that contain text.",
      "Confirm that translated text does not obscure images or essential controls.",
      "Review icons and symbols for market appropriateness.",
      "Confirm that intentional alignment and spacing survive localization.",
      "Check print views or generated documents where applicable.",
    ],
    blockers: [
      "Hidden or unusable controls",
      "Unsupported characters or corrupted text",
      "Overlapping content that prevents reading or completing a task",
      "Navigation that becomes inaccessible after translation",
    ],
  },
  {
    id: "responsive-testing",
    title: "Responsive, Device, and Browser Behavior",
    intro:
      "Ensure localized content remains usable across supported screen sizes, operating systems, browsers, zoom levels, and input methods.",
    owner: "Web QA, design, and accessibility",
    items: [
      "Test representative desktop, tablet, and mobile widths.",
      "Validate every supported responsive breakpoint.",
      "Test portrait and landscape orientations where relevant.",
      "Confirm that page content reflows without losing information or functionality.",
      "Check navigation, tables, filters, carousels, forms, and modals on small screens.",
      "Confirm that long labels do not push controls outside the viewport.",
      "Test sticky headers, floating actions, consent banners, and chat widgets.",
      "Confirm that overlays do not hide localized content or keyboard focus.",
      "Review touch-target size and spacing.",
      "Test the supported browser and operating-system combinations.",
      "Confirm that mobile menus open, close, scroll, and retain locale context.",
      "Test text resizing and browser zoom.",
      "Check whether tables and complex components have usable small-screen behavior.",
      "Verify that translated content remains readable without page-level horizontal scrolling.",
      "Test localized fonts on representative operating systems.",
      "Confirm that virtual keyboards do not obscure required fields or actions.",
      "Test lower-performance devices or slower connections where relevant to the market.",
    ],
  },
  {
    id: "functional-testing",
    title: "Navigation, Forms, and Critical User Journeys",
    intro:
      "Confirm that visitors can complete important tasks without unexpectedly returning to the source language or wrong market.",
    owner: "Web QA and engineering, with linguistic review of visible content",
    items: [
      "Test the primary navigation and footer.",
      "Verify breadcrumbs and contextual links.",
      "Test the language and market selectors.",
      "Confirm that the selected language persists during navigation.",
      "Confirm that language switching preserves the equivalent page when one exists.",
      "Test fallback behavior when an equivalent localized page is unavailable.",
      "Validate locale-specific URL routing.",
      "Test redirects from previous localized URLs.",
      "Confirm that links do not unexpectedly return users to the source language.",
      "Test on-site search using target-language terminology.",
      "Review localized search results, empty states, filters, sorting, and pagination.",
      "Submit every important form.",
      "Check field labels, instructions, required-field indicators, and validation.",
      "Test valid and invalid locale-specific input.",
      "Review localized success, warning, and error messages.",
      "Confirm that submitted data reaches the correct system and regional owner.",
      "Test account creation, login, logout, and password recovery.",
      "Verify profile and preference management.",
      "Test ecommerce carts, checkout, currency, tax, shipping, and payment behavior.",
      "Test appointment, booking, registration, and support journeys.",
      "Confirm that downloadable documents open correctly.",
      "Verify confirmation pages and triggered emails or messages.",
      "Test chat, maps, payment providers, scheduling tools, and embedded services.",
      "Confirm that locale context persists across domains, subdomains, and third-party tools.",
      "Test session expiration, access errors, and unusual application states.",
      "Confirm that users can recover from errors without changing language.",
    ],
    blockers: [
      "Broken checkout, registration, booking, login, or lead-generation forms",
      "Incorrect market, currency, tax, shipping, or payment behavior",
      "Critical journeys reverting to the wrong language",
      "Forms that reject valid local information",
      "Submissions routed to the wrong regional team",
    ],
  },
  {
    id: "locale-testing",
    title: "Locale Formats and Market Conventions",
    intro:
      "Confirm that dates, times, measurements, currencies, addresses, and other structured information behave as users expect in the intended market.",
    owner: "Regional stakeholder, in-market reviewer, and web operations",
    items: [
      "Confirm date order and formatting.",
      "Check time formats and time zones.",
      "Confirm first-day-of-week conventions where calendars are used.",
      "Check number grouping and decimal separators.",
      "Confirm percentage formatting.",
      "Verify currency code, symbol, placement, and decimal behavior.",
      "Confirm units of measurement.",
      "Test local address formats.",
      "Test postal codes and regional validation rules.",
      "Confirm telephone-number display and input.",
      "Check personal-name fields for flexible order and length.",
      "Avoid requiring fields that do not apply in every market.",
      "Verify honorifics and titles where used.",
      "Review sorting and alphabetical ordering.",
      "Check localized calendars where applicable.",
      "Confirm local payment and delivery information.",
      "Review tax, duty, and pricing presentation.",
      "Confirm local office, support, and escalation details.",
      "Verify market-specific policies and disclaimers.",
      "Confirm product sizes, specifications, and availability.",
      "Test localized promotional dates and time-limited offers.",
      "Check whether numeric or formatted data is being translated as static text instead of generated correctly.",
    ],
  },
  {
    id: "rtl-testing",
    title: "Right-to-Left and Bidirectional Experiences",
    intro:
      "Validate page direction, component order, icons, input behavior, punctuation, numbers, and embedded left-to-right strings for RTL and mixed-script experiences.",
    owner: "Native RTL reviewer and web QA engineer",
    items: [
      "Confirm that the page establishes the correct overall text direction.",
      "Review the order of navigation and primary layout regions.",
      "Check alignment of headings, body text, labels, fields, and controls.",
      "Confirm whether directional icons should be mirrored.",
      "Review arrows, back and next controls, progress indicators, sliders, and carousels.",
      "Confirm that nondirectional icons and logos are not mirrored unnecessarily.",
      "Test mixed right-to-left and left-to-right content.",
      "Check phone numbers, dates, currencies, email addresses, URLs, model numbers, and product codes.",
      "Review punctuation placement.",
      "Test text selection, cursor movement, insertion, and deletion.",
      "Test copied and pasted mixed-direction content.",
      "Review form fields that accept multiple scripts.",
      "Check tables, charts, timelines, and data visualizations.",
      "Confirm that mobile navigation and side panels open in the expected direction.",
      "Check breadcrumbs and step sequences.",
      "Test dynamically inserted user names, numbers, and values.",
      "Confirm the reading order for assistive technologies.",
      "Test error messages and tooltips containing mixed-direction content.",
    ],
    blockers: [
      "Reversed critical sequences",
      "Unusable forms or navigation",
      "Incorrectly rendered mixed-script values",
      "Controls that communicate the opposite direction or action",
    ],
  },
  {
    id: "multilingual-seo-testing",
    title: "Multilingual SEO and Discoverability",
    intro:
      "Confirm that search engines can discover, crawl, index, and associate every localized version with the intended language or market.",
    owner: "SEO specialist and web developer",
    items: [
      "Confirm that every indexable localized page has a unique, descriptive title.",
      "Review localized meta descriptions.",
      "Confirm one clear H1 and a logical heading hierarchy.",
      "Check that headings and page copy address the intended local search need.",
      "Review locale-specific URLs and translated slugs where used.",
      "Confirm that each page has the intended self-referencing canonical.",
      "Check that localized pages are not incorrectly canonicalized to the source page.",
      "Validate alternate-language annotations for all applicable versions.",
      "Confirm that each alternate set includes the page itself.",
      "Confirm reciprocal relationships between corresponding versions.",
      "Validate language and region codes.",
      "Include an appropriate fallback for unmatched languages where required.",
      "Confirm that localized pages are included in XML sitemaps.",
      "Check for accidental noindex directives.",
      "Confirm that robots rules do not block required pages or assets.",
      "Verify crawlable navigation and language-selection links.",
      "Review localized internal links.",
      "Test redirects from changed or retired localized URLs.",
      "Validate structured data against visible localized content.",
      "Confirm localized social-sharing metadata.",
      "Review localized image alt text where appropriate.",
      "Check whether faceted navigation, search results, or parameters create unintended indexable duplicates.",
      "Confirm that the rendered HTML contains the intended localized content and metadata.",
      "Verify important pages through the appropriate search-engine inspection tools after launch.",
    ],
    link: {
      label: "Plan international search strategy with the Multilingual SEO Guide",
      url: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
    },
  },
  {
    id: "accessibility-testing",
    title: "Accessibility and Inclusive Use",
    intro:
      "Ensure localization preserves access for people using screen readers, keyboards, magnification, captions, alternative input, and other assistive technologies.",
    owner: "Accessibility specialist, QA engineer, and in-language reviewer",
    items: [
      "Declare the correct default language for each page.",
      "Identify meaningful language changes within mixed-language content.",
      "Confirm the correct text direction.",
      "Review localized alt text for informative images.",
      "Confirm that decorative images do not receive distracting alternatives.",
      "Check headings and structural hierarchy.",
      "Confirm that visible field labels remain associated with their controls.",
      "Review localized accessible names and descriptions.",
      "Confirm that button and link purposes are understandable.",
      "Test keyboard navigation.",
      "Review focus order and focus visibility.",
      "Confirm that sticky elements and overlays do not obscure focused controls.",
      "Test screen-reader reading order.",
      "Check localized error identification and correction guidance.",
      "Confirm that required fields are communicated without relying on color alone.",
      "Test zoom, text resizing, and content reflow.",
      "Confirm that localized text remains usable at narrow viewport equivalents.",
      "Check color contrast after introducing market-specific assets.",
      "Localize captions, transcripts, and audio descriptions where required.",
      "Review localized text inside downloadable documents.",
      "Confirm that localized documents are themselves accessible.",
      "Test RTL reading order and mixed-language pronunciation.",
      "Confirm that changing the language does not reset accessibility preferences unexpectedly.",
    ],
  },
  {
    id: "media-testing",
    title: "Images, Video, Downloads, and Embedded Content",
    intro:
      "Catch customer-facing content that sits outside primary CMS text fields but remains part of the localized experience.",
    owner: "Content operations, digital asset owners, and localization",
    items: [
      "Review every meaningful image containing source-language text.",
      "Replace or localize screenshots of software and product interfaces.",
      "Confirm that imagery is appropriate for the market and audience.",
      "Check image captions and credits.",
      "Review localized alt text.",
      "Test localized video captions and subtitles.",
      "Confirm transcript availability and accuracy.",
      "Review voice-over or audio language where applicable.",
      "Check localized video titles, descriptions, thumbnails, and controls.",
      "Test downloadable PDFs, brochures, manuals, forms, and reports.",
      "Confirm that document titles and link labels identify the correct language.",
      "Verify that files open correctly and match their visible descriptions.",
      "Confirm that outdated source-language downloads are not linked from localized pages.",
      "Test maps, dashboards, calculators, configurators, and interactive media.",
      "Review embedded social feeds and user-generated content.",
      "Validate QR codes and their market-specific destinations.",
      "Confirm appropriate fallback assets when a localized version is unavailable.",
      "Verify permissions and usage rights for market-specific media.",
      "Check for important text embedded as images that should be represented as accessible HTML.",
    ],
  },
  {
    id: "performance-and-integrations",
    title: "Performance, Analytics, Consent, and Integrations",
    intro:
      "Ensure the localized experience remains measurable, compliant, responsive, and connected to the systems that support marketing, sales, commerce, service, and customer accounts.",
    owner: "Web operations, analytics, privacy, engineering, and regional stakeholders",
    items: [
      "Test page performance with localized fonts, scripts, images, and video.",
      "Check for missing or unnecessarily large font files.",
      "Confirm that localized assets are delivered through the intended infrastructure.",
      "Review caching and content-delivery behavior.",
      "Check whether market routing creates redirect loops or delays.",
      "Confirm that analytics capture the correct language, locale, and market.",
      "Validate page views and conversion events.",
      "Test campaign and attribution parameters.",
      "Confirm that dashboards can distinguish localized performance.",
      "Review consent banners and preference centers in every locale.",
      "Test acceptance, rejection, withdrawal, and preference changes.",
      "Confirm that consent choices persist correctly.",
      "Validate region-specific tag-management behavior.",
      "Test geolocation and market-routing logic.",
      "Confirm that users can override automatic routing.",
      "Review personalization rules by language and market.",
      "Test CRM, ecommerce, marketing, account, and support integrations.",
      "Confirm that localized form submissions reach the intended regional team.",
      "Verify local contact details and escalation paths.",
      "Confirm that transaction and confirmation data remains in the selected locale.",
      "Check monitoring, logging, and error reporting for localized pages.",
      "Remove test accounts, placeholder content, and confidential test data before release.",
      "Confirm that production API keys, endpoints, and configurations are correct.",
      "Test behavior when an integration is unavailable or returns an error.",
    ],
  },
];

const defectFields = [
  "Language and locale",
  "Page URL",
  "Page, template, or component",
  "Device, operating system, and browser",
  "Build or release version",
  "Steps to reproduce",
  "Expected result",
  "Actual result",
  "Screenshot or recording",
  "Severity",
  "Defect category",
  "Recommended owner",
  "Status",
  "Correction notes",
  "Retest evidence",
];

const rootCauses = [
  "Source-content defect",
  "Translation defect",
  "Terminology defect",
  "Content extraction or reintegration defect",
  "CMS configuration defect",
  "Layout or component defect",
  "Locale-format defect",
  "Routing or fallback defect",
  "Integration defect",
  "SEO configuration defect",
  "Accessibility defect",
  "Market-content defect",
  "Outdated or unsynchronized content",
];

const regressionItems = [
  "Retest the original issue in the affected locale.",
  "Test the same component on other representative pages.",
  "Test other locales using the component.",
  "Test the source-language experience if shared code changed.",
  "Repeat the connected user journey.",
  "Recheck relevant responsive widths.",
  "Confirm that the correction did not introduce new text clipping.",
  "Revalidate analytics, SEO, or accessibility behavior when affected.",
  "Attach retest evidence.",
  "Update the defect status and release record.",
];

const launchReadiness = [
  "Every intended language and locale is accounted for.",
  "Required pages, templates, and components have been tested.",
  "Critical user journeys have passed.",
  "No unresolved launch blockers remain.",
  "High-priority issues are resolved or formally mitigated.",
  "Linguistic review is approved.",
  "Visual and responsive review is approved.",
  "Functional testing is approved.",
  "Locale and market validation is complete.",
  "RTL validation is complete where applicable.",
  "Multilingual SEO configuration is validated.",
  "Accessibility review is complete.",
  "Analytics and conversion events work correctly.",
  "Consent and privacy behavior is correct.",
  "Required integrations work.",
  "Corrected critical and high-priority issues have been retested.",
  "Accepted risks have owners and deadlines.",
  "Release approvers are documented.",
  "Rollback and escalation plans are ready.",
  "Post-launch monitoring owners are assigned.",
];

const productionChecks = [
  "Confirm that every localized URL resolves correctly.",
  "Check the homepage and representative page templates.",
  "Test the language and market selector.",
  "Confirm that locale selection persists.",
  "Complete at least one critical journey per locale or risk group.",
  "Submit representative forms.",
  "Test account, transaction, booking, or checkout behavior where applicable.",
  "Confirm analytics and conversion events.",
  "Validate consent and regional tag behavior.",
  "Check market routing and redirects.",
  "Confirm page titles, canonicals, alternate-language annotations, and indexability.",
  "Verify production assets and downloads.",
  "Check performance and error monitoring.",
  "Search for unexpected source-language fallback content.",
  "Confirm that approved corrections are present in production.",
  "Document and escalate any production-only defect.",
];

const mistakes = [
  {
    title: "Testing Only Exported Translation Files",
    text: "Spreadsheets and translation editors cannot reveal text clipping, incorrect page context, broken routing, inaccessible controls, or functional failures.",
  },
  {
    title: "Reviewing Only the Homepage",
    text: "The highest-risk issues often appear in forms, account areas, checkout, search, navigation, legal notices, error states, and third-party applications.",
  },
  {
    title: "Treating Every Page as Equally Important",
    text: "Deep testing of representative templates and critical journeys usually provides more protection than superficial coverage of every URL.",
  },
  {
    title: "Giving One Reviewer Every Responsibility",
    text: "Native-language review does not replace browser testing, and automated technical testing does not evaluate meaning, tone, or market fit.",
  },
  {
    title: "Ignoring Dynamic and Third-Party Content",
    text: "Search, chat, payments, booking, maps, consent systems, customer portals, and generated messages often sit outside the main CMS workflow.",
  },
  {
    title: "Waiting Until the End to Define Severity",
    text: "Teams make inconsistent decisions when they classify defects under launch pressure. Agree on severity, owners, and exit criteria before testing.",
  },
  {
    title: "Correcting Individual Symptoms",
    text: "Repeated errors often point to a shared glossary, template, extraction rule, locale configuration, or routing problem that should be corrected centrally.",
  },
  {
    title: "Skipping Regression Testing",
    text: "A correction to a shared template or component can affect other pages, screen sizes, languages, and source content.",
  },
  {
    title: "Assuming Staging Matches Production",
    text: "Production-only configuration can affect redirects, caching, analytics, consent, search directives, forms, and integrations.",
  },
];

const faqs = [
  {
    q: "What Is Website Localization Testing?",
    a: "Website localization testing is the structured review of a localized website’s language, visual presentation, functionality, locale behavior, search configuration, accessibility, integrations, and market readiness. It evaluates the complete experience in context rather than reviewing translated text alone.",
  },
  {
    q: "How Is Localization Testing Different From Translation Review?",
    a: "Translation review focuses primarily on accuracy, terminology, style, fluency, and completeness. Localization testing includes those linguistic checks but also evaluates whether content fits, responds correctly, supports local formats, preserves accessibility, follows the intended user journey, and reaches the right market.",
  },
  {
    q: "When Should Website Localization Testing Begin?",
    a: "Testing planning should begin before translation is complete. Teams can define coverage, acceptance criteria, test data, ownership, environments, devices, and severity rules early. In-context linguistic and functional testing can begin when representative localized content is available in a stable environment.",
  },
  {
    q: "Who Should Test a Localized Website?",
    a: "Most programs require an in-language reviewer, a localization owner, web QA or engineering, design or UX, SEO, accessibility expertise, and regional or subject-matter stakeholders. The exact team depends on the website’s complexity and risk.",
  },
  {
    q: "Does Every Localized Page Need to Be Tested?",
    a: "Not always. A smaller or high-risk website may justify full-page review. A large website can often use a combination of template coverage, critical-journey testing, risk-based sampling, automated checks, and targeted full-page review. The test plan should explain why the selected coverage is sufficient.",
  },
  {
    q: "How Can Large Multilingual Websites Be Tested Efficiently?",
    a: "Start with shared templates, global components, critical journeys, high-traffic pages, high-risk content, and scripts with distinct layout or direction requirements. Use automation for repeatable technical checks while preserving human review for meaning, language quality, market fit, and contextual usability.",
  },
  {
    q: "What Localization Defects Should Block Launch?",
    a: "A defect should normally block launch when it prevents a critical task or creates unacceptable legal, safety, privacy, financial, accessibility, customer, or reputational risk. Examples include a broken checkout, unusable account registration, materially incorrect regulated content, wrong-market pricing, or critical untranslated instructions.",
  },
  {
    q: "Can Automated Testing Replace In-Market Linguistic Review?",
    a: "No. Automated tests can identify missing strings, layout changes, broken links, inconsistent attributes, functional errors, and other repeatable conditions. They cannot reliably determine whether language is accurate, natural, persuasive, contextually appropriate, or suitable for a particular market.",
  },
  {
    q: "How Much Time Should Be Reserved for Localization Testing?",
    a: "The schedule depends on the number of locales, unique templates, critical journeys, supported devices, integrations, regulatory requirements, review availability, and correction cycles. Testing should include time for defect resolution and regression—not only initial review.",
  },
  {
    q: "Should Localized Websites Be Retested After Launch?",
    a: "Yes. Perform an immediate production smoke test and continue monitoring localized pages as content, code, integrations, search requirements, and market needs change. A localized website is an ongoing digital product, not a one-time translation deliverable.",
  },
];

const downloadItems = [
  "Project and release information",
  "Language and locale scope",
  "Page, template, and journey coverage",
  "Device and browser coverage",
  "Testing ownership",
  "All ten testing workstreams",
  "Defect register and severity",
  "Localization Launch Gate",
  "Final approval record",
  "Production smoke test",
];

const gatedDownloads = {
  pdf: {
    label: "PDF Checklist",
    action: "Download PDF Checklist",
    url: "https://www.stepes.com/resources/downloads/website-localization-testing-checklist.pdf",
    description: "A print-ready checklist for planning sessions, review meetings, and launch approval.",
  },
  worksheet: {
    label: "Editable Worksheet",
    action: "Download Editable Worksheet",
    url: "https://www.stepes.com/resources/downloads/website-localization-testing-checklist.xlsx",
    description: "An editable worksheet for assigning owners, tracking defects, and documenting sign-off.",
  },
};

const sources = [
  {
    organization: "W3C Internationalization",
    title: "Declaring Language in HTML",
    text: "Guidance for identifying the default language of pages and language changes within multilingual content.",
    url: "https://www.w3.org/International/questions/qa-html-language-declarations",
  },
  {
    organization: "W3C Web Accessibility Initiative",
    title: "Understanding Reflow",
    text: "Accessibility guidance for preserving information and functionality when content is resized or viewed at narrow widths.",
    url: "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html",
  },
  {
    organization: "Google Search Central",
    title: "Managing Multi-Regional and Multilingual Sites",
    text: "Official guidance for localized URLs, alternate-language relationships, and international search implementation.",
    url: "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites",
  },
  {
    organization: "Unicode Consortium",
    title: "Common Locale Data Repository",
    text: "Standardized locale data used by software to support language- and market-specific formatting behavior.",
    url: "https://cldr.unicode.org/",
  },
];

const relatedResources = [
  {
    category: "Foundational Guide",
    title: "How to Translate a Website",
    text: "Plan the complete journey from content assessment and workflow selection to translation, testing, launch, and ongoing updates.",
    url: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    category: "Technology Planning",
    title: "Website Translation Workflows",
    text: "Compare CMS, API, proxy, and file-based approaches for moving content through translation, review, publishing, and updates.",
    url: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    category: "AI + Human Quality",
    title: "AI Website Translation With Human Review",
    text: "Match AI translation, post-editing, professional translation, and specialist review to content purpose and risk.",
    url: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    category: "International Search",
    title: "Multilingual SEO Guide",
    text: "Connect localized content with target-language search intent, metadata, URLs, internal links, and international site architecture.",
    url: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
  {
    category: "Ongoing Operations",
    title: "Continuous Website Localization",
    text: "Keep multilingual websites synchronized as source content, products, campaigns, and customer information change.",
    url: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m14 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <path
        d="m6 12.5 3.6 3.6L18 7.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18.5h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5 19 6v5.2c0 4.2-2.7 7.6-7 9.3-4.3-1.7-7-5.1-7-9.3V6z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 12 2 2 4.4-4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.7v5.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="16.7" r="1" fill="currentColor" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, titleId, intro, centered = false }) {
  return (
    <header className={`section-header${centered ? " section-header--centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
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
      <ArrowIcon size={17} />
    </a>
  );
}

function StaticChecklist({ items, columns = true, dark = false }) {
  return (
    <ul className={`check-list${columns ? " check-list--columns" : ""}${dark ? " check-list--dark" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-marker">
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChecklistChapter({ section }) {
  return (
    <section
      className="checklist-chapter"
      id={section.id}
      aria-labelledby={`${section.id}-title`}
    >
      <div className="checklist-heading">
        <h2 id={`${section.id}-title`}>{section.title}</h2>
        <p>{section.intro}</p>
        <div className="owner-note">
          <span>Recommended Owner</span>
          <strong>{section.owner}</strong>
        </div>
        {section.link ? (
          <EditorialLink href={section.link.url}>{section.link.label}</EditorialLink>
        ) : null}
      </div>

      <div className="checklist-body">
        <StaticChecklist items={section.items} />
        {section.blockers ? (
          <div className="blocker-note">
            <div className="blocker-icon">
              <ShieldIcon />
            </div>
            <div>
              <h3>Potential Launch Blockers</h3>
              <ul>
                {section.blockers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function WebsiteLocalizationTestingChecklistWireframe() {
  const [contentsOpen, setContentsOpen] = useState(false);
  const [downloadGate, setDownloadGate] = useState({ open: false, asset: "pdf" });
  const [downloadsUnlocked, setDownloadsUnlocked] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const downloadTriggerRef = useRef(null);

  const closeMobileContents = () => setContentsOpen(false);
  const selectedDownload = gatedDownloads[downloadGate.asset];

  const openDownloadGate = (asset, event) => {
    downloadTriggerRef.current = event?.currentTarget || document.activeElement;
    setFormErrors({});
    setDownloadGate({ open: true, asset });
  };

  const closeDownloadGate = () => {
    setDownloadGate((current) => ({ ...current, open: false }));
  };

  const clearFieldError = (event) => {
    const fieldName = event.currentTarget.name;
    setFormErrors((current) => {
      if (!current[fieldName]) return current;
      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  };

  const submitDownloadGate = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const errors = {};
    const firstName = String(values.firstName || "").trim();
    const lastName = String(values.lastName || "").trim();
    const email = String(values.email || "").trim();
    const company = String(values.company || "").trim();

    if (!firstName) errors.firstName = "Enter your first name.";
    if (!lastName) errors.lastName = "Enter your last name.";
    if (!email) {
      errors.email = "Enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Enter a valid work email address.";
    }
    if (!company) errors.company = "Enter your company name.";

    setFormErrors(errors);

    const firstInvalidField = Object.keys(errors)[0];
    if (firstInvalidField) {
      window.requestAnimationFrame(() => form.elements[firstInvalidField]?.focus());
      return;
    }

    setDownloadsUnlocked(true);
  };

  useEffect(() => {
    if (!downloadGate.open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusInitialControl = window.setTimeout(() => {
      if (downloadsUnlocked) {
        dialogRef.current?.querySelector(".gate-download-link")?.focus();
      } else {
        firstFieldRef.current?.focus();
      }
    }, 0);

    const handleDialogKeys = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDownloadGate();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeys);

    return () => {
      window.clearTimeout(focusInitialControl);
      document.removeEventListener("keydown", handleDialogKeys);
      document.body.style.overflow = previousOverflow;
      window.setTimeout(() => downloadTriggerRef.current?.focus(), 0);
    };
  }, [downloadGate.open]);

  useEffect(() => {
    if (!downloadGate.open || !downloadsUnlocked) return undefined;
    const focusDownload = window.setTimeout(
      () => dialogRef.current?.querySelector(".gate-download-link")?.focus(),
      0
    );
    return () => window.clearTimeout(focusDownload);
  }, [downloadGate.open, downloadsUnlocked]);

  return (
    <main className="stepes-guide" data-wireframe-version="1.6">
      <style>{`
        :root {
          --magenta: #c11d63;
          --magenta-dark: #9f1d55;
          --magenta-deep: #7a1542;
          --blush: #fdf2f7;
          --light-magenta: #f2a7c6;
          --ink: #16131a;
          --text: #4d4652;
          --muted: #746c78;
          --border: #e7e2e8;
          --border-strong: #d8d1da;
          --surface: #ffffff;
          --soft: #f8f7f9;
          --dark: #221822;
          --dark-soft: #2d202c;
          --shadow: 0 20px 55px rgba(45, 25, 40, 0.08);
          --radius-lg: 30px;
          --radius-md: 22px;
          --header-offset: 112px;
        }

        * {
          box-sizing: border-box;
          min-width: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .stepes-guide {
          overflow-x: clip;
          background: var(--surface);
          color: var(--ink);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          font-size: 16px;
          line-height: 1.65;
          text-rendering: optimizeLegibility;
        }

        .stepes-guide a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-guide button {
          font: inherit;
        }

        .stepes-guide h1,
        .stepes-guide h2,
        .stepes-guide h3,
        .stepes-guide p,
        .stepes-guide li,
        .stepes-guide a,
        .stepes-guide strong,
        .stepes-guide span {
          overflow-wrap: break-word;
        }

        .button span,
        .status-chip,
        .visual-locale,
        .visual-test-name {
          overflow-wrap: normal;
          word-break: normal;
        }

        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        .stepes-guide a:focus-visible,
        .stepes-guide button:focus-visible,
        .stepes-guide summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.28);
          outline-offset: 4px;
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .reading {
          width: min(100%, 760px);
          margin-inline: auto;
        }

        .reading--wide {
          width: min(100%, 840px);
        }

        .wide-module {
          width: min(100%, 1120px);
          margin-inline: auto;
        }

        section[id] {
          scroll-margin-top: var(--header-offset);
        }

        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta);
          font-size: 11px !important;
          font-weight: 600 !important;
          letter-spacing: 0.12em;
          line-height: 1.35 !important;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          margin: 0;
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.12;
        }

        h1 {
          max-width: 760px;
          font-size: 48px;
        }

        h2 {
          font-size: 36px;
        }

        h3 {
          font-size: 24px;
        }

        p {
          margin: 0;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 104px 0 90px;
          background:
            radial-gradient(circle at 82% 16%, rgba(193, 29, 99, 0.07), transparent 28%),
            linear-gradient(180deg, #fff 0%, #fff 72%, #fbf9fb 100%);
        }

        .hero::after {
          position: absolute;
          right: 0;
          bottom: -170px;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(193, 29, 99, 0.08);
          border-radius: 50%;
          content: "";
          pointer-events: none;
          transform: translateX(35%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
          gap: 72px;
          align-items: center;
        }

        .hero-copy {
          position: relative;
          z-index: 1;
        }

        .hero-deck {
          max-width: 730px;
          margin-top: 26px;
          color: var(--text);
          font-size: 20px;
          line-height: 1.6;
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
          cursor: pointer;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 13px 22px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            box-shadow 160ms ease;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .button--primary,
        .button--primary:visited,
        .button--primary:hover,
        .button--primary:active,
        .button--primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }

        .button--primary:hover {
          background: var(--magenta-dark);
          box-shadow: 0 12px 24px rgba(193, 29, 99, 0.18);
        }

        .button--secondary {
          border-color: var(--border-strong);
          background: #fff;
          color: var(--ink);
        }

        .button--secondary:hover {
          border-color: var(--magenta);
          color: var(--magenta);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          column-gap: 20px;
          row-gap: 8px;
          margin-top: 34px;
          color: var(--muted);
          font-size: 14px;
        }

        .hero-meta span {
          display: inline-flex;
          min-height: 24px;
          align-items: center;
          white-space: nowrap;
        }

        .hero-visual {
          position: relative;
          min-height: 510px;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: var(--shadow);
        }

        .hero-visual::before {
          position: absolute;
          inset: 18px;
          border: 1px solid var(--border);
          border-radius: 23px;
          content: "";
        }

        .hero-visual-inner {
          position: relative;
          display: grid;
          min-height: 510px;
          grid-template-rows: auto 1fr auto;
          gap: 22px;
          padding: 44px;
          z-index: 1;
        }

        .visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .visual-title {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .visual-icon {
          display: grid;
          width: 46px;
          height: 46px;
          place-items: center;
          border-radius: 14px;
          background: var(--blush);
          color: var(--magenta);
        }

        .visual-icon svg {
          width: 24px;
          height: 24px;
        }

        .visual-title span {
          display: block;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .visual-title strong {
          display: block;
          margin-top: 3px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .visual-release {
          border: 1px solid var(--border);
          border-radius: 999px;
          background: #fff;
          padding: 7px 11px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1;
        }

        .visual-board {
          display: grid;
          align-content: center;
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--soft);
          overflow: hidden;
        }

        .visual-row {
          display: grid;
          grid-template-columns: 74px minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
          padding: 19px 20px;
          background: #fff;
        }

        .visual-row + .visual-row {
          border-top: 1px solid var(--border);
        }

        .visual-locale {
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
        }

        .visual-test-name {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .visual-test-detail {
          display: block;
          margin-top: 3px;
          color: var(--muted);
          font-size: 14px;
          font-weight: 400;
        }

        .status-chip {
          display: inline-flex;
          min-height: 31px;
          align-items: center;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 10px;
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }

        .status-chip--pass {
          background: #f5faf7;
        }

        .status-chip--review {
          background: #fff9ee;
        }

        .status-chip--blocker {
          border-color: rgba(193, 29, 99, 0.2);
          background: var(--blush);
          color: var(--magenta-deep);
        }

        .visual-footer {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .visual-metric {
          border: 1px solid var(--border);
          border-radius: 16px;
          background: #fff;
          padding: 15px;
        }

        .visual-metric strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.2;
        }

        .visual-metric span {
          display: block;
          margin-top: 5px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.4;
        }

        .summary-section {
          padding: 80px 0;
          background: var(--soft);
        }

        .summary-layout {
          display: grid;
          grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
          gap: 76px;
          align-items: start;
        }

        .summary-intro p:not(.eyebrow) {
          margin-top: 22px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.65;
        }

        .takeaway-list {
          border-top: 1px solid var(--border-strong);
        }

        .takeaway {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }

        .takeaway-icon {
          display: grid;
          width: 22px;
          height: 22px;
          margin-top: 3px;
          place-items: center;
          border-radius: 50%;
          background: var(--blush);
          color: var(--magenta);
        }

        .takeaway-icon svg {
          width: 16px;
          height: 16px;
        }

        .takeaway h3 {
          font-size: 19px;
          line-height: 1.35;
        }

        .takeaway p {
          margin-top: 8px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .contents-section {
          padding: 80px 0;
          background: #fff;
        }

        .contents-heading {
          margin-bottom: 36px;
        }

        .contents-desktop {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-block: 1px solid var(--border);
        }

        .contents-group {
          padding: 30px 30px 32px 0;
        }

        .contents-group + .contents-group {
          border-left: 1px solid var(--border);
          padding-left: 30px;
        }

        .contents-group h3 {
          margin-bottom: 16px;
          color: var(--muted);
          font-size: 16px;
          letter-spacing: 0;
        }

        .contents-group a {
          display: grid;
          min-height: 42px;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          padding: 8px 0;
          color: var(--text);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
          transition: color 150ms ease;
        }

        .contents-group a::before {
          width: 6px;
          height: 6px;
          margin-top: 8px;
          border-radius: 50%;
          background: #b9aebb;
          content: "";
        }

        .contents-group a:hover {
          color: var(--magenta);
        }

        .contents-group a:hover::before {
          background: var(--magenta);
        }

        .contents-mobile {
          display: none;
        }

        .article-section {
          padding: 96px 0;
        }

        .article-section--soft {
          background: var(--soft);
        }

        .article-section--blush {
          background: var(--blush);
        }

        .section-header {
          width: min(100%, 820px);
          margin-bottom: 44px;
        }

        .section-header--centered {
          margin-inline: auto;
          text-align: center;
        }

        .section-intro {
          margin-top: 22px;
          color: var(--text);
          font-size: 19px;
          line-height: 1.7;
        }

        .article-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .article-copy p + p {
          margin-top: 22px;
        }

        .quality-callout {
          margin-top: 34px;
          border-left: 3px solid var(--magenta);
          padding-left: 22px;
          color: var(--ink) !important;
          font-size: 19px !important;
          font-weight: 600;
          line-height: 1.6 !important;
        }

        .dimension-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .dimension {
          min-height: 180px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 24px;
        }

        .dimension strong {
          display: block;
          color: var(--magenta);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.35;
        }

        .dimension p {
          margin-top: 10px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.58;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .process-step {
          min-height: 250px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px;
        }

        .process-number {
          color: var(--magenta);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .process-step h3 {
          margin-top: 24px;
          font-size: 21px;
        }

        .process-step p {
          margin-top: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .scope-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .scope-group {
          min-height: 430px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 32px;
        }

        .scope-group h3 {
          font-size: 22px;
        }

        .plain-list {
          display: grid;
          gap: 13px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .plain-list li {
          position: relative;
          padding-left: 19px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .plain-list li::before {
          position: absolute;
          top: 0.77em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
          transform: translateY(-50%);
        }

        .coverage-module {
          margin-top: 52px;
        }

        .module-heading {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: end;
          margin-bottom: 24px;
        }

        .module-heading h3 {
          font-size: 24px;
        }

        .module-heading p {
          max-width: 580px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .table-wrap {
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }

        .data-table th,
        .data-table td {
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 18px 16px;
          vertical-align: top;
          font-size: 16px;
          line-height: 1.5;
          text-align: left;
        }

        .data-table th:last-child,
        .data-table td:last-child {
          border-right: 0;
        }

        .data-table tr:last-child td,
        .data-table tr:last-child th {
          border-bottom: 0;
        }

        .data-table thead th {
          background: var(--soft);
          color: var(--ink);
          font-weight: 600;
        }

        .data-table tbody th {
          background: #fff;
          color: var(--ink);
          font-weight: 600;
        }

        .data-table tbody td {
          color: var(--text);
        }

        .mobile-records {
          display: none;
        }

        .ownership-intro {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
          margin-bottom: 46px;
        }

        .ownership-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .ownership-copy p + p {
          margin-top: 14px;
        }

        .launch-gate {
          padding: 100px 0 104px;
          background: var(--dark);
          color: #fff;
        }

        .launch-gate .eyebrow {
          color: var(--light-magenta);
        }

        .launch-gate .section-intro {
          color: #ded6df;
        }

        .gate-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }

        .gate-level {
          min-height: 410px;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 28px;
        }

        .gate-level h3 {
          color: #fff;
          font-size: 21px;
        }

        .gate-label {
          display: block;
          margin-top: 24px;
          color: var(--light-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .gate-level p {
          margin-top: 8px;
          color: #d9d0da;
          font-size: 16px;
          line-height: 1.62;
        }

        .gate-decision {
          margin-top: 24px !important;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          padding-top: 20px;
          color: #fff !important;
          font-weight: 600;
        }

        .exit-panel {
          display: grid;
          grid-template-columns: minmax(250px, 0.68fr) minmax(0, 1.32fr);
          gap: 64px;
          align-items: start;
          margin-top: 48px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.035);
          padding: 38px;
        }

        .exit-panel h3 {
          font-size: 24px;
        }

        .check-list {
          display: grid;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .check-list--columns {
          grid-template-columns: 1fr 1fr;
          column-gap: 34px;
        }

        .check-list li {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .check-marker {
          display: grid;
          width: 22px;
          height: 22px;
          margin-top: 2px;
          place-items: center;
          border: 1px solid rgba(193, 29, 99, 0.22);
          border-radius: 7px;
          background: var(--blush);
          color: var(--magenta);
        }

        .check-marker svg {
          width: 15px;
          height: 15px;
        }

        .check-list--dark li {
          color: #ded6df;
        }

        .check-list--dark .check-marker {
          border-color: rgba(242, 167, 198, 0.28);
          background: rgba(242, 167, 198, 0.08);
          color: var(--light-magenta);
        }

        .master-checklist {
          padding: 96px 0 0;
          background: #fff;
        }

        .master-intro {
          padding-bottom: 60px;
        }

        .master-intro-grid {
          display: grid;
          grid-template-columns: minmax(260px, 0.7fr) minmax(0, 1.3fr);
          gap: 72px;
          align-items: start;
        }

        .master-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .master-copy p + p {
          margin-top: 20px;
        }

        .checklist-chapter {
          display: grid;
          grid-template-columns: minmax(260px, 0.68fr) minmax(0, 1.32fr);
          gap: 72px;
          padding: 84px 0;
          border-top: 1px solid var(--border-strong);
        }

        .checklist-heading {
          align-self: start;
        }

        .checklist-heading h2 {
          font-size: 32px;
        }

        .checklist-heading > p {
          margin-top: 20px;
          color: var(--text);
          font-size: 17px;
          line-height: 1.68;
        }

        .owner-note {
          margin-top: 26px;
          border-left: 3px solid var(--magenta);
          padding-left: 18px;
        }

        .owner-note span {
          display: block;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .owner-note strong {
          display: block;
          margin-top: 7px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.55;
        }

        .checklist-heading .editorial-link {
          margin-top: 22px;
        }

        .checklist-body {
          min-width: 0;
        }

        .blocker-note {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          margin-top: 34px;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: 20px;
          background: var(--blush);
          padding: 24px;
        }

        .blocker-icon {
          display: grid;
          width: 46px;
          height: 46px;
          place-items: center;
          border-radius: 14px;
          background: #fff;
          color: var(--magenta);
        }

        .blocker-icon svg {
          width: 24px;
          height: 24px;
        }

        .blocker-note h3 {
          font-size: 19px;
          line-height: 1.35;
        }

        .blocker-note ul {
          display: grid;
          gap: 0;
          margin: 13px 0 0;
          padding: 0;
          border-left: 0;
          list-style: none;
        }

        .blocker-note li {
          color: var(--text);
          font-size: 16px;
          line-height: 1.55;
        }

        .blocker-note li + li {
          margin-top: 8px;
        }

        .defect-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }

        .defect-panel {
          border-top: 1px solid rgba(193, 29, 99, 0.2);
          padding-top: 26px;
        }

        .defect-panel h3 {
          font-size: 22px;
        }

        .defect-panel > p {
          margin-top: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 20px;
          margin-top: 18px;
        }

        .field-item {
          display: grid;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          color: var(--text);
          font-size: 16px;
          line-height: 1.55;
        }

        .field-item::before {
          width: 6px;
          height: 6px;
          margin-top: 9px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
        }

        .defect-example {
          margin-top: 48px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: #fff;
          overflow: hidden;
        }

        .defect-example h3 {
          padding: 22px 26px;
          background: var(--soft);
          font-size: 21px;
        }

        .example-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .example-field {
          min-height: 124px;
          border-top: 1px solid var(--border);
          border-right: 1px solid var(--border);
          padding: 20px;
        }

        .example-field:nth-child(4n) {
          border-right: 0;
        }

        .example-field span {
          display: block;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .example-field p {
          margin-top: 8px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.55;
        }

        .regression-panel {
          display: grid;
          grid-template-columns: minmax(250px, 0.68fr) minmax(0, 1.32fr);
          gap: 64px;
          margin-top: 52px;
          border-top: 1px solid rgba(193, 29, 99, 0.2);
          padding-top: 38px;
        }

        .regression-panel h3 {
          font-size: 24px;
        }

        .regression-panel p {
          margin-top: 14px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .approval-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.68fr) minmax(0, 1.32fr);
          gap: 72px;
          align-items: start;
        }

        .approval-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .decision-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .decision {
          min-height: 190px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 26px;
        }

        .decision h3 {
          color: var(--magenta);
          font-size: 20px;
        }

        .decision p {
          margin-top: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .approval-record {
          margin-top: 46px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: #fff;
          padding: 28px;
        }

        .approval-record h3 {
          font-size: 22px;
        }

        .record-fields {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 22px;
        }

        .record-field {
          min-height: 92px;
          border-top: 1px solid var(--border);
          padding-top: 14px;
        }

        .record-field span {
          display: block;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .record-field p {
          margin-top: 7px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.5;
        }

        .post-launch-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.68fr) minmax(0, 1.32fr);
          gap: 72px;
          align-items: start;
        }

        .post-launch-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .post-launch-copy .editorial-link {
          margin-top: 24px;
        }

        .mistake-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .mistake {
          min-height: 260px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px;
        }

        .mistake h3 {
          font-size: 20px;
          line-height: 1.35;
        }

        .mistake p {
          margin-top: 13px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.64;
        }

        .faq-panel {
          border-top: 1px solid var(--border-strong);
          border-bottom: 1px solid var(--border-strong);
        }

        .faq-item {
          border-top: 1px solid var(--border);
        }

        .faq-item:first-child {
          border-top: 0;
        }

        .faq-item summary {
          display: grid;
          min-height: 76px;
          cursor: pointer;
          grid-template-columns: minmax(0, 1fr) 26px;
          gap: 24px;
          align-items: center;
          padding: 18px 4px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-toggle {
          position: relative;
          display: inline-block;
          width: 24px;
          height: 24px;
          color: var(--magenta);
        }

        .faq-toggle::before,
        .faq-toggle::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 1.5px;
          background: currentColor;
          content: "";
          transform: translate(-50%, -50%);
          transition: transform 150ms ease;
        }

        .faq-toggle::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .faq-item[open] .faq-toggle::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .faq-answer {
          max-width: 840px;
          padding: 0 54px 26px 4px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.7;
        }

        .download-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 64px;
          align-items: center;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: var(--radius-lg);
          background: #fff;
          padding: 48px;
          box-shadow: 0 18px 42px rgba(42, 26, 38, 0.05);
        }

        .download-copy p:not(.eyebrow) {
          margin-top: 18px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.68;
        }

        .download-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .download-copy .download-access-note {
          margin-top: 10px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .download-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .download-item {
          min-height: 90px;
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 20px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.55;
        }

        .download-item .check-marker {
          margin-top: 1px;
        }

        .download-gate-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          overflow-y: auto;
          padding: 24px;
          background: rgba(22, 19, 26, 0.72);
          backdrop-filter: blur(7px);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .download-gate-overlay::-webkit-scrollbar,
        .download-gate-dialog::-webkit-scrollbar {
          display: none;
        }

        .download-gate-dialog {
          position: relative;
          width: min(980px, 100%);
          max-height: calc(100vh - 48px);
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior: contain;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-lg);
          background: #fff;
          box-shadow: 0 34px 90px rgba(22, 19, 26, 0.3);
        }

        .download-gate-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
        }

        .download-gate-summary {
          padding: 36px 32px;
          background: var(--blush);
        }

        .download-gate-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          border-radius: 16px;
          background: #fff;
          color: var(--magenta);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.1);
        }

        .download-gate-icon svg {
          width: 25px;
          height: 25px;
        }

        .download-gate-summary h3 {
          margin-top: 22px;
          font-size: 23px;
          line-height: 1.32;
        }

        .download-gate-summary > p {
          margin-top: 14px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .download-gate-benefits {
          display: grid;
          gap: 12px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .download-gate-benefits li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          color: var(--text);
          font-size: 16px;
          line-height: 1.55;
        }

        .download-gate-benefits .check-marker {
          width: 20px;
          height: 20px;
          margin-top: 1px;
        }

        .download-gate-form-panel {
          padding: 32px 40px;
        }

        .download-gate-form-panel h2 {
          max-width: 620px;
          padding-right: 38px;
          font-size: 30px;
          line-height: 1.18;
        }

        .download-gate-intro {
          margin-top: 10px;
          color: var(--text);
          font-size: 17px;
          line-height: 1.65;
        }

        .selected-format {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 14px;
          border: 1px solid rgba(193, 29, 99, 0.16);
          border-radius: 17px;
          background: var(--blush);
          padding: 12px 14px;
        }

        .selected-format svg {
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--magenta);
        }

        .selected-format strong,
        .selected-format span {
          display: block;
        }

        .selected-format strong {
          font-size: 16px;
          line-height: 1.4;
        }

        .selected-format span {
          margin-top: 3px;
          color: var(--text);
          font-size: 15px;
          line-height: 1.5;
        }

        .download-gate-form {
          margin-top: 18px;
        }

        .download-gate-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 16px;
        }

        .download-gate-field {
          display: grid;
          gap: 7px;
        }

        .download-gate-field label {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .download-gate-field input {
          width: 100%;
          min-height: 48px;
          border: 1px solid var(--border-strong);
          border-radius: 13px;
          background: #fff;
          padding: 12px 14px;
          color: var(--ink);
          font: inherit;
          font-size: 16px;
          outline: none;
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }

        .download-gate-field input:focus {
          border-color: var(--magenta);
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.12);
        }

        .download-gate-field.has-error input {
          border-color: var(--magenta);
          background: #fffafd;
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.1);
        }

        .download-gate-field-error {
          display: flex;
          gap: 7px;
          align-items: flex-start;
          color: var(--magenta-dark);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .download-gate-field-error svg {
          width: 17px;
          height: 17px;
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .download-gate-consent {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          margin-top: 14px;
          color: var(--text);
          font-size: 15px;
          line-height: 1.55;
        }

        .download-gate-consent input {
          width: 18px;
          height: 18px;
          margin: 2px 0 0;
          accent-color: var(--magenta);
        }

        .download-gate-privacy {
          margin-top: 10px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .download-gate-privacy a {
          color: var(--magenta);
          font-weight: 600;
        }

        .download-gate-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
        }

        .download-gate-cancel {
          min-height: 50px;
          cursor: pointer;
          border: 0;
          background: transparent;
          padding: 12px 14px;
          color: var(--text);
          font-size: 16px;
          font-weight: 600;
        }

        .download-gate-cancel:hover {
          color: var(--magenta);
        }

        .download-gate-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;
          display: grid;
          width: 44px;
          height: 44px;
          cursor: pointer;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: #fff;
          color: var(--ink);
          box-shadow: 0 6px 16px rgba(22, 19, 26, 0.08);
        }

        .download-gate-close::before,
        .download-gate-close::after {
          position: absolute;
          width: 16px;
          height: 1.5px;
          background: currentColor;
          content: "";
        }

        .download-gate-close::before {
          transform: rotate(45deg);
        }

        .download-gate-close::after {
          transform: rotate(-45deg);
        }

        .download-gate-close:hover {
          color: var(--magenta);
        }

        .download-ready {
          display: grid;
          min-height: 420px;
          align-content: center;
        }

        .download-ready-icon {
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border-radius: 18px;
          background: var(--blush);
          color: var(--magenta);
        }

        .download-ready-icon svg {
          width: 28px;
          height: 28px;
        }

        .download-ready h2 {
          margin-top: 24px;
        }

        .download-ready p {
          margin-top: 14px;
          color: var(--text);
          font-size: 17px;
          line-height: 1.65;
        }

        .download-ready-links {
          display: grid;
          gap: 12px;
          margin-top: 28px;
        }

        .download-ready-links .button {
          width: 100%;
        }

        .source-list {
          border-top: 1px solid var(--border-strong);
        }

        .source-item {
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          gap: 34px;
          align-items: start;
          padding: 27px 0;
          border-bottom: 1px solid var(--border);
        }

        .source-organization {
          color: var(--muted);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
        }

        .source-item h3 {
          font-size: 19px;
          line-height: 1.4;
        }

        .source-title-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink) !important;
          transition: color 150ms ease, gap 150ms ease;
        }

        .source-title-link:hover {
          gap: 11px;
          color: var(--magenta) !important;
        }

        .source-item p {
          margin-top: 8px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          transition:
            color 150ms ease,
            gap 150ms ease;
        }

        .editorial-link:hover {
          gap: 11px;
          color: var(--magenta-dark) !important;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .related-item {
          display: flex;
          min-height: 260px;
          grid-column: span 2;
          flex-direction: column;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px;
          transition: background 150ms ease;
        }

        .related-item:nth-child(n + 4) {
          grid-column: span 3;
          min-height: 230px;
        }

        .related-item:hover {
          background: var(--soft);
        }

        .related-category {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .related-item h3 {
          margin-top: 16px;
          font-size: 20px;
          line-height: 1.35;
        }

        .related-item p {
          margin-top: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .related-arrow {
          display: inline-flex;
          margin-top: auto;
          padding-top: 22px;
          color: var(--magenta);
        }

        .upward-links {
          display: flex;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 34px;
        }

        .final-cta {
          padding: 64px 0 96px;
          background: #fff;
        }

        .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) auto;
          gap: 48px;
          align-items: center;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: var(--radius-lg);
          background:
            radial-gradient(circle at 88% 22%, rgba(193, 29, 99, 0.08), transparent 27%),
            var(--blush);
          padding: 52px 56px;
        }

        .cta-panel h2 {
          max-width: 720px;
        }

        .cta-panel p {
          max-width: 760px;
          margin-top: 18px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.68;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: stretch;
        }

        .cta-actions .button {
          min-width: 260px;
        }

        @media (max-width: 1180px) {
          .shell {
            padding-inline: 40px;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
            gap: 48px;
          }

          .hero-visual-inner {
            padding: 34px;
          }

          .dimension-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .dimension:nth-child(10) {
            grid-column: span 3;
            min-height: 0;
          }

          .cta-panel {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: row;
          }
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .hero-copy {
            width: min(100%, 820px);
          }

          .hero-visual {
            width: min(100%, 780px);
            margin-inline: auto;
          }

          .summary-layout,
          .ownership-intro,
          .master-intro-grid,
          .checklist-chapter,
          .approval-layout,
          .post-launch-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .checklist-heading {
            width: min(100%, 780px);
          }
        }

        @media (max-width: 900px) {
          .shell {
            padding-inline: 24px;
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
            padding: 88px 0 76px;
          }

          .hero-visual,
          .hero-visual-inner {
            min-height: 0;
          }

          .visual-row:nth-child(4) {
            display: none;
          }

          .contents-desktop {
            display: none;
          }

          .contents-mobile {
            display: block;
            border-block: 1px solid var(--border);
          }

          .contents-mobile > button {
            display: flex;
            width: 100%;
            min-height: 58px;
            cursor: pointer;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            border: 0;
            background: transparent;
            padding: 0;
            color: var(--ink);
            font-size: 16px;
            font-weight: 600;
            text-align: left;
          }

          .contents-toggle {
            color: var(--magenta);
            font-size: 22px;
            font-weight: 400;
          }

          .contents-mobile-nav {
            padding: 6px 0 22px;
          }

          .contents-mobile-nav h3 {
            margin: 20px 0 6px;
            color: var(--muted);
            font-size: 16px;
          }

          .contents-mobile-nav a {
            display: block;
            min-height: 44px;
            padding: 10px 0;
            color: var(--text);
            font-size: 16px;
            font-weight: 600;
          }

          .process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .scope-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .scope-group {
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .module-heading {
            display: block;
          }

          .module-heading p {
            margin-top: 12px;
          }

          .table-wrap {
            display: none;
          }

          .check-list--columns {
            grid-template-columns: 1fr;
          }

          .mobile-records {
            display: grid;
            gap: 16px;
          }

          .mobile-record {
            border: 1px solid var(--border);
            border-radius: 20px;
            background: #fff;
            overflow: hidden;
          }

          .mobile-record h3 {
            padding: 19px 22px;
            background: var(--soft);
            font-size: 18px;
          }

          .mobile-record-values {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .mobile-record-value {
            min-height: 116px;
            border-top: 1px solid var(--border);
            padding: 17px 20px;
          }

          .mobile-record-value:nth-child(even) {
            border-left: 1px solid var(--border);
          }

          .mobile-record-value span {
            display: block;
            color: var(--magenta);
            font-size: 16px;
            font-weight: 600;
            line-height: 1.4;
          }

          .mobile-record-value p {
            margin-top: 7px;
            color: var(--text);
            font-size: 16px;
            line-height: 1.55;
          }

          .gate-grid {
            grid-template-columns: 1fr 1fr;
          }

          .gate-level {
            min-height: 0;
          }

          .exit-panel,
          .regression-panel,
          .download-panel {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .defect-layout {
            grid-template-columns: 1fr;
          }

          .example-grid,
          .record-fields {
            grid-template-columns: 1fr 1fr;
          }

          .example-field:nth-child(4n) {
            border-right: 1px solid var(--border);
          }

          .example-field:nth-child(2n),
          .record-field:nth-child(2n) {
            border-right: 0;
          }

          .mistake-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .related-item,
          .related-item:nth-child(n + 4) {
            grid-column: auto;
            min-height: 0;
          }

          .source-item {
            grid-template-columns: 150px minmax(0, 1fr);
          }

          .cta-panel {
            padding: 46px 40px;
          }

          .download-gate-dialog {
            width: min(680px, 100%);
          }

          .download-gate-layout {
            grid-template-columns: 1fr;
          }

          .download-gate-summary {
            display: none;
          }

          .download-gate-form-panel {
            padding: 34px 38px;
          }
        }

        @media (max-width: 700px) {
          :root {
            --header-offset: 88px;
          }

          .shell {
            padding-inline: 20px;
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
            padding: 72px 0 64px;
          }

          .hero-grid {
            gap: 44px;
          }

          .hero-deck {
            font-size: 18px;
          }

          .hero-actions,
          .cta-actions,
          .download-actions {
            flex-direction: column;
          }

          .hero-actions .button,
          .cta-actions .button,
          .download-actions .button {
            width: 100%;
          }

          .hero-meta {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .hero-meta span {
            white-space: normal;
          }

          .hero-visual {
            min-height: 0;
          }

          .hero-visual-inner {
            min-height: 0;
            gap: 18px;
            padding: 24px;
          }

          .hero-visual::before {
            inset: 14px;
          }

          .visual-header {
            align-items: flex-start;
          }

          .visual-release {
            display: none;
          }

          .visual-row {
            grid-template-columns: 60px minmax(0, 1fr);
            gap: 12px;
            padding: 17px 16px;
          }

          .visual-row .status-chip {
            grid-column: 2;
            justify-self: start;
          }

          .visual-title {
            gap: 11px;
          }

          .visual-icon {
            width: 42px;
            height: 42px;
          }

          .visual-title strong {
            font-size: 17px;
          }

          .visual-test-detail,
          .visual-row:nth-child(n + 3),
          .visual-footer {
            display: none;
          }

          .visual-metric {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 12px;
            align-items: center;
          }

          .visual-metric span {
            margin-top: 0;
          }

          .summary-section,
          .contents-section,
          .article-section,
          .launch-gate,
          .master-checklist {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .master-checklist {
            padding-bottom: 0;
          }

          .summary-layout,
          .ownership-intro,
          .master-intro-grid,
          .approval-layout,
          .post-launch-layout {
            gap: 34px;
          }

          .section-header {
            margin-bottom: 34px;
          }

          .section-intro,
          .article-copy p,
          .ownership-copy p,
          .master-copy p,
          .approval-copy p,
          .post-launch-copy p,
          .download-copy p:not(.eyebrow),
          .cta-panel p {
            font-size: 17px;
          }

          .dimension-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .dimension,
          .dimension:nth-child(10) {
            grid-column: auto;
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .process-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .process-step {
            display: grid;
            min-height: 0;
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            border-left: 1px solid var(--border);
            padding: 24px;
          }

          .process-step h3 {
            margin-top: 0;
          }

          .process-step p {
            grid-column: 2;
          }

          .scope-group {
            padding: 26px;
          }

          .mobile-record-values {
            grid-template-columns: 1fr;
          }

          .mobile-record-value:nth-child(even) {
            border-left: 0;
          }

          .mobile-record-value {
            min-height: 0;
          }

          .gate-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .gate-level {
            border-left: 1px solid rgba(255, 255, 255, 0.15);
            padding: 25px;
          }

          .exit-panel {
            padding: 30px 24px;
          }

          .check-list--columns {
            grid-template-columns: 1fr;
          }

          .checklist-chapter {
            gap: 30px;
            padding: 66px 0;
          }

          .checklist-heading h2 {
            font-size: 30px;
          }

          .owner-note {
            margin-top: 22px;
          }

          .checklist-heading .editorial-link {
            margin-top: 18px;
          }

          .blocker-note {
            grid-template-columns: 1fr;
            padding: 22px;
          }

          .field-grid,
          .example-grid,
          .record-fields,
          .download-list {
            grid-template-columns: 1fr;
          }

          .example-field,
          .example-field:nth-child(4n),
          .example-field:nth-child(2n) {
            border-right: 0;
          }

          .decision-strip {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .decision {
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .mistake-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .mistake {
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .faq-item summary {
            min-height: 70px;
            padding-block: 17px;
            font-size: 17px;
          }

          .faq-answer {
            padding-right: 4px;
          }

          .download-panel {
            padding: 34px 24px;
          }

          .download-gate-overlay {
            align-items: end;
            padding: 16px;
          }

          .download-gate-dialog {
            width: 100%;
            max-height: calc(100vh - 32px);
            border-radius: 25px;
          }

          .download-gate-layout {
            grid-template-columns: 1fr;
          }

          .download-gate-summary {
            display: none;
          }

          .download-gate-form-panel {
            padding: 34px 24px 28px;
          }

          .download-gate-form-panel h2 {
            padding-right: 44px;
            font-size: 28px;
          }

          .download-gate-fields {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .download-gate-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .download-gate-actions .button,
          .download-gate-cancel {
            width: 100%;
          }

          .download-ready {
            min-height: 0;
          }

          .source-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }


          .related-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .related-item,
          .related-item:nth-child(n + 4) {
            grid-column: auto;
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .cta-panel {
            padding: 38px 26px;
          }

          .cta-actions .button {
            min-width: 0;
          }
        }

        @media (max-width: 360px) {
          .hero-visual-inner,
          .scope-group,
          .gate-level,
          .download-panel,
          .cta-panel {
            padding-inline: 22px;
          }

          .download-gate-overlay {
            padding: 10px;
          }

          .download-gate-dialog {
            max-height: calc(100vh - 20px);
          }

          .download-gate-form-panel {
            padding-inline: 20px;
          }

          .visual-row {
            grid-template-columns: 52px minmax(0, 1fr);
            padding-inline: 14px;
          }

          .hero-actions,
          .download-actions,
          .cta-actions {
            gap: 10px;
          }
        }

        @media print {
          .hero-actions,
          .contents-section,
          .download-actions,
          .download-gate-overlay,
          .related-grid,
          .upward-links,
          .final-cta {
            display: none !important;
          }

          .stepes-guide,
          .article-section,
          .master-checklist,
          .summary-section,
          .launch-gate {
            background: #fff !important;
            color: #000 !important;
          }

          .launch-gate p,
          .launch-gate li,
          .launch-gate h2,
          .launch-gate h3,
          .launch-gate span {
            color: #000 !important;
          }

          .hero-visual {
            display: none !important;
          }

          .checklist-heading h2,
          .section-header h2,
          .blocker-note,
          .defect-example,
          .approval-record,
          .source-item {
            break-inside: avoid;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Testing Checklist</p>
            <h1 id="page-title">Website Localization Testing Checklist</h1>
            <p className="hero-deck">
              A translated website is not ready to launch until the complete experience has
              been tested. Use this checklist to validate language, layout, responsive
              behavior, user journeys, locale conventions, right-to-left support, search
              visibility, accessibility, and market readiness across every target locale.
            </p>

            <div className="hero-actions">
              <a className="button button--primary" href={`${CANONICAL}#linguistic-testing`}>
                <span>Start the Checklist</span>
                <ArrowIcon />
              </a>
              <button
                className="button button--secondary"
                type="button"
                onClick={(event) => openDownloadGate("pdf", event)}
              >
                <span>Download the Checklist</span>
              </button>
            </div>

            <div className="hero-meta" aria-label="Guide highlights">
              <span>10 Testing Workstreams</span>
              <span>Risk-Based Launch Gate</span>
              <span>Printable Checklist</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-inner">
              <div className="visual-header">
                <div className="visual-title">
                  <div className="visual-icon">
                    <ShieldIcon />
                  </div>
                  <div>
                    <span>Launch Readiness</span>
                    <strong>Localized Website Review</strong>
                  </div>
                </div>
                <span className="visual-release">Example</span>
              </div>

              <div className="visual-board">
                <div className="visual-row">
                  <span className="visual-locale">fr-CA</span>
                  <div>
                    <span className="visual-test-name">Checkout Journey</span>
                    <span className="visual-test-detail">Locale and functional review</span>
                  </div>
                  <span className="status-chip status-chip--review">In Review</span>
                </div>
                <div className="visual-row">
                  <span className="visual-locale">ar-SA</span>
                  <div>
                    <span className="visual-test-name">Account Registration</span>
                    <span className="visual-test-detail">RTL and responsive review</span>
                  </div>
                  <span className="status-chip status-chip--review">In Review</span>
                </div>
                <div className="visual-row">
                  <span className="visual-locale">de-DE</span>
                  <div>
                    <span className="visual-test-name">Product Template</span>
                    <span className="visual-test-detail">Language and layout review</span>
                  </div>
                  <span className="status-chip status-chip--pass">Passed</span>
                </div>
                <div className="visual-row">
                  <span className="visual-locale">ja-JP</span>
                  <div>
                    <span className="visual-test-name">Lead Form</span>
                    <span className="visual-test-detail">Validation and routing</span>
                  </div>
                  <span className="status-chip status-chip--blocker">Needs Fix</span>
                </div>
              </div>

              <div className="visual-footer">
                <div className="visual-metric">
                  <strong>Mapped</strong>
                  <span>Critical journeys</span>
                </div>
                <div className="visual-metric">
                  <strong>In Scope</strong>
                  <span>Target locales</span>
                </div>
                <div className="visual-metric">
                  <strong>Triaged</strong>
                  <span>Open issues</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell summary-layout">
          <div className="summary-intro">
            <p className="eyebrow">Key Takeaways</p>
            <h2 id="key-takeaways-title">Make Every Localized Experience Ready for Launch</h2>
            <p>
              Translation approval confirms that content has been converted into another
              language. Localization testing confirms that customers can understand and use
              the complete digital experience in the intended market.
            </p>
          </div>

          <div className="takeaway-list">
            {takeaways.map((item) => (
              <article className="takeaway" key={item.title}>
                <div className="takeaway-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contents-section" aria-labelledby="contents-title">
        <div className="shell wide-module">
          <div className="contents-heading">
            <h2 id="contents-title">In This Guide</h2>
          </div>

          <nav className="contents-desktop" aria-label="Guide contents">
            {tocGroups.map((group) => (
              <div className="contents-group" key={group.label}>
                <h3>{group.label}</h3>
                {group.items.map(([label, id]) => (
                  <a key={id} href={`${CANONICAL}#${id}`}>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <div className="contents-mobile">
            <button
              type="button"
              aria-expanded={contentsOpen}
              aria-controls="mobile-guide-contents"
              onClick={() => setContentsOpen((open) => !open)}
            >
              <span>Browse Guide Sections</span>
              <span className="contents-toggle" aria-hidden="true">
                {contentsOpen ? "−" : "+"}
              </span>
            </button>
            <nav
              id="mobile-guide-contents"
              className="contents-mobile-nav"
              aria-label="Guide contents"
              hidden={!contentsOpen}
            >
              {tocGroups.map((group) => (
                <div key={group.label}>
                  <h3>{group.label}</h3>
                  {group.items.map(([label, id]) => (
                    <a key={id} href={`${CANONICAL}#${id}`} onClick={closeMobileContents}>
                      {label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="why-localization-testing-matters"
        aria-labelledby="why-testing-title"
      >
        <div className="shell">
          <div className="reading reading--wide">
            <SectionHeader
              titleId="why-testing-title"
              title="Why Website Localization Testing Matters"
              intro="Localization problems often appear only after translated content is displayed, routed, submitted, searched, indexed, or used inside the real website."
            />
            <div className="article-copy">
              <p>
                A sentence may be translated correctly but become unreadable inside a narrow
                button. A regional page may look complete while its checkout, consent banner,
                search results, error messages, or confirmation emails return visitors to the
                source language. Different scripts can expose missing fonts or encoding
                problems, while local addresses and phone numbers can break forms designed
                around one market.
              </p>
              <p>
                Effective localization testing brings linguistic reviewers, web quality
                assurance teams, developers, designers, SEO specialists, accessibility
                experts, and regional stakeholders into one coordinated launch process. The
                goal is to resolve issues according to user impact and business risk—not to
                treat every imperfection as equally urgent.
              </p>
              <p className="quality-callout">
                Localization testing validates the complete user experience—not only the
                translated words.
              </p>
            </div>
          </div>

          <div className="wide-module dimension-grid" aria-label="Localization quality dimensions">
            {qualityDimensions.map(([title, text]) => (
              <article className="dimension" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="how-to-use-the-checklist"
        aria-labelledby="use-checklist-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="use-checklist-title"
            title="How to Use This Checklist"
            intro="Testing depth should reflect the website’s purpose, complexity, audience, and risk. Use this sequence to move from coverage planning to a controlled release decision."
            centered
          />

          <div className="process-grid">
            {useSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="testing-scope"
        aria-labelledby="testing-scope-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="testing-scope-title"
            title="Define the Localization Testing Scope"
            intro="A useful test plan begins with deliberate coverage rather than a collection of random URLs. Identify what must be validated before testing begins."
          />

          <div className="scope-grid">
            {scopeGroups.map((group) => (
              <article className="scope-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="plain-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="coverage-module">
            <div className="module-heading">
              <h3>Localization Testing Coverage Matrix</h3>
              <p>
                Track locale, template, journey, environment, risk, ownership, and status in
                one place to expose gaps before launch.
              </p>
            </div>

            <div className="table-wrap">
              <table className="data-table">
                <caption className="sr-only">
                  Example localization testing coverage matrix by locale, page, journey,
                  environment, risk, owner, and status.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Locale</th>
                    <th scope="col">Page or Template</th>
                    <th scope="col">Critical Journey</th>
                    <th scope="col">Device or Browser</th>
                    <th scope="col">Risk</th>
                    <th scope="col">Owner</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {coverageRows.map((row) => (
                    <tr key={`${row.locale}-${row.target}`}>
                      <th scope="row">{row.locale}</th>
                      <td>{row.target}</td>
                      <td>{row.journey}</td>
                      <td>{row.environment}</td>
                      <td>{row.risk}</td>
                      <td>{row.owner}</td>
                      <td>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mobile-records">
              {coverageRows.map((row) => (
                <article className="mobile-record" key={`${row.locale}-${row.target}-mobile`}>
                  <h3>{row.locale}</h3>
                  <div className="mobile-record-values">
                    {[
                      ["Page or Template", row.target],
                      ["Critical Journey", row.journey],
                      ["Device or Browser", row.environment],
                      ["Risk", row.risk],
                      ["Owner", row.owner],
                      ["Status", row.status],
                    ].map(([label, value]) => (
                      <div className="mobile-record-value" key={label}>
                        <span>{label}</span>
                        <p>{value}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="testing-ownership"
        aria-labelledby="ownership-title"
      >
        <div className="shell wide-module">
          <div className="ownership-intro">
            <div>
              <h2 id="ownership-title">Assign Clear Testing Ownership</h2>
            </div>
            <div className="ownership-copy">
              <p>
                Localization testing is multidisciplinary. Assigning every check to “the
                localization team” creates gaps because no single reviewer can reliably
                validate language, code, market requirements, SEO, accessibility, and business
                behavior.
              </p>
              <p>
                Name a primary owner for every workstream, identify supporting reviewers, and
                define who can accept risk or approve the final release.
              </p>
            </div>
          </div>

          <div className="table-wrap">
            <table className="data-table">
              <caption className="sr-only">
                Recommended primary and supporting owners for website localization testing.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Testing Area</th>
                  <th scope="col">Primary Owner</th>
                  <th scope="col">Supporting Reviewers</th>
                </tr>
              </thead>
              <tbody>
                {ownershipRows.map((row) => (
                  <tr key={row.area}>
                    <th scope="row">{row.area}</th>
                    <td>{row.primary}</td>
                    <td>{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mobile-records">
            {ownershipRows.map((row) => (
              <article className="mobile-record" key={`${row.area}-mobile`}>
                <h3>{row.area}</h3>
                <div className="mobile-record-values">
                  <div className="mobile-record-value">
                    <span>Primary Owner</span>
                    <p>{row.primary}</p>
                  </div>
                  <div className="mobile-record-value">
                    <span>Supporting Reviewers</span>
                    <p>{row.support}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="launch-gate"
        id="localization-launch-gate"
        aria-labelledby="launch-gate-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="launch-gate-title"
            title="Use the Stepes Localization Launch Gate"
            intro="Not every localization defect should have the same effect on a release. Define severity before testing begins so teams can connect each issue to user impact, business risk, and a clear launch decision."
          />

          <div className="gate-grid">
            {launchLevels.map((item) => (
              <article className="gate-level" key={item.level}>
                <h3>{item.level}</h3>
                <span className="gate-label">Impact</span>
                <p>{item.impact}</p>
                <span className="gate-label">Typical Examples</span>
                <p>{item.examples}</p>
                <p className="gate-decision">{item.decision}</p>
              </article>
            ))}
          </div>

          <div className="exit-panel">
            <div>
              <h3>Recommended Launch Exit Criteria</h3>
            </div>
            <StaticChecklist items={exitCriteria} dark />
          </div>
        </div>
      </section>

      <section className="master-checklist" aria-labelledby="master-checklist-title">
        <div className="shell wide-module master-intro">
          <div className="master-intro-grid">
            <div>
              <h2 id="master-checklist-title">The Complete Website Localization Testing Checklist</h2>
            </div>
            <div className="master-copy">
              <p>
                Review every applicable workstream in the real website experience. Each
                section explains why the category matters, identifies a recommended owner,
                and highlights issues that may require a launch stop.
              </p>
              <p>
                Use template coverage and risk-based sampling where appropriate, but never
                remove critical journeys, dynamic states, or market-specific requirements
                merely to shorten the testing cycle.
              </p>
            </div>
          </div>
        </div>

        <div className="shell wide-module">
          {checklistSections.map((section) => (
            <ChecklistChapter section={section} key={section.id} />
          ))}
        </div>
      </section>

      <section
        className="article-section article-section--blush"
        id="defect-management"
        aria-labelledby="defect-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="defect-title"
            title="Record, Triage, and Retest Localization Defects"
            intro="A useful issue report gives another person enough information to reproduce, understand, correct, and verify the problem without losing its language or market context."
          />

          <div className="defect-layout">
            <article className="defect-panel">
              <h3>Minimum Defect Information</h3>
              <p>Capture the evidence and context required for an actionable correction.</p>
              <div className="field-grid">
                {defectFields.map((item) => (
                  <span className="field-item" key={item}>{item}</span>
                ))}
              </div>
            </article>

            <article className="defect-panel">
              <h3>Classify the Root Cause</h3>
              <p>
                Route the problem to the underlying system, content, or process owner rather
                than repeatedly patching the same symptom on individual pages.
              </p>
              <div className="field-grid">
                {rootCauses.map((item) => (
                  <span className="field-item" key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="defect-example">
            <h3>Illustrative Defect Record</h3>
            <div className="example-grid">
              {[
                ["Locale", "Spanish for Mexico"],
                ["URL", "Localized checkout page"],
                ["Environment", "Staging, mobile Chrome"],
                ["Issue", "State selector shows US-only values"],
                ["Expected", "Mexican state list"],
                ["Severity", "Launch Blocker"],
                ["Category", "Locale configuration"],
                ["Owner and Retest", "Ecommerce engineering · Pending"],
              ].map(([label, value]) => (
                <div className="example-field" key={label}>
                  <span>{label}</span>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="regression-panel">
            <div>
              <h3>Retest Corrections and Shared Components</h3>
              <p>
                A corrected defect is not closed until it has been verified in context and
                any affected shared component, locale, or connected journey has been checked.
              </p>
            </div>
            <StaticChecklist items={regressionItems} />
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="launch-approval"
        aria-labelledby="approval-title"
      >
        <div className="shell wide-module">
          <div className="approval-layout">
            <div>
              <h2 id="approval-title">Complete the Final Localization Launch Approval</h2>
            </div>
            <div className="approval-copy">
              <p>
                Use the final approval checklist only after detailed testing and correction
                cycles are complete. Document the release decision, the remaining risks, and
                the people accountable for follow-up.
              </p>
              <StaticChecklist items={launchReadiness} />
            </div>
          </div>

          <div className="decision-strip" aria-label="Launch decision options">
            <article className="decision">
              <h3>Go</h3>
              <p>All required criteria have been met and the release is ready for production.</p>
            </article>
            <article className="decision">
              <h3>Conditional Go</h3>
              <p>
                No launch blocker remains, but approved lower-severity issues have documented
                owners, mitigation, and resolution dates.
              </p>
            </article>
            <article className="decision">
              <h3>No-Go</h3>
              <p>
                One or more unresolved issues create unacceptable user, business, legal,
                privacy, safety, technical, accessibility, or reputational risk.
              </p>
            </article>
          </div>

          <div className="approval-record">
            <h3>Localization Launch Approval Record</h3>
            <div className="record-fields">
              {[
                ["Release", "Website or deployment name"],
                ["Locales", "Languages and regional variants"],
                ["Test Status", "Coverage and completion summary"],
                ["Open Risks", "Accepted issues and mitigation"],
                ["Decision", "Go, Conditional Go, or No-Go"],
                ["Approvers", "Named release owners"],
                ["Approval Date", "Documented decision date"],
                ["Follow-Up", "Owner and target resolution"],
              ].map(([label, text]) => (
                <div className="record-field" key={label}>
                  <span>{label}</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="post-launch-validation"
        aria-labelledby="post-launch-title"
      >
        <div className="shell wide-module post-launch-layout">
          <div className="post-launch-copy">
            <h2 id="post-launch-title">Validate the Production Website After Launch</h2>
            <p className="section-intro">
              Approval in staging does not guarantee identical production behavior. Caching,
              routing, integrations, consent systems, analytics, and deployment configuration
              can change the final result.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/continuous-website-localization/">
              Plan ongoing quality with Continuous Website Localization
            </EditorialLink>
          </div>
          <StaticChecklist items={productionChecks} />
        </div>
      </section>

      <section
        className="article-section"
        id="localization-testing-mistakes"
        aria-labelledby="mistakes-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="mistakes-title"
            title="Common Website Localization Testing Mistakes"
            intro="Avoid weak testing patterns that create false confidence, hide systemic defects, or move preventable problems into production."
            centered
          />

          <div className="mistake-grid">
            {mistakes.map((item) => (
              <article className="mistake" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="localization-testing-faq"
        aria-labelledby="faq-title"
      >
        <div className="shell reading reading--wide">
          <SectionHeader
            titleId="faq-title"
            title="Frequently Asked Questions"
            intro="Use these answers to clarify testing scope, timing, roles, automation, launch blockers, and ongoing validation."
          />

          <div className="faq-panel">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--blush"
        id="download-checklist"
        aria-labelledby="download-title"
      >
        <div className="shell wide-module">
          <div className="download-panel">
            <div className="download-copy">
              <h2 id="download-title">Download the Website Localization Testing Checklist</h2>
              <p>
                Put the full framework into practice with a reusable checklist for planning,
                execution, defect management, launch approval, and production validation.
              </p>
              <div className="download-actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={(event) => openDownloadGate("pdf", event)}
                >
                  <span>Get PDF Checklist</span>
                  <ArrowIcon />
                </button>
                <button
                  className="button button--secondary"
                  type="button"
                  onClick={(event) => openDownloadGate("worksheet", event)}
                >
                  <span>Get Editable Worksheet</span>
                </button>
              </div>
              <p className="download-access-note">Complete a short form to access both formats.</p>
            </div>

            <div className="download-list" aria-label="Checklist download contents">
              {downloadItems.map((item) => (
                <div className="download-item" key={item}>
                  <span className="check-marker"><CheckIcon /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="standards-and-references"
        aria-labelledby="sources-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="sources-title"
            title="Standards and Technical References"
            intro="These authoritative sources provide technical foundations for language declaration, responsive accessibility, international search, and locale-aware software behavior."
          />

          <div className="source-list">
            {sources.map((source) => (
              <article className="source-item" key={source.title}>
                <span className="source-organization">{source.organization}</span>
                <div>
                  <h3>
                    <a
                      className="source-title-link"
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{source.title}</span>
                      <ArrowIcon size={17} />
                    </a>
                  </h3>
                  <p>{source.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="related-resources"
        aria-labelledby="related-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            titleId="related-title"
            title="Continue Building Your Multilingual Website Strategy"
            intro="Explore the next guide that matches your current decision—from workflow selection and AI quality routing to international search and continuous localization."
          />

          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="related-item" href={resource.url} key={resource.title}>
                <span className="related-category">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <span className="related-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>

          <div className="upward-links">
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">
              Explore Localization Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/guides/">
              Browse All Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/">
              Visit the Resource Center
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2 id="cta-title">Launch Every Localized Website With Confidence</h2>
              <p>
                Stepes can help your team plan multilingual website localization and align
                professional linguistic review with the visual, functional, responsive, SEO,
                accessibility, and market checks your launch requires.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button button--primary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
              <a
                className="button button--secondary"
                href="https://www.stepes.com/website-translation-services/"
              >
                <span>Website Translation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {downloadGate.open ? (
        <div
          className="download-gate-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDownloadGate();
          }}
        >
          <div
            className="download-gate-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={downloadsUnlocked ? "download-ready-title" : "download-gate-title"}
            aria-describedby={downloadsUnlocked ? "download-ready-description" : "download-gate-description"}
          >
            <button
              className="download-gate-close"
              type="button"
              aria-label="Close download form"
              onClick={closeDownloadGate}
            />

            <div className="download-gate-layout">
              <aside className="download-gate-summary" aria-label="Checklist benefits">
                <div className="download-gate-icon"><DownloadIcon /></div>
                <h3>Plan, Test, and Approve With One Practical Tool</h3>
                <p>
                  Use the checklist to coordinate linguistic, visual, functional, SEO,
                  accessibility, and market-readiness testing across every target locale.
                </p>
                <ul className="download-gate-benefits">
                  <li><span className="check-marker"><CheckIcon /></span><span>Ten grouped testing workstreams</span></li>
                  <li><span className="check-marker"><CheckIcon /></span><span>Risk-based defect severity and launch gate</span></li>
                  <li><span className="check-marker"><CheckIcon /></span><span>Final approval and production smoke-test records</span></li>
                </ul>
              </aside>

              <div className="download-gate-form-panel">
                {!downloadsUnlocked ? (
                  <>
                    <h2 id="download-gate-title">Get the Website Localization Testing Checklist</h2>
                    <p className="download-gate-intro" id="download-gate-description">
                      Complete the short form to access the PDF checklist and editable worksheet.
                    </p>

                    <div className="selected-format" aria-label={`Selected format: ${selectedDownload.label}`}>
                      <DownloadIcon />
                      <div>
                        <strong>{selectedDownload.label}</strong>
                        <span>{selectedDownload.description}</span>
                      </div>
                    </div>

                    <form className="download-gate-form" onSubmit={submitDownloadGate} noValidate>
                      <div className="download-gate-fields">
                        <div className={`download-gate-field${formErrors.firstName ? " has-error" : ""}`}>
                          <label htmlFor="download-first-name">First Name</label>
                          <input
                            ref={firstFieldRef}
                            id="download-first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            aria-invalid={Boolean(formErrors.firstName)}
                            aria-describedby={formErrors.firstName ? "download-first-name-error" : undefined}
                            onInput={clearFieldError}
                          />
                          {formErrors.firstName ? (
                            <span className="download-gate-field-error" id="download-first-name-error" role="alert">
                              <AlertIcon />
                              <span>{formErrors.firstName}</span>
                            </span>
                          ) : null}
                        </div>
                        <div className={`download-gate-field${formErrors.lastName ? " has-error" : ""}`}>
                          <label htmlFor="download-last-name">Last Name</label>
                          <input
                            id="download-last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            aria-invalid={Boolean(formErrors.lastName)}
                            aria-describedby={formErrors.lastName ? "download-last-name-error" : undefined}
                            onInput={clearFieldError}
                          />
                          {formErrors.lastName ? (
                            <span className="download-gate-field-error" id="download-last-name-error" role="alert">
                              <AlertIcon />
                              <span>{formErrors.lastName}</span>
                            </span>
                          ) : null}
                        </div>
                        <div className={`download-gate-field${formErrors.email ? " has-error" : ""}`}>
                          <label htmlFor="download-work-email">Work Email</label>
                          <input
                            id="download-work-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            aria-invalid={Boolean(formErrors.email)}
                            aria-describedby={formErrors.email ? "download-work-email-error" : undefined}
                            onInput={clearFieldError}
                          />
                          {formErrors.email ? (
                            <span className="download-gate-field-error" id="download-work-email-error" role="alert">
                              <AlertIcon />
                              <span>{formErrors.email}</span>
                            </span>
                          ) : null}
                        </div>
                        <div className={`download-gate-field${formErrors.company ? " has-error" : ""}`}>
                          <label htmlFor="download-company">Company</label>
                          <input
                            id="download-company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            required
                            aria-invalid={Boolean(formErrors.company)}
                            aria-describedby={formErrors.company ? "download-company-error" : undefined}
                            onInput={clearFieldError}
                          />
                          {formErrors.company ? (
                            <span className="download-gate-field-error" id="download-company-error" role="alert">
                              <AlertIcon />
                              <span>{formErrors.company}</span>
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <label className="download-gate-consent">
                        <input name="updates" type="checkbox" />
                        <span>Send me occasional localization insights and updates from Stepes.</span>
                      </label>

                      <p className="download-gate-privacy">
                        Stepes will use your information to provide the requested resource.
                        Review the{` `}
                        <a href="https://www.stepes.com/privacy-policy/">Privacy Policy</a>.
                      </p>

                      <div className="download-gate-actions">
                        <button className="button button--primary" type="submit">
                          <span>Get the Checklist</span>
                          <ArrowIcon />
                        </button>
                        <button
                          className="download-gate-cancel"
                          type="button"
                          onClick={closeDownloadGate}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="download-ready">
                    <div className="download-ready-icon"><CheckIcon /></div>
                    <h2 id="download-ready-title">Your Checklist Is Ready</h2>
                    <p id="download-ready-description">
                      Both formats are available so you can print the checklist or manage the
                      testing program in an editable worksheet.
                    </p>
                    <div className="download-ready-links">
                      {Object.entries(gatedDownloads).map(([key, asset]) => (
                        <a
                          className={`button ${key === downloadGate.asset ? "button--primary gate-download-link" : "button--secondary"}`}
                          href={asset.url}
                          download
                          key={key}
                        >
                          <span>{asset.action}</span>
                          {key === downloadGate.asset ? <DownloadIcon /> : null}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
