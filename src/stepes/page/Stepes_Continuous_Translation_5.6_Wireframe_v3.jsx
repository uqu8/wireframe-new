import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  darkEyebrow: "#F2A7C6",
  ink: "#171A21",
  body: "#434854",
  muted: "#6B7280",
  border: "#E5E7EB",
  soft: "#F7F7F8",
  panel: "#FBFBFC",
  dark: "#15161A",
  dark2: "#1C1D22",
  white: "#FFFFFF",
};

const LINKS = {
  contact: "https://www.stepes.com/contact-sales/",
  api: "https://www.stepes.com/translation-api/",
  apiDocs: "https://www.stepes.com/developers/translation-api/",
  workflow: "https://www.stepes.com/translation-workflow-automation/",
  ai: "https://www.stepes.com/ai-translation-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  aiWorkflows:
    "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  tm: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  globalOps: "https://www.stepes.com/solutions/global-content-operations/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  ecommerce: "https://www.stepes.com/ecommerce-translations/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  support: "https://www.stepes.com/solutions/multilingual-customer-support/",
  continuousGuide:
    "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/",
};

function ArrowIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m14 7 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m5 12.5 4.1 4.1L19 6.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NeutralMarker({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.5 12h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
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
      aria-hidden="true"
      focusable="false"
      className={open ? "chevron open" : "chevron"}
    >
      <path
        d="m7 9.5 5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Icon({ name, size = 22 }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    globe: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path
          d="M4 12h16M12 4c2.4 2.2 3.7 4.9 3.7 8S14.4 17.8 12 20c-2.4-2.2-3.7-4.9-3.7-8S9.6 6.2 12 4Z"
          {...common}
        />
      </>
    ),
    spark: (
      <>
        <path
          d="M12 3l1.2 4.1L17 8.3l-3.8 1.2L12 14l-1.2-4.5L7 8.3l3.8-1.2L12 3Z"
          {...common}
        />
        <path
          d="M18.5 14.5l.7 2.2 2.3.8-2.3.7-.7 2.3-.8-2.3-2.2-.7 2.2-.8.8-2.2Z"
          {...common}
        />
      </>
    ),
    flow: (
      <>
        <path d="M4 7h9a3 3 0 0 1 3 3v7" {...common} />
        <path d="m13 4 3 3-3 3M13 17h7M17 14l3 3-3 3" {...common} />
      </>
    ),
    shield: (
      <>
        <path
          d="M12 3.5 19 6v5.5c0 4.5-2.7 7.3-7 9-4.3-1.7-7-4.5-7-9V6l7-2.5Z"
          {...common}
        />
        <path d="m8.8 12 2 2 4.5-5" {...common} />
      </>
    ),
    code: (
      <>
        <path d="m8 7-4 5 4 5M16 7l4 5-4 5M14 4l-4 16" {...common} />
      </>
    ),
    cms: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" {...common} />
        <path d="M4 8h16M8 4v4M8 12h8M8 16h5" {...common} />
      </>
    ),
    cart: (
      <>
        <path d="M4 5h2l2.2 9h8.8l2-6H7.2" {...common} />
        <circle cx="10" cy="18" r="1" {...common} />
        <circle cx="17" cy="18" r="1" {...common} />
      </>
    ),
    book: (
      <>
        <path
          d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z"
          {...common}
        />
        <path
          d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v17h4.5A3.5 3.5 0 0 1 20 22V5.5Z"
          {...common}
        />
      </>
    ),
    message: (
      <>
        <path d="M4 5h16v11H9l-5 4V5Z" {...common} />
        <path d="M8 9h8M8 12h5" {...common} />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l4 4v14H7V3Z" {...common} />
        <path d="M14 3v5h5M10 12h5M10 16h5" {...common} />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" {...common} />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" {...common} />
      </>
    ),
    memory: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" {...common} />
        <path
          d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
          {...common}
        />
      </>
    ),
    term: (
      <>
        <path d="M5 5h14M8 5v14M16 5v14M5 19h14" {...common} />
        <path d="M10.5 12h3" {...common} />
      </>
    ),
    review: (
      <>
        <path d="M5 4h10l4 4v12H5V4Z" {...common} />
        <path d="M15 4v5h5M8 13l2 2 4-4" {...common} />
      </>
    ),
    context: (
      <>
        <circle cx="11" cy="11" r="6" {...common} />
        <path d="m16 16 4 4M8 11h6M11 8v6" {...common} />
      </>
    ),
    market: (
      <>
        <path
          d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z"
          {...common}
        />
        <circle cx="12" cy="10" r="2" {...common} />
      </>
    ),
    bolt: (
      <>
        <path d="M13 2 5 13h6l-1 9 9-12h-6V2Z" {...common} />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || paths.flow}
    </svg>
  );
}

function PrimaryButton({ href, children, dark = false }) {
  return (
    <a
      className={dark ? "btn primary dark-primary" : "btn primary"}
      href={href}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SecondaryButton({ href, children, onDark = false }) {
  return (
    <a
      className={onDark ? "btn secondary on-dark" : "btn secondary"}
      href={href}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function TextLink({ href, children, onDark = false }) {
  return (
    <a className={onDark ? "text-link on-dark" : "text-link"} href={href}>
      <span>{children}</span>
      <ArrowIcon size={16} />
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow dark" : "eyebrow"}>{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
  className = "",
}) {
  return (
    <div
      className={`heading-group ${align} ${dark ? "inverse" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

const HeroVisual = () => {
  const stages = ["DETECT", "REUSE", "ROUTE", "TRANSLATE", "VALIDATE"];
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="Illustration of changing source content moving through a continuous translation workflow into multilingual delivery"
    >
      <div className="hero-side source-side">
        <div className="visual-label">CHANGING CONTENT</div>
        <div className="source-stack">
          <div className="source-item">
            <Icon name="cms" size={18} />
            <span>CMS update</span>
            <span className="pulse-dot" />
          </div>
          <div className="source-item">
            <Icon name="cart" size={18} />
            <span>Product record</span>
            <span className="pulse-dot" />
          </div>
          <div className="source-item">
            <Icon name="code" size={18} />
            <span>Software string</span>
            <span className="pulse-dot" />
          </div>
          <div className="source-item">
            <Icon name="book" size={18} />
            <span>Knowledge article</span>
            <span className="pulse-dot" />
          </div>
        </div>
      </div>
      <div className="hero-core">
        <div className="core-top">
          <span className="core-mark">
            <Icon name="spark" size={20} />
          </span>
          <span>STEPES CONTINUOUS TRANSLATION</span>
        </div>
        <div className="stage-list">
          {stages.map((stage, i) => (
            <div className="stage-row" key={stage}>
              <span className="stage-dot">{i + 1}</span>
              <span>{stage}</span>
              <span className="stage-line" />
            </div>
          ))}
        </div>
        <div className="core-paths">
          <span>AI-FIRST</span>
          <span>AI + HUMAN</span>
          <span>EXPERT REVIEW</span>
        </div>
      </div>
      <div className="hero-side target-side">
        <div className="visual-label">GLOBAL DELIVERY</div>
        <div className="language-grid">
          {[
            ["DE", "Aktuell"],
            ["FR", "À jour"],
            ["JA", "更新済み"],
            ["ES", "Actualizado"],
          ].map(([code, label]) => (
            <div className="language-item" key={code}>
              <span className="lang-code">{code}</span>
              <span>{label}</span>
              <CheckIcon size={16} />
            </div>
          ))}
        </div>
        <div className="sync-note">
          <span className="sync-dot" /> Synchronized with source
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  [
    "What is continuous translation?",
    "Continuous translation is an ongoing approach to multilingual content in which new and changed source content can move through translation, review, quality validation, and delivery as part of a repeatable workflow. Instead of collecting every update into a separate translation project, organizations can connect translation more directly to the lifecycle of websites, software, product information, knowledge bases, customer support, marketing content, documentation, and other frequently changing information.",
  ],
  [
    "What is continuous localization?",
    "Continuous localization integrates translation and localization into an ongoing content or product-development process rather than treating localization as a separate final stage. The term is especially common in software development, where localization can operate alongside agile and CI/CD workflows so new and changed product content moves toward multilingual release as part of regular development cycles.",
  ],
  [
    "Are continuous translation and continuous localization the same?",
    "The terms overlap significantly. Continuous translation focuses on keeping translatable content moving through an ongoing multilingual workflow. Continuous localization often describes a broader process that may also include technical integration, locale adaptation, contextual review, testing, and release coordination. Stepes uses continuous translation more broadly across software and other frequently changing enterprise content.",
  ],
  [
    "How is continuous translation different from traditional translation?",
    "Traditional translation is commonly organized around discrete projects: content is collected, submitted, translated, reviewed, delivered, and then the process begins again for the next update. Continuous translation is designed around recurring change. New or modified content can be detected, existing translations can be reused, workflow rules can select the appropriate translation and review process, and completed content can return to the business through a repeatable delivery path.",
  ],
  [
    "Does continuous translation require CI/CD?",
    "No. CI/CD is an important continuous-localization use case for software companies, but continuous translation can support any content environment with frequent updates, including websites and CMS content, product catalogs, ecommerce platforms, knowledge bases, help centers, technical documentation, customer-support content, training systems, and structured enterprise data.",
  ],
  [
    "What is agile localization?",
    "Agile localization aligns translation and localization with iterative development or content-production cycles. Instead of waiting until a product or content release is complete, localization happens throughout the process in smaller increments. Continuous localization builds on this principle by using repeatable integrations and workflows to keep frequent updates moving across languages with less manual intervention.",
  ],
  [
    "How does AI support continuous translation?",
    "AI can support multiple stages of the continuous translation lifecycle. Depending on the workflow, AI can help analyze content and context, apply approved terminology, generate translations, evaluate linguistic output, identify potential quality issues, assist professional linguists, and support intelligent workflow routing. The appropriate use of AI depends on the content’s purpose, audience, business impact, language, quality requirements, and risk.",
  ],
  [
    "Does continuous translation mean translations are automatically published?",
    "No. Continuous refers to the way localization responds to recurring content changes. It does not require every translation to bypass human review or approval. A workflow can include professional linguistic review, subject-matter validation, in-country feedback, localization testing, legal or regulatory review, and authorized stakeholder approval before content is released.",
  ],
  [
    "Can continuous translation include professional human translators?",
    "Yes. Professional linguists remain important for content requiring linguistic judgment, subject-matter expertise, cultural understanding, brand sensitivity, creative adaptation, or higher levels of assurance. Continuous workflows can use professional translators throughout the process or selectively apply human expertise where it creates the most value.",
  ],
  [
    "How does Translation Memory support continuous localization?",
    "Translation Memory stores previously translated source content together with approved translations. When identical or similar content appears in future updates, the workflow can identify those matches and reuse them when appropriate. This is especially valuable for frequent releases containing a mix of unchanged, repeated, modified, and completely new content.",
  ],
  [
    "How does terminology management improve continuous translation?",
    "Terminology management establishes approved translations and usage guidance for product names, technical terminology, brand language, regulated expressions, and other important terms. Applying that terminology throughout recurring translation workflows improves consistency and reduces downstream corrections across translators, reviewers, and AI systems.",
  ],
  [
    "What types of content are best suited to continuous translation?",
    "Continuous translation is particularly valuable for frequently updated websites, CMS content, software interfaces, SaaS products, mobile applications, product information, ecommerce catalogs, knowledge bases, help centers, customer support, AI-generated or AI-assisted content, technical documentation, marketing content, training content, and release documentation.",
  ],
  [
    "Can Stepes connect continuous translation to our CMS, repository, or enterprise system?",
    "Stepes supports API-powered and automated translation workflows for organizations that need to connect localization with content, product, development, and enterprise systems. The appropriate integration model depends on your systems, content architecture, publishing process, security requirements, and localization workflow.",
  ],
  [
    "How do you maintain translation quality when content changes frequently?",
    "Quality begins with matching the workflow to the content. Stepes can combine Translation Memory, terminology, AI-powered translation, automated quality checks, professional linguistic review, subject-matter expertise, contextual validation, testing, and stakeholder approvals according to each content stream’s requirements.",
  ],
  [
    "Can different content types use different continuous translation workflows?",
    "Yes. A mature continuous localization program should not assume every content type requires the same process. Routine knowledge content, product data, customer-facing marketing, technical documentation, legal content, and regulated information may each require different combinations of AI translation, professional translation, review, quality assurance, and approval.",
  ],
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-panel">
      {faqItems.map(([question, answer], index) => {
        const open = openIndex === index;
        return (
          <div className="faq-item" key={question}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={open}
              aria-controls={`continuous-faq-answer-${index}`}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{question}</span>
              <ChevronIcon open={open} />
            </button>
            <div
              id={`continuous-faq-answer-${index}`}
              className={open ? "faq-answer open" : "faq-answer"}
              aria-hidden={!open}
            >
              <div>
                <p>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ContinuousTranslationWireframe() {
  console.log(typeof HeroVisual); // 应该输出 "function"
  const intelligence = [
    [
      "Understand",
      "Interpret content type, context, audience, purpose, language requirements, and business importance before deciding how content should move.",
      "context",
    ],
    [
      "Reuse",
      "Search approved Translation Memory, terminology, style guidance, reference content, and existing multilingual assets before creating new language.",
      "memory",
    ],
    [
      "Route",
      "Direct content into the appropriate workflow based on audience, market, risk, timing, terminology, and review expectations.",
      "flow",
    ],
    [
      "Translate",
      "Apply the right production approach—from AI translation to AI-assisted professional review, expert human translation, or specialized workflows.",
      "globe",
    ],
    [
      "Evaluate",
      "Use automated quality controls and AI-assisted evaluation to surface terminology, consistency, completeness, formatting, and confidence issues.",
      "review",
    ],
    [
      "Escalate",
      "Move uncertain, sensitive, complex, high-value, or high-risk content to qualified linguists, specialists, or authorized stakeholders.",
      "shield",
    ],
  ];

  const governance = [
    [
      "AI-First",
      "For repetitive, high-volume, time-sensitive, or lower-risk content where rapid multilingual availability is the primary objective.",
      "AI translation · TM · terminology · automated QA",
    ],
    [
      "AI + Professional Review",
      "For customer-facing, product, support, marketing, and operational content that benefits from AI speed together with professional linguistic validation.",
      "AI translation · linguist review · QA",
    ],
    [
      "Professional Translation",
      "For nuanced, specialized, technical, creative, or brand-sensitive content where experienced human translators provide linguistic judgment.",
      "Professional linguists · terminology · review",
    ],
    [
      "High-Assurance Review",
      "For legal, regulated, safety-critical, medical, financial, compliance-sensitive, or other high-impact content requiring additional validation or approval.",
      "Expert review · approvals · documented controls",
    ],
  ];

  const ecosystems = [
    ["CMS", "Web content", "cms"],
    ["PIM", "Product data", "cart"],
    ["Repositories", "Software resources", "code"],
    ["Help Centers", "Support knowledge", "book"],
    ["DAM & Content", "Digital assets", "layers"],
    ["LMS", "Training", "document"],
    ["Support", "Customer content", "message"],
    ["Enterprise Apps", "Business systems", "flow"],
  ];

  const useCases = [
    [
      "Websites & CMS Content",
      "Corporate websites, landing pages, product pages, resource centers, metadata, forms, and regional experiences constantly evolve. Continuous website translation helps new and revised content move through translation, review, publishing, and multilingual SEO workflows.",
      "cms",
      LINKS.website,
      "Website Translation",
    ],
    [
      "Software & Applications",
      "UI strings, navigation, dialogs, notifications, onboarding flows, feature descriptions, release notes, and help content change with every release. Continuous software localization brings translation closer to product development.",
      "code",
      LINKS.software,
      "Software Localization",
    ],
    [
      "Ecommerce & Product Content",
      "New SKUs appear, specifications change, promotions launch, and product descriptions evolve. Continuous translation helps global commerce teams localize the changing product information customers need to discover and purchase products.",
      "cart",
      LINKS.ecommerce,
      "Ecommerce Translation",
    ],
    [
      "Knowledge & Customer Support",
      "Knowledge bases, help centers, FAQs, troubleshooting content, chatbot knowledge, ticket macros, and customer communications continuously respond to new products, issues, questions, and policies.",
      "book",
      LINKS.support,
      "Multilingual Customer Support",
    ],
    [
      "Marketing Content",
      "Landing pages, email programs, product launches, campaign variations, social content, digital promotions, and regional updates can all create ongoing localization demand while brand voice and market quality still matter.",
      "message",
      LINKS.marketing,
      "Marketing Translation",
    ],
    [
      "Technical & Product Documentation",
      "Specifications, manuals, operating procedures, instructions, release information, safety content, and technical knowledge require multilingual updates throughout the product lifecycle.",
      "document",
      LINKS.technical,
      "Technical Translation",
    ],
  ];

  const languageAssets = [
    [
      "Translation Memory",
      "Approved source and target content can be identified and reused in future work, reducing repetitive translation while supporting consistency across releases.",
      "memory",
    ],
    [
      "Terminology",
      "Validated product names, technical terms, brand language, regulated expressions, and market conventions stay available across recurring workflows.",
      "term",
    ],
    [
      "Style & Language Guidance",
      "Voice, tone, writing conventions, audience expectations, and project instructions guide recurring decisions beyond individual words and phrases.",
      "document",
    ],
    [
      "Reviewer Feedback",
      "Approved corrections can inform future cycles instead of disappearing inside one completed project.",
      "review",
    ],
    [
      "Context",
      "Product, interface, page, document, and audience context helps AI systems and professional linguists make better decisions about meaning and usage.",
      "context",
    ],
    [
      "Market Preferences",
      "Language-specific decisions and regional guidance can remain available for the teams and workflows that need them.",
      "market",
    ],
  ];

  const process = [
    [
      "Connect",
      "Connect content sources and delivery workflows through APIs, established integrations, files, or other appropriate content-transfer methods.",
    ],
    [
      "Detect",
      "Identify content that is new or changed and determine what requires multilingual processing.",
    ],
    [
      "Reuse",
      "Apply approved Translation Memory, terminology, style guidance, and existing multilingual knowledge before translating new content.",
    ],
    [
      "Route & Translate",
      "Select the appropriate path according to content type, audience, language, business impact, turnaround, and quality requirements.",
    ],
    [
      "Validate",
      "Apply automated QA, AI-assisted quality evaluation, professional review, in-context validation, testing, or stakeholder approval as required.",
    ],
    [
      "Release",
      "Return approved multilingual content to the appropriate destination or downstream workflow, ready for the next source change.",
    ],
  ];

  const benefits = [
    [
      "Faster Global Releases",
      "Reduce the delay between source updates and multilingual availability by moving translation closer to content creation, development, and publishing.",
    ],
    [
      "Less Manual Coordination",
      "Automate repetitive intake, routing, status updates, content transfer, review notifications, and delivery steps where appropriate.",
    ],
    [
      "Lower Repetitive Translation Effort",
      "Focus production and review on new and changed content while maximizing approved Translation Memory and terminology assets.",
    ],
    [
      "Better Content Parity",
      "Keep multilingual experiences more closely synchronized with authoritative source information as products and digital experiences evolve.",
    ],
    [
      "More Consistent Global Language",
      "Apply shared language assets across recurring updates to reduce unnecessary variation in product, technical, brand, and customer-facing terminology.",
    ],
    [
      "Human Expertise Where It Matters",
      "Focus qualified linguists, reviewers, and subject-matter experts on content requiring judgment, nuance, technical knowledge, cultural adaptation, or added assurance.",
    ],
  ];

  const related = [
    [
      "Translation API",
      "Connect business systems to programmatic translation, project status, asynchronous processing, multilingual delivery, and event-driven workflows.",
      LINKS.api,
    ],
    [
      "Workflow Automation",
      "Automate how content moves through intake, routing, language-asset reuse, translation, review, approvals, delivery, and reporting.",
      LINKS.workflow,
    ],
    [
      "AI Translation",
      "Scale multilingual content with AI-powered translation supported by terminology, Translation Memory, context, and appropriate quality controls.",
      LINKS.ai,
    ],
    [
      "Translation Memory",
      "Turn previous translations into reusable enterprise language assets that support consistency, speed, and efficient incremental localization.",
      LINKS.tm,
    ],
    [
      "Terminology Management",
      "Apply approved product, technical, brand, and market terminology across AI systems, translators, reviewers, and recurring workflows.",
      LINKS.terminology,
    ],
    [
      "Global Content Operations",
      "Coordinate multilingual intake, routing, language assets, professional resources, governance, reporting, and enterprise workflows across teams and markets.",
      LINKS.globalOps,
    ],
  ];

  return (
    <main className="stepes-page">
      <style>{`
        :root{color-scheme:light;}
        *{box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{margin:0;}
        .stepes-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:${COLORS.ink};background:${COLORS.white};font-size:16px;line-height:1.65;overflow-x:clip;}
        .stepes-page a{color:inherit;text-decoration:none;}
        .stepes-page svg{flex-shrink:0;}
        .hero-side,.hero-core,.editorial-split>*,.delta-grid>*,.intelligence-wrap>*,.sync-layout>*,.ci-layout>*,.asset-layout>*,.governance-row>*,.usecase-row>*,.process-row>*{min-width:0;}
        .btn span,.text-link span,.source-item span,.language-item span,.governance-controls,.ci-detail span,.usecase-row p,.process-row p{overflow-wrap:anywhere;}
        .shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px;}
        .section{padding:96px 0;position:relative;}
        .section.dense{padding:80px 0;}
        .soft-section{background:${COLORS.soft};}
        .blush-section{background:${COLORS.blush};}
        .dark-section{background:${COLORS.dark};color:${COLORS.white};}
        .eyebrow{font-size:11px;line-height:1.25;letter-spacing:.14em;text-transform:uppercase;font-weight:600;color:${COLORS.magenta};margin:0 0 16px;}
        .eyebrow.dark{color:${COLORS.darkEyebrow};}
        h1,h2,h3{font-weight:600;letter-spacing:-.028em;margin:0;color:${COLORS.ink};}
        h1{font-size:48px;line-height:1.04;max-width:920px;margin-inline:auto;}
        h2{font-size:36px;line-height:1.12;}
        h3{font-size:24px;line-height:1.2;}
        p{margin:0;color:${COLORS.body};font-size:16px;}
        .inverse h2,.inverse h3,.dark-section h2,.dark-section h3{color:${COLORS.white};}
        .inverse p,.dark-section p{color:#C9CBD1;}
        .heading-group{margin-bottom:48px;}
        .heading-group.center{text-align:center;max-width:860px;margin-left:auto;margin-right:auto;}
        .heading-group.left{text-align:left;max-width:790px;}
        .heading-group .section-intro{font-size:18px;line-height:1.62;max-width:820px;margin-top:18px;}
        .heading-group.center .section-intro{margin-left:auto;margin-right:auto;}
        .hero{padding:106px 0 82px;background:linear-gradient(180deg,#fff 0%,#fff 70%,#faf7f9 100%);}
        .hero-copy{text-align:center;max-width:980px;margin:0 auto;}
        .hero .lead{font-size:19px;line-height:1.68;max-width:800px;margin:24px auto 0;color:${COLORS.body};}
        .hero-actions{display:flex;gap:12px;justify-content:center;margin-top:30px;flex-wrap:wrap;}
        .btn{min-height:48px;padding:12px 21px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:600;font-size:16px;line-height:1.2;transition:transform .18s ease,background .18s ease,border-color .18s ease,box-shadow .18s ease;}
        .btn:hover{transform:translateY(-1px);}
        .btn:focus-visible,.text-link:focus-visible,.faq-question:focus-visible{outline:3px solid rgba(193,29,99,.22);outline-offset:3px;}
        .btn.primary,.btn.primary:visited,.btn.primary:hover,.btn.primary:active,.btn.primary:focus,.btn.primary:focus-visible{background:${COLORS.magenta};color:#fff!important;border:1px solid ${COLORS.magenta};box-shadow:0 8px 22px rgba(193,29,99,.16);}
        .btn.primary *{color:#fff!important;stroke:#fff!important;}
        .btn.primary:hover{background:${COLORS.magentaDark};border-color:${COLORS.magentaDark};}
        .btn.secondary{background:#fff;color:${COLORS.ink};border:1px solid #D7D9DE;}
        .btn.secondary:hover{border-color:#B7BAC1;background:#FAFAFB;}
        .btn.secondary.on-dark{background:transparent;color:#fff;border-color:#4D4F57;}
        .btn.secondary.on-dark:hover{border-color:#858892;background:#202126;}
        .text-link{display:inline-flex;align-items:center;gap:7px;color:${COLORS.magenta}!important;font-weight:600;font-size:16px;margin-top:18px;min-height:44px;}
        .text-link:hover span{text-decoration:underline;text-underline-offset:4px;}
        .text-link svg{transition:transform .18s ease;}
        .text-link:hover svg{transform:translateX(3px);}
        .text-link.on-dark{color:${COLORS.darkEyebrow}!important;}
        .proof-bar{margin-top:44px;border-top:1px solid ${COLORS.border};border-bottom:1px solid ${COLORS.border};display:grid;grid-template-columns:repeat(4,1fr);}
        .proof-item{padding:20px 24px;text-align:left;position:relative;}
        .proof-item:not(:last-child):after{content:"";position:absolute;right:0;top:18px;bottom:18px;width:1px;background:${COLORS.border};}
        .proof-item strong{display:block;font-size:17px;font-weight:600;line-height:1.3;margin-bottom:4px;}
        .proof-item span{font-size:16px;color:${COLORS.muted};line-height:1.45;}
        .hero-visual{margin-top:52px;border:1px solid #E3DFE2;border-radius:30px;padding:26px;background:#fff;box-shadow:0 24px 65px rgba(37,29,34,.08);display:grid;grid-template-columns:.9fr 1.2fr .9fr;gap:18px;align-items:stretch;position:relative;}
        .hero-visual:before,.hero-visual:after{content:"";position:absolute;top:50%;width:20px;height:2px;background:#C7C9CF;z-index:2;}
        .hero-visual:before{left:30.5%;}.hero-visual:after{right:30.5%;}
        .hero-side,.hero-core{border-radius:22px;min-height:332px;padding:22px;}
        .hero-side{background:#F8F8F9;border:1px solid #EBEBED;}
        .visual-label{font-size:14px;font-weight:600;letter-spacing:.11em;color:${COLORS.muted};margin-bottom:18px;}
        .source-stack{display:flex;flex-direction:column;gap:10px;}
        .source-item{display:grid;grid-template-columns:22px 1fr 8px;align-items:center;gap:10px;background:#fff;border:1px solid ${COLORS.border};border-radius:13px;padding:13px;font-size:16px;font-weight:600;}
        .source-item svg{color:#60646F;}
        .pulse-dot{width:7px;height:7px;border-radius:50%;background:${COLORS.magenta};box-shadow:0 0 0 4px rgba(193,29,99,.09);}
        .hero-core{background:${COLORS.dark};color:#fff;}
        .core-top{display:flex;align-items:center;gap:10px;font-size:14px;letter-spacing:.09em;font-weight:600;color:#E3E4E8;padding-bottom:16px;border-bottom:1px solid #33353B;}
        .core-mark{width:34px;height:34px;border-radius:10px;background:#2A2026;color:${COLORS.darkEyebrow};display:grid;place-items:center;}
        .stage-list{padding:17px 0;}
        .stage-row{display:grid;grid-template-columns:30px auto 1fr;align-items:center;gap:9px;min-height:40px;font-size:16px;font-weight:600;letter-spacing:.045em;color:#F0F1F3;}
        .stage-dot{width:26px;height:26px;border:1px solid #555760;border-radius:50%;display:grid;place-items:center;color:${COLORS.darkEyebrow};font-size:14px;}
        .stage-line{height:1px;background:#35373D;margin-left:4px;}
        .core-paths{display:flex;gap:8px;flex-wrap:wrap;padding-top:12px;border-top:1px solid #33353B;}
        .core-paths span{font-size:14px;letter-spacing:.06em;border:1px solid #4A4C53;border-radius:999px;padding:7px 9px;color:#C8CAD0;}
        .language-grid{display:flex;flex-direction:column;gap:10px;}
        .language-item{display:grid;grid-template-columns:34px 1fr 18px;align-items:center;gap:9px;background:#fff;border:1px solid ${COLORS.border};border-radius:13px;padding:12px;font-size:14px;color:#555A64;}
        .language-item svg{color:#68707C;}
        .lang-code{font-weight:600;color:${COLORS.ink};}
        .sync-note{margin-top:15px;font-size:14px;color:#626771;display:flex;align-items:center;gap:8px;}
        .sync-dot{width:8px;height:8px;border-radius:50%;background:#7F8793;}
        .editorial-split{display:grid;grid-template-columns:.82fr 1.18fr;gap:88px;align-items:start;}
        .editorial-split .sticky-heading{position:sticky;top:30px;}
        .body-large{font-size:18px;line-height:1.68;color:${COLORS.body};}
        .body-copy p+p{margin-top:20px;}
        .body-copy .emphasis{font-size:20px;line-height:1.5;font-weight:600;color:${COLORS.ink};margin-top:28px;padding-left:18px;border-left:3px solid ${COLORS.magenta};}
        .content-stream{margin-top:34px;border-top:1px solid ${COLORS.border};}
        .stream-row{display:grid;grid-template-columns:38px 1fr;gap:14px;padding:17px 0;border-bottom:1px solid ${COLORS.border};align-items:start;}
        .stream-icon{width:34px;height:34px;border-radius:10px;background:${COLORS.blush};color:${COLORS.magenta};display:grid;place-items:center;}
        .stream-row strong{font-size:16px;font-weight:600;display:block;margin-bottom:3px;}
        .stream-row span{font-size:16px;color:${COLORS.body};}
        .comparison{display:grid;grid-template-columns:1fr 56px 1fr;gap:0;align-items:stretch;}
        .comparison-panel{border:1px solid ${COLORS.border};border-radius:28px;padding:34px;background:#fff;}
        .comparison-panel.continuous{background:#FEFAFC;border-color:#E9CCD8;}
        .comparison-panel .panel-label{font-size:14px;letter-spacing:.11em;font-weight:600;color:${COLORS.muted};margin-bottom:15px;}
        .comparison-panel.continuous .panel-label{color:${COLORS.magenta};}
        .comparison-panel h3{margin-bottom:20px;}
        .flow-line{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:26px;}
        .flow-line span{font-size:16px;font-weight:600;border:1px solid ${COLORS.border};border-radius:999px;padding:7px 10px;background:#fff;}
        .flow-arrow{font-size:15px;color:#9CA0A8;}
        .comparison-points{display:grid;gap:0;border-top:1px solid ${COLORS.border};}
        .comparison-point{padding:14px 0;border-bottom:1px solid ${COLORS.border};display:grid;grid-template-columns:18px 1fr;gap:10px;color:${COLORS.body};font-size:16px;}
        .comparison-point svg{margin-top:3px;color:#7A7F88;}
        .comparison-point.pain svg{color:#92969F;}
        .comparison-panel.continuous .comparison-point svg{color:${COLORS.magenta};}
        .comparison-center{display:grid;place-items:center;}
        .comparison-center span{width:36px;height:36px;border:1px solid ${COLORS.border};border-radius:50%;background:#fff;display:grid;place-items:center;color:#777C85;}
        .big-callout{margin:52px auto 0;max-width:920px;text-align:center;font-size:28px;line-height:1.35;font-weight:600;letter-spacing:-.02em;color:${COLORS.ink};}
        .delta-grid{display:grid;grid-template-columns:1fr 1fr;gap:68px;align-items:center;}
        .delta-copy .heading-group{margin-bottom:28px;}
        .delta-points{border-top:1px solid ${COLORS.border};margin-top:28px;}
        .delta-point{padding:16px 0;border-bottom:1px solid ${COLORS.border};display:grid;grid-template-columns:170px 1fr;gap:24px;}
        .delta-point strong{font-size:16px;font-weight:600;}
        .delta-point span{font-size:16px;color:${COLORS.body};}
        .delta-visual{border:1px solid ${COLORS.border};border-radius:28px;background:#fff;padding:26px;box-shadow:0 20px 48px rgba(25,25,30,.06);}
        .doc-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:16px;border-bottom:1px solid ${COLORS.border};}
        .doc-title{display:flex;align-items:center;gap:10px;font-weight:600;font-size:16px;}
        .doc-version{font-size:14px;color:${COLORS.muted};}
        .doc-lines{padding:18px 0;display:grid;gap:11px;}
        .doc-line{height:14px;border-radius:4px;background:#E8E9EC;position:relative;overflow:hidden;}
        .doc-line.w90{width:90%;}.doc-line.w74{width:74%;}.doc-line.w96{width:96%;}.doc-line.w63{width:63%;}.doc-line.w84{width:84%;}.doc-line.w70{width:70%;}
        .doc-line.changed{background:#F8DDE8;border:1px solid #E9B7CC;height:32px;display:flex;align-items:center;padding:0 10px;font-size:14px;font-weight:600;color:#7A1542;}
        .delta-output{display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center;background:#F8F8F9;border-radius:16px;padding:16px;margin-top:6px;}
        .delta-output strong{display:block;font-size:16px;}.delta-output span{font-size:16px;color:${COLORS.muted};}
        .delta-badge{border-radius:999px;padding:7px 10px;background:#fff;border:1px solid ${COLORS.border};font-size:14px;font-weight:600;color:${COLORS.magenta};}
        .intelligence-wrap{display:grid;grid-template-columns:.76fr 1.24fr;gap:72px;align-items:start;}
        .intelligence-wrap .heading-group{position:sticky;top:30px;margin-bottom:0;}
        .intelligence-list{border-top:1px solid #34363C;}
        .intelligence-row{display:grid;grid-template-columns:48px 150px 1fr;gap:22px;padding:24px 0;border-bottom:1px solid #34363C;align-items:start;}
        .intelligence-icon{width:42px;height:42px;border-radius:12px;background:#252128;color:${COLORS.darkEyebrow};display:grid;place-items:center;}
        .intelligence-row h3{font-size:19px;line-height:1.35;padding-top:7px;}
        .intelligence-row p{font-size:16px;line-height:1.62;padding-top:5px;}
        .dark-note{margin-top:30px;padding:20px 22px;border-left:3px solid ${COLORS.darkEyebrow};background:#1C1D22;border-radius:0 16px 16px 0;color:#E7E8EA;font-size:17px;line-height:1.55;}
        .governance-panel{border:1px solid ${COLORS.border};border-radius:30px;overflow:hidden;background:#fff;}
        .governance-head{display:grid;grid-template-columns:190px 1fr 250px;background:#F8F8F9;border-bottom:1px solid ${COLORS.border};padding:13px 24px;font-size:14px;font-weight:600;letter-spacing:.09em;color:${COLORS.muted};}
        .governance-row{display:grid;grid-template-columns:190px 1fr 250px;gap:0;padding:0 24px;}
        .governance-row>div{padding:22px 0;border-bottom:1px solid ${COLORS.border};}
        .governance-row:last-child>div{border-bottom:0;}
        .governance-title{font-size:17px;font-weight:600;padding-right:24px!important;}
        .governance-description{font-size:16px;color:${COLORS.body};padding-right:28px!important;}
        .governance-controls{font-size:16px;color:${COLORS.muted};font-weight:600;display:flex;align-items:center;}
        .governance-note{margin-top:32px;display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:start;}
        .governance-note p{font-size:17px;}
        .governance-factors{display:flex;flex-wrap:wrap;gap:8px;}
        .governance-factors span{font-size:16px;color:#555A64;border:1px solid ${COLORS.border};border-radius:999px;padding:7px 10px;background:#fff;}
        .sync-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:72px;align-items:center;}
        .sync-copy .heading-group{margin-bottom:28px;}
        .sync-benefits{border-top:1px solid ${COLORS.border};}
        .sync-benefit{padding:15px 0;border-bottom:1px solid ${COLORS.border};}
        .sync-benefit strong{display:block;font-size:16px;margin-bottom:3px;}.sync-benefit span{font-size:16px;color:${COLORS.body};}
        .sync-visual{border-radius:28px;background:#fff;border:1px solid ${COLORS.border};padding:28px;box-shadow:0 20px 48px rgba(25,25,30,.05);}
        .sync-source{display:flex;justify-content:space-between;align-items:center;padding-bottom:17px;border-bottom:1px solid ${COLORS.border};}
        .sync-source strong{font-size:16px;}.sync-source span{font-size:14px;color:${COLORS.muted};}
        .version-rows{padding-top:15px;display:grid;gap:10px;}
        .version-row{display:grid;grid-template-columns:48px 1fr auto;gap:12px;align-items:center;padding:12px 14px;border-radius:12px;background:#F8F8F9;font-size:14px;}
        .version-row strong{font-size:14px;}.version-bar{height:7px;background:#E2E3E6;border-radius:99px;position:relative;overflow:hidden;}.version-bar:after{content:"";position:absolute;left:0;top:0;bottom:0;width:100%;background:#A9ADB5;border-radius:99px;}.version-state{font-size:14px;color:#60656E;display:flex;align-items:center;gap:6px;}.version-state .mini-dot{width:7px;height:7px;background:#7C838D;border-radius:50%;}
        .sync-message{text-align:center;font-size:16px;color:${COLORS.magenta};font-weight:600;margin-top:17px;padding-top:16px;border-top:1px solid ${COLORS.border};}
        .ecosystem{position:relative;display:grid;grid-template-columns:1fr 240px 1fr;gap:28px;align-items:center;min-height:520px;}
        .ecosystem-side{display:grid;gap:14px;}
        .ecosystem-node{border:1px solid ${COLORS.border};background:#fff;border-radius:18px;padding:15px 16px;display:grid;grid-template-columns:40px 1fr;gap:12px;align-items:center;position:relative;}
        .ecosystem-side.left .ecosystem-node:after,.ecosystem-side.right .ecosystem-node:before{content:"";position:absolute;top:50%;width:29px;height:1px;background:#C9CBD0;}
        .ecosystem-side.left .ecosystem-node:after{right:-29px;}.ecosystem-side.right .ecosystem-node:before{left:-29px;}
        .node-icon{width:38px;height:38px;border-radius:11px;background:#F7F3F5;color:#6F5A64;display:grid;place-items:center;}
        .ecosystem-node strong{display:block;font-size:16px;line-height:1.25;}.ecosystem-node span{font-size:16px;color:${COLORS.muted};}
        .ecosystem-core{border-radius:28px;background:${COLORS.dark};color:#fff;padding:26px 22px;text-align:center;box-shadow:0 22px 55px rgba(20,20,23,.16);}
        .ecosystem-core .core-icon{width:52px;height:52px;border-radius:16px;background:#2C2228;color:${COLORS.darkEyebrow};display:grid;place-items:center;margin:0 auto 14px;}
        .ecosystem-core strong{display:block;font-size:18px;line-height:1.35;margin-bottom:8px;}.ecosystem-core p{font-size:16px;color:#BFC2C8;}
        .ecosystem-core .micro-flow{border-top:1px solid #36383E;margin-top:18px;padding-top:16px;display:grid;gap:8px;}
        .micro-flow span{font-size:16px;letter-spacing:.07em;color:#D8DADF;}
        .ecosystem-summary{max-width:860px;margin:30px auto 0;text-align:center;font-size:16px;}
        .ecosystem-links{display:flex;justify-content:center;gap:28px;flex-wrap:wrap;margin-top:34px;}
        .usecase-list{border-top:1px solid ${COLORS.border};}
        .usecase-row{display:grid;grid-template-columns:54px 290px 1fr 180px;gap:22px;padding:25px 0;border-bottom:1px solid ${COLORS.border};align-items:start;}
        .usecase-icon{width:46px;height:46px;border-radius:14px;background:${COLORS.blush};color:${COLORS.magenta};display:grid;place-items:center;}
        .usecase-row h3{font-size:20px;line-height:1.35;padding-top:8px;}
        .usecase-row p{font-size:16px;line-height:1.62;padding-top:6px;}
        .usecase-action{display:flex;justify-content:flex-end;align-self:center;}
        .ci-layout{display:grid;grid-template-columns:.83fr 1.17fr;gap:72px;align-items:start;}
        .ci-layout .heading-group{position:sticky;top:30px;margin-bottom:0;}
        .ci-flow{border:1px solid #34363C;border-radius:28px;background:${COLORS.dark2};padding:26px;}
        .ci-flow-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:18px;border-bottom:1px solid #35373D;}
        .ci-flow-head strong{font-size:16px;color:#fff;}.ci-flow-head span{font-size:14px;color:#AEB1B8;}
        .ci-steps{padding-top:18px;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;}
        .ci-step{border:1px solid #3B3D44;border-radius:16px;padding:15px;background:#202126;min-height:112px;}
        .ci-step strong{display:block;font-size:16px;color:#F2F3F5;margin-bottom:7px;}.ci-step span{font-size:16px;color:#B5B8BE;line-height:1.45;}
        .ci-details{margin-top:24px;border-top:1px solid #34363C;}
        .ci-detail{padding:16px 0;border-bottom:1px solid #34363C;display:grid;grid-template-columns:200px 1fr;gap:24px;}
        .ci-detail strong{font-size:16px;color:#F2F3F5;}.ci-detail span{font-size:16px;color:#C5C7CC;}
        .asset-layout{display:grid;grid-template-columns:.78fr 1.22fr;gap:72px;align-items:start;}
        .asset-layout .heading-group{position:sticky;top:30px;margin-bottom:0;}
        .asset-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid ${COLORS.border};border-left:1px solid ${COLORS.border};}
        .asset-item{padding:24px;border-right:1px solid ${COLORS.border};border-bottom:1px solid ${COLORS.border};min-height:190px;}
        .asset-icon{width:40px;height:40px;border-radius:11px;background:${COLORS.blush};color:${COLORS.magenta};display:grid;place-items:center;margin-bottom:16px;}
        .asset-item h3{font-size:18px;margin-bottom:8px;}.asset-item p{font-size:16px;line-height:1.58;}
        .asset-quote{grid-column:1/-1;padding:26px 28px;background:#FAFAFB;border-right:1px solid ${COLORS.border};border-bottom:1px solid ${COLORS.border};font-size:20px;line-height:1.5;font-weight:600;color:${COLORS.ink};}
        .process{border-top:1px solid ${COLORS.border};}
        .process-row{display:grid;grid-template-columns:72px 220px 1fr;gap:28px;padding:24px 0;border-bottom:1px solid ${COLORS.border};align-items:start;}
        .process-number{width:46px;height:46px;border:1px solid #D9DADF;border-radius:50%;display:grid;place-items:center;font-size:14px;font-weight:600;color:${COLORS.magenta};}
        .process-row h3{font-size:20px;line-height:1.35;padding-top:8px;}.process-row p{font-size:16px;padding-top:6px;max-width:760px;}
        .process-summary{margin-top:28px;border-radius:18px;background:${COLORS.blush};padding:18px 22px;text-align:center;font-size:16px;font-weight:600;color:${COLORS.burgundy};letter-spacing:.01em;}
        .benefit-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid ${COLORS.border};border-left:1px solid ${COLORS.border};}
        .benefit-item{padding:26px 28px;border-right:1px solid ${COLORS.border};border-bottom:1px solid ${COLORS.border};min-height:170px;}
        .benefit-item h3{font-size:19px;margin-bottom:9px;}.benefit-item p{font-size:16px;line-height:1.6;}
        .dual-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid ${COLORS.border};border-radius:30px;overflow:hidden;background:#fff;}
        .dual-side{padding:42px;}
        .dual-side+ .dual-side{border-left:1px solid ${COLORS.border};background:#FAFAFB;}
        .dual-icon{width:48px;height:48px;border-radius:14px;background:${COLORS.blush};color:${COLORS.magenta};display:grid;place-items:center;margin-bottom:20px;}
        .dual-side h3{margin-bottom:14px;}.dual-side p{font-size:17px;line-height:1.65;}
        .dual-list{margin-top:22px;border-top:1px solid ${COLORS.border};}
        .dual-list div{padding:12px 0;border-bottom:1px solid ${COLORS.border};font-size:16px;display:flex;gap:9px;align-items:flex-start;color:${COLORS.body};}
        .dual-list svg{margin-top:4px;color:${COLORS.magenta};flex:0 0 auto;}
        .dual-statement{margin-top:34px;text-align:center;font-size:23px;line-height:1.45;font-weight:600;color:${COLORS.ink};}
        .dual-action{display:flex;justify-content:center;margin-top:8px;}
        .related-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid ${COLORS.border};border-left:1px solid ${COLORS.border};}
        .related-item{padding:26px;border-right:1px solid ${COLORS.border};border-bottom:1px solid ${COLORS.border};min-height:220px;display:flex;flex-direction:column;align-items:flex-start;}
        .related-item h3{font-size:19px;margin-bottom:10px;}.related-item p{font-size:16px;line-height:1.58;flex:1;}
        .faq-panel{border:1px solid ${COLORS.border};border-radius:28px;overflow:hidden;background:#fff;max-width:1000px;margin:0 auto;}
        .faq-item+.faq-item{border-top:1px solid ${COLORS.border};}
        .faq-question{width:100%;appearance:none;border:0;background:#fff;color:${COLORS.ink};text-align:left;padding:22px 24px;display:flex;justify-content:space-between;align-items:center;gap:24px;font-family:inherit;font-size:17px;line-height:1.4;font-weight:600;cursor:pointer;}
        .faq-question:hover{background:#FBFBFC;}
        .chevron{flex:0 0 auto;transition:transform .2s ease;color:#676B75;}.chevron.open{transform:rotate(180deg);}
        .faq-answer{display:grid;grid-template-rows:0fr;transition:grid-template-rows .24s ease;}.faq-answer.open{grid-template-rows:1fr;}.faq-answer>div{overflow:hidden;}.faq-answer p{padding:0 24px 23px;max-width:840px;font-size:16px;line-height:1.68;}
        .final-cta{padding:84px 0;background:${COLORS.burgundy};color:#fff;}
        .final-cta-inner{max-width:920px;margin:0 auto;text-align:center;}
        .final-cta h2{color:#fff;font-size:36px;margin-top:0;}
        .final-cta p{color:#F5DDE7;font-size:18px;line-height:1.65;max-width:760px;margin:20px auto 0;}
        .final-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:28px;}
        .final-cta .btn.primary,.final-cta .btn.primary:visited,.final-cta .btn.primary:hover,.final-cta .btn.primary:active,.final-cta .btn.primary:focus,.final-cta .btn.primary:focus-visible{background:#fff;color:${COLORS.burgundy}!important;border-color:#fff;box-shadow:none;}
        .final-cta .btn.primary *{color:${COLORS.burgundy}!important;stroke:${COLORS.burgundy}!important;}
        .final-cta .btn.primary:hover{background:#F9EEF3;}
        .final-cta .btn.secondary{background:transparent;border-color:#B77A96;color:#fff;}
        .final-cta .btn.secondary:hover{background:rgba(255,255,255,.07);border-color:#E7B8CB;}
        .final-kicker{font-size:20px!important;font-weight:600;color:#fff!important;margin-top:18px!important;}

        .intelligence-row h3,.usecase-row h3,.asset-item h3,.process-row h3,.benefit-item h3,.related-item h3{font-size:24px;}

        @media (max-width: 1100px){
          .shell{padding-left:40px;padding-right:40px;}
          .hero-visual{grid-template-columns:.85fr 1.25fr .85fr;padding:20px;gap:14px;}
          .hero-visual:before{left:29.5%;}.hero-visual:after{right:29.5%;}
          .editorial-split,.intelligence-wrap,.ci-layout,.asset-layout{gap:52px;}
          .ecosystem{grid-template-columns:1fr 210px 1fr;gap:24px;}
          .usecase-row{grid-template-columns:50px 240px 1fr 150px;gap:18px;}
        }

        @media (max-width: 900px){
          .shell{padding-left:24px;padding-right:24px;}
          h1{font-size:42px;}h2{font-size:32px;}h3{font-size:22px;}
          .section{padding:80px 0;}.section.dense{padding:72px 0;}.hero{padding:92px 0 74px;}
          .proof-bar{grid-template-columns:1fr 1fr;}
          .proof-item:nth-child(2):after{display:none;}.proof-item:nth-child(-n+2){border-bottom:1px solid ${COLORS.border};}
          .hero-visual{grid-template-columns:1fr 1.15fr;}
          .hero-visual:before,.hero-visual:after{display:none;}
          .target-side{grid-column:1/-1;min-height:auto;display:grid;grid-template-columns:150px 1fr;gap:16px;align-items:start;}
          .target-side .visual-label{grid-column:1/-1;margin-bottom:0;}.language-grid{display:grid;grid-template-columns:1fr 1fr;}.sync-note{margin-top:0;align-self:center;}
          .editorial-split,.delta-grid,.sync-layout{grid-template-columns:1fr;gap:44px;}
          .editorial-split .sticky-heading,.intelligence-wrap .heading-group,.ci-layout .heading-group,.asset-layout .heading-group{position:static;}
          .editorial-split .heading-group,.delta-copy .heading-group,.sync-copy .heading-group{text-align:center;max-width:760px;margin-left:auto;margin-right:auto;}
          .editorial-split .heading-group .section-intro,.delta-copy .heading-group .section-intro,.sync-copy .heading-group .section-intro{margin-left:auto;margin-right:auto;}
          .comparison{grid-template-columns:1fr;gap:16px;}.comparison-center{height:34px;}.comparison-center span{transform:rotate(90deg);}
          .delta-visual{max-width:660px;margin:0 auto;width:100%;}
          .intelligence-wrap,.ci-layout,.asset-layout{grid-template-columns:1fr;gap:44px;}
          .intelligence-wrap>.heading-group,.ci-layout>.heading-group,.asset-layout>.heading-group{text-align:center;max-width:760px;margin-left:auto;margin-right:auto;}
          .intelligence-wrap>.heading-group .section-intro,.ci-layout>.heading-group .section-intro,.asset-layout>.heading-group .section-intro{margin-left:auto;margin-right:auto;}
          .heading-group.scan-heading,.ci-layout>.heading-group.scan-heading{text-align:left;}
          .heading-group.scan-heading .section-intro,.ci-layout>.heading-group.scan-heading .section-intro{margin-left:0;margin-right:0;}
          .governance-head{display:none;}.governance-row{grid-template-columns:180px 1fr;padding:0 22px;}.governance-controls{grid-column:2;padding-top:0!important;margin-top:-8px;color:${COLORS.magenta};}.governance-row>div{border-bottom:0}.governance-row{border-bottom:1px solid ${COLORS.border};}.governance-row:last-child{border-bottom:0;}
          .governance-note{grid-template-columns:1fr;gap:22px;}
          .ecosystem{grid-template-columns:1fr 1fr;min-height:auto;}.ecosystem-core{grid-column:1/-1;grid-row:1;max-width:360px;margin:0 auto;width:100%;}.ecosystem-side.left{grid-column:1;grid-row:2}.ecosystem-side.right{grid-column:2;grid-row:2}.ecosystem-side .ecosystem-node:before,.ecosystem-side .ecosystem-node:after{display:none;}
          .usecase-row{grid-template-columns:50px 1fr;}.usecase-row h3{padding-top:7px;}.usecase-row p{grid-column:2;}.usecase-action{grid-column:2;justify-content:flex-start;}
          .ci-steps{grid-template-columns:1fr 1fr;}
          .related-grid{grid-template-columns:1fr 1fr;}
          .intelligence-row h3,.usecase-row h3,.asset-item h3,.process-row h3,.benefit-item h3,.related-item h3{font-size:22px;}
        }

        @media (max-width: 640px){
          .shell{padding-left:20px;padding-right:20px;}
          h1{font-size:38px;line-height:1.08;}h2{font-size:30px;}h3{font-size:20px;}
          .section{padding:68px 0;}.section.dense{padding:64px 0;}.hero{padding:76px 0 64px;}
          .hero .lead,.heading-group .section-intro{font-size:18px;}
          .heading-group{margin-bottom:36px;}
          .heading-group.center-mobile,.editorial-split .heading-group,.delta-copy .heading-group,.sync-copy .heading-group,.intelligence-wrap>.heading-group,.ci-layout>.heading-group,.asset-layout>.heading-group{text-align:center;}
          .heading-group.left-mobile,.heading-group.scan-heading,.ci-layout>.heading-group.scan-heading{text-align:left;}
          .heading-group.scan-heading .section-intro,.ci-layout>.heading-group.scan-heading .section-intro{margin-left:0;margin-right:0;}
          .hero-actions,.final-actions{flex-direction:column;align-items:stretch;}
          .hero-actions .btn,.final-actions .btn{width:100%;min-height:50px;}
          .proof-bar{grid-template-columns:1fr;margin-top:36px;}.proof-item{padding:17px 0;text-align:center;border-bottom:1px solid ${COLORS.border}!important;}.proof-item:last-child{border-bottom:0!important;}.proof-item:after{display:none!important;}
          .proof-item span{font-size:16px;}
          .hero-visual{margin-top:38px;grid-template-columns:1fr;padding:14px;border-radius:24px;}.hero-side,.hero-core{min-height:auto;border-radius:18px;padding:18px;}.target-side{grid-column:auto;display:block;}.target-side .visual-label{margin-bottom:18px;}.language-grid{grid-template-columns:1fr 1fr;}.sync-note{margin-top:14px;}
          .editorial-split{gap:30px;}.editorial-split .sticky-heading{position:static;}.body-large{font-size:18px;}
          .body-copy .emphasis{font-size:18px;}
          .stream-row{grid-template-columns:36px 1fr;}
          .comparison-panel{padding:24px;border-radius:22px;}.big-callout{font-size:23px;margin-top:38px;}
          .delta-point{grid-template-columns:1fr;gap:5px;}.delta-visual{padding:18px;border-radius:22px;}.delta-output{grid-template-columns:1fr;}.delta-badge{justify-self:start;}
          .intelligence-row{grid-template-columns:42px 1fr;gap:14px;padding:20px 0;}.intelligence-row h3{padding-top:6px;}.intelligence-row p{grid-column:2;padding-top:0;}.dark-note{font-size:16px;}
          .governance-panel{border-radius:22px;}.governance-row{grid-template-columns:1fr;padding:0 18px;}.governance-row>div{padding:0;}.governance-title{padding:20px 0 8px!important;}.governance-description{padding:0 0 10px!important;}.governance-controls{grid-column:1;padding:0 0 20px!important;margin:0;font-size:16px;}
          .governance-note p{font-size:16px;}.governance-factors span{font-size:16px;}
          .sync-layout{gap:30px;}.sync-visual{padding:20px;border-radius:22px;}
          .ecosystem{grid-template-columns:1fr;gap:16px;}.ecosystem-core,.ecosystem-side.left,.ecosystem-side.right{grid-column:1;grid-row:auto;}.ecosystem-core{order:1}.ecosystem-side.left{order:2}.ecosystem-side.right{order:3}.ecosystem-links{gap:6px;flex-direction:column;align-items:flex-start;margin-top:24px;}.ecosystem-links .text-link{margin-top:2px;}
          .usecase-row{grid-template-columns:46px 1fr;gap:14px;padding:22px 0;}.usecase-icon{width:42px;height:42px;}.usecase-row h3{font-size:19px;padding-top:7px;}.usecase-row p,.usecase-action{grid-column:1/-1;padding-left:60px;}.usecase-action .text-link{margin-top:4px;}
          .ci-flow{padding:18px;border-radius:22px;}.ci-flow-head{display:grid;grid-template-columns:1fr;align-items:start;gap:4px;}.ci-steps{grid-template-columns:1fr;}.ci-step{min-height:auto;}.ci-detail{grid-template-columns:1fr;gap:5px;}.ci-detail span{font-size:16px;}
          .asset-grid{grid-template-columns:1fr;border-left:1px solid ${COLORS.border};}.asset-item{min-height:auto;}.asset-quote{font-size:18px;}
          .process-row{grid-template-columns:50px 1fr;gap:16px;}.process-row h3{padding-top:7px;}.process-row p{grid-column:1/-1;padding-left:66px;padding-top:0;}.process-number{width:42px;height:42px;}
          .process-summary{text-align:left;font-size:16px;}
          .benefit-grid{grid-template-columns:1fr;}.benefit-item{min-height:auto;padding:22px;}
          .dual-panel{grid-template-columns:1fr;border-radius:22px;}.dual-side{padding:26px;}.dual-side+.dual-side{border-left:0;border-top:1px solid ${COLORS.border};}.dual-side p{font-size:16px;}.dual-statement{font-size:20px;text-align:left;}.dual-action{justify-content:flex-start;}
          .related-grid{grid-template-columns:1fr;}.related-item{min-height:auto;}
          .faq-panel{border-radius:20px;}.faq-question{padding:19px 18px;font-size:16px;align-items:flex-start;}.faq-answer p{padding:0 18px 20px;font-size:16px;}
          .ecosystem-summary{text-align:left;}
          .intelligence-row h3,.usecase-row h3,.asset-item h3,.process-row h3,.benefit-item h3,.related-item h3{font-size:20px;}
          .final-cta{padding:68px 0;}.final-cta h2{font-size:30px;}.final-cta p{font-size:18px;}.final-kicker{font-size:18px!important;}
        }

        @media (max-width: 480px){
          .language-grid{grid-template-columns:1fr;}
          .usecase-row p,.usecase-action{padding-left:0;}
          .process-row p{padding-left:0;}
          .sync-source{display:grid;grid-template-columns:1fr;gap:3px;align-items:start;}
          .sync-source span{text-align:left;}
        }

        @media (max-width: 360px){
          .core-paths{display:grid;grid-template-columns:1fr 1fr;}
        }
      `}</style>

      <section className="hero">
        <div className="shell">
          <div className="hero-copy">
            <Eyebrow>CONTINUOUS TRANSLATION & LOCALIZATION</Eyebrow>
            <h1>Continuous Translation for Always-On Global Content</h1>
            <p className="lead">
              Your content never stops changing. Keep multilingual websites,
              software, product information, knowledge content, customer
              support, and other fast-moving digital experiences aligned with
              every source update using AI-powered translation, intelligent
              workflow automation, professional expertise, and connected
              delivery.
            </p>
            <div className="hero-actions">
              <PrimaryButton href={LINKS.contact}>
                Build Your Continuous Translation Workflow
              </PrimaryButton>
              <SecondaryButton href={LINKS.api}>
                Explore Translation API
              </SecondaryButton>
            </div>
          </div>
          <div
            className="proof-bar"
            aria-label="Continuous translation capabilities"
          >
            <div className="proof-item">
              <strong>100+ Languages</strong>
              <span>Professional coverage for global markets.</span>
            </div>
            <div className="proof-item">
              <strong>AI + Human Workflows</strong>
              <span>Match translation and review to each content type.</span>
            </div>
            <div className="proof-item">
              <strong>Continuous Localization</strong>
              <span>
                Keep multilingual content aligned with frequent updates.
              </span>
            </div>
            <div className="proof-item">
              <strong>Enterprise Integration</strong>
              <span>
                Connect content systems through APIs and automated workflows.
              </span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section" id="content-velocity">
        <div className="shell editorial-split">
          <div className="sticky-heading">
            <div className="heading-group left center-mobile">
              <Eyebrow>THE CONTENT VELOCITY CHALLENGE</Eyebrow>
              <h2>
                Your Content Never Stops Changing. Neither Should Localization.
              </h2>
            </div>
          </div>
          <div className="body-copy">
            <p className="body-large">
              Enterprise content used to move in relatively predictable
              publishing cycles. Today, websites change daily. Software ships
              continuously. Ecommerce catalogs expand. Support teams publish new
              knowledge. Product information evolves across channels. Marketing
              teams create more campaign variations for more audiences and
              markets.
            </p>
            <p>
              AI is accelerating that content velocity even further. Generative
              AI makes it possible to create, update, personalize, and repurpose
              business content at unprecedented speed—from product descriptions
              and help articles to training materials, summaries, customer
              communications, and digital experiences.
            </p>
            <p>
              Yet translation is still frequently managed as a sequence of
              isolated projects: collect the content, package it, send it for
              translation, wait, review it, reimport it, and repeat the process
              when something changes.
            </p>
            <p>
              That model creates multilingual lag. Source content moves forward
              while translated versions wait for the next localization cycle.
              Product information becomes available in one language before
              others. Help centers drift out of sync. Software releases
              accumulate untranslated strings. Regional websites run different
              generations of the same content.
            </p>
            <p className="emphasis">
              Continuous translation replaces that stop-and-start model with an
              ongoing multilingual content operation designed for content
              velocity.
            </p>
            <div className="content-stream">
              <div className="stream-row">
                <span className="stream-icon">
                  <Icon name="spark" size={19} />
                </span>
                <div>
                  <strong>AI-Generated Content</strong>
                  <span>
                    More source content, more variants, and more frequent
                    updates create a permanent stream of multilingual change.
                  </span>
                </div>
              </div>
              <div className="stream-row">
                <span className="stream-icon">
                  <Icon name="bolt" size={19} />
                </span>
                <div>
                  <strong>Faster Release Cycles</strong>
                  <span>
                    Digital products and content channels keep moving while
                    traditional translation batches wait downstream.
                  </span>
                </div>
              </div>
              <div className="stream-row">
                <span className="stream-icon">
                  <Icon name="globe" size={19} />
                </span>
                <div>
                  <strong>Global Content Expectations</strong>
                  <span>
                    Customers, employees, and partners expect current
                    information across languages—not yesterday’s version of the
                    experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="continuous-model">
        <div className="shell">
          <SectionHeading
            title="From Translation Projects to Continuous Multilingual Operations"
            intro="Traditional translation is organized around projects. Continuously changing content needs an operating model built around recurring change."
          />
          <div className="comparison">
            <div className="comparison-panel">
              <div className="panel-label">PROJECT-BASED TRANSLATION</div>
              <h3>Content Waits for the Next Translation Cycle</h3>
              <div className="flow-line">
                <span>Collect</span>
                <b className="flow-arrow">→</b>
                <span>Package</span>
                <b className="flow-arrow">→</b>
                <span>Translate</span>
                <b className="flow-arrow">→</b>
                <span>Review</span>
                <b className="flow-arrow">→</b>
                <span>Deliver</span>
              </div>
              <div className="comparison-points">
                {[
                  "Content is collected into batches.",
                  "Manual handoffs coordinate each request.",
                  "Unchanged content may be processed repeatedly.",
                  "Localized versions can lag behind the source.",
                  "Teams spend significant time recreating project administration.",
                ].map((item) => (
                  <div className="comparison-point pain" key={item}>
                    <NeutralMarker size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="comparison-center">
              <span>
                <ArrowIcon size={18} />
              </span>
            </div>
            <div className="comparison-panel continuous">
              <div className="panel-label">CONTINUOUS TRANSLATION</div>
              <h3>The Change Itself Becomes the Unit of Work</h3>
              <div className="flow-line">
                <span>Detect</span>
                <b className="flow-arrow">→</b>
                <span>Reuse</span>
                <b className="flow-arrow">→</b>
                <span>Route</span>
                <b className="flow-arrow">→</b>
                <span>Translate</span>
                <b className="flow-arrow">→</b>
                <span>Validate</span>
                <b className="flow-arrow">→</b>
                <span>Release</span>
              </div>
              <div className="comparison-points">
                {[
                  "New and changed content can trigger the workflow.",
                  "Approved translations and terminology are reused where appropriate.",
                  "Content follows the translation and review path it requires.",
                  "Localized content moves alongside the business.",
                  "Teams focus more on quality and global content strategy—and less on repetitive process.",
                ].map((item) => (
                  <div className="comparison-point" key={item}>
                    <CheckIcon size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="big-callout">
            The future of translation is not more projects. It’s a continuous
            workflow.
          </div>
        </div>
      </section>

      <section className="section" id="translate-the-change">
        <div className="shell delta-grid">
          <div className="delta-copy">
            <SectionHeading
              align="left"
              className="center-mobile"
              eyebrow="INCREMENTAL LOCALIZATION"
              title="Translate the Change, Not Everything Around It"
              intro="Most enterprise updates are incremental. Continuous translation focuses the workflow on what actually changed while protecting the language assets your organization has already approved."
            />
            <div className="delta-points">
              <div className="delta-point">
                <strong>Change Detection</strong>
                <span>
                  Identify content that is new, modified, removed, or otherwise
                  affected by a source update.
                </span>
              </div>
              <div className="delta-point">
                <strong>Translation Memory</strong>
                <span>
                  Reuse approved translations whenever identical or similar
                  content remains valid.
                </span>
              </div>
              <div className="delta-point">
                <strong>Terminology</strong>
                <span>
                  Apply approved product names, technical language, brand terms,
                  and market conventions consistently.
                </span>
              </div>
              <div className="delta-point">
                <strong>Context & Versions</strong>
                <span>
                  Keep content relationships and version history connected to
                  translation decisions.
                </span>
              </div>
            </div>
            <TextLink href={LINKS.tm}>Explore Translation Memory</TextLink>
          </div>
          <div
            className="delta-visual"
            role="img"
            aria-label="Illustration showing only changed content entering translation"
          >
            <div className="doc-head">
              <div className="doc-title">
                <Icon name="document" size={19} /> Product Guide
              </div>
              <span className="doc-version">SOURCE · v12.4</span>
            </div>
            <div className="doc-lines">
              <div className="doc-line w90" />
              <div className="doc-line changed">
                UPDATED · Operating temperature revised
              </div>
              <div className="doc-line w74" />
              <div className="doc-line w96" />
              <div className="doc-line changed">NEW · Safety notice added</div>
              <div className="doc-line w84" />
              <div className="doc-line w70" />
            </div>
            <div className="delta-output">
              <div>
                <strong>2 content changes detected</strong>
                <span>Unchanged approved content remains intact.</span>
              </div>
              <span className="delta-badge">DELTA READY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="ai-intelligence">
        <div className="shell intelligence-wrap">
          <SectionHeading
            align="left"
            dark
            eyebrow="AI-POWERED ORCHESTRATION"
            title="AI Makes Continuous Translation Intelligent"
            intro="Continuous translation is not simply machine translation running more frequently. AI can help understand content, apply language knowledge, select the right process, evaluate output, and focus professional expertise where it creates the greatest value."
          />
          <div>
            <div className="intelligence-list">
              {intelligence.map(([title, description, icon]) => (
                <div className="intelligence-row" key={title}>
                  <span className="intelligence-icon">
                    <Icon name={icon} size={21} />
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className="dark-note">
              The goal is not to automate everything equally. It is to make
              better decisions about{" "}
              <strong>
                what should be automated, what should be reviewed, and where
                human expertise matters most.
              </strong>
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                marginTop: 22,
              }}
            >
              <TextLink href={LINKS.ai} onDark>
                Explore AI Translation
              </TextLink>
              <TextLink href={LINKS.aiWorkflows} onDark>
                Explore AI-Powered Translation Workflows
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="governance">
        <div className="shell">
          <SectionHeading
            className="scan-heading"
            eyebrow="RISK-BASED QUALITY"
            title="Continuous Doesn’t Mean Uncontrolled"
            intro="The fastest possible workflow is not automatically the right workflow. Different content streams can use different combinations of AI, professional expertise, review, quality assurance, and approval."
          />
          <div className="governance-panel">
            <div className="governance-head">
              <span>WORKFLOW</span>
              <span>BEST FIT</span>
              <span>QUALITY & CONTROL</span>
            </div>
            {governance.map(([title, desc, controls]) => (
              <div className="governance-row" key={title}>
                <div className="governance-title">{title}</div>
                <div className="governance-description">{desc}</div>
                <div className="governance-controls">{controls}</div>
              </div>
            ))}
          </div>
          <div className="governance-note">
            <p>
              <strong>
                Automation accelerates the workflow. Governance determines how
                far automation should go.
              </strong>{" "}
              Workflow decisions can reflect the content’s audience, market,
              business impact, regulatory requirements, terminology, turnaround,
              and approval needs.
            </p>
            <div className="governance-factors">
              {[
                "Content type",
                "Audience",
                "Language",
                "Market",
                "Business impact",
                "Risk",
                "Terminology",
                "Turnaround",
                "Review level",
                "Stakeholder approval",
              ].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
          <TextLink href={LINKS.workflow}>
            Explore Translation Workflow Automation
          </TextLink>
        </div>
      </section>

      <section className="section soft-section" id="content-parity">
        <div className="shell sync-layout">
          <div className="sync-copy">
            <SectionHeading
              align="left"
              eyebrow="CONTENT PARITY"
              title="Multilingual Content That Never Falls Behind"
              intro="Fast translation is useful. Current translation is more important. Continuous workflows help every language stay aligned with the authoritative source as your content evolves."
            />
            <div className="sync-benefits">
              <div className="sync-benefit">
                <strong>Keep Languages Aligned</strong>
                <span>
                  Move relevant changes through translation as authoritative
                  content evolves.
                </span>
              </div>
              <div className="sync-benefit">
                <strong>Reduce Translation Drift</strong>
                <span>
                  Avoid localized versions gradually becoming disconnected from
                  current source information.
                </span>
              </div>
              <div className="sync-benefit">
                <strong>Improve Global Release Readiness</strong>
                <span>
                  Bring localization earlier into digital, product, and
                  publishing workflows.
                </span>
              </div>
              <div className="sync-benefit">
                <strong>Create More Consistent Experiences</strong>
                <span>
                  Give international audiences access to current product,
                  support, software, and digital content.
                </span>
              </div>
            </div>
          </div>
          <div
            className="sync-visual"
            role="img"
            aria-label="Illustration of synchronized language versions"
          >
            <div className="sync-source">
              <strong>Authoritative Source</strong>
              <span>Current release · 12.4</span>
            </div>
            <div className="version-rows">
              {["EN", "DE", "FR", "JA", "ES"].map((code) => (
                <div className="version-row" key={code}>
                  <strong>{code}</strong>
                  <span className="version-bar" />
                  <span className="version-state">
                    <i className="mini-dot" />
                    Current
                  </span>
                </div>
              ))}
            </div>
            <div className="sync-message">
              All active markets aligned with the current source release
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="ecosystem">
        <div className="shell">
          <SectionHeading
            title="One Continuous Workflow Across Your Content Ecosystem"
            intro="Your content already lives inside business systems. Translation should connect to that ecosystem—not require teams to repeatedly export, email, upload, download, and reimport every update."
          />
          <div className="ecosystem">
            <div className="ecosystem-side left">
              {ecosystems.slice(0, 4).map(([title, sub, icon]) => (
                <div className="ecosystem-node" key={title}>
                  <span className="node-icon">
                    <Icon name={icon} size={20} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ecosystem-core">
              <span className="core-icon">
                <Icon name="flow" size={25} />
              </span>
              <strong>Stepes Continuous Translation</strong>
              <p>
                One connected path for language assets, translation, review,
                quality controls, approvals, and delivery.
              </p>
              <div className="micro-flow">
                <span>CONTENT EVENT</span>
                <span>↓</span>
                <span>INTELLIGENT WORKFLOW</span>
                <span>↓</span>
                <span>MULTILINGUAL DELIVERY</span>
              </div>
            </div>
            <div className="ecosystem-side right">
              {ecosystems.slice(4).map(([title, sub, icon]) => (
                <div className="ecosystem-node" key={title}>
                  <span className="node-icon">
                    <Icon name={icon} size={20} />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="ecosystem-summary">
            With event-driven integration, a content update can initiate the
            multilingual workflow instead of waiting for someone to manually
            create another translation project. The Stepes Translation API
            supports programmatic content submission, asynchronous processing,
            project and job tracking, multilingual results, and signed webhook
            events so downstream systems can continue the content lifecycle.
          </p>
          <div className="ecosystem-links">
            <TextLink href={LINKS.api}>Explore Translation API</TextLink>
            <TextLink href={LINKS.apiDocs}>
              View Translation API Documentation
            </TextLink>
          </div>
        </div>
      </section>

      <section className="section blush-section" id="beyond-software">
        <div className="shell">
          <SectionHeading
            className="scan-heading"
            eyebrow="ENTERPRISE CONTENT COVERAGE"
            title="Continuous Translation Beyond Software"
            intro="Continuous localization became closely associated with agile software development, but the same operating model now applies wherever enterprise content changes faster than traditional translation projects can comfortably follow."
          />
          <div className="usecase-list">
            {useCases.map(([title, desc, icon, href, label]) => (
              <div className="usecase-row" key={title}>
                <span className="usecase-icon">
                  <Icon name={icon} size={22} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="usecase-action">
                  {href ? <TextLink href={href}>{label}</TextLink> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="cicd">
        <div className="shell ci-layout">
          <SectionHeading
            align="left"
            className="scan-heading"
            dark
            eyebrow="AGILE & CI/CD LOCALIZATION"
            title="Built for Agile and CI/CD Localization"
            intro="Software development moved from infrequent major releases to continuous iteration. Continuous localization brings multilingual content into the same product lifecycle so translation can happen alongside development instead of waiting downstream."
          />
          <div>
            <div className="ci-flow">
              <div className="ci-flow-head">
                <strong>Continuous Software Localization</strong>
                <span>Example release workflow</span>
              </div>
              <div className="ci-steps">
                {[
                  ["Source Update", "New or changed strings"],
                  ["Detect", "Relevant content enters localization"],
                  ["Reuse", "TM and terminology applied"],
                  ["Translate", "AI + human workflow"],
                  ["Validate", "QA and in-context review"],
                  ["Release", "Localized resources returned"],
                ].map(([a, b]) => (
                  <div className="ci-step" key={a}>
                    <strong>{a}</strong>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ci-details">
              <div className="ci-detail">
                <strong>Connect to Development</strong>
                <span>
                  Support recurring localization around repositories, branches,
                  APIs, resource files, release milestones, or other established
                  product workflows.
                </span>
              </div>
              <div className="ci-detail">
                <strong>Detect Changed Strings</strong>
                <span>
                  Distinguish new and modified content from unchanged resources
                  so translation effort stays focused on the current release.
                </span>
              </div>
              <div className="ci-detail">
                <strong>Protect Product Context</strong>
                <span>
                  Apply Translation Memory, terminology, instructions,
                  screenshots, metadata, and product references as part of
                  recurring software localization.
                </span>
              </div>
              <div className="ci-detail">
                <strong>Validate the Experience</strong>
                <span>
                  Use in-context review and localization testing to find
                  truncation, layout, locale, functionality, formatting, and
                  user-experience issues before release.
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              <TextLink href={LINKS.software} onDark>
                Explore Software Localization
              </TextLink>
              <TextLink href={LINKS.continuousGuide} onDark>
                Read the Continuous Mobile Localization Guide
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="language-assets">
        <div className="shell asset-layout">
          <SectionHeading
            align="left"
            eyebrow="CONTINUOUS LANGUAGE INTELLIGENCE"
            title="Your Language Assets Get Smarter With Every Release"
            intro="A continuous localization program should accumulate knowledge—not accumulate rework. Every translation your organization approves can become an asset for the next content update."
          />
          <div className="asset-grid">
            {languageAssets.map(([title, desc, icon]) => (
              <div className="asset-item" key={title}>
                <span className="asset-icon">
                  <Icon name={icon} size={21} />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
            <div className="asset-quote">
              Continuous localization should accumulate knowledge, not recreate
              it.
            </div>
          </div>
          <div></div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <TextLink href={LINKS.tm}>Explore Translation Memory</TextLink>
            <TextLink href={LINKS.terminology}>
              Explore Terminology Management
            </TextLink>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="process">
        <div className="shell">
          <SectionHeading
            className="scan-heading"
            eyebrow="THE STEPES OPERATING MODEL"
            title="From Content Change to Global Release"
            intro="Continuous translation connects technology, professional language services, quality controls, and enterprise systems into one coordinated lifecycle designed around your content, markets, and risk."
          />
          <div className="process">
            {process.map(([title, desc], index) => (
              <div className="process-row" key={title}>
                <span className="process-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="process-summary">
            Connect → Detect → Reuse → Route & Translate → Validate → Release
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="shell">
          <SectionHeading
            title="Designed for Enterprise Content Velocity"
            intro="Continuous translation turns localization from a recurring operational bottleneck into a more scalable global content capability."
          />
          <div className="benefit-grid">
            {benefits.map(([title, desc]) => (
              <div className="benefit-item" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush-section" id="technology-and-people">
        <div className="shell">
          <SectionHeading
            eyebrow="AI + PROFESSIONAL EXPERTISE"
            title="Technology Keeps Content Moving. People Protect What Matters."
            intro="Enterprise continuous translation requires more than software—and more than linguistic capacity alone. Stepes brings both into one governed multilingual operating model."
          />
          <div className="dual-panel">
            <div className="dual-side">
              <span className="dual-icon">
                <Icon name="spark" size={24} />
              </span>
              <h3>Intelligent Translation Technology</h3>
              <p>
                Use AI translation, Translation Memory, terminology management,
                automated quality controls, APIs, webhooks, workflow automation,
                and program visibility to reduce repetitive work and keep
                multilingual content moving.
              </p>
              <div className="dual-list">
                <div>
                  <CheckIcon size={17} />
                  AI-powered translation and quality support
                </div>
                <div>
                  <CheckIcon size={17} />
                  Reusable language assets
                </div>
                <div>
                  <CheckIcon size={17} />
                  APIs, webhooks, and workflow automation
                </div>
                <div>
                  <CheckIcon size={17} />
                  Connected status, approvals, and delivery
                </div>
              </div>
            </div>
            <div className="dual-side">
              <span className="dual-icon">
                <Icon name="review" size={24} />
              </span>
              <h3>Professional Language Expertise</h3>
              <p>
                Apply experienced translators, editors, localization
                specialists, subject-matter linguists, and reviewers when
                content requires linguistic judgment, market understanding,
                technical knowledge, creativity, or additional quality
                assurance.
              </p>
              <div className="dual-list">
                <div>
                  <CheckIcon size={17} />
                  Professional translation and review
                </div>
                <div>
                  <CheckIcon size={17} />
                  Subject-matter and market expertise
                </div>
                <div>
                  <CheckIcon size={17} />
                  In-context linguistic validation
                </div>
                <div>
                  <CheckIcon size={17} />
                  High-assurance review and approval
                </div>
              </div>
            </div>
          </div>
          <div className="dual-statement">
            AI for scale. Professional expertise for judgment. One continuous
            workflow for global content.
          </div>
          <div className="dual-action">
            <TextLink href={LINKS.aiHuman}>
              Explore AI + Human Translation Workflows
            </TextLink>
          </div>
        </div>
      </section>

      <section className="section" id="related-capabilities">
        <div className="shell">
          <SectionHeading
            title="Build the Workflow Around Your Content"
            intro="Continuous translation works best as part of a connected enterprise localization architecture. Use the capabilities you need to keep content moving while preserving quality, consistency, and control."
          />
          <div className="related-grid">
            {related.map(([title, desc, href]) => (
              <div className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <TextLink href={href}>Explore {title}</TextLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="faq">
        <div className="shell">
          <SectionHeading
            className="scan-heading"
            title="Continuous Translation & Continuous Localization FAQs"
            intro="Practical answers about continuous localization, AI, human review, CI/CD, Translation Memory, quality, and enterprise integration."
          />
          <FAQ />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="final-cta-inner">
            <h2>Keep Global Content Moving With Your Business</h2>
            <p>
              Your products will keep evolving. Your teams will keep publishing.
              AI will keep increasing the speed and volume of content creation.
              Stepes connects AI, workflow automation, Translation Memory,
              terminology, professional linguists, quality controls, APIs, and
              enterprise content operations into an always-on multilingual
              workflow designed around change.
            </p>
            <p className="final-kicker">
              Make every relevant content change a global content change.
            </p>
            <div className="final-actions">
              <PrimaryButton href={LINKS.contact}>
                Build Your Continuous Translation Workflow
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
