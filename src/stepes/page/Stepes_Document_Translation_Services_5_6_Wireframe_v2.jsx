import React, { useState } from "react";

const URLS = {
  quote: "https://www.stepes.com/instant-translation-quote/",
  contact: "https://www.stepes.com/contact-sales/",
  business: "https://www.stepes.com/business-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  mtpe: "https://www.stepes.com/machine-translation-post-editing/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  iso: "https://www.stepes.com/iso-certified-translation-services/",
  industries: "https://www.stepes.com/industries/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  formats: "https://www.stepes.com/resources/file-format-support/",
  security: "https://www.stepes.com/security/",
  languages: "https://www.stepes.com/translation-languages/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
};

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={open ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ name, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {name === "language" && <><path {...common} d="M4 5h10M9 3v2c0 5-2.5 8.5-6 11"/><path {...common} d="M5.5 10c1.5 2 3.5 3.5 6 4.5M15 19l3-8 3 8M16 16h4"/></>}
      {name === "term" && <><circle {...common} cx="8" cy="8" r="3"/><circle {...common} cx="16" cy="16" r="3"/><path {...common} d="M10.5 9.5l3 3M5 16h6M13 8h6"/></>}
      {name === "structure" && <><path {...common} d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/></>}
      {name === "layout" && <><rect {...common} x="4" y="3" width="16" height="18" rx="2"/><path {...common} d="M7 7h6M7 11h10M7 15h4M13 15h4"/></>}
      {name === "human" && <><circle {...common} cx="12" cy="7" r="3"/><path {...common} d="M6 20c.8-4.5 3-7 6-7s5.2 2.5 6 7"/></>}
      {name === "ai" && <><rect {...common} x="5" y="5" width="14" height="14" rx="3"/><path {...common} d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3"/></>}
      {name === "edit" && <><path {...common} d="M4 19l4.2-1 9.9-9.9-3.2-3.2L5 14.8 4 19z"/><path {...common} d="M13.8 6l3.2 3.2"/></>}
      {name === "check" && <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M8 12l2.6 2.6L16.5 9"/></>}
      {name === "business" && <><rect {...common} x="4" y="7" width="16" height="13" rx="2"/><path {...common} d="M9 7V4h6v3M4 12h16M10 12v2h4v-2"/></>}
      {name === "technical" && <><path {...common} d="M8 4h8l4 4v12H4V4h4z"/><path {...common} d="M14 4v5h5M8 13h8M8 17h5"/></>}
      {name === "legal" && <><path {...common} d="M12 3v18M5 7h14M6 7l-3 6h6L6 7zM18 7l-3 6h6l-3-6zM8 21h8"/></>}
      {name === "finance" && <><path {...common} d="M4 20h16M6 17v-5M10 17V8M14 17v-7M18 17V5"/></>}
      {name === "medical" && <><path {...common} d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z"/></>}
      {name === "marketing" && <><path {...common} d="M4 14h4l8 5V5l-8 5H4v4z"/><path {...common} d="M8 14l1 5h3"/></>}
      {name === "reuse" && <><path {...common} d="M6 8a7 7 0 0112-2l2 2M18 16a7 7 0 01-12 2l-2-2"/><path {...common} d="M20 4v4h-4M4 20v-4h4"/></>}
      {name === "shield" && <><path {...common} d="M12 3l7 3v5c0 4.7-2.8 8.3-7 10-4.2-1.7-7-5.3-7-10V6l7-3z"/><path {...common} d="M9 12l2 2 4-4"/></>}
      {name === "file" && <><path {...common} d="M6 3h8l4 4v14H6V3z"/><path {...common} d="M14 3v5h5M9 13h6M9 17h5"/></>}
      {name === "globe" && <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></>}
      {name === "scale" && <><path {...common} d="M4 20h16M7 17V9M12 17V4M17 17v-6"/></>}
      {name === "lock" && <><rect {...common} x="5" y="10" width="14" height="10" rx="2"/><path {...common} d="M8 10V7a4 4 0 018 0v3"/></>}
      {name === "industry" && <><circle {...common} cx="12" cy="12" r="2"/><path {...common} d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19"/></>}
      {name === "default" && <circle {...common} cx="12" cy="12" r="8"/>}
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={`dtw56-eyebrow ${dark ? "is-dark" : ""}`}>{children}</div>;
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={`dtw56-editorial-link ${inverse ? "is-inverse" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="dtw56-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 470" role="img">
        <g fill="none" stroke="#777B82" strokeWidth="2">
          <path d="M70 116h144l34 34v196H70z"/>
          <path d="M214 116v38h38"/>
          <path d="M105 180h104M105 204h80M105 247h114M105 271h95"/>
          <rect x="105" y="300" width="114" height="20" rx="4"/>
          <path d="M328 70h156l36 36v220H328z"/>
          <path d="M484 70v40h40"/>
          <path d="M364 142h118M364 168h78"/>
          <rect x="364" y="207" width="122" height="74" rx="8"/>
          <path d="M382 260l24-25 19 15 22-27 23 37"/>
          <path d="M365 304h110"/>
          <path d="M253 213c24-32 48-47 72-47" stroke="#C11D63"/>
          <path d="M283 159l42 7-18 39" stroke="#C11D63"/>
          <path d="M257 247c21 33 45 51 73 54" stroke="#C11D63"/>
          <path d="M291 319l39-18-15-40" stroke="#C11D63"/>
          <circle cx="289" cy="232" r="42" stroke="#C11D63"/>
          <path d="M268 222h42M279 211v8c0 15-7 25-19 32M274 234c7 9 16 15 29 19" stroke="#C11D63"/>
          <path d="M303 256l8-22 8 22M306 249h10" stroke="#C11D63"/>
          <path d="M45 368c58 23 111 30 158 23M423 370c47 6 99 0 155-20" opacity=".45"/>
          <path d="M48 91c45-19 91-22 138-9M431 46c54-12 102-5 145 20" opacity=".35"/>
        </g>
      </svg>
    </div>
  );
}

function LayeredDocumentArtwork() {
  return (
    <div className="dtw56-layer-art" aria-hidden="true">
      <div className="dtw56-layer-card layer-a"><span>HEADINGS</span><span>BODY TEXT</span><span>REFERENCES</span></div>
      <div className="dtw56-layer-card layer-b"><span>TABLES</span><span>FIGURES</span><span>NUMBERS</span></div>
      <div className="dtw56-layer-card layer-c"><span>TERMINOLOGY</span><span>STRUCTURE</span><span>LAYOUT</span></div>
      <div className="dtw56-layer-core"><LineIcon name="language" size={28}/><strong>Meaning</strong></div>
    </div>
  );
}

function TerminologyArtwork() {
  return (
    <div className="dtw56-term-art" aria-hidden="true">
      <div className="dtw56-term-center">Approved<br/>Terminology</div>
      {["Manual", "SOP", "Training", "Contract", "Product Update", "Support"].map((item, i) => (
        <div key={item} className={`dtw56-term-node node-${i + 1}`}>{item}</div>
      ))}
      <svg viewBox="0 0 560 360" preserveAspectRatio="none">
        <g stroke="#C11D63" strokeWidth="1.5" opacity=".65" fill="none">
          <path d="M280 180L102 76M280 180L278 48M280 180L458 86M280 180L100 280M280 180L280 316M280 180L462 276" />
        </g>
      </svg>
    </div>
  );
}

function FormatArtwork() {
  return (
    <div className="dtw56-format-art" aria-hidden="true">
      <div className="dtw56-format-source"><span>DOCX</span><span>PDF</span><span>PPTX</span><span>XLSX</span></div>
      <div className="dtw56-format-pipeline"><LineIcon name="language" size={30}/><strong>Stepes File Workflow</strong><small>Extract · Protect · Translate · QA</small></div>
      <div className="dtw56-format-output"><span>FR</span><span>DE</span><span>JA</span><span>AR</span></div>
    </div>
  );
}

const proofItems = [
  ["100+ Languages", "Global and regional document coverage"],
  ["Subject-Matter Linguists", "Expertise matched to content and industry"],
  ["AI + Human Workflows", "Risk-matched translation and professional review"],
  ["ISO-Certified Quality Processes", "Recognized standards supporting repeatable delivery"],
  ["Multilingual DTP", "Production-ready document formatting"],
];

const documentCategories = [
  {
    icon: "business",
    title: "Business and Corporate Documents",
    body: "Annual reports, business reports, corporate presentations, policies, procedures, employee communications, HR documentation, executive materials, organizational announcements, internal communications, meeting materials, and other corporate documents.",
    link: [URLS.business, "Explore Business Translation Services"],
  },
  {
    icon: "technical",
    title: "Technical and Engineering Documents",
    body: "Technical manuals, engineering specifications, installation instructions, maintenance documentation, standard operating procedures, safety information, product documentation, technical drawings, process documents, service manuals, operating instructions, and related engineering content.",
    link: [URLS.technical, "Explore Technical Translation Services"],
  },
  {
    icon: "legal",
    title: "Legal and Compliance Documents",
    body: "Contracts, agreements, corporate policies, terms and conditions, privacy materials, compliance documentation, intellectual property materials, legal correspondence, litigation-related content, and other corporate legal documents.",
    link: [URLS.legal, "Explore Legal Translation Services"],
    note: "For official documents that require a translation certificate or supporting documentation, use Stepes Certified Translation Services.",
    extraLink: [URLS.certified, "Explore Certified Translation Services"],
  },
  {
    icon: "finance",
    title: "Financial Documents",
    body: "Financial statements, annual reports, audit materials, investor communications, banking documents, investment reports, shareholder materials, accounting documentation, financial presentations, insurance content, and related financial communications.",
    link: [URLS.financial, "Explore Financial Translation Services"],
  },
  {
    icon: "medical",
    title: "Medical, Scientific, and Regulated Documents",
    body: "Medical, healthcare, scientific, clinical, medical device, and regulatory documentation, translated with workflows and professional expertise aligned to document type, audience, intended use, and program requirements.",
    link: [URLS.medical, "Explore Medical Translation Services"],
  },
  {
    icon: "marketing",
    title: "Marketing and Customer Communications",
    body: "Brochures, catalogs, product materials, sales presentations, promotional documents, customer communications, product information, campaign materials, and other marketing content for international audiences.",
    link: [URLS.marketing, "Explore Marketing Translation Services"],
  },
];

const industries = [
  ["medical", "Life Sciences and Healthcare", "Medical, healthcare, clinical, scientific, medical device, pharmaceutical, regulatory, patient-facing, training, and operational documentation."],
  ["technical", "Technology and Software", "Product documentation, technical materials, knowledge content, customer communications, training, policies, and global business documentation."],
  ["industry", "Manufacturing and Engineering", "Technical specifications, manuals, procedures, safety documentation, engineering content, training materials, production information, and global operations documents."],
  ["reuse", "Automotive and Transportation", "Vehicle documentation, service content, technical manuals, operations, logistics, safety materials, training, engineering documentation, and customer communications."],
  ["legal", "Legal and Financial Services", "Agreements, compliance materials, financial reports, investment communications, policies, disclosures, and specialized corporate documentation."],
  ["scale", "Energy and Infrastructure", "Engineering, construction, project, safety, operational, maintenance, environmental, and technical documentation across international programs."],
  ["marketing", "Consumer and Retail", "Product information, corporate documents, catalogs, training, marketing materials, supplier documentation, and customer communications."],
  ["business", "Government and Education", "Administrative documents, educational materials, policies, training, public information, research content, and multilingual communication."],
];

const languageCards = [
  ["Spanish", "Corporate, technical, legal, financial, healthcare, product, and customer-facing documents for Spanish-speaking markets."],
  ["Chinese", "Simplified and Traditional Chinese document translation for business, technical, manufacturing, healthcare, legal, and consumer content."],
  ["French", "Translation for France, Canada, and other French-speaking markets with the appropriate regional language requirements."],
  ["German", "Technical, engineering, manufacturing, legal, financial, corporate, and customer-facing documentation."],
  ["Japanese", "Specialized business and technical documents with appropriate terminology, typography, layout, and communication conventions."],
  ["Korean", "Technology, manufacturing, engineering, consumer, healthcare, and global corporate communication."],
  ["Portuguese", "Documents for Brazil, Portugal, and other Portuguese-speaking audiences with the appropriate regional variant."],
  ["Italian", "Business, technical, legal, marketing, and operational content for Italian markets."],
  ["Arabic", "Professional document translation with right-to-left layout and multilingual production support."],
  ["Dutch", "Technical, corporate, financial, legal, consumer, and business documentation for Dutch-speaking markets."],
  ["Vietnamese", "Business, manufacturing, technology, consumer, healthcare, and operational documents for Vietnamese audiences."],
  ["Thai", "Professional translation and multilingual formatting for Thai business and customer communications."],
];

const faqItems = [
  {
    q: "What is professional document translation?",
    a: "Professional document translation is the process of translating written business content from one language into another while preserving meaning, terminology, structure, context, and usability. Depending on the project, it may include qualified linguists, subject-matter expertise, terminology management, translation memory, AI-assisted workflows, professional review, file engineering, quality assurance, and multilingual formatting.",
  },
  {
    q: "What types of documents can Stepes translate?",
    a: "Stepes translates corporate reports, presentations, policies, employee communications, technical manuals, engineering specifications, SOPs, contracts, legal materials, financial reports, medical and scientific documentation, product information, training materials, brochures, catalogs, and customer communications. Specialized documents can be assigned to linguists with relevant subject-matter expertise.",
  },
  {
    q: "What languages does Stepes support for document translation?",
    a: "Stepes supports professional document translation in more than 100 languages, including Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Arabic, Vietnamese, Thai, and additional European, Asian, Middle Eastern, African, and global languages. Regional variants can be supported according to market requirements.",
  },
  {
    q: "Can Stepes translate PDF documents?",
    a: "Yes. Stepes translates text-based, editable, and scanned PDF documents. Some PDFs can be processed directly, while scanned or non-editable documents may require OCR, content extraction, file preparation, or reconstruction. When available, the original editable source file together with a reference PDF generally supports the most efficient multilingual workflow.",
  },
  {
    q: "Can Stepes preserve the original document formatting?",
    a: "Yes. Stepes provides multilingual desktop publishing and document formatting for projects that require translated files to retain or recreate the professional appearance of the source. Formatting can include layout adjustment, text expansion, typography, tables, graphics, labels, images, page flow, right-to-left language support, and final visual QA.",
  },
  {
    q: "Does Stepes use AI or human translators?",
    a: "Stepes uses professional human translation, AI translation, machine translation, translation memory, terminology management, automated QA, professional post-editing, and human review according to each project's requirements. Business-critical, specialized, nuanced, or higher-risk content may require more intensive professional human involvement, while suitable high-volume content may benefit from AI-assisted translation with professional validation.",
  },
  {
    q: "How does Stepes maintain terminology consistency across multiple documents?",
    a: "Stepes combines terminology management, translation memory, professional linguists, client-approved language, automated QA, and reviewer feedback. Approved terms can be stored in multilingual terminology resources, while validated bilingual content can be retained in translation memory for future reuse or contextual review.",
  },
  {
    q: "Can Stepes translate updated versions of documents we previously translated?",
    a: "Yes. Translation memory and established terminology can help identify previously translated content when an updated version is submitted. Unchanged content can be reused where appropriate, similar content can be reviewed and adapted, and linguistic effort can focus more heavily on new or modified material.",
  },
  {
    q: "How does Stepes assure document translation quality?",
    a: "Stepes builds quality controls throughout the workflow. Depending on project requirements, this can include qualified linguist assignment, terminology management, translation memory, automated QA, professional review, completeness checks, numerical validation, consistency checks, file-level verification, and multilingual visual QA.",
  },
  {
    q: "How does Stepes protect confidential documents?",
    a: "Stepes supports controlled enterprise workflows covering content intake, authorized access, approved technology, professional confidentiality, translation and review, secure delivery, language-asset governance, and appropriate post-project handling. Specific security and data-handling requirements can be addressed according to content type and customer program requirements.",
  },
  {
    q: "Does Stepes provide certified document translations?",
    a: "Yes. Stepes provides certified translation services for use cases that require a translation to be accompanied by appropriate certification or supporting documentation. Requirements can vary according to the receiving authority, document type, country, and purpose.",
  },
  {
    q: "How much does professional document translation cost?",
    a: "Pricing depends on language pair, source word count, subject matter, workflow type, translation-memory leverage, review requirements, file complexity, multilingual formatting, and turnaround time. Stepes can analyze your documents and provide project-specific pricing based on the actual translation and production requirements.",
  },
  {
    q: "How quickly can Stepes translate a document?",
    a: "Turnaround depends on document length, language combination, subject-matter complexity, file format, workflow, number of languages, review requirements, and multilingual production needs. Stepes supports both standard and accelerated workflows and can scale linguistic resources for larger multilingual programs when project requirements allow.",
  },
];

export default function StepesDocumentTranslationServices56() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="dtw56">
      <style>{`
        .dtw56{--magenta:#C11D63;--magenta-dark:#A71954;--burgundy:#7A1542;--pink:#F2A7C6;--blush:#FDF2F7;--ink:#17191D;--text:#3D4148;--muted:#6F747C;--line:#E4E5E8;--soft:#F6F7F8;--dark:#171A20;--dark2:#22262E;font-family:Inter,Arial,sans-serif;color:var(--text);background:#fff;line-height:1.6;overflow:hidden}
        .dtw56 *{box-sizing:border-box}
        .dtw56 a{color:inherit;text-decoration:none}
        .dtw56-shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}
        .dtw56-section{padding:96px 0}
        .dtw56-section.dense{padding:80px 0}
        .dtw56-section.soft{background:var(--soft)}
        .dtw56-section.blush{background:linear-gradient(180deg,#fff 0%,var(--blush) 100%)}
        .dtw56-section.dark{background:var(--dark);color:#fff}
        .dtw56-section.dark .dtw56-body,.dtw56-section.dark .dtw56-intro{color:#D7DAE0}
        .dtw56-section.dark h2,.dtw56-section.dark h3{color:#fff}
        .dtw56-eyebrow{font-size:11px;font-weight:600;line-height:1.4;letter-spacing:.14em;text-transform:uppercase;color:var(--magenta);margin-bottom:14px}
        .dtw56-eyebrow.is-dark{color:var(--pink)}
        .dtw56 h1,.dtw56 h2,.dtw56 h3{margin:0;color:var(--ink);font-weight:600;line-height:1.08;letter-spacing:-.026em}
        .dtw56 h1{font-size:48px;max-width:720px}
        .dtw56 h2{font-size:36px;max-width:820px}
        .dtw56 h3{font-size:24px;line-height:1.2;letter-spacing:-.015em}
        .dtw56-body{font-size:16px;line-height:1.72;color:var(--text);margin:0}
        .dtw56-intro{font-size:18px;line-height:1.68;color:#50545B;max-width:800px;margin:18px 0 0}
        .dtw56-heading.center{text-align:center;margin-left:auto;margin-right:auto}
        .dtw56-heading.center h2,.dtw56-heading.center .dtw56-intro{margin-left:auto;margin-right:auto}
        .dtw56-editorial-link{display:inline-flex;align-items:center;gap:8px;color:var(--magenta);font-size:16px;font-weight:600;margin-top:20px;min-height:44px;transition:.2s ease}
        .dtw56-editorial-link:hover{color:var(--magenta-dark);gap:11px}
        .dtw56-editorial-link:focus-visible,.dtw56-btn:focus-visible,.dtw56-faq-button:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
        .dtw56-editorial-link.is-inverse{color:var(--pink)}
        .dtw56-btn{display:inline-flex;min-height:48px;align-items:center;justify-content:center;gap:9px;border-radius:999px;padding:12px 22px;font-size:16px;font-weight:600;border:1px solid transparent;transition:.2s ease}
        .dtw56-btn.primary,.dtw56-btn.primary:visited,.dtw56-btn.primary:hover,.dtw56-btn.primary:active,.dtw56-btn.primary:focus{background:var(--magenta);color:#fff!important}
        .dtw56-btn.primary svg,.dtw56-btn.primary span{color:#fff!important;stroke:#fff}
        .dtw56-btn.primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
        .dtw56-btn.secondary{background:#fff;border-color:#D6D8DC;color:var(--ink)}
        .dtw56-btn.secondary:hover{border-color:#BABDC3;background:#F9F9FA}
        .dtw56-hero{padding:104px 0 92px;background:radial-gradient(circle at 78% 28%,rgba(193,29,99,.06),transparent 31%),linear-gradient(180deg,#fff,#FBFBFC)}
        .dtw56-hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);gap:60px;align-items:center}
        .dtw56-hero-copy{font-size:18px;line-height:1.7;color:#50545B;max-width:690px;margin:24px 0 0}
        .dtw56-hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}
        .dtw56-hero-art{position:relative;min-height:420px;border-radius:30px;background:#F5F5F6;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;overflow:hidden}
        .dtw56-hero-art:before{content:"";position:absolute;width:180px;height:180px;border:1px solid rgba(193,29,99,.15);border-radius:50%;right:-48px;top:-62px}
        .dtw56-hero-art svg{width:94%;height:auto}
        .dtw56-proof{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .dtw56-proof-grid{display:grid;grid-template-columns:repeat(5,1fr)}
        .dtw56-proof-item{padding:24px 22px;border-right:1px solid var(--line);min-height:108px}
        .dtw56-proof-item:last-child{border-right:0}
        .dtw56-proof-item strong{display:block;font-size:16px;font-weight:600;color:var(--ink);line-height:1.3}
        .dtw56-proof-item span{display:block;font-size:16px;line-height:1.5;color:var(--muted);margin-top:7px}
        .dtw56-split{display:grid;grid-template-columns:minmax(0,.88fr) minmax(420px,1.12fr);gap:76px;align-items:center}
        .dtw56-stack{display:grid;gap:20px;margin-top:30px}
        .dtw56-feature-row{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:18px 0;border-top:1px solid var(--line)}
        .dtw56-feature-row:first-child{border-top:0}
        .dtw56-icon-box{width:44px;height:44px;border-radius:14px;background:var(--blush);color:var(--magenta);display:flex;align-items:center;justify-content:center}
        .dtw56-feature-row h3{font-size:20px;margin-bottom:5px}
        .dtw56-layer-art{height:460px;position:relative;border-radius:30px;background:#F3F4F5;border:1px solid var(--line);overflow:hidden}
        .dtw56-layer-card{position:absolute;width:260px;min-height:160px;background:#fff;border:1px solid #D9DCE0;border-radius:20px;padding:26px;box-shadow:0 20px 50px rgba(24,26,30,.06);display:grid;gap:12px;transform-origin:center}
        .dtw56-layer-card span{font-size:14px;color:#646A73;letter-spacing:.04em;border-bottom:1px solid var(--line);padding-bottom:8px}
        .dtw56-layer-card.layer-a{left:42px;top:64px;transform:rotate(-5deg)}
        .dtw56-layer-card.layer-b{right:34px;top:78px;transform:rotate(6deg)}
        .dtw56-layer-card.layer-c{left:154px;bottom:48px;transform:rotate(1deg)}
        .dtw56-layer-core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:116px;height:116px;border-radius:50%;background:var(--magenta);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;box-shadow:0 18px 42px rgba(193,29,99,.2);z-index:4}
        .dtw56-layer-core strong{font-size:16px;font-weight:600}
        .dtw56-workflow-matrix{margin-top:48px;border:1px solid #353A43;border-radius:28px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;background:#1C2027}
        .dtw56-workflow-cell{padding:36px 38px;min-height:286px;position:relative}
        .dtw56-workflow-cell:nth-child(odd){border-right:1px solid #353A43}
        .dtw56-workflow-cell:nth-child(-n+2){border-bottom:1px solid #353A43}
        .dtw56-workflow-icon{width:46px;height:46px;border-radius:14px;border:1px solid #414753;color:var(--pink);display:flex;align-items:center;justify-content:center;margin-bottom:24px}
        .dtw56-workflow-cell h3{margin-bottom:12px}
        .dtw56-workflow-cell p{font-size:16px;line-height:1.7;color:#CACED5;margin:0}
        .dtw56-workflow-note{font-size:17px;font-weight:600;color:#fff;text-align:center;margin:34px auto 0;max-width:760px}
        .dtw56-workflow-links{display:flex;justify-content:center;gap:26px;flex-wrap:wrap;margin-top:10px}
        .dtw56-doc-grid{margin-top:44px;display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line);border-left:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .dtw56-doc-item{padding:34px 36px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:310px}
        .dtw56-doc-item .dtw56-icon-box{margin-bottom:22px}
        .dtw56-doc-item h3{margin-bottom:12px}
        .dtw56-doc-note{font-size:16px;line-height:1.65;color:#626770;margin:14px 0 0;padding-top:14px;border-top:1px solid var(--line)}
        .dtw56-doc-links{display:flex;flex-wrap:wrap;column-gap:20px;row-gap:2px}
        .dtw56-term-wrap{display:grid;grid-template-columns:minmax(0,.92fr) minmax(480px,1.08fr);gap:70px;align-items:center}
        .dtw56-term-art{height:420px;border-radius:30px;background:#fff;border:1px solid #F0D9E3;position:relative;overflow:hidden}
        .dtw56-term-art svg{position:absolute;inset:0;width:100%;height:100%}
        .dtw56-term-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:146px;height:146px;border-radius:50%;background:var(--magenta);color:white;display:flex;align-items:center;justify-content:center;text-align:center;font-size:16px;font-weight:600;z-index:2}
        .dtw56-term-node{position:absolute;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid #DADDE1;color:#383C43;font-size:14px;font-weight:600;z-index:2;white-space:nowrap}
        .dtw56-term-node.node-1{left:38px;top:50px}.dtw56-term-node.node-2{left:222px;top:24px}.dtw56-term-node.node-3{right:28px;top:60px}.dtw56-term-node.node-4{left:34px;bottom:48px}.dtw56-term-node.node-5{left:202px;bottom:22px}.dtw56-term-node.node-6{right:32px;bottom:54px}
        .dtw56-value-points{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:34px;border-top:1px solid #EBCDD9}
        .dtw56-value-point{padding:22px 22px 22px 0;border-bottom:1px solid #EBCDD9}
        .dtw56-value-point:nth-child(odd){padding-right:26px;border-right:1px solid #EBCDD9}
        .dtw56-value-point:nth-child(even){padding-left:26px}
        .dtw56-value-point strong{display:block;font-size:17px;color:var(--ink);margin-bottom:5px}
        .dtw56-version-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:76px;align-items:start;margin-top:44px}
        .dtw56-version-rail{border-top:1px solid var(--line)}
        .dtw56-version-row{display:grid;grid-template-columns:42px 1fr;gap:16px;padding:25px 0;border-bottom:1px solid var(--line)}
        .dtw56-version-dot{width:38px;height:38px;border-radius:50%;border:1px solid #D8DADF;display:flex;align-items:center;justify-content:center;color:var(--magenta);background:#fff}
        .dtw56-version-row h3{font-size:20px;margin-bottom:6px}
        .dtw56-quote-line{font-size:18px;line-height:1.55;font-weight:600;color:var(--ink);padding:26px;border-left:3px solid var(--magenta);background:var(--blush);border-radius:0 18px 18px 0;margin-top:28px}
        .dtw56-process{margin-top:46px;display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .dtw56-step{padding:32px 26px;min-height:330px;border-right:1px solid var(--line)}
        .dtw56-step:last-child{border-right:0}
        .dtw56-step-number{font-size:14px;font-weight:600;color:var(--magenta);letter-spacing:.08em;margin-bottom:22px}
        .dtw56-step h3{font-size:21px;margin-bottom:12px}
        .dtw56-step p{font-size:16px;line-height:1.66;margin:0;color:#555A61}
        .dtw56-process-label{text-align:center;font-size:16px;font-weight:600;color:var(--muted);margin-top:24px}
        .dtw56-industry-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:44px;border-top:1px solid var(--line)}
        .dtw56-industry-row{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:28px 26px 28px 0;border-bottom:1px solid var(--line)}
        .dtw56-industry-row:nth-child(odd){border-right:1px solid var(--line);padding-right:32px}
        .dtw56-industry-row:nth-child(even){padding-left:32px}
        .dtw56-industry-row .dtw56-icon-box{background:#F7F7F8;color:#555A61}
        .dtw56-industry-row h3{font-size:20px;margin-bottom:6px}
        .dtw56-linguist-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
        .dtw56-linguist-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:28px;overflow:hidden}
        .dtw56-linguist-item{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:220px}
        .dtw56-linguist-item:nth-child(2n){border-right:0}.dtw56-linguist-item:nth-child(n+3){border-bottom:0}
        .dtw56-linguist-item .dtw56-icon-box{margin-bottom:18px}
        .dtw56-linguist-item h3{font-size:20px;margin-bottom:8px}
        .dtw56-quality-wrap{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;align-items:start}
        .dtw56-quality-list{border-top:1px solid #373C45}
        .dtw56-quality-row{display:grid;grid-template-columns:44px 1fr;gap:17px;padding:23px 0;border-bottom:1px solid #373C45}
        .dtw56-quality-row .dtw56-icon-box{background:#242932;border:1px solid #3B414C;color:var(--pink)}
        .dtw56-quality-row h3{font-size:20px;margin-bottom:5px}
        .dtw56-quality-cert{margin-top:26px;padding-top:22px;border-top:1px solid #373C45;font-size:16px;line-height:1.7;color:#D7DAE0}
        .dtw56-quality-cert a{color:var(--pink);font-weight:600}
        .dtw56-quality-cert a:hover{text-decoration:underline}
        .dtw56-dtp-diagram{height:430px;border:1px solid var(--line);border-radius:30px;background:#F7F7F8;padding:34px;display:flex;align-items:center;justify-content:center}
        .dtw56-dtp-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:14px;align-items:center;width:100%}
        .dtw56-dtp-box{background:#fff;border:1px solid #D9DCE0;border-radius:18px;min-height:150px;padding:24px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:10px;color:var(--ink)}
        .dtw56-dtp-box span{font-size:16px;font-weight:600}.dtw56-dtp-arrow{color:var(--magenta);display:flex;align-items:center}
        .dtw56-format-layout{display:grid;grid-template-columns:.84fr 1.16fr;gap:68px;align-items:center}
        .dtw56-format-art{height:330px;border-radius:28px;background:#fff;border:1px solid var(--line);display:grid;grid-template-columns:1fr 1.2fr 1fr;gap:18px;align-items:center;padding:30px}
        .dtw56-format-source,.dtw56-format-output{display:grid;gap:10px}
        .dtw56-format-source span,.dtw56-format-output span{height:44px;border-radius:12px;border:1px solid #D9DCE0;display:flex;align-items:center;justify-content:center;background:#FAFAFB;font-size:14px;font-weight:600;color:#555A61}
        .dtw56-format-pipeline{border-radius:20px;background:var(--blush);color:var(--magenta);padding:28px 18px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px}
        .dtw56-format-pipeline strong{font-size:16px;color:var(--ink)}.dtw56-format-pipeline small{font-size:14px;color:#6A5A62;line-height:1.5}
        .dtw56-format-pills{display:flex;gap:8px;flex-wrap:wrap;margin-top:24px}
        .dtw56-format-pills span{border:1px solid #DCDDE0;background:#fff;border-radius:999px;padding:8px 12px;font-size:14px;font-weight:600;color:#555A61}
        .dtw56-security-grid{display:grid;grid-template-columns:.76fr 1.24fr;gap:72px;align-items:start}
        .dtw56-security-matrix{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:28px;overflow:hidden}
        .dtw56-security-item{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:210px}
        .dtw56-security-item:nth-child(2n){border-right:0}.dtw56-security-item:nth-child(n+5){border-bottom:0}
        .dtw56-security-item .dtw56-icon-box{margin-bottom:18px}.dtw56-security-item h3{font-size:20px;margin-bottom:7px}
        .dtw56-language-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:42px}
        .dtw56-language-card{border:1px solid var(--line);border-radius:20px;padding:24px;background:#fff;min-height:190px}
        .dtw56-language-card strong{font-size:18px;color:var(--ink);font-weight:600}.dtw56-language-card p{font-size:16px;line-height:1.58;color:#5B6068;margin:8px 0 0}
        .dtw56-scale-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}
        .dtw56-scale-panel{border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .dtw56-scale-row{display:grid;grid-template-columns:44px 1fr;gap:16px;padding:26px 28px;border-bottom:1px solid var(--line)}
        .dtw56-scale-row:last-child{border-bottom:0}.dtw56-scale-row h3{font-size:20px;margin-bottom:6px}
        .dtw56-why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px}
        .dtw56-why-item{border-top:2px solid var(--magenta);padding:24px 0 0;min-height:200px}.dtw56-why-item h3{font-size:20px;margin-bottom:8px}
        .dtw56-why-statement{margin:42px auto 0;max-width:880px;text-align:center;font-size:18px;line-height:1.6;font-weight:600;color:var(--ink)}
        .dtw56-faq{max-width:980px;margin:42px auto 0;border-top:1px solid var(--line)}
        .dtw56-faq-item{border-bottom:1px solid var(--line)}
        .dtw56-faq-button{width:100%;background:transparent;border:0;padding:24px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;text-align:left;color:var(--ink);cursor:pointer;font-size:18px;font-weight:600;line-height:1.4}
        .dtw56-faq-button svg{flex:0 0 auto;color:var(--magenta)}
        .dtw56-faq-answer{font-size:16px;line-height:1.72;color:#555A61;max-width:840px;padding:0 48px 26px 0;margin:0}
        .dtw56-final{padding:88px 0;background:var(--burgundy);color:#fff}
        .dtw56-final-grid{display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center}
        .dtw56-final h2{color:#fff;max-width:760px}.dtw56-final p{font-size:18px;line-height:1.65;color:#F6E8EE;max-width:780px;margin:18px 0 0}
        .dtw56-final-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
        .dtw56-final .dtw56-btn.secondary{background:#fff;color:var(--burgundy);border-color:#fff}
        .dtw56-final-proof{font-size:14px;color:#F2D8E3;margin-top:20px;letter-spacing:.025em}
        @media(max-width:1100px){
          .dtw56-shell{padding-left:40px;padding-right:40px}.dtw56-hero-grid{grid-template-columns:1fr 440px;gap:38px}.dtw56-proof-grid{grid-template-columns:repeat(5,1fr)}.dtw56-proof-item{padding:22px 14px}.dtw56-process{grid-template-columns:repeat(3,1fr)}.dtw56-step:nth-child(3){border-right:0}.dtw56-step:nth-child(-n+3){border-bottom:1px solid var(--line)}.dtw56-step:nth-child(4){border-left:0}.dtw56-language-grid{grid-template-columns:repeat(3,1fr)}
        }
        @media(max-width:900px){
          .dtw56-shell{padding-left:24px;padding-right:24px}.dtw56-section{padding:80px 0}.dtw56-section.dense{padding:72px 0}.dtw56-hero{padding:88px 0 80px}.dtw56 h1{font-size:42px}.dtw56 h2{font-size:32px}.dtw56 h3{font-size:22px}.dtw56-hero-grid,.dtw56-split,.dtw56-term-wrap,.dtw56-version-grid,.dtw56-linguist-grid,.dtw56-quality-wrap,.dtw56-format-layout,.dtw56-security-grid,.dtw56-scale-wrap{grid-template-columns:1fr;gap:44px}.dtw56-hero-grid{text-align:center}.dtw56-hero-copy,.dtw56-hero h1{margin-left:auto;margin-right:auto}.dtw56-hero-actions{justify-content:center}.dtw56-hero-art{min-height:360px}.dtw56-proof-grid{grid-template-columns:repeat(2,1fr)}.dtw56-proof-item{border-bottom:1px solid var(--line)}.dtw56-proof-item:nth-child(2n){border-right:0}.dtw56-proof-item:last-child{grid-column:1/-1;border-bottom:0}.dtw56-heading.stack-center{text-align:center}.dtw56-heading.stack-center h2,.dtw56-heading.stack-center .dtw56-intro{margin-left:auto;margin-right:auto}.dtw56-heading.stack-center > .dtw56-body,.dtw56-heading.stack-center .dtw56-stack,.dtw56-heading.stack-center .dtw56-value-points,.dtw56-heading.stack-center .dtw56-format-pills{text-align:left}.dtw56-layer-art,.dtw56-term-art{height:400px}.dtw56-workflow-matrix{grid-template-columns:1fr}.dtw56-workflow-cell{border-right:0!important;border-bottom:1px solid #353A43!important;min-height:0}.dtw56-workflow-cell:last-child{border-bottom:0!important}.dtw56-doc-grid{grid-template-columns:1fr}.dtw56-doc-item{border-right:0}.dtw56-value-points{grid-template-columns:1fr}.dtw56-value-point{padding-left:0!important;padding-right:0!important;border-right:0!important}.dtw56-process{grid-template-columns:1fr 1fr}.dtw56-step{border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important;min-height:270px}.dtw56-step:nth-child(2n){border-right:0!important}.dtw56-step:last-child{grid-column:1/-1;border-bottom:0!important;border-right:0!important}.dtw56-industry-grid{grid-template-columns:1fr}.dtw56-industry-row{border-right:0!important;padding-left:0!important;padding-right:0!important}.dtw56-linguist-panel{grid-template-columns:1fr 1fr}.dtw56-language-grid{grid-template-columns:repeat(2,1fr)}.dtw56-why-grid{grid-template-columns:1fr 1fr}.dtw56-final-grid{grid-template-columns:1fr}.dtw56-final-actions{justify-content:flex-start}
        }
        @media(max-width:600px){
          .dtw56-shell{padding-left:20px;padding-right:20px}.dtw56-section,.dtw56-section.dense{padding:68px 0}.dtw56-hero{padding:72px 0 64px}.dtw56 h1{font-size:38px}.dtw56 h2{font-size:30px}.dtw56 h3{font-size:20px}.dtw56-intro,.dtw56-hero-copy{font-size:18px}.dtw56-hero-actions{display:grid;grid-template-columns:1fr;width:100%}.dtw56-btn{width:100%;min-height:50px}.dtw56-hero-art{min-height:290px;border-radius:24px}.dtw56-proof-grid{grid-template-columns:1fr}.dtw56-proof-item,.dtw56-proof-item:nth-child(2n),.dtw56-proof-item:last-child{grid-column:auto;border-right:0;border-bottom:1px solid var(--line);min-height:0;padding:18px 0}.dtw56-proof-item:last-child{border-bottom:0}.dtw56-heading.center,.dtw56-heading.stack-center{text-align:center}.dtw56-feature-row{text-align:left}.dtw56-layer-art{height:340px}.dtw56-layer-card{width:190px;min-height:128px;padding:18px}.dtw56-layer-card.layer-a{left:12px;top:50px}.dtw56-layer-card.layer-b{right:10px;top:72px}.dtw56-layer-card.layer-c{left:75px;bottom:34px}.dtw56-layer-core{width:94px;height:94px}.dtw56-workflow-cell{padding:28px 22px}.dtw56-doc-item{padding:28px 22px;min-height:0}.dtw56-term-art{height:360px}.dtw56-term-center{width:120px;height:120px}.dtw56-term-node{font-size:13px;padding:8px 10px}.dtw56-term-node.node-1{left:12px}.dtw56-term-node.node-2{left:116px}.dtw56-term-node.node-3{right:8px}.dtw56-term-node.node-4{left:10px}.dtw56-term-node.node-5{left:100px}.dtw56-term-node.node-6{right:8px}.dtw56-version-grid{margin-top:34px}.dtw56-process{grid-template-columns:1fr;border-radius:22px}.dtw56-step,.dtw56-step:nth-child(2n),.dtw56-step:last-child{grid-column:auto;border-right:0!important;border-bottom:1px solid var(--line)!important;min-height:0;padding:26px 22px}.dtw56-step:last-child{border-bottom:0!important}.dtw56-industry-row{grid-template-columns:42px 1fr;gap:14px}.dtw56-linguist-panel{grid-template-columns:1fr}.dtw56-linguist-item{border-right:0!important;border-bottom:1px solid var(--line)!important;min-height:0;padding:26px 22px}.dtw56-linguist-item:last-child{border-bottom:0!important}.dtw56-dtp-diagram{height:auto;padding:24px}.dtw56-dtp-flow{grid-template-columns:1fr;gap:10px}.dtw56-dtp-box{min-height:110px}.dtw56-dtp-arrow{transform:rotate(90deg);justify-content:center}.dtw56-format-art{height:auto;grid-template-columns:1fr;padding:22px}.dtw56-format-source,.dtw56-format-output{grid-template-columns:repeat(4,1fr)}.dtw56-security-matrix{grid-template-columns:1fr}.dtw56-security-item{border-right:0!important;border-bottom:1px solid var(--line)!important;min-height:0}.dtw56-security-item:last-child{border-bottom:0!important}.dtw56-language-grid{grid-template-columns:1fr}.dtw56-language-card{min-height:0}.dtw56-why-grid{grid-template-columns:1fr}.dtw56-why-item{min-height:0}.dtw56-faq-button{font-size:17px;padding:21px 0}.dtw56-faq-answer{padding-right:0}.dtw56-final{padding:72px 0}.dtw56-final-actions{display:grid;grid-template-columns:1fr}.dtw56-final-proof{font-size:14px}
        }
        @media(max-width:340px){.dtw56-shell{padding-left:20px;padding-right:20px}.dtw56-layer-art{height:310px}.dtw56-layer-card{width:165px;padding:14px}.dtw56-layer-card span{font-size:12px}.dtw56-term-art{height:330px}.dtw56-format-source,.dtw56-format-output{grid-template-columns:1fr 1fr}}
      `}</style>

      <section className="dtw56-hero">
        <div className="dtw56-shell dtw56-hero-grid">
          <div>
            <Eyebrow>Professional Translation Services</Eyebrow>
            <h1>Professional Document Translation Services</h1>
            <p className="dtw56-hero-copy">Translate business-critical documents into 100+ languages with professional linguists, AI-enabled workflows, terminology control, rigorous quality assurance, and multilingual production that keeps every document accurate, consistent, and ready to use.</p>
            <div className="dtw56-hero-actions">
              <a className="dtw56-btn primary" href={URLS.quote}><span>Get an Instant Quote</span><ArrowIcon /></a>
              <a className="dtw56-btn secondary" href={URLS.contact}>Contact Sales</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="dtw56-proof" aria-label="Document translation capabilities">
        <div className="dtw56-shell dtw56-proof-grid">
          {proofItems.map(([title, desc]) => <div className="dtw56-proof-item" key={title}><strong>{title}</strong><span>{desc}</span></div>)}
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell dtw56-split">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Complete Document Context</Eyebrow>
            <h2>Your Documents Carry More Than Words</h2>
            <p className="dtw56-intro">A professional document may contain specialized terminology, headings, tables, figures, numbers, references, instructions, diagrams, formatting, and carefully structured information that all work together to communicate meaning. Professional document translation has to preserve that complete experience.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes combines professional linguists, subject-matter expertise, translation technology, terminology management, file engineering, quality assurance, and multilingual desktop publishing to translate documents without losing the structure and context that make them useful.</p>
            <div className="dtw56-stack">
              {[
                ["language","Language","Preserve meaning, intent, tone, and subject-matter accuracy across languages."],
                ["term","Terminology","Keep product names, technical terms, legal expressions, regulated terminology, and company language consistent."],
                ["structure","Structure","Protect headings, tables, lists, numbering, references, footnotes, and document relationships."],
                ["layout","Presentation","Maintain the layout, typography, graphics, spacing, and visual hierarchy required for professional multilingual delivery."],
              ].map(([icon,title,body]) => <div className="dtw56-feature-row" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
            </div>
          </div>
          <LayeredDocumentArtwork />
        </div>
      </section>

      <section className="dtw56-section dark">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow dark>Workflow Choice</Eyebrow>
            <h2>The Right Translation Workflow for Every Document</h2>
            <p className="dtw56-intro">A legal agreement, employee handbook, engineering specification, marketing brochure, and high-volume internal report should not automatically receive the same translation process. Stepes configures the workflow around the document’s purpose, audience, complexity, visibility, business impact, confidentiality, quality requirements, timing, and volume.</p>
          </div>
          <div className="dtw56-workflow-matrix">
            {[
              ["human","Professional Human Translation","For high-value, specialized, regulated, nuanced, or business-critical documents where professional linguistic judgment, subject-matter knowledge, and language quality are central to the outcome."],
              ["ai","AI + Professional Human Review","Advanced AI translation accelerates production while qualified human reviewers validate meaning, terminology, completeness, fluency, context, and usability for enterprise-scale content."],
              ["edit","Machine Translation Post-Editing","For suitable high-volume content, professional linguists review machine-generated translations, correct linguistic issues, apply approved terminology, improve readability, and align output with agreed quality requirements."],
              ["check","Specialist Review and Validation","Technical, medical, legal, financial, scientific, and regulated materials can receive additional linguistic or subject-matter review according to document risk and project requirements."],
            ].map(([icon,title,body]) => <div className="dtw56-workflow-cell" key={title}><div className="dtw56-workflow-icon"><LineIcon name={icon}/></div><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <p className="dtw56-workflow-note">One translation technology does not fit every document. Stepes builds the workflow around the content.</p>
          <div className="dtw56-workflow-links">
            <EditorialLink href={URLS.aiHuman} inverse>Explore AI + Human Translation Workflow</EditorialLink>
            <EditorialLink href={URLS.mtpe} inverse>Explore Machine Translation Post-Editing</EditorialLink>
          </div>
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow>Document Coverage</Eyebrow>
            <h2>Translate Every Document Your Global Business Depends On</h2>
            <p className="dtw56-intro">Global organizations produce documents across departments, products, markets, and business processes. Stepes supports both individual projects and ongoing multilingual document programs.</p>
          </div>
          <div className="dtw56-doc-grid">
            {documentCategories.map(item => <article className="dtw56-doc-item" key={item.title}>
              <div className="dtw56-icon-box"><LineIcon name={item.icon}/></div>
              <h3>{item.title}</h3>
              <p className="dtw56-body">{item.body}</p>
              {item.note && <p className="dtw56-doc-note">{item.note}</p>}
              <div className="dtw56-doc-links">
                {item.link && <EditorialLink href={item.link[0]}>{item.link[1]}</EditorialLink>}
                {item.extraLink && <EditorialLink href={item.extraLink[0]}>{item.extraLink[1]}</EditorialLink>}
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="dtw56-section blush">
        <div className="dtw56-shell dtw56-term-wrap">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Terminology Governance</Eyebrow>
            <h2>One Vocabulary Across Every Document</h2>
            <p className="dtw56-intro">A product name may appear in a specification, manual, training presentation, service procedure, contract, safety notice, support document, and product update. When important terms change from one file to another, the problem extends beyond a single translation.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes connects terminology management with translation memory, professional linguists, AI-assisted workflows, and quality assurance to help organizations maintain one controlled multilingual vocabulary across their document ecosystem.</p>
            <div className="dtw56-value-points">
              <div className="dtw56-value-point"><strong>Terminology Management</strong><p className="dtw56-body">Define approved translations for product names, technical terms, abbreviations, legal expressions, regulated terminology, brand language, and specialized concepts.</p></div>
              <div className="dtw56-value-point"><strong>Translation Memory</strong><p className="dtw56-body">Surface previously translated and approved bilingual content when the same or similar language appears in future documents.</p></div>
              <div className="dtw56-value-point"><strong>Professional Review</strong><p className="dtw56-body">Evaluate terminology in context when a preferred term needs adjustment for a particular document, audience, or market.</p></div>
              <div className="dtw56-value-point"><strong>AI-Assisted Consistency</strong><p className="dtw56-body">Help identify terminology deviations, conflicting translations, missing content, repeated language, and other consistency risks across large document sets.</p></div>
            </div>
            <EditorialLink href={URLS.terminology}>Explore Terminology Management</EditorialLink>
          </div>
          <TerminologyArtwork />
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow>Version Continuity</Eyebrow>
            <h2>Keep Every Version Connected</h2>
            <p className="dtw56-intro">Manuals are revised. Policies change. Product specifications evolve. Contracts receive amendments. Financial reports repeat. Training documents are updated for new releases. Translating every revision as a completely new project wastes approved language and makes inconsistency more likely.</p>
          </div>
          <div className="dtw56-version-grid">
            <div>
              <p className="dtw56-body">Stepes helps enterprises connect document versions through translation memory, terminology management, project history, reviewer feedback, and structured multilingual workflows.</p>
              <div className="dtw56-quote-line">Translate once. Learn from every approval. Build more value into every future document.</div>
              <EditorialLink href={URLS.translationMemory}>Explore Translation Memory</EditorialLink>
            </div>
            <div className="dtw56-version-rail">
              {[
                ["reuse","Reuse Approved Translation","Previously validated translations can be identified when unchanged or similar source content appears again, helping avoid unnecessary retranslation."],
                ["edit","Focus on What Changed","Linguists and reviewers can concentrate more attention on new, modified, complex, or high-risk content instead of recreating established language."],
                ["term","Protect Terminology","Approved product, technical, legal, regulatory, and brand terminology carries forward across revisions and related documents."],
                ["check","Build on Reviewer Feedback","Approved corrections and linguistic decisions can strengthen terminology, translation memory, project instructions, and future workflows."],
              ].map(([icon,title,body]) => <div className="dtw56-version-row" key={title}><div className="dtw56-version-dot"><LineIcon name={icon} size={20}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="dtw56-section soft">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow>Delivery Process</Eyebrow>
            <h2>From Source Document to Multilingual Delivery</h2>
            <p className="dtw56-intro">Stepes manages the complete document translation lifecycle—from initial file analysis and linguistic preparation through translation, review, formatting, QA, and final multilingual delivery.</p>
          </div>
          <div className="dtw56-process">
            {[
              ["01","Analyze","Review source content, languages, file structure, subject matter, terminology, translation memory, formatting needs, intended use, and delivery requirements."],
              ["02","Prepare","Identify translatable content, protect non-translatable elements, apply approved terminology, analyze translation-memory leverage, and prepare files for translation."],
              ["03","Translate","Route content to the appropriate professional human, AI-assisted, hybrid, or MTPE workflow with the right linguistic resources and references."],
              ["04","Review and QA","Validate accuracy, completeness, terminology, grammar, spelling, numbers, consistency, protected content, formatting, and other agreed requirements."],
              ["05","Format and Deliver","Complete multilingual formatting, visual QA, final file checks, and delivery in the required editable, digital, or production-ready format."],
            ].map(([n,title,body]) => <div className="dtw56-step" key={n}><div className="dtw56-step-number">{n}</div><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <div className="dtw56-process-label">Analyze → Prepare → Translate → Review &amp; QA → Format &amp; Deliver</div>
          <div style={{textAlign:"center"}}><EditorialLink href={URLS.quality}>Explore Translation Quality Assurance</EditorialLink></div>
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow>Subject-Matter Expertise</Eyebrow>
            <h2>Document Expertise Across Global Industries</h2>
            <p className="dtw56-intro">A legal contract, aerospace maintenance manual, financial report, and medical document should not be translated by the same linguist simply because the target language is the same. Stepes combines language expertise with domain specialization so documents are translated by resources appropriate to their subject matter and intended use.</p>
          </div>
          <div className="dtw56-industry-grid">
            {industries.map(([icon,title,body]) => <div className="dtw56-industry-row" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
          </div>
          <div style={{textAlign:"center"}}><EditorialLink href={URLS.industries}>Explore All Industries</EditorialLink></div>
        </div>
      </section>

      <section className="dtw56-section soft">
        <div className="dtw56-shell dtw56-linguist-grid">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Professional Expertise</Eyebrow>
            <h2>The Right Linguist for the Right Document</h2>
            <p className="dtw56-intro">Speaking two languages does not automatically qualify someone to translate specialized professional documents. Technical terminology, legal concepts, financial reporting, medical language, engineering processes, corporate communications, and regulated content all require different knowledge.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes assigns professional linguists according to language pair, subject matter, document type, technical complexity, audience, terminology, and quality requirements. Where continuity matters, established linguistic resources and project knowledge can support recurring programs over time.</p>
          </div>
          <div className="dtw56-linguist-panel">
            {[
              ["language","Language Expertise","Professional linguists translate into the appropriate target language and understand regional language conventions."],
              ["industry","Subject-Matter Expertise","Projects can be matched with translators experienced in technical, legal, financial, medical, scientific, engineering, technology, marketing, and other fields."],
              ["human","Contextual Judgment","Professional translators evaluate ambiguity, terminology, tone, sentence relationships, and meaning in ways automated generation alone may not reliably resolve."],
              ["ai","Technology-Enabled Work","Linguists work with translation memory, terminology resources, automated QA, AI-assisted tools, and project instructions that improve consistency and efficiency."],
            ].map(([icon,title,body]) => <div className="dtw56-linguist-item" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><h3>{title}</h3><p className="dtw56-body">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dtw56-section dark">
        <div className="dtw56-shell dtw56-quality-wrap">
          <div className="dtw56-heading stack-center">
            <Eyebrow dark>Quality Architecture</Eyebrow>
            <h2>AI-Powered Efficiency. Professional Human Quality.</h2>
            <p className="dtw56-intro">AI is transforming how translation is produced, but faster language generation does not eliminate the need for quality management. Enterprises still need to know whether a translated document is accurate, complete, consistent, appropriate for its audience, aligned with approved terminology, and ready for business use.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes combines AI and automation with professional linguistic expertise through quality workflows designed around the requirements and risk level of the content.</p>
            <EditorialLink href={URLS.quality} inverse>Explore Stepes Translation Quality Assurance</EditorialLink>
          </div>
          <div>
            <div className="dtw56-quality-list">
            {[
              ["human","Qualified Linguistic Expertise","Professional translators and reviewers provide the language and subject-matter judgment needed for business-critical content."],
              ["term","Controlled Terminology","Approved terminology helps maintain consistent product, technical, legal, regulatory, and brand language across translations."],
              ["reuse","Translation Memory","Previously validated bilingual content can be reused or reviewed in context, improving consistency across recurring documents and future versions."],
              ["ai","Automated Quality Assurance","Automated checks help identify potential issues such as missing content, numerical discrepancies, terminology deviations, inconsistent translations, and protected-content errors."],
              ["check","Professional Human Validation","Human reviewers evaluate meaning, accuracy, fluency, terminology, style, context, and other requirements that depend on professional judgment."],
              ["file","File-Level Quality","Translation QA can extend beyond language to verify formatting, document integrity, multilingual layout, and final output requirements."],
            ].map(([icon,title,body]) => <div className="dtw56-quality-row" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
            </div>
            <p className="dtw56-quality-cert">Stepes quality processes are supported by internationally recognized standards for professional translation and quality management. <a href={URLS.iso}>Explore ISO Certified Translation Services</a>.</p>
          </div>
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell dtw56-split">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Multilingual Production</Eyebrow>
            <h2>Preserve the Document, Not Just the Translation</h2>
            <p className="dtw56-intro">Translation changes the physical shape of language. Text expansion, different writing systems, fonts, line breaks, tables, labels, callouts, and page relationships can all change when a document becomes multilingual.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes provides multilingual desktop publishing and document production services to prepare translated materials for digital distribution, printing, internal use, customer delivery, and other publishing requirements.</p>
            <div className="dtw56-stack">
              {[
                ["layout","Multilingual Layout","Adjust text frames, spacing, page flow, margins, columns, and other layout elements to accommodate translated content."],
                ["structure","Tables and Graphics","Correct table dimensions, charts, diagrams, labels, captions, callouts, and graphics affected by language expansion or directionality, including translatable text embedded in graphics when included in scope."],
                ["language","International Typography","Apply fonts and typography appropriate for Latin, Asian, Cyrillic, Arabic, Hebrew, and other writing systems."],
                ["check","Visual QA","Review the finished multilingual document for truncation, overflow, misalignment, incorrect line breaks, missing content, and other presentation issues."],
              ].map(([icon,title,body]) => <div className="dtw56-feature-row" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
            </div>
            <EditorialLink href={URLS.dtp}>Explore Multilingual Desktop Publishing</EditorialLink>
          </div>
          <div className="dtw56-dtp-diagram" role="img" aria-label="Source document to production-ready document workflow">
            <div className="dtw56-dtp-flow">
              <div className="dtw56-dtp-box"><LineIcon name="file" size={30}/><span>Source Document</span></div>
              <div className="dtw56-dtp-arrow"><ArrowIcon size={24}/></div>
              <div className="dtw56-dtp-box"><LineIcon name="language" size={30}/><span>Translation + Formatting</span></div>
              <div className="dtw56-dtp-arrow"><ArrowIcon size={24}/></div>
              <div className="dtw56-dtp-box"><LineIcon name="check" size={30}/><span>Production-Ready Delivery</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dtw56-section soft">
        <div className="dtw56-shell dtw56-format-layout">
          <div className="dtw56-heading stack-center">
            <Eyebrow>File-Aware Translation</Eyebrow>
            <h2>Translate Documents in the Formats You Already Use</h2>
            <p className="dtw56-intro">Your file format is part of the translation workflow. Stepes processes both the linguistic content and the document structure needed for useful multilingual output.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes supports Word, PDF, PowerPoint, Excel, Adobe InDesign, FrameMaker, Google Workspace, XML, and other structured or technical content formats. When available, providing the editable native source together with a reference PDF generally supports the most efficient multilingual production workflow.</p>
            <div className="dtw56-format-pills"><span>DOCX</span><span>PDF</span><span>PPTX</span><span>XLSX</span><span>INDD</span><span>FrameMaker</span><span>Google Workspace</span><span>XML</span></div>
            <EditorialLink href={URLS.formats}>Explore All Supported File Formats</EditorialLink>
          </div>
          <FormatArtwork />
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell dtw56-security-grid">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Confidential Content</Eyebrow>
            <h2>Secure Translation for Confidential Documents</h2>
            <p className="dtw56-intro">Contracts, financial documents, HR files, technical documentation, medical materials, product plans, and regulatory content can contain sensitive business information. Translation expands the number of files, language versions, systems, resources, and language assets that may become part of the workflow.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Stepes supports enterprise translation through controlled workflows designed around authorized access, appropriate technology use, professional confidentiality, secure file handling, governed language assets, and controlled delivery.</p>
            <EditorialLink href={URLS.security}>Explore Security &amp; Compliance</EditorialLink>
          </div>
          <div className="dtw56-security-matrix">
            {[
              ["lock","Controlled Access","Content access can be limited to people and systems performing authorized roles within the agreed translation workflow."],
              ["shield","Confidentiality","Professional linguistic resources work under appropriate confidentiality requirements for customer content and project information."],
              ["ai","Governed Technology","AI, translation technology, workflow tools, and processing methods can be selected according to project requirements, content sensitivity, and approved use."],
              ["reuse","Protected Language Assets","Translation memories, terminology resources, reference materials, and other reusable multilingual assets require appropriate governance."],
              ["check","Controlled Delivery","Final delivery workflows help verify the correct language, document version, file format, destination, and approved release."],
              ["file","Post-Project Handling","Retention, reuse, and deletion requirements can be addressed according to applicable workflow and customer requirements."],
            ].map(([icon,title,body]) => <div className="dtw56-security-item" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><h3>{title}</h3><p className="dtw56-body">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dtw56-section blush">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <Eyebrow>Global Language Coverage</Eyebrow>
            <h2>Document Translation in 100+ Languages</h2>
            <p className="dtw56-intro">Stepes helps global organizations communicate with employees, customers, regulators, partners, suppliers, and stakeholders across major international markets and regional language variants.</p>
          </div>
          <div className="dtw56-language-grid">
            {languageCards.map(([lang,body]) => <div className="dtw56-language-card" key={lang}><strong>{lang}</strong><p>{body}</p></div>)}
          </div>
          <div style={{textAlign:"center"}}><EditorialLink href={URLS.languages}>Explore All Languages</EditorialLink></div>
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell dtw56-scale-wrap">
          <div className="dtw56-heading stack-center">
            <Eyebrow>Enterprise Scale</Eyebrow>
            <h2>From One Document to Enterprise-Scale Translation Programs</h2>
            <p className="dtw56-intro">Sometimes you need one important document translated quickly. Other times, translation becomes an ongoing global operation involving thousands of files, multiple departments, product lines, reviewers, languages, and recurring releases. Stepes supports both.</p>
            <p className="dtw56-body" style={{marginTop:18}}>Our enterprise model connects professional linguists, AI-enabled workflows, translation memory, terminology management, quality assurance, file production, and program management so organizations can scale beyond isolated translation projects.</p>
            <EditorialLink href={URLS.enterprise}>Explore Enterprise Translation Management</EditorialLink>
          </div>
          <div className="dtw56-scale-panel">
            {[
              ["file","Multiple Documents","Manage related manuals, reports, policies, presentations, specifications, contracts, and document families through a coordinated multilingual workflow."],
              ["globe","Multiple Languages","Coordinate translation across international markets instead of managing disconnected providers language by language."],
              ["reuse","Multiple Versions","Carry approved translations and terminology forward as documents change."],
              ["human","Multiple Stakeholders","Support project owners, localization teams, subject-matter experts, in-country reviewers, legal teams, marketing teams, and other participants through defined review and approval processes."],
              ["scale","Recurring Programs","Build repeatable translation workflows while centralizing approved terminology and translation memory so multilingual knowledge remains useful across projects, products, departments, and future releases."],
            ].map(([icon,title,body]) => <div className="dtw56-scale-row" key={title}><div className="dtw56-icon-box"><LineIcon name={icon}/></div><div><h3>{title}</h3><p className="dtw56-body">{body}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="dtw56-section soft">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <h2>Why Global Companies Choose Stepes for Document Translation</h2>
            <p className="dtw56-intro">Professional document translation requires the right combination of people, technology, language assets, quality controls, file expertise, security, and global operations.</p>
          </div>
          <div className="dtw56-why-grid">
            {[
              ["Professional Linguists","Qualified translators and reviewers matched to the required language, subject matter, and document type."],
              ["AI-Enabled Workflows","Use AI where it adds speed and scalability while maintaining professional human review where accuracy, nuance, business impact, or risk requires it."],
              ["Enterprise Terminology","Keep important vocabulary aligned across documents, departments, products, languages, and markets."],
              ["Translation Memory","Turn previously approved translations into reusable multilingual knowledge that supports future documents and updates."],
              ["Integrated Quality Assurance","Combine linguistic expertise, automated checks, terminology controls, translation memory, professional review, and file-level verification."],
              ["Multilingual Production","Translate and format documents through one coordinated workflow instead of separating language translation from final document production."],
              ["Broad File Expertise","Work with common business documents, PDFs, design files, technical documentation, structured formats, and complex multilingual publishing workflows."],
              ["100+ Languages","Manage international document translation through one coordinated global translation partner."],
              ["Enterprise Security","Support confidential and business-critical multilingual content through controlled access, governed workflows, appropriate technology use, and managed delivery."],
            ].map(([title,body]) => <div className="dtw56-why-item" key={title}><h3>{title}</h3><p className="dtw56-body">{body}</p></div>)}
          </div>
          <div className="dtw56-why-statement">Professional expertise where judgment matters. Technology where it creates meaningful efficiency. One connected workflow from source document to global delivery.</div>
        </div>
      </section>

      <section className="dtw56-section">
        <div className="dtw56-shell">
          <div className="dtw56-heading center">
            <h2>Professional Document Translation Services FAQs</h2>
            <p className="dtw56-intro">Find answers about document types, languages, PDF translation, formatting, AI and human workflows, terminology, updates, quality, security, certified translation, pricing, and turnaround.</p>
          </div>
          <div className="dtw56-faq">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return <div className="dtw56-faq-item" key={item.q}>
                <button className="dtw56-faq-button" type="button" aria-expanded={open} aria-controls={`dtw56-faq-${i}`} onClick={() => setOpenFaq(open ? -1 : i)}>
                  <span>{item.q}</span><Chevron open={open}/>
                </button>
                {open && <p className="dtw56-faq-answer" id={`dtw56-faq-${i}`}>{item.a}</p>}
              </div>;
            })}
          </div>
        </div>
      </section>

      <section className="dtw56-final">
        <div className="dtw56-shell dtw56-final-grid">
          <div>
            <h2>Ready to Translate Your Documents?</h2>
            <p>Whether you need one business-critical document translated or an ongoing multilingual program across hundreds of files, languages, versions, and global teams, Stepes brings professional linguists, AI-enabled workflows, terminology management, translation memory, quality assurance, security, and multilingual production together in one connected document translation solution.</p>
            <div className="dtw56-final-proof">Translate accurately · Keep terminology consistent · Preserve document structure · Scale across 100+ languages</div>
          </div>
          <div className="dtw56-final-actions">
            <a className="dtw56-btn primary" href={URLS.quote}><span>Get an Instant Quote</span><ArrowIcon /></a>
            <a className="dtw56-btn secondary" href={URLS.contact}>Contact Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}
