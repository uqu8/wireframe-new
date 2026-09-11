import React, { useState } from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  legal: "https://www.stepes.com/legal-translation-services/",
  ediscovery: "https://www.stepes.com/ediscovery-translation-services/",
  court: "https://www.stepes.com/court-document-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  patent: "https://www.stepes.com/patent-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  interpreting: "https://www.stepes.com/interpretation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  security: "https://www.stepes.com/security/",
  legalTeams: "https://www.stepes.com/solutions/legal-teams/",
  languages: "https://www.stepes.com/translation-languages/"
};

const documentGroups = [
  ["Discovery and Evidence", "Emails, chat records, correspondence, contracts, business records, financial documents, databases, document productions, and other evidence identified during discovery."],
  ["Pleadings and Court Filings", "Complaints, answers, motions, briefs, petitions, declarations, supporting documents, and other materials prepared for legal review or filing."],
  ["Depositions and Witness Materials", "Deposition transcripts, witness statements, affidavits, interview records, exhibits, preparation materials, and follow-up documentation."],
  ["Expert and Technical Materials", "Expert reports, technical opinions, scientific documentation, medical records, engineering materials, testing records, calculations, and specialized evidence."],
  ["Exhibits and Supporting Evidence", "Documentary exhibits, charts, correspondence, schedules, photographs containing text, business records, and supporting case materials."],
  ["Arbitration Materials", "Requests for arbitration, submissions, memorials, witness evidence, expert reports, exhibits, procedural materials, and awards."],
  ["Judgments, Decisions, and Orders", "Judgments, rulings, orders, decisions, awards, and enforcement-related documentation for cross-border review and use."],
  ["Investigation and Pre-Litigation Materials", "Internal communications, reports, contracts, notices, claims, policies, interview records, and other documents involved in attorney-directed investigations or emerging disputes."]
];

const riskStages = [
  {
    title: "Document Screening and Triage",
    kicker: "Large document populations and early-stage review",
    body: "AI-assisted or linguist-supported translation can help counsel understand foreign-language content and identify which documents warrant additional attention.",
    bullets: ["Early case assessment", "Multilingual discovery screening", "Preliminary document comprehension", "Language identification", "Large-volume evidence review", "Initial relevance prioritization"]
  },
  {
    title: "Summary or Selected-Passage Translation",
    kicker: "Potentially relevant records needing closer review",
    body: "Translate the portions most useful to legal review without committing every document to full professional translation.",
    bullets: ["Executive or document summaries", "Selected contract clauses", "Key email threads", "Relevant technical passages", "Individual claims or provisions", "Sections identified by counsel"]
  },
  {
    title: "Expert Human Translation",
    kicker: "Decision-critical litigation content",
    body: "Experienced professional linguists handle content where legal context, terminology, factual detail, nuance, or specialized subject matter can affect how a document is understood.",
    bullets: ["Key evidence", "Deposition transcripts", "Witness statements", "Expert reports", "Material contracts", "Significant exhibits", "Pleadings and submissions", "Technical or scientific records"]
  },
  {
    title: "Independent Review or Certification",
    kicker: "Higher-consequence or formal-use documents",
    body: "Add independent linguistic review, terminology verification, source-to-target completeness checks, document QA, or certification when the agreed requirements call for it.",
    bullets: ["Second-linguist review", "Terminology verification", "Completeness checks", "Document QA", "Certification when requested"]
  }
];

const matterTypes = [
  ["Commercial and Contract Disputes", "Agreements, amendments, correspondence, financial records, notices, business communications, and other evidence involved in commercial disagreements."],
  ["Patent and Intellectual Property Litigation", "Patents, prior art, claim charts, technical documents, licensing records, expert evidence, and other materials involved in patent and IP disputes."],
  ["Employment Litigation", "Employment agreements, workplace communications, policies, investigation records, personnel documentation, and other materials relevant to employment disputes."],
  ["Insurance and Financial Disputes", "Policies, claims records, financial statements, transaction records, correspondence, expert materials, and related documentation."],
  ["Product Liability and Technical Disputes", "Product documentation, engineering records, testing results, safety information, manufacturing materials, medical records, and expert evidence."],
  ["Cross-Border Litigation", "Evidence and case materials across multiple source and target languages for disputes involving parties, records, witnesses, or proceedings in different countries."],
  ["Internal and Regulatory Investigations", "Attorney-directed review of multilingual communications, reports, policies, records, interviews, and other investigative materials."],
  ["International Arbitration", "Submissions, evidence, witnesses, experts, contracts, exhibits, procedural materials, and awards in multilingual arbitration matters."]
];

const relatedServices = [
  ["Legal Translation Services", "Professional translation for contracts, compliance, corporate law, litigation, intellectual property, governance, privacy, investigations, and other legal content.", "Explore Legal Translation", LINKS.legal],
  ["eDiscovery Translation Services", "Multilingual document screening, discovery translation, foreign-language evidence review, and high-volume document workflows.", "Explore eDiscovery Translation", LINKS.ediscovery],
  ["Court Document Translation Services", "Translation of pleadings, affidavits, judgments, exhibits, filings, and other documents prepared for court and official legal use.", "Explore Court Document Translation", LINKS.court],
  ["Certified Translation Services", "Certified translations and supporting certification documentation for litigation, court, and other formal-use requirements.", "Explore Certified Translation", LINKS.certified],
  ["Patent Translation Services", "Technical and legal translation for patent applications, claims, specifications, prior art, prosecution materials, research, and patent litigation.", "Explore Patent Translation", LINKS.patent],
  ["Interpreting Services", "Professional real-time language support for depositions, witness interviews, attorney-client consultations, investigations, meetings, and other live communication requirements.", "Explore Interpreting Services", LINKS.interpreting]
];

const faqs = [
  ["What are litigation translation services?", "Litigation translation services provide professional translation of documents and evidence used in active, anticipated, or related legal disputes. Materials can include discovery documents, emails, contracts, deposition transcripts, witness statements, expert reports, pleadings, court exhibits, arbitration submissions, judgments, and other multilingual case records. Unlike broad legal translation, litigation translation is organized around the practical requirements of disputes, including document volume, evidentiary context, deadlines, confidentiality, terminology consistency, and different levels of review throughout the matter."],
  ["What types of litigation documents can Stepes translate?", "Stepes translates discovery materials, correspondence, contracts, financial records, pleadings, motions, briefs, deposition transcripts, witness statements, affidavits, expert reports, technical evidence, court exhibits, arbitration documents, judgments, orders, investigation materials, and other documents used in multilingual disputes. The translation workflow can be configured according to document type, intended use, subject matter, volume, and required level of review."],
  ["Can Stepes support multilingual discovery and eDiscovery?", "Yes. Stepes provides multilingual translation support for discovery and eDiscovery workflows, including language identification, AI-assisted screening, document triage, summary translation, selected-passage translation, and full professional translation of priority evidence. Stepes provides the language-services component of the workflow. Counsel and the appropriate legal or eDiscovery professionals remain responsible for relevance, responsiveness, privilege, production, and other legal determinations."],
  ["Can Stepes translate deposition transcripts and witness materials?", "Yes. Stepes translates deposition transcripts, witness statements, affidavits, exhibits, attorney preparation materials, interview records, and related documents. For live multilingual depositions, witness interviews, or other real-time conversations, Stepes can also support professional interpreting requirements separately from written translation."],
  ["When is certified translation required for litigation documents?", "Certification requirements depend on the court, tribunal, agency, jurisdiction, proceeding, and intended use of the document. Not every litigation translation requires certification. When a certified translation is requested, Stepes can provide a signed certification statement and work according to submission instructions provided by the client or counsel. Clients should confirm applicable filing and certification requirements with the receiving authority or their legal advisers."],
  ["Can Stepes translate documents for international arbitration?", "Yes. Stepes supports multilingual arbitration matters involving submissions, memorials, witness statements, expert reports, exhibits, contracts, correspondence, hearing materials, procedural documents, awards, and related records. For matters involving multiple languages, Stepes can coordinate terminology and translation workflows across the broader arbitration record."],
  ["How does Stepes handle confidential or privileged litigation materials?", "Stepes supports controlled handling of confidential litigation content through managed file workflows, authorized project access, confidentiality requirements, and secure delivery practices. For materials identified by the client or counsel as privileged, protected, or subject to specific handling requirements, Stepes can incorporate provided project instructions into the translation workflow. Counsel remains responsible for privilege determinations and legal handling requirements."],
  ["Can AI be used for litigation translation?", "Yes, when its use is appropriate for the content and project requirements. AI can be particularly useful for language identification, large-volume document screening, preliminary comprehension, terminology extraction, repetitive content, and translation QA. Materials that are decision-critical, technically complex, evidentiary, certified, or intended for formal use may require qualified professional translators and additional review. Stepes configures AI and human expertise according to the intended use, risk, volume, and quality requirements of the content."],
  ["How quickly can Stepes translate urgent litigation documents?", "Turnaround depends on the language pair, word count, file format, subject complexity, translation workflow, number of reviewers, certification or formatting requirements, and deadline. For time-sensitive matters, Stepes can evaluate parallel linguist assignments, translation memory, approved terminology, AI-assisted processing, and other workflow options to accelerate delivery while maintaining the agreed quality controls."],
  ["Can Stepes support large litigation matters involving multiple languages?", "Yes. Stepes can coordinate multilingual litigation involving large document populations, multiple target languages, recurring translation requests, specialized subject matter, and changing case requirements. Centralized project management, terminology resources, translation memory, professional language teams, AI-enabled workflows, and structured quality control help maintain continuity as the matter progresses."]
];

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 6l4 4-4 4" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4 4 10-10" /></svg>;
}

function ShieldIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-2.7 8-7 10-4.3-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>;
}

function LinkText({ href, children, light = false }) {
  return <a className={`editorial-link${light ? " light" : ""}`} href={href}>{children}<ArrowIcon /></a>;
}

function Pill({ href, children, secondary = false }) {
  return <a className={`pill${secondary ? " secondary" : ""}`} href={href}>{children}<ArrowIcon /></a>;
}

function SectionHeader({ eyebrow, title, intro, dark = false, centered = true, className = "" }) {
  return (
    <div className={`section-heading ${centered ? "centered" : "left"} ${dark ? "dark-heading" : ""} ${className}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page-shell">
      <style>{`
        :root {
          --magenta:#C11D63;
          --magenta-deep:#A71954;
          --burgundy:#7A1542;
          --pink-light:#FDF2F7;
          --pink-dark:#F2A7C6;
          --ink:#24252A;
          --ink-2:#45474F;
          --muted:#6C6F78;
          --line:#E4E5E8;
          --surface:#F6F7F8;
          --dark:#202127;
          --dark-2:#2A2C33;
          --white:#FFFFFF;
          --radius-lg:30px;
          --radius-md:22px;
          --shadow:0 20px 60px rgba(27,29,35,.08);
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0;background:#fff;color:var(--ink);font-family:"Inter Tight",Inter,Arial,sans-serif}
        a{color:inherit;text-decoration:none}
        button{font:inherit}
        .page-shell{overflow:hidden;background:#fff}
        .hero-grid > *,.lifecycle-wrap > *,.risk-layout > *,.discovery-layout > *,.split-2 > *,.expertise-layout > *,.terminology-shell > *,.security-layout > *,.languages-layout > *,.plan-layout > *,.cta-inner > *{min-width:0}
        .container{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section.dense{padding:80px 0}
        .surface{background:var(--surface)}
        .blush{background:var(--pink-light)}
        .dark{background:var(--dark);color:#fff}
        .dark2{background:var(--dark-2);color:#fff}
        h1,h2,h3,p{margin-top:0}
        h1,h2,h3{font-weight:600;letter-spacing:-.025em;color:inherit}
        h1{font-size:48px;line-height:1.04;margin-bottom:24px;max-width:760px}
        h2{font-size:36px;line-height:1.1;margin-bottom:20px}
        h3{font-size:24px;line-height:1.18;margin-bottom:12px}
        p,li{font-size:16px;line-height:1.7;color:var(--ink-2)}
        .dark p,.dark li,.dark2 p,.dark2 li{color:#D8D9DE}
        .body-large{font-size:18px;line-height:1.65}
        .eyebrow{font-size:11px;line-height:1.2;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--magenta);margin-bottom:14px}
        .dark .eyebrow,.dark2 .eyebrow,.dark-heading .eyebrow{color:var(--pink-dark)}
        .section-heading{max-width:820px;margin-bottom:48px}
        .section-heading.centered{text-align:center;margin-left:auto;margin-right:auto}
        .section-heading.left{text-align:left}
        .section-heading .section-intro{font-size:18px;line-height:1.65;max-width:820px;margin:0 auto}
        .section-heading.left .section-intro{margin-left:0}
        .pill{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:13px 22px;border-radius:999px;background:var(--magenta);color:#fff !important;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid var(--magenta)}
        .pill:visited,.pill:hover,.pill:active,.pill:focus,.pill:focus-visible{color:#fff !important}
        .pill svg{width:18px;height:18px;fill:none;stroke:#fff !important;stroke-width:1.8;transition:transform .2s ease}
        .pill:hover{background:var(--magenta-deep);border-color:var(--magenta-deep);transform:translateY(-1px)}
        .pill:hover svg{transform:translateX(2px)}
        .pill.secondary{background:#fff;color:var(--ink) !important;border-color:#D8DADF}
        .pill.secondary:visited,.pill.secondary:hover,.pill.secondary:active,.pill.secondary:focus,.pill.secondary:focus-visible{color:var(--ink) !important}
        .pill.secondary svg{stroke:var(--ink) !important}
        .pill.secondary:hover{background:#F8F8F9;border-color:#C9CBD1}
        .pill:focus-visible,.editorial-link:focus-visible,.faq-button:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
        .editorial-link{display:inline-flex;align-items:center;gap:7px;color:var(--magenta);font-size:16px;font-weight:600;min-height:44px;max-width:100%;overflow-wrap:anywhere}
        .editorial-link svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.8;transition:transform .2s ease}
        .editorial-link:hover svg{transform:translateX(3px)}
        .editorial-link:hover{text-decoration:underline;text-underline-offset:4px}
        .editorial-link.light{color:var(--pink-dark)}
        .hero{padding:104px 0 92px;background:linear-gradient(180deg,#fff 0%,#FCFCFD 100%)}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);gap:64px;align-items:center}
        .hero-copy{max-width:760px}
        .hero-copy .body-large{max-width:720px;margin-bottom:30px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .hero-art{position:relative;min-height:430px;border-radius:30px;background:#ECEEF1;overflow:hidden;border:1px solid #DCDDDF}
        .hero-art:before,.hero-art:after{content:"";position:absolute;pointer-events:none}
        .hero-art:before{width:260px;height:150px;right:-76px;top:-34px;background:rgba(193,29,99,.10);clip-path:polygon(18% 0,100% 0,82% 100%,0 74%);transform:rotate(-8deg)}
        .hero-art:after{width:230px;height:3px;left:-36px;bottom:76px;background:rgba(193,29,99,.34);transform:rotate(-17deg);transform-origin:left center}
        .doc-stack{position:absolute;inset:52px 54px 48px 58px;display:grid;grid-template-columns:1fr 1fr;gap:18px;transform:rotate(-2deg)}
        .doc{background:#fff;border:1px solid #D8DADF;border-radius:18px;box-shadow:0 16px 36px rgba(38,39,44,.08);padding:22px;min-height:150px;position:relative}
        .doc:nth-child(2){transform:translateY(30px) rotate(2deg)}
        .doc:nth-child(3){transform:translateX(20px) rotate(1deg)}
        .doc:nth-child(4){transform:translate(10px,15px) rotate(-1deg)}
        .doc-line{height:8px;background:#B7BBC2;border-radius:10px;margin-bottom:10px}
        .doc-line.short{width:56%}.doc-line.mid{width:76%}.doc-line.mag{background:rgba(193,29,99,.55);width:42%}
        .evidence-tag{position:absolute;right:18px;bottom:18px;width:50px;height:50px;border-radius:14px;border:2px solid var(--magenta);background:var(--pink-light);display:grid;place-items:center}
        .evidence-tag svg{width:24px;height:24px;fill:none;stroke:var(--magenta);stroke-width:1.8}
        .trust-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .trust-grid{display:grid;grid-template-columns:repeat(5,1fr)}
        .trust-item{padding:24px 22px;border-right:1px solid var(--line);min-height:96px;display:flex;flex-direction:column;justify-content:center}
        .trust-item:first-child{padding-left:0}.trust-item:last-child{border-right:0;padding-right:0}
        .trust-item strong{font-size:17px;font-weight:600;line-height:1.25;margin-bottom:5px}
        .trust-item span{font-size:16px;line-height:1.45;color:var(--muted)}
        .lifecycle-wrap{display:grid;grid-template-columns:.78fr 1.22fr;gap:68px;align-items:start}
        .lifecycle-copy{position:sticky;top:28px}
        .lifecycle-copy p{font-size:18px;max-width:520px}
        .lifecycle{border-top:1px solid var(--line)}
        .life-row{display:grid;grid-template-columns:120px 1fr;gap:24px;padding:22px 0;border-bottom:1px solid var(--line)}
        .life-label{font-size:16px;font-weight:600;color:var(--magenta);padding-top:2px}
        .life-row p{margin:0}
        .link-row{margin-top:22px}
        .term-links{display:flex;gap:22px;flex-wrap:wrap}
        .document-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff}
        .document-item{padding:28px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .document-item:nth-child(even){border-right:0}
        .document-item:nth-last-child(-n+2){border-bottom:0}
        .document-item h3{margin-bottom:10px}
        .document-item p{margin:0}
        .risk-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:64px;align-items:start}
        .risk-intro{position:sticky;top:28px}
        .risk-intro .body-large{max-width:470px}
        .risk-list{border-top:1px solid rgba(255,255,255,.16)}
        .risk-item{display:grid;grid-template-columns:64px 1fr;gap:20px;padding:30px 0;border-bottom:1px solid rgba(255,255,255,.16)}
        .risk-number{font-size:20px;font-weight:600;color:var(--pink-dark)}
        .risk-kicker{font-size:14px;line-height:1.4;color:#B7BAC3;margin-bottom:8px}
        .risk-item h3{margin-bottom:10px}
        .risk-item p{margin-bottom:14px}
        .bullet-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 18px;list-style:none;padding:0;margin:0}
        .bullet-grid li{position:relative;padding-left:18px;font-size:16px;line-height:1.5;color:#D9DADE}
        .bullet-grid li:before{content:"";position:absolute;left:0;top:.72em;width:6px;height:6px;border-radius:50%;background:var(--pink-dark);transform:translateY(-50%)}
        .callout{margin-top:30px;padding:24px 26px;border:1px solid rgba(255,255,255,.16);border-radius:22px;background:rgba(255,255,255,.04)}
        .callout p{margin-bottom:14px}
        .discovery-layout{display:grid;grid-template-columns:1fr .95fr;gap:60px;align-items:center}
        .discovery-points{margin:26px 0 22px;border-top:1px solid var(--line)}
        .discovery-point{display:grid;grid-template-columns:170px 1fr;gap:22px;padding:17px 0;border-bottom:1px solid var(--line);align-items:start}
        .discovery-point strong{font-size:17px;font-weight:600;line-height:1.4}
        .discovery-point p{margin:0}
        .screening-panel{background:#fff;border:1px solid var(--line);border-radius:30px;padding:30px;box-shadow:var(--shadow)}
        .screening-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px;padding-bottom:18px;border-bottom:1px solid var(--line)}
        .screening-head strong{font-size:18px}
        .status{font-size:14px;font-weight:600;color:var(--magenta);background:var(--pink-light);padding:7px 10px;border-radius:999px}
        .file-row{display:grid;grid-template-columns:1fr 80px 84px;gap:12px;align-items:center;padding:14px 0;border-bottom:1px solid var(--line);font-size:16px}
        .file-row:last-child{border-bottom:0}
        .file-row > *{min-width:0}
        .file-row strong{overflow-wrap:anywhere;word-break:break-word}
        .file-row span:nth-child(2),.file-row span:nth-child(3){color:var(--muted);font-size:14px}
        .file-row .priority{color:var(--magenta);font-weight:600}
        .split-2{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start}
        .editorial-list{border-top:1px solid var(--line)}
        .editorial-row{padding:22px 0;border-bottom:1px solid var(--line)}
        .editorial-row h3{margin-bottom:8px}
        .editorial-row p{margin:0}
        .note-panel{padding:28px;border-radius:24px;background:var(--pink-light);border:1px solid #F1D8E3}
        .note-panel h3{margin-bottom:12px}
        .note-panel p:last-child{margin-bottom:0}
        .formal-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:18px}
        .formal-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:28px}
        .formal-card h3{margin-bottom:12px}
        .formal-card ul{padding-left:18px;margin-bottom:20px}
        .formal-card li{margin-bottom:5px}
        .disclaimer{margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,.16);font-size:16px;color:#C9CAD0}
        .expertise-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:64px;align-items:start}
        .expertise-intro{position:sticky;top:28px}
        .expertise-columns{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .expertise-card{border:1px solid var(--line);border-radius:24px;padding:28px;background:#fff}
        .expertise-card ul{padding-left:18px;margin-bottom:18px}
        .expertise-card li{margin-bottom:5px}
        .terminology-shell{display:grid;grid-template-columns:.82fr 1.18fr;gap:56px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:30px;padding:44px;box-shadow:var(--shadow)}
        .term-map{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .term-tile{padding:18px;border-radius:18px;background:var(--surface);border:1px solid #E6E7EA}
        .term-tile strong{display:block;font-size:18px;margin-bottom:7px}
        .term-tile span{font-size:16px;line-height:1.55;color:var(--muted)}
        .term-quote{margin-top:22px;padding-left:18px;border-left:3px solid var(--magenta);font-size:18px;line-height:1.5;color:var(--ink)}
        .workflow{display:grid;grid-template-columns:repeat(7,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .workflow-step{padding:24px 16px 26px;border-right:1px solid var(--line)}
        .workflow-step:last-child{border-right:0}
        .workflow-num{display:block;font-size:16px;font-weight:600;color:var(--magenta);margin-bottom:14px}
        .workflow-title{display:block;font-size:18px;line-height:1.3;font-weight:600;margin-bottom:9px;color:var(--ink)}
        .workflow-step p{font-size:16px;line-height:1.55;margin:0}
        .ai-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .ai-column{border-radius:24px;padding:30px;background:#fff;border:1px solid var(--line)}
        .ai-column.emphasis{background:var(--pink-light);border-color:#EFD5E1}
        .ai-column h3{margin-bottom:16px}
        .check-list{list-style:none;padding:0;margin:0}
        .check-list li{display:flex;gap:11px;align-items:flex-start;margin-bottom:12px}
        .check-list svg{width:19px;height:19px;flex:0 0 19px;fill:none;stroke:var(--magenta);stroke-width:2;margin-top:4px}
        .ai-principle{margin-top:30px;padding:24px 0 0;border-top:1px solid var(--line);font-size:18px;line-height:1.6}
        .security-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:56px;align-items:start}
        .security-intro{position:sticky;top:28px}
        .security-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid rgba(255,255,255,.16);border-radius:24px;overflow:hidden}
        .security-item{padding:26px;border-right:1px solid rgba(255,255,255,.16);border-bottom:1px solid rgba(255,255,255,.16)}
        .security-item:nth-child(even){border-right:0}
        .security-item:nth-last-child(-n+2){border-bottom:0}
        .security-icon{width:40px;height:40px;border-radius:12px;background:rgba(242,167,198,.1);display:grid;place-items:center;margin-bottom:16px}
        .security-icon svg{width:22px;height:22px;fill:none;stroke:var(--pink-dark);stroke-width:1.7}
        .security-item h3{margin-bottom:8px}
        .security-item p{margin:0}
        .privilege-note{margin-top:24px;padding:22px 24px;border:1px solid rgba(255,255,255,.16);border-radius:20px}
        .privilege-note strong{display:block;font-size:17px;margin-bottom:7px}
        .audience-layout{display:grid;grid-template-columns:1fr 1fr;gap:22px}
        .audience-panel{padding:34px;border:1px solid var(--line);border-radius:26px;background:#fff}
        .audience-panel h3{font-size:24px}
        .audience-panel ul{padding-left:18px;margin-bottom:20px}
        .audience-panel li{margin-bottom:5px}
        .matter-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid var(--line)}
        .matter-item{padding:26px 30px 26px 0;border-bottom:1px solid var(--line)}
        .matter-item:nth-child(odd){padding-right:44px;border-right:1px solid var(--line)}
        .matter-item:nth-child(even){padding-left:44px}
        .matter-item h3{margin-bottom:8px}
        .matter-item p{margin:0}
        .languages-layout{display:grid;grid-template-columns:.88fr 1.12fr;gap:64px;align-items:start}
        .language-groups{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff}
        .language-group{padding:24px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .language-group:nth-child(even){border-right:0}
        .language-group:nth-last-child(-n+2){border-bottom:0}
        .language-group h3{margin-bottom:8px}
        .language-group p{margin:0;font-size:16px}
        .plan-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}
        .plan-intro{position:sticky;top:28px}
        .plan-list{border-top:1px solid var(--line)}
        .plan-row{display:grid;grid-template-columns:220px 1fr;gap:30px;padding:22px 0;border-bottom:1px solid var(--line)}
        .plan-row strong{font-size:18px}
        .plan-row p{margin:0}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff}
        .why-item{padding:28px 30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
        .why-item:nth-child(even){border-right:0}
        .why-item:nth-last-child(-n+2){border-bottom:0}
        .why-item h3{margin-bottom:9px}
        .why-item p{margin:0}
        .related-list{border-top:1px solid var(--line)}
        .related-row{display:grid;grid-template-columns:280px 1fr auto;gap:28px;align-items:center;padding:23px 0;border-bottom:1px solid var(--line)}
        .related-row h3{margin:0}
        .related-row p{margin:0}
        .faq-shell{max-width:980px;margin:0 auto;border:1px solid var(--line);border-radius:26px;overflow:hidden;background:#fff}
        .faq-item{border-bottom:1px solid var(--line)}
        .faq-item:last-child{border-bottom:0}
        .faq-button{width:100%;border:0;background:#fff;color:var(--ink);display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 26px;text-align:left;cursor:pointer;font-size:18px;font-weight:600}
        .faq-plus{width:28px;height:28px;border-radius:50%;display:grid;place-items:center;border:1px solid #D7D9DE;color:var(--magenta);font-size:20px;line-height:1;flex:0 0 28px}
        .faq-answer{padding:0 26px 24px;max-width:840px}
        .faq-answer p{margin:0}
        .final-cta{padding:84px 0;background:var(--burgundy);color:#fff}
        .cta-inner{display:grid;grid-template-columns:1fr auto;gap:52px;align-items:center}
        .cta-copy{max-width:760px}
        .cta-copy h2{margin-bottom:16px}
        .cta-copy p{font-size:18px;color:#F5DDE7;margin-bottom:0}
        .cta-actions{display:flex;gap:12px;align-items:center}
        .final-cta .pill{background:#fff;color:var(--burgundy) !important;border-color:#fff}
        .final-cta .pill:visited,.final-cta .pill:hover,.final-cta .pill:active,.final-cta .pill:focus,.final-cta .pill:focus-visible{color:var(--burgundy) !important}
        .final-cta .pill svg{stroke:var(--burgundy) !important}
        .final-cta .pill:hover{background:#FAF5F7}
        .final-cta .pill.secondary{background:transparent;color:#fff !important;border-color:rgba(255,255,255,.48)}
        .final-cta .pill.secondary:visited,.final-cta .pill.secondary:hover,.final-cta .pill.secondary:active,.final-cta .pill.secondary:focus,.final-cta .pill.secondary:focus-visible{color:#fff !important}
        .final-cta .pill.secondary svg{stroke:#fff !important}
        @media(max-width:1100px){
          .container{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:1fr .9fr;gap:42px}
          .trust-grid{grid-template-columns:repeat(5,1fr)}
          .trust-item{padding:22px 14px}
          .workflow{grid-template-columns:repeat(2,minmax(0,1fr));border-bottom:0}
          .workflow-step{border-bottom:1px solid var(--line)}
          .workflow-step:nth-child(even){border-right:0}
          .workflow-step:last-child{grid-column:1/-1;border-right:0}
          .why-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:900px){
          .container{padding-left:24px;padding-right:24px}
          .section{padding:82px 0}.section.dense{padding:72px 0}
          h1{font-size:42px}.section-heading h2,h2{font-size:32px}
          h3{font-size:22px}
          .hero{padding:92px 0 78px}
          .hero-grid,.lifecycle-wrap,.risk-layout,.discovery-layout,.split-2,.expertise-layout,.terminology-shell,.security-layout,.languages-layout,.plan-layout{grid-template-columns:1fr}
          .hero-copy{max-width:780px}
          .hero-art{min-height:380px}
          .lifecycle-copy,.risk-intro,.expertise-intro,.security-intro,.plan-intro{position:static}
          .trust-grid{grid-template-columns:1fr 1fr}
          .trust-item{border-bottom:1px solid var(--line)}
          .trust-item:nth-child(odd){padding-left:0}
          .trust-item:nth-child(even){border-right:0;padding-right:0}
          .trust-item:nth-child(5){grid-column:1/-1;border-bottom:0}
          .formal-grid{grid-template-columns:1fr 1fr}
          .formal-card:last-child{grid-column:1/-1}
          .audience-layout{grid-template-columns:1fr 1fr}
          .cta-inner{grid-template-columns:1fr;gap:28px}
          .cta-actions{justify-content:flex-start}
          .related-row{grid-template-columns:230px 1fr}.related-row .editorial-link{grid-column:2}
          .section-heading.centered{max-width:780px}
          .expertise-intro .section-heading,.languages-layout > div:first-child .section-heading{text-align:center;margin-left:auto;margin-right:auto}
          .languages-layout > div:first-child{text-align:center}
          .workflow{grid-template-columns:1fr;border-bottom:0}
          .workflow-step,.workflow-step:nth-child(even),.workflow-step:last-child{display:grid;grid-template-columns:46px minmax(0,1fr);column-gap:16px;border-right:0;border-top:0;border-bottom:1px solid var(--line);padding:22px 0;grid-column:auto}
          .workflow-num{grid-row:1/3;margin:2px 0 0}
          .workflow-title{grid-column:2;margin-bottom:7px}
          .workflow-step p{grid-column:2}
        }
        @media(max-width:640px){
          .container{padding-left:20px;padding-right:20px}
          .section{padding:68px 0}.section.dense{padding:64px 0}
          h1{font-size:38px;line-height:1.06}.section-heading h2,h2{font-size:30px;line-height:1.12}h3{font-size:20px}
          .body-large,.section-heading .section-intro{font-size:18px}
          .hero{padding:72px 0 62px}
          .hero-grid{gap:38px}
          .hero-actions,.cta-actions{flex-direction:column;align-items:stretch}
          .hero-actions .pill,.cta-actions .pill{width:100%}
          .hero-art{min-height:320px;border-radius:24px}
          .doc-stack{inset:36px 28px 30px 32px;gap:12px}.doc{padding:16px;min-height:118px}.doc:nth-child(3){transform:translateX(8px) rotate(1deg)}
          .trust-grid{grid-template-columns:1fr 1fr}
          .trust-item,.trust-item:first-child,.trust-item:nth-child(4),.trust-item:last-child{padding:20px 12px}
          .trust-item:nth-child(odd){padding-left:0}.trust-item:nth-child(even){border-right:0;padding-right:0}.trust-item:nth-child(5){grid-column:1/-1;border-bottom:0}
          .section-heading.centered{text-align:center;margin-bottom:38px}.section-heading.left{text-align:left}
          .expertise-intro .section-heading,.languages-layout .section-heading{ text-align:center; margin-left:auto; margin-right:auto; }
          .risk-intro .section-heading,.security-intro .section-heading,.plan-intro .section-heading{ text-align:left; }
          .document-grid,.expertise-columns,.security-grid,.audience-layout,.matter-grid,.language-groups,.ai-layout{grid-template-columns:1fr}
          .document-item,.document-item:nth-child(even){border-right:0;border-bottom:1px solid var(--line)}.document-item:last-child{border-bottom:0}
          .life-row{grid-template-columns:82px 1fr;gap:16px}
          .risk-item{grid-template-columns:42px 1fr;gap:12px}.bullet-grid{grid-template-columns:1fr}
          .discovery-point{grid-template-columns:1fr;gap:5px}
          .file-row{grid-template-columns:minmax(0,1fr) auto;gap:6px 12px;align-items:start}.file-row strong{grid-column:1/-1}.file-row span:nth-child(2){grid-column:1;grid-row:2}.file-row span:nth-child(3){grid-column:2;grid-row:2;text-align:right}.screening-panel{padding:22px}
          .formal-grid{grid-template-columns:1fr}.formal-card:last-child{grid-column:auto}
          .terminology-shell{padding:26px}.term-map{grid-template-columns:1fr}
          .matter-item,.matter-item:nth-child(odd),.matter-item:nth-child(even){padding:22px 0;border-right:0}
          .language-group,.language-group:nth-child(even){border-right:0;border-bottom:1px solid var(--line)}.language-group:last-child{border-bottom:0}
          .plan-row{grid-template-columns:1fr;gap:8px}
          .why-grid{grid-template-columns:1fr}.why-item,.why-item:nth-child(even){border-right:0;border-bottom:1px solid var(--line)}.why-item:last-child{border-bottom:0}
          .security-item,.security-item:nth-child(even){border-right:0;border-bottom:1px solid rgba(255,255,255,.16)}.security-item:last-child{border-bottom:0}
          .related-row{grid-template-columns:1fr;gap:8px;align-items:start}.related-row .editorial-link{grid-column:1;margin-top:5px}
          .faq-button{padding:20px;font-size:17px}.faq-answer{padding:0 20px 22px}
          .final-cta{padding:70px 0}
        }
        @media(max-width:480px){
          .trust-grid{grid-template-columns:1fr}
          .trust-item,.trust-item:first-child,.trust-item:nth-child(4),.trust-item:last-child,.trust-item:nth-child(odd),.trust-item:nth-child(even){padding:18px 0;border-right:0;border-bottom:1px solid var(--line)}
          .trust-item:nth-child(5){grid-column:auto;border-bottom:0}
          .screening-head{align-items:flex-start;flex-direction:column;gap:10px}
          .status{align-self:flex-start}
          .term-links{flex-direction:column;align-items:flex-start;gap:2px}
        }
        @media(max-width:360px){
          .doc-stack{inset:28px 16px 22px 18px}.doc{padding:12px}.hero-art{min-height:286px}
          .life-row{grid-template-columns:1fr;gap:6px}.life-label{padding-top:0}
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Legal Dispute Support</div>
            <h1>Litigation Translation Services for Multilingual Disputes</h1>
            <p className="body-large">Stepes provides professional litigation translation services for discovery, evidence, depositions, expert reports, pleadings, court documents, arbitration materials, and multilingual case records in 100+ languages. We combine experienced legal linguists, subject-matter expertise, secure workflows, and AI-enabled technology with the level of professional review appropriate for how each translation will be used.</p>
            <div className="hero-actions">
              <Pill href={LINKS.quote}>Get a Quote</Pill>
              <Pill href={LINKS.contact} secondary>Discuss a Litigation Matter</Pill>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="doc-stack">
              {[0,1,2,3].map((n)=><div className="doc" key={n}><div className="doc-line mag"/><div className="doc-line"/><div className="doc-line mid"/><div className="doc-line"/><div className="doc-line short"/>{n===1?<div className="evidence-tag"><ShieldIcon/></div>:null}</div>)}
            </div>
          </div>
        </div>
      </section>

      <div className="trust-band">
        <div className="container trust-grid">
          <div className="trust-item"><strong>100+ Languages</strong><span>Global and regional language coverage</span></div>
          <div className="trust-item"><strong>ISO 17100</strong><span>Structured translation processes</span></div>
          <div className="trust-item"><strong>ISO 9001</strong><span>Quality management framework</span></div>
          <div className="trust-item"><strong>Secure Workflows</strong><span>Controlled handling for sensitive content</span></div>
          <div className="trust-item"><strong>Legal + Subject Expertise</strong><span>Specialists matched to the matter</span></div>
        </div>
      </div>

      <section className="section">
        <div className="container lifecycle-wrap">
          <div className="lifecycle-copy">
            <SectionHeader title="Translation Across the Litigation Lifecycle" intro="Litigation translation rarely involves a single document or a single moment in a case. Foreign-language information can emerge during early case assessment, discovery, witness preparation, expert analysis, motion practice, hearings, trial, arbitration, settlement, and enforcement." centered={false}/>
            <p>Translation requirements can change as the matter develops. A large document population may initially need rapid multilingual screening. A smaller set may then require summary or selected-passage translation. Evidence, expert reports, testimony, pleadings, and other decision-critical materials may call for complete professional translation and additional review.</p>
            <div className="link-row"><LinkText href={LINKS.legal}>Legal Translation Services</LinkText></div>
          </div>
          <div className="lifecycle">
            {[
              ["Assess","Understand foreign-language contracts, correspondence, reports, communications, and preliminary evidence during early case assessment and pre-litigation review."],
              ["Discover","Identify and process multilingual emails, messages, records, files, databases, and other electronically stored information during discovery."],
              ["Analyze","Translate relevant passages, priority documents, technical evidence, financial records, and expert materials for closer legal review."],
              ["Prepare","Support depositions, witness statements, pleadings, exhibits, expert submissions, and attorney preparation materials."],
              ["Present","Prepare translations for hearings, court proceedings, arbitration, evidentiary use, and formal submissions according to project requirements."],
              ["Resolve","Translate judgments, awards, settlement documentation, enforcement materials, and related records when disputes extend across languages and jurisdictions."]
            ].map(([a,b])=><div className="life-row" key={a}><div className="life-label">{a}</div><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeader title="Litigation Documents and Evidence We Translate" intro="Stepes translates a wide range of documents used in active and potential disputes, from individual high-priority records to large multilingual matter files spanning multiple document types, languages, and review stages."/>
          <div className="document-grid">
            {documentGroups.map(([title,body])=><article className="document-item" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container risk-layout">
          <div className="risk-intro">
            <SectionHeader eyebrow="Workflow by Intended Use" title="Match Translation Depth to Litigation Risk" intro="Not every foreign-language document in a matter requires the same translation process. Stepes helps legal teams configure translation around intended use, complexity, volume, and the required level of assurance." dark centered={false}/>
          </div>
          <div>
            <div className="risk-list">
              {riskStages.map((s,i)=><div className="risk-item" key={s.title}><div className="risk-number">0{i+1}</div><div><div className="risk-kicker">{s.kicker}</div><h3>{s.title}</h3><p>{s.body}</p><ul className="bullet-grid">{s.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></div>)}
            </div>
            <div className="callout"><p><strong>Need help defining the right workflow?</strong> Tell us how the documents will be used, and Stepes can help configure an appropriate translation and review process for the matter.</p><LinkText href={LINKS.contact} light>Discuss Your Requirements</LinkText></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container discovery-layout">
          <div>
            <SectionHeader title="eDiscovery Translation for Multilingual Evidence" intro="Cross-border litigation can produce large volumes of electronically stored information across multiple languages. Stepes provides the multilingual translation layer within attorney-directed eDiscovery and document-review workflows." centered={false}/>
            <div className="discovery-points">
              <div className="discovery-point"><strong>Screen at Scale</strong><p>Use language identification and efficient translation to help reviewers understand large multilingual document populations.</p></div>
              <div className="discovery-point"><strong>Focus Review</strong><p>Prioritize potentially relevant records and use summaries or selected-passage translation when full translation is not yet required.</p></div>
              <div className="discovery-point"><strong>Escalate Key Evidence</strong><p>Move important documents into professional translation and additional review according to the matter's intended use and quality requirements.</p></div>
            </div>
            <p>Stepes provides the language-services component of the workflow. Legal teams, eDiscovery providers, and counsel remain responsible for document relevance, responsiveness, privilege, production decisions, and other legal determinations.</p>
            <LinkText href={LINKS.ediscovery}>Explore eDiscovery Translation Services</LinkText>
          </div>
          <div className="screening-panel" aria-label="Example multilingual discovery review plan">
            <div className="screening-head"><strong>Example Multilingual Review Plan</strong><span className="status">Matter Triage</span></div>
            <div className="file-row"><strong>Contract_Amendment_DE.pdf</strong><span>German</span><span className="priority">Translate</span></div>
            <div className="file-row"><strong>Email_Thread_0421.zh-CN</strong><span>Chinese</span><span>Screen</span></div>
            <div className="file-row"><strong>Supplier_Report_FR.docx</strong><span>French</span><span>Summary</span></div>
            <div className="file-row"><strong>Test_Data_JA.xlsx</strong><span>Japanese</span><span className="priority">Translate</span></div>
            <div className="file-row"><strong>Chat_Export_ES.txt</strong><span>Spanish</span><span>Screen</span></div>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeader title="Depositions and Witness Materials Across Languages" intro="Depositions and witness evidence can become central to how a litigation team understands facts, evaluates testimony, prepares strategy, and presents a case. Stepes translates written deposition and witness materials with careful attention to terminology, chronology, qualification, negation, names, dates, and factual nuance."/>
          <div className="split-2">
            <div className="editorial-list">
              {[
                ["Deposition Transcript Translation","Translate complete transcripts or selected testimony for case analysis, testimony comparison, expert review, attorney preparation, or other documented purposes."],
                ["Witness Statements and Affidavits","Preserve the factual meaning and structure of statements, declarations, affidavits, and interview materials across languages."],
                ["Deposition Exhibits","Translate contracts, correspondence, technical records, reports, emails, and other documents introduced or referenced during questioning."],
                ["Attorney Preparation Materials","Support multilingual background documents, previous statements, supporting records, and reference materials used to prepare for a deposition or witness interview."],
                ["Post-Deposition Materials","Translate corrections, follow-up correspondence, supplemental evidence, and related materials as the matter develops."]
              ].map(([a,b])=><div className="editorial-row" key={a}><h3>{a}</h3><p>{b}</p></div>)}
            </div>
            <div className="note-panel">
              <h3>Need Real-Time Language Support?</h3>
              <p>Written translation and live interpreting solve different requirements. For multilingual depositions, witness interviews, attorney-client consultations, case preparation, and other real-time conversations, Stepes also provides professional interpreting services.</p>
              <LinkText href={LINKS.interpreting}>Interpreting Services</LinkText>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark2">
        <div className="container">
          <SectionHeader title="Translation for Court, Hearing, and Arbitration Proceedings" intro="Formal proceedings can require multilingual documents to be reviewed, compared, filed, presented, or incorporated into a larger evidentiary record. Stepes translates court and arbitration materials with attention to legal terminology, document structure, names, dates, references, exhibits, and project-specific submission requirements." dark/>
          <div className="formal-grid">
            <article className="formal-card"><h3>Court Filings and Exhibits</h3><ul><li>Complaints and answers</li><li>Motions and briefs</li><li>Petitions</li><li>Declarations and affidavits</li><li>Evidentiary exhibits</li><li>Judgments and orders</li></ul><LinkText href={LINKS.court} light>Court Document Translation Services</LinkText></article>
            <article className="formal-card"><h3>International Arbitration</h3><ul><li>Requests and responses</li><li>Memorials and submissions</li><li>Witness statements</li><li>Expert reports</li><li>Contracts and correspondence</li><li>Awards and related records</li></ul><p>Coordinate terminology and translation workflows across the broader arbitration record when multiple languages are involved.</p></article>
            <article className="formal-card"><h3>Certified Translation When Required</h3><p>Certification, notarization, formatting, and submission requirements can differ by court, tribunal, agency, jurisdiction, proceeding, and document type. Stepes can provide a signed certification statement when requested and work from requirements supplied by the client or counsel.</p><LinkText href={LINKS.certified} light>Certified Translation Services</LinkText></article>
          </div>
          <p className="disclaimer"><strong>Important:</strong> Stepes provides language services, not legal advice. Courts, tribunals, agencies, and other receiving authorities determine their own filing, certification, admissibility, and procedural requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container expertise-layout">
          <div className="expertise-intro">
            <SectionHeader title="Translate Technical Evidence With Legal and Subject-Matter Expertise" intro="Complex disputes frequently involve content that sits at the intersection of law and another specialized field. Stepes can match language professionals to the legal, technical, scientific, medical, financial, engineering, product, or industry context behind the evidence." centered={false}/>
          </div>
          <div className="expertise-columns">
            <article className="expertise-card"><h3>Patent and Intellectual Property Litigation</h3><p>Support patent and IP disputes involving technical records alongside legal arguments and evidentiary materials.</p><ul><li>Patent claims and specifications used in litigation</li><li>Claim charts and contentions</li><li>Foreign-language prior art</li><li>Technical exhibits and expert reports</li><li>Discovery and deposition materials</li><li>Licensing and technology agreements</li></ul><LinkText href={LINKS.patent}>Patent Translation Services</LinkText></article>
            <article className="expertise-card"><h3>Scientific and Technical Evidence</h3><p>Product liability, pharmaceutical, medical-device, software, engineering, and manufacturing disputes may require accurate translation of complex technical evidence.</p><ul><li>Engineering reports</li><li>Product specifications</li><li>Testing documentation</li><li>Scientific studies</li><li>Medical and clinical records</li><li>Manufacturing, quality, and safety records</li></ul><LinkText href={LINKS.technical}>Technical Translation Services</LinkText></article>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="container terminology-shell">
          <div>
            <SectionHeader title="Keep Terminology Consistent Across the Entire Matter" intro="The same parties, products, technologies, contract provisions, technical concepts, and defined terms may recur across discovery, depositions, expert reports, pleadings, exhibits, and subsequent proceedings. Matter-specific language assets help related documents stay easier to compare and review." centered={false}/>
            <div className="term-quote">One litigation vocabulary across every document, witness, expert, and stage of the matter.</div>
            <div className="link-row term-links"><LinkText href={LINKS.terminology}>Terminology Management</LinkText><LinkText href={LINKS.translationMemory}>Translation Memory</LinkText></div>
          </div>
          <div className="term-map">
            {[
              ["Matter-Specific Glossaries","Party names, entities, defined terms, products, technical concepts, recurring legal expressions, and case-specific abbreviations."],
              ["Counsel-Approved Language","Incorporate existing translations, reviewer decisions, and approved terminology so resolved language choices carry forward."],
              ["Translation Memory","Reuse approved bilingual content as controlled reference when similar or recurring text appears across related documents and versions."],
              ["Cross-Language Coordination","Coordinate equivalent concepts across multiple target languages while preserving natural legal and linguistic expression in each locale."]
            ].map(([a,b])=><div className="term-tile" key={a}><strong>{a}</strong><span>{b}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="A Translation Workflow Built Around the Matter" intro="Litigation moves quickly, and translation requirements can change as new evidence appears, deadlines shift, or counsel identifies additional documents for review. Stepes uses a structured workflow that can adapt to individual documents, large case files, and ongoing multilingual matters." centered={false}/>
          <div className="workflow">
            {[
              ["Define Requirements","Confirm files, languages, intended use, deadlines, confidentiality, delivery format, certification, and counsel instructions."],
              ["Triage Content","Determine which materials need screening, focused translation, full translation, independent review, or certification."],
              ["Assign the Team","Match linguists to the language pair, legal context, document type, subject matter, complexity, and required qualifications."],
              ["Set Terminology","Incorporate existing translations, party names, defined terms, glossaries, precedent materials, and reviewer instructions."],
              ["Translate and Review","Apply the agreed translation and review model according to intended use and quality requirements."],
              ["Perform QA","Check completeness, terminology, names, dates, numbers, cross-references, tables, exhibits, structure, and formatting."],
              ["Deliver and Continue","Deliver through the agreed workflow and reuse approved language assets to support consistency across later matter materials."]
            ].map(([a,b],i)=><div className="workflow-step" key={a}><span className="workflow-num">0{i+1}</span><strong className="workflow-title">{a}</strong><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeader title="Scale Multilingual Review With AI and Human Oversight" intro="Modern litigation can involve document volumes that make purely manual first-pass translation impractical. Stepes uses AI where it can improve speed and scale, while professional linguists provide the judgment required for specialized, nuanced, decision-critical, and formal-use content."/>
          <div className="ai-layout">
            <div className="ai-column"><h3>AI-Supported Workflows</h3><ul className="check-list">{["Language identification","Large-volume document screening","Preliminary comprehension","Document triage","Terminology extraction","Repetitive-content processing","Version comparison","Translation-memory matching","Automated quality checks","Workflow routing"].map(x=><li key={x}><CheckIcon/><span>{x}</span></li>)}</ul></div>
            <div className="ai-column emphasis"><h3>Human-Centered Workflows</h3><ul className="check-list">{["Decision-critical evidence","Expert reports","Deposition transcripts","Witness statements","Pleadings","Formal submissions","Certified translations","Sensitive technical evidence","Content where context or nuance affects meaning"].map(x=><li key={x}><CheckIcon/><span>{x}</span></li>)}</ul></div>
          </div>
          <p className="ai-principle"><strong>The right control for the right content.</strong> A matter can begin with AI-assisted screening, move priority records into professional translation, and add independent review or certification where the agreed use requires it. Legal relevance, privilege, admissibility, responsiveness, and other legal determinations remain with counsel and the appropriate legal professionals.</p>
        </div>
      </section>

      <section className="section dark">
        <div className="container security-layout">
          <div className="security-intro">
            <SectionHeader eyebrow="Confidential Case Materials" title="Secure Translation for Sensitive Litigation Materials" intro="Litigation documents can contain confidential business information, personal data, trade secrets, privileged communications, unreleased technology, financial records, health information, investigative findings, and other sensitive content." dark centered={false}/>
            <p>Security extends beyond file storage. It includes who can access project materials, how files move through the workflow, which language professionals are assigned, how reusable language assets are managed, and how final translations are delivered.</p>
            <LinkText href={LINKS.security} light>Translation Security</LinkText>
          </div>
          <div>
            <div className="security-grid">
              {[
                ["Controlled File Handling","Source files, working materials, translated content, review files, and final deliverables move through controlled project workflows."],
                ["Authorized Project Access","Matter access can be limited to approved project participants and assigned language professionals according to project requirements."],
                ["Confidentiality Requirements","Professional linguists and reviewers work under confidentiality obligations appropriate to enterprise translation operations and customer requirements."],
                ["Protective-Order and NDA Requirements","Client-provided confidentiality, protective-order, or handling instructions can be incorporated into the project workflow."],
                ["Governed AI and Language Assets","Sensitive content, terminology resources, translation memories, reviewer comments, and reusable multilingual assets require appropriate access and workflow controls."],
                ["Controlled Delivery","Final translations and supporting materials are delivered through the agreed project process with client requirements incorporated where applicable."]
              ].map(([a,b])=><div className="security-item" key={a}><div className="security-icon"><ShieldIcon/></div><h3>{a}</h3><p>{b}</p></div>)}
            </div>
            <div className="privilege-note"><strong>Privileged and Restricted Materials</strong><p>Stepes supports controlled handling of materials identified by the client or counsel as privileged, confidential, or otherwise restricted. Counsel remains responsible for determining privilege status, legal restrictions, and matter-specific handling requirements.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Built for Law Firms and Corporate Legal Teams" intro="Multilingual litigation can require coordination among outside counsel, in-house attorneys, legal operations teams, litigation support providers, experts, reviewers, and business stakeholders across jurisdictions."/>
          <div className="audience-layout">
            <article className="audience-panel"><h3>Law Firms</h3><p>Support matter teams with translation for complex disputes and fast-moving litigation requirements.</p><ul><li>Commercial and contract disputes</li><li>Discovery and document review</li><li>Depositions and witness evidence</li><li>Arbitration and court proceedings</li><li>Investigations</li><li>Patent and IP litigation</li><li>Technical and scientific disputes</li><li>Cross-border matters</li></ul><p>Scale from a single urgent document to multilingual matters involving large volumes, specialized subject expertise, and recurring deadlines.</p></article>
            <article className="audience-panel"><h3>Corporate Legal Departments</h3><p>Help in-house counsel and legal operations teams coordinate translation across recurring legal workflows.</p><ul><li>Litigation and dispute management</li><li>Internal investigations</li><li>Outside-counsel requests</li><li>Regulatory matters</li><li>Employment disputes</li><li>Product and technical claims</li><li>Cross-border evidence</li><li>Recurring legal-language requirements</li></ul><p>Centralized terminology, approved language assets, security controls, and structured workflows can improve continuity across law firms, regions, and business units.</p><LinkText href={LINKS.legalTeams}>Solutions for Legal Teams</LinkText></article>
          </div>
        </div>
      </section>

      <section className="section surface">
        <div className="container">
          <SectionHeader title="Litigation Translation Across Complex Disputes" intro="Different disputes create different language challenges. Stepes combines legal-linguistic expertise with relevant subject knowledge to support multilingual case materials across a broad range of matters."/>
          <div className="matter-grid">{matterTypes.map(([a,b])=><article className="matter-item" key={a}><h3>{a}</h3><p>{b}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container languages-layout">
          <div><SectionHeader title="Litigation Translation in 100+ Languages" intro="Cross-border disputes may involve evidence created in several countries, regional language variants, multinational parties, and legal teams working across different locations. Stepes can coordinate multilingual matters through centralized project management, terminology, language assets, and quality workflows." centered={false}/><LinkText href={LINKS.languages}>Explore Translation Languages</LinkText></div>
          <div className="language-groups">
            <div className="language-group"><h3>European Languages</h3><p>German, French, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Swedish, Danish, Norwegian, Finnish, Ukrainian, Russian, and more.</p></div>
            <div className="language-group"><h3>Asian Languages</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and more.</p></div>
            <div className="language-group"><h3>Middle Eastern and Regional Languages</h3><p>Arabic, Hebrew, Turkish, Persian, and additional regional language requirements.</p></div>
            <div className="language-group"><h3>Locale and Subject Matching</h3><p>Assignment considers language pair, locale, subject matter, legal context, intended use, and project requirements.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Why Stepes for Multilingual Litigation" intro="Litigation translation requires more than language fluency. Legal teams need a translation partner that can work with specialized evidence, changing deadlines, confidential materials, multiple languages, and different levels of linguistic risk across the same matter."/>
          <div className="why-grid">
            {[
              ["Litigation-Focused Legal Expertise","Professional linguists selected for legal terminology, document type, subject matter, and intended use."],
              ["Specialized Subject Knowledge","Technical, scientific, medical, engineering, financial, and industry expertise when evidence requires it."],
              ["Risk-Based Workflows","Different levels of translation and review for screening, document analysis, key evidence, formal submissions, and certification requirements."],
              ["Secure Enterprise Operations","Controlled access, managed project workflows, confidentiality requirements, and secure handling practices."],
              ["Speed and Scalability","Urgent individual documents, recurring case materials, and large multilingual document populations."],
              ["AI + Professional Expertise","Use AI where it improves speed and scale, and professional human judgment where context, terminology, nuance, and final quality require it."],
              ["Matter-Wide Terminology Control","Maintain approved names, defined terms, technical vocabulary, and recurring language across related documents and project stages."],
              ["100+ Language Coverage","Coordinate major world languages, regional variants, and multilingual disputes through one translation partner."]
            ].map(([a,b])=><article className="why-item" key={a}><h3>{a}</h3><p>{b}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="container plan-layout">
          <div className="plan-intro"><SectionHeader title="Plan a Multilingual Litigation Translation Project" intro="The more context the translation team receives at the beginning of a matter, the easier it is to configure an efficient workflow and maintain consistency as requirements change." centered={false}/><Pill href={LINKS.contact} secondary>Discuss a Litigation Matter</Pill></div>
          <div className="plan-list">
            {[
              ["Source Files","Share the available documents and identify large document populations or expected future batches."],
              ["Source and Target Languages","Include known languages, regional requirements, and any materials that may contain multiple languages."],
              ["Intended Use","Tell us whether the content is for screening, attorney review, discovery, expert analysis, deposition preparation, filing, evidentiary use, arbitration, certification, or another purpose."],
              ["Required Deadline","Identify filing dates, deposition dates, hearings, discovery deadlines, internal review milestones, or other time-sensitive requirements."],
              ["Reference Materials","Provide existing translations, glossaries, party names, defined terms, prior filings, precedent materials, technical references, or attorney-approved terminology where available."],
              ["Delivery Requirements","Share formatting instructions, bilingual-output needs, certification requirements, naming conventions, document references, or other project-specific requirements."]
            ].map(([a,b])=><div className="plan-row" key={a}><strong>{a}</strong><p>{b}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section dense surface">
        <div className="container">
          <SectionHeader title="Related Legal Translation Services" intro="Litigation intersects with several specialized language requirements. Stepes maintains dedicated services so legal teams can go deeper when a matter requires a particular workflow."/>
          <div className="related-list">{relatedServices.map(([a,b,label,c])=><div className="related-row" key={a}><h3>{a}</h3><p>{b}</p><LinkText href={c}>{label}</LinkText></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Litigation Translation Services FAQs" intro="Common questions about multilingual litigation workflows, discovery, depositions, certification, confidentiality, AI, timelines, and scale." centered={false}/>
          <div className="faq-shell">
            {faqs.map(([q,a],i)=>{
              const open=openFaq===i;
              return <div className="faq-item" key={q}><button className="faq-button" type="button" aria-expanded={open} onClick={()=>setOpenFaq(open?-1:i)}><span>{q}</span><span className="faq-plus" aria-hidden="true">{open?"−":"+"}</span></button>{open?<div className="faq-answer"><p>{a}</p></div>:null}</div>
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container cta-inner">
          <div className="cta-copy"><h2>Translate Litigation Materials With the Right Level of Control</h2><p>From early document screening to discovery, depositions, expert evidence, court filings, arbitration, and final proceedings, Stepes helps law firms and corporate legal teams manage multilingual litigation through one scalable translation workflow in 100+ languages.</p></div>
          <div className="cta-actions"><Pill href={LINKS.quote}>Get a Quote</Pill><Pill href={LINKS.contact} secondary>Talk to a Legal Translation Expert</Pill></div>
        </div>
      </section>
    </main>
  );
}

export default App;
