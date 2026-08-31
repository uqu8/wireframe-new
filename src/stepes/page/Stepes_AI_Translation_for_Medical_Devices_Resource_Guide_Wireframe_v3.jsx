import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Database,
  FileCheck2,
  FileText,
  Gauge,
  Languages,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const canonicalUrl =
  "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-medical-devices/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const breadcrumbs = [
  { label: "Home", href: "https://www.stepes.com/" },
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "AI Translation Insights",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    label: "AI Translation for Medical Devices",
    current: true,
  },
];

const tocItems = [
  { id: "what-ai-means", label: "What AI Translation Means" },
  { id: "risk-based-decisions", label: "Why Risk-Based Decisions Matter" },
  { id: "risk-model", label: "Medical Device AI Translation Risk Model" },
  { id: "where-ai-helps", label: "Where AI Can Improve Efficiency" },
  { id: "human-validation", label: "Where Human Validation Is Essential" },
  { id: "translation-risks", label: "Common AI Translation Risks" },
  { id: "controlled-workflow", label: "Controlled AI + Human Workflow" },
  { id: "validation", label: "How to Validate the Workflow" },
  { id: "traceability", label: "Quality Records and Traceability" },
  { id: "security-governance", label: "Security and AI Governance" },
  { id: "controlled-pilot", label: "Controlled Pilot Checklist" },
  { id: "provider-evaluation", label: "Provider Evaluation" },
  { id: "standards", label: "Standards and Regulatory Context" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const principles = [
  {
    title: "Classify Before Translating",
    description:
      "Determine the audience, intended use, safety impact, confidentiality, and regulatory significance before selecting a translation workflow.",
  },
  {
    title: "Control the Language Foundation",
    description:
      "Use approved source content, terminology, translation memory, style guidance, and product references to reduce ambiguity before AI processing begins.",
  },
  {
    title: "Match Human Review to Risk",
    description:
      "The potential consequence of an error—not the document title alone—should determine who reviews the translation and how extensively it is validated.",
  },
  {
    title: "Test the Complete Workflow",
    description:
      "Evaluate the model, language assets, automated checks, professional reviewers, contextual QA, and approval process as one operating system.",
  },
  {
    title: "Preserve Evidence",
    description:
      "Maintain source versions, workflow decisions, quality results, reviewer records, corrections, approvals, and final release files.",
  },
];

const aiMethods = [
  {
    icon: Languages,
    title: "Neural Machine Translation",
    description:
      "Neural machine translation produces target-language text by learning multilingual patterns from large datasets. It is commonly used for high-volume, recurring, or structured content and may be adapted with domain-specific language assets.",
  },
  {
    icon: BrainCircuit,
    title: "Large Language Model Translation",
    description:
      "Large language models can use broader context, instructions, examples, and supporting references. This can improve flexibility for complex phrasing, but it can also introduce variability, unsupported wording, or inconsistent terminology when controls are weak.",
  },
  {
    icon: Sparkles,
    title: "Generative AI Assistance",
    description:
      "Generative AI can help summarize source context, identify terminology candidates, compare revisions, classify content, and support reviewers. These uses should be governed separately from the final translation itself.",
  },
  {
    icon: Gauge,
    title: "Automated Quality Estimation",
    description:
      "Quality-estimation systems can predict which segments are more likely to contain errors and help prioritize review. A confidence score is not proof that a translation is correct.",
  },
];

const riskDimensions = [
  {
    title: "Intended Use and Audience",
    description:
      "Identify who will rely on the translated content, including healthcare professionals, patients, caregivers, service technicians, regulators, distributors, and internal teams.",
  },
  {
    title: "Consequence of Error",
    description:
      "Consider whether an error could affect patient or operator safety, product performance, diagnosis or treatment, installation, maintenance, regulatory acceptance, or market release.",
  },
  {
    title: "Source-Content Maturity",
    description:
      "Confirm that the source is approved, complete, internally consistent, and free from unresolved abbreviations or conflicting versions before translation begins.",
  },
  {
    title: "Linguistic and Technical Complexity",
    description:
      "Assess clinical and engineering terminology, abbreviations, procedural instructions, conditional logic, warnings, measurements, tables, symbols, and product-specific concepts.",
  },
  {
    title: "Context and Presentation",
    description:
      "Determine whether reviewers will see the content in its final IFU, label, diagram, software screen, training module, or other user-facing environment.",
  },
  {
    title: "Technology, Language, and Data Risk",
    description:
      "Evaluate the specific model, language pair, content type, confidentiality requirements, data-processing controls, and known failure patterns.",
  },
];

const riskTiers = [
  {
    tier: "Tier 1",
    title: "Internal and Exploratory",
    examples:
      "Early research, noncontrolled internal summaries, knowledge discovery, and preliminary content triage.",
    approach:
      "AI translation may support internal understanding when permitted by company policy.",
    controls:
      "Approved processing environment, clear nonrelease status, confidentiality controls, and proportionate sampling.",
  },
  {
    tier: "Tier 2",
    title: "Operational and Customer-Facing",
    examples:
      "Product training, service documentation, support content, noncritical software strings, and general product communications.",
    approach:
      "AI-assisted translation followed by complete professional linguistic review.",
    controls:
      "Approved terminology and translation memory, automated QA, full human review, and product-context references.",
  },
  {
    tier: "Tier 3",
    title: "Regulated or Safety-Relevant",
    examples:
      "Instructions for Use, warnings, precautions, labeling, patient materials, critical software strings, and regulatory documents.",
    approach:
      "AI may assist inside a controlled workflow, but unreviewed output should not be released.",
    controls:
      "Qualified medical linguist, independent revision or specialist validation, numeric and unit QA, contextual review, and documented approval.",
  },
  {
    tier: "Tier 4",
    title: "High-Criticality or Insufficiently Proven",
    examples:
      "Content where an error could contribute to serious harm, novel products, difficult source content, newly introduced models, or insufficiently evaluated languages.",
    approach:
      "Human-led translation or rigorously validated AI-assisted translation with enhanced controls.",
    controls:
      "Dual review, subject-matter involvement, representative pilot evidence, formal acceptance criteria, in-context testing, release authorization, and ongoing monitoring.",
  },
];

const aiBenefits = [
  {
    title: "Create a First Translation Draft",
    description:
      "For suitable content, AI can generate an initial translation that a professional linguist then corrects and validates. The benefit should be measured by final reviewer effort and accepted quality—not generation speed alone.",
  },
  {
    title: "Accelerate Recurring Content Updates",
    description:
      "AI can identify changed source segments, distinguish new text from approved translations, compare revisions, and route only affected content for review.",
  },
  {
    title: "Improve Terminology Application",
    description:
      "AI systems can be instructed or adapted to use approved terminology and can help identify terms that need clarification before translation begins.",
  },
  {
    title: "Detect Potential Quality Issues",
    description:
      "Automated checks can flag missing numbers, altered measurements, inconsistent terms, untranslated text, placeholder errors, formatting differences, and possible additions or omissions.",
  },
  {
    title: "Route Review More Intelligently",
    description:
      "Content classification and quality estimation can direct higher-risk or lower-confidence segments to more specialized reviewers.",
  },
  {
    title: "Support Cross-Document Consistency",
    description:
      "AI and comparison tools can help identify terminology or statement differences across IFUs, labeling, software, training, service manuals, patient education, and regulatory content.",
  },
];

const humanValidationAreas = [
  {
    title: "Meaning and Technical Accuracy",
    description:
      "Confirm that the translation preserves the same instruction, condition, limitation, relationship, and technical meaning as the approved source.",
  },
  {
    title: "Warnings, Precautions, and Contraindications",
    description:
      "Verify signal words, severity, affected users, required actions, prohibited actions, conditions, exceptions, symbols, and consistency with related device documentation.",
  },
  {
    title: "Negation and Conditional Logic",
    description:
      "Review negative instructions, double negatives, “only if” statements, “unless” clauses, conditional sequences, exceptions, and dependencies between procedural steps.",
  },
  {
    title: "Numbers, Units, and Ranges",
    description:
      "Verify decimal values, percentages, dates, doses, concentrations, temperatures, dimensions, pressures, tolerances, electrical values, and minimum or maximum ranges.",
  },
  {
    title: "Product and Component Terminology",
    description:
      "Confirm that similar device components, accessories, menu items, and procedures are not confused, and use product drawings, screenshots, glossaries, and related documents as context.",
  },
  {
    title: "Abbreviations and Acronyms",
    description:
      "Determine whether each abbreviation should be retained, expanded, translated, localized, replaced with an approved equivalent, or defined at first use.",
  },
  {
    title: "Software Variables and Interface Behavior",
    description:
      "Validate placeholders, variables, string concatenation, line breaks, character limits, alarms, bidirectional text, punctuation, and strings reused in multiple contexts.",
  },
  {
    title: "Final-Format and In-Context Quality",
    description:
      "Review the translation in its final document, eIFU, label, packaging, embedded display, application, training module, diagram, or callout.",
  },
];

const roles = [
  {
    role: "Medical Device Translator or Post-Editor",
    responsibility:
      "Validates meaning, terminology, grammar, fluency, completeness, and audience suitability against the source.",
  },
  {
    role: "Independent Reviser",
    responsibility:
      "Performs a second bilingual review, focusing on errors that may have survived the first review.",
  },
  {
    role: "Subject-Matter Expert",
    responsibility:
      "Resolves technical, clinical, engineering, product, or intended-use questions beyond purely linguistic judgment.",
  },
  {
    role: "Localization Engineer",
    responsibility:
      "Protects tags, variables, file structure, software behavior, extraction, reintegration, and technical integrity.",
  },
  {
    role: "In-Country or Market Reviewer",
    responsibility:
      "Confirms authorized local terminology, market conventions, and product-language expectations.",
  },
  {
    role: "Quality or Regulatory Owner",
    responsibility:
      "Determines acceptance criteria and authorizes release under the organization’s quality system.",
  },
  {
    role: "Program Owner",
    responsibility:
      "Maintains workflow rules, language assets, model authorization, performance data, and improvement actions.",
  },
];

const aiRisks = [
  {
    title: "Fluent but Incorrect Output",
    description:
      "AI-generated translations can be grammatically polished while altering technical meaning, making some errors harder to detect than visibly poor translation.",
  },
  {
    title: "Unsupported Additions",
    description:
      "A generative system may add explanatory language, infer missing context, expand an abbreviation incorrectly, or make a statement sound more complete than the source.",
  },
  {
    title: "Omissions",
    description:
      "Models may omit qualifiers, repeated warnings, limitations, table content, negative particles, procedural steps, or text separated by formatting and extraction errors.",
  },
  {
    title: "Hallucinated Translation",
    description:
      "The output may introduce content that is not adequately supported by the source, even when the result sounds natural and authoritative.",
  },
  {
    title: "Terminology Drift",
    description:
      "The same product term may be translated differently across chapters, versions, related documents, software screens, or target languages.",
  },
  {
    title: "Incorrect Normalization",
    description:
      "AI may alter product names, catalog numbers, model identifiers, units, symbols, standards references, software commands, or other protected content.",
  },
  {
    title: "Source Ambiguity",
    description:
      "A system may silently choose one plausible interpretation of unclear source text rather than flagging the need for clarification.",
  },
  {
    title: "Language-Pair Variability",
    description:
      "A workflow that performs well for one high-resource language may behave differently in another language with different morphology, script, terminology, or training-data availability.",
  },
  {
    title: "Model and Output Variability",
    description:
      "Model versions, prompts, context, terminology resources, segmentation, and generation settings can materially change the resulting translation.",
  },
  {
    title: "Confidentiality and Data Exposure",
    description:
      "Submitting device specifications, patient-related content, regulatory files, or unreleased product information to an unapproved AI service can create serious governance risk.",
  },
];

const workflowSteps = [
  {
    title: "Classify the Content",
    description:
      "Document intended use, audience, markets, languages, safety relevance, regulatory significance, confidentiality, required reviewer qualifications, and final publishing environment.",
  },
  {
    title: "Approve and Prepare the Source",
    description:
      "Confirm that the source is complete, internally approved, clearly versioned, aligned with related materials, and accompanied by the references reviewers need.",
  },
  {
    title: "Prepare Translation Memory and Terminology",
    description:
      "Identify approved translations for reuse and prepare product names, components, procedures, warnings, units, abbreviations, interface labels, prohibited variants, and do-not-translate items.",
  },
  {
    title: "Select and Authorize the Technology",
    description:
      "Evaluate the system for the target language, content type, terminology adherence, completeness, numeric preservation, data processing, model-change controls, and known failure patterns.",
  },
  {
    title: "Generate the Translation Draft",
    description:
      "Apply the approved source, current language assets, style guidance, protected-text rules, relevant context, and authorized model configuration.",
  },
  {
    title: "Run Automated Quality Checks",
    description:
      "Check for missing or extra content, terminology deviations, untranslated text, number and unit mismatches, tag errors, punctuation anomalies, and protected-text changes.",
  },
  {
    title: "Conduct Qualified Professional Review",
    description:
      "A qualified native-language medical device linguist compares the output against the source and corrects meaning, terminology, completeness, grammar, fluency, and audience fit.",
  },
  {
    title: "Validate the Final Context",
    description:
      "Review text placement, page references, callouts, diagrams, symbols, tables, warnings, links, interface behavior, line wrapping, and cross-document consistency.",
  },
  {
    title: "Approve and Release",
    description:
      "Record what was approved, the source and target versions, language and locale, reviewers, accepted deviations, approval date, and final release destination.",
  },
  {
    title: "Improve the Program",
    description:
      "Feed validated corrections back into translation memory, terminology, model instructions, automated checks, reviewer guidance, and source-authoring practices.",
  },
];

const errorCategories = [
  {
    label: "Critical Errors",
    description:
      "Errors that could contribute to patient or user harm, materially change intended use, alter a warning or contraindication, identify the wrong component, or create a serious regulatory or operational consequence.",
  },
  {
    label: "Major Errors",
    description:
      "Errors that significantly affect meaning, usability, terminology, completeness, or professional quality but do not meet the project’s definition of critical.",
  },
  {
    label: "Minor Errors",
    description:
      "Localized issues that do not materially change meaning but should be corrected, such as limited grammar, punctuation, or stylistic problems.",
  },
];

const validationMeasures = [
  "Critical, major, and minor error rates",
  "Omission and unsupported-addition rates",
  "Terminology adherence",
  "Numeric and unit accuracy",
  "Tag and variable integrity",
  "Consistency across repeated content",
  "Percentage of segments requiring substantial rewriting",
  "Reviewer time and reviewer agreement",
  "Final acceptance rate",
  "Defects discovered during in-context testing",
];

const evidenceRecords = [
  {
    record: "Approved Source Version",
    purpose: "Confirms the exact content used for translation.",
  },
  {
    record: "Content Classification",
    purpose: "Records intended use, audience, risk tier, and review route.",
  },
  {
    record: "Technology Record",
    purpose:
      "Identifies the authorized provider, system, model, and material configuration.",
  },
  {
    record: "Translation Memory Version",
    purpose: "Shows which approved bilingual content was applied.",
  },
  {
    record: "Terminology Version",
    purpose:
      "Shows which terms, definitions, and approved translations governed the project.",
  },
  {
    record: "Automated QA Results",
    purpose: "Records detected issues and their disposition.",
  },
  {
    record: "Reviewer Record",
    purpose: "Identifies qualified linguistic and specialist roles.",
  },
  {
    record: "Correction History",
    purpose: "Preserves material findings and approved resolutions.",
  },
  {
    record: "In-Context QA Evidence",
    purpose:
      "Confirms review in the final document, label, interface, or publication environment.",
  },
  {
    record: "Approval Record",
    purpose: "Identifies authorized release approval.",
  },
  {
    record: "Released Target Files",
    purpose: "Preserves the final approved multilingual deliverables.",
  },
  {
    record: "Superseded Versions",
    purpose:
      "Prevents outdated translations from being reused or distributed unintentionally.",
  },
];

const securityChecks = [
  "Where data is processed and stored",
  "Whether content is retained or used for provider training",
  "Whether prompts and outputs are logged",
  "Which personnel and subcontractors may have access",
  "How data is encrypted and authenticated",
  "How content is deleted",
  "How incidents and business continuity are handled",
  "Whether regional processing requirements can be supported",
];

const pilotSteps = [
  {
    title: "Define the Decision",
    description:
      "State whether the pilot must determine suitability for a content type, compare models, reduce reviewer effort, improve terminology adherence, or establish a higher-risk review tier.",
  },
  {
    title: "Select Representative Content",
    description:
      "Include routine, difficult, safety-relevant, repetitive, terminology-dense, formatted, software, and historically problematic content.",
  },
  {
    title: "Prepare Approved References",
    description:
      "Provide source documents, translation memory, terminology, style guidance, product references, screenshots, known error examples, and market requirements.",
  },
  {
    title: "Establish Acceptance Criteria",
    description:
      "Define prohibited critical errors, major-error thresholds, terminology requirements, completeness requirements, reviewer qualifications, and approval authority.",
  },
  {
    title: "Test the End-to-End Workflow",
    description:
      "Include file preparation, AI processing, language assets, automated QA, human review, formatting, contextual validation, and approval.",
  },
  {
    title: "Measure Reviewer Effort",
    description:
      "Track time, rewriting, recurring error types, terminology research, AI verification effort, post-editing errors, and final QA findings.",
  },
  {
    title: "Document the Decision by Risk Tier",
    description:
      "Approve the workflow for defined content, controls, languages, and uses rather than issuing one organization-wide AI approval.",
  },
  {
    title: "Monitor Production Performance",
    description:
      "Track quality trends, model changes, terminology deviations, complaints, recurring corrections, and content that needs rerouting.",
  },
];

const providerCriteria = [
  {
    title: "Technology and Model Selection",
    questions: [
      "Which systems are used for each language and content type?",
      "How are models evaluated and model versions identified?",
      "How are terminology, numbers, units, additions, and omissions checked?",
      "Can specific content be excluded from generative AI processing?",
    ],
  },
  {
    title: "Medical Device Expertise",
    questions: [
      "How are medical device linguists qualified?",
      "How are translators matched to the product and subject area?",
      "When are independent revision and subject-matter review required?",
      "How are warnings, critical instructions, and technical questions handled?",
    ],
  },
  {
    title: "Quality Management",
    questions: [
      "How are critical, major, and minor errors defined?",
      "What acceptance criteria and automated checks are used?",
      "How are corrective actions recorded and returned to language assets?",
      "How are quality trends reported across language and content type?",
    ],
  },
  {
    title: "Security and Data Governance",
    questions: [
      "Is customer content retained or used for model training?",
      "Where is data processed and hosted?",
      "Which subcontractors may access it?",
      "How are translation memories, terminology, retention, and deletion controlled?",
    ],
  },
  {
    title: "Workflow and Traceability",
    questions: [
      "Can source and target versions be linked?",
      "Can review and approval status be tracked?",
      "Can content be routed by risk?",
      "Can the workflow support eIFUs, software strings, labels, and formatted documents?",
    ],
  },
  {
    title: "Continuous Improvement",
    questions: [
      "How are approved translations and terminology reused?",
      "How are glossary conflicts resolved?",
      "How are regressions detected?",
      "What triggers workflow revalidation?",
    ],
  },
];

const standards = [
  {
    title: "EU MDR and IVDR Language Requirements",
    description:
      "EU Member State language requirements differ by market, device context, and information type. Official materials focus on which languages are required; they do not certify a particular translation engine or make unreviewed AI output acceptable by default.",
    href: "https://health.ec.europa.eu/publications/overview-language-requirements-manufacturers-medical-devices_en",
    source: "European Commission",
  },
  {
    title: "FDA Device Labeling",
    description:
      "FDA device-labeling requirements address the content, language, prominence, and other requirements applicable to labeling. FDA change guidance also includes an example in which adding a foreign-language translation is documented rather than treated as a new 510(k) when the translation does not change the meaning of the directions for use. The manufacturer remains responsible for the risk-based assessment and documentation.",
    links: [
      {
        href: "https://www.fda.gov/medical-devices/device-labeling/general-device-labeling-requirements",
        label: "General Device Labeling Requirements",
      },
      {
        href: "https://www.fda.gov/media/99812/download",
        label: "510(k) Change Guidance",
      },
    ],
  },
  {
    title: "ISO 13485:2016",
    description:
      "ISO 13485 defines quality-management-system requirements for organizations involved in medical devices and related services. Its process, documentation, supplier-control, and risk-based principles can inform multilingual workflow governance.",
    href: "https://www.iso.org/standard/59752.html",
    source: "International Organization for Standardization",
  },
  {
    title: "ISO 14971:2019",
    description:
      "ISO 14971 specifies principles and a process for managing medical device risk throughout the lifecycle. Translation teams can apply the same fundamental logic when evaluating how multilingual content errors could affect safe and effective device use.",
    href: "https://www.iso.org/standard/72704.html",
    source: "International Organization for Standardization",
  },
  {
    title: "ISO 18587:2017",
    description:
      "ISO 18587 establishes requirements for full human post-editing of machine translation output and post-editor competence. The published 2017 edition remains current. ISO/DIS 18587, a second edition covering post-editing of non-human translation output, is under development.",
    links: [
      {
        href: "https://www.iso.org/standard/62970.html",
        label: "Current Published Standard",
      },
      {
        href: "https://www.iso.org/standard/88184.html",
        label: "Second Edition Under Development",
      },
    ],
  },
  {
    title: "ISO 5060:2024",
    description:
      "ISO 5060 provides guidance for evaluating human translation, post-edited machine translation, and unedited machine output using configured error types, sampling, penalty points, and qualified evaluators.",
    href: "https://www.iso.org/standard/80701.html",
    source: "International Organization for Standardization",
  },
  {
    title: "ISO 11669:2024",
    description:
      "ISO 11669 provides general guidance for translation project stages and can support clearer specifications, responsibilities, communication, and acceptance requirements.",
    href: "https://www.iso.org/standard/79089.html",
    source: "International Organization for Standardization",
  },
  {
    title: "ISO 17100:2015",
    description:
      "ISO 17100 specifies requirements for professional translation services. Its scope excludes raw machine translation output plus post-editing, so AI-assisted workflows should not be described as covered by ISO 17100 solely because human review occurred.",
    href: "https://www.iso.org/standard/59149.html",
    source: "International Organization for Standardization",
  },
  {
    title: "NIST AI Risk Management Framework",
    description:
      "The NIST AI Risk Management Framework and Generative AI Profile provide voluntary guidance for organizing AI governance, risk mapping, measurement, monitoring, and response planning.",
    href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
    source: "National Institute of Standards and Technology",
  },
];

const faqs = [
  {
    question: "Can AI be used to translate medical device Instructions for Use?",
    answer:
      "AI can support IFU translation inside a controlled workflow. The source should be approved, terminology and translation memory should be applied, and the complete output should receive qualified professional review. Safety-relevant IFU content may also require independent revision, subject-matter clarification, final-format QA, and authorized approval. Unreviewed AI output should not be released as a medical device IFU.",
  },
  {
    question: "Does EU MDR or IVDR prohibit AI translation?",
    answer:
      "EU MDR and IVDR language requirements focus on the information that must accompany a device and the languages required in individual Member States. Official language tables do not approve or certify a particular translation technology. Manufacturers remain responsible for ensuring that translated information is accurate, controlled, and appropriate for the intended market and audience.",
  },
  {
    question: "Does FDA approve AI translation systems for device labeling?",
    answer:
      "FDA does not provide blanket approval of translation models for medical device labeling. Its labeling resources address the requirements applicable to the final labeling. The manufacturer remains responsible for the labeling and for documenting relevant changes and assessments.",
  },
  {
    question: "Which medical device content requires complete human review?",
    answer:
      "Complete human review should be expected for regulated, safety-relevant, patient-facing, technically complex, or externally released content where an error could affect product use, understanding, compliance, or safety. Examples commonly include IFUs, warnings, precautions, labeling, patient materials, critical interface strings, service procedures, regulatory documents, and field safety communications.",
  },
  {
    question: "Is machine translation post-editing the same as proofreading?",
    answer:
      "No. Full post-editing requires the linguist to compare machine-generated output against the source and correct every issue necessary to meet the project requirements. Proofreading is usually a narrower target-language check and may not include complete bilingual verification.",
  },
  {
    question: "Can AI translate medical device software interfaces?",
    answer:
      "AI may help produce draft translations for medical device software, but software localization also requires technical and contextual validation. Teams should check variables, placeholders, concatenated strings, alarms, character limits, truncation, control labels, reuse across screens, right-to-left behavior, and the relationship between displayed text and device function.",
  },
  {
    question: "How does terminology management improve AI translation?",
    answer:
      "Approved terminology gives the system and reviewers explicit guidance for product names, components, procedures, warnings, abbreviations, and technical concepts. It also enables automated checks for prohibited or inconsistent variants. Human review remains necessary where the correct term depends on grammar, meaning, audience, or market context.",
  },
  {
    question: "Is AI translation suitable for low-resource languages?",
    answer:
      "Potentially, but suitability must be demonstrated through representative testing and qualified native-language evaluation. Performance can vary significantly by language, domain, and model, so results from one high-resource language should not be extrapolated automatically to another language.",
  },
  {
    question: "Can AI reduce medical device translation cost?",
    answer:
      "AI may reduce effort for recurring, high-volume, or lower-risk content, especially when approved terminology and translation memory are already available. Savings are less certain when output requires extensive rewriting, multiple review rounds, technical reconstruction, or correction of unpredictable critical errors. The relevant measure is total cost to approved release—not raw generation cost.",
  },
  {
    question: "Is confidential medical device content safe in public AI tools?",
    answer:
      "Confidential content should not be submitted to a public AI tool unless the tool and its exact configuration have been formally approved for that content. Evaluate data retention, training use, hosting, access, encryption, subcontractors, deletion, contractual protections, and incident response before processing begins.",
  },
  {
    question: "How often should an AI translation workflow be revalidated?",
    answer:
      "Reassessment should occur when a material change could affect quality or risk, including a new model, model version, provider, prompt configuration, language, content type, product, intended use, language asset, integration, security requirement, or adverse quality finding. Periodic performance review is also advisable when no known material change has occurred.",
  },
  {
    question: "How many human reviewers are needed?",
    answer:
      "The number and type of reviewers should reflect content risk, target market, and the organization’s procedures. Lower-risk content may use one qualified reviewer. Safety-relevant or regulated content may require independent revision, subject-matter involvement, in-country validation, or a separate authorized approver. Reviewer count alone does not guarantee quality; each role needs a defined purpose and suitable qualifications.",
  },
];

const relatedResources = [
  {
    title: "Medical Device IFU Translation Guide",
    description:
      "Plan professional and patient-use IFU translation, terminology, review, layout, version control, and final-format quality assurance.",
    href: "https://www.stepes.com/resources/localization-guides/medical-device-ifu-translation-guide/",
    linkLabel: "Read the IFU Translation Guide",
  },
  {
    title: "Electronic IFUs and Multilingual Version Control",
    description:
      "Coordinate multilingual eIFU content across digital delivery, downloadable files, revisions, access requirements, and paper versions.",
    href: "https://www.stepes.com/resources/localization-guides/electronic-ifus-multilingual-version-control/",
    linkLabel: "Explore eIFU Version Control",
  },
  {
    title: "Medical Device Software Localization Checklist",
    description:
      "Review interface context, terminology, variables, text expansion, character rendering, right-to-left behavior, and linguistic testing.",
    href: "https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/",
    linkLabel: "Use the Software Localization Checklist",
  },
  {
    title: "AI + Human Translation Workflows",
    description:
      "Learn how to route enterprise content across AI translation, professional post-editing, specialist review, and quality assurance.",
    href: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
    linkLabel: "Explore AI + Human Translation Workflows",
  },
];

const sourceReferences = [
  {
    title: "Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations",
    publisher: "U.S. Food and Drug Administration",
    href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing",
  },
  {
    title: "Overview of Language Requirements for Manufacturers of Medical Devices",
    publisher: "European Commission",
    href: "https://health.ec.europa.eu/publications/overview-language-requirements-manufacturers-medical-devices_en",
  },
  {
    title: "General Device Labeling Requirements",
    publisher: "U.S. Food and Drug Administration",
    href: "https://www.fda.gov/medical-devices/device-labeling/general-device-labeling-requirements",
  },
  {
    title: "Deciding When to Submit a 510(k) for a Change to an Existing Device",
    publisher: "U.S. Food and Drug Administration",
    href: "https://www.fda.gov/media/99812/download",
  },
  {
    title: "ISO 13485:2016 — Medical Devices — Quality Management Systems",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/59752.html",
  },
  {
    title: "ISO 14971:2019 — Medical Devices — Application of Risk Management",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/72704.html",
  },
  {
    title: "ISO 18587:2017 — Post-Editing of Machine Translation Output",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/62970.html",
  },
  {
    title: "ISO/DIS 18587 — Post-Editing of Non-Human Translation Output",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/88184.html",
  },
  {
    title: "ISO 5060:2024 — Evaluation of Translation Output",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/80701.html",
  },
  {
    title: "ISO 11669:2024 — Translation Projects — General Guidance",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/79089.html",
  },
  {
    title: "ISO 17100:2015 — Translation Services — Requirements for Translation Services",
    publisher: "International Organization for Standardization",
    href: "https://www.iso.org/standard/59149.html",
  },
  {
    title: "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
    publisher: "National Institute of Standards and Technology",
    href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
  },
  {
    title: "WMT 2025 Paper on Terminology-Aware Machine Translation",
    publisher: "Association for Computational Linguistics Anthology",
    href: "https://aclanthology.org/2025.wmt-1.111.pdf",
  },
  {
    title: "EMNLP 2025 Paper on Quality-Aware Translation Deferral",
    publisher: "Association for Computational Linguistics Anthology",
    href: "https://aclanthology.org/2025.emnlp-main.1358.pdf",
  },
  {
    title: "NAACL 2025 Paper on Translation Hallucination",
    publisher: "Association for Computational Linguistics Anthology",
    href: "https://aclanthology.org/2025.naacl-long.175.pdf",
  },
];

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase leading-5 tracking-[0.18em] ${
        dark ? "text-[#F2A7C6]" : "text-[#C11D63]"
      }`}
    >
      {children}
    </p>
  );
}

function ArrowLink({ href, children, external = false, className = "" }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex min-h-11 items-center gap-2 text-[16px] font-semibold text-[#A71954] transition hover:text-[#7A1542] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4 ${className}`}
    >
      <span>{children}</span>
      {external ? (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
        />
      )}
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-[840px] text-center" : "max-w-[820px]"}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`${eyebrow ? "mt-4 " : ""}text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-[32px] lg:text-[36px] ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-6 text-[17px] leading-8 sm:text-[18px] ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[30px] border border-[#E4E7EC] bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:p-7 lg:p-8">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#FDF2F7] blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-[#ECEEF2] pb-5">
          <div>
            <p className="text-[14px] leading-6 text-slate-500">Controlled content workflow</p>
            <p className="mt-1 text-[18px] font-semibold text-slate-950">Medical Device Translation</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7]">
            <Stethoscope aria-hidden="true" className="h-5 w-5 text-[#C11D63]" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="rounded-[22px] border border-[#E6E9ED] bg-[#FAFBFC] p-5">
            <div className="flex items-center gap-3">
              <FileText aria-hidden="true" className="h-5 w-5 text-slate-500" />
              <p className="text-[16px] font-semibold text-slate-900">Approved Source</p>
            </div>
            <div className="mt-5 space-y-3" aria-hidden="true">
              <div className="h-2.5 w-full rounded-full bg-slate-200" />
              <div className="h-2.5 w-[84%] rounded-full bg-slate-200" />
              <div className="h-2.5 w-[72%] rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="hidden items-center justify-center sm:flex" aria-hidden="true">
            <ArrowRight className="h-5 w-5 text-[#C11D63]" />
          </div>

          <div className="rounded-[22px] border border-[#E6E9ED] bg-[#FAFBFC] p-5">
            <div className="flex items-center gap-3">
              <BrainCircuit aria-hidden="true" className="h-5 w-5 text-[#C11D63]" />
              <p className="text-[16px] font-semibold text-slate-900">AI-Assisted Draft</p>
            </div>
            <div className="mt-5 space-y-3" aria-hidden="true">
              <div className="h-2.5 w-[90%] rounded-full bg-[#E9B5CD]" />
              <div className="h-2.5 w-full rounded-full bg-slate-200" />
              <div className="h-2.5 w-[78%] rounded-full bg-slate-200" />
            </div>
          </div>
        </div>

        <div className="relative mt-5 rounded-[24px] border border-[#DCE2E8] bg-slate-950 p-5 text-white sm:p-6">
          <div className="absolute left-9 top-[-17px] h-8 w-px bg-[#C11D63]" aria-hidden="true" />
          <div className="grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[#F2A7C6]" />
            </div>
            <div>
              <p className="text-[16px] font-semibold">Qualified Human Validation</p>
              <p className="mt-2 text-[16px] leading-7 text-slate-300">
                Terminology, warnings, numbers, context, layout, and release approval.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[14px] font-semibold text-white">
              <Check aria-hidden="true" className="h-4 w-4 text-[#F2A7C6]" />
              Approved
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {["Risk-Based Routing", "Traceable QA", "Final-Format Review"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-[18px] bg-[#F7F8FA] px-4 py-3">
              <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#C11D63]" />
              <span className="text-[16px] font-medium leading-6 text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileToc() {
  return (
    <details className="group overflow-hidden rounded-[22px] border border-[#E4E7EC] bg-white lg:hidden">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[16px] font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C11D63] [&::-webkit-details-marker]:hidden">
        <span>In This Guide</span>
        <ChevronDown
          aria-hidden="true"
          className="h-5 w-5 text-[#C11D63] transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label="Guide sections" className="border-t border-[#ECEEF2] px-5 py-4">
        <ol className="space-y-1">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={sectionUrl(item.id)}
                className="block rounded-lg px-2 py-3 text-[16px] leading-6 text-slate-700 transition hover:bg-[#FDF2F7] hover:text-[#9F1D55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}

function DesktopToc() {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Guide sections" className="sticky top-28">
        <p className="text-[16px] font-semibold text-slate-950">In This Guide</p>
        <ol className="mt-5 border-l border-[#E3E6EA]">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={sectionUrl(item.id)}
                className="block border-l-2 border-transparent py-2.5 pl-5 text-[16px] leading-6 text-slate-600 transition hover:border-[#C11D63] hover:text-[#9F1D55] focus-visible:border-[#C11D63] focus-visible:text-[#9F1D55] focus-visible:outline-none"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}

function DesktopRiskTable() {
  return (
    <div className="hidden overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-white shadow-[0_18px_54px_rgba(15,23,42,0.04)] lg:block">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Medical device AI translation risk tiers, recommended approaches, and minimum controls
        </caption>
        <thead className="bg-slate-950 text-white">
          <tr>
            <th scope="col" className="w-[18%] px-6 py-5 text-[16px] font-semibold">
              Risk Tier
            </th>
            <th scope="col" className="w-[26%] px-6 py-5 text-[16px] font-semibold">
              Typical Content
            </th>
            <th scope="col" className="w-[26%] px-6 py-5 text-[16px] font-semibold">
              Recommended Approach
            </th>
            <th scope="col" className="w-[30%] px-6 py-5 text-[16px] font-semibold">
              Minimum Controls
            </th>
          </tr>
        </thead>
        <tbody>
          {riskTiers.map((item, index) => (
            <tr key={item.tier} className={index !== riskTiers.length - 1 ? "border-b border-[#E8EAEE]" : ""}>
              <th scope="row" className="align-top px-6 py-6">
                <p className="text-[16px] font-semibold text-[#C11D63]">
                  {item.tier}
                </p>
                <p className="mt-2 text-[17px] font-semibold leading-7 text-slate-950">{item.title}</p>
              </th>
              <td className="align-top px-6 py-6 text-[16px] leading-7 text-slate-600">{item.examples}</td>
              <td className="align-top px-6 py-6 text-[16px] leading-7 text-slate-700">{item.approach}</td>
              <td className="align-top px-6 py-6 text-[16px] leading-7 text-slate-600">{item.controls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MobileRiskBlocks() {
  return (
    <div className="space-y-4 lg:hidden">
      {riskTiers.map((item) => (
        <section key={item.tier} className="rounded-[24px] border border-[#E4E7EC] bg-white p-5 shadow-[0_14px_42px_rgba(15,23,42,0.035)] sm:p-6">
          <p className="text-[16px] font-semibold text-[#C11D63]">{item.tier}</p>
          <h3 className="mt-3 text-[20px] font-semibold leading-7 text-slate-950">{item.title}</h3>
          <dl className="mt-5 space-y-5">
            <div>
              <dt className="text-[16px] font-semibold text-slate-900">Typical Content</dt>
              <dd className="mt-2 text-[16px] leading-7 text-slate-600">{item.examples}</dd>
            </div>
            <div>
              <dt className="text-[16px] font-semibold text-slate-900">Recommended Approach</dt>
              <dd className="mt-2 text-[16px] leading-7 text-slate-600">{item.approach}</dd>
            </div>
            <div>
              <dt className="text-[16px] font-semibold text-slate-900">Minimum Controls</dt>
              <dd className="mt-2 text-[16px] leading-7 text-slate-600">{item.controls}</dd>
            </div>
          </dl>
        </section>
      ))}
    </div>
  );
}

function WorkflowSequence() {
  const workflowPhases = [
    {
      label: "Prepare and Generate",
      steps: workflowSteps.slice(0, 5),
      startIndex: 0,
    },
    {
      label: "Validate, Release, and Improve",
      steps: workflowSteps.slice(5),
      startIndex: 5,
    },
  ];

  return (
    <div className="mt-12">
      <div className="hidden gap-6 lg:grid lg:grid-cols-2">
        {workflowPhases.map((phase) => (
          <div
            key={phase.label}
            className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.045]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-7 py-6">
              <p className="text-[16px] font-semibold text-white">{phase.label}</p>
              <p className="text-[16px] font-semibold text-[#F2A7C6]">
                Steps {phase.startIndex + 1}–{phase.startIndex + phase.steps.length}
              </p>
            </div>
            <ol>
              {phase.steps.map((step, index) => {
                const stepNumber = phase.startIndex + index + 1;
                return (
                  <li
                    key={step.title}
                    className={`grid grid-cols-[52px_1fr] gap-5 px-7 py-6 ${
                      index !== phase.steps.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[16px] font-semibold text-[#F2A7C6]">
                      {String(stepNumber).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold leading-7 text-white">{step.title}</h3>
                      <p className="mt-3 text-[16px] leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>

      <ol className="space-y-0 lg:hidden">
        {workflowSteps.map((step, index) => (
          <li key={step.title} className="relative grid min-w-0 grid-cols-[44px_minmax(0,1fr)] gap-4 pb-8 last:pb-0">
            {index !== workflowSteps.length - 1 ? (
              <div className="absolute bottom-0 left-[21px] top-11 w-px bg-white/15" aria-hidden="true" />
            ) : null}
            <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-[16px] font-semibold text-[#F2A7C6]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="min-w-0 pt-1">
              <h3 className="break-words text-[20px] font-semibold leading-7 text-white">{step.title}</h3>
              <p className="mt-3 text-[16px] leading-7 text-slate-300">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function StepesAITranslationForMedicalDevicesGuide() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white font-sans text-slate-900 antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        section[id] { scroll-margin-top: 120px; }
        a[data-magenta-cta],
        a[data-magenta-cta]:visited,
        a[data-magenta-cta]:hover,
        a[data-magenta-cta]:active,
        a[data-magenta-cta]:focus,
        a[data-magenta-cta]:focus-visible,
        a[data-magenta-cta] * {
          color: #ffffff !important;
          fill: none;
          stroke: #ffffff !important;
        }
      `}</style>

      <div className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pt-6 sm:px-6 md:px-10 lg:px-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-start gap-x-2 gap-y-2 text-[14px] leading-6 text-slate-500 sm:text-[15px]">
              {breadcrumbs.map((item, index) => (
                <li key={item.label} className="flex min-w-0 items-start gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-slate-300">
                      /
                    </span>
                  ) : null}
                  {item.current ? (
                    <span aria-current="page" className="min-w-0 break-words font-medium text-slate-700">
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="rounded-sm py-0.5 transition hover:text-[#9F1D55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <header className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-7 sm:px-6 md:px-10 md:pb-24 lg:px-14 lg:pb-28 lg:pt-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <Eyebrow>AI Translation Insights</Eyebrow>
              <h1 className="mt-5 max-w-[760px] text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[48px]">
                AI Translation for Medical Devices: A Risk-Based Human Validation Guide
              </h1>
              <p className="mt-7 max-w-[760px] text-[18px] leading-8 text-slate-600">
                AI can help medical device companies translate recurring content more efficiently,
                apply terminology more consistently, and manage multilingual updates at greater
                scale. But fluent output is not the same as validated output—especially when
                content affects product use, patient understanding, regulatory documentation, or
                user safety.
              </p>
              <p className="mt-5 max-w-[760px] text-[18px] leading-8 text-slate-600">
                Use this guide to identify where AI-assisted translation can add value, where
                qualified human validation remains essential, and how to build a secure,
                controlled, and traceable workflow for medical device content.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={sectionUrl("risk-model")}
                  data-magenta-cta
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_34px_rgba(193,29,99,0.16)] transition hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  View the Risk Model
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href={sectionUrl("controlled-workflow")}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9DEE5] bg-white px-6 py-3 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/35 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Explore the Workflow
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-9 grid max-w-[760px] gap-4 border-t border-[#E2E5E9] pt-7 sm:grid-cols-3">
                {["Risk-Based Routing", "Qualified Human Validation", "Traceable Quality Records"].map(
                  (item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                      <p className="text-[16px] font-medium leading-6 text-slate-700">{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            <HeroVisual />
          </div>
        </header>
      </div>

      <section id="scope-distinction" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-[#FCFCFD]">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="border-b border-[#E4E7EC] bg-[#FDF2F7] p-7 md:p-9 lg:border-b-0 lg:border-r">
                <Eyebrow>Important Scope Distinction</Eyebrow>
                <h2 className="mt-4 text-[28px] font-semibold leading-[1.14] tracking-[-0.03em] text-slate-950 sm:text-[30px]">
                  AI Translation Is Not the Same as an AI-Enabled Medical Device
                </h2>
              </div>
              <div className="p-7 md:p-9 lg:p-10">
                <p className="text-[18px] leading-8 text-slate-700">
                  This guide addresses the use of artificial intelligence, machine translation,
                  and related automation to translate medical device content. It does not address
                  the regulatory approval of devices whose clinical or operational functions
                  incorporate artificial intelligence.
                </p>
                <p className="mt-5 text-[17px] leading-8 text-slate-600">
                  In this guide, <strong className="font-semibold text-slate-900">human validation</strong>{" "}
                  means qualified linguistic, technical, and contextual review against defined
                  acceptance criteria. It does not by itself imply regulatory authorization or
                  approval.
                </p>
                <ArrowLink
                  href="https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing"
                  external
                  className="mt-6"
                >
                  Review FDA Guidance on AI-Enabled Device Software Functions
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="at-a-glance" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
          <SectionHeading
            eyebrow="Executive Summary"
            title="Five Principles for a Responsible Medical Device AI Translation Program"
            intro="The strongest programs treat AI as one controlled component within a broader multilingual quality system—not as an independent release authority."
          />

          <div className="mt-12 overflow-hidden rounded-[28px] border border-[#E2E5E9] bg-white">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-4 p-6 sm:p-7 lg:grid-cols-[0.68fr_1.32fr] lg:gap-12 lg:p-8 ${
                  index !== principles.length - 1 ? "border-b border-[#E8EAEE]" : ""
                }`}
              >
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                <p className="text-[16px] leading-8 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <MobileToc />
          <div className="mt-0 grid items-start gap-14 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16">
            <DesktopToc />

            <article className="min-w-0">
              <section id="what-ai-means">
                <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  What AI Translation Means in Medical Device Localization
                </h2>
                <p className="mt-6 text-[18px] leading-8 text-slate-600">
                  AI translation is best understood as a collection of technologies and workflow
                  capabilities rather than one universal translation method. Different systems may
                  be appropriate for different content types, languages, update patterns, and
                  quality requirements.
                </p>

                <div className="mt-10 space-y-0 border-y border-[#E5E7EB]">
                  {aiMethods.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className={`grid gap-5 py-7 sm:grid-cols-[44px_1fr] ${
                          index !== aiMethods.length - 1 ? "border-b border-[#ECEEF2]" : ""
                        }`}
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7]">
                          <Icon aria-hidden="true" className="h-5 w-5 text-[#C11D63]" />
                        </div>
                        <div>
                          <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                          <p className="mt-3 text-[17px] leading-8 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-[#E4E7EC] bg-[#FCFCFD] p-6">
                    <div className="flex items-center gap-3">
                      <Database aria-hidden="true" className="h-5 w-5 text-[#C11D63]" />
                      <h3 className="text-[20px] font-semibold text-slate-950">Translation Memory</h3>
                    </div>
                    <p className="mt-4 text-[16px] leading-7 text-slate-600">
                      Translation memory stores approved bilingual segments for future reuse. It is
                      not the same as AI translation, but it is often one of the strongest controls
                      in recurring medical device programs.
                    </p>
                    <ArrowLink href="https://www.stepes.com/translation-memory-management/" className="mt-5">
                      Explore Translation Memory
                    </ArrowLink>
                  </div>
                  <div className="rounded-[24px] border border-[#E4E7EC] bg-[#FCFCFD] p-6">
                    <div className="flex items-center gap-3">
                      <FileCheck2 aria-hidden="true" className="h-5 w-5 text-[#C11D63]" />
                      <h3 className="text-[20px] font-semibold text-slate-950">Terminology Management</h3>
                    </div>
                    <p className="mt-4 text-[16px] leading-7 text-slate-600">
                      A governed termbase controls product names, components, procedures, warnings,
                      clinical concepts, abbreviations, units, approved variants, and terms that
                      must not be translated.
                    </p>
                    <ArrowLink href="https://www.stepes.com/terminology-management/" className="mt-5">
                      Explore Terminology Management
                    </ArrowLink>
                  </div>
                </div>

                <div className="mt-10 rounded-[24px] border-l-[3px] border-[#C11D63] bg-[#F8F9FB] p-6 sm:p-7">
                  <p className="text-[17px] font-semibold leading-8 text-slate-950">
                    Not every localization efficiency comes from AI.
                  </p>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    Translation memory, structured content, terminology databases, automated QA,
                    and workflow routing may contribute as much operational value as the
                    translation model itself.
                  </p>
                </div>
              </section>

              <section id="risk-based-decisions" className="pt-24">
                <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  Why Medical Device Translation Requires Risk-Based Decisions
                </h2>
                <p className="mt-6 text-[18px] leading-8 text-slate-600">
                  Medical device content ranges from early internal drafts to instructions that
                  directly affect how a device is installed, operated, cleaned, maintained, or used
                  in patient care. These materials do not carry the same level of risk and should
                  not all follow the same translation workflow.
                </p>
                <p className="mt-5 text-[17px] leading-8 text-slate-600">
                  A short software string may contain a routine navigation label—or it may warn the
                  user about an unsafe condition. A training slide may provide general background—or
                  explain a procedure that must be performed in a precise sequence. A document
                  described as marketing content may still contain product claims, intended-use
                  language, or safety information.
                </p>
                <p className="mt-5 text-[17px] leading-8 text-slate-600">
                  Translation risk should therefore be assessed at the content, module, or segment
                  level whenever practical.
                </p>

                <div className="mt-8 border-y border-[#E4E7EC] py-6">
                  <p className="text-[16px] leading-7 text-slate-600">
                    ISO 14971 provides a systematic medical device risk-management process, while
                    ISO 13485 establishes the broader quality-management framework used by device
                    organizations and relevant suppliers. Neither standard prescribes an AI
                    translation method, but their risk-based, documented, and process-controlled
                    principles provide a useful foundation for multilingual workflow decisions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-1">
                    <ArrowLink href="https://www.iso.org/standard/72704.html" external>
                      Review ISO 14971
                    </ArrowLink>
                    <ArrowLink href="https://www.iso.org/standard/59752.html" external>
                      Review ISO 13485
                    </ArrowLink>
                  </div>
                </div>

                <div className="my-10 rounded-[28px] bg-slate-950 p-7 text-white sm:p-9">
                  <Eyebrow dark>The Central Question</Eyebrow>
                  <p className="mt-5 text-[26px] font-semibold leading-[1.35] tracking-[-0.02em] sm:text-[30px]">
                    What could happen if this content were translated incorrectly, incompletely,
                    inconsistently, or without sufficient context?
                  </p>
                  <p className="mt-6 text-[17px] leading-8 text-slate-300">
                    The answer should determine whether AI is appropriate, which controls are
                    required, who reviews the translation, whether in-context validation is needed,
                    who can approve release, and what evidence must be retained.
                  </p>
                </div>

                <p className="text-[17px] leading-8 text-slate-600">
                  AI may be part of a high-control workflow. It should not be treated as the release
                  authority.
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section id="risk-model" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Risk Classification Framework"
            title="The Medical Device AI Translation Risk Model"
            intro="Use six risk dimensions to classify content, then route each content type to the level of AI assistance, human review, contextual validation, and evidence appropriate to its potential impact."
          />

          <div className="mt-12 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {riskDimensions.map((item, index) => (
              <div
                key={item.title}
                className={`border-t border-[#DDE1E6] py-7 ${
                  index >= riskDimensions.length - 2 ? "lg:border-b" : ""
                }`}
              >
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Risk-Based Routing Matrix</h3>
                <p className="mt-3 max-w-[760px] text-[17px] leading-8 text-slate-600">
                  Apply the highest relevant tier when a document contains mixed-risk content. A
                  mostly routine file may still contain safety-critical segments that require a
                  higher-control route.
                </p>
              </div>
            </div>
            <DesktopRiskTable />
            <MobileRiskBlocks />
          </div>

          <div className="mt-8 rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-7">
            <p className="text-[17px] font-semibold leading-7 text-slate-950">Reassess the route when conditions change.</p>
            <p className="mt-3 text-[16px] leading-7 text-slate-600">
              A previously validated workflow should be reassessed when the model, target language,
              product, intended use, content type, language assets, source complexity, or observed
              failure patterns change materially.
            </p>
          </div>
        </div>
      </section>

      <section id="where-ai-helps" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            title="Where AI Can Improve Medical Device Translation Efficiency"
            intro="The strongest AI translation programs use technology to remove repetitive work, identify risk, and help qualified reviewers focus their attention. They do not use automation simply to remove human accountability."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#E2E5E9] bg-[#E2E5E9] md:grid-cols-2 lg:grid-cols-3">
            {aiBenefits.map((item) => (
              <div key={item.title} className="bg-[#F8F9FB] p-7 md:p-8">
                <div className="mb-5 h-[2px] w-12 rounded-full bg-[#C11D63]" aria-hidden="true" />
                <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[24px] border border-[#E4E7EC] bg-[#FDF2F7] p-6 sm:p-7">
            <p className="text-[18px] font-semibold text-slate-950">Measure the benefit at approved release.</p>
            <p className="mt-3 max-w-[900px] text-[16px] leading-7 text-slate-600">
              A stronger first draft may still be unsuitable if it creates unpredictable critical
              errors, weak terminology adherence, poor reproducibility, excessive reviewer effort,
              or unacceptable data risk. Generation speed alone is not a meaningful quality metric.
            </p>
          </div>

          <div className="mt-8 grid gap-7 rounded-[24px] bg-slate-950 p-6 sm:p-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
            <div>
              <p className="text-[18px] font-semibold text-white">Research continues to improve control.</p>
              <p className="mt-3 text-[16px] leading-7 text-slate-300">
                Current research explores terminology constraints, quality-aware deferral, and ways
                to reduce unsupported translation output. These advances are useful, but they do not
                remove the need to validate the complete medical device workflow.
              </p>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              {[
                {
                  label: "Terminology-Aware Translation",
                  href: "https://aclanthology.org/2025.wmt-1.111.pdf",
                },
                {
                  label: "Quality-Aware Deferral",
                  href: "https://aclanthology.org/2025.emnlp-main.1358.pdf",
                },
                {
                  label: "Translation Hallucination Research",
                  href: "https://aclanthology.org/2025.naacl-long.175.pdf",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-h-12 items-center justify-between gap-3 rounded-[18px] border border-white/12 bg-white/[0.04] px-4 py-3 text-[16px] font-semibold leading-6 text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A7C6]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-[#F2A7C6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="human-validation" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Professional Oversight"
                title="Where Professional Human Validation Remains Essential"
                intro="Human review is essential wherever the correct translation depends on technical meaning, intended use, user behavior, product context, risk, or approved regulatory language."
              />
              <div className="mt-8 rounded-[24px] bg-[#FDF2F7] p-6 sm:p-7">
                <p className="text-[17px] font-semibold leading-7 text-slate-950">
                  A translation can sound natural while changing the technical meaning.
                </p>
                <p className="mt-3 text-[16px] leading-7 text-slate-600">
                  Human validation makes the reviewer’s role concrete: compare against the source,
                  resolve ambiguity, verify product context, confirm the final presentation, and
                  document approval.
                </p>
              </div>
            </div>

            <div>
              <div className="border-t border-[#E5E7EB]">
                {humanValidationAreas.map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid gap-3 py-7 sm:grid-cols-[0.62fr_1.38fr] sm:gap-8 ${
                      index !== humanValidationAreas.length - 1 ? "border-b border-[#E8EAEE]" : ""
                    }`}
                  >
                    <h3 className="text-[18px] font-semibold leading-7 text-slate-950 sm:text-[20px]">{item.title}</h3>
                    <p className="text-[16px] leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <ArrowLink
                href="https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/"
                className="mt-6"
              >
                Use the Medical Device Software Localization Checklist
              </ArrowLink>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-[26px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[30px]">
              The Human Roles in a Controlled Workflow
            </h3>
            <p className="mt-4 max-w-[820px] text-[17px] leading-8 text-slate-600">
              One person may perform more than one role when qualified and permitted by the
              organization’s procedures. Responsibilities and approval authority should still be
              explicit.
            </p>

            <div className="mt-8 hidden overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-white md:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">Human roles and responsibilities in a controlled medical device translation workflow</caption>
                <thead className="bg-[#F8F9FB]">
                  <tr>
                    <th scope="col" className="w-[36%] px-7 py-5 text-[16px] font-semibold text-slate-950">Role</th>
                    <th scope="col" className="px-7 py-5 text-[16px] font-semibold text-slate-950">Primary Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((item, index) => (
                    <tr key={item.role} className="border-t border-[#E8EAEE]">
                      <th scope="row" className="px-7 py-5 align-top text-[16px] font-semibold leading-7 text-slate-900">{item.role}</th>
                      <td className="px-7 py-5 text-[16px] leading-7 text-slate-600">{item.responsibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 space-y-4 md:hidden">
              {roles.map((item) => (
                <div key={item.role} className="rounded-[22px] border border-[#E4E7EC] bg-white p-5">
                  <h4 className="text-[18px] font-semibold leading-7 text-slate-950">{item.role}</h4>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="translation-risks" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            title="Common AI Translation Risks for Medical Device Content"
            intro="The most serious problems are not always obvious. Quiet errors—such as a missing qualifier, inconsistent component name, altered range, or unsupported explanation—may look fluent and plausible while changing the intended meaning."
          />

          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            {aiRisks.map((item, index) => (
              <div key={item.title} className="border-t border-[#DDE1E6] py-7">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#C11D63]" aria-hidden="true" />
                  <div>
                    <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                    <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="controlled-workflow" className="bg-slate-950 text-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Recommended Operating Model"
            title="A Controlled AI + Human Medical Device Translation Workflow"
            intro="A responsible workflow connects content classification, approved language assets, authorized technology, automated checks, qualified professional review, final-context validation, release approval, and continuous improvement."
            dark
          />
          <WorkflowSequence />
        </div>
      </section>

      <section id="validation" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1080px]">
            <SectionHeading
              title="How to Validate AI-Assisted Medical Device Translation"
              intro="Validation should begin with predefined acceptance criteria rather than a subjective impression that the translation looks good. Test the complete operating workflow using representative content and qualified evaluators."
            />

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
              <div>
                <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Build a Representative Evaluation Set</h3>
                <p className="mt-4 text-[17px] leading-8 text-slate-600">
                  Include the types of content the workflow will process in production. Do not
                  evaluate only short, simple, or repetitive sentences.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Warnings and procedural steps",
                    "Tables and measurements",
                    "Terminology-dense passages",
                    "Abbreviations and conditional logic",
                    "Software strings and variables",
                    "Ambiguous source wording",
                    "Formatting-sensitive content",
                    "Previously observed error patterns",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[18px] bg-[#F8F9FB] p-4">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                      <p className="text-[16px] leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EC] bg-[#FCFCFD] p-7 sm:p-8">
                <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Test Every Intended Language</h3>
                <p className="mt-4 text-[16px] leading-7 text-slate-600">
                  Performance in one language is not evidence for another. Include the actual
                  locale, regional terminology, language-specific formatting, morphology,
                  writing-system behavior, right-to-left requirements where relevant, and realistic
                  reviewer expectations.
                </p>
                <div className="mt-6 border-t border-[#E4E7EC] pt-6">
                  <p className="text-[16px] font-semibold text-slate-950">Compare realistic operating models:</p>
                  <ul className="mt-4 space-y-3">
                    {[
                      "Professional translation and independent revision",
                      "NMT plus full human post-editing",
                      "LLM translation plus full human post-editing",
                      "Translation memory plus AI for new segments",
                      "Standard review versus risk-routed review",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-600">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C11D63]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Define Error Categories Before Testing</h3>
              <div className="mt-7 grid gap-px overflow-hidden rounded-[26px] border border-[#E4E7EC] bg-[#E4E7EC] lg:grid-cols-3">
                {errorCategories.map((item) => (
                  <div key={item.label} className="bg-white p-6 sm:p-7">
                    <p className="text-[18px] font-semibold leading-7 text-slate-950">{item.label}</p>
                    <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
              <div>
                <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Measure More Than Automated Scores</h3>
                <p className="mt-4 text-[17px] leading-8 text-slate-600">
                  Automated metrics can support comparison, but they should not replace qualified
                  medical device review. Track the measures that determine whether the workflow can
                  reach approved release consistently.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {validationMeasures.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[#E8EAEE] pb-4">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                    <p className="text-[16px] leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-[24px] border-l-[3px] border-[#C11D63] bg-[#F8F9FB] p-6 sm:p-7">
              <p className="text-[18px] font-semibold leading-7 text-slate-950">Compare total operating performance.</p>
              <p className="mt-3 text-[16px] leading-7 text-slate-600">
                The comparison should evaluate final quality, reviewer effort, turnaround,
                consistency, security, traceability, and total operating cost. A model that writes
                more fluently may still be unsuitable if its errors are difficult to predict or
                expensive to verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="traceability" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Auditability"
            title="Quality Records and Traceability"
            intro="Traceability should show how a translated release was produced and approved. “Human reviewed” is not a complete quality record unless the organization can show what was reviewed, by whom, against which criteria, and with what result."
          />

          <div className="mt-12 hidden overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-white md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Recommended records for an AI-assisted medical device translation evidence pack</caption>
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th scope="col" className="w-[34%] px-7 py-5 text-[16px] font-semibold">Record</th>
                  <th scope="col" className="px-7 py-5 text-[16px] font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {evidenceRecords.map((item, index) => (
                  <tr key={item.record} className={index !== evidenceRecords.length - 1 ? "border-b border-[#E8EAEE]" : ""}>
                    <th scope="row" className="px-7 py-5 text-[16px] font-semibold leading-7 text-slate-950">{item.record}</th>
                    <td className="px-7 py-5 text-[16px] leading-7 text-slate-600">{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-4 md:hidden">
            {evidenceRecords.map((item) => (
              <div key={item.record} className="rounded-[22px] border border-[#E4E7EC] bg-white p-5">
                <h3 className="text-[18px] font-semibold leading-7 text-slate-950">{item.record}</h3>
                <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security-governance" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Security and Governance"
                title="Protect Confidential Content Before It Reaches an AI System"
                intro="Medical device translation may involve technical specifications, product-development materials, regulatory files, cybersecurity information, patient-related content, and unreleased commercial information. Technology authorization must occur before content enters the system."
              />
              <div className="mt-8 flex items-start gap-4 rounded-[24px] bg-slate-950 p-6 text-white sm:p-7">
                <LockKeyhole aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-[#F2A7C6]" />
                <div>
                  <p className="text-[18px] font-semibold leading-7">Do not use unapproved public AI tools.</p>
                  <p className="mt-3 text-[16px] leading-7 text-slate-300">
                    Confidential content should not be submitted to a public AI service unless the
                    service and its exact configuration have been formally approved for that use.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold leading-8 text-slate-950">Evaluate the Processing Environment</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {securityChecks.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[#E8EAEE] pb-4">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[#C11D63]" />
                    <p className="text-[16px] leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">Control Human Access</h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    Define who may access each project, what qualifications and confidentiality
                    obligations apply, how reviewers are authenticated, whether local downloading
                    is permitted, and how access is revoked.
                  </p>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">Protect Language Assets</h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    Clarify ownership, reuse, data separation, retention, portability, deletion,
                    and any use of translation memories, termbases, prompts, and bilingual corpora
                    for model adaptation or training.
                  </p>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">Govern Model Changes</h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    Determine how model updates are communicated, which changes trigger
                    re-evaluation, whether configurations can be reproduced, and how regressions
                    are detected.
                  </p>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">Plan for Incidents</h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">
                    Establish escalation, containment, notification, correction, business
                    continuity, and supplier-management procedures for security or quality events.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                <ArrowLink href="https://www.stepes.com/security/">Explore Stepes Security</ArrowLink>
                <ArrowLink
                  href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
                  external
                >
                  Review the NIST Generative AI Profile
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="controlled-pilot" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Implementation Checklist"
            title="How to Run a Controlled Medical Device AI Translation Pilot"
            intro="A pilot should determine where the workflow is suitable—not attempt to prove that one technology can translate every type of medical device content."
          />

          <ol className="mt-12 overflow-hidden rounded-[28px] border border-[#E2E5E9] bg-white">
            {pilotSteps.map((item, index) => (
              <li
                key={item.title}
                className={`grid min-w-0 grid-cols-[44px_minmax(0,1fr)] gap-x-4 gap-y-3 p-6 sm:gap-x-5 sm:p-7 lg:grid-cols-[64px_0.62fr_1.38fr] lg:gap-7 lg:p-8 ${
                  index !== pilotSteps.length - 1 ? "border-b border-[#E8EAEE]" : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7] text-[16px] font-semibold text-[#C11D63]">
                  {index + 1}
                </div>
                <h3 className="min-w-0 break-words text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                <p className="col-start-2 min-w-0 text-[16px] leading-7 text-slate-600 lg:col-start-auto">{item.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-7">
            <p className="text-[17px] font-semibold text-slate-950">Use a content-specific approval outcome.</p>
            <p className="mt-3 text-[16px] leading-7 text-slate-600">
              A pilot may approve the workflow for defined content types, languages, controls, or
              internal uses; approve it conditionally; or determine that it is not suitable. Avoid
              a single organization-wide “AI translation approved” decision.
            </p>
          </div>
        </div>
      </section>

      <section id="provider-evaluation" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Buyer Checklist"
            title="How to Evaluate an AI Translation Provider"
            intro="A credible provider should be able to explain the complete quality and governance workflow—not only which AI model it uses."
          />

          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            {providerCriteria.map((section) => (
              <div key={section.title} className="border-t border-[#E2E5E9] py-7">
                <h3 className="text-[22px] font-semibold leading-8 text-slate-950">{section.title}</h3>
                <ul className="mt-5 space-y-3">
                  {section.questions.map((question) => (
                    <li key={question} className="flex items-start gap-3 text-[16px] leading-7 text-slate-600">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C11D63]" aria-hidden="true" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] bg-[#FDF2F7] p-6 sm:p-7">
            <p className="text-[18px] font-semibold leading-7 text-slate-950">
              Clear answers are more informative than a general claim about AI quality.
            </p>
            <p className="mt-3 text-[16px] leading-7 text-slate-600">
              Evaluate whether the provider can connect technology selection, medical device
              expertise, qualified reviewers, security controls, traceability, quality metrics,
              and continuous improvement into one coherent operating model.
            </p>
          </div>
        </div>
      </section>

      <section id="standards" className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <SectionHeading
            eyebrow="Standards and Regulatory Context"
            title="Apply Each Requirement According to Its Actual Scope"
            intro="AI does not make a translation compliant. Human review alone does not make it compliant either. The complete process and final content must satisfy the organization’s applicable regulatory, quality, labeling, market, and product requirements."
          />

          <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
            {standards.map((item) => (
              <article key={item.title} className="border-t border-[#DDE1E6] py-7">
                <div className="flex items-start gap-4">
                  <Scale aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" />
                  <div>
                    <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">{item.title}</h3>
                    <p className="mt-3 text-[16px] leading-7 text-slate-600">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-x-7 gap-y-1">
                      {(item.links || [{ href: item.href, label: item.source }]).map((link) => (
                        <ArrowLink key={link.href} href={link.href} external>
                          {link.label}
                        </ArrowLink>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-[#E4E7EC] bg-white p-6 sm:p-7">
            <p className="text-[17px] font-semibold leading-7 text-slate-950">Standards should not be overextended.</p>
            <p className="mt-3 text-[16px] leading-7 text-slate-600">
              Certification to one standard does not automatically establish compliance with every
              regulatory, security, medical device, or translation requirement. Apply the current
              published edition according to its stated scope and review changes when standards are
              revised.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[980px]">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="AI Translation for Medical Devices"
              intro="These answers provide practical planning guidance. Specific regulatory, quality, security, and release decisions should follow your organization’s procedures and applicable market requirements."
            />

            <div className="mt-10 overflow-hidden rounded-[28px] border border-[#E2E5E9] bg-white">
              {faqs.map((item, index) => (
                <details
                  key={item.question}
                  className={`group ${index !== faqs.length - 1 ? "border-b border-[#E8EAEE]" : ""}`}
                >
                  <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-[17px] font-semibold leading-7 text-slate-950 transition hover:bg-[#FCFCFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C11D63] sm:px-7 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-[#C11D63] transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                    <p className="max-w-[840px] text-[16px] leading-8 text-slate-600">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
          <div className="mx-auto max-w-[980px]">
            <Eyebrow>Sources and References</Eyebrow>
            <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
              Authoritative Sources Used in This Guide
            </h2>
            <p className="mt-6 max-w-[820px] text-[17px] leading-8 text-slate-600">
              Regulatory, standards, and AI-governance information should be reviewed against the
              current official source before a workflow or market decision is finalized.
            </p>

            <ol className="mt-10 border-t border-[#DDE1E6]">
              {sourceReferences.map((source) => (
                <li key={source.title} className="border-b border-[#DDE1E6] py-6">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-w-0 items-start justify-between gap-5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                  >
                    <div className="min-w-0">
                      <p className="break-words text-[17px] font-semibold leading-7 text-slate-950 transition group-hover:text-[#9F1D55]">{source.title}</p>
                      <p className="mt-2 text-[16px] leading-7 text-slate-600">{source.publisher}</p>
                    </div>
                    <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#C11D63] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
              Build AI Translation Around Medical Device Quality
            </h2>
            <p className="mt-6 text-[18px] leading-8 text-slate-600">
              AI can make medical device translation faster and more scalable when it is applied
              to the right content, grounded in approved language assets, and governed by
              qualified professionals.
            </p>
            <div className="mx-auto mt-9 max-w-[760px] rounded-[24px] border-l-[3px] border-[#C11D63] bg-[#F8F9FB] p-6 text-left sm:p-7">
              <p className="text-[22px] font-semibold leading-8 tracking-[-0.01em] text-slate-950">
                Use AI where it improves efficiency and control—not where it removes accountability.
              </p>
            </div>
            <p className="mt-8 text-[17px] leading-8 text-slate-600">
              A successful program classifies content before processing, applies approved
              terminology and translation memory, evaluates each language and workflow, routes
              review according to risk, validates translations in context, and preserves the
              evidence behind every approved release.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FB]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[760px]">
              <Eyebrow>Related Medical Device Resources</Eyebrow>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Continue Planning Your Multilingual Device Program
              </h2>
            </div>
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/">Explore AI Translation Insights</ArrowLink>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#E2E5E9] bg-[#E2E5E9] md:grid-cols-2">
            {relatedResources.map((resource) => (
              <article key={resource.title} className="bg-white p-7 sm:p-8">
                <h3 className="text-[22px] font-semibold leading-8 text-slate-950">{resource.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-slate-600">{resource.description}</p>
                <ArrowLink href={resource.href} className="mt-6">
                  {resource.linkLabel}
                </ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-14 lg:py-28">
          <div className="relative overflow-hidden rounded-[30px] border border-[#E4E7EC] bg-[#FDF2F7] p-7 sm:p-9 lg:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#C11D63]/10" aria-hidden="true" />
            <div className="absolute -bottom-32 right-10 h-64 w-64 rounded-full border border-[#C11D63]/10" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:gap-16">
              <div>
                <h2 className="max-w-[760px] text-[30px] font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  Plan a Controlled Multilingual Medical Device Workflow
                </h2>
                <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                  Discuss your content types, target markets, languages, quality requirements,
                  security needs, reviewer roles, and update workflows with the Stepes medical
                  device translation team.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-stretch">
                <a
                  href="https://www.stepes.com/contact-us/"
                  data-magenta-cta
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_12px_34px_rgba(193,29,99,0.16)] transition hover:bg-[#A71954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Talk to a Medical Translation Expert
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="https://www.stepes.com/medical-device-translation-services/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7C8CF] bg-white px-6 py-3 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/35 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63] focus-visible:ring-offset-4"
                >
                  Explore Medical Device Translation Services
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
