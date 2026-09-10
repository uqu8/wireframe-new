import React, { useState } from "react";

const links = {
  quote: "https://www.stepes.com/document-translation-quote/",
  contact: "https://www.stepes.com/contact-sales/",
  packaging: "https://www.stepes.com/packaging-translation-services/",
  sop: "https://www.stepes.com/sop-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  agriculture: "https://www.stepes.com/agriculture-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  retail: "https://www.stepes.com/retail-ecommerce-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  api: "https://www.stepes.com/translation-api/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  workflow: "https://www.stepes.com/translation-workflow-automation/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  aiHuman: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  formats: "https://www.stepes.com/resources/file-format-support/",
  languages: "https://www.stepes.com/translation-languages/",
};

const proofItems = [
  ["100+ Languages", "Global language coverage"],
  ["AI + Human Workflows", "Matched to content risk"],
  ["ISO-Certified Processes", "Structured quality management"],
  ["Enterprise Scale", "Portfolios, SKUs, and markets"],
];

const lifecycle = [
  ["Develop", "Product specifications, formulations, ingredients, raw materials, and supplier information"],
  ["Produce", "SOPs, work instructions, sanitation procedures, equipment content, and workforce communications"],
  ["Control", "Food safety, quality assurance, testing, audits, corrective actions, and controlled documentation"],
  ["Package", "Product names, ingredients, allergens, nutrition information, claims, instructions, and artwork"],
  ["Sell", "PIM content, retailer listings, marketplaces, product pages, catalogs, and digital commerce"],
  ["Engage", "Websites, campaigns, recipes, menus, social media, video, and consumer communications"],
];

const capabilityGroups = [
  {
    icon: "ingredient",
    title: "Product & Ingredient Content",
    copy: "Build multilingual consistency from the source with professional translation of product specifications, ingredient specifications, formulations, raw-material information, supplier documentation, certificates, technical data, and supporting product content.",
  },
  {
    icon: "shield",
    title: "Food Safety & Quality",
    copy: "Translate HACCP documentation, food safety plans, sanitation procedures, allergen controls, inspection materials, testing documentation, audit content, recall procedures, corrective actions, and other quality-critical information.",
  },
  {
    icon: "factory",
    title: "Manufacturing & Operations",
    copy: "Give production teams clear multilingual access to SOPs, SSOPs, work instructions, equipment procedures, operator documentation, maintenance information, safety communications, and employee training.",
  },
  {
    icon: "package",
    title: "Labels & Packaging",
    copy: "Localize product names, ingredients, allergen statements, nutrition information, weights and volumes, storage conditions, preparation instructions, claims, warnings, certifications, package copy, and multilingual artwork.",
  },
  {
    icon: "commerce",
    title: "Digital Commerce & Product Information",
    copy: "Keep product information current across PIM and PXM systems, retailer portals, online marketplaces, product detail pages, digital catalogs, QR-connected experiences, and consumer applications.",
  },
  {
    icon: "spark",
    title: "Marketing & Consumer Experience",
    copy: "Adapt websites, campaigns, product launches, menus, recipes, advertisements, social content, videos, promotions, point-of-sale materials, and brand communications for local audiences.",
  },
];

const labelContent = [
  "Product and common names",
  "Ingredient declarations",
  "Allergen statements",
  "Nutrition information",
  "Serving information",
  "Net quantity, weight, and volume",
  "Dates and shelf-life information",
  "Storage conditions",
  "Preparation and cooking instructions",
  "Warnings and consumer notices",
  "Product claims and certifications",
  "Country-of-origin information",
  "Package descriptions and marketing copy",
];

const regulatoryItems = [
  ["Approved Source Translation", "Translate customer-approved regulatory and product information without changing its intended meaning."],
  ["Market-Specific Language", "Use the appropriate target language, regional variant, terminology, and locale conventions for each market."],
  ["Controlled Terminology", "Apply approved ingredient, allergen, product, quality, and brand terminology consistently across languages."],
  ["Multilingual Artwork", "Integrate translated information into package layouts while preserving hierarchy, readability, and design intent."],
  ["Revision Management", "Reuse approved content and update affected translations efficiently as formulations, claims, packaging, or source information change."],
  ["Linguistic Quality Assurance", "Check translated content for accuracy, completeness, terminology, numbers, units, formatting, and in-context presentation."],
];

const qaItems = [
  ["Ingredient Accuracy", "Apply approved ingredient terminology consistently across specifications, labels, manufacturing content, product databases, and digital channels."],
  ["Allergen Consistency", "Identify and verify allergen terminology and related declarations according to approved source content and project requirements."],
  ["Numbers and Numerical Consistency", "Check quantities, percentages, serving values, temperatures, dates, weights, volumes, nutrition values, and other numerical content for missing or changed information."],
  ["Units and Locale Conventions", "Review measurement formats, decimal conventions, dates, punctuation, and other locale-specific presentation requirements."],
  ["Translation Completeness", "Detect omitted, duplicated, untranslated, or incomplete content before final approval."],
  ["Terminology Verification", "Compare translated content against approved food, beverage, manufacturing, product, and brand terminology."],
  ["In-Context Review", "Evaluate labels, packaging, websites, digital product pages, and formatted documentation in the environment where users will actually see them."],
];

const foodSafetyContent = [
  "HACCP plans and supporting documentation",
  "Food safety plans",
  "Preventive-control documentation",
  "Sanitation SOPs and SSOPs",
  "Cleaning and sanitation procedures",
  "Allergen-control procedures",
  "Quality manuals",
  "Inspection procedures",
  "Sampling and testing documentation",
  "Hold-and-release procedures",
  "Deviation and corrective-action documentation",
  "Recall procedures",
  "Audit materials",
  "Supplier quality documentation",
  "Training materials",
  "Policies and controlled forms",
];

const workforceContent = [
  "Standard operating procedures",
  "Work instructions",
  "Operator guides",
  "Equipment instructions",
  "Cleaning and sanitation procedures",
  "Safety communications",
  "Workplace signage",
  "New-hire onboarding",
  "Quality procedures",
  "Training presentations",
  "eLearning courses",
  "Instructional videos",
  "Employee communications",
];

const beverageGroups = [
  ["Product & Packaging", "Product names, ingredients, nutrition information, labels, bottles, cans, cartons, multipacks, and supporting packaging content."],
  ["Production & Quality", "Manufacturing procedures, specifications, quality documentation, sanitation materials, training, equipment information, and supplier communications."],
  ["Commercial Content", "Product descriptions, distributor materials, sales presentations, catalogs, retailer information, product launches, and trade communications."],
  ["Brand & Consumer Content", "Websites, campaigns, promotions, tasting notes, menus, serving recommendations, social content, video, and point-of-sale materials."],
];

const digitalChannels = [
  ["Packaging & Labels", "Maintain approved language on the physical product."],
  ["PIM & Product Data", "Translate names, descriptions, attributes, ingredients, specifications, and structured product fields."],
  ["Retailer & Marketplace Content", "Keep product information accurate and consistent across third-party commerce channels."],
  ["Product Websites", "Localize rich product descriptions, nutritional and ingredient information, recipes, FAQs, campaigns, and supporting content."],
  ["QR-Connected Experiences", "Extend localized product information beyond the available space on physical packaging."],
  ["Mobile & Consumer Applications", "Provide locally relevant product experiences across mobile platforms and digital services."],
];

const marketingContent = [
  "Global and local campaigns",
  "Product launches",
  "Advertising",
  "Websites and landing pages",
  "Social media",
  "Email campaigns",
  "Product descriptions",
  "Recipes",
  "Menus",
  "Slogans and taglines",
  "Video and multimedia",
  "Promotional materials",
  "Point-of-sale displays",
  "Retail campaigns",
  "Distributor marketing",
  "Brand guidelines",
];

const terminologyItems = [
  "Ingredient names",
  "Allergen terminology",
  "Product and brand names",
  "Flavor and sensory descriptions",
  "Processing terminology",
  "Food safety terminology",
  "Quality terminology",
  "Claims and certifications",
  "Preparation language",
  "Manufacturing terminology",
  "Regulatory terminology",
  "Internal company terminology",
];

const workflowGroups = [
  {
    title: "High-Risk Product & Safety Content",
    examples: "Labels, ingredients, allergens, safety procedures, critical quality documentation, controlled product information",
    approach: "Professional translation, qualified linguistic review, approved terminology, automated QA, specialist validation, and controlled approval as required",
  },
  {
    title: "Recurring Operational Content",
    examples: "SOPs, work instructions, internal procedures, manufacturing documentation, training updates",
    approach: "Translation memory, controlled terminology, AI-assisted translation where appropriate, professional editing or review, and recurring workflow automation",
  },
  {
    title: "High-Volume Digital Product Content",
    examples: "Product catalogs, retailer listings, structured data, marketplace descriptions, frequently updated commerce content",
    approach: "AI-enabled translation, reusable language assets, automated QA, human sampling, exception-based review, or professional post-editing according to quality requirements",
  },
  {
    title: "Brand-Sensitive Marketing",
    examples: "Campaigns, slogans, promotional messaging, product launches, recipes, brand storytelling",
    approach: "Professional localization, transcreation, brand guidance, cultural adaptation, and in-market review where appropriate",
  },
];

const enterpriseItems = [
  ["Translation Memory", "Reuse previously approved translations instead of retranslating unchanged or repeated content."],
  ["Terminology Management", "Maintain approved product, ingredient, technical, regulatory, and brand language across teams."],
  ["AI-Enabled Translation", "Accelerate high-volume production while applying the human oversight appropriate for each content category."],
  ["Workflow Automation", "Automate intake, routing, review, approvals, delivery, and recurring translation processes."],
  ["Translation API", "Connect localization with websites, PIM systems, applications, content repositories, and other enterprise platforms."],
  ["Centralized Translation Management", "Manage projects, files, languages, reviewers, deadlines, language assets, and quality requirements through a connected translation environment."],
  ["Quality Reporting", "Track translation quality, recurring findings, terminology issues, review status, and program performance across languages and content types."],
];

const fileGroups = [
  ["Documents", "Microsoft Word, Excel, PowerPoint, PDF, and other business formats"],
  ["Package Artwork", "Adobe InDesign, Illustrator, Photoshop, editable PDFs, and graphic-design files"],
  ["Structured Product Content", "XML, HTML, CSV, spreadsheets, database exports, product feeds, and structured data"],
  ["Digital Content", "Websites, CMS exports, product pages, applications, catalogs, and eCommerce content"],
  ["Training & Multimedia", "eLearning files, subtitles, scripts, video, audio, and presentation content"],
  ["Technical Content", "Specifications, procedures, manuals, tables, diagrams, and production documentation"],
];

const languages = [
  "Spanish",
  "French",
  "French Canadian",
  "German",
  "Italian",
  "Portuguese",
  "Brazilian Portuguese",
  "Simplified Chinese",
  "Traditional Chinese",
  "Japanese",
  "Korean",
  "Arabic",
  "Dutch",
  "Polish",
  "Thai",
  "Vietnamese",
];

const languageMarks = {
  Spanish: "ES",
  French: "FR",
  "French Canadian": "FR-CA",
  German: "DE",
  Italian: "IT",
  Portuguese: "PT",
  "Brazilian Portuguese": "PT-BR",
  "Simplified Chinese": "简",
  "Traditional Chinese": "繁",
  Japanese: "あ",
  Korean: "한",
  Arabic: "ع",
  Dutch: "NL",
  Polish: "PL",
  Thai: "ก",
  Vietnamese: "VI",
};

const related = [
  ["Packaging Translation", "Translate product labels, cartons, bottles, cans, pouches, packaging copy, consumer information, and multilingual artwork.", links.packaging],
  ["SOP Translation", "Maintain clear, controlled multilingual procedures for production, food safety, quality, sanitation, and operations.", links.sop],
  ["Manufacturing Translation", "Support global plants with technical documentation, production content, workforce communications, and operational training.", links.manufacturing],
  ["Retail & E-commerce Translation", "Localize product data, digital storefronts, retailer content, marketplaces, customer journeys, and continuously changing commerce content.", links.retail],
  ["Marketing Translation", "Adapt campaigns, product launches, websites, advertising, and brand communications for international consumers.", links.marketing],
  ["Agriculture Translation", "Connect upstream agricultural, ingredient, supplier, production, and global-market content with specialized multilingual support.", links.agriculture],
];

const differentiators = [
  ["Food & Beverage Expertise", "Work with professional linguists selected for the subject matter, language, content type, and quality requirements of your project."],
  ["AI + Human Workflows", "Combine modern AI translation with professional linguistic expertise rather than applying the same production model to every type of content."],
  ["Risk-Based Quality Assurance", "Apply terminology checks, numerical validation, completeness checks, professional review, in-context QA, and additional oversight according to content requirements."],
  ["Governed Language Assets", "Use approved terminology and translation memory to preserve language decisions across products, content streams, and future updates."],
  ["Multilingual Production", "Move from translation through formatted documents, packaging artwork, structured product content, websites, training, and multimedia."],
  ["Enterprise Scalability", "Support individual projects or ongoing translation programs across brands, SKUs, facilities, departments, languages, and markets."],
  ["Connected Technology", "Use centralized translation management, APIs, automation, and reusable language assets to integrate localization into global content operations."],
  ["100+ Languages", "Manage international translation through one partner while maintaining language- and market-specific professional expertise."],
];

const faqs = [
  ["What types of food and beverage content can Stepes translate?", "Stepes translates content across the full food and beverage lifecycle, including product specifications, ingredients, labels, nutrition information, packaging, HACCP and food-safety documentation, SOPs, manufacturing instructions, employee training, eCommerce product information, websites, retailer content, marketing campaigns, recipes, menus, and multimedia."],
  ["Can Stepes translate food labels and nutrition information?", "Yes. Stepes provides professional translation for food and beverage labels, including product names, ingredients, allergen statements, nutrition information, serving information, quantities, storage conditions, preparation instructions, warnings, claims, and other customer-approved label content. We can also support multilingual desktop publishing and package-artwork production."],
  ["How does Stepes handle ingredients and allergen terminology?", "Stepes can create or use customer-approved multilingual glossaries and termbases for ingredient names, allergens, product terminology, and other controlled language. Terminology checks, professional review, translation memory, and automated QA help keep important terms consistent across labels, manufacturing documentation, digital product information, and other content."],
  ["Does Stepes translate HACCP plans, SOPs, and food manufacturing documents?", "Yes. Stepes translates HACCP documentation, food-safety plans, SOPs, SSOPs, sanitation procedures, allergen controls, quality documentation, work instructions, inspection procedures, recall materials, audit content, training, and other food manufacturing documentation."],
  ["Can Stepes localize food and beverage packaging artwork?", "Yes. Stepes supports translation and multilingual desktop publishing for common packaging and design formats, including Adobe InDesign, Illustrator, editable PDFs, and other source files. Our teams can place translated content into artwork, manage text expansion, support multilingual layouts, and perform linguistic and visual QA."],
  ["Does Stepes provide regulatory consulting for food labels?", "Stepes provides professional translation and multilingual implementation of customer-approved regulatory and product content. We help ensure that approved source information is translated accurately, consistently, and appropriately for the specified target language and locale. Determining the underlying regulatory or legal requirements for a particular food product remains the responsibility of the customer's regulatory, legal, or other qualified specialists unless separately agreed as part of the service scope."],
  ["Does Stepes use AI for food and beverage translation?", "Yes. Stepes supports AI-enabled translation as part of flexible AI + human workflows. The appropriate approach depends on the content type, volume, risk, audience, quality requirements, and turnaround. High-risk content such as labels, allergens, food-safety information, and critical procedures can receive greater professional human oversight, while high-volume digital or internal content can use more automated workflows where appropriate."],
  ["How does Stepes check numbers, measurements, and other structured information?", "Stepes can combine automated translation QA with professional review to detect missing or changed numbers, percentages, dates, measurements, units, untranslated content, terminology deviations, and other repeatable issues. Human reviewers then evaluate meaning, context, readability, and subject-matter accuracy where professional judgment is required."],
  ["Can Stepes translate food and beverage content for eCommerce and retailer platforms?", "Yes. Stepes localizes product names, descriptions, ingredients, specifications, attributes, product feeds, retailer listings, online marketplaces, product-detail pages, digital catalogs, websites, and other digital commerce content. APIs and workflow automation can support ongoing localization for frequently changing product information."],
  ["Can Stepes maintain terminology across packaging, manufacturing, and marketing?", "Yes. Stepes terminology management and translation memory solutions help companies reuse approved language across different departments and content types. This makes it possible to maintain consistent product, ingredient, manufacturing, quality, and brand terminology across specifications, labels, SOPs, eCommerce, websites, and marketing."],
  ["What languages does Stepes support for food and beverage translation?", "Stepes provides professional food and beverage translation services in more than 100 languages and regional variants, including Spanish, French, French Canadian, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, Dutch, Polish, Thai, Vietnamese, and many others."],
];

function Icon({ name, size = 24 }) {
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
  const paths = {
    ingredient: <><path d="M7 21h10"/><path d="M9 21V11a3 3 0 0 1 6 0v10"/><path d="M12 8V3"/><path d="M12 5c-2.6 0-4-1.2-4.5-3 2.8-.3 4.3.8 4.5 3Z"/><path d="M12 6c2.6 0 4-1.2 4.5-3-2.8-.3-4.3.8-4.5 3Z"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    factory: <><path d="M3 21V9l6 3V9l6 3V5h6v16H3Z"/><path d="M7 17h1M11 17h1M15 17h1"/></>,
    package: <><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="M4 7v10l8 4 8-4V7"/><path d="M12 11v10"/></>,
    commerce: <><path d="M4 5h16v12H4z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M8 9h8M8 12h5"/></>,
    spark: <><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z"/><path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z"/><path d="M5 14v6M2 17h6"/></>,
    check: <path d="m5 12 4 4 10-10"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    bottle: <><path d="M9 3h6M10 3v4c0 1-2 2-2 4v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8c0-2-2-3-2-4V3"/><path d="M8 13h8"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>;
}

function EditorialLink({ href, children, light = false }) {
  return <a className={`editorial-link ${light ? "editorial-link-light" : ""}`} href={href}>{children}<Icon name="arrow" size={18}/></a>;
}

function HeroArtwork() {
  return (
    <svg className="hero-art" viewBox="0 0 620 500" role="img" aria-label="Food and beverage package, label information, and multilingual product content illustration">
      <defs>
        <linearGradient id="softFill" x1="0" x2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#faf7f8" />
        </linearGradient>
      </defs>
      <rect x="28" y="38" width="564" height="418" rx="38" fill="url(#softFill)" stroke="#ece7ea"/>
      <g stroke="#73717a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M140 132h120l32 38v192H108V170l32-38Z"/>
        <path d="M140 132v38h152"/>
        <rect x="139" y="207" width="122" height="102" rx="10"/>
        <path d="M155 228h59M155 245h88M155 262h78M155 281h48"/>
        <path d="M373 112h74"/>
        <path d="M386 112v48c0 10-18 22-18 41v131c0 19 12 31 31 31h22c19 0 31-12 31-31V201c0-19-18-31-18-41v-48"/>
        <rect x="382" y="226" width="56" height="68" rx="8"/>
        <path d="M392 245h36M392 260h29M392 276h32"/>
        <rect x="456" y="111" width="92" height="88" rx="18"/>
        <path d="M473 137h58M473 153h42M473 176h12M495 176h12M517 176h14"/>
      </g>
      <g stroke="#C11D63" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M257 177c49 0 77-4 111 9"/>
        <path d="m356 179 12 7-14 3"/>
        <path d="M449 186c16-6 27-14 35-27"/>
        <path d="m479 167 5-8 8 4"/>
        <path d="M226 342c60 20 126 17 183 3"/>
        <path d="m398 340 11 5-9 7"/>
      </g>
      <g fill="#fff" stroke="#ded8dc">
        <rect x="58" y="72" width="168" height="48" rx="24"/>
        <rect x="389" y="379" width="167" height="48" rx="24"/>
      </g>
      <g fill="#36343b" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="600">
        <text x="82" y="102">Ingredients · Allergens · QA</text>
        <text x="412" y="409">100+ global languages</text>
      </g>
    </svg>
  );
}

function LifecycleArtwork() {
  const xs = [76, 176, 276, 376, 476, 576];
  return (
    <svg className="wide-art" viewBox="0 0 650 220" aria-hidden="true">
      <path d="M76 110H576" stroke="#d9d4d7" strokeWidth="2"/>
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="110" r="34" fill="#fff" stroke={i === 3 ? "#C11D63" : "#aaa4a8"} strokeWidth={i === 3 ? 2.5 : 1.8}/>
          {i === 0 && <path d={`M${x-8} 119V101h16v18M${x-3} 101v-8h6v8`} stroke="#67636a" strokeWidth="1.8" fill="none"/>}
          {i === 1 && <path d={`M${x-12} 119v-17l9 5v-5l9 5v-11h10v23Z`} stroke="#67636a" strokeWidth="1.8" fill="none"/>}
          {i === 2 && <path d={`M${x} 92l14 6v9c0 10-6 18-14 22-8-4-14-12-14-22v-9l14-6Z`} stroke="#67636a" strokeWidth="1.8" fill="none"/>}
          {i === 3 && <path d={`M${x-12} 98h24v25h-24zM${x-6} 105h12M${x-6} 111h12`} stroke="#C11D63" strokeWidth="1.8" fill="none"/>}
          {i === 4 && <path d={`M${x-15} 97h30v21h-30zM${x-6} 124h12M${x} 118v6`} stroke="#67636a" strokeWidth="1.8" fill="none"/>}
          {i === 5 && <path d={`M${x} 95a15 15 0 1 0 0 30 15 15 0 0 0 0-30ZM${x-15} 110h30M${x} 95c6 7 6 23 0 30M${x} 95c-6 7-6 23 0 30`} stroke="#67636a" strokeWidth="1.8" fill="none"/>}
        </g>
      ))}
    </svg>
  );
}

function DigitalArtwork() {
  return (
    <svg className="wide-art digital-art" viewBox="0 0 650 300" aria-hidden="true">
      <g fill="#fff" stroke="#cfc9cd" strokeWidth="1.8">
        <rect x="260" y="85" width="130" height="150" rx="20"/>
        <rect x="55" y="55" width="150" height="92" rx="14"/>
        <rect x="445" y="45" width="150" height="105" rx="14"/>
        <rect x="55" y="190" width="150" height="65" rx="14"/>
        <rect x="445" y="195" width="150" height="65" rx="14"/>
      </g>
      <g stroke="#68636a" strokeWidth="1.7" fill="none" strokeLinecap="round">
        <path d="M290 112h70v98h-70zM300 128h48M300 142h41M300 174h48M300 188h32"/>
        <path d="M82 80h95M82 97h70M82 114h82"/>
        <path d="M472 68h96v58h-96zM487 84h66M487 101h48"/>
        <path d="M82 212h95M82 229h61"/>
        <path d="M472 216h96M472 233h75"/>
      </g>
      <g stroke="#C11D63" strokeWidth="2" fill="none">
        <path d="M260 140C225 125 208 112 205 105"/>
        <path d="M390 140C425 124 440 110 445 98"/>
        <path d="M260 190C225 204 210 215 205 222"/>
        <path d="M390 190C425 205 440 218 445 225"/>
      </g>
    </svg>
  );
}

function TerminologyArtwork() {
  const nodes = [
    [115, 82, "PACKAGE"],
    [535, 82, "FACTORY"],
    [115, 225, "ECOMMERCE"],
    [535, 225, "MARKETING"],
  ];
  return (
    <svg className="wide-art" viewBox="0 0 650 310" aria-hidden="true">
      <g stroke="#C11D63" strokeWidth="2" fill="none">
        <path d="M325 155 140 90M325 155 510 90M325 155 140 217M325 155 510 217"/>
      </g>
      <circle cx="325" cy="155" r="72" fill="#fff" stroke="#C11D63" strokeWidth="2.4"/>
      <text x="325" y="147" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#2f2c31">APPROVED</text>
      <text x="325" y="168" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="#2f2c31">TERMINOLOGY</text>
      {nodes.map(([x, y, label]) => (
        <g key={label}>
          <rect x={x-58} y={y-28} width="116" height="56" rx="18" fill="#fff" stroke="#cfc9cd" strokeWidth="1.6"/>
          <text x={x} y={y+5} textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#575158">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading-left" : ""}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p className={dark ? "muted-on-dark" : "section-intro"}>{intro}</p>}
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-panel">
      {faqs.map(([q, a], i) => {
        const expanded = open === i;
        return (
          <div className="faq-item" key={q}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={expanded}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(expanded ? -1 : i)}
            >
              <span>{q}</span>
              <span className="faq-plus" aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <div id={`faq-answer-${i}`} className={`faq-answer ${expanded ? "open" : ""}`}>
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FoodBeverageTranslationServicesWireframe() {
  return (
    <main className="stepes-food-page">
      <style>{styles}</style>

      <section className="hero section-white">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Food &amp; Beverage Translation Services</h1>
            <p className="hero-lede">Accurate multilingual content for products, packaging, manufacturing, and global markets.</p>
            <p>Stepes helps food and beverage companies translate and manage multilingual content across the complete product lifecycle—from ingredients, specifications, food safety, and manufacturing documentation to labels, packaging, eCommerce, marketing, and consumer experiences. Our professional linguists, AI-enabled workflows, terminology management, translation memory, and quality assurance help global brands communicate consistently across products, teams, languages, and markets.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
          <div className="hero-visual"><HeroArtwork /></div>
        </div>
      </section>

      <section className="credibility-band" aria-label="Stepes food and beverage translation capabilities">
        <div className="shell">
          <div className="credibility-panel">
            <div className="proof-grid">
              {proofItems.map(([title, copy]) => (
                <div className="proof-item" key={title}>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="connected-content">
        <div className="shell">
          <SectionHeading title="Global Food & Beverage Content Is Connected" intro="A food or beverage product generates multilingual information long before it reaches a store shelf—and that information continues to evolve long after launch." />
          <div className="split-editorial connected-grid">
            <div className="body-copy">
              <p>Product names and ingredient terminology begin in specifications and formulations. The same language moves into supplier documentation, manufacturing procedures, food safety systems, labels, packaging artwork, retailer databases, websites, eCommerce listings, campaigns, and consumer communications.</p>
              <p>When a formulation changes, an allergen statement is updated, a package is redesigned, or a new market is added, the multilingual content connected to that product may need to change with it.</p>
              <p>Stepes helps food and beverage companies manage these interconnected translation requirements as one global content operation. Approved terminology, translation memory, AI-enabled workflows, professional linguists, and quality controls work together to keep multilingual information accurate and consistent from production floor to point of sale.</p>
            </div>
            <div className="art-panel"><LifecycleArtwork /></div>
          </div>
          <div className="lifecycle-grid" id="food-beverage-lifecycle">
            {lifecycle.map(([title, copy]) => (
              <div className="lifecycle-item" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className="closing-line">One product can create hundreds of content touchpoints. Stepes helps keep the language behind them connected.</p>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading title="Translation Across the Food & Beverage Lifecycle" intro="Global food and beverage localization reaches across departments, systems, audiences, and content types. Stepes provides specialized translation services for the information companies rely on at every stage." />
          <div className="editorial-grid two-col">
            {capabilityGroups.map((item) => (
              <div className="icon-editorial" key={item.title}>
                <div className="icon-box"><Icon name={item.icon}/></div>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="food-labels">
        <div className="shell">
          <div className="split-editorial label-split">
            <div>
              <SectionHeading eyebrow="LABELS & PACKAGING" title="Food Label Translation Where Every Detail Matters" align="left" />
              <p className="lead-body">Food labels bring together language, structured data, regulatory information, product terminology, numbers, units, and package design in a very limited amount of space.</p>
              <p>That makes professional food label translation fundamentally different from translating ordinary business content. Stepes helps global food and beverage companies localize approved label content accurately and consistently while preserving the information consumers need to understand the product.</p>
              <EditorialLink href={links.packaging}>Explore Packaging Translation Services</EditorialLink>
              <EditorialLink href={links.dtp}>Explore Multilingual Desktop Publishing</EditorialLink>
            </div>
            <div className="content-panel">
              <h3>Food Label Content We Translate</h3>
              <div className="check-list two-col-list">
                {labelContent.map((item) => <div className="check-item" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
              </div>
            </div>
          </div>
          <div className="production-callout">
            <div>
              <h3>From Translation to Finished Multilingual Packaging</h3>
              <p>Stepes supports common packaging and design formats, including Adobe InDesign, Illustrator, editable PDFs, Microsoft Office files, structured content, and other publishing formats. Our multilingual desktop publishing specialists can place translated content into the target artwork, accommodate text expansion, support multilingual layouts, and perform visual QA before delivery.</p>
            </div>
            <div className="logic-line"><span>Language</span><span>Terminology</span><span>Numbers</span><span>Units</span><span>Artwork</span><span>Context</span></div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell narrow-shell">
          <SectionHeading eyebrow="MARKET-SPECIFIC INFORMATION" title="Food Labeling Is Local to Every Market" intro="Food information requirements do not follow one universal language model." />
          <div className="center-copy body-copy max-copy">
            <p>Products entering international markets may be subject to different requirements for language, ingredients, allergens, nutrition information, claims, presentation, and consumer disclosures. Multilingual packaging therefore needs to reflect both the approved source content and the requirements defined by the responsible regulatory and legal teams for each target market.</p>
            <p>From FDA labeling frameworks in the United States to European market-language requirements and bilingual labeling requirements in Canada, global food companies need reliable processes for turning approved regulatory content into accurate multilingual labels.</p>
          </div>
          <div className="divided-rows">
            {regulatoryItems.map(([title, copy]) => <div className="divided-row" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="boundary-note"><strong>Translation supports regulatory implementation.</strong> Stepes provides professional translation and multilingual content production based on customer-approved source information and market requirements. Regulatory, legal, and product-compliance determinations remain with the appropriate customer or regulatory specialists.</div>
        </div>
      </section>

      <section className="section section-dark" id="quality-assurance">
        <div className="shell">
          <SectionHeading dark eyebrow="FOOD-SPECIFIC QUALITY" title="Quality Checks Built for Food & Beverage Content" intro="Food and beverage content contains an unusually high concentration of information that must remain exact across languages." />
          <div className="dark-intro">Ingredient names cannot drift from approved terminology. Allergen information requires careful handling. Numbers, measurements, dates, temperatures, percentages, and serving information need to remain consistent. A translation can read fluently and still contain a critical structured-data error.</div>
          <div className="dark-rows">
            {qaItems.map(([title, copy]) => <div className="dark-row" key={title}><div className="dark-marker"><Icon name="check" size={18}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
          </div>
          <div className="dark-footer-row">
            <p>Automated QA does not replace professional judgment. It helps eliminate preventable errors so linguists and subject-matter reviewers can focus their expertise on meaning, context, terminology, readability, and market appropriateness.</p>
            <EditorialLink href={links.qa} light>Explore Translation Quality Assurance</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-light" id="food-safety">
        <div className="shell">
          <div className="split-editorial safety-grid">
            <div>
              <SectionHeading title="Multilingual Food Safety and Quality Across Every Facility" align="left" />
              <p className="lead-body">Food safety depends on people being able to understand and follow controlled procedures consistently.</p>
              <p>For global food and beverage manufacturers, those procedures may need to reach production employees, quality teams, contractors, suppliers, managers, auditors, and other stakeholders across multiple facilities and languages.</p>
              <p>Rather than treating each updated document as an isolated translation, Stepes can reuse approved terminology and translation memory across revisions. This helps maintain continuity as procedures evolve and reduces the need to repeatedly translate content that has already been validated.</p>
              <div className="link-row"><EditorialLink href={links.sop}>Explore SOP Translation Services</EditorialLink><EditorialLink href={links.manufacturing}>Explore Manufacturing Translation Services</EditorialLink></div>
            </div>
            <div className="content-panel no-shadow">
              <h3>Food Safety and Quality Content</h3>
              <div className="check-list two-col-list compact-list">
                {foodSafetyContent.map((item) => <div className="check-item" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading eyebrow="MULTILINGUAL WORKFORCE" title="Clear Instructions for Multilingual Production Teams" intro="Global food production depends on people—and production teams are increasingly multilingual." />
          <div className="workforce-layout">
            <div className="body-copy">
              <p>Plant employees need to understand the procedures that affect their daily work, from sanitation and equipment operation to food handling, quality checks, workplace safety, and process changes.</p>
              <p>Different workforce content may require different localization approaches. A controlled operating procedure may need professional translation and review, while a training video may also require localized on-screen text, subtitles, voiceover, or multimedia production.</p>
              <p>Stepes brings these content types together so global manufacturers can support multilingual employees with consistent terminology and clearer operational communication.</p>
              <div className="link-row"><EditorialLink href={links.elearning}>Explore eLearning Localization</EditorialLink><EditorialLink href={links.technical}>Explore Technical Translation Services</EditorialLink></div>
            </div>
            <div className="tag-cloud">
              {workforceContent.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush" id="beverage">
        <div className="shell">
          <div className="beverage-header">
            <div className="beverage-icon"><Icon name="bottle" size={36}/></div>
            <div><h2>Translation for Global Beverage Brands</h2><p>Beverage companies operate at the intersection of highly structured product information and highly creative consumer branding.</p></div>
          </div>
          <p className="max-copy">Stepes supports international beverage portfolios across categories including water, soft drinks, juice, coffee and tea, dairy and plant-based beverages, functional beverages, beer, wine, spirits, and other packaged drinks.</p>
          <div className="four-up editorial-four">
            {beverageGroups.map(([title, copy]) => <div className="plain-block" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <p className="closing-line left-close">For brand-sensitive beverage content, literal translation is often not enough. Stepes can apply localization and transcreation to preserve the intended voice, positioning, and consumer appeal while maintaining approved product terminology.</p>
        </div>
      </section>

      <section className="section section-white" id="digital-product-content">
        <div className="shell">
          <SectionHeading eyebrow="PHYSICAL + DIGITAL PRODUCT CONTENT" title="Product Information Doesn't Stop at the Package" intro="A food or beverage product increasingly exists in two connected worlds: the physical product on the shelf and the digital information surrounding it." />
          <div className="split-editorial digital-grid">
            <div className="art-panel"><DigitalArtwork /></div>
            <div className="body-copy">
              <p>Consumers may encounter the same product through a supermarket website, online marketplace, mobile application, digital catalog, product-detail page, QR-enabled experience, or brand website before or after they ever hold the package.</p>
              <p>Meanwhile, retailers, distributors, and internal teams may maintain additional versions of that product information inside PIM, PXM, content-management, and commerce systems.</p>
              <div className="question-callout">How do you keep multilingual product information synchronized everywhere the product appears?</div>
              <p>Using translation APIs, workflow automation, terminology management, and translation memory, Stepes can connect localization with the systems where product content is created and updated.</p>
              <div className="link-row"><EditorialLink href={links.retail}>Explore Retail & E-commerce Translation</EditorialLink><EditorialLink href={links.api}>Explore Translation API</EditorialLink></div>
            </div>
          </div>
          <div className="digital-channel-grid">
            {digitalChannels.map(([title, copy]) => <div className="digital-channel" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <div className="split-editorial marketing-grid">
            <div>
              <SectionHeading eyebrow="BRAND & CONSUMER EXPERIENCE" title="Food & Beverage Marketing That Sounds Local" align="left" />
              <p className="lead-body">Food is cultural.</p>
              <p>Words describing flavor, texture, freshness, indulgence, preparation, tradition, health, convenience, or premium quality can carry very different associations from one market to another. A message that works perfectly in one language may sound unnatural—or simply unappetizing—when translated literally.</p>
              <p>Stepes helps food and beverage brands adapt consumer-facing content so it communicates naturally while preserving the original product proposition and brand identity.</p>
              <div className="contrast-panel"><strong>Translation for facts. Transcreation for ideas.</strong><p>Ingredient statements, nutrition information, specifications, and manufacturing procedures require controlled translation built around accuracy and consistency. Creative headlines, campaigns, product positioning, and brand storytelling may require a more adaptive approach.</p></div>
              <EditorialLink href={links.marketing}>Explore Marketing Translation Services</EditorialLink>
            </div>
            <div className="content-panel no-shadow">
              <h3>Marketing Content We Localize</h3>
              <div className="check-list two-col-list compact-list">
                {marketingContent.map((item) => <div className="check-item" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="terminology">
        <div className="shell">
          <SectionHeading eyebrow="TERMINOLOGY GOVERNANCE" title="One Food & Beverage Vocabulary Across Every Product and Market" intro="The same product terms can appear in dozens of places. If every team translates those terms independently, inconsistencies multiply." />
          <div className="split-editorial terminology-grid">
            <div className="art-panel"><TerminologyArtwork /></div>
            <div className="body-copy">
              <p>Stepes helps food and beverage companies establish and govern approved multilingual terminology so important language decisions can be shared across products, departments, content types, and markets.</p>
              <p>Multilingual termbases and approved glossaries give translators, reviewers, AI workflows, and internal stakeholders a common language foundation. Automated terminology checks can then identify deviations from preferred terms during translation and QA.</p>
              <div className="quote-line">Create the terminology once. Apply it everywhere.</div>
              <div className="link-row"><EditorialLink href={links.terminology}>Explore Terminology Management</EditorialLink><EditorialLink href={links.tm}>Explore Translation Memory</EditorialLink></div>
            </div>
          </div>
          <div className="term-grid">{terminologyItems.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="section section-dark" id="ai-human-workflows">
        <div className="shell">
          <SectionHeading dark eyebrow="AI + HUMAN TRANSLATION" title="The Right Translation Workflow for Every Type of Content" intro="Not every food and beverage translation carries the same risk, business value, volume, lifespan, or brand sensitivity." />
          <p className="dark-intro">A food-safety procedure should not necessarily follow the same workflow as thousands of short eCommerce descriptions. A global campaign should not be handled like an ingredient declaration. Stepes uses flexible AI + human translation workflows so the level of professional review can be matched to the content.</p>
          <div className="workflow-table">
            {workflowGroups.map((item) => <div className="workflow-row" key={item.title}><div><h3>{item.title}</h3></div><div><span>Typical content</span><p>{item.examples}</p></div><div><span>Typical approach</span><p>{item.approach}</p></div></div>)}
          </div>
          <div className="dark-footer-row">
            <p><strong>Fit the workflow to the content risk.</strong> AI can make multilingual production substantially faster, particularly for large and frequently changing content streams. Professional linguists remain essential wherever meaning, safety, regulatory sensitivity, brand voice, ambiguity, or cultural context require human judgment.</p>
            <EditorialLink href={links.aiHuman} light>Explore AI + Human Translation Workflows</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-white" id="enterprise-localization">
        <div className="shell">
          <SectionHeading eyebrow="ENTERPRISE LANGUAGE OPERATIONS" title="Built for High-Volume Food & Beverage Localization" intro="Global food and beverage companies rarely manage one product in one language. They manage portfolios." />
          <div className="portfolio-line">Hundreds or thousands of SKUs <span/> Multiple brands <span/> Frequent formulation changes <span/> Seasonal products <span/> New packaging <span/> New markets</div>
          <div className="enterprise-grid">
            {enterpriseItems.map(([title, copy]) => <div className="enterprise-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="enterprise-actions"><EditorialLink href={links.enterprise}>Explore Enterprise Translation Management</EditorialLink><EditorialLink href={links.workflow}>Explore Workflow Automation</EditorialLink></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionHeading eyebrow="CONTENT & FILE SUPPORT" title="From Package Artwork to Product Data" intro="Food and beverage content comes in almost every format—and translation should fit into the way your teams already work." />
          <div className="file-grid">
            {fileGroups.map(([title, copy]) => <div className="file-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="center-link"><EditorialLink href={links.formats}>Explore File Format Support</EditorialLink></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading title="Food & Beverage Translation in 100+ Languages" intro="Take products, operations, and consumer experiences into international markets with professional food and beverage translation services across more than 100 languages and regional variants." />
          <div className="language-grid">{languages.map((language) => { const mark = languageMarks[language]; return <div className="language-item" key={language}><span className={`language-mark ${mark.length > 2 ? "language-mark-small" : ""}`} aria-hidden="true">{mark}</span><span>{language}</span></div>; })}</div>
          <p className="center-copy max-copy">Whether you are launching a consumer product in one new country or managing a multilingual portfolio across dozens of markets, Stepes can combine global language coverage with target-market linguistic expertise and centralized translation management.</p>
          <div className="center-link"><EditorialLink href={links.languages}>View All Languages</EditorialLink></div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="shell">
          <SectionHeading title="Connected Food & Beverage Translation Capabilities" intro="Food and beverage localization often crosses traditional service boundaries. Stepes brings related capabilities together so teams can manage complete multilingual content experiences through one partner." />
          <div className="related-grid">
            {related.map(([title, copy, href]) => <div className="related-item" key={title}><h3>{title}</h3><p>{copy}</p><EditorialLink href={href}>Explore {title}</EditorialLink></div>)}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading title="Built for the Speed and Complexity of Global Food & Beverage" intro="Food and beverage localization demands more than language coverage. It requires the ability to manage different content risks, frequent updates, specialized terminology, complex formats, and large international product portfolios." />
          <div className="differentiator-grid">
            {differentiators.map(([title, copy]) => <div className="diff-item" key={title}><div className="diff-rule"/><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-light faq-section" id="faq">
        <div className="shell faq-shell">
          <SectionHeading title="Frequently Asked Questions About Food & Beverage Translation" />
          <FAQ />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Take Your Food &amp; Beverage Products to Global Markets</h2>
            <p>From food labels and manufacturing procedures to product data, packaging, eCommerce, and consumer marketing, Stepes helps global food and beverage companies translate the content behind every product and customer experience.</p>
            <p>Bring together professional linguists, AI-enabled translation, approved terminology, translation memory, multilingual publishing, quality assurance, and enterprise workflow technology in one connected localization program.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-white" href={links.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
            <a className="btn btn-outline-white" href={links.contact}>Talk to an Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --pink-soft: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #252229;
    --body: #4f4a52;
    --muted: #706a72;
    --line: #e4dfe2;
    --light: #f7f6f7;
    --dark: #1d1b20;
    --radius-lg: 30px;
    --radius-md: 22px;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-food-page { font-family: Inter, Arial, sans-serif; color: var(--ink); background: #fff; overflow-x: clip; }
  .stepes-food-page * { min-width: 0; }
  .stepes-food-page h1, .stepes-food-page h2, .stepes-food-page h3, .stepes-food-page p, .stepes-food-page a, .stepes-food-page span { overflow-wrap: break-word; }
  .stepes-food-page a { color: inherit; }
  .shell { width: min(1280px, 100%); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .narrow-shell { width: min(1110px, 100%); }
  .section { padding: 96px 0; }
  .section-white { background: #fff; }
  .section-light { background: #f7f6f7; }
  .section-blush { background: #FDF2F7; }
  .section-dark { background: var(--dark); color: #fff; }
  h1, h2, h3 { font-family: "Inter Tight", Inter, Arial, sans-serif; margin: 0; font-weight: 600; letter-spacing: -0.02em; }
  h1 { font-size: 48px; line-height: 1.05; max-width: 690px; }
  h2 { font-size: 36px; line-height: 1.12; }
  h3 { font-size: 24px; line-height: 1.2; }
  p { font-size: 16px; line-height: 1.72; color: var(--body); margin: 0; }
  .eyebrow { color: var(--magenta); font-size: 11px; font-weight: 600; line-height: 1.2; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
  .eyebrow-dark { color: var(--pink-light); }
  .section-heading { max-width: 840px; margin: 0 auto 48px; text-align: center; }
  .section-heading-left { margin-left: 0; text-align: left; max-width: 760px; }
  .section-heading h2 + p { margin-top: 18px; }
  .section-intro { font-size: 18px; line-height: 1.65; color: #625d64; }
  .muted-on-dark { font-size: 18px; color: #c9c3c8; line-height: 1.65; }
  .body-copy p + p { margin-top: 18px; }
  .lead-body { font-size: 18px; line-height: 1.65; color: #38343a; margin-bottom: 16px; }
  .max-copy { max-width: 820px; }
  .center-copy { margin-left: auto; margin-right: auto; }
  .center-copy p, .center-copy { text-align: left; }
  .closing-line { max-width: 840px; margin: 38px auto 0; text-align: center; font-size: 18px; color: #38343a; }
  .left-close { margin-left: 0; text-align: left; }

  .hero { padding: 104px 0 96px; }
  .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 54px; }
  .hero-copy > p:not(.hero-lede) { max-width: 700px; margin-top: 20px; font-size: 17px; line-height: 1.72; }
  .hero-lede { margin-top: 24px; font-size: 22px; line-height: 1.45; color: #353139; max-width: 680px; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
  .btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; border: 1px solid transparent; transition: .2s ease; }
  .btn-primary, .btn-primary:visited { background: var(--magenta); color: #fff !important; }
  .btn-primary *, .btn-primary:visited * { color: #fff !important; stroke: #fff !important; }
  .btn-primary:hover, .btn-primary:focus-visible { background: var(--magenta-dark); transform: translateY(-1px); color: #fff !important; }
  .btn-secondary { background: #fff; border-color: #cbc5c9; color: #28252a; }
  .btn-secondary:hover, .btn-secondary:focus-visible { border-color: #8f878d; background: #faf9fa; }
  .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible { outline: 3px solid #efb6cd; outline-offset: 3px; }
  .hero-visual { min-width: 0; }
  .hero-art { width: 100%; height: auto; display: block; }

  .credibility-band { background: #fff; padding: 0 0 72px; }
  .credibility-panel { overflow: hidden; border: 1px solid var(--line); border-radius: 26px; background: #faf9fa; }
  .proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .proof-item { min-width: 0; padding: 24px 26px; border-right: 1px solid var(--line); }
  .proof-item:last-child { border-right: 0; }
  .proof-item strong { display: block; font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 17px; line-height: 1.3; font-weight: 600; color: #353139; }
  .proof-item span { display: block; margin-top: 5px; font-size: 16px; line-height: 1.45; font-weight: 400; color: #746e75; }

  .split-editorial { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .connected-grid { margin-top: 12px; }
  .art-panel { background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px; }
  .wide-art { width: 100%; height: auto; display: block; }
  .lifecycle-grid { display: grid; grid-template-columns: repeat(6, 1fr); margin-top: 54px; border-top: 1px solid #dcd7da; border-bottom: 1px solid #dcd7da; }
  .lifecycle-item { padding: 24px 18px 26px; border-right: 1px solid #dcd7da; }
  .lifecycle-item:last-child { border-right: 0; }
  .lifecycle-item h3 { font-size: 20px; margin-bottom: 10px; }
  .lifecycle-item p { font-size: 16px; line-height: 1.55; }

  .two-col { grid-template-columns: repeat(2, 1fr); }
  .editorial-grid { display: grid; gap: 0 54px; }
  .icon-editorial { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 28px 0; border-top: 1px solid var(--line); }
  .icon-editorial:nth-last-child(-n+2) { border-bottom: 1px solid var(--line); }
  .icon-box { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; background: #f6f2f4; color: var(--magenta); }
  .icon-editorial h3 { font-size: 22px; margin-bottom: 10px; }

  .label-split { align-items: start; }
  .content-panel { background: #fff; border: 1px solid #eadfe4; border-radius: var(--radius-lg); padding: 34px; box-shadow: 0 18px 50px rgba(60, 45, 52, .06); }
  .content-panel h3 { margin-bottom: 24px; }
  .no-shadow { box-shadow: none; }
  .check-list { display: grid; gap: 13px; }
  .two-col-list { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 22px; }
  .check-item { display: grid; grid-template-columns: 20px 1fr; gap: 10px; align-items: start; font-size: 16px; line-height: 1.45; color: #4c474e; }
  .check-item svg { color: var(--magenta); margin-top: 2px; }
  .production-callout { margin-top: 46px; border-radius: var(--radius-md); border: 1px solid #e3d8dd; background: rgba(255,255,255,.58); padding: 30px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 44px; align-items: center; }
  .production-callout h3 { margin-bottom: 10px; }
  .logic-line { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
  .logic-line span { padding: 8px 12px; border-radius: 999px; border: 1px solid #dbcbd2; background: #fff; font-size: 16px; font-weight: 600; color: #595057; }

  .editorial-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 20px; margin-right: 24px; color: var(--magenta) !important; text-decoration: none; font-size: 16px; font-weight: 600; min-height: 44px; }
  .editorial-link:hover { color: var(--magenta-dark) !important; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link-light { color: var(--pink-light) !important; }
  .editorial-link-light:hover { color: #fff !important; }

  .divided-rows { margin-top: 46px; border-top: 1px solid var(--line); }
  .divided-row { display: grid; grid-template-columns: .72fr 1.28fr; gap: 42px; padding: 25px 0; border-bottom: 1px solid var(--line); align-items: center; }
  .divided-row h3 { font-size: 20px; }
  .boundary-note { margin-top: 34px; border-left: 3px solid var(--magenta); padding: 18px 22px; background: #fbf8f9; color: #585159; font-size: 16px; line-height: 1.65; }
  .boundary-note strong { color: #302c31; }

  .section-dark .section-heading { max-width: 900px; }
  .dark-intro { max-width: 900px; margin: -14px auto 42px; text-align: center; color: #d3cdd1; font-size: 17px; line-height: 1.7; }
  .dark-rows { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 54px; border-top: 1px solid rgba(255,255,255,.14); }
  .dark-row { display: grid; grid-template-columns: 38px 1fr; gap: 14px; padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
  .dark-marker { color: var(--pink-light); padding-top: 2px; }
  .dark-row h3 { font-size: 20px; margin-bottom: 8px; color: #fff; }
  .dark-row p { color: #c8c1c6; }
  .dark-footer-row { margin-top: 38px; display: grid; grid-template-columns: 1fr auto; gap: 42px; align-items: center; }
  .dark-footer-row p { color: #d4cdd2; max-width: 860px; }
  .dark-footer-row strong { color: #fff; }

  .safety-grid, .marketing-grid { align-items: start; }
  .compact-list { gap: 12px 18px; }
  .link-row { display: flex; flex-wrap: wrap; align-items: center; }

  .workforce-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 68px; align-items: start; }
  .tag-cloud { display: flex; flex-wrap: wrap; gap: 11px; align-content: start; }
  .tag-cloud span, .term-grid span { font-size: 16px; line-height: 1.35; background: #faf8f9; border: 1px solid var(--line); border-radius: 999px; padding: 10px 14px; color: #504a51; }

  .beverage-header { display: grid; grid-template-columns: 68px 1fr; gap: 22px; align-items: start; max-width: 900px; margin-bottom: 28px; }
  .beverage-header h2 { margin-bottom: 14px; }
  .beverage-header p { font-size: 18px; }
  .beverage-icon { width: 64px; height: 64px; border-radius: 20px; background: #fff; border: 1px solid #eadfe4; color: var(--magenta); display: grid; place-items: center; }
  .four-up { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 40px; border-top: 1px solid #e0d5da; border-bottom: 1px solid #e0d5da; }
  .plain-block { padding: 28px 24px; border-right: 1px solid #e0d5da; }
  .plain-block:last-child { border-right: 0; }
  .plain-block h3 { font-size: 20px; margin-bottom: 10px; }

  .digital-grid { grid-template-columns: 1.05fr .95fr; }
  .question-callout { margin: 24px 0; padding: 20px 22px; border-left: 3px solid var(--magenta); font-size: 20px; font-weight: 600; line-height: 1.45; color: #302b31; background: #fbf8f9; }
  .digital-channel-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 50px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .digital-channel { padding: 26px 26px 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .digital-channel:nth-child(3n) { border-right: 0; }
  .digital-channel:nth-last-child(-n+3) { border-bottom: 0; }
  .digital-channel h3 { font-size: 20px; margin-bottom: 10px; }

  .contrast-panel { margin-top: 26px; border-radius: 18px; background: #fff; border: 1px solid var(--line); padding: 22px; }
  .contrast-panel strong { display: block; font-size: 18px; color: #302c31; margin-bottom: 8px; }

  .terminology-grid { grid-template-columns: 1fr .9fr; }
  .quote-line { margin-top: 24px; font-size: 22px; line-height: 1.4; font-weight: 600; color: #302c31; }
  .term-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 46px; }

  .workflow-table { border-top: 1px solid rgba(255,255,255,.18); }
  .workflow-row { display: grid; grid-template-columns: .8fr 1fr 1.35fr; gap: 34px; padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
  .workflow-row h3 { color: #fff; font-size: 21px; }
  .workflow-row span { display: block; color: var(--pink-light); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 8px; }
  .workflow-row p { color: #c9c2c7; }

  .portfolio-line { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 12px; margin: -10px auto 42px; font-size: 16px; font-weight: 600; color: #5e585f; }
  .portfolio-line span { width: 4px; height: 4px; border-radius: 50%; background: #bbb3b8; }
  .enterprise-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 54px; border-top: 1px solid var(--line); }
  .enterprise-item { padding: 26px 0; border-bottom: 1px solid var(--line); }
  .enterprise-item h3 { font-size: 20px; margin-bottom: 8px; }
  .enterprise-actions { display: flex; justify-content: center; flex-wrap: wrap; margin-top: 24px; }

  .file-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #dcd7da; border-left: 1px solid #dcd7da; }
  .file-item { padding: 26px; border-right: 1px solid #dcd7da; border-bottom: 1px solid #dcd7da; }
  .file-item h3 { font-size: 20px; margin-bottom: 10px; }
  .center-link { text-align: center; margin-top: 20px; }

  .language-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 34px; }
  .language-item { min-height: 64px; display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 1px solid var(--line); border-radius: 16px; background: #fff; font-size: 16px; font-weight: 600; color: #4f4950; }
  .language-mark { width: 34px; height: 34px; flex: 0 0 34px; display: grid; place-items: center; border: 1px solid #e5c5d3; border-radius: 11px; background: #fdf7fa; color: var(--magenta); font-size: 12px; line-height: 1; font-weight: 700; letter-spacing: -.01em; }
  .language-mark-small { font-size: 9px; }

  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 36px; border-top: 1px solid #e0d5da; }
  .related-item { padding: 28px 0; border-bottom: 1px solid #e0d5da; }
  .related-item h3 { font-size: 21px; margin-bottom: 10px; }
  .related-item .editorial-link { margin-top: 12px; }

  .differentiator-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
  .diff-item { padding-top: 2px; }
  .diff-rule { width: 42px; height: 2px; background: var(--magenta); margin-bottom: 18px; }
  .diff-item h3 { font-size: 20px; margin-bottom: 10px; }

  .faq-shell { width: min(1050px, 100%); }
  .faq-panel { border-top: 1px solid #dcd7da; }
  .faq-item { border-bottom: 1px solid #dcd7da; }
  .faq-question { appearance: none; width: 100%; border: 0; background: transparent; min-height: 72px; padding: 20px 0; display: flex; justify-content: space-between; gap: 24px; align-items: center; text-align: left; color: #29262b; font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 19px; line-height: 1.35; font-weight: 600; cursor: pointer; }
  .faq-plus { width: 32px; height: 32px; flex: 0 0 auto; border-radius: 50%; border: 1px solid #cfc8cc; display: grid; place-items: center; color: var(--magenta); font-size: 21px; font-family: Arial, sans-serif; font-weight: 400; }
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .2s ease; }
  .faq-answer > p { overflow: hidden; max-width: 830px; }
  .faq-answer.open { grid-template-rows: 1fr; }
  .faq-answer.open > p { padding-bottom: 24px; }

  .final-cta { background: var(--burgundy); color: #fff; padding: 82px 0; }
  .final-cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 64px; align-items: center; }
  .final-cta h2 { max-width: 780px; }
  .final-cta p { color: #f2dce6; max-width: 800px; margin-top: 16px; }
  .final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 230px; }
  .btn-white { background: #fff; color: var(--burgundy) !important; }
  .btn-white:hover { background: #fdf6f9; }
  .btn-outline-white { border-color: rgba(255,255,255,.65); color: #fff !important; }
  .btn-outline-white:hover { background: rgba(255,255,255,.08); }

  @media (max-width: 1100px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: 1fr .9fr; gap: 32px; }
    .lifecycle-grid { grid-template-columns: repeat(3, 1fr); }
    .lifecycle-item:nth-child(3) { border-right: 0; }
    .lifecycle-item:nth-child(-n+3) { border-bottom: 1px solid #dcd7da; }
    .four-up { grid-template-columns: repeat(2, 1fr); }
    .plain-block:nth-child(2) { border-right: 0; }
    .plain-block:nth-child(-n+2) { border-bottom: 1px solid #e0d5da; }
    .differentiator-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .hero { padding: 88px 0 80px; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero-grid, .split-editorial, .workforce-layout, .final-cta-inner { grid-template-columns: 1fr; }
    .hero-copy { text-align: center; }
    .hero-copy h1, .hero-copy p { margin-left: auto; margin-right: auto; }
    .hero-copy .eyebrow { text-align: center; }
    .hero-actions { justify-content: center; }
    .hero-visual { max-width: 650px; margin: 10px auto 0; }
    .proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .proof-item { border-bottom: 1px solid var(--line); }
    .proof-item:nth-child(2n) { border-right: 0; }
    .proof-item:nth-last-child(-n+2) { border-bottom: 0; }
    .section-heading:not(.section-heading-left) { text-align: center; }
    .section-heading-left { max-width: 100%; }
    .two-col, .dark-rows, .enterprise-grid { grid-template-columns: 1fr; }
    .icon-editorial:nth-last-child(-n+2) { border-bottom: 0; }
    .icon-editorial:last-child { border-bottom: 1px solid var(--line); }
    .production-callout { grid-template-columns: 1fr; gap: 20px; }
    .logic-line { justify-content: flex-start; }
    .divided-row { grid-template-columns: .7fr 1.3fr; }
    .dark-footer-row { grid-template-columns: 1fr; gap: 10px; }
    .dark-footer-row .editorial-link { margin-top: 0; }
    .digital-grid .art-panel, .terminology-grid .art-panel { order: 2; }
    .digital-channel-grid { grid-template-columns: repeat(2, 1fr); }
    .digital-channel:nth-child(3n) { border-right: 1px solid var(--line); }
    .digital-channel:nth-child(2n) { border-right: 0; }
    .digital-channel:nth-last-child(-n+3) { border-bottom: 1px solid var(--line); }
    .digital-channel:nth-last-child(-n+2) { border-bottom: 0; }
    .workflow-row { grid-template-columns: 1fr; gap: 14px; }
    .workflow-row > div:first-child { margin-bottom: 4px; }
    .file-grid, .related-grid { grid-template-columns: repeat(2, 1fr); }
    .language-grid { grid-template-columns: repeat(3, 1fr); }
    .final-actions { min-width: 0; flex-direction: row; flex-wrap: wrap; }
  }

  @media (max-width: 640px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .hero { padding: 72px 0 64px; }
    h1 { font-size: 38px; line-height: 1.06; }
    h2 { font-size: 30px; line-height: 1.15; }
    h3 { font-size: 20px; }
    p, .check-item, .tag-cloud span, .term-grid span, .language-item { font-size: 16px; }
    .hero-lede { font-size: 20px; }
    .hero-copy > p:not(.hero-lede) { font-size: 16px; }
    .hero-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .hero-actions .btn { width: 100%; }
    .hero-art { min-width: 0; }
    .credibility-band { padding-bottom: 56px; }
    .credibility-panel { border-radius: 22px; }
    .proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .proof-item { padding: 20px 18px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .proof-item:nth-child(2n) { border-right: 0; }
    .proof-item:nth-last-child(-n+2) { border-bottom: 0; }
    .proof-item strong { font-size: 16px; }
    .proof-item span { font-size: 16px; }
    .section-heading:not(.section-heading-left) { text-align: center; margin-bottom: 38px; }
    .section-heading-left { text-align: left; margin-bottom: 38px; }
    .section-heading-left .eyebrow { text-align: left; }
    .section-heading h2 + p { margin-top: 16px; }
    .section-intro, .muted-on-dark { font-size: 17px; }
    .connected-grid, .label-split, .safety-grid, .marketing-grid, .terminology-grid { gap: 36px; }
    .body-copy, .label-split > div:first-child > p, .safety-grid > div:first-child > p, .marketing-grid > div:first-child > p { text-align: left; }
    .lifecycle-grid { grid-template-columns: 1fr; border-bottom: 0; }
    .lifecycle-item { border-right: 0 !important; border-bottom: 1px solid #dcd7da !important; padding: 20px 0; }
    .lifecycle-item h3 { font-size: 20px; }
    .closing-line { text-align: left; font-size: 17px; }
    .icon-editorial { grid-template-columns: 44px 1fr; gap: 14px; padding: 22px 0; }
    .icon-box { width: 42px; height: 42px; border-radius: 12px; }
    .two-col-list { grid-template-columns: 1fr; }
    .content-panel { padding: 24px 20px; border-radius: 22px; }
    .production-callout { padding: 22px 20px; }
    .logic-line span { font-size: 16px; }
    .divided-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
    .boundary-note { padding: 16px 18px; }
    .dark-intro { text-align: left; font-size: 16px; }
    .dark-row { grid-template-columns: 30px 1fr; gap: 10px; }
    .workforce-layout { gap: 36px; }
    .tag-cloud, .term-grid { gap: 8px; }
    .beverage-header { grid-template-columns: 1fr; text-align: center; }
    .beverage-icon { margin: 0 auto; }
    .beverage-header .eyebrow { text-align: center; }
    .four-up { grid-template-columns: 1fr; }
    .plain-block { border-right: 0; border-bottom: 1px solid #e0d5da !important; padding: 22px 0; }
    .plain-block:last-child { border-bottom: 0 !important; }
    .digital-channel-grid, .file-grid, .related-grid, .differentiator-grid, .language-grid { grid-template-columns: 1fr; }
    .digital-channel { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; padding: 22px 0; }
    .digital-channel:last-child { border-bottom: 0 !important; }
    .question-callout { font-size: 18px; }
    .workflow-row { padding: 24px 0; }
    .workflow-row h3 { font-size: 20px; }
    .portfolio-line { justify-content: flex-start; }
    .portfolio-line span { display: none; }
    .portfolio-line { display: grid; gap: 8px; }
    .portfolio-line { font-size: 16px; }
    .enterprise-actions { justify-content: flex-start; }
    .file-grid { border-left: 0; }
    .file-item { border-left: 0; border-right: 0; padding: 22px 0; }
    .language-grid { gap: 8px; }
    .language-item { min-height: 58px; }
    .language-mark { width: 32px; height: 32px; flex-basis: 32px; }
    .related-grid { border-top: 1px solid #e0d5da; }
    .related-item { padding: 24px 0; }
    .faq-question { font-size: 18px; min-height: 68px; }
    .faq-plus { width: 30px; height: 30px; }
    .final-cta { padding: 68px 0; }
    .final-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .final-actions .btn { width: 100%; }
  }

  @media (max-width: 340px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .proof-grid { grid-template-columns: 1fr; }
    .proof-item { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
    .proof-item:last-child { border-bottom: 0 !important; }
    .editorial-link { margin-right: 0; width: 100%; }
    .art-panel { padding: 16px; }
  }
`;
