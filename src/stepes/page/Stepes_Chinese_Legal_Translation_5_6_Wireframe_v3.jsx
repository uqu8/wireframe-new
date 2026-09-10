import React, { useState } from "react";

const COLORS = {
  ink: "#171717",
  text: "#343434",
  muted: "#666666",
  line: "#E5E5E5",
  soft: "#F7F7F7",
  blush: "#FDF2F7",
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  dark: "#19171A",
  dark2: "#242124",
  lightMagenta: "#F2A7C6",
  white: "#FFFFFF",
};

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  legal: "https://www.stepes.com/legal-translation-services/",
  chinese: "https://www.stepes.com/chinese-translation-services/",
  contracts: "https://www.stepes.com/contract-translation-services/",
  litigation: "https://www.stepes.com/litigation-translation-services/",
  ediscovery: "https://www.stepes.com/ediscovery-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  legalTeams: "https://www.stepes.com/solutions/legal-teams/",
  patent: "https://www.stepes.com/chinese-patent-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  security: "https://www.stepes.com/security/",
  interpreting: "https://www.stepes.com/interpretation-services/",
  aiLegal: "https://www.stepes.com/ai-enabled-legal-translation-services/",
};

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m14 7 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={open ? "m6 15 6-6 6 6" : "m6 9 6 6 6-6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ type, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  if (type === "document") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path {...common} d="M7 3h7l4 4v14H7z"/><path {...common} d="M14 3v5h5M9.5 12h5M9.5 16h5"/></svg>;
  if (type === "globe") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21M12 3C9.6 5.6 8.4 8.6 8.4 12S9.6 18.4 12 21"/></svg>;
  if (type === "shield") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path {...common} d="M12 3 19 6v5c0 4.8-2.9 8.2-7 10-4.1-1.8-7-5.2-7-10V6z"/><path {...common} d="m9 12 2 2 4-4"/></svg>;
  if (type === "terms") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path {...common} d="M5 5h14M5 9h9M5 15h14M10 19h9"/><path {...common} d="M5 18.5 7 15l2 3.5"/></svg>;
  if (type === "people") return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle {...common} cx="9" cy="8" r="3"/><path {...common} d="M3.5 19c.8-3.2 2.7-5 5.5-5s4.7 1.8 5.5 5"/><circle {...common} cx="17" cy="9" r="2.2"/><path {...common} d="M15.4 14.2c2.8-.6 4.7.8 5.1 3.8"/></svg>;
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle {...common} cx="12" cy="12" r="8"/></svg>;
}

function Eyebrow({ children, dark = false, className = "" }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""} ${className}`}>{children}</div>;
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`text-link ${dark ? "text-link-dark" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon size={17} />
    </a>
  );
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`btn ${secondary ? "btn-secondary" : "btn-primary"}`} href={href}>
      <span>{children}</span><ArrowIcon size={17} />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 700 560" role="img">
        <defs>
          <linearGradient id="paperFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F5F5F5" />
          </linearGradient>
        </defs>
        <path d="M70 390c50-116 145-199 252-217 86-15 135 9 206-10 49-13 84-41 112-70" fill="none" stroke="#D6D6D6" strokeWidth="2" strokeDasharray="7 11" />
        <path d="M104 434c56-25 80-66 103-111 35-67 61-104 123-136" fill="none" stroke="#C9C9C9" strokeWidth="2" />
        <path d="M482 130c-31 15-55 39-72 72-24 47-24 91-28 141" fill="none" stroke="#B8B8B8" strokeWidth="2" />
        <g transform="translate(208 112) rotate(-6)">
          <rect x="0" y="0" width="260" height="330" rx="24" fill="url(#paperFill)" stroke="#AFAFAF" strokeWidth="2" />
          <rect x="25" y="25" width="88" height="13" rx="6.5" fill="#C11D63" opacity=".14" />
          <rect x="25" y="60" width="170" height="9" rx="4.5" fill="#5C5C5C" opacity=".88" />
          <rect x="25" y="80" width="205" height="8" rx="4" fill="#969696" />
          <rect x="25" y="99" width="187" height="8" rx="4" fill="#B0B0B0" />
          <rect x="25" y="131" width="76" height="8" rx="4" fill="#5C5C5C" />
          <rect x="25" y="150" width="204" height="8" rx="4" fill="#A7A7A7" />
          <rect x="25" y="169" width="172" height="8" rx="4" fill="#B9B9B9" />
          <rect x="25" y="206" width="91" height="8" rx="4" fill="#5C5C5C" />
          <rect x="25" y="225" width="205" height="8" rx="4" fill="#9B9B9B" />
          <rect x="25" y="244" width="154" height="8" rx="4" fill="#B8B8B8" />
          <path d="M158 286c25-22 44-19 68 3" fill="none" stroke="#767676" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="217" cy="287" r="18" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
          <path d="M208 287c4 3 7 5 10 7 3-5 6-10 10-16" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g transform="translate(405 245) rotate(7)">
          <rect x="0" y="0" width="190" height="220" rx="20" fill="#FFFFFF" stroke="#A9A9A9" strokeWidth="2" />
          <text x="28" y="58" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="600" fill="#424242">法律</text>
          <text x="28" y="96" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600" fill="#696969">LEGAL REVIEW</text>
          <line x1="28" y1="122" x2="155" y2="122" stroke="#C2C2C2" strokeWidth="2" />
          <line x1="28" y1="145" x2="140" y2="145" stroke="#C2C2C2" strokeWidth="2" />
          <line x1="28" y1="168" x2="112" y2="168" stroke="#C2C2C2" strokeWidth="2" />
          <rect x="28" y="184" width="76" height="10" rx="5" fill="#C11D63" opacity=".25" />
        </g>
        <g transform="translate(92 205)">
          <path d="M0 64c31-28 71-41 112-34 16 3 31 8 43 16" fill="none" stroke="#7C7C7C" strokeWidth="2" />
          <circle cx="37" cy="45" r="7" fill="#C11D63" />
          <circle cx="113" cy="39" r="7" fill="#C11D63" />
          <path d="M42 45h64" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 7" />
        </g>
        <path d="M585 333c22 11 40 29 53 53" fill="none" stroke="#8E8E8E" strokeWidth="2" />
        <path d="M607 385h49" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const documents = [
  {
    title: "Contracts & Commercial Agreements",
    text: "Translate agreements while maintaining defined terms, party names, obligations, recurring clauses, schedules, and document relationships.",
    items: ["Master service agreements", "Non-disclosure agreements", "Sales and purchase agreements", "Licensing agreements", "Supplier and vendor agreements", "Distribution agreements", "Joint venture agreements", "Technology agreements", "Statements of work", "Amendments and schedules"],
    link: ["Contract Translation Services", LINKS.contracts],
  },
  {
    title: "Corporate & Transaction Documents",
    text: "Support multinational corporate operations, investments, transactions, restructuring, and due diligence with consistent Chinese-English legal language.",
    items: ["Corporate records", "Board materials", "Shareholder documents", "Entity documentation", "Governance records", "M&A documentation", "Investment materials", "Due-diligence files", "Corporate policies"],
  },
  {
    title: "Litigation & Dispute Materials",
    text: "Help legal teams review and work with Chinese-language evidence and supporting documents throughout disputes and investigations.",
    items: ["Pleadings and filings", "Exhibits", "Witness statements", "Expert reports", "Arbitration materials", "Legal correspondence", "Evidence", "Contracts relevant to disputes", "Supporting business records"],
    link: ["Litigation Translation Services", LINKS.litigation],
  },
  {
    title: "Compliance & Investigations",
    text: "Translate multilingual compliance and investigation content while maintaining confidentiality, terminology consistency, and document relationships.",
    items: ["Codes of conduct", "Policies and procedures", "Internal investigation records", "Regulatory correspondence", "Ethics materials", "Audit documents", "Privacy-related materials", "Employee investigation records"],
  },
  {
    title: "Employment & Workplace Legal Content",
    text: "Support international HR and legal teams with Chinese-language workplace documentation.",
    items: ["Employment agreements", "Workplace policies", "Employee handbooks", "Disciplinary notices", "Separation documents", "Investigation materials", "Employee notices", "Benefits-related legal content"],
  },
  {
    title: "Certified & Official Legal Documents",
    text: "Prepare professional Chinese translations with certification when required for the receiving organization or process.",
    items: ["Corporate records", "Court records", "Powers of attorney", "Official certificates", "Supporting legal documents", "Personal and institutional records"],
    link: ["Certified Translation Services", LINKS.certified],
  },
];

const qaSteps = [
  ["Scope & Intended Use", "Confirm the source and target languages, target Chinese locale, document type, audience, purpose, confidentiality requirements, certification needs, file format, and deadline."],
  ["Qualified Team Assignment", "Select translators and reviewers based on Chinese locale, translation direction, legal subject matter, document type, and required level of control."],
  ["Reference & Terminology Setup", "Review existing bilingual documents, counsel-approved language, defined terms, entity names, translation memories, glossaries, and client instructions before translation begins."],
  ["Translation", "Translate the source while preserving meaning, qualifications, defined terminology, document structure, tone, and legally relevant details."],
  ["Human Review", "Apply professional linguistic review according to the selected workflow. Higher-risk assignments may include independent revision by a second qualified linguist."],
  ["Linguistic & Automated QA", "Check for omissions, inconsistent terminology, untranslated text, numbers, dates, names, punctuation, formatting, and other potential issues."],
  ["Document Integrity Review", "Verify headings, tables, cross-references, exhibits, schedules, footnotes, signatures, seals, and other file-level elements relevant to delivery."],
  ["Controlled Delivery", "Prepare final files in the agreed format and deliver them through the approved project workflow."],
];

const faqs = [
  ["What are Chinese legal translation services?", "Chinese legal translation services translate documents connected with legal rights, obligations, proceedings, compliance, corporate activities, transactions, or official processes between Chinese and other languages. Professional Chinese legal translation requires knowledge of the language pair, legal subject matter, document purpose, target market, and relevant terminology. Stepes supports both English-to-Chinese and Chinese-to-English legal translation for law firms, corporate legal departments, and global organizations."],
  ["Does Stepes translate legal documents from Chinese to English as well as English to Chinese?", "Yes. Stepes provides both English-to-Chinese and Chinese-to-English legal translation. English-to-Chinese projects commonly include contracts, corporate documents, policies, compliance materials, employment content, and legal correspondence intended for Chinese-speaking audiences. Chinese-to-English projects commonly include Chinese contracts, corporate records, litigation evidence, regulatory materials, investigation files, due-diligence records, financial documents, and legal correspondence needed by English-speaking legal teams."],
  ["Should my legal translation use Simplified or Traditional Chinese?", "The right Chinese version depends primarily on the target market and audience. Mainland China generally uses Simplified Chinese. Taiwan and Hong Kong generally use Traditional Chinese, but they use different regional terminology and conventions. Singapore commonly uses Simplified Chinese, while U.S. programs may require Simplified Chinese, Traditional Chinese, or both depending on the audience. Stepes assigns translators according to the target locale rather than simply converting characters between Simplified and Traditional Chinese."],
  ["Is Chinese legal terminology different in Mainland China, Taiwan, and Hong Kong?", "Yes. Legal, institutional, corporate, financial, and governmental terminology can differ among Mainland China, Taiwan, and Hong Kong. The distinction extends beyond Simplified versus Traditional characters. A professional legal translation should use terminology appropriate to the target market, document type, audience, and context."],
  ["Can Stepes translate Chinese contracts and commercial agreements?", "Yes. Stepes translates commercial agreements including master service agreements, NDAs, licensing agreements, purchase agreements, distribution contracts, supplier agreements, joint venture agreements, statements of work, amendments, and related schedules. For recurring contract programs, Stepes can also manage defined terms, party names, approved clauses, translation memory, and counsel-reviewed language across related documents."],
  ["Can Stepes support Chinese documents for litigation and eDiscovery?", "Yes. Stepes supports Chinese-language documents used in litigation, arbitration, investigations, discovery, and legal review. For high-volume document sets, legal teams can use rapid or AI-assisted translation for initial understanding and triage, then apply professional human translation and additional review to priority evidence or documents requiring greater linguistic control."],
  ["Can AI be used for Chinese legal translation?", "Yes, when the workflow is appropriate to the intended use and level of risk. AI-assisted translation can be valuable for document triage, high-volume review, repeated content, and other suitable legal workflows. However, important legal documents generally require professional human oversight because AI can introduce terminology errors, omissions, inconsistent defined terms, altered numbers, or unsupported wording. Stepes matches AI, professional legal translation, terminology management, review, and QA to the purpose of the project rather than applying the same workflow to every document."],
  ["Do Chinese legal translations need to be certified?", "Not always. Legal translation describes the subject matter of a document, while certified translation involves a formal certification accompanying the translation. Certification requirements depend on the receiving court, government agency, institution, jurisdiction, or purpose. Clients should confirm the required form of certification or other formalities with the receiving authority or qualified legal counsel before translation begins. Stepes can provide certified translations when required."],
  ["How does Stepes maintain terminology across related Chinese legal documents?", "Stepes can use client glossaries, approved bilingual documents, translation memory, terminology databases, entity-name lists, defined terms, and legal-team feedback to maintain consistency across related documents. When client reviewers approve terminology or preferred wording, those decisions can be captured and applied to future work."],
  ["Can Stepes use translations that our legal team has already approved?", "Yes. Previously approved contracts, bilingual templates, terminology lists, legal-team feedback, clause libraries, and other reference materials can be incorporated into the project. Using established client language can improve consistency and reduce unnecessary terminology changes across related matters and future translations."],
  ["Can Stepes translate scanned Chinese legal documents?", "Yes. Stepes can support scanned legal documents and PDFs as well as editable Word, Excel, PowerPoint, and other common file formats. The workflow may include file preparation, text extraction, translation, formatting, and final document QA depending on the quality and complexity of the source files."],
  ["Does Stepes provide Mandarin and Cantonese legal interpreting?", "Yes. Stepes can provide Mandarin and Cantonese interpreting for appropriate legal meetings, interviews, depositions, investigations, conferences, and other professional settings. The language, interpreter qualifications, delivery mode, and other requirements should be determined according to the participants and setting. Formal court or regulated interpreting may require specific credentials or approvals."],
];

function FAQItem({ q, a, open, onToggle, index }) {
  const panelId = `chinese-legal-faq-${index}`;
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle} aria-expanded={open} aria-controls={panelId}>
        <span>{q}</span><Chevron open={open} />
      </button>
      {open && <div className="faq-answer" id={panelId}><p>{a}</p></div>}
    </div>
  );
}

export default function ChineseLegalTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --ink:${COLORS.ink}; --text:${COLORS.text}; --muted:${COLORS.muted}; --line:${COLORS.line}; --soft:${COLORS.soft}; --blush:${COLORS.blush}; --magenta:${COLORS.magenta}; --magenta-dark:${COLORS.magentaDark}; --burgundy:${COLORS.burgundy}; --dark:${COLORS.dark}; --dark2:${COLORS.dark2}; --light-magenta:${COLORS.lightMagenta}; --white:${COLORS.white};
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        .stepes-page{font-family:"Inter Tight",Inter,Arial,sans-serif;color:var(--text);background:#fff;line-height:1.58;overflow-x:hidden;overflow-wrap:break-word}
        .stepes-page a{color:inherit}
        .shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section-dense{padding:80px 0}
        .section-soft{background:var(--soft)}
        .section-blush{background:var(--blush)}
        .section-dark{background:var(--dark);color:#fff}
        .section-dark2{background:var(--dark2);color:#fff}
        .eyebrow{font-size:11px!important;line-height:1.3!important;font-weight:600!important;letter-spacing:.16em!important;text-transform:uppercase;color:var(--magenta)!important;margin:0 0 14px!important}
        .eyebrow-dark{color:var(--light-magenta)!important}
        h1,h2,h3{font-weight:600;color:var(--ink);margin:0}
        .section-dark h2,.section-dark h3,.section-dark2 h2,.section-dark2 h3{color:#fff}
        h1{font-size:48px;line-height:1.04;letter-spacing:-.034em}
        h2{font-size:36px;line-height:1.12;letter-spacing:-.024em}
        h3{font-size:24px;line-height:1.2;letter-spacing:-.014em}
        p{margin:0 0 18px;font-size:16px;line-height:1.68}
        .lead{font-size:18px;line-height:1.65;max-width:800px;color:#505050}
        .section-dark .lead,.section-dark2 .lead{color:#D9D6D9}
        .heading-group{max-width:820px;margin-bottom:48px}
        .heading-group.center{margin-left:auto;margin-right:auto;text-align:center}
        .heading-group.center .lead{margin-left:auto;margin-right:auto}
        .heading-group h2{margin-bottom:18px}
        .btn-row{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}
        .btn{min-height:50px;padding:0 22px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;gap:10px;text-decoration:none;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent}
        .btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:var(--magenta);color:#fff!important}
        .btn-primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
        .btn-primary svg,.btn-primary span{color:#fff!important;stroke:#fff!important}
        .btn-secondary{background:#fff;border-color:#D8D8D8;color:#1f1f1f}
        .btn-secondary:hover{border-color:#9D9D9D;transform:translateY(-1px)}
        .text-link{display:inline-flex;align-items:center;gap:7px;text-decoration:none;color:var(--magenta)!important;font-weight:600;font-size:16px;min-height:44px;max-width:100%}.text-link span{min-width:0;overflow-wrap:anywhere}
        .text-link svg{transition:transform .2s ease}.text-link:hover svg{transform:translateX(3px)}
        .text-link-dark{color:var(--light-magenta)!important}
        .btn:focus-visible,.text-link:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:4px}
        .section-dark .text-link:focus-visible,.section-dark2 .text-link:focus-visible{outline-color:rgba(242,167,198,.5)}
        .hero{padding:100px 0 92px;background:linear-gradient(180deg,#fff 0%,#fff 64%,#FAFAFA 100%)}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.03fr) minmax(420px,.97fr);align-items:center;gap:58px}
        .hero-copy{max-width:720px}
        .hero-copy h1{max-width:660px}
        .hero-copy .lead{margin-top:24px;max-width:690px}
        .hero-art{min-height:500px;display:flex;align-items:center;justify-content:center;overflow:hidden}
        .hero-art svg{display:block;width:100%;height:auto;overflow:hidden}
        .relevance-bar{background:#fff;border-bottom:1px solid var(--line)}
        .relevance-grid{display:grid;grid-template-columns:repeat(4,1fr)}
        .relevance-item{padding:28px 24px;border-right:1px solid var(--line)}
        .relevance-item:first-child{padding-left:0}.relevance-item:last-child{border-right:0;padding-right:0}
        .relevance-item strong{display:block;font-size:18px;color:var(--ink);font-weight:600;margin-bottom:5px}
        .relevance-item span{font-size:16px;color:var(--muted)}
        .overview-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:80px;align-items:start}
        .overview-sticky{position:sticky;top:24px}
        .overview-list{border-top:1px solid var(--line)}
        .overview-row{display:grid;grid-template-columns:46px 1fr;gap:20px;padding:28px 0;border-bottom:1px solid var(--line)}
        .overview-row .icon-shell{width:42px;height:42px;border-radius:14px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center}
        .overview-row h3{margin-bottom:8px}
        .markets-wrap{border:1px solid var(--line);border-radius:30px;overflow:hidden;background:#fff}
        .markets-grid{display:grid;grid-template-columns:repeat(2,1fr)}
        .market{padding:38px;min-height:305px;position:relative}
        .market:nth-child(odd){border-right:1px solid var(--line)}
        .market:nth-child(-n+2){border-bottom:1px solid var(--line)}
        .market-kicker{font-size:16px;font-weight:600;color:var(--magenta);margin-bottom:14px}
        .market h3{margin-bottom:12px}
        .market p{color:#555}
        .market-script{position:absolute;right:28px;top:24px;font-size:50px;font-weight:600;color:#EDEDED;line-height:1}
        .market-note{padding:24px 38px;background:var(--blush);font-size:17px;border-top:1px solid #F2DCE7}
        .direction-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#423F43;border:1px solid #423F43;border-radius:30px;overflow:hidden;margin-top:42px}
        .direction-panel{background:var(--dark2);padding:44px}
        .direction-label{display:flex;align-items:center;gap:12px;color:var(--light-magenta);font-weight:600;margin-bottom:18px}
        .direction-panel h3{font-size:28px;margin-bottom:14px}
        .direction-panel p,.direction-panel li{color:#DAD7DA}
        .compact-list{list-style:none;padding:0;margin:22px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:10px 22px}
        .compact-list li{display:flex;gap:9px;align-items:flex-start;font-size:16px;line-height:1.48}
        .compact-list li::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--light-magenta);margin-top:.56em;flex:0 0 6px}
        .audience-strip{margin-top:1px;padding:24px 44px;background:#211F22;border-radius:0 0 28px 28px;color:#CFCBCF;font-size:16px}
        .docs-list{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:28px;overflow:hidden}
        .doc-block{padding:38px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .doc-block h3{margin-bottom:12px}.doc-block p{color:#595959}
        .doc-items{columns:2;column-gap:26px;padding:0;margin:18px 0 14px;list-style:none}
        .doc-items li{break-inside:avoid;position:relative;padding-left:15px;margin:0 0 8px;font-size:16px}
        .doc-items li::before{content:"";position:absolute;left:0;top:.68em;width:5px;height:5px;border-radius:50%;background:#BABABA}
        .contract-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:72px;align-items:start}
        .family-line{background:#fff;border:1px solid var(--line);border-radius:28px;padding:34px}
        .family-chain{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:28px}
        .family-chip{padding:11px 15px;border-radius:999px;background:#F3F3F3;font-size:16px;font-weight:600;color:#3B3B3B}
        .family-arrow{color:#AAA;font-size:18px}
        .contract-rows{border-top:1px solid var(--line)}
        .contract-row{padding:24px 0;border-bottom:1px solid var(--line)}
        .contract-row h3{font-size:21px;margin-bottom:7px}
        .workflow-3{display:grid;grid-template-columns:repeat(3,1fr);margin-top:42px;border:1px solid var(--line);border-radius:28px;overflow:hidden}
        .workflow-step{padding:36px;position:relative;background:#fff}
        .workflow-step:not(:last-child){border-right:1px solid var(--line)}
        .step-number{font-size:14px;font-weight:600;color:var(--magenta);margin-bottom:18px}
        .workflow-step h3{margin-bottom:12px}
        .workflow-step p{color:#595959}
        .litigation-types{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
        .quiet-chip{padding:9px 13px;background:#F3F3F3;border-radius:999px;font-size:16px;color:#555}
        .term-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:64px;align-items:center}
        .term-interface{border:1px solid #4A474B;border-radius:28px;background:#242124;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.2)}
        .term-top{padding:18px 22px;border-bottom:1px solid #454145;display:flex;align-items:center;justify-content:space-between;color:#D7D3D7;font-size:14px}
        .term-status{display:flex;align-items:center;gap:8px}.term-status::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--light-magenta)}
        .term-row{display:grid;grid-template-columns:1fr 1fr;padding:22px;border-bottom:1px solid #403D41;gap:24px}
        .term-row:last-child{border-bottom:0}
        .term-row small{display:block;font-size:13px;color:#9E999E;margin-bottom:7px;text-transform:uppercase;letter-spacing:.08em}
        .term-row strong{font-size:17px;font-weight:600;color:#fff}.term-row .cn{font-family:Arial,"Microsoft YaHei",sans-serif}
        .term-demo-note{padding:14px 22px 16px;color:#C8C3C8;font-size:16px;line-height:1.55;border-top:1px solid #403D41}
        .term-copy h2{margin-bottom:18px}.term-copy .lead{margin-bottom:24px}
        .term-points{border-top:1px solid #454145}
        .term-point{padding:20px 0;border-bottom:1px solid #454145}.term-point h3{font-size:20px;margin-bottom:5px}.term-point p{color:#D0CDD0}
        .integrity-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:72px;align-items:center}
        .integrity-list{border-top:1px solid var(--line)}
        .integrity-row{display:grid;grid-template-columns:18px 1fr;gap:16px;padding:22px 0;border-bottom:1px solid var(--line)}
        .integrity-rule{width:18px;height:3px;border-radius:999px;background:var(--magenta);margin-top:12px}
        .integrity-row h3{font-size:20px;margin-bottom:6px}
        .integrity-visual{border-radius:30px;background:#F5F5F5;padding:38px;min-height:470px;position:relative;overflow:hidden}
        .doc-sheet{background:white;border:1px solid #D9D9D9;border-radius:18px;padding:28px;width:78%;box-shadow:0 18px 45px rgba(0,0,0,.08)}
        .doc-sheet.second{position:absolute;right:30px;bottom:24px;width:66%;transform:rotate(3deg)}
        .doc-line{height:8px;background:#D6D6D6;border-radius:4px;margin-bottom:12px}.doc-line.dark{background:#7D7D7D}.doc-line.mag{background:#E9B5CC}.doc-line.w80{width:80%}.doc-line.w64{width:64%}.doc-line.w42{width:42%}
        .ai-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:70px;align-items:start}
        .ai-stages{border-top:1px solid var(--line)}
        .ai-stage{display:grid;grid-template-columns:56px 1fr;gap:20px;padding:26px 0;border-bottom:1px solid var(--line)}
        .ai-num{font-size:17px;font-weight:600;color:var(--magenta)}
        .ai-stage h3{font-size:21px;margin-bottom:6px}
        .ai-note{margin-top:22px;padding:20px 22px;border-left:3px solid var(--magenta);background:var(--blush);font-size:16px}
        .qa-wrap{margin-top:44px;border-top:1px solid #474447}
        .qa-row{display:grid;grid-template-columns:74px .5fr 1fr;gap:28px;align-items:start;padding:28px 0;border-bottom:1px solid #474447}
        .qa-index{font-size:15px;font-weight:600;color:var(--light-magenta)}
        .qa-row h3{font-size:21px}.qa-row p{color:#D2CFD2;margin:0}
        .security-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:70px;align-items:start}
        .security-matrix{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:28px;overflow:hidden}
        .security-cell{padding:30px;background:#fff;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .security-cell:nth-child(even){border-right:0}.security-cell:nth-last-child(-n+2){border-bottom:0}
        .security-cell .icon-shell{width:42px;height:42px;border-radius:14px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center;margin-bottom:18px}
        .security-cell h3{font-size:20px;margin-bottom:8px}
        .sensitive-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}.sensitive-list span{padding:8px 11px;border:1px solid var(--line);border-radius:999px;background:#fff;font-size:16px}
        .legal-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:40px}
        .team-panel{border:1px solid var(--line);border-radius:28px;padding:38px;background:#fff}
        .team-panel h3{font-size:28px;margin-bottom:12px}.team-panel ul{padding-left:18px;columns:2;column-gap:24px}.team-panel li{font-size:16px;margin:0 0 8px;break-inside:avoid}
        .enterprise-band{margin-top:28px;padding:28px 32px;border-radius:24px;background:var(--blush);display:grid;grid-template-columns:repeat(5,1fr);gap:18px}
        .enterprise-band span{font-size:16px;font-weight:600;color:#4B4146;text-align:center}
        .cert-grid{display:grid;grid-template-columns:.92fr 1.08fr;gap:72px;align-items:start}
        .definition-stack{border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .definition{padding:30px}.definition + .definition{border-top:1px solid var(--line)}
        .definition b{display:block;color:var(--magenta);font-size:16px;margin-bottom:7px}.definition p{margin:0}
        .caution{margin-top:20px;padding:20px 22px;background:var(--blush);border-radius:20px;font-size:16px}
        .related-special{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .related-special-panel{border-radius:28px;padding:36px;background:#fff;border:1px solid var(--line)}
        .related-special-panel h3{font-size:27px;margin-bottom:12px}.related-special-panel p{color:#575757}
        .service-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .service-card{padding:32px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:240px;display:flex;flex-direction:column;justify-content:space-between}
        .service-card:nth-child(3n){border-right:0}.service-card:nth-last-child(-n+3){border-bottom:0}
        .service-card h3{font-size:21px;margin-bottom:10px}.service-card p{color:#5B5B5B}
        .planning-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:72px;align-items:start}
        .planning-list{border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .planning-row{display:grid;grid-template-columns:18px 1fr;gap:16px;padding:22px 24px;border-bottom:1px solid var(--line)}
        .planning-row:last-child{border-bottom:0}.planning-marker{width:8px;height:8px;border-radius:50%;background:var(--magenta);margin-top:10px}
        .planning-row h3{font-size:19px;margin-bottom:4px}.planning-row p{margin:0;color:#5E5E5E}
        .planning-cta{margin-top:26px}
        .faq-panel{border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .faq-item + .faq-item{border-top:1px solid var(--line)}
        .faq-question{width:100%;border:0;background:#fff;padding:25px 28px;display:flex;justify-content:space-between;gap:24px;align-items:center;text-align:left;font:inherit;color:var(--ink);font-size:18px;font-weight:600;cursor:pointer;min-height:72px}.faq-question span{min-width:0;overflow-wrap:anywhere}
        .faq-question:focus-visible{outline:3px solid rgba(193,29,99,.25);outline-offset:-3px}
        .faq-answer{padding:0 28px 25px;max-width:900px}.faq-answer p{font-size:16px;margin:0;color:#555}
        .legal-note{margin-top:32px;padding:22px 26px;border-radius:20px;background:#F6F6F6;color:#5C5C5C;font-size:16px;line-height:1.65}
        .final-cta{padding:88px 0;background:linear-gradient(135deg,#FDF2F7 0%,#FFFFFF 74%);border-top:1px solid #F1DDE6}
        .final-box{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center}
        .final-copy{max-width:820px}.final-copy h2{margin-bottom:16px}.final-copy p{font-size:18px;color:#545454;margin:0}
        .final-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
        @media (max-width:1100px){
          .shell{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:1fr .86fr;gap:36px}.hero-art{min-height:420px}
          .overview-grid,.term-grid,.integrity-grid,.ai-grid,.security-grid,.cert-grid,.planning-grid{gap:48px}
          .enterprise-band{grid-template-columns:repeat(3,1fr)}
          .service-card{min-height:260px}
        }
        @media (max-width:860px){
          .shell{padding-left:24px;padding-right:24px}
          .section{padding:80px 0}.section-dense{padding:72px 0}.hero{padding:88px 0 78px}
          h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}
          .hero-grid{grid-template-columns:1fr}.hero-copy{max-width:780px;margin:0 auto;text-align:center}.hero-copy h1,.hero-copy .lead{margin-left:auto;margin-right:auto}.hero-copy .btn-row{justify-content:center}.hero-art{min-height:0;max-width:660px;margin:0 auto}
          .relevance-grid{grid-template-columns:1fr 1fr}.relevance-item:nth-child(2){border-right:0}.relevance-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .overview-grid,.contract-grid,.term-grid,.integrity-grid,.ai-grid,.security-grid,.cert-grid,.planning-grid{grid-template-columns:1fr}.overview-sticky{position:static}.overview-grid .heading-group,.contract-grid .heading-group,.term-copy,.integrity-grid .heading-group,.ai-grid .heading-group,.security-grid .heading-group,.cert-grid .heading-group,.planning-grid .heading-group{max-width:760px}
          .markets-grid{grid-template-columns:1fr}.market{border-right:0!important;border-bottom:1px solid var(--line)!important}.market:last-child{border-bottom:0!important}
          .direction-grid{grid-template-columns:1fr}.direction-panel:first-child{border-bottom:1px solid #423F43}
          .docs-list{grid-template-columns:1fr}.doc-block{border-right:0}
          .workflow-3{grid-template-columns:1fr}.workflow-step:not(:last-child){border-right:0;border-bottom:1px solid var(--line)}
          .qa-row{grid-template-columns:58px .55fr 1fr;gap:18px}
          .legal-team-grid,.related-special{grid-template-columns:1fr}
          .enterprise-band{grid-template-columns:1fr 1fr}
          .service-grid{grid-template-columns:1fr 1fr}.service-card:nth-child(3n){border-right:1px solid var(--line)}.service-card:nth-child(2n){border-right:0}.service-card:nth-last-child(-n+3){border-bottom:1px solid var(--line)}.service-card:nth-last-child(-n+2){border-bottom:0}
          .final-box{grid-template-columns:1fr}.final-actions{justify-content:flex-start}
        }
        @media (max-width:600px){
          .shell{padding-left:20px;padding-right:20px}
          .section{padding:68px 0}.section-dense{padding:64px 0}.hero{padding:72px 0 64px}
          h1{font-size:38px;line-height:1.06}h2{font-size:30px}h3{font-size:20px}.lead{font-size:18px}
          .heading-group{margin-bottom:34px}.heading-group.mobile-center{text-align:center;margin-left:auto;margin-right:auto}.heading-group.mobile-center .lead{margin-left:auto;margin-right:auto}.heading-group.mobile-left{ text-align:left!important; margin-left:0!important; margin-right:0!important}.heading-group.mobile-left .lead{margin-left:0!important;margin-right:0!important}
          .hero-copy{text-align:center}.hero-copy h1,.hero-copy .lead{margin-left:auto;margin-right:auto}.hero-copy .btn-row{justify-content:center}
          .hero-art{margin-top:8px}.hero-art svg{max-height:420px}
          .btn-row{flex-direction:column}.btn{width:100%;min-height:52px}
          .relevance-grid{grid-template-columns:1fr}.relevance-item,.relevance-item:first-child,.relevance-item:last-child{padding:20px 0;border-right:0;border-bottom:1px solid var(--line)}.relevance-item:last-child{border-bottom:0}
          .overview-grid{gap:34px}.overview-sticky{text-align:left}.overview-sticky .lead{margin-left:0;margin-right:0}.overview-row{grid-template-columns:42px 1fr;gap:14px}.overview-row h3,.overview-row p{text-align:left}
          .markets-wrap{border-radius:24px}.market{padding:28px 24px;min-height:auto}.market-script{font-size:42px;right:20px;top:18px}.market-note{padding:20px 24px;text-align:left}
          .direction-grid{border-radius:24px}.direction-panel{padding:28px 24px}.direction-panel h3{font-size:24px}.direction-label{flex-wrap:wrap}.compact-list{grid-template-columns:1fr}.audience-strip{padding:20px 24px}
          .docs-list{border-radius:24px}.doc-block{padding:28px 24px}.doc-items{columns:1}
          .family-line{padding:26px 22px}.family-chain{gap:7px}.family-chip{font-size:16px;padding:9px 12px}.contract-grid{gap:34px}
          .workflow-3{border-radius:24px}.workflow-step{padding:28px 24px}.litigation-types{gap:8px}.quiet-chip{font-size:16px}
          .term-grid{gap:34px}.term-copy{text-align:left}.term-copy .lead{margin-left:0;margin-right:0}.term-copy .term-points{text-align:left}.term-interface{border-radius:22px}.term-row{grid-template-columns:1fr;padding:18px;gap:15px}.term-top{padding:16px 18px;gap:10px;flex-wrap:wrap;align-items:flex-start}
          .integrity-grid{gap:34px}.integrity-grid .heading-group{text-align:left}.integrity-grid .heading-group .lead{margin-left:0;margin-right:0}.integrity-list{text-align:left}.integrity-visual{min-height:380px;padding:24px}.doc-sheet{width:90%;padding:22px}.doc-sheet.second{width:78%;right:16px;bottom:18px}
          .ai-grid{gap:34px}.ai-grid .heading-group{text-align:left}.ai-grid .heading-group .lead{margin-left:0;margin-right:0}.ai-stages{text-align:left}.ai-stage{grid-template-columns:44px 1fr;gap:12px}
          .qa-row{grid-template-columns:38px 1fr;gap:14px}.qa-row p{grid-column:2}.qa-row h3{font-size:20px}
          .security-grid{gap:34px}.security-grid .heading-group{text-align:left}.security-grid .heading-group .lead{margin-left:0;margin-right:0}.sensitive-list{justify-content:flex-start}.security-matrix{grid-template-columns:1fr}.security-cell{border-right:0!important;border-bottom:1px solid var(--line)!important}.security-cell:last-child{border-bottom:0!important}
          .legal-team-grid{gap:18px}.team-panel{padding:28px 24px}.team-panel h3{font-size:24px}.team-panel ul{columns:1}.enterprise-band{grid-template-columns:1fr;padding:22px 24px}.enterprise-band span{text-align:left;padding:5px 0}
          .cert-grid{gap:34px}.cert-grid .heading-group{text-align:left}.cert-grid .heading-group .lead{margin-left:0;margin-right:0}.definition-stack{text-align:left}.definition{padding:24px}
          .related-special-panel{padding:28px 24px}.related-special-panel h3{font-size:24px}
          .service-grid{grid-template-columns:1fr}.service-card,.service-card:nth-child(3n),.service-card:nth-child(2n),.service-card:nth-last-child(-n+3),.service-card:nth-last-child(-n+2){border-right:0;border-bottom:1px solid var(--line);min-height:auto}.service-card:last-child{border-bottom:0}.service-card{padding:28px 24px}
          .planning-grid{gap:34px}.planning-grid .heading-group{text-align:left}.planning-grid .heading-group .lead{margin-left:0;margin-right:0}.planning-row{padding:20px}.planning-row h3,.planning-row p{text-align:left}
          .faq-question{padding:22px 20px;font-size:17px}.faq-answer{padding:0 20px 22px}.legal-note{font-size:16px;padding:20px}
          .final-cta{padding:72px 0}.final-box{text-align:center;gap:28px}.final-copy p{font-size:18px}.final-actions{justify-content:center;width:100%}.final-actions .btn{width:100%}
        }
        @media (max-width:340px){
          .shell{padding-left:20px;padding-right:20px}.market-script{display:none}.family-arrow{display:none}.enterprise-band{grid-template-columns:1fr}
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Chinese Legal Translation Services</h1>
              <p className="lead">Professional English-to-Chinese and Chinese-to-English legal translation for contracts, corporate records, litigation materials, compliance documents, investigations, and other business-critical legal content.</p>
              <p>Stepes combines qualified Chinese legal translators, market-specific terminology, controlled language assets, secure workflows, and risk-appropriate AI and human review to help law firms and corporate legal teams manage cross-border legal content across Chinese-speaking markets.</p>
              <div className="btn-row">
                <Button href={LINKS.quote}>Get a Quote</Button>
                <Button href={LINKS.contact} secondary>Talk to a Legal Translation Expert</Button>
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className="relevance-bar" aria-label="Chinese legal translation focus">
          <div className="shell relevance-grid">
            <div className="relevance-item"><strong>Language Direction</strong><span>English-to-Chinese and Chinese-to-English</span></div>
            <div className="relevance-item"><strong>Chinese Locale</strong><span>Mainland China, Taiwan, Hong Kong, and international audiences</span></div>
            <div className="relevance-item"><strong>Legal Context</strong><span>Contracts, disputes, corporate, compliance, and formal documents</span></div>
            <div className="relevance-item"><strong>Workflow Control</strong><span>AI-assisted review through higher-control human workflows</span></div>
          </div>
        </section>

        <section className="section" id="why-chinese-legal-expertise">
          <div className="shell overview-grid">
            <div className="overview-sticky">
              <Eyebrow>Why Chinese Legal Expertise Matters</Eyebrow>
              <h2>Chinese Legal Translation Across Languages, Legal Systems, and Markets</h2>
              <p className="lead" style={{marginTop:18}}>Legal translation between English and Chinese involves more than replacing words in one language with their closest equivalents in another.</p>
              <TextLink href={LINKS.legal}>Legal Translation Services</TextLink>
            </div>
            <div className="overview-list">
              <div className="overview-row">
                <div className="icon-shell"><LineIcon type="document" /></div>
                <div><h3>Legal Concepts Do Not Always Map One-to-One</h3><p>Contracts, court records, corporate documents, regulatory materials, and legal correspondence are created within specific legal, institutional, and commercial contexts. Professional Chinese legal translators must preserve the source meaning without introducing interpretations or apparent legal equivalents that the source does not support.</p></div>
              </div>
              <div className="overview-row">
                <div className="icon-shell"><LineIcon type="terms" /></div>
                <div><h3>Legal Context Determines Terminology</h3><p>The same English or Chinese term may require different treatment depending on whether it appears in a commercial agreement, court document, internal investigation, employment matter, corporate record, or regulatory communication. Stepes assigns linguists based on both the language pair and legal subject matter.</p></div>
              </div>
              <div className="overview-row">
                <div className="icon-shell"><LineIcon type="globe" /></div>
                <div><h3>The Target Market Matters</h3><p>Chinese is not one uniform legal-language requirement. Mainland China, Taiwan, Hong Kong, Singapore, and Chinese-speaking audiences in other countries use different written conventions, institutional vocabulary, and market-specific terminology.</p></div>
              </div>
              <div className="overview-row">
                <div className="icon-shell"><LineIcon type="shield" /></div>
                <div><h3>Intended Use Determines the Workflow</h3><p>A Chinese document translated for initial attorney review may not require the same process as an agreement being negotiated with a counterparty or a document prepared for formal submission. Stepes matches translation controls to purpose, risk, confidentiality, deadline, and required level of review.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="chinese-markets">
          <div className="shell">
            <div className="heading-group center mobile-center">
              <Eyebrow>Chinese Markets</Eyebrow>
              <h2>Simplified and Traditional Chinese Legal Translation</h2>
              <p className="lead">Stepes provides professional legal translation for major Chinese-language markets and assigns linguists according to the intended audience, not simply the writing system.</p>
            </div>
            <div className="markets-wrap">
              <div className="markets-grid">
                <article className="market">
                  <div className="market-script">简</div>
                  <div className="market-kicker">MAINLAND CHINA</div>
                  <h3>Simplified Chinese for Mainland Legal and Business Content</h3>
                  <p>Legal documents intended for Mainland China generally require Simplified Chinese localized for Mainland terminology and institutional usage. Stepes supports contracts, corporate records, compliance documents, business agreements, employment materials, regulatory correspondence, and other legal content used by organizations operating in or working with Mainland China.</p>
                </article>
                <article className="market">
                  <div className="market-script">繁</div>
                  <div className="market-kicker">TAIWAN</div>
                  <h3>Traditional Chinese with Taiwan-Specific Legal Terminology</h3>
                  <p>Taiwan uses Traditional Chinese, but Taiwan legal and business terminology should not be created simply by converting Simplified Chinese characters. Stepes uses qualified Traditional Chinese linguists familiar with Taiwan legal and business usage for content requiring Taiwan-specific institutional language and writing conventions.</p>
                </article>
                <article className="market">
                  <div className="market-script">港</div>
                  <div className="market-kicker">HONG KONG</div>
                  <h3>Traditional Chinese for the Hong Kong Legal and Business Environment</h3>
                  <p>Hong Kong uses Traditional Chinese for formal written communication, but its legal, financial, governmental, and institutional terminology can differ from both Mainland China and Taiwan. Stepes localizes Hong Kong legal content for the appropriate context rather than treating Traditional Chinese as one universal version.</p>
                </article>
                <article className="market">
                  <div className="market-script">中</div>
                  <div className="market-kicker">SINGAPORE & INTERNATIONAL</div>
                  <h3>Audience-Led Chinese Legal Translation</h3>
                  <p>Singapore commonly uses Simplified Chinese within a multilingual environment, while organizations in the United States and other international markets may require Simplified Chinese, Traditional Chinese, or both depending on their audiences. Stepes helps clients determine the appropriate locale based on the document, recipient, market, and intended use.</p>
                </article>
              </div>
              <div className="market-note"><strong>Script conversion is not complete legal localization.</strong> Automated character conversion does not reliably resolve regional legal terminology, institutional vocabulary, corporate naming conventions, or market-specific usage.</div>
            </div>
            <div style={{marginTop:20}}><TextLink href={LINKS.chinese}>Chinese Translation Services</TextLink></div>
          </div>
        </section>

        <section className="section section-dark" id="translation-direction">
          <div className="shell">
            <div className="heading-group center mobile-center">
              <Eyebrow dark>Two Directions. Different Needs.</Eyebrow>
              <h2>English-to-Chinese and Chinese-to-English Legal Translation</h2>
              <p className="lead">Legal translation requirements often differ significantly depending on the direction of translation. Stepes supports both directions with linguists, terminology, and review processes selected for the destination audience.</p>
            </div>
            <div className="direction-grid">
              <article className="direction-panel">
                <div className="direction-label"><ArrowIcon /> ENGLISH → CHINESE</div>
                <h3>Legal Content for Chinese-Speaking Stakeholders</h3>
                <p>Global businesses, law firms, and corporate legal departments frequently need English legal content translated for Chinese-speaking counterparties, employees, subsidiaries, regulators, or business partners.</p>
                <ul className="compact-list">
                  {['Commercial agreements and contracts','Non-disclosure agreements','Corporate governance materials','Policies and compliance documents','Employment agreements and workplace notices','Transaction and due-diligence materials','Licensing and distribution agreements','Legal correspondence','Internal investigation materials','Privacy and data-related legal documents'].map(x=><li key={x}>{x}</li>)}
                </ul>
                <p style={{marginTop:22}}>Stepes determines the appropriate Chinese locale before translation begins and maintains defined terms, entity names, recurring clauses, and approved legal language across related documents.</p>
              </article>
              <article className="direction-panel">
                <div className="direction-label"><ArrowIcon /> CHINESE → ENGLISH</div>
                <h3>Reliable Access to Chinese-Origin Legal Documents</h3>
                <p>Chinese-origin documents are increasingly important to English-speaking legal teams handling cross-border transactions, litigation, investigations, compliance reviews, supplier matters, and corporate operations.</p>
                <ul className="compact-list">
                  {['Chinese contracts','Corporate records','Legal correspondence','Court and dispute materials','Regulatory documents','Financial records','Business communications','Investigation files','Due-diligence documents','Supporting evidence'].map(x=><li key={x}>{x}</li>)}
                </ul>
                <p style={{marginTop:22}}>Our Chinese-to-English translators preserve the meaning, qualifications, structure, and legal context of the original document rather than rewriting it into what an English-language document might have said.</p>
              </article>
            </div>
            <div className="audience-strip"><strong style={{color:'#fff'}}>Common users:</strong> in-house counsel, outside counsel, litigation teams, compliance professionals, investigators, transaction teams, executives, and regulatory or corporate stakeholders.</div>
          </div>
        </section>

        <section className="section" id="legal-documents">
          <div className="shell">
            <div className="heading-group center mobile-center">
              <h2>Chinese Legal Documents We Translate</h2>
              <p className="lead">Stepes supports Chinese legal translation across commercial transactions, corporate operations, disputes, investigations, compliance, employment, and formal documentation.</p>
            </div>
            <div className="docs-list">
              {documents.map((d)=><article className="doc-block" key={d.title}>
                <h3>{d.title}</h3><p>{d.text}</p>
                <ul className="doc-items">{d.items.map(i=><li key={i}>{i}</li>)}</ul>
                {d.link && <TextLink href={d.link[1]}>{d.link[0]}</TextLink>}
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="contracts">
          <div className="shell contract-grid">
            <div className="heading-group">
              <Eyebrow>Contractual Precision</Eyebrow>
              <h2>Keep Chinese Contract Language Consistent From Clause to Clause</h2>
              <p className="lead">Contracts rarely exist as isolated documents. A commercial relationship may include a master agreement, statements of work, schedules, amendments, renewals, policies, exhibits, and related correspondence.</p>
              <p>Stepes helps legal teams maintain continuity across the entire English-Chinese document family.</p>
              <TextLink href={LINKS.contracts}>Contract Translation Services</TextLink>
            </div>
            <div className="family-line">
              <div className="family-chain" aria-label="Related contract family">
                {['MSA','SOW','Schedule','Exhibit','Amendment','Renewal'].map((x,i)=><React.Fragment key={x}><span className="family-chip">{x}</span>{i<5 && <span className="family-arrow">→</span>}</React.Fragment>)}
              </div>
              <div className="contract-rows">
                <div className="contract-row"><h3>Defined Terms</h3><p>Capture formally defined terms so approved translations remain consistent throughout the document and across related contracts.</p></div>
                <div className="contract-row"><h3>Party and Entity Names</h3><p>Control company names, subsidiaries, legal entities, individuals, departments, and product names using official bilingual names or established client references where available.</p></div>
                <div className="contract-row"><h3>Recurring Clauses</h3><p>Use translation memory to preserve validated language when commercial agreements reuse established source content across templates, subsidiaries, markets, and transactions.</p></div>
                <div className="contract-row"><h3>Schedules, Exhibits, and Amendments</h3><p>Keep terminology aligned from the main agreement through appendices, exhibits, subsequent amendments, and related documentation.</p></div>
                <div className="contract-row"><h3>Counsel-Approved Language</h3><p>Incorporate reviewed bilingual contracts, approved terminology, clause libraries, and legal-team feedback into future translation workflows.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="litigation-discovery">
          <div className="shell">
            <div className="heading-group center mobile-left">
              <Eyebrow>Disputes & Review</Eyebrow>
              <h2>Chinese Translation for Litigation, Discovery, and Investigations</h2>
              <p className="lead">Chinese-language evidence can appear throughout litigation, arbitration, internal investigations, regulatory matters, and due diligence. Legal teams may need to understand large volumes of content quickly while applying greater translation control only to the materials that become important to the matter.</p>
            </div>
            <div className="workflow-3">
              <article className="workflow-step"><div className="step-number">01</div><h3>Identify & Triage</h3><p>For large Chinese document sets, secure AI-assisted translation or rapid professional translation can help legal teams understand general content, identify potentially relevant records, and determine which materials require deeper linguistic review.</p></article>
              <article className="workflow-step"><div className="step-number">02</div><h3>Translate Priority Content</h3><p>Documents selected for substantive legal review can be professionally translated by qualified Chinese legal linguists, including evidence, contracts, witness documents, correspondence, financial records, corporate records, and expert materials.</p></article>
              <article className="workflow-step"><div className="step-number">03</div><h3>Apply Additional Controls</h3><p>For higher-consequence content, Stepes can add independent linguistic review, structured QA, document-level verification, or certification where appropriate.</p></article>
            </div>
            <div className="litigation-types">
              {['Emails & communications','Contracts','Corporate files','Financial documents','Investigation materials','Witness documents','Evidence','Expert materials'].map(x=><span className="quiet-chip" key={x}>{x}</span>)}
            </div>
            <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:22}}>
              <TextLink href={LINKS.litigation}>Litigation Translation Services</TextLink>
              <TextLink href={LINKS.ediscovery}>eDiscovery Translation Services</TextLink>
            </div>
          </div>
        </section>

        <section className="section section-dark2" id="terminology-governance">
          <div className="shell term-grid">
            <div className="term-interface" aria-label="Illustrative legal terminology governance panel">
              <div className="term-top"><span>English ↔ Chinese legal terminology</span><span className="term-status">Approved language</span></div>
              <div className="term-row"><div><small>Defined term</small><strong>Confidential Information</strong></div><div><small>Approved Chinese</small><strong className="cn">保密信息</strong></div></div>
              <div className="term-row"><div><small>Entity name</small><strong>Entity Name</strong></div><div><small>Controlled rendering</small><strong className="cn">Use official bilingual name</strong></div></div>
              <div className="term-row"><div><small>Legal concept</small><strong>Governing Law</strong></div><div><small>Approved Chinese</small><strong className="cn">适用法律</strong></div></div>
              <div className="term-row"><div><small>Reviewer feedback</small><strong>Counsel-approved clause language</strong></div><div><small>Workflow state</small><strong className="cn">用于后续文件</strong></div></div>
              <div className="term-demo-note">Illustrative terminology only. Actual legal terms are governed by document context, jurisdiction, and client-approved language.</div>
            </div>
            <div className="term-copy">
              <Eyebrow dark>Terminology Governance</Eyebrow>
              <h2>One Legal Vocabulary Across English and Chinese</h2>
              <p className="lead">Consistent legal translation depends on more than individual translator skill. Important language should be managed across documents, matters, reviewers, and time.</p>
              <div className="term-points">
                <div className="term-point"><h3>Defined Legal Terms</h3><p>Capture terminology decisions so defined terms remain consistent throughout a file and across related documents.</p></div>
                <div className="term-point"><h3>Entity Names and Proper Names</h3><p>Control corporate entities, individual names, agencies, institutions, products, departments, and transliteration conventions.</p></div>
                <div className="term-point"><h3>Counsel-Approved Language</h3><p>Use existing bilingual agreements, legal templates, glossaries, terminology decisions, and reviewer feedback as approved references.</p></div>
                <div className="term-point"><h3>Matter-Level Consistency</h3><p>Maintain continuity across contracts, evidence, correspondence, policies, exhibits, and related records.</p></div>
                <div className="term-point"><h3>Reusable Translation Memory</h3><p>Preserve validated translations when identical or closely related source content appears again, accelerating updates and reducing unnecessary variation.</p></div>
              </div>
              <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:20}}><TextLink dark href={LINKS.terminology}>Terminology Management</TextLink><TextLink dark href={LINKS.translationMemory}>Translation Memory</TextLink></div>
            </div>
          </div>
        </section>

        <section className="section" id="document-integrity">
          <div className="shell integrity-grid">
            <div>
              <div className="heading-group">
                <Eyebrow>Beyond the Words</Eyebrow>
                <h2>Preserve the Structure of Chinese Legal Documents</h2>
                <p className="lead">Legal meaning can depend on more than individual sentences. Clause numbering, cross-references, defined terms, footnotes, tables, exhibits, dates, names, signatures, and other document elements may all matter to how a legal file is reviewed and understood.</p>
              </div>
              <div className="integrity-list">
                {[['Document Structure','Maintain headings, numbering, clause relationships, tables, schedules, appendices, and other structural elements whenever the file format permits.'],['Names & Entity Information','Review Chinese names, English names, company names, entity identifiers, and recurring information for consistency throughout the document set.'],['Numbers & Dates','Apply focused QA to dates, monetary values, percentages, quantities, and other numeric information.'],['Cross-References','Check references to clauses, exhibits, schedules, sections, and related files during QA.'],['Seals, Signatures & Annotations','Identify and appropriately represent relevant source content without suggesting legal authentication or validation of the underlying document.'],['Bilingual & Production Files','Support Word, Excel, PowerPoint, PDF, scanned documents, InDesign, and other common legal and corporate file formats.']].map(([t,d])=><div className="integrity-row" key={t}><span className="integrity-rule" aria-hidden="true" /><div><h3>{t}</h3><p>{d}</p></div></div>)}
              </div>
            </div>
            <div className="integrity-visual" aria-hidden="true">
              <div className="doc-sheet">
                <div className="doc-line dark w64"></div><div className="doc-line w80"></div><div className="doc-line"></div><div className="doc-line w80"></div><div style={{height:16}}></div><div className="doc-line dark w42"></div><div className="doc-line"></div><div className="doc-line w80"></div><div className="doc-line mag w64"></div><div style={{height:18}}></div><div className="doc-line dark w42"></div><div className="doc-line w80"></div><div className="doc-line"></div><div className="doc-line w64"></div>
              </div>
              <div className="doc-sheet second">
                <div className="doc-line dark w42"></div><div className="doc-line"></div><div className="doc-line w80"></div><div className="doc-line mag w64"></div><div style={{height:16}}></div><div className="doc-line dark w64"></div><div className="doc-line"></div><div className="doc-line w80"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="ai-human-workflow">
          <div className="shell ai-grid">
            <div className="heading-group">
              <Eyebrow>Controlled AI Workflows</Eyebrow>
              <h2>AI Where It Helps. Legal-Linguist Review Where It Matters.</h2>
              <p className="lead">AI has created powerful new ways to process multilingual legal content, particularly when teams need to understand large document volumes, reuse established language, or work under demanding deadlines.</p>
              <p>But legal translation should not treat AI as the final authority. AI output can still introduce incorrect terminology, inconsistent defined terms, omitted qualifications, altered numbers, unsupported wording, or other problems that require professional review.</p>
              <div className="ai-note">The objective is not to maximize or minimize AI use. It is to apply the <strong>right combination of technology and professional human expertise for the intended use</strong>.</div>
              <div style={{marginTop:18}}><TextLink href={LINKS.aiLegal}>AI-Enabled Legal Translation Services</TextLink></div>
            </div>
            <div className="ai-stages">
              <div className="ai-stage"><div className="ai-num">01</div><div><h3>Internal Understanding & Triage</h3><p>For lower-risk review and large document collections, secure AI-assisted translation can help legal professionals understand general meaning and identify records for deeper review. Human validation can be added selectively to priority content.</p></div></div>
              <div className="ai-stage"><div className="ai-num">02</div><div><h3>AI + Chinese Legal-Linguist Validation</h3><p>Recurring or high-volume legal content may benefit from AI-assisted translation combined with professional post-editing, controlled terminology, translation memory, and structured QA.</p></div></div>
              <div className="ai-stage"><div className="ai-num">03</div><div><h3>Expert Human Legal Translation</h3><p>Material agreements, external legal communications, important transaction documents, and other higher-risk content can be assigned directly to qualified professional translators with appropriate legal subject-matter expertise.</p></div></div>
              <div className="ai-stage"><div className="ai-num">04</div><div><h3>Independent Review / Higher-Control Workflow</h3><p>Where documents carry greater legal, financial, evidentiary, or formal significance, Stepes can add independent linguistic revision, additional QA, certification, or other agreed controls.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="quality-control">
          <div className="shell">
            <div className="heading-group mobile-left">
              <h2>Quality Control at the Document Level</h2>
              <p className="lead">Stepes configures Chinese legal translation around the language direction, target market, legal subject matter, intended use, risk, deadline, and client requirements.</p>
            </div>
            <div className="qa-wrap">
              {qaSteps.map(([t,d],i)=><div className="qa-row" key={t}><div className="qa-index">{String(i+1).padStart(2,'0')}</div><h3>{t}</h3><p>{d}</p></div>)}
            </div>
            <div style={{marginTop:28,fontSize:17,color:'#E4E1E4'}}><strong style={{color:'#fff'}}>The level of control follows the purpose of the translation.</strong> A document used for initial internal understanding may follow a different path from a material contract, court submission, or other high-consequence legal record.</div>
          </div>
        </section>

        <section className="section" id="security-confidentiality">
          <div className="shell security-grid">
            <div className="heading-group">
              <Eyebrow>Secure by Design</Eyebrow>
              <h2>Protect Confidential Chinese Legal Content Throughout the Workflow</h2>
              <p className="lead">Chinese legal translation can involve commercially sensitive, privileged, personal, proprietary, or otherwise confidential information.</p>
              <p>Stepes supports controlled handling throughout project intake, assignment, translation, review, delivery, and language-asset management.</p>
              <div className="sensitive-list">
                {['Confidential contracts','Transaction plans','Corporate financial information','Litigation evidence','Investigation records','Employee information','Intellectual property','Business communications','Personal data','Internal policies'].map(x=><span key={x}>{x}</span>)}
              </div>
              <div style={{marginTop:22}}><TextLink href={LINKS.security}>Translation Security and Confidentiality</TextLink></div>
            </div>
            <div className="security-matrix">
              <div className="security-cell"><div className="icon-shell"><LineIcon type="people" /></div><h3>Controlled Project Access</h3><p>Project files are assigned only to the linguists and team members needed for the approved workflow.</p></div>
              <div className="security-cell"><div className="icon-shell"><LineIcon type="shield" /></div><h3>Confidentiality Obligations</h3><p>Professional resources are subject to applicable confidentiality requirements and client-specific project controls.</p></div>
              <div className="security-cell"><div className="icon-shell"><LineIcon type="document" /></div><h3>Secure File Handling</h3><p>Sensitive source and target files can be managed through controlled Stepes workflows rather than informal document exchange.</p></div>
              <div className="security-cell"><div className="icon-shell"><LineIcon type="terms" /></div><h3>Protected Language Assets</h3><p>Client glossaries, translation memories, reference documents, and approved terminology can be managed as program-specific resources.</p></div>
              <div className="security-cell"><div className="icon-shell"><LineIcon type="globe" /></div><h3>Client-Specific Requirements</h3><p>For sensitive matters, Stepes can review project-specific confidentiality, access, retention, or delivery expectations before work begins.</p></div>
              <div className="security-cell"><div className="icon-shell"><LineIcon type="shield" /></div><h3>Risk-Appropriate Workflow</h3><p>Security and review controls can be aligned with the legal content, intended use, language direction, and matter requirements.</p></div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="legal-teams">
          <div className="shell">
            <div className="heading-group center mobile-center">
              <h2>Chinese Legal Translation for Law Firms and In-House Counsel</h2>
              <p className="lead">Stepes supports both individual Chinese legal matters and recurring enterprise programs, giving legal professionals a scalable way to manage multilingual documents without losing terminology control or project visibility.</p>
            </div>
            <div className="legal-team-grid">
              <article className="team-panel"><h3>Law Firms</h3><p>Support cross-border matters involving Chinese-language documents across:</p><ul>{['Commercial litigation','Arbitration','Investigations','Discovery','Corporate transactions','Due diligence','Contracts','Regulatory matters','Intellectual property','Client communications'].map(x=><li key={x}>{x}</li>)}</ul><p>Stepes can scale from a single priority document to coordinated handling of large multilingual matters involving multiple files, reviewers, and deadlines.</p></article>
              <article className="team-panel"><h3>Corporate Legal Departments</h3><p>Global legal teams use Stepes to manage recurring translation across:</p><ul>{['Commercial contracting','Corporate governance','Compliance and ethics','Employment','Internal investigations','Privacy','Transactions','Regulatory communication','Policies and procedures','Cross-border operations'].map(x=><li key={x}>{x}</li>)}</ul><p>For ongoing programs, Stepes can centralize project intake, approved terminology, reviewer feedback, translation memories, project history, and delivery workflows.</p></article>
            </div>
            <div className="enterprise-band"><span>Centralized Intake</span><span>Dedicated Project Management</span><span>Reusable Approved Terminology</span><span>Reviewer Collaboration</span><span>Priority Handling</span></div>
            <div style={{marginTop:20}}><TextLink href={LINKS.legalTeams}>Solutions for Legal Teams</TextLink></div>
          </div>
        </section>

        <section className="section" id="certified-translation">
          <div className="shell cert-grid">
            <div className="heading-group">
              <Eyebrow>Formal Requirements</Eyebrow>
              <h2>Certified Chinese Legal Translations When Required</h2>
              <p className="lead">Legal translation and certified translation are related but different requirements. Not every Chinese legal translation requires certification.</p>
              <p>Stepes can prepare certified Chinese translations when requested for legal, corporate, institutional, regulatory, or other formal purposes.</p>
              <TextLink href={LINKS.certified}>Certified Translation Services</TextLink>
            </div>
            <div>
              <div className="definition-stack">
                <div className="definition"><b>LEGAL TRANSLATION</b><p>Describes the subject matter of the document and the expertise needed to translate it appropriately.</p></div>
                <div className="definition"><b>CERTIFIED TRANSLATION</b><p>Refers to a formal statement accompanying a completed translation when certification is requested or required.</p></div>
              </div>
              <div className="caution"><strong>Requirements vary.</strong> Certification, notarization, sworn translation, legalization, and acceptance requirements can differ by receiving institution, jurisdiction, and purpose. Clients should confirm applicable requirements with the receiving court, government agency, institution, or qualified legal counsel before the project begins.</div>
              <div className="litigation-types" style={{marginTop:20}}>{['Court records','Corporate documents','Powers of attorney','Official certificates','Evidence & exhibits','Personal records','Supporting legal documents'].map(x=><span className="quiet-chip" key={x}>{x}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section-dense section-blush" id="related-capabilities">
          <div className="shell related-special">
            <article className="related-special-panel">
              <Eyebrow>Specialized IP Support</Eyebrow>
              <h3>Need Chinese Patent Translation?</h3>
              <p>Patent translation requires a specialized combination of technical, linguistic, and legal expertise. Stepes provides dedicated workflows for patent applications, claims, specifications, CNIPA-related materials, PCT national-phase work, prosecution documents, prior art, and other intellectual-property content.</p>
              <TextLink href={LINKS.patent}>Chinese Patent Translation Services</TextLink>
            </article>
            <article className="related-special-panel">
              <Eyebrow>Spoken Legal Communication</Eyebrow>
              <h3>Need Mandarin or Cantonese Legal Interpreting?</h3>
              <p>Stepes can support Mandarin and Cantonese interpreting for appropriate legal meetings, interviews, depositions, investigations, hearings, conferences, and related professional settings. Court, sworn, or other regulated interpreting assignments may have specific qualification requirements that should be confirmed before scheduling.</p>
              <TextLink href={LINKS.interpreting}>Interpreting Services</TextLink>
            </article>
          </div>
        </section>

        <section className="section" id="related-services">
          <div className="shell">
            <div className="heading-group center mobile-center"><h2>Connected Chinese and Legal Translation Services</h2><p className="lead">Move naturally between the broader legal and Chinese translation pillars and the specialist services that support particular legal workflows.</p></div>
            <div className="service-grid">
              {[
                ['Legal Translation Services','Professional multilingual translation for contracts, litigation, corporate governance, compliance, employment, privacy, intellectual property, and other legal content.',LINKS.legal],
                ['Chinese Translation Services','Enterprise Simplified and Traditional Chinese translation for Mainland China, Taiwan, Hong Kong, Singapore, U.S. audiences, and Chinese-to-English requirements.',LINKS.chinese],
                ['Contract Translation Services','Controlled translation of commercial agreements, defined terms, recurring clauses, schedules, amendments, and related contract families.',LINKS.contracts],
                ['Litigation Translation Services','Translation support for discovery, evidence, depositions, court materials, arbitration, investigations, and multilingual disputes.',LINKS.litigation],
                ['eDiscovery Translation Services','Language support for high-volume legal document review, triage, priority translation, and multilingual discovery workflows.',LINKS.ediscovery],
                ['Chinese Patent Translation Services','Specialized English-Chinese patent translation for applications, claims, specifications, prosecution, CNIPA, PCT national phase, and prior art.',LINKS.patent],
              ].map(([t,d,l])=><article className="service-card" key={t}><div><h3>{t}</h3><p>{d}</p></div><TextLink href={l}>{t}</TextLink></article>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="project-planning">
          <div className="shell planning-grid">
            <div className="heading-group">
              <h2>What We Need for Your Chinese Legal Translation</h2>
              <p className="lead">A few project details help Stepes recommend the appropriate Chinese locale, legal linguists, translation workflow, review controls, and delivery approach.</p>
              <p><strong>Not sure which Chinese variant or workflow you need?</strong> Tell us where the document will be used, who will rely on it, and what you need the translation to accomplish. Stepes can recommend an appropriate approach.</p>
              <div className="planning-cta"><Button href={LINKS.quote}>Get a Quote</Button></div>
            </div>
            <div className="planning-list">
              {[
                ['Source and Target Languages','Let us know whether you need English-to-Chinese, Chinese-to-English, or another language combination.'],
                ['Target Chinese Market','Identify Mainland China, Taiwan, Hong Kong, Singapore, the United States, or another audience when known.'],
                ['Simplified or Traditional Chinese','If you already know the required Chinese variant, include it with your project instructions. If not, tell us where and how the translation will be used.'],
                ['Legal Document Type','Provide the source files and identify whether they are contracts, litigation documents, corporate records, compliance materials, investigation files, or another legal content type.'],
                ['Intended Use','Let us know whether the translation is intended for internal review, negotiation, external communication, litigation support, submission, certification, or another purpose.'],
                ['Existing Legal Language','Share previous translations, bilingual agreements, glossaries, approved terminology, entity names, style guidance, or counsel-reviewed content when available.'],
                ['Review and Certification Requirements','Tell us if your legal team will review the translation or if independent revision, certification, or another formal requirement applies.'],
                ['Deadline and Delivery Format','Provide the requested delivery date and any file-format or multilingual publishing requirements.'],
              ].map(([t,d])=><div className="planning-row" key={t}><span className="planning-marker" aria-hidden="true" /><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="shell">
            <div className="heading-group mobile-left">
              <h2>Frequently Asked Questions</h2>
              <p className="lead">Answers to common questions about Chinese legal documents, language variants, terminology, AI-assisted workflows, certification, and interpreting.</p>
            </div>
            <div className="faq-panel">
              {faqs.map(([q,a],i)=><FAQItem key={q} q={q} a={a} index={i} open={openFaq===i} onToggle={()=>setOpenFaq(openFaq===i ? -1 : i)} />)}
            </div>
            <div className="legal-note">Stepes provides professional linguistic and subject-matter translation expertise. Qualified client counsel remains responsible for interpreting applicable law, determining jurisdiction-specific requirements, and assessing legal validity, enforceability, and legal strategy.</div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-box">
            <div className="final-copy">
              <h2>Need Chinese Legal Translation Support?</h2>
              <p>From a single Chinese contract to a complex cross-border legal matter, Stepes helps law firms and corporate legal teams translate business-critical legal content with the right combination of Chinese language expertise, legal-linguist review, terminology control, translation technology, and quality assurance.</p>
            </div>
            <div className="final-actions">
              <Button href={LINKS.quote}>Get a Quote</Button>
              <Button href={LINKS.contact} secondary>Talk to a Legal Translation Expert</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
