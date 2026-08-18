import React from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushAccent: "#F2A7C6",
  ink: "#17171A",
  body: "#4C4C55",
  muted: "#6E6E77",
  line: "#E7E7EB",
  soft: "#F7F7F9",
  dark: "#18171C",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  sds: "https://www.stepes.com/sds-translation-services/",
  sop: "https://www.stepes.com/sop-translation-services/",
  packaging: "https://www.stepes.com/packaging-translation-services/",
  medicalDeviceLabeling: "https://www.stepes.com/medical-device-labeling-translation-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  aiHuman: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  languages: "https://www.stepes.com/translation-languages/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  chemical: "https://www.stepes.com/chemical-translation-services/",
  food: "https://www.stepes.com/food-beverage-translation-services/",
  pharma: "https://www.stepes.com/pharmaceutical-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  retail: "https://www.stepes.com/retail-ecommerce-translation-services/",
};

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.2 4.2L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndustryIcon({ type }) {
  const common = { stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const icons = {
    chemical: <><path d="M9 3h6M10 3v5l-4 7a4 4 0 0 0 3.5 6h5a4 4 0 0 0 3.5-6l-4-7V3" {...common}/><path d="M8.3 14h7.4" {...common}/></>,
    food: <><path d="M7 20V9M11 20V9M7 5v4M11 5v4M7 5c0 2 4 2 4 0" {...common}/><path d="M17 4v16M15 8h4" {...common}/></>,
    cosmetics: <><path d="M8 7h8v14H8zM10 3h4v4M10 11h4" {...common}/></>,
    pharma: <><path d="M8 4h8v4H8zM7 8h10v12H7z" {...common}/><path d="M12 11v6M9 14h6" {...common}/></>,
    device: <><rect x="4" y="5" width="16" height="14" rx="2" {...common}/><path d="M8 9h8M8 13h5M8 16h3" {...common}/></>,
    retail: <><path d="M5 8h14l-1 12H6L5 8zM8 8a4 4 0 0 1 8 0" {...common}/></>,
  };
  return <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

const industries = [
  {
    icon: "chemical",
    title: "Chemical & Industrial Labels",
    text: "Translate hazard statements, precautionary statements, signal words, handling instructions, storage requirements, emergency information, workplace labels, and other safety-critical content with controlled terminology.",
    bullets: ["GHS / CLP terminology", "Hazard and precautionary statements", "Consistency with SDS content"],
    links: [
      ["SDS Translation Services", links.sds],
      ["Chemical Translation Services", links.chemical],
    ],
  },
  {
    icon: "food",
    title: "Food & Beverage Labels",
    text: "Localize ingredients, allergens, nutrition information, storage conditions, preparation instructions, qualifying text for claims, package labels, and other consumer-facing product information.",
    bullets: ["Ingredients and allergens", "Nutrition and serving information", "Regional product variants"],
    links: [["Food & Beverage Translation Services", links.food]],
  },
  {
    icon: "cosmetics",
    title: "Cosmetics & Personal Care Labels",
    text: "Translate directions, warnings, precautions, product descriptions, claims, packaging text, and consumer instructions while preserving standardized ingredient terminology where required.",
    bullets: ["Directions and precautions", "Claims and product copy", "Controlled ingredient nomenclature"],
  },
  {
    icon: "pharma",
    title: "Pharmaceutical Labels",
    text: "Support multilingual primary and secondary packaging, dosage and administration information, warnings, storage conditions, patient-facing label content, and related regulatory labeling.",
    bullets: ["Dosage-related information", "Warnings and storage conditions", "Terminology across package content"],
    links: [["Pharmaceutical Translation Services", links.pharma]],
  },
  {
    icon: "device",
    title: "Medical Device Labels",
    text: "Translate device and package labels, warnings, handling instructions, sterility-related text, device descriptions, symbols-associated text, and IFU-adjacent content with controlled identifiers handled appropriately.",
    bullets: ["Device and package labels", "IFU terminology consistency", "Controlled identifiers and symbols"],
    links: [["Medical Device Labeling Translation", links.medicalDeviceLabeling]],
  },
  {
    icon: "retail",
    title: "Consumer & Retail Product Labels",
    text: "Support electronics, appliances, automotive products, tools, toys, apparel, household goods, cleaning products, and other retail products with clear multilingual safety and usage information.",
    bullets: ["Safety warnings", "Usage and care instructions", "Technical product information"],
    links: [
      ["Retail & E-commerce Translation Services", links.retail],
      ["Manufacturing Translation Services", links.manufacturing],
    ],
  },
];

const workflow = [
  ["Source Review", "Review product category, target markets, languages, source files, terminology, references, prior translations, and artwork requirements."],
  ["Translation", "Apply subject-matter expertise, approved terminology, translation memory, and project instructions to the label content."],
  ["Linguistic Review", "Match human review depth to content risk, regulatory sensitivity, complexity, and your quality requirements."],
  ["Artwork Localization", "Integrate translated content into artwork or structured formats while managing typography, expansion, line breaks, and layout."],
  ["Multilingual QA", "Check completeness, terminology, numbers, units, formatting, overflow, language placement, and production integrity."],
  ["Review & Finalization", "Incorporate approved stakeholder feedback and preserve final terminology for future labels and revisions."],
];

const qaItems = [
  "Translation accuracy",
  "Terminology consistency",
  "Warnings and precautions",
  "Product and model names",
  "Numbers and quantities",
  "Units of measure",
  "Ingredient terminology",
  "Controlled identifiers",
  "Punctuation and capitalization",
  "Language-specific typography",
  "Cross-document consistency",
  "Artwork completeness",
  "Text overflow and truncation",
  "Missing or duplicated content",
];

const differentiators = [
  ["Specialized Industry Expertise", "Technical and regulated content expertise across chemicals, life sciences, food and beverage, manufacturing, automotive, electronics, and consumer products."],
  ["Scalable Labeling Operations", "Support from one-off product labels to ongoing multilingual programs spanning large SKU portfolios and frequent revisions."],
  ["Controlled Terminology", "Centralize product names, warnings, technical terms, safety phrases, and other critical language across markets."],
  ["Translation Memory", "Reuse previously approved language across product variants and revisions to reduce duplicate work and improve consistency."],
  ["Integrated Multilingual Production", "Combine translation with label artwork localization, layout adaptation, and multilingual production QA."],
  ["AI + Human Quality", "Apply automation, translation memory, terminology controls, professional linguists, expert review, and QA according to content risk."],
];

const related = [
  ["Safety Data Sheets", "Maintain consistent chemical hazards, precautions, handling information, and terminology across SDSs and product labels.", links.sds, "SDS Translation Services"],
  ["Standard Operating Procedures", "Translate manufacturing, quality, safety, and operational procedures for global production environments.", links.sop, "SOP Translation Services"],
  ["Instructions & Technical Manuals", "Keep operating, installation, maintenance, troubleshooting, and safety information aligned with product labeling.", links.technical, "Technical Translation Services"],
  ["Packaging", "Localize package copy, graphics, marketing content, and multilingual artwork for international retail markets.", links.packaging, "Packaging Translation Services"],
  ["Software & User Interfaces", "For connected products and smart devices, localize applications and digital experiences alongside physical documentation.", links.software, "Software Localization Services"],
];

const faqs = [
  ["What is product label translation?", "Product label translation is the professional translation and localization of information displayed on product labels for international markets. This can include product names, ingredients, warnings, hazards, usage instructions, dosage information, storage requirements, specifications, safety statements, and other required or customer-facing information. Professional label translation also considers terminology, regulatory context, artwork constraints, typography, language expansion, and consistency with supporting documents."],
  ["Which types of product labels does Stepes translate?", "Stepes translates labels for chemicals, industrial materials, food and beverages, cosmetics, pharmaceuticals, medical devices, electronics, automotive products, appliances, household goods, consumer products, and many other industries. We support both individual labels and enterprise programs involving large product portfolios and multiple markets."],
  ["Can Stepes translate regulated product labels?", "Yes. Stepes supports multilingual labeling for regulated industries including chemicals, pharmaceuticals, medical devices, cosmetics, and food and beverage. We provide multilingual translation, localization, terminology management, linguistic review, and quality assurance based on your approved source content and project requirements. Final regulatory determination and market approval remain subject to the applicable regulatory framework and your regulatory process."],
  ["How do you keep labels consistent with SDSs, IFUs, and other product documents?", "Stepes uses translation memory, terminology databases, project instructions, and cross-document linguistic controls to maintain approved language across related content. For example, the same hazard terminology can be maintained across a chemical label and SDS, while medical device terminology can remain aligned across the product label, IFU, packaging, and supporting software."],
  ["Can Stepes translate Adobe Illustrator or InDesign label artwork?", "Yes. Stepes provides multilingual desktop publishing and artwork localization for formats such as Adobe Illustrator and InDesign, as well as PDFs, Microsoft Office files, XML, CSV, and other structured formats. Production teams can address text expansion, overflow, fonts, line breaks, language placement, and multilingual typography."],
  ["How do you manage label translation across hundreds or thousands of SKUs?", "Stepes uses translation memory, terminology management, centralized workflows, and content analysis to manage large product portfolios efficiently. Previously approved content can be reused across SKUs and revisions, while changed or new content can be isolated for focused translation and review."],
  ["Do ingredient names, symbols, and product identifiers get translated?", "Not always. Some content uses controlled, standardized, or assigned nomenclature that may need to remain unchanged or follow specific market conventions. Examples can include certain ingredient names, product identifiers, model numbers, symbols, and Unique Device Identifiers. Stepes distinguishes translatable content from controlled information and follows your instructions and applicable terminology requirements."],
  ["Can Stepes translate only what changed on a revised label?", "Yes. When you provide a revised label, Stepes can compare it with previously translated content to identify unchanged, modified, and new text. Previously approved translations can be reused where appropriate while changed content receives focused translation and review. This is especially valuable for frequent product, regulatory, and packaging updates."],
  ["Can Stepes support both physical and digital product labels?", "Yes. Stepes translates physical label content as well as related digital product information, including electronic instructions, web content, structured files, software, QR-linked information, and supporting documentation. This helps keep multilingual information consistent across physical and digital channels."],
  ["How quickly can Stepes translate product labels?", "Turnaround depends on the number of labels, target languages, subject matter, regulatory sensitivity, source format, artwork requirements, and review workflow. Small projects can often move quickly, while large multi-SKU programs may benefit from phased or parallel production. Translation memory and approved terminology can further accelerate recurring projects and revisions."],
];

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .pl-page { width: 100%; overflow-x: hidden; background: #fff; color: ${COLORS.ink}; font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; }
  .pl-page a { color: inherit; }
  .pl-shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
  .pl-section { padding: 96px 0; }
  .pl-section.dense { padding: 80px 0; }
  .pl-soft { background: ${COLORS.soft}; }
  .pl-blush { background: ${COLORS.blush}; }
  .pl-dark { background: ${COLORS.dark}; color: #fff; }
  .pl-eyebrow { margin: 0 0 16px; font-size: 11px !important; line-height: 1.3 !important; font-weight: 600 !important; letter-spacing: .13em !important; text-transform: uppercase; color: ${COLORS.magenta} !important; opacity: 1 !important; }
  .pl-dark .pl-eyebrow { color: ${COLORS.blushAccent} !important; }
  .pl-h1, .pl-h2, .pl-h3 { margin: 0; font-weight: 600; letter-spacing: -.025em; color: inherit; }
  .pl-h1 { font-size: 48px; line-height: 1.08; max-width: 720px; }
  .pl-h2 { font-size: 36px; line-height: 1.12; }
  .pl-h3 { font-size: 24px; line-height: 1.2; }
  .pl-body, .pl-body p, .pl-body li { font-size: 16px; line-height: 1.72; color: ${COLORS.body}; font-weight: 400; }
  .pl-dark .pl-body, .pl-dark .pl-body p, .pl-dark .pl-body li { color: #D7D5DC; }
  .pl-lead { font-size: 18px; line-height: 1.65; color: ${COLORS.body}; max-width: 780px; }
  .pl-dark .pl-lead { color: #DFDDE4; }
  .pl-muted { color: ${COLORS.muted}; }
  .pl-heading-group { max-width: 820px; }
  .pl-heading-group.center { margin-left: auto; margin-right: auto; text-align: center; }
  .pl-heading-group.center .pl-lead { margin-left: auto; margin-right: auto; }
  .pl-heading-group .pl-h2 + .pl-lead { margin-top: 20px; }
  .pl-btns { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .pl-btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; padding: 13px 22px; border-radius: 999px; font-size: 16px; line-height: 1.2; font-weight: 600; text-decoration: none; transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease; }
  .pl-btn:focus-visible, .pl-link:focus-visible, .pl-faq summary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
  .pl-btn-primary, .pl-btn-primary:link, .pl-btn-primary:visited, .pl-btn-primary:hover, .pl-btn-primary:active, .pl-btn-primary:focus, .pl-btn-primary:focus-visible { background: ${COLORS.magenta}; color: #fff !important; border: 1px solid ${COLORS.magenta}; }
  .pl-btn-primary *, .pl-btn-primary:visited *, .pl-btn-primary:hover *, .pl-btn-primary:active *, .pl-btn-primary:focus * { color: #fff !important; stroke: currentColor; }
  .pl-btn-primary:hover { background: ${COLORS.magentaDark}; border-color: ${COLORS.magentaDark}; transform: translateY(-1px); box-shadow: 0 10px 28px rgba(193,29,99,.18); }
  .pl-btn-secondary { background: #fff; border: 1px solid #D9D9DE; color: #29292F !important; }
  .pl-btn-secondary:hover { border-color: #BDBDC4; transform: translateY(-1px); }
  .pl-link { display: inline-flex; min-height: 44px; align-items: center; gap: 7px; color: ${COLORS.magenta} !important; font-size: 16px; font-weight: 600; text-decoration: none; }
  .pl-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .pl-link:hover svg { transform: translateX(2px); }
  .pl-link svg { flex: 0 0 auto; transition: transform .18s ease; }
  .pl-link span, .pl-tm-head strong, .pl-tm-head span, .pl-related-row, .pl-reg-row { overflow-wrap: anywhere; }
  .pl-hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #fff 72%, #FAFAFB 100%); }
  .pl-hero-grid { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(380px, .9fr); gap: 72px; align-items: center; }
  .pl-hero-copy .pl-lead { margin: 24px 0 0; max-width: 700px; }
  .pl-hero-visual { min-height: 460px; border: 1px solid ${COLORS.line}; border-radius: 30px; background: #FCFCFD; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; box-shadow: 0 18px 45px rgba(18,18,22,.06); }
  .pl-hero-visual::before { content: ""; position: absolute; inset: auto -70px -110px auto; width: 300px; height: 300px; border-radius: 50%; background: ${COLORS.blush}; }
  .pl-hero-visual::after { content: ""; position: absolute; top: 28px; right: 34px; width: 82px; height: 82px; border: 1px solid #DCDCE2; border-radius: 50%; opacity: .8; }
  .pl-hero-svg { width: 86%; max-width: 520px; height: auto; position: relative; z-index: 2; }
  .pl-proof { border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; background: #fff; }
  .pl-proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .pl-proof-item { padding: 28px 26px; min-height: 116px; display: flex; flex-direction: column; justify-content: center; }
  .pl-proof-item + .pl-proof-item { border-left: 1px solid ${COLORS.line}; }
  .pl-proof-title { margin: 0 0 7px; font-size: 18px; line-height: 1.3; font-weight: 600; }
  .pl-proof-text { margin: 0; font-size: 16px; line-height: 1.55; color: ${COLORS.muted}; }
  .pl-split { display: grid; grid-template-columns: minmax(280px, .82fr) minmax(0, 1.18fr); gap: 80px; align-items: start; }
  .pl-copy-block { max-width: 760px; }
  .pl-copy-block p { margin: 0 0 20px; font-size: 16px; line-height: 1.72; color: ${COLORS.body}; }
  .pl-copy-block p:last-child { margin-bottom: 0; }
  .pl-value-lines { margin-top: 34px; border-top: 1px solid ${COLORS.line}; }
  .pl-value-line { display: grid; grid-template-columns: 180px 1fr; gap: 24px; padding: 20px 0; border-bottom: 1px solid ${COLORS.line}; }
  .pl-value-line strong { font-size: 16px; font-weight: 600; }
  .pl-value-line span { font-size: 16px; line-height: 1.6; color: ${COLORS.body}; }
  .pl-industry-grid { margin-top: 54px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 56px; border-top: 1px solid ${COLORS.line}; }
  .pl-industry { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 34px 0; border-bottom: 1px solid ${COLORS.line}; }
  .pl-industry:nth-child(odd) { padding-right: 24px; }
  .pl-industry:nth-child(even) { padding-left: 24px; }
  .pl-icon-box { width: 48px; height: 48px; border-radius: 16px; background: ${COLORS.blush}; color: ${COLORS.magenta}; display: grid; place-items: center; }
  .pl-industry p { margin: 10px 0 16px; font-size: 16px; line-height: 1.65; color: ${COLORS.body}; }
  .pl-bullet-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
  .pl-bullet-list li { display: grid; grid-template-columns: 16px 1fr; gap: 9px; align-items: start; font-size: 16px; line-height: 1.5; color: ${COLORS.body}; }
  .pl-bullet-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: ${COLORS.magenta}; margin-top: .56em; }
  .pl-industry-links { display: flex; flex-wrap: wrap; gap: 6px 20px; margin-top: 16px; }
  .pl-reg-grid { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(340px,.95fr); gap: 72px; align-items: center; }
  .pl-reg-panel { border: 1px solid #35333C; border-radius: 28px; overflow: hidden; background: #201F25; }
  .pl-reg-row { display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; padding: 20px 22px; border-bottom: 1px solid #34323A; }
  .pl-reg-row:last-child { border-bottom: 0; }
  .pl-reg-row span:first-child { font-size: 16px; color: #F0EFF2; }
  .pl-reg-row span:last-child { font-size: 16px; line-height: 1.5; color: #C4C1C9; }
  .pl-note { margin-top: 26px; padding-left: 18px; border-left: 3px solid ${COLORS.magenta}; font-size: 16px; line-height: 1.65; color: #D9D7DE; }
  .pl-anatomy-grid { margin-top: 52px; display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 68px; align-items: center; }
  .pl-anatomy-panel { border: 1px solid ${COLORS.line}; border-radius: 28px; padding: 28px; background: #fff; }
  .pl-label-card { max-width: 520px; margin: 0 auto; border: 1px solid #D7D7DC; border-radius: 22px; padding: 28px; box-shadow: 0 14px 30px rgba(18,18,22,.05); }
  .pl-label-brand { display: flex; align-items: center; justify-content: space-between; padding-bottom: 18px; border-bottom: 1px solid ${COLORS.line}; }
  .pl-label-brand strong { font-size: 18px; font-weight: 600; }
  .pl-chip { font-size: 14px; line-height: 1; padding: 8px 10px; border-radius: 999px; background: ${COLORS.blush}; color: ${COLORS.magenta}; font-weight: 600; }
  .pl-label-warning { display: grid; grid-template-columns: 44px 1fr; gap: 14px; align-items: start; margin: 24px 0; padding: 18px; background: #F8F8FA; border-radius: 16px; }
  .pl-diamond { width: 38px; height: 38px; transform: rotate(45deg); border: 2px solid ${COLORS.magenta}; display: grid; place-items: center; }
  .pl-diamond span { transform: rotate(-45deg); font-size: 17px; font-weight: 600; color: ${COLORS.magenta}; }
  .pl-label-lines { display: grid; gap: 10px; }
  .pl-line { height: 9px; background: #ECECF0; border-radius: 999px; }
  .pl-line.short { width: 60%; }
  .pl-line.medium { width: 80%; }
  .pl-anatomy-list { display: grid; gap: 18px; }
  .pl-anatomy-item { display: grid; grid-template-columns: 26px 1fr; gap: 12px; align-items: start; }
  .pl-anatomy-item .marker { margin-top: .2em; color: ${COLORS.magenta}; }
  .pl-anatomy-item strong { display: block; margin-bottom: 5px; font-size: 17px; font-weight: 600; }
  .pl-anatomy-item span { font-size: 16px; line-height: 1.6; color: ${COLORS.body}; }
  .pl-dtp-grid { margin-top: 52px; display: grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 64px; }
  .pl-format-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid ${COLORS.line}; }
  .pl-format { padding: 18px 0; border-bottom: 1px solid ${COLORS.line}; font-size: 16px; line-height: 1.4; }
  .pl-format:nth-child(odd) { padding-right: 18px; }
  .pl-format:nth-child(even) { padding-left: 18px; border-left: 1px solid ${COLORS.line}; }
  .pl-qa-mini { padding: 28px; border-radius: 28px; background: #fff; border: 1px solid ${COLORS.line}; }
  .pl-qa-mini .pl-h3 { margin-bottom: 20px; }
  .pl-panel-note { margin: 24px 0 0; font-size: 16px; line-height: 1.7; color: ${COLORS.body}; }
  .pl-qa-mini .pl-panel-note { padding-top: 20px; border-top: 1px solid ${COLORS.line}; }
  .pl-context-note { margin: 18px 0 0; max-width: 560px; font-size: 16px; line-height: 1.65; color: ${COLORS.body}; }
  .pl-check-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px 22px; }
  .pl-check { display: grid; grid-template-columns: 22px 1fr; gap: 9px; align-items: start; font-size: 16px; line-height: 1.5; color: ${COLORS.body}; }
  .pl-check svg { color: ${COLORS.magenta}; margin-top: .1em; }
  .pl-consistency-layout { margin-top: 54px; display: grid; grid-template-columns: minmax(0,1.12fr) minmax(320px,.88fr); gap: 70px; align-items: center; }
  .pl-ecosystem { position: relative; min-height: 400px; display: grid; place-items: center; }
  .pl-ecosystem-core { width: 150px; height: 150px; border-radius: 50%; background: ${COLORS.blush}; border: 1px solid #E8C7D5; display: grid; place-items: center; text-align: center; color: ${COLORS.magenta}; font-size: 18px; line-height: 1.2; font-weight: 600; z-index: 2; }
  .pl-orbit { position: absolute; inset: 20px; border: 1px solid #E5E5EA; border-radius: 50%; }
  .pl-orbit-label { position: absolute; min-width: 112px; padding: 10px 14px; border: 1px solid ${COLORS.line}; background: #fff; border-radius: 999px; text-align: center; font-size: 15px; line-height: 1.2; color: #34343A; box-shadow: 0 8px 20px rgba(18,18,22,.04); }
  .pl-orbit-label.l1 { top: 16px; left: 50%; transform: translateX(-50%); }
  .pl-orbit-label.l2 { top: 92px; right: 5px; }
  .pl-orbit-label.l3 { bottom: 70px; right: 24px; }
  .pl-orbit-label.l4 { bottom: 16px; left: 50%; transform: translateX(-50%); }
  .pl-orbit-label.l5 { bottom: 70px; left: 18px; }
  .pl-orbit-label.l6 { top: 92px; left: 2px; }
  .pl-consistency-copy p { font-size: 16px; line-height: 1.7; color: ${COLORS.body}; }
  .pl-sku-wrap { border: 1px solid #E9CEDA; background: #fff; border-radius: 30px; padding: 48px; display: grid; grid-template-columns: minmax(0,.95fr) minmax(360px,1.05fr); gap: 64px; align-items: center; box-shadow: 0 18px 50px rgba(193,29,99,.05); }
  .pl-formula { display: grid; grid-template-columns: repeat(7, auto); justify-content: center; align-items: center; gap: 12px; padding: 34px 24px; border-radius: 24px; background: ${COLORS.soft}; border: 1px solid ${COLORS.line}; }
  .pl-formula strong { font-size: 21px; font-weight: 600; }
  .pl-formula span { font-size: 18px; color: ${COLORS.magenta}; }
  .pl-sku-list { margin-top: 24px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px 22px; }
  .pl-sku-list div { font-size: 16px; line-height: 1.5; color: ${COLORS.body}; }
  .pl-tm-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(380px,.92fr); gap: 72px; align-items: center; }
  .pl-tm-panel { border-radius: 28px; border: 1px solid ${COLORS.line}; overflow: hidden; background: #fff; }
  .pl-tm-head { padding: 20px 22px; display: flex; justify-content: space-between; gap: 14px; align-items: center; background: #FAFAFB; border-bottom: 1px solid ${COLORS.line}; }
  .pl-tm-head strong { font-size: 16px; font-weight: 600; }
  .pl-tm-head span { font-size: 14px; color: ${COLORS.muted}; }
  .pl-tm-row { padding: 20px 22px; display: grid; grid-template-columns: 90px 1fr; gap: 20px; border-bottom: 1px solid ${COLORS.line}; }
  .pl-tm-row:last-child { border-bottom: 0; }
  .pl-tm-match { font-size: 14px; font-weight: 600; color: ${COLORS.magenta}; }
  .pl-tm-row p { margin: 0; font-size: 16px; line-height: 1.55; color: ${COLORS.body}; }
  .pl-workflow { margin-top: 54px; display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); border-top: 1px solid #D9D9DF; }
  .pl-step { position: relative; padding: 28px 18px 10px 0; border-top: 3px solid transparent; }
  .pl-step::before { content: ""; position: absolute; top: -5px; left: 0; width: 8px; height: 8px; border-radius: 50%; background: ${COLORS.magenta}; }
  .pl-step + .pl-step { padding-left: 18px; }
  .pl-step-num { display: block; margin-bottom: 12px; color: ${COLORS.magenta}; font-size: 14px; font-weight: 600; }
  .pl-step h3 { margin: 0 0 10px; font-size: 19px; line-height: 1.25; font-weight: 600; }
  .pl-step p { margin: 0; font-size: 16px; line-height: 1.58; color: ${COLORS.body}; }
  .pl-qa-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid ${COLORS.line}; }
  .pl-qa-item { display: grid; grid-template-columns: 24px 1fr; gap: 12px; align-items: start; padding: 18px 0; border-bottom: 1px solid ${COLORS.line}; font-size: 16px; line-height: 1.5; color: ${COLORS.body}; }
  .pl-qa-item:nth-child(odd) { padding-right: 28px; }
  .pl-qa-item:nth-child(even) { padding-left: 28px; border-left: 1px solid ${COLORS.line}; }
  .pl-qa-item svg { color: ${COLORS.magenta}; margin-top: .08em; }
  .pl-ai-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(390px,.9fr); gap: 72px; align-items: center; }
  .pl-ai-flow { border: 1px solid #36343D; border-radius: 28px; padding: 26px; background: #201F25; }
  .pl-ai-node { padding: 18px 20px; border: 1px solid #3A3841; border-radius: 18px; background: #242329; }
  .pl-ai-node strong { display: block; margin-bottom: 6px; color: #fff; font-size: 16px; font-weight: 600; }
  .pl-ai-node span { color: #CFCBD3; font-size: 16px; line-height: 1.5; }
  .pl-ai-arrow { height: 30px; display: grid; place-items: center; color: ${COLORS.blushAccent}; }
  .pl-digital-section { background: #F7F7F9; border-top: 1px solid ${COLORS.line}; }
  .pl-digital-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 76px; align-items: center; }
  .pl-phone { max-width: 420px; margin: 0 auto; border: 1px solid #34323A; border-radius: 34px; padding: 18px; background: #211F26; box-shadow: 0 22px 50px rgba(18,18,22,.12); }
  .pl-phone-inner { border-radius: 24px; background: #FAFAFB; padding: 26px; color: ${COLORS.ink}; }
  .pl-qr { width: 94px; height: 94px; display: grid; grid-template-columns: repeat(5,1fr); gap: 3px; padding: 5px; background: #fff; border: 1px solid ${COLORS.line}; margin-bottom: 20px; }
  .pl-qr span { background: #2C2B31; }
  .pl-phone-inner h3 { margin: 0 0 12px; font-size: 20px; font-weight: 600; }
  .pl-phone-inner p { margin: 0; font-size: 16px; line-height: 1.55; color: ${COLORS.body}; }
  .pl-language-grid { margin-top: 44px; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid ${COLORS.line}; }
  .pl-language-col { padding: 24px 24px 0 0; }
  .pl-language-col + .pl-language-col { padding-left: 24px; border-left: 1px solid ${COLORS.line}; }
  .pl-language-col strong { display: block; margin-bottom: 12px; font-size: 17px; font-weight: 600; }
  .pl-language-col p { margin: 0; font-size: 16px; line-height: 1.8; color: ${COLORS.body}; }
  .pl-diff-grid { margin-top: 50px; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid ${COLORS.line}; border-bottom: 1px solid ${COLORS.line}; }
  .pl-diff { padding: 28px 28px 30px 0; min-height: 190px; }
  .pl-diff:nth-child(3n+2), .pl-diff:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid ${COLORS.line}; }
  .pl-diff:nth-child(n+4) { border-top: 1px solid ${COLORS.line}; }
  .pl-diff h3 { margin: 0 0 10px; font-size: 20px; line-height: 1.3; font-weight: 600; }
  .pl-diff p { margin: 0; font-size: 16px; line-height: 1.62; color: ${COLORS.body}; }
  .pl-related { margin-top: 48px; border-top: 1px solid ${COLORS.line}; }
  .pl-related-row { display: grid; grid-template-columns: 250px minmax(0,1fr) 250px; gap: 26px; align-items: center; padding: 26px 0; border-bottom: 1px solid ${COLORS.line}; }
  .pl-related-row h3 { margin: 0; font-size: 19px; font-weight: 600; }
  .pl-related-row p { margin: 0; font-size: 16px; line-height: 1.6; color: ${COLORS.body}; }
  .pl-related-row .pl-link { justify-self: end; text-align: right; }
  .pl-faq-wrap { max-width: 980px; margin: 46px auto 0; border-top: 1px solid ${COLORS.line}; }
  .pl-faq { border-bottom: 1px solid ${COLORS.line}; }
  .pl-faq summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: 1fr 32px; gap: 24px; align-items: center; padding: 24px 0; min-height: 70px; font-size: 18px; line-height: 1.45; font-weight: 600; }
  .pl-faq summary::-webkit-details-marker { display: none; }
  .pl-faq summary::after { content: "+"; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #D8D8DE; display: grid; place-items: center; font-size: 20px; color: ${COLORS.magenta}; font-weight: 400; }
  .pl-faq[open] summary::after { content: "–"; }
  .pl-faq-answer { max-width: 840px; padding: 0 54px 24px 0; font-size: 16px; line-height: 1.7; color: ${COLORS.body}; }
  .pl-final { padding: 88px 0; background: ${COLORS.burgundy}; color: #fff; }
  .pl-final-inner { max-width: 900px; margin: 0 auto; text-align: center; }
  .pl-final .pl-h2 { color: #fff; }
  .pl-final p { max-width: 760px; margin: 22px auto 0; font-size: 18px; line-height: 1.65; color: #F2E8ED; }
  .pl-final .pl-btns { justify-content: center; }
  .pl-final .pl-btn-primary, .pl-final .pl-btn-primary:link, .pl-final .pl-btn-primary:visited, .pl-final .pl-btn-primary:hover, .pl-final .pl-btn-primary:active, .pl-final .pl-btn-primary:focus, .pl-final .pl-btn-primary:focus-visible { background: #fff; color: ${COLORS.burgundy} !important; border-color: #fff; }
  .pl-final .pl-btn-primary *, .pl-final .pl-btn-primary:hover * { color: ${COLORS.burgundy} !important; }
  .pl-final .pl-btn-secondary { background: transparent; border-color: rgba(255,255,255,.45); color: #fff !important; }
  .pl-final .pl-btn-secondary:hover { border-color: #fff; }

  @media (max-width: 1100px) {
    .pl-shell { width: min(1280px, calc(100% - 80px)); }
    .pl-hero-grid, .pl-reg-grid, .pl-ai-grid, .pl-tm-grid { gap: 48px; }
    .pl-hero-grid { grid-template-columns: minmax(0,1.06fr) minmax(340px,.94fr); }
    .pl-workflow { grid-template-columns: repeat(3,minmax(0,1fr)); row-gap: 12px; }
    .pl-step:nth-child(n+4) { border-top-color: #D9D9DF; margin-top: 18px; }
    .pl-language-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .pl-language-col:nth-child(3) { border-left: 0; padding-left: 0; border-top: 1px solid ${COLORS.line}; margin-top: 20px; padding-top: 24px; }
    .pl-language-col:nth-child(4) { border-top: 1px solid ${COLORS.line}; margin-top: 20px; padding-top: 24px; }
  }

  @media (max-width: 900px) {
    .pl-shell { width: calc(100% - 48px); }
    .pl-section { padding: 80px 0; }
    .pl-hero { padding: 88px 0 80px; }
    .pl-h1 { font-size: 42px; }
    .pl-h2 { font-size: 32px; }
    .pl-h3 { font-size: 22px; }
    .pl-hero-grid, .pl-split, .pl-reg-grid, .pl-anatomy-grid, .pl-dtp-grid, .pl-consistency-layout, .pl-sku-wrap, .pl-tm-grid, .pl-ai-grid, .pl-digital-grid { grid-template-columns: 1fr; }
    .pl-hero-grid { gap: 50px; }
    .pl-hero-copy { text-align: center; }
    .pl-hero-copy .pl-h1, .pl-hero-copy .pl-lead { margin-left: auto; margin-right: auto; }
    .pl-hero-copy .pl-btns { justify-content: center; }
    .pl-hero-visual { min-height: 410px; max-width: 660px; width: 100%; margin: 0 auto; }
    .pl-proof-grid { grid-template-columns: repeat(2,1fr); }
    .pl-proof-item:nth-child(3) { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .pl-proof-item:nth-child(4) { border-top: 1px solid ${COLORS.line}; }
    .pl-split { gap: 38px; }
    .pl-heading-group.tablet-center, .pl-heading-group.center { text-align: center; margin-left: auto; margin-right: auto; }
    .pl-heading-group.tablet-center .pl-lead { margin-left: auto; margin-right: auto; }
    .pl-heading-group.tablet-center > .pl-body, .pl-heading-group.tablet-center > .pl-body p, .pl-heading-group.tablet-center > .pl-note, .pl-heading-group.tablet-center > .pl-sku-list { text-align: left; }
    .pl-heading-group.tablet-center > .pl-link { display: flex; width: fit-content; max-width: 100%; text-align: left; }
    .pl-industry-grid { column-gap: 36px; }
    .pl-reg-grid, .pl-ai-grid, .pl-digital-grid { gap: 48px; }
    .pl-dtp-grid, .pl-consistency-layout { gap: 44px; }
    .pl-sku-wrap { gap: 36px; padding: 38px; }
    .pl-tm-grid { gap: 38px; }
    .pl-diff-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .pl-diff:nth-child(3n+2), .pl-diff:nth-child(3n+3) { border-left: 0; padding-left: 0; }
    .pl-diff:nth-child(even) { padding-left: 28px; border-left: 1px solid ${COLORS.line}; }
    .pl-diff:nth-child(n+3) { border-top: 1px solid ${COLORS.line}; }
    .pl-related-row { grid-template-columns: 190px minmax(0,1fr); }
    .pl-related-row .pl-link { grid-column: 2; justify-self: start; text-align: left; margin-top: -6px; }
  }

  @media (max-width: 700px) {
    .pl-shell { width: calc(100% - 40px); }
    .pl-section, .pl-section.dense { padding: 68px 0; }
    .pl-hero { padding: 72px 0 68px; }
    .pl-h1 { font-size: 38px; line-height: 1.1; }
    .pl-h2 { font-size: 30px; line-height: 1.14; }
    .pl-h3 { font-size: 20px; }
    .pl-lead { font-size: 18px; }
    .pl-heading-group.mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
    .pl-heading-group.mobile-center .pl-lead { margin-left: auto; margin-right: auto; }
    .pl-heading-group.mobile-center > .pl-body, .pl-heading-group.mobile-center > .pl-body p, .pl-heading-group.mobile-center > .pl-note, .pl-heading-group.mobile-center > .pl-sku-list { text-align: left; }
    .pl-heading-group.mobile-center > .pl-link { display: flex; width: fit-content; max-width: 100%; text-align: left; }
    .pl-heading-group.scan-left { text-align: left; margin-left: 0; }
    .pl-heading-group.scan-left .pl-lead { margin-left: 0; }
    .pl-hero-copy .pl-btns { width: 100%; }
    .pl-hero-copy .pl-btn { flex: 1 1 100%; }
    .pl-hero-visual { min-height: 340px; border-radius: 24px; }
    .pl-hero-svg { width: 96%; }
    .pl-proof-grid { grid-template-columns: 1fr; }
    .pl-proof-item { padding: 22px 0; min-height: auto; }
    .pl-proof-item + .pl-proof-item, .pl-proof-item:nth-child(3), .pl-proof-item:nth-child(4) { border-left: 0; border-top: 1px solid ${COLORS.line}; }
    .pl-value-line { grid-template-columns: 1fr; gap: 6px; }
    .pl-industry-grid { grid-template-columns: 1fr; margin-top: 38px; }
    .pl-industry:nth-child(odd), .pl-industry:nth-child(even) { padding: 28px 0; }
    .pl-industry { grid-template-columns: 44px 1fr; gap: 16px; }
    .pl-icon-box { width: 44px; height: 44px; border-radius: 14px; }
    .pl-industry-links { display: grid; gap: 0; }
    .pl-reg-panel { border-radius: 22px; }
    .pl-reg-row { grid-template-columns: 1fr; gap: 6px; align-items: start; }
    .pl-reg-row span:last-child { font-size: 16px; }
    .pl-anatomy-panel { padding: 18px; border-radius: 22px; }
    .pl-label-card { padding: 20px; }
    .pl-format-list, .pl-check-grid, .pl-qa-grid, .pl-sku-list { grid-template-columns: 1fr; }
    .pl-format:nth-child(odd), .pl-format:nth-child(even) { padding: 16px 0; border-left: 0; }
    .pl-qa-mini { padding: 22px; border-radius: 22px; }
    .pl-ecosystem { min-height: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px; place-items: stretch; transform: none; margin: 0; }
    .pl-orbit { display: none; }
    .pl-ecosystem-core { grid-column: 1 / -1; width: auto; height: auto; min-height: 96px; border-radius: 20px; padding: 18px; }
    .pl-orbit-label, .pl-orbit-label.l1, .pl-orbit-label.l2, .pl-orbit-label.l3, .pl-orbit-label.l4, .pl-orbit-label.l5, .pl-orbit-label.l6 { position: static; min-width: 0; width: auto; transform: none; padding: 12px 10px; }
    .pl-sku-wrap { padding: 26px 20px; border-radius: 24px; }
    .pl-formula { grid-template-columns: 1fr; text-align: center; gap: 5px; }
    .pl-formula span { transform: none; height: auto; line-height: 1; padding: 2px 0; }
    .pl-tm-head { flex-direction: column; align-items: flex-start; }
    .pl-tm-row { grid-template-columns: 1fr; gap: 8px; }
    .pl-workflow { grid-template-columns: 1fr; border-top: 0; margin-top: 38px; }
    .pl-step, .pl-step + .pl-step, .pl-step:nth-child(n+4) { padding: 0 0 28px 42px; margin: 0; border-top: 0; border-left: 1px solid #D9D9DF; }
    .pl-step:last-child { border-left-color: transparent; padding-bottom: 0; }
    .pl-step::before { top: 2px; left: -4.5px; }
    .pl-step-num { margin-bottom: 8px; }
    .pl-qa-item:nth-child(odd), .pl-qa-item:nth-child(even) { padding: 16px 0; border-left: 0; }
    .pl-phone { border-radius: 28px; padding: 14px; }
    .pl-language-grid { grid-template-columns: 1fr; }
    .pl-language-col, .pl-language-col + .pl-language-col, .pl-language-col:nth-child(3), .pl-language-col:nth-child(4) { padding: 20px 0; border-left: 0; border-top: 1px solid ${COLORS.line}; margin: 0; }
    .pl-language-col:first-child { border-top: 0; }
    .pl-diff-grid { grid-template-columns: 1fr; }
    .pl-diff, .pl-diff:nth-child(even), .pl-diff:nth-child(3n+2), .pl-diff:nth-child(3n+3), .pl-diff:nth-child(n+3) { padding: 24px 0; border-left: 0; border-top: 1px solid ${COLORS.line}; min-height: 0; }
    .pl-diff:first-child { border-top: 0; }
    .pl-related-row { grid-template-columns: 1fr; gap: 8px; padding: 24px 0; }
    .pl-related-row .pl-link { grid-column: 1; margin-top: 4px; }
    .pl-faq-wrap { margin-top: 34px; }
    .pl-faq summary { grid-template-columns: 1fr 32px; gap: 14px; font-size: 17px; padding: 20px 0; }
    .pl-faq-answer { padding: 0 0 20px; }
    .pl-final { padding: 70px 0; }
    .pl-final .pl-btns { width: 100%; }
    .pl-final .pl-btn { flex: 1 1 100%; }
  }

  @media (max-width: 360px) {
    .pl-shell { width: calc(100% - 40px); }
    .pl-h1 { font-size: 38px; }
    .pl-hero-visual { min-height: 310px; }
  }
`;

function ProductLabelHeroArt() {
  return (
    <svg className="pl-hero-svg" viewBox="0 0 560 430" fill="none" aria-hidden="true">
      <rect x="80" y="42" width="248" height="344" rx="30" fill="#fff" stroke="#B7B7BE" strokeWidth="2"/>
      <path d="M138 42V22h132v20" stroke="#8A8A92" strokeWidth="2" strokeLinecap="round"/>
      <rect x="108" y="88" width="192" height="238" rx="18" fill="#FAFAFB" stroke="#C9C9CF" strokeWidth="2"/>
      <path d="M130 123h148M130 146h106M130 273h142M130 296h118" stroke="#8B8B93" strokeWidth="2.2" strokeLinecap="round"/>
      <rect x="130" y="174" width="64" height="64" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.8"/>
      <path d="M162 188v36M144 206h36" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
      <path d="M215 182h58M215 201h42M215 220h52" stroke="#777780" strokeWidth="2.1" strokeLinecap="round"/>
      <path d="M354 118h88a22 22 0 0 1 22 22v76a22 22 0 0 1-22 22h-38l-24 24 4-24h-30a22 22 0 0 1-22-22v-76a22 22 0 0 1 22-22z" fill="#fff" stroke="#B7B7BE" strokeWidth="2"/>
      <text x="356" y="157" fontSize="18" fontFamily="Arial, sans-serif" fill="#4D4D55">EN</text>
      <path d="M388 151h48" stroke="#D0D0D5" strokeWidth="2" strokeLinecap="round"/>
      <text x="356" y="187" fontSize="18" fontFamily="Arial, sans-serif" fill="#C11D63">DE</text>
      <path d="M388 181h56" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
      <text x="356" y="217" fontSize="18" fontFamily="Arial, sans-serif" fill="#4D4D55">JA</text>
      <path d="M388 211h42" stroke="#D0D0D5" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="415" cy="329" r="50" fill="#FDF2F7" stroke="#E8C7D5" strokeWidth="2"/>
      <path d="M392 329h46M415 306v46" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
      <path d="M397 312c9 7 27 7 36 0M397 346c9-7 27-7 36 0" stroke="#C11D63" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function StepesProductLabelTranslationServicesWireframe() {
  return (
    <main className="pl-page">
      <style>{styles}</style>

      <section className="pl-hero">
        <div className="pl-shell pl-hero-grid">
          <div className="pl-hero-copy">
            <p className="pl-eyebrow">Global Product Labeling</p>
            <h1 className="pl-h1">Product Label Translation Services for Global Markets</h1>
            <p className="pl-lead">Bring products to international markets with accurate, consistent, and scalable multilingual labeling. Stepes supports chemicals, food and beverages, cosmetics, pharmaceuticals, medical devices, industrial products, and consumer goods in 100+ languages.</p>
            <div className="pl-btns">
              <a className="pl-btn pl-btn-primary" href={links.quote}>Get a Translation Quote <ArrowIcon /></a>
              <a className="pl-btn pl-btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
          <div className="pl-hero-visual">
            <ProductLabelHeroArt />
          </div>
        </div>
      </section>

      <section className="pl-proof" aria-label="Product labeling capabilities">
        <div className="pl-shell pl-proof-grid">
          <div className="pl-proof-item"><h2 className="pl-proof-title">100+ Languages</h2><p className="pl-proof-text">Global product labeling coverage across major markets and locales.</p></div>
          <div className="pl-proof-item"><h2 className="pl-proof-title">Regulated Content Expertise</h2><p className="pl-proof-text">Life sciences, chemicals, food, manufacturing, and consumer products.</p></div>
          <div className="pl-proof-item"><h2 className="pl-proof-title">Terminology + Translation Memory</h2><p className="pl-proof-text">Consistent approved language across products, documents, and revisions.</p></div>
          <div className="pl-proof-item"><h2 className="pl-proof-title">Multilingual Artwork Support</h2><p className="pl-proof-text">Translation, layout adaptation, DTP, and production QA for label files.</p></div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell pl-split">
          <div className="pl-heading-group tablet-center mobile-center">
            <p className="pl-eyebrow">Why Label Translation Matters</p>
            <h2 className="pl-h2">Accurate Product Labels for Global Market Success</h2>
          </div>
          <div className="pl-copy-block">
            <p>A product label may contain only a few dozen or a few hundred words, but those words often carry an outsized responsibility. Product identity, ingredients, hazards, warnings, dosage, storage conditions, operating instructions, precautions, and other critical information must remain accurate and understandable wherever a product is sold.</p>
            <p>Requirements also vary by product category, jurisdiction, intended user, and market. Stepes helps global companies translate and manage product labels with the linguistic accuracy, terminology control, and production discipline required for international launches.</p>
            <p>Whether you are launching one product into a new market or managing an enterprise labeling program across dozens of countries, our multilingual workflows help keep approved product information accurate, controlled, and consistent across languages and revisions.</p>
            <div className="pl-value-lines">
              <div className="pl-value-line"><strong>Market readiness</strong><span>Support multilingual labeling requirements without treating translation as a last-minute artwork task.</span></div>
              <div className="pl-value-line"><strong>Product safety</strong><span>Preserve the meaning of warnings, instructions, hazards, quantities, and other high-impact information.</span></div>
              <div className="pl-value-line"><strong>Operational scale</strong><span>Manage repeated language across SKUs, markets, package sizes, product families, and ongoing revisions.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section pl-soft">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Product Label Translation Across Industries</h2>
            <p className="pl-lead">Different products carry different labeling risks and terminology requirements. Stepes combines native-language expertise with subject-matter knowledge across regulated, technical, industrial, and consumer markets.</p>
          </div>
          <div className="pl-industry-grid">
            {industries.map((item) => (
              <article className="pl-industry" key={item.title}>
                <div className="pl-icon-box"><IndustryIcon type={item.icon} /></div>
                <div>
                  <h3 className="pl-h3">{item.title}</h3>
                  <p>{item.text}</p>
                  <ul className="pl-bullet-list">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  {item.links && <div className="pl-industry-links">{item.links.map(([label, href]) => <a className="pl-link" href={href} key={label}><span>{label}</span><ArrowIcon /></a>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pl-section pl-dark">
        <div className="pl-shell pl-reg-grid">
          <div className="pl-heading-group tablet-center mobile-center">
            <h2 className="pl-h2">Supporting Multilingual Regulatory Labeling</h2>
            <p className="pl-lead">Product labeling is rarely governed by one global rule. Requirements can differ by jurisdiction, industry, product classification, intended user, distribution channel, and language.</p>
            <div className="pl-body">
              <p>Stepes supports multilingual regulatory labeling by translating your approved source content with the appropriate subject-matter expertise, terminology controls, review processes, and quality assurance.</p>
            </div>
            <div className="pl-note">Stepes supports the linguistic and localization components of regulatory labeling workflows. Final regulatory determination, product approval, and market-specific compliance remain part of your applicable regulatory process.</div>
          </div>
          <div className="pl-reg-panel" aria-label="Examples of regulatory labeling frameworks">
            {[ ["Chemical hazard communication", "GHS / OSHA / CLP"], ["Food product information", "Market-specific language rules"], ["Medical device labeling", "MDR / IVDR / market requirements"], ["Pharmaceutical labeling", "Packaging and patient information"], ["Cosmetics labeling", "Ingredient and consumer information"] ].map(([name, meta]) => <div className="pl-reg-row" key={name}><span>{name}</span><span>{meta}</span></div>)}
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <p className="pl-eyebrow">In-Context Localization</p>
            <h2 className="pl-h2">Label Translation Is More Than Translating Words</h2>
            <p className="pl-lead">A translation can be linguistically correct and still fail operationally if it does not fit the label, separates a warning from its qualifier, or disrupts the relationship between required information and the final artwork.</p>
          </div>
          <div className="pl-anatomy-grid">
            <div className="pl-anatomy-panel">
              <div className="pl-label-card">
                <div className="pl-label-brand"><strong>Product Label</strong><span className="pl-chip">DE-DE</span></div>
                <div className="pl-label-warning">
                  <div className="pl-diamond"><span>!</span></div>
                  <div><strong style={{fontSize:16,fontWeight:600}}>Safety information</strong><div className="pl-label-lines" style={{marginTop:10}}><span className="pl-line"></span><span className="pl-line medium"></span><span className="pl-line short"></span></div></div>
                </div>
                <div className="pl-label-lines"><span className="pl-line"></span><span className="pl-line"></span><span className="pl-line medium"></span><span className="pl-line"></span><span className="pl-line short"></span></div>
              </div>
            </div>
            <div className="pl-anatomy-list">
              {[ ["Limited physical space", "Account for language expansion, contraction, required content, and compact label areas without sacrificing readability."], ["Numbers, units, and identifiers", "Protect quantities, dosage-related information, model numbers, decimal conventions, units, and controlled identifiers."], ["Typography and scripts", "Manage language-specific line breaking, font support, Asian typography, and bidirectional layouts for Arabic and Hebrew."], ["Symbols and warning hierarchy", "Keep translated text correctly associated with pictograms, warnings, qualifiers, and other structured label elements."], ["Multilingual layouts", "Support side-by-side or market-specific language configurations without creating overflow, duplication, or incorrect language placement."] ].map(([title,text]) => <div className="pl-anatomy-item" key={title}><div className="marker"><CheckIcon /></div><div><strong>{title}</strong><span>{text}</span></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section pl-soft">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Multilingual Label Artwork and DTP</h2>
            <p className="pl-lead">Translated content ultimately has to return to artwork, packaging files, templates, or structured systems in a usable form. Stepes supports translation plus multilingual production for common label formats.</p>
          </div>
          <div className="pl-dtp-grid">
            <div>
              <h3 className="pl-h3" style={{marginBottom:22}}>Common File Formats</h3>
              <div className="pl-format-list">
                {["Adobe Illustrator","Adobe InDesign","PDF","Microsoft Word","Microsoft Excel","XML","CSV","Structured text exports"].map(x => <div className="pl-format" key={x}>{x}</div>)}
              </div>
              <p className="pl-context-note">For broader packaging copy, brand messaging, graphics, and retail packaging adaptation, explore our dedicated packaging localization services.</p>
              <div style={{marginTop:14}}><a className="pl-link" href={links.packaging}><span>Packaging Translation Services</span><ArrowIcon /></a></div>
            </div>
            <div className="pl-qa-mini">
              <h3 className="pl-h3">Artwork QA Checks</h3>
              <div className="pl-check-grid">
                {["Missing translations","Text overflow","Incorrect language placement","Character corruption","Numbers and units","Warnings and symbols","Font support","Line breaks and alignment"].map(x => <div className="pl-check" key={x}><CheckIcon /><span>{x}</span></div>)}
              </div>
              <p className="pl-panel-note">Our multilingual production specialists address text expansion, typography, line breaks, fonts, language placement, bidirectional scripts, and visual hierarchy so the final label works in context.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Keep Product Information Consistent Across Every Document</h2>
            <p className="pl-lead">The same warning, product term, storage instruction, or safety phrase may appear across labels, SDSs, IFUs, manuals, packaging, software, and regulatory content. Translating each asset independently can create terminology drift.</p>
          </div>
          <div className="pl-consistency-layout">
            <div className="pl-ecosystem" aria-hidden="true">
              <div className="pl-orbit"></div>
              <div className="pl-ecosystem-core">Approved<br/>Product<br/>Terminology</div>
              <div className="pl-orbit-label l1">Labels</div>
              <div className="pl-orbit-label l2">SDSs</div>
              <div className="pl-orbit-label l3">IFUs</div>
              <div className="pl-orbit-label l4">Packaging</div>
              <div className="pl-orbit-label l5">Manuals</div>
              <div className="pl-orbit-label l6">Software</div>
            </div>
            <div className="pl-consistency-copy">
              <h3 className="pl-h3">One multilingual language asset foundation</h3>
              <p>Translation memories preserve approved translations. Terminology databases control critical terms. Project instructions capture product-specific conventions. Reviewer feedback can be incorporated into future work.</p>
              <p>This helps maintain consistency from one label to another and across the full product information ecosystem.</p>
              <div className="pl-industry-links">
                <a className="pl-link" href={links.sds}><span>SDS Translation Services</span><ArrowIcon /></a>
                <a className="pl-link" href={links.sop}><span>SOP Translation Services</span><ArrowIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section pl-blush">
        <div className="pl-shell">
          <div className="pl-sku-wrap">
            <div className="pl-heading-group tablet-center mobile-center">
              <p className="pl-eyebrow">Enterprise Labeling Operations</p>
              <h2 className="pl-h2">Multilingual Labeling for Hundreds or Thousands of SKUs</h2>
              <p className="pl-lead">One short label can be simple. The same label multiplied across hundreds of products, languages, markets, package sizes, and revisions becomes a global content operation.</p>
              <div className="pl-sku-list">
                {["Product families","Regional variants","Multiple package sizes","New market launches","Regulatory updates","Product redesigns","Safety updates","Ongoing revisions"].map(x => <div key={x}>{x}</div>)}
              </div>
            </div>
            <div>
              <div className="pl-formula" aria-label="SKU times language times market times revision">
                <strong>SKU</strong><span>×</span><strong>Language</strong><span>×</span><strong>Market</strong><span>×</span><strong>Revision</strong>
              </div>
              <p className="pl-panel-note">Stepes uses translation memory and content analysis to identify what has already been approved, what changed, and what requires new linguistic attention. This reduces duplicate work while improving consistency across products and versions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell pl-tm-grid">
          <div className="pl-heading-group tablet-center mobile-center">
            <p className="pl-eyebrow">Translation Memory</p>
            <h2 className="pl-h2">Reuse Approved Label Language Across Products and Revisions</h2>
            <p className="pl-lead">Labels frequently repeat approved warnings, storage instructions, safety phrases, usage directions, manufacturer information, and other standardized language.</p>
            <div className="pl-body">
              <p>Translation memory preserves previously translated segments so approved content can be identified and reused in future projects. When a label changes, the goal is not to translate everything again—it is to understand what changed, what remains approved, and what requires new linguistic attention.</p>
            </div>
            <a className="pl-link" href={links.translationMemory}><span>Translation Memory</span><ArrowIcon /></a>
          </div>
          <div className="pl-tm-panel" aria-label="Translation memory example">
            <div className="pl-tm-head"><strong>Label Revision Analysis</strong><span>Change-only update</span></div>
            <div className="pl-tm-row"><span className="pl-tm-match">Approved</span><p>Store in a cool, dry place away from direct sunlight.</p></div>
            <div className="pl-tm-row"><span className="pl-tm-match">Changed</span><p>Use protective gloves and eye protection during handling.</p></div>
            <div className="pl-tm-row"><span className="pl-tm-match">New</span><p>Updated market-specific disposal instruction requires translation and review.</p></div>
          </div>
        </div>
      </section>

      <section className="pl-section pl-soft">
        <div className="pl-shell">
          <div className="pl-heading-group scan-left">
            <h2 className="pl-h2">A Structured Product Label Translation Workflow</h2>
            <p className="pl-lead">Every labeling program has different regulatory, linguistic, artwork, and approval requirements. Stepes adapts the workflow while maintaining clear controls from source content through final delivery.</p>
          </div>
          <div className="pl-workflow">
            {workflow.map(([title,text], i) => <article className="pl-step" key={title}><span className="pl-step-num">Step {i+1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell pl-split">
          <div className="pl-heading-group tablet-center mobile-center">
            <h2 className="pl-h2">QA Designed for Short, High-Impact Content</h2>
            <p className="pl-lead">Labels may contain fewer words than manuals or reports, but individual errors can have greater consequences. Quality requirements should reflect the content's actual risk and purpose.</p>
          </div>
          <div>
            <div className="pl-qa-grid">
              {qaItems.map(x => <div className="pl-qa-item" key={x}><CheckIcon /><span>{x}</span></div>)}
            </div>
            <p className="pl-panel-note">Stepes combines professional translation, specialist review, terminology controls, automated checks, in-context review, and stakeholder approval as appropriate for the labeling program.</p>
          </div>
        </div>
      </section>

      <section className="pl-section pl-dark">
        <div className="pl-shell pl-ai-grid">
          <div className="pl-heading-group tablet-center mobile-center">
            <h2 className="pl-h2">AI-Enabled Label Translation With Expert Human Review</h2>
            <p className="pl-lead">AI can accelerate multilingual content processing, but product labeling requires a more thoughtful approach than sending every string through the same automated workflow.</p>
            <div className="pl-body">
              <p>Stepes can combine AI translation, translation memory, approved terminology, professional linguists, expert reviewers, and automated QA according to content type and risk.</p>
              <p>For high-impact information such as safety warnings, hazard communication, pharmaceutical content, medical device information, dosage, and other regulated text, human linguistic expertise remains central to the quality process.</p>
            </div>
            <a className="pl-link" href={links.aiHuman}><span>AI-Powered Translation Workflows</span><ArrowIcon /></a>
          </div>
          <div className="pl-ai-flow" aria-label="AI and human review workflow">
            <div className="pl-ai-node"><strong>TM + Approved Terminology</strong><span>Reuse validated language before new translation begins.</span></div>
            <div className="pl-ai-arrow">↓</div>
            <div className="pl-ai-node"><strong>AI-Enabled Translation</strong><span>Accelerate repetitive or high-volume label content where appropriate.</span></div>
            <div className="pl-ai-arrow">↓</div>
            <div className="pl-ai-node"><strong>Professional Human Review</strong><span>Validate meaning, risk-sensitive terminology, target-market quality, and context.</span></div>
            <div className="pl-ai-arrow">↓</div>
            <div className="pl-ai-node"><strong>Automated + In-Context QA</strong><span>Check content and production integrity before delivery.</span></div>
          </div>
        </div>
      </section>

      <section className="pl-section pl-digital-section">
        <div className="pl-shell pl-digital-grid">
          <div className="pl-phone" aria-hidden="true">
            <div className="pl-phone-inner">
              <div className="pl-qr">{Array.from({length:25}).map((_,i)=><span key={i} style={{opacity:[2,7,11,13,17,22].includes(i)?0:1}}></span>)}</div>
              <h3>Digital Product Information</h3>
              <p>Localized instructions, product data, safety information, and supporting content synchronized with the physical label.</p>
            </div>
          </div>
          <div className="pl-heading-group tablet-center mobile-center">
            <p className="pl-eyebrow">Connected Product Information</p>
            <h2 className="pl-h2">Digital Labels and the Future of Product Information</h2>
            <p className="pl-lead">QR codes, electronic instructions, online product information, structured content systems, and digital labeling frameworks increasingly connect limited physical label space with richer product information.</p>
            <div className="pl-body">
              <p>For localization teams, this creates an important requirement: the physical label and the digital information it points to must remain linguistically synchronized.</p>
              <p>Stepes supports both sides of this product information ecosystem—from short physical labels and packaging content to digital instructions, websites, structured files, software, and supporting documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Product Label Translation in 100+ Languages</h2>
            <p className="pl-lead">Support major markets throughout Europe, Asia, the Americas, the Middle East, and Africa, including market-specific language variants where terminology and consumer expectations differ.</p>
          </div>
          <div className="pl-language-grid">
            <div className="pl-language-col"><strong>Europe</strong><p>French<br/>German<br/>Italian<br/>Spanish<br/>Dutch<br/>Polish<br/>Czech<br/>Nordic languages</p></div>
            <div className="pl-language-col"><strong>Asia Pacific</strong><p>Japanese<br/>Korean<br/>Simplified Chinese<br/>Traditional Chinese<br/>Vietnamese<br/>Thai<br/>Indonesian<br/>Malay</p></div>
            <div className="pl-language-col"><strong>Americas</strong><p>US Spanish<br/>Latin American Spanish<br/>Brazilian Portuguese<br/>Canadian French<br/>English market variants</p></div>
            <div className="pl-language-col"><strong>Middle East & More</strong><p>Arabic<br/>Hebrew<br/>Turkish<br/>Hindi<br/>Greek<br/>Romanian<br/>And many more</p></div>
          </div>
          <div style={{marginTop:28,textAlign:"center"}}><a className="pl-link" href={links.languages}><span>Explore All Translation Languages</span><ArrowIcon /></a></div>
        </div>
      </section>

      <section className="pl-section pl-soft">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <p className="pl-eyebrow">Why Stepes</p>
            <h2 className="pl-h2">Built for Complex Global Labeling Programs</h2>
            <p className="pl-lead">Product labeling demands more than generic translation capacity. Stepes combines specialized language expertise, reusable multilingual assets, scalable workflows, and production support for ongoing global programs.</p>
          </div>
          <div className="pl-diff-grid">
            {differentiators.map(([title,text]) => <article className="pl-diff" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="pl-section">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Translate the Entire Product Information Ecosystem</h2>
            <p className="pl-lead">Product labels work best when terminology remains consistent with all the documentation that surrounds the product. Stepes supports multilingual content across the full product lifecycle.</p>
          </div>
          <div className="pl-related">
            {related.map(([title,text,href,label]) => <div className="pl-related-row" key={title}><h3>{title}</h3><p>{text}</p><a className="pl-link" href={href}><span>{label}</span><ArrowIcon /></a></div>)}
          </div>
        </div>
      </section>

      <section className="pl-section pl-soft">
        <div className="pl-shell">
          <div className="pl-heading-group center mobile-center">
            <h2 className="pl-h2">Product Label Translation FAQs</h2>
          </div>
          <div className="pl-faq-wrap">
            {faqs.map(([q,a],i) => <details className="pl-faq" key={q} open={i===0}><summary>{q}</summary><div className="pl-faq-answer">{a}</div></details>)}
          </div>
        </div>
      </section>

      <section className="pl-final">
        <div className="pl-shell pl-final-inner">
          <h2 className="pl-h2">Ready to Take Your Product Labels Global?</h2>
          <p>Whether you're launching a single product in a new market or managing multilingual labels across thousands of SKUs, Stepes provides the translation, terminology management, human review, quality assurance, and artwork support needed to keep global labeling programs moving efficiently.</p>
          <div className="pl-btns">
            <a className="pl-btn pl-btn-primary" href={links.quote}>Get a Translation Quote <ArrowIcon /></a>
            <a className="pl-btn pl-btn-secondary" href={links.contact}>Contact Our Team</a>
          </div>
        </div>
      </section>
    </main>
  );
}
