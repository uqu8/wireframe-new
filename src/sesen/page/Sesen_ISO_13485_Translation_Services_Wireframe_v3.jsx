import React, { useState } from "react";

const PAGE_ROOT = "sesen-iso13485-page";

const qualityPillars = [
  {
    icon: "process",
    title: "Controlled Processes",
    text: "Defined translation, review, QA, approval, and delivery steps help make multilingual work repeatable across products, sites, languages, and document revisions.",
  },
  {
    icon: "people",
    title: "Qualified Resources",
    text: "QMS content often combines quality terminology with technical, manufacturing, regulatory, or product-specific language. Resources should fit the subject matter and intended use.",
  },
  {
    icon: "document",
    title: "Document & Record Control",
    text: "Translations should remain clearly associated with the correct source files, revisions, language versions, references, and project records.",
  },
  {
    icon: "risk",
    title: "Risk-Aware Quality",
    text: "Translation workflows can be configured according to document purpose, intended audience, regulatory significance, target markets, and client quality requirements.",
  },
  {
    icon: "supplier",
    title: "Supplier Oversight",
    text: "Quality and procurement teams may need information about certifications, processes, resource qualifications, security controls, and documentation practices.",
  },
  {
    icon: "trace",
    title: "Traceability",
    text: "Teams can maintain visibility into what was translated, which source revision was used, what review occurred, and which version was ultimately delivered.",
  },
];

const qmsGroups = [
  {
    icon: "manual",
    title: "Quality Management Documentation",
    intro: "Maintain clear and consistent quality-system requirements across facilities, teams, and languages.",
    items: [
      "Quality manuals",
      "Quality policies",
      "Standard operating procedures (SOPs)",
      "Quality procedures",
      "Work instructions",
      "Controlled forms",
      "Templates",
      "Process documentation",
      "Internal quality guidance",
    ],
  },
  {
    icon: "capa",
    title: "CAPA & Nonconformance Documentation",
    intro: "Support accurate multilingual communication around investigations, corrective actions, and quality events.",
    items: [
      "Corrective and preventive action documentation",
      "CAPA investigations",
      "Nonconformance reports",
      "Deviation documentation",
      "Root-cause analysis records",
      "Corrective-action records",
      "Quality investigations",
      "Remediation documentation",
    ],
  },
  {
    icon: "supplier",
    title: "Supplier Quality Documentation",
    intro: "Help communicate quality expectations throughout increasingly global medical device supply chains.",
    items: [
      "Supplier quality agreements",
      "Supplier qualification procedures",
      "Supplier requirements",
      "Approved-supplier documentation",
      "Supplier audit materials",
      "Supplier corrective-action requests",
      "Purchasing-quality procedures",
      "Vendor quality documentation",
    ],
  },
  {
    icon: "change",
    title: "Document & Change Control",
    intro: "Keep controlled content aligned as procedures, products, manufacturing processes, and quality requirements evolve.",
    items: [
      "Document-control procedures",
      "Change-control records",
      "Change requests",
      "Engineering change documentation",
      "Revision histories",
      "Updated procedures",
      "Approval documentation",
      "Controlled templates",
      "Document release materials",
    ],
  },
  {
    icon: "validation",
    title: "Risk, Design & Validation Quality Records",
    intro: "Translate quality-related documentation associated with product development, verification, validation, and risk-management activities.",
    items: [
      "Risk-management documentation",
      "Risk-analysis records",
      "Design and development procedures",
      "Verification documentation",
      "Validation documentation",
      "Process validation records",
      "Quality-related test documentation",
      "Design review materials",
    ],
  },
  {
    icon: "production",
    title: "Production, Installation & Service Documentation",
    intro: "Support consistent procedures across manufacturing sites, service teams, distributors, and global operations.",
    items: [
      "Manufacturing procedures",
      "Assembly work instructions",
      "Inspection procedures",
      "Production-quality instructions",
      "Installation procedures",
      "Service procedures",
      "Maintenance procedures",
      "Equipment-related quality instructions",
    ],
  },
  {
    icon: "audit",
    title: "Audit, Training & Quality-System Support",
    intro: "Help global teams understand, apply, and demonstrate quality-system requirements consistently.",
    items: [
      "Internal audit documentation",
      "Supplier audit materials",
      "External audit support documents",
      "Audit findings and responses",
      "Quality-system training",
      "Employee qualification materials",
      "Quality onboarding content",
      "Controlled training procedures",
    ],
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Confirm the Controlled Source",
    text: "Identify the document, source revision, target languages, reference materials, prior translations, and delivery requirements before multilingual production begins.",
  },
  {
    number: "02",
    title: "Align Terminology & References",
    text: "Apply approved QMS terminology, product language, glossaries, style guidance, translation memory, and relevant reviewer decisions.",
  },
  {
    number: "03",
    title: "Translate with Qualified Linguists",
    text: "Assign professional linguists according to language pair, document type, technical subject matter, and agreed workflow requirements.",
  },
  {
    number: "04",
    title: "Perform Independent Review",
    text: "Where included in the workflow, a qualified independent reviewer evaluates accuracy, completeness, terminology, clarity, and consistency against the source.",
  },
  {
    number: "05",
    title: "Complete Linguistic & File QA",
    text: "Check terminology, numbers, units, completeness, repeated text, headings, warnings, references, formatting, and file structure as appropriate.",
  },
  {
    number: "06",
    title: "Integrate Review Feedback",
    text: "Incorporate approved client, quality-team, subject-matter, or in-country feedback and retain useful terminology decisions for future revisions.",
  },
  {
    number: "07",
    title: "Deliver Controlled Language Versions",
    text: "Prepare final multilingual files with agreed naming, structure, formatting, and project documentation so teams can identify the correct translated version.",
  },
];

const changeControls = [
  {
    icon: "version",
    title: "Version-Aware Translation",
    text: "Keep translated files associated with the appropriate controlled source version so current and superseded content remain distinguishable.",
  },
  {
    icon: "delta",
    title: "Change-Focused Updates",
    text: "Where source files and formats permit, identify changed content so approved existing translations can be reused while new or modified text receives focused review.",
  },
  {
    icon: "memory",
    title: "Translation Memory",
    text: "Retain previously translated and approved segments for controlled reuse across recurring updates and related content.",
  },
  {
    icon: "terms",
    title: "Terminology Governance",
    text: "Maintain approved product, quality, manufacturing, and procedural terminology in centralized glossaries and termbases.",
  },
  {
    icon: "review",
    title: "Reviewer Knowledge",
    text: "Capture accepted client-review decisions and apply them to future revisions instead of recreating the same terminology discussion each cycle.",
  },
  {
    icon: "consistency",
    title: "Cross-Document Consistency",
    text: "Help keep approved terms aligned across SOPs, work instructions, training, supplier documents, and related quality content.",
  },
];

const standards = [
  {
    code: "ISO 13485:2016",
    title: "Medical Device Quality Management Systems",
    text: "Provides the medical-device-specific quality environment relevant to controlled processes, documentation, supplier oversight, risk, and regulatory requirements.",
  },
  {
    code: "ISO 17100",
    title: "Professional Translation Services",
    text: "Addresses professional translation processes, qualified resources, revision, project management, and service delivery against applicable specifications.",
  },
  {
    code: "ISO 9001:2015",
    title: "General Quality Management",
    text: "Provides a broader organizational framework for consistent processes, management responsibility, and continuous quality improvement.",
  },
];

const qualificationItems = [
  {
    title: "ISO Certification Information",
    text: "Current information related to applicable Sesen ISO certifications can be provided for supplier review.",
  },
  {
    title: "Quality Process Information",
    text: "Clients can review relevant information about translation, independent review, quality assurance, terminology management, project management, and controlled delivery processes.",
  },
  {
    title: "Linguist Qualification Methodology",
    text: "Sesen can explain how professional linguists and reviewers are selected based on language, subject matter, experience, and project requirements.",
  },
  {
    title: "Quality Questionnaires",
    text: "Sesen can support applicable supplier-quality and vendor onboarding questionnaires within established client qualification procedures.",
  },
  {
    title: "Workflow Documentation",
    text: "For programs requiring additional process visibility, relevant workflow information can be provided based on agreed project scope and quality requirements.",
  },
  {
    title: "Security & Confidentiality Review",
    text: "Enterprise onboarding can include discussion of secure file handling, access, confidentiality, data requirements, and client-specific workflow expectations.",
  },
  {
    title: "Project-Specific Documentation",
    text: "Where required or requested, project documentation can be configured to support the agreed translation, review, quality, and delivery requirements.",
  },
];

const qualitySystemNodes = [
  {
    title: "Quality Management",
    text: "Quality manuals, policies, procedures, and controlled forms establish the system.",
  },
  {
    title: "Supplier Quality",
    text: "Qualification procedures, agreements, audit materials, and supplier actions extend the system into the supply chain.",
  },
  {
    title: "Design, Risk & Validation",
    text: "Risk documentation, verification, validation, and design controls connect the QMS to product development.",
  },
  {
    title: "Production & Service",
    text: "Manufacturing, installation, inspection, maintenance, and service procedures put controlled requirements into practice.",
  },
  {
    title: "CAPA & Nonconformance",
    text: "Investigations, corrective actions, deviations, and remediation feed quality findings back into the system.",
  },
  {
    title: "Audit & Training",
    text: "Audits assess the system, while training helps teams understand and apply updated requirements.",
  },
  {
    title: "Change Control",
    text: "Document revisions and controlled changes connect every part of the quality system over time.",
  },
];

const differentiators = [
  {
    icon: "device",
    title: "Medical Device Specialization",
    text: "Projects are matched with professional native linguists and reviewers whose experience fits medical device, quality, technical, engineering, regulatory, manufacturing, or related subject matter.",
  },
  {
    icon: "shield",
    title: "ISO-Certified Quality",
    text: "Sesen maintains quality processes supported by ISO 13485:2016, ISO 17100, and ISO 9001:2015 certification for regulated multilingual content.",
  },
  {
    icon: "review",
    title: "Professional Human Review",
    text: "Qualified human expertise remains central to medical device translation. Independent linguistic review and quality assurance can be configured according to content type and project requirements.",
  },
  {
    icon: "terms",
    title: "Terminology & Translation Memory",
    text: "Approved glossaries, translation memory, style guides, reference documents, product terminology, and reviewer decisions help maintain continuity across recurring QMS programs.",
  },
  {
    icon: "change",
    title: "Version & Change Management",
    text: "Version-aware workflows help teams manage updates to SOPs, work instructions, manufacturing procedures, training, and other controlled documents without losing previously approved multilingual knowledge.",
  },
  {
    icon: "ai",
    title: "AI-Assisted Quality Validation",
    text: "AI and automation can support terminology alignment, consistency review, and pre-delivery quality checks where appropriate, complementing qualified human expertise.",
  },
  {
    icon: "lock",
    title: "Secure Enterprise Workflows",
    text: "Sesen supports controlled project workflows for confidential quality documentation, supplier information, product records, unpublished technical content, and other sensitive materials.",
  },
  {
    icon: "globe",
    title: "Global Scale",
    text: "With support across more than 150 languages, Sesen helps organizations extend controlled QMS documentation across global manufacturing sites, quality teams, suppliers, and service operations.",
  },
];

const relatedServices = [
  {
    title: "Medical Device Translation Services",
    text: "Comprehensive multilingual support for medical device IFUs, labeling, software, technical documentation, regulatory content, training, and post-market communications.",
    href: "https://www.sesen.com/medical-device-translation-services/",
    action: "Explore Medical Device Translation",
  },
  {
    title: "Certified Medical Device Translation Services",
    text: "Certificates of Accuracy, translator qualifications, certification documentation, and traceable translation deliverables where required or requested.",
    href: "https://www.sesen.com/certified-medical-device-translation-services/",
    action: "Explore Certified Translation",
  },
  {
    title: "IFU Translation Services",
    text: "Specialized translation and update management for medical device instructions for use and related user documentation.",
    href: "https://www.sesen.com/ifu-translation-services/",
    action: "Explore IFU Translation",
  },
  {
    title: "Medical Device Labeling Translation",
    text: "Multilingual device labels, packaging, warnings, safety information, and market-specific labeling updates.",
    href: "https://www.sesen.com/medical-device-labeling-translation-services/",
    action: "Explore Device Labeling",
  },
  {
    title: "Regulatory Translation Services",
    text: "Specialized translation for submissions, authority communication, product documentation, and global regulatory workflows.",
    href: "https://www.sesen.com/regulatory-translation-services/",
    action: "Explore Regulatory Translation",
  },
];

const faqs = [
  {
    q: "What is ISO 13485?",
    a: "ISO 13485:2016 is the internationally recognized quality management system standard specifically developed for medical devices. It establishes requirements intended for organizations involved in medical device design, production, installation, servicing, and related activities. The standard can also be relevant to suppliers and external parties providing products or quality-management-system-related services to medical device organizations. ISO 13485:2016 remains the current edition and was confirmed by ISO in 2025.",
  },
  {
    q: "Is ISO 13485 a translation standard?",
    a: "No. ISO 13485 is a medical device quality management system standard. ISO 17100 is the international standard specifically addressing professional translation-service processes and resources. For medical device organizations, the standards are complementary: ISO 13485 addresses the regulated medical device quality environment, while ISO 17100 addresses the professional translation process.",
  },
  {
    q: "What are ISO 13485 translation services?",
    a: "The term generally describes translation services for medical device organizations where ISO 13485-related quality expectations, QMS documentation, or controlled medical device processes are relevant. For Sesen, this includes translation of SOPs, work instructions, CAPA records, supplier quality documents, audit materials, manufacturing procedures, validation documentation, and controlled revisions through ISO-certified quality processes. It does not mean an individual translation itself becomes ISO 13485 certified.",
  },
  {
    q: "Does ISO 13485 require medical device documents to be translated?",
    a: "ISO 13485 does not establish a blanket requirement that every medical device document must be translated. Language requirements can depend on the document, intended users, markets, regulatory requirements, contractual requirements, manufacturer procedures, and other applicable obligations. ISO 13485 matters because multilingual content may exist within the broader controlled quality environment of a medical device organization—not because ISO 13485 is itself a universal translation mandate.",
  },
  {
    q: "Does ISO 13485 require a translation provider to be ISO 13485 certified?",
    a: "There is no universal rule stating that every medical device translation provider must hold ISO 13485 certification. Medical device manufacturers establish supplier controls according to applicable requirements, risk, their quality systems, and the products or services being supplied. Working with an ISO 13485-certified language partner can provide additional alignment for organizations that want their translation supplier to operate within a quality-management framework specifically relevant to medical devices.",
  },
  {
    q: "What is the difference between ISO 13485 and ISO 17100?",
    a: "ISO 13485 focuses on quality management systems for medical devices. ISO 17100 focuses on professional translation services. In practical terms, ISO 13485 helps establish the quality environment surrounding medical device processes, documentation, suppliers, and regulatory responsibilities, while ISO 17100 addresses how professional translation services are resourced, managed, translated, revised, and delivered.",
  },
  {
    q: "What medical device QMS documents can Sesen translate?",
    a: "Sesen supports quality manuals, SOPs, work instructions, CAPA documentation, nonconformance records, supplier quality agreements, supplier audit materials, change-control documentation, risk and validation records, manufacturing and inspection procedures, installation and service procedures, audit materials, training content, controlled forms, and related QMS documentation. Broader medical device content such as IFUs, labeling, software, regulatory documentation, and post-market communication is covered through Sesen's Medical Device Translation Services.",
  },
  {
    q: "How does FDA's QMSR relate to ISO 13485?",
    a: "FDA's Quality Management System Regulation became effective on February 2, 2026. The revised 21 CFR Part 820 incorporates ISO 13485:2016 by reference and brings FDA's device current good manufacturing practice framework into closer alignment with the international medical-device QMS standard. This makes ISO 13485 especially relevant to medical device quality systems in the United States, but it does not mean every medical device translation must be separately ISO 13485 certified.",
  },
  {
    q: "How does Sesen manage revised SOPs and controlled documents across languages?",
    a: "Sesen can use version-aware workflows, translation memory, approved terminology, reference content, and reviewer feedback to support recurring controlled-document updates. Where appropriate, existing approved translations can be reused while changed source content receives focused translation and review, helping maintain consistency across revisions and reduce unnecessary retranslation of unchanged material.",
  },
  {
    q: "How does Sesen maintain terminology across QMS documents?",
    a: "Client-approved terminology can be managed through glossaries, termbases, translation memory, style guidance, product references, previous approved translations, and documented reviewer decisions. These resources help maintain consistent terminology across SOPs, work instructions, manufacturing procedures, training materials, supplier documentation, and related quality content.",
  },
  {
    q: "Does ISO 13485 certification make a translation a certified translation?",
    a: "No. ISO 13485 certification relates to a quality management system. It does not automatically turn an individual translation into a formally certified translation. When a client, authority, legal process, or recipient requires certification documentation, Sesen can provide appropriate supporting documentation, such as a Certificate of Accuracy, based on the applicable project requirements.",
  },
  {
    q: "Can Sesen support translation supplier qualification?",
    a: "Yes. Sesen can support supplier onboarding with relevant information concerning applicable ISO certifications, translation and QA processes, resource qualification methodology, security practices, and workflow documentation based on client requirements. Quality questionnaires and project-specific documentation can also be reviewed as part of enterprise supplier qualification where applicable.",
  },
  {
    q: "Can Sesen provide Certificates of Accuracy?",
    a: "Yes. Certificates of Accuracy and related certification documentation can be provided when required or requested as part of an agreed project scope. Certification needs vary by authority, market, submission, recipient, document type, and client procedure, so Sesen can align the deliverable to the specific requirement.",
  },
];

function Icon({ name, size = 24 }) {
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

  switch (name) {
    case "process":
      return (
        <svg {...common}>
          <path d="M4 6h8" /><path d="M4 12h16" /><path d="M12 18h8" />
          <circle cx="15" cy="6" r="2" /><circle cx="9" cy="18" r="2" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" /><path d="M3.8 18c.7-3.2 2.6-5 5.2-5s4.5 1.8 5.2 5" />
          <circle cx="17.5" cy="9.5" r="2.2" /><path d="M15.7 14.2c2.7-.2 4.4 1.1 5 3.8" />
        </svg>
      );
    case "document":
    case "manual":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20H6z" /><path d="M14 3.5V8h4" /><path d="M9 12h6M9 15h6" />
        </svg>
      );
    case "risk":
      return (
        <svg {...common}>
          <path d="M12 3 4.8 6v5.4c0 4.6 2.8 7.8 7.2 9.6 4.4-1.8 7.2-5 7.2-9.6V6z" />
          <path d="M12 8v4" /><path d="M12 15h.01" />
        </svg>
      );
    case "supplier":
      return (
        <svg {...common}>
          <path d="M4 20V8l5-3v15" /><path d="M9 10l6-3v13" /><path d="M15 12l5-2v10" />
          <path d="M2.5 20h19" />
        </svg>
      );
    case "trace":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><circle cx="18" cy="6" r="2" />
          <path d="M8 6h8M6 8v5c0 3 2 5 5 5h5" />
        </svg>
      );
    case "capa":
      return (
        <svg {...common}>
          <path d="M4 12a8 8 0 0 1 13-6" /><path d="M17 4v4h-4" />
          <path d="M20 12a8 8 0 0 1-13 6" /><path d="M7 20v-4h4" />
          <path d="m9.5 12 1.7 1.7 3.5-4" />
        </svg>
      );
    case "change":
      return (
        <svg {...common}>
          <path d="M4 7h11" /><path d="m12 4 3 3-3 3" /><path d="M20 17H9" /><path d="m12 14-3 3 3 3" />
        </svg>
      );
    case "validation":
      return (
        <svg {...common}>
          <path d="M6 3.5h9l3 3V20H6z" /><path d="M15 3.5V7h3" /><path d="m9 13 2 2 4-5" />
        </svg>
      );
    case "production":
      return (
        <svg {...common}>
          <path d="M3 20V10l6 3V9l6 4V7l6 4v9z" /><path d="M7 17h2M12 17h2M17 17h2" />
        </svg>
      );
    case "audit":
      return (
        <svg {...common}>
          <path d="M7 4h10v16H7z" /><path d="M9.5 8h5M9.5 11h5M9.5 14h2.5" />
          <circle cx="15.8" cy="16.2" r="2.3" /><path d="m17.5 17.9 2 2" />
        </svg>
      );
    case "version":
      return (
        <svg {...common}>
          <path d="M6 5h11l2 2v12H6z" /><path d="M6 9H4v10h10" /><path d="M9 12h6M9 15h4" />
        </svg>
      );
    case "delta":
      return (
        <svg {...common}>
          <path d="M12 3 4 20h16z" /><path d="M10 15h4" />
        </svg>
      );
    case "memory":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
        </svg>
      );
    case "terms":
      return (
        <svg {...common}>
          <path d="M4 5h7v14H4zM13 5h7v14h-7z" /><path d="M6.5 9h2M6.5 12h2M15.5 9h2M15.5 12h2" />
        </svg>
      );
    case "review":
      return (
        <svg {...common}>
          <path d="M4 5h11v14H4z" /><path d="M7 9h5M7 12h5" /><path d="m14 16 2 2 4-5" />
        </svg>
      );
    case "consistency":
      return (
        <svg {...common}>
          <path d="M5 7h14M5 12h14M5 17h14" /><circle cx="8" cy="7" r="2" /><circle cx="16" cy="12" r="2" /><circle cx="11" cy="17" r="2" />
        </svg>
      );
    case "device":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h4" /><path d="M15 14v4M13 16h4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.5 2.7 7.6 7 9.4 4.3-1.8 7-4.9 7-9.4V6z" /><path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 15V9l3-2 3 2v6" /><path d="M9 12h6" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" /><path d="M3.5 12h17M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.4 8.6 12S9.8 18.6 12 21" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14" /><path d="m14 7 5 5-5 5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" /><path d="M8 12h8" />
        </svg>
      );
  }
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Medical device quality documentation workflow illustration" role="img">
      <svg viewBox="0 0 620 520" aria-hidden="true">
        <defs>
          <linearGradient id="softPanel" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F7FF" />
          </linearGradient>
        </defs>

        <circle cx="325" cy="265" r="208" fill="#F7F9FD" />
        <circle cx="325" cy="265" r="163" fill="none" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="6 10" />

        <path d="M188 136 C240 98 331 91 405 119" fill="none" stroke="#6F8BE1" strokeWidth="3" strokeLinecap="round" />
        <path d="M432 151 C473 200 489 274 468 337" fill="none" stroke="#D0D9EE" strokeWidth="3" strokeLinecap="round" />
        <path d="M427 392 C365 437 272 445 195 402" fill="none" stroke="#6F8BE1" strokeWidth="3" strokeLinecap="round" />

        <rect x="184" y="126" width="278" height="286" rx="28" fill="url(#softPanel)" stroke="#CBD6EC" strokeWidth="2" />
        <rect x="216" y="160" width="214" height="42" rx="12" fill="#EAF0FF" />
        <text x="236" y="187" fontSize="18" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#3659BB">QUALITY MANAGEMENT SYSTEM</text>

        <rect x="224" y="226" width="196" height="62" rx="14" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <rect x="244" y="244" width="30" height="28" rx="6" fill="#EAF0FF" />
        <path d="M252 250h14v17h-14zM255 255h8M255 259h8" fill="none" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
        <text x="289" y="252" fontSize="13" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">SOP-042</text>
        <text x="289" y="271" fontSize="12" fontFamily="Inter, Arial, sans-serif" fill="#68758B">REV. D · CONTROLLED</text>

        <rect x="224" y="304" width="196" height="62" rx="14" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="259" cy="335" r="15" fill="#EAF0FF" />
        <path d="M252 335l5 5 10-12" fill="none" stroke="#4B6FD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="289" y="330" fontSize="13" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">APPROVED VERSION</text>
        <text x="289" y="349" fontSize="12" fontFamily="Inter, Arial, sans-serif" fill="#68758B">17 LANGUAGE FILES</text>

        <g>
          <circle cx="158" cy="184" r="43" fill="#FFFFFF" stroke="#CBD6EC" strokeWidth="2" />
          <text x="158" y="179" textAnchor="middle" fontSize="13" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#3659BB">ISO</text>
          <text x="158" y="196" textAnchor="middle" fontSize="13" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">13485</text>
          <path d="M193 203 224 232" fill="none" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <g>
          <circle cx="487" cy="224" r="43" fill="#FFFFFF" stroke="#CBD6EC" strokeWidth="2" />
          <text x="487" y="219" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#3659BB">CHANGE</text>
          <text x="487" y="237" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">CONTROL</text>
          <path d="M447 239 420 248" fill="none" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <g>
          <circle cx="474" cy="376" r="43" fill="#FFFFFF" stroke="#CBD6EC" strokeWidth="2" />
          <text x="474" y="371" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#3659BB">TERM</text>
          <text x="474" y="389" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">CONTROL</text>
          <path d="M433 361 416 351" fill="none" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <g>
          <circle cx="164" cy="367" r="43" fill="#FFFFFF" stroke="#CBD6EC" strokeWidth="2" />
          <text x="164" y="362" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#3659BB">HUMAN</text>
          <text x="164" y="380" textAnchor="middle" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700" fill="#17264D">REVIEW</text>
          <path d="M204 352 224 343" fill="none" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <circle cx="549" cy="112" r="8" fill="#4B6FD8" opacity=".9" />
        <circle cx="96" cy="276" r="7" fill="#6F8BE1" opacity=".85" />
        <circle cx="527" cy="456" r="6" fill="#C8D6FF" />
      </svg>
    </div>
  );
}

function VersionControlVisual() {
  const stages = [
    { label: "SOURCE", title: "SOP-042", meta: "REV. C" },
    { label: "APPROVED", title: "17 Languages", meta: "Controlled versions" },
    { label: "SOURCE CHANGE", title: "REV. D", meta: "Updated procedure" },
    { label: "DELTA", title: "Changed Segments", meta: "Focused update" },
    { label: "REVIEW", title: "Terminology + QA", meta: "Human validation" },
    { label: "RELEASE", title: "REV. D", meta: "17 languages aligned" },
  ];

  return (
    <div className="version-visual" aria-label="Version control workflow from source revision C to revision D">
      {stages.map((stage) => (
        <div className="version-node" key={stage.label}>
          <span className="version-label">{stage.label}</span>
          <strong>{stage.title}</strong>
          <span>{stage.meta}</span>
        </div>
      ))}
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-question" type="button" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-control" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer" hidden={!open}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function ISO13485TranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={PAGE_ROOT}>
      <style>{`
        .${PAGE_ROOT} {
          --sesen-iso-primary: #4B6FD8;
          --sesen-iso-primary-dark: #3659BB;
          --sesen-iso-deep-blue: #253F8F;
          --sesen-iso-mid-blue: #6F8BE1;
          --sesen-iso-soft-blue: #EAF0FF;
          --sesen-iso-pale-blue: #F5F7FF;
          --sesen-iso-navy: #17264D;
          --sesen-iso-ink: #111827;
          --sesen-iso-body: #46546D;
          --sesen-iso-muted: #68758B;
          --sesen-iso-border: #DDE4F2;
          --sesen-iso-divider: #E9EEF8;
          --sesen-iso-soft: #F7F9FD;
          --sesen-iso-light-accent: #C8D6FF;
          --sesen-iso-white: #FFFFFF;
          color: var(--sesen-iso-body);
          background: var(--sesen-iso-white);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          width: 100%;
          overflow-x: clip;
        }

        .${PAGE_ROOT},
        .${PAGE_ROOT} * {
          box-sizing: border-box;
        }

        .${PAGE_ROOT} a {
          color: inherit;
        }

        .${PAGE_ROOT} button,
        .${PAGE_ROOT} a {
          -webkit-tap-highlight-color: transparent;
        }

        .${PAGE_ROOT} .shell {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .${PAGE_ROOT} .section {
          padding: 96px 0;
        }

        .${PAGE_ROOT} .section.compact {
          padding: 82px 0;
        }

        .${PAGE_ROOT} .section.soft {
          background: var(--sesen-iso-soft);
        }

        .${PAGE_ROOT} .section.pale {
          background: var(--sesen-iso-pale-blue);
        }

        .${PAGE_ROOT} .section.navy {
          background: var(--sesen-iso-navy);
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .section-header {
          max-width: 810px;
          margin-bottom: 48px;
        }

        .${PAGE_ROOT} .eyebrow {
          display: inline-block;
          margin: 0 0 14px;
          color: var(--sesen-iso-primary-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .navy .eyebrow {
          color: var(--sesen-iso-light-accent);
        }

        .${PAGE_ROOT} h1,
        .${PAGE_ROOT} h2,
        .${PAGE_ROOT} h3 {
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 500;
          color: var(--sesen-iso-navy);
          margin: 0;
        }

        .${PAGE_ROOT} h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .${PAGE_ROOT} h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .${PAGE_ROOT} h3 {
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: 0;
        }

        .${PAGE_ROOT} .navy h2,
        .${PAGE_ROOT} .navy h3 {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} p {
          margin: 0;
        }

        .${PAGE_ROOT} .lead {
          margin-top: 20px;
          max-width: 780px;
          color: #293954;
          font-size: 19px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .section-header p {
          margin-top: 18px;
          max-width: 800px;
          font-size: 17px;
          line-height: 1.7;
        }

        .${PAGE_ROOT} .navy .section-header p,
        .${PAGE_ROOT} .navy p {
          color: #D7E1F8;
        }

        .${PAGE_ROOT} .btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .${PAGE_ROOT} .btn {
          min-height: 50px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .04em;
          text-transform: uppercase;
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }

        .${PAGE_ROOT} .btn:focus-visible,
        .${PAGE_ROOT} .editorial-link:focus-visible,
        .${PAGE_ROOT} .faq-question:focus-visible {
          outline: 3px solid rgba(75, 111, 216, .34);
          outline-offset: 3px;
        }

        .${PAGE_ROOT} .btn-primary {
          color: #FFFFFF;
          background: var(--sesen-iso-primary);
        }

        .${PAGE_ROOT} .btn-primary:hover {
          color: #FFFFFF;
          background: var(--sesen-iso-primary-dark);
          transform: translateY(-1px);
        }

        .${PAGE_ROOT} .btn-secondary {
          color: var(--sesen-iso-ink);
          background: #FFFFFF;
          border-color: var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .btn-secondary:hover {
          color: var(--sesen-iso-ink);
          background: var(--sesen-iso-pale-blue);
          border-color: #B9C8E8;
          transform: translateY(-1px);
        }

        .${PAGE_ROOT} .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: 22px;
          color: var(--sesen-iso-primary-dark);
          text-decoration: none;
          font-weight: 700;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .editorial-link svg {
          flex: 0 0 auto;
          transition: transform .2s ease;
        }

        .${PAGE_ROOT} .editorial-link:hover span {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .${PAGE_ROOT} .editorial-link:hover svg {
          transform: translateX(3px);
        }

        .${PAGE_ROOT} .hero {
          padding: 92px 0 80px;
          background:
            radial-gradient(circle at 85% 20%, rgba(234, 240, 255, .9), transparent 34%),
            #FFFFFF;
        }

        .${PAGE_ROOT} .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(440px, .95fr);
          gap: 72px;
          align-items: center;
        }

        .${PAGE_ROOT} .hero-copy {
          min-width: 0;
        }

        .${PAGE_ROOT} .hero-copy .hero-lead {
          margin-top: 22px;
          max-width: 680px;
          color: #293954;
          font-size: 19px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .hero-copy .hero-support {
          margin-top: 16px;
          max-width: 665px;
          color: var(--sesen-iso-body);
          font-size: 17px;
          line-height: 1.7;
        }

        .${PAGE_ROOT} .hero-art {
          width: 100%;
          max-width: 590px;
          justify-self: end;
        }

        .${PAGE_ROOT} .hero-art svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .${PAGE_ROOT} .trust-band {
          border-top: 1px solid var(--sesen-iso-divider);
          border-bottom: 1px solid var(--sesen-iso-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .${PAGE_ROOT} .trust-item {
          padding: 24px 26px;
          min-height: 110px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--sesen-iso-divider);
        }

        .${PAGE_ROOT} .trust-item:first-child {
          padding-left: 0;
        }

        .${PAGE_ROOT} .trust-item:last-child {
          border-right: 0;
          padding-right: 0;
        }

        .${PAGE_ROOT} .trust-item strong {
          color: var(--sesen-iso-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .trust-item span {
          margin-top: 5px;
          color: var(--sesen-iso-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        .${PAGE_ROOT} .standards-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, .8fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .standards-intro-copy p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .standards-intro-copy p {
          max-width: 740px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .definition-panel {
          border: 1px solid var(--sesen-iso-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .definition-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 22px;
          padding: 24px;
          border-bottom: 1px solid var(--sesen-iso-divider);
        }

        .${PAGE_ROOT} .definition-row:last-child {
          border-bottom: 0;
        }

        .${PAGE_ROOT} .definition-code {
          color: var(--sesen-iso-primary-dark);
          font-weight: 700;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .definition-row strong {
          display: block;
          color: var(--sesen-iso-navy);
          font-size: 16px;
          line-height: 1.45;
        }

        .${PAGE_ROOT} .definition-row span {
          display: block;
          margin-top: 5px;
          color: var(--sesen-iso-muted);
          font-size: 16px;
          line-height: 1.55;
        }

        .${PAGE_ROOT} .authority-callout {
          margin-top: 44px;
          padding: 28px 32px;
          border-left: 3px solid var(--sesen-iso-primary);
          background: var(--sesen-iso-pale-blue);
          color: var(--sesen-iso-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 24px;
          line-height: 1.45;
          font-weight: 500;
        }

        .${PAGE_ROOT} .pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-iso-border);
          border-left: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .pillar-item {
          padding: 32px;
          min-height: 245px;
          border-right: 1px solid var(--sesen-iso-border);
          border-bottom: 1px solid var(--sesen-iso-border);
          background: rgba(255, 255, 255, .72);
        }

        .${PAGE_ROOT} .icon-box {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--sesen-iso-primary-dark);
          background: var(--sesen-iso-soft-blue);
        }

        .${PAGE_ROOT} .pillar-item h3 {
          margin-top: 22px;
          font-size: 21px;
        }

        .${PAGE_ROOT} .pillar-item p {
          margin-top: 12px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .qms-directory {
          border-top: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .qms-row {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          gap: 48px;
          padding: 40px 0;
          border-bottom: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .qms-row-heading {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .${PAGE_ROOT} .qms-row-heading h3 {
          font-size: 22px;
        }

        .${PAGE_ROOT} .qms-row-body > p {
          max-width: 760px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .qms-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 28px;
        }

        .${PAGE_ROOT} .qms-list li {
          position: relative;
          padding-left: 18px;
          color: #384861;
          font-size: 16px;
        }

        .${PAGE_ROOT} .qms-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .72em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sesen-iso-primary);
        }

        .${PAGE_ROOT} .scope-note {
          margin-top: 42px;
          padding: 26px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          border-radius: 20px;
          background: var(--sesen-iso-pale-blue);
        }

        .${PAGE_ROOT} .scope-note p {
          max-width: 780px;
          color: var(--sesen-iso-navy);
          font-size: 16px;
        }

        .${PAGE_ROOT} .scope-note .editorial-link {
          margin-top: 0;
          flex: 0 0 auto;
        }

        .${PAGE_ROOT} .workflow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--sesen-iso-border);
          border-left: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .workflow-step {
          padding: 32px 26px 34px;
          border-right: 1px solid var(--sesen-iso-divider);
          border-bottom: 1px solid var(--sesen-iso-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .workflow-step:nth-child(4n) {
          border-right-color: var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .step-number {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #C8D6FF;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--sesen-iso-primary-dark);
          font-size: 12px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .workflow-step h3 {
          margin-top: 22px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .workflow-step p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .version-layout {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 68px;
          align-items: start;
        }

        .${PAGE_ROOT} .version-copy p {
          margin-top: 18px;
          max-width: 650px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .version-visual {
          padding: 28px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 8px;
          align-items: center;
          border: 1px solid #3D4F7B;
          border-radius: 28px;
          background: #1D2D58;
        }

        .${PAGE_ROOT} .version-node {
          position: relative;
          min-width: 0;
          min-height: 145px;
          padding: 18px 14px;
          border: 1px solid #465A89;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #223564;
        }

        .${PAGE_ROOT} .version-node .version-label {
          color: var(--sesen-iso-light-accent);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .${PAGE_ROOT} .version-node strong {
          margin-top: 8px;
          color: #FFFFFF;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .version-node > span:last-child {
          margin-top: 6px;
          color: #BFCBE6;
          font-size: 12px;
          line-height: 1.45;
        }

        .${PAGE_ROOT} .version-node:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -13px;
          top: 50%;
          transform: translateY(-50%);
          color: #9FB3E8;
          font-size: 16px;
          line-height: 1;
          z-index: 3;
        }

        .${PAGE_ROOT} .change-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #34466F;
          border-left: 1px solid #34466F;
        }

        .${PAGE_ROOT} .change-item {
          padding: 28px;
          border-right: 1px solid #34466F;
          border-bottom: 1px solid #34466F;
        }

        .${PAGE_ROOT} .change-item .icon-box {
          color: #DDE6FF;
          background: #263A6A;
        }

        .${PAGE_ROOT} .change-item h3 {
          margin-top: 18px;
          font-size: 20px;
        }

        .${PAGE_ROOT} .change-item p {
          margin-top: 10px;
          font-size: 16px;
          color: #C7D2EC;
        }

        .${PAGE_ROOT} .qmsr-grid {
          display: grid;
          grid-template-columns: 330px minmax(0, 1fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .qmsr-date {
          padding: 32px;
          border: 1px solid var(--sesen-iso-border);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .qmsr-date .date-kicker {
          color: var(--sesen-iso-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .qmsr-date strong {
          display: block;
          margin-top: 12px;
          color: var(--sesen-iso-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 42px;
          line-height: 1.05;
          font-weight: 500;
        }

        .${PAGE_ROOT} .qmsr-date span {
          display: block;
          margin-top: 12px;
          color: var(--sesen-iso-muted);
          font-size: 16px;
        }

        .${PAGE_ROOT} .qmsr-copy > p {
          max-width: 760px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .qmsr-copy > p + p {
          margin-top: 18px;
        }

        .${PAGE_ROOT} .qmsr-questions {
          margin-top: 26px;
          padding: 24px 28px;
          border-left: 3px solid var(--sesen-iso-primary);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .qmsr-questions strong {
          display: block;
          color: var(--sesen-iso-navy);
          font-size: 16px;
        }

        .${PAGE_ROOT} .qmsr-questions ul {
          margin: 16px 0 0;
          padding-left: 20px;
        }

        .${PAGE_ROOT} .qmsr-questions li + li {
          margin-top: 8px;
        }

        .${PAGE_ROOT} .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid var(--sesen-iso-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .standard-column {
          padding: 36px 32px;
          border-right: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .standard-column:last-child {
          border-right: 0;
        }

        .${PAGE_ROOT} .standard-code {
          display: inline-block;
          color: var(--sesen-iso-primary-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .standard-column h3 {
          margin-top: 16px;
          font-size: 23px;
        }

        .${PAGE_ROOT} .standard-column p {
          margin-top: 14px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .why-three {
          margin-top: 34px;
          padding: 30px 32px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 36px;
          align-items: start;
          border-radius: 20px;
          background: var(--sesen-iso-pale-blue);
        }

        .${PAGE_ROOT} .why-three h3 {
          font-size: 22px;
        }

        .${PAGE_ROOT} .why-three p {
          font-size: 16px;
          max-width: 820px;
        }

        .${PAGE_ROOT} .qualification-layout {
          display: grid;
          grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .qualification-copy {
          position: sticky;
          top: 32px;
        }

        .${PAGE_ROOT} .qualification-copy p {
          margin-top: 18px;
          max-width: 560px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .qualification-list {
          border-top: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .qualification-item {
          display: grid;
          grid-template-columns: 36px 1fr;
          gap: 18px;
          padding: 25px 0;
          border-bottom: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .qualification-check {
          width: 32px;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--sesen-iso-soft-blue);
          color: var(--sesen-iso-primary-dark);
        }

        .${PAGE_ROOT} .qualification-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .qualification-item p {
          margin-top: 8px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .service-router {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .${PAGE_ROOT} .route {
          min-height: 390px;
          padding: 32px;
          border: 1px solid var(--sesen-iso-border);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .route.current {
          border-color: #B8C8EE;
          background: var(--sesen-iso-pale-blue);
        }

        .${PAGE_ROOT} .route-label {
          color: var(--sesen-iso-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .route h3 {
          margin-top: 16px;
          font-size: 24px;
        }

        .${PAGE_ROOT} .route > p {
          margin-top: 14px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .route ul {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
        }

        .${PAGE_ROOT} .route li {
          position: relative;
          padding-left: 18px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .route li + li {
          margin-top: 7px;
        }

        .${PAGE_ROOT} .route li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .7em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sesen-iso-primary);
        }

        .${PAGE_ROOT} .route .editorial-link {
          margin-top: auto;
          padding-top: 26px;
        }

        .${PAGE_ROOT} .route-current-text {
          margin-top: auto;
          padding-top: 26px;
          color: var(--sesen-iso-primary-dark);
          font-weight: 700;
        }

        .${PAGE_ROOT} .system-layout {
          display: grid;
          grid-template-columns: 360px minmax(0, 1fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .system-copy p {
          margin-top: 18px;
          font-size: 17px;
        }

        .${PAGE_ROOT} .system-map {
          border: 1px solid var(--sesen-iso-border);
          border-radius: 30px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .system-map-head {
          padding: 30px 32px;
          background: linear-gradient(135deg, #F5F7FF 0%, #FFFFFF 100%);
          border-bottom: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .system-map-head > span {
          display: block;
          color: var(--sesen-iso-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .14em;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .system-map-head strong {
          display: block;
          margin-top: 10px;
          color: var(--sesen-iso-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 26px;
          font-weight: 500;
          line-height: 1.3;
        }

        .${PAGE_ROOT} .system-map-head p {
          margin-top: 10px;
          max-width: 760px;
          color: var(--sesen-iso-body);
          font-size: 16px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .system-map-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .${PAGE_ROOT} .system-map-item {
          padding: 25px 28px;
          border-bottom: 1px solid var(--sesen-iso-divider);
        }

        .${PAGE_ROOT} .system-map-item:nth-child(odd):not(.wide) {
          border-right: 1px solid var(--sesen-iso-divider);
        }

        .${PAGE_ROOT} .system-map-item.wide {
          grid-column: 1 / -1;
          border-bottom: 0;
          background: var(--sesen-iso-pale-blue);
        }

        .${PAGE_ROOT} .system-map-item strong {
          display: block;
          color: var(--sesen-iso-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE_ROOT} .system-map-item p {
          margin-top: 8px;
          color: var(--sesen-iso-body);
          font-size: 16px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .differentiator-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-iso-border);
          border-left: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .differentiator-item {
          min-height: 286px;
          padding: 28px;
          border-right: 1px solid var(--sesen-iso-border);
          border-bottom: 1px solid var(--sesen-iso-border);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .differentiator-item h3 {
          margin-top: 20px;
          font-size: 20px;
        }

        .${PAGE_ROOT} .differentiator-item p {
          margin-top: 10px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .related-list {
          border-top: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .related-row {
          display: grid;
          grid-template-columns: 330px minmax(0, 1fr) auto;
          gap: 36px;
          align-items: center;
          padding: 26px 0;
          border-bottom: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .related-row h3 {
          font-size: 21px;
        }

        .${PAGE_ROOT} .related-row p {
          max-width: 650px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .related-row .editorial-link {
          margin-top: 0;
          white-space: nowrap;
        }

        .${PAGE_ROOT} .faq-list {
          max-width: 980px;
          margin: 0 auto;
          border-top: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .faq-item {
          border-bottom: 1px solid var(--sesen-iso-border);
        }

        .${PAGE_ROOT} .faq-question {
          width: 100%;
          min-height: 74px;
          padding: 22px 0;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          color: var(--sesen-iso-navy);
          text-align: left;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.4;
          cursor: pointer;
        }

        .${PAGE_ROOT} .faq-control {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border: 1px solid var(--sesen-iso-border);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--sesen-iso-primary-dark);
          font-family: Inter, sans-serif;
          font-size: 21px;
          font-weight: 400;
        }

        .${PAGE_ROOT} .faq-answer {
          padding: 0 58px 26px 0;
        }

        .${PAGE_ROOT} .faq-answer p {
          max-width: 840px;
          font-size: 16px;
        }

        .${PAGE_ROOT} .final-cta {
          padding: 86px 0;
          background: var(--sesen-iso-deep-blue);
        }

        .${PAGE_ROOT} .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 64px;
          align-items: center;
        }

        .${PAGE_ROOT} .cta-panel h2 {
          color: #FFFFFF;
          max-width: 780px;
        }

        .${PAGE_ROOT} .cta-panel p {
          margin-top: 18px;
          max-width: 820px;
          color: #DCE5FA;
          font-size: 17px;
        }

        .${PAGE_ROOT} .cta-panel .btn-row {
          margin-top: 0;
          justify-content: flex-end;
        }

        .${PAGE_ROOT} .final-cta .btn-primary {
          background: var(--sesen-iso-primary);
        }

        .${PAGE_ROOT} .final-cta .btn-primary:hover {
          background: #5B7CE0;
        }

        .${PAGE_ROOT} .final-cta .btn-secondary {
          color: var(--sesen-iso-ink);
          background: #FFFFFF;
          border-color: #FFFFFF;
        }

        @media (max-width: 1180px) {
          .${PAGE_ROOT} .shell {
            width: min(1280px, calc(100% - 80px));
          }

          .${PAGE_ROOT} .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(380px, .85fr);
            gap: 48px;
          }


          .${PAGE_ROOT} .version-visual {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .version-node::after {
            display: none;
          }

          .${PAGE_ROOT} .differentiator-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .system-layout {
            grid-template-columns: 300px minmax(0, 1fr);
            gap: 44px;
          }
        }

        @media (max-width: 900px) {
          .${PAGE_ROOT} .shell {
            width: calc(100% - 58px);
          }

          .${PAGE_ROOT} .section {
            padding: 80px 0;
          }

          .${PAGE_ROOT} .section.compact {
            padding: 72px 0;
          }

          .${PAGE_ROOT} .hero {
            padding: 76px 0 68px;
          }

          .${PAGE_ROOT} .hero-grid,
          .${PAGE_ROOT} .standards-intro-grid,
          .${PAGE_ROOT} .version-layout,
          .${PAGE_ROOT} .qmsr-grid,
          .${PAGE_ROOT} .qualification-layout,
          .${PAGE_ROOT} .system-layout {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .hero-art {
            max-width: 620px;
            justify-self: center;
            margin-top: 10px;
          }

          .${PAGE_ROOT} .trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .trust-item:nth-child(2) {
            border-right: 0;
          }

          .${PAGE_ROOT} .trust-item:nth-child(-n+2) {
            border-bottom: 1px solid var(--sesen-iso-divider);
          }

          .${PAGE_ROOT} .trust-item:first-child,
          .${PAGE_ROOT} .trust-item:nth-child(3) {
            padding-left: 0;
          }

          .${PAGE_ROOT} .pillar-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .qms-row {
            grid-template-columns: 220px minmax(0, 1fr);
            gap: 30px;
          }

          .${PAGE_ROOT} .workflow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .workflow-step:last-child {
            grid-column: 1 / -1;
          }

          .${PAGE_ROOT} .related-row {
            grid-template-columns: 220px minmax(0, 1fr);
            gap: 12px 28px;
            align-items: start;
          }

          .${PAGE_ROOT} .related-row .editorial-link {
            grid-column: 2;
            margin-top: 2px;
            white-space: normal;
          }

          .${PAGE_ROOT} .version-copy {
            max-width: 760px;
          }

          .${PAGE_ROOT} .change-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .standards-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .standard-column {
            border-right: 0;
            border-bottom: 1px solid var(--sesen-iso-border);
          }

          .${PAGE_ROOT} .standard-column:last-child {
            border-bottom: 0;
          }

          .${PAGE_ROOT} .qualification-copy {
            position: static;
          }

          .${PAGE_ROOT} .service-router {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .route {
            min-height: 0;
          }

          .${PAGE_ROOT} .cta-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .${PAGE_ROOT} .cta-panel .btn-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 640px) {
          .${PAGE_ROOT} .shell {
            width: calc(100% - 40px);
          }

          .${PAGE_ROOT} .section,
          .${PAGE_ROOT} .section.compact {
            padding: 68px 0;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} h3 {
            font-size: 21px;
          }

          .${PAGE_ROOT} .hero {
            padding: 68px 0 58px;
          }

          .${PAGE_ROOT} .hero-copy .hero-lead {
            font-size: 18px;
          }

          .${PAGE_ROOT} .hero-copy .hero-support {
            font-size: 17px;
          }

          .${PAGE_ROOT} .hero .btn-row,
          .${PAGE_ROOT} .final-cta .btn-row {
            width: 100%;
          }

          .${PAGE_ROOT} .hero .btn,
          .${PAGE_ROOT} .final-cta .btn {
            width: 100%;
          }

          .${PAGE_ROOT} .hero-art {
            margin-top: 6px;
          }

          .${PAGE_ROOT} .trust-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .trust-item,
          .${PAGE_ROOT} .trust-item:first-child,
          .${PAGE_ROOT} .trust-item:nth-child(3),
          .${PAGE_ROOT} .trust-item:last-child {
            padding: 20px 0;
            min-height: 0;
            border-right: 0;
            border-bottom: 1px solid var(--sesen-iso-divider);
          }

          .${PAGE_ROOT} .trust-item:last-child {
            border-bottom: 0;
          }

          .${PAGE_ROOT} .section-header.center-mobile {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE_ROOT} .section-header.center-mobile p {
            text-align: left;
          }

          .${PAGE_ROOT} .definition-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .${PAGE_ROOT} .authority-callout {
            padding: 24px;
            font-size: 21px;
          }

          .${PAGE_ROOT} .pillar-grid,
          .${PAGE_ROOT} .change-grid,
          .${PAGE_ROOT} .differentiator-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .pillar-item,
          .${PAGE_ROOT} .differentiator-item {
            min-height: 0;
          }

          .${PAGE_ROOT} .qms-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 32px 0;
          }

          .${PAGE_ROOT} .qms-list {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .scope-note {
            align-items: flex-start;
            flex-direction: column;
          }

          .${PAGE_ROOT} .workflow {
            grid-template-columns: 1fr;
            border-bottom: 0;
          }

          .${PAGE_ROOT} .workflow-step,
          .${PAGE_ROOT} .workflow-step:nth-child(4n) {
            grid-column: auto;
            border-right: 1px solid var(--sesen-iso-divider);
            border-bottom: 1px solid var(--sesen-iso-divider);
            display: grid;
            grid-template-columns: 48px minmax(0, 1fr);
            column-gap: 16px;
            align-items: start;
            padding: 26px 20px;
          }

          .${PAGE_ROOT} .workflow-step h3 {
            margin-top: 0;
          }

          .${PAGE_ROOT} .workflow-step p {
            grid-column: 2;
          }

          .${PAGE_ROOT} .version-visual {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .${PAGE_ROOT} .version-node {
            min-height: 112px;
          }

          .${PAGE_ROOT} .qmsr-date strong {
            font-size: 38px;
          }

          .${PAGE_ROOT} .why-three {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .${PAGE_ROOT} .route {
            padding: 26px;
          }

          .${PAGE_ROOT} .system-map-head {
            padding: 24px;
          }

          .${PAGE_ROOT} .system-map-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .system-map-item,
          .${PAGE_ROOT} .system-map-item.wide {
            grid-column: auto;
            border-right: 0 !important;
            border-bottom: 1px solid var(--sesen-iso-divider);
            padding: 22px 24px;
            background: #FFFFFF;
          }

          .${PAGE_ROOT} .system-map-item:last-child {
            border-bottom: 0;
            background: var(--sesen-iso-pale-blue);
          }

          .${PAGE_ROOT} .related-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 24px 0;
          }

          .${PAGE_ROOT} .related-row .editorial-link {
            grid-column: auto;
            margin-top: 8px;
            white-space: normal;
          }

          .${PAGE_ROOT} .faq-list {
            margin-top: -8px;
          }

          .${PAGE_ROOT} .faq-question {
            min-height: 70px;
            font-size: 19px;
          }

          .${PAGE_ROOT} .faq-answer {
            padding-right: 0;
          }

          .${PAGE_ROOT} .cta-panel {
            gap: 28px;
          }

          .${PAGE_ROOT} .cta-panel h2 {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
        }

        @media (max-width: 360px) {
          .${PAGE_ROOT} h1 {
            font-size: 38px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 30px;
          }

          .${PAGE_ROOT} .btn {
            padding-left: 20px;
            padding-right: 20px;
          }

          .${PAGE_ROOT} .workflow-step,
          .${PAGE_ROOT} .workflow-step:nth-child(4n) {
            grid-template-columns: 44px minmax(0, 1fr);
            column-gap: 14px;
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE_ROOT} .btn,
          .${PAGE_ROOT} .editorial-link svg {
            transition: none;
          }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">MEDICAL DEVICE QUALITY SYSTEMS</span>
              <h1>ISO 13485 Translation &amp; QMS Documentation Services</h1>
              <p className="hero-lead">
                Sesen helps medical device organizations translate quality management system documentation through controlled multilingual workflows supported by ISO 13485:2016, ISO 17100, and ISO 9001:2015-certified quality processes.
              </p>
              <p className="hero-support">
                From SOPs and work instructions to CAPA records, supplier quality documentation, audit materials, and controlled revisions, we help quality, regulatory, manufacturing, and document-control teams maintain accurate and consistent QMS content across languages.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="https://www.sesen.com/contact-sales/">CONTACT SALES</a>
                <a className="btn btn-secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className="trust-band" aria-label="Sesen quality credentials">
          <div className="shell trust-grid">
            <div className="trust-item">
              <strong>ISO 13485:2016 Certified</strong>
              <span>Medical device quality management</span>
            </div>
            <div className="trust-item">
              <strong>ISO 17100 Certified</strong>
              <span>Professional translation processes</span>
            </div>
            <div className="trust-item">
              <strong>ISO 9001:2015 Certified</strong>
              <span>Quality management</span>
            </div>
            <div className="trust-item">
              <strong>150+ Languages</strong>
              <span>Global multilingual support</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="standards-intro-grid">
              <div className="standards-intro-copy">
                <h2>What ISO 13485 Means for Medical Device Translation</h2>
                <p className="lead">
                  ISO 13485 is the internationally recognized quality management system standard developed specifically for medical devices. It establishes requirements for organizations involved in the design, production, installation, servicing, and related activities surrounding medical devices.
                </p>
                <p>
                  That distinction matters when evaluating a translation provider. ISO 13485 is not a translation standard. It provides the medical device quality-management framework within which controlled processes, suppliers, records, documentation, and risk-based activities may be managed.
                </p>
                <p>
                  ISO 17100 is the international standard specifically focused on translation services. It addresses the processes, resources, and other aspects involved in delivering professional translation services that meet applicable specifications.
                </p>
              </div>
              <div className="definition-panel">
                <div className="definition-row">
                  <div className="definition-code">ISO 13485</div>
                  <div>
                    <strong>Medical-device quality context</strong>
                    <span>Controlled processes, documentation, suppliers, risk awareness, and regulatory requirements.</span>
                  </div>
                </div>
                <div className="definition-row">
                  <div className="definition-code">ISO 17100</div>
                  <div>
                    <strong>Professional translation process</strong>
                    <span>Qualified resources, translation, revision, project management, and service delivery.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="authority-callout">
              ISO 13485 provides the medical-device quality context. ISO 17100 provides the professional translation-process framework. Sesen brings both disciplines together for regulated multilingual medical device content.
            </div>
          </div>
        </section>

        <section className="section pale">
          <div className="shell">
            <div className="section-header center-mobile">
              <h2>Why Translation Supplier Quality Matters in a Medical Device QMS</h2>
              <p>
                Medical device quality systems depend on controlled processes, qualified suppliers, accurate records, consistent procedures, and the ability to manage change over time. When multilingual content forms part of that environment, translation should be managed with the same attention to process discipline and documentation expected of other specialized external services.
              </p>
            </div>
            <div className="pillar-grid">
              {qualityPillars.map((item) => (
                <article className="pillar-item" key={item.title}>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-header">
              <h2>Medical Device QMS Documentation We Translate</h2>
              <p>
                Sesen supports multilingual quality management system content across medical device organizations, manufacturing operations, supplier networks, and global quality teams.
              </p>
            </div>
            <div className="qms-directory">
              {qmsGroups.map((group) => (
                <article className="qms-row" key={group.title}>
                  <div className="qms-row-heading">
                    <span className="icon-box"><Icon name={group.icon} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="qms-row-body">
                    <p>{group.intro}</p>
                    <ul className="qms-list">
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="scope-note">
              <p>
                Need broader support for IFUs, labeling, software, technical documentation, regulatory content, or post-market communication? Explore Sesen's comprehensive medical device translation services.
              </p>
              <ArrowLink href="https://www.sesen.com/medical-device-translation-services/">Medical Device Translation Services</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell">
            <div className="section-header">
              <h2>A Controlled Translation Workflow for QMS Documentation</h2>
              <p>
                Quality-system translation requires more than transferring words from one language to another. Sesen can configure workflows around controlled source documentation, approved terminology, qualified resources, independent review, quality assurance, and version-aware delivery.
              </p>
            </div>
            <div className="workflow">
              {workflowSteps.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section navy">
          <div className="shell">
            <div className="version-layout">
              <div className="version-copy">
                <h2>Keep Controlled QMS Documents Aligned Across Languages</h2>
                <p>
                  The translation of a controlled document is rarely a one-time event. An SOP may move from Rev. C to Rev. D. A manufacturing instruction may change after process validation. A CAPA may introduce updated terminology. A supplier procedure may be standardized across additional facilities.
                </p>
                <p>
                  Sesen supports recurring QMS translation programs with workflows designed to maintain continuity as controlled documents change.
                </p>
              </div>
              <VersionControlVisual />
            </div>
            <div className="change-grid">
              {changeControls.map((item) => (
                <article className="change-item" key={item.title}>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pale">
          <div className="shell qmsr-grid">
            <div className="qmsr-date">
              <span className="date-kicker">FDA QMSR EFFECTIVE</span>
              <strong>February 2,<br />2026</strong>
              <span>21 CFR Part 820 now incorporates ISO 13485:2016 by reference.</span>
            </div>
            <div className="qmsr-copy">
              <span className="eyebrow">U.S. QUALITY SYSTEM ALIGNMENT</span>
              <h2>ISO 13485 in the FDA QMSR Era</h2>
              <p className="lead">
                ISO 13485 has become even more central to the U.S. medical device quality landscape. FDA's Quality Management System Regulation, or QMSR, became effective on February 2, 2026 and incorporates ISO 13485:2016 by reference as the international quality-management-system standard for medical devices.
              </p>
              <p>
                The change brings FDA's medical device current good manufacturing practice requirements into closer alignment with the internationally recognized ISO 13485 framework.
              </p>
              <p>
                This does not mean every medical device translation automatically becomes an “ISO 13485 translation,” nor does it create a blanket requirement that every translation be separately ISO 13485 certified. Instead, it reinforces the importance of the quality systems within which medical device organizations manage processes, documentation, suppliers, records, and regulated activities.
              </p>
              <div className="qmsr-questions">
                <strong>For multilingual programs, practical quality questions include:</strong>
                <ul>
                  <li>Is the correct source revision being translated?</li>
                  <li>Are qualified resources used for specialized content?</li>
                  <li>Is approved terminology controlled across languages?</li>
                  <li>Are translation changes traceable?</li>
                  <li>Can recurring document revisions be managed consistently?</li>
                  <li>Can the translation supplier support quality and procurement onboarding requirements?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-header">
              <h2>ISO 13485, ISO 17100 &amp; ISO 9001: How the Standards Work Together</h2>
              <p>
                Different standards address different aspects of quality. Understanding those differences helps medical device organizations evaluate translation suppliers more accurately.
              </p>
            </div>
            <div className="standards-grid">
              {standards.map((standard) => (
                <article className="standard-column" key={standard.code}>
                  <span className="standard-code">{standard.code}</span>
                  <h3>{standard.title}</h3>
                  <p>{standard.text}</p>
                </article>
              ))}
            </div>
            <div className="why-three">
              <h3>Why Sesen Maintains All Three</h3>
              <p>
                Medical device clients need more than linguistic fluency. They need a language partner that understands the regulated quality environment surrounding the content as well as the professional processes required to translate it accurately. Sesen's quality framework combines medical-device quality-system awareness, professional translation-process controls, and broader organizational quality management.
              </p>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="shell qualification-layout">
            <div className="qualification-copy">
              <span className="eyebrow">ENTERPRISE ONBOARDING</span>
              <h2>Support for Translation Supplier Qualification</h2>
              <p>
                Selecting a medical device translation provider often involves more than evaluating language capabilities. Quality assurance, supplier quality, procurement, regulatory, information security, and localization teams may each need different information before a supplier can be approved.
              </p>
              <p>
                Sesen supports enterprise onboarding and supplier qualification with relevant quality and operational information based on client requirements.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="https://www.sesen.com/contact-sales/">DISCUSS SUPPLIER QUALIFICATION</a>
              </div>
            </div>
            <div className="qualification-list">
              {qualificationItems.map((item) => (
                <article className="qualification-item" key={item.title}>
                  <span className="qualification-check"><Icon name="check" size={18} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-header">
              <span className="eyebrow">CHOOSE THE RIGHT SERVICE</span>
              <h2>ISO 13485 Translation Is Not the Same as a Certified Translation</h2>
              <p>
                ISO-certified translation processes and certified translation deliverables describe different concepts. Understanding the distinction helps quality and regulatory teams request the right workflow and documentation for each project.
              </p>
            </div>
            <div className="service-router">
              <article className="route current">
                <span className="route-label">QMS &amp; QUALITY-SYSTEM CONTENT</span>
                <h3>ISO 13485 Translation &amp; QMS Documentation</h3>
                <p>
                  Best when the primary need is translation of quality-system content or a language provider operating within an ISO-certified medical device quality environment.
                </p>
                <ul>
                  <li>SOPs and work instructions</li>
                  <li>CAPA and nonconformance</li>
                  <li>Supplier quality documentation</li>
                  <li>Change control and audits</li>
                  <li>Manufacturing and validation content</li>
                </ul>
                <span className="route-current-text">Focused on QMS documentation and quality-system workflows</span>
              </article>
              <article className="route">
                <span className="route-label">CERTIFICATES &amp; ATTESTATIONS</span>
                <h3>Certified Medical Device Translation Services</h3>
                <p>
                  Best when a recipient, submission process, client procedure, or project specification calls for certification documentation.
                </p>
                <ul>
                  <li>Certificates of Accuracy</li>
                  <li>Certification statements</li>
                  <li>Translator qualifications</li>
                  <li>Supporting project records</li>
                  <li>Back translation where requested</li>
                </ul>
                <ArrowLink href="https://www.sesen.com/certified-medical-device-translation-services/">Certified Medical Device Translation</ArrowLink>
              </article>
              <article className="route">
                <span className="route-label">FULL DEVICE LIFECYCLE</span>
                <h3>Medical Device Translation Services</h3>
                <p>
                  Best for broader programs involving regulated and user-facing medical device content across the product lifecycle.
                </p>
                <ul>
                  <li>IFUs</li>
                  <li>Labeling and packaging</li>
                  <li>Technical documentation</li>
                  <li>Medical device software</li>
                  <li>Clinical, training, and post-market content</li>
                </ul>
                <ArrowLink href="https://www.sesen.com/medical-device-translation-services/">Medical Device Translation Services</ArrowLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section pale">
          <div className="shell system-layout">
            <div className="system-copy">
              <h2>QMS Translation Across the Quality System</h2>
              <p>
                A multilingual quality system is not simply a collection of translated files. A change to a manufacturing procedure can affect a work instruction. A CAPA can introduce a new corrective process. A supplier requirement can trigger updated training. A product change can require revised validation documentation.
              </p>
              <p>
                Sesen helps medical device organizations maintain multilingual consistency across connected quality processes—not just translate individual documents in isolation.
              </p>
            </div>
            <div className="system-map" aria-label="Connected QMS documentation model">
              <div className="system-map-head">
                <span>CONNECTED MULTILINGUAL CONTENT</span>
                <strong>Multilingual QMS</strong>
                <p>Quality documentation stays more coherent when terminology, revisions, and reviewer decisions are managed across the system rather than file by file.</p>
              </div>
              <div className="system-map-grid">
                {qualitySystemNodes.map((node, index) => (
                  <div className={`system-map-item ${index === qualitySystemNodes.length - 1 ? "wide" : ""}`} key={node.title}>
                    <strong>{node.title}</strong>
                    <p>{node.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-header center-mobile">
              <h2>Quality Infrastructure Built for Regulated Medical Device Content</h2>
              <p>
                Sesen specializes in life sciences translation and supports medical device organizations with specialized linguistic expertise, ISO-certified quality processes, terminology technology, human review, and scalable multilingual program management.
              </p>
            </div>
            <div className="differentiator-grid">
              {differentiators.map((item) => (
                <article className="differentiator-item" key={item.title}>
                  <span className="icon-box"><Icon name={item.icon} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section compact soft">
          <div className="shell">
            <div className="section-header">
              <h2>Connected Medical Device Translation Services</h2>
              <p>
                Choose the service that best matches your document type, workflow, and certification requirement. Sesen can coordinate related needs within a broader medical device translation program.
              </p>
            </div>
            <div className="related-list">
              {relatedServices.map((service) => (
                <article className="related-row" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ArrowLink href={service.href}>{service.action}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="section-header">
              <h2>ISO 13485 Translation Services FAQ</h2>
              <p>
                Answers to common questions about ISO 13485, medical device QMS translation, supplier qualification, FDA QMSR, translation certification, terminology, and controlled document updates.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell cta-panel">
            <div>
              <h2>Bring Multilingual QMS Documentation Under Control</h2>
              <p>
                Quality systems change. Procedures are revised. Suppliers are added. CAPAs introduce new controls. Manufacturing processes evolve. Sesen helps medical device organizations translate and maintain SOPs, work instructions, supplier quality documentation, CAPA records, audits, validation materials, manufacturing procedures, and other controlled content through specialized expertise and ISO-certified quality processes.
              </p>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
              <a className="btn btn-secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
