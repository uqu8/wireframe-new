import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/app-localization-cost-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const colors = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#FBE7EF",
  darkEyebrow: "#F2A7C6",
  ink: "#17161B",
  body: "#44414A",
  muted: "#6F6B75",
  border: "#E5E2E7",
  soft: "#F7F6F8",
  white: "#FFFFFF",
};

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  { label: "App Localization Cost Guide", current: true },
];

const tocGroups = [
  {
    label: "Understand the Cost",
    items: [
      {
        id: "how-much",
        label: "How Much App Localization Costs",
        sectionIds: ["how-much"],
      },
      {
        id: "cost-framework",
        label: "What Pricing Includes",
        sectionIds: ["cost-framework", "pricing-models"],
      },
      {
        id: "cost-drivers",
        label: "Cost Drivers and Reuse",
        sectionIds: ["cost-drivers", "words-and-strings"],
      },
    ],
  },
  {
    label: "Scope the Work",
    items: [
      {
        id: "languages-and-locales",
        label: "Languages and Locales",
        sectionIds: ["languages-and-locales"],
      },
      {
        id: "engineering",
        label: "Engineering and File Readiness",
        sectionIds: ["engineering"],
      },
      {
        id: "quality-routing",
        label: "AI + Human Quality Routing",
        sectionIds: ["quality-routing", "review"],
      },
      {
        id: "testing",
        label: "Testing and Store Localization",
        sectionIds: ["testing", "store-localization"],
      },
      {
        id: "continuous-localization",
        label: "Initial Launch and Ongoing Releases",
        sectionIds: ["continuous-localization"],
      },
    ],
  },
  {
    label: "Plan the Budget",
    items: [
      {
        id: "budget-scenarios",
        label: "Illustrative Budget Models",
        sectionIds: ["budget-scenarios"],
      },
      {
        id: "reduce-cost",
        label: "Cost-Control Strategies",
        sectionIds: ["reduce-cost"],
      },
      {
        id: "quote-checklist",
        label: "Quote Preparation Checklist",
        sectionIds: ["quote-checklist"],
      },
      {
        id: "budgeting-mistakes",
        label: "Budgeting Mistakes",
        sectionIds: ["budgeting-mistakes"],
      },
      {
        id: "faq",
        label: "Frequently Asked Questions",
        sectionIds: ["faq"],
      },
      {
        id: "sources",
        label: "Sources and References",
        sectionIds: ["sources"],
      },
    ],
  },
];

const tocItems = tocGroups.flatMap((group) => group.items);
const observedSectionIds = tocItems.flatMap((item) => item.sectionIds);

const takeaways = [
  {
    title: "Translation Is Only One Part of the Budget",
    copy:
      "A complete scope can also include resource engineering, contextual review, multilingual testing, app-store content, and release support.",
  },
  {
    title: "Words and Strings Measure Different Things",
    copy:
      "Word count represents linguistic volume. String count helps reveal handling effort, ambiguity, interface complexity, and validation needs.",
  },
  {
    title: "Reuse Changes the Economics of Future Releases",
    copy:
      "Approved translations, Translation Memory, terminology, and cross-platform reuse can reduce repeated work while improving consistency.",
  },
  {
    title: "Testing Scope Can Change Cost Substantially",
    copy:
      "Priority journeys on representative devices require a different budget from testing every language, platform, build, screen size, and feature.",
  },
  {
    title: "The First Launch and Future Updates Cost Differently",
    copy:
      "Initial releases establish terminology, files, workflow, and baseline QA. Later releases can focus on new and changed content.",
  },
];

const pricingModels = [
  {
    model: "Per source word",
    measures: "Linguistic volume",
    applications: "Translation, editing, and linguistic review",
  },
  {
    model: "Weighted word",
    measures: "New and reusable linguistic volume",
    applications: "Translation Memory-based projects",
  },
  {
    model: "Per hour",
    measures: "Specialist time and effort",
    applications: "Engineering, testing, terminology, consulting, and review support",
  },
  {
    model: "Per language or locale",
    measures: "Repeatable language-specific scope",
    applications: "Standardized review or QA packages",
  },
  {
    model: "Per build or test cycle",
    measures: "Validation effort",
    applications: "In-context review, testing, and regression",
  },
  {
    model: "Fixed project fee",
    measures: "A defined group of deliverables",
    applications: "Bounded launches with stable assumptions",
  },
  {
    model: "Ongoing program pricing",
    measures: "Recurring multilingual operations",
    applications: "Agile and continuous app releases",
  },
];

const costDrivers = [
  {
    driver: "Languages and locales",
    why: "Each locale requires linguistic production and may require separate market review, store assets, and testing.",
    input: "Exact language-region combinations",
  },
  {
    driver: "Word and string volume",
    why: "Words measure language volume; strings indicate handling and interface complexity.",
    input: "Structured source files and content inventory",
  },
  {
    driver: "Repetition and reuse",
    why: "Approved existing translations can reduce repeated work when the context remains valid.",
    input: "Translation Memory and previous releases",
  },
  {
    driver: "Content complexity",
    why: "Technical, financial, medical, legal, or safety-related content may require specialist linguists and stronger review.",
    input: "Product description and content classification",
  },
  {
    driver: "Quality workflow",
    why: "AI-assisted, professionally reviewed, and independently reviewed routes require different levels of effort.",
    input: "Defined quality and risk requirements",
  },
  {
    driver: "Resource-file condition",
    why: "Clean structured files cost less to process than copied text, screenshots, mixed code, or incomplete exports.",
    input: "Native files and clear export procedures",
  },
  {
    driver: "Context availability",
    why: "Screenshots, designs, comments, and builds reduce ambiguity and downstream corrections.",
    input: "Figma files, screenshots, developer comments, and test builds",
  },
  {
    driver: "Localization engineering",
    why: "Placeholders, plurals, formats, integrations, and build issues require technical handling.",
    input: "Platform, framework, and workflow information",
  },
  {
    driver: "Stakeholder review",
    why: "Multiple reviewers and revision cycles add coordination, reconciliation, and retesting.",
    input: "Named owners and approval rules",
  },
  {
    driver: "Testing scope",
    why: "Languages, platforms, devices, builds, journeys, and regression rounds determine validation effort.",
    input: "Test matrix and acceptance criteria",
  },
  {
    driver: "Release cadence",
    why: "Frequent releases benefit from repeatable automation, change detection, and governance.",
    input: "Release schedule and update frequency",
  },
  {
    driver: "Turnaround",
    why: "Compressed delivery can require parallel teams, expedited review, and after-hours coordination.",
    input: "Realistic milestones and a source freeze",
  },
];

const costContrast = [
  ["Clean, structured resources", "Manual extraction or copied text"],
  ["Stable source content", "Source changes during production"],
  ["Approved Translation Memory", "Retranslating previous content"],
  ["Screenshots and developer comments", "Isolated strings without context"],
  ["Stable string identifiers", "Renamed or regenerated IDs"],
  ["Defined testing coverage", "Unbounded device or feature coverage"],
  ["One approval authority", "Conflicting reviewer feedback"],
  ["Planned release windows", "Rush or after-hours schedules"],
  ["Incremental updates", "Full-file retransmission every release"],
  ["Mature terminology", "Repeated terminology disputes"],
];

const budgetScenarios = [
  {
    number: "01",
    title: "Focused MVP Launch",
    scope:
      "One platform, three target locales, clean resource files, a modest UI volume, professional translation and review, basic in-context QA, and representative-device testing.",
    components:
      "Weighted linguistic volume, initial file preparation, context setup, one review cycle, and one focused test pass.",
    insight:
      "Small apps still require setup, engineering, communication, and validation. A low word count does not eliminate these fixed or hourly components.",
  },
  {
    number: "02",
    title: "Dual-Platform Consumer App",
    scope:
      "iOS and Android, eight target locales, shared and platform-specific resources, app-store metadata, in-context review, selected-device testing, and one regression cycle.",
    components:
      "Shared and unique linguistic volume, iOS and Android resource processing, store content, screenshot localization, testing, and regression verification.",
    insight:
      "Cross-platform reuse can reduce translation volume, but platform-specific engineering, interface review, and testing remain necessary.",
  },
  {
    number: "03",
    title: "Regulated or Transaction-Sensitive App",
    scope:
      "Medical, financial, legal, or safety-related content, specialist linguists, independent review, controlled terminology, documented QA, and critical-journey testing.",
    components:
      "Specialist translation, independent review, terminology development, reviewer reconciliation, documented QA, testing, and verification cycles.",
    insight:
      "Product risk and quality requirements may influence the budget more than the raw word count.",
  },
  {
    number: "04",
    title: "Continuous Localization Program",
    scope:
      "Frequent releases, repository or API handoffs, Translation Memory reuse, new and changed strings only, recurring review, targeted regression testing, and program reporting.",
    components:
      "Workflow setup, incremental translation, language-asset maintenance, release coordination, focused in-context QA, recurring testing, and governance.",
    insight:
      "Continuous Localization can require an initial setup investment, while automation and reuse improve predictability across later releases.",
  },
];

const checklistGroups = [
  {
    title: "Product Scope",
    items: [
      "App name and product type",
      "iOS, Android, or both",
      "Native or cross-platform framework",
      "Current development stage",
      "Public, beta, or unreleased status",
      "Number of apps, editions, or targets",
    ],
  },
  {
    title: "Language Scope",
    items: [
      "Source language",
      "Target languages",
      "Exact regional locales",
      "Priority-market order",
      "Existing localized versions",
      "Market-specific terminology requirements",
    ],
  },
  {
    title: "Content Scope",
    items: [
      "Native resource files",
      "Approximate source words and strings",
      "App Store and Google Play metadata",
      "Screenshots and graphic text",
      "In-app products and subscriptions",
      "Help, release notes, and accessibility content",
    ],
  },
  {
    title: "Language Assets and Context",
    items: [
      "Translation Memory, glossaries, and style guides",
      "Approved translations and previous vendor files",
      "Screenshots, Figma designs, and prototypes",
      "Developer comments and string descriptions",
      "Character limits and user-flow diagrams",
      "Test credentials and beta builds",
    ],
  },
  {
    title: "Quality and Testing",
    items: [
      "AI-assisted, professional, or specialist translation route",
      "Independent, market, or compliance review",
      "Linguistic and visual QA",
      "Locale and functional testing",
      "Right-to-left and accessibility review",
      "Device, OS, build, and regression coverage",
    ],
  },
  {
    title: "Schedule and Operations",
    items: [
      "Planned release date and milestones",
      "Source freeze date",
      "Reviewer and build availability",
      "Expected update frequency",
      "Continuous Localization requirements",
      "Security and confidentiality requirements",
    ],
  },
];

const mistakes = [
  ["Budgeting only for translation", "Include engineering, contextual review, testing, store content, and release support."],
  ["Treating every string as an equal unit", "Review word volume, placeholders, plurals, context, and technical handling."],
  ["Selecting languages without defining locales", "Specify exact market versions and determine whether one version can serve several regions."],
  ["Assuming iOS and Android resources are identical", "Analyze shared and platform-specific strings, resources, builds, and store assets."],
  ["Ignoring App Store and Google Play content", "Inventory the complete acquisition and product experience."],
  ["Defining testing after translation begins", "Agree on languages, devices, builds, journeys, and regression requirements before quoting."],
  ["Providing strings without context", "Include designs, screenshots, comments, identifiers, or build access."],
  ["Changing the source throughout production", "Establish source control, a freeze point, and rules for handling changes."],
  ["Allowing unlimited review cycles", "Define reviewer roles, deadlines, revision limits, and final authority."],
  ["Retranslating complete releases", "Use Translation Memory and identify new and changed content."],
  ["Applying one quality model to every string", "Route content according to visibility, complexity, risk, and consequence."],
  ["Comparing providers only by per-word rate", "Compare the complete scope, assumptions, engineering, review, testing, and long-term operating model."],
];

const faqItems = [
  {
    q: "How much does it cost to localize a mobile app?",
    a: "Cost depends on source volume, languages, Translation Memory leverage, resource-file condition, content complexity, quality workflow, engineering, review, testing, app-store content, and turnaround. A reliable estimate requires at least representative resources and an initial scope.",
  },
  {
    q: "Is app localization priced per word or per string?",
    a: "Translation is commonly priced by source word or weighted word. String count helps estimate handling, context, and interface complexity but does not accurately represent linguistic volume by itself. Engineering and testing are often estimated separately.",
  },
  {
    q: "What is included in an app localization quote?",
    a: "A quote may include translation, linguistic review, resource preparation, localization engineering, in-context QA, app-store content, testing, project management, and release support. Confirm the exact inclusions because proposals can use different scopes and pricing structures.",
  },
  {
    q: "How much does app localization cost per language?",
    a: "There is no fixed cost per language. Pricing depends on the content volume, locale, linguist availability, subject matter, quality level, engineering, review, testing, and store assets required for that market.",
  },
  {
    q: "Why do some languages cost more?",
    a: "Some locales require more specialized linguistic resources, greater review effort, complex scripts or grammar, right-to-left support, market-specific adaptation, specialist expertise, or more extensive testing.",
  },
  {
    q: "Is app localization priced differently for iOS and Android?",
    a: "The linguistic content may overlap, but resource formats, builds, platform-specific strings, store requirements, and testing can differ. A dual-platform analysis should separate reusable and platform-specific work.",
  },
  {
    q: "Are cross-platform apps less expensive to localize?",
    a: "They can be more efficient when content and resources are genuinely shared. Platform-specific strings, native modules, build behavior, and store assets may still require separate processing and testing.",
  },
  {
    q: "How does Translation Memory reduce cost?",
    a: "Translation Memory stores previously translated source and target segments. Approved matches can reduce repeated linguistic work, improve consistency, and make incremental releases more efficient. Matches still need validation when context changes.",
  },
  {
    q: "Can AI translation reduce app localization cost?",
    a: "Yes, for suitable content and workflows. Savings depend on source quality, language pair, terminology, context, product risk, and the level of professional review required. High-visibility, regulated, transactional, or safety-related content normally needs stronger human validation.",
  },
  {
    q: "Does app localization testing cost extra?",
    a: "Testing is often quoted separately because effort depends on languages, builds, platforms, devices, user journeys, and validation rounds. Some proposals may include a basic QA pass while offering broader testing as an option.",
  },
  {
    q: "How is multilingual app testing priced?",
    a: "Testing may be estimated hourly, per language, per build, per platform, per test cycle, or as a fixed package. A defined test matrix produces the most reliable estimate.",
  },
  {
    q: "How much does App Store and Google Play localization cost?",
    a: "Cost depends on metadata volume, languages, keyword or market research, transcreation, screenshot sets, graphic editing, preview videos, custom listings, and update frequency.",
  },
  {
    q: "Why does the first localized release cost more?",
    a: "The first release may require source analysis, terminology, Translation Memory setup, resource preparation, workflow configuration, baseline translation, and initial testing. Later releases can reuse these assets and focus on new and changed content.",
  },
  {
    q: "How much does continuous app localization cost?",
    a: "Continuous Localization cost depends on release frequency, average update volume, workflow integration, review model, testing requirements, minimum charges, and program support. Structured automation and Translation Memory can improve predictability over time.",
  },
  {
    q: "Can Stepes provide a fixed project price?",
    a: "A fixed price may be possible when languages, files, deliverables, quality requirements, testing coverage, review responsibilities, and schedule are sufficiently defined. Evolving or continuous scopes may be better suited to hybrid or recurring pricing.",
  },
  {
    q: "What files are needed for an accurate quote?",
    a: "Native iOS, Android, or cross-platform resource files are preferred. Also provide target locales, approximate words or strings, screenshots, designs, existing translations, store content, release dates, and testing requirements.",
  },
  {
    q: "Can Stepes estimate cost before final files are ready?",
    a: "Yes. Representative resources, screenshots, preliminary word or string volumes, and a draft language plan can support an initial estimate that is refined when the final files become available.",
  },
  {
    q: "Does rush app localization cost more?",
    a: "It can. A compressed schedule may require parallel linguists, expedited review, after-hours coordination, additional project management, or reduced opportunities to sequence work efficiently.",
  },
  {
    q: "How long does app localization take?",
    a: "Timing depends on source volume, languages, file readiness, Translation Memory leverage, content complexity, engineering, review, testing, build availability, reviewer response times, and release date.",
  },
  {
    q: "How can we reduce cost without lowering quality?",
    a: "Internationalize the app, remove obsolete strings, provide context, define terminology, preserve stable IDs, reuse approved translations, limit source changes, assign clear reviewers, select risk-appropriate quality workflows, and test representative builds early.",
  },
];

const relatedResources = [
  {
    title: "How to Prepare a Mobile App for Localization",
    copy:
      "Plan internationalization readiness, resources, context, terminology, testing, and release requirements before translation begins.",
    href: "https://www.stepes.com/resources/localization-guides/how-to-prepare-a-mobile-app-for-localization/",
  },
  {
    title: "iOS App Localization Guide",
    copy:
      "Review String Catalogs, plural behavior, visual context, accessibility content, multilingual testing, and App Store localization.",
    href: "https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/",
  },
  {
    title: "Android App Localization Guide",
    copy:
      "Understand Android resources, locale directories, Jetpack Compose, per-app languages, pseudolocalization, and Google Play content.",
    href: "https://www.stepes.com/resources/localization-guides/android-app-localization-guide/",
  },
  {
    title: "Mobile App Localization Testing Checklist",
    copy:
      "Validate linguistic, visual, functional, locale, accessibility, device, right-to-left, and regression requirements.",
    href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/",
  },
  {
    title: "Continuous Localization for Mobile Apps",
    copy:
      "Connect translation, review, QA, and delivery with agile development, repositories, APIs, and recurring releases.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/",
  },
  {
    title: "Translation Cost Guide",
    copy:
      "Review broader pricing models and cost drivers across documents, software, websites, multimedia, and specialist content.",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
];

const sourceItems = [
  {
    title: "Localizing and Varying Text With a String Catalog",
    publisher: "Apple Developer",
    href: "https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog",
  },
  {
    title: "Localization",
    publisher: "Apple Developer",
    href: "https://developer.apple.com/documentation/xcode/localization",
  },
  {
    title: "App Store Localizations",
    publisher: "Apple App Store Connect Help",
    href: "https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations/",
  },
  {
    title: "Localize Your App",
    publisher: "Android Developers",
    href: "https://developer.android.com/guide/topics/resources/localization",
  },
  {
    title: "Translate and Localize Your App",
    publisher: "Google Play Console Help",
    href: "https://support.google.com/googleplay/android-developer/answer/9844778?hl=en",
  },
  {
    title: "Unicode Locale Data Markup Language: MessageFormat",
    publisher: "Unicode Consortium",
    href: "https://www.unicode.org/reports/tr35/tr35-messageFormat.html",
  },
  {
    title: "Internationalization and Localization",
    publisher: "W3C Internationalization",
    href: "https://www.w3.org/International/questions/qa-i18n",
  },
  {
    title: "XLIFF Technical Committee",
    publisher: "OASIS Open",
    href: "https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xliff",
  },
  {
    title: "App Localization Services",
    publisher: "Stepes",
    href: "https://www.stepes.com/app-localization-services/",
  },
  {
    title: "Translation Cost Guide",
    publisher: "Stepes",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m11.5 6.5 3.5 3.5-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={open ? "chevron chevron-open" : "chevron"}
    >
      <path
        d="m5.5 7.5 4.5 4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isStepesUrl(href) {
  return /^https:\/\/(www\.)?stepes\.com\//.test(href) || /^https:\/\/app\.stepes\.com\//.test(href);
}

function externalLinkProps(href) {
  return isStepesUrl(href) ? {} : { target: "_blank", rel: "noreferrer" };
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function TableOfContents({ activeSection, onNavigate, ariaLabel = "In this guide", mobile = false }) {
  const navigation = (
    <nav aria-label={ariaLabel}>
      {tocGroups.map((group) => (
        <div className="toc-group" key={group.label}>
          <div className="toc-group-label">{group.label}</div>
          <ul className="toc-list">
            {group.items.map((item) => (
              <li className={activeSection === item.id ? "active" : ""} key={item.id}>
                <a
                  className="toc-link"
                  href={sectionUrl(item.id)}
                  onClick={(event) => onNavigate(event, item.id)}
                  aria-current={activeSection === item.id ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );

  if (mobile) {
    return (
      <details className="mobile-toc">
        <summary>
          <span>In This Guide</span>
          <ChevronIcon />
        </summary>
        <div className="mobile-toc-body">{navigation}</div>
      </details>
    );
  }

  return (
    <aside className="toc-rail" aria-label={ariaLabel}>
      <div className="toc-title">In This Guide</div>
      {navigation}
    </aside>
  );
}

function AppLocalizationCostGuideWireframeV3() {
  const [activeSection, setActiveSection] = useState(tocItems[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  const sectionIds = useMemo(() => observedSectionIds, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) {
          const matchedItem = tocItems.find((item) => item.sectionIds.includes(visible[0].target.id));
          if (matchedItem) setActiveSection(matchedItem.id);
        }
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: [0, 0.1, 0.25] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleSectionLink = (event, id) => {
    const element = document.getElementById(id);
    if (!element) return;
    event.preventDefault();
    const details = event.currentTarget.closest?.("details");
    if (details) details.removeAttribute("open");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="guide-page">
      <style>{`
        :root {
          --magenta: ${colors.magenta};
          --magenta-dark: ${colors.magentaDark};
          --magenta-deep: ${colors.magentaDeep};
          --blush: ${colors.blush};
          --blush-strong: ${colors.blushStrong};
          --dark-eyebrow: ${colors.darkEyebrow};
          --ink: ${colors.ink};
          --body: ${colors.body};
          --muted: ${colors.muted};
          --border: ${colors.border};
          --soft: ${colors.soft};
          --white: ${colors.white};
          --shell: 1280px;
          --reading: 760px;
          --header-offset: 116px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .guide-page {
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: clip;
        }
        .guide-page a { color: inherit; }
        .shell {
          width: min(var(--shell), calc(100% - 112px));
          margin: 0 auto;
        }
        .reading-column {
          width: min(var(--reading), 100%);
        }
        .reading-center {
          width: min(var(--reading), 100%);
          margin-inline: auto;
        }
        .section {
          padding: 96px 0;
        }
        .section-dense {
          padding: 80px 0;
        }
        .section-soft { background: var(--soft); }
        .section-blush { background: var(--blush); }
        .section-dark {
          background: #1B1920;
          color: var(--white);
        }
        section[id] { scroll-margin-top: var(--header-offset); }
        h1, h2, h3, p, ul, ol { margin-top: 0; }
        h1, h2, h3 { overflow-wrap: anywhere; }
        h1, h2, h3 { letter-spacing: -0.025em; font-weight: 600; }
        h1 {
          font-size: 48px;
          line-height: 1.08;
          max-width: 760px;
          margin-bottom: 24px;
        }
        h2 {
          font-size: 36px;
          line-height: 1.16;
          margin-bottom: 22px;
        }
        h3 {
          font-size: 24px;
          line-height: 1.25;
          margin-bottom: 12px;
        }
        p {
          color: var(--body);
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 22px;
        }
        p:last-child { margin-bottom: 0; }
        strong { font-weight: 600; }
        .eyebrow {
          display: block;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          line-height: 1.4;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        .section-dark .eyebrow { color: var(--dark-eyebrow); }
        .section-intro {
          color: var(--body);
          font-size: 19px;
          line-height: 1.7;
          max-width: 820px;
          margin-bottom: 38px;
        }
        .section-dark p,
        .section-dark .section-intro { color: #D7D3DC; }
        .muted { color: var(--muted); }

        .breadcrumb-wrap { padding-top: 34px; }
        .breadcrumbs {
          font-size: 14px;
          line-height: 1.5;
          color: var(--muted);
        }
        .breadcrumbs ol {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 0;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .breadcrumbs li {
          display: inline-flex;
          align-items: baseline;
          min-width: 0;
        }
        .breadcrumbs li + li::before {
          content: "/";
          color: #A8A3AC;
          margin: 0 9px;
          flex: 0 0 auto;
        }
        .breadcrumbs a {
          color: var(--muted);
          text-decoration: none;
          border-radius: 4px;
        }
        .breadcrumbs a:hover { color: var(--magenta); }
        .breadcrumbs a:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 3px;
        }
        .breadcrumb-current {
          color: #39363D;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        .hero {
          padding: 42px 0 96px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.22fr) minmax(340px, 0.78fr);
          gap: 72px;
          align-items: center;
        }
        .hero-deck {
          max-width: 760px;
          font-size: 20px;
          line-height: 1.65;
          margin-bottom: 28px;
        }
        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 28px;
        }
        .hero-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hero-meta span + span::before {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #B9B4BD;
          margin-right: 12px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .button {
          min-height: 48px;
          padding: 12px 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, .22);
          outline-offset: 3px;
        }
        .button-primary,
        .button-primary:link,
        .button-primary:visited,
        .button-primary:hover,
        .button-primary:active,
        .button-primary:focus,
        .button-primary:focus-visible,
        .button-primary *,
        .button-primary svg {
          color: var(--white) !important;
          fill: none;
          stroke: currentColor;
        }
        .button-primary {
          background: var(--magenta);
          color: var(--white) !important;
          border: 1px solid var(--magenta);
          box-shadow: 0 8px 22px rgba(193, 29, 99, .16);
        }
        .button-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); }
        .button-secondary {
          background: var(--white);
          color: var(--ink);
          border: 1px solid #D7D3DA;
        }
        .button-secondary:hover { border-color: #BEB8C3; background: #FCFBFC; }

        .hero-framework {
          background: #FBFAFB;
          border: 1px solid var(--border);
          border-radius: 30px;
          padding: 32px;
          box-shadow: 0 22px 60px rgba(29, 24, 34, .07);
        }
        .hero-framework-title {
          font-size: 14px;
          color: var(--muted);
          font-weight: 600;
          margin-bottom: 22px;
        }
        .framework-total {
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 28px;
        }
        .framework-flow {
          display: grid;
          gap: 0;
        }
        .framework-step {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 14px;
          align-items: start;
          padding: 14px 0;
          border-top: 1px solid var(--border);
        }
        .framework-step:first-child { border-top: 0; padding-top: 0; }
        .framework-step:last-child { padding-bottom: 0; }
        .framework-marker {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid var(--magenta);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
        }
        .framework-step strong {
          display: block;
          font-size: 17px;
          line-height: 1.35;
          margin-bottom: 3px;
        }
        .framework-step span {
          display: block;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.5;
        }

        .summary-band {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--blush);
          padding: 72px 0;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 72px;
          align-items: start;
        }
        .summary-grid h2 { max-width: 440px; margin-bottom: 18px; }
        .summary-list { border-top: 1px solid rgba(193, 29, 99, .22); }
        .summary-item {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 18px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(193, 29, 99, .16);
        }
        .summary-number {
          color: var(--magenta);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.6;
        }
        .summary-item h3 { font-size: 19px; margin-bottom: 6px; }
        .summary-item p { font-size: 16px; line-height: 1.6; }

        .article-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 760px);
          gap: 64px;
          justify-content: center;
          align-items: start;
          padding-top: 80px;
        }
        .toc-rail {
          position: sticky;
          top: 110px;
          align-self: start;
          max-height: calc(100vh - 140px);
          overflow: auto;
          padding-right: 18px;
          scrollbar-width: thin;
        }
        .toc-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .toc-group + .toc-group { margin-top: 19px; }
        .toc-group-label {
          color: var(--ink);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .1em;
          line-height: 1.4;
          margin: 0 0 7px 14px;
          text-transform: uppercase;
        }
        .toc-list { list-style: none; margin: 0; padding: 0; }
        .toc-list li { border-left: 2px solid transparent; }
        .toc-list li.active { border-left-color: var(--magenta); }
        .toc-link {
          display: block;
          padding: 7px 0 7px 14px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.35;
          text-decoration: none;
        }
        .toc-list li.active .toc-link { color: var(--magenta); font-weight: 600; }
        .toc-link:hover { color: var(--magenta); }
        .toc-link:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 2px;
          border-radius: 4px;
        }
        .mobile-toc { display: none; }
        .article-main { min-width: 0; }
        .article-section {
          padding: 0 0 92px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 92px;
        }
        .article-section:last-child { border-bottom: 0; }
        .article-section > p,
        .article-section > ul,
        .article-section > ol,
        .article-section > .inline-source,
        .article-section > .editorial-link,
        .article-section > .callout,
        .article-section > .two-column-list,
        .article-section > .definition-grid,
        .article-section > .route-grid,
        .article-section > .process-list {
          max-width: var(--reading);
        }
        .article-section ul,
        .article-section ol {
          color: var(--body);
          font-size: 17px;
          line-height: 1.7;
          padding-left: 24px;
          margin-bottom: 24px;
        }
        .article-section li { margin: 8px 0; padding-left: 4px; }
        .article-section li::marker { color: var(--magenta); }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .editorial-link:hover svg { transform: translateX(2px); }
        .editorial-link svg { transition: transform .2s ease; }
        .editorial-link:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .cost-equation {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          margin: 34px 0;
          background: var(--white);
        }
        .cost-equation-item {
          padding: 25px 18px;
          border-left: 1px solid var(--border);
          text-align: center;
          min-width: 0;
        }
        .cost-equation-item:first-child { border-left: 0; }
        .cost-equation-item strong { display: block; font-size: 17px; line-height: 1.35; }
        .cost-equation-item span { display: block; font-size: 16px; color: var(--muted); margin-top: 7px; line-height: 1.5; }

        .directional-example {
          background: var(--blush);
          border: 1px solid #F2D7E3;
          border-radius: 28px;
          padding: 30px;
          margin: 34px 0;
        }
        .directional-example h3 { margin-bottom: 12px; }
        .scope-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 20px 0 24px;
        }
        .scope-tag {
          border: 1px solid #EFC9D9;
          background: var(--white);
          border-radius: 999px;
          padding: 7px 12px;
          font-size: 14px;
          line-height: 1.35;
          color: #5D4650;
        }
        .formula {
          border-left: 3px solid var(--magenta);
          padding: 10px 0 10px 18px;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.5;
          margin: 22px 0;
        }
        .note {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
          margin-top: 18px;
        }

        .wide-module {
          width: 100%;
          margin: 34px 0;
        }
        .table-wrap {
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          background: var(--white);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        th, td {
          padding: 18px 20px;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid var(--border);
          font-size: 16px;
          line-height: 1.55;
        }
        th {
          background: #F8F7F9;
          color: var(--ink);
          font-weight: 600;
        }
        td { color: var(--body); }
        tr:last-child td { border-bottom: 0; }
        td strong { color: var(--ink); }
        .table-caption {
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
          margin: 12px 6px 0;
        }
        .cost-driver-table th:first-child { width: 23%; }
        .cost-driver-table th:nth-child(2) { width: 47%; }
        .cost-driver-table th:nth-child(3) { width: 30%; }

        .callout {
          background: var(--blush);
          border-left: 3px solid var(--magenta);
          padding: 24px 26px;
          margin: 30px 0;
          border-radius: 0 20px 20px 0;
        }
        .callout-label {
          display: block;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .callout p { color: var(--ink); font-size: 18px; line-height: 1.65; }
        .callout-dark {
          background: rgba(255,255,255,.07);
          border-left-color: var(--dark-eyebrow);
        }
        .callout-dark .callout-label { color: var(--dark-eyebrow); }
        .callout-dark p { color: #F7F4F8; }

        .definition-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
          margin: 30px 0;
        }
        .definition-item { background: var(--white); padding: 25px; }
        .definition-item h3 { font-size: 19px; }
        .definition-item p { font-size: 16px; line-height: 1.65; }
        code {
          background: #F0EDF1;
          color: #473A42;
          border-radius: 6px;
          padding: 2px 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: .92em;
          overflow-wrap: anywhere;
        }

        .two-column-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin: 28px 0;
        }
        .list-panel {
          border-top: 2px solid var(--magenta);
          padding-top: 18px;
        }
        .list-panel h3 { font-size: 20px; }
        .list-panel ul { font-size: 16px; margin-bottom: 0; }

        .platform-block {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 34px;
          padding: 30px 0;
          border-top: 1px solid var(--border);
        }
        .platform-block:first-of-type { margin-top: 28px; }
        .platform-label {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }
        .platform-content p { font-size: 17px; }
        .platform-content ul { font-size: 16px; columns: 2; column-gap: 40px; }
        .platform-content li { break-inside: avoid; }
        .inline-source {
          padding-top: 4px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.6;
        }
        .inline-source a {
          color: var(--magenta);
          font-weight: 600;
          text-decoration: none;
        }
        .inline-source a:hover { text-decoration: underline; text-underline-offset: 4px; }

        .quality-section {
          padding: 96px 0;
        }
        .quality-header {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 72px;
          align-items: start;
          margin-bottom: 46px;
        }
        .quality-header h2 { max-width: 440px; }
        .route-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 28px;
          overflow: hidden;
        }
        .route-item {
          padding: 28px;
          border-top: 1px solid rgba(255,255,255,.14);
          border-left: 1px solid rgba(255,255,255,.14);
        }
        .route-item:nth-child(-n+2) { border-top: 0; }
        .route-item:nth-child(odd) { border-left: 0; }
        .route-kicker {
          color: var(--dark-eyebrow);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .route-item h3 { color: var(--white); font-size: 21px; }
        .route-item p { color: #D7D3DC; font-size: 16px; line-height: 1.65; }
        .route-table {
          margin-top: 40px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 24px;
          overflow: hidden;
        }
        .route-table th { background: rgba(255,255,255,.07); color: var(--white); border-color: rgba(255,255,255,.14); }
        .route-table td { color: #DDD9E1; border-color: rgba(255,255,255,.14); }
        .route-table td strong { color: var(--white); }
        .section-dark .editorial-link,
        .section-dark .editorial-link:visited { color: var(--dark-eyebrow) !important; }

        .testing-formula {
          background: #F8F7F9;
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 28px;
          margin: 30px 0;
          text-align: center;
        }
        .testing-formula strong { display: block; font-size: 22px; line-height: 1.45; }
        .testing-formula span { display: block; color: var(--muted); font-size: 15px; line-height: 1.55; margin-top: 10px; }
        .testing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 34px;
          margin-top: 28px;
        }
        .testing-item {
          padding: 24px 0;
          border-top: 1px solid var(--border);
        }
        .testing-item h3 { font-size: 20px; }
        .testing-item p { font-size: 16px; line-height: 1.65; }

        .timeline {
          border-top: 1px solid var(--border);
          margin-top: 34px;
        }
        .timeline-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 34px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }
        .timeline-label { font-size: 19px; font-weight: 600; line-height: 1.35; }
        .timeline-content p { font-size: 17px; }
        .timeline-content ul { font-size: 16px; columns: 2; }

        .scenario-list { border-top: 1px solid var(--border); }
        .scenario {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 26px;
          padding: 34px 0;
          border-bottom: 1px solid var(--border);
        }
        .scenario-number {
          color: var(--magenta);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.45;
        }
        .scenario h3 { margin-bottom: 16px; }
        .scenario-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 18px;
        }
        .scenario-detail div { padding-top: 14px; border-top: 1px solid var(--border); }
        .scenario-detail strong {
          display: block;
          font-size: 14px;
          line-height: 1.4;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .scenario-detail p { font-size: 16px; line-height: 1.6; }
        .scenario-insight {
          background: var(--blush);
          border-radius: 18px;
          padding: 18px 20px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink);
        }


        .phased-guidance {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          margin-top: 32px;
        }
        .phase {
          background: var(--white);
          padding: 28px;
        }
        .phase-label {
          display: block;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .phase h3 { font-size: 21px; }
        .phase ul { font-size: 16px; padding-left: 20px; margin-bottom: 0; }

        .checklist-shell {
          background: var(--soft);
          padding: 96px 0;
        }
        .checklist-header {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 72px;
          align-items: start;
          margin-bottom: 46px;
        }
        .checklist-header h2 { max-width: 440px; }
        .checklist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--border);
          border-radius: 28px;
          overflow: hidden;
          background: var(--white);
        }
        .checklist-group {
          padding: 30px;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }
        .checklist-group:nth-child(-n+2) { border-top: 0; }
        .checklist-group:nth-child(odd) { border-left: 0; }
        .checklist-group h3 { font-size: 20px; margin-bottom: 18px; }
        .checklist-group ul { list-style: none; margin: 0; padding: 0; }
        .checklist-group li {
          position: relative;
          padding-left: 27px;
          margin: 11px 0;
          color: var(--body);
          font-size: 16px;
          line-height: 1.55;
        }
        .checklist-group li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .33em;
          width: 15px;
          height: 15px;
          border: 1.5px solid var(--magenta);
          border-radius: 4px;
        }
        .checklist-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 28px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .checklist-action p { font-size: 16px; max-width: 650px; }

        .process-list {
          counter-reset: process;
          border-top: 1px solid var(--border);
          margin-top: 30px;
        }
        .process-step {
          counter-increment: process;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 20px;
          padding: 25px 0;
          border-bottom: 1px solid var(--border);
        }
        .process-step::before {
          content: counter(process, decimal-leading-zero);
          color: var(--magenta);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
        }
        .process-step h3 { font-size: 20px; margin-bottom: 7px; }
        .process-step p { font-size: 16px; line-height: 1.65; }

        .mistakes-list { border-top: 1px solid var(--border); }
        .mistake-row {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 34px;
          padding: 23px 0;
          border-bottom: 1px solid var(--border);
        }
        .mistake-row strong { font-size: 17px; line-height: 1.5; }
        .mistake-row p { font-size: 16px; line-height: 1.6; }

        .faq-panel {
          border-top: 1px solid var(--border);
          margin-top: 34px;
        }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-button {
          width: 100%;
          min-height: 64px;
          display: grid;
          grid-template-columns: 1fr 28px;
          gap: 22px;
          align-items: center;
          border: 0;
          background: transparent;
          color: var(--ink);
          padding: 22px 0;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
        }
        .faq-button:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .faq-answer {
          max-width: 820px;
          padding: 0 52px 24px 0;
        }
        .faq-answer p { font-size: 16px; line-height: 1.7; }
        .chevron { transition: transform .2s ease; }
        .chevron-open { transform: rotate(180deg); }

        .sources-list {
          border-top: 1px solid var(--border);
          margin-top: 32px;
        }
        .source-row {
          display: grid;
          grid-template-columns: 1fr 210px 22px;
          gap: 24px;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          color: var(--ink);
          text-decoration: none;
        }
        .source-row:hover .source-title { color: var(--magenta); }
        .source-row:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .source-title { font-size: 16px; font-weight: 600; line-height: 1.5; }
        .source-publisher { font-size: 16px; color: var(--muted); line-height: 1.5; }
        .source-row svg { color: var(--magenta); }

        .related-section { padding: 88px 0; }
        .related-header {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 72px;
          margin-bottom: 40px;
        }
        .related-header h2 { max-width: 430px; }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }
        .related-item {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          background: var(--white);
          transition: background .2s ease;
        }
        .related-item:hover { background: var(--blush); }
        .related-item:focus-visible {
          outline: 2px solid var(--magenta);
          outline-offset: -4px;
        }
        .related-item h3 { font-size: 20px; margin-bottom: 12px; }
        .related-item p { font-size: 16px; line-height: 1.6; }
        .related-action {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          margin-top: 24px;
        }

        .final-cta { padding: 32px 0 96px; }
        .final-cta-panel {
          background: var(--blush);
          border: 1px solid #EFD3DF;
          border-radius: 30px;
          padding: 62px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 54px;
          align-items: center;
        }
        .final-cta-copy { max-width: 740px; }
        .final-cta-copy h2 { margin-bottom: 16px; }
        .final-cta-copy p { font-size: 18px; }
        .final-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 244px;
        }

        @media (max-width: 1120px) {
          .shell { width: calc(100% - 80px); }
          .hero-grid { gap: 48px; grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr); }
          .article-layout { grid-template-columns: 230px minmax(0, 720px); gap: 48px; }
          .wide-module { width: 100%; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          :root { --header-offset: 100px; }
          .shell { width: calc(100% - 48px); }
          .section, .quality-section, .checklist-shell { padding: 80px 0; }
          .hero { padding: 34px 0 80px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero-grid { grid-template-columns: 1fr; gap: 42px; }
          .hero-framework { max-width: 720px; }
          .summary-grid,
          .quality-header,
          .checklist-header,
          .related-header { grid-template-columns: 1fr; gap: 24px; }
          .summary-grid h2,
          .quality-header h2,
          .checklist-header h2,
          .related-header h2 { max-width: 720px; }
          .article-layout { display: block; padding-top: 64px; }
          .toc-rail { display: none; }
          .mobile-toc {
            display: block;
            border: 1px solid var(--border);
            border-radius: 20px;
            margin-bottom: 64px;
            background: var(--white);
          }
          .mobile-toc summary {
            min-height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            padding: 16px 20px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            list-style: none;
          }
          .mobile-toc summary::-webkit-details-marker { display: none; }
          .mobile-toc summary:focus-visible {
            outline: 2px solid var(--magenta);
            outline-offset: 3px;
            border-radius: 18px;
          }
          .mobile-toc-body { padding: 14px 20px 18px; border-top: 1px solid var(--border); }
          .mobile-toc .toc-group + .toc-group { margin-top: 18px; }
          .mobile-toc .toc-group-label { margin-left: 0; }
          .mobile-toc .toc-link { font-size: 16px; padding: 9px 0 9px 12px; }
          .mobile-toc[open] .chevron { transform: rotate(180deg); }
          .article-main { width: min(760px, 100%); margin: 0 auto; }
          .wide-module { width: 100%; }
          .cost-equation { grid-template-columns: 1fr; }
          .cost-equation-item { text-align: left; border-left: 0; border-top: 1px solid var(--border); }
          .cost-equation-item:first-child { border-top: 0; }
          .platform-block, .timeline-row { grid-template-columns: 150px 1fr; gap: 26px; }
          .phased-guidance { grid-template-columns: 1fr; }
          .checklist-grid { grid-template-columns: 1fr; }
          .checklist-group { border-left: 0; }
          .checklist-group:nth-child(2) { border-top: 1px solid var(--border); }
          .final-cta-panel { grid-template-columns: 1fr; padding: 48px; }
          .final-cta-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 720px) {
          .shell { width: calc(100% - 40px); }
          .breadcrumb-wrap { padding-top: 24px; }
          .hero { padding: 28px 0 68px; }
          .section, .section-dense, .quality-section, .checklist-shell { padding: 68px 0; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          p, .hero-deck, .section-intro { font-size: 17px; line-height: 1.68; }
          .hero-grid { gap: 34px; }
          .hero-framework { padding: 26px; border-radius: 24px; }
          .hero-meta { gap: 8px 14px; }
          .hero-meta span + span::before { display: none; }
          .hero-actions { flex-direction: column; }
          .button { width: 100%; min-height: 50px; }
          .summary-band { padding: 64px 0; }
          .summary-item { grid-template-columns: 32px 1fr; gap: 12px; }
          .article-layout { padding-top: 56px; }
          .mobile-toc { margin-bottom: 56px; }
          .article-section { padding-bottom: 72px; margin-bottom: 72px; }
          .article-section ul, .article-section ol { font-size: 16px; }
          .wide-module { width: 100%; }
          .directional-example, .callout { padding: 24px; }
          .definition-grid, .two-column-list, .testing-grid, .route-grid { grid-template-columns: 1fr; }
          .definition-item, .route-item { border-left: 0; }
          .route-item:nth-child(2) { border-top: 1px solid rgba(255,255,255,.14); }
          .platform-block, .timeline-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .platform-content ul, .timeline-content ul { columns: 1; }
          .scenario { grid-template-columns: 1fr; gap: 10px; }
          .scenario-detail { grid-template-columns: 1fr; gap: 12px; }
          .checklist-action { align-items: flex-start; flex-direction: column; }
          .mistake-row { grid-template-columns: 1fr; gap: 7px; }
          .faq-button { font-size: 17px; padding: 20px 0; }
          .faq-answer { padding-right: 0; }
          .source-row { grid-template-columns: minmax(0, 1fr) 22px; gap: 10px 16px; }
          .source-title, .source-publisher { overflow-wrap: anywhere; }
          .source-publisher { grid-column: 1 / 2; grid-row: 2; }
          .source-row svg { grid-column: 2; grid-row: 1 / span 2; }
          .related-grid { grid-template-columns: 1fr; }
          .related-item { min-height: 0; overflow-wrap: anywhere; }
          .final-cta { padding: 22px 0 72px; }
          .final-cta-panel { padding: 34px 24px; border-radius: 24px; }
          .final-cta-actions { flex-direction: column; }
          .table-wrap { border-radius: 20px; }
          table, thead, tbody, th, td, tr { display: block; }
          thead {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
          }
          tr { border-bottom: 1px solid var(--border); padding: 16px 18px; }
          tr:last-child { border-bottom: 0; }
          td {
            display: grid;
            grid-template-columns: minmax(112px, .45fr) 1fr;
            gap: 14px;
            border: 0;
            padding: 7px 0;
            font-size: 16px;
          }
          td::before {
            content: attr(data-label);
            color: var(--ink);
            font-weight: 600;
          }
          .route-table tr { border-color: rgba(255,255,255,.14); }
          .route-table td::before { color: var(--white); }
        }

        @media (max-width: 390px) {
          .shell { width: calc(100% - 32px); }
          .breadcrumbs { font-size: 14px; }
          .hero-framework { padding: 22px; }
          .framework-step { grid-template-columns: 24px 1fr; gap: 12px; }
          .scope-tags { display: grid; grid-template-columns: 1fr; }
          .scope-tag { border-radius: 12px; }
          td { grid-template-columns: 1fr; gap: 2px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <div className="breadcrumb-wrap">
        <div className="shell">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((item) => (
                <li key={item.label}>
                  {item.current ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <a href={item.href}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <header className="hero">
        <div className="shell hero-grid">
          <div>
            <span className="eyebrow">Localization Guide</span>
            <h1>App Localization Cost Guide</h1>
            <p className="hero-deck">
              Understand what app localization costs, which services belong in the budget, and how
              languages, content volume, repetition, engineering, review, testing, and release
              schedules affect pricing.
            </p>
            <div className="hero-meta" aria-label="Guide information">
              <span>Cost and Planning Guide</span>
              <span>Illustrative budget models</span>
              <span>Last reviewed August 2026</span>
            </div>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={sectionUrl("cost-framework")}
                onClick={(event) => handleSectionLink(event, "cost-framework")}
              >
                Explore the Cost Framework <ArrowIcon />
              </a>
              <a
                className="button button-secondary"
                href={sectionUrl("quote-checklist")}
                onClick={(event) => handleSectionLink(event, "quote-checklist")}
              >
                Jump to the Quote Checklist <ArrowIcon />
              </a>
            </div>
          </div>

          <aside className="hero-framework" aria-label="App localization investment model">
            <div className="hero-framework-title">App Localization Investment Framework</div>
            <div className="framework-total">A complete budget connects five areas of work.</div>
            <div className="framework-flow">
              {[
                ["Translation", "Words, languages, terminology, and quality route"],
                ["Engineering", "Files, placeholders, plurals, and integrations"],
                ["Review", "Context, stakeholders, feedback, and approval"],
                ["Testing", "Language, layout, locale, device, and regression QA"],
                ["Release Support", "Coordination, reporting, reuse, and updates"],
              ].map(([title, copy], index) => (
                <div className="framework-step" key={title}>
                  <div className="framework-marker">{index + 1}</div>
                  <div>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </header>

      <section className="summary-band" id="cost-at-a-glance">
        <div className="shell summary-grid">
          <div>
            <span className="eyebrow">App Localization Costs at a Glance</span>
            <h2>What Determines the Cost of Localizing an App?</h2>
            <p>
              The most useful estimate accounts for the complete multilingual release—not only the
              translation rate.
            </p>
          </div>
          <div className="summary-list">
            {takeaways.map((item, index) => (
              <div className="summary-item" key={item.title}>
                <div className="summary-number">0{index + 1}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shell article-layout">
        <TableOfContents
          activeSection={activeSection}
          onNavigate={handleSectionLink}
          ariaLabel="In this guide: all chapters"
        />

        <div className="article-main">
          <TableOfContents
            activeSection={activeSection}
            onNavigate={handleSectionLink}
            ariaLabel="In this guide: mobile chapter navigation"
            mobile
          />

          <article>
            <section className="article-section" id="how-much">
              <h2>How Much Does App Localization Cost?</h2>
              <p className="section-intro">
                There is no reliable universal price per app or per language. The budget depends on
                what must be translated, engineered, reviewed, tested, and maintained for the target
                markets.
              </p>
              <p>
                A 2,500-word consumer app with clean resource files and limited testing has a very
                different cost structure from a regulated health app with complex dynamic messages,
                specialist review, multiple devices, and documented validation.
              </p>
              <p>
                For initial planning, the broader Stepes Translation Cost Guide currently provides
                directional ranges of approximately <strong>$0.09 to $0.20 per source word</strong>
                for standard and technical translation and <strong>$30 to $55 per hour</strong> for
                engineering and specialist support. App-localization proposals may combine these
                units with language-specific rates, project minimums, review costs, testing cycles,
                program management, and other requirements.
              </p>
              <EditorialLink href="https://www.stepes.com/resources/translation-cost-guide/">
                Review the Stepes Translation Cost Guide
              </EditorialLink>

              <div className="directional-example">
                <span className="eyebrow">Illustrative Budgeting Example</span>
                <h3>A Dual-Platform App With Four Target Locales</h3>
                <p>
                  This directional scenario shows how separate cost components can combine. It is not
                  a Stepes quotation or a universal rate card.
                </p>
                <div className="scope-tags" aria-label="Illustrative scope">
                  <span className="scope-tag">2,500 source words</span>
                  <span className="scope-tag">4 target locales</span>
                  <span className="scope-tag">Clean iOS and Android resources</span>
                  <span className="scope-tag">Professional translation and review</span>
                  <span className="scope-tag">Representative-device testing</span>
                </div>
                <div className="formula">2,500 source words × 4 locales = 10,000 gross target-language words</div>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Budget Component</th>
                        <th scope="col">Illustrative Basis</th>
                        <th scope="col">Directional Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Budget Component"><strong>Translation and linguistic production</strong></td>
                        <td data-label="Illustrative Basis">10,000 gross words</td>
                        <td data-label="Directional Range">$900–$2,000</td>
                      </tr>
                      <tr>
                        <td data-label="Budget Component"><strong>File preparation and engineering</strong></td>
                        <td data-label="Illustrative Basis">8–16 hours</td>
                        <td data-label="Directional Range">$240–$880</td>
                      </tr>
                      <tr>
                        <td data-label="Budget Component"><strong>In-context QA and testing</strong></td>
                        <td data-label="Illustrative Basis">16–32 hours</td>
                        <td data-label="Directional Range">$480–$1,760</td>
                      </tr>
                      <tr>
                        <td data-label="Budget Component"><strong>Directional subtotal</strong></td>
                        <td data-label="Illustrative Basis">Before additional scope</td>
                        <td data-label="Directional Range"><strong>$1,620–$4,640</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="note">
                  Translation Memory reuse may reduce the linguistic portion. Specialist review,
                  extensive store assets, full device coverage, regulated documentation, or rush
                  delivery may increase the final scope.
                </p>
              </div>
            </section>

            <section className="article-section" id="cost-framework">
              <h2>What Does App Localization Pricing Include?</h2>
              <p className="section-intro">
                App localization adapts the complete product experience for a specific language,
                culture, and market. Translation is central, but it is not the only cost component.
              </p>
              <p>
                A complete scope may cover menus, navigation, onboarding, error messages,
                notifications, permissions, purchase flows, accessibility labels, help content,
                store listings, screenshots, release notes, and in-app product descriptions.
              </p>

              <div className="cost-equation" role="list" aria-label="Five app localization cost categories">
                {[
                  ["Translation", "Language production"],
                  ["Engineering", "Technical resources"],
                  ["Review", "Context and approval"],
                  ["Testing", "Product validation"],
                  ["Release Support", "Ongoing operations"],
                ].map(([title, copy]) => (
                  <div className="cost-equation-item" role="listitem" key={title}>
                    <strong>{title}</strong>
                    <span>{copy}</span>
                  </div>
                ))}
              </div>

              <h3>1. Linguistic Production</h3>
              <p>
                Linguistic production may include Professional Translation, AI-assisted translation,
                machine translation post-editing, independent review, specialist review,
                terminology development, market adaptation, and transcreation for promotional copy.
              </p>

              <h3>2. Localization Engineering</h3>
              <p>
                Engineering protects the relationship between translated language and the app’s
                technical resources. It may include resource inspection, extraction, conversion,
                key protection, placeholder validation, plural handling, character-limit management,
                reintegration support, build troubleshooting, and automation setup.
              </p>

              <h3>3. Context and Review</h3>
              <p>
                Contextual work helps linguists make better decisions and lets reviewers evaluate the
                translation inside the product. It may include design review, in-context linguistic
                QA, product or market review, feedback reconciliation, terminology updates, and final
                approval support.
              </p>

              <h3>4. Testing and Validation</h3>
              <p>
                Testing may cover linguistic accuracy, layout, truncation, locale formats,
                functionality, right-to-left behavior, accessibility language, devices, operating
                systems, regression, and verification of corrected issues.
              </p>

              <h3>5. Release and Program Support</h3>
              <p>
                Ongoing programs may include project management, release coordination, Translation
                Memory and terminology maintenance, reporting, reviewer coordination, new-string
                detection, and Continuous Localization support.
              </p>

              <div className="callout">
                <span className="callout-label">Cost Planning Principle</span>
                <p>
                  The lowest translation rate does not always produce the lowest total release cost.
                  Missing context, weak terminology, unsuitable files, and late testing can shift the
                  expense into development rework, reviewer time, customer support, and post-release
                  corrections.
                </p>
              </div>

              <EditorialLink href="https://www.stepes.com/app-localization-services/">
                Explore Stepes App Localization Services
              </EditorialLink>
            </section>

            <section className="article-section" id="pricing-models">
              <h2>Common App Localization Pricing Models</h2>
              <p className="section-intro">
                Professional app-localization proposals frequently combine several pricing methods
                because no single unit accurately represents every type of work.
              </p>

              <div className="wide-module">
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Pricing Model</th>
                        <th scope="col">What It Measures</th>
                        <th scope="col">Common Applications</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((item) => (
                        <tr key={item.model}>
                          <td data-label="Pricing Model"><strong>{item.model}</strong></td>
                          <td data-label="What It Measures">{item.measures}</td>
                          <td data-label="Common Applications">{item.applications}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3>Why Hybrid Pricing Is Common</h3>
              <p>
                A proposal may use per-word pricing for translation, weighted-word pricing for
                Translation Memory matches, hourly pricing for engineering, per-build estimates for
                testing, fixed fees for a defined store package, and recurring pricing for continuous
                releases.
              </p>
              <p>When comparing proposals, confirm whether the quoted amount includes:</p>
              <div className="two-column-list">
                <div className="list-panel">
                  <h3>Linguistic and Technical Scope</h3>
                  <ul>
                    <li>Linguistic review</li>
                    <li>File preparation</li>
                    <li>Localization engineering</li>
                    <li>In-context testing</li>
                    <li>App-store content</li>
                  </ul>
                </div>
                <div className="list-panel">
                  <h3>Program and Commercial Scope</h3>
                  <ul>
                    <li>Project management</li>
                    <li>Reviewer changes</li>
                    <li>Retesting</li>
                    <li>Language-asset maintenance</li>
                    <li>Rush or weekend production</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="article-section" id="cost-drivers">
              <h2>The Main App Localization Cost Drivers</h2>
              <p className="section-intro">
                Twelve factors usually have the greatest influence on pricing. Defining them before
                requesting an estimate makes proposals easier to compare and reduces surprise scope
                changes later.
              </p>

              <div className="wide-module">
                <div className="table-wrap cost-driver-table">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Cost Driver</th>
                        <th scope="col">Why It Matters</th>
                        <th scope="col">What Supports an Accurate Estimate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costDrivers.map((item) => (
                        <tr key={item.driver}>
                          <td data-label="Cost Driver"><strong>{item.driver}</strong></td>
                          <td data-label="Why It Matters">{item.why}</td>
                          <td data-label="Useful Input">{item.input}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <h3>What Usually Reduces or Increases Cost?</h3>
              <div className="wide-module">
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Usually Reduces Cost</th>
                        <th scope="col">Usually Increases Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costContrast.map(([reduces, increases]) => (
                        <tr key={reduces}>
                          <td data-label="Usually Reduces Cost">{reduces}</td>
                          <td data-label="Usually Increases Cost">{increases}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="article-section" id="words-and-strings">
              <h2>Why App Localization Is Not Priced by String Count Alone</h2>
              <p className="section-intro">
                A string is an individual unit of localizable content. It may contain one word, a
                paragraph, a dynamic message, or one variation in a plural structure.
              </p>

              <div className="definition-grid">
                <div className="definition-item">
                  <h3>What String Count Shows</h3>
                  <p>
                    The number of UI entries, handling units, context points, and items that may need
                    individual validation.
                  </p>
                </div>
                <div className="definition-item">
                  <h3>What Word Count Shows</h3>
                  <p>
                    The volume of source language that must be translated or reviewed, but not every
                    technical or contextual task.
                  </p>
                </div>
              </div>

              <p>A single string could be any of the following:</p>
              <ul>
                <li>“Back”</li>
                <li>“Payment declined”</li>
                <li>“Your subscription renews on <code>{"{date}"}</code>”</li>
                <li>“You have <code>{"{count}"}</code> items in your cart”</li>
                <li>A multi-sentence onboarding instruction</li>
              </ul>

              <h3>Why Short UI Strings Can Require More Work per Word</h3>
              <p>
                Labels such as “Open,” “Charge,” “Order,” “Apply,” “Balance,” and “Back” can have
                several meanings or grammatical roles. Screenshots, screen identifiers, comments,
                prototypes, and character limits prevent translations that are technically correct
                but wrong for the interface.
              </p>

              <h3>What Counts as Repetition?</h3>
              <div className="definition-grid">
                {[
                  ["Internal Repetition", "The same source segment occurs more than once in the submitted resources."],
                  ["Exact Translation Memory Match", "A source segment matches a previously approved source and target segment."],
                  ["Fuzzy Match", "A source segment is similar—but not identical—to a previous segment and needs editing."],
                  ["Cross-Platform Match", "An iOS and Android string share the same source text and valid context."],
                  ["Approved Existing Translation", "A prior app, website, or release translation can be reused after validation."],
                  ["Similar Text, Different Translation", "Identical source wording needs a different translation because the context changes."],
                ].map(([title, copy]) => (
                  <div className="definition-item" key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>

              <h3>Weighted Word Counts</h3>
              <p>
                Translation Memory proposals may assign different levels of effort to new words,
                fuzzy matches, repetitions, and exact matches. The appropriate treatment depends on
                match quality, origin, approval status, context, language pair, review requirements,
                and content risk.
              </p>
              <div className="formula">New content + adjusted matches + repetition review = weighted linguistic volume</div>
              <EditorialLink href="https://www.stepes.com/translation-memory/">
                See How Translation Memory Supports Reuse
              </EditorialLink>

              <h3>Variables, Plurals, and Dynamic Messages</h3>
              <p>
                Dynamic messages may contain names, dates, numbers, currencies, quantities, and other
                runtime values. Tokens such as <code>{"{name}"}</code>, <code>{"{count}"}</code>,
                <code>%d</code>, and <code>%@</code> must remain protected while the surrounding text
                adapts to the grammar and word order of the target language.
              </p>
              <p>
                Languages also use different plural categories and sentence structures. A message
                with only a few visible words can therefore require more technical and linguistic
                attention than its raw word count suggests.
              </p>
              <p className="inline-source">
                Technical reference: Unicode’s
                {" "}
                <a href="https://www.unicode.org/reports/tr35/tr35-messageFormat.html" target="_blank" rel="noreferrer">
                  MessageFormat specification
                </a>
                {" "}addresses dynamic messages, locale-sensitive formatting, grammatical selection,
                plurals, and runtime variables.
              </p>
            </section>

            <section className="article-section" id="languages-and-locales">
              <h2>Why App Localization Cost Varies by Language</h2>
              <p className="section-intro">
                A language is not always the same as a market-ready locale. The correct scope should
                follow the actual markets, users, terminology, legal requirements, and product strategy.
              </p>

              <div className="two-column-list">
                <div className="list-panel">
                  <h3>Language and Locale Examples</h3>
                  <ul>
                    <li>Spanish for Spain and Spanish for Mexico</li>
                    <li>Portuguese for Brazil and Portugal</li>
                    <li>French for France and Canada</li>
                    <li>English for the United States and United Kingdom</li>
                    <li>Simplified Chinese and Traditional Chinese</li>
                  </ul>
                </div>
                <div className="list-panel">
                  <h3>Cost Variables by Locale</h3>
                  <ul>
                    <li>Linguist and specialist availability</li>
                    <li>Script, direction, grammar, and plural behavior</li>
                    <li>Regional terminology and locale formats</li>
                    <li>Text expansion or compression</li>
                    <li>Regulatory and creative adaptation requirements</li>
                  </ul>
                </div>
              </div>

              <h3>Which Costs May Be Shared?</h3>
              <p>
                Project setup, source analysis, workflow design, engineering preparation, context
                creation, terminology extraction, and automation configuration may be shared across
                languages. Translation, linguistic review, market review, store content, screenshots,
                in-context QA, and locale testing generally increase with each locale.
              </p>

              <div className="callout">
                <span className="callout-label">Market Planning Note</span>
                <p>
                  A single neutral language version may reduce initial cost, but it should not be
                  selected solely for price when terminology, regulations, brand expectations, or user
                  behavior differ materially by market.
                </p>
              </div>

              <EditorialLink href="https://www.stepes.com/translation-languages/">
                Review Stepes Translation Languages
              </EditorialLink>
            </section>

            <section className="article-section" id="engineering">
              <h2>How App Architecture and Resource Files Affect Pricing</h2>
              <p className="section-intro">
                A localization-ready app usually costs less to prepare, translate, update, and test
                than an app whose text is embedded in code or distributed across unstructured sources.
              </p>
              <p>
                Internationalization should separate localizable resources from application logic and
                support language, script, locale, bidirectional text, numbers, dates, names, addresses,
                and other regional behavior before translation begins.
              </p>

              <div className="platform-block">
                <div className="platform-label">iOS</div>
                <div className="platform-content">
                  <p>
                    An iOS scope may involve String Catalogs, legacy string resources, plurals,
                    device-specific variations, localized assets, XLIFF exchange, SwiftUI or UIKit
                    strings, App Store metadata, and build validation.
                  </p>
                  <ul>
                    <li><code>.xcstrings</code> String Catalogs</li>
                    <li>Legacy <code>.strings</code> resources</li>
                    <li>Plural and device variations</li>
                    <li>Localized asset catalogs</li>
                    <li>XLIFF export and import</li>
                    <li>App Store metadata</li>
                  </ul>
                  <p className="inline-source">
                    Apple reference:
                    {" "}
                    <a href="https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog" target="_blank" rel="noreferrer">
                      Localizing and Varying Text With a String Catalog
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="platform-block">
                <div className="platform-label">Android</div>
                <div className="platform-content">
                  <p>
                    An Android scope may include default and locale-specific resources, plurals,
                    string arrays, Jetpack Compose resources, formatting arguments, per-app language
                    behavior, Play Store content, and build validation.
                  </p>
                  <ul>
                    <li><code>strings.xml</code></li>
                    <li>Plural resources and string arrays</li>
                    <li>Locale-specific <code>values</code> directories</li>
                    <li>Jetpack Compose resources</li>
                    <li>Formatting arguments</li>
                    <li>Per-app language support</li>
                  </ul>
                  <p className="inline-source">
                    Android reference:
                    {" "}
                    <a href="https://developer.android.com/guide/topics/resources/localization" target="_blank" rel="noreferrer">
                      Localize Your App
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="platform-block">
                <div className="platform-label">Cross-Platform</div>
                <div className="platform-content">
                  <p>
                    Cross-platform projects may use Flutter ARB, React Native JSON, .NET RESX, Unity
                    resources, XLIFF, PO files, JavaScript objects, or proprietary formats. Shared
                    frameworks can improve reuse but do not guarantee identical resources, behavior,
                    screens, or store assets across iOS and Android.
                  </p>
                  <ul>
                    <li>Flutter ARB</li>
                    <li>React Native JSON</li>
                    <li>.NET RESX</li>
                    <li>Unity resources</li>
                    <li>XLIFF and PO</li>
                    <li>Custom resource systems</li>
                  </ul>
                  <p className="inline-source">
                    Interchange reference:
                    {" "}
                    <a href="https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=xliff" target="_blank" rel="noreferrer">
                      OASIS XLIFF
                    </a>
                    .
                  </p>
                </div>
              </div>

              <h3>Localization-Ready vs. Localization-Unprepared Apps</h3>
              <div className="wide-module">
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Localization-Ready App</th>
                        <th scope="col">Localization-Unprepared App</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Text is externalized", "Text is embedded in code or images"],
                        ["Stable resource keys", "Keys change between exports"],
                        ["Variables are documented", "Placeholder behavior is unclear"],
                        ["Plurals are structured", "Sentences are concatenated"],
                        ["Locale formats use libraries", "Formats are manually coded"],
                        ["Screenshots and comments are available", "Strings lack product context"],
                        ["Multilingual builds can be tested", "No localized build is available"],
                        ["New and changed strings are identifiable", "Every release needs a full comparison"],
                      ].map(([ready, unprepared]) => (
                        <tr key={ready}>
                          <td data-label="Localization-Ready App">{ready}</td>
                          <td data-label="Localization-Unprepared App">{unprepared}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/how-to-prepare-a-mobile-app-for-localization/">
                Prepare Your Mobile App for Localization
              </EditorialLink>
            </section>
          </article>
        </div>
      </div>

      <section className="section-dark quality-section" id="quality-routing">
        <div className="shell">
          <div className="quality-header">
            <div>
              <span className="eyebrow">Quality Routing</span>
              <h2>How AI Translation and Human Review Affect Cost</h2>
            </div>
            <div>
              <p className="section-intro">
                AI translation can improve speed and efficiency for suitable content. The strongest
                results come from matching the workflow to the content’s purpose and risk rather than
                applying one method to every string.
              </p>
            </div>
          </div>

          <div className="route-grid">
            {[
              ["Route 1", "AI Translation With Automated Validation", "May suit prototypes, internal content, early testing, or lower-risk high-volume content with terminology and placeholder controls."],
              ["Route 2", "AI Translation With Professional Post-Editing", "Supports customer-facing content where efficiency matters and a qualified linguist must correct meaning, terminology, tone, or fluency."],
              ["Route 3", "Professional Translation With Linguistic Review", "Often appropriate for core interfaces, onboarding, purchase journeys, brand-sensitive language, and complex product terminology."],
              ["Route 4", "Specialist Translation and Independent Review", "Often appropriate for medical, financial, legal, compliance, safety-related, regulated, or high-consequence content."],
            ].map(([label, title, copy]) => (
              <div className="route-item" key={title}>
                <div className="route-kicker">{label}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>

          <div className="route-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">Content Type</th>
                  <th scope="col">Typical Risk</th>
                  <th scope="col">Possible Starting Workflow</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Internal prototype", "Low", "AI translation with automated checks"],
                  ["General support content", "Moderate", "AI translation with professional post-editing"],
                  ["Core customer interface", "Moderate to high", "Professional translation and review"],
                  ["Brand campaign or store creative", "High visibility", "Translation, transcreation, and market review"],
                  ["Regulated or safety-related content", "High consequence", "Specialist translation, independent review, and documented QA"],
                ].map(([type, risk, route]) => (
                  <tr key={type}>
                    <td data-label="Content Type"><strong>{type}</strong></td>
                    <td data-label="Typical Risk">{risk}</td>
                    <td data-label="Possible Starting Workflow">{route}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="callout callout-dark">
            <span className="callout-label">Current Workflow Trend</span>
            <p>
              AI assistance is increasingly integrated into development and localization workflows,
              but it does not independently resolve ambiguity, brand voice, regulated terminology,
              interface fit, or market-specific quality requirements. Source preparation, terminology,
              technical QA, and appropriate human validation remain essential.
            </p>
          </div>

          <EditorialLink href="https://www.stepes.com/ai-translation-services/" className="dark-editorial-link">
            Explore Stepes AI Translation Services
          </EditorialLink>
        </div>
      </section>

      <div className="shell article-layout">
        <TableOfContents
          activeSection={activeSection}
          onNavigate={handleSectionLink}
          ariaLabel="In this guide: scope and planning chapters"
        />

        <div className="article-main">
          <article>
            <section className="article-section" id="review">
              <h2>Why Context and Stakeholder Review Affect the Budget</h2>
              <p className="section-intro">
                Context improves translation quality and project efficiency. It also reduces the
                number of questions, in-app corrections, revision rounds, and retests.
              </p>

              <div className="two-column-list">
                <div className="list-panel">
                  <h3>Useful Context Inputs</h3>
                  <ul>
                    <li>Screenshots and Figma designs</li>
                    <li>Prototypes and screen recordings</li>
                    <li>Screen names and string IDs</li>
                    <li>Developer comments</li>
                    <li>Character limits</li>
                    <li>User-flow diagrams and test builds</li>
                  </ul>
                </div>
                <div className="list-panel">
                  <h3>Cost of Missing Context</h3>
                  <ul>
                    <li>More translator queries</li>
                    <li>Slower production</li>
                    <li>Incorrect grammatical choices</li>
                    <li>Terminology inconsistency</li>
                    <li>Additional in-context corrections</li>
                    <li>Greater reviewer and testing effort</li>
                  </ul>
                </div>
              </div>

              <h3>Common Review Models</h3>
              <div className="process-list">
                {[
                  ["Translator Self-Review", "The linguist checks the translation before delivery."],
                  ["Independent Linguistic Review", "A second qualified professional reviews accuracy, terminology, fluency, and consistency."],
                  ["In-Context Linguistic Review", "Localized strings are evaluated inside the app or a visual preview."],
                  ["Customer Subject-Matter Review", "A product, legal, clinical, compliance, or market expert reviews the translation."],
                  ["In-Market Approval", "A regional stakeholder confirms local terminology, tone, and suitability."],
                  ["Regulatory or Compliance Review", "A qualified reviewer validates the content according to the organization’s required process."],
                ].map(([title, copy]) => (
                  <div className="process-step" key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Reviewer Feedback Is Part of the Scope</h3>
              <p>
                Feedback management can include consolidating comments, resolving conflicting
                preferences, distinguishing errors from style choices, updating terminology, applying
                approved corrections to similar strings, maintaining review history, and retesting
                affected screens.
              </p>
              <div className="callout">
                <span className="callout-label">Governance Recommendation</span>
                <p>
                  Define who may request changes, who resolves disagreements, and who gives final
                  approval before localization begins. Unlimited or open-ended review cycles make cost
                  and delivery difficult to control.
                </p>
              </div>
            </section>

            <section className="article-section" id="testing">
              <h2>What Does Multilingual App Testing Cost?</h2>
              <p className="section-intro">
                Testing cost depends on the number of languages, platforms, builds, devices, user
                journeys, and correction cycles included in the scope.
              </p>

              <div className="testing-formula">
                <strong>Languages × Platforms × Builds × Coverage × Validation Rounds</strong>
                <span>
                  These factors do not always need to be multiplied literally. Risk-based sampling can
                  control effort while maintaining meaningful coverage.
                </span>
              </div>

              <div className="testing-grid">
                {[
                  ["Linguistic QA", "Accuracy, fluency, terminology, context, completeness, untranslated content, consistency, and character limits."],
                  ["Visual and Cosmetic QA", "Truncation, overlap, line breaks, expansion, fonts, character rendering, alignment, responsive behavior, and orientation."],
                  ["Locale Validation", "Dates, times, numbers, currency, measurements, names, addresses, sorting, input formats, and phone numbers."],
                  ["Functional Localization Testing", "Navigation, forms, validation, authentication, search, notifications, purchases, deep links, and language switching."],
                  ["Right-to-Left Testing", "Mirroring, navigation direction, mixed-direction text, punctuation, icon direction, fields, swipes, and embedded LTR content."],
                  ["Accessibility-Language Review", "Labels, hints, screen-reader content, descriptions, captions, forms, errors, and language identification."],
                  ["Device and OS Coverage", "Representative devices, screen sizes, operating-system versions, orientation, font scaling, and platform-specific behavior."],
                  ["Regression and Retesting", "Verification after corrections, new-build review, targeted regression, or a broader full regression cycle."],
                ].map(([title, copy]) => (
                  <div className="testing-item" key={title}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>

              <h3>Representative vs. Full-Matrix Testing</h3>
              <div className="wide-module">
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Representative Coverage</th>
                        <th scope="col">Full-Matrix Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Priority languages", "Every target language"],
                        ["Selected devices", "Every supported device category"],
                        ["Critical user journeys", "Complete functional coverage"],
                        ["One principal build", "Multiple builds and OS versions"],
                        ["Focused regression", "Full regression cycle"],
                        ["Risk-based sampling", "Exhaustive combinations"],
                      ].map(([representative, full]) => (
                        <tr key={representative}>
                          <td data-label="Representative Coverage">{representative}</td>
                          <td data-label="Full-Matrix Coverage">{full}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/">
                Use the Mobile App Localization Testing Checklist
              </EditorialLink>
            </section>

            <section className="article-section" id="store-localization">
              <h2>Budgeting for App Store and Google Play Localization</h2>
              <p className="section-intro">
                The customer experience begins before installation. Store listings, screenshots,
                previews, promotional copy, and in-app purchase descriptions may require localization
                in addition to the product interface.
              </p>

              <div className="two-column-list">
                <div className="list-panel">
                  <h3>Content That May Need Localization</h3>
                  <ul>
                    <li>App name and subtitle</li>
                    <li>Short and full descriptions</li>
                    <li>Keywords and promotional text</li>
                    <li>Release notes</li>
                    <li>Subscriptions and in-app products</li>
                    <li>Screenshots and preview videos</li>
                  </ul>
                </div>
                <div className="list-panel">
                  <h3>Store-Localization Cost Drivers</h3>
                  <ul>
                    <li>Direct translation vs. transcreation</li>
                    <li>Local keyword research</li>
                    <li>Character limits</li>
                    <li>Number of screenshot sets</li>
                    <li>Text embedded in images</li>
                    <li>Custom listings and update frequency</li>
                  </ul>
                </div>
              </div>

              <h3>Why Store Content Should Be Scoped Separately</h3>
              <p>
                Store localization can involve different files, owners, creative requirements,
                approval processes, publishing schedules, and performance goals. A team can update a
                store listing without changing the interface, or release a localized build before
                completing market-specific promotional assets.
              </p>
              <p className="inline-source">
                Official guidance:
                {" "}
                <a href="https://developer.apple.com/help/app-store-connect/reference/app-information/app-store-localizations/" target="_blank" rel="noreferrer">
                  Apple App Store localizations
                </a>
                {" "}and
                {" "}
                <a href="https://support.google.com/googleplay/android-developer/answer/9844778" target="_blank" rel="noreferrer">
                  Google Play store listing localization
                </a>
                .
              </p>
            </section>

            <section className="article-section" id="continuous-localization">
              <h2>Why the First Localized Release Usually Costs More</h2>
              <p className="section-intro">
                The first release establishes the linguistic, technical, and operational foundations
                that make future updates more efficient.
              </p>

              <div className="timeline">
                <div className="timeline-row">
                  <div className="timeline-label">Initial Launch</div>
                  <div className="timeline-content">
                    <p>The first multilingual release may include:</p>
                    <ul>
                      <li>Content and file inventory</li>
                      <li>Internationalization assessment</li>
                      <li>Resource cleanup</li>
                      <li>Terminology and style guidance</li>
                      <li>Translation Memory creation</li>
                      <li>Workflow configuration</li>
                      <li>Baseline translation</li>
                      <li>Platform engineering</li>
                      <li>Initial testing</li>
                      <li>Reviewer onboarding</li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-row">
                  <div className="timeline-label">Ongoing Releases</div>
                  <div className="timeline-content">
                    <p>Later releases can focus on:</p>
                    <ul>
                      <li>New and changed strings</li>
                      <li>Translation Memory reuse</li>
                      <li>Incremental translation</li>
                      <li>Focused review</li>
                      <li>Updated store content</li>
                      <li>Build validation</li>
                      <li>Targeted regression</li>
                      <li>Language-asset maintenance</li>
                      <li>Release coordination</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3>Three Common Operating Models</h3>
              <div className="definition-grid">
                <div className="definition-item">
                  <h3>Project-Based Localization</h3>
                  <p>Best suited to stable apps with infrequent releases and clearly bounded scope.</p>
                </div>
                <div className="definition-item">
                  <h3>Scheduled Batch Localization</h3>
                  <p>Best suited to milestone, monthly, or planned release cycles.</p>
                </div>
                <div className="definition-item">
                  <h3>Continuous Localization</h3>
                  <p>
                    Best suited to agile teams that frequently move new and changed content through
                    translation, review, QA, and delivery.
                  </p>
                </div>
                <div className="definition-item">
                  <h3>Total Cost of Ownership</h3>
                  <p>
                    Include setup, per-release production, reviewer time, engineering maintenance,
                    testing, issue resolution, reporting, and long-term language assets.
                  </p>
                </div>
              </div>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/">
                Plan Continuous Localization for Mobile Apps
              </EditorialLink>
            </section>

            <section className="article-section" id="budget-scenarios">
              <h2>Illustrative App Localization Budget Models</h2>
              <p className="section-intro">
                These scenarios show how product scope changes the budget structure. They are
                educational examples, not binding quotations.
              </p>

              <div className="scenario-list">
                {budgetScenarios.map((scenario) => (
                  <div className="scenario" key={scenario.title}>
                    <div className="scenario-number">{scenario.number}</div>
                    <div>
                      <h3>{scenario.title}</h3>
                      <div className="scenario-detail">
                        <div>
                          <strong>Illustrative Scope</strong>
                          <p>{scenario.scope}</p>
                        </div>
                        <div>
                          <strong>Main Budget Components</strong>
                          <p>{scenario.components}</p>
                        </div>
                      </div>
                      <div className="scenario-insight">
                        <strong>Key cost insight:</strong> {scenario.insight}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section" id="reduce-cost">
              <h2>How to Reduce App Localization Cost Without Sacrificing Quality</h2>
              <p className="section-intro">
                The most effective cost controls remove waste, prevent rework, and direct the
                strongest quality measures to the content that needs them most.
              </p>

              <div className="phased-guidance">
                <div className="phase">
                  <span className="phase-label">Before Translation</span>
                  <h3>Prepare the Product and Source</h3>
                  <ul>
                    <li>Internationalize the app</li>
                    <li>Remove obsolete content</li>
                    <li>Preserve stable string IDs</li>
                    <li>Protect variables and placeholders</li>
                    <li>Define exact locales</li>
                    <li>Provide screenshots and context</li>
                    <li>Establish terminology</li>
                    <li>Freeze the planned source version</li>
                  </ul>
                </div>
                <div className="phase">
                  <span className="phase-label">During Localization</span>
                  <h3>Control Decisions and Review</h3>
                  <ul>
                    <li>Reuse approved Translation Memory</li>
                    <li>Validate cross-platform matches</li>
                    <li>Resolve queries promptly</li>
                    <li>Assign one final review authority</li>
                    <li>Match quality to content risk</li>
                    <li>Test representative builds early</li>
                  </ul>
                </div>
                <div className="phase">
                  <span className="phase-label">Across Releases</span>
                  <h3>Reuse and Improve</h3>
                  <ul>
                    <li>Translate deltas, not complete files</li>
                    <li>Maintain terminology and style guidance</li>
                    <li>Automate repeatable handoffs</li>
                    <li>Track recurring defects</li>
                    <li>Use focused regression testing</li>
                    <li>Review cost and quality data</li>
                  </ul>
                </div>
              </div>

              <div className="callout">
                <span className="callout-label">Cost Control vs. Cost Cutting</span>
                <p>
                  Cost control removes waste, prevents rework, and matches effort to risk. Removing
                  essential context, review, or testing can simply move the expense into development,
                  customer support, compliance remediation, or post-release corrections.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>

      <section className="checklist-shell" id="quote-checklist">
        <div className="shell">
          <div className="checklist-header">
            <div>
              <span className="eyebrow">Quote Preparation Checklist</span>
              <h2>What Do You Need for an Accurate App Localization Quote?</h2>
            </div>
            <div>
              <p className="section-intro">
                Final resources provide the most precise estimate, but representative files,
                screenshots, approximate volumes, and a draft language plan are enough to begin.
              </p>
            </div>
          </div>

          <div className="checklist-grid">
            {checklistGroups.map((group) => (
              <div className="checklist-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="checklist-action">
            <p>
              When final files are not ready, Stepes can begin with representative resources,
              screenshots, preliminary volumes, and your initial language and testing plan.
            </p>
            <a
              className="button button-primary"
              href="https://app.stepes.com/quote/"
            >
              Send Your App Resources for Review <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <div className="shell article-layout">
        <TableOfContents
          activeSection={activeSection}
          onNavigate={handleSectionLink}
          ariaLabel="In this guide: final planning chapters"
        />

        <div className="article-main">
          <article>
            <section className="article-section">
              <h2>From Source Resources to a Clear Localization Estimate</h2>
              <p className="section-intro">
                A structured quotation process should make inclusions, assumptions, options, and
                responsibilities easy to understand.
              </p>
              <div className="process-list">
                {[
                  ["Review the Product Scope", "Confirm platforms, frameworks, languages, content types, release goals, security needs, and required services."],
                  ["Analyze the Source Resources", "Measure words, strings, repetition, formats, variables, placeholders, plurals, obsolete content, and technical issues."],
                  ["Evaluate Existing Language Leverage", "Review Translation Memory, approved translations, terminology, cross-platform overlap, and earlier releases."],
                  ["Define the Quality and Testing Model", "Align translation, review, engineering, and testing with the app’s visibility, audience, risk, and release requirements."],
                  ["Prepare an Itemized Proposal", "Identify languages, deliverables, pricing components, schedule, assumptions, responsibilities, optional services, exclusions, and scope-change conditions."],
                ].map(([title, copy]) => (
                  <div className="process-step" key={title}>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section" id="budgeting-mistakes">
              <h2>Common App Localization Budgeting Mistakes</h2>
              <p className="section-intro">
                The most expensive surprises usually come from incomplete scope, unclear ownership,
                or technical issues that appear after translation has started.
              </p>
              <div className="mistakes-list">
                {mistakes.map(([mistake, better]) => (
                  <div className="mistake-row" key={mistake}>
                    <strong>{mistake}</strong>
                    <p><strong>Better approach:</strong> {better}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section" id="faq">
              <h2>App Localization Cost FAQ</h2>
              <p className="section-intro">
                These answers address the most common questions teams ask when planning a multilingual
                app release or comparing localization proposals.
              </p>

              <div className="faq-panel">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  const panelId = `faq-panel-${index}`;
                  const buttonId = `faq-button-${index}`;
                  return (
                    <div className="faq-item" key={item.q}>
                      <button
                        className="faq-button"
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{item.q}</span>
                        <ChevronIcon open={isOpen} />
                      </button>
                      <div
                        className="faq-answer"
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        hidden={!isOpen}
                      >
                        <p>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="article-section" id="sources">
              <h2>Sources and Technical References</h2>
              <p className="section-intro">
                This guide draws on current official platform, internationalization, and interchange
                guidance, together with Stepes’ app-localization and cost-planning resources.
              </p>
              <div className="sources-list">
                {sourceItems.map((source) => (
                  <a
                    className="source-row"
                    href={source.href}
                    key={source.title}
                    {...externalLinkProps(source.href)}
                  >
                    <span className="source-title">{source.title}</span>
                    <span className="source-publisher">{source.publisher}</span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </section>

            <section className="article-section">
              <h2>Build an App Localization Budget That Supports the Complete Release</h2>
              <p className="section-intro">
                A useful budget should account for the work required to release a multilingual app
                accurately, efficiently, and with a level of quality assurance appropriate to the
                product.
              </p>
              <ol>
                <li>Measure the content and identify what can be reused.</li>
                <li>Define the engineering, review, and testing scope.</li>
                <li>Plan for both the initial launch and future releases.</li>
              </ol>
              <p>
                The objective is not simply to find the lowest possible translation estimate. It is
                to understand what customers are paying for, how the pieces fit together, which
                decisions materially change cost, and how a structured localization program reduces
                repeated effort over time.
              </p>
            </section>
          </article>
        </div>
      </div>

      <section className="related-section section-soft">
        <div className="shell">
          <div className="related-header">
            <div>
              <span className="eyebrow">Related App Localization Resources</span>
              <h2>Continue Planning Your Multilingual Release</h2>
            </div>
            <p className="section-intro">
              Use these guides to prepare your app, understand platform requirements, define testing,
              and build a repeatable continuous-delivery workflow.
            </p>
          </div>

          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a
                className="related-item"
                href={resource.href}
                key={resource.title}
              >
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.copy}</p>
                </div>
                <span className="related-action">
                  Explore the guide <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-panel">
          <div className="final-cta-copy">
            <span className="eyebrow">Plan Your Multilingual Release</span>
            <h2>Get a Clear App Localization Scope and Quote</h2>
            <p>
              Share your source resources, target locales, platforms, release dates, existing
              translations, and testing expectations. Stepes can review final files or begin with
              representative resources and preliminary volumes.
            </p>
          </div>
          <div className="final-cta-actions">
            <a
              className="button button-primary"
              href="https://www.stepes.com/contact-us/"
            >
              Talk to an App Localization Expert <ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href="https://app.stepes.com/quote/"
            >
              Request an App Localization Quote <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AppLocalizationCostGuideWireframeV3;
