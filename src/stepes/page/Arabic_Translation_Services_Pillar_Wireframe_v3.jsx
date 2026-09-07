import React from "react";

const URLS = {
  contactSales: "https://www.stepes.com/contact-sales/",
  contact: "https://www.stepes.com/contact-us/",
  languages: "https://www.stepes.com/translation-languages/",
  translation: "https://www.stepes.com/translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  certified: "https://www.stepes.com/certified-translation-services/",
  website: "https://www.stepes.com/website-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  app: "https://www.stepes.com/app-localization-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  tm: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  security: "https://www.stepes.com/security/",
};

function Icon({ name = "document", size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };
  const paths = {
    document: <><path d="M7 3.5h7l3 3V20H7z"/><path d="M14 3.5v3h3"/><path d="M9.5 11h5"/><path d="M9.5 14.5h5"/></>,
    globe: <><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5S14.4 18.1 12 20.5"/><path d="M12 3.5C9.6 5.9 8.4 8.7 8.4 12s1.2 6.1 3.6 8.5"/></>,
    code: <><path d="m9 8-4 4 4 4"/><path d="m15 8 4 4-4 4"/><path d="m13 6-2 12"/></>,
    shield: <><path d="M12 3.5 19 6v5.2c0 4.2-2.6 7.5-7 9.3-4.4-1.8-7-5.1-7-9.3V6z"/><path d="m8.8 12 2 2 4.4-4.5"/></>,
    heart: <><path d="M12 20s-7-4.3-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.7-7 10-7 10Z"/><path d="M8.5 12h2l1-2.2 1.4 4.4 1-2.2h1.6"/></>,
    energy: <><path d="m13.5 2-7 11h5l-1 9 7-12h-5z"/></>,
    plane: <><path d="m3.5 13 17-7-6 13-3.2-5.2z"/><path d="m11.3 13.8 3.4-3.3"/></>,
    building: <><path d="M5 20V7l7-3 7 3v13"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/></>,
    bank: <><path d="m3 9 9-5 9 5"/><path d="M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 20h16"/></>,
    cart: <><path d="M4 5h2l2 10h9l2-6H7"/><circle cx="10" cy="19" r="1"/><circle cx="17" cy="19" r="1"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16.5 9"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    users: <><circle cx="9" cy="8.5" r="3"/><path d="M3.5 20c.4-4.1 2.3-6.2 5.5-6.2s5.1 2.1 5.5 6.2"/><path d="M15 6.2a2.5 2.5 0 0 1 0 4.8"/><path d="M16.2 13.8c2.7.4 4 2.5 4.3 5.2"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
    mic: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v4M9 21h6"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };
  return <svg {...common}>{paths[name] || paths.document}</svg>;
}

const serviceItems = [
  ["document", "Arabic Document Translation", "Reports, policies, presentations, manuals, correspondence, contracts, forms, specifications, procedures, training materials, product documentation, and other corporate content."],
  ["document", "Arabic Technical Translation", "Engineering documentation, operating procedures, specifications, safety content, manufacturing materials, equipment manuals, maintenance instructions, and technical drawings."],
  ["shield", "Arabic Legal & Regulatory Translation", "Agreements, policies, compliance documentation, corporate records, regulatory materials, filings, notices, certificates, procurement content, and legal communications."],
  ["globe", "Arabic Marketing & Transcreation", "Campaigns, brochures, product messaging, presentations, advertising, social content, corporate communications, and brand materials adapted for Arabic-speaking audiences."],
  ["globe", "Arabic Website & Ecommerce Localization", "Page copy, navigation, landing pages, product catalogs, forms, metadata, images containing text, help content, CMS updates, and ecommerce experiences."],
  ["code", "Arabic Software & App Localization", "UI strings, SaaS platforms, web and mobile applications, notifications, help content, software documentation, placeholders, variables, and RTL behavior."],
  ["mic", "Arabic Multimedia & Voice Localization", "Subtitles, captions, scripts, voiceover, training videos, product demonstrations, eLearning, and multimedia using MSA or an appropriate spoken variety."],
  ["document", "Certified Arabic Translation", "Official and business documents requiring formal translation certification, with service scope aligned to the receiving institution or jurisdiction."],
];

const industries = [
  ["heart", "Healthcare & Life Sciences", "Medical devices, pharmaceuticals, diagnostics, clinical content, patient communications, IFUs, labeling, healthcare software, regulatory and quality documentation."],
  ["energy", "Energy & Infrastructure", "Oil and gas, renewables, utilities, engineering, construction, operating procedures, safety materials, specifications, training, tender and procurement content."],
  ["plane", "Defense & Aerospace", "Technical manuals, aerospace systems, engineering content, maintenance documentation, training, procurement materials, and operational communications."],
  ["building", "Government & Public Sector", "Public information, policies, programs, digital government services, forms, training, public notices, procurement content, websites, and community communications."],
  ["bank", "Banking, Financial Services & Fintech", "Financial reports, banking products, digital interfaces, insurance, investment content, disclosures, policies, fintech applications, and corporate communications."],
  ["code", "Technology, Software & Cybersecurity", "SaaS, cloud products, cybersecurity platforms, AI applications, mobile products, documentation, knowledge bases, support content, onboarding, and product updates."],
  ["cart", "Retail & Ecommerce", "Product descriptions, catalogs, marketplaces, mobile commerce, marketing, promotions, checkout experiences, notifications, customer service, and product information."],
];

const related = [
  ["Medical Translation Services", URLS.medical],
  ["Technical Translation Services", URLS.technical],
  ["Financial Translation Services", URLS.financial],
  ["Legal Translation Services", URLS.legal],
  ["Certified Translation Services", URLS.certified],
  ["Website Translation Services", URLS.website],
  ["Software Localization Services", URLS.software],
  ["App Localization Services", URLS.app],
  ["AI + Human Translation Workflow", URLS.aiHuman],
  ["Translation Memory", URLS.tm],
  ["Terminology Management", URLS.terminology],
  ["Translation Quality Assurance", URLS.qa],
];

const faqs = [
  ["What is the difference between Modern Standard Arabic and regional Arabic?", "Modern Standard Arabic is the standardized form widely used for formal written communication across Arabic-speaking countries. Regional Arabic reflects language usage associated with particular countries or dialect areas. MSA is often the most efficient choice for formal documents and multi-market corporate content, while consumer marketing, spoken content, and highly localized experiences may benefit from country-specific or regional adaptation."],
  ["Should my company use Modern Standard Arabic or country-specific Arabic?", "It depends on the audience and content. MSA is often appropriate for formal business, technical, healthcare, regulatory, educational, and cross-market content. Country-specific localization may be preferable for marketing, ecommerce, customer experiences, digital products, local campaigns, or content influenced by market-specific terminology and conventions."],
  ["Can one Arabic translation be used across the Middle East?", "Often, yes—particularly when the content uses Modern Standard Arabic and is formal or informational. Marketing campaigns, consumer applications, ecommerce content, spoken media, and local regulatory materials may need additional adaptation. A scalable strategy often uses one MSA foundation with targeted localization for priority markets."],
  ["Does Stepes provide Arabic translation for Saudi Arabia and the UAE?", "Yes. Stepes supports Arabic translation and localization for Saudi Arabia and the United Arab Emirates, including ar-SA and ar-AE digital locale requirements where applicable. Programs can use shared MSA, country-specific adaptation, or a combination."],
  ["Do you translate both English to Arabic and Arabic to English?", "Yes. Stepes provides professional English-to-Arabic and Arabic-to-English translation for business, technical, medical, legal, financial, digital, marketing, government, and other specialized content."],
  ["How does right-to-left localization affect websites and software?", "Arabic interfaces typically use right-to-left text flow, while numbers, URLs, product names, code, and model numbers may remain left-to-right. RTL localization can therefore affect page structure, navigation, alignment, menus, forms, icon direction, typography, bidirectional text, and responsive layouts."],
  ["Can Stepes localize Arabic mobile apps and software?", "Yes. We localize SaaS products, web applications, enterprise software, desktop products, iOS apps, Android apps, help systems, notifications, and associated documentation. Services can include translation, terminology management, RTL localization, automated QA, linguistic review, and in-context testing."],
  ["Do you provide certified Arabic translations?", "Yes. Stepes provides certified Arabic translations for official and business documents where formal certification is required. Acceptance requirements can differ by organization and jurisdiction, so the intended use should be identified before the workflow is finalized."],
  ["Can AI be used for professional Arabic translation?", "Yes, when it is used within an appropriate workflow. AI can accelerate large-volume Arabic translation, while the level of professional review should reflect content type, target market, context, confidentiality requirements, and business risk."],
  ["How does Stepes maintain consistent Arabic terminology?", "Stepes uses customer-approved terminology resources, translation memory, style guidance, automated terminology checks, and professional review. Approved language can be reused across future projects so product, feature, component, and specialized terminology remains consistent."],
  ["Does Arabic content need special desktop publishing?", "Often, yes. Arabic is a right-to-left language and may require changes to page composition, tables, text alignment, typography, graphics, and mixed Arabic-English content. Stepes supports Arabic desktop publishing in InDesign, Illustrator, PowerPoint, Word, and PDF workflows."],
  ["Can you support several Arabic countries within one translation program?", "Yes. Stepes can establish a common Modern Standard Arabic foundation and maintain country-specific terminology, style preferences, digital locales, or local adaptations where needed, allowing enterprises to scale without unnecessarily duplicating every translation."],
];

function SectionHead({ eyebrow, title, intro, centered = true, dark = false, mobileLeft = false, id }) {
  return (
    <div className={`section-head ${centered ? "centered" : ""} ${mobileLeft ? "mobile-left" : ""}`} id={id}>
      {eyebrow && <div className={`eyebrow ${dark ? "darkEyebrow" : ""}`}>{eyebrow}</div>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function ArrowLink({ href, children, inverse = false }) {
  return <a className={`arrow-link ${inverse ? "inverse" : ""}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

export default function ArabicTranslationServicesPillarPage() {
  return (
    <main className="arabic-page">
      <style>{`
        :root{--magenta:#C11D63;--magenta-dark:#9F1D55;--burgundy:#7A1542;--blush:#FDF2F7;--pink-light:#F2A7C6;--ink:#17171B;--muted:#5F6069;--line:#E7E7EB;--soft:#F6F6F8;--dark:#19171B;--white:#fff;}
        *{box-sizing:border-box} html{scroll-behavior:smooth}.arabic-page{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;line-height:1.65;overflow-x:hidden}.arabic-page a{text-decoration:none}.shell{width:min(1280px,100%);margin:0 auto;padding-left:56px;padding-right:56px}.section{padding:96px 0}.section.dense{padding:80px 0}.soft{background:var(--soft)}.blush{background:var(--blush)}.dark{background:var(--dark);color:white}.eyebrow{font-size:11px!important;line-height:1.35!important;letter-spacing:.13em;text-transform:uppercase;font-weight:600!important;color:var(--magenta)!important;margin:0 0 14px}.darkEyebrow{color:var(--pink-light)!important}h1,h2,h3{margin:0;color:inherit;font-weight:600;letter-spacing:-.025em}h1{font-size:48px;line-height:1.08;max-width:720px}h2{font-size:36px;line-height:1.14}h3{font-size:24px;line-height:1.28}.hero-copy>p,.lead{font-size:18px;line-height:1.7;color:var(--muted);margin:24px 0 0;max-width:700px}.dark .lead,.dark .section-intro,.dark .body-copy{color:#D7D4DA}.body-copy,.body-copy p,.copy,.copy p,.item-copy,.market-copy,.faq-answer{font-size:16px;line-height:1.72}.section-head{max-width:820px;margin:0 0 48px}.section-head.centered{margin-left:auto;margin-right:auto;text-align:center}.section-intro{font-size:18px;line-height:1.68;color:var(--muted);margin:18px auto 0;max-width:800px}.section-head:not(.centered) .section-intro{margin-left:0}.hero{padding:104px 0 90px;background:#fff}.hero-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(400px,.95fr);gap:72px;align-items:center}.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 23px;border-radius:999px;font-size:16px;font-weight:600;transition:.2s ease;border:1px solid transparent}.btn.primary,.btn.primary:visited,.btn.primary:hover,.btn.primary:active,.btn.primary:focus,.btn.primary:focus-visible{background:var(--magenta);color:#fff!important}.btn.primary *,.btn.primary:visited *,.btn.primary:hover *,.btn.primary:active *,.btn.primary:focus *,.btn.primary:focus-visible *{color:#fff!important;stroke:#fff!important;fill:none}.btn.primary:hover{background:var(--magenta-dark);transform:translateY(-1px)}.btn.secondary{background:#fff;color:var(--ink);border-color:#CFCFD6}.btn.secondary:hover{border-color:#AFAFB8;transform:translateY(-1px)}.hero-note{margin-top:23px;font-size:16px;color:#777881}.hero-art{position:relative;min-height:440px;display:flex;align-items:center;justify-content:center}.art-board{position:relative;width:100%;max-width:520px;height:410px;border:1px solid #E2E2E7;border-radius:30px;background:linear-gradient(145deg,#fff 35%,#FAF4F7 100%);box-shadow:0 22px 55px rgba(18,18,22,.08);overflow:hidden}.art-orbit{position:absolute;width:330px;height:330px;border:1px solid #D5D5DB;border-radius:50%;right:-115px;top:-110px}.art-orbit.two{width:230px;height:230px;right:-65px;top:-55px;border-color:#E8C3D4}.doc-panel{position:absolute;left:36px;top:48px;width:190px;height:245px;border:1px solid #CBCBD3;border-radius:22px;background:#fff;padding:24px;box-shadow:0 14px 35px rgba(31,31,36,.07)}.doc-title{height:9px;width:95px;background:#33333A;border-radius:8px}.doc-line{height:6px;background:#C8C8CF;border-radius:5px;margin-top:15px}.doc-line.short{width:68%}.doc-line.magenta{background:#D66A99;width:74%}.arrow-badge{position:absolute;left:211px;top:155px;width:74px;height:74px;border-radius:50%;background:var(--magenta);display:grid;place-items:center;color:white;box-shadow:0 10px 28px rgba(193,29,99,.25)}.rtl-panel{position:absolute;right:34px;bottom:38px;width:226px;height:258px;border-radius:24px;background:#222126;color:white;padding:22px;box-shadow:0 18px 40px rgba(24,22,27,.18)}.rtl-top{display:flex;justify-content:space-between;align-items:center;font-size:14px;color:#BCBAC1;margin-bottom:24px}.rtl-arabic{font-family:Arial,"Tahoma",sans-serif;font-size:25px;font-weight:600;line-height:1.45;text-align:right;direction:rtl}.rtl-lines{margin-top:18px;display:grid;gap:10px}.rtl-line{height:6px;border-radius:5px;background:#6B6870;margin-left:auto}.rtl-line.pink{background:#D75C91;width:78%}.rtl-line.w1{width:100%}.rtl-line.w2{width:82%}.rtl-line.w3{width:63%}.rtl-tags{display:flex;gap:7px;justify-content:flex-end;margin-top:22px}.rtl-tag{font-size:14px;padding:5px 8px;border-radius:999px;border:1px solid #4C4A52;color:#D7D4DA}.trust{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;padding:27px 0}.trust-item{display:flex;align-items:flex-start;gap:12px}.trust-icon{color:var(--magenta);padding-top:2px}.trust-item strong{font-size:16px;font-weight:600;display:block}.trust-item span{display:block;color:#74757D;font-size:16px;line-height:1.5;margin-top:3px}.overview-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:90px;align-items:start}.overview-grid .section-head{position:sticky;top:36px}.body-copy p{margin:0 0 20px;color:#44454D}.body-copy p:last-child{margin-bottom:0}.highlight-line{border-left:3px solid var(--magenta);padding:4px 0 4px 22px;font-size:18px;line-height:1.65;margin-top:28px;color:#2E2E33}.strategy-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid #DCDCE2;border-bottom:1px solid #DCDCE2}.strategy-item{padding:34px 34px 36px 0}.strategy-item+ .strategy-item{border-left:1px solid #DCDCE2;padding-left:34px}.strategy-item h3{margin-bottom:14px}.strategy-item p{font-size:16px;color:#56575F;margin:0}.plain-list{list-style:none;margin:18px 0 0;padding:0;display:grid;gap:10px}.plain-list li{font-size:16px;color:#44454D;display:flex;align-items:flex-start;gap:9px}.plain-list li:before{content:"";width:6px;height:6px;border-radius:50%;background:var(--magenta);margin-top:.66em;flex:0 0 auto}.decision-table{margin-top:46px;border:1px solid #DCDCE2;border-radius:24px;overflow:hidden;background:#fff}.decision-row{display:grid;grid-template-columns:1fr 1.1fr;border-top:1px solid #E5E5E9}.decision-row:first-child{border-top:0;background:#F7F7F9}.decision-row>div{padding:17px 22px;font-size:16px}.decision-row>div:first-child{font-weight:600}.direction-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:30px;overflow:hidden}.direction-panel{padding:42px}.direction-panel+ .direction-panel{border-left:1px solid var(--line)}.direction-panel h3{margin-bottom:16px}.direction-panel p{font-size:16px;color:#51525A;margin:0 0 18px}.direction-panel ul{columns:2;column-gap:30px}.services-grid{display:grid;grid-template-columns:1fr 1fr;column-gap:70px}.service-row{display:grid;grid-template-columns:50px 1fr;gap:18px;padding:27px 0;border-top:1px solid var(--line)}.service-row:nth-child(-n+2){border-top:0}.icon-box{width:44px;height:44px;border-radius:14px;background:#F7EEF3;color:var(--magenta);display:grid;place-items:center}.service-row h3{font-size:21px;margin-bottom:7px}.service-row p{font-size:16px;color:#5B5C64;margin:0}.industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid #3C3940}.industry-item{padding:32px 30px 34px 0;border-bottom:1px solid #3C3940}.industry-item:not(:nth-child(3n+1)){border-left:1px solid #3C3940;padding-left:30px}.industry-item .industry-icon{color:var(--pink-light);margin-bottom:18px}.industry-item h3{font-size:21px;margin-bottom:10px}.industry-item p{font-size:16px;color:#CBC7CF;margin:0}.industry-item:last-child{grid-column:1/-1;display:grid;grid-template-columns:44px minmax(210px,.42fr) 1fr;gap:18px 24px;align-items:start;padding-right:0;border-left:0!important;padding-left:0!important}.industry-item:last-child .industry-icon{margin:2px 0 0}.industry-item:last-child h3{margin:0}.industry-item:last-child p{margin:0}.rtl-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:72px;align-items:start}.rtl-mock{border:1px solid #DADAE0;border-radius:28px;padding:22px;background:#FAFAFB;box-shadow:0 16px 45px rgba(27,26,31,.06);position:sticky;top:32px}.browser-bar{display:flex;gap:6px;align-items:center;border-bottom:1px solid #E0E0E5;padding:2px 2px 16px}.browser-dot{width:8px;height:8px;border-radius:50%;background:#C7C7CE}.browser-url{height:22px;flex:1;background:white;border:1px solid #E1E1E6;border-radius:8px;margin-left:8px}.browser-screen{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-top:20px}.screen-en,.screen-ar{border:1px solid #E0E0E5;border-radius:18px;background:white;padding:18px;min-height:270px}.screen-ar{direction:rtl;text-align:right}.screen-label{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--magenta);margin-bottom:14px}.screen-title{font-size:18px;font-weight:600;line-height:1.35}.screen-ar .screen-title{font-family:Arial,"Tahoma",sans-serif;font-size:22px}.screen-copy{font-size:16px;color:#767780;line-height:1.55;margin:10px 0 18px}.screen-ar .screen-copy{font-family:Arial,"Tahoma",sans-serif;font-size:16px}.screen-button{display:inline-flex;padding:7px 12px;background:var(--magenta);color:#fff;border-radius:999px;font-size:16px;font-weight:600}.mixed-line{display:flex;gap:8px;align-items:center;margin-top:20px;border-top:1px solid #E7E7EB;padding-top:14px;direction:ltr}.mixed-chip{padding:4px 7px;border:1px solid #DDDEE3;border-radius:7px;font-size:14px;color:#5B5C63}.rtl-topics{display:grid;grid-template-columns:1fr 1fr;gap:0 34px}.rtl-topic{padding:25px 0;border-top:1px solid var(--line)}.rtl-topic:nth-child(-n+2){border-top:0}.rtl-topic h3{font-size:20px;margin-bottom:8px}.rtl-topic p{font-size:16px;color:#575860;margin:0}.digital-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.digital-item{background:white;border:1px solid #E5D9DF;border-radius:26px;padding:30px}.digital-item h3{font-size:22px;margin:16px 0 10px}.digital-item p{font-size:16px;color:#5A5458;margin:0}.testing-band{margin-top:30px;background:#fff;border:1px solid #E5D9DF;border-radius:26px;padding:30px;display:grid;grid-template-columns:.7fr 1.3fr;gap:48px;align-items:start}.testing-band h3{font-size:24px}.testing-list{columns:2;column-gap:40px;margin:0;padding:0;list-style:none}.testing-list li{font-size:16px;padding:6px 0;color:#4D4A4D}.testing-list li:before{content:"✓";color:var(--magenta);font-weight:600;margin-right:9px}.seo-strip{display:grid;grid-template-columns:.82fr 1.18fr;gap:80px;align-items:center}.seo-points{display:grid;grid-template-columns:1fr 1fr;gap:13px 28px}.seo-point{display:flex;gap:10px;align-items:flex-start;font-size:16px;color:#4D4E55}.seo-point span:first-child{color:var(--magenta);font-weight:600}.workflow-modes{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #414047;border-bottom:1px solid #414047}.mode{padding:32px 28px 34px}.mode+ .mode{border-left:1px solid #414047}.mode .mode-label{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--pink-light);font-weight:600}.mode h3{font-size:20px;margin:10px 0}.mode p{font-size:16px;color:#CBC8CE;margin:0}.asset-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.asset-visual{border:1px solid #DFDFE4;border-radius:30px;background:#FAFAFB;padding:28px}.asset-pill{display:flex;align-items:center;justify-content:space-between;padding:16px 18px;border:1px solid #E2E2E6;border-radius:16px;background:#fff;margin-bottom:12px}.asset-pill:last-child{margin-bottom:0}.asset-pill strong{font-size:16px}.asset-pill span{font-size:16px;color:#797A81}.asset-flow{display:flex;align-items:center;justify-content:center;gap:10px;margin:20px 0;color:#94949B}.market-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line)}.market-item{padding:30px 28px 30px 0;border-bottom:1px solid var(--line)}.market-item:not(:nth-child(3n+1)){border-left:1px solid var(--line);padding-left:28px}.market-item h3{font-size:20px;margin-bottom:8px}.market-item p{font-size:16px;color:#5B5C64;margin:0}.market-program{margin-top:34px;border-radius:26px;background:var(--blush);padding:31px 34px;display:grid;grid-template-columns:.75fr 1.25fr;gap:45px;align-items:center}.market-program h3{font-size:23px}.market-program p{font-size:16px;color:#555159;margin:0}.program-formula{margin-top:14px;color:var(--magenta);font-size:16px;font-weight:600;overflow-wrap:anywhere}.us-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:0;border-top:1px solid var(--line)}.us-item{grid-column:span 2;padding:28px 26px;border-bottom:1px solid var(--line)}.us-item:nth-child(4),.us-item:nth-child(5){grid-column:span 3}.us-item:nth-child(2),.us-item:nth-child(3),.us-item:nth-child(5){border-left:1px solid var(--line)}.us-item h3{font-size:18px;margin-bottom:8px}.us-item p{font-size:16px;color:#5D5E66;margin:0}.process{display:grid;grid-template-columns:repeat(4,1fr);gap:40px 28px}.process-step{padding:30px 18px 0 0;position:relative;border-top:1px solid #DDDEE3}.process-step:before{content:"";position:absolute;top:-5px;left:0;width:9px;height:9px;border-radius:50%;background:var(--magenta)}.step-num{font-size:14px;letter-spacing:.08em;font-weight:600;color:var(--magenta);margin-bottom:10px}.process-step h3{font-size:18px;margin-bottom:8px}.process-step p{font-size:16px;color:#62636A;margin:0}.quality-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 64px}.quality-item{padding:28px 0;border-top:1px solid #3D3A41}.quality-item:nth-child(-n+2){border-top:0}.quality-item h3{font-size:21px;margin-bottom:9px}.quality-item p{font-size:16px;color:#CBC8CE;margin:0}.quality-item:last-child{grid-column:1/-1}.quality-item:last-child p{max-width:760px}.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0}.why-item{padding:28px 28px 30px 0;border-top:1px solid var(--line)}.why-item:nth-child(-n+3){border-top:0}.why-item:not(:nth-child(3n+1)){border-left:1px solid var(--line);padding-left:28px}.why-item .why-icon{color:var(--magenta);margin-bottom:15px}.why-item h3{font-size:20px;margin-bottom:8px}.why-item p{font-size:16px;color:#5A5B63;margin:0}.related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0 34px;border-top:1px solid var(--line)}.related-link{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:17px 0;border-bottom:1px solid var(--line);font-size:16px;font-weight:600;color:#2A2A2F}.related-link span{color:var(--magenta);transition:.2s}.related-link:hover span{transform:translateX(3px)}.faq-wrap{max-width:920px;margin:0 auto;border-top:1px solid var(--line)}details.faq{border-bottom:1px solid var(--line)}details.faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:28px;padding:23px 0;font-size:18px;font-weight:600;line-height:1.45}details.faq summary::-webkit-details-marker{display:none}.faq-plus{color:var(--magenta);font-size:24px;line-height:1;font-weight:400;transition:.2s}details[open] .faq-plus{transform:rotate(45deg)}.faq-answer{color:#55565E;max-width:820px;padding:0 48px 24px 0}.final-cta{padding:88px 0;background:var(--blush);color:var(--ink);border-top:1px solid #F0DCE5}.cta-inner{max-width:900px;margin:0 auto;text-align:center}.cta-inner h2{font-size:38px}.cta-inner p{font-size:18px;line-height:1.7;color:#5D555A;margin:20px auto 0;max-width:780px}.cta-actions{display:flex;gap:14px;justify-content:center;margin-top:30px}.final-cta .btn.secondary{background:#fff;border-color:#D9C7D0;color:var(--ink)}.final-cta .btn.secondary:hover{border-color:#BDA8B2}.arrow-link{display:inline-flex;gap:8px;align-items:center;color:var(--magenta);font-size:16px;font-weight:600;margin-top:18px}.arrow-link span{transition:.2s}.arrow-link:hover span{transform:translateX(3px)}.arrow-link.inverse{color:#fff}.btn:focus-visible,.arrow-link:focus-visible,.related-link:focus-visible,details.faq summary:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:4px;border-radius:8px}
        @media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr 430px;gap:44px}.industry-grid,.why-grid{grid-template-columns:1fr 1fr}.industry-item:not(:nth-child(3n+1)),.why-item:not(:nth-child(3n+1)){border-left:0;padding-left:0}.industry-item:nth-child(even),.why-item:nth-child(even){border-left:1px solid #3C3940;padding-left:28px}.why-item:nth-child(even){border-left-color:var(--line)}.why-item:nth-child(3){border-top:1px solid var(--line)}.market-grid{grid-template-columns:1fr 1fr}.market-item:not(:nth-child(3n+1)){border-left:0;padding-left:0}.market-item:nth-child(even){border-left:1px solid var(--line);padding-left:28px}.process{grid-template-columns:repeat(4,1fr);row-gap:38px}.us-grid{grid-template-columns:repeat(6,1fr)}.us-item{grid-column:span 2}.us-item:nth-child(4),.us-item:nth-child(5){grid-column:span 3}.us-item{border-left:0}.us-item:nth-child(2),.us-item:nth-child(3),.us-item:nth-child(5){border-left:1px solid var(--line)}}
        @media(max-width:900px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px!important}.hero{padding:88px 0 76px}.hero-grid{grid-template-columns:1fr;gap:50px}.hero-copy{text-align:center}.hero-copy h1,.hero-copy>p{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-note{text-align:center}.hero-art{min-height:390px}.art-board{max-width:500px;height:390px}.trust-grid{grid-template-columns:1fr 1fr}.overview-grid,.rtl-grid,.seo-strip,.asset-grid{grid-template-columns:1fr;gap:48px}.overview-grid .section-head,.rtl-mock{position:static}.section-head.centered,.overview-grid .section-head,.rtl-grid>.section-head,.seo-strip>.section-head{margin-left:auto;margin-right:auto;text-align:center}.section-head.centered.mobile-left{margin-left:0;margin-right:0;text-align:left}.section-head.centered.mobile-left .section-intro{margin-left:0;margin-right:0}.overview-grid .section-head .section-intro,.rtl-grid .section-head .section-intro,.seo-strip .section-head .section-intro{margin-left:auto}.strategy-grid{grid-template-columns:1fr}.strategy-item{padding:28px 0;border-bottom:1px solid #DCDCE2}.strategy-item+ .strategy-item{border-left:0;padding-left:0}.strategy-item:last-child{border-bottom:0}.direction-grid{grid-template-columns:1fr}.direction-panel+ .direction-panel{border-left:0;border-top:1px solid var(--line)}.services-grid{grid-template-columns:1fr}.service-row:nth-child(2){border-top:1px solid var(--line)}.industry-grid,.digital-grid,.why-grid{grid-template-columns:1fr 1fr}.workflow-modes{grid-template-columns:1fr 1fr}.mode:nth-child(3){border-left:0;border-top:1px solid #414047}.mode:nth-child(4){border-top:1px solid #414047}.testing-band{grid-template-columns:1fr}.market-program{grid-template-columns:1fr}.related-grid{grid-template-columns:1fr 1fr}.process{grid-template-columns:repeat(2,1fr)}.quality-grid{gap:0 34px}.us-grid{grid-template-columns:1fr 1fr}.us-item,.us-item:nth-child(4),.us-item:nth-child(5){grid-column:auto}.us-item{border-left:0}.us-item:nth-child(even){border-left:1px solid var(--line)}}
        @media(max-width:640px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.section.dense{padding:64px 0}.hero{padding:72px 0 64px}h1{font-size:38px}h2{font-size:30px}h3{font-size:20px!important}.hero-copy>p,.lead,.section-intro,.cta-inner p{font-size:17px}.hero-actions,.cta-actions{flex-direction:column}.hero-actions .btn,.cta-actions .btn{width:100%}.hero-art{min-height:340px}.art-board{height:335px;border-radius:24px}.doc-panel{left:18px;top:35px;width:160px;height:215px;padding:20px}.arrow-badge{left:144px;top:131px;width:58px;height:58px}.rtl-panel{right:18px;bottom:25px;width:185px;height:220px;padding:18px}.rtl-arabic{font-size:21px}.trust-grid{grid-template-columns:1fr;padding:22px 0;gap:20px}.section-head{margin-bottom:38px}.section-head.centered,.overview-grid .section-head,.rtl-grid>.section-head,.seo-strip>.section-head{text-align:center}.body-copy{text-align:left}.overview-grid,.rtl-grid,.seo-strip,.asset-grid{gap:36px}.decision-row{grid-template-columns:1fr}.decision-row>div+div{padding-top:0;color:#5E5F66}.direction-panel{padding:28px 22px}.direction-panel ul{columns:1}.services-grid{display:block}.service-row{grid-template-columns:44px 1fr;gap:14px}.industry-grid,.digital-grid,.rtl-topics,.why-grid,.market-grid,.workflow-modes,.related-grid,.quality-grid,.us-grid{grid-template-columns:1fr}.industry-item,.industry-item:nth-child(even),.why-item,.why-item:nth-child(even),.market-item,.market-item:nth-child(even){padding:26px 0;border-left:0!important}.industry-item:last-child{display:block;grid-column:auto}.industry-item:last-child .industry-icon{margin-bottom:18px}.industry-item:last-child h3{margin-bottom:10px}.industry-item+.industry-item,.why-item+.why-item,.market-item+.market-item{border-top:1px solid}.industry-item+.industry-item{border-top-color:#3C3940}.why-item+.why-item,.market-item+.market-item{border-top-color:var(--line)}.browser-screen{grid-template-columns:1fr}.rtl-mock{padding:16px}.screen-en,.screen-ar{min-height:220px}.testing-band{padding:24px}.testing-list{columns:1}.workflow-modes{border-bottom:0}.mode,.mode+ .mode,.mode:nth-child(3),.mode:nth-child(4){border-left:0;border-top:1px solid #414047;padding:26px 0}.mode:first-child{border-top:0}.asset-visual{padding:20px}.asset-pill{flex-direction:column;align-items:flex-start;gap:4px}.market-program{padding:26px 22px}.us-item,.us-item:nth-child(even),.us-item:nth-child(3),.us-item:nth-child(4),.us-item:nth-child(5){grid-column:auto;border-left:0;border-top:1px solid var(--line);padding:23px 0}.us-item:first-child{border-top:0}.process{grid-template-columns:1fr;row-gap:28px}.process-step{padding-right:0}.process-step{padding:0 0 28px 38px;border-left:1px solid #DDDEE3;border-top:0}.process-step:before{left:-5px;top:5px}.quality-item,.quality-item:nth-child(-n+2){border-top:1px solid #3D3A41;padding:25px 0}.quality-item:first-child{border-top:0}.related-link{min-height:52px}.faq-wrap{text-align:left}details.faq summary{font-size:17px;padding:21px 0}.faq-answer{padding-right:20px}.final-cta{padding:72px 0}.cta-inner h2{font-size:31px}}
        @media(max-width:360px){.art-board{height:315px}.doc-panel{width:145px;height:200px}.rtl-panel{width:170px;height:205px}.arrow-badge{left:127px;top:124px}.rtl-arabic{font-size:19px}}
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">ENTERPRISE ARABIC LOCALIZATION</div>
            <h1>Arabic Translation Services</h1>
            <p>Reach Arabic-speaking customers, employees, patients, partners, and markets with professional Arabic translation and localization built for global business.</p>
            <p>Stepes supports documents, websites, software, mobile apps, technical and regulated content, multimedia, and ongoing localization programs—from Modern Standard Arabic to market-specific Arabic.</p>
            <div className="hero-actions">
              <a className="btn primary" href={URLS.contactSales}>Request a Quote <Icon name="arrow" size={18}/></a>
              <a className="btn secondary" href={URLS.contact}>Talk to an Expert</a>
            </div>
            <div className="hero-note">English ↔ Arabic · Modern Standard Arabic · Regional Arabic · RTL localization</div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-board">
              <div className="art-orbit"></div><div className="art-orbit two"></div>
              <div className="doc-panel">
                <div className="doc-title"></div>
                <div className="doc-line"></div><div className="doc-line short"></div><div className="doc-line magenta"></div><div className="doc-line"></div><div className="doc-line short"></div>
              </div>
              <div className="arrow-badge"><Icon name="arrow" size={28}/></div>
              <div className="rtl-panel">
                <div className="rtl-top"><span>RTL</span><span>ar-SA</span></div>
                <div className="rtl-arabic" dir="rtl">تجربة عربية مصممة للسوق</div>
                <div className="rtl-lines"><div className="rtl-line w1"></div><div className="rtl-line w2"></div><div className="rtl-line pink"></div><div className="rtl-line w3"></div></div>
                <div className="rtl-tags"><span className="rtl-tag">QA</span><span className="rtl-tag">MSA</span><span className="rtl-tag">RTL</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" aria-label="Arabic translation service capabilities">
        <div className="shell trust-grid">
          {[
            ["users","Professional Arabic Linguists","Expertise matched to content, industry, and market."],
            ["globe","Modern Standard + Regional Arabic","One cross-market foundation or targeted local adaptation."],
            ["code","RTL Localization Expertise","Documents, websites, software, apps, and interfaces."],
            ["shield","Enterprise Quality & Technology","Translation memory, terminology, review, and QA."],
          ].map(([icon,title,desc])=><div className="trust-item" key={title}><div className="trust-icon"><Icon name={icon}/></div><div><strong>{title}</strong><span>{desc}</span></div></div>)}
        </div>
      </section>

      <section className="section" id="global-business">
        <div className="shell overview-grid">
          <SectionHead title="Professional Arabic Translation for Global Business" centered={false}/>
          <div className="body-copy">
            <p>Arabic connects organizations with major markets across the Middle East and North Africa while also serving significant Arabic-speaking communities throughout the United States and other international markets. Effective Arabic communication can support product launches, customer engagement, healthcare access, regulatory programs, software adoption, workforce communications, infrastructure projects, and digital growth.</p>
            <p>Yet professional Arabic translation requires more than selecting “Arabic” from a language list. A business may need Modern Standard Arabic that works across multiple countries, Arabic adapted for Saudi Arabia or the United Arab Emirates, conversational language for multimedia, or a specific spoken variety for voice and interpreting.</p>
            <p>Digital products introduce another layer: right-to-left layouts, bidirectional Arabic and English text, locale-specific formatting, typography, interface behavior, and functional testing.</p>
            <p>Stepes brings these linguistic and technical requirements together in one enterprise solution. Our Arabic linguists work with project managers, localization engineers, reviewers, and subject-matter specialists to produce content that is accurate in meaning, natural for the intended audience, consistent with approved terminology, and ready for its final format.</p>
            <div className="highlight-line">We support both <strong>English-to-Arabic and Arabic-to-English translation</strong>, as well as multilingual programs where Arabic is one of many target languages.</div>
          </div>
        </div>
      </section>

      <section className="section soft" id="arabic-strategy">
        <div className="shell">
          <SectionHead eyebrow="LANGUAGE STRATEGY" title="Modern Standard Arabic or Regional Arabic?" intro="The right Arabic strategy depends on what you are translating, where it will be used, who will read or hear it, and what action you want the audience to take. Not every project needs a separate Arabic version for every country."/>
          <div className="strategy-grid">
            <article className="strategy-item">
              <h3>Modern Standard Arabic</h3>
              <p>MSA is the standardized form widely used for formal written communication and cross-market content. It is often the best scalable choice when one Arabic version must serve audiences across several countries.</p>
              <ul className="plain-list"><li>Corporate and business communications</li><li>Technical and regulatory documentation</li><li>Healthcare and medical content</li><li>Training, policies, and public information</li><li>Cross-market websites and product content</li></ul>
            </article>
            <article className="strategy-item">
              <h3>Country-Specific Arabic Localization</h3>
              <p>Market adaptation can improve relevance where terminology, tone, consumer language, local conventions, regulatory references, or brand messaging differ.</p>
              <ul className="plain-list"><li>Market-preferred terminology and consumer language</li><li>Tone and level of formality</li><li>Dates, currencies, units, and local conventions</li><li>Regulatory references and product language</li><li>Brand messaging and calls to action</li></ul>
            </article>
            <article className="strategy-item">
              <h3>Spoken Arabic & Dialect Localization</h3>
              <p>Spoken Arabic varies more significantly across regions and becomes important when content is conversational rather than formal documentation.</p>
              <ul className="plain-list"><li>Voiceover and audio</li><li>Conversational AI and virtual assistants</li><li>Advertising and social media</li><li>Customer support and market research</li><li>Gulf, Egyptian, Levantine, and North African varieties</li></ul>
            </article>
          </div>
          <div className="decision-table" role="table" aria-label="Arabic localization decision guide">
            <div className="decision-row" role="row"><div role="columnheader">Requirement</div><div role="columnheader">Recommended Approach</div></div>
            <div className="decision-row" role="row"><div role="cell">Multi-market formal documentation</div><div role="cell">Modern Standard Arabic</div></div>
            <div className="decision-row" role="row"><div role="cell">Saudi consumer experience</div><div role="cell">Saudi-market Arabic adaptation</div></div>
            <div className="decision-row" role="row"><div role="cell">UAE digital marketing</div><div role="cell">UAE-market Arabic adaptation</div></div>
            <div className="decision-row" role="row"><div role="cell">Egyptian advertising</div><div role="cell">Egyptian localization</div></div>
            <div className="decision-row" role="row"><div role="cell">Gulf voiceover</div><div role="cell">Appropriate Gulf spoken variety</div></div>
          </div>
        </div>
      </section>

      <section className="section" id="translation-directions">
        <div className="shell">
          <SectionHead title="English-to-Arabic and Arabic-to-English Translation" intro="Professional translation in both directions for business, technical, digital, regulated, and specialized content."/>
          <div className="direction-grid">
            <article className="direction-panel">
              <div className="eyebrow">ENGLISH → ARABIC</div>
              <h3>Bring Products and Content to Arabic-Speaking Markets</h3>
              <p>Stepes translates English content into Arabic for product launches, customer experiences, regulated programs, and ongoing business operations.</p>
              <ul className="plain-list"><li>Technical documentation and product information</li><li>Websites, software, and mobile apps</li><li>Medical, regulatory, financial, and legal materials</li><li>Marketing, training, and customer communications</li></ul>
            </article>
            <article className="direction-panel">
              <div className="eyebrow">ARABIC → ENGLISH</div>
              <h3>Translate Arabic Content for International Use</h3>
              <p>Our Arabic-to-English services support international business, regulatory, legal, research, technical, and corporate requirements.</p>
              <ul className="plain-list"><li>Contracts and corporate records</li><li>Technical and regulatory documents</li><li>Research, reports, and financial materials</li><li>Government communications and certificates</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft" id="services">
        <div className="shell">
          <SectionHead title="Arabic Translation and Localization Services" intro="Different content types create different language, engineering, formatting, and review requirements. Stepes supports Arabic across documents, digital experiences, audiovisual content, and recurring enterprise programs."/>
          <div className="services-grid">
            {serviceItems.map(([icon,title,desc])=><article className="service-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
          <ArrowLink href={URLS.translation}>Explore Professional Translation Services</ArrowLink>
        </div>
      </section>

      <section className="section dark" id="industries">
        <div className="shell">
          <SectionHead title="Arabic Translation Expertise Across Industries" intro="A patient-facing medical document, industrial operating procedure, banking application, and consumer campaign require different terminology, quality controls, and review strategies." dark/>
          <div className="industry-grid">
            {industries.map(([icon,title,desc])=><article className="industry-item" key={title}><div className="industry-icon"><Icon name={icon} size={24}/></div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" id="rtl-localization">
        <div className="shell rtl-grid">
          <div>
            <SectionHead eyebrow="RTL ENGINEERING" title="Arabic RTL Localization That Works Beyond the Words" intro="Arabic localization is not complete when the translated sentences are accurate. Documents and digital interfaces must manage right-to-left Arabic alongside left-to-right numbers, URLs, model numbers, product names, code, and other embedded elements." centered={false}/>
            <div className="rtl-mock" role="img" aria-label="Example of English and Arabic right-to-left website localization">
              <div className="browser-bar"><span className="browser-dot"></span><span className="browser-dot"></span><span className="browser-dot"></span><div className="browser-url"></div></div>
              <div className="browser-screen">
                <div className="screen-en"><div className="screen-label">English</div><div className="screen-title">Connect your device to begin setup.</div><div className="screen-copy">Review your settings and continue when you are ready.</div><span className="screen-button">Continue</span></div>
                <div className="screen-ar" dir="rtl"><div className="screen-label">العربية</div><div className="screen-title">قم بتوصيل جهازك لبدء الإعداد.</div><div className="screen-copy">راجع إعداداتك وتابع عندما تكون جاهزًا.</div><span className="screen-button">متابعة</span><div className="mixed-line"><span className="mixed-chip">Model X24</span><span className="mixed-chip">stepes.com</span></div></div>
              </div>
            </div>
          </div>
          <div className="rtl-topics">
            {[
              ["Right-to-Left Layout","Reading order, navigation, page structure, menus, forms, tables, controls, icons, headers, footers, and appropriate interface mirroring."],
              ["Bidirectional Arabic + English","Product names, model numbers, SKUs, URLs, email addresses, phone numbers, measurements, acronyms, trademarks, and technical terminology."],
              ["Arabic Typography & Rendering","Arabic-compatible fonts, character shaping, line breaks, text expansion, punctuation, spacing, alignment, mixed-script text, and readability."],
              ["Numbers, Dates & Currencies","Locale-specific conventions for numbers, dates, calendars, currencies, and regional formatting rather than a single blanket rule."],
              ["Tables, Charts & Complex Documents","Financial and technical tables, forms, charts, diagrams, captions, footnotes, infographics, presentations, and multi-column layouts."],
              ["Arabic Desktop Publishing","Professional formatting in Adobe InDesign, Illustrator, Microsoft Word, PowerPoint, and PDF workflows for business-ready delivery."],
            ].map(([title,desc])=><article className="rtl-topic" key={title}><h3>{title}</h3><p>{desc}</p></article>)}
            <ArrowLink href={URLS.dtp}>Multilingual Desktop Publishing</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section blush" id="digital-localization">
        <div className="shell">
          <SectionHead title="Arabic Digital Experience Localization" intro="Arabic websites and applications should feel designed for Arabic users—not simply translated after the product was built."/>
          <div className="digital-grid">
            <article className="digital-item"><Icon name="globe" size={25}/><h3>Arabic Website Localization</h3><p>Localize visible copy, navigation, forms, metadata, CMS content, ecommerce, help content, structured content, imagery, locale formatting, and RTL layouts. Recurring workflows can support continuously updated websites.</p><ArrowLink href={URLS.website}>Website Translation Services</ArrowLink></article>
            <article className="digital-item"><Icon name="code" size={25}/><h3>Arabic Software Localization</h3><p>Support SaaS, cloud platforms, enterprise applications, dashboards, customer portals, help systems, notifications, error messages, and product documentation with consistent terminology and contextual review.</p><ArrowLink href={URLS.software}>Software Localization Services</ArrowLink></article>
            <article className="digital-item"><Icon name="layers" size={25}/><h3>Arabic Mobile App Localization</h3><p>Localize iOS, Android, and cross-platform applications across UI strings, onboarding, forms, in-app content, notifications, help, app-store descriptions, and product updates.</p><ArrowLink href={URLS.app}>App Localization Services</ArrowLink></article>
          </div>
          <div className="testing-band">
            <div><div className="eyebrow">IN-CONTEXT QA</div><h3>RTL Localization Testing</h3><p className="copy">Linguistically correct Arabic can still fail after implementation. In-context review helps identify visual, functional, and bidirectional issues before release.</p></div>
            <ul className="testing-list"><li>Incorrect RTL alignment</li><li>Reversed navigation behavior</li><li>Text truncation and overlap</li><li>Broken line wrapping</li><li>Mixed-direction errors</li><li>Incorrect icon orientation</li><li>Untranslated strings</li><li>Placeholder and variable issues</li><li>Font problems</li><li>Layout overflow and form behavior</li></ul>
          </div>
        </div>
      </section>

      <section className="section dense" id="arabic-seo">
        <div className="shell seo-strip">
          <SectionHead title="Arabic SEO and Digital Content Localization" intro="Translating English keywords directly into Arabic does not necessarily reproduce how Arabic-speaking customers search. Search localization should reflect natural Arabic, market terminology, page purpose, and local search intent." centered={false}/>
          <div className="seo-points">{["Arabic-language keyword research","Localized search intent","Page titles and metadata","Headings and page copy","Product and ecommerce terminology","Market-specific landing pages","Help and resource content","Natural Arabic—not forced English structures"].map(x=><div className="seo-point" key={x}><span>✓</span><span>{x}</span></div>)}</div>
        </div>
      </section>

      <section className="section dark" id="ai-human">
        <div className="shell">
          <SectionHead title="AI-Powered Arabic Translation with Professional Human Review" intro="The strongest enterprise workflow is not necessarily the one that automates the most translation. It is the one that applies the right combination of technology, professional expertise, quality control, and human review to each content type." dark/>
          <div className="workflow-modes">
            <article className="mode"><div className="mode-label">RAPID SCALE</div><h3>AI Translation + Quality Controls</h3><p>Useful for selected large-volume, informational, internal, temporary, or time-sensitive content where rapid multilingual availability is the primary objective.</p></article>
            <article className="mode"><div className="mode-label">BUSINESS CONTENT</div><h3>AI Translation + Human Review</h3><p>Professional Arabic linguists validate meaning, fluency, terminology, tone, market suitability, and context for customer-facing and business content.</p></article>
            <article className="mode"><div className="mode-label">NUANCE & SPECIALIZATION</div><h3>Professional Human Translation</h3><p>A human-led workflow for nuanced marketing, specialized communications, sensitive materials, creative content, and complex technical documentation.</p></article>
            <article className="mode"><div className="mode-label">HIGHER ASSURANCE</div><h3>Translation + Independent Review + QA</h3><p>Higher-impact, regulated, legal, safety-related, and mission-critical content can add independent revision, specialist review, automated QA, and in-context validation.</p></article>
          </div>
          <ArrowLink inverse href={URLS.aiHuman}>Explore the AI + Human Translation Workflow</ArrowLink>
        </div>
      </section>

      <section className="section" id="language-assets">
        <div className="shell asset-grid">
          <div>
            <SectionHead eyebrow="ENTERPRISE LANGUAGE ASSETS" title="Consistent Arabic Terminology Across Markets and Content" intro="As Arabic content expands across departments, products, markets, and channels, terminology and approved translation assets become essential to consistency." centered={false}/>
            <div className="body-copy"><p>Approved terminology can define product names, features, technical and medical terminology, regulatory language, brand language, preferred and prohibited translations, abbreviations, acronyms, and transliteration rules.</p><p>Translation memory stores previously translated and approved content so organizations can preserve language, reduce repetitive translation, accelerate recurring updates, and maintain continuity across product releases and document families.</p><p>A scalable program can maintain a shared MSA foundation while documenting selected Saudi, UAE, Egyptian, or other market preferences where differences matter.</p></div>
            <div style={{display:"flex",gap:24,flexWrap:"wrap"}}><ArrowLink href={URLS.tm}>Translation Memory</ArrowLink><ArrowLink href={URLS.terminology}>Terminology Management</ArrowLink></div>
          </div>
          <div className="asset-visual" role="img" aria-label="Arabic language asset management example">
            <div className="eyebrow">ARABIC LANGUAGE ASSET LAYER</div>
            <div className="asset-pill"><strong>Modern Standard Arabic</strong><span>Shared foundation</span></div>
            <div className="asset-flow">↓ terminology + approved translations ↓</div>
            <div className="asset-pill"><strong>Saudi Arabia</strong><span>Market preferences</span></div>
            <div className="asset-pill"><strong>United Arab Emirates</strong><span>Market preferences</span></div>
            <div className="asset-pill"><strong>Egypt</strong><span>Market preferences</span></div>
            <div className="asset-flow">↓ applied across content ↓</div>
            <div className="asset-pill"><strong>Web · Software · Documents · Support</strong><span>Consistent Arabic</span></div>
          </div>
        </div>
      </section>

      <section className="section soft" id="markets">
        <div className="shell">
          <SectionHead eyebrow="MARKET & LOCALE COVERAGE" title="Arabic Translation for Global Markets" intro="Stepes supports Arabic translation and localization across the Middle East, North Africa, the United States, and international markets, using MSA, market adaptation, or an appropriate spoken variety according to the project."/>
          <div className="market-grid">
            {[
              ["Saudi Arabia · ar-SA","Healthcare, technology, ecommerce, finance, energy, infrastructure, government, industrial, and consumer content with Saudi locale handling where required."],
              ["United Arab Emirates · ar-AE","Business, technology, ecommerce, finance, healthcare, government, and customer-facing content with UAE-market adaptation where appropriate."],
              ["Qatar, Kuwait, Bahrain & Oman","Corporate, energy, infrastructure, government, finance, technology, healthcare, and other business applications across Gulf markets."],
              ["Egypt · ar-EG","Formal Arabic plus Egyptian-market adaptation for consumer content, multimedia, marketing, and applications where local language adds value."],
              ["Jordan, Lebanon, Iraq & the Levant","Formal Arabic translation and market localization across the Levant, with appropriate regional spoken varieties when required."],
              ["Morocco, Algeria, Tunisia & North Africa","MSA for formal applications plus market-specific strategies where everyday spoken language and local context require additional adaptation."],
            ].map(([title,desc])=><article className="market-item" key={title}><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <div className="market-program"><div><div className="eyebrow">MULTI-MARKET ARABIC</div><h3>Scale Without Duplicating Every Translation</h3></div><div><p>For enterprises operating across several Arabic-speaking countries, Stepes can establish a shared language foundation while maintaining the market rules and terminology that genuinely need local control.</p><div className="program-formula">Shared Arabic foundation → controlled terminology → market-specific rules → targeted adaptation → reusable language assets</div></div></div>
          <ArrowLink href={URLS.languages}>Explore All Stepes Translation Languages</ArrowLink>
        </div>
      </section>

      <section className="section dense" id="us-audiences">
        <div className="shell">
          <SectionHead title="Arabic Translation for U.S. Audiences" intro="Stepes helps U.S. companies, healthcare organizations, government agencies, financial institutions, educators, and service providers communicate important information in Arabic."/>
          <div className="us-grid">
            {[
              ["Healthcare","Patient information, healthcare communications, instructions, education, forms, digital experiences, and medical materials."],
              ["Government & Public Information","Notices, public programs, digital content, forms, policies, community information, and public-facing communications."],
              ["Financial & Customer Services","Customer documents, service communications, digital banking, support content, policies, and online experiences."],
              ["Education & Training","Learning materials, institutional information, training, onboarding, and educational communications."],
              ["Business & Workforce","Product information, employee communications, training, policies, customer support, and other business content."],
            ].map(([title,desc])=><article className="us-item" key={title}><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section soft" id="workflow">
        <div className="shell">
          <SectionHead title="A Scalable Arabic Translation Workflow" mobileLeft intro="Arabic workflows can be configured around content type, target market, project risk, language assets, deadline, and approval requirements."/>
          <div className="process">
            {[
              ["01","Analyze","Review content, audience, countries, language direction, subject matter, file formats, intended use, and quality requirements."],
              ["02","Prepare","Apply translation memory, terminology, style guides, references, protected product names, and project instructions."],
              ["03","Translate","Route content to the appropriate AI-supported, professional human, or hybrid workflow with qualified Arabic linguists."],
              ["04","Review","Evaluate meaning, terminology, fluency, grammar, style, and contextual suitability, adding independent or specialist review where needed."],
              ["05","Quality Assurance","Check omissions, numbers, units, terminology, formatting, tags, placeholders, variables, protected text, and RTL presentation."],
              ["06","Validate","Review software, websites, documents, or other content in context and incorporate required stakeholder validation."],
              ["07","Deliver & Improve","Return approved corrections and terminology decisions to translation memory and other language assets for future projects."],
            ].map(([n,title,desc])=><article className="process-step" key={n}><div className="step-num">{n}</div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section dark" id="quality">
        <div className="shell">
          <SectionHead eyebrow="QUALITY & GOVERNANCE" title="Enterprise Quality for Arabic Translation" mobileLeft intro="Arabic translation quality depends on more than proofreading the final file. Stepes combines qualified resources, defined processes, reusable language assets, automated checks, structured review, and appropriate specialist oversight." dark/>
          <div className="quality-grid">
            <article className="quality-item"><h3>Qualified Arabic Linguists</h3><p>Translators and reviewers are selected according to source and target language, intended market, content type, subject matter, technical complexity, quality requirements, and project risk.</p></article>
            <article className="quality-item"><h3>ISO-Aligned Quality Processes</h3><p>Stepes supports professional translation through ISO 9001 quality management, ISO 17100 translation-service processes, and ISO 13485 requirements for applicable medical-device quality workflows.</p></article>
            <article className="quality-item"><h3>Automated QA + Linguistic Validation</h3><p>Automated checks identify objective issues such as omissions, terminology, numbers, tags, placeholders, and formatting, while human reviewers evaluate meaning, nuance, tone, market suitability, and context.</p></article>
            <article className="quality-item"><h3>Secure Enterprise Workflows</h3><p>Managed workflows, controlled access, defined roles, and enterprise processes support confidential product information, regulated documentation, unreleased software, corporate records, legal materials, and sensitive communications.</p></article>
            <article className="quality-item"><h3>Continuous Quality Improvement</h3><p>Reviewer feedback and approved changes can strengthen terminology, translation memory, project instructions, style guidance, and future workflows so quality improves across the program.</p></article>
          </div>
          <div style={{display:"flex",gap:24,flexWrap:"wrap"}}><ArrowLink inverse href={URLS.qa}>Translation Quality Assurance</ArrowLink><ArrowLink inverse href={URLS.security}>Enterprise Security</ArrowLink></div>
        </div>
      </section>

      <section className="section" id="why-stepes">
        <div className="shell">
          <SectionHead title="Why Global Companies Choose Stepes for Arabic Translation" intro="A complete Arabic program connects language strategy, subject expertise, RTL engineering, technology, quality, and reusable enterprise language assets."/>
          <div className="why-grid">
            {[
              ["globe","Arabic Language Strategy","Choose MSA for broad formal communication, market-specific adaptation where local relevance matters, and spoken varieties for conversational experiences."],
              ["users","Industry Expertise","Professional Arabic linguists are matched with subject matter across healthcare, finance, software, energy, engineering, government, ecommerce, and more."],
              ["code","RTL Localization Engineering","Address the complete Arabic experience across documents, websites, software, apps, tables, presentations, bidirectional content, and complex formats."],
              ["layers","AI + Human Workflows","Choose the level of automation, professional translation, review, and validation appropriate to each content stream and business risk."],
              ["document","Translation Memory & Terminology","Reuse approved translations and govern Arabic terminology across projects, products, departments, channels, and markets."],
              ["shield","Integrated Quality Assurance","Combine automated checks with professional linguistic judgment, independent revision, specialist review, and in-context validation where required."],
            ].map(([icon,title,desc])=><article className="why-item" key={title}><div className="why-icon"><Icon name={icon}/></div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section soft" id="related-services">
        <div className="shell">
          <SectionHead title="Explore Related Translation Services" intro="Extend your Arabic localization program with specialized Stepes services for different content types, workflows, and business requirements."/>
          <div className="related-grid">{related.map(([label,href])=><a key={label} className="related-link" href={href}>{label}<span aria-hidden="true">→</span></a>)}</div>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="shell">
          <SectionHead title="Arabic Translation Services FAQs" mobileLeft intro="Practical answers about Arabic language strategy, regional localization, RTL implementation, AI workflows, software localization, certification, and terminology."/>
          <div className="faq-wrap">{faqs.map(([q,a],i)=><details className="faq" key={q} open={i===0}><summary>{q}<span className="faq-plus" aria-hidden="true">+</span></summary><div className="faq-answer">{a}</div></details>)}</div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="shell cta-inner">
          <div className="eyebrow">START YOUR ARABIC PROJECT</div>
          <h2>Translate and Localize for Arabic-Speaking Markets with Confidence</h2>
          <p>Whether you need a business-critical document, a Saudi product launch, a UAE ecommerce experience, regulated healthcare content, a complete RTL application, or an ongoing localization program, Stepes can build the right Arabic workflow for your market, content, and business requirements.</p>
          <div className="cta-actions"><a className="btn primary" href={URLS.contactSales}>Request a Quote</a><a className="btn secondary" href={URLS.contact}>Talk to an Expert</a></div>
        </div>
      </section>
    </main>
  );
}
