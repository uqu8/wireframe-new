import React, { useEffect } from "react";

export const LEGAL_TEAMS_SEO = {
  title: "Legal Translation Solutions for Corporate Legal Teams | Stepes",
  description:
    "Support contracts, compliance, governance, investigations, and cross-border legal workflows with secure technology, legal linguists, and expert human review.",
  canonical:
    "https://www.stepes.com/corporate-legal-translation-services/",
};

const proofPoints = [
  {
    title: "100+ Languages",
    description:
      "Coordinate corporate legal content across global markets and regional language variants.",
    href: "https://www.stepes.com/translation-languages/",
  },
  {
    title: "ISO-Certified Quality",
    description:
      "ISO 17100 and ISO 9001-certified processes support consistent quality and professional review.",
    href: "https://www.stepes.com/iso-certifications/",
  },
  {
    title: "Secure Enterprise Workflows",
    description:
      "Controlled access and confidential handling for sensitive legal content.",
    href: "https://www.stepes.com/security-compliance/",
  },
  {
    title: "Legal-Linguistic Expertise",
    description:
      "Legal linguists selected for the subject matter, document type, and intended use.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "AI-Powered, Human-Verified",
    description:
      "DomainAI, terminology control, and translation memory combined with expert human review.",
    href: "https://www.stepes.com/ai-enabled-legal-translation-services/",
  },
];

const challenges = [
  {
    number: "01",
    title: "Sensitive and Privileged Content",
    description:
      "Protect confidential legal, employee, transaction, investigation, and personal information throughout the workflow.",
  },
  {
    number: "02",
    title: "Fixed Filing and Transaction Deadlines",
    description:
      "Scale multilingual production around immovable due dates while preserving review discipline and delivery control.",
  },
  {
    number: "03",
    title: "Defined Terms That Must Remain Consistent",
    description:
      "Maintain approved terminology across contracts, policies, related documents, versions, and target languages.",
  },
  {
    number: "04",
    title: "Multiple Reviewers and Approval Stakeholders",
    description:
      "Coordinate in-house counsel, business teams, compliance reviewers, and outside counsel through a clear review process.",
  },
  {
    number: "05",
    title: "Related Documents and Repeated Clauses",
    description:
      "Reuse approved language through translation memory and terminology governance to improve consistency and reduce unnecessary rework.",
  },
  {
    number: "06",
    title: "Different Legal Systems and Jurisdictions",
    description:
      "Match legal linguists to the document purpose, subject matter, target market, and jurisdictional context.",
  },
  {
    number: "07",
    title: "High-Volume Multilingual Matters",
    description:
      "Centralize large document sets and multilingual programs through scalable translation, review, and quality workflows.",
  },
  {
    number: "08",
    title: "Limited Visibility Across External Vendors",
    description:
      "Improve oversight of scope, status, reviewers, terminology, deadlines, and delivery across multilingual legal work.",
  },
];


const legalWorkflows = [
  {
    title: "Contracts and Commercial Agreements",
    description:
      "Translate customer agreements, supplier contracts, licensing arrangements, distribution agreements, NDAs, employment contracts, and other commercial documents while maintaining defined terms, recurring clauses, and approved legal terminology.",
    linkLabel: "Explore Contract Translation Services",
    href: "https://www.stepes.com/contract-translation-services/",
  },
  {
    title: "Corporate Governance and Entity Management",
    description:
      "Support bylaws, board and shareholder materials, corporate resolutions, entity records, governance policies, and other documents used to manage legal entities across jurisdictions.",
  },
  {
    title: "Compliance and Ethics",
    description:
      "Translate codes of conduct, anti-bribery policies, whistleblower materials, audit documentation, internal controls, regulatory correspondence, and compliance communications for global employees and business partners.",
    linkLabel: "Explore Compliance Translation Services",
    href: "https://www.stepes.com/compliance-translation-services/",
  },
  {
    title: "Mergers, Acquisitions, and Due Diligence",
    description:
      "Coordinate multilingual due-diligence materials, transaction agreements, disclosure schedules, corporate records, financial documentation, closing materials, and post-transaction policies under demanding deal timelines.",
  },
  {
    title: "Litigation, Arbitration, and Investigations",
    description:
      "Support pleadings, discovery files, deposition transcripts, evidence, exhibits, expert reports, arbitration materials, investigation documents, and other case-related content across languages and jurisdictions.",
    linkLabel: "Explore Litigation Translation Services",
    href: "https://www.stepes.com/litigation-translation-services/",
  },
  {
    title: "Employment and Workplace Legal Matters",
    description:
      "Translate employment agreements, workplace policies, employee handbooks, investigation materials, disciplinary notices, severance documents, and other legal content supporting global workforces.",
  },
  {
    title: "Privacy and Data Protection",
    description:
      "Support privacy notices, data-processing agreements, consent documentation, retention policies, incident-response communications, and other materials related to data governance and cross-border privacy obligations.",
  },
  {
    title: "Intellectual Property",
    description:
      "Translate patent documentation, licensing agreements, trademark materials, technology-transfer agreements, IP due-diligence records, and technical evidence requiring both legal and subject-matter knowledge.",
    linkLabel: "Explore Patent Translation Services",
    href: "https://www.stepes.com/patent-translation-services/",
  },
];

const legalAudiences = [
  {
    title: "General Counsel and In-House Legal",
    description:
      "Support commercial agreements, corporate matters, international expansion, legal correspondence, policies, disputes, and outside-counsel collaboration.",
  },
  {
    title: "Legal Operations",
    description:
      "Centralize translation intake, standardize workflows, consolidate recurring content, improve project visibility, and create a consistent experience across business units and jurisdictions.",
  },
  {
    title: "Compliance and Ethics",
    description:
      "Translate global policies, internal controls, training materials, investigations, audit documentation, and regulatory communications for employees and business partners.",
  },
  {
    title: "Privacy and Data Governance",
    description:
      "Support multilingual privacy notices, processing agreements, internal policies, incident communications, and data-governance documentation.",
  },
  {
    title: "Employment Legal and Human Resources",
    description:
      "Coordinate employment agreements, workplace policies, employee communications, investigations, and other documentation affecting global workforces.",
  },
  {
    title: "Corporate Development and Finance",
    description:
      "Translate transaction, financing, governance, disclosure, due-diligence, and integration materials that require legal, financial, and business context.",
  },
];

const riskWorkflows = [
  {
    number: "01",
    title: "Expert Translation and Independent Review",
    description:
      "For contracts, filings, transaction documents, externally distributed policies, and other business-critical legal content requiring professional translation and an additional review stage.",
    bestFor: [
      "High-risk or externally submitted documents",
      "Material agreements and transaction content",
      "Regulatory or evidentiary materials",
      "Content requiring added reviewer independence",
    ],
  },
  {
    number: "02",
    title: "AI-Assisted Translation With Legal-Linguist Validation",
    description:
      "For recurring or structured legal content where DomainAI, translation memory, and terminology resources can improve efficiency before professional legal-linguistic review.",
    bestFor: [
      "Repeated contract language",
      "Established legal terminology",
      "Recurring corporate policies",
      "Higher-volume business legal content",
    ],
  },
  {
    number: "03",
    title: "High-Volume Multilingual Review Support",
    description:
      "For large document collections requiring rapid translation, prioritization, or multilingual review, with important or sensitive content escalated for additional human attention.",
    bestFor: [
      "Due-diligence collections",
      "Investigation materials",
      "Discovery and evidence",
      "Large internal document sets",
    ],
  },
  {
    number: "04",
    title: "Certified Translation for Official Use",
    description:
      "For court filings, government submissions, regulatory materials, banking documents, or other official uses where a signed certificate of translation accuracy is requested.",
    bestFor: [
      "Court and arbitration submissions",
      "Government and regulatory filings",
      "Corporate records submitted to authorities",
      "Documents requiring certification or notarization",
    ],
  },
];


const securityControls = [
  {
    number: "01",
    title: "Controlled Project Access",
    description:
      "Access to project information and files is limited to the professionals directly involved in the translation and review process.",
  },
  {
    number: "02",
    title: "Confidentiality Commitments",
    description:
      "Stepes supports confidentiality agreements and requires participating linguists to follow applicable confidentiality obligations.",
  },
  {
    number: "03",
    title: "Qualified Project Teams",
    description:
      "Translators and reviewers are selected according to the language pair, legal subject matter, document type, and intended use.",
  },
  {
    number: "04",
    title: "Secure File Handling",
    description:
      "Legal documents are exchanged and managed through controlled translation workflows rather than unmanaged public translation tools.",
  },
  {
    number: "05",
    title: "Coordinated Review",
    description:
      "Authorized client reviewers, legal stakeholders, and Stepes project teams follow a defined review and feedback process.",
  },
  {
    number: "06",
    title: "Controlled Delivery",
    description:
      "Completed files are delivered through the agreed project channel, with certification, formatting, or supporting documentation included when required.",
  },
];

const aiOversightStages = [
  {
    number: "01",
    title: "Controlled AI-Assisted Translation",
    description:
      "DomainAI supports draft translation for suitable legal content within a managed translation process.",
  },
  {
    number: "02",
    title: "Translation Memory and Terminology",
    description:
      "Previously approved translations, recurring clauses, defined terms, and customer terminology support consistency across related content.",
  },
  {
    number: "03",
    title: "Professional Legal-Linguistic Review",
    description:
      "Experienced legal linguists review meaning, terminology, clarity, purpose, and document context.",
  },
  {
    number: "04",
    title: "Structured Quality Checks",
    description:
      "Automated and human checks help identify omissions, inconsistent terminology, numbers, names, references, formatting, and other delivery issues.",
  },
];

const terminologyPractices = [
  {
    title: "Defined Terms",
    description:
      "Maintain consistent translations for capitalized terms, contractual definitions, obligations, rights, roles, and other legally significant language.",
  },
  {
    title: "Party and Entity Names",
    description:
      "Apply approved naming conventions consistently across contracts, corporate records, filings, and supporting documents.",
  },
  {
    title: "Recurring Clauses",
    description:
      "Reuse approved language for frequently repeated clauses while reviewing each clause in its current legal and document context.",
  },
  {
    title: "Customer-Approved Terminology",
    description:
      "Incorporate legal department guidance, existing glossaries, prior translations, reference materials, and terminology preferences.",
  },
  {
    title: "Related Documents and Versions",
    description:
      "Support consistency across master agreements, schedules, amendments, policies, exhibits, and updated document versions.",
  },
  {
    title: "Multilingual Feedback",
    description:
      "Capture approved reviewer changes so future projects can better reflect the organization’s preferred legal language.",
  },
];


const engagementModels = [
  {
    label: "Project-Based Legal Translation",
    title: "Focused Support for a Defined Legal Matter",
    description:
      "For an individual agreement, filing, investigation, transaction, policy rollout, or other time-sensitive legal request with a clearly defined scope.",
    items: [
      "Scope, language, and deadline confirmation",
      "Legal-linguist and reviewer assignment",
      "Translation, review, and quality checks",
      "Formatting, certification, or supporting documentation",
      "Coordinated delivery and expedited handling when available",
    ],
  },
  {
    label: "Managed Legal Translation Programs",
    title: "A Consistent Operating Model for Recurring Legal Content",
    description:
      "For organizations managing ongoing multilingual legal work across departments, jurisdictions, document types, and outside counsel.",
    items: [
      "Centralized translation intake",
      "Dedicated project coordination",
      "Approved linguist and reviewer teams",
      "Terminology and translation-memory management",
      "Standardized workflows, reporting, and continuous improvement",
    ],
  },
];

const qualitySteps = [
  {
    number: "01",
    title: "Scope and Risk Assessment",
    description:
      "Confirm the languages, intended use, audience, deadline, confidentiality requirements, certification needs, and review expectations.",
  },
  {
    number: "02",
    title: "Linguist and Reviewer Assignment",
    description:
      "Select qualified professionals with relevant legal, linguistic, industry, and document-specific experience.",
  },
  {
    number: "03",
    title: "Reference and Terminology Preparation",
    description:
      "Review existing translations, defined terms, glossaries, style preferences, and supporting documents before production begins.",
  },
  {
    number: "04",
    title: "Translation or Controlled AI-Assisted Drafting",
    description:
      "Translate the content using the approved workflow, with AI-assisted drafting applied only where appropriate.",
  },
  {
    number: "05",
    title: "Legal-Linguistic Review",
    description:
      "Review meaning, legal terminology, completeness, clarity, context, and consistency against the source.",
  },
  {
    number: "06",
    title: "Quality and Formatting Checks",
    description:
      "Check names, dates, numbers, references, defined terms, formatting, omissions, and delivery requirements.",
  },
  {
    number: "07",
    title: "Client Feedback and Final Delivery",
    description:
      "Incorporate agreed reviewer feedback, complete final checks, and deliver the approved multilingual files.",
  },
];

const legalLanguages = [
  "Spanish",
  "French",
  "German",
  "Chinese (Simplified)",
  "Chinese (Traditional)",
  "Japanese",
  "Korean",
  "Portuguese",
  "Arabic",
  "Italian",
  "Dutch",
  "Polish",
  "Russian",
  "Vietnamese",
  "Thai",
  "Turkish",
];


const transactionChallenges = [
  "Multiple document types and source-file formats",
  "Defined terms shared across related agreements",
  "Sensitive corporate and financial information",
  "Parallel translation into several languages",
  "Updates arriving throughout the transaction",
  "Internal counsel, external advisors, and business reviewers",
  "A fixed signing or closing deadline",
];

const transactionApproach = [
  "Establish one coordinated project intake",
  "Organize documents by purpose, priority, and language",
  "Prepare approved terminology and reference materials",
  "Assign qualified legal linguists by subject matter",
  "Translate related documents in parallel",
  "Apply review and QA according to document risk",
  "Track feedback and updated versions",
  "Deliver files according to the transaction schedule",
];

const whyStepes = [
  {
    number: "01",
    title: "Legal and Subject-Matter Expertise",
    description:
      "Work with linguists selected for the legal discipline, industry context, document type, language pair, and intended use.",
  },
  {
    number: "02",
    title: "Secure Enterprise Workflows",
    description:
      "Manage confidential content through controlled access, confidentiality commitments, coordinated review, and disciplined delivery.",
  },
  {
    number: "03",
    title: "Workflows Matched to Legal Risk",
    description:
      "Choose expert translation, additional review, AI-assisted production, high-volume support, certification, or other services according to the matter.",
  },
  {
    number: "04",
    title: "AI-Powered Efficiency With Human Accountability",
    description:
      "Use DomainAI, translation memory, terminology control, and automation while keeping professional legal review central to final quality.",
  },
  {
    number: "05",
    title: "Consistency Across Recurring Legal Content",
    description:
      "Preserve approved terminology, defined terms, repeated clauses, and reviewer preferences across related documents and future projects.",
  },
  {
    number: "06",
    title: "Scalable Multilingual Support",
    description:
      "Coordinate one-time matters and ongoing legal translation programs across more than 100 languages.",
  },
];

const relatedLegalServices = [
  {
    title: "Legal Translation Services",
    description:
      "An overview of Stepes legal translation capabilities across corporate, litigation, certified, and official-use content.",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Contract Translation Services",
    description:
      "Commercial agreements, NDAs, employment contracts, licensing arrangements, and other binding agreements.",
    href: "https://www.stepes.com/contract-translation-services/",
  },
  {
    title: "Litigation Translation Services",
    description:
      "Discovery, depositions, pleadings, evidence, arbitration, investigations, and active disputes.",
    href: "https://www.stepes.com/litigation-translation-services/",
  },
  {
    title: "Court Document Translation Services",
    description:
      "Translation and certification for pleadings, affidavits, judgments, exhibits, and official court submissions.",
    href: "https://www.stepes.com/court-document-translation-services/",
  },
  {
    title: "Certified Legal Translation Services",
    description:
      "Certified translations for courts, government bodies, regulators, financial institutions, and other official recipients.",
    href: "https://www.stepes.com/certified-legal-translation-services/",
  },
  {
    title: "Patent Translation Services",
    description:
      "Legal and technical translation for patents, claims, prior art, filings, and IP-related documentation.",
    href: "https://www.stepes.com/patent-translation-services/",
  },
  {
    title: "AI-Enabled Legal Translation Services",
    description:
      "DomainAI-assisted translation with terminology control, translation memory, structured QA, and professional human review.",
    href: "https://www.stepes.com/ai-enabled-legal-translation-services/",
  },
  {
    title: "Compliance Translation Services",
    description:
      "Corporate compliance policies, ethics programs, regulatory communications, privacy content, and training materials.",
    href: "https://www.stepes.com/compliance-translation-services/",
  },
];

const legalInsights = [
  {
    category: "Best Practices",
    title: "Legal Translation Best Practices",
    description:
      "Improve source preparation, terminology control, reviewer coordination, quality assurance, and final delivery.",
    href: "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/",
  },
  {
    category: "Workflow Selection",
    title: "How to Select the Right Legal Translation Workflow",
    description:
      "Match translation and review levels to intended use, risk, volume, confidentiality, and deadline.",
    href: "https://www.stepes.com/resources/legal-translation/selecting-legal-translation-workflows/",
  },
  {
    category: "AI and Security",
    title: "AI, Confidentiality, and Human Review in Legal Translation",
    description:
      "Understand where AI can support efficiency, where human judgment remains essential, and how sensitive content should be managed.",
    href: "https://www.stepes.com/resources/legal-translation/ai-confidentiality-human-review/",
  },
  {
    category: "Contract Preparation",
    title: "Preparing Contracts for Multilingual Translation",
    description:
      "See how defined terms, formatting, reference materials, tracked changes, and document versions affect translation quality.",
    href: "https://www.stepes.com/resources/legal-translation/preparing-contracts-for-translation/",
  },
  {
    category: "Terminology Governance",
    title: "Managing Defined Terms Across Multiple Languages",
    description:
      "Govern defined terms, entity names, clauses, and legal terminology across related documents and markets.",
    href: "https://www.stepes.com/resources/legal-translation/managing-defined-terms/",
  },
  {
    category: "M&A and Due Diligence",
    title: "Legal Translation for M&A and Due Diligence",
    description:
      "Coordinate volume, confidentiality, terminology, priorities, and changing documents during cross-border transactions.",
    href: "https://www.stepes.com/resources/legal-translation/ma-due-diligence-translation/",
  },
  {
    category: "Certified Translation",
    title: "When Legal Documents Require Certified Translation",
    description:
      "Review certification, notarization, receiving-authority requirements, and document-preparation considerations.",
    href: "https://www.stepes.com/resources/legal-translation/certified-translation-requirements/",
  },
  {
    category: "Legal Operations",
    title: "How Legal Operations Teams Can Centralize Translation",
    description:
      "Use centralized intake, approved resources, terminology governance, and reporting to improve multilingual legal operations.",
    href: "https://www.stepes.com/resources/legal-translation/legal-operations-translation-management/",
  },
];

const legalFaqs = [
  {
    question:
      "What legal translation services does Stepes provide for corporate legal teams?",
    answer:
      "Stepes supports contracts, corporate governance, compliance, M&A, employment matters, privacy documentation, litigation, investigations, intellectual property, regulatory communications, and other business-critical legal content. Projects can range from one urgent document to an ongoing multilingual legal translation program.",
  },
  {
    question: "How does Stepes protect confidential legal documents?",
    answer:
      "Stepes uses controlled project access, confidentiality commitments, qualified resource assignment, and disciplined document-handling practices. Access to project information is limited to the professionals involved in the translation and review process. Additional client-specific requirements can be documented during project setup.",
  },
  {
    question:
      "Can Stepes support an ongoing corporate legal translation program?",
    answer:
      "Yes. Stepes can support recurring legal translation across departments, jurisdictions, document types, and languages. Managed programs may include centralized intake, dedicated project coordination, approved linguist teams, terminology resources, translation memory, standardized workflows, and program reporting.",
  },
  {
    question: "How are translators selected for legal projects?",
    answer:
      "Legal translators are selected according to the source and target languages, legal subject area, document type, industry context, target market, and intended use. Projects requiring an additional review stage can also include a separate qualified reviewer.",
  },
  {
    question: "Does Stepes use AI for legal translation?",
    answer:
      "Stepes may use DomainAI and other translation technology for suitable legal content. AI-assisted output remains part of a controlled workflow that includes terminology resources, translation memory, professional human review, and quality checks.",
  },
  {
    question:
      "How does human review work for AI-assisted legal translation?",
    answer:
      "A qualified legal linguist reviews the translated content against the source for meaning, terminology, legal context, completeness, clarity, and formatting. The workflow may include an additional reviewer when required by the document’s risk level or intended use.",
  },
  {
    question:
      "Can Stepes maintain approved legal terminology across documents?",
    answer:
      "Yes. Stepes can use customer glossaries, existing translations, defined-term lists, translation memory, reference documents, and reviewer feedback to support consistency across agreements, policies, related files, versions, and languages.",
  },
  {
    question: "Can Stepes support M&A and due-diligence translation?",
    answer:
      "Yes. Stepes supports multilingual due-diligence materials, transaction agreements, disclosure schedules, corporate and financial records, closing documents, and integration-related legal content. Documents can be prioritized and translated in parallel according to the transaction schedule.",
  },
  {
    question: "Does Stepes provide certified legal translations?",
    answer:
      "Yes. Certified translations can be provided for courts, government agencies, regulators, financial institutions, and other official recipients. Requirements vary, so clients should confirm certification, notarization, formatting, and submission rules with the receiving authority or legal counsel.",
  },
  {
    question:
      "Can Stepes translate litigation and investigation materials?",
    answer:
      "Yes. Stepes supports pleadings, discovery files, deposition transcripts, evidence, exhibits, arbitration materials, investigation records, expert reports, correspondence, and other case-related documentation.",
  },
  {
    question: "How quickly can urgent legal documents be translated?",
    answer:
      "Turnaround depends on document length, language pair, subject matter, file format, review level, certification requirements, and translator availability. Expedited workflows may be available for filings, transactions, investigations, and other time-sensitive matters after the files and requirements are reviewed.",
  },
  {
    question: "Which languages does Stepes support?",
    answer:
      "Stepes supports more than 100 languages, including major business languages and regional variants. Multi-language programs can be coordinated through one project workflow with shared terminology and review requirements.",
  },
  {
    question:
      "Can Stepes work with outside counsel and internal reviewers?",
    answer:
      "Yes. Stepes can coordinate feedback from in-house legal teams, outside counsel, compliance stakeholders, business reviewers, and other authorized participants. Review responsibilities and approval steps should be agreed during project setup.",
  },
];

function Arrow({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.25 8H12.25M8.75 4.5L12.25 8L8.75 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LegalTeamsSeoMeta() {
  useEffect(() => {
    document.title = LEGAL_TEAMS_SEO.title;

    const upsertMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    upsertMeta("description", LEGAL_TEAMS_SEO.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", LEGAL_TEAMS_SEO.canonical);
  }, []);

  return null;
}

export default function StepesLegalTeamsWireframe() {
  return (
    <>
      <LegalTeamsSeoMeta />

      <main className="ltw-page">
        <section className="ltw-hero" aria-labelledby="ltw-hero-title">
          <div className="ltw-shell ltw-hero__inner">
            <p className="ltw-eyebrow">SOLUTIONS FOR LEGAL TEAMS</p>

            <h1 id="ltw-hero-title" className="ltw-hero__title">
              Secure Legal Translation for Corporate Legal Teams
            </h1>

            <p className="ltw-hero__copy">
              Translate contracts, compliance documentation, corporate policies,
              litigation materials, and other business-critical legal content
              with experienced legal linguists, expert human review, and secure
              enterprise workflows built for cross-border legal operations.
            </p>

            <div className="ltw-hero__actions" aria-label="Legal translation actions">
              <a
                className="ltw-button ltw-button--primary"
                href="https://www.stepes.com/contact-sales/"
              >
                <span>Talk to a Legal Translation Expert</span>
                <Arrow />
              </a>

              <a
                className="ltw-button ltw-button--secondary"
                href="https://www.stepes.com/legal-translation-services/"
              >
                <span>Explore Legal Translation Services</span>
                <Arrow />
              </a>
            </div>

            <p className="ltw-hero__trust">
              <span className="ltw-hero__trust-dot" aria-hidden="true" />
              <span>
                Built for in-house counsel, legal operations, compliance teams,
                privacy teams, corporate governance groups, and outside counsel.
              </span>
            </p>
          </div>
        </section>

        <section
          className="ltw-proof"
          aria-label="Enterprise legal translation capabilities"
        >
          <div className="ltw-shell">
            <div className="ltw-proof__header">
              <p className="ltw-eyebrow ltw-eyebrow--muted">
                ENTERPRISE READINESS
              </p>

              <a
                className="ltw-editorial-link"
                href="https://www.stepes.com/security-compliance/"
              >
                <span>View Security &amp; Compliance</span>
                <Arrow />
              </a>
            </div>

            <div className="ltw-proof__grid">
              {proofPoints.map((point) => (
                <a
                  className="ltw-proof__item"
                  href={point.href}
                  key={point.title}
                >
                  <span className="ltw-proof__title">{point.title}</span>
                  <span className="ltw-proof__description">
                    {point.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-operations"
          aria-labelledby="ltw-operations-title"
        >
          <div className="ltw-shell ltw-operations__layout">
            <div className="ltw-operations__intro">
              <p className="ltw-eyebrow">GLOBAL LEGAL OPERATIONS</p>

              <h2 id="ltw-operations-title" className="ltw-operations__title">
                Legal Translation Is an Operational and Risk-Management
                Challenge
              </h2>

              <div className="ltw-operations__copy">
                <p>
                  Global legal departments manage far more than isolated
                  documents. They coordinate agreements, policies,
                  investigations, regulatory obligations, transactions,
                  employment matters, and outside counsel across jurisdictions.
                </p>

                <p>
                  Translated content must remain accurate, confidential, consistent,
                  reviewable, and available within legal and business
                  deadlines. Stepes brings these requirements into one
                  controlled multilingual workflow.
                </p>
              </div>

              <div className="ltw-operations__standard">
                <span className="ltw-operations__standard-label">
                  A Stronger Operating Model
                </span>
                <p>
                  Protect legal meaning, maintain terminology consistency, and
                  give stakeholders clearer control across languages,
                  jurisdictions, and review cycles.
                </p>
              </div>
            </div>

            <div
              className="ltw-challenges"
              aria-label="Operational challenges for global legal teams"
            >
              {challenges.map((challenge) => (
                <article className="ltw-challenge" key={challenge.number}>
                  <span className="ltw-challenge__number" aria-hidden="true">
                    {challenge.number}
                  </span>

                  <div className="ltw-challenge__content">
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-scope"
          aria-labelledby="ltw-scope-title"
        >
          <div className="ltw-shell">
            <div className="ltw-section-heading ltw-section-heading--center">
              <h2 id="ltw-scope-title" className="ltw-heading--no-eyebrow">
                Multilingual Support Across Corporate Legal Workflows
              </h2>
              <p>
                Corporate legal teams manage interconnected documents,
                stakeholders, and obligations across the business. Stepes
                supports multilingual legal content across commercial
                agreements, governance, compliance, transactions, employment,
                disputes, privacy, and intellectual property.
              </p>
            </div>

            <div className="ltw-scope__grid">
              {legalWorkflows.map((workflow, index) => (
                <article className="ltw-scope__item" key={workflow.title}>
                  <span className="ltw-scope__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="ltw-scope__content">
                    <h3>{workflow.title}</h3>
                    <p>{workflow.description}</p>

                    {workflow.href ? (
                      <a
                        className="ltw-editorial-link ltw-scope__link"
                        href={workflow.href}
                      >
                        <span>{workflow.linkLabel}</span>
                        <Arrow />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-audiences"
          aria-labelledby="ltw-audiences-title"
        >
          <div className="ltw-shell">
            <div className="ltw-audiences__header">
              <div>
                <h2 id="ltw-audiences-title" className="ltw-heading--no-eyebrow">
                  Support for Legal Teams and Their Business Partners
                </h2>
              </div>

              <div className="ltw-audiences__intro">
                <p>
                  Legal translation often extends beyond the legal department.
                  Stepes helps internal teams and outside advisors work from
                  consistent multilingual content, shared terminology, and
                  coordinated translation workflows.
                </p>
              </div>
            </div>

            <div className="ltw-audiences__grid">
              {legalAudiences.map((audience) => (
                <article className="ltw-audiences__item" key={audience.title}>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                </article>
              ))}
            </div>

            <p className="ltw-audiences__closing">
              Whether legal translation is managed centrally or distributed
              across departments, Stepes provides one scalable language partner
              for recurring programs and time-sensitive legal matters.
            </p>
          </div>
        </section>

        <section
          className="ltw-risk"
          aria-labelledby="ltw-risk-title"
        >
          <div className="ltw-shell">
            <div className="ltw-risk__header">
              <p className="ltw-eyebrow ltw-risk__eyebrow">
                RISK-BASED TRANSLATION
              </p>
              <h2 id="ltw-risk-title">
                The Right Workflow for Every Legal Use Case
              </h2>
              <p>
                Not every legal document carries the same purpose, audience,
                confidentiality requirement, or level of risk. Stepes helps
                legal teams select a workflow based on intended use,
                complexity, sensitivity, reference materials, required
                languages, and delivery deadline.
              </p>
            </div>

            <div className="ltw-risk__grid">
              {riskWorkflows.map((workflow) => (
                <article className="ltw-risk__item" key={workflow.number}>
                  <span className="ltw-risk__number" aria-hidden="true">
                    {workflow.number}
                  </span>
                  <h3>{workflow.title}</h3>
                  <p className="ltw-risk__description">
                    {workflow.description}
                  </p>

                  <div className="ltw-risk__fit">
                    <span>Best suited for</span>
                    <ul>
                      {workflow.bestFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="ltw-risk__footer">
              <p>
                Workflow recommendations should reflect the receiving
                institution’s requirements. Courts, regulators, and other
                authorities may apply different rules for certification,
                notarization, formatting, and submission. Stepes can align
                delivery with the instructions provided for the matter.
              </p>

              <a
                className="ltw-risk__link"
                href="https://www.stepes.com/certified-legal-translation-services/"
              >
                <span>Explore Certified Legal Translation Services</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>


        <section
          className="ltw-security"
          aria-labelledby="ltw-security-title"
        >
          <div className="ltw-shell ltw-security__layout">
            <div className="ltw-security__intro">
              <h2 id="ltw-security-title" className="ltw-heading--no-eyebrow">
                Confidentiality and Controlled Access Throughout the Workflow
              </h2>
              <p>
                Legal documents may contain privileged communications,
                transaction details, employee information, personal data,
                intellectual property, investigation records, and other
                sensitive material. Stepes manages confidential translation
                through controlled project access, qualified linguist
                assignment, confidentiality commitments, and disciplined
                document handling.
              </p>

              <div className="ltw-security__note">
                <span>Requirements Aligned Before Translation Begins</span>
                <p>
                  Stepes can work with legal, procurement, privacy, and
                  information-security stakeholders to document project
                  requirements for the specific matter.
                </p>
              </div>

              <a
                className="ltw-editorial-link ltw-security__link"
                href="https://www.stepes.com/security-compliance/"
              >
                <span>View Security &amp; Compliance</span>
                <Arrow />
              </a>
            </div>

            <div
              className="ltw-security__controls"
              aria-label="Confidential legal translation controls"
            >
              {securityControls.map((control) => (
                <article className="ltw-security__control" key={control.number}>
                  <span className="ltw-security__number" aria-hidden="true">
                    {control.number}
                  </span>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-ai"
          aria-labelledby="ltw-ai-title"
        >
          <div className="ltw-shell">
            <div className="ltw-section-heading ltw-section-heading--center">
              <h2 id="ltw-ai-title" className="ltw-heading--no-eyebrow">
                AI-Powered Legal Translation With Expert Human Oversight
              </h2>
              <p>
                AI can accelerate suitable legal translation workflows,
                strengthen terminology consistency, and help teams process
                larger volumes of multilingual content. Legal language still
                requires accountable human judgment.
              </p>
            </div>

            <div className="ltw-ai__system">
              <div className="ltw-ai__system-intro">
                <span className="ltw-ai__system-label">
                  A Controlled AI + Human Workflow
                </span>
                <p>
                  Stepes combines DomainAI, translation memory, terminology
                  management, workflow automation, structured quality checks,
                  and professional legal-linguistic review. AI supports the
                  workflow; qualified professionals remain responsible for
                  reviewing meaning, context, terminology, formatting, and
                  delivery quality.
                </p>
              </div>

              <div
                className="ltw-ai__stages"
                aria-label="AI-assisted legal translation workflow"
              >
                {aiOversightStages.map((stage) => (
                  <article className="ltw-ai__stage" key={stage.number}>
                    <span className="ltw-ai__number" aria-hidden="true">
                      {stage.number}
                    </span>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </article>
                ))}
              </div>

              <div className="ltw-ai__emphasis">
                <div>
                  <span>AI Is Part of the Workflow, Not the Final Authority</span>
                  <p>
                    Legal translation requires more than fast sentence-level
                    output. Stepes uses AI where it adds value while keeping
                    professional human review, terminology control, and
                    structured QA at the center of final delivery.
                  </p>
                </div>

                <a
                  className="ltw-editorial-link ltw-ai__link"
                  href="https://www.stepes.com/ai-enabled-legal-translation-services/"
                >
                  <span>Explore AI-Enabled Legal Translation Services</span>
                  <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ltw-terminology"
          aria-labelledby="ltw-terminology-title"
        >
          <div className="ltw-shell">
            <div className="ltw-terminology__header">
              <div>
                <p className="ltw-eyebrow">TERMINOLOGY GOVERNANCE</p>
                <h2 id="ltw-terminology-title">
                  Preserve Legal Terminology Across Languages and Matters
                </h2>
              </div>

              <div className="ltw-terminology__intro">
                <p>
                  Legal meaning depends on more than individual words. Defined
                  terms, entity names, recurring clauses, document references,
                  and jurisdiction-specific expressions must remain consistent
                  across agreements, policies, versions, and languages.
                </p>
                <p>
                  Stepes combines legal-linguistic expertise with terminology
                  resources and translation memory to help legal teams manage
                  recurring language more systematically.
                </p>
              </div>
            </div>

            <div className="ltw-terminology__matrix">
              {terminologyPractices.map((practice) => (
                <article
                  className="ltw-terminology__item"
                  key={practice.title}
                >
                  <h3>{practice.title}</h3>
                  <p>{practice.description}</p>
                </article>
              ))}
            </div>

            <aside className="ltw-terminology__boundary">
              <div className="ltw-terminology__boundary-heading">
                <span>ROLE OF LEGAL COUNSEL</span>
                <strong>Translation Expertise With Clear Accountability</strong>
              </div>
              <p>
                Stepes provides linguistic and subject-matter translation
                expertise. Qualified legal counsel remains responsible for
                interpreting the law and assessing the validity or
                enforceability of translated legal language.
              </p>
            </aside>
          </div>
        </section>


        <section
          className="ltw-engagement"
          aria-labelledby="ltw-engagement-title"
        >
          <div className="ltw-shell">
            <div className="ltw-engagement__header">
              <div>
                <p className="ltw-eyebrow">FLEXIBLE ENGAGEMENT</p>
                <h2 id="ltw-engagement-title">
                  From One Urgent Matter to an Ongoing Global Program
                </h2>
              </div>

              <div className="ltw-engagement__intro">
                <p>
                  Legal translation needs can range from a single
                  time-sensitive agreement to a long-term multilingual program
                  spanning departments, jurisdictions, and outside counsel.
                  Stepes supports both project-based requests and ongoing
                  enterprise legal translation operations.
                </p>
              </div>
            </div>

            <div className="ltw-engagement__models">
              {engagementModels.map((model, index) => (
                <article
                  className={`ltw-engagement__model ${
                    index === 1 ? "ltw-engagement__model--program" : ""
                  }`}
                  key={model.label}
                >
                  <span className="ltw-engagement__label">{model.label}</span>
                  <h3>{model.title}</h3>
                  <p className="ltw-engagement__description">
                    {model.description}
                  </p>

                  <ul>
                    {model.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="ltw-engagement__footer">
              <p>
                A consistent operating model helps legal teams reduce
                fragmented vendor processes, preserve institutional language,
                and manage multilingual legal content with greater control.
              </p>

              <a
                className="ltw-button ltw-button--primary"
                href="https://www.stepes.com/contact-sales/"
              >
                <span>Discuss a Legal Translation Program</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="ltw-quality"
          aria-labelledby="ltw-quality-title"
        >
          <div className="ltw-shell ltw-quality__layout">
            <div className="ltw-quality__intro">
              <p className="ltw-eyebrow ltw-quality__eyebrow">
                LEGAL QUALITY ASSURANCE
              </p>
              <h2 id="ltw-quality-title">
                Legal Expertise Backed by Structured Quality Control
              </h2>
              <p>
                Legal translation quality depends on the people assigned to the
                work, the reference materials they receive, the review process
                applied, and the checks completed before delivery.
              </p>
              <p>
                Stepes selects linguists according to language pair, legal
                subject matter, document type, industry context, and project
                requirements. Quality workflows can be adjusted according to
                the legal purpose and risk level of the content.
              </p>

              <div className="ltw-quality__proof">
                <span>ISO-Certified Quality Framework</span>
                <p>
                  ISO 9001 and ISO 17100-certified processes support
                  professional linguist selection, documented workflows, and
                  multi-step translation review.
                </p>
              </div>

              <a
                className="ltw-quality__link"
                href="https://www.stepes.com/translation-qa-services/"
              >
                <span>Explore Translation Quality Assurance</span>
                <Arrow />
              </a>
            </div>

            <div
              className="ltw-quality__steps"
              aria-label="Legal translation quality workflow"
            >
              {qualitySteps.map((step) => (
                <article className="ltw-quality__step" key={step.number}>
                  <span className="ltw-quality__number" aria-hidden="true">
                    {step.number}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-languages"
          aria-labelledby="ltw-languages-title"
        >
          <div className="ltw-shell">
            <div className="ltw-section-heading ltw-section-heading--center">
              <h2 id="ltw-languages-title" className="ltw-heading--no-eyebrow">
                Legal Translation in 100+ Languages
              </h2>
              <p>
                Stepes supports multilingual legal matters and corporate
                operations across major global languages and regional language
                variants. Legal teams can coordinate contracts, compliance,
                governance, employment, privacy, litigation, intellectual
                property, and other business-critical content through one
                multilingual partner.
              </p>
            </div>

            <div className="ltw-languages__panel">
              <div className="ltw-languages__panel-header">
                <div>
                  <span>Common Legal Translation Languages</span>
                  <p>
                    Language teams are selected according to the target market,
                    regional variant, legal subject matter, and document
                    purpose.
                  </p>
                </div>

                <a
                  className="ltw-editorial-link"
                  href="https://www.stepes.com/translation-languages/"
                >
                  <span>View All Translation Languages</span>
                  <Arrow />
                </a>
              </div>

              <div
                className="ltw-languages__grid"
                aria-label="Common legal translation languages"
              >
                {legalLanguages.map((language) => (
                  <div className="ltw-languages__item" key={language}>
                    <span aria-hidden="true" />
                    <strong>{language}</strong>
                  </div>
                ))}
              </div>

              <div className="ltw-languages__coordination">
                <span>Coordinated Multilingual Delivery</span>
                <p>
                  For multi-language programs, Stepes can coordinate shared
                  terminology, reference materials, review requirements, and
                  delivery schedules across all target languages.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section
          className="ltw-practice"
          aria-labelledby="ltw-practice-title"
        >
          <div className="ltw-shell">
            <div className="ltw-practice__header">
              <div>
                <p className="ltw-eyebrow">LEGAL TRANSLATION IN PRACTICE</p>
                <h2 id="ltw-practice-title">
                  Coordinating a Multilingual Cross-Border Transaction
                </h2>
              </div>

              <div className="ltw-practice__intro">
                <span>Common Enterprise Scenario</span>
                <p>
                  A cross-border transaction may involve agreements,
                  disclosure schedules, corporate records, financial
                  documents, employment materials, regulatory correspondence,
                  and supporting exhibits produced by multiple parties. When
                  these materials must be translated into several languages
                  under a fixed deal timeline, legal teams need more than
                  isolated document translation.
                </p>
              </div>
            </div>

            <div className="ltw-practice__flow">
              <article className="ltw-practice__column">
                <span className="ltw-practice__label">The Legal Team’s Challenge</span>
                <ul>
                  {transactionChallenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="ltw-practice__column ltw-practice__column--approach">
                <span className="ltw-practice__label">The Stepes Approach</span>
                <ol>
                  {transactionApproach.map((item, index) => (
                    <li key={item}>
                      <span aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ol>
              </article>
            </div>

            <div className="ltw-practice__outcome">
              <div>
                <span>The Operational Benefit</span>
                <p>
                  A coordinated workflow helps legal teams maintain terminology
                  consistency, reduce duplicated effort, manage changing
                  documents, and give stakeholders clearer visibility across
                  languages and review cycles.
                </p>
              </div>

              <a
                className="ltw-editorial-link"
                href="https://www.stepes.com/contact-sales/"
              >
                <span>Talk to Stepes About a Complex Legal Matter</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="ltw-why"
          aria-labelledby="ltw-why-title"
        >
          <div className="ltw-shell">
            <div className="ltw-section-heading ltw-section-heading--center">
              <p className="ltw-eyebrow">WHY STEPES</p>
              <h2 id="ltw-why-title">
                A Legal Translation Partner Built for Global Business
              </h2>
              <p>
                Legal teams need a partner that can protect sensitive content,
                apply the right level of review, preserve approved language,
                and scale across jurisdictions without adding unnecessary
                operational complexity.
              </p>
            </div>

            <div className="ltw-why__grid">
              {whyStepes.map((item) => (
                <article className="ltw-why__item" key={item.number}>
                  <span className="ltw-why__rule" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-related"
          aria-labelledby="ltw-related-title"
        >
          <div className="ltw-shell">
            <div className="ltw-related__header">
              <div>
                <h2 id="ltw-related-title" className="ltw-heading--no-eyebrow">
                  Explore Specialized Legal Translation Services
                </h2>
              </div>

              <p>
                Find the right Stepes service for the document type, legal use,
                workflow, and level of review your matter requires.
              </p>
            </div>

            <div className="ltw-related__list">
              {relatedLegalServices.map((service) => (
                <a
                  className="ltw-related__item"
                  href={service.href}
                  key={service.title}
                >
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-insights"
          aria-labelledby="ltw-insights-title"
        >
          <div className="ltw-shell">
            <div className="ltw-insights__header">
              <div>
                <p className="ltw-eyebrow">LEGAL TRANSLATION RESOURCES</p>
                <h2 id="ltw-insights-title">
                  Guidance for Managing Multilingual Legal Content
                </h2>
              </div>

              <p>
                Explore practical guidance for selecting legal translation
                workflows, protecting terminology, using AI responsibly,
                preparing source documents, and managing multilingual legal
                content across the enterprise.
              </p>
            </div>

            <div className="ltw-insights__grid">
              {legalInsights.map((insight) => (
                <a
                  className="ltw-insights__item"
                  href={insight.href}
                  key={insight.title}
                >
                  <span className="ltw-insights__category">
                    {insight.category}
                  </span>
                  <h3>{insight.title}</h3>
                  <p>{insight.description}</p>
                  <span className="ltw-insights__action">
                    Explore {insight.category}
                    <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-faq"
          aria-labelledby="ltw-faq-title"
        >
          <div className="ltw-shell ltw-faq__layout">
            <div className="ltw-faq__intro">
              <h2 id="ltw-faq-title" className="ltw-heading--no-eyebrow">
                Legal Translation for Corporate Teams: Frequently Asked
                Questions
              </h2>
              <p>
                Find answers about confidentiality, legal-linguist selection,
                AI-assisted workflows, terminology governance, certified
                translation, urgent delivery, and ongoing enterprise support.
              </p>
              <a
                className="ltw-editorial-link"
                href="https://www.stepes.com/contact-sales/"
              >
                <span>Ask a Legal Translation Question</span>
                <Arrow />
              </a>
            </div>

            <div className="ltw-faq__panel">
              {legalFaqs.map((faq) => (
                <details className="ltw-faq__item" key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="ltw-faq__toggle" aria-hidden="true" />
                  </summary>
                  <div className="ltw-faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="ltw-final"
          aria-labelledby="ltw-final-title"
        >
          <div className="ltw-shell">
            <div className="ltw-final__panel">
              <h2 id="ltw-final-title" className="ltw-heading--no-eyebrow">
                Translate Business-Critical Legal Content With Confidence
              </h2>
              <p>
                Whether you need support for one urgent matter or an ongoing
                global program, Stepes combines experienced legal linguists,
                secure enterprise workflows, advanced language technology,
                terminology control, and professional human review.
              </p>

              <div className="ltw-final__actions">
                <a
                  className="ltw-button ltw-final__primary"
                  href="https://www.stepes.com/contact-sales/"
                >
                  <span>Talk to a Legal Translation Expert</span>
                  <Arrow />
                </a>

                <a
                  className="ltw-button ltw-final__secondary"
                  href="https://www.stepes.com/online-translation-quote/"
                >
                  <span>Request a Quote</span>
                  <Arrow />
                </a>
              </div>

              <p className="ltw-final__support">
                Discuss your document types, languages, confidentiality
                requirements, review process, and delivery timeline with the
                Stepes legal translation team.
              </p>
            </div>
          </div>
        </section>

      </main>

      <style>{`
        :root {
          --ltw-magenta: #c11d63;
          --ltw-magenta-dark: #9f1d55;
          --ltw-magenta-deep: #7a1542;
          --ltw-magenta-soft: #fdf2f7;
          --ltw-ink: #111827;
          --ltw-text: #334155;
          --ltw-muted: #64748b;
          --ltw-line: #e4e8ef;
          --ltw-line-strong: #d7dde7;
          --ltw-surface: #ffffff;
          --ltw-surface-soft: #f7f8fa;
        }

        .ltw-page,
        .ltw-page * {
          box-sizing: border-box;
        }

        .ltw-page {
          width: 100%;
          overflow: hidden;
          background: var(--ltw-surface);
          color: var(--ltw-ink);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .ltw-page a {
          text-decoration: none;
        }

        .ltw-shell {
          width: min(100%, 1392px);
          max-width: 1392px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .ltw-page .ltw-eyebrow {
          margin: 0;
          color: var(--ltw-magenta-dark);
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-eyebrow--muted {
          color: #7a294f;
        }

        .ltw-hero {
          border-top: 1px solid #eef1f5;
          background: #ffffff;
        }

        .ltw-hero__inner {
          display: flex;
          min-height: 548px;
          padding-top: 104px;
          padding-bottom: 92px;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }

        .ltw-hero__title {
          max-width: 930px;
          margin: 18px auto 0;
          color: var(--ltw-ink);
          font-size: 48px;
          font-weight: 750;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }

        .ltw-hero__copy {
          max-width: 790px;
          margin: 24px auto 0;
          color: var(--ltw-text);
          font-size: 18px;
          line-height: 1.7;
        }

        .ltw-hero__actions {
          display: flex;
          margin-top: 34px;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .ltw-button {
          display: inline-flex;
          min-height: 50px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          align-items: center;
          gap: 10px;
          justify-content: center;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease;
        }

        .ltw-button svg,
        .ltw-editorial-link svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .ltw-button:hover,
        .ltw-button:focus-visible {
          transform: translateY(-1px);
        }

        .ltw-button:hover svg,
        .ltw-button:focus-visible svg,
        .ltw-editorial-link:hover svg,
        .ltw-editorial-link:focus-visible svg {
          transform: translateX(3px);
        }

        .ltw-button:focus-visible,
        .ltw-editorial-link:focus-visible,
        .ltw-proof__item:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .ltw-page a.ltw-button--primary,
        .ltw-page a.ltw-button--primary:visited {
          background: var(--ltw-magenta) !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .ltw-page a.ltw-button--primary span {
          background: transparent !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .ltw-page a.ltw-button--primary {
          box-shadow: 0 10px 22px rgba(193, 29, 99, 0.2);
        }

        .ltw-page a.ltw-button--primary:hover,
        .ltw-page a.ltw-button--primary:focus-visible {
          background: var(--ltw-magenta-dark) !important;
          box-shadow: 0 12px 26px rgba(193, 29, 99, 0.25);
          color: #ffffff !important;
        }

        .ltw-page a.ltw-button--primary:hover span,
        .ltw-page a.ltw-button--primary:focus-visible span {
          background: transparent !important;
          color: #ffffff !important;
        }

        .ltw-page a.ltw-button--primary svg {
          color: #ffffff !important;
        }

        .ltw-page a.ltw-button--secondary,
        .ltw-page a.ltw-button--secondary:visited {
          border-color: #d8dee8;
          background: #ffffff !important;
          color: var(--ltw-ink) !important;
        }

        .ltw-page a.ltw-button--secondary:hover,
        .ltw-page a.ltw-button--secondary:focus-visible {
          border-color: rgba(193, 29, 99, 0.34);
          color: var(--ltw-magenta-dark) !important;
        }

        .ltw-hero__trust {
          display: inline-flex;
          max-width: 920px;
          margin: 30px auto 0;
          align-items: center;
          color: #566276;
          font-size: 14px;
          font-weight: 540;
          gap: 10px;
          justify-content: center;
          line-height: 1.55;
        }

        .ltw-hero__trust-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--ltw-magenta);
          flex: 0 0 6px;
        }

        .ltw-proof {
          background: #ffffff;
        }

        .ltw-proof .ltw-shell {
          padding-top: 44px;
          padding-bottom: 54px;
        }

        .ltw-proof__header {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          justify-content: space-between;
        }

        .ltw-editorial-link,
        .ltw-editorial-link:visited {
          display: inline-flex;
          align-items: center;
          color: var(--ltw-magenta-dark) !important;
          font-size: 14px;
          font-weight: 720;
          gap: 7px;
          line-height: 1.3;
          transition: color 180ms ease;
        }

        .ltw-editorial-link:hover,
        .ltw-editorial-link:focus-visible {
          color: var(--ltw-magenta-deep) !important;
        }

        .ltw-proof__grid {
          display: grid;
          padding-top: 26px;
          padding-bottom: 28px;
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
          align-items: start;
          column-gap: 38px;
          row-gap: 32px;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .ltw-proof__item,
        .ltw-proof__item:visited {
          display: flex;
          min-height: 0;
          padding: 0;
          border: 0 !important;
          background: transparent;
          color: inherit;
          flex-direction: column;
        }

        .ltw-proof__item:hover,
        .ltw-proof__item:focus-visible {
          background: transparent;
        }

        .ltw-proof__title {
          padding-right: 4px;
          color: var(--ltw-ink);
          font-size: 16px;
          font-weight: 750;
          letter-spacing: -0.01em;
          line-height: 1.35;
          transition: color 180ms ease;
        }

        .ltw-proof__item:hover .ltw-proof__title,
        .ltw-proof__item:focus-visible .ltw-proof__title {
          color: var(--ltw-magenta-dark);
        }

        .ltw-proof__description {
          margin-top: 9px;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.55;
        }

        .ltw-operations {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #ffffff;
        }

        .ltw-operations__layout {
          display: grid;
          align-items: start;
          gap: 78px;
          grid-template-columns: minmax(340px, 0.8fr) minmax(0, 1.45fr);
        }

        .ltw-operations__title {
          max-width: 520px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 750;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-operations__copy {
          max-width: 560px;
          margin-top: 25px;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
        }

        .ltw-operations__copy p {
          margin: 0;
        }

        .ltw-operations__copy p + p {
          margin-top: 18px;
        }

        .ltw-operations__standard {
          max-width: 560px;
          margin-top: 30px;
          padding: 20px 22px;
          border-left: 3px solid var(--ltw-magenta);
          background: var(--ltw-surface-soft);
        }

        .ltw-operations__standard-label {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 760;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-operations__standard p {
          margin: 9px 0 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
        }

        .ltw-challenges {
          display: grid;
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ltw-challenge {
          display: grid;
          min-height: 164px;
          padding: 27px 28px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 18px;
          grid-template-columns: 38px minmax(0, 1fr);
        }

        .ltw-challenge:nth-child(odd) {
          border-right: 1px solid var(--ltw-line);
        }

        .ltw-challenge:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .ltw-challenge__number {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .ltw-challenge__content {
          min-width: 0;
        }

        .ltw-challenge__content h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 19px;
          font-weight: 730;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-challenge__content p {
          margin: 9px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.6;
        }


        .ltw-section-heading {
          max-width: 820px;
        }

        .ltw-section-heading--center {
          margin: 0 auto;
          text-align: center;
        }

        .ltw-section-heading h2,
        .ltw-audiences__header h2,
        .ltw-risk__header h2 {
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 750;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-section-heading > p:last-child {
          margin: 23px auto 0;
          color: var(--ltw-text);
          font-size: 18px;
          line-height: 1.7;
        }

        .ltw-scope {
          padding-top: 96px;
          padding-bottom: 96px;
          border-top: 1px solid var(--ltw-line);
          background: #ffffff;
        }

        .ltw-scope__grid {
          display: grid;
          margin-top: 54px;
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ltw-scope__item {
          display: grid;
          min-height: 218px;
          padding: 30px 32px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: start;
          gap: 22px;
          grid-template-columns: 34px minmax(0, 1fr);
        }

        .ltw-scope__item:nth-child(odd) {
          border-right: 1px solid var(--ltw-line);
        }

        .ltw-scope__item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .ltw-scope__index {
          padding-top: 4px;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .ltw-scope__content {
          min-width: 0;
        }

        .ltw-scope__content h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 22px;
          font-weight: 730;
          letter-spacing: -0.02em;
          line-height: 1.28;
        }

        .ltw-scope__content p {
          margin: 13px 0 0;
          color: var(--ltw-muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .ltw-scope__link {
          margin-top: 18px;
        }

        .ltw-audiences {
          padding-top: 96px;
          padding-bottom: 96px;
          background: var(--ltw-surface-soft);
        }

        .ltw-audiences__header {
          display: grid;
          align-items: end;
          gap: 70px;
          grid-template-columns: minmax(360px, 0.95fr) minmax(0, 1.05fr);
        }

        .ltw-audiences__header h2 {
          max-width: 600px;
        }

        .ltw-audiences__intro {
          max-width: 620px;
          justify-self: end;
        }

        .ltw-audiences__intro p {
          margin: 0;
          color: var(--ltw-text);
          font-size: 18px;
          line-height: 1.7;
        }

        .ltw-audiences__grid {
          display: grid;
          margin-top: 52px;
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ltw-audiences__item {
          min-height: 176px;
          padding: 28px 29px;
          border-right: 1px solid var(--ltw-line);
          border-bottom: 1px solid var(--ltw-line);
        }

        .ltw-audiences__item:nth-child(3n) {
          border-right: 0;
        }

        .ltw-audiences__item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .ltw-audiences__item h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 20px;
          font-weight: 730;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-audiences__item p {
          margin: 12px 0 0;
          color: var(--ltw-muted);
          font-size: 15px;
          line-height: 1.65;
        }

        .ltw-audiences__closing {
          max-width: 900px;
          margin: 31px auto 0;
          color: #475569;
          font-size: 16px;
          font-weight: 570;
          line-height: 1.65;
          text-align: center;
        }

        .ltw-risk {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #111827;
          color: #ffffff;
        }

        .ltw-risk__header {
          display: grid;
          align-items: end;
          gap: 24px 62px;
          grid-template-columns: minmax(360px, 0.95fr) minmax(0, 1.05fr);
        }

        .ltw-page .ltw-risk__eyebrow {
          grid-column: 1 / -1;
          color: #f7c6dc;
        }

        .ltw-risk__header h2 {
          margin-top: 0;
          color: #ffffff;
        }

        .ltw-risk__header > p:last-child {
          max-width: 620px;
          margin: 0;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.72;
          justify-self: end;
        }

        .ltw-risk__grid {
          display: grid;
          margin-top: 56px;
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ltw-risk__item {
          min-height: 452px;
          padding: 30px 27px 31px;
          border-right: 1px solid rgba(255, 255, 255, 0.14);
        }

        .ltw-risk__item:last-child {
          border-right: 0;
        }

        .ltw-risk__number {
          display: block;
          color: #f1a8c8;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1;
        }

        .ltw-risk__item h3 {
          margin: 20px 0 0;
          color: #ffffff;
          font-size: 21px;
          font-weight: 730;
          letter-spacing: -0.018em;
          line-height: 1.35;
        }

        .ltw-risk__description {
          margin: 15px 0 0;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.68;
        }

        .ltw-risk__fit {
          margin-top: 27px;
          padding-top: 23px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .ltw-risk__fit > span {
          color: #ffffff;
          font-size: 12px;
          font-weight: 760;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-risk__fit ul {
          margin: 15px 0 0;
          padding: 0;
          list-style: none;
        }

        .ltw-risk__fit li {
          position: relative;
          margin: 0;
          padding-left: 17px;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.55;
        }

        .ltw-risk__fit li + li {
          margin-top: 9px;
        }

        .ltw-risk__fit li::before {
          position: absolute;
          top: 0.68em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--ltw-magenta);
          content: "";
          transform: translateY(-50%);
        }

        .ltw-risk__footer {
          display: flex;
          margin-top: 32px;
          align-items: center;
          gap: 34px;
          justify-content: space-between;
        }

        .ltw-risk__footer p {
          max-width: 820px;
          margin: 0;
          color: #aeb9c9;
          font-size: 14px;
          line-height: 1.65;
        }

        .ltw-risk__link,
        .ltw-risk__link:visited {
          display: inline-flex;
          min-width: max-content;
          align-items: center;
          color: #ffffff;
          font-size: 14px;
          font-weight: 720;
          gap: 7px;
          line-height: 1.3;
          transition: color 180ms ease;
        }

        .ltw-risk__link svg {
          color: #f1a8c8;
          transition: transform 180ms ease;
        }

        .ltw-risk__link:hover,
        .ltw-risk__link:focus-visible {
          color: #f1a8c8;
        }

        .ltw-risk__link:hover svg,
        .ltw-risk__link:focus-visible svg {
          transform: translateX(3px);
        }

        .ltw-risk__link:focus-visible {
          outline: 3px solid rgba(241, 168, 200, 0.28);
          outline-offset: 4px;
        }


        .ltw-security {
          padding-top: 96px;
          padding-bottom: 96px;
          background: var(--ltw-surface-soft);
        }

        .ltw-security__layout {
          display: grid;
          align-items: start;
          gap: 78px;
          grid-template-columns: minmax(330px, 0.82fr) minmax(0, 1.38fr);
        }

        .ltw-security__intro {
          position: sticky;
          top: 36px;
        }

        .ltw-security__intro h2,
        .ltw-terminology__header h2 {
          max-width: 570px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 750;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-security__intro > p {
          max-width: 570px;
          margin: 24px 0 0;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
        }

        .ltw-security__note {
          max-width: 570px;
          margin-top: 30px;
          padding: 21px 23px;
          border-left: 3px solid var(--ltw-magenta);
          background: #ffffff;
        }

        .ltw-security__note span,
        .ltw-ai__system-label,
        .ltw-ai__emphasis span {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-security__note p {
          margin: 9px 0 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-security__link {
          margin-top: 24px;
        }

        .ltw-security__controls {
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
        }

        .ltw-security__control {
          display: grid;
          min-height: 124px;
          padding: 26px 2px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 22px;
          grid-template-columns: 38px minmax(185px, 0.55fr) minmax(0, 1fr);
        }

        .ltw-security__control:last-child {
          border-bottom: 0;
        }

        .ltw-security__number {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .ltw-security__control h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 19px;
          font-weight: 730;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-security__control p {
          margin: 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-ai {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #ffffff;
        }

        .ltw-ai__system {
          margin-top: 54px;
          border: 1px solid var(--ltw-line-strong);
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
        }

        .ltw-ai__system-intro {
          display: grid;
          padding: 31px 34px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: start;
          gap: 54px;
          grid-template-columns: minmax(200px, 0.42fr) minmax(0, 1.58fr);
        }

        .ltw-ai__system-intro p {
          max-width: 820px;
          margin: 0;
          color: var(--ltw-text);
          font-size: 16px;
          line-height: 1.68;
        }

        .ltw-ai__stages {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ltw-ai__stage {
          min-height: 232px;
          padding: 29px 27px 30px;
          border-right: 1px solid var(--ltw-line);
        }

        .ltw-ai__stage:last-child {
          border-right: 0;
        }

        .ltw-ai__number {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          line-height: 1;
        }

        .ltw-ai__stage h3 {
          margin: 20px 0 0;
          color: var(--ltw-ink);
          font-size: 20px;
          font-weight: 730;
          letter-spacing: -0.018em;
          line-height: 1.35;
        }

        .ltw-ai__stage p {
          margin: 13px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.65;
        }

        .ltw-ai__emphasis {
          display: flex;
          padding: 26px 34px;
          border-top: 1px solid var(--ltw-line);
          align-items: center;
          background: var(--ltw-magenta-soft);
          gap: 36px;
          justify-content: space-between;
        }

        .ltw-ai__emphasis > div {
          max-width: 780px;
        }

        .ltw-ai__emphasis p {
          margin: 8px 0 0;
          color: #5b3547;
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-ai__link {
          min-width: max-content;
        }

        .ltw-terminology {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #fbfafb;
        }

        .ltw-terminology__header {
          display: grid;
          align-items: end;
          gap: 72px;
          grid-template-columns: minmax(350px, 0.92fr) minmax(0, 1.08fr);
        }

        .ltw-terminology__intro {
          max-width: 650px;
          justify-self: end;
        }

        .ltw-terminology__intro p {
          margin: 0;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
        }

        .ltw-terminology__intro p + p {
          margin-top: 16px;
        }

        .ltw-terminology__matrix {
          display: grid;
          margin-top: 52px;
          border-top: 1px solid #e1dde0;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ltw-terminology__item {
          min-height: 178px;
          padding: 28px 30px;
          border-right: 1px solid #e8e3e6;
          border-bottom: 1px solid #e8e3e6;
        }

        .ltw-terminology__item:nth-child(3n) {
          border-right: 0;
        }

        .ltw-terminology__item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .ltw-terminology__item h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 20px;
          font-weight: 730;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-terminology__item p {
          margin: 12px 0 0;
          color: #665b61;
          font-size: 14px;
          line-height: 1.65;
        }

        .ltw-terminology__boundary {
          position: relative;
          display: grid;
          margin-top: 34px;
          padding: 24px 28px 24px 31px;
          border: 1px solid #e4e0e3;
          border-radius: 20px;
          align-items: center;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.045);
          gap: 38px;
          grid-template-columns: minmax(235px, 0.46fr) minmax(0, 1.54fr);
        }

        .ltw-terminology__boundary::before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 3px;
          background: var(--ltw-magenta);
          content: "";
        }

        .ltw-terminology__boundary-heading span {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        .ltw-terminology__boundary-heading strong {
          display: block;
          margin-top: 7px;
          color: var(--ltw-ink);
          font-size: 17px;
          font-weight: 720;
          letter-spacing: -0.012em;
          line-height: 1.4;
        }

        .ltw-terminology__boundary p {
          max-width: 850px;
          margin: 0;
          color: #665b61;
          font-size: 14px;
          line-height: 1.65;
        }


        .ltw-engagement {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #ffffff;
        }

        .ltw-engagement__header {
          display: grid;
          align-items: end;
          gap: 72px;
          grid-template-columns: minmax(360px, 0.94fr) minmax(0, 1.06fr);
        }

        .ltw-engagement__header h2 {
          max-width: 610px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 750;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-engagement__intro {
          max-width: 650px;
          justify-self: end;
        }

        .ltw-engagement__intro p {
          margin: 0;
          color: var(--ltw-text);
          font-size: 18px;
          line-height: 1.7;
        }

        .ltw-engagement__models {
          display: grid;
          margin-top: 54px;
          border: 1px solid var(--ltw-line-strong);
          border-radius: 24px;
          overflow: hidden;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ltw-engagement__model {
          min-height: 420px;
          padding: 36px 38px 38px;
          background: #ffffff;
        }

        .ltw-engagement__model + .ltw-engagement__model {
          border-left: 1px solid var(--ltw-line);
        }

        .ltw-engagement__model--program {
          background: var(--ltw-surface-soft);
        }

        .ltw-engagement__label {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-engagement__model h3 {
          max-width: 500px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 24px;
          font-weight: 740;
          letter-spacing: -0.022em;
          line-height: 1.3;
        }

        .ltw-engagement__description {
          max-width: 540px;
          margin: 15px 0 0;
          color: var(--ltw-text);
          font-size: 15px;
          line-height: 1.68;
        }

        .ltw-engagement__model ul {
          margin: 27px 0 0;
          padding: 24px 0 0;
          border-top: 1px solid var(--ltw-line);
          list-style: none;
        }

        .ltw-engagement__model li {
          position: relative;
          padding-left: 19px;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.58;
        }

        .ltw-engagement__model li + li {
          margin-top: 11px;
        }

        .ltw-engagement__model li::before {
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--ltw-magenta);
          content: "";
          transform: translateY(-50%);
        }

        .ltw-engagement__footer {
          display: flex;
          margin-top: 30px;
          align-items: center;
          gap: 36px;
          justify-content: space-between;
        }

        .ltw-engagement__footer p {
          max-width: 760px;
          margin: 0;
          color: #475569;
          font-size: 15px;
          line-height: 1.65;
        }

        .ltw-engagement__footer .ltw-button {
          min-width: max-content;
        }

        .ltw-quality {
          padding-top: 104px;
          padding-bottom: 104px;
          background: var(--ltw-surface-soft);
          color: var(--ltw-ink);
        }

        .ltw-quality__layout {
          display: grid;
          align-items: start;
          gap: 78px;
          grid-template-columns: minmax(330px, 0.83fr) minmax(0, 1.37fr);
        }

        .ltw-quality__intro {
          position: sticky;
          top: 36px;
        }

        .ltw-quality__eyebrow {
          color: var(--ltw-magenta-dark);
        }

        .ltw-quality__intro h2 {
          max-width: 570px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-quality__intro > p {
          max-width: 570px;
          margin: 22px 0 0;
          color: var(--ltw-text);
          font-size: 16px;
          line-height: 1.72;
        }

        .ltw-quality__proof {
          max-width: 570px;
          margin-top: 30px;
          padding: 22px 23px;
          border-left: 3px solid var(--ltw-magenta);
          background: #ffffff;
        }

        .ltw-quality__proof span {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-quality__proof p {
          margin: 9px 0 0;
          color: var(--ltw-text);
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-quality__link,
        .ltw-quality__link:visited {
          display: inline-flex;
          margin-top: 24px;
          align-items: center;
          color: var(--ltw-magenta-dark);
          font-size: 14px;
          font-weight: 600;
          gap: 7px;
          line-height: 1.3;
          transition: color 180ms ease;
        }

        .ltw-quality__link svg {
          color: var(--ltw-magenta);
          transition: transform 180ms ease;
        }

        .ltw-quality__link:hover,
        .ltw-quality__link:focus-visible {
          color: var(--ltw-magenta-deep);
        }

        .ltw-quality__link:hover svg,
        .ltw-quality__link:focus-visible svg {
          transform: translateX(3px);
        }

        .ltw-quality__link:focus-visible {
          outline: 3px solid rgba(241, 168, 200, 0.28);
          outline-offset: 4px;
        }

        .ltw-quality__steps {
          border-top: 1px solid var(--ltw-line-strong);
        }

        .ltw-quality__step {
          display: grid;
          min-height: 126px;
          padding: 27px 2px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 22px;
          grid-template-columns: 40px minmax(0, 1fr);
        }

        .ltw-quality__step:last-child {
          border-bottom: 0;
        }

        .ltw-quality__number {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          line-height: 1;
        }

        .ltw-quality__step h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-quality__step p {
          margin: 8px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-languages {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #ffffff;
        }

        .ltw-languages__panel {
          margin-top: 52px;
          border: 1px solid var(--ltw-line-strong);
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
        }

        .ltw-languages__panel-header {
          display: flex;
          padding: 29px 34px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 36px;
          justify-content: space-between;
        }

        .ltw-languages__panel-header > div {
          max-width: 720px;
        }

        .ltw-languages__panel-header > div > span {
          display: block;
          color: var(--ltw-ink);
          font-size: 18px;
          font-weight: 730;
          letter-spacing: -0.012em;
          line-height: 1.4;
        }

        .ltw-languages__panel-header p {
          margin: 7px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .ltw-languages__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .ltw-languages__item {
          display: flex;
          min-height: 68px;
          padding: 18px 25px;
          border-right: 1px solid var(--ltw-line);
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 12px;
        }

        .ltw-languages__item:nth-child(4n) {
          border-right: 0;
        }

        .ltw-languages__item:nth-last-child(-n + 4) {
          border-bottom: 0;
        }

        .ltw-languages__item > span {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--ltw-magenta);
          flex: 0 0 auto;
        }

        .ltw-languages__item strong {
          color: var(--ltw-ink);
          font-size: 15px;
          font-weight: 650;
          line-height: 1.35;
        }

        .ltw-languages__coordination {
          display: grid;
          padding: 25px 34px;
          border-top: 1px solid var(--ltw-line);
          align-items: start;
          background: var(--ltw-surface-soft);
          gap: 42px;
          grid-template-columns: minmax(210px, 0.4fr) minmax(0, 1.6fr);
        }

        .ltw-languages__coordination span {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-languages__coordination p {
          max-width: 840px;
          margin: 0;
          color: var(--ltw-text);
          font-size: 14px;
          line-height: 1.65;
        }


        .ltw-practice {
          padding-top: 96px;
          padding-bottom: 96px;
          background: var(--ltw-surface-soft);
        }

        .ltw-practice__header {
          display: grid;
          align-items: end;
          gap: 72px;
          grid-template-columns: minmax(360px, 0.92fr) minmax(0, 1.08fr);
        }

        .ltw-practice__header h2,
        .ltw-related__header h2,
        .ltw-insights__header h2,
        .ltw-faq__intro h2 {
          max-width: 620px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 36px;
          font-weight: 750;
          letter-spacing: -0.03em;
          line-height: 1.13;
        }

        .ltw-practice__intro {
          max-width: 650px;
          justify-self: end;
        }

        .ltw-practice__intro > span {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-practice__intro p {
          margin: 9px 0 0;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
        }

        .ltw-practice__flow {
          display: grid;
          margin-top: 54px;
          border: 1px solid var(--ltw-line-strong);
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
        }

        .ltw-practice__column {
          padding: 37px 38px 39px;
        }

        .ltw-practice__column + .ltw-practice__column {
          border-left: 1px solid var(--ltw-line);
        }

        .ltw-practice__column--approach {
          background: #ffffff;
        }

        .ltw-practice__label {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-practice__column ul,
        .ltw-practice__column ol {
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
        }

        .ltw-practice__column ul li {
          position: relative;
          padding-left: 19px;
          color: var(--ltw-text);
          font-size: 15px;
          line-height: 1.6;
        }

        .ltw-practice__column ul li + li {
          margin-top: 13px;
        }

        .ltw-practice__column ul li::before {
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--ltw-magenta);
          content: "";
          transform: translateY(-50%);
        }

        .ltw-practice__column ol li {
          display: grid;
          min-height: 54px;
          padding: 13px 0;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          gap: 18px;
          grid-template-columns: 34px minmax(0, 1fr);
        }

        .ltw-practice__column ol li:first-child {
          padding-top: 0;
        }

        .ltw-practice__column ol li:last-child {
          padding-bottom: 0;
          border-bottom: 0;
        }

        .ltw-practice__column ol li > span {
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .ltw-practice__column ol li strong {
          color: var(--ltw-ink);
          font-size: 15px;
          font-weight: 650;
          line-height: 1.45;
        }

        .ltw-practice__outcome {
          display: flex;
          margin-top: 28px;
          padding: 25px 30px;
          border-left: 3px solid var(--ltw-magenta);
          align-items: center;
          background: #ffffff;
          gap: 36px;
          justify-content: space-between;
        }

        .ltw-practice__outcome > div {
          max-width: 800px;
        }

        .ltw-practice__outcome > div > span {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 12px;
          font-weight: 780;
          letter-spacing: 0.08em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-practice__outcome p {
          margin: 8px 0 0;
          color: var(--ltw-text);
          font-size: 14px;
          line-height: 1.65;
        }

        .ltw-practice__outcome .ltw-editorial-link {
          min-width: max-content;
        }

        .ltw-why {
          padding-top: 88px;
          padding-bottom: 88px;
          background: #ffffff;
        }

        .ltw-why__grid {
          display: grid;
          margin-top: 52px;
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ltw-why__item {
          min-height: 190px;
          padding: 30px 30px 31px;
          border-right: 1px solid var(--ltw-line);
          border-bottom: 1px solid var(--ltw-line);
        }

        .ltw-why__item:nth-child(3n) {
          border-right: 0;
        }

        .ltw-why__item:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .ltw-why__rule {
          display: block;
          width: 28px;
          height: 2px;
          border-radius: 999px;
          background: var(--ltw-magenta);
        }

        .ltw-why__item h3 {
          margin: 20px 0 0;
          color: var(--ltw-ink);
          font-size: 20px;
          font-weight: 730;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-why__item p {
          margin: 10px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-related {
          padding-top: 104px;
          padding-bottom: 104px;
          background: #ffffff;
          color: var(--ltw-ink);
        }

        .ltw-related__header,
        .ltw-insights__header {
          display: grid;
          align-items: end;
          gap: 72px;
          grid-template-columns: minmax(360px, 0.94fr) minmax(0, 1.06fr);
        }

        .ltw-related__header .ltw-eyebrow {
          color: var(--ltw-magenta-dark);
        }

        .ltw-related__header h2 {
          color: var(--ltw-ink);
        }

        .ltw-related__header > p {
          max-width: 620px;
          margin: 0;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
          justify-self: end;
        }

        .ltw-related__list {
          display: grid;
          margin-top: 58px;
          border-top: 1px solid var(--ltw-line-strong);
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ltw-related__item,
        .ltw-related__item:visited {
          display: flex;
          min-height: 138px;
          padding: 29px 30px;
          border-bottom: 1px solid var(--ltw-line);
          align-items: center;
          color: var(--ltw-ink);
          gap: 24px;
          justify-content: space-between;
          transition:
            background-color 180ms ease,
            color 180ms ease;
        }

        .ltw-related__item:nth-child(odd) {
          border-right: 1px solid var(--ltw-line);
        }

        .ltw-related__item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .ltw-related__item:hover,
        .ltw-related__item:focus-visible {
          background: var(--ltw-surface-soft);
        }

        .ltw-related__item:focus-visible {
          outline: 3px solid rgba(241, 168, 200, 0.28);
          outline-offset: -3px;
        }

        .ltw-related__item > div {
          min-width: 0;
        }

        .ltw-related__item h3 {
          margin: 0;
          color: var(--ltw-ink);
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.015em;
          line-height: 1.35;
        }

        .ltw-related__item p {
          margin: 9px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .ltw-related__item > svg {
          color: var(--ltw-magenta);
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .ltw-related__item:hover > svg,
        .ltw-related__item:focus-visible > svg {
          transform: translateX(3px);
        }

        .ltw-insights {
          padding-top: 104px;
          padding-bottom: 104px;
          background: var(--ltw-surface-soft);
        }

        .ltw-insights__header h2 {
          margin-top: 17px;
        }

        .ltw-insights__header > p {
          max-width: 650px;
          margin: 0;
          color: var(--ltw-text);
          font-size: 17px;
          line-height: 1.72;
          justify-self: end;
        }

        .ltw-insights__grid {
          display: grid;
          margin-top: 52px;
          border: 1px solid var(--ltw-line-strong);
          border-radius: 24px;
          overflow: hidden;
          background: #ffffff;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ltw-insights__item,
        .ltw-insights__item:visited {
          position: relative;
          min-height: 240px;
          padding: 29px 31px 28px;
          border-right: 1px solid var(--ltw-line);
          border-bottom: 1px solid var(--ltw-line);
          color: inherit;
          transition: background-color 180ms ease;
        }

        .ltw-insights__item:nth-child(even) {
          border-right: 0;
        }

        .ltw-insights__item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .ltw-insights__item:hover,
        .ltw-insights__item:focus-visible {
          background: #fffafd;
        }

        .ltw-insights__item:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.2);
          outline-offset: -3px;
        }

        .ltw-insights__category {
          display: block;
          color: var(--ltw-magenta-dark);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-insights__item h3 {
          max-width: 520px;
          margin: 17px 0 0;
          color: var(--ltw-ink);
          font-size: 21px;
          font-weight: 730;
          letter-spacing: -0.018em;
          line-height: 1.35;
        }

        .ltw-insights__item p {
          max-width: 560px;
          margin: 12px 0 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.62;
        }

        .ltw-insights__action {
          display: inline-flex;
          margin-top: 22px;
          align-items: center;
          color: var(--ltw-magenta-dark);
          font-size: 14px;
          font-weight: 720;
          gap: 7px;
        }

        .ltw-insights__action svg {
          transition: transform 180ms ease;
        }

        .ltw-insights__item:hover .ltw-insights__action svg,
        .ltw-insights__item:focus-visible .ltw-insights__action svg {
          transform: translateX(3px);
        }

        .ltw-faq {
          padding-top: 104px;
          padding-bottom: 104px;
          background: #ffffff;
        }

        .ltw-faq__layout {
          display: grid;
          align-items: start;
          gap: 78px;
          grid-template-columns: minmax(320px, 0.74fr) minmax(0, 1.46fr);
        }

        .ltw-faq__intro {
          position: sticky;
          top: 36px;
        }

        .ltw-faq__intro > p {
          max-width: 540px;
          margin: 28px 0 0;
          color: var(--ltw-text);
          font-size: 16px;
          line-height: 1.7;
        }

        .ltw-faq__intro .ltw-editorial-link {
          margin-top: 24px;
        }

        .ltw-faq__panel {
          border-top: 1px solid var(--ltw-line-strong);
          border-bottom: 1px solid var(--ltw-line-strong);
        }

        .ltw-faq__item {
          border-bottom: 1px solid var(--ltw-line);
        }

        .ltw-faq__item:last-child {
          border-bottom: 0;
        }

        .ltw-faq__item summary {
          display: grid;
          min-height: 74px;
          padding: 20px 2px;
          align-items: center;
          cursor: pointer;
          gap: 24px;
          grid-template-columns: minmax(0, 1fr) 28px;
          list-style: none;
        }

        .ltw-faq__item summary::-webkit-details-marker {
          display: none;
        }

        .ltw-faq__item summary > span:first-child {
          color: var(--ltw-ink);
          font-size: 17px;
          font-weight: 680;
          line-height: 1.45;
        }

        .ltw-faq__toggle {
          position: relative;
          width: 28px;
          height: 28px;
          border: 1px solid #d9dee7;
          border-radius: 999px;
        }

        .ltw-faq__toggle::before,
        .ltw-faq__toggle::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 1.5px;
          background: var(--ltw-magenta-dark);
          content: "";
          transform: translate(-50%, -50%);
          transition: transform 180ms ease;
        }

        .ltw-faq__toggle::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .ltw-faq__item[open] .ltw-faq__toggle::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .ltw-faq__answer {
          padding: 0 56px 24px 2px;
        }

        .ltw-faq__answer p {
          max-width: 800px;
          margin: 0;
          color: var(--ltw-muted);
          font-size: 15px;
          line-height: 1.68;
        }

        .ltw-final {
          padding-top: 72px;
          padding-bottom: 80px;
          background: #ffffff;
        }

        .ltw-final__panel {
          position: relative;
          padding: 70px 70px 68px;
          border: 1px solid #e5e0e4;
          border-radius: 24px;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(253, 242, 247, 0.72) 0%, rgba(248, 250, 252, 0.96) 66%, #ffffff 100%);
          box-shadow: 0 16px 42px rgba(15, 23, 42, 0.075);
          color: var(--ltw-ink);
          text-align: center;
        }

        .ltw-final__panel::before {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 3px;
          background: var(--ltw-magenta);
          content: "";
        }

        .ltw-final__panel h2 {
          max-width: 860px;
          margin: 0 auto;
          color: var(--ltw-ink);
          font-size: 40px;
          font-weight: 750;
          letter-spacing: -0.035em;
          line-height: 1.12;
        }

        .ltw-final__panel > p:not(.ltw-final__support) {
          max-width: 820px;
          margin: 23px auto 0;
          color: var(--ltw-text);
          font-size: 18px;
          line-height: 1.7;
        }

        .ltw-final__actions {
          display: flex;
          margin-top: 31px;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .ltw-page a.ltw-final__primary,
        .ltw-page a.ltw-final__primary:visited {
          border-color: var(--ltw-magenta) !important;
          background: var(--ltw-magenta) !important;
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.23);
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .ltw-page a.ltw-final__primary span,
        .ltw-page a.ltw-final__primary svg {
          background: transparent !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .ltw-page a.ltw-final__primary:hover,
        .ltw-page a.ltw-final__primary:focus-visible {
          border-color: var(--ltw-magenta-dark) !important;
          background: var(--ltw-magenta-dark) !important;
          color: #ffffff !important;
        }

        .ltw-final__secondary,
        .ltw-final__secondary:visited {
          border-color: #d8dee8;
          background: #ffffff;
          color: var(--ltw-ink);
        }

        .ltw-final__secondary:hover,
        .ltw-final__secondary:focus-visible {
          border-color: rgba(193, 29, 99, 0.38);
          background: #ffffff;
          color: var(--ltw-magenta-dark);
        }

        .ltw-final__support {
          max-width: 760px;
          margin: 23px auto 0;
          color: var(--ltw-muted);
          font-size: 14px;
          line-height: 1.6;
        }


        .ltw-proof__item,
        .ltw-related__item,
        .ltw-insights__item {
          cursor: pointer;
        }

        .ltw-faq__item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.2);
          outline-offset: 3px;
          border-radius: 8px;
        }


        /* Site-wide hierarchy normalization */
        .ltw-page h1,
        .ltw-page h2 {
          font-weight: 600;
        }

        .ltw-page .ltw-heading--no-eyebrow {
          margin-top: 0;
        }

        .ltw-page h3 {
          font-weight: 600;
        }

        .ltw-engagement__label,
        .ltw-practice__intro > span,
        .ltw-practice__label,
        .ltw-practice__outcome > div > span,
        .ltw-languages__coordination span,
        .ltw-ai__system-label,
        .ltw-ai__emphasis span,
        .ltw-security__note span,
        .ltw-terminology__boundary-heading span,
        .ltw-insights__category,
        .ltw-quality__proof span {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .ltw-operations,
        .ltw-scope,
        .ltw-audiences,
        .ltw-risk,
        .ltw-security,
        .ltw-ai,
        .ltw-terminology,
        .ltw-engagement,
        .ltw-languages,
        .ltw-practice {
          padding-top: 104px;
          padding-bottom: 104px;
        }

        @media (max-width: 1180px) {
          .ltw-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .ltw-operations__layout {
            gap: 56px;
            grid-template-columns: minmax(310px, 0.82fr) minmax(0, 1.25fr);
          }

          .ltw-challenge {
            min-height: 180px;
            padding: 26px 23px;
          }

          .ltw-scope__item {
            min-height: 252px;
            padding: 29px 27px;
          }

          .ltw-audiences__header {
            gap: 52px;
          }

          .ltw-audiences__item {
            min-height: 205px;
            padding: 28px 25px;
          }

          .ltw-risk__item {
            min-height: 510px;
            padding: 29px 23px 31px;
          }

          .ltw-security__layout {
            gap: 56px;
            grid-template-columns: minmax(310px, 0.84fr) minmax(0, 1.25fr);
          }

          .ltw-security__control {
            gap: 18px;
            grid-template-columns: 34px minmax(165px, 0.56fr) minmax(0, 1fr);
          }

          .ltw-ai__stage {
            min-height: 275px;
            padding: 29px 23px 30px;
          }

          .ltw-terminology__header {
            gap: 54px;
          }

          .ltw-terminology__item {
            min-height: 205px;
            padding: 28px 25px;
          }

          .ltw-engagement__header {
            gap: 54px;
          }

          .ltw-engagement__model {
            min-height: 470px;
            padding: 35px 34px 37px;
          }

          .ltw-quality__layout {
            gap: 56px;
            grid-template-columns: minmax(310px, 0.84fr) minmax(0, 1.25fr);
          }

          .ltw-languages__item {
            padding-left: 22px;
            padding-right: 22px;
          }

          .ltw-practice__header,
          .ltw-related__header,
          .ltw-insights__header {
            gap: 54px;
          }

          .ltw-practice__column {
            padding: 34px 32px 36px;
          }

          .ltw-faq__layout {
            gap: 56px;
            grid-template-columns: minmax(300px, 0.76fr) minmax(0, 1.35fr);
          }

          .ltw-final__panel {
            padding-left: 54px;
            padding-right: 54px;
          }
        }

        @media (max-width: 1040px) {
          .ltw-proof__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-proof__item {
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-proof__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-proof__item:last-child {
            border-right: 0;
            border-bottom: 0;
            grid-column: 1 / -1;
          }

          .ltw-audiences__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-audiences__item,
          .ltw-audiences__item:nth-child(3n),
          .ltw-audiences__item:nth-last-child(-n + 3) {
            border-right: 1px solid var(--ltw-line);
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-audiences__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-audiences__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-risk__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-risk__item {
            min-height: 0;
            border-right: 1px solid rgba(255, 255, 255, 0.14);
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          }

          .ltw-risk__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-risk__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-ai__stages {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-ai__stage {
            min-height: 0;
            border-right: 1px solid var(--ltw-line);
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-ai__stage:nth-child(even) {
            border-right: 0;
          }

          .ltw-ai__stage:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-terminology__matrix {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-terminology__item,
          .ltw-terminology__item:nth-child(3n),
          .ltw-terminology__item:nth-last-child(-n + 3) {
            border-right: 1px solid #e8e3e6;
            border-bottom: 1px solid #e8e3e6;
          }

          .ltw-terminology__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-terminology__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-languages__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-languages__item,
          .ltw-languages__item:nth-child(4n),
          .ltw-languages__item:nth-last-child(-n + 4) {
            border-right: 1px solid var(--ltw-line);
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-languages__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-languages__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-why__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ltw-why__item,
          .ltw-why__item:nth-child(3n),
          .ltw-why__item:nth-last-child(-n + 3) {
            border-right: 1px solid var(--ltw-line);
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-why__item:nth-child(even) {
            border-right: 0;
          }

          .ltw-why__item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .ltw-practice__flow {
            grid-template-columns: 1fr;
          }

          .ltw-practice__column + .ltw-practice__column {
            border-top: 1px solid var(--ltw-line);
            border-left: 0;
          }
        }

        @media (max-width: 920px) {
          .ltw-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .ltw-hero__inner {
            min-height: 520px;
            padding-top: 88px;
            padding-bottom: 80px;
          }

          .ltw-hero__title {
            max-width: 820px;
            font-size: 42px;
          }

          .ltw-operations {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ltw-operations__layout {
            gap: 50px;
            grid-template-columns: 1fr;
          }

          .ltw-operations__title {
            max-width: 760px;
            font-size: 32px;
          }

          .ltw-operations__copy,
          .ltw-operations__standard {
            max-width: 760px;
          }

          .ltw-scope,
          .ltw-audiences,
          .ltw-risk {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ltw-section-heading h2,
          .ltw-audiences__header h2,
          .ltw-risk__header h2 {
            font-size: 32px;
          }

          .ltw-scope__grid {
            margin-top: 48px;
          }

          .ltw-audiences__header,
          .ltw-risk__header {
            gap: 24px;
            grid-template-columns: 1fr;
          }

          .ltw-audiences__intro,
          .ltw-risk__header > p:last-child {
            max-width: 760px;
            justify-self: start;
          }

          .ltw-page .ltw-risk__eyebrow {
            grid-column: auto;
            color: #f7c6dc;
          }

          .ltw-risk__grid {
            margin-top: 48px;
          }

          .ltw-risk__footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .ltw-security,
          .ltw-ai,
          .ltw-terminology {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ltw-security__layout {
            gap: 48px;
            grid-template-columns: 1fr;
          }

          .ltw-security__intro {
            position: static;
          }

          .ltw-security__intro h2,
          .ltw-terminology__header h2 {
            max-width: 760px;
            font-size: 32px;
          }

          .ltw-security__intro > p,
          .ltw-security__note {
            max-width: 760px;
          }

          .ltw-ai__system-intro {
            gap: 20px;
            grid-template-columns: 1fr;
          }

          .ltw-ai__emphasis {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .ltw-ai__link {
            min-width: 0;
          }

          .ltw-terminology__header {
            gap: 24px;
            grid-template-columns: 1fr;
          }

          .ltw-terminology__intro {
            max-width: 760px;
            justify-self: start;
          }

          .ltw-terminology__boundary {
            gap: 24px;
            grid-template-columns: minmax(210px, 0.5fr) minmax(0, 1.5fr);
          }

          .ltw-engagement,
          .ltw-quality,
          .ltw-languages {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ltw-engagement__header {
            gap: 24px;
            grid-template-columns: 1fr;
          }

          .ltw-engagement__header h2,
          .ltw-quality__intro h2 {
            max-width: 760px;
            font-size: 32px;
          }

          .ltw-engagement__intro {
            max-width: 760px;
            justify-self: start;
          }

          .ltw-engagement__models {
            margin-top: 48px;
          }

          .ltw-engagement__footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .ltw-engagement__footer .ltw-button {
            min-width: 0;
          }

          .ltw-quality__layout {
            gap: 48px;
            grid-template-columns: 1fr;
          }

          .ltw-quality__intro {
            position: static;
          }

          .ltw-quality__intro > p,
          .ltw-quality__proof {
            max-width: 760px;
          }

          .ltw-languages__panel-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
          }

          .ltw-practice,
          .ltw-why,
          .ltw-related,
          .ltw-insights,
          .ltw-faq {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .ltw-practice__header,
          .ltw-related__header,
          .ltw-insights__header {
            gap: 24px;
            grid-template-columns: 1fr;
          }

          .ltw-practice__header h2,
          .ltw-related__header h2,
          .ltw-insights__header h2,
          .ltw-faq__intro h2 {
            max-width: 760px;
            font-size: 32px;
          }

          .ltw-practice__intro,
          .ltw-related__header > p,
          .ltw-insights__header > p {
            max-width: 760px;
            justify-self: start;
          }

          .ltw-practice__outcome {
            align-items: flex-start;
            flex-direction: column;
            gap: 17px;
          }

          .ltw-practice__outcome .ltw-editorial-link {
            min-width: 0;
          }

          .ltw-faq__layout {
            gap: 46px;
            grid-template-columns: 1fr;
          }

          .ltw-faq__intro {
            position: static;
          }

          .ltw-faq__intro > p {
            max-width: 760px;
          }
        }

        @media (max-width: 680px) {
          .ltw-page {
            overflow-x: clip;
          }

          .ltw-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .ltw-page h1,
          .ltw-page h2,
          .ltw-page h3,
          .ltw-page p,
          .ltw-page li,
          .ltw-page a,
          .ltw-page span,
          .ltw-page strong {
            overflow-wrap: anywhere;
          }

          .ltw-button span,
          .ltw-editorial-link span,
          .ltw-risk__link span,
          .ltw-quality__link span,
          .ltw-insights__action {
            min-width: 0;
          }

          .ltw-editorial-link,
          .ltw-risk__link,
          .ltw-quality__link,
          .ltw-insights__action {
            max-width: 100%;
            white-space: normal;
          }

          .ltw-hero__inner {
            min-height: auto;
            padding-top: 72px;
            padding-bottom: 68px;
          }

          .ltw-hero__title {
            margin-top: 15px;
            font-size: 38px;
            line-height: 1.1;
          }

          .ltw-hero__copy {
            margin-top: 22px;
            font-size: 17px;
            line-height: 1.67;
          }

          .ltw-hero__actions {
            width: 100%;
            margin-top: 30px;
            flex-direction: column;
          }

          .ltw-button {
            width: 100%;
            min-height: 52px;
          }

          .ltw-hero__trust {
            align-items: flex-start;
            text-align: left;
          }

          .ltw-hero__trust-dot {
            margin-top: 8px;
          }

          .ltw-proof .ltw-shell {
            padding-top: 26px;
            padding-bottom: 28px;
          }

          .ltw-proof__header {
            margin-bottom: 20px;
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .ltw-proof__grid {
            padding-top: 10px;
            padding-bottom: 10px;
            grid-template-columns: 1fr;
          }

          .ltw-proof__item,
          .ltw-proof__item:nth-child(3n),
          .ltw-proof__item:nth-child(even),
          .ltw-proof__item:last-child {
            min-height: 0;
            padding: 24px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
            grid-column: auto;
          }

          .ltw-proof__item:last-child {
            border-bottom: 0;
          }

          .ltw-operations {
            padding-top: 68px;
            padding-bottom: 72px;
          }

          .ltw-operations__layout {
            gap: 40px;
          }

          .ltw-operations__title {
            font-size: 30px;
            line-height: 1.16;
          }

          .ltw-operations__copy {
            font-size: 16px;
            line-height: 1.7;
          }

          .ltw-operations__standard {
            margin-top: 26px;
            padding: 19px 20px;
          }

          .ltw-challenges {
            grid-template-columns: 1fr;
          }

          .ltw-challenge,
          .ltw-challenge:nth-child(odd),
          .ltw-challenge:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 24px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-challenge:last-child {
            border-bottom: 0;
          }

          .ltw-challenge__content h3 {
            font-size: 18px;
          }

          .ltw-scope,
          .ltw-audiences,
          .ltw-risk {
            padding-top: 68px;
            padding-bottom: 72px;
          }

          .ltw-section-heading h2,
          .ltw-audiences__header h2,
          .ltw-risk__header h2 {
            font-size: 30px;
            line-height: 1.16;
          }

          .ltw-section-heading > p:last-child,
          .ltw-audiences__intro p {
            font-size: 17px;
            line-height: 1.67;
          }

          .ltw-scope__grid {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .ltw-scope__item,
          .ltw-scope__item:nth-child(odd),
          .ltw-scope__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 26px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
            gap: 16px;
            grid-template-columns: 32px minmax(0, 1fr);
          }

          .ltw-scope__item:last-child {
            border-bottom: 0;
          }

          .ltw-scope__content h3 {
            font-size: 20px;
          }

          .ltw-audiences__grid {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .ltw-audiences__item,
          .ltw-audiences__item:nth-child(3n),
          .ltw-audiences__item:nth-last-child(-n + 3),
          .ltw-audiences__item:nth-child(even),
          .ltw-audiences__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 25px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-audiences__item:last-child {
            border-bottom: 0;
          }

          .ltw-audiences__item h3 {
            font-size: 19px;
          }

          .ltw-audiences__closing {
            margin-top: 26px;
            text-align: left;
          }

          .ltw-risk__header > p:last-child {
            font-size: 16px;
            line-height: 1.7;
          }

          .ltw-risk__header {
            gap: 20px;
          }

          .ltw-page .ltw-risk__eyebrow {
            margin-bottom: 2px;
          }

          .ltw-risk__grid {
            margin-top: 42px;
            grid-template-columns: 1fr;
          }

          .ltw-risk__item,
          .ltw-risk__item:nth-child(even),
          .ltw-risk__item:nth-last-child(-n + 2) {
            padding: 28px 0 30px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          }

          .ltw-risk__item:last-child {
            border-bottom: 0;
          }

          .ltw-risk__item h3 {
            font-size: 20px;
          }

          .ltw-risk__footer {
            margin-top: 26px;
          }

          .ltw-risk__link {
            min-width: 0;
          }

          .ltw-security,
          .ltw-ai,
          .ltw-terminology {
            padding-top: 68px;
            padding-bottom: 72px;
          }

          .ltw-security__layout {
            gap: 38px;
          }

          .ltw-security__intro h2,
          .ltw-terminology__header h2 {
            font-size: 30px;
            line-height: 1.16;
          }

          .ltw-security__intro > p,
          .ltw-terminology__intro p {
            font-size: 16px;
            line-height: 1.7;
          }

          .ltw-security__note {
            margin-top: 26px;
            padding: 19px 20px;
          }

          .ltw-security__controls {
            border-top-color: var(--ltw-line-strong);
          }

          .ltw-security__control {
            min-height: 0;
            padding: 24px 0;
            align-items: start;
            gap: 8px 15px;
            grid-template-columns: 30px minmax(0, 1fr);
          }

          .ltw-security__control h3 {
            font-size: 18px;
          }

          .ltw-security__control p {
            grid-column: 2;
          }

          .ltw-ai__system {
            margin-top: 40px;
            border-radius: 22px;
          }

          .ltw-ai__system-intro {
            padding: 25px 22px;
          }

          .ltw-ai__stages {
            grid-template-columns: 1fr;
          }

          .ltw-ai__stage,
          .ltw-ai__stage:nth-child(even),
          .ltw-ai__stage:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 26px 22px;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-ai__stage:last-child {
            border-bottom: 0;
          }

          .ltw-ai__stage h3 {
            font-size: 19px;
          }

          .ltw-ai__emphasis {
            padding: 24px 22px;
          }

          .ltw-terminology__matrix {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .ltw-terminology__item,
          .ltw-terminology__item:nth-child(3n),
          .ltw-terminology__item:nth-last-child(-n + 3),
          .ltw-terminology__item:nth-child(even),
          .ltw-terminology__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 25px 0;
            border-right: 0;
            border-bottom: 1px solid #e8e3e6;
          }

          .ltw-terminology__item:last-child {
            border-bottom: 0;
          }

          .ltw-terminology__item h3 {
            font-size: 19px;
          }

          .ltw-terminology__boundary {
            margin-top: 28px;
            padding: 22px 21px 22px 24px;
            gap: 14px;
            grid-template-columns: 1fr;
          }

          .ltw-engagement,
          .ltw-quality,
          .ltw-languages {
            padding-top: 68px;
            padding-bottom: 72px;
          }

          .ltw-engagement__header h2,
          .ltw-quality__intro h2 {
            font-size: 30px;
            line-height: 1.16;
          }

          .ltw-engagement__intro p {
            font-size: 17px;
            line-height: 1.67;
          }

          .ltw-engagement__models {
            margin-top: 40px;
            border-radius: 22px;
            grid-template-columns: 1fr;
          }

          .ltw-engagement__model {
            min-height: 0;
            padding: 29px 23px 31px;
          }

          .ltw-engagement__model + .ltw-engagement__model {
            border-top: 1px solid var(--ltw-line);
            border-left: 0;
          }

          .ltw-engagement__model h3 {
            font-size: 21px;
          }

          .ltw-engagement__footer .ltw-button {
            width: 100%;
          }

          .ltw-quality__layout {
            gap: 38px;
          }

          .ltw-quality__intro > p {
            font-size: 16px;
            line-height: 1.7;
          }

          .ltw-quality__proof {
            margin-top: 26px;
            padding: 19px 20px;
          }

          .ltw-quality__step {
            min-height: 0;
            padding: 24px 0;
            align-items: start;
            gap: 14px;
            grid-template-columns: 31px minmax(0, 1fr);
          }

          .ltw-quality__step h3 {
            font-size: 18px;
          }

          .ltw-languages__panel {
            margin-top: 40px;
            border-radius: 22px;
          }

          .ltw-languages__panel-header {
            padding: 25px 22px;
          }

          .ltw-languages__grid {
            grid-template-columns: 1fr;
          }

          .ltw-languages__item,
          .ltw-languages__item:nth-child(4n),
          .ltw-languages__item:nth-last-child(-n + 4),
          .ltw-languages__item:nth-child(even),
          .ltw-languages__item:nth-last-child(-n + 2) {
            min-height: 62px;
            padding: 17px 22px;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-languages__item:last-child {
            border-bottom: 0;
          }

          .ltw-languages__coordination {
            padding: 23px 22px;
            gap: 9px;
            grid-template-columns: 1fr;
          }

          .ltw-practice,
          .ltw-why,
          .ltw-related,
          .ltw-insights,
          .ltw-faq {
            padding-top: 68px;
            padding-bottom: 72px;
          }

          .ltw-practice__header h2,
          .ltw-related__header h2,
          .ltw-insights__header h2,
          .ltw-faq__intro h2 {
            font-size: 30px;
            line-height: 1.16;
          }

          .ltw-practice__intro p,
          .ltw-related__header > p,
          .ltw-insights__header > p {
            font-size: 16px;
            line-height: 1.7;
          }

          .ltw-practice__flow {
            margin-top: 40px;
            border-radius: 22px;
          }

          .ltw-practice__column {
            padding: 28px 22px 30px;
          }

          .ltw-practice__outcome {
            padding: 22px 20px;
          }

          .ltw-why__grid {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .ltw-why__item,
          .ltw-why__item:nth-child(3n),
          .ltw-why__item:nth-last-child(-n + 3),
          .ltw-why__item:nth-child(even),
          .ltw-why__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 25px 0;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-why__item:last-child {
            border-bottom: 0;
          }

          .ltw-why__item h3 {
            margin-top: 17px;
            font-size: 18px;
          }

          .ltw-related__list {
            margin-top: 40px;
            grid-template-columns: 1fr;
          }

          .ltw-related__item,
          .ltw-related__item:nth-child(odd),
          .ltw-related__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 24px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.13);
          }

          .ltw-related__item:last-child {
            border-bottom: 0;
          }

          .ltw-insights__grid {
            margin-top: 40px;
            border-radius: 22px;
            grid-template-columns: 1fr;
          }

          .ltw-insights__item,
          .ltw-insights__item:nth-child(even),
          .ltw-insights__item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 27px 22px;
            border-right: 0;
            border-bottom: 1px solid var(--ltw-line);
          }

          .ltw-insights__item:last-child {
            border-bottom: 0;
          }

          .ltw-insights__item h3 {
            font-size: 19px;
          }

          .ltw-faq__layout {
            gap: 38px;
          }

          .ltw-faq__item summary {
            min-height: 64px;
            padding: 20px 0;
            gap: 16px;
          }

          .ltw-faq__item summary > span:first-child {
            font-size: 16px;
          }

          .ltw-faq__answer {
            padding: 0 44px 21px 0;
          }

          .ltw-final {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .ltw-final__panel {
            padding: 52px 22px 50px;
            border-radius: 22px;
          }

          .ltw-final__panel h2 {
            font-size: 34px;
            line-height: 1.14;
          }

          .ltw-final__panel > p:not(.ltw-final__support) {
            font-size: 17px;
            line-height: 1.67;
          }

          .ltw-final__actions {
            width: 100%;
            flex-direction: column;
          }

          .ltw-final__actions .ltw-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ltw-button,
          .ltw-button svg,
          .ltw-editorial-link svg,
          .ltw-proof__item,
          .ltw-proof__title,
          .ltw-risk__link,
          .ltw-risk__link svg,
          .ltw-ai__link,
          .ltw-ai__link svg,
          .ltw-security__link,
          .ltw-security__link svg,
          .ltw-quality__link,
          .ltw-quality__link svg,
          .ltw-related__item,
          .ltw-related__item > svg,
          .ltw-insights__item,
          .ltw-insights__action svg,
          .ltw-faq__toggle::before,
          .ltw-faq__toggle::after {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
