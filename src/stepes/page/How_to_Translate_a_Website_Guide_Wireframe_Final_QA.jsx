import React, { useEffect, useMemo, useState } from "react";

const CANONICAL = "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/";

const tocItems = [
  ["website-translation-localization-internationalization", "Website Translation, Localization, and Internationalization"],
  ["website-translation-lifecycle", "The 10 Stages of Website Translation"],
  ["define-markets", "1. Define Markets, Audiences, and Objectives"],
  ["assess-content-technology", "2. Assess Your Content and Technology"],
  ["plan-scope-governance", "3. Plan Scope, Priorities, and Governance"],
  ["select-workflow", "4. Select a Website Translation Workflow"],
  ["prepare-content", "5. Prepare Content and Linguistic Assets"],
  ["match-quality", "6. Match Translation Quality to Content Risk"],
  ["multilingual-seo", "7. Plan Multilingual SEO"],
  ["localize-experience", "8. Localize the Complete Digital Experience"],
  ["test-localized-website", "9. Test the Localized Website"],
  ["launch-maintain", "10. Launch Languages and Keep Them Current"],
  ["roles-responsibilities", "Who Owns Website Translation?"],
  ["common-mistakes", "Common Website Translation Mistakes"],
  ["launch-checklist", "Website Translation Launch Checklist"],
  ["frequently-asked-questions", "Frequently Asked Questions"],
  ["sources-references", "Sources and References"],
];

const tocGroups = [
  {
    title: "Start and Plan",
    items: tocItems.slice(0, 5),
  },
  {
    title: "Build, Launch, and Operate",
    items: tocItems.slice(5, 12),
  },
  {
    title: "Tools and Reference",
    items: tocItems.slice(12),
  },
];

const lifecycle = [
  { n: "01", title: "Define", q: "Why are we creating a multilingual website?", out: "Markets, audiences, objectives, and success measures" },
  { n: "02", title: "Assess", q: "What content, systems, and risks are involved?", out: "Content and technology inventory" },
  { n: "03", title: "Plan", q: "What should be translated, phased, or excluded?", out: "Scope, priorities, governance, and schedule" },
  { n: "04", title: "Connect", q: "How will content move through translation?", out: "CMS, API, proxy, file-based, or hybrid workflow" },
  { n: "05", title: "Prepare", q: "What must be standardized first?", out: "Translation-ready content and linguistic assets" },
  { n: "06", title: "Translate", q: "Which quality route fits each content type?", out: "Reviewed multilingual content" },
  { n: "07", title: "Optimize", q: "How will customers discover localized pages?", out: "Search-ready content and technical signals" },
  { n: "08", title: "Localize", q: "What else must change beyond the words?", out: "Market-ready interface, media, formats, and journeys" },
  { n: "09", title: "Test", q: "Does the complete localized experience work?", out: "Validated pages and resolved defects" },
  { n: "10", title: "Launch + Maintain", q: "How will languages go live and remain current?", out: "Controlled rollout and continuous localization" },
];

const workflowRows = [
  {
    criterion: "Best Suited For",
    values: ["Structured CMS publishing", "Custom, headless, or automated environments", "Rapid multilingual delivery or difficult integrations", "Controlled, periodic projects"],
  },
  {
    criterion: "Content Transfer",
    values: ["CMS integration or structured exchange", "Programmatic submission and return", "Managed localization layer", "Export and import"],
  },
  {
    criterion: "Engineering Involvement",
    values: ["Moderate", "Higher during integration", "Moderate setup", "Low to moderate"],
  },
  {
    criterion: "Automation Potential",
    values: ["High", "Very high", "High", "Low to moderate"],
  },
  {
    criterion: "Publishing Control",
    values: ["Inside the CMS", "Defined by the integration", "Proxy or coordinated delivery", "Internal web team"],
  },
  {
    criterion: "Continuous Updates",
    values: ["Strong when configured well", "Strong", "Strong", "More manual"],
  },
  {
    criterion: "Important Consideration",
    values: ["Connector and field coverage", "Engineering ownership and exception handling", "SEO, architecture, governance, and hosting", "Reintegration and version control"],
  },
];

const qualityRows = [
  {
    type: "Navigation, Buttons, and Forms",
    impact: "High usability impact",
    route: "AI-assisted or professional translation with full human review",
    validation: "Functional and in-context testing",
  },
  {
    type: "Product and Service Pages",
    impact: "High commercial impact",
    route: "Professional or AI-assisted translation with human review",
    validation: "Brand and terminology review",
  },
  {
    type: "Legal, Privacy, Safety, or Regulatory Content",
    impact: "High legal or compliance impact",
    route: "Qualified specialist translation",
    validation: "Formal subject-matter or legal approval",
  },
  {
    type: "Campaign and Brand Content",
    impact: "High reputational impact",
    route: "Professional translation or transcreation",
    validation: "Senior marketing and in-market review",
  },
  {
    type: "Help and Knowledge Content",
    impact: "Moderate operational impact",
    route: "AI translation with post-editing or defined review",
    validation: "Terminology checks, sampling, and user feedback",
  },
  {
    type: "Large Archives",
    impact: "Lower immediate impact",
    route: "Phased or controlled AI workflow",
    validation: "Risk-based sampling",
  },
  {
    type: "User-Generated Content",
    impact: "Variable and potentially high risk",
    route: "Automated or moderated workflow based on use case",
    validation: "Policy controls and escalation",
  },
];

const roles = [
  ["Executive Sponsor", "Business priority, budget, and escalation support"],
  ["Localization Lead", "Language strategy, workflow governance, quality model, and partner coordination"],
  ["Marketing or Content Team", "Source quality, content scope, brand voice, and campaign decisions"],
  ["SEO Team", "Local keyword research, metadata, URLs, internal linking, indexing, and measurement"],
  ["Web Operations", "CMS workflow, templates, publishing, staging, and release coordination"],
  ["Engineering", "APIs, integrations, locale behavior, automated testing, and technical troubleshooting"],
  ["Regional Reviewers", "Market terminology, product language, audience expectations, and local feedback"],
  ["Legal or Compliance", "Legal, privacy, safety, regulated, and market-specific approval"],
  ["Translation Partner", "Translation, review, terminology, translation memory, project management, and localization QA"],
  ["Analytics Owner", "Tracking, dashboards, conversion measurement, and post-launch insights"],
];

const mistakes = [
  ["Starting With Languages Instead of Objectives", "Scope becomes disconnected from business need.", "Connect every locale to an audience, journey, owner, and outcome."],
  ["Translating Only Visible Page Copy", "Metadata, forms, interfaces, and downloads remain incomplete.", "Inventory the entire digital experience."],
  ["Using One Quality Model for Everything", "High-risk content may be under-reviewed while low-risk content is overprocessed.", "Route content by risk, purpose, and visibility."],
  ["Selecting Technology After Translation Starts", "Content cannot be extracted, reviewed, or reintegrated efficiently.", "Design the workflow before production."],
  ["Translating Keywords Literally", "Local search intent may differ.", "Conduct target-market keyword and intent research."],
  ["Leaving Regional Review Undefined", "Feedback becomes late, inconsistent, or contradictory.", "Assign reviewers, criteria, deadlines, and decision authority."],
  ["Reviewing Text Outside the Website Only", "Layout and functionality problems remain hidden.", "Perform in-context linguistic, visual, responsive, and functional testing."],
  ["Launching Without an Update Owner", "Localized pages fall behind the source.", "Establish continuous localization before release."],
  ["Embedding Text in Images", "Updates require manual graphic recreation.", "Separate translatable text where practical."],
  ["Automatically Redirecting Every Visitor", "Users and crawlers may be unable to reach another language version.", "Provide accessible locale URLs and a visible language selector."],
  ["Canonicalizing Every Language to the Source Page", "Search engines may treat localized pages incorrectly.", "Use the appropriate corresponding-language canonical."],
  ["Treating Launch as Project Completion", "New content creates immediate multilingual drift.", "Monitor changes, synchronization, and quality continuously."],
];

const checklistGroups = [
  {
    title: "Strategy",
    items: [
      "Target markets and locales are approved.",
      "Primary audiences and customer journeys are defined.",
      "Business objectives and success measures are documented.",
      "Content scope, exclusions, and launch phases are clear.",
    ],
  },
  {
    title: "Content",
    items: [
      "The website inventory includes all relevant systems.",
      "Priority pages and components are identified.",
      "Source content is approved and translation-ready.",
      "Forms, media, downloads, metadata, and dynamic content are included.",
      "Obsolete and duplicated pages have been addressed.",
    ],
  },
  {
    title: "Technology",
    items: [
      "The CMS, API, proxy, file-based, or hybrid workflow is confirmed.",
      "Content extraction and reintegration have been tested.",
      "Locale URL architecture is approved.",
      "Staging and production responsibilities are assigned.",
      "Variables, code, tags, and nontranslatable content are protected.",
      "Error handling and workflow monitoring are defined.",
    ],
  },
  {
    title: "Translation Quality",
    items: [
      "Terminology and style guidance are approved.",
      "Translation memory is prepared where available.",
      "Quality routes are assigned by content risk.",
      "Specialist and regional review requirements are defined.",
      "Untranslated and incomplete strings have been checked.",
      "Final approval authority is confirmed.",
    ],
  },
  {
    title: "Multilingual SEO",
    items: [
      "Local keyword intent has been researched.",
      "Titles, descriptions, headings, and search-facing content are localized.",
      "Every locale has a stable, crawlable URL.",
      "Canonical tags are correct.",
      "Hreflang relationships are reciprocal and complete.",
      "Localized pages are included in internal links and sitemaps.",
      "No important page is accidentally blocked or marked noindex.",
      "A visible language selector is available.",
    ],
  },
  {
    title: "Experience and Testing",
    items: [
      "Linguistic testing is complete.",
      "Desktop, tablet, and mobile layouts are validated.",
      "Forms, navigation, search, downloads, and conversions work.",
      "Images, videos, captions, and documents are localized where required.",
      "Accessibility requirements are reviewed.",
      "Page language is declared correctly.",
      "Right-to-left behavior is validated where applicable.",
      "Launch-blocking defects are resolved.",
    ],
  },
  {
    title: "Operations",
    items: [
      "Launch owners and escalation contacts are confirmed.",
      "Analytics and monitoring are active.",
      "New and changed content has a defined translation route.",
      "Release synchronization rules are documented.",
      "Post-launch review is scheduled.",
      "Multilingual content freshness will be measured.",
      "Terminology and translation memory maintenance is assigned.",
    ],
  },
];

const faqs = [
  {
    q: "What is the difference between website translation and website localization?",
    a: "Website translation converts content into another language. Website localization adapts the broader digital experience for a specific locale or market, including currencies, measurements, imagery, forms, layouts, product availability, local search intent, legal information, and customer journeys.",
    link: ["Website Translation vs. Localization", "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/"],
  },
  {
    q: "Do we need to translate every page?",
    a: "Not necessarily. Begin with the pages, components, and journeys customers need to understand your organization, evaluate the offering, convert, comply with required terms, and receive support. Long-tail or archived content can be prioritized according to traffic, market relevance, risk, update frequency, and available resources. Do not create a localized journey that unexpectedly sends the visitor into essential untranslated content.",
  },
  {
    q: "How long does it take to translate a website?",
    a: "The schedule depends on content volume, number of languages, source readiness, website architecture, workflow integration, translation and review model, terminology development, regional approvals, multimedia, multilingual SEO, testing, and launch dependencies. A focused priority-page launch may move faster than a complete multilingual rollout, while integration and content preparation can take longer than translation itself for complex websites.",
  },
  {
    q: "How much does website translation cost?",
    a: "Website translation investment may include linguistic production, engineering, content extraction, translation memory and terminology, SEO, multimedia, testing, project management, hosting or proxy delivery, and ongoing updates. The total also depends on language count, content volume, repetition, quality route, system complexity, review requirements, and launch schedule.",
    link: ["Translation Cost Guide", "https://www.stepes.com/resources/translation-cost-guide/"],
  },
  {
    q: "Can AI translate an entire website?",
    a: "AI can support website translation at scale, but it should not be applied uniformly without controls. The appropriate workflow depends on content risk, source quality, terminology, audience, brand sensitivity, legal or regulatory requirements, human review, in-context testing, and ongoing monitoring. High-risk content generally requires qualified human expertise, while large volumes of structured informational content may be suited to AI translation with post-editing or controlled review.",
  },
  {
    q: "What is the best workflow for translating a website?",
    a: "There is no universal best model. A CMS-connected workflow may suit teams that publish from a supported CMS. An API may suit headless, custom, and continuous-delivery environments. A proxy may suit organizations seeking faster deployment or reduced source-system changes. A file-based workflow may suit stable sites and controlled periodic projects. The decision should reflect content sources, update frequency, publishing ownership, engineering capacity, security, quality, and governance.",
    link: ["Website Translation Workflows", "https://www.stepes.com/resources/localization-guides/website-translation-workflows/"],
  },
  {
    q: "How should multilingual SEO be handled?",
    a: "Plan SEO for each target language and market. The process should include local keyword research, locale-specific URLs, localized titles and descriptions, headings aligned with search intent, descriptive internal links, same-language canonicals, appropriate hreflang, localized sitemaps, crawlability, indexability, and local performance measurement.",
    link: ["Multilingual SEO Guide", "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/"],
  },
  {
    q: "Should every language have a separate URL?",
    a: "For search-visible public websites, separate URLs are generally the preferred approach. The appropriate structure may use subdirectories, subdomains, or country domains. The choice should reflect market targeting, technical ownership, hosting, analytics, authority consolidation, deployment, governance, and future scalability.",
  },
  {
    q: "How do we review translated website content?",
    a: "Use several review layers according to the content: linguistic review, terminology review, specialist review, brand review, regional review, automated QA, in-context review, responsive testing, functional testing, SEO validation, and accessibility review. Do not ask every stakeholder to review everything. Assign focused responsibilities and one final approval authority.",
  },
  {
    q: "How do we keep translated pages updated?",
    a: "Create a continuous localization process that detects new and revised source content, identifies affected languages, applies translation memory and terminology, routes content by risk, assigns required review, publishes according to release rules, monitors stale or missing pages, and records approved language for future reuse.",
    link: ["Continuous Website Localization", "https://www.stepes.com/resources/localization-guides/continuous-website-localization/"],
  },
  {
    q: "Can we launch one language or market first?",
    a: "Yes. A market pilot can validate customer demand, content scope, workflow, review process, search implementation, localized journeys, and ongoing maintenance. The pilot should still provide a coherent customer experience, including essential navigation, conversion, legal, and support content.",
  },
  {
    q: "Who should own the multilingual website?",
    a: "One person or team should be accountable for the program, commonly localization, global marketing, content operations, or digital experience. That owner should coordinate marketing, SEO, web operations, engineering, regional teams, legal, analytics, and the translation partner.",
  },
];

const relatedGroups = [
  {
    title: "Define Scope and Investment",
    items: [
      ["Website Translation vs. Localization", "Determine how much language conversion and market adaptation your website requires.", "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/"],
      ["Translation Cost Guide", "Understand the content, language, workflow, quality, SEO, testing, and update factors that shape translation investment.", "https://www.stepes.com/resources/translation-cost-guide/"],
    ],
  },
  {
    title: "Select the Workflow and Quality Model",
    items: [
      ["Website Translation Workflows", "Compare CMS-connected, API, proxy, and file-based translation processes.", "https://www.stepes.com/resources/localization-guides/website-translation-workflows/"],
      ["AI Website Translation With Human Review", "Learn how to route content through AI translation, post-editing, professional translation, specialist validation, and in-market review.", "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/"],
    ],
  },
  {
    title: "Optimize, Test, and Operate",
    items: [
      ["Multilingual SEO Guide", "Plan local keywords, metadata, URLs, internal links, language annotations, and international search measurement.", "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/"],
      ["Website Localization Testing Checklist", "Validate linguistic, visual, responsive, functional, SEO, accessibility, and market quality.", "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/"],
      ["Continuous Website Localization", "Keep multilingual pages synchronized as source content changes.", "https://www.stepes.com/resources/localization-guides/continuous-website-localization/"],
    ],
  },
];

const sources = [
  ["Website Translation Services", "Stepes", "https://www.stepes.com/website-translation-services/"],
  ["Translation API", "Stepes", "https://www.stepes.com/translation-api/"],
  ["Translation Memory", "Stepes", "https://www.stepes.com/translation-memory/"],
  ["Terminology Management", "Stepes", "https://www.stepes.com/terminology-management/"],
  ["Managing Multi-Regional and Multilingual Sites", "Google Search Central", "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites"],
  ["Tell Google About Localized Versions of Your Page", "Google Search Central", "https://developers.google.com/search/docs/specialty/international/localized-versions"],
  ["Canonical URLs", "Google Search Central", "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"],
  ["Internationalization Quick Tips", "W3C", "https://www.w3.org/International/quicktips/"],
  ["Understanding Language of Page", "W3C Web Accessibility Initiative", "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html"],
  ["Structural Markup and Right-to-Left Text", "W3C Internationalization", "https://www.w3.org/International/questions/qa-html-dir.en.html"],
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={open ? "chevron open" : "chevron"}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="checkIcon" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="m5 10 3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function StepesLogoMark() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M5 8.2C8.4 3.9 14.3 2.4 19.5 4.5c2 .8 3.7 2.1 5 3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24.8 21.6c-3.4 4.3-9.3 5.8-14.5 3.7-2-.8-3.7-2.1-5-3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.1 15h13.8M15 8.1V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="heroArt" aria-label="Website content moving through translation, review, and multilingual launch">
      <svg viewBox="0 0 560 430" role="img" aria-labelledby="heroArtTitle heroArtDesc">
        <title id="heroArtTitle">Website translation lifecycle illustration</title>
        <desc id="heroArtDesc">A source website passes through structured translation, human review, and quality checks to create three localized website versions.</desc>
        <defs>
          <linearGradient id="softFill" x1="0" x2="1">
            <stop offset="0" stopColor="#FDF2F7" />
            <stop offset="1" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="46" y="42" width="210" height="236" rx="22" fill="url(#softFill)" stroke="#D9D7DC" strokeWidth="1.4" />
        <rect x="46" y="42" width="210" height="38" rx="22" fill="#FFFFFF" />
        <circle cx="67" cy="61" r="4" fill="#C11D63" />
        <circle cx="81" cy="61" r="4" fill="#D7D2D7" />
        <circle cx="95" cy="61" r="4" fill="#D7D2D7" />
        <rect x="69" y="102" width="116" height="12" rx="6" fill="#2C2830" opacity=".92" />
        <rect x="69" y="126" width="160" height="8" rx="4" fill="#B7B2B8" />
        <rect x="69" y="143" width="144" height="8" rx="4" fill="#D2CDD3" />
        <rect x="69" y="169" width="72" height="54" rx="12" fill="#F2E8ED" />
        <rect x="151" y="169" width="78" height="54" rx="12" fill="#F7F5F7" stroke="#E1DDE1" />
        <rect x="69" y="239" width="118" height="10" rx="5" fill="#C11D63" opacity=".9" />

        <path d="M270 160h48" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
        <path d="m308 151 10 9-10 9" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="324" y="93" width="190" height="134" rx="24" fill="#17131A" />
        <circle cx="361" cy="131" r="16" fill="#C11D63" />
        <path d="m354 131 5 5 9-10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="388" y="118" width="94" height="10" rx="5" fill="#FFFFFF" opacity=".95" />
        <rect x="388" y="137" width="72" height="7" rx="3.5" fill="#FFFFFF" opacity=".42" />
        <rect x="348" y="174" width="137" height="8" rx="4" fill="#F2A7C6" />
        <rect x="348" y="190" width="103" height="7" rx="3.5" fill="#FFFFFF" opacity=".35" />

        <path d="M418 238v31" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
        <path d="m409 259 9 10 9-10" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${135 + i * 136} ${286 + (i % 2) * 12})`}>
            <rect width="118" height="88" rx="18" fill="#FFFFFF" stroke="#D9D7DC" strokeWidth="1.3" />
            <rect x="15" y="16" width="33" height="9" rx="4.5" fill={i === 1 ? "#C11D63" : "#2C2830"} />
            <rect x="15" y="36" width="86" height="6" rx="3" fill="#C8C3C8" />
            <rect x="15" y="49" width="70" height="6" rx="3" fill="#DFDADF" />
            <rect x="15" y="66" width="43" height="8" rx="4" fill="#F2E8ED" />
          </g>
        ))}
        <path d="M258 329h11M394 341h11" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ExternalLink({ href, children, className = "textLink" }) {
  const external = !href.startsWith("https://www.stepes.com/");
  return (
    <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function SectionIntro({ children }) {
  return <p className="sectionIntro">{children}</p>;
}

function SourceNote({ children }) {
  return <p className="sourceNote">{children}</p>;
}

function EditorialLink({ href, children }) {
  return <ExternalLink href={href} className="editorialLink">{children}</ExternalLink>;
}

function AnchorLink({ id, children, className = "" }) {
  const href = `${CANONICAL}#${id}`;
  const handleClick = (event) => {
    const target = document.getElementById(id);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };
  return <a href={href} onClick={handleClick} className={className}>{children}</a>;
}

function GuideSection({ id, step, eyebrow, title, intro, children, wide = false, className = "" }) {
  return (
    <section id={id} className={`guideSection ${wide ? "wideSection" : ""} ${className}`.trim()}>
      <div className={wide ? "shell" : "readingColumn"}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <div className="sectionHeadingRow">
          {step && <div className="stepMarker" aria-label={`Step ${step}`}>Step {String(step).padStart(2, "0")}</div>}
          <div>
            <h2>{title}</h2>
            {intro && <SectionIntro>{intro}</SectionIntro>}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function WorkflowComparison() {
  const options = ["CMS-Connected", "Translation API", "Translation Proxy", "File-Based"];
  return (
    <div className="wideModule workflowModule">
      <div className="tableWrap desktopOnly" role="region" aria-label="Website translation workflow comparison">
        <table>
          <thead>
            <tr>
              <th scope="col">Criterion</th>
              {options.map((option) => <th key={option} scope="col">{option}</th>)}
            </tr>
          </thead>
          <tbody>
            {workflowRows.map((row) => (
              <tr key={row.criterion}>
                <th scope="row">{row.criterion}</th>
                {row.values.map((value, i) => <td key={`${row.criterion}-${i}`}>{value}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mobileOnly workflowCards">
        {options.map((option, optionIndex) => (
          <article className="comparisonCard" key={option}>
            <h3>{option}</h3>
            <dl>
              {workflowRows.map((row) => (
                <div key={row.criterion}>
                  <dt>{row.criterion}</dt>
                  <dd>{row.values[optionIndex]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

function QualityMatrix() {
  return (
    <div className="wideModule">
      <div className="tableWrap desktopOnly" role="region" aria-label="Website content quality routing matrix">
        <table>
          <thead>
            <tr>
              <th scope="col">Content Type</th>
              <th scope="col">Typical Impact</th>
              <th scope="col">Recommended Starting Route</th>
              <th scope="col">Additional Validation</th>
            </tr>
          </thead>
          <tbody>
            {qualityRows.map((row) => (
              <tr key={row.type}>
                <th scope="row">{row.type}</th>
                <td>{row.impact}</td>
                <td>{row.route}</td>
                <td>{row.validation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mobileOnly qualityCards">
        {qualityRows.map((row) => (
          <article className="comparisonCard" key={row.type}>
            <h3>{row.type}</h3>
            <dl>
              <div><dt>Typical Impact</dt><dd>{row.impact}</dd></div>
              <div><dt>Recommended Starting Route</dt><dd>{row.route}</dd></div>
              <div><dt>Additional Validation</dt><dd>{row.validation}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function HowToTranslateAWebsiteGuideWireframe() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState(tocItems[0][0]);

  const sectionIds = useMemo(() => tocItems.map(([id]) => id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;
    const nodes = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -68% 0px", threshold: [0, 0.1, 0.4] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionIds]);



  return (
    <main className="stepesGuide">
      <style>{`
        :root {
          --accent: #C11D63;
          --accent-dark: #9F1D55;
          --accent-deep: #7A1542;
          --blush: #FDF2F7;
          --light-accent: #F2A7C6;
          --ink: #231F26;
          --muted: #625D65;
          --soft: #F7F6F7;
          --line: #E3E0E3;
          --line-dark: rgba(255,255,255,.18);
          --dark: #17131A;
          --white: #FFFFFF;
          --shell: 1280px;
          --reading: 760px;
          --radius-lg: 30px;
          --radius-md: 22px;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepesGuide {
          color: var(--ink);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.68;
          overflow-x: hidden;
        }
        .stepesGuide a { color: inherit; }
        .stepesGuide a, .stepesGuide p, .stepesGuide li, .stepesGuide td, .stepesGuide th, .stepesGuide dd { overflow-wrap: anywhere; }
        .shell { width: min(var(--shell), calc(100% - 112px)); margin: 0 auto; }
        .readingColumn { width: min(var(--reading), calc(100% - 112px)); margin: 0 auto; }
        .wideModule { width: min(1120px, calc(100vw - 112px)); margin: 42px 50% 6px; transform: translateX(-50%); }
        .eyebrow {
          color: var(--accent);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin: 0 0 18px;
        }
        .eyebrowDark { color: var(--light-accent); }
        h1, h2, h3 { margin: 0; font-weight: 600; line-height: 1.14; letter-spacing: -.025em; }
        h1 { font-size: 48px; max-width: 720px; }
        h2 { font-size: 36px; }
        h3 { font-size: 24px; }
        p { margin: 0 0 22px; font-size: 18px; }
        ul, ol { margin: 0 0 26px; padding-left: 24px; }
        li { font-size: 18px; margin: 0 0 10px; }
        strong { font-weight: 600; }
        .sectionIntro { font-size: 20px; line-height: 1.56; color: #3C3740; margin: 20px 0 32px; max-width: 820px; }
        .sourceNote { font-size: 16px; color: var(--muted); border-left: 2px solid var(--accent); padding-left: 16px; margin: 26px 0 0; }
        .sourceNote a { color: var(--accent); font-weight: 600; text-decoration: none; }
        .hero {
          padding: 96px 0 80px;
          background:
            radial-gradient(circle at 82% 18%, rgba(193,29,99,.075), transparent 32%),
            linear-gradient(180deg, #fff 0%, #fff 82%, #FCFAFB 100%);
          border-bottom: 1px solid var(--line);
        }
        .heroGrid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(340px, .78fr); gap: 72px; align-items: center; }
        .hero h1 { max-width: 650px; }
        .heroDeck { font-size: 20px; line-height: 1.58; max-width: 680px; color: #454047; margin: 26px 0 32px; }
        .heroActions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 28px; }
        .button {
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .stepesGuide a.buttonPrimary,
        .stepesGuide a.buttonPrimary:visited,
        .stepesGuide a.buttonPrimary:hover,
        .stepesGuide a.buttonPrimary:active,
        .stepesGuide a.buttonPrimary:focus-visible { color: #fff !important; background: var(--accent); }
        .stepesGuide a.buttonPrimary:hover { background: var(--accent-dark); }
        .stepesGuide a.buttonPrimary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .buttonSecondary { color: var(--ink); background: #fff; border: 1px solid #CFCACF; }
        .buttonSecondary:hover { border-color: var(--accent); color: var(--accent); }
        .heroMeta { display: flex; gap: 10px 0; flex-wrap: wrap; align-items: center; color: var(--muted); font-size: 14px; }
        .heroMeta span { display: inline-flex; align-items: center; padding: 0 18px; border-left: 1px solid var(--line); }
        .heroMeta span:first-child { padding-left: 0; border-left: 0; }
        .heroArt { width: 100%; max-width: 520px; margin-left: auto; }
        .heroArt svg { width: 100%; height: auto; display: block; }
        .summaryBand { padding: 80px 0; background: var(--blush); border-bottom: 1px solid #F2E4EA; }
        .summaryGrid { display: grid; grid-template-columns: 320px 1fr; gap: 76px; align-items: start; }
        .summaryLead h2 { margin-bottom: 20px; }
        .summaryLead p { color: #504A52; }
        .takeaways { border-top: 1px solid #E7CED9; }
        .takeaway { display: grid; grid-template-columns: 30px minmax(0,1fr); gap: 16px; padding: 24px 0; border-bottom: 1px solid #E7CED9; }
        .takeawayMark { padding-top: 2px; }
        .takeawayMark .checkIcon { margin-top: 0; background: #fff; border: 1px solid #E7CED9; }
        .takeaway h3 { font-size: 20px; margin-bottom: 8px; letter-spacing: -.015em; }
        .takeaway p { font-size: 16px; margin: 0; color: #514B53; }
        .guideNavigation { padding: 68px 0 72px; border-bottom: 1px solid var(--line); background: #fff; }
        .desktopTocPanel { display: grid; grid-template-columns: 270px minmax(0,1fr); gap: 64px; align-items: start; }
        .tocIntroduction h2 { font-size: 30px; margin-bottom: 14px; }
        .tocIntroduction p { font-size: 16px; color: var(--muted); margin: 0; }
        .desktopTocGrid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 0 34px; }
        .tocGroup { border-top: 1px solid var(--line); }
        .tocGroupTitle {
          color: var(--accent);
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
          padding: 15px 0 10px;
        }
        .desktopTocGrid a {
          display: grid;
          grid-template-columns: 8px minmax(0,1fr);
          gap: 11px;
          align-items: start;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          color: #514B53;
          font-size: 16px;
          line-height: 1.45;
          text-decoration: none;
          transition: color .18s ease;
        }
        .desktopTocGrid a::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-deep);
          opacity: .68;
          margin-top: .57em;
          transition: opacity .18s ease, background .18s ease, transform .18s ease;
        }
        .desktopTocGrid a:hover,
        .desktopTocGrid a.active { color: var(--accent); }
        .desktopTocGrid a:hover::before,
        .desktopTocGrid a.active::before { background: var(--accent); opacity: 1; transform: scale(1.08); }
        .desktopTocGrid a:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; border-radius: 4px; }
        .mobileToc { display: none; }
        .articleArea { padding: 88px 0 0; }
        .articleIntro { padding-bottom: 88px; scroll-margin-top: 96px; }
        .articleIntro h2 { margin-bottom: 24px; }
        .definitionGrid { width: min(1040px, calc(100vw - 112px)); margin: 38px 50% 30px; transform: translateX(-50%); display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 0; border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: #FAF9FA; }
        .definitionItem { padding: 28px 30px; border-left: 1px solid var(--line); }
        .definitionItem:first-child { border-left: 0; }
        .definitionItem h3 { font-size: 21px; margin-bottom: 12px; }
        .definitionItem p { font-size: 16px; color: #555057; margin: 0; }
        .recommendationCallout { background: var(--blush); border-radius: var(--radius-md); padding: 28px 30px; margin: 34px 0; }
        .recommendationCallout .calloutLabel { color: var(--accent); font-size: 11px; text-transform: uppercase; letter-spacing: .15em; font-weight: 600; margin-bottom: 10px; }
        .recommendationCallout p { margin: 0; font-size: 20px; line-height: 1.5; font-weight: 500; }
        .editorialLink, .textLink { display: inline-flex; align-items: center; gap: 7px; color: var(--accent) !important; font-size: 16px; font-weight: 600; text-decoration: none; }
        .editorialLink:hover span, .textLink:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .editorialLink:focus-visible, .textLink:focus-visible, .resourceItem a:focus-visible, .sourceTitleLink:focus-visible, .upwardLinks a:focus-visible {
          outline: 3px solid rgba(193,29,99,.2);
          outline-offset: 4px;
          border-radius: 4px;
        }
        .subsection ul:not(.questionList) > li::marker { color: var(--accent-deep); }
        .guideSection { padding: 88px 0; scroll-margin-top: 96px; }
        .guideSection:nth-of-type(odd) { background: #fff; }
        .guideSection.softSection { background: #FAF9FA; }
        .sectionHeadingRow { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 22px; align-items: start; }
        .sectionHeadingRow > div:only-child { grid-column: 1 / -1; }
        .stepMarker {
          color: var(--accent);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: .12em;
          text-transform: uppercase;
          padding-top: 10px;
          min-width: 58px;
          white-space: nowrap;
        }
        .subsection { margin: 38px 0 0; }
        .subsection h3 { margin-bottom: 14px; }
        .subsection p, .subsection li { font-size: 18px; }
        .outputPanel { border: 1px solid var(--line); border-left: 3px solid var(--accent); border-radius: 18px; padding: 28px; margin: 34px 0 0; background: #fff; }
        .outputPanelWide, .wideInlineModule { width: min(1080px, calc(100vw - 112px)); margin-left: 50%; margin-right: 0; transform: translateX(-50%); }
        .tierColumns { grid-template-columns: repeat(3, minmax(0,1fr)); }
        .outputPanel h3 { font-size: 20px; margin-bottom: 18px; }
        .outputPanel p, .outputPanel li { font-size: 16px; }
        .simpleTable { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 16px; }
        .simpleTable th, .simpleTable td { text-align: left; padding: 15px 16px; border-bottom: 1px solid var(--line); vertical-align: top; }
        .simpleTable th { font-weight: 600; background: #FAF9FA; }
        .simpleTable th:first-child { width: 32%; }
        .frameworkBand { background: var(--dark); color: #fff; padding: 96px 0; scroll-margin-top: 96px; }
        .frameworkBand h2 { color: #fff; max-width: 760px; }
        .frameworkBand .sectionIntro { color: rgba(255,255,255,.75); }
        .lifecycleGrid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 1px; background: var(--line-dark); border: 1px solid var(--line-dark); border-radius: 24px; overflow: hidden; margin-top: 44px; }
        .lifecycleStage { background: #1D1820; padding: 28px 24px 26px; min-height: 220px; }
        .stageNumber { color: var(--light-accent); font-size: 12px; letter-spacing: .1em; font-weight: 600; margin-bottom: 28px; }
        .lifecycleStage h3 { color: #fff; font-size: 20px; margin-bottom: 12px; }
        .lifecycleStage p { color: rgba(255,255,255,.72); font-size: 16px; line-height: 1.55; margin-bottom: 18px; }
        .stageOutcome { padding-top: 17px; border-top: 1px solid rgba(255,255,255,.12); color: #fff; font-size: 16px; line-height: 1.5; }
        .stageOutcome strong { color: var(--light-accent); display: block; font-size: 13px; line-height: 1.3; text-transform: uppercase; letter-spacing: .09em; margin-bottom: 7px; }
        .wideSection .sectionHeadingRow { max-width: 820px; margin-left: auto; margin-right: auto; }
        .wideSection > .shell > p, .wideSection > .shell > .subsection { max-width: var(--reading); margin-left: auto; margin-right: auto; }
        .wideModule { margin-top: 46px; }
        .tableWrap { border: 1px solid var(--line); border-radius: 24px; overflow: hidden; background: #fff; }
        .tableWrap table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .tableWrap th, .tableWrap td { overflow-wrap: anywhere; }
        .tableWrap th, .tableWrap td { padding: 19px 18px; text-align: left; vertical-align: top; font-size: 16px; line-height: 1.55; border-bottom: 1px solid var(--line); border-right: 1px solid var(--line); }
        .tableWrap th:last-child, .tableWrap td:last-child { border-right: 0; }
        .tableWrap tr:last-child th, .tableWrap tr:last-child td { border-bottom: 0; }
        .tableWrap thead th { background: #F5F3F5; font-weight: 600; color: #302B32; }
        .tableWrap tbody th { font-weight: 600; width: 18%; background: #FCFBFC; color: #332E35; }
        .workflowModule .tableWrap th:first-child { width: 18%; }
        .inventoryTableWrap th:first-child { width: 19%; }
        .inventoryTableWrap th:nth-child(2) { width: 12%; }
        .inventoryTableWrap th:nth-child(3) { width: 16%; }
        .inventoryTableWrap th:nth-child(4) { width: 14%; }
        .inventoryTableWrap th:nth-child(5) { width: 13%; }
        .inventoryTableWrap th:nth-child(6) { width: 13%; }
        .inventoryTableWrap th:nth-child(7) { width: 13%; }
        .tableWrap td { color: #4D4850; }
        .mobileOnly { display: none; }
        .contentColumns { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 28px; margin-top: 34px; }
        .contentColumn { border-top: 1px solid var(--line); padding-top: 22px; }
        .contentColumn h3 { font-size: 21px; margin-bottom: 12px; }
        .contentColumn p, .contentColumn li { font-size: 16px; }
        .questionList { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 34px; margin: 34px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
        .questionList li { margin: 0; padding: 18px 0; border-bottom: 1px solid var(--line); font-size: 16px; display: grid; grid-template-columns: 18px 1fr; gap: 12px; }
        .questionList li::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); margin-top: 10px; }
        .rolesSection { background: #FAF9FA; }
        .roleList { max-width: 1040px; margin: 38px auto 0; border-top: 1px solid var(--line); }
        .roleRow { display: grid; grid-template-columns: 260px 1fr; gap: 38px; padding: 22px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .roleRow h3 { font-size: 18px; padding-top: 2px; }
        .roleRow p { font-size: 16px; margin: 0; color: #4F4952; }
        .governancePrinciples { max-width: 1040px; margin: 38px auto 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 30px; }
        .governancePrinciples div { display: grid; grid-template-columns: 24px 1fr; gap: 12px; font-size: 16px; }
        .governancePrinciples .checkIcon { margin-top: 4px; }
        .mistakesList { max-width: 1080px; margin: 40px auto 0; border-top: 1px solid var(--line); }
        .mistakeRow { display: grid; grid-template-columns: 1.05fr 1fr 1.25fr; gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .mistakeRow h3 { font-size: 18px; }
        .mistakeRow p { font-size: 16px; margin: 0; color: #514B53; }
        .betterApproach { border-left: 2px solid var(--accent); padding-left: 18px; }
        .betterApproach strong { display: block; color: var(--accent); font-size: 14px; line-height: 1.3; letter-spacing: .07em; text-transform: uppercase; margin-bottom: 7px; }
        .checklistSection { background: var(--blush); }
        .checklistIntro { max-width: 820px; margin: 0 auto 42px; }
        .checklistGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0; background: #fff; border: 1px solid #E8DCE2; border-radius: 24px; overflow: hidden; }
        .checkGroup { background: #fff; border: 0; border-right: 1px solid #E8DCE2; border-bottom: 1px solid #E8DCE2; border-radius: 0; padding: 30px 32px; }
        .checkGroup:nth-child(2n) { border-right: 0; }
        .checkGroup:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
        .checkGroup:last-child ul { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 34px; }
        .checkGroup h3 { font-size: 20px; margin-bottom: 20px; }
        .checkGroup ul { list-style: none; padding: 0; margin: 0; }
        .checkGroup li { display: grid; grid-template-columns: 24px 1fr; gap: 12px; font-size: 16px; margin: 0 0 14px; }
        .checkGroup li:last-child { margin-bottom: 0; }
        .checkIcon { width: 20px; height: 20px; border-radius: 50%; background: #F7E4EC; color: var(--accent); display: inline-flex; align-items: center; justify-content: center; margin-top: 2px; }
        .faqSection { background: #fff; }
        .faqPanel { margin-top: 40px; border-top: 1px solid var(--line); }
        .faqItem { border-bottom: 1px solid var(--line); }
        .faqButton { width: 100%; border: 0; background: transparent; padding: 24px 0; display: grid; grid-template-columns: 1fr auto; gap: 24px; text-align: left; color: var(--ink); cursor: pointer; font: inherit; }
        .faqButton span { font-size: 18px; font-weight: 600; line-height: 1.45; }
        .faqButton:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 4px; border-radius: 8px; }
        .chevron { transition: transform .2s ease; margin-top: 3px; }
        .chevron.open { transform: rotate(180deg); }
        .faqAnswer { padding: 0 48px 25px 0; }
        .faqAnswer p { font-size: 16px; color: #504A52; }
        .sourcesSection { background: #FAF9FA; }
        .sourceList { margin-top: 38px; border-top: 1px solid var(--line); }
        .sourceRow { display: grid; grid-template-columns: minmax(0,1fr) minmax(180px,.35fr); gap: 28px; align-items: center; padding: 19px 0; border-bottom: 1px solid var(--line); }
        .sourceTitleLink { display: inline-flex; align-items: center; gap: 8px; color: var(--accent) !important; font-size: 17px; line-height: 1.45; font-weight: 600; text-decoration: none; }
        .sourceTitleLink:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .sourceRow p { font-size: 16px; margin: 0; color: #5B555D; text-align: right; }
        .conclusionSection { padding-bottom: 74px; }
        .immediateActions { counter-reset: actions; list-style: none; padding: 0; margin: 32px 0; border-top: 1px solid var(--line); }
        .immediateActions li { counter-increment: actions; display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 18px 0; border-bottom: 1px solid var(--line); font-size: 17px; margin: 0; }
        .immediateActions li::before { content: counter(actions, decimal-leading-zero); color: var(--accent); font-size: 14px; font-weight: 600; padding-top: 3px; }
        .relatedSection { padding: 82px 0; background: #fff; border-top: 1px solid var(--line); }
        .relatedHeader { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 38px; }
        .relatedHeader p { max-width: 560px; margin: 0; color: var(--muted); font-size: 16px; }
        .relatedGrid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 28px; }
        .relatedGroup { border-top: 2px solid var(--accent); padding-top: 22px; }
        .relatedGroup > h3 { font-size: 19px; margin-bottom: 8px; }
        .resourceItem { padding: 18px 0; border-bottom: 1px solid var(--line); }
        .resourceItem:last-child { border-bottom: 0; }
        .resourceItem a { display: inline-flex; align-items: center; gap: 7px; color: var(--accent); font-weight: 600; text-decoration: none; font-size: 17px; line-height: 1.35; }
        .resourceItem a:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .resourceItem p { font-size: 16px; color: #555057; margin: 8px 0 0; }
        .upwardLinks { display: flex; flex-wrap: wrap; gap: 18px 24px; margin-top: 34px; padding-top: 26px; border-top: 1px solid var(--line); }
        .finalCta { padding: 88px 0 96px; background: var(--blush); border-top: 1px solid #F0E0E7; }
        .ctaPanel { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 56px; align-items: center; background: #fff; border: 1px solid #E8DDE2; border-radius: 30px; padding: 48px 52px; }
        .ctaPanel h2 { max-width: 760px; margin-bottom: 16px; }
        .ctaPanel > div:first-child > h2:first-child { margin-top: 0; }
        .ctaPanel p { max-width: 720px; color: #514B53; margin: 0; }
        .ctaActions { display: flex; gap: 12px; flex-direction: column; min-width: 250px; }
        .ctaActions .button { width: 100%; }
        .comparisonCard { border: 1px solid var(--line); border-radius: 20px; padding: 24px; background: #fff; }
        .comparisonCard h3 { font-size: 21px; margin-bottom: 18px; }
        .comparisonCard dl { margin: 0; }
        .comparisonCard dl > div { padding: 14px 0; border-top: 1px solid var(--line); }
        .comparisonCard dt { font-size: 16px; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: .07em; margin-bottom: 5px; }
        .comparisonCard dd { margin: 0; font-size: 16px; color: #4F4952; }
        @media (max-width: 1180px) {
          .articleIntro { max-width: 760px; margin: 0 auto; }
        }
        @media (max-width: 1100px) {
          .shell, .readingColumn { width: calc(100% - 80px); }
          .wideModule { width: calc(100vw - 80px); }
          .heroGrid { grid-template-columns: 1fr .8fr; gap: 38px; }
          .summaryGrid { grid-template-columns: 280px 1fr; gap: 46px; }
          .desktopTocPanel { grid-template-columns: 240px minmax(0,1fr); gap: 42px; }
          .desktopTocGrid { gap: 0 24px; }
          .lifecycleGrid { grid-template-columns: repeat(3, minmax(0,1fr)); }
          .lifecycleStage:last-child { grid-column: auto; }
          .relatedGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .ctaPanel { grid-template-columns: 1fr; }
          .ctaActions { flex-direction: row; min-width: 0; }
          .ctaActions .button { width: auto; }
        }
        @media (max-width: 900px) {
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 72px; }
          .heroGrid { grid-template-columns: 1fr; gap: 42px; }
          .heroArt { margin: 0 auto; max-width: 470px; }
          .summaryGrid { grid-template-columns: 1fr; gap: 30px; }
          .articleArea { padding-top: 64px; }
          .desktopTocPanel { display: none; }
          .guideNavigation { padding: 42px 0; }
          .mobileToc { display: block; width: 100%; margin: 0; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: #fff; }
          .mobileTocButton { width: 100%; min-height: 52px; border: 0; background: #fff; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; color: var(--ink); font: inherit; font-size: 16px; font-weight: 600; cursor: pointer; }
          .mobileTocButton:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: -3px; }
          .mobileTocList { padding: 0 18px 14px; border-top: 1px solid var(--line); }
          .mobileTocList > span { display: block; }
          .mobileTocList a { display: block; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 16px; line-height: 1.4; text-decoration: none; color: #5B555D; }
          .mobileTocList > span:last-child a { border-bottom: 0; }
          .mobileTocList a.active { color: var(--accent); font-weight: 600; }
          .articleIntro { padding-bottom: 72px; }
          .definitionGrid { width: calc(100vw - 48px); grid-template-columns: 1fr; }
          .definitionItem { border-left: 0; border-top: 1px solid var(--line); }
          .definitionItem:first-child { border-top: 0; }
          .outputPanelWide, .wideInlineModule { width: calc(100vw - 48px); }
          .tierColumns { grid-template-columns: 1fr; }
          .inventoryTableWrap { border-radius: 18px; }
          .inventoryTableWrap table, .inventoryTableWrap tbody, .inventoryTableWrap tr, .inventoryTableWrap th, .inventoryTableWrap td { display: block; width: 100%; }
          .inventoryTableWrap thead { display: none; }
          .inventoryTableWrap tr { padding: 20px 22px; border-bottom: 1px solid var(--line); }
          .inventoryTableWrap tr:last-child { border-bottom: 0; }
          .inventoryTableWrap tbody th { padding: 0 0 13px; border: 0; background: transparent; font-size: 18px; }
          .inventoryTableWrap td { display: grid; grid-template-columns: 150px minmax(0,1fr); gap: 16px; padding: 7px 0; border: 0; }
          .inventoryTableWrap td::before { content: attr(data-label); color: var(--muted); font-size: 16px; font-weight: 600; }
          .checkGroup:last-child ul { grid-template-columns: 1fr; gap: 0; }
          .guideSection { padding: 76px 0; }
          .frameworkBand { padding: 78px 0; }
          .lifecycleGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .contentColumns, .questionList, .governancePrinciples, .checklistGrid { grid-template-columns: 1fr; }
          .roleRow { grid-template-columns: 210px 1fr; gap: 24px; }
          .mistakeRow { grid-template-columns: 1fr; gap: 14px; }
          .betterApproach { margin-top: 4px; }
          .desktopOnly { display: none !important; }
          .mobileOnly { display: grid; }
          .workflowCards, .qualityCards { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
          .sourceRow { grid-template-columns: minmax(0,1fr) auto; gap: 16px 24px; }
          .sourceRow p { text-align: right; }
          .relatedGrid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .shell, .readingColumn { width: calc(100% - 40px); }
          .wideModule, .definitionGrid, .outputPanelWide, .wideInlineModule { width: calc(100vw - 40px); }
          .hero { padding: 64px 0 54px; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          p, li { font-size: 17px; }
          .sectionIntro { font-size: 18px; }
          .heroDeck { font-size: 18px; }
          .heroActions { flex-direction: column; }
          .heroActions .button { width: 100%; }
          .heroMeta { gap: 8px 0; flex-direction: column; align-items: flex-start; }
          .heroMeta span { padding: 0; border-left: 0; }
          .heroGrid { gap: 34px; }
          .heroArt { margin-top: 0; max-width: 350px; }
          .summaryBand { padding: 64px 0; }
          .takeaway { grid-template-columns: 28px 1fr; gap: 12px; }
          .takeaway p { font-size: 16px; }
          .mobileToc { width: 100%; }
          .articleArea { padding-top: 52px; }
          .articleIntro { padding-bottom: 62px; }
          .recommendationCallout { padding: 24px; }
          .recommendationCallout p { font-size: 18px; }
          .guideSection { padding: 66px 0; }
          .sectionHeadingRow { grid-template-columns: 1fr; gap: 7px; }
          .stepMarker { padding-top: 0; min-width: 0; margin-bottom: 2px; }
          .subsection p, .subsection li { font-size: 17px; }
          .outputPanel { padding: 22px; }
          .simpleTable thead { display: none; }
          .simpleTable, .simpleTable tbody, .simpleTable tr, .simpleTable th, .simpleTable td { display: block; width: 100%; }
          .simpleTable tr { border-bottom: 1px solid var(--line); padding: 14px 0; }
          .simpleTable th, .simpleTable td { border: 0; padding: 6px 0; background: transparent; }
          .simpleTable th { color: var(--accent); font-size: 16px; text-transform: uppercase; letter-spacing: .04em; overflow-wrap: anywhere; }
          .simpleTable th:first-child { width: 100%; }
          .frameworkBand { padding: 68px 0; }
          .lifecycleGrid { grid-template-columns: 1fr; }
          .lifecycleStage, .lifecycleStage:last-child { grid-column: auto; min-height: 0; }
          .workflowCards, .qualityCards { grid-template-columns: 1fr; }
          .questionList { gap: 0; }
          .roleRow { grid-template-columns: 1fr; gap: 8px; }
          .mistakeRow { padding: 22px 0; }
          .checklistGrid { grid-template-columns: 1fr; }
          .checkGroup, .checkGroup:nth-child(2n), .checkGroup:last-child { grid-column: auto; border-right: 0; border-bottom: 1px solid #E8DCE2; padding: 26px 22px; }
          .checkGroup:last-child { border-bottom: 0; }
          .checkGroup:last-child ul { display: block; }
          .faqButton { padding: 21px 0; }
          .faqButton span { font-size: 17px; }
          .faqAnswer { padding-right: 0; }
          .inventoryTableWrap td { grid-template-columns: 1fr; gap: 2px; padding: 9px 0; }
          .inventoryTableWrap td::before { margin-bottom: 1px; }
          .sourceRow { grid-template-columns: 1fr; gap: 6px; }
          .sourceRow p { text-align: left; }
          .relatedHeader { display: block; }
          .relatedHeader p { margin-top: 16px; }
          .ctaPanel { padding: 34px 24px; }
          .ctaActions { flex-direction: column; }
          .ctaActions .button { width: 100%; }
          .finalCta { padding: 68px 0 76px; }
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .button, .chevron, .desktopTocGrid a, .desktopTocGrid a::before { transition: none; }
        }
      `}</style>

      <header className="hero">
        <div className="shell heroGrid">
          <div>
            <Eyebrow>Localization Guide</Eyebrow>
            <h1>How to Translate a Website</h1>
            <p className="heroDeck">
              Translate your website with a practical ten-step framework covering strategy, content, technology, language quality, multilingual SEO, testing, launch, and continuous updates.
            </p>
            <div className="heroActions">
              <AnchorLink id="website-translation-lifecycle" className="button buttonPrimary">
                Explore the 10-Step Framework <ArrowIcon />
              </AnchorLink>
              <AnchorLink id="launch-checklist" className="button buttonSecondary">
                Go to the Launch Checklist <ArrowIcon />
              </AnchorLink>
            </div>
            <div className="heroMeta" aria-label="Guide information">
              <span>10-step planning framework</span>
              <span>Launch checklist included</span>
              <span>Last reviewed July 2026</span>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </header>

      <section className="summaryBand" aria-labelledby="summary-title">
        <div className="shell summaryGrid">
          <div className="summaryLead">
            <Eyebrow>Key Takeaways</Eyebrow>
            <h2 id="summary-title">Website Translation at a Glance</h2>
            <p>A successful multilingual website aligns business strategy, content, systems, language quality, search, experience design, testing, and ongoing operations.</p>
          </div>
          <div className="takeaways">
            {[
              ["Start With Business Objectives", "Define the markets, audiences, journeys, and measurable outcomes each localized website must support."],
              ["Inventory the Complete Experience", "Include templates, navigation, metadata, forms, interface strings, images, media, documents, dynamic content, and third-party systems."],
              ["Choose the Workflow Before Translation", "CMS-connected, API, proxy, and file-based workflows have different implications for publishing, automation, engineering, and updates."],
              ["Match Quality to Content Risk", "Route legal, campaign, product, support, and archive content through the appropriate combination of AI, professional translation, specialist review, and testing."],
              ["Build Multilingual SEO Into the Project", "Research local search language, create stable locale URLs, localize search-facing content, and implement language signals before launch."],
              ["Test the Website in Context", "Validate linguistic quality, layouts, responsive behavior, navigation, forms, accessibility, and conversion journeys."],
              ["Plan for the Next Source Update", "Define how new and revised content will be detected, translated, reviewed, published, and monitored."],
            ].map(([title, text]) => (
              <div className="takeaway" key={title}>
                <div className="takeawayMark" aria-hidden="true"><CheckIcon /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guideNavigation" aria-labelledby="guide-navigation-title">
        <div className="shell">
          <div className="desktopTocPanel">
            <div className="tocIntroduction">
              <h2 id="guide-navigation-title">In This Guide</h2>
              <p>Move directly to a planning stage, practical tool, or implementation question.</p>
            </div>
            <nav className="desktopTocGrid" aria-label="Guide contents">
              {tocGroups.map((group) => (
                <div className="tocGroup" key={group.title}>
                  <div className="tocGroupTitle">{group.title}</div>
                  {group.items.map(([id, label]) => (
                    <AnchorLink
                      key={id}
                      id={id}
                      className={activeSection === id ? "active" : ""}
                    >
                      <span>{label}</span>
                    </AnchorLink>
                  ))}
                </div>
              ))}
            </nav>
          </div>
          <div className="mobileToc">
            <button className="mobileTocButton" type="button" aria-expanded={tocOpen} aria-controls="mobile-guide-toc" onClick={() => setTocOpen((value) => !value)}>
              <span>In This Guide</span><ChevronIcon open={tocOpen} />
            </button>
            {tocOpen && (
              <nav className="mobileTocList" id="mobile-guide-toc" aria-label="Guide contents">
                {tocItems.map(([id, label]) => (
                  <span key={id} onClick={() => setTocOpen(false)}><AnchorLink id={id} className={activeSection === id ? "active" : ""}>{label}</AnchorLink></span>
                ))}
              </nav>
            )}
          </div>
        </div>
      </section>

      <div className="articleArea">
        <article className="articleIntro readingColumn" id="website-translation-localization-internationalization">
            <h2>Website Translation, Localization, and Internationalization</h2>
            <SectionIntro>
              These disciplines are related, but they solve different parts of the multilingual website challenge. Most customer-facing global websites need all three.
            </SectionIntro>
            <div className="definitionGrid">
              <div className="definitionItem">
                <h3>Website Translation</h3>
                <p>Converts written content from a source language into one or more target languages while preserving meaning, tone, and purpose.</p>
              </div>
              <div className="definitionItem">
                <h3>Website Localization</h3>
                <p>Adapts the broader digital experience for a locale, audience, or market, including formats, media, forms, layouts, legal content, and journeys.</p>
              </div>
              <div className="definitionItem">
                <h3>Internationalization</h3>
                <p>Designs and develops the website so it can support different languages, scripts, regions, and cultural conventions efficiently.</p>
              </div>
            </div>
            <div className="recommendationCallout">
              <div className="calloutLabel">Core Distinction</div>
              <p>Internationalization prepares the website. Translation changes the language. Localization adapts the experience.</p>
            </div>
            <p>
              Translation scope can include page copy, navigation, buttons, metadata, forms, error messages, help content, downloads, captions, transcripts, and subtitles. Localization may also address currencies, measurements, dates, images, address formats, layouts, right-to-left behavior, product availability, local requirements, and market-specific journeys.
            </p>
            <p>
              Internationalization helps prevent technical barriers by supporting Unicode, separating text from code, externalizing interface strings, avoiding hard-coded formats, and designing components for expansion and different writing directions.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/">Compare Website Translation and Localization</EditorialLink>
        </article>
      </div>

      <section id="website-translation-lifecycle" className="frameworkBand">
        <div className="shell">
          <Eyebrow dark>End-to-End Process</Eyebrow>
          <h2>The 10 Stages of Website Translation</h2>
          <SectionIntro>
            Each stage produces a clear output for the next. The process may be iterative, but deferring strategy or technical decisions usually creates problems later in translation, search, testing, publishing, or maintenance.
          </SectionIntro>
          <div className="lifecycleGrid">
            {lifecycle.map((stage) => (
              <article className="lifecycleStage" key={stage.n}>
                <div className="stageNumber">{stage.n}</div>
                <h3>{stage.title}</h3>
                <p>{stage.q}</p>
                <div className="stageOutcome"><strong>Output</strong>{stage.out}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <GuideSection
        id="define-markets"
        step={1}
        title="Define Markets, Audiences, and Business Objectives"
        intro="The first decision is not simply which languages to translate. It is which customers the multilingual website should serve and what those customers should be able to accomplish."
      >
        <div className="subsection">
          <h3>Define the Business Objective</h3>
          <p>A multilingual website may be intended to enter a new market, generate qualified demand, support existing customers, provide product or safety information, enable ecommerce, serve distributors, improve adoption, or meet contractual and regulatory obligations.</p>
          <p>Different objectives lead to different content priorities. A demand-generation site may emphasize solutions, case studies, and forms. A support site may prioritize help content, account interfaces, troubleshooting, and notifications.</p>
        </div>
        <div className="subsection">
          <h3>Define the Audience</h3>
          <p>For each proposed locale, document the country or region, language variant, buyer or user role, priority journey, desired conversion, product availability, regional content needs, and responsible market stakeholder.</p>
          <p>Language and country should not be treated as interchangeable. Spanish for Spain, Mexico, and the United States may require different terminology, product information, disclosures, or customer journeys.</p>
        </div>
        <div className="subsection">
          <h3>Prioritize Markets With Evidence</h3>
          <ul>
            <li>Existing website traffic and international inquiries</li>
            <li>Active customers, distributors, and sales pipeline</li>
            <li>Product availability and support readiness</li>
            <li>Regulatory feasibility and local stakeholder availability</li>
            <li>Commercial opportunity and projected content effort</li>
          </ul>
          <p>A large speaker population does not automatically make a language the best first priority. A smaller market with confirmed demand and operational support may create greater immediate value.</p>
        </div>
        <div className="subsection">
          <h3>Define Success Measures</h3>
          <p>Measures may include qualified organic traffic, localized-page engagement, lead or purchase completion, regional lead quality, support deflection, content freshness, translation turnaround, synchronized-page coverage, and unresolved localization defects.</p>
        </div>
        <div className="outputPanel">
          <h3>Stage Output: Market and Audience Brief</h3>
          <table className="simpleTable">
            <thead><tr><th>Field</th><th>Illustrative Entry</th></tr></thead>
            <tbody>
              <tr><th scope="row">Market</th><td>France</td></tr>
              <tr><th scope="row">Locale</th><td>French for France</td></tr>
              <tr><th scope="row">Primary Audience</th><td>Enterprise procurement teams</td></tr>
              <tr><th scope="row">Business Objective</th><td>Generate qualified consultation requests</td></tr>
              <tr><th scope="row">Priority Journey</th><td>Homepage → solution page → contact form</td></tr>
              <tr><th scope="row">Initial Scope</th><td>Core corporate and service pages</td></tr>
              <tr><th scope="row">Market Owner</th><td>Regional marketing lead</td></tr>
              <tr><th scope="row">Success Measure</th><td>Qualified form submissions</td></tr>
            </tbody>
          </table>
        </div>
      </GuideSection>

      <GuideSection
        id="assess-content-technology"
        step={2}
        title="Assess Your Website Content and Technical Environment"
        intro="A complete assessment shows what needs translation, where content is stored, how it is published, how frequently it changes, and what could create risk."
        className="softSection"
      >
        <div className="subsection">
          <h3>Build a Complete Content Inventory</h3>
          <div className="contentColumns">
            <div className="contentColumn">
              <ul>
                <li>Homepage, landing pages, products, and services</li>
                <li>Navigation, headers, footers, and reusable components</li>
                <li>Campaigns, resources, product catalogs, and portals</li>
                <li>Interface strings, search, filters, forms, and validation</li>
              </ul>
            </div>
            <div className="contentColumn">
              <ul>
                <li>Transactional emails, legal notices, and privacy content</li>
                <li>Image text, video, captions, transcripts, and downloads</li>
                <li>Metadata, structured fields, and dynamic content</li>
                <li>User-generated, authenticated, and personalized content</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="subsection">
          <h3>Identify Every Content Source</h3>
          <p>Website content may originate from a CMS, headless repository, product information system, digital asset system, ecommerce platform, marketing automation, support platform, learning system, source-code repository, database, third-party widget, or regional microsite.</p>
          <p>A workflow that captures CMS pages may still miss product attributes, confirmation emails, support content, or application strings stored elsewhere.</p>
        </div>
        <div className="subsection">
          <h3>Document the Technical Environment</h3>
          <p>Record the CMS and frontend technology, hosting model, localization features, content schemas, URL architecture, APIs, templates, staging environments, release cadence, access requirements, analytics, third-party dependencies, and language-switching behavior.</p>
        </div>
        <div className="subsection">
          <h3>Classify Risk and Complexity</h3>
          <p>Flag content that is legally sensitive, regulated, safety-related, technically complex, highly visible, conversion-critical, frequently updated, difficult to extract, embedded inside graphics, or dependent on an external system.</p>
        </div>
        <div className="outputPanel outputPanelWide inventoryOutput">
          <h3>Stage Output: Website Translation Inventory</h3>
          <div className="tableWrap inventoryTableWrap" role="region" aria-label="Example website translation inventory">
            <table>
              <thead><tr><th>Content Area</th><th>Source System</th><th>Format</th><th>Update Frequency</th><th>Business Risk</th><th>Owner</th><th>Priority</th></tr></thead>
              <tbody>
                <tr><th scope="row">Core service pages</th><td data-label="Source System">CMS</td><td data-label="Format">Structured content</td><td data-label="Update Frequency">Monthly</td><td data-label="Business Risk">High</td><td data-label="Owner">Marketing</td><td data-label="Priority">Phase 1</td></tr>
                <tr><th scope="row">Product catalog</th><td data-label="Source System">PIM</td><td data-label="Format">JSON/XML</td><td data-label="Update Frequency">Daily</td><td data-label="Business Risk">High</td><td data-label="Owner">Product</td><td data-label="Priority">Phase 1</td></tr>
                <tr><th scope="row">Resource archive</th><td data-label="Source System">CMS</td><td data-label="Format">HTML</td><td data-label="Update Frequency">Low</td><td data-label="Business Risk">Moderate</td><td data-label="Owner">Content</td><td data-label="Priority">Phase 2</td></tr>
                <tr><th scope="row">Privacy notice</th><td data-label="Source System">CMS/Legal</td><td data-label="Format">HTML</td><td data-label="Update Frequency">Periodic</td><td data-label="Business Risk">High</td><td data-label="Owner">Legal</td><td data-label="Priority">Phase 1</td></tr>
                <tr><th scope="row">Training videos</th><td data-label="Source System">DAM</td><td data-label="Format">Video/captions</td><td data-label="Update Frequency">Quarterly</td><td data-label="Business Risk">Moderate</td><td data-label="Owner">Training</td><td data-label="Priority">Phase 2</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <SourceNote>A reliable inventory improves cost and schedule planning. Review the <a href="https://www.stepes.com/resources/translation-cost-guide/">Translation Cost Guide</a> for broader planning factors.</SourceNote>
      </GuideSection>

      <GuideSection
        id="plan-scope-governance"
        step={3}
        title="Plan Scope, Priorities, Budget, and Governance"
        intro="The right initial launch is not always a translation of the entire source website. Scope should reflect customer journeys, business value, risk, content readiness, and the ability to maintain each locale after launch."
      >
        <div className="subsection">
          <h3>Prioritize by Customer Journey</h3>
          <div className="contentColumns tierColumns wideInlineModule">
            <div className="contentColumn">
              <h3>Tier 1: Essential Journeys</h3>
              <p>Homepage, navigation, core product or service pages, conversion paths, forms, support entry points, privacy content, and required legal information.</p>
            </div>
            <div className="contentColumn">
              <h3>Tier 2: Decision Support</h3>
              <p>Detailed product pages, case studies, FAQs, selected resources, implementation content, knowledge articles, and onboarding materials.</p>
            </div>
            <div className="contentColumn">
              <h3>Tier 3: Long-Tail and Archives</h3>
              <p>Older articles, historical announcements, inactive campaigns, and low-traffic pages that may be translated later, consolidated, redirected, or excluded.</p>
            </div>
          </div>
          <p>Partial translation must not create broken journeys. A localized landing page that sends visitors into an untranslated form or support flow can undermine trust.</p>
        </div>
        <div className="subsection">
          <h3>Choose a Launch Model</h3>
          <ul>
            <li>Complete market launch</li>
            <li>Priority-page launch</li>
            <li>Language-by-language rollout</li>
            <li>Market pilot</li>
            <li>Phased content expansion</li>
            <li>Simultaneous launch with planned post-launch additions</li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Establish Governance</h3>
          <p>Define the program owner, executive sponsor, source-content owner, web and engineering owner, SEO owner, regional reviewers, terminology approver, legal or compliance reviewers, translation partner, and final launch authority.</p>
        </div>
        <div className="subsection">
          <h3>Plan the Full Investment</h3>
          <p>Budget categories may include translation and review, content preparation, engineering and integration, terminology, translation memory, multilingual SEO, media, localization testing, regional review, project management, proxy delivery, and ongoing updates.</p>
        </div>
        <div className="outputPanel">
          <h3>Stage Output: Website Translation Program Plan</h3>
          <p>Document the approved languages and locales, objectives, content scope, exclusions, launch phases, quality routes, workflow assumptions, stakeholders, review rules, timeline, dependencies, launch criteria, and post-launch operating model.</p>
        </div>
      </GuideSection>

      <GuideSection
        id="select-workflow"
        step={4}
        title="Select a Website Translation Workflow"
        intro="There is no universally best website translation workflow. The right model depends on content systems, publishing control, update frequency, developer resources, scale, security, and localization ownership."
        wide
        className="softSection"
      >
        <WorkflowComparison />
        <div className="subsection">
          <h3>CMS-Connected Translation</h3>
          <p>A CMS-connected workflow exchanges content between the content management system and the translation environment. It can preserve page relationships, structured fields, metadata, content status, reusable components, and publishing context.</p>
        </div>
        <div className="subsection">
          <h3>Translation API</h3>
          <p>An API submits and receives content programmatically. It can support headless CMS environments, custom applications, ecommerce systems, frequent updates, automated project creation, workflow-status retrieval, and continuous publishing.</p>
          <p>API flexibility requires engineering ownership, authentication, monitoring, error handling, content context, and clear approval rules.</p>
        </div>
        <div className="subsection">
          <h3>Website Translation Proxy</h3>
          <p>A proxy creates and serves localized website versions through a managed layer rather than requiring every translated page to be stored directly in the source CMS. It can help when direct integration is difficult, a faster rollout is needed, or the organization wants a centrally managed localization layer.</p>
          <p>Proxy decisions should address technical SEO, hosting, security, caching, fallback behavior, content detection, ownership, and publishing governance.</p>
        </div>
        <div className="subsection">
          <h3>File-Based Translation</h3>
          <p>Teams export content into formats such as HTML, XML, JSON, CSV, XLIFF, spreadsheets, or documents, then import translations after delivery. This can work well for small or stable sites and controlled release cycles, but it introduces manual handling, context, version, and synchronization risks.</p>
        </div>
        <ul className="questionList" aria-label="Workflow selection questions">
          {[
            "Where is the content stored?", "How often does it change?", "Who owns publishing?", "Must translations remain in the source CMS?", "How much engineering support is available?", "Are multiple content systems involved?", "How will context be provided?", "How will changed content be detected?", "How will failed submissions be handled?", "What security requirements apply?", "How will terminology and translation memory be used?", "How will approvals and releases be tracked?"
          ].map((q) => <li key={q}>{q}</li>)}
        </ul>
        <div className="upwardLinks">
          <EditorialLink href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">Compare Website Translation Workflows</EditorialLink>
          <EditorialLink href="https://www.stepes.com/translation-api/">Explore the Translation API</EditorialLink>
          <EditorialLink href="https://www.stepes.com/website-translation-proxy/">Explore Website Translation Proxy</EditorialLink>
        </div>
      </GuideSection>

      <GuideSection
        id="prepare-content"
        step={5}
        title="Prepare Content, Terminology, and Translation Assets"
        intro="Translation quality begins before the first sentence is translated. Ambiguous source copy, inconsistent terminology, missing context, and embedded technical elements create avoidable questions and corrections."
      >
        <div className="subsection">
          <h3>Improve the Source Content</h3>
          <ul>
            <li>Resolve unclear or incomplete sentences.</li>
            <li>Use consistent product and feature names.</li>
            <li>Remove obsolete pages and identify duplicated content.</li>
            <li>Define abbreviations and verify numerical information.</li>
            <li>Use descriptive headings and meaningful link text.</li>
            <li>Separate text from images where practical.</li>
            <li>Document variables and remove hard-coded locale formats.</li>
          </ul>
          <p>The goal is clarity and consistency, not the removal of brand voice.</p>
        </div>
        <div className="subsection">
          <h3>Create a Terminology Resource</h3>
          <p>A website glossary may include company and product names, feature names, industry terminology, abbreviations, approved translations, terms that must not be translated, regional preferences, prohibited alternatives, interface conventions, and regulated terminology.</p>
        </div>
        <div className="subsection">
          <h3>Prepare Translation Memory</h3>
          <p>Translation memory stores previously translated segments so approved language can be identified and reused. It can support consistency, reduce repeat effort, align updates, maintain approved product language, and identify changed versus unchanged content.</p>
          <p>Previously translated text still requires contextual review when its meaning, layout, audience, or use has changed.</p>
        </div>
        <div className="subsection">
          <h3>Provide Context</h3>
          <p>Give translators and reviewers page previews, screenshots, staging access, component names, character constraints, audience profiles, page objectives, product references, style guidance, SEO requirements, market instructions, and previous approved translations.</p>
        </div>
        <div className="subsection">
          <h3>Protect Technical Content</h3>
          <p>Define how the workflow should handle HTML tags, code, variables, placeholders, tracking parameters, product identifiers, URLs, field names, and nontranslatable strings.</p>
        </div>
        <div className="outputPanel">
          <h3>Stage Output: Translation-Ready Source Package</h3>
          <p>Include approved source content, a glossary or termbase, style guidance, translation memory, screenshots or previews, market instructions, technical instructions, and review and acceptance criteria.</p>
        </div>
        <div className="upwardLinks">
          <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
          <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
        </div>
      </GuideSection>

      <GuideSection
        id="match-quality"
        step={6}
        title="Match Translation Quality to Content Risk"
        intro="A large website should not automatically send every word through the same translation and review process. Choose the route according to business impact, risk, audience, volume, update frequency, brand value, and available linguistic resources."
        wide
        className="softSection"
      >
        <QualityMatrix />
        <div className="contentColumns">
          <div className="contentColumn">
            <h3>AI Translation</h3>
            <p>AI translation can help process large volumes and frequent updates when source content is clear and terminology is controlled. Define permitted and prohibited content, review levels, terminology controls, quality checks, low-confidence handling, sampling, monitoring, and escalation.</p>
          </div>
          <div className="contentColumn">
            <h3>AI Translation With Human Post-Editing</h3>
            <p>Human post-editors review AI output for accuracy, completeness, fluency, grammar, terminology, tone, formatting, and contextual suitability. The model may fit product catalogs, support content, knowledge bases, and frequently updated informational pages.</p>
          </div>
          <div className="contentColumn">
            <h3>Professional Human Translation</h3>
            <p>Professional translation is often appropriate for homepages, high-value product and service pages, executive content, conversion journeys, nuanced messaging, important launches, and complex source material.</p>
          </div>
          <div className="contentColumn">
            <h3>Specialist Translation</h3>
            <p>Use qualified subject-matter linguists for legal, privacy, medical, financial, technical, safety, and regulated product content.</p>
          </div>
          <div className="contentColumn">
            <h3>Transcreation</h3>
            <p>Transcreation recreates the intended impact of campaign headlines, slogans, brand statements, emotionally driven copy, and culturally dependent calls to action.</p>
          </div>
          <div className="contentColumn">
            <h3>In-Market Review</h3>
            <p>Regional reviewers can confirm local terminology, product naming, market expectations, and business suitability. Give them a defined role, review criteria, deadline, terminology authority, and a process for resolving conflicting feedback.</p>
          </div>
        </div>
        <div className="recommendationCallout">
          <div className="calloutLabel">Quality Principle</div>
          <p>Human review is not one undifferentiated step. Linguistic, specialist, brand, regional, and in-context review solve different quality problems.</p>
        </div>
        <div className="upwardLinks">
          <EditorialLink href="https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/">AI Website Translation With Human Review</EditorialLink>
          <EditorialLink href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">AI + Human Translation Workflows</EditorialLink>
          <EditorialLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</EditorialLink>
        </div>
      </GuideSection>

      <GuideSection
        id="multilingual-seo"
        step={7}
        title="Plan Multilingual SEO Before Launch"
        intro="Multilingual SEO connects translated content with the language and search intent customers use in each market. It should begin during planning, not after pages have already been translated and approved."
      >
        <div className="subsection">
          <h3>Research Search Intent Locally</h3>
          <p>A literal translation of a source keyword may be grammatically correct but less common, less specific, or associated with a different need in another market.</p>
          <p>Research natural category terminology, regional vocabulary, question formats, commercial versus informational intent, competitor language, abbreviations, local modifiers, and search-result patterns.</p>
        </div>
        <div className="subsection">
          <h3>Give Each Language Version a Stable URL</h3>
          <p>Use distinct, accessible URLs for language versions rather than changing one URL according to cookies or browser preferences.</p>
          <ul>
            <li>Subdirectories: <strong>example.com/fr/</strong></li>
            <li>Subdomains: <strong>fr.example.com</strong></li>
            <li>Country domains: <strong>example.fr</strong></li>
          </ul>
          <p>There is no universal best structure. Consider market targeting, technical ownership, hosting, analytics, authority consolidation, deployment, governance, and future scalability.</p>
        </div>
        <div className="subsection">
          <h3>Localize Search-Facing Elements</h3>
          <p>Review page titles, meta descriptions, headings, introductory copy, internal-link anchors, image alternative text, calls to action, URL slugs where appropriate, structured content, and social metadata.</p>
        </div>
        <div className="subsection">
          <h3>Implement Hreflang Correctly</h3>
          <p>Use hreflang to identify equivalent language or regional versions through HTML link elements, HTTP headers, or XML sitemaps. Each version should reference itself and corresponding alternatives, with reciprocal references between related pages.</p>
          <p>Hreflang identifies localized alternatives. It is not a substitute for useful localized content, crawlable URLs, or strong internal linking.</p>
        </div>
        <div className="subsection">
          <h3>Use Appropriate Canonicals</h3>
          <p>Each localized page should normally use a self-referencing canonical or point to the correct corresponding page in the same language. Do not canonicalize every translated page to the source-language page simply because the meaning is equivalent.</p>
        </div>
        <div className="subsection">
          <h3>Make Every Version Discoverable</h3>
          <p>Confirm that localized pages are crawlable, internally linked, included in appropriate sitemaps, not blocked, not accidentally marked noindex, accessible without forced redirection, and connected through a visible language selector.</p>
        </div>
        <div className="subsection">
          <h3>Measure by Locale</h3>
          <p>Track indexed localized URLs, search impressions and clicks, local query visibility, organic landing pages, engagement, conversions, crawl issues, missing metadata, and outdated pages.</p>
        </div>
        <SourceNote>For implementation details, consult the latest <a href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites" target="_blank" rel="noreferrer">Google Search Central guidance for multilingual sites</a>.</SourceNote>
        <div className="upwardLinks">
          <EditorialLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">Read the Multilingual SEO Guide</EditorialLink>
        </div>
      </GuideSection>

      <GuideSection
        id="localize-experience"
        step={8}
        title="Localize the Complete Digital Experience"
        intro="A page can be accurately translated and still feel incomplete, confusing, or unusable. Review every element customers encounter before, during, and after the primary conversion."
        className="softSection"
      >
        <div className="contentColumns">
          <div className="contentColumn">
            <h3>Navigation and Interface Content</h3>
            <p>Localize menus, breadcrumbs, buttons, tabs, filters, search, tooltips, status messages, modal windows, account interfaces, errors, and confirmation screens. Allow enough space for text expansion.</p>
          </div>
          <div className="contentColumn">
            <h3>Images and Graphics</h3>
            <p>Check embedded text, market relevance, imagery, product availability, legal suitability, screenshots, diagrams, and alternative text. Keep translatable text separate from images where practical.</p>
          </div>
          <div className="contentColumn">
            <h3>Video and Audio</h3>
            <p>Plan captions, subtitles, transcripts, voice-over, dubbing, on-screen text, thumbnails, player controls, and accessible alternatives.</p>
          </div>
          <div className="contentColumn">
            <h3>Forms and Conversion Journeys</h3>
            <p>Validate name and address formats, phone fields, postal codes, country selectors, required-field logic, consent language, confirmation messages, emails, CRM routing, payments, shipping, and follow-up.</p>
          </div>
          <div className="contentColumn">
            <h3>Numbers, Dates, Currency, and Units</h3>
            <p>Determine whether the locale requires changes to separators, date order, time format, time zones, currency, taxes, measurements, temperature, and paper size.</p>
          </div>
          <div className="contentColumn">
            <h3>Right-to-Left Languages</h3>
            <p>Test base direction, alignment, navigation, forms, tables, icons, carousels, mixed-language strings, numbers, product codes, punctuation, and bidirectional text.</p>
          </div>
        </div>
        <div className="recommendationCallout">
          <div className="calloutLabel">Illustrative Scenario</div>
          <p>A translated product page is not a complete localized journey if its form rejects local phone numbers or sends an untranslated confirmation email.</p>
        </div>
        <div className="subsection">
          <h3>Preserve Accessibility</h3>
          <p>Localization should preserve or improve heading structure, meaningful links, form labels, text alternatives, captions, reading order, instructions, error identification, keyboard access, visible focus, contrast, and understandable language.</p>
          <p>Declare the predominant language of each page in the HTML, and treat language declaration and text direction as separate technical properties.</p>
        </div>
        <SourceNote>Internationalization and accessibility practices should be reviewed against current <a href="https://www.w3.org/International/quicktips/" target="_blank" rel="noreferrer">W3C Internationalization</a> and <a href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html" target="_blank" rel="noreferrer">W3C accessibility guidance</a>.</SourceNote>
      </GuideSection>

      <GuideSection
        id="test-localized-website"
        step={9}
        title="Test the Localized Website in Context"
        intro="A text-level review confirms the translation. In-context testing confirms the customer experience across language, layout, functionality, search, accessibility, and market requirements."
      >
        <div className="contentColumns">
          <div className="contentColumn"><h3>Linguistic Testing</h3><p>Check accuracy, completeness, terminology, grammar, fluency, tone, spelling, consistency, untranslated strings, variables, context, and market suitability.</p></div>
          <div className="contentColumn"><h3>Visual and Layout Testing</h3><p>Check expansion, wrapping, clipping, overlaps, spacing, alignment, font support, buttons, tables, modal windows, images, and mixed scripts.</p></div>
          <div className="contentColumn"><h3>Responsive Testing</h3><p>Review localized pages on desktop, tablet, mobile, relevant breakpoints, and orientations. A layout that works in the source language may fail after translation.</p></div>
          <div className="contentColumn"><h3>Functional Testing</h3><p>Test links, language selectors, navigation, search, filters, forms, validation, accounts, downloads, videos, checkout, payments, messages, confirmation pages, and locale persistence.</p></div>
          <div className="contentColumn"><h3>SEO Testing</h3><p>Confirm URLs, titles, descriptions, canonical tags, hreflang, crawlability, internal links, sitemaps, redirects, structured data, and robots directives.</p></div>
          <div className="contentColumn"><h3>Accessibility Testing</h3><p>Confirm page language, language changes, labels, alternative text, captions, instructions, focus order, errors, reading sequence, and keyboard navigation.</p></div>
          <div className="contentColumn"><h3>Market Review</h3><p>Qualified regional reviewers can identify unnatural terminology, unavailable products, inappropriate imagery, market-specific legal content, unsupported claims, and conversion barriers.</p></div>
        </div>
        <div className="outputPanel">
          <h3>Defect Priorities</h3>
          <table className="simpleTable">
            <thead><tr><th>Priority</th><th>Meaning and Example</th></tr></thead>
            <tbody>
              <tr><th scope="row">Launch Blocking</th><td>Prevents use, creates serious misinformation, or introduces major risk. Examples include a broken form, missing legal text, or incorrect safety instruction.</td></tr>
              <tr><th scope="row">High Priority</th><td>Materially harms meaning, usability, search, or brand. Examples include a truncated CTA, wrong terminology, or incorrect locale link.</td></tr>
              <tr><th scope="row">Improvement</th><td>Does not prevent launch but should be corrected, such as minor spacing or a noncritical stylistic inconsistency.</td></tr>
            </tbody>
          </table>
        </div>
        <EditorialLink href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">Use the Website Localization Testing Checklist</EditorialLink>
      </GuideSection>

      <GuideSection
        id="launch-maintain"
        step={10}
        title="Launch Languages and Keep Them Current"
        intro="Launch is the transition from project delivery to multilingual content operations. Define release criteria, validate production behavior, monitor early signals, and establish how future source changes will move through the workflow."
        className="softSection"
      >
        <div className="subsection">
          <h3>Define Go or No-Go Criteria</h3>
          <ul>
            <li>Essential content is approved and launch-blocking defects are resolved.</li>
            <li>Navigation and priority customer journeys are complete.</li>
            <li>Legal and required content is available.</li>
            <li>Metadata, language selection, and analytics are configured.</li>
            <li>Regional teams and escalation owners are prepared.</li>
          </ul>
        </div>
        <div className="subsection">
          <h3>Choose a Rollout Model</h3>
          <p>Options include an internal preview, controlled market pilot, priority-language release, priority-page release, simultaneous multilingual launch, or phased expansion after performance review.</p>
          <p>A pilot should still provide a complete journey for the selected audience.</p>
        </div>
        <div className="subsection">
          <h3>Validate the Production Environment</h3>
          <p>After deployment, test live URLs, redirects, language switching, regional routing, performance, analytics, forms, indexability, metadata, mobile behavior, and third-party integrations.</p>
        </div>
        <div className="subsection">
          <h3>Monitor the Initial Launch</h3>
          <p>Watch for untranslated content, routing errors, broken journeys, form failures, regional feedback, indexing issues, incorrect language versions, missing analytics, and customer-support questions.</p>
        </div>
        <div className="subsection">
          <h3>Establish Continuous Website Localization</h3>
          <p>Localized websites begin to drift as soon as the source changes unless a repeatable operating process detects updates, applies translation memory and terminology, routes content by risk, assigns review, publishes according to release rules, and monitors stale or missing pages.</p>
        </div>
        <div className="contentColumns">
          <div className="contentColumn"><h3>Detect Changes</h3><p>Use CMS events, connector queues, API triggers, proxy detection, scheduled exports, release reports, editorial submission, or periodic audits.</p></div>
          <div className="contentColumn"><h3>Translate Incrementally</h3><p>Process new or meaningfully changed content using translation memory, terminology, change comparison, content priorities, and risk-based review.</p></div>
          <div className="contentColumn"><h3>Synchronize Releases</h3><p>Choose simultaneous releases, defined service windows, scheduled batches, market priorities, risk priorities, or regional approval gates.</p></div>
          <div className="contentColumn"><h3>Prevent Content Drift</h3><p>Monitor missing pages, outdated products, old legal content, untranslated interface strings, expired campaigns, broken links, and incomplete releases.</p></div>
          <div className="contentColumn"><h3>Measure Operations</h3><p>Track update turnaround, synchronized coverage, review completion, publishing backlog, defects, stale-page count, terminology changes, and translation memory reuse.</p></div>
        </div>
        <EditorialLink href="https://www.stepes.com/resources/localization-guides/continuous-website-localization/">Plan Continuous Website Localization</EditorialLink>
      </GuideSection>

      <GuideSection
        id="roles-responsibilities"
        title="Who Owns Website Translation?"
        wide
        intro="One program owner should be accountable for coordination, but successful website translation depends on clearly defined contributions from business, content, technical, regional, legal, and linguistic teams."
        className="rolesSection"
      >
        <div className="roleList">
          {roles.map(([role, responsibility]) => (
            <div className="roleRow" key={role}><h3>{role}</h3><p>{responsibility}</p></div>
          ))}
        </div>
        <div className="governancePrinciples">
          {[
            "Assign one final decision-maker.", "Set review deadlines.", "Separate mandatory approval from optional feedback.", "Centralize terminology decisions.", "Document escalation paths.", "Record approved changes.", "Feed approved language into terminology and translation memory.", "Prevent regional edits from bypassing the governed workflow."
          ].map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}
        </div>
      </GuideSection>

      <GuideSection
        id="common-mistakes"
        title="Common Website Translation Mistakes and How to Avoid Them"
        wide
        intro="Most problems arise from preventable planning gaps rather than from translation alone. Use these patterns as a practical diagnostic before launch."
      >
        <div className="mistakesList">
          {mistakes.map(([mistake, problem, solution]) => (
            <article className="mistakeRow" key={mistake}>
              <h3>{mistake}</h3>
              <p>{problem}</p>
              <p className="betterApproach"><strong>Better Approach</strong>{solution}</p>
            </article>
          ))}
        </div>
      </GuideSection>

      <section id="launch-checklist" className="guideSection checklistSection">
        <div className="shell">
          <div className="checklistIntro">
            <Eyebrow>Practical Tool</Eyebrow>
            <h2>Website Translation Launch Checklist</h2>
            <SectionIntro>Use this checklist to confirm that strategy, content, technology, quality, search, testing, and ongoing operations are ready for release.</SectionIntro>
          </div>
          <div className="checklistGrid">
            {checklistGroups.map((group) => (
              <section className="checkGroup" key={group.title} aria-labelledby={`check-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <h3 id={`check-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <GuideSection
        id="frequently-asked-questions"
        title="Frequently Asked Questions About Website Translation"
        intro="These answers summarize the most common planning, workflow, quality, SEO, cost, and operating questions."
        className="faqSection"
      >
        <div className="faqPanel">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <section className="faqItem" key={faq.q}>
                <button id={buttonId} className="faqButton" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{faq.q}</span><ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="faqAnswer" id={answerId} role="region" aria-labelledby={buttonId}>
                    <p>{faq.a}</p>
                    {faq.link && <EditorialLink href={faq.link[1]}>{faq.link[0]}</EditorialLink>}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </GuideSection>

      <GuideSection
        id="sources-references"
        title="Sources and References"
        intro="These references support the guide’s recommendations on website translation workflows, multilingual SEO, accessibility, and internationalization."
        className="sourcesSection"
      >
        <div className="sourceList">
          {sources.map(([title, publisher, url]) => (
            <div className="sourceRow" key={url}>
              <ExternalLink href={url} className="sourceTitleLink">{title}</ExternalLink>
              <p>{publisher}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      <section className="guideSection conclusionSection">
        <div className="readingColumn">
          <Eyebrow>Next Steps</Eyebrow>
          <h2>Build a Website Translation Program That Can Scale</h2>
          <SectionIntro>Successful website translation connects business objectives, content strategy, technical architecture, language quality, local search, digital experience, testing, publishing, and continuous updates.</SectionIntro>
          <p>Begin with three actions:</p>
          <ol className="immediateActions">
            <li>Define the first market, audience, and customer journey.</li>
            <li>Complete a full website content and technology inventory.</li>
            <li>Select the workflow and quality model before translation begins.</li>
          </ol>
          <p>Organizations with complex websites, multiple content systems, frequent updates, regulated information, or many languages may benefit from an experienced partner that can coordinate the complete lifecycle.</p>
        </div>
      </section>

      <section className="relatedSection" aria-labelledby="related-guides-title">
        <div className="shell">
          <div className="relatedHeader">
            <div><Eyebrow>Related Guides</Eyebrow><h2 id="related-guides-title">Continue Planning Your Multilingual Website</h2></div>
            <p>Choose the resource that matches your next decision, from scope and workflow selection to search, testing, and ongoing operations.</p>
          </div>
          <div className="relatedGrid">
            {relatedGroups.map((group) => (
              <section className="relatedGroup" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map(([title, description, url]) => (
                  <article className="resourceItem" key={title}>
                    <a href={url}><span>{title}</span><ArrowIcon /></a>
                    <p>{description}</p>
                  </article>
                ))}
              </section>
            ))}
          </div>
          <nav className="upwardLinks" aria-label="Resource navigation">
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">Localization Guides</EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/guides/">All Guides</EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/">Resource Center</EditorialLink>
          </nav>
        </div>
      </section>

      <section className="finalCta" aria-labelledby="final-cta-title">
        <div className="shell">
          <div className="ctaPanel">
            <div>
              <h2 id="final-cta-title">Plan a Website Translation Program Built for Your Content and Markets</h2>
              <p>Discuss workflow options, quality routing, multilingual SEO, localization testing, and continuous website operations with the Stepes team.</p>
            </div>
            <div className="ctaActions">
              <a className="button buttonPrimary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
              <a className="button buttonSecondary" href="https://www.stepes.com/website-translation-services/">Website Translation <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
