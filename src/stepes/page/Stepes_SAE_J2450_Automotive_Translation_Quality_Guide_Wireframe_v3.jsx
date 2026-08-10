import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/translation-guides/sae-j2450-automotive-translation-quality/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Translation Guides",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
  { label: "SAE J2450 for Automotive Translation Quality", current: true },
];

const tocItems = [
  { id: "what-is-sae-j2450", label: "What Is SAE J2450?" },
  { id: "why-structured-quality", label: "Why Structured Quality Matters" },
  { id: "what-j2450-evaluates", label: "What SAE J2450 Evaluates" },
  { id: "how-scoring-works", label: "How Scoring Works" },
  { id: "practical-example", label: "Practical Evaluation Example" },
  { id: "where-j2450-adds-value", label: "Where J2450 Adds Value" },
  { id: "when-j2450-is-not-enough", label: "When J2450 Is Not Enough" },
  { id: "quality-framework", label: "Automotive Quality Framework" },
  { id: "ai-machine-translation", label: "AI and Machine Translation" },
  { id: "implementation", label: "How to Implement J2450" },
  { id: "evaluator-reliability", label: "Evaluator Reliability" },
  { id: "continuous-improvement", label: "Continuous Improvement" },
  { id: "framework-comparison", label: "Standards and Frameworks" },
  { id: "stepes-support", label: "How Stepes Supports Quality" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "sources", label: "Sources and References" },
  { id: "complete-quality-system", label: "Putting J2450 in Context" },
];

const takeaways = [
  {
    title: "A metric, not a certification",
    text: "SAE J2450 evaluates defined translation errors in automotive service information. It does not certify a translation, supplier, vehicle, or safety program.",
  },
  {
    title: "Independent of production method",
    text: "The metric can be applied to suitable output produced through human translation, computer-assisted workflows, or machine translation.",
  },
  {
    title: "Content scope matters",
    text: "J2450 is strongest for service and technical information. It does not measure style or replace HMI, speech, visual, regulatory, or functional validation.",
  },
  {
    title: "Scores need controlled conditions",
    text: "Sampling, evaluator competence, severity guidance, references, and acceptance criteria determine whether results are meaningful and comparable.",
  },
  {
    title: "Quality should follow risk",
    text: "A repair procedure, driver warning, voice prompt, campaign headline, and OTA message should not all follow the same quality route.",
  },
  {
    title: "Findings should improve the system",
    text: "Use evaluation data to strengthen terminology, translation memory, source content, supplier guidance, automated checks, and future releases.",
  },
];

const atAGlance = [
  ["Primary scope", "Translations of automotive service information"],
  ["Evaluation method", "Error classification, severity, penalties, and normalization"],
  ["Languages", "Applicable across source and target languages"],
  ["Production method", "Human, CAT-assisted, or machine-translated output"],
  ["Style evaluation", "Not included; additional review is required"],
  ["Certification", "No — it is an output-evaluation metric"],
];

const errorCategories = [
  {
    category: "Wrong Term",
    meaning:
      "The target term does not represent the correct concept, approved terminology, or required industry usage.",
    example:
      "A specific braking component is translated as a different or overly broad part.",
  },
  {
    category: "Syntactic Error",
    meaning:
      "Sentence structure, word order, or grammatical construction obscures or changes the intended meaning.",
    example:
      "A repair instruction makes it unclear which action must occur first.",
  },
  {
    category: "Omission",
    meaning:
      "Required source information is absent from the translated content.",
    example:
      "A warning condition, procedural step, or required value is missing.",
  },
  {
    category: "Word Structure or Agreement Error",
    meaning:
      "The form of a word or the agreement between words is incorrect.",
    example:
      "Case, gender, number, tense, or inflection is wrong in the target language.",
  },
  {
    category: "Misspelling",
    meaning: "A word is written incorrectly.",
    example:
      "A component, vehicle system, or diagnostic term contains a spelling error.",
  },
  {
    category: "Punctuation Error",
    meaning: "Punctuation is incorrect or missing.",
    example:
      "A punctuation change makes a condition or sequence ambiguous.",
  },
  {
    category: "Miscellaneous Error",
    meaning:
      "A qualifying linguistic defect does not fit the other defined categories.",
    example:
      "Another measurable target-language issue requires documentation and resolution.",
  },
];

const scoringSteps = [
  {
    label: "Compare",
    text: "Review the source and target together with approved terminology, references, and project specifications.",
  },
  {
    label: "Identify",
    text: "Determine whether the target contains an issue covered by the metric rather than a personal stylistic preference.",
  },
  {
    label: "Classify",
    text: "Assign the error category that best describes the observed translation defect.",
  },
  {
    label: "Determine Severity",
    text: "Assess the effect on meaning, use, and potential consequence—not merely how noticeable the error appears.",
  },
  {
    label: "Score and Normalize",
    text: "Apply the prescribed penalty and normalize the accumulated result against the evaluated content volume.",
  },
  {
    label: "Analyze and Improve",
    text: "Review patterns, root causes, corrective actions, and the limits of the evaluated sample.",
  },
];

const exampleIssues = [
  {
    title: "“Ignition” becomes “engine”",
    classification: "Possible classification: Wrong Term",
    explanation:
      "Switching off the engine may not be equivalent to switching off the ignition or placing the vehicle in the required power state.",
    validation:
      "Technical review should confirm the approved vehicle-state terminology for the platform.",
  },
  {
    title: "The five-minute waiting period is missing",
    classification: "Possible classification: Omission",
    explanation:
      "The translated instruction removes a complete procedural condition that may be required before the next action.",
    validation:
      "Review the translation against approved service engineering content and safety procedures.",
  },
  {
    title: "The connector name loses specificity",
    classification: "Possible classification: Wrong Term",
    explanation:
      "Reducing “high-voltage service connector” to “voltage connector” may fail to identify the required component.",
    validation:
      "Apply the approved component term from the vehicle program termbase.",
  },
  {
    title: "The torque value and unit are omitted",
    classification: "Possible classification: Omission",
    explanation:
      "The tightening action remains, but the technician no longer has the specification needed to complete it correctly.",
    validation:
      "Automated QA should compare numbers and measurement units between source and target content.",
  },
];

const valueAreas = [
  {
    title: "Service and Repair Information",
    text: "Workshop manuals, maintenance instructions, diagnostic procedures, service bulletins, troubleshooting content, and component-replacement procedures depend on precise meaning, terminology, and completeness.",
  },
  {
    title: "Structured Technical Content",
    text: "DITA and XML programs reuse modules across models, platforms, markets, and model years. Structured evaluation can reveal problems in new, changed, and reused content.",
  },
  {
    title: "Supplier Evaluation",
    text: "Controlled tests and recurring quality samples can support supplier qualification, performance review, language benchmarking, and corrective-action discussions.",
  },
  {
    title: "Recurring Quality Monitoring",
    text: "Track error categories, terminology compliance, language trends, product-line patterns, translation-memory health, and improvement after corrective action.",
  },
  {
    title: "Human and Machine Output",
    text: "Because J2450 is production-method neutral within its scope, it can evaluate suitable output from human, CAT-assisted, and machine translation workflows.",
  },
];

const automotiveContentTypes = [
  "Workshop and repair procedures",
  "Diagnostic and troubleshooting information",
  "Engineering specifications",
  "Parts and component descriptions",
  "Owner documentation and driver warnings",
  "HMI, infotainment, and digital clusters",
  "Voice commands and conversational prompts",
  "Mobile and connected-vehicle applications",
  "OTA release communications",
  "Regulatory and homologation documents",
  "Dealer, technician, and eLearning content",
  "Warranty, recall, marketing, and support communications",
];

const applicabilityRows = [
  {
    content: "Service and repair information",
    support: "Accuracy, terminology, omissions, grammar, spelling, and punctuation",
    additional:
      "Technical review, procedure validation, numbers and units QA, and final-format inspection",
  },
  {
    content: "Owner manuals",
    support: "Source-to-target accuracy and completeness",
    additional:
      "Readability, tone, audience suitability, visual review, and cross-reference checks",
  },
  {
    content: "HMI and infotainment",
    support: "Core linguistic error identification",
    additional:
      "Character limits, interface states, screenshots, truncation checks, and in-context testing",
  },
  {
    content: "Digital clusters and driver warnings",
    support: "Meaning and terminology",
    additional:
      "Safety review, comprehension, display behavior, and vehicle-context validation",
  },
  {
    content: "Voice and conversational systems",
    support: "Written-script accuracy",
    additional:
      "Pronunciation, speech recognition, intent handling, acoustic testing, and spoken naturalness",
  },
  {
    content: "ADAS content",
    support: "Terminology and translated meaning",
    additional:
      "System-specific review, driver comprehension, warning hierarchy, and in-vehicle testing",
  },
  {
    content: "Marketing content",
    support: "Basic accuracy and omissions",
    additional:
      "Transcreation, brand voice, cultural relevance, legal review, and market approval",
  },
  {
    content: "Regulatory documentation",
    support: "Linguistic accuracy",
    additional:
      "Subject-matter review, controlled approval, and jurisdiction-specific validation",
  },
  {
    content: "OTA release communications",
    support: "Accuracy, consistency, and completeness",
    additional:
      "Source-change control, version alignment, release validation, and channel-specific QA",
  },
  {
    content: "Training and eLearning",
    support: "Text and script accuracy",
    additional:
      "Instructional clarity, subtitles, narration, synchronization, and media interaction QA",
  },
  {
    content: "Multilingual layouts",
    support: "Text-level translation issues",
    additional:
      "Fonts, graphics, tables, pagination, callouts, labels, and final visual inspection",
  },
  {
    content: "Customer support content",
    support: "Accuracy, terminology, and completeness",
    additional:
      "Channel suitability, troubleshooting logic, searchability, and knowledge-base testing",
  },
];

const frameworkLayers = [
  {
    title: "Content and Risk Classification",
    text: "Identify intended use, audience, vehicle system, channel, market, release frequency, and potential consequence of error.",
  },
  {
    title: "Quality Specifications",
    text: "Define terminology, language conventions, file requirements, acceptance criteria, testing requirements, and approval responsibilities.",
  },
  {
    title: "Language Asset Controls",
    text: "Apply approved translation memory, terminology databases, product names, market variants, legacy decisions, and do-not-translate rules.",
  },
  {
    title: "Translation and Independent Review",
    text: "Use linguists and reviewers with the right automotive system, content-type, language, and market expertise.",
  },
  {
    title: "Structured Output Evaluation",
    text: "Apply SAE J2450 or another analytic metric when the scope and evaluation objective fit the content.",
  },
  {
    title: "Content-Specific Validation",
    text: "Add technical review, automated QA, interface testing, speech testing, visual inspection, functional QA, and regulatory or market approval as required.",
  },
  {
    title: "Feedback and Continuous Improvement",
    text: "Return approved findings to terminology, translation memory, source authoring, evaluator guidance, supplier training, automation rules, and future releases.",
  },
];

const aiEvaluationQuestions = [
  "Is the output accurate and complete?",
  "Does it use approved terminology and locale conventions?",
  "Does it meet the project specification and intended audience needs?",
  "Has it received the required linguistic, technical, and in-context validation?",
  "Is the remaining risk acceptable for the way the content will be used?",
];

const aiFit = [
  {
    title: "Potential AI-Assisted Use",
    items: [
      "Repetitive service information",
      "Parts descriptions",
      "Internal technical references",
      "Support knowledge bases",
      "Large documentation updates",
      "Previously translated content with limited changes",
    ],
  },
  {
    title: "Stronger Human Controls",
    items: [
      "Safety-relevant service procedures",
      "High-voltage battery content",
      "Driver warnings and recall communications",
      "Complex diagnostic instructions",
      "Regulatory submissions",
      "High-visibility HMI, voice, and brand content",
    ],
  },
];

const implementationSteps = [
  {
    title: "Define the Evaluation Objective",
    text: "Decide whether the program is accepting a translation, qualifying a supplier, comparing workflows, assessing AI output, monitoring a language, or identifying recurring problems.",
  },
  {
    title: "Confirm That J2450 Fits the Content",
    text: "Use the metric for suitable automotive service and technical information, then add separate methods for style, speech, interface context, functionality, regulation, or market approval.",
  },
  {
    title: "Document the Evaluation Specification",
    text: "Define languages, content type, audience, vehicle system, terminology, references, severity guidance, sampling, repeated-error treatment, acceptance criteria, and reporting.",
  },
  {
    title: "Select Qualified Evaluators",
    text: "Evaluators need source comprehension, professional target-language competence, automotive knowledge, content-type familiarity, context, and metric training.",
  },
  {
    title: "Train and Calibrate",
    text: "Align evaluators on category boundaries, severity, terminology, ambiguous source content, numbers and units, repeated issues, reviewer comments, and escalation.",
  },
  {
    title: "Select a Representative Sample",
    text: "Include the content, risk levels, products, translation methods, tables, warnings, procedures, and changed text needed to support the evaluation objective.",
  },
  {
    title: "Conduct and Reconcile the Evaluation",
    text: "Document each issue clearly and use secondary review or adjudication when material evaluator disagreements affect a benchmark or high-risk decision.",
  },
  {
    title: "Report More Than the Score",
    text: "Provide categories, severity, examples, repeated patterns, terminology findings, likely root causes, corrective actions, sample limitations, and follow-up recommendations.",
  },
  {
    title: "Improve the Production System",
    text: "Update terminology, translation memory, AI instructions, automated QA, source content, reviewer guidance, supplier training, workflow routing, and test plans.",
  },
];

const improvementColumns = [
  {
    title: "Analyze Patterns",
    items: [
      "Error category and severity",
      "Language and market",
      "Supplier and reviewer",
      "Vehicle platform and product line",
      "Content type and release",
      "Human, AI, or hybrid workflow",
    ],
  },
  {
    title: "Find Root Causes",
    items: [
      "Missing or outdated terminology",
      "Ambiguous source content",
      "Weak context or references",
      "Poor translation-memory matches",
      "Incorrect AI output",
      "Unclear specifications or review ownership",
    ],
  },
  {
    title: "Apply Corrective Action",
    items: [
      "Revise terminology entries",
      "Correct or retire language assets",
      "Improve source-writing rules",
      "Add numbers and units checks",
      "Change AI routing or review levels",
      "Recalibrate evaluators and suppliers",
    ],
  },
];

const comparisonRows = [
  {
    framework: "SAE J2450",
    purpose: "Analytic translation-error evaluation",
    scope: "Automotive service information",
    role: "Automotive-specific output metric where appropriate",
  },
  {
    framework: "ISO 17100",
    purpose: "Translation-service processes and resources",
    scope: "Professional translation services",
    role: "Supports governed translation, revision, resources, and project delivery",
  },
  {
    framework: "ISO 5060",
    purpose: "Analytic translation-output evaluation guidance",
    scope: "Human, post-edited machine, and unedited machine translation",
    role: "A broader evaluation model when J2450 is too narrow",
  },
  {
    framework: "ISO 18587",
    purpose: "Full human post-editing process and competence",
    scope: "Machine-translation output",
    role: "Supports controlled MT post-editing workflows",
  },
  {
    framework: "MQM",
    purpose: "Configurable analytic quality evaluation",
    scope: "Multiple content types and production methods",
    role: "Useful when software, HMI, style, locale, audience, design, or markup need broader categories",
  },
];

const stepesWorkflow = [
  "Automotive content and risk assessment",
  "Source-file and reference review",
  "Specialist linguist assignment",
  "Approved terminology and translation memory",
  "AI, human, or hybrid translation",
  "Independent linguistic review",
  "J2450-based evaluation for suitable service and technical information",
  "Automated terminology, number, unit, tag, and consistency checks",
  "Technical, in-context, speech, visual, functional, or regulatory review",
  "Centralized feedback, approval, reporting, and continuous improvement",
];

const faqs = [
  {
    question: "What is SAE J2450?",
    answer:
      "SAE J2450 is an error-based translation quality metric for automotive service information. It classifies translation issues by category and severity and produces a normalized evaluation result.",
  },
  {
    question: "Is SAE J2450 a certification?",
    answer:
      "No. SAE J2450 is a translation quality metric. It does not certify a translation, translation supplier, vehicle, product-safety program, or quality-management system.",
  },
  {
    question: "What automotive content is best suited to SAE J2450?",
    answer:
      "The metric is best aligned with automotive service and technical information such as repair procedures, workshop manuals, diagnostic content, maintenance instructions, service bulletins, and related documentation.",
  },
  {
    question: "Can SAE J2450 be used for owner manuals?",
    answer:
      "It can help identify certain linguistic errors, but it is not sufficient by itself. Owner-facing content also needs readability, tone, audience, terminology, visual, and usability review because J2450 does not evaluate style.",
  },
  {
    question: "Can SAE J2450 evaluate machine or AI translation?",
    answer:
      "Yes, when the content fits its intended scope. The metric can evaluate suitable human, computer-assisted, or machine-translated output. Professional review and content-specific validation still apply.",
  },
  {
    question: "Does SAE J2450 provide a universal passing score?",
    answer:
      "No. Organizations should define acceptance criteria according to the content, risk, sample, language, evaluator guidance, and project requirements. Results should not be compared without sufficiently consistent evaluation conditions.",
  },
  {
    question: "Does SAE J2450 evaluate HMI and infotainment localization?",
    answer:
      "It can support linguistic error identification, but it does not replace character-limit review, screenshot validation, interface-state testing, truncation checks, or functional localization QA.",
  },
  {
    question: "Does SAE J2450 evaluate voice-system quality?",
    answer:
      "It can help evaluate the written translation of a script. It does not evaluate pronunciation, speech recognition, acoustic performance, intent handling, or the naturalness of spoken interactions.",
  },
  {
    question: "How is SAE J2450 different from ISO 5060?",
    answer:
      "SAE J2450 is specifically intended for automotive service-information translation. ISO 5060 provides broader guidance for analytic evaluation of human, post-edited machine, and unedited machine translation output.",
  },
  {
    question: "How is SAE J2450 different from ISO 17100?",
    answer:
      "SAE J2450 evaluates translation errors. ISO 17100 addresses the professional processes and resources used to deliver translation services.",
  },
  {
    question: "Does SAE J2450 replace technical review?",
    answer:
      "No. Linguistic evaluation determines whether translated content represents the source according to the metric. Technical review confirms that terminology, procedures, specifications, and product context are correct for the intended use.",
  },
  {
    question: "How often should automotive translation quality be evaluated?",
    answer:
      "The appropriate frequency depends on content volume, risk, release cadence, supplier performance, and program maturity. Evaluation may occur during supplier qualification, at project milestones, through recurring samples, after workflow changes, or when quality trends indicate a need for corrective action.",
  },
  {
    question: "Does Stepes use SAE J2450?",
    answer:
      "Stepes can apply SAE J2450 where appropriate and supplement it with the linguistic, technical, functional, visual, speech, regulatory, or in-country review required for the specific automotive content.",
  },
];

const relatedResources = [
  {
    title: "Automotive Translation Services",
    description:
      "Explore multilingual services for vehicle documentation, software, EV systems, regulatory content, training, and customer experiences.",
    href: "https://www.stepes.com/automotive-translation-services/",
  },
  {
    title: "Automotive Technical Manual Translation Guide",
    description:
      "Plan structured DITA and XML workflows, terminology control, translation reuse, model-year updates, and multilingual publishing.",
    href: "https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/",
  },
  {
    title: "Automotive Terminology Management Guide",
    description:
      "Improve consistency across vehicle platforms, suppliers, departments, languages, regions, and customer touchpoints.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/",
  },
  {
    title: "ADAS, Voice, and In-Vehicle Linguistic Testing Guide",
    description:
      "Validate driver warnings, voice commands, interface messages, and multilingual speech experiences in context.",
    href: "https://www.stepes.com/resources/localization-guides/adas-voice-in-vehicle-linguistic-testing/",
  },
];

const sources = [
  {
    organization: "SAE International",
    title: "SAE J2450_201608 — Translation Quality Metric",
    href: "https://saemobilus.sae.org/standards/j2450_201608-translation-quality-metric",
  },
  {
    organization: "SAE International",
    title: "SAE J2450/1_201910 — Supplemental Training Document",
    href: "https://saemobilus.sae.org/standards/j24501_201910-sae-j2450-supplemental-training-document",
  },
  {
    organization: "International Organization for Standardization",
    title: "ISO 5060:2024 — Translation Services — Evaluation of Translation Output",
    href: "https://www.iso.org/standard/80701.html",
  },
  {
    organization: "International Organization for Standardization",
    title: "ISO 17100:2015 — Translation Services — Requirements for Translation Services",
    href: "https://www.iso.org/standard/59149.html",
  },
  {
    organization: "International Organization for Standardization",
    title: "ISO 18587:2017 — Post-Editing of Machine Translation Output",
    href: "https://www.iso.org/standard/62970.html",
  },
  {
    organization: "Multidimensional Quality Metrics",
    title: "MQM Typology and Quality Evaluation Framework",
    href: "https://themqm.org/mqm-pillars/typology/",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={open ? "chevron-open" : undefined}
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={item.label}>
            {index > 0 && (
              <span className="breadcrumb-separator" aria-hidden="true">
                /
              </span>
            )}
            {item.current ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {external ? <ExternalIcon /> : <ArrowIcon />}
    </a>
  );
}

function DesktopTableOfContents({ activeId, className = "" }) {
  return (
    <aside className={`toc-desktop ${className}`.trim()} aria-label="In this guide">
      <div className="toc-inner">
        <span className="toc-title">In This Guide</span>
        <nav>
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={sectionUrl(item.id)}
              className={activeId === item.id ? "active" : ""}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function TableOfContents({ activeId }) {
  return (
    <>
      <DesktopTableOfContents activeId={activeId} />
      <details className="toc-mobile">
        <summary>
          <span>In This Guide</span>
          <ChevronIcon />
        </summary>
        <nav>
          {tocItems.map((item) => (
            <a key={item.id} href={sectionUrl(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>
      </details>
    </>
  );
}

function SourceNote({ children, href }) {
  return (
    <p className="source-note">
      Source: {href ? <a href={href} target="_blank" rel="noopener noreferrer">{children}</a> : children}
    </p>
  );
}

function ResponsiveTable({ columns, rows, rowKey, className = "" }) {
  return (
    <div className={`responsive-table ${className}`}>
      <div className="table-desktop-wrap">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[rowKey]}>
                {columns.map((column, index) => (
                  <td key={column.key} data-label={column.label}>
                    {index === 0 ? <strong>{row[column.key]}</strong> : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-mobile-list">
        {rows.map((row) => (
          <article className="table-mobile-item" key={row[rowKey]}>
            <h3>{row[columns[0].key]}</h3>
            {columns.slice(1).map((column) => (
              <div className="mobile-field" key={column.key}>
                <span>{column.label}</span>
                <p>{row[column.key]}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const panelId = useMemo(
    () => `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    [question]
  );

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{question}</span>
          <ChevronIcon open={open} />
        </button>
      </h3>
      <div id={panelId} className="faq-answer" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

function SAEJ2450AutomotiveQualityGuide() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const targets = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!targets.length || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.08, 0.25] }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="sae-guide">
      <style>{styles}</style>

      <section className="hero-section">
        <div className="shell">
          <Breadcrumbs />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Automotive Translation Quality</p>
              <h1>SAE J2450 Translation Quality Metric: A Practical Guide for Automotive Content</h1>
              <p className="hero-deck">
                Learn what SAE J2450 evaluates, how its error-based scoring supports automotive service-information quality, and why HMI, voice, software, regulatory, and customer-facing content require additional validation.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={sectionUrl("what-is-sae-j2450")}>
                  <span>Explore the Guide</span>
                  <ArrowIcon />
                </a>
                <a className="button button-secondary" href={sectionUrl("when-j2450-is-not-enough")}>
                  <span>View the Applicability Matrix</span>
                  <ArrowIcon />
                </a>
              </div>
              <div className="hero-meta" aria-label="Guide information">
                <span>Specialist Guide</span>
                <span className="meta-divider" aria-hidden="true">•</span>
                <span>Approximately 22 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="takeaways-section" aria-labelledby="key-takeaways-heading">
        <div className="shell">
          <div className="takeaways-header">
            <div>
              <p className="eyebrow">Key Takeaways</p>
              <h2 id="key-takeaways-heading">Use the Metric Where It Fits—Then Validate the Content Where It Will Be Used</h2>
            </div>
            <p>
              SAE J2450 adds structure and comparability to automotive translation evaluation. Its greatest value comes from placing that structure inside a content-specific quality program rather than treating one score as the entire answer.
            </p>
          </div>
          <div className="takeaways-grid">
            {takeaways.map((item) => (
              <div className="takeaway-item" key={item.title}>
                <span className="takeaway-check"><CheckIcon /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="article-region">
        <div className="shell article-layout">
          <TableOfContents activeId={activeId} />
          <article className="article-content">
            <section id="what-is-sae-j2450" className="chapter">
              <div className="reading-block">
                <h2>What Is the SAE J2450 Translation Quality Metric?</h2>
                <p className="section-lead">
                  SAE J2450 is an error-based metric developed for evaluating translations of automotive service information. An evaluator compares source and target content, identifies qualifying errors, classifies them by type and severity, and applies the metric’s prescribed scoring approach.
                </p>
                <p>
                  SAE lists <strong>J2450_201608</strong> as the current edition of the Translation Quality Metric. The document is stabilized at its last active revision level. SAE also publishes <strong>J2450/1_201910</strong>, a supplemental training document intended to help clients, translation suppliers, trainers, and evaluators integrate the metric into business practices.
                </p>
                <p>
                  The metric can be applied across source and target languages and does not depend on whether the translation was produced by a human translator, a computer-assisted workflow, or machine translation.
                </p>
              </div>

              <div className="at-a-glance" aria-label="SAE J2450 at a glance">
                <h3>SAE J2450 at a Glance</h3>
                <dl>
                  {atAGlance.map(([term, description]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{description}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="reading-block">
                <h3>What SAE J2450 Is Not</h3>
                <p>
                  The metric has a precise role. It should not be presented as SAE certification of a translation, a vehicle-safety certification, a regulatory approval process, a complete quality-management system, or a universal usability test.
                </p>
                <ul className="check-list neutral">
                  <li>It does not certify a translation or translation supplier.</li>
                  <li>It does not guarantee that vehicle content is technically correct or safe.</li>
                  <li>It does not replace independent linguistic or subject-matter review.</li>
                  <li>It does not validate interface behavior, speech recognition, layout, or regulatory acceptance.</li>
                  <li>It does not establish one universal passing score for every organization and content type.</li>
                </ul>
                <SourceNote href="https://saemobilus.sae.org/standards/j2450_201608-translation-quality-metric">
                  SAE J2450_201608 — Translation Quality Metric
                </SourceNote>
              </div>
            </section>

            <section id="why-structured-quality" className="chapter">
              <div className="reading-block">
                <h2>Why Automotive Translation Quality Requires More Than Proofreading</h2>
                <p className="section-lead">
                  Automotive translation spans technical documents, software, speech, safety messages, regulatory materials, training, and customer communications. These content types do not share the same audience, medium, purpose, or consequence of error.
                </p>
                <p>
                  A terminology inconsistency in an internal presentation may be inconvenient. An incorrect component name in a repair procedure can direct a technician to the wrong part. An omitted condition in a high-voltage instruction may change how a procedure is performed. A translated HMI label can be linguistically correct yet unusable because it is truncated. A voice command can be accurate on paper but fail when spoken or recognized inside a moving vehicle.
                </p>
                <p>
                  Quality therefore has to be established through content planning, terminology, translation, independent review, automated checks, technical validation, in-context testing, final-format inspection, and documented approval.
                </p>
              </div>

              <div className="content-environment" aria-label="Automotive content environment">
                {automotiveContentTypes.map((item) => (
                  <div key={item}>
                    <CheckIcon size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <aside className="principle-callout">
                <span className="callout-label">Stepes Quality Principle</span>
                <p>
                  A translation score is meaningful only when the evaluation method reflects the content’s purpose, audience, medium, and potential consequence of error.
                </p>
              </aside>

              <div className="reading-block">
                <p>
                  SAE J2450 can be an important part of that system, particularly for technical and service information. It should be applied within a broader automotive quality program that routes every content type through the controls it actually requires.
                </p>
                <EditorialLink href="https://www.stepes.com/automotive-translation-services/">
                  Explore Automotive Translation Services
                </EditorialLink>
              </div>
            </section>

            <section id="what-j2450-evaluates" className="chapter">
              <div className="reading-block">
                <h2>What Does SAE J2450 Evaluate?</h2>
                <p className="section-lead">
                  SAE J2450 uses seven principal error categories. The taxonomy gives evaluators a shared vocabulary for documenting what appears in the target output, while category and severity decisions still require language competence, automotive knowledge, context, and training.
                </p>
              </div>

              <ResponsiveTable
                columns={[
                  { key: "category", label: "Error Category" },
                  { key: "meaning", label: "Practical Meaning" },
                  { key: "example", label: "Illustrative Automotive Example" },
                ]}
                rows={errorCategories}
                rowKey="category"
              />

              <div className="reading-block">
                <p className="quality-note">
                  These explanations are simplified for practical understanding. Formal evaluations should use the official SAE publication and applicable training materials for complete definitions, decision rules, severity guidance, penalties, and normalization requirements.
                </p>
                <h3>Category Does Not Equal Root Cause</h3>
                <p>
                  The category describes the visible output defect. It does not necessarily explain why the error occurred. A wrong term could result from an outdated glossary, conflicting references, a poor translation-memory match, missing vehicle context, incorrect AI output, or a reviewer decision that was never recorded.
                </p>
                <p>
                  Correcting the sentence fixes the immediate output. Correcting the terminology, source content, language assets, or workflow helps prevent recurrence.
                </p>
                <EditorialLink href="https://www.stepes.com/terminology-management/">
                  See How Terminology Management Supports Consistency
                </EditorialLink>
              </div>
            </section>

            <section id="how-scoring-works" className="chapter">
              <div className="reading-block">
                <h2>How Does SAE J2450 Scoring Work?</h2>
                <p className="section-lead">
                  The metric turns source-to-target findings into a structured result through a repeatable evaluation sequence. The final score should always be interpreted with the underlying examples, sample limitations, and program specifications.
                </p>
              </div>

              <ol className="scoring-flow">
                {scoringSteps.map((step, index) => (
                  <li key={step.label}>
                    <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.label}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="reading-block">
                <h3>Do Not Treat One Number as the Whole Report</h3>
                <p>
                  A useful evaluation report should identify error categories, severity distribution, representative examples, repeated patterns, terminology failures, likely root causes, corrective actions, and the limitations of the selected sample.
                </p>
                <p>
                  SAE J2450 does not create one universal passing score for every language, supplier, or document. Acceptance criteria should be defined according to content type, audience, risk, sample, evaluation instructions, release stage, and customer requirements.
                </p>
              </div>
            </section>

            <section id="practical-example" className="chapter practical-example-section">
              <div className="reading-block">
                <p className="eyebrow">Illustrative Scenario</p>
                <h2>A Practical Automotive Translation Evaluation Example</h2>
                <p className="section-lead">
                  This fictional service instruction shows how J2450 can identify linguistic defects while technical validation and automated QA address additional risks.
                </p>
              </div>

              <div className="example-source-grid">
                <div className="example-text-block source">
                  <span>Source Instruction</span>
                  <p>
                    Switch off the ignition. Wait five minutes before disconnecting the high-voltage service connector. Tighten the retaining bolt to 8 N·m during reassembly.
                  </p>
                </div>
                <div className="example-text-block target">
                  <span>Translated Meaning</span>
                  <p>
                    Switch off the engine. Disconnect the voltage connector. Tighten the retaining bolt during reassembly.
                  </p>
                </div>
              </div>

              <div className="example-findings">
                {exampleIssues.map((issue, index) => (
                  <article key={issue.title}>
                    <span className="finding-marker">{index + 1}</span>
                    <div>
                      <h3>{issue.title}</h3>
                      <p className="classification">{issue.classification}</p>
                      <p>{issue.explanation}</p>
                      <p><strong>Additional validation:</strong> {issue.validation}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="example-conclusion">
                <h3>What the Example Demonstrates</h3>
                <p>
                  J2450 can classify the visible translation defects. It does not independently confirm that the waiting period, torque value, illustration, cross-reference, or published procedure is technically correct for the exact vehicle configuration.
                </p>
                <p className="example-disclaimer">
                  This example is illustrative. It is not an official SAE evaluation and does not replace the published standard or customer-specific evaluation instructions.
                </p>
              </div>
            </section>

            <section id="where-j2450-adds-value" className="chapter">
              <div className="reading-block">
                <h2>Where SAE J2450 Adds the Most Value</h2>
                <p className="section-lead">
                  SAE J2450 is most useful when the content, evaluation objective, and operating process fit the metric’s intended scope.
                </p>
              </div>

              <div className="value-rows">
                {valueAreas.map((area) => (
                  <article key={area.title}>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                  </article>
                ))}
              </div>

              <div className="reading-block">
                <p>
                  Supplier and language comparisons are meaningful only when the content, sample size, evaluator instructions, terminology, references, and scoring conditions are sufficiently comparable.
                </p>
                <EditorialLink href="https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/">
                  Read the Automotive Technical Manual Translation Guide
                </EditorialLink>
              </div>
            </section>

            <section id="when-j2450-is-not-enough" className="chapter matrix-section">
              <div className="reading-block">
                <p className="eyebrow">Applicability Matrix</p>
                <h2>When SAE J2450 Is Not Enough</h2>
                <p className="section-lead">
                  J2450 does not measure style, and modern vehicle content also includes interfaces, speech, software, connected services, and customer experiences that require validation beyond source-to-target error scoring.
                </p>
              </div>

              <ResponsiveTable
                columns={[
                  { key: "content", label: "Automotive Content" },
                  { key: "support", label: "What J2450 Can Support" },
                  { key: "additional", label: "Additional Quality Controls" },
                ]}
                rows={applicabilityRows}
                rowKey="content"
                className="applicability-table"
              />

              <SourceNote href="https://saemobilus.sae.org/standards/j2450_201608-translation-quality-metric">
                SAE J2450_201608 — Scope and Style Limitation
              </SourceNote>

              <aside className="matrix-conclusion">
                <p>
                  <strong>J2450 can help identify translation errors, but it does not by itself validate whether content functions correctly in a vehicle, interface, voice system, publication, regulatory process, or customer experience.</strong>
                </p>
              </aside>

              <div className="chapter-links">
                <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization-guide/">
                  Automotive HMI and Infotainment Localization Guide
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-ota-software-localization/">
                  Automotive OTA Localization Guide
                </EditorialLink>
              </div>
            </section>
          </article>
        </div>
      </section>

      <section id="quality-framework" className="framework-section">
        <div className="shell">
          <div className="framework-heading">
            <p className="eyebrow eyebrow-dark">Stepes Automotive Quality Framework</p>
            <h2>Beyond a Single Score: Match Quality Controls to Content Risk and Intended Use</h2>
            <p>
              A complete automotive quality program combines governed language assets, qualified people, structured evaluation, content-specific validation, and continuous improvement.
            </p>
          </div>
          <ol className="framework-layers">
            {frameworkLayers.map((layer, index) => (
              <li key={layer.title}>
                <span className="layer-number">{index + 1}</span>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="article-region article-region-lower">
        <div className="shell article-layout">
          <DesktopTableOfContents activeId={activeId} className="toc-continuation" />
          <article className="article-content">
            <section id="ai-machine-translation" className="chapter">
              <div className="reading-block">
                <h2>SAE J2450 in AI and Machine Translation Workflows</h2>
                <p className="section-lead">
                  AI changes how automotive organizations process large content volumes, but it does not change the need to classify risk, define acceptance requirements, and validate the output in context.
                </p>
                <h3>Evaluate the Output, Not the Label</h3>
                <p>
                  Translation should not be accepted or rejected simply because it was produced by a human translator, a neural machine-translation system, or a large language model. The relevant questions are whether the output is accurate, complete, terminologically correct, suitable for its use environment, and supported by the required human and technical validation.
                </p>
                <ul className="ai-question-list">
                  {aiEvaluationQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>

              <div className="ai-fit-grid">
                {aiFit.map((group) => (
                  <article key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="reading-block">
                <h3>What a J2450 Score Does Not Reveal About an AI Workflow</h3>
                <p>
                  An output score does not independently evaluate the underlying model, training-data provenance, confidentiality, prompt governance, terminology integration, consistency across future model versions, or performance on content outside the evaluated sample.
                </p>
              </div>

              <div className="ai-workflow" aria-label="Governed AI and human translation workflow">
                {[
                  "Approved Language Assets",
                  "Content and Risk Classification",
                  "AI or Human Translation",
                  "Professional Review",
                  "J2450 Where Appropriate",
                  "Content-Specific Validation",
                  "Approval and Improvement",
                ].map((item, index, array) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {index < array.length - 1 && <ArrowIcon />}
                  </React.Fragment>
                ))}
              </div>

              <div className="reading-block ai-asset-link">
                <EditorialLink href="https://www.stepes.com/translation-memory/">
                  Explore Translation Memory for Automotive Reuse
                </EditorialLink>
              </div>

              <div className="source-note-group">
                <SourceNote href="https://saemobilus.sae.org/standards/j2450_201608-translation-quality-metric">
                  SAE J2450_201608 — Production-Method-Neutral Evaluation Scope
                </SourceNote>
                <SourceNote href="https://www.iso.org/standard/80701.html">
                  ISO 5060:2024 — Evaluation of Translation Output
                </SourceNote>
              </div>
            </section>

            <section id="implementation" className="chapter">
              <div className="reading-block">
                <h2>How to Implement SAE J2450 in an Automotive Translation Program</h2>
                <p className="section-lead">
                  Successful implementation requires a defined objective, suitable content, qualified evaluators, representative sampling, transparent reporting, and a clear path from findings to corrective action.
                </p>
              </div>

              <ol className="implementation-list">
                {implementationSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="implementation-number">{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="reading-block">
                <p className="quality-note">
                  SAE’s supplemental training document reinforces an important point: implementation depends on evaluator training and integration into client and supplier business practices, not merely access to an error-category list.
                </p>
              </div>
            </section>

            <section id="evaluator-reliability" className="chapter">
              <div className="reading-block">
                <h2>Reliable Scores Require Trained Evaluators and Representative Samples</h2>
                <p className="section-lead">
                  A standardized taxonomy improves consistency, but it cannot remove every judgment call. Evaluator competence and process consistency directly affect the reliability of the result.
                </p>
                <h3>Evaluator Competence</h3>
                <p>
                  A reviewer may be an excellent linguist but lack the automotive knowledge to recognize that two apparently similar terms refer to different components. A technical expert may understand the system but miss a target-language problem. Important evaluations may therefore require both linguistic and technical expertise.
                </p>
                <h3>Calibration</h3>
                <p>
                  Shared test sets, independent scoring, adjudication, recorded decisions, language-specific examples, and periodic recalibration help evaluators apply category and severity rules more consistently.
                </p>
                <h3>Sampling</h3>
                <p>
                  A small sample can reveal immediate risks but may not represent an entire language, supplier, or program. The sample should reflect high-risk sections, new and changed content, reused translations, different products, different production methods, tables, warnings, procedures, and graphics as appropriate.
                </p>
              </div>

              <aside className="principle-callout compact">
                <span className="callout-label">Quality Principle</span>
                <p>Consistency in the evaluation process is as important as consistency in the translation process.</p>
              </aside>

              <div className="reading-block">
                <h3>Comparability</h3>
                <p>
                  Do not compare scores casually when sample size, content difficulty, language pair, source quality, evaluator instructions, reference materials, severity interpretation, or treatment of repeated errors differ materially.
                </p>
                <SourceNote href="https://www.iso.org/standard/80701.html">
                  ISO 5060:2024 — Evaluator Competence and Sampling
                </SourceNote>
              </div>
            </section>

            <section id="continuous-improvement" className="chapter">
              <div className="reading-block">
                <h2>From Error Scores to Automotive Quality Improvement</h2>
                <p className="section-lead">
                  The most valuable quality program does not simply count errors. It uses quality data to identify patterns, correct root causes, and reduce recurrence across future content and releases.
                </p>
              </div>

              <div className="improvement-grid">
                {improvementColumns.map((column) => (
                  <article key={column.title}>
                    <h3>{column.title}</h3>
                    <ul>
                      {column.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="reading-block">
                <h3>Measure Trends Over Time</h3>
                <p>
                  Recurring results are often more useful than an isolated score. Useful indicators include error rate by category, serious-error frequency, terminology compliance, repeated-error recurrence, language trends, supplier consistency, correction turnaround, and improvement after corrective action.
                </p>
                <EditorialLink href="https://www.stepes.com/translation-reporting-analytics/">
                  Explore Translation Reporting and Analytics
                </EditorialLink>
              </div>
            </section>

            <section id="framework-comparison" className="chapter">
              <div className="reading-block">
                <h2>How SAE J2450 Relates to Other Translation Quality Frameworks</h2>
                <p className="section-lead">
                  SAE J2450, ISO standards, and MQM address different layers of translation quality. They should not be treated as interchangeable certifications.
                </p>
              </div>

              <ResponsiveTable
                columns={[
                  { key: "framework", label: "Framework" },
                  { key: "purpose", label: "Primary Purpose" },
                  { key: "scope", label: "Scope" },
                  { key: "role", label: "Automotive Role" },
                ]}
                rows={comparisonRows}
                rowKey="framework"
                className="comparison-table"
              />

              <div className="comparison-explanations">
                <article>
                  <h3>SAE J2450 and ISO 17100</h3>
                  <p>
                    J2450 evaluates defined errors in automotive service-information output. ISO 17100 addresses the processes and resources used to organize and deliver professional translation services.
                  </p>
                </article>
                <article>
                  <h3>SAE J2450 and ISO 5060</h3>
                  <p>
                    ISO 5060 provides broader guidance for analytic evaluation of human, post-edited machine, and unedited machine translation output, including evaluator competence and sampling.
                  </p>
                </article>
                <article>
                  <h3>SAE J2450 and ISO 18587</h3>
                  <p>
                    ISO 18587 focuses on the full human post-editing process and post-editor competence for machine-translation output. J2450 can evaluate suitable output after production.
                  </p>
                </article>
                <article>
                  <h3>SAE J2450 and MQM</h3>
                  <p>
                    MQM offers a configurable hierarchy that can include style, locale, audience, design, and markup—useful for automotive software, HMI, marketing, and other content beyond J2450’s narrower scope.
                  </p>
                </article>
              </div>

              <aside className="decision-callout">
                <span>The Better Question</span>
                <p>
                  Which combination of processes, metrics, evaluators, language assets, testing methods, and approvals fits this content and its intended use?
                </p>
              </aside>
            </section>

            <section id="stepes-support" className="chapter stepes-section">
              <div className="reading-block">
                <h2>How Stepes Supports SAE J2450 Automotive Quality Evaluation</h2>
                <p className="section-lead">
                  Stepes can incorporate SAE J2450 where appropriate within a broader automotive translation quality workflow tailored to the content, language, vehicle system, market, release environment, and potential consequence of error.
                </p>
              </div>

              <ol className="stepes-workflow-list">
                {stepesWorkflow.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>

              <div className="content-routes">
                <article>
                  <h3>Service Information</h3>
                  <p>J2450 evaluation plus technical review, numbers and units checks, structured-content QA, and final-format inspection.</p>
                </article>
                <article>
                  <h3>HMI and Infotainment</h3>
                  <p>Linguistic review plus character limits, interface states, screenshots, contextual review, truncation testing, and functional validation.</p>
                </article>
                <article>
                  <h3>Voice Systems</h3>
                  <p>Script review plus pronunciation, intent, speech-recognition, spoken-naturalness, and acoustic testing.</p>
                </article>
                <article>
                  <h3>Regulatory and High-Assurance Content</h3>
                  <p>Specialist review, traceable approvals, customer validation, and strict version management in addition to linguistic QA.</p>
                </article>
                <article>
                  <h3>Marketing and Customer Experience</h3>
                  <p>Accuracy review plus transcreation, brand-voice review, cultural evaluation, legal checks, and local-market approval.</p>
                </article>
                <article>
                  <h3>OTA and Continuous Releases</h3>
                  <p>Source-change detection, versioned language assets, translation-memory reuse, rapid validation, and synchronized release approval.</p>
                </article>
              </div>

              <div className="reading-block">
                <EditorialLink href="https://www.stepes.com/automotive-translation-services/">
                  Explore the Complete Automotive Translation Services Program
                </EditorialLink>
              </div>
            </section>

            <section id="faq" className="chapter faq-section">
              <div className="reading-block">
                <h2>SAE J2450 Automotive Translation Quality FAQ</h2>
                <p className="section-lead">
                  These answers clarify the metric’s role, scope, limitations, and relationship to a complete automotive quality program.
                </p>
              </div>
              <div className="faq-panel">
                {faqs.map((faq) => (
                  <FaqItem key={faq.question} {...faq} />
                ))}
              </div>
            </section>

            <section id="sources" className="chapter sources-section">
              <div className="reading-block">
                <h2>Primary Standards and Quality Frameworks</h2>
                <p>
                  Formal evaluation and implementation decisions should be based on authorized copies of the applicable standards and the organization’s approved quality specifications.
                </p>
              </div>
              <div className="sources-list">
                {sources.map((source) => (
                  <a key={source.title} href={source.href} target="_blank" rel="noopener noreferrer">
                    <span>{source.organization}</span>
                    <strong>{source.title}</strong>
                    <ExternalIcon />
                  </a>
                ))}
              </div>
            </section>

            <section id="complete-quality-system" className="chapter conclusion-section">
              <div className="reading-block">
                <h2>Use SAE J2450 as Part of a Complete Automotive Quality System</h2>
                <p className="section-lead">
                  SAE J2450 is most effective when it is used for the content it was designed to evaluate and connected to the broader controls required by modern vehicle programs.
                </p>
                <p>
                  For automotive service information, the metric can bring valuable structure to error classification, severity decisions, supplier evaluation, and recurring quality monitoring. For HMI, voice, ADAS, regulatory, marketing, OTA, and customer-facing content, the same linguistic discipline should be supplemented with the technical, functional, visual, speech, market, and approval methods that reflect the final use environment.
                </p>
                <p>
                  The practical next step is not to choose one score for every project. It is to classify the content, define the risk, select the appropriate metric, train the evaluators, validate the output in context, and feed approved findings back into terminology, translation memory, source content, and future releases.
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-heading">
        <div className="shell">
          <div className="related-heading">
            <h2 id="related-heading">Related Automotive Translation Resources</h2>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article key={resource.title}>
                <a href={resource.href}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <span>
                    Explore Resource <ArrowIcon />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2>Build the Right Quality Framework for Every Automotive Content Type</h2>
              <p>
                From service documentation and engineering content to HMI, voice, connected-vehicle software, EV systems, regulatory materials, training, and customer communications, Stepes helps automotive organizations match language workflows and validation controls to content risk and intended use.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Automotive Translation Expert</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="https://app.stepes.com/quote/">
                <span>Request a Translation Quote</span>
                <ArrowIcon />
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
    --magenta: #C11D63;
    --magenta-dark: #9F1D55;
    --magenta-deep: #7A1542;
    --blush: #FDF2F7;
    --blush-strong: #F7E5EE;
    --dark-eyebrow: #F2A7C6;
    --ink: #121826;
    --ink-soft: #2F3B52;
    --muted: #5C6678;
    --line: #DEE3EA;
    --line-strong: #CBD2DC;
    --surface: #F6F7F9;
    --dark: #151824;
    --dark-soft: #202434;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .sae-guide {
    width: 100%;
    overflow-x: clip;
    color: var(--ink);
    background: var(--white);
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .sae-guide a { color: inherit; }
  .sae-guide button, .sae-guide a { -webkit-tap-highlight-color: transparent; }
  .sae-guide :focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.32);
    outline-offset: 3px;
  }

  .shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 48px;
    padding-right: 48px;
  }

  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3 { color: var(--ink); font-weight: 600; }
  h1 {
    max-width: 1000px;
    margin-bottom: 24px;
    font-size: clamp(38px, 4vw, 48px);
    line-height: 1.1;
    letter-spacing: -0.038em;
  }
  h2 {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 1.16;
    letter-spacing: -0.025em;
  }
  h3 {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 1.28;
    letter-spacing: -0.014em;
  }
  p, li, dd, td {
    font-size: 18px;
    line-height: 1.68;
  }
  p { color: var(--ink-soft); margin-bottom: 22px; }
  strong { font-weight: 600; }

  .eyebrow {
    margin: 0 0 16px;
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.3 !important;
    letter-spacing: 0.13em !important;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--dark-eyebrow) !important; }

  .breadcrumbs { padding-top: 26px; margin-bottom: 0; }
  .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .breadcrumbs li {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    min-width: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .breadcrumbs a {
    color: var(--muted);
    text-decoration: none;
  }
  .breadcrumbs a:hover { color: var(--magenta); }
  .breadcrumb-separator { color: #9AA3B2; }
  .breadcrumb-current { color: #3B4658; font-weight: 500; overflow-wrap: anywhere; }
  .breadcrumbs a { padding: 3px 0; }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding-bottom: 108px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 75%, #FAFAFB 100%);
  }
  .hero-grid {
    max-width: 1040px;
    padding-top: 24px;
  }
  .hero-copy { min-width: 0; max-width: 1000px; }
  .hero-deck {
    max-width: 880px;
    margin-bottom: 32px;
    color: #3E4A60;
    font-size: 20px;
    line-height: 1.62;
  }
  .hero-actions, .final-cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }
  .button {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 22px;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
  }
  .button:hover { transform: translateY(-1px); }
  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible {
    color: #FFFFFF !important;
    background: var(--magenta);
  }
  .button-primary *, .button-primary svg, .button-primary path { color: #FFFFFF !important; stroke: #FFFFFF !important; }
  .button-primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 24px rgba(193, 29, 99, 0.2); }
  .button-secondary {
    color: var(--ink) !important;
    background: #FFFFFF;
    border-color: var(--line-strong);
  }
  .button-secondary:hover { border-color: #9EA7B5; box-shadow: 0 8px 22px rgba(18, 24, 38, 0.08); }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-top: 26px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }


  .takeaways-section {
    padding: 86px 0 92px;
    border-top: 1px solid #ECEEF2;
    background: var(--surface);
  }
  .takeaways-header {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 0.75fr);
    gap: 72px;
    align-items: end;
    padding-bottom: 38px;
    border-bottom: 1px solid var(--line);
  }
  .takeaways-header h2 { max-width: 690px; margin-bottom: 0; }
  .takeaways-header > p { max-width: 540px; margin-bottom: 4px; font-size: 18px; }
  .takeaways-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 72px;
    margin-top: 8px;
  }
  .takeaway-item {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 16px;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }
  .takeaway-check {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    margin-top: 2px;
    border-radius: 50%;
    color: var(--magenta);
    background: var(--blush-strong);
  }
  .takeaway-item h3 { margin-bottom: 8px; font-size: 20px; }
  .takeaway-item p { margin-bottom: 0; font-size: 16px; line-height: 1.62; }

  .article-region { padding: 104px 0 40px; }
  .article-region-lower { padding-top: 102px; padding-bottom: 96px; }
  .article-layout {
    display: grid;
    grid-template-columns: 240px minmax(0, 896px);
    justify-content: center;
    align-items: start;
    gap: 48px;
  }
  .toc-desktop { min-width: 0; align-self: stretch; }
  .toc-inner {
    position: sticky;
    top: 112px;
    max-height: calc(100vh - 136px);
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 4px 20px 12px 0;
    border-right: 1px solid var(--line);
    scrollbar-width: thin;
    scrollbar-color: #C9CFD8 transparent;
  }
  .toc-title {
    display: block;
    margin-bottom: 16px;
    color: var(--ink);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }
  .toc-inner nav { display: grid; }
  .toc-inner a {
    position: relative;
    padding: 8px 0 8px 14px;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.35;
    text-decoration: none;
    transition: color 160ms ease;
  }
  .toc-inner a::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 9px;
    bottom: 9px;
    width: 2px;
    border-radius: 2px;
    background: transparent;
  }
  .toc-inner a:hover { color: var(--magenta); }
  .toc-inner a.active { color: var(--magenta); font-weight: 600; }
  .toc-inner a.active::before { background: var(--magenta); }
  .toc-mobile { display: none; }

  .article-content { min-width: 0; }
  .chapter {
    scroll-margin-top: 118px;
    padding: 0 0 98px;
  }
  .chapter + .chapter { padding-top: 4px; }
  .chapter:last-child { padding-bottom: 0; }
  .reading-block { max-width: 760px; }
  .section-lead {
    margin-bottom: 26px;
    color: #354156;
    font-size: 20px;
    line-height: 1.62;
  }
  .reading-block ul, .reading-block ol { padding-left: 24px; }
  .reading-block li { margin-bottom: 10px; color: var(--ink-soft); }

  .content-environment {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 44px;
    max-width: 820px;
    margin: 34px 0 42px;
    border-top: 1px solid var(--line);
  }
  .content-environment > div {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    padding: 15px 0;
    border-bottom: 1px solid var(--line);
  }
  .content-environment svg { margin-top: 4px; color: var(--magenta); }
  .content-environment span { color: var(--ink-soft); font-size: 16px; line-height: 1.5; }

  .at-a-glance {
    width: 100%;
    margin: 38px 0 42px;
    padding: 30px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: #FBFBFC;
  }
  .at-a-glance h3 { margin-bottom: 22px; }
  .at-a-glance dl { margin: 0; }
  .at-a-glance dl > div {
    display: grid;
    grid-template-columns: minmax(155px, 0.45fr) minmax(0, 1fr);
    gap: 28px;
    padding: 16px 0;
    border-top: 1px solid var(--line);
  }
  .at-a-glance dt { color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.5; }
  .at-a-glance dd { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.6; }

  .check-list { margin: 20px 0 28px; list-style: none; padding: 0 !important; }
  .check-list li { position: relative; padding-left: 28px; }
  .check-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 11px;
    height: 2px;
    border-radius: 2px;
    background: var(--magenta);
  }
  .source-note {
    margin-top: 26px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .source-note a { color: #4E596C; text-underline-offset: 3px; }
  .source-note a:hover { color: var(--magenta); }
  .source-note-group {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 24px;
    margin-top: 20px;
  }
  .source-note-group .source-note { margin-top: 0; }

  .principle-callout, .decision-callout {
    max-width: 810px;
    margin: 38px 0 42px;
    padding: 30px 32px;
    border-left: 3px solid var(--magenta);
    border-radius: 0 20px 20px 0;
    background: var(--blush);
  }
  .principle-callout.compact { max-width: 760px; }
  .callout-label, .decision-callout > span {
    display: block;
    margin-bottom: 10px;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  .principle-callout p, .decision-callout p {
    margin: 0;
    color: var(--ink);
    font-size: 22px;
    font-weight: 600;
    line-height: 1.46;
  }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    min-height: 44px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    text-decoration: none;
  }
  .editorial-link svg { transition: transform 160ms ease; }
  .editorial-link:hover svg { transform: translateX(3px); }

  .responsive-table { width: 100%; margin: 36px 0 42px; }
  .table-desktop-wrap { width: 100%; overflow-x: auto; }
  .responsive-table table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }
  .responsive-table th {
    padding: 16px 18px;
    border-bottom: 2px solid var(--line-strong);
    color: var(--ink);
    background: #F7F8FA;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
    text-align: left;
    vertical-align: bottom;
  }
  .responsive-table td {
    padding: 20px 18px;
    border-bottom: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.58;
    text-align: left;
    vertical-align: top;
  }
  .responsive-table td strong { color: var(--ink); }
  .responsive-table th:first-child, .responsive-table td:first-child { width: 24%; }
  .responsive-table th:nth-child(2), .responsive-table td:nth-child(2) { width: 34%; }
  .responsive-table th:nth-child(3), .responsive-table td:nth-child(3) { width: 42%; }
  .comparison-table th:first-child, .comparison-table td:first-child { width: 16%; }
  .comparison-table th:nth-child(2), .comparison-table td:nth-child(2) { width: 24%; }
  .comparison-table th:nth-child(3), .comparison-table td:nth-child(3) { width: 27%; }
  .comparison-table th:nth-child(4), .comparison-table td:nth-child(4) { width: 33%; }
  .table-mobile-list { display: none; }
  .quality-note {
    margin: 34px 0;
    padding: 22px 24px;
    border-radius: 18px;
    color: #3C4658;
    background: #F4F5F7;
    font-size: 16px;
    line-height: 1.62;
  }

  .scoring-flow {
    margin: 36px 0 46px;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line);
  }
  .scoring-flow li {
    display: grid;
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 24px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }
  .step-number {
    padding-top: 4px;
    color: var(--magenta);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }
  .scoring-flow h3 { margin-bottom: 6px; font-size: 22px; }
  .scoring-flow p { max-width: 690px; margin: 0; font-size: 17px; }

  .practical-example-section {
    margin: 10px 0 104px;
    padding: 58px 52px 56px;
    border-radius: 30px;
    background: #F7F8FA;
  }
  .example-source-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    margin: 34px 0 40px;
  }
  .example-text-block {
    min-height: 100%;
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #FFFFFF;
  }
  .example-text-block.target { border-color: #E4AFC8; }
  .example-text-block > span {
    display: block;
    margin-bottom: 12px;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }
  .example-text-block p { margin: 0; color: var(--ink); font-size: 17px; line-height: 1.66; }
  .example-findings { border-top: 1px solid var(--line); }
  .example-findings article {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 20px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }
  .finding-marker {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    margin-top: 2px;
    border-radius: 50%;
    color: #FFFFFF;
    background: var(--magenta);
    font-size: 14px;
    font-weight: 600;
  }
  .example-findings h3 { margin-bottom: 4px; font-size: 21px; }
  .example-findings p { margin-bottom: 10px; font-size: 16px; }
  .example-findings p:last-child { margin-bottom: 0; }
  .classification { color: var(--magenta) !important; font-weight: 600; }
  .example-conclusion { max-width: 740px; margin-top: 38px; }
  .example-conclusion h3 { font-size: 22px; }
  .example-disclaimer { color: var(--muted); font-size: 16px; font-style: italic; }

  .value-rows { margin: 34px 0 42px; border-top: 1px solid var(--line); }
  .value-rows article {
    display: grid;
    grid-template-columns: minmax(210px, 0.42fr) minmax(0, 1fr);
    gap: 48px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }
  .value-rows h3 { margin: 0; font-size: 21px; }
  .value-rows p { margin: 0; font-size: 17px; }

  .matrix-conclusion {
    margin: 28px 0 24px;
    padding: 26px 28px;
    border-radius: 20px;
    background: var(--blush);
  }
  .matrix-conclusion p { margin: 0; color: var(--ink); font-size: 18px; line-height: 1.58; }
  .chapter-links { display: flex; flex-wrap: wrap; gap: 12px 32px; }

  .framework-section {
    scroll-margin-top: 112px;
    padding: 104px 0;
    color: #FFFFFF;
    background: var(--dark);
  }
  .framework-heading {
    max-width: 890px;
    margin-bottom: 52px;
  }
  .framework-heading h2 { color: #FFFFFF; font-size: 36px; }
  .framework-heading > p:last-child { max-width: 800px; margin-bottom: 0; color: #D3D8E2; font-size: 19px; }
  .framework-layers {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 72px;
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba(255,255,255,0.14);
  }
  .framework-layers li {
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr);
    gap: 20px;
    padding: 30px 0;
    border-bottom: 1px solid rgba(255,255,255,0.14);
  }
  .layer-number {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(242,167,198,0.45);
    border-radius: 50%;
    color: var(--dark-eyebrow);
    font-size: 14px;
    font-weight: 600;
  }
  .framework-layers h3 { margin-bottom: 8px; color: #FFFFFF; font-size: 21px; }
  .framework-layers p { margin: 0; color: #BFC6D3; font-size: 16px; line-height: 1.62; }

  .ai-question-list {
    margin: 28px 0 4px;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line);
  }
  .ai-question-list li {
    position: relative;
    margin: 0;
    padding: 15px 0 15px 28px;
    border-bottom: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.55;
  }
  .ai-question-list li::before {
    content: "?";
    position: absolute;
    left: 0;
    top: 15px;
    width: 18px;
    height: 18px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--magenta);
    background: var(--blush);
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
  }

  .ai-fit-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    margin: 36px 0 42px;
  }
  .ai-fit-grid article {
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #FFFFFF;
  }
  .ai-fit-grid article:last-child { background: #FAF4F7; border-color: #ECD1DE; }
  .ai-fit-grid h3 { font-size: 21px; }
  .ai-fit-grid ul { margin: 18px 0 0; padding: 0; list-style: none; }
  .ai-fit-grid li {
    position: relative;
    padding: 11px 0 11px 22px;
    border-top: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.5;
  }
  .ai-fit-grid li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1.08em;
    width: 8px;
    height: 2px;
    border-radius: 2px;
    background: var(--magenta);
  }
  .ai-workflow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin: 34px 0 20px;
    padding: 24px;
    border-radius: 20px;
    background: #F5F6F8;
  }
  .ai-workflow span {
    padding: 8px 11px;
    border-radius: 10px;
    color: var(--ink);
    background: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
  }
  .ai-workflow svg { color: #8E97A6; }

  .implementation-list {
    margin: 38px 0 42px;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line);
  }
  .implementation-list li {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 24px;
    padding: 29px 0;
    border-bottom: 1px solid var(--line);
  }
  .implementation-number {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: var(--magenta);
    background: var(--blush);
    font-size: 15px;
    font-weight: 600;
  }
  .implementation-list h3 { margin-bottom: 7px; font-size: 21px; }
  .implementation-list p { max-width: 720px; margin: 0; font-size: 17px; }

  .improvement-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin: 36px 0 42px;
  }
  .improvement-grid article {
    padding: 25px 24px;
    border-top: 3px solid var(--magenta);
    background: #F7F8FA;
  }
  .improvement-grid h3 { font-size: 20px; }
  .improvement-grid ul { margin: 16px 0 0; padding: 0; list-style: none; }
  .improvement-grid li {
    padding: 10px 0;
    border-top: 1px solid var(--line);
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.48;
  }

  .comparison-explanations {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 46px;
    margin: 34px 0 40px;
    border-top: 1px solid var(--line);
  }
  .comparison-explanations article { padding: 28px 0; border-bottom: 1px solid var(--line); }
  .comparison-explanations h3 { font-size: 20px; }
  .comparison-explanations p { margin: 0; font-size: 16px; }

  .stepes-workflow-list {
    margin: 36px 0 46px;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--line);
  }
  .stepes-workflow-list li {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
  }
  .stepes-workflow-list span { color: var(--magenta); font-size: 14px; font-weight: 600; line-height: 1.65; }
  .stepes-workflow-list p { margin: 0; color: var(--ink); font-size: 17px; }
  .content-routes {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 42px;
    margin: 38px 0 42px;
    border-top: 1px solid var(--line);
  }
  .content-routes article { padding: 28px 0; border-bottom: 1px solid var(--line); }
  .content-routes h3 { font-size: 20px; }
  .content-routes p { margin: 0; font-size: 16px; }

  .faq-panel {
    margin-top: 36px;
    border-top: 1px solid var(--line-strong);
  }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item h3 { margin: 0; }
  .faq-item button {
    width: 100%;
    min-height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 22px 4px;
    border: 0;
    color: var(--ink);
    background: transparent;
    font: inherit;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    text-align: left;
    cursor: pointer;
  }
  .faq-item button svg { flex: 0 0 auto; color: var(--magenta); transition: transform 180ms ease; }
  .chevron-open { transform: rotate(180deg); }
  .faq-answer { max-width: 780px; padding: 0 56px 22px 4px; }
  .faq-answer p { margin: 0; font-size: 16px; line-height: 1.66; }

  .sources-list { margin-top: 34px; border-top: 1px solid var(--line); }
  .sources-list a {
    display: grid;
    grid-template-columns: minmax(150px, 0.38fr) minmax(0, 1fr) auto;
    align-items: center;
    gap: 24px;
    min-height: 78px;
    padding: 18px 0;
    border-bottom: 1px solid var(--line);
    color: var(--ink);
    text-decoration: none;
  }
  .sources-list a:hover strong { color: var(--magenta); }
  .sources-list span { color: var(--muted); font-size: 14px; line-height: 1.5; }
  .sources-list strong { font-size: 16px; line-height: 1.5; transition: color 160ms ease; }
  .sources-list svg { color: var(--magenta); }

  .conclusion-section {
    padding-top: 96px !important;
    border-top: 1px solid var(--line);
  }
  .conclusion-section .reading-block { max-width: 780px; }

  .related-section {
    padding: 94px 0 100px;
    border-top: 1px solid var(--line);
    background: #F7F8FA;
  }
  .related-heading { max-width: 760px; margin-bottom: 42px; }
  .related-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 64px;
    border-top: 1px solid var(--line-strong);
  }
  .related-grid article { border-bottom: 1px solid var(--line); }
  .related-grid a {
    min-height: 100%;
    display: block;
    padding: 30px 0 32px;
    text-decoration: none;
  }
  .related-grid h3 { margin-bottom: 10px; font-size: 21px; transition: color 160ms ease; }
  .related-grid p { max-width: 540px; margin-bottom: 16px; font-size: 16px; line-height: 1.62; }
  .related-grid a > span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--magenta);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }
  .related-grid a:hover h3 { color: var(--magenta); }
  .related-grid a:hover svg { transform: translateX(3px); }
  .related-grid svg { transition: transform 160ms ease; }

  .final-cta-section { padding: 96px 0 112px; background: #FFFFFF; }
  .final-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
    gap: 64px;
    padding: 54px 58px;
    border: 1px solid #E9CAD9;
    border-radius: 30px;
    background: var(--blush);
  }
  .final-cta h2 { max-width: 760px; margin-bottom: 18px; }
  .final-cta p:not(.eyebrow) { max-width: 820px; margin-bottom: 0; font-size: 18px; }
  .final-cta-actions { min-width: 315px; flex-direction: column; align-items: stretch; }
  .final-cta-actions .button { width: 100%; }

  @media (max-width: 1180px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .article-layout { grid-template-columns: 230px minmax(0, 1fr); gap: 44px; }
    .final-cta { grid-template-columns: 1fr; align-items: start; }
    .final-cta-actions { min-width: 0; max-width: 420px; }
  }

  @media (max-width: 980px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .hero-section { padding-bottom: 88px; }
    .hero-grid { padding-top: 24px; }
    .hero-copy { max-width: 900px; }
    .takeaways-header { grid-template-columns: 1fr; gap: 24px; }
    .takeaways-header > p { max-width: 760px; }
    .article-region { padding-top: 78px; }
    .article-layout { display: block; }
    .toc-desktop { display: none; }
    .toc-mobile {
      display: block;
      margin: 0 0 54px;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: #FFFFFF;
    }
    .toc-mobile summary {
      min-height: 58px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 15px 18px;
      color: var(--ink);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      list-style: none;
    }
    .toc-mobile summary::-webkit-details-marker { display: none; }
    .toc-mobile summary svg { transition: transform 180ms ease; }
    .toc-mobile[open] summary svg { transform: rotate(180deg); }
    .toc-mobile nav { display: grid; padding: 4px 18px 16px; }
    .toc-mobile nav a {
      padding: 11px 0;
      border-top: 1px solid var(--line);
      color: var(--ink-soft);
      font-size: 16px;
      line-height: 1.42;
      text-decoration: none;
    }
    .article-content { max-width: 860px; margin: 0 auto; }
    .framework-layers { gap: 0 40px; }
    .improvement-grid { grid-template-columns: 1fr; }
    .final-cta { padding: 46px 42px; }
  }

  @media (max-width: 768px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    p, li, dd, td { font-size: 17px; }
    .hero-deck { font-size: 18px; }
    .takeaways-section { padding: 72px 0; }
    .takeaways-grid { grid-template-columns: 1fr; }
    .takeaway-item { padding: 26px 0; }
    .chapter { padding-bottom: 82px; }
    .section-lead { font-size: 18px; }
    .at-a-glance dl > div { grid-template-columns: 1fr; gap: 6px; }
    .content-environment { grid-template-columns: 1fr; gap: 0; }
    .table-desktop-wrap { display: none; }
    .table-mobile-list { display: grid; gap: 16px; }
    .table-mobile-item {
      padding: 24px;
      border: 1px solid var(--line);
      border-radius: 20px;
      background: #FFFFFF;
    }
    .table-mobile-item h3 { margin-bottom: 18px; font-size: 20px; }
    .mobile-field { padding-top: 16px; border-top: 1px solid var(--line); }
    .mobile-field + .mobile-field { margin-top: 16px; }
    .mobile-field > span {
      display: block;
      margin-bottom: 6px;
      color: var(--magenta);
      font-size: 11px;
      font-weight: 600;
      line-height: 1.3;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .mobile-field p { margin: 0; font-size: 16px; }
    .practical-example-section { padding: 44px 28px; }
    .example-source-grid { grid-template-columns: 1fr; }
    .value-rows article { grid-template-columns: 1fr; gap: 10px; }
    .framework-section { padding: 86px 0; }
    .framework-heading h2 { font-size: 32px; }
    .framework-layers { grid-template-columns: 1fr; }
    .ai-fit-grid { grid-template-columns: 1fr; }
    .ai-workflow { display: grid; }
    .ai-workflow svg { transform: rotate(90deg); margin: 0 auto; }
    .comparison-explanations, .content-routes { grid-template-columns: 1fr; }
    .related-grid { grid-template-columns: 1fr; }
    .final-cta-section { padding: 76px 0 88px; }
    .final-cta { padding: 40px 30px; }
  }

  @media (max-width: 520px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .breadcrumbs { padding-top: 18px; margin-bottom: 0; }
    .breadcrumbs ol { row-gap: 3px; }
    .breadcrumbs li { font-size: 14px; }
    .breadcrumbs li:last-child { flex-basis: 100%; }
    .breadcrumbs li:last-child .breadcrumb-separator { display: none; }
    .hero-section { padding-bottom: 72px; }
    .hero-grid { padding-top: 20px; }
    h1 { font-size: 38px; line-height: 1.08; letter-spacing: -0.035em; }
    h2 { font-size: 30px; line-height: 1.18; }
    h3 { font-size: 20px; }
    p, li, dd, td { font-size: 17px; }
    .hero-actions, .final-cta-actions { display: grid; width: 100%; }
    .hero-actions .button, .final-cta-actions .button { width: 100%; }
    .hero-meta { flex-direction: column; align-items: flex-start; gap: 4px; }
    .hero-meta .meta-divider { display: none; }
    .takeaways-section { padding: 64px 0; }
    .takeaways-header { padding-bottom: 30px; }
    .takeaway-item { grid-template-columns: 26px minmax(0, 1fr); gap: 13px; }
    .takeaway-check { width: 26px; height: 26px; }
    .article-region { padding-top: 66px; }
    .toc-mobile { margin-bottom: 44px; }
    .chapter { padding-bottom: 72px; scroll-margin-top: 88px; }
    .at-a-glance { padding: 24px 20px; }
    .principle-callout, .decision-callout { padding: 24px 22px; }
    .principle-callout p, .decision-callout p { font-size: 19px; }
    .scoring-flow li { grid-template-columns: 44px minmax(0, 1fr); gap: 16px; padding: 24px 0; }
    .practical-example-section { margin-left: -4px; margin-right: -4px; padding: 38px 20px; border-radius: 24px; }
    .example-findings article { grid-template-columns: 30px minmax(0, 1fr); gap: 14px; }
    .framework-section { padding: 72px 0; }
    .framework-heading h2 { font-size: 30px; }
    .framework-layers li { grid-template-columns: 34px minmax(0, 1fr); gap: 15px; padding: 26px 0; }
    .implementation-list li { grid-template-columns: 38px minmax(0, 1fr); gap: 16px; }
    .implementation-number { width: 34px; height: 34px; }
    .improvement-grid article { padding: 23px 20px; }
    .faq-item button { min-height: 68px; padding: 20px 0; font-size: 17px; }
    .faq-answer { padding: 0 34px 20px 0; }
    .sources-list a { grid-template-columns: 1fr auto; gap: 8px 18px; }
    .sources-list span { grid-column: 1 / -1; }
    .related-section { padding: 72px 0 76px; }
    .final-cta { padding: 34px 22px; border-radius: 24px; }
  }

  @media (max-width: 350px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    h1 { font-size: 36px; }
    .button { padding-left: 17px; padding-right: 17px; }
    .final-cta { padding-left: 20px; padding-right: 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  }
`;

export default SAEJ2450AutomotiveQualityGuide;
