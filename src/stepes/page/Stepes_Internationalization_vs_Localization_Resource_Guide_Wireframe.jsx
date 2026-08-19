import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const colors = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8DCE9",
  darkEyebrow: "#F2A7C6",
  ink: "#111827",
  body: "#475569",
  muted: "#64748B",
  line: "#E2E8F0",
  soft: "#F8FAFC",
  dark: "#161823",
};

function ArrowRight({ size = 18, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
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

function ChevronDown({ size = 20, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
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

function Check({ size = 18, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
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

function GlobeGrid({ size = 26 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21" />
      <path d="M12 3C9.8 5.4 8.6 8.4 8.6 12S9.8 18.6 12 21" />
    </svg>
  );
}

function Layers({ size = 26 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

function TestTube({ size = 26 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3h6" />
      <path d="M10 3v7.5L5.7 18a2 2 0 0 0 1.7 3h9.2a2 2 0 0 0 1.7-3L14 10.5V3" />
      <path d="M8 15h8" />
    </svg>
  );
}

function Refresh({ size = 26 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 7v5h-5" />
      <path d="M4 17v-5h5" />
      <path d="M6.1 8.3A7 7 0 0 1 18.4 7L20 12" />
      <path d="M17.9 15.7A7 7 0 0 1 5.6 17L4 12" />
    </svg>
  );
}

const tocItems = [
  ["at-a-glance", "Internationalization and Localization at a Glance"],
  ["internationalization", "What Is Internationalization?"],
  ["localization", "What Is Localization?"],
  ["working-together", "How i18n and l10n Work Together"],
  ["activity-matrix", "Which Activities Belong to i18n, l10n, or Both?"],
  ["ownership", "Who Owns Internationalization and Localization?"],
  ["common-failures", "Common Internationalization and Localization Failures"],
  ["planning", "Planning for New and Existing Products"],
  ["readiness", "Global Product Readiness Questions"],
  ["roadmap", "An Internationalization and Localization Roadmap"],
  ["faq", "Frequently Asked Questions"],
  ["sources", "Sources and References"],
];

const comparisonRows = [
  ["Primary goal", "Make the product adaptable", "Adapt the product for a particular locale"],
  ["Common abbreviation", "i18n", "l10n"],
  ["Primary focus", "Architecture, design, code, and content structure", "Language, terminology, formats, content, configuration, and market suitability"],
  ["Typical owners", "Product, UX, engineering, and architecture teams", "Localization managers, linguists, regional reviewers, product teams, and QA"],
  ["Timing", "Begins during product planning and development", "Occurs when preparing and maintaining specific locale versions"],
  ["Market specificity", "Usually builds a locale-neutral foundation", "Produces locale-specific experiences"],
  ["Typical outputs", "Externalized strings, Unicode support, flexible interfaces, locale frameworks, and plural handling", "Translated content, approved terminology, regional formats, adapted assets, and validated localized builds"],
  ["Typical failure", "The product cannot properly support a language or locale", "The localized experience is inaccurate, inconsistent, unsuitable, or incomplete"],
  ["Frequency", "Continues as the product and target markets evolve", "Repeats for each locale, feature, update, and release"],
];

const activityRows = [
  ["Externalize interface strings", "Internationalization", "Engineering prepares content for extraction and reuse."],
  ["Support Unicode and required scripts", "Internationalization", "The product must reliably store, process, enter, and display required characters."],
  ["Create flexible components", "Internationalization", "Design and engineering allow text expansion, reflow, and directional change."],
  ["Translate user-facing content", "Localization", "Linguists adapt content for the selected locale and product context."],
  ["Develop localized terminology", "Shared", "Localization leads, with product and regional stakeholders approving key terms."],
  ["Implement plural-rule support", "Shared", "Engineering enables the logic; linguists provide correct language forms."],
  ["Enable right-to-left layouts", "Shared", "Design and engineering provide the behavior; native reviewers validate the experience."],
  ["Implement locale-aware dates", "Shared", "Engineering enables formatting; product and localization confirm the expected presentation."],
  ["Adapt images containing text", "Shared", "Content, design, and localization coordinate source updates and market adaptation."],
  ["Resolve localized layout defects", "Shared", "Localization identifies the problem; design and engineering correct the root cause."],
  ["Test locale-specific user journeys", "Shared", "QA, localization, product, and regional reviewers validate the complete experience."],
  ["Maintain multilingual releases", "Shared", "Development, localization, and release teams coordinate recurring updates."],
];

const failureRows = [
  ["Translated button text is clipped", "Fixed-width or inflexible component", "Design and engineering", "Localized UI testing"],
  ["Some interface text remains in English", "Hard-coded or omitted strings", "Engineering and localization", "String-completeness check"],
  ["A dynamic sentence is grammatically broken", "Concatenated fragments or inadequate plural logic", "Engineering and localization", "Linguistic in-context review"],
  ["Characters display as boxes or garbled text", "Font, encoding, storage, or data-transfer issue", "Engineering and design", "Script and platform testing"],
  ["Arabic navigation behaves incorrectly", "Incomplete RTL or bidirectional support", "Design and engineering", "Native RTL testing"],
  ["Dates appear in the wrong order", "Locale logic or configuration problem", "Engineering and product", "Functional locale testing"],
  ["Terminology is inconsistent across the product", "Missing terminology governance", "Localization and product", "Terminology review"],
  ["An image still contains source-language text", "Asset omitted from localization scope", "Content, design, and localization", "Visual review"],
  ["An address form cannot accept local data", "Source-market assumptions in the data model", "Product and engineering", "Market-specific form testing"],
  ["Localized legal content is incomplete", "Scope or review-governance failure", "Product, localization, and legal specialists", "Appropriate legal review"],
];

const readinessGroups = [
  {
    title: "Product Foundation",
    items: [
      "Is all user-facing content separated from application code?",
      "Can the product store, process, display, search, and accept the required characters and scripts?",
      "Do interfaces expand, wrap, and reflow without losing information or functionality?",
      "Can the product support right-to-left and bidirectional content where required?",
      "Are dates, times, numbers, currencies, names, addresses, and telephone numbers locale-aware?",
      "Can messages support language-specific plural and grammatical forms?",
      "Are unnecessary cultural and source-market assumptions removed from shared components?",
    ],
  },
  {
    title: "Content and Workflow",
    items: [
      "Can new and changed strings be identified reliably?",
      "Are variables, placeholders, tags, keys, and markup protected?",
      "Do linguists receive useful context, such as screenshots, comments, character limits, and feature information?",
      "Are terminology and product voice documented?",
      "Can localized content be reintegrated without damaging files or application logic?",
      "Can approved translations be reused across releases?",
    ],
  },
  {
    title: "Quality and Ownership",
    items: [
      "Are the owners of internationalization, localization, regional review, and final approval clearly defined?",
      "Can localized builds be tested in realistic user journeys?",
      "Are linguistic, cosmetic, functional, accessibility, and locale-behavior checks included?",
      "Is there a documented process for routing defects to design, engineering, content, or localization teams?",
      "Can the organization maintain localized products as source content changes?",
    ],
  },
];

const roadmapSteps = [
  {
    title: "Define Markets, Languages, and Locales",
    body: "Identify the users the product must support, including regional variants, writing systems, market requirements, and launch priorities. Plan by locale, not by language name alone.",
  },
  {
    title: "Audit the Product Foundation",
    body: "Review resource architecture, content extraction, character and script support, interface flexibility, locale behavior, message construction, data models, asset structure, integrations, and release workflows.",
  },
  {
    title: "Prioritize Internationalization Risks",
    body: "Separate launch blockers, serious usability or functional risks, quality issues, scalability concerns, and lower-priority improvements so remediation follows business and user impact.",
  },
  {
    title: "Prepare Content and Terminology",
    body: "Improve ambiguous source content, remove unnecessary fragments, define placeholders, provide visual context, establish terminology, and prepare translation memory resources.",
  },
  {
    title: "Localize a Representative Product Scope",
    body: "Choose features that expose navigation, forms, search, dates, currencies, notifications, subscription or checkout flows, settings, and responsive layouts.",
  },
  {
    title: "Test in Context",
    body: "Validate the localized product across supported devices, responsive breakpoints, primary user journeys, dynamic content, regional settings, input, output, accessibility, and integrations.",
  },
  {
    title: "Resolve Root Causes",
    body: "Route recurring problems to the team that can correct the shared product foundation instead of applying the same workaround independently in every locale.",
  },
  {
    title: "Operationalize Continuous Localization",
    body: "Detect changed resources, reuse approved translations, route updates by risk, run technical checks, generate localized resources, validate builds, and maintain release history.",
  },
];

const faqItems = [
  {
    question: "What do i18n and l10n mean?",
    answer:
      "i18n is the common abbreviation for internationalization; the number 18 represents the letters between the first “i” and final “n.” l10n abbreviates localization in the same way, with 10 letters between “l” and “n.”",
  },
  {
    question: "Is internationalization required before localization?",
    answer:
      "Internationalization should normally begin before localization because it creates the technical foundation a localized product needs. Existing products can still use a phased approach that resolves launch-critical issues, localizes a representative scope, tests the result, and continues remediation according to risk.",
  },
  {
    question: "Is localization the same as translation?",
    answer:
      "No. Translation converts content from one language into another. Localization may also adapt terminology, formats, imagery, product configuration, legal content, user flows, support information, and other market-specific elements.",
  },
  {
    question: "Who is responsible for internationalization?",
    answer:
      "Product, UX, architecture, and engineering teams usually own the technical foundation. Localization managers, linguists, QA teams, and regional stakeholders contribute target-market requirements, identify risks, and validate the resulting product behavior.",
  },
  {
    question: "Can an existing product be internationalized?",
    answer:
      "Yes. The work may include externalizing strings, replacing hard-coded assumptions, improving layouts, adding locale frameworks, restructuring messages, extending character support, updating data models, and introducing multilingual regression testing.",
  },
  {
    question: "What is the difference between internationalization testing and localization testing?",
    answer:
      "Internationalization testing evaluates whether the product can support different languages and locales. Localization testing evaluates a specific localized version for language, terminology, formatting, layout, functionality, and market behavior.",
  },
  {
    question: "Does every language require a separate localization?",
    answer:
      "Localization is usually planned by locale rather than language alone. One language version may serve several markets when terminology, formats, legal requirements, and user expectations are aligned; other products need separate regional variants.",
  },
  {
    question: "How does internationalization support continuous localization?",
    answer:
      "Internationalization separates language resources from product logic and creates predictable locale behavior. Development systems can then identify changed content, route it for localization, and return updated resources without repeatedly rebuilding the product for each market.",
  },
  {
    question: "When should internationalization begin?",
    answer:
      "Ideally, internationalization begins during product planning, architecture, and design. It should continue throughout the product lifecycle because new features, interfaces, platforms, content types, and target markets can introduce new requirements.",
  },
  {
    question: "Where does globalization fit?",
    answer:
      "Some organizations use globalization to describe the broader business and product strategy that includes both internationalization and localization. Terminology varies, so teams should define the terms they use and assign specific responsibilities.",
  },
];

const relatedResources = [
  {
    category: "FOUNDATIONAL GUIDE",
    title: "The Complete Guide to Software and SaaS Localization",
    description:
      "Plan a multilingual software program across product interfaces, documentation, onboarding, support, quality assurance, and recurring releases.",
    href: "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/",
  },
  {
    category: "READINESS",
    title: "Internationalization Readiness Checklist",
    description:
      "Evaluate whether your architecture, content, interfaces, locale behavior, and development workflows are ready for global product localization.",
    href: "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/",
  },
  {
    category: "CONTINUOUS DELIVERY",
    title: "Continuous Software Localization",
    description:
      "Connect product development with translation, terminology, review, quality assurance, and multilingual release coordination.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  },
  {
    category: "QUALITY & TESTING",
    title: "Software Localization Testing Checklist",
    description:
      "Review linguistic, cosmetic, functional, layout, encoding, and locale behavior before releasing software in global markets.",
    href: "https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/",
  },
];

function Eyebrow({ children, dark = false }) {
  return <p className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</p>;
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      <ArrowRight size={16} />
    </a>
  );
}

function ComparisonTable() {
  return (
    <div className="wide-module comparison-module">
      <div className="table-desktop" role="region" aria-label="Internationalization and localization comparison">
        <table>
          <thead>
            <tr>
              <th scope="col">Comparison Area</th>
              <th scope="col">Internationalization</th>
              <th scope="col">Localization</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map(([label, i18n, l10n]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{i18n}</td>
                <td>{l10n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-mobile" aria-label="Internationalization and localization comparison">
        {comparisonRows.map(([label, i18n, l10n]) => (
          <div className="comparison-card" key={label}>
            <h3>{label}</h3>
            <dl>
              <div>
                <dt>Internationalization</dt>
                <dd>{i18n}</dd>
              </div>
              <div>
                <dt>Localization</dt>
                <dd>{l10n}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivityMatrix() {
  return (
    <div className="wide-module matrix-wrap">
      <div className="matrix-desktop" role="region" aria-label="Internationalization, localization, and shared activities">
        <table>
          <thead>
            <tr>
              <th scope="col">Activity</th>
              <th scope="col">Recommended Starting Owner</th>
              <th scope="col">How the Responsibility Works</th>
            </tr>
          </thead>
          <tbody>
            {activityRows.map(([activity, owner, note]) => (
              <tr key={activity}>
                <th scope="row">{activity}</th>
                <td>
                  <span className={`route-tag route-${owner.toLowerCase().replace(/\s+/g, "-")}`}>{owner}</span>
                </td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="matrix-mobile" aria-label="Internationalization, localization, and shared activities">
        {activityRows.map(([activity, owner, note]) => (
          <article className="matrix-card" key={activity}>
            <div className="matrix-card-head">
              <h3>{activity}</h3>
              <span className={`route-tag route-${owner.toLowerCase().replace(/\s+/g, "-")}`}>{owner}</span>
            </div>
            <p>{note}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function FailureTable() {
  return (
    <div className="wide-module failure-wrap">
      <div className="scroll-cue">Swipe or scroll the table horizontally to compare every column.</div>
      <div className="local-scroll" role="region" aria-label="Common localization failure routing table" tabIndex="0">
        <table>
          <thead>
            <tr>
              <th scope="col">Symptom</th>
              <th scope="col">Likely Root Cause</th>
              <th scope="col">Primary Owner</th>
              <th scope="col">Required Validation</th>
            </tr>
          </thead>
          <tbody>
            {failureRows.map(([symptom, cause, owner, validation]) => (
              <tr key={symptom}>
                <th scope="row">{symptom}</th>
                <td>{cause}</td>
                <td>{owner}</td>
                <td>{validation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FAQ() {
  const [openItems, setOpenItems] = useState(() => new Set([0]));

  const toggle = (index) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="faq-panel">
      {faqItems.map((item, index) => {
        const isOpen = openItems.has(index);
        const panelId = `faq-panel-${index}`;
        return (
          <div className="faq-item" key={item.question}>
            <button
              type="button"
              className="faq-button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <ChevronDown className={isOpen ? "chevron open" : "chevron"} />
            </button>
            <div id={panelId} className={isOpen ? "faq-answer open" : "faq-answer"} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TableOfContents({ activeId, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="toc-desktop" aria-label="In this guide">
        <p className="toc-title">In This Guide</p>
        <nav>
          {tocItems.map(([id, label]) => (
            <a
              key={id}
              href={sectionUrl(id)}
              onClick={(event) => onNavigate(event, id)}
              className={activeId === id ? "active" : ""}
              aria-current={activeId === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      <div className="toc-mobile">
        <button
          type="button"
          className="toc-mobile-toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-toc-list"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span>In This Guide</span>
          <ChevronDown className={isOpen ? "chevron open" : "chevron"} />
        </button>
        <nav id="mobile-toc-list" className={isOpen ? "toc-mobile-list open" : "toc-mobile-list"} hidden={!isOpen}>
          {tocItems.map(([id, label]) => (
            <a
              key={id}
              href={sectionUrl(id)}
              onClick={(event) => {
                onNavigate(event, id);
                setIsOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

function InternationalizationVsLocalizationGuide() {
  const [activeId, setActiveId] = useState(tocItems[0][0]);

  const sectionIds = useMemo(() => tocItems.map(([id]) => id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const navigateTo = (event, id) => {
    const element = document.getElementById(id);
    if (!element) return;
    event.preventDefault();
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined") {
      try {
        const targetUrl = new URL(sectionUrl(id));
        const nextUrl = window.location.origin === targetUrl.origin ? targetUrl.href : `#${id}`;
        window.history.replaceState(null, "", nextUrl);
      } catch {
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  };

  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="hero-section" aria-labelledby="page-title">
        <div className="shell hero-inner">
          <Eyebrow>Localization Guide</Eyebrow>
          <h1 id="page-title">Internationalization vs. Localization</h1>
          <p className="hero-deck">
            Understand the difference between internationalization, or i18n, and localization, or l10n,
            and learn how the two disciplines work together to prepare software for global markets.
          </p>
          <div className="hero-actions">
            <a
              href={sectionUrl("at-a-glance")}
              className="button button-primary"
              onClick={(event) => navigateTo(event, "at-a-glance")}
            >
              Explore the Guide
              <ArrowRight />
            </a>
            <a
              href={sectionUrl("activity-matrix")}
              className="button button-secondary"
              onClick={(event) => navigateTo(event, "activity-matrix")}
            >
              Compare i18n and l10n
            </a>
          </div>

          <div className="hero-concept" role="img" aria-label="Internationalization creates an adaptable product foundation, while localization creates market-specific product experiences">
            <div className="concept-foundation">
              <div className="concept-icon"><Layers /></div>
              <div>
                <span>Internationalize</span>
                <strong>Adaptable product foundation</strong>
              </div>
            </div>
            <div className="concept-bridge" aria-hidden="true">
              <span />
              <ArrowRight size={20} />
            </div>
            <div className="concept-locales">
              <div className="locale-window">
                <span>EN-US</span>
                <i /><i /><i />
              </div>
              <div className="locale-window">
                <span>DE-DE</span>
                <i /><i /><i />
              </div>
              <div className="locale-window rtl">
                <span>AR-SA</span>
                <i /><i /><i />
              </div>
              <div className="concept-label">
                <GlobeGrid />
                <div>
                  <span>Localize</span>
                  <strong>Locale-specific experiences</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="summary-title">
        <div className="shell summary-grid">
          <div className="summary-intro">
            <Eyebrow>Key Takeaways</Eyebrow>
            <h2 id="summary-title">The Difference in One View</h2>
            <p>
              Internationalization and localization are not competing approaches. One prepares the product;
              the other adapts it. Strong global products connect both disciplines through testing, ownership,
              and continuous delivery.
            </p>
          </div>
          <div className="takeaway-list">
            {[
              ["Internationalization makes a product adaptable.", "It removes technical assumptions that limit the product to one language, script, layout direction, or regional convention."],
              ["Localization performs the adaptation.", "It translates and adjusts content, terminology, formats, imagery, configuration, and user experiences for a defined locale."],
              ["Translation is part of localization.", "Localization is broader because it can also include product behavior, market configuration, media, legal content, and validation."],
              ["Internationalization is continuous.", "New features, platforms, languages, and markets can introduce new requirements long after the first global launch."],
              ["Testing connects both disciplines.", "Localization testing often reveals product-design or engineering defects that must return to the shared product foundation."],
            ].map(([title, body]) => (
              <div className="takeaway" key={title}>
                <span className="takeaway-marker" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="shell article-shell">
        <TableOfContents activeId={activeId} onNavigate={navigateTo} />

        <article className="article-column">
          <section id="at-a-glance" className="chapter" aria-labelledby="at-a-glance-title">
            <Eyebrow>Core Distinction</Eyebrow>
            <h2 id="at-a-glance-title">Internationalization and Localization at a Glance</h2>
            <p className="chapter-lead">
              Internationalization creates the capacity to support multiple markets. Localization delivers the
              experience for a specific market.
            </p>
            <p>
              Internationalization prepares a product for audiences that differ by language, region, or culture.
              Localization then tailors that product to the expectations of a defined target locale, including but
              not limited to translating user-facing content.
            </p>
            <ComparisonTable />

            <div className="definition-callout">
              <h3>Language and Locale Are Not the Same</h3>
              <p>
                A language identifies a system of communication. A <strong>locale</strong> normally combines language
                preferences with additional regional or cultural behavior. Users in the United States and the United
                Kingdom may both use English, for example, while expecting different date formats, currencies,
                terminology, addresses, measurements, and product settings.
              </p>
              <p>
                Locale identifiers such as <code>en-US</code>, <code>en-GB</code>, <code>fr-FR</code>, and <code>fr-CA</code>
                help software provide the appropriate linguistic and regional behavior.
              </p>
            </div>
          </section>

          <section id="internationalization" className="chapter" aria-labelledby="internationalization-title">
            <Eyebrow>Product Foundation</Eyebrow>
            <h2 id="internationalization-title">What Is Internationalization?</h2>
            <p className="chapter-lead">
              Internationalization removes assumptions that the product will operate in only one language, writing
              system, layout direction, or regional format.
            </p>
            <p>
              It is primarily a product-design and engineering responsibility, but localization specialists should
              contribute requirements before architecture and interface decisions become difficult to change.
              Internationalization does not mean creating a separate product for every country. It creates a reusable
              foundation that can support many locales without extensive code changes for each one.
            </p>

            <div className="editorial-subsections">
              <section>
                <h3>Separate User-Facing Content From Code</h3>
                <p>
                  Software is easier to localize when translatable content is stored outside application logic in
                  structured resource files or content systems. Developers can assign stable keys to interface strings,
                  allowing the application to retrieve the correct localized value for the active locale.
                </p>
                <div className="code-example" aria-label="Example software resource keys">
                  <code>account.security.reset_password</code>
                  <code>checkout.payment_error</code>
                  <code>subscription.renewal_date</code>
                </div>
                <p>
                  This separation supports extraction, translation reuse, changed-string detection, repository
                  integration, and content updates without rewriting product code. Variables, placeholders, tags,
                  markup, resource keys, and conditional logic must remain protected throughout the workflow.
                </p>
              </section>

              <section>
                <h3>Support the Required Characters and Writing Systems</h3>
                <p>
                  A globally ready product must correctly store, process, transmit, search, enter, and display the
                  characters its users need. Unicode provides a common character repertoire, but problems can still
                  occur when databases, interfaces, fonts, sorting logic, third-party systems, or input controls do not
                  handle the required scripts consistently.
                </p>
                <ul className="editorial-list">
                  <li>Database and file encoding</li>
                  <li>Multilingual input and user-generated content</li>
                  <li>Font coverage and fallback</li>
                  <li>Search, sorting, import, export, and data exchange</li>
                </ul>
              </section>

              <section>
                <h3>Design Flexible User Interfaces</h3>
                <p>
                  Translated text does not occupy the same amount of space in every language. Internationalized
                  interfaces support expansion and contraction, natural line wrapping, flexible buttons, vertical
                  growth, responsive layouts, different font metrics, and longer navigation or form labels.
                </p>
                <p>
                  Responsive design alone does not guarantee localization readiness. A layout may adapt to smaller
                  screens while still failing when translated text becomes longer or when a different script changes
                  visual density.
                </p>
              </section>

              <section>
                <h3>Enable Right-to-Left and Bidirectional Content</h3>
                <p>
                  Languages such as Arabic and Hebrew commonly use right-to-left writing systems. Supporting them may
                  require changes to alignment, navigation flow, component order, directional icons, forms, tables,
                  and mixed-script content containing phone numbers, product codes, URLs, email addresses, or
                  Latin-script brand names.
                </p>
                <p>
                  Internationalization provides the directional behavior. Localization and native-language testing
                  confirm that the resulting interface is clear and usable for the intended locale.
                </p>
              </section>

              <section>
                <h3>Build Locale-Aware Product Behavior</h3>
                <p>
                  Internationalized products should handle dates, times, time zones, calendars, numbers, currencies,
                  measurements, names, addresses, telephone numbers, sorting, language selection, fallback behavior,
                  and locale-specific input rules.
                </p>
                <div className="format-example" aria-label="Examples of date formatting">
                  <span>July 8, 2026</span>
                  <span>8 July 2026</span>
                  <span>08/07/2026</span>
                  <span>2026-07-08</span>
                </div>
                <p>
                  The underlying data should be stored unambiguously and then presented according to the user’s locale.
                  Internationalization enables the format; localization and product configuration determine which
                  presentation is appropriate.
                </p>
              </section>

              <section>
                <h3>Support Language-Specific Grammar</h3>
                <p>
                  Software messages frequently contain dynamic values. English often distinguishes between singular
                  and plural, while other languages may require several plural categories or different grammatical
                  structures around a number.
                </p>
                <div className="message-example">
                  <p>You have 1 message.</p>
                  <p>You have 5 messages.</p>
                </div>
                <p>
                  Developers should avoid joining fragments according to source-language word order. Translators need
                  complete messages with clear variables and context so they can adapt grammar naturally.
                </p>
              </section>

              <section>
                <h3>Create Reusable, Internationalized Components</h3>
                <p>
                  A reusable global form component can support variable label length, different name and address
                  structures, locale-aware validation, right-to-left display, appropriate keyboard behavior,
                  translated errors, accessible labels, and flexible help text. Shared components reduce one-off
                  language fixes and help new features inherit established global behavior.
                </p>
              </section>
            </div>

            <div className="context-link-row">
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/">
                Review the Internationalization Readiness Checklist
              </EditorialLink>
            </div>
          </section>

          <section id="localization" className="chapter" aria-labelledby="localization-title">
            <Eyebrow>Market Adaptation</Eyebrow>
            <h2 id="localization-title">What Is Localization?</h2>
            <p className="chapter-lead">
              Localization transforms an adaptable product foundation into an accurate, usable, and appropriate
              experience for a defined locale.
            </p>
            <p>
              Translation is central to localization, but a complete program may also address terminology, regional
              formats, product configuration, imagery, legal text, help content, customer support, and market-specific
              validation. The result should be a coherent product experience, not simply software containing another
              language.
            </p>

            <div className="localization-grid">
              <section>
                <h3>Translate the Complete Product Experience</h3>
                <p>
                  Scope the full user journey, including interface strings, forms, alerts, notifications, onboarding,
                  dashboards, billing, help centers, documentation, release notes, support communications, app-store
                  descriptions, tutorials, and multimedia.
                </p>
              </section>
              <section>
                <h3>Manage Product Terminology and Voice</h3>
                <p>
                  Define approved feature names, interface terminology, words that remain untranslated, preferred and
                  prohibited translations, tone, formality, abbreviations, capitalization, and regional terminology.
                  Translation memory and terminology management should evolve with the product.
                </p>
              </section>
              <section>
                <h3>Apply Locale-Specific Formats and Configuration</h3>
                <p>
                  Select and validate dates, times, currencies, measurements, tax or payment settings, address and
                  phone formats, names, local support information, locale defaults, fallback behavior, and
                  market-specific feature availability.
                </p>
              </section>
              <section>
                <h3>Adapt Images, Media, and Cultural References</h3>
                <p>
                  Review images containing text, screenshots, icons, symbols, diagrams, illustrations, video captions,
                  voice-over, audio, examples, and scenarios. Not every asset needs replacement; the goal is to identify
                  elements that could confuse users or contradict the localized product.
                </p>
              </section>
              <section>
                <h3>Address Market and Regulatory Requirements</h3>
                <p>
                  Some products require localized disclosures, privacy language, consent text, product information,
                  terms, or other market-specific content. Localization can coordinate the language workflow, while
                  legal, regulatory, compliance, and regional specialists validate requirements in their areas.
                </p>
              </section>
              <section>
                <h3>Validate the Localized Product</h3>
                <p>
                  Review language, terminology, tone, text expansion, fonts, directionality, navigation, forms, dates,
                  currencies, sorting, search, responsive behavior, accessibility, and complete user journeys in the
                  environment where customers will use the product.
                </p>
              </section>
            </div>

            <div className="context-link-row">
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/">
                Use the Software Localization Testing Checklist
              </EditorialLink>
            </div>
          </section>

          <section id="working-together" className="chapter" aria-labelledby="working-together-title">
            <Eyebrow>Connected Lifecycle</Eyebrow>
            <h2 id="working-together-title">How Internationalization and Localization Work Together</h2>
            <p className="chapter-lead">
              Internationalization normally begins earlier, but both disciplines form a recurring feedback loop across
              the product lifecycle.
            </p>
            <p>
              Modern software changes continuously. New features, interface components, integrations, content types,
              and markets can introduce new requirements. Localization and testing also expose assumptions that were
              not visible when the original product was designed.
            </p>

            <div className="wide-module framework-panel">
              <Eyebrow dark>Global Product Readiness Model</Eyebrow>
              <h3>Internationalize → Localize → Validate → Maintain</h3>
              <div className="framework-stages">
                <article>
                  <div className="framework-icon"><Layers /></div>
                  <span>01</span>
                  <h4>Internationalize</h4>
                  <p>Prepare architecture, content structures, interfaces, locale behavior, and reusable components.</p>
                </article>
                <article>
                  <div className="framework-icon"><GlobeGrid /></div>
                  <span>02</span>
                  <h4>Localize</h4>
                  <p>Translate and adapt content, terminology, configuration, media, and market requirements.</p>
                </article>
                <article>
                  <div className="framework-icon"><TestTube /></div>
                  <span>03</span>
                  <h4>Validate</h4>
                  <p>Test language, layout, functionality, accessibility, regional behavior, and complete journeys.</p>
                </article>
                <article>
                  <div className="framework-icon"><Refresh /></div>
                  <span>04</span>
                  <h4>Maintain</h4>
                  <p>Keep localized content and the product foundation aligned as features and requirements change.</p>
                </article>
              </div>
              <div className="framework-loop">
                <Refresh size={20} />
                <span>Testing and market feedback return improvements to the shared product foundation.</span>
              </div>
            </div>

            <div className="example-block">
              <Eyebrow>Illustrative Scenario</Eyebrow>
              <h3>Localizing a SaaS Subscription Management Screen</h3>
              <div className="example-steps">
                <div>
                  <strong>Internationalize</strong>
                  <p>Externalize strings, protect variables, enable locale-aware dates and currencies, and build flexible labels and buttons.</p>
                </div>
                <div>
                  <strong>Localize</strong>
                  <p>Translate subscription terminology, adapt billing and cancellation language, and confirm market-specific content.</p>
                </div>
                <div>
                  <strong>Validate</strong>
                  <p>Test labels, currencies, renewal dates, button expansion, forms, mobile layouts, directionality, and the complete user journey.</p>
                </div>
                <div>
                  <strong>Maintain</strong>
                  <p>Route new and changed strings through the localization workflow whenever the feature evolves.</p>
                </div>
              </div>
            </div>

            <div className="context-link-row">
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/continuous-software-localization/">
                Connect the lifecycle with Continuous Software Localization
              </EditorialLink>
            </div>
          </section>

          <section id="activity-matrix" className="chapter" aria-labelledby="activity-matrix-title">
            <Eyebrow>Decision Matrix</Eyebrow>
            <h2 id="activity-matrix-title">Which Activities Belong to i18n, l10n, or Both?</h2>
            <p className="chapter-lead">
              Some responsibilities have clear primary owners. Others require product, engineering, localization, and
              quality teams to work together.
            </p>
            <p>
              The purpose of the matrix is not to force every task into one department. It identifies the recommended
              starting owner, the contributors required, and the team responsible for final acceptance.
            </p>
            <ActivityMatrix />
          </section>

          <section id="ownership" className="chapter" aria-labelledby="ownership-title">
            <Eyebrow>Shared Operating Model</Eyebrow>
            <h2 id="ownership-title">Who Owns Internationalization and Localization?</h2>
            <p className="chapter-lead">
              Clear ownership prevents internationalization defects from being treated as translation problems and
              prevents market issues from reaching engineering without the necessary language or regional context.
            </p>

            <div className="ownership-grid">
              {[
                ["Product Management", "Defines target markets, supported locales, global feature requirements, launch criteria, product behavior, and remediation priorities."],
                ["UX and Design", "Creates adaptable components, text-expansion tolerance, responsive behavior, directionality, accessible labels, and multilingual design-system guidance."],
                ["Software Engineering", "Owns resource architecture, encoding, locale frameworks, formatting logic, plural support, directionality, input behavior, integrations, and technical defect resolution."],
                ["Localization Management", "Coordinates locale scope, content routing, terminology, translation memory, review, linguistic quality, release coordination, reporting, and governance."],
                ["Linguists and Subject-Matter Reviewers", "Evaluate meaning, accuracy, terminology, product voice, grammar, clarity, market suitability, and source strings that are difficult to localize."],
                ["Regional Stakeholders", "Contribute local customer expectations, terminology, market requirements, product suitability feedback, and approved regional information."],
                ["Quality Assurance", "Coordinates localized build testing, functional validation, layout checks, locale scenarios, defect classification, regression coverage, and release readiness."],
                ["Release Management", "Confirms locale completion, dependency resolution, quality gates, resource inclusion, launch sequencing, and multilingual release coordination."],
              ].map(([title, body]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="common-failures" className="chapter" aria-labelledby="common-failures-title">
            <Eyebrow>Issue Routing</Eyebrow>
            <h2 id="common-failures-title">Common Internationalization and Localization Failures</h2>
            <p className="chapter-lead">
              Many defects that look like poor translation are caused by the product foundation. Other apparent
              software defects originate in terminology, locale configuration, or localized content.
            </p>
            <FailureTable />

            <div className="failure-notes">
              <section>
                <h3>Hard-Coded Strings</h3>
                <p>Hard-coded interface text may be difficult to extract, translate, update, and test, creating mixed-language screens and inconsistent releases.</p>
              </section>
              <section>
                <h3>Concatenated Messages</h3>
                <p>Joining words or fragments assumes that every language follows the source-language order and grammar. Full contextual messages are safer.</p>
              </section>
              <section>
                <h3>Fixed Layouts</h3>
                <p>Containers designed around source text often fail after translation. The root cause is usually the interface rather than the translation length.</p>
              </section>
              <section>
                <h3>One-Off Locale Fixes</h3>
                <p>Quick market-specific code changes can create long-term maintenance risk. Repeated defects should be corrected in the shared component or framework.</p>
              </section>
            </div>
          </section>

          <section id="planning" className="chapter" aria-labelledby="planning-title">
            <Eyebrow>Scenario Guidance</Eyebrow>
            <h2 id="planning-title">Planning for New and Existing Products</h2>
            <p className="chapter-lead">
              New products should make internationalization part of the foundation. Existing products should use a
              risk-based remediation plan rather than waiting for a perfect rebuild.
            </p>

            <div className="scenario-list">
              <article>
                <div className="scenario-label">NEW PRODUCT</div>
                <div>
                  <h3>A New Software Product</h3>
                  <p>
                    Identify likely languages, scripts, and locales early; include internationalization in architecture
                    and design requirements; externalize content from the beginning; use locale-aware frameworks;
                    design reusable components; and test representative languages during development.
                  </p>
                  <p className="scenario-recommendation">
                    <strong>Recommended starting point:</strong> include global-readiness criteria in the definition of done for shared components and new features.
                  </p>
                </div>
              </article>
              <article>
                <div className="scenario-label">FIRST EXPANSION</div>
                <div>
                  <h3>An Existing Product Entering Its First New Market</h3>
                  <p>
                    Conduct an internationalization audit, identify launch-blocking defects, prioritize high-risk
                    workflows, localize a representative product area, and use the pilot to reveal architecture gaps
                    that may not be visible through code review alone.
                  </p>
                  <p className="scenario-recommendation">
                    <strong>Recommended starting point:</strong> prioritize remediation according to usability, product integrity, compliance, schedule, and future scalability.
                  </p>
                </div>
              </article>
              <article>
                <div className="scenario-label">MATURING PROGRAM</div>
                <div>
                  <h3>A Product Already Available in Several Languages</h3>
                  <p>
                    Standardize terminology, consolidate translation memories, identify recurring defects, replace
                    locale-specific workarounds with reusable components, connect localization with repositories and
                    CI/CD, and define multilingual release gates.
                  </p>
                  <p className="scenario-recommendation">
                    <strong>Recommended starting point:</strong> use defect and workflow data to decide which technical debt has the greatest recurring cost.
                  </p>
                </div>
              </article>
              <article>
                <div className="scenario-label">ACCELERATED LAUNCH</div>
                <div>
                  <h3>A Time-Critical Market Launch</h3>
                  <p>
                    Separate launch-blocking defects, high-risk market requirements, and issues that can be corrected
                    through controlled post-launch remediation. Document temporary workarounds and assign clear owners.
                  </p>
                  <p className="scenario-recommendation">
                    <strong>Recommended starting point:</strong> compress scope carefully without eliminating quality, security, functionality, or regulatory controls.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="readiness" className="chapter" aria-labelledby="readiness-title">
            <Eyebrow>Quick Assessment</Eyebrow>
            <h2 id="readiness-title">Global Product Readiness Questions</h2>
            <p className="chapter-lead">
              A product does not need to be technically perfect before localization planning begins, but unresolved
              foundational issues should be visible, prioritized, and owned.
            </p>

            <div className="wide-module readiness-panel">
              {readinessGroups.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="check-marker" aria-hidden="true"><Check size={16} /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="readiness-states">
              <article>
                <span>READY TO LOCALIZE</span>
                <p>The core architecture supports the intended locales, with remaining work focused mainly on market adaptation and validation.</p>
              </article>
              <article>
                <span>TARGETED REMEDIATION NEEDED</span>
                <p>The product can proceed through a phased program, but identified issues should be corrected before or during implementation.</p>
              </article>
              <article>
                <span>HIGH REWORK RISK</span>
                <p>Foundational limitations could affect usability, quality, schedule, compliance, or the ability to maintain additional locales.</p>
              </article>
            </div>

            <div className="context-link-row">
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/">
                Continue with the complete readiness checklist
              </EditorialLink>
            </div>
          </section>

          <section id="roadmap" className="chapter" aria-labelledby="roadmap-title">
            <Eyebrow>Implementation Roadmap</Eyebrow>
            <h2 id="roadmap-title">An Internationalization and Localization Roadmap</h2>
            <p className="chapter-lead">
              Internationalization and localization are most effective when they are planned as connected product
              workstreams with shared release criteria.
            </p>

            <div className="roadmap">
              {roadmapSteps.map((step, index) => (
                <article key={step.title}>
                  <div className="roadmap-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="roadmap-links">
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/software-string-preparation-checklist/">
                Prepare Software Strings for Localization
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/resources/localization-guides/continuous-software-localization/">
                Build a Continuous Software Localization Workflow
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/developers/software-localization-api/">
                Explore the Software Localization API
              </EditorialLink>
            </div>
          </section>

          <section id="faq" className="chapter" aria-labelledby="faq-title">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 id="faq-title">Frequently Asked Questions</h2>
            <p className="chapter-lead">
              These answers clarify common terminology, sequencing, ownership, testing, and implementation questions.
            </p>
            <FAQ />
          </section>

          <section id="sources" className="chapter sources-section" aria-labelledby="sources-title">
            <Eyebrow>Further Reading</Eyebrow>
            <h2 id="sources-title">Sources and References</h2>
            <p className="chapter-lead">
              These authoritative references provide deeper technical definitions and implementation guidance for
              internationalization, locale data, Unicode, bidirectional text, and language-specific message formatting.
            </p>
            <div className="source-list">
              <a href="https://www.w3.org/TR/i18n-glossary/" target="_blank" rel="noreferrer">
                <span>W3C Internationalization Glossary</span>
                <strong>World Wide Web Consortium</strong>
              </a>
              <a href="https://www.w3.org/International/" target="_blank" rel="noreferrer">
                <span>Internationalization Guidance</span>
                <strong>W3C Internationalization Activity</strong>
              </a>
              <a href="https://home.unicode.org/" target="_blank" rel="noreferrer">
                <span>The Unicode Standard and Technical Resources</span>
                <strong>Unicode Consortium</strong>
              </a>
              <a href="https://cldr.unicode.org/" target="_blank" rel="noreferrer">
                <span>Common Locale Data Repository</span>
                <strong>Unicode CLDR</strong>
              </a>
              <a href="https://unicode-org.github.io/icu/userguide/format_parse/messages/" target="_blank" rel="noreferrer">
                <span>Formatting Messages and Plural Logic</span>
                <strong>ICU User Guide</strong>
              </a>
            </div>
          </section>
        </article>
      </div>

      <section className="conclusion-section" aria-labelledby="conclusion-title">
        <div className="shell conclusion-inner">
          <div>
            <Eyebrow>Global Product Readiness</Eyebrow>
            <h2 id="conclusion-title">Prepare the Product, Then Deliver the Market Experience</h2>
          </div>
          <div>
            <p>
              Internationalization creates a product foundation that can support different languages, scripts,
              formats, and regional behaviors. Localization uses that foundation to deliver an accurate, usable, and
              appropriate experience for each selected locale.
            </p>
            <p>
              Testing and continuous maintenance keep the two disciplines aligned as the product evolves. The most
              scalable programs connect product architecture, localized content, quality assurance, and recurring
              releases through one shared operating model.
            </p>
          </div>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-header">
            <div>
              <Eyebrow>Continue Your Planning</Eyebrow>
              <h2 id="related-title">Related Software Localization Resources</h2>
            </div>
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">
              Explore All Localization Guides
            </EditorialLink>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="related-resource" href={resource.href} key={resource.title}>
                <span>{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="related-action">
                  View the Resource
                  <ArrowRight size={17} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section" aria-labelledby="cta-title">
        <div className="shell">
          <div className="final-cta">
            <div className="cta-copy">
              <Eyebrow>Software Localization</Eyebrow>
              <h2 id="cta-title">Prepare Your Software for Global Markets</h2>
              <p>
                Connect product internationalization, professional localization, terminology, testing, and continuous
                delivery through a coordinated global product workflow.
              </p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert
                <ArrowRight />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/software-localization-services/">
                Explore Software Localization Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .stepes-guide {
    --magenta: ${colors.magenta};
    --magenta-dark: ${colors.magentaDark};
    --magenta-deep: ${colors.magentaDeep};
    --blush: ${colors.blush};
    --blush-strong: ${colors.blushStrong};
    --dark-eyebrow: ${colors.darkEyebrow};
    --ink: ${colors.ink};
    --body: ${colors.body};
    --muted: ${colors.muted};
    --line: ${colors.line};
    --soft: ${colors.soft};
    --dark: ${colors.dark};
    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .stepes-guide *,
  .stepes-guide *::before,
  .stepes-guide *::after { box-sizing: border-box; }

  .stepes-guide a { color: inherit; }
  .stepes-guide p, .stepes-guide li, .stepes-guide td, .stepes-guide dd { color: var(--body); }
  .stepes-guide p { margin: 0; font-size: 18px; line-height: 1.72; }
  .stepes-guide h1, .stepes-guide h2, .stepes-guide h3, .stepes-guide h4 { margin: 0; color: var(--ink); font-weight: 600; }
  .stepes-guide h1 { font-size: 48px; line-height: 1.07; letter-spacing: -0.035em; }
  .stepes-guide h2 { font-size: 36px; line-height: 1.15; letter-spacing: -0.025em; }
  .stepes-guide h3 { font-size: 24px; line-height: 1.28; letter-spacing: -0.015em; }
  .stepes-guide h4 { font-size: 19px; line-height: 1.35; }
  .stepes-guide code { overflow-wrap: anywhere; }

  .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .eyebrow {
    margin: 0 0 18px !important;
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.2 !important;
    letter-spacing: .12em !important;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--dark-eyebrow) !important; }

  .button {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    padding: 13px 22px;
    border: 1px solid transparent;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    transition: background-color .2s ease, border-color .2s ease, box-shadow .2s ease, transform .2s ease;
  }
  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible,
  .button-primary *,
  .button-primary svg,
  .button-primary svg * {
    color: #fff !important;
    fill: none;
    stroke: currentColor;
  }
  .button-primary { background: var(--magenta); box-shadow: 0 12px 28px rgba(193,29,99,.15); }
  .button-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .button-secondary { background: #fff; border-color: #D8DEE7; color: #273244; }
  .button-secondary:hover { border-color: rgba(193,29,99,.35); color: var(--ink); transform: translateY(-1px); }
  .button:focus-visible, .editorial-link:focus-visible, .related-resource:focus-visible, .source-list a:focus-visible,
  .faq-button:focus-visible, .toc-mobile-toggle:focus-visible, .toc-desktop a:focus-visible, .toc-mobile-list a:focus-visible {
    outline: 3px solid rgba(193,29,99,.3);
    outline-offset: 3px;
  }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 104px 0 92px;
    background:
      radial-gradient(circle at 18% 15%, rgba(193,29,99,.07), transparent 28%),
      radial-gradient(circle at 82% 55%, rgba(193,29,99,.045), transparent 30%),
      linear-gradient(180deg, #fff 0%, #fff 68%, #FCFCFD 100%);
    border-bottom: 1px solid #EEF1F5;
  }
  .hero-section::before {
    content: "";
    position: absolute;
    width: 360px;
    height: 360px;
    right: -180px;
    top: -180px;
    border: 1px solid rgba(193,29,99,.08);
    border-radius: 50%;
    pointer-events: none;
  }
  .hero-inner { text-align: center; }
  .hero-inner h1 { max-width: 950px; margin: 0 auto; }
  .hero-deck { max-width: 820px; margin: 28px auto 0 !important; font-size: 20px !important; line-height: 1.65 !important; }
  .hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 36px; }

  .hero-concept {
    max-width: 1020px;
    margin: 68px auto 0;
    padding: 28px;
    display: grid;
    grid-template-columns: minmax(230px, .8fr) 110px minmax(440px, 1.5fr);
    align-items: center;
    gap: 18px;
    border: 1px solid #E4E8EF;
    border-radius: 28px;
    background: rgba(255,255,255,.88);
    box-shadow: 0 20px 54px rgba(15,23,42,.055);
    text-align: left;
  }
  .concept-foundation, .concept-label { display: flex; align-items: center; gap: 14px; }
  .concept-icon {
    flex: 0 0 50px; width: 50px; height: 50px; display: grid; place-items: center;
    border-radius: 16px; background: var(--blush); color: var(--magenta);
  }
  .concept-foundation span, .concept-label span { display: block; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
  .concept-foundation strong, .concept-label strong { display: block; margin-top: 5px; color: var(--ink); font-size: 16px; line-height: 1.4; }
  .concept-bridge { display: flex; align-items: center; gap: 8px; color: var(--magenta); }
  .concept-bridge span { flex: 1; height: 1px; background: #D7DCE5; }
  .concept-locales { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; align-items: stretch; }
  .locale-window { min-height: 92px; padding: 14px; border: 1px solid #E2E7EE; border-radius: 16px; background: #fff; }
  .locale-window span { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .08em; }
  .locale-window i { display: block; height: 5px; margin-top: 9px; border-radius: 999px; background: #E5E9EF; }
  .locale-window i:nth-of-type(1) { width: 88%; }
  .locale-window i:nth-of-type(2) { width: 66%; }
  .locale-window i:nth-of-type(3) { width: 76%; }
  .locale-window.rtl i { margin-left: auto; }
  .locale-window.rtl i:nth-of-type(1) { width: 78%; }
  .locale-window.rtl i:nth-of-type(2) { width: 92%; }
  .locale-window.rtl i:nth-of-type(3) { width: 60%; }
  .concept-label { grid-column: 1 / -1; padding-top: 12px; margin-top: 2px; border-top: 1px solid #EDF0F4; color: var(--magenta); }

  .summary-section { padding: 88px 0; background: var(--soft); border-bottom: 1px solid #E9EDF2; }
  .summary-grid { display: grid; grid-template-columns: minmax(300px, .8fr) minmax(540px, 1.4fr); gap: 80px; align-items: start; }
  .summary-intro { position: sticky; top: 110px; }
  .summary-intro h2 { max-width: 420px; }
  .summary-intro > p:last-child { max-width: 470px; margin-top: 24px !important; }
  .takeaway-list { border-top: 1px solid #DDE3EA; }
  .takeaway { display: grid; grid-template-columns: 10px 1fr; gap: 18px; align-items: start; padding: 22px 0; border-bottom: 1px solid #DDE3EA; }
  .takeaway-marker { width: 7px; height: 7px; margin-top: 10px; border-radius: 50%; background: var(--magenta); }
  .takeaway h3 { font-size: 18px; line-height: 1.4; }
  .takeaway p { margin-top: 5px !important; font-size: 16px; line-height: 1.62; }

  .article-shell { max-width: 1280px; display: grid; grid-template-columns: 250px minmax(0, 760px); gap: 64px; align-items: start; padding-top: 96px; padding-bottom: 48px; }
  .toc-desktop { position: sticky; top: 96px; align-self: start; max-height: calc(100vh - 124px); overflow: auto; padding: 2px 0 22px; }
  .toc-title { margin-bottom: 18px !important; color: var(--ink) !important; font-size: 16px !important; line-height: 1.4 !important; font-weight: 600; }
  .toc-desktop nav { border-left: 1px solid #DDE3EA; }
  .toc-desktop a {
    display: block; position: relative; padding: 8px 0 8px 20px; color: #637083; font-size: 15px; line-height: 1.45; font-weight: 500; text-decoration: none;
  }
  .toc-desktop a::before { content: ""; position: absolute; left: -1px; top: 8px; bottom: 8px; width: 2px; background: transparent; }
  .toc-desktop a:hover, .toc-desktop a.active { color: var(--magenta); }
  .toc-desktop a.active { font-weight: 600; }
  .toc-desktop a.active::before { background: var(--magenta); }
  .toc-mobile { display: none; }

  .article-column { min-width: 0; }
  .chapter { scroll-margin-top: 112px; padding: 0 0 96px; }
  .chapter + .chapter { padding-top: 96px; border-top: 1px solid #E4E8EE; }
  .chapter h2 { max-width: 760px; }
  .chapter > p:not(.eyebrow), .chapter-lead { max-width: 760px; }
  .chapter > p + p { margin-top: 20px !important; }
  .chapter-lead { margin: 24px 0 18px !important; color: #283548 !important; font-size: 20px !important; line-height: 1.62 !important; }
  .chapter .wide-module { width: 840px; max-width: calc(100vw - 80px); margin-top: 38px; }

  .comparison-module { border: 1px solid #DEE4EB; border-radius: 24px; overflow: hidden; background: #fff; }
  table { width: 100%; border-collapse: collapse; }
  th, td { padding: 18px 20px; border-bottom: 1px solid #E3E8EE; vertical-align: top; text-align: left; font-size: 16px; line-height: 1.55; }
  thead th { background: #F7F9FB; color: var(--ink); font-weight: 600; }
  tbody th { width: 24%; color: var(--ink); font-weight: 600; }
  tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }
  .comparison-module thead th:nth-child(2) { color: var(--magenta); }
  .table-mobile, .matrix-mobile { display: none; }

  .definition-callout { margin-top: 34px; padding: 28px 30px; border-left: 3px solid var(--magenta); background: var(--blush); border-radius: 0 22px 22px 0; }
  .definition-callout h3 { font-size: 21px; }
  .definition-callout p { margin-top: 13px !important; font-size: 17px; line-height: 1.65; }
  .definition-callout code { padding: 2px 6px; border-radius: 6px; background: #fff; color: var(--magenta-deep); font-size: 15px; }

  .editorial-subsections { margin-top: 42px; border-top: 1px solid #E1E6EC; }
  .editorial-subsections > section { display: grid; grid-template-columns: 230px minmax(0, 1fr); gap: 34px; padding: 32px 0; border-bottom: 1px solid #E1E6EC; }
  .editorial-subsections h3 { font-size: 21px; }
  .editorial-subsections p { font-size: 17px; line-height: 1.68; }
  .editorial-subsections p + p { margin-top: 15px !important; }
  .code-example { margin: 18px 0; display: grid; gap: 8px; padding: 18px 20px; border: 1px solid #DFE5EC; border-radius: 16px; background: #F8FAFC; }
  .code-example code { color: #334155; font-size: 15px; line-height: 1.5; }
  .editorial-list { margin: 18px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 20px; }
  .editorial-list li { position: relative; padding-left: 17px; font-size: 16px; line-height: 1.55; }
  .editorial-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 6px; height: 2px; background: var(--magenta); }
  .format-example { margin: 18px 0; display: flex; flex-wrap: wrap; gap: 8px; }
  .format-example span { padding: 8px 11px; border: 1px solid #E0E5EC; border-radius: 10px; background: #fff; color: #334155; font-size: 15px; font-weight: 600; }
  .message-example { margin: 18px 0; padding: 16px 18px; border: 1px solid #E0E6EC; border-radius: 16px; background: #F8FAFC; }
  .message-example p { font-size: 16px; line-height: 1.55; }
  .message-example p + p { margin-top: 4px !important; }

  .context-link-row { margin-top: 30px; }
  .editorial-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--magenta) !important; font-size: 16px; line-height: 1.45; font-weight: 600; text-decoration: none; }
  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link:hover { color: var(--magenta-dark) !important; }
  .editorial-link:hover svg { transform: translateX(3px); }

  .localization-grid { margin-top: 42px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #E1E6EC; border-left: 1px solid #E1E6EC; }
  .localization-grid section { padding: 28px 30px; border-right: 1px solid #E1E6EC; border-bottom: 1px solid #E1E6EC; }
  .localization-grid h3 { font-size: 20px; }
  .localization-grid p { margin-top: 12px !important; font-size: 16px; line-height: 1.65; }

  .framework-panel { position: relative; overflow: hidden; padding: 42px; border-radius: 28px; background: var(--dark); color: #fff; }
  .framework-panel::after { content: ""; position: absolute; width: 290px; height: 290px; right: -110px; top: -160px; border: 1px solid rgba(242,167,198,.17); border-radius: 50%; }
  .framework-panel h3 { position: relative; z-index: 1; color: #fff; font-size: 30px; }
  .framework-stages { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 34px; border-top: 1px solid rgba(255,255,255,.15); border-bottom: 1px solid rgba(255,255,255,.15); }
  .framework-stages article { position: relative; padding: 28px 24px 28px 0; }
  .framework-stages article + article { padding-left: 24px; border-left: 1px solid rgba(255,255,255,.15); }
  .framework-icon { width: 42px; height: 42px; display: grid; place-items: center; margin-bottom: 22px; border-radius: 14px; background: rgba(242,167,198,.1); color: var(--dark-eyebrow); }
  .framework-stages article > span { color: var(--dark-eyebrow); font-size: 11px; font-weight: 600; letter-spacing: .1em; }
  .framework-stages h4 { margin-top: 6px; color: #fff; font-size: 19px; }
  .framework-stages p { margin-top: 10px !important; color: #C6CEDA; font-size: 16px; line-height: 1.58; }
  .framework-loop { position: relative; z-index: 1; display: flex; align-items: center; gap: 10px; margin-top: 22px; color: var(--dark-eyebrow); }
  .framework-loop span { color: #E8EBF0; font-size: 16px; line-height: 1.5; }

  .example-block { margin-top: 34px; padding: 32px; border: 1px solid #E0E5EC; border-radius: 24px; background: #fff; }
  .example-block h3 { font-size: 22px; }
  .example-steps { margin-top: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid #E1E6EC; border-left: 1px solid #E1E6EC; }
  .example-steps > div { padding: 22px; border-right: 1px solid #E1E6EC; border-bottom: 1px solid #E1E6EC; }
  .example-steps strong { color: var(--magenta); font-size: 16px; }
  .example-steps p { margin-top: 7px !important; font-size: 16px; line-height: 1.58; }

  .matrix-wrap { border: 1px solid #DEE4EB; border-radius: 24px; overflow: hidden; background: #fff; }
  .matrix-desktop tbody th { width: 29%; }
  .matrix-desktop td:nth-child(2) { width: 190px; }
  .route-tag { display: inline-flex; align-items: center; min-height: 30px; padding: 5px 10px; border-radius: 999px; font-size: 13px; line-height: 1.2; font-weight: 600; white-space: nowrap; }
  .route-internationalization { color: #3A475A; background: #EEF2F6; }
  .route-localization { color: var(--magenta-deep); background: var(--blush); }
  .route-shared { color: #5B3D50; background: #F6E8EE; }

  .ownership-grid { margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #E1E6EC; }
  .ownership-grid article { padding: 28px 26px 28px 0; border-bottom: 1px solid #E1E6EC; }
  .ownership-grid article:nth-child(even) { padding-left: 30px; border-left: 1px solid #E1E6EC; }
  .ownership-grid h3 { font-size: 20px; }
  .ownership-grid p { margin-top: 10px !important; font-size: 16px; line-height: 1.65; }

  .failure-wrap { padding: 0; }
  .local-scroll { overflow-x: auto; border: 1px solid #DEE4EB; border-radius: 24px; background: #fff; }
  .failure-wrap table { min-width: 940px; }
  .failure-wrap tbody th { width: 240px; }
  .scroll-cue { display: none; margin-bottom: 10px; color: var(--muted); font-size: 14px; line-height: 1.45; }
  .failure-notes { margin-top: 34px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #E1E6EC; }
  .failure-notes section { padding: 25px 28px 25px 0; border-bottom: 1px solid #E1E6EC; }
  .failure-notes section:nth-child(even) { padding-left: 30px; border-left: 1px solid #E1E6EC; }
  .failure-notes h3 { font-size: 19px; }
  .failure-notes p { margin-top: 9px !important; font-size: 16px; line-height: 1.62; }

  .scenario-list { margin-top: 40px; border-top: 1px solid #E1E6EC; }
  .scenario-list article { display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 32px; padding: 30px 0; border-bottom: 1px solid #E1E6EC; }
  .scenario-label { padding-top: 5px; color: var(--magenta); font-size: 11px; line-height: 1.4; font-weight: 600; letter-spacing: .1em; }
  .scenario-list h3 { font-size: 21px; }
  .scenario-list p { margin-top: 11px !important; font-size: 17px; line-height: 1.65; }
  .scenario-recommendation { padding: 14px 16px; border-radius: 14px; background: #F8FAFC; }
  .scenario-recommendation strong { color: var(--ink); }

  .readiness-panel { padding: 36px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid #DFE5EC; border-radius: 26px; background: #FBFCFD; }
  .readiness-panel section { padding: 0 26px; }
  .readiness-panel section:first-child { padding-left: 0; }
  .readiness-panel section:last-child { padding-right: 0; }
  .readiness-panel section + section { border-left: 1px solid #DFE5EC; }
  .readiness-panel h3 { font-size: 19px; }
  .readiness-panel ul { margin: 20px 0 0; padding: 0; list-style: none; display: grid; gap: 14px; }
  .readiness-panel li { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: start; font-size: 16px; line-height: 1.55; }
  .check-marker { width: 22px; height: 22px; margin-top: 1px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); }
  .readiness-states { margin-top: 28px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .readiness-states article { padding: 20px; border: 1px solid #E0E5EC; border-radius: 18px; background: #fff; }
  .readiness-states span { color: var(--magenta); font-size: 11px; line-height: 1.4; font-weight: 600; letter-spacing: .09em; }
  .readiness-states p { margin-top: 8px !important; font-size: 16px; line-height: 1.58; }

  .roadmap { margin-top: 42px; border-top: 1px solid #DDE3EA; }
  .roadmap article { display: grid; grid-template-columns: 72px 1fr; gap: 26px; padding: 28px 0; border-bottom: 1px solid #DDE3EA; }
  .roadmap-number { color: var(--magenta); font-size: 18px; line-height: 1.4; font-weight: 600; letter-spacing: .04em; }
  .roadmap h3 { font-size: 21px; }
  .roadmap p { margin-top: 8px !important; font-size: 17px; line-height: 1.65; }
  .roadmap-links { margin-top: 26px; display: grid; justify-items: start; gap: 4px; }

  .faq-panel { margin-top: 34px; border-top: 1px solid #DDE3EA; }
  .faq-item { border-bottom: 1px solid #DDE3EA; }
  .faq-button { width: 100%; min-height: 70px; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 22px; border: 0; background: transparent; color: var(--ink); font: inherit; text-align: left; cursor: pointer; }
  .faq-button span { font-size: 18px; line-height: 1.45; font-weight: 600; }
  .chevron { flex: 0 0 auto; transition: transform .2s ease; }
  .chevron.open { transform: rotate(180deg); }
  .faq-answer { padding: 0 42px 22px 0; }
  .faq-answer p { max-width: 720px; font-size: 16px; line-height: 1.68; }

  .sources-section { padding-bottom: 64px; }
  .source-list { margin-top: 30px; border-top: 1px solid #E0E5EC; }
  .source-list a { min-height: 74px; padding: 18px 0; display: grid; grid-template-columns: minmax(0, 1fr) 250px; gap: 24px; align-items: center; border-bottom: 1px solid #E0E5EC; text-decoration: none; }
  .source-list a:hover span { color: var(--magenta); }
  .source-list span { color: var(--ink); font-size: 16px; line-height: 1.5; font-weight: 600; }
  .source-list strong { color: var(--muted); font-size: 16px; line-height: 1.5; font-weight: 400; text-align: right; }

  .conclusion-section { padding: 88px 0; background: #F8FAFC; border-top: 1px solid #E8ECF1; border-bottom: 1px solid #E8ECF1; }
  .conclusion-inner { display: grid; grid-template-columns: .9fr 1.1fr; gap: 80px; align-items: start; }
  .conclusion-inner h2 { max-width: 520px; }
  .conclusion-inner p { max-width: 650px; }
  .conclusion-inner p + p { margin-top: 18px !important; }

  .related-section { padding: 96px 0; }
  .related-header { display: flex; align-items: end; justify-content: space-between; gap: 36px; }
  .related-header h2 { max-width: 720px; }
  .related-grid { margin-top: 40px; display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #E0E5EC; border-left: 1px solid #E0E5EC; }
  .related-resource { min-height: 270px; padding: 30px; display: flex; flex-direction: column; border-right: 1px solid #E0E5EC; border-bottom: 1px solid #E0E5EC; text-decoration: none; transition: background-color .2s ease; }
  .related-resource:hover { background: #FBFCFD; }
  .related-resource > span { color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .1em; }
  .related-resource h3 { margin-top: 15px; font-size: 22px; }
  .related-resource p { margin-top: 12px !important; font-size: 16px; line-height: 1.62; }
  .related-action { margin-top: auto; padding-top: 22px; display: flex; align-items: center; gap: 8px; color: var(--magenta); font-size: 16px; font-weight: 600; }
  .related-action svg { transition: transform .2s ease; }
  .related-resource:hover .related-action svg { transform: translateX(3px); }

  .final-cta-section { padding: 0 0 96px; }
  .final-cta { padding: 54px 58px; display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(300px, .75fr); gap: 64px; align-items: center; border: 1px solid #E6D7DF; border-radius: 30px; background: linear-gradient(135deg, #FFF 0%, #FDF2F7 100%); box-shadow: 0 18px 48px rgba(15,23,42,.045); }
  .cta-copy h2 { max-width: 650px; }
  .cta-copy p { max-width: 670px; margin-top: 20px !important; }
  .cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
  .cta-actions .button { width: 100%; }

  @media (max-width: 1180px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-concept { grid-template-columns: 230px 70px minmax(380px, 1fr); }
    .summary-grid { gap: 56px; }
    .article-shell { max-width: 1080px; grid-template-columns: 230px minmax(0, 1fr); gap: 52px; }
    .chapter .wide-module { width: 100%; max-width: 100%; }
    .framework-stages { grid-template-columns: 1fr 1fr; }
    .framework-stages article:nth-child(3) { border-left: 0; border-top: 1px solid rgba(255,255,255,.15); }
    .framework-stages article:nth-child(4) { border-top: 1px solid rgba(255,255,255,.15); }
    .readiness-panel { grid-template-columns: 1fr; }
    .readiness-panel section { padding: 26px 0; }
    .readiness-panel section:first-child { padding-top: 0; }
    .readiness-panel section:last-child { padding-bottom: 0; }
    .readiness-panel section + section { border-left: 0; border-top: 1px solid #DFE5EC; }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .stepes-guide h1 { font-size: 42px; }
    .stepes-guide h2 { font-size: 32px; }
    .hero-section { padding: 88px 0 80px; }
    .hero-concept { grid-template-columns: 1fr; gap: 22px; max-width: 760px; }
    .concept-bridge { transform: rotate(90deg); width: 76px; justify-self: center; }
    .concept-locales { grid-template-columns: repeat(3, 1fr); }
    .summary-grid { grid-template-columns: 1fr; gap: 38px; }
    .summary-intro { position: static; }
    .summary-intro h2, .summary-intro > p:last-child { max-width: 760px; }
    .article-shell { display: block; padding-top: 48px; }
    .toc-desktop { display: none; }
    .toc-mobile { display: block; margin-bottom: 64px; border: 1px solid #DDE3EA; border-radius: 18px; background: #fff; }
    .toc-mobile-toggle { width: 100%; min-height: 56px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; gap: 16px; border: 0; border-radius: 18px; background: transparent; color: var(--ink); font: inherit; cursor: pointer; }
    .toc-mobile-toggle span { font-size: 16px; font-weight: 600; }
    .toc-mobile-list { padding: 0 18px 14px; border-top: 1px solid #E4E8EE; }
    .toc-mobile-list a { min-height: 44px; display: flex; align-items: center; padding: 9px 0; color: #566276; font-size: 16px; line-height: 1.45; text-decoration: none; border-bottom: 1px solid #EEF1F4; }
    .toc-mobile-list a:last-child { border-bottom: 0; }
    .chapter { padding-bottom: 80px; }
    .chapter + .chapter { padding-top: 80px; }
    .chapter .wide-module { max-width: 100%; }
    .editorial-subsections > section { grid-template-columns: 1fr; gap: 14px; }
    .localization-grid { grid-template-columns: 1fr; }
    .framework-panel { padding: 34px 28px; }
    .ownership-grid, .failure-notes { grid-template-columns: 1fr; }
    .ownership-grid article, .ownership-grid article:nth-child(even), .failure-notes section, .failure-notes section:nth-child(even) { padding: 26px 0; border-left: 0; }
    .readiness-states { grid-template-columns: 1fr; }
    .conclusion-inner { grid-template-columns: 1fr; gap: 30px; }
    .related-header { align-items: start; flex-direction: column; }
    .final-cta { grid-template-columns: 1fr; gap: 32px; padding: 46px 38px; }
  }

  @media (max-width: 680px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .stepes-guide h1 { font-size: 38px; line-height: 1.08; }
    .stepes-guide h2 { font-size: 30px; line-height: 1.18; }
    .stepes-guide h3 { font-size: 20px; }
    .stepes-guide p { font-size: 17px; line-height: 1.68; }
    .hero-section { padding: 72px 0 68px; }
    .hero-deck { margin-top: 22px !important; font-size: 18px !important; line-height: 1.64 !important; }
    .hero-actions { flex-direction: column; margin-top: 30px; }
    .hero-actions .button { width: 100%; }
    .hero-concept { margin-top: 48px; padding: 22px; border-radius: 24px; }
    .concept-locales { grid-template-columns: 1fr; }
    .locale-window { min-height: 78px; }
    .summary-section { padding: 68px 0; }
    .takeaway { grid-template-columns: 9px 1fr; gap: 14px; }
    .takeaway h3 { font-size: 17px; }
    .takeaway p { font-size: 16px; }
    .article-shell { padding-top: 36px; padding-bottom: 24px; }
    .toc-mobile { margin-bottom: 56px; }
    .chapter { scroll-margin-top: 86px; padding-bottom: 68px; }
    .chapter + .chapter { padding-top: 68px; }
    .chapter-lead { margin-top: 20px !important; font-size: 18px !important; line-height: 1.62 !important; }
    .table-desktop, .matrix-desktop { display: none; }
    .table-mobile, .matrix-mobile { display: grid; }
    .comparison-module, .matrix-wrap { overflow: visible; border: 0; border-radius: 0; background: transparent; }
    .table-mobile { gap: 12px; }
    .comparison-card, .matrix-card { padding: 20px; border: 1px solid #E0E5EC; border-radius: 18px; background: #fff; }
    .comparison-card h3, .matrix-card h3 { font-size: 18px; }
    .comparison-card dl { margin: 16px 0 0; display: grid; gap: 14px; }
    .comparison-card dl div + div { padding-top: 14px; border-top: 1px solid #E5E9EE; }
    .comparison-card dt { color: var(--magenta); font-size: 13px; line-height: 1.3; font-weight: 600; text-transform: uppercase; letter-spacing: .06em; }
    .comparison-card dd { margin: 5px 0 0; font-size: 16px; line-height: 1.58; }
    .definition-callout { padding: 24px 22px; }
    .editorial-subsections { margin-top: 34px; }
    .editorial-subsections > section { padding: 27px 0; }
    .editorial-subsections p { font-size: 16px; }
    .editorial-list { grid-template-columns: 1fr; }
    .localization-grid { margin-top: 34px; border-left: 0; border-top: 1px solid #E1E6EC; }
    .localization-grid section { padding: 26px 0; border-right: 0; }
    .framework-panel { padding: 30px 22px; border-radius: 24px; }
    .framework-panel h3 { font-size: 25px; }
    .framework-stages { grid-template-columns: 1fr; }
    .framework-stages article, .framework-stages article + article { padding: 24px 0; border-left: 0; border-top: 1px solid rgba(255,255,255,.15); }
    .framework-stages article:first-child { border-top: 0; }
    .framework-icon { margin-bottom: 16px; }
    .framework-loop { align-items: flex-start; }
    .example-block { padding: 24px 20px; }
    .example-steps { grid-template-columns: 1fr; border-left: 0; }
    .example-steps > div { padding: 20px 0; border-right: 0; }
    .matrix-mobile { gap: 12px; }
    .matrix-card-head { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
    .matrix-card p { margin-top: 12px !important; font-size: 16px; line-height: 1.58; }
    .route-tag { white-space: normal; }
    .scroll-cue { display: block; }
    .failure-wrap table { min-width: 860px; }
    th, td { padding: 16px; }
    .failure-notes { margin-top: 28px; }
    .scenario-list article { grid-template-columns: 1fr; gap: 9px; padding: 27px 0; }
    .scenario-label { padding-top: 0; }
    .scenario-list p { font-size: 16px; }
    .readiness-panel { padding: 26px 20px; }
    .readiness-panel li { font-size: 16px; }
    .roadmap article { grid-template-columns: 48px 1fr; gap: 16px; }
    .roadmap-number { font-size: 16px; }
    .roadmap p { font-size: 16px; }
    .faq-button { min-height: 68px; padding: 18px 0; align-items: flex-start; }
    .faq-button span { font-size: 17px; }
    .faq-answer { padding-right: 0; }
    .source-list a { grid-template-columns: 1fr; gap: 4px; }
    .source-list strong { text-align: left; }
    .conclusion-section { padding: 68px 0; }
    .related-section { padding: 72px 0; }
    .related-grid { grid-template-columns: 1fr; border-left: 0; }
    .related-resource { min-height: auto; padding: 26px 0; border-right: 0; }
    .related-action { margin-top: 22px; }
    .final-cta-section { padding-bottom: 72px; }
    .final-cta { padding: 34px 24px; border-radius: 24px; }
  }

  @media (max-width: 360px) {
    .stepes-guide h1 { font-size: 36px; }
    .stepes-guide h2 { font-size: 28px; }
    .hero-concept { padding: 18px; }
    .concept-foundation, .concept-label { align-items: flex-start; }
    .roadmap article { grid-template-columns: 42px 1fr; gap: 12px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .stepes-guide *, .stepes-guide *::before, .stepes-guide *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;

export default InternationalizationVsLocalizationGuide;
