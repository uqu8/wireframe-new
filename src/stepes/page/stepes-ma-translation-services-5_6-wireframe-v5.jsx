import React from "react";

const MAGENTA = "#C11D63";
const MAGENTA_DARK = "#7A1542";
const BLUSH = "#FDF2F7";
const INK = "#222222";
const TEXT = "#4A4A4A";
const BORDER = "#E8E5E7";
const SOFT = "#F7F6F7";
const DARK = "#242124";
const DARK_TEXT = "#F7F4F6";
const DARK_MUTED = "#D7CFD3";
const EYEBROW_DARK = "#F2A7C6";

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  legal: "https://www.stepes.com/legal-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  aiLegal: "https://www.stepes.com/ai-enabled-legal-translation-services/",
  security: "https://www.stepes.com/resources/security-and-compliance/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  dataRoom: "https://www.stepes.com/data-room-translation-services/",
  legalTeams: "https://www.stepes.com/solutions/legal-teams/",
  privateEquity: "https://www.stepes.com/private-equity-translation-services/",
  hr: "https://www.stepes.com/human-resource-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-translation-services/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  contract: "https://www.stepes.com/contract-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  languages: "https://www.stepes.com/translation-languages/",
};

function ArrowIcon({ size = 16 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3 5.5 5.5v5.8c0 4 2.6 7.5 6.5 9.7 3.9-2.2 6.5-5.7 6.5-9.7V5.5L12 3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="m9.2 12 1.8 1.8 3.8-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.8 12h16.4M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5S14.3 18.1 12 20.5M12 3.5C9.7 5.9 8.5 8.7 8.5 12s1.2 6.1 3.5 8.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v18M7 6h10M5 9l-3 5h6L5 9Zm14 0-3 5h6l-3-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M7 3.5h7l4 4V20H7V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 3.5V8h4M9.5 11h5M9.5 14h5M9.5 17h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19c.5-4 2-6 4.5-6s4 2 4.5 6M13.5 18c.3-2.8 1.5-4.5 3.6-4.5 2 0 3.1 1.5 3.4 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ConceptIcon({ type }) {
  if (type === "scale") return <ScaleIcon />;
  if (type === "document") return <DocumentIcon />;
  if (type === "people") return <PeopleIcon />;
  return <GlobeIcon />;
}

function InlineLink({ href, children, dark = false }) {
  return (
    <a className={`editorial-link ${dark ? "editorial-link-dark" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false, id }) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`} id={id}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className={dark ? "dark-muted" : ""}>{intro}</p> : null}
    </div>
  );
}

const lifecycle = [
  ["Deal Preparation", "Translate teasers, CIMs, management presentations, company profiles, financial information, market analysis, and early corporate documentation for evaluation and buyer outreach."],
  ["Due Diligence", "Give deal teams access to foreign-language legal, financial, tax, commercial, operational, technical, HR, IP, cybersecurity, and compliance information."],
  ["Negotiation & Financing", "Support IOIs, LOIs, term sheets, financing documents, agreement drafts, disclosure materials, and transaction communications as terms take shape."],
  ["Regulatory Review", "Translate multilingual materials used for competition, foreign-investment, national-security, foreign-subsidy, and sector-specific review processes."],
  ["Signing & Closing", "Maintain terminology consistency across definitive agreements, disclosure schedules, shareholder documents, board materials, TSAs, escrow agreements, and closing records."],
  ["Post-Merger Integration", "Localize employee communications, policies, training, software, operational documentation, websites, product content, and customer communications after closing."],
];

const diligence = [
  ["Legal & Corporate", "Articles, bylaws, ownership records, board materials, licenses, litigation, governance documents, leases, and material agreements."],
  ["Financial & Accounting", "Audited financial statements, management accounts, budgets, forecasts, debt records, working-capital documentation, valuations, and auditor materials."],
  ["Tax", "Tax returns, assessments, authority correspondence, supporting schedules, transfer-pricing materials, and transaction-related tax documentation."],
  ["Commercial", "Customer agreements, supplier contracts, pricing, sales data, market studies, business plans, distribution arrangements, and competitive analyses."],
  ["Human Resources", "Employment agreements, compensation and benefits records, organizational structures, policies, incentive plans, and workforce communications."],
  ["Intellectual Property", "Patents, trademarks, licenses, assignments, invention records, R&D documentation, technology-transfer agreements, and IP disputes."],
  ["Technology & Cybersecurity", "Software agreements, IT architecture, information-security policies, incident records, privacy documentation, system descriptions, and assessments."],
  ["Operations & Manufacturing", "Facilities records, SOPs, quality systems, safety documentation, equipment files, supply-chain materials, manuals, and maintenance records."],
  ["Regulatory & Compliance", "Permits, licenses, regulator correspondence, audit records, investigation materials, policies, remediation plans, and compliance documentation."],
];

const workflow = [
  ["Rapid Understanding & Triage", "For initial screening, discovery, and document prioritization. Where customer-approved and appropriate, secure AI-assisted translation can accelerate understanding before selected documents move to deeper review."],
  ["AI + Professional Validation", "For high-volume diligence that needs more confidence than raw triage. Combine AI-assisted translation with qualified linguistic validation, approved terminology, reference materials, and QA."],
  ["Expert Human Translation", "For material legal, financial, technical, regulatory, executive, and external-facing content where meaning, terminology, numbers, and context require professional judgment."],
  ["Independent Review", "For customer-designated high-consequence content such as definitive agreements, regulatory submissions, and formally relied-upon materials that require an additional review layer."],
];

const documentGroups = [
  ["Deal Marketing & Preparation", ["Confidential information memoranda", "Investment teasers", "Offering memoranda", "Seller and management presentations", "Investment banking engagement letters", "Company and asset profiles", "Market and competitive analyses", "Non-disclosure agreements"]],
  ["Initial Evaluation", ["Indications of interest", "Letters of intent", "Valuation materials", "Financial summaries", "Management information", "Market research", "Strategic assessments"]],
  ["Due Diligence", ["Corporate records", "Financial statements", "Material contracts", "Tax documents", "Employment records", "IP documentation", "IT and cybersecurity files", "Operational records"]],
  ["Negotiation & Financing", ["Term sheets", "Draft purchase agreements", "Merger agreement drafts", "Financing agreements", "Lender materials", "Disclosure schedules", "Negotiation correspondence"]],
  ["Signing & Closing", ["Stock and share purchase agreements", "Asset purchase agreements", "Merger agreements", "Shareholder agreements", "Transition services agreements", "Escrow agreements", "Board and shareholder resolutions", "Closing certificates", "Ancillary agreements", "Closing checklists and supporting documents"]],
  ["Regulatory Review", ["Notification forms", "Regulatory questionnaires", "Supporting exhibits", "Ownership information", "Transaction descriptions", "Regulatory correspondence", "Information-request responses", "Competition and foreign-investment review materials"]],
  ["Post-Closing Integration", ["Integration plans", "Employee communications", "HR policies", "Codes of conduct", "Compliance training", "Operating procedures", "Technical documentation", "Software and applications", "Websites and product content", "Sales and marketing materials"]],
];

const securityItems = [
  ["Controlled Project Access", "Organize translation programs around approved users, teams, and responsibilities so sensitive deal content moves through the designated workflow.", "shield"],
  ["Confidentiality Requirements", "Assign linguists, reviewers, and project personnel according to applicable confidentiality and project requirements.", "shield"],
  ["Secure File Workflows", "Support controlled file intake, processing, review, and delivery, with special security or retention requirements reviewed during project setup.", "document"],
  ["AI Governance", "Configure AI-assisted workflows according to content, intended use, customer requirements, and approved security controls rather than applying AI automatically to every document.", "shield"],
  ["Qualified Resource Assignment", "Route legal, financial, technical, regulatory, and industry content to qualified language resources based on subject matter and workflow requirements.", "people"],
  ["Controlled Language Assets", "Manage translation memories, glossaries, references, and reviewer feedback as controlled project resources.", "document"],
];

const terminologyItems = [
  ["Transaction Glossaries", "Capture approved equivalents for deal-specific legal, financial, product, technical, and organizational terminology."],
  ["Defined Terms", "Preserve contract-defined language consistently across clauses, schedules, exhibits, amendments, and related agreements."],
  ["Entity & Product Names", "Control how corporate entities, subsidiaries, executives, products, technologies, and business units are represented."],
  ["Translation Memory", "Reuse previously translated and validated language where appropriate across related files and transaction phases."],
  ["Approved Reference Language", "Incorporate bilingual agreements, prior translations, client style guidance, and counsel-approved language as controlled references."],
  ["Reviewer Feedback", "Carry approved client, counsel, and subject-matter review decisions forward into subsequent documents."],
  ["Automated Quality Checks", "Use language technology to help flag potential omissions, inconsistent terminology, numeric discrepancies, and other items requiring review."],
];

const audiences = [
  ["Corporate Development Teams", "Access multilingual target information, coordinate due diligence, review transaction materials, and support integration through one language program.", "globe"],
  ["In-House Legal Teams", "Manage multilingual contracts, diligence, regulatory content, closing materials, and post-acquisition legal communications with consistent terminology.", "scale"],
  ["Law Firms", "Support clients across multilingual due diligence, transaction documentation, regulatory matters, negotiations, and closing.", "scale"],
  ["Investment Banks", "Translate teasers, CIMs, management presentations, valuation information, financial materials, and deal communications for international processes.", "document"],
  ["Private Equity Firms", "Support target evaluation, diligence, acquisition, portfolio-company operations, integration, and exit across languages.", "globe"],
  ["Accounting & Transaction Advisory Teams", "Translate financial, tax, operational, commercial, and diligence materials with subject-matter expertise appropriate to the content.", "document"],
  ["Management Consultants", "Support multilingual research, commercial diligence, strategy, operating-model, transformation, and integration work.", "people"],
  ["Portfolio & Operating Companies", "Translate corporate, employee, operational, product, technology, and customer content before and after ownership changes.", "people"],
];

const expertise = [
  ["Legal", ["Contracts", "Corporate governance", "Employment", "Compliance", "Regulatory", "Intellectual property"]],
  ["Financial", ["Financial statements", "Accounting", "Tax", "Valuation", "Financing", "Audit documentation"]],
  ["Technical & Operational", ["Engineering", "Manufacturing", "Software", "Cybersecurity", "R&D", "Quality systems"]],
  ["Industry", ["Life sciences", "Medical devices", "Technology & SaaS", "Manufacturing", "Automotive", "Financial services", "Energy", "Consumer & retail"]],
];

const scaleItems = [
  ["Centralized Intake", "Coordinate related files, languages, deadlines, references, and workflow requirements through one transaction program."],
  ["Parallel Workstreams", "Process multiple languages and subject-matter streams simultaneously when diligence and closing timelines require scale."],
  ["Subject-Matter Routing", "Assign legal, financial, technical, regulatory, HR, and industry content to appropriately qualified linguists."],
  ["Translation Memory", "Reuse validated content across repeated and related materials to improve consistency and reduce unnecessary rework."],
  ["Terminology Management", "Maintain approved transaction language across teams, documents, jurisdictions, and phases."],
  ["Quality Controls", "Apply linguistic review, automated QA, and independent revision according to intended use and project requirements."],
  ["Workflow Automation", "Automate appropriate routing, notifications, handoffs, and quality steps to reduce manual coordination across high-volume programs."],
  ["Program Visibility", "Give authorized stakeholders clearer visibility into active languages, files, delivery schedules, and multilingual workstreams."],
];

const related = [
  ["Legal Translation Services", "Professional legal translation across contracts, corporate governance, compliance, employment, IP, and other legal content.", links.legal],
  ["Financial Translation Services", "Specialized translation for financial statements, accounting, investment, reporting, and transaction-related financial content.", links.financial],
  ["Data Room Translation Services", "Translation workflows for multilingual documents housed in or prepared for virtual data-room environments.", links.dataRoom],
  ["Private Equity Translation Services", "Language solutions for investment teams, fund workflows, portfolio companies, acquisitions, and exits.", links.privateEquity],
  ["Contract Translation Services", "Specialized translation for commercial agreements, transaction contracts, employment agreements, and other contractual content.", links.contract],
  ["Certified Translation Services", "Professional translation with supporting certification when required by an authority, institution, regulator, or receiving party.", links.certified],
];

const faqs = [
  ["What are M&A translation services?", "M&A translation services support mergers, acquisitions, divestitures, joint ventures, strategic investments, and related cross-border transactions by translating the documents and communications required throughout the deal lifecycle. This can include target research, due diligence materials, financial statements, contracts, IP records, regulatory submissions, purchase agreements, closing documents, employee communications, and post-merger integration content."],
  ["What M&A documents can Stepes translate?", "Stepes translates transaction content across deal preparation, due diligence, negotiation, financing, regulatory review, signing, closing, and post-merger integration. Common files include CIMs, teasers, NDAs, IOIs, LOIs, financial statements, corporate records, tax documents, IP documentation, term sheets, purchase agreements, merger agreements, disclosure schedules, regulatory materials, TSAs, escrow agreements, board materials, and integration communications."],
  ["How does Stepes handle large multilingual due diligence projects?", "Stepes can organize large document collections into scalable multilingual workflows using centralized project management, translation memory, terminology management, subject-matter routing, parallel production, and structured quality controls. Documents can be prioritized by intended use so the greatest linguistic control is applied where it matters most."],
  ["Can AI be used for M&A due diligence translation?", "Yes. AI can be useful for rapid understanding, discovery, triage, recurring content, and high-volume review when customer-approved and appropriate for the content. Stepes can then add professional validation, expert human translation, terminology governance, QA, or independent review according to intended use and risk."],
  ["How does Stepes protect confidential M&A documents?", "Stepes supports confidential M&A translation through controlled project access, enterprise file workflows, confidentiality requirements, qualified resource assignment, controlled delivery, and customer-specific configurations. Clients should identify any special privacy, AI-processing, data-residency, privilege, access, or retention requirements before project kickoff."],
  ["Can Stepes translate documents from virtual data rooms?", "Yes. Stepes translates multilingual documents originating in or being prepared for virtual data-room environments, including legal, financial, corporate, tax, HR, IP, technical, cybersecurity, regulatory, and operational content. Large VDR-related document sets can be coordinated across languages while maintaining terminology, translation memory, prioritization, and review controls."],
  ["Do M&A translations need to be certified?", "Not automatically. M&A describes the transaction context, while certification is a formal requirement tied to how a translation will be used. Internal diligence and negotiation materials often do not require certification, while documents submitted to a regulator, authority, institution, or other receiving party may. The receiving organization or the client's advisors should determine the requirement."],
  ["Can Stepes support translations for regulatory filings related to an acquisition?", "Yes. Stepes provides translation and linguistic review for transaction-related regulatory materials such as notification forms, questionnaires, exhibits, ownership information, corporate documents, transaction descriptions, financial materials, correspondence, and information-request responses. Transaction parties and their advisors remain responsible for filing obligations, legal interpretations, deadlines, and regulatory strategy."],
  ["Can Stepes maintain terminology across multiple M&A documents?", "Yes. Stepes can maintain transaction glossaries, translation memories, entity-name lists, approved reference language, and reviewer feedback so recurring legal, financial, technical, organizational, and deal-specific terminology remains consistent across related documents."],
  ["Can Stepes support translation after an acquisition closes?", "Yes. Stepes provides post-merger integration translation and localization for employee communications, HR policies, compliance materials, training, SOPs, technical documentation, software, websites, product content, marketing, and customer communications. Language assets created during the deal can continue into integration and ongoing operations."],
  ["What languages does Stepes support for cross-border M&A?", "Stepes provides professional M&A translation services in more than 100 languages across major markets in the Americas, Europe, Asia-Pacific, the Middle East, and Africa. Multinational transactions can include multiple source and target languages within the same coordinated program."],
  ["How quickly can M&A documents be translated?", "Turnaround depends on language pair, document volume, subject matter, file format, intended use, review level, security requirements, and specialist availability. For compressed transaction timelines, Stepes can use parallel production, translation memory, rolling deliveries, workflow automation, and approved AI-assisted processes where suitable."],
  ["What information is needed for an M&A translation quote?", "For the most accurate quote, provide the source files, source and target languages, deadline, intended use, delivery format, review requirements, existing terminology or reference materials, and any confidentiality or security requirements. If confidential files cannot yet be shared, Stepes can discuss project parameters and prepare a preliminary estimate based on available information and stated assumptions."],
];

function AccordionItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <div className="faq-item">
      <button
        id={`faq-question-${index}`}
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <span>{item[0]}</span>
        <span className="faq-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        id={`faq-answer-${index}`}
        className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        aria-hidden={!isOpen}
      >
        <p>{item[1]}</p>
      </div>
    </div>
  );
}

export default function MergerAcquisitionTranslationServices() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <main className="stepes-page">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          color: ${INK};
          background: #fff;
          overflow-x: hidden;
        }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 56px; }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        .section-soft { background: ${SOFT}; }
        .section-blush { background: ${BLUSH}; }
        .section-dark { background: ${DARK}; color: ${DARK_TEXT}; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.04; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.2; margin-bottom: 12px; }
        p, li { font-size: 16px; line-height: 1.7; color: ${TEXT}; font-weight: 400; }
        .body-large { font-size: 18px; line-height: 1.66; }
        .dark-muted { color: ${DARK_MUTED} !important; }
        .eyebrow {
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: ${MAGENTA};
          margin-bottom: 14px;
        }
        .eyebrow-dark { color: ${EYEBROW_DARK}; }
        .section-heading { max-width: 820px; margin: 0 auto 48px; text-align: center; }
        .section-heading p { max-width: 800px; margin: 0 auto; font-size: 18px; line-height: 1.65; }
        .section-heading-left { margin-left: 0; text-align: left; }
        .section-heading-left p { margin-left: 0; }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          transition: .2s ease;
          border: 1px solid transparent;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: ${MAGENTA};
          color: #fff;
        }
        .btn-primary svg { color: #fff; }
        .btn-primary:hover { background: #A71954; transform: translateY(-1px); }
        .btn-secondary { background: #fff; color: ${INK}; border-color: #D8D2D6; }
        .btn-secondary:hover { border-color: #B7AEB3; transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 44px;
          color: ${MAGENTA};
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
        }
        .editorial-link svg { transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link-dark { color: ${EYEBROW_DARK}; }

        .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #FCFAFB 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(420px, .96fr); gap: 72px; align-items: center; }
        .hero-copy { max-width: 690px; }
        .hero-copy .body-large { max-width: 670px; margin-bottom: 30px; }
        .hero-art {
          position: relative;
          min-height: 470px;
          border-radius: 30px;
          background: #F4F1F3;
          overflow: hidden;
          border: 1px solid #ECE7EA;
        }
        .hero-art:before {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 47% 53% 58% 42% / 46% 40% 60% 54%;
          background: #DFDADC;
          right: -86px;
          top: 42px;
          transform: rotate(-12deg);
        }
        .hero-art:after {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border-radius: 52% 48% 42% 58% / 50% 38% 62% 50%;
          background: #C9C1C5;
          left: -55px;
          bottom: -32px;
          transform: rotate(18deg);
        }
        .deal-layer {
          position: absolute;
          border: 1px solid rgba(34,34,34,.13);
          background: rgba(255,255,255,.9);
          border-radius: 20px;
          box-shadow: 0 14px 34px rgba(30,24,27,.07);
        }
        .deal-a { width: 225px; height: 150px; left: 46px; top: 68px; transform: rotate(-6deg); }
        .deal-b { width: 260px; height: 172px; right: 42px; top: 140px; transform: rotate(5deg); }
        .deal-c { width: 230px; height: 145px; left: 112px; bottom: 54px; transform: rotate(3deg); }
        .deal-lines { position: absolute; inset: 0; }
        .deal-lines svg { width: 100%; height: 100%; }
        .deal-node { position: absolute; border-radius: 50%; background: ${MAGENTA}; box-shadow: 0 0 0 7px rgba(193,29,99,.09); }
        .node-1 { width: 12px; height: 12px; left: 46%; top: 38%; }
        .node-2 { width: 9px; height: 9px; left: 58%; top: 58%; background: ${MAGENTA_DARK}; }
        .node-3 { width: 10px; height: 10px; left: 36%; top: 66%; background: #7A7175; }
        .layer-lines { padding: 24px; }
        .mini-line { height: 7px; background: #D7D1D4; border-radius: 8px; margin-bottom: 11px; }
        .mini-line.short { width: 58%; }
        .mini-line.med { width: 78%; }
        .mini-line.magenta { width: 40%; background: #D99AB6; }

        .proof-strip { border-top: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; background: #fff; }
        .proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
        .proof-item { padding: 26px 20px; text-align: center; border-right: 1px solid ${BORDER}; font-size: 16px; line-height: 1.35; font-weight: 600; color: #3A3638; }
        .proof-item:last-child { border-right: 0; }

        .overview-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 88px; align-items: start; }
        .overview-copy { max-width: 520px; }
        .overview-copy p { font-size: 18px; }
        .overview-callout { margin-top: 26px; padding: 6px 0 6px 20px; border-left: 3px solid ${MAGENTA}; font-size: 18px; line-height: 1.5; font-weight: 600; color: ${INK}; }
        .discipline-panel { border-top: 1px solid ${BORDER}; }
        .discipline-row { display: grid; grid-template-columns: 210px 1fr; gap: 28px; padding: 22px 0; border-bottom: 1px solid ${BORDER}; }
        .discipline-row strong { font-size: 16px; font-weight: 600; }
        .discipline-row p { margin: 0; }

        .timeline { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid #DDD5D9; border-radius: 28px; overflow: hidden; background: #fff; box-shadow: 0 14px 34px rgba(49,38,44,.035); }
        .timeline-item { padding: 34px 28px 38px; border-right: 1px solid #DDD5D9; border-bottom: 1px solid #DDD5D9; position: relative; min-height: 300px; }
        .timeline-item:nth-child(3n) { border-right: 0; }
        .timeline-item:nth-last-child(-n+3) { border-bottom: 0; }
        .timeline-number { font-size: 13px; line-height: 1; font-weight: 600; letter-spacing: .02em; color: ${MAGENTA}; margin-bottom: 42px; }
        .timeline-item:before { content: ""; position: absolute; left: 28px; top: 65px; width: 10px; height: 10px; background: ${MAGENTA}; border-radius: 50%; box-shadow: 0 0 0 5px rgba(193,29,99,.08); z-index: 1; }
        .timeline-item:after { content: ""; position: absolute; left: 38px; right: 0; top: 69px; height: 1px; background: #C9C0C5; }
        .timeline-item h3 { margin-bottom: 14px; }
        .timeline-item p { margin: 0; }

        .diligence-layout { display: grid; grid-template-columns: 330px 1fr; gap: 72px; align-items: start; }
        .diligence-intro { position: sticky; top: 24px; }
        .diligence-intro h2 { margin-bottom: 20px; }
        .diligence-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid ${BORDER}; }
        .diligence-row { padding: 24px 26px 26px 0; border-bottom: 1px solid ${BORDER}; }
        .diligence-row:nth-child(odd) { padding-right: 34px; border-right: 1px solid ${BORDER}; }
        .diligence-row:nth-child(even) { padding-left: 34px; }
        .diligence-row h3 { font-size: 24px; }
        .diligence-row p { margin: 0; }

        .workflow-wrap { background: #fff; border: 1px solid ${BORDER}; border-radius: 30px; overflow: hidden; }
        .workflow-head { padding: 38px 42px 30px; border-bottom: 1px solid ${BORDER}; }
        .workflow-head p { max-width: 760px; margin-bottom: 0; font-size: 18px; }
        .workflow-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .workflow-step { padding: 34px 28px 36px; border-right: 1px solid ${BORDER}; }
        .workflow-step:last-child { border-right: 0; }
        .workflow-index { font-size: 12px; font-weight: 600; color: ${MAGENTA}; margin-bottom: 20px; }
        .workflow-step h3 { font-size: 24px; }
        .workflow-step p { margin: 0; }
        .workflow-link { padding: 18px 42px 22px; border-top: 1px solid ${BORDER}; }

        .document-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid ${BORDER}; border-left: 1px solid ${BORDER}; }
        .document-group { padding: 28px; border-right: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; background: #fff; }
        .document-group h3 { font-size: 24px; }
        .document-group ul { list-style: none; padding: 0; margin: 0; }
        .document-group li { position: relative; padding-left: 18px; margin: 9px 0; }
        .document-group li:before { content: ""; position: absolute; left: 0; top: .7em; width: 6px; height: 1px; background: #81777C; }
        .document-group:last-child { grid-column: 1 / -1; }
        .document-group:last-child ul { display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 24px; }

        .security-panel { display: grid; grid-template-columns: .78fr 1.22fr; gap: 64px; align-items: start; }
        .security-lead { padding-right: 28px; }
        .security-lead p { color: ${DARK_MUTED}; font-size: 18px; }
        .security-list { border-top: 1px solid rgba(255,255,255,.15); }
        .security-row { display: grid; grid-template-columns: 48px 220px 1fr; gap: 22px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.15); align-items: start; }
        .security-icon { width: 42px; height: 42px; border-radius: 14px; display: grid; place-items: center; background: rgba(242,167,198,.08); color: ${EYEBROW_DARK}; }
        .security-icon svg { width: 22px; height: 22px; }
        .security-row h3 { font-size: 24px; margin: 9px 0 0; }
        .security-row p { color: ${DARK_MUTED}; margin: 7px 0 0; }

        .terminology-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 70px; align-items: center; }
        .terminology-copy p { font-size: 18px; }
        .term-stack { border: 1px solid ${BORDER}; border-radius: 28px; overflow: hidden; background: #fff; }
        .term-row { display: grid; grid-template-columns: 190px 1fr; gap: 26px; padding: 21px 24px; border-bottom: 1px solid ${BORDER}; }
        .term-row:last-child { border-bottom: 0; }
        .term-row strong { font-size: 16px; font-weight: 600; }
        .term-row p { margin: 0; }

        .vdr-panel { display: grid; grid-template-columns: 1fr 1fr; background: #fff; border: 1px solid ${BORDER}; border-radius: 30px; overflow: hidden; }
        .vdr-copy { padding: 48px; }
        .vdr-copy p { font-size: 18px; }
        .vdr-visual { position: relative; min-height: 420px; background: #F2EFF1; border-left: 1px solid ${BORDER}; overflow: hidden; }
        .folder { position: absolute; width: 225px; height: 150px; border: 1px solid #D5CDD1; background: #fff; border-radius: 20px; box-shadow: 0 16px 34px rgba(36,31,34,.06); }
        .folder:before { content: ""; position: absolute; width: 76px; height: 18px; top: -11px; left: 18px; background: #fff; border: 1px solid #D5CDD1; border-bottom: 0; border-radius: 10px 10px 0 0; }
        .folder-a { left: 56px; top: 76px; transform: rotate(-4deg); }
        .folder-b { right: 58px; top: 150px; transform: rotate(5deg); }
        .folder-c { left: 145px; bottom: 44px; transform: rotate(2deg); }
        .folder .layer-lines { padding: 28px 22px; }

        .regulatory-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: start; }
        .regulatory-copy p { font-size: 18px; }
        .regulatory-list { border-top: 1px solid ${BORDER}; }
        .regulatory-row { padding: 22px 0; border-bottom: 1px solid ${BORDER}; }
        .regulatory-row h3 { font-size: 24px; }
        .regulatory-row p { margin: 0; }
        .guardrail { margin-top: 26px; padding: 20px 22px; background: ${BLUSH}; border-radius: 20px; border: 1px solid #F0DDE6; font-size: 16px; line-height: 1.65; color: #594A51; }

        .integration-banner { margin-top: 34px; border-radius: 28px; background: ${MAGENTA_DARK}; color: #fff; padding: 34px 38px; font-size: 23px; line-height: 1.35; font-weight: 600; }
        .integration-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid ${BORDER}; border-left: 1px solid ${BORDER}; margin-top: 38px; }
        .integration-item { padding: 28px; border-right: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
        .integration-item h3 { font-size: 24px; }
        .integration-item p { margin: 0; }
        .integration-links { display: flex; gap: 22px; flex-wrap: wrap; margin-top: 28px; }

        .audience-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid rgba(255,255,255,.15); }
        .audience-row { display: grid; grid-template-columns: 54px 1fr; gap: 20px; padding: 28px 30px 30px 0; border-bottom: 1px solid rgba(255,255,255,.15); }
        .audience-row:nth-child(odd) { border-right: 1px solid rgba(255,255,255,.15); padding-right: 34px; }
        .audience-row:nth-child(even) { padding-left: 34px; }
        .audience-icon { width: 44px; height: 44px; border-radius: 15px; display: grid; place-items: center; background: rgba(242,167,198,.08); color: ${EYEBROW_DARK}; }
        .audience-icon svg { width: 23px; height: 23px; }
        .audience-row h3 { font-size: 24px; color: #fff; }
        .audience-row p { color: ${DARK_MUTED}; margin: 0; }

        .expertise-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
        .expertise-col { padding: 28px 24px; border-right: 1px solid ${BORDER}; }
        .expertise-col:last-child { border-right: 0; }
        .expertise-col h3 { font-size: 24px; }
        .expertise-col ul { list-style: none; padding: 0; margin: 0; }
        .expertise-col li { padding: 8px 0; border-bottom: 1px solid #F0ECEE; }
        .expertise-col li:last-child { border-bottom: 0; }

        .scale-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid ${BORDER}; border-left: 1px solid ${BORDER}; }
        .scale-item { padding: 28px; border-right: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
        .scale-item h3 { font-size: 24px; }
        .scale-item p { margin: 0; }

        .languages-wrap { display: grid; grid-template-columns: .8fr 1.2fr; gap: 70px; align-items: center; }
        .language-list { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid ${BORDER}; border-left: 1px solid ${BORDER}; }
        .language-item { padding: 18px 20px; border-right: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; font-size: 16px; font-weight: 600; }

        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid #E8DDE2; border-left: 1px solid #E8DDE2; }
        .why-item { background: transparent; border-right: 1px solid #E8DDE2; border-bottom: 1px solid #E8DDE2; padding: 28px; }
        .why-item h3 { font-size: 24px; }
        .why-item p { margin: 0; }

        .related-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid ${BORDER}; }
        .related-row { padding: 26px 30px 28px 0; border-bottom: 1px solid ${BORDER}; }
        .related-row:nth-child(odd) { border-right: 1px solid ${BORDER}; padding-right: 34px; }
        .related-row:nth-child(even) { padding-left: 34px; }
        .related-row h3 { font-size: 24px; }
        .related-row p { margin-bottom: 12px; }

        .faq-panel { max-width: 980px; margin: 0 auto; border-top: 1px solid ${BORDER}; }
        .faq-item { border-bottom: 1px solid ${BORDER}; }
        .faq-question { width: 100%; min-height: 72px; background: transparent; border: 0; padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; font-family: inherit; text-align: left; font-size: 19px; line-height: 1.35; font-weight: 600; color: ${INK}; cursor: pointer; }
        .faq-plus { flex: 0 0 34px; width: 34px; height: 34px; border-radius: 50%; background: ${SOFT}; display: grid; place-items: center; color: ${MAGENTA}; font-size: 22px; }
        .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .25s ease; }
        .faq-answer > p { overflow: hidden; margin: 0; max-width: 840px; }
        .faq-answer-open { grid-template-rows: 1fr; }
        .faq-answer-open > p { margin: 0 0 26px; }

        .final-cta { padding: 88px 0; background: ${BLUSH}; }
        .final-cta-box { border-radius: 30px; background: #fff; border: 1px solid #EEDCE4; padding: 54px 56px; display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; box-shadow: 0 16px 38px rgba(74,40,54,.05); }
        .final-cta-box h2 { max-width: 700px; }
        .final-cta-box p { font-size: 18px; max-width: 700px; margin-bottom: 0; }
        .final-cta-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; max-width: 340px; justify-self: end; width: 100%; }

        @media (max-width: 1180px) {
          .container { padding: 0 40px; }
          .hero-grid { grid-template-columns: 1fr 420px; gap: 48px; }
          .timeline { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .scale-grid { grid-template-columns: repeat(2, 1fr); }
          .workflow-step:nth-child(2) { border-right: 0; }
          .workflow-step:nth-child(-n+2) { border-bottom: 1px solid ${BORDER}; }
          .expertise-grid { grid-template-columns: repeat(2, 1fr); }
          .expertise-col:nth-child(2) { border-right: 0; }
          .expertise-col:nth-child(-n+2) { border-bottom: 1px solid ${BORDER}; }
        }

        @media (max-width: 900px) {
          .container { padding: 0 24px; }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .diligence-row h3, .workflow-step h3, .document-group h3, .security-row h3, .regulatory-row h3, .integration-item h3, .audience-row h3, .expertise-col h3, .scale-item h3, .why-item h3, .related-row h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-grid, .overview-grid, .diligence-layout, .security-panel, .terminology-grid, .vdr-panel, .regulatory-grid, .languages-wrap, .final-cta-box { grid-template-columns: 1fr; }
          .hero-copy { max-width: 800px; }
          .hero-art { min-height: 400px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item { border-right: 1px solid ${BORDER}; border-bottom: 1px solid ${BORDER}; }
          .timeline { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .timeline-item { min-height: 0; border-right: 1px solid #DDD5D9; border-bottom: 1px solid #DDD5D9; }
          .timeline-item:nth-child(3n) { border-right: 1px solid #DDD5D9; }
          .timeline-item:nth-child(2n) { border-right: 0; }
          .timeline-item:nth-last-child(-n+3) { border-bottom: 1px solid #DDD5D9; }
          .timeline-item:nth-last-child(-n+2) { border-bottom: 0; }
          .proof-item:nth-child(2n) { border-right: 0; }
          .proof-item:nth-child(5) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .overview-grid { gap: 42px; }
          .section-heading:not(.section-heading-left), .section-heading:not(.section-heading-left) p { text-align: center; }
          .overview-copy .eyebrow, .overview-copy h2 { text-align: center; }
          .overview-copy > p { text-align: left; }
          .final-cta-box > div:first-child h2 { text-align: center; }
          .final-cta-box > div:first-child p { text-align: left; }
          .diligence-layout { gap: 36px; }
          .diligence-intro { position: static; }
          .diligence-intro h2, .diligence-intro > p:first-of-type { text-align: center; }
          .diligence-intro > p:first-of-type { max-width: 760px; margin-left: auto; margin-right: auto; }
          .security-panel { gap: 40px; }
          .security-lead .eyebrow, .security-lead h2, .security-lead > p { text-align: left; }
          .document-grid { grid-template-columns: repeat(2, 1fr); }
          .document-group:last-child ul { grid-template-columns: repeat(2, 1fr); }
          .vdr-copy { padding: 42px; }
          .vdr-visual { border-left: 0; border-top: 1px solid ${BORDER}; min-height: 360px; }
          .integration-grid { grid-template-columns: repeat(2, 1fr); }
          .integration-item:nth-child(2n) { border-right: 1px solid ${BORDER}; }
          .integration-item:nth-child(2n+1) { border-left: 0; }
          .why-grid, .scale-grid { grid-template-columns: repeat(2, 1fr); }
          .final-cta-actions { justify-self: center; max-width: 380px; flex-direction: column; }
        }

        @media (max-width: 640px) {
          .container { padding: 0 20px; }
          .section { padding: 68px 0; }
          .section-dense { padding: 64px 0; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .diligence-row h3, .workflow-step h3, .document-group h3, .security-row h3, .regulatory-row h3, .integration-item h3, .audience-row h3, .expertise-col h3, .scale-item h3, .why-item h3, .related-row h3 { font-size: 20px; }
          p, li { font-size: 16px; }
          .body-large { font-size: 18px; }
          .hero { padding: 72px 0 68px; }
          .hero-copy { text-align: center; }
          .hero-copy .body-large { margin-left: auto; margin-right: auto; }
          .hero .cta-row { justify-content: center; }
          .hero .btn { width: 100%; }
          .hero-art { min-height: 330px; margin-top: 8px; }
          .deal-a { width: 175px; height: 118px; left: 24px; top: 58px; }
          .deal-b { width: 190px; height: 130px; right: 20px; top: 122px; }
          .deal-c { width: 175px; height: 112px; left: 78px; bottom: 32px; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item { border-right: 0; border-bottom: 1px solid ${BORDER} !important; }
          .proof-item:last-child { border-bottom: 0 !important; }
          .overview-copy .eyebrow, .overview-copy h2 { text-align: center; }
          .overview-copy > p { text-align: left; max-width: 720px; margin-left: auto; margin-right: auto; }
          .discipline-row { grid-template-columns: 1fr; gap: 8px; }
          .timeline { grid-template-columns: 1fr; border: 0; border-top: 1px solid #D8D3D6; border-radius: 0; box-shadow: none; overflow: visible; }
          .timeline-item, .timeline-item:nth-child(2n), .timeline-item:nth-child(3n), .timeline-item:nth-last-child(-n+2), .timeline-item:nth-last-child(-n+3) { min-height: 0; border-right: 0; border-bottom: 1px solid #D8D3D6 !important; padding: 26px 0 28px 44px; }
          .timeline-item:before { left: 5px; top: 30px; width: 9px; height: 9px; box-shadow: 0 0 0 4px rgba(193,29,99,.08); }
          .timeline-item:after { left: 9px; right: auto; top: 39px; bottom: -1px; width: 1px; height: auto; display: block !important; }
          .timeline-item:last-child { border-bottom: 0 !important; }
          .timeline-item:last-child:after { display: none !important; }
          .timeline-number { margin-bottom: 8px; }
          .diligence-grid { grid-template-columns: 1fr; }
          .diligence-row, .diligence-row:nth-child(odd), .diligence-row:nth-child(even) { padding: 22px 0; border-right: 0; }
          .workflow-head { padding: 30px 24px 24px; }
          .workflow-head .eyebrow, .workflow-head h2, .workflow-head p { text-align: left; }
          .workflow-grid { grid-template-columns: 1fr; }
          .workflow-step { border-right: 0; border-bottom: 1px solid ${BORDER}; }
          .workflow-step:last-child { border-bottom: 0; }
          .workflow-link { padding: 16px 24px 20px; }
          .document-grid { grid-template-columns: 1fr; }
          .document-group:last-child { grid-column: auto; }
          .document-group:last-child ul { grid-template-columns: 1fr; }
          .security-row { grid-template-columns: 44px 1fr; gap: 18px; }
          .security-row p { grid-column: 2; margin-top: -2px; }
          .term-row { grid-template-columns: 1fr; gap: 8px; }
          .vdr-copy { padding: 32px 24px; }
          .folder-a { left: 28px; }
          .folder-b { right: 24px; }
          .folder-c { left: 74px; }
          .regulatory-copy h2, .regulatory-copy > p { text-align: left; }
          .integration-grid, .audience-grid, .expertise-grid, .scale-grid, .why-grid, .related-grid { grid-template-columns: 1fr; }
          .integration-grid { border-left: 0; }
          .integration-item { border-right: 0; padding: 24px 0; }
          .integration-item:last-child { border-bottom: 0; }
          .audience-row, .audience-row:nth-child(odd), .audience-row:nth-child(even), .related-row, .related-row:nth-child(odd), .related-row:nth-child(even) { border-right: 0; padding-left: 0; padding-right: 0; }
          .expertise-col { border-right: 0; border-bottom: 1px solid ${BORDER}; padding: 26px 0; }
          .expertise-col:last-child { border-bottom: 0; }
          .audience-row { grid-template-columns: 48px 1fr; }
          .integration-banner { font-size: 20px; padding: 28px 26px; }
          .language-list { grid-template-columns: repeat(2, 1fr); }
          .final-cta { padding: 72px 0; }
          .final-cta-box { padding: 36px 24px; gap: 30px; }
          .final-cta-box h2 { text-align: center; }
          .final-cta-box p { text-align: left; }
          .final-cta-actions { justify-self: stretch; flex-direction: column; max-width: none; }
          .final-cta-actions .btn { width: 100%; }
          .faq-question { font-size: 18px; min-height: 68px; }
        }

        @media (max-width: 360px) {
          .btn { padding-left: 18px; padding-right: 18px; }
          .editorial-link { max-width: 100%; }
          .language-list { grid-template-columns: 1fr; }
          .hero-art { min-height: 310px; }
          .folder { width: 180px; height: 125px; }
          .folder-a { left: 18px; }
          .folder-b { right: 14px; top: 135px; }
          .folder-c { left: 58px; bottom: 30px; }
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Mergers & Acquisitions</div>
            <h1>M&A Translation Services for Cross-Border Transactions</h1>
            <p className="body-large">Secure, accurate translation for multilingual due diligence, transaction documents, regulatory materials, negotiations, closing, and post-merger integration. Stepes combines legal, financial, technical, and industry expertise with scalable AI-powered workflows and professional human review to support complex mergers and acquisitions in 100+ languages.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={links.quote}>Get a Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an M&A Translation Expert</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="deal-layer deal-a"><div className="layer-lines"><div className="mini-line magenta"/><div className="mini-line med"/><div className="mini-line"/><div className="mini-line short"/></div></div>
            <div className="deal-layer deal-b"><div className="layer-lines"><div className="mini-line short"/><div className="mini-line"/><div className="mini-line med"/><div className="mini-line magenta"/></div></div>
            <div className="deal-layer deal-c"><div className="layer-lines"><div className="mini-line med"/><div className="mini-line short"/><div className="mini-line"/></div></div>
            <div className="deal-lines">
              <svg viewBox="0 0 520 470" preserveAspectRatio="none">
                <path d="M126 146 C218 118, 249 165, 287 204 S357 255, 410 242" stroke="#8E858A" strokeWidth="1.5" fill="none" />
                <path d="M166 338 C223 289, 231 235, 288 206" stroke="#C11D63" strokeWidth="2" fill="none" opacity=".7" />
                <path d="M293 206 C316 246, 318 292, 345 329" stroke="#7A7175" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
            <div className="deal-node node-1"/><div className="deal-node node-2"/><div className="deal-node node-3"/>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="M&A translation capabilities">
        <div className="container proof-grid">
          {["100+ Languages", "Legal, Financial & Technical Expertise", "Secure Enterprise Workflows", "AI + Human Review", "ISO-Certified Quality Processes"].map((item) => <div className="proof-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="section">
        <div className="container overview-grid">
          <div className="overview-copy">
            <div className="eyebrow">Cross-Border Transactions</div>
            <h2>Translation Built for High-Stakes M&A</h2>
            <p>Mergers and acquisitions bring together legal, financial, commercial, technical, regulatory, and operational information that must remain clear across languages. Stepes coordinates these disciplines within one multilingual transaction program rather than treating every document as an isolated translation request.</p>
            <p>Our merger and acquisition translation services support acquisitions, mergers, divestitures and carve-outs, joint ventures, strategic investments, and cross-border reorganizations across buy-side and sell-side workflows.</p>
            <div className="overview-callout">One transaction. Many disciplines. One coordinated language program.</div>
          </div>
          <div className="discipline-panel">
            {[
              ["Legal", "Agreements, corporate records, governance, employment, compliance, IP, and legal correspondence."],
              ["Financial", "Financial statements, valuations, accounting, tax, financing, audit, and investment materials."],
              ["Technical", "Engineering, software, cybersecurity, manufacturing, R&D, quality, and operational documentation."],
              ["Transaction Lifecycle", "Support from initial evaluation and diligence through negotiation, regulatory review, closing, and integration."],
            ].map(([title, copy]) => <div className="discipline-row" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            <div className="cta-row" style={{paddingTop: 22}}>
              <InlineLink href={links.legal}>Legal Translation Services</InlineLink>
              <InlineLink href={links.financial}>Financial Translation Services</InlineLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Language Support Across Every Stage of the M&A Lifecycle" intro="Cross-border transactions generate different language requirements as a deal progresses. Stepes applies translation workflows that reflect the purpose, risk, volume, and timing of each document set." align="left" />
          <div className="timeline">
            {lifecycle.map(([title, copy], index) => <div className="timeline-item" key={title}><div className="timeline-number">0{index + 1}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container diligence-layout">
          <div className="diligence-intro">
            <h2>Multilingual Due Diligence Without Losing Critical Detail</h2>
            <p className="body-large">Cross-border diligence can involve thousands of records created for local rather than international audiences. Stepes helps transaction teams identify, prioritize, and accurately translate the information needed for informed review.</p>
          </div>
          <div className="diligence-grid">
            {diligence.map(([title, copy]) => <div className="diligence-row" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <div className="workflow-wrap">
            <div className="workflow-head">
              <div className="eyebrow">Right Workflow, Right Document</div>
              <h2>Match Translation Quality to How Each Document Will Be Used</h2>
              <p>A file being screened for relevance does not necessarily require the same workflow as a definitive agreement, regulatory submission, or document intended for formal reliance. Stepes helps clients balance turnaround, scale, cost, and translation control according to intended use.</p>
            </div>
            <div className="workflow-grid">
              {workflow.map(([title, copy], index) => <div className="workflow-step" key={title}><div className="workflow-index">0{index + 1}</div><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
            <div className="workflow-link"><InlineLink href={links.aiLegal}>AI-Enabled Legal Translation Services</InlineLink></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="M&A Documents We Translate" intro="Stepes supports multilingual content across deal preparation, due diligence, negotiation, financing, regulatory review, signing, closing, and integration." />
          <div className="document-grid">
            {documentGroups.map(([title, items]) => <div className="document-group" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container security-panel">
          <div className="security-lead">
            <div className="eyebrow eyebrow-dark">Confidentiality & Security</div>
            <h2>Protect Confidential Deal Information at Every Stage</h2>
            <p>M&A translation can involve proposed terms, valuations, financing, intellectual property, customer relationships, employee information, strategic plans, technology assets, and other sensitive information. Stepes supports controlled multilingual workflows from project intake through delivery.</p>
            <InlineLink href={links.security} dark>Security & Compliance</InlineLink>
          </div>
          <div className="security-list">
            {securityItems.map(([title, copy, icon]) => <div className="security-row" key={title}><div className="security-icon">{icon === "shield" ? <ShieldIcon /> : <ConceptIcon type={icon} />}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container terminology-grid">
          <div className="terminology-copy">
            <div className="eyebrow">Terminology Governance</div>
            <h2>One Transaction Vocabulary Across Every Document</h2>
            <p>Corporate entities, subsidiaries, products, technologies, financial concepts, and defined legal terms can recur across hundreds of related files. Stepes uses terminology management, translation memory, approved references, and reviewer feedback to create a consistent multilingual language foundation across the transaction.</p>
            <div className="cta-row">
              <InlineLink href={links.terminology}>Terminology Management</InlineLink>
              <InlineLink href={links.tm}>Translation Memory</InlineLink>
            </div>
          </div>
          <div className="term-stack">
            {terminologyItems.map(([title, copy]) => <div className="term-row" key={title}><strong>{title}</strong><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="vdr-panel">
            <div className="vdr-copy">
              <h2>Multilingual Translation for Virtual Data Rooms</h2>
              <p>Virtual data rooms often contain large collections of diligence and transaction records. Stepes supports translation workflows for multilingual files originating in or being prepared for VDR environments, helping deal teams make foreign-language information accessible within the approved transaction workflow.</p>
              <p>Coordinate legal, financial, tax, HR, IP, technical, regulatory, commercial, and operational content; prioritize selected files; maintain transaction terminology; reuse validated translations; and process multiple languages in parallel.</p>
              <InlineLink href={links.dataRoom}>Data Room Translation Services</InlineLink>
            </div>
            <div className="vdr-visual" aria-hidden="true">
              <div className="folder folder-a"><div className="layer-lines"><div className="mini-line magenta"/><div className="mini-line"/><div className="mini-line short"/></div></div>
              <div className="folder folder-b"><div className="layer-lines"><div className="mini-line med"/><div className="mini-line short"/><div className="mini-line"/></div></div>
              <div className="folder folder-c"><div className="layer-lines"><div className="mini-line short"/><div className="mini-line magenta"/><div className="mini-line med"/></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container regulatory-grid">
          <div className="regulatory-copy">
            <h2>Regulatory Translation for Cross-Border M&A</h2>
            <p>International transactions can involve multilingual materials for merger-control, competition, foreign-investment, national-security, foreign-subsidy, and sector-specific review. Stepes provides specialized translation and linguistic review to help deal teams and their advisors prepare this content accurately and consistently.</p>
            <div className="guardrail">Stepes provides translation and linguistic services. Transaction parties and their legal, financial, regulatory, and other professional advisors remain responsible for determining applicable laws, filing requirements, legal interpretations, deadlines, and regulatory strategy.</div>
          </div>
          <div className="regulatory-list">
            {[
              ["Competition & Merger-Control Materials", "Translate transaction descriptions, market information, supporting evidence, corporate records, financial materials, and other content identified by counsel for review."],
              ["Foreign-Investment & National-Security Review", "Support multilingual documentation related to foreign-investment screening and national-security review, including CFIUS-related materials where relevant."],
              ["Foreign-Subsidy Review", "Translate corporate, ownership, financial, transaction, and supporting information that may be required for applicable foreign-subsidy processes."],
              ["Sector-Specific Approvals", "Support multilingual filings and supporting content for transactions involving industries subject to specialized regulatory oversight."],
              ["Regulatory Correspondence & Information Requests", "Maintain terminology across questions, responses, exhibits, supporting documents, and regulator communications."],
            ].map(([title, copy]) => <div className="regulatory-row" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <SectionHeading eyebrow="After the Deal" title="Keep Global Teams Aligned After the Transaction Closes" intro="Closing can be the beginning of a much larger multilingual communication challenge. Stepes extends support beyond transaction execution to help organizations integrate people, operations, technology, governance, and customer experiences." />
          <div className="integration-grid">
            {[
              ["People & HR", "Acquisition announcements, employee communications, onboarding, benefits, workplace policies, compensation, and organizational changes."],
              ["Governance & Compliance", "Codes of conduct, policies, ethics programs, privacy materials, compliance communications, and training."],
              ["Operations", "SOPs, manufacturing procedures, quality documentation, safety content, supply-chain materials, and internal processes."],
              ["Technology & Systems", "Enterprise applications, software interfaces, IT documentation, internal systems, help content, and knowledge bases."],
              ["Training & eLearning", "Onboarding, compliance, product, process, technical, and professional training for newly combined teams."],
              ["Brand & Customer Experience", "Websites, product content, marketing, sales collateral, digital experiences, and customer communications."],
            ].map(([title, copy]) => <div className="integration-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="integration-banner">Support the transaction before closing. Support the combined organization after closing.</div>
          <div className="integration-links">
            <InlineLink href={links.hr}>HR Translation Services</InlineLink>
            <InlineLink href={links.elearning}>eLearning Localization</InlineLink>
            <InlineLink href={links.website}>Website Translation Services</InlineLink>
            <InlineLink href={links.software}>Software Localization Services</InlineLink>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading title="Built for Every Team Supporting the Transaction" intro="Cross-border M&A is collaborative. Stepes supports the professional disciplines involved in evaluating, executing, and integrating international transactions." align="left" dark />
          <div className="audience-grid">
            {audiences.map(([title, copy, icon]) => <div className="audience-row" key={title}><div className="audience-icon"><ConceptIcon type={icon} /></div><div><h3>{title}</h3><p>{copy}</p>{title === "In-House Legal Teams" ? <InlineLink href={links.legalTeams} dark>Solutions for Legal Teams</InlineLink> : null}{title === "Private Equity Firms" ? <InlineLink href={links.privateEquity} dark>Private Equity Translation Services</InlineLink> : null}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Legal, Financial and Technical Expertise in One Translation Program" intro="A patent portfolio, audited financial statement, software architecture report, employment agreement, and purchase agreement require different subject-matter knowledge. Stepes builds multilingual teams around the content." />
          <div className="expertise-grid">
            {expertise.map(([title, items]) => <div className="expertise-col" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Move Large M&A Translation Programs Faster" intro="Transaction deadlines rarely move simply because a document set is multilingual. Stepes combines professional language expertise with translation technology and centralized project workflows to keep large programs moving with appropriate quality controls." />
          <div className="scale-grid">
            {scaleItems.map(([title, copy]) => <div className="scale-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div style={{marginTop: 22}}><InlineLink href={links.enterprise}>Enterprise Translation Management</InlineLink></div>
        </div>
      </section>

      <section className="section">
        <div className="container languages-wrap">
          <div>
            <h2>M&A Translation Services in 100+ Languages</h2>
            <p className="body-large">Coordinate multilingual diligence, transaction documents, regulatory content, and integration programs across the Americas, Europe, Asia-Pacific, the Middle East, and Africa through a single language partner.</p>
            <InlineLink href={links.languages}>Explore All Languages</InlineLink>
          </div>
          <div className="language-list">
            {["Chinese", "Japanese", "Korean", "German", "French", "Spanish", "Portuguese", "Italian", "Dutch", "Polish", "Czech", "Arabic"].map((lang) => <div className="language-item" key={lang}>{lang}</div>)}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container">
          <SectionHeading title="Why Global Deal Teams Choose Stepes" />
          <div className="why-grid">
            {[
              ["M&A Subject-Matter Expertise", "Bring legal, financial, technical, regulatory, operational, and industry language expertise into one coordinated transaction program."],
              ["Risk-Based Translation Workflows", "Match AI-assisted translation, professional validation, expert human translation, and independent review to how each document will be used."],
              ["Enterprise Security", "Support confidential transaction content through controlled enterprise workflows and customer-specific project requirements."],
              ["Speed & Scale", "Coordinate large multilingual document sets and parallel workstreams when diligence, regulatory, negotiation, and closing timelines are compressed."],
              ["Transaction Terminology Consistency", "Maintain defined terms, corporate names, financial terminology, technical language, and approved expressions across related files."],
              ["End-to-End M&A Support", "Support target evaluation and due diligence through regulatory review, closing, and post-merger integration."],
            ].map(([title, copy]) => <div className="why-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Related Translation Services" intro="Cross-border M&A brings together multiple language disciplines. Explore specialized Stepes services when your requirement extends beyond the transaction-specific scope of this page." />
          <div className="related-grid">
            {related.map(([title, copy, href]) => <div className="related-row" key={title}><h3>{title}</h3><p>{copy}</p><InlineLink href={href}>{title}</InlineLink></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="M&A Translation Services FAQs" align="left" />
          <div className="faq-panel">
            {faqs.map((item, index) => <AccordionItem key={item[0]} item={item} index={index} openIndex={openFaq} setOpenIndex={setOpenFaq} />)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-box">
            <div>
              <h2>Keep Every M&A Workstream Moving Across Languages</h2>
              <p>From multilingual due diligence and transaction documents to regulatory review, closing, and post-merger integration, Stepes combines specialized expertise, secure enterprise workflows, AI-powered language technology, and professional human review.</p>
            </div>
            <div className="final-cta-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an M&A Translation Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
