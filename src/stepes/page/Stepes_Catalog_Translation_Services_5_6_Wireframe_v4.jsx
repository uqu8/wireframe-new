import React, { useState } from "react";

const MAGENTA = "#C11D63";
const BLUSH = "#FDF2F7";
const DARK = "#171717";
const TEXT = "#202124";
const MUTED = "#5F6368";
const BORDER = "#E6E8EB";
const SOFT = "#F7F8FA";

const links = {
  quote: "https://www.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-sales/",
  retail: "https://www.stepes.com/retail-ecommerce-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  electronics: "https://www.stepes.com/electronics-translation-services/",
  automotive: "https://www.stepes.com/automotive-translation-services/",
  construction: "https://www.stepes.com/construction-translation-services/",
  medicalDevice: "https://www.stepes.com/medical-device-translation-services/",
  packaging: "https://www.stepes.com/packaging-translation-services/",
  marketing: "https://www.stepes.com/marketing-translation-services/",
  document: "https://www.stepes.com/document-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  continuous: "https://www.stepes.com/continuous-translation/",
  api: "https://www.stepes.com/developers/translation-api/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  languages: "https://www.stepes.com/translation-languages/",
  aiTranslation: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
};

const proofItems = [
  ["100+ Languages", "Global coverage for product catalogs and multilingual product information."],
  ["AI + Human Workflows", "Match automation and professional expertise to each content type."],
  ["Native File Support", "InDesign, PDF, Excel, CSV, XML, structured data, and more."],
  ["Multilingual DTP", "Publication-ready print, PDF, digital, and native-file delivery."],
  ["Product Data Integrity", "Protect identifiers, specifications, attributes, and structured content."],
];

const anatomyItems = [
  ["Customer-Facing Language", "Product descriptions, feature copy, merchandising language, and calls to action need to sound natural and persuasive in each market."],
  ["Technical Product Information", "Specifications, attributes, materials, dimensions, units, and component terminology require precise meaning and controlled vocabulary."],
  ["Protected Product Data", "SKUs, model numbers, part numbers, product codes, and other identifiers often need to remain unchanged across languages."],
  ["Publishing & Visual Structure", "Tables, product matrices, images, graphics, page layouts, and native publishing files must remain usable after the language changes."],
];

const contentTypes = [
  ["Product Titles & Names", "Product families, models, variants, collections, branded names, and naming conventions."],
  ["Descriptions & Marketing Copy", "Benefits, differentiators, merchandising content, calls to action, and promotional language."],
  ["Specifications & Attributes", "Materials, dimensions, capacities, components, configurations, and technical properties."],
  ["Tables & Comparison Content", "Product matrices, selection guides, compatibility tables, and comparison charts."],
  ["SKUs & Product Identifiers", "Part numbers, model codes, stock identifiers, and reference fields that remain protected."],
  ["Images & Graphics", "Diagrams, captions, callouts, illustrations, charts, and embedded visual text."],
  ["Pricing & Commercial Content", "Approved pricing labels, promotional fields, availability messages, and sales conditions."],
  ["Metadata & Structured Fields", "Categories, taxonomies, tags, filters, product feeds, SEO fields, and digital metadata."],
];

const connectedChannels = [
  ["PIM / PXM", "Product names, descriptions, attributes, categories, taxonomies, and specifications."],
  ["Print & PDF", "Catalogs for print distribution, digital download, sales teams, dealers, and customers."],
  ["Ecommerce", "Product pages, category pages, filters, navigation, merchandising, and shopping content."],
  ["Marketplaces", "Structured product information for external sales channels and marketplace listings."],
  ["Dealer & Distributor", "Consistent technical and sales content across regional channel partners."],
  ["Product Feeds", "Spreadsheets, database exports, XML, CSV, JSON, and other structured product data."],
];

const industries = [
  {
    title: "Manufacturing & Industrial Equipment",
    body: "Machinery, tools, components, fasteners, control systems, testing equipment, material-processing products, welding systems, and other industrial applications.",
    link: links.manufacturing,
    linkLabel: "Explore Manufacturing Translation",
  },
  {
    title: "Technology & Electronics",
    body: "Electronic components, computers and peripherals, communications equipment, sensors, monitoring products, vision systems, robotics, and automation.",
    link: links.electronics,
    linkLabel: "Explore Electronics Translation",
  },
  {
    title: "Automotive & Transportation",
    body: "Vehicles, components, replacement parts, accessories, power transmission systems, commercial equipment, and transportation products.",
    link: links.automotive,
    linkLabel: "Explore Automotive Translation",
  },
  {
    title: "Construction, Energy & Infrastructure",
    body: "Construction equipment, HVAC systems, electrical equipment, oil and gas products, mining equipment, architectural products, and engineering systems.",
    link: links.construction,
    linkLabel: "Explore Construction Translation",
  },
  {
    title: "Medical, Laboratory & Scientific Products",
    body: "Medical equipment, dental products, laboratory systems, research instruments, testing products, and scientific equipment requiring specialized terminology.",
    link: links.medicalDevice,
    linkLabel: "Explore Medical Device Translation",
  },
  {
    title: "Retail & Consumer Products",
    body: "Food and beverage products, packaging, agricultural products, cleaning products, consumer goods, and retail merchandise across physical and digital channels.",
    link: links.retail,
    linkLabel: "Explore Retail & E-commerce Translation",
  },
];

const dataRules = [
  ["SKU", "Protect", "Keep approved stock-keeping units and product identifiers unchanged unless specific instructions require otherwise."],
  ["Model Number", "Protect", "Preserve model codes, part numbers, reference numbers, and identifiers that must remain consistent."],
  ["Product Name", "Apply Brand Rules", "Translate, localize, or retain names according to naming conventions and trademark requirements."],
  ["Product Description", "Translate & Localize", "Create accurate, natural descriptions that explain value clearly to local customers."],
  ["Dimensions & Numerical Data", "Validate", "Protect numerical meaning and apply approved market-specific formatting or conversion rules."],
  ["Materials & Components", "Control Terminology", "Use approved product and technical vocabulary consistently across related content."],
  ["Technical Specifications", "Translate & Verify", "Maintain meaning across performance information, features, configurations, and attributes."],
  ["Marketing Copy", "Localize", "Adapt persuasive language for audience, brand voice, channel, and local expectations."],
  ["Category & Taxonomy", "Standardize", "Use controlled multilingual terms across categories, filters, product families, and structured systems."],
];

const workflowRoutes = [
  ["High-Volume Product Attributes", "AI-assisted translation, approved terminology, translation memory, automated checks, and targeted professional review.", "Scale and consistency"],
  ["Product Descriptions", "AI productivity can be combined with professional linguistic review for fluency, accuracy, terminology, and local relevance.", "Scalable product localization"],
  ["Technical Specifications", "Route technical catalog content to linguists with relevant subject-matter expertise and controlled terminology.", "Technical accuracy"],
  ["Marketing & Merchandising Copy", "Use professional localization or transcreation when persuasive impact and local customer expectations matter.", "Local customer engagement"],
  ["High-Visibility Brand Content", "Apply additional human review or in-market validation to headlines, launches, and premium product storytelling.", "Brand quality"],
  ["Repeated Catalog Content", "Reuse approved translations through translation memory so reviewers can focus on new and changed content.", "Consistency and efficiency"],
  ["Critical Product Terminology", "Use approved glossaries and terminology resources across AI systems, linguists, reviewers, and stakeholders.", "Language governance"],
];

const tmExamples = [
  "Product descriptions",
  "Feature statements",
  "Technical specifications",
  "Category descriptions",
  "Table headings",
  "Product instructions",
  "Standard marketing phrases",
  "Repeated catalog sections",
];

const termExamples = [
  "Approved product names",
  "Preferred technical terms",
  "Component names",
  "Materials",
  "Abbreviations",
  "Product categories",
  "Brand terminology",
  "Market-specific variants",
  "Prohibited or outdated terms",
  "Do-not-translate content",
];

const dtpCapabilities = [
  ["Text Reflow", "Adapt for language expansion, contraction, line breaks, and shifting page flow."],
  ["International Typography", "Support multilingual fonts, character sets, script behavior, and local typographic conventions."],
  ["Tables & Product Grids", "Preserve alignment across product specifications, comparison tables, and complex page structures."],
  ["Images & Graphics", "Translate and reintegrate approved text in diagrams, callouts, labels, and illustrations."],
  ["RTL Layouts", "Support Arabic, Hebrew, and other right-to-left production requirements where applicable."],
  ["Visual QA", "Check truncation, overlap, fonts, spacing, line breaks, alignment, missing content, and page quality."],
];

const structuredFormats = [
  ["Excel", "Translate approved cells while protecting formulas, identifiers, and designated nontranslatable content."],
  ["CSV & TSV", "Preserve delimiters, column relationships, product identifiers, and required file structure."],
  ["XML", "Configure translation around the applicable schema, approved elements, attributes, and protected content."],
  ["JSON", "Translate designated customer-facing values while preserving keys, syntax, variables, and nontranslatable data."],
  ["Database & PIM Exports", "Support structured records containing product descriptions, attributes, categories, taxonomies, and multilingual fields."],
  ["Custom Structured Files", "Define processing rules for proprietary formats based on the file structure and production requirements."],
];

const stackItems = [
  ["PIM / PXM Systems", "Multilingual product descriptions, attributes, specifications, categories, and taxonomies."],
  ["Ecommerce Platforms", "Catalog and storefront content prepared for additional languages and markets."],
  ["Content Management Systems", "Product pages, landing pages, web content, and supporting digital information."],
  ["Digital Asset Management", "Product imagery, diagrams, brochures, graphics, and localized creative assets."],
  ["ERP & Product Databases", "Exported product records and enterprise data processed using defined translation and protection rules."],
  ["Marketplace Feeds", "Structured multilingual product content distributed to third-party sales channels."],
  ["Scheduled Exports & Feeds", "Repeatable product-content handoffs from systems that publish or exchange structured catalog data on a recurring cadence."],
  ["Repositories & Custom Systems", "Repeatable localization around enterprise repositories, scheduled exports, and customer-specific operations."],
];

const updateStates = [
  ["Unchanged Content", "Reuse previously approved translations when they remain appropriate in the new catalog context."],
  ["Modified Content", "Leverage existing translations while linguists and reviewers focus on the specific change."],
  ["New Products", "Route new content through the appropriate AI, human, technical, or marketing translation workflow."],
  ["Updated Terminology", "Carry new product names, preferred translations, and approved market conventions into future work."],
  ["Retired Content", "Manage obsolete terminology and legacy translations so outdated language does not propagate into new releases."],
];

const processSteps = [
  ["Analyze", "Review source files, product structure, repetition, language assets, target locales, layouts, graphics, and required deliverables."],
  ["Prepare", "Define translatable content, protected product data, naming rules, terminology, file-processing logic, and DTP requirements."],
  ["Translate", "Apply AI translation, translation memory, terminology, professional linguists, specialists, localization, or transcreation as appropriate."],
  ["Review", "Validate accuracy, product terminology, technical meaning, brand voice, numerical content, consistency, and market suitability."],
  ["Reintegrate & Publish", "Return translations to InDesign, PDF, spreadsheets, XML, CSV, JSON, PIM exports, ecommerce feeds, or other agreed environments."],
  ["Validate & Deliver", "Complete linguistic, product-data, structural, and visual QA, then retain approved language assets for future updates."],
];

const languages = [
  ["Spanish", "https://www.stepes.com/spanish-translation-services/"],
  ["French", "https://www.stepes.com/french-translation-services/"],
  ["German", "https://www.stepes.com/german-translation-services/"],
  ["Chinese", "https://www.stepes.com/chinese-translation-services/"],
  ["Japanese", "https://www.stepes.com/japanese-translation-services/"],
  ["Korean", "https://www.stepes.com/korean-translation-services/"],
  ["Portuguese", "https://www.stepes.com/portuguese-translation-services/"],
  ["Italian", "https://www.stepes.com/italian-translation-services/"],
  ["Dutch", "https://www.stepes.com/dutch-translation-services/"],
  ["Arabic", "https://www.stepes.com/arabic-translation-services/"],
  ["Vietnamese", "https://www.stepes.com/vietnamese-translation-services/"],
  ["Thai", "https://www.stepes.com/thai-translation-services/"],
];

const qaDimensions = [
  ["Linguistic QA", "Accuracy, fluency, grammar, completeness, terminology, style, tone, brand consistency, and market appropriateness."],
  ["Product Data QA", "SKUs, model numbers, part numbers, measurements, technical values, units, attributes, names, and protected terminology."],
  ["Structural QA", "Fields, tags, tables, structured files, missing content, duplicated content, protected elements, and file consistency."],
  ["Visual QA", "Text overflow, truncation, fonts, line breaks, alignment, tables, image placement, spacing, page flow, and RTL presentation."],
];

const relatedServices = [
  ["Retail & E-commerce Translation", "Product listings, storefronts, marketplaces, customer journeys, promotional content, and continuously changing product information.", links.retail, "Explore Retail & E-commerce Translation"],
  ["Technical Translation", "Specifications, datasheets, technical literature, engineering documentation, installation content, and support materials.", links.technical, "Explore Technical Translation"],
  ["Packaging Translation", "Packaging copy, product labels, cartons, artwork, consumer information, and related product-content assets.", links.packaging, "Explore Packaging Translation"],
  ["Marketing Translation", "Brochures, campaigns, product launches, sales collateral, promotional messaging, and customer-facing content.", links.marketing, "Explore Marketing Translation"],
  ["Document Translation", "Business and product documentation across common office, publishing, technical, and digital formats.", links.document, "Explore Document Translation"],
  ["Multilingual Desktop Publishing", "Publication-ready layouts with multilingual typography, graphics, text expansion, and final visual QA.", links.dtp, "Explore Multilingual Desktop Publishing"],
];

const faqs = [
  ["What is product catalog translation?", "Product catalog translation—also commonly called product catalogue translation—is the process of translating and localizing customer-facing and technical catalog content for additional languages and markets. It can include product names, descriptions, specifications, attributes, tables, marketing copy, graphics, structured product data, and final multilingual publishing."],
  ["What types of product catalogs can Stepes translate?", "Stepes supports catalogs for manufacturing, industrial equipment, technology, electronics, automotive, transportation, construction, energy, medical and laboratory equipment, retail, consumer products, food and beverage, packaging, agriculture, and many other product categories. Workflows are configured according to subject matter, source format, target languages, content structure, and final deliverables."],
  ["Can Stepes translate Adobe InDesign product catalogs?", "Yes. Stepes supports Adobe InDesign and multilingual desktop publishing workflows for product catalogs. Providing the complete native source package whenever available helps support efficient translation, layout adaptation, linked-asset management, and final production of editable and publication-ready multilingual files."],
  ["Can you translate a PDF catalog if the original InDesign file is unavailable?", "Yes. PDF catalogs can often be translated, but the optimal workflow depends on how the PDF was created. Stepes reviews whether the file contains editable text, flattened graphics, scanned content, embedded images, or other elements and then determines an appropriate extraction, translation, reconstruction, formatting, and QA process."],
  ["Should I provide the original source files with my PDF?", "Yes, whenever possible. Original InDesign, Illustrator, FrameMaker, Word, PowerPoint, or other editable source files generally provide better access to text, graphics, styles, and page structure, making multilingual production more efficient and improving final editability and formatting quality."],
  ["How does Stepes protect SKUs, part numbers, and model numbers?", "Project preparation can identify designated SKUs, part numbers, model numbers, product codes, variables, and other fields as protected content. These rules help prevent identifiers that should remain unchanged from being unintentionally translated or altered during multilingual processing."],
  ["Can Stepes translate product data from a PIM or PXM system?", "Yes. Stepes can work with product content exported from PIM, PXM, database, ecommerce, and other enterprise content systems. Depending on the customer environment, workflows can use structured files, portal-based processes, APIs, or customized integrations."],
  ["Do you support Excel, CSV, XML, and JSON product catalogs?", "Yes. Stepes supports common structured formats including Excel, CSV, XML, JSON, and other data files. Processing rules can distinguish translatable fields from keys, identifiers, formulas, variables, tags, delimiters, and other content that needs to remain protected."],
  ["How do you maintain terminology across large product catalogs?", "Stepes uses terminology management, translation memory, style guidance, protected-term rules, and professional review to maintain consistent multilingual product language. Approved terms can be reused across product families, catalog editions, ecommerce content, documentation, and other related channels."],
  ["What is translation memory, and how does it help catalog translation?", "Translation memory stores previously translated and approved bilingual content so identical or similar content can be identified in future projects. Because product catalogs often repeat descriptions, features, headings, technical phrases, and specifications, translation memory can reduce repetitive work while improving consistency between releases."],
  ["Can product descriptions and technical specifications use different translation workflows?", "Yes. Different catalog content can be routed according to its purpose and requirements. High-volume structured attributes may use AI-assisted workflows with automated controls, while technical specifications may require subject-qualified review and high-visibility marketing descriptions may benefit from professional localization or transcreation."],
  ["Can Stepes provide multilingual desktop publishing and final PDFs?", "Yes. Stepes provides multilingual DTP services that can address text expansion, international fonts, page layout, tables, graphics, image-based text, and right-to-left requirements. Depending on the project scope, deliverables can include formatted multilingual PDFs and editable source files."],
  ["Can Stepes translate catalogs containing images and graphics?", "Yes. Text embedded within product graphics, diagrams, charts, callouts, illustrations, and other visual assets can be included in the localization workflow when required. The translated content can then be reintegrated into the appropriate graphical or publishing format."],
  ["How do you handle measurements, dimensions, and units?", "Stepes preserves numerical accuracy and follows project-specific rules for measurements, dimensions, decimal formats, units, and other product data. Market-specific conversion or localization can be performed when explicitly required and approved rather than applied indiscriminately."],
  ["Can catalog translations be reused on ecommerce websites?", "Yes. Translation memory and terminology management can help reuse approved product language across catalogs, ecommerce listings, product pages, marketplaces, technical documentation, and other channels where the same content appears. Structured workflows can further support reuse across connected product-content systems."],
  ["Can product catalogs be translated continuously as products change?", "Yes. Continuous translation workflows can support new products, modified specifications, revised descriptions, seasonal releases, and other catalog updates. Previously approved translations and terminology can be reused where appropriate while new or changed content is routed through the required translation and review process."],
  ["How many languages does Stepes support for catalog translation?", "Stepes provides professional catalog translation services in more than 100 languages, including Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Arabic, Vietnamese, Thai, and many other global and regional languages."],
  ["How quickly can Stepes translate a product catalog?", "Turnaround depends on catalog size, language count, subject matter, source-file condition, content repetition, review requirements, DTP complexity, and final deliverables. Stepes evaluates these factors during project analysis and builds a workflow and schedule appropriate to the specific catalog."],
];

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, center = false, dark = false, id }) {
  return (
    <div className={`section-heading ${center ? "section-heading-center" : ""}`} id={id}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function CatalogHeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Illustrative German product catalog connected to protected product data and print, PIM, and ecommerce channels">
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />
      <div className="catalog-sheet catalog-sheet-back">
        <div className="mini-line short" />
        <div className="mini-line" />
        <div className="mini-block" />
      </div>
      <div className="catalog-sheet catalog-sheet-front">
        <div className="catalog-topline">
          <span>PRODUKTKATALOG</span>
          <span className="locale-pill">DE-DE</span>
        </div>
        <div className="catalog-product">
          <div className="product-visual">
            <div className="product-object" />
            <div className="product-shadow" />
          </div>
          <div className="product-copy">
            <div className="copy-label">SERIE A</div>
            <div className="copy-title" />
            <div className="copy-title copy-title-short" />
            <div className="copy-text" />
            <div className="copy-text copy-text-short" />
            <div className="spec-grid">
              <span>SKU</span><b>AX-420</b>
              <span>Material</span><b>Aluminium</b>
              <span>Spannung</span><b>24 V</b>
            </div>
          </div>
        </div>
      </div>
      <div className="data-panel hero-data-panel">
        <div className="data-dot" />
        <div>
          <span className="visual-kicker">PRODUCT DATA</span>
          <strong>Attributes protected</strong>
        </div>
      </div>
      <div className="data-panel hero-channel-panel">
        <div className="channel-icon">↗</div>
        <div>
          <span className="visual-kicker">CHANNELS</span>
          <strong>Print · PIM · Ecommerce</strong>
        </div>
      </div>
    </div>
  );
}

function ConnectedContentVisual() {
  return (
    <div className="connected-visual" role="img" aria-label="Illustrative product information flowing to print catalog, ecommerce, marketplace, and PIM or PXM channels">
      <div className="source-node">
        <span className="visual-kicker">PRODUCT INFORMATION</span>
        <strong>One product record. Multiple channels.</strong>
        <div className="source-fields">
          <span>Product name</span>
          <span>SKU</span>
          <span>Description</span>
          <span>Specifications</span>
        </div>
      </div>
      <div className="connection-rail" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="channel-nodes">
        <div><b>Catalog</b><span>Print + PDF</span></div>
        <div><b>Ecommerce</b><span>Product pages</span></div>
        <div><b>Marketplace</b><span>Structured feeds</span></div>
        <div><b>PIM / PXM</b><span>Product records</span></div>
      </div>
    </div>
  );
}

function DtpVisual() {
  return (
    <div className="dtp-visual" role="img" aria-label="Illustrative native InDesign catalog transformed into French, Japanese, and Arabic publication-ready outputs">
      <div className="dtp-stage dtp-source">
        <span className="visual-kicker">NATIVE SOURCE</span>
        <strong>Catalog.indd</strong>
        <div className="page-preview page-source">
          <div className="page-picture" />
          <div className="page-lines"><span /><span /><span /></div>
        </div>
      </div>
      <div className="dtp-arrow" aria-hidden="true">→</div>
      <div className="dtp-stage dtp-output">
        <span className="visual-kicker">PUBLICATION-READY</span>
        <strong>Multilingual outputs</strong>
        <div className="output-pages">
          <div className="page-preview"><i>FR</i><div className="page-picture" /><div className="page-lines"><span /><span /></div></div>
          <div className="page-preview"><i>JA</i><div className="page-picture" /><div className="page-lines"><span /><span /></div></div>
          <div className="page-preview"><i>AR</i><div className="page-picture" /><div className="page-lines"><span /><span /></div></div>
        </div>
      </div>
    </div>
  );
}

function StructuredPreview() {
  return (
    <div className="structured-preview" role="img" aria-label="Illustrative structured product record showing protected, translated, terminology-controlled, validated, and localized fields">
      <div className="structured-top">
        <span>PRODUCT RECORD</span>
        <span className="status-chip">Structure preserved</span>
      </div>
      <div className="code-row"><span className="code-key">"sku"</span><span>:</span><span className="code-protected">"AX-420"</span><small>PROTECTED</small></div>
      <div className="code-row"><span className="code-key">"product_name"</span><span>:</span><span>"Industrial Sensor"</span><small>TRANSLATE</small></div>
      <div className="code-row"><span className="code-key">"material"</span><span>:</span><span>"Aluminum"</span><small>TERMBASE</small></div>
      <div className="code-row"><span className="code-key">"voltage"</span><span>:</span><span className="code-protected">"24 V"</span><small>VALIDATE</small></div>
      <div className="code-row"><span className="code-key">"description"</span><span>:</span><span>"Compact sensor for…"</span><small>LOCALIZE</small></div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-panel">
      {faqs.map(([q, a], index) => {
        const isOpen = open === index;
        return (
          <div className="faq-row" key={q}>
            <button
              type="button"
              className="faq-question"
              id={`faq-question-${index}`}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{q}</span>
              <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`faq-answer ${isOpen ? "faq-answer-open" : ""}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              aria-hidden={!isOpen}
            >
              <p>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CatalogTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-light">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Product Catalog Translation Services for Global Markets</h1>
            <p className="hero-lead">
              Translate complex product catalogs across print, digital, ecommerce, and structured product-data channels. Stepes combines professional linguists, AI-powered workflows, translation memory, terminology management, multilingual desktop publishing, and quality assurance to deliver accurate, consistent, publication-ready catalogs in 100+ languages.
            </p>
            <p className="hero-support">
              From Adobe InDesign and PDF to Excel, XML, CSV, and PIM exports, Stepes localizes customer-facing content while protecting SKUs, specifications, attributes, and other critical product data.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
          <CatalogHeroVisual />
        </div>
      </section>

      <section className="proof-band" aria-label="Catalog translation service highlights">
        <div className="shell proof-grid">
          {proofItems.map(([title, body]) => (
            <div className="proof-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="shell split-overview">
          <div className="sticky-heading">
            <SectionHeading
              title="A Product Catalog Is More Than a Document"
              intro="Product catalog translation brings together technical accuracy, marketing localization, structured product data, terminology control, and visual publishing within one multilingual workflow."
            />
            <p>
              A single catalog may contain thousands of product names, descriptions, specifications, attributes, tables, part numbers, dimensions, diagrams, images, and sales messages. Some content needs precise technical translation. Some needs natural marketing localization. Some should remain completely unchanged.
            </p>
            <p>
              Stepes helps companies manage these requirements together so customers receive clear, locally relevant product information without compromising the identifiers, specifications, terminology, or layouts that make the catalog accurate and usable.
            </p>
          </div>
          <div className="editorial-list anatomy-list">
            {anatomyItems.map(([title, body]) => (
              <div className="editorial-row" key={title}>
                <div className="row-marker" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <SectionHeading
            title="One Catalog. Many Content Types. One Multilingual Workflow."
            intro="Product information serves different purposes throughout a catalog. Stepes applies the right linguistic, technical, and quality approach to each content type while maintaining consistency across the complete publication."
            center
          />
          <div className="content-grid">
            {contentTypes.map(([title, body]) => (
              <div className="content-cell" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section connected-section">
        <div className="shell connected-grid">
          <div className="connected-copy">
            <SectionHeading
              eyebrow="Connected Product Content"
              title="Your Product Information Doesn't Live in One Catalog"
              intro="The same product name, specification, description, attribute, or feature may appear in a printed catalog, downloadable PDF, ecommerce storefront, marketplace listing, distributor portal, mobile experience, or product database."
            />
            <p>
              Translating these channels independently can create duplicate work and inconsistent product language. Stepes helps organizations build multilingual product content around shared translation memories, approved terminology, product naming conventions, and connected workflows so the same language assets can support multiple customer touchpoints.
            </p>
            <ArrowLink href={links.retail}>Explore Retail &amp; E-commerce Translation</ArrowLink>
          </div>
          <ConnectedContentVisual />
        </div>
        <div className="shell channel-grid">
          {connectedChannels.map(([title, body]) => (
            <div className="channel-item" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="Industry Expertise"
            title="Product Catalog Translation Across Global Industries"
            intro="Stepes supports manufacturers, retailers, technology companies, equipment providers, consumer brands, distributors, and other organizations with complex multilingual product portfolios. Workflows can be adapted to the terminology, file formats, publishing requirements, and quality expectations of each industry."
            center
          />
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ArrowLink href={item.link}>{item.linkLabel}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark data-integrity-section">
        <div className="shell">
          <SectionHeading
            title="Protect the Product Data, Not Just the Words"
            intro="Product catalog localization requires knowing what to translate—and what not to translate. Stepes identifies and protects critical product information while translating the customer-facing language around it."
            center
            dark
          />
          <div className="data-rules-panel">
            <div className="data-rules-head">
              <span>FIELD</span><span>TREATMENT</span><span>LOCALIZATION RULE</span>
            </div>
            {dataRules.map(([field, treatment, detail]) => (
              <div className="data-rule-row" key={field}>
                <strong><span className="mobile-data-label">Field</span>{field}</strong>
                <span className="data-treatment"><span className="mobile-data-label">Treatment</span>{treatment}</span>
                <p><span className="mobile-data-label">Localization Rule</span>{detail}</p>
              </div>
            ))}
          </div>
          <div className="dark-note">
            <p>
              Product data integrity also extends to structured files. Translation processing can distinguish customer-facing text from keys, identifiers, formulas, tags, variables, delimiters, protected fields, and other content that should remain unchanged.
            </p>
            <ArrowLink href={links.fileFormats} className="editorial-link-dark">Explore File Format Support</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white workflow-routing-section">
        <div className="shell">
          <SectionHeading
            eyebrow="AI + Human Translation"
            title="The Right Translation Workflow for Every Product Field"
            intro="A technical specification, a product attribute, a premium brand description, and a short-lived product feed do not necessarily require the same translation process. Stepes matches the workflow to the purpose and risk of the content."
            center
          />
          <div className="workflow-routing-list">
            {workflowRoutes.map(([title, body, objective]) => (
              <div className="workflow-route" key={title}>
                <div className="workflow-route-title"><h3>{title}</h3></div>
                <p>{body}</p>
                <div className="objective"><span>Primary objective</span><strong>{objective}</strong></div>
              </div>
            ))}
          </div>
          <div className="center-link-row">
            <ArrowLink href={links.aiTranslation}>Explore AI + Human Translation Workflows</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section language-assets-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Language Assets"
            title="One Product Language Across Every Catalog and Market"
            intro="Stepes connects translation memory, terminology management, style guidance, protected terms, and reviewer feedback so approved product language can be reused across catalogs, channels, and markets."
            center
          />
          <div className="assets-grid">
            <article className="asset-panel">
              <div className="asset-panel-head">
                <span className="asset-symbol">TM</span>
                <div><h3>Translation Memory</h3><p>Reuse previously approved bilingual product content when identical or similar text appears again.</p></div>
              </div>
              <div className="tag-list">
                {tmExamples.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ArrowLink href={links.translationMemory}>Explore Translation Memory</ArrowLink>
            </article>
            <article className="asset-panel">
              <div className="asset-panel-head">
                <span className="asset-symbol">TERM</span>
                <div><h3>Terminology Management</h3><p>Govern approved product vocabulary at the term level across AI systems, linguists, reviewers, and markets.</p></div>
              </div>
              <div className="tag-list">
                {termExamples.map((item) => <span key={item}>{item}</span>)}
              </div>
              <ArrowLink href={links.terminology}>Explore Terminology Management</ArrowLink>
            </article>
          </div>
          <div className="asset-support-grid">
            <div><h3>Style Guides</h3><p>Maintain voice, tone, capitalization, punctuation, measurement conventions, product naming, and market-specific writing preferences.</p></div>
            <div><h3>Protected Terms</h3><p>Identify trademarks, brands, SKUs, model numbers, proprietary technologies, and other content that must remain unchanged.</p></div>
            <div><h3>Reviewer Feedback</h3><p>Capture validated corrections and terminology decisions so improvements from one catalog release strengthen future multilingual content.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft dtp-section">
        <div className="shell dtp-grid">
          <div className="dtp-copy">
            <SectionHeading
              eyebrow="Multilingual Publishing"
              title="Preserve the Catalog, Not Just the Words"
              intro="A translated catalog is not finished when the language is finished. Text expansion, fonts, tables, product grids, images, page references, and right-to-left languages can all affect the final publication."
            />
            <p className="callout-copy">Send the source catalog. Receive a publication-ready multilingual catalog.</p>
            <p>
              Stepes combines catalog translation with multilingual desktop publishing to help organizations move from native source files to professionally formatted multilingual deliverables. Native source packages are recommended whenever they are available because they improve access to text, graphics, styles, linked assets, and page structure.
            </p>
            <ArrowLink href={links.dtp}>Explore Multilingual Desktop Publishing</ArrowLink>
          </div>
          <DtpVisual />
        </div>
        <div className="shell source-scenario-grid">
          <div>
            <h3>Native Source Files Available</h3>
            <p>When Adobe InDesign, Illustrator, FrameMaker, Word, PowerPoint, Excel, or other editable source files are available, Stepes can work with the native content, styles, linked graphics, and supporting assets required for the agreed multilingual production workflow.</p>
          </div>
          <div>
            <h3>PDF-Only Catalogs</h3>
            <p>When only a PDF is available, Stepes reviews whether it contains editable text, flattened graphics, scanned content, embedded images, or other elements and determines an appropriate extraction, translation, reconstruction, formatting, and QA process.</p>
          </div>
        </div>
        <div className="shell native-format-band">
          <span>Adobe InDesign</span><span>Adobe Illustrator</span><span>PDF</span><span>Adobe FrameMaker</span><span>Microsoft Word</span><span>PowerPoint</span><span>Excel</span>
        </div>
        <div className="shell dtp-capabilities">
          {dtpCapabilities.map(([title, body]) => (
            <div className="dtp-capability" key={title}><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
        <div className="shell deliverables-band">
          <h3>Publication-Ready Deliverables</h3>
          <div className="deliverable-list">
            {["Formatted multilingual PDFs", "Editable publishing files", "Individual language versions", "Multilingual master files", "Print-ready outputs", "Digital catalog files", "Translated graphics and assets"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-white structured-section">
        <div className="shell structured-grid">
          <div>
            <SectionHeading
              eyebrow="Structured Content"
              title="Translate Product Data Without Breaking Its Structure"
              intro="Manufacturers, retailers, distributors, and ecommerce organizations often manage catalog content in spreadsheets, PIM exports, databases, XML, JSON, CSV, and other structured formats. The challenge is translating the correct fields while preserving the structure required by downstream systems."
            />
            <p>
              Stepes supports configurable processing rules that distinguish translatable customer-facing content from technical elements that should remain untouched, helping protect product identifiers, schemas, formulas, variables, tags, and other nontranslatable data.
            </p>
            <ArrowLink href={links.fileFormats}>Explore File Format Support</ArrowLink>
          </div>
          <StructuredPreview />
        </div>
        <div className="shell format-grid">
          {structuredFormats.map(([title, body]) => <div className="format-item" key={title}><h3>{title}</h3><p>{body}</p></div>)}
        </div>
        <div className="shell structured-controls">
          <div><h3>Field-Aware Translation</h3><p>Identify which fields should be translated, localized, transformed, validated, or protected.</p></div>
          <div><h3>Structure Preservation</h3><p>Maintain the technical organization required for reliable downstream reintegration.</p></div>
          <div><h3>Automated Quality Controls</h3><p>Check missing translations, terminology deviations, numerical inconsistencies, and protected-content changes.</p></div>
          <div><h3>Structured Delivery</h3><p>Return translated content in the agreed format so it can move into the next stage of your product-content workflow.</p></div>
        </div>
      </section>

      <section className="section stack-section">
        <div className="shell stack-grid">
          <div className="stack-copy">
            <SectionHeading
              eyebrow="Automation & Integrations"
              title="Connect Catalog Translation to Your Product Content Stack"
              intro="Once catalog content lives in enterprise systems, translation has to fit the way that content moves. Stepes supports file-based, portal, API, scheduled-export, and customized workflows for recurring multilingual product information."
            />
            <div className="stack-links">
              <ArrowLink href={links.api}>Translation API</ArrowLink>
              <ArrowLink href={links.workflowAutomation}>Workflow Automation</ArrowLink>
            </div>
          </div>
          <div className="stack-list">
            {stackItems.map(([title, body]) => <div className="stack-item" key={title}><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft updates-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Continuous Localization"
            title="Your Catalog Changes. Your Translation Workflow Should Keep Up."
            intro="New products launch. Specifications change. Product families expand. Descriptions improve. Seasonal catalogs are released. Models are discontinued. Stepes helps organizations build a multilingual product-content model that reuses approved language instead of restarting with every release."
            center
          />
          <div className="update-flow">
            {updateStates.map(([title, body]) => (
              <div className="update-state" key={title}>
                <div className="update-node" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <div className="outcome-band">
            {["Faster multilingual releases", "Less repetitive translation", "Better terminology continuity", "Reviewer focus on meaningful changes", "Easier product-line expansion", "Consistency across catalog editions"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="center-link-row"><ArrowLink href={links.continuous}>Explore Continuous Translation</ArrowLink></div>
        </div>
      </section>

      <section className="section section-white process-section">
        <div className="shell">
          <SectionHeading
            title="From Source Content to Publication-Ready Catalog"
            intro="Stepes brings translation, language assets, product-data controls, professional expertise, publishing, and QA together in one connected catalog localization process."
            center
          />
          <div className="process-grid">
            {processSteps.map(([title, body], index) => (
              <div className="process-step" key={title}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section languages-section">
        <div className="shell language-layout">
          <div>
            <SectionHeading
              title="Product Catalog Translation in 100+ Languages"
              intro="Stepes helps manufacturers, retailers, distributors, technology companies, and global brands communicate accurate product information across international markets. Linguists are selected according to language, subject matter, product category, audience, and project requirements."
            />
            <ArrowLink href={links.languages}>View All Languages</ArrowLink>
          </div>
          <div className="language-grid">
            {languages.map(([language, href]) => <a href={href} className="language-item" key={language}>{language}<span aria-hidden="true">↗</span></a>)}
          </div>
        </div>
      </section>

      <section className="section section-dark qa-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Catalog Quality Assurance"
            title="Check Language, Product Data, and Layout Together"
            intro="A linguistically accurate sentence can still fail if it is assigned to the wrong product, changes a numerical value, breaks a table, alters a SKU, overflows a page, or conflicts with approved terminology. Stepes evaluates catalog quality as complete multilingual product content."
            center
            dark
          />
          <div className="qa-grid">
            {qaDimensions.map(([title, body]) => <div className="qa-item" key={title}><h3>{title}</h3><p>{body}</p></div>)}
          </div>
          <div className="qa-footer">
            <div><h3>Match Quality Controls to the Catalog</h3><p>The QA plan can be adapted to the industry, source format, product complexity, languages, intended audience, content type, publication environment, and potential impact of an error.</p></div>
            <ArrowLink href={links.quality} className="editorial-link-dark">Explore Translation Quality Assurance</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white related-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Connected Services"
            title="Support the Content Around Your Catalog"
            intro="Product catalogs are part of a larger customer-content ecosystem. Stepes connects catalog localization with related services so approved terminology, product information, language assets, and workflows can support more of the product journey."
            center
          />
          <div className="related-grid">
            {relatedServices.map(([title, body, href, linkLabel]) => (
              <article className="related-item" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
                <ArrowLink href={href}>{linkLabel}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <SectionHeading
              title="Questions About Catalog Translation"
              intro="Practical answers about product catalog translation, InDesign and PDF workflows, structured product data, language assets, multilingual DTP, and recurring catalog updates."
            />
          </div>
          <FAQ />
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2>Ready to Take Your Product Catalog Global?</h2>
              <p>
                Translate and publish multilingual catalogs without losing control of product data, terminology, or layout. Upload your files for a quote, or talk with Stepes about an ongoing program covering structured product data, PIM workflows, recurring updates, language assets, integrations, and publication-ready delivery.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-page {
    --magenta: ${MAGENTA};
    --blush: ${BLUSH};
    --dark: ${DARK};
    --text: ${TEXT};
    --muted: ${MUTED};
    --border: ${BORDER};
    --soft: ${SOFT};
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    color: var(--text);
    background: #fff;
    font-family: "Inter Tight", "Inter", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }
  .stepes-page a { color: inherit; }
  .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding: 96px 0; }
  .section-white { background: #fff; }
  .section-soft { background: var(--soft); }
  .section-dark { background: var(--dark); color: #fff; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3, p, .editorial-link, .language-item { overflow-wrap: break-word; }
  h1, h2, h3 { letter-spacing: -0.025em; color: inherit; }
  h1 { font-size: 48px; line-height: 1.06; font-weight: 600; margin-bottom: 26px; max-width: 700px; }
  h2 { font-size: 36px; line-height: 1.13; font-weight: 600; margin-bottom: 18px; }
  h3 { font-size: 24px; line-height: 1.24; font-weight: 600; margin-bottom: 10px; }
  p { font-size: 16px; line-height: 1.7; font-weight: 400; color: var(--muted); margin-bottom: 18px; }
  .section-dark p { color: #C6C8CC; }
  .eyebrow { color: var(--magenta); font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 16px; }
  .eyebrow-dark { color: #F2A7C6; }
  .section-heading { max-width: 820px; margin-bottom: 44px; }
  .section-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
  .section-heading-center .section-intro { margin-left: auto; margin-right: auto; }
  .section-intro { max-width: 820px; font-size: 18px; line-height: 1.62; margin-bottom: 0; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 9px;
    min-height: 48px; padding: 12px 23px; border-radius: 999px;
    font-size: 16px; line-height: 1.2; font-weight: 600; text-decoration: none;
    border: 1px solid transparent; transition: .2s ease; white-space: nowrap;
  }
  .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible {
    background: var(--magenta); color: #fff !important; border-color: var(--magenta);
  }
  .btn-primary span { color: #fff !important; }
  .btn-primary:hover { background: #A71954; border-color: #A71954; transform: translateY(-1px); }
  .btn-secondary { background: #fff; color: #171717; border-color: #D8DADD; }
  .btn-secondary:visited { color: #171717; }
  .btn-secondary:hover { border-color: #AEB2B7; transform: translateY(-1px); }
  .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible, .language-item:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
  .editorial-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--magenta) !important; text-decoration: none; font-weight: 600; font-size: 16px; }
  .editorial-link:visited { color: var(--magenta) !important; }
  .editorial-link:hover span:last-child { transform: translateX(3px); }
  .editorial-link span:last-child { transition: .2s ease; }
  .editorial-link-dark, .editorial-link-dark:visited { color: #F2A7C6 !important; }

  /* Hero */
  .hero { padding: 104px 0 96px; background: linear-gradient(180deg,#fff 0%,#fff 70%,#FCFCFD 100%); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(440px, .92fr); gap: 72px; align-items: center; }
  .hero-lead { max-width: 720px; font-size: 18px; line-height: 1.65; color: #42454A; }
  .hero-support { max-width: 690px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
  .hero-visual { position: relative; min-height: 500px; border-radius: 30px; background: #F7F8FA; border: 1px solid #EBECEF; overflow: hidden; box-shadow: 0 18px 55px rgba(19,25,35,.07); }
  .hero-orb { position: absolute; border-radius: 50%; filter: blur(1px); }
  .hero-orb-a { width: 260px; height: 260px; right: -90px; top: -70px; background: rgba(193,29,99,.08); }
  .hero-orb-b { width: 190px; height: 190px; left: -75px; bottom: -55px; background: rgba(32,33,36,.05); }
  .catalog-sheet { position: absolute; background: #fff; border: 1px solid #D9DCE1; border-radius: 18px; box-shadow: 0 18px 38px rgba(30,34,41,.12); }
  .catalog-sheet-back { width: 67%; height: 340px; left: 14%; top: 65px; transform: rotate(-6deg); opacity: .72; padding: 32px; }
  .catalog-sheet-front { width: 72%; min-height: 370px; right: 9%; top: 62px; transform: rotate(2.4deg); padding: 28px; }
  .catalog-topline { display: flex; justify-content: space-between; align-items: center; gap: 14px; font-size: 14px; letter-spacing: .08em; font-weight: 600; color: #676A70; border-bottom: 1px solid #ECEEF1; padding-bottom: 15px; }
  .locale-pill { display: inline-flex; align-items: center; justify-content: center; min-width: 32px; height: 26px; padding: 0 8px; border-radius: 999px; background: var(--blush); color: var(--magenta); letter-spacing: .06em; }
  .catalog-product { display: grid; grid-template-columns: .92fr 1.08fr; gap: 20px; align-items: center; padding-top: 30px; }
  .product-visual { height: 225px; position: relative; display: flex; align-items: center; justify-content: center; background: #F2F3F5; border-radius: 14px; }
  .product-object { width: 86px; height: 142px; border-radius: 20px 20px 12px 12px; background: linear-gradient(145deg,#7D828A,#3D4248); position: relative; box-shadow: inset 0 0 0 1px rgba(255,255,255,.22); }
  .product-object:before { content:""; position:absolute; width:48px; height:16px; border-radius:999px; background:#C8CBD0; left:19px; top:17px; }
  .product-object:after { content:""; position:absolute; width:18px; height:18px; border:4px solid #C11D63; border-radius:50%; left:30px; bottom:28px; }
  .product-shadow { position:absolute; width:110px; height:16px; border-radius:50%; background:rgba(20,25,30,.12); bottom:26px; filter:blur(4px); }
  .copy-label { font-size: 14px; letter-spacing:.08em; color:var(--magenta); font-weight:600; margin-bottom:10px; }
  .copy-title,.copy-text,.mini-line { height: 8px; border-radius:999px; background:#B8BDC4; margin-bottom:9px; }
  .copy-title { height: 13px; background:#34383E; width:94%; }
  .copy-title-short { width:72%; }
  .copy-text { width:98%; background:#D1D4D8; height:7px; }
  .copy-text-short { width:68%; }
  .spec-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px 10px; padding-top:14px; margin-top:14px; border-top:1px solid #ECEEF1; font-size:14px; color:#7A7E85; }
  .spec-grid b { color:#34383E; font-weight:600; }
  .mini-line { width:84%; }
  .mini-line.short { width:50%; margin-top:25px; }
  .mini-block { height:160px; margin-top:25px; border-radius:12px; background:#ECEEF1; }
  .data-panel { position:absolute; display:flex; align-items:center; gap:11px; background:#fff; border:1px solid #E3E5E8; border-radius:16px; padding:14px 16px; box-shadow:0 14px 30px rgba(30,34,41,.10); min-width:185px; }
  .hero-data-panel { left:28px; bottom:56px; }
  .hero-channel-panel { right:24px; bottom:24px; }
  .data-dot { width:13px; height:13px; border-radius:50%; background:var(--magenta); box-shadow:0 0 0 5px rgba(193,29,99,.10); flex:0 0 auto; }
  .channel-icon { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:#F0F1F3; color:#45484D; font-weight:600; }
  .visual-kicker { display:block; font-size:14px; letter-spacing:.08em; font-weight:600; color:#858991; margin-bottom:2px; }
  .data-panel strong { display:block; font-size:16px; color:#30343A; font-weight:600; line-height:1.3; }

  /* Proof */
  .proof-band { border-top:1px solid var(--border); border-bottom:1px solid var(--border); background:#fff; }
  .proof-grid { display:grid; grid-template-columns:repeat(5,1fr); }
  .proof-item { padding:28px 22px; min-width:0; }
  .proof-item + .proof-item { border-left:1px solid var(--border); }
  .proof-item h3 { font-size:18px; margin-bottom:6px; }
  .proof-item p { font-size:16px; line-height:1.5; margin-bottom:0; }

  /* Overview */
  .split-overview { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:80px; align-items:start; }
  .sticky-heading { max-width:540px; }
  .sticky-heading .section-heading { margin-bottom:26px; }
  .editorial-list { border-top:1px solid var(--border); }
  .editorial-row { display:grid; grid-template-columns:18px 1fr; gap:18px; padding:25px 0; border-bottom:1px solid var(--border); }
  .row-marker { width:8px; height:2px; margin-top:13px; background:var(--magenta); border-radius:999px; }
  .editorial-row h3 { margin-bottom:6px; }
  .editorial-row p { margin-bottom:0; }

  /* Content grid */
  .content-grid { display:grid; grid-template-columns:repeat(4,1fr); border:1px solid var(--border); border-radius:28px; overflow:hidden; background:#fff; }
  .content-cell { padding:30px 28px; min-height:190px; }
  .content-cell:not(:nth-child(4n+1)) { border-left:1px solid var(--border); }
  .content-cell:nth-child(n+5) { border-top:1px solid var(--border); }

  .content-cell p { margin-bottom:0; }

  /* Connected */
  .connected-section { background:var(--blush); }
  .connected-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:72px; align-items:center; }
  .connected-copy .section-heading { margin-bottom:28px; }
  .connected-visual { min-height:460px; position:relative; padding:48px; border-radius:30px; background:#fff; border:1px solid #ECD7E0; box-shadow:0 18px 46px rgba(82,27,50,.08); display:grid; grid-template-columns:.9fr 72px 1.1fr; gap:0; align-items:center; }
  .source-node { padding:28px; border:1px solid #E4E6E9; border-radius:20px; background:#FBFBFC; }
  .source-node strong { display:block; font-size:20px; line-height:1.25; margin-bottom:22px; }
  .source-fields { display:grid; gap:8px; }
  .source-fields span { display:block; border:1px solid #E5E7EA; background:#fff; border-radius:10px; padding:8px 10px; color:#555A61; font-size:14px; }
  .connection-rail { position:relative; height:220px; }
  .connection-rail:before { content:""; position:absolute; left:50%; top:50%; width:100%; height:2px; background:#D0D3D8; }
  .connection-rail:after { content:""; position:absolute; right:-1px; top:calc(50% - 5px); border-left:8px solid #D0D3D8; border-top:6px solid transparent; border-bottom:6px solid transparent; }
  .connection-rail span { display:none; }
  .channel-nodes { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  .channel-nodes div { min-height:118px; padding:20px; border-radius:16px; border:1px solid #E4E6E9; background:#fff; display:flex; flex-direction:column; justify-content:flex-end; }
  .channel-nodes b { font-size:17px; margin-bottom:2px; }
  .channel-nodes span { font-size:14px; color:#757980; }
  .channel-grid { display:grid; grid-template-columns:repeat(3,1fr); margin-top:52px; border-top:1px solid rgba(122,21,66,.16); border-bottom:1px solid rgba(122,21,66,.16); }
  .channel-item { padding:24px 28px; }
  .channel-item:not(:nth-child(3n+1)) { border-left:1px solid rgba(122,21,66,.16); }
  .channel-item:nth-child(n+4) { border-top:1px solid rgba(122,21,66,.16); }

  .channel-item p { margin-bottom:0; }

  /* Industries */
  .industry-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
  .industry-item { border:1px solid var(--border); border-radius:22px; padding:30px; background:#fff; min-height:285px; display:flex; flex-direction:column; }

  .industry-item p { flex:1; }

  /* Data integrity */
  .data-integrity-section { background:linear-gradient(135deg,#151515,#21171B 100%); }
  .data-rules-panel { border:1px solid #3A3B3F; border-radius:26px; overflow:hidden; background:#1C1C1E; }
  .data-rules-head, .data-rule-row { display:grid; grid-template-columns:.62fr .72fr 1.66fr; gap:22px; align-items:center; }
  .data-rules-head { padding:15px 24px; background:#242426; color:#AEB1B6; font-size:14px; font-weight:600; letter-spacing:.08em; }
  .data-rule-row { padding:21px 24px; border-top:1px solid #343538; }
  .data-rule-row strong { font-size:17px; font-weight:600; }
  .data-rule-row p { margin:0; }
  .data-treatment { color:#F2A7C6; font-weight:600; font-size:16px; }
  .mobile-data-label { display:none; }
  .dark-note { margin-top:28px; padding:26px 30px; border-radius:20px; border:1px solid #36383C; display:flex; align-items:center; justify-content:space-between; gap:32px; }
  .dark-note p { margin:0; max-width:850px; }

  /* Workflow routes */
  .workflow-routing-list { border-top:1px solid var(--border); }
  .workflow-route { display:grid; grid-template-columns:.78fr 1.35fr .68fr; gap:34px; align-items:center; padding:27px 0; border-bottom:1px solid var(--border); }
  .workflow-route h3 { margin:0; }
  .workflow-route p { margin:0; }
  .objective { border-left:2px solid var(--magenta); padding-left:16px; }
  .objective span { display:block; font-size:14px; line-height:1.2; letter-spacing:.08em; text-transform:uppercase; color:#8A8E95; font-weight:600; margin-bottom:5px; }
  .objective strong { display:block; font-size:16px; line-height:1.35; font-weight:600; }
  .center-link-row { text-align:center; margin-top:34px; }

  /* Assets */
  .language-assets-section { background:#FCFCFD; }
  .assets-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
  .asset-panel { border:1px solid var(--border); border-radius:28px; background:#fff; padding:34px; }
  .asset-panel-head { display:grid; grid-template-columns:62px 1fr; gap:20px; align-items:start; }
  .asset-symbol { width:58px; height:58px; display:flex; align-items:center; justify-content:center; border-radius:16px; background:var(--blush); color:var(--magenta); font-size:14px; letter-spacing:.04em; font-weight:600; }
  .asset-panel-head h3 { margin-bottom:7px; }
  .tag-list { display:flex; flex-wrap:wrap; gap:8px; margin:22px 0 18px; }
  .tag-list span { display:inline-flex; align-items:center; min-height:40px; padding:7px 12px; border:1px solid #E4E6E9; border-radius:999px; font-size:16px; color:#62666D; background:#FAFAFB; }
  .asset-support-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-top:38px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .asset-support-grid > div { padding:28px 30px; }
  .asset-support-grid > div + div { border-left:1px solid var(--border); }

  .asset-support-grid p { margin:0; }

  /* DTP */
  .dtp-grid { display:grid; grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr); gap:68px; align-items:center; }
  .dtp-copy .section-heading { margin-bottom:24px; }
  .callout-copy { font-size:22px; line-height:1.4; color:#272A2F; font-weight:600; max-width:560px; }
  .dtp-visual { min-height:430px; display:grid; grid-template-columns:.82fr 60px 1.18fr; align-items:center; gap:0; padding:36px; border-radius:30px; background:#fff; border:1px solid var(--border); box-shadow:0 18px 42px rgba(24,30,38,.06); }
  .dtp-stage { min-width:0; }
  .dtp-stage > strong { display:block; font-size:17px; margin-bottom:16px; }
  .dtp-arrow { text-align:center; color:#9A9EA5; font-size:28px; }
  .page-preview { position:relative; border-radius:10px; border:1px solid #D7DADE; background:#fff; box-shadow:0 9px 22px rgba(25,30,38,.08); padding:12px; min-height:174px; overflow:hidden; }
  .page-source { max-width:145px; transform:rotate(-2deg); }
  .page-picture { height:84px; border-radius:7px; background:linear-gradient(135deg,#ECEEF1,#D9DCE0); margin-bottom:12px; }
  .page-lines { display:grid; gap:6px; }
  .page-lines span { display:block; height:6px; border-radius:999px; background:#D6D9DD; }
  .page-lines span:nth-child(2) { width:82%; }
  .page-lines span:nth-child(3) { width:60%; }
  .page-preview i { position:absolute; top:8px; right:8px; width:28px; height:22px; border-radius:999px; background:var(--blush); color:var(--magenta); font-size:14px; font-style:normal; font-weight:600; display:flex; align-items:center; justify-content:center; }
  .output-pages { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
  .output-pages .page-preview:nth-child(1) { transform:rotate(-3deg); }
  .output-pages .page-preview:nth-child(2) { transform:translateY(-8px); }
  .output-pages .page-preview:nth-child(3) { transform:rotate(3deg); }
  .source-scenario-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; margin-top:52px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .source-scenario-grid > div { padding:28px 30px; }
  .source-scenario-grid > div + div { border-left:1px solid var(--border); }
  .source-scenario-grid p { margin:0; }
  .native-format-band { display:flex; flex-wrap:wrap; gap:10px; padding-top:24px; }
  .native-format-band span { display:inline-flex; align-items:center; min-height:40px; padding:7px 12px; border-radius:999px; background:#fff; border:1px solid var(--border); color:#5D6167; font-size:16px; }
  .dtp-capabilities { display:grid; grid-template-columns:repeat(3,1fr); margin-top:34px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .dtp-capability { padding:27px 28px; }
  .dtp-capability:not(:nth-child(3n+1)) { border-left:1px solid var(--border); }
  .dtp-capability:nth-child(n+4) { border-top:1px solid var(--border); }

  .dtp-capability p { margin:0; }
  .deliverables-band { display:grid; grid-template-columns:280px 1fr; gap:34px; align-items:start; margin-top:46px; }

  .deliverable-list { display:flex; flex-wrap:wrap; gap:10px; }
  .deliverable-list span { padding:8px 12px; border-radius:999px; background:#fff; border:1px solid var(--border); font-size:16px; color:#5D6167; }

  /* Structured */
  .structured-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:72px; align-items:center; }
  .structured-preview { border:1px solid #DADDE1; background:#17181A; color:#F4F4F5; border-radius:26px; padding:28px; box-shadow:0 20px 50px rgba(28,32,38,.10); overflow:hidden; }
  .structured-top { display:flex; justify-content:space-between; gap:18px; align-items:center; padding-bottom:20px; margin-bottom:8px; border-bottom:1px solid #313235; color:#A8ABB0; font-size:14px; font-weight:600; letter-spacing:.08em; }
  .status-chip { color:#F2A7C6; letter-spacing:0; text-transform:none; font-size:14px; }
  .code-row { display:grid; grid-template-columns:138px 15px minmax(0,1fr) 80px; gap:6px; padding:13px 0; border-bottom:1px solid #2D2F32; align-items:start; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; font-size:14px; line-height:1.45; }
  .code-row small { color:#C7C9CD; font-size:14px; letter-spacing:.05em; text-align:right; padding-top:2px; }
  .code-key { color:#F2A7C6; }
  .code-protected { color:#D5D7DA; }
  .format-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-top:52px; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .format-item { padding:28px; }
  .format-item:not(:nth-child(3n+1)) { border-left:1px solid var(--border); }
  .format-item:nth-child(n+4) { border-top:1px solid var(--border); }

  .format-item p { margin:0; }
  .structured-controls { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:36px; }
  .structured-controls > div { padding:22px; border-radius:18px; background:#F8F9FA; border:1px solid #ECEEF1; }

  .structured-controls p { margin:0; }

  /* Stack */
  .stack-section { background:#F9F6F8; }
  .stack-grid { display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); gap:76px; align-items:start; }
  .stack-copy { max-width:540px; }
  .stack-links { display:flex; flex-wrap:wrap; gap:20px; }
  .stack-list { display:grid; grid-template-columns:1fr 1fr; border-top:1px solid #DDCFD5; border-bottom:1px solid #DDCFD5; }
  .stack-item { padding:26px 28px; min-height:180px; }
  .stack-item:nth-child(even) { border-left:1px solid #DDCFD5; }
  .stack-item:nth-child(n+3) { border-top:1px solid #DDCFD5; }

  .stack-item p { margin:0; }

  /* Updates */
  .update-flow { display:grid; grid-template-columns:repeat(5,1fr); position:relative; margin-top:22px; }
  .update-flow:before { content:""; position:absolute; left:8%; right:8%; top:12px; height:1px; background:#CED1D6; }
  .update-state { position:relative; padding:0 18px; text-align:center; }
  .update-node { width:25px; height:25px; margin:0 auto 18px; border-radius:50%; background:#fff; border:7px solid #D7DADE; position:relative; z-index:1; }
  .update-state:nth-child(3) .update-node { border-color:rgba(193,29,99,.28); background:var(--magenta); }

  .update-state p { margin:0; }
  .outcome-band { display:grid; grid-template-columns:repeat(3,1fr); margin-top:48px; border:1px solid var(--border); border-radius:22px; overflow:hidden; background:#fff; }
  .outcome-band span { min-height:72px; padding:18px 22px; display:flex; align-items:center; font-size:16px; font-weight:600; }
  .outcome-band span:not(:nth-child(3n+1)) { border-left:1px solid var(--border); }
  .outcome-band span:nth-child(n+4) { border-top:1px solid var(--border); }

  /* Process */
  .process-grid { display:grid; grid-template-columns:repeat(6,1fr); border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
  .process-step { padding:26px 22px 30px; min-width:0; }
  .process-step + .process-step { border-left:1px solid var(--border); }
  .process-number { font-size:14px; letter-spacing:.08em; font-weight:600; color:var(--magenta); margin-bottom:18px; }

  .process-step p { margin:0; }

  /* Languages */
  .languages-section { background:#F8F9FA; }
  .language-layout { display:grid; grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr); gap:72px; align-items:start; }
  .language-grid { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--border); border-left:1px solid var(--border); }
  .language-item { min-height:74px; display:flex; align-items:center; justify-content:space-between; gap:16px; padding:18px 20px; border-right:1px solid var(--border); border-bottom:1px solid var(--border); text-decoration:none; font-size:17px; font-weight:600; color:#272A2F; background:#fff; }
  .language-item:visited { color:#272A2F; }
  .language-item:hover { background:#FAFAFB; }
  .language-item span { color:#A3A6AC; font-size:14px; }

  /* QA */
  .qa-section { background:linear-gradient(135deg,#171717,#202023); }
  .qa-grid { display:grid; grid-template-columns:repeat(4,1fr); border-top:1px solid #3A3B3F; border-bottom:1px solid #3A3B3F; }
  .qa-item { padding:30px 28px; }
  .qa-item + .qa-item { border-left:1px solid #3A3B3F; }

  .qa-item p { margin:0; }
  .qa-footer { display:flex; align-items:center; justify-content:space-between; gap:44px; margin-top:34px; padding-top:6px; }
  .qa-footer > div { max-width:760px; }
  .qa-footer h3 { margin-bottom:7px; }
  .qa-footer p { margin:0; }

  /* Related */
  .related-grid { display:grid; grid-template-columns:repeat(3,1fr); border:1px solid var(--border); border-radius:28px; overflow:hidden; }
  .related-item { padding:30px; min-height:255px; display:flex; flex-direction:column; }
  .related-item:not(:nth-child(3n+1)) { border-left:1px solid var(--border); }
  .related-item:nth-child(n+4) { border-top:1px solid var(--border); }

  .related-item p { flex:1; }

  /* FAQ */
  .faq-section { background:#F8F9FA; }
  .faq-layout { display:grid; grid-template-columns:minmax(300px,.68fr) minmax(0,1.32fr); gap:72px; align-items:start; }
  .faq-heading { position:sticky; top:30px; }
  .faq-panel { border-top:1px solid #D9DCE0; }
  .faq-row { border-bottom:1px solid #D9DCE0; }
  .faq-question { width:100%; min-height:72px; padding:20px 0; background:transparent; border:0; color:#25282D; font:inherit; display:flex; align-items:center; justify-content:space-between; gap:24px; text-align:left; cursor:pointer; font-size:18px; font-weight:600; }
  .faq-toggle { width:30px; height:30px; border-radius:50%; border:1px solid #D4D7DB; display:flex; align-items:center; justify-content:center; flex:0 0 auto; color:#555A61; font-size:20px; font-weight:400; }
  .faq-answer { display:grid; grid-template-rows:0fr; transition:grid-template-rows .25s ease; }
  .faq-answer > p { overflow:hidden; margin:0; max-width:840px; }
  .faq-answer-open { grid-template-rows:1fr; }
  .faq-answer-open > p { padding:0 54px 24px 0; }

  /* Final CTA */
  .final-cta-section { padding:80px 0 92px; background:#fff; }
  .final-cta { border-radius:30px; background:var(--blush); border:1px solid #F0D7E2; padding:54px 58px; display:grid; grid-template-columns:minmax(0,1.25fr) auto; gap:52px; align-items:center; }
  .final-cta h2 { max-width:780px; margin-bottom:15px; }
  .final-cta p { max-width:850px; margin:0; }
  .cta-actions { display:flex; flex-direction:column; align-items:stretch; gap:12px; min-width:190px; }

  @media (max-width: 1279px) {
    .shell { max-width:1280px; padding-left:40px; padding-right:40px; }
    .hero-grid { grid-template-columns:minmax(0,1.02fr) minmax(390px,.98fr); gap:46px; }
    .content-grid { grid-template-columns:repeat(2,1fr); }
    .content-cell:not(:nth-child(4n+1)) { border-left:0; }
    .content-cell:nth-child(n+5) { border-top:0; }
    .content-cell:nth-child(even) { border-left:1px solid var(--border); }
    .content-cell:nth-child(n+3) { border-top:1px solid var(--border); }
    .process-grid { grid-template-columns:repeat(3,1fr); }
    .process-step + .process-step { border-left:1px solid var(--border); }
    .process-step:nth-child(4) { border-left:0; }
    .process-step:nth-child(n+4) { border-top:1px solid var(--border); }
  }

  @media (max-width: 900px) {
    .shell { padding-left:24px; padding-right:24px; }
    .section { padding:80px 0; }
    h1 { font-size:42px; }
    h2 { font-size:32px; }
    h3 { font-size:22px; }
    .hero { padding:88px 0 80px; }
    .hero-grid { grid-template-columns:1fr; gap:50px; }
    .hero-copy { text-align:center; }
    .hero-copy h1, .hero-copy p { margin-left:auto; margin-right:auto; }
    .hero-actions { justify-content:center; }
    .hero-visual { max-width:640px; width:100%; margin:0 auto; }
    .proof-grid { grid-template-columns:repeat(2,1fr); }
    .proof-item + .proof-item { border-left:0; }
    .proof-item:nth-child(even) { border-left:1px solid var(--border); }
    .proof-item:nth-child(n+3) { border-top:1px solid var(--border); }
    .proof-item:last-child { grid-column:1/-1; border-left:0; }
    .split-overview, .connected-grid, .dtp-grid, .structured-grid, .stack-grid, .language-layout, .faq-layout { grid-template-columns:1fr; gap:48px; }
    .sticky-heading, .stack-copy { max-width:none; }
    .split-overview .section-heading, .connected-copy .section-heading, .dtp-copy .section-heading, .structured-grid .section-heading, .stack-copy .section-heading, .language-layout .section-heading {
      text-align:center; margin-left:auto; margin-right:auto;
    }
    .split-overview .section-heading .section-intro, .connected-copy .section-heading .section-intro, .dtp-copy .section-heading .section-intro, .structured-grid .section-heading .section-intro, .stack-copy .section-heading .section-intro, .language-layout .section-heading .section-intro { margin-left:auto; margin-right:auto; }
    .sticky-heading > p, .connected-copy > p, .dtp-copy > p, .structured-grid > div > p { text-align:left; }
    .connected-copy, .dtp-copy, .structured-grid > div:first-child, .stack-copy, .language-layout > div:first-child { text-align:center; }
    .connected-visual { max-width:700px; width:100%; margin:0 auto; }
    .channel-grid { grid-template-columns:repeat(2,1fr); }
    .channel-item:not(:nth-child(3n+1)) { border-left:0; }
    .channel-item:nth-child(n+4) { border-top:0; }
    .channel-item:nth-child(even) { border-left:1px solid rgba(122,21,66,.16); }
    .channel-item:nth-child(n+3) { border-top:1px solid rgba(122,21,66,.16); }
    .industry-grid { grid-template-columns:repeat(2,1fr); }
    .workflow-route { grid-template-columns:1fr; gap:10px; padding:25px 0; }
    .objective { margin-top:8px; }
    .assets-grid { grid-template-columns:1fr; }
    .asset-support-grid { grid-template-columns:1fr; }
    .asset-support-grid > div + div { border-left:0; border-top:1px solid var(--border); }
    .dtp-visual { max-width:700px; width:100%; margin:0 auto; }
    .source-scenario-grid { grid-template-columns:1fr 1fr; }
    .dtp-capabilities, .format-grid { grid-template-columns:repeat(2,1fr); }
    .dtp-capability:not(:nth-child(3n+1)), .format-item:not(:nth-child(3n+1)) { border-left:0; }
    .dtp-capability:nth-child(n+4), .format-item:nth-child(n+4) { border-top:0; }
    .dtp-capability:nth-child(even), .format-item:nth-child(even) { border-left:1px solid var(--border); }
    .dtp-capability:nth-child(n+3), .format-item:nth-child(n+3) { border-top:1px solid var(--border); }
    .deliverables-band { grid-template-columns:1fr; gap:14px; }
    .structured-controls { grid-template-columns:repeat(2,1fr); }
    .stack-list { grid-template-columns:1fr 1fr; }
    .update-flow { grid-template-columns:1fr; gap:0; max-width:760px; margin-left:auto; margin-right:auto; }
    .update-flow:before { left:12px; right:auto; top:20px; bottom:20px; width:1px; height:auto; }
    .update-state { text-align:left; padding:0 0 30px 52px; }
    .update-node { position:absolute; left:0; top:1px; margin:0; }
    .outcome-band { grid-template-columns:repeat(2,1fr); }
    .outcome-band span:not(:nth-child(3n+1)) { border-left:0; }
    .outcome-band span:nth-child(n+4) { border-top:0; }
    .outcome-band span:nth-child(even) { border-left:1px solid var(--border); }
    .outcome-band span:nth-child(n+3) { border-top:1px solid var(--border); }
    .qa-grid { grid-template-columns:repeat(2,1fr); }
    .qa-item + .qa-item { border-left:0; }
    .qa-item:nth-child(even) { border-left:1px solid #3A3B3F; }
    .qa-item:nth-child(n+3) { border-top:1px solid #3A3B3F; }
    .qa-footer { align-items:flex-start; flex-direction:column; gap:18px; }
    .dark-note { flex-direction:column; align-items:flex-start; gap:14px; }
    .related-grid { grid-template-columns:repeat(2,1fr); }
    .related-item:not(:nth-child(3n+1)) { border-left:0; }
    .related-item:nth-child(n+4) { border-top:0; }
    .related-item:nth-child(even) { border-left:1px solid var(--border); }
    .related-item:nth-child(n+3) { border-top:1px solid var(--border); }
    .related-item:last-child:nth-child(odd) { grid-column:1/-1; }
    .faq-heading { position:static; }

    .final-cta { grid-template-columns:1fr; text-align:center; }
    .final-cta p { margin-left:auto; margin-right:auto; }
    .cta-actions { flex-direction:row; justify-content:center; min-width:0; }
  }

  @media (max-width: 600px) {
    .shell { padding-left:20px; padding-right:20px; }
    .section { padding:68px 0; }
    h1 { font-size:38px; line-height:1.08; }
    h2 { font-size:30px; }
    h3 { font-size:20px; }
    .section-heading { margin-bottom:34px; }
    .section-intro, .hero-lead { font-size:18px; }
    .hero { padding:72px 0 68px; }
    .hero-actions { width:100%; }
    .hero-actions .btn { width:100%; }
    .hero-visual { min-height:420px; border-radius:24px; }
    .hero-orb-a { width:200px; height:200px; right:-85px; top:-70px; }
    .hero-orb-b { width:150px; height:150px; left:-70px; bottom:-45px; }
    .catalog-sheet-front { width:78%; right:7%; top:56px; padding:20px; }
    .catalog-sheet-back { width:72%; left:10%; top:60px; }
    .catalog-product { gap:12px; }
    .product-visual { height:190px; }
    .product-object { width:66px; height:118px; }
    .product-object:before { width:38px; left:14px; }
    .product-object:after { left:22px; }
    .hero-data-panel { left:16px; bottom:34px; }
    .hero-channel-panel { right:14px; bottom:12px; }
    .data-panel { min-width:158px; padding:11px 12px; }
    .proof-grid { grid-template-columns:1fr; }
    .proof-item, .proof-item:nth-child(even), .proof-item:last-child { grid-column:auto; border-left:0; border-top:1px solid var(--border); padding:22px 0; }
    .proof-item:first-child { border-top:0; }
    .split-overview .section-heading, .connected-copy .section-heading, .dtp-copy .section-heading, .structured-grid .section-heading, .stack-copy .section-heading, .language-layout .section-heading { text-align:center; }
    .content-grid { grid-template-columns:1fr; border-radius:22px; }
    .content-cell, .content-cell:nth-child(even), .content-cell:nth-child(n+3) { border-left:0; border-top:1px solid var(--border); min-height:0; padding:25px 22px; }
    .content-cell:first-child { border-top:0; }
    .connected-visual { min-height:0; padding:24px; grid-template-columns:1fr; gap:20px; border-radius:24px; }
    .connection-rail { height:42px; }
    .connection-rail:before { width:2px; height:100%; left:50%; top:0; }
    .connection-rail:after { right:auto; left:calc(50% - 5px); top:auto; bottom:-1px; border-left:6px solid transparent; border-right:6px solid transparent; border-top:8px solid #D0D3D8; border-bottom:0; }
    .channel-nodes { grid-template-columns:1fr 1fr; }
    .channel-grid { grid-template-columns:1fr; margin-top:36px; }
    .channel-item, .channel-item:nth-child(even), .channel-item:nth-child(n+3) { border-left:0; border-top:1px solid rgba(122,21,66,.16); padding:22px 0; }
    .channel-item:first-child { border-top:0; }
    .industry-grid { grid-template-columns:1fr; }
    .industry-item { min-height:0; padding:26px 24px; }
    .data-rules-head { display:none; }
    .data-rule-row { grid-template-columns:1fr; gap:12px; padding:22px 20px; }
    .mobile-data-label { display:block; margin-bottom:3px; font-size:14px; line-height:1.2; letter-spacing:.06em; text-transform:uppercase; color:#AEB1B6; font-weight:600; }
    .data-treatment .mobile-data-label { color:#AEB1B6; }
    .data-rule-row p .mobile-data-label { color:#AEB1B6; }
    .data-rule-row:first-of-type { border-top:0; }
    .dark-note { flex-direction:column; align-items:flex-start; padding:22px; }
    .asset-panel { padding:26px 22px; border-radius:22px; }
    .asset-panel-head { grid-template-columns:1fr; gap:13px; }
    .asset-symbol { width:54px; height:54px; }
    .tag-list span { font-size:16px; }
    .dtp-visual { grid-template-columns:1fr; gap:20px; padding:24px; min-height:0; border-radius:24px; }
    .source-scenario-grid { grid-template-columns:1fr; }
    .source-scenario-grid > div { padding:24px 0; }
    .source-scenario-grid > div + div { border-left:0; border-top:1px solid var(--border); }
    .dtp-arrow { transform:rotate(90deg); }
    .page-source { margin:0 auto; }
    .dtp-capabilities, .format-grid { grid-template-columns:1fr; }
    .dtp-capability, .dtp-capability:nth-child(even), .dtp-capability:nth-child(n+3), .format-item, .format-item:nth-child(even), .format-item:nth-child(n+3) { border-left:0; border-top:1px solid var(--border); padding:23px 0; }
    .dtp-capability:first-child, .format-item:first-child { border-top:0; }
    .deliverables-band { margin-top:36px; }
    .structured-preview { padding:22px 16px; border-radius:22px; }
    .structured-top { align-items:flex-start; flex-direction:column; }
    .code-row { grid-template-columns:minmax(95px,.8fr) 10px minmax(0,1.25fr); font-size:14px; word-break:break-word; }
    .code-row small { grid-column:1/-1; text-align:left; padding-top:0; }
    .structured-controls { grid-template-columns:1fr; }
    .stack-list { grid-template-columns:1fr; border-left:0; }
    .stack-item, .stack-item:nth-child(even), .stack-item:nth-child(n+3) { border-left:0; border-top:1px solid #DDCFD5; min-height:0; padding:24px 0; }
    .stack-item:first-child { border-top:0; }
    .stack-links { justify-content:center; }
    .outcome-band { grid-template-columns:1fr; border-radius:18px; }
    .outcome-band span, .outcome-band span:nth-child(even), .outcome-band span:nth-child(n+3) { border-left:0; border-top:1px solid var(--border); }
    .outcome-band span:first-child { border-top:0; }
    .process-grid { grid-template-columns:1fr; border-top:0; }
    .process-step, .process-step + .process-step, .process-step:nth-child(4), .process-step:nth-child(n+4) { display:grid; grid-template-columns:42px 1fr; gap:0 14px; border-left:0; border-top:1px solid var(--border); padding:24px 0; }
    .process-step:first-child { border-top:0; }
    .process-number { grid-row:1/3; margin:3px 0 0; }
    .process-step h3 { margin-bottom:7px; }
    .language-grid { grid-template-columns:1fr 1fr; }
    .language-item { min-height:66px; font-size:16px; }
    .qa-grid { grid-template-columns:1fr; }
    .qa-item, .qa-item + .qa-item, .qa-item:nth-child(even), .qa-item:nth-child(n+3) { border-left:0; border-top:1px solid #3A3B3F; padding:25px 0; }
    .qa-item:first-child { border-top:0; }
    .related-grid { grid-template-columns:1fr; border-radius:22px; }
    .related-item, .related-item:not(:nth-child(3n+1)), .related-item:nth-child(even), .related-item:nth-child(n+3), .related-item:last-child:nth-child(odd) { grid-column:auto; border-left:0; border-top:1px solid var(--border); min-height:0; padding:26px 22px; }
    .related-item:first-child { border-top:0; }
    .faq-question { font-size:17px; min-height:70px; gap:16px; align-items:flex-start; }
    .faq-toggle { margin-top:2px; }
    .faq-answer-open > p { padding:0 0 22px; }
    .final-cta-section { padding:64px 0 76px; }
    .final-cta { padding:38px 24px; border-radius:24px; }
    .cta-actions { flex-direction:column; width:100%; }
    .cta-actions .btn { width:100%; }
  }

  @media (max-width: 390px) {
    .hero-visual { min-height:470px; }
    .catalog-sheet-front { min-height:310px; top:40px; }
    .catalog-sheet-back { height:300px; top:44px; }
    .catalog-sheet-front { width:82%; right:5%; padding:17px; }
    .catalog-sheet-back { width:76%; left:7%; }
    .catalog-product { grid-template-columns:1fr; padding-top:18px; }
    .product-visual { height:116px; }
    .product-object { width:48px; height:76px; border-radius:12px; }
    .product-object:before { width:28px; height:10px; left:10px; top:10px; }
    .product-object:after { width:12px; height:12px; border-width:3px; left:15px; bottom:15px; }
    .product-shadow { bottom:13px; width:72px; height:10px; }
    .copy-title { height:9px; }
    .spec-grid { display:none; }
    .data-panel { min-width:0; left:10px; right:10px; }
    .hero-data-panel { bottom:82px; }
    .hero-channel-panel { bottom:14px; }
    .channel-nodes { grid-template-columns:1fr; }
    .output-pages { grid-template-columns:1fr 1fr 1fr; gap:7px; }
    .output-pages .page-preview { min-height:145px; padding:8px; }
    .language-grid { grid-template-columns:1fr; }
  }

  @media (max-width: 320px) {
    .shell { padding-left:20px; padding-right:20px; }
    .hero-visual { min-height:460px; }
    .data-panel { left:8px; right:8px; }
    .hero-data-panel { bottom:80px; }
    .hero-channel-panel { bottom:12px; }
  }
`;
