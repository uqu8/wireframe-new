import React from "react";

const PAGE_URL = "https://www.stepes.com/ai-machine-learning-translation-services/";

const services = [
  {
    title: "Multilingual AI Data Services",
    text: "Create and prepare text, speech, conversational, and domain-specific language data for training, fine-tuning, retrieval, evaluation, and continuous model improvement.",
    href: "https://www.stepes.com/multilingual-ai-data-services/",
  },
  {
    title: "Multilingual Text Annotation",
    text: "Classify, label, segment, tag, and enrich multilingual text using your schemas, taxonomies, terminology, and quality requirements.",
    href: "https://www.stepes.com/multilingual-text-annotation-services/",
  },
  {
    title: "Voice and Conversation Data Collection",
    text: "Collect native-language speech, scripted recordings, spontaneous conversations, accents, dialects, and regional language variants.",
    href: "https://www.stepes.com/multilingual-voice-conversation-data-collection/",
  },
  {
    title: "Conversational AI Training Data",
    text: "Develop realistic intents, utterances, dialogues, prompts, responses, and edge cases for chatbots, copilots, enterprise agents, and virtual assistants.",
    href: "https://www.stepes.com/conversational-ai-training-data-services/",
  },
  {
    title: "Multilingual LLM Evaluation",
    text: "Evaluate model responses for accuracy, relevance, fluency, instruction following, cultural fit, terminology, safety criteria, and completeness.",
    href: "https://www.stepes.com/multilingual-llm-evaluation-services/",
  },
  {
    title: "Multilingual AI Output Review",
    text: "Review, classify, correct, and improve AI-generated content during model development and after deployment across global markets.",
    href: "https://www.stepes.com/multilingual-ai-output-review/",
  },
];

const lifecycle = [
  ["Plan", "Define languages, locales, data types, contributor profiles, guidelines, and evaluation criteria."],
  ["Create", "Build or adapt multilingual text, speech, conversational, and domain-specific datasets."],
  ["Annotate", "Label, classify, enrich, and structure language data for training and evaluation."],
  ["Evaluate", "Measure model quality across accuracy, relevance, fluency, culture, safety, and task performance."],
  ["Localize", "Globalize interfaces, prompts, documentation, help content, and the surrounding product experience."],
  ["Improve", "Review production outputs, compare model versions, and feed recurring issues into continuous improvement."],
];

const applications = [
  ["Large Language Models", "Prompt-response data, fine-tuning content, multilingual evaluation, output review, and product localization."],
  ["Conversational AI and Agents", "Intent data, dialogue creation, terminology control, response evaluation, and deployment validation."],
  ["Voice AI, ASR, and TTS", "Speech collection, transcription, pronunciation review, accent coverage, and localized voice experiences."],
  ["Search, NLU, and Recommendations", "Query data, entity labeling, intent classification, relevance evaluation, and regional behavior review."],
  ["Customer Support AI", "Knowledge-base localization, retrieval testing, answer verification, tone review, and multilingual optimization."],
  ["Computer Vision and Multimodal AI", "Captions, metadata, visual question answering, multimodal prompts, and language-based output assessment."],
  ["Robotics, Automotive, and Physical AI", "Voice commands, human-machine interfaces, operational terminology, and market-specific interaction data."],
  ["Domain-Specific Enterprise AI", "Specialized language data and evaluation for healthcare, finance, legal, manufacturing, retail, and other industries."],
];

const evaluationDimensions = [
  "Accuracy and factual consistency",
  "Relevance and task completion",
  "Fluency, grammar, and naturalness",
  "Instruction following and completeness",
  "Terminology and brand voice",
  "Cultural appropriateness and local fit",
  "Safety criteria and sensitive content",
  "Preferred-response correction and error classification",
];

const qualitySteps = [
  ["Requirements and guideline review", "Align languages, use cases, schemas, rubrics, deliverables, security expectations, and acceptance criteria."],
  ["Reviewer qualification and pilot", "Select native-language and domain-qualified reviewers, then validate the workflow with a representative pilot."],
  ["Calibration and guideline refinement", "Resolve edge cases, align scoring decisions, document examples, and improve reviewer consistency before scaling."],
  ["Multilingual production and QA", "Combine human review with automated checks for schema, fields, tags, missing entries, duplicates, and terminology."],
  ["Adjudication and structured reporting", "Escalate disputed cases, record corrections, categorize issues, and deliver traceable results for model teams."],
  ["Continuous feedback and improvement", "Apply customer feedback, monitor recurring errors, and compare performance across languages and model versions."],
];

const faqs = [
  [
    "What types of multilingual data can Stepes create for AI models?",
    "Stepes supports multilingual text, prompts, responses, search queries, intents, dialogues, speech recordings, transcriptions, annotations, classifications, evaluations, and domain-specific content. Programs can be designed for training, fine-tuning, retrieval, testing, and ongoing model improvement.",
  ],
  [
    "Should AI training data be translated or created natively?",
    "The right approach depends on the model, language, market, and intended behavior. Existing datasets can be translated and localized when structure and comparability matter. Native creation is often stronger for authentic phrasing, speech, intent patterns, and market-specific scenarios. Many programs use a hybrid model that combines translated seed data with native expansion and local edge cases.",
  ],
  [
    "Can Stepes evaluate multilingual LLM and generative AI outputs?",
    "Yes. Native-language evaluators can assess accuracy, relevance, fluency, instruction following, terminology, completeness, cultural fit, and customer-defined safety criteria. Stepes can also classify errors, provide corrected responses, support secondary review, and compare results across model versions.",
  ],
  [
    "Does Stepes support speech, accents, dialects, and regional variants?",
    "Yes. Speech and conversation programs can be designed around target languages, countries, accents, dialects, age groups, devices, recording environments, and other customer-defined contributor profiles. Coverage and sampling plans are confirmed during project scoping.",
  ],
  [
    "Can Stepes localize the full AI product as well as its training data?",
    "Yes. Stepes can localize AI interfaces, prompts, response templates, developer content, API documentation, model cards, help centers, onboarding, websites, marketing, policies, and customer communications so the model and surrounding product experience remain consistent across markets.",
  ],
  [
    "How does Stepes maintain quality across multiple languages?",
    "Quality is built through reviewer qualification, clear guidelines, pilot calibration, reference examples, automated validation, secondary review, adjudication, terminology control, and structured reporting. The workflow can be adapted to each language, data type, risk level, and model objective.",
  ],
  [
    "Can Stepes support ongoing evaluation after an AI product launches?",
    "Yes. Ongoing programs can include recurring output review, error monitoring, terminology updates, model-version comparison, regional quality checks, and feedback loops that help product and model teams improve multilingual performance over time.",
  ],
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="m8 12 2.6 2.6L16.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon({ size = 24 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21M12 3C9.8 5.5 8.7 8.5 8.7 12s1.1 6.5 3.3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ size = 24 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3 19 6v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.8 12 2 2 4.5-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon({ size = 24 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2.8c.8 4.4 2.9 6.5 7.2 7.2-4.3.8-6.4 2.9-7.2 7.2-.8-4.3-2.9-6.4-7.2-7.2 4.3-.7 6.4-2.8 7.2-7.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18.8 15.5c.3 1.7 1.1 2.5 2.8 2.8-1.7.3-2.5 1.1-2.8 2.8-.3-1.7-1.1-2.5-2.8-2.8 1.7-.3 2.5-1.1 2.8-2.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <svg className="hero-art" viewBox="0 0 620 520" role="img" aria-label="Multilingual data moving through an AI model with professional human review">
      <defs>
        <linearGradient id="panelFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FDF2F7" />
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="#172033" floodOpacity="0.09" />
        </filter>
      </defs>

      <path d="M82 146C147 78 229 54 313 73c79 18 132 77 184 142 37 46 71 115 36 173-33 56-109 67-180 70-88 5-198 9-258-55-62-67-79-184-13-257Z" fill="#FBF4F7" />
      <path d="M78 418c91 33 374 32 462-3" fill="none" stroke="#D7DCE4" strokeWidth="1.4" strokeLinecap="round" />

      <g filter="url(#softShadow)">
        <rect x="190" y="126" width="252" height="258" rx="30" fill="url(#panelFill)" stroke="#C8CED8" strokeWidth="1.6" />
      </g>
      <rect x="221" y="157" width="190" height="78" rx="19" fill="#FFFFFF" stroke="#8D98A8" strokeWidth="1.6" />
      <path d="M247 196h138" stroke="#D8DDE5" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="263" cy="186" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7" />
      <circle cx="316" cy="186" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7" />
      <circle cx="369" cy="186" r="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7" />
      <path d="M271 186h37M324 186h37" stroke="#8D98A8" strokeWidth="1.5" strokeLinecap="round" />
      <text x="316" y="220" textAnchor="middle" fontSize="15" fontWeight="600" fill="#253047">MULTILINGUAL AI</text>

      <rect x="221" y="256" width="89" height="92" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
      <path d="M241 304c9-18 17 19 27-3 8-17 16 13 25-2" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M241 285h50M241 320h50" stroke="#D7DCE4" strokeWidth="1.3" strokeLinecap="round" />
      <text x="266" y="338" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5D687A">VOICE</text>

      <rect x="321" y="256" width="90" height="92" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
      <path d="M344 281h44M344 294h35M344 307h41" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="386" cy="322" r="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.7" />
      <path d="m382 322 3 3 5-6" fill="none" stroke="#C11D63" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <text x="366" y="338" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5D687A">TEXT</text>

      <path d="M190 191H146" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M442 191h43" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M316 126V91" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M316 384v34" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />

      <g>
        <rect x="62" y="152" width="84" height="76" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
        <text x="104" y="183" textAnchor="middle" fontSize="17" fontWeight="600" fill="#253047">ES</text>
        <path d="M83 204h42" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g>
        <rect x="485" y="151" width="78" height="78" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
        <text x="524" y="184" textAnchor="middle" fontSize="17" fontWeight="600" fill="#253047">中文</text>
        <path d="M504 205h40" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g>
        <rect x="275" y="28" width="82" height="64" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
        <text x="316" y="67" textAnchor="middle" fontSize="17" fontWeight="600" fill="#253047">AR</text>
      </g>
      <g>
        <rect x="270" y="418" width="92" height="64" rx="18" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
        <text x="316" y="458" textAnchor="middle" fontSize="18" fontWeight="600" fill="#253047">日本語</text>
      </g>

      <path d="M146 190c20-12 27-12 44 1M442 191c17-12 26-12 43 0M316 92c-13 14-13 22 0 34M316 384c-13 12-13 22 0 34" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 7" />

      <g>
        <circle cx="511" cy="342" r="49" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
        <path d="M511 314 532 323v15c0 14-8 25-21 32-13-7-21-18-21-32v-15l21-9Z" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m501 340 7 7 14-16" fill="none" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="511" y="405" textAnchor="middle" fontSize="13" fontWeight="600" fill="#5D687A">HUMAN QA</text>
      </g>
      <path d="M442 310c31 4 35 10 43 22" fill="none" stroke="#8D98A8" strokeWidth="1.6" strokeLinecap="round" />

      <circle cx="108" cy="334" r="30" fill="#FFFFFF" stroke="#C8CED8" strokeWidth="1.5" />
      <path d="M93 335h30M108 320v30" stroke="#C11D63" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="108" cy="335" r="13" fill="none" stroke="#8D98A8" strokeWidth="1.5" />
      <path d="M138 334c24-5 35-2 52 12" fill="none" stroke="#8D98A8" strokeWidth="1.5" strokeLinecap="round" />

      <circle cx="74" cy="92" r="5" fill="#C11D63" />
      <circle cx="548" cy="89" r="5" fill="#C11D63" />
      <circle cx="570" cy="286" r="4" fill="#AEB7C4" />
      <circle cx="154" cy="438" r="4" fill="#AEB7C4" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <p className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</p>;
}

function SectionHeading({ eyebrow, title, intro, centered = false, dark = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}${dark ? " dark-copy" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

export default function StepesAIMachineLearningIndustryWireframe() {
  return (
    <div className="stepes-ai-page" data-canonical-url={PAGE_URL}>
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #101828;
          --ink-2: #253047;
          --copy: #4D5A6D;
          --muted: #697586;
          --line: #E2E7ED;
          --line-strong: #CBD2DC;
          --soft: #F6F8FA;
          --dark: #141A27;
          --dark-2: #1C2433;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-ai-page {
          min-width: 0;
          overflow-x: clip;
          background: #fff;
          color: var(--ink);
          font-family: Inter, Arial, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-ai-page a { text-decoration: none; }
        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .eyebrow {
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: .16em;
          text-transform: uppercase;
        }
        .eyebrow-dark { color: var(--pink-light); }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; }
        h1 {
          max-width: 670px;
          margin-bottom: 0;
          color: var(--ink);
          font-size: 48px;
          line-height: 1.06;
          letter-spacing: -.042em;
        }
        h2 {
          margin-bottom: 0;
          color: var(--ink);
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -.035em;
        }
        h3 {
          margin-bottom: 0;
          color: var(--ink);
          font-size: 24px;
          line-height: 1.22;
          letter-spacing: -.022em;
        }
        p, li { font-size: 16px; line-height: 1.75; }
        .body-large { font-size: 18px; line-height: 1.72; }
        .section-heading { max-width: 760px; }
        .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading.dark-copy h2, .section-heading.dark-copy .section-intro { color: #fff; }
        .section-intro { margin: 24px 0 0; max-width: 780px; color: var(--copy); font-size: 18px; line-height: 1.72; }
        .centered .section-intro { margin-left: auto; margin-right: auto; }
        .btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          padding: 13px 22px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
          border: 1px solid var(--magenta);
          box-shadow: 0 12px 30px rgba(193,29,99,.17);
        }
        .btn-primary *,
        .btn-primary svg,
        .btn-primary svg path { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
        .btn-primary:focus-visible, .btn-secondary:focus-visible, .editorial-link:focus-visible, summary:focus-visible {
          outline: 3px solid rgba(193,29,99,.23);
          outline-offset: 3px;
        }
        .btn-secondary {
          background: #fff;
          color: var(--ink-2);
          border: 1px solid var(--line-strong);
          box-shadow: 0 4px 14px rgba(16,24,40,.04);
        }
        .btn-secondary:visited { color: var(--ink-2); }
        .btn-secondary:hover { border-color: rgba(193,29,99,.45); transform: translateY(-1px); }
        .editorial-link {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
        }
        .editorial-link:visited { color: var(--magenta-deep); }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link svg { transition: transform .2s ease; }

        .hero {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 8% 12%, rgba(193,29,99,.07), transparent 25%),
            radial-gradient(circle at 92% 84%, rgba(193,29,99,.055), transparent 26%),
            #fff;
        }
        .hero-grid {
          min-height: 690px;
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(460px, 1.05fr);
          align-items: center;
          gap: 62px;
          padding-top: 96px;
          padding-bottom: 96px;
        }
        .hero-copy { position: relative; z-index: 2; }
        .hero-copy .body-large { max-width: 670px; margin: 26px 0 0; color: var(--copy); }
        .hero-art-wrap { position: relative; display: flex; align-items: center; justify-content: center; min-width: 0; }
        .hero-art { width: 100%; max-width: 620px; height: auto; display: block; }

        .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .trust-item { min-width: 0; padding: 27px 28px; }
        .trust-item + .trust-item { border-left: 1px solid var(--line); }
        .trust-title { margin: 0; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.4; }
        .trust-text { margin: 7px 0 0; color: var(--muted); font-size: 16px; line-height: 1.55; }

        .challenge-grid { display: grid; grid-template-columns: .82fr 1.18fr; align-items: start; gap: 86px; }
        .challenge-copy { max-width: 480px; }
        .challenge-copy .body-large { margin: 25px 0 0; color: var(--copy); }
        .challenge-list { border-top: 1px solid var(--line); }
        .challenge-row {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 18px;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }
        .challenge-row .check { color: var(--magenta); padding-top: 3px; }
        .challenge-row p { margin: 0; color: var(--copy); }
        .challenge-row strong { color: var(--ink-2); font-weight: 600; }

        .soft-section { background: var(--soft); }
        .lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          margin-top: 50px;
          border-top: 1px solid var(--line-strong);
          border-bottom: 1px solid var(--line-strong);
        }
        .lifecycle-step { position: relative; min-width: 0; padding: 28px 22px 30px 0; }
        .lifecycle-step + .lifecycle-step { padding-left: 22px; border-left: 1px solid var(--line); }
        .step-number { margin: 0 0 19px; color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .08em; }
        .lifecycle-step h3 { font-size: 20px; }
        .lifecycle-step p { margin: 13px 0 0; color: var(--copy); line-height: 1.65; }

        .services-list { margin-top: 52px; border-top: 1px solid var(--line); }
        .service-row {
          display: grid;
          grid-template-columns: 1fr 1.45fr auto;
          gap: 44px;
          align-items: center;
          min-height: 142px;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }
        .service-row h3 { font-size: 22px; }
        .service-row p { margin: 0; color: var(--copy); }
        .service-row .editorial-link { white-space: nowrap; }
        .service-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 36px;
          padding: 22px 26px;
          border: 1px solid #F0D6E1;
          border-radius: 20px;
          background: var(--blush);
        }
        .service-note p { margin: 0; color: var(--copy); }
        .service-note strong { color: var(--ink); font-weight: 600; }

        .product-grid { display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 78px; }
        .product-copy .body-large { margin: 25px 0 0; color: var(--copy); }
        .content-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; margin-top: 28px; }
        .content-item { position: relative; margin: 0; padding: 13px 0 13px 22px; color: var(--ink-2); font-size: 16px; line-height: 1.5; }
        .content-item::before { content: ""; position: absolute; left: 0; top: 24px; width: 9px; height: 2px; background: var(--magenta); }
        .product-panel {
          position: relative;
          overflow: hidden;
          min-height: 500px;
          padding: 30px;
          border: 1px solid var(--line-strong);
          border-radius: 30px;
          background: linear-gradient(145deg, #fff, #F8F3F6);
          box-shadow: 0 24px 60px rgba(16,24,40,.08);
        }
        .panel-top { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
        .panel-title { margin: 0; color: var(--ink); font-size: 16px; font-weight: 600; }
        .panel-status { display: inline-flex; align-items: center; gap: 7px; color: var(--magenta); font-size: 14px; font-weight: 600; }
        .panel-status::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); }
        .experience-flow { display: grid; grid-template-columns: 1fr 46px 1fr; align-items: stretch; gap: 10px; margin-top: 28px; }
        .experience-column { padding: 22px; border: 1px solid var(--line); border-radius: 20px; background: #fff; }
        .experience-label { margin: 0 0 18px; color: var(--muted); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
        .ui-line { height: 10px; margin: 11px 0; border-radius: 99px; background: #E9EDF2; }
        .ui-line.magenta { background: #E8BDD0; }
        .ui-line.w55 { width: 55%; }
        .ui-line.w70 { width: 70%; }
        .ui-line.w82 { width: 82%; }
        .ui-line.w92 { width: 92%; }
        .flow-arrow { display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .experience-bottom { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px; }
        .experience-chip { min-height: 72px; display: flex; align-items: center; justify-content: center; padding: 14px; border: 1px solid var(--line); border-radius: 16px; background: rgba(255,255,255,.82); color: var(--ink-2); font-size: 14px; font-weight: 600; text-align: center; }

        .application-grid { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 50px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .application-item { min-height: 238px; padding: 28px 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .application-item h3 { font-size: 20px; }
        .application-item p { margin: 17px 0 0; color: var(--copy); line-height: 1.65; }
        .application-rule { width: 42px; height: 2px; margin: 0 0 24px; border-radius: 99px; background: var(--magenta); }

        .strategy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 50px; }
        .strategy-card { min-height: 350px; padding: 32px; border: 1px solid var(--line); border-radius: 24px; background: #fff; }
        .strategy-card.featured { border-color: #E8BDD0; background: var(--blush); }
        .strategy-kicker { margin: 0 0 19px; color: var(--magenta); font-size: 14px; font-weight: 600; }
        .strategy-card p { margin: 18px 0 0; color: var(--copy); }
        .strategy-card ul { margin: 24px 0 0; padding: 22px 0 0; border-top: 1px solid var(--line); list-style: none; }
        .strategy-card li { position: relative; padding-left: 19px; color: var(--ink-2); line-height: 1.55; }
        .strategy-card li + li { margin-top: 11px; }
        .strategy-card li::before { content: ""; position: absolute; left: 0; top: .73em; width: 7px; height: 2px; background: var(--magenta); }
        .strategy-message { max-width: 920px; margin: 34px auto 0; color: var(--ink-2); font-size: 18px; line-height: 1.72; text-align: center; }

        .dark-section { position: relative; overflow: hidden; background: var(--dark); color: #fff; }
        .dark-section::after { content: ""; position: absolute; right: -140px; top: -180px; width: 430px; height: 430px; border-radius: 50%; border: 1px solid rgba(242,167,198,.16); }
        .evaluation-grid { position: relative; z-index: 1; display: grid; grid-template-columns: .86fr 1.14fr; gap: 78px; align-items: start; }
        .evaluation-copy .body-large { margin: 25px 0 0; color: #C8D0DC; }
        .evaluation-copy .btn-secondary { background: transparent; border-color: #5A6575; color: #fff; box-shadow: none; }
        .evaluation-copy .btn-secondary:visited { color: #fff; }
        .evaluation-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #394354; border-left: 1px solid #394354; }
        .evaluation-item { min-height: 112px; display: grid; grid-template-columns: 26px 1fr; gap: 14px; align-items: start; padding: 23px; border-right: 1px solid #394354; border-bottom: 1px solid #394354; }
        .evaluation-item .check { color: var(--pink-light); padding-top: 2px; }
        .evaluation-item p { margin: 0; color: #EDF1F6; line-height: 1.55; }

        .quality-grid { display: grid; grid-template-columns: .7fr 1.3fr; gap: 86px; align-items: start; }
        .quality-intro { position: sticky; top: 28px; }
        .quality-intro .body-large { margin: 24px 0 0; color: var(--copy); }
        .quality-steps { border-top: 1px solid var(--line); }
        .quality-step { display: grid; grid-template-columns: 54px 1fr; gap: 28px; padding: 27px 0; border-bottom: 1px solid var(--line); }
        .quality-step-number { width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; border: 1px solid #E7C5D4; border-radius: 50%; color: var(--magenta); font-size: 14px; font-weight: 600; }
        .quality-step h3 { font-size: 20px; }
        .quality-step p { margin: 12px 0 0; color: var(--copy); }

        .domain-band { background: var(--blush); }
        .domain-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 76px; align-items: start; }
        .domain-layout .body-large { margin: 24px 0 0; color: var(--copy); }
        .domain-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #E8CBD7; }
        .domain-item { padding: 20px 20px 20px 0; border-bottom: 1px solid #E8CBD7; color: var(--ink-2); font-size: 16px; font-weight: 600; line-height: 1.5; }
        .domain-item:nth-child(even) { padding-left: 28px; border-left: 1px solid #E8CBD7; }

        .governance-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: start; }
        .governance-copy .body-large { margin: 24px 0 0; color: var(--copy); }
        .governance-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 27px; }
        .governance-panel { border: 1px solid var(--line-strong); border-radius: 28px; overflow: hidden; background: #fff; }
        .governance-row { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 24px 26px; }
        .governance-row + .governance-row { border-top: 1px solid var(--line); }
        .governance-icon { width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 14px; background: var(--blush); color: var(--magenta); }
        .governance-row h3 { font-size: 19px; }
        .governance-row p { margin: 8px 0 0; color: var(--copy); line-height: 1.6; }

        .language-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .language-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
        .language-copy .body-large { margin: 24px 0 0; color: var(--copy); }
        .language-cloud { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-end; }
        .language-chip { padding: 12px 17px; border: 1px solid var(--line); border-radius: 999px; background: #fff; color: var(--ink-2); font-size: 16px; font-weight: 600; }
        .language-chip.accent { border-color: #E8BDD0; background: var(--blush); color: var(--magenta-deep); }

        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 50px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .why-item { min-height: 252px; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .why-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; margin-bottom: 22px; border-radius: 15px; background: var(--blush); color: var(--magenta); }
        .why-item h3 { font-size: 20px; }
        .why-item p { margin: 15px 0 0; color: var(--copy); line-height: 1.65; }

        .faq-shell { max-width: 980px; margin: 48px auto 0; border-top: 1px solid var(--line-strong); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item summary {
          min-height: 76px;
          display: grid;
          grid-template-columns: 1fr 36px;
          gap: 20px;
          align-items: center;
          padding: 23px 0;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          cursor: pointer;
          list-style: none;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--line-strong); border-radius: 50%; color: var(--magenta); font-size: 22px; font-weight: 400; transition: transform .2s ease; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-answer { max-width: 840px; padding: 0 56px 25px 0; color: var(--copy); font-size: 16px; line-height: 1.75; }

        .final-cta { padding: 80px 0 96px; background: #fff; }
        .cta-panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 58px;
          padding: 58px 62px;
          border: 1px solid #EAC7D6;
          border-radius: 30px;
          background: linear-gradient(135deg, #FFF 0%, #FDF2F7 100%);
        }
        .cta-panel::after { content: ""; position: absolute; right: -70px; bottom: -100px; width: 250px; height: 250px; border: 1px solid rgba(193,29,99,.16); border-radius: 50%; }
        .cta-copy { position: relative; z-index: 1; max-width: 720px; }
        .cta-copy p { margin: 22px 0 0; color: var(--copy); font-size: 18px; line-height: 1.7; }
        .cta-actions { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 250px; }

        @media (max-width: 1100px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(400px, .9fr); gap: 34px; }
          .lifecycle-grid { grid-template-columns: repeat(3, 1fr); }
          .lifecycle-step:nth-child(4) { border-left: 0; }
          .lifecycle-step:nth-child(n+4) { border-top: 1px solid var(--line); }
          .application-grid { grid-template-columns: repeat(2, 1fr); }
          .service-row { grid-template-columns: .85fr 1.35fr auto; gap: 28px; }
        }

        @media (max-width: 820px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero-grid { min-height: auto; grid-template-columns: 1fr; gap: 40px; padding-top: 88px; padding-bottom: 72px; }
          .hero-copy { max-width: 720px; }
          .hero-art-wrap { max-width: 620px; margin: 0 auto; }
          .trust-grid { grid-template-columns: 1fr 1fr; }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .trust-item:nth-child(4) { border-top: 1px solid var(--line); }
          .challenge-grid, .product-grid, .evaluation-grid, .quality-grid, .domain-layout, .governance-layout, .language-layout { grid-template-columns: 1fr; gap: 48px; }
          .challenge-copy { max-width: 720px; }
          .service-row { grid-template-columns: 1fr; gap: 14px; align-items: start; padding: 26px 0; }
          .service-row .editorial-link { margin-top: 2px; justify-self: start; }
          .service-note { align-items: flex-start; flex-direction: column; }
          .product-panel { min-height: 460px; }
          .strategy-grid { grid-template-columns: 1fr; }
          .strategy-card { min-height: 0; }
          .quality-intro { position: static; }
          .language-cloud { justify-content: flex-start; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .cta-panel { grid-template-columns: 1fr; padding: 50px; }
          .cta-actions { min-width: 0; flex-direction: row; flex-wrap: wrap; }
        }

        @media (max-width: 560px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large, .section-intro { font-size: 18px; }
          .hero-grid { padding-top: 72px; padding-bottom: 64px; }
          .hero-copy .body-large { margin-top: 22px; }
          .btn-row { flex-direction: column; align-items: stretch; }
          .btn { width: 100%; min-height: 50px; }
          .hero-art-wrap { margin-left: -8px; margin-right: -8px; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item { padding: 22px 0; }
          .trust-item + .trust-item { border-left: 0; border-top: 1px solid var(--line); }
          .challenge-row { grid-template-columns: 25px 1fr; gap: 13px; }
          .lifecycle-grid { grid-template-columns: 1fr; border-bottom: 0; }
          .lifecycle-step, .lifecycle-step + .lifecycle-step { padding: 24px 0; border-left: 0; border-top: 0; border-bottom: 1px solid var(--line); }
          .service-note { padding: 22px; }
          .content-columns { grid-template-columns: 1fr; }
          .product-panel { min-height: 0; padding: 20px; border-radius: 24px; }
          .experience-flow { grid-template-columns: 1fr; }
          .flow-arrow { min-height: 36px; transform: rotate(90deg); }
          .experience-bottom { grid-template-columns: 1fr; }
          .application-grid { grid-template-columns: 1fr; }
          .application-item { min-height: 0; padding: 26px 22px; }
          .strategy-card { padding: 27px 23px; }
          .evaluation-list { grid-template-columns: 1fr; }
          .quality-step { grid-template-columns: 44px 1fr; gap: 17px; }
          .quality-step-number { width: 40px; height: 40px; }
          .domain-list { grid-template-columns: 1fr; }
          .domain-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .governance-row { grid-template-columns: 42px 1fr; gap: 14px; padding: 22px 20px; }
          .governance-icon { width: 40px; height: 40px; }
          .language-chip { font-size: 16px; }
          .why-grid { grid-template-columns: 1fr; }
          .why-item { min-height: 0; padding: 26px 22px; }
          .faq-item summary { grid-template-columns: 1fr 32px; gap: 12px; font-size: 17px; }
          .faq-answer { padding-right: 0; }
          .cta-panel { padding: 38px 24px; border-radius: 24px; }
          .cta-actions { flex-direction: column; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <Eyebrow>AI &amp; Machine Learning</Eyebrow>
              <h1>AI &amp; Machine Learning Language Solutions for Global Products</h1>
              <p className="body-large">
                Build, evaluate, localize, and continuously improve multilingual AI with native-language expertise, domain-qualified reviewers, structured quality controls, and scalable workflows across 100+ languages.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                  Talk to an AI Specialist <ArrowIcon />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/multilingual-ai-data-services/">
                  Explore AI Data Services
                </a>
              </div>
            </div>
            <div className="hero-art-wrap">
              <HeroArtwork />
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Stepes AI language service capabilities">
          <div className="shell trust-grid">
            <div className="trust-item">
              <p className="trust-title">100+ Languages</p>
              <p className="trust-text">Global, regional, and lower-resource language programs</p>
            </div>
            <div className="trust-item">
              <p className="trust-title">Native-Language Reviewers</p>
              <p className="trust-text">Professional linguistic and cultural judgment</p>
            </div>
            <div className="trust-item">
              <p className="trust-title">AI + Human Workflows</p>
              <p className="trust-text">Automation, validation, review, and adjudication</p>
            </div>
            <div className="trust-item">
              <p className="trust-title">ISO-Certified Services</p>
              <p className="trust-text">ISO 17100, ISO 9001, and ISO 13485</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell challenge-grid">
            <div className="challenge-copy">
              <Eyebrow>Global AI Performance</Eyebrow>
              <h2>Build AI That Works Across Languages and Markets</h2>
              <p className="body-large">
                Strong English performance does not automatically translate into a strong global experience. Multilingual AI requires authentic local data, consistent evaluation, and professional language judgment throughout the product lifecycle.
              </p>
            </div>
            <div className="challenge-list">
              {[
                ["Uneven performance", "Model accuracy, fluency, and usefulness can vary significantly by language and locale."],
                ["Limited local data", "Lower-resource languages and regional variants may lack representative training and evaluation content."],
                ["Unnatural translated data", "Literal adaptation can miss authentic intent patterns, cultural context, and real-world phrasing."],
                ["Hidden market-specific risks", "Hallucinations, omissions, inappropriate outputs, and terminology errors may appear only in certain languages."],
                ["Fragmented product experiences", "The model, interface, prompts, documentation, and support content must work together in every market."],
              ].map(([title, text]) => (
                <div className="challenge-row" key={title}>
                  <span className="check"><CheckIcon /></span>
                  <p><strong>{title}.</strong> {text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section" id="lifecycle">
          <div className="shell">
            <SectionHeading
              eyebrow="Complete AI Language Lifecycle"
              title="Support From Multilingual Data Strategy to Continuous Improvement"
              intro="Stepes connects language data, human evaluation, product localization, and ongoing output review in one coordinated global program."
              centered
            />
            <div className="lifecycle-grid">
              {lifecycle.map(([title, text], index) => (
                <div className="lifecycle-step" key={title}>
                  <p className="step-number">{String(index + 1).padStart(2, "0")}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="shell">
            <SectionHeading
              eyebrow="AI Language Services"
              title="Multilingual Services for AI Data, Models, and Products"
              intro="Choose a focused capability or combine services into an end-to-end program designed around your model, data types, languages, and release goals."
            />
            <div className="services-list">
              {services.map((service) => (
                <article className="service-row" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="editorial-link" href={service.href}>
                    Explore Service <ArrowIcon size={17} />
                  </a>
                </article>
              ))}
            </div>
            <div className="service-note">
              <p><strong>Looking for AI-enabled business translation?</strong> Stepes also provides AI-powered document and content translation with professional human review.</p>
              <a className="editorial-link" href="https://www.stepes.com/ai-translation-services/">
                AI Translation Services <ArrowIcon size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section dense soft-section">
          <div className="shell product-grid">
            <div className="product-copy">
              <Eyebrow>Global AI Product Experience</Eyebrow>
              <h2>Localize More Than the Model</h2>
              <p className="body-large">
                A globally capable model still needs an interface, prompt system, documentation, support experience, and customer communications that feel clear and consistent in every market.
              </p>
              <div className="content-columns">
                {[
                  "AI application interfaces",
                  "Chatbots, copilots, and agents",
                  "System prompts and prompt libraries",
                  "Response templates and notifications",
                  "Developer and API documentation",
                  "Model cards and technical content",
                  "Help centers and knowledge bases",
                  "Onboarding and customer training",
                  "Websites and product marketing",
                  "Safety, privacy, and legal content",
                ].map((item) => <p className="content-item" key={item}>{item}</p>)}
              </div>
              <div className="btn-row">
                <a className="editorial-link" href="https://www.stepes.com/software-translation-services/">
                  Software &amp; SaaS Translation Services <ArrowIcon size={17} />
                </a>
                <a className="editorial-link" href="https://www.stepes.com/developers/translation-api/">
                  Translation API <ArrowIcon size={17} />
                </a>
              </div>
            </div>

            <div className="product-panel" aria-label="AI product localization workflow illustration">
              <div className="panel-top">
                <p className="panel-title">Global AI Product Experience</p>
                <span className="panel-status">Language QA Complete</span>
              </div>
              <div className="experience-flow">
                <div className="experience-column">
                  <p className="experience-label">Product Interface</p>
                  <div className="ui-line w70" />
                  <div className="ui-line w92" />
                  <div className="ui-line w55" />
                  <div className="ui-line magenta w82" />
                  <div className="ui-line w70" />
                </div>
                <div className="flow-arrow"><ArrowIcon size={24} /></div>
                <div className="experience-column">
                  <p className="experience-label">Localized Experience</p>
                  <div className="ui-line w82" />
                  <div className="ui-line w70" />
                  <div className="ui-line w92" />
                  <div className="ui-line magenta w55" />
                  <div className="ui-line w82" />
                </div>
              </div>
              <div className="experience-bottom">
                <div className="experience-chip">Prompts &amp; Responses</div>
                <div className="experience-chip">Terminology &amp; Voice</div>
                <div className="experience-chip">In-Context Validation</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="applications">
          <div className="shell">
            <SectionHeading
              eyebrow="AI Applications"
              title="Language Solutions for Every Type of AI Experience"
              intro="Support global AI systems across text, voice, search, multimodal, customer experience, industrial, and specialized enterprise use cases."
              centered
            />
            <div className="application-grid">
              {applications.map(([title, text]) => (
                <article className="application-item" key={title}>
                  <div className="application-rule" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <SectionHeading
              eyebrow="Multilingual Data Strategy"
              title="Choose the Right Approach for Every Language and Use Case"
              intro="Multilingual AI data does not always begin with translation. Stepes helps determine when to adapt existing content, create original native-language data, or combine both approaches."
              centered
            />
            <div className="strategy-grid">
              <article className="strategy-card">
                <p className="strategy-kicker">Existing Data</p>
                <h3>Translate and Localize</h3>
                <p>Adapt established source-language datasets while preserving schemas, labels, relationships, and comparable meaning across markets.</p>
                <ul>
                  <li>Terminology and taxonomy alignment</li>
                  <li>Cultural and contextual adaptation</li>
                  <li>Equivalent rather than literal meaning</li>
                  <li>Structured field and schema preservation</li>
                </ul>
              </article>
              <article className="strategy-card">
                <p className="strategy-kicker">Authentic Local Behavior</p>
                <h3>Create Natively</h3>
                <p>Generate original language data when natural phrasing, local intent, spontaneous speech, or market-specific behavior is essential.</p>
                <ul>
                  <li>Native prompts and responses</li>
                  <li>Regional search queries and intents</li>
                  <li>Natural speech and conversations</li>
                  <li>Market-specific scenarios and edge cases</li>
                </ul>
              </article>
              <article className="strategy-card featured">
                <p className="strategy-kicker">Balanced Scale and Authenticity</p>
                <h3>Use a Hybrid Model</h3>
                <p>Start with translated seed content, then expand it with native-language variants, slang, accents, local scenarios, and culturally specific behavior.</p>
                <ul>
                  <li>Consistent global foundations</li>
                  <li>Local expansion and diversity</li>
                  <li>Regional variants and code-switching</li>
                  <li>Efficient coverage of priority markets</li>
                </ul>
              </article>
            </div>
            <p className="strategy-message">
              The goal is not simply to reproduce English data in another language. It is to represent how people communicate, search, speak, decide, and interact in each target market.
            </p>
          </div>
        </section>

        <section className="section dark-section">
          <div className="shell evaluation-grid">
            <div className="evaluation-copy">
              <Eyebrow dark>Human-in-the-Loop Evaluation</Eyebrow>
              <h2 style={{ color: "#fff" }}>Professional Linguists for Multilingual Model Quality</h2>
              <p className="body-large">
                Native-language and domain-qualified reviewers apply your evaluation criteria with the linguistic, cultural, and contextual judgment needed to identify issues automated metrics may miss.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="https://www.stepes.com/multilingual-llm-evaluation-services/">
                  Explore LLM Evaluation <ArrowIcon />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">
                  Discuss Your Program
                </a>
              </div>
            </div>
            <div className="evaluation-list">
              {evaluationDimensions.map((item) => (
                <div className="evaluation-item" key={item}>
                  <span className="check"><CheckIcon size={19} /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell quality-grid">
            <div className="quality-intro">
              <Eyebrow>Quality at Scale</Eyebrow>
              <h2>Structured Quality From Pilot to Production</h2>
              <p className="body-large">
                Every program is built around clear requirements, qualified reviewers, calibration, automated validation, human QA, adjudication, and traceable reporting.
              </p>
              <a className="editorial-link" href="https://www.stepes.com/quality-system/">
                Explore the Stepes Quality System <ArrowIcon size={17} />
              </a>
            </div>
            <div className="quality-steps">
              {qualitySteps.map(([title, text], index) => (
                <article className="quality-step" key={title}>
                  <div className="quality-step-number">{index + 1}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section domain-band">
          <div className="shell domain-layout">
            <div>
              <Eyebrow>Specialized AI</Eyebrow>
              <h2>Domain Expertise for High-Stakes and Technical Applications</h2>
              <p className="body-large">
                General fluency is not enough when models must understand regulated content, specialized terminology, professional workflows, or industry-specific user expectations.
              </p>
            </div>
            <div className="domain-list">
              {[
                "Life Sciences and Healthcare AI",
                "Medical Device and Patient-Support AI",
                "Financial Services and Insurance AI",
                "Legal and Regulatory AI",
                "Government and Public-Sector AI",
                "Software and Cybersecurity AI",
                "Manufacturing and Industrial Automation",
                "Automotive and Mobility AI",
                "Retail and E-commerce AI",
                "Education and eLearning AI",
                "Media, Gaming, and Content Systems",
                "Energy and Telecommunications AI",
              ].map((item) => <div className="domain-item" key={item}>{item}</div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell governance-layout">
            <div className="governance-copy">
              <Eyebrow>Enterprise Governance</Eyebrow>
              <h2>Controlled Workflows for Multilingual AI Data</h2>
              <p className="body-large">
                Stepes supports enterprise programs with defined roles, secure exchange, documented requirements, version control, traceable corrections, and customer-specific handling procedures.
              </p>
              <div className="governance-links">
                <a className="editorial-link" href="https://www.stepes.com/security/">Security <ArrowIcon size={17} /></a>
                <a className="editorial-link" href="https://www.stepes.com/quality-system/">Quality System <ArrowIcon size={17} /></a>
                <a className="editorial-link" href="https://www.stepes.com/iso-certifications/">ISO Certifications <ArrowIcon size={17} /></a>
              </div>
            </div>
            <div className="governance-panel">
              <div className="governance-row">
                <div className="governance-icon"><ShieldIcon /></div>
                <div>
                  <h3>Access and Confidentiality Controls</h3>
                  <p>Define project access, contributor roles, reviewer permissions, confidentiality requirements, and secure file or dataset exchange.</p>
                </div>
              </div>
              <div className="governance-row">
                <div className="governance-icon"><GlobeIcon /></div>
                <div>
                  <h3>Data Handling Requirements</h3>
                  <p>Apply customer-defined procedures for sensitive content, PII, contributor consent, retention, and approved delivery channels.</p>
                </div>
              </div>
              <div className="governance-row">
                <div className="governance-icon"><CheckIcon size={24} /></div>
                <div>
                  <h3>Traceability and Change Control</h3>
                  <p>Maintain dataset versions, guideline updates, review decisions, issue escalation, corrections, and structured quality records.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dense language-band">
          <div className="shell language-layout">
            <div className="language-copy">
              <Eyebrow>Global Language Coverage</Eyebrow>
              <h2>Beyond Standard Language Labels</h2>
              <p className="body-large">
                Design multilingual AI programs around languages, countries, regional variants, dialects, accents, writing systems, registers, terminology, and real-world usage patterns.
              </p>
              <a className="editorial-link" href="https://www.stepes.com/translation-languages/">
                Explore Supported Languages <ArrowIcon size={17} />
              </a>
            </div>
            <div className="language-cloud" aria-label="Examples of language coverage">
              {[
                ["100+ Languages", true], ["Regional Variants", false], ["Dialects", false], ["Accents", false],
                ["Right-to-Left", false], ["Asian Writing Systems", false], ["Code-Switching", false],
                ["Formal and Informal Registers", false], ["Low-Resource Planning", true], ["Native Evaluators", true],
              ].map(([label, accent]) => <span className={`language-chip${accent ? " accent" : ""}`} key={label}>{label}</span>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <SectionHeading
              eyebrow="Why Stepes"
              title="A Language-First Partner for Global AI"
              intro="Bring multilingual data, model evaluation, product localization, and ongoing quality together through one scalable language-services partner."
              centered
            />
            <div className="why-grid">
              {[
                [<SparkIcon key="a" />, "Complete AI Language Lifecycle", "One partner for data creation, annotation, evaluation, localization, output review, and continuous improvement."],
                [<GlobeIcon key="b" />, "Professional Native-Language Expertise", "Linguists who understand natural expression, regional variation, terminology, context, and cultural expectations."],
                [<CheckIcon key="c" size={24} />, "Domain-Specialized Review", "Qualified reviewers for technical, medical, financial, legal, manufacturing, and other specialized AI applications."],
                [<ArrowIcon key="d" size={24} />, "Scalable Global Workflows", "Support for pilots, multilingual production datasets, recurring model releases, and continuous evaluation programs."],
                [<ShieldIcon key="e" />, "AI-Enabled, Human-Governed Quality", "Technology improves speed, validation, consistency, and reporting while people provide essential judgment."],
                [<GlobeIcon key="f" />, "Enterprise Program Management", "Structured guidelines, calibration, access controls, issue resolution, quality records, and traceable delivery."],
              ].map(([icon, title, text]) => (
                <article className="why-item" key={title}>
                  <div className="why-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft-section">
          <div className="shell">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="AI &amp; Machine Learning Language Services FAQs"
              intro="Answers to common questions about multilingual data, model evaluation, localization, voice programs, and ongoing AI quality."
              centered
            />
            <div className="faq-shell">
              {faqs.map(([question, answer], index) => (
                <details className="faq-item" key={question} open={index === 0}>
                  <summary>
                    <span>{question}</span>
                    <span className="faq-plus" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer">{answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell">
            <div className="cta-panel">
              <div className="cta-copy">
                <Eyebrow>Global AI Language Programs</Eyebrow>
                <h2>Build AI That Performs Globally</h2>
                <p>
                  Tell us about your model, languages, data types, evaluation goals, or product roadmap. Stepes will help define a practical multilingual workflow for pilot, production, and continuous improvement.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                  Talk to an AI Specialist <ArrowIcon />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/multilingual-ai-data-services/">
                  Explore AI Data Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
