import React, { useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F7E2EB",
  dark: "#141A27",
  text: "#121826",
  muted: "#4F596B",
  line: "#E3E7EE",
  soft: "#F6F8FB",
  eyebrowDark: "#F2A7C6",
};

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  patent: "https://www.stepes.com/patent-translation-services/",
  german: "https://www.stepes.com/german-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  security: "https://www.stepes.com/security/",
  terminology: "https://www.stepes.com/terminology-management/",
  memory: "https://www.stepes.com/translation-memory/",
  pctGuide: "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/",
  claimsChecklist: "https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/",
  priorArtGuide: "https://www.stepes.com/resources/translation-guides/prior-art-translation-patentability-fto-invalidity/",
  aiPatentGuide: "https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/",
};

function Icon({ name, size = 22 }) {
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

  const icons = {
    arrow: <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" /></svg>,
    check: <svg {...common}><path d="m5 12 4 4L19 6" /></svg>,
    upload: <svg {...common}><path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" /><path d="M5 14v4.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V14" /></svg>,
    claims: <svg {...common}><path d="M6 3.5h12v17H6z" /><path d="M9 8h6M9 12h6M9 16h4" /><circle cx="5" cy="8" r="1" /><circle cx="5" cy="12" r="1" /></svg>,
    shield: <svg {...common}><path d="M12 2.5 19 5v6c0 4.7-2.8 8.2-7 10.5C7.8 19.2 5 15.7 5 11V5z" /><path d="m9.5 12 1.7 1.7 3.6-4" /></svg>,
    engineering: <svg {...common}><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /></svg>,
    chip: <svg {...common}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9.5 10h5v4h-5zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>,
    chemistry: <svg {...common}><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" /><path d="M8 15h8" /></svg>,
    medical: <svg {...common}><rect x="3.5" y="4" width="17" height="16" rx="3" /><path d="M7 8h4M7 11h3M15 8.5v6M12 11.5h6M7 17h10" /></svg>,
    ai: <svg {...common}><rect x="3.5" y="4.5" width="17" height="15" rx="3" /><path d="m9 9-3 3 3 3M15 9l3 3-3 3M13 8l-2 8" /></svg>,
    scales: <svg {...common}><path d="M12 3v18M7 20h10M5 6h14" /><path d="m6 6-3 7h6L6 6ZM18 6l-3 7h6l-3-7Z" /><path d="M3 13c.6 1.3 1.6 2 3 2s2.4-.7 3-2M15 13c.6 1.3 1.6 2 3 2s2.4-.7 3-2" /></svg>,
    search: <svg {...common}><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M8 8.5h5M8 11.5h3.5" /></svg>,
  };
  return icons[name] || icons.check;
}

const germanTerms = [
  ["Patentanspruch", "Patent claim"],
  ["Beschreibung", "Description / specification"],
  ["Stand der Technik", "Prior art / state of the art"],
  ["Ausführungsform", "Embodiment"],
  ["Offenlegungsschrift", "Published patent application"],
  ["Patentschrift", "Patent specification / publication"],
  ["Priorität", "Priority"],
  ["Erfinder", "Inventor"],
  ["Anmelder", "Applicant"],
  ["Patentinhaber", "Patent proprietor / owner"],
];

const documentGroups = [
  {
    title: "Patent Applications",
    items: ["Patent claims", "Descriptions and specifications", "Abstracts", "Drawing and figure text", "Amendments and revised application content"],
  },
  {
    title: "Prosecution and Examination",
    items: ["Office communications", "Search and examination materials", "Responses and amendments", "Opposition-related documents", "Attorney and inventor review content"],
  },
  {
    title: "Patent Research",
    items: ["German patents and published applications", "Prior-art documents", "Technical literature", "Patent-search materials", "Selected claims and technical passages"],
  },
  {
    title: "IP and Dispute Materials",
    items: ["Claim charts", "Technical expert materials", "Exhibits", "Patent-family comparisons", "Licensing and other IP documentation"],
  },
];

const expertise = [
  ["engineering", "Automotive & Mobility", "Powertrain systems, electric vehicles, batteries, autonomous driving, sensors, vehicle electronics, manufacturing technologies, and mobility platforms."],
  ["engineering", "Mechanical & Industrial Engineering", "Machinery, automation, robotics, manufacturing processes, industrial equipment, materials, mechanical assemblies, and control systems."],
  ["chip", "Electronics & Semiconductors", "Circuits, semiconductor technologies, sensors, displays, embedded systems, electronic components, power electronics, and communications hardware."],
  ["ai", "Software, AI & Telecommunications", "Software systems, computing architectures, artificial intelligence, machine learning, networking, communications protocols, cloud technologies, and digital platforms."],
  ["chemistry", "Chemicals & Materials", "Chemical compounds, formulations, polymers, industrial chemistry, materials science, coatings, processes, and specialty materials."],
  ["medical", "Life Sciences & Medical Technology", "Biotechnology, pharmaceuticals, diagnostics, medical devices, laboratory technologies, biologics, and healthcare innovations."],
];

const workflowSteps = [
  ["Intended-Use and Jurisdiction Review", "We identify the language direction, document type, technical field, intended use, relevant DPMA, EPO, PCT, research, prosecution, portfolio, or dispute context, deadline, review requirements, and requested deliverables."],
  ["Patent-Family and Terminology Preparation", "Related patents, previous translations, approved terminology, glossaries, translation memories, counsel instructions, and technical reference materials can be reviewed before translation begins."],
  ["Technical Linguist Assignment", "The project is matched to language professionals with the required German and English skills and appropriate subject-matter expertise."],
  ["Translation and Appropriate Human Review", "Translation and review depth are aligned with risk. Research screening does not automatically receive the same workflow as filing-grade patent claims."],
  ["Final QA and Delivery", "Applicable quality checks can cover terminology, completeness, claim relationships, numbers, references, figures, formatting, and requested file outputs before secure delivery."],
];

const priorArtTiers = [
  ["Screening", "AI-assisted or rapid translation can help research teams triage larger collections of German patent documents and identify potentially relevant materials."],
  ["Technical Summary", "A concise English summary can give attorneys or technical teams a clearer understanding of the invention, claims, and relevant passages."],
  ["Selected-Passage Translation", "Translate individual claims, embodiments, examples, descriptions, or paragraphs that are directly relevant to the research question."],
  ["Complete Professional Translation", "Translate the full German patent or technical document when the material warrants comprehensive analysis."],
  ["Human Verification", "When a particular claim or passage will influence a legal, commercial, or technical decision, professional human review can be added to the workflow."],
];

const faqs = [
  {
    q: "Do German patent applications need to be in German?",
    a: "Patent applications handled by the German Patent and Trade Mark Office ultimately require German-language application documents. The DPMA permits applications to be initially filed in other languages, but a German translation must be supplied within the applicable period. Different translation timelines apply depending on whether the original application is in English or French or in another foreign language. Applicants should confirm the exact requirements and deadlines for their filing with patent counsel.",
  },
  {
    q: "How long do I have to submit a German translation of an English or French patent application to the DPMA?",
    a: "Under current DPMA rules, an English- or French-language application generally allows 12 months from the German filing date for submission of the German translation. If priority from an earlier application is claimed, the translation must be provided no later than 15 months after the priority date. The applicable deadline is therefore the earlier of those two dates. Applications in other foreign languages generally follow a shorter three-month translation period. Deadline determination should be confirmed by the applicant or its patent representative.",
  },
  {
    q: "Does an EPO patent have to be translated into German for protection in Germany?",
    a: "Not simply because Germany is one of the countries where protection is sought. Germany participates in the London Agreement and has German as an official language in common with the European Patent Office. Under the current framework, Germany generally does not require an additional translation under Article 65(1) EPC for post-grant validation of a European patent. German translations may still be relevant for other proceedings, research, internal review, litigation, or document-specific requirements. Patent counsel should determine the requirements for each case.",
  },
  {
    q: "Is German an official language of the European Patent Office?",
    a: "Yes. English, French, and German are the three official languages of the European Patent Office. A European patent application may also initially be filed in another language, subject to the applicable requirement to provide a translation into one of the EPO's official languages. This makes German an important working language for European patent prosecution and related documentation.",
  },
  {
    q: "Can Stepes translate German patents into English for prior-art research?",
    a: "Yes. Stepes supports German-to-English translation for patentability searches, freedom-to-operate analysis, invalidity research, competitive intelligence, technical review, patent-family analysis, and other IP research. The workflow can range from rapid screening and selected-passage translation to complete professional translation and human verification of decision-critical claims or passages.",
  },
  {
    q: "What parts of a German patent application can Stepes translate?",
    a: "Stepes can translate claims, descriptions and specifications, abstracts, drawing text, amendments, prosecution materials, prior-art references, patent-family documents, and related technical and intellectual property content. For filing-related work, we follow the project instructions provided by you, your patent counsel, or your filing representative.",
  },
  {
    q: "How does Stepes maintain consistency across English and German patent families?",
    a: "For recurring patent programs, Stepes can use bilingual terminology resources, translation memory, related patent-family documents, previously approved translations, and reviewer feedback. These resources help keep defined terms, component names, technical concepts, and recurring language consistent while still allowing translators to account for amendments, context, and differences among individual applications.",
  },
  {
    q: "Does Stepes provide patent filing or legal advice?",
    a: "Stepes provides professional translation and language services. We do not determine filing strategy, legal deadlines, claim scope, patentability, or other legal conclusions. For patent-office submissions, Stepes works from instructions supplied by the applicant, patent attorney, filing representative, or corporate IP team.",
  },
];

const resources = [
  ["Patent Translation Services", "Professional patent translation for international filings, prosecution, prior art, litigation, and patent portfolios.", URLS.patent, "Explore Patent Translation Services"],
  ["PCT Patent Translation and National Phase Guide", "Plan multilingual content for international applications, national-phase entry, amendments, and coordinated patent families.", URLS.pctGuide, "Explore the PCT guide"],
  ["Patent Claims Translation Quality Checklist", "Review terminology, defined terms, dependencies, references, numbers, units, drawings, and final-file consistency.", URLS.claimsChecklist, "View the claims checklist"],
  ["Prior Art Translation for Patentability, FTO, and Invalidity", "Choose the appropriate level of translation for screening, research, analysis, and decision-critical patent content.", URLS.priorArtGuide, "Explore prior art translation"],
  ["AI Patent Translation: Research Use vs. Filing-Grade Translation", "Understand where AI-assisted translation adds efficiency and where professional human translation and review remain essential.", URLS.aiPatentGuide, "Explore AI patent translation"],
  ["German Translation Services", "Translate additional German business, technical, legal, and enterprise content beyond patents.", URLS.german, "Explore German Translation Services"],
];

function GermanPatentHeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="jurisdiction-chip dpma-chip">DPMA</div>
      <div className="jurisdiction-chip epo-chip">EPO</div>
      <div className="patent-sheet">
        <div className="sheet-topline">
          <span className="doc-dot" />
          <span>PATENTANMELDUNG</span>
          <span className="doc-code">DE ↔ EN</span>
        </div>
        <div className="sheet-body">
          <div className="drawing-panel">
            <svg viewBox="0 0 240 150" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="52" y="35" width="136" height="76" rx="10" />
              <circle cx="92" cy="73" r="17" />
              <circle cx="148" cy="73" r="17" />
              <path d="M109 73h22M92 56V35M148 56V35M92 90v21M148 90v21" />
              <path d="M30 73h45M165 73h47M120 18v30M120 99v33" />
              <path d="M23 69l7 4-7 4M219 69l-7 4 7 4" />
            </svg>
            <div className="drawing-label">FIG. 2</div>
          </div>
          <div className="claim-lines">
            <div className="claim-title">PATENTANSPRÜCHE</div>
            {[82, 94, 76, 88, 64].map((width, index) => (
              <div className={index === 0 ? "claim-line active" : "claim-line"} key={width}>
                <span>{index + 1}</span><i style={{ width: `${width}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="language-card">
        <div className="language-code">DE</div>
        <Icon name="arrow" size={16} />
        <div className="language-code en">EN</div>
        <div className="language-copy"><strong>Patent terminology</strong><span>Claims aligned across languages</span></div>
      </div>
      <div className="review-card">
        <div className="review-icon"><Icon name="check" size={18} /></div>
        <div><strong>Technical review</strong><span>Terms • claims • references</span></div>
      </div>
      <svg className="connector" viewBox="0 0 560 500" fill="none">
        <path d="M55 165C98 95 172 77 230 111" />
        <path d="M410 79c58 16 92 61 87 113" />
        <path d="M461 344c-32 60-91 88-154 78" />
      </svg>
    </div>
  );
}

export default function StepesGermanPatentTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="german-patent-page">
      <style>{`
        :root {
          --magenta: ${BRAND.magenta};
          --magenta-dark: ${BRAND.magentaDark};
          --burgundy: ${BRAND.burgundy};
          --blush: ${BRAND.blush};
          --blush-strong: ${BRAND.blushStrong};
          --dark: ${BRAND.dark};
          --text: ${BRAND.text};
          --muted: ${BRAND.muted};
          --line: ${BRAND.line};
          --soft: ${BRAND.soft};
          --eyebrow-dark: ${BRAND.eyebrowDark};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .german-patent-page {
          overflow-x: clip;
          background: #fff;
          color: var(--text);
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .german-patent-page a { color: var(--magenta); text-decoration: none; }
        .german-patent-page a:focus-visible,
        .german-patent-page button:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 4px; }
        .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .hero-grid > *, .overview-grid > *, .direction-grid > *, .jurisdiction-row > *, .pct-grid > *,
        .claims-grid > *, .terms-grid > *, .prior-grid > *, .family-grid > *, .ai-grid > *, .workflow-grid > *,
        .security-grid > *, .cost-grid > *, .resource-row > *, .final-grid > * { min-width: 0; }
        .german-patent-page h1, .german-patent-page h2, .german-patent-page h3,
        .german-patent-page p, .german-patent-page li, .german-patent-page a, .german-patent-page td { overflow-wrap: break-word; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section.soft { background: var(--soft); }
        .section.blush { background: var(--blush); }
        .section.dark { background: var(--dark); color: #fff; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -.025em; }
        h1 { max-width: 680px; margin-bottom: 24px; font-size: 48px; line-height: 1.08; }
        h2 { margin-bottom: 24px; font-size: 36px; line-height: 1.16; }
        h3 { margin-bottom: 14px; font-size: 24px; line-height: 1.25; }
        p, li, td, th { font-size: 16px; }
        .lead { max-width: 800px; color: var(--muted); font-size: 18px; line-height: 1.65; }
        .dark .lead, .dark p, .dark li { color: #C9D0DD; }
        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: .16em !important;
          text-transform: uppercase;
        }
        .dark .eyebrow { color: var(--eyebrow-dark) !important; }
        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading.center .lead { margin-left: auto; margin-right: auto; }
        .cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
        .btn {
          min-height: 50px; display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 13px 22px; border: 1px solid transparent; border-radius: 999px;
          font-size: 16px; line-height: 1.2; font-weight: 600;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn-primary, .btn-primary:link, .btn-primary:visited, .btn-primary:hover, .btn-primary:active,
        .btn-primary:focus, .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .btn-primary *, .btn-primary svg, .btn-primary svg * { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(159,29,85,.18); }
        .btn-secondary { color: var(--text) !important; background: #fff; border-color: var(--line); }
        .btn-secondary:hover { border-color: #C9CFD9; transform: translateY(-1px); }
        .text-link { display: inline-flex; max-width: 100%; min-height: 44px; align-items: center; gap: 8px; color: var(--magenta) !important; font-weight: 600; }
        .text-link svg { flex: 0 0 auto; transition: transform .18s ease; }
        .text-link:hover svg { transform: translateX(3px); }
        .inline-links { display: flex; flex-wrap: wrap; gap: 8px 28px; margin-top: 20px; }

        /* Hero */
        .hero { padding: 104px 0 88px; background: linear-gradient(180deg, #fff 0%, #fff 82%, #FAFBFD 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0,1.06fr) minmax(440px,.94fr); gap: 64px; align-items: center; }
        .hero .lead { max-width: 710px; }
        .hero-proof { display: flex; flex-wrap: wrap; gap: 14px 24px; margin-top: 28px; }
        .hero-proof span { display: inline-flex; align-items: center; gap: 9px; color: #465165; font-size: 16px; }
        .hero-proof svg { color: var(--magenta); }
        .hero-art { position: relative; min-height: 500px; overflow: hidden; border: 1px solid #E4E8EF; border-radius: 30px; background: #FBFCFE; }
        .art-grid { position: absolute; inset: 0; opacity: .68; background-image: linear-gradient(#EDF0F4 1px, transparent 1px), linear-gradient(90deg,#EDF0F4 1px, transparent 1px); background-size: 34px 34px; -webkit-mask-image: linear-gradient(to bottom,#000,transparent 92%); mask-image: linear-gradient(to bottom,#000,transparent 92%); }
        .patent-sheet { position: absolute; top: 86px; left: 70px; right: 62px; z-index: 2; min-height: 308px; border: 1px solid #DCE1E9; border-radius: 22px; background: #fff; box-shadow: 0 24px 70px rgba(36,43,56,.13); transform: rotate(-1.8deg); }
        .sheet-topline { height: 56px; display: flex; align-items: center; gap: 10px; padding: 0 22px; border-bottom: 1px solid #E7EAF0; color: #586274; font-size: 14px; font-weight: 600; letter-spacing: .06em; }
        .doc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .doc-code { margin-left: auto; color: #838D9E; }
        .sheet-body { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; padding: 22px; }
        .drawing-panel { position: relative; min-height: 210px; display: flex; align-items: center; justify-content: center; border: 1px solid #E1E5EB; border-radius: 16px; color: #667085; background: #FCFDFE; }
        .drawing-panel svg { width: 92%; height: auto; }
        .drawing-label { position: absolute; right: 13px; bottom: 10px; color: #8A93A2; font-size: 14px; letter-spacing: .05em; }
        .claim-lines { padding-top: 3px; }
        .claim-title { margin-bottom: 16px; color: #707A8C; font-size: 14px; font-weight: 600; letter-spacing: .07em; }
        .claim-line { display: grid; grid-template-columns: 24px 1fr; gap: 8px; align-items: center; margin-bottom: 12px; }
        .claim-line span { width: 24px; height: 24px; display: grid; place-items: center; border-radius: 7px; background: #F1F3F6; color: #687285; font-size: 14px; }
        .claim-line i { display: block; height: 8px; border-radius: 99px; background: #DDE2E9; }
        .claim-line.active span { background: var(--blush-strong); color: var(--magenta); }
        .claim-line.active i { background: #E3A9C2; }
        .jurisdiction-chip { position: absolute; z-index: 4; display: grid; place-items: center; width: 68px; height: 36px; border-radius: 999px; border: 1px solid #E2C3D2; background: #fff; color: var(--magenta); box-shadow: 0 12px 30px rgba(31,38,50,.08); font-size: 14px; font-weight: 600; letter-spacing: .05em; }
        .dpma-chip { top: 28px; left: 30px; }
        .epo-chip { top: 26px; right: 28px; }
        .language-card, .review-card { position: absolute; z-index: 4; display: flex; align-items: center; gap: 10px; padding: 13px 15px; border: 1px solid #DFE4EB; border-radius: 18px; background: #fff; box-shadow: 0 18px 45px rgba(31,38,50,.12); }
        .language-card { left: 24px; bottom: 30px; }
        .review-card { right: 22px; bottom: 32px; }
        .language-code { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; background: var(--blush); color: var(--magenta); font-size: 14px; font-weight: 600; }
        .language-code.en { background: #F2F4F7; color: #556075; }
        .language-card > svg { color: #8C95A4; }
        .language-copy strong, .review-card strong { display: block; font-size: 14px; line-height: 1.3; }
        .language-copy span, .review-card span { display: block; margin-top: 3px; color: #7B8494; font-size: 14px; line-height: 1.3; }
        .review-icon { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 12px; background: var(--blush); color: var(--magenta); }
        .connector { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; stroke: #D7A8BD; stroke-width: 1.4; stroke-dasharray: 5 7; }

        /* Trust strip */
        .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { min-height: 88px; display: grid; grid-template-columns: repeat(4,1fr); align-items: center; }
        .trust-item { min-height: 42px; display: flex; align-items: center; justify-content: center; padding: 0 22px; border-right: 1px solid var(--line); color: #4B5669; text-align: center; font-size: 16px; font-weight: 600; }
        .trust-item:first-child { padding-left: 0; }
        .trust-item:last-child { border-right: 0; padding-right: 0; }

        /* Overview */
        .overview-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 84px; align-items: start; }
        .overview-grid .section-heading { margin: 0; }
        .overview-copy > p { color: var(--muted); }
        .context-list { margin-top: 30px; border-top: 1px solid var(--line); }
        .context-row { display: grid; grid-template-columns: 190px 1fr; gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .context-row strong { font-size: 16px; }
        .context-row span { color: var(--muted); font-size: 16px; }

        /* Language directions */
        .direction-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); overflow: hidden; border: 1px solid var(--line); border-radius: 30px; background: #fff; }
        .direction-panel { padding: 42px 40px; }
        .direction-panel:first-child { border-right: 1px solid var(--line); }
        .direction-label { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 22px; color: var(--magenta); font-size: 16px; font-weight: 600; }
        .direction-label span { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 11px; background: var(--blush); }
        .direction-panel p { color: var(--muted); }
        .simple-list { margin: 22px 0 0; padding: 0; list-style: none; }
        .simple-list li { position: relative; margin: 9px 0; padding-left: 20px; color: #465165; }
        .simple-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 8px; height: 2px; background: var(--magenta); }

        /* Jurisdiction */
        .jurisdiction-list { border-top: 1px solid var(--line); }
        .jurisdiction-row { display: grid; grid-template-columns: 260px minmax(0,1fr); gap: 52px; padding: 42px 0; border-bottom: 1px solid var(--line); }
        .jurisdiction-title { position: sticky; top: 28px; align-self: start; }
        .jurisdiction-title .office { margin-bottom: 12px; color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .08em; }
        .jurisdiction-title h3 { margin-bottom: 0; }
        .jurisdiction-copy p { color: var(--muted); }
        .deadline-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin: 24px 0; }
        .deadline-item { padding: 20px; border: 1px solid #E9D7DF; border-radius: 20px; background: #fff; }
        .deadline-item strong { display: block; margin-bottom: 8px; font-size: 16px; }
        .deadline-item span { color: var(--muted); font-size: 16px; }
        .boundary-note { margin-top: 24px; padding: 22px 24px; border: 1px solid #E6D3DC; border-radius: 20px; background: var(--blush); color: #443E46; font-size: 16px; }
        .boundary-note strong { color: var(--text); }

        /* EPO */
        .epo-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 76px; align-items: start; }
        .epo-grid .section-heading { margin: 0; }
        .epo-copy > p { color: var(--muted); }
        .epo-points { margin: 28px 0 0; border-top: 1px solid var(--line); }
        .epo-point { display: grid; grid-template-columns: 190px 1fr; gap: 26px; padding: 21px 0; border-bottom: 1px solid var(--line); }
        .epo-point strong { font-size: 16px; }
        .epo-point span { color: var(--muted); font-size: 16px; }
        .london-note { margin-top: 26px; padding: 24px 26px; border: 1px solid #E6D3DC; border-radius: 22px; background: var(--blush); }
        .london-note strong { display: block; margin-bottom: 7px; color: var(--text); font-size: 16px; }
        .london-note p { margin: 0; color: #443E46; }

        /* PCT */
        .pct-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 72px; align-items: start; }
        .pct-panel { padding: 34px; border: 1px solid var(--line); border-radius: 28px; background: #fff; }
        .pct-panel h3 { font-size: 22px; }
        .pct-panel p { color: var(--muted); }
        .pct-items { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 24px; margin-top: 20px; border-top: 1px solid var(--line); }
        .pct-items div { min-height: 56px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--line); color: #465165; font-size: 16px; }
        .pct-items i { width: 6px; height: 6px; flex: 0 0 auto; border-radius: 50%; background: var(--magenta); }

        /* Document matrix */
        .document-matrix { border-top: 1px solid var(--line); }
        .document-group { display: grid; grid-template-columns: 270px 1fr; gap: 40px; padding: 30px 0; border-bottom: 1px solid var(--line); }
        .document-group h3 { margin: 0; }
        .document-list { columns: 2; column-gap: 36px; margin: 0; padding: 0; list-style: none; }
        .document-list li { position: relative; break-inside: avoid; padding: 0 0 10px 18px; color: #4C5667; }
        .document-list li::before { content: ""; position: absolute; left: 0; top: .68em; width: 5px; height: 5px; border-radius: 50%; background: #B7BEC9; }

        /* Claims */
        .claims-grid { display: grid; grid-template-columns: minmax(0,.84fr) minmax(0,1.16fr); gap: 76px; align-items: start; }
        .claims-grid .section-heading { margin-bottom: 0; }
        .claims-stack { border-top: 1px solid #30394A; }
        .claims-row { padding: 27px 0; border-bottom: 1px solid #30394A; }
        .claims-row h3 { margin-bottom: 10px; color: #fff; font-size: 21px; }
        .claims-row p { margin-bottom: 0; }
        .claims-note { margin-top: 26px; padding: 20px 22px; border: 1px solid #3A4456; border-radius: 20px; background: #1B2332; color: #C9D0DD; }

        /* Terminology */
        .terms-grid { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 72px; align-items: start; }
        .terms-grid .section-heading { margin: 0; }
        .term-table { overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: #fff; }
        .term-row { display: grid; grid-template-columns: .9fr 1.1fr; }
        .term-row + .term-row { border-top: 1px solid var(--line); }
        .term-row div { padding: 15px 20px; font-size: 16px; }
        .term-row div:first-child { color: var(--text); font-weight: 600; background: #FCFCFD; border-right: 1px solid var(--line); }
        .term-row div:last-child { color: var(--muted); }
        .term-note { margin-top: 24px; color: var(--muted); }

        /* Prior art */
        .prior-grid { display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 72px; align-items: start; }
        .prior-grid .section-heading { margin: 0; }
        .research-use { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px 22px; margin-top: 28px; }
        .research-use div { display: flex; gap: 11px; align-items: flex-start; color: #465165; font-size: 16px; }
        .research-use i { width: 8px; height: 2px; margin-top: .75em; flex: 0 0 auto; background: var(--magenta); }
        .tier-list { border-top: 1px solid var(--line); }
        .tier-row { display: grid; grid-template-columns: 185px 1fr; gap: 28px; padding: 23px 0; border-bottom: 1px solid var(--line); }
        .tier-row h3 { margin: 0; font-size: 20px; }
        .tier-row p { margin: 0; color: var(--muted); }

        /* Prosecution */
        .prosecution-panel { display: grid; grid-template-columns: minmax(0,.75fr) minmax(0,1.25fr); overflow: hidden; border: 1px solid var(--line); border-radius: 30px; background: #fff; }
        .prosecution-heading { padding: 42px; background: var(--blush); }
        .prosecution-copy { padding: 42px; }
        .prosecution-copy p { color: var(--muted); }
        .material-cloud { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .material-cloud span { padding: 9px 13px; border: 1px solid #E3E7EE; border-radius: 999px; background: #F8F9FB; color: #505B6E; font-size: 16px; }

        /* Patent family */
        .family-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 70px; align-items: center; }
        .family-map { position: relative; min-height: 330px; padding: 42px; border: 1px solid #E8D3DD; border-radius: 30px; background: #fff; }
        .family-flow { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; align-items: center; margin-top: 30px; }
        .family-node { position: relative; min-height: 98px; display: grid; place-items: center; padding: 14px; border: 1px solid var(--line); border-radius: 20px; background: #FCFCFD; text-align: center; }
        .family-node strong { font-size: 18px; }
        .family-node span { color: var(--muted); font-size: 16px; }
        .family-node:not(:last-child)::after { content: "→"; position: absolute; right: -16px; z-index: 2; color: #A7AFBC; font-size: 18px; }
        .family-controls { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 26px; }
        .family-control { padding: 18px; border-radius: 18px; background: var(--blush); }
        .family-control strong { display: block; margin-bottom: 6px; font-size: 16px; }
        .family-control span { color: #685966; font-size: 16px; }
        .family-copy p { color: var(--muted); }

        /* Expertise */
        .expertise-list { border-top: 1px solid var(--line); }
        .expertise-row { display: grid; grid-template-columns: 56px minmax(240px,.72fr) minmax(0,1.28fr); gap: 26px; align-items: start; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .expertise-icon { width: 48px; height: 48px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 15px; background: #fff; color: var(--magenta); }
        .expertise-row h3 { margin: 6px 0 0; font-size: 21px; }
        .expertise-row p { margin: 6px 0 0; color: var(--muted); }

        /* AI */
        .ai-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 70px; align-items: start; }
        .ai-grid .section-heading { margin: 0; }
        .ai-columns { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); overflow: hidden; border: 1px solid var(--line); border-radius: 28px; background: #fff; }
        .ai-column { padding: 32px; }
        .ai-column:first-child { border-right: 1px solid var(--line); }
        .ai-column h3 { font-size: 21px; }
        .ai-column ul { margin: 18px 0 0; padding-left: 19px; color: #4D586A; }
        .ai-column li { margin: 8px 0; }

        /* Workflow */
        .workflow-grid { display: grid; grid-template-columns: 340px 1fr; gap: 64px; }
        .workflow-grid .section-heading { margin: 0; }
        .workflow-list { counter-reset: step; border-top: 1px solid #D9DDE5; }
        .workflow-row { counter-increment: step; display: grid; grid-template-columns: 48px 240px 1fr; gap: 24px; align-items: start; padding: 25px 0; border-bottom: 1px solid #D9DDE5; }
        .workflow-row::before { content: counter(step,decimal-leading-zero); padding-top: 4px; color: var(--magenta); font-size: 15px; font-weight: 600; }
        .workflow-row h3 { margin: 0; font-size: 20px; }
        .workflow-row p { margin: 0; color: var(--muted); }

        /* Security */
        .security-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .security-grid { min-height: 190px; display: grid; grid-template-columns: 72px minmax(0,1fr) 250px; gap: 28px; align-items: center; }
        .security-icon { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 18px; background: var(--blush); color: var(--magenta); }
        .security-grid h2 { margin-bottom: 12px; font-size: 28px; }
        .security-grid p { max-width: 760px; margin-bottom: 0; color: var(--muted); }
        .security-grid .text-link { justify-self: end; }

        /* Cost */
        .cost-grid { display: grid; grid-template-columns: minmax(0,.84fr) minmax(0,1.16fr); gap: 70px; align-items: start; }
        .factor-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; border-top: 1px solid #E2CBD6; }
        .factor-list div { min-height: 62px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid #E2CBD6; color: #4E4851; font-size: 16px; }
        .factor-list i { width: 7px; height: 7px; flex: 0 0 auto; border-radius: 50%; background: var(--magenta); }
        .quote-panel { padding: 38px; border: 1px solid #E6CAD6; border-radius: 28px; background: #fff; }
        .quote-panel h3 { font-size: 28px; }
        .quote-panel p { color: var(--muted); }
        .quote-list { columns: 2; column-gap: 28px; margin: 24px 0 0; padding: 0; list-style: none; }
        .quote-list li { position: relative; break-inside: avoid; padding: 0 0 13px 27px; color: #4F5868; }
        .quote-list li::before { content: "✓"; position: absolute; left: 0; top: 1px; color: var(--magenta); font-size: 14px; font-weight: 600; }

        /* FAQ */
        .faq-wrap { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; min-height: 76px; display: grid; grid-template-columns: 1fr 34px; gap: 18px; align-items: center; padding: 22px 0; border: 0; background: transparent; color: var(--text); text-align: left; cursor: pointer; font: inherit; }
        .faq-question span:first-child { font-size: 18px; font-weight: 600; line-height: 1.4; }
        .faq-toggle { width: 32px; height: 32px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--magenta); font-size: 22px; line-height: 1; }
        .faq-answer { max-width: 840px; padding: 0 48px 24px 0; color: var(--muted); font-size: 16px; }

        /* Resources */
        .resource-list { border-top: 1px solid var(--line); }
        .resource-row { display: grid; grid-template-columns: minmax(260px,.8fr) minmax(0,1.2fr) 210px; gap: 32px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--line); }
        .resource-row h3 { margin: 0; font-size: 20px; }
        .resource-row p { margin: 0; color: var(--muted); }
        .resource-row .text-link { justify-self: end; text-align: right; }

        /* Final CTA */
        .final-cta { padding: 88px 0; background: var(--blush); }
        .final-grid { display: grid; grid-template-columns: minmax(0,1.18fr) minmax(320px,.82fr); gap: 66px; align-items: center; }
        .final-cta h2 { max-width: 760px; }
        .final-cta p { max-width: 760px; color: #514A53; font-size: 18px; }
        .final-visual { position: relative; min-height: 250px; overflow: hidden; border: 1px solid #E4CAD6; border-radius: 28px; background: #fff; }
        .final-visual::before { content: ""; position: absolute; inset: 24px; border: 1px solid #E7D8DF; border-radius: 20px; }
        .final-doc { position: absolute; left: 38px; top: 44px; width: 184px; height: 152px; padding: 18px; border: 1px solid #E0E3E8; border-radius: 18px; background: #FCFCFD; transform: rotate(-3deg); }
        .final-doc strong { display: block; margin-bottom: 16px; color: var(--magenta); font-size: 14px; letter-spacing: .06em; }
        .final-doc i { display: block; height: 7px; margin-bottom: 10px; border-radius: 99px; background: #D9DEE6; }
        .final-doc i:nth-of-type(1) { width: 75%; background: #E2A6C0; }
        .final-doc i:nth-of-type(3) { width: 82%; }
        .final-badge { position: absolute; right: 34px; bottom: 34px; width: 118px; height: 118px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; border-radius: 50%; background: var(--burgundy); color: #fff; text-align: center; font-size: 14px; font-weight: 600; line-height: 1.25; letter-spacing: .04em; }
        .final-badge svg, .final-badge svg * { stroke: #fff !important; }

        @media (max-width: 1199px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.88fr); gap: 44px; }
          .patent-sheet { left: 40px; right: 38px; }
          .overview-grid, .claims-grid, .terms-grid, .prior-grid, .family-grid, .ai-grid, .cost-grid { gap: 48px; }
          .workflow-grid { grid-template-columns: 300px 1fr; gap: 44px; }
          .workflow-row { grid-template-columns: 44px 210px 1fr; gap: 20px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 84px 0; }
          .section.dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 76px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-copy { max-width: 780px; text-align: center; margin: 0 auto; }
          .hero-copy h1, .hero-copy .lead { margin-left: auto; margin-right: auto; }
          .hero-copy .cta-row, .hero-proof { justify-content: center; }
          .hero-art { min-height: 470px; }
          .trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .trust-item { min-height: 62px; border-bottom: 1px solid var(--line); }
          .trust-item:nth-child(even) { border-right: 0; }
          .trust-item:nth-child(n+3) { border-bottom: 0; }
          .overview-grid, .epo-grid, .pct-grid, .claims-grid, .terms-grid, .prior-grid, .family-grid, .ai-grid, .cost-grid, .final-grid { grid-template-columns: 1fr; gap: 42px; }
          .overview-grid > .section-heading, .epo-grid > .section-heading, .pct-grid > .section-heading, .terms-grid > .section-heading, .prior-grid > .section-heading,
          .family-copy .section-heading, .ai-grid > .section-heading, .dpma-heading { max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
          .direction-grid { grid-template-columns: 1fr; }
          .direction-panel { padding: 36px 32px; }
          .direction-panel:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .jurisdiction-row { grid-template-columns: 220px 1fr; gap: 36px; }
          .jurisdiction-title { position: static; }
          .document-group { grid-template-columns: 230px 1fr; }
          .prosecution-panel { grid-template-columns: 1fr; }
          .prosecution-heading { border-bottom: 1px solid #E8D6DF; }
          .expertise-row { grid-template-columns: 56px minmax(200px,.7fr) minmax(0,1.3fr); }
          .workflow-grid { grid-template-columns: 1fr; gap: 28px; }
          .workflow-grid .section-heading { max-width: 820px; margin-left: 0; margin-right: 0; text-align: left; }
          .workflow-row { grid-template-columns: 48px 220px 1fr; }
          .security-grid { grid-template-columns: 72px 1fr; padding-top: 34px; padding-bottom: 34px; }
          .security-grid .text-link { grid-column: 2; justify-self: start; }
          .resource-row { grid-template-columns: minmax(230px,.85fr) minmax(0,1.15fr); }
          .resource-row .text-link { grid-column: 2; justify-self: start; text-align: left; }
          .final-visual { max-width: 540px; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          .lead { font-size: 18px; }
          .hero { padding: 72px 0 64px; }
          .hero-grid { gap: 36px; }
          .cta-row { flex-direction: column; }
          .btn { width: 100%; min-height: 52px; }
          .hero-proof { display: grid; justify-items: center; gap: 12px; }
          .hero-art { min-height: 390px; border-radius: 24px; }
          .patent-sheet { top: 64px; left: 22px; right: 20px; min-height: 252px; }
          .sheet-topline { height: 48px; padding: 0 14px; }
          .sheet-body { grid-template-columns: 1fr; padding: 14px; }
          .drawing-panel { min-height: 165px; }
          .claim-lines { display: none; }
          .jurisdiction-chip { width: 64px; height: 34px; font-size: 14px; }
          .dpma-chip { left: 12px; top: 14px; }
          .epo-chip { right: 12px; top: 14px; }
          .language-card { left: 10px; bottom: 14px; padding: 9px 10px; }
          .language-copy { display: none; }
          .review-card { right: 10px; bottom: 14px; padding: 9px 10px; }
          .review-card span { display: none; }
          .review-card strong { font-size: 14px; }
          .language-code { width: 30px; height: 30px; }
          .review-icon { width: 30px; height: 30px; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-item { min-height: 56px; padding: 12px 0 !important; border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .trust-item:last-child { border-bottom: 0 !important; }
          .section-heading { margin-bottom: 36px; }
          .overview-grid { gap: 30px; }
          .overview-grid > .section-heading, .epo-grid > .section-heading, .pct-grid > .section-heading, .terms-grid > .section-heading, .prior-grid > .section-heading,
          .family-copy .section-heading, .ai-grid > .section-heading, .dpma-heading, .document-heading, .expertise-heading, .resources-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .workflow-grid .section-heading { text-align: left; margin-left: 0; margin-right: 0; }
          .cost-heading > h2, .cost-heading > .lead { text-align: center; margin-left: auto; margin-right: auto; }
          .context-row, .epo-point { grid-template-columns: 1fr; gap: 7px; padding: 20px 0; }
          .direction-grid { border-radius: 24px; }
          .direction-panel { padding: 28px 24px; }
          .jurisdiction-row { grid-template-columns: 1fr; gap: 18px; padding: 34px 0; }
          .deadline-grid { grid-template-columns: 1fr; }
          .pct-grid { gap: 28px; }
          .pct-panel { padding: 28px 24px; border-radius: 24px; }
          .pct-items { grid-template-columns: 1fr; }
          .document-group { grid-template-columns: 1fr; gap: 16px; padding: 27px 0; }
          .document-list { columns: 1; }
          .claims-grid { gap: 32px; }
          .claims-grid .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .claims-grid .section-heading .lead { margin-left: auto; margin-right: auto; }
          .terms-grid { gap: 28px; }
          .term-table { border-radius: 22px; }
          .term-row { grid-template-columns: 1fr; }
          .term-row div:first-child { border-right: 0; border-bottom: 1px solid #EEF0F3; }
          .term-row div { padding: 13px 16px; }
          .research-use { grid-template-columns: 1fr; }
          .tier-row { grid-template-columns: 1fr; gap: 7px; padding: 21px 0; }
          .prosecution-panel { border-radius: 24px; }
          .prosecution-heading, .prosecution-copy { padding: 28px 24px; }
          .family-grid { gap: 30px; }
          .family-map { min-height: auto; padding: 28px 22px; border-radius: 24px; }
          .family-flow { grid-template-columns: 1fr; gap: 22px; }
          .family-node:not(:last-child)::after { content: "↓"; right: 50%; bottom: -21px; top: auto; transform: translateX(50%); }
          .family-controls { grid-template-columns: 1fr; }
          .expertise-row { grid-template-columns: 52px 1fr; gap: 16px; }
          .expertise-row p { grid-column: 1 / -1; margin-top: 0; }
          .ai-columns { grid-template-columns: 1fr; border-radius: 24px; }
          .ai-column { padding: 28px 24px; }
          .ai-column:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .workflow-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .workflow-row p { grid-column: 2; }
          .security-grid { grid-template-columns: 1fr; gap: 18px; padding-top: 34px; padding-bottom: 34px; }
          .security-grid .text-link { grid-column: 1; }
          .security-grid h2 { font-size: 24px; }
          .factor-list { grid-template-columns: 1fr; }
          .quote-panel { padding: 28px 24px; border-radius: 24px; }
          .quote-panel h3 { font-size: 24px; }
          .quote-list { columns: 1; }
          .faq-question { grid-template-columns: 1fr 32px; }
          .faq-answer { padding-right: 0; }
          .resource-row { grid-template-columns: 1fr; gap: 11px; padding: 25px 0; }
          .resource-row .text-link { grid-column: 1; }
          .inline-links { display: grid; gap: 4px; }
          .text-link { align-items: flex-start; }
          .text-link svg { margin-top: 5px; }
          .final-cta { padding: 72px 0; }
          .final-grid { gap: 34px; }
          .final-cta h2, .final-cta p { text-align: center; }
          .final-visual { min-height: 220px; }
          .final-doc { left: 24px; top: 34px; width: 150px; height: 132px; }
          .final-badge { right: 20px; bottom: 24px; width: 106px; height: 106px; font-size: 14px; }
        }

        @media (max-width: 360px) {
          .hero-art { min-height: 360px; }
          .patent-sheet { left: 13px; right: 13px; }
          .language-card { left: 7px; }
          .review-card { right: 7px; }
          .final-visual { min-height: 260px; }
          .final-doc { left: 18px; top: 30px; width: 130px; }
          .final-badge { right: 14px; bottom: 22px; width: 96px; height: 96px; font-size: 14px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Germany &amp; European IP</p>
            <h1>German Patent Translation Services</h1>
            <p className="lead">
              Translate patent applications, claims, specifications, prior art, prosecution materials, and related intellectual property content between German and English with the technical precision patent work demands.
            </p>
            <p className="lead">
              Stepes supports German patent translation for DPMA-related applications, EPO proceedings, PCT and international patent programs, patent research, disputes, and global patent portfolios.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={URLS.quote}><span>Get a German Patent Translation Quote</span><Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href={URLS.contact}>Discuss a German Patent Project</a>
            </div>
            <div className="hero-proof">
              <span><Icon name="scales" size={19} /> DPMA &amp; EPO Patent Work</span>
              <span><Icon name="claims" size={19} /> English ↔ German Patent Claims</span>
              <span><Icon name="search" size={19} /> Prior Art &amp; Patent Families</span>
            </div>
          </div>
          <GermanPatentHeroArtwork />
        </div>
      </section>

      <section className="trust-strip" aria-label="German patent translation credentials">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 17100 Translation Quality</div>
          <div className="trust-item">ISO 9001 Quality Management</div>
          <div className="trust-item">Technical Subject-Matter Experts</div>
          <div className="trust-item">Secure IP Workflows</div>
        </div>
      </section>

      <section className="section">
        <div className="shell overview-grid">
          <div className="section-heading">
            <h2>German Patent Translation for Germany and International IP Programs</h2>
          </div>
          <div className="overview-copy">
            <p>
              German patent content appears across many stages of the intellectual property lifecycle. A company may need an English patent application translated into German for a German filing, a German patent translated into English for prior-art research, or consistent German terminology maintained across an international patent family.
            </p>
            <p>
              These projects do not all require the same translation workflow. A patent translation intended for attorney review or official filing may require controlled human translation, independent review, terminology validation, and final document QA. A German patent identified during an early prior-art search may instead require fast screening, a technical summary, or translation of selected claims and passages before a full translation is commissioned.
            </p>
            <p>
              Stepes aligns the translation approach with the document's purpose, technical field, language direction, risk level, and delivery requirements.
            </p>
            <div className="context-list">
              <div className="context-row"><strong>Filing &amp; Prosecution</strong><span>German patent applications, DPMA-related materials, EPO content, PCT work, claims, specifications, amendments, and prosecution documentation.</span></div>
              <div className="context-row"><strong>Research &amp; Analysis</strong><span>German-language prior art, patentability and FTO research, invalidity analysis, technical review, and competitor patent intelligence.</span></div>
              <div className="context-row"><strong>Patent Families</strong><span>English-German terminology, translation memory, reviewer decisions, and version consistency across related DE, EP, PCT, US, and other family members.</span></div>
            </div>
            <a className="text-link" href={URLS.patent}>Explore Patent Translation Services <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="section-heading center">
            <h2>English-to-German and German-to-English Patent Translation</h2>
            <p className="lead">
              German patent translation is a two-way discipline. Filing teams may need highly controlled English-to-German translation, while attorneys, researchers, and global IP teams frequently need German-to-English translation to understand prior art, patent families, technical disclosures, and competitor portfolios.
            </p>
          </div>
          <div className="direction-grid">
            <article className="direction-panel">
              <div className="direction-label"><span>EN</span><Icon name="arrow" size={18} /><span>DE</span></div>
              <h3>English-to-German Patent Translation</h3>
              <p>
                English-to-German patent translation can support German patent applications, claims and descriptions, prosecution materials, amendments, patent-family documentation, technical exhibits, and other intellectual property content.
              </p>
              <p>
                Defined terms, component names, process steps, numerical relationships, claim dependencies, figure references, and technical limitations should remain controlled throughout the document rather than translated sentence by sentence in isolation. German compound technical terminology also requires the translator to understand how individual components relate to the invention as a system.
              </p>
              <ul className="simple-list">
                <li>German patent applications and claims</li>
                <li>Descriptions, figures, and amendments</li>
                <li>German-language prosecution materials</li>
                <li>Related patent-family content</li>
              </ul>
            </article>
            <article className="direction-panel">
              <div className="direction-label"><span>DE</span><Icon name="arrow" size={18} /><span>EN</span></div>
              <h3>German-to-English Patent Translation</h3>
              <p>
                German-to-English patent translation supports international teams that need reliable access to German patents and technical publications for research, portfolio evaluation, litigation, R&amp;D, and business decisions.
              </p>
              <p>
                German patents may surface during patentability searches, freedom-to-operate analysis, invalidity research, competitor monitoring, due diligence, or patent-family analysis. Stepes supports everything from targeted translation of claims and selected passages to complete professional translation of full patents and supporting documents.
              </p>
              <ul className="simple-list">
                <li>German prior art and technical disclosures</li>
                <li>Patent-family and competitor review</li>
                <li>FTO, patentability, and invalidity research</li>
                <li>Dispute and due-diligence materials</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell">
          <div className="section-heading dpma-heading">
            <h2>German Patent Translation for DPMA Proceedings</h2>
            <p className="lead">
              The German Patent and Trade Mark Office administers national patent applications in Germany. When application materials originate in another language, the source language can materially affect the German translation timeline and project planning.
            </p>
          </div>
          <div className="jurisdiction-list">
            <article className="jurisdiction-row">
              <div className="jurisdiction-title">
                <div className="office">DPMA</div>
                <h3>German Filing Translation Requirements</h3>
              </div>
              <div className="jurisdiction-copy">
                <p>
                  Patent application documents handled by the DPMA ultimately need to be available in German. Applications initially filed in English or French generally receive a longer period for supplying the German translation than applications filed in other foreign languages.
                </p>
                <div className="deadline-grid">
                  <div className="deadline-item"><strong>English or French applications</strong><span>German translation is generally due within 12 months of filing, subject to a maximum of 15 months from the applicable priority date.</span></div>
                  <div className="deadline-item"><strong>Other foreign languages</strong><span>Applications in languages other than German, English, or French generally follow a shorter three-month German-translation period.</span></div>
                </div>
                <p>
                  Stepes can support patent claims, descriptions and specifications, abstracts, drawing text, amendments, prosecution correspondence, supporting technical documentation, and related patent-family content. Existing priority documents, terminology lists, related patents, and approved translations can be incorporated into the workflow to improve consistency.
                </p>
                <p>
                  German Patent Ordinance §14 also sets formal requirements for German translations of foreign-language documents: they must be certified by a lawyer or patent attorney or prepared by a publicly appointed translator. Timing rules differ by document category, so applicants should confirm the exact filing arrangement with patent counsel or their filing representative.
                </p>
              </div>
            </article>
          </div>
          <div className="boundary-note">
            <strong>Plan the translation around the actual filing.</strong> Patent-office requirements and deadlines can depend on the circumstances of an application. Stepes provides professional translation services, while filing strategy, deadline determination, legal interpretation, and formal submission remain with the applicant and its patent counsel or filing representative.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell epo-grid">
          <div className="section-heading">
            <h2>German Patent Translation for EPO and European Patent Work</h2>
            <p className="lead">
              German is one of the European Patent Office's three official languages, together with English and French. Its role in a European patent matter depends on the language of proceedings, the documents involved, and the jurisdictions in which translation is actually required.
            </p>
          </div>
          <div className="epo-copy">
            <p>
              A European patent application may also initially be filed in another language, subject to the applicable requirement to provide a translation into an EPO official language. The official language in which the application is filed or into which it is translated generally becomes the language of the proceedings.
            </p>
            <p>
              Stepes supports German-language applications and claims, German EPO documents translated into English for international teams, prosecution and examination materials, opposition-related content, technical exhibits, patent-family comparisons, and attorney or inventor review materials.
            </p>
            <div className="epo-points">
              <div className="epo-point"><strong>German as a language of proceedings</strong><span>Support patent applications and related materials where German is used within the EPO process.</span></div>
              <div className="epo-point"><strong>German-to-English review</strong><span>Make German EPO and patent-family content accessible to international counsel, inventors, and technical teams.</span></div>
              <div className="epo-point"><strong>Opposition &amp; prosecution</strong><span>Translate examination, opposition, amendment, technical, and review materials according to their intended use.</span></div>
            </div>
            <div className="london-note">
              <strong>Germany and the London Agreement</strong>
              <p>It is important not to assume that every European patent requires a German translation simply because protection is sought in Germany. Under the current framework, Germany generally does not require a separate Article 65(1) translation solely for post-grant validation of a European patent in Germany.</p>
            </div>
            <div className="boundary-note">
              <strong>Translation support is not filing advice.</strong> The applicable EPO or national requirements should be confirmed by the applicant and its patent counsel. Stepes carries out the language work based on project-specific filing and review instructions.
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell pct-grid">
          <div className="section-heading">
            <h2>PCT and German National-Phase Translation Support</h2>
            <p className="lead">
              International patent applications can create German translation requirements as an application moves from the PCT international phase into national or regional patent systems.
            </p>
            <a className="text-link" href={URLS.pctGuide}>PCT Patent Translation and National Phase Guide <Icon name="arrow" size={16} /></a>
          </div>
          <div className="pct-panel">
            <h3>Coordinate German Translation Within the Patent Family</h3>
            <p>
              For national or regional phase entry, the relevant patent office may require a complete translation when the international application is not already in an accepted official language. Stepes can support German national-phase content, claims and amended claims, descriptions, abstracts, priority and supporting documents, patent-family materials, and subsequent prosecution content.
            </p>
            <p>
              For complex international programs, terminology and translation memory can be coordinated across related PCT, EP, German, US, and other national family members. Filing routes and applicable translation requirements should be determined by the applicant's patent counsel or filing representative.
            </p>
            <div className="pct-items">
              {["International patent applications", "German national-phase content", "Claims and amended claims", "Descriptions and specifications", "Priority and supporting documents", "Related patent-family materials"].map((item) => <div key={item}><i aria-hidden="true" /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section dense">
        <div className="shell">
          <div className="section-heading document-heading">
            <h2>German Patent Documents We Translate</h2>
            <p className="lead">
              Stepes supports German patent translation across the intellectual property lifecycle, from application and prosecution materials to prior-art research, portfolio review, and dispute-related documentation.
            </p>
          </div>
          <div className="document-matrix">
            {documentGroups.map((group) => (
              <article className="document-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="document-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell claims-grid">
          <div className="section-heading">
            <h2>Precision for German Patent Claims and Specifications</h2>
            <p className="lead">
              Patent claims require unusually disciplined translation because individual words, dependencies, and technical relationships can carry significance throughout an application. Stepes approaches German patent claims as structured technical content rather than isolated sentences.
            </p>
          </div>
          <div>
            <div className="claims-stack">
              <article className="claims-row"><h3>Preserve Defined Terminology</h3><p>A component or concept introduced in an independent claim may appear repeatedly throughout dependent claims, the description, figures, and later amendments. Approved terminology should remain controlled across those references.</p></article>
              <article className="claims-row"><h3>Maintain Claim Relationships</h3><p>Translation must follow independent and dependent claim relationships, antecedent references, repeated technical limitations, alternatives, component relationships, and process sequences without flattening the structure of the invention.</p></article>
              <article className="claims-row"><h3>Control German Technical Terminology</h3><p>German engineering and scientific language frequently uses compound terms that encode relationships among components, materials, functions, and processes. The translator needs to understand those relationships before selecting consistent English or German terminology.</p></article>
              <article className="claims-row"><h3>Verify Numbers, Figures, and References</h3><p>Patent QA can cover numerical ranges, units, formulas, symbols, claim numbering, figure and drawing references, component reference numbers, tables, and structured content in addition to the translated text.</p></article>
              <article className="claims-row"><h3>Keep Claims and Descriptions Aligned</h3><p>Where corresponding concepts appear in the claims and description, terminology should remain consistent where appropriate. Related patent-family documents and previously approved translations can also be used as reference materials.</p></article>
            </div>
            <div className="claims-note">Stepes preserves linguistic and technical relationships for review by your IP professionals. Patent counsel remains responsible for legal interpretation, claim strategy, and decisions affecting scope of protection.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell terms-grid">
          <div className="section-heading">
            <h2>German Patent Terminology and Claim Consistency</h2>
            <p className="lead">
              The challenge is not simply finding an English equivalent for a German patent term. The larger task is choosing terminology that fits the document, jurisdiction, and technical context, then keeping that terminology consistent across claims, descriptions, prosecution documents, and related family members.
            </p>
            <p className="term-note">
              The examples shown here illustrate common patent terminology. The appropriate English rendering can vary based on context, document type, procedural setting, your terminology preferences, and existing patent-family terminology.
            </p>
            <div className="inline-links">
              <a className="text-link" href={URLS.terminology}>Terminology Management <Icon name="arrow" size={16} /></a>
              <a className="text-link" href={URLS.memory}>Translation Memory <Icon name="arrow" size={16} /></a>
            </div>
          </div>
          <div className="term-table" aria-label="Common German patent terminology">
            {germanTerms.map(([de, en]) => <div className="term-row" key={de}><div>{de}</div><div>{en}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell prior-grid">
          <div className="section-heading">
            <h2>German Prior Art Translation for Patent Research</h2>
            <p className="lead">
              A German patent does not have to be part of a German filing to become important to an international IP team. German-language patents, published applications, scientific materials, and technical disclosures can surface during patentability, novelty, freedom-to-operate, invalidity, competitive intelligence, technology landscaping, and portfolio due diligence.
            </p>
            <div className="research-use">
              {["Patentability and novelty", "Freedom-to-operate", "Invalidity research", "Competitor intelligence", "Technology landscaping", "Portfolio due diligence"].map((item) => <div key={item}><i aria-hidden="true" /><span>{item}</span></div>)}
            </div>
            <a className="text-link" href={URLS.priorArtGuide}>Prior Art Translation Guide <Icon name="arrow" size={16} /></a>
          </div>
          <div className="tier-list">
            {priorArtTiers.map(([title, text]) => <article className="tier-row" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="prosecution-panel">
            <div className="prosecution-heading">
              <Icon name="scales" size={28} />
              <h2>German Patent Prosecution, Opposition, and Dispute Translation</h2>
            </div>
            <div className="prosecution-copy">
              <p>
                Patent language continues to evolve after the initial application. Stepes supports German and English translation for prosecution, opposition, and dispute-related patent content, with the review standard matched to how the material will be used.
              </p>
              <p>
                Content translated for internal comprehension may require a different workflow from material prepared for attorney analysis, negotiation, formal submission, or evidentiary use. For complex matters, Stepes can work from attorney-provided terminology, matter-specific instructions, existing patent translations, and related technical documentation to maintain consistency across the record.
              </p>
              <div className="material-cloud" aria-label="German patent prosecution and dispute materials">
                {["Examination communications", "Responses & amendments", "Opposition materials", "Claim charts", "Technical expert materials", "Exhibits", "Patent-family comparisons", "Licensing & IP documents"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell family-grid">
          <div className="family-map" aria-hidden="true">
            <h3>One Invention. Multiple Patent-Family Documents.</h3>
            <div className="family-flow">
              <div className="family-node"><strong>PCT</strong><span>International application</span></div>
              <div className="family-node"><strong>EP</strong><span>European family member</span></div>
              <div className="family-node"><strong>DE</strong><span>German publication / filing</span></div>
              <div className="family-node"><strong>US</strong><span>Related national filing</span></div>
            </div>
            <div className="family-controls">
              <div className="family-control"><strong>Termbase</strong><span>Approved English-German terminology</span></div>
              <div className="family-control"><strong>TM</strong><span>Context-aware translation reuse</span></div>
              <div className="family-control"><strong>Review</strong><span>Attorney and SME feedback retained</span></div>
            </div>
          </div>
          <div className="family-copy">
            <div className="section-heading">
              <h2>Consistent English-German Terminology Across Patent Families</h2>
              <p className="lead">
                A single invention can generate years of related patent content. As PCT, EP, German, US, divisional, continuation, amendment, and prosecution materials evolve, terminology can gradually drift across documents and languages.
              </p>
            </div>
            <p>
              Stepes helps organizations manage English-German patent terminology through reusable language assets and controlled review. Approved translations for defined terms, component names, processes, chemical or biological terminology, abbreviations, and other recurring concepts can be recorded and referenced across projects.
            </p>
            <p>
              Translation memory can identify matching or similar content across related applications, recurring background descriptions, abstracts, amendments, and portfolio documentation. Previous translations are not reused blindly: claim context, technical meaning, amendments, and jurisdiction-specific wording still need to be evaluated.
            </p>
            <p>
              Feedback from your patent counsel, engineers, inventors, and reviewers can also be incorporated into subsequent projects so established terminology decisions do not have to be rediscovered with every filing.
            </p>
          </div>
        </div>
      </section>

      <section className="section dense">
        <div className="shell">
          <div className="section-heading expertise-heading">
            <h2>Technical Expertise for German Patents</h2>
            <p className="lead">
              Patent translation often requires the translator to understand the invention before the language can be translated precisely. Stepes matches German patent content with linguists and subject-matter resources appropriate to the technical field.
            </p>
          </div>
          <div className="expertise-list">
            {expertise.map(([icon, title, text]) => <article className="expertise-row" key={title}><div className="expertise-icon"><Icon name={icon} size={24} /></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <a className="text-link" href={URLS.technical}>Technical Translation Services <Icon name="arrow" size={16} /></a>
        </div>
      </section>

      <section className="section soft">
        <div className="shell ai-grid">
          <div className="section-heading">
            <h2>AI-Assisted German Patent Translation With Human Expert Control</h2>
            <p className="lead">
              AI translation can improve speed and scalability for some patent workflows, but the appropriate level of human involvement depends on the purpose and risk of the content. The goal is to apply the right combination of technology, technical expertise, and professional review to each document.
            </p>
            <a className="text-link" href={URLS.aiPatentGuide}>AI Patent Translation Guide <Icon name="arrow" size={16} /></a>
          </div>
          <div className="ai-columns">
            <article className="ai-column">
              <h3>Appropriate AI-Supported Uses</h3>
              <ul>
                <li>German prior-art screening</li>
                <li>Large-document triage</li>
                <li>Terminology extraction</li>
                <li>Patent-family comparison</li>
                <li>Repetitive portfolio content</li>
                <li>Automated quality checks</li>
              </ul>
            </article>
            <article className="ai-column">
              <h3>Human-Centered Higher-Risk Uses</h3>
              <ul>
                <li>Filing-grade claims and specifications</li>
                <li>Prosecution documents</li>
                <li>Certified translations</li>
                <li>Opposition and dispute materials</li>
                <li>Decision-critical prior art</li>
                <li>Sensitive unpublished inventions</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell workflow-grid">
          <div className="section-heading">
            <h2>A German Patent Translation Workflow Built Around Intended Use</h2>
            <p className="lead">
              Stepes structures German patent translation around the actual project rather than applying the same process to every patent document.
            </p>
          </div>
          <div className="workflow-list">
            {workflowSteps.map(([title, text]) => <article className="workflow-row" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="security-band">
        <div className="shell security-grid">
          <div className="security-icon"><Icon name="shield" size={26} /></div>
          <div>
            <h2>Secure Handling of Unpublished German Patent Content</h2>
            <p>
              Patent translation may involve unpublished inventions, confidential R&amp;D, competitive product information, pending legal matters, and other sensitive intellectual property. Stepes supports controlled project access, confidentiality practices, secure file handling, and centralized workflow management for enterprise and professional IP content.
            </p>
          </div>
          <a className="text-link" href={URLS.security}>Stepes Translation Security <Icon name="arrow" size={16} /></a>
        </div>
      </section>

      <section className="section blush">
        <div className="shell cost-grid">
          <div className="cost-heading">
            <h2>What Determines German Patent Translation Cost and Turnaround?</h2>
            <p className="lead">
              German patent translation is scoped according to the actual document and its intended use rather than a single fixed rate or standard turnaround.
            </p>
            <div className="factor-list">
              {["English-to-German or German-to-English direction", "Document length", "Technical subject matter", "Claim and specification complexity", "Intended use", "DPMA, EPO, PCT, research, or dispute context", "Required review level", "Certification requirements", "File quality and format", "Drawings, formulas, and tables", "Patent-family translation leverage", "Delivery schedule and rush requirements"].map((factor) => <div key={factor}><i aria-hidden="true" /><span>{factor}</span></div>)}
            </div>
          </div>
          <aside className="quote-panel">
            <h3>What We Need to Quote Your German Patent Translation</h3>
            <p>Providing a few project details helps Stepes recommend the appropriate workflow, review level, schedule, and estimate.</p>
            <ul className="quote-list">
              {["Source files or patent publication/application number", "Source and target languages", "Intended use", "Relevant DPMA, EPO, or PCT context", "Target jurisdiction when applicable", "Required delivery date", "Certification requirements", "Related patent-family documents", "Existing German or English translations", "Approved terminology or glossaries", "Attorney or reviewer instructions", "Required final file format"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p>If you are unsure which workflow is appropriate, send the documents and intended use. Our team can help determine the translation approach before production begins.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={URLS.quote}><span>Upload Your Patent Documents</span><Icon name="upload" size={18} /></a>
              <a className="btn btn-secondary" href={URLS.contact}>Discuss Your Project</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="shell">
          <div className="section-heading center">
            <h2>German Patent Translation FAQs</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `german-patent-faq-${index}`;
              return (
                <div className="faq-item" key={faq.q}>
                  <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    <span>{faq.q}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="faq-answer" id={answerId}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="section-heading resources-heading">
            <p className="eyebrow">Patent Translation Guidance</p>
            <h2>German Patent Translation Within a Global IP Program</h2>
            <p className="lead">
              German patent translation is often one part of a larger international intellectual property strategy. Explore broader patent services and practical guidance for international filing, claims, prior art, AI-assisted research, and German-language content.
            </p>
          </div>
          <div className="resource-list">
            {resources.map(([title, text, href, label]) => <article className="resource-row" key={title}><h3>{title}</h3><p>{text}</p><a className="text-link" href={href}>{label} <Icon name="arrow" size={16} /></a></article>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-grid">
          <div>
            <h2>Translate German Patent Content With Technical Precision</h2>
            <p>
              Whether you need an English patent translated into German for an IP filing, a German patent translated into English for prior-art research, or consistent terminology maintained across an international patent family, Stepes can build a translation workflow around your technical field, intended use, and delivery requirements.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={URLS.quote}><span>Get a German Patent Translation Quote</span><Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href={URLS.contact}>Talk to a Patent Translation Specialist</a>
            </div>
          </div>
          <div className="final-visual" aria-hidden="true">
            <div className="final-doc"><strong>DE ↔ EN PATENT</strong><i /><i /><i /><i /><i /></div>
            <div className="final-badge"><Icon name="check" size={19} /><span>CLAIMS<br />TERMS<br />REFERENCES</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
