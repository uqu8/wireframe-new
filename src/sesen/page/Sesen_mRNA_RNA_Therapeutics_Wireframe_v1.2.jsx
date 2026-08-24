import React, { useState } from "react";

const ROOT = "sesen-rna-page";

const urls = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  genomicsGene: "https://www.sesen.com/genomics-gene-therapy-translation-services/",
  oncology: "https://www.sesen.com/oncology-translation-services/",
  rareDisease: "https://www.sesen.com/rare-disease-translation-services/",
  clinicalTrial: "https://www.sesen.com/clinical-trial-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  ib: "https://www.sesen.com/investigators-brochure-translation-services/",
  icf: "https://www.sesen.com/informed-consent-form-translation-services/",
  ecoa: "https://www.sesen.com/ecoa-translation-services/",
  csr: "https://www.sesen.com/clinical-study-report-translation-services/",
  cmc: "https://www.sesen.com/cmc-document-translation-services/",
  sop: "https://www.sesen.com/sop-translation-services/",
  ectd: "https://www.sesen.com/ectd-ctd-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  regulatorySubmission: "https://www.sesen.com/regulatory-submission-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  pls: "https://www.sesen.com/plain-language-summary-translation-services/",
  biotechnology: "https://www.sesen.com/biotechnology-translation-services/",
  cellGene: "https://www.sesen.com/cell-gene-therapy-translation-services/"
};

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="icon-arrow">
    <path d="M4 10h10M10 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <path d="M5 12.5l4.2 4.2L19 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoleculeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <circle cx="6" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="18" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8l7.8-1.5M7.2 10l6.6 6.4M17 8l-1.2 7.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <path d="M7 3.5h7l3 3V20H7z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 3.5v4h4M9.5 11h5M9.5 14h5M9.5 17h3.3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <path d="M12 3.5l7 2.8v5.2c0 4.2-2.5 7.4-7 9-4.5-1.6-7-4.8-7-9V6.3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8.7 12.1l2.1 2.1 4.6-4.8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.6 8.6 12s1.2 6.2 3.4 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.8 19c.6-3.1 2.4-5 5.2-5s4.7 1.9 5.2 5M14.4 15.2c.7-.8 1.6-1.2 2.8-1.2 2 0 3.2 1.3 3.7 3.7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BeakerIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="line-icon">
    <path d="M9 3.5h6M10 3.5v5L5.6 17a2.2 2.2 0 0 0 2 3.2h8.8a2.2 2.2 0 0 0 2-3.2L14 8.5v-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.2 15h7.6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconTile = ({ children }) => <div className="icon-tile">{children}</div>;

const Eyebrow = ({ children, light = false }) => (
  <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>
);

const EditorialLink = ({ href, children, ariaLabel }) => (
  <a className="editorial-link" href={href} aria-label={ariaLabel || undefined}>
    <span>{children}</span><Arrow />
  </a>
);

const CTAButton = ({ href, secondary = false, children }) => (
  <a className={`cta-button ${secondary ? "cta-secondary" : "cta-primary"}`} href={href}>
    <span>{children}</span><Arrow />
  </a>
);

const HeroArt = () => (
  <div className="hero-art" aria-label="Illustration of an RNA sequence moving through delivery into a cell and biological response">
    <svg viewBox="0 0 620 520" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="rnaSoft" x1="0" x2="1">
          <stop offset="0" stopColor="#EAF0FF" />
          <stop offset="1" stopColor="#F7F9FD" />
        </linearGradient>
      </defs>
      <circle cx="342" cy="245" r="198" fill="#F5F7FF" />
      <circle cx="342" cy="245" r="150" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M95 94c48 42 48 88 0 130s-48 88 0 130 48 88 0 130" fill="none" stroke="#17264D" strokeWidth="4" strokeLinecap="round" />
      <path d="M143 94c-48 42-48 88 0 130s48 88 0 130-48 88 0 130" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
      {[118,160,202,244,286,328,370,412].map((y, i) => (
        <line key={i} x1={i % 2 === 0 ? 104 : 114} y1={y} x2={i % 2 === 0 ? 134 : 124} y2={y + 8} stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
      ))}
      <circle cx="285" cy="200" r="70" fill="url(#rnaSoft)" stroke="#4B6FD8" strokeWidth="3" />
      <circle cx="263" cy="181" r="18" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2" />
      <circle cx="308" cy="183" r="14" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2" />
      <circle cx="292" cy="220" r="19" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2" />
      <circle cx="252" cy="222" r="11" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2" />
      <path d="M340 204c48 0 66 28 94 48" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" />
      <path d="M423 241l15 12-18 8" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M466 150c75 26 101 101 70 164-31 63-112 90-176 58-36-18-62-49-72-85" fill="#FFFFFF" stroke="#17264D" strokeWidth="3" />
      <circle cx="439" cy="268" r="52" fill="#F5F7FF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M415 271c18-29 40-25 51-2 8 17 20 22 31 4" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
      <path d="M387 333c30 9 53 3 76-16" fill="none" stroke="#6F8BE1" strokeWidth="2" strokeDasharray="5 7" />
      <rect x="372" y="67" width="160" height="82" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <rect x="391" y="88" width="63" height="7" rx="3.5" fill="#17264D" opacity=".92" />
      <rect x="391" y="105" width="108" height="6" rx="3" fill="#68758B" opacity=".55" />
      <rect x="391" y="121" width="92" height="6" rx="3" fill="#68758B" opacity=".4" />
      <circle cx="514" cy="91" r="8" fill="#4B6FD8" />
      <rect x="375" y="395" width="168" height="78" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M396 420h46M396 437h84M396 454h65" fill="none" stroke="#68758B" strokeWidth="6" strokeLinecap="round" opacity=".55" />
      <circle cx="515" cy="430" r="16" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
      <path d="M507 430h16M515 422v16" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
      <path d="M166 246h49" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" />
      <path d="M206 237l12 9-12 9" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <div className="hero-art-label label-rna">RNA Sequence</div>
    <div className="hero-art-label label-delivery">Delivery</div>
    <div className="hero-art-label label-cell">Cell</div>
    <div className="hero-art-label label-response">Biological Response</div>
  </div>
);

const SectionHeader = ({ eyebrow, title, intro, align = "center", technical = false }) => (
  <div className={`section-header section-header-${align}${technical ? " section-header-technical" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>
);

const trustItems = [
  ["150+ Languages", "Global support for multilingual life sciences programs", <GlobeIcon key="g" />],
  ["ISO-Certified Quality", "ISO 17100 · ISO 9001 · ISO 13485", <ShieldIcon key="s" />],
  ["Human Quality Review", "Specialized life sciences linguists and independent review", <PeopleIcon key="p" />],
  ["Terminology Governance", "Controlled RNA, clinical, CMC, and regulatory terminology", <DocumentIcon key="d" />],
  ["Secure Infrastructure", "Controlled workflows for confidential scientific and clinical content", <ShieldIcon key="ss" />]
];

const modalities = [
  {
    title: "mRNA Therapeutics",
    text: "Messenger RNA can provide cells with instructions to produce proteins or antigens for therapeutic purposes. Programs may span infectious-disease vaccines, therapeutic vaccines, cancer immunotherapies, protein expression approaches, delivery technologies, clinical development, and regulatory communication."
  },
  {
    title: "Personalized mRNA & Neoantigen Therapies",
    text: "Individualized mRNA approaches can connect genomic or tumor information with patient-specific therapeutic design, introducing specialized terminology around sequencing, mutations, neoantigens, biomarkers, constructs, manufacturing, clinical workflows, and patient communication."
  },
  {
    title: "siRNA & RNA Interference",
    text: "Small interfering RNA and related RNA interference approaches regulate gene expression through sequence-specific mechanisms. Translation may involve targets, RNAi mechanisms, delivery systems, pharmacology, clinical development, safety information, and regulatory content."
  },
  {
    title: "Antisense Oligonucleotides",
    text: "Antisense oligonucleotide therapies can target specific RNA sequences to alter RNA processing or downstream protein expression. Their documentation can span genetic disease research, sequence-specific terminology, pharmacology, bioanalysis, clinical studies, CMC, and regulatory content."
  },
  {
    title: "Emerging RNA Medicines",
    text: "RNA science continues to expand into RNA editing, microRNA-based approaches, next-generation delivery systems, self-amplifying RNA, and other developing therapeutic platforms. Sesen helps teams establish multilingual terminology that can evolve with the science."
  }
];

const lifecycle = [
  ["01", "Research & Discovery", "Targets, molecular mechanisms, RNA constructs, assays, biomarkers, and early scientific findings."],
  ["02", "Preclinical Development", "Pharmacology, toxicology, biodistribution, bioanalytical, and other nonclinical documentation."],
  ["03", "CMC & Manufacturing", "Manufacturing, analytical control, characterization, formulation, delivery, specifications, stability, and quality."],
  ["04", "Clinical Development", "Protocols, investigator materials, clinical systems, site documentation, assessments, safety updates, and patient content."],
  ["05", "Regulatory Submission", "Submission content, health authority correspondence, CTD/eCTD documentation, amendments, and responses."],
  ["06", "Safety & Pharmacovigilance", "Adverse-event, safety, risk, and pharmacovigilance content aligned with the clinical program."],
  ["07", "Medical Affairs & Launch", "Scientific, HCP, educational, labeling, and launch-related communication."],
  ["08", "Patient Communication", "Consent, education, results, treatment information, and other patient-facing materials."],
];

const terminologySteps = [
  ["Target / Gene", "Genes, targets, mutations, pathways, and related molecular concepts."],
  ["RNA Construct", "Sequence design, constructs, modifications, and product-specific concepts."],
  ["Mechanism of Action", "Technical mechanisms across research, clinical, regulatory, and medical communication."],
  ["Delivery Technology", "Formulations, conjugates, lipid nanoparticles, delivery systems, and administration."],
  ["Biomarker / Assay", "Biomarkers, analytical methods, assay terminology, thresholds, and measurement concepts."],
  ["Clinical Endpoint", "Endpoints across protocols, clinical systems, reports, regulatory content, and scientific communication."],
  ["Regulatory Terminology", "Approved product, clinical, CMC, safety, and health-authority language."],
  ["Patient Explanation", "Patient-appropriate language for consent, education, and plain-language communication."]
];

const qaSteps = [
  ["Specialized Linguist Selection", "Professional native linguists are matched according to language pair, content type, scientific or clinical subject matter, intended use, and project requirements."],
  ["Terminology Management", "Approved terminology, product names, targets, biomarkers, assays, clinical concepts, CMC language, and customer-preferred usage can be established and reused consistently."],
  ["Translation Memory", "Previously translated and approved content can be identified and reused where appropriate across related documents, versions, and recurring updates."],
  ["Independent Review", "Bilingual review examines meaning, terminology, completeness, fluency, intended audience, and contextual accuracy."],
  ["Technology-Assisted QA", "Automated and AI-assisted checks can help identify potential issues involving numbers, terminology, consistency, omissions, formatting, and repeated content for human attention."],
  ["Final Human Quality Control", "Human quality control remains the final checkpoint for regulated, scientific, clinical, and patient-facing content."],
  ["Version-Aware Delivery", "Updated documents, protocol amendments, submission revisions, safety changes, and recurring content can be managed against existing language assets."]
];

const faqItems = [
  ["What are mRNA and RNA therapeutics translation services?", "mRNA and RNA therapeutics translation services provide specialized multilingual support for the scientific, CMC, clinical, regulatory, safety, medical, and patient-facing content associated with RNA-based medicines. This can include documentation for mRNA therapeutics, personalized mRNA approaches, RNA interference and siRNA, antisense oligonucleotides, and other RNA-based therapeutic platforms."],
  ["What RNA therapeutic modalities can Sesen support?", "Sesen can support multilingual documentation associated with mRNA therapeutics, personalized mRNA and neoantigen approaches, siRNA and RNA interference, antisense oligonucleotides, and emerging RNA technologies. The workflow is matched to the document type, scientific subject matter, audience, regulatory use, and target languages."],
  ["Does Sesen translate documents for mRNA cancer therapies?", "Yes. Sesen supports oncology-related multilingual content including clinical protocols, investigator's brochures, informed consent forms, biomarker and scientific documentation, CMC content, regulatory submissions, safety materials, clinical study reports, medical affairs content, and patient communication."],
  ["Can Sesen support RNA therapeutics for rare and genetic diseases?", "Yes. Sesen supports multilingual rare-disease documentation spanning scientific research, clinical development, informed consent, patient communication, regulatory submissions, safety content, and other materials associated with specialized therapeutic programs."],
  ["What CMC documents can Sesen translate for RNA therapeutics?", "Sesen translates CMC content including manufacturing process descriptions, analytical methods, specifications, characterization documentation, stability materials, validation documentation, formulation and delivery-system content, quality records, SOPs, and CTD/eCTD Module 3 materials."],
  ["How does Sesen maintain RNA terminology across documents?", "Sesen can establish project-specific glossaries and terminology resources covering product terminology, targets, genes, mutations, biomarkers, assays, mechanisms of action, delivery technologies, clinical endpoints, CMC terms, and regulatory language. Translation memory, approved references, reviewer decisions, and previous translations can then support continuity as documents evolve."],
  ["Can Sesen support an entire multilingual RNA development program?", "Yes. Sesen can support individual documents or coordinated multilingual programs spanning research, preclinical documentation, CMC, clinical trials, regulatory submissions, pharmacovigilance, medical affairs, and patient communication."],
  ["Does Sesen use AI for RNA therapeutic translation?", "Sesen uses technology to support professional translation workflows, including translation memory, terminology tools, automated checks, and AI-assisted quality assurance where appropriate. For specialized scientific, regulated, clinical, and patient-facing content, professional human linguists and reviewers remain responsible for contextual judgment and final multilingual quality."],
  ["What languages does Sesen support?", "Sesen provides life sciences translation and localization in more than 150 languages, supporting regional and global development programs across North America, Europe, Asia-Pacific, Latin America, and other international markets."],
  ["How is RNA therapeutics translation different from general biotechnology translation?", "RNA therapeutic content often combines interconnected terminology involving sequences, genes, molecular targets, therapeutic constructs, delivery technologies, analytical methods, biomarkers, manufacturing, clinical endpoints, and regulatory evidence. Because those concepts may move through many documents, effective RNA translation requires both scientific subject-matter understanding and strong cross-document terminology governance."]
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {faqItems.map(([q, a], i) => {
        const expanded = open === i;
        return (
          <div className="faq-item" key={q}>
            <button className="faq-question" onClick={() => setOpen(expanded ? -1 : i)} aria-expanded={expanded}>
              <span>{q}</span>
              <span className="faq-symbol" aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            {expanded && <div className="faq-answer"><p>{a}</p></div>}
          </div>
        );
      })}
    </div>
  );
}

export default function SesenMRNARNAWireframe() {
  return (
    <main className={ROOT}>
      <style>{`
        .${ROOT} {
          --sesen-blue:#4B6FD8;
          --sesen-blue-dark:#3659BB;
          --sesen-deep:#253F8F;
          --sesen-mid:#6F8BE1;
          --sesen-soft:#EAF0FF;
          --sesen-pale:#F5F7FF;
          --sesen-navy:#17264D;
          --sesen-ink:#111827;
          --sesen-body:#46546D;
          --sesen-muted:#68758B;
          --sesen-border:#DDE4F2;
          --sesen-divider:#E9EEF8;
          --sesen-section:#F7F9FD;
          --sesen-white:#FFFFFF;
          --sesen-light-blue:#C8D6FF;
          color:var(--sesen-body);
          background:#fff;
          font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size:16px;
          line-height:1.68;
          overflow-x:hidden;
        }
        .${ROOT} * { box-sizing:border-box; }
        .${ROOT} a { color:inherit; }
        .${ROOT} img, .${ROOT} svg { max-width:100%; }
        .${ROOT} .shell { width:min(1280px, calc(100% - 112px)); margin:0 auto; min-width:0; }
        .${ROOT} section { position:relative; }
        .${ROOT} h1, .${ROOT} h2, .${ROOT} h3 { font-family:"Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; color:var(--sesen-navy); margin:0; font-weight:500; }
        .${ROOT} h1 { font-size:48px; line-height:1.3; letter-spacing:-.5px; }
        .${ROOT} h2 { font-size:36px; line-height:1.3; letter-spacing:normal; }
        .${ROOT} h3 { font-size:23px; line-height:1.3; }
        .${ROOT} p { margin:0; color:var(--sesen-body); font-size:16px; line-height:1.72; }
        .${ROOT} .lead { font-size:19px; line-height:1.65; color:#293954; }
        .${ROOT} .eyebrow { margin:0 0 16px; color:var(--sesen-blue-dark); font-family:Inter, ui-sans-serif, system-ui, sans-serif; font-size:11px !important; font-weight:700 !important; line-height:1.35 !important; letter-spacing:.15em !important; text-transform:uppercase !important; }
        .${ROOT} .eyebrow-light { color:var(--sesen-light-blue); }
        .${ROOT} .section-header { max-width:820px; margin:0 auto 48px; }
        .${ROOT} .section-header-center { text-align:center; }
        .${ROOT} .section-header-left { text-align:left; margin-left:0; }
        .${ROOT} .mobile-heading-center, .${ROOT} .mobile-heading-left { min-width:0; }
        .${ROOT} .section-intro { margin-top:18px; font-size:18px; line-height:1.7; }
        .${ROOT} .section-pad { padding:96px 0; }
        .${ROOT} .section-pad-dense { padding:80px 0; }
        .${ROOT} .soft-bg { background:var(--sesen-section); }
        .${ROOT} .pale-bg { background:var(--sesen-pale); }
        .${ROOT} .blue-bg { background:var(--sesen-deep); }
        .${ROOT} .blue-bg h2, .${ROOT} .blue-bg h3, .${ROOT} .blue-bg p { color:#fff; }
        .${ROOT} .blue-bg .muted-on-dark { color:#D9E3FF; }
        .${ROOT} .cta-row { display:flex; flex-wrap:wrap; gap:12px; margin-top:28px; }
        .${ROOT} .cta-button { min-height:50px; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:0 25px; border-radius:999px; text-decoration:none; font-size:13px; line-height:1; font-weight:700; letter-spacing:.05em; text-transform:uppercase; border:1px solid transparent; transition:background .2s ease, border-color .2s ease, transform .2s ease; }
        .${ROOT} .cta-button:hover { transform:translateY(-1px); }
        .${ROOT} .cta-button:focus-visible, .${ROOT} .editorial-link:focus-visible, .${ROOT} .faq-question:focus-visible { outline:3px solid rgba(75,111,216,.35); outline-offset:3px; }
        .${ROOT} .cta-primary { background:var(--sesen-blue); color:#fff; }
        .${ROOT} .cta-primary:hover { background:var(--sesen-blue-dark); }
        .${ROOT} .cta-secondary { background:#fff; color:var(--sesen-ink); border-color:#C9D4EA; }
        .${ROOT} .cta-secondary:hover { background:var(--sesen-soft); border-color:#AFC0E8; }
        .${ROOT} .icon-arrow { width:18px; height:18px; flex:0 0 18px; }
         .${ROOT} .editorial-link { display:inline-flex; align-items:center; gap:8px; color:var(--sesen-blue-dark); text-decoration:none; font-size:14px; line-height:1.45; font-weight:700; margin-top:16px; overflow-wrap:anywhere; }
        .${ROOT} .editorial-link:hover span { text-decoration:underline; text-underline-offset:3px; }
        .${ROOT} .hero { padding:94px 0 84px; background:linear-gradient(180deg, #fff 0%, #fff 72%, #FBFCFF 100%); }
        .${ROOT} .hero-grid { display:grid; grid-template-columns:minmax(0,1.03fr) minmax(440px,.97fr); gap:68px; align-items:center; }
        .${ROOT} .hero-copy { max-width:700px; min-width:0; }
        .${ROOT} .hero-copy .lead { margin-top:22px; max-width:670px; }
        .${ROOT} .hero-support { margin-top:15px; max-width:650px; }
        .${ROOT} .hero-art { position:relative; min-width:0; width:100%; max-width:590px; margin-left:auto; }
        .${ROOT} .hero-art svg { display:block; width:100%; height:auto; }
        .${ROOT} .hero-art-label { position:absolute; padding:7px 11px; border:1px solid var(--sesen-border); border-radius:999px; background:rgba(255,255,255,.94); color:var(--sesen-navy); font-size:12px; line-height:1.2; font-weight:600; box-shadow:0 8px 24px rgba(23,38,77,.06); white-space:nowrap; }
        .${ROOT} .label-rna { left:0; top:15%; }
        .${ROOT} .label-delivery { left:35%; top:24%; }
        .${ROOT} .label-cell { right:9%; top:42%; }
        .${ROOT} .label-response { right:4%; bottom:6%; }
        .${ROOT} .trust-band { border-top:1px solid var(--sesen-divider); border-bottom:1px solid var(--sesen-divider); background:#fff; }
        .${ROOT} .trust-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); }
        .${ROOT} .trust-item { padding:26px 22px; min-width:0; }
        .${ROOT} .trust-item + .trust-item { border-left:1px solid var(--sesen-divider); }
        .${ROOT} .trust-icon-title { display:flex; gap:12px; align-items:flex-start; }
        .${ROOT} .trust-item strong { display:block; color:var(--sesen-navy); font-size:15px; line-height:1.35; }
        .${ROOT} .trust-item p { margin-top:6px; font-size:14px; line-height:1.55; color:var(--sesen-muted); }
        .${ROOT} .line-icon { width:22px; height:22px; color:var(--sesen-blue-dark); flex:0 0 22px; }
        .${ROOT} .icon-tile { width:44px; height:44px; border-radius:12px; background:var(--sesen-soft); display:grid; place-items:center; color:var(--sesen-blue-dark); flex:0 0 44px; }
        .${ROOT} .intro-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:72px; align-items:start; }
        .${ROOT} .intro-heading { position:sticky; top:28px; }
        .${ROOT} .intro-copy { display:grid; gap:20px; }
        .${ROOT} .principles { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0; margin-top:22px; border-top:1px solid var(--sesen-divider); border-bottom:1px solid var(--sesen-divider); }
        .${ROOT} .principle { padding:24px 26px 24px 0; min-width:0; }
        .${ROOT} .principle:nth-child(2n) { padding-left:28px; border-left:1px solid var(--sesen-divider); }
        .${ROOT} .principle:nth-child(n+3) { border-top:1px solid var(--sesen-divider); }
        .${ROOT} .principle strong { color:var(--sesen-navy); display:block; margin-bottom:7px; font-size:16px; }
        .${ROOT} .modality-wrap { display:grid; grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr); gap:34px; align-items:stretch; }
        .${ROOT} .modality-feature { padding:42px; border-radius:30px; background:#fff; border:1px solid var(--sesen-border); box-shadow:0 18px 50px rgba(23,38,77,.05); }
        .${ROOT} .modality-feature h3 { font-size:28px; }
        .${ROOT} .modality-feature p { margin-top:16px; font-size:17px; }
        .${ROOT} .modality-meta { display:flex; flex-wrap:wrap; gap:8px; margin-top:26px; }
        .${ROOT} .mini-chip { padding:7px 10px; border-radius:999px; background:var(--sesen-soft); color:var(--sesen-deep); font-size:12px; font-weight:700; }
        .${ROOT} .modality-list { border-top:1px solid var(--sesen-border); }
        .${ROOT} .modality-row { padding:23px 0; border-bottom:1px solid var(--sesen-border); }
        .${ROOT} .modality-row h3 { font-size:21px; }
        .${ROOT} .modality-row p { margin-top:8px; color:var(--sesen-muted); }
        .${ROOT} .personal-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:68px; align-items:center; }
        .${ROOT} .personal-copy p + p { margin-top:16px; }
        .${ROOT} .personal-links { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; margin-top:28px; }
        .${ROOT} .personal-link { padding:19px; border:1px solid var(--sesen-border); border-radius:18px; background:#fff; min-width:0; }
        .${ROOT} .personal-link strong { display:block; color:var(--sesen-navy); font-size:15px; }
         .${ROOT} .personal-link p { margin-top:6px; font-size:16px; color:var(--sesen-muted); }
        .${ROOT} .personal-link .editorial-link { margin-top:12px; }
        .${ROOT} .chain { position:relative; display:grid; gap:14px; padding:34px; border-radius:30px; background:#fff; border:1px solid var(--sesen-border); }
        .${ROOT} .chain-step { display:flex; gap:16px; align-items:center; padding:15px 16px; border-radius:16px; background:var(--sesen-section); }
        .${ROOT} .chain-step::before { content:""; width:9px; height:9px; border-radius:50%; background:var(--sesen-blue); box-shadow:0 0 0 6px var(--sesen-soft); flex:0 0 9px; }
        .${ROOT} .chain-step span { color:var(--sesen-navy); font-weight:700; }
        .${ROOT} .pullquote { margin-top:26px; padding:23px 26px; border-left:2px solid var(--sesen-blue); background:var(--sesen-pale); color:var(--sesen-navy); font-family:"Inter Tight", Inter, sans-serif; font-size:22px; line-height:1.45; }
        .${ROOT} .platform-band { display:grid; grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr); gap:68px; align-items:center; }
        .${ROOT} .platform-visual { border-radius:28px; border:1px solid var(--sesen-border); background:#fff; padding:34px; }
        .${ROOT} .platform-row { display:grid; grid-template-columns:1fr 34px 1fr; gap:12px; align-items:center; padding:13px 0; }
        .${ROOT} .platform-box { min-width:0; padding:14px 16px; border-radius:14px; background:var(--sesen-section); color:var(--sesen-navy); font-size:14px; font-weight:700; }
        .${ROOT} .platform-arrow { text-align:center; color:var(--sesen-blue-dark); font-weight:700; }
        .${ROOT} .platform-note { margin-top:22px; padding-top:22px; border-top:1px solid var(--sesen-divider); font-size:16px; color:var(--sesen-muted); }
        .${ROOT} .lifecycle { padding:36px 0 0; }
        .${ROOT} .lifecycle-track { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); border-top:1px solid var(--sesen-border); border-left:1px solid var(--sesen-border); }
        .${ROOT} .life-step { padding:26px 24px 28px; border-right:1px solid var(--sesen-border); border-bottom:1px solid var(--sesen-border); min-width:0; background:#fff; }
        .${ROOT} .life-step:nth-child(3), .${ROOT} .life-step:nth-child(4) { background:var(--sesen-pale); }
        .${ROOT} .life-num { font-size:12px; letter-spacing:.12em; color:var(--sesen-blue-dark); font-weight:700; }
        .${ROOT} .life-step h3 { font-size:19px; margin-top:10px; }
        .${ROOT} .life-step p { margin-top:9px; color:var(--sesen-muted); font-size:16px; }
        .${ROOT} .content-split { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:74px; align-items:start; }
        .${ROOT} .content-split.reverse { grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr); }
        .${ROOT} .content-split.reverse .split-heading { order:2; }
        .${ROOT} .content-split.reverse .split-body { order:1; }
        .${ROOT} .split-heading { position:sticky; top:28px; }
        .${ROOT} .split-heading p { margin-top:18px; font-size:18px; }
        .${ROOT} .split-body > p + p { margin-top:16px; }
        .${ROOT} .doc-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0; border-top:1px solid var(--sesen-divider); margin-top:28px; }
        .${ROOT} .doc-item { min-width:0; display:flex; gap:10px; padding:13px 18px 13px 0; border-bottom:1px solid var(--sesen-divider); }
        .${ROOT} .doc-item:nth-child(2n) { padding-left:20px; border-left:1px solid var(--sesen-divider); }
        .${ROOT} .doc-item .mini-check { width:20px; height:20px; color:var(--sesen-blue-dark); flex:0 0 20px; margin-top:2px; }
        .${ROOT} .doc-item span { color:var(--sesen-body); }
        .${ROOT} .link-row { display:flex; flex-wrap:wrap; gap:12px 28px; margin-top:24px; }
        .${ROOT} .clinical-groups { display:grid; gap:0; border-top:1px solid var(--sesen-border); }
        .${ROOT} .clinical-group { display:grid; grid-template-columns:220px minmax(0,1fr); gap:30px; padding:28px 0; border-bottom:1px solid var(--sesen-border); min-width:0; }
        .${ROOT} .clinical-group h3 { font-size:20px; }
        .${ROOT} .clinical-group p { color:var(--sesen-muted); }
        .${ROOT} .clinical-group .editorial-link { margin-top:10px; }
        .${ROOT} .regulatory-grid { display:grid; grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr); gap:50px; align-items:start; }
        .${ROOT} .reg-stack { display:grid; gap:12px; }
        .${ROOT} .reg-block { display:grid; grid-template-columns:90px minmax(0,1fr); gap:18px; align-items:start; padding:17px 0; border-bottom:1px solid rgba(255,255,255,.16); }
        .${ROOT} .reg-block strong { color:#fff; font-size:14px; }
        .${ROOT} .reg-block p { color:#D9E3FF; font-size:16px; }
        .${ROOT} .reg-docs { padding:30px; border:1px solid rgba(255,255,255,.18); border-radius:28px; background:rgba(255,255,255,.05); }
        .${ROOT} .reg-docs h3 { color:#fff; font-size:23px; }
        .${ROOT} .reg-docs ul { margin:20px 0 0; padding:0; list-style:none; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:11px 20px; }
        .${ROOT} .reg-docs li { color:#E7ECFF; font-size:16px; padding-left:16px; position:relative; }
        .${ROOT} .reg-docs li::before { content:""; position:absolute; left:0; top:.72em; width:5px; height:5px; border-radius:50%; background:var(--sesen-light-blue); }
        .${ROOT} .blue-bg .editorial-link { color:#fff; }
        .${ROOT} .terminology-grid { display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); gap:60px; align-items:start; }
        .${ROOT} .term-copy p + p { margin-top:16px; }
        .${ROOT} .term-flow { position:relative; display:grid; gap:0; }
        .${ROOT} .term-step { display:grid; grid-template-columns:22px minmax(0,1fr); gap:16px; padding:17px 0; border-bottom:1px solid var(--sesen-divider); }
        .${ROOT} .term-dot { width:10px; height:10px; border-radius:50%; background:var(--sesen-blue); margin-top:8px; position:relative; box-shadow:0 0 0 6px var(--sesen-soft); }
        .${ROOT} .term-step:not(:last-child) .term-dot::after { content:""; position:absolute; left:4px; top:16px; height:calc(100% + 19px); width:1px; background:var(--sesen-border); }
        .${ROOT} .term-step h3 { font-size:18px; }
        .${ROOT} .term-step p { margin-top:5px; font-size:16px; color:var(--sesen-muted); }
        .${ROOT} .workflow-pill { margin-top:28px; display:flex; flex-wrap:wrap; align-items:center; gap:8px; }
        .${ROOT} .workflow-pill span { padding:8px 11px; border-radius:999px; background:var(--sesen-soft); color:var(--sesen-deep); font-size:12px; font-weight:700; }
        .${ROOT} .workflow-pill i { font-style:normal; color:var(--sesen-mid); }
        .${ROOT} .safety-grid { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(0,.92fr); gap:64px; align-items:center; }
        .${ROOT} .safety-list { border-top:1px solid var(--sesen-border); margin-top:24px; }
        .${ROOT} .safety-row { padding:14px 0; border-bottom:1px solid var(--sesen-border); display:flex; gap:11px; }
        .${ROOT} .safety-visual { padding:34px; border-radius:28px; background:var(--sesen-pale); border:1px solid var(--sesen-border); }
        .${ROOT} .safety-visual h3 { font-size:22px; }
        .${ROOT} .safety-chain { display:grid; gap:12px; margin-top:22px; }
        .${ROOT} .safety-chip { padding:14px 16px; border-radius:14px; background:#fff; border:1px solid var(--sesen-divider); color:var(--sesen-navy); font-weight:700; font-size:14px; }
        .${ROOT} .audience-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:70px; align-items:start; }
        .${ROOT} .audience-columns { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
        .${ROOT} .audience-block { padding:22px; border-radius:18px; border:1px solid var(--sesen-border); background:#fff; }
        .${ROOT} .audience-block strong { color:var(--sesen-navy); display:block; }
        .${ROOT} .audience-block p { margin-top:7px; color:var(--sesen-muted); font-size:16px; }
        .${ROOT} .patient-flow { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:0; border:1px solid var(--sesen-border); border-radius:28px; overflow:hidden; margin-top:30px; }
        .${ROOT} .patient-stage { padding:28px; background:#fff; min-width:0; }
        .${ROOT} .patient-stage + .patient-stage { border-left:1px solid var(--sesen-border); }
        .${ROOT} .patient-stage:nth-child(2) { background:var(--sesen-section); }
        .${ROOT} .patient-stage:nth-child(3) { background:var(--sesen-pale); }
        .${ROOT} .patient-stage h3 { font-size:20px; }
        .${ROOT} .patient-stage p { margin-top:10px; color:var(--sesen-muted); }
        .${ROOT} .qa-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:64px; align-items:start; }
        .${ROOT} .qa-steps { border-top:1px solid var(--sesen-border); }
        .${ROOT} .qa-step { display:grid; grid-template-columns:44px minmax(0,1fr); gap:16px; padding:20px 0; border-bottom:1px solid var(--sesen-border); }
        .${ROOT} .qa-step h3 { font-size:18px; }
        .${ROOT} .qa-step p { margin-top:5px; font-size:16px; color:var(--sesen-muted); }
        .${ROOT} .qa-statement { margin-top:24px; padding:22px 24px; border-radius:18px; background:var(--sesen-soft); color:var(--sesen-navy); font-weight:700; }
        .${ROOT} .global-grid { display:grid; grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr); gap:68px; align-items:start; }
        .${ROOT} .regions { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border-top:1px solid var(--sesen-border); border-left:1px solid var(--sesen-border); }
        .${ROOT} .region { padding:24px; border-right:1px solid var(--sesen-border); border-bottom:1px solid var(--sesen-border); min-width:0; }
        .${ROOT} .region strong { color:var(--sesen-navy); display:block; }
        .${ROOT} .region p { margin-top:8px; font-size:16px; color:var(--sesen-muted); }
         .${ROOT} .related-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:0; border-top:1px solid var(--sesen-border); border-left:1px solid var(--sesen-border); }
        .${ROOT} .related-item { padding:28px; border-right:1px solid var(--sesen-border); border-bottom:1px solid var(--sesen-border); min-width:0; background:#fff; }
        .${ROOT} .related-item h3 { font-size:21px; }
         .${ROOT} .related-item p { margin-top:10px; color:var(--sesen-muted); }
        .${ROOT} .related-item .editorial-link { margin-top:14px; }
        .${ROOT} .why-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
        .${ROOT} .why-item { padding:28px 28px 30px; min-width:0; border-radius:22px; background:#fff; border:1px solid var(--sesen-border); }
        .${ROOT} .why-item h3 { margin-top:18px; font-size:20px; }
        .${ROOT} .why-item p { margin-top:8px; color:var(--sesen-muted); }
        .${ROOT} .faq-shell { display:grid; grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr); gap:72px; align-items:start; }
        .${ROOT} .faq-heading { position:sticky; top:28px; }
        .${ROOT} .faq-list { border-top:1px solid var(--sesen-border); }
        .${ROOT} .faq-item { border-bottom:1px solid var(--sesen-border); }
        .${ROOT} .faq-question { width:100%; background:none; border:0; padding:22px 0; display:flex; justify-content:space-between; align-items:flex-start; gap:22px; text-align:left; font:inherit; color:var(--sesen-navy); cursor:pointer; font-family:"Inter Tight", Inter, sans-serif; font-size:19px; line-height:1.4; font-weight:500; }
        .${ROOT} .faq-symbol { width:34px; height:34px; border-radius:50%; background:var(--sesen-soft); color:var(--sesen-blue-dark); display:grid; place-items:center; font-family:Inter, sans-serif; font-weight:700; flex:0 0 34px; }
        .${ROOT} .faq-answer { padding:0 54px 24px 0; }
        .${ROOT} .faq-answer p { color:var(--sesen-muted); }
        .${ROOT} .final-cta { padding:86px 0; background:linear-gradient(135deg, var(--sesen-deep) 0%, #3659BB 100%); }
        .${ROOT} .final-cta-grid { display:grid; grid-template-columns:minmax(0,1.05fr) minmax(340px,.95fr); gap:58px; align-items:center; }
        .${ROOT} .final-cta h2 { color:#fff; max-width:760px; }
        .${ROOT} .final-cta p { color:#E6ECFF; margin-top:18px; max-width:720px; font-size:18px; }
        .${ROOT} .final-cta-actions { display:flex; flex-wrap:wrap; justify-content:flex-end; gap:12px; }
        .${ROOT} .final-cta .cta-primary { background:var(--sesen-blue); color:#fff; border-color:rgba(255,255,255,.18); }
        .${ROOT} .final-cta .cta-primary:hover { background:#5879DD; }
        .${ROOT} .final-cta .cta-secondary { background:#fff; color:var(--sesen-ink); border-color:#fff; }
        .${ROOT} .final-cta .cta-secondary:hover { background:var(--sesen-soft); border-color:var(--sesen-soft); }
        .${ROOT} .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }

        @media (max-width:1120px) {
          .${ROOT} .shell { width:min(1280px, calc(100% - 80px)); }
          .${ROOT} .hero-grid { grid-template-columns:minmax(0,1fr) minmax(370px,.84fr); gap:42px; }
          .${ROOT} .trust-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
          .${ROOT} .trust-item:nth-child(4) { border-left:0; border-top:1px solid var(--sesen-divider); }
          .${ROOT} .trust-item:nth-child(5) { border-top:1px solid var(--sesen-divider); }
          .${ROOT} .lifecycle-track { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .${ROOT} .related-grid, .${ROOT} .why-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
        }

        @media (max-width:900px) {
          .${ROOT} .shell { width:calc(100% - 60px); }
          .${ROOT} .section-pad { padding:80px 0; }
          .${ROOT} .hero { padding:76px 0 72px; }
          .${ROOT} .hero-grid { grid-template-columns:1fr; }
          .${ROOT} .hero-copy { max-width:760px; margin:0 auto; width:100%; }
          .${ROOT} .hero-copy .eyebrow, .${ROOT} .hero-copy h1 { text-align:center; }
          .${ROOT} .hero-copy .cta-row { justify-content:center; }
          .${ROOT} .hero-art { max-width:620px; margin:14px auto 0; }
          .${ROOT} .intro-grid, .${ROOT} .personal-grid, .${ROOT} .platform-band, .${ROOT} .content-split, .${ROOT} .content-split.reverse, .${ROOT} .regulatory-grid, .${ROOT} .terminology-grid, .${ROOT} .safety-grid, .${ROOT} .audience-grid, .${ROOT} .qa-grid, .${ROOT} .global-grid, .${ROOT} .faq-shell, .${ROOT} .final-cta-grid { grid-template-columns:1fr; gap:44px; }
          .${ROOT} .content-split.reverse .split-heading, .${ROOT} .content-split.reverse .split-body { order:initial; }
          .${ROOT} .intro-heading, .${ROOT} .split-heading, .${ROOT} .faq-heading { position:static; }
          .${ROOT} .modality-wrap { grid-template-columns:1fr; }
          .${ROOT} .related-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
          .${ROOT} .final-cta-actions { justify-content:flex-start; }
        }

        @media (max-width:768px) {
          .${ROOT} .shell { width:calc(100% - 56px); }
          .${ROOT} h1 { font-size:42px; }
          .${ROOT} h2 { font-size:32px; }
          .${ROOT} .hero-copy .eyebrow, .${ROOT} .hero-copy h1 { text-align:center; }
          .${ROOT} .hero-copy .lead, .${ROOT} .hero-support { text-align:left; }
          .${ROOT} .hero-copy .cta-row { justify-content:center; }
          .${ROOT} .section-header-center { text-align:center; }
          .${ROOT} .section-header-technical, .${ROOT} .section-header-left { text-align:left; }
          .${ROOT} .mobile-heading-center > .eyebrow, .${ROOT} .mobile-heading-center > h2 { text-align:center; }
          .${ROOT} .mobile-heading-left > .eyebrow, .${ROOT} .mobile-heading-left > h2 { text-align:left; }
          .${ROOT} .section-header .eyebrow { font-size:11px !important; }
          .${ROOT} .trust-grid { grid-template-columns:1fr 1fr; }
          .${ROOT} .trust-item, .${ROOT} .trust-item:nth-child(4), .${ROOT} .trust-item:nth-child(5) { border-left:0; border-top:1px solid var(--sesen-divider); }
          .${ROOT} .trust-item:nth-child(odd) { border-right:1px solid var(--sesen-divider); }
          .${ROOT} .trust-item:nth-child(1), .${ROOT} .trust-item:nth-child(2) { border-top:0; }
          .${ROOT} .trust-item:last-child { grid-column:1 / -1; border-right:0; }
          .${ROOT} .principles { grid-template-columns:1fr; }
          .${ROOT} .principle, .${ROOT} .principle:nth-child(2n) { padding:20px 0; border-left:0; border-top:1px solid var(--sesen-divider); }
          .${ROOT} .principle:first-child { border-top:0; }
          .${ROOT} .personal-links { grid-template-columns:1fr; }
          .${ROOT} .doc-list { grid-template-columns:1fr; }
          .${ROOT} .doc-item, .${ROOT} .doc-item:nth-child(2n) { padding:13px 0; border-left:0; }
          .${ROOT} .clinical-group { grid-template-columns:1fr; gap:10px; }
          .${ROOT} .reg-docs ul { grid-template-columns:1fr; }
          .${ROOT} .patient-flow { grid-template-columns:1fr; }
          .${ROOT} .patient-stage + .patient-stage { border-left:0; border-top:1px solid var(--sesen-border); }
          .${ROOT} .related-grid, .${ROOT} .why-grid { grid-template-columns:1fr; }
          .${ROOT} .audience-columns, .${ROOT} .regions { grid-template-columns:1fr; }
          .${ROOT} .faq-question { font-size:18px; }
        }

        @media (max-width:560px) {
          .${ROOT} .shell { width:calc(100% - 40px); }
          .${ROOT} .section-pad { padding:68px 0; }
          .${ROOT} .section-pad-dense { padding:64px 0; }
          .${ROOT} .hero { padding:66px 0 60px; }
          .${ROOT} h1 { font-size:38px; }
          .${ROOT} h2 { font-size:30px; }
          .${ROOT} h3 { font-size:21px; }
          .${ROOT} .lead { font-size:18px; }
          .${ROOT} .section-intro { font-size:17px; }
          .${ROOT} .cta-row { display:grid; grid-template-columns:1fr; width:100%; }
          .${ROOT} .cta-button { width:100%; min-width:0; min-height:52px; padding:13px 20px; line-height:1.25; }
          .${ROOT} .hero-art-label { font-size:10px; padding:6px 8px; }
          .${ROOT} .label-rna { left:2%; }
          .${ROOT} .label-delivery { left:34%; }
          .${ROOT} .label-cell { right:3%; }
          .${ROOT} .label-response { right:0; }
          .${ROOT} .trust-grid { grid-template-columns:1fr; }
          .${ROOT} .trust-item, .${ROOT} .trust-item:nth-child(odd) { border-right:0; border-top:1px solid var(--sesen-divider); }
          .${ROOT} .trust-item:first-child { border-top:0; }
          .${ROOT} .trust-item:last-child { grid-column:auto; }
          .${ROOT} .modality-feature, .${ROOT} .chain, .${ROOT} .platform-visual, .${ROOT} .safety-visual { padding:25px; border-radius:22px; }
          .${ROOT} .intro-grid, .${ROOT} .personal-grid, .${ROOT} .platform-band, .${ROOT} .content-split, .${ROOT} .regulatory-grid, .${ROOT} .terminology-grid, .${ROOT} .safety-grid, .${ROOT} .audience-grid, .${ROOT} .qa-grid, .${ROOT} .global-grid, .${ROOT} .faq-shell, .${ROOT} .final-cta-grid { gap:34px; }
          .${ROOT} .section-header { margin-bottom:38px; }
          .${ROOT} .lifecycle-track { grid-template-columns:1fr; }
          .${ROOT} .life-step:nth-child(3), .${ROOT} .life-step:nth-child(4) { background:#fff; }
          .${ROOT} .life-step:nth-child(even) { background:var(--sesen-pale); }
          .${ROOT} .reg-block { grid-template-columns:1fr; gap:7px; }
          .${ROOT} .reg-docs { padding:24px; border-radius:22px; }
          .${ROOT} .workflow-pill { gap:6px; }
          .${ROOT} .workflow-pill i { display:none; }
          .${ROOT} .faq-answer { padding-right:0; }
          .${ROOT} .final-cta { padding:70px 0; }
          .${ROOT} .final-cta-actions { display:grid; grid-template-columns:1fr; }
          .${ROOT} .final-cta-actions .cta-button { width:100%; }
          .${ROOT} .eyebrow { font-size:11px !important; line-height:1.35 !important; letter-spacing:.15em !important; }
        }


        @media (max-width:420px) {
          .${ROOT} .hero-art { display:flex; flex-wrap:wrap; justify-content:center; column-gap:6px; row-gap:0; }
          .${ROOT} .hero-art svg { flex:0 0 100%; }
          .${ROOT} .hero-art-label { position:static; display:inline-flex; margin-top:6px; white-space:normal; text-align:center; }
          .${ROOT} .personal-link, .${ROOT} .related-item, .${ROOT} .why-item, .${ROOT} .patient-stage, .${ROOT} .region { padding-left:20px; padding-right:20px; }
          .${ROOT} .platform-row { grid-template-columns:minmax(0,1fr) 24px minmax(0,1fr); gap:8px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .${ROOT} .cta-button { transition:none; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>Advanced Therapeutic Modalities</Eyebrow>
            <h1>mRNA &amp; RNA Therapeutics Translation Services</h1>
            <p className="lead">Advance RNA-based medicines globally with specialized translation for the scientific, CMC, clinical, regulatory, safety, and patient-facing content that surrounds their development.</p>
            <p className="hero-support">Sesen helps biotechnology and pharmaceutical organizations communicate complex RNA science accurately across languages and development stages—from early research and manufacturing documentation to clinical trials, regulatory submissions, medical affairs, and patient communication.</p>
            <div className="cta-row">
              <CTAButton href={urls.quote}>REQUEST A QUOTE</CTAButton>
              <CTAButton href={urls.sales} secondary>DISCUSS YOUR RNA PROGRAM</CTAButton>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="trust-band" aria-label="Sesen RNA therapeutics translation credentials">
        <div className="shell trust-grid">
          {trustItems.map(([title, text, icon]) => (
            <div className="trust-item" key={title}>
              <div className="trust-icon-title">{icon}<div><strong>{title}</strong><p>{text}</p></div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="shell intro-grid">
          <div className="intro-heading mobile-heading-center">
            <h2>Complex RNA Science Requires More Than General Medical Translation</h2>
          </div>
          <div className="intro-copy">
            <p className="lead">RNA-based medicines are creating new possibilities across oncology, rare and genetic diseases, infectious diseases, and other areas of therapeutic development. They also bring together scientific concepts that can span molecular biology, genetics, immunology, pharmacology, bioanalytics, drug delivery, manufacturing, clinical medicine, and regulatory science.</p>
            <p>The language surrounding an RNA therapeutic therefore does not live in one document. A target first described in research materials may later appear in nonclinical reports, analytical methods, CMC documentation, clinical protocols, investigator's brochures, regulatory submissions, safety communications, informed consent forms, and patient-facing materials. Each audience requires a different level of technical detail, but the underlying scientific meaning must remain aligned.</p>
            <p>Sesen provides professional multilingual translation and localization for this connected RNA therapeutic content ecosystem. Our workflows combine specialized life sciences linguists, terminology management, translation memory, structured review, technology-assisted quality assurance, and final human quality control to help maintain accuracy as complex scientific information moves across documents, teams, languages, and development stages.</p>
            <div className="principles">
              <div className="principle"><strong>Scientific Accuracy</strong><p>Translate specialized molecular, genetic, pharmacological, clinical, and regulatory concepts in the context in which they are actually used.</p></div>
              <div className="principle"><strong>Cross-Document Consistency</strong><p>Maintain approved terminology across research, CMC, clinical, safety, regulatory, medical, and patient-facing documentation.</p></div>
              <div className="principle"><strong>Audience-Appropriate Communication</strong><p>Preserve scientific meaning while adapting language for researchers, regulators, investigators, healthcare professionals, patients, and caregivers.</p></div>
              <div className="principle"><strong>Lifecycle Continuity</strong><p>Build multilingual language assets that can support an RNA program as documentation evolves from development through submission, launch, and ongoing communication.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pale-bg">
        <div className="shell">
          <SectionHeader eyebrow="RNA Modalities" title="One RNA Field. Multiple Therapeutic Strategies." intro="RNA therapeutics encompass multiple approaches for using or targeting RNA to influence biological processes. Each modality brings its own terminology, mechanisms, development pathways, delivery considerations, and documentation requirements." />
          <div className="modality-wrap">
            <div className="modality-feature">
              <IconTile><MoleculeIcon /></IconTile>
              <h3 style={{marginTop:20}}>{modalities[0].title}</h3>
              <p>{modalities[0].text}</p>
              <div className="modality-meta">
                <span className="mini-chip">Protein Expression</span>
                <span className="mini-chip">Therapeutic Vaccines</span>
                <span className="mini-chip">Cancer Immunotherapy</span>
                <span className="mini-chip">Delivery Technologies</span>
              </div>
            </div>
            <div className="modality-list">
              {modalities.slice(1).map((item) => (
                <div className="modality-row" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell personal-grid">
          <div className="personal-copy mobile-heading-center">
            <Eyebrow>Personalized Medicine</Eyebrow>
            <h2>When the Medicine Becomes More Personalized, Communication Does Too</h2>
            <p className="lead" style={{marginTop:18}}>Some of the most important advances in RNA therapeutics are bringing drug development closer to the underlying molecular characteristics of an individual disease—or even an individual patient.</p>
            <p>In oncology, RNA-based approaches can connect tumor sequencing, mutation analysis, biomarker information, antigen selection, and individualized therapeutic design. In rare and genetically defined diseases, highly targeted RNA approaches may address specific molecular causes within very small patient populations.</p>
            <p>Sesen helps life sciences teams maintain the linguistic continuity needed when individualized scientific information moves between researchers, manufacturing teams, clinical sites, regulators, healthcare professionals, and patients.</p>
            <div className="personal-links">
              <div className="personal-link"><strong>Precision Oncology</strong><p>Tumor biology, mutations, biomarkers, neoantigens, therapeutic targets, endpoints, and treatment terminology.</p><EditorialLink href={urls.oncology} ariaLabel="Explore Oncology Translation Services">Explore Oncology Translation</EditorialLink></div>
              <div className="personal-link"><strong>Rare &amp; Genetic Diseases</strong><p>Genetically defined conditions, targeted RNA approaches, specialized studies, and patient communication.</p><EditorialLink href={urls.rareDisease} ariaLabel="Explore Rare Disease Translation Services">Explore Rare Disease Translation</EditorialLink></div>
              <div className="personal-link"><strong>Genomic &amp; Molecular Content</strong><p>Genetic variation, molecular targets, mechanisms, biomarkers, assays, and clinical development.</p><EditorialLink href={urls.genomicsGene} ariaLabel="Explore Genomics and Gene Therapy Translation Services">Explore Genomics &amp; Gene Therapy</EditorialLink></div>
            </div>
            <div className="pullquote">The therapeutic information may become increasingly individualized. The multilingual quality requirements cannot.</div>
          </div>
          <div className="chain" aria-label="Personalized RNA communication chain">
            {["Genomic Information","Therapeutic Design","Manufacturing","Clinical Use","Regulatory Evidence","Patient Communication"].map((x)=><div className="chain-step" key={x}><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="shell platform-band">
          <div className="mobile-heading-center">
            <Eyebrow>Platform Development</Eyebrow>
            <h2>A Programmable Therapeutic Platform Creates New Multilingual Complexity</h2>
            <p className="lead" style={{marginTop:18}}>RNA platforms can enable developers to work with related therapeutic technologies while changing sequences, targets, constructs, formulations, or biological instructions for different applications.</p>
            <p style={{marginTop:14}}>Some scientific information changes from program to program. Some platform terminology remains stable. Some content is reused across studies or regulatory documents. Other language must be updated precisely when the therapeutic design changes.</p>
            <div className="pullquote">When the therapeutic instructions change, the language surrounding them must remain controlled.</div>
          </div>
          <div className="platform-visual">
            {[
              ["Platform Terminology","Controlled + Reused"],
              ["Sequence / Target","Precisely Updated"],
              ["CMC / Process Language","Version Aligned"],
              ["Clinical / Regulatory Content","Context Validated"]
            ].map(([a,b])=><div className="platform-row" key={a}><div className="platform-box">{a}</div><div className="platform-arrow">→</div><div className="platform-box">{b}</div></div>)}
            <p className="platform-note">Sesen combines terminology governance, translation memory, version-aware workflows, human review, and structured quality assurance so global teams can update multilingual content without losing the language decisions that should remain consistent.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeader title="RNA Translation Support Across the Therapeutic Lifecycle" intro="RNA therapeutic development generates a connected body of scientific and regulated information. Sesen supports that content from early research through global clinical development, regulatory submission, safety communication, and patient engagement." technical />
          <div className="lifecycle">
            <div className="lifecycle-track">
              {lifecycle.map(([n,t,d])=><div className="life-step" key={n}><div className="life-num">{n}</div><h3>{t}</h3><p>{d}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="shell content-split">
          <div className="split-heading mobile-heading-left">
            <Eyebrow>Scientific Development</Eyebrow>
            <h2>Preserving Scientific Meaning From Early Research Forward</h2>
            <p>RNA programs often begin with highly specialized scientific vocabulary long before clinical or regulatory documents are created.</p>
          </div>
          <div className="split-body">
            <p className="lead">Targets, genes, proteins, mutations, sequences, constructs, molecular pathways, delivery technologies, biomarkers, assays, and mechanisms of action may become foundational terminology for everything that follows.</p>
            <p>Sesen helps organizations establish accurate multilingual language early and carry validated terminology into downstream documentation.</p>
            <div className="doc-list">
              {["Research reports","Scientific presentations","Molecular biology documentation","Genomic and transcriptomic content","Target and pathway descriptions","Mechanism-of-action content","Biomarker and assay documentation","Scientific publications","Pharmacology reports","Toxicology documentation","Biodistribution studies","Bioanalytical reports","PK / PD content","Immunogenicity-related documentation","Nonclinical study summaries","Research protocols"].map((x)=><div className="doc-item" key={x}><CheckIcon /><span>{x}</span></div>)}
            </div>
            <EditorialLink href={urls.medicalScientific} ariaLabel="Explore Medical and Scientific Translation Services">Explore Medical &amp; Scientific Translation</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell content-split reverse">
          <div className="split-heading mobile-heading-left">
            <h2>Translation for the CMC and Manufacturing Complexity Behind RNA Medicines</h2>
            <p>An RNA therapeutic is more than its sequence. Manufacturing and quality documentation can bring together specialized terminology for materials, synthesis, purification, structure, analytical control, formulation, delivery, stability, and finished-product control.</p>
          </div>
          <div className="split-body">
            <p className="lead">For mRNA programs, this may also include specialized language associated with lipid nanoparticles or other delivery technologies, platform processes, sequence-related changes, and analytical controls.</p>
            <p>The product described in scientific documentation must remain the same product described in manufacturing records, quality documentation, regulatory submissions, and subsequent lifecycle updates.</p>
            <div className="doc-list">
              {["Drug substance documentation","Drug product documentation","Manufacturing process descriptions","Process development documentation","Analytical methods","Characterization reports","Specifications","Stability documentation","Validation materials","Raw and starting material documentation","Formulation content","Delivery-system documentation","Quality-control documentation","Change-control materials","Batch-related documentation","Standard operating procedures","CTD/eCTD Module 3 content"].map((x)=><div className="doc-item" key={x}><CheckIcon /><span>{x}</span></div>)}
            </div>
            <div className="workflow-pill" aria-label="CMC terminology continuity">
              {['RNA Construct','Manufacturing Process','Analytical Control','Specification','Stability','Regulatory Submission'].map((x,i)=><React.Fragment key={x}><span>{x}</span>{i<5&&<i>→</i>}</React.Fragment>)}
            </div>
            <div className="link-row">
              <EditorialLink href={urls.cmc} ariaLabel="Explore CMC Document Translation Services">Explore CMC Translation</EditorialLink>
              <EditorialLink href={urls.sop} ariaLabel="Explore SOP Translation Services">Explore SOP Translation</EditorialLink>
              <EditorialLink href={urls.ectd} ariaLabel="Explore CTD and eCTD Translation Services">Explore CTD &amp; eCTD Translation</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pale-bg">
        <div className="shell">
          <SectionHeader title="From Complex Mechanisms to Clear Multilingual Clinical Execution" intro="The scientific language of an RNA therapy ultimately has to work in a clinical environment. Investigators need precision. Study sites need operational clarity. Regulators need controlled evidence. Patients need understandable explanations of participation, procedures, risks, and potential benefits." technical />
          <div className="clinical-groups">
            <div className="clinical-group"><h3>Protocols &amp; Study Design</h3><div><p>Clinical trial protocols, protocol synopses, amendments, eligibility criteria, treatment and dosing information, endpoint descriptions, study procedures, and visit schedules.</p><EditorialLink href={urls.protocol} ariaLabel="Explore Protocol Translation Services">Explore Protocol Translation</EditorialLink></div></div>
            <div className="clinical-group"><h3>Investigator &amp; Site Documentation</h3><div><p>Investigator's brochures, investigator meeting materials, site manuals, pharmacy and laboratory manuals, study training, site communications, and clinical operations documentation.</p><EditorialLink href={urls.ib} ariaLabel="Explore Investigator Brochure Translation Services">Explore Investigator Brochure Translation</EditorialLink></div></div>
            <div className="clinical-group"><h3>Patient &amp; Consent Content</h3><div><p>Informed consent forms, assent and re-consent, patient information sheets, recruitment content, treatment instructions, study participation materials, and patient education.</p><EditorialLink href={urls.icf} ariaLabel="Explore Informed Consent Form Translation Services">Explore ICF Translation</EditorialLink></div></div>
            <div className="clinical-group"><h3>Clinical Data &amp; Digital Study Content</h3><div><p>CRFs and eCRFs, clinical outcome assessments, PROs and ePROs, eCOA interfaces, patient diaries, eConsent, patient apps and portals, and digital trial instructions.</p><EditorialLink href={urls.ecoa} ariaLabel="Explore eCOA Translation Services">Explore eCOA Translation</EditorialLink></div></div>
            <div className="clinical-group"><h3>Study Reporting</h3><div><p>Clinical study reports, clinical narratives, tables, listings and figures, results summaries, supporting appendices, publications, and abstracts.</p><EditorialLink href={urls.csr} ariaLabel="Explore Clinical Study Report Translation Services">Explore CSR Translation</EditorialLink></div></div>
          </div>
          <div style={{marginTop:28}}><p className="lead">The goal is not to make every audience receive the same language. It is to make every audience receive the right language without changing the underlying science.</p><EditorialLink href={urls.clinicalTrial} ariaLabel="Explore Clinical Trial Translation Services">Explore Clinical Trial Translation</EditorialLink></div>
        </div>
      </section>

      <section className="section-pad blue-bg">
        <div className="shell">
          <SectionHeader title="Regulatory Translation Built for Scientific Consistency" intro="Regulatory submissions bring together the scientific story of an RNA therapeutic across quality, manufacturing, nonclinical, clinical, safety, and product information." align="left" technical />
          <div className="regulatory-grid">
            <div className="reg-stack">
              <div className="reg-block"><strong>CMC</strong><p>How the therapeutic is made and controlled.</p></div>
              <div className="reg-block"><strong>Nonclinical</strong><p>How its biological and safety profile is characterized before and alongside clinical development.</p></div>
              <div className="reg-block"><strong>Clinical</strong><p>How the therapeutic is studied in people.</p></div>
              <div className="reg-block"><strong>Safety</strong><p>How risks and safety observations are documented.</p></div>
              <div className="reg-block"><strong>Regulatory</strong><p>How the complete body of evidence is communicated to health authorities.</p></div>
            </div>
            <div className="reg-docs">
              <h3>Regulatory Content We Support</h3>
              <ul>
                {['IND- and CTA-related documentation','Regulatory application content','CTD and eCTD documentation','Module summaries','CMC submission content','Nonclinical documentation','Clinical documentation','Health authority correspondence','Questions and responses','Amendments','Variations','Supporting scientific documentation','Product information','Lifecycle updates'].map(x=><li key={x}>{x}</li>)}
              </ul>
              <div className="link-row">
                <EditorialLink href={urls.regulatory} ariaLabel="Explore Regulatory Translation Services">Explore Regulatory Translation</EditorialLink>
                <EditorialLink href={urls.regulatorySubmission} ariaLabel="Explore Regulatory Submission Translation Services">Explore Regulatory Submissions</EditorialLink>
                <EditorialLink href={urls.ectd} ariaLabel="Explore CTD and eCTD Translation Services">Explore CTD &amp; eCTD Translation</EditorialLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell terminology-grid">
          <div className="term-copy mobile-heading-left">
            <Eyebrow>Terminology Governance</Eyebrow>
            <h2>One RNA Vocabulary Across Every Document</h2>
            <p className="lead" style={{marginTop:18}}>RNA therapeutic development can generate thousands of terminology decisions. Those documents do not need identical wording. They do need controlled meaning.</p>
            <p>A target or molecular concept may first appear in a research report, then move into CMC documentation, a clinical protocol, an investigator's brochure, a regulatory submission, a safety narrative, and eventually a patient-facing explanation.</p>
            <p>Project glossaries, translation memories, approved references, previous translations, reviewer decisions, and customer terminology can become managed language assets rather than being rediscovered with each new file.</p>
            <div className="workflow-pill" aria-label="Sesen terminology workflow">
              {['Identify','Define','Validate','Translate','Review','Reuse','Maintain'].map((x,i)=><React.Fragment key={x}><span>{x}</span>{i<6&&<i>→</i>}</React.Fragment>)}
            </div>
            <div className="pullquote">Terminology governance creates scientific continuity across an evolving global development program.</div>
          </div>
          <div className="term-flow">
            {terminologySteps.map(([t,d])=><div className="term-step" key={t}><div className="term-dot"></div><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="shell safety-grid">
          <div className="mobile-heading-left">
            <h2>Accurate Safety Language Across Clinical Development and Global Markets</h2>
            <p className="lead" style={{marginTop:18}}>RNA therapeutic safety information can evolve alongside clinical development. Adverse events, laboratory findings, immunogenicity concepts, risks, warnings, investigator communications, and updated safety language may appear across multiple documents and reporting cycles.</p>
            <div className="safety-list">
              {['Adverse-event documentation','Serious adverse-event content','Safety narratives','Investigator safety communications','Safety letters','DSUR-related content','Periodic safety documentation','Risk-management materials','Risk communication','Post-market safety content where applicable','Safety-related labeling updates'].map(x=><div className="safety-row" key={x}><CheckIcon /><span>{x}</span></div>)}
            </div>
            <EditorialLink href={urls.pharmacovigilance} ariaLabel="Explore Pharmacovigilance Translation Services">Explore Pharmacovigilance Translation</EditorialLink>
          </div>
          <div className="safety-visual">
            <h3>Keep Safety Terminology Connected</h3>
            <div className="safety-chain">
              {['Clinical Observations','Adverse Event Language','Risk Communication','Regulatory Safety Content','Updated Patient / HCP Communication'].map(x=><div className="safety-chip" key={x}>{x}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell audience-grid">
          <div className="mobile-heading-center">
            <h2>Taking RNA Science From Development to Global Medical Communication</h2>
            <p className="lead" style={{marginTop:18}}>As an RNA program advances, its scientific story reaches audiences far beyond the original research and development team.</p>
            <p style={{marginTop:14}}>Medical affairs professionals, investigators, healthcare providers, scientific communities, commercial teams, and patients may all need access to accurate information—at different levels of technical detail.</p>
            <EditorialLink href={urls.medicalScientific} ariaLabel="Explore Medical and Scientific Translation Services">Explore Medical &amp; Scientific Translation</EditorialLink>
          </div>
          <div className="audience-columns">
            {[
              ['Scientific Community','Manuscripts, publications, abstracts, posters, congress materials, and scientific presentations.'],
              ['Medical Affairs','Medical information, scientific exchange, HCP education, and professional training.'],
              ['Launch & Product Education','Product education, launch-related scientific content, labeling, and product information where applicable.'],
              ['Healthcare Professionals','Accurate scientific language adapted for clinical and professional audiences without changing underlying meaning.']
            ].map(([t,d])=><div className="audience-block" key={t}><strong>{t}</strong><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad pale-bg">
        <div className="shell">
          <SectionHeader title="Complex RNA Science, Explained Clearly to Patients" intro="Patients do not need a molecular biology textbook to understand a clinical study or treatment. They do need information they can understand well enough to make informed decisions, follow instructions, report experiences accurately, and participate meaningfully in their care." />
          <div className="patient-flow">
            <div className="patient-stage"><h3>Scientific Source</h3><p>Technical terminology appropriate for researchers, medical writers, investigators, and regulators.</p></div>
            <div className="patient-stage"><h3>Clinical Communication</h3><p>Accurate clinical language appropriate for study sites, healthcare professionals, and trial operations.</p></div>
            <div className="patient-stage"><h3>Patient Understanding</h3><p>Clear, culturally appropriate communication that preserves essential meaning without unnecessary technical complexity.</p></div>
          </div>
          <div className="doc-list" style={{marginTop:34}}>
            {['Informed consent forms','Assent and re-consent materials','Patient information sheets','Trial recruitment materials','Patient education','Treatment instructions','Questionnaires','Patient-reported outcomes','eCOA and ePRO content','Digital patient experiences','Study results communication','Plain-language summaries','Patient safety communication'].map((x)=><div className="doc-item" key={x}><CheckIcon /><span>{x}</span></div>)}
          </div>
          <div className="link-row">
            <EditorialLink href={urls.icf} ariaLabel="Explore Informed Consent Form Translation Services">Explore ICF Translation</EditorialLink>
            <EditorialLink href={urls.pls} ariaLabel="Explore Plain Language Summary Translation Services">Explore Plain Language Summaries</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell qa-grid">
          <div className="mobile-heading-left">
            <h2>Specialized Human Review for High-Stakes RNA Content</h2>
            <p className="lead" style={{marginTop:18}}>Complex RNA terminology requires contextual judgment. A technically plausible translation can still be wrong if a term is interpreted outside the context of the therapeutic mechanism, study design, manufacturing process, regulatory document, or intended audience.</p>
            <p style={{marginTop:14}}>Sesen uses a human-led, technology-supported quality model designed for specialized life sciences content.</p>
            <div className="qa-statement">Human judgment remains responsible for the final multilingual content. Technology strengthens the workflow; it does not replace scientific context or professional review.</div>
          </div>
          <div className="qa-steps">
            {qaSteps.map(([t,d],i)=><div className="qa-step" key={t}><IconTile>{i%3===0?<PeopleIcon />:i%3===1?<DocumentIcon />:<ShieldIcon />}</IconTile><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad soft-bg">
        <div className="shell global-grid">
          <div className="mobile-heading-center">
            <Eyebrow>Global RNA Programs</Eyebrow>
            <h2>Supporting RNA Therapeutic Development in 150+ Languages</h2>
            <p className="lead" style={{marginTop:18}}>RNA research may begin in one laboratory, but global development can quickly involve clinical sites, investigators, regulatory teams, manufacturing operations, affiliates, reviewers, healthcare professionals, and patients across many countries.</p>
            <p style={{marginTop:14}}>Centralized terminology, translation memory, quality processes, and multilingual production help organizations maintain consistency as the same RNA program expands across markets and languages.</p>
          </div>
          <div className="regions">
            <div className="region"><strong>North America</strong><p>U.S. and Canadian clinical, regulatory, medical, and patient-facing content, including regional language requirements.</p></div>
            <div className="region"><strong>Europe</strong><p>EU and other European markets across clinical development, regulatory submissions, scientific communication, and patient materials.</p></div>
            <div className="region"><strong>Asia-Pacific</strong><p>Major clinical and regulatory markets including Japan, China, Korea, and other APAC countries.</p></div>
            <div className="region"><strong>Latin America</strong><p>Spanish and Portuguese programs for clinical research, regulatory documentation, patient communication, training, and regional activities.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeader eyebrow="Connected Expertise" title="One RNA Program. An Entire Life Sciences Content Ecosystem." intro="RNA therapeutic development sits within biotechnology, overlaps with neighboring advanced modalities such as cell and gene therapy, and extends into therapeutic areas, clinical development, CMC, regulatory, safety, medical, and patient communication. Sesen connects those multilingual needs rather than treating each document as an isolated project." />
          <div className="related-grid">
            {[
              ['Biotechnology','The upstream sector context for RNA programs across research, genomics, emerging therapeutics, clinical development, CMC, and commercialization.',urls.biotechnology,'Explore Biotechnology'],
              ['Cell & Gene Therapy','A neighboring advanced-modality pathway for complex genomic science, specialized manufacturing, clinical development, regulatory content, and patient communication.',urls.cellGene,'Explore Cell & Gene Therapy'],
              ['Oncology','Precision oncology, immuno-oncology, biomarkers, clinical development, personalized therapeutics, safety, regulatory content, and patient communication.',urls.oncology,'Explore Oncology'],
              ['Rare Disease','Genetically defined conditions, small patient populations, specialized clinical programs, regulatory documentation, patient engagement, and targeted therapeutic approaches.',urls.rareDisease,'Explore Rare Disease'],
              ['Clinical Trials','Protocols, investigator documents, site content, consent, assessments, digital trial content, amendments, safety communication, and study reporting.',urls.clinicalTrial,'Explore Clinical Trials'],
              ['CMC','Manufacturing processes, analytical methods, specifications, validation, stability, quality, and Module 3 content.',urls.cmc,'Explore CMC'],
              ['Regulatory','Submissions, health authority communication, CTD/eCTD content, amendments, responses, and product lifecycle updates.',urls.regulatory,'Explore Regulatory'],
              ['Medical & Scientific','Complex scientific information for researchers, medical professionals, publications, medical affairs, healthcare communication, and specialized audiences.',urls.medicalScientific,'Explore Medical & Scientific']
            ].map(([t,d,u,a])=><div className="related-item" key={t}><h3>{t}</h3><p>{d}</p><EditorialLink href={u} ariaLabel={`${a} services`}>{a}</EditorialLink></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad pale-bg">
        <div className="shell">
          <SectionHeader eyebrow="Why Sesen" title="A Translation Partner Built for Complex Life Sciences Programs" intro="RNA therapeutics sit at the intersection of rapidly evolving science and highly controlled development. Sesen brings together the linguistic, scientific, operational, and technology capabilities needed to support that environment across languages." />
          <div className="why-grid">
            {[
              ['Scientific Accuracy','Specialized life sciences translation for molecular biology, genetics, RNA science, clinical medicine, CMC, safety, and regulatory content.',<MoleculeIcon key="1" />],
              ['Terminology Continuity','Controlled language that follows the therapeutic program across documents, teams, audiences, versions, and development stages.',<DocumentIcon key="2" />],
              ['Connected Lifecycle Support','One multilingual framework for research, preclinical, manufacturing, clinical development, regulatory submission, medical affairs, and patient communication.',<GlobeIcon key="3" />],
              ['Professional Human Expertise','Qualified professional linguists and reviewers remain responsible for meaning, context, terminology, readability, and final quality.',<PeopleIcon key="4" />],
              ['ISO-Certified Quality','Structured quality systems supported by ISO 17100, ISO 9001, and ISO 13485 quality-management expertise relevant to regulated life sciences environments.',<ShieldIcon key="5" />],
              ['Secure, Scalable Delivery','Controlled project access, secure infrastructure, terminology, translation memory, and project management support single documents through multi-country portfolios.',<ShieldIcon key="6" />]
            ].map(([t,d,icon])=><div className="why-item" key={t}><IconTile>{icon}</IconTile><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell faq-shell">
          <div className="faq-heading mobile-heading-left">
            <h2>mRNA &amp; RNA Therapeutics Translation FAQs</h2>
            <p className="section-intro">Answers to common questions about specialized multilingual support for RNA-based medicines and development programs.</p>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-grid">
          <div className="mobile-heading-center">
            <h2>Build Multilingual Consistency Into Your RNA Program</h2>
            <p>Whether you are translating a single specialized document or coordinating language across an international RNA therapeutic program, Sesen can help keep scientific meaning, terminology, and quality connected from development through global communication.</p>
          </div>
          <div className="final-cta-actions">
            <CTAButton href={urls.quote}>REQUEST A QUOTE</CTAButton>
            <CTAButton href={urls.sales} secondary>TALK WITH A LIFE SCIENCES SPECIALIST</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
