import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl = "https://www.stepes.com/resources/localization-guides/android-app-localization-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const takeaways = [
  {
    "title": "Start with internationalization.",
    "text": "Externalize user-facing content, complete the default resource set, and remove assumptions tied to one language or region before translation begins."
  },
  {
    "title": "Treat Android resources as structured software assets.",
    "text": "Resource keys, placeholders, plural forms, markup, comments, and locale qualifiers must remain technically valid throughout translation."
  },
  {
    "title": "Use one resource foundation across UI systems.",
    "text": "Jetpack Compose normally consumes the same Android resources as traditional Views, but both implementations require context-aware translation and multilingual testing."
  },
  {
    "title": "Publish only production-ready locales.",
    "text": "Per-app language settings and library dependencies can expose languages users can select, even when the complete experience is not ready."
  },
  {
    "title": "Test before and after translation.",
    "text": "Pseudolocales reveal internationalization defects early; localized builds reveal linguistic, visual, functional, accessibility, and market-specific issues."
  },
  {
    "title": "Localize the full customer journey.",
    "text": "A translated strings.xml file does not cover backend messages, notifications, support content, third-party SDKs, commerce flows, or Google Play."
  },
  {
    "title": "Plan for continuous releases.",
    "text": "Translation memory, terminology, contextual assets, automated validation, and repository or API integrations help keep every locale synchronized as the app evolves."
  }
];
const frameworkStages = [
  {
    "num": "1",
    "title": "Scope",
    "goal": "Define languages, markets, platforms, content, risks, and release priorities.",
    "outputs": "Locale plan, content inventory, ownership, timeline"
  },
  {
    "num": "2",
    "title": "Prepare",
    "goal": "Make the app technically ready for multilingual content and behavior.",
    "outputs": "Complete default resources, externalized strings, locale-aware logic"
  },
  {
    "num": "3",
    "title": "Contextualize",
    "goal": "Give translators the information needed to understand each string.",
    "outputs": "Comments, screenshots, terminology, constraints, user-flow context"
  },
  {
    "num": "4",
    "title": "Translate",
    "goal": "Produce accurate, natural language while protecting technical structure.",
    "outputs": "Reviewed resources, approved terminology, validated placeholders"
  },
  {
    "num": "5",
    "title": "Integrate",
    "goal": "Return localized content to the codebase and build environment safely.",
    "outputs": "Compiling resources, locale configuration, synchronized modules"
  },
  {
    "num": "6",
    "title": "Validate",
    "goal": "Test language, layout, behavior, accessibility, devices, and store content.",
    "outputs": "Issue log, corrected builds, release approval"
  },
  {
    "num": "7",
    "title": "Operate",
    "goal": "Keep every supported locale current across recurring releases.",
    "outputs": "Change detection, reusable language assets, automated QA, reporting"
  }
];
const richSections = [
  {
    "id": "plan-localization-scope",
    "title": "Plan Your Android Localization Scope",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>The first localization task is not sending XML files for translation. It is identifying the complete experience that must work for each market.</p>\n<h3>Define Languages, Locales, and Market Variants</h3>\n<p>A language is not always a sufficient production target. Spanish for Mexico may require different terminology, formatting, regulatory wording, and commercial content from Spanish for Spain. French for Canada can differ from French for France. Chinese may require Simplified or Traditional script distinctions and market-specific usage.</p>\n<p>Define each target at the level the product requires:</p>\n<ul>\n<li>language;</li>\n<li>script;</li>\n<li>region;</li>\n<li>country or commercial market;</li>\n<li>legal or regulatory jurisdiction;</li>\n<li>app-store market;</li>\n<li>supported currency and payment model;</li>\n<li>preferred tone, formality, and terminology.</li>\n</ul>\n<p>Use broad language resources when they serve the complete audience well. Create regional or script-specific variants when user expectations, product requirements, or local obligations justify the difference.</p>\n<h3>Inventory the Complete User Journey</h3>\n<p>Map every surface where customers encounter language:</p>\n<ul>\n<li>onboarding, sign-in, and account recovery;</li>\n<li>navigation, buttons, dialogs, forms, and validation;</li>\n<li>permissions and privacy choices;</li>\n<li>search, filters, sorting, and empty states;</li>\n<li>errors, warnings, status messages, and confirmations;</li>\n<li>subscriptions, checkout, billing, and cancellation;</li>\n<li>push notifications and notification actions;</li>\n<li>widgets, shortcuts, deep links, and app links;</li>\n<li>embedded help, webviews, chat, and customer support;</li>\n<li>emails, SMS messages, and transactional communications;</li>\n<li>legal notices and consent language;</li>\n<li>Google Play listings, screenshots, products, and release notes.</li>\n</ul>\n<p>This inventory prevents a common launch problem: a polished translated interface surrounded by source-language messages from backend systems, third-party components, or operational content.</p>\n<h3>Confirm the Technical Architecture</h3>\n<p>Document how the Android product is built and delivered:</p>\n<ul>\n<li>Kotlin, Java, or a mixed codebase;</li>\n<li>Jetpack Compose, traditional Views, or both;</li>\n<li>app modules and dynamic feature modules;</li>\n<li>internal and third-party libraries;</li>\n<li>Android App Bundles and language-resource delivery;</li>\n<li>server-driven UI or remote configuration;</li>\n<li>JSON, CSV, XLIFF, spreadsheets, or proprietary localization formats;</li>\n<li>repository, build, and continuous integration environments;</li>\n<li>existing language picker or locale-management code.</li>\n</ul>\n<p>This information determines where content lives, how locales are detected, what can be automated, and which multilingual behaviors require engineering work.</p>\n<h3>Assemble a Localization Kit</h3>\n<p>A useful Android localization kit can include:</p>\n<ul>\n<li>source resource files;</li>\n<li>an export of all user-facing strings;</li>\n<li>build or test access;</li>\n<li>screenshots or screen recordings;</li>\n<li>Figma references;</li>\n<li>developer comments;</li>\n<li>resource-key descriptions;</li>\n<li>character or layout constraints;</li>\n<li>product terminology;</li>\n<li>style and tone guidance;</li>\n<li>translation memory from earlier releases;</li>\n<li>market-specific requirements;</li>\n<li>release schedule and priority workflows;</li>\n<li>reviewer names and approval responsibilities.</li>\n</ul>\n<p>The goal is not to document every screen perfectly before work begins. It is to resolve the ambiguities and technical constraints most likely to create repeated questions, inconsistent language, or rework.</p>\n<p><a href=\"https://www.stepes.com/resources/localization-guides/how-to-prepare-a-mobile-app-for-localization/\">Prepare a Mobile App for Localization</a></p>"
  },
  {
    "id": "android-resources",
    "title": "Understand Android Resources and Locale Directories",
    "wide": false,
    "visual": "resource-tree",
    "leadHtml": "<p>Android separates many user-facing assets from application logic and stores them within the project’s <code>res/</code> directory. At runtime, the system selects the resource set that best matches the active configuration.</p>",
    "html": "<h3>Begin With Complete Default Resources</h3>\n<p>The default string file is normally:</p>\n<pre><code class=\"language-text\">res/values/strings.xml\n</code></pre>\n<p>It serves as the ultimate fallback when a locale-specific value is unavailable. The default resource set must include every resource the app requires. A localized file may contain only the strings that differ for that locale, but the unqualified default set cannot safely be incomplete.</p>\n<p>The same principle applies beyond strings. If code refers to a required drawable, font, color, or other resource, an appropriate default must exist.</p>\n<p>Android’s official localization documentation explains that a missing required default resource can prevent the app from loading under an unsupported locale. This makes default-resource completeness a release requirement, not an editorial preference.</p>\n<h3>Use Locale-Specific Resource Directories</h3>\n<p>A typical resource structure may look like this:</p>\n<pre><code class=\"language-text\">res/\n├── values/\n│   └── strings.xml\n├── values-es/\n│   └── strings.xml\n├── values-fr-rCA/\n│   └── strings.xml\n├── values-pt-rBR/\n│   └── strings.xml\n└── values-b+zh+Hans/\n    └── strings.xml\n</code></pre>\n<p>These examples represent:</p>\n<ul>\n<li><code>values-es</code>: Spanish without a region-specific override;</li>\n<li><code>values-fr-rCA</code>: French for Canada;</li>\n<li><code>values-pt-rBR</code>: Portuguese for Brazil;</li>\n<li><code>values-b+zh+Hans</code>: a BCP 47-style qualifier for Simplified Chinese.</li>\n</ul>\n<p>Android supports language-only, language-region, and BCP 47 language-script-region qualifiers. Use the least specific resource that is correct for the intended audience, then add variants only where the content truly differs.</p>\n<h3>Understand Fallback Behavior</h3>\n<p>Suppose <code>res/values-ja/strings.xml</code> does not define the app title. Android can fall back to the title in <code>res/values/strings.xml</code>.</p>\n<p>Fallback is useful for intentionally shared content, but it can also hide omissions. A missing Japanese translation may display in the source language without causing a build failure. Teams therefore need both technical validation and in-product language review.</p>\n<h3>Localize More Than Strings When Needed</h3>\n<p>Locale-specific resources can include:</p>\n<ul>\n<li>drawables and images;</li>\n<li>audio;</li>\n<li>fonts;</li>\n<li>XML assets;</li>\n<li>raw resources;</li>\n<li>product names and manifest-linked labels;</li>\n<li>localized graphics containing text;</li>\n<li>market-specific legal or instructional content.</li>\n</ul>\n<p>Do not duplicate assets unnecessarily. A brand mark with no text may be appropriate across all locales, while a promotional graphic containing a headline requires a localized version.</p>\n<h3>Review Modules and Library Dependencies</h3>\n<p>Modern Android applications may receive resources from:</p>\n<ul>\n<li>the main app module;</li>\n<li>feature modules;</li>\n<li>internal shared libraries;</li>\n<li>third-party libraries;</li>\n<li>SDKs.</li>\n</ul>\n<p>This matters when generating the supported locale list. Android Gradle Plugin can detect locales from app modules and library dependencies, so an otherwise useful library may introduce languages the product team did not intend to publish.</p>\n<p>Review the final locale inventory before release. Where appropriate, configure resource filtering so the packaged app reflects the languages the product actually supports.</p>\n<p><a href=\"https://www.stepes.com/software-internationalization-services/\">Explore Software Internationalization Services</a></p>"
  },
  {
    "id": "translation-ready-strings",
    "title": "Make Android Strings Translation-Ready",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>A technically valid source file can still be difficult to translate well. Translation readiness depends on the way strings are written, identified, documented, and protected.</p>\n<h3>Move User-Facing Text Out of Code</h3>\n<p>Avoid hard-coded interface text:</p>\n<pre><code class=\"language-kotlin\">Text(&quot;Complete your order&quot;)\n</code></pre>\n<p>Use a string resource instead:</p>\n<pre><code class=\"language-kotlin\">Text(\n    text = stringResource(R.string.checkout_complete_order)\n)\n</code></pre>\n<p>Externalized content can be extracted, translated, validated, reused, and updated without editing application logic.</p>\n<p>Review more than visible <code>Text</code> components. Hard-coded language can also appear in:</p>\n<ul>\n<li>error handlers;</li>\n<li>logs that surface to users;</li>\n<li>content descriptions;</li>\n<li>snackbars and toasts;</li>\n<li>validation messages;</li>\n<li>notifications;</li>\n<li>dialog builders;</li>\n<li>test data that reaches production;</li>\n<li>server-response mappings;</li>\n<li>embedded HTML.</li>\n</ul>\n<h3>Use Stable, Meaningful Resource Keys</h3>\n<p>A descriptive key gives developers, translators, and reviewers useful context:</p>\n<pre><code class=\"language-xml\">&lt;string name=&quot;checkout_complete_order&quot;&gt;Complete your order&lt;/string&gt;\n</code></pre>\n<p>A generic key does not:</p>\n<pre><code class=\"language-xml\">&lt;string name=&quot;button_17&quot;&gt;Complete your order&lt;/string&gt;\n</code></pre>\n<p>Good keys should:</p>\n<ul>\n<li>describe purpose or screen context;</li>\n<li>remain stable when English wording changes;</li>\n<li>distinguish identical words used in different ways;</li>\n<li>avoid embedding the complete source sentence;</li>\n<li>support reliable change tracking and translation-memory reuse.</li>\n</ul>\n<p>For example, “Save” can describe storing a file, retaining money, or rescuing a game state. Separate keys reduce the risk of applying one translation to unrelated meanings.</p>\n<h3>Use the Right Android String Type</h3>\n<p>Android supports three primary string-resource types:</p>\n<ul>\n<li><code>&lt;string&gt;</code> for individual strings;</li>\n<li><code>&lt;string-array&gt;</code> for arrays of related values;</li>\n<li><code>&lt;plurals&gt;</code> for quantity-dependent messages.</li>\n</ul>\n<p>Choose the structure that reflects the application behavior. Do not flatten plural logic or concatenate fragments simply because a spreadsheet workflow is easier.</p>\n<h3>Mark Only Truly Nontranslatable Content</h3>\n<p>The <code>translatable=&quot;false&quot;</code> attribute can protect strings that should remain unchanged, such as:</p>\n<ul>\n<li>internal identifiers;</li>\n<li>technical tokens;</li>\n<li>invariant product names;</li>\n<li>test values;</li>\n<li>URLs;</li>\n<li>legal marks that must retain an approved form.</li>\n</ul>\n<p>Do not use it to bypass localization for customer-facing content. A string that is difficult to manage still needs an intentional language decision.</p>\n<h3>Add Translator Context</h3>\n<p>Short UI strings are often ambiguous outside the app. Useful context includes:</p>\n<ul>\n<li>the screen or feature;</li>\n<li>whether the string is a noun, verb, command, or status;</li>\n<li>the user action that triggers it;</li>\n<li>preceding and following content;</li>\n<li>variable meanings;</li>\n<li>maximum or preferred length;</li>\n<li>whether line wrapping is acceptable;</li>\n<li>audience, tone, and formality;</li>\n<li>screenshots or a test build.</li>\n</ul>\n<p>Consider the word “Apply.” Depending on context, it may mean submit a form, use a discount, request a job, add a filter, or place a setting into effect. A screenshot and a short developer comment can prevent multiple review cycles.</p>\n<h3>Avoid Sentence Concatenation</h3>\n<p>Avoid building messages from independent fragments:</p>\n<pre><code class=\"language-text\">&quot;Welcome, &quot; + userName + &quot;. You have &quot; + count + &quot; messages.&quot;\n</code></pre>\n<p>Translate a complete message with protected placeholders instead. Languages can require different word order, agreement, punctuation, and plural forms. Fragmented strings can make a correct translation impossible.</p>\n<h3>Protect Placeholders, Markup, and Escapes</h3>\n<p>Android resources may contain:</p>\n<ul>\n<li><code>%1$s</code>, <code>%2$d</code>, and other formatting arguments;</li>\n<li>XLIFF placeholder tags;</li>\n<li>HTML or styled markup;</li>\n<li>escape sequences;</li>\n<li>line breaks;</li>\n<li>URLs;</li>\n<li>product codes;</li>\n<li>nonbreaking spaces;</li>\n<li>Unicode characters.</li>\n</ul>\n<p>These elements should be identified and validated automatically wherever possible.</p>\n<blockquote>\n<p><strong>A translation can be linguistically correct and still break the app if a key, placeholder, escape sequence, or markup element is changed.</strong></p>\n</blockquote>"
  },
  {
    "id": "plurals-and-dynamic-content",
    "title": "Handle Plurals and Dynamic Messages Correctly",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>English often distinguishes only “one” and “other.” Other languages can require additional quantity categories or different sentence structures.</p>\n<p>A basic Android plural resource looks like this:</p>\n<pre><code class=\"language-xml\">&lt;plurals name=&quot;cart_items&quot;&gt;\n    &lt;item quantity=&quot;one&quot;&gt;%1$d item&lt;/item&gt;\n    &lt;item quantity=&quot;other&quot;&gt;%1$d items&lt;/item&gt;\n&lt;/plurals&gt;\n</code></pre>\n<p>A target language may need a different set of supported forms. Translators should receive the complete plural structure, the meaning of the count, and an example of how the message appears.</p>\n<h3>Use Positional Placeholders</h3>\n<p>Numbered placeholders let translators reorder values:</p>\n<pre><code class=\"language-xml\">&lt;string name=&quot;order_summary&quot;&gt;\n    Order %1$s includes %2$d items.\n&lt;/string&gt;\n</code></pre>\n<p>The target language may place the order number, quantity, or noun in a different position. Positional arguments make that change possible without altering application logic.</p>\n<h3>Translate the Complete Message</h3>\n<p>Avoid assembling sentences from:</p>\n<ul>\n<li>separate prefixes and suffixes;</li>\n<li>independent nouns;</li>\n<li>adjective fragments;</li>\n<li>standalone punctuation;</li>\n<li>untranslated runtime labels.</li>\n</ul>\n<p>Complete messages give linguists control over grammar, word order, agreement, and tone.</p>\n<h3>Plan for Grammatical Variants</h3>\n<p>Some products need different wording based on:</p>\n<ul>\n<li>formality;</li>\n<li>user role;</li>\n<li>grammatical gender;</li>\n<li>social context;</li>\n<li>market-specific conventions.</li>\n</ul>\n<p>Android 14 added grammatical-inflection support for apps that provide appropriate gender-specific localized resources. This is an advanced option, not a requirement for every product. Use it only when the experience, language, and privacy model justify collecting or applying that preference.</p>"
  },
  {
    "id": "jetpack-compose-localization",
    "title": "Localize Android Apps Built With Jetpack Compose",
    "wide": false,
    "visual": "compose-flow",
    "leadHtml": "<p>Jetpack Compose does not require a separate translation-resource architecture. Compose normally consumes the same Android project resources used by traditional Views.</p>",
    "html": "<h3>Retrieve Strings With <code>stringResource</code></h3>\n<pre><code class=\"language-kotlin\">Text(\n    text = stringResource(R.string.checkout_complete_order)\n)\n</code></pre>\n<p>Formatted values can be passed through the same resource call:</p>\n<pre><code class=\"language-kotlin\">Text(\n    text = stringResource(\n        R.string.order_summary,\n        orderNumber,\n        itemCount\n    )\n)\n</code></pre>\n<h3>Retrieve Plurals With <code>pluralStringResource</code></h3>\n<pre><code class=\"language-kotlin\">Text(\n    text = pluralStringResource(\n        R.plurals.cart_items,\n        itemCount,\n        itemCount\n    )\n)\n</code></pre>\n<p>The quantity selects the plural form. When the number also appears in the displayed message, it is supplied as a formatting argument as well.</p>\n<h3>Keep Composables Free of Hard-Coded Production Text</h3>\n<p>Review:</p>\n<ul>\n<li>buttons and labels;</li>\n<li>dialogs and bottom sheets;</li>\n<li>navigation items;</li>\n<li>empty states;</li>\n<li>snackbar messages;</li>\n<li>validation feedback;</li>\n<li>icons and content descriptions;</li>\n<li>preview content that may be copied into production.</li>\n</ul>\n<p>Compose makes UI construction concise, which can make hard-coded text easy to introduce. Code review and static analysis should treat localizability as a standard quality requirement.</p>\n<h3>Handle Locale Changes as UI State</h3>\n<p>When the app locale changes, the interface must resolve the newly selected resources. Compose can recompose when configuration-dependent state changes, but custom locale handling must be implemented carefully.</p>\n<p>Read locale-sensitive configuration through Compose-aware state rather than assuming a global locale lookup will trigger recomposition. Test language switching while the app is running, including navigation, dialogs, retained screens, and mixed Compose/View flows.</p>\n<h3>Preview Different Locales and Text Sizes</h3>\n<p>Compose previews can display a composable under a specified locale:</p>\n<pre><code class=\"language-kotlin\">@Preview(locale = &quot;es&quot;)\n</code></pre>\n<p>Use preview configurations to review:</p>\n<ul>\n<li>long-text languages;</li>\n<li>RTL locales such as Arabic;</li>\n<li>Japanese and other scripts with different line behavior;</li>\n<li>larger font scales;</li>\n<li>phone, tablet, foldable, and landscape layouts.</li>\n</ul>\n<p>Previewing accelerates early visual checks, but it does not replace a complete localized build. Runtime content, navigation, backend messages, fonts, third-party components, and device behavior still need in-product testing.</p>\n<h3>Use Screenshot Testing Selectively</h3>\n<p>Compose Preview Screenshot Testing can compare rendered previews with approved reference images. It is useful for detecting visual regressions across selected locales, screen sizes, themes, and font scales.</p>\n<p>Automated screenshots are most effective when teams choose representative high-risk configurations rather than generating an unmanageable number of snapshots.</p>\n<h3>Validate Mixed Compose and View Codebases</h3>\n<p>Compose and Views can share the same XML resources, but they may differ in:</p>\n<ul>\n<li>configuration handling;</li>\n<li>preview tools;</li>\n<li>accessibility implementation;</li>\n<li>custom component behavior;</li>\n<li>layout and text measurement;</li>\n<li>test frameworks.</li>\n</ul>\n<p>Test transitions between the two systems and ensure both respond consistently to locale changes.</p>"
  },
  {
    "id": "per-app-languages",
    "title": "Support Android Per-App Languages",
    "wide": false,
    "visual": "language-flow",
    "leadHtml": "<p>Android 13 introduced centralized per-app language preferences. Users can select an app language independently of the device language through system settings, while AndroidX provides backward-compatible options for earlier versions.</p>",
    "html": "<h3>Distinguish Device and App Language</h3>\n<p>A user may keep the device interface in English while using a banking, messaging, or learning app in Spanish. The product must define which locale controls:</p>\n<ul>\n<li>application strings;</li>\n<li>dates and numbers;</li>\n<li>content recommendations;</li>\n<li>server responses;</li>\n<li>support language;</li>\n<li>legal content;</li>\n<li>market or currency behavior.</li>\n</ul>\n<p>App language and commercial market are related but not identical. A user selecting French does not necessarily change country, currency, or legal jurisdiction.</p>\n<h3>Prefer Automatic Locale Configuration Where Appropriate</h3>\n<p>With Android Gradle Plugin 8.1 and later, projects can enable automatic locale configuration:</p>\n<pre><code class=\"language-kotlin\">android {\n    androidResources {\n        generateLocaleConfig = true\n    }\n}\n</code></pre>\n<p>The project also declares its default locale in <code>resources.properties</code>. Android Gradle Plugin can then generate the <code>LocaleConfig</code> based on app and library resources.</p>\n<p>Automatic generation reduces manual maintenance, but it increases the importance of resource governance. Every detected locale must be ready for release.</p>\n<h3>Support Earlier Android Versions</h3>\n<p>For Android versions before 13, teams may continue to use AndroidX APIs and an in-app language picker. Products migrating from custom locale logic should:</p>\n<ul>\n<li>preserve existing user choices;</li>\n<li>synchronize the in-app picker with system settings;</li>\n<li>avoid presenting two conflicting controls;</li>\n<li>restore selections after update, backup, or reinstall where supported;</li>\n<li>test process restarts and configuration changes.</li>\n</ul>\n<h3>Publish Only Complete Locales</h3>\n<p>A language should not appear in the user’s app-language menu simply because a dependency includes a small set of translated resources.</p>\n<p>Before exposing a locale, verify:</p>\n<ul>\n<li>core UI coverage;</li>\n<li>critical user journeys;</li>\n<li>backend and notification support;</li>\n<li>help and legal content;</li>\n<li>accessibility strings;</li>\n<li>Google Play content;</li>\n<li>support ownership;</li>\n<li>testing status.</li>\n</ul>\n<blockquote>\n<p><strong>Adding a locale to the language menu does not localize the application.</strong></p>\n</blockquote>\n<h3>Test App Bundle Language Delivery</h3>\n<p>Google Play can deliver language resources as configuration APKs according to the user’s language settings. When users add or change an app language, additional language resources may be delivered.</p>\n<p>Test:</p>\n<ul>\n<li>the first launch after installation;</li>\n<li>switching to a newly added language;</li>\n<li>switching while offline or on a limited connection;</li>\n<li>fallback behavior before resources are available;</li>\n<li>dynamic feature modules;</li>\n<li>backup and restore;</li>\n<li>updates that add or remove locale support.</li>\n</ul>"
  },
  {
    "id": "locale-aware-experience",
    "title": "Localize Formats, Layouts, and RTL Experiences",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>Correct translations can still feel foreign or produce incorrect results when the application hard-codes source-market conventions.</p>\n<h3>Use Locale-Aware Formatting</h3>\n<p>Review every place the app handles:</p>\n<ul>\n<li>dates and times;</li>\n<li>time zones;</li>\n<li>numbers and percentages;</li>\n<li>decimal and grouping separators;</li>\n<li>currency symbols and codes;</li>\n<li>measurement units;</li>\n<li>calendars and numeral systems;</li>\n<li>names and honorifics;</li>\n<li>addresses and postal codes;</li>\n<li>phone numbers;</li>\n<li>sorting, searching, and collation.</li>\n</ul>\n<p>Use locale-aware platform and ICU-based formatting APIs rather than constructing presentation formats manually. Define which values follow app language, device region, account market, or a business-specific setting.</p>\n<p>For example, changing the app language should not silently convert a customer’s account currency. Language, region, market, and currency need separate product rules.</p>\n<h3>Design for Text Expansion</h3>\n<p>Translated strings can be shorter or much longer than the source. Build interfaces that can accommodate:</p>\n<ul>\n<li>multiline labels;</li>\n<li>variable button widths;</li>\n<li>taller dialogs;</li>\n<li>wrapped navigation;</li>\n<li>longer form instructions;</li>\n<li>expanding error messages;</li>\n<li>dynamic content with placeholders.</li>\n</ul>\n<p>Avoid fixed dimensions that only fit the source language. Truncation may hide the action, meaning, price, warning, or consent language a user needs.</p>\n<h3>Validate Fonts and Complex Scripts</h3>\n<p>Confirm that the font system supports:</p>\n<ul>\n<li>required glyphs;</li>\n<li>Arabic shaping;</li>\n<li>Indic scripts;</li>\n<li>CJK characters;</li>\n<li>combining marks;</li>\n<li>diacritics;</li>\n<li>punctuation;</li>\n<li>available weights;</li>\n<li>appropriate line height and baseline behavior.</li>\n</ul>\n<p>Font fallback can change visual hierarchy, spacing, and brand appearance even when every character renders.</p>\n<h3>Test Phones, Tablets, Foldables, and Orientation</h3>\n<p>A layout that works on one phone may fail on:</p>\n<ul>\n<li>small devices;</li>\n<li>tablets;</li>\n<li>foldables;</li>\n<li>landscape orientation;</li>\n<li>split-screen mode;</li>\n<li>large accessibility text;</li>\n<li>dense or low-resolution displays.</li>\n</ul>\n<p>Prioritize configurations using real product analytics, target-market device profiles, supported Android versions, and the risk of each workflow.</p>\n<h3>Prepare for Right-to-Left Languages</h3>\n<p>For Arabic, Hebrew, and other right-to-left experiences:</p>\n<ul>\n<li>use <code>start</code> and <code>end</code> instead of fixed <code>left</code> and <code>right</code>;</li>\n<li>allow layouts and navigation to mirror where appropriate;</li>\n<li>review directional icons;</li>\n<li>test mixed RTL and Latin content;</li>\n<li>validate numbers, prices, codes, and phone numbers;</li>\n<li>inspect form fields and cursor behavior;</li>\n<li>review charts, timelines, progress indicators, and gestures;</li>\n<li>test custom components and third-party SDKs.</li>\n</ul>\n<p>Not every asset should mirror. Brand marks, media controls, clock directions, and some data visualizations may retain their original direction. Make each decision according to meaning, not a blanket rule.</p>\n<blockquote>\n<p><strong>RTL quality requires more than displaying translated Arabic or Hebrew text. It requires validating layout behavior, navigation, inputs, icons, mixed-direction content, and complete user journeys.</strong></p>\n</blockquote>"
  },
  {
    "id": "android-pseudolocales",
    "title": "Test Localization Readiness With Android Pseudolocales",
    "wide": false,
    "visual": "pseudo-compare",
    "leadHtml": "<p>Pseudolocalization transforms source-language content to simulate characteristics of other languages before real translations are available.</p>\n<p>Android provides two pseudolocales:</p>\n<ul>\n<li><strong>English (XA):</strong> adds accents, brackets, and text expansion to left-to-right content;</li>\n<li><strong>AR (XB):</strong> simulates right-to-left and bidirectional behavior.</li>\n</ul>",
    "html": "<h3>What English (XA) Can Reveal</h3>\n<ul>\n<li>hard-coded strings;</li>\n<li>fixed-width controls;</li>\n<li>truncation and overlap;</li>\n<li>sentence concatenation;</li>\n<li>unprotected placeholders;</li>\n<li>text embedded in images;</li>\n<li>encoding problems;</li>\n<li>components that cannot grow.</li>\n</ul>\n<h3>What AR (XB) Can Reveal</h3>\n<ul>\n<li>layouts that do not mirror;</li>\n<li>hard-coded left and right positioning;</li>\n<li>directional icons that remain incorrect;</li>\n<li>punctuation problems;</li>\n<li>mixed-direction text issues;</li>\n<li>form alignment defects;</li>\n<li>custom components that ignore RTL behavior.</li>\n</ul>\n<h3>Enable Pseudolocales in Test Builds</h3>\n<p>For a Kotlin Gradle build:</p>\n<pre><code class=\"language-kotlin\">android {\n    buildTypes.getByName(&quot;debug&quot;) {\n        isPseudoLocalesEnabled = true\n    }\n}\n</code></pre>\n<p>Keep pseudolocales in developer-oriented builds. They are a test tool, not a production language offering.</p>\n<h3>Run Pseudolocalization Early and Repeatedly</h3>\n<p>Use pseudolocales:</p>\n<ul>\n<li>before the first translation handoff;</li>\n<li>during new-feature development;</li>\n<li>after major design-system changes;</li>\n<li>when migrating to Compose;</li>\n<li>when introducing per-app languages;</li>\n<li>before major multilingual releases;</li>\n<li>in regression testing.</li>\n</ul>\n<p>Pseudolocalization does not evaluate translation quality. It improves the technical readiness of the product so professional translations can be implemented with fewer preventable defects.</p>"
  },
  {
    "id": "accessibility-localization",
    "title": "Localize Android Accessibility Content",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>Accessibility text is part of the product language and should follow the same translation, terminology, review, and release process as visible UI content.</p>\n<h3>Include Every Assistive String</h3>\n<p>Localize:</p>\n<ul>\n<li>content descriptions;</li>\n<li>TalkBack labels;</li>\n<li>hints and instructions;</li>\n<li>validation and error guidance;</li>\n<li>custom control names;</li>\n<li>image descriptions;</li>\n<li>captions and transcripts;</li>\n<li>status updates;</li>\n<li>live announcements;</li>\n<li>form labels;</li>\n<li>accessible names for icons.</li>\n</ul>\n<p>Avoid hard-coded accessibility descriptions in Kotlin, Java, or Compose.</p>\n<h3>Use Compose Semantics Intentionally</h3>\n<p>Compose semantics provide meaning to accessibility services, testing frameworks, autofill, and other platform features. Standard components include useful semantics by default, while custom components may require explicit roles, descriptions, state information, or actions.</p>\n<p>Do not add redundant descriptions that cause TalkBack to repeat visible text unnecessarily. Test the experience with the actual interaction flow.</p>\n<h3>Test in Every Target Language</h3>\n<p>Accessibility QA should cover:</p>\n<ul>\n<li>TalkBack reading and pronunciation;</li>\n<li>reading and focus order;</li>\n<li>RTL focus movement;</li>\n<li>localized actions and hints;</li>\n<li>dynamic announcements;</li>\n<li>error recovery;</li>\n<li>keyboard and switch navigation where relevant;</li>\n<li>font scaling and display scaling;</li>\n<li>truncation at large text sizes;</li>\n<li>custom controls.</li>\n</ul>\n<p>Android 14 and later can support nonlinear font scaling up to 200%. Interfaces should be reviewed at the large text settings supported by the product’s target versions, not only at default size.</p>\n<p>Use both manual testing with accessibility services and automated checks. Automated tools can find some missing semantics and structural issues, but they cannot judge whether localized instructions are clear, natural, or sufficient for the user’s task.</p>"
  },
  {
    "id": "google-play-localization",
    "title": "Localize the Complete Google Play Experience",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>The installed app and its Google Play presence are separate localization surfaces. They should use consistent terminology, positioning, visuals, and market expectations.</p>\n<h3>Localize Store Listing Metadata</h3>\n<p>Prepare market-appropriate versions of:</p>\n<ul>\n<li>app name;</li>\n<li>short description;</li>\n<li>full description;</li>\n<li>release notes;</li>\n<li>promotional text;</li>\n<li>feature names;</li>\n<li>support and privacy references.</li>\n</ul>\n<p>Work within current character limits and policy requirements. Adapt the message to local search vocabulary and customer priorities without stuffing keywords or promising ranking outcomes.</p>\n<h3>Localize Visual Assets</h3>\n<p>Review:</p>\n<ul>\n<li>phone and tablet screenshots;</li>\n<li>feature graphics;</li>\n<li>preview videos;</li>\n<li>captions;</li>\n<li>text embedded in images;</li>\n<li>device frames;</li>\n<li>localized UI shown in screenshots;</li>\n<li>market-specific benefits or proof points.</li>\n</ul>\n<p>A translated description paired with source-language screenshots creates an incomplete storefront experience.</p>\n<h3>Localize Products and Subscriptions</h3>\n<p>Coordinate:</p>\n<ul>\n<li>product names;</li>\n<li>subscription titles;</li>\n<li>benefit descriptions;</li>\n<li>trial messaging;</li>\n<li>billing explanations;</li>\n<li>upgrade and cancellation language;</li>\n<li>purchase confirmations.</li>\n</ul>\n<p>Use language that matches the app’s actual commerce flow and the terminology users will encounter after installation.</p>\n<h3>Use Custom Store Listings Purposefully</h3>\n<p>Google Play custom store listings can support differentiated messaging for selected countries, search terms, audience states, or campaigns.</p>\n<p>Use them when the market or acquisition context genuinely requires a different proposition. Do not create variants that the localization and marketing teams cannot maintain across product updates.</p>\n<h3>Do Not Rely on Automatic Store Translation for Priority Markets</h3>\n<p>Google Play may display automated translations when an explicit localized listing is unavailable. Automated coverage can improve basic accessibility, but it does not provide the same control over terminology, persuasion, cultural relevance, screenshots, or product positioning.</p>\n<p>For priority markets, publish explicit, reviewed listings and localized visual assets.</p>\n<h3>Apply AI With Appropriate Control</h3>\n<p>Android Studio and Google Play workflows increasingly provide AI-assisted translation options. These tools can accelerate first-pass coverage, but they do not remove the need for:</p>\n<ul>\n<li>approved terminology;</li>\n<li>product and screen context;</li>\n<li>technical validation;</li>\n<li>market adaptation;</li>\n<li>risk-based human review;</li>\n<li>in-app testing.</li>\n</ul>\n<p>Use automation according to content type and consequence. Repeated low-risk interface text, regulated instructions, subscription terms, brand copy, and safety-critical messages should not automatically receive the same workflow.</p>"
  },
  {
    "id": "android-localization-testing",
    "title": "Test Localized Android Builds Before Release",
    "wide": true,
    "visual": "testing-matrix",
    "leadHtml": "<p>Resource validation proves that files are structurally usable. It does not prove that the user experience is accurate, complete, accessible, or functional.</p>\n<p>A strong testing plan combines the following layers.</p>",
    "html": "<h3>Test Critical User Journeys</h3>\n<p>Prioritize workflows that affect:</p>\n<ul>\n<li>account access;</li>\n<li>privacy and consent;</li>\n<li>payments and subscriptions;</li>\n<li>safety or regulated content;</li>\n<li>customer support;</li>\n<li>data entry;</li>\n<li>error recovery;</li>\n<li>conversion;</li>\n<li>retention.</li>\n</ul>\n<p>A minor alignment issue and an incorrect cancellation instruction do not carry the same risk. Route defects by user impact and release consequence.</p>\n<h3>Use Android Lint and Automated Validation</h3>\n<p>Android Lint can detect issues involving correctness, accessibility, usability, and internationalization. Run it locally and in continuous integration.</p>\n<p>Add localization-specific checks for:</p>\n<ul>\n<li>missing default resources;</li>\n<li>missing or unexpected locale keys;</li>\n<li>invalid XML;</li>\n<li>changed placeholders;</li>\n<li>malformed markup;</li>\n<li>incomplete plural forms;</li>\n<li>duplicated or unused resources;</li>\n<li>source-language leakage;</li>\n<li>unsupported locale directories;</li>\n<li>excessive length where a real constraint exists.</li>\n</ul>\n<p>Automation should stop technically unsafe content from entering a build. Human review should address meaning, usability, and market fit.</p>\n<h3>Use Previews, Emulators, and Physical Devices</h3>\n<p>A practical sequence is:</p>\n<ol>\n<li>use Compose previews and pseudolocales during development;</li>\n<li>run static and resource validation in CI;</li>\n<li>build each release locale;</li>\n<li>test representative configurations in emulators;</li>\n<li>validate high-risk markets and device profiles on physical devices;</li>\n<li>complete in-context linguistic and functional review;</li>\n<li>confirm store content before release.</li>\n</ol>\n<h3>Keep Regression Scope Risk-Based</h3>\n<p>Every release does not require manual review of every screen in every language. Use:</p>\n<ul>\n<li>automated tests;</li>\n<li>screenshot comparisons;</li>\n<li>translation-memory change analysis;</li>\n<li>new-and-modified string reports;</li>\n<li>prioritized user journeys;</li>\n<li>rotating market coverage;</li>\n<li>targeted regression for affected components.</li>\n</ul>\n<p>The release process should make it clear what changed, which locales were impacted, and what level of validation each change received.</p>\n<p><a href=\"https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/\">Use the Mobile App Localization Testing Checklist</a></p>"
  },
  {
    "id": "content-beyond-strings",
    "title": "Find the Language Android Resource Files Do Not Contain",
    "wide": false,
    "visual": "content-map",
    "leadHtml": "<p>Many Android localization problems originate outside the Android resource directory.</p>",
    "html": "<p>Review content delivered through:</p>\n<ul>\n<li>backend APIs;</li>\n<li>remote configuration;</li>\n<li>content management systems;</li>\n<li>server-driven UI;</li>\n<li>push notification services;</li>\n<li>webviews;</li>\n<li>embedded help centers;</li>\n<li>chat and support systems;</li>\n<li>transactional email and SMS;</li>\n<li>payment providers;</li>\n<li>identity-verification SDKs;</li>\n<li>map and location services;</li>\n<li>advertisements;</li>\n<li>third-party authentication;</li>\n<li>downloadable language packs;</li>\n<li>dynamic legal notices.</li>\n</ul>\n<p>For each source, define:</p>\n<ul>\n<li>source-language ownership;</li>\n<li>supported locales;</li>\n<li>fallback behavior;</li>\n<li>translation workflow;</li>\n<li>caching and update behavior;</li>\n<li>version control;</li>\n<li>testing responsibility;</li>\n<li>analytics or issue reporting.</li>\n</ul>\n<p>A fully translated <code>strings.xml</code> file does not guarantee a fully localized customer journey.</p>"
  },
  {
    "id": "continuous-android-localization",
    "title": "Keep Android Localization Synchronized With Every Release",
    "wide": false,
    "visual": null,
    "leadHtml": "",
    "html": "<p>Android products evolve continuously. Localization should move with development rather than waiting for large, manual handoffs.</p>\n<h3>Detect New, Changed, and Removed Content</h3>\n<p>Connect localization to the systems where content changes:</p>\n<ul>\n<li>source repositories;</li>\n<li>resource exports;</li>\n<li>design tools;</li>\n<li>content management systems;</li>\n<li>release branches;</li>\n<li>build pipelines;</li>\n<li>Google Play workflows.</li>\n</ul>\n<p>Track:</p>\n<ul>\n<li>new keys;</li>\n<li>modified source text;</li>\n<li>deleted or deprecated keys;</li>\n<li>moved content;</li>\n<li>changed placeholders;</li>\n<li>newly added locales;</li>\n<li>updates to screenshots and store listings.</li>\n</ul>\n<h3>Reuse Approved Language Assets</h3>\n<p>Translation memory stores approved source and target content for reuse. Terminology management controls product names, feature names, technical terms, abbreviations, and preferred language.</p>\n<p>Together, they help teams:</p>\n<ul>\n<li>avoid retranslating unchanged content;</li>\n<li>maintain consistent product language;</li>\n<li>focus review on new and changed material;</li>\n<li>preserve decisions across releases;</li>\n<li>coordinate app, help, marketing, and support content.</li>\n</ul>\n<p><a href=\"https://www.stepes.com/translation-memory/\">Explore Translation Memory</a><br />\n<a href=\"https://www.stepes.com/terminology-management/\">Explore Terminology Management</a></p>\n<h3>Connect Strings With Context</h3>\n<p>Automated extraction should not strip away the information linguists need. Attach:</p>\n<ul>\n<li>screenshots;</li>\n<li>feature and screen names;</li>\n<li>resource keys;</li>\n<li>Figma references;</li>\n<li>developer comments;</li>\n<li>character constraints;</li>\n<li>build links;</li>\n<li>user-flow descriptions.</li>\n</ul>\n<p>In-context review helps teams see whether a translation is appropriate for the screen, action, layout, and surrounding content.</p>\n<p><a href=\"https://www.stepes.com/software-ui-localization-in-context-translation/\">Explore In-Context UI Localization</a></p>\n<h3>Automate Technical Quality Checks</h3>\n<p>Before localized resources return to the codebase, validate:</p>\n<ul>\n<li>XML structure;</li>\n<li>keys;</li>\n<li>placeholders;</li>\n<li>tags;</li>\n<li>escaping;</li>\n<li>plural completeness;</li>\n<li>locale naming;</li>\n<li>unexpected source-language text;</li>\n<li>required protected content.</li>\n</ul>\n<p>Build validation should provide clear, actionable errors rather than forcing engineers to diagnose avoidable localization defects late in the release.</p>\n<h3>Protect Source Code, Builds, and User Data</h3>\n<p>Localization workflows may include source resources, screenshots, prerelease builds, product terminology, support content, and market-sensitive information. Define access according to role and project need. Use approved repositories and transfer methods, control build access, document retention expectations, and keep real customer data out of screenshots and test packages whenever possible.</p>\n<p>For enterprise programs, governance should also identify who may export strings, approve terminology, review sensitive content, access test builds, and authorize a locale for release. Security controls should support the workflow without stripping away the context linguists and reviewers need to do accurate work.</p>\n<h3>Coordinate Release Approval</h3>\n<p>Define ownership for:</p>\n<ul>\n<li>language approval;</li>\n<li>terminology;</li>\n<li>engineering integration;</li>\n<li>build generation;</li>\n<li>linguistic QA;</li>\n<li>accessibility;</li>\n<li>Google Play content;</li>\n<li>final release signoff.</li>\n</ul>\n<p>A locale is ready only when the required content and workflows are ready together.</p>\n<p><a href=\"https://www.stepes.com/developers/software-localization-api/\">Explore the Software Localization API</a><br />\n<a href=\"https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/\">Read the Continuous Localization for Mobile Apps Guide</a></p>"
  }
];
const testingRows = [
  {
    "layer": "Linguistic QA",
    "checks": "Accuracy, fluency, terminology, tone, context, completeness, dynamic messages",
    "participants": "Native linguists, in-market reviewers"
  },
  {
    "layer": "Visual QA",
    "checks": "Truncation, overlap, wrapping, alignment, font rendering, images, RTL",
    "participants": "Localization QA, design, engineering"
  },
  {
    "layer": "Functional QA",
    "checks": "Locale selection, fallback, formats, input, search, navigation, payments, deep links",
    "participants": "QA, engineering, product"
  },
  {
    "layer": "Accessibility QA",
    "checks": "TalkBack, semantics, focus order, large text, announcements, custom controls",
    "participants": "Accessibility QA, linguists, engineering"
  },
  {
    "layer": "Device QA",
    "checks": "API levels, screen sizes, tablets, foldables, orientation, market devices",
    "participants": "Mobile QA, release teams"
  },
  {
    "layer": "Store QA",
    "checks": "Metadata, screenshots, products, subscriptions, release notes, listing consistency",
    "participants": "Marketing, localization, product"
  }
];
const commonMistakes = [
  {
    "title": "Translating Only strings.xml",
    "text": "The app may still contain untranslated notifications, webviews, server messages, third-party flows, accessibility text, and Google Play content."
  },
  {
    "title": "Leaving Default Resources Incomplete",
    "text": "Localized files can be partial; the required default resource set cannot. Test the app under an unsupported locale."
  },
  {
    "title": "Hard-Coding Text in Kotlin, Java, or Compose",
    "text": "Hard-coded strings bypass translation workflows and appear unchanged under pseudolocales."
  },
  {
    "title": "Concatenating Sentence Fragments",
    "text": "Fragmented messages prevent translators from changing word order, agreement, punctuation, and plural logic."
  },
  {
    "title": "Reusing One Key for Different Meanings",
    "text": "The same English word may require different translations on different screens or in different grammatical roles."
  },
  {
    "title": "Omitting Context",
    "text": "Strings such as “Open,” “Apply,” “Order,” and “Back” cannot be translated reliably without knowing their function."
  },
  {
    "title": "Flattening Plurals",
    "text": "A two-form English spreadsheet does not represent the plural requirements of every language."
  },
  {
    "title": "Exposing Unfinished Languages",
    "text": "Automatic locale configuration or dependency resources can add languages to the app-language menu before the experience is complete."
  },
  {
    "title": "Assuming Translated Text Will Fit",
    "text": "Text expansion, font fallback, and large accessibility settings can break layouts that work in the source language."
  },
  {
    "title": "Treating RTL as a Text Requirement",
    "text": "RTL affects navigation, components, inputs, icons, gestures, and mixed-direction content."
  },
  {
    "title": "Leaving Accessibility Content in the Source Language",
    "text": "An interface is not fully localized when TalkBack labels, hints, or errors remain untranslated."
  },
  {
    "title": "Localizing the App but Not Google Play",
    "text": "Store listing language, screenshots, products, and release notes shape the customer experience before installation."
  },
  {
    "title": "Skipping Localized Build Testing",
    "text": "A valid XML file cannot reveal context errors, truncated buttons, incorrect locale formats, or broken user journeys."
  },
  {
    "title": "Retranslating Every Release From the Beginning",
    "text": "Without translation memory, terminology, and change detection, teams repeat work and lose earlier language decisions."
  },
  {
    "title": "Applying One AI Workflow to Every String",
    "text": "Content risk, context, brand value, regulatory consequence, and user impact should determine the translation and review model."
  }
];
const checklistGroups = [
  {
    "title": "Scope and Architecture",
    "items": [
      "Target languages, scripts, regions, and markets are defined.",
      "The complete user journey has been inventoried.",
      "Android resources, modules, libraries, server content, and Google Play assets are included.",
      "Default resources are complete.",
      "Locale directories and qualifiers are valid.",
      "User-facing content has been externalized.",
      "Locale-aware behavior is separated from market, currency, and legal logic.",
      "RTL support is enabled where required."
    ]
  },
  {
    "title": "Translation Preparation",
    "items": [
      "Resource keys are stable and meaningful.",
      "Strings have sufficient comments and visual context.",
      "Nontranslatable content is identified intentionally.",
      "Placeholders, tags, markup, and escape sequences are protected.",
      "Plural forms and dynamic messages are preserved.",
      "Concatenated sentences have been redesigned.",
      "Terminology and style guidance are approved.",
      "Existing translations and language assets are available."
    ]
  },
  {
    "title": "Implementation",
    "items": [
      "Translated resources compile successfully.",
      "Compose and View interfaces resolve the correct locale.",
      "Language changes update active screens correctly.",
      "Per-app language settings and any in-app picker remain synchronized.",
      "Only complete, approved locales are exposed.",
      "Locale-sensitive formats use appropriate APIs.",
      "Fonts support every required script.",
      "App Bundle language delivery has been tested.",
      "Server and third-party content follow the intended locale."
    ]
  },
  {
    "title": "Testing",
    "items": [
      "English (XA) pseudolocalization has been reviewed.",
      "AR (XB) RTL pseudolocalization has been reviewed.",
      "Linguistic QA is complete.",
      "Visual and layout QA is complete.",
      "Functional locale testing is complete.",
      "RTL and bidirectional testing is complete.",
      "TalkBack and accessibility testing are complete.",
      "Large text and display scaling have been tested.",
      "Representative Android versions and devices are covered.",
      "Critical user journeys have passed regression testing."
    ]
  },
  {
    "title": "Google Play and Release",
    "items": [
      "Store listing metadata is localized.",
      "Screenshots and visual assets show the localized experience.",
      "Products and subscriptions are localized.",
      "Release notes are ready.",
      "Policy-sensitive wording has been reviewed.",
      "App and store terminology are consistent.",
      "Final owners and approvals are documented.",
      "Ongoing update and support responsibilities are assigned."
    ]
  }
];
const professionalSections = [
  {
    "title": "Android Resource Localization",
    "items": [
      "XML strings, arrays, and plurals;",
      "locale-specific resource directories;",
      "manifest-linked labels;",
      "JSON, CSV, XLSX, XLIFF, and custom exports;",
      "protected keys, placeholders, markup, and variables."
    ]
  },
  {
    "title": "Jetpack Compose and Traditional Views",
    "items": [
      "shared Android resource workflows;",
      "Compose and View interfaces;",
      "mixed-codebase localization;",
      "locale-switching validation;",
      "multilingual build review."
    ]
  },
  {
    "title": "Context and Language Quality",
    "items": [
      "product terminology;",
      "translation memory;",
      "screenshots and visual references;",
      "developer comments;",
      "native linguistic review;",
      "in-context validation."
    ]
  },
  {
    "title": "Testing and Release Support",
    "items": [
      "linguistic, visual, functional, locale, RTL, and accessibility QA;",
      "phone, tablet, foldable, and orientation coverage;",
      "Google Play listings and localized assets;",
      "recurring releases and continuous localization workflows."
    ]
  }
];
const professionalLinks = [
  {
    "label": "Explore App Localization Services",
    "href": "https://www.stepes.com/app-localization-services/"
  },
  {
    "label": "Explore Software Localization Services",
    "href": "https://www.stepes.com/software-localization-services/"
  }
];
const faqs = [
  {
    "q": "How do you localize an Android app?",
    "aHtml": "<p>Begin by defining target locales and inventorying the complete customer journey. Externalize user-facing content, complete the default resources, prepare locale-specific Android resources, translate with context, protect technical syntax, reintegrate the localized files, and test each release across language, layout, behavior, accessibility, devices, and Google Play.</p>"
  },
  {
    "q": "Where are Android translations stored?",
    "aHtml": "<p>Android string translations are commonly stored in locale-specific <code>values-*</code> directories under <code>res/</code>. The default file is typically <code>res/values/strings.xml</code>, while alternatives may appear in directories such as <code>values-es</code>, <code>values-fr-rCA</code>, or BCP 47-qualified directories.</p>"
  },
  {
    "q": "Does Jetpack Compose use strings.xml?",
    "aHtml": "<p>Yes. Jetpack Compose normally retrieves the same Android string resources through functions such as <code>stringResource()</code> and <code>pluralStringResource()</code>. Compose does not require a separate translation architecture, although its UI state, previews, semantics, and testing still need localization-aware implementation.</p>"
  },
  {
    "q": "What is the difference between values-es and values-es-rMX?",
    "aHtml": "<p><code>values-es</code> provides general Spanish resources. <code>values-es-rMX</code> provides a Mexico-specific override. Android uses the more specific matching resource when available and falls back according to its resource-resolution rules.</p>"
  },
  {
    "q": "What are Android pseudolocales?",
    "aHtml": "<p>Android pseudolocales are developer testing locales. English (XA) adds accented and expanded text to expose hard-coded strings and layout constraints. AR (XB) simulates right-to-left behavior and helps reveal mirroring and bidirectional issues.</p>"
  },
  {
    "q": "How do Android per-app languages work?",
    "aHtml": "<p>On Android 13 and later, users can select an individual app’s language in system settings when the app declares supported locales. AndroidX supports compatible in-app language experiences for earlier versions. Teams can generate <code>LocaleConfig</code> automatically with current Android Gradle Plugin tooling or configure it manually when needed.</p>"
  },
  {
    "q": "Should every Android string be translated?",
    "aHtml": "<p>Every customer-facing string should receive an intentional language decision. Some technical identifiers, URLs, product names, or protected tokens may remain unchanged and can be marked nontranslatable. The attribute should not be used to exclude ordinary UI content simply because it is difficult to manage.</p>"
  },
  {
    "q": "How should Android plurals be translated?",
    "aHtml": "<p>Keep plural resources structured as <code>&lt;plurals&gt;</code> and provide translators with the complete message, quantity meaning, placeholders, and context. Target languages may require different quantity categories from English.</p>"
  },
  {
    "q": "How do you test an Android app in multiple languages?",
    "aHtml": "<p>Combine pseudolocalization, static analysis, resource validation, Compose previews, emulators, physical devices, and in-context review. Test language quality, layout, formats, functionality, RTL behavior, accessibility, critical user journeys, and Google Play content.</p>"
  },
  {
    "q": "Does Android app localization include Google Play?",
    "aHtml": "<p>It should. The installed app and Google Play listing are separate scopes, but users experience them as one product journey. Coordinate listing metadata, screenshots, products, subscriptions, release notes, and terminology with the localized app.</p>"
  },
  {
    "q": "Can AI translation be used for Android apps?",
    "aHtml": "<p>Yes, when the workflow matches the content and risk. AI can accelerate suitable first-pass translation and repeated low-risk content, but production quality still requires terminology, context, protected technical elements, automated validation, and appropriate human review.</p>"
  },
  {
    "q": "How much does Android app localization cost?",
    "aHtml": "<p>Cost depends on source volume, languages and regional variants, content repetition, file readiness, engineering work, linguistic review, testing scope, Google Play assets, release frequency, and risk requirements. Translation memory and a well-prepared continuous workflow can reduce repeated effort over time.</p>"
  }
];
const sources = [
  {
    "publisher": "Android Developers",
    "title": "Localize your app",
    "href": "https://developer.android.com/guide/topics/resources/localization"
  },
  {
    "publisher": "Android Developers",
    "title": "App resources overview",
    "href": "https://developer.android.com/guide/topics/resources/providing-resources"
  },
  {
    "publisher": "Android Developers",
    "title": "String resources",
    "href": "https://developer.android.com/guide/topics/resources/string-resource"
  },
  {
    "publisher": "Android Developers",
    "title": "Resources in Compose",
    "href": "https://developer.android.com/develop/ui/compose/resources"
  },
  {
    "publisher": "Android Developers",
    "title": "Per-app language preferences",
    "href": "https://developer.android.com/guide/topics/resources/app-languages"
  },
  {
    "publisher": "Android Developers",
    "title": "Test your app with pseudolocales",
    "href": "https://developer.android.com/guide/topics/resources/pseudolocales"
  },
  {
    "publisher": "Android Developers",
    "title": "Accessibility in Compose",
    "href": "https://developer.android.com/develop/ui/compose/accessibility"
  },
  {
    "publisher": "Android Developers",
    "title": "Improve your code with lint checks",
    "href": "https://developer.android.com/studio/write/lint"
  },
  {
    "publisher": "Google Play Console Help",
    "title": "Translate and localize your app",
    "href": "https://support.google.com/googleplay/android-developer/answer/9844778"
  },
  {
    "publisher": "Google Play Console Help",
    "title": "Add preview assets to showcase your app",
    "href": "https://support.google.com/googleplay/android-developer/answer/9866151"
  },
  {
    "publisher": "Google Play Console Help",
    "title": "Create custom store listings",
    "href": "https://support.google.com/googleplay/android-developer/answer/9867158"
  }
];
const relatedResources = [
  {
    "title": "How to Prepare a Mobile App for Localization",
    "href": "https://www.stepes.com/resources/localization-guides/how-to-prepare-a-mobile-app-for-localization/",
    "description": "Build internationalization, content, context, terminology, testing, and release readiness into the product before translation begins."
  },
  {
    "title": "iOS App Localization Guide",
    "href": "https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/",
    "description": "Learn how to manage String Catalogs, plural behavior, SwiftUI content, accessibility language, and App Store localization."
  },
  {
    "title": "Mobile App Localization Testing Checklist",
    "href": "https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/",
    "description": "Validate linguistic, visual, functional, locale, RTL, accessibility, device, and regression quality."
  },
  {
    "title": "Continuous Localization for Mobile Apps",
    "href": "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/",
    "description": "Connect translation, review, quality assurance, repositories, APIs, and recurring releases."
  },
  {
    "title": "App Localization Cost Guide",
    "href": "https://www.stepes.com/resources/localization-guides/app-localization-cost-guide/",
    "description": "Understand how language scope, string volume, repetition, engineering, review, testing, and turnaround affect budget."
  }
];
const tocItems = [
  {
    "id": "what-is-android-app-localization",
    "label": "What Is Android App Localization?"
  },
  {
    "id": "android-localization-framework",
    "label": "The Android Localization Framework"
  },
  {
    "id": "plan-localization-scope",
    "label": "Plan Your Android Localization Scope"
  },
  {
    "id": "android-resources",
    "label": "Understand Android Resources and Locale Directories"
  },
  {
    "id": "translation-ready-strings",
    "label": "Make Android Strings Translation-Ready"
  },
  {
    "id": "plurals-and-dynamic-content",
    "label": "Handle Plurals and Dynamic Messages Correctly"
  },
  {
    "id": "jetpack-compose-localization",
    "label": "Localize Android Apps Built With Jetpack Compose"
  },
  {
    "id": "per-app-languages",
    "label": "Support Android Per-App Languages"
  },
  {
    "id": "locale-aware-experience",
    "label": "Localize Formats, Layouts, and RTL Experiences"
  },
  {
    "id": "android-pseudolocales",
    "label": "Test Localization Readiness With Android Pseudolocales"
  },
  {
    "id": "accessibility-localization",
    "label": "Localize Android Accessibility Content"
  },
  {
    "id": "google-play-localization",
    "label": "Localize the Complete Google Play Experience"
  },
  {
    "id": "android-localization-testing",
    "label": "Test Localized Android Builds Before Release"
  },
  {
    "id": "content-beyond-strings",
    "label": "Find the Language Android Resource Files Do Not Contain"
  },
  {
    "id": "continuous-android-localization",
    "label": "Keep Android Localization Synchronized With Every Release"
  },
  {
    "id": "common-mistakes",
    "label": "Common Android Localization Problems"
  },
  {
    "id": "android-localization-checklist",
    "label": "Android App Localization Checklist"
  },
  {
    "id": "professional-android-localization",
    "label": "Professional Android Localization"
  },
  {
    "id": "android-localization-faqs",
    "label": "Android App Localization FAQs"
  },
  {
    "id": "sources-and-references",
    "label": "Sources and References"
  },
  {
    "id": "android-localization-conclusion",
    "label": "Turn Android Localization Into a Release Capability"
  }
];

const styles = "\n:root { color-scheme: light; }\n* { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; }\nbody { margin: 0; }\n.android-guide {\n  --magenta: #C11D63;\n  --magenta-dark: #9F1D55;\n  --magenta-deep: #7A1542;\n  --blush: #FDF2F7;\n  --blush-strong: #F8DCE8;\n  --pink-on-dark: #F2A7C6;\n  --ink: #15161A;\n  --text: #3F424A;\n  --muted: #6D717A;\n  --line: #E4E5E8;\n  --soft: #F6F6F7;\n  --panel: #FFFFFF;\n  --dark: #1B1B20;\n  font-family: Inter, \"Helvetica Neue\", Arial, sans-serif;\n  color: var(--ink);\n  background: #fff;\n  overflow-x: clip;\n}\n.android-guide a { color: var(--magenta); text-decoration: none; }\n.android-guide a:hover { color: var(--magenta-dark); }\n.android-guide a:focus-visible,\n.android-guide button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }\n.guide-shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }\n.guide-eyebrow { margin: 0 0 18px; color: var(--magenta); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }\n.guide-eyebrow.dark { color: var(--pink-on-dark); }\n.guide-hero { background: linear-gradient(180deg,#F7F7F8 0%,#FFFFFF 100%); padding: 28px 0 92px; border-bottom: 1px solid var(--line); }\n.breadcrumb { margin-bottom: 30px; }\n.breadcrumb ol { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; list-style: none; margin: 0; padding: 0; color: var(--muted); font-size: 14px; line-height: 1.5; }\n.breadcrumb li { display: inline-flex; min-width: 0; align-items: center; gap: 8px; }\n.android-guide .breadcrumb a,\n.android-guide .breadcrumb a:visited { color: var(--muted); font-weight: 400; }\n.android-guide .breadcrumb a:hover,\n.android-guide .breadcrumb a:focus-visible { color: var(--magenta); }\n.breadcrumb li:last-child { color: #34363C; font-weight: 500; }\n.breadcrumb .separator { color: #B0B3B9; user-select: none; }\n.hero-grid { display: block; }\n.hero-copy { max-width: 940px; }\n.hero-copy h1 { max-width: 900px; margin: 0; font-size: 48px; line-height: 1.08; letter-spacing: -.035em; font-weight: 600; }\n.hero-deck { margin: 28px 0 0; max-width: 860px; color: var(--text); font-size: 19px; line-height: 1.65; }\n.hero-sub { margin: 14px 0 0; max-width: 820px; color: var(--muted); font-size: 17px; line-height: 1.7; }\n.hero-meta { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 26px; color: var(--muted); font-size: 14px; line-height: 1.5; }\n.hero-meta span { position: relative; }\n.hero-meta span + span::before { content: \"\"; position: absolute; left: -12px; top: .55em; width: 4px; height: 4px; border-radius: 50%; background: #B7BAC1; }\n.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }\n.guide-button { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 12px 22px; border-radius: 999px; border: 1px solid transparent; font-size: 16px; line-height: 1.2; font-weight: 600; transition: .2s ease; }\n.guide-button svg { flex: 0 0 auto; }\n.guide-button.primary,\n.guide-button.primary:link,\n.guide-button.primary:visited,\n.guide-button.primary:hover,\n.guide-button.primary:active,\n.guide-button.primary:focus { color: #fff !important; }\n.guide-button.primary { background: var(--magenta); }\n.guide-button.primary svg, .guide-button.primary svg * { stroke: #fff !important; }\n.guide-button.primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }\n.guide-button.secondary { color: var(--ink); background: #fff; border-color: #D3D5DA; }\n.guide-button.secondary:hover { color: var(--magenta); border-color: #CFA2B6; transform: translateY(-1px); }\n.takeaways-section { padding: 78px 0; background: var(--blush); }\n.takeaways-head { display: grid; grid-template-columns: 300px minmax(0,1fr); gap: 76px; align-items: start; }\n.takeaways-head h2 { margin: 0; font-size: 36px; line-height: 1.18; letter-spacing: -.025em; font-weight: 600; }\n.takeaways-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid #E9C8D7; }\n.takeaway { display: grid; grid-template-columns: 18px minmax(0,1fr); gap: 16px; padding: 24px 22px 24px 0; border-bottom: 1px solid #E9C8D7; }\n.takeaway:nth-child(odd) { border-right: 1px solid #E9C8D7; padding-right: 28px; }\n.takeaway:nth-child(even) { padding-left: 28px; }\n.takeaway-mark { width: 8px; height: 8px; margin-top: 9px; background: var(--magenta); border-radius: 2px; }\n.takeaway h3 { margin: 0 0 7px; font-size: 18px; line-height: 1.35; font-weight: 600; }\n.takeaway p { margin: 0; color: var(--text); font-size: 16px; line-height: 1.65; }\n.article-region { padding: 96px 0 28px; }\n.article-grid { display: grid; grid-template-columns: 260px 56px minmax(0,760px) minmax(0,1fr); align-items: start; }\n.toc-desktop { grid-column: 1; grid-row: 1 / span 99; position: sticky; top: 112px; align-self: start; max-height: calc(100vh - 136px); overflow: auto; padding-right: 18px; scrollbar-width: thin; }\n.toc-title { margin: 0 0 16px; color: var(--ink); font-size: 16px; font-weight: 600; }\n.toc-list { list-style: none; margin: 0; padding: 0; border-left: 1px solid var(--line); }\n.toc-list li { margin: 0; }\n.toc-list a { position: relative; display: block; padding: 7px 0 7px 18px; color: #676B74; font-size: 16px; line-height: 1.4; }\n.toc-list a::before { content: \"\"; position: absolute; left: -1px; top: 7px; bottom: 7px; width: 2px; background: transparent; }\n.toc-list a:hover { color: var(--magenta); }\n.toc-list a.active { color: var(--magenta); font-weight: 600; }\n.toc-list a.active::before { background: var(--magenta); }\n.toc-mobile { display: none; grid-column: 3; margin-bottom: 38px; }\n.toc-mobile-button { width: 100%; min-height: 50px; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 13px 16px; border: 1px solid var(--line); border-radius: 16px; background: #fff; color: var(--ink); font-size: 16px; font-weight: 600; text-align: left; }\n.toc-mobile-panel { margin-top: 10px; padding: 10px 16px 12px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }\n.toc-mobile-panel .toc-list { border-left: 0; }\n.toc-mobile-panel .toc-list a { padding: 10px 0; font-size: 16px; border-bottom: 1px solid #EEEFF1; }\n.toc-mobile-panel .toc-list li:last-child a { border-bottom: 0; }\n.article-section { grid-column: 3; padding: 0 0 92px; scroll-margin-top: 120px; }\n.article-wide { grid-column: 2 / 5; padding: 0 0 96px; scroll-margin-top: 120px; }\n.section-head { margin-bottom: 28px; }\n.section-head h2 { margin: 0; font-size: 36px; line-height: 1.18; letter-spacing: -.025em; font-weight: 600; }\n.section-intro { margin: 18px 0 0; max-width: 800px; color: var(--text); font-size: 19px; line-height: 1.7; }\n.rich-content { max-width: 760px; color: var(--text); font-size: 18px; line-height: 1.72; }\n.article-wide .rich-content { max-width: 100%; }\n.article-wide .rich-content > p,\n.article-wide .rich-content > ul,\n.article-wide .rich-content > ol,\n.article-wide .rich-content > h3,\n.article-wide .rich-content > blockquote,\n.article-wide .rich-content > pre { max-width: 760px; margin-left: auto; margin-right: auto; }\n.rich-content p { margin: 0 0 22px; }\n.rich-content h3 { margin: 42px 0 14px; color: var(--ink); font-size: 24px; line-height: 1.28; font-weight: 600; letter-spacing: -.01em; }\n.rich-content ul, .rich-content ol { margin: 0 0 24px; padding-left: 24px; }\n.rich-content li { margin: 8px 0; padding-left: 5px; }\n.rich-content strong { color: var(--ink); font-weight: 600; }\n.rich-content a { font-weight: 600; }\n.rich-content a::after { content: \"  →\"; white-space: nowrap; }\n.rich-content code { color: #76204A; background: #F7EAF0; border-radius: 5px; padding: .08em .32em; font-family: \"SFMono-Regular\", Consolas, monospace; font-size: .9em; overflow-wrap: anywhere; }\n.rich-content pre { margin-top: 24px; margin-bottom: 28px; padding: 22px 24px; border: 1px solid #E4E5E8; border-radius: 18px; background: #F7F7F8; overflow-x: auto; }\n.rich-content pre code { padding: 0; background: transparent; color: #26282E; font-size: 16px; line-height: 1.65; white-space: pre; }\n.rich-content blockquote { margin-top: 30px; margin-bottom: 30px; padding: 22px 24px; border-left: 3px solid var(--magenta); border-radius: 0 16px 16px 0; background: var(--blush); color: #2D3036; }\n.rich-content blockquote p { margin: 0; font-size: 18px; line-height: 1.65; }\n.rich-content table { width: 100%; margin: 28px 0 34px; border-collapse: collapse; font-size: 16px; line-height: 1.55; }\n.rich-content th { padding: 16px 18px; border-bottom: 2px solid #D8DADF; color: var(--ink); font-weight: 600; text-align: left; }\n.rich-content td { padding: 16px 18px; border-bottom: 1px solid var(--line); vertical-align: top; }\n.definition-panel { display: grid; grid-template-columns: minmax(0,1.18fr) minmax(250px,.82fr); gap: 46px; align-items: start; }\n.definition-panel .rich-content { max-width: 100%; }\n.definition-note { padding: 28px; border-top: 3px solid var(--magenta); border-radius: 0 0 22px 22px; background: var(--soft); }\n.definition-note h3 { margin: 0 0 14px; font-size: 20px; line-height: 1.3; font-weight: 600; }\n.definition-note p { margin: 0; color: var(--text); font-size: 17px; line-height: 1.65; }\n.framework-panel { padding: 58px; border-radius: 30px; background: var(--dark); color: #fff; overflow: hidden; }\n.framework-panel .section-head { max-width: 840px; }\n.framework-panel .section-head h2 { color: #fff; }\n.framework-panel .section-intro { color: #D6D7DB; }\n.framework-stages { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 0; margin-top: 40px; border-top: 1px solid #3B3C43; border-left: 1px solid #3B3C43; }\n.framework-stage { position: relative; padding: 28px 24px 26px; border-right: 1px solid #3B3C43; border-bottom: 1px solid #3B3C43; min-height: 250px; }\n.framework-stage .stage-num { color: var(--pink-on-dark); font-size: 14px; font-weight: 600; letter-spacing: .08em; }\n.framework-stage h3 { margin: 18px 0 12px; color: #fff; font-size: 22px; line-height: 1.25; font-weight: 600; }\n.framework-stage p { margin: 0; color: #D1D2D7; font-size: 16px; line-height: 1.6; }\n.framework-stage .outputs { margin-top: 18px; padding-top: 16px; border-top: 1px solid #3B3C43; color: #F0F0F2; }\n.framework-after { max-width: 780px; margin: 32px auto 0; color: #D1D2D7; font-size: 17px; line-height: 1.7; }\n.editorial-visual { margin: 30px 0 38px; padding: 28px; border: 1px solid var(--line); border-radius: 24px; background: #FAFAFB; }\n.editorial-visual figcaption { margin: 0 0 22px; color: var(--ink); font-size: 16px; line-height: 1.45; font-weight: 600; }\n.visual-label { color: var(--magenta); font-size: 16px; line-height: 1.35; font-weight: 600; letter-spacing: .035em; text-transform: uppercase; }\n.visual-code { font-family: \"SFMono-Regular\", Consolas, monospace; font-size: 16px; line-height: 1.55; overflow-wrap: anywhere; }\n.visual-muted { color: var(--muted); font-size: 16px; line-height: 1.55; }\n.visual-resource-grid { display: grid; grid-template-columns: minmax(190px,.72fr) 52px minmax(0,1.5fr); gap: 18px; align-items: stretch; }\n.visual-node { padding: 22px; border: 1px solid #D7D9DE; border-radius: 18px; background: #fff; }\n.visual-node .visual-label { display: block; margin-bottom: 14px; }\n.visual-default .visual-code { display: block; margin-bottom: 14px; color: var(--ink); font-weight: 600; }\n.visual-connector { display: flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 24px; }\n.visual-alternatives { display: grid; grid-template-columns: minmax(190px,.8fr) minmax(0,1fr); gap: 12px 22px; align-items: center; }\n.visual-alternatives .visual-label { grid-column: 1 / -1; margin-bottom: 2px; }\n.visual-alt-code { padding: 8px 10px; border: 1px solid #E0E2E6; border-radius: 8px; background: #FAFAFB; }\n.compose-flow { display: grid; grid-template-columns: minmax(190px,.9fr) 46px minmax(210px,1fr) 46px minmax(170px,.78fr); gap: 14px; align-items: center; }\n.compose-branches { display: grid; gap: 14px; }\n.compose-result { text-align: center; }\n.language-flow-list { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 16px; list-style: none; margin: 0; padding: 0; counter-reset: language-step; }\n.language-flow-list li { position: relative; min-height: 142px; padding: 58px 18px 20px; border: 1px solid #D7D9DE; border-radius: 18px; background: #fff; color: var(--text); font-size: 16px; line-height: 1.5; }\n.language-flow-list li::before { counter-increment: language-step; content: counter(language-step); position: absolute; top: 18px; left: 18px; width: 30px; height: 30px; display: grid; place-items: center; border-radius: 50%; background: var(--blush-strong); color: var(--magenta-dark); font-size: 16px; font-weight: 600; }\n.language-flow-list li:first-child::before { background: var(--magenta); color: #fff; }\n.language-flow-list li:not(:last-child)::after { content: \"→\"; position: absolute; right: -16px; top: 58px; z-index: 2; color: var(--magenta); font-size: 22px; font-weight: 600; }\n.pseudo-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 18px; }\n.pseudo-card { padding: 22px; border: 1px solid #D7D9DE; border-radius: 18px; background: #fff; }\n.pseudo-card .visual-label { display: block; margin-bottom: 14px; }\n.pseudo-sample { min-height: 72px; display: flex; align-items: center; padding: 15px 16px; border-radius: 12px; background: #F7F7F8; color: #34363C; font-size: 16px; line-height: 1.45; overflow-wrap: anywhere; }\n.pseudo-card:nth-child(2) .pseudo-sample { background: var(--blush); }\n.content-map-center { max-width: 340px; margin: 0 auto 22px; padding: 24px; border: 1px solid #DFA5BE; border-radius: 22px; background: var(--blush); text-align: center; }\n.content-map-center strong { display: block; margin-top: 8px; color: var(--ink); font-size: 20px; line-height: 1.35; }\n.content-map-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 14px; }\n.content-map-node { padding: 18px; border: 1px solid #D7D9DE; border-radius: 16px; background: #fff; color: var(--text); font-size: 16px; line-height: 1.45; font-weight: 600; text-align: center; }\n.testing-table { width: 100%; margin-top: 30px; border-collapse: collapse; font-size: 16px; line-height: 1.55; }\n.testing-table th { padding: 17px 18px; border-bottom: 2px solid #D6D8DD; color: var(--ink); text-align: left; font-weight: 600; }\n.testing-table td { padding: 18px; border-bottom: 1px solid var(--line); color: var(--text); vertical-align: top; }\n.testing-table td:first-child { color: var(--ink); font-weight: 600; }\n.testing-cards { display: none; }\n.common-section { padding-top: 8px; }\n.common-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 44px; border-top: 1px solid var(--line); }\n.common-item { position: relative; padding: 24px 0 24px 24px; border-bottom: 1px solid var(--line); }\n.common-item::before { content: \"\"; position: absolute; left: 0; top: 33px; width: 8px; height: 8px; border-radius: 2px; background: var(--magenta); }\n.common-item h3 { margin: 0 0 8px; font-size: 19px; line-height: 1.35; font-weight: 600; }\n.common-item p { margin: 0; color: var(--text); font-size: 16px; line-height: 1.62; }\n.checklist-panel { padding: 54px; border: 1px solid #E6CED8; border-radius: 30px; background: var(--blush); }\n.checklist-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 38px 54px; }\n.check-group h3 { margin: 0 0 16px; font-size: 22px; line-height: 1.3; font-weight: 600; }\n.check-list { list-style: none; margin: 0; padding: 0; }\n.check-list li { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 11px; margin: 0; padding: 9px 0; color: var(--text); font-size: 16px; line-height: 1.55; }\n.check-marker { width: 18px; height: 18px; margin-top: 2px; border: 1.5px solid #C98AA6; border-radius: 4px; background: #fff; }\n.professional-panel { display: grid; grid-template-columns: minmax(280px,.84fr) minmax(0,1.16fr); gap: 64px; padding: 58px; border: 1px solid #E5E6E9; border-radius: 30px; background: #fff; box-shadow: 0 20px 50px rgba(28,29,33,.05); }\n.professional-intro h2 { margin: 0; font-size: 34px; line-height: 1.2; letter-spacing: -.02em; font-weight: 600; }\n.professional-intro p { color: var(--text); font-size: 18px; line-height: 1.7; }\n.professional-capabilities { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--line); }\n.professional-capability { padding: 24px 24px 24px 0; border-bottom: 1px solid var(--line); }\n.professional-capability:nth-child(odd) { padding-right: 28px; border-right: 1px solid var(--line); }\n.professional-capability:nth-child(even) { padding-left: 28px; }\n.professional-capability h3 { margin: 0 0 12px; font-size: 20px; line-height: 1.35; font-weight: 600; }\n.professional-capability ul { margin: 0; padding-left: 20px; color: var(--text); font-size: 16px; line-height: 1.55; }\n.professional-capability li { margin: 6px 0; }\n.professional-links { display: flex; flex-wrap: wrap; gap: 16px 28px; margin-top: 28px; }\n.editorial-link { display: inline-flex; align-items: center; gap: 8px; color: var(--magenta); font-size: 16px; font-weight: 600; }\n.editorial-link:hover svg { transform: translateX(3px); }\n.editorial-link svg { transition: transform .2s ease; }\n.faq-panel { border-top: 1px solid var(--line); }\n.faq-item { border-bottom: 1px solid var(--line); }\n.faq-question { width: 100%; display: grid; grid-template-columns: minmax(0,1fr) 34px; align-items: center; gap: 20px; min-height: 72px; padding: 18px 0; border: 0; background: transparent; color: var(--ink); font-size: 18px; line-height: 1.4; font-weight: 600; text-align: left; cursor: pointer; }\n.faq-icon { width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #D8DADF; border-radius: 50%; color: var(--magenta); }\n.faq-answer { max-width: 820px; padding: 0 50px 22px 0; color: var(--text); font-size: 16px; line-height: 1.68; }\n.faq-answer p { margin: 0; }\n.sources-list { border-top: 1px solid var(--line); }\n.source-item { display: grid; grid-template-columns: 190px minmax(0,1fr) 24px; gap: 22px; align-items: center; padding: 19px 0; border-bottom: 1px solid var(--line); }\n.source-publisher { color: var(--muted); font-size: 15px; line-height: 1.4; }\n.source-title { color: var(--ink); font-size: 16px; line-height: 1.5; font-weight: 600; }\n.source-item:hover .source-title { color: var(--magenta); }\n.related-section { padding: 80px 0 88px; background: #F7F7F8; }\n.related-head { max-width: 760px; margin-bottom: 36px; }\n.related-head h2 { margin: 0; font-size: 36px; line-height: 1.18; font-weight: 600; letter-spacing: -.025em; }\n.related-head p { margin: 18px 0 0; color: var(--text); font-size: 18px; line-height: 1.68; }\n.related-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid #DDE0E4; border-left: 1px solid #DDE0E4; }\n.related-item { min-height: 222px; padding: 28px; border-right: 1px solid #DDE0E4; border-bottom: 1px solid #DDE0E4; background: rgba(255,255,255,.48); }\n.related-item h3 { margin: 0 0 12px; font-size: 21px; line-height: 1.3; font-weight: 600; }\n.related-item p { margin: 0; color: var(--text); font-size: 16px; line-height: 1.62; }\n.related-item .editorial-link { margin-top: 20px; }\n.final-cta { padding: 88px 0 96px; background: #fff; }\n.final-cta-panel { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 52px; align-items: center; padding: 58px 62px; border: 1px solid #E7CDD9; border-radius: 30px; background: var(--blush); }\n.final-cta-panel h2 { margin: 0; max-width: 760px; font-size: 38px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }\n.final-cta-panel p { margin: 18px 0 0; max-width: 760px; color: var(--text); font-size: 18px; line-height: 1.7; }\n.final-cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 240px; }\n@media (max-width: 1180px) {\n  .guide-shell { padding-left: 40px; padding-right: 40px; }\n  .article-grid { grid-template-columns: 240px 42px minmax(0,720px) minmax(0,1fr); }\n  .framework-panel { padding: 48px; }\n}\n@media (max-width: 1040px) {\n  .guide-shell { padding-left: 24px; padding-right: 24px; }\n  .guide-hero { padding-bottom: 78px; }\n  .hero-copy { max-width: 900px; }\n  .takeaways-head { grid-template-columns: 1fr; gap: 34px; }\n  .article-grid { display: grid; grid-template-columns: minmax(0,1fr); }\n  .toc-desktop { display: none; }\n  .toc-mobile { display: block; grid-column: 1; }\n  .article-section, .article-wide { grid-column: 1; }\n  .article-section { max-width: 760px; }\n  .article-wide { width: 100%; }\n  .framework-stages { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .visual-resource-grid, .compose-flow { grid-template-columns: 1fr; }\n  .visual-connector { min-height: 28px; transform: rotate(90deg); }\n  .language-flow-list { grid-template-columns: 1fr; }\n  .language-flow-list li { min-height: 0; }\n  .language-flow-list li::after { display: none; }\n  .pseudo-grid, .content-map-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .professional-panel { grid-template-columns: 1fr; gap: 38px; }\n  .related-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }\n  .final-cta-panel { grid-template-columns: 1fr; }\n  .final-cta-actions { flex-direction: row; min-width: 0; }\n}\n@media (max-width: 768px) {\n  .guide-shell { padding-left: 24px; padding-right: 24px; }\n  .guide-hero { padding-top: 22px; padding-bottom: 66px; }\n  .breadcrumb { margin-bottom: 24px; }\n  .hero-copy h1 { font-size: 42px; }\n  .hero-deck { font-size: 18px; }\n  .takeaways-section { padding: 66px 0; }\n  .takeaways-head h2, .section-head h2, .related-head h2 { font-size: 32px; }\n  .takeaways-grid { grid-template-columns: 1fr; }\n  .takeaway, .takeaway:nth-child(odd), .takeaway:nth-child(even) { padding: 22px 0; border-right: 0; }\n  .article-region { padding-top: 72px; }\n  .article-section, .article-wide { padding-bottom: 74px; }\n  .definition-panel { grid-template-columns: 1fr; gap: 26px; }\n  .framework-panel, .checklist-panel, .professional-panel { padding: 38px 30px; border-radius: 24px; }\n  .framework-stages { grid-template-columns: 1fr; }\n  .framework-stage { min-height: 0; }\n  .visual-alternatives { grid-template-columns: 1fr; }\n  .language-flow-list, .pseudo-grid, .content-map-grid { grid-template-columns: 1fr; }\n  .language-flow-list li { min-height: 0; }\n  .language-flow-list li::after { display: none; }\n  .rich-content { font-size: 17px; }\n  .rich-content h3 { font-size: 22px; }\n  .testing-table { display: none; }\n  .testing-cards { display: grid; gap: 14px; margin-top: 28px; }\n  .testing-card { padding: 22px; border: 1px solid var(--line); border-radius: 18px; background: #FAFAFB; }\n  .testing-card h3 { margin: 0 0 14px; font-size: 19px; line-height: 1.35; font-weight: 600; }\n  .testing-card dl { margin: 0; }\n  .testing-card dt { margin-top: 12px; color: var(--ink); font-size: 16px; font-weight: 600; }\n  .testing-card dd { margin: 5px 0 0; color: var(--text); font-size: 16px; line-height: 1.58; }\n  .common-grid { grid-template-columns: 1fr; }\n  .checklist-grid { grid-template-columns: 1fr; }\n  .professional-capabilities { grid-template-columns: 1fr; }\n  .professional-capability, .professional-capability:nth-child(odd), .professional-capability:nth-child(even) { padding: 22px 0; border-right: 0; }\n  .source-item { grid-template-columns: 1fr 24px; gap: 4px 14px; }\n  .source-publisher { grid-column: 1; }\n  .source-title { grid-column: 1; }\n  .source-item svg { grid-column: 2; grid-row: 1 / span 2; }\n  .final-cta { padding: 72px 0; }\n  .final-cta-panel { padding: 42px 34px; }\n  .final-cta-panel h2 { font-size: 34px; }\n}\n@media (max-width: 560px) {\n  .guide-shell { padding-left: 20px; padding-right: 20px; }\n  .hero-copy h1 { font-size: 38px; line-height: 1.1; }\n  .hero-deck { font-size: 17px; }\n  .hero-sub { font-size: 17px; }\n  .hero-actions { flex-direction: column; }\n  .guide-button { width: 100%; }\n  .hero-meta { display: grid; gap: 7px; }\n  .hero-meta span + span::before { display: none; }\n  .takeaways-head h2, .section-head h2, .related-head h2 { font-size: 30px; }\n  .article-region { padding-top: 64px; }\n  .article-section, .article-wide { padding-bottom: 68px; }\n  .framework-panel, .checklist-panel, .professional-panel { padding: 32px 22px; }\n  .editorial-visual { padding: 18px; border-radius: 18px; }\n  .editorial-visual figcaption { margin-bottom: 18px; }\n  .rich-content pre { margin-left: 0; margin-right: 0; padding: 18px; border-radius: 14px; }\n  .rich-content pre code { font-size: 16px; }\n  .common-item { padding-left: 22px; }\n  .related-section { padding: 68px 0 72px; }\n  .related-grid { grid-template-columns: 1fr; }\n  .related-item { min-height: 0; }\n  .final-cta-panel { padding: 36px 24px; }\n  .final-cta-panel h2 { font-size: 30px; }\n  .final-cta-actions { flex-direction: column; }\n  .faq-answer { padding-right: 0; }\n}\n\n.conclusion-section { padding-top: 56px; border-top: 1px solid var(--line); }\n\n.article-section,\n.article-wide,\n.rich-content,\n.section-head,\n.editorial-visual,\n.visual-node,\n.related-item,\n.professional-intro,\n.professional-capability { min-width: 0; }\n.rich-content pre { max-width: 100%; overscroll-behavior-inline: contain; }\n.rich-content a,\n.editorial-link,\n.related-item a,\n.source-item { overflow-wrap: anywhere; }\n.editorial-link { max-width: 100%; align-items: flex-start; }\n.source-item { color: inherit; }\n.toc-mobile-panel { max-height: min(68vh, 620px); overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; }\n.breadcrumb li:last-child > span:last-child { min-width: 0; overflow-wrap: anywhere; }\n\n@media (max-width: 1040px) {\n  .article-section { width: 100%; max-width: 760px; justify-self: center; }\n  .testing-table { display: none; }\n  .testing-cards { display: grid; gap: 14px; margin-top: 28px; }\n  .testing-card { padding: 22px; border: 1px solid var(--line); border-radius: 18px; background: #FAFAFB; }\n  .testing-card h3 { margin: 0 0 14px; font-size: 19px; line-height: 1.35; font-weight: 600; }\n  .testing-card dl { margin: 0; }\n  .testing-card dt { margin-top: 12px; color: var(--ink); font-size: 16px; font-weight: 600; }\n  .testing-card dd { margin: 5px 0 0; color: var(--text); font-size: 16px; line-height: 1.58; }\n}\n\n@media (max-width: 768px) {\n  .final-cta-actions { flex-direction: column; width: 100%; }\n  .final-cta-actions .guide-button { width: 100%; }\n  .professional-links { display: grid; grid-template-columns: 1fr; gap: 14px; }\n  .source-item { min-height: 68px; }\n}\n\n@media (max-width: 560px) {\n  .breadcrumb ol { gap: 6px 7px; }\n  .breadcrumb li { gap: 7px; }\n  .breadcrumb li:last-child { flex: 1 1 100%; width: 100%; }\n  .breadcrumb li:last-child .separator { flex: 0 0 auto; }\n  .toc-mobile { margin-bottom: 32px; }\n  .toc-mobile-button { min-height: 52px; }\n  .visual-node,\n  .pseudo-card,\n  .content-map-node,\n  .testing-card { padding: 18px; }\n  .visual-code,\n  .visual-muted,\n  .pseudo-sample { font-size: 16px; }\n  .source-item { grid-template-columns: minmax(0,1fr) 22px; }\n}\n\n@media (max-width: 390px) {\n  .guide-shell { padding-left: 18px; padding-right: 18px; }\n  .guide-hero { padding-top: 18px; padding-bottom: 58px; }\n  .breadcrumb { margin-bottom: 20px; }\n  .hero-actions { gap: 10px; }\n  .takeaways-section { padding: 58px 0; }\n  .article-region { padding-top: 58px; }\n  .article-section, .article-wide { padding-bottom: 62px; }\n  .framework-panel, .checklist-panel, .professional-panel { padding: 28px 18px; border-radius: 20px; }\n  .editorial-visual { padding: 16px; }\n  .definition-note { padding: 22px 20px; }\n  .final-cta { padding: 62px 0; }\n  .final-cta-panel { padding: 32px 20px; border-radius: 22px; }\n}\n\n.android-guide p.guide-eyebrow {\n  display: block;\n  margin: 0 0 18px !important;\n  color: var(--magenta) !important;\n  font-size: 11px !important;\n  line-height: 1.2 !important;\n  font-weight: 600 !important;\n  letter-spacing: .14em !important;\n  text-transform: uppercase !important;\n}";

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResourceTreeGraphic() {
  const alternatives = [
    ["values-es/", "Language"],
    ["values-fr-rCA/", "Language + region"],
    ["values-pt-rBR/", "Language + region"],
    ["values-b+zh+Hans/", "BCP 47 language + script"],
  ];
  return (
    <figure className="editorial-visual">
      <figcaption>How Android Resolves Default and Locale-Specific Resources</figcaption>
      <div className="visual-resource-grid">
        <div className="visual-node visual-default">
          <span className="visual-label">Default</span>
          <span className="visual-code">values/strings.xml</span>
          <span className="visual-muted">Complete fallback resource set</span>
        </div>
        <div className="visual-connector" aria-hidden="true">→</div>
        <div className="visual-node visual-alternatives">
          <span className="visual-label">Locale-Specific Alternatives</span>
          {alternatives.map(([code, meaning]) => (
            <React.Fragment key={code}>
              <span className="visual-code visual-alt-code">{code}</span>
              <span className="visual-muted">{meaning}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </figure>
  );
}

function ComposeFlowGraphic() {
  return (
    <figure className="editorial-visual">
      <figcaption>One Android Resource Foundation Supports Both UI Systems</figcaption>
      <div className="compose-flow">
        <div className="visual-node">
          <span className="visual-label">Android Resources</span>
          <div className="visual-code">strings.xml</div>
        </div>
        <div className="visual-connector" aria-hidden="true">→</div>
        <div className="compose-branches">
          <div className="visual-node"><span className="visual-label">Traditional Views</span><div className="visual-code">getString(...)</div></div>
          <div className="visual-node"><span className="visual-label">Jetpack Compose</span><div className="visual-code">stringResource(...)</div></div>
        </div>
        <div className="visual-connector" aria-hidden="true">→</div>
        <div className="visual-node compose-result"><span className="visual-label">Localized UI</span><span className="visual-muted">One approved language foundation</span></div>
      </div>
    </figure>
  );
}

function LanguageFlowGraphic() {
  const steps = ["User selects a language", "Android updates the app locale", "Resources resolve the locale", "The UI refreshes in context"];
  return (
    <figure className="editorial-visual">
      <figcaption>How a Per-App Language Choice Reaches the Interface</figcaption>
      <ol className="language-flow-list">
        {steps.map((step) => <li key={step}>{step}</li>)}
      </ol>
    </figure>
  );
}

function PseudoCompareGraphic() {
  const samples = [
    { label: "Source English", text: "Complete your order" },
    { label: "English (XA)", text: "[Çôɱþļêţê ýöûř ôřđêř!!!]" },
    { label: "AR (XB)", text: "[‮Complete your order‬]", rtl: true },
  ];
  return (
    <figure className="editorial-visual">
      <figcaption>What Android Pseudolocales Reveal Before Translation</figcaption>
      <div className="pseudo-grid">
        {samples.map((sample) => (
          <div className="pseudo-card" key={sample.label}>
            <span className="visual-label">{sample.label}</span>
            <div className="pseudo-sample" dir={sample.rtl ? "rtl" : "ltr"}>{sample.text}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

function ContentMapGraphic() {
  const nodes = ["Backend APIs", "Push Notifications", "Google Play", "Support Content", "Payments and Identity", "Email and SMS"];
  return (
    <figure className="editorial-visual">
      <figcaption>The Android Customer Journey Extends Beyond App Resources</figcaption>
      <div className="content-map-center">
        <span className="visual-label">Android App</span>
        <strong>Localized Customer Experience</strong>
      </div>
      <div className="content-map-grid">
        {nodes.map((node) => <div className="content-map-node" key={node}>{node}</div>)}
      </div>
    </figure>
  );
}

function SectionVisual({ type }) {
  if (type === "resource-tree") return <ResourceTreeGraphic />;
  if (type === "compose-flow") return <ComposeFlowGraphic />;
  if (type === "language-flow") return <LanguageFlowGraphic />;
  if (type === "pseudo-compare") return <PseudoCompareGraphic />;
  if (type === "content-map") return <ContentMapGraphic />;
  return null;
}

function TableOfContents({ activeId, mobile = false, onNavigate }) {
  return (
    <ol className="toc-list">
      {tocItems.map((item) => (
        <li key={item.id}>
          <a className={activeId === item.id ? "active" : ""} href={sectionUrl(item.id)} aria-current={activeId === item.id ? "location" : undefined} onClick={onNavigate}>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

function MobileToc({ activeId }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="toc-mobile">
      <button className="toc-mobile-button" type="button" aria-expanded={open} aria-controls="mobile-guide-toc" onClick={() => setOpen((value) => !value)}>
        <span>In This Guide</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="toc-mobile-panel" id="mobile-guide-toc">
          <TableOfContents activeId={activeId} mobile onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

function TestingMatrix() {
  return (
    <>
      <table className="testing-table">
        <thead><tr><th>Testing Layer</th><th>What to Validate</th><th>Typical Participants</th></tr></thead>
        <tbody>{testingRows.map((row)=><tr key={row.layer}><td>{row.layer}</td><td>{row.checks}</td><td>{row.participants}</td></tr>)}</tbody>
      </table>
      <div className="testing-cards">
        {testingRows.map((row)=>(
          <article className="testing-card" key={row.layer}>
            <h3>{row.layer}</h3>
            <dl><dt>What to validate</dt><dd>{row.checks}</dd><dt>Typical participants</dt><dd>{row.participants}</dd></dl>
          </article>
        ))}
      </div>
    </>
  );
}

function RichSection({ section }) {
  return (
    <section id={section.id} className={section.wide ? "article-wide" : "article-section"}>
      <header className="section-head"><h2>{section.title}</h2></header>
      {section.leadHtml && <div className="rich-content" dangerouslySetInnerHTML={{ __html: section.leadHtml }} />}
      {section.visual && section.visual !== "testing-matrix" && <SectionVisual type={section.visual} />}
      {section.visual === "testing-matrix" && <TestingMatrix />}
      {section.html && <div className="rich-content" dangerouslySetInnerHTML={{ __html: section.html }} />}
    </section>
  );
}

export default function AndroidAppLocalizationGuide() {
  const [activeId, setActiveId] = useState(tocItems[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const observedIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;
    const sections = observedIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-18% 0px -68% 0px", threshold: [0,.15,.35,.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [observedIds]);

  return (
    <main className="android-guide">
      <style>{styles}</style>

      <section className="guide-hero">
        <div className="guide-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="https://www.stepes.com/resources/">Resources</a></li>
              <li><span className="separator" aria-hidden="true">›</span><a href="https://www.stepes.com/resources/localization-guides/">Localization Guides</a></li>
              <li aria-current="page"><span className="separator" aria-hidden="true">›</span><span>Android App Localization Guide</span></li>
            </ol>
          </nav>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="guide-eyebrow">Localization Guide</p>
              <h1>Android App Localization Guide: How to Localize Android Apps</h1>
              <p className="hero-deck">Localizing an Android app requires more than translating interface strings. Product teams must prepare Android resources, manage locale-specific behavior, protect variables and markup, support Jetpack Compose and per-app language preferences, test layouts and accessibility, and coordinate the installed app with its Google Play presence.</p>
              <p className="hero-sub">This guide explains how to build a production-ready Android localization workflow—from resource architecture and linguistic preparation through multilingual testing, release delivery, and continuous updates.</p>
              <div className="hero-meta" aria-label="Guide information">
                <span>Workflow and technology guide</span><span>Approximately 33-minute read</span>
              </div>
              <div className="hero-actions">
                <a className="guide-button primary" href={sectionUrl("android-localization-framework")}>Explore the Guide <ArrowIcon /></a>
                <a className="guide-button secondary" href={sectionUrl("android-localization-checklist")}>Jump to the Checklist <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="takeaways-section" aria-labelledby="key-takeaways-title">
        <div className="guide-shell takeaways-head">
          <div><p className="guide-eyebrow">Key Takeaways</p><h2 id="key-takeaways-title">Build Localization Into the Android Product Lifecycle</h2></div>
          <div className="takeaways-grid">
            {takeaways.map((item)=>(
              <article className="takeaway" key={item.title}><span className="takeaway-mark" aria-hidden="true"/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-region">
        <div className="guide-shell article-grid">
          <aside className="toc-desktop" aria-label="Guide contents"><p className="toc-title">In This Guide</p><TableOfContents activeId={activeId} /></aside>
          <MobileToc activeId={activeId} />

          <section id="what-is-android-app-localization" className="article-section">
            <header className="section-head"><h2>What Is Android App Localization?</h2></header>
            <div className="definition-panel">
              <div className="rich-content" dangerouslySetInnerHTML={{ __html: "<p>Android app localization is the process of adapting an application for the language, region, cultural conventions, technical environment, and user expectations of each target market.</p>\n<p>Translation changes words from one language to another. Android localization addresses the complete product experience, including:</p>\n<ul>\n<li>interface strings, plurals, and dynamic messages;</li>\n<li>dates, times, numbers, currencies, and units;</li>\n<li>right-to-left layouts and bidirectional content;</li>\n<li>fonts, images, audio, and visual assets;</li>\n<li>accessibility labels, hints, and announcements;</li>\n<li>notifications, widgets, webviews, and server-delivered content;</li>\n<li>per-app language selection and locale fallback;</li>\n<li>Google Play listings, screenshots, products, subscriptions, and release notes;</li>\n<li>linguistic, visual, functional, accessibility, and device testing.</li>\n</ul>\n<p>Android’s resource system can automatically select the best available resources for the user’s configuration. The quality of the resulting experience, however, depends on how well the app has been internationalized, translated, integrated, and tested.</p>" }} />
              <aside className="definition-note"><h3>Translation vs. Localization</h3><p><strong>Translation changes the language.</strong> Localization adapts the complete Android experience for the user, market, and technical environment.</p></aside>
            </div>
          </section>

          <section id="android-localization-framework" className="article-wide">
            <div className="framework-panel">
              <header className="section-head"><h2>The Android Localization Framework</h2><p className="section-intro">A reliable Android localization program connects engineering, language, experience design, quality assurance, and release operations. The following seven-part framework provides a practical way to organize the work.</p></header>
              <div className="framework-stages">
                {frameworkStages.map((stage)=>(
                  <article className="framework-stage" key={stage.num}><span className="stage-num">STAGE {stage.num}</span><h3>{stage.title}</h3><p>{stage.goal}</p><p className="outputs"><strong>Key outputs:</strong> {stage.outputs}</p></article>
                ))}
              </div>
              <p className="framework-after">These stages overlap in agile development. A new feature may enter translation while a previous build is undergoing in-context review and another release is moving through Google Play. The framework therefore works best as a repeatable operating model rather than a one-time sequence.</p>
            </div>
          </section>

          {richSections.map((section)=><RichSection key={section.id} section={section} />)}

          <section id="common-mistakes" className="article-wide common-section">
            <header className="section-head"><h2>Common Android Localization Problems to Avoid</h2></header>
            <div className="common-grid">{commonMistakes.map((item)=><article className="common-item" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </section>

          <section id="android-localization-checklist" className="article-wide">
            <div className="checklist-panel">
              <header className="section-head"><p className="guide-eyebrow">Launch Planning Tool</p><h2>Android App Localization Checklist</h2></header>
              <div className="checklist-grid">{checklistGroups.map((group)=><section className="check-group" key={group.title}><h3>{group.title}</h3><ul className="check-list">{group.items.map((item)=><li key={item}><span className="check-marker" aria-hidden="true"/><span>{item}</span></li>)}</ul></section>)}</div>
            </div>
          </section>


          <section id="professional-android-localization" className="article-wide">
            <div className="professional-panel">
              <div className="professional-intro"><h2>Professional Android Localization From Resources to Release</h2><div className="rich-content" dangerouslySetInnerHTML={{ __html: "<p>Stepes helps product teams connect Android engineering, professional translation, contextual review, multilingual testing, and continuous delivery.</p>\n<p>Our <a href=\"https://www.stepes.com/app-localization-services/\">App Localization Services</a> can support:</p>" }} /><div className="professional-links">{professionalLinks.map((link)=><a className="editorial-link" key={link.href} href={link.href}>{link.label} <ArrowIcon /></a>)}</div></div>
              <div className="professional-capabilities">{professionalSections.map((section)=><section className="professional-capability" key={section.title}><h3>{section.title}</h3><ul>{section.items.map((item)=><li key={item}>{item}</li>)}</ul></section>)}</div>
            </div>
          </section>

          <section id="android-localization-faqs" className="article-section">
            <header className="section-head"><h2>Android App Localization FAQs</h2></header>
            <div className="faq-panel">{faqs.map((faq,index)=>{ const open=openFaq===index; return <section className="faq-item" key={faq.q}><h3 style={{margin:0}}><button className="faq-question" type="button" aria-expanded={open} aria-controls={`faq-answer-${index}`} onClick={()=>setOpenFaq(open ? -1 : index)}><span>{faq.q}</span><span className="faq-icon"><ChevronIcon open={open} /></span></button></h3><div className="faq-answer" id={`faq-answer-${index}`} hidden={!open} dangerouslySetInnerHTML={{__html:faq.aHtml}} /></section>; })}</div>
          </section>

          <section id="sources-and-references" className="article-section">
            <header className="section-head"><h2>Sources and References</h2></header>
            <div className="sources-list">{sources.map((source)=><a className="source-item" key={source.href} href={source.href} target="_blank" rel="noopener noreferrer"><span className="source-publisher">{source.publisher}</span><span className="source-title">{source.title}</span><ExternalIcon /></a>)}</div>
          </section>

          <section id="android-localization-conclusion" className="article-section conclusion-section">
            <header className="section-head"><h2>Turn Android Localization Into a Release Capability</h2></header>
            <div className="rich-content">
              <p>Android localization is most reliable when it is designed into the product lifecycle rather than added at the end of development. Complete default resources, contextual translation, locale-aware behavior, pseudolocalization, accessibility review, multilingual build testing, and coordinated Google Play content work together as one release capability.</p>
              <p>Start with the languages and user journeys that matter most, establish clear ownership, and automate the technical checks that can be repeated safely. Then apply qualified linguistic and in-context review where wording, usability, brand, regulation, or customer impact requires human judgment. This approach gives teams a practical foundation for adding markets without rebuilding the localization process for every release.</p>
            </div>
          </section>

        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="guide-shell">
          <div className="related-head"><p className="guide-eyebrow">Related App Localization Resources</p><h2 id="related-title">Continue Planning Your Mobile Localization Program</h2><p>Explore related guidance for preparing, testing, budgeting, and operating a multilingual mobile product.</p></div>
          <div className="related-grid">{relatedResources.map((item)=><article className="related-item" key={item.href}><h3><a href={item.href}>{item.title}</a></h3><p>{item.description}</p><a className="editorial-link" href={item.href}>Open the Guide <ArrowIcon /></a></article>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="guide-shell">
          <div className="final-cta-panel">
            <div><h2>Bring Your Android App to Every Market With Confidence</h2><p>Stepes combines Android-aware localization engineering, professional translation, visual context, multilingual testing, Google Play localization, and continuous delivery support in one connected workflow.</p></div>
            <div className="final-cta-actions"><a className="guide-button primary" href="https://www.stepes.com/contact-us/">Discuss Your Android App <ArrowIcon /></a><a className="guide-button secondary" href="https://www.stepes.com/app-localization-services/">Explore App Localization Services <ArrowIcon /></a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
