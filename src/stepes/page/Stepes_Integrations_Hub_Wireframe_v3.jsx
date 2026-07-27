import React, { useMemo, useState } from "react";

const PAGE_URL = "https://www.stepes.com/integrations/";

function integrationHref(name) {
  const slug = name
    .toLowerCase()
    .replace(/\+/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `https://www.stepes.com/integrations/${slug}/`;
}

const FEATURED_INTEGRATIONS = [
  {
    name: "Adobe Experience Manager",
    mark: "AEM",
    category: "CMS and Digital Experience",
    description:
      "Localize enterprise websites, content fragments, reusable components, metadata, and digital experiences while preserving publishing structure.",
    href: "https://www.stepes.com/integrations/adobe-experience-manager/",
  },
  {
    name: "Contentful",
    mark: "CF",
    category: "CMS and Digital Experience",
    description:
      "Synchronize structured entries and fields for scalable headless CMS localization across websites, products, applications, and campaigns.",
    href: "https://www.stepes.com/integrations/contentful/",
  },
  {
    name: "Sitecore",
    mark: "SC",
    category: "CMS and Digital Experience",
    description:
      "Connect complex digital experience workflows with centralized translation, review, terminology, and multilingual publishing controls.",
    href: "https://www.stepes.com/integrations/sitecore/",
  },
  {
    name: "WordPress VIP",
    mark: "WP",
    category: "CMS and Digital Experience",
    description:
      "Translate pages, posts, taxonomies, reusable blocks, and recurring editorial updates for large-scale multilingual publishing programs.",
    href: "https://www.stepes.com/integrations/wordpress/",
  },
  {
    name: "GitHub",
    mark: "GH",
    category: "Code Repositories and CI/CD",
    description:
      "Synchronize source resources and completed translations with repositories, branches, pull-request workflows, and release cycles.",
    href: "https://www.stepes.com/integrations/github/",
  },
  {
    name: "GitLab",
    mark: "GL",
    category: "Code Repositories and CI/CD",
    description:
      "Keep multilingual resources aligned with commits, branches, merge requests, release schedules, and continuous product updates.",
    href: "https://www.stepes.com/integrations/gitlab/",
  },
  {
    name: "Azure DevOps",
    mark: "AZ",
    category: "Code Repositories and CI/CD",
    description:
      "Integrate translation with enterprise repositories, pipelines, localization validation, and multilingual release-management processes.",
    href: "https://www.stepes.com/integrations/azure-devops/",
  },
  {
    name: "Figma",
    mark: "FG",
    category: "Design and Product Development",
    description:
      "Translate interface content, preview languages in layouts, and identify expansion, truncation, and right-to-left design issues earlier.",
    href: "https://www.stepes.com/integrations/figma/",
  },
  {
    name: "Salesforce",
    mark: "SF",
    category: "Marketing Automation and CRM",
    description:
      "Connect customer, knowledge, marketing, service, and CRM content with governed multilingual workflows across business teams.",
    href: "https://www.stepes.com/integrations/salesforce/",
  },
  {
    name: "Zendesk",
    mark: "ZD",
    category: "Customer Support and Knowledge",
    description:
      "Keep help centers, knowledge articles, categories, sections, and customer-support content aligned across languages and markets.",
    href: "https://www.stepes.com/integrations/zendesk/",
  },
  {
    name: "Microsoft SharePoint",
    mark: "SP",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Connect enterprise documents, communication sites, knowledge resources, and collaborative content with controlled translation workflows.",
    href: "https://www.stepes.com/integrations/microsoft-sharepoint/",
  },
  {
    name: "Shopify Plus",
    mark: "SH",
    category: "Ecommerce and Product Information",
    description:
      "Localize product descriptions, collections, storefront content, navigation, policies, and recurring global ecommerce updates.",
    href: "https://www.stepes.com/integrations/shopify/",
  },
];

const FEATURED_DISPLAY_ORDER = [
  "Adobe Experience Manager",
  "Contentful",
  "GitHub",
  "Figma",
  "Salesforce",
  "Zendesk",
  "Azure DevOps",
  "Microsoft SharePoint",
  "Shopify Plus",
  "Sitecore",
  "GitLab",
  "WordPress VIP",
];

const FEATURED_INTEGRATION_CARDS = FEATURED_DISPLAY_ORDER.map((name) =>
  FEATURED_INTEGRATIONS.find((item) => item.name === name)
).filter(Boolean);

const FEATURED_NAMES = new Set(FEATURED_INTEGRATIONS.map((item) => item.name));

const DIRECTORY_ITEMS = [
  ...FEATURED_INTEGRATIONS,
  {
    name: "Contentstack",
    mark: "CS",
    category: "CMS and Digital Experience",
    description:
      "Connect structured headless content and locale variants with repeatable translation, review, and publishing workflows.",
  },
  {
    name: "Drupal",
    mark: "DR",
    category: "CMS and Digital Experience",
    description:
      "Coordinate multilingual pages, fields, taxonomies, components, and editorial updates across complex Drupal environments.",
  },
  {
    name: "Sanity",
    mark: "SA",
    category: "CMS and Digital Experience",
    description:
      "Translate structured content models and localized fields while preserving relationships, metadata, and publishing control.",
  },
  {
    name: "Storyblok",
    mark: "SB",
    category: "CMS and Digital Experience",
    description:
      "Connect visual editing and structured content workflows with centralized localization and multilingual delivery.",
  },
  {
    name: "Webflow",
    mark: "WF",
    category: "CMS and Digital Experience",
    description:
      "Support multilingual website content, collections, metadata, and recurring digital publishing updates.",
  },
  {
    name: "Bitbucket",
    mark: "BB",
    category: "Code Repositories and CI/CD",
    description:
      "Synchronize localization files with repositories, branches, release workflows, and controlled multilingual delivery.",
  },
  {
    name: "Jenkins",
    mark: "JK",
    category: "Code Repositories and CI/CD",
    description:
      "Coordinate translation and localization checks with automated build, testing, and release pipelines.",
  },
  {
    name: "CircleCI",
    mark: "CI",
    category: "Code Repositories and CI/CD",
    description:
      "Connect recurring localization tasks with continuous integration, validation, and product release processes.",
  },
  {
    name: "HubSpot",
    mark: "HS",
    category: "Marketing Automation and CRM",
    description:
      "Translate campaign, website, CRM, email, and customer-facing content across global marketing operations.",
  },
  {
    name: "Adobe Marketo Engage",
    mark: "MK",
    category: "Marketing Automation and CRM",
    description:
      "Connect multilingual campaign assets, nurture content, landing pages, and recurring marketing updates.",
  },
  {
    name: "Braze",
    mark: "BZ",
    category: "Marketing Automation and CRM",
    description:
      "Localize lifecycle messaging, notifications, campaigns, and customer communications across markets.",
  },
  {
    name: "ServiceNow",
    mark: "SN",
    category: "Customer Support and Knowledge",
    description:
      "Translate knowledge, service, workflow, and enterprise support content through governed multilingual processes.",
  },
  {
    name: "Intercom",
    mark: "IC",
    category: "Customer Support and Knowledge",
    description:
      "Keep help-center content, customer guidance, and support communications consistent across languages.",
  },
  {
    name: "Freshdesk",
    mark: "FD",
    category: "Customer Support and Knowledge",
    description:
      "Connect support articles, knowledge resources, and recurring customer-service updates with translation workflows.",
  },
  {
    name: "Adobe Commerce",
    mark: "AC",
    category: "Ecommerce and Product Information",
    description:
      "Localize storefront, catalog, product, category, policy, and campaign content for international commerce.",
  },
  {
    name: "Salesforce Commerce Cloud",
    mark: "CC",
    category: "Ecommerce and Product Information",
    description:
      "Coordinate multilingual commerce experiences, catalogs, merchandising content, and regional publishing workflows.",
  },
  {
    name: "Akeneo",
    mark: "AK",
    category: "Ecommerce and Product Information",
    description:
      "Translate product attributes, descriptions, specifications, categories, and market-specific product information.",
  },
  {
    name: "Salsify",
    mark: "SY",
    category: "Ecommerce and Product Information",
    description:
      "Connect product experience content with multilingual enrichment, governance, and channel-ready delivery.",
  },
  {
    name: "Microsoft OneDrive",
    mark: "OD",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Automate translation intake and delivery for approved documents and collaborative file-based workflows.",
  },
  {
    name: "Google Drive",
    mark: "GD",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Connect shared documents and folders with controlled multilingual processing, review, and delivery.",
  },
  {
    name: "Amazon S3",
    mark: "S3",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Use secure object storage to automate high-volume translation intake, processing, and output delivery.",
  },
  {
    name: "Box",
    mark: "BX",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Connect enterprise file repositories with permission-aware translation and multilingual document workflows.",
  },
  {
    name: "Dropbox",
    mark: "DB",
    category: "Cloud Storage and Enterprise Content",
    description:
      "Coordinate shared file translation through monitored folders and structured delivery processes.",
  },
  {
    name: "Jira",
    mark: "JR",
    category: "Workflow, Collaboration, and Automation",
    description:
      "Coordinate localization requests, issues, assignments, release tasks, and operational visibility across teams.",
  },
  {
    name: "Microsoft Teams",
    mark: "MT",
    category: "Workflow, Collaboration, and Automation",
    description:
      "Bring translation notifications, review coordination, and workflow updates into enterprise collaboration channels.",
  },
  {
    name: "Slack",
    mark: "SL",
    category: "Workflow, Collaboration, and Automation",
    description:
      "Connect multilingual workflow notifications, approvals, questions, and operational updates with team collaboration.",
  },
  {
    name: "Enterprise Middleware",
    mark: "MW",
    category: "Workflow, Collaboration, and Automation",
    description:
      "Connect Stepes through approved integration platforms and middleware used across enterprise architectures.",
    href: "https://www.stepes.com/contact-us/",
  },
  {
    name: "Proprietary Applications",
    mark: "PA",
    category: "Workflow, Collaboration, and Automation",
    description:
      "Integrate internal, legacy, regulated, or specialized systems through APIs, webhooks, secure exchange, or custom development.",
    href: "https://www.stepes.com/contact-us/",
  },
].map((item) => ({
  ...item,
  href: item.href || integrationHref(item.name),
}));

const DIRECTORY_CATEGORIES = [
  "All",
  "CMS and Digital Experience",
  "Code Repositories and CI/CD",
  "Design and Product Development",
  "Marketing Automation and CRM",
  "Customer Support and Knowledge",
  "Ecommerce and Product Information",
  "Cloud Storage and Enterprise Content",
  "Workflow, Collaboration, and Automation",
];

const BENEFITS = [
  {
    title: "Automated Content Exchange",
    description:
      "Move source content and completed translations between connected systems without repetitive export, upload, and re-entry work.",
  },
  {
    title: "Continuous Multilingual Workflows",
    description:
      "Trigger translation when content is created, updated, approved, committed, or prepared for publication and release.",
  },
  {
    title: "Centralized Language Governance",
    description:
      "Apply translation memory, approved terminology, quality rules, style guidance, and review requirements across systems.",
  },
  {
    title: "Delivery Back to the Source",
    description:
      "Return localized content to the correct site, repository, project, branch, record, language, or publishing destination.",
  },
];

const CONNECTION_OPTIONS = [
  {
    title: "Configured Connectors",
    icon: "plug",
    description:
      "Use a preconfigured connection for supported platforms and common enterprise localization workflows.",
    fit: "Best suited for widely used systems, repeatable content structures, and teams seeking a faster implementation path.",
  },
  {
    title: "Translation APIs and Webhooks",
    icon: "code",
    description:
      "Build translation directly into applications, content platforms, and event-driven business processes.",
    fit: "Best suited for proprietary applications, high-volume automation, and complex enterprise content architectures.",
    href: "https://www.stepes.com/developers/translation-api/",
    link: "Explore the Translation API",
  },
  {
    title: "Software Localization API",
    icon: "brackets",
    description:
      "Connect resource files, translation keys, repositories, releases, context, quality review, and multilingual delivery.",
    fit: "Best suited for agile product teams, continuously changing software content, and structured localization pipelines.",
    href: "https://www.stepes.com/developers/software-localization-api/",
    link: "Explore the Software Localization API",
  },
  {
    title: "Website Translation Proxy",
    icon: "browser",
    description:
      "Deploy and manage multilingual website experiences when direct CMS or application integration is not the ideal path.",
    fit: "Best suited for dynamic websites, recurring content changes, and teams seeking lower ongoing development requirements.",
    href: "https://www.stepes.com/website-translation-proxy/",
    link: "Explore Website Translation Proxy",
  },
  {
    title: "Secure File and Cloud Automation",
    icon: "cloud",
    description:
      "Automate translation through approved storage locations, secure file transfer, watched folders, or scheduled exchange.",
    fit: "Best suited for document-heavy operations and stable file-based workflows that do not require real-time APIs.",
  },
  {
    title: "Custom Enterprise Integrations",
    icon: "workflow",
    description:
      "Connect proprietary, legacy, regulated, or highly specialized systems through a purpose-built architecture.",
    fit: "Best suited for complex approval structures, multi-system environments, and specialized enterprise content operations.",
    href: "https://www.stepes.com/contact-us/",
    link: "Discuss a Custom Integration",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Detect or Select Content",
    description:
      "Identify new, changed, approved, or release-ready content through selection, schedules, events, APIs, or synchronization.",
  },
  {
    title: "Transfer Content and Context",
    description:
      "Send source content with identifiers, locales, metadata, screenshots, character limits, instructions, and delivery destinations.",
  },
  {
    title: "Prepare the Workflow",
    description:
      "Match the content with approved translation memory, terminology, style guidance, expertise, and review requirements.",
  },
  {
    title: "Translate and Review",
    description:
      "Apply the appropriate combination of AI translation, professional translation, post-editing, linguistic review, and approval.",
  },
  {
    title: "Monitor and Resolve",
    description:
      "Track progress and surface missing context, terminology questions, validation issues, failed transfers, or incomplete languages.",
  },
  {
    title: "Return and Publish",
    description:
      "Deliver completed content to the correct system, project, branch, language, record, or publishing destination.",
  },
];

const USE_CASES = [
  {
    title: "Continuous Software Localization",
    label: "Product and Engineering",
    description:
      "Connect repositories, resource files, translation keys, design context, and release workflows so new and modified strings move through localization as products evolve.",
    href: "https://www.stepes.com/developers/software-localization-api/",
    link: "Software Localization API",
  },
  {
    title: "Enterprise Website Localization",
    label: "Web and Digital Experience",
    description:
      "Integrate content management systems, headless platforms, digital-experience systems, or proxy delivery to manage pages, fields, components, metadata, assets, and recurring updates.",
    href: "https://www.stepes.com/website-translation-proxy/",
    link: "Website Translation Proxy",
  },
  {
    title: "Global Marketing Operations",
    label: "Marketing and Content",
    description:
      "Connect campaigns, landing pages, product messaging, customer communications, and marketing content with multilingual review and regional approval workflows.",
    href: "https://www.stepes.com/solutions/global-content-operations/",
    link: "Global Content Operations",
  },
  {
    title: "Multilingual Product and Ecommerce Content",
    label: "Commerce and Product Information",
    description:
      "Translate product names, descriptions, specifications, attributes, categories, catalogs, merchandising content, and storefront experiences as commerce programs change.",
  },
  {
    title: "Customer Support and Knowledge Localization",
    label: "Customer Experience",
    description:
      "Connect help centers, knowledge bases, service content, and support communications while reusing approved terminology and existing translations across channels.",
    href: "https://www.stepes.com/solutions/multilingual-customer-support/",
    link: "Multilingual Customer Support",
  },
  {
    title: "Regulated Multilingual Content",
    label: "Governed Enterprise Workflows",
    description:
      "Connect regulated content environments with controlled translation, specialist review, approval, traceability, terminology, and delivery requirements.",
  },
];

const GOVERNANCE_ITEMS = [
  {
    title: "Translation Memory",
    icon: "memory",
    description:
      "Reuse previously approved translations to improve consistency, continuity, and efficiency across connected products, systems, and content channels.",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    title: "Terminology Management",
    icon: "book",
    description:
      "Apply approved product names, technical terms, brand language, regulated terminology, and do-not-translate instructions across workflows.",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    title: "AI + Human Translation Workflows",
    icon: "spark",
    description:
      "Select the right combination of controlled AI translation, post-editing, professional translation, specialist review, and approval for each content type.",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    title: "In-Context Localization",
    icon: "layout",
    description:
      "Provide screenshots, interface context, character limits, usage notes, and design references so linguists and reviewers understand how content will appear and behave.",
  },
  {
    title: "Translation Quality Assurance",
    icon: "quality",
    description:
      "Apply automated checks and professional review for terminology, completeness, placeholders, numbers, formatting, consistency, and multilingual usability.",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
  {
    title: "Roles and Approvals",
    icon: "users",
    description:
      "Align access, review, and approval responsibilities with teams, business units, content types, languages, products, and markets.",
  },
];

const SECURITY_ITEMS = [
  {
    title: "Secure Authentication",
    description:
      "Protect integration credentials and restrict access to approved applications, services, users, and operating environments.",
  },
  {
    title: "Encrypted Data Transfer",
    description:
      "Protect content and request information while it moves between customer systems and Stepes workflows.",
  },
  {
    title: "Role-Based Access",
    description:
      "Control which users and applications can submit, review, manage, retrieve, or administer multilingual content and integrations.",
  },
  {
    title: "Environment Separation",
    description:
      "Keep development, testing, staging, and production integration activity appropriately separated and governed.",
  },
  {
    title: "Traceability and Audit History",
    description:
      "Maintain visibility into content submission, workflow activity, reviews, approvals, changes, and delivery events.",
  },
  {
    title: "Reliable Processing",
    description:
      "Design for asynchronous translation, structured errors, safe retries, duplicate prevention, status monitoring, and delivery verification.",
  },
];

const IMPLEMENTATION_STEPS = [
  {
    title: "Use-Case Discovery",
    description:
      "Define the systems, content types, users, languages, volumes, update frequency, quality requirements, and business outcomes the integration must support.",
  },
  {
    title: "Solution Architecture",
    description:
      "Determine the right combination of connector, API, webhook, proxy, file automation, middleware, or custom development.",
  },
  {
    title: "Workflow Design",
    description:
      "Configure how content moves through AI translation, professional translation, terminology, quality assurance, review, and customer approval.",
  },
  {
    title: "Integration Configuration",
    description:
      "Establish access, environments, mappings, triggers, content identifiers, delivery logic, and operational responsibilities.",
  },
  {
    title: "Pilot and Validation",
    description:
      "Test representative content, languages, users, source extraction, context, workflow status, target delivery, publishing behavior, and exception handling.",
  },
  {
    title: "Production Launch",
    description:
      "Complete production-readiness review, deploy the approved integration, and establish monitoring, support, escalation, and change management.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Refine the integration as systems, content volumes, languages, release schedules, quality needs, and business priorities evolve.",
  },
];

const RELATED_CAPABILITIES = [
  {
    title: "Translation API",
    description:
      "Programmatically submit content, configure translation requirements, monitor processing, and retrieve multilingual results.",
    href: "https://www.stepes.com/developers/translation-api/",
  },
  {
    title: "Software Localization API",
    description:
      "Automate software resource, translation-key, repository, release, and continuous localization workflows.",
    href: "https://www.stepes.com/developers/software-localization-api/",
  },
  {
    title: "Website Translation Proxy",
    description:
      "Deploy and manage multilingual web experiences through a proxy-based localization architecture.",
    href: "https://www.stepes.com/website-translation-proxy/",
  },
  {
    title: "Developer Platform",
    description:
      "Access onboarding guidance, API references, authentication documentation, implementation resources, and technical support paths.",
    href: "https://www.stepes.com/developers/",
  },
  {
    title: "Workflow Automation",
    description:
      "Configure translation intake, routing, processing, review, approval, delivery, notifications, and recurring operations.",
    href: "https://www.stepes.com/translation-workflow-automation/",
  },
  {
    title: "Enterprise Translation Management",
    description:
      "Centralize multilingual requests, content, teams, language assets, quality, reporting, and governance.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is a translation integration?",
    answer:
      "A translation integration connects a content, product, development, design, customer, or enterprise system with a translation workflow. It reduces manual transfers by allowing source content, context, workflow status, and completed translations to move between connected systems.",
  },
  {
    question: "What systems can Stepes integrate with?",
    answer:
      "Stepes can connect content management systems, code repositories, design tools, CRM and marketing platforms, customer-support systems, ecommerce and product-information platforms, cloud storage, enterprise content systems, middleware, and proprietary applications. The appropriate method depends on the system, content, security, workflow, and deployment requirements.",
  },
  {
    question: "What is the difference between a connector and a translation API?",
    answer:
      "A connector provides a configured connection for a particular platform and common workflow. A translation API gives developers programmatic control over content submission, languages, workflow configuration, status, and delivery. Connectors can reduce implementation work, while APIs provide greater flexibility for custom applications and complex architectures.",
  },
  {
    question: "Does Stepes support bidirectional integrations?",
    answer:
      "Stepes integration workflows can support bidirectional content exchange by sending source content and context into translation and returning completed translations to the appropriate system, language, record, repository, branch, or publishing destination. The exact behavior depends on the connected system and integration configuration.",
  },
  {
    question: "Can Stepes connect to a proprietary or internal system?",
    answer:
      "Yes. Proprietary systems can connect through the Stepes Translation API, Software Localization API, webhooks, secure file exchange, enterprise middleware, or a custom integration. Stepes can work with your technical and localization teams to define the architecture and implementation plan.",
  },
  {
    question: "Can an integration support continuous localization?",
    answer:
      "Yes. Continuous localization connects translation with recurring content changes and release processes. New or modified content can trigger localization, move through the required translation and review workflow, and return to the development or publishing environment when complete.",
  },
  {
    question: "Does Stepes integrate with GitHub, GitLab, or Azure DevOps?",
    answer:
      "Stepes supports repository and software-localization integration patterns for development environments such as GitHub, GitLab, and Azure DevOps. The workflow can include source resource synchronization, branches, files, translation status, quality review, and multilingual delivery.",
  },
  {
    question: "Can designers localize content through Figma?",
    answer:
      "A Figma-based localization workflow can send interface content for translation and bring completed translations back into the design environment. This helps teams preview languages, identify text expansion and truncation, validate right-to-left layouts, and improve multilingual design before development is complete.",
  },
  {
    question: "Can integration workflows include AI and professional human review?",
    answer:
      "Yes. Stepes workflows can combine AI translation, professional human translation, machine translation post-editing, linguistic review, subject-matter review, terminology validation, quality assurance, and customer approval. The workflow can vary by content type, language, market, risk, audience, and intended use.",
  },
  {
    question: "How does Stepes protect placeholders and software syntax?",
    answer:
      "Software-localization workflows can identify and preserve placeholders, variables, markup, formatting, and other nontranslatable technical elements. Quality checks help confirm that required elements remain present and correctly formatted in translated resources.",
  },
  {
    question: "Can Stepes preserve content metadata and context?",
    answer:
      "Yes. Integrations can transfer relevant information such as content IDs, keys, filenames, branches, locales, screenshots, character limits, instructions, product metadata, workflow requirements, and delivery destinations. Available metadata depends on the connected system and integration method.",
  },
  {
    question: "Can different content types use different workflows?",
    answer:
      "Yes. An organization can use one integration framework while applying different translation and review processes to software strings, websites, marketing content, technical documentation, customer support, and regulated materials.",
  },
  {
    question: "Can multiple business units use the same integration?",
    answer:
      "Yes. Enterprise integrations can be organized around workspaces, teams, business units, products, regions, content types, or operating environments. Roles, workflows, terminology, translation memory, and reporting can be aligned with the organization’s governance model.",
  },
  {
    question: "How long does an enterprise integration take?",
    answer:
      "Implementation time depends on the systems involved, connection method, content structure, authentication, metadata, languages, workflow complexity, security review, testing requirements, and production deployment process. A representative pilot is often the best way to validate the architecture and establish a realistic launch plan.",
  },
  {
    question: "Can we start with one system or workflow?",
    answer:
      "Yes. Organizations can begin with one representative platform, content type, language group, repository, business unit, or market. A controlled pilot allows the teams to validate content movement, quality, workflow, delivery, and operational ownership before expanding.",
  },
  {
    question: "What happens when no preconfigured connector is available?",
    answer:
      "Stepes can evaluate an API connection, webhooks, secure file exchange, enterprise middleware, cloud-storage automation, or custom connector development. The absence of a preconfigured connector does not prevent a system from being integrated.",
  },
];

function Icon({ name, size = 22, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: "false",
  };

  const icons = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    chevron: <path d="m7 9 5 5 5-5" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    plug: (
      <>
        <path d="M8 3v5M16 3v5" />
        <path d="M6 8h12v2a6 6 0 0 1-6 6v5" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    brackets: (
      <>
        <path d="M8 5H5v14h3" />
        <path d="M16 5h3v14h-3" />
        <path d="m10 9-2 3 2 3" />
        <path d="m14 9 2 3-2 3" />
      </>
    ),
    browser: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 9v11" />
      </>
    ),
    cloud: (
      <>
        <path d="M7 18h10a4 4 0 0 0 .6-7.9A6 6 0 0 0 6.2 8.5 4.8 4.8 0 0 0 7 18Z" />
        <path d="M12 10v6" />
        <path d="m9.5 13 2.5-3 2.5 3" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="4" width="6" height="5" rx="1" />
        <rect x="15" y="4" width="6" height="5" rx="1" />
        <rect x="9" y="15" width="6" height="5" rx="1" />
        <path d="M9 6.5h6" />
        <path d="M18 9v2.5a3 3 0 0 1-3 3h-3" />
        <path d="M6 9v2.5a3 3 0 0 0 3 3h3" />
      </>
    ),
    memory: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        <path d="M9 9h6v6H9z" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
        <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 9v11" />
      </>
    ),
    quality: (
      <>
        <path d="m12 3 2.1 4.3L19 8l-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8l4.9-.7L12 3Z" />
        <path d="m9.5 11.5 1.7 1.7 3.4-3.4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M15.5 15.5A5 5 0 0 1 21 20" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    repeat: (
      <>
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11V9a3 3 0 0 1 3-3h15" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v2a3 3 0 0 1-3 3H3" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function IntegrationMark({ mark, name, large = false }) {
  return (
    <span
      className={`integration-mark${large ? " integration-mark-large" : ""}`}
      aria-hidden="true"
      title={name}
    >
      {mark}
    </span>
  );
}

export default function StepesIntegrationsHubWireframe() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredDirectory = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return DIRECTORY_ITEMS.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery =
        !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const directoryExpanded = Boolean(showAll || query.trim() || category !== "All");
  const directoryPreview = filteredDirectory
    .filter((item) => !FEATURED_NAMES.has(item.name))
    .slice(0, 18);
  const visibleDirectory = directoryExpanded ? filteredDirectory : directoryPreview;

  return (
    <div className="integrations-page">
      <style>{styles}</style>

      <main>
        <section className="hero" id="overview">
          <div className="shell hero-inner">
            <div className="hero-copy">
              <h1>Enterprise Translation Integrations for Your Global Content Stack</h1>
              <p className="hero-lead">
                Connect the systems where your teams create, manage, develop, publish,
                and support content with scalable Stepes translation workflows.
              </p>
              <p className="hero-support">
                Use configured connectors, APIs, webhooks, secure exchange, and custom
                integrations to route multilingual content through AI translation,
                professional linguistic review, terminology, quality assurance, approvals,
                and delivery without disrupting the tools your teams already use.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={`${PAGE_URL}#integration-directory`}
                >
                  Explore Integrations
                  <Icon name="arrow" size={18} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.stepes.com/contact-us/"
                >
                  Talk to an Integration Expert
                </a>
              </div>
            </div>

            <div className="hero-architecture" role="img" aria-label="Connected translation architecture from enterprise content systems through Stepes workflows to localized content delivery">
              <div className="architecture-column architecture-systems">
                <span className="architecture-label">Your Content Systems</span>
                <div className="system-stack">
                  <span>CMS and DXP</span>
                  <span>Repositories and CI/CD</span>
                  <span>Design and Product</span>
                  <span>CRM and Support</span>
                </div>
              </div>

              <div className="architecture-flow architecture-flow-in" aria-hidden="true">
                <span />
              </div>

              <div className="architecture-core">
                <span className="architecture-core-label">STEPES</span>
                <strong>Connected Translation Workflow</strong>
                <div className="core-capabilities">
                  <span>AI + Human</span>
                  <span>Terminology</span>
                  <span>Quality</span>
                  <span>Approvals</span>
                </div>
              </div>

              <div className="architecture-flow architecture-flow-out" aria-hidden="true">
                <span />
              </div>

              <div className="architecture-column architecture-outcomes">
                <span className="architecture-label">Localized Content Returned</span>
                <div className="system-stack">
                  <span>Web and Campaigns</span>
                  <span>Software and Releases</span>
                  <span>Products and Commerce</span>
                  <span>Knowledge and Documents</span>
                </div>
              </div>
            </div>

            <div className="trust-strip" aria-label="Integration platform highlights">
              <div>
                <Icon name="plug" size={21} />
                <span>
                  <strong>Connectors, APIs, and Webhooks</strong>
                  <span className="trust-description">Choose the connection method that fits your environment.</span>
                </span>
              </div>
              <div>
                <Icon name="spark" size={21} />
                <span>
                  <strong>AI + Human Workflows</strong>
                  <span className="trust-description">Combine automation with professional review and approval.</span>
                </span>
              </div>
              <div>
                <Icon name="globe" size={21} />
                <span>
                  <strong>100+ Languages</strong>
                  <span className="trust-description">Support global products, content, customers, and markets.</span>
                </span>
              </div>
              <div>
                <Icon name="workflow" size={21} />
                <span>
                  <strong>Enterprise Integration Support</strong>
                  <span className="trust-description">Plan, test, launch, and optimize connected workflows.</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <nav className="section-nav" aria-label="Explore this page">
          <div className="shell section-nav-inner">
            <span>Explore</span>
            <div className="section-nav-links">
              <a href={`${PAGE_URL}#featured-integrations`}>Featured Paths</a>
              <a href={`${PAGE_URL}#integration-directory`}>Directory</a>
              <a href={`${PAGE_URL}#connection-options`}>Connection Options</a>
              <a href={`${PAGE_URL}#workflow`}>Workflow</a>
              <a href={`${PAGE_URL}#governance`}>Governance</a>
              <a href={`${PAGE_URL}#implementation`}>Implementation</a>
              <a href={`${PAGE_URL}#faq`}>FAQ</a>
            </div>
            <label className="section-nav-select">
              <span className="sr-only">Jump to a section</span>
              <select
                defaultValue=""
                onChange={(event) => {
                  if (event.target.value) window.location.href = event.target.value;
                }}
              >
                <option value="" disabled>Explore this page</option>
                <option value={`${PAGE_URL}#featured-integrations`}>Featured Paths</option>
                <option value={`${PAGE_URL}#integration-directory`}>Integration Directory</option>
                <option value={`${PAGE_URL}#connection-options`}>Connection Options</option>
                <option value={`${PAGE_URL}#workflow`}>Connected Workflow</option>
                <option value={`${PAGE_URL}#governance`}>Quality and Governance</option>
                <option value={`${PAGE_URL}#implementation`}>Implementation</option>
                <option value={`${PAGE_URL}#faq`}>Frequently Asked Questions</option>
              </select>
            </label>
          </div>
        </nav>

        <section className="overview-section">
          <div className="shell overview-layout">
            <div className="overview-heading">
              <h2>Connect Translation to the Systems Where Work Already Happens</h2>
            </div>
            <div className="overview-copy">
              <p className="overview-lead">
                Enterprise content rarely lives in one place. Website teams work in
                content management systems, product teams manage strings in repositories
                and design tools, marketing teams operate in customer platforms, and
                support teams maintain knowledge bases and service content.
              </p>
              <p>
                When translation sits outside this technology stack, teams must export
                files, recreate project information, monitor progress manually, and upload
                translated content back into each system. Stepes creates a connected
                translation layer so content can move into the right workflow, carry its
                business and technical context, pass through quality and approval controls,
                and return to the system where it will be published or deployed.
              </p>
            </div>
          </div>

          <div className="shell benefit-grid">
            {BENEFITS.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="featured-section" id="featured-integrations">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Featured Integration Paths</p>
              <h2>Connect the Platforms That Power Global Content</h2>
              <p>
                Explore strategic integration paths across enterprise content,
                development, design, customer, commerce, and collaboration systems.
                The connection approach can use a configured connector, API, webhook,
                secure exchange, middleware, or custom integration according to your
                architecture and workflow requirements.
              </p>
            </div>

            <div
              id="featured-integration-grid"
              className={`featured-grid${showAllFeatured ? " featured-grid-expanded" : ""}`}
            >
              {FEATURED_INTEGRATION_CARDS.map((item) => (
                <article className="featured-card" key={item.name}>
                  <div className="featured-card-top">
                    <IntegrationMark mark={item.mark} name={item.name} large />
                    <span className="category-label">{item.category}</span>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.href}>Explore {item.name} Integration</ArrowLink>
                </article>
              ))}
            </div>

            <div className="featured-more">
              <button
                className="button button-secondary"
                type="button"
                aria-expanded={showAllFeatured}
                aria-controls="featured-integration-grid"
                onClick={() => setShowAllFeatured((current) => !current)}
              >
                {showAllFeatured ? "Show Fewer Featured Integrations" : "View All Featured Integrations"}
              </button>
            </div>
          </div>
        </section>

        <section className="directory-section" id="integration-directory">
          <div className="shell">
            <div className="section-heading directory-heading">
              <div>
                <h2>Explore Integration Paths Across Your Content Stack</h2>
              </div>
              <p>
                Search by platform or browse by category to identify relevant systems,
                content workflows, and connection paths for your organization.
              </p>
            </div>

            <div className="directory-controls">
              <label className="search-control">
                <span className="sr-only">Search integrations</span>
                <Icon name="search" size={20} />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search integrations"
                />
              </label>

              <label className="filter-select-control">
                <span>Integration category</span>
                <select
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                    setShowAll(false);
                  }}
                >
                  {DIRECTORY_CATEGORIES.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>

              <div className="filter-list" aria-label="Filter integrations by category">
                {DIRECTORY_CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={category === item ? "active" : ""}
                    aria-pressed={category === item}
                    onClick={() => {
                      setCategory(item);
                      setShowAll(false);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <p className="directory-guidance">
              Connection methods vary by platform and deployment. Stepes can recommend
              the appropriate configured connector, API, webhook, secure exchange,
              middleware, proxy, or custom integration path.
            </p>

            <div className="directory-meta" aria-live="polite">
              <span>
                {filteredDirectory.length} integration path
                {filteredDirectory.length === 1 ? "" : "s"}
              </span>
              {(query || category !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                    setShowAll(false);
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>

            {visibleDirectory.length > 0 ? (
              <div
                id="integration-directory-grid"
                className={`directory-grid${directoryExpanded ? " directory-grid-expanded" : ""}`}
              >
                {visibleDirectory.map((item) => (
                  <article className="directory-item" key={item.name}>
                    <IntegrationMark mark={item.mark} name={item.name} />
                    <div>
                      <span className="category-label">{item.category}</span>
                      <h3>
                        <a href={item.href}>{item.name}</a>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="directory-empty">
                <h3>No matching integration found</h3>
                <p>
                  Stepes can evaluate a custom connection through APIs, webhooks,
                  secure exchange, middleware, or purpose-built integration development.
                </p>
                <ArrowLink href="https://www.stepes.com/contact-us/">
                  Discuss Your Integration
                </ArrowLink>
              </div>
            )}

            {!directoryExpanded && filteredDirectory.length > 18 && (
              <div className="directory-more">
                <button
                  className="button button-secondary"
                  type="button"
                  aria-expanded={false}
                  aria-controls="integration-directory-grid"
                  onClick={() => setShowAll(true)}
                >
                  View All Integration Paths
                </button>
              </div>
            )}

            {showAll && !query && category === "All" && (
              <div className="directory-more">
                <button
                  className="button button-secondary"
                  type="button"
                  aria-expanded={true}
                  aria-controls="integration-directory-grid"
                  onClick={() => setShowAll(false)}
                >
                  Show Fewer Integration Paths
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="connection-section" id="connection-options">
          <div className="shell">
            <div className="section-heading connection-heading">
              <div>
                <h2>Choose the Right Way to Connect</h2>
              </div>
              <p>
                Enterprise environments differ in architecture, security, content
                structure, publishing requirements, and development resources. Stepes
                supports several integration approaches so your organization can choose
                the right balance of speed, flexibility, control, and technical ownership.
              </p>
            </div>

            <div className="connection-matrix">
              {CONNECTION_OPTIONS.map((item) => (
                <article key={item.title}>
                  <span className="connection-icon">
                    <Icon name={item.icon} size={23} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p className="fit-copy">{item.fit}</p>
                    {item.href && item.link && (
                      <ArrowLink href={item.href}>{item.link}</ArrowLink>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="workflow">
          <div className="shell">
            <div className="section-heading centered-heading workflow-heading">
              <h2>Automate the Complete Multilingual Content Lifecycle</h2>
              <p>
                A Stepes integration does more than transfer text. It connects content,
                context, language assets, translation workflows, quality processes,
                stakeholders, and delivery systems across the localization lifecycle.
              </p>
            </div>

            <div className="workflow-grid">
              {WORKFLOW_STEPS.map((step, index) => (
                <article key={step.title}>
                  <div className="workflow-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="workflow-context">
              <div>
                <strong>Context Travels with the Content</strong>
                <p>
                  Integration workflows can carry content identifiers, locale data,
                  filenames, branches, screenshots, character limits, product metadata,
                  instructions, deadlines, review requirements, and delivery destinations.
                </p>
              </div>
              <div className="workflow-context-tags" aria-label="Examples of integration context">
                <span>Content IDs</span>
                <span>Locales</span>
                <span>Visual Context</span>
                <span>Metadata</span>
                <span>Workflow Rules</span>
                <span>Delivery Targets</span>
              </div>
            </div>
          </div>
        </section>

        <section className="use-cases-section">
          <div className="shell">
            <div className="section-heading">
              <h2>Support Every Global Content Operation</h2>
              <p>
                Connect enterprise translation with the workflows that drive products,
                websites, marketing, commerce, customer experience, documents, and
                regulated content.
              </p>
            </div>

            <div className="use-case-list">
              {USE_CASES.map((item) => (
                <article key={item.title}>
                  <span className="use-case-label">{item.label}</span>
                  <div className="use-case-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.href && item.link && (
                      <ArrowLink href={item.href}>{item.link}</ArrowLink>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="governance-section" id="governance">
          <div className="shell">
            <div className="section-heading governance-heading">
              <div>
                <p className="eyebrow eyebrow-dark">Language Quality and Governance</p>
                <h2>Apply Consistent Language Controls Across Every System</h2>
              </div>
              <p>
                Connecting content is only one part of an enterprise localization program.
                Stepes helps organizations apply shared linguistic assets, quality
                requirements, context, and governance controls across platforms,
                departments, products, and markets.
              </p>
            </div>

            <div className="governance-grid">
              {GOVERNANCE_ITEMS.map((item) => (
                <article key={item.title}>
                  <span className="governance-icon">
                    <Icon name={item.icon} size={22} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.href && (
                      <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="security-section">
          <div className="shell security-layout">
            <div className="security-intro">
              <p className="eyebrow">Enterprise Readiness</p>
              <h2>Connect Enterprise Content with Security and Control</h2>
              <p>
                Stepes integration architecture can be aligned with organizational
                requirements for authentication, access, content handling, traceability,
                operational resilience, and production governance.
              </p>
              <ArrowLink href="https://www.stepes.com/security-and-compliance/">
                Explore Security and Compliance
              </ArrowLink>
            </div>

            <div className="security-panel">
              {SECURITY_ITEMS.map((item) => (
                <article key={item.title}>
                  <span className="security-check">
                    <Icon name="check" size={15} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="implementation-section" id="implementation">
          <div className="shell implementation-layout">
            <div className="implementation-intro">
              <h2>Launch Through a Controlled Integration Process</h2>
              <p>
                Stepes works with your business, localization, product, engineering,
                content, and security teams to design an integration that fits the way
                your organization operates.
              </p>
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Plan Your Integration
                <Icon name="arrow" size={18} />
              </a>
            </div>

            <div className="implementation-timeline">
              {IMPLEMENTATION_STEPS.map((step, index) => (
                <article key={step.title}>
                  <div className="timeline-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="custom-section">
          <div className="shell custom-panel">
            <div className="custom-copy">
              <p className="eyebrow">Custom Integrations</p>
              <h2>Don’t See Your System?</h2>
              <p>
                Your content platform does not need to appear in a public directory to
                connect with Stepes. We can integrate proprietary applications, legacy
                systems, regulated content environments, enterprise middleware, internal
                databases, specialized repositories, and custom publishing workflows.
              </p>
              <div className="custom-actions">
                <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                  Discuss a Custom Integration
                  <Icon name="arrow" size={18} />
                </a>
                <ArrowLink href="https://www.stepes.com/developers/">
                  Explore the Stepes Developer Platform
                </ArrowLink>
              </div>
            </div>

            <div className="custom-considerations">
              <span className="panel-label">Integration Planning</span>
              <ul>
                <li>Content architecture and system ownership</li>
                <li>Authentication and security requirements</li>
                <li>Formats, metadata, and contextual information</li>
                <li>Translation volume and update frequency</li>
                <li>Workflow, review, and approval requirements</li>
                <li>Delivery, monitoring, and support expectations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="related-section">
          <div className="shell">
            <div className="section-heading related-heading">
              <h2>Build a Connected Enterprise Translation Ecosystem</h2>
              <p>
                Explore the Stepes platform capabilities that support integration,
                automation, quality, governance, and multilingual delivery.
              </p>
            </div>

            <div className="related-grid">
              {RELATED_CAPABILITIES.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <h2>Translation Integration Questions</h2>
              <p>
                Review common questions about connectors, APIs, continuous localization,
                content context, quality workflows, implementation, and custom enterprise
                connectivity.
              </p>
              <ArrowLink href="https://www.stepes.com/contact-us/">
                Ask an Integration Question
              </ArrowLink>
            </div>

            <div className="faq-panel">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                const panelId = `integrations-faq-panel-${index}`;
                const buttonId = `integrations-faq-button-${index}`;

                return (
                  <article className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-control" aria-hidden="true">
                          <Icon name="chevron" size={19} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="shell final-cta-panel">
            <div>
              <h2>Connect Your Global Content Stack to Stepes</h2>
              <p>
                Bring translation directly into the systems where your organization
                creates, develops, manages, publishes, and supports content. Stepes
                combines enterprise integrations, APIs, workflow automation, AI
                translation, professional linguistic expertise, terminology management,
                quality assurance, and implementation support.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Integration Expert
                <Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/developers/">
                Explore Developer Platform
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  .integrations-page {
    --accent: #C11D63;
    --accent-dark: #A71954;
    --accent-deep: #7A1542;
    --accent-soft: #FDF2F7;
    --accent-light: #F2A7C6;
    --ink: #171A24;
    --text: #3E4554;
    --muted: #667085;
    --border: #E5E7EC;
    --border-strong: #D9DDE5;
    --surface: #F7F8FA;
    --dark: #171A24;
    --shell: 1280px;
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    color: var(--text);
    background: #FFFFFF;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
  }

  .integrations-page *,
  .integrations-page *::before,
  .integrations-page *::after {
    box-sizing: border-box;
  }

  .integrations-page a {
    color: inherit;
    text-decoration: none;
  }

  .integrations-page button,
  .integrations-page input {
    font: inherit;
  }

  .integrations-page section[id] {
    scroll-margin-top: 24px;
  }

  .shell {
    width: min(var(--shell), calc(100% - 112px));
    margin: 0 auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .eyebrow,
  .panel-label,
  .category-label,
  .use-case-label,
  .architecture-label,
  .architecture-core-label {
    display: block;
    margin: 0 0 13px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .eyebrow-dark {
    color: var(--accent-light);
  }

  .button {
    min-height: 48px;
    padding: 12px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    cursor: pointer;
    transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus-visible {
    color: #FFFFFF !important;
  }

  .button-primary {
    background: var(--accent);
    box-shadow: 0 12px 28px rgba(193, 29, 99, 0.17);
  }

  .button-primary:hover {
    background: var(--accent-dark);
    box-shadow: 0 14px 32px rgba(193, 29, 99, 0.22);
  }

  .button-secondary {
    border-color: var(--border-strong);
    color: #252A36;
    background: #FFFFFF;
  }

  .button-secondary:hover {
    border-color: #C7CCD6;
    background: #FAFAFB;
  }

  .button:focus-visible,
  .featured-more button:focus-visible,
  .arrow-link:focus-visible,
  .section-nav a:focus-visible,
  .section-nav-select:focus-within,
  .filter-list button:focus-visible,
  .filter-select-control:focus-within,
  .directory-meta button:focus-visible,
  .directory-item h3 a:focus-visible,
  .faq-item button:focus-visible,
  .search-control:focus-within {
    outline: 3px solid rgba(193, 29, 99, 0.22);
    outline-offset: 3px;
  }

  .arrow-link {
    width: fit-content;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .arrow-link svg {
    flex: 0 0 auto;
    transition: transform 160ms ease;
  }

  .arrow-link:hover svg {
    transform: translateX(3px);
  }

  .arrow-link:hover span {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .section-heading {
    max-width: 880px;
  }

  .section-heading h2,
  .overview-heading h2,
  .security-intro h2,
  .implementation-intro h2,
  .faq-intro h2,
  .final-cta-panel h2,
  .custom-copy h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .section-heading > p:not(.eyebrow),
  .section-heading > div + p,
  .security-intro > p:not(.eyebrow),
  .implementation-intro > p:not(.eyebrow),
  .faq-intro > p:not(.eyebrow),
  .custom-copy > p:not(.eyebrow),
  .final-cta-panel p {
    margin: 17px 0 0;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .centered-heading {
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .centered-heading > p:not(.eyebrow) {
    max-width: 820px;
    margin-right: auto;
    margin-left: auto;
  }

  .hero {
    background: #FFFFFF;
  }

  .hero-inner {
    padding-top: 104px;
    padding-bottom: 88px;
  }

  .hero-copy {
    max-width: 980px;
    margin: 0 auto;
    text-align: center;
  }

  .hero h1 {
    max-width: 980px;
    margin: 0 auto;
    color: var(--ink);
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.038em;
    line-height: 1.08;
  }

  .hero-lead {
    max-width: 820px;
    margin: 24px auto 0;
    color: #3B4252;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
  }

  .hero-support {
    max-width: 800px;
    margin: 14px auto 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .hero-actions {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .hero-architecture {
    position: relative;
    margin-top: 50px;
    padding: 34px 38px;
    border: 1px solid var(--border);
    border-radius: 30px;
    display: grid;
    grid-template-columns: minmax(220px, 0.86fr) 72px minmax(330px, 1.2fr) 72px minmax(220px, 0.86fr);
    align-items: center;
    gap: 0;
    overflow: hidden;
    background:
      linear-gradient(rgba(193, 29, 99, 0.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(193, 29, 99, 0.028) 1px, transparent 1px),
      #FFFFFF;
    background-size: 32px 32px;
    box-shadow: 0 24px 58px rgba(18, 24, 38, 0.08);
  }

  .architecture-column {
    min-width: 0;
  }

  .architecture-label {
    margin-bottom: 12px;
    color: #7A8291;
  }

  .system-stack {
    display: grid;
    gap: 9px;
  }

  .system-stack span {
    min-height: 46px;
    padding: 11px 14px;
    border: 1px solid var(--border);
    border-radius: 14px;
    display: flex;
    align-items: center;
    color: #485061;
    background: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
  }

  .architecture-core {
    min-height: 236px;
    padding: 30px;
    border: 1px solid rgba(193, 29, 99, 0.24);
    border-radius: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: linear-gradient(145deg, #FFFFFF 0%, var(--accent-soft) 100%);
    box-shadow: 0 18px 38px rgba(193, 29, 99, 0.10);
  }

  .architecture-core-label {
    margin-bottom: 12px;
  }

  .architecture-core strong {
    max-width: 290px;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .core-capabilities {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .core-capabilities span {
    padding: 7px 10px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 999px;
    color: #6F2848;
    background: rgba(255, 255, 255, 0.78);
    font-size: 14px;
    font-weight: 600;
  }

  .architecture-flow {
    position: relative;
    height: 1px;
    margin: 0 12px;
    background: #C5CAD3;
  }

  .architecture-flow span {
    position: absolute;
    top: 50%;
    right: -1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: var(--accent);
  }

  .trust-strip {
    margin-top: 34px;
    padding-top: 26px;
    border-top: 1px solid var(--border);
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .trust-strip > div {
    min-width: 0;
    padding: 0 22px;
    border-right: 1px solid var(--border);
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    align-items: start;
    gap: 11px;
  }

  .trust-strip > div:first-child {
    padding-left: 0;
  }

  .trust-strip > div:last-child {
    padding-right: 0;
    border-right: 0;
  }

  .trust-strip svg {
    margin-top: 2px;
    color: var(--accent);
  }

  .trust-strip strong,
  .trust-description {
    display: block;
  }

  .trust-strip strong {
    color: var(--ink);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .trust-description {
    margin-top: 5px;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.55;
  }

  .section-nav {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: #FFFFFF;
  }

  .section-nav-inner {
    min-height: 64px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px 24px;
  }

  .section-nav-inner > span {
    color: #2E3442;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
  }

  .section-nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px 24px;
    flex-wrap: wrap;
  }

  .section-nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: #626A7B;
    font-size: 14px;
    font-weight: 600;
  }

  .section-nav-select {
    display: none;
  }

  .section-nav-select select {
    width: 100%;
    min-height: 48px;
    padding: 10px 42px 10px 14px;
    border: 1px solid var(--border-strong);
    border-radius: 14px;
    color: #2E3442;
    background: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
  }

  .section-nav a:hover {
    color: var(--accent);
  }

  .overview-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .overview-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
    align-items: start;
    gap: 80px;
  }

  .overview-heading h2 {
    max-width: 460px;
  }

  .overview-copy {
    padding-left: 54px;
    border-left: 1px solid var(--border);
  }

  .overview-copy p {
    max-width: 780px;
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.75;
  }

  .overview-copy .overview-lead {
    color: #2E3442;
    font-size: 20px;
    line-height: 1.65;
  }

  .overview-copy p + p {
    margin-top: 20px;
  }

  .benefit-grid {
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .benefit-grid article {
    min-height: 210px;
    padding: 28px 26px;
    border-right: 1px solid var(--border);
  }

  .benefit-grid article:first-child {
    padding-left: 0;
  }

  .benefit-grid article:last-child {
    padding-right: 0;
    border-right: 0;
  }

  .benefit-grid h3 {
    margin: 0;
    color: var(--ink);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.018em;
    line-height: 1.3;
  }

  .benefit-grid p {
    margin: 11px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .featured-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .featured-grid {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .featured-card {
    min-width: 0;
    min-height: 350px;
    padding: 28px;
    border: 1px solid var(--border);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0 12px 30px rgba(18, 24, 38, 0.04);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .featured-card:hover {
    transform: translateY(-2px);
    border-color: rgba(193, 29, 99, 0.25);
    box-shadow: 0 18px 38px rgba(18, 24, 38, 0.07);
  }

  .featured-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .integration-mark {
    width: 42px;
    height: 42px;
    border: 1px solid rgba(193, 29, 99, 0.17);
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--accent);
    background: var(--accent-soft);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  .integration-mark-large {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    font-size: 13px;
  }

  .featured-card .category-label,
  .directory-item .category-label {
    margin: 0;
    color: #7E8696;
    text-align: right;
  }

  .featured-card h3 {
    margin: 24px 0 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .featured-card > p {
    margin: 12px 0 20px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .featured-card .arrow-link {
    margin-top: auto;
  }

  .featured-more {
    display: none;
  }

  .directory-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .directory-heading,
  .connection-heading,
  .governance-heading {
    max-width: none;
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1.14fr);
    align-items: end;
    gap: 72px;
  }

  .directory-heading > p,
  .connection-heading > p,
  .governance-heading > p {
    margin: 0;
  }

  .directory-controls {
    margin-top: 44px;
    padding: 24px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--surface);
  }

  .search-control {
    width: 100%;
    min-height: 52px;
    padding: 0 16px;
    border: 1px solid var(--border-strong);
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 11px;
    background: #FFFFFF;
  }

  .search-control svg {
    flex: 0 0 auto;
    color: #8A92A3;
  }

  .search-control input {
    width: 100%;
    min-width: 0;
    height: 50px;
    border: 0;
    outline: 0;
    color: var(--ink);
    background: transparent;
    font-size: 16px;
  }

  .search-control input::placeholder {
    color: #969DAB;
  }

  .filter-select-control {
    display: none;
  }

  .filter-select-control > span {
    display: block;
    margin-bottom: 8px;
    color: #5F6778;
    font-size: 14px;
    font-weight: 600;
  }

  .filter-select-control select {
    width: 100%;
    min-height: 50px;
    padding: 10px 42px 10px 14px;
    border: 1px solid var(--border-strong);
    border-radius: 14px;
    color: var(--ink);
    background: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
  }

  .filter-list {
    margin-top: 18px;
    display: flex;
    align-items: center;
    gap: 9px;
    flex-wrap: wrap;
  }

  .filter-list button {
    min-height: 42px;
    padding: 9px 13px;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    color: #565E70;
    background: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    cursor: pointer;
  }

  .filter-list button:hover,
  .filter-list button.active {
    border-color: rgba(193, 29, 99, 0.28);
    color: var(--accent);
    background: var(--accent-soft);
  }

  .directory-guidance {
    max-width: 900px;
    margin: 18px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .directory-meta {
    min-height: 54px;
    padding: 14px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: #7A8291;
    font-size: 14px;
  }

  .directory-meta button {
    min-height: 44px;
    padding: 0;
    border: 0;
    color: var(--accent);
    background: transparent;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .directory-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    border-top: 1px solid var(--border);
  }

  .directory-item {
    min-width: 0;
    min-height: 238px;
    padding: 28px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .directory-item .category-label {
    text-align: left;
  }

  .directory-item h3 {
    margin: 6px 0 0;
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.3;
  }

  .directory-item h3 a {
    color: inherit;
    transition: color 160ms ease;
  }

  .directory-item h3 a:hover {
    color: var(--accent);
  }

  .directory-item p {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.62;
  }

  .directory-more {
    margin-top: 28px;
    display: flex;
    justify-content: center;
  }

  .directory-empty {
    padding: 42px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--surface);
  }

  .directory-empty h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
  }

  .directory-empty p {
    max-width: 740px;
    margin: 10px 0 10px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .connection-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .connection-matrix {
    margin-top: 46px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .connection-matrix article {
    min-width: 0;
    min-height: 280px;
    padding: 32px 34px 32px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    align-items: start;
    gap: 18px;
  }

  .connection-matrix article:nth-child(even) {
    padding-right: 0;
    padding-left: 34px;
    border-right: 0;
  }

  .connection-matrix article:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .connection-icon {
    width: 46px;
    height: 46px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
  }

  .connection-matrix h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .connection-matrix p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .connection-matrix .fit-copy {
    padding-top: 12px;
    border-top: 1px solid var(--border);
    color: #4E5667;
  }

  .connection-matrix .arrow-link {
    margin-top: 8px;
  }

  .workflow-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .workflow-heading {
    max-width: 900px;
  }

  .workflow-grid {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .workflow-grid article {
    min-height: 224px;
    padding: 30px 28px 30px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .workflow-grid article:nth-child(3n) {
    padding-right: 0;
    padding-left: 28px;
    border-right: 0;
  }

  .workflow-grid article:nth-child(3n + 2) {
    padding-left: 28px;
  }

  .workflow-grid article:nth-child(n + 4) {
    border-bottom: 0;
  }

  .workflow-number {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(193, 29, 99, 0.24);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--accent-soft);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  .workflow-grid h3 {
    margin: 0;
    color: var(--ink);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.018em;
    line-height: 1.3;
  }

  .workflow-grid p {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .workflow-context {
    margin-top: 36px;
    padding: 28px 30px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 24px;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
    align-items: center;
    gap: 44px;
    background: var(--accent-soft);
  }

  .workflow-context strong {
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
  }

  .workflow-context p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .workflow-context-tags {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
  }

  .workflow-context-tags span {
    padding: 8px 11px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 999px;
    color: #6D3150;
    background: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
  }

  .use-cases-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .use-case-list {
    margin-top: 44px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .use-case-list article {
    min-height: 164px;
    padding: 28px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: minmax(190px, 0.42fr) minmax(0, 1.58fr);
    align-items: start;
    gap: 42px;
  }

  .use-case-list article:last-child {
    border-bottom: 0;
  }

  .use-case-label {
    margin: 0;
    color: var(--accent);
  }

  .use-case-list h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .use-case-list p {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .use-case-content .arrow-link {
    margin-top: 10px;
  }

  .governance-section {
    padding: 96px 0;
    color: #FFFFFF;
    background: var(--dark);
  }

  .governance-heading h2 {
    color: #FFFFFF;
  }

  .governance-heading > p {
    color: #B8BFCC;
  }

  .governance-grid {
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid rgba(255, 255, 255, 0.13);
    border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  }

  .governance-grid article {
    min-width: 0;
    min-height: 230px;
    padding: 30px 34px 30px 0;
    border-right: 1px solid rgba(255, 255, 255, 0.13);
    border-bottom: 1px solid rgba(255, 255, 255, 0.13);
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: 17px;
  }

  .governance-grid article:nth-child(even) {
    padding-right: 0;
    padding-left: 34px;
    border-right: 0;
  }

  .governance-grid article:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .governance-icon {
    width: 44px;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-light);
    background: rgba(255, 255, 255, 0.05);
  }

  .governance-grid h3 {
    margin: 0;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .governance-grid p {
    margin: 9px 0 0;
    color: #AEB6C5;
    font-size: 16px;
    line-height: 1.65;
  }

  .governance-grid .arrow-link {
    margin-top: 8px;
    color: var(--accent-light) !important;
  }

  .security-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .security-layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.3fr);
    align-items: start;
    gap: 72px;
  }

  .security-intro {
    max-width: 470px;
  }

  .security-intro .arrow-link {
    margin-top: 10px;
  }

  .security-panel {
    padding: 10px 34px;
    border: 1px solid var(--border);
    border-radius: 28px;
    background: var(--surface);
  }

  .security-panel article {
    min-height: 122px;
    padding: 22px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    align-items: start;
    gap: 14px;
  }

  .security-panel article:last-child {
    border-bottom: 0;
  }

  .security-check {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    border: 1px solid rgba(193, 29, 99, 0.23);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
  }

  .security-panel h3 {
    margin: 0;
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.3;
  }

  .security-panel p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .implementation-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .implementation-layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.3fr);
    align-items: start;
    gap: 78px;
  }

  .implementation-intro {
    max-width: 470px;
  }

  .implementation-intro .button {
    margin-top: 28px;
  }

  .implementation-timeline {
    border-top: 1px solid var(--border);
  }

  .implementation-timeline article {
    min-height: 138px;
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: stretch;
    gap: 20px;
  }

  .timeline-marker {
    position: relative;
    padding-top: 24px;
    display: flex;
    justify-content: center;
  }

  .timeline-marker::after {
    position: absolute;
    top: 61px;
    bottom: -2px;
    left: 50%;
    width: 1px;
    background: #CDD1D9;
    content: "";
  }

  .implementation-timeline article:last-child .timeline-marker::after {
    display: none;
  }

  .timeline-marker span {
    position: relative;
    z-index: 2;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(193, 29, 99, 0.24);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--surface);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  .implementation-timeline article > div:last-child {
    padding: 24px 0 26px;
    border-bottom: 1px solid var(--border);
  }

  .implementation-timeline h3 {
    margin: 0;
    color: var(--ink);
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.018em;
    line-height: 1.3;
  }

  .implementation-timeline p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .custom-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .custom-panel {
    position: relative;
    padding: 54px 58px;
    border: 1px solid var(--border);
    border-radius: 30px;
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(360px, 0.88fr);
    align-items: center;
    gap: 66px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 18px 44px rgba(18, 24, 38, 0.05);
  }

  .custom-panel::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 3px;
    background: var(--accent);
    content: "";
  }

  .custom-copy {
    max-width: 730px;
  }

  .custom-actions {
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 12px 22px;
    flex-wrap: wrap;
  }

  .custom-considerations {
    padding: 30px;
    border: 1px solid var(--border);
    border-radius: 24px;
    background: var(--surface);
  }

  .custom-considerations .panel-label {
    margin-bottom: 16px;
  }

  .custom-considerations ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .custom-considerations li {
    position: relative;
    min-height: 48px;
    padding: 11px 0 11px 21px;
    border-bottom: 1px solid var(--border);
    color: #4C5465;
    font-size: 16px;
    line-height: 1.55;
  }

  .custom-considerations li:last-child {
    border-bottom: 0;
  }

  .custom-considerations li::before {
    position: absolute;
    top: 21px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    content: "";
  }

  .related-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .related-heading {
    max-width: 900px;
  }

  .related-grid {
    margin-top: 44px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .related-grid article {
    min-height: 238px;
    padding: 30px 30px 30px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
  }

  .related-grid article:nth-child(3n) {
    padding-right: 0;
    padding-left: 30px;
    border-right: 0;
  }

  .related-grid article:nth-child(3n + 2) {
    padding-left: 30px;
  }

  .related-grid article:nth-child(n + 4) {
    border-bottom: 0;
  }

  .related-grid h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .related-grid p {
    margin: 10px 0 18px;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.65;
  }

  .related-grid .arrow-link {
    margin-top: auto;
  }

  .faq-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .faq-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.68fr) minmax(0, 1.32fr);
    align-items: start;
    gap: 76px;
  }

  .faq-intro {
    max-width: 430px;
  }

  .faq-intro .arrow-link {
    margin-top: 10px;
  }

  .faq-panel {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .faq-item {
    border-bottom: 1px solid var(--border);
  }

  .faq-item:last-child {
    border-bottom: 0;
  }

  .faq-item h3 {
    margin: 0;
  }

  .faq-item h3 button {
    width: 100%;
    min-height: 80px;
    padding: 20px 0;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    color: var(--ink);
    background: transparent;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    cursor: pointer;
  }

  .faq-item h3 button:hover {
    color: var(--accent);
  }

  .faq-control {
    width: 38px;
    height: 38px;
    border: 1px solid #D7DBE3;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: #737B8D;
    background: #FFFFFF;
  }

  .faq-control svg {
    transition: transform 170ms ease;
  }

  .faq-item.open .faq-control {
    border-color: rgba(193, 29, 99, 0.24);
    color: var(--accent);
    background: var(--accent-soft);
  }

  .faq-item.open .faq-control svg {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-width: 840px;
    padding: 0 66px 28px 0;
  }

  .faq-answer[hidden] {
    display: none;
  }

  .faq-answer p {
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.72;
  }

  .final-cta-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .final-cta-panel {
    min-height: 330px;
    padding: 54px 58px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 30px;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
    align-items: center;
    gap: 60px;
    background: linear-gradient(135deg, var(--accent-soft) 0%, #FFFFFF 66%);
  }

  .final-cta-panel > div:first-child {
    max-width: 760px;
  }

  .final-cta-actions {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
  }

  @media (max-width: 1199px) {
    .shell {
      width: min(var(--shell), calc(100% - 80px));
    }

    .hero-architecture {
      grid-template-columns: minmax(190px, 0.82fr) 48px minmax(300px, 1.18fr) 48px minmax(190px, 0.82fr);
      padding-right: 30px;
      padding-left: 30px;
    }

    .architecture-flow {
      margin: 0 8px;
    }

    .featured-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .featured-card {
      padding: 24px;
    }

    .directory-heading,
    .connection-heading,
    .governance-heading {
      grid-template-columns: minmax(0, 0.92fr) minmax(380px, 1.08fr);
      gap: 50px;
    }
  }

  @media (max-width: 991px) {
    .shell {
      width: min(var(--shell), calc(100% - 48px));
    }

    .section-heading h2,
    .overview-heading h2,
    .security-intro h2,
    .implementation-intro h2,
    .faq-intro h2,
    .final-cta-panel h2,
    .custom-copy h2 {
      font-size: 32px;
    }

    .featured-card h3,
    .connection-matrix h3,
    .use-case-list h3,
    .governance-grid h3,
    .related-grid h3 {
      font-size: 22px;
    }

    .section-nav-inner {
      min-height: 0;
      padding: 14px 0;
      justify-content: stretch;
    }

    .section-nav-inner > span,
    .section-nav-links {
      display: none;
    }

    .section-nav-select {
      width: 100%;
      display: block;
    }

    .hero-inner {
      padding-top: 88px;
      padding-bottom: 82px;
    }

    .hero h1 {
      font-size: 42px;
    }

    .hero-architecture {
      grid-template-columns: 1fr;
      gap: 18px;
    }

    .architecture-flow {
      width: 1px;
      height: 32px;
      margin: 0 auto;
    }

    .architecture-flow span {
      top: auto;
      right: 50%;
      bottom: -1px;
      transform: translateX(50%);
    }

    .architecture-column {
      width: 100%;
    }

    .system-stack {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .architecture-core {
      min-height: 210px;
    }

    .trust-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      row-gap: 28px;
    }

    .trust-strip > div,
    .trust-strip > div:first-child,
    .trust-strip > div:last-child {
      padding: 0 22px 0 0;
      border-right: 1px solid var(--border);
    }

    .trust-strip > div:nth-child(even) {
      padding-right: 0;
      padding-left: 22px;
      border-right: 0;
    }

    .overview-layout {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .overview-heading h2 {
      max-width: 780px;
    }

    .overview-copy {
      max-width: 840px;
      padding-left: 0;
      border-left: 0;
    }

    .benefit-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .benefit-grid article,
    .benefit-grid article:first-child,
    .benefit-grid article:last-child {
      padding: 28px 24px;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .benefit-grid article:nth-child(even) {
      border-right: 0;
    }

    .benefit-grid article:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .featured-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .directory-heading,
    .connection-heading,
    .governance-heading {
      grid-template-columns: 1fr;
      align-items: start;
      gap: 18px;
    }

    .directory-heading > p,
    .connection-heading > p,
    .governance-heading > p {
      max-width: 820px;
    }

    .directory-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 28px;
    }

    .workflow-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .workflow-grid article,
    .workflow-grid article:nth-child(3n),
    .workflow-grid article:nth-child(3n + 2) {
      padding: 28px 24px 28px 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .workflow-grid article:nth-child(even) {
      padding-right: 0;
      padding-left: 24px;
      border-right: 0;
    }

    .workflow-grid article:nth-child(n + 4) {
      border-bottom: 1px solid var(--border);
    }

    .workflow-grid article:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .workflow-context {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .workflow-context-tags {
      justify-content: flex-start;
    }

    .use-case-list article {
      grid-template-columns: minmax(150px, 0.36fr) minmax(0, 1.64fr);
      gap: 28px;
    }

    .related-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .related-grid article,
    .related-grid article:nth-child(3n),
    .related-grid article:nth-child(3n + 2),
    .related-grid article:nth-child(n + 4) {
      min-height: 224px;
      padding: 28px 24px 28px 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .related-grid article:nth-child(even) {
      padding-right: 0;
      padding-left: 24px;
      border-right: 0;
    }

    .related-grid article:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .security-layout,
    .implementation-layout,
    .faq-layout {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .security-intro,
    .implementation-intro,
    .faq-intro {
      max-width: 820px;
    }

    .custom-panel,
    .final-cta-panel {
      grid-template-columns: 1fr;
      gap: 42px;
    }

    .custom-considerations {
      max-width: 760px;
    }

    .final-cta-actions {
      max-width: 420px;
    }
  }

  @media (max-width: 767px) {
    .shell {
      width: calc(100% - 40px);
    }

    .integrations-page {
      overflow-x: hidden;
    }

    .hero-inner {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .hero h1 {
      font-size: 38px;
      line-height: 1.1;
    }

    .hero-lead {
      font-size: 18px;
    }

    .hero-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .hero-actions .button {
      width: 100%;
    }

    .hero-architecture {
      margin-top: 40px;
      padding: 24px 20px;
      border-radius: 28px;
    }

    .system-stack {
      grid-template-columns: 1fr;
    }

    .architecture-core {
      min-height: 0;
      padding: 28px 22px;
      border-radius: 22px;
    }

    .architecture-core strong {
      font-size: 22px;
    }

    .trust-strip {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .trust-strip > div,
    .trust-strip > div:first-child,
    .trust-strip > div:last-child,
    .trust-strip > div:nth-child(even) {
      min-height: 92px;
      padding: 18px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .trust-strip > div:last-child {
      border-bottom: 0;
    }

    .overview-section,
    .featured-section,
    .directory-section,
    .connection-section,
    .workflow-section,
    .use-cases-section,
    .governance-section,
    .security-section,
    .implementation-section,
    .custom-section,
    .related-section,
    .faq-section,
    .final-cta-section {
      padding: 72px 0;
    }

    .section-heading h2,
    .overview-heading h2,
    .security-intro h2,
    .implementation-intro h2,
    .faq-intro h2,
    .final-cta-panel h2,
    .custom-copy h2 {
      font-size: 30px;
    }

    .section-heading > p:not(.eyebrow),
    .section-heading > div + p,
    .security-intro > p:not(.eyebrow),
    .implementation-intro > p:not(.eyebrow),
    .faq-intro > p:not(.eyebrow),
    .custom-copy > p:not(.eyebrow),
    .final-cta-panel p {
      font-size: 18px;
    }

    .overview-copy .overview-lead {
      font-size: 18px;
    }

    .benefit-grid {
      grid-template-columns: 1fr;
      margin-top: 38px;
      border-bottom: 0;
    }

    .benefit-grid article,
    .benefit-grid article:first-child,
    .benefit-grid article:last-child,
    .benefit-grid article:nth-child(even),
    .benefit-grid article:nth-last-child(-n + 2) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .benefit-grid article:last-child {
      border-bottom: 0;
    }

    .benefit-grid h3,
    .featured-card h3,
    .connection-matrix h3,
    .use-case-list h3,
    .governance-grid h3,
    .related-grid h3 {
      font-size: 20px;
    }

    .featured-grid {
      grid-template-columns: 1fr;
      margin-top: 38px;
    }

    .featured-card {
      min-height: 0;
      padding: 26px 22px;
      border-radius: 22px;
    }

    .featured-card-top {
      align-items: center;
    }

    .featured-card .category-label {
      max-width: 180px;
    }

    .featured-grid:not(.featured-grid-expanded) .featured-card:nth-child(n + 7) {
      display: none;
    }

    .featured-more {
      margin-top: 24px;
      display: flex;
    }

    .featured-more .button {
      width: 100%;
    }

    .directory-controls {
      padding: 18px;
      border-radius: 22px;
    }

    .filter-select-control {
      margin-top: 18px;
      display: block;
    }

    .filter-list {
      display: none;
    }

    .directory-meta {
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
    }

    .directory-grid {
      grid-template-columns: 1fr;
      column-gap: 0;
    }

    .directory-item {
      min-height: 0;
      padding: 26px 0;
    }

    .directory-grid:not(.directory-grid-expanded) .directory-item:nth-child(n + 9) {
      display: none;
    }

    .directory-empty {
      padding: 28px 22px;
    }

    .connection-matrix {
      grid-template-columns: 1fr;
      margin-top: 38px;
      border-bottom: 0;
    }

    .connection-matrix article,
    .connection-matrix article:nth-child(even),
    .connection-matrix article:nth-last-child(-n + 2) {
      min-height: 0;
      padding: 28px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .connection-matrix article:last-child {
      border-bottom: 0;
    }

    .workflow-grid {
      grid-template-columns: 1fr;
      margin-top: 38px;
      border-bottom: 0;
    }

    .workflow-grid article,
    .workflow-grid article:nth-child(3n),
    .workflow-grid article:nth-child(3n + 2),
    .workflow-grid article:nth-child(even),
    .workflow-grid article:nth-child(n + 4),
    .workflow-grid article:nth-last-child(-n + 2) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .workflow-grid article:last-child {
      border-bottom: 0;
    }

    .workflow-grid h3,
    .implementation-timeline h3,
    .security-panel h3 {
      font-size: 20px;
    }

    .workflow-context {
      padding: 24px 20px;
      border-radius: 22px;
    }

    .workflow-context-tags {
      align-items: stretch;
      flex-direction: column;
    }

    .workflow-context-tags span {
      border-radius: 12px;
    }

    .use-case-list article {
      min-height: 0;
      padding: 26px 0;
      grid-template-columns: 1fr;
      gap: 10px;
    }


    .governance-grid {
      grid-template-columns: 1fr;
      margin-top: 38px;
      border-bottom: 0;
    }

    .governance-grid article,
    .governance-grid article:nth-child(even),
    .governance-grid article:nth-last-child(-n + 2) {
      min-height: 0;
      padding: 28px 0;
      border-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.13);
    }

    .governance-grid article:last-child {
      border-bottom: 0;
    }

    .security-panel {
      padding: 6px 22px;
      border-radius: 24px;
    }

    .implementation-intro .button {
      width: 100%;
    }

    .implementation-timeline article {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 14px;
    }

    .timeline-marker span {
      width: 40px;
      height: 40px;
    }

    .custom-panel,
    .final-cta-panel {
      padding: 40px 24px;
      border-radius: 28px;
    }

    .custom-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .custom-actions .button {
      width: 100%;
    }

    .custom-considerations {
      padding: 24px 20px;
      border-radius: 22px;
    }

    .related-grid {
      grid-template-columns: 1fr;
      margin-top: 38px;
      border-bottom: 0;
    }

    .related-grid article,
    .related-grid article:nth-child(3n),
    .related-grid article:nth-child(3n + 2),
    .related-grid article:nth-child(n + 4) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .related-grid article:last-child {
      border-bottom: 0;
    }

    .faq-item h3 button {
      min-height: 72px;
      padding: 18px 0;
      gap: 18px;
      font-size: 17px;
    }

    .faq-answer {
      padding-right: 0;
    }

    .final-cta-actions {
      max-width: none;
    }

    .final-cta-actions .button {
      width: 100%;
    }
  }

  @media (max-width: 389px) {
    .hero-architecture {
      padding-right: 16px;
      padding-left: 16px;
    }

    .architecture-core {
      padding-right: 18px;
      padding-left: 18px;
    }

    .featured-card {
      padding-right: 18px;
      padding-left: 18px;
    }

    .featured-card-top {
      align-items: flex-start;
    }

    .featured-card .category-label {
      max-width: 150px;
    }

    .directory-item,
    .connection-matrix article,
    .governance-grid article {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: 13px;
    }

    .connection-icon,
    .governance-icon {
      width: 40px;
      height: 40px;
      border-radius: 14px;
    }

    .custom-panel,
    .final-cta-panel {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .integrations-page *,
    .integrations-page *::before,
    .integrations-page *::after {
      scroll-behavior: auto !important;
      transition: none !important;
    }
  }
`;
