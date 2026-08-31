import React, { useId, useState } from "react";

const STEPS_URL = "https://www.stepes.com";
const CANONICAL_URL = `${STEPS_URL}/ai-human-translation-workflow/`;
const AI_REVIEW_URL = `${STEPS_URL}/ai-translation-review/`;
const HERO_IMAGE_URL = `${STEPS_URL}/wp-content/uploads/2026/08/stepes-ai-translation-human-review-hero-line-art.png`;

const reviewModels = [
  {
    id: "automated",
    title: "AI Translation With Automated Controls",
    bestFor:
      "Internal drafts, search-enablement content, temporary reference materials, and high-volume information with limited downstream impact.",
    controls: [
      "Approved translation memory and terminology instructions",
      "Missing-content, number, unit, tag, and placeholder checks",
      "Language and locale validation",
      "Targeted sampling or exception review where appropriate",
    ],
    note:
      "This workflow is not a substitute for professional linguistic review when accuracy, brand voice, compliance, safety, or external publication matters.",
  },
  {
    id: "targeted",
    title: "AI Translation With Targeted Human Review",
    bestFor:
      "Repeatable operational content, selected knowledge-base material, internal training, routine support updates, and lower-risk product information.",
    controls: [
      "Review of higher-risk or uncertain segments",
      "Terminology, completeness, and numerical validation",
      "Sample-based linguistic evaluation",
      "Correction and escalation of material issues",
    ],
    note:
      "Targeted review improves oversight without representing that every sentence has received complete professional bilingual validation.",
  },
  {
    id: "full",
    title: "AI Translation With Full Professional Linguistic Review",
    bestFor:
      "Websites, customer communications, product content, software interfaces, training materials, technical documentation, and other customer-facing content.",
    controls: [
      "Complete source-to-target review of every translated segment",
      "Accuracy, completeness, terminology, grammar, and fluency",
      "Brand voice, style, locale, and contextual suitability",
      "Readiness for the defined approval or release process",
    ],
    note:
      "Every translated segment is evaluated against the source and the agreed project requirements.",
  },
  {
    id: "specialist",
    title: "AI Translation With Specialist or Independent Validation",
    bestFor:
      "Medical and life sciences content, legal and compliance materials, financial communications, safety-related documentation, and other business-critical uses.",
    controls: [
      "Domain-qualified linguistic review",
      "Subject-matter validation or independent revision where required",
      "Structured issue resolution and documented approvals",
      "Client, in-country, or final-format validation as appropriate",
    ],
    note:
      "The exact process is established according to the content, market, applicable requirements, and client specifications.",
  },
  {
    id: "human",
    title: "Human-Led Translation",
    bestFor:
      "Creative, emotionally sensitive, ambiguous, highly consequential, or technically unsuitable content where direct professional translation offers the better outcome.",
    controls: [
      "Professional translation from the source",
      "Specialist, editorial, or transcreation expertise as needed",
      "Independent review and approval where required",
      "Full use of terminology, style, and quality controls",
    ],
    note:
      "A responsible AI translation program includes a clear path for deciding when not to use AI.",
  },
];

const workflowSteps = [
  {
    title: "Define the Content and Intended Use",
    text:
      "Establish languages, locales, audience, subject matter, publication channel, business impact, confidentiality, review responsibilities, and acceptance criteria.",
  },
  {
    title: "Assess AI Suitability",
    text:
      "Evaluate source quality, structure, language-pair performance, domain complexity, available language assets, expected editing effort, and the impact of an error.",
  },
  {
    title: "Prepare Language Assets and Context",
    text:
      "Apply approved translation memory, terminology, style guidance, reference content, screenshots, product metadata, character limits, and market instructions.",
  },
  {
    title: "Select the Approved AI Approach",
    text:
      "Use Stepes-managed or client-approved neural machine translation, large language models, enterprise AI systems, or client-provided output according to the project.",
  },
  {
    title: "Generate and Prepare the Translation",
    text:
      "Preserve file structure, tags, variables, placeholders, protected content, repeated text, translation-memory matches, and other elements required for review and delivery.",
  },
  {
    title: "Route to Qualified Reviewers",
    text:
      "Assign native-language professionals according to language, locale, subject expertise, content type, review model, and required independence.",
  },
  {
    title: "Review, Validate, and Resolve Issues",
    text:
      "Combine bilingual review, automated QA, terminology validation, source queries, specialist input, stakeholder approval, and final-context inspection as required.",
  },
  {
    title: "Deliver, Report, and Reuse Approved Language",
    text:
      "Deliver approved multilingual content and capture terminology decisions, quality findings, reviewer feedback, and validated translations for future workflows.",
  },
];

const reviewDimensions = [
  {
    icon: "accuracy",
    title: "Accuracy and Meaning",
    text:
      "Mistranslations, altered instructions, incorrect relationships, missing qualifications, unresolved ambiguity, technical meaning, and factual distortion.",
  },
  {
    icon: "completeness",
    title: "Completeness",
    text:
      "Omissions, unsupported additions, missing labels or footnotes, empty target segments, skipped lists or tables, and source content left untranslated.",
  },
  {
    icon: "terminology",
    title: "Terminology",
    text:
      "Product, technical, medical, legal, regulatory, and brand terminology, including approved variants, abbreviations, and do-not-translate content.",
  },
  {
    icon: "language",
    title: "Linguistic Quality",
    text:
      "Grammar, syntax, spelling, punctuation, word choice, fluency, readability, and natural target-language expression.",
  },
  {
    icon: "style",
    title: "Style, Tone, and Brand Voice",
    text:
      "Formality, audience fit, brand personality, instructional voice, reading level, persuasive intent, and consistency with approved style guidance.",
  },
  {
    icon: "locale",
    title: "Locale and Cultural Suitability",
    text:
      "Dates, time, currency, measurements, addresses, regional vocabulary, capitalization, cultural references, and market-appropriate conventions.",
  },
  {
    icon: "data",
    title: "Data and Reference Integrity",
    text:
      "Measurements, percentages, prices, dosages, dates, part numbers, cross-references, citations, URLs, tables, figures, and regulatory references.",
  },
  {
    icon: "context",
    title: "Technical and In-Context Quality",
    text:
      "Variables, tags, placeholders, markup, character limits, file structure, truncation, line breaks, layout expansion, interface display, and functional usability.",
  },
];

const contentTypes = [
  [
    "Internal and operational content",
    "AI with automated controls or targeted review",
    "Completeness, terminology, clarity, and usability",
  ],
  [
    "Knowledge bases and customer support",
    "Targeted or full linguistic review",
    "Product accuracy, terminology, instructions, and readability",
  ],
  [
    "Websites and product content",
    "Full professional linguistic review",
    "Meaning, brand voice, market suitability, and calls to action",
  ],
  [
    "Software and user interfaces",
    "Full review with in-context QA",
    "Terminology, variables, character limits, navigation, and display",
  ],
  [
    "Technical documentation",
    "Full or specialist review",
    "Technical meaning, instructions, warnings, references, and consistency",
  ],
  [
    "Training and eLearning",
    "Full linguistic and contextual review",
    "Instructional intent, clarity, quizzes, narration, and multimedia context",
  ],
  [
    "Legal and compliance content",
    "Specialist or human-led workflow",
    "Defined terms, obligations, rights, qualifications, and consistency",
  ],
  [
    "Medical and life sciences content",
    "Specialist or high-assurance workflow",
    "Scientific meaning, patient safety, regulated terminology, and traceability",
  ],
  [
    "Financial communications",
    "Specialist or independent review",
    "Figures, disclosures, financial terminology, and market conventions",
  ],
  [
    "Marketing campaigns",
    "Full brand review or human-led transcreation",
    "Voice, persuasion, originality, and cultural resonance",
  ],
  [
    "Multimedia and subtitles",
    "Full review with audiovisual validation",
    "Speaker intent, timing, readability, and on-screen context",
  ],
  [
    "Product catalogs and structured data",
    "Targeted or full review with technical QA",
    "Attributes, terminology, units, metadata, and reusable components",
  ],
];

const faqItems = [
  {
    q: "What is AI translation with human review?",
    a:
      "AI translation with human review is a managed workflow in which an AI or machine translation system produces or assists with an initial translation and qualified language professionals evaluate and refine the result according to the source content, approved terminology, audience, intended use, and quality requirements. The workflow may also include translation memory, automated QA, specialist validation, stakeholder review, and controlled approval.",
  },
  {
    q: "What is human-in-the-loop translation?",
    a:
      "Human-in-the-loop translation is a production approach in which professional language experts remain involved in decisions that require linguistic judgment, context, subject knowledge, cultural understanding, or accountability. Human involvement can occur during terminology preparation, translation, post-editing, quality evaluation, specialist validation, final approval, and continuous improvement.",
  },
  {
    q: "How is AI translation with human review different from MTPE?",
    a:
      "Machine translation post-editing focuses primarily on correcting machine- or AI-translated content. AI translation with human review can describe the broader end-to-end workflow, including content assessment, AI suitability, technology selection, translation memory, terminology, review-level design, automated QA, approvals, delivery, and feedback capture. MTPE can be one component of that wider workflow.",
  },
  {
    q: "Is every AI-translated sentence reviewed by a human?",
    a:
      "That depends on the agreed review model. Full professional linguistic review evaluates every translated segment against the source. Targeted review may focus on selected risks, automated exceptions, terminology, or representative samples. Stepes defines the review coverage before production so the level of human validation is clear.",
  },
  {
    q: "What is the difference between targeted review and full linguistic review?",
    a:
      "Targeted review directs human attention to selected content, such as higher-risk segments, terminology, automated exceptions, or samples. Full linguistic review is a complete source-to-target evaluation for accuracy, completeness, terminology, fluency, style, locale suitability, and compliance with project instructions.",
  },
  {
    q: "Who reviews AI-generated translations?",
    a:
      "Stepes assigns qualified language professionals according to the source and target languages, target locale, content type, subject matter, review requirements, and intended use. Projects can also involve independent revisers, subject-matter experts, in-country reviewers, terminology owners, legal or compliance stakeholders, and final approvers.",
  },
  {
    q: "What if we already have AI-translated content?",
    a:
      "Stepes can work with content produced by client-approved machine translation engines, large language models, internal AI systems, proprietary technology, translation management systems, and other multilingual workflows. If your primary need is independent professional evaluation and validation of existing AI-translated content, AI Translation Review Services are the more focused option. If the goal is systematic correction of existing machine- or AI-translated output to an agreed final quality level, Machine Translation Post-Editing may be the better fit. This AI + human workflow is designed for organizations that want Stepes to manage the broader process from content assessment and language assets through translation, human review, QA, approval, and delivery.",
  },
  {
    q: "How does Stepes select an AI translation model or engine?",
    a:
      "Selection depends on the languages, content type, domain, available context, security requirements, quality expectations, existing language assets, and expected human-review effort. Stepes does not assume that one technology is best for every language or project, and can also use client-mandated or client-provided systems.",
  },
  {
    q: "Can AI translation be used for legal, medical, financial, or regulated content?",
    a:
      "AI may support selected stages of a controlled workflow for specialized or regulated content, but suitability must be assessed carefully. The process may require full bilingual review, domain-qualified professionals, independent revision, specialist validation, controlled approvals, final-format inspection, or human-led translation. The appropriate approach depends on the content, intended use, applicable requirements, and impact of an error.",
  },
  {
    q: "How is AI translation quality measured?",
    a:
      "Quality can be evaluated using defined dimensions such as accuracy, completeness, terminology, fluency, grammar, style, locale suitability, technical integrity, and compliance with instructions. Findings may be classified by severity and used to support acceptance decisions, quality scores, corrective actions, or workflow recommendations.",
  },
  {
    q: "Can Stepes use our translation memories, glossaries, and style guides?",
    a:
      "Yes. Existing translation memories, glossaries, terminology databases, style guides, reference materials, previous translations, and market instructions can be incorporated into the workflow. Stepes can also help evaluate, clean, organize, or expand these resources when preparation is required.",
  },
  {
    q: "Can our in-country teams participate in review and approval?",
    a:
      "Yes. Internal reviewers, subject-matter experts, legal teams, brand owners, market stakeholders, terminology owners, and final approvers can participate through controlled roles and review stages. The workflow can define who may comment, edit, resolve issues, approve terminology, approve market content, and authorize final release.",
  },
  {
    q: "How does Stepes protect confidential content?",
    a:
      "Security and content-handling requirements are established for the engagement. The workflow can incorporate approved technology, controlled access, confidentiality obligations, secure submission and delivery, project-specific handling instructions, restricted content categories, retention requirements, and defined reviewer permissions.",
  },
  {
    q: "What happens to human reviewer corrections?",
    a:
      "Approved corrections can be incorporated into translation memory, terminology resources, style guidance, reviewer instructions, quality rules, and future project specifications. Whether corrections are used to train or adapt an AI model depends on the selected technology, permissions, and program configuration; corrections are not assumed to retrain every model automatically.",
  },
  {
    q: "How do we begin an AI translation pilot?",
    a:
      "Share representative source content, target languages, available translation memories or glossaries, intended use, quality expectations, and any security or workflow requirements. Stepes will assess the content, recommend a pilot configuration, define the review criteria, and provide the scope, timeline, and pricing for evaluation.",
  },
];

const relatedLinks = [
  {
    title: "AI Translation Services",
    text: "Explore Stepes’ broader AI-assisted translation capabilities for documents, digital content, technical materials, and enterprise localization programs.",
    href: `${STEPS_URL}/ai-translation-services/`,
    action: "Explore AI Translation Services",
  },
  {
    title: "AI Translation Review Services",
    text: "Independently evaluate and validate existing AI-translated content for accuracy, completeness, terminology, risk, and fitness for its intended use.",
    href: AI_REVIEW_URL,
    action: "Explore AI Translation Review Services",
  },
  {
    title: "Machine Translation Post-Editing",
    text: "Turn existing machine- or AI-translated output into corrected target-language content through a defined professional post-editing process.",
    href: `${STEPS_URL}/machine-translation-post-editing/`,
    action: "Explore Machine Translation Post-Editing",
  },
  {
    title: "AI-Powered Translation Workflows",
    text: "Design multiple translation, review, automation, approval, and delivery paths across departments, content streams, and enterprise systems.",
    href: `${STEPS_URL}/solutions/ai-powered-translation-workflows/`,
    action: "Explore AI-Powered Translation Workflows",
  },
  {
    title: "Enterprise Translation Management",
    text: "Centralize translation requests, resources, workflows, approvals, visibility, and governance.",
    href: `${STEPS_URL}/enterprise-translation-management/`,
    action: "Explore Enterprise Translation Management",
  },
  {
    title: "Translation Quality Assurance",
    text: "Connect automated QA, linguistic evaluation, human validation, controlled approvals, and quality reporting.",
    href: `${STEPS_URL}/translation-quality-assurance/`,
    action: "Explore Translation Quality Assurance",
  },
  {
    title: "Translation Memory",
    text: "Reuse previously approved translations to improve consistency and support recurring content updates.",
    href: `${STEPS_URL}/translation-memory/`,
    action: "Explore Translation Memory",
  },
  {
    title: "Terminology Management",
    text: "Govern product, technical, brand, legal, medical, and regulated terminology across languages and workflows.",
    href: `${STEPS_URL}/terminology-management/`,
    action: "Explore Terminology Management",
  },
  {
    title: "AI + Human Translation Guide",
    text: "Learn how AI translation, language assets, automated QA, and professional human review work together across enterprise content.",
    href: `${STEPS_URL}/resources/translation-guides/ai-human-translation-workflows/`,
    action: "Read the AI + Human Translation Guide",
  },
];

function ArrowIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 3 5.5 5.8v5.3c0 4.5 2.7 7.8 6.5 9.9 3.8-2.1 6.5-5.4 6.5-9.9V5.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m9.1 12 1.9 1.9 4-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LanguageAssetIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: false,
  };
  if (type === "memory") {
    return (
      <svg {...common}>
        <path d="M7 5.5h9.2a2.3 2.3 0 0 1 2.3 2.3V18H9.3A2.3 2.3 0 0 1 7 15.7V5.5Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M5.5 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10.3 10h5M10.3 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "terms") {
    return (
      <svg {...common}>
        <path d="M5 4.5h14v15H5z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 8h8M8 11.5h5M8 15h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "style") {
    return (
      <svg {...common}>
        <path d="m5 17.5 2.1-5.4L15.7 3.5l4.8 4.8-8.6 8.6L6.5 19.1 5 17.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m13.5 5.8 4.7 4.7" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "source") {
    return (
      <svg {...common}>
        <path d="M6.5 3.8h8l3 3v13.4h-11V3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14.5 3.8v3h3M9 11h6M9 14.2h4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="m15.2 17.2 1.2 1.2 2.3-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4.5 6.5h15v11h-15z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10h8M8 13.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m17 17.5 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ReviewDimensionIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: false,
  };

  if (type === "accuracy") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="m8.5 12.1 2.2 2.2 4.9-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "completeness") {
    return (
      <svg {...common}>
        <path d="M7 3.8h7l3 3v13.4H7V3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14 3.8v3h3M9.5 11h5M9.5 14.5h5M9.5 18h3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "terminology") {
    return (
      <svg {...common}>
        <path d="M5.2 5.2h13.6v13.6H5.2z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.3 9h7.4M8.3 12.2h5.4M8.3 15.4h6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "language") {
    return (
      <svg {...common}>
        <path d="M4.5 5.2h15v10.5h-8.4L7 19v-3.3H4.5V5.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 9h8M8 12.2h5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "style") {
    return (
      <svg {...common}>
        <path d="m5.2 17.8 2-5.1L15.8 4l4.2 4.2-8.7 8.6-5 2-1.1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m13.8 6 4.2 4.2M7.3 12.9l3.8 3.8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "locale") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.9 12h16.2M12 3.6c2.3 2.2 3.6 5 3.6 8.4S14.3 18.2 12 20.4M12 3.6C9.7 5.8 8.4 8.6 8.4 12s1.3 6.2 3.6 8.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "data") {
    return (
      <svg {...common}>
        <path d="M7.7 4.5 6.3 19.5M17.7 4.5l-1.4 15M4.5 9h15M4 15h15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="5" width="16" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20h8M12 16.5V20M7.5 9h4M7.5 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={secondary ? "btn btn-secondary" : "btn btn-primary"} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function TextLink({ href, children, light = false }) {
  return (
    <a className={light ? "text-link text-link-light" : "text-link"} href={href}>
      <span>{children}</span>
      <ArrowIcon size={16} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}

function ReviewFramework() {
  return (
    <div className="review-model-list">
      {reviewModels.map((item) => (
        <article className="review-model-row" key={item.id}>
          <div className="review-model-heading">
            <h3>{item.title}</h3>
          </div>
          <div className="review-model-fit">
            <div className="review-column-label">Best Suited For</div>
            <p>{item.bestFor}</p>
          </div>
          <div className="review-model-controls">
            <div className="review-column-label">Typical Controls</div>
            <ul className="check-list">
              {item.controls.map((control) => (
                <li key={control}>
                  <CheckIcon />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
            <p className="review-note">{item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index < 2);
  const id = useId();
  return (
    <div className={open ? "faq-item is-open" : "faq-item"}>
      <h3 className="faq-heading">
        <button
          className="faq-question"
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-answer`}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{item.q}</span>
          <span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <div id={`${id}-answer`} className="faq-answer" hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

function AIHumanTranslationWorkflowPage() {
  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-deep: #9F1D55;
          --magenta-dark: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #111827;
          --ink-soft: #263248;
          --body: #506078;
          --muted: #738197;
          --line: #E4E9F0;
          --line-strong: #D7DEE8;
          --surface: #F7F9FC;
          --dark: #151725;
          --dark-2: #1D2030;
          --white: #FFFFFF;
          --shadow: 0 22px 55px rgba(17, 24, 39, 0.08);
          color: var(--ink);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        button, a { font: inherit; }
        button { color: inherit; }
        a { color: inherit; }

        .stepes-page {
          width: 100%;
          overflow-x: hidden;
          overflow-x: clip;
          overflow-wrap: break-word;
          background: var(--white);
          color: var(--ink);
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .section-dense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .surface-section { background: var(--surface); }
        .blush-section { background: linear-gradient(180deg, #fff 0%, var(--blush) 100%); }
        .dark-section {
          background: var(--dark);
          color: var(--white);
        }

        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 720px; }
        h2 { font-size: 36px; line-height: 1.14; margin-bottom: 22px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        p, li { font-size: 16px; line-height: 1.72; color: var(--body); }
        .dark-section p, .dark-section li { color: #CBD2DF; }
        .body-large { font-size: 18px; line-height: 1.67; }

        .eyebrow {
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-dark { color: var(--pink-light); }

        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
        .section-intro { font-size: 18px; line-height: 1.67; max-width: 820px; margin-bottom: 0; }
        .centered .section-intro { margin-left: auto; margin-right: auto; }

        .btn-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 13px 22px;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.25); outline-offset: 3px; }

        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }
        .btn-primary *,
        .btn-primary:visited *,
        .btn-primary:hover *,
        .btn-primary:active *,
        .btn-primary:focus *,
        .btn-primary:focus-visible * {
          color: #fff !important;
          fill: currentColor;
          stroke: currentColor;
        }
        .btn-primary { box-shadow: 0 12px 28px rgba(193, 29, 99, 0.22); }
        .btn-primary:hover,
        .btn-primary:focus-visible { background: var(--magenta-deep); box-shadow: 0 16px 34px rgba(193, 29, 99, 0.28); }

        .btn-secondary {
          background: #fff;
          border-color: var(--line-strong);
          color: var(--ink-soft);
        }
        .btn-secondary:visited { color: var(--ink-soft); }
        .btn-secondary:hover { border-color: #BEC8D5; box-shadow: 0 10px 22px rgba(17, 24, 39, 0.07); }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .text-link:visited { color: var(--magenta); }
        .text-link svg { transition: transform 160ms ease; }
        .text-link:hover svg { transform: translateX(3px); }
        .text-link:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.2); outline-offset: 3px; border-radius: 6px; }
        .text-link-light, .text-link-light:visited { color: #fff; }

        /* Hero */
        .hero {
          position: relative;
          padding-top: 104px;
          padding-bottom: 96px;
          background:
            radial-gradient(circle at 93% 8%, rgba(193, 29, 99, 0.085), transparent 31%),
            linear-gradient(180deg, #fff 0%, #FCFCFE 100%);
        }
        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 64px;
          height: 3px;
          background: var(--magenta);
          transform: translateX(-50%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(430px, 0.96fr);
          gap: 64px;
          align-items: center;
        }
        .hero-copy { max-width: 720px; }
        .hero-copy .body-large { max-width: 690px; margin-bottom: 32px; }
        .hero-jump { margin-top: 18px; }
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        .hero-visual-frame {
          width: 100%;
          max-width: 590px;
          margin-left: auto;
          border-radius: 30px;
          overflow: hidden;
          background: #fff;
        }
        .hero-visual-frame img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* Trust strip */
        .trust-strip { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          min-height: 84px;
          align-items: stretch;
        }
        .trust-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 18px;
          color: var(--ink-soft);
          font-size: 15px;
          line-height: 1.35;
          font-weight: 600;
          text-align: center;
        }
        .trust-item + .trust-item { border-left: 0; }

        /* Definition */
        .definition-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 78px;
          align-items: start;
        }
        .definition-copy h2 { max-width: 500px; }
        .definition-copy p { font-size: 18px; line-height: 1.7; }
        .definition-panel {
          border-top: 3px solid var(--magenta);
          background: var(--surface);
          border-radius: 0 0 28px 28px;
          padding: 34px 36px 28px;
        }
        .definition-list { list-style: none; margin: 0; padding: 0; }
        .definition-list li {
          display: grid;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 15px;
          padding: 19px 0;
          margin: 0;
          border-bottom: 1px solid var(--line);
        }
        .definition-list li:last-child { border-bottom: 0; }
        .definition-marker {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--magenta);
          margin-top: 9px;
        }
        .definition-list strong { display: block; color: var(--ink); font-size: 18px; font-weight: 600; margin-bottom: 5px; }
        .definition-list p { margin: 0; }

        .outcome-band {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          margin-top: 56px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .outcome-item { padding: 26px 20px; }
        .outcome-item + .outcome-item { border-left: 1px solid var(--line); }
        .outcome-item h3 { font-size: 18px; margin-bottom: 6px; }
        .outcome-item p { margin: 0; line-height: 1.55; }

        /* Challenge */
        .challenge-top {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 72px;
          align-items: start;
        }
        .challenge-top h2 { max-width: 560px; }
        .challenge-lede { font-size: 18px; line-height: 1.7; margin-bottom: 0; }
        .risk-examples {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 0 34px;
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .risk-example {
          position: relative;
          padding: 24px 0 24px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          color: #D4DAE5;
          font-size: 16px;
          line-height: 1.65;
        }
        .risk-example::before {
          content: "";
          position: absolute;
          left: 0;
          top: 34px;
          width: 8px;
          height: 2px;
          background: var(--pink-light);
        }
        .hybrid-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 56px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 28px;
          overflow: hidden;
        }
        .hybrid-column { padding: 34px; }
        .hybrid-column + .hybrid-column { border-left: 1px solid rgba(255,255,255,0.15); }
        .hybrid-column h3 { font-size: 22px; }
        .hybrid-column p { margin-bottom: 0; }
        .authority-quote {
          margin: 48px 0 0;
          border-left: 3px solid var(--pink-light);
          padding: 4px 0 4px 26px;
          color: #fff;
          font-size: 22px;
          line-height: 1.5;
          max-width: 980px;
        }

        /* Review framework */
        .review-model-list {
          border: 1px solid var(--line-strong);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
          padding: 0 32px;
          box-shadow: 0 18px 44px rgba(17, 24, 39, 0.045);
        }
        .review-model-row {
          display: grid;
          grid-template-columns: minmax(210px, 0.72fr) minmax(0, 0.9fr) minmax(0, 1.38fr);
          gap: 40px;
          padding: 36px 0;
          border-bottom: 1px solid var(--line-strong);
          align-items: start;
        }
        .review-model-row:last-child { border-bottom: 0; }
        .review-model-heading { padding-right: 18px; }
        .review-column-label {
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
          margin-bottom: 9px;
        }
        .review-model-heading h3 { font-size: 22px; margin-bottom: 0; }
        .review-model-fit p { margin: 0; }
        .review-model-controls .check-list { margin-bottom: 18px; }
        .check-list { list-style: none; margin: 0; padding: 0; }
        .check-list li {
          display: grid;
          grid-template-columns: 22px minmax(0,1fr);
          gap: 12px;
          align-items: start;
          margin-bottom: 12px;
        }
        .check-list li:last-child { margin-bottom: 0; }
        .check-list svg { color: var(--magenta); margin-top: 4px; }
        .review-note {
          margin: 18px 0 0;
          padding: 16px 18px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: var(--surface);
          color: var(--ink-soft);
        }

        /* Workflow */
        .workflow-sequence {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line-strong);
          border-left: 1px solid var(--line-strong);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .workflow-step {
          min-height: 250px;
          padding: 30px 28px;
          border-right: 1px solid var(--line-strong);
          border-bottom: 1px solid var(--line-strong);
        }
        .workflow-step-number {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--magenta);
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 28px;
        }
        .workflow-step-number::after {
          content: "";
          height: 1px;
          flex: 1;
          background: var(--line);
        }
        .workflow-step h3 { font-size: 21px; }
        .workflow-step p { margin-bottom: 0; }
        .workflow-footnote {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          max-width: 840px;
          margin-top: 28px;
          color: var(--body);
        }
        .workflow-footnote svg { color: var(--magenta); flex: 0 0 auto; margin-top: 3px; }

        /* AI vs human */
        .ownership-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--line-strong);
          border-radius: 30px;
          overflow: hidden;
          background: #fff;
        }
        .ownership-column { padding: 42px; }
        .ownership-column + .ownership-column { border-left: 1px solid var(--line-strong); }
        .ownership-column:first-child { background: var(--surface); }
        .ownership-column h3 { font-size: 26px; margin-bottom: 24px; }
        .quiet-list { list-style: none; padding: 0; margin: 0; }
        .quiet-list li {
          position: relative;
          padding: 14px 0 14px 20px;
          border-top: 1px solid var(--line);
        }
        .quiet-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 25px;
          width: 7px;
          height: 2px;
          background: var(--magenta);
        }
        .ownership-quote {
          grid-column: 1 / -1;
          padding: 30px 42px;
          background: var(--blush);
          border-top: 1px solid #F1D7E4;
          font-size: 21px;
          line-height: 1.55;
          color: var(--ink);
          font-weight: 600;
        }

        /* Review dimensions */
        .dimensions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 64px;
          border-top: 1px solid var(--line-strong);
        }
        .dimension-row {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 18px;
          padding: 28px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .dimension-icon {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 15px;
          background: var(--surface);
          color: var(--magenta);
          border: 1px solid var(--line);
        }
        .dimension-row h3 { font-size: 21px; margin-bottom: 6px; }
        .dimension-row p { margin: 0; }

        /* Quality governance */
        .quality-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 70px;
          align-items: start;
        }
        .quality-layout h2 { max-width: 560px; }
        .quality-intro { font-size: 18px; line-height: 1.7; }
        .quality-stack { border-top: 1px solid rgba(255,255,255,0.15); }
        .quality-row {
          display: grid;
          grid-template-columns: minmax(190px, 0.46fr) minmax(0, 1fr);
          gap: 30px;
          padding: 25px 0;
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }
        .quality-row h3 { font-size: 20px; margin: 0; }
        .quality-row p { margin: 0; }
        .severity-band {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 50px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 24px;
          overflow: hidden;
        }
        .severity-item { padding: 24px; }
        .severity-item + .severity-item { border-left: 1px solid rgba(255,255,255,0.16); }
        .severity-item h3 { font-size: 18px; margin-bottom: 8px; }
        .severity-item p { margin: 0; line-height: 1.58; }
        .standards-panel {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--dark-2);
          border-radius: 24px;
          overflow: hidden;
        }
        .standard-item { padding: 24px; }
        .standard-item + .standard-item { border-left: 1px solid rgba(255,255,255,0.12); }
        .standard-item strong { display: block; color: #fff; font-size: 17px; font-weight: 600; margin-bottom: 8px; }
        .standard-item span { display: block; color: #BFC7D4; font-size: 16px; line-height: 1.55; }

        /* Assets */
        .asset-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 72px;
          align-items: start;
        }
        .asset-layout .section-heading { position: sticky; top: 28px; }
        .asset-list { border-top: 1px solid var(--line-strong); }
        .asset-item {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 20px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .asset-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          border-radius: 17px;
          background: var(--blush);
          color: var(--magenta);
        }
        .asset-item h3 { font-size: 22px; margin-bottom: 8px; }
        .asset-item p { margin-bottom: 10px; }

        /* Platform */
        .platform-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(460px, 1.16fr);
          gap: 68px;
          align-items: center;
        }
        .platform-copy .section-heading { margin-bottom: 30px; }
        .platform-features { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line-strong); }
        .platform-features li {
          display: grid;
          grid-template-columns: 23px minmax(0, 1fr);
          gap: 12px;
          padding: 18px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .platform-features svg { color: var(--magenta); margin-top: 3px; }
        .platform-features strong { color: var(--ink); font-size: 17px; font-weight: 600; }
        .platform-features span { display: block; margin-top: 3px; color: var(--body); font-size: 16px; line-height: 1.6; }
        .platform-link-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 24px;
          margin-top: 24px;
        }

        .platform-mockup {
          border-radius: 30px;
          border: 1px solid var(--line-strong);
          background: #fff;
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .mockup-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 64px;
          padding: 0 24px;
          border-bottom: 1px solid var(--line);
          background: var(--surface);
        }
        .mockup-title { color: var(--ink); font-size: 16px; font-weight: 600; }
        .mockup-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink-soft);
          font-size: 14px;
        }
        .mockup-status::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .mockup-body { display: grid; grid-template-columns: 168px minmax(0, 1fr); min-height: 440px; }
        .mockup-sidebar { padding: 22px 16px; background: #FBFCFE; border-right: 1px solid var(--line); }
        .mockup-sidebar-label { color: var(--muted); font-size: 14px; line-height: 1.4; margin: 0 8px 10px; }
        .mockup-nav-item {
          padding: 11px 12px;
          border-radius: 10px;
          color: var(--body);
          font-size: 14px;
          line-height: 1.35;
          margin-bottom: 4px;
        }
        .mockup-nav-item.is-selected { color: var(--magenta); background: var(--blush); font-weight: 600; }
        .mockup-main { padding: 24px; }
        .mockup-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .mockup-metric { padding: 16px; border: 1px solid var(--line); border-radius: 16px; }
        .mockup-metric-label { color: var(--muted); font-size: 14px; line-height: 1.35; margin-bottom: 5px; }
        .mockup-metric-value { color: var(--ink); font-size: 16px; line-height: 1.35; font-weight: 600; }
        .mockup-work {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .mockup-pane { border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
        .mockup-pane-header {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 13px 15px;
          border-bottom: 1px solid var(--line);
          background: var(--surface);
          color: var(--ink-soft);
          font-size: 14px;
          font-weight: 600;
        }
        .mockup-pane-content { padding: 16px; }
        .mockup-string {
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.5;
        }
        .mockup-string:last-child { border-bottom: 0; }
        .mockup-string.is-reviewed { position: relative; padding-left: 21px; }
        .mockup-string.is-reviewed::before { content: ""; position: absolute; left: 0; top: 19px; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .mockup-qa {
          margin-top: 14px;
          padding: 15px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-radius: 16px;
          background: var(--blush);
          border: 1px solid #F0D8E4;
        }
        .mockup-qa strong { color: var(--ink); font-size: 14px; font-weight: 600; }
        .mockup-qa span { color: var(--body); font-size: 14px; }

        /* Security */
        .security-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 70px;
          align-items: start;
        }
        .security-summary {
          padding: 36px;
          border-radius: 28px;
          background: var(--blush);
          border: 1px solid #F0D8E4;
        }
        .security-summary svg { color: var(--magenta); margin-bottom: 20px; }
        .security-summary h3 { font-size: 26px; }
        .security-summary p { margin-bottom: 20px; }
        .security-matrix { border-top: 1px solid var(--line-strong); }
        .security-row {
          display: grid;
          grid-template-columns: minmax(190px, 0.45fr) minmax(0, 1fr);
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .security-row h3 { font-size: 20px; margin: 0; }
        .security-row p { margin: 0; }

        /* Content matrix */
        .content-matrix {
          border: 1px solid var(--line-strong);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .content-row {
          display: grid;
          grid-template-columns: 1.05fr 1.1fr 1.35fr;
          border-bottom: 1px solid var(--line);
        }
        .content-row:last-child { border-bottom: 0; }
        .content-cell {
          padding: 20px 22px;
          font-size: 16px;
          line-height: 1.55;
          color: var(--body);
        }
        .content-cell + .content-cell { border-left: 1px solid var(--line); }
        .content-cell:first-child { color: var(--ink); font-weight: 600; }
        .content-header { background: var(--surface); }
        .content-header .content-cell { color: var(--ink-soft); font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
        .content-note { margin: 26px 0 0; max-width: 880px; }

        /* Human-led */
        .human-led-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 72px;
          align-items: start;
        }
        .human-led-layout .section-heading { position: sticky; top: 28px; }
        .human-led-list { border-top: 1px solid rgba(255,255,255,0.16); }
        .human-led-item {
          display: grid;
          grid-template-columns: 16px minmax(0,1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(255,255,255,0.16);
        }
        .human-led-marker { width: 8px; height: 8px; margin-top: 9px; border-radius: 50%; background: var(--pink-light); }
        .human-led-item h3 { font-size: 21px; margin-bottom: 6px; }
        .human-led-item p { margin: 0; }
        .human-led-quote {
          margin-top: 34px;
          padding: 26px 28px;
          background: rgba(255,255,255,0.06);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.13);
          color: #fff;
          font-size: 20px;
          line-height: 1.55;
          font-weight: 600;
        }

        /* Review path comparison */
        .mtpe-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--line-strong);
          border-radius: 28px;
          overflow: hidden;
          background: #fff;
        }
        .mtpe-comparison.three-way { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .mtpe-column { padding: 34px; min-width: 0; }
        .mtpe-column + .mtpe-column { border-left: 1px solid var(--line-strong); }
        .mtpe-column.is-current { background: var(--surface); }
        .mtpe-column h3 { font-size: 24px; margin-top: 8px; }
        .mtpe-column p { margin-bottom: 18px; }
        .mtpe-column ul { margin: 0; padding-left: 20px; }
        .mtpe-column li { margin-bottom: 8px; }
        .mtpe-link { margin-top: 18px; }

        /* Pilot */
        .pilot-panel {
          position: relative;
          border-radius: 30px;
          background: #fff;
          border: 1px solid var(--line-strong);
          box-shadow: var(--shadow);
          padding: 48px;
          overflow: hidden;
        }
        .pilot-panel::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          right: -95px;
          top: -115px;
          border-radius: 50%;
          background: rgba(193,29,99,0.07);
          pointer-events: none;
        }
        .pilot-top {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 64px;
          align-items: end;
          position: relative;
          z-index: 1;
        }
        .pilot-top .section-heading { margin-bottom: 0; }
        .pilot-top-copy { font-size: 18px; line-height: 1.7; margin-bottom: 0; }
        .pilot-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          margin-top: 42px;
          border-top: 1px solid var(--line-strong);
          border-bottom: 1px solid var(--line-strong);
          position: relative;
          z-index: 1;
        }
        .pilot-step { padding: 26px 20px; }
        .pilot-step + .pilot-step { border-left: 1px solid var(--line-strong); }
        .pilot-step span { display: block; color: var(--magenta); font-size: 14px; line-height: 1.3; font-weight: 600; margin-bottom: 10px; }
        .pilot-step h3 { font-size: 18px; margin-bottom: 6px; }
        .pilot-step p { margin: 0; line-height: 1.55; }
        .pilot-bottom {
          display: grid;
          grid-template-columns: minmax(0,1fr) auto;
          gap: 28px;
          align-items: center;
          margin-top: 32px;
          position: relative;
          z-index: 1;
        }
        .pilot-deliverables { display: flex; flex-wrap: wrap; gap: 10px; }
        .deliverable-chip {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          padding: 8px 13px;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: var(--surface);
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.35;
          font-weight: 600;
        }

        /* Why Stepes */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          border-top: 1px solid var(--line-strong);
        }
        .why-item {
          min-height: 0;
          padding: 30px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .why-item h3 { font-size: 22px; }
        .why-item p { margin-bottom: 0; }
        .why-link-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 26px;
          margin-top: 24px;
        }

        /* Related */
        .related-list { border-top: 1px solid var(--line-strong); }
        .related-row {
          display: grid;
          grid-template-columns: minmax(220px, 0.45fr) minmax(0,1fr) auto;
          gap: 38px;
          align-items: center;
          padding: 26px 0;
          border-bottom: 1px solid var(--line-strong);
        }
        .related-row h3 { font-size: 20px; margin: 0; }
        .related-row p { margin: 0; }

        /* FAQ */
        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.66fr) minmax(0, 1.34fr);
          gap: 70px;
          align-items: start;
        }
        .faq-layout .section-heading { position: sticky; top: 28px; }
        .faq-panel {
          border-top: 1px solid var(--line-strong);
        }
        .faq-item { border-bottom: 1px solid var(--line-strong); }
        .faq-heading { margin: 0; font-size: inherit; line-height: inherit; letter-spacing: 0; }
        .faq-question {
          width: 100%;
          min-height: 76px;
          display: grid;
          grid-template-columns: minmax(0,1fr) 36px;
          gap: 20px;
          align-items: center;
          border: 0;
          background: transparent;
          padding: 20px 0;
          text-align: left;
          cursor: pointer;
          color: var(--ink);
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
        }
        .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,0.22); outline-offset: 5px; border-radius: 8px; }
        .faq-toggle {
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface);
          color: var(--magenta);
          font-size: 24px;
          line-height: 1;
          font-weight: 400;
        }
        .faq-item.is-open .faq-toggle { background: var(--blush); }
        .faq-answer { padding: 0 54px 24px 0; }
        .faq-answer p { margin: 0; max-width: 840px; }

        /* Final CTA */
        .final-section { padding-top: 96px; padding-bottom: 96px; }
        .final-cta {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          background: var(--magenta-dark);
          color: #fff;
          padding: 62px;
          box-shadow: 0 24px 60px rgba(122,21,66,0.18);
        }
        .final-cta::after {
          content: "";
          position: absolute;
          right: -80px;
          top: -120px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.20);
          box-shadow: 0 0 0 48px rgba(242,167,198,0.08), 0 0 0 96px rgba(242,167,198,0.045);
        }
        .final-cta-content { position: relative; z-index: 1; max-width: 820px; }
        .final-cta h2 { max-width: 760px; }
        .final-cta p { color: rgba(255,255,255,0.84); font-size: 18px; line-height: 1.68; max-width: 760px; margin-bottom: 30px; }
        .final-cta .btn-secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,0.4); }
        .final-cta .btn-secondary:visited { color: #fff; }
        .final-cta .btn-secondary:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.65); }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(390px, 0.9fr); gap: 42px; }
          .mtpe-comparison.three-way { grid-template-columns: 1fr; }
          .mtpe-comparison.three-way .mtpe-column + .mtpe-column { border-left: 0; border-top: 1px solid var(--line-strong); }
          .review-model-row { grid-template-columns: minmax(190px, 0.68fr) minmax(0, 0.86fr) minmax(0, 1.26fr); gap: 28px; }
          .workflow-sequence { grid-template-columns: repeat(2, 1fr); }
          .platform-grid { grid-template-columns: minmax(0, 0.82fr) minmax(420px, 1.18fr); gap: 45px; }
          .mockup-body { grid-template-columns: 140px minmax(0,1fr); }
          .pilot-steps { grid-template-columns: repeat(2, 1fr); }
          .pilot-step { padding: 24px 16px; }
          .pilot-step + .pilot-step { border-left: 0; }
          .pilot-step:nth-child(even) { border-left: 1px solid var(--line-strong); }
          .pilot-step:nth-child(n+3) { border-top: 1px solid var(--line-strong); }
          .pilot-step:last-child { grid-column: 1 / -1; border-left: 0; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding-top: 80px; padding-bottom: 80px; }
          .section-dense { padding-top: 72px; padding-bottom: 72px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }

          .hero { padding-top: 88px; padding-bottom: 80px; }
          .hero-grid,
          .definition-grid,
          .challenge-top,
          .quality-layout,
          .asset-layout,
          .platform-grid,
          .security-grid,
          .human-led-layout,
          .pilot-top,
          .faq-layout {
            grid-template-columns: 1fr;
          }
          .hero-grid { gap: 48px; }
          .hero-copy { max-width: 760px; }
          .hero-visual-frame { max-width: 680px; margin: 0 auto; }

          .section-heading {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          .section-heading .section-intro { margin-left: auto; margin-right: auto; }
          .definition-copy h2 { margin-left: auto; margin-right: auto; text-align: center; }
          .challenge-top > div:first-child,
          .quality-layout > div:first-child { text-align: center; }
          .quality-intro { max-width: 760px; margin-left: auto; margin-right: auto; }
          .pilot-top-copy { max-width: 760px; margin-left: auto; margin-right: auto; text-align: center; }
          .final-cta-content { margin-left: auto; margin-right: auto; text-align: center; }
          .final-cta h2, .final-cta p { margin-left: auto; margin-right: auto; }
          .final-cta .btn-row { justify-content: center; }

          .trust-grid { grid-template-columns: repeat(5, minmax(0,1fr)); }
          .trust-item { padding: 20px 10px; font-size: 14px; }
          .definition-grid, .challenge-top, .quality-layout, .asset-layout, .security-grid, .human-led-layout, .faq-layout { gap: 44px; }
          .definition-copy h2 { max-width: 680px; }
          .outcome-band { grid-template-columns: repeat(2,1fr); }
          .outcome-item + .outcome-item { border-left: 0; }
          .outcome-item:nth-child(even) { border-left: 1px solid var(--line); }
          .outcome-item:nth-child(n+3) { border-top: 1px solid var(--line); }
          .outcome-item:last-child { grid-column: 1 / -1; border-left: 0; }

          .hybrid-columns { grid-template-columns: 1fr; }
          .hybrid-column + .hybrid-column { border-left: 0; border-top: 1px solid rgba(255,255,255,0.15); }

          .review-model-list { padding-left: 28px; padding-right: 28px; }
          .review-model-row { grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr); gap: 24px 34px; }
          .review-model-controls { grid-column: 1 / -1; }

          .dimensions-grid { column-gap: 32px; }
          .severity-band, .standards-panel { grid-template-columns: repeat(2,1fr); }
          .severity-item + .severity-item, .standard-item + .standard-item { border-left: 0; }
          .severity-item:nth-child(even), .standard-item:nth-child(even) { border-left: 1px solid rgba(255,255,255,0.16); }
          .severity-item:nth-child(n+3), .standard-item:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,0.16); }

          .asset-layout .section-heading, .human-led-layout .section-heading, .faq-layout .section-heading { position: static; }
          .platform-grid { gap: 46px; }
          .platform-mockup { max-width: 760px; }
          .content-row { grid-template-columns: 1fr 1fr; }
          .content-cell:last-child { grid-column: 1 / -1; border-left: 0; border-top: 1px solid var(--line); }
          .content-header { display: none; }
          .content-cell::before {
            content: attr(data-label);
            display: block;
            color: var(--muted);
            font-size: 12px;
            line-height: 1.35;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 7px;
          }
          .content-cell:first-child { font-weight: 600; }

          .pilot-panel { padding: 40px; }
          .pilot-bottom { grid-template-columns: 1fr; }
          .related-row { grid-template-columns: minmax(180px,0.45fr) minmax(0,1fr); gap: 26px; }
          .related-row .text-link { grid-column: 2; justify-self: start; }
          .final-cta { padding: 52px 44px; }
        }

        @media (max-width: 680px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding-top: 68px; padding-bottom: 68px; }
          .section-dense { padding-top: 64px; padding-bottom: 64px; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          p, li { font-size: 16px; }
          .body-large, .section-intro, .definition-copy p, .challenge-lede, .quality-intro, .pilot-top-copy, .final-cta p { font-size: 17px; }
          .section-heading { margin-bottom: 38px; }

          .hero { padding-top: 72px; padding-bottom: 68px; }
          .hero-grid { gap: 38px; }
          .hero-visual-frame { border-radius: 22px; }
          .btn-row { display: grid; grid-template-columns: 1fr; width: 100%; }
          .btn { width: 100%; min-height: 54px; }
          .hero-jump { margin-top: 14px; }

          .trust-grid { grid-template-columns: 1fr 1fr; padding-top: 10px; padding-bottom: 10px; }
          .trust-item { padding: 10px 8px; }
          .trust-item + .trust-item { border-left: 0; }
          .trust-item:last-child { grid-column: 1 / -1; }

          .definition-panel { padding: 28px 22px 20px; border-radius: 0 0 24px 24px; }
          .outcome-band { grid-template-columns: 1fr; }
          .outcome-item, .outcome-item:nth-child(even), .outcome-item:last-child { grid-column: auto; border-left: 0; }
          .outcome-item + .outcome-item { border-top: 1px solid var(--line); }

          .risk-examples { grid-template-columns: 1fr; }
          .hybrid-column { padding: 28px 24px; }
          .authority-quote { font-size: 19px; padding-left: 20px; }

          .review-model-list { padding-left: 20px; padding-right: 20px; border-radius: 24px; }
          .review-model-row { grid-template-columns: 1fr; gap: 18px; padding: 28px 0; }
          .review-model-heading { padding-right: 0; }
          .review-model-heading h3 { font-size: 22px; }
          .review-model-controls { grid-column: auto; }
          .review-note { padding: 15px 16px; border-radius: 16px; }

          .workflow-sequence { grid-template-columns: 1fr; border-radius: 24px; }
          .workflow-step { min-height: 0; padding: 28px 24px; }
          .workflow-step-number { margin-bottom: 18px; }

          .ownership-panel { grid-template-columns: 1fr; border-radius: 24px; }
          .ownership-column { padding: 30px 24px; }
          .ownership-column + .ownership-column { border-left: 0; border-top: 1px solid var(--line-strong); }
          .ownership-quote { padding: 26px 24px; font-size: 18px; }

          .dimensions-grid { grid-template-columns: 1fr; }
          .dimension-row { grid-template-columns: 46px minmax(0,1fr); gap: 14px; }
          .dimension-icon { width: 40px; height: 40px; }

          .quality-row, .security-row { grid-template-columns: 1fr; gap: 8px; }
          .severity-band, .standards-panel { grid-template-columns: 1fr; }
          .severity-item:nth-child(even), .standard-item:nth-child(even) { border-left: 0; }
          .severity-item + .severity-item, .standard-item + .standard-item { border-top: 1px solid rgba(255,255,255,0.16); }

          .asset-item { grid-template-columns: 46px minmax(0,1fr); gap: 15px; }
          .asset-icon { width: 44px; height: 44px; }

          .platform-link-row { display: grid; grid-template-columns: 1fr; gap: 4px; }
          .platform-mockup { border-radius: 24px; }
          .mockup-body { grid-template-columns: 1fr; }
          .mockup-sidebar { display: none; }
          .mockup-main { padding: 18px; }
          .mockup-summary { grid-template-columns: 1fr; }
          .mockup-work { grid-template-columns: 1fr; }
          .mockup-topbar { padding: 0 18px; }

          .security-summary { padding: 28px 24px; }
          .content-row { grid-template-columns: 1fr; }
          .content-cell, .content-cell:last-child { grid-column: auto; border-left: 0; border-top: 0; }
          .content-cell + .content-cell { border-left: 0; border-top: 1px solid var(--line); }

          .mtpe-comparison { grid-template-columns: 1fr; border-radius: 24px; }
          .mtpe-column { padding: 30px 24px; }
          .mtpe-column + .mtpe-column { border-left: 0; border-top: 1px solid var(--line-strong); }

          .pilot-panel { padding: 32px 22px; border-radius: 24px; }
          .pilot-steps { grid-template-columns: 1fr; }
          .pilot-step, .pilot-step:nth-child(even), .pilot-step:last-child { grid-column: auto; border-left: 0; }
          .pilot-step + .pilot-step { border-top: 1px solid var(--line-strong); }
          .pilot-deliverables { display: grid; grid-template-columns: 1fr; }
          .deliverable-chip { justify-content: center; text-align: center; }

          .why-grid { grid-template-columns: 1fr; }
          .why-item { min-height: 0; }
          .why-link-row { display: grid; grid-template-columns: 1fr; gap: 4px; }

          .related-row { grid-template-columns: 1fr; gap: 8px; }
          .related-row .text-link { grid-column: auto; margin-top: 4px; }

          .faq-question { font-size: 17px; grid-template-columns: minmax(0,1fr) 34px; gap: 14px; }
          .faq-answer { padding-right: 0; }
          .final-section { padding-top: 68px; padding-bottom: 68px; }
          .final-cta { padding: 42px 24px; border-radius: 24px; }
          .final-cta-content { text-align: center; }
          .final-cta::after { width: 220px; height: 220px; }
        }

        @media (max-width: 350px) {
          .review-model-list { padding-left: 16px; padding-right: 16px; }
          .mockup-topbar { align-items: flex-start; flex-direction: column; justify-content: center; padding-top: 14px; padding-bottom: 14px; }
          .pilot-panel { padding-left: 18px; padding-right: 18px; }
          .final-cta { padding-left: 20px; padding-right: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>AI + Human Translation</Eyebrow>
            <h1>AI Translation With Professional Human Review</h1>
            <p className="body-large">
              Accelerate multilingual content with enterprise AI translation, then apply professional linguistic review, terminology control, and quality assurance according to your content’s purpose, audience, complexity, and business risk.
            </p>
            <div className="btn-row">
              <Button href={`${STEPS_URL}/contact-us/`}>Start an AI Translation Pilot</Button>
              <Button href={`${STEPS_URL}/contact-us/`} secondary>Talk to an Expert</Button>
            </div>
            <div className="hero-jump">
              <TextLink href={`${CANONICAL_URL}#how-the-workflow-works`}>Explore How the Workflow Works</TextLink>
            </div>
          </div>

          <div className="hero-visual" aria-label="AI translation and professional human review illustration">
            <div className="hero-visual-frame">
              <img
                src={HERO_IMAGE_URL}
                alt="AI translation workflow connecting source content, language assets, professional human review, quality assurance, and approved multilingual delivery"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="trust-strip" aria-label="Stepes translation credentials">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 17100</div>
          <div className="trust-item">ISO 9001</div>
          <div className="trust-item">ISO 13485</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">Secure Enterprise Workflows</div>
        </div>
      </div>

      <section className="section">
        <div className="shell">
          <div className="definition-grid">
            <div className="definition-copy">
              <h2>What Is AI Translation With Human Review?</h2>
              <p>
                AI translation with human review is a managed workflow in which an approved AI or machine translation system produces or assists with the initial translation, and qualified language professionals evaluate and refine the output against the source content, approved terminology, target audience, and intended use.
              </p>
              <p>
                It is often described as human-in-the-loop translation because professional reviewers remain involved in the decisions that require linguistic judgment, subject expertise, contextual understanding, and accountability.
              </p>
            </div>
            <div className="definition-panel">
              <ul className="definition-list">
                <li>
                  <span className="definition-marker" aria-hidden="true" />
                  <div>
                    <strong>More Than Target-Language Proofreading</strong>
                    <p>Professional reviewers compare the translation with the source to identify meaning errors, omissions, unsupported additions, altered data, and terminology problems that may not be visible in the target text alone.</p>
                  </div>
                </li>
                <li>
                  <span className="definition-marker" aria-hidden="true" />
                  <div>
                    <strong>More Than One Fixed Review Level</strong>
                    <p>Human involvement can range from targeted validation to complete bilingual review, specialist validation, independent revision, and formal approval.</p>
                  </div>
                </li>
                <li>
                  <span className="definition-marker" aria-hidden="true" />
                  <div>
                    <strong>More Than a Translation Engine</strong>
                    <p>Translation memory, terminology, source quality, reference context, reviewer expertise, quality criteria, and final-format validation all influence the result.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="outcome-band">
            {[
              ["AI Efficiency", "Accelerate initial translation and repeatable workflow tasks."],
              ["Professional Judgment", "Validate meaning, terminology, tone, and context."],
              ["Language Governance", "Apply approved translation memory, terminology, and style."],
              ["Defined Quality Controls", "Match review and approval to the intended use."],
              ["Enterprise Visibility", "Manage multilingual work through connected, accountable roles."],
            ].map(([title, text]) => (
              <div className="outcome-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="challenge-top">
            <div>
              <Eyebrow dark>Managed Hybrid Translation</Eyebrow>
              <h2>Enterprise Translation Needs More Than Raw AI Output</h2>
            </div>
            <p className="challenge-lede">
              AI translation can process multilingual content quickly and produce increasingly fluent language. But fluency alone does not prove that a translation preserves the intended meaning, uses the correct terminology, maintains critical relationships, or is appropriate for its audience.
            </p>
          </div>

          <div className="risk-examples">
            {[
              "A requirement may be expressed as a recommendation.",
              "A product component may receive the wrong technical term.",
              "A negative instruction may lose its negation.",
              "A number, unit, date, dosage, or contractual relationship may change.",
              "A user-interface string may be correct in isolation but wrong in context.",
              "Brand language may sound grammatical without communicating the intended positioning.",
            ].map((item) => <div className="risk-example" key={item}>{item}</div>)}
          </div>

          <div className="hybrid-columns">
            <div className="hybrid-column">
              <h3>AI Improves Speed and Scale</h3>
              <p>AI can accelerate first-pass translation, repetitive-content processing, translation-memory use, terminology assistance, workflow routing, and large-volume production.</p>
            </div>
            <div className="hybrid-column">
              <h3>Human Review Resolves Meaning and Context</h3>
              <p>Professional language experts evaluate accuracy, ambiguity, domain terminology, tone, cultural expectations, final-context suitability, and the intended effect on the reader.</p>
            </div>
            <div className="hybrid-column">
              <h3>Managed Workflows Make Quality Repeatable</h3>
              <p>Translation memory, terminology, review instructions, automated QA, reviewer qualifications, approvals, and feedback create a controlled enterprise process.</p>
            </div>
          </div>

          <blockquote className="authority-quote">
            The right question is not whether AI or humans should translate everything. It is which combination of automation, professional expertise, and validation is appropriate for each content stream.
          </blockquote>
        </div>
      </section>

      <section className="section surface-section" id="review-framework">
        <div className="shell">
          <SectionHeading
            eyebrow="Risk-Matched Review"
            title="Match Human Review to the Content’s Purpose and Risk"
            text="Stepes evaluates intended use, audience, visibility, subject complexity, error impact, regulatory or contractual implications, content lifespan, source quality, language pair, available language assets, and initial AI output before recommending a workflow."
            centered
          />
          <ReviewFramework />
        </div>
      </section>

      <section className="section" id="how-the-workflow-works">
        <div className="shell">
          <SectionHeading
            title="How the Stepes AI + Human Translation Workflow Works"
            text="Stepes configures each workflow around the content, languages, intended use, quality expectations, and enterprise operating requirements."
          />
          <div className="workflow-sequence">
            {workflowSteps.map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <div className="workflow-step-number">Step {index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="workflow-footnote">
            <ShieldIcon />
            <p>Approved reviewer corrections can strengthen translation memories, terminology resources, quality rules, and future workflow instructions. How feedback is used to adapt an AI model depends on the selected technology, permissions, and program configuration.</p>
          </div>
        </div>
      </section>

      <section className="section-dense blush-section">
        <div className="shell">
          <SectionHeading
            title="AI Accelerates the Workflow. Professional Linguists Own the Judgment."
            text="AI and human professionals contribute different capabilities to a successful translation program. Automated quality signals can prioritize attention, but they are workflow inputs—not independent proof that a translation is correct."
          />
          <div className="ownership-panel">
            <div className="ownership-column">
              <h3>AI and Automation Support</h3>
              <ul className="quiet-list">
                {[
                  "Initial translation generation",
                  "Translation-memory matching",
                  "Terminology suggestions",
                  "Repetitive-content processing",
                  "File and structural automation",
                  "Pattern and anomaly detection",
                  "Workflow routing and quality signals",
                  "High-volume multilingual processing",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="ownership-column">
              <h3>Professional Linguists Are Responsible For</h3>
              <ul className="quiet-list">
                {[
                  "Confirming the intended source meaning",
                  "Identifying mistranslations, omissions, and unsupported additions",
                  "Applying approved domain terminology in context",
                  "Resolving ambiguity and preserving critical relationships",
                  "Maintaining brand voice, tone, and audience fit",
                  "Evaluating locale and cultural suitability",
                  "Reviewing content in its final context",
                  "Escalating material risks and confirming release readiness",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="ownership-quote">Human review is not a ceremonial final pass. It is the stage at which qualified professionals determine whether the translation communicates the intended meaning and is appropriate for its actual use.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="What Professional Human Review Covers"
            text="The applicable review criteria depend on the content and project specifications. A comprehensive source-to-target review can address the following dimensions."
          />
          <div className="dimensions-grid">
            {reviewDimensions.map((item) => (
              <article className="dimension-row" key={item.title}>
                <div className="dimension-icon"><ReviewDimensionIcon type={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="quality-layout">
            <div>
              <Eyebrow dark>Quality Governance</Eyebrow>
              <h2>Define Translation Quality Before Production Begins</h2>
              <p className="quality-intro">
                “High quality” should not be treated as a vague promise. Translation quality becomes more consistent and measurable when the organization defines what the content must achieve, which errors matter most, who is authorized to approve it, and what evidence is required before release.
              </p>
            </div>
            <div className="quality-stack">
              {[
                ["Establish Acceptance Criteria", "Define intended use, audience, risk, terminology, style, error tolerance, review coverage, approval responsibilities, and final-delivery requirements."],
                ["Classify Findings", "Use clear quality dimensions such as accuracy, completeness, terminology, fluency, style, locale, technical integrity, formatting, and compliance with instructions."],
                ["Choose Review Coverage", "Use sampling for appropriate lower-risk, high-volume evaluation and complete review when every segment requires professional bilingual validation."],
                ["Document the Outcome", "Deliver corrected files, tracked changes, queries, error classifications, quality findings, terminology updates, recommendations, and approval records as required."],
              ].map(([title, text]) => (
                <div className="quality-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="severity-band" aria-label="Illustrative translation issue severity levels">
            <div className="severity-item"><h3>Critical</h3><p>An issue that could significantly affect safety, rights, compliance, essential meaning, or the ability to use the content.</p></div>
            <div className="severity-item"><h3>Major</h3><p>An important error that materially affects accuracy, clarity, terminology, brand requirements, or user understanding.</p></div>
            <div className="severity-item"><h3>Minor</h3><p>A localized issue that does not substantially change meaning but should be corrected to meet the agreed standard.</p></div>
            <div className="severity-item"><h3>Preferential</h3><p>A valid stylistic alternative or reviewer preference that does not represent an objective translation error.</p></div>
          </div>

          <div className="standards-panel" aria-label="Translation standards informing workflow design">
            <div className="standard-item"><strong>ISO 17100</strong><span>Professional translation service processes and resources.</span></div>
            <div className="standard-item"><strong>ISO 18587</strong><span>Full human post-editing of machine translation output.</span></div>
            <div className="standard-item"><strong>ISO 5060</strong><span>Analytic evaluation of human, post-edited, and unedited translation output.</span></div>
            <div className="standard-item"><strong>ISO 11669</strong><span>Translation-project needs analysis, specifications, risk assessment, and workflow planning.</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell asset-layout">
          <SectionHeading
            title="Better Language Assets Create Better AI Translation"
            text="The performance of an AI translation workflow depends not only on the model, but also on the approved language resources, instructions, source quality, and context supplied to it."
          />
          <div className="asset-list">
            <article className="asset-item">
              <div className="asset-icon"><LanguageAssetIcon type="memory" /></div>
              <div>
                <h3>Translation Memory</h3>
                <p>Reuse previously approved source and target content to preserve wording, improve update consistency, reduce unnecessary retranslation, and give reviewers a stronger baseline.</p>
                <TextLink href={`${STEPS_URL}/translation-memory/`}>Translation Memory</TextLink>
              </div>
            </article>
            <article className="asset-item">
              <div className="asset-icon"><LanguageAssetIcon type="terms" /></div>
              <div>
                <h3>Terminology Management</h3>
                <p>Control product names, technical concepts, legal and medical terms, abbreviations, approved variants, prohibited language, and do-not-translate content across AI and human workflows.</p>
                <TextLink href={`${STEPS_URL}/terminology-management/`}>Terminology Management</TextLink>
              </div>
            </article>
            <article className="asset-item">
              <div className="asset-icon"><LanguageAssetIcon type="style" /></div>
              <div>
                <h3>Style and Audience Guidance</h3>
                <p>Define brand voice, tone, formality, reading level, regional preferences, sentence style, punctuation, capitalization, measurement conventions, and other market requirements.</p>
              </div>
            </article>
            <article className="asset-item">
              <div className="asset-icon"><LanguageAssetIcon type="context" /></div>
              <div>
                <h3>Context-Rich Translation</h3>
                <p>Provide screenshots, interface locations, product metadata, component names, previous versions, reference documents, speaker information, visual scenes, and publication context so short or ambiguous segments can be interpreted correctly.</p>
              </div>
            </article>
            <article className="asset-item">
              <div className="asset-icon"><LanguageAssetIcon type="source" /></div>
              <div>
                <h3>Source-Content Readiness</h3>
                <p>Identify ambiguity, inconsistent terminology, fragmented sentences, unclear references, missing context, conflicting instructions, uncontrolled abbreviations, and outdated source material before the same issue propagates across every language.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell platform-grid">
          <div className="platform-copy">
            <SectionHeading
              eyebrow="Enterprise Platform"
              title="Manage AI and Human Review in One Connected Workflow"
              text="At enterprise scale, AI translation with human review is a connected operating model involving content intake, language assets, technology, reviewers, subject-matter experts, approvals, reporting, and delivery."
            />
            <ul className="platform-features">
              {[
                ["Centralized intake", "Submit files, structured content, software resources, websites, and recurring translation requests through a consistent process."],
                ["Configurable routing", "Assign AI, human review, QA, and approval paths according to content type, language, team, market, or risk."],
                ["Governed language assets", "Apply translation memory, terminology, style guidance, and approved reference content consistently."],
                ["Qualified reviewer assignment", "Route work by language, locale, domain expertise, content type, and service requirements."],
                ["Automated QA and approvals", "Check objective issues and coordinate linguistic, specialist, in-country, and final release approvals."],
                ["APIs and enterprise integrations", "Connect content systems, repositories, business applications, and structured pipelines to the same AI + human review workflow."],
                ["Visibility and continuous improvement", "Track status, questions, approvals, delivery, quality findings, and validated feedback across the program."],
              ].map(([title, text]) => (
                <li key={title}>
                  <CheckIcon />
                  <div><strong>{title}</strong><span>{text}</span></div>
                </li>
              ))}
            </ul>
            <div className="platform-link-row">
              <TextLink href={`${STEPS_URL}/enterprise-translation-management/`}>Enterprise Translation Management</TextLink>
              <TextLink href={`${STEPS_URL}/translation-api/`}>Translation API</TextLink>
              <TextLink href={`${STEPS_URL}/integrations/`}>Enterprise Integrations</TextLink>
            </div>
          </div>

          <div className="platform-mockup" aria-label="Illustrative Stepes translation review workspace">
            <div className="mockup-topbar">
              <div className="mockup-title">AI + Human Review Workspace</div>
              <div className="mockup-status">Professional Review Active</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="mockup-sidebar-label">Workflow</div>
                <div className="mockup-nav-item">Overview</div>
                <div className="mockup-nav-item">Source Content</div>
                <div className="mockup-nav-item is-selected">Linguistic Review</div>
                <div className="mockup-nav-item">Terminology</div>
                <div className="mockup-nav-item">Quality Checks</div>
                <div className="mockup-nav-item">Approvals</div>
                <div className="mockup-nav-item">Delivery</div>
              </div>
              <div className="mockup-main">
                <div className="mockup-summary">
                  <div className="mockup-metric"><div className="mockup-metric-label">Language</div><div className="mockup-metric-value">German (Germany)</div></div>
                  <div className="mockup-metric"><div className="mockup-metric-label">Review Level</div><div className="mockup-metric-value">Full Linguistic</div></div>
                  <div className="mockup-metric"><div className="mockup-metric-label">Terminology</div><div className="mockup-metric-value">Applied</div></div>
                </div>
                <div className="mockup-work">
                  <div className="mockup-pane">
                    <div className="mockup-pane-header"><span>Source</span><span>English</span></div>
                    <div className="mockup-pane-content">
                      <div className="mockup-string">Confirm the charging connector is fully seated before beginning the diagnostic test.</div>
                      <div className="mockup-string">Do not disconnect the cable while the status indicator is flashing.</div>
                      <div className="mockup-string">Refer to the approved service procedure for additional safety instructions.</div>
                    </div>
                  </div>
                  <div className="mockup-pane">
                    <div className="mockup-pane-header"><span>Reviewed Translation</span><span>Deutsch</span></div>
                    <div className="mockup-pane-content">
                      <div className="mockup-string is-reviewed">Vergewissern Sie sich vor Beginn des Diagnosetests, dass der Ladestecker vollständig eingerastet ist.</div>
                      <div className="mockup-string is-reviewed">Trennen Sie das Kabel nicht, solange die Statusanzeige blinkt.</div>
                      <div className="mockup-string is-reviewed">Weitere Sicherheitshinweise finden Sie im freigegebenen Serviceverfahren.</div>
                    </div>
                  </div>
                </div>
                <div className="mockup-qa">
                  <strong>Quality Review</strong>
                  <span>Terminology, numbers, protected text, and completeness checks passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Control How Enterprise Content Is Processed"
            text="Organizations adopting AI translation need clear control over the technology, content, users, reviewers, data handling, and approvals involved in the workflow."
          />
          <div className="security-grid">
            <div className="security-summary">
              <ShieldIcon />
              <h3>Practical, Risk-Based Oversight</h3>
              <p>Stepes can configure project-specific workflows around approved technology, controlled access, confidentiality obligations, reviewer responsibilities, and defined release authority.</p>
              <TextLink href={`${STEPS_URL}/security/`}>Enterprise Security</TextLink>
            </div>
            <div className="security-matrix">
              {[
                ["Approved Technology", "Confirm permitted translation systems, suitable content categories, restricted content, model responsibilities, human-review requirements, and exception procedures."],
                ["Controlled Access", "Limit access to authorized client users, assigned linguists, project managers, subject-matter experts, in-country reviewers, and final approvers."],
                ["Confidentiality and Content Handling", "Apply secure submission and delivery, project-specific handling instructions, retention requirements, restrictions on secondary use, and escalation procedures."],
                ["Purposeful Human Oversight", "Define which content requires human review, what reviewers evaluate, which issues require escalation, and who can approve terminology or authorize final release."],
                ["Documented Governance", "Maintain role clarity, issue traceability, quality evidence, approvals, and workflow decisions appropriate to the content’s risk and intended use."],
              ].map(([title, text]) => (
                <div className="security-row" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell">
          <SectionHeading
            title="Apply the Right Review Model to Each Content Type"
            text="The following examples provide common starting points. Stepes confirms the appropriate workflow after reviewing the content, languages, intended use, audience, and quality requirements."
          />
          <div className="content-matrix" role="table" aria-label="Typical AI and human review models by content type">
            <div className="content-row content-header" role="row">
              <div className="content-cell" role="columnheader">Content Type</div>
              <div className="content-cell" role="columnheader">Typical Starting Workflow</div>
              <div className="content-cell" role="columnheader">Important Review Focus</div>
            </div>
            {contentTypes.map(([type, workflow, focus]) => (
              <div className="content-row" role="row" key={type}>
                <div className="content-cell" role="cell" data-label="Content Type">{type}</div>
                <div className="content-cell" role="cell" data-label="Typical Starting Workflow">{workflow}</div>
                <div className="content-cell" role="cell" data-label="Important Review Focus">{focus}</div>
              </div>
            ))}
          </div>
          <p className="content-note">These are typical starting points, not automatic classifications. Language-pair performance, source quality, market requirements, available language assets, and the consequences of an error can change the recommended workflow.</p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell human-led-layout">
          <div>
            <SectionHeading
              eyebrow="Responsible AI Use"
              title="When AI Should Not Be the Starting Point"
              text="Stepes evaluates the complete production outcome rather than assuming that AI translation is always the fastest, least expensive, or lowest-risk option."
              dark
            />
          </div>
          <div>
            <div className="human-led-list">
              {[
                ["The Content Depends on Creativity", "Taglines, campaigns, executive narratives, and emotionally sensitive communications may require concept development, professional copy adaptation, or transcreation."],
                ["The Source Is Ambiguous or Poorly Structured", "AI can reproduce or amplify unclear source language. Direct professional engagement with the source may be more effective when meaning depends on unresolved ambiguity."],
                ["Errors Could Have Serious Consequences", "Certain health, safety, legal, regulatory, or financial content may require a human-led or independently revised process."],
                ["AI Output Requires Excessive Rewriting", "When reviewers must reconstruct most of the translation, direct human translation may produce a stronger result and make better use of specialist expertise."],
                ["The Language Pair or Domain Is Not Suitable", "Model performance varies across languages, domains, content structures, and available context. Success in one content stream should not be generalized automatically."],
                ["The Required Process Excludes AI", "Client policy, contracts, regulators, or internal governance may specify approved production methods or restrict particular technologies."],
                ["Original Authorship Matters", "Some content should feel as though it was originally created for the target market, making human translation, copy adaptation, or transcreation the stronger starting point."],
              ].map(([title, text]) => (
                <article className="human-led-item" key={title}>
                  <span className="human-led-marker" aria-hidden="true" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
            <div className="human-led-quote">Responsible AI adoption is not measured by how much content is automated. It is measured by whether each workflow is appropriate, controlled, and effective for its intended use.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Choose the Right Human Review Path"
            text="These services work together, but each begins from a different customer need. The distinction helps your team choose the right starting point without duplicating review effort."
          />
          <div className="mtpe-comparison three-way">
            <div className="mtpe-column is-current">
              <div className="review-column-label">Managed End-to-End Workflow</div>
              <h3>AI Translation With Human Review</h3>
              <p>Use this approach when Stepes should help manage the complete process—from content assessment and AI suitability through language assets, translation, professional human review, QA, approvals, and delivery.</p>
              <ul>
                <li>Begins before or at translation</li>
                <li>Risk-matched review model</li>
                <li>Translation memory and terminology governance</li>
                <li>Human review, QA, approvals, and delivery in one workflow</li>
              </ul>
            </div>
            <div className="mtpe-column">
              <div className="review-column-label">Independent Evaluation and Validation</div>
              <h3>AI Translation Review Services</h3>
              <p>Use this focused service when AI-translated content already exists and your primary need is qualified, independent evaluation of its accuracy, completeness, terminology, risk, and fitness for the intended use.</p>
              <ul>
                <li>Starts with existing AI-translated content</li>
                <li>Professional source-to-target assessment</li>
                <li>Error identification, validation, and quality findings</li>
                <li>Useful before release, remediation, or workflow decisions</li>
              </ul>
              <div className="mtpe-link">
                <TextLink href={AI_REVIEW_URL}>AI Translation Review Services</TextLink>
              </div>
            </div>
            <div className="mtpe-column">
              <div className="review-column-label">Professional Correction</div>
              <h3>Machine Translation Post-Editing</h3>
              <p>Use MTPE when machine- or AI-translated output already exists and the goal is for professional linguists to correct and refine it to an agreed target quality level.</p>
              <ul>
                <li>Starts with existing machine- or AI-translated output</li>
                <li>Professional source-to-target correction</li>
                <li>Terminology, completeness, fluency, and QA</li>
                <li>Defined post-editing scope based on intended use</li>
              </ul>
              <div className="mtpe-link">
                <TextLink href={`${STEPS_URL}/machine-translation-post-editing/`}>Machine Translation Post-Editing</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blush-section">
        <div className="shell">
          <div className="pilot-panel">
            <div className="pilot-top">
              <SectionHeading
                eyebrow="Validate Before You Scale"
                title="Start With a Representative AI Translation Pilot"
              />
              <p className="pilot-top-copy">A representative pilot provides evidence for deciding where AI translation creates value, which content requires human review, and how the approach should scale across languages and content streams.</p>
            </div>
            <div className="pilot-steps">
              {[
                ["01", "Select Representative Content", "Use typical subject matter, difficult terminology, priority languages, repeated content, and known production challenges."],
                ["02", "Define Quality Criteria", "Agree on intended use, audience, terminology, style, review coverage, error tolerance, specialists, and acceptance requirements."],
                ["03", "Configure the Workflow", "Test language assets, one or more approved AI approaches, review levels, QA checks, reviewer qualifications, and approval stages."],
                ["04", "Evaluate the Result", "Assess accuracy, completeness, terminology, fluency, style, locale fit, technical integrity, editing effort, and recurring patterns."],
                ["05", "Recommend the Production Model", "Identify suitable content, human-led exceptions, language-specific considerations, quality controls, estimates, and scaling priorities."],
              ].map(([number, title, text]) => (
                <article className="pilot-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="pilot-bottom">
              <div className="pilot-deliverables" aria-label="Potential pilot deliverables">
                {[
                  "Corrected Multilingual Samples",
                  "Linguistic Findings",
                  "Error Profile",
                  "Terminology Recommendations",
                  "Workflow Recommendation",
                  "Production Estimate",
                  "Rollout Plan",
                ].map((item) => <span className="deliverable-chip" key={item}>{item}</span>)}
              </div>
              <Button href={`${STEPS_URL}/contact-us/`}>Start an AI Translation Pilot</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Why Enterprises Choose Stepes for AI + Human Translation"
            text="Stepes combines professional language expertise, enterprise technology, governed linguistic assets, and risk-matched quality controls in one managed solution."
          />
          <div className="why-grid">
            {[
              ["One Managed Solution", "Bring AI translation, professional linguists, project management, translation memory, terminology, automated QA, review, approval, and delivery together in one managed workflow."],
              ["Professional Language Expertise", "Support technical, legal, medical, financial, product, software, marketing, and customer-facing content with qualified native-language professionals and subject specialists."],
              ["Risk-Matched Quality", "Configure review depth, acceptance criteria, automated checks, specialist validation, and approvals around the content’s intended use and business risk."],
              ["Governed Language Assets", "Reuse approved translations, terminology, style guidance, and reviewer feedback to strengthen consistency across future projects and releases."],
              ["Connected Platform and Flexible Integration", "Manage requests, reviewers, questions, approvals, delivery, and program activity through connected workflows while working with Stepes or client-approved AI and localization technology."],
              ["Global Reach and Certified Quality Systems", "Support multilingual programs across 100+ languages with Stepes’ ISO 9001, ISO 17100, and ISO 13485 certified quality systems."],
            ].map(([title, text]) => (
              <article className="why-item" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="why-link-row">
            <TextLink href={`${STEPS_URL}/translation-languages/`}>Translation Languages</TextLink>
            <TextLink href={`${STEPS_URL}/iso-certified-translation-services/`}>ISO-Certified Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="section surface-section">
        <div className="shell">
          <SectionHeading
            title="Explore the AI + Human Translation Ecosystem"
            text="Connect this managed workflow with focused AI translation review, professional post-editing, platform capabilities, and governed language assets across enterprise multilingual operations."
          />
          <div className="related-list">
            {relatedLinks.map((item) => (
              <article className="related-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <TextLink href={item.href}>{item.action}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq-layout">
          <SectionHeading
            title="AI Translation and Human Review FAQs"
            text="Explore practical questions about human-in-the-loop translation, review coverage, technology selection, regulated content, quality measurement, security, and pilot programs."
          />
          <div className="faq-panel">
            {faqItems.map((item, index) => <FAQItem item={item} index={index} key={item.q} />)}
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="shell">
          <div className="final-cta">
            <div className="final-cta-content">
              <Eyebrow dark>Build the Right Workflow</Eyebrow>
              <h2>Combine AI Efficiency With Professional Linguistic Accountability</h2>
              <p>Share your content, target languages, terminology resources, and quality requirements. Stepes will help determine the appropriate combination of AI translation, professional human review, quality assurance, and stakeholder approval for your program.</p>
              <div className="btn-row">
                <Button href={`${STEPS_URL}/contact-us/`}>Start an AI Translation Pilot</Button>
                <Button href={`${STEPS_URL}/contact-us/`} secondary>Talk to an Expert</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AIHumanTranslationWorkflowPage;
