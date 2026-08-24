import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F174F",
  blush: "#FFF4F8",
  blushStrong: "#FDE7F0",
  ink: "#111827",
  text: "#344054",
  muted: "#667085",
  line: "#DCE1E8",
  surface: "#F7F8FA",
  white: "#FFFFFF",
};

const breadcrumbs = [
  { label: "Home", href: "https://www.stepes.com/" },
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  { label: "Medical Device Software Localization Checklist", current: true },
];

const tocItems = [
  { id: "overview", label: "Why Controlled Localization Testing Matters" },
  { id: "who-should-use", label: "Who Should Use This Checklist" },
  { id: "six-gate-framework", label: "The Six-Gate Release Framework" },
  { id: "quality-context", label: "Quality, Risk, and Usability Context" },
  { id: "define-scope", label: "1. Define Scope and Risk" },
  { id: "internationalize", label: "2. Prepare the Software" },
  { id: "context-package", label: "3. Build the Context Package" },
  { id: "terminology", label: "4. Control Terminology" },
  { id: "translate-review", label: "5. Translate and Review in Context" },
  { id: "variables", label: "6. Protect Variables and Syntax" },
  { id: "locale-data", label: "7. Test Numbers, Units, and Dates" },
  { id: "text-expansion", label: "8. Validate Text Expansion" },
  { id: "rendering", label: "9. Verify Character Rendering" },
  { id: "rtl", label: "10. Test Right-to-Left Interfaces" },
  { id: "linguistic-testing", label: "11. Perform Task-Based Testing" },
  { id: "defect-model", label: "12. Classify Localization Defects" },
  { id: "release-approval", label: "13. Approve the Release" },
  { id: "maintenance", label: "14. Maintain Localized Software" },
  { id: "ai", label: "Responsible AI Use" },
  { id: "common-failures", label: "Common Localization Failures" },
  { id: "final-checklist", label: "Final Pre-Release Checklist" },
  { id: "testing-record", label: "Sample Testing Record" },
  { id: "faqs", label: "Frequently Asked Questions" },
  { id: "references", label: "Standards and References" },
];

const takeaways = [
  "Treat localized interface content as part of the medical device user experience, not as a separate translation file.",
  "Identify safety-relevant workflows, interface states, and critical strings before translation begins.",
  "Give linguists visual, functional, technical, and intended-user context for every important string.",
  "Keep terminology aligned across the software, IFU, eIFU, labeling, training, reports, and support content.",
  "Test variables, clinical values, text expansion, fonts, complex scripts, and right-to-left behavior inside the product build.",
  "Retain version, defect, correction, retest, and approval evidence for every controlled multilingual release.",
];

const releaseGates = [
  {
    number: "01",
    title: "Plan",
    question:
      "Have we defined markets, locales, intended users, builds, critical workflows, risks, and responsibilities?",
  },
  {
    number: "02",
    title: "Prepare",
    question:
      "Can the software architecture, fonts, layouts, resource files, and locale logic support the required languages?",
  },
  {
    number: "03",
    title: "Localize",
    question:
      "Are linguists working with approved terminology, complete context, and protected technical content?",
  },
  {
    number: "04",
    title: "Test",
    question:
      "Has the localized build been reviewed across representative devices, states, values, and workflows?",
  },
  {
    number: "05",
    title: "Approve",
    question:
      "Are defects resolved, evidence complete, versions aligned, and required approvals recorded?",
  },
  {
    number: "06",
    title: "Maintain",
    question:
      "Can the organization control localization across updates, patches, platforms, and new markets?",
  },
];

const finalChecklistGroups = [
  {
    title: "Plan",
    items: [
      "Target markets, languages, and locales are approved.",
      "Intended users and use environments are documented.",
      "Device models, platforms, and software builds are confirmed.",
      "Safety-relevant workflows and interface content are identified.",
      "Regulatory and market language requirements are reviewed.",
      "Cross-functional ownership and approval responsibilities are assigned.",
    ],
  },
  {
    title: "Prepare",
    items: [
      "User-facing strings are externalized and hard-coded text has been addressed.",
      "Unicode, target scripts, fonts, and input methods are supported.",
      "Layouts support expansion, wrapping, and supported display sizes.",
      "Locale formats, language switching, and fallback behavior are defined.",
      "Pseudo-localization has been completed.",
      "String IDs, screenshots, context, variables, and approved source terminology are available.",
    ],
  },
  {
    title: "Localize",
    items: [
      "Qualified medical software linguists are assigned.",
      "Locale-specific terminology is approved.",
      "UI language is coordinated with the IFU and eIFU where appropriate.",
      "Variables, tags, placeholders, and syntax are protected.",
      "Ambiguous source content has been resolved.",
      "Required independent linguistic and subject-matter review is complete.",
    ],
  },
  {
    title: "Test",
    items: [
      "Localized builds are available for review.",
      "Dynamic values and boundary cases are tested.",
      "Numbers, dates, units, and clinical displays are verified.",
      "Text expansion, characters, complex scripts, and RTL behavior are reviewed.",
      "Hidden, error, interrupted, maintenance, and update states are exercised.",
      "Representative workflows, devices, and platforms are covered.",
      "Defects are recorded, classified, corrected, and retested.",
    ],
  },
  {
    title: "Approve",
    items: [
      "Critical findings are resolved.",
      "Major findings are resolved or formally dispositioned.",
      "Translation memory and terminology assets are synchronized.",
      "UI and related product information are appropriately aligned.",
      "The approved language pack matches the release build.",
      "Evidence is complete and required stakeholders have approved the release.",
    ],
  },
  {
    title: "Maintain",
    items: [
      "New and changed strings can be detected.",
      "Localization impact is assessed for every update.",
      "Regression-test requirements are defined.",
      "Language resources remain under version control.",
      "Feedback and post-release defects have an escalation path.",
      "Translation memories, terminology, context, and screenshots remain current.",
    ],
  },
];

const faqItems = [
  {
    question: "What is medical device software localization?",
    answer:
      "Medical device software localization adapts an interface and its supporting content for users in a specific language and market. It includes translation, terminology, locale formatting, software internationalization, integration, visual review, character rendering, right-to-left behavior, and in-product linguistic testing. The scope may cover embedded interfaces, Software as a Medical Device, companion applications, connected platforms, reports, notifications, and software-delivered help.",
  },
  {
    question:
      "How is medical device software localization different from general software localization?",
    answer:
      "Medical device localization requires the usual technical and linguistic controls, but it places greater emphasis on intended users, medical terminology, safety-relevant workflows, clinical values, consistency with controlled product information, documented quality processes, and the potential effect of an interface defect on user action. The required controls should reflect the device, content, intended use, market, and consequences of an error.",
  },
  {
    question: "When should localization begin?",
    answer:
      "Localization planning should begin during product design and internationalization rather than after software development is complete. Early involvement allows teams to externalize strings, design flexible layouts, define locale behavior, establish terminology, prepare context, and include multilingual testing in the release plan. Waiting until the end often converts preventable design limitations into urgent translation and engineering defects.",
  },
  {
    question: "Who should translate medical device user interfaces?",
    answer:
      "Medical device interfaces should be translated by linguists who combine target-language expertise with relevant medical, technical, and software-localization experience. The appropriate reviewers depend on the content. Patient-facing setup instructions, clinical alarms, servicing menus, and administrative dashboards may require different subject-matter knowledge and review depth.",
  },
  {
    question: "Is linguistic testing the same as software validation?",
    answer:
      "No. Linguistic testing evaluates the translation, terminology, presentation, and usability of localized content inside the software. Software verification and validation assess broader product requirements and intended use. Human-factors validation may evaluate representative users completing critical tasks. These activities may inform one another, but they have different objectives, methods, evidence, and approval responsibilities.",
  },
  {
    question: "How should variables and placeholders be tested?",
    answer:
      "Use automated checks to confirm that variables, tags, and placeholders are present and structurally valid. Then test integrated strings with realistic values, including zero, one, multiple, minimum, maximum, long, missing, and unusual values where applicable. Verify grammar, ordering, spacing, directionality, truncation, and whether the inserted value changes the intended meaning.",
  },
  {
    question: "How much space should be allowed for translated text?",
    answer:
      "There is no single expansion percentage that works for every language or string. Short English labels can expand substantially, while other translations may become shorter. Use flexible containers, pseudo-localization, representative target-language samples, and testing across supported displays. Avoid solving layout defects by arbitrarily shortening important language.",
  },
  {
    question: "Do Arabic and Hebrew interfaces always require complete mirroring?",
    answer:
      "No. Reading order and many navigation patterns may reverse, but not every element should be mirrored. Physical-direction icons, product diagrams, charts, media controls, time-based sequences, and device-orientation indicators may require different treatment. Evaluate each element according to its meaning and the expected user interpretation.",
  },
  {
    question:
      "How should UI terminology be coordinated with the IFU and eIFU?",
    answer:
      "Create a shared product termbase that identifies approved source concepts and locale-specific translations. Reference the IFU, eIFU, labeling, training, and interface use of each important term. When terminology changes, perform impact analysis across affected assets rather than updating one content type in isolation.",
  },
  {
    question: "Can AI be used to translate medical device software?",
    answer:
      "AI can support selected activities, including draft translation, terminology suggestions, consistency checks, placeholder validation, change analysis, and automated quality checks. The workflow should reflect content risk. Safety-relevant interface language generally requires qualified human review, controlled terminology, integration testing, and documented approval. Raw AI output should not be released directly into a medical device interface.",
  },
  {
    question: "What evidence should be retained for each release?",
    answer:
      "Evidence may include software and language-pack versions, locale and platform configuration, approved source and translation files, terminology decisions, automated quality results, test scripts, screenshots, defects, severity, corrections, retest outcomes, deviations, reviewer identities, and approval dates. The exact record set should follow the manufacturer’s applicable quality and regulatory processes.",
  },
  {
    question: "Does every localized interface require formal usability testing?",
    answer:
      "Not necessarily. The required activity depends on the device, interface change, intended users, critical tasks, use-related risk, market, and manufacturer procedures. Teams should assess whether localization changes meaning, task performance, presentation, navigation, feedback, or user understanding and determine the appropriate review or validation route.",
  },
  {
    question: "How should localized software updates be regression-tested?",
    answer:
      "Begin with change-impact analysis. Identify changed strings, terminology, components, workflows, locale logic, layouts, and related documentation. Retest modified content and dependent screens or workflows. Broad changes to fonts, frameworks, operating systems, UI components, formatting logic, or language resources may justify wider regression coverage.",
  },
];

const relatedResources = [
  {
    title: "Medical Device Translation Services",
    text:
      "Explore multilingual support for medical device interfaces, IFUs, labeling, technical documentation, training, and global product content.",
    href: "https://www.stepes.com/medical-device-translation-services/",
    action: "Explore Medical Device Translation Services",
  },
  {
    title: "Medical Device IFU Translation Guide",
    text:
      "Plan user-focused IFU translation, terminology, review, layout, version control, and final-format quality assurance.",
    href:
      "https://www.stepes.com/resources/localization-guides/medical-device-ifu-translation-guide/",
    action: "Read the IFU Translation Guide",
  },
  {
    title: "Electronic IFU and Multilingual Version Control",
    text:
      "Coordinate multilingual eIFU content across digital delivery, revisions, downloadable files, and paper versions.",
    href:
      "https://www.stepes.com/resources/localization-guides/electronic-ifu-multilingual-version-control/",
    action: "Explore eIFU Version Control",
  },
  {
    title: "AI Translation for Medical Devices",
    text:
      "Understand where AI can improve translation efficiency and where professional medical review and validation remain essential.",
    href:
      "https://www.stepes.com/resources/localization-guides/ai-translation-for-medical-devices/",
    action: "Explore AI Translation Guidance",
  },
];

const references = [
  {
    title: "Applying Human Factors and Usability Engineering to Medical Devices",
    organization: "U.S. Food and Drug Administration",
    href:
      "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/applying-human-factors-and-usability-engineering-medical-devices",
  },
  {
    title: "Content of Human Factors Information in Medical Device Marketing Submissions",
    organization: "U.S. Food and Drug Administration",
    href:
      "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/content-human-factors-information-medical-device-marketing-submissions",
  },
  {
    title: "Quality Management System Regulation",
    organization: "U.S. Food and Drug Administration",
    href:
      "https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr",
  },
  {
    title: "Regulation (EU) 2017/745 on Medical Devices",
    organization: "European Union",
    href: "https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng",
  },
  {
    title: "ISO 13485:2016 — Medical Devices Quality Management Systems",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/59752.html",
  },
  {
    title: "ISO 14971:2019 — Application of Risk Management to Medical Devices",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/72704.html",
  },
  {
    title: "IEC 62304 — Medical Device Software Lifecycle Processes",
    organization: "International Electrotechnical Commission",
    href: "https://webstore.iec.ch/en/publication/22794",
  },
  {
    title: "IEC 62366-1 — Application of Usability Engineering to Medical Devices",
    organization: "International Electrotechnical Commission",
    href: "https://webstore.iec.ch/en/publication/67220",
  },
  {
    title: "Unicode Bidirectional Algorithm",
    organization: "Unicode Consortium",
    href: "https://unicode.org/reports/tr9/",
  },
  {
    title: "Internationalization Techniques: Authoring HTML and CSS",
    organization: "World Wide Web Consortium",
    href: "https://www.w3.org/International/techniques/authoring-html",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
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

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={item.label}>
            {index > 0 && (
              <span className="breadcrumb-separator" aria-hidden="true">/</span>
            )}
            {item.current ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function HeroIllustration() {
  return (
    <svg
      className="hero-visual-svg"
      viewBox="0 0 560 470"
      role="img"
      aria-labelledby="hero-visual-title hero-visual-desc"
    >
      <title id="hero-visual-title">
        Medical device interface undergoing multilingual localization testing
      </title>
      <desc id="hero-visual-desc">
        A medical device screen is reviewed for terminology, dynamic values,
        text expansion, right-to-left layout, and linguistic testing.
      </desc>
      <rect x="98" y="48" width="360" height="372" rx="34" fill="#FFFFFF" stroke="#596273" strokeWidth="3" />
      <rect x="124" y="86" width="308" height="242" rx="18" fill="#F7F8FA" stroke="#8B94A3" strokeWidth="2" />
      <rect x="148" y="110" width="260" height="38" rx="8" fill="#FFF4F8" stroke="#C11D63" strokeWidth="2" />
      <path d="M163 126h23" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <path d="M197 126h125" stroke="#596273" strokeWidth="3" strokeLinecap="round" />
      <circle cx="374" cy="129" r="8" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2" />
      <path d="m370 129 3 3 6-7" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="148" y="168" width="118" height="102" rx="12" fill="#FFFFFF" stroke="#8B94A3" strokeWidth="2" />
      <text x="165" y="195" fill="#596273" fontSize="12" fontFamily="Arial, sans-serif">TEMPERATURE</text>
      <text x="165" y="238" fill="#111827" fontSize="34" fontWeight="700" fontFamily="Arial, sans-serif">37.4</text>
      <text x="232" y="238" fill="#596273" fontSize="15" fontFamily="Arial, sans-serif">°C</text>
      <rect x="286" y="168" width="122" height="44" rx="10" fill="#FFFFFF" stroke="#8B94A3" strokeWidth="2" />
      <path d="M302 190h75" stroke="#596273" strokeWidth="3" strokeLinecap="round" />
      <path d="M302 202h54" stroke="#8B94A3" strokeWidth="2" strokeLinecap="round" />
      <rect x="286" y="226" width="122" height="44" rx="10" fill="#FFFFFF" stroke="#C11D63" strokeWidth="2" />
      <path d="M301 248h89" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <path d="M150 294h255" stroke="#8B94A3" strokeWidth="2" strokeLinecap="round" />
      <rect x="180" y="350" width="196" height="44" rx="22" fill="#C11D63" />
      <path d="M221 372h90" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M324 366l6 6-6 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="20" y="120" width="132" height="68" rx="14" fill="#FFFFFF" stroke="#A7AFBC" strokeWidth="2" />
      <text x="38" y="145" fill="#C11D63" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">TERMINOLOGY</text>
      <path d="M38 162h72" stroke="#596273" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m124 155 5 5 9-10" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M152 153h28" stroke="#8B94A3" strokeWidth="2" strokeDasharray="5 5" />

      <rect x="18" y="238" width="136" height="72" rx="14" fill="#FFFFFF" stroke="#A7AFBC" strokeWidth="2" />
      <text x="36" y="263" fill="#C11D63" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">TEXT EXPANSION</text>
      <path d="M36 280h78" stroke="#596273" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 294h98" stroke="#8B94A3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M154 273h32" stroke="#8B94A3" strokeWidth="2" strokeDasharray="5 5" />

      <rect x="408" y="126" width="134" height="76" rx="14" fill="#FFFFFF" stroke="#A7AFBC" strokeWidth="2" />
      <text x="426" y="151" fill="#C11D63" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">DYNAMIC VALUE</text>
      <text x="426" y="180" fill="#111827" fontSize="22" fontWeight="700" fontFamily="Arial, sans-serif">{`{0}`}%</text>
      <path d="M408 167h-28" stroke="#8B94A3" strokeWidth="2" strokeDasharray="5 5" />

      <rect x="410" y="246" width="132" height="86" rx="14" fill="#FFFFFF" stroke="#A7AFBC" strokeWidth="2" />
      <text x="427" y="271" fill="#C11D63" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">RTL REVIEW</text>
      <path d="M519 289h-69" stroke="#596273" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M500 304h-50" stroke="#8B94A3" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M410 288h-26" stroke="#8B94A3" strokeWidth="2" strokeDasharray="5 5" />

      <circle cx="488" cy="392" r="38" fill="#FFF4F8" stroke="#C11D63" strokeWidth="2" />
      <path d="m470 392 12 12 24-28" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArticleSection({ id, number, title, intro, children, wide = false }) {
  const sectionClasses = [
    "article-section",
    number ? "numbered-section" : "",
    wide ? "wide-section" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClasses}>
      <div className="section-heading-row">
        {number && <span className="section-number">{number}</span>}
        <div>
          <h2>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <span className="checklist-icon" aria-hidden="true">
            <CheckIcon size={16} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EvidenceBlock({ items }) {
  return (
    <div className="evidence-block">
      <div className="eyebrow">EVIDENCE TO RETAIN</div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ReleaseGate({ children }) {
  return (
    <div className="release-gate">
      <span className="release-gate-label">Release Gate</span>
      <strong>{children}</strong>
    </div>
  );
}

function TOC() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.01, 0.2] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const renderLink = (item, closeMobile = false) => {
    const active = activeId === item.id;
    return (
      <a
        href={sectionUrl(item.id)}
        className={active ? "is-active" : undefined}
        aria-current={active ? "location" : undefined}
        onClick={closeMobile ? () => setMobileOpen(false) : undefined}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      <aside className="toc-desktop" aria-label="In this guide">
        <div className="toc-label">In This Guide</div>
        <nav>
          <ul>
            {tocItems.map((item) => (
              <li key={item.id}>{renderLink(item)}</li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="toc-mobile">
        <button
          type="button"
          className="toc-mobile-trigger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-toc-panel"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span>In This Guide</span>
          <ChevronIcon open={mobileOpen} />
        </button>
        {mobileOpen && (
          <nav id="mobile-toc-panel" aria-label="In this guide">
            <ul>
              {tocItems.map((item) => (
                <li key={item.id}>{renderLink(item, true)}</li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

function FAQ() {
  const [openItems, setOpenItems] = useState([0]);
  const toggle = (index) => {
    setOpenItems((items) =>
      items.includes(index)
        ? items.filter((item) => item !== index)
        : [...items, index]
    );
  };

  return (
    <div className="faq-panel">
      {faqItems.map((item, index) => {
        const open = openItems.includes(index);
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div className="faq-item" key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <ChevronIcon open={open} />
              </button>
            </h3>
            {open && (
              <div
                id={panelId}
                className="faq-answer"
                role="region"
                aria-labelledby={buttonId}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function MedicalDeviceSoftwareLocalizationChecklistWireframe() {
  const articleMetadata = useMemo(
    () => ["Practical Checklist", "Approx. 35-Minute Read", "Last Reviewed August 2026"],
    []
  );

  return (
    <main className="stepes-guide">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-guide {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --blush: ${COLORS.blush};
          --blush-strong: ${COLORS.blushStrong};
          --ink: ${COLORS.ink};
          --text: ${COLORS.text};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --surface: ${COLORS.surface};
          --white: ${COLORS.white};
          background: var(--white);
          color: var(--text);
          font-family: "Inter", Arial, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 1.68;
          overflow-x: hidden;
          overflow-x: clip;
        }
        .stepes-guide img,
        .stepes-guide svg { max-width: 100%; }
        .stepes-guide h1,
        .stepes-guide h2,
        .stepes-guide h3,
        .stepes-guide h4,
        .stepes-guide p,
        .stepes-guide li,
        .stepes-guide th,
        .stepes-guide td,
        .stepes-guide a,
        .stepes-guide button { overflow-wrap: break-word; }
        .stepes-guide a {
          color: var(--magenta);
          text-underline-offset: 4px;
          text-decoration-thickness: 1px;
        }
        .stepes-guide a:hover { color: var(--magenta-dark); }
        .stepes-guide a:focus-visible,
        .stepes-guide button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.32);
          outline-offset: 3px;
        }
        .shell {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }
        .breadcrumb-wrap { background: #F8F9FB; padding-top: 24px; }
        .breadcrumb { font-size: 14px; line-height: 1.45; }
        .breadcrumb ol {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px 0;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .breadcrumb li {
          min-width: 0;
          max-width: 100%;
          display: inline-flex;
          align-items: center;
          color: #4B5565;
        }
        .breadcrumb-separator {
          flex: 0 0 auto;
          margin: 0 8px;
          color: #A5ACB8;
          font-weight: 400;
          user-select: none;
        }
        .breadcrumb a { color: #667085; text-decoration: none; }
        .breadcrumb a:hover { color: var(--magenta); }
        .breadcrumb span[aria-current="page"] {
          min-width: 0;
          color: #344054;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .hero {
          background: #F8F9FB;
          padding: 22px 0 88px;
          border-bottom: 1px solid #E7EAF0;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
          gap: 64px;
          align-items: center;
        }
        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .hero h1 {
          max-width: 800px;
          margin: 18px 0 24px;
          color: var(--ink);
          font-size: clamp(40px, 4.1vw, 60px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 600;
        }
        .hero-deck {
          max-width: 760px;
          margin: 0;
          color: #475467;
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
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 13px 24px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          max-width: 100%;
          text-align: center;
          white-space: normal;
          text-decoration: none !important;
          transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
        }
        .button-primary {
          background: var(--magenta);
          border: 1px solid var(--magenta);
          color: #FFFFFF !important;
        }
        .button-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); color: #FFFFFF !important; }
        .button-secondary {
          background: #FFFFFF;
          border: 1px solid #C9CED7;
          color: #202939 !important;
        }
        .button-secondary:hover { border-color: var(--magenta); color: var(--magenta) !important; }
        .hero-metadata {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 30px;
          color: #667085;
          font-size: 14px;
        }
        .hero-metadata span { position: relative; }
        .hero-metadata span:not(:last-child)::after {
          content: "";
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #A5ACB8;
          top: 50%;
          right: -13px;
        }
        .hero-visual {
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-visual-svg { width: 100%; height: auto; max-height: 500px; }

        .summary-section { padding: 78px 0; }
        .summary-panel {
          display: grid;
          grid-template-columns: minmax(220px, 0.36fr) minmax(0, 1fr);
          gap: 56px;
          padding: 48px;
          border-radius: 24px;
          background: var(--blush);
          border: 1px solid #F2CEDD;
        }
        .summary-panel h2 {
          margin: 10px 0 0;
          color: var(--ink);
          font-size: 32px;
          line-height: 1.2;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .summary-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 38px;
          row-gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .summary-list li {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          gap: 12px;
          padding: 17px 0;
          border-top: 1px solid #E8BFD1;
          color: #344054;
          font-size: 16px;
          line-height: 1.55;
        }
        .summary-list li:nth-child(-n+2) { border-top: 0; padding-top: 0; }
        .summary-index {
          color: var(--magenta);
          font-weight: 700;
          font-variant-numeric: tabular-nums;
        }

        .article-layout {
          display: grid;
          grid-template-columns: 260px minmax(0, 760px);
          gap: 64px;
          justify-content: center;
          align-items: start;
          padding: 0 0 104px;
        }
        .toc-desktop {
          position: sticky;
          top: 112px;
          max-height: calc(100vh - 144px);
          overflow-y: auto;
          overflow-x: hidden;
          padding-right: 18px;
          scrollbar-width: thin;
          scrollbar-color: #AEB5C0 transparent;
        }
        .toc-desktop::-webkit-scrollbar { width: 6px; }
        .toc-desktop::-webkit-scrollbar-track { background: transparent; }
        .toc-desktop::-webkit-scrollbar-thumb {
          border-radius: 999px;
          background: #AEB5C0;
        }
        .toc-label {
          margin-bottom: 18px;
          color: var(--ink);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .toc-desktop ul,
        .toc-mobile ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .toc-desktop li { border-left: 1px solid #D5D9E0; }
        .toc-desktop a {
          display: block;
          padding: 8px 0 8px 16px;
          color: #667085;
          font-size: 14px;
          line-height: 1.35;
          text-decoration: none;
        }
        .toc-desktop a:hover,
        .toc-desktop a.is-active {
          color: var(--magenta);
          border-left: 2px solid var(--magenta);
          margin-left: -1px;
          font-weight: 600;
        }
        .toc-mobile { display: none; }

        .article-column { min-width: 0; }
        .article-section {
          scroll-margin-top: 116px;
          padding: 84px 0 0;
        }
        .article-section:first-child { padding-top: 16px; }
        .section-heading-row {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 18px;
          align-items: start;
        }
        .article-section.numbered-section .section-heading-row { margin-left: -58px; }
        .section-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-top: 4px;
          border-radius: 50%;
          background: var(--blush-strong);
          color: var(--magenta);
          font-size: 14px;
          line-height: 1;
          font-weight: 700;
        }
        .article-section h2 {
          margin: 0;
          color: var(--ink);
          font-size: clamp(30px, 3.2vw, 40px);
          line-height: 1.18;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .article-section h3 {
          margin: 38px 0 12px;
          color: var(--ink);
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
        }
        .article-section p { margin: 22px 0 0; }
        .section-intro {
          max-width: 760px;
          margin: 18px 0 0 !important;
          color: #475467;
          font-size: 19px;
          line-height: 1.65;
        }
        .article-section strong { color: #202939; }
        .article-section ul:not(.checklist),
        .article-section ol:not(.breadcrumb ol) {
          margin: 20px 0 0;
          padding-left: 24px;
        }
        .article-section li { margin-top: 9px; }
        .inline-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          font-size: 16px;
          font-weight: 600;
          max-width: 100%;
          flex-wrap: wrap;
          text-decoration: none;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px 32px;
          margin-top: 30px;
        }
        .audience-item {
          padding: 17px 0;
          border-top: 1px solid #D9DEE6;
          color: #344054;
          font-size: 16px;
        }

        .framework-band {
          margin-top: 38px;
          padding: 42px;
          border-radius: 24px;
          background: #18202E;
          color: #FFFFFF;
        }
        .framework-band h3 {
          max-width: 620px;
          margin: 0 0 26px;
          color: #FFFFFF;
          font-size: 30px;
        }
        .gates-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid #404857;
          border-radius: 16px;
          overflow: hidden;
          background: #404857;
        }
        .gate-card {
          min-height: 208px;
          padding: 24px;
          background: #202938;
        }
        .gate-number { color: #F2A7C6; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; }
        .gate-card h4 { margin: 22px 0 10px; color: #FFFFFF; font-size: 22px; line-height: 1.25; }
        .gate-card p { margin: 0; color: #CFD5DF; font-size: 16px; line-height: 1.55; }

        .quality-note {
          margin-top: 30px;
          padding: 28px 30px;
          border-left: 3px solid var(--magenta);
          background: var(--surface);
        }
        .quality-note .label {
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.3;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          font-weight: 700;
        }
        .quality-note p { margin: 10px 0 0; font-size: 17px; }

        .checklist {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 30px;
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
        }
        .checklist li {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          margin: 0;
          padding: 13px 0;
          border-top: 1px solid #E0E4EA;
          font-size: 16px;
          line-height: 1.55;
        }
        .checklist-icon {
          width: 20px;
          height: 20px;
          margin-top: 2px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--blush-strong);
          color: var(--magenta);
        }
        .evidence-block {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 24px;
          margin-top: 30px;
          padding: 24px 0;
          border-top: 1px solid #D6DBE3;
          border-bottom: 1px solid #D6DBE3;
        }
        .evidence-block ul {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 12px;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none;
        }
        .evidence-block li {
          margin: 0 !important;
          padding: 7px 11px;
          border-radius: 999px;
          background: #F1F3F6;
          color: #475467;
          font-size: 14px;
          max-width: 100%;
          line-height: 1.25;
          overflow-wrap: anywhere;
        }
        .release-gate {
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          margin-top: 24px;
          padding: 20px 22px;
          border-radius: 14px;
          background: var(--blush);
          border: 1px solid #F1CEDC;
          font-size: 16px;
          line-height: 1.5;
        }
        .release-gate-label {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.11em;
        }

        .context-table,
        .sample-table,
        .failure-table {
          width: 100%;
          margin-top: 30px;
          border-collapse: collapse;
          border-spacing: 0;
          font-size: 16px;
          line-height: 1.55;
        }
        .context-table caption,
        .sample-table caption,
        .failure-table caption {
          text-align: left;
          margin-bottom: 12px;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
        }
        .context-table th,
        .sample-table th,
        .failure-table th {
          padding: 15px 16px;
          background: #F2F4F7;
          color: #202939;
          font-weight: 600;
          text-align: left;
          vertical-align: top;
          border-bottom: 1px solid #D4D9E1;
        }
        .context-table td,
        .sample-table td,
        .failure-table td {
          padding: 15px 16px;
          color: #475467;
          vertical-align: top;
          border-bottom: 1px solid #E0E4EA;
        }
        .context-table th:first-child,
        .context-table td:first-child { width: 34%; }
        .sample-table th { width: 34%; }

        .example-panel {
          margin-top: 30px;
          padding: 28px 30px;
          border-radius: 16px;
          background: #F7F8FA;
          border: 1px solid #DCE1E8;
        }
        .example-panel h3 { margin: 10px 0 0; font-size: 22px; }
        .example-options {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
          margin-top: 20px;
        }
        .example-options span {
          padding: 12px 0;
          border-top: 1px solid #D8DDE5;
          font-size: 16px;
        }

        .distinction-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 30px;
        }
        .distinction-item {
          padding: 24px;
          border-radius: 14px;
          border: 1px solid #DCE1E8;
          background: #FFFFFF;
        }
        .distinction-item h3 { margin: 0; font-size: 19px; }
        .distinction-item p { margin: 10px 0 0; font-size: 16px; line-height: 1.55; }

        .code-examples {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 28px;
        }
        .code-example {
          padding: 16px 18px;
          border-radius: 10px;
          background: #202938;
          color: #F4F6F8;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 15px;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .severity-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 30px;
        }
        .severity-card {
          padding: 26px;
          border: 1px solid #DCE1E8;
          border-radius: 16px;
          background: #FFFFFF;
        }
        .severity-card.critical { border-top: 4px solid #B42318; }
        .severity-card.major { border-top: 4px solid #C11D63; }
        .severity-card.moderate { border-top: 4px solid #667085; }
        .severity-card.minor { border-top: 4px solid #98A2B3; }
        .severity-card h3 { margin: 0; font-size: 22px; }
        .severity-card p { margin: 10px 0 0; font-size: 16px; }
        .severity-card ul { font-size: 16px; }

        .ai-panel {
          margin-top: 32px;
          padding: 34px;
          border-radius: 20px;
          background: linear-gradient(145deg, #FFF5F8, #F7F8FA 72%);
          border: 1px solid #E5D2DB;
        }
        .ai-columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 36px;
          margin-top: 24px;
        }
        .ai-columns h3 { margin: 0; font-size: 21px; }
        .ai-columns ul { font-size: 16px; }

        .failure-table-wrap {
          width: 100%;
          margin-top: 32px;
          border: 1px solid #D7DCE4;
          border-radius: 18px;
          overflow: hidden;
          background: #FFFFFF;
        }
        .failure-table {
          margin-top: 0;
          table-layout: fixed;
        }
        .failure-table th:nth-child(1) { width: 27%; }
        .failure-table th:nth-child(2) { width: 31%; }
        .failure-table th:nth-child(3) { width: 42%; }
        .failure-table tbody tr:last-child th,
        .failure-table tbody tr:last-child td { border-bottom: 0; }

        .final-checklist-wrap {
          margin-top: 36px;
          padding: 40px;
          border-radius: 22px;
          background: #F7F8FA;
          border: 1px solid #D9DEE6;
        }
        .final-checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .final-checklist-group {
          padding: 26px;
          border-radius: 16px;
          background: #FFFFFF;
          border: 1px solid #DCE1E8;
        }
        .final-checklist-group h3 {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 12px;
          font-size: 22px;
        }
        .final-checklist-group h3::before {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--magenta);
        }
        .final-checklist-group .checklist {
          grid-template-columns: 1fr;
          margin-top: 0;
        }
        .print-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--magenta);
          cursor: pointer;
          font: inherit;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .print-link:hover { color: var(--magenta-dark); }

        .faq-panel {
          margin-top: 32px;
          border-top: 1px solid #D5DAE2;
        }
        .faq-item { border-bottom: 1px solid #D5DAE2; }
        .faq-item h3 { margin: 0; }
        .faq-item button {
          width: 100%;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--ink);
          cursor: pointer;
          text-align: left;
          font: inherit;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }
        .faq-answer { padding: 0 48px 24px 0; }
        .faq-answer p { margin: 0; font-size: 16px; }

        .reference-list {
          margin-top: 30px;
          border-top: 1px solid #D5DAE2;
        }
        .reference-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          padding: 20px 0;
          border-bottom: 1px solid #D5DAE2;
        }
        .reference-item a {
          min-width: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          overflow-wrap: anywhere;
          text-decoration: none;
        }
        .reference-item a:hover { color: var(--magenta); }
        .reference-item span { color: #667085; font-size: 15px; text-align: right; }

        .author-note {
          margin-top: 44px;
          padding-top: 24px;
          border-top: 1px solid #D5DAE2;
          color: #667085;
          font-size: 15px;
        }
        .author-note { display: flex; flex-wrap: wrap; gap: 0 4px; }
        .author-note strong { color: #344054; }

        .related-section {
          padding: 94px 0;
          background: #F7F8FA;
          border-top: 1px solid #E2E6EC;
        }
        .related-heading {
          max-width: 760px;
          margin-bottom: 36px;
        }
        .related-heading h2 {
          margin: 12px 0 0;
          color: var(--ink);
          font-size: 40px;
          line-height: 1.18;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #D2D7DF;
          border-left: 1px solid #D2D7DF;
        }
        .related-card {
          min-height: 250px;
          display: flex;
          flex-direction: column;
          padding: 30px;
          background: #FFFFFF;
          border-right: 1px solid #D2D7DF;
          border-bottom: 1px solid #D2D7DF;
        }
        .related-card h3 { margin: 0; color: var(--ink); font-size: 23px; line-height: 1.28; }
        .related-card p { margin: 14px 0 24px; font-size: 16px; line-height: 1.6; }
        .related-card a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .final-cta { padding: 96px 0; background: #FFFFFF; }
        .final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 54px;
          align-items: center;
          padding: 54px 58px;
          border-radius: 24px;
          background: var(--blush);
          border: 1px solid #F0CCDB;
        }
        .final-cta h2 {
          max-width: 760px;
          margin: 12px 0 16px;
          color: var(--ink);
          font-size: 40px;
          line-height: 1.16;
          letter-spacing: -0.025em;
          font-weight: 600;
        }
        .final-cta p { max-width: 780px; margin: 0; font-size: 18px; }
        .final-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 270px;
        }

        @media (max-width: 1100px) {
          .shell { width: min(100% - 80px, 1280px); }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr); gap: 40px; }
          .hero-visual { min-height: 440px; }
          .article-layout { grid-template-columns: minmax(210px, 230px) minmax(0, 1fr); gap: 40px; }
          .article-section.numbered-section .section-heading-row { margin-left: 0; }
          .final-cta-panel { grid-template-columns: 1fr; }
          .final-cta-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 900px) {
          .shell { width: min(100% - 64px, 1280px); }
          .hero { padding-bottom: 68px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-visual { max-width: 620px; min-height: auto; margin: 0 auto; }
          .summary-panel { grid-template-columns: 1fr; gap: 32px; }
          .article-layout { display: block; }
          .toc-desktop { display: none; }
          .toc-mobile {
            display: block;
            margin: 0 0 24px;
            padding-top: 12px;
          }
          .toc-mobile-trigger {
            width: 100%;
            min-height: 54px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 14px 18px;
            border-radius: 10px;
            border: 1px solid #CFD5DE;
            background: #FFFFFF;
            color: var(--ink);
            font: inherit;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
          }
          .toc-mobile nav {
            max-height: min(62vh, 560px);
            overflow-y: auto;
            overscroll-behavior: contain;
            margin-top: 8px;
            padding: 10px 18px 14px;
            border: 1px solid #D7DCE4;
            border-radius: 10px;
            background: #FFFFFF;
            scrollbar-width: thin;
          }
          .toc-mobile a {
            display: block;
            padding: 10px 0;
            color: #475467;
            font-size: 16px;
            line-height: 1.4;
            text-decoration: none;
            border-bottom: 1px solid #ECEFF3;
          }
          .toc-mobile a.is-active { color: var(--magenta); font-weight: 600; }
          .toc-mobile li:last-child a { border-bottom: 0; }
          .article-section:first-child { padding-top: 28px; }
          .gates-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .reference-item { grid-template-columns: 1fr; gap: 8px; }
          .reference-item span { text-align: left; }
        }

        @media (max-width: 720px) {
          .stepes-guide { font-size: 17px; line-height: 1.68; }
          .shell { width: min(100% - 40px, 1280px); }
          .breadcrumb-wrap { padding-top: 16px; }
          .breadcrumb { font-size: 14px; }
          .breadcrumb li:last-child {
            flex-basis: 100%;
            align-items: flex-start;
            margin-top: 2px;
          }
          .breadcrumb li:last-child .breadcrumb-separator { display: none; }
          .hero { padding: 18px 0 58px; }
          .hero h1 { font-size: 40px; margin-top: 14px; }
          .hero-deck { font-size: 18px; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .button { width: 100%; }
          .hero-metadata { gap: 8px 14px; }
          .hero-metadata span::after { display: none !important; }
          .hero-visual { margin-top: 8px; }
          .hero-visual-svg { max-height: 360px; }
          .summary-section { padding: 52px 0; }
          .summary-panel { padding: 30px 24px; border-radius: 18px; }
          .summary-panel h2 { font-size: 29px; }
          .summary-list { grid-template-columns: 1fr; }
          .summary-list li,
          .summary-list li:nth-child(-n+2) { padding: 15px 0; border-top: 1px solid #E8BFD1; }
          .summary-list li:first-child { border-top: 0; padding-top: 0; }
          .article-layout { padding-bottom: 72px; }
          .article-section { padding-top: 68px; scroll-margin-top: 88px; }
          .section-heading-row { grid-template-columns: 1fr; gap: 12px; }
          .section-number { width: 36px; height: 36px; }
          .article-section h2 { font-size: 31px; }
          .article-section h3 { font-size: 22px; }
          .section-intro { font-size: 18px; }
          .audience-grid,
          .checklist,
          .distinction-grid,
          .code-examples,
          .severity-grid,
          .ai-columns,
          .final-checklist-grid,
          .related-grid { grid-template-columns: 1fr; }
          .framework-band { margin-left: -20px; margin-right: -20px; padding: 34px 20px; border-radius: 0; }
          .gates-grid { grid-template-columns: 1fr; }
          .gate-card { min-height: 0; }
          .evidence-block { grid-template-columns: 1fr; gap: 12px; }
          .release-gate { grid-template-columns: 1fr; gap: 7px; }
          .example-options { grid-template-columns: 1fr; }
          .final-checklist-wrap { padding: 24px 18px; margin-left: -20px; margin-right: -20px; border-radius: 0; }
          .final-checklist-group { padding: 22px 18px; }
          .faq-answer { padding-right: 0; }
          .related-section { padding: 68px 0; }
          .related-heading h2, .final-cta h2 { font-size: 32px; }
          .related-grid { border-left: 0; }
          .related-card { border-left: 1px solid #D2D7DF; min-height: 0; }
          .final-cta { padding: 68px 0; }
          .final-cta-panel { padding: 36px 24px; gap: 32px; }
          .final-cta-actions { flex-direction: column; }

          .table-scroll {
            width: 100%;
            max-width: 100%;
            overflow: visible;
            padding-bottom: 0;
          }
          .context-table,
          .context-table tbody,
          .context-table tr,
          .context-table th,
          .context-table td {
            display: block;
            width: 100% !important;
            min-width: 0 !important;
          }
          .context-table thead {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
            border: 0;
          }
          .context-table caption { margin-bottom: 8px; }
          .context-table tbody tr {
            padding: 13px 0;
            border-bottom: 1px solid #DCE1E8;
          }
          .context-table tbody th[scope="row"] {
            padding: 0;
            border: 0;
            background: transparent;
            color: #202939;
            font-size: 16px;
          }
          .context-table tbody td {
            padding: 4px 0 0;
            border: 0;
            color: #475467;
          }
          .sample-table { display: block; }
          .sample-table tbody,
          .sample-table tr,
          .sample-table th,
          .sample-table td { display: block; width: 100% !important; }
          .sample-table tr { padding: 13px 0; border-bottom: 1px solid #DCE1E8; }
          .sample-table th { padding: 0; border: 0; background: transparent; font-size: 14px; color: #667085; }
          .sample-table td { padding: 4px 0 0; border: 0; color: #344054; }

          .failure-table-wrap {
            border: 0;
            border-radius: 0;
            overflow: visible;
            background: transparent;
          }
          .failure-table,
          .failure-table tbody,
          .failure-table tr,
          .failure-table th,
          .failure-table td {
            display: block;
            width: 100% !important;
            min-width: 0 !important;
          }
          .failure-table thead {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            white-space: nowrap;
            border: 0;
          }
          .failure-table tbody tr {
            margin: 0 0 16px;
            border: 1px solid #D7DCE4;
            border-radius: 14px;
            overflow: hidden;
            background: #FFFFFF;
          }
          .failure-table tbody th[scope="row"] {
            padding: 16px;
            border: 0;
            background: #F2F4F7;
            color: #202939;
            font-size: 17px;
          }
          .failure-table tbody td {
            padding: 14px 16px 15px;
            border: 0;
            border-top: 1px solid #E0E4EA;
          }
          .failure-table tbody td::before {
            content: attr(data-label);
            display: block;
            margin-bottom: 5px;
            color: #667085;
            font-size: 12px;
            line-height: 1.35;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .evidence-block li { border-radius: 10px; }
          .reference-item a { align-items: flex-start; }
          .reference-item svg { flex: 0 0 auto; margin-top: 3px; }
          .print-link { min-height: 44px; text-align: left; }
        }

        @media (max-width: 390px) {
          .shell { width: min(100% - 32px, 1280px); }
          .hero h1 { font-size: 36px; }
          .hero-deck { font-size: 17px; }
          .hero-visual { margin-left: -8px; margin-right: -8px; }
          .hero-visual-svg { max-height: 310px; }
          .framework-band,
          .final-checklist-wrap { margin-left: -16px; margin-right: -16px; }
          .context-table th,
          .context-table td,
          .failure-table th,
          .failure-table td { padding: 13px 12px; }
        }

        @media print {
          .toc-desktop,
          .toc-mobile,
          .hero-actions,
          .final-cta,
          .related-section { display: none !important; }
          .shell { width: 100%; }
          .hero { padding-bottom: 36px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .article-layout { display: block; }
          .article-section { break-inside: avoid; }
          .final-checklist-wrap { border: 0; padding: 0; }
        }
      `}</style>

      <div className="breadcrumb-wrap">
        <div className="shell">
          <Breadcrumbs />
        </div>
      </div>

      <header className="hero">
        <div className="shell hero-grid">
          <div>
            <div className="eyebrow">Medical Device Localization Guide</div>
            <h1>Medical Device Software Localization Checklist</h1>
            <p className="hero-deck">
              Use this practical, risk-based checklist to prepare, translate,
              test, approve, and maintain multilingual medical device software.
              Review interface context, terminology, variables, clinical data,
              text expansion, character rendering, right-to-left behavior, and
              linguistic quality before localized software reaches users.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={sectionUrl("define-scope")}>
                Start the Checklist <ArrowIcon />
              </a>
              <a className="button button-secondary" href={sectionUrl("final-checklist")}>
                View the Final Pre-Release Checklist
              </a>
            </div>
            <div className="hero-metadata" aria-label="Article information">
              {articleMetadata.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <HeroIllustration />
          </div>
        </div>
      </header>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell">
          <div className="summary-panel">
            <div>
              <div className="eyebrow">Key Takeaways</div>
              <h2 id="key-takeaways-title">What a Controlled Multilingual Release Requires</h2>
            </div>
            <ol className="summary-list">
              {takeaways.map((item, index) => (
                <li key={item}>
                  <span className="summary-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="shell article-layout">
        <TOC />

        <article className="article-column">
          <ArticleSection
            id="overview"
            title="Why Medical Device Software Localization Requires Controlled Testing"
            intro="Medical device software localization involves more than replacing source-language text with translated text. The localized experience must communicate the intended meaning, operate correctly within the software, and support users across real product states and workflows."
          >
            <p>
              A translation can be linguistically correct in a spreadsheet and
              still fail inside the product. A button may be truncated. A
              dynamic value may appear in the wrong position. A warning may
              become ambiguous. A unit may separate from its number. A
              right-to-left screen may display a model number incorrectly. A
              translated error message may no longer match the recovery action
              available to the user.
            </p>
            <p>
              These issues matter because the medical device user interface
              extends beyond visual appearance. It includes the elements users
              interact with while preparing, operating, and maintaining a
              device, including software controls, displays, alarms, feedback,
              labels, and supporting instructions. Localization teams should
              therefore evaluate both <strong>language quality</strong> and
              <strong> product behavior</strong>.
            </p>
            <div className="quality-note">
              <div className="label">Important Scope Note</div>
              <p>
                This guide provides localization planning and testing guidance.
                Manufacturers remain responsible for determining the regulatory,
                risk-management, usability, verification, validation, and
                approval activities applicable to each device, software change,
                user group, and market.
              </p>
            </div>
            <a
              className="inline-link"
              href="https://www.stepes.com/medical-device-translation-services/"
            >
              Explore Stepes medical device translation services <ArrowIcon />
            </a>
          </ArticleSection>

          <ArticleSection
            id="who-should-use"
            title="Who Should Use This Checklist?"
            intro="The checklist is designed for cross-functional teams responsible for global medical device software and can be tailored to embedded interfaces, standalone software, companion applications, and connected clinical platforms."
          >
            <div className="audience-grid" aria-label="Intended users">
              {[
                "Software product managers",
                "Localization program managers",
                "Software engineers",
                "Verification and validation teams",
                "Software quality assurance teams",
                "Regulatory affairs professionals",
                "Quality management teams",
                "Human factors and usability specialists",
                "Medical and linguistic reviewers",
                "Market-access teams",
                "Technical documentation teams",
                "External localization partners",
              ].map((item) => (
                <div className="audience-item" key={item}>{item}</div>
              ))}
            </div>
            <h3>Products and Interfaces Covered</h3>
            <p>
              Use the framework for embedded medical device interfaces,
              Software as a Medical Device, in vitro diagnostic software,
              device-control applications, companion mobile applications,
              connected-device platforms, patient-facing applications,
              clinician dashboards, monitoring software, administrative portals,
              servicing tools, and software-delivered help.
            </p>
            <p>
              Not every item applies to every product. Tailor the review depth to
              the intended use, intended users, use environment, software
              architecture, device risk, interface content, release type,
              platform, target market, and potential consequence of a defect.
            </p>
          </ArticleSection>

          <ArticleSection
            id="six-gate-framework"
            title="Use a Six-Gate Framework for Every Multilingual Release"
            intro="Localization becomes easier to control when teams organize it around six release gates rather than one translation handoff."
          >
            <div className="framework-band">
              <h3>Plan, Prepare, Localize, Test, Approve, and Maintain</h3>
              <div className="gates-grid">
                {releaseGates.map((gate) => (
                  <div className="gate-card" key={gate.number}>
                    <div className="gate-number">{gate.number}</div>
                    <h4>{gate.title}</h4>
                    <p>{gate.question}</p>
                  </div>
                ))}
              </div>
            </div>
            <h3>Apply the Framework by Locale and Build</h3>
            <ol>
              <li>Assign an accountable owner for each gate.</li>
              <li>Define the software build, locale, platform, and test environment.</li>
              <li>Complete the applicable checks and retain objective evidence.</li>
              <li>Log, classify, correct, and retest defects.</li>
              <li>Obtain the required approval before proceeding to release.</li>
            </ol>
            <p>
              Define a locale more precisely than a language alone. French for
              France and French for Canada, for example, may require different
              terminology, formats, conventions, and approved product language.
              Treat every supported locale as a controlled product configuration.
            </p>
          </ArticleSection>

          <ArticleSection
            id="quality-context"
            title="Where Localization Fits Within Quality, Risk, and Usability Processes"
            intro="Medical device software localization should operate within the manufacturer’s established quality, software lifecycle, usability, and risk-management processes."
          >
            <p>
              A controlled localization process supports clearer ownership,
              supplier oversight, version traceability, documented review, and
              risk-based decision-making. Depending on the device and market,
              applicable frameworks may include ISO 13485 for quality management,
              ISO 14971 for medical device risk management, IEC 62304 for
              software lifecycle processes, and IEC 62366-1 for usability
              engineering as it relates to safety.
            </p>
            <p>
              Localization teams should not assume that every language change
              requires the same level of review. Instead, evaluate whether the
              change affects critical tasks, user understanding, interface
              behavior, clinical presentation, or use-related risk, then route it
              through the manufacturer’s applicable process.
            </p>
            <div className="quality-note">
              <div className="label">Use Careful Regulatory Language</div>
              <p>
                A checklist can support a compliant quality process, but it does
                not itself establish regulatory compliance, complete software
                validation, or replace formal human-factors activities required
                for a particular product.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection
            id="define-scope"
            number="1"
            title="Define the Localization Scope and Risk Before Translation Begins"
            intro="Localization planning should begin with the product, users, markets, and workflows—not with a word count."
          >
            <p>
              The same source string can have very different implications
              depending on where it appears. A phrase displayed in a general
              information panel may be relatively low risk. The same phrase used
              in an alarm, treatment setting, calibration step, or error-recovery
              workflow may require more context, review, and testing.
            </p>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Target countries and locales are confirmed.",
                "Regional language variants are defined.",
                "Intended users are identified for each interface.",
                "User language, literacy, and domain knowledge are considered.",
                "Intended use environments are documented.",
                "Supported device models, platforms, and screen sizes are listed.",
                "Software builds and language-pack versions are identified.",
                "Safety-relevant workflows and critical interface content are flagged.",
                "Market-specific language requirements have been reviewed.",
                "Regulatory, engineering, linguistic, quality, and approval owners are assigned.",
                "The schedule includes integration, testing, correction, and retesting.",
                "Dependencies involving the IFU, eIFU, labeling, training, and reports are identified.",
              ]}
            />
            <h3>Content That May Require Increased Control</h3>
            <ul>
              <li>Warnings, alarms, contraindications, and confirmation prompts</li>
              <li>Treatment, diagnostic, and patient-status information</li>
              <li>Operating parameters, thresholds, ranges, and clinical values</li>
              <li>Setup, calibration, maintenance, and recovery instructions</li>
              <li>Power, battery, network, sensor, and accessory states</li>
              <li>Emergency, escalation, and error-recovery instructions</li>
            </ul>
            <EvidenceBlock
              items={[
                "Market and locale matrix",
                "Product and platform matrix",
                "Interface inventory",
                "Critical-content classification",
                "Workflow map",
                "Responsibility matrix",
                "Approved localization plan",
              ]}
            />
            <ReleaseGate>
              Do not begin production translation until the locales, builds,
              owners, critical workflows, and review requirements are defined.
            </ReleaseGate>
          </ArticleSection>

          <ArticleSection
            id="internationalize"
            number="2"
            title="Prepare the Medical Device Software for Multiple Languages"
            intro="Many defects discovered during translation are internationalization problems caused by hard-coded text, fragmented sentences, unsupported scripts, or inflexible layouts."
          >
            <p>
              Internationalization makes the product capable of supporting
              different languages and regional conventions without redesigning
              the application for every market.
            </p>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "User-facing strings are externalized from source code.",
                "Hard-coded interface text has been identified and addressed.",
                "Text embedded in images is avoided or separately managed.",
                "Sentences are not assembled from fragments that translators cannot reorder.",
                "Plural, gender, and grammatical variants are supported where required.",
                "Unicode is supported across storage, processing, display, input, export, and integration.",
                "Locale identifiers are applied consistently.",
                "Interface containers can expand and wrap appropriately.",
                "Required scripts are supported by approved fonts.",
                "Locale-specific formats are separated from translatable language.",
                "Fallback behavior and missing-translation detection are defined.",
                "Pseudo-localization is performed before production integration.",
                "Language switching does not retain content from the previous locale.",
                "Offline modes, notifications, reports, PDFs, and external displays use the correct language resources.",
                "Input, search, filtering, sorting, and copy-paste behavior support the target scripts.",
              ]}
            />
            <div className="quality-note">
              <div className="label">Context Matters</div>
              <p>
                Do not reuse one English string in several unrelated contexts
                simply because the source wording is identical. Words such as
                “open,” “lead,” “normal,” “clear,” and “dose” may require
                different translations depending on their grammatical function
                and product meaning.
              </p>
            </div>
            <EvidenceBlock
              items={[
                "Internationalization audit",
                "Hard-coded text report",
                "Pseudo-localization results",
                "Font and script matrix",
                "Supported-locale specification",
                "Technical issue log",
              ]}
            />
            <ReleaseGate>
              Confirm that the application can technically support every target
              locale before integrating production translations.
            </ReleaseGate>
          </ArticleSection>

          <ArticleSection
            id="context-package"
            number="3"
            title="Build a Complete String Inventory and Context Package"
            intro="Interface context helps linguists translate the intended function rather than guess from an isolated source string."
          >
            <p>
              A translator who sees only “Clear,” “Apply,” “Lead,” or “Normal”
              may not know the screen, user, action, device state, or grammatical
              role. Context should be part of the translatable asset, not an
              informal supplement added only after questions arise.
            </p>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Every string has a stable identifier.",
                "Each string is associated with its screen or component.",
                "Screenshots or visual references are available.",
                "The relevant user workflow and intended user are documented.",
                "The string function is identified as a button, label, warning, status, heading, or instruction.",
                "Character or layout constraints are provided.",
                "Variables and possible values are explained.",
                "Related strings are grouped.",
                "Hidden, conditional, and error-state strings are included.",
                "Developer comments are understandable to non-developers.",
                "Abbreviations and acronyms are expanded.",
                "Content that must remain untranslated is identified.",
                "Identical source strings with different meanings have separate entries.",
                "Obsolete strings are removed and the source text is approved.",
                "Linguist questions can be routed to an accountable product owner.",
              ]}
            />
            <div className="table-scroll" role="region" aria-label="Recommended string context fields" tabIndex="0">
              <table className="context-table">
                <caption>Recommended String Context Fields</caption>
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["String ID", "Maintains traceability across builds and languages"],
                    ["Source text", "Establishes the approved source baseline"],
                    ["Screen or component", "Shows where the text appears"],
                    ["Workflow", "Explains the task or device state"],
                    ["UI function", "Identifies button, label, warning, status, or instruction"],
                    ["Intended user", "Distinguishes clinician, patient, technician, or administrator content"],
                    ["Screenshot", "Provides visual and spatial context"],
                    ["Character limit", "Identifies layout constraints"],
                    ["Variables", "Explains dynamic values and syntax"],
                    ["Risk category", "Supports review and testing decisions"],
                    ["Developer note", "Clarifies behavior or intended meaning"],
                    ["Approved terminology", "Connects the string to controlled product language"],
                  ].map(([field, purpose]) => (
                    <tr key={field}>
                      <th scope="row">{field}</th>
                      <td>{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="example-panel">
              <div className="eyebrow">Illustrative Example</div>
              <h3>Why the Word “Clear” Cannot Be Translated in Isolation</h3>
              <div className="example-options">
                <span>Remove a value from a field</span>
                <span>Acknowledge or clear an alarm</span>
                <span>Clear an obstruction</span>
                <span>Return a result to its default state</span>
                <span>Transparent</span>
                <span>Clinically normal or free of findings</span>
              </div>
            </div>
            <EvidenceBlock
              items={[
                "Approved string inventory",
                "Screenshot library",
                "Context records",
                "Source baseline",
                "Query and decision log",
                "Translation export history",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="terminology"
            number="4"
            title="Control Terminology Across the Interface, IFU, and Labeling"
            intro="Users may encounter the same product concept in the software interface, instructions for use, electronic IFU, labels, quick-start guides, training materials, reports, and technical support content."
          >
            <p>
              Inconsistent terminology can make instructions harder to follow
              and may suggest that two related terms refer to different
              components, actions, or states. A controlled termbase gives
              translators, reviewers, engineers, and documentation teams one
              approved source of multilingual product language.
            </p>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "A product-specific source glossary is approved.",
                "Approved translations are defined for each locale.",
                "Interface terms align with the IFU and eIFU where appropriate.",
                "Device-component names, alarms, statuses, and operating states are differentiated clearly.",
                "Clinical terminology is reviewed by qualified subject-matter linguists.",
                "Patient-facing and clinician-facing language use the appropriate register.",
                "Approved abbreviations are documented.",
                "Ambiguous and prohibited translations are recorded.",
                "Regional terminology differences are managed by locale.",
                "Units, symbols, product codes, trademarks, and proprietary terms are addressed.",
                "Legacy terminology is mapped to current terminology.",
                "Terminology changes trigger impact analysis across related assets.",
                "Questions, decisions, reviewers, and approval dates are retained.",
              ]}
            />
            <h3>Recommended Terminology Record</h3>
            <p>
              Record the source term, definition, context, part of speech,
              approved translation, locale, usage example, prohibited
              translation, product component, reference document, approval
              owner, approval date, and revision history.
            </p>
            <a className="inline-link" href="https://www.stepes.com/terminology-management/">
              Explore enterprise terminology management <ArrowIcon />
            </a>
            <ReleaseGate>
              Approve critical terminology before final linguistic review and
              in-product testing begin.
            </ReleaseGate>
          </ArticleSection>

          <ArticleSection
            id="translate-review"
            number="5"
            title="Translate and Review the Interface in Context"
            intro="Medical device interface translation must account for meaning, workflow, user role, visual placement, and product behavior—not only source-language equivalence."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Translators have appropriate medical and software-localization experience.",
                "Linguists understand the intended user and use environment.",
                "Translators can view screenshots or the working product.",
                "Patient-facing language avoids unnecessary complexity.",
                "Clinician-facing language uses accepted professional terminology.",
                "Commands are direct and unambiguous.",
                "Warnings communicate both the condition and the required action.",
                "Status messages do not imply an incorrect device or clinical state.",
                "Related screens use consistent product language.",
                "Abbreviations remain understandable and approved.",
                "Ambiguous source text is queried rather than guessed.",
                "Defined content categories receive independent review.",
                "Medical terminology receives subject-matter review where required.",
                "Corrections are reflected in the translation memory and termbase.",
                "Final language is reviewed in the integrated interface.",
              ]}
            />
            <h3>Keep These Activities Distinct</h3>
            <div className="distinction-grid">
              {[
                ["Translation", "Creates the target-language content."],
                ["Independent Linguistic Review", "Evaluates accuracy, completeness, terminology, fluency, and audience suitability."],
                ["Automated Localization QA", "Checks measurable issues such as missing text, variables, tags, numbers, and terminology inconsistencies."],
                ["In-Product Linguistic Testing", "Evaluates language and presentation inside the actual software."],
                ["Functional Software Testing", "Confirms that the localized product behaves as intended."],
                ["Human Factors or Usability Validation", "Evaluates representative users performing applicable tasks under the manufacturer’s process."],
              ].map(([title, text]) => (
                <div className="distinction-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </ArticleSection>

          <ArticleSection
            id="variables"
            number="6"
            title="Verify Variables, Placeholders, Tags, and Dynamic Content"
            intro="A translated sentence may import successfully while containing a broken variable, altered tag, incorrect placeholder order, or grammatically incompatible dynamic value."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Every required variable is present.",
                "Variable names and syntax remain unchanged.",
                "Duplicate or missing placeholders are detected.",
                "Placeholder order is appropriate for the target language.",
                "The system allows linguistic reordering where necessary.",
                "Markup, tags, and escape characters are protected.",
                "Line breaks are intentional.",
                "Keyboard shortcuts do not conflict.",
                "URLs, file paths, codes, and commands are preserved.",
                "Dynamic nouns support required grammatical forms.",
                "Singular, plural, and zero-value behavior is correct.",
                "Minimum, maximum, long, blank, null, unavailable, and unknown values are tested.",
                "Variables remain readable in right-to-left strings.",
                "Inserted values do not create misleading wording.",
                "Automated placeholder checks are completed before integration.",
                "Integrated dynamic strings are reviewed with realistic values.",
              ]}
            />
            <h3>Test Realistic and Extreme Values</h3>
            <div className="code-examples" aria-label="Example dynamic interface strings">
              <div className="code-example">Battery remaining: {`{0}`}%</div>
              <div className="code-example">Calibration due in {`{count}`} days</div>
              <div className="code-example">Patient {`{name}`} has been disconnected</div>
              <div className="code-example">Temperature exceeds {`{threshold}`} °C</div>
              <div className="code-example">Connect sensor to port {`{number}`}</div>
              <div className="code-example">{`{completed}`} of {`{total}`} tests complete</div>
            </div>
            <p>
              Testing only one typical value may conceal layout, plural,
              ordering, directionality, or grammar problems. Use zero, one,
              multiple, negative, maximum-length, missing, and exceptional
              values where the software permits them.
            </p>
            <EvidenceBlock
              items={[
                "Automated QA report",
                "Variable test cases",
                "Integrated screenshots",
                "Corrected resource files",
                "Retest results",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="locale-data"
            number="7"
            title="Test Locale-Sensitive Numbers, Units, Dates, and Clinical Data"
            intro="Numbers and clinical values may appear universal, but their formatting, interpretation, spacing, and surrounding language can vary by locale."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Decimal and thousands separators",
                "Positive and negative signs",
                "Leading and trailing zeros",
                "Percentages, ranges, and thresholds",
                "Greater-than and less-than symbols",
                "Scientific notation, fractions, superscripts, and subscripts",
                "Date order, month names, and abbreviations",
                "12-hour and 24-hour time and time zones",
                "Temperature and measurement units",
                "Unit spacing and line wrapping",
                "Reference values, chart legends, axes, tables, and reports",
                "Values inserted into sentences",
                "Data-entry validation",
                "Imported, exported, printed, and PDF output",
                "Mixed-direction numbers and units",
              ]}
            />
            <div className="quality-note">
              <div className="label">Clinical Data Control</div>
              <p>
                Do not automatically convert medical units, ranges, thresholds,
                or calculations solely because a different locale is selected.
                Any change to clinical presentation should follow the
                manufacturer’s approved product, risk, engineering, and market
                requirements.
              </p>
            </div>
            <h3>Hidden Defects to Look For</h3>
            <ul>
              <li>A value displayed as 1,5 is parsed incorrectly by the application.</li>
              <li>A minus sign disappears because the selected font lacks the expected glyph.</li>
              <li>A unit wraps onto another line and appears to belong to a different value.</li>
              <li>A date such as 04/05/2026 is ambiguous to the intended user.</li>
              <li>A right-to-left screen visually reverses a numerical range.</li>
              <li>A localized input field rejects the decimal format shown by the interface.</li>
              <li>A generated report uses a different locale convention from the device display.</li>
            </ul>
            <EvidenceBlock
              items={[
                "Locale-format test matrix",
                "Boundary-value results",
                "Data-entry test cases",
                "Export and print samples",
                "Device screenshots",
                "Approved exceptions",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="text-expansion"
            number="8"
            title="Allow for Text Expansion Without Hiding Critical Information"
            intro="Translated content may be longer or shorter than the source, and short English interface strings can experience especially large proportional expansion."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Buttons, tabs, menus, dialog boxes, and alerts",
                "Tooltips, form labels, drop-down lists, and tables",
                "Charts, navigation, modal windows, and status banners",
                "Toast messages and transient notifications",
                "Small device displays and external displays",
                "Mobile portrait and landscape views",
                "Responsive layouts",
                "Printed output and generated reports",
              ]}
            />
            <h3>Defects to Identify</h3>
            <ul>
              <li>Truncated, clipped, overlapping, or incorrectly wrapped text</li>
              <li>Hidden controls or excessive scrolling</li>
              <li>Misaligned fields and broken line spacing</li>
              <li>Detached numbers and units</li>
              <li>Obscured warning symbols, values, charts, or status indicators</li>
              <li>Reduced type that becomes difficult to read</li>
              <li>Buttons that become difficult to identify or select</li>
            </ul>
            <div className="quality-note">
              <div className="label">Design Recommendation</div>
              <p>
                Flexible interface design is preferable to inventing
                abbreviations after translation. When shortening is unavoidable,
                review the abbreviation linguistically, test it in context, and
                add it to the approved terminology record.
              </p>
            </div>
            <EvidenceBlock
              items={[
                "Pseudo-localization screenshots",
                "Viewport and device matrix",
                "Layout defect log",
                "Before-and-after screenshots",
                "Retest results",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="rendering"
            number="9"
            title="Check Unicode, Fonts, Diacritics, and Complex Script Rendering"
            intro="A system may store translated characters correctly but display or process them incorrectly because of font fallback, shaping, normalization, line-breaking, input, or export problems."
          >
            <h3>Scripts and Behaviors to Evaluate</h3>
            <p>
              Review accented Latin characters, Vietnamese diacritics,
              Cyrillic, Greek, Arabic, Hebrew, Simplified and Traditional
              Chinese, Japanese, Korean, Thai, Devanagari and other Indic
              scripts, combining characters, full-width and half-width forms,
              superscripts, and subscripts as applicable.
            </p>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Required glyphs are present without replacement boxes or question marks.",
                "Font fallback preserves readability and hierarchy.",
                "Diacritics remain attached to the correct characters.",
                "Arabic letters join and shape correctly.",
                "Indic and other complex scripts form correctly.",
                "Character normalization does not alter search or comparison behavior.",
                "Line breaking and punctuation are appropriate for the script.",
                "Text remains legible at the smallest supported size.",
                "Cursor movement and text selection follow expected behavior.",
                "Search, filtering, sorting, and collation support localized input.",
                "Copy and paste preserve the content.",
                "Notifications, printing, PDF generation, reports, and external displays preserve the script.",
              ]}
            />
            <p>
              Test on supported hardware and operating systems rather than
              relying entirely on a desktop preview or resource-file review.
            </p>
          </ArticleSection>

          <ArticleSection
            id="rtl"
            number="10"
            title="Validate Right-to-Left and Mixed-Direction Content"
            intro="Arabic and Hebrew interfaces frequently contain left-to-right elements such as numbers, units, product names, serial numbers, error codes, email addresses, and URLs."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Overall interface direction and navigation sequence",
                "Text alignment and form labels",
                "Back and forward controls",
                "Directional icons, progress indicators, and sliders",
                "Tables, charts, parentheses, and punctuation",
                "Numbers, units, model numbers, and serial numbers",
                "Error codes, product names, email addresses, and URLs",
                "Search fields, cursor movement, and text selection",
                "Notifications, exported reports, and printed output",
              ]}
            />
            <h3>Do Not Mirror Every Element Automatically</h3>
            <p>
              Define which components follow reading direction, represent a
              physical direction, represent time or progression, must remain
              unchanged, or require locale-specific validation. A navigation
              arrow may follow reading direction, while an icon representing a
              physical device orientation may need to remain unchanged. The
              correct behavior depends on meaning, not only layout.
            </p>
            <EvidenceBlock
              items={[
                "RTL interface specification",
                "Mixed-direction test cases",
                "Target-hardware screenshots",
                "Defect and exception records",
                "Retest approvals",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="linguistic-testing"
            number="11"
            title="Test Localized Software Through Real User Workflows"
            intro="A string-by-string review cannot reveal every problem. Localization defects often become apparent only when content appears in sequence, responds to input, changes with device state, or interacts with other screens."
          >
            <h3>Workflows to Test Where Applicable</h3>
            <div className="audience-grid">
              {[
                "Installation and startup",
                "Login and authentication",
                "User or patient setup",
                "Device configuration",
                "Calibration",
                "Normal operation",
                "Data entry and monitoring",
                "Alarm acknowledgement",
                "Error recovery",
                "Interrupted procedures",
                "Low-battery and network-loss states",
                "Sensor and accessory connection",
                "Data export and report generation",
                "Maintenance and cleaning",
                "Software updates",
                "Shutdown, reset, help, and support",
              ].map((item) => (
                <div className="audience-item" key={item}>{item}</div>
              ))}
            </div>
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Every visible string is translated and matches its screen and function.",
                "Navigation remains understandable and the expected action is clear.",
                "System feedback matches the action taken.",
                "Critical workflows use approved terminology.",
                "Hidden, conditional, and error-state strings are exercised.",
                "Maximum-length values are displayed.",
                "Warnings remain visible long enough to read.",
                "Language changes persist correctly.",
                "Unexpected fallback content does not appear.",
                "Help content corresponds to the active screen.",
                "Voice, audio, or accessibility content is synchronized where applicable.",
                "Supported hardware, operating systems, and representative environments are covered.",
              ]}
            />
            <div className="quality-note">
              <div className="label">Important Distinction</div>
              <p>
                Linguistic testing can identify multilingual interface defects,
                but it does not automatically replace software verification,
                usability evaluation, or human-factors validation required by
                the manufacturer.
              </p>
            </div>
            <EvidenceBlock
              items={[
                "Approved test scripts",
                "Locale and device matrix",
                "Tester qualifications",
                "Execution records",
                "Screenshots or recordings",
                "Defect reports",
                "Correction and retest evidence",
                "Final test summary",
              ]}
            />
          </ArticleSection>

          <ArticleSection
            id="defect-model"
            number="12"
            title="Use a Risk-Based Localization Defect Model"
            intro="A punctuation preference and a mistranslated alarm should not receive the same response or release priority."
          >
            <p>
              A structured severity model helps teams escalate important
              findings, allocate resources, and define release criteria. The
              examples below are illustrative and should be adapted to the
              manufacturer’s established processes.
            </p>
            <div className="severity-grid">
              <div className="severity-card critical">
                <h3>Critical</h3>
                <p>
                  A defect that could contribute to an incorrect action,
                  misunderstanding of safety-relevant information, or inability
                  to complete a critical task.
                </p>
                <ul>
                  <li>Incorrect clinical value or unit</li>
                  <li>Hidden or mistranslated alarm</li>
                  <li>Reversed action or wrong status</li>
                  <li>Missing emergency instruction</li>
                </ul>
              </div>
              <div className="severity-card major">
                <h3>Major</h3>
                <p>
                  A defect that prevents task completion or causes substantial
                  misunderstanding but is not currently assessed as critical.
                </p>
                <ul>
                  <li>Unusable setup screen</li>
                  <li>Truncated action button</li>
                  <li>Broken variable substitution</li>
                  <li>Missing recovery instruction</li>
                </ul>
              </div>
              <div className="severity-card moderate">
                <h3>Moderate</h3>
                <p>
                  A defect that reduces clarity, consistency, or usability
                  without preventing the workflow.
                </p>
                <ul>
                  <li>Inconsistent terminology</li>
                  <li>Awkward instruction</li>
                  <li>Noncritical layout problem</li>
                  <li>Unapproved abbreviation</li>
                </ul>
              </div>
              <div className="severity-card minor">
                <h3>Minor</h3>
                <p>
                  A cosmetic or stylistic issue with limited effect on meaning
                  or use.
                </p>
                <ul>
                  <li>Punctuation preference</li>
                  <li>Nonessential spacing</li>
                  <li>Stylistic inconsistency</li>
                  <li>Capitalization preference</li>
                </ul>
              </div>
            </div>
            <div className="quality-note">
              <div className="label">Risk Escalation</div>
              <p>
                This is a localization triage model, not a replacement for the
                manufacturer’s ISO 14971 risk-management process. Findings with
                potential safety or regulatory significance should be escalated
                through the established quality and risk procedures.
              </p>
            </div>
            <h3>Recommended Defect Fields</h3>
            <p>
              Record the defect ID, locale, software build, language-pack
              version, platform, screen, workflow, string ID, observed content,
              expected content, severity, potential user effect, screenshot,
              owner, corrective action, retest result, approval status, and dates.
            </p>
          </ArticleSection>

          <ArticleSection
            id="release-approval"
            number="13"
            title="Complete Multilingual Release Approval and Traceability"
            intro="A localized file importing successfully does not mean the product is ready for release."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "Every planned locale has completed its required workflow.",
                "Critical screens and workflows have passed testing.",
                "All critical localization defects are resolved.",
                "Major defects are resolved or formally dispositioned.",
                "Corrections have been retested and open deviations are documented.",
                "Terminology and translation memory updates are synchronized.",
                "The interface, IFU, eIFU, labeling, and training content are appropriately aligned.",
                "The approved language files match the release build.",
                "The language-pack version is recorded.",
                "Required engineering, linguistic, quality, regulatory, and product approvals are complete.",
                "Release evidence is stored in the appropriate system.",
                "Rollback and hotfix procedures are defined.",
                "Support teams receive approved terminology and known-issue information.",
                "Post-release feedback routes are active.",
              ]}
            />
            <h3>Recommended Release Record</h3>
            <div className="table-scroll" role="region" aria-label="Recommended release record" tabIndex="0">
              <table className="context-table">
                <thead>
                  <tr>
                    <th scope="col">Field</th>
                    <th scope="col">Record</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Product", "Product or device name"],
                    ["Software version", "Approved release build"],
                    ["Language-pack version", "Approved localized resource version"],
                    ["Locale", "Language and market variant"],
                    ["Device or platform", "Tested configuration"],
                    ["Test environment", "Hardware, operating system, and supporting systems"],
                    ["Reviewer", "Qualified person completing the review"],
                    ["Review date", "Date testing was completed"],
                    ["Defects", "Resolved and approved open findings"],
                    ["Approval", "Owner, status, and date"],
                  ].map(([field, record]) => (
                    <tr key={field}>
                      <th scope="row">{field}</th>
                      <td>{record}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ReleaseGate>
              Release only the locale and language-pack version that completed
              the defined approval process for the applicable software build.
            </ReleaseGate>
          </ArticleSection>

          <ArticleSection
            id="maintenance"
            number="14"
            title="Control Localization Across Software Updates and New Markets"
            intro="Agile development, connected applications, cloud platforms, modular language packs, and remote delivery make multilingual change control an ongoing product responsibility."
          >
            <h3>What to Check</h3>
            <Checklist
              items={[
                "New and changed strings are identified.",
                "Deleted strings are removed.",
                "New strings include context.",
                "Previously approved translations are reused appropriately.",
                "Changed source meaning invalidates obsolete translations.",
                "Terminology changes receive impact analysis.",
                "Affected workflows are regression-tested.",
                "Language resources remain mapped to the correct software build.",
                "Emergency patches include localization impact assessment.",
                "Screenshots and supporting documentation are updated.",
                "New operating systems, device models, and display sizes are evaluated.",
                "Market-specific changes remain isolated to the intended locales.",
                "User and support feedback is reviewed.",
                "Localization findings are routed into applicable complaint or quality processes.",
                "Post-release corrections and language assets remain version-controlled.",
              ]}
            />
            <p>
              Localization APIs, repository connections, webhooks, and continuous
              integration workflows can help synchronize resource files,
              translation keys, context, review status, and localized builds.
              Automation should preserve technical structure and approval status
              rather than reducing localization to an uncontrolled text exchange.
            </p>
            <a
              className="inline-link"
              href="https://www.stepes.com/software-localization-services/"
            >
              Explore software localization services <ArrowIcon />
            </a>
          </ArticleSection>

          <ArticleSection
            id="ai"
            title="Where AI Can Support Medical Device Software Localization"
            intro="AI can improve speed and scalability when it is applied within a controlled workflow that reflects content risk and preserves qualified human review."
          >
            <div className="ai-panel">
              <div className="eyebrow">AI + Human Translation Workflow</div>
              <div className="ai-columns">
                <div>
                  <h3>Useful AI-Assisted Activities</h3>
                  <ul>
                    <li>Draft translation for approved content categories</li>
                    <li>Terminology suggestions and repetition identification</li>
                    <li>Missing-translation, placeholder, and tag checks</li>
                    <li>Terminology and number consistency checks</li>
                    <li>Text-expansion prediction and change-impact analysis</li>
                    <li>Test-case prioritization and defect grouping</li>
                  </ul>
                </div>
                <div>
                  <h3>Controls to Retain</h3>
                  <ul>
                    <li>Classify content by risk and intended use.</li>
                    <li>Use approved systems and data-handling controls.</li>
                    <li>Supply product terminology and interface context.</li>
                    <li>Protect variables, tags, and technical syntax.</li>
                    <li>Require qualified review for defined content.</li>
                    <li>Test approved translations inside the software.</li>
                    <li>Document workflow versions where required.</li>
                    <li>Do not release raw AI output into the device interface.</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Evaluate AI output for meaning, completeness, terminology,
              clinical appropriateness, and interface behavior—not only fluency.
              A fluent sentence may still contain an omission, meaning shift,
              wrong unit, incorrect term, or misleading instruction.
            </p>
            <a
              className="inline-link"
              href="https://www.stepes.com/resources/localization-guides/ai-translation-for-medical-devices/"
            >
              Read AI Translation for Medical Devices <ArrowIcon />
            </a>
          </ArticleSection>

          <ArticleSection
            id="common-failures"
            title="Common Medical Device Software Localization Failures"
            intro="These recurring defects often arise when localization is treated as a file-processing task rather than an integrated product workflow."
          >
            <div className="failure-table-wrap" role="region" aria-label="Common localization failures" tabIndex="0">
              <table className="failure-table">
                <thead>
                  <tr>
                    <th scope="col">Failure</th>
                    <th scope="col">Why It Happens</th>
                    <th scope="col">Better Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Translating strings without screenshots", "Linguists cannot determine the function or meaning.", "Provide screen, workflow, user, and string-level context."],
                    ["Reusing one translation for different meanings", "Identical English wording is assumed to represent the same concept.", "Separate context-dependent strings and approve each use."],
                    ["Breaking variables or tags", "Technical elements are treated as ordinary text.", "Protect syntax and run automated validation."],
                    ["Truncating a warning", "Interface dimensions were designed only for the source language.", "Use flexible layouts and pseudo-localization early."],
                    ["Displaying the wrong unit or format", "Locale formatting and product configuration are conflated.", "Validate formats against approved market requirements."],
                    ["Leaving fallback strings untranslated", "Hidden and error states are excluded from the inventory.", "Exercise conditional, offline, and error workflows."],
                    ["Using terminology that conflicts with the IFU", "Software and documentation are localized separately.", "Maintain shared terminology and cross-asset review."],
                    ["Testing only the normal state", "Teams review ideal screens rather than product behavior.", "Trigger alarms, failures, interruptions, and recovery states."],
                    ["Reviewing only an emulator", "Device-specific rendering and interaction issues remain hidden.", "Test on supported target hardware where practical."],
                    ["Treating RTL as right alignment", "Bidirectional ordering, navigation, and component behavior are overlooked.", "Test the complete interface and mixed-direction content."],
                    ["Releasing the wrong language pack", "Build and translation versions are not linked.", "Record and verify software and language-pack versions."],
                    ["Skipping regression testing", "A small source change is assumed to have limited effect.", "Analyze affected strings, screens, workflows, and assets."],
                  ].map(([failure, why, better]) => (
                    <tr key={failure}>
                      <th scope="row">{failure}</th>
                      <td data-label="Why It Happens">{why}</td>
                      <td data-label="Better Approach">{better}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ArticleSection>

          <ArticleSection
            id="final-checklist"
            title="Medical Device Software Localization: Final Pre-Release Checklist"
            intro="Use this condensed master checklist as the final confirmation before a localized build enters the manufacturer’s release-approval process."
          >
            <div className="final-checklist-wrap">
              <div className="final-checklist-grid">
                {finalChecklistGroups.map((group) => (
                  <section className="final-checklist-group" key={group.title} aria-labelledby={`final-${group.title.toLowerCase()}`}>
                    <h3 id={`final-${group.title.toLowerCase()}`}>{group.title}</h3>
                    <Checklist items={group.items} />
                  </section>
                ))}
              </div>
              <button type="button" className="print-link" onClick={() => window.print()}>
                Print the Final Checklist <ArrowIcon />
              </button>
            </div>
          </ArticleSection>

          <ArticleSection
            id="testing-record"
            title="What to Record During Medical Device Linguistic Testing"
            intro="A testing record should make every finding traceable to the product configuration, user workflow, correction, and release decision."
          >
            <table className="sample-table">
              <tbody>
                {[
                  ["Locale", "German — Germany"],
                  ["Software build", "4.8.2"],
                  ["Language-pack version", "de-DE 4.8.2-03"],
                  ["Device", "Model X touchscreen"],
                  ["Workflow", "Alarm acknowledgement"],
                  ["Screen", "High Temperature Alert"],
                  ["String ID", "ALARM_TEMP_ACTION_02"],
                  ["Finding", "Action button text is truncated"],
                  ["Severity", "Major"],
                  ["Potential effect", "The required action is not fully visible"],
                  ["Correction", "Approved shorter translation"],
                  ["Retest", "Passed on the target device"],
                  ["Evidence", "Screenshot and test case LT-DE-148"],
                  ["Approval", "Localization QA and product QA"],
                ].map(([field, value]) => (
                  <tr key={field}>
                    <th scope="row">{field}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              Adapt the record to the manufacturer’s terminology, quality
              system, risk process, test-management environment, and release
              governance.
            </p>
          </ArticleSection>

          <ArticleSection
            id="faqs"
            title="Medical Device Software Localization FAQs"
            intro="Answers to common planning, testing, workflow, and governance questions."
          >
            <FAQ />
          </ArticleSection>

          <ArticleSection
            id="references"
            title="Medical Device Software Localization Standards and References"
            intro="These primary sources provide regulatory, quality, software lifecycle, usability, and internationalization context for multilingual medical device software programs."
          >
            <div className="reference-list">
              {references.map((reference) => (
                <div className="reference-item" key={reference.title}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.title} <ExternalIcon />
                  </a>
                  <span>{reference.organization}</span>
                </div>
              ))}
            </div>
            <p>
              Regulations, standards, and national language requirements can
              change. Confirm the current requirements applicable to the
              specific device, software function, target market, and release.
            </p>
            <div className="author-note">
              <strong>By the Stepes Medical Device Localization Team</strong>
              <span aria-hidden="true"> · </span>
              <span>Last reviewed August 2026</span>
            </div>
          </ArticleSection>
        </article>
      </div>

      <section className="related-section" aria-labelledby="related-resources-title">
        <div className="shell">
          <div className="related-heading">
            <div className="eyebrow">Continue Planning</div>
            <h2 id="related-resources-title">Build a More Controlled Multilingual Medical Device Program</h2>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-card" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <a href={resource.href}>
                  {resource.action} <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell">
          <div className="final-cta-panel">
            <div>
              <h2 id="final-cta-title">Prepare Your Medical Device Software for Global Release</h2>
              <p>
                Stepes helps medical device companies localize embedded
                interfaces, Software as a Medical Device, companion applications,
                connected platforms, and related product content across global
                languages. Bring together medical linguistic expertise,
                terminology control, localization engineering, professional
                review, in-product testing, and documented release workflows in
                one scalable program.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="button button-primary" href="https://app.stepes.com/quote/">
                Request a Translation Quote <ArrowIcon />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/contact-us/">
                Talk to a Medical Device Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
