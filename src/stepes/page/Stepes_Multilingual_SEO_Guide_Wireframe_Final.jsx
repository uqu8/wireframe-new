import React, { useEffect, useMemo, useState } from "react";

const CANONICAL = "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/";
const CONTACT_URL = "https://www.stepes.com/contact-us/";
const WEBSITE_TRANSLATION_URL = "https://www.stepes.com/website-translation-services/";
const GLOBAL_CONTENT_STRATEGY_URL = "https://www.stepes.com/resources/global-content-strategy/";

const tocGroups = [
  {
    title: "Understand the Strategy",
    items: [
      ["what-multilingual-seo-involves", "What Multilingual SEO Involves"],
      ["multilingual-seo-framework", "The Multilingual SEO Framework"],
      ["prioritize-markets", "Prioritize Markets and Search Demand"],
      ["keyword-intent-map", "Build a Keyword and Intent Map"],
    ],
  },
  {
    title: "Build the Experience",
    items: [
      ["international-website-structure", "Choose an International Website Structure"],
      ["localize-content-metadata", "Localize Content and Metadata"],
      ["technical-seo-signals", "Implement Technical SEO Signals"],
      ["internal-links-navigation", "Strengthen Internal Links and Navigation"],
    ],
  },
  {
    title: "Launch and Improve",
    items: [
      ["prelaunch-validation", "Validate Multilingual SEO Before Launch"],
      ["roles-governance", "Define Roles and Governance"],
      ["measure-improve", "Measure and Improve Performance"],
      ["common-failures", "Avoid Common Multilingual SEO Failures"],
      ["action-plan", "Multilingual SEO Action Plan"],
      ["frequently-asked-questions", "Frequently Asked Questions"],
    ],
  },
];

const takeaways = [
  {
    title: "Research Local Demand Before Translating Keywords",
    text: "The most accurate translation is not always the phrase customers use when they search in a specific market.",
  },
  {
    title: "Separate Language Targeting From Market Targeting",
    text: "One language version may serve several countries, while some markets need distinct regional experiences.",
  },
  {
    title: "Choose a Structure Your Team Can Maintain",
    text: "Domains, subdomains, and subdirectories each create different governance and operational requirements.",
  },
  {
    title: "Localize the Complete Search Experience",
    text: "Content, metadata, URLs, internal links, media, and conversion paths should reinforce one another.",
  },
  {
    title: "Build Technical Signals Into Publishing",
    text: "Canonicals, alternate-language relationships, sitemaps, crawl controls, and redirects should not be afterthoughts.",
  },
  {
    title: "Manage Multilingual SEO Continuously",
    text: "Search behavior, terminology, content, competition, and regional priorities all change over time.",
  },
];

const frameworkStages = [
  ["Discover", "Evaluate markets, audience needs, search demand, competition, and operational readiness."],
  ["Map", "Connect local keywords and search intent with topics, pages, content types, and journey stages."],
  ["Structure", "Define language and regional URLs, hierarchy, navigation, and localized page relationships."],
  ["Localize", "Adapt content, terminology, metadata, media, proof, and conversion paths for the market."],
  ["Signal", "Implement canonicalization, hreflang, crawl controls, sitemaps, and structured data."],
  ["Improve", "Measure visibility and outcomes, correct issues, and refine content as markets evolve."],
];

const marketScorecard = [
  ["Business Opportunity", "Is the market commercially important?"],
  ["Search Demand", "Is there meaningful demand for the relevant topics and offerings?"],
  ["Competitive Opportunity", "Can the organization provide content that is more useful or differentiated?"],
  ["Content Fit", "Does existing source content address local customer needs?"],
  ["Operational Readiness", "Can sales, support, fulfillment, and web teams serve the market?"],
  ["Conversion Readiness", "Are forms, pricing, contact paths, and next steps localized?"],
  ["Governance Readiness", "Are owners, local reviewers, and approval processes available?"],
];

const siteStructures = [
  {
    structure: "Country-Code Domain",
    example: "example.de",
    strengths: "Clear country association, strong regional identity, and independent market operation.",
    limitations: "More infrastructure, governance, and maintenance. Domain eligibility and availability may vary.",
    suited: "Organizations operating distinct country businesses.",
  },
  {
    structure: "Subdomain",
    example: "de.example.com",
    strengths: "Separates regional environments and can support different systems or hosting models.",
    limitations: "Requires cross-subdomain coordination. The language or country meaning must remain clear.",
    suited: "Markets managed through separate technical or operational environments.",
  },
  {
    structure: "Subdirectory",
    example: "example.com/de/",
    strengths: "Centralized hosting, straightforward expansion, and a shared domain environment.",
    limitations: "Requires strong governance inside one platform and clear locale conventions.",
    suited: "Organizations using a centralized global website.",
  },
  {
    structure: "Separate Regional or Brand Domain",
    example: "regionalbrand.com",
    strengths: "Supports distinct brands, portfolios, or market strategies.",
    limitations: "Can fragment content operations, authority, measurement, and governance.",
    suited: "Acquired brands or genuinely separate regional businesses.",
  },
  {
    structure: "URL Parameter",
    example: "example.com?lang=de",
    strengths: "May be easy for some systems to generate.",
    limitations: "Harder to manage and communicate clearly, and not ideal as the primary long-term locale structure.",
    suited: "Temporary or limited use cases rather than a long-term SEO architecture.",
  },
  {
    structure: "Hybrid Model",
    example: "Multiple structures",
    strengths: "Can support complex portfolios, operating models, and legacy systems.",
    limitations: "Introduces higher technical and governance complexity.",
    suited: "Large enterprises with several platforms, brands, or regional operating models.",
  },
];

const responsibilities = [
  {
    activity: "Market Prioritization",
    seo: "Lead analysis",
    localization: "Advise on feasibility",
    regional: "Validate opportunity",
    content: "Support planning",
    development: "Advise on capacity",
  },
  {
    activity: "Keyword and Intent Research",
    seo: "Lead methodology",
    localization: "Provide language insight",
    regional: "Validate local behavior",
    content: "Translate findings into briefs",
    development: "Inform technical constraints",
  },
  {
    activity: "Terminology",
    seo: "Consult",
    localization: "Govern multilingual terms",
    regional: "Validate regional usage",
    content: "Apply consistently",
    development: "Support system implementation",
  },
  {
    activity: "Website Structure",
    seo: "Define SEO requirements",
    localization: "Advise on locale needs",
    regional: "Provide market requirements",
    content: "Inform content hierarchy",
    development: "Lead implementation",
  },
  {
    activity: "Content Localization",
    seo: "Define intent and page goals",
    localization: "Lead translation and adaptation",
    regional: "Validate relevance",
    content: "Own messaging and approval",
    development: "Publish and support",
  },
  {
    activity: "Metadata",
    seo: "Define requirements",
    localization: "Translate and localize",
    regional: "Validate market fit",
    content: "Approve",
    development: "Implement",
  },
  {
    activity: "Technical Signals",
    seo: "Define requirements",
    localization: "Maintain locale relationships",
    regional: "Inform",
    content: "Inform",
    development: "Implement and test",
  },
  {
    activity: "Launch QA",
    seo: "Validate SEO",
    localization: "Validate language",
    regional: "Validate market experience",
    content: "Validate content",
    development: "Correct technical issues",
  },
  {
    activity: "Reporting",
    seo: "Lead search analysis",
    localization: "Review content implications",
    regional: "Interpret local outcomes",
    content: "Optimize content",
    development: "Support data and corrections",
  },
];

const failureRows = [
  ["Translating keywords directly without local research", "Research target-language search behavior and validate findings with regional experts."],
  ["Treating one language as one market", "Decide whether the experience targets a language, a country, or a specific language-and-country combination."],
  ["Translating every available page at once", "Prioritize pages that create a complete and commercially useful customer journey."],
  ["Using inconsistent URL conventions", "Define one scalable locale structure and document how it will expand."],
  ["Relying on automatic language redirection", "Keep every version directly accessible and let users choose."],
  ["Implementing incomplete hreflang sets", "Generate reciprocal, self-referencing relationships through a controlled workflow."],
  ["Canonicalizing localized pages to the source version", "Preserve distinct localized pages when they are intended to appear independently."],
  ["Translating only the visible body copy", "Localize metadata, links, navigation, images, files, forms, and conversion elements."],
  ["Returning users to the source language through internal links", "Map internal links to the corresponding localized destinations."],
  ["Creating many thin AI-translated pages", "Use AI selectively and add appropriate human review, local relevance, and practical value."],
  ["Launching without analytics or baseline data", "Configure measurement before publishing."],
  ["Treating SEO as a one-time launch task", "Establish recurring content, technical, and market reviews."],
  ["Involving localization and development teams too late", "Align SEO, content, localization, regional, and technical requirements before production begins."],
];

const actionGroups = [
  {
    title: "Strategy and Scope",
    items: [
      "Confirm business-priority markets.",
      "Define language and regional audiences.",
      "Identify customer and commercial objectives.",
      "Review operational and conversion readiness.",
      "Select the first page groups.",
      "Assign program ownership.",
    ],
  },
  {
    title: "Research",
    items: [
      "Analyze local search demand.",
      "Review regional competitors.",
      "Conduct target-language keyword research.",
      "Classify search intent.",
      "Identify terminology and synonym issues.",
      "Map keywords and topics to pages.",
      "Identify gaps requiring original local content.",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Select the international URL structure.",
      "Define language and regional naming conventions.",
      "Map equivalent localized pages.",
      "Plan navigation and language selection.",
      "Establish canonical rules.",
      "Define alternate-language implementation.",
      "Plan sitemaps and redirects.",
      "Document future expansion requirements.",
    ],
  },
  {
    title: "Content",
    items: [
      "Create page-level multilingual SEO briefs.",
      "Determine which pages should be translated, localized, or created locally.",
      "Localize titles, descriptions, headings, and body copy.",
      "Validate approved terminology.",
      "Adapt examples and proof.",
      "Localize media and downloadable assets.",
      "Confirm calls to action and conversion paths.",
      "Complete local-market review.",
    ],
  },
  {
    title: "Technical Implementation",
    items: [
      "Publish stable, crawlable URLs.",
      "Add canonicals.",
      "Implement alternate-language relationships.",
      "Update XML sitemaps.",
      "Validate crawl and index controls.",
      "Check redirects and status codes.",
      "Implement relevant structured data.",
      "Confirm mobile rendering.",
      "Configure analytics and search tools.",
    ],
  },
  {
    title: "Quality Assurance",
    items: [
      "Complete linguistic review.",
      "Complete SEO review.",
      "Validate terminology.",
      "Test internal links.",
      "Test language and region selection.",
      "Validate technical signals.",
      "Confirm indexability.",
      "Check mobile and responsive behavior.",
      "Correct launch-blocking issues.",
    ],
  },
  {
    title: "Ongoing Optimization",
    items: [
      "Monitor visibility and conversions.",
      "Review indexing and technical errors.",
      "Update keyword maps.",
      "Refresh outdated pages.",
      "Improve internal links.",
      "Add market-specific content.",
      "Synchronize changed source content.",
      "Review governance and ownership.",
      "Apply lessons to future markets.",
    ],
  },
];

const faqItems = [
  {
    q: "What Is Multilingual SEO?",
    a: "Multilingual SEO is the process of making website content discoverable and useful for people searching in different languages. It combines target-market research, multilingual keywords, localized content, international website architecture, technical signals, internal links, and performance optimization.",
  },
  {
    q: "What Is the Difference Between Multilingual SEO and International SEO?",
    a: "Multilingual SEO focuses on users searching in different languages. International SEO covers broader country and regional targeting. Many global websites require both because they serve several languages across several markets.",
  },
  {
    q: "Can Keywords Simply Be Translated?",
    a: "Direct translation can provide a useful starting point, but it should not replace local keyword research. Customers may use different terminology, abbreviations, category names, or search patterns. The translated term should be validated against actual market language and intent.",
  },
  {
    q: "Should Every Country Have a Separate Website?",
    a: "Not necessarily. Some organizations use country-code domains, while others use subdomains or subdirectories. The best approach depends on market independence, website technology, governance, expansion plans, content differences, and operational capacity.",
  },
  {
    q: "When Should a Language-Only Page Be Used?",
    a: "A language-only page may be appropriate when the offering, content, terminology, and conversion experience can genuinely serve speakers of that language across several markets. Separate regional pages may be needed when products, prices, regulations, terminology, proof, or customer expectations differ.",
  },
  {
    q: "What Is hreflang?",
    a: "The hreflang attribute identifies language or language-and-region alternatives of equivalent pages. It helps search platforms understand which localized version may be most appropriate for a user. It does not replace a sound URL structure, localized content, internal links, or crawlable navigation.",
  },
  {
    q: "Does Every Localized Page Need a Separate Canonical?",
    a: "Fully translated pages intended to appear independently should generally preserve their own indexable localized URLs. Canonical decisions require more care when several regional pages contain highly similar content in the same language.",
  },
  {
    q: "Can One Spanish Page Serve Several Countries?",
    a: "Yes, when the content and offering are suitable for Spanish speakers across those markets. Separate pages may be appropriate when terminology, product availability, pricing, regulations, contact information, or search intent differ substantially.",
  },
  {
    q: "Can AI-Translated Content Perform in Search?",
    a: "The use of AI does not by itself determine whether content is useful. The output should be accurate, relevant, complete, and valuable to the intended audience. High-priority pages often require human review for terminology, keyword alignment, messaging, claims, and market fit.",
  },
  {
    q: "How Long Does Multilingual SEO Take to Produce Results?",
    a: "There is no universal timeline. Results depend on website authority, competition, market demand, content quality, technical implementation, crawl and index timing, local relevance, and the maturity of the content program. Measure progress against a documented baseline rather than relying on a fixed promise.",
  },
  {
    q: "Who Should Own Multilingual SEO?",
    a: "A designated program owner should coordinate the work, but delivery typically requires SEO, localization, content, development, analytics, and regional expertise. Responsibilities should be documented before production begins.",
  },
  {
    q: "How Often Should Multilingual Content Be Reviewed?",
    a: "Review high-priority performance and technical issues regularly. Keyword research, content relevance, terminology, internal links, market offerings, and website architecture should also be revisited whenever meaningful changes occur.",
  },
];

const relatedResources = [
  {
    category: "FOUNDATIONAL GUIDE",
    title: "How to Translate a Website",
    text: "Plan the complete website translation journey, from content assessment and workflow selection to launch and continuous updates.",
    href: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    category: "DECISION GUIDE",
    title: "Website Translation vs. Localization",
    text: "Understand when language conversion is sufficient and when the complete digital experience requires market adaptation.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/",
  },
  {
    category: "TECHNOLOGY PLANNING",
    title: "Website Translation Workflows",
    text: "Compare CMS connectors, translation APIs, website translation proxy solutions, and file-based processes.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    category: "AI + HUMAN QUALITY",
    title: "AI Website Translation With Human Review",
    text: "Route website content through AI translation, post-editing, professional translation, and specialist review.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    category: "QUALITY ASSURANCE",
    title: "Website Localization Testing Checklist",
    text: "Validate linguistic, visual, responsive, functional, right-to-left, and market-specific requirements before launch.",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    category: "ONGOING OPERATIONS",
    title: "Continuous Website Localization",
    text: "Build a repeatable process for detecting, translating, reviewing, and publishing new and changed website content.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  },
];

const sources = [
  {
    title: "Managing Multi-Regional and Multilingual Sites",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites",
    text: "Official guidance on international URL structures, language targeting, user choice, and multi-regional site management.",
  },
  {
    title: "Tell Google About Localized Versions of Your Page",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/specialty/international/localized-versions",
    text: "Official implementation guidance for hreflang relationships in HTML, HTTP headers, and XML sitemaps.",
  },
  {
    title: "How Google Crawls Locale-Adaptive Pages",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages",
    text: "Guidance on locale-adaptive delivery and why persistent, crawlable localized URLs remain important.",
  },
  {
    title: "Control Your Snippets in Search Results",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/appearance/snippet",
    text: "Official guidance on page-specific meta descriptions and how search snippets may be generated.",
  },
  {
    title: "Using Generative AI Content on Your Website",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
    text: "Guidance on using AI-assisted content while maintaining accuracy, relevance, quality, and people-first value.",
  },
  {
    title: "Structured Data General Guidelines",
    publisher: "Google Search Central",
    href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    text: "Requirements for structured data to remain accurate, visible, relevant, and representative of the page content.",
  },
];

const hreflangExample = `<link rel="alternate" hreflang="en"
      href="https://example.com/en/multilingual-seo/" />

<link rel="alternate" hreflang="de"
      href="https://example.com/de/multilingual-seo/" />

<link rel="alternate" hreflang="de-ch"
      href="https://example.com/ch-de/multilingual-seo/" />

<link rel="alternate" hreflang="x-default"
      href="https://example.com/multilingual-seo/" />`;

function Icon({ name, size = 22 }) {
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

  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3c2.1 2.3 3.2 5.3 3.2 9S14.1 18.7 12 21M12 3C9.9 5.3 8.8 8.3 8.8 12S9.9 18.7 12 21" />
      </>
    ),
    map: (
      <>
        <path d="m3 6 5-2 8 2 5-2v14l-5 2-8-2-5 2V6Z" />
        <path d="M8 4v14M16 6v14" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
      </>
    ),
    signal: (
      <>
        <path d="M5 19v-3M10 19v-6M15 19V9M20 19V5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20V7" />
      </>
    ),
    route: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6h5a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9a4 4 0 0 0-4 4v0" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.search}</svg>;
}

function ExternalLink({ href, children }) {
  return (
    <a className="inline-source" href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function CheckList({ items, columns = 1 }) {
  return (
    <ul className={`check-list columns-${columns}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-marker"><Icon name="check" size={17} /></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChapterLink({ href, children }) {
  return (
    <div className="chapter-link-wrap">
      <ArrowLink href={href}>{children}</ArrowLink>
    </div>
  );
}

function MobileDataTable({ headers, rows, className = "" }) {
  return (
    <div className={`table-shell ${className}`.trim()}>
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StepesMultilingualSEOGuideWireframe() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSection, setActiveSection] = useState("what-multilingual-seo-involves");

  const observedIds = useMemo(
    () => tocGroups.flatMap((group) => group.items.map(([id]) => id)),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.1, 0.5] }
    );

    observedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [observedIds]);

  const closeToc = () => setTocOpen(false);

  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="hero section-shell">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">GLOBAL CONTENT STRATEGY</div>
            <h1>Multilingual SEO Guide</h1>
            <p className="hero-deck">
              Build a practical international search strategy that connects local demand with localized content,
              website architecture, technical signals, internal links, and continuous optimization.
            </p>

            <div className="hero-actions" aria-label="Guide actions">
              <a className="button button-primary" href={`${CANONICAL}#multilingual-seo-framework`}>
                Explore the Framework
                <Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href={`${CANONICAL}#action-plan`}>
                Jump to the Action Plan
              </a>
            </div>

            <div className="hero-meta" aria-label="Guide contents">
              <span><Icon name="route" size={17} /> Six-stage operating framework</span>
              <span><Icon name="check" size={17} /> Planning and launch checklist</span>
              <span><Icon name="users" size={17} /> Governance matrix</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Multilingual SEO ecosystem illustration">
            <div className="visual-kicker">SEARCH VISIBILITY ACROSS MARKETS</div>
            <div className="visual-center">
              <span className="visual-icon"><Icon name="search" size={28} /></span>
              <strong>Local Search Demand</strong>
              <small>Language, market, intent</small>
            </div>
            <div className="visual-path" aria-hidden="true" />
            <div className="visual-node node-keywords">
              <Icon name="map" size={20} />
              <span>Keywords + Intent</span>
            </div>
            <div className="visual-node node-content">
              <Icon name="globe" size={20} />
              <span>Localized Content</span>
            </div>
            <div className="visual-node node-links">
              <Icon name="link" size={20} />
              <span>Site Architecture</span>
            </div>
            <div className="visual-node node-signals">
              <Icon name="signal" size={20} />
              <span>Technical Signals</span>
            </div>
            <div className="visual-outcome">
              <span>MARKET OUTCOME</span>
              <strong>Relevant pages discovered by the right audience</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section section-shell">
        <div className="shell summary-grid">
          <div className="summary-heading">
            <div className="eyebrow">KEY TAKEAWAYS</div>
            <h2>What Strong Multilingual SEO Programs Get Right</h2>
            <p>
              Translation, localization, SEO, content, and development need to operate as one connected system.
            </p>
          </div>
          <div className="takeaway-list">
            {takeaways.map((item) => (
              <article className="takeaway-item" key={item.title}>
                <span className="takeaway-mark" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="toc-section section-shell" aria-labelledby="toc-heading">
        <div className="shell">
          <div className="toc-topline">
            <div>
              <h2 id="toc-heading">In This Guide</h2>
              <p>Move directly to the strategy, technical implementation, or action-planning section you need.</p>
            </div>
            <button
              className="toc-toggle"
              type="button"
              aria-expanded={tocOpen}
              aria-controls="guide-toc"
              onClick={() => setTocOpen((value) => !value)}
            >
              <span>{tocOpen ? "Close Contents" : "Open Contents"}</span>
              <Icon name="chevron" size={19} />
            </button>
          </div>

          <nav id="guide-toc" className={`toc-grid ${tocOpen ? "is-open" : ""}`} aria-label="Guide contents">
            {tocGroups.map((group) => (
              <div className="toc-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(([id, label]) => (
                    <li key={id} className={activeSection === id ? "is-active" : ""}>
                      <a
                        href={`${CANONICAL}#${id}`}
                        onClick={closeToc}
                        aria-current={activeSection === id ? "location" : undefined}
                      >
                        <span className="toc-marker" aria-hidden="true" />
                        <span>{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </section>

      <article>
        <section id="what-multilingual-seo-involves" className="article-section section-shell anchor-section">
          <div className="reading-shell">
            <h2>What Multilingual SEO Involves</h2>
            <p className="section-lead">
              Multilingual SEO is the process of making website content relevant, accessible, and discoverable for
              people searching in different languages.
            </p>
            <p>
              International SEO is the broader discipline of reaching users across countries and regions. A website
              can be multilingual, multi-regional, or both. The distinction matters because language and market are
              related, but they are not interchangeable targeting decisions.
            </p>
            <p>
              A company may publish one German-language experience for German-speaking customers worldwide. Another
              company may need separate German content for Germany, Austria, and Switzerland because products, prices,
              regulations, terminology, or customer expectations differ by market.
            </p>

            <div className="definition-band" role="group" aria-label="Translation, localization, and multilingual SEO definitions">
              <div>
                <span>TRANSLATION</span>
                <strong>What does the source content mean in another language?</strong>
              </div>
              <div>
                <span>LOCALIZATION</span>
                <strong>How should the content and experience adapt for the market?</strong>
              </div>
              <div>
                <span>MULTILINGUAL SEO</span>
                <strong>How will the intended audience discover the content through search?</strong>
              </div>
            </div>

            <p>
              A translated page can be linguistically correct but still perform poorly if it targets the wrong
              terminology, answers the wrong intent, lacks internal links, or is not clearly associated with the
              intended language or market. A technically correct website structure cannot compensate for weak content.
            </p>
            <p className="source-note">
              Google distinguishes multilingual websites from multi-regional websites and recommends separate URLs
              when language versions should be discovered independently. <ExternalLink href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites">Review Google Search Central guidance</ExternalLink>
            </p>
            <ChapterLink href="https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/">
              Website Translation vs. Localization
            </ChapterLink>
          </div>
        </section>

        <section id="multilingual-seo-framework" className="framework-section section-shell anchor-section">
          <div className="shell">
            <div className="framework-heading">
              <div className="eyebrow eyebrow-dark">OPERATING MODEL</div>
              <h2>The Multilingual SEO Framework</h2>
              <p>
                Manage international search as a connected operating system, not a collection of isolated page edits.
                Performance data should feed back into market research, content planning, and localization priorities.
              </p>
            </div>

            <div className="framework-grid">
              {frameworkStages.map(([title, text], index) => (
                <article className="framework-stage" key={title}>
                  <div className="framework-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="framework-loop">
              <span>Performance insights</span>
              <Icon name="arrow" size={18} />
              <span>new market and content decisions</span>
            </div>
          </div>
        </section>

        <section id="prioritize-markets" className="article-section section-shell anchor-section">
          <div className="reading-shell">
            <h2>Prioritize Markets and Search Demand</h2>
            <p className="section-lead">
              Multilingual SEO should begin with market opportunity, not a list of languages.
            </p>
            <p>
              A language may be used across many countries, and one country may contain several important language
              communities. Before creating localized content, determine exactly who the website should serve and what
              the organization can support after launch.
            </p>

            <h3>Evaluate Business Opportunity</h3>
            <p>Review the strategic importance of each market, including:</p>
            <CheckList
              columns={2}
              items={[
                "Current and forecast customer demand",
                "Sales pipeline and revenue potential",
                "Product or service availability",
                "Existing website traffic",
                "Regional growth priorities",
                "Customer support coverage",
                "Legal or regulatory readiness",
                "Ecommerce, distribution, or fulfillment capabilities",
              ]}
            />
            <p>
              High search demand provides limited value if customers cannot purchase, request information, receive
              support, or complete the intended conversion.
            </p>

            <h3>Assess Local Search Opportunity</h3>
            <p>
              Evaluate demand for product, category, and informational terms; regional terminology; local competitors;
              content quality in current search results; seasonal demand; and the maturity of the category.
            </p>
            <p>
              Search volume should not be the only criterion. A lower-volume query with strong commercial relevance
              may be more valuable than a high-volume query with little connection to the organization’s offering.
            </p>

            <h3>Determine Content Readiness</h3>
            <p>
              Not every source-language page should be translated immediately. Prioritize pages that support a coherent
              customer journey, including market landing pages, core services or products, educational content,
              customer proof, contact paths, and implementation resources.
            </p>
          </div>

          <div className="wide-module shell">
            <div className="module-heading split-heading">
              <div>
                <div className="eyebrow">PLANNING TOOL</div>
                <h3>Market Prioritization Scorecard</h3>
              </div>
              <p>
                Use a High, Medium, or Low assessment to compare relative readiness without creating false numerical precision.
              </p>
            </div>
            <MobileDataTable headers={["Criterion", "Question to Ask"]} rows={marketScorecard} />
          </div>
        </section>

        <section id="keyword-intent-map" className="article-section section-shell soft-section anchor-section">
          <div className="shell split-editorial">
            <div className="split-copy">
              <h2>Build a Multilingual Keyword and Intent Map</h2>
              <p className="section-lead">
                Effective keyword research is conducted in the target language and market, not added as a final check after translation.
              </p>
              <p>
                A direct translation may be accurate but still fail to reflect the phrase customers commonly search,
                regional vocabulary, abbreviations, technical terminology, or the way commercial intent is expressed locally.
              </p>

              <h3>Start With the Customer’s Intent</h3>
              <div className="intent-list">
                <div><strong>Informational</strong><span>Learn, solve a problem, or understand a concept.</span></div>
                <div><strong>Commercial research</strong><span>Compare approaches, products, providers, or solutions.</span></div>
                <div><strong>Transactional</strong><span>Buy, request a quote, register, download, or contact a provider.</span></div>
                <div><strong>Navigational</strong><span>Find a particular company, product, tool, or destination.</span></div>
              </div>

              <h3>Research Concepts, Not Isolated Words</h3>
              <p>
                Build topic groups around the primary keyword theme, supporting questions, related terminology, customer
                problems, decision criteria, regional variations, and the intended conversion action.
              </p>

              <h3>Balance Search Language and Approved Terminology</h3>
              <p>
                Approved product or technical terminology may differ from the phrase customers search. Use terminology
                management to protect accuracy while introducing locally familiar category language where it helps comprehension.
              </p>
            </div>

            <aside className="seo-brief-panel" aria-labelledby="seo-brief-heading">
              <div className="eyebrow">PAGE-LEVEL BRIEF</div>
              <h3 id="seo-brief-heading">Connect Research With Production</h3>
              <p>Document the decisions every priority page needs before translation and implementation begin.</p>
              <CheckList
                items={[
                  "Target language and market",
                  "Page purpose and primary audience",
                  "Primary search intent",
                  "Main keyword theme",
                  "Supporting topics and questions",
                  "Approved product and industry terms",
                  "Title and meta-description direction",
                  "Recommended headings",
                  "Internal-link targets",
                  "Conversion action",
                  "Local, SEO, and localization owners",
                  "Publication and review status",
                ]}
              />
            </aside>
          </div>

          <div className="shell example-module">
            <div className="example-label">ILLUSTRATIVE EXAMPLE</div>
            <div className="example-grid">
              <div>
                <span>English Source Concept</span>
                <strong>Cloud-based translation management system</strong>
              </div>
              <div>
                <span>Literal Translation</span>
                <strong>Linguistically accurate but rarely searched local equivalent</strong>
              </div>
              <div>
                <span>Local Search Language</span>
                <strong>A shorter category term commonly used by regional buyers</strong>
              </div>
              <div>
                <span>Search Intent</span>
                <strong>Buyers comparing software platforms</strong>
              </div>
              <div>
                <span>Metadata Recommendation</span>
                <strong>Use the locally recognized category term</strong>
              </div>
              <div>
                <span>Body Content Recommendation</span>
                <strong>Connect the familiar term to approved product terminology</strong>
              </div>
              <div className="example-wide">
                <span>Page Decision</span>
                <strong>Localize the existing product page and add a market-specific comparison section</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="international-website-structure" className="article-section section-shell anchor-section">
          <div className="reading-shell">
            <h2>Choose an International Website Structure</h2>
            <p className="section-lead">
              The best international structure is the one your organization can implement, govern, and maintain consistently.
            </p>
            <p>
              Domains, subdomains, subdirectories, separate brand sites, parameters, and hybrid models each introduce
              different tradeoffs. Choose based on the business organization, website technology, future expansion,
              market independence, analytics, governance, and maintenance capacity.
            </p>
            <p>
              Google documents several approaches for multilingual and multi-regional websites and recommends separate,
              crawlable URLs for language versions intended to appear independently in search. <ExternalLink href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites">Review international site guidance</ExternalLink>
            </p>
          </div>

          <div className="wide-module shell">
            <div className="module-heading">
              <h3>International URL Structure Options</h3>
            </div>
            <div className="table-shell architecture-table">
              <table>
                <thead>
                  <tr>
                    <th>Structure</th>
                    <th>Example</th>
                    <th>Strengths</th>
                    <th>Limitations</th>
                    <th>Often Suited To</th>
                  </tr>
                </thead>
                <tbody>
                  {siteStructures.map((row) => (
                    <tr key={row.structure}>
                      <td data-label="Structure"><strong>{row.structure}</strong></td>
                      <td data-label="Example"><code>{row.example}</code></td>
                      <td data-label="Strengths">{row.strengths}</td>
                      <td data-label="Limitations">{row.limitations}</td>
                      <td data-label="Often Suited To">{row.suited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reading-shell chapter-continuation">
            <h3>Use Persistent, Crawlable URLs</h3>
            <p>
              Every language or market page that should appear independently in search needs a stable URL. Avoid relying
              entirely on browser-language detection, cookies, sessions, IP-based personalization, or content that changes
              at one URL without accessible alternatives.
            </p>
            <p className="source-note">
              Locale-adaptive pages can prevent crawlers from discovering every variation because the crawler may not send
              the same location or language signals as a user. <ExternalLink href="https://developers.google.com/search/docs/specialty/international/locale-adaptive-pages">Read locale-adaptive page guidance</ExternalLink>
            </p>

            <h3>Plan for Expansion</h3>
            <p>
              Define whether folders represent languages, markets, or both; how generic language versions relate to
              country-specific pages; how future locales are added; whether page paths are translated; and how canonical,
              hreflang, sitemap, and redirect logic will be generated.
            </p>
            <ChapterLink href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">
              Website Translation Workflows
            </ChapterLink>
          </div>
        </section>

        <section id="localize-content-metadata" className="article-section section-shell soft-section anchor-section">
          <div className="reading-shell">
            <h2>Localize Content and Metadata</h2>
            <p className="section-lead">
              Multilingual SEO should improve local relevance without weakening accuracy, usability, brand consistency, or conversion clarity.
            </p>
            <p>
              Review the complete page experience, including titles, descriptions, headings, body copy, navigation, links,
              images, alt text, video, downloadable files, product terminology, pricing, units, proof, forms, validation
              messages, calls to action, and local contact information.
            </p>
            <p className="source-note">
              Search platforms primarily determine page language from visible content. Use one clear primary language for
              the page and navigation rather than mixing partial translations. <ExternalLink href="https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites">Review language guidance</ExternalLink>
            </p>

            <h3>Write Unique Titles and Descriptions</h3>
            <p>
              Titles and meta descriptions should reflect the page’s local purpose and search intent. Avoid direct source
              copies without market review, identical descriptions across many pages, keyword lists without a useful
              proposition, or market promises the organization cannot support.
            </p>
            <p className="source-note">
              Search engines may create snippets from visible page content rather than always using the submitted description.
              <ExternalLink href="https://developers.google.com/search/docs/appearance/snippet">Review snippet guidance</ExternalLink>
            </p>
          </div>

          <div className="shell routing-module">
            <div className="module-heading split-heading">
              <div>
                <div className="eyebrow">CONTENT ROUTING</div>
                <h3>Choose the Right Level of Market Adaptation</h3>
              </div>
              <p>Use the source content only when it genuinely fits the target audience and search intent.</p>
            </div>
            <div className="routing-grid">
              <article>
                <span className="route-icon"><Icon name="globe" size={22} /></span>
                <h3>Translate</h3>
                <p>The meaning, audience need, and search intent remain substantially equivalent.</p>
                <ul>
                  <li>Professional translation</li>
                  <li>Approved terminology</li>
                  <li>Localized titles and descriptions</li>
                  <li>Local formatting and review</li>
                </ul>
              </article>
              <article>
                <span className="route-icon"><Icon name="map" size={22} /></span>
                <h3>Localize</h3>
                <p>The page needs meaningful language, market, proof, or conversion adaptation.</p>
                <ul>
                  <li>Different keyword priorities</li>
                  <li>Regional examples and benefits</li>
                  <li>Revised content order</li>
                  <li>Local calls to action</li>
                </ul>
              </article>
              <article>
                <span className="route-icon"><Icon name="code" size={22} /></span>
                <h3>Create Locally</h3>
                <p>Search intent or customer needs differ enough to require original market-specific content.</p>
                <ul>
                  <li>Different customer questions</li>
                  <li>Market-specific offerings</li>
                  <li>Local regulations or buying processes</li>
                  <li>New comparison or educational content</li>
                </ul>
              </article>
            </div>
          </div>

          <div className="reading-shell chapter-continuation">
            <h3>Use AI Translation With Appropriate Review</h3>
            <p>
              AI can accelerate large content volumes, but SEO-sensitive pages may still require human review for keyword
              alignment, terminology, headings, metadata, claims, brand voice, conversion language, and market relevance.
            </p>
            <p className="source-note">
              Search policy focuses on whether content is accurate, useful, relevant, and created for people. Large volumes
              of pages without added value may violate scaled-content policies regardless of the technology used. <ExternalLink href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content">Review Google guidance on generative AI content</ExternalLink>
            </p>
            <p>
              The same fundamentals support visibility in AI-assisted search experiences: helpful content, crawlable pages,
              clear internal links, sound technical structure, descriptive text, relevant media, and structured data that
              matches visible content.
            </p>
            <ChapterLink href="https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/">
              AI Website Translation With Human Review
            </ChapterLink>
          </div>
        </section>

        <section id="technical-seo-signals" className="article-section section-shell anchor-section">
          <div className="shell technical-grid">
            <div className="technical-copy">
              <h2>Implement Technical SEO Signals</h2>
              <p className="section-lead">
                Technical signals help search platforms understand how localized pages relate to one another.
              </p>
              <p>
                They should reinforce a clear content and URL strategy rather than compensate for an incomplete one.
              </p>

              <h3>Use hreflang for Localized Page Relationships</h3>
              <p>
                The hreflang attribute identifies language or language-and-region variants of equivalent pages. Google
                supports implementation in HTML, HTTP headers, or XML sitemaps. Selecting one well-managed method is often
                easier than maintaining duplicate methods.
              </p>
              <p className="source-note">
                <ExternalLink href="https://developers.google.com/search/docs/specialty/international/localized-versions">Review official hreflang implementation guidance</ExternalLink>
              </p>
            </div>

            <div className="code-panel" aria-label="Illustrative hreflang code example">
              <div className="code-panel-top">
                <span><Icon name="code" size={18} /> HTML example</span>
                <span>Equivalent localized pages</span>
              </div>
              <pre><code>{hreflangExample}</code></pre>
            </div>
          </div>

          <div className="reading-shell chapter-continuation">
            <h3>Follow Core hreflang Requirements</h3>
            <CheckList
              items={[
                "Include the page itself and the relevant alternate versions.",
                "Use fully qualified URLs.",
                "Use reciprocal references between localized pages.",
                "Use valid language and optional region codes.",
                "Keep the same relationship set across equivalent pages.",
                "Update annotations when pages are added, removed, redirected, or unpublished.",
              ]}
            />
            <p>
              A country code cannot be used by itself. The language comes first, followed by the optional region, such as
              <code> fr-ca </code> or <code> de-ch</code>.
            </p>

            <h3>Use x-default Deliberately</h3>
            <p>
              The reserved x-default value identifies a fallback page for users whose language or region does not match
              the available alternatives. It is often appropriate for global home pages, international landing pages, or
              language selectors. It should point to a genuinely useful fallback experience.
            </p>

            <h3>Coordinate Canonical and Alternate-Language Signals</h3>
            <p>
              Canonicals identify the preferred URL among duplicate or highly similar pages. Hreflang identifies localized
              alternatives. Fully translated pages intended to appear separately should preserve an indexable localized URL
              rather than routinely canonicalizing every language version to the source page.
            </p>

            <h3>Keep Pages Crawlable and Indexable</h3>
            <CheckList
              columns={2}
              items={[
                "Return the intended HTTP status.",
                "Avoid accidental robots.txt blocks.",
                "Remove unintended noindex directives.",
                "Keep pages accessible without sessions or logins.",
                "Include pages in crawlable navigation.",
                "Add priority URLs to XML sitemaps.",
                "Render important content for crawlers.",
                "Confirm mobile performance and stability.",
              ]}
            />

            <h3>Avoid Forced Locale Redirection</h3>
            <p>
              Automatic redirection based on IP address or assumed browser language can prevent users and crawlers from
              reaching the version they need. Keep localized URLs directly accessible, suggest a version when useful, and
              provide a visible language or region selector.
            </p>

            <h3>Localize Structured Data Carefully</h3>
            <p>
              Structured data should match the visible localized page. Names, descriptions, prices, currencies, addresses,
              availability, and URLs must be accurate for the intended market. <ExternalLink href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies">Review structured data guidelines</ExternalLink>
            </p>
          </div>
        </section>

        <section id="internal-links-navigation" className="article-section section-shell soft-section anchor-section">
          <div className="shell split-editorial link-section-grid">
            <div className="split-copy">
              <h2>Strengthen Internal Links and Navigation</h2>
              <p className="section-lead">
                Localized pages need crawlable, user-friendly paths through the complete regional experience.
              </p>
              <p>
                Review every internal link so users remain in the intended language or regional journey when an equivalent
                destination exists. Common problems include translated navigation pointing to source-language URLs, local
                calls to action opening untranslated forms, and related-resource modules mixing languages.
              </p>

              <h3>Build Localized Content Clusters</h3>
              <p>
                Connect regional pillar pages with service and product pages, educational guides, comparison resources,
                industry content, customer proof, technical documentation, support, and conversion pages.
              </p>

              <h3>Localize Anchor Text</h3>
              <p>
                Anchor text should describe the linked destination naturally in the target language. Avoid generic labels,
                unexpected source-language destinations, or repetitive keyword-heavy anchors.
              </p>

              <h3>Provide Accessible Language and Region Selection</h3>
              <p>
                Use crawlable links, identify the current selection, distinguish language from country, preserve the
                equivalent page where possible, and avoid relying only on flags. Flags represent countries, not languages.
              </p>
            </div>

            <div className="cluster-diagram" aria-label="Localized content cluster example">
              <div className="cluster-label">LOCALIZED CONTENT CLUSTER</div>
              <div className="cluster-hub">
                <Icon name="globe" size={24} />
                <span>Regional Pillar Page</span>
              </div>
              <div className="cluster-lines" aria-hidden="true" />
              <div className="cluster-node node-a"><span>Services + Products</span></div>
              <div className="cluster-node node-b"><span>Guides + Comparisons</span></div>
              <div className="cluster-node node-c"><span>Proof + Industry Content</span></div>
              <div className="cluster-node node-d"><span>Contact + Conversion</span></div>
              <div className="cluster-caption">Every path stays within the correct language or market experience.</div>
            </div>
          </div>
        </section>

        <section id="prelaunch-validation" className="article-section section-shell anchor-section">
          <div className="reading-shell">
            <h2>Validate Multilingual SEO Before Launch</h2>
            <p className="section-lead">
              SEO validation should happen alongside linguistic, visual, responsive, and functional quality assurance.
            </p>
            <p>
              Waiting until after launch can allow incomplete pages, incorrect signals, and broken discovery paths to reach
              search indexes.
            </p>
          </div>

          <div className="shell validation-grid">
            {[
              {
                title: "Content",
                icon: "search",
                items: [
                  "Correct language and market",
                  "Local keyword and intent alignment",
                  "Unique titles and descriptions",
                  "One clear H1 and logical headings",
                  "Complete localized copy",
                  "Approved terminology",
                  "Localized media and conversion actions",
                ],
              },
              {
                title: "Technical",
                icon: "code",
                items: [
                  "Approved URL structure",
                  "Correct status codes",
                  "Crawlable and indexable pages",
                  "Intended canonicals",
                  "Valid alternate-language references",
                  "Correct sitemap inclusion",
                  "No unintended redirects or blocks",
                ],
              },
              {
                title: "Architecture",
                icon: "link",
                items: [
                  "Working navigation",
                  "Correct language links",
                  "No orphan pages",
                  "Accessible language selector",
                  "Accurate breadcrumbs",
                  "Correct related resources",
                  "Clean redirect behavior",
                ],
              },
              {
                title: "Measurement",
                icon: "chart",
                items: [
                  "Analytics configuration",
                  "Language and market segmentation",
                  "Conversion tracking",
                  "Search tool verification",
                  "Sitemap submission",
                  "Campaign attribution",
                  "Baseline reporting",
                ],
              },
            ].map((group) => (
              <article className="validation-group" key={group.title}>
                <div className="validation-title">
                  <span><Icon name={group.icon} size={21} /></span>
                  <h3>{group.title}</h3>
                </div>
                <CheckList items={group.items} />
              </article>
            ))}
          </div>

          <div className="reading-shell chapter-continuation">
            <ChapterLink href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">
              Website Localization Testing Checklist
            </ChapterLink>
          </div>
        </section>

        <section id="roles-governance" className="article-section section-shell soft-section anchor-section">
          <div className="reading-shell">
            <h2>Define Roles and Governance</h2>
            <p className="section-lead">
              Multilingual SEO succeeds when global standards and regional expertise are connected through clear ownership.
            </p>
            <p>
              Global SEO, localization, content, regional marketing, development, analytics, and subject-matter teams each
              contribute different expertise. The exact model will vary, but ownership should be explicit before production begins.
            </p>
          </div>

          <div className="wide-module shell">
            <div className="module-heading">
              <div className="eyebrow">RESPONSIBILITY MATRIX</div>
              <h3>Coordinate Global and Regional Work</h3>
            </div>
            <div className="table-shell responsibility-table">
              <table>
                <thead>
                  <tr>
                    <th>Activity</th>
                    <th>Global SEO</th>
                    <th>Localization</th>
                    <th>Regional Team</th>
                    <th>Content Team</th>
                    <th>Development</th>
                  </tr>
                </thead>
                <tbody>
                  {responsibilities.map((row) => (
                    <tr key={row.activity}>
                      <td data-label="Activity"><strong>{row.activity}</strong></td>
                      <td data-label="Global SEO">{row.seo}</td>
                      <td data-label="Localization">{row.localization}</td>
                      <td data-label="Regional Team">{row.regional}</td>
                      <td data-label="Content Team">{row.content}</td>
                      <td data-label="Development">{row.development}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reading-shell chapter-continuation">
            <h3>Combine Global Standards With Local Expertise</h3>
            <p>
              Global teams can establish URL conventions, technical standards, templates, research methods, terminology
              workflows, quality requirements, reporting definitions, and escalation processes. Regional teams validate local
              language, market relevance, product availability, competitors, customer expectations, proof, and conversion paths.
            </p>

            <h3>Establish Change Governance</h3>
            <p>
              Document how the organization handles new markets, changed source content, terminology updates, URL changes,
              page retirement, redirects, keyword revisions, technical errors, regional review delays, offering changes, and ownership transitions.
            </p>
          </div>
        </section>

        <section id="measure-improve" className="article-section section-shell anchor-section">
          <div className="shell measure-grid">
            <div className="measure-heading">
              <h2>Measure and Improve Performance</h2>
              <p className="section-lead">
                Evaluate performance by market, language, page type, search intent, and business outcome, not one global traffic total.
              </p>
            </div>

            <div className="measure-columns">
              <article>
                <span className="measure-icon"><Icon name="search" size={22} /></span>
                <h3>Search Visibility</h3>
                <p>Track indexed coverage, impressions, keyword visibility, click-through rate, branded and non-branded traffic, and visibility across topic groups.</p>
              </article>
              <article>
                <span className="measure-icon"><Icon name="globe" size={22} /></span>
                <h3>Content Performance</h3>
                <p>Evaluate landing-page engagement, conversion, qualified leads, content gaps, internal-link usage, and pages that attract the wrong intent.</p>
              </article>
              <article>
                <span className="measure-icon"><Icon name="code" size={22} /></span>
                <h3>Technical Health</h3>
                <p>Monitor crawl errors, exclusions, redirects, canonicals, alternate-language relationships, sitemaps, orphan pages, and structured data.</p>
              </article>
            </div>
          </div>

          <div className="shell cadence-band">
            <div>
              <span>AFTER LAUNCH</span>
              <strong>Confirm crawlability, indexing, analytics, signals, and conversion tracking.</strong>
            </div>
            <div>
              <span>MONTHLY</span>
              <strong>Review visibility, landing pages, technical errors, and priority content changes.</strong>
            </div>
            <div>
              <span>QUARTERLY</span>
              <strong>Revisit keyword maps, intent, content gaps, competitors, links, and regional priorities.</strong>
            </div>
            <div>
              <span>AFTER MAJOR CHANGES</span>
              <strong>Audit architecture, templates, canonical logic, hreflang, and analytics.</strong>
            </div>
          </div>

          <div className="reading-shell chapter-continuation">
            <h3>Turn Findings Into Actions</h3>
            <p>
              Improve titles and descriptions, expand thin sections, strengthen internal links, merge competing pages,
              create missing local content, correct technical signals, adapt conversion paths, retire outdated pages, and
              refresh keyword research as markets evolve.
            </p>
            <ChapterLink href="https://www.stepes.com/resources/localization-guides/continuous-website-localization/">
              Continuous Website Localization
            </ChapterLink>
          </div>
        </section>

        <section id="common-failures" className="article-section section-shell soft-section anchor-section">
          <div className="shell">
            <div className="module-heading split-heading">
              <div>
                <h2>Avoid Common Multilingual SEO Failures</h2>
              </div>
              <p>Recognize the failure pattern early and replace it with a more maintainable approach.</p>
            </div>
            <MobileDataTable headers={["Failure", "Better Approach"]} rows={failureRows} className="failure-table" />
          </div>
        </section>

        <section id="action-plan" className="article-section section-shell anchor-section">
          <div className="reading-shell">
            <h2>Multilingual SEO Action Plan</h2>
            <p className="section-lead">
              Use this plan to move from initial strategy to launch and continuous optimization.
            </p>
            <p>
              The essential guidance remains available on the page so teams can use it during planning, production, review,
              and ongoing operations.
            </p>
          </div>

          <div className="shell action-plan">
            {actionGroups.map((group, index) => (
              <section className="action-group" key={group.title}>
                <div className="action-group-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <CheckList items={group.items} columns={group.items.length > 7 ? 2 : 1} />
              </section>
            ))}
          </div>
        </section>

        <section id="frequently-asked-questions" className="faq-section section-shell soft-section anchor-section">
          <div className="shell faq-shell">
            <div className="faq-heading">
              <h2>Frequently Asked Questions</h2>
              <p>Concise answers to common planning and implementation questions.</p>
            </div>
            <div className="faq-panel">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;
                return (
                  <div className="faq-item" key={item.q}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{item.q}</span>
                        <span className={`faq-icon ${isOpen ? "is-open" : ""}`} aria-hidden="true"><span>+</span></span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`faq-answer ${isOpen ? "is-open" : ""}`}
                      hidden={!isOpen}
                    >
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sources-section section-shell">
          <div className="shell sources-layout">
            <div className="sources-heading">
              <h2>Sources and Further Reading</h2>
              <p>
                Technical recommendations in this guide are supported by current official search documentation.
              </p>
            </div>
            <div className="sources-list">
              {sources.map((source) => (
                <article key={source.title}>
                  <div>
                    <a href={source.href} target="_blank" rel="noreferrer">{source.title}</a>
                    <span>{source.publisher}</span>
                  </div>
                  <p>{source.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conclusion-section section-shell">
          <div className="reading-shell conclusion-copy">
            <h2>Build Search Visibility Into the Multilingual Content Program</h2>
            <p className="section-lead">
              Strong multilingual SEO connects local customer demand with the right content, language, architecture,
              technical implementation, and operating model.
            </p>
            <p>
              Treat search readiness as part of market selection, content planning, translation, localization, publishing,
              quality assurance, and ongoing optimization rather than a separate activity added after launch.
            </p>
          </div>
        </section>

        <section className="related-section section-shell">
          <div className="shell">
            <div className="related-heading">
              <div>
                <h2>Continue Planning Your Multilingual Website</h2>
                <p>Explore the next guide that matches your current website translation decision.</p>
              </div>
              <div className="related-heading-actions">
                <ArrowLink href={GLOBAL_CONTENT_STRATEGY_URL}>Global Content Strategy</ArrowLink>
                <ArrowLink href="https://www.stepes.com/resources/guides/">View All Guides</ArrowLink>
              </div>
            </div>

            <div className="related-grid">
              {relatedResources.map((resource) => (
                <article className="related-item" key={resource.title}>
                  <div className="related-category">{resource.category}</div>
                  <a href={resource.href} className="related-title">
                    <span>{resource.title}</span>
                    <Icon name="arrow" size={18} />
                  </a>
                  <p>{resource.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="final-cta section-shell">
        <div className="shell cta-panel">
          <div className="cta-copy">
            <h2>Plan a Search-Ready Multilingual Website</h2>
            <p>
              Connect multilingual content planning, professional localization, technical website workflows, quality
              assurance, and ongoing content operations with a strategy built for your markets.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={CONTACT_URL}>
              Talk to an Expert
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-secondary" href={WEBSITE_TRANSLATION_URL}>
              Website Translation Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --stepes-accent: #c11d63;
    --stepes-accent-dark: #9f1d55;
    --stepes-accent-deep: #7a1542;
    --stepes-blush: #fdf2f7;
    --stepes-light-magenta: #f2a7c6;
    --ink: #17131a;
    --ink-soft: #4e4651;
    --muted: #746c77;
    --line: #e7e2e7;
    --line-strong: #d9d2da;
    --surface: #ffffff;
    --surface-soft: #faf9fa;
    --dark: #21151d;
    --dark-2: #2b1924;
    --shadow: 0 18px 50px rgba(48, 29, 42, 0.09);
  }

  .stepes-guide {
    background: var(--surface);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    line-height: 1.68;
    overflow-x: clip;
  }

  .stepes-guide * { box-sizing: border-box; }
  .stepes-guide img, .stepes-guide svg { display: block; }
  .stepes-guide a { color: inherit; }
  .stepes-guide button { font: inherit; }

  .section-shell { padding: 96px 56px; }
  .shell { width: min(1280px, 100%); margin: 0 auto; }
  .reading-shell { width: min(760px, calc(100% - 112px)); margin: 0 auto; }
  .wide-module { margin-top: 56px; }
  .anchor-section { scroll-margin-top: 120px; }

  h1, h2, h3 { margin: 0; color: var(--ink); font-weight: 600; letter-spacing: -0.025em; }
  h1 { font-size: 48px; line-height: 1.08; }
  h2 { font-size: 36px; line-height: 1.18; }
  h3 { font-size: 24px; line-height: 1.28; }
  p { margin: 0; color: var(--ink-soft); }
  p + p { margin-top: 22px; }
  h2 + p, h3 + p { margin-top: 18px; }
  p + h3, ul + h3, .check-list + h3 { margin-top: 46px; }
  code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }

  .eyebrow {
    margin-bottom: 18px;
    color: var(--stepes-accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    line-height: 1.35;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--stepes-light-magenta); }

  .hero { padding-top: 104px; padding-bottom: 96px; background: linear-gradient(180deg, #fff 0%, #fff 72%, #fbf8fa 100%); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(440px, 0.96fr); gap: 72px; align-items: center; }
  .hero-copy { max-width: 720px; }
  .hero-deck { max-width: 690px; margin-top: 26px; font-size: 20px; line-height: 1.62; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
  .button {
    min-height: 50px;
    max-width: 100%;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    text-align: center;
    white-space: normal;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }
  .button:hover { transform: translateY(-1px); }
  .button:focus-visible, .arrow-link:focus-visible, .related-title:focus-visible, .sources-list a:focus-visible, .inline-source:focus-visible, .toc-grid a:focus-visible, .toc-toggle:focus-visible, .faq-item button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: 3px;
  }
  .stepes-guide a.button-primary, .stepes-guide a.button-primary:visited, .stepes-guide a.button-primary:hover, .stepes-guide a.button-primary:active, .stepes-guide a.button-primary:focus-visible { color: #fff; }
  .button-primary { background: var(--stepes-accent); box-shadow: 0 10px 25px rgba(193, 29, 99, 0.21); }
  .button-primary:hover { background: var(--stepes-accent-dark); }
  .button-secondary { border-color: var(--line-strong); background: #fff; color: var(--ink); }
  .button-secondary:hover { border-color: #c9bec8; background: #fffafb; }

  .hero-meta { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 30px; color: var(--muted); font-size: 14px; }
  .hero-meta span { display: inline-flex; align-items: center; gap: 8px; }
  .hero-meta svg { color: var(--stepes-accent); }

  .hero-visual {
    min-height: 520px;
    position: relative;
    border: 1px solid #eadfe6;
    border-radius: 30px;
    background:
      radial-gradient(circle at 16% 18%, rgba(193, 29, 99, 0.09), transparent 28%),
      radial-gradient(circle at 90% 16%, rgba(159, 29, 85, 0.08), transparent 25%),
      linear-gradient(145deg, #fff 0%, #fef8fb 100%);
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .hero-visual::before {
    content: "";
    position: absolute;
    inset: 64px 52px 132px;
    border: 1px dashed rgba(193, 29, 99, 0.22);
    border-radius: 50%;
  }
  .visual-kicker { position: absolute; left: 32px; top: 26px; color: var(--stepes-accent); font-size: 11px; font-weight: 600; letter-spacing: 0.14em; }
  .visual-center {
    width: 220px;
    padding: 28px 26px;
    position: absolute;
    left: 50%;
    top: 49%;
    transform: translate(-50%, -50%);
    border: 1px solid #e5d8e1;
    border-radius: 24px;
    background: #fff;
    text-align: center;
    box-shadow: 0 14px 30px rgba(53, 27, 45, 0.09);
    z-index: 2;
  }
  .visual-center strong, .visual-center small { display: block; }
  .visual-center strong { margin-top: 12px; font-size: 18px; font-weight: 600; line-height: 1.3; }
  .visual-center small { margin-top: 5px; color: var(--muted); font-size: 14px; }
  .visual-icon { width: 52px; height: 52px; margin: 0 auto; display: grid; place-items: center; border-radius: 18px; background: var(--stepes-blush); color: var(--stepes-accent); }
  .visual-node { min-height: 54px; padding: 13px 16px; position: absolute; display: flex; align-items: center; gap: 10px; border: 1px solid #e9e1e7; border-radius: 18px; background: rgba(255,255,255,.96); color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.25; box-shadow: 0 9px 24px rgba(47, 28, 40, 0.07); z-index: 2; }
  .visual-node svg { color: var(--stepes-accent); flex: 0 0 auto; }
  .node-keywords { left: 30px; top: 126px; }
  .node-content { right: 28px; top: 122px; }
  .node-links { left: 34px; bottom: 138px; }
  .node-signals { right: 28px; bottom: 136px; }
  .visual-outcome { position: absolute; left: 34px; right: 34px; bottom: 28px; padding: 17px 20px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-radius: 18px; background: var(--dark); color: #fff; }
  .visual-outcome span { color: var(--stepes-light-magenta); font-size: 11px; font-weight: 600; letter-spacing: 0.13em; }
  .visual-outcome strong { max-width: 330px; font-size: 16px; line-height: 1.4; font-weight: 600; text-align: right; }

  .summary-section { background: var(--surface-soft); }
  .summary-grid { display: grid; grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr); gap: 88px; align-items: start; }
  .summary-heading { position: sticky; top: 120px; }
  .summary-heading p { margin-top: 20px; max-width: 440px; font-size: 18px; }
  .takeaway-list { border-top: 1px solid var(--line); }
  .takeaway-item { padding: 26px 0; display: grid; grid-template-columns: 14px minmax(0, 1fr); gap: 18px; border-bottom: 1px solid var(--line); }
  .takeaway-mark { width: 8px; height: 8px; margin-top: 8px; border-radius: 50%; background: var(--stepes-accent); }
  .takeaway-item h3 { font-size: 20px; }
  .takeaway-item p { margin-top: 8px; font-size: 16px; line-height: 1.6; }

  .toc-section { padding-top: 80px; padding-bottom: 80px; }
  .toc-topline { display: flex; align-items: end; justify-content: space-between; gap: 32px; margin-bottom: 34px; }
  .toc-topline p { margin-top: 12px; max-width: 720px; font-size: 18px; }
  .toc-toggle { display: none; min-height: 46px; padding: 10px 15px; border: 1px solid var(--line-strong); border-radius: 999px; background: #fff; color: var(--ink); font-size: 16px; font-weight: 600; cursor: pointer; }
  .toc-toggle svg { transition: transform 160ms ease; }
  .toc-toggle[aria-expanded="true"] svg { transform: rotate(180deg); }
  .toc-grid { padding: 34px 36px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 34px; border: 1px solid var(--line); border-radius: 28px; background: #fff; box-shadow: 0 14px 36px rgba(48, 30, 43, 0.06); }
  .toc-group + .toc-group { border-left: 1px solid var(--line); padding-left: 34px; }
  .toc-group h3 { margin-bottom: 16px; font-size: 18px; }
  .toc-group ul { margin: 0; padding: 0; list-style: none; }
  .toc-group li + li { margin-top: 12px; }
  .toc-group a { display: grid; grid-template-columns: 12px minmax(0, 1fr); gap: 10px; align-items: start; color: var(--ink-soft); font-size: 16px; line-height: 1.45; text-decoration: none; }
  .toc-marker { width: 6px; height: 6px; margin-top: 8px; border-radius: 50%; background: #8d858d; transition: background 160ms ease, transform 160ms ease; }
  .toc-group a:hover, .toc-group li.is-active a { color: var(--stepes-accent); }
  .toc-group a:hover .toc-marker, .toc-group li.is-active .toc-marker { background: var(--stepes-accent); transform: scale(1.12); }

  .article-section { background: #fff; }
  .soft-section { background: var(--surface-soft); }
  .section-lead { margin-top: 20px; color: #2b232b; font-size: 20px; line-height: 1.62; }
  .source-note { margin-top: 22px; padding-left: 20px; border-left: 3px solid #d8a4bb; font-size: 16px; line-height: 1.65; }
  .inline-source { display: inline-flex; gap: 5px; align-items: baseline; color: var(--stepes-accent); font-weight: 600; text-decoration: none; }
  .inline-source:hover { color: var(--stepes-accent-dark); }
  .inline-source span { font-size: 14px; }
  .chapter-continuation { margin-top: 58px; }
  .chapter-link-wrap { margin-top: 30px; }
  .arrow-link { min-height: 44px; display: inline-flex; align-items: center; gap: 8px; color: var(--stepes-accent); font-size: 16px; font-weight: 600; line-height: 1.3; text-decoration: none; }
  .arrow-link svg { transition: transform 160ms ease; }
  .arrow-link:hover { color: var(--stepes-accent-dark); }
  .arrow-link:hover svg { transform: translateX(3px); }

  .definition-band { margin: 42px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .definition-band > div { padding: 24px 0; display: grid; grid-template-columns: 160px minmax(0, 1fr); gap: 24px; align-items: start; }
  .definition-band > div + div { border-top: 1px solid var(--line); }
  .definition-band span { color: var(--stepes-accent); font-size: 16px; font-weight: 600; letter-spacing: 0.06em; line-height: 1.4; }
  .definition-band strong { color: var(--ink); font-size: 18px; line-height: 1.5; font-weight: 600; }

  .framework-section { background: var(--dark); color: #fff; }
  .framework-section h2, .framework-section h3 { color: #fff; }
  .framework-heading { max-width: 840px; }
  .framework-heading p { margin-top: 22px; color: #d9cfd6; font-size: 19px; }
  .framework-grid { margin-top: 52px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.13); border-left: 1px solid rgba(255,255,255,.13); }
  .framework-stage { min-height: 220px; padding: 30px 28px; display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; border-right: 1px solid rgba(255,255,255,.13); border-bottom: 1px solid rgba(255,255,255,.13); }
  .framework-number { color: var(--stepes-light-magenta); font-size: 14px; font-weight: 600; letter-spacing: 0.12em; }
  .framework-stage h3 { font-size: 22px; }
  .framework-stage p { margin-top: 12px; color: #d9cfd6; font-size: 16px; line-height: 1.62; }
  .framework-loop { margin-top: 26px; display: flex; align-items: center; justify-content: center; gap: 12px; color: #d9cfd6; font-size: 16px; }
  .framework-loop svg { color: var(--stepes-light-magenta); }

  .check-list { margin: 22px 0 0; padding: 0; list-style: none; display: grid; gap: 13px; }
  .check-list.columns-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 34px; }
  .check-list li { display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 10px; align-items: start; color: var(--ink-soft); font-size: 16px; line-height: 1.55; }
  .check-marker { width: 22px; height: 22px; margin-top: 1px; display: grid; place-items: center; border-radius: 50%; background: var(--stepes-blush); color: var(--stepes-accent); }

  .module-heading { margin-bottom: 28px; }
  .module-heading h3 { margin-top: 0; }
  .module-heading .eyebrow + h3 { margin-top: 0; }
  .split-heading { display: flex; justify-content: space-between; align-items: end; gap: 50px; }
  .split-heading > p { max-width: 500px; font-size: 17px; }

  .table-shell { border: 1px solid var(--line); border-radius: 24px; background: #fff; overflow: hidden; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { padding: 18px 20px; border-bottom: 1px solid var(--line); border-right: 1px solid var(--line); text-align: left; vertical-align: top; font-size: 16px; line-height: 1.55; overflow-wrap: anywhere; }
  th:last-child, td:last-child { border-right: 0; }
  tbody tr:last-child td { border-bottom: 0; }
  th { background: #faf8fa; color: var(--ink); font-weight: 600; }
  td { color: var(--ink-soft); }
  td strong { color: var(--ink); font-weight: 600; }
  td code { color: var(--stepes-accent-deep); font-size: 16px; overflow-wrap: anywhere; word-break: break-word; }
  .architecture-table table { min-width: 1100px; }
  .architecture-table { overflow-x: auto; }
  .architecture-table th:nth-child(1) { width: 17%; }
  .architecture-table th:nth-child(2) { width: 14%; }
  .architecture-table th:nth-child(3), .architecture-table th:nth-child(4), .architecture-table th:nth-child(5) { width: 23%; }

  .split-editorial { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, .72fr); gap: 72px; align-items: start; }
  .seo-brief-panel { padding: 34px; border: 1px solid #eadde5; border-radius: 28px; background: #fff; box-shadow: 0 16px 40px rgba(46, 28, 40, 0.07); }
  .seo-brief-panel h3 { margin-top: 0; }
  .seo-brief-panel p { margin-top: 14px; font-size: 16px; }
  .seo-brief-panel .check-list { margin-top: 24px; }

  .intent-list { margin-top: 24px; border-top: 1px solid var(--line); }
  .intent-list > div { padding: 18px 0; display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 20px; border-bottom: 1px solid var(--line); }
  .intent-list strong { font-size: 16px; }
  .intent-list span { color: var(--ink-soft); font-size: 16px; }

  .example-module { margin-top: 68px; padding: 34px; border-radius: 28px; background: var(--dark); color: #fff; }
  .example-label { margin-bottom: 22px; color: var(--stepes-light-magenta); font-size: 11px; font-weight: 600; letter-spacing: 0.13em; }
  .example-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.13); border-left: 1px solid rgba(255,255,255,.13); }
  .example-grid > div { min-height: 142px; padding: 22px; border-right: 1px solid rgba(255,255,255,.13); border-bottom: 1px solid rgba(255,255,255,.13); }
  .example-grid span, .example-grid strong { display: block; }
  .example-grid span { color: var(--stepes-light-magenta); font-size: 16px; font-weight: 600; letter-spacing: 0.015em; line-height: 1.4; }
  .example-grid strong { margin-top: 12px; color: #fff; font-size: 16px; line-height: 1.55; font-weight: 600; }
  .example-wide { grid-column: span 3; min-height: auto !important; }

  .routing-module { margin-top: 58px; }
  .routing-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .routing-grid article { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .route-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 16px; background: var(--stepes-blush); color: var(--stepes-accent); }
  .routing-grid h3 { margin-top: 20px; }
  .routing-grid p { margin-top: 12px; font-size: 16px; }
  .routing-grid ul { margin: 20px 0 0; padding: 0; list-style: none; }
  .routing-grid li { position: relative; padding-left: 18px; color: var(--ink-soft); font-size: 16px; line-height: 1.55; }
  .routing-grid li + li { margin-top: 9px; }
  .routing-grid li::before { content: ""; width: 6px; height: 6px; position: absolute; left: 0; top: .65em; border-radius: 50%; background: var(--stepes-accent); }

  .technical-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(500px, 1.1fr); gap: 70px; align-items: center; }
  .code-panel { border: 1px solid #e8e1e6; border-radius: 24px; background: #1e171c; overflow: hidden; box-shadow: var(--shadow); }
  .code-panel-top { min-height: 48px; padding: 12px 18px; display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid rgba(255,255,255,.12); color: #d7ccd4; font-size: 14px; }
  .code-panel-top span:first-child { display: inline-flex; align-items: center; gap: 8px; color: var(--stepes-light-magenta); font-weight: 600; }
  .code-panel pre { margin: 0; padding: 26px; overflow-x: auto; color: #f5edf2; font-size: 16px; line-height: 1.75; white-space: pre; }

  .link-section-grid { align-items: center; }
  .cluster-diagram { min-height: 520px; position: relative; border: 1px solid #e8dfe5; border-radius: 28px; background: linear-gradient(145deg, #fff, #fdf5f9); overflow: hidden; }
  .cluster-label { position: absolute; left: 28px; top: 24px; color: var(--stepes-accent); font-size: 11px; font-weight: 600; letter-spacing: .13em; }
  .cluster-hub { width: 210px; min-height: 94px; padding: 20px; position: absolute; left: 50%; top: 46%; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; gap: 12px; border-radius: 24px; background: var(--dark); color: #fff; font-size: 17px; font-weight: 600; text-align: center; z-index: 2; }
  .cluster-hub svg { color: var(--stepes-light-magenta); }
  .cluster-node { width: 180px; min-height: 72px; padding: 16px; position: absolute; display: grid; place-items: center; border: 1px solid #e5d8e1; border-radius: 20px; background: #fff; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.35; text-align: center; box-shadow: 0 10px 25px rgba(50, 28, 43, .06); z-index: 2; }
  .node-a { left: 24px; top: 112px; }
  .node-b { right: 24px; top: 112px; }
  .node-c { left: 24px; bottom: 98px; }
  .node-d { right: 24px; bottom: 98px; }
  .cluster-diagram::before, .cluster-diagram::after { content: ""; position: absolute; left: 50%; top: 46%; width: 66%; height: 1px; background: #d7c8d2; transform: translate(-50%, -50%); }
  .cluster-diagram::after { transform: translate(-50%, -50%) rotate(90deg); }
  .cluster-caption { position: absolute; left: 24px; right: 24px; bottom: 24px; color: var(--muted); font-size: 16px; line-height: 1.5; text-align: center; }

  .validation-grid { margin-top: 54px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .validation-group { padding: 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .validation-title { display: flex; align-items: center; gap: 14px; }
  .validation-title > span { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 14px; background: var(--stepes-blush); color: var(--stepes-accent); }
  .validation-title h3 { font-size: 22px; }

  .responsibility-table { overflow-x: auto; }
  .responsibility-table table { min-width: 1180px; }
  .responsibility-table th:first-child { width: 19%; }
  .responsibility-table th:not(:first-child) { width: 16.2%; }

  .measure-grid { display: grid; grid-template-columns: minmax(300px, .72fr) minmax(0, 1.28fr); gap: 82px; align-items: start; }
  .measure-heading { position: sticky; top: 120px; }
  .measure-columns { border-top: 1px solid var(--line); }
  .measure-columns article { padding: 30px 0; display: grid; grid-template-columns: 48px minmax(0, 1fr); column-gap: 18px; border-bottom: 1px solid var(--line); }
  .measure-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 15px; background: var(--stepes-blush); color: var(--stepes-accent); }
  .measure-columns h3 { grid-column: 2; align-self: center; font-size: 22px; }
  .measure-columns p { grid-column: 2; margin-top: 10px; font-size: 16px; }
  .cadence-band { margin-top: 64px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .cadence-band > div { padding: 28px 24px; }
  .cadence-band > div + div { border-left: 1px solid var(--line); }
  .cadence-band span, .cadence-band strong { display: block; }
  .cadence-band span { color: var(--stepes-accent); font-size: 16px; font-weight: 600; letter-spacing: .06em; line-height: 1.4; }
  .cadence-band strong { margin-top: 12px; color: var(--ink); font-size: 16px; line-height: 1.5; font-weight: 600; }

  .failure-table th:first-child, .failure-table td:first-child { width: 39%; }

  .action-plan { margin-top: 54px; border-top: 1px solid var(--line); }
  .action-group { padding: 34px 0; display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 52px; border-bottom: 1px solid var(--line); }
  .action-group-heading { display: flex; align-items: baseline; gap: 18px; }
  .action-group-heading > span { color: var(--stepes-accent); font-size: 14px; font-weight: 600; letter-spacing: .12em; }
  .action-group-heading h3 { font-size: 22px; }
  .action-group .check-list { margin-top: 0; }

  .faq-shell { display: grid; grid-template-columns: minmax(260px, .58fr) minmax(0, 1.42fr); gap: 74px; align-items: start; }
  .faq-heading p { margin-top: 16px; font-size: 18px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item h3 { font-size: 18px; }
  .faq-item button { width: 100%; min-width: 0; min-height: 72px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 0; background: transparent; color: var(--ink); font-size: 18px; font-weight: 600; text-align: left; cursor: pointer; }
  .faq-item button > span:first-child { min-width: 0; overflow-wrap: anywhere; }
  .faq-icon { width: 32px; min-width: 32px; max-width: 32px; height: 32px; padding: 0; flex: 0 0 32px; display: grid; place-items: center; border: 1px solid var(--line-strong); border-radius: 50%; color: var(--stepes-accent); font-size: 22px; font-weight: 400; line-height: 1; transition: background 160ms ease; }
  .faq-icon > span { display: block; transition: transform 160ms ease; }
  .faq-icon.is-open { background: var(--stepes-blush); }
  .faq-icon.is-open > span { transform: rotate(45deg); }
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 180ms ease; }
  .faq-answer > p { overflow: hidden; margin: 0; font-size: 16px; line-height: 1.7; }
  .faq-answer.is-open { grid-template-rows: 1fr; }
  .faq-answer.is-open > p { padding: 0 54px 24px 0; }

  .sources-section { background: #fff; }
  .sources-layout { display: grid; grid-template-columns: minmax(280px, .65fr) minmax(0, 1.35fr); gap: 74px; align-items: start; }
  .sources-heading p { margin-top: 16px; font-size: 18px; }
  .sources-list { border-top: 1px solid var(--line); }
  .sources-list article { padding: 24px 0; display: grid; grid-template-columns: minmax(250px, .75fr) minmax(0, 1.25fr); gap: 36px; border-bottom: 1px solid var(--line); }
  .sources-list a { color: var(--stepes-accent); font-size: 16px; font-weight: 600; line-height: 1.45; text-decoration: none; }
  .sources-list a:hover { color: var(--stepes-accent-dark); }
  .sources-list span { display: block; margin-top: 5px; color: var(--muted); font-size: 14px; }
  .sources-list p { font-size: 16px; line-height: 1.6; }

  .conclusion-section { padding-top: 80px; padding-bottom: 80px; background: var(--surface-soft); }
  .conclusion-copy { text-align: center; }
  .conclusion-copy .section-lead { max-width: 800px; margin-left: auto; margin-right: auto; }
  .conclusion-copy p:last-child { max-width: 760px; margin-left: auto; margin-right: auto; }

  .related-section { background: #fff; }
  .related-heading { margin-bottom: 36px; display: flex; align-items: end; justify-content: space-between; gap: 36px; }
  .related-heading p { margin-top: 14px; font-size: 18px; }
  .related-heading-actions { display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 8px 24px; }
  .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .related-item { min-height: 290px; padding: 28px; display: flex; flex-direction: column; align-items: flex-start; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .related-category { color: var(--stepes-accent); font-size: 11px; font-weight: 600; letter-spacing: .12em; }
  .related-title { margin-top: 14px; display: inline-flex; align-items: flex-start; gap: 10px; color: var(--ink); font-size: 21px; line-height: 1.35; font-weight: 600; text-decoration: none; }
  .related-title span { min-width: 0; overflow-wrap: anywhere; }
  .related-title svg { margin-top: 5px; flex: 0 0 auto; color: var(--stepes-accent); transition: transform 160ms ease; }
  .related-title:hover { color: var(--stepes-accent); }
  .related-title:hover svg { transform: translateX(3px); }
  .related-item p { margin-top: 12px; font-size: 16px; line-height: 1.58; }

  .final-cta { padding-top: 80px; padding-bottom: 96px; background: #fff; }
  .cta-panel { padding: 54px 58px; display: flex; align-items: center; justify-content: space-between; gap: 54px; border: 1px solid #eadde5; border-radius: 30px; background: linear-gradient(135deg, #fff 0%, var(--stepes-blush) 100%); box-shadow: 0 16px 44px rgba(47, 27, 41, .07); }
  .cta-copy { max-width: 680px; }
  .cta-copy p { margin-top: 18px; font-size: 18px; }
  .cta-actions { min-width: 320px; display: flex; flex-direction: column; align-items: stretch; gap: 12px; }

  @media (max-width: 1180px) {
    .section-shell { padding-left: 40px; padding-right: 40px; }
    .reading-shell { width: min(760px, calc(100% - 80px)); }
    .hero-grid { gap: 48px; }
    .hero-visual { min-height: 500px; }
    .split-editorial { gap: 48px; }
    .technical-grid { grid-template-columns: 1fr; }
    .technical-copy { max-width: 760px; }
    .code-panel { max-width: 900px; }
    .cadence-band { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cadence-band > div:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .cadence-band > div:nth-child(4) { border-top: 1px solid var(--line); }
  }

  @media (max-width: 980px) {
    .section-shell { padding: 80px 24px; }
    .reading-shell { width: min(760px, calc(100% - 48px)); }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero { padding-top: 88px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 820px; }
    .hero-visual { width: min(720px, 100%); min-height: 480px; }
    .summary-grid, .measure-grid, .faq-shell, .sources-layout { grid-template-columns: 1fr; gap: 42px; }
    .summary-heading, .measure-heading { position: static; }
    .toc-toggle { display: inline-flex; align-items: center; gap: 8px; }
    .toc-grid { display: none; grid-template-columns: 1fr; gap: 0; }
    .toc-grid.is-open { display: grid; }
    .toc-group + .toc-group { margin-top: 24px; padding-left: 0; padding-top: 24px; border-left: 0; border-top: 1px solid var(--line); }
    .framework-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .split-editorial { grid-template-columns: 1fr; }
    .seo-brief-panel { max-width: 760px; }
    .example-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .example-wide { grid-column: span 2; }
    .routing-grid { grid-template-columns: 1fr; }
    .routing-grid article { min-height: auto; }
    .cluster-diagram { width: min(720px, 100%); }
    .action-group { grid-template-columns: 210px minmax(0, 1fr); gap: 32px; }
    .sources-list article { grid-template-columns: 1fr; gap: 12px; }
    .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cta-panel { align-items: flex-start; flex-direction: column; }
    .cta-actions { width: 100%; min-width: 0; flex-direction: row; }
    .cta-actions .button { flex: 1; }
  }

  @media (max-width: 768px) {
    .section-shell { padding-top: 72px; padding-bottom: 72px; }
    .reading-shell { width: 100%; }
    .stepes-guide { font-size: 17px; }
    h1 { font-size: 38px; }
    h2 { font-size: 30px; }
    h3 { font-size: 20px; }
    .hero-deck, .section-lead { font-size: 18px; }
    .hero-actions { align-items: stretch; flex-direction: column; }
    .hero-actions .button { width: 100%; }
    .hero-visual { min-height: 560px; }
    .hero-visual::before { inset: 74px 32px 144px; }
    .node-keywords { left: 24px; top: 122px; }
    .node-content { right: 24px; top: 202px; }
    .node-links { left: 24px; bottom: 206px; }
    .node-signals { right: 24px; bottom: 130px; }
    .visual-center { width: 205px; top: 51%; }
    .visual-outcome { left: 24px; right: 24px; flex-direction: column; align-items: flex-start; gap: 8px; }
    .visual-outcome strong { max-width: none; text-align: left; }
    .summary-heading p, .toc-topline p, .faq-heading p, .sources-heading p, .related-heading p, .cta-copy p { font-size: 17px; }
    .toc-topline { align-items: flex-start; }
    .toc-toggle { flex: 0 0 auto; }
    .framework-grid { grid-template-columns: 1fr; }
    .framework-stage { min-height: 0; }
    .framework-loop { flex-wrap: wrap; text-align: center; }
    .check-list.columns-2 { grid-template-columns: 1fr; }
    .split-heading { align-items: flex-start; flex-direction: column; gap: 18px; }
    .table-shell { border-radius: 20px; overflow: visible; border: 0; background: transparent; }
    .table-shell table, .table-shell thead, .table-shell tbody, .table-shell tr, .table-shell th, .table-shell td { display: block; width: 100% !important; min-width: 0; }
    .table-shell thead { position: absolute; width: 1px !important; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    .table-shell tbody { display: grid; gap: 18px; }
    .table-shell tr { border: 1px solid var(--line); border-radius: 20px; background: #fff; overflow: hidden; }
    .table-shell td { padding: 16px 18px; display: grid; grid-template-columns: minmax(110px, .42fr) minmax(0, .58fr); gap: 18px; border-right: 0; border-bottom: 1px solid var(--line); font-size: 16px; overflow-wrap: anywhere; }
    .table-shell td:last-child { border-bottom: 0; }
    .table-shell td::before { content: attr(data-label); color: var(--ink); font-weight: 600; }
    .architecture-table, .responsibility-table { overflow: visible; }
    .architecture-table table, .responsibility-table table { min-width: 0; }
    .example-grid { grid-template-columns: 1fr; }
    .example-wide { grid-column: auto; }
    .technical-grid { gap: 42px; }
    .code-panel pre { font-size: 16px; }
    .validation-grid { grid-template-columns: 1fr; }
    .measure-columns article { grid-template-columns: 46px minmax(0, 1fr); }
    .cadence-band { grid-template-columns: 1fr; }
    .cadence-band > div + div { border-left: 0; border-top: 1px solid var(--line); }
    .action-group { grid-template-columns: 1fr; gap: 18px; }
    .action-group .check-list.columns-2 { grid-template-columns: 1fr; }
    .related-grid { grid-template-columns: 1fr; }
    .related-item { min-height: 0; }
    .related-heading { align-items: flex-start; flex-direction: column; }
    .related-heading-actions { justify-content: flex-start; gap: 4px 20px; }
    .cta-actions { flex-direction: column; }
    .cta-panel { padding: 42px 32px; }
  }

  @media (max-width: 560px) {
    .section-shell { padding-left: 20px; padding-right: 20px; padding-top: 64px; padding-bottom: 64px; }
    .hero { padding-top: 72px; }
    .hero-meta { align-items: flex-start; flex-direction: column; gap: 10px; }
    .hero-visual {
      min-height: 0;
      padding: 26px 22px 22px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-template-areas:
        "kicker kicker"
        "keywords content"
        "center center"
        "links signals"
        "outcome outcome";
      gap: 14px;
      border-radius: 24px;
    }
    .hero-visual::before, .visual-path { display: none; }
    .visual-kicker { grid-area: kicker; position: static; }
    .visual-center { grid-area: center; width: 100%; padding: 24px 20px; position: static; transform: none; }
    .visual-node { min-height: 76px; padding: 14px 12px; position: static; justify-content: center; text-align: center; }
    .node-keywords { grid-area: keywords; }
    .node-content { grid-area: content; }
    .node-links { grid-area: links; }
    .node-signals { grid-area: signals; }
    .visual-outcome { grid-area: outcome; position: static; align-items: flex-start; flex-direction: column; gap: 8px; }
    .visual-outcome strong { max-width: none; text-align: left; }
    .toc-topline { align-items: stretch; flex-direction: column; }
    .toc-toggle { width: 100%; justify-content: center; }
    .toc-grid { padding: 26px 22px; border-radius: 22px; }
    .definition-band > div { grid-template-columns: 1fr; gap: 8px; }
    .framework-stage { padding: 26px 22px; grid-template-columns: 40px minmax(0, 1fr); }
    .example-module { padding: 26px 20px; }
    .example-grid > div { padding: 20px; }
    .seo-brief-panel { padding: 28px 22px; }
    .intent-list > div { grid-template-columns: 1fr; gap: 6px; }
    .table-shell td { grid-template-columns: 1fr; gap: 6px; }
    .code-panel pre { overflow-x: visible; white-space: pre-wrap; overflow-wrap: anywhere; }
    .cluster-diagram {
      min-height: 0;
      padding: 72px 22px 24px;
      display: grid;
      gap: 12px;
      overflow: visible;
    }
    .cluster-label { left: 22px; top: 24px; }
    .cluster-hub, .cluster-node { width: 100%; min-height: 72px; position: static; transform: none; }
    .cluster-hub { order: 0; }
    .cluster-node { min-height: 66px; position: relative; }
    .cluster-node::before { content: ""; width: 1px; height: 12px; position: absolute; left: 50%; top: -13px; background: #d7c8d2; }
    .node-a, .node-b, .node-c, .node-d { left: auto; right: auto; top: auto; bottom: auto; }
    .cluster-diagram::before, .cluster-diagram::after, .cluster-lines { display: none; }
    .cluster-caption { position: static; margin-top: 6px; display: block; font-size: 16px; line-height: 1.5; }
    .validation-group { padding: 26px 22px; }
    .action-group { padding: 28px 0; }
    .faq-item button { align-items: flex-start; min-height: 68px; }
    .faq-answer.is-open > p { padding-right: 0; }
    .cta-panel { padding: 34px 24px; border-radius: 24px; }
  }

  @media (max-width: 360px) {
    h1 { font-size: 38px; }
    h2 { font-size: 30px; }
    .button { padding-left: 18px; padding-right: 18px; }
    .hero-visual { grid-template-columns: 1fr; grid-template-areas: "kicker" "keywords" "content" "center" "links" "signals" "outcome"; }
    .visual-center { width: 100%; }
    .code-panel pre { padding: 22px 18px; }
  }
`;
