import React, { useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  magentaLight: "#F2A7C6",
  ink: "#111827",
  slate: "#475569",
  muted: "#64748B",
  border: "#E2E8F0",
  surface: "#F8FAFC",
  dark: "#15131B",
  white: "#FFFFFF",
};

const Arrow = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.8 5.5-3.8 9s1.3 6.5 3.8 9" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-4A4.5 4.5 0 0 0 3 18.5V20" />
        <circle cx="9.5" cy="7" r="4" />
        <path d="M17 4.7a4 4 0 0 1 0 7.6M21 20v-1.5a4.5 4.5 0 0 0-3.4-4.35" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.2 12.2 2.4 2.4 5.4-5.5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
        <path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
      </svg>
    ),
    strategy: (
      <svg {...common}>
        <path d="M4 19V5M4 5h7l-1.5 3L11 11H4M13 5h7l-1.5 3L20 11h-7" />
      </svg>
    ),
    collect: (
      <svg {...common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h5M8 17h7" />
      </svg>
    ),
    annotate: (
      <svg {...common}>
        <path d="M4 5h11v14H4z" />
        <path d="m15 9 5-3v12l-5-3M7.5 9h4M7.5 13h4" />
      </svg>
    ),
    evaluate: (
      <svg {...common}>
        <path d="M4 18h16M6 15l3-4 3 2 5-7" />
        <circle cx="6" cy="15" r="1" />
        <circle cx="9" cy="11" r="1" />
        <circle cx="12" cy="13" r="1" />
        <circle cx="17" cy="6" r="1" />
      </svg>
    ),
    improve: (
      <svg {...common}>
        <path d="M4 15a8 8 0 0 0 14 2M20 9a8 8 0 0 0-14-2" />
        <path d="m18 13 .3 4.3L14 18M6 11 5.7 6.7 10 6" />
      </svg>
    ),
    text: (
      <svg {...common}>
        <path d="M4 5h16M8 5v14M16 5v14M6 19h4M14 19h4" />
      </svg>
    ),
    mic: (
      <svg {...common}>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
      </svg>
    ),
    chat: (
      <svg {...common}>
        <path d="M4 5h16v11H9l-5 4V5Z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
    review: (
      <svg {...common}>
        <path d="M5 4h11v16H5z" />
        <path d="M8 8h5M8 12h4M8 16h3M17 8l2 2 3-4" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.3 15.3 4.7 4.7" />
      </svg>
    ),
    voice: (
      <svg {...common}>
        <path d="M4 12h2l2-5 3 10 3-12 3 7h3" />
      </svg>
    ),
    safety: (
      <svg {...common}>
        <path d="M12 3 20 6v5c0 5-3.2 8.5-8 10-4.8-1.5-8-5-8-10V6l8-3Z" />
        <path d="M12 8v5M12 16h.01" />
      </svg>
    ),
    enterprise: (
      <svg {...common}>
        <path d="M4 21V8l8-5 8 5v13M8 21v-5h8v5M8 10h.01M12 10h.01M16 10h.01M8 13h.01M12 13h.01M16 13h.01" />
      </svg>
    ),
    medical: (
      <svg {...common}>
        <path d="M9 4h6v5h5v6h-5v5H9v-5H4V9h5V4Z" />
      </svg>
    ),
    finance: (
      <svg {...common}>
        <path d="M4 20h16M6 17V9M10 17V9M14 17V9M18 17V9M3 8l9-5 9 5H3Z" />
      </svg>
    ),
    legal: (
      <svg {...common}>
        <path d="M12 4v16M6 7h12M7 7l-3 6h6L7 7ZM17 7l-3 6h6l-3-6ZM8 20h8" />
      </svg>
    ),
    software: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M7 6h.01M10 6h.01M8 13l-2 2 2 2M16 13l2 2-2 2M13 12l-2 6" />
      </svg>
    ),
    retail: (
      <svg {...common}>
        <path d="M5 8h14l-1 12H6L5 8ZM8 8a4 4 0 0 1 8 0" />
      </svg>
    ),
    media: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </svg>
    ),
    trace: (
      <svg {...common}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 6h5a5 5 0 0 1 5 5v5M16 18h-5a5 5 0 0 1-5-5V8" />
      </svg>
    ),
  };

  return icons[name] || icons.spark;
};

const services = [
  {
    icon: "collect",
    title: "Custom Multilingual Data Collection and Creation",
    description:
      "Create native-language prompts, queries, user utterances, domain-specific scenarios, conversations, and training datasets aligned with your model objectives and target markets.",
    bullets: ["Native-language text and prompt creation", "Locale and dialect coverage", "Training, validation, and test datasets"],
    link: "https://www.stepes.com/multilingual-ai-data-services/#contact",
    linkLabel: "Discuss a Custom Dataset",
  },
  {
    icon: "text",
    title: "Multilingual Text Annotation Services",
    description:
      "Transform multilingual text into structured, model-ready data for NLP, LLM, search, classification, moderation, and conversational AI systems.",
    bullets: ["Intent, entity, and sentiment labels", "Semantic and safety classification", "Customer-defined taxonomies"],
    link: "https://www.stepes.com/multilingual-text-annotation-services/",
    linkLabel: "Explore Text Annotation Services",
  },
  {
    icon: "mic",
    title: "Multilingual Voice and Conversation Data Collection",
    description:
      "Collect authentic speech and conversational data across languages, accents, dialects, devices, and real-world recording environments.",
    bullets: ["Scripted and spontaneous speech", "Multi-speaker conversations", "Transcription, segmentation, and metadata"],
    link: "https://www.stepes.com/multilingual-voice-conversation-data-collection/",
    linkLabel: "Explore Voice Data Collection",
  },
  {
    icon: "chat",
    title: "Conversational AI Training Data Services",
    description:
      "Develop multilingual datasets for chatbots, virtual assistants, enterprise agents, customer support automation, and conversational language models.",
    bullets: ["Intent and utterance libraries", "Prompt-response pairs", "Multi-turn dialogue and edge cases"],
    link: "https://www.stepes.com/conversational-ai-training-data-services/",
    linkLabel: "Explore Conversational AI Data",
  },
  {
    icon: "evaluate",
    title: "Multilingual LLM Evaluation Services",
    description:
      "Measure model performance through structured human evaluation across languages, regions, domains, use cases, and model versions.",
    bullets: ["Rubric-based scoring and pairwise comparison", "Factuality, safety, and instruction adherence", "Cross-language benchmarking"],
    link: "https://www.stepes.com/multilingual-llm-evaluation-services/",
    linkLabel: "Explore LLM Evaluation Services",
  },
  {
    icon: "review",
    title: "Multilingual AI Output Review",
    description:
      "Review, score, correct, approve, or rewrite outputs generated by LLMs, chatbots, voice systems, and enterprise AI applications.",
    bullets: ["Linguistic and contextual accuracy", "Terminology, tone, and cultural fit", "Corrected or approved outputs"],
    link: "https://www.stepes.com/multilingual-ai-output-review/",
    linkLabel: "Explore AI Output Review",
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Strategy and Design",
    copy: "Define languages, use cases, data structures, taxonomies, evaluation criteria, quality thresholds, and delivery requirements.",
    icon: "strategy",
  },
  {
    number: "02",
    title: "Data Creation",
    copy: "Create or collect native text, speech, prompts, conversations, domain scenarios, and regional language variations.",
    icon: "collect",
  },
  {
    number: "03",
    title: "Annotation",
    copy: "Apply intent, entity, sentiment, safety, speaker, linguistic, and task-specific labels with calibrated guidelines.",
    icon: "annotate",
  },
  {
    number: "04",
    title: "Evaluation",
    copy: "Assess accuracy, relevance, factuality, fluency, instruction adherence, safety, and cultural suitability.",
    icon: "evaluate",
  },
  {
    number: "05",
    title: "Improvement",
    copy: "Deliver corrected data, model comparisons, error analysis, new edge cases, and recurring production monitoring.",
    icon: "improve",
  },
];

const applications = [
  {
    icon: "spark",
    title: "Large Language Models and Generative AI",
    copy: "Create and evaluate prompts, responses, instruction-tuning data, factuality, hallucinations, model preferences, and multilingual behavior.",
  },
  {
    icon: "chat",
    title: "Chatbots and Virtual Assistants",
    copy: "Improve intent recognition, dialogue flows, response quality, escalation handling, naturalness, and market-specific conversational behavior.",
  },
  {
    icon: "voice",
    title: "Voice AI, ASR, and TTS",
    copy: "Collect speech data, represent accents and dialects, create aligned transcripts, and evaluate pronunciation and output naturalness.",
  },
  {
    icon: "search",
    title: "Search and Language Understanding",
    copy: "Support query classification, entity recognition, semantic matching, search relevance, recommendation systems, and multilingual NLU.",
  },
  {
    icon: "safety",
    title: "Trust, Safety, and Content Moderation",
    copy: "Label harmful content, evaluate safety responses, review cultural sensitivity, and develop locale-specific policy examples and edge cases.",
  },
  {
    icon: "enterprise",
    title: "Enterprise AI and Customer Support",
    copy: "Improve knowledge assistants, employee copilots, customer service automation, enterprise search, product support, and domain-specific tools.",
  },
];

const dataGroups = [
  {
    icon: "text",
    title: "Text and Language Data",
    items: [
      "Text corpora and user queries",
      "Prompts, responses, and utterances",
      "Intent and dialogue libraries",
      "Domain-specific content",
      "Training, validation, and test sets",
      "Parallel and comparable datasets",
    ],
  },
  {
    icon: "mic",
    title: "Speech and Conversation Data",
    items: [
      "Scripted and spontaneous speech",
      "Voice commands and wake words",
      "Multi-speaker conversations",
      "Aligned transcriptions",
      "Timestamps and segmentation",
      "Accent and recording metadata",
    ],
  },
  {
    icon: "annotate",
    title: "Annotation and Metadata",
    items: [
      "Intent, entity, and sentiment labels",
      "Dialogue acts and speaker labels",
      "Safety and content classifications",
      "Relevance and preference judgments",
      "Linguistic attributes",
      "Dataset documentation",
    ],
  },
  {
    icon: "evaluate",
    title: "Evaluation and Review Outputs",
    items: [
      "Scored and ranked responses",
      "Error and hallucination taxonomies",
      "Corrected AI outputs",
      "Cross-language comparisons",
      "Model-version analyses",
      "QA and validation reports",
    ],
  },
];

const workflow = [
  {
    title: "Requirements and Dataset Design",
    copy: "Align business objectives, target languages, users, data types, volumes, structures, annotation needs, evaluation criteria, and delivery formats.",
  },
  {
    title: "Guideline and Rubric Development",
    copy: "Define categories, examples, decision rules, scoring scales, edge cases, acceptance criteria, and escalation procedures.",
  },
  {
    title: "Linguist and Expert Selection",
    copy: "Match contributors by native-language proficiency, locale, dialect, subject-matter expertise, task experience, and qualification results.",
  },
  {
    title: "Pilot and Calibration",
    copy: "Test representative samples, compare decisions, resolve ambiguity, refine instructions, and align language teams before production.",
  },
  {
    title: "Production and Quality Control",
    copy: "Apply automated validation, sampling, secondary review, language-lead oversight, issue tracking, and corrective feedback.",
  },
  {
    title: "Cross-Language Quality Assurance",
    copy: "Maintain shared definitions and acceptance thresholds while preserving legitimate linguistic, cultural, and market-specific differences.",
  },
  {
    title: "Delivery and Reporting",
    copy: "Provide structured datasets, review records, QA summaries, error findings, methodology documentation, and recurring delivery support.",
  },
];

const languages = [
  {
    title: "Native-Language Data Creation",
    copy: "Professional linguists create original prompts, queries, utterances, conversations, and responses directly in the target language to capture authentic local expression.",
  },
  {
    title: "Translated and Localized Datasets",
    copy: "Translate and localize established source-language datasets while preserving labels, intent, functional meaning, and global taxonomy alignment.",
  },
  {
    title: "Hybrid Dataset Development",
    copy: "Combine translated seed data with native-language expansion, regional variants, slang, edge cases, and locally relevant scenarios.",
  },
];

const domains = [
  {
    icon: "medical",
    title: "Life Sciences and Healthcare",
    copy: "Medical terminology, clinical information, patient communication, healthcare assistants, scientific content, and regulated language.",
  },
  {
    icon: "finance",
    title: "Financial Services and Insurance",
    copy: "Banking assistants, financial terminology, customer interactions, policies, claims, disclosures, and risk-sensitive communications.",
  },
  {
    icon: "legal",
    title: "Legal and Government",
    copy: "Contracts, policies, public information, citizen services, compliance content, and legal knowledge applications.",
  },
  {
    icon: "software",
    title: "Software, SaaS, and Technology",
    copy: "Product assistants, technical support, developer tools, IT help desks, documentation, and multilingual software experiences.",
  },
  {
    icon: "retail",
    title: "Retail and Customer Experience",
    copy: "Product search, shopping assistants, recommendations, reviews, e-commerce content, and customer-support conversations.",
  },
  {
    icon: "media",
    title: "Media, Gaming, and Digital Content",
    copy: "Dialogue generation, content moderation, tone consistency, audience classification, community interactions, and interactive experiences.",
  },
];

const whyStepes = [
  {
    title: "Language-First AI Expertise",
    copy: "Stepes brings professional linguistic expertise to text, speech, conversation, model evaluation, and generated output review.",
  },
  {
    title: "Professional Native Linguists",
    copy: "Our global network understands natural phrasing, regional vocabulary, tone, terminology, culture, and real-world user expectations.",
  },
  {
    title: "Domain-Specialized Reviewers",
    copy: "Technical, medical, financial, legal, and other specialized programs can incorporate qualified subject-matter expertise.",
  },
  {
    title: "Connected End-to-End Services",
    copy: "Coordinate data creation, translation, annotation, speech collection, evaluation, output review, and continuous improvement with one partner.",
  },
  {
    title: "Scalable Enterprise Workflows",
    copy: "Support pilots, multilingual production programs, recurring data batches, and ongoing AI quality initiatives with structured controls.",
  },
];

const engagements = [
  {
    label: "Start With a Pilot",
    title: "Pilot and Proof of Concept",
    copy: "Test a language, validate taxonomies, calibrate evaluators, establish thresholds, confirm delivery formats, and identify edge cases.",
  },
  {
    label: "Scale Data Production",
    title: "Production Data Programs",
    copy: "Scale multilingual datasets, recurring data creation, high-volume annotation, speech collection, and training or validation programs.",
  },
  {
    label: "Compare and Validate",
    title: "Evaluation and Benchmarking",
    copy: "Compare model candidates, test releases, measure language expansion, identify gaps, track regressions, and prioritize improvements.",
  },
  {
    label: "Maintain Production Quality",
    title: "Continuous AI Quality",
    copy: "Monitor deployed systems, evaluate production outputs, compare versions, test prompt changes, and feed corrected data back into improvement cycles.",
  },
];

const faqs = [
  {
    question: "What are multilingual AI data services?",
    answer:
      "Multilingual AI data services create, collect, annotate, evaluate, and improve language data for artificial intelligence systems across multiple languages. They support large language models, chatbots, speech recognition, voice assistants, search, content moderation, and enterprise AI applications.",
  },
  {
    question: "How are AI data services different from AI translation services?",
    answer:
      "AI translation services use artificial intelligence to translate business content. Multilingual AI data services focus on the datasets and human evaluation used to train, test, and improve AI systems. Deliverables may include annotated data, native-language prompts, speech recordings, scored responses, preference rankings, or corrected model outputs.",
  },
  {
    question: "What types of multilingual AI data can Stepes create or collect?",
    answer:
      "Stepes can support text, speech, conversation, prompt-response, annotation, evaluation, and model-output data. Examples include user queries, intent libraries, voice recordings, multi-turn dialogues, domain-specific prompts, human-written responses, annotated text, scored model outputs, preference decisions, and validation datasets.",
  },
  {
    question: "Can Stepes create native-language data instead of translating English datasets?",
    answer:
      "Yes. Stepes can create original prompts, queries, utterances, conversations, and responses directly in the target language. Projects may also use translated data or a hybrid approach that combines localized seed content with native-language expansion and market-specific edge cases.",
  },
  {
    question: "How do you ensure annotation consistency across languages?",
    answer:
      "Consistency begins with clear definitions, examples, decision rules, and edge-case guidance. Stepes uses pilot annotation, evaluator calibration, language leads, automated validation, sampling, secondary review, adjudication, and corrective feedback while documenting legitimate locale-specific differences.",
  },
  {
    question: "Can Stepes support domain-specific or regulated AI applications?",
    answer:
      "Yes. Stepes can assign linguists, reviewers, and subject-matter experts with experience in life sciences, healthcare, financial services, legal, technology, manufacturing, and other specialized industries. Workflow controls can be adjusted according to the sensitivity, risk, and intended use of the content.",
  },
  {
    question: "What is the difference between LLM evaluation and AI output review?",
    answer:
      "LLM evaluation measures model performance using a structured framework and may score or rank responses for factuality, relevance, instruction adherence, fluency, safety, or cultural appropriateness. AI output review focuses on editing, correcting, approving, rejecting, or rewriting generated content. A program can include both.",
  },
  {
    question: "What dataset formats and deliverables can you provide?",
    answer:
      "Stepes can support common structured formats such as JSON, JSONL, CSV, TSV, XML, spreadsheets, audio files, aligned transcripts, annotation exports, and customer-defined schemas. Structures, field names, identifiers, validation rules, and delivery packages are agreed upon before production.",
  },
  {
    question: "Can we begin with a pilot before launching a larger program?",
    answer:
      "Yes. A pilot can validate dataset design, guidelines, contributor qualifications, quality thresholds, throughput expectations, and delivery formats before production. Pilot findings can then be incorporated into the full multilingual program.",
  },
  {
    question: "Do you provide ongoing AI evaluation after deployment?",
    answer:
      "Yes. Continuous programs can monitor production outputs, compare model versions, test prompt changes, identify new edge cases, validate language expansion, and track quality trends over time as the AI system and its users evolve.",
  },
];

const resources = [
  {
    title: "How to Build a Multilingual AI Training Dataset",
    copy: "Define target markets, choose a data strategy, design multilingual taxonomies, qualify contributors, and establish measurable quality controls.",
    href: "https://www.stepes.com/resources/ai-translation-insights/how-to-build-a-multilingual-ai-training-dataset/",
    linkLabel: "Read the Dataset Planning Guide",
  },
  {
    title: "Native Data Creation vs. Translated AI Training Data",
    copy: "Compare native-language creation, translation, localization, and hybrid methods for globally aligned and locally authentic datasets.",
    href: "https://www.stepes.com/resources/ai-translation-insights/native-data-creation-vs-translated-ai-training-data/",
    linkLabel: "Compare Data Creation Approaches",
  },
  {
    title: "How to Design a Multilingual LLM Evaluation Rubric",
    copy: "Explore evaluation dimensions, scoring scales, examples, calibration methods, and cross-language considerations for human evaluation.",
    href: "https://www.stepes.com/resources/ai-translation-insights/multilingual-llm-evaluation-rubric/",
    linkLabel: "Explore the Evaluation Rubric Guide",
  },
];

function Eyebrow({ children, dark = false }) {
  return <div className={`sw-eyebrow${dark ? " sw-eyebrow--dark" : ""}`}>{children}</div>;
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={`sw-editorial-link${inverse ? " sw-editorial-link--inverse" : ""}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

function FaqItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div className={`sw-faq-item${open ? " is-open" : ""}`}>
      <button
        id={triggerId}
        className="sw-faq-trigger"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span className="sw-faq-plus" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <div
        id={panelId}
        className="sw-faq-panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function MultilingualAIDataServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-ai-data-page">
      <style>{`
        :root {
          --sw-magenta: ${BRAND.magenta};
          --sw-magenta-dark: ${BRAND.magentaDark};
          --sw-magenta-deep: ${BRAND.magentaDeep};
          --sw-blush: ${BRAND.blush};
          --sw-magenta-light: ${BRAND.magentaLight};
          --sw-ink: ${BRAND.ink};
          --sw-slate: ${BRAND.slate};
          --sw-muted: ${BRAND.muted};
          --sw-border: ${BRAND.border};
          --sw-surface: ${BRAND.surface};
          --sw-dark: ${BRAND.dark};
          --sw-white: ${BRAND.white};
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .stepes-ai-data-page {
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          background: var(--sw-white);
          color: var(--sw-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.62;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .stepes-ai-data-page a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-ai-data-page button,
        .stepes-ai-data-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .stepes-ai-data-page svg {
          display: block;
          flex: 0 0 auto;
        }

        .sw-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .sw-section {
          padding: 96px 0;
        }

        .sw-section--dense {
          padding: 80px 0;
        }

        .sw-section--surface {
          background: var(--sw-surface);
        }

        .sw-section--blush {
          background: var(--sw-blush);
        }

        .sw-section--dark {
          color: var(--sw-white);
          background:
            radial-gradient(circle at 86% 18%, rgba(193, 29, 99, 0.16), transparent 30%),
            radial-gradient(circle at 12% 82%, rgba(242, 167, 198, 0.08), transparent 28%),
            var(--sw-dark);
        }

        .sw-eyebrow {
          margin: 0 0 18px;
          color: var(--sw-magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sw-eyebrow--dark {
          color: var(--sw-magenta-light);
        }

        .sw-section-head {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sw-section-head--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sw-section-head h2,
        .sw-split-heading h2,
        .sw-final-cta h2 {
          margin: 0;
          color: inherit;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sw-section-head p,
        .sw-split-heading p,
        .sw-final-cta p {
          margin: 20px 0 0;
          max-width: 800px;
          color: var(--sw-slate);
          font-size: 18px;
          line-height: 1.64;
        }

        .sw-section--dark .sw-section-head p,
        .sw-section--dark .sw-split-heading p {
          color: #D5D0DA;
        }

        .sw-hero {
          position: relative;
          padding: 104px 0 88px;
          background:
            radial-gradient(circle at 8% 18%, rgba(193, 29, 99, 0.08), transparent 30%),
            radial-gradient(circle at 92% 72%, rgba(167, 25, 84, 0.06), transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 72%, #FBFCFE 100%);
        }

        .sw-hero-copy {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .sw-hero h1 {
          margin: 0;
          color: var(--sw-ink);
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.038em;
        }

        .sw-hero-lede {
          max-width: 850px;
          margin: 24px auto 0;
          color: var(--sw-slate);
          font-size: 18px;
          line-height: 1.68;
        }

        .sw-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 32px;
        }

        .sw-button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease;
        }

        .sw-button svg {
          width: 18px;
          height: 18px;
        }

        .stepes-ai-data-page a.sw-button--primary,
        .stepes-ai-data-page a.sw-button--primary:link,
        .stepes-ai-data-page a.sw-button--primary:visited,
        .stepes-ai-data-page a.sw-button--primary:hover,
        .stepes-ai-data-page a.sw-button--primary:active,
        .stepes-ai-data-page a.sw-button--primary:focus,
        .stepes-ai-data-page a.sw-button--primary:focus-visible {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        .stepes-ai-data-page a.sw-button--primary svg,
        .stepes-ai-data-page a.sw-button--primary svg * {
          color: #FFFFFF !important;
          stroke: #FFFFFF !important;
        }

        .stepes-ai-data-page a.sw-button--primary {
          background: var(--sw-magenta);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
        }

        .stepes-ai-data-page a.sw-button--primary:hover {
          background: var(--sw-magenta-dark);
          transform: translateY(-1px);
        }

        .sw-button--secondary {
          color: var(--sw-magenta-deep);
          border-color: #DFD7DC;
          background: rgba(255, 255, 255, 0.9);
        }

        .sw-button--secondary:hover {
          border-color: #CFC2C9;
          background: #FFFFFF;
          transform: translateY(-1px);
        }

        .sw-button:focus-visible,
        .sw-editorial-link:focus-visible,
        .sw-faq-trigger:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 3px;
        }

        .sw-hero-system {
          position: relative;
          margin-top: 64px;
          padding: 38px;
          border: 1px solid var(--sw-border);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 28px 70px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        }

        .sw-hero-system::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(rgba(226, 232, 240, 0.38) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 232, 240, 0.38) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.42), transparent 95%);
        }

        .sw-hero-system-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 220px 1fr;
          align-items: center;
          gap: 34px;
        }

        .sw-hero-data-column {
          display: grid;
          gap: 14px;
        }

        .sw-data-node {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: center;
          gap: 14px;
          min-height: 78px;
          padding: 14px 16px;
          border: 1px solid var(--sw-border);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.96);
        }

        .sw-data-node-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-data-node strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.28;
        }

        .sw-data-node span {
          display: block;
          margin-top: 3px;
          color: var(--sw-muted);
          font-size: 14px;
          line-height: 1.35;
        }

        .sw-ai-core {
          position: relative;
          min-height: 220px;
          display: grid;
          place-items: center;
          padding: 24px;
          border-radius: 50%;
          color: #FFFFFF;
          text-align: center;
          background:
            radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.22), transparent 38%),
            linear-gradient(135deg, var(--sw-magenta) 0%, var(--sw-magenta-deep) 100%);
          box-shadow: 0 24px 60px rgba(122, 21, 66, 0.28);
        }

        .sw-ai-core::before,
        .sw-ai-core::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(193, 29, 99, 0.2);
          border-radius: 50%;
        }

        .sw-ai-core::before {
          inset: -18px;
        }

        .sw-ai-core::after {
          inset: -34px;
        }

        .sw-ai-core-inner {
          position: relative;
          z-index: 1;
        }

        .sw-ai-core-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          margin: 0 auto 12px;
          border-radius: 14px;
          color: #FFFFFF;
          background: rgba(255,255,255,0.14);
        }

        .sw-ai-core strong {
          display: block;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.25;
        }

        .sw-ai-core span {
          display: block;
          margin-top: 8px;
          color: #FCE7F1;
          font-size: 14px;
          line-height: 1.4;
        }

        .sw-hero-outcomes {
          display: grid;
          gap: 14px;
        }

        .sw-outcome-row {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          align-items: center;
          gap: 14px;
          min-height: 78px;
          padding: 14px 16px;
          border: 1px solid var(--sw-border);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.96);
        }

        .sw-outcome-row strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.28;
        }

        .sw-outcome-row span {
          display: block;
          margin-top: 3px;
          color: var(--sw-muted);
          font-size: 14px;
          line-height: 1.35;
        }

        .sw-outcome-arrow {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-outcome-arrow svg {
          width: 17px;
          height: 17px;
        }

        .sw-trust-strip {
          border-top: 1px solid var(--sw-border);
          border-bottom: 1px solid var(--sw-border);
          background: #FFFFFF;
        }

        .sw-trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          padding: 18px 0;
        }

        .sw-trust-item {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 14px 8px;
          text-align: left;
        }

        .sw-trust-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 13px;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-trust-item strong {
          display: block;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-intro-grid {
          display: grid;
          grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.7fr);
          gap: 72px;
          align-items: start;
        }

        .sw-split-heading {
          position: sticky;
          top: 28px;
        }

        .sw-prose {
          max-width: 780px;
        }

        .sw-prose p {
          margin: 0 0 20px;
          color: var(--sw-slate);
          font-size: 17px;
          line-height: 1.7;
        }

        .sw-prose p:last-child {
          margin-bottom: 0;
        }

        .sw-definition {
          margin-bottom: 26px;
          padding: 28px 30px;
          border-left: 3px solid var(--sw-magenta);
          border-radius: 0 20px 20px 0;
          background: var(--sw-surface);
        }

        .sw-definition p {
          margin: 0;
          color: var(--sw-ink);
          font-size: 19px;
          line-height: 1.62;
        }

        .sw-inline-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 28px;
          margin: 30px 0 0;
          padding: 0;
          list-style: none;
        }

        .sw-inline-list li,
        .sw-challenge-list li {
          position: relative;
          min-width: 0;
          padding-left: 28px;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.55;
        }

        .sw-inline-list li::before,
        .sw-challenge-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.72em;
          width: 12px;
          height: 2px;
          border-radius: 999px;
          background: var(--sw-magenta);
        }

        .sw-compare-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 42px;
          border: 1px solid var(--sw-border);
          border-radius: 26px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sw-compare-side {
          padding: 30px;
        }

        .sw-compare-side + .sw-compare-side {
          border-left: 1px solid var(--sw-border);
          background: var(--sw-blush);
        }

        .sw-compare-side h3 {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.28;
        }

        .sw-compare-side p {
          margin: 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.65;
        }

        .sw-challenge-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(400px, 0.9fr);
          gap: 72px;
          align-items: start;
        }

        .sw-challenge-copy h2 {
          margin: 0;
          max-width: 660px;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sw-challenge-copy p {
          margin: 22px 0 0;
          max-width: 720px;
          color: var(--sw-slate);
          font-size: 18px;
          line-height: 1.68;
        }

        .sw-challenge-panel {
          padding: 32px;
          border: 1px solid #EDDCE4;
          border-radius: 28px;
          background: rgba(255,255,255,0.78);
        }

        .sw-challenge-panel h3 {
          margin: 0 0 22px;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sw-challenge-list {
          display: grid;
          gap: 14px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sw-lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.15);
        }

        .sw-lifecycle-step {
          position: relative;
          padding: 32px 24px 36px;
          border-left: 1px solid rgba(255,255,255,0.12);
        }

        .sw-lifecycle-step:first-child {
          border-left: 0;
        }

        .sw-lifecycle-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 44px;
        }

        .sw-lifecycle-number {
          color: var(--sw-magenta-light);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .sw-lifecycle-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: #FFFFFF;
          background: rgba(255,255,255,0.04);
        }

        .sw-lifecycle-step h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-lifecycle-step p {
          margin: 14px 0 0;
          color: #CFC8D3;
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-services-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 64px;
        }

        .sw-service-item {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 20px;
          padding: 34px 0 36px;
          border-top: 1px solid var(--sw-border);
        }

        .sw-service-item:nth-child(-n + 2) {
          border-top: 0;
          padding-top: 0;
        }

        .sw-service-icon,
        .sw-application-icon,
        .sw-domain-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-service-item h3 {
          margin: 0;
          font-size: 23px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.012em;
        }

        .sw-service-item p {
          margin: 13px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.65;
        }

        .sw-service-bullets {
          display: grid;
          gap: 7px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .sw-service-bullets li {
          position: relative;
          padding-left: 20px;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.5;
        }

        .sw-service-bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.68em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 2px solid var(--sw-magenta);
        }

        .sw-editorial-link {
          width: fit-content;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          color: var(--sw-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .sw-editorial-link:visited {
          color: var(--sw-magenta);
        }

        .sw-editorial-link svg {
          width: 17px;
          height: 17px;
          transition: transform 180ms ease;
        }

        .sw-editorial-link:hover svg {
          transform: translateX(3px);
        }

        .sw-editorial-link--inverse,
        .sw-editorial-link--inverse:visited {
          color: var(--sw-magenta-light);
        }

        .sw-data-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.7fr);
          gap: 64px;
          align-items: start;
        }

        .sw-data-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--sw-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sw-data-group {
          min-width: 0;
          padding: 30px;
          border-left: 1px solid var(--sw-border);
          border-top: 1px solid var(--sw-border);
        }

        .sw-data-group:nth-child(odd) {
          border-left: 0;
        }

        .sw-data-group:nth-child(-n + 2) {
          border-top: 0;
        }

        .sw-data-group-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .sw-data-group-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-data-group h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-data-group ul {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .sw-data-group li {
          position: relative;
          padding-left: 18px;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.52;
        }

        .sw-data-group li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.69em;
          width: 7px;
          height: 2px;
          background: var(--sw-magenta);
        }

        .sw-format-band {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 28px;
          align-items: center;
          margin-top: 26px;
          padding: 24px 28px;
          border-radius: 22px;
          color: #FFFFFF;
          background: var(--sw-dark);
        }

        .sw-format-band strong {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;
        }

        .sw-format-band p {
          margin: 0;
          color: #D5D0DA;
          font-size: 16px;
          line-height: 1.55;
        }

        .sw-applications-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sw-border);
          border-left: 1px solid var(--sw-border);
        }

        .sw-application {
          min-width: 0;
          padding: 32px;
          border-right: 1px solid var(--sw-border);
          border-bottom: 1px solid var(--sw-border);
          background: #FFFFFF;
        }

        .sw-application h3 {
          margin: 20px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.33;
        }

        .sw-application p {
          margin: 13px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-workflow-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(330px, 0.75fr);
          gap: 72px;
          align-items: start;
        }

        .sw-workflow-list {
          border-top: 1px solid var(--sw-border);
        }

        .sw-workflow-step {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 24px;
          padding: 27px 0;
          border-bottom: 1px solid var(--sw-border);
        }

        .sw-workflow-number {
          padding-top: 3px;
          color: var(--sw-magenta);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.09em;
        }

        .sw-workflow-step h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-workflow-step p {
          margin: 9px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-quality-panel {
          position: sticky;
          top: 28px;
          padding: 32px;
          border-radius: 28px;
          color: #FFFFFF;
          background:
            linear-gradient(145deg, rgba(193, 29, 99, 0.2), transparent 55%),
            var(--sw-dark);
        }

        .sw-quality-panel .sw-eyebrow {
          margin-bottom: 16px;
        }

        .sw-quality-panel h3 {
          margin: 0;
          font-size: 25px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sw-quality-panel p {
          margin: 16px 0 0;
          color: #D5D0DA;
          font-size: 16px;
          line-height: 1.65;
        }

        .sw-quality-points {
          display: grid;
          gap: 0;
          margin-top: 26px;
          border-top: 1px solid rgba(255,255,255,0.14);
        }

        .sw-quality-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          color: #F5F2F6;
          font-size: 16px;
          line-height: 1.5;
        }

        .sw-quality-point svg {
          width: 20px;
          height: 20px;
          margin-top: 2px;
          color: var(--sw-magenta-light);
        }

        .sw-governance-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid rgba(255,255,255,0.15);
          border-left: 1px solid rgba(255,255,255,0.12);
        }

        .sw-governance-item {
          padding: 30px 26px;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .sw-governance-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          color: var(--sw-magenta-light);
          background: rgba(255,255,255,0.04);
        }

        .sw-governance-item h3 {
          margin: 20px 0 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-governance-item p {
          margin: 12px 0 0;
          color: #D5D0DA;
          font-size: 16px;
          line-height: 1.6;
        }

        .sw-governance-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px 34px;
          margin-top: 34px;
        }

        .sw-language-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 70px;
          align-items: center;
        }

        .sw-language-visual {
          position: relative;
          min-height: 520px;
          display: grid;
          place-items: center;
          padding: 44px;
          border: 1px solid var(--sw-border);
          border-radius: 30px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 45%, rgba(193, 29, 99, 0.14), transparent 28%),
            linear-gradient(145deg, #FFFFFF 0%, #F9F6F8 100%);
        }

        .sw-language-visual::before,
        .sw-language-visual::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: 50%;
        }

        .sw-language-visual::before {
          width: 380px;
          height: 380px;
        }

        .sw-language-visual::after {
          width: 270px;
          height: 270px;
        }

        .sw-language-core {
          position: relative;
          z-index: 1;
          width: 190px;
          height: 190px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #FFFFFF;
          text-align: center;
          background: linear-gradient(135deg, var(--sw-magenta) 0%, var(--sw-magenta-deep) 100%);
          box-shadow: 0 26px 58px rgba(122, 21, 66, 0.24);
        }

        .sw-language-core strong {
          display: block;
          font-size: 33px;
          font-weight: 600;
          line-height: 1;
        }

        .sw-language-core span {
          display: block;
          margin-top: 8px;
          font-size: 15px;
          line-height: 1.4;
        }

        .sw-language-tag {
          position: absolute;
          z-index: 2;
          padding: 10px 14px;
          border: 1px solid var(--sw-border);
          border-radius: 999px;
          color: var(--sw-slate);
          font-size: 14px;
          line-height: 1;
          background: rgba(255,255,255,0.95);
          box-shadow: 0 10px 28px rgba(15,23,42,0.07);
        }

        .sw-language-tag--1 { top: 13%; left: 12%; }
        .sw-language-tag--2 { top: 18%; right: 10%; }
        .sw-language-tag--3 { top: 47%; left: 6%; }
        .sw-language-tag--4 { top: 49%; right: 5%; }
        .sw-language-tag--5 { bottom: 17%; left: 14%; }
        .sw-language-tag--6 { bottom: 12%; right: 14%; }

        .sw-language-copy h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sw-language-copy > p {
          margin: 22px 0 0;
          color: var(--sw-slate);
          font-size: 18px;
          line-height: 1.68;
        }

        .sw-language-strategies {
          margin-top: 34px;
          border-top: 1px solid var(--sw-border);
        }

        .sw-language-strategy {
          padding: 24px 0;
          border-bottom: 1px solid var(--sw-border);
        }

        .sw-language-strategy h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-language-strategy p {
          margin: 9px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-domains-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sw-border);
          border-left: 1px solid var(--sw-border);
        }

        .sw-domain {
          min-width: 0;
          padding: 30px;
          border-right: 1px solid var(--sw-border);
          border-bottom: 1px solid var(--sw-border);
          background: #FFFFFF;
        }

        .sw-domain h3 {
          margin: 18px 0 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-domain p {
          margin: 12px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-why-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid #E6CED9;
        }

        .sw-why-item {
          min-width: 0;
          padding: 28px 24px 0;
          border-left: 1px solid #E6CED9;
        }

        .sw-why-item:first-child {
          padding-left: 0;
          border-left: 0;
        }

        .sw-why-item h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-why-item p {
          margin: 12px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-engagement-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 50px;
          border: 1px solid var(--sw-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sw-engagement {
          min-width: 0;
          padding: 32px;
          border-left: 1px solid var(--sw-border);
        }

        .sw-engagement:first-child {
          border-left: 0;
        }

        .sw-engagement-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sw-magenta);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sw-engagement h3 {
          margin: 24px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-engagement p {
          margin: 12px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-engagement-action {
          margin-top: 34px;
        }

        .sw-program-shell {
          border: 1px solid var(--sw-border);
          border-radius: 30px;
          overflow: hidden;
          background: #FFFFFF;
          box-shadow: 0 24px 70px rgba(15,23,42,0.06);
        }

        .sw-program-top {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
        }

        .sw-program-cell {
          min-width: 0;
          padding: 32px;
          border-left: 1px solid var(--sw-border);
        }

        .sw-program-cell:first-child {
          border-left: 0;
        }

        .sw-program-label {
          color: var(--sw-magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sw-program-cell h3 {
          margin: 14px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-program-cell p {
          margin: 10px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-program-flow {
          padding: 34px 32px;
          border-top: 1px solid var(--sw-border);
          background: var(--sw-surface);
        }

        .sw-program-flow-title {
          margin: 0 0 22px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .sw-program-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .sw-program-step {
          min-width: 0;
          padding: 18px;
          border: 1px solid var(--sw-border);
          border-radius: 18px;
          background: #FFFFFF;
        }

        .sw-program-step span {
          display: block;
          color: var(--sw-magenta);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .sw-program-step strong {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .sw-faq-shell {
          border-top: 1px solid var(--sw-border);
        }

        .sw-faq-item {
          border-bottom: 1px solid var(--sw-border);
        }

        .sw-faq-trigger {
          width: 100%;
          min-height: 82px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 36px;
          align-items: center;
          gap: 28px;
          padding: 22px 0;
          border: 0;
          color: var(--sw-ink);
          text-align: left;
          background: transparent;
          cursor: pointer;
        }

        .sw-faq-trigger > span:first-child {
          font-size: 19px;
          font-weight: 600;
          line-height: 1.45;
        }

        .sw-faq-plus {
          position: relative;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid var(--sw-border);
          border-radius: 50%;
          color: var(--sw-magenta);
          background: #FFFFFF;
        }

        .sw-faq-plus span {
          position: absolute;
          width: 13px;
          height: 1.5px;
          background: currentColor;
          transition: transform 180ms ease;
        }

        .sw-faq-plus span:last-child {
          transform: rotate(90deg);
        }

        .sw-faq-item.is-open .sw-faq-plus span:last-child {
          transform: rotate(0deg);
        }

        .sw-faq-panel {
          max-width: 860px;
          padding: 0 56px 26px 0;
        }

        .sw-faq-panel p {
          margin: 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.68;
        }

        .sw-resources-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .sw-resource {
          min-width: 0;
          display: flex;
          flex-direction: column;
          min-height: 310px;
          padding: 30px;
          border: 1px solid var(--sw-border);
          border-radius: 24px;
          background: #FFFFFF;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .sw-resource:hover {
          transform: translateY(-3px);
          border-color: #D8CAD1;
          box-shadow: 0 20px 48px rgba(15,23,42,0.08);
        }

        .sw-resource-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: var(--sw-magenta);
          background: var(--sw-blush);
        }

        .sw-resource h3 {
          margin: 24px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sw-resource p {
          margin: 13px 0 0;
          color: var(--sw-slate);
          font-size: 16px;
          line-height: 1.62;
        }

        .sw-resource .sw-editorial-link {
          margin-top: auto;
          padding-top: 22px;
        }

        .sw-final-wrap {
          padding: 24px 0 80px;
          background: #FFFFFF;
        }

        .sw-final-cta {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.55fr);
          gap: 54px;
          align-items: center;
          padding: 64px;
          border: 1px solid #EAD6DF;
          border-radius: 30px;
          overflow: hidden;
          background:
            radial-gradient(circle at 88% 20%, rgba(193, 29, 99, 0.12), transparent 28%),
            linear-gradient(135deg, #FFF9FC 0%, var(--sw-blush) 100%);
        }

        .sw-final-cta::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          right: -160px;
          bottom: -200px;
          border: 1px solid rgba(193,29,99,0.12);
          border-radius: 50%;
        }

        .sw-final-cta p {
          max-width: 760px;
        }

        .sw-final-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .sw-final-art {
          position: relative;
          min-height: 260px;
          display: grid;
          place-items: center;
        }

        .sw-final-orbit {
          position: absolute;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(193,29,99,0.18);
          border-radius: 50%;
        }

        .sw-final-orbit::before,
        .sw-final-orbit::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(193,29,99,0.14);
          border-radius: 50%;
        }

        .sw-final-orbit::before {
          inset: 30px;
        }

        .sw-final-orbit::after {
          inset: 65px;
        }

        .sw-final-core {
          position: relative;
          z-index: 1;
          width: 112px;
          height: 112px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #FFFFFF;
          background: linear-gradient(135deg, var(--sw-magenta), var(--sw-magenta-deep));
          box-shadow: 0 22px 42px rgba(122,21,66,0.22);
        }

        .sw-final-core svg {
          width: 42px;
          height: 42px;
        }

        .sw-final-mini {
          position: absolute;
          z-index: 2;
          min-width: 104px;
          padding: 10px 12px;
          border: 1px solid #E5D9DF;
          border-radius: 999px;
          color: var(--sw-slate);
          font-size: 14px;
          line-height: 1;
          text-align: center;
          background: rgba(255,255,255,0.95);
          box-shadow: 0 10px 26px rgba(15,23,42,0.08);
        }

        .sw-final-mini--1 { top: 17px; left: 50%; transform: translateX(-50%); }
        .sw-final-mini--2 { right: 0; top: 50%; transform: translateY(-50%); }
        .sw-final-mini--3 { bottom: 17px; left: 50%; transform: translateX(-50%); }
        .sw-final-mini--4 { left: 0; top: 50%; transform: translateY(-50%); }

        @media (max-width: 1180px) {
          .sw-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .sw-hero-system-grid {
            grid-template-columns: 1fr 190px 1fr;
            gap: 26px;
          }

          .sw-ai-core {
            min-height: 190px;
          }

          .sw-lifecycle-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sw-lifecycle-step:nth-child(4),
          .sw-lifecycle-step:nth-child(5) {
            border-top: 1px solid rgba(255,255,255,0.12);
          }

          .sw-lifecycle-step:nth-child(4) {
            border-left: 0;
          }

          .sw-governance-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-why-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sw-why-item:nth-child(4) {
            padding-left: 0;
            border-left: 0;
          }

          .sw-why-item:nth-child(n + 4) {
            padding-top: 32px;
            border-top: 1px solid #E6CED9;
          }

          .sw-engagement-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-engagement:nth-child(3) {
            border-left: 0;
          }

          .sw-engagement:nth-child(n + 3) {
            border-top: 1px solid var(--sw-border);
          }
        }

        @media (max-width: 900px) {
          .sw-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .sw-section {
            padding: 80px 0;
          }

          .sw-section--dense {
            padding: 72px 0;
          }

          .sw-section-head h2,
          .sw-split-heading h2,
          .sw-final-cta h2,
          .sw-challenge-copy h2,
          .sw-language-copy h2 {
            font-size: 32px;
          }

          .sw-hero {
            padding: 92px 0 76px;
          }

          .sw-hero h1 {
            font-size: 42px;
          }

          .sw-hero-system {
            padding: 28px;
          }

          .sw-hero-system-grid {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .sw-ai-core {
            width: 190px;
            min-height: 190px;
            margin: 6px auto;
          }

          .sw-hero-data-column,
          .sw-hero-outcomes {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sw-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-trust-grid {
            gap: 8px 18px;
            padding: 16px 0;
          }

          .sw-trust-item:last-child {
            grid-column: 1 / -1;
          }

          .sw-intro-grid,
          .sw-challenge-grid,
          .sw-data-layout,
          .sw-workflow-layout,
          .sw-language-layout {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .sw-split-heading,
          .sw-quality-panel {
            position: static;
          }

          .sw-services-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .sw-service-item:nth-child(2) {
            border-top: 1px solid var(--sw-border);
            padding-top: 34px;
          }

          .sw-applications-grid,
          .sw-domains-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-lifecycle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-lifecycle-step {
            border-top: 1px solid rgba(255,255,255,0.12);
            border-left: 1px solid rgba(255,255,255,0.12);
          }

          .sw-lifecycle-step:nth-child(-n + 2) {
            border-top: 0;
          }

          .sw-lifecycle-step:nth-child(odd) {
            border-left: 0;
          }

          .sw-lifecycle-step:last-child {
            grid-column: 1 / -1;
            border-left: 0;
          }

          .sw-lifecycle-step:last-child p {
            max-width: 680px;
          }

          .sw-language-copy {
            order: 1;
          }

          .sw-language-visual {
            order: 2;
          }

          .sw-resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-resource:last-child {
            grid-column: 1 / -1;
            min-height: 0;
          }

          .sw-format-band {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sw-language-visual {
            min-height: 460px;
          }

          .sw-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-why-item:nth-child(3),
          .sw-why-item:nth-child(5) {
            padding-left: 0;
            border-left: 0;
          }

          .sw-why-item:nth-child(n + 3) {
            padding-top: 32px;
            border-top: 1px solid #E6CED9;
          }

          .sw-program-top {
            grid-template-columns: 1fr;
          }

          .sw-program-cell {
            border-left: 0;
            border-top: 1px solid var(--sw-border);
          }

          .sw-program-cell:first-child {
            border-top: 0;
          }

          .sw-program-flow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sw-final-cta {
            grid-template-columns: 1fr;
            padding: 52px;
          }

          .sw-final-art {
            min-height: 300px;
          }
        }

        @media (max-width: 620px) {
          .sw-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .sw-section,
          .sw-section--dense {
            padding: 68px 0;
          }

          .sw-section-head {
            margin-bottom: 38px;
          }

          .sw-section-head h2,
          .sw-split-heading h2,
          .sw-final-cta h2,
          .sw-challenge-copy h2,
          .sw-language-copy h2 {
            font-size: 30px;
            line-height: 1.18;
          }

          .sw-section-head p,
          .sw-split-heading p,
          .sw-final-cta p,
          .sw-challenge-copy p,
          .sw-language-copy > p {
            font-size: 18px;
          }

          .sw-hero {
            padding: 72px 0 64px;
          }

          .sw-hero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .sw-hero-lede {
            font-size: 18px;
          }

          .sw-hero-actions,
          .sw-final-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .sw-button {
            width: 100%;
          }

          .sw-hero-system {
            margin-top: 48px;
            padding: 20px;
            border-radius: 24px;
          }

          .sw-hero-data-column,
          .sw-hero-outcomes {
            grid-template-columns: 1fr;
          }

          .sw-hero-data-column > *,
          .sw-hero-outcomes > * {
            min-width: 0;
          }

          .sw-data-node,
          .sw-outcome-row {
            min-height: 72px;
          }

          .sw-ai-core {
            width: 168px;
            min-height: 168px;
          }

          .sw-ai-core::before {
            inset: -12px;
          }

          .sw-ai-core::after {
            inset: -24px;
          }

          .sw-trust-item {
            min-height: 74px;
            justify-content: flex-start;
            padding: 12px 8px;
          }

          .sw-trust-item:last-child {
            justify-content: center;
          }

          .sw-definition {
            padding: 24px;
          }

          .sw-definition p {
            font-size: 18px;
          }

          .sw-inline-list {
            grid-template-columns: 1fr;
          }

          .sw-compare-panel {
            grid-template-columns: 1fr;
          }

          .sw-compare-side + .sw-compare-side {
            border-top: 1px solid var(--sw-border);
            border-left: 0;
          }

          .sw-challenge-panel {
            padding: 26px;
          }

          .sw-lifecycle-grid {
            grid-template-columns: 1fr;
          }

          .sw-lifecycle-step:last-child {
            grid-column: auto;
          }

          .sw-lifecycle-step {
            padding: 28px 0;
            border-top: 1px solid rgba(255,255,255,0.12);
            border-left: 0;
          }

          .sw-lifecycle-step:first-child {
            border-top: 0;
          }

          .sw-lifecycle-top {
            margin-bottom: 24px;
          }

          .sw-service-item {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            padding: 30px 0;
          }

          .sw-service-item:nth-child(2) {
            padding-top: 30px;
          }

          .sw-service-icon,
          .sw-application-icon,
          .sw-domain-icon {
            width: 44px;
            height: 44px;
          }

          .sw-service-item h3 {
            font-size: 21px;
          }

          .sw-service-item h3,
          .sw-data-group h3,
          .sw-application h3,
          .sw-domain h3,
          .sw-engagement h3,
          .sw-resource h3,
          .sw-program-cell h3,
          .sw-editorial-link span {
            overflow-wrap: anywhere;
          }

          .sw-data-panel {
            grid-template-columns: 1fr;
          }

          .sw-data-group {
            padding: 26px;
            border-left: 0;
            border-top: 1px solid var(--sw-border);
          }

          .sw-data-group:first-child {
            border-top: 0;
          }

          .sw-data-group:nth-child(2) {
            border-top: 1px solid var(--sw-border);
          }

          .sw-format-band {
            padding: 22px;
          }

          .sw-applications-grid,
          .sw-domains-grid {
            grid-template-columns: 1fr;
          }

          .sw-application,
          .sw-domain {
            padding: 28px 24px;
          }

          .sw-workflow-step {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 16px;
          }

          .sw-quality-panel {
            padding: 28px;
          }

          .sw-governance-grid {
            grid-template-columns: 1fr;
          }

          .sw-governance-item {
            padding: 28px 0;
            border-right: 0;
          }

          .sw-language-visual {
            min-height: 400px;
            padding: 28px 20px;
          }

          .sw-language-visual::before {
            width: 300px;
            height: 300px;
          }

          .sw-language-visual::after {
            width: 210px;
            height: 210px;
          }

          .sw-language-core {
            width: 154px;
            height: 154px;
          }

          .sw-language-core strong {
            font-size: 28px;
          }

          .sw-language-tag {
            padding: 8px 10px;
            font-size: 14px;
          }

          .sw-language-tag--1 { top: 10%; left: 4%; }
          .sw-language-tag--2 { top: 12%; right: 3%; }
          .sw-language-tag--3 { top: 48%; left: 0; }
          .sw-language-tag--4 { top: 50%; right: 0; }
          .sw-language-tag--5 { bottom: 10%; left: 5%; }
          .sw-language-tag--6 { bottom: 8%; right: 5%; }

          .sw-why-grid {
            grid-template-columns: 1fr;
          }

          .sw-why-item,
          .sw-why-item:first-child,
          .sw-why-item:nth-child(3),
          .sw-why-item:nth-child(4),
          .sw-why-item:nth-child(5) {
            padding: 28px 0;
            border-top: 1px solid #E6CED9;
            border-left: 0;
          }

          .sw-why-item:first-child {
            border-top: 0;
          }

          .sw-engagement-grid {
            grid-template-columns: 1fr;
          }

          .sw-engagement {
            padding: 28px;
            border-top: 1px solid var(--sw-border);
            border-left: 0;
          }

          .sw-engagement:first-child {
            border-top: 0;
          }

          .sw-program-cell {
            padding: 28px 24px;
          }

          .sw-program-flow {
            padding: 30px 24px;
          }

          .sw-program-flow-grid {
            grid-template-columns: 1fr;
          }

          .sw-faq-trigger {
            grid-template-columns: minmax(0, 1fr) 34px;
            gap: 18px;
            min-height: 76px;
          }

          .sw-faq-trigger > span:first-child {
            font-size: 18px;
          }

          .sw-faq-panel {
            padding-right: 0;
          }

          .sw-resources-grid {
            grid-template-columns: 1fr;
          }

          .sw-resource:last-child {
            grid-column: auto;
          }

          .sw-resource {
            min-height: 0;
          }

          .sw-final-wrap {
            padding: 12px 0 64px;
          }

          .sw-final-cta {
            padding: 40px 24px;
            border-radius: 26px;
          }

          .sw-final-art {
            min-height: 270px;
          }

          .sw-final-orbit {
            width: 220px;
            height: 220px;
          }

          .sw-final-mini {
            min-width: 88px;
            padding: 8px 10px;
          }
        }

        @media (max-width: 360px) {
          .sw-hero h1 {
            font-size: 36px;
          }

          .sw-trust-grid {
            grid-template-columns: 1fr;
          }

          .sw-trust-item,
          .sw-trust-item:last-child {
            grid-column: auto;
            justify-content: flex-start;
          }

          .sw-language-tag--3,
          .sw-language-tag--4 {
            display: none;
          }

          .sw-final-mini--2,
          .sw-final-mini--4 {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="sw-hero">
        <div className="sw-container">
          <div className="sw-hero-copy">
            <h1>Multilingual AI Data Services</h1>
            <p className="sw-hero-lede">
              Create, annotate, evaluate, and improve multilingual language data for large language models,
              conversational AI, speech systems, search, and enterprise AI applications across 100+ languages.
            </p>
            <div className="sw-hero-actions">
              <a className="sw-button sw-button--primary" href="https://www.stepes.com/contact-us/">
                Talk to an AI Data Specialist <Arrow />
              </a>
              <a
                className="sw-button sw-button--secondary"
                href="https://www.stepes.com/multilingual-ai-data-services/#ai-data-services"
              >
                Explore Our AI Data Services <Arrow />
              </a>
            </div>
          </div>

          <div className="sw-hero-system" aria-label="Multilingual AI data lifecycle illustration">
            <div className="sw-hero-system-grid">
              <div className="sw-hero-data-column">
                <div className="sw-data-node">
                  <div className="sw-data-node-icon"><Icon name="text" /></div>
                  <div>
                    <strong>Text and Prompts</strong>
                    <span>Native language data</span>
                  </div>
                </div>
                <div className="sw-data-node">
                  <div className="sw-data-node-icon"><Icon name="mic" /></div>
                  <div>
                    <strong>Voice and Speech</strong>
                    <span>Accents and dialects</span>
                  </div>
                </div>
                <div className="sw-data-node">
                  <div className="sw-data-node-icon"><Icon name="chat" /></div>
                  <div>
                    <strong>Conversations</strong>
                    <span>Real user scenarios</span>
                  </div>
                </div>
              </div>

              <div className="sw-ai-core">
                <div className="sw-ai-core-inner">
                  <div className="sw-ai-core-icon"><Icon name="spark" size={27} /></div>
                  <strong>Multilingual AI</strong>
                  <span>Training, evaluation, and continuous improvement</span>
                </div>
              </div>

              <div className="sw-hero-outcomes">
                <div className="sw-outcome-row">
                  <div>
                    <strong>More Accurate</strong>
                    <span>Cross-language performance</span>
                  </div>
                  <div className="sw-outcome-arrow"><Arrow /></div>
                </div>
                <div className="sw-outcome-row">
                  <div>
                    <strong>More Natural</strong>
                    <span>Local user experiences</span>
                  </div>
                  <div className="sw-outcome-arrow"><Arrow /></div>
                </div>
                <div className="sw-outcome-row">
                  <div>
                    <strong>More Reliable</strong>
                    <span>Human-in-the-loop quality</span>
                  </div>
                  <div className="sw-outcome-arrow"><Arrow /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-trust-strip" aria-label="Stepes multilingual AI data credentials">
        <div className="sw-container">
          <div className="sw-trust-grid">
            {[
              ["globe", "100+ Languages"],
              ["users", "Professional Native Linguists"],
              ["check", "Human-in-the-Loop QA"],
              ["shield", "Enterprise-Ready Workflows"],
              ["spark", "ISO-Certified Quality"],
            ].map(([icon, label]) => (
              <div className="sw-trust-item" key={label}>
                <div className="sw-trust-icon"><Icon name={icon} size={21} /></div>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-intro-grid">
            <div className="sw-split-heading">
              <h2>What Are Multilingual AI Data Services?</h2>
            </div>

            <div className="sw-prose">
              <div className="sw-definition">
                <p>
                  Multilingual AI data services create, collect, structure, annotate, evaluate, and improve the
                  language data used to train and validate artificial intelligence systems across languages and markets.
                </p>
              </div>
              <p>
                These services help large language models, chatbots, voice assistants, search applications,
                recommendation systems, customer support tools, and enterprise AI platforms perform more accurately
                and naturally for global users.
              </p>
              <p>
                Stepes supports the complete language-data lifecycle, from dataset strategy and native-language
                creation through annotation, structured human evaluation, AI output review, and continuous
                multilingual performance improvement.
              </p>

              <ul className="sw-inline-list">
                {[
                  "Native-language data creation and collection",
                  "Text, speech, and conversation annotation",
                  "Prompt-response and dialogue datasets",
                  "Human model evaluation and benchmarking",
                  "AI-generated output review and correction",
                  "Ongoing multilingual performance monitoring",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>

              <div className="sw-compare-panel">
                <div className="sw-compare-side">
                  <Eyebrow>AI Translation Services</Eyebrow>
                  <h3>Use AI to translate business content.</h3>
                  <p>
                    Translate documents, websites, software, multimedia, and other content from one language into another.
                  </p>
                </div>
                <div className="sw-compare-side">
                  <Eyebrow>Multilingual AI Data Services</Eyebrow>
                  <h3>Create and evaluate the data that improves AI systems.</h3>
                  <p>
                    Build prompts, annotations, speech datasets, human evaluations, and corrected outputs for model development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--blush">
        <div className="sw-container">
          <div className="sw-challenge-grid">
            <div className="sw-challenge-copy">
              <Eyebrow>Global AI Performance</Eyebrow>
              <h2>Better Global AI Starts With Better Multilingual Data</h2>
              <p>
                AI systems do not automatically perform equally well across every language. Users in different
                markets describe needs differently, use distinct terminology, structure questions differently,
                and expect different levels of formality, context, and conversational behavior.
              </p>
              <p>
                Simply translating an English dataset may not capture how people naturally ask questions, express
                sentiment, report problems, or interact with technology in another language. Stepes helps AI teams
                combine global data consistency with authentic local expression.
              </p>
            </div>

            <div className="sw-challenge-panel">
              <h3>Multilingual performance is shaped by:</h3>
              <ul className="sw-challenge-list">
                {[
                  "Uneven representation of languages in training data",
                  "Regional vocabulary, dialect, and accent differences",
                  "Cultural and contextual variation",
                  "Domain-specific terminology",
                  "Different user intents and conversational styles",
                  "English-centered datasets and literal translation",
                  "Inconsistent evaluation criteria between markets",
                  "Limited coverage of real-world local scenarios",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dark">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow dark>End-to-End Support</Eyebrow>
            <h2>Multilingual AI Data Across the Model Lifecycle</h2>
            <p>
              Engage Stepes for one specialized task or build a coordinated program spanning data strategy,
              creation, annotation, evaluation, and continuous model improvement.
            </p>
          </div>

          <div className="sw-lifecycle-grid">
            {lifecycle.map((item) => (
              <div className="sw-lifecycle-step" key={item.number}>
                <div className="sw-lifecycle-top">
                  <span className="sw-lifecycle-number">{item.number}</span>
                  <span className="sw-lifecycle-icon"><Icon name={item.icon} size={22} /></span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section" id="ai-data-services">
        <div className="sw-container">
          <div className="sw-section-head sw-section-head--center">
            <Eyebrow>Complete Service Portfolio</Eyebrow>
            <h2>Multilingual AI Data Services for Training, Evaluation, and Improvement</h2>
            <p>
              Build language-centric AI with specialized services for text, speech, conversations, large language
              models, and production AI outputs.
            </p>
          </div>

          <div className="sw-services-grid">
            {services.map((service) => (
              <article className="sw-service-item" key={service.title}>
                <div className="sw-service-icon"><Icon name={service.icon} /></div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="sw-service-bullets">
                    {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <EditorialLink href={service.link}>{service.linkLabel}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--surface">
        <div className="sw-container">
          <div className="sw-data-layout">
            <div className="sw-split-heading">
              <Eyebrow>Structured Deliverables</Eyebrow>
              <h2>Data Types and Deliverables Built for AI Workflows</h2>
              <p>
                Configure dataset structures, metadata fields, validation rules, naming conventions, and delivery
                formats around your model-development environment.
              </p>
            </div>

            <div>
              <div className="sw-data-panel">
                {dataGroups.map((group) => (
                  <div className="sw-data-group" key={group.title}>
                    <div className="sw-data-group-head">
                      <span className="sw-data-group-icon"><Icon name={group.icon} size={21} /></span>
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="sw-format-band">
                <strong>Flexible Delivery Formats</strong>
                <p>
                  JSON, JSONL, CSV, TSV, XML, structured spreadsheets, aligned transcripts, common audio formats,
                  annotation exports, and customer-defined schemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-section-head">
            <h2>Multilingual Data for Real-World AI Applications</h2>
            <p>
              Support consumer, enterprise, technical, and regulated AI systems with language data designed for
              real users, markets, and operating environments.
            </p>
          </div>

          <div className="sw-applications-grid">
            {applications.map((item) => (
              <article className="sw-application" key={item.title}>
                <div className="sw-application-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--surface">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow>Quality-Controlled Delivery</Eyebrow>
            <h2>How Stepes Delivers Consistent Multilingual AI Data</h2>
            <p>
              Clear guidelines, qualified contributors, structured calibration, and measurable quality controls
              create reliable datasets across languages and production cycles.
            </p>
          </div>

          <div className="sw-workflow-layout">
            <div className="sw-workflow-list">
              {workflow.map((item, index) => (
                <div className="sw-workflow-step" key={item.title}>
                  <div className="sw-workflow-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="sw-quality-panel">
              <Eyebrow dark>Quality by Design</Eyebrow>
              <h3>Controls matched to your data, risk, and AI use case.</h3>
              <p>
                Stepes configures the workflow around task complexity, intended model use, language coverage,
                production volume, and the consequences of an incorrect decision.
              </p>
              <div className="sw-quality-points">
                {[
                  "Project-specific contributor qualification",
                  "Pilot calibration and guideline refinement",
                  "Automated format and required-field validation",
                  "Sampling, secondary review, and adjudication",
                  "Language-lead oversight and corrective feedback",
                  "Documented delivery and quality reporting",
                ].map((point) => (
                  <div className="sw-quality-point" key={point}>
                    <Icon name="check" size={20} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--dark">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow dark>Enterprise Controls</Eyebrow>
            <h2>Quality, Governance, and Security for AI Data Programs</h2>
            <p>
              Protect sensitive data, preserve traceability, and maintain consistent project controls across
              languages, teams, dataset versions, and recurring deliveries.
            </p>
          </div>

          <div className="sw-governance-grid">
            {[
              {
                icon: "check",
                title: "Quality Controls",
                copy: "Defined instructions, qualified contributors, pilot calibration, validation, sampling, multi-level review, and acceptance criteria.",
              },
              {
                icon: "trace",
                title: "Governance and Traceability",
                copy: "Controlled dataset versions, defined roles, documented guideline changes, approval workflows, escalation, and issue-resolution records.",
              },
              {
                icon: "lock",
                title: "Security and Confidentiality",
                copy: "Controlled access, secure data exchange, confidentiality procedures, client-specific handling, retention, and deletion requirements.",
              },
              {
                icon: "shield",
                title: "Responsible Data Handling",
                copy: "Project-specific controls for personally identifiable information, contributor consent, sensitive content, and approved data use.",
              },
            ].map((item) => (
              <article className="sw-governance-item" key={item.title}>
                <div className="sw-governance-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="sw-governance-links">
            <EditorialLink inverse href="https://www.stepes.com/security/">Explore Stepes Security</EditorialLink>
            <EditorialLink inverse href="https://www.stepes.com/quality-system/">Explore Our Quality System</EditorialLink>
            <EditorialLink inverse href="https://www.stepes.com/iso-certifications/">View ISO Certifications</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-language-layout">
            <div className="sw-language-visual" aria-label="Global language coverage illustration">
              <span className="sw-language-tag sw-language-tag--1">Regional Variants</span>
              <span className="sw-language-tag sw-language-tag--2">Native Creation</span>
              <span className="sw-language-tag sw-language-tag--3">Dialects</span>
              <span className="sw-language-tag sw-language-tag--4">Domain Terms</span>
              <span className="sw-language-tag sw-language-tag--5">Code-Switching</span>
              <span className="sw-language-tag sw-language-tag--6">Local Context</span>
              <div className="sw-language-core">
                <div>
                  <strong>100+</strong>
                  <span>Languages Supported</span>
                </div>
              </div>
            </div>

            <div className="sw-language-copy">
              <h2>Language, Locale, and Dialect Expertise for Global AI</h2>
              <p>
                Multilingual AI requires more than broad language coverage. It requires an understanding of how
                language changes across regions, audiences, industries, writing systems, and communication settings.
              </p>

              <div className="sw-language-strategies">
                {languages.map((item) => (
                  <div className="sw-language-strategy" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                ))}
              </div>

              <EditorialLink href="https://www.stepes.com/languages/">Explore Stepes Language Coverage</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--surface">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow>Specialized Expertise</Eyebrow>
            <h2>Domain Expertise for Specialized and High-Stakes AI</h2>
            <p>
              Combine native-language expertise with qualified subject-matter knowledge for AI systems operating in
              technical, regulated, and industry-specific environments.
            </p>
          </div>

          <div className="sw-domains-grid">
            {domains.map((domain) => (
              <article className="sw-domain" key={domain.title}>
                <div className="sw-domain-icon"><Icon name={domain.icon} /></div>
                <h3>{domain.title}</h3>
                <p>{domain.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--blush">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow>Why Stepes</Eyebrow>
            <h2>A Language-First Partner for Multilingual AI Data</h2>
            <p>
              Bring together linguistic expertise, domain knowledge, structured workflows, and scalable human
              evaluation within one connected multilingual program.
            </p>
          </div>

          <div className="sw-why-grid">
            {whyStepes.map((item) => (
              <article className="sw-why-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-section-head sw-section-head--center">
            <Eyebrow>Flexible Engagement</Eyebrow>
            <h2>From Pilot Dataset to Global AI Program</h2>
            <p>
              Start with a focused proof of concept or build a long-term program for multilingual data creation,
              evaluation, production monitoring, and continuous improvement.
            </p>
          </div>

          <div className="sw-engagement-grid">
            {engagements.map((item) => (
              <article className="sw-engagement" key={item.title}>
                <div className="sw-engagement-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          <div className="sw-engagement-action">
            <a className="sw-button sw-button--primary" href="https://www.stepes.com/contact-us/">
              Discuss Your AI Data Requirements <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--surface">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow>Program Example</Eyebrow>
            <h2>A Representative Multilingual LLM Evaluation Program</h2>
            <p>
              Configure evaluation around a specific model, product, domain, user scenario, risk profile, or set of
              target-language markets.
            </p>
          </div>

          <div className="sw-program-shell">
            <div className="sw-program-top">
              <div className="sw-program-cell">
                <div className="sw-program-label">Objective</div>
                <h3>Validate global model behavior before deployment</h3>
                <p>
                  Determine whether responses remain accurate, relevant, safe, useful, and natural across target languages.
                </p>
              </div>
              <div className="sw-program-cell">
                <div className="sw-program-label">Representative Scope</div>
                <h3>Multiple languages and model variants</h3>
                <p>
                  Customer-support prompts, domain criteria, pairwise comparisons, rubric scoring, and error classification.
                </p>
              </div>
              <div className="sw-program-cell">
                <div className="sw-program-label">Potential Deliverables</div>
                <h3>Structured evaluation records and findings</h3>
                <p>
                  Per-response scores, model preferences, reviewer comments, error labels, corrected outputs, and comparisons.
                </p>
              </div>
            </div>

            <div className="sw-program-flow">
              <h3 className="sw-program-flow-title">Evaluation Workflow</h3>
              <div className="sw-program-flow-grid">
                {[
                  "Use Case Review",
                  "Rubric Development",
                  "Evaluator Qualification",
                  "Pilot Calibration",
                  "Production Evaluation",
                  "Adjudication",
                  "Error Analysis",
                  "Structured Delivery",
                ].map((item, index) => (
                  <div className="sw-program-step" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section">
        <div className="sw-container">
          <div className="sw-intro-grid">
            <div className="sw-split-heading">
              <h2>Multilingual AI Data Services FAQ</h2>
              <p>
                Answers to common questions about multilingual data creation, annotation, evaluation, formats,
                pilots, and ongoing AI quality support.
              </p>
            </div>

            <div className="sw-faq-shell">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  index={index}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sw-section sw-section--surface">
        <div className="sw-container">
          <div className="sw-section-head">
            <Eyebrow>Insights and Guidance</Eyebrow>
            <h2>Explore Multilingual AI Data Resources</h2>
            <p>
              Practical guidance for planning multilingual datasets, selecting a creation strategy, and building
              reliable human evaluation programs.
            </p>
          </div>

          <div className="sw-resources-grid">
            {resources.map((resource) => (
              <article className="sw-resource" key={resource.title}>
                <div className="sw-resource-icon"><Icon name="file" /></div>
                <h3>{resource.title}</h3>
                <p>{resource.copy}</p>
                <EditorialLink href={resource.href}>{resource.linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sw-final-wrap" id="contact">
        <div className="sw-container">
          <div className="sw-final-cta">
            <div>
              <Eyebrow>Start Your AI Data Program</Eyebrow>
              <h2>Build Better Multilingual AI With the Right Data</h2>
              <p>
                Improve how your AI understands, generates, and responds to language across global markets. Stepes
                combines multilingual data expertise, professional native linguists, domain specialists, structured
                quality controls, and scalable workflows from dataset design through production evaluation.
              </p>
              <div className="sw-final-actions">
                <a className="sw-button sw-button--primary" href="https://www.stepes.com/contact-us/">
                  Talk to an AI Data Specialist <Arrow />
                </a>
                <a
                  className="sw-button sw-button--secondary"
                  href="https://www.stepes.com/multilingual-ai-data-services/#ai-data-services"
                >
                  Explore Our AI Data Services <Arrow />
                </a>
              </div>
            </div>

            <div className="sw-final-art" aria-hidden="true">
              <div className="sw-final-orbit" />
              <div className="sw-final-core"><Icon name="spark" /></div>
              <span className="sw-final-mini sw-final-mini--1">Create</span>
              <span className="sw-final-mini sw-final-mini--2">Annotate</span>
              <span className="sw-final-mini sw-final-mini--3">Evaluate</span>
              <span className="sw-final-mini sw-final-mini--4">Improve</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
