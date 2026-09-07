import React, { useState } from "react";

const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-sales/";

const officialUse = [
  {
    icon: "passport",
    title: "Immigration & USCIS",
    body: "Translate birth certificates, marriage certificates, passports, police records, affidavits, academic records, financial documents, and other supporting materials for U.S. and international immigration processes.",
    link: "https://www.stepes.com/immigration-document-translation-services/",
    label: "Immigration Document Translation",
  },
  {
    icon: "scales",
    title: "Legal & Court",
    body: "Translate affidavits, declarations, judgments, court orders, evidence, civil records, legal correspondence, and other documents used in proceedings or submitted to courts and public authorities.",
    link: "https://www.stepes.com/legal-translation-services/",
    label: "Legal Translation Services",
  },
  {
    icon: "academic",
    title: "Academic & Education",
    body: "Translate diplomas, transcripts, degree certificates, enrollment records, academic credentials, training certificates, and other educational documents for admissions, credential review, employment, and professional use.",
  },
  {
    icon: "government",
    title: "Government & Administrative",
    body: "Translate civil records, identity documents, permits, licenses, certificates, forms, registrations, and other documents requested by government agencies and public institutions.",
  },
  {
    icon: "briefcase",
    title: "Business, HR & Global Mobility",
    body: "Translate employment letters, HR records, relocation documentation, corporate records, tax documents, financial records, background materials, and employee mobility documents for international business and workforce needs.",
  },
];

const documents = [
  {
    title: "Vital & Personal Records",
    icon: "id",
    items: ["Birth certificates", "Marriage certificates", "Divorce certificates and decrees", "Death certificates", "Adoption records", "Passports", "Driver's licenses", "National identity cards", "Civil registry records", "Name-change documents"],
  },
  {
    title: "Immigration & Legal Documents",
    icon: "legal",
    items: ["Affidavits", "Declarations", "Police certificates", "Court orders", "Judgments", "Legal records", "Evidence documents", "Immigration supporting documents", "Government forms and certificates", "Powers of attorney"],
  },
  {
    title: "Academic Documents",
    icon: "academic",
    items: ["Diplomas", "Academic transcripts", "Degree certificates", "Enrollment records", "School records", "Academic credentials", "Training certificates", "Letters and supporting academic documentation"],
  },
  {
    title: "Business & Employment Documents",
    icon: "briefcase",
    items: ["Employment letters", "HR records", "Corporate registrations", "Business certificates", "Bank statements", "Tax documents", "Financial records", "Compliance documents", "Professional credentials", "Global mobility documentation"],
  },
];

const requirements = [
  {
    title: "Certified Translation",
    body: "A translated document accompanied by a signed statement attesting to its completeness and accuracy.",
    note: "Common for immigration, universities, courts, government agencies, employers, licensing organizations, and other official submissions.",
  },
  {
    title: "Notarized Certification",
    body: "A notary typically verifies the identity of the person signing the translation certification and witnesses or acknowledges the signature according to the applicable process.",
    note: "Notarization does not mean the notary has evaluated or verified the linguistic accuracy of the translation.",
  },
  {
    title: "Sworn Translation",
    body: "Some countries use formally authorized or sworn translators for documents intended for legal or official use.",
    note: "Translator status and required process vary by jurisdiction. Share the destination country and receiving authority with Stepes.",
  },
  {
    title: "Apostille or Authentication",
    body: "An apostille or authentication certificate verifies the origin of certain official documents by authenticating the relevant signature, stamp, seal, or official capacity.",
    note: "It does not by itself certify translation accuracy or verify the contents of the underlying document; translation requirements remain separate.",
  },
];

const audiences = [
  {
    icon: "person",
    title: "Individuals",
    body: "Get certified translations for immigration, education, employment, legal, travel, licensing, and personal administrative needs.",
    bullets: ["Simple online document submission", "Professional human translation", "Signed certificate of accuracy", "Fast turnaround options", "Secure digital delivery"],
  },
  {
    icon: "team",
    title: "Attorneys & Professional Teams",
    body: "Support clients and cases with professionally managed certified translation for legal, immigration, academic, and other official documents.",
    bullets: ["Multiple documents and cases", "Coordinated deadlines", "Consistent document handling", "Secure project workflows", "Recurring translation support"],
  },
  {
    icon: "building",
    title: "Enterprises & Institutions",
    body: "Manage higher-volume certified translation across HR, global mobility, legal, compliance, academic, financial, and administrative programs.",
    bullets: ["100+ languages", "Centralized project coordination", "Scalable linguistic resources", "Repeatable workflows", "Professional project management"],
  },
];

const workflow = [
  { title: "Upload Your Documents", body: "Submit PDFs, Word files, scans, images, or clear mobile photographs through the Stepes online workflow." },
  { title: "Confirm Languages and Requirements", body: "Tell us the source and target languages, intended use, certification requirements, deadline, and receiving-institution instructions." },
  { title: "Review Your Quote", body: "Stepes reviews your documents and requirements and provides project pricing and turnaround information." },
  { title: "Professional Translation", body: "A qualified linguist translates the document with attention to names, numbers, dates, terminology, stamps, seals, annotations, and structure." },
  { title: "Quality Review & Certification", body: "The translation moves through the appropriate quality checks before the required certification statement is prepared and signed." },
  { title: "Receive Your Certified Translation", body: "Completed files and certification are delivered securely in the agreed format for your submission or review process." },
];

const quality = [
  { icon: "language", title: "Qualified Linguists", body: "Professional language specialists are assigned based on the required language pair, document type, subject matter, and project requirements." },
  { icon: "search", title: "Detail-Level Accuracy", body: "Names, dates, identification numbers, addresses, official titles, legal terminology, stamps, seals, handwriting, and other document details receive careful attention." },
  { icon: "check", title: "Structured Quality Checks", body: "Certified translations are reviewed according to the agreed workflow for completeness, accuracy, terminology, formatting, and certification requirements before delivery." },
];

const security = [
  { icon: "upload", title: "Secure Intake", body: "Submit source documents through the secure Stepes online workflow or another agreed secure channel." },
  { icon: "lock", title: "Authorized Access", body: "Access to project files, instructions, and deliverables is limited to people who need them to provide the service." },
  { icon: "shield", title: "Confidential Language Professionals", body: "Professional translators and reviewers handling confidential content work under confidentiality obligations appropriate to the engagement." },
  { icon: "workflow", title: "Managed Translation & Review", body: "Translation, review, quality assurance, certification, and project coordination follow structured workflows designed for secure document handling." },
  { icon: "delivery", title: "Secure Delivery", body: "Completed files are returned through the agreed secure delivery workflow and handled according to your project requirements." },
];

const languages = ["Spanish", "Chinese Simplified", "Chinese Traditional", "French", "German", "Portuguese", "Italian", "Arabic", "Japanese", "Korean", "Vietnamese", "Russian", "Polish", "Hindi", "Turkish", "Dutch"];

const reasons = [
  { icon: "person", title: "Professional Human Translation", body: "Qualified professional linguists provide the human expertise and accountability required for official and sensitive documents." },
  { icon: "certificate", title: "Signed Certification", body: "Receive a signed certificate of accuracy prepared for the agreed service requirements and any submission instructions you provide." },
  { icon: "search", title: "Official-Document Detail", body: "Names, dates, identification numbers, stamps, seals, terminology, and other document details receive careful attention throughout production." },
  { icon: "lock", title: "Secure Online Workflow", body: "Submit documents, coordinate requirements, and receive completed files through controlled translation workflows." },
  { icon: "clock", title: "Fast & Rush Options", body: "Choose standard or accelerated service according to your document volume, requirements, and deadline." },
  { icon: "scale", title: "Built to Scale", body: "Translate one personal certificate today and manage recurring multilingual document programs tomorrow through the same professional translation organization." },
];

const related = [
  { title: "Immigration Document Translation", body: "Certified translations for USCIS, visas, green cards, citizenship, asylum, immigration petitions, and supporting case documentation.", href: "https://www.stepes.com/immigration-document-translation-services/" },
  { title: "Legal Translation Services", body: "Professional translation for contracts, legal records, corporate legal content, compliance documentation, disputes, and broader legal requirements.", href: "https://www.stepes.com/legal-translation-services/" },
  { title: "Court Document Translation", body: "Translate judgments, court orders, affidavits, exhibits, filings, declarations, hearing records, and other court-related materials.", href: "https://www.stepes.com/court-document-translation-services/" },
  { title: "Document Translation Services", body: "Professional translation for business, technical, legal, financial, academic, and other document types in 100+ languages.", href: "https://www.stepes.com/document-translation-services/" },
  { title: "Rush Translation Services", body: "Accelerated professional translation for time-sensitive documents and urgent multilingual requirements.", href: "https://www.stepes.com/rush-translation-services/" },
  { title: "PDF Translation Services", body: "Translate digital and scanned PDF files while supporting the structure, content, and formatting requirements of the original document.", href: "https://www.stepes.com/pdf-translation-services/" },
];

const faqs = [
  ["What is a certified translation?", "A certified translation is a complete translation accompanied by a signed certification statement confirming its accuracy and completeness. Certification requirements can vary depending on the country, institution, jurisdiction, and intended use."],
  ["What does a certificate of accuracy include?", "A certification statement typically identifies the translated document and language, affirms the completeness and accuracy of the translation, provides information concerning the translator or certifying party's qualifications or competence as applicable, and includes the name, signature, and date of the person issuing the certification. Specific receiving organizations may request additional wording or formatting."],
  ["Does a certified translation have to be completed by a certified translator?", "Not necessarily. In the United States, a translator generally does not need to hold a specific professional translator certification to issue a certified translation. A certified translation and a professionally certified translator are different concepts. Requirements can differ outside the United States, so the rules of the receiving authority should be followed."],
  ["Does USCIS require certified translations?", "USCIS generally requires foreign-language documents submitted as part of an immigration filing to include a full English translation together with certification that the translation is complete and accurate and that the translator is competent to translate from the foreign language into English. Applicants should follow current USCIS filing instructions and any advice from their immigration attorney."],
  ["Does a certified translation need to be notarized?", "Not always. Certification and notarization are separate processes. When notarization is requested, the notary typically verifies or witnesses the identity and signature of the person signing the certification; the notary is not certifying the linguistic accuracy of the translation. Ask the receiving institution whether notarization is required for your particular submission."],
  ["What is the difference between certified, notarized, and sworn translation?", "A certified translation includes a statement attesting to translation completeness and accuracy. Notarization relates primarily to authenticating the identity or signature of the certification signer. A sworn translation is produced under a country-specific system in which certain translators have an officially recognized status. The appropriate service depends on where and how the document will be used."],
  ["What documents can Stepes provide certified translations for?", "Stepes translates birth and marriage certificates, passports, identity documents, diplomas, transcripts, immigration records, legal documents, affidavits, court documents, employment records, financial records, business documents, and many other official document types."],
  ["How long does certified translation take?", "Turnaround depends on the language pair, document volume, file quality, formatting, certification requirements, and complexity. Many common certified document projects can be completed quickly, and accelerated service is available for qualifying urgent requests."],
  ["How much does a certified translation cost?", "Pricing depends on your language pair, content volume, document type, formatting, certification requirements, and turnaround. Upload your documents to receive an exact quote based on the files you need translated."],
  ["Can I upload a scan or photograph of my document?", "Yes. Stepes can review PDFs, scanned documents, JPG and PNG images, mobile photographs, Word files, and other common formats. Clear, high-resolution source files are recommended, particularly when documents contain small text, stamps, seals, signatures, handwriting, or faint information."],
];

function Icon({ name, size = 22 }) {
  const common = {
    className: "wf-icon",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    focusable: "false",
    "aria-hidden": true,
    style: { display: "block", width: size, height: size, minWidth: size, minHeight: size, color: "inherit", overflow: "visible" },
  };
  const paths = {
    passport: <><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="11" r="3"/><path d="M9.5 11h5M12 8v6M8 17h8"/></>,
    scales: <><path d="M12 3v17M7 6h10M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6Z"/><path d="M7 20h10"/></>,
    academic: <><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v4c3 2 7 2 10 0v-4M21 9v5"/></>,
    government: <><path d="M3 9h18M5 9v9M9 9v9M15 9v9M19 9v9M3 18h18M2 21h20M12 3l9 4H3l9-4Z"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></>,
    id: <><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6.5 16c.7-1.5 1.6-2.2 2.5-2.2s1.8.7 2.5 2.2M14 10h4M14 14h4"/></>,
    legal: <><path d="M5 4h10l4 4v12H5V4Z"/><path d="M15 4v4h4M8 12h8M8 16h6"/></>,
    person: <><circle cx="12" cy="8" r="3"/><path d="M5 21c.8-4.2 3.1-6 7-6s6.2 1.8 7 6"/></>,
    team: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2.5 21c.7-4.1 2.9-6 6.5-6 3.5 0 5.8 1.9 6.5 6M15 16c3.7-.5 5.7 1.1 6.5 5"/></>,
    building: <><path d="M4 21V5l8-3v19M12 7h8v14M7 7h2M7 11h2M7 15h2M15 10h2M15 14h2M15 18h2M2 21h20"/></>,
    language: <><path d="M4 5h10M9 3v2c0 5-2 8-6 10M6 10c2 2 4 3 7 4M14 21l4-10 4 10M15.5 17h5"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16.5 9"/></>,
    upload: <><path d="M12 16V4M8 8l4-4 4 4M4 14v5h16v-5"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    shield: <><path d="M12 3 4.5 6v5.5c0 4.8 3 8 7.5 9.5 4.5-1.5 7.5-4.7 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-4"/></>,
    workflow: <><rect x="3" y="4" width="6" height="5" rx="1"/><rect x="15" y="4" width="6" height="5" rx="1"/><rect x="9" y="15" width="6" height="5" rx="1"/><path d="M6 9v3h6M18 9v3h-6M12 12v3"/></>,
    delivery: <><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    certificate: <><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M8 8h8M8 12h6M9 17l-1 4 4-2 4 2-1-4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    scale: <><path d="M12 3v18M5 7h14M6 7l-3 6h6L6 7Zm12 0-3 6h6l-3-6ZM7 21h10"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h5"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function LinkArrow({ href, children, className = "" }) {
  return <a className={`text-link ${className}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function CTA({ href, children, secondary = false, className = "" }) {
  return <a className={`${secondary ? "btn btn-secondary" : "btn btn-primary"} ${className}`} href={href}>{children}<span className="btn-arrow" aria-hidden="true">→</span></a>;
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false, id }) {
  return (
    <div className={`heading-group heading-${align}${dark ? " on-dark" : ""}`} id={id}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function CertifiedRequestMockup() {
  return (
    <div className="request-shell" aria-label="Illustrative certified translation request workflow">
      <div className="request-topbar">
        <div>
          <span className="ui-kicker">CERTIFIED TRANSLATION REQUEST</span>
          <strong>Official-use document workflow</strong>
        </div>
        <span className="secure-chip"><Icon name="lock" size={15}/> Secure Upload</span>
      </div>
      <div className="request-file">
        <div className="file-icon"><Icon name="file" size={24}/></div>
        <div className="file-copy">
          <span className="ui-label">Document</span>
          <strong>Birth_Certificate.pdf</strong>
          <span className="ui-meta">1 document · clear scan</span>
        </div>
        <span className="status-chip">Ready</span>
      </div>
      <div className="request-fields">
        <div className="mock-field">
          <span className="ui-label">Source Language</span>
          <strong>Spanish</strong>
        </div>
        <div className="mock-field">
          <span className="ui-label">Target Language</span>
          <strong>English</strong>
        </div>
        <div className="mock-field wide">
          <span className="ui-label">Certification</span>
          <strong className="inline-check"><Icon name="check" size={17}/> Certificate of Accuracy</strong>
        </div>
      </div>
      <div className="request-progress" aria-label="Upload, Translate, Certify, Deliver">
        {["Upload", "Translate", "Certify", "Deliver"].map((label, i) => (
          <div className="progress-step" key={label}>
            <span className={`progress-dot ${i === 0 ? "active" : ""}`}>{i === 0 ? <Icon name="check" size={13}/> : i + 1}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeliverableVisual() {
  const stages = [
    ["Original Document", "Source file", "file"],
    ["Professional Translation", "Complete translated content", "language"],
    ["Certificate of Accuracy", "Signed certification statement", "certificate"],
    ["Secure Digital Delivery", "Ready for review or submission", "delivery"],
  ];
  return (
    <div className="deliverable-visual">
      {stages.map(([title, note, icon], idx) => (
        <React.Fragment key={title}>
          <div className={`deliverable-stage stage-${idx + 1}`}>
            <div className="deliverable-icon"><Icon name={icon} size={24}/></div>
            <div><strong>{title}</strong><span>{note}</span></div>
          </div>
          {idx < stages.length - 1 ? <div className="deliverable-arrow" aria-hidden="true">↓</div> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function CertifiedTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-certified-wireframe">
      <style>{`
        :root {
          --ink:#171923;
          --muted:#5f6470;
          --line:#e3e5ea;
          --soft:#f6f7f9;
          --soft2:#fbfbfc;
          --magenta:#C11D63;
          --magenta2:#A71954;
          --burgundy:#7A1542;
          --blush:#FDF2F7;
          --pink:#F2A7C6;
          --dark:#17151a;
          --dark2:#232027;
          --white:#fff;
          --radius-lg:30px;
          --radius-md:22px;
          --shadow:0 22px 60px rgba(31,27,35,.10);
        }
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{margin:0}
        .stepes-certified-wireframe{font-family:Inter, "Inter Tight", Arial, sans-serif;color:var(--ink);background:#fff;overflow-x:hidden;line-height:1.6}
        .stepes-certified-wireframe a{text-decoration:none}
        .stepes-certified-wireframe .wf-icon{display:block!important;visibility:visible!important;opacity:1!important;color:inherit!important;overflow:visible!important;flex:0 0 auto}
        .stepes-certified-wireframe .wf-icon *{stroke:currentColor!important;fill:none!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important;visibility:visible!important;opacity:1!important}
        .shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}
        .section{padding:96px 0}
        .section-dense{padding:80px 0}
        .section-soft{background:var(--soft2)}
        .section-blush{background:var(--blush)}
        .section-dark{background:var(--dark);color:#fff}
        .eyebrow{font-size:11px!important;line-height:1.3!important;letter-spacing:.14em!important;text-transform:uppercase;font-weight:600!important;color:var(--magenta)!important;margin:0 0 14px!important}
        .eyebrow-dark{color:var(--pink)!important}
        h1,h2,h3{font-family:"Inter Tight", Inter, Arial, sans-serif;font-weight:600;margin:0;letter-spacing:-.025em;color:inherit}
        h1{font-size:48px;line-height:1.08;max-width:640px}
        h2{font-size:36px;line-height:1.16}
        h3{font-size:24px;line-height:1.25}
        p{font-size:16px;margin:0;color:var(--muted)}
        .hero{padding:104px 0 92px;background:linear-gradient(180deg,#fff 0%,#fbfafc 100%);position:relative}
        .hero-grid{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(470px,.94fr);gap:72px;align-items:center}
        .hero-copy{max-width:650px}
        .hero-lead{font-size:18px;line-height:1.65;max-width:640px;margin-top:24px;color:#4f535d}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 22px;border-radius:999px;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent}
        .btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:var(--magenta);color:#fff!important}
        .btn-primary *{color:#fff!important;fill:currentColor;stroke:currentColor}
        .btn-primary:hover{background:var(--magenta2);transform:translateY(-1px)}
        .btn-primary:focus-visible,.btn-secondary:focus-visible,.text-link:focus-visible,.faq-button:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
        .btn-secondary,.btn-secondary:visited{background:#fff;color:#23242a;border-color:#d7d9df}
        .btn-secondary:hover{border-color:#b7bac3;background:#fafafa}
        .btn-arrow{font-size:18px;line-height:1}
        .proof-points{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 24px;margin-top:34px;max-width:610px}
        .proof-point{display:flex;gap:9px;align-items:center;font-size:16px;color:#3f434c}
        .proof-point svg{color:var(--magenta);flex:0 0 auto}
        .request-shell{background:#fff;border:1px solid #e0e1e6;border-radius:30px;box-shadow:var(--shadow);padding:28px;position:relative}
        .request-shell:before{content:"";position:absolute;inset:-18px 28px auto -18px;height:94px;background:var(--blush);border-radius:28px;z-index:-1}
        .request-topbar{display:flex;justify-content:space-between;gap:20px;align-items:flex-start;padding-bottom:20px;border-bottom:1px solid var(--line)}
        .request-topbar strong{display:block;font-size:17px;margin-top:4px}
        .ui-kicker,.ui-label,.ui-meta{display:block}
        .ui-kicker{font-size:11px;letter-spacing:.12em;color:#777c86;font-weight:600}
        .ui-label{font-size:14px;color:#777c86;margin-bottom:5px}
        .ui-meta{font-size:14px;color:#8a8e97;margin-top:2px}
        .secure-chip,.status-chip{display:inline-flex;align-items:center;gap:6px;border-radius:999px;font-size:14px;font-weight:600;white-space:nowrap}
        .secure-chip{background:#f5f6f8;padding:7px 10px;color:#4b5059}
        .status-chip{background:var(--blush);color:var(--magenta);padding:6px 10px}
        .request-file{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center;padding:22px 0}
        .file-icon{width:46px;height:46px;border-radius:14px;background:#f3f4f6;display:grid;place-items:center;color:#555a64}
        .file-copy{min-width:0}
        .file-copy strong{font-size:16px;display:block;overflow-wrap:anywhere;word-break:break-word}
        .request-fields{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .mock-field{padding:14px 15px;border:1px solid var(--line);border-radius:14px;background:#fcfcfd}
        .mock-field{min-width:0}
        .mock-field strong{font-size:16px;overflow-wrap:anywhere}
        .mock-field.wide{grid-column:1/-1}
        .inline-check{display:flex;align-items:center;gap:8px;color:#2d3138}
        .inline-check svg{color:var(--magenta)}
        .request-progress{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
        .progress-step{display:flex;align-items:center;gap:7px;font-size:14px;color:#686d76;position:relative}
        .progress-dot{width:24px;height:24px;border-radius:50%;border:1px solid #d8dae0;background:#fff;display:grid;place-items:center;font-size:11px;font-weight:600;color:#7a7f88;flex:0 0 auto}
        .progress-dot.active{background:var(--magenta);border-color:var(--magenta);color:#fff}
        .trust-band{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
        .trust-grid{display:grid;grid-template-columns:repeat(4,1fr)}
        .trust-item{padding:24px 22px;border-right:1px solid var(--line)}
        .trust-item:last-child{border-right:0}
        .trust-item strong{display:block;font-size:16px;margin-bottom:2px}
        .trust-item span{font-size:16px;line-height:1.55;color:#777c86}
        .heading-group{max-width:820px}
        .heading-center{text-align:center;margin:0 auto 52px}
        .heading-left{text-align:left;margin:0 0 42px}
        .section-intro{font-size:18px;line-height:1.65;margin-top:16px;max-width:820px}
        .heading-center .section-intro{margin-left:auto;margin-right:auto}
        .on-dark .section-intro{color:#c9c6cc}
        .definition-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:80px;align-items:start}
        .definition-copy p{font-size:17px;line-height:1.72;max-width:720px}
        .definition-copy p+p{margin-top:18px}
        .distinction-panel{border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff}
        .distinction-row{padding:26px 28px}
        .distinction-row+.distinction-row{border-top:1px solid var(--line)}
        .distinction-row strong{font-size:20px;display:block;margin-bottom:8px}
        .distinction-row p{font-size:16px}
        .distinction-tag{display:inline-block;margin-top:14px;font-size:14px;font-weight:600;color:var(--magenta)}
        .deliverable-grid{display:grid;grid-template-columns:minmax(350px,.82fr) minmax(0,1.18fr);gap:84px;align-items:center}
        .deliverable-copy p{font-size:17px;line-height:1.7;margin-top:18px;max-width:590px}
        .deliverable-points{margin-top:28px;display:grid;gap:20px}
        .deliverable-point{display:grid;grid-template-columns:44px 1fr;gap:15px;align-items:start}
        .deliverable-point .icon-surface{width:42px;height:42px;border-radius:13px;background:#fff;border:1px solid #ececf0;display:grid;place-items:center;color:var(--magenta)}
        .deliverable-point strong{display:block;font-size:17px;margin-bottom:4px}
        .deliverable-point p{font-size:16px;margin:0;line-height:1.6}
        .deliverable-visual{background:#fff;border:1px solid #e5e6eb;border-radius:30px;padding:28px;box-shadow:0 18px 50px rgba(31,27,35,.06)}
        .deliverable-stage{display:grid;grid-template-columns:50px 1fr;gap:14px;align-items:center;padding:16px;border-radius:18px;background:#f8f9fa}
        .deliverable-stage.stage-3{background:var(--blush)}
        .deliverable-icon{width:46px;height:46px;border-radius:14px;background:#fff;display:grid;place-items:center;color:#555b65;border:1px solid #ececf0}
        .stage-3 .deliverable-icon{color:var(--magenta)}
        .deliverable-stage strong{display:block;font-size:17px}
        .deliverable-stage span{display:block;font-size:14px;color:#777c86;margin-top:2px}
        .deliverable-arrow{text-align:center;color:#aaaeb7;font-size:19px;line-height:1.2;padding:4px 0}
        .official-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .official-item{grid-column:span 2;padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-height:275px}
        .official-item:nth-child(4),.official-item:nth-child(5){grid-column:span 3}
        .icon-surface{width:44px;height:44px;border-radius:14px;background:#f5f5f7;display:grid;place-items:center;color:#555a64;margin-bottom:18px}
        .official-item h3{font-size:21px;margin-bottom:10px}
        .official-item p{font-size:16px;line-height:1.65}
        .text-link,.text-link:visited{display:inline-flex;align-items:center;gap:7px;color:var(--magenta);font-size:16px;font-weight:600;margin-top:15px}
        .text-link:hover span{transform:translateX(3px)}
        .text-link span{transition:.2s ease}
        .text-link{max-width:100%;overflow-wrap:anywhere}
        .document-matrix{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid #e6dbe1;border-radius:30px;overflow:hidden;background:#fff}
        .document-group{padding:32px 34px;min-width:0}
        .document-group:nth-child(odd){border-right:1px solid #eadfe4}
        .document-group:nth-child(-n+2){border-bottom:1px solid #eadfe4}
        .document-heading{display:flex;gap:13px;align-items:center;margin-bottom:20px}
        .document-heading .icon-surface{margin:0;width:40px;height:40px;background:var(--blush);color:var(--magenta)}
        .document-heading h3{font-size:21px}
        .document-list{columns:2;column-gap:26px;margin:0;padding:0;list-style:none}
        .document-list li{break-inside:avoid;position:relative;padding:6px 0 6px 16px;font-size:16px;color:#555a63}
        .document-list li:before{content:"";width:4px;height:4px;border-radius:50%;background:#9a9da6;position:absolute;left:0;top:17px}
        .document-bottom{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:28px}
        .document-bottom p{font-size:16px;max-width:760px}
        .requirement-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid #3b373e;border-radius:30px;overflow:hidden}
        .requirement{padding:34px;min-height:260px}
        .requirement:nth-child(odd){border-right:1px solid #3b373e}
        .requirement:nth-child(-n+2){border-bottom:1px solid #3b373e}
        .requirement h3{font-size:22px;margin-bottom:12px}
        .requirement p{color:#c9c6cc;font-size:16px;line-height:1.67}
        .requirement-note{margin-top:18px;padding-top:16px;border-top:1px solid #3b373e;color:#e6dce1!important}
        .requirements-help{margin-top:28px;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px 0 0}
        .requirements-help p{color:#c9c6cc;font-size:16px;max-width:800px}
        .requirements-help .btn-secondary{background:#fff;color:#252128;border-color:#fff}
        .uscis-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(360px,.95fr);gap:78px;align-items:start}
        .uscis-copy p{font-size:17px;line-height:1.72;max-width:700px}
        .uscis-copy p+p{margin-top:17px}
        .uscis-panel{border:1px solid var(--line);border-radius:28px;padding:30px;background:#fff}
        .uscis-panel h3{font-size:20px;margin-bottom:18px}
        .uscis-list{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:10px 22px}
        .uscis-list li{font-size:16px;color:#555a63;padding-left:22px;position:relative}
        .uscis-list li:before{content:"✓";position:absolute;left:0;top:0;color:var(--magenta);font-weight:600}
        .uscis-note{margin-top:24px;padding-top:20px;border-top:1px solid var(--line)}
        .uscis-note strong{display:block;font-size:17px;margin-bottom:6px}
        .uscis-note p{font-size:16px}
        .audience-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid var(--line);border-radius:30px;overflow:hidden}
        .audience{padding:32px;min-width:0}
        .audience+.audience{border-left:1px solid var(--line)}
        .audience h3{font-size:21px;margin-bottom:10px}
        .audience p{font-size:16px;line-height:1.65}
        .quiet-list{margin:20px 0 0;padding:0;list-style:none}
        .quiet-list li{font-size:16px;color:#50545d;padding:8px 0 8px 21px;position:relative;border-top:1px solid #eeeef1}
        .quiet-list li:before{content:"";position:absolute;left:0;top:17px;width:6px;height:6px;border-radius:50%;background:#b4b6bd}
        .workflow-wrap{position:relative}
        .workflow-line{position:absolute;left:5%;right:5%;top:35px;height:1px;background:#d9dae0;z-index:0}
        .workflow-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:18px;position:relative;z-index:1}
        .workflow-step{min-width:0}
        .step-number{width:70px;height:70px;border-radius:50%;background:#fff;border:1px solid #dadce1;display:grid;place-items:center;font-size:18px;font-weight:600;margin-bottom:20px;box-shadow:0 10px 28px rgba(25,25,30,.05)}
        .workflow-step:first-child .step-number{border-color:var(--magenta);color:var(--magenta)}
        .workflow-step h3{font-size:18px;line-height:1.35;margin-bottom:9px}
        .workflow-step p{font-size:16px;line-height:1.58}
        .workflow-cta{text-align:center;margin-top:40px}
        .quality-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:84px;align-items:start}
        .quality-lead p{font-size:18px;line-height:1.7;margin-top:18px;max-width:560px}
        .quality-rows{border-top:1px solid var(--line)}
        .quality-row{display:grid;grid-template-columns:46px 1fr;gap:18px;padding:24px 0;border-bottom:1px solid var(--line);align-items:start}
        .quality-row .icon-surface{margin:0;width:42px;height:42px}
        .quality-row h3{font-size:20px;margin-bottom:6px}
        .quality-row p{font-size:16px;line-height:1.65}
        .timeline-panel{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:30px;overflow:hidden;background:#fff}
        .timeline-option{padding:36px}
        .timeline-option+.timeline-option{border-left:1px solid var(--line)}
        .timeline-label{font-size:11px;font-weight:600;letter-spacing:.11em;color:var(--magenta);text-transform:uppercase;margin-bottom:10px}
        .timeline-option h3{font-size:24px;margin-bottom:10px}
        .timeline-option p{font-size:16px;line-height:1.68}
        .timeline-factors{font-size:16px!important;margin-top:24px!important;text-align:center;max-width:900px!important;margin-left:auto!important;margin-right:auto!important}
        .security-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border-top:1px solid #3b373e;border-left:1px solid #3b373e}
        .security-item{grid-column:span 2;padding:30px 28px;border-right:1px solid #3b373e;border-bottom:1px solid #3b373e;min-width:0}
        .security-item:nth-child(4),.security-item:nth-child(5){grid-column:span 3}
        .security-item .icon-surface{background:#2b272e;color:var(--pink);border:1px solid #403a43;margin-bottom:18px}
        .security-item h3{font-size:19px;margin-bottom:9px}
        .security-item p{font-size:16px;color:#c9c6cc;line-height:1.62}
        .dark-link,.dark-link:visited{color:var(--pink)}
        .security-foot{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:28px}
        .security-foot p{color:#c9c6cc;font-size:16px;max-width:790px}
        .language-layout{display:grid;grid-template-columns:minmax(0,.78fr) minmax(0,1.22fr);gap:78px;align-items:start}
        .language-copy p{font-size:17px;line-height:1.7;margin-top:18px;max-width:560px}
        .language-chips{display:flex;flex-wrap:wrap;gap:10px}
        .language-chip{padding:10px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);font-size:16px;color:#4f535d}
        .language-note{font-size:16px;margin-top:20px;line-height:1.68}
        .pricing-grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:80px;align-items:start}
        .pricing-copy p{font-size:17px;line-height:1.72;margin-top:18px;max-width:620px}
        .price-factors{border-top:1px solid var(--line);display:grid;grid-template-columns:1fr 1fr}
        .price-factor{padding:16px 0;border-bottom:1px solid var(--line);font-size:16px;color:#4f535d;position:relative;padding-left:18px}
        .price-factor:nth-child(odd){padding-right:20px}
        .price-factor:before{content:"";width:5px;height:5px;border-radius:50%;background:var(--magenta);position:absolute;left:0;top:26px}
        .pricing-cta{margin-top:30px}
        .reason-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--line);border-left:1px solid var(--line)}
        .reason{padding:28px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);min-width:0}
        .reason .icon-surface{margin-bottom:16px}
        .reason h3{font-size:19px;margin-bottom:8px}
        .reason p{font-size:16px;line-height:1.62}
        .reason-cta{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:36px}
        .faq-wrap{max-width:980px;margin:0 auto;border-top:1px solid var(--line)}
        .faq-item{border-bottom:1px solid var(--line)}
        .faq-button{width:100%;display:grid;grid-template-columns:1fr 38px;gap:24px;align-items:center;text-align:left;background:transparent;border:0;padding:22px 0;color:var(--ink);cursor:pointer;font:inherit;min-height:68px}
        .faq-button span:first-child{font-size:18px;font-weight:600;line-height:1.4}
        .faq-toggle{width:34px;height:34px;border-radius:50%;border:1px solid #dcdde2;display:grid;place-items:center;font-size:20px;font-weight:400;color:#666b74}
        .faq-answer{padding:0 62px 24px 0;max-width:840px}
        .faq-answer p{font-size:16px;line-height:1.72}
        .related-list{border-top:1px solid var(--line)}
        .related-row{display:grid;grid-template-columns:minmax(260px,.82fr) minmax(0,1.18fr) auto;gap:32px;align-items:center;padding:25px 0;border-bottom:1px solid var(--line)}
        .related-row h3{font-size:20px}
        .related-row p{font-size:16px;line-height:1.62;max-width:650px}
        .related-row .text-link{margin:0;white-space:nowrap}
        .final-cta{padding:80px 0;background:var(--burgundy);color:#fff}
        .final-cta-grid{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:48px;align-items:center}
        .final-cta h2{font-size:40px;max-width:650px}
        .final-cta p{font-size:18px;line-height:1.65;color:#f1dfe7;margin-top:16px;max-width:720px}
        .final-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}
        .final-cta .btn-primary,.final-cta .btn-primary:visited,.final-cta .btn-primary:hover,.final-cta .btn-primary:active,.final-cta .btn-primary:focus,.final-cta .btn-primary:focus-visible{background:var(--magenta);color:#fff!important}
        .final-cta .btn-primary *{color:#fff!important}
        .final-cta .btn-primary:hover{background:var(--magenta2)}
        .final-cta .btn-secondary,.final-cta .btn-secondary:visited{background:transparent;color:#fff;border-color:rgba(255,255,255,.55)}
        .final-cta .btn-secondary:hover{background:rgba(255,255,255,.08);border-color:#fff}
        .final-proof{margin-top:22px;font-size:14px;color:#ebccd9;font-weight:600;letter-spacing:.01em}

        @media (max-width:1120px){
          .shell{padding-left:40px;padding-right:40px}
          .hero-grid{grid-template-columns:minmax(0,1fr) minmax(400px,.9fr);gap:46px}
          .official-grid{grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid var(--line)}
          .official-item,.official-item:nth-child(4),.official-item:nth-child(5){grid-column:auto;border-right:1px solid var(--line);border-bottom:1px solid var(--line)}
          .official-item:nth-child(even){border-right:0}
          .official-item:last-child{grid-column:1/-1;border-right:0}
          .security-grid{grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid #3b373e}
          .security-item,.security-item:nth-child(4),.security-item:nth-child(5){grid-column:auto;border-right:1px solid #3b373e}
          .security-item:nth-child(even){border-right:0}
          .security-item:last-child{grid-column:1/-1;border-right:0}
          .workflow-grid{grid-template-columns:repeat(3,1fr);row-gap:40px}
          .workflow-line{display:none}
        }

        @media (max-width:900px){
          .shell{padding-left:24px;padding-right:24px}
          .section{padding:84px 0}
          .hero{padding:88px 0 80px}
          h1{font-size:42px;max-width:760px;margin-left:auto;margin-right:auto}
          h2{font-size:32px}
          h3{font-size:22px}
          .hero-grid{grid-template-columns:1fr;gap:52px}
          .hero-copy{text-align:center;max-width:800px;margin:0 auto}
          .hero-lead{margin-left:auto;margin-right:auto}
          .hero-actions,.proof-points{justify-content:center;margin-left:auto;margin-right:auto}
          .proof-points{max-width:620px;text-align:left}
          .request-shell{max-width:650px;margin:0 auto}
          .trust-grid{grid-template-columns:repeat(2,1fr)}
          .trust-item:nth-child(even){border-right:0}
          .trust-item:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .definition-grid,.deliverable-grid,.uscis-grid,.quality-grid,.language-layout,.pricing-grid{grid-template-columns:1fr;gap:48px}
          .heading-group.mobile-center-tablet{text-align:center;margin-left:auto;margin-right:auto}
          .heading-group.mobile-center-tablet .section-intro{margin-left:auto;margin-right:auto}
          .definition-copy{max-width:760px}
          .definition-copy .heading-left{text-align:center;margin-left:auto;margin-right:auto}
          .deliverable-copy{text-align:center;max-width:760px;margin:0 auto}
          .deliverable-copy p{margin-left:auto;margin-right:auto}
          .deliverable-points{text-align:left}
          .deliverable-visual{max-width:620px;margin:0 auto;width:100%}
          .document-list{columns:1}
          .audience-grid{grid-template-columns:1fr}
          .audience+.audience{border-left:0;border-top:1px solid var(--line)}
          .quality-lead{max-width:760px;margin:0 auto}
          .quality-lead h2{text-align:center}
          .quality-lead p{text-align:left;margin-left:auto;margin-right:auto}
          .language-copy,.pricing-copy{max-width:760px;margin:0 auto}
          .language-copy .eyebrow,.language-copy h2,.pricing-copy h2{text-align:center}
          .language-copy p,.pricing-copy p{text-align:left;margin-left:auto;margin-right:auto}
          .language-chips{justify-content:center}
          .pricing-cta{text-align:center}
          .reason-grid{grid-template-columns:repeat(2,1fr)}
          .reason:nth-child(even){border-right:1px solid var(--line)}
          .final-cta-grid{grid-template-columns:1fr;text-align:center}
          .final-cta h2,.final-cta p{margin-left:auto;margin-right:auto}
          .final-actions{justify-content:center}
        }

        @media (max-width:768px){
          .shell{padding-left:24px;padding-right:24px}
          .section,.section-dense{padding:72px 0}
          .heading-center,.heading-left{margin-bottom:38px}
          .heading-group.mobile-center{text-align:center;margin-left:auto;margin-right:auto}
          .heading-group.mobile-center .section-intro{margin-left:auto;margin-right:auto}
          .official-grid,.document-matrix,.requirement-grid,.timeline-panel,.reason-grid{grid-template-columns:1fr}
          .official-item,.official-item:nth-child(4),.official-item:nth-child(5),.official-item:last-child{grid-column:auto;border-right:0}
          .official-item:last-child{border-bottom:0}
          .document-group:nth-child(odd){border-right:0}
          .document-group:nth-child(-n+3){border-bottom:1px solid #eadfe4}
          .requirement:nth-child(odd){border-right:0}
          .requirement:nth-child(-n+3){border-bottom:1px solid #3b373e}
          .requirements-help,.document-bottom,.security-foot{flex-direction:column;align-items:flex-start}
          .uscis-list{grid-template-columns:1fr}
          .workflow-grid{grid-template-columns:1fr;gap:0}
          .workflow-step{display:grid;grid-template-columns:64px 1fr;column-gap:18px;padding:0 0 28px;position:relative}
          .workflow-step:after{content:"";position:absolute;left:31px;top:56px;bottom:0;width:1px;background:#d9dae0}
          .workflow-step:last-child:after{display:none}
          .step-number{width:64px;height:64px;margin:0;grid-row:1/span 2}
          .workflow-step h3{margin-top:4px}
          .workflow-step p{grid-column:2;max-width:650px}
          .timeline-option+.timeline-option{border-left:0;border-top:1px solid var(--line)}
          .security-grid{grid-template-columns:1fr}
          .security-item,.security-item:nth-child(even),.security-item:last-child{grid-column:auto;border-right:0}
          .security-item:last-child{border-bottom:0}
          .price-factors{grid-template-columns:1fr}
          .reason{border-right:0!important}
          .related-row{grid-template-columns:1fr;gap:10px;padding:24px 0}
          .related-row .text-link{margin-top:3px}
        }

        @media (max-width:560px){
          .shell{padding-left:20px;padding-right:20px}
          .hero{padding:72px 0 66px}
          .section,.section-dense{padding:64px 0}
          h1{font-size:38px}
          h2{font-size:30px}
          h3{font-size:20px}
          .hero-lead,.section-intro,.final-cta p{font-size:18px}
          .hero-actions{display:grid;grid-template-columns:1fr;width:100%}
          .btn{width:100%;min-height:50px}
          .proof-points{grid-template-columns:1fr;max-width:410px}
          .request-shell{padding:20px;border-radius:24px}
          .request-topbar{flex-direction:column}
          .request-fields{grid-template-columns:1fr}
          .request-file{grid-template-columns:42px minmax(0,1fr);align-items:start}
          .request-file .status-chip{grid-column:2;justify-self:start}
          .file-icon{width:42px;height:42px}
          .mock-field.wide{grid-column:auto}
          .request-progress{grid-template-columns:1fr 1fr;gap:12px}
          .progress-step{min-width:0}
          .progress-step>span:last-child{overflow-wrap:anywhere}
          .trust-grid{grid-template-columns:1fr}
          .trust-item,.trust-item:nth-child(3),.trust-item:nth-child(4){grid-column:auto;border-right:0;border-bottom:1px solid var(--line)}
          .trust-item:last-child{border-bottom:0}
          .document-group,.requirement,.audience,.timeline-option{padding:26px 24px}
          .deliverable-visual{padding:20px}
          .deliverable-stage{padding:14px}
          .uscis-panel{padding:24px}
          .workflow-step{grid-template-columns:54px 1fr;column-gap:15px}
          .step-number{width:54px;height:54px}
          .workflow-step:after{left:26px;top:48px}
          .quality-row{grid-template-columns:42px 1fr;gap:14px}
          .security-item,.reason{padding:26px 22px}
          .faq-button{grid-template-columns:1fr 34px;gap:14px;padding:20px 0}
          .faq-answer{padding-right:0}
          .requirements-help .btn,.document-bottom .btn,.security-foot .text-link{width:100%;justify-content:center}
          .final-cta{padding:68px 0}
          .final-cta h2{font-size:34px}
          .final-actions{display:grid;grid-template-columns:1fr;width:100%}
          .final-proof{font-size:14px}
        }

        @media (max-width:360px){
          .request-shell{padding:18px}
          .request-progress{grid-template-columns:1fr}
          .secure-chip{white-space:normal}
          .proof-point{align-items:flex-start}
          .document-group,.requirement,.audience,.timeline-option,.security-item,.reason{padding-left:20px;padding-right:20px}
          .deliverable-stage{grid-template-columns:42px minmax(0,1fr);gap:12px}
          .deliverable-icon{width:42px;height:42px}
          .workflow-step{grid-template-columns:48px minmax(0,1fr);column-gap:13px}
          .step-number{width:48px;height:48px;font-size:16px}
          .workflow-step:after{left:23px;top:44px}
          .faq-button span:first-child{font-size:17px}
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>Official Document Translation</Eyebrow>
            <h1>Certified Translation Services</h1>
            <p className="hero-lead">Get professional certified translations for immigration, legal, academic, government, and business documents in 100+ languages. Stepes combines professional human translation, careful quality review, secure document handling, and a signed certificate of accuracy in one convenient online workflow.</p>
            <div className="hero-actions">
              <CTA href={QUOTE_URL}>Get a Certified Translation Quote</CTA>
              <CTA href={CONTACT_URL} secondary>Talk to Team Stepes</CTA>
            </div>
            <div className="proof-points">
              {["Signed Certificate of Accuracy", "100+ Languages", "Professional Human Translation", "Fast & Rush Service Available"].map((item) => <div className="proof-point" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
            </div>
          </div>
          <CertifiedRequestMockup />
        </div>
      </section>

      <section className="trust-band" aria-label="Certified translation service highlights">
        <div className="shell trust-grid">
          <div className="trust-item"><strong>Official-Use Documents</strong><span>For USCIS, courts, universities, employers, government agencies, and other institutions</span></div>
          <div className="trust-item"><strong>Secure Online Upload</strong><span>Submit PDFs, scans, images, and other supported document formats</span></div>
          <div className="trust-item"><strong>Your Submission Requirements</strong><span>Share certification wording, notarization, sworn translation, or formatting instructions</span></div>
          <div className="trust-item"><strong>Individuals & Organizations</strong><span>One personal document or recurring certified translation programs</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell definition-grid">
          <div className="definition-copy">
            <SectionHeading title="What Is a Certified Translation?" align="left" />
            <p>A certified translation is a complete translation accompanied by a signed certification statement confirming the accuracy and completeness of the translated document.</p>
            <p>In the United States, a certified translation typically includes the source document, the translated document, and a certification statement identifying the translation and confirming that it has been completed accurately by a person competent to translate the relevant languages.</p>
            <p>Certified translations are commonly requested for immigration applications, court proceedings, academic admissions, employment and global mobility, government filings, professional licensing, and other official purposes.</p>
            <p>Requirements can vary by institution, jurisdiction, and country. If the organization receiving your documents has provided specific certification wording or submission instructions, share those requirements with Stepes when requesting your translation.</p>
          </div>
          <div className="distinction-panel">
            <div className="distinction-row">
              <strong>Certified Translation</strong>
              <p>Refers to the translated document and the signed certification statement that accompanies it.</p>
              <span className="distinction-tag">THE DELIVERABLE</span>
            </div>
            <div className="distinction-row">
              <strong>Certified Translator</strong>
              <p>Refers to an individual who holds a particular professional translator credential or certification.</p>
              <span className="distinction-tag">A PROFESSIONAL CREDENTIAL</span>
            </div>
            <div className="distinction-row">
              <p>In the United States, a translator does not generally need to hold a specific professional certification in order to provide a certified translation. The receiving organization's requirements should guide the final certification format.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell deliverable-grid">
          <div className="deliverable-copy">
            <Eyebrow>Your Deliverable</Eyebrow>
            <h2>What You Receive With a Certified Translation</h2>
            <p>A certified translation is more than translated text. Stepes prepares a complete document package designed to make the translated information clear, traceable, and easy for the receiving organization to review.</p>
            <div className="deliverable-points">
              {[
                ["file", "Complete Professional Translation", "Relevant content is translated, including headings, fields, names, dates, numbers, stamps, seals, annotations, and other visible text as applicable."],
                ["id", "Document Structure and Readability", "The translated document is prepared so information remains easy to identify and compare with the source."],
                ["certificate", "Signed Certificate of Accuracy", "Your certified translation includes a signed certification statement confirming completeness and accuracy according to the agreed requirements."],
                ["delivery", "Secure Digital Delivery", "Receive the completed translation and certification digitally in the agreed format, prepared for submission or institutional review."],
              ].map(([icon,title,body]) => <div className="deliverable-point" key={title}><div className="icon-surface"><Icon name={icon}/></div><div><strong>{title}</strong><p>{body}</p></div></div>)}
            </div>
            <div style={{marginTop:28}}><CTA href={QUOTE_URL}>Get a Certified Translation Quote</CTA></div>
          </div>
          <DeliverableVisual />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Certified Translation for Official Use" intro="Certified translations are used wherever an organization needs to review information contained in a document written in another language. Stepes supports personal and professional documents across immigration, legal, academic, government, employment, and business workflows." align="center" />
          <div className="official-grid">
            {officialUse.map((item) => <article className="official-item" key={item.title}><div className="icon-surface"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.body}</p>{item.link ? <LinkArrow href={item.link}>{item.label}</LinkArrow> : null}</article>)}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <SectionHeading title="Certified Translation for the Documents That Matter" intro="From a single birth certificate to a multilingual portfolio of legal, academic, or corporate records, Stepes translates a broad range of documents used for official purposes." align="center" />
          <div className="document-matrix">
            {documents.map((group) => <article className="document-group" key={group.title}><div className="document-heading"><div className="icon-surface"><Icon name={group.icon}/></div><h3>{group.title}</h3></div><ul className="document-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
          <div className="document-bottom"><p>Don't see your document listed? Stepes supports many additional personal, legal, academic, financial, government, and business document types.</p><CTA href={QUOTE_URL}>Get a Quote</CTA></div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading eyebrow="Understanding the Requirements" title="Certified, Notarized, Sworn—or Apostilled?" intro="These terms describe different processes and should not be used interchangeably. The requirements that apply to your document depend on the receiving organization, country, jurisdiction, and intended use." align="center" dark />
          <div className="requirement-grid">
            {requirements.map((item) => <article className="requirement" key={item.title}><h3>{item.title}</h3><p>{item.body}</p><p className="requirement-note">{item.note}</p></article>)}
          </div>
          <div className="requirements-help"><p>If a court, university, government agency, consulate, employer, licensing body, or other institution has provided certification, notarization, sworn-translation, apostille, authentication, formatting, signature, or wording requirements, include those instructions with your request.</p><CTA href={QUOTE_URL} secondary>Share Your Requirements</CTA></div>
        </div>
      </section>

      <section className="section">
        <div className="shell uscis-grid">
          <div className="uscis-copy">
            <SectionHeading eyebrow="U.S. Immigration" title="Certified Translation for USCIS" align="left" />
            <p>Documents submitted to U.S. Citizenship and Immigration Services that contain a foreign language must generally be accompanied by a full English-language translation.</p>
            <p>The translator's certification must confirm that the English translation is complete and accurate and that the translator is competent to translate from the source language into English.</p>
            <p>Stepes supports certified English translations for a wide range of USCIS and U.S. immigration documents, with careful attention to names, dates, numbers, official terminology, stamps, seals, and other details that matter in immigration documentation.</p>
            <div style={{marginTop:24}}><LinkArrow href="https://www.stepes.com/immigration-document-translation-services/">Certified Immigration Document Translation Services</LinkArrow></div>
          </div>
          <aside className="uscis-panel">
            <h3>Common USCIS Translation Requests</h3>
            <ul className="uscis-list">{["Birth certificates", "Marriage certificates", "Divorce records", "Police certificates", "Passports and identity documents", "Academic transcripts and diplomas", "Affidavits and declarations", "Financial records", "Employment records", "Civil documents", "Supporting immigration evidence"].map((x)=><li key={x}>{x}</li>)}</ul>
            <div className="uscis-note"><strong>Prepared for Official Submission</strong><p>Immigration requirements can depend on the application and circumstances. Customers should follow current USCIS instructions and any guidance provided by their immigration attorney or receiving authority.</p></div>
          </aside>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading eyebrow="Built for Every Scale" title="One Document or an Ongoing Program" intro="Stepes combines an easy online experience for personal documents with the language coverage, project management, security, and scalability needed by professional teams and global organizations." align="center" />
          <div className="audience-grid">
            {audiences.map((item) => <article className="audience" key={item.title}><div className="icon-surface"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.body}</p><ul className="quiet-list">{item.bullets.map((b)=><li key={b}>{b}</li>)}</ul></article>)}
          </div>
          <div style={{textAlign:"center",marginTop:34}}><CTA href={CONTACT_URL} secondary>Talk to Team Stepes</CTA></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="From Upload to Certified Translation" intro="Stepes makes certified document translation easy to manage from initial upload through final delivery." align="center" />
          <div className="workflow-wrap">
            <div className="workflow-line" aria-hidden="true" />
            <div className="workflow-grid">
              {workflow.map((step, idx)=><article className="workflow-step" key={step.title}><div className="step-number">{String(idx+1).padStart(2,"0")}</div><h3>{step.title}</h3><p>{step.body}</p></article>)}
            </div>
          </div>
          <div className="workflow-cta"><CTA href={QUOTE_URL}>Get a Certified Translation Quote</CTA></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell quality-grid">
          <div className="quality-lead">
            <h2>Official Documents Deserve Professional Human Attention</h2>
            <p>A birth date entered incorrectly, a missing stamp, a mistranslated legal term, or a name rendered inconsistently can create unnecessary questions when an official document is reviewed. Certified translation therefore requires completeness, linguistic accuracy, attention to document details, and professional accountability.</p>
          </div>
          <div className="quality-rows">
            {quality.map((item)=><article className="quality-row" key={item.title}><div className="icon-surface"><Icon name={item.icon}/></div><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Standard & Rush Service" title="Certified Translation on Your Timeline" intro="Deadlines for immigration filings, court matters, university applications, employment processes, visa applications, and government submissions do not always leave much time. Stepes offers flexible turnaround options for both planned and urgent certified translation projects." align="center" />
          <div className="timeline-panel">
            <article className="timeline-option"><div className="timeline-label">Planned Requirements</div><h3>Standard Service</h3><p>Ideal for normal filing schedules, planned applications, routine document translation, and larger document sets where there is time for a standard production workflow.</p></article>
            <article className="timeline-option"><div className="timeline-label">Urgent Requirements</div><h3>Rush Service</h3><p>Accelerated service is available for qualifying urgent projects when you are working against a court deadline, immigration filing, university submission, business requirement, or other time-sensitive need.</p><LinkArrow href="https://www.stepes.com/rush-translation-services/">Rush Translation Services</LinkArrow></article>
          </div>
          <p className="timeline-factors">Many common certified-document projects can be completed quickly. Actual turnaround depends on language pair, document volume, source quality, formatting, certification requirements, and project complexity.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <SectionHeading eyebrow="Security & Confidentiality" title="Your Official Documents Stay Protected" intro="Birth certificates, passports, immigration records, tax documents, financial statements, employment records, court documents, and other official files can contain highly sensitive personal or business information. Stepes applies secure, controlled workflows throughout document intake, translation, review, certification, and delivery." align="center" dark />
          <div className="security-grid">
            {security.map((item)=><article className="security-item" key={item.title}><div className="icon-surface"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
          <div className="security-foot"><p>For organizations with additional security, procurement, privacy, or vendor-review requirements, Stepes can support enterprise security reviews and agreed delivery workflows.</p><LinkArrow className="dark-link" href="https://www.stepes.com/security/">Stepes Security & Confidentiality</LinkArrow></div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell language-layout">
          <div className="language-copy">
            <h2>Certified Translation in 100+ Languages</h2>
            <p>Official documents cross borders every day. Stepes provides certified translation across 100+ languages, helping individuals and organizations manage immigration, legal, academic, government, employment, and business requirements around the world.</p>
            <LinkArrow href="https://www.stepes.com/translation-languages/">Explore All Translation Languages</LinkArrow>
          </div>
          <div>
            <div className="language-chips">{languages.map((l)=><span className="language-chip" key={l}>{l}</span>)}</div>
            <p className="language-note">Stepes regularly supports requests such as Spanish-to-English certified translation, Chinese-to-English certified document translation, Arabic official document translation, Vietnamese-to-English immigration translation, French certified translation, Portuguese certified translation, and many other language combinations.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell pricing-grid">
          <div className="pricing-copy">
            <h2>How Much Does Certified Translation Cost?</h2>
            <p>Certified translation pricing depends on the document and the service requirements rather than a single universal rate. The easiest way to receive accurate pricing is to upload the actual documents so Stepes can review the content and requirements you have.</p>
            <div className="pricing-cta"><CTA href={QUOTE_URL}>Get an Exact Translation Quote</CTA></div>
          </div>
          <div className="price-factors">
            {["Source and target languages", "Amount of text", "Number of documents", "Document type", "Source-file legibility", "Scans, handwriting, stamps, and seals", "Formatting requirements", "Certification requirements", "Notarization or other special requirements, when applicable", "Standard or rush turnaround"].map((x)=><div className="price-factor" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading title="Certified Translation With Professional Expertise and Modern Convenience" intro="Certified translation should combine accuracy and accountability with a straightforward ordering experience. Stepes brings professional linguists, signed certification, careful document handling, secure workflows, responsive turnaround options, and scalable project management together in one service." align="center" />
          <div className="reason-grid">
            {reasons.map((item)=><article className="reason" key={item.title}><div className="icon-surface"><Icon name={item.icon}/></div><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
          <div className="reason-cta"><CTA href={QUOTE_URL}>Get a Certified Translation Quote</CTA><CTA href={CONTACT_URL} secondary>Talk to Team Stepes</CTA></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Certified Translation Questions" align="center" />
          <div className="faq-wrap">
            {faqs.map(([q,a],idx)=>{
              const isOpen=openFaq===idx;
              return <div className="faq-item" key={q}>
                <button className="faq-button" type="button" aria-expanded={isOpen} aria-controls={`faq-${idx}`} onClick={()=>setOpenFaq(isOpen ? -1 : idx)}><span>{q}</span><span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span></button>
                {isOpen ? <div className="faq-answer" id={`faq-${idx}`}><p>{a}</p></div> : null}
              </div>
            })}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading title="Explore Related Translation Services" align="center" />
          <div className="related-list">
            {related.map((item)=><article className="related-row" key={item.title}><h3>{item.title}</h3><p>{item.body}</p><LinkArrow href={item.href}>{item.title}</LinkArrow></article>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-grid">
          <div>
            <h2>Need a Certified Translation?</h2>
            <p>Upload your documents and tell Stepes where the translation will be used. We'll help you confirm the language, certification, turnaround, and project requirements and provide a quote for professional translation and delivery.</p>
            <div className="final-proof">100+ Languages · Secure Document Handling · Professional Human Translation</div>
          </div>
          <div className="final-actions"><CTA href={QUOTE_URL}>Get a Certified Translation Quote</CTA><CTA href={CONTACT_URL} secondary>Talk to Team Stepes</CTA></div>
        </div>
      </section>
    </main>
  );
}
