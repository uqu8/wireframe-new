import React from "react";
import { ArrowRight, ChevronDown, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

const heroWorkflowSteps = [
  {
    number: "01",
    title: "Requirements",
    description:
      "Scope, languages, audience, file formats, review expectations, and delivery goals are aligned before translation begins.",
  },
  {
    number: "02",
    title: "Qualified Linguists",
    description:
      "Translators, editors, and reviewers are matched to the subject matter, content type, and enterprise quality requirements.",
  },
  {
    number: "03",
    title: "Terminology",
    description:
      "Approved glossaries, translation memory, and style guidance support terminology governance and multilingual consistency.",
  },
  {
    number: "04",
    title: "Review",
    description:
      "Human review workflows strengthen accuracy, clarity, and client-specific language alignment before delivery.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Linguistic, terminology, formatting, and technical checks support enterprise translation quality across content types.",
  },
  {
    number: "06",
    title: "Improvement",
    description:
      "Feedback, language asset updates, and documented learnings help improve future translation quality management.",
  },
];

const qualityRows = [
  {
    title: "Requirements are clarified before translation begins",
    body: "Project scope, language pairs, content type, review expectations, and delivery needs are defined upfront so the translation workflow starts with clear quality targets.",
  },
  {
    title: "Linguists and reviewers are matched to the work",
    body: "Professional translators, editors, and reviewers are selected based on language expertise, subject matter, and the business context of the content.",
  },
  {
    title: "Approved terminology and language assets are applied consistently",
    body: "Glossaries, translation memory, reference content, and style guidance help maintain multilingual quality assurance across projects, teams, and markets.",
  },
  {
    title: "Review and QA steps are built into the workflow",
    body: "Translation quality is supported through structured review, controlled checks, and documented delivery steps rather than relying on a final proofread alone.",
  },
  {
    title: "Feedback is captured to improve future translation quality",
    body: "Client input, reviewer comments, and language asset updates help strengthen repeatability and improve enterprise translation quality over time.",
  },
];

const certifications = [
  {
    title: "ISO 9001",
    body: "Quality management processes that support consistent service delivery across enterprise translation programs.",
  },
  {
    title: "ISO 17100",
    body: "Translation service requirements covering resources, workflows, review steps, and service delivery.",
  },
  {
    title: "ISO 13485",
    body: "Quality management support for medical device and life sciences translation workflows.",
  },
  {
    title: "Enterprise Security",
    body: "Secure project workflows for confidential business content and regulated documentation.",
  },
  {
    title: "Professional Linguist Network",
    body: "Qualified translators, editors, reviewers, and project managers matched to project requirements.",
  },
];

const frameworkItems = [
  {
    title: "Qualified People",
    body: "Stepes works with professional linguists, editors, reviewers, project managers, and subject-matter resources selected based on language expertise, domain knowledge, content type, and project requirements.",
  },
  {
    title: "Controlled Process",
    body: "Structured workflows, project instructions, review steps, QA gates, escalation paths, and delivery checks help make translation quality repeatable across languages and projects.",
  },
  {
    title: "Connected Technology",
    body: "Translation memory, terminology management, AI-assisted workflows, automated QA, in-context review, and project visibility help improve consistency, efficiency, and control.",
  },
  {
    title: "Continuous Improvement",
    body: "Client feedback, quality findings, terminology updates, reviewer input, and project learnings are captured to improve future translation performance.",
  },
];

const workflowDetails = [
  {
    number: "01",
    title: "Requirements Capture",
    body: "Stepes begins by identifying the project scope, content type, target languages, audience, file formats, deadlines, regulatory requirements, terminology needs, and review expectations.",
    details: [
      "Source files and formats",
      "Language pairs",
      "Content purpose and audience",
      "Required service level",
      "Regulatory or industry requirements",
      "Client review expectations",
      "Delivery format",
    ],
  },
  {
    number: "02",
    title: "Resource Qualification",
    body: "Linguists and reviewers are selected based on language expertise, subject-matter experience, project requirements, and quality expectations.",
    details: [
      "Native-language expertise",
      "Industry or subject-matter background",
      "Prior project performance",
      "Review requirements",
      "Specialized workflow needs",
    ],
  },
  {
    number: "03",
    title: "Terminology and Style Alignment",
    body: "Stepes prepares approved terminology, translation memory, style guides, reference materials, and client-specific language assets before translation begins.",
    details: [
      "Glossaries",
      "Translation memory",
      "Client style guides",
      "Product names and brand terminology",
      "Do-not-translate lists",
      "Reference documents",
    ],
  },
  {
    number: "04",
    title: "Translation and Review",
    body: "Content is translated using the appropriate combination of professional human translation, AI-assisted workflows, editing, review, and escalation.",
    details: [
      "Human translation",
      "AI-assisted translation where appropriate",
      "Editor review",
      "Subject-matter review",
      "Client reviewer workflow",
      "Issue escalation",
    ],
  },
  {
    number: "05",
    title: "Quality Assurance and Validation",
    body: "Stepes applies linguistic, terminology, formatting, completeness, technical, and in-context checks based on content type and project risk.",
    details: [
      "Completeness checks",
      "Terminology checks",
      "Number and tag checks",
      "Formatting checks",
      "In-context review",
      "File integrity checks",
      "Final delivery verification",
    ],
  },
  {
    number: "06",
    title: "Feedback and Continuous Improvement",
    body: "Client feedback, reviewer comments, terminology updates, and quality findings are captured to improve future projects.",
    details: [
      "Feedback review",
      "Issue resolution",
      "Terminology updates",
      "Translation memory updates",
      "Style guide refinements",
      "Program-level quality learnings",
    ],
  },
];

const riskRows = [
  {
    title: "Marketing and Website Content",
    body: "Brand voice, SEO, cultural adaptation, messaging accuracy, and in-context review help multilingual content perform consistently across markets.",
  },
  {
    title: "Technical Documentation",
    body: "Terminology consistency, product accuracy, formatting, completeness, and version control support reliable technical communication.",
  },
  {
    title: "Software and UI Content",
    body: "String length, context, placeholders, UI consistency, screenshot review, and release readiness help reduce product risk across languages.",
  },
  {
    title: "Legal and Financial Content",
    body: "Confidential handling, precision, terminology accuracy, reviewer escalation, and document consistency support business-critical translation quality.",
  },
  {
    title: "Life Sciences and Medical Content",
    body: "Qualified linguists, controlled terminology, regulated workflows, traceability, review documentation, and delivery accuracy support higher-risk content.",
  },
];

const peopleItems = [
  {
    title: "Linguist Qualification",
    body: "Professional translators are selected based on language expertise, subject knowledge, experience, and project suitability.",
  },
  {
    title: "Editorial Review",
    body: "Editors and reviewers help improve accuracy, clarity, terminology consistency, and client-specific style.",
  },
  {
    title: "Project Management Oversight",
    body: "Project managers coordinate instructions, timelines, resources, review cycles, QA steps, and delivery expectations.",
  },
  {
    title: "Subject-Matter Alignment",
    body: "Specialized content can be assigned to linguists and reviewers with relevant industry or technical experience.",
  },
];

const governanceBlocks = [
  {
    title: "Approved Terminology",
    body: "Client glossaries help ensure that product names, technical terms, brand language, and regulated terminology are translated consistently.",
  },
  {
    title: "Translation Memory",
    body: "Previously approved translations can be reused to improve consistency, reduce turnaround time, and support cost efficiency.",
  },
  {
    title: "Style Guides",
    body: "Client-specific style guides help align tone, formatting, voice, grammar preferences, and market-specific conventions.",
  },
  {
    title: "Language Asset Updates",
    body: "Terminology and translation memory can be updated based on client feedback, reviewer input, and new project requirements.",
  },
];

const aiLeftItems = [
  {
    title: "AI for Productivity",
    body: "AI can help accelerate translation workflows, improve draft quality, and support faster turnaround where appropriate.",
  },
  {
    title: "Terminology Controls",
    body: "Approved glossaries and translation memory help guide AI-assisted workflows and reduce inconsistency.",
  },
];

const aiRightItems = [
  {
    title: "Human Review for Accuracy",
    body: "Professional linguists and reviewers help ensure that translations are accurate, appropriate, and aligned with client requirements.",
  },
  {
    title: "QA Automation",
    body: "Automated checks can help identify terminology issues, missing content, formatting problems, number mismatches, and other quality risks.",
  },
];

const qaControls = [
  {
    title: "Linguistic Review",
    body: "Accuracy, fluency, grammar, meaning, tone, and readability.",
  },
  {
    title: "Terminology Review",
    body: "Approved terms, product names, brand terminology, and regulated terminology.",
  },
  {
    title: "Completeness Checks",
    body: "Missing segments, untranslated text, skipped content, and file-level completeness.",
  },
  {
    title: "Formatting Checks",
    body: "Layout, tags, numbers, punctuation, placeholders, tables, and document structure.",
  },
  {
    title: "In-Context Review",
    body: "Review of translated content in its intended format, platform, application, or visual layout when required.",
  },
  {
    title: "Delivery Verification",
    body: "Final file review, naming, format checks, delivery instructions, and project completion confirmation.",
  },
];

const accountabilityItems = [
  {
    title: "Project Instructions",
    body: "Scope, language requirements, content type, style preferences, delivery instructions, and review expectations.",
  },
  {
    title: "Resource Assignment Records",
    body: "Translation and review assignments aligned with project requirements.",
  },
  {
    title: "Review and QA Records",
    body: "Quality steps, reviewer input, issue resolution, and delivery checks.",
  },
  {
    title: "Client Feedback History",
    body: "Feedback can be captured and applied to future projects, terminology updates, and language asset improvements.",
  },
  {
    title: "Delivery Documentation",
    body: "Final delivery records help support project completion, accountability, and future reference.",
  },
];

const governanceProgramItems = [
  {
    title: "Centralized Language Assets",
    body: "Maintain glossaries, translation memory, and style guides across languages, teams, and business units.",
  },
  {
    title: "Reviewer Collaboration",
    body: "Support internal reviewers, regional stakeholders, and subject-matter experts in structured review workflows.",
  },
  {
    title: "Quality Visibility",
    body: "Give teams visibility into project status, review progress, issues, and delivery milestones.",
  },
  {
    title: "Program-Level Improvement",
    body: "Use feedback, project history, and language asset updates to improve future translation outcomes.",
  },
];

const regulatedAreas = [
  {
    title: "Medical and Life Sciences",
    body: "Medical documents, clinical content, IFUs, labeling, regulatory materials, and patient-facing content.",
    link: "Medical Translation Services",
    href: "https://www.stepes.com/medical-translation-services/",
  },
  {
    title: "Financial and Legal",
    body: "Contracts, investor materials, compliance documents, insurance content, banking content, and policy documents.",
    links: [
      { label: "Financial Translation Services", href: "https://www.stepes.com/financial-translation-services/" },
      { label: "Legal Translation Services", href: "https://www.stepes.com/legal-translation-services/" },
    ],
  },
  {
    title: "Technical and Product Content",
    body: "Manuals, software strings, technical guides, support content, and product documentation.",
    links: [
      { label: "Technical Translation Services", href: "https://www.stepes.com/technical-translation-services/" },
      { label: "Software Localization Services", href: "https://www.stepes.com/software-localization-services/" },
    ],
  },
  {
    title: "Enterprise Communications",
    body: "Training materials, HR content, internal communications, websites, marketing campaigns, and global brand content.",
  },
];

const improvementSteps = [
  "Feedback Capture",
  "Terminology Updates",
  "Translation Memory Improvement",
  "Workflow Refinement",
  "Stronger Future Delivery",
];

const improvementBlocks = [
  {
    title: "Feedback Capture",
    body: "Client and reviewer feedback can be documented and reviewed.",
  },
  {
    title: "Issue Resolution",
    body: "Quality findings are addressed through structured review and correction workflows.",
  },
  {
    title: "Terminology Updates",
    body: "Approved changes can be added to glossaries and language assets.",
  },
  {
    title: "Translation Memory Improvement",
    body: "Validated translations can be reused to improve future consistency.",
  },
  {
    title: "Program Learning",
    body: "Recurring patterns and project insights can help improve future workflows, timelines, and quality outcomes.",
  },
];

const resourceGroups = [
  {
    title: "Quality and Compliance",
    links: [
      { label: "ISO Certifications", href: "https://www.stepes.com/iso-certifications/" },
      { label: "Translation QA Services", href: "https://www.stepes.com/translation-qa-services/" },
      { label: "Security", href: "https://www.stepes.com/security/" },
    ],
  },
  {
    title: "Language Technology",
    links: [
      { label: "Enterprise Translation Management", href: "https://www.stepes.com/enterprise-translation-management/" },
      { label: "Translation Management System", href: "https://www.stepes.com/translation-management-system/" },
      { label: "Translation Memory", href: "https://www.stepes.com/translation-memory/" },
      { label: "Terminology Management", href: "https://www.stepes.com/terminology-management/" },
    ],
  },
  {
    title: "Specialized Translation Services",
    links: [
      { label: "Medical Translation Services", href: "https://www.stepes.com/medical-translation-services/" },
      { label: "Legal Translation Services", href: "https://www.stepes.com/legal-translation-services/" },
      { label: "Financial Translation Services", href: "https://www.stepes.com/financial-translation-services/" },
      { label: "Software Localization Services", href: "https://www.stepes.com/software-localization-services/" },
    ],
  },
];

const faqs = [
  {
    question: "What is a translation quality system?",
    answer:
      "A translation quality system is a structured approach for managing translation quality across the full project lifecycle. It includes requirements capture, qualified linguist selection, terminology management, translation, review, QA checks, documentation, feedback, and continuous improvement.",
  },
  {
    question: "How is a translation quality system different from translation QA?",
    answer:
      "Translation QA usually refers to checks performed during or after translation. A translation quality system is broader. It includes the people, processes, technology, language assets, documentation, and feedback loops that help ensure quality before, during, and after translation.",
  },
  {
    question: "Does Stepes follow ISO-certified translation workflows?",
    answer:
      "Stepes supports enterprise translation quality with ISO-certified processes, professional linguists, structured workflows, and documented quality controls. Clients can review Stepes’ ISO certifications for additional quality and compliance confidence.",
  },
  {
    question: "How does Stepes select qualified linguists and reviewers?",
    answer:
      "Stepes matches linguists and reviewers based on language expertise, subject-matter experience, content type, project requirements, and quality expectations.",
  },
  {
    question: "How does Stepes use AI in translation quality workflows?",
    answer:
      "Stepes uses AI-assisted technology to improve productivity, consistency, and workflow efficiency where appropriate. Human linguists, reviewers, terminology controls, and QA checks remain central to quality management for enterprise and business-critical content.",
  },
  {
    question: "How does Stepes manage terminology consistency?",
    answer:
      "Stepes uses glossaries, translation memory, style guides, reference materials, and client-approved language assets to help maintain consistency across languages, projects, and content types.",
  },
  {
    question: "Can Stepes support regulated or audit-sensitive translation projects?",
    answer:
      "Yes. Stepes supports regulated and audit-sensitive translation projects with qualified resources, controlled workflows, review steps, documentation, terminology management, and secure delivery processes.",
  },
];

function SectionHeading({
  label,
  title,
  description,
  centered = false,
}: {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-[840px] text-center" : "max-w-[840px]"}>
      {label ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
          {label}
        </p>
      ) : null}
      <h2
        className={`mt-3 max-w-[760px] text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] xl:text-[36px] ${centered ? "mx-auto" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-[760px] text-[17px] leading-8 text-slate-600 xl:text-[18px] ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function TranslationQualitySystemSectionsWireframe() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <main className="mx-auto max-w-[1280px] px-5 md:px-6 lg:px-10 xl:px-14">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="py-20 md:py-24 xl:py-28"
        >
          <div className="mx-auto max-w-[920px] text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
              Translation Quality System
            </div>
            <h1 className="mx-auto mt-5 max-w-[900px] text-balance text-[38px] font-semibold leading-[1.04] tracking-[-0.03em] text-slate-950 md:text-[42px] xl:text-[48px]">
              Translation Quality System for Enterprise Language Operations
            </h1>
            <p className="mx-auto mt-6 max-w-[800px] text-[17px] leading-8 text-slate-600 xl:text-[18px]">
              Stepes helps global companies manage translation quality through ISO-certified workflows, qualified linguists,
              terminology governance, AI-assisted technology, human review, and documented quality controls. From business
              content to regulated documentation, our translation quality system is designed to support enterprise translation
              quality, translation quality management, and multilingual quality assurance at scale.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://www.stepes.com/contact-us/"
                className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A71954] sm:w-auto sm:max-w-none"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.stepes.com/iso-certifications/"
                className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto sm:max-w-none"
              >
                View ISO Certifications
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-[#E5E7EB] pt-10 md:mt-16 md:pt-12">
            <div className="mx-auto max-w-[1080px]">
              <div className="mx-auto max-w-[760px] text-center">
                <p className="mt-3 text-[16px] leading-7 text-slate-600">
                  A structured quality workflow that connects requirements, qualified resources, terminology control, review,
                  quality assurance, and continuous improvement.
                </p>
              </div>

              <div className="mt-10 hidden lg:block">
                <div className="relative grid grid-cols-6 gap-8">
                  <div className="absolute left-[7%] right-[7%] top-4 h-px bg-[#E5E7EB]" />
                  {heroWorkflowSteps.map((step) => (
                    <div key={step.number} className="relative">
                      <div className="relative z-10 mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#E8C7D7] bg-white text-[11px] font-semibold tracking-[0.08em] text-[#C11D63]">
                        {step.number}
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-slate-950">{step.title}</h3>
                        <p className="mx-auto mt-3 max-w-[170px] text-[14px] leading-7 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 space-y-7 lg:hidden">
                {heroWorkflowSteps.map((step, index) => (
                  <div key={step.number} className="relative pl-14">
                    {index < heroWorkflowSteps.length - 1 ? (
                      <div className="absolute left-4 top-9 h-[calc(100%+12px)] w-px bg-[#E5E7EB]" />
                    ) : null}
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#E8C7D7] bg-white text-[11px] font-semibold tracking-[0.08em] text-[#C11D63]">
                      {step.number}
                    </div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[760px] text-[14px] leading-7 text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:items-start lg:gap-14 xl:gap-16">
            <div>
              <div className="mb-6 h-[3px] w-20 rounded-full bg-[#C11D63]" />
              <h2 className="max-w-[680px] text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] xl:text-[36px]">
                Quality Built Into Every Translation Workflow
              </h2>
              <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-slate-700 xl:text-[18px]">
                Translation quality is not a final check at the end of a project. At Stepes, quality is managed through a
                structured system that begins with requirements capture and continues through linguist selection, terminology
                preparation, translation, review, QA, delivery, and client feedback.
              </p>
              <p className="mt-5 max-w-[760px] pr-0 text-[16px] leading-8 text-slate-600 lg:pr-6">
                For enterprise teams, this supports multilingual content programs with repeatable workflows, documented quality
                controls, and scalable processes across languages, content types, and business units.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] px-6 py-7 md:px-7 md:py-8 lg:sticky lg:top-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    Repeatable Quality Controls
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Structured workflows help maintain consistent enterprise translation quality across regions, teams, and content types.
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    Scalable Multilingual Delivery
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    A connected process supports multilingual quality assurance for growing global content programs.
                  </p>
                </div>
                <div className="border-t border-[#E5E7EB] pt-6">
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    Documented Quality Management
                  </h3>
                  <p className="mt-2 text-[14px] leading-7 text-slate-600">
                    Translation quality management is reinforced by language assets, review steps, and accountable delivery workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[#E5E7EB] lg:mt-14">
            {qualityRows.map((row, index) => (
              <div
                key={row.title}
                className={`grid gap-5 py-7 md:gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-10 ${index < qualityRows.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
              >
                <h3 className="max-w-[560px] text-[20px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  {row.title}
                </h3>
                <p className="max-w-[760px] text-[16px] leading-8 text-slate-600">{row.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              label="Certifications and Enterprise Readiness"
              title="ISO-Certified Processes for Enterprise Translation Quality"
              description="Stepes supports enterprise translation programs with ISO-certified quality processes, professional language resources, and documented workflows designed for consistent multilingual delivery."
            />
            <a
              href="https://www.stepes.com/iso-certifications/"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63]"
            >
              View ISO Certifications
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#FCFCFD] lg:mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-[#E5E7EB]">
              {certifications.map((item, index) => (
                <div
                  key={item.title}
                  className={`px-5 py-6 md:px-6 md:py-7 ${index < certifications.length - 1 ? "border-b border-[#E5E7EB] lg:border-b-0" : ""}`}
                >
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <SectionHeading
            title="A Quality System Built Around People, Process, Technology, and Improvement"
            description="Stepes supports enterprise translation quality with a connected framework that combines qualified language experts, controlled workflows, language technology, and continuous improvement across multilingual content programs."
            centered
          />

          <div className="mt-12 grid gap-0 border-t border-[#E5E7EB] lg:grid-cols-4">
            {frameworkItems.map((item, index) => (
              <div
                key={item.title}
                className={`py-8 lg:px-6 ${index < frameworkItems.length - 1 ? "border-b border-[#E5E7EB] lg:border-b-0 lg:border-r lg:border-[#E5E7EB]" : ""}`}
              >
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[280px] text-[16px] leading-8 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div className="lg:sticky lg:top-8">
              <SectionHeading
                label="End-to-End Translation Quality Workflow"
                title="How the Stepes Quality System Works"
                description="Every enterprise translation project has its own requirements, risk level, audience, and workflow. The Stepes quality system provides a repeatable framework that can be adapted to different content types, industries, and language programs."
              />
            </div>

            <div className="relative">
              <div className="absolute left-4 top-2 hidden h-[calc(100%-20px)] w-px bg-[#E5E7EB] md:block" />
              <div className="space-y-10">
                {workflowDetails.map((item) => (
                  <div key={item.number} className="relative pl-0 md:pl-16">
                    <div className="hidden md:absolute md:left-0 md:top-1 md:flex md:h-8 md:w-8 md:items-center md:justify-center md:rounded-full md:border md:border-[#E8C7D7] md:bg-white md:text-[11px] md:font-semibold md:tracking-[0.08em] md:text-[#C11D63]">
                      {item.number}
                    </div>
                    <div className="border-b border-[#E5E7EB] pb-10 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3 md:hidden">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8C7D7] bg-white text-[11px] font-semibold tracking-[0.08em] text-[#C11D63]">
                          {item.number}
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9F1D55]">
                          Workflow Step
                        </p>
                      </div>
                      <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:mt-0 md:text-[22px] xl:text-[24px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[760px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                        {item.details.map((detail) => (
                          <span key={detail} className="text-[14px] leading-7 text-slate-700">
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <SectionHeading
            title="Quality Controls Matched to Content Risk"
            description="Different content types require different levels of quality control. Stepes adapts translation workflows based on content purpose, audience, regulatory sensitivity, brand impact, and operational risk."
            centered
          />

          <div className="mx-auto mt-12 max-w-[1160px] border-t border-[#E5E7EB]">
            {riskRows.map((row, index) => (
              <div
                key={row.title}
                className={`grid gap-4 py-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-8 ${index < riskRows.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
              >
                <h3 className="max-w-[500px] text-[20px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  {row.title}
                </h3>
                <p className="max-w-[760px] text-[16px] leading-8 text-slate-600">{row.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.48 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                title="Qualified Language Experts for Enterprise Translation"
                description="Stepes combines professional linguists, editors, reviewers, project managers, and subject-matter resources to support enterprise translation quality. Resources are matched to project requirements based on language, content type, domain expertise, quality expectations, and workflow needs."
              />
            </div>

            <div className="grid gap-0 border-t border-[#E5E7EB] md:grid-cols-2">
              {peopleItems.map((item, index) => {
                const isTopRow = index < 2;
                const isLeftColumn = index % 2 === 0;
                return (
                  <div
                    key={item.title}
                    className={`py-7 md:px-6 ${isTopRow ? "md:border-b md:border-[#E5E7EB]" : ""} ${isLeftColumn ? "md:border-r md:border-[#E5E7EB]" : ""} ${index < peopleItems.length - 1 ? "border-b border-[#E5E7EB] md:border-b-0" : ""}`}
                  >
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[300px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.56 }}
          className="border-t border-[#E5E7EB] py-24 md:py-28"
        >
          <SectionHeading
            title="Terminology Governance for Consistent Multilingual Content"
            description="Enterprise translation quality depends on consistency across markets, teams, products, and content channels. Stepes helps companies manage approved terminology, translation memory, style guides, and language assets so multilingual content stays aligned over time."
            centered
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(440px,1.18fr)_minmax(0,0.88fr)] lg:items-center lg:gap-14">
            <div className="order-1 space-y-10 lg:order-1 lg:pr-4">
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  Approved Terminology
                </h3>
                <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">
                  Client glossaries help ensure that product names, technical terms, brand language, and regulated terminology are translated consistently.
                </p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-8">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  Style Guides
                </h3>
                <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">
                  Client-specific style guides help align tone, formatting, voice, grammar preferences, and market-specific conventions.
                </p>
              </div>
            </div>

            <div className="order-1 rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD] px-7 py-10 md:px-10 md:py-12 lg:order-2">
              <div className="rounded-[24px] border border-[#E5E7EB] bg-white px-6 py-7 md:px-7 md:py-8">
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-full border border-[#E8C7D7] bg-[#FDF2F7] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Managed Language Assets
                  </div>
                  <p className="mt-5 max-w-[520px] text-[16px] leading-8 text-slate-600">
                    Glossaries, translation memory, style guidance, and reviewer feedback help keep multilingual content aligned across products, markets, and enterprise teams.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {governanceBlocks.map((item) => (
                    <div key={item.title} className="rounded-[22px] border border-[#E5E7EB] bg-[#FCFCFD] px-5 py-5">
                      <h4 className="text-[16px] font-semibold text-slate-950">{item.title}</h4>
                      <p className="mt-2 text-[14px] leading-7 text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://www.stepes.com/translation-memory/"
                  className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto sm:max-w-none"
                >
                  Translation Memory
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.stepes.com/terminology-management/"
                  className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto sm:max-w-none"
                >
                  Terminology Management
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="order-3 space-y-10 lg:justify-self-end lg:pl-4">
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  Translation Memory
                </h3>
                <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">
                  Previously approved translations can be reused to improve consistency, reduce turnaround time, and support cost efficiency.
                </p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-8">
                <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  Language Asset Updates
                </h3>
                <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">
                  Terminology and translation memory can be updated based on client feedback, reviewer input, and new project requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.64 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                title="AI-Assisted Translation, Human-Governed Quality"
                description="Stepes uses AI-assisted translation technology where it can improve speed, consistency, and productivity. For enterprise and high-risk content, AI output is governed through human review, terminology controls, quality checks, and documented workflows."
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD]">
              <div className="grid lg:grid-cols-2 lg:divide-x lg:divide-[#E5E7EB]">
                <div className="px-6 py-7 md:px-7 md:py-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    AI for Speed and Consistency
                  </p>
                  <div className="mt-5 space-y-6">
                    {aiLeftItems.map((item, index) => (
                      <div key={item.title} className={index > 0 ? "border-t border-[#E5E7EB] pt-6" : ""}>
                        <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-[#E5E7EB] px-6 py-7 md:px-7 md:py-8 lg:border-t-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                    Human Review and Quality Control
                  </p>
                  <div className="mt-5 space-y-6">
                    {aiRightItems.map((item, index) => (
                      <div key={item.title} className={index > 0 ? "border-t border-[#E5E7EB] pt-6" : ""}>
                        <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[16px] leading-8 text-slate-600">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.72 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <SectionHeading
            title="Review and QA Gates Before Delivery"
            description="Stepes applies quality checks based on the project scope, content type, and required service level. Review and QA gates help identify and resolve issues before translated content is delivered."
            centered
          />

          <div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD]">
            <div className="grid lg:grid-cols-3">
              {qaControls.map((item, index) => {
                const isLastRow = index >= qaControls.length - 3;
                const isLastCol = index % 3 === 2;
                return (
                  <div
                    key={item.title}
                    className={`${!isLastRow ? "border-b border-[#E5E7EB]" : ""} ${!isLastCol ? "lg:border-r lg:border-[#E5E7EB]" : ""} px-6 py-6 md:px-7 md:py-7`}
                  >
                    <div className="relative pl-6">
                      <div className="absolute left-0 top-[12px] h-2 w-2 rounded-full bg-[#C11D63]" />
                      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[420px] text-[16px] leading-8 text-slate-600">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                label="Documentation and Accountability"
                title="Documented Quality Controls for Enterprise Accountability"
                description="Enterprise translation programs require more than good language output. They also need documented instructions, review history, quality records, and accountability. Stepes supports structured project records that help clients understand how work was assigned, reviewed, checked, and delivered."
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD]">
              {accountabilityItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-4 px-6 py-6 md:grid-cols-[minmax(0,0.56fr)_minmax(0,1.44fr)] md:px-7 md:py-7 ${index < accountabilityItems.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
                >
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="max-w-[560px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.88 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:gap-16">
            <div>
              <SectionHeading
                title="Quality Governance for Global Translation Programs"
                description="For companies translating across departments, markets, and content systems, quality must be governed at the program level. Stepes helps enterprise teams manage multilingual consistency, reviewer collaboration, terminology updates, workflow visibility, and scalable delivery across global content operations."
              />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://www.stepes.com/enterprise-translation-management/"
                  className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto sm:max-w-none"
                >
                  Enterprise Translation Management
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.stepes.com/translation-management-system/"
                  className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63] sm:w-auto sm:max-w-none"
                >
                  Translation Management System
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#E5E7EB] bg-[#FCFCFD] px-6 py-7 md:px-8 md:py-8">
              <div className="grid gap-0 border-t border-[#E5E7EB] sm:grid-cols-2">
                {governanceProgramItems.map((item, index) => {
                  const isTopRow = index < 2;
                  const isLeftColumn = index % 2 === 0;
                  return (
                    <div
                      key={item.title}
                      className={`py-6 sm:px-6 ${isTopRow ? "sm:border-b sm:border-[#E5E7EB]" : ""} ${isLeftColumn ? "sm:border-r sm:border-[#E5E7EB]" : ""} ${index < governanceProgramItems.length - 1 ? "border-b border-[#E5E7EB] sm:border-b-0" : ""}`}
                    >
                      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-7 rounded-[24px] border border-[#E5E7EB] bg-white px-5 py-6 md:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                  Visibility Across Global Programs
                </p>
                <p className="mt-3 max-w-[640px] text-[15px] leading-7 text-slate-600">
                  Give enterprise teams a clearer view of language assets, reviewer input, workflow status, and delivery milestones across multilingual programs.
                </p>
                <div className="mt-6 overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#FCFCFD]">
                  <div className="grid md:grid-cols-4 md:divide-x md:divide-[#E5E7EB]">
                    <div className="px-4 py-5">
                      <p className="text-[13px] font-semibold text-slate-950">Language Assets</p>
                      <p className="mt-2 text-[13px] leading-6 text-slate-600">Glossaries, translation memory, and style guides kept aligned.</p>
                    </div>
                    <div className="border-t border-[#E5E7EB] px-4 py-5 md:border-t-0">
                      <p className="text-[13px] font-semibold text-slate-950">Reviewer Input</p>
                      <p className="mt-2 text-[13px] leading-6 text-slate-600">Regional and subject-matter review captured in structured workflows.</p>
                    </div>
                    <div className="border-t border-[#E5E7EB] px-4 py-5 md:border-t-0">
                      <p className="text-[13px] font-semibold text-slate-950">Workflow Status</p>
                      <p className="mt-2 text-[13px] leading-6 text-slate-600">Project progress, issues, and next actions visible across teams.</p>
                    </div>
                    <div className="border-t border-[#E5E7EB] px-4 py-5 md:border-t-0">
                      <p className="text-[13px] font-semibold text-slate-950">Delivery Milestones</p>
                      <p className="mt-2 text-[13px] leading-6 text-slate-600">Timelines, approvals, and multilingual delivery checkpoints kept on track.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.96 }}
          className="border-t border-[#E5E7EB] py-20 md:py-24"
        >
          <SectionHeading
            title="Translation Quality for Business-Critical and Regulated Content"
            description="Many enterprise translation projects involve sensitive, regulated, or high-value content. Stepes supports these projects with qualified resources, controlled workflows, terminology management, review steps, documentation, and secure delivery processes."
            centered
          />

          <div className="mx-auto mt-12 max-w-[1180px] border-t border-[#E5E7EB]">
            {regulatedAreas.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-5 py-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start lg:gap-8 ${index < regulatedAreas.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
              >
                <h3 className="max-w-[500px] text-[20px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                  {item.title}
                </h3>
                <div>
                  <p className="max-w-[760px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                  {item.link ? (
                    <div className="mt-4">
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#9F1D55] transition hover:text-[#C11D63]"
                      >
                        {item.link}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  ) : null}
                  {item.links ? (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#9F1D55] transition hover:text-[#C11D63]"
                        >
                          {link.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.04 }}
          className="border-t border-[#E5E7EB] py-24 md:py-28"
        >
          <SectionHeading
            title="Continuous Improvement Across Every Language Program"
            description="Translation quality improves when feedback, terminology decisions, reviewer comments, and project learnings are captured and reused. Stepes helps enterprise clients turn each project into a stronger foundation for future multilingual content."
            centered
          />

          <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.9fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <div className="space-y-9">
              {improvementBlocks.slice(0, 2).map((item) => (
                <div key={item.title}>
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full border border-[#E5E7EB] bg-white md:h-[380px] md:w-[380px]">
                <div className="absolute inset-[38px] rounded-full border border-dashed border-[#E8C7D7]" />
                {improvementSteps.map((step, index) => {
                  const positions = [
                    "top-4 left-1/2 -translate-x-1/2",
                    "top-[22%] right-2",
                    "bottom-5 right-[18%]",
                    "bottom-5 left-[18%]",
                    "top-[22%] left-2",
                  ];
                  return (
                    <div
                      key={step}
                      className={`absolute ${positions[index]} rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[12px] font-semibold text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.04)]`}
                    >
                      {step}
                    </div>
                  );
                })}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FDF2F7] text-[#9F1D55]">
                  <RotateCw className="h-8 w-8" />
                </div>
              </div>
            </div>

            <div className="space-y-9 lg:justify-self-end">
              {improvementBlocks.slice(2).map((item) => (
                <div key={item.title}>
                  <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[22px] xl:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[320px] text-[16px] leading-8 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.12 }}
          className="border-t border-[#E5E7EB] py-24 md:py-28"
        >
          <SectionHeading
            title="Explore More Stepes Quality and Trust Resources"
            description="Use the Quality System page as a starting point for the supporting trust, technology, and service resources behind enterprise translation quality."
            centered
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {resourceGroups.map((group) => (
              <div key={group.title} className="border-t border-[#E5E7EB] pt-5">
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[20px] xl:text-[22px]">
                  {group.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-3 text-[15px] font-medium text-slate-600 transition hover:text-[#9F1D55]"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#9F1D55]" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.2 }}
          className="border-t border-[#E5E7EB] py-24 md:py-28"
        >
          <SectionHeading
            title="Translation Quality System FAQ"
            description="Common questions about translation quality management, enterprise workflows, terminology control, AI-assisted translation, and regulated content support."
            centered
          />

          <div className="mx-auto mt-12 max-w-[1080px] overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-white">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className={index < faqs.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left md:px-8 md:py-6">
                  <span className="text-[19px] font-semibold tracking-[-0.02em] text-slate-950 md:text-[21px]">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#9F1D55]" />
                </summary>
                <div className="px-6 pb-5 md:px-8 md:pb-6">
                  <p className="max-w-[820px] text-[15px] leading-7 text-slate-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 1.28 }}
          className="border-t border-[#E5E7EB] py-24 md:py-28"
        >
          <div className="overflow-hidden rounded-[30px] border border-[#E8C7D7] bg-[#FDF2F7] px-6 py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-[860px] text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9F1D55]">
                Enterprise Translation Quality
              </p>
              <h2 className="mx-auto mt-3 max-w-[760px] text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 md:text-[32px] xl:text-[36px]">
                Build Enterprise Translation Quality With Stepes
              </h2>
              <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-8 text-slate-600 xl:text-[18px]">
                Whether you need ongoing localization support, regulated content translation, multilingual product documentation, or enterprise language operations, Stepes provides the people, processes, technology, and quality controls to help you translate with confidence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A71954] sm:w-auto sm:max-w-none"
                >
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.stepes.com/about/"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8C7D7] bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#C11D63] hover:text-[#C11D63]"
                >
                  About Stepes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
