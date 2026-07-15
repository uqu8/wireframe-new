import React, { useState } from "react";

const PAGE_URL = "https://www.stepes.com/resources/global-content-strategy/";

const essentialQuestions = [
  {
    label: "Investment",
    question: "Where should we invest?",
    icon: "compass",
  },
  {
    label: "Content",
    question: "What content should we localize?",
    icon: "content",
  },
  {
    label: "Ownership",
    question: "Who should own each decision?",
    icon: "people",
  },
  {
    label: "Operations",
    question: "How should content move through the organization?",
    icon: "workflow",
  },
  {
    label: "Quality",
    question: "What level of quality and review does each content type require?",
    icon: "shield",
  },
  {
    label: "Performance",
    question: "How should success be measured?",
    icon: "chart",
  },
];

const heroStrategyStages = [
  {
    icon: "compass",
    label: "Plan",
    title: "Prioritize Markets and Content",
    items: ["Market opportunity", "Audience needs", "Content value"],
  },
  {
    icon: "shield",
    label: "Govern",
    title: "Align Teams, Quality, and Risk",
    items: ["Global–local ownership", "Quality standards", "AI governance"],
  },
  {
    icon: "chart",
    label: "Scale",
    title: "Connect Workflows and Performance",
    items: ["Technology and automation", "Language assets", "Continuous improvement"],
  },
];

const frameworkItems = [
  {
    icon: "compass",
    title: "Business and Market Priorities",
    intro:
      "Global content investment should begin with business priorities rather than translation volume.",
    body:
      "Organizations need a clear understanding of where multilingual content can make the greatest contribution. That may include supporting entry into a new market, improving product adoption, satisfying regulatory requirements, increasing digital engagement, reducing support friction, or strengthening relationships with existing customers.",
    listTitle: "A market-prioritization process may consider:",
    items: [
      "Current and projected market opportunity",
      "Customer and user demand",
      "Revenue potential",
      "Product availability and readiness",
      "Regulatory or contractual requirements",
      "Competitive activity",
      "Digital traffic and search behavior",
      "Availability of local sales and support resources",
      "Cost and complexity of market entry",
      "Consequences of not localizing",
    ],
    closing:
      "Not every market requires the same level of content investment. A strategic approach makes it possible to distinguish between markets that need a fully localized experience and those that can initially be supported with selected high-value content.",
  },
  {
    icon: "content",
    title: "Content Portfolio and Lifecycle",
    intro:
      "Enterprises rarely need to translate every piece of content into every language.",
    body:
      "A global content strategy evaluates the content portfolio and determines what should be localized, adapted, summarized, automated, recreated locally, retained in the source language, or retired.",
    listTitle: "Content decisions should account for:",
    items: [
      "Business purpose",
      "Intended audience",
      "Usage frequency",
      "Market relevance",
      "Legal or regulatory importance",
      "Content lifespan",
      "Update frequency",
      "Reuse potential",
      "Localization effort",
      "Risk of misunderstanding",
      "Expected business value",
    ],
    closing:
      "The strategy should also address the complete content lifecycle—from planning and creation through localization, review, publication, maintenance, and eventual retirement. This prevents outdated multilingual content from remaining in circulation and reduces the repeated translation of content that could have been centrally reused.",
  },
  {
    icon: "people",
    title: "Global and Local Operating Model",
    intro:
      "Global organizations must balance enterprise consistency with local market knowledge.",
    body:
      "Central teams may be responsible for brand standards, technology, terminology, vendor governance, security, and quality policies. Regional teams may contribute cultural expertise, market-specific requirements, local approvals, and direct knowledge of customers.",
    listTitle: "A well-designed localization operating model clarifies:",
    items: [
      "Who requests multilingual content",
      "Who determines market and language scope",
      "Who owns budgets",
      "Who manages technology and suppliers",
      "Who reviews and approves localized content",
      "What regional teams may adapt independently",
      "How exceptions are handled",
      "How performance is reported",
      "How shared language assets are maintained",
    ],
    closing:
      "Clear decision rights reduce duplicated work and prevent global standards from becoming approval bottlenecks.",
  },
  {
    icon: "workflow",
    title: "Technology and Workflow Architecture",
    intro:
      "Global content frequently moves through multiple systems, including content management systems, product repositories, digital asset management platforms, product information systems, code repositories, support platforms, learning systems, and document libraries.",
    body:
      "A scalable strategy defines how these systems connect to translation and localization workflows.",
    listTitle: "The technology architecture may include:",
    items: [
      "Translation management technology",
      "Content connectors and APIs",
      "Translation memory",
      "Terminology management",
      "AI translation engines",
      "Automated content analysis",
      "Workflow routing",
      "Human review and approval",
      "Linguistic quality assurance",
      "Version control",
      "Reporting and analytics",
    ],
    closing:
      "Technology should reduce manual handoffs and administrative work without removing the controls required for quality, confidentiality, or regulatory compliance.",
  },
  {
    icon: "shield",
    title: "Quality, Risk, and Governance",
    intro:
      "Not all content carries the same consequences when it is misunderstood.",
    body:
      "A global marketing campaign, a support article, an internal training document, and a regulated product label each require different levels of review and control.",
    listTitle: "Global content governance establishes policies for:",
    items: [
      "Approved terminology",
      "Brand voice and writing style",
      "Translation memory usage",
      "AI and machine translation",
      "Human review requirements",
      "Subject-matter validation",
      "In-country approval",
      "Data protection",
      "Access permissions",
      "Linguistic quality measurement",
      "Issue escalation",
      "Final publication authority",
    ],
    closing:
      "Risk-based governance allows organizations to move quickly on high-volume, lower-risk content while maintaining stronger controls for business-critical, legal, medical, technical, or regulated materials.",
  },
  {
    icon: "chart",
    title: "Measurement and Continuous Improvement",
    intro:
      "A strategy is only useful when the organization can evaluate its performance.",
    body:
      "Global content programs should measure more than the number of words translated or projects completed. They should examine how multilingual content affects customer experience, operational efficiency, market performance, quality, and cost.",
    listTitle: "A connected measurement framework can include:",
    items: [
      "Customer and user engagement",
      "Market and product performance",
      "Turnaround and publication speed",
      "Quality findings and rework",
      "Terminology and language-asset reuse",
      "Workflow efficiency",
      "Cost and resource utilization",
      "Regional feedback",
    ],
    closing:
      "Measurement also creates a feedback loop. Review findings, user behavior, terminology issues, market feedback, and support data can all be used to improve future content and workflows. Over time, the organization moves from reacting to individual translation requests toward continuously optimizing the way global content is planned and delivered.",
  },
];


const operatingModels = [
  {
    icon: "workflow",
    title: "Centralized Model",
    description:
      "One global team manages most localization decisions, technology, suppliers, processes, and standards.",
    strengths: [
      "Stronger enterprise consistency",
      "Consolidated purchasing",
      "Standardized workflows",
      "Shared language assets",
      "Central reporting",
      "Clearer quality governance",
    ],
    challenge:
      "A highly centralized model can become slow or disconnected from local needs when regional teams lack an effective way to contribute market knowledge.",
    fit: "Organizations with strong central ownership",
  },
  {
    icon: "people",
    title: "Decentralized Model",
    description:
      "Regional offices or business units manage their own multilingual content and make decisions closer to each market.",
    strengths: [
      "Faster local decision-making",
      "Greater market flexibility",
      "Closer alignment with regional customers",
      "Stronger local ownership",
      "More culturally specific content",
    ],
    challenge:
      "Processes, vendors, terminology, and quality standards can become fragmented across the organization.",
    fit: "Organizations with highly independent regions",
  },
  {
    icon: "balance",
    title: "Hybrid Model",
    description:
      "Central standards and shared infrastructure are combined with clearly defined regional responsibilities.",
    strengths: [
      "Shared technology and governance",
      "Defined regional flexibility",
      "Stronger global–local collaboration",
      "Scalable language assets",
      "Enterprise visibility with market input",
    ],
    challenge:
      "Success depends on clear decision rights, documented responsibilities, and an effective process for handling exceptions.",
    fit: "Complex global enterprises",
    featured: true,
  },
];

const hybridResponsibilities = [
  {
    label: "Global Team",
    icon: "hub",
    items: [
      "Technology and security standards",
      "Terminology and language assets",
      "Preferred suppliers and quality policies",
      "Enterprise reporting and governance",
    ],
  },
  {
    label: "Regional Teams",
    icon: "market",
    items: [
      "Market relevance and local priorities",
      "Cultural and customer insight",
      "Content review and local approval",
      "Market-specific adaptation",
    ],
  },
];

const prioritizationPillars = [
  {
    icon: "market",
    title: "Start With Market Value",
    body:
      "Market prioritization should reflect the company’s business strategy. High-potential markets may justify a complete localized experience, while emerging or experimental markets may initially require only selected content.",
    items: [
      "Customer demand",
      "Market size",
      "Revenue opportunity",
      "Website traffic",
      "Product usage",
      "Search activity",
      "Support volume",
      "Local regulations",
      "Sales coverage",
      "Competitive presence",
    ],
    closing:
      "Language decisions should also reflect how customers actually communicate. A country may require more than one language, while one language may support audiences across several markets.",
  },
  {
    icon: "content",
    title: "Evaluate Content Value",
    body:
      "Within each market, prioritize content according to its role in the customer or user journey.",
    items: [
      "Product and service pages",
      "Software and application interfaces",
      "Onboarding experiences",
      "Product documentation",
      "Safety and compliance information",
      "Sales enablement materials",
      "Customer support knowledge",
      "Training content",
      "Legal and contractual documents",
      "High-performing marketing assets",
    ],
    closing:
      "Content with limited usage, outdated information, or low market relevance may not justify localization.",
  },
  {
    icon: "scale",
    title: "Consider Effort, Risk, and Reuse",
    body:
      "Business value should be assessed alongside localization effort. A short interface may contain few words but require extensive engineering and visual testing, while a large support library may be easier to automate and update continuously.",
    items: [
      "Technical complexity",
      "Content volume",
      "Update frequency",
      "Review requirements",
      "Regulatory risk",
      "Layout and design constraints",
      "Multimedia production",
      "Existing translation memory",
      "Potential for reuse",
      "Availability of local reviewers",
    ],
    closing:
      "The strongest investment decisions account for business impact, operating complexity, quality requirements, and the long-term value of reusable content.",
  },
];

const portfolioDecisions = [
  {
    decision: "Localize First",
    when:
      "High business value, high customer importance, or mandatory market requirements",
    approach: "Prioritized localization with appropriate professional review",
  },
  {
    decision: "Localize Selectively",
    when: "Relevant to specific audiences, channels, or stages of the journey",
    approach: "Translate the most valuable assets for the markets that need them",
  },
  {
    decision: "Automate at Scale",
    when: "High-volume, frequently updated, lower-risk content",
    approach: "AI-enabled translation with automated QA and targeted human review",
  },
  {
    decision: "Retain, Consolidate, or Retire",
    when: "Low usage, duplication, outdated information, or limited market relevance",
    approach: "Keep in the source language, simplify, combine, or remove",
  },
];

const globalReadinessItems = [
  {
    icon: "source",
    title: "Write Clear Source Content",
    body:
      "Clear source content is easier for both people and AI systems to interpret. Writers should avoid unnecessary ambiguity, unexplained abbreviations, inconsistent terminology, overly complex sentence structures, and cultural references that may not transfer well to other markets.",
    closing:
      "Clear writing improves localization and benefits every audience, including readers of the original language.",
  },
  {
    icon: "layers",
    title: "Build Reusable Content",
    body:
      "Modular content can be created once and reused across products, channels, markets, and formats. Instead of repeatedly translating similar passages, organizations can maintain approved content components that are updated and localized systematically.",
    listTitle: "Reusable content is especially valuable for:",
    items: [
      "Product descriptions",
      "Technical instructions",
      "Safety statements",
      "Legal language",
      "Support responses",
      "Training modules",
      "Interface messages",
      "Brand descriptions",
    ],
    closing:
      "Content reuse improves consistency and increases the value of translation memory and terminology assets.",
  },
  {
    icon: "code",
    title: "Prepare Products and Systems for Localization",
    body:
      "Internationalization prepares software, websites, applications, and content systems to support multiple languages and regional formats.",
    listTitle: "Global-ready systems can support:",
    items: [
      "Text expansion and contraction",
      "Right-to-left languages",
      "Unicode characters",
      "Local date and time formats",
      "Currency and numerical conventions",
      "Address and measurement formats",
      "Pluralization rules",
      "Locale-specific images",
      "Flexible interface layouts",
    ],
    closing:
      "Addressing these requirements early reduces expensive redesign and engineering work later.",
  },
  {
    icon: "book",
    title: "Govern Terminology and Brand Voice",
    body:
      "Approved terminology helps ensure that product names, technical concepts, regulated terms, and brand language remain consistent.",
    listTitle: "Organizations should define:",
    items: [
      "Preferred and prohibited terms",
      "Product and feature names",
      "Acronyms and abbreviations",
      "Brand voice guidelines",
      "Audience-specific language",
      "Market-specific exceptions",
      "Ownership for ongoing updates",
    ],
    closing:
      "Terminology management should be a living process as products, regulations, and market feedback introduce new language requirements.",
  },
  {
    icon: "search",
    title: "Plan for Global Search",
    body:
      "Customers in different markets may not search for products and services using direct translations of the same keywords. Global SEO requires research into local search intent, terminology, customer needs, and competitive language.",
    listTitle: "A global search strategy may include:",
    items: [
      "Local keyword research",
      "Search-intent analysis",
      "Localized metadata",
      "Market-specific landing pages",
      "Regional content adaptation",
      "Technical multilingual SEO",
      "Consistent URL and language structures",
      "Local performance measurement",
    ],
    closing:
      "Effective multilingual SEO combines linguistic accuracy with an understanding of how each market searches, evaluates, and makes decisions.",
  },
];

const aiStrategyPrinciples = [
  {
    icon: "spark",
    title: "Match Automation to Content Purpose",
    body:
      "High-volume internal content or rapidly changing support information may be suitable for AI-forward workflows. Brand-defining campaigns, legal agreements, regulated communications, safety materials, and customer-facing product experiences may require more extensive professional or subject-matter review.",
    closing:
      "The objective is not to maximize automation for its own sake. It is to apply the right level of automation and expertise to each content category.",
  },
  {
    icon: "database",
    title: "Ground AI With Enterprise Language Assets",
    body:
      "AI output becomes more useful when it is guided by the organization’s approved language resources.",
    items: [
      "Terminology databases",
      "Translation memories",
      "Style guides",
      "Approved reference content",
      "Product information",
      "Brand guidelines",
      "Market-specific instructions",
    ],
    closing:
      "Language assets help align AI-generated translations with established company language and reduce unnecessary variation.",
  },
  {
    icon: "people",
    title: "Keep Humans Where Judgment Matters",
    body:
      "Professional linguists and subject-matter reviewers contribute context, cultural judgment, brand sensitivity, technical understanding, and accountability.",
    items: [
      "Legal consequences",
      "Patient or user safety",
      "Regulatory obligations",
      "Complex technical concepts",
      "Persuasive brand language",
      "Cultural adaptation",
      "Ambiguous source text",
      "Final publication approval",
    ],
    closing:
      "AI and professional expertise should operate as connected parts of the same quality framework.",
  },
  {
    icon: "shield",
    title: "Establish AI Governance",
    body:
      "Enterprise AI translation policies give teams a safe, consistent path for adopting AI rather than leaving departments to use disconnected tools without shared oversight.",
    items: [
      "Approved systems and models",
      "Permitted content types",
      "Data handling and confidentiality",
      "Access controls",
      "Language-pair performance",
      "Human-review requirements",
      "Quality evaluation",
      "Workflow changes and escalation",
      "Auditability and reporting",
    ],
  },
  {
    icon: "refresh",
    title: "Evaluate Performance Continuously",
    body:
      "AI quality can vary by language, domain, content type, and workflow design. Organizations should evaluate actual production content rather than relying only on broad model claims.",
    closing:
      "Performance should be reviewed over time using linguistic evaluation, automated checks, reviewer feedback, terminology compliance, and business outcomes. AI translation is most effective when it operates within a measurable process of validation and continuous improvement.",
  },
];



const riskTiers = [
  {
    tier: "Lower Risk",
    examples:
      "Internal discovery content, temporary communications, and large-volume knowledge drafts",
    workflow:
      "AI-forward translation with automated checks and selective professional review",
  },
  {
    tier: "Moderate Risk",
    examples: "Support articles, training content, and standard documentation",
    workflow: "AI or professional translation with linguistic review",
  },
  {
    tier: "High Risk",
    examples:
      "Product experiences, brand campaigns, and customer-facing technical content",
    workflow:
      "Specialist translation, professional review, and in-context validation",
  },
  {
    tier: "Critical Risk",
    examples:
      "Legal, clinical, regulatory, financial, and safety-related content",
    workflow:
      "Qualified subject-matter expertise, documented review, QA, and formal approval",
  },
];

const governancePrinciples = [
  {
    icon: "shield",
    title: "Apply Controls Consistently",
    body:
      "Once content tiers have been established, each tier should have clear requirements for translation method, linguist qualifications, subject-matter review, terminology validation, automated checks, in-country approval, functional or visual testing, documentation, and publication authority.",
    closing:
      "This creates consistency across departments while allowing workflows to remain flexible.",
  },
  {
    icon: "database",
    title: "Protect Confidential and Sensitive Content",
    body:
      "Security should be built into the content lifecycle. Organizations need to understand where content is stored, which systems process it, who can access it, and whether confidential material may be used by external AI services.",
    closing:
      "Access controls, approved technology, data-handling policies, supplier qualification, and secure transfer processes should all form part of global content governance.",
  },
  {
    icon: "people",
    title: "Maintain Accountability",
    body:
      "Technology can automate tasks, but accountability must remain clear. Teams should know who approves terminology, resolves quality issues, authorizes exceptions, updates standards, and makes final publication decisions.",
    closing:
      "Effective governance enables faster work because people no longer need to redefine the rules for every project.",
  },
];

const performanceDimensions = [
  {
    icon: "chart",
    title: "Business Performance",
    body:
      "Business metrics help determine whether localized experiences are supporting broader market, customer, and product objectives.",
    items: [
      "Market engagement",
      "Conversion rates",
      "Product adoption and user activation",
      "Customer retention",
      "Support success",
      "Training completion",
      "Digital traffic and search visibility",
      "Regional revenue contribution",
    ],
    closing:
      "Localization should be evaluated as part of the complete customer or user experience rather than treated as the sole cause of these outcomes.",
  },
  {
    icon: "workflow",
    title: "Operational Performance",
    body:
      "Operational measures show whether the global content process is moving efficiently from source approval to multilingual publication.",
    items: [
      "Turnaround and on-time delivery",
      "Time to multilingual publication",
      "Manual handoffs",
      "Review-cycle duration",
      "Approval delays",
      "Content backlog",
      "Update synchronization",
      "Workflow automation rate",
    ],
    closing:
      "These measures reveal bottlenecks that may not appear in traditional translation reports.",
  },
  {
    icon: "scale",
    title: "Financial Performance",
    body:
      "Financial measurement should consider both direct spend and the efficiency created across the content lifecycle.",
    items: [
      "Cost per project or asset",
      "Cost by content category",
      "Translation memory reuse",
      "Repeated-content savings",
      "Automation efficiency",
      "Review and rework costs",
      "Vendor consolidation",
      "Cost of delayed publication",
    ],
    closing:
      "A lower translation rate does not necessarily produce a lower total cost when rework, delays, inconsistent terminology, and manual administration are included.",
  },
  {
    icon: "shield",
    title: "Quality Performance",
    body:
      "Quality measurement should show whether multilingual content is fit for its intended audience, channel, and level of business risk.",
    items: [
      "Terminology compliance",
      "Accuracy findings and error severity",
      "Reviewer changes",
      "Rework rates",
      "Style-guide compliance",
      "In-context issues",
      "Market feedback",
      "Customer comprehension",
    ],
    closing:
      "A minor stylistic preference should not be treated the same way as an error that changes meaning or creates regulatory risk.",
  },
];

const maturityStages = [
  {
    stage: "1",
    title: "Reactive",
    body:
      "Localization is managed project by project. Different departments may use separate suppliers, processes, and file-sharing methods, while ownership and decision-making remain informal.",
    characteristics: [
      "Isolated translation projects",
      "Manual coordination",
      "Limited reuse",
      "Inconsistent terminology",
      "Little central visibility",
      "Quality reviewed after problems occur",
    ],
    priority:
      "Establish basic ownership, preferred workflows, and shared language assets.",
  },
  {
    stage: "2",
    title: "Coordinated",
    body:
      "The organization begins to standardize recurring work through preferred suppliers, documented processes, translation memory, and basic terminology resources.",
    characteristics: [
      "Preferred vendors",
      "Shared project procedures",
      "Initial translation memory",
      "Basic terminology management",
      "More consistent review",
      "Partial cost visibility",
    ],
    priority:
      "Formalize governance, roles, quality expectations, and reporting.",
  },
  {
    stage: "3",
    title: "Governed",
    body:
      "The enterprise defines shared standards and decision rights. Content is categorized by purpose or risk, and central teams gain visibility into spending, quality, and supplier performance.",
    characteristics: [
      "Defined operating model",
      "Documented roles and responsibilities",
      "Risk-based workflows",
      "Central terminology governance",
      "Supplier qualification",
      "Enterprise reporting",
    ],
    priority:
      "Connect content systems and automate repetitive workflow steps.",
  },
  {
    stage: "4",
    title: "Connected",
    body:
      "Localization becomes part of the broader content and product lifecycle. Systems exchange content through connectors or APIs, and shared language assets are reused across teams.",
    characteristics: [
      "Integrated content systems",
      "Automated routing",
      "Continuous localization",
      "Shared enterprise language assets",
      "Cross-functional governance",
      "Unified operational reporting",
    ],
    priority:
      "Use performance data and risk-based AI to optimize decisions.",
  },
  {
    stage: "5",
    title: "Optimized",
    body:
      "Global content operates as a measurable enterprise capability. Workflows are assigned dynamically according to content value and risk, and performance data drives continuous improvement.",
    characteristics: [
      "Risk-based AI automation",
      "Continuous quality monitoring",
      "Predictive planning",
      "Business-aligned measurement",
      "Content portfolio optimization",
      "Mature global–local collaboration",
    ],
    priority:
      "Continue refining strategy as markets, technology, and customer needs evolve.",
  },
];

const strategyTopicGroups = [
  {
    icon: "compass",
    title: "Plan and Prioritize",
    description:
      "Connect global content investment with business goals, market needs, customer journeys, and enterprise readiness.",
    links: [
      {
        title: "Global Content Strategy Framework",
        description:
          "Bring market priorities, content planning, operating models, technology, governance, and measurement into one connected system.",
        href: `${PAGE_URL}#strategy-framework`,
      },
      {
        title: "Market and Language Prioritization",
        description:
          "Evaluate market opportunity, customer demand, regulatory requirements, and content value to determine where localization should begin.",
        href: "https://www.stepes.com/resources/global-content-strategy/market-language-prioritization/",
      },
      {
        title: "Content Localization Planning",
        description:
          "Decide what to translate, adapt, automate, recreate locally, maintain continuously, or retire.",
        href: "https://www.stepes.com/resources/global-content-strategy/content-localization-planning/",
      },
      {
        title: "Building the Business Case for Localization",
        description:
          "Create a fact-based case using market opportunity, customer experience, efficiency, risk reduction, and expected business impact.",
        href: "https://www.stepes.com/resources/global-content-strategy/business-case-for-localization/",
      },
    ],
  },
  {
    icon: "people",
    title: "Organize and Govern",
    description:
      "Define ownership, decision rights, quality expectations, and the relationship between global and regional teams.",
    links: [
      {
        title: "Localization Operating Models",
        description:
          "Understand how centralized, decentralized, and hybrid structures affect speed, consistency, autonomy, cost, and accountability.",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-operating-models/",
      },
      {
        title: "Centralized vs. Decentralized Localization",
        description:
          "Determine which decisions benefit from enterprise standards and which should remain close to local markets.",
        href: "https://www.stepes.com/resources/global-content-strategy/centralized-vs-decentralized-localization/",
      },
      {
        title: "Global Content Governance",
        description:
          "Establish policies for terminology, brand voice, technology, AI, security, quality, review, publication, and exceptions.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-governance/",
      },
      {
        title: "Global and Regional Roles",
        description:
          "Clarify responsibilities across marketing, product, engineering, legal, procurement, support, localization, and in-country teams.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-and-regional-roles/",
      },
    ],
  },
  {
    icon: "workflow",
    title: "Connect and Scale",
    description:
      "Turn strategic direction into integrated systems, repeatable workflows, and scalable multilingual content delivery.",
    links: [
      {
        title: "Global Content Operations",
        description:
          "Connect intake, workflow orchestration, translation, review, quality assurance, and multilingual delivery.",
        href: "https://www.stepes.com/solutions/global-content-operations/",
      },
      {
        title: "Localization Technology Strategy",
        description:
          "Connect content systems, translation management, AI, language assets, workflow automation, and reporting.",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-technology-strategy/",
      },
      {
        title: "Multilingual Content Lifecycle Management",
        description:
          "Manage localized content from planning and production through updates, reuse, publication, maintenance, and retirement.",
        href: "https://www.stepes.com/resources/global-content-strategy/multilingual-content-lifecycle-management/",
      },
      {
        title: "AI Strategy for Global Content",
        description:
          "Determine where AI creates value, where professional expertise is required, and how AI workflows should be governed.",
        href: "https://www.stepes.com/resources/global-content-strategy/ai-strategy-for-global-content/",
      },
    ],
  },
  {
    icon: "chart",
    title: "Measure and Improve",
    description:
      "Create a balanced view of business impact, operating performance, quality, cost, and organizational maturity.",
    links: [
      {
        title: "Localization ROI",
        description:
          "Evaluate the financial, operational, and business contribution of multilingual content without reducing value to translation cost alone.",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-roi/",
      },
      {
        title: "Global Content KPIs",
        description:
          "Measure market outcomes, customer experience, workflow efficiency, quality, reuse, and cost.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-kpis/",
      },
      {
        title: "Translation Cost Optimization",
        description:
          "Reduce unnecessary spending through prioritization, reuse, source-content improvement, automation, and better workflow design.",
        href: "https://www.stepes.com/resources/global-content-strategy/translation-cost-optimization/",
      },
      {
        title: "Global Content Maturity",
        description:
          "Build a practical roadmap from reactive translation projects to connected, measurable global content operations.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-maturity-model/",
      },
    ],
  },
];


const operationsCapabilities = [
  {
    icon: "hub",
    title: "Centralize Multilingual Work",
    body:
      "Bring translation requests, content, language assets, workflows, reviews, and reporting into a more connected operating environment.",
    closing:
      "Centralized visibility helps organizations reduce fragmented purchasing, duplicated work, and inconsistent processes while still supporting the needs of individual departments and regions.",
  },
  {
    icon: "spark",
    title: "Apply AI With Professional Oversight",
    body:
      "Use AI translation where it improves speed and scale while routing higher-risk or specialized content to qualified professional linguists and subject-matter reviewers.",
    closing:
      "Workflow decisions can be aligned with content purpose, quality expectations, language, and business risk.",
  },
  {
    icon: "database",
    title: "Reuse Enterprise Language Assets",
    body:
      "Translation memory, terminology, approved content, and style guidance help improve consistency across projects and reduce the need to translate the same content repeatedly.",
    closing:
      "These assets become more valuable as they are maintained and reused across the organization.",
  },
  {
    icon: "workflow",
    title: "Connect Content Systems",
    body:
      "APIs and localization integrations reduce manual file handling and help multilingual content move more efficiently between business systems and translation workflows.",
    closing:
      "Connected processes can support websites, software products, documentation, training, customer support, marketing, and other content environments.",
  },
  {
    icon: "shield",
    title: "Strengthen Quality and Governance",
    body:
      "Defined workflows, linguistic quality assurance, terminology controls, professional review, and enterprise reporting help teams maintain appropriate standards across content types and markets.",
    closing:
      "Governance becomes part of the operating model rather than a separate approval layer added at the end.",
  },
  {
    icon: "market",
    title: "Support Global Teams in 100+ Languages",
    body:
      "Stepes combines AI-enabled translation technology with professional native linguists to support multilingual content across industries, business functions, and customer touchpoints.",
    closing:
      "Global teams can scale content delivery while preserving the expertise and market context each audience requires.",
  },
];

const faqItems = [
  {
    question: "What is a global content strategy?",
    answer:
      "A global content strategy is a framework for planning, creating, adapting, governing, distributing, and measuring content across multiple languages and markets. It defines which audiences and markets to support, what content to localize, how global and regional teams should collaborate, which technologies and workflows to use, and how quality and business performance should be evaluated. A global content strategy may cover marketing, websites, software, product information, documentation, training, support, legal content, and regulated communications.",
  },
  {
    question: "How is global content strategy different from localization strategy?",
    answer:
      "Localization strategy focuses on adapting products, services, and content for specific languages and markets. Global content strategy is broader. It addresses the entire enterprise content portfolio, including content planning, market prioritization, ownership, governance, technology, localization, distribution, maintenance, and measurement. Localization strategy is therefore an essential component of a wider global content strategy.",
  },
  {
    question: "How is global content strategy different from global content marketing?",
    answer:
      "Global content marketing primarily focuses on attracting, engaging, and converting audiences in international markets through campaigns, search, social media, thought leadership, and other marketing channels. Global content strategy also covers non-marketing content, such as software interfaces, product documentation, training, customer support, legal materials, regulatory content, and internal knowledge. It creates a shared framework for managing multilingual content across the enterprise rather than within marketing alone.",
  },
  {
    question: "What content should a company localize first?",
    answer:
      "Companies should begin with content that has the greatest combination of business value, customer importance, market relevance, and legal or regulatory necessity. This often includes high-traffic product pages, software interfaces, onboarding content, product documentation, safety information, customer support resources, and content required for market entry. The decision should also consider localization effort, update frequency, technical complexity, content lifespan, and potential reuse.",
  },
  {
    question: "Should localization be centralized or managed by regional teams?",
    answer:
      "The best model depends on the organization. Centralized programs can provide stronger consistency, purchasing leverage, technology governance, and reporting. Regional programs can respond more quickly to local customer needs and cultural expectations. Many enterprises use a hybrid model in which central teams manage shared technology, suppliers, terminology, security, and quality standards while regional teams contribute market priorities, cultural knowledge, reviews, and approvals.",
  },
  {
    question: "How can global brands maintain consistency while allowing local adaptation?",
    answer:
      "Consistency begins with identifying which brand elements are universal and which may be adapted. Product names, core positioning, approved terminology, visual identity, and essential claims may require strong global control. Examples, imagery, tone, offers, channel selection, and cultural references may benefit from local adaptation. Clear brand guidelines, terminology resources, decision rights, and review workflows help regional teams adapt content without weakening the global identity.",
  },
  {
    question: "How does AI fit into a global content strategy?",
    answer:
      "AI can accelerate translation, automate repetitive tasks, and make it economically practical to localize larger volumes of content. Its role should be determined according to content purpose and risk. Lower-risk, high-volume content may use AI-forward workflows, while legal, regulated, technical, safety-related, or brand-sensitive content may require professional translation and specialist review. AI should operate within defined policies for data protection, terminology, quality evaluation, human oversight, and accountability.",
  },
  {
    question: "How should global content performance be measured?",
    answer:
      "Performance should be measured across business, operational, financial, and quality dimensions. Relevant metrics may include market engagement, product adoption, conversion, turnaround time, publication speed, translation memory reuse, cost per asset, terminology compliance, review findings, and rework. The most useful measurements connect localization activity to the content’s intended purpose rather than evaluating every asset using the same metric.",
  },
  {
    question: "What is the difference between global content strategy and global content operations?",
    answer:
      "Global content strategy determines what the organization should do. It defines priorities, governance, investment, responsibilities, and success measures. Global content operations determine how the work is executed. They include intake, content transfer, translation, AI workflows, human review, quality assurance, system integration, delivery, and reporting. Strategy sets the direction. Operations turn that direction into a repeatable enterprise capability.",
  },
  {
    question: "How can regulated organizations govern multilingual content?",
    answer:
      "Regulated organizations should define documented requirements for translator qualifications, terminology, subject-matter review, quality assurance, approvals, version control, confidentiality, and recordkeeping. Workflows should reflect the specific risk and regulatory purpose of each content type. Legal agreements, clinical materials, product labeling, safety information, and regulated financial communications may require stronger controls than general business content. Governance should also specify which systems may process confidential material and who has authority to approve final multilingual content.",
  },
  {
    question: "How often should a global content strategy be reviewed?",
    answer:
      "The strategy should be reviewed at least annually and whenever significant business changes occur. A review may be needed when the organization enters new markets, launches products, changes its technology environment, adopts new AI tools, restructures global teams, encounters recurring quality problems, or faces new regulatory requirements. Operational performance should be monitored more frequently so terminology, workflows, content priorities, and review requirements can be adjusted as conditions change.",
  },
  {
    question: "How can a company reduce global content costs without reducing quality?",
    answer:
      "Cost optimization begins with improving decisions rather than simply lowering translation rates. Organizations can reduce cost by prioritizing high-value content, eliminating duplication, improving source writing, reusing translation memory, managing terminology, automating appropriate content, integrating systems, and matching review levels to business risk. These practices reduce administrative effort and rework while preserving stronger quality controls for content where errors carry significant consequences.",
  },
];

function Icon({ name, size = 22 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1 5.1-2.1Z" />
      </>
    ),
    content: (
      <>
        <rect x="5" y="4" width="12" height="15" rx="2" />
        <path d="M8 8h6M8 12h6M8 16h4" />
        <path d="M9 2h10a2 2 0 0 1 2 2v13" />
      </>
    ),
    people: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3.5 19c.6-3.3 2.2-5 4.5-5s3.9 1.7 4.5 5" />
        <path d="M13.5 15.2c.9-1.1 2.1-1.7 3.5-1.7 2 0 3.4 1.4 3.9 4.2" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="4" width="6" height="5" rx="1.5" />
        <rect x="15" y="15" width="6" height="5" rx="1.5" />
        <path d="M9 6.5h3a3 3 0 0 1 3 3v5.5" />
        <path d="m12.5 12 2.5 3 2.5-3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.7 8 7 10 4.3-2 7-5.4 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-8M22 19H2" />
        <path d="m4 8 5-3 5 3 6-4" />
      </>
    ),

    balance: (
      <>
        <path d="M12 3v18M5 6h14" />
        <path d="m7 6-3 6h6L7 6ZM17 6l-3 6h6l-3-6Z" />
        <path d="M8 21h8" />
      </>
    ),
    hub: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="m7 7.5 3 2.5M17 7.5 14 10M7 16.5l3-2.5M17 16.5 14 14" />
      </>
    ),
    market: (
      <>
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    scale: (
      <>
        <path d="M4 19h16M12 4v15M7 6h10" />
        <path d="m7 6-3 7h6L7 6ZM17 6l-3 7h6l-3-7Z" />
      </>
    ),
    source: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4M9 11h6M9 15h5" />
        <path d="m8.5 7.5 1 1 2-2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9L12 2Z" />
        <path d="m19 14 .8 2.7L22 18l-2.2 1.3L19 22l-.8-2.7L16 18l2.2-1.3L19 14Z" />
        <path d="m5 13 .6 2L7 16l-1.4 1L5 19l-.6-2L3 16l1.4-1L5 13Z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M18 9a7 7 0 0 0-12-2L4 12M6 15a7 7 0 0 0 12 2l2-5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.compass}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`gcs-arrow-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

export default function GlobalContentStrategyHub() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="gcs-page">
      <style>{`
        :root {
          --gcs-accent: #c11d63;
          --gcs-accent-dark: #9f1d55;
          --gcs-accent-deep: #7a1542;
          --gcs-blush: #fdf2f7;
          --gcs-ink: #111827;
          --gcs-copy: #4b5563;
          --gcs-muted: #6b7280;
          --gcs-line: #e5e7eb;
          --gcs-line-strong: #d9dde5;
          --gcs-soft: #f7f8fb;
          --gcs-white: #ffffff;
        }

        .gcs-page,
        .gcs-page * {
          box-sizing: border-box;
        }

        .gcs-page {
          width: 100%;
          overflow-x: hidden;
          background: var(--gcs-white);
          color: var(--gcs-ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          line-height: 1.6;
        }

        .gcs-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .gcs-page h1,
        .gcs-page h2,
        .gcs-page h3,
        .gcs-page p,
        .gcs-page ul {
          margin-top: 0;
        }

        .gcs-page h1,
        .gcs-page h2,
        .gcs-page h3 {
          color: var(--gcs-ink);
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .gcs-page h1 {
          max-width: 980px;
          margin: 0 auto 24px;
          font-size: 48px;
          line-height: 1.08;
        }

        .gcs-page h2 {
          margin-bottom: 24px;
          font-size: 36px;
          line-height: 1.16;
        }

        .gcs-page h3 {
          margin-bottom: 14px;
          font-size: 24px;
          line-height: 1.25;
        }

        .gcs-page p {
          color: var(--gcs-copy);
          font-size: 16px;
          font-weight: 400;
        }

        .gcs-page h1,
        .gcs-page h2,
        .gcs-page h3,
        .gcs-page p,
        .gcs-page li,
        .gcs-page a,
        .gcs-page strong {
          overflow-wrap: break-word;
        }

        .gcs-page article,
        .gcs-page header,
        .gcs-page aside,
        .gcs-page [class*="-intro"] > *,
        .gcs-page [class*="-grid"] > * {
          min-width: 0;
        }

        .gcs-page .gcs-eyebrow {
          margin: 0 0 18px;
          color: var(--gcs-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .gcs-hero {
          position: relative;
          padding: 104px 0 88px;
          background:
            radial-gradient(circle at 50% 0%, rgba(193, 29, 99, 0.055), transparent 31%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 70%, #fbfafc 100%);
        }

        .gcs-hero-copy {
          position: relative;
          z-index: 2;
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }

        .gcs-hero-copy .gcs-eyebrow {
          margin-bottom: 20px;
        }

        .gcs-challenge-copy > .gcs-eyebrow,
        .gcs-section-head > .gcs-eyebrow {
          margin-bottom: 18px;
        }

        .gcs-hero-lede {
          max-width: 820px;
          margin: 0 auto;
          color: var(--gcs-copy);
          font-size: 18px !important;
          line-height: 1.72;
        }

        .gcs-hero-lede + .gcs-hero-lede {
          margin-top: 6px;
        }

        .gcs-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .gcs-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .gcs-button:hover {
          transform: translateY(-1px);
        }

        .gcs-button:focus-visible,
        .gcs-arrow-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .gcs-button-primary {
          background: var(--gcs-accent);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
          color: #fff;
        }

        .gcs-button-primary:hover {
          background: var(--gcs-accent-dark);
          box-shadow: 0 14px 32px rgba(193, 29, 99, 0.24);
        }

        .gcs-button-secondary {
          border-color: var(--gcs-line-strong);
          background: rgba(255, 255, 255, 0.9);
          color: var(--gcs-ink);
        }

        .gcs-button-secondary:hover {
          border-color: #c8cdd7;
          background: #fff;
        }

        .gcs-strategy-visual {
          width: min(100%, 1040px);
          margin: 62px auto 0;
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 22px 54px rgba(17, 24, 39, 0.065);
        }

        .gcs-strategy-visual-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 28px;
          border-bottom: 1px solid var(--gcs-line);
          background: linear-gradient(90deg, #ffffff 0%, #ffffff 64%, var(--gcs-blush) 100%);
        }

        .gcs-strategy-visual-label {
          color: var(--gcs-accent-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .gcs-strategy-visual-note {
          color: var(--gcs-muted);
          font-size: 13px;
          font-weight: 600;
        }

        .gcs-strategy-flow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gcs-strategy-stage {
          min-width: 0;
          padding: 30px 30px 32px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-strategy-stage:last-child {
          border-right: 0;
        }

        .gcs-strategy-stage-head {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          margin-bottom: 17px;
        }

        .gcs-strategy-stage-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-strategy-stage-label {
          display: block;
          margin-bottom: 3px;
          color: var(--gcs-accent-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gcs-strategy-stage h3 {
          margin-bottom: 0;
          font-size: 19px;
          line-height: 1.32;
          letter-spacing: -0.018em;
        }

        .gcs-strategy-stage-list {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gcs-strategy-stage-list li {
          position: relative;
          padding-left: 15px;
          color: var(--gcs-copy);
          font-size: 14px;
          line-height: 1.45;
        }

        .gcs-strategy-stage-list li::before {
          position: absolute;
          top: 0.62em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gcs-accent);
          content: "";
        }

        .gcs-section {
          padding: 96px 0;
        }

        .gcs-challenge {
          background: #fff;
        }

        .gcs-challenge-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 84px;
          align-items: start;
        }

        .gcs-challenge-copy {
          max-width: 620px;
        }

        .gcs-challenge-copy p {
          margin-bottom: 20px;
        }

        .gcs-challenge-copy .gcs-section-lede {
          color: var(--gcs-ink);
          font-size: 18px;
          line-height: 1.7;
        }

        .gcs-challenge-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-question-panel {
          overflow: hidden;
          border: 1px solid var(--gcs-line);
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 20px 48px rgba(17, 24, 39, 0.06);
        }

        .gcs-question-panel-head {
          padding: 30px 32px 24px;
          border-bottom: 1px solid var(--gcs-line);
          background: var(--gcs-blush);
        }

        .gcs-question-panel-head h3 {
          margin-bottom: 8px;
        }

        .gcs-question-panel-head p {
          margin-bottom: 0;
          font-size: 15px;
        }

        .gcs-question-row {
          display: grid;
          grid-template-columns: 44px 118px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          min-height: 86px;
          padding: 18px 32px;
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-question-row:last-child {
          border-bottom: 0;
        }

        .gcs-question-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #f7f7f9;
          color: var(--gcs-accent-dark);
        }

        .gcs-question-label {
          color: var(--gcs-muted);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gcs-question-text {
          color: var(--gcs-ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .gcs-question-footer {
          padding: 24px 32px 28px;
          border-top: 1px solid var(--gcs-line);
          background: #fbfbfc;
        }

        .gcs-question-footer p {
          margin-bottom: 0;
          color: var(--gcs-ink);
          font-size: 16px;
          line-height: 1.65;
        }

        .gcs-framework {
          background: var(--gcs-soft);
        }

        .gcs-section-head {
          max-width: 860px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .gcs-section-head p:last-child {
          margin-bottom: 0;
        }

        .gcs-section-head .gcs-intro {
          color: var(--gcs-ink);
          font-size: 18px;
          line-height: 1.72;
        }

        .gcs-section-head .gcs-support {
          max-width: 820px;
          margin: 12px auto 0;
        }

        .gcs-framework-shell {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 24px 54px rgba(17, 24, 39, 0.06);
        }

        .gcs-framework-banner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 28px;
          align-items: center;
          padding: 30px 34px;
          border-bottom: 1px solid var(--gcs-line);
          background: linear-gradient(90deg, #fff 0%, #fff 55%, var(--gcs-blush) 100%);
        }

        .gcs-framework-banner h3 {
          margin-bottom: 6px;
          font-size: 22px;
        }

        .gcs-framework-banner p {
          max-width: 760px;
          margin-bottom: 0;
        }

        .gcs-framework-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 15px;
          border: 1px solid rgba(193, 29, 99, 0.16);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          color: var(--gcs-accent-deep);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }

        .gcs-framework-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gcs-framework-item {
          min-width: 0;
          padding: 42px 40px 40px;
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-framework-item:nth-child(odd) {
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-framework-item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .gcs-framework-title-row {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 16px;
          align-items: center;
          margin-bottom: 18px;
        }

        .gcs-framework-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-framework-item h3 {
          margin-bottom: 0;
        }

        .gcs-framework-intro {
          margin-bottom: 12px;
          color: var(--gcs-ink) !important;
          font-size: 17px !important;
          line-height: 1.62;
        }

        .gcs-framework-body,
        .gcs-framework-closing {
          line-height: 1.68;
        }

        .gcs-framework-body {
          margin-bottom: 20px;
        }

        .gcs-list-title {
          margin-bottom: 10px !important;
          color: var(--gcs-ink) !important;
          font-size: 14px !important;
          font-weight: 600 !important;
        }

        .gcs-framework-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 20px;
          margin: 0 0 22px;
          padding: 0;
          list-style: none;
        }

        .gcs-framework-list li {
          position: relative;
          padding-left: 16px;
          color: var(--gcs-copy);
          font-size: 14px;
          line-height: 1.5;
        }

        .gcs-framework-list li::before {
          position: absolute;
          top: 0.66em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gcs-accent);
          content: "";
        }

        .gcs-framework-closing {
          margin-bottom: 0;
          padding-top: 20px;
          border-top: 1px solid var(--gcs-line);
        }

        .gcs-framework-links {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          padding: 26px 34px 30px;
          border-top: 1px solid var(--gcs-line);
          background: #fbfbfc;
        }

        .gcs-arrow-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--gcs-accent-dark);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        }

        .gcs-arrow-link svg {
          transition: transform 180ms ease;
        }

        .gcs-arrow-link:hover {
          color: var(--gcs-accent);
        }

        .gcs-arrow-link:hover svg {
          transform: translateX(3px);
        }


        .gcs-models {
          background: #fff;
        }

        .gcs-models-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 76px;
          align-items: end;
          margin-bottom: 52px;
        }

        .gcs-models-intro h2,
        .gcs-prioritize-intro h2,
        .gcs-readiness-intro h2,
        .gcs-ai-intro h2 {
          margin-bottom: 0;
        }

        .gcs-models-intro-copy {
          max-width: 720px;
        }

        .gcs-models-intro-copy p {
          margin-bottom: 16px;
          line-height: 1.72;
        }

        .gcs-models-intro-copy p:first-child {
          color: var(--gcs-ink);
          font-size: 18px;
        }

        .gcs-models-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-model-spectrum {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
        }

        .gcs-model-spectrum-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 28px;
          border-bottom: 1px solid var(--gcs-line);
          background: #fbfbfc;
        }

        .gcs-model-spectrum-head span {
          color: var(--gcs-muted);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gcs-model-spectrum-line {
          position: relative;
          flex: 1;
          height: 1px;
          background: var(--gcs-line-strong);
        }

        .gcs-model-spectrum-line::after {
          position: absolute;
          top: 50%;
          right: 0;
          width: 8px;
          height: 8px;
          border-top: 1px solid var(--gcs-muted);
          border-right: 1px solid var(--gcs-muted);
          content: "";
          transform: translateY(-50%) rotate(45deg);
        }

        .gcs-model-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gcs-model-column {
          position: relative;
          min-width: 0;
          padding: 40px 34px 36px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-model-column:last-child {
          border-right: 0;
        }

        .gcs-model-column.is-featured {
          background: var(--gcs-blush);
        }

        .gcs-model-column.is-featured::before {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 3px;
          background: var(--gcs-accent);
          content: "";
        }

        .gcs-model-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .gcs-model-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: #f7f7f9;
          color: var(--gcs-accent-dark);
        }

        .gcs-model-column.is-featured .gcs-model-icon {
          background: #fff;
        }

        .gcs-model-column h3 {
          margin-bottom: 0;
          font-size: 22px;
        }

        .gcs-model-description {
          min-height: 104px;
          margin-bottom: 22px;
          line-height: 1.67;
        }

        .gcs-quiet-label {
          margin: 0 0 10px !important;
          color: var(--gcs-ink) !important;
          font-size: 13px !important;
          font-weight: 600 !important;
        }

        .gcs-compact-list {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gcs-compact-list li {
          position: relative;
          padding-left: 16px;
          color: var(--gcs-copy);
          font-size: 14px;
          line-height: 1.5;
        }

        .gcs-compact-list li::before {
          position: absolute;
          top: 0.68em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--gcs-accent);
          content: "";
        }

        .gcs-model-challenge {
          margin: 24px 0 0;
          padding-top: 22px;
          border-top: 1px solid var(--gcs-line);
          font-size: 14px !important;
          line-height: 1.62;
        }

        .gcs-model-fit {
          margin: 18px 0 0;
          color: var(--gcs-ink);
          font-size: 14px;
          font-weight: 600;
        }

        .gcs-hybrid-band {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 44px;
          align-items: center;
          padding: 38px 40px;
          border-top: 1px solid var(--gcs-line);
          background: #fbfbfc;
        }

        .gcs-hybrid-band h3 {
          margin-bottom: 12px;
        }

        .gcs-hybrid-band-copy p {
          margin-bottom: 0;
          line-height: 1.68;
        }

        .gcs-hybrid-responsibilities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--gcs-line);
          border-radius: 22px;
          background: #fff;
        }

        .gcs-hybrid-responsibility {
          padding: 24px;
        }

        .gcs-hybrid-responsibility + .gcs-hybrid-responsibility {
          border-left: 1px solid var(--gcs-line);
        }

        .gcs-hybrid-responsibility-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: var(--gcs-ink);
          font-size: 15px;
          font-weight: 600;
        }

        .gcs-hybrid-responsibility-head svg {
          color: var(--gcs-accent-dark);
        }

        .gcs-model-conclusion {
          max-width: 900px;
          margin: 34px auto 0;
          color: var(--gcs-ink) !important;
          font-size: 18px !important;
          line-height: 1.7;
          text-align: center;
        }

        .gcs-model-link {
          display: flex;
          justify-content: center;
          margin-top: 18px;
        }

        .gcs-prioritize {
          background: var(--gcs-soft);
        }

        .gcs-prioritize-intro,
        .gcs-readiness-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 72px;
          align-items: start;
          margin-bottom: 52px;
        }

        .gcs-prioritize-intro-copy,
        .gcs-readiness-intro-copy {
          max-width: 760px;
        }

        .gcs-prioritize-intro-copy p,
        .gcs-readiness-intro-copy p {
          margin-bottom: 16px;
          line-height: 1.72;
        }

        .gcs-prioritize-intro-copy p:first-child,
        .gcs-readiness-intro-copy p:first-child {
          color: var(--gcs-ink);
          font-size: 18px;
        }

        .gcs-prioritize-intro-copy p:last-child,
        .gcs-readiness-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-priority-panel {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
        }

        .gcs-priority-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gcs-priority-item {
          min-width: 0;
          padding: 38px 32px 36px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-priority-item:last-child {
          border-right: 0;
        }

        .gcs-priority-title-row {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 16px;
        }

        .gcs-priority-title-row span {
          display: inline-flex;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-priority-item h3 {
          margin-bottom: 0;
          font-size: 22px;
        }

        .gcs-priority-item > p {
          line-height: 1.67;
        }

        .gcs-priority-item .gcs-compact-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px 16px;
          margin: 20px 0 22px;
        }

        .gcs-priority-closing {
          margin-bottom: 0;
          padding-top: 20px;
          border-top: 1px solid var(--gcs-line);
        }

        .gcs-portfolio {
          border-top: 1px solid var(--gcs-line);
        }

        .gcs-portfolio-head {
          display: grid;
          grid-template-columns: minmax(0, 0.55fr) minmax(0, 1.45fr);
          gap: 48px;
          align-items: center;
          padding: 34px 36px;
          background: #fbfbfc;
        }

        .gcs-portfolio-head h3 {
          margin-bottom: 0;
        }

        .gcs-portfolio-head p {
          margin-bottom: 0;
          line-height: 1.68;
        }

        .gcs-portfolio-table {
          border-top: 3px solid var(--gcs-accent);
        }

        .gcs-portfolio-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.65fr) minmax(0, 1.15fr) minmax(0, 1.2fr);
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-portfolio-row:last-child {
          border-bottom: 0;
        }

        .gcs-portfolio-row.is-header {
          background: #f6f6f8;
        }

        .gcs-portfolio-cell {
          min-width: 0;
          padding: 20px 24px;
          border-right: 1px solid var(--gcs-line);
          color: var(--gcs-copy);
          font-size: 15px;
          line-height: 1.58;
        }

        .gcs-portfolio-cell:last-child {
          border-right: 0;
        }

        .gcs-portfolio-row.is-header .gcs-portfolio-cell {
          color: var(--gcs-muted);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .gcs-portfolio-decision {
          color: var(--gcs-ink);
          font-weight: 600;
        }

        .gcs-portfolio-mobile-label {
          display: none;
        }

        .gcs-priority-note {
          margin: 30px auto 0;
          max-width: 820px;
          color: var(--gcs-ink) !important;
          font-size: 18px !important;
          line-height: 1.7;
          text-align: center;
        }

        .gcs-readiness {
          background: #fff;
        }

        .gcs-readiness-system {
          overflow: hidden;
          border-top: 1px solid var(--gcs-line-strong);
          border-bottom: 1px solid var(--gcs-line-strong);
        }

        .gcs-readiness-row {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 56px;
          padding: 38px 0;
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-readiness-row:last-child {
          border-bottom: 0;
        }

        .gcs-readiness-title {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 16px;
          align-items: start;
        }

        .gcs-readiness-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-readiness-title h3 {
          margin: 7px 0 0;
        }

        .gcs-readiness-content p {
          margin-bottom: 16px;
          line-height: 1.7;
        }

        .gcs-readiness-content .gcs-compact-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 24px;
          margin: 4px 0 18px;
        }

        .gcs-readiness-content p:last-child {
          margin-bottom: 0;
        }

        .gcs-readiness-links {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          margin-top: 34px;
        }

        .gcs-ai-strategy {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #17131a;
          color: #fff;
        }

        .gcs-ai-strategy::before {
          position: absolute;
          z-index: -1;
          top: -220px;
          right: -150px;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.12), transparent 67%);
          content: "";
        }

        .gcs-ai-strategy .gcs-eyebrow {
          color: #f08bb4;
        }

        .gcs-ai-strategy h2,
        .gcs-ai-strategy h3 {
          color: #fff;
        }

        .gcs-ai-strategy p,
        .gcs-ai-strategy li {
          color: #cdd0d7;
        }

        .gcs-ai-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 76px;
          align-items: start;
          margin-bottom: 56px;
        }

        .gcs-ai-intro-copy {
          max-width: 760px;
        }

        .gcs-ai-intro-copy p {
          margin-bottom: 16px;
          line-height: 1.72;
        }

        .gcs-ai-intro-copy p:first-child {
          color: #fff;
          font-size: 18px;
        }

        .gcs-ai-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-ai-system {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .gcs-ai-row {
          display: grid;
          grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
          gap: 56px;
          padding: 38px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .gcs-ai-row:last-child {
          border-bottom: 0;
        }

        .gcs-ai-title {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 16px;
          align-items: start;
        }

        .gcs-ai-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(240, 139, 180, 0.25);
          border-radius: 16px;
          background: rgba(193, 29, 99, 0.12);
          color: #f08bb4;
        }

        .gcs-ai-title h3 {
          margin: 7px 0 0;
        }

        .gcs-ai-content p {
          margin-bottom: 16px;
          line-height: 1.72;
        }

        .gcs-ai-content .gcs-compact-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 24px;
          margin: 2px 0 18px;
        }

        .gcs-ai-content .gcs-compact-list li {
          color: #cdd0d7;
        }

        .gcs-ai-content .gcs-compact-list li::before {
          background: #f08bb4;
        }

        .gcs-ai-content p:last-child {
          margin-bottom: 0;
        }

        .gcs-ai-links {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 34px;
        }

        .gcs-ai-links .gcs-arrow-link {
          color: #f3a4c4;
        }

        .gcs-ai-links .gcs-arrow-link:hover {
          color: #fff;
        }


        .gcs-risk-governance {
          background: #fff;
        }

        .gcs-risk-intro,
        .gcs-performance-intro,
        .gcs-maturity-intro,
        .gcs-topics-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 76px;
          align-items: start;
          margin-bottom: 52px;
        }

        .gcs-risk-intro-copy,
        .gcs-performance-intro-copy,
        .gcs-maturity-intro-copy,
        .gcs-topics-intro-copy {
          max-width: 760px;
        }

        .gcs-risk-intro-copy p,
        .gcs-performance-intro-copy p,
        .gcs-maturity-intro-copy p,
        .gcs-topics-intro-copy p {
          margin-bottom: 16px;
          line-height: 1.72;
        }

        .gcs-risk-intro-copy p:first-child,
        .gcs-performance-intro-copy p:first-child,
        .gcs-maturity-intro-copy p:first-child,
        .gcs-topics-intro-copy p:first-child {
          color: var(--gcs-ink);
          font-size: 18px;
        }

        .gcs-risk-intro-copy p:last-child,
        .gcs-performance-intro-copy p:last-child,
        .gcs-maturity-intro-copy p:last-child,
        .gcs-topics-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-risk-matrix {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 18px 44px rgba(17, 24, 39, 0.055);
        }

        .gcs-risk-row {
          display: grid;
          grid-template-columns: minmax(150px, 0.42fr) minmax(0, 0.92fr) minmax(0, 1.16fr);
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-risk-row:last-child {
          border-bottom: 0;
        }

        .gcs-risk-row.is-header {
          background: var(--gcs-blush);
        }

        .gcs-risk-cell {
          min-width: 0;
          padding: 22px 26px;
          border-right: 1px solid var(--gcs-line);
          color: var(--gcs-copy);
          font-size: 15px;
          line-height: 1.58;
        }

        .gcs-risk-cell:last-child {
          border-right: 0;
        }

        .gcs-risk-row.is-header .gcs-risk-cell {
          color: var(--gcs-muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gcs-risk-tier {
          color: var(--gcs-ink);
          font-weight: 600;
        }

        .gcs-risk-mobile-label {
          display: none;
        }

        .gcs-governance-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 48px;
          border-top: 1px solid var(--gcs-line);
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-governance-principle {
          padding: 34px 34px 36px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-governance-principle:last-child {
          border-right: 0;
        }

        .gcs-governance-title {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          margin-bottom: 18px;
        }

        .gcs-governance-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-governance-title h3 {
          margin-bottom: 0;
          font-size: 21px;
        }

        .gcs-governance-principle p {
          margin-bottom: 14px;
          line-height: 1.68;
        }

        .gcs-governance-principle p:last-child {
          margin-bottom: 0;
          color: var(--gcs-ink);
        }

        .gcs-risk-links,
        .gcs-performance-links,
        .gcs-topics-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 30px;
        }

        .gcs-performance {
          background: var(--gcs-soft);
        }

        .gcs-performance-system {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 22px 50px rgba(17, 24, 39, 0.055);
        }

        .gcs-performance-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .gcs-performance-item {
          min-width: 0;
          padding: 36px 28px 34px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-performance-item:last-child {
          border-right: 0;
        }

        .gcs-performance-title {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 13px;
          align-items: center;
          margin-bottom: 18px;
        }

        .gcs-performance-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: #f6f6f8;
          color: var(--gcs-accent-dark);
        }

        .gcs-performance-title h3 {
          margin-bottom: 0;
          font-size: 20px;
        }

        .gcs-performance-item > p {
          margin-bottom: 18px;
          line-height: 1.65;
        }

        .gcs-performance-item .gcs-compact-list {
          grid-template-columns: 1fr;
          gap: 8px;
          margin-bottom: 20px;
        }

        .gcs-performance-item .gcs-compact-list li {
          font-size: 14px;
        }

        .gcs-performance-item .gcs-performance-closing {
          margin-bottom: 0;
          padding-top: 18px;
          border-top: 1px solid var(--gcs-line);
          color: var(--gcs-ink);
          font-size: 14px;
        }

        .gcs-improvement-band {
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr);
          gap: 20px;
          align-items: start;
          padding: 30px 34px 32px;
          border-top: 1px solid var(--gcs-line);
          background: linear-gradient(90deg, #fff 0%, var(--gcs-blush) 100%);
        }

        .gcs-improvement-icon {
          display: inline-flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(193, 29, 99, 0.15);
          border-radius: 18px;
          background: #fff;
          color: var(--gcs-accent-dark);
        }

        .gcs-improvement-band h3 {
          margin-bottom: 8px;
          font-size: 22px;
        }

        .gcs-improvement-band p {
          max-width: 930px;
          margin-bottom: 0;
          line-height: 1.68;
        }

        .gcs-maturity {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #18171c;
        }

        .gcs-maturity::before {
          position: absolute;
          z-index: -1;
          top: -240px;
          right: -160px;
          width: 620px;
          height: 620px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.095), transparent 67%);
          content: "";
        }

        .gcs-maturity .gcs-eyebrow {
          color: #f08bb4;
        }

        .gcs-maturity h2,
        .gcs-maturity h3 {
          color: #fff;
        }

        .gcs-maturity p,
        .gcs-maturity li {
          color: #cdd0d7;
        }

        .gcs-maturity-intro-copy p:first-child {
          color: #fff;
        }

        .gcs-maturity-rail {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .gcs-maturity-stage {
          position: relative;
          min-width: 0;
          padding: 34px 26px 36px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }

        .gcs-maturity-stage:last-child {
          border-right: 0;
        }

        .gcs-stage-marker {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border: 1px solid rgba(240, 139, 180, 0.32);
          border-radius: 50%;
          background: rgba(193, 29, 99, 0.12);
          color: #f3a4c4;
          font-size: 14px;
          font-weight: 600;
        }

        .gcs-maturity-stage h3 {
          margin-bottom: 12px;
          font-size: 21px;
        }

        .gcs-maturity-stage > p {
          margin-bottom: 18px;
          font-size: 15px;
          line-height: 1.65;
        }

        .gcs-maturity-stage .gcs-compact-list {
          grid-template-columns: 1fr;
          gap: 7px;
          margin-bottom: 22px;
        }

        .gcs-maturity-stage .gcs-compact-list li {
          color: #cdd0d7;
          font-size: 13px;
        }

        .gcs-maturity-stage .gcs-compact-list li::before {
          background: #f08bb4;
        }

        .gcs-stage-priority {
          margin-bottom: 0 !important;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .gcs-stage-priority span {
          display: block;
          margin-bottom: 5px;
          color: #f3a4c4;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gcs-maturity-note {
          max-width: 930px;
          margin: 30px 0 0;
          color: #fff !important;
          font-size: 17px !important;
          line-height: 1.7;
        }

        .gcs-topics {
          background: #fff;
        }

        .gcs-topic-system {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          overflow: hidden;
          border-top: 1px solid var(--gcs-line-strong);
          border-bottom: 1px solid var(--gcs-line-strong);
        }

        .gcs-topic-group {
          min-width: 0;
          padding: 34px 28px 38px;
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-topic-group:last-child {
          border-right: 0;
        }

        .gcs-topic-group-head {
          margin-bottom: 26px;
        }

        .gcs-topic-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 16px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-topic-group h3 {
          margin-bottom: 10px;
          font-size: 21px;
        }

        .gcs-topic-group-head p {
          margin-bottom: 0;
          font-size: 15px;
          line-height: 1.62;
        }

        .gcs-topic-links {
          border-top: 1px solid var(--gcs-line);
        }

        .gcs-topic-link {
          display: block;
          min-height: 44px;
          padding: 18px 0 20px;
          border-bottom: 1px solid var(--gcs-line);
          color: inherit;
          text-decoration: none;
        }

        .gcs-topic-link:last-child {
          border-bottom: 0;
        }

        .gcs-topic-link-title {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 7px;
          color: var(--gcs-accent-dark);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .gcs-topic-link-title svg {
          flex: 0 0 auto;
          margin-top: 2px;
          transition: transform 180ms ease;
        }

        .gcs-topic-link p {
          margin-bottom: 0;
          color: var(--gcs-copy);
          font-size: 13px;
          line-height: 1.55;
        }

        .gcs-topic-link:hover .gcs-topic-link-title {
          color: var(--gcs-accent);
        }

        .gcs-topic-link:hover .gcs-topic-link-title svg {
          transform: translateX(3px);
        }

        .gcs-topic-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.2);
          outline-offset: 4px;
        }



        @media (max-width: 1180px) {
          .gcs-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .gcs-challenge-grid {
            gap: 56px;
          }

          .gcs-strategy-visual {
            max-width: 100%;
          }

          .gcs-framework-item {
            padding: 36px 32px;
          }
        }

        @media (max-width: 980px) {
          .gcs-page h1 {
            font-size: 42px;
          }

          .gcs-page h2 {
            font-size: 32px;
          }

          .gcs-challenge-grid {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .gcs-challenge-copy {
            max-width: 780px;
          }

          .gcs-strategy-stage {
            padding-left: 24px;
            padding-right: 24px;
          }

          .gcs-framework-grid {
            grid-template-columns: 1fr;
          }

          .gcs-framework-item,
          .gcs-framework-item:nth-child(odd),
          .gcs-framework-item:nth-last-child(-n + 2) {
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-framework-item:last-child {
            border-bottom: 0;
          }
        }

        @media (max-width: 768px) {
          .gcs-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .gcs-hero {
            padding: 88px 0 76px;
          }

          .gcs-section {
            padding: 72px 0;
          }

          .gcs-strategy-visual {
            margin-top: 48px;
          }

          .gcs-strategy-visual-head {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
            padding: 18px 24px;
          }

          .gcs-strategy-flow {
            grid-template-columns: 1fr;
          }

          .gcs-strategy-stage {
            padding: 26px 24px 28px;
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-strategy-stage:last-child {
            border-bottom: 0;
          }

          .gcs-question-row {
            grid-template-columns: 44px minmax(0, 1fr);
          }

          .gcs-question-label {
            grid-column: 2;
          }

          .gcs-question-text {
            grid-column: 2;
          }

          .gcs-question-icon {
            grid-row: 1 / span 2;
          }

          .gcs-framework-banner {
            grid-template-columns: 1fr;
          }

          .gcs-framework-badge {
            width: fit-content;
          }
        }

        @media (max-width: 520px) {
          .gcs-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .gcs-page h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .gcs-page h2 {
            font-size: 30px;
            line-height: 1.18;
          }

          .gcs-page h3 {
            font-size: 20px;
          }

          .gcs-hero {
            padding: 72px 0 66px;
          }

          .gcs-hero-lede {
            font-size: 18px !important;
          }

          .gcs-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .gcs-button {
            width: 100%;
            min-height: 50px;
          }

          .gcs-strategy-visual {
            border-radius: 24px;
          }

          .gcs-strategy-visual-head {
            padding-left: 20px;
            padding-right: 20px;
          }

          .gcs-strategy-stage {
            padding: 24px 20px 26px;
          }

          .gcs-strategy-stage-head {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 13px;
          }

          .gcs-strategy-stage-icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
          }

          .gcs-section {
            padding: 64px 0;
          }

          .gcs-question-panel {
            border-radius: 24px;
          }

          .gcs-question-panel-head,
          .gcs-question-footer {
            padding-left: 22px;
            padding-right: 22px;
          }

          .gcs-question-row {
            padding: 18px 22px;
          }

          .gcs-framework-shell {
            border-radius: 24px;
          }

          .gcs-framework-banner {
            padding: 26px 22px;
          }

          .gcs-framework-item {
            padding: 32px 22px;
          }

          .gcs-framework-title-row {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 14px;
          }

          .gcs-framework-icon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
          }

          .gcs-framework-list {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .gcs-framework-links {
            flex-direction: column;
            gap: 8px;
            padding: 20px 22px 24px;
          }

          .gcs-arrow-link {
            width: 100%;
            justify-content: space-between;
          }
        }


        @media (max-width: 1180px) {
          .gcs-models-intro,
          .gcs-prioritize-intro,
          .gcs-readiness-intro,
          .gcs-ai-intro {
            gap: 52px;
          }

          .gcs-model-column,
          .gcs-priority-item {
            padding-left: 28px;
            padding-right: 28px;
          }

          .gcs-hybrid-band {
            gap: 34px;
            padding-left: 32px;
            padding-right: 32px;
          }

          .gcs-readiness-row,
          .gcs-ai-row {
            gap: 40px;
          }
        }

        @media (max-width: 980px) {
          .gcs-models-intro,
          .gcs-prioritize-intro,
          .gcs-readiness-intro,
          .gcs-ai-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .gcs-model-grid,
          .gcs-priority-grid {
            grid-template-columns: 1fr;
          }

          .gcs-model-column,
          .gcs-priority-item {
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-model-column:last-child,
          .gcs-priority-item:last-child {
            border-bottom: 0;
          }

          .gcs-model-description {
            min-height: 0;
          }

          .gcs-hybrid-band {
            grid-template-columns: 1fr;
          }

          .gcs-portfolio-head {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .gcs-readiness-row,
          .gcs-ai-row {
            grid-template-columns: minmax(220px, 0.72fr) minmax(0, 1.28fr);
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .gcs-model-spectrum-head {
            padding-left: 22px;
            padding-right: 22px;
          }

          .gcs-model-column,
          .gcs-priority-item {
            padding: 32px 24px;
          }

          .gcs-hybrid-band {
            padding: 30px 24px;
          }

          .gcs-hybrid-responsibilities {
            grid-template-columns: 1fr;
          }

          .gcs-hybrid-responsibility + .gcs-hybrid-responsibility {
            border-top: 1px solid var(--gcs-line);
            border-left: 0;
          }

          .gcs-priority-item .gcs-compact-list,
          .gcs-readiness-content .gcs-compact-list,
          .gcs-ai-content .gcs-compact-list {
            grid-template-columns: 1fr;
          }

          .gcs-portfolio-row {
            grid-template-columns: 1fr;
            padding: 4px 0;
          }

          .gcs-portfolio-row.is-header {
            display: none;
          }

          .gcs-portfolio-cell {
            padding: 12px 22px;
            border-right: 0;
          }

          .gcs-portfolio-cell + .gcs-portfolio-cell {
            border-top: 0;
          }

          .gcs-portfolio-mobile-label {
            display: block;
            margin-bottom: 4px;
            color: var(--gcs-muted);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .gcs-readiness-row,
          .gcs-ai-row {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 32px 0;
          }

          .gcs-readiness-links,
          .gcs-ai-links {
            flex-direction: column;
            gap: 8px;
          }

          .gcs-readiness-links .gcs-arrow-link,
          .gcs-ai-links .gcs-arrow-link {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 520px) {
          .gcs-model-spectrum,
          .gcs-priority-panel {
            border-radius: 24px;
          }

          .gcs-model-spectrum-head {
            gap: 14px;
          }

          .gcs-model-spectrum-head span {
            font-size: 10px;
          }

          .gcs-model-title-row,
          .gcs-priority-title-row {
            align-items: flex-start;
          }

          .gcs-model-icon,
          .gcs-priority-title-row span {
            width: 40px;
            height: 40px;
          }

          .gcs-portfolio-head {
            padding: 28px 22px;
          }

          .gcs-readiness-title,
          .gcs-ai-title {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 14px;
          }

          .gcs-readiness-icon,
          .gcs-ai-icon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
          }
        }


        @media (max-width: 1180px) {
          .gcs-risk-intro,
          .gcs-performance-intro,
          .gcs-maturity-intro,
          .gcs-topics-intro {
            gap: 52px;
          }

          .gcs-governance-principle {
            padding-left: 26px;
            padding-right: 26px;
          }

          .gcs-performance-grid,
          .gcs-topic-system {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gcs-performance-item:nth-child(2),
          .gcs-topic-group:nth-child(2) {
            border-right: 0;
          }

          .gcs-performance-item:nth-child(-n + 2),
          .gcs-topic-group:nth-child(-n + 2) {
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-maturity-rail {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .gcs-maturity-stage:nth-child(3) {
            border-right: 0;
          }

          .gcs-maturity-stage:nth-child(-n + 3) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
        }

        @media (max-width: 980px) {
          .gcs-risk-intro,
          .gcs-performance-intro,
          .gcs-maturity-intro,
          .gcs-topics-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .gcs-governance-principles {
            grid-template-columns: 1fr;
          }

          .gcs-governance-principle {
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-governance-principle:last-child {
            border-bottom: 0;
          }

          .gcs-maturity-rail {
            grid-template-columns: 1fr;
          }

          .gcs-maturity-stage,
          .gcs-maturity-stage:nth-child(3) {
            display: grid;
            grid-template-columns: 52px minmax(150px, 0.46fr) minmax(0, 1fr);
            gap: 22px;
            align-items: start;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .gcs-maturity-stage:last-child {
            border-bottom: 0;
          }

          .gcs-stage-marker {
            margin-bottom: 0;
          }

          .gcs-maturity-stage h3 {
            margin-top: 7px;
          }

          .gcs-maturity-stage > p,
          .gcs-maturity-stage .gcs-compact-list,
          .gcs-stage-priority {
            grid-column: 3;
          }

          .gcs-maturity-stage > p {
            margin-bottom: 14px;
          }
        }

        @media (max-width: 768px) {
          .gcs-risk-row {
            grid-template-columns: 1fr;
            padding: 5px 0;
          }

          .gcs-risk-row.is-header {
            display: none;
          }

          .gcs-risk-cell {
            padding: 11px 22px;
            border-right: 0;
          }

          .gcs-risk-cell + .gcs-risk-cell {
            border-top: 0;
          }

          .gcs-risk-cell:first-child {
            padding-top: 18px;
          }

          .gcs-risk-cell:last-child {
            padding-bottom: 18px;
          }

          .gcs-risk-mobile-label {
            display: block;
            margin-bottom: 4px;
            color: var(--gcs-muted);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .gcs-performance-grid,
          .gcs-topic-system {
            grid-template-columns: 1fr;
          }

          .gcs-performance-item,
          .gcs-performance-item:nth-child(2),
          .gcs-topic-group,
          .gcs-topic-group:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-performance-item:last-child,
          .gcs-topic-group:last-child {
            border-bottom: 0;
          }

          .gcs-improvement-band {
            grid-template-columns: 50px minmax(0, 1fr);
            padding-left: 24px;
            padding-right: 24px;
          }

          .gcs-improvement-icon {
            width: 50px;
            height: 50px;
          }

          .gcs-maturity-stage,
          .gcs-maturity-stage:nth-child(3) {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            padding: 30px 0;
          }

          .gcs-maturity-stage h3 {
            grid-column: 2;
          }

          .gcs-maturity-stage > p,
          .gcs-maturity-stage .gcs-compact-list,
          .gcs-stage-priority {
            grid-column: 2;
          }

          .gcs-risk-links,
          .gcs-performance-links,
          .gcs-topics-footer {
            flex-direction: column;
            gap: 8px;
          }

          .gcs-risk-links .gcs-arrow-link,
          .gcs-performance-links .gcs-arrow-link,
          .gcs-topics-footer .gcs-arrow-link {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 520px) {
          .gcs-risk-matrix,
          .gcs-performance-system {
            border-radius: 24px;
          }

          .gcs-governance-principle,
          .gcs-performance-item,
          .gcs-topic-group {
            padding-left: 22px;
            padding-right: 22px;
          }

          .gcs-governance-title,
          .gcs-performance-title {
            grid-template-columns: 42px minmax(0, 1fr);
          }

          .gcs-governance-icon,
          .gcs-performance-icon {
            width: 42px;
            height: 42px;
          }

          .gcs-improvement-band {
            grid-template-columns: 1fr;
            padding: 26px 22px 28px;
          }

          .gcs-maturity-stage,
          .gcs-maturity-stage:nth-child(3) {
            padding: 28px 0;
          }

          .gcs-maturity-stage > p,
          .gcs-maturity-stage .gcs-compact-list,
          .gcs-stage-priority {
            grid-column: 1 / -1;
          }

          .gcs-topic-group {
            padding-top: 30px;
            padding-bottom: 32px;
          }
        }



        .gcs-operations {
          background: #fff;
        }

        .gcs-operations-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 84px;
          align-items: start;
          margin-bottom: 52px;
        }

        .gcs-operations-intro-copy {
          max-width: 720px;
        }

        .gcs-operations-intro-copy p {
          margin-bottom: 18px;
          line-height: 1.72;
        }

        .gcs-operations-intro-copy p:first-child {
          color: var(--gcs-ink);
          font-size: 18px;
        }

        .gcs-operations-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-operations-system {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 22px 54px rgba(17, 24, 39, 0.06);
        }

        .gcs-operations-flow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1.2fr) 44px minmax(0, 1fr);
          align-items: center;
          padding: 30px 34px;
          border-bottom: 1px solid var(--gcs-line);
          background: linear-gradient(90deg, #fff 0%, #fff 42%, var(--gcs-blush) 100%);
        }

        .gcs-flow-stage {
          min-width: 0;
        }

        .gcs-flow-stage span {
          display: block;
          margin-bottom: 5px;
          color: var(--gcs-muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .gcs-flow-stage strong {
          display: block;
          color: var(--gcs-ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .gcs-flow-stage.is-center strong {
          color: var(--gcs-accent-deep);
        }

        .gcs-flow-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--gcs-accent-dark);
        }

        .gcs-operations-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gcs-operation-item {
          min-width: 0;
          padding: 36px 38px 34px;
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-operation-item:nth-child(odd) {
          border-right: 1px solid var(--gcs-line);
        }

        .gcs-operation-item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .gcs-operation-title {
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          gap: 15px;
          align-items: center;
          margin-bottom: 16px;
        }

        .gcs-operation-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: var(--gcs-blush);
          color: var(--gcs-accent-dark);
        }

        .gcs-operation-title h3 {
          margin-bottom: 0;
          font-size: 21px;
        }

        .gcs-operation-item p {
          margin-bottom: 12px;
          line-height: 1.68;
        }

        .gcs-operation-item p:last-child {
          margin-bottom: 0;
        }

        .gcs-operation-closing {
          color: var(--gcs-ink) !important;
        }

        .gcs-operations-links {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          padding: 24px 34px 28px;
          border-top: 1px solid var(--gcs-line);
          background: #fbfbfc;
        }

        .gcs-faq {
          background: var(--gcs-soft);
        }

        .gcs-faq-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 84px;
          align-items: start;
          margin-bottom: 48px;
        }

        .gcs-faq-intro-copy {
          max-width: 720px;
        }

        .gcs-faq-intro-copy p {
          margin-bottom: 18px;
          line-height: 1.72;
        }

        .gcs-faq-intro-copy p:first-child {
          color: var(--gcs-ink);
          font-size: 18px;
        }

        .gcs-faq-intro-copy p:last-child {
          margin-bottom: 0;
        }

        .gcs-faq-panel {
          overflow: hidden;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 20px 48px rgba(17, 24, 39, 0.055);
        }

        .gcs-faq-item {
          border-bottom: 1px solid var(--gcs-line);
        }

        .gcs-faq-item:last-child {
          border-bottom: 0;
        }

        .gcs-faq-item > h3 {
          margin: 0;
        }

        .gcs-faq-question {
          display: grid;
          width: 100%;
          min-height: 76px;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 24px;
          align-items: center;
          padding: 22px 30px;
          border: 0;
          background: #fff;
          color: var(--gcs-ink);
          cursor: pointer;
          font-family: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          text-align: left;
          transition: background 180ms ease;
        }

        .gcs-faq-question:hover {
          background: #fcfbfc;
        }

        .gcs-faq-question:focus-visible {
          position: relative;
          z-index: 2;
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: -3px;
        }

        .gcs-faq-toggle {
          position: relative;
          display: inline-flex;
          width: 32px;
          height: 32px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gcs-line-strong);
          border-radius: 50%;
          color: var(--gcs-accent-dark);
        }

        .gcs-faq-toggle::before,
        .gcs-faq-toggle::after {
          position: absolute;
          width: 12px;
          height: 1.5px;
          background: currentColor;
          content: "";
          transition: transform 180ms ease;
        }

        .gcs-faq-toggle::after {
          transform: rotate(90deg);
        }

        .gcs-faq-question[aria-expanded="true"] {
          background: var(--gcs-blush);
        }

        .gcs-faq-question[aria-expanded="true"] .gcs-faq-toggle::after {
          transform: rotate(0deg);
        }

        .gcs-faq-answer {
          padding: 0 84px 26px 30px;
          background: var(--gcs-blush);
        }

        .gcs-faq-answer p {
          max-width: 840px;
          margin-bottom: 0;
          color: var(--gcs-copy);
          line-height: 1.72;
        }

        .gcs-final-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 96px 0;
          background:
            radial-gradient(circle at 87% 20%, rgba(193, 29, 99, 0.12), transparent 28%),
            linear-gradient(135deg, #fff 0%, #fdf2f7 58%, #fbf3f7 100%);
        }

        .gcs-final-cta::before {
          position: absolute;
          z-index: -1;
          top: -210px;
          right: -120px;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.1), transparent 68%);
          content: "";
        }

        .gcs-final-cta-inner {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 72px;
          align-items: center;
        }

        .gcs-final-cta-copy {
          max-width: 760px;
        }

        .gcs-final-cta h2 {
          max-width: 720px;
          margin-bottom: 22px;
          font-size: 40px;
        }

        .gcs-final-cta-copy > p:not(.gcs-eyebrow) {
          max-width: 720px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.72;
        }

        .gcs-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .gcs-final-cta-visual {
          position: relative;
          min-height: 310px;
        }

        .gcs-cta-core {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          width: 160px;
          height: 160px;
          align-items: center;
          justify-content: center;
          padding: 24px;
          border: 1px solid rgba(193, 29, 99, 0.2);
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 22px 48px rgba(122, 21, 66, 0.12);
          color: var(--gcs-accent-deep);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.3;
          text-align: center;
          transform: translate(-50%, -50%);
        }

        .gcs-cta-node {
          position: absolute;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          box-shadow: 0 10px 24px rgba(17, 24, 39, 0.05);
          color: var(--gcs-ink);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }

        .gcs-cta-node svg {
          color: var(--gcs-accent-dark);
        }

        .gcs-cta-node.is-1 {
          top: 8%;
          left: 2%;
        }

        .gcs-cta-node.is-2 {
          top: 8%;
          right: 2%;
        }

        .gcs-cta-node.is-3 {
          right: 0;
          bottom: 10%;
        }

        .gcs-cta-node.is-4 {
          bottom: 10%;
          left: 0;
        }

        @media (max-width: 1180px) {
          .gcs-operations-intro,
          .gcs-faq-intro {
            gap: 52px;
          }

          .gcs-final-cta-inner {
            gap: 48px;
          }

          .gcs-final-cta-visual {
            min-height: 280px;
          }
        }

        @media (max-width: 980px) {
          .gcs-operations-intro,
          .gcs-faq-intro,
          .gcs-final-cta-inner {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .gcs-final-cta-copy {
            max-width: 820px;
          }

          .gcs-final-cta-visual {
            width: min(100%, 620px);
            margin: 16px auto 0;
          }
        }

        @media (max-width: 768px) {
          .gcs-operations-flow {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 26px 24px;
          }

          .gcs-flow-arrow {
            min-height: 22px;
            justify-content: center;
            transform: rotate(90deg);
          }

          .gcs-operations-grid {
            grid-template-columns: 1fr;
          }

          .gcs-operation-item,
          .gcs-operation-item:nth-child(odd),
          .gcs-operation-item:nth-last-child(-n + 2) {
            border-right: 0;
            border-bottom: 1px solid var(--gcs-line);
          }

          .gcs-operation-item:last-child {
            border-bottom: 0;
          }

          .gcs-operations-links {
            flex-direction: column;
            gap: 8px;
          }

          .gcs-operations-links .gcs-arrow-link {
            width: 100%;
            justify-content: space-between;
          }

          .gcs-faq-question {
            min-height: 72px;
            gap: 18px;
            padding: 20px 24px;
            font-size: 17px;
          }

          .gcs-faq-answer {
            padding: 0 66px 24px 24px;
          }

          .gcs-final-cta {
            padding: 72px 0;
          }

          .gcs-final-cta h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 520px) {
          .gcs-operations-system,
          .gcs-faq-panel {
            border-radius: 24px;
          }

          .gcs-operation-item {
            padding: 30px 22px;
          }

          .gcs-operation-title {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 13px;
          }

          .gcs-operation-icon {
            width: 42px;
            height: 42px;
            border-radius: 14px;
          }

          .gcs-operations-links {
            padding: 20px 22px 24px;
          }

          .gcs-faq-question {
            grid-template-columns: minmax(0, 1fr) 30px;
            gap: 14px;
            padding: 19px 20px;
            font-size: 16px;
          }

          .gcs-faq-toggle {
            width: 30px;
            height: 30px;
          }

          .gcs-faq-answer {
            padding: 0 20px 22px;
          }

          .gcs-final-cta {
            padding: 64px 0;
          }

          .gcs-final-cta h2 {
            font-size: 30px;
          }

          .gcs-final-cta-actions {
            flex-direction: column;
          }

          .gcs-final-cta-actions .gcs-button {
            width: 100%;
          }

          .gcs-final-cta-visual {
            display: grid;
            min-height: auto;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 12px;
          }

          .gcs-cta-core,
          .gcs-cta-node {
            position: static;
            width: 100%;
            height: auto;
            min-height: 54px;
            justify-content: flex-start;
            border-radius: 18px;
            transform: none;
            white-space: normal;
          }

          .gcs-cta-core {
            padding: 18px;
            color: var(--gcs-accent-deep);
          }
        }

        @media (max-width: 340px) {
          .gcs-page h1 {
            font-size: 36px;
          }

          .gcs-question-row {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 12px;
          }

          .gcs-question-icon {
            width: 38px;
            height: 38px;
          }
        }
      `}</style>

      <section className="gcs-hero" aria-labelledby="global-content-strategy-title">
        <div className="gcs-shell">
          <div className="gcs-hero-copy">
            <h1 id="global-content-strategy-title">
              Build a Global Content Strategy That Scales
            </h1>
            <p className="gcs-hero-lede">
              Create a clear framework for planning, governing, producing, and measuring
              multilingual content across markets, teams, and channels.
            </p>
            <p className="gcs-hero-lede">
              Explore practical guidance on market and language prioritization, global content
              governance, localization operating models, AI-enabled workflows, quality
              management, and business performance.
            </p>

            <div className="gcs-hero-actions" aria-label="Global content strategy actions">
              <a
                className="gcs-button gcs-button-primary"
                href={`${PAGE_URL}#strategy-framework`}
              >
                Explore the Strategy Framework
                <Icon name="arrow" size={17} />
              </a>
              <a
                className="gcs-button gcs-button-secondary"
                href="https://www.stepes.com/solutions/global-content-operations/"
              >
                Explore Global Content Operations
              </a>
            </div>
          </div>

          <div className="gcs-strategy-visual" aria-label="A connected enterprise global content strategy system">
            <div className="gcs-strategy-visual-head">
              <span className="gcs-strategy-visual-label">A Connected Enterprise System</span>
              <span className="gcs-strategy-visual-note">Strategy → operations → improvement</span>
            </div>

            <div className="gcs-strategy-flow">
              {heroStrategyStages.map((stage) => (
                <article className="gcs-strategy-stage" key={stage.label}>
                  <div className="gcs-strategy-stage-head">
                    <span className="gcs-strategy-stage-icon">
                      <Icon name={stage.icon} size={21} />
                    </span>
                    <div>
                      <span className="gcs-strategy-stage-label">{stage.label}</span>
                      <h3>{stage.title}</h3>
                    </div>
                  </div>
                  <ul className="gcs-strategy-stage-list">
                    {stage.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gcs-section gcs-challenge" aria-labelledby="global-growth-title">
        <div className="gcs-shell">
          <div className="gcs-challenge-grid">
            <div className="gcs-challenge-copy">
              <p className="gcs-eyebrow">Why Strategy Matters</p>
              <h2 id="global-growth-title">Global Growth Requires More Than Translation</h2>
              <p className="gcs-section-lede">
                Reaching international audiences requires more than translating content after it
                has already been created.
              </p>
              <p>
                Global companies must decide which markets to support, which experiences to
                localize, how global and regional teams should work together, and where
                technology, AI, and professional expertise belong. They must also maintain brand
                consistency, meet local requirements, control costs, and measure whether
                multilingual content is contributing to business objectives.
              </p>
              <p>
                Without a shared global content strategy, localization often becomes fragmented.
                Individual departments select their own vendors, regional teams develop parallel
                processes, terminology varies across channels, and valuable content is repeatedly
                recreated instead of reused.
              </p>
              <p>
                The result is often higher cost, slower launches, inconsistent customer
                experiences, and limited visibility into how global content is performing.
              </p>
              <p>
                A strong global content strategy connects multilingual content to enterprise
                priorities and gives every team a clearer basis for investment, ownership,
                quality, and measurement.
              </p>
            </div>

            <aside className="gcs-question-panel" aria-label="Six essential global content questions">
              <div className="gcs-question-panel-head">
                <h3>Six Decisions Every Global Program Must Make</h3>
                <p>
                  A repeatable strategy gives teams a shared way to make the decisions that shape
                  multilingual content across the enterprise.
                </p>
              </div>

              <div>
                {essentialQuestions.map((item) => (
                  <div className="gcs-question-row" key={item.label}>
                    <span className="gcs-question-icon">
                      <Icon name={item.icon} />
                    </span>
                    <span className="gcs-question-label">{item.label}</span>
                    <span className="gcs-question-text">{item.question}</span>
                  </div>
                ))}
              </div>

              <div className="gcs-question-footer">
                <p>
                  When these decisions are made strategically, localization becomes more than a
                  production task. It becomes a scalable business capability supporting global
                  growth, customer engagement, product adoption, operational efficiency, and
                  regulatory readiness.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        className="gcs-section gcs-framework"
        id="strategy-framework"
        aria-labelledby="strategy-framework-title"
      >
        <div className="gcs-shell">
          <header className="gcs-section-head">
            <h2 id="strategy-framework-title">The Global Content Strategy Framework</h2>
            <p className="gcs-intro">
              A global content strategy defines how an organization creates, adapts, manages,
              distributes, and improves content for audiences across languages and markets.
            </p>
            <p className="gcs-support">
              It extends beyond global content marketing. It can encompass websites, software
              interfaces, mobile applications, technical documentation, training materials,
              legal content, regulated communications, product information, support knowledge,
              multimedia, and customer-facing experiences.
            </p>
          </header>

          <div className="gcs-framework-shell">
            <div className="gcs-framework-banner">
              <div>
                <h3>Six Connected Disciplines</h3>
                <p>
                  An effective enterprise strategy brings business priorities, content planning,
                  operating models, technology, governance, and measurement into one connected
                  system.
                </p>
              </div>
              <div className="gcs-framework-badge">
                <Icon name="workflow" size={18} />
                Enterprise-wide framework
              </div>
            </div>

            <div className="gcs-framework-grid">
              {frameworkItems.map((item) => (
                <article className="gcs-framework-item" key={item.title}>
                  <div className="gcs-framework-title-row">
                    <span className="gcs-framework-icon">
                      <Icon name={item.icon} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>

                  <p className="gcs-framework-intro">{item.intro}</p>
                  <p className="gcs-framework-body">{item.body}</p>
                  <p className="gcs-list-title">{item.listTitle}</p>

                  <ul className="gcs-framework-list">
                    {item.items.map((listItem) => (
                      <li key={listItem}>{listItem}</li>
                    ))}
                  </ul>

                  <p className="gcs-framework-closing">{item.closing}</p>
                </article>
              ))}
            </div>

            <div className="gcs-framework-links">
              <ArrowLink href="https://www.stepes.com/resources/translation-quality/">
                Translation Quality &amp; Governance
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/">
                AI Translation Insights
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/solutions/global-content-operations/">
                Global Content Operations
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="gcs-section gcs-models" aria-labelledby="operating-model-title">
        <div className="gcs-shell">
          <div className="gcs-models-intro">
            <div>
              <h2 id="operating-model-title">Choose the Right Global–Local Operating Model</h2>
            </div>
            <div className="gcs-models-intro-copy">
              <p>There is no single operating model that works for every organization.</p>
              <p>
                The right structure depends on the company’s size, geographic footprint, content
                volume, regulatory environment, market maturity, internal capabilities, and need
                for local autonomy.
              </p>
            </div>
          </div>

          <div className="gcs-model-spectrum">
            <div className="gcs-model-spectrum-head" aria-hidden="true">
              <span>Central Control</span>
              <span className="gcs-model-spectrum-line" />
              <span>Local Autonomy</span>
            </div>

            <div className="gcs-model-grid">
              {operatingModels.map((model) => (
                <article
                  className={`gcs-model-column${model.featured ? " is-featured" : ""}`}
                  key={model.title}
                >
                  <div className="gcs-model-title-row">
                    <span className="gcs-model-icon">
                      <Icon name={model.icon} />
                    </span>
                    <h3>{model.title}</h3>
                  </div>
                  <p className="gcs-model-description">{model.description}</p>
                  <p className="gcs-quiet-label">Primary strengths</p>
                  <ul className="gcs-compact-list">
                    {model.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                  <p className="gcs-model-challenge">{model.challenge}</p>
                  <p className="gcs-model-fit">Best suited for: {model.fit}</p>
                </article>
              ))}
            </div>

            <div className="gcs-hybrid-band">
              <div className="gcs-hybrid-band-copy">
                <h3>How the Hybrid Model Works in Practice</h3>
                <p>
                  For many large organizations, the hybrid model provides the most practical
                  foundation. It centralizes what benefits from shared standards while keeping
                  market-specific decisions close to the people who understand those markets.
                </p>
              </div>

              <div className="gcs-hybrid-responsibilities">
                {hybridResponsibilities.map((group) => (
                  <div className="gcs-hybrid-responsibility" key={group.label}>
                    <div className="gcs-hybrid-responsibility-head">
                      <Icon name={group.icon} size={20} />
                      <span>{group.label}</span>
                    </div>
                    <ul className="gcs-compact-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="gcs-model-conclusion">
            The goal is not to centralize every decision. It is to establish clear decision rights
            so global standards support the business without becoming another approval bottleneck.
          </p>
          <div className="gcs-model-link">
            <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/localization-operating-models/">
              Explore Localization Operating Models
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="gcs-section gcs-prioritize" aria-labelledby="prioritize-content-title">
        <div className="gcs-shell">
          <div className="gcs-prioritize-intro">
            <div>
              <h2 id="prioritize-content-title">Prioritize Markets, Languages, and Content</h2>
            </div>
            <div className="gcs-prioritize-intro-copy">
              <p>
                Global content programs become difficult to manage when every market, language,
                and content type is treated as equally important.
              </p>
              <p>
                A structured prioritization framework helps organizations direct resources toward
                the content and markets where multilingual experiences can create the greatest
                business and customer value.
              </p>
            </div>
          </div>

          <div className="gcs-priority-panel">
            <div className="gcs-priority-grid">
              {prioritizationPillars.map((pillar) => (
                <article className="gcs-priority-item" key={pillar.title}>
                  <div className="gcs-priority-title-row">
                    <span>
                      <Icon name={pillar.icon} />
                    </span>
                    <h3>{pillar.title}</h3>
                  </div>
                  <p>{pillar.body}</p>
                  <ul className="gcs-compact-list">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="gcs-priority-closing">{pillar.closing}</p>
                </article>
              ))}
            </div>

            <div className="gcs-portfolio">
              <div className="gcs-portfolio-head">
                <h3>Create a Content Investment Portfolio</h3>
                <p>
                  A practical portfolio connects market opportunity with content value, operating
                  effort, and business risk so teams can choose the right treatment for each asset.
                </p>
              </div>

              <div className="gcs-portfolio-table" role="table" aria-label="Global content investment portfolio">
                <div className="gcs-portfolio-row is-header" role="row">
                  <div className="gcs-portfolio-cell" role="columnheader">Content Decision</div>
                  <div className="gcs-portfolio-cell" role="columnheader">When It Applies</div>
                  <div className="gcs-portfolio-cell" role="columnheader">Typical Approach</div>
                </div>
                {portfolioDecisions.map((item) => (
                  <div className="gcs-portfolio-row" role="row" key={item.decision}>
                    <div className="gcs-portfolio-cell gcs-portfolio-decision" role="cell">
                      <span className="gcs-portfolio-mobile-label">Content Decision</span>
                      {item.decision}
                    </div>
                    <div className="gcs-portfolio-cell" role="cell">
                      <span className="gcs-portfolio-mobile-label">When It Applies</span>
                      {item.when}
                    </div>
                    <div className="gcs-portfolio-cell" role="cell">
                      <span className="gcs-portfolio-mobile-label">Typical Approach</span>
                      {item.approach}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="gcs-priority-note">
            Prioritization should be revisited as markets, products, regulations, and customer
            behavior change. A global content strategy is not a one-time list of languages—it is
            an ongoing investment framework.
          </p>
        </div>
      </section>

      <section className="gcs-section gcs-readiness" aria-labelledby="global-readiness-title">
        <div className="gcs-shell">
          <div className="gcs-readiness-intro">
            <div>
              <p className="gcs-eyebrow">Global Readiness</p>
              <h2 id="global-readiness-title">Design Content for Global Use</h2>
            </div>
            <div className="gcs-readiness-intro-copy">
              <p>
                Localization becomes faster, more consistent, and more cost-effective when
                content is created with global audiences in mind from the beginning.
              </p>
              <p>
                Global-ready content combines clear source writing, reusable structures,
                localization-ready systems, governed terminology, and market-specific search
                insight.
              </p>
            </div>
          </div>

          <div className="gcs-readiness-system">
            {globalReadinessItems.map((item) => (
              <article className="gcs-readiness-row" key={item.title}>
                <div className="gcs-readiness-title">
                  <span className="gcs-readiness-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <div className="gcs-readiness-content">
                  <p>{item.body}</p>
                  {item.listTitle ? <p className="gcs-quiet-label">{item.listTitle}</p> : null}
                  {item.items ? (
                    <ul className="gcs-compact-list">
                      {item.items.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  ) : null}
                  <p>{item.closing}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="gcs-readiness-links">
            <ArrowLink href="https://www.stepes.com/terminology-management/">
              Terminology Management
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/software-localization-services/">
              Software Localization Services
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/website-translation-services/">
              Website Localization Services
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="gcs-section gcs-ai-strategy" aria-labelledby="ai-strategy-title">
        <div className="gcs-shell">
          <div className="gcs-ai-intro">
            <div>
              <p className="gcs-eyebrow">AI Governance</p>
              <h2 id="ai-strategy-title">Build AI Into the Strategy—Not Around It</h2>
            </div>
            <div className="gcs-ai-intro-copy">
              <p>
                AI translation has made it possible to process multilingual content faster and at
                a larger scale. It has also made strategic governance more important.
              </p>
              <p>
                Organizations need to decide where AI can create meaningful value, where
                professional review remains essential, and how different technologies should
                operate within a controlled enterprise workflow.
              </p>
              <p>
                AI should not be treated as a single, universal translation method. Its
                suitability depends on content purpose, language pair, audience, quality
                expectations, available language assets, and business risk.
              </p>
            </div>
          </div>

          <div className="gcs-ai-system">
            {aiStrategyPrinciples.map((item) => (
              <article className="gcs-ai-row" key={item.title}>
                <div className="gcs-ai-title">
                  <span className="gcs-ai-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <div className="gcs-ai-content">
                  <p>{item.body}</p>
                  {item.items ? (
                    <ul className="gcs-compact-list">
                      {item.items.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  ) : null}
                  {item.closing ? <p>{item.closing}</p> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="gcs-ai-links">
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/">
              Explore AI Translation Insights
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/ai-human-translation-workflow/">
              AI + Human Translation Workflow
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/ai-translation-platform/">
              AI Translation Platform
            </ArrowLink>
          </div>
        </div>
      </section>

      <section
        className="gcs-section gcs-risk-governance"
        aria-labelledby="risk-governance-title"
      >
        <div className="gcs-shell">
          <div className="gcs-risk-intro">
            <div>
              <h2 id="risk-governance-title">Govern Content According to Business Risk</h2>
            </div>
            <div className="gcs-risk-intro-copy">
              <p>
                Global content governance should be proportionate to the consequences of error.
              </p>
              <p>
                Requiring the same review process for every asset can slow the organization and
                create unnecessary cost. Applying too little control can expose the company to
                reputational, operational, legal, or safety risks.
              </p>
              <p>
                A tiered framework helps organizations align translation, review, quality
                assurance, security, and approval requirements with the purpose and risk of each
                content type.
              </p>
            </div>
          </div>

          <div className="gcs-risk-matrix" role="table" aria-label="Content risk governance framework">
            <div className="gcs-risk-row is-header" role="row">
              <div className="gcs-risk-cell" role="columnheader">Content Tier</div>
              <div className="gcs-risk-cell" role="columnheader">Examples</div>
              <div className="gcs-risk-cell" role="columnheader">Typical Workflow</div>
            </div>

            {riskTiers.map((item) => (
              <div className="gcs-risk-row" role="row" key={item.tier}>
                <div className="gcs-risk-cell gcs-risk-tier" role="cell">
                  <span className="gcs-risk-mobile-label">Content Tier</span>
                  {item.tier}
                </div>
                <div className="gcs-risk-cell" role="cell">
                  <span className="gcs-risk-mobile-label">Examples</span>
                  {item.examples}
                </div>
                <div className="gcs-risk-cell" role="cell">
                  <span className="gcs-risk-mobile-label">Typical Workflow</span>
                  {item.workflow}
                </div>
              </div>
            ))}
          </div>

          <div className="gcs-governance-principles">
            {governancePrinciples.map((item) => (
              <article className="gcs-governance-principle" key={item.title}>
                <div className="gcs-governance-title">
                  <span className="gcs-governance-icon">
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
                <p>{item.closing}</p>
              </article>
            ))}
          </div>

          <div className="gcs-risk-links">
            <ArrowLink href="https://www.stepes.com/resources/translation-quality/">
              Translation Quality &amp; Governance
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/security/">
              Enterprise Security
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/translation-quality-system/">
              Translation Quality System
            </ArrowLink>
          </div>
        </div>
      </section>

      <section
        className="gcs-section gcs-performance"
        aria-labelledby="global-performance-title"
      >
        <div className="gcs-shell">
          <div className="gcs-performance-intro">
            <div>
              <h2 id="global-performance-title">Measure Global Content Performance</h2>
            </div>
            <div className="gcs-performance-intro-copy">
              <p>
                Localization activity does not automatically demonstrate business value.
              </p>
              <p>
                Organizations need a measurement framework that connects multilingual content
                with market outcomes, customer experience, operational performance, financial
                efficiency, and quality.
              </p>
              <p>
                The most useful metrics reflect the content’s intended purpose and reveal where
                strategy, source content, workflows, language assets, or review processes need to
                improve.
              </p>
            </div>
          </div>

          <div className="gcs-performance-system">
            <div className="gcs-performance-grid">
              {performanceDimensions.map((item) => (
                <article className="gcs-performance-item" key={item.title}>
                  <div className="gcs-performance-title">
                    <span className="gcs-performance-icon">
                      <Icon name={item.icon} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                  <ul className="gcs-compact-list">
                    {item.items.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                  <p className="gcs-performance-closing">{item.closing}</p>
                </article>
              ))}
            </div>

            <div className="gcs-improvement-band">
              <span className="gcs-improvement-icon">
                <Icon name="refresh" size={26} />
              </span>
              <div>
                <h3>Turn Measurement Into Continuous Improvement</h3>
                <p>
                  Frequent terminology corrections may indicate that the glossary needs to be
                  updated. Repeated reviewer changes may reveal unclear style guidance.
                  Publication delays may point to fragmented ownership, while high rework rates
                  may suggest that the source content itself needs improvement. Measurement
                  should lead to action—not simply produce another dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="gcs-performance-links">
            <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/localization-roi/">
              Localization ROI
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/global-content-kpis/">
              Global Content KPIs
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/translation-cost-guide/">
              Translation Cost Guide
            </ArrowLink>
          </div>
        </div>
      </section>

      <section
        className="gcs-section gcs-maturity"
        id="global-content-maturity"
        aria-labelledby="global-maturity-title"
      >
        <div className="gcs-shell">
          <div className="gcs-maturity-intro">
            <div>
              <h2 id="global-maturity-title">Assess Your Global Content Maturity</h2>
            </div>
            <div className="gcs-maturity-intro-copy">
              <p>
                Global content capability develops over time.
              </p>
              <p>
                Organizations may begin with isolated translation projects and gradually progress
                toward integrated, measurable, and strategically governed multilingual
                operations. A maturity model helps teams understand their current state and
                identify the next practical improvements.
              </p>
            </div>
          </div>

          <div className="gcs-maturity-rail">
            {maturityStages.map((item) => (
              <article className="gcs-maturity-stage" key={item.stage}>
                <span className="gcs-stage-marker" aria-label={`Stage ${item.stage}`}>
                  {item.stage}
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="gcs-compact-list">
                  {item.characteristics.map((characteristic) => (
                    <li key={characteristic}>{characteristic}</li>
                  ))}
                </ul>
                <p className="gcs-stage-priority">
                  <span>Next Priority</span>
                  {item.priority}
                </p>
              </article>
            ))}
          </div>

          <p className="gcs-maturity-note">
            Maturity does not require every piece of content to be automated or centrally
            managed. It means the organization can make deliberate, consistent decisions based
            on business value, customer needs, and content risk.
          </p>
        </div>
      </section>

      <section className="gcs-section gcs-topics" aria-labelledby="strategy-topics-title">
        <div className="gcs-shell">
          <div className="gcs-topics-intro">
            <div>
              <h2 id="strategy-topics-title">Explore Global Content Strategy Topics</h2>
            </div>
            <div className="gcs-topics-intro-copy">
              <p>
                Build deeper knowledge across the disciplines that support scalable multilingual
                content.
              </p>
              <p>
                Use these resources to plan investments, define governance, connect technology
                and workflows, and measure how global content contributes to enterprise
                performance.
              </p>
            </div>
          </div>

          <div className="gcs-topic-system">
            {strategyTopicGroups.map((group) => (
              <section className="gcs-topic-group" key={group.title} aria-labelledby={`topic-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <div className="gcs-topic-group-head">
                  <span className="gcs-topic-icon">
                    <Icon name={group.icon} />
                  </span>
                  <h3 id={`topic-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                    {group.title}
                  </h3>
                  <p>{group.description}</p>
                </div>

                <div className="gcs-topic-links">
                  {group.links.map((link) => (
                    <a className="gcs-topic-link" href={link.href} key={link.title}>
                      <span className="gcs-topic-link-title">
                        <span>{link.title}</span>
                        <Icon name="arrow" size={16} />
                      </span>
                      <p>{link.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="gcs-topics-footer">
            <ArrowLink href="https://www.stepes.com/resources/">
              Explore the Resource Center
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/localization-guides/">
              Localization Guides
            </ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/translation-guides/">
              Translation Guides
            </ArrowLink>
          </div>
        </div>
      </section>


      <section
        className="gcs-section gcs-operations"
        aria-labelledby="global-content-operations-title"
      >
        <div className="gcs-shell">
          <div className="gcs-operations-intro">
            <div>
              <p className="gcs-eyebrow">From Strategy to Operations</p>
              <h2 id="global-content-operations-title">
                Turn Strategy Into Global Content Operations
              </h2>
            </div>
            <div className="gcs-operations-intro-copy">
              <p>A strategy creates direction. Global content operations make that direction repeatable.</p>
              <p>
                Stepes helps enterprises connect multilingual content across teams, systems,
                languages, and markets through integrated technology and professional language
                expertise.
              </p>
            </div>
          </div>

          <div className="gcs-operations-system">
            <div className="gcs-operations-flow" aria-label="From strategic direction to multilingual delivery">
              <div className="gcs-flow-stage">
                <span>Direction</span>
                <strong>Global Content Strategy</strong>
              </div>
              <span className="gcs-flow-arrow" aria-hidden="true">
                <Icon name="arrow" size={19} />
              </span>
              <div className="gcs-flow-stage is-center">
                <span>Operating Model</span>
                <strong>Connected People, Systems, and Workflows</strong>
              </div>
              <span className="gcs-flow-arrow" aria-hidden="true">
                <Icon name="arrow" size={19} />
              </span>
              <div className="gcs-flow-stage">
                <span>Outcome</span>
                <strong>Scalable Multilingual Delivery</strong>
              </div>
            </div>

            <div className="gcs-operations-grid">
              {operationsCapabilities.map((item) => (
                <article className="gcs-operation-item" key={item.title}>
                  <div className="gcs-operation-title">
                    <span className="gcs-operation-icon">
                      <Icon name={item.icon} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                  <p className="gcs-operation-closing">{item.closing}</p>
                </article>
              ))}
            </div>

            <div className="gcs-operations-links">
              <ArrowLink href="https://www.stepes.com/solutions/global-content-operations/">
                Explore Global Content Operations
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/enterprise-translation-management/">
                Discover Enterprise Translation Management
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="gcs-section gcs-faq" aria-labelledby="global-content-faq-title">
        <div className="gcs-shell">
          <div className="gcs-faq-intro">
            <div>
              <h2 id="global-content-faq-title">Frequently Asked Questions</h2>
            </div>
            <div className="gcs-faq-intro-copy">
              <p>
                Explore practical answers to the questions enterprises ask when planning,
                governing, and scaling multilingual content.
              </p>
              <p>
                These answers connect strategy with operating models, AI, quality, performance,
                and the responsibilities of global and regional teams.
              </p>
            </div>
          </div>

          <div className="gcs-faq-panel">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              const questionId = `gcs-faq-question-${index}`;
              const answerId = `gcs-faq-answer-${index}`;

              return (
                <article className="gcs-faq-item" key={item.question}>
                  <h3>
                    <button
                      className="gcs-faq-question"
                      id={questionId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="gcs-faq-toggle" aria-hidden="true" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      className="gcs-faq-answer"
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="gcs-final-cta" aria-labelledby="global-content-cta-title">
        <div className="gcs-shell">
          <div className="gcs-final-cta-inner">
            <div className="gcs-final-cta-copy">
              <p className="gcs-eyebrow">From Strategy to Execution</p>
              <h2 id="global-content-cta-title">
                Turn Global Content Strategy Into a Scalable Operating Model
              </h2>
              <p>
                Connect people, content, technology, language assets, and quality controls across
                the enterprise. Stepes combines AI-powered translation workflows with
                professional language expertise to help organizations deliver consistent
                multilingual experiences across markets, channels, and business functions.
              </p>

              <div className="gcs-final-cta-actions">
                <a className="gcs-button gcs-button-primary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                  <Icon name="arrow" size={17} />
                </a>
                <a
                  className="gcs-button gcs-button-secondary"
                  href="https://www.stepes.com/solutions/global-content-operations/"
                >
                  Explore Global Content Operations
                </a>
              </div>
            </div>

            <div className="gcs-final-cta-visual" aria-label="Connected global content operating model">
              <div className="gcs-cta-core">Scalable Global Content Operations</div>
              <span className="gcs-cta-node is-1">
                <Icon name="people" size={18} />
                People
              </span>
              <span className="gcs-cta-node is-2">
                <Icon name="content" size={18} />
                Content
              </span>
              <span className="gcs-cta-node is-3">
                <Icon name="workflow" size={18} />
                Technology
              </span>
              <span className="gcs-cta-node is-4">
                <Icon name="shield" size={18} />
                Quality Controls
              </span>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
