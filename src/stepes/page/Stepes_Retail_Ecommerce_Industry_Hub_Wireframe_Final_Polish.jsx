import React, { useState } from "react";

const palette = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8E3EC",
  dark: "#111827",
  darkSoft: "#1B2433",
  ink: "#151B2A",
  body: "#4A5568",
  muted: "#6B7280",
  border: "#E3E8EF",
  line: "#D6DDE7",
  surface: "#F7F9FC",
  white: "#FFFFFF",
  darkEyebrow: "#F2A7C6",
};

const customerJourney = [
  {
    key: "discover",
    title: "Discover",
    text: "Help customers find your products through localized search, social campaigns, marketplace content, advertising, and landing pages.",
    items: ["Paid and organic search", "Social and display campaigns", "Marketplace discovery"],
  },
  {
    key: "explore",
    title: "Explore",
    text: "Give shoppers complete, locally relevant information so they can evaluate products with confidence.",
    items: ["Product descriptions", "Specifications and attributes", "Reviews and buying guides"],
  },
  {
    key: "purchase",
    title: "Purchase",
    text: "Create clear and intuitive shopping, checkout, payment, shipping, and promotional experiences.",
    items: ["Navigation and calls to action", "Cart and checkout", "Payments and shipping"],
  },
  {
    key: "receive",
    title: "Receive & Use",
    text: "Continue the localized experience through delivery, packaging, setup, product use, and warranty information.",
    items: ["Order and delivery updates", "Packaging and labels", "Instructions and warranties"],
  },
  {
    key: "support",
    title: "Support",
    text: "Resolve customer questions across help centers, live chat, email, contact centers, and self-service content.",
    items: ["Help and troubleshooting", "Returns and refunds", "Chatbot and support content"],
  },
  {
    key: "retain",
    title: "Retain",
    text: "Build loyalty through localized offers, product recommendations, surveys, communities, and re-engagement programs.",
    items: ["Loyalty programs", "Personalized campaigns", "Reviews and community"],
  },
];

const contentGroups = [
  {
    icon: "tag",
    title: "Product & Commerce Content",
    items: [
      "Product names and descriptions",
      "Specifications, attributes, and variants",
      "Taxonomies and product feeds",
      "Size, fit, materials, and ingredients",
      "Comparison and seller-generated content",
    ],
  },
  {
    icon: "screen",
    title: "Digital Shopping Experiences",
    items: [
      "E-commerce websites and mobile apps",
      "Marketplace stores and account portals",
      "Search, navigation, and product filters",
      "Checkout and transactional messages",
      "Promotional and subscription interfaces",
    ],
  },
  {
    icon: "spark",
    title: "Brand & Marketing",
    items: [
      "Global and local campaigns",
      "Advertising, email, and social media",
      "Slogans, taglines, and brand storytelling",
      "Seasonal promotions and product launches",
      "Influencer and loyalty content",
    ],
  },
  {
    icon: "store",
    title: "Physical Retail",
    items: [
      "Store signage and wayfinding",
      "Point-of-sale and shelf content",
      "Digital kiosks and customer notices",
      "Promotions, receipts, and store policies",
      "Retail workforce communications",
    ],
  },
  {
    icon: "package",
    title: "Packaging & Documentation",
    items: [
      "Packaging copy and product labels",
      "Safety warnings and consumer disclosures",
      "Assembly, care, and user instructions",
      "Warranty and returns documentation",
      "Sustainability information",
    ],
  },
  {
    icon: "headset",
    title: "Customer Engagement & Support",
    items: [
      "Help centers and FAQs",
      "Chatbot and contact-center content",
      "Returns, refunds, and after-sales support",
      "Customer surveys and reviews",
      "Troubleshooting and community communications",
    ],
  },
];

const workflowRows = [
  {
    type: "Large, low-risk product feeds",
    workflow: "AI translation with automated quality controls",
    goal: "Speed and broad language coverage",
  },
  {
    type: "Product descriptions and catalogs",
    workflow: "AI translation with professional post-editing",
    goal: "Scalable, consistent product localization",
  },
  {
    type: "Websites, apps, and checkout content",
    workflow: "Human-reviewed localization with in-context QA",
    goal: "Usability and customer confidence",
  },
  {
    type: "Brand campaigns and slogans",
    workflow: "Transcreation with local-market review",
    goal: "Creative and persuasive impact",
  },
  {
    type: "Packaging, warnings, and instructions",
    workflow: "Subject-qualified human translation and verification",
    goal: "Accuracy and risk management",
  },
  {
    type: "Reviews, community, and support content",
    workflow: "Flexible AI, sampling, and human escalation",
    goal: "Rapid availability with appropriate oversight",
  },
];

const localizationSteps = [
  {
    title: "Identify Changes",
    text: "Detect new products, revised descriptions, campaign updates, interface changes, and other content requiring localization.",
  },
  {
    title: "Apply Language Assets",
    text: "Reuse approved translations and apply product terminology, brand guidance, and market-specific language rules.",
  },
  {
    title: "Route Intelligently",
    text: "Assign each item to the appropriate AI or human workflow based on content type, value, risk, and turnaround.",
  },
  {
    title: "Translate & Review",
    text: "Use AI translation, professional post-editing, human translation, transcreation, or a blended workflow.",
  },
  {
    title: "Validate Quality",
    text: "Complete automated, linguistic, visual, functional, and in-context checks according to the content requirements.",
  },
  {
    title: "Deliver & Optimize",
    text: "Return approved content to the source system and track volume, reuse, turnaround, quality, and reviewer feedback.",
  },
];

const segments = [
  ["Fashion & Apparel", "Collections, sizing, care instructions, campaigns, e-commerce, and store experiences."],
  ["Luxury & Lifestyle", "Premium product storytelling, transcreation, visual content, and high-touch customer experiences."],
  ["Consumer Electronics", "Specifications, interfaces, packaging, marketplace listings, instructions, and technical support."],
  ["Beauty & Personal Care", "Product claims, ingredients, usage instructions, packaging, tutorials, and campaigns."],
  ["Food & Beverage", "Packaging, labels, ingredients, product descriptions, promotions, recipes, and consumer information."],
  ["Home & Appliances", "Catalogs, dimensions, materials, assembly, installation, care content, and after-sales support."],
  ["Grocery & Mass Retail", "High-volume product information, promotions, private labels, shelf content, and store communications."],
  ["Direct-to-Consumer Brands", "Websites, subscriptions, lifecycle marketing, packaging, support, and rapid market launches."],
  ["Online Marketplaces", "Listings, seller content, product feeds, taxonomies, reviews, questions, and customer support."],
  ["Franchise & Multi-location", "Brand standards, local campaigns, training, store operations, signage, and customer materials."],
];

const programSteps = [
  {
    title: "Assess",
    text: "Map your markets, customer journeys, product categories, content inventory, systems, language assets, and quality requirements.",
  },
  {
    title: "Design",
    text: "Define content tiers, AI and human workflows, terminology governance, review roles, integrations, and reporting.",
  },
  {
    title: "Connect",
    text: "Establish file-based, portal, API, repository, or custom commerce workflows around your operating environment.",
  },
  {
    title: "Localize & Validate",
    text: "Translate, post-edit, transcreate, review, test, and approve content with the right controls for each asset.",
  },
  {
    title: "Measure & Optimize",
    text: "Track reuse, turnaround, quality findings, reviewer feedback, workflow costs, and opportunities for expansion.",
  },
];

const whyStepes = [
  ["bolt", "AI-Powered Speed", "Process high-volume and frequently changing retail content with the right terminology, review, and quality controls."],
  ["people", "Professional Human Expertise", "Work with linguists who understand retail communication, product terminology, digital commerce, and local consumer expectations."],
  ["refresh", "Continuous Content Operations", "Keep multilingual catalogs, websites, apps, campaigns, and support content current through repeatable workflows."],
  ["shield", "Enterprise Quality Governance", "Coordinate terminology, translation memory, review, approval, quality assurance, and stakeholder feedback."],
  ["plug", "Flexible Integration", "Start with files or online workflows and expand into API-driven or customized enterprise processes as needs evolve."],
  ["globe", "Global Language Coverage", "Coordinate multilingual programs across more than 100 languages through one connected localization partner."],
];

const faqs = [
  {
    q: "What is retail and e-commerce localization?",
    a: "Retail and e-commerce localization adapts shopping experiences, product information, marketing, transactions, and customer support for specific languages and markets. It includes translation as well as terminology, currencies, measurements, sizes, formats, search behavior, brand voice, interface layout, and local customer expectations.",
  },
  {
    q: "What is the difference between retail translation and e-commerce translation?",
    a: "Retail translation covers the broader physical and omnichannel environment, including packaging, labels, store signage, point-of-sale materials, operations, workforce communications, and consumer information. E-commerce translation focuses on digital storefronts, product catalogs, feeds, marketplaces, mobile shopping, checkout, reviews, and continuously updated online content. Many organizations need both within one program.",
  },
  {
    q: "What types of retail content can Stepes translate?",
    a: "Stepes translates product catalogs, product descriptions, websites, mobile applications, marketplaces, advertising, packaging, labels, instructions, signage, store materials, training content, customer support resources, loyalty programs, and transactional communications. We support both individual projects and ongoing multilingual content programs.",
  },
  {
    q: "How does Stepes translate large product catalogs?",
    a: "Stepes combines content analysis, translation memory, approved product terminology, AI translation, professional post-editing, automated quality assurance, and human review. The workflow can vary by product category, visibility, risk, turnaround, and quality expectations, while incremental processing focuses translation on new or changed content.",
  },
  {
    q: "Can Stepes connect with our commerce or product content systems?",
    a: "Yes. Stepes supports file-based workflows, online project management, translation APIs, and customized integrations with commerce platforms, content repositories, and product content systems. The best approach depends on your technical environment, content volume, update frequency, approvals, and automation goals.",
  },
  {
    q: "Can AI translation be used for product descriptions?",
    a: "AI translation can work well for many high-volume product descriptions when it is combined with approved terminology, automated checks, and professional post-editing. Premium brand content, safety-sensitive information, complex technical descriptions, and highly visible messaging may require deeper human translation or transcreation.",
  },
  {
    q: "How does Stepes maintain consistent product terminology?",
    a: "Stepes can centralize terminology databases, translation memories, style guides, approved product names, prohibited terms, and market-specific language instructions. These assets are applied across projects and workflows so teams and channels use the same approved language.",
  },
  {
    q: "Does Stepes support multilingual SEO for online stores?",
    a: "Yes. Stepes can support localized keyword research, product and category naming, metadata, page copy, search filters, internal links, alt text, marketplace keywords, and local landing pages. We can also coordinate localization requirements related to international URLs, hreflang, language navigation, canonicalization, and multilingual website structure.",
  },
  {
    q: "Can Stepes translate user reviews and customer questions?",
    a: "Yes. User-generated content can follow flexible AI, human, or hybrid workflows based on volume, visibility, moderation requirements, and turnaround. High-volume reviews may use AI translation with quality sampling, while prominent or sensitive content can receive professional review.",
  },
  {
    q: "How are packaging, warnings, and product instructions handled?",
    a: "Packaging, warnings, and instructions typically use a controlled human translation and quality-assurance process because errors may affect product use, customer safety, or consumer understanding. Stepes can apply subject-qualified linguists, approved terminology, independent review, and client or market approval according to the product category and destination market.",
  },
  {
    q: "Can Stepes test translated websites and checkout experiences?",
    a: "Yes. Stepes can perform linguistic, visual, and functional localization QA for websites and applications, including checks for untranslated text, truncation, layout problems, locale formatting, inconsistent terminology, navigation errors, right-to-left display, product discovery, and checkout issues.",
  },
  {
    q: "How quickly can Stepes add new languages or markets?",
    a: "Timelines depend on content volume, language combinations, systems, workflow, and review requirements. Once terminology, translation memory, integrations, and quality expectations are established, Stepes can reuse that program foundation to support additional languages and markets more efficiently.",
  },
];

const relatedSolutions = [
  {
    title: "Retail Translation Services",
    text: "Localize packaging, stores, product materials, marketing, retail operations, and omnichannel customer content.",
    href: "https://www.stepes.com/retail-translation-services/",
  },
  {
    title: "E-commerce Translation Services",
    text: "Translate online storefronts, product catalogs, marketplaces, customer content, and continuous digital commerce updates.",
    href: "https://www.stepes.com/ecommerce-translation-services/",
  },
  {
    title: "Website Translation Services",
    text: "Create and maintain localized websites for global markets through connected translation workflows.",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    title: "Marketing Translation Services",
    text: "Adapt campaigns, product messaging, and brand content for local audiences.",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Multilingual Customer Support",
    text: "Support customers across help centers, chat, email, knowledge bases, and service channels.",
    href: "https://www.stepes.com/multilingual-customer-support/",
  },
  {
    title: "Translation Workflow Automation",
    text: "Connect multilingual content to repeatable and scalable enterprise workflows.",
    href: "https://www.stepes.com/translation-workflow-automation/",
  },
];

const resources = [
  {
    category: "GLOBAL CONTENT STRATEGY",
    title: "Multilingual SEO Guide",
    text: "Improve the discoverability of international websites and localized product content.",
    href: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
  {
    category: "LOCALIZATION GUIDE",
    title: "Website Translation Workflows",
    text: "Compare practical operating models for managing multilingual website content.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    category: "AI TRANSLATION INSIGHTS",
    title: "AI Website Translation With Human Review",
    text: "Learn how AI and professional review can work together for scalable localization.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    category: "LOCALIZATION GUIDE",
    title: "Website Localization Testing Checklist",
    text: "Review linguistic, visual, functional, and locale requirements before launch.",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
];

function Icon({ name, size = 22, stroke = "currentColor" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: "false",
  };

  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m14 7 5 5-5 5"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    tag: <><path d="M20 13 13 20 4 11V4h7l9 9Z"/><path d="M8.5 8.5h.01"/></>,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z"/></>,
    store: <><path d="M4 10v10h16V10"/><path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M8 20v-6h8v6"/></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.1V21"/></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0"/><path d="M4 13v5h3v-6H4M20 13v5h-3v-6h3M17 20c-1 1-2.5 1-5 1"/></>,
    bolt: <><path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    refresh: <><path d="M20 11a8 8 0 1 0 1.5 4.7"/><path d="M20 4v7h-7"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    plug: <><path d="m12 22 4-4-7-7-4 4 7 7Z"/><path d="m14 9 5-5M17 12l4-4M5 15l-3 3"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    voice: <><path d="M4 6h16M4 12h10M4 18h7"/><path d="m17 15 2 2 3-4"/></>,
    qa: <><path d="M4 4h16v16H4z"/><path d="m8 12 2.5 2.5L16 9"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    chat: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrowLink ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function HeroLineArt() {
  return (
    <div className="heroArt">
      <svg viewBox="0 0 620 520" role="img" aria-labelledby="hero-art-title hero-art-desc">
        <title id="hero-art-title">Retail and e-commerce localization ecosystem</title>
        <desc id="hero-art-desc">An online storefront, mobile shopping experience, retail store, package, multilingual content, and connected global commerce workflows.</desc>
        <defs>
          <linearGradient id="heroSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F7F9FC" />
          </linearGradient>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#283144" floodOpacity="0.11" />
          </filter>
        </defs>

        <path className="artOrbit" d="M89 276C86 151 184 52 319 52c132 0 231 84 241 204 10 121-87 215-232 219-143 4-236-75-239-199Z" />
        <path className="artDash" d="M86 272c83-79 179-119 286-111 78 6 142 35 191 89" />
        <path className="artDash" d="M112 374c111 43 225 44 343-2" />

        <g filter="url(#heroShadow)">
          <rect x="98" y="130" width="304" height="224" rx="24" fill="url(#heroSoft)" stroke="#B9C3CF" strokeWidth="2" />
          <rect x="98" y="130" width="304" height="44" rx="24" fill="#F4F6F9" />
          <path d="M98 174h304" stroke="#B9C3CF" strokeWidth="2" />
          <circle cx="123" cy="152" r="4" fill="#C11D63" />
          <circle cx="139" cy="152" r="4" fill="#AAB4C2" />
          <circle cx="155" cy="152" r="4" fill="#AAB4C2" />
          <rect x="188" y="145" width="142" height="14" rx="7" fill="#E2E7EE" />

          <rect x="124" y="199" width="112" height="126" rx="15" fill="#FFFFFF" stroke="#D7DEE8" strokeWidth="2" />
          <path d="M142 275h76" stroke="#A9B3C1" strokeWidth="5" strokeLinecap="round" />
          <path d="M142 292h55" stroke="#CBD2DC" strokeWidth="5" strokeLinecap="round" />
          <rect x="142" y="306" width="58" height="8" rx="4" fill="#F1B7CF" />
          <path d="M160 226c6-15 34-15 40 0l6 28h-52l6-28Z" fill="#F8E3EC" stroke="#C11D63" strokeWidth="2" />
          <path d="M170 226v-7c0-8 20-8 20 0v7" fill="none" stroke="#C11D63" strokeWidth="2" />

          <path d="M262 207h104" stroke="#7B8797" strokeWidth="7" strokeLinecap="round" />
          <path d="M262 229h79" stroke="#B2BCC8" strokeWidth="6" strokeLinecap="round" />
          <path d="M262 248h89" stroke="#D1D7E0" strokeWidth="6" strokeLinecap="round" />
          <rect x="262" y="270" width="95" height="34" rx="17" fill="#C11D63" />
          <path d="M286 287h48" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
          <path d="M262 322h42" stroke="#A8B2C0" strokeWidth="5" strokeLinecap="round" />
          <path d="M318 322h42" stroke="#A8B2C0" strokeWidth="5" strokeLinecap="round" />
        </g>

        <g filter="url(#heroShadow)">
          <rect x="414" y="186" width="112" height="216" rx="28" fill="#FFFFFF" stroke="#909CAB" strokeWidth="2" />
          <rect x="426" y="211" width="88" height="148" rx="16" fill="#F7F9FC" />
          <path d="M452 199h36" stroke="#748091" strokeWidth="4" strokeLinecap="round" />
          <circle cx="470" cy="380" r="7" fill="#E7EBF1" />
          <path d="M441 240h58" stroke="#7B8797" strokeWidth="6" strokeLinecap="round" />
          <path d="M441 259h41" stroke="#98A4B3" strokeWidth="5" strokeLinecap="round" />
          <rect x="441" y="280" width="58" height="58" rx="13" fill="#F8E3EC" stroke="#C11D63" strokeWidth="2" />
          <path d="M454 311h32M470 295v32" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <rect x="441" y="346" width="58" height="7" rx="3.5" fill="#C11D63" />
        </g>

        <g filter="url(#heroShadow)">
          <path d="M51 362h128v88H51z" fill="#FFFFFF" stroke="#99A6B5" strokeWidth="2" />
          <path d="M45 362h140l-16-45H61l-16 45Z" fill="#F8E3EC" stroke="#C11D63" strokeWidth="2" />
          <path d="M67 450v-48h43v48M127 402h27v24h-27z" fill="none" stroke="#7A8798" strokeWidth="2" />
          <path d="M45 362h140" stroke="#C11D63" strokeWidth="2" />
        </g>

        <g filter="url(#heroShadow)">
          <path d="m449 88 60 30v65l-60 31-60-31v-65l60-30Z" fill="#FFFFFF" stroke="#909CAB" strokeWidth="2" />
          <path d="m390 118 59 31 60-31M449 149v65" fill="none" stroke="#909CAB" strokeWidth="2" />
          <path d="m423 105 60 31" stroke="#C11D63" strokeWidth="3" />
        </g>

        <g filter="url(#heroShadow)">
          <rect x="210" y="36" width="128" height="52" rx="18" fill="#FFFFFF" stroke="#CDD5E0" strokeWidth="2" />
          <text x="230" y="60" fill="#536174" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="600">EN</text>
          <path d="M266 62h24" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <path d="m284 56 6 6-6 6" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="304" y="60" fill="#536174" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="600">JA</text>
          <text x="230" y="77" fill="#738092" fontSize="10" fontFamily="Arial, sans-serif">PRODUCT CONTENT</text>
        </g>

        <g filter="url(#heroShadow)">
          <rect x="486" y="278" width="102" height="62" rx="18" fill="#111827" />
          <text x="504" y="302" fill="#F2A7C6" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="600">LOCALIZED</text>
          <text x="504" y="324" fill="#FFFFFF" fontSize="15" fontFamily="Arial, sans-serif" fontWeight="600">Ready to publish</text>
        </g>

        <circle cx="89" cy="276" r="7" fill="#C11D63" />
        <circle cx="560" cy="256" r="7" fill="#C11D63" />
        <circle cx="328" cy="475" r="7" fill="#C11D63" />
        <circle cx="319" cy="52" r="7" fill="#C11D63" />
      </svg>
    </div>
  );
}

function RetailEcommerceHubWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepesPage">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepesPage {
          --magenta: ${palette.magenta};
          --magenta-dark: ${palette.magentaDark};
          --magenta-deep: ${palette.magentaDeep};
          --blush: ${palette.blush};
          --blush-strong: ${palette.blushStrong};
          --dark: ${palette.dark};
          --dark-soft: ${palette.darkSoft};
          --ink: ${palette.ink};
          --body: ${palette.body};
          --muted: ${palette.muted};
          --border: ${palette.border};
          --line: ${palette.line};
          --surface: ${palette.surface};
          --white: ${palette.white};
          --dark-eyebrow: ${palette.darkEyebrow};
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .stepesPage a { color: inherit; }
        .stepesPage svg { display: block; }
        .noBreak { white-space: nowrap; }
        .stepesPage article, .stepesPage section, .stepesPage div, .stepesPage a, .stepesPage button { min-width: 0; }
        .shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .section { padding: 96px 0; }
        .sectionDense { padding: 80px 0; }
        .sectionSurface { background: var(--surface); }
        .sectionBlush { background: linear-gradient(180deg, #FFF 0%, var(--blush) 100%); }
        .darkSection { background: var(--dark); color: var(--white); }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.35 !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
          margin: 0 0 15px !important;
          opacity: 1 !important;
        }
        .eyebrowDark { color: var(--dark-eyebrow) !important; }
        .stepesPage h1, .stepesPage h2, .stepesPage h3, .stepesPage h4, .stepesPage p { margin-top: 0; }
        .stepesPage h1, .stepesPage h2, .stepesPage h3 { font-weight: 600; letter-spacing: -0.025em; }
        .stepesPage h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 690px; }
        .stepesPage h2 { font-size: 36px; line-height: 1.16; margin-bottom: 22px; }
        .stepesPage h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        .stepesPage h4 { font-size: 17px; line-height: 1.35; margin-bottom: 8px; font-weight: 600; }
        .stepesPage p { color: var(--body); font-size: 16px; line-height: 1.7; margin-bottom: 20px; }
        .darkSection p { color: #C9D0DC; }
        .bodyLarge { font-size: 18px; line-height: 1.7; }
        .intro { max-width: 820px; }
        .sectionHeading { max-width: 800px; margin-bottom: 48px; }
        .sectionHeading.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .sectionHeading.centered p { margin-left: auto; margin-right: auto; }
        .pillButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 12px 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          text-decoration: none;
          font-size: 15px;
          line-height: 1;
          font-weight: 600;
          transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease;
        }
        .pillButton.primary,
        .pillButton.primary:link,
        .pillButton.primary:visited,
        .pillButton.primary:hover,
        .pillButton.primary:active,
        .pillButton.primary:focus,
        .pillButton.primary:focus-visible,
        .pillButton.primary span,
        .pillButton.primary svg {
          color: #FFFFFF !important;
          fill: none;
          stroke: #FFFFFF !important;
        }
        .pillButton.primary { background: var(--magenta); box-shadow: 0 12px 26px rgba(193, 29, 99, .18); }
        .pillButton.primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 16px 32px rgba(159, 29, 85, .24); }
        .pillButton.secondary { color: var(--ink); background: var(--white); border-color: #CDD5E0; }
        .pillButton.secondary:hover { border-color: #9DA8B7; transform: translateY(-1px); }
        .pillButton:focus-visible, .arrowLink:focus-visible, .faqButton:focus-visible { outline: 3px solid rgba(193, 29, 99, .28); outline-offset: 3px; }
        .buttonRow { display: flex; flex-wrap: wrap; gap: 12px; }
        .arrowLink {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--magenta) !important;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          min-height: 44px;
        }
        .arrowLink span { min-width: 0; overflow-wrap: anywhere; }
        .arrowLink svg { flex: 0 0 auto; stroke: currentColor; transition: transform .2s ease; }
        .arrowLink:hover svg { transform: translateX(3px); }
        .linkRow { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 22px; margin-top: 28px; }
        .linkRow.compact { margin-top: 12px; }
        .linkRow.centered { justify-content: center; margin-top: 30px; }
        .hero { padding: 102px 0 88px; background: #FFFFFF; }
        .heroGrid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(440px, .92fr); gap: 54px; align-items: center; }
        .heroCopy { max-width: 690px; }
        .heroCopy .bodyLarge { max-width: 680px; margin-bottom: 31px; }
        .heroArt { width: 100%; min-width: 0; }
        .heroArt svg { width: 100%; height: auto; overflow: visible; }
        .artOrbit { fill: #FBFCFE; stroke: #CBD3DE; stroke-width: 2; }
        .artDash { fill: none; stroke: #9FAAB8; stroke-width: 1.5; stroke-dasharray: 7 10; }
        .trustStrip { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: #FFFFFF; }
        .trustInner { display: grid; grid-template-columns: repeat(5, 1fr); }
        .trustItem { min-height: 88px; padding: 21px 18px; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; }
        .trustItem:not(:last-child)::after { content: ""; position: absolute; right: 0; top: 24px; bottom: 24px; width: 1px; background: var(--border); }
        .trustLabel { font-size: 16px; line-height: 1.35; font-weight: 600; color: var(--ink); }
        .overviewGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 80px; align-items: start; }
        .overviewCopy { position: sticky; top: 32px; }
        .benefitList { border-top: 1px solid var(--border); }
        .benefitRow { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid var(--border); }
        .benefitIcon { width: 40px; height: 40px; border-radius: 12px; background: var(--blush); color: var(--magenta); display: flex; align-items: center; justify-content: center; }
        .benefitRow h3 { font-size: 20px; margin-bottom: 6px; }
        .benefitRow p { margin-bottom: 0; }
        .journeyBand { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .journeyGrid { display: grid; grid-template-columns: repeat(3, 1fr); }
        .journeyItem { padding: 34px 30px 36px; min-height: 270px; position: relative; }
        .journeyItem:nth-child(-n+3) { border-bottom: 1px solid var(--border); }
        .journeyItem:not(:nth-child(3n)) { border-right: 1px solid var(--border); }
        .journeyIndex { color: var(--magenta); font-size: 12px; line-height: 1; font-weight: 600; letter-spacing: .12em; margin-bottom: 26px; }
        .journeyItem h3 { font-size: 22px; }
        .journeyItem p { margin-bottom: 19px; }
        .inlineList { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
        .inlineList li { display: grid; grid-template-columns: 12px 1fr; gap: 9px; color: var(--body); font-size: 16px; line-height: 1.5; }
        .inlineList li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); margin-top: .62em; }
        .pathGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .pathPanel { border: 1px solid var(--border); border-radius: 28px; padding: 42px; background: #FFFFFF; min-width: 0; }
        .pathPanel:first-child { background: linear-gradient(145deg, #FFFFFF 0%, #FBF5F8 100%); }
        .pathPanel h3 { font-size: 28px; max-width: 470px; }
        .pathPanel p { max-width: 560px; }
        .pathList { display: grid; grid-template-columns: 1fr 1fr; gap: 11px 22px; padding: 24px 0 27px; margin: 0; list-style: none; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .pathList li { display: grid; grid-template-columns: 17px 1fr; gap: 10px; color: var(--body); font-size: 16px; line-height: 1.5; }
        .pathList svg { color: var(--magenta); margin-top: 3px; }
        .contentMatrix { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--border); border-radius: 30px; overflow: hidden; background: #FFFFFF; }
        .contentGroup { padding: 36px 34px 38px; min-height: 324px; }
        .contentGroup:not(:nth-child(3n)) { border-right: 1px solid var(--border); }
        .contentGroup:nth-child(-n+3) { border-bottom: 1px solid var(--border); }
        .contentIcon { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: var(--magenta); background: var(--blush); margin-bottom: 23px; }
        .contentGroup h3 { font-size: 21px; margin-bottom: 18px; }
        .contentGroup ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
        .contentGroup li { color: var(--body); font-size: 16px; line-height: 1.48; }
        .scaleGrid { display: grid; grid-template-columns: .93fr 1.07fr; gap: 70px; align-items: center; }
        .scaleCopy .arrowLink { margin-top: 6px; }
        .pipeline { border: 1px solid var(--border); border-radius: 30px; background: #FFFFFF; box-shadow: 0 22px 55px rgba(25, 35, 52, .08); overflow: hidden; }
        .pipelineHeader { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 19px 24px; border-bottom: 1px solid var(--border); background: #F9FAFC; }
        .pipelineHeader strong { min-width: 0; font-size: 16px; font-weight: 600; overflow-wrap: anywhere; }
        .pipelineStatus { display: inline-flex; align-items: center; gap: 7px; color: #586577; font-size: 13px; }
        .statusDot { width: 8px; height: 8px; border-radius: 50%; background: #3FA66B; }
        .pipelineBody { padding: 22px 24px 26px; }
        .productRow { display: grid; grid-template-columns: 52px 1fr auto; gap: 15px; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--border); }
        .productRow:last-child { border-bottom: 0; }
        .productThumb { width: 48px; height: 48px; border-radius: 13px; background: var(--blush); border: 1px solid #EED5E0; display: flex; align-items: center; justify-content: center; color: var(--magenta); }
        .productMeta { min-width: 0; }
        .productMeta strong { display: block; font-size: 16px; line-height: 1.35; margin-bottom: 4px; overflow-wrap: anywhere; }
        .productMeta span { display: block; color: var(--muted); font-size: 13px; line-height: 1.35; overflow-wrap: anywhere; }
        .productState { min-width: 92px; text-align: right; color: #566477; font-size: 13px; font-weight: 600; }
        .productState.done { color: #23734B; }
        .workflowTable { border: 1px solid rgba(255,255,255,.15); border-radius: 28px; overflow: hidden; }
        .workflowHeader, .workflowRow { display: grid; grid-template-columns: 1.05fr 1.35fr .9fr; }
        .workflowHeader { background: rgba(255,255,255,.07); }
        .workflowHeader > div { color: var(--dark-eyebrow); font-size: 11px; line-height: 1.35; letter-spacing: .13em; font-weight: 600; text-transform: uppercase; padding: 18px 22px; }
        .workflowRow > div { padding: 23px 22px; font-size: 16px; line-height: 1.5; color: #CBD2DD; border-top: 1px solid rgba(255,255,255,.11); }
        .workflowHeader > div:not(:last-child), .workflowRow > div:not(:last-child) { border-right: 1px solid rgba(255,255,255,.11); }
        .workflowRow .workflowType { color: #FFFFFF; font-weight: 600; }
        .darkIntro { max-width: 820px; margin-bottom: 44px; }
        .darkIntro h2 { max-width: 760px; }
        .darkCriteria { margin-top: 38px; display: flex; flex-wrap: wrap; gap: 10px; }
        .criteriaChip { color: #CBD3DE; border: 1px solid rgba(255,255,255,.15); border-radius: 999px; padding: 9px 14px; font-size: 16px; line-height: 1.35; }
        .connectedGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 72px; align-items: start; }
        .systemsList { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 31px; }
        .systemChip { padding: 9px 14px; border-radius: 999px; border: 1px solid var(--border); color: #596679; background: #FFFFFF; font-size: 16px; line-height: 1.35; }
        .sequence { border-top: 1px solid var(--border); }
        .sequenceRow { display: grid; grid-template-columns: 58px 1fr; gap: 18px; padding: 24px 0; border-bottom: 1px solid var(--border); }
        .sequenceNumber { width: 42px; height: 42px; border: 1px solid #D9B4C4; border-radius: 50%; color: var(--magenta); font-size: 14px; font-weight: 600; display: flex; align-items: center; justify-content: center; }
        .sequenceRow h3 { font-size: 20px; margin-bottom: 6px; }
        .sequenceRow p { margin-bottom: 0; }
        .seoGrid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 72px; align-items: center; }
        .seoList { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 28px; margin: 29px 0 29px; }
        .seoListItem { display: grid; grid-template-columns: 18px 1fr; gap: 9px; color: var(--body); font-size: 16px; line-height: 1.5; }
        .seoListItem svg { color: var(--magenta); margin-top: 3px; }
        .searchMockup { border: 1px solid var(--border); border-radius: 28px; overflow: hidden; background: #FFFFFF; box-shadow: 0 24px 55px rgba(31, 41, 55, .08); }
        .searchBar { margin: 24px; min-height: 54px; border: 1px solid #C9D2DE; border-radius: 16px; display: flex; align-items: center; gap: 12px; padding: 10px 17px; color: #6A7687; }
        .searchBar span { min-width: 0; overflow-wrap: anywhere; }
        .searchResults { border-top: 1px solid var(--border); padding: 8px 24px 24px; }
        .searchResult { padding: 19px 0; border-bottom: 1px solid var(--border); }
        .searchResult:last-child { border-bottom: 0; }
        .searchUrl { color: #6C7888; font-size: 14px; line-height: 1.4; margin-bottom: 5px; }
        .searchTitle { color: #1E2A3B; font-size: 18px; line-height: 1.4; font-weight: 600; margin-bottom: 5px; }
        .searchSnippet { color: #596679; font-size: 16px; line-height: 1.55; }
        .creativeGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .creativeItem { padding: 38px 34px 40px; }
        .creativeItem:not(:last-child) { border-right: 1px solid var(--border); }
        .creativeItem .contentIcon { margin-bottom: 25px; }
        .creativeItem p { margin-bottom: 0; }
        .qualityGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .qualityPanel { border: 1px solid var(--border); border-radius: 26px; padding: 34px; background: #FFFFFF; }
        .qualityPanel.wide { grid-column: 1 / -1; display: grid; grid-template-columns: .7fr 1.3fr; gap: 48px; align-items: start; }
        .qualityPanel h3 { font-size: 22px; }
        .qualityList { list-style: none; padding: 0; margin: 20px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 11px 24px; }
        .qualityList li { display: grid; grid-template-columns: 16px 1fr; gap: 9px; color: var(--body); font-size: 16px; line-height: 1.45; }
        .qualityList svg { color: var(--magenta); margin-top: 3px; }
        .governanceGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
        .governanceMap { border-radius: 28px; background: var(--dark); color: white; padding: 34px; min-height: 430px; position: relative; overflow: hidden; }
        .governanceMap::before { content: ""; position: absolute; width: 280px; height: 280px; border-radius: 50%; border: 1px solid rgba(242,167,198,.22); right: -95px; top: -90px; }
        .governanceCore { width: 168px; height: 168px; border-radius: 50%; background: #FFFFFF; color: var(--ink); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 18px; margin: 78px auto 0; position: relative; z-index: 2; }
        .governanceCore svg { color: var(--magenta); margin-bottom: 11px; }
        .governanceCore strong { font-size: 16px; line-height: 1.35; }
        .governanceNode { position: absolute; z-index: 2; border: 1px solid rgba(255,255,255,.18); border-radius: 999px; background: rgba(255,255,255,.07); padding: 9px 13px; color: #E5E9EF; font-size: 16px; line-height: 1.3; white-space: nowrap; }
        .node1 { top: 40px; left: 36px; }
        .node2 { top: 43px; right: 35px; }
        .node3 { left: 25px; top: 204px; }
        .node4 { right: 21px; top: 203px; }
        .node5 { left: 48px; bottom: 38px; }
        .node6 { right: 35px; bottom: 39px; }
        .governanceLine { position: absolute; background: rgba(242,167,198,.28); height: 1px; transform-origin: left center; z-index: 1; }
        .line1 { width: 112px; left: 111px; top: 110px; transform: rotate(25deg); }
        .line2 { width: 110px; right: 104px; top: 110px; transform: rotate(155deg); transform-origin: right center; }
        .line3 { width: 92px; left: 88px; top: 218px; }
        .line4 { width: 94px; right: 86px; top: 218px; }
        .line5 { width: 106px; left: 117px; bottom: 98px; transform: rotate(-28deg); }
        .line6 { width: 107px; right: 107px; bottom: 98px; transform: rotate(208deg); transform-origin: right center; }
        .consumerBand { display: grid; grid-template-columns: .88fr 1.12fr; gap: 68px; align-items: start; }
        .consumerCategories { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 28px; }
        .consumerCategory { border-bottom: 1px solid var(--border); padding: 13px 0; color: var(--ink); font-size: 16px; font-weight: 600; }
        .supportPanel { border-radius: 30px; background: linear-gradient(145deg, var(--blush) 0%, #FFFFFF 72%); border: 1px solid #EED6E1; padding: 38px; }
        .supportChannels { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; margin-top: 24px; }
        .supportChannel { display: grid; grid-template-columns: 18px 1fr; gap: 9px; color: var(--body); font-size: 16px; }
        .supportChannel svg { color: var(--magenta); margin-top: 3px; }
        .segmentsGrid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--border); }
        .segment { display: grid; grid-template-columns: 34px 1fr; gap: 16px; padding: 28px 28px 28px 0; border-bottom: 1px solid var(--border); }
        .segment:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 36px; }
        .segment:nth-child(even) { padding-left: 36px; }
        .segmentMark { padding-top: 11px; }
        .segmentMark span { display: block; width: 18px; height: 2px; border-radius: 2px; background: var(--magenta); }
        .segment h3 { font-size: 20px; margin-bottom: 6px; }
        .segment p { margin-bottom: 0; }
        .programTimeline { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .programStep { padding: 34px 24px 38px; position: relative; }
        .programStep:not(:last-child) { border-right: 1px solid var(--border); }
        .programNumber { width: 34px; height: 34px; border-radius: 50%; background: var(--blush); color: var(--magenta); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; margin-bottom: 23px; }
        .programStep h3 { font-size: 19px; }
        .programStep p { margin-bottom: 0; }
        .proofBand { border: 1px solid var(--border); border-radius: 30px; overflow: hidden; display: grid; grid-template-columns: 1.15fr .85fr; background: #FFFFFF; }
        .proofCopy { padding: 48px 50px; }
        .proofCopy p { max-width: 700px; }
        .proofPoints { background: var(--surface); padding: 42px; display: grid; gap: 0; }
        .proofPoint { padding: 19px 0; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 25px 1fr; gap: 13px; color: var(--ink); font-size: 16px; font-weight: 600; }
        .proofPoint:last-child { border-bottom: 0; }
        .proofPoint svg { color: var(--magenta); margin-top: 2px; }
        .whyGrid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--border); border-radius: 30px; overflow: hidden; background: #FFFFFF; }
        .whyItem { padding: 34px; min-height: 265px; }
        .whyItem:not(:nth-child(3n)) { border-right: 1px solid var(--border); }
        .whyItem:nth-child(-n+3) { border-bottom: 1px solid var(--border); }
        .whyItem h3 { font-size: 21px; }
        .whyItem p { margin-bottom: 0; }
        .relatedGrid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--border); }
        .relatedItem { padding: 26px 28px 28px 0; border-bottom: 1px solid var(--border); }
        .relatedItem:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 36px; }
        .relatedItem:nth-child(even) { padding-left: 36px; }
        .relatedItem h3 { font-size: 20px; margin-bottom: 7px; }
        .relatedItem p { margin-bottom: 11px; }
        .relatedSubheading { font-size: 24px; margin: 0 0 22px; }
        .relatedSubheading.resources { margin-top: 48px; }
        .resourceGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 0; }
        .resourceCard { border: 1px solid var(--border); border-radius: 22px; padding: 25px; background: #FFFFFF; min-height: 260px; display: flex; flex-direction: column; }
        .resourceCategory { color: var(--magenta); font-size: 11px; line-height: 1.35; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 17px; }
        .resourceCard h3 { font-size: 20px; }
        .resourceCard p { flex: 1; }
        .faqWrap { display: grid; grid-template-columns: .7fr 1.3fr; gap: 70px; align-items: start; }
        .faqIntro { position: sticky; top: 32px; }
        .faqList { border-top: 1px solid var(--border); }
        .faqItem { border-bottom: 1px solid var(--border); }
        .faqButton { width: 100%; min-height: 78px; border: 0; background: transparent; padding: 20px 0; display: grid; grid-template-columns: 1fr 40px; gap: 24px; align-items: center; color: var(--ink); text-align: left; cursor: pointer; font: inherit; }
        .faqButton span:first-child { min-width: 0; font-size: 19px; line-height: 1.4; font-weight: 600; overflow-wrap: anywhere; }
        .faqToggle { width: 36px; height: 36px; border-radius: 50%; border: 1px solid #C9D2DE; color: var(--magenta); display: flex; align-items: center; justify-content: center; }
        .faqAnswer { max-height: 0; overflow: hidden; transition: max-height .28s ease, padding .28s ease; }
        .faqAnswer.open { max-height: 360px; padding: 0 64px 24px 0; }
        .faqAnswer p { max-width: 840px; margin-bottom: 0; }
        .finalCta { padding: 80px 0 96px; background: #FFFFFF; }
        .ctaPanel { border-radius: 30px; background: linear-gradient(135deg, var(--blush) 0%, #FFFFFF 70%); border: 1px solid #EED6E1; padding: 58px; display: grid; grid-template-columns: 1.15fr .85fr; gap: 54px; align-items: center; overflow: hidden; position: relative; }
        .ctaPanel::after { content: ""; width: 330px; height: 330px; border-radius: 50%; border: 1px solid rgba(193,29,99,.14); position: absolute; right: -115px; top: -140px; }
        .ctaCopy { position: relative; z-index: 2; }
        .ctaCopy h2 { max-width: 670px; }
        .ctaCopy p { max-width: 730px; }
        .ctaVisual { min-height: 250px; border-radius: 24px; background: #FFFFFF; border: 1px solid var(--border); padding: 24px; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; }
        .teamGraphic { width: 100%; max-width: 360px; }
        .teamGraphic svg { width: 100%; height: auto; }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .pillButton, .arrowLink svg, .faqAnswer { transition: none; }
        }

        @media (max-width: 1199px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: minmax(0, 1fr) minmax(390px, .82fr); gap: 36px; }
          .overviewGrid, .connectedGrid, .governanceGrid { gap: 54px; }
          .contentGroup { padding: 30px 27px 33px; }
          .programStep { padding-left: 18px; padding-right: 18px; }
          .resourceCard { padding: 22px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .sectionDense { padding: 72px 0; }
          .stepesPage h1 { font-size: 42px; }
          .stepesPage h2 { font-size: 32px; }
          .stepesPage h3 { font-size: 22px; }
          .hero { padding: 82px 0 72px; }
          .heroGrid { grid-template-columns: 1fr; gap: 48px; }
          .heroCopy { max-width: 760px; }
          .heroArt { max-width: 660px; margin: 0 auto; }
          .trustInner { grid-template-columns: repeat(2, 1fr); }
          .trustItem:nth-child(3)::after { display: block; }
          .trustItem:nth-child(2n)::after { display: none; }
          .trustItem:nth-child(-n+4) { border-bottom: 1px solid var(--border); }
          .trustItem:last-child { grid-column: 1 / -1; }
          .trustItem:last-child::after { display: none; }
          .overviewGrid, .scaleGrid, .connectedGrid, .seoGrid, .governanceGrid, .consumerBand, .faqWrap { grid-template-columns: 1fr; gap: 44px; }
          .overviewCopy, .faqIntro { position: static; }
          .journeyGrid { grid-template-columns: repeat(2, 1fr); }
          .journeyItem:nth-child(-n+4) { border-bottom: 1px solid var(--border); }
          .journeyItem:nth-child(3) { border-right: 1px solid var(--border); }
          .journeyItem:nth-child(2n) { border-right: 0; }
          .pathGrid { grid-template-columns: 1fr; }
          .contentMatrix { grid-template-columns: repeat(2, 1fr); }
          .contentGroup:nth-child(-n+4) { border-bottom: 1px solid var(--border); }
          .contentGroup:nth-child(3) { border-right: 1px solid var(--border); }
          .contentGroup:nth-child(2n) { border-right: 0; }
          .workflowHeader, .workflowRow { grid-template-columns: 1fr 1.25fr .85fr; }
          .creativeGrid { grid-template-columns: 1fr; }
          .creativeItem:not(:last-child) { border-right: 0; border-bottom: 1px solid var(--border); }
          .qualityPanel.wide { grid-template-columns: 1fr; gap: 22px; }
          .programTimeline { grid-template-columns: 1fr; border-bottom: 0; }
          .programStep { display: grid; grid-template-columns: 48px 1fr; column-gap: 16px; padding: 26px 0; border-bottom: 1px solid var(--border); }
          .programStep:not(:last-child) { border-right: 0; }
          .programNumber { grid-row: 1 / span 2; margin-bottom: 0; }
          .programStep h3 { margin-bottom: 6px; }
          .proofBand { grid-template-columns: 1fr; }
          .whyGrid { grid-template-columns: repeat(2, 1fr); }
          .whyItem:nth-child(3n) { border-right: 1px solid var(--border); }
          .whyItem:nth-child(2n) { border-right: 0; }
          .whyItem:nth-child(-n+4) { border-bottom: 1px solid var(--border); }
          .resourceGrid { grid-template-columns: repeat(2, 1fr); }
          .ctaPanel { grid-template-columns: 1fr; padding: 46px; }
          .ctaVisual { max-width: 520px; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .sectionDense { padding: 64px 0; }
          .stepesPage h1 { font-size: 38px; line-height: 1.1; }
          .stepesPage h2 { font-size: 30px; line-height: 1.18; }
          .stepesPage h3 { font-size: 20px; }
          .stepesPage p, .stepesPage .bodyLarge { font-size: 17px; line-height: 1.67; }
          .hero { padding: 68px 0 60px; }
          .heroGrid { gap: 36px; }
          .heroCopy .bodyLarge { margin-bottom: 26px; }
          .buttonRow { display: grid; grid-template-columns: 1fr; }
          .pillButton { width: 100%; min-height: 52px; }
          .heroArt { margin-left: -8px; width: calc(100% + 16px); }
          .trustItem { min-height: 78px; padding: 16px 10px; }
          .sectionHeading { margin-bottom: 34px; }
          .linkRow { align-items: flex-start; flex-direction: column; gap: 2px; }
          .linkRow.centered { align-items: center; }
          .benefitRow { grid-template-columns: 40px 1fr; gap: 14px; padding: 21px 0; }
          .journeyGrid { grid-template-columns: 1fr; }
          .journeyItem { min-height: 0; padding: 28px 0 30px; border-right: 0 !important; border-bottom: 1px solid var(--border) !important; }
          .journeyItem:last-child { border-bottom: 0 !important; }
          .journeyIndex { margin-bottom: 18px; }
          .inlineList li { font-size: 16px; }
          .pathPanel { padding: 28px 23px; border-radius: 24px; }
          .pathPanel h3 { font-size: 24px; }
          .pathList { grid-template-columns: 1fr; }
          .contentMatrix { grid-template-columns: 1fr; border-radius: 24px; }
          .contentGroup { min-height: 0; padding: 28px 23px 30px; border-right: 0 !important; border-bottom: 1px solid var(--border) !important; }
          .contentGroup:last-child { border-bottom: 0 !important; }
          .pipeline { border-radius: 24px; }
          .pipelineHeader { align-items: flex-start; flex-direction: column; gap: 8px; }
          .productRow { grid-template-columns: 48px 1fr; }
          .productState { grid-column: 2; text-align: left; min-width: 0; }
          .workflowTable { border-radius: 22px; border: 0; overflow: visible; }
          .workflowHeader { display: none; }
          .workflowRow { display: block; border: 1px solid rgba(255,255,255,.15); border-radius: 20px; margin-bottom: 14px; padding: 22px; }
          .workflowRow > div { border: 0 !important; padding: 0; }
          .workflowRow > div + div { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,.11) !important; }
          .workflowRow > div::before { display: block; color: var(--dark-eyebrow); font-size: 11px; line-height: 1.35; letter-spacing: .12em; font-weight: 600; text-transform: uppercase; margin-bottom: 7px; }
          .workflowRow .workflowType::before { content: "Content type"; }
          .workflowRow .workflowMethod::before { content: "Recommended workflow"; }
          .workflowRow .workflowGoal::before { content: "Primary objective"; }
          .darkCriteria { gap: 8px; }
          .criteriaChip { font-size: 16px; }
          .sequenceRow { grid-template-columns: 48px 1fr; gap: 13px; }
          .seoList { grid-template-columns: 1fr; }
          .searchMockup { border-radius: 22px; }
          .searchBar { margin: 18px; gap: 10px; padding-left: 14px; padding-right: 14px; }
          .searchResults { padding-left: 18px; padding-right: 18px; }
          .qualityGrid { grid-template-columns: 1fr; }
          .qualityPanel, .supportPanel { padding: 26px 22px; border-radius: 23px; }
          .qualityPanel.wide { grid-column: auto; }
          .qualityList, .consumerCategories, .supportChannels { grid-template-columns: 1fr; }
          .governanceMap { padding: 22px; min-height: 0; border-radius: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .governanceMap::before, .governanceLine { display: none; }
          .governanceCore { order: -1; grid-column: 1 / -1; width: 100%; height: auto; min-height: 116px; border-radius: 20px; margin: 0; flex-direction: row; gap: 12px; }
          .governanceCore svg { margin: 0; flex: 0 0 auto; }
          .governanceNode, .node1, .node2, .node3, .node4, .node5, .node6 { position: static; max-width: none; min-height: 54px; padding: 10px; display: flex; align-items: center; justify-content: center; text-align: center; white-space: normal; font-size: 16px; }
          .segmentsGrid { grid-template-columns: 1fr; }
          .segment, .segment:nth-child(odd), .segment:nth-child(even) { padding: 24px 0; border-right: 0; }
          .programStep { grid-template-columns: 42px 1fr; }
          .proofCopy { padding: 34px 24px; }
          .proofPoints { padding: 24px; }
          .whyGrid { grid-template-columns: 1fr; border-radius: 24px; }
          .whyItem { min-height: 0; padding: 28px 23px; border-right: 0 !important; border-bottom: 1px solid var(--border) !important; }
          .whyItem:last-child { border-bottom: 0 !important; }
          .relatedGrid { grid-template-columns: 1fr; }
          .relatedItem, .relatedItem:nth-child(odd), .relatedItem:nth-child(even) { padding: 23px 0; border-right: 0; }
          .resourceGrid { grid-template-columns: 1fr; gap: 14px; }
          .resourceCard { min-height: 0; }
          .faqButton { grid-template-columns: 1fr 38px; gap: 14px; min-height: 72px; }
          .faqButton span:first-child { font-size: 18px; }
          .arrowLink { align-items: flex-start; }
          .arrowLink svg { margin-top: 4px; }
          .relatedSubheading { margin-bottom: 18px; }
          .relatedSubheading.resources { margin-top: 38px; }
          .faqAnswer.open { max-height: 600px; padding-right: 0; }
          .finalCta { padding: 64px 0 72px; }
          .ctaPanel { padding: 34px 22px; border-radius: 24px; gap: 32px; }
          .ctaVisual { min-height: 210px; }
        }

        @media (max-width: 340px) {
          .stepesPage h1 { font-size: 36px; }
          .stepesPage h2 { font-size: 29px; }
          .ctaPanel { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell">
            <div className="heroGrid">
              <div className="heroCopy">
                <h1>Retail & <span className="noBreak">E-commerce</span> Translation Services for Global Growth</h1>
                <p className="bodyLarge">
                  Deliver consistent, locally relevant shopping experiences across languages, markets, and channels. Stepes helps retailers, consumer brands, marketplaces, and digital commerce companies translate everything from product catalogs and online storefronts to packaging, campaigns, retail operations, and customer support.
                </p>
                <div className="buttonRow">
                  <a className="pillButton primary" href="https://www.stepes.com/contact-us/">
                    <span>Talk to an Expert</span>
                    <Icon name="arrow" size={18} />
                  </a>
                  <a className="pillButton secondary" href="https://www.stepes.com/retail-ecommerce-translation-services/#customer-journey">
                    Explore the Customer Journey
                  </a>
                </div>
              </div>
              <HeroLineArt />
            </div>
          </div>
        </section>

        <section className="trustStrip" aria-label="Retail localization capabilities">
          <div className="shell">
            <div className="trustInner">
              {["100+ Languages", "AI + Human Workflows", "ISO-Certified Quality", "Enterprise Security", "Continuous Localization"].map((item) => (
                <div className="trustItem" key={item}>
                  <span className="trustLabel">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="omnichannel-localization">
          <div className="shell">
            <div className="overviewGrid">
              <div className="overviewCopy">
                <Eyebrow>Omnichannel Localization</Eyebrow>
                <h2>Turn Every Retail Touchpoint Into a Local Experience</h2>
                <p className="bodyLarge">
                  Today’s retail journeys move continuously between search, social media, marketplaces, mobile apps, e-commerce websites, physical stores, customer service, and post-purchase communications.
                </p>
                <p>
                  Stepes connects these experiences through one localization program, helping your teams maintain consistent product terminology, brand messaging, customer information, and quality standards across every channel.
                </p>
              </div>
              <div className="benefitList">
                {[
                  ["globe", "Launch Into New Markets Faster", "Bring products, campaigns, and customer experiences to market through scalable multilingual workflows."],
                  ["refresh", "Keep Product Content Current", "Translate frequent catalog, marketplace, website, and application updates without rebuilding the process each time."],
                  ["tag", "Maintain Product Consistency", "Apply approved terminology and product language across channels, teams, and customer touchpoints."],
                  ["voice", "Adapt the Customer Experience", "Localize search language, brand voice, product information, and market conventions for local shoppers."],
                  ["bolt", "Reduce Repetitive Work", "Use translation memory, AI, automation, and content reuse to focus human expertise where it adds the most value."],
                ].map(([icon, title, text]) => (
                  <div className="benefitRow" key={title}>
                    <div className="benefitIcon"><Icon name={icon} /></div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSurface section" id="customer-journey">
          <div className="shell">
            <div className="sectionHeading centered">
              <h2>Localize the Complete Retail Customer Journey</h2>
              <p className="bodyLarge">
                Effective retail localization extends beyond a product page. Stepes helps you create connected multilingual experiences from discovery through purchase, support, and long-term engagement.
              </p>
            </div>
            <div className="journeyBand">
              <div className="journeyGrid">
                {customerJourney.map((item, index) => (
                  <article className="journeyItem" key={item.key}>
                    <div className="journeyIndex">{String(index + 1).padStart(2, "0")}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <ul className="inlineList">
                      {item.items.map((subitem) => <li key={subitem}>{subitem}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="specialized-services">
          <div className="shell">
            <div className="sectionHeading">
              <Eyebrow>Specialized Industry Services</Eyebrow>
              <h2>Connected Expertise for Retail and E-commerce</h2>
              <p className="bodyLarge">
                Retail and digital commerce share many localization requirements, but each also presents distinct operational, technical, and customer-experience challenges. Stepes supports both areas within one connected multilingual content program.
              </p>
            </div>
            <div className="pathGrid">
              <article className="pathPanel">
                <div className="contentIcon"><Icon name="store" /></div>
                <h3>Retail Translation Services</h3>
                <p>Support consumer brands and retail organizations across physical stores, product operations, packaging, marketing, workforce communications, and omnichannel experiences.</p>
                <ul className="pathList">
                  {["Packaging and product labels", "In-store signage", "Point-of-sale materials", "Store promotions", "Retail training", "Store policies", "Visual merchandising", "Supplier communications"].map((item) => (
                    <li key={item}><Icon name="check" size={16} />{item}</li>
                  ))}
                </ul>
                <ArrowLink href="https://www.stepes.com/retail-translation-services/">Explore Retail Translation Services</ArrowLink>
              </article>
              <article className="pathPanel">
                <div className="contentIcon"><Icon name="screen" /></div>
                <h3><span className="noBreak">E-commerce</span> Translation Services</h3>
                <p>Continuously localize online storefronts, product catalogs, marketplaces, applications, and digital customer journeys at enterprise speed and scale.</p>
                <ul className="pathList">
                  {["Product descriptions", "Product attributes", "Category and landing pages", "Marketplaces", "Mobile commerce", "Checkout content", "Product feeds", "Reviews and questions"].map((item) => (
                    <li key={item}><Icon name="check" size={16} />{item}</li>
                  ))}
                </ul>
                <ArrowLink href="https://www.stepes.com/ecommerce-translation-services/">Explore E-commerce Translation Services</ArrowLink>
              </article>
            </div>
          </div>
        </section>

        <section className="sectionBlush section">
          <div className="shell">
            <div className="sectionHeading centered">
              <Eyebrow>Retail Content Ecosystem</Eyebrow>
              <h2>Multilingual Content Across Every Retail Channel</h2>
              <p className="bodyLarge">
                Manage multilingual content more consistently across products, channels, departments, and markets with a localization program built for the complete retail ecosystem.
              </p>
            </div>
            <div className="contentMatrix">
              {contentGroups.map((group) => (
                <article className="contentGroup" key={group.title}>
                  <div className="contentIcon"><Icon name={group.icon} /></div>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="product-content">
          <div className="shell">
            <div className="scaleGrid">
              <div className="scaleCopy">
                <Eyebrow>High-Volume Product Content</Eyebrow>
                <h2>Scale Product Content Without Losing Accuracy or Brand Voice</h2>
                <p className="bodyLarge">
                  Retailers and e-commerce companies often manage thousands or millions of product records that change continually. New products, revised specifications, seasonal promotions, and marketplace updates must all reach customers quickly.
                </p>
                <p>
                  Stepes combines translation automation, AI, professional linguistic expertise, terminology, and content reuse to help global teams keep pace. Product localization also addresses taxonomies, attributes, units, dimensions, sizes, materials, model numbers, character limits, and market-specific merchandising conventions.
                </p>
                <ArrowLink href="https://www.stepes.com/ecommerce-translation-services/">Explore Scalable E-commerce Translation</ArrowLink>
              </div>
              <div className="pipeline" aria-label="Product localization workflow preview">
                <div className="pipelineHeader">
                  <strong>Global Product Catalog</strong>
                  <span className="pipelineStatus"><span className="statusDot" />Localization active</span>
                </div>
                <div className="pipelineBody">
                  {[
                    ["package", "Trail Running Jacket", "4 attributes updated · EN → DE, FR, JA", "In review"],
                    ["tag", "Smart Home Starter Kit", "New product · EN → ES, PT, ZH", "Localized"],
                    ["store", "Spring Store Promotion", "Campaign update · EN → 12 languages", "QA complete"],
                    ["screen", "Mobile Checkout Strings", "18 strings changed · EN → 8 languages", "Localized"],
                  ].map(([icon, title, meta, state], index) => (
                    <div className="productRow" key={title}>
                      <div className="productThumb"><Icon name={icon} size={20} /></div>
                      <div className="productMeta">
                        <strong>{title}</strong>
                        <span>{meta}</span>
                      </div>
                      <div className={`productState ${index > 0 ? "done" : ""}`}>{state}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="darkSection section" id="ai-human-workflows">
          <div className="shell">
            <div className="darkIntro">
              <Eyebrow dark>AI + Human Workflows</Eyebrow>
              <h2>Use the Right Translation Workflow for Every Content Type</h2>
              <p className="bodyLarge">
                A temporary product feed, a luxury campaign, a checkout interface, and a safety warning should not follow the same translation process. Stepes helps classify content and select the right combination of AI, professional post-editing, human translation, transcreation, and in-context QA.
              </p>
            </div>
            <div className="workflowTable" role="table" aria-label="Recommended retail translation workflows">
              <div className="workflowHeader" role="row">
                <div role="columnheader">Content Type</div>
                <div role="columnheader">Recommended Workflow</div>
                <div role="columnheader">Primary Objective</div>
              </div>
              {workflowRows.map((row) => (
                <div className="workflowRow" role="row" key={row.type}>
                  <div className="workflowType" role="cell">{row.type}</div>
                  <div className="workflowMethod" role="cell">{row.workflow}</div>
                  <div className="workflowGoal" role="cell">{row.goal}</div>
                </div>
              ))}
            </div>
            <div className="darkCriteria" aria-label="Content routing factors">
              {["Business value", "Customer visibility", "Brand sensitivity", "Product risk", "Content volume", "Turnaround", "Shelf life", "Market review"].map((item) => (
                <span className="criteriaChip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="connected-content-operations">
          <div className="shell">
            <div className="connectedGrid">
              <div>
                <h2>Connect Translation to Your Commerce Content Operations</h2>
                <p className="bodyLarge">
                  Global retailers need localization workflows that keep pace with continuously changing products, campaigns, websites, applications, and customer communications.
                </p>
                <p>
                  Stepes can connect multilingual translation to the systems and repositories where your teams create and manage content, with flexible file-based, portal, API, and customized enterprise workflows.
                </p>
                <div className="systemsList">
                  {["E-commerce platforms", "PIM and PXM systems", "Content management", "Digital asset management", "Mobile repositories", "Support platforms", "Marketing automation", "Custom applications"].map((item) => (
                    <span className="systemChip" key={item}>{item}</span>
                  ))}
                </div>
                <div className="linkRow">
                  <ArrowLink href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation</ArrowLink>
                  <ArrowLink href="https://www.stepes.com/developers/translation-api/">Translation API</ArrowLink>
                </div>
              </div>
              <div className="sequence">
                {localizationSteps.map((step, index) => (
                  <div className="sequenceRow" key={step.title}>
                    <div className="sequenceNumber">{index + 1}</div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSurface section" id="multilingual-seo">
          <div className="shell">
            <div className="seoGrid">
              <div>
                <Eyebrow>SEO & Product Discovery</Eyebrow>
                <h2>Help Global Customers Find the Right Products</h2>
                <p className="bodyLarge">
                  Translating an online store does not automatically make its products discoverable in every market. Search behavior, product terminology, category names, and buying language can vary significantly by country and language.
                </p>
                <div className="seoList">
                  {["Local-language keyword research", "Search-intent analysis", "Product and category naming", "Metadata localization", "Search-filter terminology", "Marketplace keywords", "Localized landing pages", "International URL guidance"].map((item) => (
                    <div className="seoListItem" key={item}><Icon name="check" size={16} />{item}</div>
                  ))}
                </div>
                <div className="linkRow">
                  <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">Multilingual SEO Guide</ArrowLink>
                  <ArrowLink href="https://www.stepes.com/website-translation-services/">Website Translation Services</ArrowLink>
                </div>
              </div>
              <div className="searchMockup" aria-label="Localized product search preview">
                <div className="searchBar"><Icon name="search" size={20} /><span>leichte wasserdichte laufjacke</span></div>
                <div className="searchResults">
                  <div className="searchResult">
                    <div className="searchUrl">DE · Laufbekleidung</div>
                    <div className="searchTitle">Leichte wasserdichte Laufjacken</div>
                    <div className="searchSnippet">Entdecken Sie atmungsaktive Laufjacken für wechselhaftes Wetter, mit lokalen Größen- und Pflegehinweisen.</div>
                  </div>
                  <div className="searchResult">
                    <div className="searchUrl">DE · Trail-Kollektion</div>
                    <div className="searchTitle">Trail-Kollektion für jedes Wetter</div>
                    <div className="searchSnippet">Technische Materialien, lokale Produktbegriffe und detaillierte Informationen für eine sichere Kaufentscheidung.</div>
                  </div>
                  <div className="searchResult">
                    <div className="searchUrl">DE · Größenberatung</div>
                    <div className="searchTitle">Größenberatung und Passform</div>
                    <div className="searchSnippet">Lokalisierte Maße, Größen und Produktempfehlungen für Ihre Region.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="brand-localization">
          <div className="shell">
            <div className="sectionHeading centered">
              <Eyebrow>Global Brand Localization</Eyebrow>
              <h2>Protect Your Brand Voice Across Languages and Markets</h2>
              <p className="bodyLarge">
                Retail content must inform, persuade, and build trust. Stepes applies translation, localization, or transcreation according to the content’s purpose so your brand can remain recognizable while speaking naturally to each market.
              </p>
            </div>
            <div className="creativeGrid">
              {[
                ["voice", "Translation", "Accurately communicates the source meaning for product information, operational content, and other assets where precision is the priority."],
                ["globe", "Localization", "Adapts language, terminology, formats, and the overall customer experience to a specific market."],
                ["spark", "Transcreation", "Recreates the intent and persuasive effect of campaigns, slogans, and creative content when a literal translation is not enough."],
              ].map(([icon, title, text]) => (
                <article className="creativeItem" key={title}>
                  <div className="contentIcon"><Icon name={icon} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="linkRow centered">
              <ArrowLink href="https://www.stepes.com/marketing-translation-services/">Explore Marketing Translation Services</ArrowLink>
            </div>
          </div>
        </section>

        <section className="sectionBlush section" id="quality-governance">
          <div className="shell">
            <div className="sectionHeading">
              <Eyebrow>Retail Localization Quality</Eyebrow>
              <h2>Validate Language, Layout, and Customer Experience</h2>
              <p className="bodyLarge">
                A translation can be linguistically accurate and still create a poor shopping experience. Stepes evaluates retail localization across language, product data, visual presentation, functionality, and locale conventions.
              </p>
            </div>
            <div className="qualityGrid">
              <article className="qualityPanel">
                <div className="contentIcon"><Icon name="voice" /></div>
                <h3>Linguistic Quality Assurance</h3>
                <p>Review accuracy, fluency, grammar, terminology, completeness, numerical information, product names, brand consistency, and market appropriateness.</p>
                <ul className="qualityList">
                  {["Accuracy and fluency", "Product terminology", "Brand consistency", "Completeness", "Numerical accuracy", "Style and tone"].map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}
                </ul>
              </article>
              <article className="qualityPanel">
                <div className="contentIcon"><Icon name="qa" /></div>
                <h3>Functional & Visual QA</h3>
                <p>Identify text truncation, layout issues, missing translations, broken links, mobile rendering problems, right-to-left display, search errors, and checkout friction.</p>
                <ul className="qualityList">
                  {["Text expansion", "Interface overlap", "Mobile rendering", "RTL behavior", "Search and filters", "Checkout flows"].map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}
                </ul>
              </article>
              <article className="qualityPanel wide">
                <div>
                  <div className="contentIcon"><Icon name="globe" /></div>
                  <h3>Locale Validation</h3>
                  <p>Confirm that localized content presents market-specific information clearly and consistently.</p>
                </div>
                <ul className="qualityList">
                  {["Currencies", "Dates and times", "Addresses and phone numbers", "Units and dimensions", "Product sizes", "Decimal and thousands separators", "Tax terminology", "Shipping terminology"].map((item) => <li key={item}><Icon name="check" size={15} />{item}</li>)}
                </ul>
              </article>
            </div>
            <div className="linkRow">
              <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</ArrowLink>
            </div>
          </div>
        </section>

        <section className="section" id="terminology-governance">
          <div className="shell">
            <div className="governanceGrid">
              <div>
                <Eyebrow>Terminology & Brand Governance</Eyebrow>
                <h2>Maintain One Product Language Across Every Market</h2>
                <p className="bodyLarge">
                  Product terminology can become inconsistent when multiple teams, suppliers, agencies, and market reviewers contribute to global content. These differences create customer confusion, repeated corrections, and slower releases.
                </p>
                <p>
                  Stepes centralizes terminology databases, translation memories, style guides, approved product names, restricted terms, market-specific variations, reviewer feedback, and approval history so language assets can be reused across channels.
                </p>
                <div className="linkRow compact">
                  <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
                  <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
                </div>
              </div>
              <div className="governanceMap" aria-label="Centralized retail language governance illustration">
                <span className="governanceNode node1">Product Content</span>
                <span className="governanceNode node2">Marketing</span>
                <span className="governanceNode node3"><span className="noBreak">E-commerce</span></span>
                <span className="governanceNode node4">Stores</span>
                <span className="governanceNode node5">Support</span>
                <span className="governanceNode node6">Market Review</span>
                <span className="governanceLine line1" />
                <span className="governanceLine line2" />
                <span className="governanceLine line3" />
                <span className="governanceLine line4" />
                <span className="governanceLine line5" />
                <span className="governanceLine line6" />
                <div className="governanceCore">
                  <Icon name="database" size={28} />
                  <strong>Approved Language Assets</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSurface section" id="consumer-information">
          <div className="shell">
            <div className="consumerBand">
              <div>
                <Eyebrow>Product Accuracy</Eyebrow>
                <h2>Translate Product and Consumer Information With Care</h2>
                <p className="bodyLarge">
                  Product information influences buying decisions and may communicate important safety, usage, ingredient, or consumer-disclosure information. Stepes works with qualified linguists to translate this content clearly and consistently.
                </p>
                <div className="consumerCategories">
                  {["Food & beverage", "Beauty & personal care", "Consumer electronics", "Children’s products", "Household goods", "Appliances", "Automotive accessories", "Health & wellness products"].map((item) => (
                    <div className="consumerCategory" key={item}>{item}</div>
                  ))}
                </div>
              </div>
              <div className="supportPanel">
                <div className="contentIcon"><Icon name="shield" /></div>
                <h3>Controlled Translation and Review</h3>
                <p>
                  Packaging, labels, warnings, ingredients, materials, usage instructions, assembly guides, warranties, returns policies, sustainability claims, and consumer notices can be routed through the appropriate subject-qualified translation and verification process.
                </p>
                <p>
                  Requirements vary by product category and destination market. Stepes can work with your legal, regulatory, product, and local-market teams to support the appropriate review process. Translation supports your compliance program but does not replace market-specific legal or regulatory review.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="customer-support">
          <div className="shell">
            <div className="consumerBand">
              <div>
                <Eyebrow>Multilingual Customer Support</Eyebrow>
                <h2>Support Customers Before, During, and After Purchase</h2>
                <p className="bodyLarge">
                  Customers expect timely, clear assistance regardless of location or language. Stepes helps retailers localize support content across digital and human-assisted channels so customers can find answers, resolve problems, and complete purchases with confidence.
                </p>
                <p>
                  Different interactions can follow different workflows. High-value knowledge articles may receive full professional review, while high-volume conversational content may use AI-assisted translation with terminology controls, quality sampling, and escalation rules.
                </p>
                <ArrowLink href="https://www.stepes.com/multilingual-customer-support/">Explore Multilingual Customer Support</ArrowLink>
              </div>
              <div className="supportPanel">
                <div className="contentIcon"><Icon name="headset" /></div>
                <h3>Support Content and Channels</h3>
                <div className="supportChannels">
                  {["Help centers", "Knowledge bases", "Frequently asked questions", "Email templates", "Live chat", "Contact-center scripts", "Chatbot responses", "Troubleshooting guides", "Order status", "Returns and refunds", "Warranty support", "Customer surveys"].map((item) => (
                    <div className="supportChannel" key={item}><Icon name="check" size={15} />{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionBlush section" id="retail-segments">
          <div className="shell">
            <div className="sectionHeading centered">
              <h2>Retail Localization Expertise Across Consumer Categories</h2>
              <p className="bodyLarge">
                Stepes supports multilingual content programs for diverse retail and consumer sectors, adapting workflows to each category’s product information, brand, customer, and quality requirements.
              </p>
            </div>
            <div className="segmentsGrid">
              {segments.map(([title, text]) => (
                <article className="segment" key={title}>
                  <div className="segmentMark" aria-hidden="true"><span /></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="localization-process">
          <div className="shell">
            <div className="sectionHeading">
              <Eyebrow>Scalable Engagement Model</Eyebrow>
              <h2>A Retail Localization Program Designed to Scale</h2>
              <p className="bodyLarge">
                Stepes works with your teams to create a localization program aligned with your markets, content, technology, quality expectations, and business priorities.
              </p>
            </div>
            <div className="programTimeline">
              {programSteps.map((step, index) => (
                <article className="programStep" key={step.title}>
                  <div className="programNumber">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionDense sectionSurface">
          <div className="shell">
            <div className="proofBand">
              <div className="proofCopy">
                <Eyebrow>Launch to Continuous Operations</Eyebrow>
                <h2>Scale From Individual Projects to Connected Global Programs</h2>
                <p className="bodyLarge">
                  Begin with a catalog, campaign, website, packaging update, or customer-support need, then expand across languages, channels, and systems without recreating your localization process. Stepes helps you build on shared terminology, translation memory, review workflows, and quality standards as your program grows.
                </p>
                <ArrowLink href="https://www.stepes.com/case-studies/">Explore Customer Success Stories</ArrowLink>
              </div>
              <div className="proofPoints">
                {[
                  "Start with files, online workflows, or APIs",
                  "Reuse approved terminology and translations",
                  "Add languages on a common program foundation",
                  "Coordinate reviewers, approvals, and feedback",
                  "Track volume, turnaround, reuse, and quality",
                ].map((item) => (
                  <div className="proofPoint" key={item}><Icon name="check" size={18} />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="why-stepes">
          <div className="shell">
            <div className="sectionHeading centered">
              <h2>Why Global Retail Teams Choose Stepes</h2>
              <p className="bodyLarge">
                Combine scalable technology, professional language expertise, connected governance, and flexible delivery to support both immediate market launches and long-term multilingual growth.
              </p>
            </div>
            <div className="whyGrid">
              {whyStepes.map(([icon, title, text]) => (
                <article className="whyItem" key={title}>
                  <div className="contentIcon"><Icon name={icon} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionSurface section" id="related-solutions">
          <div className="shell">
            <div className="sectionHeading">
              <h2>Explore Retail Localization Solutions and Resources</h2>
              <p className="bodyLarge">
                Explore specialized services, enabling technologies, and practical guidance for building and improving a multilingual retail program.
              </p>
            </div>
            <h3 className="relatedSubheading">Related Stepes Solutions</h3>
            <div className="relatedGrid">
              {relatedSolutions.map((item) => (
                <article className="relatedItem" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
                </article>
              ))}
            </div>
            <h3 className="relatedSubheading resources">Retail Localization Resources</h3>
            <div className="resourceGrid">
              {resources.map((resource) => (
                <article className="resourceCard" key={resource.title}>
                  <div className="resourceCategory">{resource.category}</div>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                  <ArrowLink href={resource.href}>View {resource.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="shell">
            <div className="faqWrap">
              <div className="faqIntro">
                <h2>Retail & <span className="noBreak">E-commerce</span> Translation FAQs</h2>
                <p className="bodyLarge">
                  Answers to common questions about multilingual product content, AI translation, integrations, terminology, SEO, and localization quality.
                </p>
              </div>
              <div className="faqList">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div className="faqItem" key={faq.q}>
                      <button
                        type="button"
                        className="faqButton"
                        id={`faq-question-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{faq.q}</span>
                        <span className="faqToggle"><Icon name={isOpen ? "minus" : "plus"} size={18} /></span>
                      </button>
                      <div
                        id={`faq-answer-${index}`}
                        className={`faqAnswer ${isOpen ? "open" : ""}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        aria-hidden={!isOpen}
                      >
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="shell">
            <div className="ctaPanel">
              <div className="ctaCopy">
                <h2>Build a Retail Localization Program That Grows With Your Business</h2>
                <p className="bodyLarge">
                  Connect with Stepes to discuss your products, markets, languages, content systems, quality requirements, and global growth plans. We will help you develop a multilingual workflow that supports immediate priorities and long-term expansion.
                </p>
                <div className="buttonRow">
                  <a className="pillButton primary" href="https://www.stepes.com/contact-us/">
                    <span>Talk to an Expert</span>
                    <Icon name="arrow" size={18} />
                  </a>
                  <a className="pillButton secondary" href="https://www.stepes.com/resources/translation-cost-guide/">
                    Explore Translation Costs
                  </a>
                </div>
              </div>
              <div className="ctaVisual" aria-label="Stepes global retail localization team illustration">
                <div className="teamGraphic">
                  <svg viewBox="0 0 360 240" role="img" aria-label="Global team collaboration illustration">
                    <path d="M44 192c31-58 81-87 148-87 65 0 111 29 139 87" fill="#FDF2F7" stroke="#D9C4CD" strokeWidth="2" />
                    <circle cx="112" cy="89" r="34" fill="#FFFFFF" stroke="#9EABB9" strokeWidth="2" />
                    <circle cx="184" cy="68" r="38" fill="#FFFFFF" stroke="#9EABB9" strokeWidth="2" />
                    <circle cx="256" cy="91" r="34" fill="#FFFFFF" stroke="#9EABB9" strokeWidth="2" />
                    <path d="M83 167c7-35 26-53 57-53 17 0 31 6 42 18M179 132c12-12 27-18 45-18 31 0 50 18 57 53" fill="none" stroke="#6C7887" strokeWidth="2" strokeLinecap="round" />
                    <path d="M137 192c6-46 22-70 47-70 25 0 41 24 47 70" fill="#FFFFFF" stroke="#6C7887" strokeWidth="2" />
                    <path d="M100 89h24M172 68h24M244 91h24" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="49" cy="58" r="20" fill="#111827" />
                    <text x="38" y="63" fill="#FFFFFF" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">EN</text>
                    <circle cx="309" cy="44" r="20" fill="#C11D63" />
                    <text x="299" y="49" fill="#FFFFFF" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="600">JA</text>
                    <path d="M69 62c39 5 65 19 83 42M291 55c-33 8-57 24-74 49" fill="none" stroke="#ABB5C1" strokeWidth="1.5" strokeDasharray="5 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default RetailEcommerceHubWireframe;
