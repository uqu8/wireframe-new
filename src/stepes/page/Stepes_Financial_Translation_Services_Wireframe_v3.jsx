import React from "react";

export const financialTranslationPageMeta = {
  title: "Financial Translation Services for Banking & Finance | Stepes",
  description:
    "Secure financial translation services for banking, investment, fintech, reporting, disclosures, and digital financial content in 100+ languages.",
};

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  professional: "https://www.stepes.com/professional-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  app: "https://www.stepes.com/app-localization-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  banking: "https://www.stepes.com/banking-translation-services/",
  asset: "https://www.stepes.com/financial-translation-services/asset-wealth-management/",
  capital:
    "https://www.stepes.com/financial-translation-services/capital-markets-investor-relations/",
  accounting:
    "https://www.stepes.com/financial-translation-services/financial-reporting-accounting/",
  regulatory: "https://www.stepes.com/regulatory-financial-translation-services/",
  fintech: "https://www.stepes.com/fintech-translation-services/",
  insurance: "https://www.stepes.com/insurance-translation-services/",
  ai: "https://www.stepes.com/ai-translation-services/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  aiReview: "https://www.stepes.com/multilingual-ai-output-review/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  portal: "https://www.stepes.com/translation-management-portal/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  reporting: "https://www.stepes.com/translation-reporting-analytics/",
  api: "https://www.stepes.com/translation-api/",
  workflow: "https://www.stepes.com/translation-workflow-automation/",
  quality: "https://www.stepes.com/translation-quality-system/",
  security: "https://www.stepes.com/security/",
  languages: "https://www.stepes.com/translation-languages/",
  spanish: "https://www.stepes.com/spanish-translation-services/",
  chinese: "https://www.stepes.com/chinese-translation-services/",
  french: "https://www.stepes.com/french-translation-services/",
  german: "https://www.stepes.com/german-translation-services/",
  portuguese: "https://www.stepes.com/portuguese-translation-services/",
  numericAccuracy:
    "https://www.stepes.com/resources/blog-insights/ensuring-numeric-accuracy-in-financial-translation/",
  financialDisclosure:
    "https://www.stepes.com/resources/localization-guides/translating-financial-disclosure-documents/",
  priips:
    "https://www.stepes.com/resources/localization-guides/priips-kid-translation-localization/",
  esrs:
    "https://www.stepes.com/resources/localization-guides/multilingual-sustainability-reporting-revised-esrs/",
  esef:
    "https://www.stepes.com/resources/localization-guides/multilingual-esef-inline-xbrl-reporting/",
  aiFinance:
    "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-financial-services/",
};

const challengeItems = [
  {
    icon: "terms",
    title: "Financial Terminology Must Remain Precise",
    copy:
      "Terms can carry different meanings across retail banking, asset management, accounting, tax, insurance, and capital markets. Financial linguists apply the right terminology for the subject, audience, and jurisdiction.",
  },
  {
    icon: "numbers",
    title: "Numbers Are Part of the Message",
    copy:
      "Currency values, percentages, dates, decimal separators, negative figures, footnotes, table relationships, and performance data must stay aligned with the source.",
  },
  {
    icon: "globe",
    title: "Disclosure Language Varies by Market",
    copy:
      "Financial content may require different terminology, conventions, and presentation choices depending on the target jurisdiction and intended reader.",
  },
  {
    icon: "clock",
    title: "Publication Schedules Leave Little Margin",
    copy:
      "Earnings releases, fund updates, transaction materials, customer notices, and regulatory responses often follow fixed deadlines and coordinated review cycles.",
  },
  {
    icon: "layout",
    title: "Final-Format Accuracy Matters",
    copy:
      "A linguistically accurate translation can still fail when a table shifts, a chart label wraps incorrectly, or a footnote no longer connects to the right disclosure.",
  },
];

const solutionItems = [
  {
    icon: "document",
    title: "Professional Financial Document Translation",
    copy:
      "Translate reports, statements, investment materials, agreements, policies, market research, and other business-critical financial content with specialized linguists and configurable review.",
    link: URLS.professional,
    label: "Professional Translation Services",
  },
  {
    icon: "certificate",
    title: "Certified Financial Translation",
    copy:
      "Prepare bank statements, tax records, audit materials, corporate filings, financial evidence, and other official documents for submission requirements across jurisdictions.",
    link: URLS.certified,
    label: "Certified Translation Services",
  },
  {
    icon: "devices",
    title: "Financial Website, Software, and App Localization",
    copy:
      "Localize customer portals, digital banking interfaces, fintech applications, onboarding journeys, product dashboards, help content, and automated communications.",
    links: [
      ["Website Translation", URLS.website],
      ["Software Localization", URLS.software],
      ["App Localization", URLS.app],
    ],
  },
  {
    icon: "publishing",
    title: "Multilingual Financial Publishing",
    copy:
      "Preserve complex layouts across annual reports, investor presentations, fund documents, financial statements, charts, tables, and publication-ready files.",
    link: URLS.dtp,
    label: "Multilingual Desktop Publishing",
  },
];

const industries = [
  {
    title: "Banking and Lending",
    copy:
      "Stepes helps retail banks, commercial banks, credit providers, mortgage companies, and lending organizations communicate with customers, regulators, employees, and business partners across languages.",
    examples:
      "Account terms, fee schedules, loan agreements, mortgage documents, credit disclosures, onboarding materials, AML and KYC content, customer notices, internal procedures, and digital banking experiences.",
    link: URLS.banking,
    label: "Banking Translation Services",
  },
  {
    title: "Asset and Wealth Management",
    copy:
      "Asset managers, fund administrators, private banks, and wealth-management firms rely on consistent multilingual content to explain complex investment products and performance across markets.",
    examples:
      "Fund prospectuses, shareholder reports, factsheets, portfolio commentary, investment strategies, key information documents, adviser communications, and wealth-management platforms.",
    link: URLS.asset,
    label: "Asset and Wealth Management Translation Services",
  },
  {
    title: "Capital Markets and Investor Relations",
    copy:
      "Public companies, investment banks, securities firms, and investor-relations teams need accurate multilingual communications under demanding publication schedules.",
    examples:
      "Annual and interim reports, earnings releases, conference-call materials, investor presentations, offering documents, bond documentation, roadshow content, exchange announcements, and shareholder communications.",
    link: URLS.capital,
    label: "Capital Markets and Investor Relations",
  },
  {
    title: "Corporate Finance, Accounting, and Tax",
    copy:
      "Financial and accounting terminology must remain precise across entities, markets, and reporting periods while reflecting the purpose of each document.",
    examples:
      "Financial statements, audit materials, management reports, accounting policies, tax documents, transfer-pricing documentation, treasury communications, forecasts, budgets, and internal controls.",
    link: URLS.accounting,
    label: "Financial Reporting and Accounting Translation",
  },
  {
    title: "Regulatory, Risk, and Compliance",
    copy:
      "Global financial organizations manage reporting, governance, risk, and supervisory communications across multiple jurisdictions and stakeholder groups.",
    examples:
      "Regulatory reports, compliance policies, risk assessments, governance documentation, internal controls, stress-testing materials, regulatory correspondence, audit responses, and financial-crime prevention content.",
    link: URLS.regulatory,
    label: "Regulatory Financial Translation Services",
  },
  {
    title: "Fintech, Payments, and Digital Assets",
    copy:
      "Financial technology companies operate at the intersection of software, financial services, customer experience, and evolving regulation.",
    examples:
      "Payment products, digital wallets, banking applications, identity-verification workflows, onboarding, user interfaces, APIs, developer documentation, support content, notifications, and digital-asset communications.",
    link: URLS.fintech,
    label: "Fintech Translation Services",
  },
  {
    title: "Insurance and Reinsurance",
    copy:
      "Insurance is closely connected to financial services but requires specialized policy, actuarial, claims, investment, and regulatory knowledge.",
    examples:
      "Policyholder communications, financial and solvency reporting, product materials, actuarial content, reinsurance documents, investment communications, and internal governance content.",
    link: URLS.insurance,
    label: "Insurance Translation Services",
  },
];

const documentGroups = [
  {
    title: "Financial Reporting and Corporate Disclosures",
    items: [
      "Annual, interim, and quarterly reports",
      "Financial statements and accompanying notes",
      "Management discussion and analysis",
      "Audit reports and supporting materials",
      "Proxy statements",
      "Earnings releases and conference-call materials",
      "Investor presentations and shareholder communications",
      "Corporate governance reports and market announcements",
    ],
  },
  {
    title: "Investment and Fund Communications",
    items: [
      "Fund prospectuses and offering documents",
      "Shareholder reports and fund factsheets",
      "Portfolio reports and investment commentary",
      "Key information documents",
      "Risk and performance disclosures",
      "Adviser and intermediary communications",
      "Fund marketing materials and product updates",
      "Private-banking communications",
    ],
  },
  {
    title: "Banking and Lending Documents",
    items: [
      "Loan, credit, and mortgage agreements",
      "Account terms and conditions",
      "Fee schedules and credit disclosures",
      "Customer onboarding materials",
      "AML and KYC content",
      "Customer notices and collections communications",
      "Banking policies and procedures",
      "Digital banking content",
    ],
  },
  {
    title: "Capital Markets and Transaction Materials",
    items: [
      "Prospectuses and offering memoranda",
      "Term sheets",
      "Bond and note documentation",
      "Roadshow presentations",
      "Rating-agency submissions",
      "Due-diligence and M&A materials",
      "Private equity and valuation documents",
      "Financing documents and transaction summaries",
    ],
  },
  {
    title: "Governance, Risk, and Compliance Content",
    items: [
      "Codes of conduct and compliance manuals",
      "Risk reports and internal-control documentation",
      "Stress-testing and governance materials",
      "Board and committee content",
      "Regulatory correspondence",
      "Audit and examination materials",
      "Anti-financial-crime training",
      "Remediation plans and data-protection policies",
    ],
  },
  {
    title: "Fintech and Customer Experience Content",
    items: [
      "Website and application interfaces",
      "Product onboarding and identity verification",
      "Help centers, knowledge bases, and chatbot content",
      "Email and SMS notifications",
      "API and developer documentation",
      "Release notes and product policies",
      "Customer support content",
      "Incident communications and digital payment instructions",
    ],
  },
  {
    title: "Financial Research, Training, and Internal Communications",
    items: [
      "Market, economic, equity, and credit research",
      "Financial analysis",
      "Internal training and compliance eLearning",
      "Product training",
      "Sales enablement content",
      "Employee communications",
      "Policy summaries",
      "Executive presentations",
    ],
  },
];

const regulationGroups = [
  {
    title: "Corporate and Financial Reporting",
    copy:
      "Multilingual content associated with IFRS and local accounting environments, SEC reporting, annual and interim reports, ESEF publication workflows, stock-exchange announcements, and shareholder disclosures.",
    tags: ["IFRS", "SEC reporting", "ESEF", "Local GAAP"],
  },
  {
    title: "Investment Products and Markets",
    copy:
      "Fund, investment, and customer communications prepared for international product-disclosure and market-conduct environments.",
    tags: ["PRIIPs", "UCITS", "MiFID II", "AIFMD", "SFDR"],
  },
  {
    title: "Risk and Operational Resilience",
    copy:
      "Policies, training, supplier documentation, incident communications, governance content, and internal guidance covering technology risk, business continuity, and third-party relationships.",
    tags: ["Basel frameworks", "DORA", "Risk reporting"],
  },
  {
    title: "Digital Finance and Crypto-Assets",
    copy:
      "Customer communications, product information, risk warnings, policies, onboarding content, and supervisory documentation for digital finance and asset-related services.",
    tags: ["MiCA", "Digital assets", "Payments", "Risk warnings"],
  },
  {
    title: "Sustainability and Climate Reporting",
    copy:
      "Sustainability reports, materiality assessments, policies, data narratives, and investor communications prepared for evolving CSRD and revised ESRS, ISSB, GRI, SASB, and market-specific reporting environments.",
    tags: ["CSRD", "ESRS", "ISSB", "GRI", "SASB"],
  },
];

const aiTiers = [
  {
    label: "Highest-Risk Content",
    title: "Human-Led Financial Translation",
    copy:
      "Recommended where linguistic judgment, subject-matter expertise, and publication control carry the greatest importance.",
    examples: [
      "Audited financial reports",
      "Regulatory filings",
      "Prospectuses and offering documents",
      "Material investor disclosures",
      "Transaction and contractual content",
      "High-risk public communications",
    ],
  },
  {
    label: "Controlled Efficiency",
    title: "AI-Assisted Translation With Financial Review",
    copy:
      "Suitable for selected recurring or high-volume content when professional financial linguists review meaning, terminology, figures, completeness, tone, and market suitability.",
    examples: [
      "Fund and portfolio updates",
      "Financial research",
      "Internal policies and training",
      "Product documentation",
      "Customer communications",
      "Frequently updated digital content",
    ],
  },
  {
    label: "Selected Lower-Risk Content",
    title: "Configurable AI Translation and Review",
    copy:
      "A flexible workflow for content where speed, scale, and internal comprehension are the primary objectives and the client defines the required quality threshold.",
    examples: [
      "Internal knowledge content",
      "Searchable document archives",
      "Preliminary research",
      "Support articles",
      "High-volume product information",
      "Content intended for internal use",
    ],
  },
];

const qualityControls = [
  {
    icon: "people",
    title: "Financial Linguist Selection",
    copy:
      "Linguists are matched according to language, target market, financial specialization, content type, and project requirements.",
  },
  {
    icon: "review",
    title: "Independent Linguistic Review",
    copy:
      "Review can be configured according to the selected service level and the content’s risk, visibility, and intended use.",
  },
  {
    icon: "terms",
    title: "Financial Terminology Management",
    copy:
      "Client glossaries control accounting terms, product names, disclosure language, regulatory terminology, abbreviations, and regional preferences.",
    link: URLS.terminology,
    label: "Terminology Management",
  },
  {
    icon: "memory",
    title: "Translation Memory",
    copy:
      "Previously approved content can be reused and reviewed across recurring reports, updates, products, markets, and reporting periods.",
    link: URLS.translationMemory,
    label: "Translation Memory",
  },
  {
    icon: "numbers",
    title: "Numeric and Financial QA",
    copy:
      "Checks can cover figures, currencies, percentages, dates, separators, reporting periods, units, tables, footnotes, cross-references, and completeness.",
    link: URLS.numericAccuracy,
    label: "Ensuring Numeric Accuracy in Financial Translation",
  },
  {
    icon: "layout",
    title: "Final-Format Linguistic QA",
    copy:
      "Published files are reviewed for truncation, table alignment, chart labels, page references, typography, right-to-left presentation, and overall readability.",
  },
];

const workflowSteps = [
  {
    title: "Project Analysis and Risk Assessment",
    copy:
      "Review the content type, audience, languages, financial subject, file formats, confidentiality, deadline, certification needs, and required review level.",
  },
  {
    title: "Financial Linguist and Reviewer Selection",
    copy:
      "Match resources according to language pair, target market, subject expertise, document type, format, and program requirements.",
  },
  {
    title: "Terminology and Reference Preparation",
    copy:
      "Apply previous translations, glossaries, style guides, approved disclosures, product terminology, reference reports, and translation memory.",
  },
  {
    title: "Translation or Approved AI-Assisted Production",
    copy:
      "Use the client-approved production model, from professional human translation to a controlled AI-assisted workflow with expert review.",
  },
  {
    title: "Linguistic and Financial QA",
    copy:
      "Validate meaning, terminology, completeness, figures, formatting, consistency, and project-specific quality requirements.",
  },
  {
    title: "Formatting and In-Context Review",
    copy:
      "Review translated content in the document, interface, presentation, or publishing environment where customers and stakeholders will use it.",
  },
  {
    title: "Customer Review and Approval",
    copy:
      "Give authorized stakeholders a controlled way to review terminology, submit comments, and confirm preferred language.",
  },
  {
    title: "Secure Delivery and Continuous Improvement",
    copy:
      "Deliver the approved content and update terminology, translation memory, and project guidance for the next reporting cycle or release.",
  },
];

const securityItems = [
  "Confidentiality agreements and NDAs",
  "Access limited to authorized project participants",
  "Client-specific terminology and translation memory",
  "Controlled reviewer access",
  "Secure online review",
  "Defined retention and delivery instructions",
  "Customer-approved AI use",
  "Project-specific handling requirements",
];

const languageThemes = [
  {
    icon: "globe",
    title: "Regional Language Variants",
    copy:
      "Choose the appropriate market variety, including U.S., Latin American, or European Spanish; Brazilian or European Portuguese; Canadian or European French; and Simplified or Traditional Chinese.",
  },
  {
    icon: "numbers",
    title: "Number, Date, and Currency Conventions",
    copy:
      "Localize decimal and thousands separators, currency placement, codes, dates, percentages, negative values, abbreviations, and financial notation.",
  },
  {
    icon: "layout",
    title: "Multilingual Layout and Typography",
    copy:
      "Account for right-to-left presentation, CJK typography, font support, character rendering, text expansion, dense tables, chart labels, and multilingual templates.",
  },
  {
    icon: "review",
    title: "In-Market and Client Review",
    copy:
      "Include regional or client-side reviewers when local terminology, regulatory familiarity, product knowledge, or business approval is required.",
  },
];

const enterpriseCapabilities = [
  "Quarterly and annual financial reporting",
  "Recurring fund and product updates",
  "Multi-entity and multi-market content",
  "Central terminology governance",
  "Consistent translation teams",
  "Controlled stakeholder review",
  "Version and approval management",
  "Translation memory reuse",
  "Program reporting and workflow automation",
  "API-enabled translation processes",
];

const reportingPhases = [
  {
    label: "Prepare",
    title: "Establish the Language Foundation",
    copy:
      "Review previous reports, approved terminology, accounting references, product names, style requirements, and changed content before multilingual production begins.",
  },
  {
    label: "Translate and Validate",
    title: "Coordinate Languages, Figures, and Structure",
    copy:
      "Manage translation across languages while giving numbers, dates, currencies, tables, footnotes, cross-references, and final document structure dedicated attention.",
  },
  {
    label: "Approve and Reuse",
    title: "Support Review and the Next Reporting Cycle",
    copy:
      "Capture stakeholder feedback, approved terminology, translation memory, and style decisions so future quarterly, annual, and product updates begin from a stronger foundation.",
  },
];

const resources = [
  {
    category: "QUALITY CONTROL",
    title: "Ensuring Numeric Accuracy in Financial Translation",
    copy:
      "Review how professional translators and quality teams check currencies, percentages, dates, separators, tables, footnotes, and other quantitative information.",
    link: URLS.numericAccuracy,
    label: "Read the Numeric Accuracy Guide",
  },
  {
    category: "FINANCIAL REPORTING",
    title: "Translating Financial Disclosure Documents",
    copy:
      "Plan terminology, version control, tables, narrative disclosures, stakeholder review, and final-format QA for multilingual financial communications.",
    link: URLS.financialDisclosure,
    label: "Read the Disclosure Guide",
  },
  {
    category: "INVESTMENT PRODUCTS",
    title: "PRIIPs KID Translation and Localization",
    copy:
      "Manage recurring KID updates, investor-facing language, terminology consistency, formatting, and coordinated market review.",
    link: URLS.priips,
    label: "Read the PRIIPs Guide",
  },
  {
    category: "SUSTAINABILITY REPORTING",
    title: "Multilingual Sustainability Reporting Under the Revised ESRS",
    copy:
      "Coordinate narrative sections, financial data, policies, materiality assessments, and evolving multilingual reporting requirements.",
    link: URLS.esrs,
    label: "Read the ESRS Guide",
  },
  {
    category: "STRUCTURED REPORTING",
    title: "ESEF and Inline XBRL Multilingual Reporting",
    copy:
      "Understand how translation, XHTML, Inline XBRL, tables, tagging, layout, and final validation interact in multilingual reporting workflows.",
    link: URLS.esef,
    label: "Read the ESEF Guide",
  },
  {
    category: "AI + HUMAN QUALITY",
    title: "AI Translation for Financial Services",
    copy:
      "Evaluate where AI can improve efficiency, where professional human review remains essential, and how to establish appropriate governance and risk controls.",
    link: URLS.aiFinance,
    label: "Explore AI Translation for Finance",
  },
];

const faqs = [
  {
    question: "How Are Financial Translators Selected?",
    answer:
      "Stepes selects translators according to language skills, target-market knowledge, relevant financial specialization, content experience, and project requirements. Resource selection can distinguish between banking, asset management, accounting, tax, capital markets, fintech, insurance, and other financial disciplines. Reviewers and subject-matter specialists can be added according to the content’s risk and intended use.",
  },
  {
    question: "How Does Stepes Protect Confidential Financial Information?",
    answer:
      "Stepes supports secure financial translation through controlled project access, confidentiality agreements, secure file handling, client-specific language resources, and structured review workflows. Clients can communicate project-specific requirements for data handling, AI use, access, retention, and delivery during project onboarding.",
  },
  {
    question: "How Do You Check Numbers, Currencies, and Financial Tables?",
    answer:
      "Financial QA can include checks for figures, percentages, currency symbols, currency codes, dates, decimal separators, thousands separators, negative-number conventions, footnotes, cross-references, and table structure. Automated tools can flag potential inconsistencies, while professional linguists confirm the correct interpretation in context. Final-format review verifies that the content remains accurate and readable after layout.",
  },
  {
    question: "Can AI Be Used for Financial Translation?",
    answer:
      "Yes, but the appropriate workflow depends on the content. High-risk materials such as audited reports, public filings, prospectuses, transaction documents, and material investor disclosures generally require human-led translation and rigorous review. AI-assisted translation may be appropriate for selected recurring, internal, or high-volume content when it is combined with financial linguistic review and client-approved controls.",
  },
  {
    question: "Can Stepes Preserve Complex Financial Report Formatting?",
    answer:
      "Yes. Stepes supports financial documents created in Word, Excel, PowerPoint, InDesign, PDF, and other common formats. Multilingual desktop publishing and final-format QA can address tables, charts, footnotes, captions, headers, page references, line breaks, text expansion, right-to-left presentation, and Asian-language typography.",
  },
  {
    question: "Do You Provide Certified Financial Translations?",
    answer:
      "Stepes provides certified translations for financial documents that require a formal certification statement. Notarization or sworn translation can also be arranged where required and available. Requirements vary by receiving organization and jurisdiction, so the intended use should be confirmed at the beginning of the project.",
  },
  {
    question: "Can You Support Recurring Financial Reporting?",
    answer:
      "Yes. Stepes can establish ongoing workflows for quarterly and annual reports, fund updates, customer communications, policies, regulatory content, and other recurring financial materials. Translation memory, approved terminology, consistent linguist teams, version management, and stakeholder review help maintain continuity from one reporting cycle to the next.",
  },
  {
    question: "What Determines the Cost of Financial Translation?",
    answer:
      "Pricing depends on the language pair, source volume, subject-matter complexity, required review level, file format, turnaround, certification, desktop publishing, localization engineering, number of target languages, and repeated or previously translated content. Upload your files through the Stepes online quote system for a project-specific price and delivery estimate.",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="m11 6 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    document: (
      <svg {...common}>
        <path d="M7 3.5h7l3 3V20.5H7z" />
        <path d="M14 3.5v3h3" />
        <path d="M9.5 11h5M9.5 14h5M9.5 17h3" />
      </svg>
    ),
    certificate: (
      <svg {...common}>
        <circle cx="12" cy="9" r="5" />
        <path d="m9 14-1 6 4-2 4 2-1-6" />
        <path d="m10 9 1.3 1.3L14 7.6" />
      </svg>
    ),
    devices: (
      <svg {...common}>
        <rect x="3.5" y="5" width="12.5" height="10" rx="1.5" />
        <path d="M8 19h3.5M9.75 15v4" />
        <rect x="17" y="8" width="3.5" height="8" rx="1" />
      </svg>
    ),
    publishing: (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M8 4v16M11 8h6M11 12h6M11 16h4" />
      </svg>
    ),
    terms: (
      <svg {...common}>
        <path d="M4 5.5h9M4 10h7M4 14.5h6" />
        <path d="M15.5 11.5 18 18l1-2.7 2.5-.8-6-3z" />
      </svg>
    ),
    numbers: (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M7 8h4M7 12h3M7 16h4M14 8h3M14 12h3M14 16h3" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.8 8.7 8.8 12s1 6.1 3.2 8.5" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
    layout: (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="2" />
        <path d="M3.5 9h17M9 9v11" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.7-3.5 2.5-5.2 5.5-5.2s4.8 1.7 5.5 5.2" />
        <path d="M15 6.3a3 3 0 0 1 0 5.4M16 14.2c2.5.5 3.8 2.1 4.5 4.8" />
      </svg>
    ),
    review: (
      <svg {...common}>
        <path d="M5 4.5h11l3 3v12H5z" />
        <path d="M16 4.5v3h3M8 11h7M8 14h4" />
        <path d="m13.5 17 1.3 1.3 2.7-3" />
      </svg>
    ),
    memory: (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 2.8v2.4M15 2.8v2.4M9 18.8v2.4M15 18.8v2.4M2.8 9h2.4M18.8 9h2.4M2.8 15h2.4M18.8 15h2.4" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3.5 19 6v5.3c0 4.4-2.5 7.5-7 9.2-4.5-1.7-7-4.8-7-9.2V6z" />
        <path d="m8.8 12 2 2 4.5-4.5" />
      </svg>
    ),
    building: (
      <svg {...common}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M8 10v2M12 10v2M16 10v2M8 15v2M12 15v2M16 15v2M2.5 20h19" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M4 19.5V5M4 19.5h16" />
        <path d="m7 15 4-4 3 2 5-6" />
        <path d="M16.5 7H19v2.5" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="4.5" y="10" width="15" height="10" rx="2" />
        <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2.5" />
      </svg>
    ),
  };

  return icons[name] || icons.document;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorialLink ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function PrimaryCta({ href, children }) {
  return (
    <a className="ctaPrimary" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SecondaryCta({ href, children, dark = false }) {
  return (
    <a className={dark ? "ctaSecondary ctaSecondaryDark" : "ctaSecondary"} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`sectionHeading ${align === "center" ? "sectionHeadingCenter" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual" aria-hidden="true">
      <svg viewBox="0 0 650 530" fill="none">
        <defs>
          <linearGradient id="heroSheet" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#faf7f9" />
          </linearGradient>
          <linearGradient id="heroAccent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#C11D63" />
            <stop offset="1" stopColor="#8F174B" />
          </linearGradient>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1E293B" floodOpacity="0.12" />
          </filter>
        </defs>

        <circle cx="510" cy="118" r="92" fill="#FDF2F7" />
        <circle cx="95" cy="398" r="58" fill="#F6F7F9" />
        <path d="M36 435c116 58 227 42 331-4 90-40 168-60 252-28" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5 10" />

        <g filter="url(#heroShadow)">
          <rect x="118" y="62" width="374" height="386" rx="28" fill="url(#heroSheet)" stroke="#D5DAE2" strokeWidth="2" />
        </g>

        <rect x="150" y="94" width="310" height="48" rx="14" fill="#F6F7F9" />
        <rect x="170" y="110" width="112" height="10" rx="5" fill="#636E7E" />
        <rect x="374" y="108" width="60" height="14" rx="7" fill="#F3D6E3" />
        <text x="386" y="119" fill="#9F1D55" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700">FY 2026</text>

        <rect x="150" y="164" width="150" height="108" rx="18" fill="#FFFFFF" stroke="#DDE1E7" strokeWidth="1.5" />
        <text x="170" y="190" fill="#667085" fontFamily="Arial, sans-serif" fontSize="12">REVENUE</text>
        <text x="170" y="224" fill="#1C2431" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700">$248.6M</text>
        <path d="M170 248c20-8 36-2 51-13 15-11 30-6 52-30" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
        <circle cx="273" cy="205" r="4" fill="#C11D63" />

        <rect x="316" y="164" width="144" height="108" rx="18" fill="#FFFFFF" stroke="#DDE1E7" strokeWidth="1.5" />
        <text x="336" y="190" fill="#667085" fontFamily="Arial, sans-serif" fontSize="12">OPERATING MARGIN</text>
        <text x="336" y="224" fill="#1C2431" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700">18.4%</text>
        <rect x="336" y="242" width="98" height="8" rx="4" fill="#E9ECF0" />
        <rect x="336" y="242" width="66" height="8" rx="4" fill="#AEB6C2" />

        <rect x="150" y="292" width="310" height="126" rx="18" fill="#FFFFFF" stroke="#DDE1E7" strokeWidth="1.5" />
        <text x="170" y="318" fill="#667085" fontFamily="Arial, sans-serif" fontSize="12">MULTILINGUAL REPORTING</text>
        <path d="M170 338h270M170 364h270M170 390h270" stroke="#E5E7EB" strokeWidth="1.5" />
        <path d="M260 326v80M350 326v80" stroke="#E5E7EB" strokeWidth="1.5" />
        <rect x="174" y="345" width="56" height="8" rx="4" fill="#AEB6C2" />
        <rect x="274" y="345" width="42" height="8" rx="4" fill="#C7CDD5" />
        <rect x="364" y="345" width="51" height="8" rx="4" fill="#C7CDD5" />
        <rect x="174" y="371" width="64" height="8" rx="4" fill="#AEB6C2" />
        <rect x="274" y="371" width="32" height="8" rx="4" fill="#C7CDD5" />
        <rect x="364" y="371" width="45" height="8" rx="4" fill="#C7CDD5" />
        <rect x="174" y="397" width="48" height="8" rx="4" fill="#AEB6C2" />
        <rect x="274" y="397" width="38" height="8" rx="4" fill="#C7CDD5" />
        <rect x="364" y="397" width="56" height="8" rx="4" fill="#C7CDD5" />

        <g filter="url(#heroShadow)">
          <rect x="44" y="124" width="132" height="136" rx="22" fill="#FFFFFF" stroke="#D5DAE2" strokeWidth="1.5" />
        </g>
        <circle cx="110" cy="171" r="27" fill="#FDF2F7" />
        <path d="M96 171h28M110 157c6 7 8 15 8 14s-2 7-8 14M110 157c-6 7-8 15-8 14s2 7 8 14" stroke="#9F1D55" strokeWidth="1.8" />
        <text x="66" y="219" fill="#1C2431" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">100+ LANGUAGES</text>
        <text x="80" y="241" fill="#667085" fontFamily="Arial, sans-serif" fontSize="11">EN · FR · DE · JA</text>

        <g filter="url(#heroShadow)">
          <rect x="454" y="338" width="156" height="126" rx="22" fill="#FFFFFF" stroke="#D5DAE2" strokeWidth="1.5" />
        </g>
        <circle cx="494" cy="378" r="20" fill="url(#heroAccent)" />
        <path d="m485 378 6 6 12-13" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="526" y="376" fill="#1C2431" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">FINANCIAL QA</text>
        <text x="526" y="395" fill="#667085" fontFamily="Arial, sans-serif" fontSize="11">Figures checked</text>
        <rect x="474" y="420" width="116" height="9" rx="4.5" fill="#E9ECF0" />
        <rect x="474" y="420" width="92" height="9" rx="4.5" fill="#AEB6C2" />
        <circle cx="589" cy="424.5" r="5" fill="#C11D63" />

        <g filter="url(#heroShadow)">
          <rect x="456" y="80" width="142" height="96" rx="20" fill="#FFFFFF" stroke="#D5DAE2" strokeWidth="1.5" />
        </g>
        <path d="M487 128v-19a15 15 0 0 1 30 0v19" stroke="#4D5969" strokeWidth="2" />
        <rect x="478" y="121" width="48" height="34" rx="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.6" />
        <circle cx="502" cy="136" r="3" fill="#C11D63" />
        <text x="538" y="123" fill="#1C2431" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700">SECURE</text>
        <text x="538" y="142" fill="#667085" fontFamily="Arial, sans-serif" fontSize="10">WORKFLOW</text>
      </svg>
    </div>
  );
}

function StructuredReportingVisual() {
  return (
    <div className="reportingVisual" aria-hidden="true">
      <div className="reportingToolbar">
        <span className="windowDot" />
        <span className="windowDot" />
        <span className="windowDot" />
        <span className="reportingFile">Annual_Report_FY2026.xhtml</span>
      </div>
      <div className="reportingCanvas">
        <div className="reportingSheet">
          <div className="reportingSheetTop">
            <div>
              <div className="uiEyebrow">CONSOLIDATED STATEMENT</div>
              <div className="uiTitle">Financial Position</div>
            </div>
            <div className="uiPill">Inline XBRL</div>
          </div>
          <div className="reportingTable">
            <div className="reportingRow reportingHeader">
              <span>Assets</span>
              <span>2026</span>
              <span>2025</span>
            </div>
            <div className="reportingRow">
              <span>Cash and equivalents</span>
              <span>42,851</span>
              <span>39,620</span>
            </div>
            <div className="reportingRow selectedRow">
              <span>Financial investments</span>
              <span>138,904</span>
              <span>126,775</span>
            </div>
            <div className="reportingRow">
              <span>Total assets</span>
              <span>248,603</span>
              <span>229,417</span>
            </div>
          </div>
          <div className="reportingNote">
            <span className="noteMarker">12</span>
            <span>Translated narrative, table values, labels, and footnotes remain coordinated through publication.</span>
          </div>
        </div>
        <div className="reportingSide">
          <div className="sideTitle">Structured Content</div>
          <div className="sideItem activeSideItem">
            <span>Narrative</span>
            <span>Approved</span>
          </div>
          <div className="sideItem">
            <span>Tables</span>
            <span>Validated</span>
          </div>
          <div className="sideItem">
            <span>Footnotes</span>
            <span>Linked</span>
          </div>
          <div className="sideItem">
            <span>Tags</span>
            <span>Coordinated</span>
          </div>
          <div className="sideCheck">
            <Icon name="review" size={20} />
            <span>Final-format QA ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="platformVisual" aria-hidden="true">
      <div className="platformTopbar">
        <div className="platformBrand">Financial Translation Program</div>
        <div className="platformBadge">Q3 Reporting Cycle</div>
      </div>
      <div className="platformBody">
        <div className="platformSidebar">
          <div className="sidebarItem sidebarItemActive">Overview</div>
          <div className="sidebarItem">Projects</div>
          <div className="sidebarItem">Terminology</div>
          <div className="sidebarItem">Reports</div>
        </div>
        <div className="platformMain">
          <div className="platformStats">
            <div>
              <span className="uiEyebrow">ACTIVE LANGUAGES</span>
              <strong>12</strong>
            </div>
            <div>
              <span className="uiEyebrow">REVIEW PROGRESS</span>
              <strong>78%</strong>
            </div>
            <div>
              <span className="uiEyebrow">APPROVED TERMS</span>
              <strong>1,284</strong>
            </div>
          </div>
          <div className="projectList">
            <div className="projectHeader">
              <span>Content</span>
              <span>Languages</span>
              <span>Status</span>
            </div>
            <div className="projectRow">
              <span>Interim financial report</span>
              <span>8</span>
              <span className="status statusReview">In review</span>
            </div>
            <div className="projectRow">
              <span>Fund factsheet update</span>
              <span>12</span>
              <span className="status statusQa">Financial QA</span>
            </div>
            <div className="projectRow">
              <span>Investor presentation</span>
              <span>6</span>
              <span className="status statusApproved">Approved</span>
            </div>
          </div>
          <div className="platformTimeline">
            <span className="timelineDot timelineDone" />
            <span className="timelineLine timelineDoneLine" />
            <span className="timelineDot timelineDone" />
            <span className="timelineLine timelineActiveLine" />
            <span className="timelineDot timelineActive" />
            <span className="timelineLine" />
            <span className="timelineDot" />
          </div>
          <div className="platformTimelineLabels">
            <span>Intake</span>
            <span>Translation</span>
            <span>Review</span>
            <span>Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FinancialTranslationServicesWireframe() {
  return (
    <main className="financialPage">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #9F1D55;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --blush-strong: #F7E4ED;
          --eyebrow-dark: #F2A7C6;
          --ink: #111827;
          --ink-soft: #202A38;
          --body: #4E5969;
          --muted: #687386;
          --line: #E2E6EC;
          --line-dark: rgba(255, 255, 255, 0.14);
          --surface: #F7F8FA;
          --surface-2: #F1F3F6;
          --dark: #18202C;
          --dark-2: #222B38;
          --white: #FFFFFF;
          --radius-lg: 30px;
          --radius-md: 22px;
          --shadow: 0 20px 50px rgba(17, 24, 39, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .financialPage {
          overflow: hidden;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .financialPage a {
          color: inherit;
          text-decoration: none;
        }

        .financialPage button,
        .financialPage summary,
        .financialPage a {
          -webkit-tap-highlight-color: transparent;
        }

        .container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .section {
          padding: 96px 0;
        }

        .sectionDense {
          padding: 80px 0;
        }

        .sectionSurface {
          background: var(--surface);
        }

        .sectionBlush {
          background: linear-gradient(180deg, #fff 0%, #FDF7FA 100%);
        }

        .sectionDark {
          background: var(--dark);
          color: var(--white);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
          opacity: 1 !important;
        }

        .eyebrowDark {
          color: var(--eyebrow-dark) !important;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          color: inherit;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        h1 {
          max-width: 710px;
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.08;
        }

        h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.17;
        }

        h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
        }

        p,
        li {
          color: var(--body);
          font-size: 16px;
          font-weight: 400;
        }

        .bodyLarge {
          color: var(--body);
          font-size: 18px;
          line-height: 1.7;
        }

        .heroSupport {
          max-width: 680px;
          margin-bottom: 30px;
          color: var(--body);
          font-size: 16px;
          line-height: 1.7;
        }

        .sectionHeading {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sectionHeading p {
          max-width: 790px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.7;
        }

        .sectionHeadingCenter {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sectionHeadingCenter p {
          margin-left: auto;
          margin-right: auto;
        }

        .ctaGroup {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .ctaPrimary,
        .ctaPrimary:link,
        .ctaPrimary:visited,
        .ctaPrimary:hover,
        .ctaPrimary:active,
        .ctaPrimary:focus,
        .ctaPrimary:focus-visible {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid var(--magenta);
          border-radius: 999px;
          background: var(--magenta);
          color: #FFFFFF !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
        }

        .ctaPrimary *,
        .ctaPrimary:link *,
        .ctaPrimary:visited *,
        .ctaPrimary:hover *,
        .ctaPrimary:active *,
        .ctaPrimary:focus *,
        .ctaPrimary:focus-visible * {
          color: #FFFFFF !important;
          fill: none;
          stroke: currentColor;
        }

        .ctaPrimary:hover {
          transform: translateY(-2px);
          background: var(--magenta-dark);
          box-shadow: 0 16px 30px rgba(193, 29, 99, 0.24);
        }

        .ctaPrimary:focus-visible,
        .ctaSecondary:focus-visible,
        .editorialLink:focus-visible,
        details summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .ctaSecondary,
        .ctaSecondary:link,
        .ctaSecondary:visited {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--white);
          color: var(--ink) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 180ms ease, border-color 180ms ease, color 180ms ease;
        }

        .ctaSecondary:hover {
          transform: translateY(-2px);
          border-color: #BBC2CC;
          color: var(--magenta) !important;
        }

        .ctaSecondaryDark,
        .ctaSecondaryDark:link,
        .ctaSecondaryDark:visited {
          border-color: rgba(255, 255, 255, 0.32);
          background: transparent;
          color: #FFFFFF !important;
        }

        .ctaSecondaryDark:hover {
          border-color: rgba(255, 255, 255, 0.7);
          color: #FFFFFF !important;
        }

        .editorialLink,
        .editorialLink:link,
        .editorialLink:visited {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
        }

        .editorialLink svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .editorialLink:hover svg {
          transform: translateX(3px);
        }

        .editorialLinkOnDark,
        .editorialLinkOnDark:link,
        .editorialLinkOnDark:visited {
          color: var(--eyebrow-dark) !important;
        }

        .hero {
          position: relative;
          padding: 104px 0 88px;
          background:
            radial-gradient(circle at 86% 18%, rgba(193, 29, 99, 0.075), transparent 26%),
            linear-gradient(180deg, #FFFFFF 0%, #FBFBFC 100%);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(430px, 0.95fr);
          gap: 60px;
          align-items: center;
        }

        .heroCopy {
          position: relative;
          z-index: 1;
        }

        .heroCopy h1 {
          margin-top: 0;
        }

        .heroCopy .bodyLarge {
          max-width: 710px;
          margin-bottom: 30px;
        }


        .heroVisual {
          width: 100%;
          max-width: 630px;
          margin-left: auto;
        }

        .heroVisual svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .trustStrip {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--white);
        }

        .trustGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          min-height: 92px;
          align-items: stretch;
        }

        .trustItem {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 18px;
          color: var(--ink-soft);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
        }

        .trustItem + .trustItem {
          border-left: 1px solid var(--line);
        }

        .overviewGrid {
          display: grid;
          grid-template-columns: minmax(270px, 0.72fr) minmax(0, 1.28fr);
          gap: 80px;
          align-items: start;
        }

        .overviewIntro {
          position: sticky;
          top: 28px;
        }

        .overviewIntro p {
          max-width: 480px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.7;
        }

        .editorialRows {
          border-top: 1px solid var(--line);
        }

        .editorialRow {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 22px;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }

        .iconWell {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--surface);
          color: var(--ink-soft);
        }

        .editorialRow h3 {
          margin: 0 0 8px;
          font-size: 21px;
          letter-spacing: -0.015em;
        }

        .editorialRow p {
          max-width: 760px;
          margin-bottom: 0;
        }

        .solutionsPanel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .solutionItem {
          min-height: 330px;
          padding: 38px;
        }

        .solutionItem:nth-child(odd) {
          border-right: 1px solid var(--line);
        }

        .solutionItem:nth-child(-n + 2) {
          border-bottom: 1px solid var(--line);
        }

        .solutionIcon {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          border-radius: 16px;
          background: var(--blush);
          color: var(--magenta-dark);
        }

        .solutionItem p {
          max-width: 510px;
          margin-bottom: 22px;
        }

        .linkList {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 20px;
        }

        .industryList {
          border-top: 1px solid var(--line);
        }

        .industryItem {
          display: grid;
          grid-template-columns: minmax(210px, 0.58fr) minmax(0, 1.42fr);
          gap: 58px;
          padding: 34px 0;
          border-bottom: 1px solid var(--line);
        }

        .industryItem h3 {
          margin-bottom: 0;
        }

        .industryBody p {
          margin-bottom: 14px;
        }

        .industryExamples {
          color: var(--ink-soft);
        }

        .documentsPanel {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.035);
        }

        .documentsIntro {
          display: grid;
          grid-template-columns: minmax(260px, 0.78fr) minmax(0, 1.22fr);
          gap: 68px;
          padding: 42px;
          border-bottom: 1px solid var(--line-dark);
        }

        .documentsIntro h2 {
          margin-bottom: 0;
        }

        .documentsIntro p {
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 18px;
        }

        .documentGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .documentGroup {
          min-width: 0;
          padding: 32px;
          border-bottom: 1px solid var(--line-dark);
        }

        .documentGroup:nth-child(odd) {
          border-right: 1px solid var(--line-dark);
        }

        .documentGroup:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .documentGroup:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          border-right: 0;
        }

        .documentGroup h3 {
          margin-bottom: 24px;
          color: var(--white);
          font-size: 20px;
          line-height: 1.35;
        }

        .documentGroup ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .documentGroup li {
          position: relative;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 16px;
        }

        .documentGroup li::before {
          content: "";
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--eyebrow-dark);
        }

        .structuredGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(370px, 0.95fr);
          gap: 64px;
          align-items: center;
        }

        .structuredCopy p {
          margin-bottom: 18px;
        }

        .structuredList {
          display: grid;
          gap: 13px;
          margin: 26px 0 28px;
          padding: 0;
          list-style: none;
        }

        .structuredList li {
          position: relative;
          padding-left: 22px;
          color: var(--ink-soft);
        }

        .structuredList li::before {
          content: "";
          position: absolute;
          top: 0.7em;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--magenta);
        }

        .reportingVisual {
          overflow: hidden;
          border: 1px solid #D8DDE5;
          border-radius: var(--radius-lg);
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .reportingToolbar {
          display: flex;
          height: 48px;
          align-items: center;
          gap: 7px;
          padding: 0 18px;
          border-bottom: 1px solid var(--line);
          background: #F5F6F8;
        }

        .windowDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #C8CED7;
        }

        .reportingFile {
          overflow: hidden;
          margin-left: 10px;
          color: #657082;
          font-size: 14px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .reportingCanvas {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 178px;
          min-height: 430px;
        }

        .reportingSheet {
          padding: 30px;
        }

        .reportingSheetTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .uiEyebrow {
          color: #768194;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .uiTitle {
          margin-top: 5px;
          color: var(--ink);
          font-size: 19px;
          font-weight: 600;
        }

        .uiPill {
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--blush);
          color: var(--magenta-dark);
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .reportingTable {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 14px;
        }

        .reportingRow {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr 0.6fr;
          gap: 10px;
          padding: 14px 15px;
          border-bottom: 1px solid var(--line);
          color: #4F5A6B;
          font-size: 14px;
        }

        .reportingRow:last-child {
          border-bottom: 0;
        }

        .reportingHeader {
          background: #F7F8FA;
          color: #252F3D;
          font-weight: 600;
        }

        .selectedRow {
          box-shadow: inset 3px 0 0 var(--magenta);
          background: #FDF7FA;
        }

        .reportingNote {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          margin-top: 22px;
          color: #687386;
          font-size: 14px;
          line-height: 1.5;
        }

        .noteMarker {
          display: flex;
          width: 28px;
          height: 28px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #F0F2F5;
          color: #344054;
          font-size: 12px;
          font-weight: 600;
        }

        .reportingSide {
          padding: 30px 18px;
          border-left: 1px solid var(--line);
          background: #F8F9FB;
        }

        .sideTitle {
          margin-bottom: 18px;
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
        }

        .sideItem {
          display: grid;
          gap: 4px;
          margin-bottom: 10px;
          padding: 12px;
          border: 1px solid transparent;
          border-radius: 12px;
          color: #687386;
          font-size: 12px;
        }

        .sideItem span:first-child {
          color: #344054;
          font-size: 14px;
          font-weight: 600;
        }

        .activeSideItem {
          border-color: #EBC9D8;
          background: #FFFFFF;
          box-shadow: inset 3px 0 0 var(--magenta);
        }

        .sideCheck {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 26px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
          color: var(--magenta-dark);
          font-size: 13px;
          font-weight: 600;
        }

        .regulationLayout {
          display: grid;
          grid-template-columns: minmax(290px, 0.72fr) minmax(0, 1.28fr);
          gap: 76px;
          align-items: start;
        }

        .regulationIntro p {
          font-size: 18px;
        }

        .disclaimer {
          margin-top: 28px;
          padding: 18px 20px;
          border-left: 3px solid var(--magenta);
          background: var(--blush);
          color: #5A4A53;
          font-size: 16px;
        }

        .regulationList {
          border-top: 1px solid var(--line);
        }

        .regulationItem {
          display: grid;
          grid-template-columns: 205px minmax(0, 1fr);
          gap: 34px;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }

        .regulationItem h3 {
          margin-bottom: 0;
          font-size: 20px;
        }

        .regulationItem p {
          margin-bottom: 16px;
        }

        .tagRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          padding: 6px 10px;
          border: 1px solid #D8DDE5;
          border-radius: 999px;
          background: #FFFFFF;
          color: #525D6E;
          font-size: 14px;
          line-height: 1.2;
        }

        .aiIntro {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 70px;
          align-items: end;
          margin-bottom: 48px;
        }

        .aiIntro h2 {
          margin-bottom: 0;
        }

        .aiIntro p {
          margin-bottom: 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: 18px;
        }

        .aiPanel {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          overflow: hidden;
          border: 1px solid var(--line-dark);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.035);
        }

        .aiTier {
          padding: 36px 30px;
        }

        .aiTier + .aiTier {
          border-left: 1px solid var(--line-dark);
        }

        .aiTierLabel {
          margin-bottom: 18px;
          color: var(--eyebrow-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .aiTier h3 {
          min-height: 62px;
          color: #FFFFFF;
        }

        .aiTier p {
          min-height: 130px;
          margin-bottom: 24px;
          color: rgba(255, 255, 255, 0.74);
        }

        .aiTier ul {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .aiTier li {
          position: relative;
          padding-left: 18px;
          color: rgba(255, 255, 255, 0.84);
        }

        .aiTier li::before {
          content: "";
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--eyebrow-dark);
        }

        .aiControls {
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 36px;
          margin-top: 30px;
          padding: 30px 34px;
          border: 1px solid var(--line-dark);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.035);
        }

        .aiControls h3 {
          margin-bottom: 0;
          color: #FFFFFF;
        }

        .controlTags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .controlTags span {
          padding: 9px 13px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 14px;
        }

        .aiLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 22px;
          margin-top: 28px;
        }

        .qualityGrid {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 74px;
          align-items: start;
        }

        .qualityIntro p {
          font-size: 18px;
        }

        .qualityList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
        }

        .qualityItem {
          padding: 30px 28px 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .qualityItem:nth-child(odd) {
          padding-right: 32px;
          border-right: 1px solid var(--line);
        }

        .qualityItem:nth-child(even) {
          padding-left: 32px;
        }

        .qualityItemTop {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
        }

        .qualityIcon {
          display: flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: var(--surface);
          color: var(--ink-soft);
        }

        .qualityItem h3 {
          margin-top: 5px;
          font-size: 20px;
        }

        .qualityItem p {
          margin: 12px 0 6px;
        }

        .workflowShell {
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .workflowGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .workflowStep {
          min-height: 272px;
          padding: 32px 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .workflowStep:nth-child(4n) {
          border-right: 0;
        }

        .workflowStep:nth-child(n + 5) {
          border-bottom: 0;
        }

        .stepNumber {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 50%;
          background: var(--blush);
          color: var(--magenta-dark);
          font-size: 14px;
          font-weight: 600;
        }

        .workflowStep h3 {
          font-size: 19px;
        }

        .workflowStep p {
          margin-bottom: 0;
        }

        .securityGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(360px, 1.08fr);
          gap: 74px;
          align-items: center;
        }

        .securityCopy p {
          color: rgba(255, 255, 255, 0.74);
          font-size: 18px;
        }

        .securityList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 28px;
          margin: 28px 0 30px;
          padding: 0;
          list-style: none;
        }

        .securityList li {
          position: relative;
          padding-left: 25px;
          color: rgba(255, 255, 255, 0.83);
        }

        .securityList li::before {
          content: "";
          position: absolute;
          top: 0.58em;
          left: 0;
          width: 10px;
          height: 6px;
          border-left: 2px solid var(--eyebrow-dark);
          border-bottom: 2px solid var(--eyebrow-dark);
          transform: rotate(-45deg);
        }

        .securityVisual {
          position: relative;
          min-height: 480px;
          border: 1px solid var(--line-dark);
          border-radius: var(--radius-lg);
          background:
            radial-gradient(circle at 80% 15%, rgba(242, 167, 198, 0.15), transparent 24%),
            rgba(255, 255, 255, 0.035);
        }

        .securityDocument {
          position: absolute;
          top: 56px;
          left: 48px;
          width: calc(100% - 130px);
          min-height: 320px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 24px;
          background: #FFFFFF;
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.22);
        }

        .securityDocHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }

        .securityDocTitle {
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
        }

        .secureStatus {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--blush);
          color: var(--magenta-dark);
          font-size: 11px;
          font-weight: 600;
        }

        .securityLines {
          display: grid;
          gap: 14px;
        }

        .securityLine {
          height: 9px;
          border-radius: 5px;
          background: #E3E7EC;
        }

        .securityLine:nth-child(2) { width: 86%; }
        .securityLine:nth-child(3) { width: 94%; }
        .securityLine:nth-child(4) { width: 72%; }
        .securityLine:nth-child(5) { width: 89%; }

        .securityAccess {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid var(--line);
        }

        .avatarStack {
          display: flex;
        }

        .avatar {
          display: flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          margin-left: -7px;
          border: 2px solid #FFFFFF;
          border-radius: 50%;
          background: #EEF0F3;
          color: #536071;
          font-size: 11px;
          font-weight: 600;
        }

        .avatar:first-child { margin-left: 0; }

        .accessCopy {
          color: #687386;
          font-size: 12px;
          text-align: right;
        }

        .shieldBadge {
          position: absolute;
          right: 34px;
          bottom: 34px;
          display: flex;
          width: 112px;
          height: 112px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 30px;
          background: var(--magenta);
          color: #FFFFFF;
          box-shadow: 0 20px 34px rgba(193, 29, 99, 0.28);
        }

        .languageGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .languageTheme {
          padding: 32px 28px;
        }

        .languageTheme + .languageTheme {
          border-left: 1px solid var(--line);
        }

        .languageTheme .iconWell {
          margin-bottom: 24px;
        }

        .languageTheme h3 {
          font-size: 20px;
        }

        .languageTheme p {
          margin-bottom: 0;
        }

        .languageLinks {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 10px 24px;
          margin-top: 34px;
        }

        .languageLink {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
        }

        .enterpriseGrid {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(480px, 1.1fr);
          gap: 66px;
          align-items: center;
        }

        .enterpriseCopy p {
          font-size: 18px;
        }

        .enterpriseList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 24px;
          margin: 26px 0 28px;
          padding: 0;
          list-style: none;
        }

        .enterpriseList li {
          position: relative;
          padding-left: 20px;
          color: var(--ink-soft);
        }

        .enterpriseList li::before {
          content: "";
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--magenta);
        }

        .platformLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 20px;
        }

        .platformVisual {
          overflow: hidden;
          border: 1px solid #D9DEE6;
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          box-shadow: var(--shadow);
        }

        .platformTopbar {
          display: flex;
          height: 58px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0 24px;
          border-bottom: 1px solid var(--line);
          background: #FAFAFB;
        }

        .platformBrand {
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
        }

        .platformBadge {
          padding: 6px 10px;
          border-radius: 999px;
          background: var(--blush);
          color: var(--magenta-dark);
          font-size: 11px;
          font-weight: 600;
        }

        .platformBody {
          display: grid;
          grid-template-columns: 128px minmax(0, 1fr);
          min-height: 430px;
        }

        .platformSidebar {
          padding: 24px 14px;
          border-right: 1px solid var(--line);
          background: #F7F8FA;
        }

        .sidebarItem {
          margin-bottom: 7px;
          padding: 10px 12px;
          border-radius: 10px;
          color: #6A7485;
          font-size: 13px;
          font-weight: 600;
        }

        .sidebarItemActive {
          background: #FFFFFF;
          color: var(--magenta-dark);
          box-shadow: 0 8px 18px rgba(17, 24, 39, 0.06);
        }

        .platformMain {
          padding: 26px;
        }

        .platformStats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 22px;
        }

        .platformStats > div {
          padding: 15px;
          border: 1px solid var(--line);
          border-radius: 12px;
        }

        .platformStats strong {
          display: block;
          margin-top: 5px;
          color: var(--ink);
          font-size: 21px;
          font-weight: 600;
        }

        .projectList {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 14px;
        }

        .projectHeader,
        .projectRow {
          display: grid;
          grid-template-columns: 1.5fr 0.5fr 0.72fr;
          gap: 12px;
          align-items: center;
          padding: 13px 15px;
          font-size: 12px;
        }

        .projectHeader {
          background: #F7F8FA;
          color: #667085;
          font-weight: 600;
        }

        .projectRow {
          border-top: 1px solid var(--line);
          color: #344054;
          font-size: 13px;
        }

        .status {
          display: inline-flex;
          width: fit-content;
          padding: 5px 8px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 600;
        }

        .statusReview { background: #FDF2F7; color: #9F1D55; }
        .statusQa { background: #F0F2F5; color: #4E5969; }
        .statusApproved { background: #EDF6F1; color: #2F6F50; }

        .platformTimeline {
          display: flex;
          align-items: center;
          margin: 34px 8px 8px;
        }

        .timelineDot {
          width: 12px;
          height: 12px;
          flex: 0 0 auto;
          border: 2px solid #CDD3DC;
          border-radius: 50%;
          background: #FFFFFF;
        }

        .timelineDone {
          border-color: var(--magenta);
          background: var(--magenta);
        }

        .timelineActive {
          border-color: var(--magenta);
          box-shadow: 0 0 0 5px rgba(193, 29, 99, 0.12);
        }

        .timelineLine {
          height: 2px;
          flex: 1;
          background: #DDE2E8;
        }

        .timelineDoneLine { background: var(--magenta); }
        .timelineActiveLine { background: linear-gradient(90deg, var(--magenta), #DDE2E8); }

        .platformTimelineLabels {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          color: #6A7485;
          font-size: 10px;
          text-align: center;
        }

        .reportingProgram {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .reportingPhase {
          min-height: 250px;
          padding: 34px 32px;
          border-left: 1px solid var(--line);
        }

        .reportingPhase:first-child {
          border-left: 0;
        }

        .phaseLabel {
          margin-bottom: 20px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .reportingPhase h3 {
          font-size: 20px;
        }

        .reportingPhase p {
          margin-bottom: 0;
        }

        .resourceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .resourceCard {
          display: flex;
          min-height: 350px;
          flex-direction: column;
          padding: 30px;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          background: var(--white);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .resourceCard:hover {
          transform: translateY(-4px);
          border-color: #D2B0BF;
          box-shadow: 0 18px 36px rgba(17, 24, 39, 0.08);
        }

        .resourceCard .eyebrow {
          margin-bottom: 20px;
        }

        .resourceCard h3 {
          font-size: 21px;
        }

        .resourceCard p {
          margin-bottom: 24px;
        }

        .resourceCard .editorialLink {
          margin-top: auto;
        }

        .faqPanel {
          max-width: 1040px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: var(--white);
          box-shadow: var(--shadow);
        }

        .faqPanel details + details {
          border-top: 1px solid var(--line);
        }

        .faqPanel summary {
          position: relative;
          display: flex;
          min-height: 82px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 30px;
          color: var(--ink);
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          list-style: none;
        }

        .faqPanel summary::-webkit-details-marker {
          display: none;
        }

        .faqPanel summary::after {
          content: "+";
          display: flex;
          width: 34px;
          height: 34px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
          border-radius: 50%;
          color: var(--magenta);
          font-size: 22px;
          font-weight: 400;
        }

        .faqPanel details[open] summary::after {
          content: "−";
        }

        .faqAnswer {
          max-width: 840px;
          padding: 0 30px 28px;
        }

        .faqAnswer p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.75;
        }

        .finalCtaSection {
          padding: 92px 0;
          background: linear-gradient(135deg, #FFF8FB 0%, #F8EAF1 100%);
        }

        .finalCta {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(280px, 0.88fr);
          gap: 54px;
          overflow: hidden;
          align-items: center;
          padding: 56px 60px;
          border: 1px solid #EBCFDB;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.74);
          box-shadow: var(--shadow);
        }

        .finalCtaCopy {
          position: relative;
          z-index: 2;
        }

        .finalCtaCopy h2 {
          max-width: 720px;
        }

        .finalCtaCopy p {
          max-width: 700px;
          margin-bottom: 28px;
          font-size: 18px;
        }

        .finalArtwork {
          position: relative;
          min-height: 250px;
        }

        .finalDoc {
          position: absolute;
          top: 18px;
          right: 20px;
          width: 238px;
          height: 196px;
          border: 1px solid #DCC7D0;
          border-radius: 24px;
          background: #FFFFFF;
          box-shadow: 0 18px 36px rgba(77, 27, 49, 0.12);
          transform: rotate(4deg);
        }

        .finalDoc::before {
          content: "";
          position: absolute;
          top: 30px;
          left: 28px;
          width: 120px;
          height: 10px;
          border-radius: 5px;
          background: #4E5969;
          box-shadow:
            0 28px 0 #E2E6EC,
            0 52px 0 #E2E6EC,
            0 76px 0 #E2E6EC,
            62px 28px 0 #E2E6EC,
            74px 52px 0 #E2E6EC;
        }

        .finalSeal {
          position: absolute;
          right: 190px;
          bottom: 10px;
          display: flex;
          width: 104px;
          height: 104px;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          background: var(--magenta);
          color: #FFFFFF;
          box-shadow: 0 16px 30px rgba(193, 29, 99, 0.24);
          transform: rotate(-4deg);
        }

        .finalLanguagePill {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px 15px;
          border: 1px solid #E2C9D4;
          border-radius: 999px;
          background: #FFFFFF;
          color: var(--magenta-dark);
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 10px 22px rgba(77, 27, 49, 0.08);
        }

        @media (min-width: 1440px) {
          .container {
            padding-left: 56px;
            padding-right: 56px;
          }
        }

        @media (max-width: 1120px) {
          .heroGrid,
          .structuredGrid,
          .enterpriseGrid {
            grid-template-columns: 1fr 1fr;
            gap: 44px;
          }

          .heroGrid {
            grid-template-columns: minmax(0, 1.03fr) minmax(390px, 0.97fr);
          }

          .trustGrid {
            grid-template-columns: repeat(3, 1fr);
          }

          .trustItem:nth-child(4) {
            border-left: 0;
            border-top: 1px solid var(--line);
          }

          .trustItem:nth-child(5) {
            border-top: 1px solid var(--line);
          }

          .overviewGrid,
          .regulationLayout,
          .qualityGrid {
            gap: 50px;
          }

          .workflowGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .workflowStep:nth-child(2n) {
            border-right: 0;
          }

          .workflowStep:nth-child(4n) {
            border-right: 0;
          }

          .workflowStep:nth-child(n + 5) {
            border-bottom: 1px solid var(--line);
          }

          .workflowStep:nth-child(n + 7) {
            border-bottom: 0;
          }

          .languageGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .languageTheme:nth-child(3) {
            border-left: 0;
            border-top: 1px solid var(--line);
          }

          .languageTheme:nth-child(4) {
            border-top: 1px solid var(--line);
          }

          .resourceGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 920px) {
          .container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .section {
            padding: 80px 0;
          }

          .hero {
            padding: 88px 0 72px;
          }

          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }

          .heroGrid,
          .structuredGrid,
          .enterpriseGrid,
          .securityGrid {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            max-width: 760px;
          }

          .heroVisual {
            max-width: 660px;
            margin: 10px auto 0;
          }

          .overviewGrid,
          .regulationLayout,
          .qualityGrid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .overviewIntro {
            position: static;
          }

          .solutionsPanel,
          .aiPanel {
            grid-template-columns: 1fr;
          }

          .solutionItem,
          .solutionItem:nth-child(odd),
          .solutionItem:nth-child(-n + 2) {
            min-height: auto;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .solutionItem:last-child {
            border-bottom: 0;
          }

          .industryItem {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .documentsIntro,
          .aiIntro,
          .aiControls {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .documentGrid {
            grid-template-columns: 1fr;
          }

          .documentGroup,
          .documentGroup:nth-child(odd),
          .documentGroup:nth-last-child(-n + 2),
          .documentGroup:last-child:nth-child(odd) {
            grid-column: auto;
            border-right: 0;
            border-bottom: 1px solid var(--line-dark);
          }

          .documentGroup:last-child {
            border-bottom: 0;
          }

          .regulationItem {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .aiTier,
          .aiTier + .aiTier {
            border-left: 0;
            border-bottom: 1px solid var(--line-dark);
          }

          .aiTier:last-child {
            border-bottom: 0;
          }

          .aiTier h3,
          .aiTier p {
            min-height: 0;
          }

          .qualityList {
            grid-template-columns: 1fr;
          }

          .qualityItem,
          .qualityItem:nth-child(odd),
          .qualityItem:nth-child(even) {
            padding: 28px 0;
            border-right: 0;
          }

          .securityVisual {
            min-height: 430px;
          }

          .finalCta {
            grid-template-columns: 1fr;
          }

          .finalArtwork {
            min-height: 220px;
          }
        }

        @media (max-width: 768px) {
          .section,
          .sectionDense {
            padding: 68px 0;
          }

          .sectionHeading {
            margin-bottom: 38px;
          }

          .trustGrid {
            grid-template-columns: 1fr 1fr;
          }

          .trustItem,
          .trustItem:nth-child(4),
          .trustItem:nth-child(5) {
            border-top: 1px solid var(--line);
          }

          .trustItem:nth-child(-n + 2) {
            border-top: 0;
          }

          .trustItem:nth-child(odd) {
            border-left: 0;
          }

          .trustItem:nth-child(even) {
            border-left: 1px solid var(--line);
          }

          .trustItem:last-child {
            grid-column: 1 / -1;
            border-left: 0;
          }

          .documentsIntro {
            padding: 34px 26px;
          }

          .documentGroup {
            padding: 30px 26px;
          }

          .reportingCanvas {
            grid-template-columns: 1fr;
          }

          .reportingSide {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .reportingSide .sideTitle,
          .reportingSide .sideCheck {
            grid-column: 1 / -1;
          }

          .securityList,
          .enterpriseList {
            grid-template-columns: 1fr;
          }

          .reportingProgram {
            grid-template-columns: 1fr;
          }

          .reportingPhase,
          .reportingPhase:first-child {
            min-height: auto;
            padding: 30px 0;
            border-left: 0;
            border-bottom: 1px solid var(--line);
          }

          .reportingPhase:last-child {
            border-bottom: 0;
          }

          .resourceGrid {
            grid-template-columns: 1fr;
          }

          .resourceCard {
            min-height: auto;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero {
            padding: 72px 0 62px;
          }

          h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          .bodyLarge,
          .heroSupport,
          .sectionHeading p,
          .overviewIntro p,
          .regulationIntro p,
          .qualityIntro p,
          .enterpriseCopy p,
          .securityCopy p,
          .finalCtaCopy p,
          .aiIntro p,
          .documentsIntro p {
            font-size: 17px;
          }

          .ctaGroup {
            align-items: stretch;
            flex-direction: column;
          }

          .ctaPrimary,
          .ctaSecondary {
            width: 100%;
          }


          .trustGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .trustItem,
          .trustItem:nth-child(4),
          .trustItem:nth-child(5) {
            min-height: 78px;
            padding: 18px 10px;
            border-top: 1px solid var(--line);
          }

          .trustItem:nth-child(-n + 2) {
            border-top: 0;
          }

          .trustItem:nth-child(odd) {
            border-left: 0;
          }

          .trustItem:nth-child(even) {
            border-left: 1px solid var(--line);
          }

          .trustItem:last-child {
            grid-column: 1 / -1;
            border-left: 0;
          }

          .editorialRow {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 16px;
          }

          .iconWell {
            width: 42px;
            height: 42px;
          }

          .solutionItem {
            padding: 30px 24px;
          }

          .industryItem {
            padding: 28px 0;
          }

          .documentGroup {
            padding: 28px 24px;
          }

          .documentGroup ul {
            grid-template-columns: 1fr;
          }

          .documentGroup h3 {
            margin-bottom: 20px;
          }

          .reportingSheet {
            padding: 22px;
          }

          .reportingRow {
            grid-template-columns: minmax(0, 1.4fr) minmax(54px, 0.6fr);
            padding: 12px 10px;
            font-size: 13px;
          }

          .reportingRow span:nth-child(3) {
            display: none;
          }

          .reportingSide {
            grid-template-columns: 1fr;
          }

          .reportingSide .sideTitle,
          .reportingSide .sideCheck {
            grid-column: auto;
          }

          .aiTier {
            padding: 30px 24px;
          }

          .aiControls {
            padding: 26px 24px;
          }

          .qualityItemTop {
            grid-template-columns: 42px minmax(0, 1fr);
          }

          .workflowGrid {
            grid-template-columns: 1fr;
          }

          .workflowStep,
          .workflowStep:nth-child(2n),
          .workflowStep:nth-child(4n),
          .workflowStep:nth-child(n + 5),
          .workflowStep:nth-child(n + 7) {
            min-height: auto;
            padding: 28px 24px;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .workflowStep:last-child {
            border-bottom: 0;
          }

          .securityVisual {
            min-height: 400px;
          }

          .securityDocument {
            top: 42px;
            left: 24px;
            width: calc(100% - 64px);
            padding: 22px;
          }

          .shieldBadge {
            right: 20px;
            bottom: 22px;
            width: 92px;
            height: 92px;
            border-radius: 25px;
          }

          .languageGrid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .languageTheme,
          .languageTheme:nth-child(3),
          .languageTheme:nth-child(4) {
            padding: 28px 0;
            border-top: 0;
            border-left: 0;
            border-bottom: 1px solid var(--line);
          }

          .languageTheme:last-child {
            border-bottom: 0;
          }

          .platformBody {
            grid-template-columns: 1fr;
          }

          .platformSidebar {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 5px;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .sidebarItem {
            margin-bottom: 0;
            text-align: center;
          }

          .platformStats {
            grid-template-columns: 1fr;
          }

          .projectHeader {
            display: none;
          }

          .projectRow {
            grid-template-columns: minmax(0, 1fr) auto;
            gap: 12px;
            padding: 14px 12px;
            font-size: 13px;
          }

          .projectRow span:nth-child(2) {
            display: none;
          }

          .status {
            font-size: 11px;
          }


          .resourceCard {
            padding: 26px 24px;
          }

          .faqPanel summary {
            min-height: 78px;
            padding: 22px 20px;
            font-size: 17px;
          }

          .faqAnswer {
            padding: 0 20px 24px;
          }

          .finalCtaSection {
            padding: 68px 0;
          }

          .finalCta {
            padding: 38px 24px;
          }

          .finalArtwork {
            min-height: 200px;
          }

          .finalDoc {
            right: 4px;
            width: 208px;
            height: 176px;
          }

          .finalSeal {
            right: 148px;
            width: 88px;
            height: 88px;
            border-radius: 26px;
          }
        }

        @media (max-width: 390px) {
          .hero {
            padding-top: 66px;
          }

          .heroVisual {
            margin-left: -8px;
            margin-right: -8px;
            width: calc(100% + 16px);
          }

          .reportingSheetTop,
          .securityDocHeader,
          .platformTopbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .securityDocument {
            left: 16px;
            width: calc(100% - 40px);
          }

          .finalArtwork {
            margin-left: -10px;
            margin-right: -10px;
          }
        }

        @media (max-width: 330px) {
          .container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .projectRow {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <h1>Financial Translation Services</h1>
            <p className="bodyLarge">
              Accurate, secure multilingual content for banking, investment, fintech, financial reporting, and regulated global communications.
            </p>
            <p className="heroSupport">
              Stepes combines financial linguists, AI-assisted workflows, terminology management, numeric quality controls, and professional human review to translate financial documents and digital content in more than 100 languages.
            </p>
            <div className="ctaGroup">
              <PrimaryCta href={URLS.quote}>Get a Translation Quote</PrimaryCta>
              <SecondaryCta href={URLS.contact}>Talk to a Financial Expert</SecondaryCta>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trustStrip" aria-label="Financial translation trust signals">
        <div className="container trustGrid">
          {[
            "ISO 17100 Translation Quality",
            "ISO 9001 Quality Management",
            "100+ Languages",
            "AI + Financial Linguists",
            "Secure Enterprise Workflows",
          ].map((item) => (
            <div className="trustItem" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container overviewGrid">
          <div className="overviewIntro">
            <Eyebrow>Specialized Financial Expertise</Eyebrow>
            <h2>Financial Translation Requires More Than Linguistic Accuracy</h2>
            <p>
              Financial content brings language, numbers, regulation, and business risk together in the same document. Stepes manages the complete multilingual content lifecycle—not only the translated words.
            </p>
          </div>
          <div className="editorialRows">
            {challengeItems.map((item) => (
              <article className="editorialRow" key={item.title}>
                <div className="iconWell"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSurface">
        <div className="container">
          <SectionHeading
            eyebrow="End-to-End Language Services"
            title="Financial Translation Solutions for Every Content Channel"
            intro="Financial organizations communicate through documents, applications, websites, presentations, reporting systems, training materials, and customer-facing content. Stepes provides specialized translation and localization services across each channel."
            align="center"
          />
          <div className="solutionsPanel">
            {solutionItems.map((item) => (
              <article className="solutionItem" key={item.title}>
                <div className="solutionIcon"><Icon name={item.icon} size={26} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                {item.links ? (
                  <div className="linkList">
                    {item.links.map(([label, href]) => (
                      <EditorialLink href={href} key={label}>{label}</EditorialLink>
                    ))}
                  </div>
                ) : (
                  <EditorialLink href={item.link}>{item.label}</EditorialLink>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="financial-industry-expertise">
        <div className="container">
          <SectionHeading
            title="Financial Industry Expertise"
            intro="Financial services encompass multiple specialized disciplines, each with its own terminology, audiences, documents, and risk considerations. Stepes assigns linguists and reviewers according to both the required language pair and the financial subject matter of the project."
          />
          <div className="industryList">
            {industries.map((industry) => (
              <article className="industryItem" key={industry.title}>
                <h3>{industry.title}</h3>
                <div className="industryBody">
                  <p>{industry.copy}</p>
                  <p className="industryExamples"><strong>Common content:</strong> {industry.examples}</p>
                  <EditorialLink href={industry.link}>{industry.label}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark" id="documents">
        <div className="container">
          <div className="documentsPanel">
            <div className="documentsIntro">
              <div>
                <h2>Financial Documents and Content We Translate</h2>
              </div>
              <p>
                Stepes supports financial translation across print, digital, structured, and customer-facing content. Explore representative content categories below.
              </p>
            </div>
            <div className="documentGrid">
              {documentGroups.map((group) => (
                <article className="documentGroup" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container structuredGrid">
          <StructuredReportingVisual />
          <div className="structuredCopy">
            <Eyebrow>Document Engineering</Eyebrow>
            <h2>Financial Reporting and Structured Content Without Compromising the Data</h2>
            <p>
              Financial reports distribute meaning across narrative text, numerical tables, charts, footnotes, exhibits, references, and recurring disclosure language. Translation, formatting, and localization engineering must remain coordinated through review and publication.
            </p>
            <ul className="structuredList">
              <li>Support for Word, Excel, PowerPoint, InDesign, PDF, HTML, XML, JSON, XLIFF, and related formats</li>
              <li>Table, chart, caption, footnote, exhibit, and cross-reference review</li>
              <li>Translation memory and version comparison for recurring reports and updates</li>
              <li>Coordination of multilingual narrative content within ESEF and Inline XBRL workflows</li>
            </ul>
            <p>
              Stepes supports the multilingual content component of structured financial reporting. Final regulatory validation, tagging, assurance, and filing remain part of the issuer’s broader reporting process.
            </p>
            <EditorialLink href={URLS.esef}>Explore ESEF and Inline XBRL Reporting</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionSurface">
        <div className="container regulationLayout">
          <div className="regulationIntro">
            <Eyebrow>Global Reporting Context</Eyebrow>
            <h2>Supporting Financial Communications Across Regulatory Markets</h2>
            <p>
              Stepes helps organizations translate content prepared for international financial reporting, disclosure, governance, and customer-communication environments while maintaining centralized terminology and market-appropriate language.
            </p>
            <div className="disclaimer">
              Regulatory requirements vary by organization and jurisdiction and continue to change. Stepes provides translation and localization services and does not provide legal, accounting, investment, or regulatory advice.
            </div>
          </div>
          <div className="regulationList">
            {regulationGroups.map((group) => (
              <article className="regulationItem" key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  <p>{group.copy}</p>
                  <div className="tagRow">
                    {group.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionDark" id="ai-financial-translation">
        <div className="container">
          <div className="aiIntro">
            <div>
              <Eyebrow dark>Risk-Based AI + Human Workflows</Eyebrow>
              <h2>AI-Powered Financial Translation With Human Accountability</h2>
            </div>
            <p>
              A public filing, transaction agreement, internal training module, support article, and searchable archive should not automatically follow the same translation workflow. Stepes helps clients choose the right combination of human expertise, AI-assisted production, terminology control, and quality review.
            </p>
          </div>
          <div className="aiPanel">
            {aiTiers.map((tier) => (
              <article className="aiTier" key={tier.title}>
                <div className="aiTierLabel">{tier.label}</div>
                <h3>{tier.title}</h3>
                <p>{tier.copy}</p>
                <ul>
                  {tier.examples.map((example) => <li key={example}>{example}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="aiControls">
            <h3>Enterprise AI Controls</h3>
            <div className="controlTags">
              {[
                "Client-approved AI usage",
                "AI opt-out",
                "Human review requirements",
                "Client-specific translation memory",
                "Approved terminology",
                "Quality thresholds",
                "Version history",
                "Data-handling instructions",
                "Escalation of uncertain content",
              ].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="aiLinks">
            <EditorialLink href={URLS.ai} className="editorialLinkOnDark">AI Translation Services</EditorialLink>
            <EditorialLink href={URLS.mtpe} className="editorialLinkOnDark">Machine Translation Post-Editing</EditorialLink>
            <EditorialLink href={URLS.aiReview} className="editorialLinkOnDark">AI Output Review</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section" id="quality">
        <div className="container qualityGrid">
          <div className="qualityIntro">
            <h2>Quality Controls Designed for Financial Content</h2>
            <p>
              Financial translation quality depends on coordinated control of subject-matter meaning, terminology, quantitative information, formatting, and final publication context—not a final proofread alone.
            </p>
            <EditorialLink href={URLS.quality}>Explore the Stepes Translation Quality System</EditorialLink>
          </div>
          <div className="qualityList">
            {qualityControls.map((item) => (
              <article className="qualityItem" key={item.title}>
                <div className="qualityItemTop">
                  <div className="qualityIcon"><Icon name={item.icon} size={22} /></div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.copy}</p>
                {item.link ? <EditorialLink href={item.link}>{item.label}</EditorialLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSurface" id="workflow">
        <div className="container">
          <SectionHeading
            title="A Secure, Transparent Workflow From Source File to Final Delivery"
            intro="Each project is configured around the content’s purpose, audience, confidentiality, risk, format, and publication requirements. The workflow remains visible and repeatable across languages and reporting cycles."
            align="center"
          />
          <div className="workflowShell">
            <div className="workflowGrid">
              {workflowSteps.map((step, index) => (
                <article className="workflowStep" key={step.title}>
                  <div className="stepNumber">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <EditorialLink href={URLS.workflow}>Translation Workflow Automation</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionDark" id="security">
        <div className="container securityGrid">
          <div className="securityCopy">
            <Eyebrow dark>Confidentiality and Control</Eyebrow>
            <h2>Protecting Confidential and Market-Sensitive Financial Content</h2>
            <p>
              Financial translation projects may contain unpublished results, customer information, transaction documents, investment strategies, internal policies, pricing, personal data, and other confidential material.
            </p>
            <p>
              Stepes supports enterprise financial translation with controlled project access, secure file handling, confidentiality agreements, client-specific language resources, and structured project workflows. Security and data-handling requirements can be reviewed during onboarding and configured for the engagement.
            </p>
            <ul className="securityList">
              {securityItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="ctaGroup">
              <SecondaryCta href={URLS.contact} dark>Discuss Your Security Requirements</SecondaryCta>
              <EditorialLink href={URLS.security} className="editorialLinkOnDark">Enterprise Security</EditorialLink>
            </div>
          </div>
          <div className="securityVisual" aria-hidden="true">
            <div className="securityDocument">
              <div className="securityDocHeader">
                <div>
                  <div className="uiEyebrow">CONFIDENTIAL FINANCIAL CONTENT</div>
                  <div className="securityDocTitle">Quarterly Results Draft</div>
                </div>
                <div className="secureStatus"><Icon name="lock" size={14} /> Restricted</div>
              </div>
              <div className="securityLines">
                <div className="securityLine" />
                <div className="securityLine" />
                <div className="securityLine" />
                <div className="securityLine" />
                <div className="securityLine" />
              </div>
              <div className="securityAccess">
                <div className="avatarStack">
                  <span className="avatar">PM</span>
                  <span className="avatar">TR</span>
                  <span className="avatar">RV</span>
                </div>
                <div className="accessCopy">Authorized project participants only</div>
              </div>
            </div>
            <div className="shieldBadge"><Icon name="shield" size={48} /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Global Market Readiness"
            title="Financial Translation for More Than 100 Languages"
            intro="Effective financial localization goes beyond converting words. It also accounts for the way financial information is written, formatted, presented, and understood in each market."
            align="center"
          />
          <div className="languageGrid">
            {languageThemes.map((theme) => (
              <article className="languageTheme" key={theme.title}>
                <div className="iconWell"><Icon name={theme.icon} /></div>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </article>
            ))}
          </div>
          <div className="languageLinks">
            {[
              ["Spanish", URLS.spanish],
              ["Chinese", URLS.chinese],
              ["French", URLS.french],
              ["German", URLS.german],
              ["Portuguese", URLS.portuguese],
            ].map(([label, href]) => (
              <a className="languageLink" href={href} key={label}>{label} Translation Services</a>
            ))}
            <EditorialLink href={URLS.languages}>Explore All Translation Languages</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionSurface">
        <div className="container enterpriseGrid">
          <div className="enterpriseCopy">
            <Eyebrow>Enterprise Financial Programs</Eyebrow>
            <h2>Scale Financial Translation Across Markets and Business Units</h2>
            <p>
              Financial translation is often an ongoing operational requirement rather than a one-time project. Stepes helps enterprise teams establish repeatable workflows for complex multilingual programs.
            </p>
            <ul className="enterpriseList">
              {enterpriseCapabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>
              The Stepes translation management platform brings project intake, translation, terminology, review, status tracking, and delivery into a connected environment. Enterprise teams maintain oversight while business units and regional stakeholders participate according to their roles.
            </p>
            <div className="platformLinks">
              <EditorialLink href={URLS.enterprise}>Enterprise Translation Management</EditorialLink>
              <EditorialLink href={URLS.portal}>Customer Translation Portal</EditorialLink>
              <EditorialLink href={URLS.reporting}>Reporting and Analytics</EditorialLink>
              <EditorialLink href={URLS.api}>Translation API</EditorialLink>
            </div>
          </div>
          <PlatformVisual />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Built Around Financial Reporting Cycles"
            intro="A multilingual report often passes through finance, legal, investor relations, sustainability, design, localization, external advisers, and regional teams. Stepes connects the language workflow to that broader reporting process without rebuilding it from the beginning each cycle."
            align="center"
          />
          <div className="reportingProgram">
            {reportingPhases.map((item) => (
              <article className="reportingPhase" key={item.title}>
                <div className="phaseLabel">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBlush" id="resources">
        <div className="container">
          <SectionHeading
            eyebrow="Financial Translation Resources"
            title="Practical Guidance for Multilingual Financial Content"
            intro="Explore guidance for finance, compliance, investor-relations, product, and localization teams managing financial documents, structured reporting, sustainability disclosures, AI translation, and quality control."
            align="center"
          />
          <div className="resourceGrid">
            {resources.map((resource) => (
              <article className="resourceCard" key={resource.title}>
                <Eyebrow>{resource.category}</Eyebrow>
                <h3>{resource.title}</h3>
                <p>{resource.copy}</p>
                <EditorialLink href={resource.link}>{resource.label}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="container">
          <SectionHeading
            eyebrow="Planning Your Project"
            title="Financial Translation Services FAQs"
            intro="Find practical answers about financial expertise, confidentiality, numeric quality, AI workflows, document formatting, recurring reporting, certification, and pricing."
            align="center"
          />
          <div className="faqPanel">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <div className="faqAnswer"><p>{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCtaSection">
        <div className="container">
          <div className="finalCta">
            <div className="finalCtaCopy">
              <Eyebrow>Translate Financial Content With Confidence</Eyebrow>
              <h2>Ready to Take Your Financial Content Global?</h2>
              <p>
                Translate financial reports, disclosures, investment materials, banking content, fintech products, customer communications, and complex financial documents in more than 100 languages. Stepes combines financial subject-matter expertise, professional linguists, AI-powered workflows, terminology control, numeric quality assurance, and scalable enterprise delivery.
              </p>
              <div className="ctaGroup">
                <PrimaryCta href={URLS.quote}>Get a Translation Quote</PrimaryCta>
                <SecondaryCta href={URLS.contact}>Talk to Our Financial Translation Team</SecondaryCta>
              </div>
            </div>
            <div className="finalArtwork" aria-hidden="true">
              <div className="finalLanguagePill">EN → 100+ Languages</div>
              <div className="finalDoc" />
              <div className="finalSeal"><Icon name="chart" size={42} /></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
