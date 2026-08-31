import React, { useEffect, useMemo, useState } from "react";

const CANONICAL =
  "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/";

const colors = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F9E3ED",
  pinkLight: "#F2A7C6",
  ink: "#17171A",
  body: "#3E3C44",
  muted: "#6F6B75",
  line: "#E7E4E8",
  lineDark: "rgba(255,255,255,.16)",
  soft: "#F7F6F8",
  white: "#FFFFFF",
  dark: "#23151D",
};

const tocItems = [
  ["website-translation", "What Is Website Translation?"],
  ["website-localization", "What Is Website Localization?"],
  ["related-terms", "Translation, Localization, Internationalization, and Transcreation"],
  ["detailed-comparison", "Website Translation vs. Localization"],
  ["market-adaptation-framework", "The Website Market Adaptation Framework"],
  ["when-translation-may-be-enough", "When Website Translation May Be Enough"],
  ["when-localization-is-necessary", "When Broader Localization Is Necessary"],
  ["requirements-by-content-type", "Requirements by Website Content Type"],
  ["choose-the-right-level", "How to Choose the Right Localization Level"],
  ["practical-localization-plan", "A Practical Website Localization Plan"],
  ["illustrative-scope", "An Illustrative Localization Scope"],
  ["common-mistakes", "Common Scope Mistakes"],
  ["frequently-asked-questions", "Frequently Asked Questions"],
];

const takeaways = [
  {
    title: "Translation Is the Foundation",
    copy: "Website translation communicates the source content accurately in another language. Localization builds on that linguistic foundation.",
  },
  {
    title: "Localization Expands the Scope",
    copy: "It can adapt messaging, imagery, formats, search strategy, user journeys, transactions, policies, and ongoing market operations.",
  },
  {
    title: "One Scope Rarely Fits the Whole Site",
    copy: "Corporate pages, campaign content, lead forms, e-commerce, support, and legal content often require different levels of adaptation.",
  },
  {
    title: "Business Value and Risk Should Drive Effort",
    copy: "Prioritize the experiences that influence revenue, customer decisions, compliance, safety, brand trust, or long-term market growth.",
  },
  {
    title: "Translation-Only Can Still Be High Quality",
    copy: "A focused scope may still include terminology control, local formatting, metadata, interface text, in-context review, and linguistic QA.",
  },
  {
    title: "Plan for Updates Before Launch",
    copy: "The right localization level also depends on how frequently content changes and how regional versions will remain synchronized.",
  },
];

const termRows = [
  {
    term: "Translation",
    meaning: "Converts meaning from one language into another.",
    focus: "Linguistic accuracy and readability",
  },
  {
    term: "Localization",
    meaning: "Adapts content and digital experiences for a locale or market.",
    focus: "Relevance, usability, and market fit",
  },
  {
    term: "Internationalization",
    meaning: "Prepares code, design, and content structures to support multiple languages and locales.",
    focus: "Technical readiness and scalability",
  },
  {
    term: "Transcreation",
    meaning: "Creatively recreates high-impact messaging for a target audience.",
    focus: "Emotional impact and persuasive intent",
  },
];

const comparisonRows = [
  [
    "Language",
    "Accurate, fluent target-language content",
    "Market-specific vocabulary, tone, register, and conventions",
  ],
  [
    "Terminology",
    "Consistent approved translations",
    "Regional terms and locally preferred product language",
  ],
  [
    "Brand Voice",
    "Preserve source intent and style",
    "Adjust expression to local audience expectations",
  ],
  [
    "Creative Messaging",
    "Translate the intended meaning",
    "Recreate selected high-impact messaging through transcreation",
  ],
  [
    "Images and Media",
    "Translate embedded text, captions, and transcripts",
    "Adapt visuals, examples, voices, and cultural references",
  ],
  [
    "Local Formats",
    "Apply essential language and formatting conventions",
    "Adapt forms, addresses, units, currency, and interactions",
  ],
  [
    "Navigation and UX",
    "Translate interface labels",
    "Adapt information architecture and user journeys",
  ],
  [
    "Products and Offers",
    "Translate descriptions",
    "Reflect regional availability, positioning, pricing, and promotions",
  ],
  [
    "Search Visibility",
    "Translate basic metadata when included",
    "Research local keywords and optimize market-specific search content",
  ],
  [
    "Forms and Transactions",
    "Translate instructions and messages",
    "Adapt fields, validation, checkout, payment, delivery, and support",
  ],
  [
    "Legal Content",
    "Translate approved source materials",
    "Address market-specific policies, disclosures, and review requirements",
  ],
  [
    "Quality Assurance",
    "Linguistic and contextual review",
    "Linguistic, visual, responsive, functional, and market validation",
  ],
  [
    "Ongoing Updates",
    "Translate new and revised source content",
    "Synchronize global content while managing approved regional differences",
  ],
];

const levels = [
  {
    level: "01",
    title: "Language Translation",
    objective: "Comprehension and linguistic accuracy",
    copy: "Make website content understandable, accurate, and consistent in another language.",
    items: [
      "Visible and embedded content",
      "Page titles and metadata",
      "Approved terminology",
      "Translation memory",
      "Linguistic and in-context review",
      "Essential locale formatting",
    ],
    suited: "Stable, factual, low-interaction, globally consistent content",
  },
  {
    level: "02",
    title: "Content Localization",
    objective: "Relevance and market-appropriate communication",
    copy: "Adapt the translated message so it feels natural and persuasive in the intended market.",
    items: [
      "Regional terminology",
      "Tone and messaging adaptation",
      "Local examples and references",
      "Visual adaptation",
      "Localized product positioning",
      "Selective transcreation",
    ],
    suited: "Product pages, marketing content, industry pages, campaigns",
  },
  {
    level: "03",
    title: "Experience Localization",
    objective: "Usability and completion of local customer journeys",
    copy: "Adapt the digital experience so users can interact, convert, transact, and receive support locally.",
    items: [
      "Navigation and information architecture",
      "Forms and validation",
      "Search and account experiences",
      "Checkout and payments",
      "Regional support routes",
      "Responsive and functional testing",
    ],
    suited: "Lead generation, portals, e-commerce, onboarding, support",
  },
  {
    level: "04",
    title: "Market Optimization",
    objective: "Sustainable regional growth and performance",
    copy: "Operate the website as a market-specific growth and customer-experience channel.",
    items: [
      "Local keyword and content strategy",
      "Regional campaigns and landing pages",
      "Market-specific offers and policies",
      "Local analytics and optimization",
      "Regional ownership and governance",
      "Continuous localization",
    ],
    suited: "Priority markets, search-led growth, mature regional operations",
  },
];

const translationIndicators = [
  "The content is informational rather than transactional.",
  "The same products or services are offered in each market.",
  "The source messaging is culturally neutral.",
  "Users follow substantially the same journey.",
  "The website has limited interactive functionality.",
  "Local search is not yet a primary acquisition channel.",
  "Pricing, offers, and policies are globally consistent.",
  "Market-specific regulatory content is limited.",
  "The organization is testing demand before a larger investment.",
  "The audience already understands the company or product category.",
];

const localizationIndicators = [
  "The website is expected to generate leads or revenue.",
  "Organic search is an important regional acquisition channel.",
  "Products, services, prices, or promotions vary by market.",
  "The user journey includes forms, subscriptions, accounts, or checkout.",
  "Local payment, delivery, or return methods matter.",
  "Customer support differs by country or language.",
  "Messaging depends on creativity, emotion, humor, or cultural context.",
  "Regional terminology differs from a direct source-language equivalent.",
  "Local policies, disclosures, or regulated content apply.",
  "The target language creates significant layout or script requirements.",
  "Regional teams produce market-specific campaigns and content.",
  "Content changes frequently and localized sites must remain synchronized.",
];

const contentTypeRows = [
  [
    "Corporate and Company Information",
    "Level 1–2",
    "Accurate messaging, terminology, local relevance, and brand consistency",
  ],
  [
    "Product and Service Pages",
    "Level 2",
    "Regional terminology, benefits, use cases, product availability",
  ],
  [
    "Campaign and Landing Pages",
    "Level 2–4",
    "Creative adaptation, local keywords, offers, and conversion messaging",
  ],
  [
    "Lead-Generation Journeys",
    "Level 3",
    "Forms, consent, routing, validation, and regional follow-up",
  ],
  [
    "E-Commerce and Checkout",
    "Level 3–4",
    "Currency, pricing, payments, delivery, returns, and customer support",
  ],
  [
    "Help and Support Content",
    "Level 1–3",
    "Product terminology, findability, local procedures, and support routes",
  ],
  [
    "Legal and Policy Pages",
    "Market-dependent",
    "Accurate translation, local applicability, and approved legal review",
  ],
  [
    "Multimedia",
    "Level 2–3",
    "Subtitles, voice, on-screen text, visuals, and cultural context",
  ],
  [
    "Dynamic or Frequently Updated Content",
    "Level 1–4",
    "Automation, incremental translation, review routing, and synchronization",
  ],
];

const decisionCriteria = [
  {
    title: "Market Objective",
    copy: "Is the website informing, validating demand, generating leads, completing transactions, or supporting long-term regional growth?",
  },
  {
    title: "Content Criticality",
    copy: "Does the content support browsing, influence conversion, guide customers, define contractual terms, or carry regulated risk?",
  },
  {
    title: "Market Variation",
    copy: "Do terminology, customer priorities, products, pricing, offers, policies, distribution, or support differ locally?",
  },
  {
    title: "Creative Sensitivity",
    copy: "Does the content depend on emotion, humor, idioms, wordplay, local values, tone, or visual conventions?",
  },
  {
    title: "Functional Complexity",
    copy: "Does the experience include search, forms, accounts, subscriptions, checkout, location tools, or personalized content?",
  },
  {
    title: "Search Dependency",
    copy: "Will users arrive through direct channels, search-supported awareness, or a search-led regional growth strategy?",
  },
  {
    title: "Business and Customer Risk",
    copy: "What are the consequences of misunderstanding, failure, brand damage, financial loss, regulatory exposure, or support breakdown?",
  },
  {
    title: "Content Velocity",
    copy: "Is the site rarely updated, revised periodically, or continuously changing across global and regional teams?",
  },
];

const recommendationRows = [
  [
    "Stable, factual, low-interaction, and globally consistent",
    "Level 1 — Language Translation",
  ],
  [
    "Market-relevant messaging with limited functional differences",
    "Level 2 — Content Localization",
  ],
  [
    "Conversion or transaction journey with local UX requirements",
    "Level 3 — Experience Localization",
  ],
  [
    "Strategic market with local search, campaigns, ownership, and frequent updates",
    "Level 4 — Market Optimization",
  ],
];

const planSteps = [
  {
    title: "Inventory the Website by User Journey",
    copy: "Group pages by what customers are trying to accomplish—discover, evaluate, convert, purchase, onboard, receive support, renew, or expand—rather than treating every URL as an isolated unit.",
  },
  {
    title: "Prioritize Markets",
    copy: "Confirm each market's business objective, audience, product availability, channel strategy, regional ownership, legal requirements, launch timing, and update frequency.",
  },
  {
    title: "Assign an Adaptation Level",
    copy: "Apply Levels 1–4 to each page group or journey, and document why the level was selected so stakeholders share the same expectations.",
  },
  {
    title: "Define Market-Specific Requirements",
    copy: "Identify changes involving terminology, tone, imagery, formats, products, pricing, offers, forms, search strategy, policies, support, and regional content.",
  },
  {
    title: "Assign Ownership",
    copy: "Clarify who creates, translates, reviews, approves, publishes, and maintains each content type across localization, marketing, web, SEO, product, engineering, legal, and regional teams.",
  },
  {
    title: "Select the Delivery Workflow",
    copy: "Choose among CMS connectors, translation APIs, website translation proxy technology, file-based delivery, or a hybrid model based on the CMS, content velocity, engineering resources, and governance needs.",
    link: {
      label: "Compare Website Translation Workflows",
      href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
    },
  },
  {
    title: "Plan Quality Review and Testing",
    copy: "Route content through AI translation, professional post-editing, human translation, specialist review, regional approval, in-context review, and functional testing according to visibility, complexity, and risk.",
    link: {
      label: "Plan AI Translation With Human Review",
      href: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
    },
  },
  {
    title: "Plan for Updates Before Launch",
    copy: "Define how new pages, revisions, emergency updates, translation memory reuse, regional exceptions, approvals, releases, and quality monitoring will be managed after launch.",
    link: {
      label: "Build a Continuous Localization Process",
      href: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
    },
  },
];

const scenarioRows = [
  {
    title: "Corporate Information",
    level: "Level 1",
    copy: "Company, leadership, investor, and global responsibility pages receive professional translation, approved terminology, local formats, linguistic review, and basic in-context QA.",
  },
  {
    title: "Product and Industry Pages",
    level: "Level 2",
    copy: "Core product content adds regional terminology, locally relevant use cases, adapted proof points, market-appropriate calls to action, and reviewed visuals.",
  },
  {
    title: "Demo-Request Journey",
    level: "Level 3",
    copy: "The form experience includes localized fields, local consent language, appropriate validation, routing to regional teams, local contact details, and functional testing.",
  },
  {
    title: "Regional Search Landing Pages",
    level: "Level 4",
    copy: "Priority landing pages add local keyword research, market-specific content, localized metadata, internal linking, performance tracking, and ongoing regional optimization.",
  },
];

const mistakes = [
  {
    title: "Treating Translation and Localization as Mutually Exclusive",
    problem: "Teams try to select one service and overlook the fact that every localized website still depends on effective translation.",
    better: "Define the linguistic foundation first, then identify where cultural, functional, search, or market adaptation is required.",
  },
  {
    title: "Assigning One Scope to the Entire Website",
    problem: "Low-value informational pages may be overworked while high-value conversion journeys remain under-localized.",
    better: "Assign scope by market, content group, user journey, business value, and risk.",
  },
  {
    title: "Translating Only Visible Page Copy",
    problem: "Navigation, metadata, interface text, forms, notifications, graphics, and dynamic content may remain untranslated.",
    better: "Complete a content inventory that includes every customer-facing and search-facing component.",
  },
  {
    title: "Translating Keywords Directly",
    problem: "A linguistically correct translation may not match the phrases customers use when searching.",
    better: "Conduct market-specific keyword and search-intent research before optimizing important pages.",
  },
  {
    title: "Adapting Creative Content but Ignoring Functionality",
    problem: "The website may sound local while forms, checkout, payments, or support processes remain unusable.",
    better: "Evaluate the entire customer journey, not only the page copy.",
  },
  {
    title: "Applying the Same Review Level to Every Page",
    problem: "Resources are spent on low-risk content while critical pages receive insufficient expertise or approval.",
    better: "Route review according to visibility, subject matter, business impact, and risk.",
  },
  {
    title: "Treating Launch as the End of Localization",
    problem: "Regional sites become outdated as source content changes, campaigns launch, and products evolve.",
    better: "Define ownership, update workflows, review thresholds, and synchronization before publication.",
  },
];

const faqs = [
  {
    q: "Is Website Localization the Same as Website Translation?",
    a: "No. Website translation converts content into another language. Website localization includes translation and may also adapt terminology, tone, imagery, formats, navigation, functionality, search strategy, products, policies, and customer journeys for a specific locale or market.",
  },
  {
    q: "Does Every Website Need Full Localization?",
    a: "No. The appropriate scope depends on the website's purpose, audience, market importance, functionality, search strategy, and risk. Stable informational content may need only translation and limited locale adjustments, while revenue-generating or transactional experiences may require broader localization. Different parts of the same website can use different adaptation levels.",
  },
  {
    q: "Can a Website Be Translated Without Being Localized?",
    a: "Yes. A translation-focused scope can be appropriate for factual, stable, and globally consistent content. It may still require terminology management, local formatting, metadata translation, interface coverage, layout checks, and linguistic quality assurance.",
  },
  {
    q: "What Parts of a Website Should Be Localized First?",
    a: "Start with the journeys that carry the greatest customer or business value, such as priority product pages, regional landing pages, lead-generation forms, e-commerce and checkout, account creation, onboarding, customer support, and regulated or high-risk content.",
  },
  {
    q: "Is Transcreation Part of Website Localization?",
    a: "It can be. Transcreation is especially useful for slogans, headlines, campaign concepts, and other creative content whose persuasive or emotional effect cannot be preserved through direct translation alone. It should be used selectively rather than applied to every page.",
  },
  {
    q: "What Is Website Internationalization?",
    a: "Website internationalization prepares the design, code, content model, and publishing environment to support multiple languages and locales efficiently. It can include support for different scripts, text expansion, right-to-left layouts, locale formats, character encoding, content separation, and scalable language routing.",
  },
  {
    q: "Does Website Localization Include SEO?",
    a: "It should when organic search is important to the target market. Multilingual SEO may include local keyword research, search-intent analysis, localized metadata, regional landing pages, URL planning, internal links, and appropriate language or market targeting signals.",
  },
  {
    q: "Can AI Translate and Localize a Website?",
    a: "AI can accelerate website translation and help process large or frequently changing content volumes. Human linguists, subject-matter experts, regional reviewers, marketers, or legal specialists may still be required for high-impact content, creative adaptation, regulated material, terminology validation, and market-specific decisions.",
  },
  {
    q: "How Much Does Website Localization Cost?",
    a: "Cost depends on content volume, number of languages, adaptation level, content repetition, translation memory reuse, AI and human-review models, CMS integration, multilingual SEO, graphics, multimedia, testing, regional review, and update frequency. A short but highly interactive website may require more effort than a larger informational site.",
    link: {
      label: "Review the Translation Cost Guide",
      href: "https://www.stepes.com/resources/translation-cost-guide/",
    },
  },
  {
    q: "How Long Does Website Translation or Localization Take?",
    a: "Timing depends on content volume, languages, technical workflow, review requirements, market adaptation, testing, and stakeholder availability. A phased launch can reduce time to market by prioritizing the most important pages and customer journeys first.",
  },
  {
    q: "How Do Companies Keep Localized Websites Current?",
    a: "Organizations can combine content-change detection, incremental translation, translation memory, terminology management, automated routing, risk-based human review, regional approval, synchronized releases, and ongoing linguistic and functional QA.",
  },
  {
    q: "Should Every Market Receive the Same Localization Scope?",
    a: "No. Market priority, customer behavior, products, channels, regulations, search opportunity, and regional resources can differ substantially. A company may operate a fully optimized website in one strategic market while providing translated informational content in another.",
  },
];

const relatedResources = [
  {
    title: "How to Translate a Website",
    copy: "Plan the complete website translation journey from content assessment and workflow selection through SEO, QA, launch, and updates.",
    href: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    title: "Website Translation Workflows",
    copy: "Compare CMS connectors, translation APIs, website translation proxy technology, and file-based delivery models.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    title: "Multilingual SEO Guide",
    copy: "Connect localized content with local keywords, search intent, metadata, URL architecture, internal links, and regional performance.",
    href: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
  {
    title: "AI Website Translation With Human Review",
    copy: "Route different website content types through AI translation, professional post-editing, specialist review, and quality validation.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    title: "Website Localization Testing Checklist",
    copy: "Review linguistic, visual, responsive, functional, right-to-left, and market-specific requirements before launch.",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    title: "Continuous Website Localization",
    copy: "Build a repeatable process for detecting changes, translating updates, managing regional exceptions, and keeping sites synchronized.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
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
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none" }}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LevelBadge({ value }) {
  return (
    <svg
      className="visual-level-number"
      viewBox="0 0 44 44"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="22" cy="22" r="21.25" fill="#FFFFFF" stroke="#EADAE2" strokeWidth="1" />
      <text
        x="22"
        y="23"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={colors.magenta}
        fontSize="12"
        fontWeight="600"
        fontFamily='Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
      >
        {value}
      </text>
    </svg>
  );
}

function ScopeIcon({ index }) {
  const paths = [
    <>
      <path d="M5 7h14M5 12h10M5 17h7" />
      <path d="M18 14v6M15 17h6" />
    </>,
    <>
      <path d="M4 18 10 5l4 9 2-4 4 8" />
      <path d="M6 18h12" />
    </>,
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M4 9h16M8 14h3M14 14h2" />
    </>,
    <>
      <path d="M4 17h16M6 14l4-4 3 3 5-6" />
      <path d="m15 7 3-1-1 3" />
    </>,
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="m10 10 4 4" />
    </>,
    <>
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8v4l3 2" />
    </>,
    <>
      <path d="M12 3 4.5 6v5c0 4.5 3 8 7.5 10 4.5-2 7.5-5.5 7.5-10V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </>,
    <>
      <path d="M5 7h14v10H5z" />
      <path d="M8 4v3M16 4v3M8 20v-3M16 20v-3" />
    </>,
  ];

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[index % paths.length]}
      </g>
    </svg>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function MobileComparisonCards({ rows, labels }) {
  return (
    <div className="mobile-records" aria-label="Mobile comparison view">
      {rows.map((row) => (
        <article className="mobile-record" key={row[0]}>
          <h3>{row[0]}</h3>
          {row.slice(1).map((value, index) => (
            <div className="mobile-field" key={`${row[0]}-${labels[index]}`}>
              <span className="mobile-field-label">{labels[index]}</span>
              <p>{value}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}

function FAQItem({ item, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="faq-button"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="faq-icon" aria-hidden="true">
          <ChevronIcon open={open} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="faq-panel"
        hidden={!open}
      >
        <p>{item.a}</p>
        {item.link ? (
          <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink>
        ) : null}
      </div>
    </div>
  );
}

export default function WebsiteTranslationVsLocalizationWireframe() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState(tocItems[0][0]);
  const [openFaq, setOpenFaq] = useState(0);

  const tocIds = useMemo(() => tocItems.map(([id]) => id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -68% 0px", threshold: [0, 0.1, 0.4] }
    );

    tocIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocIds]);

  const handleAnchorClick = (event, id) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
    setTocOpen(false);
  };

  return (
    <main className="wf-page">
      <style>{styles}</style>

      <section className="guide-hero" aria-labelledby="page-title">
        <div className="wf-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">LOCALIZATION GUIDE</p>
            <h1 id="page-title">Website Translation vs. Localization</h1>
            <p className="hero-deck">
              Understand when language translation is sufficient, when broader market
              adaptation is required, and how to choose the right scope for every website,
              audience, and target market.
            </p>
            <div className="hero-actions" aria-label="Guide actions">
              <a
                className="btn btn-primary"
                href={`${CANONICAL}#detailed-comparison`}
                onClick={(event) => handleAnchorClick(event, "detailed-comparison")}
              >
                Compare the Options
                <ArrowIcon />
              </a>
              <a
                className="btn btn-secondary"
                href={`${CANONICAL}#market-adaptation-framework`}
                onClick={(event) => handleAnchorClick(event, "market-adaptation-framework")}
              >
                View the Framework
              </a>
            </div>
            <div className="hero-meta" aria-label="Guide contents">
              <span>4 adaptation levels</span>
              <span>Decision matrix</span>
              <span>Content-type guidance</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Website market adaptation preview">
            <div className="visual-browser">
              <div className="browser-bar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-content">
                <div className="visual-heading">
                  <strong>From Language Translation to Market Experience</strong>
                  <span>Four practical levels of website adaptation</span>
                </div>
                <div className="visual-layers">
                  {levels.map((level, index) => (
                    <div className={`visual-layer level-${index + 1}`} key={level.level}>
                      <LevelBadge value={level.level} />
                      <div>
                        <strong>{level.title}</strong>
                        <span>{level.objective}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="visual-caption">
                  <CheckIcon />
                  <strong>Different website areas can use different levels.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="summary-title">
        <div className="wf-shell">
          <div className="summary-panel">
            <div className="summary-intro">
              <p className="eyebrow">AT A GLANCE</p>
              <h2 id="summary-title">The Practical Difference</h2>
              <p>
                Website translation changes language. Website localization adapts the
                wider combination of content, interface, functionality, and market
                strategy. The strongest programs decide how much adaptation each journey
                requires rather than assigning one scope to the entire site.
              </p>
            </div>
            <div className="summary-takeaways">
              {takeaways.map((item) => (
                <article className="summary-item" key={item.title}>
                  <span className="summary-mark" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="summary-principle">
              <span>Translate for understanding.</span>
              <strong>Localize for relevance, usability, conversion, and market performance.</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="wf-shell toc-mobile-wrap">
        <div className="toc-mobile">
          <button
            type="button"
            className="toc-mobile-button"
            aria-expanded={tocOpen}
            aria-controls="mobile-toc-list"
            onClick={() => setTocOpen((value) => !value)}
          >
            <span>
              <small>IN THIS GUIDE</small>
              <strong>{tocItems.find(([id]) => id === activeId)?.[1]}</strong>
            </span>
            <ChevronIcon open={tocOpen} />
          </button>
          <nav id="mobile-toc-list" className="toc-mobile-list" hidden={!tocOpen}>
            {tocItems.map(([id, label]) => (
              <a
                key={id}
                href={`${CANONICAL}#${id}`}
                className={activeId === id ? "is-active" : ""}
                onClick={(event) => handleAnchorClick(event, id)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="wf-shell article-layout">
        <aside className="toc-rail" aria-label="Guide contents">
          <div className="toc-sticky">
            <p className="toc-title">In This Guide</p>
            <nav>
              {tocItems.map(([id, label]) => (
                <a
                  key={id}
                  href={`${CANONICAL}#${id}`}
                  className={activeId === id ? "is-active" : ""}
                  aria-current={activeId === id ? "location" : undefined}
                  onClick={(event) => handleAnchorClick(event, id)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="toc-service-link">
              <span>Ready to define your scope?</span>
              <EditorialLink href="https://www.stepes.com/website-translation-services/">
                Website Translation Services
              </EditorialLink>
            </div>
          </div>
        </aside>

        <article className="article-content">
          <section id="website-translation" className="article-section anchor-section">
            <h2>What Is Website Translation?</h2>
            <p className="section-lead">
              Website translation converts website content from a source language into one
              or more target languages while preserving its meaning, purpose, terminology,
              and intended brand voice.
            </p>
            <p>
              A professional website translation scope includes more than visible paragraphs.
              Relevant content can include headlines, menus, navigation labels, buttons,
              calls to action, form instructions, validation messages, notifications, image
              text, captions, transcripts, accessibility text, page titles, meta descriptions,
              downloads, and dynamically generated content.
            </p>
            <p>
              Effective translation should read as natural target-language communication
              rather than a word-for-word reproduction. It may involve approved terminology,
              translation memory, language-specific style guidance, subject-matter expertise,
              linguistic review, and in-context quality assurance.
            </p>
            <div className="editorial-callout">
              <span className="callout-label">QUALITY NOTE</span>
              <p>
                A translation-focused project can still include local punctuation, dates,
                number formats, units, metadata, interface coverage, and layout checks. A
                narrower scope should never mean literal, incomplete, or unreviewed output.
              </p>
            </div>
            <h3>What Translation Does Not Automatically Address</h3>
            <ul className="text-list">
              <li>Whether the original message is persuasive or appropriate for the market</li>
              <li>Whether imagery and cultural references will resonate locally</li>
              <li>Whether translated keywords match how customers actually search</li>
              <li>Whether products, prices, offers, and policies differ by region</li>
              <li>Whether forms and user journeys follow local conventions</li>
              <li>Whether payment, delivery, or support options meet local expectations</li>
              <li>Whether regional regulatory or disclosure requirements apply</li>
              <li>How ongoing market-specific content will be managed after launch</li>
            </ul>
          </section>

          <section id="website-localization" className="article-section anchor-section">
            <h2>What Is Website Localization?</h2>
            <p className="section-lead">
              Website localization adapts translated content and the surrounding digital
              experience so the site is relevant, usable, credible, and operationally
              appropriate for a particular locale or market.
            </p>
            <p>
              A locale usually represents a combination of language and regional conventions.
              English for the United States, the United Kingdom, and Australia shares a
              language but can differ in vocabulary, spelling, dates, currency, addresses,
              product terminology, and customer expectations.
            </p>

            <div className="localization-dimensions wide-module">
              {[
                [
                  "Linguistic and Editorial Adaptation",
                  "Terminology, tone, formality, idioms, examples, brand messaging, product benefits, calls to action, and selective transcreation.",
                ],
                [
                  "Cultural and Visual Adaptation",
                  "Photography, illustrations, symbols, visual references, embedded text, audio, video, lifestyle imagery, and culturally dependent examples.",
                ],
                [
                  "Locale-Specific Formats",
                  "Dates, time, currency, decimals, units, names, honorifics, addresses, phone numbers, forms, taxes, and identification formats.",
                ],
                [
                  "Experience and Functional Adaptation",
                  "Navigation, site search, forms, accounts, checkout, payments, product availability, customer support, right-to-left presentation, and responsive testing.",
                ],
                [
                  "Market and Growth Adaptation",
                  "Local keywords, market-specific landing pages, regional campaigns, pricing, disclosures, analytics, continuous optimization, and localization governance.",
                ],
              ].map(([title, copy], index) => (
                <article className="dimension-row" key={title}>
                  <span className="dimension-icon">
                    <ScopeIcon index={index} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <p>
              Not every market requires every workstream. Localization is best understood as
              a spectrum of adaptation rather than a fixed package applied uniformly across
              the entire website.
            </p>
          </section>

          <section id="related-terms" className="article-section anchor-section">
            <h2>Translation, Localization, Internationalization, and Transcreation</h2>
            <p className="section-lead">
              These terms are related, but each addresses a different part of a multilingual
              website program.
            </p>
            <div className="table-wrap wide-module desktop-table" aria-label="Terminology comparison">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Term</th>
                    <th scope="col">What It Means</th>
                    <th scope="col">Primary Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {termRows.map((row) => (
                    <tr key={row.term}>
                      <th scope="row">{row.term}</th>
                      <td>{row.meaning}</td>
                      <td>{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <MobileComparisonCards
              rows={termRows.map((row) => [row.term, row.meaning, row.focus])}
              labels={["What It Means", "Primary Focus"]}
            />

            <div className="split-editorial">
              <div>
                <h3>Internationalization</h3>
                <p>
                  Internationalization prepares the website to support multiple languages,
                  character sets, scripts, text expansion, locale formats, right-to-left
                  layouts, scalable language switching, and translation-friendly content
                  extraction. Without it, each new language may require repeated development work.
                </p>
              </div>
              <div>
                <h3>Transcreation</h3>
                <p>
                  Transcreation preserves the persuasive or emotional effect when the original
                  wording cannot be carried over directly. It is especially useful for campaign
                  slogans, taglines, advertising headlines, launch messaging, and culturally
                  dependent creative concepts.
                </p>
              </div>
            </div>
          </section>

          <section id="detailed-comparison" className="article-section anchor-section">
            <h2>Website Translation vs. Localization</h2>
            <p className="section-lead">
              The difference is more substantial than “words versus culture.” Translation
              adapts communication. Localization may adapt the larger combination of content,
              interface, functionality, customer journey, and market strategy.
            </p>
            <div className="table-wrap wide-module desktop-table" aria-label="Website translation and localization comparison">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Dimension</th>
                    <th scope="col">Website Translation Focus</th>
                    <th scope="col">Website Localization Adds</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <MobileComparisonCards
              rows={comparisonRows}
              labels={["Website Translation Focus", "Website Localization Adds"]}
            />
            <p className="table-note">
              The localization column is cumulative: it includes translation rather than
              replacing it.
            </p>
          </section>
        </article>
      </div>

      <section
        id="market-adaptation-framework"
        className="framework-section anchor-section"
        aria-labelledby="framework-title"
      >
        <div className="wf-shell">
          <div className="framework-heading">
            <p className="eyebrow dark-eyebrow">MARKET ADAPTATION FRAMEWORK</p>
            <h2 id="framework-title">Match the Scope to the Experience</h2>
            <p>
              Most multilingual websites should not be labeled simply “translated” or
              “localized.” Assign one of four cumulative adaptation levels to each market,
              page group, or user journey.
            </p>
          </div>
          <div className="framework-grid">
            {levels.map((item) => (
              <article className="framework-level" key={item.level}>
                <div className="framework-level-top">
                  <span className="framework-number">{item.level}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <span className="framework-objective">{item.objective}</span>
                  </div>
                </div>
                <p>{item.copy}</p>
                <ul>
                  {item.items.map((entry) => (
                    <li key={entry}>
                      <CheckIcon />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
                <div className="framework-suited">
                  <span>Often suited to</span>
                  <strong>{item.suited}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="framework-principle">
            <span>Planning Principle</span>
            <strong>Scope the website by experience, not only by word count.</strong>
            <p>
              Word count affects production effort, but it does not reveal which experiences
              require cultural, functional, search, regulatory, or market adaptation.
            </p>
          </div>
        </div>
      </section>

      <div className="wf-shell article-layout article-layout-after-dark">
        <aside className="toc-spacer" aria-hidden="true" />
        <article className="article-content">
          <section id="when-translation-may-be-enough" className="article-section anchor-section">
            <h2>When Website Translation May Be Enough</h2>
            <p className="section-lead">
              A translation-focused approach may be appropriate when the website primarily
              provides consistent information and the business, content, and customer journey
              do not materially change across markets.
            </p>
            <div className="indicator-panel indicator-translation wide-module">
              <div className="indicator-heading">
                <span className="indicator-icon"><ScopeIcon index={0} /></span>
                <div>
                  <h3>Translation-Focused Indicators</h3>
                  <p>Use these signals as a starting point, not as an automatic rule.</p>
                </div>
              </div>
              <div className="indicator-list two-column-list">
                {translationIndicators.map((item) => (
                  <div className="indicator-item" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <h3>Potential Examples</h3>
            <p>
              Corporate overview pages, investor information, selected technical resources,
              partner content for an established audience, global announcements, market-
              validation microsites, and factual product information with limited regional
              variation may begin with Level 1 or light Level 2 adaptation.
            </p>
            <div className="editorial-callout">
              <span className="callout-label">IMPORTANT CONSIDERATION</span>
              <p>
                Even a translation-focused scope should account for navigation, buttons,
                forms, error messages, metadata, image text, accessibility content, locale
                formats, terminology, layout behavior, and in-context quality assurance.
              </p>
            </div>
          </section>

          <section id="when-localization-is-necessary" className="article-section anchor-section">
            <h2>When Broader Website Localization Is Necessary</h2>
            <p className="section-lead">
              The need for localization grows as a website moves from sharing information to
              influencing decisions, generating demand, processing transactions, or supporting
              market-specific activities.
            </p>
            <div className="indicator-panel indicator-localization wide-module">
              <div className="indicator-heading">
                <span className="indicator-icon"><ScopeIcon index={3} /></span>
                <div>
                  <h3>Strong Localization Indicators</h3>
                  <p>The more signals that apply, the broader the likely adaptation scope.</p>
                </div>
              </div>
              <div className="indicator-list two-column-list">
                {localizationIndicators.map((item) => (
                  <div className="indicator-item" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="split-editorial split-links">
              <div>
                <h3>Search-Led Markets</h3>
                <p>
                  Directly translated keywords may not reflect the language customers use.
                  Search-led growth can require local keyword research, search intent,
                  localized metadata, regional landing pages, URL planning, internal links,
                  and market-specific measurement.
                </p>
                <EditorialLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">
                  Read the Multilingual SEO Guide
                </EditorialLink>
              </div>
              <div>
                <h3>Transactional and Interactive Websites</h3>
                <p>
                  Forms, checkout, accounts, support, and search depend on local field
                  structures, payments, addresses, consent language, validation, delivery,
                  and support processes—not only translated labels.
                </p>
                <EditorialLink href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">
                  Use the Localization Testing Checklist
                </EditorialLink>
              </div>
            </div>
          </section>

          <section id="requirements-by-content-type" className="article-section anchor-section">
            <h2>Localization Requirements by Website Content Type</h2>
            <p className="section-lead">
              Different areas of the same website have different business purposes and risk
              profiles. The appropriate localization level should reflect those differences.
            </p>
            <div className="table-wrap wide-module desktop-table" aria-label="Localization requirements by website content type">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Website Area</th>
                    <th scope="col">Likely Starting Level</th>
                    <th scope="col">Primary Adaptation Priorities</th>
                  </tr>
                </thead>
                <tbody>
                  {contentTypeRows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td><span className="level-chip">{row[1]}</span></td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <MobileComparisonCards
              rows={contentTypeRows}
              labels={["Likely Starting Level", "Primary Adaptation Priorities"]}
            />
            <p>
              These starting levels are planning guidance rather than universal rules. A
              legally sensitive informational page may need limited cultural adaptation but
              intensive expert translation and review. A creative campaign page may require
              extensive adaptation even when it contains relatively little text.
            </p>
            <div className="risk-note">
              <span className="risk-note-icon"><ScopeIcon index={6} /></span>
              <div>
                <h3>Separate Adaptation Scope From Review Risk</h3>
                <p>
                  Localization level and quality-review intensity are connected, but they are
                  not the same decision. High-risk content can require specialist human review
                  even when its broader adaptation scope remains limited.
                </p>
              </div>
            </div>
          </section>

          <section id="choose-the-right-level" className="article-section anchor-section">
            <h2>How to Choose the Right Localization Level</h2>
            <p className="section-lead">
              Evaluate each market or page group against business value, customer impact,
              market variation, functional complexity, and risk—not by applying one blanket
              scope to the entire website.
            </p>
            <div className="criteria-grid wide-module">
              {decisionCriteria.map((item, index) => (
                <article className="criteria-item" key={item.title}>
                  <span className="criteria-icon"><ScopeIcon index={index} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <h3>Directional Recommendation Matrix</h3>
            <div className="recommendation-matrix wide-module">
              {recommendationRows.map((row) => (
                <div className="recommendation-row" key={row[0]}>
                  <div>
                    <span className="recommendation-label">Website Pattern</span>
                    <p>{row[0]}</p>
                  </div>
                  <div>
                    <span className="recommendation-label">Recommended Starting Route</span>
                    <strong>{row[1]}</strong>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Treat the result as a starting point. Individual pages can be elevated or reduced
              based on risk, value, and market requirements. A high-risk page may require
              intensive human review even when its adaptation level is relatively limited.
            </p>

            <div className="mid-cta wide-module">
              <div>
                <h3>Discuss Your Website Localization Scope</h3>
                <p>
                  Align your markets, content types, workflows, quality requirements, and
                  launch priorities before production begins.
                </p>
              </div>
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert
                <ArrowIcon />
              </a>
            </div>
          </section>

          <section id="practical-localization-plan" className="article-section anchor-section">
            <h2>A Practical Website Localization Plan</h2>
            <p className="section-lead">
              Once the adaptation levels are clear, convert them into an actionable plan that
              connects content, markets, technology, quality, ownership, and ongoing updates.
            </p>
            <div className="plan-timeline wide-module">
              {planSteps.map((step, index) => (
                <article className="plan-step" key={step.title}>
                  <div className="plan-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="plan-copy">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                    {step.link ? (
                      <EditorialLink href={step.link.href}>{step.link.label}</EditorialLink>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="illustrative-scope" className="article-section anchor-section">
            <p className="eyebrow">ILLUSTRATIVE SCENARIO</p>
            <h2>One Website, Four Adaptation Levels</h2>
            <p className="section-lead">
              Consider a hypothetical B2B technology company preparing websites for Germany
              and Japan. The core platform is the same, but local search, lead generation, and
              regional sales teams are important to the launch.
            </p>
            <div className="scenario-panel wide-module">
              {scenarioRows.map((item, index) => (
                <article className="scenario-row" key={item.title}>
                  <div className="scenario-level">
                    <span>{item.level}</span>
                    <div className="scenario-line" aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <p>
              The result is not one uniform website localization scope. It is a coordinated
              set of adaptation levels aligned with the purpose and value of each experience.
            </p>
          </section>

          <section id="common-mistakes" className="article-section anchor-section">
            <h2>Common Translation and Localization Scope Mistakes</h2>
            <p className="section-lead">
              The most expensive localization problems often begin with an incomplete scope,
              unclear ownership, or an assumption that every part of the website should be
              handled in the same way.
            </p>
            <div className="mistakes-list wide-module">
              {mistakes.map((item) => (
                <article className="mistake-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="mistake-columns">
                    <div>
                      <span className="mistake-label">Why It Causes Problems</span>
                      <p>{item.problem}</p>
                    </div>
                    <div>
                      <span className="mistake-label better">Better Approach</span>
                      <p>{item.better}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="frequently-asked-questions" className="article-section anchor-section">
            <h2>Frequently Asked Questions</h2>
            <p className="section-lead">
              Use these answers to clarify common scope, terminology, cost, timing, SEO, AI,
              and maintenance questions before starting a multilingual website program.
            </p>
            <div className="faq-panel-wrap wide-module">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  index={index}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </section>

          <section className="conclusion-section">
            <h2>Choose the Right Scope for Every Market</h2>
            <p className="section-lead">
              The choice is rarely between translation and localization across an entire
              website. A stronger approach is to determine what customers must understand,
              what must feel locally relevant, which journeys need to function differently,
              where search and conversion matter, what carries greater risk, and how regional
              websites will remain current.
            </p>
            <p>
              Begin with a website and user-journey inventory. Assign an appropriate adaptation
              level to each content group, then align translation, localization, quality review,
              testing, and ongoing operations with the value and risk of that experience.
            </p>
          </section>
        </article>
      </div>

      <section className="related-section" aria-labelledby="related-title">
        <div className="wf-shell">
          <div className="related-heading">
            <div>
              <h2 id="related-title">Related Website Translation Resources</h2>
            </div>
            <p>
              Move from scope decisions into workflow selection, SEO, AI quality routing,
              testing, and continuous operations.
            </p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <a href={resource.href} className="related-title-link">
                  {resource.title}
                  <ArrowIcon />
                </a>
                <p>{resource.copy}</p>
              </article>
            ))}
          </div>
          <div className="resource-up-links">
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">
              Explore Localization Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/guides/">
              Browse All Stepes Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/">
              Visit the Resource Center
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="wf-shell">
          <div className="final-cta-panel">
            <div>
              <h2 id="final-cta-title">Plan the Right Website Experience for Every Market</h2>
              <p>
                Connect your content strategy, localization scope, technical workflow, quality
                requirements, and ongoing updates in one practical multilingual website plan.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                Talk to a Website Localization Expert
                <ArrowIcon />
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.stepes.com/website-translation-services/"
              >
                Explore Website Translation Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --stepes-magenta: ${colors.magenta};
    --stepes-magenta-dark: ${colors.magentaDark};
    --stepes-magenta-deep: ${colors.magentaDeep};
    --stepes-blush: ${colors.blush};
    --stepes-blush-strong: ${colors.blushStrong};
    --stepes-pink-light: ${colors.pinkLight};
    --ink: ${colors.ink};
    --body: ${colors.body};
    --muted: ${colors.muted};
    --line: ${colors.line};
    --soft: ${colors.soft};
    --dark: ${colors.dark};
    --white: ${colors.white};
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .wf-page {
    min-width: 0;
    overflow: hidden;
    color: var(--ink);
    background: var(--white);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .wf-page a { color: inherit; }
  .wf-page p, .wf-page li, .wf-page td, .wf-page th {
    font-size: 18px;
    line-height: 1.68;
  }
  .wf-page p { margin: 0 0 24px; color: var(--body); }
  .wf-page h1, .wf-page h2, .wf-page h3 {
    margin: 0;
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.025em;
  }
  .wf-page h1 { font-size: 48px; line-height: 1.08; }
  .wf-page h2 { font-size: 36px; line-height: 1.17; }
  .wf-page h3 { font-size: 24px; line-height: 1.3; }
  .wf-shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }
  .eyebrow {
    margin: 0 0 18px !important;
    color: var(--stepes-magenta) !important;
    font-size: 11px !important;
    line-height: 1.25 !important;
    letter-spacing: .13em !important;
    text-transform: uppercase;
    font-weight: 600 !important;
  }
  .dark-eyebrow { color: var(--stepes-pink-light) !important; }
  .anchor-section { scroll-margin-top: 96px; }

  .guide-hero {
    position: relative;
    padding: 104px 0 96px;
    overflow: hidden;
    background:
      radial-gradient(circle at 88% 8%, rgba(193,29,99,.08), transparent 24%),
      linear-gradient(180deg, #fff 0%, #fff 72%, #fcfafb 100%);
  }
  .guide-hero::before {
    content: "";
    position: absolute;
    width: 560px;
    height: 560px;
    border: 1px solid rgba(193,29,99,.09);
    border-radius: 50%;
    right: -310px;
    top: -280px;
    pointer-events: none;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(470px, .95fr);
    gap: 76px;
    align-items: center;
  }
  .hero-copy { max-width: 650px; }
  .hero-copy h1 { max-width: 640px; }
  .hero-deck {
    max-width: 650px;
    margin-top: 28px !important;
    font-size: 20px !important;
    line-height: 1.62 !important;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
  .btn {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    padding: 13px 22px;
    text-decoration: none;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 600;
    transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible, .editorial-link:focus-visible, .toc-rail a:focus-visible,
  .toc-mobile-button:focus-visible, .toc-mobile-list a:focus-visible,
  .faq-button:focus-visible, .related-title-link:focus-visible {
    outline: 3px solid rgba(193,29,99,.24);
    outline-offset: 3px;
  }
  .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus-visible {
    color: #fff !important;
  }
  .btn-primary {
    background: var(--stepes-magenta);
    box-shadow: 0 12px 30px rgba(193,29,99,.16);
  }
  .btn-primary:hover { background: var(--stepes-magenta-dark); }
  .btn-secondary {
    border: 1px solid #D9D5DA;
    background: #fff;
    color: var(--ink) !important;
  }
  .btn-secondary:hover { border-color: #BDB7BE; }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 22px;
    margin-top: 28px;
    color: var(--muted);
    font-size: 14px;
  }
  .hero-meta span { position: relative; }
  .hero-meta span:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #AAA4AC;
    right: -13px;
    top: 8px;
  }
  .hero-visual { position: relative; min-width: 0; }
  .visual-browser {
    position: relative;
    overflow: hidden;
    border: 1px solid #E7E1E5;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 28px 70px rgba(47,25,38,.12);
  }
  .browser-bar {
    height: 44px;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 0 18px;
    border-bottom: 1px solid #EEE9EC;
    background: #FBFAFB;
  }
  .browser-bar span { width: 8px; height: 8px; border-radius: 50%; background: #D8D2D6; }
  .browser-content { padding: 30px; }
  .visual-heading { margin-bottom: 24px; }
  .visual-heading strong { display: block; max-width: 410px; font-size: 18px; line-height: 1.35; font-weight: 600; }
  .visual-heading span { display: block; margin-top: 6px; font-size: 14px; line-height: 1.45; color: var(--muted); }
  .visual-layers { display: grid; gap: 10px; }
  .visual-layer {
    min-height: 72px;
    display: grid;
    grid-template-columns: 42px 1fr;
    align-items: center;
    gap: 13px;
    border-radius: 16px;
    padding: 13px 16px;
    border: 1px solid #EDE7EB;
  }
  .visual-layer.level-1 { width: 76%; background: #fff; }
  .visual-layer.level-2 { width: 84%; background: #FDF7FA; }
  .visual-layer.level-3 { width: 92%; background: #FAEDF3; }
  .visual-layer.level-4 { width: 100%; background: #F6E0EA; }
  .visual-level-number {
    width: 42px;
    height: 42px;
    min-width: 42px;
    display: block;
    align-self: center;
    justify-self: center;
    overflow: visible;
  }
  .visual-layer strong, .visual-layer div > span { display: block; }
  .visual-layer strong { font-size: 17px; line-height: 1.25; font-weight: 600; }
  .visual-layer div > span { margin-top: 3px; font-size: 16px; line-height: 1.4; color: var(--muted); }
  .visual-caption {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid #EEE9EC;
    color: var(--ink);
  }
  .visual-caption svg { color: var(--stepes-magenta); margin-top: 2px; }
  .visual-caption strong { font-size: 16px; line-height: 1.45; font-weight: 600; }

  .summary-section { padding: 0 0 96px; }
  .summary-panel {
    display: grid;
    grid-template-columns: .82fr 1.45fr;
    gap: 56px;
    padding: 54px;
    border-radius: 30px;
    background: var(--stepes-blush);
    border: 1px solid #F0DCE5;
  }
  .summary-intro h2 { margin-bottom: 22px; }
  .summary-intro p:last-child { margin-bottom: 0; font-size: 18px; }
  .summary-takeaways { display: grid; grid-template-columns: 1fr 1fr; }
  .summary-item {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 14px;
    padding: 0 24px 24px 0;
    margin-bottom: 24px;
    border-bottom: 1px solid #E8CFDB;
  }
  .summary-item:nth-child(even) { padding-left: 24px; padding-right: 0; border-left: 1px solid #E8CFDB; }
  .summary-item:nth-last-child(-n+2) { margin-bottom: 0; padding-bottom: 0; border-bottom: 0; }
  .summary-mark { color: var(--stepes-magenta); margin-top: 2px; }
  .summary-item h3 { font-size: 18px; line-height: 1.35; margin-bottom: 7px; }
  .summary-item p { font-size: 16px; line-height: 1.55; margin: 0; }
  .summary-principle {
    grid-column: 1 / -1;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 8px;
    padding-top: 30px;
    border-top: 1px solid #E8CFDB;
    text-align: center;
    color: var(--ink);
  }
  .summary-principle span, .summary-principle strong { font-size: 18px; line-height: 1.5; }
  .summary-principle strong { font-weight: 600; }

  .toc-mobile-wrap { display: none; }
  .article-layout {
    max-width: 1120px;
    display: grid;
    grid-template-columns: 248px minmax(0, 760px);
    gap: 72px;
    align-items: start;
  }
  .toc-sticky { position: sticky; top: 28px; padding-top: 4px; }
  .toc-title { margin: 0 0 17px !important; color: var(--ink) !important; font-size: 16px !important; font-weight: 600; }
  .toc-rail nav { display: grid; border-left: 1px solid #E2DEE3; }
  .toc-rail nav a {
    position: relative;
    display: block;
    padding: 7px 0 7px 18px;
    color: #66616A;
    font-size: 15px;
    line-height: 1.44;
    text-decoration: none;
    transition: color .18s ease;
  }
  .toc-rail nav a::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 7px;
    bottom: 7px;
    width: 2px;
    background: transparent;
  }
  .toc-rail nav a:hover { color: var(--stepes-magenta); }
  .toc-rail nav a.is-active { color: var(--stepes-magenta); font-weight: 600; }
  .toc-rail nav a.is-active::before { background: var(--stepes-magenta); }
  .toc-service-link {
    margin-top: 26px;
    padding-top: 24px;
    border-top: 1px solid var(--line);
  }
  .toc-service-link > span { display: block; margin-bottom: 9px; color: var(--muted); font-size: 14px; line-height: 1.5; }
  .toc-service-link .editorial-link { font-size: 16px; }

  .article-content { min-width: 0; }
  .article-section { padding: 88px 0 0; }
  .article-section:first-child { padding-top: 0; }
  .article-section h2 { margin-bottom: 24px; }
  .article-section h3 { margin: 38px 0 14px; }
  .section-lead {
    margin-bottom: 28px !important;
    color: #2C2930 !important;
    font-size: 20px !important;
    line-height: 1.6 !important;
  }
  .text-list {
    margin: 0;
    padding-left: 22px;
    color: var(--body);
  }
  .text-list li { margin-bottom: 10px; padding-left: 4px; }
  .editorial-callout {
    margin: 38px 0;
    padding: 26px 28px;
    border-left: 3px solid var(--stepes-magenta);
    background: var(--stepes-blush);
  }
  .callout-label {
    display: block;
    margin-bottom: 9px;
    color: var(--stepes-magenta);
    font-size: 11px;
    line-height: 1.25;
    letter-spacing: .12em;
    font-weight: 600;
  }
  .editorial-callout p { margin: 0; font-size: 17px; line-height: 1.62; }
  .wide-module { width: 1040px; margin-left: -280px; }

  .localization-dimensions {
    margin-top: 36px;
    margin-bottom: 36px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .dimension-row {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 18px;
    padding: 26px 28px 26px 0;
    border-bottom: 1px solid var(--line);
  }
  .dimension-row:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
  .dimension-row:last-child { grid-column: 1 / -1; border-bottom: 0; }
  .dimension-icon {
    width: 44px; height: 44px; display: grid; place-items: center;
    border-radius: 14px; background: var(--stepes-blush); color: var(--stepes-magenta);
  }
  .dimension-row h3 { margin: 0 0 7px; font-size: 19px; }
  .dimension-row p { margin: 0; font-size: 16px; line-height: 1.58; }

  .table-wrap { margin-top: 30px; margin-bottom: 24px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { padding: 19px 20px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); }
  thead th { color: var(--ink); background: #FAF9FA; font-size: 16px !important; line-height: 1.4 !important; font-weight: 600; }
  tbody th { width: 24%; color: var(--ink); font-size: 16px !important; line-height: 1.5 !important; font-weight: 600; }
  tbody td { color: var(--body); font-size: 16px !important; line-height: 1.55 !important; }
  tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }
  .comparison-table thead th:first-child { width: 22%; }
  .comparison-table thead th:nth-child(2), .comparison-table thead th:nth-child(3) { width: 39%; }
  .table-note { color: var(--muted) !important; font-size: 16px !important; }
  .mobile-records { display: none; }
  .split-editorial {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-top: 38px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .split-editorial > div { padding: 30px 34px 30px 0; }
  .split-editorial > div + div { padding-left: 34px; padding-right: 0; border-left: 1px solid var(--line); }
  .split-editorial h3 { margin: 0 0 12px; }
  .split-editorial p { margin: 0; font-size: 17px; }
  .split-links p { margin-bottom: 16px; }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
    text-decoration: none;
  }
  .editorial-link svg { transition: transform .18s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }

  .framework-section {
    margin-top: 104px;
    padding: 96px 0;
    background: var(--dark);
    color: #fff;
  }
  .framework-heading { max-width: 840px; margin-bottom: 48px; }
  .framework-heading h2 { color: #fff; margin-bottom: 22px; }
  .framework-heading p:last-child { max-width: 780px; color: #D8CDD4; font-size: 19px; line-height: 1.65; }
  .framework-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,.16); border-bottom: 1px solid rgba(255,255,255,.16); }
  .framework-level { padding: 30px 24px 30px 0; border-right: 1px solid rgba(255,255,255,.16); }
  .framework-level + .framework-level { padding-left: 24px; }
  .framework-level:last-child { border-right: 0; }
  .framework-level-top { display: grid; grid-template-columns: 42px 1fr; gap: 12px; align-items: start; margin-bottom: 20px; }
  .framework-number { color: var(--stepes-pink-light); font-size: 13px; line-height: 1.2; font-weight: 600; }
  .framework-level h3 { color: #fff; font-size: 20px; margin-bottom: 7px; }
  .framework-objective { display: block; color: #D2C4CC; font-size: 16px; line-height: 1.45; }
  .framework-level > p { color: #D8CDD4; font-size: 16px; line-height: 1.6; min-height: 102px; }
  .framework-level ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 11px; }
  .framework-level li { display: grid; grid-template-columns: 20px 1fr; gap: 9px; align-items: start; color: #EEE6EB; font-size: 16px; line-height: 1.45; }
  .framework-level li svg { color: var(--stepes-pink-light); margin-top: 2px; }
  .framework-suited { margin-top: 26px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.12); }
  .framework-suited span { display: block; margin-bottom: 6px; color: var(--stepes-pink-light); font-size: 11px; letter-spacing: .11em; text-transform: uppercase; font-weight: 600; }
  .framework-suited strong { color: #fff; font-size: 16px; line-height: 1.45; font-weight: 600; }
  .framework-principle {
    display: grid;
    grid-template-columns: 150px minmax(300px, .9fr) 1fr;
    gap: 30px;
    align-items: center;
    margin-top: 34px;
    padding: 26px 0 0;
  }
  .framework-principle > span { color: var(--stepes-pink-light); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; }
  .framework-principle > strong { color: #fff; font-size: 20px; line-height: 1.4; font-weight: 600; }
  .framework-principle p { margin: 0; color: #C9BBC3; font-size: 16px; line-height: 1.58; }

  .article-layout-after-dark { padding-top: 88px; }
  .toc-spacer { min-height: 1px; }
  .indicator-panel {
    margin-top: 34px;
    margin-bottom: 34px;
    padding: 34px;
    border-radius: 28px;
    border: 1px solid var(--line);
  }
  .indicator-translation { background: #FAF9FA; }
  .indicator-localization { background: var(--stepes-blush); border-color: #EED7E2; }
  .indicator-heading { display: flex; align-items: center; gap: 16px; margin-bottom: 26px; }
  .indicator-heading h3 { margin: 0 0 5px; font-size: 22px; }
  .indicator-heading p { margin: 0; font-size: 16px; }
  .indicator-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 15px; color: var(--stepes-magenta); background: #fff; border: 1px solid #ECE6EA; }
  .two-column-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; }
  .indicator-item { display: grid; grid-template-columns: 20px 1fr; gap: 11px; padding: 13px 0; border-top: 1px solid rgba(79,63,72,.12); color: var(--body); font-size: 16px; line-height: 1.5; }
  .indicator-item svg { color: var(--stepes-magenta); margin-top: 2px; }

  .level-chip { display: inline-flex; align-items: center; min-height: 34px; padding: 6px 11px; border-radius: 999px; background: var(--stepes-blush); color: var(--stepes-magenta); font-size: 16px; line-height: 1.3; font-weight: 600; }
  .risk-note {
    display: grid;
    grid-template-columns: 54px 1fr;
    gap: 18px;
    margin-top: 34px;
    padding-top: 30px;
    border-top: 1px solid var(--line);
  }
  .risk-note-icon { width: 50px; height: 50px; display: grid; place-items: center; border-radius: 16px; background: var(--stepes-blush); color: var(--stepes-magenta); }
  .risk-note h3 { margin: 0 0 9px; }
  .risk-note p { margin: 0; font-size: 17px; }

  .criteria-grid {
    margin-top: 36px;
    margin-bottom: 44px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid var(--line);
  }
  .criteria-item {
    display: grid;
    grid-template-columns: 50px 1fr;
    gap: 18px;
    padding: 28px 30px 28px 0;
    border-bottom: 1px solid var(--line);
  }
  .criteria-item:nth-child(even) { padding-left: 30px; padding-right: 0; border-left: 1px solid var(--line); }
  .criteria-icon { width: 46px; height: 46px; display: grid; place-items: center; color: var(--stepes-magenta); background: var(--stepes-blush); border-radius: 15px; }
  .criteria-item h3 { margin: 0 0 8px; font-size: 20px; }
  .criteria-item p { margin: 0; font-size: 16px; line-height: 1.58; }

  .recommendation-matrix { margin-top: 24px; margin-bottom: 28px; border-top: 1px solid var(--line); }
  .recommendation-row { display: grid; grid-template-columns: 1.18fr .82fr; gap: 42px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .recommendation-label { display: block; margin-bottom: 7px; color: var(--muted); font-size: 16px; line-height: 1.4; font-weight: 600; }
  .recommendation-row p { margin: 0; font-size: 16px; }
  .recommendation-row strong { display: block; color: var(--stepes-magenta); font-size: 17px; line-height: 1.5; font-weight: 600; }
  .mid-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    margin-top: 42px;
    padding: 34px 36px;
    border-radius: 28px;
    background: var(--stepes-blush);
    border: 1px solid #EED8E2;
  }
  .mid-cta > div { max-width: 690px; }
  .mid-cta h3 { margin: 0 0 8px; }
  .mid-cta p { margin: 0; font-size: 16px; }
  .mid-cta .btn { flex: 0 0 auto; }

  .plan-timeline { margin-top: 42px; border-top: 1px solid var(--line); }
  .plan-step {
    display: grid;
    grid-template-columns: 92px 1fr;
    gap: 24px;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }
  .plan-number { color: var(--stepes-magenta); font-size: 16px; line-height: 1.35; font-weight: 600; }
  .plan-copy h3 { margin: 0 0 10px; }
  .plan-copy p { margin: 0 0 12px; font-size: 17px; }

  .scenario-panel { margin-top: 34px; margin-bottom: 30px; border-top: 1px solid var(--line); }
  .scenario-row { position: relative; display: grid; grid-template-columns: 120px 1fr 42px; gap: 30px; padding: 30px 0; border-bottom: 1px solid var(--line); }
  .scenario-level { display: flex; align-items: center; gap: 12px; color: var(--stepes-magenta); font-size: 16px; line-height: 1.4; font-weight: 600; }
  .scenario-line { height: 2px; width: 44px; background: var(--stepes-magenta); }
  .scenario-row h3 { margin: 0 0 9px; }
  .scenario-row p { margin: 0; font-size: 17px; }

  .mistakes-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .mistake-row { padding: 30px 0; border-bottom: 1px solid var(--line); }
  .mistake-row h3 { margin: 0 0 20px; }
  .mistake-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .mistake-label { display: block; margin-bottom: 8px; color: var(--muted); font-size: 16px; line-height: 1.35; font-weight: 600; }
  .mistake-label.better { color: var(--stepes-magenta); }
  .mistake-columns p { margin: 0; font-size: 16px; }

  .faq-panel-wrap { margin-top: 36px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .faq-item + .faq-item { border-top: 1px solid var(--line); }
  .faq-button {
    width: 100%;
    min-height: 68px;
    display: grid;
    grid-template-columns: 1fr 42px;
    gap: 24px;
    align-items: center;
    padding: 21px 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    font: inherit;
    font-size: 18px;
    line-height: 1.45;
    font-weight: 600;
  }
  .faq-icon { justify-self: end; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 50%; background: var(--soft); color: var(--stepes-magenta); }
  .faq-icon svg { transition: transform .18s ease; }
  .faq-panel { padding: 0 70px 24px 0; }
  .faq-panel p { margin: 0 0 14px; font-size: 16px; line-height: 1.65; }
  .conclusion-section { padding: 96px 0 0; }
  .conclusion-section h2 { margin-bottom: 24px; }

  .related-section { margin-top: 104px; padding: 88px 0; background: #F8F7F8; }
  .related-heading { display: grid; grid-template-columns: 1.05fr .95fr; gap: 80px; align-items: end; margin-bottom: 42px; }
  .related-heading h2 { max-width: 620px; }
  .related-heading > p { max-width: 510px; margin: 0; font-size: 18px; }
  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #DCD8DD; }
  .related-item { padding: 28px 30px 28px 0; border-bottom: 1px solid #DCD8DD; }
  .related-item:nth-child(3n+2), .related-item:nth-child(3n+3) { padding-left: 30px; border-left: 1px solid #DCD8DD; }
  .related-title-link { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; color: var(--ink) !important; text-decoration: none; font-size: 18px; line-height: 1.38; font-weight: 600; }
  .related-title-link svg { flex: 0 0 auto; margin-top: 3px; color: var(--stepes-magenta); transition: transform .18s ease; }
  .related-title-link:hover { color: var(--stepes-magenta) !important; }
  .related-title-link:hover svg { transform: translateX(3px); }
  .related-item p { margin: 12px 0 0; font-size: 16px; line-height: 1.58; }
  .resource-up-links { display: flex; flex-wrap: wrap; gap: 18px 30px; margin-top: 34px; }

  .final-cta { padding: 88px 0 104px; }
  .final-cta-panel {
    display: grid;
    grid-template-columns: 1.1fr .9fr;
    gap: 70px;
    align-items: center;
    padding: 54px 58px;
    border-radius: 30px;
    background: var(--stepes-blush);
    border: 1px solid #EED8E2;
  }
  .final-cta-panel h2 { max-width: 660px; margin-bottom: 18px; }
  .final-cta-panel p { max-width: 680px; margin: 0; font-size: 18px; }
  .final-cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
  .final-cta-actions .btn { width: 100%; text-align: center; }

  @media (min-width: 1360px) {
    .wf-shell { padding-left: 56px; padding-right: 56px; }
  }

  @media (max-width: 1180px) {
    .hero-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
    .article-layout { max-width: 1040px; grid-template-columns: 230px minmax(0, 1fr); gap: 52px; }
    .wide-module { width: 100%; margin-left: 0; }
    .framework-grid { grid-template-columns: 1fr 1fr; }
    .framework-level { border-bottom: 1px solid rgba(255,255,255,.16); }
    .framework-level:nth-child(2) { border-right: 0; }
    .framework-level:nth-child(3), .framework-level:nth-child(4) { border-bottom: 0; }
    .framework-level:nth-child(3) { padding-left: 0; }
    .framework-level:nth-child(4) { padding-left: 24px; }
  }

  @media (max-width: 960px) {
    .wf-shell { padding-left: 24px; padding-right: 24px; }
    .wf-page h1 { font-size: 42px; }
    .wf-page h2 { font-size: 32px; }
    .wf-page h3 { font-size: 22px; }
    .guide-hero { padding: 88px 0 80px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; }
    .hero-visual { max-width: 720px; }
    .summary-section { padding-bottom: 80px; }
    .summary-panel { grid-template-columns: 1fr; gap: 38px; padding: 44px; }
    .summary-principle { flex-direction: column; align-items: center; }
    .toc-mobile-wrap { display: block; }
    .toc-mobile {
      margin: 0 0 24px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: #fff;
      overflow: hidden;
    }
    .toc-mobile-button {
      width: 100%;
      min-height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 15px 18px;
      border: 0;
      background: #fff;
      color: var(--ink);
      text-align: left;
      cursor: pointer;
    }
    .toc-mobile-button small { display: block; margin-bottom: 4px; color: var(--stepes-magenta); font-size: 11px; letter-spacing: .12em; font-weight: 600; }
    .toc-mobile-button strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; }
    .toc-mobile-list { padding: 8px 18px 16px; border-top: 1px solid var(--line); }
    .toc-mobile-list a { display: block; min-height: 44px; padding: 11px 0; color: var(--body); font-size: 16px; line-height: 1.4; text-decoration: none; border-bottom: 1px solid #F0EDF0; }
    .toc-mobile-list a:last-child { border-bottom: 0; }
    .toc-mobile-list a.is-active { color: var(--stepes-magenta); font-weight: 600; }
    .article-layout { display: block; max-width: none; }
    .toc-rail, .toc-spacer { display: none; }
    .article-content { max-width: 820px; margin: 0 auto; }
    .article-section { padding-top: 80px; }
    .article-section:first-child { padding-top: 32px; }
    .article-layout-after-dark { padding-top: 72px; }
    .article-layout-after-dark .article-section:first-child { padding-top: 0; }
    .framework-section { margin-top: 88px; padding: 80px 0; }
    .framework-heading { margin-bottom: 38px; }
    .framework-principle { grid-template-columns: 1fr; gap: 10px; }
    .related-heading { grid-template-columns: 1fr; gap: 20px; }
    .related-grid { grid-template-columns: 1fr 1fr; }
    .related-item:nth-child(3n+2), .related-item:nth-child(3n+3) { padding-left: 0; border-left: 0; }
    .related-item:nth-child(even) { padding-left: 28px; border-left: 1px solid #DCD8DD; }
    .final-cta-panel { grid-template-columns: 1fr; gap: 32px; padding: 46px; }
    .final-cta-actions { max-width: 520px; }
  }

  @media (max-width: 768px) {
    .wf-page p, .wf-page li, .wf-page td, .wf-page th { font-size: 17px; }
    .wf-page h1 { font-size: 38px; }
    .wf-page h2 { font-size: 30px; }
    .wf-page h3 { font-size: 20px; }
    .wf-shell { padding-left: 20px; padding-right: 20px; }
    .guide-hero { padding: 72px 0 70px; }
    .hero-grid { gap: 46px; }
    .hero-deck { font-size: 18px !important; }
    .hero-actions { flex-direction: column; }
    .hero-actions .btn { width: 100%; }
    .hero-meta { gap: 8px 16px; }
    .hero-meta span:not(:last-child)::after { right: -10px; }
    .browser-content { padding: 22px; }
    .visual-layer { width: 100% !important; }
    .summary-section { padding-bottom: 64px; }
    .summary-panel { padding: 30px 24px; border-radius: 24px; }
    .summary-takeaways { grid-template-columns: 1fr; }
    .summary-item,
    .summary-item:nth-child(even),
    .summary-item:nth-last-child(-n+2) {
      padding: 0 0 20px;
      margin: 0 0 20px;
      border-left: 0;
      border-bottom: 1px solid #E8CFDB;
    }
    .summary-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: 0; }
    .summary-principle { gap: 2px; }
    .summary-principle span, .summary-principle strong { font-size: 17px; }
    .article-section { padding-top: 68px; }
    .article-layout-after-dark { padding-top: 64px; }
    .section-lead { font-size: 18px !important; }
    .editorial-callout { padding: 22px; }
    .localization-dimensions, .criteria-grid { grid-template-columns: 1fr; }
    .dimension-row, .dimension-row:nth-child(even), .criteria-item, .criteria-item:nth-child(even) { padding: 24px 0; border-left: 0; }
    .dimension-row:last-child { grid-column: auto; }
    .desktop-table { display: none; }
    .mobile-records { display: grid; gap: 16px; margin: 28px 0 24px; }
    .mobile-record { padding: 22px; border: 1px solid var(--line); border-radius: 20px; background: #fff; }
    .mobile-record h3 { margin: 0 0 17px; font-size: 19px; }
    .mobile-field + .mobile-field { margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--line); }
    .mobile-field-label { display: block; margin-bottom: 7px; color: var(--stepes-magenta); font-size: 16px; line-height: 1.4; font-weight: 600; }
    .mobile-field p { margin: 0; font-size: 16px; line-height: 1.58; }
    .split-editorial { grid-template-columns: 1fr; }
    .split-editorial > div, .split-editorial > div + div { padding: 24px 0; border-left: 0; }
    .split-editorial > div + div { border-top: 1px solid var(--line); }
    .framework-section { margin-top: 72px; padding: 68px 0; }
    .framework-grid { grid-template-columns: 1fr; border-bottom: 0; }
    .framework-level, .framework-level + .framework-level, .framework-level:nth-child(3), .framework-level:nth-child(4) { padding: 26px 0; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.16); }
    .framework-level > p { min-height: 0; }
    .framework-suited { margin-top: 22px; }
    .indicator-panel { padding: 26px 22px; border-radius: 24px; }
    .two-column-list { grid-template-columns: 1fr; }
    .criteria-item { grid-template-columns: 46px 1fr; }
    .recommendation-row { grid-template-columns: 1fr; gap: 16px; }
    .mid-cta { flex-direction: column; align-items: flex-start; padding: 28px 24px; }
    .mid-cta .btn { width: 100%; }
    .plan-step { grid-template-columns: 56px 1fr; gap: 16px; }
    .scenario-row { grid-template-columns: 1fr; gap: 12px; }
    .scenario-level { justify-content: flex-start; }
    .scenario-line { flex: 0 0 44px; }
    .mistake-columns { grid-template-columns: 1fr; gap: 20px; }
    .faq-button { grid-template-columns: 1fr 38px; font-size: 17px; }
    .faq-panel { padding-right: 0; }
    .related-section { margin-top: 80px; padding: 68px 0; }
    .related-grid { grid-template-columns: 1fr; }
    .related-item, .related-item:nth-child(even) { padding: 24px 0; border-left: 0; }
    .resource-up-links { flex-direction: column; align-items: flex-start; gap: 14px; }
    .final-cta { padding: 68px 0 80px; }
    .final-cta-panel { padding: 32px 24px; border-radius: 24px; }
  }

  @media (max-width: 390px) {
    .wf-page h1 { font-size: 38px; }
    .wf-page h2 { font-size: 30px; }
    .browser-content { padding: 18px; }
    .visual-layer { grid-template-columns: 40px minmax(0, 1fr); gap: 12px; padding: 12px; }
    .visual-level-number { width: 40px; height: 40px; min-width: 40px; }
    .summary-panel { padding: 28px 20px; }
    .dimension-row, .criteria-item { grid-template-columns: 44px 1fr; gap: 14px; }
    .indicator-heading { align-items: flex-start; }
    .risk-note { grid-template-columns: 1fr; }
    .plan-step { grid-template-columns: 1fr; }
    .plan-number { margin-bottom: -12px; }
    .btn { padding-left: 18px; padding-right: 18px; }
  }

  @media (max-width: 320px) {
    .wf-page h1 { font-size: 38px; }
    .wf-page h2 { font-size: 30px; }
    .wf-shell { padding-left: 20px; padding-right: 20px; }
    .hero-meta { display: grid; gap: 6px; }
    .hero-meta span::after { display: none; }
    .visual-heading strong { font-size: 17px; }
    .toc-mobile-button { padding-left: 15px; padding-right: 15px; }
    .mobile-record { padding: 20px 18px; }
    .faq-button { gap: 12px; }
    .final-cta-panel { padding: 28px 20px; }
  }
`;
