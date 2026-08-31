import React from "react";

const ROOT = "sesen-case-study-editorial";

const links = {
  contactSales: "https://www.sesen.com/contact-sales/",
  quote: "https://www.sesen.com/get-a-quote/",
  ifu: "https://www.sesen.com/ifu-translation-services/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
  labelReview: "https://www.sesen.com/label-review-in-context-qa/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
};

const caseFacts = [
  ["Client", "U.S.-based medical device manufacturer"],
  ["Device", "Class III implantable cardiac device"],
  ["Content", "Instructions for Use"],
  ["Languages", "24"],
  ["Market", "European markets"],
  ["Context", "EU MDR and applicable market-specific language requirements"],
];

const riskRows = [
  {
    no: "01",
    title: "Safety-critical meaning",
    text: "Warnings, precautions, contraindications, procedural instructions, and device-handling information had to remain precise across every target language. Small wording differences could create unnecessary review questions or change how technical information was understood.",
  },
  {
    no: "02",
    title: "Fragmented terminology",
    text: "The content environment included legacy IFUs, related product families, prior translations, internal terminology, and work completed by multiple language vendors. The new multilingual set needed a controlled vocabulary rather than 24 independent translation decisions.",
  },
  {
    no: "03",
    title: "Translation and layout under one deadline",
    text: "The regulatory schedule left little room for late-stage correction. Translation, bilingual review, multilingual DTP, and final-context validation had to operate as one coordinated production system instead of a series of handoffs.",
  },
];

const workflow = [
  ["Source IFU", "Review the source, references, legacy translations, structure, and terminology dependencies."],
  ["Terminology harmonization", "Establish preferred medical, technical, device, and safety language before multilingual production scales."],
  ["Specialist translation", "Native-language professionals with relevant medical-device and life-sciences expertise translate from controlled resources."],
  ["Independent review", "A second professional linguist checks meaning, completeness, terminology, readability, numbers, and higher-risk content."],
  ["Multilingual DTP", "Layouts are rebuilt and adjusted for expansion, tables, warnings, numbering, callouts, and language-specific behavior."],
  ["In-context QA", "The team reviews language and layout together in final or near-final IFUs."],
  ["Submission-ready delivery", "Completed language packages are prepared to the client’s delivery structure and regulatory schedule."],
];

const qaCallouts = [
  ["A", "Warnings & cautions", "Placement, wrapping, emphasis, completeness"],
  ["B", "Tables & numbers", "Measurements, units, row integrity, references"],
  ["C", "Cross-references", "Numbering, symbols, headings, page relationships"],
  ["D", "Final rendering", "Expansion, truncation, line breaks, pagination"],
];

const related = [
  ["IFU Translation Services", "Specialized IFU translation, terminology management, multilingual formatting, revision support, and final-context QA.", links.ifu],
  ["Medical Device Translation Services", "Multilingual support across medical-device development and commercialization, from regulatory documentation to labeling and software.", links.medicalDevice],
  ["Label Review & In-Context QA", "Final-layout linguistic QA for IFUs, labels, packaging, warnings, symbols, and multilingual product content.", links.labelReview],
  ["Regulatory Translation Services", "Specialized translation support for submissions, technical documentation, authority correspondence, and global regulatory workflows.", links.regulatory],
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12M11 5.5 15.5 10 11 14.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4 10.4 3.2 3.2L16 5.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`${ROOT}__button${secondary ? ` ${ROOT}__button--secondary` : ""}`} href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function CaseFileArt() {
  return (
    <div className={`${ROOT}__case-art`} role="img" aria-label="Illustration of a multilingual Class III medical-device IFU with a subtle implantable cardiac-device reference">
      <svg viewBox="0 0 760 560" aria-hidden="true">
        <circle cx="390" cy="278" r="234" fill="#F5F7FF" />
        <path d="M76 116h104M584 438h96" stroke="#DDE4F2" strokeWidth="2" strokeLinecap="round" />

        <g transform="translate(190 46)">
          <rect x="58" y="22" width="344" height="430" rx="24" fill="#F7F9FD" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="30" y="48" width="344" height="430" rx="24" fill="#fff" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="0" y="74" width="344" height="430" rx="24" fill="#fff" stroke="#4B6FD8" strokeWidth="2.4" />
          <rect x="31" y="108" width="138" height="22" rx="11" fill="#EAF0FF" />
          <line x1="49" y1="119" x2="151" y2="119" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" opacity=".78" />
          <g transform="translate(238 106)">
            <rect width="72" height="28" rx="14" fill="#17264D" />
            <text x="36" y="19" textAnchor="middle" fontFamily="Inter, Arial" fontSize="12" fontWeight="700" fill="#fff">CLASS III</text>
          </g>
          <line x1="31" y1="158" x2="258" y2="158" stroke="#17264D" strokeWidth="5" strokeLinecap="round" opacity=".92" />
          <line x1="31" y1="181" x2="294" y2="181" stroke="#68758B" strokeWidth="3" strokeLinecap="round" opacity=".4" />
          <line x1="31" y1="198" x2="270" y2="198" stroke="#68758B" strokeWidth="3" strokeLinecap="round" opacity=".32" />
          <rect x="31" y="229" width="280" height="92" rx="14" fill="#F7F9FD" stroke="#DDE4F2" />
          <circle cx="58" cy="256" r="11" fill="#EAF0FF" />
          <path d="M53 256h10M58 251v10" stroke="#3659BB" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="81" y1="250" x2="271" y2="250" stroke="#17264D" strokeWidth="3.4" strokeLinecap="round" opacity=".72" />
          <line x1="81" y1="270" x2="282" y2="270" stroke="#68758B" strokeWidth="2.6" strokeLinecap="round" opacity=".36" />
          <line x1="54" y1="294" x2="284" y2="294" stroke="#68758B" strokeWidth="2.6" strokeLinecap="round" opacity=".28" />
          {[356, 378, 400, 422, 444].map((y, i) => <line key={y} x1="31" y1={y} x2={i % 2 ? 262 : 294} y2={y} stroke="#68758B" strokeWidth="3" strokeLinecap="round" opacity={i % 2 ? ".27" : ".34"} />)}
        </g>

        <g transform="translate(68 155)">
          <rect width="134" height="82" rx="21" fill="#fff" stroke="#DDE4F2" />
          <text x="22" y="36" fontFamily="Inter Tight, Inter, Arial" fontSize="31" fontWeight="500" fill="#17264D">24</text>
          <text x="22" y="58" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" letterSpacing="1.1" fill="#3659BB">LANGUAGES</text>
        </g>

        <g transform="translate(525 171)">
          <rect x="0" y="22" width="128" height="112" rx="27" fill="#fff" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="28" y="0" width="72" height="34" rx="12" fill="#EAF0FF" stroke="#DDE4F2" />
          <circle cx="38" cy="66" r="7" fill="#4B6FD8" opacity=".18" />
          <circle cx="63" cy="66" r="7" fill="#4B6FD8" opacity=".18" />
          <circle cx="88" cy="66" r="7" fill="#4B6FD8" opacity=".18" />
          <path d="M29 109c26 18 56 18 80 0" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <path d="M63 134c2 34-18 48-33 67-18 23-20 46-7 66" fill="none" stroke="#68758B" strokeWidth="2" strokeLinecap="round" opacity=".65" />
          <path d="M82 134c4 30 27 39 38 61 10 20 6 44-10 60" fill="none" stroke="#68758B" strokeWidth="2" strokeLinecap="round" opacity=".65" />
          <path d="M43 92h42" stroke="#68758B" strokeWidth="3" strokeLinecap="round" opacity=".55" />
        </g>

        <g transform="translate(520 398)">
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${i * 39} 0)`}>
              <rect width="32" height="38" rx="9" fill={i === 0 ? "#17264D" : "#fff"} stroke={i === 0 ? "#17264D" : "#DDE4F2"} />
              <line x1="8" y1="12" x2="24" y2="12" stroke={i === 0 ? "#fff" : "#4B6FD8"} strokeWidth="2.4" strokeLinecap="round" opacity=".9" />
              <line x1="8" y1="20" x2="21" y2="20" stroke={i === 0 ? "#C8D6FF" : "#DDE4F2"} strokeWidth="2.2" strokeLinecap="round" />
              <line x1="8" y1="28" x2="18" y2="28" stroke={i === 0 ? "#C8D6FF" : "#DDE4F2"} strokeWidth="2.2" strokeLinecap="round" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function TerminologyVisual() {
  const sources = ["Legacy IFUs", "Product terminology", "Client-approved language", "Regulatory & safety language"];
  return (
    <div className={`${ROOT}__term-visual`} aria-label="Diagram showing multiple terminology sources converging into one controlled vocabulary for 24 localized IFUs">
      <div className={`${ROOT}__term-sources`}>
        {sources.map((item, i) => <div className={`${ROOT}__term-source`} key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}
      </div>
      <div className={`${ROOT}__term-connector`} aria-hidden="true"><span /><Arrow /></div>
      <div className={`${ROOT}__term-core`}>
        <small>CONTROLLED FOUNDATION</small>
        <strong>One device vocabulary</strong>
        <p>Preferred terminology is resolved before variation can multiply across the program.</p>
      </div>
      <div className={`${ROOT}__term-connector ${ROOT}__term-connector--right`} aria-hidden="true"><Arrow /><span /></div>
      <div className={`${ROOT}__term-output`}>
        <strong>24</strong>
        <span>Localized IFUs</span>
        <small>aligned to one terminology system</small>
      </div>
    </div>
  );
}

function IFUSpecimen() {
  return (
    <div className={`${ROOT}__specimen`}>
      <div className={`${ROOT}__specimen-paper`} aria-label="Annotated IFU specimen used to illustrate final-context quality assurance">
        <div className={`${ROOT}__specimen-top`}><span>INSTRUCTIONS FOR USE</span><b>IFU</b></div>
        <h3>Implantable Cardiac Device</h3>
        <div className={`${ROOT}__specimen-line ${ROOT}__specimen-line--long`} />
        <div className={`${ROOT}__specimen-line`} />
        <div className={`${ROOT}__specimen-warning`}><span>!</span><div><b>Warning</b><i /></div></div>
        <div className={`${ROOT}__specimen-table`}>
          <div /><div /><div /><div /><div /><div />
        </div>
        <div className={`${ROOT}__specimen-line ${ROOT}__specimen-line--long`} />
        <div className={`${ROOT}__specimen-line ${ROOT}__specimen-line--short`} />
        {qaCallouts.map(([key, title], i) => <span key={key} className={`${ROOT}__pin ${ROOT}__pin--${i + 1}`}>{key}</span>)}
      </div>
      <div className={`${ROOT}__specimen-key`}>
        {qaCallouts.map(([key, title, text]) => (
          <div key={key}><span>{key}</span><p><strong>{title}</strong>{text}</p></div>
        ))}
      </div>
    </div>
  );
}

export default function SesenClassIIICaseStudyEditorial() {
  return (
    <main className={ROOT}>
      <style>{`
        .${ROOT}{--blue:#4B6FD8;--blue2:#3659BB;--deep:#253F8F;--navy:#17264D;--body:#46546D;--muted:#68758B;--border:#DDE4F2;--divider:#E9EEF8;--soft:#F7F9FD;--pale:#F5F7FF;--ice:#EAF0FF;--white:#fff;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--body);background:#fff;overflow-x:clip}.${ROOT}{} 
        .${ROOT} *,.${ROOT} *:before,.${ROOT} *:after{box-sizing:border-box}.${ROOT} a{color:inherit}.${ROOT} svg{display:block;max-width:100%}.${ROOT} h1,.${ROOT} h2,.${ROOT} h3,.${ROOT} p{margin-top:0}.${ROOT} p{font-size:18px;line-height:1.72;margin-bottom:24px}.${ROOT} h1,.${ROOT} h2,.${ROOT} h3{font-family:"Inter Tight",Inter,sans-serif;color:var(--navy);font-weight:500}.${ROOT} h1{font-size:48px;line-height:1.1;letter-spacing:-1px;margin-bottom:28px;max-width:920px}.${ROOT} h2{font-size:36px;line-height:1.2;letter-spacing:-.25px;margin-bottom:22px}.${ROOT} h3{font-size:24px;line-height:1.3;margin-bottom:12px}.${ROOT}__shell{width:min(1280px,calc(100% - 80px));margin:0 auto}.${ROOT}__reading{max-width:770px}.${ROOT} .${ROOT}__eyebrow{font-family:Inter,sans-serif;font-size:11px!important;font-weight:700!important;line-height:1.35!important;letter-spacing:.15em!important;text-transform:uppercase!important;color:var(--blue2);margin:0 0 20px}.${ROOT} .${ROOT}__eyebrow--light{color:#C8D6FF}.${ROOT}__button,.${ROOT}__button:link,.${ROOT}__button:visited{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:50px;padding:0 25px;border-radius:999px;text-decoration:none;background:var(--blue);color:#fff!important;font-size:14px;font-weight:700;transition:.18s ease}.${ROOT}__button:hover,.${ROOT}__button:focus-visible{background:var(--blue2);color:#fff!important}.${ROOT}__button span,.${ROOT}__button svg{color:inherit!important}.${ROOT}__button svg{width:18px;height:18px;flex:none}.${ROOT}__button--secondary,.${ROOT}__button--secondary:link,.${ROOT}__button--secondary:visited{background:#fff;color:#111827!important;border:1px solid var(--border)}.${ROOT}__button--secondary:hover,.${ROOT}__button--secondary:focus-visible{background:var(--pale);color:#111827!important}.${ROOT}__button:focus-visible,.${ROOT}__related-title-link:focus-visible{outline:3px solid rgba(75,111,216,.28);outline-offset:3px}.${ROOT}__masthead{padding:82px 0 44px;border-bottom:1px solid var(--divider)}.${ROOT}__masthead-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(420px,.92fr);gap:74px;align-items:center}.${ROOT}__deck{font-size:21px!important;line-height:1.62!important;color:#293954;max-width:780px;margin-bottom:0!important}.${ROOT}__story-kicker{display:flex;gap:16px;align-items:flex-start;margin-top:34px;padding-top:28px;border-top:1px solid var(--divider);max-width:760px}.${ROOT}__story-kicker strong{font-family:"Inter Tight",Inter,sans-serif;font-size:32px;line-height:1;color:var(--blue2);font-weight:500;white-space:nowrap}.${ROOT}__story-kicker span{font-size:16px;line-height:1.55;color:var(--muted);max-width:430px}.${ROOT}__case-art{min-width:0}.${ROOT}__case-art svg{width:100%;height:auto}.${ROOT}__outcome{padding:78px 0 82px}.${ROOT}__outcome-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:0;align-items:stretch;border-top:1px solid var(--divider);border-bottom:1px solid var(--divider)}.${ROOT}__outcome-main{padding:40px 52px 42px 0}.${ROOT}__outcome-main b{font-family:"Inter Tight",Inter,sans-serif;font-size:98px;line-height:.9;letter-spacing:-3px;color:var(--navy);font-weight:500;display:block;margin-bottom:14px}.${ROOT}__outcome-main strong{font-family:"Inter Tight",Inter,sans-serif;font-size:28px;color:var(--navy);font-weight:500}.${ROOT}__outcome-main p{font-size:16px;line-height:1.6;margin:12px 0 0;max-width:520px}.${ROOT}__outcome-secondary{padding:40px 34px;border-left:1px solid var(--divider);display:flex;flex-direction:column;justify-content:center}.${ROOT}__outcome-secondary b{font-family:"Inter Tight",Inter,sans-serif;font-size:48px;line-height:1;color:var(--blue2);font-weight:500;margin-bottom:10px}.${ROOT}__outcome-secondary strong{font-size:16px;line-height:1.45;color:var(--navy)}.${ROOT}__outcome-secondary span{font-size:14px;line-height:1.5;color:var(--muted);margin-top:7px}.${ROOT}__story{padding:88px 0}.${ROOT}__story-shell{display:grid;grid-template-columns:270px minmax(0,780px);gap:90px;justify-content:center;align-items:start}.${ROOT}__case-file{position:sticky;top:110px;border-top:2px solid var(--blue);padding-top:20px}.${ROOT}__case-file-title{font-size:11px;font-weight:700;letter-spacing:.15em;color:var(--blue2);text-transform:uppercase;margin-bottom:18px}.${ROOT}__fact{padding:15px 0;border-bottom:1px solid var(--divider)}.${ROOT}__fact small{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);margin-bottom:4px}.${ROOT}__fact span{display:block;font-size:15px;line-height:1.5;color:var(--navy);font-weight:600}.${ROOT}__story-number{font-family:Inter,sans-serif;font-size:11px;font-weight:700;line-height:1.35;letter-spacing:.15em;text-transform:uppercase;color:var(--blue2);margin-bottom:14px}.${ROOT}__story-content>p:first-of-type{font-size:20px;line-height:1.68;color:#293954}.${ROOT}__risk{margin-top:52px;border-top:1px solid var(--divider)}.${ROOT}__risk-row{display:grid;grid-template-columns:74px 240px minmax(0,1fr);gap:26px;padding:29px 0;border-bottom:1px solid var(--divider);align-items:start}.${ROOT}__risk-row>span{font-family:"Inter Tight",Inter,sans-serif;font-size:25px;color:#9BA8BD;font-weight:500}.${ROOT}__risk-row h3{margin:0}.${ROOT}__risk-row p{font-size:16px;line-height:1.65;margin:0}.${ROOT}__term-section{padding:100px 0;background:var(--navy);color:#D9E2FF}.${ROOT}__term-head{display:grid;grid-template-columns:.9fr 1.1fr;gap:80px;align-items:end;margin-bottom:58px}.${ROOT}__term-head h2{color:#fff;margin:0}.${ROOT}__term-head p{font-size:18px;line-height:1.7;color:#D9E2FF;margin:0;max-width:620px}.${ROOT}__term-visual{display:grid;grid-template-columns:1fr 90px 1.1fr 90px .7fr;align-items:center;gap:18px}.${ROOT}__term-sources{display:grid;gap:10px}.${ROOT}__term-source{min-height:58px;border:1px solid rgba(200,214,255,.22);border-radius:14px;display:flex;align-items:center;gap:14px;padding:0 17px;background:rgba(255,255,255,.035);font-size:16px;color:#fff}.${ROOT}__term-source span{font-size:11px;letter-spacing:.1em;color:#C8D6FF}.${ROOT}__term-connector{display:flex;align-items:center;gap:10px;color:#C8D6FF}.${ROOT}__term-connector span{height:1px;background:rgba(200,214,255,.38);flex:1}.${ROOT}__term-connector svg{width:18px}.${ROOT}__term-connector--right{flex-direction:row-reverse}.${ROOT}__term-core{border:1px solid rgba(200,214,255,.3);border-radius:26px;padding:32px;background:rgba(255,255,255,.055)}.${ROOT}__term-core small{display:block;font-size:11px;font-weight:700;letter-spacing:.14em;color:#C8D6FF;margin-bottom:12px}.${ROOT}__term-core strong{font-family:"Inter Tight",Inter,sans-serif;font-size:28px;line-height:1.2;color:#fff;font-weight:500;display:block;margin-bottom:12px}.${ROOT}__term-core p{font-size:16px;line-height:1.6;color:#D9E2FF;margin:0}.${ROOT}__term-output{text-align:center}.${ROOT}__term-output strong{display:block;font-family:"Inter Tight",Inter,sans-serif;font-size:72px;line-height:.9;color:#fff;font-weight:500}.${ROOT}__term-output span{display:block;font-size:16px;font-weight:700;color:#fff;margin-top:10px}.${ROOT}__term-output small{display:block;font-size:12px;line-height:1.45;color:#C8D6FF;margin-top:6px}.${ROOT}__intervention{padding:100px 0}.${ROOT}__intervention-intro{display:grid;grid-template-columns:.72fr 1.28fr;gap:80px;align-items:start;margin-bottom:60px}.${ROOT}__intervention-intro h2{margin:0}.${ROOT}__intervention-intro p{font-size:19px;line-height:1.7;margin:0;max-width:710px}.${ROOT}__workflow{counter-reset:step;border-top:1px solid var(--divider)}.${ROOT}__workflow-row{display:grid;grid-template-columns:76px 270px minmax(0,1fr);gap:28px;align-items:start;padding:24px 0;border-bottom:1px solid var(--divider);counter-increment:step}.${ROOT}__workflow-row:before{content:counter(step,decimal-leading-zero);font-family:"Inter Tight",Inter,sans-serif;font-size:22px;color:var(--blue2)}.${ROOT}__workflow-row strong{font-family:"Inter Tight",Inter,sans-serif;font-size:21px;line-height:1.3;color:var(--navy);font-weight:500}.${ROOT}__workflow-row span{font-size:16px;line-height:1.65}.${ROOT}__specimen-section{padding:100px 0;background:var(--soft)}.${ROOT}__specimen-head{max-width:800px;margin-bottom:52px}.${ROOT}__specimen-head p{margin-bottom:0}.${ROOT}__specimen{display:grid;grid-template-columns:1.2fr .8fr;gap:72px;align-items:center}.${ROOT}__specimen-paper{width:min(100%,590px);aspect-ratio:4/5;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:22px;box-shadow:0 20px 50px rgba(23,38,77,.08);padding:46px;position:relative}.${ROOT}__specimen-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:35px}.${ROOT}__specimen-top span{font-size:10px;font-weight:700;letter-spacing:.14em;color:var(--blue2)}.${ROOT}__specimen-top b{font-size:10px;color:#fff;background:var(--navy);border-radius:999px;padding:7px 11px}.${ROOT}__specimen-paper h3{font-size:27px;max-width:340px}.${ROOT}__specimen-line{height:4px;width:72%;border-radius:99px;background:#DDE4F2;margin:13px 0}.${ROOT}__specimen-line--long{width:91%}.${ROOT}__specimen-line--short{width:55%}.${ROOT}__specimen-warning{display:flex;gap:15px;align-items:flex-start;margin:38px 0 31px;padding:20px;border:1px solid var(--border);border-radius:14px;background:var(--soft)}.${ROOT}__specimen-warning>span{width:26px;height:26px;display:grid;place-items:center;border-radius:50%;background:var(--ice);color:var(--blue2);font-weight:700}.${ROOT}__specimen-warning b{display:block;color:var(--navy);font-size:13px;margin-bottom:10px}.${ROOT}__specimen-warning i{display:block;width:220px;max-width:100%;height:4px;background:#DDE4F2;border-radius:99px;box-shadow:0 13px 0 #DDE4F2}.${ROOT}__specimen-table{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#DDE4F2;border:1px solid #DDE4F2;margin:26px 0}.${ROOT}__specimen-table div{height:42px;background:#fff}.${ROOT}__pin{position:absolute;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:var(--blue);color:#fff;font-size:12px;font-weight:700;box-shadow:0 0 0 7px rgba(75,111,216,.13)}.${ROOT}__pin--1{top:38%;right:-17px}.${ROOT}__pin--2{top:59%;left:-17px}.${ROOT}__pin--3{top:76%;right:-17px}.${ROOT}__pin--4{bottom:7%;left:18%}.${ROOT}__specimen-key{border-top:1px solid var(--border)}.${ROOT}__specimen-key>div{display:grid;grid-template-columns:34px 1fr;gap:18px;padding:23px 0;border-bottom:1px solid var(--border)}.${ROOT}__specimen-key>div>span{width:30px;height:30px;display:grid;place-items:center;border-radius:50%;background:var(--ice);color:var(--blue2);font-weight:700;font-size:12px}.${ROOT}__specimen-key p{font-size:16px;line-height:1.55;margin:0}.${ROOT}__specimen-key strong{display:block;color:var(--navy);font-size:16px;margin-bottom:4px}.${ROOT}__human-tech{padding:92px 0}.${ROOT}__human-tech-head{max-width:820px;margin:0 0 48px}.${ROOT}__human-tech-head h2{margin-bottom:18px}.${ROOT}__human-tech-head p{font-size:18px;line-height:1.7;margin:0}.${ROOT}__human-tech-grid{display:grid;grid-template-columns:1fr 1px 1fr;gap:54px;align-items:stretch}.${ROOT}__human-tech-divider{background:var(--divider)}.${ROOT}__human-tech-col{padding:8px 12px}.${ROOT}__human-tech-col h3{font-size:25px}.${ROOT}__human-tech-col p{font-size:17px;line-height:1.68}.${ROOT}__human-tech-list{display:grid;gap:11px;margin-top:27px}.${ROOT}__human-tech-list span{display:flex;gap:10px;font-size:16px;line-height:1.5;color:var(--navy)}.${ROOT}__human-tech-list svg{width:18px;color:var(--blue2);flex:none;margin-top:2px}.${ROOT}__results{padding:104px 0;background:var(--navy);color:#D9E2FF}.${ROOT}__results-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:86px;align-items:start}.${ROOT}__results h2{color:#fff}.${ROOT}__results-copy p{color:#D9E2FF}.${ROOT}__results-metrics{border-top:1px solid rgba(200,214,255,.25)}.${ROOT}__result-row{display:grid;grid-template-columns:150px 1fr;gap:28px;padding:25px 0;border-bottom:1px solid rgba(200,214,255,.25)}.${ROOT}__result-row b{font-family:"Inter Tight",Inter,sans-serif;font-size:46px;line-height:1;color:#fff;font-weight:500}.${ROOT}__result-row strong{display:block;color:#fff;font-size:16px;margin-bottom:5px}.${ROOT}__result-row span{font-size:16px;line-height:1.55;color:#C8D6FF}.${ROOT}__quote{padding:96px 0}.${ROOT}__quote-wrap{max-width:1040px;margin:0 auto;padding-left:64px;border-left:3px solid var(--blue)}.${ROOT}__quote blockquote{margin:0;font-family:"Inter Tight",Inter,sans-serif;font-size:36px;line-height:1.38;color:var(--navy);font-weight:500;letter-spacing:-.25px}.${ROOT}__quote cite{display:block;margin-top:28px;font-style:normal;font-size:15px;line-height:1.6;color:var(--muted)}.${ROOT}__quote cite strong{color:var(--navy)}.${ROOT}__meaning{padding:84px 0 96px;border-top:1px solid var(--divider)}.${ROOT}__meaning-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:84px}.${ROOT}__meaning h2{margin:0}.${ROOT}__meaning-copy p{font-size:18px}.${ROOT}__meaning-points{margin-top:28px;border-top:1px solid var(--divider)}.${ROOT}__meaning-point{display:grid;grid-template-columns:24px 1fr;gap:14px;padding:16px 0;border-bottom:1px solid var(--divider);font-size:16px;line-height:1.6;color:var(--navy)}.${ROOT}__meaning-point svg{width:18px;color:var(--blue2);margin-top:3px}.${ROOT}__related{padding:88px 0;background:var(--soft)}.${ROOT}__related-head{display:flex;justify-content:space-between;gap:40px;align-items:end;margin-bottom:32px}.${ROOT}__related-head h2{margin:0}.${ROOT}__related-head p{font-size:16px;max-width:450px;margin:0}.${ROOT}__related-list{border-top:1px solid var(--border)}.${ROOT}__related-item{display:grid;grid-template-columns:300px 1fr;gap:34px;align-items:start;padding:25px 0;border-bottom:1px solid var(--border)}.${ROOT}__related-title-link{display:inline-flex;align-items:center;gap:10px;width:max-content;max-width:100%;text-decoration:none;color:var(--navy)}.${ROOT}__related-title-link strong{font-family:"Inter Tight",Inter,sans-serif;font-size:21px;color:inherit;font-weight:500}.${ROOT}__related-title-link svg{width:20px;color:var(--blue2);transition:transform .18s ease;flex:none}.${ROOT}__related-title-link:hover strong{text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px}.${ROOT}__related-title-link:hover svg{transform:translateX(4px)}.${ROOT}__related-item p{font-size:16px;line-height:1.6;color:var(--body);margin:0}.${ROOT}__cta{padding:96px 0 106px}.${ROOT}__cta-box{background:var(--pale);border:1px solid var(--border);border-radius:30px;padding:58px 64px;display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center}.${ROOT}__cta h2{font-size:36px;margin-bottom:15px}.${ROOT}__cta p{font-size:17px;line-height:1.65;margin:0;max-width:720px}.${ROOT}__cta-actions{display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-end}. 
        @media(max-width:1100px){.${ROOT}__shell{width:min(100% - 60px,1280px)}.${ROOT}__masthead-grid{grid-template-columns:1fr .86fr;gap:42px}.${ROOT} h1{font-size:48px}.${ROOT}__story-shell{grid-template-columns:230px minmax(0,720px);gap:55px}.${ROOT}__term-visual{grid-template-columns:1fr 50px 1fr 50px .7fr;gap:10px}.${ROOT}__specimen{gap:45px}.${ROOT}__results-grid{gap:55px}}
        @media(max-width:860px){.${ROOT}__shell{width:calc(100% - 56px)}.${ROOT}__masthead{padding-top:70px}.${ROOT}__masthead-grid{grid-template-columns:1fr}.${ROOT}__case-art{max-width:600px;margin:0 auto}.${ROOT}__outcome-grid{grid-template-columns:1fr 1fr}.${ROOT}__outcome-main{grid-column:1/-1;padding-right:0;border-bottom:1px solid var(--divider)}.${ROOT}__outcome-secondary:first-of-type{border-left:0}.${ROOT}__story-shell{grid-template-columns:1fr;gap:38px;max-width:780px;margin:0 auto}.${ROOT}__case-file{position:static;display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:2px solid var(--blue);border-bottom:1px solid var(--divider);padding-top:0}.${ROOT}__case-file-title{grid-column:1/-1;margin:18px 0 4px}.${ROOT}__fact{padding-right:20px}.${ROOT}__term-head,.${ROOT}__intervention-intro,.${ROOT}__results-grid,.${ROOT}__meaning-grid{grid-template-columns:1fr;gap:32px}.${ROOT}__term-visual{grid-template-columns:1fr;gap:16px;max-width:680px;margin:0 auto}.${ROOT}__term-connector{height:54px;justify-content:center;flex-direction:column}.${ROOT}__term-connector span{width:1px;flex:1}.${ROOT}__term-connector svg{transform:rotate(90deg)}.${ROOT}__term-connector--right{flex-direction:column-reverse}.${ROOT}__specimen{grid-template-columns:1fr;max-width:700px;margin:0 auto}.${ROOT}__human-tech-grid{grid-template-columns:1fr;gap:34px}.${ROOT}__human-tech-divider{height:1px}.${ROOT}__quote-wrap{padding-left:42px}.${ROOT}__quote blockquote{font-size:32px}.${ROOT}__related-head{display:block}.${ROOT}__related-head p{margin-top:14px}.${ROOT}__related-item{grid-template-columns:240px 1fr}.${ROOT}__cta-box{grid-template-columns:1fr;gap:30px}.${ROOT}__cta-actions{justify-content:flex-start}}
        @media(max-width:640px){.${ROOT}__shell{width:calc(100% - 40px)}.${ROOT} p{font-size:17px;line-height:1.68}.${ROOT} h1{font-size:42px;line-height:1.12;letter-spacing:-.6px;text-align:center}.${ROOT} h2{font-size:32px;line-height:1.22}.${ROOT}__masthead{padding:58px 0 28px}.${ROOT}__masthead .${ROOT}__eyebrow{text-align:center}.${ROOT}__deck{font-size:18px!important;line-height:1.65!important;text-align:left}.${ROOT}__story-kicker{display:block;text-align:left}.${ROOT}__story-kicker strong{display:block;margin-bottom:9px}.${ROOT}__case-art{margin-top:-8px}.${ROOT}__outcome{padding:58px 0}.${ROOT}__outcome-grid{grid-template-columns:1fr}.${ROOT}__outcome-main{padding:30px 0}.${ROOT}__outcome-main b{font-size:76px}.${ROOT}__outcome-secondary,.${ROOT}__outcome-secondary:first-of-type{border-left:0;border-top:1px solid var(--divider);padding:26px 0}.${ROOT}__story,.${ROOT}__intervention,.${ROOT}__specimen-section,.${ROOT}__human-tech,.${ROOT}__quote,.${ROOT}__related{padding:68px 0}.${ROOT}__term-section,.${ROOT}__results{padding:72px 0}.${ROOT}__case-file{grid-template-columns:1fr 1fr}.${ROOT}__case-file-title{grid-column:1/-1}.${ROOT}__fact:nth-of-type(odd){padding-right:18px}.${ROOT}__risk-row{grid-template-columns:52px 1fr;gap:14px 18px}.${ROOT}__risk-row h3{align-self:center}.${ROOT}__risk-row p{grid-column:2;font-size:16px}.${ROOT}__intervention-intro{margin-bottom:36px}.${ROOT}__workflow-row{grid-template-columns:44px 1fr;gap:12px 16px;padding:20px 0}.${ROOT}__workflow-row strong{align-self:center;font-size:20px}.${ROOT}__workflow-row span{grid-column:2;font-size:16px}.${ROOT}__specimen-paper{padding:30px}.${ROOT}__specimen-warning{margin:28px 0 22px}.${ROOT}__specimen-key>div{grid-template-columns:32px 1fr;gap:13px}.${ROOT}__human-tech-col{padding:0}.${ROOT}__result-row{grid-template-columns:105px 1fr;gap:20px}.${ROOT}__result-row b{font-size:38px}.${ROOT}__quote-wrap{padding-left:24px}.${ROOT}__quote blockquote{font-size:28px;line-height:1.42}.${ROOT}__related-item{grid-template-columns:1fr;gap:8px}.${ROOT}__related-title-link strong{font-size:20px}.${ROOT}__related-item p{font-size:16px}.${ROOT}__cta{padding:70px 0 80px}.${ROOT}__cta-box{padding:38px 24px;border-radius:24px}.${ROOT}__cta h2{text-align:center}.${ROOT}__cta p{text-align:left}.${ROOT}__cta-actions{display:grid;grid-template-columns:1fr;width:100%}.${ROOT}__button{width:100%}}
        @media(max-width:360px){.${ROOT} h1{font-size:38px}.${ROOT} h2{font-size:30px}.${ROOT}__case-file{grid-template-columns:1fr}.${ROOT}__outcome-main b{font-size:68px}.${ROOT}__term-core{padding:26px 22px}.${ROOT}__specimen-paper{padding:24px}.${ROOT}__result-row{grid-template-columns:1fr;gap:10px}}
      `}</style>

      <section className={`${ROOT}__masthead`}>
        <div className={`${ROOT}__shell ${ROOT}__masthead-grid`}>
          <div>
            <p className={`${ROOT}__eyebrow`}>Customer Story · Medical Device</p>
            <h1>24-Language IFU Localization for a Class III Cardiac Device</h1>
            <p className={`${ROOT}__deck`}>How a U.S.-based medical device manufacturer shortened its multilingual QA cycle by 30% and completed notified-body review without translation-related revisions while preparing a Class III implantable cardiac device for European market entry.</p>
            <div className={`${ROOT}__story-kicker`}>
              <strong>30%</strong>
              <span>shorter client QA cycle through terminology harmonization, independent professional review, multilingual DTP, and final-context QA.</span>
            </div>
          </div>
          <CaseFileArt />
        </div>
      </section>

      <section className={`${ROOT}__outcome`} aria-labelledby="outcome-heading">
        <div className={`${ROOT}__shell`}>
          <p className={`${ROOT}__eyebrow`}>Headline Results</p>
          <div className={`${ROOT}__outcome-grid`}>
            <div className={`${ROOT}__outcome-main`}>
              <b>30%</b>
              <strong id="outcome-heading">Shorter Client QA Cycle</strong>
              <p>By resolving terminology earlier and validating language inside final IFU layouts, the program reduced downstream review effort rather than pushing correction to the client’s regulatory team.</p>
            </div>
            <div className={`${ROOT}__outcome-secondary`}><b>0</b><strong>Translation-Related Revisions</strong><span>During notified-body review</span></div>
            <div className={`${ROOT}__outcome-secondary`}><b>24</b><strong>Localized IFUs</strong><span>Delivered within the planned regulatory schedule</span></div>
          </div>
        </div>
      </section>

      <section className={`${ROOT}__story`} id="the-mandate">
        <div className={`${ROOT}__shell ${ROOT}__story-shell`}>
          <aside className={`${ROOT}__case-file`} aria-label="Case file">
            <div className={`${ROOT}__case-file-title`}>Case File</div>
            {caseFacts.map(([label, value]) => <div className={`${ROOT}__fact`} key={label}><small>{label}</small><span>{value}</span></div>)}
          </aside>
          <article className={`${ROOT}__story-content`}>
            <div className={`${ROOT}__story-number`}>01 · The mandate</div>
            <h2>A High-Risk Device. A Fixed European Timeline.</h2>
            <p>For a Class III medical device, the IFU is not ancillary marketing content. It carries technical and safety information that intended users rely on to understand appropriate device use, warnings, precautions, contraindications, and procedures.</p>
            <p>The client, a U.S.-based MedTech manufacturer specializing in implantable cardiac devices, was preparing a new device for European market entry. Its English IFU needed to become a coordinated 24-language document set supporting planned markets and applicable MDR and national language requirements.</p>
            <p>The assignment was therefore much larger than translating one document 24 times. Sesen had to help the client create a controlled multilingual content system in which technical meaning, safety language, terminology, document structure, and final presentation stayed aligned through a time-sensitive regulatory program.</p>

            <div className={`${ROOT}__risk`}>
              {riskRows.map(({ no, title, text }) => (
                <div className={`${ROOT}__risk-row`} key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className={`${ROOT}__term-section`} id="terminology">
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__term-head`}>
            <div><p className={`${ROOT}__eyebrow ${ROOT}__eyebrow--light`}>02 · The turning point</p><h2>One Device Vocabulary Before 24 Translations</h2></div>
            <p>Instead of allowing each language to inherit every inconsistency in the existing content estate, Sesen treated terminology as an upstream control. Legacy IFUs, product language, client-approved terms, and safety terminology were reconciled into a shared foundation before variation could multiply.</p>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className={`${ROOT}__intervention`} id="the-intervention">
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__intervention-intro`}>
            <div><p className={`${ROOT}__eyebrow`}>03 · The intervention</p><h2>One Controlled Workflow From Source IFU to Submission-Ready Files</h2></div>
            <p>Sesen connected terminology preparation, specialist translation, independent linguistic review, multilingual desktop publishing, and final-context QA into one controlled production sequence. The goal was to catch problems where they originated rather than asking the client to discover them at the end.</p>
          </div>
          <div className={`${ROOT}__workflow`}>
            {workflow.map(([title, text]) => <div className={`${ROOT}__workflow-row`} key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className={`${ROOT}__specimen-section`} id="final-context-qa">
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__specimen-head`}>
            <p className={`${ROOT}__eyebrow`}>Where Quality Becomes Visible</p>
            <h2>Quality Checked in the Final IFU, Not Just the Translation File</h2>
            <p>A linguistically correct sentence can still fail inside a finished medical-device document. Text expansion can change pagination, a warning can wrap differently, a table can become crowded, or a cross-reference can become disconnected from the information it identifies. Final-context QA evaluates the communication asset the reviewer will actually see.</p>
          </div>
          <IFUSpecimen />
        </div>
      </section>

      <section className={`${ROOT}__human-tech`}>
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__human-tech-head`}>
            <p className={`${ROOT}__eyebrow`}>The Quality Model</p>
            <h2>Professional Judgment Stayed in Control</h2>
            <p>Technology strengthened the review process by surfacing patterns and potential inconsistencies, while specialist linguists remained responsible for interpreting context and making the linguistic decisions.</p>
          </div>
          <div className={`${ROOT}__human-tech-grid`}>
            <div className={`${ROOT}__human-tech-col`}>
              <h3>Expert decisions</h3>
              <p>Specialist medical-device translators and independent professional reviewers assessed meaning, terminology, readability, and higher-risk content in context.</p>
              <div className={`${ROOT}__human-tech-list`}>
                {["Medical-device and life-sciences expertise", "Independent bilingual review", "Context-sensitive terminology decisions", "Focused attention to warnings, precautions, numbers, and procedural content"].map(x => <span key={x}><Check />{x}</span>)}
              </div>
            </div>
            <div className={`${ROOT}__human-tech-divider`} aria-hidden="true" />
            <div className={`${ROOT}__human-tech-col`}>
              <h3>Automated quality signals</h3>
              <p>AI-assisted and automated QA helped surface potential terminology, numerical, completeness, and structural inconsistencies for professional evaluation.</p>
              <div className={`${ROOT}__human-tech-list`}>
                {["Terminology consistency checks", "Numbers, units, and structured-content comparison", "Potential missing or duplicated content", "Cross-file visibility across a 24-language program"].map(x => <span key={x}><Check />{x}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${ROOT}__results`} id="results">
        <div className={`${ROOT}__shell ${ROOT}__results-grid`}>
          <div className={`${ROOT}__results-copy`}>
            <p className={`${ROOT}__eyebrow ${ROOT}__eyebrow--light`}>04 · The outcome</p>
            <h2>Less Downstream Review. A Submission-Ready Multilingual IFU Set.</h2>
            <p>The multilingual program reached its planned delivery point with translation, review, formatting, and final-context validation coordinated across all 24 languages. By resolving recurring issues upstream, Sesen reduced the burden transferred to the client’s own quality and regulatory teams.</p>
            <p>The final IFU package completed notified-body review without translation-related revisions and supported the manufacturer’s targeted European submission schedule.</p>
          </div>
          <div className={`${ROOT}__results-metrics`}>
            {[
              ["30%", "Shorter client QA cycle", "Less downstream review effort after terminology and final-context controls."],
              ["24", "Languages delivered", "One coordinated multilingual program rather than independent document streams."],
              ["0", "Translation-related revisions", "During notified-body review of the multilingual IFU package."],
              ["On time", "Regulatory timeline maintained", "Files delivered in support of the planned European submission milestone."],
            ].map(([value, title, text]) => <div className={`${ROOT}__result-row`} key={title}><b>{value}</b><div><strong>{title}</strong><span>{text}</span></div></div>)}
          </div>
        </div>
      </section>

      <section className={`${ROOT}__quote`}>
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__quote-wrap`}>
            <blockquote>“Sesen’s localization team demonstrated deep regulatory knowledge and exceptional linguistic precision. The structured workflow, proactive communication, and in-context quality checks gave our regulatory team full confidence in the submission package.”</blockquote>
            <cite><strong>Regulatory Affairs Manager</strong><br />U.S. Medical Device Manufacturer</cite>
          </div>
        </div>
      </section>

      <section className={`${ROOT}__meaning`}>
        <div className={`${ROOT}__shell ${ROOT}__meaning-grid`}>
          <div><p className={`${ROOT}__eyebrow`}>The Lasting Value</p><h2>A Stronger Foundation for Future IFU Updates</h2></div>
          <div className={`${ROOT}__meaning-copy`}>
            <p>The immediate result was a submission-ready 24-language IFU set. The longer-term value was a more controlled multilingual foundation for the device program.</p>
            <p>Terminology decisions, reviewed language, and validated multilingual files can be carried forward as the IFU evolves, helping future revisions begin from aligned content rather than recreating the same decisions release after release.</p>
            <div className={`${ROOT}__meaning-points`}>
              {["Approved terminology can carry forward into future IFU and labeling revisions.", "Reviewer decisions become reusable project knowledge rather than one-time corrections.", "Validated multilingual content provides a stronger baseline when source text changes.", "Future releases can focus review attention on what changed instead of repeatedly rechecking what did not."].map(x => <div className={`${ROOT}__meaning-point`} key={x}><Check /><span>{x}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className={`${ROOT}__related`}>
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__related-head`}><h2>Related Medical Device Expertise</h2><p>Explore the Sesen capabilities most closely connected to this engagement.</p></div>
          <div className={`${ROOT}__related-list`}>
            {related.map(([title, desc, href]) => (
              <div className={`${ROOT}__related-item`} key={title}>
                <a className={`${ROOT}__related-title-link`} href={href} aria-label={`Explore ${title}`}><strong>{title}</strong><Arrow /></a>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${ROOT}__cta`}>
        <div className={`${ROOT}__shell`}>
          <div className={`${ROOT}__cta-box`}>
            <div><h2>Planning a Multilingual IFU or Medical Device Program?</h2><p>Talk with Sesen about terminology harmonization, regulated medical-device translation, multilingual DTP, final-context QA, or an upcoming international submission.</p></div>
            <div className={`${ROOT}__cta-actions`}><Button href={links.contactSales}>Discuss Your Project</Button><Button href={links.quote} secondary>Request a Quote</Button></div>
          </div>
        </div>
      </section>
    </main>
  );
}
