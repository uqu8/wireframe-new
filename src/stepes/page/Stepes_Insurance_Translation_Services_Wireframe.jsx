import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const LineIcon = ({ name }) => {
  const paths = {
    policy: (
      <>
        <path d="M6 3h9l4 4v14H6Z" />
        <path d="M15 3v5h5M9 12h7M9 16h7M9 8h2" />
      </>
    ),
    claim: (
      <>
        <path d="M5 4h14v16H5Z" />
        <path d="M8 8h8M8 12h5M8 16h4" />
        <path d="m14 15 2 2 4-5" />
      </>
    ),
    underwriting: (
      <>
        <path d="M4 19 10 5h4l6 14" />
        <path d="M7 14h10M9 10h6" />
        <circle cx="12" cy="5" r="2" />
      </>
    ),
    compliance: (
      <>
        <path d="m12 3 8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    digital: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 7h8M8 11h5M8 15h8M10 18h4" />
      </>
    ),
    property: (
      <>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    life: (
      <>
        <path d="M12 20s-8-4.8-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6.2-8 11-8 11Z" />
      </>
    ),
    health: (
      <>
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z" />
      </>
    ),
    auto: (
      <>
        <path d="m5 10 2-5h10l2 5" />
        <path d="M4 10h16v7H4Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
        <path d="M7 13h.01M17 13h.01" />
      </>
    ),
    specialty: (
      <>
        <path d="M4 8h16v12H4Z" />
        <path d="M8 8V5h8v3M4 12h16M10 12v2h4v-2" />
      </>
    ),
    travel: (
      <>
        <path d="M3 12h18M12 3c2.7 2.7 4 5.7 4 9s-1.3 6.3-4 9c-2.7-2.7-4-5.7-4-9s1.3-6.3 4-9Z" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    reinsurance: (
      <>
        <path d="M4 8h7v12H4ZM13 4h7v16h-7Z" />
        <path d="M7 5h7M7 11h10M7 15h10" />
      </>
    ),
    insurtech: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="5" />
        <path d="M10 12h4M12 10v4" />
      </>
    ),
    ai: (
      <>
        <rect x="5" y="6" width="14" height="12" rx="3" />
        <path d="M9 11h.01M15 11h.01M9 15c1.5 1 4.5 1 6 0M12 3v3M3 12h2M19 12h2" />
      </>
    ),
    human: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
        <path d="m17 5 1-2M7 5 6 3" />
      </>
    ),
    terminology: (
      <>
        <path d="M4 5h7a3 3 0 0 1 3 3v12H7a3 3 0 0 0-3 1Z" />
        <path d="M20 5h-3a3 3 0 0 0-3 3v12h3a3 3 0 0 1 3 1Z" />
        <path d="M7 9h4M7 13h4M17 9h-1M17 13h-1" />
      </>
    ),
    memory: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    workflow: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="5" cy="18" r="2" />
        <path d="M7 6h5a4 4 0 0 1 4 4v0M17 14v0a4 4 0 0 1-4 4H7" />
      </>
    ),
    roles: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5h5v5M18.5 7.5 15 11" />
      </>
    ),
    api: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    quality: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 5 5M8 11l2 2 4-5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] || paths.policy}
    </svg>
  );
};

const InsuranceHeroArt = () => (
  <svg className="hero-art-svg" viewBox="0 0 650 520" aria-hidden="true">
    <defs>
      <linearGradient id="insuranceBlush" x1="0" x2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#FFF9FC" />
      </linearGradient>
      <filter id="insuranceShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="0" dy="13" stdDeviation="15" floodColor="#1B2230" floodOpacity="0.08" />
      </filter>
    </defs>

    <path
      d="M95 82c76-58 189-63 270-12 58 37 86 97 135 145 45 43 95 80 82 148-13 73-82 119-153 124-72 5-132-35-198-49-63-14-136-6-167-67-33-65-2-141 31-203Z"
      fill="url(#insuranceBlush)"
    />

    <g filter="url(#insuranceShadow)">
      <rect x="108" y="74" width="338" height="360" rx="28" fill="#fff" stroke="#D8DDE5" strokeWidth="2" />
      <path d="M374 74v74h72" fill="#FAFBFD" stroke="#D8DDE5" strokeWidth="2" />
      <path d="M374 74 446 148" stroke="#D8DDE5" strokeWidth="2" />
      <path d="M149 130h153" stroke="#242C38" strokeWidth="4" strokeLinecap="round" />
      <path d="M149 158h208M149 181h181" stroke="#7B8593" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="149" y="214" width="255" height="82" rx="16" fill="#FBFCFE" stroke="#E2E6EC" />
      <path d="M171 238h92M171 257h183M171 276h138" stroke="#727D8B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="371" cy="238" r="9" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="m367 238 3 3 6-7" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M149 326h209M149 349h161M149 372h190" stroke="#7B8593" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M149 400h96" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
    </g>

    <g transform="translate(382 244)" filter="url(#insuranceShadow)">
      <path d="m91 2 78 28v54c0 55-35 91-78 107-43-16-78-52-78-107V30Z" fill="#fff" stroke="#242C38" strokeWidth="3" />
      <path d="m56 91 23 23 48-58" fill="none" stroke="#C11D63" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M91 25v24" stroke="#D9DEE6" strokeWidth="2" />
    </g>

    <g transform="translate(62 290)" filter="url(#insuranceShadow)">
      <rect width="126" height="90" rx="18" fill="#fff" stroke="#D8DDE5" strokeWidth="2" />
      <path d="M23 27h58M23 47h78M23 66h42" stroke="#707A88" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="99" cy="28" r="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="M96 28h6M99 25v6" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
    </g>

    <g transform="translate(465 76)" filter="url(#insuranceShadow)">
      <rect width="130" height="104" rx="20" fill="#fff" stroke="#D8DDE5" strokeWidth="2" />
      <path d="M25 28h80M25 49h48M25 70h64" stroke="#707A88" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M93 70c0-13 11-24 24-24" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
      <path d="m111 40 8 6-9 5" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <path d="M188 335c43 0 43 51 86 51h76" fill="none" stroke="#7B8593" strokeWidth="2.5" strokeDasharray="5 8" strokeLinecap="round" />
    <circle cx="188" cy="335" r="6" fill="#C11D63" />
    <circle cx="350" cy="386" r="6" fill="#C11D63" />
    <path d="M505 180c0 27-18 41-37 55" fill="none" stroke="#7B8593" strokeWidth="2.5" strokeDasharray="5 8" strokeLinecap="round" />
    <circle cx="505" cy="180" r="6" fill="#C11D63" />
  </svg>
);

const lifecycleStages = [
  {
    title: "Product Development",
    text: "Translate product descriptions, policy forms, definitions, exclusions, endorsements, underwriting guidelines, and actuarial materials before market introduction.",
  },
  {
    title: "Quoting and Enrollment",
    text: "Localize product comparisons, applications, disclosures, agent resources, customer onboarding, quote flows, and enrollment experiences.",
  },
  {
    title: "Policy Issuance and Service",
    text: "Deliver multilingual policy packages, declarations, certificates, billing notices, customer correspondence, portals, and policy-management content.",
  },
  {
    title: "Claims and Resolution",
    text: "Support first notice of loss, evidence collection, investigation, coverage review, settlement, appeals, and policyholder communication.",
  },
  {
    title: "Renewal and Updates",
    text: "Keep policy revisions, endorsements, rate notices, regulatory communications, and digital content current through controlled reuse and versioning.",
  },
];

const contentGroups = [
  {
    icon: "policy",
    title: "Policies and Contractual Documents",
    text: "Maintain defined meaning and clause consistency across policy families, products, markets, and revisions.",
    items: ["Policy forms and wordings", "Declarations and schedules", "Coverage provisions", "Exclusions and limitations", "Riders and endorsements", "Certificates and evidence of coverage"],
  },
  {
    icon: "claim",
    title: "Claims and Loss Documentation",
    text: "Translate individual documents or connected case files while preserving names, dates, references, and technical details.",
    items: ["First notice of loss", "Adjuster reports", "Medical and repair records", "Police and incident reports", "Coverage letters", "Settlement and dispute materials"],
  },
  {
    icon: "underwriting",
    title: "Underwriting, Risk, and Actuarial Content",
    text: "Help underwriting and risk teams evaluate multilingual information and communicate decisions across markets.",
    items: ["Underwriting guidelines", "Risk assessments", "Loss-control reports", "Actuarial and rating materials", "Submissions and inspections", "Reinsurance documentation"],
  },
  {
    icon: "compliance",
    title: "Regulatory and Corporate Content",
    text: "Support legal, compliance, governance, training, and corporate teams with controlled multilingual communication.",
    items: ["Regulatory filings", "Consumer notices", "Compliance procedures", "Audit documentation", "Training and codes of conduct", "Annual and financial reports"],
  },
  {
    icon: "digital",
    title: "Digital and Customer Experience Content",
    text: "Create consistent multilingual experiences across acquisition, policy service, claims, and customer support channels.",
    items: ["Insurance websites", "Quoting and enrollment", "Policyholder portals", "Claims applications", "Knowledge bases and chat", "Email, SMS, and notifications"],
  },
];

const marketItems = [
  ["property", "Property and Casualty", "Personal, commercial, property, liability, casualty, and specialty policies, claims, risk, and policyholder content."],
  ["life", "Life Insurance and Annuities", "Applications, contracts, illustrations, disclosures, beneficiary communications, policy servicing, and claims."],
  ["health", "Health Insurance", "Plan documents, enrollment, benefits information, member communications, appeals, grievances, and digital member experiences."],
  ["auto", "Auto, Homeowners, and Renters", "Consumer policies, applications, damage assessments, repair materials, claims correspondence, and mobile experiences."],
  ["specialty", "Commercial and Specialty Lines", "Professional liability, cyber, marine, aviation, construction, energy, environmental, and complex commercial risks."],
  ["travel", "Travel and Assistance", "Policies, emergency support, medical documentation, claims content, customer notifications, and assistance workflows."],
  ["reinsurance", "Reinsurance", "Treaty and facultative documentation, bordereaux, actuarial reports, settlement materials, and cross-border risk communication."],
  ["insurtech", "Insurtech and Digital Insurance", "Embedded insurance, digital distribution, automated underwriting, self-service policy management, and mobile claims."],
];

const aiPaths = [
  {
    label: "Lower-Risk and High-Volume Content",
    title: "Secure AI Translation",
    text: "Accelerate multilingual access to suitable internal, repetitive, or time-sensitive content while applying client terminology and automated quality controls.",
    items: ["Preliminary claims review", "Internal reference content", "Knowledge-base updates", "Large operational collections"],
  },
  {
    label: "Recurring Customer and Operational Content",
    title: "AI Translation With Professional Review",
    text: "Combine AI efficiency with insurance-specialized post-editing for recurring content that requires speed, consistency, and polished customer communication.",
    items: ["Agent and broker resources", "Digital support content", "Training and product updates", "Ongoing customer communications"],
  },
  {
    label: "Contractual and High-Impact Content",
    title: "Professional Human Translation and Review",
    text: "Use qualified translators and independent reviewers for content with contractual, regulatory, claims-sensitive, legal, or public-facing impact.",
    items: ["Policies and endorsements", "Coverage determinations", "Regulatory materials", "Certified and litigation content"],
  },
];

const claimSteps = [
  ["Intake", "Claim Intake", "First notice of loss, claim forms, questionnaires, and initial policyholder statements."],
  ["Evidence", "Supporting Evidence", "Medical, legal, technical, repair, financial, police, and supporting documentation."],
  ["Investigation", "Adjuster and Expert Review", "Adjuster correspondence, interviews, expert reports, and case-specific communications."],
  ["Decision", "Coverage Decision", "Coverage analysis, reservation-of-rights letters, determinations, and customer notices."],
  ["Resolution", "Settlement and Appeals", "Settlement, payment, appeal, dispute, and litigation-support materials."],
];

const digitalJourneys = [
  {
    title: "Customer Acquisition",
    text: "Product pages, quote-generation workflows, comparisons, applications, eligibility questions, disclosures, and enrollment confirmations.",
  },
  {
    title: "Policy Management",
    text: "Customer dashboards, policy details, billing, renewals, coverage changes, beneficiary management, and secure document delivery.",
  },
  {
    title: "Digital Claims",
    text: "First-notice-of-loss interfaces, photo uploads, document submission, status tracking, adjuster messaging, and settlement workflows.",
  },
  {
    title: "Customer Support",
    text: "Help centers, knowledge bases, virtual assistants, email templates, notifications, contact forms, and contact-center scripts.",
  },
];

const enterpriseModules = [
  ["roles", "Roles and Approvals", "Route content through product, legal, compliance, regional, and release approvals with clear reviewer responsibilities."],
  ["workflow", "Workflow Automation", "Standardize intake, routing, linguist assignment, quality stages, notifications, due dates, and recurring project setup."],
  ["api", "API and Integrations", "Connect translation workflows with content systems, digital platforms, claims environments, and internal applications."],
  ["analytics", "Reporting and Analytics", "Track volumes, status, turnaround, language coverage, costs, translation-memory leverage, and program demand."],
  ["memory", "Reusable Language Assets", "Centralize translation memories, approved terminology, style guidance, and market-specific language decisions."],
];

const qualityItems = [
  ["quality", "Insurance-Specialized Linguists", "Assign translators and reviewers according to the insurance product, document purpose, audience, and related legal, medical, financial, or technical subject matter."],
  ["terminology", "Terminology and Clause Validation", "Check defined terms, approved wording, repeated clauses, product names, exclusions, cross-references, and market-specific language."],
  ["claim", "Numeric and Completeness Checks", "Verify premiums, deductibles, coverage limits, dates, percentages, currencies, policy numbers, claim numbers, tables, and schedules."],
  ["lock", "Controlled Access and Confidentiality", "Support sensitive insurance content through permission-based access, confidentiality-bound professionals, controlled sharing, and managed review workflows."],
];

const benefits = [
  ["human", "Insurance-Specialized Expertise", "Build translation teams around the product, content type, audience, target market, and relevant legal, financial, medical, or technical knowledge."],
  ["ai", "AI Efficiency With Human Governance", "Match secure AI, professional post-editing, specialist translation, and independent review to each content risk profile."],
  ["terminology", "Consistent Policy and Product Language", "Protect defined terms, repeated clauses, product names, and approved market terminology across every channel and version."],
  ["digital", "Document and Digital Coverage", "Manage policies and claims files alongside websites, portals, mobile apps, structured content, APIs, and continuous updates."],
  ["workflow", "Enterprise Scalability", "Support one urgent document, a connected claims package, or an ongoing multilingual program spanning products, teams, and markets."],
  ["globe", "100+ Languages", "Serve policyholders, employees, agents, brokers, partners, and regulated markets with professional language coverage worldwide."],
];

const faqs = [
  [
    "What types of insurance documents does Stepes translate?",
    "Stepes translates policies, endorsements, declarations, certificates, claims files, underwriting materials, actuarial reports, regulatory content, customer communications, training materials, websites, portals, mobile applications, and other insurance content. We support individual documents, complete case files, recurring programs, and integrated enterprise workflows.",
  ],
  [
    "Can Stepes translate complete insurance claims files?",
    "Yes. Related documents can be managed as a connected claims package to maintain consistent terminology, names, dates, event descriptions, and claim references throughout the file. Stepes supports scanned documents, editable files, mixed formats, medical content, legal correspondence, technical reports, and ongoing additions to an active case.",
  ],
  [
    "How does Stepes maintain consistency across policies and endorsements?",
    "Stepes uses translation memory, terminology management, style guidance, approved clauses, automated quality checks, and professional linguistic review. Previously approved language can be reused across policy families, product variants, renewals, endorsements, and related customer communications while new or modified text receives appropriate review.",
  ],
  [
    "Does Stepes provide certified insurance translations?",
    "Yes. Certified translations can be provided for claims, litigation, regulatory submissions, official records, supporting evidence, and other purposes. Because requirements differ by country and receiving organization, we confirm the expected certification format before production.",
  ],
  [
    "How do you decide between AI and professional human translation?",
    "The appropriate workflow depends on the content’s purpose, audience, confidentiality, complexity, urgency, contractual impact, and regulatory sensitivity. Lower-risk or high-volume content may benefit from secure AI translation or AI translation with professional post-editing. Policies, coverage decisions, regulatory materials, certified translations, and other sensitive content generally require specialist human translation and review.",
  ],
  [
    "Can Stepes localize insurance websites, portals, and mobile applications?",
    "Yes. Stepes localizes insurance websites, quoting tools, enrollment experiences, policyholder portals, claims applications, customer dashboards, mobile apps, knowledge bases, and digital support content. We support structured files, software resource formats, APIs, integrations, continuous updates, linguistic testing, and user-interface review.",
  ],
  [
    "How quickly can insurance documents be translated?",
    "Turnaround depends on the language combination, word count, subject matter, file format, document quality, workflow requirements, and reviewer availability. Urgent and expedited workflows are available. For large claims files or ongoing programs, Stepes can prioritize critical documents and establish phased or continuous delivery schedules.",
  ],
  [
    "Can Stepes integrate with insurance content and claims systems?",
    "Yes. Stepes supports API-driven translation, automated content exchange, portal-based workflows, and integration with content-management systems, digital platforms, and internal applications. Our team can review your existing content flow and recommend an integration approach based on your systems, file formats, release frequency, and approval requirements.",
  ],
];

const relatedSolutions = [
  ["Financial Translation Services", "Translate financial reporting, investment, banking, fintech, and corporate finance content.", "https://www.stepes.com/financial-translation-services/"],
  ["Insurance and Reinsurance Translation", "Support treaty, facultative, actuarial, financial, settlement, and cross-border risk content.", "https://www.stepes.com/financial-translation-services/insurance-reinsurance/"],
  ["Legal Translation Services", "Manage contracts, disputes, litigation materials, official records, and legal communications.", "https://www.stepes.com/legal-translation-services/"],
  ["Healthcare Translation Services", "Support member, patient, provider, clinical, regulatory, and healthcare communications.", "https://www.stepes.com/healthcare-translation-services/"],
  ["Website Translation Services", "Create scalable multilingual websites with continuous content, SEO, and publishing workflows.", "https://www.stepes.com/website-translation-services/"],
  ["Software Localization Services", "Localize insurance applications, portals, interfaces, resource files, and connected software.", "https://www.stepes.com/software-localization-services/"],
];

export default function StepesInsuranceIndustryPage() {
  return (
    <main className="insurance-page">
      <style>{`
        :root {
          --i-ink: #111522;
          --i-ink-soft: #3f485a;
          --i-muted: #687386;
          --i-line: #e1e5ec;
          --i-line-dark: rgba(255,255,255,.30);
          --i-dark-copy: #edf1f7;
          --i-dark-copy-soft: #e3e8f0;
          --i-bg: #ffffff;
          --i-bg-soft: #f7f8fb;
          --i-blush: #fdf2f7;
          --i-magenta: #c11d63;
          --i-magenta-dark: #9f1d55;
          --i-magenta-deep: #7a1542;
          --i-magenta-light: #f2a7c6;
          --i-dark: #131925;
          --i-radius-lg: 30px;
          --i-radius-md: 22px;
          --i-shadow: 0 24px 70px rgba(18, 24, 38, .08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .insurance-page {
          overflow-x: clip;
          background: var(--i-bg);
          color: var(--i-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
        }
        .insurance-page a { color: inherit; }
        .insurance-page h1,
        .insurance-page h2,
        .insurance-page h3,
        .insurance-page p { margin-top: 0; }
        .insurance-page h1,
        .insurance-page h2,
        .insurance-page h3 { font-weight: 600; letter-spacing: -.025em; line-height: 1.12; }
        .insurance-page h1 { font-size: 48px; margin-bottom: 24px; }
        .insurance-page h2 { font-size: 36px; margin-bottom: 22px; }
        .insurance-page h3 { font-size: 24px; margin-bottom: 14px; }
        .insurance-page p { color: var(--i-ink-soft); font-size: 16px; margin-bottom: 20px; }
        .insurance-page ul { margin: 0; padding: 0; list-style: none; }
        .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section-soft { background: var(--i-bg-soft); }
        .section-blush { background: var(--i-blush); }
        .section-dark { background: var(--i-dark); color: #fff; }
        .section-dark h2,
        .section-dark h3 { color: #fff; }
        .section-dark p { color: var(--i-dark-copy-soft) !important; opacity: 1; }
        .section-dark .section-intro { color: var(--i-dark-copy) !important; }
        .eyebrow {
          color: var(--i-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .18em !important;
          text-transform: uppercase;
          margin-bottom: 18px !important;
        }
        .section-dark .eyebrow { color: var(--i-magenta-light) !important; }
        .section-intro { max-width: 810px; font-size: 18px !important; line-height: 1.68; margin-bottom: 0 !important; }
        .section-head { max-width: 830px; margin-bottom: 52px; }
        .section-head.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-head.centered .section-intro { margin-left: auto; margin-right: auto; }
        .split-head { display: grid; grid-template-columns: .8fr 1.2fr; gap: 92px; align-items: start; margin-bottom: 50px; }
        .split-head .section-intro { max-width: 720px; }
        .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .hero-grid > *,
        .split-head > *,
        .split-2 > *,
        .claim-layout > *,
        .cta-panel > * { min-width: 0; }
        .split-2.top { align-items: start; }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .btn {
          min-height: 50px;
          padding: 13px 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          overflow-wrap: anywhere;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .btn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible,
        .btn-primary span,
        .btn-primary svg,
        .btn-primary svg * { color: #fff !important; stroke: currentColor !important; }
        .btn-primary { background: var(--i-magenta); box-shadow: 0 14px 32px rgba(193,29,99,.20); }
        .btn-primary:hover { background: var(--i-magenta-dark); transform: translateY(-2px); }
        .btn-secondary { background: #fff; border: 1px solid #d8dde5; color: var(--i-ink); }
        .btn-secondary:hover { border-color: #bfc5cf; transform: translateY(-2px); }
        .btn:focus-visible,
        .editorial-link:focus-visible,
        details summary:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }
        .editorial-link {
          color: var(--i-magenta) !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .editorial-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(4px); }
        .section-dark .editorial-link { color: var(--i-magenta-light) !important; }
        .icon { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .icon-box { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; background: var(--i-blush); color: var(--i-magenta); flex: 0 0 auto; }

        .hero { padding: 96px 0 88px; position: relative; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, .98fr) minmax(470px, 1.02fr); gap: 52px; align-items: center; }
        .hero-copy { max-width: 650px; }
        .hero-copy .hero-lead { font-size: 18px; line-height: 1.7; max-width: 640px; margin-bottom: 30px; color: #465064; }
        .hero-art { min-height: 470px; display: flex; align-items: center; justify-content: center; }
        .hero-art-svg { width: 100%; height: auto; max-height: 520px; }

        .trust-strip { border-top: 1px solid var(--i-line); border-bottom: 1px solid var(--i-line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .trust-item { padding: 27px 24px; text-align: center; color: var(--i-ink); font-weight: 600; font-size: 16px; }
        .trust-item + .trust-item { border-left: 1px solid var(--i-line); }

        .audience-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 32px; border-top: 1px solid var(--i-line); }
        .audience-list li { position: relative; padding: 18px 0 18px 25px; border-bottom: 1px solid var(--i-line); font-size: 16px; color: var(--i-ink-soft); }
        .audience-list li::before { content: ""; position: absolute; left: 0; top: 28px; width: 9px; height: 2px; border-radius: 2px; background: var(--i-magenta); }

        .lifecycle-shell { border: 1px solid var(--i-line); border-radius: var(--i-radius-lg); background: #fff; overflow: hidden; box-shadow: 0 18px 55px rgba(18,24,38,.05); }
        .lifecycle-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .lifecycle-item { padding: 30px 26px; min-height: 278px; position: relative; }
        .lifecycle-item + .lifecycle-item { border-left: 1px solid var(--i-line); }
        .stage-marker { width: 12px; height: 12px; border-radius: 50%; background: var(--i-magenta); margin-bottom: 22px; box-shadow: 0 0 0 7px var(--i-blush); }
        .lifecycle-item h3 { font-size: 21px; }
        .lifecycle-item p { margin-bottom: 0; }

        .content-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--i-line); border-left: 1px solid var(--i-line); }
        .content-item { padding: 34px; border-right: 1px solid var(--i-line); border-bottom: 1px solid var(--i-line); background: #fff; }
        .content-item:last-child { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .content-item .icon-box { margin-bottom: 24px; }
        .content-item p { margin-bottom: 0; }
        .mini-list { display: grid; gap: 10px; margin-top: 22px !important; }
        .mini-list li { display: flex; align-items: flex-start; gap: 11px; color: var(--i-ink-soft); font-size: 16px; }
        .mini-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--i-magenta); margin-top: 10px; flex: 0 0 auto; }

        .market-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--i-line); }
        .market-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 30px 0; border-bottom: 1px solid var(--i-line); }
        .market-item:nth-child(odd) { padding-right: 38px; }
        .market-item:nth-child(even) { border-left: 1px solid var(--i-line); padding-left: 38px; }
        .market-item .icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .market-item h3 { font-size: 21px; margin-bottom: 10px; }
        .market-item p { margin-bottom: 0; }

        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .ai-card { border: 1px solid var(--i-line-dark); background: rgba(255,255,255,.045); border-radius: var(--i-radius-md); padding: 30px; }
        .ai-card .card-label { color: var(--i-magenta-light); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 16px; line-height: 1.45; }
        .ai-card h3 { color: #fff; font-size: 22px; min-height: 50px; }
        .ai-card p { min-height: 166px; color: var(--i-dark-copy-soft) !important; }
        .ai-card ul { display: grid; gap: 11px; border-top: 1px solid var(--i-line-dark); padding-top: 20px; }
        .ai-card li { color: var(--i-dark-copy) !important; font-size: 16px; display: flex; align-items: flex-start; gap: 9px; opacity: 1; }
        .ai-card li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--i-magenta-light); margin-top: 10px; flex: 0 0 auto; }

        .language-panel { border: 1px solid var(--i-line); border-radius: var(--i-radius-lg); background: #fff; overflow: hidden; box-shadow: var(--i-shadow); }
        .language-head { padding: 26px 28px; border-bottom: 1px solid var(--i-line); display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .language-title { font-size: 18px; font-weight: 600; color: var(--i-ink); }
        .language-state { font-size: 14px; color: var(--i-magenta); border: 1px solid #ebc8d7; border-radius: 999px; padding: 6px 11px; line-height: 1; background: var(--i-blush); }
        .language-body { padding: 28px; }
        .policy-row { display: grid; grid-template-columns: 125px 1fr; gap: 18px; padding: 16px 0; border-bottom: 1px solid var(--i-line); align-items: start; }
        .policy-row:last-child { border-bottom: 0; }
        .policy-row strong { font-size: 16px; color: var(--i-ink); font-weight: 600; }
        .policy-row span { font-size: 16px; color: var(--i-ink-soft); }
        .policy-row .approved { color: var(--i-magenta); font-weight: 600; }
        .language-footer { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--i-line); background: var(--i-bg-soft); }
        .language-footer div { padding: 18px; }
        .language-footer div + div { border-left: 1px solid var(--i-line); }
        .language-footer strong { display: block; font-size: 16px; color: var(--i-ink); font-weight: 600; }
        .language-footer span { display: block; font-size: 14px; color: var(--i-muted); margin-top: 3px; }

        .claim-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 74px; align-items: center; }
        .claim-list { display: grid; margin-top: 30px !important; }
        .claim-list li { position: relative; padding: 15px 0 15px 24px; border-top: 1px solid var(--i-line-dark); font-size: 16px; color: #f0f3f8 !important; -webkit-text-fill-color: #f0f3f8; opacity: 1 !important; }
        .claim-list li:last-child { border-bottom: 1px solid var(--i-line-dark); }
        .claim-list li::before { content: ""; position: absolute; left: 0; top: 27px; width: 8px; height: 2px; border-radius: 2px; background: var(--i-magenta-light); }
        .claim-board { border-radius: var(--i-radius-lg); border: 1px solid var(--i-line-dark); background: rgba(255,255,255,.045); overflow: hidden; box-shadow: 0 28px 70px rgba(0,0,0,.22); }
        .claim-board-head { padding: 26px 28px; border-bottom: 1px solid var(--i-line-dark); display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .claim-board-title { color: #fff; font-size: 18px; font-weight: 600; }
        .claim-board-status { color: var(--i-magenta-light); border: 1px solid rgba(242,167,198,.38); border-radius: 999px; padding: 6px 11px; font-size: 14px; line-height: 1; }
        .claim-board-list { padding: 0 28px; }
        .claim-board-row { display: grid; grid-template-columns: 95px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--i-line-dark); }
        .claim-board-row:last-child { border-bottom: 0; }
        .claim-stage { color: var(--i-magenta-light); font-size: 14px; font-weight: 600; }
        .claim-board-row strong { display: block; color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 3px; }
        .claim-board-row span { color: #e7ebf2 !important; -webkit-text-fill-color: #e7ebf2; font-size: 16px; opacity: 1; }

        .digital-grid { display: grid; grid-template-columns: repeat(2, 1fr); border: 1px solid var(--i-line); border-radius: var(--i-radius-lg); overflow: hidden; background: #fff; }
        .digital-item { padding: 34px; }
        .digital-item:nth-child(odd) { border-right: 1px solid var(--i-line); }
        .digital-item:nth-child(-n+2) { border-bottom: 1px solid var(--i-line); }
        .digital-item h3 { font-size: 22px; }
        .digital-item p { margin-bottom: 0; }
        .tech-strip { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 28px; border-top: 1px solid var(--i-line); border-bottom: 1px solid var(--i-line); }
        .tech-strip div { padding: 20px 18px; text-align: center; font-size: 16px; color: var(--i-ink-soft); overflow-wrap: anywhere; }
        .tech-strip div + div { border-left: 1px solid var(--i-line); }

        .enterprise-grid { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--i-line-dark); border-radius: var(--i-radius-lg); overflow: hidden; }
        .enterprise-item { padding: 28px 24px; background: rgba(255,255,255,.035); }
        .enterprise-item + .enterprise-item { border-left: 1px solid var(--i-line-dark); }
        .enterprise-item .icon-box { background: rgba(242,167,198,.1); color: var(--i-magenta-light); margin-bottom: 22px; }
        .enterprise-item h3 { color: #fff; font-size: 20px; }
        .enterprise-item p { color: var(--i-dark-copy-soft) !important; margin-bottom: 0; opacity: 1; }
        .enterprise-links { display: flex; gap: 28px; flex-wrap: wrap; margin-top: 30px; }

        .quality-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--i-line); border-left: 1px solid var(--i-line); }
        .quality-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 30px; border-right: 1px solid var(--i-line); border-bottom: 1px solid var(--i-line); }
        .quality-item h3 { font-size: 21px; }
        .quality-item p { margin-bottom: 0; }
        .quality-note { margin-top: 30px; border-left: 3px solid var(--i-magenta); padding: 2px 0 2px 24px; max-width: 950px; }
        .quality-note p { margin-bottom: 0; }

        .benefit-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px 36px; }
        .benefit-item { border-top: 1px solid var(--i-line); padding-top: 24px; }
        .benefit-top { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
        .benefit-top .icon-box { width: 42px; height: 42px; border-radius: 13px; }
        .benefit-top h3 { margin-bottom: 0; font-size: 21px; }
        .benefit-item p { margin-bottom: 0; }

        .faq-panel { border: 1px solid var(--i-line); border-radius: var(--i-radius-lg); overflow: hidden; background: #fff; }
        details { border-bottom: 1px solid var(--i-line); }
        details:last-child { border-bottom: 0; }
        details summary { list-style: none; cursor: pointer; padding: 25px 30px; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--i-ink); font-size: 18px; font-weight: 600; }
        details summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 24px; height: 24px; border-radius: 50%; border: 1px solid #d8dde5; position: relative; flex: 0 0 auto; }
        .faq-plus::before,
        .faq-plus::after { content: ""; position: absolute; left: 50%; top: 50%; width: 10px; height: 1.5px; background: var(--i-magenta); transform: translate(-50%, -50%); transition: transform .2s ease; }
        .faq-plus::after { transform: translate(-50%, -50%) rotate(90deg); }
        details[open] .faq-plus::after { transform: translate(-50%, -50%) rotate(0); }
        .faq-answer { padding: 0 72px 26px 30px; max-width: 910px; }
        .faq-answer p { margin-bottom: 0; }

        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--i-line); border-left: 1px solid var(--i-line); }
        .related-item { padding: 30px; border-right: 1px solid var(--i-line); border-bottom: 1px solid var(--i-line); background: #fff; }
        .related-item h3 { font-size: 21px; }
        .related-item p { min-height: 82px; }

        .final-cta { padding: 88px 0; background: #fff; }
        .cta-panel { border-radius: var(--i-radius-lg); background: var(--i-blush); border: 1px solid #efd8e2; padding: 64px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; align-items: center; position: relative; overflow: hidden; }
        .cta-panel::after { content: ""; position: absolute; width: 300px; height: 300px; border: 1px solid rgba(193,29,99,.15); border-radius: 50%; right: -112px; top: -128px; }
        .cta-panel::before { content: ""; position: absolute; width: 180px; height: 180px; border: 1px solid rgba(193,29,99,.12); border-radius: 50%; right: 16px; bottom: -110px; }
        .cta-panel > * { position: relative; z-index: 1; }
        .cta-panel h2 { max-width: 720px; }
        .cta-panel p { max-width: 740px; margin-bottom: 0; font-size: 18px; }
        .cta-panel .btn-row { justify-content: flex-end; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(420px, .95fr); gap: 32px; }
          .hero-art { min-height: 430px; }
          .lifecycle-grid { grid-template-columns: repeat(3, 1fr); }
          .lifecycle-item + .lifecycle-item { border-left: 1px solid var(--i-line); }
          .lifecycle-item:nth-child(4) { border-left: 0; }
          .lifecycle-item:nth-child(-n+3) { border-bottom: 1px solid var(--i-line); }
          .enterprise-grid { grid-template-columns: repeat(3, 1fr); }
          .enterprise-item:nth-child(4) { border-left: 0; }
          .enterprise-item:nth-child(-n+3) { border-bottom: 1px solid var(--i-line-dark); }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          .insurance-page h1 { font-size: 42px; }
          .insurance-page h2 { font-size: 32px; }
          .insurance-page h3 { font-size: 22px; }
          .hero { padding: 82px 0 72px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 760px; }
          .hero-art { min-height: 0; max-width: 650px; margin: 10px auto 0; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--i-line); }
          .trust-item:nth-child(4) { border-top: 1px solid var(--i-line); }
          .split-head,
          .split-2,
          .claim-layout,
          .cta-panel { grid-template-columns: 1fr; gap: 42px; }
          .split-head { margin-bottom: 42px; }
          .lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
          .lifecycle-item:nth-child(odd) { border-left: 0; }
          .lifecycle-item:nth-child(even) { border-left: 1px solid var(--i-line); }
          .lifecycle-item:nth-child(-n+4) { border-bottom: 1px solid var(--i-line); }
          .content-item:last-child { grid-template-columns: 1fr; gap: 0; }
          .market-grid { grid-template-columns: 1fr; }
          .market-item:nth-child(odd),
          .market-item:nth-child(even) { border-left: 0; padding-left: 0; padding-right: 0; }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-card h3,
          .ai-card p { min-height: 0; }
          .enterprise-grid { grid-template-columns: repeat(2, 1fr); }
          .enterprise-item,
          .enterprise-item:nth-child(4) { border-left: 0; border-bottom: 1px solid var(--i-line-dark); }
          .enterprise-item:nth-child(even) { border-left: 1px solid var(--i-line-dark); }
          .enterprise-item:last-child { border-bottom: 0; }
          .benefit-grid { grid-template-columns: repeat(2, 1fr); }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .cta-panel .btn-row { justify-content: flex-start; }
        }

        @media (max-width: 620px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          .insurance-page h1 { font-size: 38px; }
          .insurance-page h2 { font-size: 30px; }
          .insurance-page h3 { font-size: 20px; }
          .hero { padding: 68px 0 62px; }
          .hero-copy .hero-lead { font-size: 18px; }
          .btn-row { width: 100%; }
          .btn { width: 100%; }
          .hero-art { margin-left: -12px; margin-right: -12px; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item + .trust-item,
          .trust-item:nth-child(3),
          .trust-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--i-line); }
          .audience-list { grid-template-columns: 1fr; }
          .lifecycle-grid { grid-template-columns: 1fr; }
          .lifecycle-item,
          .lifecycle-item:nth-child(odd),
          .lifecycle-item:nth-child(even) { border-left: 0; border-bottom: 1px solid var(--i-line); }
          .lifecycle-item:last-child { border-bottom: 0; }
          .lifecycle-item { min-height: 0; }
          .content-grid { grid-template-columns: 1fr; }
          .content-item:last-child { grid-column: auto; }
          .content-item { padding: 28px 24px; }
          .market-item { grid-template-columns: 44px 1fr; gap: 16px; }
          .language-head { align-items: flex-start; flex-direction: column; }
          .policy-row { grid-template-columns: 1fr; gap: 5px; }
          .language-footer { grid-template-columns: 1fr; }
          .language-footer div + div { border-left: 0; border-top: 1px solid var(--i-line); }
          .claim-board-head { align-items: flex-start; flex-direction: column; }
          .claim-board-list { padding: 0 20px; }
          .claim-board-row { grid-template-columns: 1fr; gap: 7px; }
          .digital-grid { grid-template-columns: 1fr; }
          .digital-item,
          .digital-item:nth-child(odd),
          .digital-item:nth-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--i-line); }
          .digital-item:last-child { border-bottom: 0; }
          .tech-strip { grid-template-columns: repeat(2, 1fr); }
          .tech-strip div:nth-child(3) { border-left: 0; border-top: 1px solid var(--i-line); }
          .tech-strip div:nth-child(4) { border-top: 1px solid var(--i-line); }
          .enterprise-grid { grid-template-columns: 1fr; }
          .enterprise-item,
          .enterprise-item:nth-child(even),
          .enterprise-item:nth-child(4) { border-left: 0; border-bottom: 1px solid var(--i-line-dark); }
          .enterprise-item:last-child { border-bottom: 0; }
          .quality-grid { grid-template-columns: 1fr; }
          .quality-item { padding: 26px 22px; }
          .benefit-grid { grid-template-columns: 1fr; }
          details summary { padding: 22px 20px; font-size: 17px; align-items: flex-start; }
          .faq-answer { padding: 0 20px 24px; }
          .related-grid { grid-template-columns: 1fr; }
          .related-item { padding: 26px 24px; }
          .related-item p { min-height: 0; }
          .enterprise-links { display: grid; gap: 6px; }
          .enterprise-links .editorial-link { width: 100%; }
          .final-cta { padding: 68px 0; }
          .cta-panel { padding: 32px 24px; }
        }

        @media (max-width: 350px) {
          .hero-art { margin-left: -18px; margin-right: -18px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Insurance Translation Services for Policies, Claims, and Digital Experiences</h1>
            <p className="hero-lead">
              Deliver clear, consistent multilingual insurance content across the complete policyholder lifecycle. Stepes provides professional insurance translation services for policies, claims, underwriting materials, regulatory communications, customer support, websites, portals, and mobile applications in more than 100 languages.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Request a Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-art">
            <InsuranceHeroArt />
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Insurance translation trust indicators">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 17100</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Workflows</div>
          <div className="trust-item">Secure Enterprise Workflows</div>
        </div>
      </section>

      <section className="section" id="insurance-language-solutions">
        <div className="shell split-head">
          <div>
            <p className="eyebrow">Insurance Language Programs</p>
            <h2>Insurance Translation Built Around How Insurers Operate</h2>
          </div>
          <div>
            <p className="section-intro">
              Insurance content moves between product, underwriting, distribution, policy service, claims, legal, compliance, and digital teams. A terminology decision in one channel can affect coverage descriptions, customer understanding, claims communications, and localized experiences across multiple markets.
            </p>
            <p>
              Stepes helps carriers, reinsurers, brokers, managing general agents, third-party administrators, claims organizations, assistance providers, benefits organizations, and insurtech companies maintain approved language across every customer and operational touchpoint.
            </p>
            <ul className="audience-list">
              <li>Insurance carriers and reinsurers</li>
              <li>Brokers and managing general agents</li>
              <li>Third-party and claims administrators</li>
              <li>Assistance and benefits organizations</li>
              <li>Insurtech and embedded insurance companies</li>
              <li>Legal, compliance, product, and regional teams</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="policyholder-lifecycle">
        <div className="shell">
          <div className="section-head centered">
            <h2>Support Every Stage of the Policyholder Journey</h2>
            <p className="section-intro">
              A connected localization program helps insurance organizations preserve approved language across products, documents, customer interactions, and digital channels while reducing duplicated translation work between teams.
            </p>
          </div>
          <div className="lifecycle-shell">
            <div className="lifecycle-grid">
              {lifecycleStages.map((stage) => (
                <article className="lifecycle-item" key={stage.title}>
                  <div className="stage-marker" aria-hidden="true" />
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="insurance-content">
        <div className="shell">
          <div className="section-head">
            <h2>Insurance Documents and Content We Translate</h2>
            <p className="section-intro">
              Stepes supports individual documents, connected case files, recurring content programs, and enterprise-scale multilingual operations across policy administration, claims, underwriting, compliance, training, marketing, and digital insurance.
            </p>
          </div>
          <div className="content-grid">
            {contentGroups.map((group) => (
              <article className="content-item" key={group.title}>
                <div>
                  <div className="icon-box"><LineIcon name={group.icon} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </div>
                <ul className="mini-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="insurance-markets">
        <div className="shell">
          <div className="section-head centered">
            <h2>Expertise Across Products, Risks, and Distribution Models</h2>
            <p className="section-intro">
              Insurance terminology varies by product, jurisdiction, customer population, and distribution channel. Stepes assembles translation teams with the relevant insurance, legal, financial, medical, or technical knowledge for each engagement.
            </p>
          </div>
          <div className="market-grid">
            {marketItems.map(([icon, title, text]) => (
              <article className="market-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="enterprise-links">
            <a className="editorial-link" href="https://www.stepes.com/financial-translation-services/insurance-reinsurance/">Explore Insurance and Reinsurance Translation <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/financial-translation-services/">Financial Translation Services <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai-human-workflows">
        <div className="shell">
          <div className="section-head centered">
            <h2>Match Every Insurance Document to the Right Level of Review</h2>
            <p className="section-intro">
              Insurance content varies widely in risk, complexity, urgency, and customer impact. Stepes aligns technology, professional review, and quality controls with each document’s purpose, audience, confidentiality, and contractual or regulatory sensitivity.
            </p>
          </div>
          <div className="ai-grid">
            {aiPaths.map((path) => (
              <article className="ai-card" key={path.title}>
                <div className="card-label">{path.label}</div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
                <ul>{path.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="terminology-clause-governance">
        <div className="shell split-2">
          <div>
            <h2>Protect Insurance Terminology, Clauses, and Defined Meaning</h2>
            <p className="section-intro">
              Insurance language creates contractual meaning. Terms may be defined once and reused throughout a policy, endorsement, certificate, claims letter, customer portal, and related product documentation.
            </p>
            <p>
              Stepes helps insurers govern defined terms, capitalization, product names, repeated clauses, exclusions, conditions, limitations, riders, endorsements, and cross-references across products and markets. Quality controls can also verify coverage limits, deductibles, premiums, percentages, dates, currencies, policy numbers, claim numbers, tables, and schedules.
            </p>
            <div className="enterprise-links">
              <a className="editorial-link" href="https://www.stepes.com/translation-memory/">Translation Memory <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/terminology-management/">Terminology Management <ArrowIcon /></a>
              <a className="editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <ArrowIcon /></a>
            </div>
          </div>
          <div className="language-panel" aria-label="Illustrative insurance terminology and clause governance panel">
            <div className="language-head">
              <div className="language-title">Commercial Property Policy · Spanish</div>
              <div className="language-state">Approved Language Set</div>
            </div>
            <div className="language-body">
              <div className="policy-row"><strong>Defined term</strong><span><span className="approved">Covered Property</span> used consistently across policy, schedule, and portal.</span></div>
              <div className="policy-row"><strong>Clause reuse</strong><span>Previously approved exclusion matched to the current product version.</span></div>
              <div className="policy-row"><strong>Market rule</strong><span>Jurisdiction-specific terminology applied for the target market.</span></div>
              <div className="policy-row"><strong>Numeric check</strong><span>Coverage limit, deductible, date, and currency values verified.</span></div>
            </div>
            <div className="language-footer">
              <div><strong>Approved</strong><span>Clause reuse</span></div>
              <div><strong>Controlled</strong><span>Terminology</span></div>
              <div><strong>New</strong><span>Text requiring review</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="claims-translation">
        <div className="shell claim-layout">
          <div>
            <h2>Support Faster Multilingual Claims Resolution</h2>
            <p className="section-intro">
              A single claim may involve customer statements, incident reports, photographs, medical records, repair estimates, adjuster notes, legal correspondence, and settlement documentation in multiple languages.
            </p>
            <p>
              Stepes helps insurers, third-party administrators, claims administrators, assistance companies, and legal teams manage multilingual claims as connected cases rather than isolated files. This makes it possible to preserve names, dates, event descriptions, claim references, and technical details throughout the complete file.
            </p>
            <ul className="claim-list">
              <li>Urgent individual documents and complete claims packages</li>
              <li>Scanned, editable, and mixed-format source files</li>
              <li>Medical, legal, automotive, property, engineering, and financial content</li>
              <li>Phased delivery for critical documents and ongoing case updates</li>
              <li>Written translation with complementary real-time language support</li>
            </ul>
          </div>
          <div className="claim-board" aria-label="Illustrative multilingual claims workflow">
            <div className="claim-board-head">
              <div className="claim-board-title">Multilingual Claims File</div>
              <div className="claim-board-status">Connected Case Workflow</div>
            </div>
            <div className="claim-board-list">
              {claimSteps.map(([stage, title, text]) => (
                <div className="claim-board-row" key={stage}>
                  <div className="claim-stage">{stage}</div>
                  <div><strong>{title}</strong><span>{text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="digital-insurance-localization">
        <div className="shell">
          <div className="split-head">
            <div>
              <h2>Localize Insurance and Insurtech Experiences at Every Touchpoint</h2>
            </div>
            <div>
              <p className="section-intro">
                Customers increasingly research, purchase, manage, and claim against policies through digital channels. Stepes supports the language and operational infrastructure behind multilingual insurance websites, applications, portals, notifications, and support experiences.
              </p>
            </div>
          </div>
          <div className="digital-grid">
            {digitalJourneys.map((item) => (
              <article className="digital-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="tech-strip" aria-label="Supported technical localization content">
            <div>JSON and XML</div>
            <div>Resource Files</div>
            <div>CMS Content</div>
            <div>API-Connected Updates</div>
          </div>
          <div className="enterprise-links">
            <a className="editorial-link" href="https://www.stepes.com/website-translation-services/">Website Translation Services <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/developers/translation-api/">Translation API <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/integrations/">Integrations <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="enterprise-insurance-operations">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Enterprise Translation Operations</p>
            <h2>Built for Recurring Insurance Content and Global Teams</h2>
            <p className="section-intro">
              Policy language changes, claims arrive continuously, customer communications evolve, and digital products release new content throughout the year. Stepes brings translation management, reusable language assets, automation, integrations, approvals, and reporting into one connected operating model.
            </p>
          </div>
          <div className="enterprise-grid">
            {enterpriseModules.map(([icon, title, text]) => (
              <article className="enterprise-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="enterprise-links">
            <a className="editorial-link" href="https://www.stepes.com/translation-management-portal/">Translation Management Portal <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/user-roles-approvals/">User Roles and Approvals <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/workflow-automation/">Workflow Automation <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/reporting-analytics/">Reporting and Analytics <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section" id="quality-security">
        <div className="shell">
          <div className="split-head">
            <div>
              <h2>Quality and Security for Sensitive Insurance Content</h2>
            </div>
            <div>
              <p className="section-intro">
                Insurance documents may contain personal, medical, financial, legal, and commercially sensitive information. Stepes combines professional language quality controls with permission-based workflows designed for enterprise content.
              </p>
            </div>
          </div>
          <div className="quality-grid">
            {qualityItems.map(([icon, title, text]) => (
              <article className="quality-item" key={title}>
                <div className="icon-box"><LineIcon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className="quality-note">
            <p>
              Stepes supports jurisdiction-specific insurance, readability, filing, disclosure, and language-access requirements established by each client’s legal, regulatory, and compliance teams. Certified translations are also available for claims, litigation, regulatory submissions, official records, and supporting evidence when required.
            </p>
          </div>
          <div className="enterprise-links">
            <a className="editorial-link" href="https://www.stepes.com/security/">Stepes Security <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/quality-system/">Quality System <ArrowIcon /></a>
            <a className="editorial-link" href="https://www.stepes.com/iso-certifications/">ISO Certifications <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="why-stepes">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Why Stepes</p>
            <h2>A Connected Translation Partner for Global Insurance</h2>
            <p className="section-intro">
              Bring policies, claims, customer communications, and digital insurance experiences together through one scalable model for language expertise, technology, governance, and delivery.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([icon, title, text]) => (
              <article className="benefit-item" key={title}>
                <div className="benefit-top"><div className="icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="enterprise-links">
            <a className="editorial-link" href="https://www.stepes.com/translation-languages/">Explore 100+ Translation Languages <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section" id="insurance-faqs">
        <div className="shell">
          <div className="section-head">
            <h2>Insurance Translation Services FAQs</h2>
            <p className="section-intro">
              Explore common questions about insurance documents, claims files, terminology, certified translations, AI-assisted workflows, digital insurance localization, turnaround, and integrations.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span className="faq-plus" aria-hidden="true" /></summary>
                <div className="faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="related-solutions">
        <div className="shell">
          <div className="section-head centered">
            <p className="eyebrow">Related Solutions</p>
            <h2>Connect Your Insurance Language Program</h2>
            <p className="section-intro">
              Extend your multilingual insurance operations across financial, legal, healthcare, website, and software content through related Stepes services.
            </p>
          </div>
          <div className="related-grid">
            {relatedSolutions.map(([title, text, href]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="editorial-link" href={href}>{title} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2>Build a More Connected Multilingual Insurance Experience</h2>
              <p>
                Translate policies, claims, customer communications, and digital insurance experiences with greater speed, consistency, and control. Tell us about your content, languages, markets, systems, timelines, and review requirements.
              </p>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Request a Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
