import React from "react";

const proofItems = [
  {
    title: "100+ Languages",
    description: "Professional translation support for global markets.",
  },
  {
    title: "AI + Human Workflows",
    description:
      "Flexible translation models matched to content risk and business needs.",
  },
  {
    title: "ISO-Certified Quality Systems",
    description:
      "Structured quality systems for accuracy, consistency, and continuous improvement.",
  },
];

const foundationItems = [
  {
    label: "Plan",
    title: "Plan With Confidence",
    description:
      "Define languages, audiences, content risks, file requirements, stakeholders, deadlines, and review expectations before translation begins. A clear plan reduces uncertainty, prevents avoidable revisions, and gives every participant a shared understanding of the desired outcome.",
  },
  {
    label: "Protect",
    title: "Protect Meaning and Consistency",
    description:
      "Preserve approved terminology, product names, technical language, brand voice, and regulatory meaning across documents and languages. Translation memory, terminology management, qualified linguists, and structured review help maintain consistency throughout the content lifecycle.",
  },
  {
    label: "Scale",
    title: "Scale Without Rework",
    description:
      "Build reusable language assets and repeatable workflows that make future translation faster and more efficient. Well-managed translation programs reduce duplicated effort while supporting new content, revisions, additional languages, and ongoing global growth.",
  },
];

const guideTopics = [
  "Evaluate content before translation begins",
  "Select an appropriate AI, human, or hybrid workflow",
  "Apply translation memory and approved terminology",
  "Route specialized content to qualified linguists",
  "Match review depth to business and regulatory risk",
  "Reuse approved translations and reviewer feedback",
];

const translationTopics = [
  {
    icon: "plan",
    title: "Planning a Translation Project",
    description:
      "Define project scope, target languages, audiences, content priorities, deadlines, approval responsibilities, and delivery requirements before work begins.",
    linkLabel: "Explore Translation Planning",
    href: "https://www.stepes.com/resources/translation-guides/#translation-essentials",
  },
  {
    icon: "files",
    title: "Preparing Content and Files",
    description:
      "Understand how editable source files, scanned documents, images, tables, layouts, graphics, and source-text quality affect translation and final delivery.",
    linkLabel: "Explore File Preparation Guides",
    href: "https://www.stepes.com/resources/translation-guides/#translation-essentials",
  },
  {
    icon: "workflow",
    title: "Choosing a Translation Workflow",
    description:
      "Compare professional human translation, AI translation, machine translation post-editing, and hybrid workflows based on purpose, quality, turnaround, confidentiality, and risk.",
    linkLabel: "Explore Translation Workflows",
    href: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  },
  {
    icon: "quality",
    title: "Managing Translation Quality",
    description:
      "See how editing, proofreading, linguistic review, terminology control, translation memory, automated QA, formatting checks, and approval protect quality.",
    linkLabel: "Explore Translation Quality Guidance",
    href: "https://www.stepes.com/resources/translation-quality-governance/",
  },
  {
    icon: "specialized",
    title: "Translating Specialized Content",
    description:
      "Explore the additional expertise and controls required for legal, medical, technical, financial, certified, marketing, training, and regulated materials.",
    linkLabel: "Explore Specialized Translation",
    href: "https://www.stepes.com/resources/translation-guides/#specialized-translation-guidance",
  },
  {
    icon: "scale",
    title: "Delivering Translation at Scale",
    description:
      "Learn how enterprise teams manage recurring content, multiple languages, version control, translation memory reuse, terminology updates, and workflow automation.",
    linkLabel: "Explore Enterprise Translation",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
];

const essentialGuides = [
  {
    title: "The Professional Translation Process: From Intake to Delivery",
    description:
      "Follow the complete lifecycle of a professional translation project, from scoping and file analysis through translation, specialist review, QA, formatting, approval, and final delivery.",
    linkLabel: "Explore the Translation Process",
    href: "https://www.stepes.com/resources/translation-guides/professional-translation-process/",
  },
  {
    title: "How to Prepare Documents and Files for Translation",
    description:
      "Learn how to organize editable source files, scanned PDFs, tables, graphics, screenshots, reference materials, and layout instructions before translation begins.",
    linkLabel: "Prepare Files for Translation",
    href: "https://www.stepes.com/resources/translation-guides/prepare-files-for-translation/",
  },
  {
    title: "Human Translation vs. AI Translation vs. MTPE",
    description:
      "Understand the differences between professional human translation, raw AI translation, machine translation post-editing, and fully managed hybrid workflows.",
    linkLabel: "Compare Translation Methods",
    href: "https://www.stepes.com/resources/translation-guides/human-translation-vs-ai-translation-mtpe/",
  },
  {
    title: "Translation Review, Editing, Proofreading, and QA Explained",
    description:
      "Learn what each quality stage evaluates, when additional review is appropriate, and how to avoid unnecessary cycles while protecting important content.",
    linkLabel: "Understand Translation Review",
    href: "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/",
  },
  {
    title: "How to Create an Effective Translation Brief",
    description:
      "Give linguists the audience, purpose, tone, terminology, format, regulatory context, and approval requirements needed to produce the right result from the start.",
    linkLabel: "Create a Translation Brief",
    href: "https://www.stepes.com/resources/translation-guides/translation-brief/",
  },
  {
    title: "Translation Memory and Terminology Management",
    description:
      "See how reusable language assets preserve approved language, improve consistency, support updates, and reduce duplicated translation work across global content programs.",
    linkLabel: "Explore Language Asset Management",
    href: "https://www.stepes.com/resources/translation-guides/translation-memory-terminology-management/",
  },
];

const contentTypes = [
  {
    title: "Business and Corporate Documents",
    description:
      "Translate policies, reports, presentations, proposals, internal communications, employee materials, and corporate documentation while preserving clarity, tone, terminology, and formatting.",
    linkLabel: "Professional Translation Services",
    href: "https://www.stepes.com/professional-translation-services/",
  },
  {
    title: "Technical Manuals and Documentation",
    description:
      "Maintain precise terminology, instructions, warnings, tables, diagrams, measurements, and document structure across manuals, specifications, installation guides, and technical publications.",
    linkLabel: "Technical Translation Services",
    href: "https://www.stepes.com/technical-translation-services/",
  },
  {
    title: "Legal and Compliance Content",
    description:
      "Protect legal meaning and defined terminology across contracts, agreements, litigation materials, corporate records, compliance policies, disclosures, and regulatory documentation.",
    linkLabel: "Legal Translation Services",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Medical and Life Sciences Materials",
    description:
      "Support accurate communication across clinical, medical, pharmaceutical, biotechnology, and healthcare content using qualified linguists, controlled terminology, and risk-appropriate review.",
    linkLabel: "Medical Translation Services",
    href: "https://www.stepes.com/medical-translation-services/",
  },
  {
    title: "Financial and Investor Communications",
    description:
      "Translate financial statements, disclosures, annual reports, investor communications, banking content, insurance materials, and market-facing information with careful terminology and numerical review.",
    linkLabel: "Financial Translation Services",
    href: "https://www.stepes.com/financial-translation-services/",
  },
  {
    title: "Marketing and Brand Content",
    description:
      "Adapt campaign materials, product messaging, brochures, advertisements, email content, and corporate communications while preserving brand voice, persuasive intent, and cultural relevance.",
    linkLabel: "Marketing Translation Services",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Training and eLearning Content",
    description:
      "Translate course materials, assessments, scripts, presentations, learning management system content, and multimedia training assets while preserving instructional meaning and learner experience.",
    linkLabel: "eLearning Translation Services",
    href: "https://www.stepes.com/elearning-translation-services/",
  },
  {
    title: "Certified and Official Documents",
    description:
      "Understand when translations require certification, signed statements, notarization, or supporting documentation for immigration, education, legal, government, and official administrative use.",
    linkLabel: "Certified Translation Services",
    href: "https://www.stepes.com/certified-translation-services/",
  },
];

const workflowSteps = [
  {
    title: "Content Intake and Objectives",
    description:
      "Identify what is being translated, who will use it, where it will be published, which languages are required, and what quality or regulatory expectations apply.",
  },
  {
    title: "File and Content Analysis",
    description:
      "Review source files for word count, format, repetition, embedded text, layout complexity, images, tables, reference materials, and preparation requirements.",
  },
  {
    title: "Translation Memory and Terminology Preparation",
    description:
      "Prepare existing translation memory, glossaries, style guides, prior translations, product names, and approved terminology for consistent use.",
  },
  {
    title: "Workflow and Resource Selection",
    description:
      "Choose the right translation model based on content type, complexity, audience, turnaround, confidentiality, and risk.",
  },
  {
    title: "Translation",
    description:
      "Qualified linguists or AI translation models selected for the project produce the target-language content using available language assets and contextual references.",
  },
  {
    title: "Specialist Review",
    description:
      "Route content requiring additional oversight to an editor, subject-matter linguist, in-country reviewer, or client stakeholder.",
  },
  {
    title: "Quality Assurance and Formatting",
    description:
      "Check completeness, terminology, numbers, tags, consistency, punctuation, and formatting, then restore content to its required final format.",
  },
  {
    title: "Approval, Delivery, and Reuse",
    description:
      "Deliver approved files and capture final translations, terminology decisions, and corrections for consistent reuse across future projects.",
  },
];

const workflowCapabilities = [
  {
    label: "Translation Memory",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    label: "Terminology Management",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    label: "AI + Human Translation Workflow",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    label: "Translation Quality Assurance",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
];

const specializedGuides = [
  {
    title: "Legal Document Translation Best Practices",
    description:
      "Learn how to preserve legal meaning, defined terms, references, document structure, confidentiality, and jurisdiction-specific language across contracts, litigation documents, compliance materials, and corporate records.",
    linkLabel: "Read the Legal Translation Guide",
    href: "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/",
  },
  {
    title: "Medical Device IFU Translation",
    description:
      "Explore the translation requirements for instructions for use, labels, warnings, packaging, user interfaces, and supporting medical device documentation, including terminology, formatting, review, and version control.",
    linkLabel: "Explore IFU Translation Guidance",
    href: "https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation/",
  },
  {
    title: "Financial Reports and Investor Communications",
    description:
      "Learn how multilingual financial content is managed across annual reports, disclosures, investor presentations, market announcements, financial statements, and other time-sensitive communications.",
    linkLabel: "Explore Financial Translation Guidance",
    href: "https://www.stepes.com/resources/translation-guides/financial-report-translation/",
  },
  {
    title: "Technical Manual Translation",
    description:
      "Understand how technical terminology, diagrams, warnings, measurements, tables, structured content, and product updates are managed across multilingual manuals and technical documentation.",
    linkLabel: "Explore Technical Manual Translation",
    href: "https://www.stepes.com/resources/translation-guides/technical-manual-translation/",
  },
  {
    title: "Certified Translation Requirements",
    description:
      "Learn when certified translations may be requested, what a certification statement normally confirms, and how supporting requirements can vary by receiving organization, jurisdiction, and intended use.",
    linkLabel: "Understand Certified Translation",
    href: "https://www.stepes.com/resources/translation-guides/certified-translation-requirements/",
  },
  {
    title: "ESG and Sustainability Reporting Translation",
    description:
      "Explore the terminology, data consistency, stakeholder communication, and reporting considerations involved in translating environmental, social, governance, and sustainability disclosures for international audiences.",
    linkLabel: "Explore ESG Translation Guidance",
    href: "https://www.stepes.com/resources/translation-guides/esg-sustainability-reporting-translation/",
  },
];

const referenceTools = [
  {
    icon: "languages",
    title: "Languages",
    description:
      "Explore Stepes translation capabilities across more than 100 languages and language variants for major global markets and specialized regional requirements.",
    linkLabel: "Explore Supported Languages",
    href: "https://www.stepes.com/languages/",
  },
  {
    icon: "cost",
    title: "Translation Cost Guide",
    description:
      "Understand the factors that influence pricing, including language pair, content complexity, workflow, review level, file format, turnaround, and recurring-content reuse.",
    linkLabel: "Explore Translation Costs",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    icon: "formats",
    title: "File Format Support",
    description:
      "Learn how documents, presentations, spreadsheets, PDFs, design files, structured content, software resources, and other formats can be prepared for translation.",
    linkLabel: "Explore Supported File Formats",
    href: "https://www.stepes.com/file-formats/",
  },
  {
    icon: "glossary",
    title: "Translation Glossary",
    description:
      "Find clear definitions for commonly used translation, localization, language technology, quality assurance, and multilingual content management terminology.",
    linkLabel: "Explore the Translation Glossary",
    href: "https://www.stepes.com/translation-glossary/",
  },
  {
    icon: "security",
    title: "Security and Compliance",
    description:
      "Learn how Stepes protects customer content through secure workflows, access controls, confidentiality practices, and enterprise data-management processes.",
    linkLabel: "Explore Security at Stepes",
    href: "https://www.stepes.com/security/",
  },
  {
    icon: "quality",
    title: "Translation Quality System",
    description:
      "See how linguist qualification, process controls, terminology management, translation memory, review, QA, and continuous improvement support consistent quality.",
    linkLabel: "Explore the Stepes Quality System",
    href: "https://www.stepes.com/translation-quality-system/",
  },
];

const latestGuides = [
  {
    category: "Translation Process",
    title: "The Professional Translation Process: From Intake to Delivery",
    description:
      "Follow a professional translation project from scoping and file analysis through translation, specialist review, quality assurance, formatting, approval, and final delivery.",
    linkLabel: "Explore the Translation Process",
    href: "https://www.stepes.com/resources/translation-guides/professional-translation-process/",
    featured: true,
  },
  {
    category: "Planning & Cost",
    title: "Translation Cost Guide",
    description:
      "Understand what affects professional translation pricing and how source preparation, reusable language assets, appropriate workflows, and clear requirements can improve cost efficiency.",
    linkLabel: "Explore Translation Costs",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    category: "Quality Management",
    title: "Translation Review, Editing, Proofreading, and QA Explained",
    description:
      "Compare the different forms of translation review and learn how to select an appropriate level of linguistic and technical quality control.",
    linkLabel: "Explore Translation Review",
    href: "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/",
  },
  {
    category: "File Preparation",
    title: "How to Prepare Documents and Files for Translation",
    description:
      "Prepare content, reference materials, layouts, and instructions so translation can begin efficiently and return in a usable final format.",
    linkLabel: "Prepare Your Content",
    href: "https://www.stepes.com/resources/translation-guides/prepare-files-for-translation/",
  },
];

const relatedResourceHubs = [
  {
    title: "Localization Guides",
    description:
      "Adapt websites, software, mobile apps, digital products, multimedia, and user experiences for specific languages, markets, and cultural expectations.",
    linkLabel: "Explore Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  {
    title: "AI Translation Insights",
    description:
      "Explore practical perspectives on AI translation quality, model selection, enterprise security, terminology, human validation, governance, and business value.",
    linkLabel: "Explore AI Translation Insights",
    href: "https://www.stepes.com/ai-translation-insights/",
  },
  {
    title: "Translation Quality & Governance",
    description:
      "Establish quality standards, manage terminology, structure review, measure results, control approvals, and maintain accountability across multilingual content.",
    linkLabel: "Explore Quality & Governance",
    href: "https://www.stepes.com/resources/translation-quality-governance/",
  },
  {
    title: "Global Content Strategy",
    description:
      "Explore operating models, technology decisions, organizational responsibilities, procurement, ROI, and program structures for scaling multilingual content.",
    linkLabel: "Explore Global Content Strategy",
    href: "https://www.stepes.com/resources/global-content-strategy/",
  },
];

const translationFaqs = [
  {
    question: "What is professional translation?",
    answer:
      "Professional translation converts written content from one language into another while preserving its meaning, purpose, terminology, tone, and intended effect. Depending on the content, the process may involve professional linguists, subject-matter specialists, AI translation, translation memory, editing, proofreading, quality assurance, and formatting.",
  },
  {
    question: "What is the difference between translation and localization?",
    answer:
      "Translation focuses primarily on transferring written meaning between languages. Localization goes further by adapting a product, website, software application, multimedia experience, or other content for the linguistic, cultural, technical, and market expectations of a specific audience.",
  },
  {
    question:
      "How do I choose between human translation, AI translation, and MTPE?",
    answer:
      "The right approach depends on the content’s purpose, complexity, visibility, confidentiality, turnaround, and risk. Professional human translation is often appropriate for nuanced, creative, regulated, or high-stakes content. AI translation can support rapid understanding or high-volume workflows, while machine translation post-editing combines automated translation with professional human correction and validation.",
  },
  {
    question: "What should be included in a translation brief?",
    answer:
      "A useful translation brief should identify the target audience, intended use, languages, desired tone, terminology requirements, reference materials, file formats, deadlines, review responsibilities, publishing requirements, and any legal, technical, or regulatory considerations.",
  },
  {
    question: "What file formats can be translated?",
    answer:
      "Most common business, publishing, technical, design, and structured-content formats can be translated. These may include Word documents, PowerPoint presentations, Excel files, PDFs, design files, XML, HTML, software resource files, subtitles, and other specialized formats. Editable source files usually provide the most efficient path to a high-quality final result.",
  },
  {
    question: "What is translation memory?",
    answer:
      "Translation memory is a database of previously translated source and target-language segments. When similar or identical content appears in a future project, the approved translation can be reused or reviewed rather than translated again from the beginning. This helps improve consistency and reduce duplicated work.",
  },
  {
    question: "What is terminology management?",
    answer:
      "Terminology management is the process of identifying, approving, storing, and maintaining preferred translations for product names, technical terms, legal concepts, medical language, brand expressions, and other important vocabulary. A terminology database helps linguists and reviewers use consistent language across content and projects.",
  },
  {
    question: "How is translation quality evaluated?",
    answer:
      "Translation quality can be evaluated through linguistic review, editing, proofreading, terminology checks, automated QA, formatting review, functional testing, and client approval. The appropriate combination depends on the content type and the consequences of an error.",
  },
  {
    question: "How long does professional translation take?",
    answer:
      "Turnaround depends on word count, language combination, content complexity, file format, review requirements, resource availability, and the number of languages. Large multilingual projects can often be completed in parallel, while specialized or regulated content may require additional review and approval time.",
  },
  {
    question: "How much does translation cost?",
    answer:
      "Translation cost is influenced by the amount of content, language pair, subject-matter complexity, workflow, review depth, file preparation, formatting, turnaround, and the availability of reusable translation memory. A clear project brief and editable source files help support more accurate pricing.",
  },
  {
    question:
      "Do legal, medical, or technical documents require specialist translators?",
    answer:
      "Specialized documents generally benefit from linguists who understand the relevant subject matter and terminology. High-risk content may also require an independent editor, in-country reviewer, subject-matter expert, or additional quality controls.",
  },
  {
    question:
      "How can organizations improve translation consistency over time?",
    answer:
      "Organizations can improve consistency by maintaining translation memory, approved terminology, style guides, reference materials, reviewer feedback, and clearly defined workflows. Centralizing these assets allows future projects and teams to build on previously approved language rather than starting over.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="tg-arrow"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="tg-check"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="m5 10.2 3.1 3.1L15.4 6" />
    </svg>
  );
}

function TopicIcon({ name }) {
  const commonProps = {
    "aria-hidden": true,
    className: "tg-topic-icon",
    viewBox: "0 0 24 24",
    fill: "none",
  };

  if (name === "plan") {
    return (
      <svg {...commonProps}>
        <path d="M7 3v3M17 3v3M4.5 9h15" />
        <rect x="4.5" y="5" width="15" height="15" rx="2.5" />
        <path d="m8 14 2.2 2.2L16 11" />
      </svg>
    );
  }

  if (name === "files") {
    return (
      <svg {...commonProps}>
        <path d="M7 3.5h7l4 4V20H7z" />
        <path d="M14 3.5V8h4M10 12h5M10 15.5h5" />
        <path d="M4 7v13h10" />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg {...commonProps}>
        <circle cx="6" cy="6" r="2.25" />
        <circle cx="18" cy="12" r="2.25" />
        <circle cx="6" cy="18" r="2.25" />
        <path d="M8.3 6h2.1c3 0 3.1 6 5.3 6M8.3 18h2.1c3 0 3.1-6 5.3-6" />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.5 19 6v5.3c0 4.2-2.8 7.7-7 9.2-4.2-1.5-7-5-7-9.2V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (name === "specialized") {
    return (
      <svg {...commonProps}>
        <path d="M9 3.5h6M10 3.5v5l-4.6 7.7A2.8 2.8 0 0 0 7.8 20h8.4a2.8 2.8 0 0 0 2.4-3.8L14 8.5v-5" />
        <path d="M8 14h8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.4 5.2 3.4 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.6 8.7 8.6 12s1.2 6.1 3.4 8.5" />
      <path d="m16.8 7.2 2.2.2-.2-2.2" />
    </svg>
  );
}

function ReferenceIcon({ name }) {
  const commonProps = {
    "aria-hidden": true,
    className: "tg-reference-icon",
    viewBox: "0 0 24 24",
    fill: "none",
  };

  if (name === "languages") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.4 5.2 3.4 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.6 8.7 8.6 12s1.2 6.1 3.4 8.5" />
      </svg>
    );
  }

  if (name === "cost") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.5v17M16 7.2c-.9-1-2.2-1.5-3.8-1.5-2.1 0-3.7 1.1-3.7 2.8 0 4.4 7.5 2.2 7.5 6.5 0 1.8-1.7 3.1-4.1 3.1-1.8 0-3.4-.7-4.4-1.9" />
      </svg>
    );
  }

  if (name === "formats") {
    return (
      <svg {...commonProps}>
        <path d="M7 3.5h7l4 4V20H7z" />
        <path d="M14 3.5V8h4M10 12h5M10 15.5h5M4 7v13h10" />
      </svg>
    );
  }

  if (name === "glossary") {
    return (
      <svg {...commonProps}>
        <path d="M5 4.5h9.5A2.5 2.5 0 0 1 17 7v12H7.5A2.5 2.5 0 0 1 5 16.5z" />
        <path d="M7.5 19A2.5 2.5 0 0 1 5 16.5M8.5 8h5M8.5 11.5h5" />
      </svg>
    );
  }

  if (name === "security") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.5 19 6v5.3c0 4.2-2.8 7.7-7 9.2-4.2-1.5-7-5-7-9.2V6z" />
        <path d="M9.2 11.5V10a2.8 2.8 0 1 1 5.6 0v1.5M8.5 11.5h7v5h-7z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3.5 19 6v5.3c0 4.2-2.8 7.7-7 9.2-4.2-1.5-7-5-7-9.2V6z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

export default function TranslationGuidesHub() {
  return (
    <main className="tg-page">
      <style>{`
        .tg-page {
          --tg-ink: #121827;
          --tg-copy: #465168;
          --tg-muted: #6f7a90;
          --tg-border: #e5e9f0;
          --tg-border-strong: #d9dee8;
          --tg-accent: #c11d63;
          --tg-accent-dark: #9f1d55;
          --tg-blush: #fdf2f7;
          --tg-surface: #ffffff;
          --tg-soft: #f7f8fb;
          width: 100%;
          overflow-x: hidden;
          color: var(--tg-ink);
          background: var(--tg-surface);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .tg-page,
        .tg-page * {
          box-sizing: border-box;
        }

        .tg-page h1,
        .tg-page h2,
        .tg-page h3,
        .tg-page p,
        .tg-page a,
        .tg-page summary {
          overflow-wrap: anywhere;
        }

        .tg-page section[id] {
          scroll-margin-top: 24px;
        }

        .tg-shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .tg-eyebrow {
          margin: 0;
          color: var(--tg-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .tg-hero {
          position: relative;
          padding: 104px 0 0;
          background: #ffffff;
        }

        .tg-hero-inner {
          max-width: 930px;
          margin: 0 auto;
          text-align: center;
        }

        .tg-hero h1 {
          max-width: 900px;
          margin: 0 auto;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          text-wrap: balance;
        }

        .tg-hero-copy {
          max-width: 780px;
          margin: 24px auto 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-hero-actions {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .tg-primary-button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid var(--tg-accent);
          border-radius: 999px;
          color: #ffffff;
          background: var(--tg-accent);
          box-shadow: 0 12px 26px rgba(193, 29, 99, 0.17);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
        }

        .tg-primary-button:hover {
          background: var(--tg-accent-dark);
          box-shadow: 0 14px 30px rgba(159, 29, 85, 0.2);
          transform: translateY(-1px);
        }

        .tg-primary-button:focus-visible,
        .tg-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .tg-arrow {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 180ms ease;
        }

        .tg-primary-button:hover .tg-arrow,
        .tg-editorial-link:hover .tg-arrow {
          transform: translateX(3px);
        }

        .tg-proof-band {
          margin-top: 72px;
          border-top: 1px solid var(--tg-border);
          border-bottom: 1px solid var(--tg-border);
          background: rgba(255, 255, 255, 0.9);
        }

        .tg-proof-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .tg-proof-item {
          min-height: 128px;
          padding: 28px 34px;
          text-align: left;
        }

        .tg-proof-item + .tg-proof-item {
          border-left: 1px solid var(--tg-border);
        }

        .tg-proof-title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .tg-proof-description {
          margin: 9px 0 0;
          color: var(--tg-muted);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.55;
        }

        .tg-guidance {
          padding: 96px 0;
          background: #ffffff;
        }

        .tg-guidance-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 92px;
          align-items: start;
        }

        .tg-guidance h2,
        .tg-featured h2 {
          margin: 16px 0 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .tg-guidance-copy {
          max-width: 760px;
          margin: 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-foundation-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 68px;
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-foundation-item {
          padding: 34px 38px 38px 0;
        }

        .tg-foundation-item + .tg-foundation-item {
          padding-left: 38px;
          border-left: 1px solid var(--tg-border);
        }

        .tg-foundation-label {
          margin: 0;
          color: var(--tg-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .tg-foundation-item h3 {
          margin: 13px 0 0;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .tg-foundation-item p:last-child {
          margin: 17px 0 0;
          color: var(--tg-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
        }

        .tg-featured {
          padding: 96px 0;
          background: var(--tg-blush);
        }

        .tg-featured-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(480px, 1.08fr);
          gap: 76px;
          align-items: center;
        }

        .tg-featured-copy {
          max-width: 690px;
        }

        .tg-featured-description {
          margin: 24px 0 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-editorial-link {
          display: inline-flex;
          min-width: 0;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          margin-top: 30px;
          color: var(--tg-accent-dark);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          text-decoration: none;
        }

        .tg-guide-panel {
          overflow: hidden;
          border: 1px solid rgba(159, 29, 85, 0.16);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 48px rgba(77, 28, 52, 0.08);
        }

        .tg-guide-panel-header {
          padding: 28px 32px 24px;
          border-bottom: 1px solid var(--tg-border);
        }

        .tg-guide-panel-kicker {
          margin: 0;
          color: var(--tg-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .tg-guide-panel-title {
          margin: 9px 0 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .tg-guide-list {
          margin: 0;
          padding: 0 32px;
          list-style: none;
        }

        .tg-guide-list li {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          min-height: 68px;
          padding: 17px 0;
          color: var(--tg-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.55;
        }

        .tg-guide-list li + li {
          border-top: 1px solid var(--tg-border);
        }

        .tg-check {
          width: 20px;
          height: 20px;
          stroke: var(--tg-accent-dark);
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }


        .tg-topics,
        .tg-content-types {
          padding: 96px 0;
          background: #ffffff;
        }

        .tg-section-heading-centered {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .tg-section-heading-centered h2,
        .tg-essentials-heading h2,
        .tg-content-heading h2 {
          margin: 16px 0 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .tg-section-intro {
          max-width: 780px;
          margin: 22px auto 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-topic-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-topic-item {
          min-width: 0;
          padding: 34px 34px 36px;
        }

        .tg-topic-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid var(--tg-border);
        }

        .tg-topic-item:nth-child(n + 4) {
          border-top: 1px solid var(--tg-border);
        }

        .tg-topic-icon-wrap {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--tg-accent-dark);
          background: var(--tg-blush);
        }

        .tg-topic-icon {
          width: 23px;
          height: 23px;
          stroke: currentColor;
          stroke-width: 1.65;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .tg-topic-item h3,
        .tg-essential-item h3,
        .tg-content-item h3 {
          margin: 20px 0 0;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .tg-topic-item p,
        .tg-essential-item p,
        .tg-content-item p {
          margin: 15px 0 0;
          color: var(--tg-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.68;
        }

        .tg-topic-item .tg-editorial-link,
        .tg-essential-item .tg-editorial-link,
        .tg-content-item .tg-editorial-link {
          margin-top: 18px;
        }

        .tg-essentials {
          padding: 96px 0;
          background: var(--tg-soft);
        }

        .tg-essentials-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 92px;
          align-items: start;
        }

        .tg-essentials-copy {
          max-width: 760px;
          margin: 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-essentials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-essential-item {
          min-width: 0;
          padding: 32px 34px 36px;
        }

        .tg-essential-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid var(--tg-border);
        }

        .tg-essential-item:nth-child(n + 4) {
          border-top: 1px solid var(--tg-border);
        }

        .tg-essential-item h3 {
          margin-top: 0;
        }

        .tg-content-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          gap: 92px;
          align-items: start;
        }

        .tg-content-heading-copy {
          max-width: 760px;
          margin: 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-content-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-content-item {
          min-width: 0;
          padding: 32px 40px 34px 0;
        }

        .tg-content-item:nth-child(even) {
          padding-right: 0;
          padding-left: 40px;
          border-left: 1px solid var(--tg-border);
        }

        .tg-content-item:nth-child(n + 3) {
          border-top: 1px solid var(--tg-border);
        }

        .tg-content-item h3 {
          margin-top: 0;
        }


        .tg-workflow {
          padding: 96px 0;
          color: #ffffff;
          background: #17151d;
        }

        .tg-workflow .tg-eyebrow {
          color: #f0a3c5;
        }

        .tg-workflow-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 92px;
          align-items: start;
        }

        .tg-workflow-heading h2,
        .tg-specialized-heading h2,
        .tg-reference-heading h2 {
          margin: 16px 0 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .tg-workflow-intro {
          max-width: 760px;
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          border-left: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tg-workflow-step {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          column-gap: 14px;
          align-content: start;
          min-width: 0;
          min-height: 226px;
          padding: 30px 28px 32px;
          border-right: 1px solid rgba(255, 255, 255, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tg-workflow-number {
          margin: 4px 0 0;
          color: #f0a3c5;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.12em;
        }

        .tg-workflow-step h3 {
          margin: 0;
          color: #ffffff;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.012em;
        }

        .tg-workflow-step p:last-child {
          grid-column: 1 / -1;
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .tg-risk-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 72px;
          margin-top: 58px;
          padding-top: 42px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
        }

        .tg-risk-panel h3 {
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .tg-risk-copy {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-capability-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 28px;
          margin-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .tg-dark-link {
          display: inline-flex;
          min-width: 0;
          min-height: 50px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          text-decoration: none;
        }

        .tg-dark-link:hover {
          color: #f0a3c5;
        }

        .tg-dark-link:focus-visible {
          outline: 3px solid rgba(240, 163, 197, 0.28);
          outline-offset: 4px;
        }

        .tg-specialized {
          padding: 96px 0;
          background: #ffffff;
        }

        .tg-specialized-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 92px;
          align-items: start;
        }

        .tg-specialized-heading {
          position: sticky;
          top: 32px;
        }

        .tg-specialized-intro {
          margin: 22px 0 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-specialized-list {
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-specialized-item {
          display: grid;
          grid-template-columns: minmax(210px, 0.78fr) minmax(0, 1.22fr);
          gap: 38px;
          padding: 30px 0 32px;
          align-items: start;
        }

        .tg-specialized-item + .tg-specialized-item {
          border-top: 1px solid var(--tg-border);
        }

        .tg-specialized-item h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.012em;
        }

        .tg-specialized-item p {
          margin: 0;
          color: var(--tg-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.68;
        }

        .tg-specialized-item .tg-editorial-link {
          margin-top: 16px;
        }

        .tg-reference {
          padding: 96px 0;
          background: var(--tg-soft);
        }

        .tg-reference-heading {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .tg-reference-intro {
          max-width: 760px;
          margin: 22px auto 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-reference-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 56px;
          border-top: 1px solid var(--tg-border-strong);
          border-left: 1px solid var(--tg-border-strong);
        }

        .tg-reference-item {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 18px;
          min-width: 0;
          padding: 30px 28px 32px;
          border-right: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
          align-content: start;
        }

        .tg-reference-icon-wrap {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--tg-accent-dark);
          background: var(--tg-blush);
        }

        .tg-reference-icon {
          width: 22px;
          height: 22px;
          stroke: currentColor;
          stroke-width: 1.65;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .tg-reference-item h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.012em;
        }

        .tg-reference-item p {
          margin: 12px 0 0;
          color: var(--tg-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .tg-reference-item .tg-editorial-link {
          margin-top: 14px;
          font-size: 15px;
        }


        .tg-latest {
          padding: 96px 0;
          background: #ffffff;
        }

        .tg-latest-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 92px;
          align-items: start;
        }

        .tg-latest-heading h2,
        .tg-related-heading h2,
        .tg-faq-heading h2,
        .tg-final-cta h2 {
          margin: 16px 0 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .tg-latest-intro {
          max-width: 760px;
          margin: 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-latest-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
          gap: 64px;
          margin-top: 58px;
          align-items: start;
        }

        .tg-latest-feature {
          padding: 42px 44px 44px;
          border: 1px solid rgba(159, 29, 85, 0.14);
          border-radius: 28px;
          background: var(--tg-blush);
        }

        .tg-resource-category {
          margin: 0;
          color: var(--tg-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .tg-latest-feature h3 {
          max-width: 620px;
          margin: 18px 0 0;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.22;
          letter-spacing: -0.02em;
        }

        .tg-latest-feature p:not(.tg-resource-category) {
          margin: 20px 0 0;
          color: var(--tg-copy);
          font-size: 17px;
          font-weight: 400;
          line-height: 1.7;
        }

        .tg-latest-list {
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-latest-item {
          padding: 27px 0 29px;
        }

        .tg-latest-item + .tg-latest-item {
          border-top: 1px solid var(--tg-border);
        }

        .tg-latest-item h3 {
          margin: 10px 0 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.012em;
        }

        .tg-latest-item p:not(.tg-resource-category) {
          margin: 12px 0 0;
          color: var(--tg-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .tg-latest-item .tg-editorial-link {
          margin-top: 14px;
          font-size: 15px;
        }

        .tg-latest-footer-link {
          display: flex;
          justify-content: flex-end;
          margin-top: 30px;
        }

        .tg-latest-footer-link .tg-editorial-link {
          margin-top: 0;
        }

        .tg-related {
          padding: 96px 0;
          background: var(--tg-soft);
        }

        .tg-related-heading {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .tg-related-intro {
          max-width: 780px;
          margin: 22px auto 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-related-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 56px;
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-related-item {
          min-width: 0;
          padding: 32px 30px 34px;
        }

        .tg-related-item + .tg-related-item {
          border-left: 1px solid var(--tg-border);
        }

        .tg-related-item h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.012em;
        }

        .tg-related-item p {
          margin: 15px 0 0;
          color: var(--tg-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .tg-related-item .tg-editorial-link {
          margin-top: 18px;
          font-size: 15px;
        }

        .tg-faq {
          padding: 96px 0;
          background: #ffffff;
        }

        .tg-faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
          gap: 92px;
          align-items: start;
        }

        .tg-faq-heading {
          position: sticky;
          top: 32px;
        }

        .tg-faq-intro {
          margin: 22px 0 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-faq-list {
          border-top: 1px solid var(--tg-border-strong);
          border-bottom: 1px solid var(--tg-border-strong);
        }

        .tg-faq-item + .tg-faq-item {
          border-top: 1px solid var(--tg-border);
        }

        .tg-faq-item summary {
          position: relative;
          display: block;
          min-height: 70px;
          padding: 23px 56px 23px 0;
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          list-style: none;
        }

        .tg-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .tg-faq-item summary::after {
          content: "+";
          position: absolute;
          top: 50%;
          right: 2px;
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          transform: translateY(-50%);
          border: 1px solid var(--tg-border-strong);
          border-radius: 50%;
          color: var(--tg-accent-dark);
          font-size: 22px;
          font-weight: 400;
          line-height: 1;
          transition: transform 180ms ease, border-color 180ms ease;
        }

        .tg-faq-item[open] summary::after {
          transform: translateY(-50%) rotate(45deg);
          border-color: rgba(159, 29, 85, 0.3);
        }

        .tg-faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .tg-faq-answer {
          max-width: 840px;
          margin: 0;
          padding: 0 56px 24px 0;
          color: var(--tg-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-final-cta {
          padding: 0 0 96px;
          background: #ffffff;
        }

        .tg-final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 64px;
          align-items: center;
          padding: 60px 64px;
          border: 1px solid rgba(159, 29, 85, 0.14);
          border-radius: 30px;
          background: var(--tg-blush);
        }

        .tg-final-cta-copy {
          max-width: 760px;
        }

        .tg-final-cta h2 {
          margin-top: 0;
        }

        .tg-final-cta-description {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--tg-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .tg-final-cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 246px;
        }

        .tg-secondary-button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid rgba(18, 24, 39, 0.16);
          border-radius: 999px;
          color: var(--tg-ink);
          background: rgba(255, 255, 255, 0.84);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          text-align: center;
          text-decoration: none;
          transition: transform 180ms ease, border-color 180ms ease, background-color 180ms ease;
        }

        .tg-secondary-button:hover {
          border-color: rgba(159, 29, 85, 0.32);
          background: #ffffff;
          transform: translateY(-1px);
        }

        .tg-secondary-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        @media (max-width: 1199px) {
          .tg-shell {
            padding-inline: 40px;
          }

          .tg-guidance-intro {
            gap: 64px;
          }

          .tg-featured-grid {
            grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
            gap: 52px;
          }

          .tg-foundation-item,
          .tg-foundation-item + .tg-foundation-item {
            padding-right: 28px;
            padding-left: 28px;
          }

          .tg-foundation-item:first-child {
            padding-left: 0;
          }
        }

        @media (max-width: 900px) {
          .tg-shell {
            padding-inline: 24px;
          }

          .tg-hero {
            padding-top: 92px;
          }

          .tg-hero h1 {
            max-width: 780px;
            font-size: 42px;
          }

          .tg-proof-grid {
            grid-template-columns: 1fr;
          }

          .tg-proof-item {
            min-height: auto;
            padding: 24px 0;
          }

          .tg-proof-item + .tg-proof-item {
            border-top: 1px solid var(--tg-border);
            border-left: 0;
          }

          .tg-guidance,
          .tg-featured {
            padding: 80px 0;
          }

          .tg-guidance-intro,
          .tg-featured-grid {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .tg-guidance h2,
          .tg-featured h2 {
            font-size: 32px;
          }

          .tg-foundation-grid {
            grid-template-columns: 1fr;
            margin-top: 52px;
          }

          .tg-foundation-item,
          .tg-foundation-item + .tg-foundation-item,
          .tg-foundation-item:first-child {
            padding: 30px 0;
            border-left: 0;
          }

          .tg-foundation-item + .tg-foundation-item {
            border-top: 1px solid var(--tg-border);
          }

          .tg-featured-copy {
            max-width: 760px;
          }

          .tg-guide-panel {
            max-width: 760px;
          }

          .tg-topics,
          .tg-essentials,
          .tg-content-types,
          .tg-workflow,
          .tg-specialized,
          .tg-reference {
            padding: 80px 0;
          }

          .tg-section-heading-centered h2,
          .tg-essentials-heading h2,
          .tg-content-heading h2,
          .tg-workflow-heading h2,
          .tg-specialized-heading h2,
          .tg-reference-heading h2 {
            font-size: 32px;
          }

          .tg-topic-grid,
          .tg-essentials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tg-topic-item,
          .tg-essential-item {
            border-left: 0;
            border-top: 0;
          }

          .tg-topic-item:nth-child(even),
          .tg-essential-item:nth-child(even) {
            border-left: 1px solid var(--tg-border);
          }

          .tg-topic-item:nth-child(n + 3),
          .tg-essential-item:nth-child(n + 3) {
            border-top: 1px solid var(--tg-border);
          }

          .tg-essentials-heading,
          .tg-content-heading {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .tg-essential-item,
          .tg-content-item,
          .tg-content-item:nth-child(even) {
            padding: 30px 28px 32px;
          }

          .tg-workflow-heading,
          .tg-risk-panel,
          .tg-specialized-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .tg-workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tg-workflow-step {
            min-height: 0;
          }

          .tg-specialized-heading {
            position: static;
          }

          .tg-specialized-item {
            grid-template-columns: minmax(190px, 0.74fr) minmax(0, 1.26fr);
            gap: 30px;
          }

          .tg-reference-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }


          .tg-latest,
          .tg-related,
          .tg-faq {
            padding: 80px 0;
          }

          .tg-latest-heading,
          .tg-latest-layout,
          .tg-faq-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .tg-latest-heading h2,
          .tg-related-heading h2,
          .tg-faq-heading h2,
          .tg-final-cta h2 {
            font-size: 32px;
          }

          .tg-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tg-related-item:nth-child(3) {
            border-left: 0;
          }

          .tg-related-item:nth-child(n + 3) {
            border-top: 1px solid rgba(159, 29, 85, 0.16);
          }

          .tg-faq-heading {
            position: static;
          }

          .tg-final-cta {
            padding-bottom: 80px;
          }

          .tg-final-cta-panel {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 52px 48px;
          }

          .tg-final-cta-actions {
            flex-direction: row;
            min-width: 0;
          }

        }

        @media (max-width: 600px) {
          .tg-shell {
            padding-inline: 20px;
          }

          .tg-hero {
            padding-top: 72px;
          }

          .tg-hero h1 {
            margin-top: 0;
            font-size: 38px;
            line-height: 1.1;
            letter-spacing: -0.03em;
          }

          .tg-hero-copy,
          .tg-guidance-copy,
          .tg-featured-description {
            font-size: 18px;
            line-height: 1.65;
          }

          .tg-hero-actions {
            margin-top: 28px;
          }

          .tg-primary-button,
          .tg-secondary-button {
            width: 100%;
            min-height: 52px;
            padding-inline: 18px;
            white-space: normal;
          }

          .tg-proof-band {
            margin-top: 56px;
          }

          .tg-guidance,
          .tg-featured {
            padding: 68px 0;
          }

          .tg-guidance h2,
          .tg-featured h2 {
            font-size: 30px;
          }

          .tg-foundation-grid {
            margin-top: 42px;
          }

          .tg-foundation-item h3 {
            font-size: 20px;
          }

          .tg-featured-grid {
            gap: 40px;
          }

          .tg-guide-panel {
            border-radius: 22px;
          }

          .tg-guide-panel-header {
            padding: 24px 22px 20px;
          }

          .tg-guide-list {
            padding: 0 22px;
          }

          .tg-guide-list li {
            grid-template-columns: 22px minmax(0, 1fr);
            gap: 12px;
            min-height: 0;
            padding: 17px 0;
          }

          .tg-editorial-link {
            width: 100%;
            justify-content: flex-start;
            padding-block: 4px;
          }

          .tg-editorial-link .tg-arrow,
          .tg-dark-link .tg-arrow {
            flex: 0 0 auto;
          }

          .tg-topics,
          .tg-essentials,
          .tg-content-types,
          .tg-workflow,
          .tg-specialized,
          .tg-reference {
            padding: 68px 0;
          }

          .tg-section-heading-centered {
            text-align: left;
          }

          .tg-section-heading-centered h2,
          .tg-essentials-heading h2,
          .tg-content-heading h2,
          .tg-workflow-heading h2,
          .tg-specialized-heading h2,
          .tg-reference-heading h2 {
            font-size: 30px;
          }

          .tg-section-intro {
            margin-top: 20px;
          }

          .tg-topic-grid,
          .tg-essentials-grid,
          .tg-content-grid,
          .tg-workflow-grid,
          .tg-reference-grid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .tg-topic-item,
          .tg-essential-item,
          .tg-content-item,
          .tg-content-item:nth-child(even) {
            padding: 28px 0 30px;
            border-right: 0;
            border-left: 0;
          }

          .tg-topic-grid,
          .tg-essentials-grid,
          .tg-workflow-grid,
          .tg-reference-grid {
            border-left: 0;
          }

          .tg-topic-item,
          .tg-essential-item,
          .tg-topic-item:nth-child(even),
          .tg-essential-item:nth-child(even),
          .tg-topic-item:nth-child(n + 3),
          .tg-essential-item:nth-child(n + 3) {
            border-left: 0;
            border-top: 0;
            border-bottom: 0;
          }

          .tg-topic-item + .tg-topic-item,
          .tg-essential-item + .tg-essential-item,
          .tg-content-item + .tg-content-item,
          .tg-content-item:nth-child(n + 3) {
            border-top: 1px solid var(--tg-border);
          }

          .tg-topic-grid,
          .tg-essentials-grid,
          .tg-content-grid,
          .tg-reference-grid {
            border-bottom: 1px solid var(--tg-border-strong);
          }

          .tg-workflow-grid {
            border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          }

          .tg-topic-item h3,
          .tg-essential-item h3,
          .tg-content-item h3 {
            font-size: 20px;
          }

          .tg-topic-item .tg-editorial-link,
          .tg-essential-item .tg-editorial-link,
          .tg-content-item .tg-editorial-link {
            width: 100%;
          }

          .tg-workflow-step {
            padding: 28px 0 30px;
            border-right: 0;
            border-bottom: 0;
          }

          .tg-workflow-step + .tg-workflow-step {
            border-top: 1px solid rgba(255, 255, 255, 0.18);
          }

          .tg-risk-panel {
            margin-top: 48px;
            padding-top: 34px;
          }

          .tg-capability-links {
            grid-template-columns: 1fr;
          }

          .tg-specialized-item {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 28px 0 30px;
          }

          .tg-specialized-item h3 {
            font-size: 20px;
          }

          .tg-reference-heading {
            text-align: left;
          }

          .tg-reference-item {
            padding: 28px 0 30px;
            border-right: 0;
            border-bottom: 0;
          }

          .tg-reference-item + .tg-reference-item {
            border-top: 1px solid var(--tg-border);
          }

          .tg-reference-item .tg-editorial-link {
            width: 100%;
          }


          .tg-latest,
          .tg-related,
          .tg-faq {
            padding: 68px 0;
          }

          .tg-latest-heading h2,
          .tg-related-heading h2,
          .tg-faq-heading h2,
          .tg-final-cta h2 {
            font-size: 30px;
          }

          .tg-latest-layout {
            margin-top: 42px;
            gap: 36px;
          }

          .tg-latest-feature {
            padding: 30px 24px 32px;
            border-radius: 22px;
          }

          .tg-latest-feature h3 {
            font-size: 24px;
          }

          .tg-latest-footer-link {
            justify-content: flex-start;
          }

          .tg-related-heading {
            text-align: left;
          }

          .tg-related-grid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .tg-related-item,
          .tg-related-item + .tg-related-item {
            padding: 27px 0 29px;
            border-left: 0;
          }

          .tg-related-item + .tg-related-item,
          .tg-related-item:nth-child(n + 3) {
            border-top: 1px solid var(--tg-border);
          }

          .tg-faq-item summary {
            padding-right: 48px;
            font-size: 17px;
          }

          .tg-faq-answer {
            padding-right: 0;
          }

          .tg-final-cta {
            padding-bottom: 68px;
          }

          .tg-final-cta-panel {
            gap: 32px;
            padding: 42px 24px;
            border-radius: 24px;
          }

          .tg-final-cta-actions {
            width: 100%;
            flex-direction: column;
          }

          .tg-final-cta-actions .tg-primary-button,
          .tg-final-cta-actions .tg-secondary-button {
            width: 100%;
          }

        }

        @media (max-width: 390px) {
          .tg-proof-item {
            padding-block: 22px;
          }

          .tg-guide-panel-header {
            padding-inline: 20px;
          }

          .tg-guide-list {
            padding-inline: 20px;
          }

          .tg-reference-item {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .tg-reference-icon-wrap {
            width: 40px;
            height: 40px;
            border-radius: 13px;
          }

          .tg-latest-feature {
            padding: 28px 20px 30px;
          }

          .tg-faq-item summary {
            padding-right: 46px;
          }

          .tg-final-cta-panel {
            padding: 38px 20px;
          }
        }

        @media (max-width: 340px) {
          .tg-guide-list {
            padding-inline: 18px;
          }

          .tg-guide-panel-header {
            padding-inline: 18px;
          }

          .tg-primary-button,
          .tg-secondary-button {
            padding-inline: 16px;
            font-size: 14px;
          }

          .tg-final-cta-panel {
            padding-inline: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tg-primary-button,
          .tg-secondary-button,
          .tg-faq-item summary::after,
          .tg-arrow {
            transition: none;
          }
        }
      `}</style>

      <section className="tg-hero" aria-labelledby="translation-guides-title">
        <div className="tg-shell">
          <div className="tg-hero-inner">
            <h1 id="translation-guides-title">
              Translation Guides for Global Business
            </h1>
            <p className="tg-hero-copy">
              Make better decisions at every stage of the translation process.
              Explore practical guidance for planning projects, preparing files,
              selecting the right AI and human workflow, managing terminology
              and quality, and delivering multilingual content across business,
              technical, legal, medical, financial, and regulated environments.
            </p>
            <div className="tg-hero-actions">
              <a
                className="tg-primary-button"
                href="https://www.stepes.com/resources/translation-guides/#translation-guidance"
              >
                Explore Translation Guides
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div
            className="tg-proof-band"
            aria-label="Translation guide highlights"
          >
            <div className="tg-proof-grid">
              {proofItems.map((item) => (
                <div className="tg-proof-item" key={item.title}>
                  <p className="tg-proof-title">{item.title}</p>
                  <p className="tg-proof-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="tg-guidance"
        id="translation-guidance"
        aria-labelledby="translation-guidance-title"
      >
        <div className="tg-shell">
          <div className="tg-guidance-intro">
            <div>
              <p className="tg-eyebrow">From Brief to Delivery</p>
              <h2 id="translation-guidance-title">
                Make Every Stage of Translation Work Better
              </h2>
            </div>
            <p className="tg-guidance-copy">
              Successful translation begins long before the first sentence is
              translated. The quality of the final content depends on how
              clearly the project is scoped, how well the source files are
              prepared, which translation workflow is selected, and how
              terminology, review, formatting, and approval are managed. The
              Stepes Translation Guides help global teams build accurate,
              efficient processes that are ready to scale—from project intake
              through final delivery.
            </p>
          </div>

          <div className="tg-foundation-grid">
            {foundationItems.map((item) => (
              <article className="tg-foundation-item" key={item.label}>
                <p className="tg-foundation-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tg-featured" aria-labelledby="featured-guide-title">
        <div className="tg-shell">
          <div className="tg-featured-grid">
            <div className="tg-featured-copy">
              <p className="tg-eyebrow">Featured Guide</p>
              <h2 id="featured-guide-title">
                AI + Human Translation Workflows for Enterprise Teams
              </h2>
              <p className="tg-featured-description">
                Modern translation does not require businesses to choose between
                AI speed and professional human expertise. The strongest
                enterprise workflows combine translation technology, reusable
                language assets, qualified linguists, structured review, and
                quality assurance according to the purpose and risk of the
                content.
              </p>
              <p className="tg-featured-description">
                See how translation memory, terminology management, AI
                translation, human review, quality controls, and continuous
                feedback work together across an enterprise translation process.
              </p>
              <a
                className="tg-editorial-link"
                href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"
              >
                Read the Featured Guide
                <ArrowIcon />
              </a>
            </div>

            <aside
              className="tg-guide-panel"
              aria-label="Featured guide topics"
            >
              <div className="tg-guide-panel-header">
                <p className="tg-guide-panel-kicker">Inside the Guide</p>
                <p className="tg-guide-panel-title">
                  Build a workflow around content risk and purpose
                </p>
              </div>
              <ul className="tg-guide-list">
                {guideTopics.map((topic) => (
                  <li key={topic}>
                    <CheckIcon />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="tg-topics"
        id="translation-topics"
        aria-labelledby="translation-topics-title"
      >
        <div className="tg-shell">
          <div className="tg-section-heading-centered">
            <p className="tg-eyebrow">Explore Translation Topics</p>
            <h2 id="translation-topics-title">
              Find Guidance for Every Stage of the Translation Process
            </h2>
            <p className="tg-section-intro">
              Translation requirements vary by content, audience, industry,
              language, and business objective. Explore practical guidance for
              the planning, workflow, quality, specialization, and scale
              decisions your team needs to make.
            </p>
          </div>

          <div className="tg-topic-grid">
            {translationTopics.map((topic) => (
              <article className="tg-topic-item" key={topic.title}>
                <span className="tg-topic-icon-wrap">
                  <TopicIcon name={topic.icon} />
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <a className="tg-editorial-link" href={topic.href}>
                  {topic.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tg-essentials"
        id="translation-essentials"
        aria-labelledby="translation-essentials-title"
      >
        <div className="tg-shell">
          <div className="tg-essentials-heading">
            <div>
              <p className="tg-eyebrow">Translation Essentials</p>
              <h2 id="translation-essentials-title">
                Build a Strong Foundation for Every Translation Project
              </h2>
            </div>
            <p className="tg-essentials-copy">
              These foundational guides explain the processes, tools, and
              decisions behind accurate professional translation. They are
              designed for localization teams, content owners, project managers,
              legal and regulatory teams, product organizations, procurement
              professionals, and anyone responsible for multilingual content.
            </p>
          </div>

          <div className="tg-essentials-grid">
            {essentialGuides.map((guide) => (
              <article className="tg-essential-item" key={guide.title}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <a className="tg-editorial-link" href={guide.href}>
                  {guide.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tg-content-types"
        id="translation-content-types"
        aria-labelledby="translation-content-types-title"
      >
        <div className="tg-shell">
          <div className="tg-content-heading">
            <div>
              <p className="tg-eyebrow">Translation by Content Type</p>
              <h2 id="translation-content-types-title">
                Translate Every Type of Business Content With the Right Approach
              </h2>
            </div>
            <p className="tg-content-heading-copy">
              Different content types serve different audiences and carry
              different levels of business, technical, legal, or regulatory
              risk. The right translation workflow should reflect how the
              content will be used, reviewed, published, and maintained.
            </p>
          </div>

          <div className="tg-content-grid">
            {contentTypes.map((item) => (
              <article className="tg-content-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="tg-editorial-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tg-workflow"
        id="enterprise-translation-workflow"
        aria-labelledby="enterprise-translation-workflow-title"
      >
        <div className="tg-shell">
          <div className="tg-workflow-heading">
            <div>
              <p className="tg-eyebrow">Enterprise Translation Workflow</p>
              <h2 id="enterprise-translation-workflow-title">
                A Connected Process for Quality, Speed, and Control
              </h2>
            </div>
            <p className="tg-workflow-intro">
              Professional translation is most effective when each stage
              supports the next. Stepes brings content analysis, language
              technology, professional linguists, quality assurance, and project
              oversight into a connected workflow that can be adapted to the
              purpose and risk of each project.
            </p>
          </div>

          <div className="tg-workflow-grid">
            {workflowSteps.map((step, index) => (
              <article className="tg-workflow-step" key={step.title}>
                <p className="tg-workflow-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <div className="tg-risk-panel">
            <h3>The Right Workflow for the Right Risk</h3>
            <div>
              <p className="tg-risk-copy">
                A general internal communication does not require the same
                controls as an informed consent form, financial disclosure,
                legal agreement, or medical device instruction. Stepes helps
                organizations match translation technology, linguist expertise,
                review depth, and QA requirements to the real business impact of
                the content.
              </p>
              <div
                className="tg-capability-links"
                aria-label="Related translation capabilities"
              >
                {workflowCapabilities.map((capability) => (
                  <a
                    className="tg-dark-link"
                    href={capability.href}
                    key={capability.label}
                  >
                    {capability.label}
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="tg-specialized"
        id="specialized-translation-guidance"
        aria-labelledby="specialized-translation-guidance-title"
      >
        <div className="tg-shell">
          <div className="tg-specialized-layout">
            <div className="tg-specialized-heading">
              <p className="tg-eyebrow">Specialized Translation Guidance</p>
              <h2 id="specialized-translation-guidance-title">
                Translate High-Stakes Content With Greater Confidence
              </h2>
              <p className="tg-specialized-intro">
                High-stakes documents often contain defined terminology,
                technical concepts, legal obligations, safety information,
                financial data, or regulatory requirements. Explore the
                additional planning, expertise, review, and quality controls
                that specialized translation may require.
              </p>
            </div>

            <div className="tg-specialized-list">
              {specializedGuides.map((guide) => (
                <article className="tg-specialized-item" key={guide.title}>
                  <h3>{guide.title}</h3>
                  <div>
                    <p>{guide.description}</p>
                    <a className="tg-editorial-link" href={guide.href}>
                      {guide.linkLabel}
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="tg-reference"
        id="translation-tools-reference"
        aria-labelledby="translation-tools-reference-title"
      >
        <div className="tg-shell">
          <div className="tg-reference-heading">
            <p className="tg-eyebrow">Tools &amp; Reference</p>
            <h2 id="translation-tools-reference-title">
              Plan Translation Projects With Greater Clarity
            </h2>
            <p className="tg-reference-intro">
              Use practical Stepes resources to evaluate languages, file
              formats, cost factors, quality requirements, terminology, and
              security before beginning a translation project.
            </p>
          </div>

          <div className="tg-reference-grid">
            {referenceTools.map((tool) => (
              <article className="tg-reference-item" key={tool.title}>
                <span className="tg-reference-icon-wrap">
                  <ReferenceIcon name={tool.icon} />
                </span>
                <div>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <a className="tg-editorial-link" href={tool.href}>
                    {tool.linkLabel}
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tg-latest"
        id="latest-translation-guides"
        aria-labelledby="latest-translation-guides-title"
      >
        <div className="tg-shell">
          <div className="tg-latest-heading">
            <div>
              <h2 id="latest-translation-guides-title">
                Continue Learning With Practical Translation Guidance
              </h2>
            </div>
            <p className="tg-latest-intro">
              Explore foundational resources covering translation workflows,
              project planning, quality, technology, cost, and multilingual
              content delivery.
            </p>
          </div>

          <div className="tg-latest-layout">
            <article className="tg-latest-feature">
              <p className="tg-resource-category">{latestGuides[0].category}</p>
              <h3>{latestGuides[0].title}</h3>
              <p>{latestGuides[0].description}</p>
              <a className="tg-editorial-link" href={latestGuides[0].href}>
                {latestGuides[0].linkLabel}
                <ArrowIcon />
              </a>
            </article>

            <div className="tg-latest-list">
              {latestGuides.slice(1).map((guide) => (
                <article className="tg-latest-item" key={guide.title}>
                  <p className="tg-resource-category">{guide.category}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <a className="tg-editorial-link" href={guide.href}>
                    {guide.linkLabel}
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="tg-latest-footer-link">
            <a
              className="tg-editorial-link"
              href="https://www.stepes.com/resources/translation-guides/#translation-topics"
            >
              Explore All Translation Topics
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="tg-related"
        aria-labelledby="related-resource-hubs-title"
      >
        <div className="tg-shell">
          <div className="tg-related-heading">
            <h2 id="related-resource-hubs-title">
              Connect Translation With the Wider Global Content Lifecycle
            </h2>
            <p className="tg-related-intro">
              Translation is one part of a broader global content strategy.
              Explore related Stepes resource hubs for deeper guidance on
              localization, AI, quality governance, and enterprise content
              operations.
            </p>
          </div>

          <div className="tg-related-grid">
            {relatedResourceHubs.map((hub) => (
              <article className="tg-related-item" key={hub.title}>
                <h3>{hub.title}</h3>
                <p>{hub.description}</p>
                <a className="tg-editorial-link" href={hub.href}>
                  {hub.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="tg-faq"
        id="translation-guide-faqs"
        aria-labelledby="translation-guide-faqs-title"
      >
        <div className="tg-shell">
          <div className="tg-faq-layout">
            <div className="tg-faq-heading">
              <h2 id="translation-guide-faqs-title">
                Frequently Asked Questions About Professional Translation
              </h2>
              <p className="tg-faq-intro">
                Find clear answers to common questions about translation
                methods, file preparation, quality, language assets, timing,
                cost, and specialized content.
              </p>
            </div>

            <div className="tg-faq-list">
              {translationFaqs.map((faq, index) => (
                <details
                  className="tg-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>{faq.question}</summary>
                  <p className="tg-faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="tg-final-cta"
        aria-labelledby="translation-guides-cta-title"
      >
        <div className="tg-shell">
          <div className="tg-final-cta-panel">
            <div className="tg-final-cta-copy">
              <h2 id="translation-guides-cta-title">
                Build a Better Translation Workflow
              </h2>
              <p className="tg-final-cta-description">
                Give every multilingual project the right combination of
                technology, professional linguistic expertise, terminology
                control, human review, and quality assurance. From a single
                high-priority document to an enterprise program across teams and
                markets, Stepes can help you support accuracy, speed,
                consistency, and long-term content reuse.
              </p>
            </div>

            <div className="tg-final-cta-actions">
              <a
                className="tg-primary-button"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to a Translation Expert
                <ArrowIcon />
              </a>
              <a
                className="tg-secondary-button"
                href="https://www.stepes.com/professional-translation-services/"
              >
                Explore Professional Translation Services
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
