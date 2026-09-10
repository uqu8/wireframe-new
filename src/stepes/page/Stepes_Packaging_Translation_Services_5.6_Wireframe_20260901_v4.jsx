import React, { useState } from "react";

const LINKS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  food: "https://www.stepes.com/food-beverage-translation-services/",
  pharma: "https://www.stepes.com/pharmaceutical-translation-services/",
  medicalDevice: "https://www.stepes.com/medical-device-translation-services/",
  retail: "https://www.stepes.com/retail-ecommerce-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  tm: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  qa: "https://www.stepes.com/translation-quality-assurance/",
  iso: "https://www.stepes.com/iso-certified-translation-services/",
};

const packagingParts = [
  {
    icon: "tag",
    title: "Product Labels",
    text: "Translate product names, descriptions, identifiers, specifications, benefits, quantities, and other essential information customers see on the product or container.",
  },
  {
    icon: "layers",
    title: "Ingredients & Composition",
    text: "Maintain accurate multilingual terminology for ingredients, materials, formulations, components, and related product details.",
  },
  {
    icon: "spark",
    title: "Claims & Marketing Copy",
    text: "Adapt product benefits, promotional statements, taglines, brand messaging, and other persuasive packaging content for local audiences while protecting brand intent.",
  },
  {
    icon: "shield",
    title: "Warnings & Safety Information",
    text: "Translate warnings, precautions, handling instructions, hazards, storage requirements, and safety-critical information with workflows appropriate to the content risk.",
  },
  {
    icon: "book",
    title: "Instructions & Directions",
    text: "Localize usage, preparation, dosage, assembly, care, maintenance, installation, and operating instructions so customers can use products correctly.",
  },
  {
    icon: "check",
    title: "Regulatory & Legal Content",
    text: "Translate approved declarations, disclosures, manufacturer information, certifications, market-specific statements, and other controlled product content.",
  },
  {
    icon: "file",
    title: "Inserts & Supporting Materials",
    text: "Support package inserts, leaflets, instruction cards, quick-start guides, warranty information, product literature, and other materials supplied with the product.",
  },
  {
    icon: "image",
    title: "Artwork & Graphics",
    text: "Translate text inside illustrations, icons, diagrams, callouts, side panels, tables, labels, and graphical elements while preserving the surrounding design.",
  },
];

const fitFeatures = [
  {
    title: "Text Expansion",
    text: "Translations may require more space than the English source. Layouts can be adjusted through text reflow, spacing, typography, and other production techniques without casually removing meaning just to make the copy fit.",
  },
  {
    title: "Multilingual Typography",
    text: "Target-language fonts must support the correct characters, accents, glyphs, punctuation, and script behavior while remaining consistent with the packaging design.",
  },
  {
    title: "Complex Scripts",
    text: "Chinese, Japanese, Korean, Indic, Southeast Asian, Cyrillic, and other writing systems have language-specific requirements for fonts, spacing, line breaking, punctuation, and visual balance.",
  },
  {
    title: "Right-to-Left Packaging",
    text: "Arabic, Hebrew, Persian, Urdu, and other RTL languages may require bidirectional text handling, changed alignment, repositioned graphics, mirrored structures, and target-language visual QA.",
  },
  {
    title: "Constrained Panels",
    text: "Labels, tables, callouts, small containers, and compact package panels require careful management of line breaks, text density, hierarchy, and readability.",
  },
  {
    title: "In-Context Validation",
    text: "Final packaging is reviewed in its intended layout so translation, typography, and visual presentation can be evaluated together.",
  },
];

const industries = [
  {
    icon: "food",
    title: "Food & Beverage",
    text: "Translate product names, ingredients, allergen statements, nutrition information, preparation instructions, storage conditions, claims, warnings, quantities, and multilingual packaging artwork.",
    href: LINKS.food,
    link: "Explore Food & Beverage Translation",
  },
  {
    icon: "spark",
    title: "Beauty & Personal Care",
    text: "Localize product benefits, ingredients, usage directions, precautions, shades, variants, claims, brand language, labels, cartons, and small-format packaging.",
  },
  {
    icon: "cross",
    title: "Pharmaceuticals",
    text: "Support multilingual product labels, cartons, package inserts, medication information, dosage content, warnings, safety statements, and pharmaceutical artwork.",
    href: LINKS.pharma,
    link: "Explore Pharmaceutical Translation",
  },
  {
    icon: "device",
    title: "Medical Devices",
    text: "Translate device labels, packaging, safety information, symbols, instructions, product identification, and supporting regulated content.",
    href: LINKS.medicalDevice,
    link: "Explore Medical Device Translation",
  },
  {
    icon: "cart",
    title: "Consumer Products",
    text: "Localize packaging for electronics, household goods, apparel, lifestyle products, toys, appliances, health and wellness products, and other retail categories.",
    href: LINKS.retail,
    link: "Explore Retail & E-commerce Translation",
  },
  {
    icon: "gear",
    title: "Industrial & Technical Products",
    text: "Translate technical labels, specifications, handling instructions, product warnings, safety information, installation content, and industrial packaging.",
    href: LINKS.technical,
    link: "Explore Technical Translation",
  },
];

const workflow = [
  {
    title: "Analyze",
    text: "Review source artwork, file types, target languages, product category, existing translations, terminology, linked assets, formatting requirements, and final deliverables.",
  },
  {
    title: "Prepare",
    text: "Organize translatable content while protecting product identifiers, numbers, artwork elements, variables, approved names, and non-translatable information.",
  },
  {
    title: "Translate",
    text: "Apply professional linguists, translation memory, terminology, AI-enabled technology, and subject-matter expertise according to the content and project requirements.",
  },
  {
    title: "Review",
    text: "Verify meaning, terminology, completeness, product information, numbers, claims, warnings, and other critical language through the defined review workflow.",
  },
  {
    title: "Reintegrate",
    text: "Return translated content to Illustrator, InDesign, or other source artwork and adapt typography, text frames, graphics, spacing, alignment, and language direction.",
  },
  {
    title: "Validate",
    text: "Perform the required linguistic, visual, numerical, terminology, and in-context QA against the source and approved translation.",
  },
  {
    title: "Deliver & Maintain",
    text: "Provide the agreed editable files, packaged assets, review copies, print-ready PDFs, or other outputs and retain approved language assets for future packaging updates.",
  },
];

const riskLevels = [
  {
    title: "Brand & Promotional Copy",
    text: "Customer-facing slogans, benefits, claims, and promotional messaging may require localization or transcreation to preserve intent while sounding natural in the target market.",
    priority: "Brand voice · fluency · persuasion · cultural relevance",
  },
  {
    title: "General Product Information",
    text: "Descriptions, materials, features, specifications, and other product content require clear translation and consistent terminology across packaging and channels.",
    priority: "Accuracy · consistency · terminology · scalability",
  },
  {
    title: "Technical Instructions",
    text: "Assembly, installation, preparation, care, handling, and operating information benefit from subject-qualified translators and structured QA.",
    priority: "Technical accuracy · clarity · usability · numbers and units",
  },
  {
    title: "Safety & Regulated Content",
    text: "Warnings, precautions, dosage information, safety statements, and other high-impact content can require specialist translation, additional review, and controlled approval.",
    priority: "Meaning · completeness · terminology · traceability · risk control",
  },
  {
    title: "Final Packaging Artwork",
    text: "All content must ultimately work in its finished visual environment.",
    priority: "Text integrity · layout · readability · fonts · graphics · in-context verification",
  },
];

const qaGroups = [
  {
    title: "Linguistic Quality",
    items: [
      ["Accuracy", "Confirm that the translation communicates the intended source meaning."],
      ["Completeness", "Identify missing, untranslated, added, duplicated, or hidden content."],
      ["Terminology", "Check product names, ingredients, materials, warnings, technical terminology, and other approved language."],
      ["Consistency", "Maintain consistent wording across panels, package components, products, and languages."],
      ["Language Quality", "Review grammar, spelling, punctuation, fluency, style, and locale conventions."],
    ],
  },
  {
    title: "Product Data Quality",
    items: [
      ["Numbers", "Check quantities, dimensions, percentages, dates, product references, and other numerical content."],
      ["Units & Measurements", "Verify translated content has not introduced missing, changed, or inconsistent measurements."],
      ["Product Names & Identifiers", "Protect approved names, model numbers, SKUs, trademarks, codes, and other identifiers."],
      ["Ingredients & Components", "Check high-density terminology against approved language resources and the source."],
      ["Warnings & Instructions", "Review critical information for completeness, accuracy, and consistency."],
    ],
  },
  {
    title: "Artwork Quality",
    items: [
      ["Text Overflow & Truncation", "Identify copy that no longer fits its intended frame or panel."],
      ["Fonts & Characters", "Check font compatibility, missing glyphs, accents, special characters, and script rendering."],
      ["Line Breaks & Placement", "Review inappropriate wrapping, disconnected phrases, misplaced content, and visual hierarchy."],
      ["Graphics", "Confirm translated labels, diagrams, callouts, and text embedded in images are present and correctly positioned."],
      ["RTL & Complex Scripts", "Verify writing direction, alignment, typography, graphic placement, and mixed-language presentation."],
    ],
  },
  {
    title: "Cross-Market Quality",
    items: [
      ["Correct Language & Locale", "Confirm the intended language and regional variant are used for the destination market."],
      ["Approved Terminology", "Apply the right market-specific product, brand, technical, and regulatory terminology."],
      ["Artwork Version", "Confirm the localized package matches the intended source revision and market deliverable."],
      ["Product Information", "Check that the correct product content and identifiers are associated with the intended market."],
    ],
  },
];

const formats = [
  {
    title: "Adobe Illustrator",
    ext: "AI · EPS · SVG",
    text: "Localize editable product labels, packaging graphics, callouts, diagrams, icons, and artwork while preserving surrounding visual elements.",
  },
  {
    title: "Adobe InDesign",
    ext: "INDD · IDML · INX · INDB · ICML",
    text: "Translate cartons, inserts, labels, brochures, instruction materials, and other designed product content with multilingual typesetting and visual QA.",
  },
  {
    title: "Adobe Photoshop",
    ext: "PSD",
    text: "Localize layered graphics and image-based packaging assets when editable content is available.",
  },
  {
    title: "PDF",
    ext: "PDF",
    text: "Translate text-based or supplied packaging PDFs and determine the most appropriate workflow for translation, reconstruction, review, or final production.",
  },
  {
    title: "Microsoft Office",
    ext: "DOCX · XLSX · PPTX",
    text: "Support copy decks, label tables, product data, review files, regulatory text, and other source materials used alongside packaging artwork.",
  },
  {
    title: "Structured & Additional Formats",
    ext: "XML · DATA EXPORTS · TEMPLATES",
    text: "Evaluate structured content, data exports, customer-specific templates, and other files used to generate or manage packaging content.",
  },
];

const scaleItems = [
  ["Multiple SKUs", "Maintain terminology and approved language across flavors, sizes, models, formulations, configurations, and product families."],
  ["Multiple Languages", "Coordinate packaging localization across 100+ languages and regional variants through shared processes and language assets."],
  ["Multiple Markets", "Manage market-specific language, terminology, content variants, review requirements, and deliverables."],
  ["Multiple Revisions", "Leverage approved translations and focus effort on new and changed content as packaging evolves."],
  ["Centralized Language Assets", "Use shared terminology, translation memory, reference content, and quality rules to improve consistency across the portfolio."],
  ["Flexible Workflows", "Apply different combinations of AI, professional translation, specialist review, client approval, and in-context QA according to content risk."],
  ["Connected Content", "Carry approved language across packaging, product information, e-commerce, instructions, marketing, support, and other product touchpoints."],
];

const whyStepes = [
  ["Packaging + Language Expertise", "Translate labels, cartons, inserts, warnings, ingredients, instructions, claims, specifications, and product content across diverse industries."],
  ["Artwork-Ready Workflows", "Move beyond translated text with multilingual typesetting, graphic localization, in-context review, and final artwork QA."],
  ["Specialized Linguists", "Match professional translators and reviewers to the target language, subject matter, product category, and content requirements."],
  ["Terminology at Scale", "Protect approved product, brand, ingredient, technical, and regulated terminology across SKUs and markets."],
  ["Translation Memory & Content Reuse", "Build on previously approved packaging translations to improve consistency and reduce repetitive work across revisions."],
  ["Flexible AI + Human Translation", "Use AI and automation where they improve efficiency while applying professional human judgment where accuracy, safety, brand voice, or complexity demands it."],
  ["Risk-Based Quality", "Configure review and QA around what the content does and what the consequences of an error could be."],
  ["100+ Languages", "Support global packaging programs across major European, Asian, Middle Eastern, African, and Latin American languages and regional variants."],
];

const related = [
  {
    title: "Food & Beverage Translation Services",
    text: "Translate ingredients, product information, food safety content, labels, packaging, operations, marketing, and consumer communications.",
    href: LINKS.food,
  },
  {
    title: "Retail & E-commerce Translation Services",
    text: "Keep product information, packaging, online listings, marketplaces, digital shopping experiences, and customer communications aligned across markets.",
    href: LINKS.retail,
  },
  {
    title: "Pharmaceutical Translation Services",
    text: "Support multilingual pharmaceutical content from clinical and regulatory documentation through labeling, packaging, safety information, and commercial communication.",
    href: LINKS.pharma,
  },
  {
    title: "Medical Device Translation Services",
    text: "Translate device labeling, packaging, IFUs, technical documentation, regulatory content, software, and supporting product information.",
    href: LINKS.medicalDevice,
  },
  {
    title: "Marketing Translation Services",
    text: "Adapt brand messaging, campaigns, product launches, promotional copy, and customer-facing communications for international audiences.",
    href: LINKS.marketing,
  },
  {
    title: "Multilingual Desktop Publishing",
    text: "Turn translated content into professionally formatted multilingual artwork across Adobe Creative Cloud, Microsoft Office, PDFs, technical publishing environments, and other design formats.",
    href: LINKS.dtp,
  },
  {
    title: "Technical Translation Services",
    text: "Translate specifications, safety information, product documentation, manuals, instructions, diagrams, and other technical content.",
    href: LINKS.technical,
  },
  {
    title: "Manufacturing Translation Services",
    text: "Support multilingual manufacturing operations, technical documentation, product information, training, safety content, and packaging-equipment documentation.",
    href: LINKS.manufacturing,
  },
];

const faqs = [
  {
    q: "What is packaging translation?",
    a: (
      <>
        <p>
          Packaging translation is the translation and localization of language that appears on product labels, cartons, containers, pouches, sleeves, inserts, instruction cards, retail packaging, and related artwork.
        </p>
        <p>
          Professional packaging localization can include linguistic translation, terminology management, translation memory, multilingual typesetting, graphic localization, right-to-left adaptation, in-context review, artwork QA, and delivery of localized design files.
        </p>
        <p>
          The goal is not simply to translate the words. It is to make the multilingual content work accurately and effectively in the package customers will actually see and use.
        </p>
      </>
    ),
  },
  {
    q: "What packaging content can Stepes translate?",
    a: (
      <p>
        Stepes translates product names and descriptions, labels, ingredients, materials, specifications, claims, warnings, safety information, usage instructions, preparation directions, storage information, quantities, measurements, manufacturer information, regulatory statements, package inserts, promotional copy, sustainability information, graphic callouts, and other multilingual packaging content. We support both individual packaging projects and ongoing localization programs across multiple products, languages, revisions, and markets.
      </p>
    ),
  },
  {
    q: "Can Stepes translate product labels?",
    a: (
      <p>
        Yes. Stepes provides product label translation services for consumer products, food and beverage, beauty and personal care, pharmaceuticals, medical devices, industrial products, electronics, household goods, and other categories. Label translation can include professional translation, terminology management, multilingual formatting, artwork localization, in-context review, and quality assurance according to the project requirements.
      </p>
    ),
  },
  {
    q: "Can Stepes translate packaging directly in Adobe Illustrator or InDesign?",
    a: (
      <>
        <p>
          Yes. Stepes supports multilingual packaging workflows in Adobe Illustrator, Adobe InDesign, and other common design and publishing formats. When editable source files are available, translated text can be reintegrated into the artwork and the target layout adjusted for text expansion, typography, fonts, line breaks, writing direction, and other language-specific requirements.
        </p>
        <EditorialLink href={LINKS.dtp}>Explore Multilingual Desktop Publishing</EditorialLink>
      </>
    ),
  },
  {
    q: "How do you handle text expansion in packaging translation?",
    a: (
      <p>
        Translated text may take more or less space than the source language. Stepes multilingual production specialists can adapt text frames, line breaks, typography, spacing, and layout to accommodate the target language while preserving readability and design intent. If substantive copy changes or shortening would affect meaning, brand language, approved claims, or regulated content, those changes should follow the appropriate linguistic and customer approval process rather than being made only to fit the artwork.
      </p>
    ),
  },
  {
    q: "Can Stepes translate food labels and food packaging?",
    a: (
      <>
        <p>
          Yes. Stepes translates product names, ingredients, allergen statements, nutrition information, serving information, weights and volumes, preparation instructions, storage conditions, warnings, claims, package descriptions, promotional copy, and multilingual food packaging artwork.
        </p>
        <p>
          Because food labeling requirements differ by product and market, Stepes translates approved source information according to the market requirements and terminology defined for the project. Legal and regulatory determinations remain with the appropriate customer specialists.
        </p>
        <EditorialLink href={LINKS.food}>Explore Food & Beverage Translation Services</EditorialLink>
      </>
    ),
  },
  {
    q: "Do you provide pharmaceutical packaging translation?",
    a: (
      <>
        <p>
          Yes. Stepes supports translation of pharmaceutical labels, cartons, package inserts, medication information, dosage and administration content, warnings, safety statements, storage information, and related packaging artwork.
        </p>
        <p>
          Workflows can include specialist linguists, controlled terminology, independent revision, subject-matter review, client approval, and multilingual artwork QA according to project requirements.
        </p>
        <EditorialLink href={LINKS.pharma}>Explore Pharmaceutical Translation Services</EditorialLink>
      </>
    ),
  },
  {
    q: "Do you translate medical device labels and packaging?",
    a: (
      <>
        <p>
          Yes. Stepes translates medical device labels, cartons, product identification, warnings, symbols, handling information, storage instructions, IFUs, and supporting product content. Our medical device translation workflows can combine qualified linguistic resources, terminology control, multilingual DTP, structured quality review, and ISO-aligned quality processes.
        </p>
        <EditorialLink href={LINKS.medicalDevice}>Explore Medical Device Translation Services</EditorialLink>
      </>
    ),
  },
  {
    q: "How does Stepes maintain consistency across multiple SKUs?",
    a: (
      <>
        <p>
          Stepes uses approved terminology, translation memory, reference content, style guidance, and quality controls to maintain consistent language across related products. Previously approved language can be reused across different package sizes, flavors, models, formulations, or product variants where the source content and translation remain applicable.
        </p>
        <div className="faq-links">
          <EditorialLink href={LINKS.tm}>Explore Translation Memory</EditorialLink>
          <EditorialLink href={LINKS.terminology}>Explore Terminology Management</EditorialLink>
        </div>
      </>
    ),
  },
  {
    q: "Can you update existing packaging when only part of the source changes?",
    a: (
      <p>
        Yes. Stepes can analyze revised content, leverage previously approved translations, identify new or changed language, and focus translation and review on affected content. This is particularly useful for new packaging revisions, formulation changes, updated warnings, new claims, artwork refreshes, additional package sizes, and related SKU launches.
      </p>
    ),
  },
  {
    q: "How does Stepes check packaging translation quality?",
    a: (
      <>
        <p>
          Packaging QA can include linguistic accuracy, completeness, terminology, grammar, spelling, numbers, measurements, units, product names, ingredients, warnings, fonts, special characters, text overflow, line breaks, graphics, RTL presentation, and source-to-target artwork comparison. The exact QA process is configured according to the product, content type, languages, intended use, and agreed project scope.
        </p>
        <EditorialLink href={LINKS.qa}>Explore Translation Quality Assurance</EditorialLink>
      </>
    ),
  },
  {
    q: "Can Stepes translate Arabic and other right-to-left packaging?",
    a: (
      <p>
        Yes. Stepes supports Arabic, Hebrew, Persian, Urdu, and other right-to-left languages. RTL packaging production may require more than changing text direction. Depending on the artwork, the layout may also require mirrored structures, changed alignment, repositioned graphics, script-compatible fonts, bidirectional text handling, and final visual QA.
      </p>
    ),
  },
  {
    q: "Which packaging file formats does Stepes support?",
    a: (
      <>
        <p>
          Stepes supports common packaging and design formats including Adobe Illustrator, Adobe InDesign, Adobe Photoshop, PDF, SVG, EPS, Microsoft Word, Excel, and other design, publishing, structured-content, and document formats. Editable native files are recommended whenever available because they generally provide greater control over text extraction, layout adaptation, typography, graphics, and final production.
        </p>
        <EditorialLink href={LINKS.fileFormats}>View Translation File Format Support</EditorialLink>
      </>
    ),
  },
  {
    q: "Does Stepes use AI for packaging translation?",
    a: (
      <p>
        Stepes uses AI and automation as part of flexible translation workflows where they can improve speed, reuse, consistency, or process efficiency. The appropriate workflow depends on the content. High-volume or repetitive product language may benefit from AI-assisted processes, translation memory, terminology automation, and automated QA. Brand-sensitive, technical, safety-related, medical, or regulated content can receive professional human translation and additional specialist validation. The objective is not to apply one translation method to every packaging project, but to match technology and human expertise to the content and its risk.
      </p>
    ),
  },
  {
    q: "What languages does Stepes support for packaging translation?",
    a: (
      <p>
        Stepes supports packaging translation in more than 100 languages, including major European, Asian, Middle Eastern, African, and Latin American languages as well as many regional language variants. Multilingual production is available for Latin, Cyrillic, Chinese, Japanese, Korean, Arabic and other right-to-left scripts, Indic languages, Southeast Asian languages, and other complex writing systems.
      </p>
    ),
  },
  {
    q: "Can Stepes manage packaging translation for an entire product portfolio?",
    a: (
      <p>
        Yes. Stepes supports both individual packaging projects and recurring enterprise programs involving multiple SKUs, languages, markets, package types, and release cycles. Shared terminology, translation memories, workflow rules, review processes, multilingual artwork expertise, and centralized language assets allow approved packaging language to scale across an expanding product portfolio.
      </p>
    ),
  },
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    tag: <><path d="M20 13 13 20 4 11V4h7l9 9Z"/><circle cx="8.5" cy="8.5" r="1.2"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    spark: <><path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8L12 3Z"/><path d="m19 15 .7 2.2L22 18l-2.3.8L19 21l-.7-2.2L16 18l2.3-.8L19 15Z"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    file: <><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h5"/></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m5 17 4-4 3 3 2-2 5 3"/></>,
    food: <><path d="M7 3v7M10 3v7M7 7h3M8.5 10v11"/><path d="M16 3v18M16 3c3 2 3 7 0 9"/></>,
    cross: <><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/></>,
    device: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/></>,
    cart: <><path d="M3 4h2l2.2 10h9.8l2-7H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.5 1a7 7 0 0 0-1.7-1L14.4 3h-4.8l-.4 3.1a7 7 0 0 0-1.7 1l-2.5-1-2 3.4L5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.5-1a7 7 0 0 0 1.7 1l.4 3.1h4.8l.4-3.1a7 7 0 0 0 1.7-1l2.5 1 2-3.4L19 13a7 7 0 0 0 .1-1Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`section-heading section-heading--${align}${dark ? " section-heading--dark" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art__grid" />
      <div className="hero-art__source">
        <span className="mini-label">MASTER ARTWORK</span>
        <div className="pack pack--main">
          <div className="pack__top" />
          <div className="pack__brand">BRAND</div>
          <div className="pack__line pack__line--long" />
          <div className="pack__line" />
          <div className="pack__details">
            <span>NET WT</span><span>250 g</span>
          </div>
        </div>
      </div>
      <div className="hero-art__flow">
        <div className="flow-dot" />
        <span>TRANSLATE</span>
        <div className="flow-line" />
        <span>LOCALIZE</span>
        <div className="flow-line" />
        <span>QA</span>
        <div className="flow-dot" />
      </div>
      <div className="hero-art__markets">
        <div className="market-card">
          <span className="lang">FR</span>
          <div className="mini-pack">
            <span>PRODUIT</span><i/><i/><i/>
          </div>
        </div>
        <div className="market-card">
          <span className="lang">DE</span>
          <div className="mini-pack">
            <span>PRODUKT</span><i/><i/><i/>
          </div>
        </div>
        <div className="market-card">
          <span className="lang">JA</span>
          <div className="mini-pack">
            <span>製品</span><i/><i/><i/>
          </div>
        </div>
        <div className="market-card">
          <span className="lang">AR</span>
          <div className="mini-pack mini-pack--rtl">
            <span>المنتج</span><i/><i/><i/>
          </div>
        </div>
      </div>
    </div>
  );
}

function PackagingSystemVisual() {
  const components = ["Outer Carton", "Label", "Container", "Insert", "Retail Display", "QR Content"];
  return (
    <div className="system-visual" aria-hidden="true">
      <div className="system-stage system-stage--source">
        <span className="system-stage__label">APPROVED SOURCE</span>
        <strong>Product Content</strong>
        <small>Terminology · Translation Memory · QA</small>
      </div>
      <div className="system-connector"><span /></div>
      <div className="system-components">
        {components.map((item) => (
          <div key={item} className="system-component"><span>{item}</span></div>
        ))}
      </div>
      <div className="system-connector system-connector--short"><span /></div>
      <div className="system-market-stage">
        <span className="system-stage__label">MARKET-READY PACKAGING</span>
        <div className="system-languages">
          <span>ES</span><span>FR</span><span>DE</span><span>JA</span><span>AR</span><span>KO</span>
        </div>
      </div>
    </div>
  );
}

function ArtworkVisual() {
  return (
    <div className="artwork-visual" aria-hidden="true">
      <div className="dieline">
        <div className="die-panel die-panel--left">
          <span className="die-kicker">SIDE PANEL</span>
          <div className="die-lines"><i/><i/><i/><i/></div>
          <div className="die-warning">!</div>
        </div>
        <div className="die-panel die-panel--front">
          <span className="die-kicker">FRONT</span>
          <strong>BRAND</strong>
          <div className="die-product">PRODUCT NAME</div>
          <div className="die-lines"><i/><i/></div>
        </div>
        <div className="die-panel die-panel--right">
          <span className="die-kicker">LOCALIZED</span>
          <div className="die-lines"><i/><i/><i/></div>
          <div className="die-rtl">المنتج</div>
        </div>
      </div>
      <div className="artwork-actions">
        <span>Translate</span><i>→</i><span>Reflow</span><i>→</i><span>Review</span><i>→</i><span>Deliver</span>
      </div>
    </div>
  );
}

function TerminologyVisual() {
  const sku = ["SKU A", "SKU B", "SKU C", "NEW LAUNCH", "NEW MARKET", "REVISION"];
  return (
    <div className="terminology-visual" aria-hidden="true">
      <div className="term-core">
        <span>APPROVED LANGUAGE</span>
        <strong>Terminology + Translation Memory</strong>
        <small>Product names · ingredients · warnings · claims</small>
      </div>
      <div className="term-grid">
        {sku.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="term-locales">
        <span>FR-FR</span><span>FR-CA</span><span>DE-DE</span><span>ES-MX</span><span>PT-BR</span><span>JA-JP</span>
      </div>
    </div>
  );
}

function RevisionVisual() {
  return (
    <div className="revision-visual" aria-hidden="true">
      <div className="revision-card">
        <span className="mini-label">REV A</span>
        <div className="revision-pack">
          <i/><i/><i/><i/><i/>
        </div>
      </div>
      <div className="revision-diff">
        <div className="diff-row diff-row--reuse"><span>UNCHANGED</span><strong>Reuse Approved Translation</strong></div>
        <div className="diff-row diff-row--change"><span>UPDATED</span><strong>Translate & Review Change</strong></div>
        <div className="diff-arrow">→</div>
      </div>
      <div className="revision-card revision-card--new">
        <span className="mini-label">REV B</span>
        <div className="revision-pack">
          <i/><i className="changed"/><i/><i/><i/>
        </div>
        <span className="qa-chip">ARTWORK QA</span>
      </div>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? " is-open" : ""}`}>
      <button className="faq-question" type="button" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen ? <div className="faq-answer">{item.a}</div> : null}
    </div>
  );
}

export default function PackagingTranslationServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <div className="eyebrow">PACKAGING LOCALIZATION & ARTWORK</div>
            <h1>Packaging Translation Services for Global Products</h1>
            <p className="hero__lead">
              Translate product labels, packaging copy, ingredients, warnings, instructions, regulatory information, and artwork into 100+ languages with professional linguists, controlled terminology, multilingual formatting, and rigorous quality assurance.
            </p>
            <p className="hero__support">
              From a single product label to large multilingual packaging portfolios spanning many SKUs, Stepes connects translation, language assets, artwork production, and review in one scalable workflow.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={LINKS.quote}>Get a Packaging Translation Quote</a>
              <a className="btn btn--secondary" href={LINKS.contact}>Contact Us</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="capability-strip">
        <div className="shell capability-strip__grid">
          {[
            ["100+ Languages", "Global packaging translation for international markets"],
            ["AI + Human Workflows", "Translation models matched to content, risk, and quality requirements"],
            ["Multilingual Artwork", "Translation, typesetting, graphic localization, and in-context QA"],
            ["ISO-Certified Quality", "Structured quality management for professional translation"],
          ].map(([title, text]) => (
            <div className="capability-strip__item" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--editorial">
        <div className="shell split-editorial">
          <div className="split-editorial__heading">
            <h2>Your Packaging Carries More Than Marketing Copy</h2>
          </div>
          <div className="split-editorial__body">
            <p className="body-large">
              A package may look like one piece of content, but the language inside it can serve many different purposes. Product packaging brings together brand messaging, technical information, ingredients, instructions, safety content, consumer disclosures, and other information customers rely on to understand and use a product.
            </p>
            <p>
              That makes packaging translation different from translating an ordinary document. A slogan may need creative adaptation. An ingredient needs precise terminology. A warning cannot lose its intended meaning. A measurement must remain correct. And every translation still has to fit inside the approved package design.
            </p>
            <p>
              Stepes helps global companies translate these interconnected content types through packaging localization workflows designed around accuracy, consistency, artwork integrity, and market readiness.
            </p>
            <div className="editorial-list">
              {[
                ["Product & Brand Content", "Product names, descriptions, claims, benefits, slogans, promotional language, and customer-facing messaging."],
                ["Ingredients & Product Information", "Ingredients, materials, components, formulations, specifications, quantities, and structured product data."],
                ["Instructions & Directions", "Preparation, use, dosage, assembly, operation, care, storage, handling, and maintenance information."],
                ["Safety & Warnings", "Warnings, precautions, hazards, contraindications, safety statements, and other high-impact content."],
                ["Consumer & Regulatory Information", "Required statements, manufacturer details, disclosures, certifications, country-of-origin information, recycling information, and market-specific content."],
                ["Connected Packaging Content", "QR-linked information, digital product experiences, supporting instructions, websites, and other content that extends beyond the physical package."],
              ].map(([title, text]) => (
                <div className="editorial-list__row" key={title}>
                  <span className="editorial-list__marker" />
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            title="Translate Every Part of the Package"
            intro="Packaging translation often reaches far beyond the front panel. Stepes supports multilingual product content across primary packaging, secondary packaging, inserts, labels, graphics, and supporting materials so customers receive a consistent experience wherever product information appears."
          />
          <div className="parts-grid">
            {packagingParts.map((item) => (
              <article className="part-card" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell connected-grid">
          <div>
            <div className="eyebrow">CONNECTED PRODUCT CONTENT</div>
            <h2>One Product. Many Packaging Components. Every Market.</h2>
            <p className="body-large">
              A single product may carry the same information across a carton, bottle, container, pouch, sleeve, insert, instruction card, retail display, and online product page. Multiply that by product variants, package sizes, languages, and destination markets, and packaging localization quickly becomes a connected content operation.
            </p>
            <p>
              Stepes helps companies manage packaging language as a reusable product asset rather than translating every component in isolation.
            </p>
            <div className="component-list">
              {[
                ["Outer Cartons", "Brand messaging, product information, instructions, warnings, specifications, and market-specific content."],
                ["Labels & Containers", "High-density product information that must remain accurate and readable within limited space."],
                ["Pouches, Sleeves & Sachets", "Compact packaging formats where text expansion and multilingual layout require careful production."],
                ["Inserts & Instruction Cards", "Supporting information that expands on safe use, preparation, assembly, dosage, care, or product operation."],
                ["Retail & Display Packaging", "Customer-facing packaging, shelf displays, promotional elements, and other materials designed for the point of sale."],
                ["Digital & QR-Connected Content", "Multilingual information that continues the packaging experience through product pages, instructions, support content, or digital resources."],
              ].map(([title, text]) => (
                <div className="component-row" key={title}>
                  <h3>{title}</h3><p>{text}</p>
                </div>
              ))}
            </div>
            <p className="closing-note">
              Shared terminology, translation memory, approved product language, and quality controls help keep the information behind these components aligned.
            </p>
          </div>
          <PackagingSystemVisual />
        </div>
      </section>

      <section className="section section--artwork">
        <div className="shell artwork-grid">
          <ArtworkVisual />
          <div className="artwork-copy">
            <div className="eyebrow">ARTWORK LOCALIZATION</div>
            <h2>Protect the Artwork, Not Just the Words</h2>
            <p className="body-large">
              A packaging translation is not finished when the target text is linguistically complete. It has to work inside the actual artwork.
            </p>
            <p>
              Translated copy can become longer or shorter. Fonts may not support the target script. Line breaks can change. Text may overflow a panel. Arabic and other right-to-left languages can require major layout adaptation. Product names, measurements, symbols, graphics, and non-translatable elements must remain protected throughout production.
            </p>
            <p>
              Stepes combines professional packaging translation with multilingual desktop publishing to help move content from source artwork to professionally localized packaging.
            </p>
            <div className="process-rows">
              {[
                ["Prepare the Source", "Review editable artwork, linked assets, fonts, target languages, existing translations, terminology, and production requirements."],
                ["Translate the Content", "Extract or prepare translatable text while protecting artwork structure, identifiers, numbers, product references, and non-translatable elements."],
                ["Localize the Layout", "Reintegrate translated content and adapt text frames, typography, spacing, graphics, alignment, and language direction for each target language."],
                ["Review in Context", "Check the translation inside the actual package layout to identify problems that may not be visible in a bilingual translation file."],
                ["Deliver Production-Ready Assets", "Provide the agreed editable artwork, packaged design files, review PDFs, print-ready outputs, or other final deliverables."],
              ].map(([title, text]) => (
                <div className="process-row" key={title}><h3>{title}</h3><p>{text}</p></div>
              ))}
            </div>
            <p className="closing-note">
              From Adobe Illustrator and InDesign to PDFs and other design formats, Stepes helps preserve both the language and the visual integrity of global packaging.
            </p>
            <EditorialLink href={LINKS.dtp}>Explore Multilingual Desktop Publishing</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Translation Has to Fit the Package"
            intro="Packaging gives language a hard physical boundary. A translation that is perfectly accurate in a text editor may no longer work when placed inside a narrow side panel, compact label, nutrition table, warning box, or multilingual carton. Different languages also behave differently in layout."
          />
          <p className="fit-support">Stepes combines language expertise with multilingual production to address the practical constraints of packaging design.</p>
          <div className="fit-grid">
            {fitFeatures.map((item) => (
              <div className="fit-row" key={item.title}>
                <span className="fit-row__rule" />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            ))}
          </div>
          <div className="center-link">
            <EditorialLink href={LINKS.fileFormats}>View Supported File Formats</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            title="Packaging Expertise Across Product Categories"
            intro="Different products place different demands on packaging translation. Stepes combines multilingual production with subject-qualified language expertise to support packaging across consumer, technical, and regulated industries."
          />
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-card" key={item.title}>
                <div className="industry-card__top">
                  <div className="icon-box icon-box--plain"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
                {item.href ? <EditorialLink href={item.href}>{item.link}</EditorialLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--spotlights">
        <div className="shell spotlight-stack">
          <article className="spotlight spotlight--food">
            <div className="spotlight__copy">
              <h2>Food & Beverage Packaging Where Every Detail Matters</h2>
              <p className="body-large">
                Food and beverage packaging combines language, structured product data, ingredients, quantities, claims, consumer information, and design in a limited amount of space.
              </p>
              <p>
                Stepes helps food and beverage companies translate approved packaging content accurately and consistently while maintaining terminology across product families and markets.
              </p>
              <EditorialLink href={LINKS.food}>Explore Food & Beverage Translation Services</EditorialLink>
            </div>
            <div className="spotlight__panel">
              <h3>Food Packaging Content We Translate</h3>
              <ul className="two-col-list">
                {[
                  "Product and common names",
                  "Ingredient declarations",
                  "Allergen statements",
                  "Nutrition information",
                  "Serving information",
                  "Net quantity, weight, and volume",
                  "Preparation and cooking instructions",
                  "Storage conditions",
                  "Date and shelf-life information",
                  "Warnings and consumer notices",
                  "Product claims",
                  "Certifications",
                  "Country-of-origin information",
                  "Package descriptions",
                  "Promotional packaging copy",
                  "Multilingual artwork",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="market-note">
                <h3>Packaging Requirements Are Market-Specific</h3>
                <p>
                  Product information requirements can differ by category, jurisdiction, destination market, and intended use. Language requirements, ingredients, allergens, nutrition information, claims, presentation, and consumer disclosures may also vary.
                </p>
                <p>
                  Stepes supports regulatory implementation by translating customer-approved product and regulatory content according to the terminology, source information, and market requirements defined for the project. Regulatory, legal, and product-compliance determinations remain with the appropriate customer or regulatory specialists.
                </p>
              </div>
              <div className="food-controls">
                <h3>Packaging Localization Controls</h3>
                <div className="food-controls__grid">
                  {[
                    ["Approved Source Translation", "Preserve the intended meaning of approved product, safety, and regulatory information."],
                    ["Market-Specific Language", "Use the appropriate target language, regional variant, locale conventions, and approved terminology for each market."],
                    ["Controlled Terminology", "Apply approved product, ingredient, allergen, quality, and brand language consistently."],
                    ["Multilingual Artwork", "Integrate translated information into package layouts while maintaining hierarchy, readability, and design intent."],
                    ["Revision Management", "Reuse approved content as formulations, claims, packaging, or product information change."],
                    ["Linguistic QA", "Check accuracy, completeness, terminology, numbers, units, formatting, and final presentation."],
                  ].map(([title, text]) => (
                    <div className="food-control" key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="spotlight spotlight--medical">
            <div className="spotlight__copy">
              <div className="eyebrow">REGULATED PACKAGING</div>
              <h2>High-Stakes Packaging Requires Specialized Translation</h2>
              <p className="body-large">
                Pharmaceutical and medical device packaging can communicate information that directly affects product identification, use, dosage, handling, and safety.
              </p>
              <p>
                Stepes supports regulated packaging translation with subject-qualified linguistic resources, controlled terminology, structured review, multilingual production, and quality workflows aligned to the project requirements.
              </p>
              <div className="inline-links">
                <EditorialLink href={LINKS.pharma}>Explore Pharmaceutical Translation</EditorialLink>
                <EditorialLink href={LINKS.medicalDevice}>Explore Medical Device Translation</EditorialLink>
              </div>
            </div>
            <div className="regulated-columns">
              <div>
                <h3>Pharmaceutical Packaging</h3>
                <ul>
                  {["Product labels","Cartons","Package inserts","Medication guides","Prescribing information","Dosage and administration content","Contraindications and precautions","Safety statements","Storage information","Pharmaceutical artwork"].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3>Medical Device Packaging</h3>
                <ul>
                  {["Device labels","Product identification","Packaging and cartons","Warnings and precautions","Symbols and callouts","Instructions for use","Handling and storage information","Supporting product materials","Multilingual artwork"].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <p className="regulated-note">
                Sensitive or regulated packaging content can be routed through specialist translation, independent revision, subject-matter review, client approval, and in-context validation according to the agreed workflow.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell terminology-grid">
          <div>
            <div className="eyebrow">CONSISTENCY AT SCALE</div>
            <h2>One Packaging Vocabulary Across Every Product and Market</h2>
            <p className="body-large">
              Global packaging portfolios repeat far more language than they first appear to. A product family may reuse the same names, ingredients, warnings, claims, directions, materials, storage statements, manufacturer details, technical terms, and approved legal language across dozens or hundreds of SKUs.
            </p>
            <p>Stepes helps turn this repeated language into reusable multilingual knowledge.</p>
            <div className="paired-links">
              <EditorialLink href={LINKS.terminology}>Explore Terminology Management</EditorialLink>
              <EditorialLink href={LINKS.tm}>Explore Translation Memory</EditorialLink>
            </div>
            <div className="term-benefits">
              {[
                ["Terminology Management", "Centralize approved product names, ingredient terminology, claims, warnings, technical language, brand terms, and preferred translations so linguists and reviewers work from the same multilingual vocabulary."],
                ["Translation Memory", "Reuse previously translated and approved packaging content instead of retranslating identical or similar language from the beginning each time."],
                ["Product-Family Consistency", "Carry validated terminology and translations across package sizes, flavors, formulations, models, variants, and related products."],
                ["Market Variants", "Maintain the right regional terminology and approved differences when multiple markets use the same language."],
                ["Approved Content Reuse", "Preserve validated language across cartons, labels, inserts, product pages, instructions, and other connected product materials."],
                ["Continuous Improvement", "Feed approved corrections and reviewer decisions back into terminology and translation memory so future packaging benefits from previous work."],
              ].map(([title, text]) => <div className="term-benefit" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <p className="closing-note">The result is greater multilingual consistency across products, languages, and release cycles—with less repetitive translation effort.</p>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className="section section--revision">
        <div className="shell revision-grid">
          <RevisionVisual />
          <div>
            <div className="eyebrow">VERSION REUSE</div>
            <h2>Update the Change, Not the Entire Package</h2>
            <p className="body-large">
              Packaging rarely stays static. A formula changes. An ingredient is added. A warning is revised. A new product claim is approved. A package size changes. Artwork is refreshed. A new SKU launches. A product enters another market.
            </p>
            <p>
              When only part of the source changes, the multilingual workflow should be able to recognize that.
            </p>
            <p>
              Stepes uses translation memory, terminology, content comparison, and version-aware workflows to help identify existing approved language and focus new translation and review on the content that actually changed.
            </p>
            <div className="revision-points">
              {[
                ["Identify New and Modified Content", "Separate new or revised source language from previously translated material."],
                ["Reuse Approved Translations", "Apply validated translations where the underlying source remains unchanged and reuse is appropriate."],
                ["Focus Review on Change", "Direct linguistic attention toward revised ingredients, claims, instructions, warnings, specifications, or other affected content."],
                ["Update the Artwork", "Apply approved language to the new packaging revision while maintaining the required layout and production specifications."],
                ["Validate the New Version", "Check the localized revision against the updated source and approved multilingual content."],
                ["Preserve the Knowledge", "Update terminology and translation memory so the latest approved language is ready for the next release."],
              ].map(([title, text]) => <div className="revision-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <p className="closing-note">This approach can reduce repetitive work while improving consistency across recurring packaging updates.</p>
          </div>
        </div>
      </section>

      <section className="section section--workflow">
        <div className="shell">
          <SectionHeading
            eyebrow="END-TO-END WORKFLOW"
            title="From Master Artwork to Market-Ready Packaging"
            intro="Stepes coordinates the linguistic and production stages required to move packaging from approved source content to multilingual deliverables."
            align="left"
          />
          <div className="workflow">
            {workflow.map((item, index) => (
              <article className="workflow-step" key={item.title}>
                <span className="workflow-step__number">{String(index + 1).padStart(2, "0")}</span>
                <div className="workflow-step__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="workflow-closing">
            One coordinated workflow helps reduce handoffs between translation, artwork, review, and multilingual production.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <SectionHeading
            title="Quality Matched to Packaging Risk"
            intro="Not every sentence on a package carries the same consequences. Stepes helps organizations configure AI, professional translation, specialist review, and quality controls according to the purpose, audience, visibility, and risk of the content."
            dark
          />
          <div className="risk-grid">
            {riskLevels.map((item) => (
              <article className="risk-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="risk-priority">{item.priority}</div>
              </article>
            ))}
          </div>
          <div className="dark-note">
            <p>
              AI and workflow automation can accelerate appropriate stages such as file preparation, terminology application, repeated-content processing, content comparison, routing, and quality checks. Professional human expertise remains central wherever meaning, safety, regulatory sensitivity, brand judgment, or complex artwork decisions require it.
            </p>
            <EditorialLink href={LINKS.qa} className="editorial-link--dark">Explore Translation Quality Assurance</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Packaging QA Before Production"
            intro="Packaging quality assurance needs to look beyond grammar. Stepes can combine automated checks, professional linguistic review, subject-matter validation, multilingual production review, and in-context QA according to the project scope."
          />
          <div className="qa-grid">
            {qaGroups.map((group) => (
              <article className="qa-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="qa-group__items">
                  {group.items.map(([title, text]) => (
                    <div className="qa-row" key={title}>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="qa-note">
            Quality controls can be configured according to product category, language, market, content type, and project risk rather than forcing every packaging project into one universal review model.
          </p>
          <div className="center-link">
            <EditorialLink href={LINKS.qa}>Explore Stepes Translation Quality Assurance</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell file-grid">
          <div className="file-intro">
            <div className="eyebrow">FILE ENGINEERING</div>
            <h2>Work Directly With Your Packaging Artwork</h2>
            <p className="body-large">
              Native source files allow multilingual packaging to be translated and produced with greater control over text, layers, typography, graphics, and future revisions.
            </p>
            <p>
              Stepes supports common design, publishing, document, and graphics formats used in packaging workflows.
            </p>
            <div className="source-tip">
              <strong>For best results</strong>
              <p>
                Whenever possible, provide editable native artwork together with linked images, fonts, and a reference PDF. Complete source packages improve editability, multilingual production, version management, and final visual QA.
              </p>
            </div>
            <EditorialLink href={LINKS.fileFormats}>View Translation File Format Support</EditorialLink>
          </div>
          <div className="format-list">
            {formats.map((item) => (
              <div className="format-row" key={item.title}>
                <div className="format-row__heading">
                  <h3>{item.title}</h3>
                  <span>{item.ext}</span>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell scale-grid">
          <div className="scale-summary">
            <h2>Scale Packaging Translation Across Products and Markets</h2>
            <p className="body-large">
              Packaging translation may begin with one label and grow into an ongoing multilingual program involving product families, regional variants, artwork revisions, multiple departments, and frequent launches.
            </p>
            <p>
              Stepes helps enterprises scale without rebuilding the localization process for every project.
            </p>
            <div className="scale-callout">
              <strong>One product or a global portfolio</strong>
              <p>
                Whether you are launching one product into a new market or managing recurring packaging localization across a global portfolio, Stepes provides the language technology and professional expertise to support continued growth.
              </p>
            </div>
          </div>
          <div className="scale-list">
            {scaleItems.map(([title, text]) => (
              <div className="scale-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--iso">
        <div className="shell">
          <SectionHeading
            title="Quality Standards You Can Build On"
            intro="Stepes supports multilingual packaging through established quality systems for professional, enterprise, and regulated translation workflows."
          />
          <div className="iso-grid">
            {[
              ["ISO 17100", "Translation Services", "Structured requirements for professional translation processes, qualified linguistic resources, and defined translation workflows."],
              ["ISO 9001", "Quality Management", "Quality-management practices designed to support consistent processes, customer requirements, corrective action, and continuous improvement."],
              ["ISO 13485", "Medical Device Quality Management", "Quality processes relevant to multilingual medical device and regulated life sciences content."],
            ].map(([iso, title, text]) => (
              <article className="iso-item" key={iso}>
                <span className="iso-code">{iso}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="iso-note">
            The standards, review steps, and quality controls appropriate to a packaging project depend on its product category, content, market, intended use, and customer requirements.
          </p>
          <div className="center-link"><EditorialLink href={LINKS.iso}>Explore Stepes ISO Certifications</EditorialLink></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            title="Why Global Brands Choose Stepes for Packaging Translation"
            intro="Packaging sits at the intersection of product information, brand communication, technical content, artwork, and customer experience. Stepes brings the language and production capabilities behind these elements into one multilingual workflow."
          />
          <div className="why-grid">
            {whyStepes.map(([title, text]) => (
              <div className="why-row" key={title}>
                <span className="why-row__line" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--related">
        <div className="shell">
          <SectionHeading
            title="Explore Related Translation Solutions"
            intro="Packaging is one part of a larger product-content ecosystem. Connect multilingual packaging with the other content customers, employees, partners, and regulators rely on throughout the product lifecycle."
          />
          <div className="related-list">
            {related.map((item) => (
              <a className="related-row" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="related-row__arrow"><Icon name="arrow" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--faq">
        <div className="shell faq-shell">
          <div className="faq-heading">
            <h2>Packaging Translation Services FAQ</h2>
            <p>
              Practical answers about product label translation, packaging artwork, multilingual DTP, language reuse, quality assurance, and global packaging workflows.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner">
          <div>
            <h2>Ready to Take Your Packaging Global?</h2>
            <p>
              Whether you are translating one product label or managing multilingual packaging across an entire portfolio, Stepes helps connect professional translation, terminology control, content reuse, multilingual artwork, and quality assurance in one scalable workflow.
            </p>
            <p>
              Bring us your labels, cartons, package inserts, design files, existing translations, or next product launch. We’ll help turn approved product content into packaging that is ready for customers around the world.
            </p>
          </div>
          <div className="final-cta__actions">
            <a className="btn btn--primary btn--on-dark" href={LINKS.quote}>Get a Packaging Translation Quote</a>
            <a className="btn btn--ghost" href={LINKS.contact}>Contact Us</a>
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
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #17181B;
    --body: #3F4148;
    --muted: #6B6F78;
    --line: #E4E5E8;
    --soft: #F6F7F8;
    --white: #FFFFFF;
    --dark: #17181D;
    --dark-2: #202128;
    --radius-lg: 30px;
    --radius-md: 22px;
    --shadow: 0 20px 50px rgba(20, 24, 32, .07);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  a { color: inherit; }

  .stepes-page {
    margin: 0;
    color: var(--ink);
    background: var(--white);
    font-family: "Inter Tight", Inter, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }

  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3,
  .stepes-page p { margin-top: 0; }

  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3 { color: var(--ink); font-weight: 600; letter-spacing: -.025em; }

  .stepes-page h1 { font-size: 48px; line-height: 1.06; margin-bottom: 24px; max-width: 720px; }
  .stepes-page h2 { font-size: 36px; line-height: 1.14; margin-bottom: 20px; }
  .stepes-page h3 { font-size: 24px; line-height: 1.24; margin-bottom: 10px; }
  .stepes-page p { color: var(--body); font-size: 16px; line-height: 1.68; margin-bottom: 18px; }
  .stepes-page .body-large { font-size: 18px; line-height: 1.65; color: #303238; }
  .stepes-page ul { margin: 0; padding-left: 21px; color: var(--body); }
  .stepes-page li { margin-bottom: 8px; font-size: 16px; line-height: 1.55; }

  .shell {
    width: min(1280px, calc(100% - 112px));
    margin: 0 auto;
  }

  .section { padding: 96px 0; }
  .section--soft { background: var(--soft); }
  .section--artwork { background: linear-gradient(135deg, #fff 0%, #fff 58%, #faf7f9 100%); }
  .section--revision { background: #FAFAFB; }
  .section--workflow { padding-top: 88px; }
  .section--spotlights { background: var(--white); }
  .section--related { background: #F7F7F8; }
  .section--faq { padding-top: 88px; padding-bottom: 96px; }

  .eyebrow {
    color: var(--magenta);
    font-size: 11px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: .13em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .section-heading {
    max-width: 820px;
    margin-bottom: 48px;
  }

  .section-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
  .section-heading--left { text-align: left; }
  .section-heading .section-intro {
    font-size: 18px;
    line-height: 1.65;
    max-width: 820px;
    margin-bottom: 0;
  }
  .section-heading--center .section-intro { margin-left: auto; margin-right: auto; }
  .section-heading--dark h2,
  .section-heading--dark .section-intro { color: #fff; }
  .section-heading--dark .eyebrow { color: var(--pink-light); }

  .btn {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 23px;
    border-radius: 999px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    transition: transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease;
  }

  .btn:focus-visible,
  .editorial-link:focus-visible,
  .related-row:focus-visible,
  .faq-question:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .28);
    outline-offset: 3px;
  }

  .btn--primary,
  .btn--primary:link,
  .btn--primary:visited,
  .btn--primary:hover,
  .btn--primary:active,
  .btn--primary:focus {
    color: #fff !important;
  }
  .btn--primary { background: var(--magenta); box-shadow: 0 10px 24px rgba(193,29,99,.16); }
  .btn--primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .btn--secondary { background: #fff; border: 1px solid #D6D8DD; color: var(--ink); }
  .btn--secondary:hover { border-color: #BABDC4; transform: translateY(-1px); }
  .btn--ghost { border: 1px solid rgba(255,255,255,.55); color: #fff; background: transparent; }
  .btn--ghost:hover { background: rgba(255,255,255,.08); transform: translateY(-1px); }

  .editorial-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    gap: 8px;
    color: var(--magenta);
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .editorial-link svg { width: 18px; height: 18px; transition: transform .18s ease; }
  .editorial-link:hover { color: var(--magenta-dark); }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link--dark { color: var(--pink-light); }
  .editorial-link--dark:hover { color: #fff; }

  /* HERO */
  .hero {
    position: relative;
    min-height: 680px;
    display: flex;
    align-items: center;
    padding: 104px 0 96px;
    background:
      radial-gradient(circle at 85% 18%, rgba(193,29,99,.07), transparent 24%),
      linear-gradient(180deg, #fff 0%, #FCFCFD 100%);
    overflow: hidden;
  }

  .hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(480px, .98fr);
    gap: 68px;
    align-items: center;
  }

  .hero__copy { max-width: 690px; }
  .hero__lead { font-size: 18px !important; line-height: 1.65 !important; max-width: 680px; color: #313238 !important; margin-bottom: 18px !important; }
  .hero__support { max-width: 660px; }
  .hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }

  .hero-art {
    position: relative;
    min-height: 500px;
    border: 1px solid #E3E4E8;
    border-radius: var(--radius-lg);
    background: #fff;
    box-shadow: var(--shadow);
    overflow: hidden;
  }
  .hero-art__grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(#F0F1F3 1px, transparent 1px),
      linear-gradient(90deg, #F0F1F3 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 90%);
  }
  .hero-art__source { position: absolute; top: 62px; left: 44px; width: 164px; }
  .mini-label { display: block; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .11em; color: #727680; margin-bottom: 12px; }
  .pack {
    height: 250px;
    border: 2px solid #3D4047;
    background: #F7F7F8;
    padding: 24px 18px;
    position: relative;
    box-shadow: 10px 12px 0 #ECEDEF;
  }
  .pack__top { position: absolute; top: -16px; left: 14px; width: 110px; height: 14px; border: 2px solid #3D4047; border-bottom: 0; background: #fff; transform: skewX(-28deg); transform-origin: bottom left; }
  .pack__brand { font-size: 24px; font-weight: 600; letter-spacing: .08em; color: var(--magenta); margin: 22px 0 20px; }
  .pack__line { height: 5px; width: 62%; background: #565A63; margin: 9px 0; opacity: .72; }
  .pack__line--long { width: 86%; }
  .pack__details { position: absolute; left: 18px; right: 18px; bottom: 18px; display: flex; justify-content: space-between; color: #676B74; font-size: 11px; font-weight: 600; }

  .hero-art__flow {
    position: absolute;
    top: 160px;
    left: 237px;
    right: 40px;
    display: flex;
    align-items: center;
    gap: 7px;
    color: #686C75;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .08em;
  }
  .flow-line { height: 1px; flex: 1; background: #C7C9CF; }
  .flow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); }

  .hero-art__markets {
    position: absolute;
    left: 246px;
    right: 35px;
    bottom: 44px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .market-card {
    min-height: 108px;
    border: 1px solid #DCDDDF;
    border-radius: 16px;
    background: rgba(255,255,255,.94);
    padding: 13px;
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .lang {
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--blush);
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
  }
  .mini-pack { flex: 1; border: 1px solid #6D7078; min-height: 75px; padding: 11px; background: #F8F8F9; }
  .mini-pack span { display: block; color: #34363B; font-size: 12px; font-weight: 600; margin-bottom: 9px; }
  .mini-pack i { display: block; height: 3px; width: 88%; background: #8D9098; margin: 6px 0; opacity: .6; }
  .mini-pack i:nth-child(3) { width: 64%; }
  .mini-pack--rtl { text-align: right; }

  /* CAPABILITY STRIP */
  .capability-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .capability-strip__grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .capability-strip__item { padding: 28px 25px; border-left: 1px solid var(--line); }
  .capability-strip__item:first-child { border-left: 0; }
  .capability-strip__item strong { display: block; font-size: 17px; line-height: 1.3; font-weight: 600; margin-bottom: 5px; }
  .capability-strip__item span { display: block; color: var(--muted); font-size: 16px; line-height: 1.45; }

  /* EDITORIAL INTRO */
  .split-editorial { display: grid; grid-template-columns: .76fr 1.24fr; gap: 90px; align-items: start; }
  .split-editorial__heading { position: sticky; top: 36px; max-width: 480px; }
  .split-editorial__body { max-width: 760px; }
  .editorial-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .editorial-list__row { display: grid; grid-template-columns: 18px 1fr; gap: 15px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .editorial-list__marker { width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); margin-top: 10px; }
  .editorial-list__row h3 { font-size: 20px; margin-bottom: 7px; }
  .editorial-list__row p { margin: 0; }

  /* PARTS */
  .parts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .part-card {
    min-height: 268px;
    padding: 28px;
    border: 1px solid #E0E1E4;
    border-radius: var(--radius-md);
    background: #fff;
  }
  .part-card h3 { font-size: 21px; margin-bottom: 10px; }
  .part-card p { margin-bottom: 0; }
  .icon-box {
    width: 48px; height: 48px; display: grid; place-items: center;
    border-radius: 14px; background: var(--blush); color: var(--magenta); margin-bottom: 22px;
  }
  .icon-box--plain { background: #F4F4F6; color: #4A4D54; margin-bottom: 0; }

  /* CONNECTED SYSTEM */
  .connected-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 78px; align-items: center; }
  .connected-grid > div:first-child { max-width: 690px; }
  .component-list { border-top: 1px solid var(--line); margin-top: 30px; }
  .component-row { display: grid; grid-template-columns: 190px 1fr; gap: 22px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .component-row h3 { font-size: 18px; margin: 0; }
  .component-row p { margin: 0; }
  .closing-note { margin-top: 24px !important; color: #53565E !important; }

  .system-visual {
    min-height: 520px;
    border-radius: var(--radius-lg);
    background: #FAFAFB;
    border: 1px solid var(--line);
    padding: 42px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .system-stage,
  .system-market-stage {
    border: 1px solid #D8DADE;
    border-radius: 18px;
    background: #fff;
    text-align: center;
    padding: 22px;
  }
  .system-stage--source { box-shadow: 0 12px 30px rgba(25,28,35,.07); }
  .system-stage__label { display: block; color: var(--magenta); font-size: 10px; font-weight: 600; letter-spacing: .11em; margin-bottom: 7px; }
  .system-stage strong { display: block; font-size: 21px; line-height: 1.3; margin-bottom: 6px; }
  .system-stage small { display: block; font-size: 14px; color: #747780; line-height: 1.45; }
  .system-connector { height: 42px; display: flex; justify-content: center; }
  .system-connector span { width: 1px; height: 100%; background: #C7C9CF; position: relative; }
  .system-connector span:after { content: ""; position: absolute; left: 50%; bottom: -1px; width: 7px; height: 7px; transform: translate(-50%,50%); border-radius: 50%; background: var(--magenta); }
  .system-connector--short { height: 32px; }
  .system-components { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .system-component { min-height: 64px; display: grid; place-items: center; text-align: center; padding: 11px; border: 1px solid #DADCDF; border-radius: 14px; background: #fff; color: #4D5057; font-size: 16px; line-height: 1.35; font-weight: 600; }
  .system-market-stage { padding: 18px 20px 20px; }
  .system-languages { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
  .system-languages span { display: inline-flex; align-items: center; justify-content: center; min-width: 42px; height: 28px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 11px; font-weight: 600; }

  /* ARTWORK */
  .artwork-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 78px; align-items: center; }
  .artwork-copy { max-width: 680px; }
  .process-rows { margin-top: 30px; border-top: 1px solid var(--line); }
  .process-row { display: grid; grid-template-columns: 185px 1fr; gap: 22px; padding: 18px 0; border-bottom: 1px solid var(--line); }
  .process-row h3 { font-size: 18px; margin: 0; }
  .process-row p { margin: 0; }

  .artwork-visual { padding: 34px; min-height: 490px; border-radius: var(--radius-lg); background: #F7F7F8; border: 1px solid var(--line); display: flex; flex-direction: column; justify-content: center; }
  .dieline { display: grid; grid-template-columns: .76fr 1fr .76fr; gap: 6px; align-items: center; transform: rotate(-2deg); }
  .die-panel { min-height: 260px; border: 2px solid #565A62; background: #fff; padding: 20px 16px; position: relative; }
  .die-panel--front { min-height: 320px; padding-top: 54px; box-shadow: 0 15px 30px rgba(30,32,38,.08); }
  .die-kicker { display: block; font-size: 10px; font-weight: 600; letter-spacing: .11em; color: #777A82; margin-bottom: 20px; }
  .die-panel--front strong { display: block; font-size: 30px; letter-spacing: .09em; color: var(--magenta); margin-bottom: 15px; }
  .die-product { font-size: 16px; font-weight: 600; color: #3C3F45; margin-bottom: 28px; }
  .die-lines i { display: block; height: 4px; background: #8A8D95; margin: 9px 0; opacity: .55; }
  .die-lines i:nth-child(2) { width: 76%; }
  .die-lines i:nth-child(3) { width: 88%; }
  .die-lines i:nth-child(4) { width: 62%; }
  .die-warning { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); font-weight: 600; margin-top: 28px; }
  .die-rtl { font-size: 18px; font-weight: 600; text-align: right; margin-top: 35px; color: #3D4047; }
  .artwork-actions { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px; margin-top: 38px; color: #696C74; font-size: 12px; font-weight: 600; letter-spacing: .06em; }
  .artwork-actions i { font-style: normal; color: var(--magenta); }

  /* FIT */
  .fit-support { max-width: 760px; margin: -24px auto 36px !important; text-align: center; font-size: 16px; }
  .fit-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .fit-row { display: grid; grid-template-columns: 4px 1fr; gap: 22px; padding: 30px 34px 30px 0; border-bottom: 1px solid var(--line); }
  .fit-row:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 48px; }
  .fit-row:nth-child(even) { padding-left: 48px; }
  .fit-row:nth-last-child(-n+2) { border-bottom: 0; }
  .fit-row__rule { width: 3px; height: 30px; background: var(--magenta); border-radius: 4px; margin-top: 2px; }
  .fit-row h3 { font-size: 20px; margin-bottom: 8px; }
  .fit-row p { margin: 0; }
  .center-link { margin-top: 30px; display: flex; justify-content: center; }

  /* INDUSTRY */
  .industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .industry-card { min-height: 300px; border: 1px solid #DFE0E3; background: #fff; border-radius: var(--radius-md); padding: 28px; display: flex; flex-direction: column; align-items: flex-start; }
  .industry-card__top { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
  .industry-card__top h3 { font-size: 21px; margin: 0; }
  .industry-card p { flex: 1; }

  /* SPOTLIGHTS */
  .spotlight-stack { display: grid; gap: 28px; }
  .spotlight { border-radius: var(--radius-lg); border: 1px solid var(--line); overflow: hidden; display: grid; grid-template-columns: .82fr 1.18fr; }
  .spotlight__copy { padding: 58px; background: #fff; }
  .spotlight__panel { padding: 58px; background: #F7F7F8; }
  .spotlight__panel > h3 { font-size: 22px; margin-bottom: 24px; }
  .two-col-list { columns: 2; column-gap: 38px; padding-left: 18px; margin-bottom: 36px !important; }
  .two-col-list li { break-inside: avoid; }
  .market-note { border-top: 1px solid #DADBDE; padding-top: 26px; }
  .market-note h3 { font-size: 20px; }
  .food-controls { border-top: 1px solid #DADBDE; margin-top: 28px; padding-top: 26px; }
  .food-controls > h3 { font-size: 20px; margin-bottom: 18px; }
  .food-controls__grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 28px; }
  .food-control { padding: 15px 0; border-top: 1px solid #E1E2E5; }
  .food-control:nth-child(-n+2) { border-top: 0; }
  .food-control strong { display: block; font-size: 16px; font-weight: 600; line-height: 1.4; margin-bottom: 5px; }
  .food-control p { margin: 0; }

  .spotlight--medical { grid-template-columns: .86fr 1.14fr; }
  .regulated-columns { background: #1D1E23; color: #fff; padding: 58px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 34px; }
  .regulated-columns h3 { color: #fff; font-size: 21px; }
  .regulated-columns ul { color: #E6E6E9; }
  .regulated-columns li { color: #E6E6E9; }
  .regulated-note { grid-column: 1 / -1; color: #D1D2D6 !important; border-top: 1px solid rgba(255,255,255,.15); padding-top: 24px; margin: 0 !important; }
  .inline-links, .paired-links, .faq-links { display: flex; flex-wrap: wrap; gap: 10px 22px; }

  /* TERMINOLOGY */
  .terminology-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 76px; align-items: center; }
  .term-benefits { margin-top: 30px; display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
  .term-benefit { padding: 22px 28px 22px 0; border-bottom: 1px solid var(--line); }
  .term-benefit:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 30px; }
  .term-benefit:nth-child(even) { padding-left: 30px; }
  .term-benefit h3 { font-size: 18px; }
  .term-benefit p { margin: 0; }

  .terminology-visual { min-height: 500px; border: 1px solid var(--line); border-radius: var(--radius-lg); background: #FAFAFB; padding: 42px; display: flex; flex-direction: column; justify-content: center; }
  .term-core { padding: 26px; border: 1px solid #D9DADE; border-radius: 18px; background: #fff; box-shadow: 0 12px 28px rgba(20,24,30,.07); text-align: center; }
  .term-core span { font-size: 10px; font-weight: 600; letter-spacing: .12em; color: var(--magenta); }
  .term-core strong { display: block; font-size: 21px; margin: 8px 0; }
  .term-core small { display: block; font-size: 12px; line-height: 1.45; color: #747780; }
  .term-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 9px; margin: 28px 0; }
  .term-grid span { min-height: 55px; display: grid; place-items: center; background: #fff; border: 1px solid #DCDDDF; border-radius: 13px; color: #555860; font-size: 11px; font-weight: 600; letter-spacing: .04em; text-align: center; padding: 8px; }
  .term-locales { display: flex; justify-content: center; flex-wrap: wrap; gap: 7px; }
  .term-locales span { border-radius: 999px; padding: 6px 10px; background: var(--blush); color: var(--magenta); font-size: 10px; font-weight: 600; }

  /* REVISION */
  .revision-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 78px; align-items: center; }
  .revision-points { margin-top: 30px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(2, 1fr); }
  .revision-point { padding: 20px 28px 20px 0; border-bottom: 1px solid var(--line); }
  .revision-point:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 30px; }
  .revision-point:nth-child(even) { padding-left: 30px; }
  .revision-point h3 { font-size: 18px; }
  .revision-point p { margin: 0; }

  .revision-visual { min-height: 470px; border-radius: var(--radius-lg); border: 1px solid var(--line); background: #fff; padding: 40px 26px; display: grid; grid-template-columns: 1fr .82fr 1fr; gap: 18px; align-items: center; }
  .revision-card { min-width: 0; }
  .revision-pack { height: 240px; border: 2px solid #4A4D54; background: #F8F8F9; padding: 28px 16px; box-shadow: 8px 8px 0 #ECEDEF; }
  .revision-pack i { display: block; height: 5px; background: #787B82; opacity: .6; margin: 14px 0; }
  .revision-pack i:nth-child(2) { width: 72%; }
  .revision-pack i:nth-child(3) { width: 88%; }
  .revision-pack i:nth-child(4) { width: 58%; }
  .revision-pack .changed { background: var(--magenta); opacity: 1; }
  .revision-diff { display: grid; gap: 12px; }
  .diff-row { padding: 13px; border-radius: 13px; border: 1px solid #D9DADE; background: #FAFAFB; }
  .diff-row span { display: block; font-size: 9px; letter-spacing: .1em; font-weight: 600; margin-bottom: 4px; color: #7A7D84; }
  .diff-row strong { font-size: 12px; line-height: 1.35; display: block; }
  .diff-row--change { border-color: #EAB8CF; background: var(--blush); }
  .diff-row--change strong { color: var(--magenta); }
  .diff-arrow { text-align: center; color: var(--magenta); font-size: 24px; }
  .qa-chip { display: inline-flex; margin-top: 18px; min-height: 28px; align-items: center; padding: 4px 9px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 9px; font-weight: 600; letter-spacing: .08em; }

  /* WORKFLOW */
  .workflow { margin-top: 38px; border-top: 1px solid var(--line); }
  .workflow-step { display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: 24px; padding: 27px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .workflow-step__number { font-size: 15px; font-weight: 600; color: var(--magenta); padding-top: 3px; }
  .workflow-step__content { display: grid; grid-template-columns: 175px minmax(0, 1fr); gap: 28px; align-items: start; }
  .workflow-step h3 { font-size: 20px; margin: 0; }
  .workflow-step p { margin: 0; max-width: 780px; }
  .workflow-closing { font-size: 18px !important; max-width: 800px; margin: 30px 0 0 !important; }

  /* DARK RISK SECTION */
  .section--dark { background: var(--dark); padding: 100px 0; }
  .risk-grid { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid rgba(255,255,255,.14); border-radius: var(--radius-lg); overflow: hidden; background: var(--dark-2); }
  .risk-item { padding: 30px 25px; border-left: 1px solid rgba(255,255,255,.12); }
  .risk-item:first-child { border-left: 0; }
  .risk-item h3 { color: #fff; font-size: 19px; min-height: 48px; }
  .risk-item p { color: #D1D2D6; margin-bottom: 24px; }
  .risk-priority { border-top: 1px solid rgba(255,255,255,.12); padding-top: 18px; color: var(--pink-light); font-size: 16px; line-height: 1.5; font-weight: 600; }
  .dark-note { margin-top: 34px; max-width: 920px; }
  .dark-note p { color: #D7D8DC; font-size: 16px; }

  /* QA */
  .qa-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .qa-group { border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden; background: #fff; }
  .qa-group > h3 { padding: 24px 26px; margin: 0; font-size: 21px; background: #FAFAFB; border-bottom: 1px solid var(--line); }
  .qa-row { padding: 19px 26px; border-bottom: 1px solid var(--line); }
  .qa-row:last-child { border-bottom: 0; }
  .qa-row strong { display: block; font-size: 16px; font-weight: 600; margin-bottom: 5px; }
  .qa-row p { margin: 0; }
  .qa-note { max-width: 850px; margin: 32px auto 0 !important; text-align: center; }

  /* FILE FORMATS */
  .file-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 70px; align-items: start; }
  .file-intro { max-width: 460px; position: sticky; top: 32px; }
  .source-tip { margin: 30px 0 22px; padding: 22px; border: 1px solid #E4D2DA; background: #fff; border-radius: 18px; }
  .source-tip strong { display: block; font-size: 17px; margin-bottom: 7px; }
  .source-tip p { margin: 0; }
  .format-list { border-top: 1px solid var(--line); }
  .format-row { display: grid; grid-template-columns: 230px 1fr; gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .format-row__heading h3 { font-size: 19px; margin-bottom: 7px; }
  .format-row__heading span { display: block; color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .06em; line-height: 1.45; }
  .format-row p { margin: 0; }

  /* SCALE */
  .scale-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 78px; align-items: start; }
  .scale-summary { max-width: 500px; }
  .scale-callout { margin-top: 34px; padding: 26px; border-radius: 20px; background: var(--blush); }
  .scale-callout strong { font-size: 18px; display: block; margin-bottom: 8px; }
  .scale-callout p { margin: 0; }
  .scale-list { border-top: 1px solid var(--line); }
  .scale-row { display: grid; grid-template-columns: 205px 1fr; gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--line); }
  .scale-row h3 { font-size: 18px; margin: 0; }
  .scale-row p { margin: 0; }

  /* ISO */
  .section--iso { background: #FCFCFD; border-top: 1px solid #EFEFF1; border-bottom: 1px solid #EFEFF1; }
  .iso-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
  .iso-item { padding: 38px; border-left: 1px solid var(--line); }
  .iso-item:first-child { border-left: 0; }
  .iso-code { display: inline-flex; color: var(--magenta); font-size: 16px; font-weight: 600; margin-bottom: 18px; }
  .iso-item h3 { font-size: 21px; }
  .iso-item p { margin: 0; }
  .iso-note { max-width: 830px; margin: 28px auto 0 !important; text-align: center; }

  /* WHY */
  .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
  .why-row { display: grid; grid-template-columns: 4px 1fr; gap: 20px; padding: 28px 34px 28px 0; border-bottom: 1px solid var(--line); }
  .why-row:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 48px; }
  .why-row:nth-child(even) { padding-left: 48px; }
  .why-row__line { width: 3px; height: 28px; border-radius: 3px; background: var(--magenta); margin-top: 2px; }
  .why-row h3 { font-size: 20px; }
  .why-row p { margin: 0; }

  /* RELATED */
  .related-list { border-top: 1px solid #DCDDDF; }
  .related-row { display: grid; grid-template-columns: 1fr 48px; gap: 26px; align-items: center; min-height: 120px; padding: 25px 12px 25px 0; border-bottom: 1px solid #DCDDDF; text-decoration: none; transition: background .18s ease, padding .18s ease; }
  .related-row:hover { background: #fff; padding-left: 18px; padding-right: 18px; }
  .related-row h3 { font-size: 20px; margin-bottom: 6px; }
  .related-row p { margin: 0; max-width: 900px; }
  .related-row__arrow { width: 44px; height: 44px; border-radius: 50%; display: grid; place-items: center; color: var(--magenta); background: #fff; border: 1px solid #D7D8DC; }
  .related-row__arrow svg { width: 19px; }

  /* FAQ */
  .faq-shell { display: grid; grid-template-columns: .55fr 1.45fr; gap: 80px; align-items: start; }
  .faq-heading { position: sticky; top: 34px; }
  .faq-heading p { font-size: 17px; max-width: 390px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-question { width: 100%; min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: transparent; border: 0; padding: 20px 0; cursor: pointer; text-align: left; color: var(--ink); font: inherit; font-size: 18px; font-weight: 600; }
  .faq-plus { width: 32px; height: 32px; flex: 0 0 32px; display: grid; place-items: center; border: 1px solid #D6D8DC; border-radius: 50%; color: var(--magenta); font-size: 20px; font-weight: 400; }
  .faq-answer { padding: 0 58px 26px 0; max-width: 840px; }
  .faq-answer p { font-size: 16px; }
  .faq-answer p:last-child { margin-bottom: 0; }

  /* FINAL CTA */
  .final-cta { background: var(--burgundy); padding: 82px 0; }
  .final-cta__inner { display: grid; grid-template-columns: 1.35fr .65fr; gap: 70px; align-items: center; }
  .final-cta h2 { color: #fff; max-width: 680px; }
  .final-cta p { color: #F5E8EE; max-width: 760px; }
  .final-cta p:last-child { margin-bottom: 0; }
  .final-cta__actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; max-width: 320px; margin-left: auto; width: 100%; }
  .btn--on-dark { box-shadow: none; }

  /* TABLET */
  @media (max-width: 1080px) {
    .shell { width: calc(100% - 80px); }
    .stepes-page h1 { font-size: 42px; }
    .stepes-page h2 { font-size: 32px; }

    .hero__grid { grid-template-columns: 1fr 1fr; gap: 38px; }
    .hero-art { min-height: 470px; }
    .hero-art__source { left: 26px; }
    .hero-art__flow { left: 212px; right: 25px; }
    .hero-art__markets { left: 220px; right: 24px; }

    .parts-grid { grid-template-columns: repeat(2, 1fr); }
    .connected-grid,
    .artwork-grid,
    .terminology-grid,
    .revision-grid,
    .scale-grid { gap: 46px; }

    .risk-grid { grid-template-columns: repeat(2, 1fr); }
    .risk-item { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
    .risk-item:nth-child(1),
    .risk-item:nth-child(2) { border-top: 0; }
    .risk-item:nth-child(even) { border-left: 1px solid rgba(255,255,255,.12); }

    .industry-grid { grid-template-columns: repeat(2, 1fr); }
    .faq-shell { grid-template-columns: .7fr 1.3fr; gap: 48px; }
  }

  /* TABLET STACK */
  @media (max-width: 900px) {
    .shell { width: calc(100% - 48px); }
    .section { padding: 80px 0; }
    .hero { padding: 86px 0 78px; }
    .hero__grid,
    .split-editorial,
    .connected-grid,
    .artwork-grid,
    .terminology-grid,
    .revision-grid,
    .file-grid,
    .scale-grid,
    .faq-shell,
    .final-cta__inner { grid-template-columns: 1fr; }

    .hero__copy { max-width: 760px; text-align: center; margin: 0 auto; }
    .hero__copy .eyebrow { text-align: center; }
    .hero__copy h1 { max-width: 760px; margin-left: auto; margin-right: auto; }
    .hero__lead,
    .hero__support { margin-left: auto; margin-right: auto; }
    .hero__actions { justify-content: center; }
    .hero-art { width: min(640px, 100%); margin: 16px auto 0; }

    .capability-strip__grid { grid-template-columns: repeat(2, 1fr); }
    .capability-strip__item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .capability-strip__item:nth-child(4) { border-top: 1px solid var(--line); }

    .split-editorial__heading,
    .file-intro,
    .faq-heading { position: static; max-width: 820px; }
    .split-editorial__heading,
    .file-intro { margin: 0 auto 8px; }
    .split-editorial__heading h2,
    .file-intro .eyebrow,
    .file-intro h2 { text-align: center; }
    .split-editorial__body { max-width: 820px; margin: 0 auto; }

    .connected-grid > div:first-child,
    .artwork-copy,
    .scale-summary { max-width: none; }
    .connected-grid > div:first-child > .eyebrow,
    .connected-grid > div:first-child > h2,
    .artwork-copy > .eyebrow,
    .artwork-copy > h2,
    .terminology-grid > div:first-child > .eyebrow,
    .terminology-grid > div:first-child > h2,
    .revision-grid > div:last-child > .eyebrow,
    .revision-grid > div:last-child > h2,
    .scale-summary > .eyebrow,
    .scale-summary > h2 { text-align: center; }

    .system-visual,
    .artwork-visual,
    .terminology-visual,
    .revision-visual { width: min(640px, 100%); margin-left: auto; margin-right: auto; }
    .artwork-visual { order: 2; }
    .revision-visual { order: 2; }

    .spotlight,
    .spotlight--medical { grid-template-columns: 1fr; }
    .spotlight__copy .eyebrow,
    .spotlight__copy h2 { text-align: center; }
    .inline-links { justify-content: flex-start; }

    .workflow-step { grid-template-columns: 62px minmax(0, 1fr); }
    .workflow-step__content { grid-template-columns: 155px minmax(0, 1fr); gap: 24px; }
    .format-row { grid-template-columns: 210px 1fr; }

    .iso-grid { grid-template-columns: 1fr; }
    .iso-item,
    .iso-item:first-child {
      border-left: 0;
      border-top: 1px solid var(--line);
      padding: 30px;
    }
    .iso-item:first-child { border-top: 0; }

    .faq-heading { text-align: left; }
    .faq-heading p { max-width: 720px; }
    .final-cta__actions { margin-left: 0; max-width: 420px; }
  }

  /* MOBILE */
  @media (max-width: 640px) {
    .shell { width: calc(100% - 40px); }
    .section { padding: 68px 0; }
    .hero { min-height: auto; padding: 72px 0 64px; }
    .stepes-page h1 { font-size: 38px; line-height: 1.07; }
    .stepes-page h2 { font-size: 30px; line-height: 1.16; }
    .stepes-page h3 { font-size: 20px; }
    .stepes-page .body-large,
    .section-heading .section-intro,
    .hero__lead { font-size: 18px !important; }

    .section-heading--center,
    .split-editorial__heading,
    .file-intro,
    .connected-grid > div:first-child > .eyebrow,
    .connected-grid > div:first-child > h2,
    .artwork-copy > .eyebrow,
    .artwork-copy > h2,
    .terminology-grid > div:first-child > .eyebrow,
    .terminology-grid > div:first-child > h2,
    .revision-grid > div:last-child > .eyebrow,
    .revision-grid > div:last-child > h2,
    .scale-summary > .eyebrow,
    .scale-summary > h2 { text-align: center; }

    .section-heading--left { text-align: left; }
    .section-heading { margin-bottom: 36px; }
    .section-heading--center .section-intro { text-align: center; }
    .section-heading--left .section-intro { text-align: left; }

    .hero__copy { text-align: center; }
    .hero__actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .hero__actions .btn { width: 100%; min-height: 52px; }

    .hero-art { min-height: 430px; border-radius: 24px; }
    .hero-art__source { top: 48px; left: 22px; width: 132px; }
    .pack { height: 218px; padding: 18px 14px; }
    .pack__brand { font-size: 20px; }
    .hero-art__flow { top: 139px; left: 174px; right: 16px; gap: 4px; font-size: 8px; }
    .hero-art__markets { left: 171px; right: 14px; bottom: 31px; grid-template-columns: 1fr; gap: 7px; }
    .market-card { min-height: 65px; padding: 8px; gap: 7px; }
    .market-card:nth-child(n+3) { display: none; }
    .mini-pack { min-height: 49px; padding: 7px; }
    .mini-pack span { font-size: 9px; margin-bottom: 4px; }
    .mini-pack i { margin: 4px 0; height: 2px; }
    .lang { width: 26px; height: 26px; flex-basis: 26px; font-size: 9px; }

    .capability-strip__grid { grid-template-columns: 1fr; }
    .capability-strip__item { border-left: 0; border-top: 1px solid var(--line); padding: 22px 4px; }
    .capability-strip__item:first-child { border-top: 0; }

    .parts-grid,
    .industry-grid,
    .fit-grid,
    .qa-grid,
    .term-benefits,
    .revision-points,
    .why-grid,
    .iso-grid { grid-template-columns: 1fr; }

    .parts-grid { gap: 12px; }
    .part-card { min-height: auto; padding: 24px; }

    .component-row,
    .process-row,
    .scale-row,
    .format-row { grid-template-columns: 1fr; gap: 8px; }

    .component-row h3,
    .process-row h3,
    .scale-row h3 { margin-bottom: 0; }

    .system-visual { min-height: auto; padding: 26px 18px; }
    .system-components { grid-template-columns: repeat(2, 1fr); }
    .system-stage,
    .system-market-stage { padding: 18px 14px; }
    .system-component { min-height: 60px; font-size: 16px; }

    .artwork-visual { padding: 24px 16px; min-height: 410px; overflow: hidden; }
    .dieline { grid-template-columns: .68fr 1fr .68fr; gap: 3px; transform: none; }
    .die-panel { min-height: 210px; padding: 15px 10px; }
    .die-panel--front { min-height: 260px; padding-top: 42px; }
    .die-panel--front strong { font-size: 22px; }
    .die-product { font-size: 12px; }
    .die-rtl { font-size: 14px; }
    .artwork-actions { font-size: 10px; }

    .fit-grid { border-bottom: 0; }
    .fit-row,
    .fit-row:nth-child(odd),
    .fit-row:nth-child(even) { border-right: 0; border-bottom: 1px solid var(--line); padding: 24px 0; }
    .fit-row:last-child { border-bottom: 1px solid var(--line); }

    .spotlight__copy,
    .spotlight__panel,
    .regulated-columns { padding: 32px 24px; }
    .two-col-list { columns: 1; }
    .food-controls__grid { grid-template-columns: 1fr; }
    .food-control:nth-child(2) { border-top: 1px solid #E1E2E5; }
    .fit-support { margin-top: -18px !important; text-align: left; }
    .regulated-columns { grid-template-columns: 1fr; }
    .regulated-note { grid-column: auto; }

    .term-benefit,
    .term-benefit:nth-child(odd),
    .term-benefit:nth-child(even),
    .revision-point,
    .revision-point:nth-child(odd),
    .revision-point:nth-child(even),
    .why-row,
    .why-row:nth-child(odd),
    .why-row:nth-child(even) { border-right: 0; padding: 22px 0; }

    .terminology-visual { min-height: 420px; padding: 28px 20px; }
    .term-grid { grid-template-columns: repeat(2, 1fr); }

    .revision-visual { min-height: auto; padding: 28px 22px; grid-template-columns: 1fr; gap: 20px; }
    .revision-card { width: min(210px, 100%); margin: 0 auto; }
    .revision-pack { height: 196px; padding: 22px 14px; }
    .revision-diff { width: min(320px, 100%); margin: 0 auto; }
    .diff-row { padding: 12px; text-align: center; }
    .diff-row strong { font-size: 12px; }
    .diff-arrow { transform: rotate(90deg); }
    .revision-card--new { text-align: center; }

    .workflow { margin-top: 20px; }
    .workflow-step { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; padding: 24px 0; }
    .workflow-step__number { padding-top: 2px; }
    .workflow-step__content { grid-template-columns: 1fr; gap: 7px; }
    .workflow-step h3 { font-size: 20px; }
    .workflow-step p { max-width: none; }

    .risk-grid { grid-template-columns: 1fr; }
    .risk-item,
    .risk-item:nth-child(even) { border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
    .risk-item:first-child { border-top: 0; }
    .risk-item h3 { min-height: 0; }

    .qa-note,
    .iso-note { text-align: left; }

    .format-row__heading { display: flex; justify-content: space-between; gap: 14px; align-items: baseline; flex-wrap: wrap; }
    .source-tip { margin-top: 24px; }

    .iso-grid { border-radius: 22px; }

    .related-row { grid-template-columns: 1fr 44px; min-height: 132px; padding-right: 0; }

    .faq-heading { text-align: left; }
    .faq-question { font-size: 17px; min-height: 72px; padding: 18px 0; }
    .faq-answer { padding-right: 0; }
    .inline-links,
    .paired-links,
    .faq-links {
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
    }

    .final-cta { padding: 68px 0; }
    .final-cta__inner { gap: 32px; }
    .final-cta__inner > div:first-child h2 { text-align: center; }
    .final-cta__actions { max-width: none; }
    .final-cta__actions .btn { width: 100%; min-height: 52px; }
  }

  /* NARROW MOBILE */
  @media (max-width: 360px) {
    .system-components { grid-template-columns: 1fr; }
    .hero-art { min-height: 395px; }
    .hero-art__source { width: 116px; }
    .pack { height: 200px; }
    .hero-art__flow { left: 153px; font-size: 7px; }
    .hero-art__markets { left: 150px; }
    .revision-visual { padding-left: 8px; padding-right: 8px; gap: 6px; }
  }
`;
